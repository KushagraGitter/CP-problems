//https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/description/
class Solution {
               // If you like it #UP_VOTE for me..

public int maximumBags(int[] capacity, int[] rocks, int additionalRocks) {
    
int []diff=new int[capacity.length];  // it holdes the Diff between max and actual capacity..
    
    for(int i=0;i<diff.length;i++){
        diff[i]=capacity[i]-rocks[i];   // inserting Diff our Diff array according to index.
    }
    
    Arrays.sort(diff);     // sorting the Diff array..
    
     int count=0;
    
    for(int i=0;i<diff.length;i++){
        
        if(diff[i]==0){                 // if our bag is alrady full  no need to insert addtionalROck
            count++;
        }else {
            if(additionalRocks>=diff[i]){ // if space if less then Additional rock then we can put rocks in bag.
                
                additionalRocks=additionalRocks-diff[i]; // reaming Additionals Rock.
                count++;
            }
            
            
        }
        
    }
   
    
    
    
    return count;
    

    /// Update..we can Also Do it in O(1) space..
	/*
	by inserting the Diff in any array either in capacity or rocks..array...
	and else part remains same;;;
	*/
}
}