export class G964 {

    public static digPow = (n: number, p: number) => {
        let t = p;
        let sum = 0;
        let str = n.toString();
        const arrays = str.split('');
        for (let i = 0; i < arrays.length; i++) {
            sum += Math.pow(parseInt(arrays[i]), t);
            t++;
        }
        if (sum % n == 0) {
            return sum / n;
        } else {
            return -1;
        }
    }

    // 更美观的api
    public static digPow2 = (n, p) => {
        let x = n.toString().split("").map(n => parseInt(n)).reduce((s, d, i) => s + Math.pow(d, p + i), 0);
        return x % n ? -1 : x / n;
    }
}