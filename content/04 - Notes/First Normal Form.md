# First Normal Form
---

**First Normal Form** (1NF) is the foundational requirement for [Database Normalization](/notes/database-normalization). A table is in 1NF if and only if every attribute contains strictly atomic (indivisible) values, and there are no repeating groups or arrays within a single column.

## Structural Transformation
![TikZ Diagram](/attachments/tikz-f974e38a68e8a12ba305212a4b7c9dc6.svg)

## Core Rules
- **Atomicity**: Each cell must hold exactly one value. Nested tables, JSON blocks, or comma-separated lists violate this rule.
- **Uniformity**: Values in a column must be of the same domain/type.
- **Uniqueness**: Every row must be uniquely identifiable (requires a Primary Key).

## Progression Context
A table must meet the criteria of 1NF before it can be evaluated for [Second Normal Form](/notes/second-normal-form). Flattening multi-valued attributes often introduces data redundancy, which subsequent normal forms exist to resolve.
