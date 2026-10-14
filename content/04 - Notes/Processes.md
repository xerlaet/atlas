# Processes
---

A **process** is an abstraction of a program in execution. Unlike the program which just occupies space, a process needs a CPU, memory, and I/O. 

Examples of information that the CPU needs are
- **program counter** (PC) to store the address of the instruction being executed
- **instruction register** (IR) to store the instruction being executed
- **general purpose registers** to temporarily store operands ex. for ALU
- **condition code register** (CCR) to store the result of an operation (aka status/flag)
- **stack pointer** (SP) to support function calls

CPU time is in terms of nanoseconds, whereas main memory time is in terms of milliseconds. I/O devices are even slower. Because of this discrepancy, specific I/O processors exist and **Caching** is used (storing commonly used data/instructions in faster memory (L1,L2,L3))

**Multiprogramming** is the ability of an OS to execute more than one program with a single processor. The illusion of multitasking occurs when the switch rate is faster than human response rates. 

## Process Scheduling
A **process control block** (PCB) is a data structure which saves needed information for a process when it will resume. It will contain a process ID, process state, CPU registers, CPU scheduling information, register information, accounting information, and I/O status information

The **process table** is an array of PCBs. The max number of processes that can be run concurrently is the **degree of multiprogramming**

The **scheduler** will maintain the status of each process that has been created. The diagram below shows a common convention for states and transitions

![TikZ Diagram](/attachments/tikz-742a8ca9b8b27d2604a368371636c5c6.svg)

There are three types of schedulers:
1. Long Term: decides which processes should be admitted
2. Medium Term: swaps processes from main memory and secondary storage
3. Short Term: decides which process in memory should be assigned to the CPU

The **dispatcher** needs to save the execution of the current process in the CPU and load the execution of the next process. **Dispatch Latency** is the amount of time it takes to stop one process and start another

context switch vs mode switch?

Common metrics include
**CPU Utilization** is the percentage of the CPU which is busy
**Turnaround Time** is the elapsed between arrival and execution of a process
**System Throughput** is the number of processes per unit time
**Waiting Time** is the time spent being ready
**Response Time** is the elapsed time between a user request and OS response
**Fairness** is when each process gets an "equitable" share of CPU time

A **Starvation problem** may occur due to either an infinite loop or an infinite arrival of new processes

These scheduling algorithms may be preemptive or not

### Scheduling Algorithms
1. FIFO: simple to implement, starvation free, comes with poor performance

2. Shortest Job First (preemptive or not): optimal mean waiting time, but requires knowledge of process execution time, and are vulnerable to infinite arrival

3. Priority: runs higher priority programs first utilizing a heap. The priority of a process is increased over time

4. Round Robin: each process is allowed to run for a certain amount of time (**time slice**) before it is pre-empted. Processes are selected in a FIFO manner. If the time slice is too short, context switching takes up a large portion of time, if the time slice is too large, response time is slow

5. Multi-Level Queue: a process is assigned to one queue based on the type (foreground/background), and each queue might have a different scheduling algorithm

6. Multi-Level Feedback Queue: consists of multiple queues arranged in a hierarchy, processes can move between queues (promotion and demotion)

## Inter Process Communication
Something is **synchronous** if it is blocking, and **asynchronous** otherwise. A **race condition** is when two processes are updating the same information at the same time, and should be avoided

Processes can share data by
1. Reading and writing to a shared file. The data is persistent, however it involves a high overhead to invoke system calls when reading and writing to a file

2. Utilizing shared memory. There is low overhead, however it is vulnerable to race conditions. Processes have direct access to that memory address

3. Passing messages to another process (a system call puts the message in a system buffer either synchronously or not). This is easy to implement but a huge overhead. The processes might not be accessing the exact same memory address, the OS facilitates it

4. Using pipes (producer consumer paradigm, FIFO, named or unnamed pipes). They are a natural fit for some applications, similar to message passing

| Unnamed Pipes                              | Named Pipes                            |
| ------------------------------------------ | -------------------------------------- |
| only used by related processes             | can be used by unrelated processes     |
| half duplex communication                  | full duplex communication              |
| communication is buffered                  | communication is not buffered          |
| pipe is destroyed when processes terminate | pipe persists until explicitly deleted |

5. Using remote procedure calls. This occurs at a higher level of abstraction, so the OS is responsible for implementing it (**marshalling** is turning arguments into messages)

6. Using signals to asynchronously notify another process. This has low overhead and are easy to implement, however writing a correct signal handler is difficult

## Process Protection
A **deadlock** is when multiple processes are interrupted before completing tasks in a **critical section**

Separate modes protect the kernel from user processes. Each process has its own **address space** in main memory. For the program, the addresses start at 0 which is a **logical address** that will be mapped to the **physical address** at run time with **address translation data** (base and limit registers, page table)

Processes can't directly manage resources, but instead invoke a system call where the operating system will have execution control of the process. The **trap** or software interrupt hardware instruction is used to **mode switch** from **user mode** which has a restricted set of instructions to **kernel mode** where any instruction is allowed 

When **context switching**, contents of the registers are saved in the PCB. **Mode switch** on the other hand changes the execution mode of the CPU (kernel/user) and may only need to save/restore a subset of registers

System calls
- process control (`fork`)
- file management (`open`/`read`)
- device management (`itctl`)
- information maintenance (`getpid`)
- communications (`pipe`)

`fork()` creates a process in Linux, whereas `CreateProcess()` creates one in Windows. The new process is identical to the previous process, and picks up at the same point in the program. The return value of the `fork` is 0 for the child process, and a non zero int for the parent process

`exec()` replaces the current program entirely with a new program. This function has different flavors ex. `execl()`

## Threads
Different processes can run on separate processors and/or separate tasks - the most efficient way to share data is with shared memory. Creating, destroying, and switching processes can be expensive

A **thread** is a lightweight process, so it shares address space, code, data, heap, memory, cache, etc. with other threads. Each thread has a minimal amount of unique data to be stored and switched between, stored in the **thread control block** (TCB)

User threads are cheaper to create and manage and more flexible and performant, however kernel level threads can be more optimal for independent progress and concurrency. Processes can have only user threads (**many-to-one**), only kernel level threads (**one-to-one**), or have both (**many-to-many**)

The hierarchy goes Processes, Kernel level threads, User level threads

If a user level thread gets blocked the process gets blocked, but if a kernel level thread gets blocked then other threads can run
