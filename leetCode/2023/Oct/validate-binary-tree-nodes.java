class Solution {
    public boolean validatedfs(int curr, int[] left, int [] right, boolean [] vis,int [] nodesVisited){
        if(curr==-1)return true; 
        if(vis[curr]) return false; // cycle present 
        vis[curr]=true;
        nodesVisited[0]++;  // counting the nodes in tree
        return validatedfs(left[curr], left, right, vis,nodesVisited) && validatedfs(right[curr], left, right, vis,nodesVisited);
    }
    public boolean validateBinaryTreeNodes(int n, int[] left, int[] right) {
    
        // find indegree of each node
        int indegree[]= new int [n];
        for(int i=0; i<n; i++){
            if(left[i]!=-1){
                indegree[left[i]]++;
                if(indegree[left[i]]>1)return false; // more than one parent 
            }
            if(right[i]!=-1){
                indegree[right[i]]++;
                if(indegree[right[i]]>1)return false;// more than one parent
            }
        }
        // find the root
        int root=-1;
        for(int i=0; i<n; i++){
            if(indegree[i]==0){    // it is root
                if(root==-1)root=i; 
                else return false; // multiple roots
            }
        }
        if(root==-1) return false; // root not present 

        // check for cycle and check all nodes are in one single tree
        boolean [] visited= new boolean[n];  //for checking cycles
        int [] nodesVisited={0};  // for counting nodes

        return validatedfs(root, left, right, visited,nodesVisited) && nodesVisited[0]==n;
    }
}