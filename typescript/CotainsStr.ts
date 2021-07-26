export class G964 {
    public static inArray(a1: string[], a2: string[]): string[] {
        let result : string[] = [];
        for(let wordA1 in a1){
          for(let wordA2 in a2){
            if (a2[wordA2].indexOf(a1[wordA1]) >= 0 && result.indexOf(a1[wordA1]) < 0) {
              result.push(a1[wordA1]);
            }
          }
        }
        return result.sort();
    }
  }