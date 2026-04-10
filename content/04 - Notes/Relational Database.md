# Relational Database
---

A **Relational Database** is a software system that implements the mathematical [Relational Model](/notes/relational-model) to store and query data. Data is organized into collections of two-dimensional tables (relations) that can be linked or queried based on shared data attributes.

## System Architecture
![TikZ Diagram](/attachments/tikz-9c184a043d1b096d6e85c7fd50f6bafa.svg)

## Core Properties
- **ACID Compliance**: Relational databases guarantee transaction integrity through Atomicity, Consistency, Isolation, and Durability.
- **SQL (Structured Query Language)**: The standardized declarative language used to manage and query relational data.
- **Schema Enforcement**: Relational databases enforce a rigid structural schema (column types, constraints) on write operations.

## Related Concepts
- [Database Normalization](/notes/database-normalization) - The structural design process for relational tables.
- [Database Indexing](/notes/database-indexing) - The underlying data structures (like [B+ Trees](/notes/b-trees)) used to optimize relational queries.
