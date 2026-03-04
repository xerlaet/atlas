# Sequential Logic
---

State elements store 1-bit of state:
[Bistable Circuit](/notes/bistable-circuit)
[SR Latch](/notes/sr-latch)
[D Latch](/notes/d-latch) captures the input when the clock is 1 and holds otherwise

[D Flip-flop](/notes/d-flip-flop) captures the input on the rising clock edge
Variations:
[Enable Flip-flop](/notes/enable-flip-flop)
[Resettable Flip-flop](/notes/resettable-flip-flop)
[Settable Flip-flop](/notes/settable-flip-flop)
[Toggle Flip-flop](/notes/toggle-flip-flop)
[JK Flip-flop](/notes/jk-flip-flop)

```verilog
always @(sensitivity_list)
	statement;
```

[Parallel Load Register](/notes/parallel-load-register)

[Counter](/notes/counter)
