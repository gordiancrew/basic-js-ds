const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {

    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }


  has(data) {
    if(this.find(data)===null)
return false;
else
return true;

  }


  find(data) {
    return search(this.root, data);
    function search(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        return search(node.left, data);
      } else if (data > node.data) {
        return search(node.right, data);
      } else {
        return node;
      }
    }
  }



  remove(data) {
    this.root = removeNode(this.root, data);
    function removeNode(node, data) {
      if (node === null) {
        return null;

      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;

      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;

      } else {

        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }

        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }

        let newNode = minNode(node.right);
        node.data = newNode.data;
        node.right = removeNode(node.right, newNode.data);
        return node;
        function minNode(node) {

          if (node.left === null)
            return node;
          else
            return minNode(node.left);
        }
      }
    }
  }


  min() {

    return minNode(this.root).data;
    function minNode(node) {

      if (node.left === null)
        return node;
      else
        return minNode(node.left);
    }

  }
  max() {

    return maxNode(this.root).data;
    function maxNode(node) {

      if (node.right === null)
        return node;
      else
        return maxNode(node.right);
    }

  }

}

module.exports = {
  BinarySearchTree
};