CREATE EXTENSION IF NOT EXISTS tablefunc;

-- TABLES --
/*  aggregator, store, item, name*/
CREATE TABLE IF NOT EXISTS public.aggregator (
	id serial,
	storeid text DEFAULT ''::text,
	itemid text DEFAULT ''::text,
	monthyear text DEFAULT ''::text,
	value double precision DEFAULT 0,
	fulldate date,
	dataelement text DEFAULT ''::text,
	temp1 double precision DEFAULT 0,
	temp2 double precision DEFAULT 0,
	temp3 double precision DEFAULT 0,
	CONSTRAINT aggregator_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.store (
	id TEXT NOT NULL DEFAULT ''::text,
	"name" TEXT DEFAULT ''::TEXT,
	code TEXT DEFAULT ''::TEXT,
	name_id TEXT DEFAULT ''::TEXT,
	mwks_export_mode TEXT DEFAULT ''::TEXT,
	is_his bool  DEFAULT false,
	sort_issues_by_status_spare bool DEFAULT false,
	disabled bool  DEFAULT false,
	responsible_user_id TEXT DEFAULT ''::TEXT,
	organisation_name TEXT DEFAULT ''::TEXT,
	address_1 TEXT DEFAULT ''::TEXT,
	address_2 TEXT DEFAULT ''::TEXT,
	logo bytea,
	sync_id_remote_site integer DEFAULT 0,
	address_3 TEXT DEFAULT ''::TEXT,
	address_4 TEXT DEFAULT ''::TEXT,
	address_5 TEXT DEFAULT ''::TEXT,
	postal_zip_code TEXT DEFAULT ''::TEXT,
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
	created_date date,
	CONSTRAINT store_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS store_store_mode ON public.store USING btree (store_mode);
CREATE INDEX IF NOT EXISTS store_name_id ON public.store USING btree (name_id);
CREATE INDEX IF NOT EXISTS store_tags ON public.store USING btree (tags);
CREATE INDEX IF NOT EXISTS store_sync_id_remote_site ON public.store USING btree (sync_id_remote_site);

CREATE TABLE IF NOT EXISTS public.name (
	id TEXT NOT NULL DEFAULT ''::text,
	"name" text DEFAULT ''::text,
	fax TEXT DEFAULT ''::TEXT,
	phone TEXT DEFAULT ''::TEXT,
	customer bool  DEFAULT false,
	bill_address1 TEXT DEFAULT ''::TEXT,
	bill_address2 TEXT DEFAULT ''::TEXT,
	supplier bool DEFAULT false,
	"charge code" TEXT DEFAULT ''::TEXT,
	margin double precision DEFAULT 0,
	"comment" text DEFAULT ''::text,
	currency_id TEXT DEFAULT ''::TEXT,
	country TEXT DEFAULT ''::TEXT,
	freightfac double precision DEFAULT 0,
	email TEXT DEFAULT ''::TEXT,
	custom1 TEXT DEFAULT ''::TEXT,
	code TEXT DEFAULT ''::TEXT,
	"last" text DEFAULT ''::text,
	"first" text DEFAULT ''::text,
	title TEXT DEFAULT ''::TEXT,
	female bool DEFAULT false,
	date_of_birth date,
	overpayment double precision DEFAULT 0,
	group_id TEXT DEFAULT ''::TEXT,
	"hold" bool DEFAULT false,
	ship_address1 TEXT DEFAULT ''::TEXT,
	ship_address2 TEXT DEFAULT ''::TEXT,
	url TEXT DEFAULT ''::TEXT,
	barcode TEXT DEFAULT ''::TEXT,
	postal_address1 TEXT DEFAULT ''::TEXT,
	postal_address2 TEXT DEFAULT ''::TEXT,
	category1_id TEXT DEFAULT ''::TEXT,
	region_id TEXT DEFAULT ''::TEXT,
	"type" text DEFAULT ''::text,
	price_category TEXT DEFAULT ''::TEXT,
	flag TEXT DEFAULT ''::TEXT,
	manufacturer bool DEFAULT false,
	print_invoice_alphabetical bool DEFAULT false,
	custom2 TEXT DEFAULT ''::TEXT,
	custom3 TEXT DEFAULT ''::TEXT,
	default_order_days int2 DEFAULT 0,
	connection_type int2 DEFAULT 0,
	patient_photo bytea,
	next_of_kin_id TEXT DEFAULT ''::TEXT,
	pobox TEXT DEFAULT ''::TEXT,
	zip integer DEFAULT 0,
	middle text DEFAULT ''::text,
	preferred bool DEFAULT false,
	blood_group TEXT DEFAULT ''::TEXT,
	marital_status TEXT DEFAULT ''::TEXT,
	benchmark bool DEFAULT false,
	next_of_kin_relative TEXT DEFAULT ''::TEXT,
	mother_id TEXT DEFAULT ''::TEXT,
	postal_address3 TEXT DEFAULT ''::TEXT,
	postal_address4 TEXT DEFAULT ''::TEXT,
	bill_address3 TEXT DEFAULT ''::TEXT,
	bill_address4 TEXT DEFAULT ''::TEXT,
	ship_address3 TEXT DEFAULT ''::TEXT,
	ship_address4 TEXT DEFAULT ''::TEXT,
	ethnicity_id TEXT DEFAULT ''::TEXT,
	occupation_id TEXT DEFAULT ''::TEXT,
	religion_id TEXT DEFAULT ''::TEXT,
	national_health_number TEXT DEFAULT ''::TEXT,
	master_rtm_supplier_code integer DEFAULT 0,
	ordering_method TEXT DEFAULT ''::TEXT,
	donor bool DEFAULT false,
	latitude double precision DEFAULT 0,
	longitude double precision DEFAULT 0,
	master_rtm_supplier_name TEXT DEFAULT ''::TEXT,
	category2_id TEXT DEFAULT ''::TEXT,
	category3_id TEXT DEFAULT ''::TEXT,
	category4_id TEXT DEFAULT ''::TEXT,
	category5_id TEXT DEFAULT ''::TEXT,
	category6_id TEXT DEFAULT ''::TEXT,
	bill_address5 TEXT DEFAULT ''::TEXT,
	bill_postal_zip_code TEXT DEFAULT ''::TEXT,
	postal_address5 TEXT DEFAULT ''::TEXT,
	postal_zip_code TEXT DEFAULT ''::TEXT,
	ship_address5 TEXT DEFAULT ''::TEXT,
	ship_postal_zip_code TEXT DEFAULT ''::TEXT,
	supplying_store_id TEXT DEFAULT ''::TEXT,
	license_number text DEFAULT ''::text,
	license_expiry date,
	has_current_license bool DEFAULT false,
	custom_data jsonb, 
	maximum_credit double precision DEFAULT 0,
    nationality_id text DEFAULT ''::text,
    created_date date,
    integration_id text DEFAULT ''::text,
    isdeceased boolean DEFAULT false,
    is_deleted boolean DEFAULT false,
    om_created_datetime text DEFAULT ''::text,
    om_gender text DEFAULT ''::text,
    hsh_name text DEFAULT ''::text,
    hsh_code text DEFAULT ''::text,
    hsh_id text DEFAULT ''::text,
    om_date_of_death date,
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
CREATE INDEX IF NOT EXISTS name_hsh_id ON public.name USING btree (hsh_id);
CREATE INDEX IF NOT EXISTS name_is_deleted ON public.name USING btree (is_deleted);
CREATE INDEX IF NOT EXISTS name_last ON public.name USING btree (last);
CREATE INDEX IF NOT EXISTS name_manufacturer ON public.name USING btree (manufacturer);
CREATE INDEX IF NOT EXISTS name_master_rtm_supplier_code ON public.name USING btree (master_rtm_supplier_code);
CREATE INDEX IF NOT EXISTS name_mother_id ON public.name USING btree (mother_id);
CREATE INDEX IF NOT EXISTS name_name ON public.name USING btree (name);
CREATE INDEX IF NOT EXISTS name_next_of_kin_id ON public.name USING btree (next_of_kin_id);
CREATE INDEX IF NOT EXISTS name_occupation_id ON public.name USING btree (occupation_id);
CREATE INDEX IF NOT EXISTS name_religion_id ON public.name USING btree (religion_id);
CREATE INDEX IF NOT EXISTS name_supplier ON public.name USING btree (supplier);
CREATE INDEX IF NOT EXISTS name_supplying_store_id ON public.name USING btree (supplying_store_id);
CREATE INDEX IF NOT EXISTS name_type ON public.name USING btree (type);


CREATE TABLE IF NOT EXISTS public.name_category1 (
	id TEXT NOT NULL DEFAULT ''::text,
	description TEXT DEFAULT ''::TEXT,
	"type" TEXT DEFAULT ''::TEXT,
	parent_id text DEFAULT ''::text,
    user_field1 text DEFAULT ''::text,
    user_field2 text DEFAULT ''::text,
	CONSTRAINT name_category1_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.name_category1_level1(
    id TEXT NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    type text DEFAULT ''::text,
    CONSTRAINT name_category1_level1_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.name_category1_level2(
    id TEXT NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    type text DEFAULT ''::text,
    parent_id text DEFAULT ''::text,
    CONSTRAINT name_category1_level2_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.name_category2(
    id TEXT NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    type text DEFAULT ''::text,
    user_field1 text DEFAULT ''::text,
    user_field2 text DEFAULT ''::text,
    CONSTRAINT name_category2_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.name_category3(
    id TEXT NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    type text DEFAULT ''::text,
    user_field1 text DEFAULT ''::text,
    user_field2 text DEFAULT ''::text,
    CONSTRAINT name_category3_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.name_category4(
    id TEXT NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    type text DEFAULT ''::text,
    user_field1 text DEFAULT ''::text,
    user_field2 text DEFAULT ''::text,
    CONSTRAINT name_category4_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.name_category5(
    id TEXT NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    type text DEFAULT ''::text,
    user_field1 text DEFAULT ''::text,
    user_field2 text DEFAULT ''::text,
    CONSTRAINT name_category5_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.name_category6(
    id TEXT NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    type text DEFAULT ''::text,
    user_field1 text DEFAULT ''::text,
    user_field2 text DEFAULT ''::text,
    CONSTRAINT name_category6_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.transact (
	name_id TEXT DEFAULT ''::TEXT,
	id TEXT DEFAULT ''::TEXT,
	invoice_num integer DEFAULT 0,
	amount_outstanding double precision DEFAULT 0,
	"comment" text DEFAULT ''::text,
	entry_date date,
	"type" TEXT DEFAULT ''::TEXT,
	status TEXT DEFAULT ''::TEXT,
	total double precision DEFAULT 0,
	export_batch integer DEFAULT 0,
	linked_transaction_id TEXT DEFAULT ''::TEXT,
	their_ref TEXT DEFAULT ''::TEXT,
	confirm_date date,
	service_descrip TEXT DEFAULT ''::TEXT,
	service_price double precision DEFAULT 0,
	subtotal double precision DEFAULT 0,
	tax double precision DEFAULT 0,
	user_id TEXT DEFAULT ''::TEXT,
	pickslip_printed_date date,
	prescriber_id TEXT DEFAULT ''::TEXT,
	goods_received_id TEXT DEFAULT ''::TEXT,
	invoice_printed_date date,
	ship_date date,
	ship_method_id TEXT DEFAULT ''::TEXT,
	ship_method_comment TEXT DEFAULT ''::TEXT,
	waybill_number TEXT DEFAULT ''::TEXT,
	number_of_cartons integer DEFAULT 0,
	arrival_date_estimated date,
	arrival_date_actual date,
	responsible_officer_id TEXT DEFAULT ''::TEXT,
	"mode" TEXT DEFAULT ''::TEXT,
	category_id TEXT DEFAULT ''::TEXT,
	confirm_time time DEFAULT '00:00:00'::time without time zone,
	foreign_currency_total double precision DEFAULT 0,
	currency_id TEXT DEFAULT ''::TEXT,
	"hold" bool DEFAULT false,
	currency_rate double precision DEFAULT 0,
	supplier_charge_fc double precision DEFAULT 0,
	local_charge_distributed double precision DEFAULT 0,
	budget_period_id TEXT DEFAULT ''::TEXT,
	store_id TEXT DEFAULT ''::TEXT,
	user1 TEXT DEFAULT ''::TEXT,
	user2 TEXT DEFAULT ''::TEXT,
	mwks_sequence_num integer DEFAULT 0,
	is_cancellation bool DEFAULT false,
	user3 TEXT DEFAULT ''::TEXT,
	user4 TEXT DEFAULT ''::TEXT,
	colour integer DEFAULT 0,
	original_po_id TEXT DEFAULT ''::TEXT,
	donor_default_id TEXT DEFAULT ''::TEXT,
	date_order_received date,
	date_order_written date,
	contact_id TEXT DEFAULT ''::TEXT,
	encounter_id TEXT DEFAULT ''::TEXT,
	is_authorised bool DEFAULT false,
	requisition_id TEXT DEFAULT ''::TEXT,
	entry_time time DEFAULT '00:00:00'::time without time zone,
	linked_goods_received_id TEXT DEFAULT ''::TEXT,
	authorisationstatus TEXT DEFAULT ''::TEXT,
	nameinsurancejoinid TEXT DEFAULT ''::TEXT,
	insurancediscountamount double precision DEFAULT 0,
	optionid TEXT,
	insuranceDiscountRate double precision,
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
	id TEXT DEFAULT ''::TEXT,
	item_name TEXT DEFAULT ''::TEXT,
	start_of_year_date date,
	manufacture_method text DEFAULT ''::text,
	default_pack_size double precision DEFAULT 0,
	dose_picture bytea,
	atc_category TEXT DEFAULT ''::TEXT,
	medication_purpose text DEFAULT ''::text,
	instructions text DEFAULT ''::text,
	user_field_7 bool DEFAULT false,
	flags TEXT DEFAULT ''::TEXT,
	ddd_value TEXT DEFAULT ''::TEXT,
	code TEXT DEFAULT ''::TEXT,
	other_names text DEFAULT ''::text,
	type_of text DEFAULT ''::text,
	price_editable bool DEFAULT false,
	margin double precision DEFAULT 0,
	barcode_spare text DEFAULT ''::text,
	spare_ignore_for_orders bool DEFAULT false,
	sms_pack_size double precision DEFAULT 0,
	expiry_date_mandatory bool DEFAULT false,
	volume_per_pack double precision DEFAULT 0,
	department_id TEXT DEFAULT ''::TEXT,
	weight double precision DEFAULT 0,
	essential_drug_list bool DEFAULT false,
	catalogue_code TEXT DEFAULT ''::TEXT,
	indic_price double precision DEFAULT 0,
	user_field_1 TEXT DEFAULT ''::TEXT,
	spare_hold_for_issue bool DEFAULT false,
	builds_only bool DEFAULT false,
	reference_bom_quantity double precision DEFAULT 0,
	use_bill_of_materials bool DEFAULT false,
	description text DEFAULT ''::text,
	spare_hold_for_receive bool DEFAULT false,
	message text DEFAULT ''::text,
	interaction_group_id TEXT DEFAULT ''::TEXT,
	spare_pack_to_one_on_receive bool DEFAULT false,
	cross_ref_item_id TEXT DEFAULT ''::TEXT,
	spare_shelf_location_bulk TEXT DEFAULT ''::TEXT,
	user_field_4 bool DEFAULT false,
	user_field_6 TEXT DEFAULT ''::TEXT,
	spare_internal_analysis double precision DEFAULT 0,
	user_field_2 TEXT DEFAULT ''::TEXT,
	user_field_3 TEXT DEFAULT ''::TEXT,
	"ddd factor" double precision DEFAULT 0,
	account_stock_id TEXT DEFAULT ''::TEXT,
	account_purchases_id TEXT DEFAULT ''::TEXT,
	account_income_id TEXT DEFAULT ''::TEXT,
	unit_id TEXT DEFAULT ''::TEXT,
	outer_pack_size integer DEFAULT 0,
	category_id TEXT DEFAULT ''::TEXT,
	abc_category TEXT DEFAULT ''::TEXT,
	warning_quantity integer DEFAULT 0,
	user_field_5 double precision DEFAULT 0,
	print_units_in_dis_labels bool DEFAULT false,
	volume_per_outer_pack double precision DEFAULT 0,
	normal_stock bool DEFAULT false,
	critical_stock bool DEFAULT false,
	spare_non_stock bool DEFAULT false,
	non_stock_name_id TEXT DEFAULT ''::TEXT,
	is_sync bool DEFAULT false,
	sms_code TEXT DEFAULT ''::TEXT,
	category2_id TEXT DEFAULT ''::TEXT,
	category3_id TEXT DEFAULT ''::TEXT,
	buy_price double precision DEFAULT 0,
	ven_category text DEFAULT ''::text,
	universalcodes_code TEXT DEFAULT ''::TEXT,
	universalcodes_name TEXT DEFAULT ''::TEXT,
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
	store_id TEXT DEFAULT ''::TEXT,
	item_id TEXT DEFAULT ''::TEXT,
	pack_size double precision DEFAULT 0,
	expiry_date date,
	batch text DEFAULT ''::text,
	available double precision DEFAULT 0,
	spare_start_year_quan_tot double precision DEFAULT 0,
	cost_price double precision DEFAULT 0,
	sell_price double precision DEFAULT 0,
	"hold" bool DEFAULT false,
	initial_quan double precision DEFAULT 0,
	id TEXT DEFAULT ''::TEXT,
	quantity double precision DEFAULT 0,
	name_id TEXT DEFAULT ''::TEXT,
	manufacturer_id TEXT DEFAULT ''::TEXT,
	location_id TEXT DEFAULT ''::TEXT,
	volume_per_pack double precision DEFAULT 0,
	stock_on_hand_tot double precision DEFAULT 0,
	total_volume double precision DEFAULT 0,
	user_1 TEXT DEFAULT ''::TEXT,
	user_2 TEXT DEFAULT ''::TEXT,
	user_3 TEXT DEFAULT ''::TEXT,
	user_4 TEXT DEFAULT ''::TEXT,
	pack_quan_per_inner integer DEFAULT 0,
	pack_inners_per_outer integer DEFAULT 0,
	note text DEFAULT ''::text,
	vvm_status TEXT DEFAULT ''::TEXT,
	donor_id TEXT DEFAULT ''::TEXT,
	total_cost double precision DEFAULT 0,
	user_5_id TEXT DEFAULT ''::TEXT,
	user_6_id TEXT DEFAULT ''::TEXT,
	user_7_id TEXT DEFAULT ''::TEXT,
	user_8_id TEXT DEFAULT ''::TEXT,
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
	id TEXT DEFAULT ''::TEXT,
	item_id TEXT DEFAULT ''::TEXT,
	store_id TEXT DEFAULT ''::TEXT,
	default_location_id TEXT DEFAULT ''::TEXT,
	location_bulk_id TEXT DEFAULT ''::TEXT,
	include_on_price_list bool DEFAULT false,
	indic_price double precision DEFAULT 0,
	report_quantity double precision DEFAULT 0,
	minimum_stock integer DEFAULT 0,
	pack_to_one bool DEFAULT false,
	default_price double precision DEFAULT 0,
	hold_for_issue bool DEFAULT false,
	margin double precision DEFAULT 0,
	inactive bool DEFAULT false,
	pack_to_one_allow bool DEFAULT false,
	restricted_location_type_id TEXT DEFAULT ''::TEXT,
	non_stock bool DEFAULT false,
	non_stock_name_id TEXT DEFAULT ''::TEXT,
	forecast_method integer DEFAULT 0,
	estimated_amc integer DEFAULT 0,
	amc_modification_factor integer DEFAULT 0,
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



CREATE TABLE IF NOT EXISTS public.item_category
(
    id text COLLATE pg_catalog."default" NOT NULL DEFAULT ''::text,
    description text COLLATE pg_catalog."default" DEFAULT ''::text,
    sort_order integer DEFAULT 0,
    summary_only boolean DEFAULT false,
    parent_id text COLLATE pg_catalog."default" DEFAULT ''::text,
    custom_data jsonb,
    CONSTRAINT item_category_pkey PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS item_category_parent_id ON public.item_category USING btree  (parent_id COLLATE pg_catalog."default" ASC NULLS LAST);

CREATE TABLE IF NOT EXISTS public.item_category2
(
    id text COLLATE pg_catalog."default" NOT NULL DEFAULT ''::text,
    description text COLLATE pg_catalog."default" DEFAULT ''::text,
    sort_order integer DEFAULT 0,
    summary_only boolean DEFAULT false,
    CONSTRAINT item_category2_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.item_category3
(
    id text COLLATE pg_catalog."default" NOT NULL DEFAULT ''::text,
    description text COLLATE pg_catalog."default" DEFAULT ''::text,
    sort_order integer DEFAULT 0,
    summary_only boolean DEFAULT false,
    CONSTRAINT item_category3_pkey PRIMARY KEY (id)
);

-- Table: public.item_category_level1

-- DROP TABLE IF EXISTS public.item_category_level1;

CREATE TABLE IF NOT EXISTS public.item_category_level1
(
    id text COLLATE pg_catalog."default" NOT NULL DEFAULT ''::text,
    description text COLLATE pg_catalog."default" DEFAULT ''::text,
    sort_order integer DEFAULT 0,
    summary_only boolean DEFAULT false,
    custom_data jsonb,
    CONSTRAINT item_category_level1_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.item_category_level2
(
    id text COLLATE pg_catalog."default" NOT NULL DEFAULT ''::text,
    description text COLLATE pg_catalog."default" DEFAULT ''::text,
    sort_order integer DEFAULT 0,
    summary_only boolean DEFAULT false,
    parent_id text COLLATE pg_catalog."default" DEFAULT ''::text,
    CONSTRAINT item_category_level2_pkey PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS item_category_level2_parent_id
    ON public.item_category_level2 USING btree
    (parent_id COLLATE pg_catalog."default" ASC NULLS LAST);

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
	id TEXT DEFAULT ''::TEXT,
	lastlogin date,
	group_id TEXT DEFAULT ''::TEXT,
	"mode" TEXT DEFAULT ''::TEXT,
	active bool DEFAULT false,
	lasttime time DEFAULT '00:00:00'::time without time zone,
	date_created date,
	date_left date,
	"language" integer DEFAULT 0,
	is_group bool DEFAULT false,
	license_category_id TEXT DEFAULT ''::TEXT,
	tags jsonb,
	"type" jsonb,
	CONSTRAINT user_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS user_id ON "user" USING btree (id);

-- VIEWS --
-- as you'll see below, these are now created after exporting --

CREATE OR REPLACE VIEW public.item_categories
 AS
 WITH stock_type_strings AS (
         SELECT item_1.id,
            'On essential drug list'::text AS stock_type
           FROM item item_1
          WHERE item_1.essential_drug_list = true
        UNION
         SELECT item_1.id,
            'Critical stock'::text AS stock_type
           FROM item item_1
          WHERE item_1.critical_stock = true
        UNION
         SELECT item_1.id,
            'Normal stock'::text AS stock_type
           FROM item item_1
          WHERE item_1.normal_stock = true
        )
 SELECT item.id,
    item.item_name,
        CASE
            WHEN item_category.description IS NULL THEN 'NONE'::text
            ELSE item_category.description
        END AS category,
        CASE
            WHEN item_category_level2.description IS NULL THEN 'NONE'::text
            ELSE item_category_level2.description
        END AS category_level2,
        CASE
            WHEN item_category_level1.description IS NULL THEN 'NONE'::text
            ELSE item_category_level1.description
        END AS category_level1,
        CASE
            WHEN item_category2.description IS NULL THEN 'NONE'::text
            ELSE item_category2.description
        END AS category2,
        CASE
            WHEN item_category3.description IS NULL THEN 'NONE'::text
            ELSE item_category3.description
        END AS category3,
        CASE
            WHEN item.ven_category = ''::text OR item.ven_category IS NULL THEN 'NONE'::text
            ELSE item.ven_category
        END AS ven_category,
    item.essential_drug_list,
    item.critical_stock,
    item.normal_stock,
        CASE
            WHEN stock_type_strings.stock_type IS NULL THEN 'NONE'::text
            ELSE stock_type_strings.stock_type
        END AS stock_type
   FROM item
     LEFT JOIN item_category ON item.category_id = item_category.id
     LEFT JOIN item_category2 ON item.category2_id = item_category2.id
     LEFT JOIN item_category3 ON item.category3_id = item_category3.id
     LEFT JOIN item_category_level2 ON item_category.parent_id = item_category_level2.id
     LEFT JOIN item_category_level1 ON item_category_level2.parent_id = item_category_level1.id
     LEFT JOIN stock_type_strings ON item.id = stock_type_strings.id;


CREATE OR REPLACE VIEW public.store_categories
 AS
 SELECT store.name,
    store.code,
        CASE
            WHEN store.organisation_name = ''::text THEN 'NONE'::text::character varying::text
            ELSE store.organisation_name
        END AS organisation,
        CASE
            WHEN name_category1.* IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category1.description
        END AS category1,
        CASE
            WHEN name_category1_level2.description IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category1_level2.description
        END AS category1_level2,
        CASE
            WHEN name_category1_level1.description IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category1_level1.description
        END AS category1_level1,
        CASE
            WHEN name_category2.* IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category2.description
        END AS category2,
        CASE
            WHEN name_category3.* IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category3.description
        END AS category3,
        CASE
            WHEN name_category4.* IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category4.description
        END AS category4,
        CASE
            WHEN name_category5.* IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category5.description
        END AS category5,
        CASE
            WHEN name_category6.* IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category6.description
        END AS category6,
    store.store_mode AS mode,
    store.disabled
   FROM store
     LEFT JOIN name ON store.name_id = name.id
     LEFT JOIN name_category1 ON name_category1.id = name.category1_id
     LEFT JOIN name_category1_level2 ON name_category1.parent_id = name_category1_level2.id
     LEFT JOIN name_category1_level1 ON name_category1_level2.parent_id = name_category1_level1.id
     LEFT JOIN name_category2 ON name_category2.id = name.category2_id
     LEFT JOIN name_category3 ON name_category3.id = name.category3_id
     LEFT JOIN name_category4 ON name_category4.id = name.category4_id
     LEFT JOIN name_category5 ON name_category5.id = name.category5_id
     LEFT JOIN name_category6 ON name_category6.id = name.category4_id;

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
	END $$
;

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
			stockin bigint default 0,
			stockout bigint default 0
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
	END $procedure$
;

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
	END $procedure$
;

CREATE OR REPLACE FUNCTION public.checkstockondate(patdate date, pstoreid text, pitemid text)
	RETURNS integer
	LANGUAGE plpgsql
AS $function$
	DECLARE result integer;
	BEGIN
	        SELECT  "value" INTO result
	        FROM    aggregator 
			WHERE storeID = $2 and itemID = $3
			and fullDate <= $1 
	        and dataElement = 'stockHistory'
	        order by fullDate desc limit 1;
	
	        RETURN GREATEST(0, result);
	END
$function$
;

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
DROP VIEW IF EXISTS public.store_categories;
 $procedure$
;

CREATE OR REPLACE PROCEDURE public.post_export()
 LANGUAGE sql
AS $procedure$ 	
CREATE OR REPLACE VIEW public.item_categories
 AS
 WITH stock_type_strings AS (
         SELECT item_1.id,
            'On essential drug list'::text AS stock_type
           FROM item item_1
          WHERE item_1.essential_drug_list = true
        UNION
         SELECT item_1.id,
            'Critical stock'::text AS stock_type
           FROM item item_1
          WHERE item_1.critical_stock = true
        UNION
         SELECT item_1.id,
            'Normal stock'::text AS stock_type
           FROM item item_1
          WHERE item_1.normal_stock = true
        )
 SELECT item.id,
    item.item_name,
        CASE
            WHEN item_category.description IS NULL THEN 'NONE'::text
            ELSE item_category.description
        END AS category,
        CASE
            WHEN item_category_level2.description IS NULL THEN 'NONE'::text
            ELSE item_category_level2.description
        END AS category_level2,
        CASE
            WHEN item_category_level1.description IS NULL THEN 'NONE'::text
            ELSE item_category_level1.description
        END AS category_level1,
        CASE
            WHEN item_category2.description IS NULL THEN 'NONE'::text
            ELSE item_category2.description
        END AS category2,
        CASE
            WHEN item_category3.description IS NULL THEN 'NONE'::text
            ELSE item_category3.description
        END AS category3,
        CASE
            WHEN item.ven_category = ''::text OR item.ven_category IS NULL THEN 'NONE'::text
            ELSE item.ven_category
        END AS ven_category,
    item.essential_drug_list,
    item.critical_stock,
    item.normal_stock,
        CASE
            WHEN stock_type_strings.stock_type IS NULL THEN 'NONE'::text
            ELSE stock_type_strings.stock_type
        END AS stock_type
   FROM item
     LEFT JOIN item_category ON item.category_id = item_category.id
     LEFT JOIN item_category2 ON item.category2_id = item_category2.id
     LEFT JOIN item_category3 ON item.category3_id = item_category3.id
     LEFT JOIN item_category_level2 ON item_category.parent_id = item_category_level2.id
     LEFT JOIN item_category_level1 ON item_category_level2.parent_id = item_category_level1.id
     LEFT JOIN stock_type_strings ON item.id = stock_type_strings.id;


CREATE OR REPLACE VIEW public.store_categories
 AS
 SELECT store.name,
    store.code,
        CASE
            WHEN store.organisation_name = ''::text THEN 'NONE'::text::character varying::text
            ELSE store.organisation_name
        END AS organisation,
        CASE
            WHEN name_category1.* IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category1.description
        END AS category1,
        CASE
            WHEN name_category1_level2.description IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category1_level2.description
        END AS category1_level2,
        CASE
            WHEN name_category1_level1.description IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category1_level1.description
        END AS category1_level1,
        CASE
            WHEN name_category2.* IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category2.description
        END AS category2,
        CASE
            WHEN name_category3.* IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category3.description
        END AS category3,
        CASE
            WHEN name_category4.* IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category4.description
        END AS category4,
        CASE
            WHEN name_category5.* IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category5.description
        END AS category5,
        CASE
            WHEN name_category6.* IS NULL THEN 'NONE'::text::character varying::text
            ELSE name_category6.description
        END AS category6,
    store.store_mode AS mode,
    store.disabled
   FROM store
     LEFT JOIN name ON store.name_id = name.id
     LEFT JOIN name_category1 ON name_category1.id = name.category1_id
     LEFT JOIN name_category1_level2 ON name_category1.parent_id = name_category1_level2.id
     LEFT JOIN name_category1_level1 ON name_category1_level2.parent_id = name_category1_level1.id
     LEFT JOIN name_category2 ON name_category2.id = name.category2_id
     LEFT JOIN name_category3 ON name_category3.id = name.category3_id
     LEFT JOIN name_category4 ON name_category4.id = name.category4_id
     LEFT JOIN name_category5 ON name_category5.id = name.category5_id
     LEFT JOIN name_category6 ON name_category6.id = name.category4_id;

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

