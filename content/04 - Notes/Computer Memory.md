# Computer Memory
---
Rule of thumb:
1k 10 bits
1m 20 bits
1g 30 bits
1t 40 bits

## Types of Storage
**Primary storage** is directly accessible by a CPU such as RAM, registers, and cache memory. **Secondary storage** is not directly accessible, such as hard drives and solid state drives. **Tertiary storage** consists of removable media such as flash drives. Typically the lower the access latency the higher the cost per byte is

Before execution, a program has to be copied from secondary storage to primary storage for the **fetch-decode-execute** cycle of a CPU. There is a tradeoff between how many programs can be simultaneously in the CPU and how much memory is available for each program

Processes need to grow or shrink over time, so the memory management has to accommodate that, as well as swap in and out processes from primary to secondary/tertiary memory

**Simple Memory Management** is when the entire process is in primary memory either contiguously or in partitions. **Virtual Memory Management** is when only parts of a process are in primary memory and the rest are in secondary memory. Virtual memory has better system performance but require extensive hardware support and are harder to design and implement

The OS must be able to quickly provide address translation between the physical and logical addresses, and provide protection for processes (no overlapping in memory)

## Simple Memory Management
### Contiguous
**Static Partitioning** is when memory is partitioned into blocks of either equal or unequal sizes. If a program arrives larger than a block size it is rejected. For unequal sized blocks, a global policy allocates the smallest available block to fit a process, whereas a local policy allocates the smallest block that exists. The process is queued if none are available

With static partitioning, the size of any process is limited to the size of the largest block, the number of processes able to execute concurrently is limited by the number of blocks, and **internal fragmentation** will likely occur in each block

**Dynamic Partitioning** is when memory is partitioned at run time when processes arrive. Holes can be created when a process terminates and can shrink when a new process arrives. External fragmentation can be solved with compaction, however that is very costly

One way to deal with holes is to have a linked list. When a new process arrives, it can be allocated to the first hole large enough (first-fit), the first hole large enough from where the last search stopped (next-fit), the smallest hole (best fit), or the largest hole (worst-fit)

**External fragmentation** is when enough holes exist that together can fit a process but are individually too small. Compaction is the process of relocating processes to combine holes into one or more small number of holes

Static partitioning is easier to implement although dynamic partitioning can accommodate larger processes and run more processes concurrently. Both have fragmentation problems (static with internal with no solution, dynamic with external and expensive solution). Also both don't allow for running a process larger than the size of the main memory

### Non Contiguous
**Segmentation** is when a program is partitioned into multiple segments such as a code, stack, data, or heap segment. Those segments are then allocated using contiguous allocation. A **segment table** is used to store information of each segment such as the base address and length of the segment (limit) as well as attributes
![[Pasted image 20241204190803.png]]

In address translation, a logical address is a tuple with a segment number $s$ and an offset $d$. $s$ is used to retrieve the base address $b$ and length $l$ of a segment, and then the physical address is $d+b$ as long as $d<l$. So accessing memory now requires two accesses, first the to segment table and the second to where the data is actually stored

Overall there is no internal fragmentation and has a higher degree of multiprogramming, and multiple processes can share address spaces. However every memory reference requires two memory accesses and it is still vulnerable to external fragmentation

**Paging** is when a process is divided into a number of fixed sized blocks called pages, of the same size as the fixed blocks in main memory called frames. Pages are tracked using a page table with frame number and other attributes.
![[Pasted image 20241204191017.png]]

A logical address contains a page number $p$ and an offset $d$. A physical address contains the frame number $f$ and the offset $d$

This method also requires two memory accesses and eliminates external fragmentation with limited internal fragmentation (only the last page might waste space).

A **translation lookaside buffer** (TLB) can be used to speed up references for recently accessed pages. The page number is stored along with the virtual address and physical address for quick lookup. A miss here just involves doing a standard lookup (pages get replaced by FIFO or random or least recently used etc.)

## Virtual Memory Management
Typically a program only accesses a small portion of it's address space (**principle of locality**) and hence the entire process doesn't need to be stored in main memory.  Spatial locality are addresses near previously referenced addresses, and temporal locality are addresses that have been referenced in the past.

General 90% of the time is spent in 10% of the code

Having too much of a process in memory results in a lower degree of multiprogramming, however having too little results in too much information movement in the swap space. It is most efficient to transfer data between main memory and swap space in blocks (such as pages or segments)

### Paged Virtual Memory
Pages are loaded into memory as they are needed, and pages in memory are managed by a page table.

A **page fault** occurs when a page is asked for but is not in memory. This results in a context switch so is very expensive. The rate of page faults depends on the degree of locality of the process, the size of main memory, the page replacement algorithm, and the frame allocation policy

**Copy-on-Write** (CoW) is when multiple processes share a page, and when one wants to write to it they create a copy so as to not mess with the other processes. This is very useful for a `fork` system call

### Page Replacement Algorithms
A good algorithm should minimize page faults and have low overhead

The optimal algorithm replaces the page that will be needed later farthest in the future. While it is the best in performance, it cannot be implemented in practice

The random algorithm replaces pages at random. This requires no bookkeeping but is not consistent, sometimes it may be used as a fallback algorithm

FIFO replaces the page that has been in memory the longest. This is easy to implement, but has poor performance in practice and can suffer from **Belady's anomaly** which is where adding more frames results in more page faults. To not suffer from this anomaly algorithms need to satisfy the stack property

Least Recently Used (LRU) replaces the page that was referenced the farthest in the past. While it should work well in theory, it is expensive to implement due to updating page references every time

Not Recently Used (NRU) is an approximation of the LRU algorithm. Two bits are modified for each page whenever it is referenced and modified, and are cleared periodically. The page with the lowest category based on those two bits is replaced

Not Frequently Used (NFU) utilizes a reference bit and a counter for each page and periodically the reference bit is added to the counter and then reset so that the counter approximates how often the page is used. The page with the smallest counter is removed

The Aging algorithm is the NFU however periodically each counter is shifted to the right and the highest bit is replaced by the reference and then the reference is reset. This allows aging to be a factor, and obtains near optimal performance at a moderate price

The Second Chance algorithm is a variant of the FIFO algorithm that also has a reference bit for each page. If a page would be replaced but has the reference bit clear it and move it to the back of the queue, any at the front without a reference bit is removed. If a page is referenced, set the reference bit

### Frame Allocation Algorithms
How many frames should a process be allocated?

The minimum number of frames is limited by the instruction size (say an instruction takes up two pages since it's on a boundary and references four more pages the minimum frame size should be no less than six) and the maximum is limited by the amount of physical memory

The two broad approaches are to allocate an equal number of frames to each process, or to allocate frames proportionally to the size and or priority of a process

In **global replacement**, the page selected to be replaced will be chosen from all frames even those of other processes. Often there is a set number of frames to be kept free and when there are less a reaper program is activated. In **local replacement** a process can only replace one of it's own frames

generally have either global replacement (select a new frame from all frames) or local replacement (select a new frame from a process's set of frames)

### Thrashing
**Thrashing** occurs when a process undergoes successive page faults because not enough frames were allocated to it

The working-set model keeps track of the $\Delta$ most recent page references of a process and allocates frames to fit the unique number of pages referenced in that window. Sometimes processes with a high working set might be swapped out to free up memory. The choice of $\Delta$ and how often to update the working set can affect performance

The page fault frequency model sets a lower and upper bound for the desired page fault rate. If a process has more page faults add frames, and if a process has less take away frames. Again a process might be swapped out completely to free up memory

### Memory Management in Kernel
Allocation and deallocation of objects is one of the most common tasks in the kernel

The buddy system works by recursively dividing an existing free block into two smaller blocks until the request would no longer fit and then stop. When a block is freed, the blocks that were divided are recursively merged back together

The slab system is for when the cost of constructing an object is significantly higher than the cost of allocating memory for it. A cache is created for a type of object and consists of slabs which in turn contain those objects.
