SET PGPASSWORD=%1
..\PostgreSQL\11\bin\psql --username=%2 --port=%3 --file=db-init.sql --host=localhost --dbname=%4 > db_init.log
SET PGPASSWORD=%1
exit