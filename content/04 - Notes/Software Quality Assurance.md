# Software Quality Assurance
---

**Software quality assurance** encompasses a set of activities that ensures the software being developed will meet the requirements

![Pasted image 20250427203544.png](/attachments/Pasted%20image%2020250427203544.png)

Verification: are we building the product right?
Validation: are we building the right product?
Technical reviews
Testing: attempt to uncover errors

## Costs of Quality
Prevention Cost:
- implementing an SQA framework (one time)
- perform SQA activities (ongoing)
- monitor and improve the framework (ongoing)
- needed equipment (machines and tools)

Failure Cost:
- analyze and remove failures
- lost productivity (developer and customer)
- liability, lawsuits, increased insurance premiums
- damage to company's reputation

![Pasted image 20250427204015.png](/attachments/Pasted%20image%2020250427204015.png)

It's always a tradeoff

## Metrics
Software should be reliable, robust, efficient, testable, maintainable, reusable, portable, interoperable, modular, cohesive (everything in the module does related things), and have low coupling (minimal dependencies)

### Requirements
![Pasted image 20250427215049.png](/attachments/Pasted%20image%2020250427215049.png)

### Design
**Fan in** refers to the number of incoming messages or dependences on a module. Too much fan in signifies a "god module" with too many responsibilities

**Fan out** refers to the number of outgoing messages or dependences on other modules. Too much fan out hurts reusability

**Cohesion** refers to how related the components in a module are to one another. Programs should aim for high cohesion

**Coupling** refers to the relationships between modules. Programs should aim for low coupling, or minimal dependencies

Modularity can be measured by $\frac{a\cdot \text{cohesion}+b\cdot \text{coupling}}{a+b}$, where $a$ and $b$ are weights for cohesion and coupling

### Complexity
Module design complexity is the number of integration tests required to call all subordinate modules
![Pasted image 20250428010246.png](/attachments/Pasted%20image%2020250428010246.png)

### Implementation
![Pasted image 20250428010332.png](/attachments/Pasted%20image%2020250428010332.png)

### System
![Pasted image 20250428010402.png](/attachments/Pasted%20image%2020250428010402.png)

### Object-Oriented Quality
Weighted Methods per Class
- add up the complexities of each method weighted

Depth of Inheritance Tree
- root nodes have DIT of 0, each successive child is +1

Number of Children
- number of children for each module

Coupling Between Object Classes
- count the number of classes each class depends on

Response for a Class
- number of methods for a class plus the number of methods called by a method of the class

Lack of Cohesion in Methods
- number of pairs of methods in C that don't share a common attribute
$$
\text{LCOM}=\frac{n(n-1)}{2}-2\lvert \{ m_{i},m_{j}:m_{i}\text{ and }m_{j} \text{ share an attribute of C} \} \rvert
$$
$n$ is the number of methods of $C$

## Techniques
### Inspections
An inspector examines the whatever. Read through the code checking for common errors, standards, and consistency.

The **Fagan Inspection Technique** involves planning (where/with who/what), overview (assign roles), preparation (review item to be inspected), meeting (find defects), rework (correct until right), follow-up (everything should be corrected)

In a walkthrough, the team is led through a manual simulation with simple test data, whereas in an inspection there is a list of criteria and there are checks for errors and compliance to standards and consistency

### Peer Review
The product is reviewed by peers, and reviewers are given some time to review the work

**Verification** is the process of checking that the implementation conforms to the specification

**Validation** is checking the correspondence between a model and the real world

Review and inspection are static verification, whereas testing is dynamic verification

Formal verification is a mathematical process that logically checks every possible scenario, whereas informal verification is a manual process

**Technical reviews** are performed by developers looking for incomplete definitions and formulations, ambiguities, inconsistencies, duplicates, unwanted implementation details, etc

Something is **logically consistent** if all the requirements can be satisfied at the same time
