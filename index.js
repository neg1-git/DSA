class MinStack {
    constructor() {
        this.minStack = [];
        this.min = [];
    }

    push(val) {
        this.minStack.push(val);
        // If min stack is empty OR the new value is a new/duplicate minimum
        if (this.min.length === 0 || val <= this.min[this.min.length - 1]) {
            this.min.push(val);
        }
    }

    pop() {
        const poppedValue = this.minStack.pop();
        // If the value we just removed was our current minimum, remove it from history
        if (this.min.length > 0 && poppedValue === this.min[this.min.length - 1]) {
            this.min.pop();
        }
    }

    top() {
        return this.minStack[this.minStack.length - 1];
    }

    getMin() {
        return this.min[this.min.length - 1];
    }
}