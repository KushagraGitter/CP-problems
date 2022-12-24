//https://leetcode.com/problems/domino-and-tromino-tiling/description/
public class Solution {
    public int solve(int[] A) {
       
    int n = A.length; int largest = 0;
    int sec = 0;
   
    for(int i=0; i<n; i++){
        if(A[i]>largest){
            sec=largest;
            largest = A[i];
        }
        if(A[i]>sec && A[i]<largest)
        {
            sec=A[i];
        }

    }
      return sec % largest;      
        }
}
