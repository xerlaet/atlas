# RAID
---
**RAID** stands for redundant array of inexpensive/independent disks and does what it's name implies

RAID achieves strong performance due to concurrency of accessing data and improved fault tolerance due to multiple independent disks

**Data striping** is when sequential data is segmented and stored consecutively on different disks
![[Pasted image 20241204181641.png]]

### Configurations
Standard configurations for RAID are referred to as levels (ex. RAID 6) and configurations can be nested (ex. RAID 10)

The metrics to keep in mind are storage efficiency, reliability during failures, and speed in accessing compared to a single disk

RAID 0 simply utilizes striping to improve performance
![[Pasted image 20241204182234.png]]

RAID 1 simply duplicates disks for reliability
![[Pasted image 20241204182315.png]]

RAID 2 uses striping with ECC on parity disks
![[Pasted image 20241204182402.png]]

RAID 3 uses bit or byte striping with one parity disk
![[Pasted image 20241204182440.png]]

RAID 4 uses block striping with one parity disk
![[Pasted image 20241204182505.png]]

RAID 5 is like RAID 4 except it distributes the parity blocks
![[Pasted image 20241204182605.png]]

RAID 6 is like RAID 5 except with two parity blocks
![[Pasted image 20241204182658.png]]

| RAID | Storage Efficiency            | Reliability | Read Boost          | Write Boost         |
| ---- | ----------------------------- | ----------- | ------------------- | ------------------- |
| 1    | $\frac{1}{n}$                 | $n-1$       | $n$                 | $1$                 |
| 2    | $1-\frac{\text{log}(n+1)}{n}$ | $1$         | $n-\text{log}(n+1)$ | $n-\text{log}(n+1)$ |
| 3    | $1-\frac{1}{n}$               | $1$         | $n-1$               | $n-1$               |
| 4    | $1-\frac{1}{n}$               | $1$         | $n-1$               | $1$                 |
| 5    | $1-\frac{1}{n}$               | $1$         | $n$                 | $\frac{n}{2}$       |
| 6    | $1-\frac{2}{n}$               | $2$         | $n$                 | $\frac{n}{3}$       |
