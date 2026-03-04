# State-Space Search Algorithms
---

Algorithms for finding a solution or path in an implicit problem space (puzzles, AI, routes)

[Types of Environments](/notes/types-of-environments)

## Uninformed Search
(Strategies that only use the problem definition and the cost to reach each node $g(n)$)
[Breadth First Search](/notes/breadth-first-search)
[Depth First Search](/notes/depth-first-search)
[Uniform Cost Search](/notes/uniform-cost-search) (minimize $g(n)$)

## Informed Search
(Strategies that use a heuristic $h(n)$ to estimate the cost to the goal)
[Greedy Best First Search](/notes/greedy-best-first-search) (minimize $h(n)$)
[A-Star Search](/notes/a-star-search) (minimize $g(n)+h(n)$)
[Recursive Best First Search](/notes/recursive-best-first-search)
[Bidirectional Search](/notes/bidirectional-search)

A heuristic is **admissible** if $h(n)\leq h^{*}(n)$, and **consistent** if $h(n)\leq c(n,n')+h(n')$
**Informedness** is the measure of how accurate a heuristic is

[MiniMax Algorithm](/notes/minimax-algorithm)

## Local Search and Optimization
(Algorithms that iteratively improve a state instead of finding a path)
[Hill Climbing](/notes/hill-climbing)
[Simulated Annealing](/notes/simulated-annealing)
[Beam Search](/notes/beam-search)

## Constraint Satisfaction Problems
[Constraint Satisfaction Problems](/notes/constraint-satisfaction-problems)
