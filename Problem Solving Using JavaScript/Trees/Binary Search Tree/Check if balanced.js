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
        // only accept numbers....watch out since NaN is typeof number!
        if (typeof value === 'number' && !isNaN(value)) {
            // if there is nothing in the tree, start it off with a new node!
            if (this.root === null) {
                this.root = new Node(value);
                return this;
            }
            else {
                // current variable used for traversal, just like linked lists!
                let current = this.root;
                // keep looping till we get to the correct spot;
                while (true) {
                    if (value < current.value) {
                        // if there is nothing on the left
                        if (current.left === null) {
                            // make a new node and get out
                            current.left = new Node(value);
                            return this;
                        }
                        // otherwise, keep moving on!

                        else {
                            current = current.left;
                        }
                    }
                    else if (value > current.value) {
                        // if there is nothing on the right
                        if (current.right === null) {
                            // make a new node and get out
                            current.right = new Node(value);
                            return this;
                        } else {
                            current = current.right;
                        }
                    }
                    // otherwise it must be a duplicate so let's get out of here

                    else {
                        return "duplicate!";
                    }
                }
            }
        }
        else
            return "Please insert a number";
    }

    isBalanced() {
        const isBalancedHelper = (node) => {
            if (!node) return true;

            let leftHeight  = this.height(node.left);
            let rightHeight = this.height(node.right);

            let differenceHeight    = Math.abs(leftHeight - rightHeight) <= 1;
            let isBalancedLeft      = isBalancedHelper(node.left);
            let isBalancedRight     = isBalancedHelper(node.right);

            return differenceHeight && isBalancedLeft && isBalancedRight;
        };

        return isBalancedHelper(this.root);
    }

    height(node) {
        if (!node) return null;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
}

// let binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// let result = binarySearchTree.isBalanced(); // true

var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(5);
// let result = binarySearchTree2.isBalanced(); // true
binarySearchTree2.insert(6);
// let result = binarySearchTree2.isBalanced(); // true
binarySearchTree2.insert(7);
let result = binarySearchTree2.isBalanced(); // false

console.log(result);
