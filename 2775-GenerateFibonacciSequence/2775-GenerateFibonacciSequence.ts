// Last updated: 08.11.2025, 16:19:48
function* fibGenerator(): Generator<number, any, number> {
    let n1 = 0
    let n2 = 1
    yield n1
    yield n2
    while (true) {
      [n1, n2] = [n2, n1 + n2];
      yield n2
    }
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */