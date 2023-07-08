   
  //     9
  //  4     20
  //1  6  15  170
  


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
    }
  
  
    lookup(value) {
      if(!this.root){
        return false
      }

      let currentNode = this.root
      
      while(currentNode){
        if(value < currentNode.value){
          // go left
          currentNode = currentNode.left
        }else if(value > currentNode.value){
           // go right
           currentNode = currentNode.right
        }else if(currentNode.value === value){
           return currentNode
        }
      }

     return "not found"    
    }

    // remove(value){
    //   let currentNode = this.root 

    //    while(currentNode){
    //       if(value < currentNode.value){
    //          // go left
    //          currentNode = currentNode.left
    //       }else if(value > currentNode.value){
    //          // go right
    //          currentNode = currentNode.right
    //       }else if(currentNode.value === value){
    //            // go to the lead node of this currentNode and update the leaf node to be currentNode

    //       }
    //    }
    // }
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(20)
  tree.insert(1)
  tree.insert(6)
  tree.insert(15)
  tree.insert(170)

console.log(tree.lookup(6))
// console.log(JSON.stringify(traverse(tree.root)))
  

  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }