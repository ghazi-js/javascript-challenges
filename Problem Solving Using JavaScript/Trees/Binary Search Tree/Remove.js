class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    remove(value) {
        this.root = this._removeInner(value, this.root);
    }

    _removeInner(value, node) {
        if (node) {
            if (value < node.value) {
                node.left = this._removeInner(value, node.left);
            } else if (value > node.value) {
                node.right = this._removeInner(value, node.right);
            } else if (node.left && node.right) {
                node.value = this.findMinValue(node.right);
                node.right = this._removeInner(node.value, node.right);
            } else {
                node = node.left || node.right;
            }
        }
        return node;
    }

    findMinValue(node) {
        return node.left ? this.findMinValue(node.left) : node.value;
    }
}

// let binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);
// binarySearchTree.remove(50);
// let result = binarySearchTree.root.right.value // 20
// let result = binarySearchTree.root.right.right // null

// binarySearchTree.remove(5);
// let result = binarySearchTree.root.left.left.value // 1
// let result = binarySearchTree.root.left.left.right // null
// console.log(result);

// let binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);

// binarySearchTree.remove(1);
// let result = binarySearchTree.root.left.left.value // 5
// let result = binarySearchTree.root.left.left.left // null
// let result = binarySearchTree.root.left.left.right // null

// binarySearchTree.remove(20);
// let result = binarySearchTree.root.right.value // 50
// let result = binarySearchTree.root.right.right // null
// let result = binarySearchTree.root.right.left // null

console.log(result);
// let binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50)
//     .insert(60)
//     .insert(30)
//     .insert(25)
//     .insert(23)
//     .insert(24)
//     .insert(70);
//
// binarySearchTree.remove(10);
// binarySearchTree.root.left.value // 12
// binarySearchTree.root.left.left.value // 1
// binarySearchTree.root.left.left.right.value // 5
//
// binarySearchTree.remove(50);
// binarySearchTree.root.right.value // 20
// binarySearchTree.root.right.right.value // 60
// binarySearchTree.root.right.right.left.value // 30
//
// let binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(22)
//     .insert(49)
//     .insert(85)
//     .insert(66)
//     .insert(95)
//     .insert(90)
//     .insert(100)
//     .insert(88)
//     .insert(93)
//     .insert(89)
//
// binarySearchTree.remove(85);
// binarySearchTree.root.right.right.value // 88
// binarySearchTree.root.right.right.right.left.left.value // 89