# Grammar
---

A grammar is ambiguous iff the same the same sentential form generates two or more parse trees

A single parse tree may still have multiple derivations

```
<expr> -> <expr> + <expr> | <var> // ambiguous
<expr> -> <var> + <expr> | <var> // unambiguous
<var> -> a | b | c
```

## Operator Precedence
Below is an example of an unambiguous grammar that forces operator precedence

```grammar
<assign> -> <id> = <expr>
<expr> -> <expr> + <term> | <term>
<term> -> <term> * <factor> | <factor>
<factor> -> ( <expr> ) | <id>
<id> -> a | b | c
```

![TikZ Diagram](/attachments/tikz-ae0fe113005eea2a19badbb2bf7b3554.svg)

grammar problems happen at compile time, meaning problems happen at run time

variables have an expected attribute and an actual attribute, and they should agree
