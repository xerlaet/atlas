---
aliases:
  - EER Model
---
# Enhanced Entity-Relationship Model
---

The **Enhanced Entity-Relationship (EER) Model** extends the [ER Model](/notes/entity-relationship-model) with additional features to handle more complex data

## Inheritance & Structure
- **Superclass**: An entity type with one or more subgroups (e.g. employee)
- **Subclass**: An entity type that inherits attributes and relationships from the superclass
- **Specialization**: The process of breaking a superclass into subclasses
- **Generalization**: The process of combining subclasses into superclasses

![TikZ Diagram](/attachments/tikz-f3279a8ad7c873b9415f45fb85ef4d7b.svg)

## Disjointness Constraint
- **Disjoint** (d): A superclass entity can belong to only one subclass
- **Overlapping** (o): A superclass entity can belong to multiple subclasses

![TikZ Diagram](/attachments/tikz-3feac3a1e51444f1960e49a81e6a0518.svg)

## Completeness Constraint
- **Total Specialization** (double line): Every superclass entity must belong to at least one subclass
- **Partial Specialization** (single line): A superclass entity is not required to belong to a subclass

![TikZ Diagram](/attachments/tikz-1d5a9a47c8660f4f801b5e223a0086e3.svg)

## Union Types
* **Union:** (u) A single subclass that represents a collection of objects that can belong to more than one superclass

![TikZ Diagram](/attachments/tikz-2a063c926cf1f335b10c33b3b53edd2a.svg)
