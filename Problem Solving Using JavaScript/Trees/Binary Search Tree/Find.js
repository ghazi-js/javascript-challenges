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
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;

            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
        return this;
    }
    find(val) {
        if (!this.root) return undefined;
        let current = this.root;

        while (current) {
            if (val < current) {
                current = current.left;
            } else if (val > current.value) {
                current = current.right;
            } else {
                return current;
            }
        }
        return undefined;
    }
}

let tree = new BinarySearchTree();
tree.insert(15).insert(20).insert(10).insert(12);

let foundNode = tree.find(20);

console.log(foundNode);