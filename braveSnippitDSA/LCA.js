	function lca(A, B, C){
        let pathB = [];
        let pathC = [];
        let LCA;
        function path(root, node, arr) {
            if(root === null) return false;
            if(root.data === node) {
                arr.push(root);
                return true;
            }
            if(path(root.left, node, arr) || path(root.right, node, arr)) {
                arr.push(root);
                return true
            } else {
                return false;
            }
        }
        path(A, B, pathB);
        path(A, C, pathC);

        pathB = pathB.reverse();
        pathC = pathC.reverse();

        for(let i = 0; i < pathB.length; i++) {
            if(pathB[i] !== pathC[i]) {
                LCA = pathC[i-1];
                return LCA.data;
            }
        }

        return pathB[0].data;
	}