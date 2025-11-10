// Last updated: 10.11.2025, 13:51:31
function generate(numRows: number): number[][] {

    const arr: number[][] = [[1]];
    let row = 1;

    while (row < numRows) {
        const upperRow = arr[row - 1];
        const currentRow: number[] = [1]

        for (let i = 0; i + 1 < upperRow.length; i++) {

            const sum = upperRow[i] + upperRow[i + 1];
            currentRow.push(sum)
        }
        currentRow.push(1)
        arr.push(currentRow);
        row++
    }

    return arr
};