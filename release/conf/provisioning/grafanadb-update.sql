CREATE TEMP TABLE temp_grafana_users (
    user_id INTEGER,
    name TEXT,
    email TEXT
);

\copy temp_grafana_users FROM 'C:\Program Files\mSupply Dashboard\data\temp\users.csv' CSV HEADER


-- Match each Grafana user back to its 4D [user] record so we can stamp
-- [user]ID into user_auth.auth_id (the same value 4D sends as the OAuth
-- `sub` claim). Grafana 13 matches OAuth logins on auth_id first, so without
-- this an upgraded site cannot authenticate its existing users.
--
-- The comparison is deliberately case-insensitive: upgrading to Grafana 13
-- runs a migration ("update login and email fields to lowercase") that
-- lowercases every user.email, while 4D's e_mail keeps its original case.
-- A case-sensitive `=` here silently matches nothing for those users, which
-- produces no UPDATE row and leaves them unable to log in.
-- Names are compared the same way for symmetry; 4D is the source of truth for
-- display case and Grafana does not normalise user.name.
--
-- Only rows that match are updated, so a user present in Grafana but absent
-- from 4D is simply skipped rather than breaking the run.
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
