# MIPS Processor
---

The **MIPS Processor** is a basic CPU architecture

## Single Cycle Version
In the single cycle version, an instruction takes one full cycle to execute (everything is written at once, then new values are brought in from the combinational logic)

![[Pasted image 20250401132132.png]]

## Pipelined Version
In the pipelined version, the data path is split into multiple parts:
1. fetch
2. decode
3. execute
4. memory
5. writeback

![[Pasted image 20250501134039.png]]

A **hazard** is when an instruction depends on a result from an instruction that hasn't completed. In the pipelined version, a **data hazard** can occur from a register value not yet written back, and a **control hazard** can occur from the next instruction not being decided yet (branches)

Hazards can be fixed by
1. inserting the `nop` instruction at compile time (CPI > 1)
2. rearranging code at compile time
3. forward data at run time
4. stall processor at run time (CPI > 1)

## Instruction Set
Regardless of the whether the processor is implemented with a pipeline or not, the [instruction set](MIPS.md) is the same
