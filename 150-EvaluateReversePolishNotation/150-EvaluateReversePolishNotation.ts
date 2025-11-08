// Last updated: 08.11.2025, 16:21:03


function evalRPN(tokens: string[]): number {
    const operations = {
        '+': (a: number, b: number) => a + b,
        '-': (a: number, b: number) => a - b,
        '*': (a: number, b: number) => a * b,
        '/': (a: number, b: number) => a / b | 0,
    }

    const stack = []
    let i = 0
    while (i < tokens.length) {
        if (Number.isInteger(Number(tokens[i]))) {
            stack.push(Number(tokens[i]))
        } else {
            const a = stack.pop()
            const b = stack.pop()
            stack.push(operations[tokens[i]](b, a))
        }
        i++
    }
    return stack[0]
};