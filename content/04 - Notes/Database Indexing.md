# Database Indexing
---

**Database Indexing** is an auxiliary data structure technique used to rapidly locate and access specific data within a [Relational Model](/notes/relational-model) without scanning every row. It drastically improves read query performance at the computational cost of slower write operations and increased storage overhead.

## Index Mechanics
`![TikZ Diagram](/attachments/tikz-35065fb9af0cc94dcbf8367b8bc66333.svg)`

## Core Classifications
- **Primary Index**: Created on an ordered data file using the primary keys of the relation.
- **Secondary Index**: Created on non-key attributes to support specific queries, requiring separate pointer structures.
- **Dense Index**: Contains a distinct index entry for every search key value in the database.
- **Sparse Index**: Contains index entries for only a subset of search key values, heavily relying on the underlying physical ordering of the data.

## Performance Mathematics
Without an index, querying a table stored across $N$ disk blocks requires a linear scan. Implementing a tree-based index drastically reduces block accesses to a logarithmic time complexity, where $b$ is the tree's fan-out:
$$
\begin{aligned}
\text{Cost}_{\text{scan}} &= O(N) \\
\text{Cost}_{\text{index}} &= O(\log_b N)
\end{aligned}
$$

## Implementation Structures
Different access patterns require specialized underlying data structures. 
- [B+ Trees](/notes/b-trees) - Balanced tree structures highly optimized for sequential disk-based range scans.
- [Hash-Based Indexing](/notes/hash-based-indexing) - Key-value generation for theoretical constant-time exact match lookups.
