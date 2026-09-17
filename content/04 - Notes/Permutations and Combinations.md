# Permutations and Combinations
---

Both principles define the number of ways to select a subset of $k$ elements from a larger set of $n$ elements.

In permutations ($P$), order matters (e.g. passwords, schedules)
In combinations ($C$), order doesn't matter (e.g. hands of cards, committees)

|             |               With Replacement               |        Without Replacement         |
| ----------- | :------------------------------------------: | :--------------------------------: |
| Permutation |                   $n^{k}$                    |        $\frac{n!}{(n-k)!}$         |
| Combination | $\binom{n+k-1}{k}=\frac{(k+n-1)!}{(n-1)!k!}$ | $\binom{n}{k}=\frac{n!}{(n-k)!k!}$ |

Combinations without replacement are also known as the [binomial coefficient](/notes/binomial-theorem)

If $k>n$ and you are selecting without replacement, you cannot select more elements than the total pool, so both $P(n,r)$ and $C(n,r)$ are $0$
