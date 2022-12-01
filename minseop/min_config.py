import pymysql

db = pymysql.connect(host='localhost',
                     port=3306,
                     user='root',
                     passwd='1234',
                     db='testsql',
                     charset='utf8')

cursor = db.cursor(pymysql.cursors.DictCursor)
                        # pymysql.cursors.DictCursor


cursor.execute('use testsql;')  #execute함수# 를 사용해 명령을 내림/db 접근
# cursor.execute('insert into student (st_name, st_city) values ("한정훈","8조")') i

# cursor.execute('update student set st_city="마8두부" where st_city="8조"') u
# cursor.execute('delete from student where st_name="한정훈"')

cursor.execute('select * from student;')    # value 넣고 출력하면 colnum row 수 가 출력
value = cursor.fetchall()
# print(value)  #보기 난잡함
print(value[0]['st_name'])  #pymysql.cursors.DictCursor


db.commit()
db.close()









# cursor.execute('update student set st_name="고라파덕" where st_name="피카츄"')

# cursor.execute('delete from student where st_name="진로"')

# cursor.execute('select * from student;')    # value 넣고 출력하면 colnum row 수 가 출력
# value = cursor.fetchall()
# # print(value)  #보기 난잡함
# print(value[0]['st_name'])  #pymysql.cursors.DictCursor
# db.commit()
# db.close()