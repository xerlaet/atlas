# Database Hashing Techniques
---

**Database Hashing Techniques** provide an alternative to tree-based indexing by using hash functions to map keys to disk locations. They offer constant-time ($O(1)$) average-case lookup for equality searches, making them ideal for point queries but less suitable for range queries.

## Hashing Fundamentals

### The Hash Function

A hash function $h(K)$ maps a search key $K$ to a bucket address:

```
Key Value → Hash Function → Bucket Address
   42     →    h(42)    →      7
```

Good hash functions should:
- Distribute keys uniformly across buckets
- Be deterministic and fast to compute
- Minimize collisions

### Hash File Organization

```
┌─────────┬─────────┬─────────┬─────────┐
│ Bucket 0│ Bucket 1│ Bucket 2│ Bucket 3│
├─────────┼─────────┼─────────┼─────────┤
│ Records │ Records │ Records │ Records │
│ with    │ with    │ with    │ with    │
│ h(K)=0  │ h(K)=1  │ h(K)=2  │ h(K)=3  │
└─────────┴─────────┴─────────┴─────────┘
```

## Static Hashing

In **static hashing**, the number of buckets is fixed:

### Insertion

```
1. Compute bucket address: addr = h(key)
2. If bucket has space: insert directly
3. If bucket full: handle overflow (chain or rehash)
```

### Search

```
1. Compute bucket: addr = h(key)
2. Search bucket (and overflow chain if exists)
3. Return record if found, else null
```

### Problems with Static Hashing

1. **Overflow**: Bucket overflow degrades performance
2. **Space Utilization**: Fixed buckets waste space or cause overflow
3. **No Dynamic Growth**: Must know data size in advance

## Collision Handling

### Chaining (Separate Overflow Areas)

Each bucket has an overflow chain:

```
┌──────────────┐
│  Bucket 0    │ → [Overflow] → [Overflow]
├──────────────┤
│ Primary Page │ 
└──────────────┘
```

- Pro: Simple, handles unlimited overflow
- Con: Longer chains degrade performance

### Open Addressing

Probe alternative buckets when collision occurs:

```
h(key) = base bucket
If full: try h(key)+1, h(key)+2, ...

Common probing strategies:
- Linear probing: h(key) + i
- Quadratic probing: h(key) + i²
- Double hashing: h1(key) + i × h2(key)
```

## Dynamic Hashing

Dynamic hashing allows the index to grow and shrink with data:

### Extendible Hashing

Uses a **directory** of pointers to bucket pages:

```
Directory (global depth):
┌──┬──┬──┬──┬──┬──┬──┬──┐
│ 0│ 1│ 2│ 3│ 4│ 5│ 6│ 7│  (8 entries)
└──┴──┴──┴──┴──┴──┴──┴──┘
  │  │  │  │  │  │  │  │
  v  v  v  v  v  v  v  v
 Bucket Pages (local depth varies)
```

**How it works**:
- Global depth: number of bits used for directory index
- Local depth: number of bits matching bucket
- When bucket overflows: split into two, double directory if needed

### Linear Hashing

Does not use a directory—uses a linear addressing scheme:

```
Start with N buckets
When utilization exceeds threshold:
- Split leftmost bucket
- Increment split pointer

Uses overflow buckets for remaining collisions
```

**Round-robin bucket splitting** avoids traditional tree split patterns.

## Comparison: Static vs Dynamic

| Aspect | Static | Dynamic |
|--------|--------|---------|
| Growth | Fixed buckets | Grows/shrinks |
| Directory | No | Yes (extendible) |
| Overflow handling | Chaining/open addressing | Split + overflow |
| Complexity | Simple | More complex |
| Performance | Degrades with overflow | More consistent |

## Bitmap Indexes

For low-cardinality attributes (few distinct values):

```
Gender column: {M, F} (2 values)

Bitmap for M: [1, 0, 1, 1, 0]
Bitmap for F: [0, 1, 0, 0, 1]

Operations:
- AND: intersection
- OR: union  
- NOT: complement

Fast for complex queries on categorical data!
```

### Bitmap Operations Example

```
Find: Female AND Engineer

Gender=F:  [0, 1, 0, 0, 1]
Role=Eng:  [1, 1, 0, 1, 0]
─────────────────────────
AND Result:[0, 1, 0, 0, 0] → Row 2
```

## Comparison: Hashing vs B+ Trees

| Aspect | Hash Index | B+ Tree |
|--------|------------|---------|
| Lookup | O(1) average | O(log n) |
| Range queries | Not suitable | Excellent |
| Order preservation | None | Sorted |
| Space | Efficient | More overhead |
| Insert/Delete | May cause overflow | Balanced |
| Disk access | 1-2 I/Os | 2-4 I/Os |

## When to Use Hash Indexes

### Good fit:
- Equality predicates (point queries)
- High-cardinality keys
- Fixed-size lookups
- Caching table lookups

### Poor fit:
- Range queries
- Ordered traversal
- Variable data sizes
- Unpredictable key distributions

## Hash Function Considerations

### Properties of Good Hash Functions

1. **Uniform distribution**: Keys spread evenly across buckets
2. **Deterministic**: Same key always maps to same bucket
3. **Fast computation**: Minimal CPU overhead
4. ** avalanche effect**: Small key changes → large bucket changes

### Common Hash Functions

- **Modulo**: $h(K) = K \mod B$
- **Multiplicative**: $h(K) = \lfloor B \times (K \times A \mod 1) \rfloor$
- **String hashing**: Sum of character codes, polynomial rolling hash

## Related Concepts

- [Database Indexing](/notes/database-indexing) - Overview of indexing
- [B-Trees and B+ Trees](/notes/b-trees-and-b-trees) - Tree-based alternative
- [Primary Index](/notes/primary-index) - Can use hashing
- [Secondary Index](/notes/secondary-index) - Often uses hashing for equality searches