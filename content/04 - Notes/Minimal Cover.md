# Minimal Cover
---

A **Minimal Cover** (or Canonical Cover) is the smallest, simplest set of functional dependencies $F_{min}$ that is mathematically equivalent to a larger, complex set of functional dependencies $F$. It is a critical prerequisite algorithm for [Database Normalization](/notes/database-normalization).

## Algorithmic Reduction
![TikZ Diagram](/attachments/tikz-ad758174574552fd481960151b5197d0.svg)

## Computation Rules
To transform $F$ into $F_{min}$, three strict rules must be executed in sequence:
1. **Singleton Right-Hand Sides**: Decompose all dependencies so only one attribute is on the right. 
   - $X \rightarrow YZ$ becomes $X \rightarrow Y$ and $X \rightarrow Z$.
2. **Remove Extraneous Left-Hand Attributes**: If $A$ is redundant in $AB \rightarrow C$, reduce it to $B \rightarrow C$.
3. **Remove Redundant Dependencies**: If a dependency $X \rightarrow Y$ can be derived from the remaining dependencies using Armstrong's Axioms, delete it entirely.

## Mathematical Equivalence
The resulting set guarantees the exact same closure ($+$) as the original set, ensuring no logical constraints are lost during table decomposition:
$$
\begin{aligned}
F^+ &= F_{min}^+
\end{aligned}
$$
