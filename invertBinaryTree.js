/*
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9

to

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/


var invertTree = function(root) {
    var holder = root;

    invert(root);

    return holder;
}

    function invert(node){
        if(!node){
            return null;
        }

        if(node.left===null && node.right===null){
            return node;
        }

        var temp = node.left;
        node.left = node.right;
        node.right = temp;

        invert(node.left);
        invert(node.right);
    }
