# Second Normal Form
---

**Second Normal Form** (2NF) is a stage in [Database Normalization](/notes/database-normalization) that eliminates partial dependencies. A relation is in 2NF if it is already in [First Normal Form](/notes/first-normal-form) and every non-prime attribute is fully functionally dependent on the entire primary key.

## Dependency Resolution
![TikZ Diagram](/attachments/tikz-ad930c34e427026d06fb28f5736b723e.svg)

## Mathematical Definition
For a relation $R$ with primary key $PK$:
If $X$ is a strict subset of $PK$ ($X \subset PK$), there must be no non-prime attribute $Y$ such that:
$$
\begin{aligned}
X &\rightarrow Y
\end{aligned}
$$
If this partial dependency exists, the table violates 2NF.

## Correction Method
To resolve a 2NF violation, the relation is decomposed. The attributes suffering from partial dependency are extracted into a new table where the partial key becomes their full primary key. This is the necessary step before advancing to [Third Normal Form](/notes/third-normal-form).
