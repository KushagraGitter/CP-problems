//https://leetcode.com/problems/clone-graph/description/
public int findRank(String A) {
	int len = A.length(), mod = 1000003;
	long count = 0, permutationsAfterCur = 1;
	for (int i = len - 1; i >= 0; i–) {
		char curChar = A.charAt(i);
		int rightCharsLessThanCur = 0;
		for (int j = i + 1; j < len; j++) {
			if (curChar > A.charAt(j))
				rightCharsLessThanCur++;
		}
		if (i < len - 1) // excluding (0!) for element at length-1 position
			permutationsAfterCur = (permutationsAfterCur * (len - i - 1)) % mod;
		count = (count + (permutationsAfterCur * rightCharsLessThanCur) % mod) % mod;
	}
	return (int) (count + 1); // (+1) for handling element at length-1 position
}