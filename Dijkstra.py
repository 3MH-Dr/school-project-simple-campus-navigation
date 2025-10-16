import heapq

class DijkstraGraph:
    def __init__(self, adjacency_list):
        self.graph = adjacency_list
        self.num_nodes = len(adjacency_list)
        # 节点映射
        self.node_to_idx = {}
        self.idx_to_node = {}
        for i, node_info in enumerate(adjacency_list):
            node_name = node_info[0][0]
            self.node_to_idx[node_name] = i
            self.idx_to_node[i] = node_name

    def build_path(self, previous, current):
        """构建从起点到当前节点的路径"""
        path = []
        while current is not None:
            path.append(self.idx_to_node[current])
            current = previous[current]
        return list(reversed(path))

    def dijkstra(self, start_idx):
        # 记录算法过程中的路径选择
        process_paths = []

        distances = [float('inf')] * self.num_nodes
        previous = [None] * self.num_nodes
        distances[start_idx] = 0
        heap = [(0, start_idx, [start_idx])]
        best_paths = {}  # 记录到每个节点的最佳路径

        while heap:
            current_dist, u, current_path = heapq.heappop(heap)

            if current_dist > distances[u]:
                continue

            # 转换当前路径为节点名称
            current_path_names = [self.idx_to_node[i] for i in current_path]
            wrong_paths = []  # 存储这一步中的错误路径
            right_path = None  # 存储这一步中的正确路径

            for edge in self.graph[u][1:]:
                neighbor_name, weight = edge
                neighbor = self.node_to_idx[neighbor_name]
                distance = current_dist + weight

                # 构建到邻居节点的路径
                neighbor_path = current_path + [neighbor]
                neighbor_path_names = [self.idx_to_node[i] for i in neighbor_path]

                if distance < distances[neighbor]:
                    # 这是一个更好的路径
                    distances[neighbor] = distance
                    previous[neighbor] = u
                    heapq.heappush(heap, (distance, neighbor, neighbor_path))
                    best_paths[neighbor] = neighbor_path_names
                    right_path = neighbor_path_names
                else:
                    # 这是一个更差的路径
                    wrong_paths.append(neighbor_path_names)

            # 如果这一步有比较过程，添加到结果中
            if wrong_paths or right_path:
                step_paths = []
                if wrong_paths:
                    step_paths.extend(wrong_paths)
                if right_path:
                    step_paths.append(right_path)
                if step_paths:  # 只有当有路径比较时才添加
                    process_paths.append(step_paths)

        return distances, previous, process_paths

    def shortest_path(self, start_idx, end_idx):
        try:
            distances, previous, process_paths = self.dijkstra(start_idx)

            if distances[end_idx] == float('inf'):
                return [], float('inf'), []

            # 构建最终路径
            final_path = self.build_path(previous, end_idx)

            return final_path, distances[end_idx], process_paths

        except Exception as e:
            print(f"Error in shortest_path: {str(e)}")
            return [], float('inf'), []
    def idx(self, name):
        """
        获取节点名称对应的索引
        :param name: 节点名称
        :return: 索引值，如果不存在返回-1
        """
        return self.node_to_idx.get(name, -1)

    def get_node_name(self, idx):
        """
        获取索引对应的节点名称
        :param idx: 节点索引
        :return: 节点名称
        """
        return self.idx_to_node.get(idx)

    def dijkstra(self, start_idx):
        """
        单源最短路径
        :param start_idx: 起始节点索引
        :return: distances, previous
        """
        distances = [float('inf')] * self.num_nodes
        previous = [None] * self.num_nodes
        distances[start_idx] = 0

        # 优先队列（距离, 节点索引）
        heap = [(0, start_idx)]

        while heap:
            current_dist, u = heapq.heappop(heap)

            # 如果当前距离大于记录距离，跳过
            if current_dist > distances[u]:
                continue

            # 遍历当前节点的所有边
            for edge in self.graph[u][1:]:  # 跳过第一个元素（节点自身）
                neighbor_name, weight = edge
                neighbor = self.idx(neighbor_name)  # 获取邻居节点的索引

                distance = current_dist + weight
                if distance < distances[neighbor]:
                    distances[neighbor] = distance
                    previous[neighbor] = u
                    heapq.heappush(heap, (distance, neighbor))

        return distances, previous

    def shortest_path(self, start_idx, end_idx):
        """
        返回从 start_idx 到 end_idx 的最短路径和距离
        :param start_idx: 起始节点索引
        :param end_idx: 目标节点索引
        :return: (path, distance) 路径和距离
        """
        try:
            distances, previous = self.dijkstra(start_idx)
            path = []
            current = end_idx

            # 如果没有找到路径
            if distances[end_idx] == float('inf'):
                return [], float('inf')

            # 重建路径
            while current is not None:
                path.append(self.get_node_name(current))  # 存储节点名称而不是索引
                current = previous[current]
            path.reverse()

            return path, distances[end_idx]
        except Exception as e:
            print(f"Error in shortest_path: {str(e)}")
            return [], float('inf')


# 测试代码
if __name__ == "__main__":
    # 字符串节点的图示例
    adj_list = [
        [['a', 0], ['b', 1], ['c', 2]],  # 节点a
        [['b', 0], ['a', 1], ['c', 1]],  # 节点b
        [['c', 0], ['a', 2], ['b', 1]]  # 节点c
    ]

    g = DijkstraGraph(adj_list)

    # 测试节点索引查找
    start = 'a'
    end = 'c'
    s_idx = g.idx(start)
    e_idx = g.idx(end)
    print(f"起点 '{start}' 的索引: {s_idx}")
    print(f"终点 '{end}' 的索引: {e_idx}")

    # 测试最短路径
    path, dist = g.shortest_path(s_idx, e_idx)
    print(f"从 {start} 到 {end} 的最短路径: {path}")
    print(f"距离: {dist}")