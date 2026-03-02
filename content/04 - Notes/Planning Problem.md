# Planning Problem
---

From an initial state, obtain a final state

```prolog
% [on(a,b),on(b,p),on(c,r)]
% to
% [on(a,b),on(b,c),on(c,r)]

position(p). ...
block(a). ...

transform(S1,S2,Plan) :-
	transform(S1,S2,[S1],Plan). % P moves from S1 to S2 with [] visited states
	
transform(S,S,_,[]).
transform(Si,Sf,V,[A|As]) :-
	legal_move(A,Si),
	update(A,Si,S2),
	\+ member(S2,V),
	transform(S2,Sf,[S2|V],As).

legal_move(to_place(B,Y,P),State) :-
	on(B,Y,State), clear(B,State), place(P), clear(P,State).
legal_move(to_block(B1,Y,B2),State) :-
	on(B1,Y,State), clear(B1,State), block(B2), clear(B2,State).

clear(X,State) :- \+ member(on(_,X),State).
on(X,Y,State) :- member(on(X,Y),State).

to_place(a,b,q) :-
	
```


To pick a block, `on(x,a)` must not be in the list

