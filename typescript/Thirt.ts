// A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, 
//usually by examining its digits."

//When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

export function thirt(n: number): number {
    let remainders: number[] = [1, 10, 9, 12, 3, 4];
    let result = n.toString().split('').reverse().map( (c,i) => parseInt(c)*remainders[i%6]).reduce( (p,c) => p += c);
    return n == result ? result : thirt(result)
  }