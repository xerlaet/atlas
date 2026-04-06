# Query Processing
---

**Query Processing** refers to the systematic sequence of operations performed by a [Database](/notes/database) to extract, translate, and execute a declarative, high-level query against physical data storage.

## Execution Pipeline
`![TikZ Diagram](/attachments/tikz-1b98f2822dcd7b24af047cf1e054c455.svg)`

## Processing Stages
- **Parsing and Translation**: Validates syntax, verifies table references against system meta-data, and translates [SQL](/notes/sql) into an internal, mathematical [Relational Algebra](/notes/relational-algebra) representation.
- **Optimization**: The critical phase where the DBMS evaluates multiple execution strategies and selects the most efficient data retrieval path.
- **Evaluation**: The execution engine strictly follows the chosen plan, interacting with [Database Indexing](/notes/database-indexing) and physical storage to retrieve the requested tuples.

## Optimization Mathematics
The optimizer applies mathematical equivalence rules to transform queries into computationally cheaper forms. A core principle is reducing the dataset size as early as possible (e.g., pushing selections down the query tree before joins):
$$
\begin{aligned}
\sigma_{c_1 \land c_2}(R) &\equiv \sigma_{c_1}(\sigma_{c_2}(R)) \\
\sigma_{c}(R \bowtie S) &\equiv \sigma_{c}(R) \bowtie S \quad \text{(if condition } c \text{ only applies to } R)
\end{aligned}
$$

## Optimization Strategies
Because evaluating every possible execution tree is computationally impossible for complex queries, databases branch this workload into specialized methodologies:
- [Heuristic Query Optimization](/notes/heuristic-query-optimization) - Uses strict, rule-based algebraic rewrites to restructure queries regardless of current data distribution.
- [Cost-Based Optimization](/notes/cost-based-optimization) - Utilizes statistical metadata to mathematically estimate and compare the disk I/O and CPU costs of different execution plans.
