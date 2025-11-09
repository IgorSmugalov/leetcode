// Last updated: 09.11.2025, 14:29:36
function countSeniors(details: string[]): number {
    let count = 0
    for(let passanger of details) {
        const num1 = passanger[11]
        const num2 = passanger[12]
        if (Number([num1, num2].join('')) > 60) {
            count ++
        }
    }

    return count
};