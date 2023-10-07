//https://leetcode.com/problems/find-the-difference/description/?envType=daily-question&envId=2023-09-25
class Solution {
    public char findTheDifference(String s, String t) {
        char c = 0;
        for(char cs : s.toCharArray()) c ^= cs;
        for(char ct : t.toCharArray()) c ^= ct;
        return c;
    }
}