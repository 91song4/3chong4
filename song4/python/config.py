import pymysql

db=pymysql.connect(host='localhost',
                   port=3306,
                   user='root',
                   password='wlgnsdl1!@',
                   db='flask_basic',
                   charset='utf8'
                   )

# cursor = db.cursor()
cursor = db.cursor(pymysql.cursors.DictCursor)
cursor.execute('use flask_basic;')
email = "91song4@daum.net"
# cursor.execute(f'insert into users (name, email, password, profile)\
#             value ("g-hoon", "91song4@daum.net", "1q2w3e4r","null")')
# cursor.execute('update users set email="91song4@daum.net" where id="1"')
# cursor.execute(f'delete from users where email="91song4@daum.net"')
cursor.execute('select * from users')
value = cursor.fetchall()
print(value[0]['name'])

db.commit()
db.close()



# db = {
#     # 데이터베이스에 접속할 사용자 아이디
#     'user': 'root',
#     # 사용자 비밀번호
#     'password': 'test1234',
#     # 접속할 데이터베이스의 주소 (같은 컴퓨터에 있는 데이터베이스에 접속하기 때문에 localhost)
#     'host': '127.0.0.1',
#     # 관계형 데이터베이스는 주로 3306 포트를 통해 연결됨
#     'port': 3306,
#     # 실제 사용할 데이터베이스 이름
#     'database': 'flask_basic'
# }

# DB_URL = f"mysql+mysqlconnector://{db['user']}:{db['password']}@{db['host']}:{db['port']}/{db['database']}?charset=utf8"
