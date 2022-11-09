import { Graph } from '@/datastructure/graph';

const graph = new Graph();
graph.create(6);
graph.addVertex('찌미');
graph.addVertex('띵동');
graph.addVertex('누리');
graph.addVertex('토리');
graph.addEdge('찌미', '토리');
graph.addEdge('누리', '토리');
graph.addEdge('찌미', '띵동');
console.log(graph.show());
