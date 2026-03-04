# Sorting Algorithms
---

Algorithms for arranging elements in an [array](/notes/arrays)

An [Inversion](/notes/inversion) occurs when any two elements are out of order
An algorithm is **stable** if it preserves the ordering of equal elements

## Non Comparison Based
[Counting Sort](/notes/counting-sort)
[Radix Sort](/notes/radix-sort)
[Bucket Sort](/notes/bucket-sort)
[Joke Sorting Algorithms](/notes/joke-sorting-algorithms)

## Comparison Based
Simple $O(n^{2})$ algorithms
[Selection Sort](/notes/selection-sort)
[Insertion Sort](/notes/insertion-sort)
[Bubble Sort](/notes/bubble-sort)

Efficient $O(n\log n)$ algorithms
[Merge Sort](/notes/merge-sort)
[Quick Sort](/notes/quick-sort)
[Heap Sort](/notes/heap-sort)

### Complexity
For a **comparison based algorithm**, the situation can be modeled with a decision tree where each internal node is a comparison and each leaf is a permutation. There will be $n!$ leaves

Any algorithm will at best logarithmically compare between each permutation which is $\log n!$

Using the [Stirling Approximation](/notes/stirling-approximation), this reduces to $n\log n$

$$
\begin{align}
\log n!&\sim \log \left(\sqrt{2\pi n}\left( \frac{n}{e} \right)^{n}\right) \\
&=\log\sqrt{2\pi n}+\log\left( \frac{n}{e} \right)^{n} \\
&=O(n\log n)
\end{align}
$$

Given this lower bound and the fact that an upper bound is already given by algorithms such as merge sort, the bound for sorting with comparisons is $\Theta(n\log n)$

The average depth of a decision tree $T$ will be $\geq \log k$ where $k$ is the number of leaves (can be proved using induction). Thus the average case complexity is also $\Omega (n\log n)$
