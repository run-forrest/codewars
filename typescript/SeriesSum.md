export function SeriesSum(n:number):string
{
  let sum: number = 0;
  for(var i =1;i<=n;i++){
    sum = sum+1/(i*3-2);
  }
  return sum.toFixed(2).toString();
}
