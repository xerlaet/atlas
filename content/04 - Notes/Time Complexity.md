# Time Complexity
---

**Time Complexity** analyzes how the runtime of an algorithm scales with its input $n$

The growth rates are often described using [Asymptotic Notation](/notes/asymptotic-notation)

![TikZ Diagram](/attachments/tikz-51e7a3cc5f90e01f6d01f5ddc6655f28.svg)

## Types of Analysis
**Worst Case Analysis** looks at the complexity of the worst case
$W(n)=\max (\text{cost}(i))$

**Best Case Analysis** looks at the complexity of the best case
$B(n)=\min (\text{cost}(i))$

**Average Case Analysis** looks at the average complexity of all cases
$A(n)=\sum (\text{prob}(i) \cdot \text{cost}(i))$

**Amortized Analysis** looks at a sequence of worst case actions and calculates an average complexity for them
$M(n)=\frac{\sum_{i=0}^{k}\text{worst case operation} }{k}$

## How to Analyze an Algorithm
1. Break the algorithm into $O(1)$ steps (assignments, arithmetic, array access)
2. Identify loops (a loop running $n$ times is $O(n)$)
3. Multiply complexities of nested loops
4. Add complexities of sequential blocks
5. Simplify by keeping only the fastest growing term and dropping all constants
$$
O(5n^{2}+100n+50)\to O(n^{2})
$$
