/**
 * 插入排序
 * wiki: https://en.wikipedia.org/wiki/Insertion_sort
 * 简单排序的一种，在处理大数组的效率没有快排、堆排或者合并排序好，插入排序的几个优点：
 * 1、实现简单
 * 2、对于小数据集合的效率高
 * 3、在实践中比其他 O(n2) 算法更高效，如选择排序或者冒泡排序
 * 4、自适应的，对于数据集大部分已经排序好的会很高效，时间复杂度是 O(nk) 即对于数据集里的每个元素距离它排序后的位置都不多于k
 * 5、稳定， 比较相同的元素不会改变相对顺序
 * 6、占位，只需要一个常量作为额外的空间
 * 7、Online: https://en.wikipedia.org/wiki/Online_algorithm
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var insertionSortList = function(head) {
    if (!head) return head; // 没有元素
    if (!head.next) return head; // 一个元素

    var newHead = new ListNode(0); // 由于元素可能插入到首节点之前，所以在首节点前再插入一个元素
    newHead.next = head;
    
    var pre = newHead;
    var cur = head;
    
    while(cur) { // 从头部元素开始遍历
        if (cur.next && cur.next.val < cur.val) { // 如果存在 next 且 next 的值比当前节点小
            while(pre.next && pre.next.val <= cur.next.val) { // 从 pre 开始寻找节点的 next 大于 当前节点的next的val
                pre = pre.next;
            }
            // 将 cur.next 插入到 pre 后
            var tmp = pre.next;
            pre.next = cur.next;
            cur.next = cur.next.next;
            pre.next.next = tmp;
            
            pre = newHead; // 重置 pre 指针
        } else {
            cur = cur.next;
        }
    }
    return newHead.next;
}