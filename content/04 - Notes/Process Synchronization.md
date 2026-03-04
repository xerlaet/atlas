# Process Synchronization
---
Concurrent processes need to share one or more resources, and access to these resources needs to be managed to make sure multiple processes aren't simultaneously accessing the same resource. The contents of a file might be corrupted, the output of a printer might be garbled, and signals may interfere

Concurrent programs are susceptible to many problems: **race conditions** where the correct outcome is only guaranteed when processes are interleaved in a certain manner, **deadlocks** where processes are involved in a circular wait, and **livelocks** where processes are executing steps yet not making any progress

A **critical section** is a section of code that should be executed in isolation (atomically)

### Deadlocks
Deadlocks might occur when there is mutual exclusion on resources, processes are holding at least one resource and waiting for at least another, and a resource can only be released voluntarily by a process. If there is a circular wait, then a deadlock for sure exists.

A deadlock can be detected by checking for cycles with a BFS or DFS for single allocation resources, and using the banker's algorithm to check for a safe state if there are multi allocation resources

Deadlocks can be handled in several ways:
1. insuring that they never happen
	1. Banker's Algorithm: only grant a request if it will result in a safe state
2. allow a deadlock to be detected and fix it
	1. either let user handle it, or terminate a process/take away resources
3. ignore the problem assuming they won't occur

## Dining Philosophers Problem
In this scenario, there is a circular table with 5 dining philosophers. In front of each philosopher is a plate with spaghetti, and there are 5 forks arranged between each plate. Each philosopher can only eat when they have two forks, and they can only think when they are not thinking.

![TikZ Diagram](/attachments/tikz-0c429382dc6509625cb6d869bb069c6e.svg)

The question is how to design an optimal algorithm to allow every philosopher to alternate between eating and thinking indefinitely. Additionally, no philosopher can know when others may want to eat or think

```java
// i is this process, j is the other progress
while (true) {
	state[i] = interested;
	turn = j;
	while (state[j] == interested && turn == j);
	// critical section
	state[i] = notinterested;
	// code outside critical section
}
```

This solution has mutual exclusion, progress, and bounded wait making it a proper solution. It is known as **Peterson's Algorithm**. To extend this to work for N processes, create a tree where each node requires a process to gain a lock to it. To reach the top a process works up the tree, and once the process is done with its task it descends the tree.

## Concurrency
**Locks** are useful for making sure programs don't overwrite the same information

May be vulnerable to **deadlocks** where one lock depends on another lock held by another program that wants the first lock to release it. A **livelock** is when two processes are executing and using CPU time, but aren't able to accomplish anything

For producer consumer processes, the produce is unlikely to be producing messages at the same speed the consumer reads them in. A solution is to use a buffer to store an excess of messages. Buffers can be implemented in arrays (circular queues) or linked lists, kernel code typically uses arrays for improved performance despite the fixed buffer size. Wrote access to said buffer constitutes a critical section and is held by a lock, read doesn't need it

### Semaphores and Monitors
A **semaphore** is associated with an integer value initialized arbitrarily, and has methods to increase `v()` and decrease `p()` its value.

A **mutex** is a special type of a binary semaphore.

Mutexes are a locking mechanism whereas a semaphore is a signaling mechanism. So for a mutex the process is responsible for checking the values, and for a semaphore it will put processes into a waiting queue. A semaphore is modified using `wait()` and `signal()` whereas mutex operations are simply locked or unlocked
