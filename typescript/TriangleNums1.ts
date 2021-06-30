export function TrangleNums(n: number) {
    if (n == 1) return 1;
    // return ((n-1)*(n)+1)*n+(n-1)*n;
    // return n ** 3;
    return Math.pow(n, 3);
}