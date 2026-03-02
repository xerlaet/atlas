# Guarded Commands
---

Proposed by [[Edsger Dijkstra]], **Guarded Commands** aim to provide control statements that ensure correctness.

An if statement has the form:
```
if <bool expr> -> <statement>
[] <bool expr> -> <statement>
[] <bool expr> -> <statement>
...
fi
```
When the if statement is reached, all boolean expressions are evaluated. If more than one is true, any can be chosen to execute. If none are true, a runtime error will occur

A loop statement has the form:
```
do <bool expr> -> <statement>
[] <bool expr> -> <statement>
[] <bool expr> -> <statement>
...
od
```
When the loop is reached, all boolean expressions are evaluated. If more than one is true, any can be chosen to execute, and then this is repeated. When all return false, the loop terminates

While guarded commands make program verification easier, the implementation has increased complexity over their conventional deterministic counterparts

## Examples
A program to find the largest of two numbers:
```
if <x >= y> -> <max := x>
[] <y >= x> -> <max := y>
fi
```

A program to sort the four variables $q_{1},q_{2},q_{3},q_{4}$:
```
do q1 > q2 -> temp := q1; q1 := q2; q2 := temp;
[] q2 > q3 -> temp := q2; q2 := q3; q3 := temp;
[] q3 > q4 -> temp := q3; q3 := q4; q4 := temp;
od
```
