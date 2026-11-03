# Transmission Control Protocol
---

![TikZ Diagram](/attachments/tikz-1c7e6f6dbc75aa35d7ca0311bb32f0dc.svg)

One of the main protocols first built for the internet
- reliable, in-order delivery
- congestion control
- flow control
- connection setup

| Flag    | Meaning                                                                               |
| ------- | ------------------------------------------------------------------------------------- |
| **AE**  | Accurate ECN: works with ECE/CWR for negotiated, more detailed congestion feedback.   |
| **CWR** | Congestion Window Reduced: in classic ECN, signals a response to congestion feedback. |
| **ECE** | ECN-Echo: in classic ECN, echoes congestion; also participates in ECN setup.          |
| **URG** | Urgent pointer is meaningful.                                                         |
| **ACK** | Acknowledgment number is meaningful.                                                  |
| **PSH** | Requests prompt delivery to the receiving application; not a message boundary.        |
| **RST** | Resets or rejects a connection.                                                       |
| **SYN** | Synchronizes initial sequence numbers during connection setup.                        |
| **FIN** | Sender has no more data; the opposite direction can remain open.                      |

---

## Reliable Data Transfer
RTT is estimated using a exponential weighted moving average:
$$
RTT_{\text{estimated}}=(1-\alpha )RTT_{\text{estimated}}+\alpha RTT_{\text{sample}}
$$
![Pasted image 20251006225956.png](/attachments/Pasted%20image%2020251006225956.png)

the receiver should send cumulative ACKs

**TCP Fast Retransmit**: If triple duplicate ACKs are received, resend unACKed segment with smallest sequence number

## Flow Control
receiver advertises their free buffer space in rwnd field: **receive window** which sender then limits unACKed data to

## Connection Management
TCP uses a triple handshake to establish a connection (a two way handshake can result in a half open client or duplicate data)

FIN bit closes a connection

## Congestion Control
![Pasted image 20251006232416.png](/attachments/Pasted%20image%2020251006232416.png)


**Additive Increase, Multiplicative Decrease** (AIMD) is used to probe for bandwidth
Senders transmission is `min(cwnd,receiver advertised window)`, most often just **congestion window** (cwnd)

TCP slow start: initially cwnd is 1 MSS (maximum segment size), gets doubled every RTT (cwnd+=1 for each ACK)

it starts out exponential, then goes linear. on a loss, ssthresh is set to 1/2 of cwnd

tahoe goes to 1 and restarts, reno goes half and goes linear afterwards (reno still goes to 1 on timeout, only on tcp fast retransmit does it go to half)

TCP CUBIC approaches it exponentially

Delays occur as arrival rate rate approaches capacity

if the sequence number is exhausted, modern secure options will send a FIN package to terminate the connection
