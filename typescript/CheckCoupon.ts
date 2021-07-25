export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
    if (enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);) {
        return true;
    } else {
        return false;
    }
}
