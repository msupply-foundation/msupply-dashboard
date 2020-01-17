-- This query should be run to create views summarising store names and categories for the filters within Dashboards.
-- This view greatly simplifies SQL queries for these filters.


VIEW IF EXISTS store_categories;
CREATE VIEW store_categories AS (
    SELECT
    	store.id AS storeid,
		store.name, 
		store.code, 
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
		store.disabled 
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
		LEFT OUTER JOIN name_category6 ON name_category6.id = name.category4_id
);