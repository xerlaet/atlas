# Sorting Algorithms
---

Algorithms for arranging elements in an [[Arrays|array]]

An [[Inversion]] occurs when any two elements are out of order
An algorithm is **stable** if it preserves the ordering of equal elements

## Non Comparison Based
[[Counting Sort]]
[[Radix Sort]]
[[Bucket Sort]]
[[Joke Sorting Algorithms]]

## Comparison Based
Simple $O(n^{2})$ algorithms
[[Selection Sort]]
[[Insertion Sort]]
[[Bubble Sort]]

Efficient $O(n\log n)$ algorithms
[[Merge Sort]]
[[Quick Sort]]
[[Heap Sort]]

### Complexity
For a **comparison based algorithm**, the situation can be modeled with a decision tree where each internal node is a comparison and each leaf is a permutation. There will be $n!$ leaves

Any algorithm will at best logarithmically compare between each permutation which is $\log n!$

Using the [[Stirling Approximation]], this reduces to $n\log n$

$$
\begin{align}
\log n!&\sim \log \left(\sqrt{2\pi n}\left( \frac{n}{e} \right)^{n}\right) \\
&=\log\sqrt{2\pi n}+\log\left( \frac{n}{e} \right)^{n} \\
&=O(n\log n)
\end{align}
$$

Given this lower bound and the fact that an upper bound is already given by algorithms such as merge sort, the bound for sorting with comparisons is $\Theta(n\log n)$

The average depth of a decision tree $T$ will be $\geq \log k$ where $k$ is the number of leaves (can be proved using induction). Thus the average case complexity is also $\Omega (n\log n)$
