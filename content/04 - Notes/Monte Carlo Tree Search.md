# Monte Carlo Tree Search
---

From the current state,
1. select a leaf
2. expand that leaf
3. simulate that leaf by fast forwarding with perhaps random or sampled moves to see if it was good or bad
4. back propagate back up the tree

This simulation is done thousands or millions of times until a final move is chosen



Differences with minmax tree:
- it doesn't require a heuristic, it discovers positions on its own
- explores good moves more deeply than bad ones