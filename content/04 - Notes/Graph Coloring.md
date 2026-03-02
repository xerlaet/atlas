# Graph Coloring
---

Every map in the plane can be represented with a graph where each region is represented by a vertex, and if two regions are adjacent then their vertices will have an edge connected them

This representation is known as a **dual graph** of the map. A **coloring** of a simple graph is an assignment of a color to each vertex so that no two adjacent vertices have the same color. The **chromatic number** $\chi (G)$ of a graph is the least number of colors needed to satisfy this property

The Four Color Theorem states that the chromatic number of a planar graph is no greater than four. A non planar graph can have an arbitrarily large coloring

## Program
```prolog
% uppercase is color of the lowercase region
% [region(a,A,[B,C,D]),region(b,B,[A,C,E]),...]

colormap([],_).
colormap([Region|Regions],Colors) :-
	colorregion(Region,Colors),
	colormap(Region,Colors).
	
colorregion(region(Name,Color,Nbrs),Colors) :-
	select(Color,Colors,Colors1),
	members(Nbrs,Colors1).
	
members([],_).
members([X|Xs],Colors1) :- member(X,Colors1), members(Xs,Colors1).
```
