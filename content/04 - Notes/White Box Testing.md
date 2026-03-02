# White Box Testing
---

### Basis Path Testing
1. Construct a flow graph
2. Compute cyclomatic complexity
3. Determine basis paths
4. Check that the number of basis paths equals the cyclomatic complexity
5. Derive test cases to exercise the basis paths

**Flow Graph Notation**
![[Pasted image 20250428123209.png|400]]

[[Cyclomatic Complexity]]
![[Pasted image 20250428123249.png|400]]

A **basis path** is a path from the start node to the end node and it traverses a cycles either zero times or exactly once. Basic path coverage ensures that every basis path is executed at least once

Derive test cases either for full node coverage or full edge coverage. Full node coverage ensures that every statement is executed at least once and can detect unreachable nodes, however it may miss logical errors in specific paths and doesn't guarantee all paths are tested

### Condition Testing
Test the logical conditions in the program

### Loop Testing
![[Pasted image 20250428135241.png|600]]
