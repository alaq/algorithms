/**
 * @param {number} capacity
 */

var ListNode = function(key, val) {
    this.prev = null
    this.next = null
    this.val = val
    this.key = key
}

var LRUCache = function(capacity) {
    this.capacity = capacity
    this.size = 0
    this.map = new Map()

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.map.get(key)
    if(node) {
        this.moveToFront(node)
        return node.val
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.map.get(key)
    if (!node) {
        node = new ListNode(key, value)
        this.addToFront(node)
    } else {
        node.val = val
        this.moveToFront(node)
    }
    this.map.set(key, node)
    if (this.map.size > this.capacity) this.deleteLast()
};

LRUCache.prototype.addToFront = function(node) {
    if (!this.head) this.head = node
    else {
        node.next = this.head
        this.head.prev = node
        this.head = node
    }
    if (!this.tail) this.tail = node
}

LRUCache.prototype.moveToFront = function(node) {
    if (node.prev) node.prev.next = node.next
    if (node.next) node.next.prev = node.prev
    this.addToFront(node)
}

LRUCache.prototype.deleteLast = function() {
    let newLast = this.tail.prev
    newLast.prev.next = this.tail
    this.tail.prev = newLast.prev
    this.map.delete(newLast.key)
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.map)
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
console.log('size', cache.map.size)
console.log(cache.map)
console.log(cache.get(2));       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
