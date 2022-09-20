function compute_z(s, z) {
		var l = 0,
		r = 0;
		var n = s.length;
		for (var i = 1; i <= n - 1; i++) {
		if (i > r) {
			l = i;
			r = i;
			while (r < n && s[r - l] === s[r]) {
			r++;
			}
			z[i] = r - l;
			r--;
		} else {
			var k = i - l;
			if (z[k] < r - i + 1) {
			z[i] = z[k];
			} else {
			l = i;
			while (r < n && s[r - l] === s[r]) {
				r++;
			}
			z[i] = r - l;
			r--;
			}
		}
		}
	}

	// Function to get the count of the
	// cyclic permutations of b that
	// given 0 when XORed with a
	function countPermutation(a, b) {
		// concatenate b with b
		b = b + b;

		// new b now contains all the cyclic
		// permutations of old b as it's sub-strings
		b = b.substring(0, b.length - 1);

		// concatenate pattern with text
		var ans = 0;
		var s = a + "$" + b;
		var n = s.length;

		// Fill z array used in Z algorithm
		var z = new Array(n).fill(0);
		compute_z(s, z);

		for (var i = 1; i <= n - 1; i++) {
		// pattern occurs at index i since
		// z value of i equals pattern length
		if (z[i] === a.length) {
			ans++;
		}
		}
		return ans;
	}