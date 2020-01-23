-- This query should be run to create views summarising item names and categories for the filters within Dashboards.
-- This view greatly simplifies SQL queries for these filters.

DROP VIEW IF EXISTS item_categories;
CREATE VIEW item_categories AS (
	with stock_type_strings as 
	(
	  select id, 'On essential drug list' as stock_type from item where essential_drug_list = true  union 
	  select id, 'Critical stock' as stock_type from item where critical_stock = true union
	  select id, 'Normal stock' as stock_type from item where normal_stock = true
	)
SELECT
item.id,
    item.item_name, 
	COALESCE (item_category.description, 'NONE') AS category,   --Replaces NULL with 'NONE'
	COALESCE (item_category_level2.description, 'NONE') AS category_level2, 
	COALESCE (item_category_level1.description, 'NONE') AS category_level1, 
	COALESCE (item_category2.description, 'NONE') AS category2, 
	COALESCE (item_category3.description, 'NONE') AS category3, 
	CASE WHEN ven_category = ''OR ven_category IS NULL THEN 'NONE' ELSE ven_category END AS ven_category, 
	essential_drug_list, 
	critical_stock, 
	normal_stock,
	COALESCE (stock_type, 'NONE') AS stock_type
FROM 
	item 
	LEFT JOIN item_category ON category_id = item_category.id 
	LEFT JOIN item_category2 ON category2_id = item_category2.id 
	LEFT JOIN item_category3 ON category3_id = item_category3.id 
	LEFT JOIN item_category_level2 ON item_category.parent_id = item_category_level2.id 
	LEFT JOIN item_category_level1 ON item_category_level2.parent_id = item_category_level1.id
	LEFT JOIN stock_type_strings ON item.id = stock_type_strings.id
);
