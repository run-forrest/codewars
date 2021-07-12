// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
export class Challenge {
    static solution(number: number) {
        var sum: number = 0;
        var i: number = 0;
        while (i < number) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
            i++;
        }
        return sum; //change this
    }
}

// api使用
export class Challenge2 {
    static solution(number) {
      if(number <= 0)
        return 0;
      return [...Array(number)]
        .map((_,i) => i)
        .filter((value, index) => index%3 === 0 || index%5 === 0)
        .reduce((a, b) => a + b, 0);
    }
  }