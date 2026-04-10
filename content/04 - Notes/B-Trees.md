# B-Trees
---

A **B-Tree** is a generalized, self-balancing search tree designed to maintain sorted data and allow for efficient insertion, deletion, and search operations. Unlike [B+ Trees](/notes/b-trees), B-Trees store the actual data payloads alongside routing keys within both internal nodes and leaf nodes.

## Structural Overview
`![TikZ Diagram](/attachments/tikz-ac1cf0d707f5dbd024518bbe269d9f82.svg)`

## Core Characteristics
- **Early Termination**: Point queries can terminate at internal nodes if the exact key is found early, occasionally saving [Disk IO Operations](/notes/disk-io-operations) for frequently accessed central keys.
- **Lower Fanout**: Because internal nodes carry heavy data payloads, each node can hold fewer routing keys. This reduces the branching factor and results in a structurally taller tree compared to [B+ Trees](/notes/b-trees).
- **Complex Range Queries**: Leaf nodes are not sequentially linked. Performing range queries requires an expensive in-order tree traversal involving continuous vertical movement between nodes.

## Mathematical Performance
For a B-Tree of order $m$ containing $N$ total keys, the tree remains perfectly balanced, guaranteeing logarithmic time complexity for standard operations:
$$
\begin{aligned}
\text{Search / Insert / Delete} &= O(\log_m N) \\
\text{Space Complexity} &= O(N)
\end{aligned}
$$

## Computing Context
- [Binary Search Trees](/notes/binary-search-trees): B-Trees act as generalized BSTs that permit more than two children per node, heavily optimizing block-based storage reads.
- [File Systems](/notes/file-systems): Historically favored in file system design (such as NTFS or older HFS), where directory metadata and file records are stored directly within the internal nodes of the tree.
- [Database Indexing](/notes/database-indexing): Largely superseded by [B+ Trees](/notes/b-trees) in modern databases due to the necessity of efficient sequential range scans.
