class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    def isEmpty(self):
        if self.head == None:
            return True
        return False

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
        if self.isEmpty():
            return 'empty'

        i = 0
        temp_node = self.head
        while i != index:
            temp_node = temp_node.next
            if temp_node == None:
                return 'The index cannot be accessed'
            i += 1
        return temp_node


linked_list = LinkedList(5)
linked_list.append(12)
linked_list.get_node(1)  # -> 5를 들고 있는 노드를 반환해야 합니다!
linked_list.get_node(2)
