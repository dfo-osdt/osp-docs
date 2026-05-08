## Progressive Disclosure Task Model

### Summary
Update existing documentation to follow a **progressive disclosure task model** so users can complete tasks quickly while still having access to supporting information when needed.

This change separates **instructional steps** from **supporting information**, improving clarity and reducing cognitive load for users following procedures.

---

### Objective
Ensure task documentation follows a consistent structure where:

- **Instructional steps** focus only on actions required to complete the task.
- **Informational content** (context, explanations, edge cases) is separated from the main procedure.

---

### Standard Structure

Task pages should follow this general structure:

1. **Task Title**  
   Use a verb phrase describing the user goal.

2. **Short Description (1–2 sentences)**  
   Briefly explain what the task accomplishes and when it is used.

3. **Steps**
   Provide clear, numbered steps that describe **only the actions required**.

4. **Conditional Steps (if applicable)**  
   Separate branching workflows using clear conditions.

5. **Result**
   Describe what the user should see after completing the task.

6. **Additional Information (optional)**
   Supporting information such as tips, explanations, or troubleshooting.

---

### Writing Guidelines

#### Instructional Steps
Steps should:

- Start with an action verb.
- Describe **one action per step**.
- Reference UI elements exactly as labeled in the interface.
- Avoid explanations within the step text.

Example:
---
1. Click SUBMIT.
2. Select the appropriate decision.
3. Click NEXT.
---

#### Informational Content
Contextual information should be placed outside the step list using callouts or separate sections.

Example:
---
:::
The reviewer search field filters results as you type.
:::

---
#### Conditional Behavior
Dynamic or conditional UI behavior should be documented separately from the main steps.

Example:
---
If Group Author is set to Yes:

- A Group search field appears.
- Search for the group by name.
- Select the group from the results.
---

#### Documenting Forms
Forms should be documented as a single step followed by field descriptions.

Example:
---
2. Complete the form.
    - Author – Search for the author by name or email.
    - Corresponding Author – Select Yes if this author will be the primary contact.
    - Group Author – Select Yes if a group is credited as an author.
 
---

### Expected Outcome
Adopting this model will:

- Improve readability and scanability of procedures
- Reduce ambiguity in workflow instructions
- Provide a consistent documentation style across the site
---

### Scope
This issue applies to **task-oriented documentation pages** where users follow step-by-step procedures.

Existing pages should be gradually updated as they are edited or expanded.
