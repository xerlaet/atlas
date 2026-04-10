# Third Normal Form
---

**Third Normal Form** (3NF) is a stage in [Database Normalization](/notes/database-normalization) designed to eliminate transitive dependencies. A relation is in 3NF if it satisfies [Second Normal Form](/notes/second-normal-form) and no non-prime attribute depends on another non-prime attribute.

## Dependency Resolution
![TikZ Diagram](/attachments/tikz-ab4230234de8f7b39419001bcc6e28b0.svg)

## Mathematical Definition
A relation is in 3NF if, for every non-trivial functional dependency $X \rightarrow Y$, at least one of the following is true:
$$
\begin{aligned}
1. \quad &X \text{ is a superkey of } R. \\
2. \quad &Y \text{ is a prime attribute (part of a candidate key).}
\end{aligned}
$$

## Correction Method
To resolve a 3NF violation, the dependent attribute (`DeptName`) and its determinant (`DeptID`) are separated into a new relational table, leaving the determinant behind in the original table as a foreign key. This fulfills standard business database constraints without the strict rigidity of [Boyce-Codd Normal Form](/notes/boyce-codd-normal-form).
