// //!  Queue Array 

class Queue {
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString());
    }
}


const  queue = new Queue()

console.log(queue.isEmpty());

queue.enqueue(10)   
queue.enqueue(20)   
queue.enqueue(30)
console.log(queue.size());

queue.print()

console.log(queue.dequeue());
console.log(queue.peek());


//! Queue LinkedList
 
class Node {
    constructor (value) {
      this.value = value
      this.next = null
    }
  }
  
  class QueueList {
    constructor () {
      this.head = null
      this.tail = null
      this.size = 0
    }
  
    enqueue (value) {
      const node = new Node(value)
      if (this.size == 0) {
        this.head = node
        this.tail = node
      } else {
        this.tail.next = node
        this.tail = node
      }
      this.size++
    }
  
    dequeue () {
      if (this.isEmpty()) {
          console.log('Q is empty, nothing to remove');
          return null; 
      }
  
      const dequeuedValue = this.head.value; 
      this.head = this.head.next;
  
      if (this.head === null) {
          this.tail = null;
      }
  
      this.size--;
  
      return dequeuedValue; 
  }
  
  
    getSize () {
      return this.size
    }
  
    isEmpty () {
      return this.size == 0
    }
  }


//! Queue Object 

// class Queue {
//     constructor(){
//         this.items = {}
//         this.rear = 0
//         this.front = 0
//     }

//     enqueue(element){
//         this.items[this.rear] = element
//         this.rear++
//     }

//     dequeue(){
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     isEmpty(){
//         return this.rear - this.front === 0
//     }

//     peek(){
//         return this.items[this.front]
//     }

//     size(){
//         return this.rear - this.front
//     }

//     print(){
//         console.log(this.items);
//     }
// }


// const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.isEmpty());


// console.log(queue.size());
// queue.print()

// console.log(queue.dequeue());
// console.log(queue.peek());


//! Circular Queue

// class circularQueue {
//     constructor(capacity){
//         this.items = new Array(capacity)
//         this.capacity = capacity
//         this.currentLength = 0
//         this.rear = -1
//         this.front = -1
//     }

//     isFull(){
//         return this.currentLength === this.capacity
//     }

//     isEmpty(){
//         return this.currentLength === 0
//     }

//     enqueue(element){
//         if(!this.isFull()){
//             this.rear = (this.rear+1) % this.capacity
//             this.items[this.rear] = element
//             this.currentLength +=1 
//             if(this.front === -1){
//                 this.front = this.rear
//             }
//         }
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         const item = this.items[this.front]
//         this.items[this.front] = null
//         this.front = (this.front + 1) % this.capacity
//         this.currentLength -= 1
//         if(this.isEmpty()){
//             this.front = -1
//             this.rear = -1
//         }
//         return item
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[this.front]
//         }
//         return null
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('the queue is empty');
//         }else{
//             let i
//             let str = ''
//             for(i = this.front; i !== this.rear; i = (i+1)% this.capacity){
//                 str += this.items[i] + " "
//             }
//             str += this.items[i]
//             console.log(str);
//         }
//     }
// }

// const queue = new circularQueue(5)

// console.log(queue.isEmpty());

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)

// console.log(queue.isFull());
// queue.print()
// queue.dequeue()
// console.log(queue.peek());

// queue.enqueue(60)
// queue.print()



////////////////////////! Queue  with  LinkedList  GPT Version

// Define a Node class
class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

// Define a QueueLinkedList class using a linked list
class QueueLinkedList {
  constructor() {
      this.front = null;
      this.rear = null;
  }

  // Add an element to the rear of the queue
  enqueue(data) {
      const newNode = new Node(data);

      if (this.rear === null) {
          // If the queue is empty, the new node is both front and rear
          this.front = this.rear = newNode;
          return;
      }

      // Add the new node at the end of the queue and change the rear
      this.rear.next = newNode;
      this.rear = newNode;
  }

  // Remove and return the front element of the queue
  dequeue() {
      if (this.front === null) {
          console.log("Queue is empty");
          return null;
      }

      const removedNode = this.front;
      this.front = this.front.next;

      // If the front becomes null, then the queue is empty
      if (this.front === null) {
          this.rear = null;
      }

      return removedNode.data;
  }

  // Return the front element of the queue without removing it
  peek() {
      if (this.front === null) {
          console.log("Queue is empty");
          return null;
      }

      return this.front.data;
  }

  // Check if the queue is empty
  isEmpty() {
      return this.front === null;
  }

  // Print the elements of the queue
  printQueue() {
      let current = this.front;
      let queueStr = "";

      while (current !== null) {
          queueStr += current.data + " ";
          current = current.next;
      }

      console.log("Queue: " + queueStr.trim());
  }
}

// Example usage
const queue = new QueueLinkedList();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.printQueue(); // Output: Queue: 10 20 30
console.log("Dequeued element:", queue.dequeue()); // Output: Dequeued element: 10
queue.printQueue(); // Output: Queue: 20 30
console.log("Front element:", queue.peek()); // Output: Front element: 20
console.log("Is queue empty?", queue.isEmpty()); // Output: Is queue empty? false
