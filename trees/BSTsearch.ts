import { BinaryNode } from "./BinaryNode";

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

function search (treeNode: BinaryNode | null, x: number): boolean {
  //console.log('value ', treeNode.value, 'left ', treeNode.left, 'right ', treeNode.right);
  if (treeNode === null) {
    return false;
  }
  if (treeNode.value === x) {
    return true;
  }
  if (treeNode.value > x) {
    return search(treeNode.left, x);
  }
  if (treeNode.value < x) {
    return search(treeNode.right, x);
  }
  throw new Error('error in BinaryNode data');
}

console.log(search(BSToneHead, 56))

// function BSTSearch (BSThead: BinaryNode, needle: number): boolean {

//   console.log(BSThead.value);
//   if (BSThead.value === needle) {
//     console.log('hi')
//     return true;
//   }

//   if (BSThead.value === null) {
//     return false;
//   }
  
//   if (BSThead.value > needle) {
//     if (BSThead.left === null) {
//       //return 'hello';
//       return false;
//     }
//     BSTSearch(BSThead.left, needle);
//   }
//   if (BSThead.value < needle) {
//     if (BSThead.right === null) {
//       //return 'hello';
//       return false;
//     }
//     BSTSearch(BSThead.right, needle);
//   }

  
// }

// console.log(BSTSearch(BSTtwoHead, 8));