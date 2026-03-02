# CSMA/CA
---

802.11 Sender
If the channel is idle for DIFS, transmit entire frame
If the channel is busy
1. start a random backoff time
2. count down while channel is idle (main difference between CA and CD!)
3. transmit when timer expires
4. if no ACK, increase random backoff interval, repeat 2

802.11 Receiver

Sender wait for DIFS then sends data, receiver returns ACK after SIFS

Additionally, the sender can transmit **request-to-send** (RTS) packets that will tell everyone to hold off while the sender transmits a chunk of data
