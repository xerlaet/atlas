# Database Normalization
---

**Database Normalization** is the systematic process of organizing the attributes and tables of a [Relational Database](/notes/relational-database) to minimize data redundancy and prevent structural data anomalies. It relies heavily on mathematical decomposition techniques.

## Decomposition Process
![TikZ Diagram](/attachments/tikz-db6e209be02c3558b5880bb943fc8ba1.svg)

## Targeted Data Anomalies
- **Update Anomaly**: Modifying a duplicated piece of data requires multiple isolated updates, risking data corruption.
- **Insertion Anomaly**: The inability to record a piece of data because it lacks the required primary key for a combined multi-entity table.
- **Deletion Anomaly**: Deleting a specific row to remove one fact inadvertently destroys unrelated facts stored in the same tuple.

## Functional Dependencies
Normalization is mathematically driven by **Functional Dependencies**, which describe the strict relationship between sets of attributes within a [Relational Model](/notes/relational-model). If attribute $X$ functionally determines attribute $Y$, it is written as:
$$
\begin{aligned}
X &\rightarrow Y \\
\text{If } t_1[X] &= t_2[X] \text{ then } t_1[Y] = t_2[Y]
\end{aligned}
$$
- [Minimal Cover](/notes/minimal-cover) - The algorithmic reduction of functional dependencies to their non-redundant canonical forms.

## Normal Forms (Progression)
Tables are evaluated against a progressive sequence of rules called **Normal Forms**. A database must fulfill the criteria of lower forms to qualify for higher ones.
- [First Normal Form](/notes/first-normal-form) - Mandates that all attributes hold atomic values and eliminates repeating groups.
- [Second Normal Form](/notes/second-normal-form) - Ensures all non-key attributes are fully dependent on the entire primary key.
- [Third Normal Form](/notes/third-normal-form) - Ensures no non-key attribute depends on another non-key attribute.
- [Boyce-Codd Normal Form](/notes/boyce-codd-normal-form) - A stricter validation requiring every determinant to be a candidate key.
