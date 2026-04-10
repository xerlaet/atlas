# B+ Trees
---

A **B+ Tree** is a self-balancing tree data structure widely used in [Database Management Systems](/notes/database-management-systems) for indexing. Unlike standard [B-Trees](/notes/b-trees), all data records or pointers are stored exclusively in the leaf nodes, which are linked together to facilitate highly efficient sequential access.

## Structural Overview
`![TikZ Diagram](/attachments/tikz-b266a02e0b979bdfd6a898c98e634ab8.svg)`

## Database Design Benefits
- **High Fanout**: Internal nodes only store routing keys (no data payloads), allowing more keys per disk page. This minimizes tree height and drastically reduces [Disk IO Operations](/notes/disk-io-operations).
- **Sequential Reads**: The linked list connecting leaf nodes makes range queries highly optimal. The database simply traverses down to the starting key and scans horizontally.
- **Predictable Performance**: Because all data resides at the exact same depth, search times are uniform across the entire dataset.

## Mathematical Performance
Given $N$ total records and a branching factor (order) $b$, the time complexities are highly logarithmic. For range queries involving $K$ elements, the horizontal linked-list scan requires linear time relative only to the return size:
$$
\begin{aligned}
\text{Search / Insert / Delete} &= O(\log_b N) \\
\text{Range Query Scan} &= O(\log_b N + K)
\end{aligned}
$$

## Related Database Architecture
- [Database Indexing](/notes/database-indexing): The primary application of B+ Trees, heavily utilized in systems like PostgreSQL and MySQL InnoDB.
- [Clustered Indexes](/notes/clustered-indexes): A specialized B+ Tree where the leaf nodes store the actual table row data rather than just pointers.
- [Write-Ahead Logging](/notes/write-ahead-logging): Used in conjunction with B+ Trees to ensure tree modifications survive system crashes.
