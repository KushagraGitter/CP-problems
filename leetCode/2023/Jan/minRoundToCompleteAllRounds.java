//https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/description/
class Solution {
     public int minimumRounds(int[] tasks) {

        Map<Integer,Integer> freqMap = new HashMap<>();

        for ( int i = 0; i < tasks.length; i++){
            freqMap.put(tasks[i], freqMap.getOrDefault(tasks[i], 0) + 1);
        }

        int minCount = 0;
        for ( Map.Entry<Integer, Integer> entry : freqMap.entrySet()){

            int currentCount = entry.getValue();
            if ( currentCount == 1) return -1;
            int currentMinCount =  currentCount/3;
            currentCount = currentCount % 3;
            if ( currentCount >= 1 ) currentMinCount++;
            minCount += currentMinCount;
        }

        return minCount;
        
    }
}