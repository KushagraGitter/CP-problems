//https://leetcode.com/problems/concatenated-words/description/
class Solution {
    public List<String> findAllConcatenatedWordsInADict(String[] words) {
        Set<String> out = new LinkedHashSet<>();
        TrieNode trie = new TrieNode();
        for (String w : words) if (w.length() > 0)                                              addToTrie(trie, w.toCharArray(), 0);
        for (String w : words) if (w.length() > 0 && isConcat(w.toCharArray(), 0, trie, false)) out.add(w);
        return new ArrayList<>(out);
    }

    static boolean isConcat(char[] w, int i, TrieNode trie, boolean isAfterFirst) {
        TrieNode cur = trie;
        for (; i < w.length; i++) {
            if (!cur.next.containsKey(w[i])) return false;
            cur = cur.next.get(w[i]);
            if (cur.isTerminal && isConcat(w, i + 1, trie, true)) return true;
        }
        return isAfterFirst && cur.isTerminal;
    }

    static void addToTrie(TrieNode trie, char[] w, int i) {
        if (!trie.next.containsKey(w[i])) trie.next.put(w[i], new TrieNode());
        TrieNode nextNode = trie.next.get(w[i]);
        if (i + 1 < w.length)             addToTrie(nextNode, w, i + 1);
        else                              nextNode.isTerminal = true;
    }

    static class TrieNode {
        boolean isTerminal;
        Map<Character, TrieNode> next = new HashMap<>();
    }
}