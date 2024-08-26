class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class linked {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0 
    }

    getSize(){
        return this.size
    }

    append(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node
        }else{
            let pre = this.head
            while(pre.next){
                pre = pre.next
            }
            pre.next = node
        }
        this.size++
    }

    prepend(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insert(val,index){
        if(index < 0 || index > this.size){
            return 
        }

        if(index === 0){
            this.prepend(val)
        }else{
            const node = new Node(val)
            let pre = this.head
            for(let i = 0; i<index-1; i++){
                pre = pre.next
            }
            node.next = pre.next
            pre.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return `invalid index`
        }

        let removedNode
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let pre = this.head
            for(let i = 0; i<index-1;i++){
                pre = pre.next
            }
            removedNode = pre.next
            pre.next = removedNode.next
        }
        this.size--
        return `removed node = ${removedNode.val}`
    }

    removeValue(val){
        if(this.isEmpty()){
            return null
        }
        if(this.head.val === val){
            this.head = this.head.next
            this.size--
            return `removed value = ${val}`
        }else{
            let pre = this.head
            while(pre.next && pre.next.val !== val){
                pre = pre.next
            }
            if(pre.next){
                let removedNode = pre.next
                pre.next = removedNode.next
                this.size--
                return `removed value = ${val}`
            }
            return `no value found`
        }
    }

    reverse(){
        let pre = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = pre
            pre = curr
            curr = next
        }
        this.head = pre
    }

    search(val){
        if(this.isEmpty()){
            return `list is empty`
        }else{
            let i = 0
            let curr = this.head
            while(curr){
                if(curr.val === val){
                    return `your value is in index ${i}`
                }
                curr = curr.next
                i++
            }
            return `no value found`
        }
    }

    findMiddle(){
        let fast = this.head
        let slow = this.head

        while(fast != null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }
        return `middle element = ${slow.val}`
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
            console.log('the list is empty');
        }else{
            let curr = this.head
            while(curr){
                console.log(curr.val);
                curr = curr.next
            }
        }
    }
}


const list = new linked()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.prepend(5)

// list.reverse()
// list.insert(50,5)
// console.log(list.findMiddle());
// console.log(list.removeFrom(8));
// console.log(list.removeValue(15));
// console.log(list.search(50));
// console.log(list.removeMiddle());

list.print()




removeMiddle(){
    if(this.isEmpty()){
        return `the list is empty`
    }
    if(this.size === 1){
        this.head = null
        this.size--
        return`removed the only node in the list `
    }

    let slow = this.head
    let fast = this.head
    let pre = null

    while(fast != null && fast.next !== null){
        pre = slow
        slow = slow.next
        fast = fast.next.next
    }
    pre.next = slow.next
    this.size--
    return `removed val ${slow.val}`
}



//? HOW TO CHECK A STRING IS PALINDROM OR NOT 
//* USTING TWO POINTER METHOD

//* BOTH TIME AND SPACE COMPLEXITY IS O(n)

// function palimdromCheck(word){

//     if(word.length === 0 ) return 'empty string'

//     word = word.toLowerCase()
//     let start = 0;
//     let end = word.length -1;

//     while(start < end){
//         if (word[start] !== word[end]) {
//             return false;
//         }
//         start ++;
//         end --;
//     }

//     return true;

// }

// const word = 'malayalam'
// console.log( palimdromCheck(word))




// function checkPal(word){
//     if(word.length === 0){
//         return `the word is empty`
//     }

//     word = word.toLowerCase()

//     let start = 0;
//     let end = word.length-1

//     while(start < end){
//         if(word[start] !== word[end]){
//             return false
//         }
//         start ++
//         end --
//     }

//     return true
// }

// let word = 'malayalam'
// console.log(checkPal(word));
