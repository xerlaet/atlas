# Activity Selection Problem
---

Given a set of activities each specified with a start and finish time, select the maximum number of activities that don't overlap

1. Sort the activities in increasing order by end time (or decreasing by start time) < $O(n\log n)$
2. Iterate through the list adding each one if there's no overlap with the last chosen < $O(n)$

Overall runtime is $O(n\log n)$
