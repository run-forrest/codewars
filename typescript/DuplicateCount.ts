export function duplicateCount(text: string): number {
    let result = 0;
    let soltingObject: { [key: string]: number } = {};
    text.toLowerCase().split('').map(str => {
        if (!soltingObject.hasOwnProperty(str)) {
            soltingObject[str] = 0;
        } else {
            if (soltingObject[str] === 0) {
                result += 1;
            }
            soltingObject[str] = soltingObject[str] + 1;
        }
    });
    return result;
}