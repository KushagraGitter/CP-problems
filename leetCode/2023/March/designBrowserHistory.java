class Node{
    String val;
    Node next;
    Node prev;
    Node(String s){
        val = s;
        prev=next=null;
    }
}
class BrowserHistory {
    Node root;
    public BrowserHistory(String homepage) {
        root = new Node(homepage);
    }
    
    public void visit(String url) {
        Node node = new Node(url);
        root.next = node;
        node.prev = root;
        root = node;
    }
    
    public String back(int steps) {
        Node cur = root;
        while(steps>0 && cur.prev!=null){
            cur = cur.prev;
            steps--;
        }
        root = cur;
        return cur.val;
    }
    
    public String forward(int steps) {
        Node cur = root;
        while(steps>0 && cur.next!=null){
            cur = cur.next;
            steps--;
        }
        root=cur;
        return cur.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory obj = new BrowserHistory(homepage);
 * obj.visit(url);
 * String param_2 = obj.back(steps);
 * String param_3 = obj.forward(steps);
 */

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory obj = new BrowserHistory(homepage);
 * obj.visit(url);
 * String param_2 = obj.back(steps);
 * String param_3 = obj.forward(steps);
 */