# Shift Reduce Parser
---

![Pasted image 20250331123253.png](/attachments/Pasted%20image%2020250331123253.png)

Start in state 0 with $\epsilon$

At each step, look at the state on the current stack, and the next symbol of input, and perform the corresponding action from the table:
- shift the next symbol from the input to the stack with the new state
- reduce the RHS of the stack with the new state

![Pasted image 20250331122903.png](/attachments/Pasted%20image%2020250331122903.png)
