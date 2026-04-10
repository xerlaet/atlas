# Hash-Based Indexing
---

**Hash-Based Indexing** is a technique where a deterministic algorithm maps search keys directly to specific disk block addresses, known as buckets. This bypasses structural tree traversal entirely, providing highly efficient point lookups for database queries.

## Architectural Flow
`![TikZ Diagram](/attachments/tikz-8b2797590c7bc2341faa9fbc7d79fbd9.svg)`

## Hashing Strategies
- [Static Hashing](/notes/static-hashing): The number of primary data buckets is fixed. Prone to bucket overflow and performance degradation as the database grows.
- [Extendible Hashing](/notes/extendible-hashing): A dynamic structure using a directory of pointers. It splits buckets and doubles the directory size locally when overflows occur.
- [Linear Hashing](/notes/linear-hashing): A dynamic technique that allows the number of buckets to grow linearly without requiring a central directory, using a split pointer to manage expansions.

## Mathematical Complexity
A well-designed hash index guarantees constant time complexity for point queries, independent of the total number of records $N$. However, because the data is effectively randomized across buckets, it cannot perform range queries.
$$
\begin{aligned}
\text{Point Query} &= O(1) \\
\text{Range Query} &= O(N)
\end{aligned}
$$

## Operational Context
- **Collision Management**: When multiple keys map to the same bucket, databases resolve this using overflow chaining (creating linked lists of blocks).
- **Use Case Restrictions**: Unlike [B+ Trees](/notes/b-trees), hash indexes strictly only support equality conditions (e.g., `WHERE id = 5`), rendering them entirely useless for inequality bounds (e.g., `WHERE id > 5`).
