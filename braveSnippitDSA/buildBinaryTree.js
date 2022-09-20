function TreeNode(data) {
    this.data = data
    this.left = null
    this.right = null
}
function buildTree(A, B) {
    let hm = new Map();

    for (let i = 0; i < A.length; i++) {
        hm.set(A[i], i);
    }

    function construct(A, B, iSt, iEnd, pSt, pEnd) {

        if (pSt > pEnd) {
            return null;
        }

        const root = new TreeNode(B[pEnd]);
        const idx = hm.get(root.data);

        root.left = construct(A, B, iSt, idx - 1, pSt, pSt + idx - iSt - 1);
        root.right = construct(A, B, idx + 1, iEnd, pEnd - (iEnd - idx), pEnd - 1);

        return root;

    }

    return construct(A, B, 0, A.length - 1, 0, B.length - 1);
}
