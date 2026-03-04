# Recurrence Relations
---

A **Recurrence Relation** is an equation that recursively defines a sequence, with each term being a function of preceding terms

## Usage in Algorithmic Analysis
This type of recurrence is used to find the [Time Complexity](/notes/time-complexity) of algorithms. They typically have the form $T(n)=aT\left( \frac{n}{b} \right)+f(n)$

These recurrence relations can be solved with various methods:
[Substitution Method](/notes/substitution-method)
[Iteration Method](/notes/iteration-method)
[Recursion Tree Method](/notes/recursion-tree-method)
[Master Theorem](/notes/master-theorem)

## Usage in Discrete Mathematics
This type of recurrence is often used to model population growth or solve puzzles like the Tower of Hanoi. They typically have the form $a_{n}=c_{1}a_{n-1}+c_{2}a_{n-2}+\dots+f(n)$

[Linear Recurrence Relations](/notes/linear-recurrence-relations)
[Generating Functions](/notes/generating-functions) are a method to represent and solve sequences

An **arithmetic sequence** has the form $a_{n}=a_{n-1}+d$
A **geometric sequence** has the form $a_{n}=a_{n-1} \cdot r$
