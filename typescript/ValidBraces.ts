export function validBraces(braces: string): boolean {
    const stack: string[] = [];
    const start = ['(', '[', '{'];
    const end = [')', ']', '}'];

    for (let index = 0; index < braces.length; index++) {
        const char = braces[index];

        if (start.indexOf(char) > -1) {
            stack.push(char);
            continue;
        }

        if (stack.pop() === start[end.indexOf(char)]) {
            continue;
        }

        return false;
    }

    return stack.length === 0;
}