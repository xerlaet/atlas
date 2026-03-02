# Knowledge Representation
---

**Knowledge Representation** is the task of representing information about the world such that computer systems can solve tasks

Doing this on a large scale is highly subjective and imperfect requiring **ontological engineering**

```tikz
\begin{document}
\begin{tikzpicture}[
  font=\sffamily\scriptsize,
  every node/.style={align=center, text width=1.25cm},
  level 1/.style={sibling distance=7cm},
  level 2/.style={sibling distance=1.5cm},
  level 3/.style={sibling distance=2.5cm},
  level 4/.style={sibling distance=1cm}
]

\node {Anything}
  child { node {Abstract Objects}
    child { node {Sets}
      child { node {Categories} }
    }
    child { node {Numbers} }
    child { node {Representational Objects}
      child { node {Sentences} }
      child { node {Measurements}
	    child { node {Times} }
        child { node {Weights} }
      }
    }
  }
  child { node {Generalized Events}
    child { node {Intervals}
      child { node {Moments} }
    }
    child { node {Places} }
    child { node {Physical Objects}
      child { node {Things}
        child { node (anim) {Animals} }
        child { node (agnt) {Agents} }
      }
      child { node {Stuff}
	    child { node {Solid} }
	    child { node {Liquid} }
	    child { node {Gas} }
      }
    }
    child { node {Processes} }
  };

% Manual placement for "Humans" to show dual inheritance
\path (anim) -- (agnt) node [midway, below=1.31cm] (hum) {Humans};
\draw[] (anim) -- (hum);
\draw[] (agnt) -- (hum);

\end{tikzpicture}
\end{document}
```

This is similar to [[Object-Oriented Programming]]

Organization of objects into **categories** is important. Turning a proposition into an object is **reification**

Categories organize knowledge through **inheritance**. Subclass relations are organized as **taxonomies**, such as the Dewey Decimal system or organization of living species

An **exhaustive decomposition** is known as a **partition**

There's also **composite objects**, and if the sub parts have no relation then it's a **bunch**

A challenge arises often with real world **natural kind** categories such as a tomato. Most tomatoes are dull scarlet, roughly spherical with an indent on the top, about two to four inches in diameter. However there is variation in color or size, and perhaps texture. Overall things exhibit fuzziness

Even logical definitions like a bachelor as an unmarried adult male are suspect - as that would imply the Pope is a bachelor. Which technically is true but has false implications

**Intrinsic** properties remain (like density) when something is subdivided, **extrinsic** properties don't (like size)

**Propositional attitudes** can represent mental objects

**Modal logic** is concerned with the modality of truth (P or not P)

To help with modal logic a collection of **possible worlds** is used, related by **accessibility relations**

**Semantic networks** provide graphical aids for visualizing a knowledge base, **description logic** provide a formal language for constructing and combining category definitions

Often there exists defaults that can then be overridden by a specific value (such that humans by default have two legs)

In a closed world assumption if a proposition is not mentioned in the KB, then $KB \vDash \neg\alpha$

An open world assumption exhibits **non monotonicity**

**Truth maintenance systems** (TMSs) are designed to handle complications with properly revising beliefs based on net evidence to account for inferred beliefs from now incorrect assumptions

One way to do this is to annotate each sentence with a justification (JTMS system) consisting of the set of sentences from which it was inferred - then if any of those sentences are removed the justification will fail

Another way is an assumption based system (ATMS), keeping track of all states ever considered and making assumptions

These truth systems provide a mechanism to general explanations easily

