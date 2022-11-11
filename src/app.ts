// import AdjacencyMatrixGraph from '@/datastructure/AdjacencyMatrixGraph';

import AdjacencyListGraph from '@/datastructure/AdjacencyListGraph';

// const graph = new AdjacencyMatrixGraph();
// graph.create(6);
// graph.addVertex('찌미');
// graph.addVertex('띵동');
// graph.addVertex('누리');
// graph.addVertex('토리');
// graph.addEdge('찌미', '토리');
// graph.addEdge('누리', '토리');
// graph.addEdge('찌미', '띵동');
// console.log(graph.show());

const graph = new AdjacencyListGraph();

graph
  .addVertex('A')
  .addVertex('B')
  .addVertex('C')
  .addVertex('D')
  .addEdge('A', 'B')
  .addEdge('B', 'D')
  .addEdge('D', 'A')
  .addEdge('C', 'D');

console.log('Graph: ', graph);

graph.removeEdge('C', 'D');

console.log('Graph after remove edges "C" and "D" ', graph);

graph.removeVertex('D');

console.log('Graph after remove vertex "D" ', graph);
