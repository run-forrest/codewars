export function maxMultiple(divisor: number, bound: number) {
    for (let i = bound; i > 0; i--) {
        if (i % divisor === 0) {
            return i;
        }
    }
}

// math 
export function maxMultiple2(divisor: number, bound: number) {
    return bound - bound % divisor;
}
