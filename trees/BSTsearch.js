class BinaryNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const BSToneHead = new BinaryNode(12);
BSToneHead.left = new BinaryNode(8);
BSToneHead.left.left = new BinaryNode(5);
BSToneHead.left.right = new BinaryNode(9);
BSToneHead.left.left.left = new BinaryNode(2);
BSToneHead.left.left.right = new BinaryNode(7);
BSToneHead.right = new BinaryNode(51);
BSToneHead.right.left = new BinaryNode(33);
BSToneHead.right.right = new BinaryNode(56);
BSToneHead.right.right.right = new BinaryNode(73);

const BSTtwoHead = new BinaryNode(10);
BSTtwoHead.left = new BinaryNode(7);

function search (treeNode, x) {
  //console.log('value ', treeNode.value, 'left ', treeNode.left, 'right ', treeNode.right);
  //console.log(treeNode.value, x)
  if (!treeNode) {
    return false;
  }
  if (treeNode.value === x) {
    return true;
  }
  if (treeNode.value > x) {
    if (treeNode.left === null) {
      return false;
    }
    return search(treeNode.left, x);
  }
  if (treeNode.value < x) {
    if (treeNode.right === null) {
      return false;
    }
    return search(treeNode.right, x)
  }
}

console.log(search(BSToneHead, 100));