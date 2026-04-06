# Relational Model
---

The **Relational Model** is a foundational mathematical approach to structuring data using relations (tables) consisting of rows and columns. Introduced by E.F. Codd, it completely separates physical data storage from logical data representation and forms the basis for all [Relational Database Management Systems](/notes/relational-database-management-systems).

## Structural Anatomy
`![TikZ Diagram](/attachments/tikz-0dfb00f95a3c648d353c7024c6a65c54.svg)`

## Core Components
- **Relation**: A mathematical term defining a two-dimensional table of data.
- **Tuple**: A single row representing a specific entity instance. The order of tuples is mathematically irrelevant.
- **Attribute**: A named column representing a specific property of the entity.
- **Domain**: The predefined set of allowable values (data types and formats) for an attribute.

## Integrity Constraints
- **Key Constraints**: Defines unique identifiers for tuples. A **Primary Key** strictly prevents duplicate records.
- **Entity Integrity**: Dictates that no primary key attribute can hold a null value, ensuring every tuple is uniquely identifiable.
- **Referential Integrity**: Maintains logical consistency between relations using [Foreign Keys](/notes/foreign-keys), ensuring that a record referencing another table strictly maps to an existing tuple.

## Mathematical Formulation
A relation $R$ of degree $n$ defined over domains $D_1, D_2, \dots, D_n$ is a subset of the Cartesian product of those domains:
$$
\begin{aligned}
R \subseteq D_1 \times D_2 \times \dots \times D_n
\end{aligned}
$$

## Related Operations
- **Data Manipulation**: The theoretical framework for querying these tables is formalized in [Relational Algebra](/notes/relational-algebra).
- **Design Optimization**: Relations are systematically refined to eliminate data anomalies through [Database Normalization](/notes/database-normalization).