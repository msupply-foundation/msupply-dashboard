import psycopg2
from datetime import *

# CONFIG
# DATABASE
user = "postgres"
password = ""
host = "localhost"
port = "5432"
database = "dashboard-nzdemo"


tables = [{"table": "aggregator_copy", "fields": ["monthyear", "fulldate"]}]

try:
    connection = psycopg2.connect(user=user,
                                  password=password,
                                  host=host,
                                  port=port,
                                  database=database)
except:
    print("Problem connection to database")
    exit()


def monthyear_to_date(date_string):
    return date(int(date_string[0:4]), int(date_string[4:6]), 1)


# Read dates from tables to find the most recent one
latest_date = date(1976, 1, 1)
cursor = connection.cursor()

for table in tables:
    sql_query = "select {} from {}".format(
        ", ".join(table["fields"]), table["table"])
    cursor.execute(sql_query)
    results = cursor.fetchmany(size=1000)
    for result in results:
        for field in result:
            if field == None or field == "":
                continue
            if type(field) == date:
                current_date = field
            else:
                current_date = monthyear_to_date(field)
            if current_date > latest_date:
                # print(current_date)
                latest_date = current_date
print(latest_date)
