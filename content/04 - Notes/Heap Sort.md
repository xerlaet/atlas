# Heap Sort
---

Heap sort utilizes a heap data structure

```pseudo
fun heapsort(A)
	buildmaxheap(A)
	for i = A.length down to 2
		exchange A[1] with A[i]
		heapsize(A) -= 1
		maxheapify(A,1)
```

1. Create a [[Max Heap]] -> $O(n)$
2. Swap the root with the last element in the heap and decrement the size of the heap -> $O(n)$
	1. run heapify each time -> $O(\log n)$

This process is an optimization of [[Selection Sort]] where the selection process turns from $O(n)$ to $O(1)$ with an added $O(\log n)$

## Complexity
$O(n\log n)$

![[Pasted image 20250307130415.png]]
