class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def get_data(self):
        return self.data


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    def append(self, value):
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        cur.next = Node(value)


def get_all_data(linked_list):
    node = linked_list.head
    result = ''
    while node != None:
        result += str(node.get_data())
        node = node.next
    return result


def get_linked_list_sum(linked_list_1, linked_list_2):
    sum1 = get_all_data(linked_list_1)
    sum2 = get_all_data(linked_list_2)
    result = int(sum1)+int(sum2)
    return result


linked_list_1 = LinkedList(6)
linked_list_1.append(7)
linked_list_1.append(8)

linked_list_2 = LinkedList(3)
linked_list_2.append(5)
linked_list_2.append(4)

print(get_linked_list_sum(linked_list_1, linked_list_2))
