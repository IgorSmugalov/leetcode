// Last updated: 08.11.2025, 16:20:42
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let point = 0
    while (point < flowerbed.length) {
        let prev = flowerbed[point-1] ?? 0
        let next = flowerbed[point+1] ?? 0
        if (flowerbed[point] === 0 && prev === 0 && next === 0) {
            n--
            point +=2
        } else { point++ }
        if (n <= 0) return true
        

    }
    return false
};