class Node:
    def __init__(self, data):       # 초기값 정의 == 이니셜라이즈
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self, data):
        self.head = Node(data)

    def append(self, data):
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        print("cur은 무엇일까  ", cur.data)
        cur.next = Node(data)

Linkd_list = LinkedList(3)      # linked_list.head == Node(3)
Linkd_list.append(4)
Linkd_list.append(5)
Linkd_list.append(6)
