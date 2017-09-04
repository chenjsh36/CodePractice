/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var l1p = l1;
    var l2p = l2;
    var newL = new ListNode(0);
    var headp = newL;
    while(l1p || l2p) {
        if (!l1p) { // l1 不存在 l2 存在
            newL.next = l2p;
            newL = newL.next;
            l2p = l2p.next;
        } else if (!l2p) { // 如果 l2 不存在，l1 存在
            newL.next = l1p;
            newL = newL.next;
            l1p = l1p.next;
            
        } else { // l1 l2 都存在
            if(l1p.val < l2p.val) {
                newL.next = l1p;
                newL = newL.next;
                l1p = l1p.next;
            } else {
                newL.next = l2p;
                newL = newL.next;
                l2p = l2p.next;
            }
        }
    }
    return headp.next;
};

exports.mergeTwoLists = mergeTwoLists;