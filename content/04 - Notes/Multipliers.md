# Multipliers
---

## Parallel Multiplier
![[Pasted image 20250417133415.png]]

Implementing the design in parallel is very complex:
![[Pasted image 20250417133443.png]]
For a $n\times n$ multiplication, it will require $n(n-1)$ full adders and $n^{2}$ and gates

## Serial Multiplier
Implementing the design in series is less complex but will need a fast clock to compete:
![[Pasted image 20250417134620.png]]

![[Pasted image 20250417134632.png]]

Multiply-Accumulates (MAC's) are the main workhouse in AI accelerators (the multiplications are implemented in hardware instead of software)
![[Pasted image 20250417135022.png]]
