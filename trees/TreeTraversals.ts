class BinaryNode {
  value: number;
  left: BinaryNode | null;
  right: BinaryNode | null;
  constructor(value: number, left: BinaryNode | null = null, right: BinaryNode | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

                                                      const head = new BinaryNode(7);
                            head.left = new BinaryNode(5);                               head.right = new BinaryNode(12);
head.left.left = new BinaryNode(23);   head.left.right = new BinaryNode(3);      head.right.left = new BinaryNode(14);    head.right.right = new BinaryNode(2);

function preOrderTraversal(curr: BinaryNode | null, path: number[] = []) {
   if (!curr) {
    return path;
   }
   path.push(curr.value);
   preOrderTraversal(curr.left, path);
   preOrderTraversal(curr.right, path);
  return path;
}

//console.log(preOrderTraversal(head));

function bfs(headOfTree: BinaryNode, needle: number) {
  const q = [headOfTree];

  while (q.length) {
     
    const next = q.shift();
    if (next === undefined) {
      break;
    }

    console.log(next.value);
    if (next.value === needle) {
      return true;
    }

    if(next.left) {
      q.push(next.left);
    }
    if(next.right) {
      q.push(next.right);
    }
  }
  return false;
}

console.log(bfs(head, 66));

