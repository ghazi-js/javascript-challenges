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
}

let list = new SinglyLinkedList;

list.push(1);
list.push(2);



list.pop();
console.log(list);