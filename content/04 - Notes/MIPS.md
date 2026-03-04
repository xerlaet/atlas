# MIPS
---

**MIPS** is a low level assembly language for the [MIPS Processor](/notes/mips-processor) and is an example of [RISC](/notes/risc)

MIPS has 32 registers all starting with a `$`
$$
\begin{array}{|c|c|c|}
\hline
\text{Number} & \text{Name} & \text{Purpose} \\
\hline
0 & \$zero & \text{zero} \\
1 & \$at & \text{reserved for assembler} \\
2-3 & \$v_{0}-\$v_{1} & \text{expression evaluation} \\
4-7 & \$a_{0}-\$a_{3} & \text{function call arguments} \\
8-15,24-25 & \$t_{0}-\$t_{9} & \text{temporary results} \\
16-23 & \$s_{0}-\$s_{7} & \text{preserved over subroutine calls} \\
26-27 & \$k_{0}-\$k_{1} & \text{reserved for OS kernel} \\
28 & \$gp & \text{global pointer} \\
29 & \$sp & \text{stack pointer} \\
30 & \$fp & \text{stack frame pointer} \\
31 & \$ra & \text{return address} \\
\hline
\end{array}
$$

## Instruction Types
There are three types of instructions that exist

**I-Format** Instructions ex. `addi $s0 $s1, 4`
`op` is the opcode
`rs` is the source register
`rt` is the destination register
`immediate` is a value to use
$$
\begin{array}{|c|c|c|c|}
\hline
\text{op} & \text{rs} & \text{rt} & \text{immediate} \\
\hline
\text{6 bits} & \text{5 bits} & \text{5 bits} & \text{16 bits} \\
\hline
\end{array}
$$

**J-Format** Instructions ex. `j LOOP`
`op` is the opcode
`address` is the address to jump to
$$
\begin{array}{|c|c|}
\hline
\text{op} & \text{address} \\
\hline
\text{6 bits} & \text{26 bits} \\
\hline
\end{array}
$$

**R-Format** Instructions ex. `add $s0 $s1, $s2`
`op` is the opcode (0 for all of them!, which is why `funct` is needed)
`rs` and `rt` are the source registers
`rd` is the destination register
`shamt` is the shift amount
`funct` is the function code
$$
\begin{array}{|c|c|c|c|c|c|}
\hline
\text{op} & \text{rs} & \text{rt} & \text{rd} & \text{shamt} & \text{funct} \\
\hline
\text{6 bits} & \text{5 bits} & \text{5 bits} & \text{5 bits} & \text{5 bits} & \text{6 bits} \\
\hline
\end{array}
$$


## Instructions
![Pasted image 20240212132612.png](/attachments/Pasted%20image%2020240212132612.png)

`sllv` is useful for creating a mask

### Directives
`.ascii` vs `.asciiz` (includes \\0)
`.byte`
`.data` segregates instructions and data
`.double` and `.float` 
`.eqv` substitutes the second operand for the first
`.extern` for data elements defined in another module
`.include` the name must be in quotes
`.space` reserves a specific number of bytes
`.text` indicates what follows is text not data
`.word` and `.half` 32 and 16 bit values

### System Calls
```assembly
.eqv	SysPrintInt 	1
.eqv	SysPrintFloat 	2
.eqv	SysPrintDouble	3
.eqv	SysPrintString	4
.eqv	SysReadInt	    5
.eqv	SysReadFloat	6
.eqv	SysReadDouble	7
.eqv	SysReadString	8
.eqv	SysAlloc		9
.eqv	SysExit		    10
.eqv	SysPrintChar	11
.eqv	SysReadChar	    12
.eqv	SysOpenFile	    13
.eqv	SysReadFile	    14
.eqv	SysWriteFile	15
.eqv	SysCloseFile	16
.eqv	SysExitValue	17
```

### Prints
```assembly
lw $a0, value # get number to print
li $v0, 1     # system call magic number
syscall       # print the value
```

## Example Code
```
        .data                   # Data section (variables, strings, etc.)
msg:    .asciiz "Count: "       # Message string for printing

        .text                   # Code section starts here
        .globl main             # Declare 'main' as the entry point

main:
        # Initialize loop counter
        li $t0, 5               # $t0 = 5 (loop counter)

loop:
        # Print "Count: "
        li $v0, 4               # Syscall code for printing a string
        la $a0, msg             # Load address of msg into $a0
        syscall                 # Print "Count: "

        # Print loop counter value
        li $v0, 1               # Syscall code for printing an integer
        move $a0, $t0           # Move counter value into $a0
        syscall                 # Print integer

        # Print a new line
        li $v0, 11              # Syscall code for printing a character
        li $a0, 10              # ASCII for newline (\n)
        syscall                 # Print newline

        # Decrement counter and check if it's 0
        sub $t0, $t0, 1         # $t0 = $t0 - 1
        bne $t0, $zero, loop    # If $t0 != 0, go back to loop

        # Exit program
        li $v0, 10              # Syscall code for exiting
        syscall

```
Labels must start with a letter, can contain letters, digits, $, and _ by convention labels start in column 1
comments are `#`
