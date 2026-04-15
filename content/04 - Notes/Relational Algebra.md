# Relational Algebra
---

**Relational Algebra** is a 

the complete set is $\{ \sigma,\pi,\rho,\cup,-,\times \}$
not required but useful derived operations are $\{ \cap, \bowtie, \}$

## Operations from Set Theory
[Set Theory](/notes/set-theory)
**UNION** ($\cup$)
**INTERSECTION** ($\cap$)???
**MINUS** ($-$)
**CARTESIAN PRODUCT** ($\times$)

## Unary Relational Operators
**SELECT** ($\sigma$) selects rows from a relation satisfiying a condition
$$
\sigma_{\text{selection condition}}(R)
$$

**PROJECT** ($\pi$) selects columns from a relation
$$
\pi _{\text{attribute list}}(R)
$$

**RENAME** ($\rho$) renames the relation ($S$) and/or attributes ($B_{n}$)
$$
\rho _{S(B_{1},B_{2},\dots,B_{n})}(R) \text{ or } \rho _{S}(R) \text{ or } \rho _{(B_{1},B_{2},\dots,B_{n})}(R)
$$

## Binary Relational Operators
**JOIN** ($\bowtie$) joints two relations
$$
R \bowtie_{\text{join condition}}S
$$

**THETA JOIN** ($\theta$) joins two relations based on attributes with the same domain
$$
A_{i}\theta B_{j},\theta \in \{ =,<,\leq ,>,\geq ,\neq  \}
$$

**NATURAL JOIN** ($*$) joins two relations automatically?

**DIVISION** ($\div$) gives the attributes unique to $R$ that are part of a tuple in $S$
$$
R \div S
$$

## Query Trees
A **query tree** is a tree representation of a query showing how a database would process it


## Examples
Ex. Select tuples from EMPLOYEE table whose salary is greater than $25,000 and department number is 4
$$
\sigma _{(\text{Dno}=4 \text{ AND }\text{Salary}>25,000)}(\text{EMPLOYEE})
$$
```sql
SELECT *
FROM   EMPLOYEE
WHERE  Dn0=4 AND Salary>25000;
```

Ex. Select the sex and salary columns from the EMPLOYEE table
$$
\pi _{\text{Sex, Salary}}(\text{EMPLOYEE})
$$
```sql
SELECT DISTINCT Sex, Salary
FROM            Employee
```

Relational Calculus

























































**Relational Algebra** is a procedural query language that provides a theoretical foundation for the [Relational Model](/notes/relational-model). It consists of a set of mathematical operations that take one or more relations as input and produce a new relation as output, serving as the formal basis for [SQL](/notes/sql) optimization.

## Query Tree Structure
`![TikZ Diagram](/attachments/tikz-df46930657b6d7b76793e8d36e48afb9.svg)`

## Fundamental Operations
- **Select** ($\sigma$): Filters tuples based on a boolean predicate (horizontal subsetting).
- **Project** ($\pi$): Filters columns to retain only specific attributes (vertical subsetting).
- **Union** ($\cup$): Combines tuples from two union-compatible relations.
- **Set Difference** ($-$): Identifies tuples present in the first relation but absent in the second.
- **Cartesian Product** ($\times$): Combines every tuple of one relation with every tuple of another.
- **Rename** ($\rho$): Assigns a new name to a relation or its attributes to resolve naming conflicts.

## Derived Operations
- **Natural Join** ($\bowtie$): Combines relations based on shared attribute names and equality.
- **Intersection** ($\cap$): Returns tuples common to both relations.
- **Division** ($\div$): Evaluates "for all" conditions (e.g., finding students who took all courses).

## Mathematical Syntax
Operations are nested to create complex queries. The following example retrieves names of employees in the "Research" department:
$$
\begin{aligned}
\text{Step 1: } & \text{ResearchDept} \leftarrow \sigma_{\text{Dname='Research'}}(\text{DEPARTMENT}) \\
\text{Step 2: } & \text{Joined} \leftarrow \text{EMPLOYEE} \bowtie_{\text{Dno=Dnumber}} \text{ResearchDept} \\
\text{Result: } & \pi_{\text{Fname, Lname}}(\text{Joined})
\end{aligned}
$$

## Execution Context
- **Optimization**: Relational Algebra is used by the DBMS during [Query Processing](/notes/query-processing) to restructure expressions into more efficient forms.
- **Completeness**: A language is "Relationally Complete" if it can express any query representable in these fundamental algebraic operations.
