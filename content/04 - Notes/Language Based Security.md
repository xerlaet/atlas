# Language Based Security
---

**Language Based Security** (LBS) is a set of strategies to strengthen the security of applications

The idea is to evaluate the source code before compiling

proof carrying code
typed assembly language

## CWEs
The **Common Weakness Enumeration** is a community developed list of weaknesses that can become vulnerabilities

**Pillars** are weaknesses described in an abstract fashion
**Classes** are typically independent abstract descriptors
**Base level weaknesses** are used to present a more specific type of weakness
**Variants** are weaknesses at a low level of detail

**Chains** are weaknesses reachable consecutively
**Composites** are weaknesses that must all be present

**Pillar** is the highest level organizational category dealing with broad concepts and groups classes of weaknesses.
**Class** is a more general type of weakness representing a category usually without a specific implementation.
**Base-level weakness** is a more specific class level weakness that gives some details on the issue and often the fix.
**Variant** is the most specific type of weakness often related to particular technologies, languages, or patterns.
**Chains** are sequences of weaknesses that interact and result in a more serious overall vulnerability.
**Composites** are weaknesses that result from multiple contributing factors that all being present will cause a security issue.

CWE-352: Cross-Site Request Forgery

## Eight Pernicious Kingdoms
**Input Validation and Representation** deals with flaws from things like SQL injection and in general failing to properly validate user input.
**API Abuse** occurs when APIs are misused with improper access controls resulting often in unauthorized actions.
**Security Features** involve weak encryption, flawed authentication, and other poor security mechanisms.
**Time and State** includes race conditions where the timing of operations impact the outcome of the program.
**Errors** often arise from poor error handling where information can be leaked from error messages.
**Code Quality** involves bugs and overall poor code quality that leads to vulnerabilities.
**Encapsulation** results when object boundaries are violated or internal object states can be modified.
**Environment** deals with deployment settings and configurations that affect the software.

The **Software Engineering Institute** (SEI) is a federally funded research center, working to introduce private sector innovations into the government. It works both with the DoD and outside of it, along with academia

The **Capability Maturity Model** (CMM) are an organizational assessment framework
0. Incomplete
1. Initial (unpredictable, often delayed and over budget)
2. Managed (managed on a project level)
3. Defined (proactive not just reactive with organization standards)
4. Quantitatively Managed (predictable objectives, meta systems to continually improve)
5. Optimizing (stable and flexible, continuously adapting and improving)
