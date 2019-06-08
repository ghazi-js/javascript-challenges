class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.values[idx] <= this.values[parentIdx]) break;
            [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
            idx = parentIdx;
        }
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
        return this;
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
console.log(heap.values);