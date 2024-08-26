
//* A linked list is a linear data structure that includes a series of connected nodes.

////////////! Linked list class

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linked {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//        return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }
// }

// const list = new linked()
// console.log("list is empty ", list.isEmpty());
// console.log("list size ", list.getSize());








////! How to add a new Node at the start of the list.
////? 👉 Prepend method. 

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linked {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     print(){
//         if (this.isEmpty()){
//             console.log("List is empty");
//         }else{
//             let curr = this.head
//             let listValues = ''
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new linked()
// console.log("list is empty ", list.isEmpty());
// console.log("list size ", list.getSize());
// list.print()
// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.print()

////! How to add a new Node at the end of the list.
////? 👉 Append method. 


class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linked {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size 
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            return 
        }
        
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let pre = this.head
            for(let i=0; i < index-1; i++){
                pre = pre.next
            }
            node.next = pre.next
            pre.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size) {
            return `invalid index`
        }
        let removeNode
        if(index === 0) {
            removeNode = this.head
            this.head = this.head.next
        }else {
            let pre = this.head
            for(let i=0; i<index-1; i++) {
                pre = pre.next
            }
            removeNode = pre.next
            pre.next = removeNode.next
        }
        this.size--
        return `removed value = ${removeNode.value}`
    }

    removeValue(value){
        if(this.isEmpty()) {
            return null
        }
        if(this.head.value === value) {   // Checking if the head node has the value
            this.head = this.head.next   // Remove the head node
            this.size--
            return value
        }else{
            let pre = this.head
            while(pre.next && pre.next.value !== value) {
                pre = pre.next
            }
            if(pre.next){               // If the next node is the one to be removed
                const removedNode = pre.next
                pre.next = removedNode.next
                this.size--
                return value
            }
            return null                // If the value is not found
        }
    }

    reverse(){
        let pre = null
        let curr = this.head
        while(curr){
            let next =curr.next
            curr.next = pre
            pre = curr
            curr = next
        }
        this.head = pre
    }

    search(value){
        if(this.isEmpty()) {
            return `the list is empty ${-1}` 
        }
        let i=0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return `your value is in index ${i} `
            }
            curr = curr.next
            i++
        }
        return `no value found ${-1}`
    }

    findMiddle() {
        if (this.isEmpty()) {
            return null;
        }
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
    }

    removeMiddle(){
        if(this.isEmpty()){
            return `the list is empty`
        }
        if(this.size === 1){
            this.head = null
            this.size--
            return `removed the only element in the list`
        }

        let slow = this.head
        let fast = this.head
        let pre = null

        while(fast !== null && fast.next !== null){
            pre = slow
            slow = slow.next
            fast = fast.next.next
        }
        pre.next = slow.next
        this.size --
        return `removed middle element ${slow.val}`
    }

    print(){
        if(this.isEmpty()){
            console.log("The list is empty");
        }else{
            let current = this.head
            while(current){
                console.log(current.value);
                current = current.next
            }
        }
    }
}


const list = new linked()
console.log("list is empty ", list.isEmpty());
console.log("list size ", list.getSize());

list.append(5)
list.append(6)
list.append(7)
list.insert(11,3)

console.log(list.removeValue(7));
// console.log(list.findMiddle());

list.print()


