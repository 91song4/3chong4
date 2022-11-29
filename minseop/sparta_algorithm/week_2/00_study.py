class Person:
    def __init__(self, param_name):
        self.name = self
        print("이거슨 init")

    def talk(self):
        print("안녕하세요, 제 이름은", self.name,"입니당")
        


person_1 = Person("라이언")
print(person_1.name)
person_1.talk()