# OS Concepts
---
An **Operating System** is an intermediary between the user and the computer hardware and acts as an environment to execute programs from and control resources. The main goal is to make the system convenient and efficient

Components include the actual hardware from the CPU to memory and IO devices, and the software including different applications and the actual OS itself

**Embedded Systems** are generally a self contained system serving a specific purpose

## Processes
[[Processes]] are a program that the OS is currently executing

Any good OS should have efficient [[Process Synchronization]]

## Memory
[[Computer Memory]] is stored in a variety of ways and many algorithms exist for how to allocate and deallocate memory

[[File Systems]] are a way of organizing computer memory that is convenient for users

[[Mass Storage]] is utilized for redundancy and speed up in accessing large amounts of data

A program is linked to combine pieces of code into a single executable, such as combining required libraries and object files together. It is also bound which is when symbolic references are replaced with actual memory addresses, this can happen at different times using the **memory management unit** (MMU) for address translation:
- if at compile time the compiler can generate absolute code, otherwise relocatable code
- if at load, the relocatable code and binding occurs at the same time
- if at execution, the binding must be delayed until runtime
The lifecycle of a program being built is
preprocessor -> compiler -> assembler -> linker -> loader (binding can happen at various times)

## History
It used to be that a computer would run one program at a time and a user was given complete control of the computer for a fixed time. Programs were punched into cards and output would be written to a magnetic tape or a printer

Then slower and cheaper computers were used to develop programs, and then the jobs would be submitted to a faster and more expensive computer for batch processing

Over time CPUs became faster and programs started requiring user interaction which is even slower than I/O speeds. Because the CPU was being underutilized, processes came about as a way of utilizing the potential of the CPU so whenever it was idle another program would be run

Initially, threads were created, destroyed, and managed completely in the user space with no help from the kernel. As threads became more popular, programming languages added built in support for them, and kernels are now aware of threads. There is now a thread control block (TCB), analogous to a PCB
