//https://leetcode.com/problems/sum-of-distances-in-tree/description/
// Preword
// Well, another long solution.
// what I am always trying is to:

// let you understand my solution (with my poor explanation)
// prevent from reading my codes
// Intuition
// What if given a tree, with a certain root 0?
// In O(N) we can find sum of distances in tree from root and all other nodes.
// Now for all N nodes?
// Of course, we can do it N times and solve it in O(N^2).
// C++ and Java may get accepted luckily, but it's not what we want.

// When we move our root from one node to its connected node,
// one part of nodes get closer, one the other part get further.

// If we know exactly how many nodes in both parts, we can solve this problem.

// With one single traversal in tree, we should get enough information for it and
// don't need to do it again and again.


// Explanation
// Let's solve it with node 0 as root.

// Initial an array of hashset tree, tree[i] contains all connected nodes to i.
// Initial an array count, count[i] counts all nodes in the subtree i.
// Initial an array of res, res[i] counts sum of distance in subtree i.

// Post order dfs traversal, update count and res:
// count[root] = sum(count[i]) + 1
// res[root] = sum(res[i]) + sum(count[i])

// Pre order dfs traversal, update res:
// When we move our root from parent to its child i, count[i] points get 1 closer to root, n - count[i] nodes get 1 futhur to root.
// res[i] = res[root] - count[i] + N - count[i]

// return res, done.

class Solution {
    int[] res, count;
    ArrayList<HashSet<Integer>> tree;
    public int[] sumOfDistancesInTree(int N, int[][] edges) {
        tree = new ArrayList<HashSet<Integer>>();
        res = new int[N];
        count = new int[N];
        for (int i = 0; i < N ; ++i)
            tree.add(new HashSet<Integer>());
        for (int[] e : edges) {
            tree.get(e[0]).add(e[1]);
            tree.get(e[1]).add(e[0]);
        }
        dfs(0, -1);
        dfs2(0, -1);
        return res;
    }

    public void dfs(int root, int pre) {
        for (int i : tree.get(root)) {
            if (i == pre) continue;
            dfs(i, root);
            count[root] += count[i];
            res[root] += res[i] + count[i];
        }
        count[root]++;
    }


    public void dfs2(int root, int pre) {
        for (int i : tree.get(root)) {
            if (i == pre) continue;
            res[i] = res[root] - count[i] + count.length - count[i];
            dfs2(i, root);
        }
    }
}