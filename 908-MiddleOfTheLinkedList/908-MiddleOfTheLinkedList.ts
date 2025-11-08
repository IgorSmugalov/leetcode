// Last updated: 08.11.2025, 16:20:33
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    let fast = head
    let slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow

};