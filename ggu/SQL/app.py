import pymysql

db = pymysql.connect(host='localhost',
                     port=3306,
                     user='root',
                     password='221114',
                     db='sparta_test',
                     charset='utf8'
                     )

# cursor = db.cursor()
cursor = db.cursor(pymysql.cursors.DictCursor)


cursor.execute('use sparta_test')


# cursor.execute('insert into student(name, email) values ("어피치","카카오")')


# cursor.execute('update student set name="라이언" where name="어피치"')


# cursor.execute('delete from student where name="라이언"')

cursor.execute('select * from student')
value = cursor.fetchall()
print(value[0]['name'])


db.commit()
db.close()