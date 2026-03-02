# Queues
---

A **queue** is a data structure in which elements are added on either side, and removed from one end following a *First in First Out* (FIFO) structure

**Queues** can be visualized as a line of elements, where elements that are added go to the end of the line, and elements returned are always from the front of the line, so the elements are stored in a first in first out (FIFO) manner

Operations include *addQueue()* (adds at rear), *front* (returns first element), *back* (returns last element), *deleteQueue()* (removes first element of queue)

## Analysis
```java
enqueue(x) // O(1) 
dequeue()  // O(1)
first()    // O(1)
size()     // O(1)
isEmpty()  // O(1)
```

## Python
```python
from collections import deque

d = deque()
d = deque([1,2,3,4])

d.append(1) # add to right
d.appendleft(1) # add to left

d.pop() # remove from right
d.popleft() # remove from left
```