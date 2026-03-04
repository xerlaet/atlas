# Linked Lists
---

![TikZ Diagram](/attachments/tikz-99ec08ce6d6ffb8ca4813159125eb1fb.svg)

## Implementation
A **linked list** is a collection of nodes containing *data* and an *address* of the next node
```c++
struct nodeType {
	int info;
	nodeType *link;
};

nodeType *head;
```
## Traversal
There are two ways to traverse a linked list, *iteratively* and *recursively*:
### Iterative Traversal
```c++
template<class Type> void displayList() {
	node<T> *currentPtr = headPtr;
	while (currentPtr != nullPtr) {
		cout << currentPtr->data << " ";
		currentPtr->next;
	}
}
```
### Recursive Traversal
```c++
void displayRecursively(node<T> *temp) {
	if (temp == nullptr) return;
	cout << temp->data << " ";
	displayRecursively(temp->next);
}
```
### PreOrder vs InOrder vs PostOrder Traversal
![Pasted image 20231210164504.png](/attachments/Pasted%20image%2020231210164504.png)
The main idea is that PreOrder prints a node on the first touch, InOrder prints a node on the second touch, and PostOrder prints a node on the third touch
## Doubly Linked Lists
something