CREATE TEMP TABLE temp_grafana_users (
    user_id INTEGER,
    name TEXT,
    email TEXT
);

\copy temp_grafana_users FROM 'C:\Program Files\mSupply Dashboard\data\temp\users.csv' CSV HEADER


SELECT
    'UPDATE user_auth SET auth_id = ''' || u.id || ''' ' ||
    'WHERE user_id = ' || t.user_id ||
    ' AND auth_module=''oauth_generic_oauth'';'
FROM temp_grafana_users t
JOIN public.user u ON CASE WHEN u.e_mail IS NULL OR u.e_mail = '' THEN u.name = t.name ELSE u.e_mail = t.email END;