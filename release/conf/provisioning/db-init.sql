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

CREATE TABLE public.list_master
(
    id text NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    date_created date,
    created_by_user_id text DEFAULT ''::text,
    note text DEFAULT ''::text,
    gets_new_items boolean DEFAULT false,
    tags jsonb,
    isprogram boolean DEFAULT false,
    programsettings jsonb,
    code text DEFAULT ''::text,
    ispatientlist boolean DEFAULT false,
    is_hiv boolean DEFAULT false,
    issupplierhubcatalog boolean DEFAULT false,
    inactive boolean DEFAULT false,
    is_immunisation boolean DEFAULT false,
    is_default_price_list boolean DEFAULT false,
    discount_percentage double precision DEFAULT 0,
    CONSTRAINT list_master_pkey PRIMARY KEY (id)
);

CREATE INDEX list_master_inactive ON public.list_master USING btree(inactive);
CREATE INDEX list_master_is_default_price_list ON public.list_master USING btree(is_default_price_list);

CREATE TABLE public.list_master_line
(
    id text NOT NULL DEFAULT ''::text,
    item_master_id text DEFAULT ''::text,
    item_id text DEFAULT ''::text,
    imprest_quan double precision DEFAULT 0,
    order_number integer DEFAULT 0,
    price double precision DEFAULT 0,
    CONSTRAINT list_master_line_pkey PRIMARY KEY (id)
);

CREATE INDEX list_master_line_item_id ON public.list_master_line USING btree(item_id);
CREATE INDEX list_master_line_item_master_id ON public.list_master_line USING btree(item_master_id); 

CREATE TABLE IF NOT EXISTS public.list_master_name_join
(
    id text NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    name_id text DEFAULT ''::text,
    list_master_id text DEFAULT ''::text,
    include_web boolean DEFAULT false,
    include_imprest boolean DEFAULT false,
    include_stock_hist boolean DEFAULT false,
    price_list boolean DEFAULT false,
    CONSTRAINT list_master_name_join_pkey PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS list_master_name_join_list_master_id
    ON public.list_master_name_join USING btree (list_master_id ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS list_master_name_join_name_id 
    ON public.list_master_name_join USING btree(name_id ASC NULLS LAST);

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
	goodsreceivedconfirmation jsonb,
    paymenttypeid text DEFAULT ''::text,
    diagnosis_id text DEFAULT ''::text,
    wardid text DEFAULT ''::text,
    category2_id text DEFAULT ''::text,
	om_created_datetime text DEFAULT ''::text,
	om_allocated_datetime text DEFAULT ''::text,
	om_picked_datetime text DEFAULT ''::text,
	om_shipped_datetime text DEFAULT ''::text,
	om_delivered_datetime text DEFAULT ''::text,
	om_verified_datetime text DEFAULT ''::text,
	om_status text DEFAULT ''::text,
	om_colour text DEFAULT ''::text,
	om_type text DEFAULT ''::text,
	om_transport_reference text DEFAULT ''::text,
	finalised_date date,
	programid text DEFAULT ''::text,
	tax_rate double precision DEFAULT 0,
	om_original_shipment_id text DEFAULT ''::text,
	finalised_time time without time zone DEFAULT '00:00:00'::time without time zone,
	gender text DEFAULT ''::text,
	om_expected_delivery_datetime text DEFAULT ''::text,
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

CREATE TABLE public.trans_line
(
   transaction_id text DEFAULT ''::text,
    item_id text DEFAULT ''::text,
    batch text DEFAULT ''::text,
    price_extension double precision DEFAULT 0,
    note text DEFAULT ''::text,
    sell_price double precision DEFAULT 0,
    expiry_date date,
    cost_price double precision DEFAULT 0,
    pack_size double precision DEFAULT 0,
    quantity double precision DEFAULT 0,
    box_number text DEFAULT ''::text,
    item_line_id text DEFAULT ''::text,
    line_number integer DEFAULT 0,
    item_name text DEFAULT ''::text,
    id text NOT NULL DEFAULT ''::text,
    supp_trans_line_id_ns text DEFAULT ''::text,
    goods_received_lines_id text DEFAULT ''::text,
    manufacturer_id text DEFAULT ''::text,
    foreign_currency_price double precision DEFAULT 0,
    location_id text DEFAULT ''::text,
    volume_per_pack double precision DEFAULT 0,
    repeat_id text DEFAULT ''::text,
    user_1 text DEFAULT ''::text,
    user_2 text DEFAULT ''::text,
    user_3 text DEFAULT ''::text,
    user_4 text DEFAULT ''::text,
    pack_size_inner integer DEFAULT 0,
    pack_inners_in_outer integer DEFAULT 0,
    is_from_inventory_adjustment boolean DEFAULT false,
    weight double precision DEFAULT 0,
    source_backorder_id text DEFAULT ''::text,
    order_lines_id text DEFAULT ''::text,
    donor_id text DEFAULT ''::text,
    local_charge_line_total double precision DEFAULT 0,
    type text DEFAULT ''::text,
    linked_transact_id text DEFAULT ''::text,
    user_5_id text DEFAULT ''::text,
    user_6_id text DEFAULT ''::text,
    user_7_id text DEFAULT ''::text,
    user_8_id text DEFAULT ''::text,
    linked_trans_line_id text DEFAULT ''::text,
    barcodeid text DEFAULT ''::text,
    sentquantity double precision DEFAULT 0,
    optionid text DEFAULT ''::text,
    isvvmpassed text DEFAULT ''::text,
    program_id text DEFAULT ''::text,
    prescribedquantity double precision DEFAULT 0,
    vaccine_vial_monitor_status_id text DEFAULT ''::text,
    sent_pack_size double precision DEFAULT 0,
    custom_data jsonb,
    CONSTRAINT trans_line_pkey PRIMARY KEY (id)
);

CREATE INDEX trans_line_barcodeid ON public.trans_line USING btree (barcodeid);
CREATE INDEX trans_line_donor_id ON public.trans_line USING btree(donor_id);
CREATE INDEX trans_line_goods_received_lines_id ON public.trans_line USING btree (goods_received_lines_id);
CREATE INDEX trans_line_item_id ON public.trans_line USING btree (item_id);
CREATE INDEX trans_line_item_line_id ON public.trans_line USING btree (item_line_id);
CREATE INDEX trans_line_linked_trans_line_id ON public.trans_line USING btree (linked_trans_line_id);
CREATE INDEX trans_line_location_id ON public.trans_line USING btree (location_id);
CREATE INDEX trans_line_optionid ON public.trans_line USING btree (optionid);
CREATE INDEX trans_line_order_lines_id ON public.trans_line USING btree (order_lines_id);
CREATE INDEX trans_line_repeat_id ON public.trans_line USING btree (repeat_id);
CREATE INDEX trans_line_transaction_id ON public.trans_line USING btree (transaction_id);
CREATE INDEX trans_line_type ON public.trans_line USING btree (type);
CREATE INDEX trans_line_user_5_id ON public.trans_line USING btree (user_5_id);
CREATE INDEX trans_line_user_6_id ON public.trans_line USING btree (user_6_id);
CREATE INDEX trans_line_user_7_id ON public.trans_line USING btree (user_7_id);
CREATE INDEX trans_line_user_8_id ON public.trans_line USING btree (user_8_id);

CREATE TABLE IF NOT EXISTS public.transaction_category
(
    id text NOT NULL DEFAULT ''::text,
    category text DEFAULT ''::text,
    type text DEFAULT ''::text,
    code text DEFAULT ''::text,
    master_category_id text DEFAULT ''::text,
    custom_data jsonb,
    CONSTRAINT transaction_category_pkey PRIMARY KEY (id)
);

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

CREATE TABLE public.goods_received
(
    id text NOT NULL DEFAULT ''::text,
    purchase_order_id text DEFAULT ''::text,
    entry_date date,
    received_date date,
    supplier_reference text DEFAULT ''::text,
    user_id_created text DEFAULT ''::text,
    user_id_modified text DEFAULT ''::text,
    status text DEFAULT ''::text,
    store_id text DEFAULT ''::text,
    budget_id text DEFAULT ''::text,
    donor_id text DEFAULT ''::text,
    serial_number integer DEFAULT 0,
    comment text DEFAULT ''::text,
    linked_transaction_id text DEFAULT ''::text,
    CONSTRAINT goods_received_pkey PRIMARY KEY (id)
);
CREATE INDEX goods_received_budget_id ON public.goods_received USING btree (budget_id);
CREATE INDEX goods_received_donor_id ON public.goods_received USING btree (donor_id);
CREATE INDEX goods_received_linked_transaction_id ON public.goods_received USING btree (linked_transaction_id);
CREATE INDEX goods_received_store_id ON public.goods_received USING btree (store_id);

CREATE TABLE IF NOT EXISTS public.item_category
(
    id text NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    sort_order integer DEFAULT 0,
    summary_only boolean DEFAULT false,
    parent_id text DEFAULT ''::text,
    custom_data jsonb,
    CONSTRAINT item_category_pkey PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS item_category_parent_id ON public.item_category USING btree  (parent_id ASC NULLS LAST);

CREATE TABLE IF NOT EXISTS public.item_category2
(
    id text NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    sort_order integer DEFAULT 0,
    summary_only boolean DEFAULT false,
    CONSTRAINT item_category2_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.item_category3
(
    id text NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    sort_order integer DEFAULT 0,
    summary_only boolean DEFAULT false,
    CONSTRAINT item_category3_pkey PRIMARY KEY (id)
);

-- Table: public.item_category_level1

-- DROP TABLE IF EXISTS public.item_category_level1;

CREATE TABLE IF NOT EXISTS public.item_category_level1
(
    id text NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    sort_order integer DEFAULT 0,
    summary_only boolean DEFAULT false,
    custom_data jsonb,
    CONSTRAINT item_category_level1_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.item_category_level2
(
    id text NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    sort_order integer DEFAULT 0,
    summary_only boolean DEFAULT false,
    parent_id text DEFAULT ''::text,
    CONSTRAINT item_category_level2_pkey PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS item_category_level2_parent_id ON public.item_category_level2 USING btree(parent_id ASC NULLS LAST);

CREATE TABLE public.stock_take
(
    id text NOT NULL DEFAULT ''::text,
    stock_take_date date,
    stock_take_time time without time zone DEFAULT '00:00:00'::time without time zone,
    created_by_id text DEFAULT ''::text,
    status text DEFAULT ''::text,
    finalised_by_id text DEFAULT ''::text,
    invad_additions_id text DEFAULT ''::text,
    invad_reductions_id text DEFAULT ''::text,
    store_id text DEFAULT ''::text,
    description text DEFAULT ''::text,
    comment text DEFAULT ''::text,
    locked boolean DEFAULT false,
    stock_take_created_date date,
    type text DEFAULT ''::text,
    serial_number integer DEFAULT 0,
    programid text DEFAULT ''::text,
    CONSTRAINT stock_take_pkey PRIMARY KEY (id)
);

CREATE TABLE public.purchase_order
(
    name_id text DEFAULT ''::text,
    id text NOT NULL DEFAULT ''::text,
    creation_date date,
    target_months double precision DEFAULT 0,
    status text DEFAULT ''::text,
    comment text DEFAULT ''::text,
    currency_id text DEFAULT ''::text,
    inv_sub_total double precision DEFAULT 0,
    freight double precision DEFAULT 0,
    cost_in_local_currency double precision DEFAULT 0,
    curr_rate double precision DEFAULT 0,
    reference text DEFAULT ''::text,
    lines integer DEFAULT 0,
    requested_delivery_date date,
    locked boolean DEFAULT false,
    confirm_date date,
    created_by text DEFAULT ''::text,
    last_edited_by text DEFAULT ''::text,
    order_total_after_discount double precision DEFAULT 0,
    store_id text DEFAULT ''::text,
    supplier_agent text DEFAULT ''::text,
    delivery_method text DEFAULT ''::text,
    authorizing_officer_1 text DEFAULT ''::text,
    authorizing_officer_2 text DEFAULT ''::text,
    freight_conditions text DEFAULT ''::text,
    additional_instructions text DEFAULT ''::text,
    total_foreign_currency_expected double precision DEFAULT 0,
    total_local_currency_expected double precision DEFAULT 0,
    agent_commission double precision DEFAULT 0,
    document_charge double precision DEFAULT 0,
    communications_charge double precision DEFAULT 0,
    insurance_charge double precision DEFAULT 0,
    freight_charge double precision DEFAULT 0,
    po_sent_date date,
    supplier_discount_amount double precision DEFAULT 0,
    order_total_before_discount double precision DEFAULT 0,
    inv_discount_amount double precision DEFAULT 0,
    quote_id text DEFAULT ''::text,
    editedremotely boolean DEFAULT false,
    heading_message text DEFAULT ''::text,
    budget_period_id text DEFAULT ''::text,
    category_id text DEFAULT ''::text,
    include_in_on_order_calcs boolean DEFAULT false,
    colour integer DEFAULT 0,
    user_field_1 text DEFAULT ''::text,
    date_contract_signed date,
    date_advance_payment date,
    date_goods_received_at_port date,
    is_authorised boolean DEFAULT false,
    auth_checksum text DEFAULT ''::text,
    donor_id text DEFAULT ''::text,
    user_field_2 text DEFAULT ''::text,
    serial_number integer DEFAULT 0,
    linked_transaction_id text DEFAULT ''::text,
    CONSTRAINT purchase_order_pkey PRIMARY KEY (id)
);
CREATE INDEX purchase_order_category_id ON public.purchase_order USING btree (category_id);
CREATE INDEX purchase_order_creation_date ON public.purchase_order USING btree (creation_date);
CREATE INDEX purchase_order_donor_id ON public.purchase_order USING btree (donor_id);
CREATE INDEX purchase_order_linked_transaction_id ON public.purchase_order USING btree (linked_transaction_id);
CREATE INDEX purchase_order_name_id ON public.purchase_order USING btree (name_id);
CREATE INDEX purchase_order_quote_id ON public.purchase_order USING btree (quote_id);
CREATE INDEX purchase_order_status ON public.purchase_order USING btree (status);
CREATE INDEX purchase_order_store_id ON public.purchase_order USING btree (store_id);

CREATE TABLE public.purchase_order_line
(
    purchase_order_id text DEFAULT ''::text,
    item_id text DEFAULT ''::text,
    non_stock_name_id text DEFAULT ''::text,
    packsize_ordered double precision DEFAULT 0,
    cost_from_invoice double precision DEFAULT 0,
    cost_local double precision DEFAULT 0,
    comment text DEFAULT ''::text,
    batch text DEFAULT ''::text,
    expiry date,
    quan_original_order double precision DEFAULT 0,
    quan_adjusted_order double precision DEFAULT 0,
    quan_rec_to_date double precision DEFAULT 0,
    store_id text DEFAULT ''::text,
    spare_estmated_cost double precision DEFAULT 0,
    item_name text DEFAULT ''::text,
    id text NOT NULL DEFAULT ''::text,
    pack_units text DEFAULT ''::text,
    price_expected_after_discount double precision DEFAULT 0,
    price_extension_expected double precision DEFAULT 0,
    supplier_code text DEFAULT ''::text,
    price_per_pack_before_discount double precision DEFAULT 0,
    quote_line_id text DEFAULT ''::text,
    volume_per_pack double precision DEFAULT 0,
    location_id text DEFAULT ''::text,
    manufacturer_id text DEFAULT ''::text,
    delivery_date_requested date,
    line_number integer DEFAULT 0,
    note text DEFAULT ''::text,
    note_show_on_goods_rec boolean DEFAULT false,
    delivery_date_expected date,
    note_has_been_actioned boolean DEFAULT false,
    kit_data jsonb,
    suggestedquantity double precision DEFAULT 0,
    snapshotquantity double precision DEFAULT 0,
    CONSTRAINT purchase_order_line_pkey PRIMARY KEY (id)
);

CREATE INDEX purchase_order_line_delivery_date_expected ON public.purchase_order_line USING btree(delivery_date_expected);
CREATE INDEX purchase_order_line_item_id ON public.purchase_order_line USING btree(item_id);
CREATE INDEX purchase_order_line_non_stock_name_id ON public.purchase_order_line USING btree(non_stock_name_id);
CREATE INDEX purchase_order_line_purchase_order_id ON public.purchase_order_line USING btree(purchase_order_id);
CREATE INDEX purchase_order_line_quote_line_id ON public.purchase_order_line USING btree(quote_line_id);
CREATE INDEX purchase_order_line_store_id ON public.purchase_order_line USING btree(store_id);

CREATE TABLE public.purchase_order_category
(
    id text NOT NULL DEFAULT ''::text,
    description text DEFAULT ''::text,
    user_1 text DEFAULT ''::text,
    user_2 text DEFAULT ''::text,
    user_3 double precision DEFAULT 0,
    CONSTRAINT purchase_order_category_pkey PRIMARY KEY (id)
);

CREATE TABLE public.currency
(
    id text NOT NULL DEFAULT ''::text,
    rate double precision DEFAULT 0,
    currency text DEFAULT ''::text,
    is_home_currency boolean DEFAULT false,
    date_updated date,
    is_active boolean DEFAULT false,
    CONSTRAINT currency_pkey PRIMARY KEY (id)
);
CREATE INDEX currency_is_active ON public.currency USING btree(is_active);

CREATE TABLE public.requisition
(
    id text NOT NULL DEFAULT ''::text,
    date_stock_take date,
    user_id text DEFAULT ''::text,
    name_id text DEFAULT ''::text,
    status text DEFAULT ''::text,
    date_entered date,
    nsh_custinv_id text DEFAULT ''::text,
    daystosupply integer DEFAULT 0,
    store_id text DEFAULT ''::text,
    type text DEFAULT ''::text,
    date_order_received date,
    previous_csh_id text DEFAULT ''::text,
    serial_number integer DEFAULT 0,
    requester_reference text DEFAULT ''::text,
    comment text DEFAULT ''::text,
    colour integer DEFAULT 0,
    custom_data jsonb,
    linked_requisition_id text DEFAULT ''::text,
    linked_purchase_order_id text DEFAULT ''::text,
    authorisationstatus text DEFAULT ''::text,
    thresholdmos double precision DEFAULT 0,
    ordertype text DEFAULT ''::text,
    periodid text DEFAULT ''::text,
    programid text DEFAULT ''::text,
    lastmodifiedat integer DEFAULT 0,
    is_emergency boolean DEFAULT false,
    isremoteorder boolean DEFAULT false,
    CONSTRAINT requisition_pkey PRIMARY KEY (id)
);

CREATE INDEX requisition_linked_requisition_id ON public.requisition USING btree (linked_requisition_id);
CREATE INDEX requisition_name_id ON public.requisition USING btree (name_id);
CREATE INDEX requisition_periodid ON public.requisition USING btree (periodid);
CREATE INDEX requisition_programid ON public.requisition USING btree (programid);
CREATE INDEX requisition_status ON public.requisition USING btree (status);
CREATE INDEX requisition_store_id ON public.requisition USING btree (store_id);
CREATE INDEX requisition_type ON public.requisition USING btree (type);

CREATE TABLE IF NOT EXISTS public.name_note
(
    patient_event_id text DEFAULT ''::text,
    entry_date date,
    note text DEFAULT ''::text,
    name_id text DEFAULT ''::text,
    id text NOT NULL DEFAULT ''::text,
    value double precision DEFAULT 0,
    boolean_value boolean DEFAULT false,
    created_by_user_id text DEFAULT ''::text,
    modified_by_user_id text DEFAULT ''::text,
    whentodisplay text DEFAULT ''::text,
    store_id text DEFAULT ''::text,
    color_code smallint DEFAULT 0,
    beep_times smallint DEFAULT 0,
    data jsonb,
    is_deleted boolean DEFAULT false,
    CONSTRAINT name_note_pkey PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS name_note_name_id ON public.name_note USING btree (name_id ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS name_note_patient_event_id ON public.name_note USING btree (patient_event_id ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS name_note_store_id ON public.name_note USING btree (store_id ASC NULLS LAST);

CREATE TABLE IF NOT EXISTS public.patient_event
(
    id text NOT NULL DEFAULT ''::text,
    code text DEFAULT ''::text,
    description text DEFAULT ''::text,
    event_type text DEFAULT ''::text,
    unit text DEFAULT ''::text,
    CONSTRAINT patient_event_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.item_department
(
    id text NOT NULL DEFAULT ''::text,
    department text DEFAULT ''::text,
    issue boolean DEFAULT false,
    order_number integer DEFAULT 0,
    CONSTRAINT item_department_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS export_log (
	id TEXT DEFAULT ''::TEXT,
	datetime timestamp,
	start_timestamp INTEGER,
	end_timestamp INTEGER,
	event_type TEXT DEFAULT ''::TEXT,
	"comment" TEXT DEFAULT ''::TEXT
);

CREATE TABLE IF NOT EXISTS public.table_log
(
    log_id TEXT DEFAULT ''::TEXT,
    "table" TEXT DEFAULT ''::TEXT,
    status TEXT DEFAULT ''::TEXT
);

CREATE TABLE IF NOT EXISTS geojson (
	id varchar,
	"data" json,
	name varchar
);

CREATE TABLE IF NOT EXISTS public."user"
(
    id text NOT NULL DEFAULT ''::text,
    name text DEFAULT ''::text,
    startup_method text DEFAULT ''::text,
    signature bytea,
    nblogins integer DEFAULT 0,
    lastlogin date,
    group_id text DEFAULT ''::text,
    mode text DEFAULT ''::text,
    qdump_offset_b bytea,
    active boolean DEFAULT false,
    permissions_spare bytea,
    lasttime time without time zone DEFAULT '00:00:00'::time without time zone,
    initials text DEFAULT ''::text,
    first_name text DEFAULT ''::text,
    last_name text DEFAULT ''::text,
    date_of_birth date,
    address_1 text DEFAULT ''::text,
    address_2 text DEFAULT ''::text,
    e_mail text DEFAULT ''::text,
    phone1 text DEFAULT ''::text,
    phone2 text DEFAULT ''::text,
    date_created date,
    date_left date,
    job_title text DEFAULT ''::text,
    responsible_officer boolean DEFAULT false,
    language integer DEFAULT 0,
    use_ldap boolean DEFAULT false,
    ldap_login_string text DEFAULT ''::text,
    receives_sms_errors boolean DEFAULT false,
    is_group boolean DEFAULT false,
    dashboard_tabs jsonb,
    custom_data jsonb,
    windows_user_name text DEFAULT ''::text,
    license_category_id text DEFAULT ''::text,
    tags jsonb,
    type jsonb,
    isinactiveauthoriser boolean DEFAULT false,
    spare_1 text DEFAULT ''::text,
    CONSTRAINT user_pkey PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS user_active ON public."user" USING btree(active ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS user_is_group ON public."user" USING btree(is_group ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS user_license_category_id ON public."user" USING btree(license_category_id ASC NULLS LAST);


CREATE TABLE IF NOT EXISTS public.user_store
(
    id text NOT NULL DEFAULT ''::text,
    user_id text DEFAULT ''::text,
    store_id text DEFAULT ''::text,
    can_login boolean DEFAULT false,
    store_default boolean DEFAULT false,
    can_action_replenishments boolean DEFAULT false,
    permissions bytea,
    CONSTRAINT user_store_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS user_store_can_login ON public.user_store USING btree(can_login ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS user_store_store_default ON public.user_store USING btree(store_default ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS user_store_store_id ON public.user_store USING btree(store_id ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS user_store_user_id ON public.user_store USING btree(user_id ASC NULLS LAST);

CREATE TABLE public.unit
(
    id text NOT NULL DEFAULT ''::text,
    units text DEFAULT ''::text,
    comment text DEFAULT ''::text,
    order_number double precision DEFAULT 0,
    CONSTRAINT unit_pkey PRIMARY KEY (id)
);

CREATE TABLE public.location
(
    id text NOT NULL DEFAULT ''::text,
    code text DEFAULT ''::text,
    description text DEFAULT ''::text,
    comment text DEFAULT ''::text,
    volume double precision DEFAULT 0,
    type_id text DEFAULT ''::text,
    object_type text DEFAULT ''::text,
    parent_id text DEFAULT ''::text,
    colour text DEFAULT ''::text,
    bottom_y_coordinate double precision DEFAULT 0,
    summary_only boolean DEFAULT false,
    store_id text DEFAULT ''::text,
    priority integer DEFAULT 0,
    hold boolean DEFAULT false,
    replenishment_type text DEFAULT ''::text,
    asset_id text DEFAULT ''::text,
    CONSTRAINT location_pkey PRIMARY KEY (id)
);

CREATE INDEX location_priority ON public.location USING btree(priority);
CREATE INDEX location_store_id ON public.location USING btree(store_id);
CREATE INDEX location_type_id ON public.location USING btree(type_id);

CREATE TABLE public.site
(
    id text NOT NULL DEFAULT ''::text,
    site_id integer DEFAULT 0,
    sync_out_ids text DEFAULT ''::text,
    app_name text DEFAULT ''::text,
    name text DEFAULT ''::text,
    password text DEFAULT ''::text,
    spare_address text DEFAULT ''::text,
    prefs text DEFAULT ''::text,
    hardwareid text DEFAULT ''::text,
    app_version text DEFAULT ''::text,
    code text DEFAULT ''::text,
    sync_version text DEFAULT ''::text,
    initialisation_status text DEFAULT ''::text,
    last_sync_date date,
    last_sync_time time without time zone DEFAULT '00:00:00'::time without time zone,
    support_client_id text DEFAULT ''::text,
    is_omsupply_central_server boolean DEFAULT false,
    omsupply_central_server_url text DEFAULT ''::text,
    first_sync_date date,
    first_sync_time time without time zone DEFAULT '00:00:00'::time without time zone,
    support_start_date date,
    support_end_date date,
    license_code text DEFAULT ''::text,
    funder_id text DEFAULT ''::text,
    concurrent_users_licensed smallint DEFAULT 0,
    CONSTRAINT site_pkey PRIMARY KEY (id)
);

CREATE INDEX site_app_name ON public.site USING btree (app_name);
CREATE INDEX site_code ON public.site USING btree (code);
CREATE INDEX site_initialisation_status ON public.site USING btree (initialisation_status);
CREATE INDEX site_last_sync_date ON public.site USING btree (last_sync_date);
CREATE INDEX site_last_sync_time ON public.site USING btree (last_sync_time);
CREATE INDEX site_name ON public.site USING btree (name);
CREATE INDEX site_site_id ON public.site USING btree(site_id);
CREATE INDEX site_support_client_id ON public.site USING btree (support_client_id);


CREATE TABLE IF NOT EXISTS public.site_log
(
    id text NOT NULL DEFAULT ''::text,
    date date,
    site_id integer DEFAULT 0,
    event text DEFAULT ''::text,
    description text DEFAULT ''::text,
    data jsonb,
    "time" time without time zone DEFAULT '00:00:00'::time without time zone,
    CONSTRAINT site_log_pkey PRIMARY KEY (id)
);
CREATE INDEX IF NOT EXISTS site_log_date ON public.site_log USING btree(date ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS site_log_event ON public.site_log USING btree(event ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS site_log_site_id ON public.site_log USING btree(site_id ASC NULLS LAST);

CREATE TABLE IF NOT EXISTS public.temperature_log
(
    id text NOT NULL DEFAULT ''::text,
    temperature double precision DEFAULT 0,
    date date,
    "time" time without time zone DEFAULT '00:00:00'::time without time zone,
    location_id text DEFAULT ''::text,
    temperature_breach_id text DEFAULT ''::text,
    store_id text DEFAULT ''::text,
    sensor_id text DEFAULT ''::text,
    log_interval integer DEFAULT 0,
    om_datetime text DEFAULT ''::text,
    CONSTRAINT temperature_log_pkey PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS temperature_log_date ON public.temperature_log USING btree (date ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS temperature_log_location_id ON public.temperature_log USING btree (location_id ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS temperature_log_sensor_id ON public.temperature_log USING btree (sensor_id ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS temperature_log_store_id ON public.temperature_log USING btree(store_id ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS temperature_log_temperature ON public.temperature_log USING btree (temperature ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS temperature_log_temperature_breach_id ON public.temperature_log USING btree (temperature_breach_id ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS temperature_log_time ON public.temperature_log USING btree ("time" ASC NULLS LAST);

CREATE TABLE IF NOT EXISTS public.temperature_breach
(
    id text NOT NULL DEFAULT ''::text,
    start_date date,
    start_time time without time zone DEFAULT '00:00:00'::time without time zone,
    end_date date,
    end_time time without time zone DEFAULT '00:00:00'::time without time zone,
    location_id text DEFAULT ''::text,
    store_id text DEFAULT ''::text,
    temperature_breach_config_id text DEFAULT ''::text,
    acknowledged boolean DEFAULT false,
    sensor_id text DEFAULT ''::text,
    threshold_maximum_temperature double precision DEFAULT 0,
    threshold_minimum_temperature double precision DEFAULT 0,
    threshold_duration integer DEFAULT 0,
    type text DEFAULT ''::text,
    duration integer DEFAULT 0,
    om_start_datetime text DEFAULT ''::text,
    om_end_datetime text DEFAULT ''::text,
    om_comment text DEFAULT ''::text,
    CONSTRAINT temperature_breach_pkey PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS temperature_breach_acknowledged ON public.temperature_breach USING btree (acknowledged ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS temperature_breach_location_id ON public.temperature_breach USING btree (location_id ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS temperature_breach_sensor_id ON public.temperature_breach USING btree (sensor_id ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS temperature_breach_store_id ON public.temperature_breach USING btree (store_id ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS temperature_breach_temperature_breach_config_id ON public.temperature_breach USING btree (temperature_breach_config_id ASC NULLS LAST);

CREATE TABLE IF NOT EXISTS public.sensor
(
    id text NOT NULL DEFAULT ''::text,
    locationid text DEFAULT ''::text,
    name text DEFAULT ''::text,
    macaddress text DEFAULT ''::text,
    batterylevel double precision DEFAULT 0,
    temperature double precision DEFAULT 0,
    lastconnectiondate date,
    lastconnectiontime time without time zone DEFAULT '00:00:00'::time without time zone,
    storeid text DEFAULT ''::text,
    loginterval integer DEFAULT 0,
    numberoflogs integer DEFAULT 0,
    is_active boolean DEFAULT false,
    log_delay_time time without time zone DEFAULT '00:00:00'::time without time zone,
    log_delay_date date,
    programmed_date date,
    programmed_time time without time zone DEFAULT '00:00:00'::time without time zone,
    asset_id text DEFAULT ''::text,
    om_last_connection_datetime text DEFAULT ''::text,
    CONSTRAINT sensor_pkey PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS sensor_is_active ON public.sensor USING btree (is_active ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS sensor_locationid ON public.sensor USING btree (locationid ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS sensor_storeid ON public.sensor USING btree (storeid ASC NULLS LAST);

CREATE TABLE public.d_monthly_item_active_store_join
(
    item_id text DEFAULT ''::text,
    store_ids jsonb, 
    monthyear text DEFAULT ''::text,
    is_critical boolean DEFAULT false,
    CONSTRAINT d_monthly_item_active_store_join_pkey PRIMARY KEY (item_id, monthyear)
);

CREATE INDEX d_monthly_item_active_store_join_item_id ON public.d_monthly_item_active_store_join USING btree(item_id);
CREATE INDEX d_monthly_item_active_store_join_monthyear ON public.d_monthly_item_active_store_join USING btree(monthyear);
CREATE INDEX d_monthly_item_active_store_join_store_ids ON public.d_monthly_item_active_store_join USING GIN (store_ids);


CREATE TABLE IF NOT EXISTS public.d_msupply_monthly_usage (
    index integer NOT NULL,
    yearmonth text NOT NULL,
    usage text NOT NULL, 
    store_id text NOT NULL,
    value double precision DEFAULT 0,
    score integer DEFAULT 0,
    updated_date timestamp default current_timestamp, 
    version integer,
    CONSTRAINT d_msupply_monthly_usage_pkey PRIMARY KEY (usage, yearmonth, store_id)
);

CREATE SEQUENCE d_aggregator_monthly_soh_id_seq START 1;
CREATE TABLE public.d_aggregator_monthly_soh
(
    id integer NOT NULL DEFAULT nextval('d_aggregator_monthly_soh_id_seq'::regclass),
    storeid text DEFAULT ''::text,
    itemid text DEFAULT ''::text,
    monthyear text DEFAULT ''::text,
    value double precision DEFAULT 0,
    fulldate date,
    dataelement text DEFAULT ''::text,
    temp1 double precision DEFAULT 0,
    CONSTRAINT aggregator_monthly_soh_pkey PRIMARY KEY (id)
);

CREATE INDEX d_aggregator_monthly_soh_fulldate ON public.d_aggregator_monthly_soh USING btree(fulldate ASC NULLS LAST);
CREATE INDEX d_aggregator_monthly_soh_itemid ON public.d_aggregator_monthly_soh USING btree(itemid ASC NULLS LAST);
CREATE INDEX d_aggregator_monthly_soh_monthyear ON public.d_aggregator_monthly_soh USING btree(monthyear ASC NULLS LAST);
CREATE INDEX d_aggregator_monthly_soh_storeid ON public.d_aggregator_monthly_soh USING btree(storeid ASC NULLS LAST);

CREATE TABLE IF NOT EXISTS public.d_daily_sensor_battery_log
(
    sensor_id text NOT NULL DEFAULT ''::text,
    name text NOT NULL DEFAULT ''::text,
    log_datetime timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    batterylevel double precision DEFAULT 0,
    is_active boolean DEFAULT false,
    last_temperature_log_datetime timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT d_daily_sensor_battery_log_pkey PRIMARY KEY (sensor_id, name, log_datetime)
);

CREATE INDEX IF NOT EXISTS d_daily_sensor_battery_log_name ON public.d_daily_sensor_battery_log USING btree (name ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS d_daily_sensor_battery_log_sensor_id ON public.d_daily_sensor_battery_log USING btree (sensor_id ASC NULLS LAST);
CREATE INDEX IF NOT EXISTS log_datetime ON public.d_daily_sensor_battery_log USING btree (log_datetime ASC NULLS LAST);

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


CREATE OR REPLACE VIEW store_categories AS (
    SELECT
		store.id,
		store.name, 
		store.code, 
		COALESCE(NULLIF(name_category6.description, ''), store.name) AS facility_name,
		CASE WHEN store.organisation_name = '' THEN 'NONE' ELSE store.organisation_name END AS organisation, 
		CASE WHEN name_category1 IS NULL THEN 'NONE' ELSE name_category1.description END AS category1, 
		CASE WHEN name_category1_level2.description IS NULL THEN 'NONE' ELSE name_category1_level2.description END AS category1_level2, 
		CASE WHEN name_category1_level1.description IS NULL THEN 'NONE' ELSE name_category1_level1.description END AS category1_level1, 
		CASE WHEN name_category2 IS NULL THEN 'NONE' ELSE name_category2.description END AS category2, 
		CASE WHEN name_category3 IS NULL THEN 'NONE' ELSE name_category3.description END AS category3, 
		CASE WHEN name_category4 IS NULL THEN 'NONE' ELSE name_category4.description END AS category4, 
		CASE WHEN name_category5 IS NULL THEN 'NONE' ELSE name_category5.description END AS category5, 
		CASE WHEN name_category6 IS NULL THEN 'NONE' ELSE name_category6.description END AS category6, 
		store.store_mode AS MODE, 
		store.disabled,
		store.name_id,
		store.sync_id_remote_site AS site_id,
		store.created_date 
	FROM 
		store 
		LEFT OUTER JOIN NAME ON store.name_id = name.id 
		LEFT OUTER JOIN name_category1 ON name_category1.id = name.category1_id 
		LEFT OUTER JOIN name_category1_level2 ON name_category1.parent_id = name_category1_level2.id 
		LEFT OUTER JOIN name_category1_level1 ON name_category1_level2.parent_id = name_category1_level1.id 
		LEFT OUTER JOIN name_category2 ON name_category2.id = name.category2_id 
		LEFT OUTER JOIN name_category3 ON name_category3.id = name.category3_id 
		LEFT OUTER JOIN name_category4 ON name_category4.id = name.category4_id 
		LEFT OUTER JOIN name_category5 ON name_category5.id = name.category5_id 
		LEFT OUTER JOIN name_category6 ON name_category6.id = name.category6_id
);

CREATE OR REPLACE VIEW v_central_warehouse AS (
    SELECT
		store.code
	FROM 
		store 
	WHERE store.code IN ('GEN') -- Need to fix per country
);

-- FUNCTIONS --
CREATE OR REPLACE FUNCTION public.dynamic_pivot(
	central_query text,
	headers_query text,
	refcursor)
    RETURNS refcursor
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $function$DECLARE
  left_column text;
  header_column text;
  value_column text;
  h_value text;
  headers_clause text;
  query text;
  j json;
  r record;
  curs refcursor;
  i int:=1;
  extra_column text;
  first_column text;
BEGIN
  -- find the column names of the source query
  EXECUTE 'select row_to_json(_r.*) from (' ||  central_query || ') AS _r' into j;
  if (j is null ) then
 	query = 'select ''''';
  else
	  FOR r in SELECT * FROM json_each_text(j)
	  LOOP
	    IF (i=1) THEN left_column := r.key;
	      ELSEIF (i=2) THEN header_column := r.key;
	      ELSEIF (i=3) THEN value_column := r.key;
	      ELSEIF (i=4) THEN extra_column := format(',%I', r.key);
		  ELSEIF (i=5) then first_column := format('%I,', r.key);
	    END IF;
	    i := i+1;
	  END LOOP;
	
	  --  build the dynamic transposition query (based on the canonical model)
	  FOR h_value in EXECUTE headers_query
	  LOOP
	    headers_clause := concat(headers_clause,
	     format(chr(10)||',min(case when %I=%L then %I::text end) as %I',
	           header_column,
		   h_value,
		   value_column,
		   h_value ));
	  END LOOP;
	
	 query = format('SELECT %s %I %s %s FROM (select *,row_number() over() as rn from (%s) AS _c) as _d GROUP BY %s %I %s order by min(rn)',
	           	first_column,
	           	left_column,
	           	extra_column,
		   		headers_clause,
		   		central_query,
		   		first_column,
				left_column,
				extra_column);
  end if;

  -- open the cursor so the caller can FETCH right away
  OPEN $3 FOR execute query;
  RETURN $3;
END 
$function$;


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

-- SUPERSEDED: redefined by the POSTGRES AGGREGATOR block at the end of this
-- file (#799). That version takes an advisory lock and derives AMC from the
-- latest AMC run only, instead of max(value) across every AMC row. Kept here
-- for reference/history; the later definition is the one that takes effect.
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

CREATE OR REPLACE PROCEDURE public.create_materialised_views(
	)
LANGUAGE 'plpgsql'

AS $procedure$
BEGIN
    /* ******************************************************* */
    /* ****** VIEW : mv_visible_item_store_join   ************ */
	/* ******************************************************* */
    IF EXISTS (SELECT * FROM pg_matviews WHERE matviewname = 'mv_visible_item_store_join') THEN
        REFRESH MATERIALIZED VIEW CONCURRENTLY public.mv_visible_item_store_join;
	ELSE
        CREATE MATERIALIZED VIEW public.mv_visible_item_store_join
            TABLESPACE pg_default AS
            SELECT store.id AS store_id, store.name AS store_name, store.code AS store_code, item.id AS item_id, item_name, item.code AS item_code, item.unit_id
            FROM store 
            JOIN item_store_join isj ON store.id = isj.store_id AND isj.inactive = false
            JOIN item ON isj.item_id = item.id
            WITH DATA;

            CREATE UNIQUE INDEX mv_visible_item_store_join_idx ON mv_visible_item_store_join (store_id, store_name, item_id, item_name);
	END IF;
END 
$procedure$;

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
		group by 1,2,3,4,svc.value;
	END $procedure$
;

CREATE OR REPLACE PROCEDURE public.aggregate_monthlysoh(IN p_yearmonth text DEFAULT  'YYYYMM'::text, IN is_delete_old_data boolean DEFAULT false, IN months_to_keep integer DEFAULT 12)
LANGUAGE 'plpgsql'
AS $procedure$
declare 
    s_yearmonth text;
    date_end date;
begin 
    -- the day FROM and TO 
    IF (length(p_yearmonth) <> 6) THEN 
        RAISE NOTICE 'yearmonth should be the format with YYYYMM :%', p_yearmonth::text;
        RETURN;
    END IF;

    IF (p_yearmonth = 'YYYYMM') THEN 
        -- the day FROM and TO 
        SELECT TO_CHAR(current_date - interval '1 days', 'YYYYMM'), current_date - interval '1 days' INTO s_yearmonth, date_end; 
    ELSE
        s_yearmonth:= p_yearmonth;
        SELECT TO_DATE(CONCAT(p_yearmonth, '01'),'YYYYMMDD') + interval '1 month' + '- 1 day' INTO date_end; 
	END IF;

    RAISE NOTICE 'yearmonth :%', s_yearmonth::text;
    RAISE NOTICE 'end date :%', date_end::text;

    DELETE FROM d_aggregator_monthly_soh WHERE dataelement='monthlyStockOnHand' AND monthyear = s_yearmonth;
    
    IF is_delete_old_data = true THEN
        -- delete the old values
        DELETE FROM d_aggregator_monthly_soh WHERE dataelement='monthlyStockOnHand' AND monthyear NOT IN (SELECT TO_CHAR(mm, 'YYYYMM') FROM generate_series(date_end - CAST(months_to_keep || ' month' AS interval), date_end, '1 month')mm);
    END IF;

    DELETE FROM d_monthly_item_active_store_join WHERE monthyear = s_yearmonth;
    -- item_store_join at the end of month
    INSERT INTO d_monthly_item_active_store_join(item_id, store_ids, monthyear, is_critical) 
    SELECT item_id, ARRAY_TO_JSON(ARRAY_AGG(store_id))::jsonb, s_yearmonth, i.critical_stock
    FROM item_store_join isj JOIN item i ON i.id = isj.item_id 
    WHERE isj.inactive = false 
    GROUP BY item_id, i.critical_stock;

    WITH monthly_rank AS(
        SELECT agg.storeid, agg.itemid, value, fulldate, RANK() OVER(PARTITION BY agg.storeid, agg.itemid ORDER BY fulldate DESC) AS ranking
        FROM aggregator agg 
        WHERE dataelement = 'stockHistory' 
        AND fulldate <= date_end
    )
    INSERT INTO d_aggregator_monthly_soh (storeid, itemid,value, fulldate, dataelement, monthyear)
    SELECT storeid, itemid, COALESCE(mr.value, 0) AS value, COALESCE(fulldate, date_end), 'monthlyStockOnHand', s_yearmonth
    FROM monthly_rank mr
	WHERE ranking = 1;

end
$procedure$;

CREATE OR REPLACE PROCEDURE public.create_view_report_cards(
	)
LANGUAGE 'sql'
AS $procedure$
 	
CREATE OR REPLACE VIEW store_categories AS (
    SELECT
		store.id,
		store.name, 
		store.code, 
		COALESCE(NULLIF(name_category6.description, ''), store.name) AS facility_name,
		CASE WHEN store.organisation_name = '' THEN 'NONE' ELSE store.organisation_name END AS organisation, 
		CASE WHEN name_category1 IS NULL THEN 'NONE' ELSE name_category1.description END AS category1, 
		CASE WHEN name_category1_level2.description IS NULL THEN 'NONE' ELSE name_category1_level2.description END AS category1_level2, 
		CASE WHEN name_category1_level1.description IS NULL THEN 'NONE' ELSE name_category1_level1.description END AS category1_level1, 
		CASE WHEN name_category2 IS NULL THEN 'NONE' ELSE name_category2.description END AS category2, 
		CASE WHEN name_category3 IS NULL THEN 'NONE' ELSE name_category3.description END AS category3, 
		CASE WHEN name_category4 IS NULL THEN 'NONE' ELSE name_category4.description END AS category4, 
		CASE WHEN name_category5 IS NULL THEN 'NONE' ELSE name_category5.description END AS category5, 
		CASE WHEN name_category6 IS NULL THEN 'NONE' ELSE name_category6.description END AS category6, 
		store.store_mode AS MODE, 
		store.disabled,
		store.name_id,
		store.sync_id_remote_site AS site_id,
		store.created_date 
	FROM 
		store 
		LEFT OUTER JOIN NAME ON store.name_id = name.id 
		LEFT OUTER JOIN name_category1 ON name_category1.id = name.category1_id 
		LEFT OUTER JOIN name_category1_level2 ON name_category1.parent_id = name_category1_level2.id 
		LEFT OUTER JOIN name_category1_level1 ON name_category1_level2.parent_id = name_category1_level1.id 
		LEFT OUTER JOIN name_category2 ON name_category2.id = name.category2_id 
		LEFT OUTER JOIN name_category3 ON name_category3.id = name.category3_id 
		LEFT OUTER JOIN name_category4 ON name_category4.id = name.category4_id 
		LEFT OUTER JOIN name_category5 ON name_category5.id = name.category5_id 
		LEFT OUTER JOIN name_category6 ON name_category6.id = name.category6_id
);

CREATE OR REPLACE VIEW v_central_warehouse AS (
    SELECT
		store.code
	FROM 
		store 
	WHERE store.code IN ('GEN') -- Need to fix per country
);

$procedure$;

CREATE OR REPLACE PROCEDURE public.report_card_stats(
	is_past_month boolean DEFAULT false,
	p_yearmonth text DEFAULT 'YYYYMM'::text,
	arr_indicators text[] DEFAULT ARRAY['All'::text])
LANGUAGE 'plpgsql'
AS $procedure$
declare 
	s_yearmonth text;
    d_date_new_logic_begin date;
	s_yearmonth_iasj text;
    d_date_begin date;
    d_date_end date;
    i_index integer;
    i_version integer;
    arr_code_warehouse text[];
begin 

    -- call create store_categories to use facility_name
    CALL public.create_view_report_cards();

    -- warehouse will be depending on the country
    arr_code_warehouse := ARRAY(
        SELECT code
        FROM v_central_warehouse
    );

    -- set date for a new logic
    d_date_new_logic_begin:='20260101'::date;

    -- the day FROM and TO 
    IF (is_past_month = true) AND (length(p_yearmonth) <> 6) THEN 
        RAISE NOTICE 'yearmonth should be the format with YYYYMM :%', p_yearmonth::text;
        RETURN;
    END IF;

    IF (LOWER(arr_indicators[1])='all') THEN
		arr_indicators=array['1', '2', '3', '4','5','6','7'];
	END IF;

    IF ((is_past_month = false) OR (p_yearmonth = 'YYYYMM')) THEN 
        i_version:=2; -- the new logic
        SELECT TO_CHAR(current_date, 'YYYYMM'),  DATE_TRUNC('month', current_date),  current_date INTO s_yearmonth, d_date_begin, d_date_end;     
    ELSE
        SELECT TO_DATE(CONCAT(p_yearmonth, '01'),'YYYYMMDD'),  TO_DATE(CONCAT(p_yearmonth, '01'),'YYYYMMDD') + interval '1 month' + '- 1 day' INTO d_date_begin, d_date_end; 
        s_yearmonth:= p_yearmonth;

        IF(d_date_new_logic_begin <= d_date_end) THEN -- past but with the new logic
			i_version:=2;
        ELSE
            i_version:=1;
            -- get the minimum month if the d_monthly_item_active_store_join does not have the data (if the old month, no d_monthly_item_active_store_join)
            SELECT MAX(monthyear) FROM d_monthly_item_active_store_join disj INTO s_yearmonth_iasj;
        END IF;
	END IF;

    RAISE NOTICE 'yearmonth :%', s_yearmonth::text;
    RAISE NOTICE 'creating date with version: %', i_version::text;
    --RAISE NOTICE 'begin date :%', d_date_begin::text;
    --RAISE NOTICE 'end date :%', d_date_end::text;
 
    -- create temp table 
    DROP TABLE IF EXISTS tt_msupply_usage_temp;
    CREATE TEMP TABLE tt_msupply_usage_temp
    (
        index integer NOT NULL,
        store_id text NOT NULL,
        usage text NOT NULL,
        yearmonth text NOT NULL,
        value double precision,
        score integer,
        temp text,
        CONSTRAINT tt_msupply_usage_temp_pkey PRIMARY KEY (usage, yearmonth, store_id)
    );

    /* 1 : '% of items out of stock' */
    i_index:=1;
    IF ((i_version = 2) AND (array_position(arr_indicators, i_index::TEXT)>0)) THEN 
        -- creating data with facility_name
        INSERT INTO tt_msupply_usage_temp (index, store_id, usage, yearmonth, value, score)
        SELECT 
            99 AS index, ARRAY_TO_JSON(ARRAY_AGG(sc.id))::TEXT, '% of items out of stock', s_yearmonth AS yearmonth, value AS value, 
    CASE WHEN value IS NULL THEN 0 WHEN value < 11 THEN 2 WHEN value < 21 THEN 1 ELSE 0 END AS score
        FROM store_categories sc 
        LEFT JOIN (
            SELECT facility_name, (out * 100.0 / (out + available)) AS value   
            FROM (
                SELECT facility_name, SUM(case when value > 0 then 1 else 0 end) AS available, 
                SUM(case when value > 0 then 0 else 1 end) AS out 
                FROM (
                    SELECT sc.facility_name, item_id, SUM(value) AS value
                    FROM (SELECT id, UNNEST(string_to_array(tags, ' ')) AS store_tag FROM store) s 
                    JOIN (
                        SELECT lm.description, lm.tags::jsonb -> 'tags' ->> 0 AS critical_item_tag, lml.item_id   
                        FROM list_master lm 
                        JOIN list_master_line lml ON lm.id = lml.item_master_id 
                        WHERE lm.tags::TEXT IS NOT NULL 
                    ) ci ON ci.critical_item_tag = s.store_tag
                    JOIN store_categories sc ON s.id = sc.id  
                    LEFT JOIN d_aggregator_monthly_soh agg on agg.itemid = ci.item_id AND agg.storeid = s.id  AND monthyear = s_yearmonth 
                    GROUP BY sc.facility_name, item_id
                ) AS items                 
                GROUP BY facility_name
            ) AS items 
        ) AS item_stock ON sc.facility_name = item_stock.facility_name 
        WHERE sc.mode IN ('store', 'dispensary') AND sc.disabled = false AND sc.created_date <= d_date_end 
        GROUP BY sc.facility_name, value; 

        -- insert by store_id
        /* all */
        INSERT INTO tt_msupply_usage_temp (index, store_id, usage, yearmonth, value, score)
        SELECT 
            1, store.id, usage, yearmonth, value, score
        FROM store  
        JOIN tt_msupply_usage_temp ON tt_msupply_usage_temp.store_id::jsonb ?| array[store.id] 
        WHERE index = 99;

    ELSIF ((i_version = 1) AND (array_position(arr_indicators, i_index::TEXT)>0)) THEN            
            INSERT INTO tt_msupply_usage_temp (index, store_id, usage, yearmonth, value, score)
            SELECT
                1, s.id, '% of items out of stock', s_yearmonth, COALESCE(value,0),
                CASE WHEN COALESCE(value,0) < 11 THEN 2 WHEN value < 21 THEN 1 ELSE 0 END
            FROM store s
            LEFT JOIN (
                SELECT store_id, (out * 100.0 / (out + available)) AS value
                    FROM (
                        SELECT store_id, SUM(case when value > 0 then 1 else 0 end) AS available,
                        SUM(case when value > 0 then 0 else 1 end) AS out
                        FROM (
                        SELECT
                                isj.store_id, isj.item_id, value
                            FROM item i
                            JOIN (
                            SELECT
                                disj.item_id,
                                jsonb_array_elements_text(store_ids) AS store_id,
                                is_critical
                            FROM d_monthly_item_active_store_join disj
                            WHERE is_critical = true
                            AND monthyear = s_yearmonth_iasj
                            ) isj ON i.id = isj.item_id
                            JOIN store s ON isj.store_id = s.id
                            LEFT JOIN d_aggregator_monthly_soh agg on agg.itemid = i.id AND
                            agg.storeid = isj.store_id  AND monthyear = s_yearmonth
                        ) AS items
                        GROUP BY store_id
                    ) AS items
            ) AS item_stock ON s.id = item_stock.store_id
            WHERE store_mode IN ('store', 'dispensary') AND s.disabled = false AND s.created_date <= d_date_end;
    END IF;

    /* 2 : 'Days since last transaction' */
    i_index:=2;
    IF ((is_past_month = false) OR ((is_past_month = true) AND (array_position(arr_indicators, i_index::TEXT)>0))) THEN 
        /* transaction (SI, CI Prescription, Inventory Adj) */
        INSERT INTO tt_msupply_usage_temp (index, store_id, usage, yearmonth, temp, score)
        SELECT 999, store_id, 'temp_transaction', s_yearmonth ,MAX(entry_date)::text, 0 FROM transact WHERE entry_date <= d_date_end GROUP BY store_id;
        
        /*  StockTake */
        INSERT INTO tt_msupply_usage_temp (index, store_id, usage, yearmonth, temp, score)
        SELECT 999, store_id, 'temp_stocktake', s_yearmonth ,MAX(stock_take_created_date)::text, 0 FROM stock_take WHERE stock_take_created_date <= d_date_end GROUP BY store_id;
        
        /*  PO */
        INSERT INTO tt_msupply_usage_temp (index, store_id, usage, yearmonth, temp, score)
        SELECT 999, store_id, 'temp_po', s_yearmonth ,MAX(creation_date)::text, 0 FROM purchase_order WHERE creation_date <= d_date_end GROUP BY store_id;
        
        /*  Goods receipt */
        INSERT INTO tt_msupply_usage_temp (index, store_id, usage, yearmonth, temp, score)
        SELECT 999, store_id, 'temp_gr', s_yearmonth ,MAX(entry_date)::text, 0 FROM goods_received WHERE entry_date <= d_date_end GROUP BY store_id;
        
        /* all */
        INSERT INTO tt_msupply_usage_temp (index, store_id, usage, yearmonth, value, score)
        SELECT 
            2, s.id, 'Days since last transaction', s_yearmonth, value, CASE WHEN value < 8 THEN 2 WHEN value < 15 THEN 1 ELSE 0 END
        FROM store s 
        LEFT JOIN (
            SELECT store_id, yearmonth, d_date_end - MAX(temp::date) AS value FROM tt_msupply_usage_temp WHERE index = 999 GROUP BY store_id, yearmonth 
        ) AS t ON s.id = t.store_id 
        WHERE store_mode IN ('store', 'dispensary') AND s.disabled = false;
    END IF;
    
    /* 3 : 'Days since stocktake' */
    i_index:=3;
    IF ((is_past_month = false) OR ((is_past_month = true) AND (array_position(arr_indicators, i_index::TEXT)>0))) THEN

        INSERT INTO tt_msupply_usage_temp (index, store_id, usage, yearmonth, value, score)
        SELECT 
            3, s.id, 'Days since stocktake', s_yearmonth, value, CASE WHEN value < 31 THEN 1 ELSE 0 END
        FROM store s 
        LEFT JOIN (
            SELECT store_id, d_date_end - MAX(stock_take_date) AS value FROM stock_take WHERE stock_take_date <= d_date_end AND status IN ('cn','fn') GROUP BY store_id 
        ) AS st ON s.id = st.store_id 
        WHERE store_mode IN ('store', 'dispensary') AND s.disabled = false;
    END IF;

    /* 4 : 'Pending customer invoices' */
    i_index:=4;
    IF ((is_past_month = false) OR ((is_past_month = true) AND (array_position(arr_indicators, i_index::TEXT)>0))) THEN
        INSERT INTO tt_msupply_usage_temp (index, store_id, usage, yearmonth, value, score)
        SELECT 4, s.id, 'Pending customer invoices', s_yearmonth, COALESCE(value,0), CASE WHEN COALESCE(value,0) < 11 THEN 2 WHEN value < 21 THEN 1 ELSE 0 END 
        FROM store s 
        LEFT JOIN (
            SELECT store_id, COUNT(DISTINCT id) AS value FROM transact WHERE type = 'ci' AND invoice_num <> 0 AND entry_date <= d_date_end AND ((confirm_date IS NULL AND status <> 'fn') OR confirm_date > d_date_end) GROUP BY store_id 
        ) AS ci ON s.id = ci.store_id 
        WHERE store_mode IN ('store', 'dispensary') AND s.disabled = false;
    END IF;

    /* 5 : 'Outstanding Supplier invoices' */
    i_index:=5;
    IF ((is_past_month = false) OR ((is_past_month = true) AND (array_position(arr_indicators, i_index::TEXT)>0))) THEN
        INSERT INTO tt_msupply_usage_temp (index, store_id, usage, yearmonth, value, score)
        SELECT 5, s.id, 'Outstanding Supplier invoices', s_yearmonth, COALESCE(value,0), CASE WHEN COALESCE(value,0) < 3 THEN 2 WHEN value < 6 THEN 1 ELSE 0 END 
        FROM store s 
        LEFT JOIN (
            SELECT store_id, COUNT(DISTINCT t.id) AS value 
            FROM transact t
            JOIN name n ON t.name_id = n.id AND n.code <> 'invad'
            WHERE t.type = 'si' AND entry_date <= d_date_end AND ((confirm_date IS NULL AND status <> 'fn') OR confirm_date > d_date_end) GROUP BY store_id 
        ) AS si ON s.id = si.store_id 
        WHERE store_mode IN ('store', 'dispensary') AND s.disabled = false;
    END IF;

    /* 6 : 'Pending purchase orders' - we can not get this value from the past data since there is no finalised date */
    i_index:=6;
    IF (is_past_month = false) THEN
        INSERT INTO tt_msupply_usage_temp (index, store_id, usage, yearmonth, value, score)
        SELECT 6, s.id, 'Pending purchase orders', s_yearmonth, CASE WHEN code ILIKE ANY (arr_code_warehouse) THEN COALESCE(value,0) ELSE NULL END, CASE WHEN code ILIKE ANY (arr_code_warehouse) THEN (CASE WHEN value > 10 THEN 0 ELSE 1 END) ELSE NULL END 
        FROM store s 
        LEFT JOIN (
            SELECT store_id, COUNT(DISTINCT id) AS value FROM purchase_order 
            WHERE status <> 'fn'
            AND store_id IN (SELECT id FROM store WHERE code ILIKE ANY (arr_code_warehouse)) 
            AND creation_date <= d_date_end - interval '1 year'
            GROUP BY store_id		
        )AS po ON s.id = po.store_id 
        WHERE store_mode IN ('store', 'dispensary') AND s.disabled = false AND s.created_date <= d_date_end; 
    ELSE
        /* Return NULL */
        INSERT INTO tt_msupply_usage_temp (index, store_id, usage, yearmonth, value, score)
            SELECT 6, s.id, 'Pending purchase orders', s_yearmonth, NULL, NULL  
            FROM store s 
            WHERE store_mode IN ('store', 'dispensary') AND s.disabled = false AND s.created_date <= d_date_end;
    END IF;

    /* 7 : 'Internal orders placed in past 90 days' */
    i_index:=7;
    IF ((is_past_month = false) OR ((is_past_month = true) AND (array_position(arr_indicators, i_index::TEXT)>0))) THEN
        INSERT INTO tt_msupply_usage_temp (index, store_id, usage, yearmonth, value, score)
        SELECT 
            7, s.id, 'Internal orders placed in past 90 days', s_yearmonth, CASE WHEN code NOT ILIKE ANY (arr_code_warehouse) THEN COALESCE(value,0) ELSE NULL END, CASE WHEN code NOT ILIKE ANY (arr_code_warehouse) THEN (CASE WHEN value > 0 THEN 1 ELSE 0 END) ELSE NULL END 
        FROM store s 
        LEFT JOIN (
            SELECT req.store_id, COUNT(DISTINCT req.id) AS value 
            FROM requisition req 
            JOIN requisition res on res.linked_requisition_id = req.id 
            WHERE req.type = 'request' 
            AND res.date_order_received BETWEEN d_date_end - interval '3 months' AND d_date_end
            AND req.store_id IN (SELECT id FROM store WHERE code NOT ILIKE ANY (arr_code_warehouse)) 
            GROUP BY req.store_id 
        ) AS io ON s.id = io.store_id 
        WHERE store_mode IN ('store', 'dispensary') AND s.disabled = false AND s.created_date <= d_date_end;
    END IF;

    -- insert to the monthly table
    INSERT INTO public.d_msupply_monthly_usage (index, usage, yearmonth, store_id ,value, score, version)
    SELECT index, usage, yearmonth, store_id ,value, score, i_version
    FROM tt_msupply_usage_temp WHERE index NOT IN (999, 6, 99) 
    ON CONFLICT ON CONSTRAINT d_msupply_monthly_usage_pkey 
    DO UPDATE SET index = EXCLUDED.index, value = EXCLUDED.value, score = EXCLUDED.score, updated_date = current_timestamp, version = EXCLUDED.version;

    -- index = 6, don't update the existing data
    IF (is_past_month = true) THEN
        INSERT INTO public.d_msupply_monthly_usage (index, usage, yearmonth, store_id, value, score, version)
        SELECT index, usage, yearmonth, store_id, value, score, i_version
        FROM tt_msupply_usage_temp WHERE index = 6 
        ON CONFLICT ON CONSTRAINT d_msupply_monthly_usage_pkey  DO NOTHING;
    ELSE
        INSERT INTO public.d_msupply_monthly_usage (index, usage, yearmonth, store_id, value, score, version)
        SELECT index, usage, yearmonth, store_id, value, score, i_version
        FROM tt_msupply_usage_temp WHERE index = 6 
        ON CONFLICT ON CONSTRAINT d_msupply_monthly_usage_pkey 
        DO UPDATE SET index = EXCLUDED.index, value = EXCLUDED.value, score = EXCLUDED.score, updated_date = current_timestamp, version = EXCLUDED.version;
    END IF; 

    DROP TABLE IF EXISTS tt_msupply_usage_temp;
end
$procedure$;


CREATE OR REPLACE PROCEDURE public.cc_sensor_battery_log(
	)
LANGUAGE 'plpgsql'
AS $procedure$
begin 
    -- insert the sensor battery log
    INSERT INTO public.d_daily_sensor_battery_log (sensor_id, name, log_datetime, batterylevel ,is_active, last_temperature_log_datetime)
    SELECT DISTINCT s.id, s.name, DATE_TRUNC('hour', current_timestamp), batterylevel ,is_active, last_temp_datetime 
    FROM (
        SELECT sensor_id AS sensor_id, MAX(CONCAT(TO_CHAR(date,'YYYY-MM-DD'),' ', TO_CHAR(time,'HH24:MI:SS'))::timestamptz) AS last_temp_datetime
        FROM temperature_log tl 
        GROUP BY sensor_id
    
    ) tl 
    JOIN sensor s ON tl.sensor_id = s.id
    ON CONFLICT ON CONSTRAINT d_daily_sensor_battery_log_pkey 
    DO UPDATE SET batterylevel = EXCLUDED.batterylevel, is_active = EXCLUDED.is_active, last_temperature_log_datetime = EXCLUDED.last_temperature_log_datetime;
end
$procedure$;

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
  CALL public.aggregate_monthlysoh();
  CALL public.report_card_stats();
  IF (TO_CHAR(current_date - interval '1 days', 'DD')::int < 10) THEN 
      -- in case of the sync delay, call the previous month
    CALL public.aggregate_monthlysoh(TO_CHAR(current_date - interval '1 month', 'YYYYMM'));
      -- in case of the sync delay, call the previous month except 6. purchase order (we can not get when it's finalised)
    CALL public.report_card_stats(true, TO_CHAR(current_date - interval '1 month', 'YYYYMM'), ARRAY['1','2','3','4','5','7']);
  END IF;
 
end $$
;

CREATE OR REPLACE PROCEDURE public.post_export()
    LANGUAGE 'sql'
    
AS $procedure$

CREATE or REPLACE VIEW item_categories AS (
	with stock_type_strings as 
	(
	  select id, 'On essential drug list' as stock_type from item where essential_drug_list = true  union 
	  select id, 'Critical stock' as stock_type from item where critical_stock = true union
	  select id, 'Normal stock' as stock_type from item where normal_stock = true
	)
SELECT
	item.id,
    item.item_name, 
	CASE WHEN item_category.description IS NULL THEN 'NONE' ELSE item_category.description END AS category, 
	CASE WHEN item_category_level2.description IS NULL THEN 'NONE' ELSE item_category_level2.description END AS category_level2, 
	CASE WHEN item_category_level1.description IS NULL THEN 'NONE' ELSE item_category_level1.description END AS category_level1, 
	CASE WHEN item_category2.description IS NULL THEN 'NONE' ELSE item_category2.description END AS category2, 
	CASE WHEN item_category3.description IS NULL THEN 'NONE' ELSE item_category3.description END AS category3, 
	CASE WHEN ven_category = ''OR ven_category IS NULL THEN 'NONE' ELSE ven_category END AS ven_category, 
	essential_drug_list, 
	critical_stock, 
	normal_stock,
	CASE WHEN stock_type IS NULL THEN 'NONE' ELSE stock_type END AS stock_type
FROM 
	item 
	LEFT JOIN item_category ON category_id = item_category.id 
	LEFT JOIN item_category2 ON category2_id = item_category2.id 
	LEFT JOIN item_category3 ON category3_id = item_category3.id 
	LEFT JOIN item_category_level2 ON item_category.parent_id = item_category_level2.id 
	LEFT JOIN item_category_level1 ON item_category_level2.parent_id = item_category_level1.id
	LEFT JOIN stock_type_strings ON item.id = stock_type_strings.id
);

CALL public.create_view_report_cards();
CALL public.create_materialised_views();
CALL public.cc_sensor_battery_log();


$procedure$;

CREATE OR REPLACE PROCEDURE public.pre_export()
    LANGUAGE 'sql'
    
AS $procedure$

DROP VIEW IF EXISTS public.store_categories;
DROP VIEW IF EXISTS public.item_categories;
DROP MATERIALIZED VIEW IF EXISTS public.mv_visible_item_store_join;

$procedure$;
;




-- ============================================================================
-- POSTGRES AGGREGATOR (#799 - move aggregator to postgres from 4d server)
--
-- Source: msupply-dashboard-clients/Standard/aggregator_procedures/
--   aggregator_table.sql, aggregator_dispatch.sql, aggregator_run.sql
--
-- aggregator_dispatch() and aggregator_run() are defined twice in that folder:
-- once standalone and once (superseded, newer) at the end of aggregator_table.sql.
-- Only the newer pair is carried over here - it skips the four procedures that
-- are never listed in the scheduler_aggregation pref and calls them directly
-- from aggregator_run() instead. The standalone pair is deliberately omitted so
-- each procedure is defined exactly once.
--
-- The standalone aggregator_dispatch() also lazily created public.aggregator if
-- it was missing. public.aggregator is already created at the top of this file,
-- so that guard is redundant here and is not carried over.
--
-- Entry point:  CALL public.aggregator_run();
-- ============================================================================

-- aggregator_run() reads its method list from public.pref. pref, and the three
-- tables below, are normally populated by the mSupply export rather than created
-- here - these guards only ensure a fresh install can load and run this file
-- without erroring on a missing relation.
CREATE TABLE IF NOT EXISTS public.pref (
	item TEXT,
	data JSONB
);

-- Written by aggregator_storePeriodSchedules() (TRUNCATE + INSERT).
CREATE TABLE IF NOT EXISTS public.store_period_schedules (
	storeid TEXT,
	periodscheduleid TEXT,
	programid TEXT
);

-- Read by aggregator_storePeriodSchedules().
CREATE TABLE IF NOT EXISTS public.periodschedule (
	id TEXT,
	"name" TEXT
);

-- Read by create_stock_status_matview().
CREATE TABLE IF NOT EXISTS public.item_store_program (
	storeid TEXT,
	itemid TEXT,
	program TEXT,
	minimum REAL,
	maximum REAL
);



-- Preferred dataElement-style aliases with snake_case naming.
CREATE OR REPLACE PROCEDURE public.aggregator_stockHistory(
    IN p_options jsonb DEFAULT '{}'::jsonb)
LANGUAGE 'plpgsql'
AS $BODY$
DECLARE
    v_run_date date := COALESCE(NULLIF(p_options->>'runDate', '')::date, current_date - 1);
    v_to_date date := NULLIF(p_options->>'toDate', '')::date;
    v_from_date date := NULLIF(p_options->>'fromDate', '')::date;
    v_lookback_period integer := COALESCE((p_options->>'lookBackPeriod')::integer, 13);
    v_include_current_month boolean := COALESCE((p_options->>'includeCurrentMonth')::boolean, true);
    v_execute_in_postgres boolean := COALESCE((p_options->>'executeInPostgres')::boolean, false);
    v_use_previous_day_seed boolean := COALESCE((p_options->>'usePreviousDaySeed')::boolean, false);
    v_sparse_mode boolean := COALESCE((p_options->>'sparseMode')::boolean, false);
    v_start_time timestamp;
BEGIN
    IF NOT v_execute_in_postgres THEN
        RAISE NOTICE '[SKIP] aggregator_stockHistory: executeInPostgres=%, skipping. Options: %',
            COALESCE(p_options->>'executeInPostgres', 'not set'), p_options;
        RETURN;
    END IF;

    IF v_lookback_period < 1 THEN
        RAISE EXCEPTION 'lookBackPeriod must be >= 1';
    END IF;

    IF v_to_date IS NULL THEN
        IF v_include_current_month THEN
            v_to_date := v_run_date;
        ELSE
            v_to_date := (date_trunc('month', v_run_date)::date - 1);
        END IF;
    END IF;

    IF v_from_date IS NULL THEN
        v_from_date := (date_trunc('month', v_to_date)::date - make_interval(months => GREATEST(v_lookback_period - 1, 0)))::date;
    END IF;

    IF v_from_date > v_to_date THEN
        RAISE EXCEPTION 'fromDate must be <= toDate';
    END IF;

    -- anchorDate removed: use current_date as the anchor for movement upper-bounds

    PERFORM pg_advisory_xact_lock(4815162342);
    v_start_time := clock_timestamp();
--6 second
    DROP TABLE IF EXISTS tmp_anchor_stock;
    CREATE TEMP TABLE tmp_anchor_stock ON COMMIT DROP AS
    SELECT
        il.store_id::text AS storeid,
        il.item_id::text AS itemid,
        SUM((il.available * il.pack_size)::numeric) AS soh_anchor
    FROM item_line il
    JOIN store s
      ON s.id::text = il.store_id::text
     AND s.disabled = false
    GROUP BY 1, 2;
    RAISE NOTICE '[TIMING] tmp_anchor_stock created in % ms', EXTRACT(EPOCH FROM (clock_timestamp() - v_start_time)) * 1000;
    v_start_time := clock_timestamp();

    -- No need for tmp_pairs UNION—all items are already in tmp_anchor_stock
    -- Just separate into moving vs static pairs below

    IF v_sparse_mode THEN
        -- keep sparse-mode logic mostly unchanged (movement-days only already)
        DROP TABLE IF EXISTS tmp_move_day_sparse;
        CREATE TEMP TABLE tmp_move_day_sparse ON COMMIT DROP AS
        SELECT
            m.storeid,
            m.itemid,
            m.fulldate,
            SUM(m.value)::numeric AS movement_value
        FROM aggregator m
        WHERE m.dataelement = 'stockMovement'
            AND m.fulldate BETWEEN v_from_date AND v_to_date
        GROUP BY 1, 2, 3;

        CREATE INDEX tmp_move_day_sparse_idx ON tmp_move_day_sparse (storeid, itemid, fulldate);
        RAISE NOTICE '[TIMING] tmp_move_day_sparse created in % ms', EXTRACT(EPOCH FROM (clock_timestamp() - v_start_time)) * 1000;
        v_start_time := clock_timestamp();

        DROP TABLE IF EXISTS tmp_first_move_sparse;
        CREATE TEMP TABLE tmp_first_move_sparse ON COMMIT DROP AS
        SELECT
            d.storeid,
            d.itemid,
            MIN(d.fulldate) AS first_move_date
        FROM tmp_move_day_sparse d
        WHERE d.movement_value <> 0
        GROUP BY 1, 2;

        CREATE INDEX tmp_first_move_sparse_idx ON tmp_first_move_sparse (storeid, itemid);

        DROP TABLE IF EXISTS tmp_sum_move_sparse;
        CREATE TEMP TABLE tmp_sum_move_sparse ON COMMIT DROP AS
        SELECT
            d.storeid,
            d.itemid,
            SUM(d.movement_value)::numeric AS move_sum
        FROM tmp_move_day_sparse d
        GROUP BY 1, 2;

        CREATE INDEX tmp_sum_move_sparse_idx ON tmp_sum_move_sparse (storeid, itemid);
        RAISE NOTICE '[TIMING] tmp_first_move_sparse and tmp_sum_move_sparse created in % ms', EXTRACT(EPOCH FROM (clock_timestamp() - v_start_time)) * 1000;
        v_start_time := clock_timestamp();

        DELETE FROM aggregator
        WHERE dataelement = 'stockHistory'
            AND fulldate BETWEEN v_from_date AND v_to_date;

        -- Movement days only: backward ledger from end-date SOH.
        INSERT INTO aggregator (storeid, itemid, fulldate, monthyear, dataelement, value)
        SELECT
            d.storeid,
            d.itemid,
            d.fulldate,
            to_char(d.fulldate, 'YYYYMM') AS monthyear,
            'stockHistory',
            (a.soh_anchor
             - COALESCE(
                 SUM(d.movement_value) OVER (
                     PARTITION BY d.storeid, d.itemid
                     ORDER BY d.fulldate DESC
                     ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING
                 ),
                 0::numeric
                 )) AS value
        FROM tmp_move_day_sparse d
        JOIN tmp_anchor_stock a
            ON a.storeid = d.storeid
         AND a.itemid = d.itemid
        WHERE d.movement_value <> 0;

        -- If first movement is after fromDate, insert only one baseline row at fromDate.
        INSERT INTO aggregator (storeid, itemid, fulldate, monthyear, dataelement, value)
        SELECT
            fm.storeid,
            fm.itemid,
            v_from_date,
            to_char(v_from_date, 'YYYYMM') AS monthyear,
            'stockHistory',
            (a.soh_anchor - COALESCE(sm.move_sum, 0::numeric)) AS value
        FROM tmp_first_move_sparse fm
        JOIN tmp_anchor_stock a
            ON a.storeid = fm.storeid
         AND a.itemid = fm.itemid
        LEFT JOIN tmp_sum_move_sparse sm
            ON sm.storeid = fm.storeid
         AND sm.itemid = fm.itemid
        WHERE fm.first_move_date > v_from_date;

        -- No movement in range: insert only one baseline row at fromDate.
        INSERT INTO aggregator (storeid, itemid, fulldate, monthyear, dataelement, value)
        SELECT
            a.storeid,
            a.itemid,
            v_from_date,
            to_char(v_from_date, 'YYYYMM') AS monthyear,
            'stockHistory',
            a.soh_anchor
        FROM tmp_anchor_stock a
        LEFT JOIN tmp_first_move_sparse fm
            ON fm.storeid = a.storeid
         AND fm.itemid = a.itemid
        WHERE fm.storeid IS NULL;

        RETURN;
    END IF;

    DROP TABLE IF EXISTS tmp_moving_pairs;
    CREATE TEMP TABLE tmp_moving_pairs ON COMMIT DROP AS
    SELECT DISTINCT m.storeid, m.itemid
    FROM aggregator m
    WHERE m.dataelement = 'stockMovement'
        AND m.fulldate BETWEEN (v_from_date + 1) AND current_date;

    CREATE INDEX tmp_moving_pairs_idx ON tmp_moving_pairs (storeid, itemid);
    RAISE NOTICE '[TIMING] tmp_moving_pairs created in % ms', EXTRACT(EPOCH FROM (clock_timestamp() - v_start_time)) * 1000;
    v_start_time := clock_timestamp();

    DROP TABLE IF EXISTS tmp_static_pairs;
    CREATE TEMP TABLE tmp_static_pairs ON COMMIT DROP AS
    SELECT p.storeid, p.itemid
    FROM tmp_anchor_stock p
    LEFT JOIN tmp_moving_pairs mp
        ON mp.storeid = p.storeid
     AND mp.itemid = p.itemid
    WHERE mp.storeid IS NULL;

    CREATE INDEX tmp_static_pairs_idx ON tmp_static_pairs (storeid, itemid);
    RAISE NOTICE '[TIMING] tmp_static_pairs created in % ms', EXTRACT(EPOCH FROM (clock_timestamp() - v_start_time)) * 1000;
    v_start_time := clock_timestamp();

    -- Aggregate daily movement range (movement dates only)
    DROP TABLE IF EXISTS tmp_daily_move_range;
    CREATE TEMP TABLE tmp_daily_move_range ON COMMIT DROP AS
    SELECT
        m.storeid,
        m.itemid,
        m.fulldate,
        SUM(m.value)::numeric AS movement_value
    FROM aggregator m
    WHERE m.dataelement = 'stockMovement'
            AND m.fulldate BETWEEN v_from_date AND v_to_date
    GROUP BY 1, 2, 3;

    CREATE INDEX tmp_daily_move_range_idx ON tmp_daily_move_range (storeid, itemid, fulldate);
    RAISE NOTICE '[TIMING] tmp_daily_move_range created in % ms', EXTRACT(EPOCH FROM (clock_timestamp() - v_start_time)) * 1000;
    v_start_time := clock_timestamp();

    DROP TABLE IF EXISTS tmp_hist_moving;
    CREATE TEMP TABLE tmp_hist_moving ON COMMIT DROP AS
    SELECT
            d.storeid,
            d.itemid,
            d.fulldate,
            COALESCE(a.soh_anchor, 0::numeric) AS soh_anchor,
            COALESCE(d.movement_value, 0::numeric) AS movement_value
    FROM tmp_daily_move_range d
    JOIN tmp_moving_pairs mp
      ON mp.storeid = d.storeid
     AND mp.itemid = d.itemid
    LEFT JOIN tmp_anchor_stock a
            ON a.storeid = d.storeid
         AND a.itemid = d.itemid;

    CREATE INDEX tmp_hist_moving_idx ON tmp_hist_moving (storeid, itemid, fulldate);
    RAISE NOTICE '[TIMING] tmp_hist_moving created in % ms', EXTRACT(EPOCH FROM (clock_timestamp() - v_start_time)) * 1000;
    v_start_time := clock_timestamp();

        DELETE FROM aggregator
        WHERE dataelement = 'stockHistory'
            AND fulldate BETWEEN v_from_date AND v_to_date;

        -- Ensure current-date stockHistory row exists (idempotent)
        INSERT INTO aggregator (storeid, itemid, fulldate, monthyear, dataelement, value)
        SELECT
                a.storeid,
                a.itemid,
                current_date AS fulldate,
                to_char(current_date, 'YYYYMM') AS monthyear,
                'stockHistory',
                a.soh_anchor
        FROM tmp_anchor_stock a
        WHERE NOT EXISTS (
            SELECT 1 FROM aggregator x
            WHERE x.storeid = a.storeid
                AND x.itemid = a.itemid
                AND x.fulldate = current_date
                AND x.dataelement = 'stockHistory'
        );

        -- Ensure baseline at v_from_date for pairs that have movements after v_from_date
        WITH move_sums AS (
            SELECT m.storeid, m.itemid, SUM(m.value)::numeric AS sum_after_from
            FROM aggregator m
            WHERE m.dataelement = 'stockMovement'
                AND m.fulldate BETWEEN (v_from_date + 1) AND current_date
            GROUP BY 1,2
        )
        INSERT INTO aggregator (storeid, itemid, fulldate, monthyear, dataelement, value)
        SELECT
            a.storeid,
            a.itemid,
            v_from_date AS fulldate,
            to_char(v_from_date, 'YYYYMM') AS monthyear,
            'stockHistory',
            (a.soh_anchor - COALESCE(ms.sum_after_from,0::numeric)) AS value
        FROM tmp_anchor_stock a
        LEFT JOIN move_sums ms ON ms.storeid = a.storeid AND ms.itemid = a.itemid
        WHERE NOT EXISTS (
            SELECT 1 FROM aggregator x
            WHERE x.storeid = a.storeid
                AND x.itemid = a.itemid
                AND x.fulldate = v_from_date
                AND x.dataelement = 'stockHistory'
        )
        AND EXISTS (
            SELECT 1 FROM aggregator mm
            WHERE mm.dataelement = 'stockMovement'
                AND mm.storeid = a.storeid
                AND mm.itemid = a.itemid
                AND mm.fulldate BETWEEN (v_from_date + 1) AND current_date
        );

    DROP TABLE IF EXISTS tmp_first_movement_date;
    CREATE TEMP TABLE tmp_first_movement_date ON COMMIT DROP AS
    SELECT
        d.storeid,
        d.itemid,
        MIN(d.fulldate) AS first_move_date
    FROM tmp_daily_move_range d
    WHERE d.movement_value <> 0
    GROUP BY 1, 2;

    CREATE INDEX tmp_first_movement_date_idx ON tmp_first_movement_date (storeid, itemid);
    RAISE NOTICE '[TIMING] tmp_first_movement_date created in % ms', EXTRACT(EPOCH FROM (clock_timestamp() - v_start_time)) * 1000;
    v_start_time := clock_timestamp();

    DROP TABLE IF EXISTS tmp_hist_moving_calc;
    CREATE TEMP TABLE tmp_hist_moving_calc ON COMMIT DROP AS
    SELECT
        h.storeid,
        h.itemid,
        h.fulldate,
        (h.soh_anchor
         - COALESCE(
             SUM(h.movement_value) OVER (
                 PARTITION BY h.storeid, h.itemid
                 ORDER BY h.fulldate DESC
                 ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING
             ),
             0::numeric
         )) AS value
    FROM tmp_hist_moving h;

    CREATE INDEX tmp_hist_moving_calc_idx ON tmp_hist_moving_calc (storeid, itemid, fulldate);
    
    RAISE NOTICE '[TIMING] tmp_hist_moving_calc created in % ms', EXTRACT(EPOCH FROM (clock_timestamp() - v_start_time)) * 1000;
    v_start_time := clock_timestamp();

    INSERT INTO aggregator (storeid, itemid, fulldate, monthyear, dataelement, value)
    SELECT
        hc.storeid,
        hc.itemid,
        hc.fulldate,
        to_char(hc.fulldate, 'YYYYMM') AS monthyear,
        'stockHistory',
        CASE
            WHEN fm.first_move_date IS NOT NULL
             AND fm.first_move_date > v_from_date
             AND hc.fulldate = v_from_date
                THEN COALESCE(hf.value, hc.value)
            ELSE hc.value
        END AS value
    FROM tmp_hist_moving_calc hc
    LEFT JOIN tmp_first_movement_date fm
      ON fm.storeid = hc.storeid
     AND fm.itemid = hc.itemid
    LEFT JOIN tmp_hist_moving_calc hf
      ON hf.storeid = hc.storeid
     AND hf.itemid = hc.itemid
     AND hf.fulldate = fm.first_move_date
    WHERE hc.fulldate BETWEEN v_from_date AND v_to_date;

    -- Pairs with no movement in the reconstruction horizon: insert a single baseline row at v_from_date.
    INSERT INTO aggregator (storeid, itemid, fulldate, monthyear, dataelement, value)
    SELECT
        sp.storeid,
        sp.itemid,
        v_from_date,
        to_char(v_from_date, 'YYYYMM') AS monthyear,
        'stockHistory',
        COALESCE(a.soh_anchor, 0::numeric)
    FROM tmp_static_pairs sp
    LEFT JOIN tmp_anchor_stock a
      ON a.storeid = sp.storeid
     AND a.itemid = sp.itemid;

    IF v_use_previous_day_seed THEN
        -- If the caller explicitly requests daily carry-forward, run carry logic
        -- Use per-pair LATERAL generate_series to avoid a global calendar expansion.
        DROP TABLE IF EXISTS tmp_prev_day_stock;
        CREATE TEMP TABLE tmp_prev_day_stock ON COMMIT DROP AS
        SELECT
                h.storeid,
                h.itemid,
                h.value AS prev_value
        FROM aggregator h
        WHERE h.dataelement = 'stockHistory'
            AND h.fulldate = (v_from_date - 1);

        CREATE INDEX tmp_prev_day_stock_idx ON tmp_prev_day_stock (storeid, itemid);

        DELETE FROM aggregator h
        USING tmp_prev_day_stock cp
        WHERE h.dataelement = 'stockHistory'
            AND h.fulldate BETWEEN v_from_date AND v_to_date
            AND h.storeid = cp.storeid
            AND h.itemid = cp.itemid;

        INSERT INTO aggregator (storeid, itemid, fulldate, monthyear, dataelement, value)
        SELECT
            cp.storeid,
            cp.itemid,
            c.fulldate,
            to_char(c.fulldate, 'YYYYMM') AS monthyear,
            'stockHistory',
            cp.prev_value
            + COALESCE(
                SUM(COALESCE(dm.movement_value, 0::numeric)) OVER (
                    PARTITION BY cp.storeid, cp.itemid
                    ORDER BY c.fulldate
                    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
                ),
                0::numeric
                ) AS value
        FROM tmp_prev_day_stock cp
        CROSS JOIN LATERAL generate_series(v_from_date, v_to_date, interval '1 day') AS c(fulldate)
        LEFT JOIN tmp_daily_move_range dm
            ON dm.storeid = cp.storeid
         AND dm.itemid = cp.itemid
         AND dm.fulldate = c.fulldate;
    END IF;

    RAISE NOTICE '[TIMING] Total procedure execution time: % ms', EXTRACT(EPOCH FROM (clock_timestamp() - v_start_time)) * 1000;
END;
$BODY$;

CREATE OR REPLACE PROCEDURE public.aggregator_monthlyConsumption(
    IN p_options jsonb DEFAULT '{}'::jsonb
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_run_date date := COALESCE(NULLIF(p_options->>'runDate', '')::date, current_date - 1);
    v_lookback_period integer := COALESCE((p_options->>'lookBackPeriod')::integer, (p_options->>'lookbackMonths')::integer, 13);
    v_include_current_month boolean := COALESCE((p_options->>'includeCurrentMonth')::boolean, true);
    v_include_placeholder_lines boolean := COALESCE((p_options->>'includePlaceholderLines')::boolean, true);
    v_execute_in_postgres boolean := COALESCE((p_options->>'executeInPostgres')::boolean, false);
    v_to_month_start date;
    v_from_month_start date;
    v_from_monthyear text;
    v_to_monthyear text;
BEGIN
    IF NOT v_execute_in_postgres THEN
        RAISE NOTICE '[SKIP] aggregator_monthlyConsumption: executeInPostgres=%, skipping. Options: %',
            COALESCE(p_options->>'executeInPostgres', 'not set'), p_options;
        RETURN;
    END IF;

    IF v_lookback_period < 1 THEN
        RAISE EXCEPTION 'lookBackPeriod must be >= 1';
    END IF;

    IF v_include_current_month THEN
        v_to_month_start := date_trunc('month', v_run_date)::date;
    ELSE
        v_to_month_start := (date_trunc('month', v_run_date)::date - interval '1 month')::date;
    END IF;

    v_from_month_start := (v_to_month_start - make_interval(months => GREATEST(v_lookback_period - 1, 0)))::date;
    v_from_monthyear := to_char(v_from_month_start, 'YYYYMM');
    v_to_monthyear := to_char(v_to_month_start, 'YYYYMM');

    PERFORM pg_advisory_xact_lock(4815162342);

    -- Query CI transactions only (consumption/issue), not SC (stock count)
    DROP TABLE IF EXISTS tmp_monthly_consumption_sep;
    CREATE TEMP TABLE tmp_monthly_consumption_sep ON COMMIT DROP AS
    SELECT
        t.store_id::text AS storeid,
        tl.item_id::text AS itemid,
        to_char(t.confirm_date::date, 'YYYYMM') AS monthyear,
        SUM((tl.quantity * COALESCE(tl.pack_size, 1))::numeric) AS qty_out
    FROM transact t
    JOIN trans_line tl
      ON tl.transaction_id = t.id
    WHERE t.confirm_date::date >= v_from_month_start
      AND t.confirm_date::date < (v_to_month_start + interval '1 month')
      AND t.type = 'ci'
      AND t.status IN ('fn', 'cn')
      AND (tl.type = 'stock_out' OR (v_include_placeholder_lines AND tl.type = 'placeholder'))
    GROUP BY 1, 2, 3;

    CREATE INDEX tmp_monthly_consumption_sep_idx ON tmp_monthly_consumption_sep (storeid, itemid, monthyear);

    DELETE FROM aggregator
    WHERE dataelement = 'monthlyConsumption'
      AND monthyear BETWEEN v_from_monthyear AND v_to_monthyear;

    INSERT INTO aggregator (storeid, itemid, fulldate, monthyear, dataelement, value)
    SELECT
        mc.storeid,
        mc.itemid,
        to_date(mc.monthyear || '01', 'YYYYMMDD'),
        mc.monthyear,
        'monthlyConsumption',
        mc.qty_out
    FROM tmp_monthly_consumption_sep mc
    WHERE mc.qty_out <> 0;

END;
$BODY$;


CREATE OR REPLACE PROCEDURE public.aggregator_stockConsumption(
    IN p_options jsonb DEFAULT '{}'::jsonb
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_run_date date := COALESCE(NULLIF(p_options->>'runDate', '')::date, current_date - 1);
    v_lookback_period integer := COALESCE((p_options->>'lookBackPeriod')::integer, 13);
    v_include_current_month boolean := COALESCE((p_options->>'includeCurrentMonth')::boolean, true);
    v_include_placeholder_lines boolean := COALESCE((p_options->>'includePlaceholderLines')::boolean, false);
    v_execute_in_postgres boolean := COALESCE((p_options->>'executeInPostgres')::boolean, false);
    v_from_date date;
    v_to_date date;
    v_count integer;
BEGIN
    IF NOT v_execute_in_postgres THEN
        RAISE NOTICE '[SKIP] aggregator_stockConsumption: executeInPostgres=%, skipping. Options: %',
            COALESCE(p_options->>'executeInPostgres', 'not set'), p_options;
        RETURN;
    END IF;

    IF v_lookback_period < 1 THEN
        RAISE EXCEPTION 'lookBackPeriod must be >= 1';
    END IF;

    IF v_include_current_month THEN
        v_to_date := v_run_date;
    ELSE
        v_to_date := (date_trunc('month', v_run_date)::date - 1);
    END IF;

    v_from_date := (date_trunc('month', v_to_date)::date - make_interval(months => GREATEST(v_lookback_period - 1, 0)))::date;

    PERFORM pg_advisory_xact_lock(4815162342);

    DELETE FROM aggregator
    WHERE dataelement = 'stockConsumption'
      AND fulldate BETWEEN v_from_date AND v_to_date;

    INSERT INTO aggregator (storeid, itemid, fulldate, monthyear, dataelement, value)
    SELECT
        t.store_id::text,
        tl.item_id::text,
        t.confirm_date::date,
        to_char(t.confirm_date::date, 'YYYYMM'),
        'stockConsumption',
        SUM((tl.quantity * COALESCE(tl.pack_size, 1))::numeric)
    FROM transact t
    JOIN trans_line tl ON tl.transaction_id = t.id
    WHERE t.confirm_date::date BETWEEN v_from_date AND v_to_date
      AND t.type IN ('ci', 'sc')
      AND t.status IN ('fn', 'cn')
      AND (tl.type = 'stock_out' OR (v_include_placeholder_lines AND tl.type = 'placeholder'))
    GROUP BY 1, 2, 3, 4;

    GET DIAGNOSTICS v_count = ROW_COUNT;

    RAISE NOTICE 'aggregator_stockConsumption: inserted % rows, looked back to %', v_count, v_from_date;
END;
$BODY$;

ALTER PROCEDURE public.aggregator_stockConsumption(jsonb)
    OWNER TO postgres;


CREATE OR REPLACE PROCEDURE public.aggregator_AMC(
    IN p_options jsonb DEFAULT '{}'::jsonb
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_run_date date := COALESCE(NULLIF(p_options->>'runDate', '')::date, current_date - 1);
    v_lookback_period integer := COALESCE((p_options->>'lookBackPeriod')::integer, (p_options->>'lookbackMonths')::integer, 13);
    v_enforce_lookback_period boolean := COALESCE((p_options->>'enforceLookBackPeriod')::boolean, true);
    v_include_current_month boolean := COALESCE((p_options->>'includeCurrentMonth')::boolean, true);
    v_execute_in_postgres boolean := COALESCE((p_options->>'executeInPostgres')::boolean, false);
    v_to_month_start date;
    v_from_month_start date;
    v_from_monthyear text;
    v_to_monthyear text;
BEGIN
    IF NOT v_execute_in_postgres THEN
        RAISE NOTICE '[SKIP] aggregator_AMC: executeInPostgres=%, skipping. Options: %',
            COALESCE(p_options->>'executeInPostgres', 'not set'), p_options;
        RETURN;
    END IF;

    IF v_lookback_period < 1 THEN
        RAISE EXCEPTION 'lookBackPeriod must be >= 1';
    END IF;

    IF v_include_current_month THEN
        v_to_month_start := date_trunc('month', v_run_date)::date;
    ELSE
        v_to_month_start := (date_trunc('month', v_run_date)::date - interval '1 month')::date;
    END IF;

    v_from_month_start := (v_to_month_start - make_interval(months => GREATEST(v_lookback_period - 1, 0)))::date;
    v_from_monthyear := to_char(v_from_month_start, 'YYYYMM');
    v_to_monthyear := to_char(v_to_month_start, 'YYYYMM');

    PERFORM pg_advisory_xact_lock(4815162342);

    DROP TABLE IF EXISTS tmp_amc_base;
    CREATE TEMP TABLE tmp_amc_base ON COMMIT DROP AS
    SELECT
        mc.storeid,
        mc.itemid,
        SUM(mc.value) AS total_value,
        COUNT(DISTINCT mc.monthyear) AS months_with_data
    FROM aggregator mc
    WHERE mc.dataelement = 'monthlyConsumption'
      AND mc.monthyear BETWEEN v_from_monthyear AND v_to_monthyear
    GROUP BY 1, 2;

    DELETE FROM aggregator
    WHERE fulldate = v_run_date
      AND dataelement = 'AMC';

    INSERT INTO aggregator (storeid, itemid, fulldate, monthyear, dataelement, value)
    SELECT
        b.storeid,
        b.itemid,
        v_run_date,
        to_char(v_run_date, 'YYYYMM'),
        'AMC',
        CASE
            WHEN v_enforce_lookback_period THEN COALESCE(b.total_value / NULLIF(v_lookback_period::numeric, 0), 0)
            ELSE COALESCE(b.total_value / NULLIF(b.months_with_data::numeric, 0), 0)
        END
    FROM tmp_amc_base b
    WHERE v_enforce_lookback_period
       OR (NOT v_enforce_lookback_period AND b.months_with_data > 0);

END;
$BODY$;

CREATE OR REPLACE PROCEDURE public.aggregator_monthlyDOS(
    IN p_options jsonb DEFAULT '{}'::jsonb
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_run_date date := COALESCE(NULLIF(p_options->>'runDate', '')::date, current_date - 1);
    v_lookback_period integer := COALESCE((p_options->>'lookBackPeriod')::integer, (p_options->>'lookbackMonths')::integer, 13);
    v_include_current_month boolean := COALESCE((p_options->>'includeCurrentMonth')::boolean, true);
    v_execute_in_postgres boolean := COALESCE((p_options->>'executeInPostgres')::boolean, false);
    v_to_month_start date;
    v_from_month_start date;
    v_from_monthyear text;
    v_to_monthyear text;
BEGIN
    IF NOT v_execute_in_postgres THEN
        RAISE NOTICE '[SKIP] aggregator_monthlyDOS: executeInPostgres=%, skipping. Options: %',
            COALESCE(p_options->>'executeInPostgres', 'not set'), p_options;
        RETURN;
    END IF;

    IF v_lookback_period < 1 THEN
        RAISE EXCEPTION 'lookBackPeriod must be >= 1';
    END IF;

    IF v_include_current_month THEN
        v_to_month_start := date_trunc('month', v_run_date)::date;
    ELSE
        v_to_month_start := (date_trunc('month', v_run_date)::date - interval '1 month')::date;
    END IF;

    v_from_month_start := (v_to_month_start - make_interval(months => GREATEST(v_lookback_period - 1, 0)))::date;
    v_from_monthyear := to_char(v_from_month_start, 'YYYYMM');
    v_to_monthyear := to_char(v_to_month_start, 'YYYYMM');

    PERFORM pg_advisory_xact_lock(4815162342);

    DROP TABLE IF EXISTS tmp_monthly_dos_months;
    CREATE TEMP TABLE tmp_monthly_dos_months ON COMMIT DROP AS
    SELECT generate_series(v_from_month_start, v_to_month_start, interval '1 month')::date AS month_start;

    DROP TABLE IF EXISTS tmp_monthly_dos_prior_rows;
    CREATE TEMP TABLE tmp_monthly_dos_prior_rows ON COMMIT DROP AS
    SELECT sh.storeid,
           sh.itemid,
           sh.fulldate,
           sh.value
    FROM aggregator sh
    JOIN (
        SELECT storeid, itemid, MAX(fulldate) AS fulldate
        FROM aggregator
        WHERE dataelement = 'stockHistory'
          AND fulldate < v_from_month_start
        GROUP BY storeid, itemid
    ) prior
      ON prior.storeid = sh.storeid
     AND prior.itemid = sh.itemid
     AND prior.fulldate = sh.fulldate;

    DROP TABLE IF EXISTS tmp_monthly_dos_pairs;
    CREATE TEMP TABLE tmp_monthly_dos_pairs ON COMMIT DROP AS
    SELECT DISTINCT storeid, itemid
    FROM (
        SELECT storeid, itemid FROM tmp_monthly_dos_prior_rows
        UNION ALL
        SELECT h.storeid, h.itemid
        FROM aggregator h
        WHERE h.dataelement = 'stockHistory'
          AND h.fulldate BETWEEN v_from_month_start AND v_run_date
    ) combined;

    DROP TABLE IF EXISTS tmp_monthly_dos_segments;
    CREATE TEMP TABLE tmp_monthly_dos_segments ON COMMIT DROP AS
    WITH sh AS (
        SELECT storeid, itemid, fulldate, value
        FROM tmp_monthly_dos_prior_rows
        UNION ALL
        SELECT h.storeid, h.itemid, h.fulldate, h.value
        FROM aggregator h
        WHERE h.dataelement = 'stockHistory'
          AND h.fulldate BETWEEN v_from_month_start AND v_run_date
    ),
    unique_sh AS (
        SELECT storeid, itemid, fulldate, MAX(value) AS value
        FROM sh
        GROUP BY storeid, itemid, fulldate
    )
    SELECT
        u.storeid,
        u.itemid,
        u.fulldate AS segment_start,
        COALESCE(
            LEAD(u.fulldate) OVER (PARTITION BY u.storeid, u.itemid ORDER BY u.fulldate) - interval '1 day',
            v_run_date
        )::date AS segment_end,
        u.value
    FROM unique_sh u;

    DELETE FROM aggregator
    WHERE dataelement = 'monthlyDOS'
      AND monthyear BETWEEN v_from_monthyear AND v_to_monthyear;

    INSERT INTO aggregator (storeid, itemid, fulldate, monthyear, dataelement, value)
    SELECT
        p.storeid,
        p.itemid,
        mr.month_start,
        to_char(mr.month_start, 'YYYYMM'),
        'monthlyDOS',
        COALESCE(SUM(
            CASE
                WHEN seg.value = 0 THEN
                    (LEAST(seg.segment_end, (mr.month_start + interval '1 month' - interval '1 day')::date) - GREATEST(seg.segment_start, mr.month_start) + 1)
                ELSE 0
            END
        ), 0)::numeric
    FROM tmp_monthly_dos_pairs p
    CROSS JOIN tmp_monthly_dos_months mr
    LEFT JOIN tmp_monthly_dos_segments seg
      ON seg.storeid = p.storeid
     AND seg.itemid = p.itemid
     AND seg.segment_end >= mr.month_start
     AND seg.segment_start <= (mr.month_start + interval '1 month' - interval '1 day')::date
    GROUP BY 1, 2, 3;

END;
$BODY$;


CREATE OR REPLACE PROCEDURE public.aggregator_stockMovement(
    IN p_options jsonb DEFAULT '{}'::jsonb
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_run_date date := COALESCE(NULLIF(p_options->>'runDate', '')::date, current_date - 1);
    v_to_date date := NULLIF(p_options->>'toDate', '')::date;
    v_from_date date := NULLIF(p_options->>'fromDate', '')::date;
    v_lookback_period integer := COALESCE((p_options->>'lookBackPeriod')::integer, 13);
    v_include_current_month boolean := COALESCE((p_options->>'includeCurrentMonth')::boolean, true);
    v_include_placeholder_lines boolean := COALESCE((p_options->>'includePlaceholderLines')::boolean, true);
    v_execute_in_postgres boolean := COALESCE((p_options->>'executeInPostgres')::boolean, false);
BEGIN
    IF NOT v_execute_in_postgres THEN
        RAISE NOTICE '[SKIP] aggregator_stockMovement: executeInPostgres=%, skipping. Options: %',
            COALESCE(p_options->>'executeInPostgres', 'not set'), p_options;
        RETURN;
    END IF;

    IF v_lookback_period < 1 THEN
        RAISE EXCEPTION 'lookBackPeriod must be >= 1';
    END IF;

    IF v_to_date IS NULL THEN
        IF v_include_current_month THEN
            v_to_date := v_run_date;
        ELSE
            v_to_date := (date_trunc('month', v_run_date)::date - 1);
        END IF;
    END IF;

    IF v_from_date IS NULL THEN
        v_from_date := (date_trunc('month', v_to_date)::date - make_interval(months => GREATEST(v_lookback_period - 1, 0)))::date;
    END IF;

    IF v_from_date > v_to_date THEN
        RAISE EXCEPTION 'fromDate must be <= toDate';
    END IF;

    PERFORM pg_advisory_xact_lock(4815162342);

    DROP TABLE IF EXISTS tmp_mov_period_sep;
    CREATE TEMP TABLE tmp_mov_period_sep ON COMMIT DROP AS
    SELECT
        t.store_id::text AS storeid,
        tl.item_id::text AS itemid,
        t.confirm_date::date AS fulldate,
        to_char(t.confirm_date::date, 'YYYYMM') AS monthyear,
        SUM(
            CASE
                WHEN t.type IN ('ci', 'sc') THEN -1 * (tl.quantity * COALESCE(tl.pack_size, 1))::numeric
                ELSE (tl.quantity * COALESCE(tl.pack_size, 1))::numeric
            END
        ) AS value
    FROM transact t
    JOIN trans_line tl
      ON tl.transaction_id = t.id
    WHERE t.confirm_date::date BETWEEN v_from_date AND v_to_date
      AND t.type IN ('ci', 'sc', 'si', 'cc')
      AND t.status IN ('fn', 'cn')
      AND (tl.type IN ('stock_out', 'stock_in') OR (v_include_placeholder_lines AND tl.type = 'placeholder'))
    GROUP BY 1, 2, 3, 4;

    CREATE INDEX tmp_mov_period_sep_idx ON tmp_mov_period_sep (fulldate, storeid, itemid);

        DELETE FROM aggregator
        WHERE dataelement = 'stockMovement'
            AND fulldate BETWEEN v_from_date AND v_to_date;

        INSERT INTO aggregator (storeid, itemid, fulldate, monthyear, dataelement, value)
    SELECT
        m.storeid,
        m.itemid,
        m.fulldate,
        m.monthyear,
        'stockMovement',
        m.value
    FROM tmp_mov_period_sep m;

END;
$BODY$;


ALTER PROCEDURE public.aggregator_stockHistory(jsonb)
    OWNER TO postgres;

ALTER PROCEDURE public.aggregator_monthlyConsumption(jsonb)
    OWNER TO postgres;

ALTER PROCEDURE public.aggregator_AMC(jsonb)
    OWNER TO postgres;

ALTER PROCEDURE public.aggregator_monthlyDOS(jsonb)
    OWNER TO postgres;

ALTER PROCEDURE public.aggregator_stockMovement(jsonb)
    OWNER TO postgres;



CREATE OR REPLACE PROCEDURE public.aggregator_stockValueMovement(
    IN p_options jsonb DEFAULT '{}'::jsonb
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_run_date date := COALESCE(NULLIF(p_options->>'runDate', '')::date, current_date - 1);
    v_lookback_period integer := COALESCE((p_options->>'lookBackPeriod')::integer, 13);
    v_include_current_month boolean := COALESCE((p_options->>'includeCurrentMonth')::boolean, true);
    v_from_date date;
    v_to_date date;
BEGIN
    IF v_lookback_period < 1 THEN
        RAISE EXCEPTION 'lookBackPeriod must be >= 1';
    END IF;

    IF v_include_current_month THEN
        v_to_date := v_run_date;
    ELSE
        v_to_date := (date_trunc('month', v_run_date)::date - 1);
    END IF;

    v_from_date := (date_trunc('month', v_to_date)::date - make_interval(months => GREATEST(v_lookback_period - 1, 0)))::date;

    PERFORM pg_advisory_xact_lock(4815162342);

    DELETE FROM aggregator WHERE dataelement = 'stockValueMovement';

    INSERT INTO aggregator (storeid, itemid, monthyear, fulldate, dataelement, value)
    SELECT
        t.store_id,
        tl.item_id,
        TO_CHAR(t.confirm_date, 'YYYYMM'),
        t.confirm_date,
        'stockValueMovement',
        SUM(tl.quantity * tl.cost_price * CASE WHEN t.type = 'si' THEN 1 ELSE -1 END)
    FROM trans_line tl
    JOIN transact t ON tl.transaction_id = t.id
    WHERE t.status IN ('fn', 'cn')
      AND t.confirm_date::date BETWEEN v_from_date AND v_to_date
      AND (   (t.type IN ('ci', 'sc') AND tl.type = 'stock_out')
           OR (t.type = 'si'          AND tl.type = 'stock_in'))
    GROUP BY t.store_id, tl.item_id, t.confirm_date;

END;
$BODY$;

ALTER PROCEDURE public.aggregator_stockValueMovement(jsonb)
    OWNER TO postgres;



CREATE OR REPLACE PROCEDURE public.aggregator_stockValueHistory(
    IN p_options jsonb DEFAULT '{}'::jsonb
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_run_date date := COALESCE(NULLIF(p_options->>'runDate', '')::date, current_date - 1);
    v_lookback_period integer := COALESCE((p_options->>'lookBackPeriod')::integer, 13);
    v_include_current_month boolean := COALESCE((p_options->>'includeCurrentMonth')::boolean, true);
    v_from_date date;
    v_to_date date;
BEGIN
    IF v_lookback_period < 1 THEN
        RAISE EXCEPTION 'lookBackPeriod must be >= 1';
    END IF;

    IF v_include_current_month THEN
        v_to_date := v_run_date;
    ELSE
        v_to_date := (date_trunc('month', v_run_date)::date - 1);
    END IF;

    v_from_date := (date_trunc('month', v_to_date)::date - make_interval(months => GREATEST(v_lookback_period - 1, 0)))::date;

    PERFORM pg_advisory_xact_lock(4815162342);

    DELETE FROM aggregator WHERE dataelement = 'stockValueHistory';

    WITH
    stock_value_current AS (
        SELECT
            store_id AS storeid,
            item_id  AS itemid,
            SUM(cost_price * quantity) AS value
        FROM item_line
        WHERE quantity <> 0
        GROUP BY store_id, item_id
    ),
    movements AS (
        SELECT storeid, itemid, fulldate, SUM(value) AS value
        FROM aggregator
        WHERE dataelement = 'stockValueMovement'
          AND fulldate > v_from_date
          AND fulldate < v_to_date
        GROUP BY storeid, itemid, fulldate
        UNION ALL
        SELECT svc.storeid, svc.itemid, v_from_date, 0
        FROM stock_value_current svc
    )
    INSERT INTO aggregator (storeid, itemid, monthyear, fulldate, dataelement, value)
    SELECT
        m.storeid,
        m.itemid,
        TO_CHAR(m.fulldate, 'YYYYMM'),
        m.fulldate,
        'stockValueHistory',
        svc.value - COALESCE(
            SUM(m.value) OVER (
                PARTITION BY m.storeid, m.itemid
                ORDER BY m.fulldate
                ROWS BETWEEN 1 FOLLOWING AND UNBOUNDED FOLLOWING
            ), 0
        )
    FROM movements m
    JOIN stock_value_current svc
        ON m.storeid = svc.storeid
        AND m.itemid = svc.itemid
    UNION ALL
    SELECT storeid, itemid, TO_CHAR(v_to_date, 'YYYYMM'), v_to_date, 'stockValueHistory', value
    FROM stock_value_current;

END;
$BODY$;

ALTER PROCEDURE public.aggregator_stockValueHistory(jsonb)
    OWNER TO postgres;


CREATE OR REPLACE PROCEDURE public.aggregate_current_mos()
LANGUAGE plpgsql
AS $BODY$
BEGIN
    PERFORM pg_advisory_xact_lock(4815162342);

    DELETE FROM aggregator
    WHERE dataelement = 'currentMOS';

    INSERT INTO aggregator (storeid, itemid, value, dataelement)
    WITH stock AS (
        SELECT
            il.store_id::text AS storeid,
            il.item_id::text AS itemid,
            SUM((il.available * COALESCE(il.pack_size, 1))::numeric) AS stock_value
        FROM item_line il
        GROUP BY 1, 2
    ),
    latest_amc_run AS (
        SELECT MAX(a.fulldate) AS fulldate
        FROM aggregator a
        WHERE a.dataelement = 'AMC'
    ),
    latest_amc AS (
        SELECT
            a.storeid,
            a.itemid,
            MAX(a.value) AS value
        FROM aggregator a
        JOIN latest_amc_run r
          ON r.fulldate = a.fulldate
        WHERE a.dataelement = 'AMC'
        GROUP BY 1, 2
    )
    SELECT
        s.storeid,
        s.itemid,
        CASE
            WHEN s.stock_value <= 0 THEN s.stock_value
            WHEN COALESCE(a.value, 0) = 0 THEN 0
            ELSE s.stock_value / a.value
        END,
        'currentMOS'
    FROM stock s
    LEFT JOIN latest_amc a
      ON a.storeid = s.storeid
     AND a.itemid = s.itemid
    WHERE s.stock_value <= 0
       OR a.itemid IS NOT NULL;
END;
$BODY$;

ALTER PROCEDURE public.aggregate_current_mos()
    OWNER TO postgres;



CREATE OR REPLACE PROCEDURE public.aggregator_stockStatus(
    IN p_options jsonb DEFAULT '{}'::jsonb
)
LANGUAGE plpgsql
AS $BODY$
BEGIN
    PERFORM pg_advisory_xact_lock(4815162342);

    DELETE FROM aggregator WHERE dataelement = 'mos';

    INSERT INTO aggregator (storeid, itemid, monthyear, value, fulldate, dataelement)
    SELECT
        stock.storeid,
        stock.itemid,
        TO_CHAR(date_trunc('month', stock.fulldate), 'YYYYMM'),
        SUM(stock.value) / amc.value,
        date_trunc('month', stock.fulldate),
        'mos'
    FROM aggregator stock
    JOIN store ON stock.storeid = store.id
    JOIN aggregator amc
        ON  amc.itemid      = stock.itemid
        AND amc.storeid     = stock.storeid
        AND amc.dataelement = 'AMC'
        AND amc.value > 0
    WHERE
        stock.dataelement = 'stockHistory'
        AND store.disabled = FALSE
        AND stock.value > 0
    GROUP BY
        stock.storeid,
        stock.itemid,
        date_trunc('month', stock.fulldate),
        amc.value;

END;
$BODY$;

ALTER PROCEDURE public.aggregator_stockStatus(jsonb)
    OWNER TO postgres;



CREATE OR REPLACE PROCEDURE public.aggregator_storePeriodSchedules()
LANGUAGE plpgsql
AS $BODY$
BEGIN
    PERFORM pg_advisory_xact_lock(4815162342);

    TRUNCATE TABLE store_period_schedules;

    WITH program_store_tags AS (
        SELECT
            lm.id                             AS programid,
            st.key                            AS tag_key,
            st.value ->> 'periodScheduleName' AS period_schedule_name,
            st.value -> 'orderTypes'          AS order_types
        FROM list_master lm
        CROSS JOIN LATERAL jsonb_each(lm.programsettings -> 'storeTags') AS st(key, value)
        WHERE lm.isprogram = true
    )
    INSERT INTO store_period_schedules (storeid, periodscheduleid, programid)
    SELECT DISTINCT
        s.id,
        ps.id,
        pst.programid
    FROM program_store_tags pst
    JOIN store s
        ON s.tags LIKE concat('%', pst.tag_key, '%')
    JOIN list_master_name_join lmnj
        ON s.name_id = lmnj.name_id
        AND pst.programid = lmnj.list_master_id
    JOIN periodschedule ps
        ON pst.period_schedule_name = ps.name
    WHERE EXISTS (
        SELECT 1
        FROM jsonb_array_elements(pst.order_types) AS ot
        WHERE ot @> '{"isEmergency": false}'
    );

END;
$BODY$;

ALTER PROCEDURE public.aggregator_storePeriodSchedules()
    OWNER TO postgres;


CREATE OR REPLACE PROCEDURE public.create_stock_status_matview()
LANGUAGE plpgsql
AS $BODY$
BEGIN
    PERFORM pg_advisory_xact_lock(4815162342);

    -- The SELECT's DISTINCT ON/ORDER BY sorts the whole stock_status result
    -- set (~480k rows). With default work_mem this can spill to disk
    -- (external merge sort, visible as BuffileRead in pg_stat_activity),
    -- which is far slower than an in-memory sort. Bump it for just this
    -- transaction so the sort stays in memory without touching the
    -- server-wide setting.
    SET LOCAL work_mem = '256MB';

    -- stock_status is a plain TABLE, refreshed via DELETE + INSERT inside
    -- this same transaction rather than DROP/TRUNCATE + rebuild. DELETE and
    -- INSERT only need RowExclusiveLock, which does not conflict with the
    -- AccessShareLock a Grafana SELECT holds — so this never competes with
    -- dashboard traffic, the same reason aggregator's much heavier DELETE +
    -- INSERT traffic has never been a locking problem. And because this all
    -- runs in one transaction, ordinary MVCC snapshot isolation means no
    -- other session can see the DELETE or the INSERT until this procedure
    -- commits: concurrent Grafana reads just keep seeing the complete old
    -- data throughout the rebuild, then atomically see the complete new data
    -- the instant it commits. No blocking, no partial state, no swap step.
    --
    -- This replaces two earlier designs: rebuilding stock_status in place as
    -- a materialized view (DROP + CREATE MATERIALIZED VIEW, or
    -- REFRESH MATERIALIZED VIEW CONCURRENTLY) — both of which needed a lock
    -- that conflicts with readers — and a blue-green pair of materialized
    -- views behind a wrapper view, which avoided that but added a swap step
    -- and twice the storage for no benefit once DELETE + INSERT was on the
    -- table. The legacy materialized view is dropped manually (once) rather
    -- than detected/handled here.

    -- Create the table (and its unique index) once, if it doesn't already
    -- exist as a plain table. Columns are declared explicitly here rather
    -- than inferred from a second copy of the query below, so there's only
    -- ever one copy of the actual query in this procedure. Every later run
    -- skips this block and just DELETEs + INSERTs into this same permanent
    -- table.
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.tables
        WHERE table_schema = 'public' AND table_name = 'stock_status'
    ) THEN
        RAISE WARNING 'create_stock_status_matview: creating stock_status table for the first time';

        CREATE TABLE public.stock_status (
            storeid  text,
            store    text,
            itemid   text,
            name     text,
            code     text,
            quantity numeric,
            amc      numeric,
            program  text,
            minimum  real,
            maximum  real,
            mos      numeric,
            status   text
        );

        CREATE UNIQUE INDEX stock_status_dx
            ON public.stock_status (storeid, store, name, code, itemid, program);
    END IF;

    DELETE FROM public.stock_status;

    INSERT INTO public.stock_status
    -- Universe of (storeid, itemid) comes from item_store_program_dedup, not
    -- item_line directly: item_store_program_dedup is already an inner-join
    -- requirement for a row to appear in stock_status at all, so deriving the
    -- universe here doesn't drop anything that wasn't already excluded. This
    -- lets the item_line lookup stay filtered to quantity > 0 (fast — most of
    -- item_line is old, fully-consumed batch lines sitting at quantity = 0)
    -- while still surfacing genuinely out-of-stock items at quantity = 0
    -- instead of an unfiltered scan of item_line dropping them or being slow.
    WITH item_store_program_dedup AS (
        SELECT
            isp.storeid::text AS storeid,
            isp.itemid::text AS itemid,
            isp.program,
            MAX(isp.minimum) AS minimum,
            MAX(isp.maximum) AS maximum
        FROM item_store_program isp
        GROUP BY 1, 2, 3
    ),
    items AS (
        SELECT
            isp.storeid,
            isp.itemid,
            s.name AS store,
            i.item_name AS name,
            i.code,
            COALESCE(SUM((il.pack_size * il.quantity)::numeric), 0) AS quantity
        FROM (SELECT DISTINCT storeid, itemid FROM item_store_program_dedup) isp
        JOIN store s ON s.id::text = isp.storeid AND s.disabled = false
        JOIN item i ON i.id::text = isp.itemid
        LEFT JOIN item_line il
          ON il.item_id::text = isp.itemid
         AND il.store_id::text = isp.storeid
         AND il.quantity > 0
        GROUP BY isp.storeid, isp.itemid, s.name, i.item_name, i.code
    ),
    current_mos AS (
        SELECT
            a.storeid,
            a.itemid,
            MAX(a.value) AS value
        FROM aggregator a
        WHERE a.dataelement = 'currentMOS'
          AND EXISTS (
              SELECT 1 FROM items i
              WHERE i.storeid = a.storeid AND i.itemid = a.itemid
          )
        GROUP BY 1, 2
    ),
    -- Single pass over aggregator for AMC: compute the running global max
    -- fulldate via a window function instead of scanning the table again in
    -- a separate CTE, then restrict to items only after that (so the "latest
    -- run" date is still the true global max, not skewed by the restriction).
    latest_amc AS (
        SELECT
            a.storeid,
            a.itemid,
            MAX(a.value) AS value
        FROM (
            SELECT
                a.storeid,
                a.itemid,
                a.value,
                a.fulldate,
                MAX(a.fulldate) OVER () AS max_fulldate
            FROM aggregator a
            WHERE a.dataelement = 'AMC'
        ) a
        WHERE a.fulldate = a.max_fulldate
          AND EXISTS (
              SELECT 1 FROM items i
              WHERE i.storeid = a.storeid AND i.itemid = a.itemid
          )
        GROUP BY 1, 2
    )
    -- DISTINCT ON the same columns as stock_status_dx: if any upstream join
    -- (item/store/item_store_program) ever yields more than one row for the
    -- same key, keep the first and drop the rest rather than failing the
    -- insert with a unique-index violation.
    SELECT DISTINCT ON (i.storeid, i.store, i.name, i.code, i.itemid, isp.program)
        i.storeid,
        i.store,
        i.itemid,
        i.name,
        i.code,
        i.quantity,
        amc.value AS amc,
        isp.program,
        isp.minimum,
        isp.maximum,
        cm.value AS mos,
        CASE
            WHEN i.quantity = 0::numeric THEN '0'
            WHEN cm.value < isp.minimum THEN '1'
            WHEN cm.value > isp.maximum THEN '3'
            ELSE '2'
        END AS status
    FROM current_mos cm
    JOIN items i
      ON cm.storeid = i.storeid
     AND cm.itemid = i.itemid
    JOIN item_store_program_dedup isp
      ON cm.storeid = isp.storeid
     AND cm.itemid = isp.itemid
    LEFT JOIN latest_amc amc
      ON cm.itemid = amc.itemid
     AND cm.storeid = amc.storeid
    ORDER BY i.storeid, i.store, i.name, i.code, i.itemid, isp.program;
END;
$BODY$;

ALTER PROCEDURE public.create_stock_status_matview()
    OWNER TO postgres;


-- ─────────────────────────────────────────────────────────────────
-- Dispatcher: reads pref.json methods array and calls each procedure.
-- Skips aggregator_resetTable and aggregator_dashboardExport.
-- Also skips aggregator_stockStatus, aggregator_stockValueHistory,
-- aggregator_stockValueMovement and aggregator_storePeriodSchedules:
-- these are never listed in the scheduler_aggregation pref, so they
-- are instead called directly and unconditionally from aggregator_run().
-- Called either directly or via the trigger below.
-- ─────────────────────────────────────────────────────────────────
CREATE OR REPLACE PROCEDURE public.aggregator_dispatch(
    IN p_pref jsonb
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_method jsonb;
    v_name   text;
    v_params jsonb;
    v_skip   text[] := ARRAY[
        'aggregator_resetTable',
        'aggregator_dashboardExport',
        'aggregator_stockStatus',
        'aggregator_stockValueHistory',
        'aggregator_stockValueMovement',
        'aggregator_storePeriodSchedules'
    ];
BEGIN
    FOR v_method IN SELECT jsonb_array_elements(p_pref->'methods')
    LOOP
        v_name   := v_method->>'methodName';
        v_params := COALESCE(v_method->'parameters', '{}'::jsonb);

        CONTINUE WHEN v_name = ANY(v_skip);

        CASE v_name
            WHEN 'aggregator_monthlyConsumption'   THEN CALL public.aggregator_monthlyConsumption(v_params);
            WHEN 'aggregator_AMC'                  THEN CALL public.aggregator_AMC(v_params);
            WHEN 'aggregator_stockMovement'        THEN CALL public.aggregator_stockMovement(v_params);
            WHEN 'aggregator_stockHistory'         THEN CALL public.aggregator_stockHistory(v_params);
            WHEN 'aggregator_monthlyDOS'           THEN CALL public.aggregator_monthlyDOS(v_params);
            ELSE
                RAISE NOTICE 'aggregator_dispatch: unhandled method "%", skipping', v_name;
        END CASE;
    END LOOP;
END;
$BODY$;

ALTER PROCEDURE public.aggregator_dispatch(jsonb)
    OWNER TO postgres;



-- ─────────────────────────────────────────────────────────────────
-- Single entry point: reads pref and runs all aggregation procedures.
-- Call directly from mSupply: CALL public.aggregator_run();
--
-- aggregator_stockStatus, aggregator_stockValueHistory,
-- aggregator_stockValueMovement and aggregator_storePeriodSchedules
-- are never listed in the scheduler_aggregation pref (so they get no
-- parameters from it) and are therefore called here directly and
-- unconditionally, independent of the pref-driven dispatch above.
-- ─────────────────────────────────────────────────────────────────
CREATE OR REPLACE PROCEDURE public.aggregator_run()
LANGUAGE plpgsql AS $BODY$
DECLARE
    v_data jsonb;
BEGIN
    SELECT data INTO v_data
    FROM public.pref
    WHERE item = 'scheduler_aggregation';

    IF v_data IS NULL THEN
        RAISE EXCEPTION 'scheduler_aggregation not found in pref table';
    END IF;

    CALL public.aggregator_dispatch(v_data);

    CALL public.aggregator_stockValueMovement();
    CALL public.aggregator_stockValueHistory();
    CALL public.aggregator_stockStatus();
    CALL public.aggregator_storePeriodSchedules();
END;
$BODY$;

ALTER PROCEDURE public.aggregator_run() OWNER TO postgres;
