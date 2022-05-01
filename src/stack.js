const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {
	constructor() {
		this.stack = [];
	} 
	push(element) {
		this.stack.push(element);

	}
  
	pop() {
		let max = this.peek()
		this.stack = this.stack.filter(el => el !== max) 
		return max
	}
  
	peek() {
	 let max = Number.MIN_SAFE_INTEGER;
	 this.stack.forEach(el => {
		 if (el> max) max = el;
		})
	 return max
	}
}

module.exports = {
  Stack
};
