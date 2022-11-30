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

    def get_kth_node_from_last(self, k):
        len_num = 1     # 시작 노드를 카운트해주기 위해 0이 아닌 1부터 시작
        cur = self.head

        while cur.next is not None:     # 전체 노드를 돌면서 모든 노드를 카운트
            cur = cur.next
            len_num += 1

        end_len_num = len_num - k       # 시작노드에서 마지막 k번째 노드에 도달 할때까지 얼마나 가야되는지 계산
        cur = self.head
        for i in range(end_len_num):
            cur = cur.next

        return cur


linked_list = LinkedList(6)
linked_list.append(7)
linked_list.append(8)

print(linked_list.get_kth_node_from_last(2).data)  # 7이 나와야 합니다!