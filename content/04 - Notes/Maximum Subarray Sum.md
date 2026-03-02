# Maximum Subarray Sum
---

**Problem** find the subarray which has the largest sum of all its elements

The [[Brute Force]] solution is to find every possible subarray $O(n^{2})$ and calculate the sum of that subarray $O(n)$, meaning the overall runtime is $O(n^{3})$

```python
ans = A[0]
for i in range(len(A)):
	for j in range(i,len(A)+1):
		total = A[i]
		for n in range(i+1,j):
			total += A[n]
		ans = max(ans, total)
```

The [[Divide and Conquer]] solution is to split the array into halves recursively, and then work back upwards where at each step selecting the max of the left subarray sum, right subarray sum, and crossing subarray sum

![[Pasted image 20250311011440.png]]

The recurrence relation is $T(n)=2T\left( \frac{n}{2} \right)+O(n)$ meaning the overall runtime is $O(n\log n)$

The [[Dynamic Programming]] solution is to calculate the maximum subarray sum up to a certain point, and check if it is larger than the best solution so far

```python
M = [0]*len(A)
best = M[0] = A[0]
for i in range(1,len(A)):
	M[i] = max(A[i], M[i-1]+A[i])
	best = max(best, M[i])
```

The overall runtime is $O(n)$!
