export function removeDuplicateWords(s: string): string {
    return s.split(" ")
        .filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        }
        ).join(" ");
}