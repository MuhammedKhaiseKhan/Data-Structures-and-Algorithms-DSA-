//!  Stack array


// class Stack {
//     constructor() {
//       this.items = [];
//     }
  
//     push(element) {
//       this.items.push(element);
//     }
  
//     pop() {
//       return this.items.pop();
//     }
  
//     peek() {
//       return this.items[this.items.length - 1];
//     }
  
//     isEmpty() {
//       return this.items.length === 0;
//     }
  
//     size() {
//       return this.items.length;
//     }
  
//     print() {
//       console.log(this.items.toString());
//     }
// }
  
//   const stack = new Stack();
//   console.log(stack.isEmpty());
//   stack.push(20);
//   stack.push(10);
//   stack.push(30);
//   console.log(stack.size());
//   stack.print();
//   console.log(stack.pop());
//   console.log(stack.peek());
//   stack.print();
  

// function reverse(str) {
//   const stack = new Stack()
//   let reversed = ''

//   for(let char of str) {
//       stack.push(char)
//   }

//   while(!stack.isEmpty()) {
//       reversed += stack.pop()
//   }

//   return reversed
// }

// console.log(reverse("khaiz"))


//!  Stack Object

// class Stack {
//     constructor() {
//       this.items = {};
//       this.head = 0;
//     }
  
//     push(element) {
//       this.items[this.head] = element;
//       this.head++;
//     }
  
//     pop() {
//       const item = this.items[this.head - 1];
//       delete this.items[this.head - 1];
//       this.head--;
//       return item;
//     }
  
//     peek() {
//       return this.items[this.head - 1];
//     }
  
//     size() {
//       return this.head;
//     }
  
//     isEmpty() {
//       return this.head === 0;
//     }
  
//     print() {
//       console.log(this.items);
//     }
//   }
  

//! Stack Linkedlist 

class Node {
    constructor (value) {
      this.value = value
      this.next = null
    }
  }
  
  class LinkedListStack {
    constructor () {
      this.head = null
      this.size = 0
    }
  
    isEmpty () {
      return this.size === 0
    }
  
    getSize () {
      return this.size
    }
  
    push (value) {
      const node = new Node(value)
      if (this.isEmpty()) {
        this.head = node
      } else {
        node.next = this.head
        this.head = node
      }
      this.size++
      return
    }
  
    pop () {
      if (this.size < 1) {
        console.log('Under flow error  / Stack is empty')
        return
      }
  
      const value = this.head.value
      this.head = this.head.next
      this.size--
      return value
    }
  
    top () {
      if (this.size < 1) {
        console.log('Stack is empty')
        return
      }
      console.log(this.head.value);
      
      return 
    }
  
    print () {
      if (this.size == 0) {
        console.log('Stack is empty')
        return
      }
  
      let listValues = ''
      let curr = this.head
      while (curr) {
        listValues += `${curr.value} `
        curr = curr.next
      }
      console.log(listValues)
    }
  }
  
  const list = new LinkedListStack()
  list.print()
  list.pop()
  list.push(10)
  list.push(20)
  list.push(30)
  
  list.push(2)
  list.print()
  list.top()