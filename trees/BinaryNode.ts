export class BinaryNode {
  value: number;
  left: BinaryNode | null;
  right: BinaryNode | null;
  constructor(value: number, left: BinaryNode | null = null, right: BinaryNode | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}