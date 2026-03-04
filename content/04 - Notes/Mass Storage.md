# Mass Storage
---
## Disk Mechanisms
Mass storage devices typically consist of magnetic tapes, magnetic disks, or SSDs

**Magnetic tapes** were the early secondary storage medium built for sequential access and can have a very long lifespan

**Magnetic disks** store data magnetically and provide the bulk of secondary storage for most computers, with significant latency due to mechanical moving parts

**Solid State Drives** are increasingly replacing hard disks due to lower latency from being all electronic using less power and are more reliable

![Pasted image 20241204171349.png](/attachments/Pasted%20image%2020241204171349.png)
$$\text{The structure of a disk}$$
Disk access overhead consists of the following components:
- **Seek time** is the time to locate the disk arm to a specified track
- **Rotational latency** is the time for the sector of a disk to move into position
- **Transfer time** is the time to transfer data between the disk and buffer

## Disk Scheduling
First Come First Serve
- Requests are dealt with as they come in 
- very easy to implement, but does not perform well
Shortest Seek Time First
- shortest request is dealt with first
- much faster, but prone to starvation
SCAN
- head travels back and forth servicing requests along the way
- not prone to starvation but has unnecessary traversal
Circular SCAN
- similar to scan but only services in one direction, then jumps back to the start
- gives more consistent performance still with unnecessary travel
LOOK
- like scan but only goes as far in each direction as there is a request
- saves on travel but still inconsistent performance
Circular LOOK
- like look but only works one way, giving consistent performance

## RAID
**[RAID](/notes/raid)** stands for redundant array of inexpensive/independent disks and does what it's name implies