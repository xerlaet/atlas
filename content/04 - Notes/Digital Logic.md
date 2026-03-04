# Digital Logic
---

## History
(1948) first transistor
(1958) first integrated circuit - Jack Kilby 2000 Nobel Prize

The sale of semiconductors has largely been dominated by PC sales, then smartphone sales, and now datacenter sales
[Moore's Law](/notes/moores-law)
[Growth Rates](/notes/growth-rates)
[Big Data](/notes/big-data)

[Number Systems](/notes/number-systems)

## Circuits
For any truth table, we can compute **sum of products** (SOP) and **product of sums** (POS) equations, however this is rarely the minimal circuit for the function
![Digital Logic 2025-05-06 14.12.53](/attachments/Digital%20Logic%202025-05-06%2014.12.53)
The minimal circuit can be found using [Boolean Algebra](/notes/boolean-algebra) or [Karnaugh Maps](/notes/karnaugh-maps), and will be faster, lower power, and cheaper to build

Circuits are often designed using [Verilog](/notes/verilog)

There are many different components that go into more complex circuits
- [Adders](/notes/adders)
- [Shifters](/notes/shifters)
- [Multipliers](/notes/multipliers)
- [Dividers](/notes/dividers)
- [Memory](/notes/memory)
- [Comparator](/notes/comparator)
- [ALU](/notes/alu)
- [Registers](/notes/registers)
- [FPGA](/notes/fpga)
- [Sequential Logic](/notes/sequential-logic) depends on [Timing](/notes/timing)

## Architectures
[MIPS Processor](/notes/mips-processor)

## Computing Stack
1. [Physics](/notes/physics) (electrons)
2. Devices [Transistors](/notes/transistors)
3. Analog Circuits (amplifiers)
4. Digital Circuits [Logic Gates](/notes/logic-gates)
5. Logic (adders) [Sequential Logic](/notes/sequential-logic)
6. Micro Architecture (Datapath controllers)
7. Architecture (instructions, registers) [MIPS Processor](/notes/mips-processor)
8. Operating System (device drivers)
9. Application Software (programs)

## Chip Design Process
1. Spec - what should it do
2. Register Transfer Level (RTL) Functional Design - programmed description
3. Synthesis - create the sea of gates
4. Technology Mapping - choose size of chip
5. Place and Route - place gates using a CAD tool
6. Verification - verify it works
7. Fab - actually constructed

www.circuitverse.org (useful for designing circuits)
www.edaplayground.com (useful for programming Verilog)
