# Digital Logic
---

## History
(1948) first transistor
(1958) first integrated circuit - Jack Kilby 2000 Nobel Prize

The sale of semiconductors has largely been dominated by PC sales, then smartphone sales, and now datacenter sales
[[Moore's Law]]
[[Growth Rates]]
[[Big Data]]

[[Number Systems]]

## Circuits
For any truth table, we can compute **sum of products** (SOP) and **product of sums** (POS) equations, however this is rarely the minimal circuit for the function
![[Digital Logic 2025-05-06 14.12.53]]
The minimal circuit can be found using [[Boolean Algebra]] or [[Karnaugh Maps]], and will be faster, lower power, and cheaper to build

Circuits are often designed using [[Verilog]]

There are many different components that go into more complex circuits
- [[Adders]]
- [[Shifters]]
- [[Multipliers]]
- [[Dividers]]
- [[Memory]]
- [[Comparator]]
- [[ALU]]
- [[Registers]]
- [[FPGA]]
- [[Sequential Logic]] depends on [[Timing]]

## Architectures
[[MIPS Processor]]

## Computing Stack
1. [[Physics]] (electrons)
2. Devices [[Transistors]]
3. Analog Circuits (amplifiers)
4. Digital Circuits [[Logic Gates]]
5. Logic (adders) [[Sequential Logic]]
6. Micro Architecture (Datapath controllers)
7. Architecture (instructions, registers) [[MIPS Processor]]
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
