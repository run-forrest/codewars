export function number(busStops: [number, number][]): number {
    var nums = 0;
    busStops.forEach(element => {
        nums += element[0] - element[1];
    });
    return nums;
}

export function number2(busStops: [number, number][]): number {
    return busStops.reduce((prev, [on, off]) => { return prev + on - off }, 0);

}
