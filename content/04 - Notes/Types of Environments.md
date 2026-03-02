# Types of Environments
---

Episodic, single agent, fully observable, deterministic, static, discrete, and known
In partially observable or nondeterministic environments, contingency plans might be needed

States, Initial State, Actions, Transition Model, Goal State, Action cost

---

Fully vs partially observable

Single agent vs multi agent (can be competitive or cooperative or partially)

Deterministic vs non deterministic (many real situations are treated as nondeterministic for practical reasons)
- Stochastic can nondeterministic but if it deals with probabilities

Episodic vs Sequential: does the next episode depend on the actions taken in previous episodes?

Static vs Dynamic: can the environment change while the agent is thinking?
- semidynamic if the environment doesn't change but the score does (chess with a clock)

Discrete vs continuous: chess has discrete percepts and actions, taxi driving doesn't

Known vs unknown: does the agent(or designer) know the "laws of physics" for the environment? - not strictly a property of the environment
- ex. solitare is known but partially observable, a new game might be fully observable but unknown

