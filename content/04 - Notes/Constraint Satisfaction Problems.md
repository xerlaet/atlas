# Constraint Satisfaction Problems
---

A **constraint satisfaction problem** (CSP) consists of three components
1. $X$ is a set of variables $\{ X_{1},\dots X_{n} \}$
2. $D$ is a set of domains for each variable $\{ D_{1},\dots D_{n} \}$
3. $C$ is a set of constraints that specify valid combinations

The goal is to **assign** values to variables $\{ X_{i}=v_{i},X_{j}=v_{j},\dots \}$

An assignment that doesn't violate any constraints is **consistent**, and **complete** when every variable has a value. Having both properties constitutes a **solution**

## Constraints
A **binary constraint** relates two variables. In this case the problem can be represented as a graph with variables as nodes and constraints as edges. All more complicated constraints can be made into binary constraints

A constraint involving an arbitrary number of variables is a **global constraint** (e.g. Alldiff)

**Preference constraints** indicate solutions that are preferred making the problem a [Constrained Optimization Problem](/notes/constrained-optimization-problem) (COP)

## Inference
CSPs have the advantage that as soon as a partial assignment is inconsistent, any further refinements can be discarded speeding up the search process

**Constraint Propagation** is the process of using constraints to reduce the legal values for a variable

A variable in a CSP is **arc-consistent** if every value in the domain satisfies the binary constraints. This can be found with [AC-3](/notes/ac-3)

This can tighten the domains, however it doesn't always solve the problem outright. A CSP is **k-consistent** if any $k$ variables can have consistent assignments, and **strongly k-consistent** if it is also $(k-n)$-consistent

Any algorithm to do this is worst case exponential complexity

Typically 2-consistency will be checked and occasionally 3-consistency

A Sudoku is a great example of a CSP problem utilizing Alldiff in particular

## Backtracking Search
When constraint propagation is finished and variables still have multiple values, a search is needed for the solution

A standard depth-limited search would branch to assign any $d$ values to $n$ variables, then $n-1$ at the next level. In total there would be $n!d^{n}$ leaves although there are only $d^{n}$ possible assignments

The factorial can be removed by recognizing that CSPs are commutative in terms of which order variables are assigned

The idea with backtracking search is to:
1. select an unassigned variable
2. give that variable a value from its domain
3. check if the new assignment is consistent with any already assigned variables
4. if a constraint is violated or there are no valid values, backtrack to the last previous variable assigned and continue on
5. If you are back at the first variable with no options left, there is no solution

The smart thing about it is that it prunes parts of the search tree that don't work

#### Heuristics
The **minimum-remaining-values** (MRV) heuristic says to pick a variable that is most likely to cause a failure soon to prune more of the search tree

The **degree heuristic** says to choose the variable with the largest number of constraints on unassigned variables to reduce branching with future choices

For value ordering we only need one solution, so the **least-constraining-value** heuristic says to assign a value that removes the fewest choices for neighboring variables

**Forward checking** is the process of checking arc-consistency for unassigned variables connected to $X$ whenever $X$ is assigned. **Maintaining Arch Consistency** (MAC) is a recursive version of this that looks ahead farther

**Backjumping** is backtracking to the most recent assignment in the conflict set (note that forward checking does the same thing)

**Constraint learning** is the idea of finding a minimum set of variables that formed a conflict, and recording them to forbid this combination again which is a major way to achieve efficiency

## Local Search
Local search turns out to be surprisingly effective

Starting with a random assignment with a bunch of conflicts, the idea is to use a **min-conflicts** heuristic which says to take a variable and reassign it to a value with minimal conflicts with other variables.

For something like the n-queens problem, the run time of min-conflicts is roughly independent of problem size!!! The million-queens problem is solved on average in 50 steps

Local search methods for graph algorithms can be used here as well in **tabu search**: keeping a small list of recently visited states and forbidding the algorithm to return to them

**Constraint weighting** concentrates the search on the important constraints. At each step the algorithm chooses a variable/value pair to change which results in the lowest total weight of all violated constraints. This ads topology and learning where the difficult constraints are assigned higher weights over time

Local search is nice because it can be used in an online setting when small changes need a different solution

## Structure of Problems
The only way to hope to deal with the real world is to decompose it into subproblems

Independent subproblems can be found by finding connected components of the constraint graph. Dividing a boolean CSP with 100 variables into four subproblems reduces the worst-case solution from the lifetime of the universe to less than a second

**Directional arch consistency** (DAC) is when every x_i is arc-consistent with every x_j for i < j
[Topological Sort](/notes/topological-sort)

Cutset conditioning is when a subset $S$ is removed such that the constraint graph becomes a tree and will be much faster to solve - perhaps this has to do with network flows for the minimum cut?

A **tree decomposition** is when
- every variable in the original problem appears in at least one node
- if two variables are constrained, they must appear together in at least one node
- if a variable appears in two nodes, it must appear in every node between them
Cutset decomposition has time $O(d^{c}(n-c)d^{2})$, whereas tree decomposition has time $o(nd^{w+1})$

time favors tree decomposition however it also requires exponential memory whereas cycle-cutset can be executed in linear memory

**Value symmetry** is when assignments can be symmetrical and can increase the search space by a factor of $d!$. A **symmetry-breaking constraint** is an arbitrary say ordering constraint that only allows one solution

It is NP-hard to eliminate all symmetry, but breaking symmetry is still important and effective

---

Question 1

5 out of 5 points



[AI-CSP] (AI-211) Assume a CSP with n variables, each with domain size at most d, and with c binary constraints (arcs). Then the worst-case time-complexity for any algorithm to check n-consistency is ___.
Correct Answer: 	
Correct

O(e^n) (that is, exponential in n)
Question 2

5 out of 5 points
	
	

[AI-CSP] ____ methods are incomplete satisfiability algorithms. They work by iteratively improving a complete assignment over the variables. At each step, a small number of variables are changed value, with the overall aim of increasing the number of constraints satisfied by this assignment.
Correct Answer: 	
Correct

local search
Question 3

5 out of 5 points
	
	

[AI-CSP] (AI-214) Applying a standard depth-first search for a CSP problem, a state would be a partial assignment where each action (generating a child node) is to assign a value (from a domain of size d) to a variable. In particular, a CSP problem is ___ if the order of application of any given set of actions has no effect on the outcome.
Correct Answer: 	
Correct

commutative
Question 4

0 out of 5 points
	
	

[AI-CSP] (AI-216) This ___ heuristic attempts to reduce the branching factor on future choices by selecting the variable that is involved in the largest number of constraints on other unassigned variables.
Correct Answer: 	
Correct

degree
Question 5

5 out of 5 points
	
	

[AI-CSP] In CSP, ____ is a technique used to check constraint satisfaction(s). More precisely, they are methods that enforce a form of local consistency.
Correct Answer: 	
Correct

constraint propagation
Question 6

5 out of 5 points
	
	

[AI-CSP] ___ is a type of inference: using constraints to reduce the number of legal values in CSP.
Correct Answer: 	
Correct

constraint propagation
Question 7

5 out of 5 points
	
	

[AI-CSP] (AI-219) In choosing a new value for a variable, the most obvious heuristic is to select the value that results in the minimum number of conflicts with other variables. This is ___ heuristics in local search for CSP.
Correct Answer: 	
Correct

min-conflicts
Question 8

5 out of 5 points
	
	

[AI-CSP] (AI-210) ____ consistency tightens down the binary constraints using implicit constraints that are inferred by looking at triples of variables.
Correct Answer: 	
Correct

path
Question 9

5 out of 5 points
	
	

[AI-CSP] (AI-209) Assume a CSP with n variables, each with domain size at most d, and with c binary constraints (arcs). Then the complexity of AC-3 algorithm for the worst case time is ___.
Correct Answer: 	
Correct

O(c*d*d*d)
Question 10

5 out of 5 points
	
	

[AI-CSP] (AI-219) The ___ method backtracks to the most recent assignment in the conflict set.
Correct Answer: 	
Correct

backjumping
Question 11

5 out of 5 points
	
	

[AI-CSP] (AI-211) A CSP is ___ if, for any set of k-1 variables and for any consistent assignment to those variables, a consistent value can always be assigned to any k-th variable.
Correct Answer: 	
Correct

k-consistent
Question 12

5 out of 5 points
	
	

[AI-CSP] (AI-208) A variable in a CSP is ___ if all the values in the variable's domain satisfy the variable's unary constraints.
Correct Answer: 	
Correct

node-consistent
Question 13

5 out of 5 points
	
	

[AI-CSP] (AI-214) ___ is used for a depth-first search that chooses values for one variable at a time and backtracks when a variable has no legal values left to assign.
Correct Answer: 	
Correct

backtracking search
Question 14

5 out of 5 points
	
	

[AI-CSP] Constraint satisfaction problems (CSP) on finite domains are typically solved using a form of search. What is not one of the most used techniques in CSP?
Correct Answer: 	
Correct

global search
Question 15

5 out of 5 points
	
	

[AI-CSP] A type of constraint which restricts the value of a single variable is ___.
Correct Answer: 	
Correct

unary constraint
Question 16

5 out of 5 points
	
	

[AI-CSP] (AI-214) Applying a standard depth-first search for a CSP problem, a state would be a partial assignment where each action (generating a child node) is to assign a value (from a domain of size d) to a variable. For a CSP with n variables of domain size d, one may generate a tree with ___ leaves.
Correct Answer: 	
Correct

O(n! * (d^n)). That is, n factorial times (d to the power of n).
Question 17

5 out of 5 points
	
	

[AI-CSP] (AI-217) This ___ heuristic can be effective in some cases as it prefers the value that rules out the fewest choices for the neighboring variables in constraint graph.
Correct Answer: 	
Correct

LCV
Question 18

5 out of 5 points
	
	

[AI-CSP] (AI-214) Applying a standard depth-first search for a CSP problem, a state would be a partial assignment where each action (generating a child node) is to assign a value (from a domain of size d) to a variable. For a CSP with n variables of domain size d, there are only ___ possible complete assignments.
Correct Answer: 	
Correct

O(d^n). That is, d to the power of n
