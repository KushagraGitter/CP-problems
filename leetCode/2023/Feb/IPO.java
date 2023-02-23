//https://leetcode.com/problems/ipo/description/
class Solution {
    private class Job {
        int profit;
        int cost;
        
        Job(int p, int c) {
            profit = p;
            cost = c;
        }
    }
    
    public int findMaximizedCapital(int k, int W, int[] Profits, int[] Capital) {
        if (k == 0) {
            return W;
        }
        
        int n = Profits.length;
        List<Job> jobs = new ArrayList<>();
        for (int i = 0; i < Profits.length; ++i) {
            jobs.add(new Job(Profits[i], Capital[i]));
        }
        
        Collections.sort(jobs, new Comparator<Job>() {
            @Override
            public int compare(Job a, Job b) {
                if (a.profit == b.profit) {
                    return Integer.compare(a.cost, b.cost);
                }
                
                return Integer.compare(a.profit, b.profit);
            }
        });
        
        while (k > 0) {
            int temp = k;
            
            for (int i = jobs.size() - 1; i > -1; --i) {
                if (W >= jobs.get(i).cost) {
                    W += jobs.get(i).profit;
                    k--;
                    
                    jobs.remove(i);
                    break;
                }
            }
            
            if (k == temp) break;
        }
        
        return W;
    }
}