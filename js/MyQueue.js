
var MyQueue = function () {
    this.queue = [];
    this.temp = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.temp.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.queue.length == 0) {
        while (this.temp.length != 0) this.queue.push(this.temp.pop());
    }
    return this.queue.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let val = this.pop();
    this.queue.push(val);
    return val;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.queue.length == 0 && this.temp.length == 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */