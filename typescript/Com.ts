
export function comp(a1: number[] | null, a2: number[] | null): boolean {
    if (!(a1 && a2) || a1.length !== a2.length){ 
        return false;
      }
      let res1 = a1.map( n => n **2).sort().join();
      let res2 = a2.sort().join();
       return  res1 === res2;
}