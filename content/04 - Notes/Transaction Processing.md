# Transaction Processing
---

**Transaction Processing** manages the execution of a logical unit of database work consisting of multiple read and write operations. It ensures that a [Relational Database](/notes/relational-database) transitions reliably from one consistent state to another, effectively handling concurrent access and system failures.

## Transaction State Lifecycle
`![TikZ Diagram](/attachments/tikz-30ef3fb11fad7c80e7211c371d701996.svg)`

## ACID Properties
To ensure data integrity, every transaction must mathematically and logically guarantee four core properties:
- **Atomicity**: The "all or nothing" principle. Either every operation within the transaction completes successfully, or none of them are applied.
- **Consistency**: The execution of a transaction strictly preserves all predefined database integrity constraints.
- **Isolation**: Concurrent transactions execute as if they are running sequentially in isolation, preventing cross-interference.
- **Durability**: Once a transaction is successfully committed, its changes are permanently recorded in non-volatile storage.

## Transaction Operations Mathematics
A schedule $S$ defines the chronological execution order of Read ($R$) and Write ($W$) operations belonging to multiple transactions (e.g., $T_i$ and $T_j$). Operations conflict if they access the same data item $X$ and at least one is a write. Conflict scenarios are mathematically evaluated as:
$$
\begin{aligned}
R_i(X) &\rightarrow W_j(X) \quad \text{(Read-Write Conflict)} \\
W_i(X) &\rightarrow R_j(X) \quad \text{(Write-Read Conflict)} \\
W_i(X) &\rightarrow W_j(X) \quad \text{(Write-Write Conflict)}
\end{aligned}
$$

## System Implementation
The responsibility of enforcing the ACID properties is functionally split across two primary DBMS subsystems:
- [Concurrency Control](/notes/concurrency-control) - Prevents isolation violations using locking protocols or timestamp ordering schedules.
- [Database Recovery Techniques](/notes/database-recovery-techniques) - Guarantees atomicity and durability by utilizing system logs to undo failed transactions or redo committed ones after a crash.
