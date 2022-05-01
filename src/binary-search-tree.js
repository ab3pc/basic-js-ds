const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor () {
		this.roots = null;
	  }
	 root() {
		return this.roots;
	  }
	
	  add(data) {
		const newNode = new Node(data);
			if(!this.roots) {
				this.roots = newNode;
				return;
			}
			let currentNode = this.roots;

			while(currentNode) {
				if(newNode.data < currentNode.data) {
					if(!currentNode.left) {
						currentNode.left = newNode;
						return;
					}
				currentNode = currentNode.left;
				} else {
					if(!currentNode.right) {
						currentNode.right = newNode;
						return;
					}
				currentNode = currentNode.right;
				}
			}
	  }

	  searchInTree(callback, data, shortSearch = 0) {
		let res;
		this.data = data;
		const queue = [this.roots];
		while(queue.length) {
			const node = queue.shift();
		
			res = callback(node);

			if (res && shortSearch) {
				break;
			}

			if(node.left) {
				queue.push(node.left)
			}
			if(node.right) {
				queue.push(node.right)
			}
		}
		return res
	  }
	has(data) {
		let res = this.searchInTree((node) => {
			console.log(node.data, data);
			if(node.data === data) {
				return true;
				} 
				else return false;
			
		}, data, 1)
		return res
	}
  
	find(data) {
		let res = this.searchInTree((node) => {
			if(node.data === data) return node;
			else return null;
		
	}, data, 1)
	return res
	}
  
	remove(data) {
		let res = this.searchInTree((node) => {
			if(node.data === data) {
				node.data = null;
				return node;
			} 
			else return null;
		
	}, data)
	return res
	}
  
	min() {
		let data = Number.MAX_SAFE_INTEGER
		let res = this.searchInTree((node) => {
    if(!node.data) return false
		if( node.data < data) {
			data = node.data
		}
		return data
	}, data)

	return res
	}
  
	max() {
		let data = Number.MIN_SAFE_INTEGER
		let res = this.searchInTree((node) => {
		if( node.data > data) {
			data = node.data
		}
		return data
	}, data)

	return res
	}
  }

module.exports = {
  BinarySearchTree
};