import { BinaryNode } from "./BinaryNode";

const headA = new BinaryNode(5);
headA.left = new BinaryNode(23);
headA.right = new BinaryNode(7);
headA.left.left = new BinaryNode(103);
headA.left.right = new BinaryNode(2);
headA.right.left = new BinaryNode(89);

const headB = new BinaryNode(5);
headB.left = new BinaryNode(23);
headB.right = new BinaryNode(7);
headB.left.left = new BinaryNode(103);
headB.left.right = new BinaryNode(2);
headB.right.left = new BinaryNode(89);

const headC = new BinaryNode(5);
headC.left = new BinaryNode(23);
headC.right = new BinaryNode(7);
headC.left.left = new BinaryNode(103);
headC.left.right = new BinaryNode(2);
headC.right.right = new BinaryNode(9);

function compareTrees(a: BinaryNode | null, b: BinaryNode | null): boolean {
  if (a === null && b === null) {
    return true;
  }
  if (a === null || b === null) {
    return false;
  }
  if (a.value !== b.value) {
    return false;
  }
  return compareTrees(a.left, b.left) && compareTrees(a.right, b.right);
}

console.log(compareTrees(headA, headC));