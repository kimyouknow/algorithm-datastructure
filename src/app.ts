import AdjacencyMatrixGraph from '@/datastructure/AdjacencyMatrixGraph';
import AdjacencyListGraph from '@/datastructure/AdjacencyListGraph';
import {
  SearchAdjMatrixGraph,
  SearchAdjListGraph,
} from '@/algorithm/graphSearch';

// const graph = new AdjacencyMatrixGraph();
// const graph = new SearchAdjMatrixGraph();
// graph.create(8);
// const graph = new AdjacencyListGraph();
const graph = new SearchAdjListGraph();

graph
  .addVertex('A')
  .addVertex('B')
  .addVertex('C')
  .addVertex('D')
  .addVertex('E')
  .addVertex('F')
  .addVertex('G')
  .addVertex('H')
  .addEdge('A', 'B')
  .addEdge('A', 'C')
  .addEdge('B', 'D')
  .addEdge('C', 'D')
  .addEdge('C', 'E')
  .addEdge('D', 'F')
  .addEdge('E', 'G')
  .addEdge('E', 'H')
  .addEdge('G', 'H')
  .dfs('A')
  .dfsRecur('A')
  .bfs('A');

graph.display();
