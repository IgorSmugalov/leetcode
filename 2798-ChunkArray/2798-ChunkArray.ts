// Last updated: 08.11.2025, 16:19:42
function chunk(arr: any[], size: number): any[][] {
    if (arr.length === 0) {return arr}
    if (arr.length <= size) {return [arr]}
    const res = []
    for (let index = 0; index < arr.length; index+=size) {
        res.push(arr.slice(index, index+size))
    }
    return res
};