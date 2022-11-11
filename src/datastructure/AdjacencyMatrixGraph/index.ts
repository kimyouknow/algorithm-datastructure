export default class AdjacencyMatrixGraph {
  nodes: Array<Array<number>>;
  size: number;
  vertexMap: Array<string | null>;
  constructor() {
    this.nodes;
    this.size;
    this.vertexMap;
  }
  show() {
    return this.nodes;
  }
  create(size: number) {
    this.nodes = Array.from(Array(size), () => Array(size).fill(0));
    this.vertexMap = Array(size).fill(null);
    this.size = 0;
  }
  findVertextIdx(vertex: string) {
    return this.vertexMap.findIndex((e) => e === vertex);
  }
  addVertex(vertex: string) {
    if (this.size > this.vertexMap.length - 1) {
      console.log('선언한 graph의 크기를 초과했습니다. ');
      return;
    }
    const existed = this.vertexMap.find((e) => e === vertex);
    if (existed !== undefined) {
      console.log('중복되는 vertex는 추가할 수 없습니다.');
      return;
    }
    this.vertexMap[this.size] = vertex;
    this.size++;
  }
  addEdge(vertex1: string, vertex2: string) {
    const vertex1Idx = this.findVertextIdx(vertex1);
    const vertex2Idx = this.findVertextIdx(vertex2);
    if (vertex1Idx === -1 || vertex2Idx === -1) {
      console.log('입력한 정점이 없습니다.');
      return;
    }
    this.nodes[vertex1Idx][vertex2Idx] = 1;
    this.nodes[vertex2Idx][vertex1Idx] = 1;
  }
  removeVertext(vertex: string) {
    const targetVertexIdx = this.findVertextIdx(vertex);
    if (this.size === 0) {
      console.log('그래프에 지울 정점이 없습니다.');
      return;
    }
    if (targetVertexIdx === -1) {
      console.log('입력한 vertex가 없습니다.');
      return;
    }
    this.vertexMap[targetVertexIdx] = null;
    this.nodes.forEach((node) => (node[targetVertexIdx] = 0));
    this.nodes[targetVertexIdx] = this.nodes[targetVertexIdx].map((node) => 0);
    this.size--;
  }
  removeEdge(vertex1: string, vertex2: string) {
    const vertex1Idx = this.findVertextIdx(vertex1);
    const vertex2Idx = this.findVertextIdx(vertex2);
    if (vertex1Idx === -1 || vertex2Idx === -1) {
      console.log('입력한 정점이 없습니다.');
      return;
    }
    this.nodes[vertex1Idx][vertex2Idx] = 0;
    this.nodes[vertex2Idx][vertex1Idx] = 0;
  }
}
