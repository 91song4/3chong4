class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Stack:
    def __init__(self):
        self.head = None

    def push(self, value):
        temp_node = self.head
        self.head = Node(value)
        self.head.next = temp_node
        return

    # pop 기능 구현
    def pop(self):
        if self.is_empty():
            return -1

        temp_node = self.head
        self.head = self.head.next

        return temp_node.data

    def peek(self):
        if self.is_empty():
            return -1
        return self.head.data

    # isEmpty 기능 구현
    def is_empty(self):
        if self.head == None:
            return True
        return False


stack = Stack()
stack.push(13)
print(stack.peek())
print(stack.pop())

for a in range(5):
    print(a)
