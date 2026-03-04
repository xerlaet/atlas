# Insertion Sort
---

The array is virtually split into a sorted and unsorted section. Values from the unsorted section are picked and placed in the correct position in the sorted part

![Pasted image 20250311092249.png](/attachments/Pasted%20image%2020250311092249.png)

## Complexity
Best case is $O(n)$ if the array is already sorted
Worst case is $O(n^{2})$ if the array is in reverse sorted order

The complexity depends on the number of inversions $O(\text{inv}(A)+n)$
