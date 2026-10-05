-- Copy of release/conf/provisioning/grafanadb-update.sql (msupply-dashboard). Only the CSV path
-- changes: msupply update-grafanadb passes it as the psql variable :csv.
CREATE TEMP TABLE temp_grafana_users (
    user_id INTEGER,
    name TEXT,
    email TEXT
);

\set copy_cmd '\\copy temp_grafana_users FROM ' :'csv' ' CSV HEADER'
:copy_cmd

-- Match each Grafana user back to its 4D [user] record and stamp [user]ID into
-- user_auth.auth_id (the value 4D sends as the OAuth `sub` claim). Case-insensitive
-- because Grafana 13 lowercases user.email on upgrade while 4D keeps the original case.
SELECT
    'UPDATE user_auth SET auth_id = ''' || u.id || ''' ' ||
    'WHERE user_id = ' || t.user_id ||
    ' AND auth_module=''oauth_generic_oauth'';'
FROM temp_grafana_users t
JOIN public.user u ON CASE
    WHEN u.e_mail IS NULL OR u.e_mail = ''
        THEN lower(u.name) = lower(t.name)
        ELSE lower(u.e_mail) = lower(t.email)
    END;
