class Person:
    def __init__(self, param_name):
        self.name = param_name

    def talk(self):
        print(f'hello, my name is {self.name}')


person_1 = Person('g-hoon')
person_1.talk()
person_2 = Person('moo-song')
person_2.talk()
