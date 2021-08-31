import sqlite3
from datetime import datetime

def connect_to_db():
    con = sqlite3.connect('commentsdb.db')
    cur = con.cursor()
    return con, cur

def close_connection(con):
    con.close()

def numOfDays(date1, date2):
    return abs(date2-date1).days

def fetch_all_data():
    lists = []
    date = datetime.now().date()
    con, cur = connect_to_db()
    for row in cur.execute('SELECT * FROM Comments'):
        new_date = datetime.strptime(row[3], "%Y-%m-%d %H:%M:%S.%f").date()
        new_row = list(row)
        diff = numOfDays(new_date, date)
        if diff == 0:
             new_row[3] = 'Today'
        elif diff == 1:
             new_row[3] = 'Yesterday'
        lists.append(new_row)
    print(lists)
    close_connection(con)
    return lists

def insert_data_val(comment, user):
    con, cur = connect_to_db()
    date = datetime.now()
    exe_query = 'INSERT INTO Comments(comment, user, date) VALUES (?,?, ?)'
    data_tuple = (comment, user, date)
    print (data_tuple)
    cur.execute(exe_query, data_tuple)
    con.commit()
    close_connection(con)

def delete_data(id):
    con, cur = connect_to_db()
    del_query = "DELETE FROM Comments WHERE id=?"
    cur.execute(del_query, (id,))
    con.commit()
    close_connection(con)

fetch_all_data()