//https://leetcode.com/problems/repeated-substring-pattern/description/
public class Solution {
    public boolean repeatedSubstringPattern(String s) {
        return (s + s).substring(1, s.length() * 2 - 1).contains(s);
    }
}