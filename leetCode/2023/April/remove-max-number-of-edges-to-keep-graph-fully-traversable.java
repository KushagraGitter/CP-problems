//https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/description/
class Solution {
    public int maxNumEdgesToRemove(int n, int[][] edges) {
        int[] componentsAlice=new int[n+1];
        int[] componentsBob=new int[n+1];
        // to make union find tree balance, avoid the worst case where the tree is a single linked list 
        int[] sizeAlice=new int[n+1];
        int[] sizeBob=new int[n+1];
        int numsAlice=n,numsBob=n;
        int cycleAlice=0,cycleBob=0,commonCycle=0;
        // initialize union find related variables 
        for(int i=1;i<=n;i++)
        {    
            componentsAlice[i]=i;
            componentsBob[i]=i;
            sizeAlice[i]=1;
            sizeBob[i]=1;
        }
        // this step is very important!!!. we need to firstly check edges that can be traversed by Alice and Bob. 
        // we use common edges to connect all nodes, then we use type 1/2 to connect nodes for Alice/Bob. So all edges that cause cycles in union find can be removed. 
        Arrays.sort(edges,(a,b)->(b[0]-a[0]));
        for(int[] edge:edges){
            if(edge[0]==3){
                boolean resAlice=union(edge[1],edge[2],componentsAlice,sizeAlice);
                boolean resBob=union(edge[1],edge[2],componentsBob,sizeBob);
                if(resAlice&&resBob) commonCycle++;
                else {
                    if(resAlice) cycleAlice++;
                    else numsAlice--;
                    if(resBob) cycleBob++;
                    else numsBob--;
                } 
            } else if(edge[0]==2){
                if(union(edge[1],edge[2],componentsBob,sizeBob))
                    cycleBob++;
                else numsBob--;
            } else {
                if(union(edge[1],edge[2],componentsAlice,sizeAlice))
                    cycleAlice++;
                else numsAlice--;
            }
        }
        if(numsAlice>1||numsBob>1) return -1;
        return cycleAlice+cycleBob+commonCycle;
    }
    
    int findParent(int n,int[] components){
        while(components[n]!=n){
            // compress path
            n=components[components[n]];
        }
        return n;
    }
    
    boolean union(int a,int b,int[] components,int[] size){
        int parentA=findParent(a,components);
        int parentB=findParent(b,components);
        // node a is already connected with node b. so this edge is redundant. 
        if(parentA==parentB) return true;
        // use size to determine which node can be parent 
        if(size[parentA]>size[parentB]){
            components[parentB]=parentA;
            size[parentA]+=size[parentB];
        } else{
            components[parentA]=parentB;
            size[parentB]+=size[parentA];
        }
        return false;
    }
}