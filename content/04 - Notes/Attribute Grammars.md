# Attribute Grammars
---
An **attribute grammar** is an extension of a context-free grammar:


Each grammar symbol has a set of attribute values
Each rule has a set of functions defining certain attributes of the non-terminals
- Synthesized attributes are bottom-up
- Inherited attributes are top-down
Each rule has a set of predicates to check for attribute consistency

## Use Case
Attribute grammars are useful


>[!example]

```
<assign> -> <var> = <expr>
<expr>   -> <var> + <var> | <var>
<var>    -> a | b | c
```

![[Pasted image 20250212122900.png]]

![[Pasted image 20250212122929.png]]

