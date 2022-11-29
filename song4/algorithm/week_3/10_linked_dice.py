class LinkedTuple:
    def __init__(self) -> None:
        self.items = list()

    def add(self, key, value):
        self.items.append((key, value))

    def get(self, key):
        for k, v in self.items:
            if key == k:
                return v


class LinkedDict:
    # __table_max = 8
    def __init__(self) -> None:
        self.__table_max = 8
        self.items = []
        for i in range(self.__table_max):
            self.items.append(LinkedTuple())

    def put(self, key, value):
        index = hash(key) % self.__table_max
        print(f'{key} index: {index}')
        self.items[index].add(key, value)

    def get(self, key):
        return self.items[hash(key) % self.__table_max].get(key)


hashtable = LinkedDict()
hashtable.put('test', '테스트')
hashtable.put('test2', '테스트2')
print(hashtable.get('test'))
print(hashtable.get('test2'))
