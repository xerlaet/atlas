# State-Space Search Algorithms
---

Algorithms for finding a solution or path in an implicit problem space (puzzles, AI, routes)

[[Types of Environments]]

## Uninformed Search
(Strategies that only use the problem definition and the cost to reach each node $g(n)$)
[[Breadth First Search]]
[[Depth First Search]]
[[Uniform Cost Search]] (minimize $g(n)$)

## Informed Search
(Strategies that use a heuristic $h(n)$ to estimate the cost to the goal)
[[Greedy Best First Search]] (minimize $h(n)$)
[[A-Star Search]] (minimize $g(n)+h(n)$)
[[Recursive Best First Search]]
[[Bidirectional Search]]

A heuristic is **admissible** if $h(n)\leq h^{*}(n)$, and **consistent** if $h(n)\leq c(n,n')+h(n')$
**Informedness** is the measure of how accurate a heuristic is

[[MiniMax Algorithm]]

## Local Search and Optimization
(Algorithms that iteratively improve a state instead of finding a path)
[[Hill Climbing]]
[[Simulated Annealing]]
[[Beam Search]]

## Constraint Satisfaction Problems
[[Constraint Satisfaction Problems]]
