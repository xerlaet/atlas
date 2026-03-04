---
tags:
  - markdown
---
# Markdown Examples
---

## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

[Temp](/notes/temp)
[Also Temp](Temp.md)

## Links and Tags
tags: #markdown
external link: [Link to Obsidian Help](https://help.obsidian.md/)
internal link: [Markdown Examples](/notes/markdown-examples)
broken link: [Ghost Page](/notes/ghost-page)

## Text
normal text
**bold text**
*italicized text*
***bold and italicized***
~~strikethrough~~
==highlighted==

> this is a quote 
> \- by bob, 1973

## Lists and Tables
- 1 thing
- 2 thing
- 3 thing

1. this is a numbered list
2. next number
3. third number

- [ ] this is a checklist
- [x] OK yep

| header | another section | last section |
| :----- | :-------------: | -----------: |
| 2      | 3               | 4            |
| entry  | next entry      | third entry  |
| 2      | 3               | 4            |
| entry  | next entry      | third entry  |

## Code
%% this is a comment %%
This is some code `print("hello")`
This is a code block[^1] with a footnote

```python
# A basic function
def func(param):
	text = "string"
	num = 10.0
	boolean = True
	
	for i in range(len(param)):
		text += str(i)
	return {
		"text": text,
		"boolean": False
	}
	
# Example function call
result = func("test")
print(result)
```

## LaTeX
Some math
$$
\begin{vmatrix}a & b\\
c & d
\end{vmatrix}=ad-bc
$$
This is an inline math expression $e^{2i\pi} = 1$.
[MathJax extensions](https://docs.mathjax.org/en/latest/input/tex/extensions/index.html)

## Callouts

> [!default]
> text

> [!abstract]
> text

> [!info]
> text

> [!todo]
> text

> [!tip]
> text

> [!success]
> text

> [!question]
> text

> [!warning]
> text

> [!failure]
> text

> [!danger]
> text

> [!bug]
> text

> [!example]
> text

> [!quote]
> text

> [!ai]
> something


[^1]: That code block was cool!!
