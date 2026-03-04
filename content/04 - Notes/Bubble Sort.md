# Bubble Sort
---

**Bubble Sort** repeatedly swaps adjacent elements if they are in the wrong order. The total number of swaps equals the number of [Inversion](/notes/inversion) in the original array

![TikZ Diagram](/attachments/tikz-5264f8c6f7592a7e569414f716218d1b.svg)

## Algorithm
```python
def bubbleSort(arr):
	n = len(arr)
	# traverse through the array
	for i in range(n):
		swapped = False
		# last i elements are already in place
		for j in range(0, n-i-1):
			# swap if element is greater than next element
			if arr[j] > arr[j+1]:
				arr[j], arr[j+1] = arr[j+1], arr[j]
				swapped = True
		# if no swaps occur, end early
		if (not swapped):
			break
```

## Complexity
$\Omega(n)$ when array is already sorted
$O(n)$ when array is in reverse order
Since the base case doesn't match the worst case, there is no $\Theta$ 

