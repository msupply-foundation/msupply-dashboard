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
--
-- The match key is the email Grafana stored at the user's last login, rebuilt
-- the way 4D builds it (routesApiV4OauthUserInfo): [user]e_mail when it is
-- set, otherwise [user]name || '@sussol.net'. The display name is not a usable
-- key: 4D sends "first_name last_name" whenever first_name is set, so it only
-- equals [user]name for users without a first name.
--
-- Only rows that match are updated, so a user present in Grafana but absent
-- from 4D is simply skipped rather than breaking the run.
SELECT
    'UPDATE user_auth SET auth_id = ''' || u.id || ''' ' ||
    'WHERE user_id = ' || t.user_id ||
    ' AND auth_module=''oauth_generic_oauth'';'
FROM temp_grafana_users t
JOIN public.user u ON lower(
    CASE
        WHEN coalesce(u.e_mail, '') <> '' THEN u.e_mail
        ELSE u.name || '@sussol.net'
    END
) = lower(t.email);
