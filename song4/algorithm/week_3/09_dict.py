class Dict:
    __table_max = 8

    def __init__(self):
        self.items = [None]*self.__table_max

    def put(self, key, value):
        self.items[hash(key) % self.__table_max] = value

    def get(self, key):
        return self.items[hash(key) % self.__table_max]


my_dict = Dict()
my_dict.put('test', 3)
print(my_dict.get('test'))
