# Knapsack Problem
---

## Discrete Version
Given a set of objects each with a weight and value, select a subset of those objects within weight to maximize the total value
$$
T(i,j)=\max \begin{cases}
T(i-1,j) \\
T(i-1,j-w_{i}) \text{ if } j\geq w_{i} 
\end{cases}
$$

![Knapsack Problem 2025-04-03 11.45.28](/attachments/Knapsack%20Problem%202025-04-03%2011.45.28)

$T(i,j)=T(5,5)=17$ so the maximum value possible within weight is 17

The time complexity is $O(nw)$ and is pseudo polynomial
Compare $nw$ to $n^{2}$?, sometimes brute force might be faster
The solution space is $2^{n}$ which is a subset of $n$

## Fractional Version
Given a set of objects each with a weight and value, select fractions of objects to maximize the total value

1. Sort objects in descending order of $\frac{O_{i}}{W_{i}}$ < $O(n\log n)$
2. Iterate through the objects adding as much as possible for each one, once only part of an object can be added, finish

The solution space is now of an infinite size (because of duplicates again)
