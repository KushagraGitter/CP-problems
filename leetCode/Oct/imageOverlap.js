//https://leetcode.com/problems/image-overlap/
/**
* @param {number[][]} img1
* @param {number[][]} img2
* @return {number}
*/
var largestOverlap = function(imgA, imgB) {
    const size = imgA.length
    let countA = 0, countB = 0
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            countA += imgA[i][j]
            countB += imgB[i][j]
        }
    }

    // make sure imgA has fewer black points
    if (countA > countB) {
        ;[imgA, imgB, countA, countB] = [imgB, imgA, countB, countA];
    }


    function toKey(point) {
        return point.join('|')
    }

    const setA = new Set()
    const setBKeys = new Set()
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const colorA = imgA[i][j]
            if (colorA) {
                const point = [i, j]
                setA.add(point)
            }

            const colorB = imgB[i][j]
            if (colorB) {
                const point = [i, j]
                const key = toKey(point)
                setBKeys.add(key)
            }
        }
    }


    let result = 0
    for (let deltaI = -size + 1; deltaI < size; deltaI++) {
        for (let deltaJ = -size + 1; deltaJ < size; deltaJ++) {
            let outcome = 0

            for (const pointA of setA.values()) {
                const [iA, jA] = pointA
                const i = (iA + deltaI)
                const j = (jA + deltaJ)
                if (i >= size || i < 0 || j >= size || j < 0) continue

                const key = toKey([i, j])
                if (setBKeys.has(key))  outcome++
            }

            result = Math.max(result, outcome)
        }
    }


    return result
};