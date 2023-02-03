//https://leetcode.com/problems/zigzag-conversion/description/
class Solution {
   public String convert(String s, int numRows) {
    StringBuilder sb = new StringBuilder();
    int interval = (numRows + numRows - 2) == 0 ? 1 : (numRows + numRows - 2);

    // append each row
    for (int r = 0; r < numRows; r++) {
        // append each character of each row
        for (int i = r; i < s.length(); i += interval) {
            
            
            sb.append(s.charAt(i));   
            
            if (r != 0 && r != numRows - 1 && i + interval - r * 2 < s.length()) {
                sb.append(s.charAt(i + interval -r * 2));   
            }
        }
    }
    
    return sb.toString();
    
}
}