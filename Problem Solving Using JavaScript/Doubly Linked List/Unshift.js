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

list.unshift(1).unshift(2).unshift(3);

list.print();
// list.print();
console.log(list);