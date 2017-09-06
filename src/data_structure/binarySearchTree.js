/**
 * 实现二叉树查找
 */

/*

* 任意节点的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
* 任意节点的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
* 任意节点的左、右子树也分别为二叉查找树；
* 没有键值相等的节点。二叉查找树相比于其他数据结构的优势在于查找、插入的时间复杂度较低。为O(log n)。二叉查找树是基础性数据结构，用于构建更为抽象的数据结构，如集合、multiset、关联数组等。
 */

class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}


class BinarySearchTree {
    
}