# Automated Planning
---

**Classical planning** is the task of finding a sequence of actions to accomplish a goal given a discrete, deterministic, static, and fully observable environment

The problem with this is that traditional agents require ad hoc heuristics for each new domain and need to represent an exponentially large state space

A solution is **Planning Domain Definition Language** (PDDL) which is a factored representation, made up of an initial and goal state and actions specifying preconditions and effects
- it only explicitly lists fluents that change, others remain unchanged

**Forward State-Space Search** starts with the initial state and uses the actions to achieve possible states, **unifying** variables as it goes. This is intuitive and simple, yet requires strong domain-independent heuristics to search efficiently

**Backward State-Space Search** starts with the goal and works backward

Another approach is to transform the planning problem into a [[Constraint Satisfaction Problems|SAT problem]] and use a SAT solver. While the translation is much larger, efficiency of modern SAT solvers make up for the size - alternatively make it a [[Constraint Satisfaction Problems]]

Also **partial-order planning** - it isn't used as much but the idea is to represent the plan as a graph instead of a linear sequence

The **subgoal independence** assumption is that the cost of solving a conjunction of subgoals is approximated by the sum of the costs of solving each subgoal
- In reality subgoals are rarely independent
- The assumption is optimistic (admissible) when it underestimates $h(n)\leq h^{*}(n)$
- The assumption is pessimistic (inadmissible) when it overestimates $h(n)>h^{*}(n)$

In the planning graph, literals, actions, and level cost of goal increase monotonically. Mutexes and no-goods decreases monotonically

A **fluent** is a function or relation that can very from one situation to the next


## Heuristics for Planning
ignore-preconditions: or perhaps only ignore some of them

ignore-delete-lists heuristic: remove literals with negative effects, meaning only monotonic progress towards the goal is made. An approximate solution can be found in polynomial time with hill climbing

Domain independent pruning includes symmetry reduction to prune symmetric branches. Serializable subgoals is the idea that some goals will never have to be undone (getting c on the table in blocks world). NASA's Deep Space One spacecraft used this approach to allow real time control

**State abstraction** is a many-to-one mapping often by ignoring some fluents (ex. treat all packages in an airport as one)

Decomposition can be important and subgoal independence is when subgoals can be solved independently decreasing the search size

## Hierarchical Planning
[[Hierarchical Planning]]

Contingent plans allow the agent to sense the world and decide what branch of the plan to follow as opposed to sensorless or conformant planning which rely on **belief states**

Online planning can recover as needed with monitoring

Many actions consume resources such as money, gas, or raw materials. Often it is easier to think of these as a pool to take from

## Example
```tikz
\usetikzlibrary{positioning}
\begin{document}
\begin{tikzpicture}[
    block/.style={draw, minimum width=1.5em, minimum height=1.5em},
    table/.style={draw, minimum width=6em, minimum height=0.5em}
]

% Start State
\node[table] (Table_Start) at (0, 0) {};
\node[below=0.3em of Table_Start] {Start State};

\node[block, above=0.1em of Table_Start] (A_start) {A};
\node[block, above=0.1em of A_start] (C_start) {C};
\node[block, left=0.5em of A_start] (B_start) {B};

% Goal State
\node[table] (Table_Goal) at (5, 0) {};
\node[below=0.3em of Table_Goal] {Goal State};

\node[block, above=0.1em of Table_Goal, draw=none] (Ghost) {};
\node[block, right=0.5em of Ghost] (C_goal) {C};
\node[block, above=0.1em of C_goal] (B_goal) {B};
\node[block, above=0.1em of B_goal] (A_goal) {A};

\end{tikzpicture}
\end{document}
```
$$
\begin{align}
&\textbf{Init}( \\
&\qquad\text{On}(A,Table)\land \text{On}(B,Table)\land \text{On}(C,A) \\
&\qquad\land\, \text{Block}(A)\land \text{Block}(B)\land \text{Block}(C) \\
&\qquad\land\, \text{Clear}(B)\land \text{Clear}(C)\land \text{Clear}(Table) \\
&) \\
&\textbf{Goal}( \\
&\qquad\text{On}(A,B)\land \text{On}(B,C) \\
&) \\

&\textbf{Action}( \\
&\qquad\text{Move}(b,x,y), \\
&\qquad\text{PRECOND}:\text{On}(b,x)\land \text{Clear}(b)\land \text{Clear}(y)\land \text{Block}(b)\land \text{Block}(y) \\
&\qquad\qquad\qquad\qquad \land\, b\neq x\land b\neq y\land x\neq y, \\
&\qquad\text{EFFECT}:\text{On}(b,y)\land \text{Clear}(x)\land \neg \text{On}(b,x)\land \neg \text{Clear}(y) \\
&) \\

&\textbf{Action}( \\
&\qquad\text{Move}(b,x,y), \\
&\qquad\text{PRECOND}:\text{On}(b,x)\land \text{Clear}(b)\land \text{Block}(b)\land \text{Block}(x), \\
&\qquad\text{EFFECT}:\text{On}(b,Table)\land \text{Clear}(x)\land \neg \text{On}(b,x) \\
&)
&\end{align}
$$
