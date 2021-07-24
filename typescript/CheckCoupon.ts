export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
    if (enteredCode === correctCode && currentDate === expirationDate) {
        return true;
    } else {
        return false;
    }
}
