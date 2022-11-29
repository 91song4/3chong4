# BOJ 1158
# 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다. 원에서 사람들이 제거되는 순서를(N, K)-요세푸스 순열이라고 한다. 예를 들어(7, 3)-요세푸스 순열은 < 3, 6, 2, 7, 5, 1, 4 > 이다.

# N과 K가 주어지면(N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.

class Node:
    def __init__(self, data, head=None):
        self.data = data
        self.next = head


class Linked_list:
    def __init__(self, count=1):
        self.head = Node(1)
        i = 1
        while i < count:
            self.append(i+1)
            i += 1

    def is_empty(self):
        if self.head == None:
            return True
        return False

    def append(self, data):
        cur = self.head
        while cur.next != self.head and cur.next != None:
            cur = cur.next
        cur.next = Node(data, self.head)

    def get_last_node(self):
        find_node = self.head
        while find_node.next != self.head:
            find_node = find_node.next
        return find_node

    def delete_node(self, node, step):
        if self.head.next == self.head:
            temp_node = self.head
            self.head = None
            return temp_node

        del_node = node

        count = 1
        while count < step:
            prev_node = del_node
            del_node = del_node.next
            count += 1

        if del_node == self.head:
            prev_node = self.get_last_node()
            self.head = del_node.next
            prev_node.next = self.head
        else:
            prev_node.next = del_node.next

        return del_node


def josephus_problem(n, k):
    linked_list = Linked_list(n)
    temp_node = linked_list.head
    del_arr = []

    temp_node = linked_list.delete_node(temp_node, k)
    del_arr.append(str(temp_node.data))
    while linked_list.is_empty() != True:
        temp_node = linked_list.delete_node(temp_node.next, k)
        del_arr.append(str(temp_node.data))

    return print(f'<{", ".join(del_arr)}>')


# BOJ 1158
# def josephus_problem(n, k):
#     arr_max = []
#     josephus_arr = []
#     for arr in range(1, n+1):
#         arr_max.append(arr)

#     i = 0
#     while len(arr_max):
#         if len(arr_max) == 1:
#             josephus_arr.append(str(arr_max.pop(0)))
#             break

#         i += k-1
#         while not i < len(arr_max):
#             i -= len(arr_max)

#         josephus_arr.append(str(arr_max.pop(i)))
#         if not i < len(arr_max):
#             i = 0

#     return print(f'<{", ".join(josephus_arr)}>')


n, k = map(int, input().split())
josephus_problem(n, k)
