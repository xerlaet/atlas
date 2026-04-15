# Hash Tables
---

A **Hash Table** can be thought of as a parking lot in which an algorithm will determine where every element should be parked

Hashing is using a function to map a key to an index

Ideally the function would map every key to a unique index, however since this is usually impossible, there will be overlaps, and if we encounter one we call it a **collision**. It can be done though, "perfect hashing", it will take longer to do that

## Why Hash Tables?
Hash tables are useful over other data structures like arrays and linked lists because hash tables always have a O(1) lookup complexity compared to something like an array that has a O(n) lookup complexity

Hash tables are also more memory efficient, dynamic in size, and can be used for a wide range of applications

## Handling Collisions
### Linear Probing
When a collision occurs, the probe searches linearly until the next available slot in the table
It's implementation is simple but can lead to clustering
### Quadratic Probing
When a collision occurs, the probe adds a quadratic function of the probe number to the initial hash value
It's implementation is more complex but eliminates clustering
### Double Hashing
When a collision occurs, the probe uses one hash for the initial hash and another for the probe sequence
It's implementation is the most complex but eliminates clustering and ensures even distribution of the data

Separate chaining
