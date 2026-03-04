# Ford-Fulkerson Algorithm
---

1. Assign the flow of each edge to 0
2. Look for an **augmenting path** from $s$ to $t$ (where all edges are positive)
3. Assign a flow equal to the minimum value
4. Calculate the new **residual capacity**
5. Repeat until there are no more augmented paths

The searching algorithm isn't specified, common approaches would be [DFS](/notes/depth-first-search) and [BFS](/notes/breadth-first-search)

## Analysis
The searching methods are $O(E)$, and for each augmenting path the flow increases by at least one, so the overall complexity is $O(EF)$ where $F$ is the maximal flow of the network

## Example
![TikZ Diagram](/attachments/tikz-91a2ceb3161c85e1872b5e946bd2f891.svg)

![TikZ Diagram](/attachments/tikz-1066acab0dc53d6d13dde724089fa171.svg)
