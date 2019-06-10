-- TABLES --
CREATE TABLE IF NOT EXISTS public.aggregator (
	id serial NOT NULL,
	storeid text NOT NULL DEFAULT ''::text,
	itemid text NOT NULL DEFAULT ''::text,
	monthyear text NOT NULL DEFAULT ''::text,
	value float8 NOT NULL DEFAULT 0,
	fulldate date NULL,
	dataelement text NOT NULL DEFAULT ''::text,
	temp1 float8 NOT NULL DEFAULT 0,
	temp2 float8 NOT NULL DEFAULT 0,
	temp3 float8 NOT NULL DEFAULT 0,
	CONSTRAINT aggregator_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.store (
	id varchar(255) NOT NULL DEFAULT ''::character varying,
	"name" varchar(50) NOT NULL DEFAULT ''::character varying,
	code varchar(20) NOT NULL DEFAULT ''::character varying,
	name_id varchar(255) NOT NULL DEFAULT ''::character varying,
	mwks_export_mode varchar(20) NOT NULL DEFAULT ''::character varying,
	is_his bool NOT NULL DEFAULT false,
	sort_issues_by_status_spare bool NOT NULL DEFAULT false,
	disabled bool NOT NULL DEFAULT false,
	responsible_user_id varchar(255) NOT NULL DEFAULT ''::character varying,
	organisation_name varchar(80) NOT NULL DEFAULT ''::character varying,
	address_1 varchar(80) NOT NULL DEFAULT ''::character varying,
	address_2 varchar(80) NOT NULL DEFAULT ''::character varying,
	logo bytea NULL,
	sync_id_remote_site int4 NOT NULL DEFAULT 0,
	address_3 varchar(80) NOT NULL DEFAULT ''::character varying,
	address_4 varchar(80) NOT NULL DEFAULT ''::character varying,
	address_5 varchar(80) NOT NULL DEFAULT ''::character varying,
	postal_zip_code varchar(80) NOT NULL DEFAULT ''::character varying,
	store_mode text NOT NULL DEFAULT ''::text,
	phone text NOT NULL DEFAULT ''::text,
	tags text NOT NULL DEFAULT ''::text,
	spare_user_1 text NOT NULL DEFAULT ''::text,
	spare_user_2 text NOT NULL DEFAULT ''::text,
	spare_user_3 text NOT NULL DEFAULT ''::text,
	spare_user_4 text NOT NULL DEFAULT ''::text,
	spare_user_5 text NOT NULL DEFAULT ''::text,
	spare_user_6 text NOT NULL DEFAULT ''::text,
	spare_user_7 text NOT NULL DEFAULT ''::text,
	spare_user_8 text NOT NULL DEFAULT ''::text,
	spare_user_9 text NOT NULL DEFAULT ''::text,
	spare_user_10 text NOT NULL DEFAULT ''::text,
	spare_user_11 text NOT NULL DEFAULT ''::text,
	spare_user_12 text NOT NULL DEFAULT ''::text,
	spare_user_13 text NOT NULL DEFAULT ''::text,
	spare_user_14 text NOT NULL DEFAULT ''::text,
	spare_user_15 text NOT NULL DEFAULT ''::text,
	spare_user_16 text NOT NULL DEFAULT ''::text,
	custom_data jsonb NULL,
	CONSTRAINT store_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS store_store_mode ON public.store USING btree (store_mode);
CREATE INDEX IF NOT EXISTS store_tags ON public.store USING btree (tags);

CREATE TABLE IF NOT EXISTS "name" (
	id varchar(255) NOT NULL DEFAULT ''::character varying,
	"name" text NOT NULL DEFAULT ''::text,
	fax varchar(20) NOT NULL DEFAULT ''::character varying,
	phone varchar(22) NOT NULL DEFAULT ''::character varying,
	customer bool NOT NULL DEFAULT false,
	bill_address1 varchar(50) NOT NULL DEFAULT ''::character varying,
	bill_address2 varchar(50) NOT NULL DEFAULT ''::character varying,
	supplier bool NOT NULL DEFAULT false,
	"charge code" varchar(20) NOT NULL DEFAULT ''::character varying,
	margin float8 NOT NULL DEFAULT 0,
	"comment" text NOT NULL DEFAULT ''::text,
	currency_id varchar(255) NOT NULL DEFAULT ''::character varying,
	country varchar(20) NOT NULL DEFAULT ''::character varying,
	freightfac float8 NOT NULL DEFAULT 0,
	email varchar(255) NOT NULL DEFAULT ''::character varying,
	custom1 varchar(40) NOT NULL DEFAULT ''::character varying,
	code varchar(20) NOT NULL DEFAULT ''::character varying,
	"last" text NOT NULL DEFAULT ''::text,
	"first" text NOT NULL DEFAULT ''::text,
	title varchar(5) NOT NULL DEFAULT ''::character varying,
	female bool NOT NULL DEFAULT false,
	date_of_birth date NULL,
	overpayment float8 NOT NULL DEFAULT 0,
	group_id varchar(255) NOT NULL DEFAULT ''::character varying,
	"hold" bool NOT NULL DEFAULT false,
	ship_address1 varchar(50) NOT NULL DEFAULT ''::character varying,
	ship_address2 varchar(50) NOT NULL DEFAULT ''::character varying,
	url varchar(80) NOT NULL DEFAULT ''::character varying,
	barcode varchar(22) NOT NULL DEFAULT ''::character varying,
	postal_address1 varchar(50) NOT NULL DEFAULT ''::character varying,
	postal_address2 varchar(50) NOT NULL DEFAULT ''::character varying,
	category1_id varchar(255) NOT NULL DEFAULT ''::character varying,
	spare_sacho bytea NULL,
	"type" text NOT NULL DEFAULT ''::text,
	price_category varchar(2) NOT NULL DEFAULT ''::character varying,
	flag varchar(8) NOT NULL DEFAULT ''::character varying,
	manufacturer bool NOT NULL DEFAULT false,
	print_invoice_alphabetical bool NOT NULL DEFAULT false,
	custom2 varchar(40) NOT NULL DEFAULT ''::character varying,
	custom3 varchar(40) NOT NULL DEFAULT ''::character varying,
	default_order_days int2 NOT NULL DEFAULT 0,
	connection_type int2 NOT NULL DEFAULT 0,
	patient_photo bytea NULL,
	next_of_kin_id varchar(255) NOT NULL DEFAULT ''::character varying,
	pobox varchar(255) NOT NULL DEFAULT ''::character varying,
	zip int4 NOT NULL DEFAULT 0,
	middle text NOT NULL DEFAULT ''::text,
	preferred bool NOT NULL DEFAULT false,
	blood_group varchar(6) NOT NULL DEFAULT ''::character varying,
	marital_status varchar(10) NOT NULL DEFAULT ''::character varying,
	benchmark bool NOT NULL DEFAULT false,
	next_of_kin_relative varchar(20) NOT NULL DEFAULT ''::character varying,
	mother_id varchar(255) NOT NULL DEFAULT ''::character varying,
	postal_address3 varchar(50) NOT NULL DEFAULT ''::character varying,
	postal_address4 varchar(50) NOT NULL DEFAULT ''::character varying,
	bill_address3 varchar(50) NOT NULL DEFAULT ''::character varying,
	bill_address4 varchar(50) NOT NULL DEFAULT ''::character varying,
	ship_address3 varchar(50) NOT NULL DEFAULT ''::character varying,
	ship_address4 varchar(50) NOT NULL DEFAULT ''::character varying,
	ethnicity_id varchar(255) NOT NULL DEFAULT ''::character varying,
	occupation_id varchar(255) NOT NULL DEFAULT ''::character varying,
	religion_id varchar(255) NOT NULL DEFAULT ''::character varying,
	national_health_number varchar(40) NOT NULL DEFAULT ''::character varying,
	master_rtm_supplier_code int4 NOT NULL DEFAULT 0,
	ordering_method varchar(15) NOT NULL DEFAULT ''::character varying,
	donor bool NOT NULL DEFAULT false,
	latitude float8 NOT NULL DEFAULT 0,
	longitude float8 NOT NULL DEFAULT 0,
	master_rtm_supplier_name varchar(80) NOT NULL DEFAULT ''::character varying,
	category2_id varchar(255) NOT NULL DEFAULT ''::character varying,
	category3_id varchar(255) NOT NULL DEFAULT ''::character varying,
	category4_id varchar(255) NOT NULL DEFAULT ''::character varying,
	category5_id varchar(255) NOT NULL DEFAULT ''::character varying,
	category6_id varchar(255) NOT NULL DEFAULT ''::character varying,
	bill_address5 varchar(80) NOT NULL DEFAULT ''::character varying,
	bill_postal_zip_code varchar(80) NOT NULL DEFAULT ''::character varying,
	postal_address5 varchar(80) NOT NULL DEFAULT ''::character varying,
	postal_zip_code varchar(80) NOT NULL DEFAULT ''::character varying,
	ship_address5 varchar(80) NOT NULL DEFAULT ''::character varying,
	ship_postal_zip_code varchar(80) NOT NULL DEFAULT ''::character varying,
	supplying_store_id varchar(255) NOT NULL DEFAULT ''::character varying,
	license_number text NOT NULL DEFAULT ''::text,
	license_expiry date NULL,
	has_current_license bool NOT NULL DEFAULT false,
	custom_data jsonb NULL,
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
	id varchar(255) NOT NULL DEFAULT ''::character varying,
	description varchar(50) NOT NULL DEFAULT ''::character varying,
	"type" varchar(2) NOT NULL DEFAULT ''::character varying,
	CONSTRAINT name_category1_level1_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS transact (
	name_id varchar(255) NOT NULL DEFAULT ''::character varying,
	id varchar(255) NOT NULL DEFAULT ''::character varying,
	invoice_num int4 NOT NULL DEFAULT 0,
	amount_outstanding float8 NOT NULL DEFAULT 0,
	"comment" text NOT NULL DEFAULT ''::text,
	entry_date date NULL,
	"type" varchar(3) NOT NULL DEFAULT ''::character varying,
	status varchar(3) NOT NULL DEFAULT ''::character varying,
	total float8 NOT NULL DEFAULT 0,
	export_batch int4 NOT NULL DEFAULT 0,
	linked_transaction_id varchar(255) NOT NULL DEFAULT ''::character varying,
	their_ref varchar(80) NOT NULL DEFAULT ''::character varying,
	confirm_date date NULL,
	service_descrip varchar(60) NOT NULL DEFAULT ''::character varying,
	service_price float8 NOT NULL DEFAULT 0,
	subtotal float8 NOT NULL DEFAULT 0,
	tax float8 NOT NULL DEFAULT 0,
	user_id varchar(255) NOT NULL DEFAULT ''::character varying,
	pickslip_printed_date date NULL,
	prescriber_id varchar(255) NOT NULL DEFAULT ''::character varying,
	goods_received_id varchar(255) NOT NULL DEFAULT ''::character varying,
	invoice_printed_date date NULL,
	ship_date date NULL,
	ship_method_id varchar(255) NOT NULL DEFAULT ''::character varying,
	ship_method_comment varchar(80) NOT NULL DEFAULT ''::character varying,
	waybill_number varchar(50) NOT NULL DEFAULT ''::character varying,
	number_of_cartons int4 NOT NULL DEFAULT 0,
	arrival_date_estimated date NULL,
	arrival_date_actual date NULL,
	responsible_officer_id varchar(255) NOT NULL DEFAULT ''::character varying,
	"mode" varchar(255) NOT NULL DEFAULT ''::character varying,
	category_id varchar(255) NOT NULL DEFAULT ''::character varying,
	confirm_time time NOT NULL DEFAULT '00:00:00'::time without time zone,
	foreign_currency_total float8 NOT NULL DEFAULT 0,
	currency_id varchar(255) NOT NULL DEFAULT ''::character varying,
	"hold" bool NOT NULL DEFAULT false,
	currency_rate float8 NOT NULL DEFAULT 0,
	supplier_charge_fc float8 NOT NULL DEFAULT 0,
	local_charge_distributed float8 NOT NULL DEFAULT 0,
	budget_period_id varchar(255) NOT NULL DEFAULT ''::character varying,
	store_id varchar(255) NOT NULL DEFAULT ''::character varying,
	user1 varchar(50) NOT NULL DEFAULT ''::character varying,
	user2 varchar(50) NOT NULL DEFAULT ''::character varying,
	mwks_sequence_num int4 NOT NULL DEFAULT 0,
	is_cancellation bool NOT NULL DEFAULT false,
	user3 varchar(50) NOT NULL DEFAULT ''::character varying,
	user4 varchar(50) NOT NULL DEFAULT ''::character varying,
	colour int4 NOT NULL DEFAULT 0,
	original_po_id varchar(255) NOT NULL DEFAULT ''::character varying,
	donor_default_id varchar(255) NOT NULL DEFAULT ''::character varying,
	date_order_received date NULL,
	date_order_written date NULL,
	contact_id varchar(255) NOT NULL DEFAULT ''::character varying,
	encounter_id varchar(255) NOT NULL DEFAULT ''::character varying,
	is_authorised bool NOT NULL DEFAULT false,
	requisition_id varchar(255) NOT NULL DEFAULT ''::character varying,
	entry_time time NOT NULL DEFAULT '00:00:00'::time without time zone,
	linked_goods_received_id varchar(255) NOT NULL DEFAULT ''::character varying,
	authorisationstatus varchar(255) NOT NULL DEFAULT ''::character varying,
	nameinsurancejoinid varchar(255) NOT NULL DEFAULT ''::character varying,
	insurancediscountamount float8 NOT NULL DEFAULT 0,
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
	id varchar(255) NOT NULL DEFAULT ''::character varying,
	item_name varchar(80) NOT NULL DEFAULT ''::character varying,
	start_of_year_date date NULL,
	manufacture_method text NOT NULL DEFAULT ''::text,
	default_pack_size float8 NOT NULL DEFAULT 0,
	dose_picture bytea NULL,
	atc_category varchar(30) NOT NULL DEFAULT ''::character varying,
	medication_purpose text NOT NULL DEFAULT ''::text,
	instructions text NOT NULL DEFAULT ''::text,
	user_field_7 bool NOT NULL DEFAULT false,
	flags varchar(16) NOT NULL DEFAULT ''::character varying,
	ddd_value varchar(8) NOT NULL DEFAULT ''::character varying,
	code varchar(18) NOT NULL DEFAULT ''::character varying,
	other_names text NOT NULL DEFAULT ''::text,
	type_of text NOT NULL DEFAULT ''::text,
	price_editable bool NOT NULL DEFAULT false,
	margin float8 NOT NULL DEFAULT 0,
	barcode_spare text NOT NULL DEFAULT ''::text,
	spare_ignore_for_orders bool NOT NULL DEFAULT false,
	sms_pack_size float8 NOT NULL DEFAULT 0,
	expiry_date_mandatory bool NOT NULL DEFAULT false,
	volume_per_pack float8 NOT NULL DEFAULT 0,
	department_id varchar(255) NOT NULL DEFAULT ''::character varying,
	weight float8 NOT NULL DEFAULT 0,
	essential_drug_list bool NOT NULL DEFAULT false,
	catalogue_code varchar(20) NOT NULL DEFAULT ''::character varying,
	indic_price float8 NOT NULL DEFAULT 0,
	user_field_1 varchar(30) NOT NULL DEFAULT ''::character varying,
	spare_hold_for_issue bool NOT NULL DEFAULT false,
	builds_only bool NOT NULL DEFAULT false,
	reference_bom_quantity float8 NOT NULL DEFAULT 0,
	use_bill_of_materials bool NOT NULL DEFAULT false,
	description text NOT NULL DEFAULT ''::text,
	spare_hold_for_receive bool NOT NULL DEFAULT false,
	message text NOT NULL DEFAULT ''::text,
	interaction_group_id varchar(255) NOT NULL DEFAULT ''::character varying,
	spare_pack_to_one_on_receive bool NOT NULL DEFAULT false,
	cross_ref_item_id varchar(255) NOT NULL DEFAULT ''::character varying,
	spare_shelf_location_bulk varchar(20) NOT NULL DEFAULT ''::character varying,
	user_field_4 bool NOT NULL DEFAULT false,
	user_field_6 varchar(80) NOT NULL DEFAULT ''::character varying,
	spare_internal_analysis float8 NOT NULL DEFAULT 0,
	user_field_2 varchar(30) NOT NULL DEFAULT ''::character varying,
	user_field_3 varchar(30) NOT NULL DEFAULT ''::character varying,
	"ddd factor" float8 NOT NULL DEFAULT 0,
	account_stock_id varchar(255) NOT NULL DEFAULT ''::character varying,
	account_purchases_id varchar(255) NOT NULL DEFAULT ''::character varying,
	account_income_id varchar(255) NOT NULL DEFAULT ''::character varying,
	unit_id varchar(255) NOT NULL DEFAULT ''::character varying,
	outer_pack_size int4 NOT NULL DEFAULT 0,
	category_id varchar(255) NOT NULL DEFAULT ''::character varying,
	abc_category varchar(20) NOT NULL DEFAULT ''::character varying,
	warning_quantity int4 NOT NULL DEFAULT 0,
	user_field_5 float8 NOT NULL DEFAULT 0,
	print_units_in_dis_labels bool NOT NULL DEFAULT false,
	volume_per_outer_pack float8 NOT NULL DEFAULT 0,
	normal_stock bool NOT NULL DEFAULT false,
	critical_stock bool NOT NULL DEFAULT false,
	spare_non_stock bool NOT NULL DEFAULT false,
	non_stock_name_id varchar(255) NOT NULL DEFAULT ''::character varying,
	is_sync bool NOT NULL DEFAULT false,
	sms_code varchar(20) NOT NULL DEFAULT ''::character varying,
	category2_id varchar(255) NOT NULL DEFAULT ''::character varying,
	category3_id varchar(255) NOT NULL DEFAULT ''::character varying,
	buy_price float8 NOT NULL DEFAULT 0,
	ven_category text NOT NULL DEFAULT ''::text,
	universalcodes_code varchar(255) NOT NULL DEFAULT ''::character varying,
	universalcodes_name varchar(255) NOT NULL DEFAULT ''::character varying,
	kit_data jsonb NULL,
	custom_data jsonb NULL,
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
	store_id varchar(255) NOT NULL DEFAULT ''::character varying,
	item_id varchar(255) NOT NULL DEFAULT ''::character varying,
	pack_size float8 NOT NULL DEFAULT 0,
	expiry_date date NULL,
	batch text NOT NULL DEFAULT ''::text,
	available float8 NOT NULL DEFAULT 0,
	spare_start_year_quan_tot float8 NOT NULL DEFAULT 0,
	cost_price float8 NOT NULL DEFAULT 0,
	sell_price float8 NOT NULL DEFAULT 0,
	"hold" bool NOT NULL DEFAULT false,
	initial_quan float8 NOT NULL DEFAULT 0,
	id varchar(255) NOT NULL DEFAULT ''::character varying,
	quantity float8 NOT NULL DEFAULT 0,
	name_id varchar(255) NOT NULL DEFAULT ''::character varying,
	manufacturer_id varchar(255) NOT NULL DEFAULT ''::character varying,
	location_id varchar(255) NOT NULL DEFAULT ''::character varying,
	volume_per_pack float8 NOT NULL DEFAULT 0,
	stock_on_hand_tot float8 NOT NULL DEFAULT 0,
	total_volume float8 NOT NULL DEFAULT 0,
	user_1 varchar(20) NOT NULL DEFAULT ''::character varying,
	user_2 varchar(20) NOT NULL DEFAULT ''::character varying,
	user_3 varchar(20) NOT NULL DEFAULT ''::character varying,
	user_4 varchar(40) NOT NULL DEFAULT ''::character varying,
	pack_quan_per_inner int4 NOT NULL DEFAULT 0,
	pack_inners_per_outer int4 NOT NULL DEFAULT 0,
	note text NOT NULL DEFAULT ''::text,
	vvm_status varchar(15) NOT NULL DEFAULT ''::character varying,
	donor_id varchar(255) NOT NULL DEFAULT ''::character varying,
	total_cost float8 NOT NULL DEFAULT 0,
	user_5_id varchar(255) NOT NULL DEFAULT ''::character varying,
	user_6_id varchar(255) NOT NULL DEFAULT ''::character varying,
	user_7_id varchar(255) NOT NULL DEFAULT ''::character varying,
	user_8_id varchar(255) NOT NULL DEFAULT ''::character varying,
	kit_data jsonb NULL,
	barcodeid text NOT NULL DEFAULT ''::text,
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
	id varchar(255) NOT NULL DEFAULT ''::character varying,
	item_id varchar(255) NOT NULL DEFAULT ''::character varying,
	store_id varchar(255) NOT NULL DEFAULT ''::character varying,
	default_location_id varchar(255) NOT NULL DEFAULT ''::character varying,
	location_bulk_id varchar(255) NOT NULL DEFAULT ''::character varying,
	include_on_price_list bool NOT NULL DEFAULT false,
	indic_price float8 NOT NULL DEFAULT 0,
	report_quantity float8 NOT NULL DEFAULT 0,
	minimum_stock int4 NOT NULL DEFAULT 0,
	pack_to_one bool NOT NULL DEFAULT false,
	default_price float8 NOT NULL DEFAULT 0,
	hold_for_issue bool NOT NULL DEFAULT false,
	margin float8 NOT NULL DEFAULT 0,
	inactive bool NOT NULL DEFAULT false,
	pack_to_one_allow bool NOT NULL DEFAULT false,
	restricted_location_type_id varchar(255) NOT NULL DEFAULT ''::character varying,
	non_stock bool NOT NULL DEFAULT false,
	non_stock_name_id varchar(255) NOT NULL DEFAULT ''::character varying,
	forecast_method int4 NOT NULL DEFAULT 0,
	estimated_amc int4 NOT NULL DEFAULT 0,
	amc_modification_factor int4 NOT NULL DEFAULT 0,
	projection_for_calcs text NOT NULL DEFAULT ''::text,
	hold_for_receive bool NOT NULL DEFAULT false,
	ignore_for_orders bool NOT NULL DEFAULT false,
	CONSTRAINT item_store_join_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS item_store_join_default_location_id ON public.item_store_join USING btree (default_location_id);
CREATE INDEX IF NOT EXISTS item_store_join_inactive ON public.item_store_join USING btree (inactive);
CREATE INDEX IF NOT EXISTS item_store_join_item_id ON public.item_store_join USING btree (item_id);
CREATE INDEX IF NOT EXISTS item_store_join_location_bulk_id ON public.item_store_join USING btree (location_bulk_id);
CREATE INDEX IF NOT EXISTS item_store_join_store_id ON public.item_store_join USING btree (store_id);


CREATE TABLE IF NOT EXISTS export_log (
	datetime timestamp NULL,
	event_type varchar NULL,
	"comment" varchar NULL
);

CREATE TABLE IF NOT EXISTS geojson (
	id varchar NULL,
	"data" json NULL
);

CREATE TABLE IF NOT EXISTS "user" (
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


CREATE OR REPLACE PROCEDURE custom_aggregations()
 LANGUAGE plpgsql
AS $$
begin

  call aggregate_total_stock();
  call public.aggregate_stock_status();
 
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
     JOIN name_category1_level1 region ON n.category1_id::text = region.id::text
     JOIN geojson g ON region.id::text = g.id::text
  ORDER BY region.description;
  
CREATE OR REPLACE VIEW public.store_mos
AS SELECT CURRENT_DATE AS "current_date",
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


CREATE OR REPLACE VIEW public.store_transactions
AS SELECT min(date_trunc('month'::text, t.confirm_date::timestamp with time zone)) AS date,
    s.name AS store,
    count(*) AS month,
    sum(
        CASE
            WHEN t.confirm_date > (CURRENT_DATE - 7) THEN 1
            ELSE 0
        END) AS week
   FROM store s
     LEFT JOIN transact t ON s.id::text = t.store_id::text
  WHERE (s.store_mode <> ALL (ARRAY['supervisor'::text, 'his'::text, 'drug_registration'::text])) AND s.disabled = false AND t.confirm_date > (CURRENT_DATE - 30) AND t.confirm_date <= CURRENT_DATE
  GROUP BY s.name
  ORDER BY s.name;
 
 $procedure$
;

-- TODO: the username should be changed by installer
CREATE ROLE dboard NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT LOGIN PASSWORD '*****';

GRANT USAGE ON schema public TO dboard;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO dboard;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO dboard;
ALTER DEFAULT PRIVILEGES IN SCHEMA PUBLIC GRANT SELECT ON TABLES TO dboard;
ALTER DEFAULT PRIVILEGES IN SCHEMA PUBLIC GRANT EXECUTE ON FUNCTIONS TO dboard;
