let isPalim;

function PalindromRec(st, start, end) {

    if(start > end) {
        isPalim = true;
        return;
    }

    if(st[start] === st[end]) {
        PalindromRec(st, start + 1, end - 1)
    } else {
        isPalim = false;
        return;
    }
    return isPalim;
}
