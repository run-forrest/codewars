export class G964 {

    public static mxdiflg = (a1: string[], a2: string[]) => {
        if (!a1.length || !a2.length) return -1;
        const x = Math.max(...a1.map(v => v.length)) - Math.min(...a2.map(v => v.length));
        const y = Math.max(...a2.map(v => v.length)) - Math.min(...a1.map(v => v.length));
        return x > y ? x : y;
    }
}