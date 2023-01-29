//https://leetcode.com/problems/lfu-cache/description/
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

public class LFUCache {

    private static final int NO_SUCH_KEY = -1;
    private final int capacity;
    private final Map<Integer, Integer> keyToValue;
    private final Map<Integer, Integer> keyToFrequency;
    private final Map<Integer, LinkedList<Integer>> frequencyToKey;

    public LFUCache(int capacity) {
        this.capacity = capacity;
        keyToValue = new HashMap<>();
        keyToFrequency = new HashMap<>();
        frequencyToKey = new HashMap<>();
    }

    public int get(int key) {
        if (!keyToValue.containsKey(key)) {
            return NO_SUCH_KEY;
        }

        int previousFrequency = keyToFrequency.get(key);
        keyToFrequency.put(key, previousFrequency + 1);
        updateMapFrequencyToKey(previousFrequency, key);

        return keyToValue.get(key);
    }

    public void put(int key, int value) {
        if (capacity == 0) {
            return;
        }

        if (keyToValue.size() == capacity && !keyToValue.containsKey(key)) {
            int leastFrequentlyUsed = Integer.MAX_VALUE;
            for (int frequency : frequencyToKey.keySet()) {
                leastFrequentlyUsed = Math.min(leastFrequentlyUsed, frequency);
            }
            removeLeastRecentlyUsedFromLeastFrequentlyUsed(leastFrequentlyUsed);
        }

        int previousFrequency = keyToFrequency.getOrDefault(key, 0);
        keyToValue.put(key, value);
        keyToFrequency.put(key, previousFrequency + 1);
        updateMapFrequencyToKey(previousFrequency, key);
    }

    private void updateMapFrequencyToKey(int previousFrequency, int key) {
        frequencyToKey.putIfAbsent(previousFrequency + 1, new LinkedList<>());
        frequencyToKey.get(previousFrequency + 1).add(key);

        if (frequencyToKey.containsKey(previousFrequency)) {
            frequencyToKey.get(previousFrequency).remove(Integer.valueOf(key));
            if (frequencyToKey.get(previousFrequency).isEmpty()) {
                frequencyToKey.remove(previousFrequency);
            }
        }
    }

    private void removeLeastRecentlyUsedFromLeastFrequentlyUsed(int leastFrequentlyUsed) {
        int keyToRemove = frequencyToKey.get(leastFrequentlyUsed).removeFirst();
        keyToValue.remove(keyToRemove);
        keyToFrequency.remove(keyToRemove);

        if (frequencyToKey.get(leastFrequentlyUsed).isEmpty()) {
            frequencyToKey.remove(leastFrequentlyUsed);
        }
    }
}