-- TABLES --

CREATE TABLE public.export_log (
	datetime timestamp NULL,
	event_type varchar NULL,
	"comment" varchar NULL
);

CREATE TABLE public.geojson (
	id varchar NULL,
	"data" json NULL
);

CREATE TABLE public."user" (
	id varchar(255) NOT NULL DEFAULT ''::character varying,
	lastlogin date NULL,
	group_id varchar(255) NOT NULL DEFAULT ''::character varying,
	"mode" varchar(8) NOT NULL DEFAULT ''::character varying,
	active bool NOT NULL DEFAULT false,
	lasttime time NOT NULL DEFAULT '00:00:00'::time without time zone,
	date_created date NULL,
	date_left date NULL,
	"language" int4 NOT NULL DEFAULT 0,
	is_group bool NOT NULL DEFAULT false,
	license_category_id varchar(255) NOT NULL DEFAULT ''::character varying,
	tags jsonb NULL,
	"type" jsonb NULL,
	CONSTRAINT user_pkey PRIMARY KEY (id)
);
CREATE INDEX user_id ON public."user" USING btree (id);

-- VIEWS --

CREATE OR REPLACE VIEW public.store_mos
AS SELECT CURRENT_DATE AS "current_date",
    name.name AS store,
    a.value,
    name.latitude,
    name.longitude
   FROM store
     JOIN name ON store.name_id::text = name.id::text
     JOIN aggregator a ON store.id::text = a.storeid
  WHERE store.disabled = false AND a.dataelement = 'mos'::text;

CREATE OR REPLACE VIEW public.region_mos
AS SELECT current_date AS "time",
    region.description AS region,
    a.store,
    a.value,
    g.data AS geojson
FROM ( SELECT s.name AS store,
        s.id AS storeid,
        avg(a.value) AS value,
        s.name_id
       FROM aggregator a
        JOIN store s on a.storeid=s.id 
       WHERE a.dataelement = 'mos'
       GROUP BY s.name, s.id, s.name_id 
      ) a
 JOIN name n on a.name_id=n.id
 JOIN name_category1_level1 region ON n.category1_id = region.id
 join geojson g on region.id=g.id
order by region.description;

CREATE OR REPLACE VIEW public.store_transactions
AS select min(date_trunc('month', confirm_date)) as "date", s."name" as store, count(*) as "month", sum(case when t.confirm_date > current_date-7 then 1 else 0 end) as "week" 
	from store s
	left outer join transact t on s.id = t.store_id 
	where s.store_mode not in ('supervisor', 'his', 'drug_registration')
	and s.disabled = false
	and t.confirm_date > current_date-30
	and t.confirm_date <= CURRENT_DATE
	group by s."name"
    order by s."name";


-- FUNCTIONS --

CREATE OR REPLACE FUNCTION public.truncate_if_exists(tablename text)
 RETURNS void
 LANGUAGE plpgsql
AS $function$
begin
    perform 1
    from information_schema.tables 
    where table_name = tablename;
    if found then
        execute format('truncate %I', tablename);
    end if;
end $function$
;

CREATE OR REPLACE PROCEDURE public.aggregate_stock_status()
 LANGUAGE plpgsql
AS $procedure$
begin
	insert into aggregator (storeid, itemid, monthyear, value, fulldate, dataelement)
	select storeid, itemid, yearmonth, stockvalue / value, fulldate, 'mos'
	from (
		select stock.storeid, stock.itemid, concat(extract(year from stock.fulldate), extract(month from stock.fulldate)) as yearmonth, amc.value, date_trunc('month', stock.fulldate) as fulldate, SUM(stock.value) as stockvalue
		from aggregator stock
		 JOIN store on storeID = store.id 
		 LEFT JOIN aggregator amc on stock.itemid=amc.itemID AND stock.storeid = amc.storeid
		WHERE stock.dataElement = 'stockHistory'  AND store.disabled = False AND stock.value > 0
		 AND amc.dataElement = 'AMC'
		 AND amc.value > 0
		GROUP BY 1, 2, 3, 4, 5
	) as a	
	ORDER BY storeid, itemid;
end $procedure$
;


CREATE OR REPLACE PROCEDURE public.aggregate_total_stock()
 LANGUAGE plpgsql
AS $procedure$
declare
	yearmonth varchar := concat(extract(year from current_date), extract(month from current_date));
begin

	insert into aggregator (storeID, monthYear, value, fullDate, dataElement)
	select item_store_join.store_ID, yearmonth, SUM(item_line.cost_price*item_line.quantity), current_date, 'totalStockValue'
	from item_line
		join item on item_line.item_ID=item.ID
		join item_store_join on item_store_join.item_ID=item_line.item_ID and item_store_join.store_ID=item_line.store_ID
	where item_store_join.inactive=False
		and item_store_join.non_stock=False
		and item.type_of='general'
		and item_line.quantity>0
		and item_line.ID <> ''
	group by item_store_join.store_ID, yearmonth;

end $procedure$
;


CREATE OR REPLACE PROCEDURE custom_aggregations()
 LANGUAGE plpgsql
AS $$
begin

  call aggregate_total_stock();
  call public.aggregate_stock_status();
 
end $$
;

CREATE FUNCTION year_month(d date) RETURNS varchar AS $$
    select concat(extract(year from d), extract(month from d));
$$ LANGUAGE SQL;
;
