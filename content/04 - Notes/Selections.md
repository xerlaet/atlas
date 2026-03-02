# Selections
---
## Pigeonhole Principle
If $k+1$ objects are placed into $k$ boxes, then at least one box contains two or more objects

The generalized principle states that if $N$ objects are placed into $k$ boxes, then there is at least one box containing at least $\lceil N/k \rceil$ objects
>[!example] How many cards must be selected from a standard deck of 52 cards to guarantee that at least three cards of the same suit are chosen?
>Assume 4 boxes, the smallest integer where $\lceil N/4 \rceil\geq 3$ is 9, so you must select at least 9 cards
## Permutations
A **permutation** of a set of distinct objects is an ordered arrangement of those objects
An ordered arrangement of *r elements* of a set is called an **r-permutation**

Let $S=\{1,2,3\}$
$3,1,2$ is a permutation of $S$
$3,2$ is a 2-permutation of $S$

The number of r-permutations of a set with $n$ elements is denoted as $P(n,r)$
$$
P(n,r)=\frac{n!}{(n-r)!}
$$
>[!example] How many ways are there to select a 1st, 2nd, and 3rd place winner from 100 people entered in a contest?
>$$P(100,3)=\frac{100!}{(100-3!)}=970,200$$
## Combinations
An **r-combination** of elements of a set is an *unordered selection* of r elements from the set

The number of r-combinations of a set with $n$ elements is denoted as $C(n,r)$ or $\begin{pmatrix}n\\r\end{pmatrix}$, which is known as the binomial coefficient
$$
C(n,r)=\frac{n!}{(n-r)!r!}
$$

>[!example] How many different ways are there to select 47 cards from a standard deck of 52 cards?
>$$C(52,47)=\frac{52!}{(52-47)!47!}=2,598,960$$
