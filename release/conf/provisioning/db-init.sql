CREATE EXTENSION IF NOT EXISTS tablefunc;

-- TABLES --
CREATE TABLE IF NOT EXISTS public.aggregator (
	id serial,
	storeid text DEFAULT ''::text,
	itemid text DEFAULT ''::text,
	monthyear text DEFAULT ''::text,
	value float8 DEFAULT 0,
	fulldate date,
	dataelement text DEFAULT ''::text,
	temp1 float8 DEFAULT 0,
	temp2 float8 DEFAULT 0,
	temp3 float8 DEFAULT 0,
	CONSTRAINT aggregator_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.store (
	id varchar(255) DEFAULT ''::character varying,
	"name" varchar(50) DEFAULT ''::character varying,
	code varchar(20) DEFAULT ''::character varying,
	name_id varchar(255) DEFAULT ''::character varying,
	mwks_export_mode varchar(20) DEFAULT ''::character varying,
	is_his bool  DEFAULT false,
	sort_issues_by_status_spare bool DEFAULT false,
	disabled bool  DEFAULT false,
	responsible_user_id varchar(255) DEFAULT ''::character varying,
	organisation_name varchar(80) DEFAULT ''::character varying,
	address_1 varchar(80) DEFAULT ''::character varying,
	address_2 varchar(80) DEFAULT ''::character varying,
	logo bytea,
	sync_id_remote_site int4 DEFAULT 0,
	address_3 varchar(80) DEFAULT ''::character varying,
	address_4 varchar(80) DEFAULT ''::character varying,
	address_5 varchar(80) DEFAULT ''::character varying,
	postal_zip_code varchar(80) DEFAULT ''::character varying,
	store_mode text DEFAULT ''::text,
	phone text DEFAULT ''::text,
	tags text DEFAULT ''::text,
	spare_user_1 text DEFAULT ''::text,
	spare_user_2 text DEFAULT ''::text,
	spare_user_3 text DEFAULT ''::text,
	spare_user_4 text DEFAULT ''::text,
	spare_user_5 text DEFAULT ''::text,
	spare_user_6 text DEFAULT ''::text,
	spare_user_7 text DEFAULT ''::text,
	spare_user_8 text DEFAULT ''::text,
	spare_user_9 text DEFAULT ''::text,
	spare_user_10 text DEFAULT ''::text,
	spare_user_11 text DEFAULT ''::text,
	spare_user_12 text DEFAULT ''::text,
	spare_user_13 text DEFAULT ''::text,
	spare_user_14 text DEFAULT ''::text,
	spare_user_15 text DEFAULT ''::text,
	spare_user_16 text DEFAULT ''::text,
	custom_data jsonb,
	CONSTRAINT store_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS store_store_mode ON public.store USING btree (store_mode);
CREATE INDEX IF NOT EXISTS store_tags ON public.store USING btree (tags);

CREATE TABLE IF NOT EXISTS "name" (
	id varchar(255)  DEFAULT ''::character varying,
	"name" text DEFAULT ''::text,
	fax varchar(20) DEFAULT ''::character varying,
	phone varchar(22) DEFAULT ''::character varying,
	customer bool  DEFAULT false,
	bill_address1 varchar(50) DEFAULT ''::character varying,
	bill_address2 varchar(50) DEFAULT ''::character varying,
	supplier bool DEFAULT false,
	"charge code" varchar(20) DEFAULT ''::character varying,
	margin float8 DEFAULT 0,
	"comment" text DEFAULT ''::text,
	currency_id varchar(255) DEFAULT ''::character varying,
	country varchar(20) DEFAULT ''::character varying,
	freightfac float8 DEFAULT 0,
	email varchar(255) DEFAULT ''::character varying,
	custom1 varchar(40) DEFAULT ''::character varying,
	code varchar(20) DEFAULT ''::character varying,
	"last" text DEFAULT ''::text,
	"first" text DEFAULT ''::text,
	title varchar(5) DEFAULT ''::character varying,
	female bool DEFAULT false,
	date_of_birth date,
	overpayment float8 DEFAULT 0,
	group_id varchar(255) DEFAULT ''::character varying,
	"hold" bool DEFAULT false,
	ship_address1 varchar(50) DEFAULT ''::character varying,
	ship_address2 varchar(50) DEFAULT ''::character varying,
	url varchar(80) DEFAULT ''::character varying,
	barcode varchar(22) DEFAULT ''::character varying,
	postal_address1 varchar(50) DEFAULT ''::character varying,
	postal_address2 varchar(50) DEFAULT ''::character varying,
	category1_id varchar(255) DEFAULT ''::character varying,
	spare_sacho bytea,
	"type" text DEFAULT ''::text,
	price_category varchar(2) DEFAULT ''::character varying,
	flag varchar(8) DEFAULT ''::character varying,
	manufacturer bool DEFAULT false,
	print_invoice_alphabetical bool DEFAULT false,
	custom2 varchar(40) DEFAULT ''::character varying,
	custom3 varchar(40) DEFAULT ''::character varying,
	default_order_days int2 DEFAULT 0,
	connection_type int2 DEFAULT 0,
	patient_photo bytea,
	next_of_kin_id varchar(255) DEFAULT ''::character varying,
	pobox varchar(255) DEFAULT ''::character varying,
	zip int4 DEFAULT 0,
	middle text DEFAULT ''::text,
	preferred bool DEFAULT false,
	blood_group varchar(6) DEFAULT ''::character varying,
	marital_status varchar(10) DEFAULT ''::character varying,
	benchmark bool DEFAULT false,
	next_of_kin_relative varchar(20) DEFAULT ''::character varying,
	mother_id varchar(255) DEFAULT ''::character varying,
	postal_address3 varchar(50) DEFAULT ''::character varying,
	postal_address4 varchar(50) DEFAULT ''::character varying,
	bill_address3 varchar(50) DEFAULT ''::character varying,
	bill_address4 varchar(50) DEFAULT ''::character varying,
	ship_address3 varchar(50) DEFAULT ''::character varying,
	ship_address4 varchar(50) DEFAULT ''::character varying,
	ethnicity_id varchar(255) DEFAULT ''::character varying,
	occupation_id varchar(255) DEFAULT ''::character varying,
	religion_id varchar(255) DEFAULT ''::character varying,
	national_health_number varchar(40) DEFAULT ''::character varying,
	master_rtm_supplier_code int4 DEFAULT 0,
	ordering_method varchar(15) DEFAULT ''::character varying,
	donor bool DEFAULT false,
	latitude float8 DEFAULT 0,
	longitude float8 DEFAULT 0,
	master_rtm_supplier_name varchar(80) DEFAULT ''::character varying,
	category2_id varchar(255) DEFAULT ''::character varying,
	category3_id varchar(255) DEFAULT ''::character varying,
	category4_id varchar(255) DEFAULT ''::character varying,
	category5_id varchar(255) DEFAULT ''::character varying,
	category6_id varchar(255) DEFAULT ''::character varying,
	bill_address5 varchar(80) DEFAULT ''::character varying,
	bill_postal_zip_code varchar(80) DEFAULT ''::character varying,
	postal_address5 varchar(80) DEFAULT ''::character varying,
	postal_zip_code varchar(80) DEFAULT ''::character varying,
	ship_address5 varchar(80) DEFAULT ''::character varying,
	ship_postal_zip_code varchar(80) DEFAULT ''::character varying,
	supplying_store_id varchar(255) DEFAULT ''::character varying,
	license_number text DEFAULT ''::text,
	license_expiry date,
	has_current_license bool DEFAULT false,
	custom_data jsonb,
	CONSTRAINT name_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS name_category1_id ON public.name USING btree (category1_id);
CREATE INDEX IF NOT EXISTS name_category2_id ON public.name USING btree (category2_id);
CREATE INDEX IF NOT EXISTS name_category3_id ON public.name USING btree (category3_id);
CREATE INDEX IF NOT EXISTS name_category4_id ON public.name USING btree (category4_id);
CREATE INDEX IF NOT EXISTS name_category5_id ON public.name USING btree (category5_id);
CREATE INDEX IF NOT EXISTS name_category6_id ON public.name USING btree (category6_id);
CREATE INDEX IF NOT EXISTS name_code ON public.name USING btree (code);
CREATE INDEX IF NOT EXISTS name_customer ON public.name USING btree (customer);
CREATE INDEX IF NOT EXISTS name_donor ON public.name USING btree (donor);
CREATE INDEX IF NOT EXISTS name_ethnicity_id ON public.name USING btree (ethnicity_id);
CREATE INDEX IF NOT EXISTS name_first ON public.name USING btree (first);
CREATE INDEX IF NOT EXISTS name_group_id ON public.name USING btree (group_id);
CREATE INDEX IF NOT EXISTS name_last ON public.name USING btree (last);
CREATE INDEX IF NOT EXISTS name_manufacturer ON public.name USING btree (manufacturer);
CREATE INDEX IF NOT EXISTS name_master_rtm_supplier_code ON public.name USING btree (master_rtm_supplier_code);
CREATE INDEX IF NOT EXISTS name_mother_id ON public.name USING btree (mother_id);
CREATE INDEX IF NOT EXISTS name_name ON public.name USING btree (name);
CREATE INDEX IF NOT EXISTS name_next_of_kin_id ON public.name USING btree (next_of_kin_id);
CREATE INDEX IF NOT EXISTS name_occupation_id ON public.name USING btree (occupation_id);
CREATE INDEX IF NOT EXISTS name_religion_id ON public.name USING btree (religion_id);
CREATE INDEX IF NOT EXISTS name_supplier ON public.name USING btree (supplier);
CREATE INDEX IF NOT EXISTS name_type ON public.name USING btree (type);


CREATE TABLE IF NOT EXISTS name_category1_level1 (
	id varchar(255) DEFAULT ''::character varying,
	description varchar(50) DEFAULT ''::character varying,
	"type" varchar(2) DEFAULT ''::character varying,
	CONSTRAINT name_category1_level1_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS transact (
	name_id varchar(255) DEFAULT ''::character varying,
	id varchar(255) DEFAULT ''::character varying,
	invoice_num int4 DEFAULT 0,
	amount_outstanding float8 DEFAULT 0,
	"comment" text DEFAULT ''::text,
	entry_date date,
	"type" varchar(3) DEFAULT ''::character varying,
	status varchar(3) DEFAULT ''::character varying,
	total float8 DEFAULT 0,
	export_batch int4 DEFAULT 0,
	linked_transaction_id varchar(255) DEFAULT ''::character varying,
	their_ref varchar(80) DEFAULT ''::character varying,
	confirm_date date,
	service_descrip varchar(60) DEFAULT ''::character varying,
	service_price float8 DEFAULT 0,
	subtotal float8 DEFAULT 0,
	tax float8 DEFAULT 0,
	user_id varchar(255) DEFAULT ''::character varying,
	pickslip_printed_date date,
	prescriber_id varchar(255) DEFAULT ''::character varying,
	goods_received_id varchar(255) DEFAULT ''::character varying,
	invoice_printed_date date,
	ship_date date,
	ship_method_id varchar(255) DEFAULT ''::character varying,
	ship_method_comment varchar(80) DEFAULT ''::character varying,
	waybill_number varchar(50) DEFAULT ''::character varying,
	number_of_cartons int4 DEFAULT 0,
	arrival_date_estimated date,
	arrival_date_actual date,
	responsible_officer_id varchar(255) DEFAULT ''::character varying,
	"mode" varchar(255) DEFAULT ''::character varying,
	category_id varchar(255) DEFAULT ''::character varying,
	confirm_time time DEFAULT '00:00:00'::time without time zone,
	foreign_currency_total float8 DEFAULT 0,
	currency_id varchar(255) DEFAULT ''::character varying,
	"hold" bool DEFAULT false,
	currency_rate float8 DEFAULT 0,
	supplier_charge_fc float8 DEFAULT 0,
	local_charge_distributed float8 DEFAULT 0,
	budget_period_id varchar(255) DEFAULT ''::character varying,
	store_id varchar(255) DEFAULT ''::character varying,
	user1 varchar(50) DEFAULT ''::character varying,
	user2 varchar(50) DEFAULT ''::character varying,
	mwks_sequence_num int4 DEFAULT 0,
	is_cancellation bool DEFAULT false,
	user3 varchar(50) DEFAULT ''::character varying,
	user4 varchar(50) DEFAULT ''::character varying,
	colour int4 DEFAULT 0,
	original_po_id varchar(255) DEFAULT ''::character varying,
	donor_default_id varchar(255) DEFAULT ''::character varying,
	date_order_received date,
	date_order_written date,
	contact_id varchar(255) DEFAULT ''::character varying,
	encounter_id varchar(255) DEFAULT ''::character varying,
	is_authorised bool DEFAULT false,
	requisition_id varchar(255) DEFAULT ''::character varying,
	entry_time time DEFAULT '00:00:00'::time without time zone,
	linked_goods_received_id varchar(255) DEFAULT ''::character varying,
	authorisationstatus varchar(255) DEFAULT ''::character varying,
	nameinsurancejoinid varchar(255) DEFAULT ''::character varying,
	insurancediscountamount float8 DEFAULT 0,
	optionid varchar(255),
	insuranceDiscountRate float8,
	internalData jsonb,
	lastmodifiedat int8,
	custom_data jsonb NULL,
	CONSTRAINT transact_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS transact_amount_outstanding ON public.transact USING btree (amount_outstanding);
CREATE INDEX IF NOT EXISTS transact_budget_period_id ON public.transact USING btree (budget_period_id);
CREATE INDEX IF NOT EXISTS transact_category_id ON public.transact USING btree (category_id);
CREATE INDEX IF NOT EXISTS transact_confirm_date ON public.transact USING btree (confirm_date);
CREATE INDEX IF NOT EXISTS transact_donor_default_id ON public.transact USING btree (donor_default_id);
CREATE INDEX IF NOT EXISTS transact_entry_date ON public.transact USING btree (entry_date);
CREATE INDEX IF NOT EXISTS transact_goods_received_id ON public.transact USING btree (goods_received_id);
CREATE INDEX IF NOT EXISTS transact_invoice_num ON public.transact USING btree (invoice_num);
CREATE INDEX IF NOT EXISTS transact_linked_goods_received_id ON public.transact USING btree (linked_goods_received_id);
CREATE INDEX IF NOT EXISTS transact_linked_transaction_id ON public.transact USING btree (linked_transaction_id);
CREATE INDEX IF NOT EXISTS transact_mode ON public.transact USING btree (mode);
CREATE INDEX IF NOT EXISTS transact_name_id ON public.transact USING btree (name_id);
CREATE INDEX IF NOT EXISTS transact_nameinsurancejoinid ON public.transact USING btree (nameinsurancejoinid);
CREATE INDEX IF NOT EXISTS transact_original_po_id ON public.transact USING btree (original_po_id);
CREATE INDEX IF NOT EXISTS transact_prescriber_id ON public.transact USING btree (prescriber_id);
CREATE INDEX IF NOT EXISTS transact_requisition_id ON public.transact USING btree (requisition_id);
CREATE INDEX IF NOT EXISTS transact_ship_method_id ON public.transact USING btree (ship_method_id);
CREATE INDEX IF NOT EXISTS transact_status ON public.transact USING btree (status);
CREATE INDEX IF NOT EXISTS transact_store_id ON public.transact USING btree (store_id);
CREATE INDEX IF NOT EXISTS transact_type ON public.transact USING btree (type);
CREATE INDEX IF NOT EXISTS transact_user_id ON public.transact USING btree (user_id);


CREATE TABLE IF NOT EXISTS item (
	id varchar(255) DEFAULT ''::character varying,
	item_name varchar(80) DEFAULT ''::character varying,
	start_of_year_date date,
	manufacture_method text DEFAULT ''::text,
	default_pack_size float8 DEFAULT 0,
	dose_picture bytea,
	atc_category varchar(30) DEFAULT ''::character varying,
	medication_purpose text DEFAULT ''::text,
	instructions text DEFAULT ''::text,
	user_field_7 bool DEFAULT false,
	flags varchar(16) DEFAULT ''::character varying,
	ddd_value varchar(8) DEFAULT ''::character varying,
	code varchar(18) DEFAULT ''::character varying,
	other_names text DEFAULT ''::text,
	type_of text DEFAULT ''::text,
	price_editable bool DEFAULT false,
	margin float8 DEFAULT 0,
	barcode_spare text DEFAULT ''::text,
	spare_ignore_for_orders bool DEFAULT false,
	sms_pack_size float8 DEFAULT 0,
	expiry_date_mandatory bool DEFAULT false,
	volume_per_pack float8 DEFAULT 0,
	department_id varchar(255) DEFAULT ''::character varying,
	weight float8 DEFAULT 0,
	essential_drug_list bool DEFAULT false,
	catalogue_code varchar(20) DEFAULT ''::character varying,
	indic_price float8 DEFAULT 0,
	user_field_1 varchar(30) DEFAULT ''::character varying,
	spare_hold_for_issue bool DEFAULT false,
	builds_only bool DEFAULT false,
	reference_bom_quantity float8 DEFAULT 0,
	use_bill_of_materials bool DEFAULT false,
	description text DEFAULT ''::text,
	spare_hold_for_receive bool DEFAULT false,
	message text DEFAULT ''::text,
	interaction_group_id varchar(255) DEFAULT ''::character varying,
	spare_pack_to_one_on_receive bool DEFAULT false,
	cross_ref_item_id varchar(255) DEFAULT ''::character varying,
	spare_shelf_location_bulk varchar(20) DEFAULT ''::character varying,
	user_field_4 bool DEFAULT false,
	user_field_6 varchar(80) DEFAULT ''::character varying,
	spare_internal_analysis float8 DEFAULT 0,
	user_field_2 varchar(30) DEFAULT ''::character varying,
	user_field_3 varchar(30) DEFAULT ''::character varying,
	"ddd factor" float8 DEFAULT 0,
	account_stock_id varchar(255) DEFAULT ''::character varying,
	account_purchases_id varchar(255) DEFAULT ''::character varying,
	account_income_id varchar(255) DEFAULT ''::character varying,
	unit_id varchar(255) DEFAULT ''::character varying,
	outer_pack_size int4 DEFAULT 0,
	category_id varchar(255) DEFAULT ''::character varying,
	abc_category varchar(20) DEFAULT ''::character varying,
	warning_quantity int4 DEFAULT 0,
	user_field_5 float8 DEFAULT 0,
	print_units_in_dis_labels bool DEFAULT false,
	volume_per_outer_pack float8 DEFAULT 0,
	normal_stock bool DEFAULT false,
	critical_stock bool DEFAULT false,
	spare_non_stock bool DEFAULT false,
	non_stock_name_id varchar(255) DEFAULT ''::character varying,
	is_sync bool DEFAULT false,
	sms_code varchar(20) DEFAULT ''::character varying,
	category2_id varchar(255) DEFAULT ''::character varying,
	category3_id varchar(255) DEFAULT ''::character varying,
	buy_price float8 DEFAULT 0,
	ven_category text DEFAULT ''::text,
	universalcodes_code varchar(255) DEFAULT ''::character varying,
	universalcodes_name varchar(255) DEFAULT ''::character varying,
	kit_data jsonb,
	custom_data jsonb,
	CONSTRAINT item_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS item_catalogue_code ON public.item USING btree (catalogue_code);
CREATE INDEX IF NOT EXISTS item_category_id ON public.item USING btree (category_id);
CREATE INDEX IF NOT EXISTS item_code ON public.item USING btree (code);
CREATE INDEX IF NOT EXISTS item_department_id ON public.item USING btree (department_id);
CREATE INDEX IF NOT EXISTS item_flags ON public.item USING btree (flags);
CREATE INDEX IF NOT EXISTS item_interaction_group_id ON public.item USING btree (interaction_group_id);
CREATE INDEX IF NOT EXISTS item_item_name ON public.item USING btree (item_name);
CREATE INDEX IF NOT EXISTS item_other_names ON public.item USING btree (other_names);
CREATE INDEX IF NOT EXISTS item_unit_id ON public.item USING btree (unit_id);

CREATE TABLE IF NOT EXISTS item_line (
	store_id varchar(255) DEFAULT ''::character varying,
	item_id varchar(255) DEFAULT ''::character varying,
	pack_size float8 DEFAULT 0,
	expiry_date date,
	batch text DEFAULT ''::text,
	available float8 DEFAULT 0,
	spare_start_year_quan_tot float8 DEFAULT 0,
	cost_price float8 DEFAULT 0,
	sell_price float8 DEFAULT 0,
	"hold" bool DEFAULT false,
	initial_quan float8 DEFAULT 0,
	id varchar(255) DEFAULT ''::character varying,
	quantity float8 DEFAULT 0,
	name_id varchar(255) DEFAULT ''::character varying,
	manufacturer_id varchar(255) DEFAULT ''::character varying,
	location_id varchar(255) DEFAULT ''::character varying,
	volume_per_pack float8 DEFAULT 0,
	stock_on_hand_tot float8 DEFAULT 0,
	total_volume float8 DEFAULT 0,
	user_1 varchar(20) DEFAULT ''::character varying,
	user_2 varchar(20) DEFAULT ''::character varying,
	user_3 varchar(20) DEFAULT ''::character varying,
	user_4 varchar(40) DEFAULT ''::character varying,
	pack_quan_per_inner int4 DEFAULT 0,
	pack_inners_per_outer int4 DEFAULT 0,
	note text DEFAULT ''::text,
	vvm_status varchar(15) DEFAULT ''::character varying,
	donor_id varchar(255) DEFAULT ''::character varying,
	total_cost float8 DEFAULT 0,
	user_5_id varchar(255) DEFAULT ''::character varying,
	user_6_id varchar(255) DEFAULT ''::character varying,
	user_7_id varchar(255) DEFAULT ''::character varying,
	user_8_id varchar(255) DEFAULT ''::character varying,
	kit_data jsonb,
	barcodeid text DEFAULT ''::text,
	CONSTRAINT item_line_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS item_line_barcodeid ON public.item_line USING btree (barcodeid);
CREATE INDEX IF NOT EXISTS item_line_donor_id ON public.item_line USING btree (donor_id);
CREATE INDEX IF NOT EXISTS item_line_item_id ON public.item_line USING btree (item_id);
CREATE INDEX IF NOT EXISTS item_line_location_id ON public.item_line USING btree (location_id);
CREATE INDEX IF NOT EXISTS item_line_name_id ON public.item_line USING btree (name_id);
CREATE INDEX IF NOT EXISTS item_line_quantity ON public.item_line USING btree (quantity);
CREATE INDEX IF NOT EXISTS item_line_store_id ON public.item_line USING btree (store_id);
CREATE INDEX IF NOT EXISTS item_line_user_5_id ON public.item_line USING btree (user_5_id);
CREATE INDEX IF NOT EXISTS item_line_user_6_id ON public.item_line USING btree (user_6_id);
CREATE INDEX IF NOT EXISTS item_line_user_7_id ON public.item_line USING btree (user_7_id);
CREATE INDEX IF NOT EXISTS item_line_user_8_id ON public.item_line USING btree (user_8_id);

CREATE TABLE IF NOT EXISTS item_store_join (
	id varchar(255) DEFAULT ''::character varying,
	item_id varchar(255) DEFAULT ''::character varying,
	store_id varchar(255) DEFAULT ''::character varying,
	default_location_id varchar(255) DEFAULT ''::character varying,
	location_bulk_id varchar(255) DEFAULT ''::character varying,
	include_on_price_list bool DEFAULT false,
	indic_price float8 DEFAULT 0,
	report_quantity float8 DEFAULT 0,
	minimum_stock int4 DEFAULT 0,
	pack_to_one bool DEFAULT false,
	default_price float8 DEFAULT 0,
	hold_for_issue bool DEFAULT false,
	margin float8 DEFAULT 0,
	inactive bool DEFAULT false,
	pack_to_one_allow bool DEFAULT false,
	restricted_location_type_id varchar(255) DEFAULT ''::character varying,
	non_stock bool DEFAULT false,
	non_stock_name_id varchar(255) DEFAULT ''::character varying,
	forecast_method int4 DEFAULT 0,
	estimated_amc int4 DEFAULT 0,
	amc_modification_factor int4 DEFAULT 0,
	projection_for_calcs text DEFAULT ''::text,
	hold_for_receive bool DEFAULT false,
	ignore_for_orders bool DEFAULT false,
	CONSTRAINT item_store_join_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS item_store_join_default_location_id ON public.item_store_join USING btree (default_location_id);
CREATE INDEX IF NOT EXISTS item_store_join_inactive ON public.item_store_join USING btree (inactive);
CREATE INDEX IF NOT EXISTS item_store_join_item_id ON public.item_store_join USING btree (item_id);
CREATE INDEX IF NOT EXISTS item_store_join_location_bulk_id ON public.item_store_join USING btree (location_bulk_id);
CREATE INDEX IF NOT EXISTS item_store_join_store_id ON public.item_store_join USING btree (store_id);


CREATE TABLE IF NOT EXISTS export_log (
	id VARCHAR,
	datetime timestamp,
	start_timestamp INTEGER,
	end_timestamp INTEGER,
	event_type varchar,
	"comment" varchar
);

CREATE TABLE IF NOT EXISTS geojson (
	id varchar,
	"data" json,
	name varchar
);

CREATE TABLE IF NOT EXISTS "user" (
	id varchar(255) DEFAULT ''::character varying,
	lastlogin date,
	group_id varchar(255) DEFAULT ''::character varying,
	"mode" varchar(8) DEFAULT ''::character varying,
	active bool DEFAULT false,
	lasttime time DEFAULT '00:00:00'::time without time zone,
	date_created date,
	date_left date,
	"language" int4 DEFAULT 0,
	is_group bool DEFAULT false,
	license_category_id varchar(255) DEFAULT ''::character varying,
	tags jsonb,
	"type" jsonb,
	CONSTRAINT user_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS user_id ON "user" USING btree (id);

-- VIEWS --

/*
-- as you'll see below, these are now created after exporting --

CREATE OR REPLACE VIEW store_mos
AS SELECT CURRENT_DATE AS "current_date",
    name.name AS store,
    a.value,
    name.latitude,
    name.longitude
   FROM store
     JOIN name ON store.name_id::text = name.id::text
     JOIN aggregator a ON store.id::text = a.storeid
  WHERE store.disabled = false AND a.dataelement = 'mos'::text;

CREATE OR REPLACE VIEW region_mos
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

CREATE OR REPLACE VIEW store_transactions
AS select min(date_trunc('month', confirm_date)) as "date", s."name" as store, count(*) as "month", sum(case when t.confirm_date > current_date-7 then 1 else 0 end) as "week" 
	from store s
	left outer join transact t on s.id = t.store_id 
	where s.store_mode not in ('supervisor', 'his', 'drug_registration')
	and s.disabled = false
	and t.confirm_date > current_date-30
	and t.confirm_date <= CURRENT_DATE
	group by s."name"
    order by s."name";

*/

-- FUNCTIONS --
CREATE OR REPLACE FUNCTION year_month(d date) RETURNS varchar AS $$
    select concat(extract(year from d), extract(month from d));
$$ LANGUAGE SQL;
;

CREATE OR REPLACE FUNCTION truncate_if_exists(tablename text)
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

CREATE OR REPLACE PROCEDURE aggregate_stock_status()
 LANGUAGE plpgsql
AS $procedure$
begin
	delete from aggregator where dataelement = 'mos';

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


CREATE OR REPLACE PROCEDURE aggregate_total_stock()
 LANGUAGE plpgsql
AS $procedure$
declare
	yearmonth varchar := concat(extract(year from current_date), extract(month from current_date));
begin

	delete from aggregator where dataelement = 'totalStockValue';

	insert into aggregator (storeID, monthyear, value, fullDate, dataElement)
	select item_store_join.store_ID, yearmonth, SUM(item_line.cost_price*item_line.quantity), current_date, 'totalStockValue'
	from item_line
		join item on item_line.item_ID=item.ID
		join item_store_join on item_store_join.item_ID=item_line.item_ID and item_store_join.store_ID=item_line.store_ID
	where item_store_join.inactive=False
		and item_store_join.non_stock=False
		and item.type_of='general'
		and item_line.quantity>0
		and item_line.ID <> ''
	group by 1,2;

end $procedure$
;

CREATE OR REPLACE PROCEDURE public.aggregate_current_mos()
	LANGUAGE plpgsql
AS $$
	BEGIN
		delete from aggregator where dataElement = 'currentMOS';
		insert into aggregator (storeID, itemID, value, dataElement)
		select item_line.store_id, item_line.item_id, sum(item_line.available * item_line.pack_size) / max(aggregator.value), 'currentMOS' from
		item_line join aggregator on aggregator.itemID = item_line.item_id and aggregator.storeID = item_line.store_id and aggregator.dataElement = 'AMC'
		where item_line.available > 0 group by 1, 2 order by item_line.item_id, item_line.store_id;
		
		insert into aggregator (storeID, itemID, value, dataElement)
		select ag.store_id, ag.item_id, value, 'currentMOS' from (
		select item_line.store_id, item_line.item_id, sum(item_line.available * item_line.pack_size) as value from
		item_line  group by 1, 2) as ag
		where ag.value <= 0;
	END;
$$

CREATE OR REPLACE PROCEDURE public.aggregate_stock_value_movement()
	LANGUAGE plpgsql
AS $procedure$
	BEGIN
		delete from aggregator where dataElement = 'stockValueMovement';
		create temporary table temp_movement
		(
			storeid text,
			itemid text,
			fulldate date,
			stockin integer default 0,
			stockout integer default 0
		)
		on commit drop;
	
		insert into temp_movement (storeid, itemid, fulldate, stockout)
		select t.store_ID, tl.item_ID, t.confirm_date, sum(tl.quantity * cost_price )
		from trans_line tl
			join transact t on tl.transaction_ID = t.ID
		where t."type" in('ci', 'sc') 
			and t.status in('fn', 'cn')
			and tl.type in('stock_out') -- add 'placeholder' to include placeholder lines
			and t.confirm_date >= (current_date - date_part('day', current_date)::integer + 1 - interval '12 month')
		group by 1,2,3;
	
		insert into temp_movement (storeid, itemid, fulldate, stockin)
		select t.store_ID, tl.item_ID, t.confirm_date, sum(tl.quantity * cost_price )
		from trans_line tl
			join transact t on tl.transaction_ID = t.ID
		where t."type" in ('si') 
			and t.status in('fn', 'cn')
			and tl.type in('stock_in') -- add 'placeholder' to include placeholder lines
			and t.confirm_date >= (current_date - date_part('day', current_date)::integer + 1 - interval '12 month')
		group by 1,2,3;
	
		insert into aggregator(storeID, itemID, fullDate, dataElement, value)
		(
			select storeID, itemID, fullDate, 'stockValueMovement', sum(stockin)-sum(stockout)
			from temp_movement
			group by 1,2,3,4
		);
		drop table temp_movement;
	END;
$procedure$

CREATE OR REPLACE PROCEDURE public.aggregate_stock_value_history()
	LANGUAGE plpgsql
AS $procedure$
	BEGIN
		delete from aggregator where dataelement = 'stockValueHistory';

		with stock_value_current as 
		-- get the current stock value
		(
			select store_id storeid, item_id itemid, current_date - date_part('day', current_date)::integer + 1 - interval '12 months' fulldate, sum(cost_price * quantity) as value
			from item_line where quantity <> 0
			group by 1,2
		), movements as
		-- get all transition dates for a given store/item combination 
		(
			select storeid, itemid, fulldate, value
			from aggregator
			where dataelement = 'stockValueMovement' and fulldate >  current_date - date_part('day', current_date)::integer + 1 - interval '12 months'
			union
			select storeid, itemid, fulldate, 0
			from stock_value_current
		)
		insert into aggregator (storeID, itemID, fullDate, dataElement, value)
		select m.storeid, m.itemid, m.fulldate, 'stockValueHistory', svc.value-sum(coalesce(m_sum.value,0))
		from movements m
			left join movements m_sum on m.storeid = m_sum.storeid and m.itemid = m_sum.itemid and m_sum.fulldate >m.fulldate
			join stock_value_current svc on m.storeid = svc.storeid and m.itemid = svc.itemid
		group by 1,2,3,4,svc.value
		union
		select storeid, itemid, current_date, 'stockValueHistory', value 
		from stock_value_current;
	END;
$procedure$


CREATE OR REPLACE PROCEDURE custom_aggregations()
 LANGUAGE plpgsql
AS $$
begin

  perform setval('aggregator_id_seq', (select 1+max(id) from aggregator));
  call aggregate_total_stock();
  call aggregate_stock_status();
  call aggregate_current_mos();
  call aggregate_stock_value_movement();
  call aggregate_stock_value_history();
 
end $$
;

CREATE OR REPLACE PROCEDURE public.pre_export()
 LANGUAGE sql
AS $procedure$ 	
DROP VIEW IF EXISTS public.region_mos;
DROP VIEW IF EXISTS public.store_mos; 
DROP VIEW IF EXISTS public.store_transactions; 
 $procedure$
;

CREATE OR REPLACE PROCEDURE public.post_export()
 LANGUAGE sql
AS $procedure$ 	
CREATE OR REPLACE VIEW public.region_mos
AS SELECT CURRENT_DATE AS "time",
    region.description AS region,
    a.store,
    a.value,
    g.data AS geojson
   FROM ( SELECT s.name AS store,
            s.id AS storeid,
            avg(a_1.value) AS value,
            s.name_id
           FROM aggregator a_1
             JOIN store s ON a_1.storeid = s.id::text
          WHERE a_1.dataelement = 'mos'::text
          GROUP BY s.name, s.id, s.name_id) a
     JOIN name n ON a.name_id::text = n.id::text
     JOIN name_category1 region ON n.category1_id::text = region.id::text
     JOIN geojson g ON region.id::text = g.id::text
  ORDER BY region.description;
  
CREATE OR REPLACE VIEW public.store_mos
AS SELECT (CURRENT_DATE - interval '1 day')::date AS "current_date",
    name.name AS store,
    a.value,
    name.latitude,
    name.longitude,
    i.item_name AS item
   FROM store
     JOIN name ON store.name_id::text = name.id::text
     JOIN aggregator a ON store.id::text = a.storeid
     JOIN item i ON a.itemid = i.id::text
  WHERE store.disabled = false AND a.dataelement = 'mos'::text;


CREATE OR REPLACE VIEW public.store_transactions AS
with stores as (
  select id, name as store
  from store
  where (store_mode <> ALL (ARRAY['supervisor', 'his', 'drug_registration'])) 
   and disabled = false 
), transactions as (
  select t.store_id, 
    date_trunc('month', t.confirm_date::timestamp with time zone) confirm_date, 
    1  "month", 
    case when confirm_date > (CURRENT_DATE - 7) then 1 else 0 end "week"
  from transact t
  where t.confirm_date > (CURRENT_DATE - 30) 
    and t.confirm_date <= CURRENT_DATE
)
SELECT min(confirm_date) AS date,
    store,
    coalesce(sum(month), 0) AS month,
    coalesce(sum(week), 0) AS week
  FROM stores s
  LEFT JOIN transactions ON id = store_id
  GROUP BY store
  ORDER BY store;

 $procedure$
;

/*
GRANT USAGE ON schema public TO dboard;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO dboard;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO dboard;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO dboard;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT EXECUTE ON FUNCTIONS TO dboard;
*/

/*
ALTER DEFAULT PRIVILEGES IN SCHEMA PUBLIC GRANT INSERT ON TABLES TO dboard;
ALTER DEFAULT PRIVILEGES IN SCHEMA PUBLIC GRANT UPDATE ON TABLES TO dboard;
ALTER DEFAULT PRIVILEGES IN SCHEMA PUBLIC GRANT DELETE ON TABLES TO dboard;
ALTER DEFAULT PRIVILEGES IN SCHEMA PUBLIC GRANT TRUNCATE ON TABLES TO dboard;
GRANT CREATE ON DATABASE dashboard TO dboard;
GRANT SELECT ON ALL TABLES IN SCHEMA PUBLIC TO dboard;
GRANT INSERT ON ALL TABLES IN SCHEMA PUBLIC TO dboard;
GRANT UPDATE ON ALL TABLES IN SCHEMA PUBLIC TO dboard;
GRANT TRUNCATE ON ALL TABLES IN SCHEMA PUBLIC TO dboard;
GRANT DELETE ON ALL TABLES IN SCHEMA PUBLIC TO dboard;
**/

