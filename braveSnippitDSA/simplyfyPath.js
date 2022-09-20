var simplifyPath = function(path) {
    let stack = [];
    let simplifiedPath = '';
    
    for(let i = 0; i < path.length; i++) {
        
        while(i < path.length && path[i] === '/') {
            i++;
            let dir = '';
        while(i < path.length && path[i] !== '/') {
            dir = dir + path[i];
            i++;
        }
            if(stack.length > 0 && dir === '..') {
                stack.pop();
            } else if(dir === '.') {
                continue;
            } else if(dir.length > 0 && dir !== '..') {
                stack.push(dir);
            }
        }

        if(stack.length === 0) {
            simplifiedPath = '/'
        }        
        while(stack.length > 0) {
            simplifiedPath =  '/'  + stack.pop() + simplifiedPath;
        }
        
       
    }
    
    return simplifiedPath;
};