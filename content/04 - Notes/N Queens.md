# N Queens
---

Place $n$ queens on a chessboard of size $n\times n$ such that no two queens are able to kill each other

The optimal solution is to user forward checking and prune out untenable choices at every choice of where a queen should be in a column, and still have backtracking when needed

```prolog
queens(N, Queens) :- range(1,N,Ns), perm(Ns, Qs), safe(Qs).

safe([Q|Qs]) :- safe(Qs), \+ attack(Q,Qs).
attack(X,Xs) :- attack(X,1,Xs).
attack(X,N,[Y|Ys]) :- X is Y+N; X is Y-N.
attack(X,N,[Y|Ys]) :- N1 is N+1, attack(X,N1,Ys).
```

```prolog
queens(N, Queens) :- range(1,N,Ns), queens(Ns,[],Queens).
queens(UnplacedQs,SafeQs,Qs) :-
	select(Q,UnplacedQs,Qs1),
	\+ attack(Q,SafeQs),
	queens(Qs1,[Q|SafeQs],Qs).
queens([],Qs,Qs).
```
