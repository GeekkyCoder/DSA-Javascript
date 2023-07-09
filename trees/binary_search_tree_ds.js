   
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

    remove(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      let parentNode = null;
      while(currentNode){
        if(value < currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if(value > currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          //We have a match, get to work!
          
          //Option 1: No right child: 
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              
              //if parent > current value, make current left child a child of parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
              
              //if parent < current value, make left child a right child of parent
              } else if(currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            }
          
          //Option 2: Right child which doesnt have a left child
          } else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;
            if(parentNode === null) {
              this.root = currentNode.right;
            } else {
              
              //if parent > current, make right child of the left the parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;
              
              //if parent < current, make right child a right child of the parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            }
          
          //Option 3: Right child that has a left child
          } else {
  
            //find the Right child's left most child
            let leftmost = currentNode.right.left;
            let leftmostParent = currentNode.right;
            while(leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }
            
            //Parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;
  
            if(parentNode === null) {
              this.root = leftmost;
            } else {
              if(currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if(currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
        return true;
        }
      }
    }
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