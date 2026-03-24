# EER to Schema Conversion
---

## ER Conversion
**1. Strong Entities**
* Create a table for each strong entity.
* Include all simple attributes as columns.
* Choose one of the candidate keys to be the **Primary Key (PK)**.

**2. Weak Entities**
* Create a table for each weak entity.
* Add the PK of the parent (identifying) entity as a **Foreign Key (FK)**.
* The **PK** of this new table is a composite key: the parent's PK + the weak entity's partial key.

**3. 1:1 Relationships**
* Identify both tables involved.
* Add the PK from one side to the other as a **FK**.
* *Rule of thumb:* Place the FK on the side that has **total participation** (mandatory existence) to minimize `NULL` values.

**4. 1:N Relationships**
* Add the PK from the "1" side to the table on the "Many" (N) side as a **FK**.

**5. M:N Relationships**
* Create a brand-new junction table.
* Add the PKs of both entities as **FKs** in the new table.
* The **PK** of this new table is the composite of those two FKs.

**6. Multivalued Attributes**
* Create a new table for the multivalued attribute.
* Include a column for the attribute value itself.
* Add the PK of the parent entity as a **FK**.
* The **PK** of this new table is the composite of the parent's PK + the attribute value.

## EER Specifics: Mapping Superclasses & Subclasses
When converting hierarchies (specialization/generalization), you have four main options depending on the constraints (Disjoint/Overlapping and Total/Partial).

**Option A: Multiple Tables (Superclass + Subclasses)**
* *Best for:* Any configuration (Overlapping/Disjoint, Total/Partial).
* Create a table for the Superclass with its attributes and PK.
* Create a table for each Subclass with its specific attributes.
* Add the Superclass PK to each Subclass table as both a **PK and a FK**.

**Option B: Multiple Tables (Subclasses Only)**
* *Best for:* Total Participation and Disjoint (every entity *must* be exactly one subclass).
* Do not create a superclass table.
* Create a table for each Subclass.
* Copy all attributes (and the PK) from the superclass directly into each subclass table.

**Option C: Single Table with One Type Attribute**
* *Best for:* Disjoint subclasses.
* Create exactly one table containing all attributes of the superclass and all subclasses.
* Add a single new column (e.g., `Job_Type`) to indicate which subclass a specific row belongs to.
* *Note:* Attributes belonging to other subclasses will be `NULL`.

**Option D: Single Table with Multiple Flag Attributes**
* *Best for:* Overlapping subclasses (an entity can be multiple types at once).
* Create exactly one table containing all attributes.
* Add a boolean/flag column for *each* subclass (e.g., `Is_Manager`, `Is_Engineer`) set to True/False.

