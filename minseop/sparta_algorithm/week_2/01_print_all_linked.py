# [3] -> [4]
# data, next
class Node:
    def __init__(self, data): # 초기값 다시 올릴없음.
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self, data):   # 이니셜라이즈 == 초기에 정의
        self.head = Node(data)      # self.head 로 Node랑 연결되어있다

    def append(self, data):
        if self.head is None:   # 만약 self.head가 None 이라면 (값이 없다면)
            self.head = Node(data)  # 이미 node(3)이 배정되어서 if문은 통과!
            return

        cur = self.head     # cur = Node(3)
        while cur.next is not None: # cur.next가 None이 아닐 때 까지
            cur = cur.next
        print("cur is ",cur.data)
        cur.next = Node(data)
        print("cur is next", cur.next.data)



Linked_List = LinkedList(3) # linked_list.head == Node(3)
Linked_List.append(4)
Linked_List.append(5)




#     def append(self, data):
#         if self.head is None:
#             self.head = Node(data)
#             return
#
#         cur = self.head
#         while cur.next is not None:
#             cur = cur.next
#             print("cur is", cur.data)
#         cur.next = Node(data)
#