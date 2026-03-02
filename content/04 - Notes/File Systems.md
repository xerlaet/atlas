# File Systems
---
## Interface
A **file** is a unit of persistent storage located in secondary storage containing both data and attributes

In order to access a file, it must be located in storage and verified that the process has correct permissions. The system keeps track of opened files with tables, either system-wide which contain every open file or per-process which contains every file open for a specific process

Commonly files will have extensions such as `.exe` to signify their type, however files might also contain a **magic number/byte** at the beginning of the file for the same purpose

Sequential access is when information in a file is processed in order, and direct access is when information is processed in no particular order (ex. databases)

A file system can take an entire disk, just a partition of a disk, or span multiple disks

A **directory** is a symbol table that translates file names into directory entries, with many schemes commonly used:
- Single level directory
	- There is just one folder
- Two level directory
	- One level of subfolders are allowed
- Tree structured directory
	- Forms a large tree
- Acyclic graph directory
	- a file may be accessed via multiple paths
	- **hard links** point to a physical location whereas **soft links** point to a symbolic reference path
	- when new links are added the os should check for a cycle
- General graph directory
	- most powerful/complex scheme

Permissions are important for determining what can read/write/execute/etc to/from a file/directory
- **General access control** (Windows) specifies the permissions of each user
- **Limited access control** (Linux) specifies the permissions of classes of users
- **Hybrid access control** (Solaris) utilizes both

## Implementation
### Directory Structure
The structure could be anything: linked list, search tree, hash table, etc. The idea is to find a structure with fastest search, insert, and delete times -> [[Time Complexity]]

### Tracking File Data Blocks
Blocks of data on a disk either store meta-data about files or the actual content of files

Contiguous Allocation (fast access, creates holes and external fragmentation)
![[Pasted image 20241204183941.png]]

Linked Allocation (fast sequential access, slow random access). Might use a file allocation table (FAT) to store information. Windows utilizes this with a FAT
![[Pasted image 20241204184040.png]]

Indexed Allocation (one block acts as an index for all other blocks). Fast access, tradeoff of max size of a file and size of an index node
![[Pasted image 20241204184106.png]]

Hybrid Indexed Allocation (uses a mix of direct and linked indexing). Fast access and works for many file sizes, utilized in Linux
![[Pasted image 20241204184126.png]]

### Free Space Management
The file system should ideally be able to efficiently locate free blocks whether contiguous or not and free up large numbers of allocated blocks. There are several methods to do so:

A Bit Map is a list of bits which are 1 if the block is free and 0 otherwise
![[Pasted image 20241204184329.png]]

A linked list can be used to keep track of free blocks
- fast for single free blocks, slow for groups of free blocks
![[Pasted image 20241204184341.png]]

Grouping is when some free blocks are used as indexes for other free blocks and are kept in a linked list
- can efficiently locate free blocks, but struggles with contiguous free blocks
![[Pasted image 20241204184357.png]]

Counting is an extension of grouping which stores the address of the first free block in a contiguous sequence and the length of that sequence
- works well as long as there are contiguous sections
![[Pasted image 20241204184442.png]]
