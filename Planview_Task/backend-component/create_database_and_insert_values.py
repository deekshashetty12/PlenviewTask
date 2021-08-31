import sqlite3
con = sqlite3.connect('commentsdb.db')
from datetime import datetime

cur = con.cursor()

# Create table
# cur.execute('''CREATE TABLE comments
#                (id, comment, user, date)''')
cur.execute('''CREATE TABLE Comments 
       (ID integer primary key AUTOINCREMENT, 
       comment TEXT NOT NULL, 
       user INT NOT NULL, 
       date timestamp);''')  

# Insert a row of data

data_person_name = [('reason for delay', 'Deeksha shetty', datetime.now()),
('reason for delay1', 'Deeksha shetty1', datetime.now()),
('reason for delay2', 'Deeksha shetty2', datetime.now()),
('reason for delay3', 'Deeksha shetty3', datetime.now())]
cur.executemany('INSERT INTO Comments(comment, user, date) VALUES (?,?, ?)', data_person_name)

# Save (commit) the changes
con.commit()

# We can also close the connection if we are done with it.
# Just be sure any changes have been committed or they will be lost.


for row in cur.execute('SELECT * FROM Comments'):
        print(row)

con.close()