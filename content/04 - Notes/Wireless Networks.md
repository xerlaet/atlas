# Wireless Networks
---

**Base stations** (or access points) are often connected to a wired network and are responsible for sending packets between the wired network and wireless hosts in the area (e.g. cell towers)

A **wireless link** is another device that connects mobile(s) to a base station. It has multiple access protocols

It's difficult to design a wireless link that has both high transfer rates and long range. The root cause is power, meaning it would be expensive and wasteful to do so

A wireless network is either in **Infrastructure mode** where nodes connect to base stations which route to a wired network, or **ad hoc mode** where nodes organize themselves into a network (e.g. Airdrop, Bluetooth)

Depending on the network where could be multiple wireless hops involved

## Wireless links and network characteristics
Wireless ratio signals attenuate (lose power) as it propagates due to the inverse square law

### Challenges
**Multipath propagation** is when radio signals reflect off objects in the environment, arriving at the destination at slightly different times

The **signal-to-noise ratio** (SNR) is how easy it will be to extract the signal from noise
The **bit error rate** (BER) is how often errors will occur

There is a trade-off as SNR and BER are inversely related

**Hidden terminals** is a problem where say A and B hear each other, B and C hear each other, but A and C don't hear each other and can interfere at B. This can be caused by objects blocking the space or just attenuation

[[Code Division Multiple Access]]

## WiFi
[[WiFi]]
[[Bluetooth]]

## Cellular Networks
[[Cellular Networks]]
