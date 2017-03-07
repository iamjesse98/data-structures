
//linked list
function linkedList(){
	this.head = null
}

linkedList.prototype.push = function(val){
	let node = {
		value: val,
		next: null
	}
	if(!this.head){
		this.head = node
	}else{
		current = this.head
		while(current.next)
			current = current.next
		current.next = node
	}
}

let ll = new linkedList()

ll.push(123)
ll.push(678)
ll.push(-345)

console.log(ll.head.next.next.value)

//stacks
let stack = []
stack.push(123)
stack.push(678)
stack.push(-345)
stack.push(456)
stack.pop()

console.log(stack)

//queue
let queue = []
queue.push(456)
queue.push(123)
queue.push(678)
queue.push(-345)
queue.shift()
console.log(queue)