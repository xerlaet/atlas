# Sequential Logic
---

State elements store 1-bit of state:
[[Bistable Circuit]]
[[SR Latch]]
[[D Latch]] captures the input when the clock is 1 and holds otherwise

[[D Flip-flop]] captures the input on the rising clock edge
Variations:
[[Enable Flip-flop]]
[[Resettable Flip-flop]]
[[Settable Flip-flop]]
[[Toggle Flip-flop]]
[[JK Flip-flop]]

```verilog
always @(sensitivity_list)
	statement;
```

[[Parallel Load Register]]

[[Counter]]
