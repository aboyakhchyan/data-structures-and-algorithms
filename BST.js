class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary search three

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (true) {
      if (value > current.value) {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      } else if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        return;
      }
    }
  }

  inOrderTraversal(cb) {
    if (!this.root) return cb(null);

    const stack = [];
    let current = this.root;

    while (stack.length || current) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      cb(current.value);
      current = current.right;
    }
  }

  preOrderTraversal(cb) {
    if (!this.root) return cb(null);
    const stack = [this.root];

    while (stack.length) {
      const current = stack.pop();
      cb(current.value);

      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  }

  postOrderTraversal(cb) {
    if (!this.root) return cb(null);
    const stack = [this.root];
    const result = [];

    while (stack.length) {
      const current = stack.pop();
      result.push(current);

      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }

    while (result.length) {
      cb(result.pop().value);
    }
  }

  levelOrderTraversal(cb) {
    if (!this.root) return cb(null);
    const queue = [this.root];

    while (queue.length) {
      const current = queue.shift();
      cb(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  isEmpty() {
    return this.root === null;
  }

  getHeight() {
    if (!this.root) return -1;

    const queue = [this.root];
    let height = -1;

    while (queue.length) {
      const size = queue.length;
      height++;

      for (let i = 0; i < size; ++i) {
        const node = queue.shift();

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    return height;
  }

  getNumberOfNodes() {
    if (!this.root) return 0;
    const stack = [this.root];
    const result = [];

    while (stack.length) {
      const current = stack.pop();
      result.push(current);

      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }

    return result.length;
  }

  getRootData() {
    if (!this.root) return null;

    return this.root.value;
  }

  setRootData(value) {
    if (!this.root) return;

    this.root.value = value;
  }

  clear() {
    this.root = null;
  }

  getEntry(value) {
    if (!this.root) return null;

    let current = this.root;
    while (current) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        return current.value;
      }
    }

    return null;
  }

  contains(value) {
    if (!this.root) return false;

    let current = this.root;
    while (current) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        return true;
      }
    }

    return false;
  }

  _reverse(parent, child, newChild) {
    if (!parent) {
      this.root = newChild;
    } else if (parent.left === child) {
      parent.left = newChild;
    } else if (parent.right === child) {
      parent.right = newChild;
    }
  }

  remove(value) {
    if (!this.root) return;
    let parent = null;
    let current = this.root;

    while (current) {
      if (value > current.value) {
        parent = current;
        current = current.right;
      } else if (value < current.value) {
        parent = current;
        current = current.left;
      } else {
        break;
      }
    }

    if (!current) return;

    if (!current.left && !current.right) {
      this._reverse(parent, current, null);
      return;
    }

    if(!current.right || !current.left) {
      const child = current.right || current.left;
      this._reverse(parent, current, child);
      return;
    }

    // in order successor
    let minParent = current;
    let min = current.right;
  
    while(min.left) {
      minParent = min;
      min = min.left
    }
    
    current.value = min.value;

    this._reverse(minParent, min, min.right);
  }
}

const bst = new BST();
bst.insert(22);
bst.insert(15);
bst.insert(30);
bst.insert(9);
bst.insert(7);
bst.insert(17);
bst.insert(28);
bst.insert(45);
bst.remove(15);
