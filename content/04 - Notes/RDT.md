# RDT
---

**Reliable Data Transfer Protocol** (RDT) 

RDT: sequence 2x window size

```
rdt_send()
udt_send()
rdt_rcv()
deliver_data()
```

## RDT 1.0
reliable transfer over a reliable channel (easy)

no bit errors, no loss of packets
![Pasted image 20251006140836.png](/attachments/Pasted%20image%2020251006140836.png)

## RDT 2.0
now the channel has bit errors

To recover from errors, send **acknowledgements** (ACKs) to say a packet was received and **negative acknowledgements** (NAKs) to say it had errors, and the sender will then re transmit

![Pasted image 20251006141350.png](/attachments/Pasted%20image%2020251006141350.png)

An issue is that the ACK/NAK could be corrupted. The sender will add a sequence number to each packet and the receiver discards duplicates

stop and wait

### RDT 2.1
complicated NAKs and ACKs
alternate tagging the packets with 1s and 0s

### RDT 2.2
NAK-free using implicit NAK (ACK for current packet). This streamlines the process

## RDT 3.0
now the channel can also lose packets - solution is to add timeouts and retransmit if no ACK is received in time
$$
U_{\text{sender}}=\frac{L / R}{RTT+L / R}
$$

the problem is that each packet takes RTT + L/R time which is really slow! Pipelining solves this issue

$$
U_{\text{sender}}=\frac{3L / R}{RTT+L / R}
$$

**Go-Back-N** keeps a sliding window of packets that haven't been ACKed, if any timeout resend the whole window as far as it can be moved up

**Selective Repeat** does similar but only resends the packets that haven't been ACKed, note that the window size must be less than or equal to half of the sequence space to ensure reliability

