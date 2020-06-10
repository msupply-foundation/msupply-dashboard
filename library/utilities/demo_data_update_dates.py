import psycopg2
from datetime import *

# CONFIG
# DATABASE
user = "postgres"
password = ""
host = "localhost"
port = "5432"
database = "dashboard-nzdemo"


tables = [
    {"table": "transact_copy",
     "fields": ["entry_date", "confirm_date", "pickslip_printed_date", "invoice_printed_date",
                "ship_date", "arrival_date_estimated", "arrival_date_actual"]},
    {"table": "requisition_copy",
     "fields": ["date_stock_take", "date_entered", "date_order_received"]},
    {"table": "aggregator_copy", "fields": ["monthyear", "fulldate"]}
]

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
    return date(int(date_string[0:4]), int(date_string[4:]), 1)


def date_to_monthyear(date):
    return date.strftime('%Y') + date.strftime('%m')


# Read dates from tables to find the most recent one
latest_date = date(1976, 1, 1)
cursor = connection.cursor()

print("Scanning tables to find most recent date...")

for table in tables:
    print(table["table"], end=" ")
    sql_query = "SELECT {}, {} FROM {}".format(
        "id", ", ".join(table["fields"]), table["table"])
    cursor.execute(sql_query)
    records = cursor.fetchall()
    print("({} records)".format(len(records)))
    for record in [r[1:] for r in records]:
        for field in record:
            if field == None or field == "":
                continue
            if type(field) == date:
                current_date = field
            else:
                current_date = monthyear_to_date(field)
            if current_date > latest_date:
                latest_date = current_date

difference = (date.today() - latest_date).days

print("\nMost recent date found: {} ({} days ago)"
      .format(latest_date, difference))

confirm = input(
    "\nAbout to move all dates forward by {} days. Do you wish to proceed? (Y/N)".format(difference))

if confirm != "Y" and confirm != "y":
    print("Exiting without update...")
    exit()

# Write records back with updated dates
for table in tables:
    sql_query = "SELECT {}, {} FROM {}".format(
        "id", ", ".join(table["fields"]), table["table"])
    cursor.execute(sql_query)
    records = cursor.fetchall()

    print("Updating {} records in table: {}".format(
        len(records), table["table"]))

    for count, record in enumerate(records):
        new_values = ["'{}'".format(record[0])]
        for field in record[1:]:
            if field == None:
                new_values.append("NULL")
                continue
            if field == "":
                new_values.append("''")
                continue
            if type(field) == date:
                new_values.append("'{}'".format(
                    field + timedelta(days=difference)))
            else:
                new_date = monthyear_to_date(
                    field) + timedelta(days=difference)
                new_values.append("'{}'".format(date_to_monthyear(new_date)))
        # Build update string
        update_string = ""
        for i, field in enumerate(table["fields"]):
            update_string += "{} = {}".format(field, new_values[i+1])
            if i < len(table["fields"])-1:
                update_string += ", "
        sql_query = "UPDATE {} SET {} WHERE ID={}".format(
            table["table"], update_string, "'{}'".format(record[0]))
        # print(sql_query)
        cursor.execute(sql_query)
    print("\n")
    connection.commit()

print("Done! :) ")
