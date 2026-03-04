# Timing
---

**Contamination delay** $t_{ccq}$ is the time after the clock edge where the output starts changing but may be unstable

**Propagation delay** $t_{pcq}$ is the time after the clock edge where the output is guaranteed to be stable

![Pasted image 20250325140058.png](/attachments/Pasted%20image%2020250325140058.png)

Synchronous sequential circuits must be stable during the aperture (setup and hold) of each clock edge

![Pasted image 20250325135213.png](/attachments/Pasted%20image%2020250325135213.png)

The fastest clock period possible is
$$T_{c}\geq t_{pcq}+t_{pd}+t_{setup}$$
At the same time, it can only be so fast
$$t_{hold}<t_{ccq}+t_{cd}$$
If the above doesn't hold, buffers can be added to slow down the fastest part of the circuit, however if too many are needed a better solution might be redesigning the circuit

![Pasted image 20250325140513.png](/attachments/Pasted%20image%2020250325140513.png)
![Pasted image 20250325140125.png](/attachments/Pasted%20image%2020250325140125.png)

