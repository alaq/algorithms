// Implement a browser history


// let history = []

// // add new history
// function (url) { // O(n)
//     let entry = {
//         url: url,
//         time: new Date()
//     }
//     let existingEntry = findEntry(url)
//     if (existingEntry !== -1) {
//         history.splice(existingEntry, 1, 0)
//     }
//     history.unshift(entry)
// }

// // get history O(n)
// function get() {
//     return history
// }

// // delete history (single entry, or full)
// function (url) { // O(n)
//     if (!url) history = []
    
//     // deleting a single entry
//     let toDelete = findEntry(url)
//     history.splice(existingEntry, 1, 0)
// }

// function findEntry (url) { // O(n)
//     let history = get()
//     let historyUrls = history.map(entry => entry.url)
//     return historyUrls.indexOf(url)
// }


var ListNode = function(url) {
    this.prev = null
    this.next = null
    this.url = url
    this.date = new Date()
}

var history = function() {
    this.map = new Map()
    this.head = null
}

history.prototype.get = function () {
    let hist = []
    let node = this.head
    while (node) {
        hist.push(node)
        node = node.next
    }
    retrun hist
}

history.prototype.delete = function (url) {
    if (!url) this.head = null
    else {
        let node = this.map.get(url)
        // removing
        node.prev.next = node.next
        node.next.prev = node.prev
    }
    
}

history.prototype.add = function (url) {
    let node = this.map.get(url)
    if (node) {
        // remove from list
        node.prev.next = node.next
        node.next.prev = node.prev
        // move to front
        node.next = this.head
        this.head.prev = node
        this.head = node
        node.time = new Date()
    } else {
        node = new ListNode(url)
        if (!this.head) this.head = node
        else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
    }
    this.map.set(url, node)
}













