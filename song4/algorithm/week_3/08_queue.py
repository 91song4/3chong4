class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Queue:
    def __init__(self):
        self.head = None
        self.tail = None

    def enqueue(self, value):
        new_node = Node(value)
        if self.is_empty():
            self.head = new_node
            self.tail = new_node
            return

        self.tail.next = new_node
        self.tail = new_node

    def dequeue(self):
        if self.is_empty():
            return -1

        dequeue_node = self.head
        if self.head.next == None:
            self.tail = None

        self.head = self.head.next

        return dequeue_node.data

    def peek(self):
        if self.is_empty():
            return -1
        return self.tail

    def is_empty(self):
        if self.head == None:
            return True
        return False
