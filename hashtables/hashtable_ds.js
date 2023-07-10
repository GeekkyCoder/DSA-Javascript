class HashTable {
    constructor(size) {
      this.data = new Array(size)
    }
  
    _hash(key) {
      let hash = 0
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) %
          this.data.length
      }
  
      return hash
    }
  
    // 0(1)
    set(key, value) {
      const address = this._hash(key)
      if (!this.data[address]) {
        this.data[address] = []
      }
  
      this.data[address].push([key, value])
    }
  
    // 0(1) without collissions
    // 0(n) with collisions
    get(key) {
      const address = this._hash(key)
      const currentBucket = this.data[address]
  
      if (currentBucket) {
        for (let i = 0; i < currentBucket.length; i++) {
          if (currentBucket[i][0] === key) {
            return currentBucket[i][1]
          }
        }
      }
  
      return undefined
    }
  
  
    // without collisions:
    // [['grapes',1000],['apples':3000]]
  
    // with collisons:
    // [['grapes',1000,'grapes',2000],['apples',3000]] 
  
  
    // 0(n)
    keys() {
      const keysArray = []
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i]) {
          keysArray.push(this.data[i][0][0])
        }
      }
  
      return keysArray
    }
  
  
    // collisions prevention 👇
    // keys() {
    //   if (!this.data.length) {
    //     return undefined
    //   }
    //   let result = []
    //   // loop through all the elements
    //   for (let i = 0; i < this.data.length; i++) {
    //     // if it's not an empty memory cell
    //     if (this.data[i] && this.data[i].length) {
    //       // but also loop through all the potential collisions
    //       if (this.data.length > 1) {
    //         for (let j = 0; j < this.data[i].length; j++) {
    //           result.push(this.data[i][j][0])
    //         }
    //       } else {
    //         result.push(this.data[i][0])
    //       }
    //     }
    //   }
    //   return result;
    // }
  
  
    //0(n)
    values() {
      const valuesArray = []
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i]) {
          valuesArray.push(this.data[i][0][1])
        }
      }
  
      return valuesArray
    }
  }
  
  const myHashTable = new HashTable(50)
  
  myHashTable.set("grapes", 10000)
  myHashTable.set("grapes", 10000)
  myHashTable.set("apples", 2000)
  myHashTable.set("oranges", 2000)
  
  console.log(myHashTable.keys())
  console.log(myHashTable.values())
  
  // console.log(myHashTable.get("apples"))
  
  // console.log(myHashTable)
  