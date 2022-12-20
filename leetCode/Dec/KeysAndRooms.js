//https://leetcode.com/problems/keys-and-rooms/description/
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = new Array(rooms.length).fill(false)
    const numberOfRooms = rooms.length - 1;
    let adjMat = new Map();

    for(let i = 0; i < rooms.length; i++) {
            adjMat.set(i, rooms[i])
    }

    function dfs(room) {

       

        if(visited[room]) {
            return
        }

         visited[room] = true;

        for(let i = 0; i < adjMat.get(room).length; i++) {
            const val = adjMat.get(room)[i];
            dfs(val)
        }
    }

    dfs(0)   

    return visited.filter(data => data === false).length > 0 ? false : true
};