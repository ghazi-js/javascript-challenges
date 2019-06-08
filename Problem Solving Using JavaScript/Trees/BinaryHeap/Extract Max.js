class MaxBinaryHeap {
    constructor() {
        this.values = [];
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
        this.bubbleUp(element);
        return this;
    }

    sinkDown() {
        let node    = 0;
        let length  = this.values.length;
        let leftNode, rightNode;
        while (true) {
            let leftNodeIdx     = 2 * node + 1;
            let rightNodeIdx    = leftNodeIdx + 1;
            let element         = this.values[node];
            let swap    = null;

            if (leftNodeIdx < length) {
                leftNode = this.values[leftNodeIdx];
                if (leftNode > element)
                    swap = leftNodeIdx;
            }

            if (rightNodeIdx < length) {
                rightNode = this.values[rightNodeIdx];
                if ((!swap && rightNode > element) || (swap && rightNode > leftNode))
                    swap = rightNodeIdx;
            }

            if (!swap) break;
            [this.values[node], this.values[swap]] = [this.values[swap], this.values[node]];
            node = swap;
        }
    }

    extractMax() {
        // swap the root with the last value and pop
        let idx = this.values.length - 1;
        [this.values[0], this.values[idx]] = [this.values[idx], this.values[0]];
        this.values.pop();
        this.sinkDown();
    }
}

let heap = new MaxBinaryHeap;
heap.extractMax();
console.log(heap.values);