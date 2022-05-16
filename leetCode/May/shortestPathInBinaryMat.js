//https://leetcode.com/problems/shortest-path-in-binary-matrix/submissions/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
	if(grid[0][0] === 1) return -1
	
	let result = 0
	let path = 1
	
	const rows = grid.length
	const cols = grid[0].length
	
	const q = [[0,0]]

	while(q.length){
		let len = q.length
		while(len--){
			const [r,c] = q.shift()

			if(r === rows-1 && c === cols-1) return path

			dfs(r,c+1)
			dfs(r,c-1)
			dfs(r+1,c)
			dfs(r-1,c)
			dfs(r+1,c+1)
			dfs(r-1,c-1)
			dfs(r+1,c-1)
			dfs(r-1,c+1)
		}
		path++
	}

	function dfs(r,c){
		if(c < 0 || c >= cols || r < 0 || r >= rows || grid[r][c] === 1) return

		grid[r][c] = 1

		q.push([r,c])
	}

	return -1
};