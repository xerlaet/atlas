# Stacks
---

A **stack** is a data structure in which elements are added and removed from one end only following a *Last in First Out (LIFO)* structure

A **Stack** can be visualized as a tower of elements, where only the top element is accessible at any one time, so the elements are stored in a last in first out (LIFO) manner

Operations include *push* (add an element) and *pop* (remove an element), *top* (get the top element), and *isEmpty()* (return whether the stack is empty or not)

### Implementation
The elements of the stacks are stored in an array, with a variable to track the top position
It can also be implemented using [Linked Lists](/notes/linked-lists)

### Application
Stacks can be used for prefix, infix, and postfix operations by storing the values in a stack

## Analysis
```
push(x)   // O(1)
pop()     // O(1)
top()     // O(1)
size()    // O(1)
isEmpty() // O(1)
```