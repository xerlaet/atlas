# Counter
---

A **counter** increments on each clock edge which is used to cycle through numbers

e.g. 000,001,010,011,100,101,110,111,000,001,...

![[Pasted image 20250311134230.png]]

```verilog
module counter(input clk, input rstn, output [3:0] cout);
	always @ (posedge clk) begin
		if (!rstn)
			cout <= 0;
		else
			cout <= cout + 1;
	end
endmodule		
```

![[Pasted image 20250311134419.png]]

## Simplifications
Asynchronous Binary Ripple Counter
![[Pasted image 20250311134708.png]]
![[Pasted image 20250311134837.png]]

Synchronous Counter
![[Pasted image 20250311134723.png]]
![[Pasted image 20250311134736.png]]
