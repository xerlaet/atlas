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

```tikz
\begin{document}

\noindent
\begin{minipage}[t]{0.35\textwidth}
\vspace{0pt} % Ensures alignment at the top
\begin{tikzpicture}[scale=.65]
\node[yshift=1cm] {$x=(2+3)*5$};
\node {assign}
    child {node {id}
		child {node {$x$}}
	}
    child {node {$=$}}
    child {node {expr}
	    child {node {term}
		    child {node {term}
			    child {node {factor}
				    child {node {$($}}
				    child {node {expr}
					    child {node {expr}
						    child {node {term}
							    child {node {factor}
								    child {node {id}
									    child {node {$2$}}
								    }
							    }
						    }
					    }
					    child {node {$+$}}
					    child {node {term}
						    child {node {factor}
							    child {node {id}
								    child {node {$3$}}
							    }
						    }
					    }
				    }
				    child {node {$)$}}
				}
		    }
		    child {node {$*$}}
		    child {node {factor}
			    child {node {id}
				    child {node {$5$}}
			    }
		    }
	    }
    };
\end{tikzpicture}
\end{minipage}

\hfill

\begin{minipage}[t]{0.35\textwidth}
\vspace{0pt} % Ensures alignment at the top
\begin{tikzpicture}[scale=.65]
\node[yshift=1cm] {$x=2+3*5$};
\node {assign}
	child {node {id}
		child {node {$x$}}
	}
	child {node {$=$}}
	child {node {expr}
		child {node {expr}
			child {node {term}
				child {node {factor}
					child {node {id}
						child {node {$2$}}
					}
				}
			}
		}
		child {node {+}}
		child {node {term}
			child {node {term}
				child {node {factor}
					child {node {id}
						child {node {$3$}}
					}
				}
			}
			child {node {$*$}}
			child {node {factor}
				child {node {id}
					child {node {$5$}}
				}
			}
		}
	};
\end{tikzpicture}
\end{minipage}
\end{document}
```

grammar problems happen at compile time, meaning problems happen at run time

variables have an expected attribute and an actual attribute, and they should agree
