/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.capacity = capacity
  this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */

let ListNode = function(key, val) {
  this.prev = null
  this.next = null
  this.val = val
  this.key = key
  this.frequency = 0
}

LFUCache.prototype.get = function(key) {
  let node = this.map.get(key)
  if (node) {
    node.frequency++
    while (node.frequency >= node.prev.frequency) {
      moveUp(node)
    }
    return node
  }
  else return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, val) {
  let node = this.map.get(key)
  if (!node) {
    node = new ListNode(key, val)
    this.addToTail(node)
  } else {
    node.val = val
  }
  this.map.set(key, node)
  if (this.map.size > this.capacity) this.deleteLast()
};

LFUCache.prototype.moveUp = function(node) {
  let node1 = node
  let node2 = node.prev

  node1.next = node2.next
  node2.next = node1
  node2.prev = node1.prev
  node1.prev = node2
}

LFUCache.prototype.deleteLast = function (node) {
  let newLast = this.tail.prev
  let formerLast = this.tail
  newLast.next = null
  this.tail = newLast
  this.map.delete(formerLast.key)
}

LFUCache.prototype.addToTail = function (node) {
  if (!this.tail) this.tail = node
  else {
    this.tail.next = node
    node.prev = this.tail
    this.tail = node
  }

  if (node.prev) {
    while (node.val >= node.prev.val) {
      this.moveUp(node)
    } 
  }
}

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = Object.create(LFUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 *
 **/

cache = new LFUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.get(3);       // returns 3.
cache.put(4, 4);    // evicts key 1.
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4/
