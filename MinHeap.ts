/**
 * Min Heap implementation
 */

export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) {
            return -1;
        }
        // take head, get value out
        const out = this.data[0];
        this.length--;
        if (this.length === 0 ) {
            this.data = [];
            return out;
        }
        // swap with the last el in array
        this.data[0] = this.data[this.length];
        // then bubble down
        this.heapifyDown(0);
        return out;
    }
        

    // heapify up
    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const p = this.parent(idx);
        const parentV = this.data[p];
        const v = this.data[idx];
        
        if (parentV > v) {
            this.data[idx] = parentV;
            this.data[p] = v;
            this.heapifyUp(p);
        }
    }
    
    // heapify down
    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx  = this.rightChild(idx);
        
        if (idx >= this.length || lIdx >= this.length) {
            return;
        }

        const lValue = this.data[lIdx];
        const rValue = this.data[rIdx];
        const v = this.data[idx];
        
        if (lValue > rValue && v > rValue) {
            this.data[idx] = rValue;
            this.data[rIdx] = v;
            this.heapifyDown(rIdx);
        } else if (rValue > lValue && v > lValue) {
            this.data[idx] = lValue;
            this.data[lIdx] = v;
            this.heapifyDown(lIdx);
        }

    }
    
    // parent
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    // left child
    private leftChild(idx: number): number {
        return idx * 2 + 1;
     }
    // right child
    private rightChild(idx: number): number {
        return idx * 2 + 2;
     }   
}