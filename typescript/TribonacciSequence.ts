export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    let nums: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            nums[i] = a;
            continue;
        }
        if (i === 1) {
            nums[i] = b;
            continue;
        }
        if (i === 2) {
            nums[i] = c;
            continue;
        }
        nums[i] = a + b + c;
        a = b;
        b = c;
        c = nums[i];
    }
    return nums;
}


// 优雅的写法
export const tribonacci = ([a, b, c]: [number, number, number], n: number): number[] => n < 1 ? [] : [a].concat(tribonacci([b, c, a + b + c], n - 1));