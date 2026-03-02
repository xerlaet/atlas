# Lists
---

A **list** is an ordered collection of objects

Lists are similar to [[Arrays]], except instead of accessing elements with their index, elements are accessed using pointers

[[Linked Lists]]

A **Singly Linked List** are simple and easy to work with, but accessing elements at the end take more time

A **Doubly Linked List** is more complicated in its implementation, but has the advantage of being able to traverse in both directions

## Analysis
```
size()     // O(1)
isEmpty()  // O(1)
get(i)     // O(n)
set(i, e)  // O(n)
add(i,e)   // O(n)
remove(i)  // O(n)
```

## Python
```python
list1 = []
list2 = [1, 2, 'hi', 3.14]
list3 = list(range(5))

index = list2[2]
last = list2[-1]
subset = list2[1:3] # inclusive exclusive

list2[1] = 5
list1.append(5)
list1.insert(1, "hey") # insert at index
list1.pop() # return last element
list2.remove(1) # remove first occurence
list2.clear() # clear list

2 in list1
len(list1)

# List Comprehension
list4 = [x**2 for x in range(10) if x % 2 == 0]

matrix = [[1,2], [3,4], [5,6]]
print(matrix[1][1])

list5 = [1,2,3]
list6 = ['a','b','c']
zipped = list(zip(list5,list6))

list7 = list6.copy() # separate copy
```
