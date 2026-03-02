# Task Scheduling Problem
---

> [!note] Unit time tasks are being assumed here so it works with [[Matroids]]

The problem is to take a set of $n$ tasks each with deadlines and penalties that will be incurred if the respective deadline is missed

The goal is to output a schedule that minimizes the total penalty for missed deadlines

## Algorithm
Sort $S$ in decreasing order of penalties $O(n\log n)$
for loop $O(n)$
	check for independence $O(n)$

Total running time is $O(n^{2})$

![[Pasted image 20250930133721.png|600]]