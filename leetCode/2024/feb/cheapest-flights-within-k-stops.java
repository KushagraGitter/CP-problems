class Tuple
{
    int stops;
    int node;
    int dist;
    public Tuple(int s,int node,int dis)
    {
        stops=s;
        this.node=node;
        dist=dis;
    }
}
class Pairs
{
    int stop;
    int distance;
    public Pairs(int s,int d)
    {
        stop=s;
        distance=d;
    }
}
class Solution 
{
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) 
    {
        List<List<Pairs>> adj=new ArrayList<>();

        for(int i=0;i<n;i++)  adj.add(new ArrayList<Pairs>());

        for(int i=0;i<flights.length;i++)
            adj.get(flights[i][0]).add(new Pairs(flights[i][1],flights[i][2]));
        
        //since we use priorityQueue on K, which increaeses by K+1
        //we can use a queue instead of a PQ
        //the least K stays at the top
        //PQ adds extra time complexity
        Queue<Tuple> queue=new LinkedList<>();
        int[] dist=new int[n];
        Tuple start=new Tuple(0,src,0);
        queue.add(start);
        Arrays.fill(dist,Integer.MAX_VALUE);

        while(!queue.isEmpty())
        {
            Tuple top=queue.peek();
            queue.remove();
            int stops=top.stops;
            int node=top.node;
            int distance=top.dist;
            for(Pairs curr : adj.get(node))
            {
                int destination=curr.stop;
                int amount=curr.distance;
                //reaching the destination dosent count as K+1
                if(stops<=k && dist[destination]>distance+amount)
                {
                    dist[destination]=distance+amount;
                    queue.add(new Tuple(stops+1,destination,distance+amount));
                }
            }
        }
        int ans=dist[dst];
        return (ans==Integer.MAX_VALUE) ? -1 : ans;
    }
}