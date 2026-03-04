# Hierarchical Planning
---

**Hierarchical Task Networks** (HTN) is an automated planning method using a library of **high-level actions** (HLAs). The HLAs represent complex tasks and are broken down into simpler primitive actions through refinement

This reduces the search complexity by creating an abstract plan first before working out all the small details

A **refinement** is a specific implementation of a HLA, defining the sequence of steps to achieve it

[Hierarchical Search](/notes/hierarchical-search) is a basic search algorithm for this:
repeatedly choose an HLA in the current plan and replace it with a refinement until the plan consists only of primitive actions

The **downward refinement property** is the idea that the plan must have at least one primitive implementation that actually achieves the goal. If it doesn't, the plan won't work

**Demonic Nondeterminism** assumes that an adversary chooses a refinement from multiple possibilities, and the effect will only be true if every possibility works. This is generally too conservative

**Angelic Nondeterminism** assumes the agent makes the choices, so only the refinement that helps to achieve the goal will be chosen

One idea here is the idea of a **reachable set** which is the set of all states reachable by any implementation of a HLA from a state
