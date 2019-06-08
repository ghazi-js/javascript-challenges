class Node {
    constructor(val) {
        this.next = null;
        this.val = val;
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
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.length) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (!this.length)
            this.tail = null;
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(i) {
        if (i < 0 || i >= this.length) return null;
        let p = this.head;
        for (let j = 0; j < i; j++) {
            p = p.next;
        }
        return p;
    }

    set(val, i) {
        let foundNode = this.get(i);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return true;
    }
    insert(i, val) {
        if (i < 0 || i > this.length) return false;
        if (i === 0) return !!this.unshift(val);
        if (i === this.length) return !!this.push(val);

        let node = this.get(i - 1);
        if (!node) return undefined;
        let newNode = new Node(val);
        newNode.next = node.next;
        node.next = newNode;
        this.length++;
        return true;
    }
    remove(i) {
        if (i < 0 || i >= this.length) return undefined;
        if (i === 0) return this.shift(i);
        if (i === this.length - 1) return this.pop();

        let prev = this.get(i-1);
        let current = prev.next;
        prev.next = current.next;
        current.next = null;
        this.length--;
        return current;
    }
    reverse() {
        let node = this.head;
        let next;
        let prev = null;

        // swap the head with tail
        this.head = this.tail;
        this.tail = node;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print() {
        let arr = [];
        let p = this.head;
        for (let i = 0; i < this.length; i++) {
            arr.push(p.val);
            p = p.next;
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList;
list.push(5);
list.push(10);
list.push(15);
list.push(20);
console.log(list.get(0).val);
console.log(list.get(1).val);
console.log(list.get(2).val);
console.log(list.get(3).val);
console.log(list.get(4));