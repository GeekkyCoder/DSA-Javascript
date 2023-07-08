class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
      if (!this.root) {
        // const newNode = new Node(value
        const newNode = {
         right: null ,
         left: null,
         value: value 
        }
      
        this.root = newNode
      }else {
         const newNode = {
         right: null ,
         left: null,
         value: value 
        }
        
        // find the correct position and insert the newNode
        // either left or right of the root
        let currentNode = this.root 
        
        while(true){
          //left 
          if(value < currentNode.value){
            if(!currentNode.left){
             currentNode.left = newNode 
             return
            }
            currentNode = currentNode.left 
          }else {
            if(!currentNode.right){
               currentNode.right = newNode
              return
            }
            currentNode = currentNode.right
          }
        }
  
      }
  
     // const newNode = new Node(value)
    
      //Code here
    }
  
  
    lookup(value) {
      //Code here
    }
    // remove
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(20)
  tree.insert(1)
  tree.insert(6)
  tree.insert(15)
  tree.insert(170)


  console.log(JSON.stringify(traverse(tree.root)))
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }