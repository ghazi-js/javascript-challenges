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

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    set(index, val) {
        let node = get(index);
        if (!node) return false;
        node.val = val;
        return true;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return this.unshift(val);

        // So we have at least 2 nodes and we need to insert at the middle
        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let prev = null;
        let next = current;

        for (let i = 0; i < this.length; i++) {
            next = next.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }

    rotate(num) {
        if (!this.length) return undefined;
        if (Math.abs(num) <= this.length || num === 0) {
            let current = this.head;
            for (let i = 0; i < Math.abs(num); i++) {
                if (num > 0) {
                    // shift the head
                    this.head = this.head.next;
                    // push the val
                    this.tail.next = current;
                    this.tail = current;
                } else {
                    // pop the tail
                    let node = this.tail;
                    this.tail = this.get(this.length - 2);

                    // unshift the head
                    node.next = this.head;
                    this.head = node;
                }
                current = current.next;
            }
            this.tail.next = null;
        }
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

let list = new SinglyLinkedList;

list.push(5).push(10).push(15).push(20).push(25);

list.print();
list.rotate(-1);
list.print();

console.log(list);