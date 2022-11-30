class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    def append(self, value):
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        cur.next = Node(value)

    def print_all(self):
        cur = self.head
        while cur is not None:
            print(cur.data)
            cur = cur.next

    def get_node(self, index):
        node = self.head
        count = 0
        while count < index:
            node = node.next
            count += 1
        return node

    def add_node(self, index, value):
        new_node = Node(value)  #[6]

        if index == 0:
            new_node.next = self.head   #new.node.next == 5
            self.head = new_node        # self.head == 6
            return

        node = self.get_node(index -1)  #index = 인수   # index번째 노드를 가져와서 node에 넣어준다
        next_node = node.next  # [5] 다음인 현재[12] # next 노드는 현재있는 node.next(다음것)
        node.next = new_node   # [5] -> [6]
        new_node.next = next_node   # [6] -> [12]

    def deldete_node(slef, index):
        if index == 0:
            slef.head = slef.head.next
            return


        node = slef.get_node(index -1)
        node.next = node.next.next
        return



linked_list = LinkedList(5) # [5]
linked_list.append(12)  # [5] -> [12]
linked_list.add_node(0, 3) # [3] -> [5] -> [12]
linked_list.print_all() # [3] -> [5] -> [12]
linked_list.deldete_node(0) # [5] -> [12]
linked_list.print_all() # [5] -> [12]