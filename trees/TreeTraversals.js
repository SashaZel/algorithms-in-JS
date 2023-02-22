class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

                                                      const head = new Node(7);
                            head.left = new Node(5);                               head.right = new Node(12);
head.left.left = new Node(23);   head.left.right = new Node(3);      head.right.left = new Node(14);    head.right.right = new Node(2);

function preOrderTraversal(curr, path=[]) {
   if (!curr) {
    return path;
   }
   path.push(curr.value);
   preOrderTraversal(curr.left, path);
   preOrderTraversal(curr.right, path);
  return path;
}

//console.log(preOrderTraversal(head));

function bfs(headOfTree, needle) {
  const q = [headOfTree];

  while (q.length) {
     
    const next = q.shift();

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

console.log(bfs(head, 77));

