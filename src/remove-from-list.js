const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, k) {
  if (!list.value) return;

  let current = list;
  let prevList = current;
  let count = 0;
  while (current) {
    if (k === current.value) {
      count++;
      if (!current.next) {
        prevList.next = null;
        list.next = prevList;
        current = prevList;

        return list;
      }
      current.value = current.next.value;
      current.next = current.next.next;
    }
    prevList = current;
    current = current.next;
  }

  if (count > 0) {
    removeKFromList(list, k);
    count--;
  }
  return list;
}

module.exports = {
  removeKFromList,
};
