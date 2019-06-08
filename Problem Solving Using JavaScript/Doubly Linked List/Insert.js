class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.length) return undefined;
        let shiftedNode = this.head;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;
    }

    unshift(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        if (!this.length)
            this.tail = newNode;
        else
            this.head.prev = newNode;

        this.head = newNode;
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current;
        if (index <= this.length / 2) {
            current = this.head;
            for (let i = 0; i < index; i++)
                current = current.next;

        } else {
            current = this.tail;
            for (let i = this.length - 1; i > index; i--)
                current = current.prev;
        }
        return current;
    }

    set(index, val) {
        let node = this.get(index);
        if (!node) return false;
        node.val = val;
        return true;
    }

    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        if (!removedNode) return undefined;

        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = removedNode.prev = null;
        this.length--;

        return removedNode;
    }

    insert(index, val) {
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let nextNode = this.get(index);
        if (!nextNode) return false;

        let newNode = new Node(val);
        newNode.next = nextNode;
        newNode.prev = nextNode.prev;

        nextNode.prev = newNode;
        newNode.prev.next = newNode;

        this.length++;
        return true;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new DoublyLinkedList;

list.push(5).push(10).push(15).push(20);

console.log(list.insert(4, 22));

// list.print();
list.print();
// console.log(list);