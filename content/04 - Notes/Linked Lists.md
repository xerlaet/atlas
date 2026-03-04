# Linked Lists
---

```tikz
\begin{document}
\begin{tikzpicture}[
main/.style={draw, rectangle, minimum size=0.5cm},
arrow/.style={->,thick,>=latex},
]
\def\w{0.8cm}
\node[] (H) at (-2,0) {head};
\node[main] (A1) at (0,0) {};
\node[main] (A2) at (0.5,0) {};
\node[main] (B1) at (2,0) {};
\node[main] (B2) at (2.5,0) {};
\node[main] (C1) at (4,0) {};
\node[main] (C2) at (4.5,0) {};
\node[] (N) at (6,0) {null};

\path[draw, arrow, ->] (H) to (A1);

\end{tikzpicture}
\end{document}
```

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