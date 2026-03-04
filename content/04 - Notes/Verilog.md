# Verilog
---
**Verilog** is a hardware description language that is weakly typed and has low verbosity

Most of the world uses Verilog to create chips, although VHDL is also popular

## History
Started as a proprietary language in 1984 for simulation

Cadence acquired Verilog and open sourced it to become a standard so VHDL didn't take over

## Data Types
**Nets** are physical connections between different components of a design. They can be driven by multiple sources, and are not guaranteed to be stable
- wire (connect elements and modules)
- tri
- supply0
- supply1

**Variables** are any data storage elements. They are driven by one source, and are guaranteed to be stable at the end of each clock cycle
- logic
- reg (store counters or states of a state machine)
- integer
- int
- byte
- bit

Numbers are represented as: \<size\>\`\<radix\>value
- size is the number of bits
- radix could be b for binary, h for hex, or d for decimal (default)

```verilog
reg [7:0] v = 8`b1011; // v=00001011
reg [7:0] w = 3`b1011; // w=00000011
```

## Types of Descriptions

![Pasted image 20250130131936.png](/attachments/Pasted%20image%2020250130131936.png)
![Pasted image 20250130131943.png](/attachments/Pasted%20image%2020250130131943.png)

Behavioral description (highest abstraction capturing the behavior)
```verilog
if (sel == 0) begin
	out = b;
end
else if (sel == 1) begin
	out = a;
end
```

Structural or Gate description (lowest abstraction capturing components)
```verilog
not n1(sel_n,sel);
and a1(sel_b, b, sel_n);
and a2(sel_a, sel, a);
or o1(out, sel_b, sel_a);
```

Dataflow description (in the middle capturing assignment of values)
```verilog
assign out = (sel & a) | (~sel & b);
```

## Examples
```verilog
/* This is a comment */
`include "folder/sub.sv" // compiler directives
`timescale 1ns/1ps // unit of time is 1ns, smallest is 1ps (0.001 ns)

// module ringing_bell(input A,B,C,D, output R);
module ringing_bell(A,B,C,D,R);
	// port names, directions, and type
	input A,B,C,D;
	output R;
	
	wire n1, R;
	
	assign n1=A&B&C&D;
	assign R=n1 | ~A&~B | C&~D;
endmodule
```
