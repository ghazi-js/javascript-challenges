class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined;

        // get the last and last - 1 nodes
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        // pop the last node
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        } else {
            newTail.next = null;
            this.tail = newTail;
        }
        return current;
    }

    shift() {
        if (!this.length) return undefined;
        let oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (!this.length)
            this.tail = null;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList;

list.unshift(3);
list.unshift(2);
list.unshift(1);
console.log(list);