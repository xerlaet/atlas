# Quick Sort
---

**Quick Sort** is a [Divide and Conquer](/notes/divide-and-conquer) technique that is often the method of choice due to being fast on average, stable, and easy to implement

1. Partition the array into two subarrays based on a pivot element
2. Recursively sort both sides

The pivot that is selected could always be the last one, or perhaps a random one. On average, the partitions will make each subarray balanced:
$$
\frac{1}{n}(0+1+\dots+n-1)=\frac{n-1}{2}
$$

## Complexity
Worst case is $O(n^{2})$

The average case is $O(n\log n)$
> [!todo]
> add proof from class (calc version is cooler)

## Example Trace
![Quick Sort Trace](/attachments/Quick%20Sort%20Trace)