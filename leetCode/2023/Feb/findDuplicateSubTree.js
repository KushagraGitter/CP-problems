/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//updated comment
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    // val => nodes of val
    const map = new Map()
    !function traverse(root) {
        if (!root)  return 0
        
        const val = root.val
        if (!map.has(val))  map.set(val, [])
        
        const queue = map.get(val)
        queue.push(root)
        
        const leftHeight = traverse(root.left)
        const rightHeight = traverse(root.right)
        const height = 1 + Math.max(leftHeight, rightHeight)
        root.height = height
        return height
    }(root)
    
    
    function areSame(rootA, rootB) {
        if (!rootA && !rootB)   return true
        
        if (rootA && rootB) {
            const heightA = rootA.height
            const heightB = rootB.height
            if (heightA !== heightB) {
                return false
            }
        
            const valA = rootA.val
            const valB = rootB.val
            if (valA !== valB)  return false
            
            let subresultLeft = areSame(rootA.left, rootB.left)
            if (!subresultLeft) return false
            
            let subresultRight = areSame(rootA.right, rootB.right)
            if (!subresultRight)    return false
            
            
            return true
        }
        
        
        return false
    }
    
    
    let done = new Set()
    let result = new Set()
    eachQueue:
    for (const queue of map.values()) {
        const len = queue.length
        
        eachA:
        for (let i = 0; i < len; i++) {
            const nodeA = queue[i]
            if (done.has(nodeA)) 
                continue eachA
            
            eachB:
            for (let j = i + 1; j < len; j++) {
                const nodeB = queue[j]
                if (done.has(nodeB))
                    continue eachB
                
                if (areSame(nodeA, nodeB)) {
                    result.add(nodeA)
                    done.add(nodeA)
                    done.add(nodeB)
                }
            }
        }
    }
    
    
    result = [...result]
    return result
};