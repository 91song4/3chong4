class MaxHeap:
    def __init__(self):
        self.items = [None]

    def insert(self, value):
        self.items.append(value)
        index = len(self.items)-1

        while index // 2 != 0:
            if self.items[index//2] < self.items[index]:
                self.items[index//2], self.items[index] =\
                    self.items[index], self.items[index // 2]
            index //= 2

    def delete(self):
        self.items[1], self.items[-1] = self.items[-1], self.items[1]
        delete_node = self.items.pop()

        node = self.items
        curr_node_idx = 1

        while len(node) > curr_node_idx * 2:
            left_child_idx = curr_node_idx * 2
            right_child_idx = (curr_node_idx * 2)+1

            if len(node) > right_child_idx:
                if node[left_child_idx] < node[right_child_idx]:
                    if node[curr_node_idx] < node[right_child_idx]:
                        node[curr_node_idx], node[right_child_idx] =\
                            node[right_child_idx], node[curr_node_idx]
                        curr_node_idx = right_child_idx
                        continue
                    else:
                        break

            if node[curr_node_idx] < node[left_child_idx]:
                node[curr_node_idx], node[left_child_idx] =\
                    node[left_child_idx], node[curr_node_idx]
                curr_node_idx = left_child_idx
            else:
                break

        return delete_node  # 8 을 반환해야 합니다.


max_heap = MaxHeap()
max_heap.insert(8)
max_heap.insert(6)
max_heap.insert(7)
max_heap.insert(2)
max_heap.insert(5)
max_heap.insert(4)
print(max_heap.items)  # [None, 8, 6, 7, 2, 5, 4]
print(max_heap.delete())  # 8 을 반환해야 합니다!
print(max_heap.items)  # [None, 7, 6, 4, 2, 5]
