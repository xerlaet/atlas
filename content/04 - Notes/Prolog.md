# Prolog
---

Unification is when two logical terms are assigned values

assert(newfact(k)) adds a new fact or rule
retract(oldfact(k)) removes a fact or rule
functor(f(a,b),F,A) F = f, A = 2
arg(2,lovese(r,s),X) X = s
parent(a,X)=..L K = [parent,a,X]
setof/3 (template, goal, list) - returns all unique values of template in a sorted list
nonvar(its a bound variable, constant like that)

! cut makes prolog commit to the choices so no backtracking
atom(a)=True
number(10 or 3.14) = true
integer
atomic(atom or number)


---

A **fact** is an unconditional truth

```prolog
father(abraham, isaac).
```

A **rule** is a conditional truth

```prolog
% head :- body
parent(X,Y) :- father(X,Y).
```

A **query** asks whether a certain fact is true based on the programmed facts and rules

```prolog
?- father(abraham, isaac).
yes.
```

The entity being asserted or questioned is known as the **goal**

Prolog gives operational semantics to logical statements

Each statement in prolog (facts, rules, and queries) are **horn clauses** ($p$, $\neg q_{1} \lor \neg q_{2} \dots \neg q_{n} \lor p$, $\neg \text{Th}$)

A horn clause is a statement with at most 1 positive literal, negation as failure can produce a non horn clause

### Negation as Failure
```prolog
p :- q, \+ r, s.

\+ p :- p,!,fail.
\+ _.

x=1,\+(x=2) is true, \+(x=2),x=1 is false
```

```prolog
disjoint(Xs,Xy) :- \+ (member(X,Xs), member(X,Xy)).
```

### Cuts
cut is sensitive to order of execution - so negation as failure is only sound for ground goals. Constructive negation can solve this issue

SLD RESOLUTION

Removing a green cut won't change the meaning of the program, removing a red cut will
```prolog
min(X,Y,X) :- X =< Y.
min(X,Y,Y) :- X > Y.

min(X,Y,X) :- X =< Y, !. %red cut, ?-min(2,7,7)=true
min(X,Y,Y).

min(X,Y,Z) :- X =< Y, !, Z=X. %green cut
min(X,Y,Y).
```

Resolution rule

### Variables
Variables must start with an uppercase letter

The query `father(abraham, X)?` will **substitute** X for all possible matching queries, and in this case return `{X=isaac}`

Variables can also be used to create universal facts, such as `times(0,X,0).`

Variables such as in `foo(X)` are **nonground**, whereas `foo(a,b)` is **ground**

### Rules
Rules are a way of abstracting complex relations into simpler ideas

[Execution of Prolog](/notes/execution-of-prolog)
[Prolog Built-ins](/notes/prolog-built-ins)

## Examples

```prolog
sub1(N,M) % M = N - 1

plus(0,N,N).
plus(S(N),M,S(R)) :- plus(N,M,R)

times(0,N,0).
times(S(N),M,S) :- times(N,M,R), plus(R,M,S).
```

### Lists
```prolog
car([Head|_],Head).

member(X,[X|_]).
member(X,[_|T]) :- member(X,T).

app2([],L,L).
app2([X,T],L,[X|Z]) :- app2(T,L,Z).

rev([],[]).
rev([H|T], A) :- rev (T,R), append(R, [H], A).

rev(L,R) :- rev(L,[],R).
rev([],P,P).
rev([H|T],P,R) :- rev(T,[H|P],R).

sumlist([],0).
sumlist([H|T],S) :- sumlist(T,S1),S is H+S1.

% another way of doing it for tail recursion
sumlist(L,S) :- sumlist(L,0,S).
sumlist([],P,P).
sumlist([H|T],P,S) :- P1 is P+H, sumlist(T,P1,S).

isort([],[]).
isort([H|T],L) :- isort(T,L1),insert(H,L1,L).

% tail recursive
isort(Li,L) :- isort(Li,[],L).
isort([],P,P).
isort([H|T],P,L) :- insert(H,P,P1), isort(T,P1,L).
```

---

LIPS - logical inferences per second - similar to FLOPS

Data log - prolog w/ only constants & vars as args of predicates
Prolog with one arg. structures: succ arithmetic s(N)
Prolog with two arg. structures: list (H,T)
Prolog with N arg. structures: trees, student rec

```prolog
tmember(N,node(N,_,_)).
tmember(N,node(M,L,R)) :- N < M, tmember(N,L).
tmember(N,node(M,L,R)) :- N >= M, tmember(N,R).
```

```prolog
preorder(node(N,L,R), list) :- preorder(L,list1),
								preorder(R,list2),
								append(list1,[N|list2],list).

ordered([]).
ordered([H]).
ordered([H1,H2|T]) :- H1<=H2, ordered([H2|T]).

tinsert(N,nil,node(N,nil,nil)).
tinsert(N,node(M,L,R),node(M,L1,R)) :- N<M, tinsert(N,L,L1).
tinsert(N,node(M,L,R),node(M,L,R1)) :- N>=M, tinsert(N,R,R1).

```

```prolog
fac(0,1).
fac(N,M) :- N>0,N1 is N-1, fac(N1,M1), M is N*M1.

% tail recursive
fac(N,M) :- fac(N,1,M).
fac(0,P,P).
fac(N,P,M) :- N>0, N1 is N-1, P1 is P*N, fac(N1,P1,M).
```

Useful for big data:
```prolog
map('+1',[1,3,5,7]) -> [2,4,6,8]
reduce('+',0,[1,3,5,7]) -> 16 % 0+1+3+5+7
```

higher order functions because they take other functions as arguments

```prolog
map(P,[],[]).
map(P,[H|T],[A|R]) :- call(P(H,A)), map(P,T,R).
```

```prolog
% every element is even
checkeven([]).
checkeven([X]) :- X mod 2 == 0.
checkeven([X|T]) :- X mod 2 == 0, checkeven(T).
```
