// Last updated: 08.11.2025, 16:19:51
interface StoredItem {
  value: number;
  timeOut: ReturnType<typeof setTimeout>;
}

class TimeLimitedCache {
  store: Map<number, StoredItem> = new Map();
  constructor() {}

  set(key: number, value: number, duration: number): boolean {
    const existingKey = this.store.get(key);
    if (existingKey) clearTimeout(existingKey.timeOut);
    this.store.set(key, {
      value,
      timeOut: setTimeout(() => this.store.delete(key), duration),
    });
    return existingKey ? true : false;
  }

  get(key: number): number {
    const existingKey = this.store.get(key);
    return existingKey ? existingKey.value : -1;
  }

  count(): number {
    return this.store.size;
  }
}