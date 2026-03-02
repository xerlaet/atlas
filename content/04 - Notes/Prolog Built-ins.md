# Prolog Built-ins
---

## Lists
```prolog
member(Element,List).
append(List1,List2,List1AndList2).
select(Element,List1,List2). % List2 is List1 without Element
reverse(List1,ReverseOfList1).
permutation(Xs,Ys). % find all Ys that are permutations of Xs
flatten(NestedList,FlatList).
sum_list(List,Sum).

intersection(Set1,Set2,Intersection).
union(Set1,Set2,Union).
```

