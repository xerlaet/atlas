# Computer Architecture
---

## Computer Organization
![Pasted image 20250327130615.png](/attachments/Pasted%20image%2020250327130615.png)

![Pasted image 20250327130834.png](/attachments/Pasted%20image%2020250327130834.png)

### Hierarchy
#### Application Software
high level languages
#### System Software
compilers and OS
#### Hardware
processor, memory, I/O
##### Semiconductors
Add phosphorous or arsenic to change the properties of silicon
##### Processor
Datapath
Control
Cache Memory
### Abstraction
there is just memory, it can mean anything
### MIPS vs RISC-v
MIPS is simple and cheap
[MIPS](/notes/mips)

## Computer Abstractions and Technology
computers have been a third revolution for civilization, following the agricultural and industrial revolutions, filling in thousands of applications in our lives

broadly speaking, there are three different classes of applications: personal computers, servers, and embedded computers
**personal computers** are the most widely seen application, generally a sort of middle ground, largely composed of smart phones today
**servers** can range in size and power, and generally utilize redundancy to stay reliable
**embedded computers** are the largest share of the market, and are usually simplified as much as possible to achieve reliability

the performance of a program depends on the algorithm, the language/compiler, the processor, and the I/O

### Seven Great Ideas
#### Abstraction
as resources grew the design time would also grow so simplifying the design by abstracting different levels was a large time saver
#### Make the Common Case Fast
optimizing the most common case usually is the easiest way to gain performance, and is often easier than optimizing the rarer case
#### [Parallelism](/notes/parallelism)
more performance can be gained by running independent processes at the same time
#### Pipelining
pipelines can also increase performance, similar to a bucket brigade (are bucket brigades actually faster?)
#### Prediction
it often is faster to guess and start working than wait until you know the entire situation
#### Memory Hierarchy
having a small amount of extremely fast and expensive memory paired with a large amount of slow and cheap memory works well to cater to any program
#### Redundancy
computers should be dependable, so having redundant components assists that goal

### Below the Program
Hardware is the base layer, then various system software, then application software

compilers are important to translate the sophisticated programming languages into the simple instructions executed by the hardware

computers understand electrical signals, and we denote the presence of a signal as "1" and the absence as "0"
an assembler is a program to translate symbolic binary code into actual binary code
the binary numbers are `machine language` and the symbolic language is `assembly language` 
![Pasted image 20240128140718.png](/attachments/Pasted%20image%2020240128140718.png)
the above image is shown in two steps, although some compilers convert directly from the high level language to machine language

high level languages allow the programmer to think in a more natural way, with an increased productivity, and have the programs be hardware independent

![Pasted image 20240128143352.png](/attachments/Pasted%20image%2020240128143352.png)

a common goal is to decrease the response time of a system and to increase the throughput of a system, and usually those two are correlated together
$$
\text{Time}=\text{Seconds/Program}=\frac{\text{Instructions}}{\text{Program}}\times \frac{\text{Clock cycles}}{\text{Instruction}}\times \frac{\text{Seconds}}{\text{Clock cycle}}
$$

## Instructions: Language of the Computer
![Pasted image 20240212132612.png](/attachments/Pasted%20image%2020240212132612.png)

most instructions take in three parameters as that makes it easy for the hardware
often more complex programs will have more variables than registers in memory, so the compiler will keep the most frequently used variables in registers and store the rest in memory which is called *spilling*

hexadecimal is useful in condensing binary numbers into a more condense and human readable form

the big idea is that instructions are represented as numbers, and programs are stored in memory in order to be read or written (memory can contain programs, text, data, etc. basically anything, which can be used by the processor)

there are two kinds of shifts - logical puts a 0 in the new locations, arithmetic sign extends the highest bit
load vs load unsigned, extra 0's or sign extend

cal newport?