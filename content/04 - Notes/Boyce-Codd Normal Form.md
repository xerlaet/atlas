# Boyce-Codd Normal Form
---

**Boyce-Codd Normal Form** (BCNF) is a rigorous extension of [Third Normal Form](/notes/third-normal-form) (often termed 3.5NF) in [Database Normalization](/notes/database-normalization). BCNF specifically addresses data anomalies that can still occur in 3NF tables when multiple overlapping candidate keys exist.

## Architectural Rule
![TikZ Diagram](/attachments/tikz-70e7fb361ef4ffc911966a49c27d613a.svg)

## Mathematical Definition
BCNF drops the second leniency condition found in 3NF. A relation is in BCNF if and only if, for every non-trivial functional dependency $X \rightarrow Y$:
$$
\begin{aligned}
X \text{ is a superkey of } R.
\end{aligned}
$$
In plain terms: *Every attribute must depend on the key, the whole key, and nothing but the key.*

## Key Differences from 3NF
- **Overlapping Keys**: 3NF allows a non-key attribute to functionally determine part of a primary key. BCNF explicitly outlaws this.
- **Decomposition Loss**: While achieving 3NF always preserves both data (lossless join) and all functional dependencies, decomposing a table to satisfy BCNF can sometimes result in the destruction of valid functional dependencies.
