export function multiplicationTable(size: number): number[][] {
    let arr = new Array(size);
    if (size > 0) {
        for (let i = 1; i <= size; i++) {
            arr[i - 1] = new Array(size);
            for (let j = 1; j <= size; j++) {
                arr[i - 1][j - 1] = i * j;
            }
        }
        return arr;
    } else {
        return [];
    }
}