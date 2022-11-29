class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, data):
        self.head = Node(data)

    def append(self, data):
        if self.head == None:
            self.head = Node(data)
            return self.head

        tail = self.head
        while tail.next != None:
            tail = tail.next
        tail.next = Node(data)
        return tail.next

    def print_all(self):
        tail = self.head
        while tail != None:
            print(f'{tail.data}')
            tail = tail.next


linked_list = LinkedList(3)
linked_list.append(25)
linked_list.append(15)
linked_list.print_all()
