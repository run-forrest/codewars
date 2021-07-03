export function findOutlier(integers: number[]): number {
    if (integers.slice(0, 3).filter((i) => {
        return i % 2 === 0
     }).length > 1) {
         return integers.find((i) => i % 2 !== 0) || 0;
     } else {
         return integers.find((i) => i % 2 === 0) || 0;
     }
}
