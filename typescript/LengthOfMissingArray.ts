export function getLengthOfMissingArray(arrayOfArrays:any[]):number {
    const arraysLengths: Array<number> = arrayOfArrays.map(arr => arr.length).sort((a, b) => a-b);
    return arraysLengths.length && arraysLengths.indexOf(0) < 0 ? isConsecutive(arraysLengths, 0): 0;
  }
  
  function isConsecutive(arraysLengths: Array<number>, n: number): number {
    return (arraysLengths[n+1] - arraysLengths[n] == 1) ? isConsecutive(arraysLengths, n+1) : arraysLengths[n] + 1;
  }