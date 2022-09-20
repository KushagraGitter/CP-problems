function tournamentWinner(competitions, results) {
  // Write your code here.
	// create a map to store the points 
	// gets the winner from the top scorer
	let map = new Map();
	for(let  i = 0; i < competitions.length; i++) {
		if(results[i]) {
			const winner = competitions[i][0];
			const looser = competitions[i][1];
			if(map.get(winner)) {
				map.set(winner, map.get(winner) + 3)
			} else {
				map.set(winner, 3)
			}
			if(map.get(looser)) {
				map.set(looser, map.get(looser) + 0)
			} else {
				map.set(looser, 0)
			}
		} else {
			const winner = competitions[i][1];
			const looser = competitions[i][0];
			if(map.get(winner)) {
				map.set(winner, map.get(winner) + 3)
			} else {
				map.set(winner, 3)
			}
            if(map.get(looser)) {
				map.set(looser, map.get(looser) + 0)
			} else {
				map.set(looser, 0)
			}
			
		}
	}
return Array.from(map.entries()).sort((a, b) => b[1] - a[1])[0][0];
}