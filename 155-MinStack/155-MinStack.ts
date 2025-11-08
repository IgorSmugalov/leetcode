// Last updated: 08.11.2025, 16:21:02
interface StackItem {
  val: number;
  min: number;
}

class MinStack {
  private stack: StackItem[] = [];
  constructor() {}

  push(val: number): void {
    const prevMin = this.topStackItem()?.min;
    const currentMin = prevMin !== undefined ? Math.min(prevMin, val) : val;
    this.stack.push({ val, min: currentMin });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.topStackItem().val;
  }

  getMin(): number {
    return this.topStackItem().min;
  }

  topStackItem(): StackItem {
    const last = this.stack.length - 1;
    return this.stack[last];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
