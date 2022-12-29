//https://leetcode.com/problems/single-threaded-cpu/description/
class Solution {
    
    private List<Task> taskList;
    private PriorityQueue<Task> availTasks = new PriorityQueue<Task>();
    private int currIdx;
    private int len;
    
    public int[] getOrder(int[][] tasks) {
        this.len = tasks.length;

        this.taskList = IntStream.range(0,tasks.length)
            .mapToObj(i -> new Task(tasks[i][0], tasks[i][1], i))
            .sorted(Comparator.comparingInt(Task::getETime))
            .collect(Collectors.toList());
        
        int currTime = taskList.get(0).getETime();
        qTasks(currTime);
        
        var sol = new ArrayList<Integer>();
        
        while (currIdx < len) {
            if (!availTasks.isEmpty()) {
                Task processing = availTasks.poll();    
                sol.add(processing.idx);
                currTime += processing.pTime;
            } else {
                currTime = taskList.get(currIdx).getETime();
            }
            qTasks(currTime);
        }
        
        while (!availTasks.isEmpty()) sol.add(availTasks.poll().getIdx());
        return sol.stream().mapToInt(Integer::intValue).toArray();
    }
    
    private void qTasks(int currTime) {
        while (currIdx < len) {
            var task = taskList.get(currIdx);
            if (currTime >= task.getETime()) {
                availTasks.offer(task);
                currIdx++;
            } else {
                break;
            }
        }
    }
    
    private static class Task implements Comparable<Task> {
        private int eTime, pTime, idx;
        
        private Task(int eTime, int pTime, int idx) {
            this.eTime = eTime;
            this.pTime = pTime;
            this.idx = idx;
        }
        
        public int hashcode() {
            return Objects.hash(eTime, pTime, idx);
        }
        
        public boolean equals(Task other) {
            if (this == other) return true;
            if (other == null) return false;
            if (this.getClass() != other.getClass()) return false;
            
            return this.eTime == other.eTime
                && this.pTime == other.pTime
                && this.idx == other.idx;
        }
        
        @Override
        public int compareTo(Task other) {
            if (this.pTime < other.pTime) return -1;
            else if (this.pTime > other.pTime) return 1;
            
            return this.idx - other.idx;
        }
        
        private int getETime() {
            return this.eTime;
        }
        
        private int getIdx() {
            return this.idx;
        }
    }
}z