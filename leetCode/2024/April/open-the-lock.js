/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const pow10 = [1, 10, 100, 1000];
    const visit = new Array(10000).fill(0); // 0: not visited, 1: visited through forward direction, -1: visited through backward direction, 2: deadends
    deadends.forEach(dead => {
        visit[parseInt(dead)] = 2;
    });
    const src = 0, dest = parseInt(target);
    let steps = 0, dir = 1;
    if(visit[src] == 2 || visit[dest] == 2) return -1;
    if(src == dest) return 0;
    let forward = [], backward = [];

    forward.push(src);
    visit[src] = 1;
    backward.push(dest);
    visit[dest] = -1;
    while(forward.length > 0 && backward.length > 0) {
        if(forward.length > backward.length) {
            [forward, backward] = [backward, forward];
            dir = -dir;
        }
        steps++;
        const size = forward.length;
        for(let j = 0; j < size; j++) {
            const cur = forward.shift();
            for(let k = 0; k < 4; k++) {
                const p = pow10[k];
                const d = Math.floor(cur / p) % 10;
                for(let i = -1; i <= 1; i += 2) {
                    let z = d + i;
                    z = z === -1 ? 9 : (z === 10 ? 0 : z);
                    const next = cur + (z - d) * p;
                    if(visit[next] == -dir) return steps;
                    if(visit[next] == 0) {
                        forward.push(next);
                        visit[next] = dir;
                    }
                }
            }
        }
    }
    return -1;
};