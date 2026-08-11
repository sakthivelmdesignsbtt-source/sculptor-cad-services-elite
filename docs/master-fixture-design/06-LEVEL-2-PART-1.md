# MASTER INDUSTRIAL FIXTURE DESIGN ENGINEERING
## *From Scratch to Production-Ready Professional*

# LEVEL 2 — WHAT IS A FIXTURE?
# PART 1 OF 2 — MODULE 2.1: DEFINITION AND BOUNDARIES

---

## POSITION IN THE PROGRAMME

```
  LEVEL 0  ENGINEERING FOUNDATION           ✔ COMPLETE
           5 modules · 22 lessons

  LEVEL 1  CNC MACHINING FUNDAMENTALS       ✔ COMPLETE
           3 modules · 14 lessons
           principles 28-74

  LEVEL 2  WHAT IS A FIXTURE?
    PART 1 Module 2.1  Definition and boundaries  ◄ HERE
           5 lessons
    PART 2 Module 2.2  The fourteen objectives
           6 lessons + case study CS-01
           Quiz Q2 (30 items) + comparison essay

  LEVEL 3  FIXTURE CLASSIFICATION            → next
```

---

## WHY LEVEL 2 EXISTS — AND WHY IT COMES *AFTER* LEVEL 1

A reasonable person would put "what is a fixture?" at the very beginning. This programme deliberately
does not, and the reason is worth stating before you read a word of Module 2.1.

```
   IF LEVEL 2 CAME FIRST:

     "A fixture locates, supports and clamps a
      workpiece."

     → true, memorable, and almost useless
     → you would have no reason to believe that
       locating and clamping are different duties
     → you would nod at "support" without knowing
       why it is a third category rather than part
       of the other two
```

```
   BECAUSE LEVEL 2 COMES AFTER LEVEL 1:

     ✓ You have SIZED a clamp and found friction
       short by 38× — so you know why a clamp is
       not a locator.
     ✓ You have watched a part bend under drilling
       thrust — so you know why SUPPORT is not
       CLAMPING.
     ✓ You have met an EMPTY WINDOW where no clamp
       force worked — so you know the duties can
       CONFLICT.
     ✓ You have had a chamfer tool govern a layout
       — so you know ACCESSIBILITY is an objective,
       not an afterthought.

   ┌──────────────────────────────────────────────┐
   │ LEVEL 2 IS NOT NEW INFORMATION. IT IS THE    │
   │ VOCABULARY AND STRUCTURE FOR WHAT YOU HAVE   │
   │ ALREADY BEEN DOING.                          │
   │                                              │
   │ THAT IS WHY IT IS SHORT, AND WHY IT WILL     │
   │ FEEL OBVIOUS. IT SHOULD.                     │
   └──────────────────────────────────────────────┘
```

> **A warning about this level.** Definitional material is easy to read and easy to under-learn. You
> will recognise everything here, and recognition feels like understanding. **The assessment at the end
> of Part 2 tests whether you can apply the distinctions to an unfamiliar part**, which is a different
> skill. The interview and expert questions in each lesson are where the real content of this level
> lives.

## WHAT MODULE 2.1 DOES

Module 2.1 draws **boundaries**. Each lesson takes the fixture and sets it against a neighbouring thing
that is often confused with it:

```
   FIXTURE   vs   JIG          → does it guide the tool?
   FIXTURE   vs   VISE/CHUCK   → is it dedicated?
   FIXTURE   vs   GAUGE        → does it MAKE or JUDGE?
   FIXTURE   vs   TOOLING/SPM  → where are the edges of
                                 the word?
```

Boundaries matter for a practical reason that has nothing to do with pedantry:

> **When a customer says "we need a fixture", they are frequently describing something else.** They may
> need a jig, a vise with soft jaws, a checking gauge, or a special-purpose machine. Delivering an
> excellent fixture in answer to a request that needed a gauge is a complete project failure, and it
> happens often enough that the first professional skill in this field is **hearing which of these
> things is actually being asked for.**

## CONTENTS OF PART 1

| Lesson | Title | The boundary it draws |
|---|---|---|
| **L2.1.1** | Fixture: definition, purpose and the three duties | What a fixture *is* — locate, support, clamp |
| **L2.1.2** | Fixture vs jig | **The jig guides the tool; the fixture does not** |
| **L2.1.3** | Fixture vs vise vs chuck | Dedication, repeatability, cost, cycle time |
| **L2.1.4** | Fixture vs gauge vs checking fixture | **One makes parts; one judges parts** |
| **L2.1.5** | Fixture vs tooling vs workholding vs SPM | The industry terminology map |
| — | **Module 2.1 closing** | The complete boundary map |

**The two most important lessons are L2.1.1 and L2.1.4.** L2.1.1 because the three-duty split governs
every design decision in the remaining fifty-seven levels. L2.1.4 because the make-versus-judge
distinction carries a **completely different tolerance philosophy**, and confusing the two produces
gauges that pass bad parts.

---

# MODULE 2.1 — DEFINITION AND BOUNDARIES

**Lessons:** L2.1.1 – L2.1.5
**Estimated time:** 3.5 hours
**Prerequisites:** Level 1 complete (particularly L0.3.3 locators, L1.3.3 drilling, L1.3.4 stability)

## Module learning outcome

You will be able to define a fixture formally, state and distinguish its three duties with the
engineering reason each is a separate category, correctly classify a piece of workholding as a fixture,
jig, vise, chuck, gauge or SPM, explain the different tolerance philosophy that applies to devices that
judge parts rather than make them, and — given a customer request — identify which of these things is
actually required.

---

## LESSON L2.1.1 — FIXTURE: DEFINITION, PURPOSE AND THE THREE DUTIES

### 1. Lesson title
**L2.1.1 — The formal definition of a fixture and the three duties: locate, support, clamp**

### 2. Learning objective
By the end of this lesson you will be able to state a formal definition of a fixture, explain the purpose
it serves in a manufacturing system, distinguish the three duties of locating, supporting and clamping
with the engineering reason each is a separate category, identify which element performs which duty in a
real fixture, calculate the loads associated with each duty separately, and recognise the failures that
follow from confusing them.

### 3. Prerequisites
L0.3.3 (locators, 3-2-1 principle, degrees of freedom), L0.3.2 (statics), L1.3.3 (drilling thrust and
part bending), L1.3.4 (clamping distortion).

### 4. Why the topic matters
This lesson establishes the three-way split that organises everything that follows. Every element you
will ever put on a fixture performs one of three duties, and **the commonest and most expensive fixture
errors come from an element being asked to do two of them at once.**

You have already met all three failures without them being named:

```
   CONFUSING LOCATE WITH CLAMP  (L0.3.3)
     A clamp used as a locator: the part's position
     now depends on clamp force, which varies.
     → AUTO-FAIL #1 in this programme.

   CONFUSING SUPPORT WITH CLAMP  (L1.3.3, L1.3.2)
     A thin wall clamped harder instead of supported:
     the part is distorted, machined true, and
     springs back wrong.
     → "Clamping a flexible part harder does not
        make it stiffer, it makes it wrong."

   CONFUSING SUPPORT WITH LOCATE  (coming: L2.2.1)
     An adjustable support wound up until it is
     tight: it has lifted the part off its primary
     datum and become an unplanned locator.
     → "Set adjustable supports AFTER locating,
        and never let them lift the part."
```

> **Three duties, three failure modes, and each one is a category error rather than a calculation
> error.** You cannot compute your way out of them. That is why the definition matters.

### 5. Simple explanation

```
   A FIXTURE HAS THREE JOBS

   1. LOCATE — decide WHERE the part is
        ●  hardened locators, pins, pads
        The part's position comes from these and
        ONLY these.

   2. SUPPORT — stop the part BENDING
        ▬  supports under unsupported spans
        The part's SHAPE is maintained. Position is
        NOT their job.

   3. CLAMP — HOLD the part against the locators
        ▼  clamps
        They keep the part in contact. They do not
        decide where it is.

   ┌──────────────────────────────────────────────┐
   │ LOCATE decides WHERE                         │
   │ SUPPORT decides SHAPE                        │
   │ CLAMP decides that it STAYS THERE            │
   │                                              │
   │ THREE DIFFERENT QUESTIONS. THREE DIFFERENT   │
   │ KINDS OF COMPONENT.                          │
   └──────────────────────────────────────────────┘
```

A useful test for which duty an element performs:

```
   ASK: "IF I REMOVED THIS, WHAT WOULD GO WRONG?"

     The part would be in the WRONG PLACE
        → it is a LOCATOR

     The part would BEND or CHATTER
        → it is a SUPPORT

     The part would MOVE during cutting
        → it is a CLAMP

   If the answer is "two of these", the element is
   doing two jobs and that is usually a problem.
```

### 6. Engineering explanation

**THE FORMAL DEFINITION**

There is no single universally binding standard definition, and different texts word it differently.
`[PRACTICE]` A defensible working definition, consistent with common industrial usage:

> **A fixture is a production device that locates a workpiece in a defined and repeatable position
> relative to a machine's coordinate system, supports it against deformation, and holds it securely
> against the forces of the process — without guiding the cutting tool.**

Each clause is doing work:

| Clause | Why it is in the definition |
|---|---|
| **production device** | It exists to make parts repeatably, not to make one part |
| **locates** | Duty 1 |
| **defined and repeatable position** | Repeatability is the point — one part in the right place is not a fixture |
| **relative to a machine's coordinate system** | The L1.2 link: the fixture realises the WCS |
| **supports against deformation** | Duty 2 |
| **holds securely against process forces** | Duty 3 |
| **without guiding the cutting tool** | The boundary against a **jig** — L2.1.2 |

**WHY THREE DUTIES AND NOT ONE**

The three duties are distinguished by **what physical quantity they control** and **what happens when
they fail**.

```
   ┌──────────┬─────────────┬──────────────┬────────────┐
   │  DUTY    │  CONTROLS   │ FAILS AS     │ FORCE      │
   ├──────────┼─────────────┼──────────────┼────────────┤
   │ LOCATE   │ POSITION    │ wrong        │ reacts     │
   │          │ (6 DOF)     │ dimensions,  │ whatever   │
   │          │             │ consistently │ arrives    │
   ├──────────┼─────────────┼──────────────┼────────────┤
   │ SUPPORT  │ SHAPE       │ bending,     │ reacts     │
   │          │ (stiffness) │ chatter,     │ local      │
   │          │             │ springback   │ cutting    │
   │          │             │              │ force      │
   ├──────────┼─────────────┼──────────────┼────────────┤
   │ CLAMP    │ CONTACT     │ part moves   │ APPLIES    │
   │          │ (retention) │ during the   │ force      │
   │          │             │ cut          │            │
   └──────────┴─────────────┴──────────────┴────────────┘
```

> **The bottom-right cell is the key structural difference. A clamp is the only one of the three that
> APPLIES force.** Locators and supports are reactive — they push back only as hard as something pushes
> on them. A clamp is active: it imposes a load on the part whether or not the part needs it.
>
> **That is why clamps distort parts and locators do not** (L1.3.4), and it is why clamp force has an
> upper bound while locator capacity does not.

**THE HIERARCHY — WHY ORDER MATTERS**

The three duties are not equal partners. They operate in a strict sequence:

```
   1. LOCATE FIRST
        The part is placed against the locators.
        Its position is now determined.

   2. SUPPORT SECOND
        Supports are brought into contact WITHOUT
        disturbing the located position.
        [PRACTICE] Adjustable supports are set at
        this point, never earlier.

   3. CLAMP THIRD
        Clamps hold the part against the locators
        and supports.
        The clamp force direction should push the
        part INTO the locators, never away.

   ┌──────────────────────────────────────────────┐
   │ THE SEQUENCE IS NOT A PROCEDURE — IT IS A    │
   │ LOGICAL DEPENDENCY.                          │
   │                                              │
   │ Support cannot be set before position is     │
   │ determined, because you would not know what  │
   │ you were supporting.                         │
   │                                              │
   │ Clamping cannot precede either, because a    │
   │ clamp holds the part against things that     │
   │ must already be in contact.                  │
   └──────────────────────────────────────────────┘
```

**CLAMP FORCE DIRECTION — THE RULE THAT FOLLOWS FROM THE HIERARCHY**

```
   ✓ CORRECT                    ✗ WRONG
        ▼ clamp                      ▼ clamp
     ▓▓▓▓▓▓▓▓                     ▓▓▓▓▓▓▓▓
     ●══════●  locators           ●      ●
                                  ↑ gap  ↑

   Clamp force pushes the part    Clamp force acts
   ONTO the locators.             where there is no
                                  locator beneath —
                                  the part BENDS, or
                                  lifts off elsewhere.

   [PRACTICE] EVERY CLAMP SHOULD HAVE A LOCATOR OR
   A SUPPORT DIRECTLY OPPOSITE IT. If it does not,
   the clamp force has no reaction path except
   through the part's own stiffness — which is the
   L1.3.4 distortion mechanism.
```

**THE PURPOSE OF A FIXTURE — WHY IT EXISTS AT ALL**

Beyond the three duties, it is worth being explicit about what a fixture is *for*, because it explains
which trade-offs are legitimate.

```
   A FIXTURE EXISTS TO MAKE A PROCESS REPEATABLE
   AND ECONOMIC.

   WITHOUT ONE:
     - each part must be individually set up and
       indicated — minutes to hours per part
     - position depends on operator skill
     - accuracy varies part to part
     - the process cannot be handed to a less
       skilled operator

   WITH ONE:
     - load, clamp, run — seconds
     - position is determined by the fixture, not
       by the person
     - accuracy is a property of the FIXTURE, which
       can be inspected and controlled
     - the skill is embodied in the tool rather
       than required at the machine

   ┌──────────────────────────────────────────────┐
   │ A FIXTURE CONVERTS OPERATOR SKILL INTO       │
   │ CAPITAL EQUIPMENT.                           │
   │                                              │
   │ That is the economic transaction, and it is  │
   │ why fixture cost is justified by VOLUME and  │
   │ by CONSISTENCY, not by the difficulty of the │
   │ part.                                        │
   └──────────────────────────────────────────────┘
```

`[PRACTICE]` That framing is genuinely useful in a commercial conversation. A customer asking "why does
this fixture cost so much?" is usually comparing it against nothing. The correct comparison is against
the setup time, scrap rate and skill dependency of not having it — which is the calculation in §13.

### 7. Terminology

| Term | Definition |
|---|---|
| **Fixture** | Production device that locates, supports and holds a workpiece without guiding the tool |
| **Locator** | Element determining the workpiece's position; reacts load, does not apply it |
| **Support** | Element resisting workpiece deflection without determining position |
| **Clamp** | Element applying force to hold the workpiece against locators and supports |
| **Duty** | One of the three functions: locate, support, clamp |
| **Reactive element** | Element that pushes back only as hard as it is pushed (locator, support) |
| **Active element** | Element that imposes load regardless of need (clamp) |
| **Repeatability** | Consistency of position between successive loadings |
| **Reaction path** | Route by which an applied force is carried into the fixture structure |
| **Adjustable support** | Support set into contact after the part is located |
| **Workholding** | General term for devices holding a workpiece; see L2.1.5 |

### 8. Principle

> **A FIXTURE LOCATES, SUPPORTS AND CLAMPS — AND THESE ARE THREE DIFFERENT DUTIES, NOT THREE WORDS FOR
> ONE.** Locate controls **position**, support controls **shape**, clamp controls **retention**.
> **THE CLAMP IS THE ONLY ELEMENT THAT APPLIES FORCE.** Locators and supports are reactive. That is why
> clamps distort parts and why clamp force has an upper bound.
> **THE ORDER IS A LOGICAL DEPENDENCY, NOT A PROCEDURE:** locate, then support, then clamp.
> **EVERY CLAMP NEEDS A LOCATOR OR SUPPORT DIRECTLY OPPOSITE IT**, or its force has no reaction path
> except the part's own stiffness.
> **A FIXTURE CONVERTS OPERATOR SKILL INTO CAPITAL EQUIPMENT.**

### 9. Industrial application

**Identifying the duty of every element — a design review technique**

```
   THE ELEMENT AUDIT  [PRACTICE]

   For every element touching the part, record:

   ┌────────┬────────┬──────────────┬─────────────┐
   │ ITEM   │ DUTY   │ IF REMOVED?  │ REACTION    │
   ├────────┼────────┼──────────────┼─────────────┤
   │ Pad 1  │ LOCATE │ wrong Z      │ cutting +   │
   │        │        │ position     │ clamp force │
   │ Pin A  │ LOCATE │ wrong X,Y    │ side force  │
   │ Pin B  │ LOCATE │ rotates      │ moment      │
   │ Sup 1  │ SUPPORT│ wall bends   │ local cut   │
   │ Clamp1 │ CLAMP  │ part lifts   │ APPLIES     │
   │ Step X │ ???    │ ???          │ ???         │
   └────────┴────────┴──────────────┴─────────────┘

   ANY ROW YOU CANNOT FILL IN IS A PROBLEM.

   "Step X" in that table is the L0.3.3 case: an
   incidental feature touching the part that nobody
   assigned a duty to. IT IS STILL A LOCATOR — it
   just is not a designed one.
```

> **The audit's value is the last row.** Every fixture accumulates features that touch the part for
> reasons that were once clear — a step left from machining, a bolt head, a clamp body resting against
> an edge. **If it touches the part, it has a duty whether you assigned one or not**, and the L1.3.1
> failure case showed a fixture working *by accident* because of exactly that.

**When one element is asked to do two duties**

`[PRACTICE]` Sometimes it is unavoidable, and it can be done deliberately. The rule is that it must be
a decision, not an accident:

| Combination | When acceptable | The risk |
|---|---|---|
| **Locate + support** | Very common and usually fine — a locating pad both positions and supports | None, provided the pad is stiff enough not to deflect under cutting load |
| **Support + clamp** | Occasionally — a clamp bearing on a supported point | The clamp force must not exceed the support's capacity to react it locally |
| **Locate + clamp** | **Almost never acceptable** | Position now depends on clamp force. **Auto-fail #1.** |

```
   THE ONE THAT IS ALWAYS WRONG

     ✗ A clamp that also positions the part

     Position becomes a function of:
       - clamp force (varies)
       - friction (varies, coolant halves it)
       - surface condition (varies)
       - operator technique (varies)

     EVERY ONE OF THOSE IS A VARIABLE. A LOCATOR
     HAS NONE OF THEM.
```

### 10. Design rules
- **R1** — Assign **exactly one primary duty** to every element, and record it `[PRACTICE]`.
- **R2** — **Never use a clamp as a locator.** Position must not depend on clamp force (auto-fail #1).
- **R3** — **Locate, then support, then clamp** — this is a logical dependency, not merely a sequence.
- **R4** — Provide a **locator or support directly opposite every clamp** so the force has a reaction
  path.
- **R5** — Set **adjustable supports after locating**, and never allow them to lift the part.
- **R6** — Audit **every element that touches the part**, including incidental ones, and assign a duty.
- **R7** — Direct **clamp force into the locators**, never away from them.
- **R8** — Where an element must serve two duties, make it an **explicit decision** with the risk
  recorded.
- **R9** — Size **locators for the loads they react**; size **clamps for the load they must apply**.
  These are different calculations.
- **R10** — Justify the fixture against the **cost of not having it** — setup time, scrap, skill
  dependency.

### 11. Rules of thumb
- **Locate decides where; support decides shape; clamp decides that it stays.**
- **Ask "if I removed this, what would go wrong?"** — the answer names the duty.
- **The clamp is the only element that applies force.**
- **Every clamp needs something directly opposite it.**
- **Locate + support in one element is fine. Locate + clamp almost never is.**
- **If it touches the part, it has a duty** — designed or not.
- **Adjustable supports are set after locating**, and must not lift the part.
- **A fixture converts operator skill into capital equipment.**
- **Fixture cost is justified by volume and consistency**, not by part difficulty.

### 12. Formulae

**Locator reaction (reactive element)**
```
R_locator = ΣF_applied in that direction
          = F_cutting + F_clamp + W  (as applicable)
→ the locator reacts whatever arrives; it does not
  choose its load
```

**Clamp force (active element)**
```
F_clamp ≥ (F_disturbing · SF) / n        lower bound
F_clamp ≤ F_distortion_limit             upper bound
→ the clamp CHOOSES its load, within a window
```

**Support requirement**
```
Support needed where:  δ_part > T_allowable
δ_part = C·F·L³/(E·I)              (L0.3.4)
→ support converts a long span into short spans:
   δ ∝ L³, so halving the span gives 1/8 the
   deflection
```

**Economic justification of a fixture**
```
Saving_annual = (t_without − t_with) × N × rate
              + (scrap_without − scrap_with) × N × C_part

Payback (months) = C_fixture / (Saving_annual/12)
```

| Variable | Meaning | Unit |
|---|---|---|
| R_locator | Reaction at a locator | N |
| n | Number of clamps | — |
| t | Time per part | h |
| N | Annual volume | parts/yr |
| C_part | Cost of a scrapped part | ₹ |
| C_fixture | Fixture cost | ₹ |

### 13. Worked numerical example

**Problem:** A bracket is currently machined by clamping in a vise and indicating each part individually.
A dedicated fixture is proposed. Separate the three duties and size each, then justify the fixture
economically against the current method.

```
GIVEN:
  PART AND PROCESS                               [PROJ]
    Aluminium bracket, mass 3.6 kg
    Machined face 260 × 140 mm
    Unsupported span between locating pads = 180 mm
    Wall thickness under the cut       = 8 mm
    Section width                      = 140 mm

  CUTTING LOADS (from Level 1 methods)           [PROJ]
    Resultant horizontal force  = 2,450 N
    Vertical force, conventional
      milling case (LIFTING)    = 780 N
    Local downward cutting force
      at mid-span               = 610 N

  MATERIAL                                       [GUIDE]
    Aluminium E                 = 70,000 N/mm²

  FIXTURE PROPOSAL                               [PROJ]
    3 locating pads, 2 locating pins
    2 clamps
    Positive stop against the horizontal force
    Safety factor               = 2.5   [PRACTICE]
    Deflection allowed under the cut = 0.02 mm
      (part tolerance ±0.08, allowing 25 %)

  CURRENT METHOD                                 [EX-ASSUMED]
    Setup and indicate per part = 11 min
    Scrap rate                  = 2.2 %
  PROPOSED METHOD                                [EX-ASSUMED]
    Load and clamp per part     = 0.7 min
    Scrap rate                  = 0.3 %
  ECONOMICS                                      [EX-ASSUMED]
    Volume                      = 3,800 parts/yr
    Machine rate                = ₹1,800/h
    Part value at this stage    = ₹2,400
    Fixture cost                = ₹185,000

REQUIRED:
  (a) The load each LOCATOR must react
  (b) The clamp force required, and its duty
  (c) Whether a SUPPORT is needed, with the
      deflection calculation
  (d) The support spacing that would satisfy the
      deflection limit
  (e) Annual time and scrap saving
  (f) Payback period
  (g) Engineering conclusion

ASSUMPTION:
  1. Cutting loads derived by the Level 1 methods for
     this operation; they are PROJECT values for this
     part and would be recalculated for another.
     [PROJ]
  2. The unsupported span is modelled as a simply
     supported beam with a central point load. The
     real case is between two pads with some
     rotational restraint, so this OVERESTIMATES
     deflection and is CONSERVATIVE. [PRACTICE]
  3. Section taken as a solid rectangle 140 wide ×
     8 thick. Any ribbing would increase I and reduce
     deflection. [PROJ]
  4. Deflection allowance of 25 % of the part
     tolerance is a PRACTICE allocation, chosen to
     leave room for the other error sources
     identified in L1.2.4. [PRACTICE]
  5. Times and costs are ILLUSTRATIVE ASSUMED VALUES
     for the method. [EX-ASSUMED]
  6. The horizontal force is taken by a positive
     stop, so the clamp is NOT sized from it — per
     L1.3.1. [PRACTICE]

FORMULA:
  (a) R = ΣF in the relevant direction
  (b) F_clamp ≥ (F_lift · SF)/n
  (c) δ = F L³/(48 E I)   simply supported, central
      I = b h³/12
  (e) Saving = Δt·N·rate + Δscrap·N·C_part
  (f) Payback = C_fixture/(Saving/12)

UNIT CONVERSION:
  W = 3.6 × 9.81 = 35.3 N
  All forces N, lengths mm.

SUBSTITUTION AND CALCULATION:

  (a) LOCATOR REACTIONS — THE REACTIVE DUTY

      The locating PADS react the downward loads:
        Clamp force (calculated below)  2 × 975.0
                                      = 1,950.0 N
        Part weight                   =    35.3 N
        Local cutting force (downward) =   610.0 N
        ─────────────────────────────────────────
        Total reacted by the pads      = 2,595.3 N

        Over 3 pads, average           =   865.1 N

      The locating PINS react the horizontal force:
        With a positive stop fitted, the STOP takes
        the horizontal cutting force:
        R_stop = 2,450 N

      NOTE THE CHARACTER OF THESE NUMBERS: the
      locators did not CHOOSE any of them. They react
      whatever the clamps, gravity and the cut deliver.

  (b) CLAMP FORCE — THE ACTIVE DUTY

      The clamp's job is to prevent LIFTING (the
      conventional milling case governs, per L1.3.1):

        F_clamp ≥ (F_lift · SF)/n
                = (780 × 2.5)/2
                = 1,950/2
                = 975.0 N per clamp

      → 975.0 N per clamp, 1,950.0 N total.

      THE CLAMP CHOSE THIS. It is a design decision
      bounded below by the lifting force and above by
      distortion — the L1.3.4 window. Here the window
      is comfortable because the part is a solid
      bracket rather than a thin ring.

  (c) IS A SUPPORT NEEDED? — THE SHAPE DUTY

      Section second moment of area:
        I = b h³/12
          = 140 × 8³/12
          = 140 × 512/12
          = 71,680/12
          = 5,973.33 mm⁴

      Deflection at mid-span, simply supported,
      central load 610 N over 180 mm:

        δ = F L³/(48 E I)
          = 610 × 180³/(48 × 70,000 × 5,973.33)
          = 610 × 5,832,000/(20,070,388,800)
          = 3,557,520,000/20,070,388,800
          = 0.17724 mm

      → δ = 0.1772 mm

      Against the 0.02 mm allowance:
        0.1772/0.02 = 8.86 ×

      ✗ FAIL BY 8.86 TIMES. A SUPPORT IS ESSENTIAL.

      Note this has nothing to do with clamping. More
      clamp force would not reduce it — it would add
      to it.

  (d) SUPPORT SPACING REQUIRED

      δ ∝ L³, so to reduce δ by a factor of 8.86:

        L_required = 180 × (1/8.86)^(1/3)
                   = 180 × (0.11287)^(1/3)
                   = 180 × 0.48339
                   = 87.01 mm

      → Maximum span 87.0 mm.

      With the 180 mm span, adding ONE support at
      mid-span gives two spans of 90 mm:
        δ_new = 0.17724 × (90/180)³
              = 0.17724 × 0.125
              = 0.022155 mm

        0.022155/0.02 = 1.108 → 10.8 % over. MARGINAL.

      Adding TWO supports gives three spans of 60 mm:
        δ_new = 0.17724 × (60/180)³
              = 0.17724 × 0.037037
              = 0.0065645 mm
              = 32.8 % of the allowance   ✓ PASS

      → SPECIFY TWO SUPPORTS, giving 60 mm spans.

  (e) ANNUAL SAVING

      TIME:
        Δt = 11 − 0.7 = 10.3 min = 0.171667 h
        Saving = 0.171667 × 3,800 × 1,800
               = 0.171667 × 6,840,000
               = ₹1,174,200 per year

      SCRAP:
        Δscrap = 2.2 % − 0.3 % = 1.9 %
        Parts saved = 0.019 × 3,800 = 72.2 parts
        Saving = 72.2 × 2,400
               = ₹173,280 per year

      TOTAL ANNUAL SAVING
        = 1,174,200 + 173,280
        = ₹1,347,480 per year

  (f) PAYBACK

        Monthly saving = 1,347,480/12
                       = ₹112,290

        Payback = 185,000/112,290
                = 1.648 months
                ≈ 1.6 months

      → PAYBACK IN UNDER SEVEN WEEKS.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Total reacted by pads    │ 2,595.3 N         │
  │     Average per pad          │ 865.1 N           │
  │     Stop reaction            │ 2,450 N           │
  │ (b) Clamp force per clamp    │ 975.0 N           │
  │ (c) Unsupported deflection   │ 0.1772 mm         │
  │     vs 0.02 allowance        │ 8.86× ✗ FAIL      │
  │ (d) Max permissible span     │ 87.0 mm           │
  │     1 support (90 mm spans)  │ 0.02216 mm ⚠ 111 %│
  │     2 supports (60 mm spans) │ 0.00656 mm ✓ 33 % │
  │ (e) Time saving              │ ₹1,174,200/yr     │
  │     Scrap saving             │ ₹173,280/yr       │
  │     Total                    │ ₹1,347,480/yr     │
  │ (f) Payback                  │ 1.6 months        │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  SF = 2.5 applied to the lifting force in sizing the
  clamp. NOT applied to the deflection calculation,
  which is a predicted dimensional effect compared
  directly against a tolerance allocation — the
  margin there is expressed as the 25 % allowance
  instead.

PASS/FAIL:
  ✓ PASS — locators, reacting 2,595.3 N over three
    pads plus 2,450 N at the stop.
  ✓ PASS — clamps at 975.0 N each.
  ✗ FAIL — unsupported: 8.86× the deflection
    allowance.
  ✓ PASS — with two supports at 60 mm spacing, 33 %
    of the allowance.
  ✓ PASS — economics, 1.6 month payback.

ENGINEERING CONCLUSION:
  1. THE THREE DUTIES PRODUCED THREE COMPLETELY
     DIFFERENT CALCULATIONS, AND THAT IS THE POINT
     OF THE LESSON.
     The LOCATORS were sized by summing what arrives
     at them — 2,595.3 N that they did not choose and
     cannot influence. The CLAMPS were sized by a
     decision bounded above and below — 975.0 N
     selected from a window. The SUPPORTS were sized
     by a stiffness calculation that involves no
     force balance at all, only δ and a tolerance.
     THREE DUTIES, THREE METHODS, THREE FAILURE
     MODES. A designer who thinks of a fixture as
     "holding the part" performs only the second of
     these and misses the other two.

  2. THE SUPPORT REQUIREMENT WAS THE LARGEST FINDING
     AND IT IS INVISIBLE TO A FORCE ANALYSIS.
     0.1772 mm of deflection against a 0.02 mm
     allowance — 8.86 times over. Nothing in the
     force balance revealed this: the part is held
     perfectly securely, nothing slides, nothing
     lifts, and it still machines out of tolerance
     because it bends under the cut.
     MORE CLAMP FORCE WOULD MAKE IT WORSE, not
     better, because the clamp is an active element
     adding to the load. THE ANSWER IS A THIRD KIND
     OF ELEMENT ENTIRELY, and if the designer's
     vocabulary contains only "locate" and "clamp",
     that element never gets fitted.

  3. THE CUBIC LAW MADE THE SUPPORT DECISION EASY.
     One support at mid-span halves the span and gives
     one eighth the deflection — but that landed at
     111 % of the allowance, marginally failing. Two
     supports give one-third spans and one
     twenty-seventh the deflection, landing at 33 %.
     BECAUSE δ ∝ L³, THE STEP FROM ONE SUPPORT TO TWO
     IS NOT INCREMENTAL — it is a factor of 3.375.
     There was no need to agonise over the marginal
     single-support case; the next option down is
     dramatically better and costs one more component.

  4. THE ECONOMIC CASE IS NOT CLOSE, AND THE TIME
     SAVING DOMINATES.
     ₹1,174,200 of time against ₹173,280 of scrap —
     the time saving is 6.8 times the scrap saving.
     That is the usual pattern and it is worth
     knowing, because customers often justify
     fixtures on quality grounds when the stronger
     argument is cycle time.
     A 1.6-MONTH PAYBACK MEANS THE FIXTURE IS NOT A
     COST DECISION AT ALL. At this volume the
     question is not whether to build it but why it
     was not built sooner.

  5. WHAT THE CALCULATION SAYS ABOUT WHAT A FIXTURE
     IS FOR.
     Eleven minutes of skilled indicating per part
     became forty-two seconds of loading. The accuracy
     that previously came from an operator's care now
     comes from hardened locators that can be
     inspected, controlled and replaced. THE FIXTURE
     CONVERTED OPERATOR SKILL INTO CAPITAL EQUIPMENT
     — which is the definition of what these devices
     are for, expressed as a number.

SENSITIVITY NOTE:
  Ranked by influence:
    1. SUPPORT SPAN — cubic, and the difference
       between failing by 8.86× and passing at 33 %.
       The single most powerful variable, and it
       costs almost nothing to change.
    2. SETUP TIME DIFFERENCE — drives 87 % of the
       economic case. Even halving the assumed saving
       leaves a payback under four months.
    3. WALL THICKNESS h — I ∝ h³, so a 10 mm wall
       instead of 8 would give (10/8)³ = 1.95× the
       stiffness and might remove one support.
       Not under the fixture designer's control, but
       worth knowing when reviewing a part design.
    4. CLAMP FORCE — comfortable here, with a wide
       window. Would become critical on a thinner or
       ring-shaped part (L1.3.4).
    5. SCRAP RATE — the smaller economic term.
       Uncertain, and the conclusion does not depend
       on it.
```

### 14. Engineering assumptions
- Cutting loads are project values derived by Level 1 methods for this operation `[PROJ]`.
- The span is modelled as simply supported with a central point load; real end restraint makes this
  conservative `[PRACTICE]`.
- Section taken as a solid rectangle; ribbing would increase I `[PROJ]`.
- Deflection allowance of 25% of part tolerance is a practice allocation `[PRACTICE]`.
- Times and costs are illustrative assumed values `[EX-ASSUMED]`.
- Horizontal force taken by a positive stop, so the clamp is not sized from it `[PRACTICE]`.

### 15. Diagram

```
     THE THREE DUTIES OF A FIXTURE
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE THREE DUTIES, AND WHAT EACH CONTROLS

        ▼ CLAMP — controls RETENTION
        │        the ONLY element that APPLIES force
        │
     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  part
     ●═══▬▬▬▬▬▬▬▬▬═══●
     │      │        │
   LOCATE  SUPPORT  LOCATE
   controls controls
   POSITION SHAPE

   ┌──────────────────────────────────────────────┐
   │ LOCATE decides WHERE                         │
   │ SUPPORT decides SHAPE                        │
   │ CLAMP decides that it STAYS THERE            │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  REACTIVE vs ACTIVE — THE STRUCTURAL DIFFERENCE

   LOCATOR / SUPPORT          CLAMP
     ▲                          │
     │ pushes back only         ▼ imposes load
     │ as hard as it is         whether the part
     │ pushed                   needs it or not

   ┌──────────────────────────────────────────────┐
   │ THE CLAMP IS THE ONLY ACTIVE ELEMENT.        │
   │                                              │
   │ THAT IS WHY CLAMPS DISTORT PARTS AND         │
   │ LOCATORS DO NOT, AND WHY CLAMP FORCE HAS AN  │
   │ UPPER BOUND WHILE LOCATOR CAPACITY DOES NOT. │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE HIERARCHY — A LOGICAL DEPENDENCY

   1  LOCATE   ●══════●   position determined
                  ↓
   2  SUPPORT  ●══▬▬══●   shape maintained,
                          position UNDISTURBED
                  ↓
   3  CLAMP    ●══▬▬══●   held against 1 and 2
               ▼    ▼

   Support cannot be set before position is known.
   Clamping cannot precede either.

  ──────────────────────────────────────────────────────────

  EVERY CLAMP NEEDS SOMETHING OPPOSITE IT

   ✓ CORRECT                 ✗ WRONG
      ▼                         ▼
   ▓▓▓▓▓▓▓                   ▓▓▓▓▓▓▓
   ═══●═══                   ●     ●
      ▲                        gap
   reaction path            no reaction path except
   straight through         THE PART'S OWN STIFFNESS
                            → the L1.3.4 distortion
                              mechanism

  ──────────────────────────────────────────────────────────

  THE WORKED EXAMPLE — THREE DUTIES, THREE METHODS

   LOCATE    sum what ARRIVES      2,595.3 N
             (reactive — no choice)

   CLAMP     choose within a       975.0 N/clamp
             WINDOW (active)

   SUPPORT   stiffness vs          0.1772 mm ✗ 8.86×
             TOLERANCE                  ↓
             (no force balance      2 supports
              at all)               0.00656 mm ✓ 33 %

   ┌──────────────────────────────────────────────┐
   │ THE SUPPORT REQUIREMENT IS INVISIBLE TO A    │
   │ FORCE ANALYSIS. Nothing slides, nothing      │
   │ lifts — and the part still machines out of   │
   │ tolerance because it BENDS.                  │
   │                                              │
   │ MORE CLAMP FORCE WOULD MAKE IT WORSE.        │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  δ ∝ L³ MAKES THE SUPPORT DECISION EASY

   no support   ████████████████████ 0.1772 mm ✗
   1 support    ██ 0.0222 mm ⚠ 111 % of allowance
   2 supports   ▌ 0.0066 mm ✓ 33 %

   ONE MORE COMPONENT = A FACTOR OF 3.375
   Do not agonise over a marginal case when the
   next option down is dramatically better.

  ──────────────────────────────────────────────────────────

  WHAT A FIXTURE IS FOR

   WITHOUT              WITH
   11 min/part          0.7 min/part
   2.2 % scrap          0.3 % scrap
   skill AT the         skill EMBODIED IN
   machine              the tool

   ₹1,347,480/yr saved · payback 1.6 MONTHS

   ┌──────────────────────────────────────────────┐
   │ A FIXTURE CONVERTS OPERATOR SKILL INTO       │
   │ CAPITAL EQUIPMENT.                           │
   │                                              │
   │ Time saving was 6.8× the scrap saving —      │
   │ THE USUAL PATTERN, and worth knowing when a  │
   │ customer justifies a fixture on quality      │
   │ grounds alone.                               │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-6100 — ELEMENT DUTY SCHEDULE
STANDARD: ASME Y14.5-2018
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: ELEMENT DUTIES —
        ITEMS 4, 5, 6   LOCATING PADS (Z POSITION)
        ITEMS 7, 8      LOCATING PINS (X, Y POSITION
                        AND ORIENTATION)
        ITEMS 11, 12    SUPPORTS (SHAPE ONLY — THESE
                        DO NOT DETERMINE POSITION)
        ITEMS 15, 16    CLAMPS (RETENTION ONLY)
        ITEM 19         POSITIVE STOP (HORIZONTAL
                        CUTTING FORCE)

NOTE 2: SUPPORTS ITEMS 11 AND 12 MUST BE SET AFTER THE
        COMPONENT IS SEATED ON PADS ITEMS 4, 5 AND 6.
        THEY MUST NOT LIFT THE COMPONENT. A SUPPORT
        THAT LIFTS THE COMPONENT HAS BECOME A LOCATOR
        AND WILL PRODUCE POSITION ERRORS.

NOTE 3: CLAMPS ITEMS 15 AND 16 BEAR DIRECTLY OVER PADS
        ITEMS 4 AND 6. THIS ALIGNMENT IS A FUNCTIONAL
        REQUIREMENT — IT PROVIDES THE REACTION PATH
        FOR THE CLAMP FORCE. DO NOT RELOCATE.

NOTE 4: MINIMUM CLAMP FORCE 975 N EACH.
        SUPPORT SPACING 60 mm MAXIMUM — SEE
        CALCULATION SHEET CS-6100.
```

Note 1 is the unusual one and it is worth adopting as a habit. **Stating each element's duty on the
drawing** prevents the most common maintenance error: someone replacing a support with a stiffer clamp,
or adding a "helpful" extra contact that turns out to be an unplanned locator.

### 17. CAD workflow
1. Model the **locators first** — they determine position, so everything else references them
2. Verify the **3-2-1 scheme** and the degrees of freedom constrained (L0.3.3)
3. Add **supports** where the deflection calculation requires them, and mark them as supports in the BOM
4. Add **clamps**, each with a locator or support **directly opposite**
5. Run the **element audit**: list every element touching the part and assign its duty
6. Check for **incidental contacts** — plate edges, bolt heads, clamp bodies — and either relieve them or
   assign them a duty
7. Produce the **duty schedule** as a drawing note

`[PRACTICE]` Step 6 is the one that catches real problems. In CAD it is easy to see designed contacts and
easy to miss the fixture body brushing the part somewhere nobody intended. An interference check with a
small clearance offset finds them.

### 18. GD&T application

```
STANDARD: ASME Y14.5-2018

  THE THREE DUTIES ARE TOLERANCED DIFFERENTLY,
  AND THAT IS THE CLEAREST EXPRESSION OF WHY THEY
  ARE DIFFERENT DUTIES.

  LOCATORS — tight, because they determine position:
  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.02 │ A │ B │ C │          │
  └──────────────────────────────────┘

  SUPPORTS — loose in position, controlled in
  HEIGHT only, because they must not determine
  position:
  ┌──────────────────────────────────┐
  │ ⌖ │ Ø1.0 │ A │ B │ C │           │  position
  └──────────────────────────────────┘
  height set at assembly, adjustable

  CLAMPS — position is a functional requirement
  (the reaction path) but not a precision one:
  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.5 │ A │ B │ C │           │
  └──────────────────────────────────┘

  ┌────────────────────────────────────────────┐
  │ A SUPPORT TOLERANCED AS TIGHTLY AS A       │
  │ LOCATOR HAS BEEN MISUNDERSTOOD — AND       │
  │ WORSE, IF IT IS ALSO SET TO A FIXED HEIGHT │
  │ IT WILL FIGHT THE LOCATORS AND BECOME AN   │
  │ OVER-CONSTRAINT.                           │
  │                                            │
  │ THE LOOSE TOLERANCE ON A SUPPORT IS NOT    │
  │ CARELESSNESS. IT IS THE CORRECT            │
  │ SPECIFICATION OF ITS DUTY.                 │
  └────────────────────────────────────────────┘
```

### 19. Manufacturing method
Each duty implies a different manufacturing route, which is another expression of the distinction:

| Duty | Route |
|---|---|
| **Locators** | Machine soft → harden 58–62 HRC → **grind in position** → CMM to the fixture datums |
| **Supports** | Usually **bought-in adjustable or spring units** (L0.5.2); locked after setting |
| **Clamps** | **Bought-in** standard clamps; mounting positions machined to a moderate tolerance |
| **Positive stops** | As locators — hardened and ground in position |

`[PRACTICE]` The pattern is that **elements determining position are made and ground in position**, while
elements that merely apply or react load are bought in. That is the L0.5.2 buy-versus-make principle
falling out of the duty split rather than being a separate rule.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Locator positions | CMM from fixture datums | ±0.02 mm |
| Locator hardness | Portable tester | 58–62 HRC |
| Support contact without lifting | Indicate the part while setting supports | No rise |
| Support spacing | Scale / CMM | ≤60 mm |
| Clamp opposite a locator | Visual against the model | Aligned |
| Clamp force | Load cell | ≥975 N each |
| Element duty schedule present | Drawing review | All elements listed |
| Incidental contacts | Feeler gauge around the part | None unassigned |

`[PRACTICE]` The last row is the physical version of the element audit — running a feeler gauge round the
part to find contacts nobody designed. It is quick and it regularly finds something.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Using a clamp as a locator** | Position depends on clamp force — auto-fail #1 |
| 2 | Treating **support as a form of clamping** | More force applied; distortion instead of stiffness |
| 3 | Setting **adjustable supports before locating** | Part lifted off its datum; support becomes a locator |
| 4 | **No locator or support opposite a clamp** | Clamp force reacted through the part; distortion |
| 5 | Not assigning a duty to **incidental contacts** | The fixture works by accident (L1.3.1) |
| 6 | **Tolerancing supports as tightly as locators** | Over-constraint; supports fight the locators |
| 7 | Sizing **locators and clamps by the same method** | They are reactive and active respectively |
| 8 | Omitting the **deflection check** entirely | Support requirement invisible to a force analysis |
| 9 | Justifying a fixture on **quality alone** | The time saving is usually the larger term |
| 10 | Clamp force directed **away from the locators** | Part lifts or shifts |
| 11 | Assuming **more clamps** solve a bending problem | They add load; supports solve it |
| 12 | No **duty schedule** on the drawing | Maintenance substitutes the wrong element type |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Position varies with clamp force | A clamp is acting as a locator | Vary clamp force, measure position | Fit a proper locator | Design rule R2 |
| Part machined out of tolerance but never moves | Deflection — no support | Measure deflection under load | Add supports | Deflection check at design |
| Part distorted after unclamping | Clamp force reacted through the part | Measure clamped vs free | Locator/support opposite each clamp | Design rule R4 |
| Position changed after supports were set | Supports lifted the part | Indicate while setting | Reset after locating | Design rule R5 |
| Fixture "sometimes" works | Incidental contact carrying load | Feeler gauge audit | Assign or relieve | Element audit |
| Supports will not seat | Over-constraint from tight tolerances | Check support tolerances | Loosen; make adjustable | Design rule R6 |
| Chatter with no measurable movement | Insufficient support stiffness | Vary support positions | Closer spacing | δ ∝ L³ |
| Fixture rejected on cost | Justified on quality only | Recompute with setup time | Present the time saving | Economic model |

### 23. Design checklist
- [ ] Has **every element been assigned exactly one duty**?
- [ ] Does **any clamp determine position**? (Auto-fail if yes.)
- [ ] Is the **locate → support → clamp** dependency respected?
- [ ] Does **every clamp have a locator or support directly opposite**?
- [ ] Are **adjustable supports set after locating**, and prevented from lifting the part?
- [ ] Has a **deflection calculation** been done, and are supports sized from it?
- [ ] Have **incidental contacts** been found and either relieved or assigned a duty?
- [ ] Are **supports toleranced loosely** in position, unlike locators?
- [ ] Are **locators sized reactively** and **clamps sized actively**?
- [ ] Is clamp force directed **into** the locators?
- [ ] Is the **duty schedule** on the drawing?
- [ ] Is the economic case built on **setup time as well as scrap**?

### 24. Beginner exercise
**E2.1.1-B** — A fixture holds a plate with three pads, two pins, two clamps and one adjustable support.
(a) State the duty of each of the four element types.
(b) For each duty, state what would go wrong if that element were removed.
(c) State which of the three duties applies force rather than reacting it, and why that matters.
(d) State the correct order of operations when loading a part, and explain why the order is not arbitrary.
(e) A designer proposes to remove the support and increase clamp force instead. State why this will not
work.

### 25. Intermediate exercise
**E2.1.1-I** — A steel bracket (E = 200,000 N/mm²) spans 220 mm between locating pads. The section under
the cut is 100 mm wide and 10 mm thick. A downward cutting force of 900 N acts at mid-span. The part
tolerance is ±0.06 mm and 25% may be allocated to deflection. The lifting force in the governing cutting
case is 1,100 N; two clamps; safety factor 2.5.
(a) Calculate the second moment of area of the section.
(b) Calculate the mid-span deflection with no support and state whether it passes.
(c) Calculate the maximum permissible span.
(d) Determine how many supports are needed and calculate the resulting deflection.
(e) Calculate the required clamp force per clamp and state which duty this is.
(f) Calculate the total load reacted by the locating pads, including clamp force, weight (part mass
6.8 kg) and the downward cutting force.
(g) Explain why the calculations in (d), (e) and (f) are three different kinds of calculation.

### 26. Advanced exercise
**E2.1.1-A** — An aluminium casting (E = 70,000 N/mm², mass 9.4 kg) is to be fixtured for a milling
operation. The part has: a flat base 380 × 200 mm; a thin web 6 mm thick spanning 240 mm across the
middle; two existing machined bores 300 mm apart; and a boss that must be milled at one end, 165 mm from
the nearest bore. Cutting loads: resultant horizontal 3,100 N, lifting 940 N in the governing case, local
downward force at the web 520 N. Part tolerance ±0.07 mm. The current method is a vise with soft jaws
taking 8.5 min/part at 3.1% scrap; the fixture would take 0.9 min/part at 0.4% scrap. Volume 5,200
parts/yr, machine rate ₹1,800/h, part value ₹3,100, estimated fixture cost ₹240,000 `[EX-ASSUMED]`.
(i) Propose a complete locating scheme and state which degrees of freedom each locator constrains.
(ii) Calculate the deflection of the 6 mm web under the local cutting force and determine the support
requirement, allocating 25% of the tolerance.
(iii) Determine the clamp force required and state its bounds.
(iv) Calculate the total reaction at the locating pads.
(v) Produce the element duty schedule for your design.
(vi) Identify one element in your scheme that serves two duties and justify it.
(vii) Explain why the moment produced by the horizontal force at the boss (165 mm from the nearest bore)
matters, and calculate the reaction at each bore-locating pin.
(viii) Calculate the annual saving and the payback period.
(ix) State which term dominates the economic case and what that implies for how you would present it.
(x) Write the four drawing notes covering duties, support setting, clamp reaction paths and clamp force.

### 27. Interview questions
1. *"What is a fixture?"*
   **Answer:** A production device that locates a workpiece in a defined and repeatable position relative
   to the machine's coordinate system, supports it against deformation, and holds it securely against the
   forces of the process — without guiding the cutting tool. That last clause is what distinguishes it
   from a jig. The three duties in the middle — locate, support, clamp — are genuinely different jobs
   rather than three words for the same thing: locating decides where the part is, supporting decides
   that it keeps its shape, and clamping decides that it stays put. And the underlying purpose is that a
   fixture converts operator skill into capital equipment: instead of a skilled person indicating each
   part, the accuracy comes from hardened locators that can be inspected and controlled.
2. *"Why are locating and clamping treated as separate things? Doesn't the clamp hold the part in
   position?"*
   **Answer:** The clamp holds the part *against* the locators, but it must not determine where the part
   is. The difference matters because a clamp is the only element that applies force rather than reacting
   it, and applied force varies — with the operator, with the pressure setting, with friction, which
   coolant roughly halves. If the part's position depends on any of those, it varies too. A locator has
   none of those variables: the part touches it and that is where the part is. So we say position comes
   from the locators only, and the clamp's job is simply to keep the part in contact with them. Using a
   clamp as a locator is treated as an automatic fail in this programme for that reason.

### 28. Expert questions
1. *"Why is support treated as a separate duty rather than as part of locating or clamping?"*
   **Answer:** Because it controls a different physical quantity, it fails in a different way, and it is
   sized by a completely different calculation — and if it is not named separately, it gets omitted.
   Take the quantities first. **Locating controls position, which is a rigid-body property** — six degrees
   of freedom, and it does not matter how stiff the part is. **Clamping controls retention**, which is a
   force balance. **Support controls shape**, which is a stiffness problem and involves the part's own
   elasticity. In the example in this lesson the part was located perfectly and held perfectly securely,
   nothing slid and nothing lifted, and it still machined 0.177 mm out of position because the web bent
   under the cut. **No force balance would have revealed that**, because the force balance was satisfied.
   Then the failure modes. A locating failure gives you parts in the wrong place, consistently. A clamping
   failure gives you parts that move, usually intermittently. **A support failure gives you parts that
   are dimensionally wrong while the fixture appears to be working perfectly** — which is much harder to
   diagnose, because every check you would naturally perform passes.
   The sizing methods are the clearest evidence. A locator is sized by summing what arrives at it: it is
   reactive and has no say in its own load. A clamp is sized by choosing a value within a window bounded
   below by the disturbing force and above by distortion. **A support is sized by comparing a predicted
   deflection against a tolerance allocation, which involves no force balance at all** — you are solving
   δ = FL³/48EI against a number that came off a drawing.
   And the practical argument, which I think is the strongest one: **if your vocabulary contains only
   "locate" and "clamp", then when a part bends you will reach for more clamp force.** That is the exact
   wrong answer — the clamp is an active element and it adds to the load, so clamping a flexible part
   harder distorts it rather than stiffening it. Having "support" as a named third category is what makes
   the correct response available. Naming things is not pedantry when the name is the thing that makes
   you reach for the right component.
   The one place the boundary genuinely blurs is that **a locating pad is nearly always also a support**,
   and that is fine — it positions the part and it resists deflection at that point. The combination that
   is not fine is locate plus clamp, because that one puts a variable into the position.
2. *"A customer says their fixture is too expensive. How do you respond?"*
   **Answer:** By finding out what they are comparing it against, because in my experience the number is
   rarely being compared against anything — it is being compared against zero.
   The correct comparison is the cost of not having it, and that has three parts. **Setup time** is
   usually the largest and the most overlooked: in the case in this lesson, eleven minutes of indicating
   per part against forty-two seconds of loading, which at three and a half thousand parts a year came to
   nearly one point two million rupees annually. **Scrap** is the term customers usually lead with, and
   it was real here — about a hundred and seventy thousand a year — but it was **6.8 times smaller than
   the time saving**, which is the typical pattern. And **skill dependency**, which is harder to price but
   often decisive: a process that needs a skilled setter for every part cannot be moved to a second
   shift, cannot absorb a resignation, and cannot be scaled.
   Put together, the fixture in that example paid back in **1.6 months**. When a payback is that short,
   the conversation stops being about cost, because the honest question becomes why it was not built
   sooner.
   But I would not stop at winning the argument, because sometimes the customer is right and it is worth
   finding out whether they are. **The specific questions I would ask are: is the volume real?** — a
   fixture justified on five thousand parts a year is a very different proposition at four hundred.
   **Have we over-specified?** — L0.5.1 found a base plate that was 89 per cent of material cost and near
   zero per cent of risk, and it is entirely possible to spend money on the wrong part of a fixture.
   **Is a simpler category adequate?** — which is exactly what the rest of Module 2.1 is about: they may
   need a vise with soft jaws, or a modular build, rather than a dedicated fixture. **And could we phase
   it?** — a simple fixture now that proves the process, with automation added when volume confirms.
   The thing I would avoid is defending the number without engaging with the question. **A fixture that
   the customer resents paying for gets under-maintained**, which is its own failure mode. Getting them to
   the point where they can see the arithmetic themselves is worth more than being right.

### 29. Summary
A fixture is a production device that locates a workpiece in a defined and repeatable position relative
to the machine's coordinate system, supports it against deformation, and holds it securely against
process forces — without guiding the cutting tool, which is the boundary against a jig. Its three duties
are genuinely distinct: locating controls position and is a rigid-body six-degrees-of-freedom problem;
supporting controls shape and is a stiffness problem involving the part's own elasticity; clamping
controls retention and is a force balance. The structural difference between them is that the clamp is
the only element that applies force, whereas locators and supports are reactive and push back only as
hard as they are pushed — which is why clamps distort parts and why clamp force has an upper bound as
well as a lower one. The duties operate in a strict logical dependency, locate then support then clamp,
because supports cannot be set before position is determined and clamps hold the part against things that
must already be in contact; and every clamp needs a locator or support directly opposite it, or its force
is reacted through the part's own stiffness. The worked example demonstrated that the three duties
require three completely different calculations — summing arrivals for the locators, selecting within a
window for the clamps, and comparing a predicted deflection against a tolerance for the supports — and
that the support requirement, at 8.86 times the allowance, was entirely invisible to the force analysis
that the other two duties depend on. Finally, a fixture exists to convert operator skill into capital
equipment, which is why its economic justification rests on setup time and consistency rather than on
part difficulty, and why in the example the time saving was 6.8 times the scrap saving and the payback
1.6 months.

### 30. Key takeaways
- **Locate decides where; support decides shape; clamp decides that it stays.**
- **Ask "if I removed this, what would go wrong?"** — the answer names the duty.
- **The clamp is the only element that applies force.** Locators and supports are reactive.
- **That is why clamps distort parts** and why clamp force has an upper bound.
- **Locate → support → clamp is a logical dependency**, not merely a procedure.
- **Every clamp needs a locator or support directly opposite it.**
- **Locate + support in one element is fine. Locate + clamp is auto-fail #1.**
- **Three duties, three completely different calculations** — reactive sum, bounded choice, stiffness
  against tolerance.
- **The support requirement is invisible to a force analysis** — 8.86× over while nothing moved.
- **More clamp force makes a bending problem worse**, because the clamp is active.
- **δ ∝ L³ makes support decisions non-incremental** — one support to two was a factor of 3.375.
- **If it touches the part, it has a duty** — designed or not.
- **A fixture converts operator skill into capital equipment.**
- **The time saving usually dominates the scrap saving** — 6.8× here.

---

## LESSON L2.1.2 — FIXTURE VERSUS JIG

### 1. Lesson title
**L2.1.2 — The jig guides the tool; the fixture does not**

### 2. Learning objective
By the end of this lesson you will be able to state the distinction between a jig and a fixture, explain
the engineering consequence of guiding the tool, calculate the positional accuracy achievable by a jig
bush compared with a CNC-positioned hole, specify a drill bush installation, explain why jigs have
largely been displaced by CNC and where they remain the correct answer, and identify from a customer
requirement which of the two is needed.

### 3. Prerequisites
L2.1.1 (three duties), L1.3.3 (drilling, bushes), L1.2.4 (WCS realisation), L0.2.5 (tolerance stacking).

### 4. Why the topic matters
The jig/fixture distinction is the oldest in workholding and the one most often stated as a slogan and
least often understood as engineering. **"A jig guides the tool, a fixture does not"** is correct, but on
its own it explains nothing about why anyone would want to guide a tool, or why the practice has largely
disappeared, or when it is still right.

The engineering content is this:

```
   WHERE DOES A HOLE'S POSITION COME FROM?

   JIG                        CNC + FIXTURE
   ┌──────────┐               ┌──────────┐
   │  ◎ bush  │               │          │
   └────┬─────┘               └──────────┘
        ║ drill guided             ║ drill positioned
        ║ by the bush              ║ by the machine
     ▓▓▓▓▓▓▓                    ▓▓▓▓▓▓▓

   Position comes from          Position comes from
   THE BUSH'S POSITION          THE MACHINE'S
   IN THE JIG                   COORDINATE SYSTEM

   → accuracy is a property     → accuracy is a
     of the TOOLING               property of the
                                  MACHINE
```

> **That is the whole distinction, and it has a profound consequence: a jig transfers the accuracy
> burden from the machine to the tooling.** In 1950 that was transformative, because machines were
> manual and their positioning accuracy was whatever the operator's handwheel work delivered. A jig let a
> semi-skilled operator drill an accurate hole pattern on a poor machine.
>
> **CNC inverted the economics.** A modern machine positions to a few microns, repeatably, without a
> bush. So the jig's core value proposition largely evaporated — and understanding *why* tells you the
> specific circumstances in which it has not.

### 5. Simple explanation

```
   A JIG GUIDES THE TOOL

     The tool physically passes through a hardened
     bush, which controls where it goes.

           ║
        ╔══╬══╗  ← hardened drill bush
        ║  ║  ║
        ╚══╬══╝
     ▓▓▓▓▓▓▓▓▓▓▓
     The drill CANNOT go anywhere else.

  ─────────────────────────────────────────────────

   A FIXTURE DOES NOT

     The tool is positioned by the machine. The
     fixture only holds the part.

           ║  free — the machine decides
           ║
     ▓▓▓▓▓▓▓▓▓▓▓
     ●═══════════●  fixture holds the part
```

Both locate, support and clamp — a jig does everything a fixture does. **A jig is a fixture that also
guides the tool.** The guiding is the additional feature, not a replacement for the three duties.

```
   ┌──────────────────────────────────────────────┐
   │ EVERY JIG IS ALSO A FIXTURE.                 │
   │ NOT EVERY FIXTURE IS A JIG.                  │
   │                                              │
   │ The three duties still apply. Guiding is a   │
   │ FOURTH thing that a jig does in addition.    │
   └──────────────────────────────────────────────┘
```

### 6. Engineering explanation

**WHERE ACCURACY COMES FROM — THE TWO CHAINS**

```
   JIG CHAIN
     part → locators → jig body → bush → drill
                                          ↓
                                     HOLE POSITION

     Errors that ADD:
       - locator to bush position in the jig
       - bush bore to drill clearance
       - drill flexibility and wander
       - bush wear

   CNC + FIXTURE CHAIN
     part → locators → fixture → table → machine
            axes → spindle → drill
                                ↓
                           HOLE POSITION

     Errors that ADD:
       - locator to fixture datum
       - work offset setting (L1.2.4)
       - machine positioning accuracy
       - drill wander (no bush to restrain it)
```

`[GUIDE]` Indicative accuracy comparison, to be confirmed for specific equipment:

| Source | Typical contribution |
|---|---|
| **JIG** | |
| Bush position in the jig body | ±0.02 mm |
| Bush bore to drill clearance | 0.01–0.05 mm (see below) |
| Bush wear over life | up to 0.05 mm |
| **Total jig-drilled position** | **±0.05 to ±0.15 mm** |
| **CNC + FIXTURE** | |
| Machine positioning | ±0.005–0.010 mm |
| Work offset setting | ±0.005 mm |
| Drill wander (spot drilled) | ±0.02–0.05 mm |
| **Total CNC-drilled position** | **±0.03 to ±0.07 mm** |

> **The comparison is closer than people expect, and drill wander is why.** A CNC machine positions the
> spindle beautifully, but an unguided drill entering an uneven or sloping surface still wanders. **The
> bush's real advantage is not positioning the spindle — it is restraining the drill.** That is the key
> to knowing when a jig still wins.

**THE BUSH-TO-DRILL CLEARANCE — AN UNAVOIDABLE ERROR**

```
   THE BUSH CANNOT BE A ZERO-CLEARANCE FIT

     bush bore ─┐  ┌─ drill
                ▼  ▼
              ╔═╦══╦═╗
              ║ ║  ║ ║  clearance c
              ╚═╩══╩═╝

   The drill must ROTATE and TRANSLATE inside it.
   [GUIDE] Typical clearance 0.01-0.05 mm on
   diameter, depending on bush class and drill size.

   MAXIMUM POSITIONAL ERROR FROM CLEARANCE ALONE:
     e = c/2

   → a 0.03 mm diametral clearance permits
     0.015 mm of eccentricity before anything else
     is counted.
```

`[PRACTICE]` Bush clearance is a genuine design trade-off: tighter clearance gives better position but
increases wear, heat and the risk of seizure. **This is why jig bushes are consumable and are usually
fitted in renewable liners.**

**BUSH TYPES**

| Type | Use | Note |
|---|---|---|
| **Press-fit (headless or headed)** | Permanent installation, low volume | Cheapest; replaced by pressing out |
| **Renewable slip bush** | Changed frequently, or multiple operations through one hole | Held by a locking screw; fits into a liner |
| **Fixed liner** | Pressed into the jig body to receive renewable bushes | The wear surface is the bush, not the jig |
| **Slip/fixed renewable pair** | Drill then ream through the same position | Two bushes, one liner |

```
   THE LINER IS THE IMPORTANT IDEA

     ✗ BUSH PRESSED DIRECTLY INTO THE JIG BODY
        When it wears, the JIG BODY bore is worn
        too. Repair means re-machining the jig.

     ✓ LINER PRESSED IN, BUSH INSIDE THE LINER
        The bush wears and is replaced. The liner
        and jig body are untouched.

   [PRACTICE] Same principle as the replaceable
   setting block in L1.2.3 and the replaceable
   support plate in L1.3.3: PUT THE WEAR ON A
   COMPONENT YOU CAN CHANGE.
```

**BUSH LENGTH AND STANDOFF**

```
   ║ drill
   ╔╬╗
   ║║║ bush length L_b
   ╚╬╝
    ║  standoff s
   ▓▓▓▓▓ part

   [PRACTICE] GUIDELINES:
     Bush length L_b ≈ 1.5 to 2.5 × drill diameter
       — shorter guides poorly, longer packs chips
     Standoff s ≈ 0.5 to 1.5 × drill diameter
       — needed for chip escape
       — but MORE standoff means LESS guidance,
         because the drill can flex in the gap

   THE TRADE-OFF:
     s small → good guidance, poor chip clearance
     s large → chips escape, drill can deflect

   For difficult materials with long chips, a
   larger standoff is used and the positional
   penalty is accepted.
```

**WHY JIGS LARGELY DISAPPEARED — AND WHERE THEY DID NOT**

```
   THE CNC ARGUMENT AGAINST JIGS

   1. THE MACHINE POSITIONS BETTER THAN A BUSH
      ±0.005 mm vs ±0.02 mm plus clearance plus
      wear.

   2. A JIG IS DEDICATED TO ONE HOLE PATTERN
      Change the pattern, remake the jig.
      Change a CNC programme: edit a file.

   3. BUSHES ARE CONSUMABLE
      Ongoing cost and maintenance.

   4. A JIG PLATE OBSTRUCTS
      It sits above the part, in the way of every
      other operation and of chip evacuation.

   5. ONE SETUP CAN DO EVERYTHING ON CNC
      Drill, mill, bore, tap — a jig only helps
      the drilling.
```

```
   WHERE A JIG STILL WINS  [PRACTICE]

   ✓ MANUAL MACHINES
     Radial arm drills, bench drills, pillar drills.
     No positioning system at all — the jig IS the
     positioning system. STILL COMMON in fabrication
     and maintenance work.

   ✓ HAND-HELD OPERATIONS
     Drilling on assembly, on large weldments, on
     site. A portable jig clamped to the work is the
     only practical way to hold position.

   ✓ VERY DEEP HOLES
     Where drill wander over depth is the dominant
     error, guidance genuinely beats positioning.

   ✓ SLOPING OR CURVED ENTRY SURFACES
     A drill entering a sloped face WILL walk. A
     bush prevents it. CNC can spot-drill first, but
     on a steep slope even that struggles.

   ✓ THIN OR FLEXIBLE MATERIAL
     Where the material cannot support the drill.

   ✓ VERY HIGH VOLUME SIMPLE PATTERNS
     Where a dedicated jig on a cheap manual machine
     beats occupying a CNC.

   ┌──────────────────────────────────────────────┐
   │ NOTICE THE PATTERN: THE JIG WINS WHERE THE   │
   │ PROBLEM IS RESTRAINING THE DRILL, NOT        │
   │ POSITIONING THE SPINDLE.                     │
   │                                              │
   │ CNC solved the positioning problem. IT DID   │
   │ NOT SOLVE DRILL WANDER.                      │
   └──────────────────────────────────────────────┘
```

**THE HYBRID — A FIXTURE WITH A BUSH PLATE**

`[PRACTICE]` A common modern arrangement is a CNC fixture that carries a small bush **only for the
specific holes that need guidance** — typically deep holes or those in sloping faces — while the machine
positions everything else. This is technically a jig by the strict definition, and it is usually called a
fixture in the shop. **The classification argument is uninteresting; what matters is knowing that the
option exists** and applying it selectively rather than fitting a full bush plate.

### 7. Terminology

| Term | Definition |
|---|---|
| **Jig** | A workholding device that also **guides the cutting tool** |
| **Fixture** | A workholding device that does **not** guide the tool |
| **Drill bush** | Hardened bush guiding a drill |
| **Liner (fixed) bush** | Bush pressed into the jig body to receive renewable bushes |
| **Renewable / slip bush** | Bush that can be changed without disturbing the liner |
| **Standoff** | Gap between the bush end and the part surface |
| **Bush clearance** | Diametral gap between bush bore and tool |
| **Drill wander / walk** | Deviation of a drill from its intended position on entry |
| **Bush plate / jig plate** | Plate carrying the bushes above the part |
| **Leaf jig** | Jig with a hinged plate carrying bushes |
| **Box jig** | Enclosed jig permitting drilling on several faces |
| **Portable jig** | Jig clamped to a large workpiece rather than the reverse |

### 8. Principle

> **A JIG GUIDES THE TOOL; A FIXTURE DOES NOT. EVERY JIG IS ALSO A FIXTURE.**
> **A JIG TRANSFERS THE ACCURACY BURDEN FROM THE MACHINE TO THE TOOLING** — which was transformative
> when machines were manual, and largely unnecessary once CNC positioned to microns.
> **BUT CNC SOLVED POSITIONING, NOT DRILL WANDER.** The jig still wins wherever the problem is
> **restraining the drill** rather than positioning the spindle: sloping entry faces, deep holes, thin
> material, hand-held work and manual machines.
> **PUT THE WEAR ON A COMPONENT YOU CAN CHANGE** — bushes in renewable liners, never pressed straight
> into the jig body.

### 9. Industrial application

**Deciding between a jig and a CNC fixture**

```
   THE DECISION  [PRACTICE]

   IS THE MACHINE CNC?
     │
     ├─ NO → JIG. The jig IS the positioning
     │        system. No further analysis needed.
     │
     └─ YES ↓

   DOES THE DRILL ENTER A SLOPING, CURVED OR
   UNEVEN SURFACE?
     │
     ├─ YES → consider a BUSH for those holes
     │         (spot drilling may suffice on a
     │          shallow slope; a bush is safer
     │          beyond roughly 5-10°)  [PRACTICE]
     │
     └─ NO ↓

   IS THE HOLE DEEPER THAN ABOUT 5 × DIAMETER?
     │
     ├─ YES → wander over depth may dominate;
     │         consider a bush or a guide
     │
     └─ NO ↓

   IS THE MATERIAL THIN, FLEXIBLE OR PRONE TO
   GRABBING?
     │
     ├─ YES → consider a bush
     │
     └─ NO → CNC FIXTURE, NO BUSH.
              The machine positions better than a
              bush can.
```

**A portable jig — where the classification genuinely matters** `[EX-ASSUMED]` illustrative:

```
SITUATION
  A 4 m fabricated steel frame requires 24 holes
  for a bolted interface, positioned to ±0.5 mm
  relative to each other.

WHY A FIXTURE IS NOT THE ANSWER
  The part is too large to load into any machine.
  There is no machine coordinate system available
  to work from.

THE JIG ANSWER
  A portable drilling jig clamped to the frame,
  carrying 24 bushes in the correct relative
  positions. A magnetic-base or hand drill runs
  through each bush.

  ✓ The jig's INTERNAL accuracy (bush to bush)
    delivers the ±0.5 mm relative requirement
  ✓ The jig's position on the frame need only be
    approximately right, because the requirement
    is RELATIVE
  ✓ No machine needed

THE INSIGHT
  THIS IS THE COMMON-MODE ARGUMENT FROM L1.2.2
  AGAIN. The jig's own placement error is COMMON
  to all 24 holes and therefore CANCELS in the
  hole-to-hole relationships that the drawing
  actually controls.

  A fixture cannot do this job at all, because
  there is no machine. THE JIG IS NOT AN INFERIOR
  OPTION HERE — IT IS THE ONLY OPTION.
```

### 10. Design rules
- **R1** — Use a **jig only where guidance is genuinely needed** — manual machines, sloping entry, deep
  holes, thin material, hand-held work `[PRACTICE]`.
- **R2** — On CNC, prefer a fixture and let the machine position; **add bushes selectively** only for the
  holes that need them.
- **R3** — Always fit bushes in **renewable liners**, never pressed directly into the jig body.
- **R4** — Bush length **1.5–2.5 × drill diameter** `[PRACTICE]`.
- **R5** — Standoff **0.5–1.5 × drill diameter**, larger for long-chipping materials `[PRACTICE]`.
- **R6** — Control the **bush-to-locator position** as a critical dimension — it is the L1.2.4 principle
  applied to a jig.
- **R7** — Specify bushes as **consumable**, with a wear-monitoring interval.
- **R8** — Ensure the bush plate does not obstruct **chip evacuation** or other operations.
- **R9** — For portable jigs, exploit the **common-mode cancellation** — relative accuracy comes from the
  jig, absolute position need only be approximate.
- **R10** — State on the drawing whether the device is a **jig or a fixture**, and if a jig, which holes
  are guided.

### 11. Rules of thumb
- **A jig guides the tool; a fixture does not. Every jig is also a fixture.**
- **CNC solved positioning, not drill wander.**
- Jig-drilled position **±0.05 to ±0.15 mm**; CNC-drilled **±0.03 to ±0.07 mm** `[GUIDE]`.
- **Bush clearance permits e = c/2 of eccentricity** before anything else.
- **Bush length 1.5–2.5 × d; standoff 0.5–1.5 × d** `[PRACTICE]`.
- **More standoff = better chips, worse guidance.**
- **Always use a liner.** Put the wear on a replaceable part.
- **Sloping entry beyond ~5–10° wants a bush** even on CNC `[PRACTICE]`.
- **Holes deeper than ~5×d** may be wander-dominated.
- **A portable jig's own placement error cancels** in relative hole positions.

### 12. Formulae

**Positional error from bush clearance**
```
e_clearance = c/2
where c = diametral clearance between bush and tool
```

**Total jig-drilled positional error (worst case)**
```
e_total = e_bush_position + e_clearance + e_wear + e_wander_residual
```

**Total CNC-drilled positional error (worst case)**
```
e_total = e_machine + e_offset + e_locator + e_wander
```

**Drill wander with standoff**
```
[GUIDE] Wander increases with standoff. An
indicative treatment models the unguided length as
a cantilever:
   e_wander ∝ s³ / d⁴
→ the same scaling as tool deflection (L1.3.2)
This is a GUIDELINE relationship for reasoning
about the trade-off, not a design formula.
```

**Bush life**
```
N_holes = wear_allowance / wear_rate_per_hole
[PROJ] wear rate must be established by measurement
```

| Variable | Meaning | Unit |
|---|---|---|
| c | Bush-to-tool diametral clearance | mm |
| s | Standoff | mm |
| L_b | Bush length | mm |
| d | Drill diameter | mm |

### 13. Worked numerical example

**Problem:** A hole pattern must be produced in a component with one hole entering a 12° sloping face.
Compare a jig against a CNC fixture for positional accuracy, evaluate the sloping-face hole specifically,
and determine the correct solution.

```
GIVEN:
  REQUIREMENT                                    [PROJ]
    8 holes Ø10, positional tolerance ±0.08 mm
    7 holes enter a flat machined face
    1 hole enters a face sloping at 12°
    Material mild steel, 25 mm thick

  JIG OPTION                                     [GUIDE]
    Bush position in the jig body   = ±0.020 mm
    Bush bore Ø10.02, drill Ø9.98
      → diametral clearance c       = 0.040 mm
    Bush wear allowance over life   = ±0.025 mm
    Residual wander with a bush     = ±0.010 mm

  CNC FIXTURE OPTION                             [GUIDE]
    Machine positioning             = ±0.008 mm
    Work offset setting             = ±0.005 mm
    Locator to feature              = ±0.015 mm
    Drill wander, FLAT face,
      spot drilled                  = ±0.030 mm
    Drill wander, 12° SLOPING face,
      spot drilled                  = ±0.120 mm

REQUIRED:
  (a) Total jig-drilled positional error
  (b) Total CNC-drilled error, flat face
  (c) Total CNC-drilled error, sloping face
  (d) Pass/fail of each against ±0.08 mm
  (e) The recommended solution
  (f) Bush length and standoff for the guided hole
  (g) Engineering conclusion

ASSUMPTION:
  1. All error figures are GUIDELINE values for
     estimation and MUST BE CONFIRMED by measurement
     on the actual equipment. Drill wander in
     particular varies enormously with drill point
     geometry, spot-drill practice and material.
     [GUIDE]
  2. Worst-case arithmetic summation used. RSS would
     give smaller figures and is defensible where the
     contributors are genuinely independent (L23.4),
     but arithmetic is the safer choice at design
     stage. [PRACTICE]
  3. The 12° sloping-face wander figure assumes spot
     drilling has been attempted. Without spot
     drilling it would be substantially worse.
     [GUIDE]
  4. Bush wear is taken at its END-OF-LIFE
     allowance, i.e. the worst condition before
     replacement. [PRACTICE]

FORMULA:
  e_clearance = c/2
  e_total = Σ contributions (worst case)

UNIT CONVERSION:
  All in mm.

SUBSTITUTION AND CALCULATION:

  (a) TOTAL JIG-DRILLED ERROR

      Bush position          = 0.020
      Clearance, c/2 = 0.040/2
                             = 0.020
      Bush wear              = 0.025
      Residual wander        = 0.010
      ─────────────────────────────────
      TOTAL                  = 0.075 mm

      → ±0.075 mm

  (b) TOTAL CNC ERROR — FLAT FACE

      Machine positioning    = 0.008
      Work offset            = 0.005
      Locator to feature     = 0.015
      Drill wander, flat     = 0.030
      ─────────────────────────────────
      TOTAL                  = 0.058 mm

      → ±0.058 mm

  (c) TOTAL CNC ERROR — 12° SLOPING FACE

      Machine positioning    = 0.008
      Work offset            = 0.005
      Locator to feature     = 0.015
      Drill wander, 12°      = 0.120
      ─────────────────────────────────
      TOTAL                  = 0.148 mm

      → ±0.148 mm

  (d) ASSESSMENT AGAINST ±0.08 mm

      JIG, all holes:
        0.075/0.080 = 93.8 % of tolerance
        ✓ PASS — but with only 6.3 % margin

      CNC, 7 FLAT holes:
        0.058/0.080 = 72.5 %
        ✓ PASS with 27.5 % margin

      CNC, 1 SLOPING hole:
        0.148/0.080 = 185.0 %
        ✗ FAIL by 1.85 times

      HYBRID — CNC fixture with a bush on the
      sloping hole only:
        Flat holes, CNC        = 0.058 mm  ✓
        Sloping hole, bushed:
          bush position        = 0.020
          clearance            = 0.020
          bush wear            = 0.025
          residual wander      = 0.010
          ─────────────────────────────
                               = 0.075 mm  ✓ 93.8 %

      ✓ HYBRID PASSES ON ALL EIGHT HOLES.

  (e) RECOMMENDED SOLUTION

      CNC FIXTURE WITH A SINGLE BUSH ON THE
      SLOPING-FACE HOLE.

      Rationale:
        ✓ 7 holes at 72.5 % of tolerance — better
          than the jig's 93.8 %
        ✓ The 1 problem hole guided, at 93.8 %
        ✓ Only ONE bush to maintain, not eight
        ✓ Other operations can share the setup
        ✗ A full jig would put all 8 holes at
          93.8 % — passing, but with almost no
          margin and eight consumable bushes

  (f) BUSH LENGTH AND STANDOFF

      Drill diameter d = 10 mm

      Bush length, 1.5-2.5 × d [PRACTICE]:
        L_b = 2.0 × 10 = 20 mm

      Standoff, 0.5-1.5 × d [PRACTICE]:
        Mild steel produces moderate chips; take
        the middle of the range:
        s = 1.0 × 10 = 10 mm

      NOTE the standoff must be measured to the
      NEAREST point of the sloping face. On a 12°
      slope across a Ø10 hole, the face drops by:
        Δ = 10 × tan(12°)
          = 10 × 0.21256
          = 2.126 mm

      So the standoff varies from 10 mm at the high
      side to 12.13 mm at the low side.
      → Set the nominal standoff from the HIGH side
        so the minimum gap is maintained for chip
        escape, and accept the slightly larger gap
        on the low side.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Jig total error          │ ±0.075 mm         │
  │ (b) CNC, flat face           │ ±0.058 mm         │
  │ (c) CNC, 12° sloping face    │ ±0.148 mm         │
  │ (d) Jig vs ±0.08             │ 93.8 % ✓ tight    │
  │     CNC flat                 │ 72.5 % ✓          │
  │     CNC sloping              │ 185.0 % ✗ FAIL    │
  │     Hybrid, sloping bushed   │ 93.8 % ✓          │
  │ (e) RECOMMENDED              │ CNC fixture + 1   │
  │                              │ bush              │
  │ (f) Bush length              │ 20 mm             │
  │     Standoff (high side)     │ 10 mm             │
  │     Face drop across Ø10     │ 2.126 mm          │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The margin is the
  unconsumed tolerance: 27.5 % on the flat CNC holes
  and 6.3 % on any bushed hole. The bushed figure is
  tight because bush wear at end of life is included
  — which is the correct condition to design for,
  since that is when the fixture is still expected
  to produce good parts.

PASS/FAIL:
  ✗ FAIL — CNC without a bush on the sloping hole,
    at 185 % of tolerance.
  ✓ PASS — jig on all holes, at 93.8 %, but tight
    and with eight consumables.
  ✓ PASS — hybrid, 72.5 % on seven holes and 93.8 %
    on one.

ENGINEERING CONCLUSION:
  1. THE SLOPING FACE IS THE WHOLE PROBLEM, AND IT
     IS A DRILL-WANDER PROBLEM RATHER THAN A
     POSITIONING PROBLEM.
     The machine positions to ±0.008 mm. The offset
     is good to ±0.005 mm. Those contributions are
     trivial. The 12° slope contributes ±0.120 mm of
     wander on its own — FIFTEEN TIMES the machine's
     positioning error and enough to fail the
     tolerance by itself.
     THIS IS EXACTLY THE CASE WHERE A JIG STILL WINS,
     and it illustrates the general rule: CNC SOLVED
     POSITIONING, IT DID NOT SOLVE WANDER. A bush
     does not help the machine find the hole; it
     stops the drill running away once it gets there.

  2. THE HYBRID BEATS BOTH PURE OPTIONS, AND THE
     CLASSIFICATION ARGUMENT IS IRRELEVANT.
     A full jig puts all eight holes at 93.8 % of
     tolerance with eight consumable bushes to
     maintain. A pure CNC fixture fails one hole
     outright. Fitting ONE bush on the ONE hole that
     needs it gives 72.5 % on seven holes and 93.8 %
     on the eighth, with a single consumable.
     STRICTLY THIS DEVICE IS NOW A JIG, because it
     guides a tool. Nobody in the shop will call it
     one. THAT DOES NOT MATTER — what matters is
     recognising that guidance is a feature you can
     apply SELECTIVELY rather than an all-or-nothing
     category choice.

  3. THE JIG'S MARGIN IS TIGHTER THAN IT LOOKS, AND
     WEAR IS WHY.
     ±0.075 mm against ±0.080 mm is a 6.3 % margin —
     and 0.025 mm of that total is bush wear at end
     of life. When the bushes are new the jig
     performs at ±0.050 mm, comfortably better than
     CNC. It degrades to marginal.
     THIS IS THE CHARACTERISTIC BEHAVIOUR OF GUIDED
     TOOLING: EXCELLENT WHEN NEW, PROGRESSIVELY
     WORSE, WITH A REPLACEMENT INTERVAL THAT
     SOMEBODY HAS TO ENFORCE. A CNC fixture's
     accuracy does not decay the same way. That is a
     maintenance argument as much as an accuracy one,
     and it is a real reason to prefer fewer bushes.

  4. THE CLEARANCE CONTRIBUTION IS UNAVOIDABLE AND
     PEOPLE FORGET IT.
     0.040 mm of diametral clearance permits
     0.020 mm of eccentricity — as large as the bush
     positional tolerance itself. You cannot design
     it away, because the drill has to turn inside
     the bush. Tightening it increases wear and heat
     and brings seizure risk.
     SO A BUSH CANNOT BE MORE ACCURATE THAN HALF ITS
     CLEARANCE, EVER. Anyone quoting jig accuracy
     without including c/2 is quoting a number that
     cannot be achieved.

  5. WHAT I WOULD SPECIFY.
     A CNC fixture with a renewable bush in a fixed
     liner over the sloping hole only; 20 mm bush
     length; 10 mm nominal standoff measured from the
     high side of the slope; bush position controlled
     to the fixture locators at ±0.02 mm; and a
     drawing note stating that the bush is a
     consumable with a defined replacement interval,
     because 0.025 mm of the tolerance budget is
     allocated to its wear.

SENSITIVITY NOTE:
  Ranked by influence:
    1. ENTRY SURFACE ANGLE — the single dominant
       variable. 12° took wander from ±0.030 to
       ±0.120 mm, a factor of 4, and turned a
       comfortable pass into a 185 % failure.
    2. BUSH WEAR ALLOWANCE — 0.025 mm of a 0.075 mm
       total, i.e. one third. It is also the only
       term that GROWS with time, so it determines
       the replacement interval rather than just the
       accuracy.
    3. BUSH CLEARANCE — 0.020 mm, unavoidable, and
       bounded below by the need for the drill to
       rotate freely.
    4. DRILL WANDER ON THE FLAT FACE — ±0.030 mm,
       already the largest CNC contributor at over
       half the total. Spot-drilling practice matters
       more than machine accuracy here.
    5. MACHINE POSITIONING — ±0.008 mm, essentially
       irrelevant. Worth noting explicitly: THE MOST
       PRECISE ELEMENT IN THE CHAIN CONTRIBUTED THE
       LEAST.
```

### 14. Engineering assumptions
- All error figures are guideline values requiring confirmation by measurement `[GUIDE]`; drill wander in
  particular varies with point geometry, spot-drilling practice and material.
- Worst-case arithmetic summation; RSS is defensible where contributors are independent but arithmetic is
  safer at design stage `[PRACTICE]`.
- The sloping-face wander figure assumes spot drilling has been attempted `[GUIDE]`.
- Bush wear taken at its end-of-life allowance — the worst condition before replacement `[PRACTICE]`.

### 15. Diagram

```
     JIG VERSUS FIXTURE
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE DEFINING DIFFERENCE

   JIG                        FIXTURE
      ║                          ║  free
   ╔══╬══╗ hardened bush         ║
   ║  ║  ║                       ║
   ╚══╬══╝                       ║
   ▓▓▓▓▓▓▓▓                   ▓▓▓▓▓▓▓▓
   ●══════●                   ●══════●

   Tool GUIDED by the         Tool POSITIONED by
   bush                       the machine

   Accuracy is a property     Accuracy is a property
   of the TOOLING             of the MACHINE

   ┌──────────────────────────────────────────────┐
   │ EVERY JIG IS ALSO A FIXTURE — it still       │
   │ locates, supports and clamps. GUIDING IS A   │
   │ FOURTH THING IT DOES IN ADDITION.            │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE WORKED EXAMPLE — WHERE THE ERROR ACTUALLY IS

   CNC, FLAT FACE            total ±0.058 ✓ 72.5 %
     machine    ▌0.008
     offset     ▌0.005
     locator    ██0.015
     WANDER     ████████0.030  ◄ over half

   CNC, 12° SLOPING FACE     total ±0.148 ✗ 185 %
     machine    ▌0.008
     offset     ▌0.005
     locator    ██0.015
     WANDER     ████████████████████████████0.120

   ┌──────────────────────────────────────────────┐
   │ THE MACHINE POSITIONS TO ±0.008 mm AND THE   │
   │ SLOPE CONTRIBUTES ±0.120 mm — FIFTEEN TIMES  │
   │ AS MUCH.                                     │
   │                                              │
   │ CNC SOLVED POSITIONING. IT DID NOT SOLVE     │
   │ DRILL WANDER.                                │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE THREE OPTIONS COMPARED

   FULL JIG      ████████████████████ 93.8 % (all 8)
                 8 consumable bushes

   PURE CNC      ██████████████ 72.5 % (7 holes) ✓
                 ██████████████████████████████████
                 185 % (sloping hole) ✗

   HYBRID        ██████████████ 72.5 % (7 holes) ✓
                 ████████████████████ 93.8 % (1) ✓
                 1 consumable bush   ◄ RECOMMENDED

   ┌──────────────────────────────────────────────┐
   │ GUIDANCE IS A FEATURE YOU CAN APPLY          │
   │ SELECTIVELY — NOT AN ALL-OR-NOTHING          │
   │ CATEGORY CHOICE.                             │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE CLEARANCE YOU CANNOT DESIGN AWAY

           ╔═╦══╦═╗
           ║ ║  ║ ║ ← c = 0.040 diametral
           ╚═╩══╩═╝

     e = c/2 = 0.020 mm of permitted eccentricity

   As large as the bush's own positional tolerance.
   Tighter → wear, heat, seizure.

   ┌──────────────────────────────────────────────┐
   │ A BUSH CANNOT BE MORE ACCURATE THAN HALF ITS │
   │ CLEARANCE. EVER.                             │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  ALWAYS USE A LINER

   ✗ BUSH IN THE BODY        ✓ BUSH IN A LINER
     ╔═══╗                     ╔═╦═╗
     ║BUSH║                    ║L║B║  L = liner
     ╠═══╣                     ╠═╩═╣  B = bush
     ║JIG ║                    ║JIG ║
     ╚═══╝                     ╚═══╝

   Wear damages the JIG      Wear damages only the
   BODY → re-machine         BUSH → swap it

   Same principle as the replaceable setting block
   (L1.2.3) and support plate (L1.3.3):
   PUT THE WEAR ON A COMPONENT YOU CAN CHANGE.

  ──────────────────────────────────────────────────────────

  BUSH LENGTH AND STANDOFF — THE TRADE-OFF

        ║
       ╔╬╗
       ║║║ L_b = 1.5-2.5 × d   [PRACTICE]
       ╚╬╝
        ║  s = 0.5-1.5 × d
       ▓▓▓▓▓

   s small → good guidance, chips trapped
   s large → chips escape, drill can flex
   e_wander ∝ s³/d⁴  — the same cubic law again

  ──────────────────────────────────────────────────────────

  WHERE THE JIG STILL WINS

   ✓ manual machines — the jig IS the positioning
   ✓ hand-held / on-site work
   ✓ deep holes (wander dominates)
   ✓ sloping or curved entry faces
   ✓ thin or flexible material
   ✓ high-volume simple patterns on a cheap machine

   ┌──────────────────────────────────────────────┐
   │ THE PATTERN: THE JIG WINS WHERE THE PROBLEM  │
   │ IS RESTRAINING THE DRILL, NOT POSITIONING    │
   │ THE SPINDLE.                                 │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-6200 — DRILL GUIDANCE
STANDARD: ASME Y14.5-2018
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: THIS DEVICE IS A FIXTURE FOR SEVEN OF THE
        EIGHT HOLES. HOLE 8, ENTERING THE 12° SLOPING
        FACE, IS GUIDED BY RENEWABLE BUSH ITEM 21 IN
        FIXED LINER ITEM 22.

NOTE 2: BUSH ITEM 21 IS A CONSUMABLE. 0.025 mm OF THE
        POSITIONAL TOLERANCE BUDGET FOR HOLE 8 IS
        ALLOCATED TO BUSH WEAR. REPLACE AT THE
        INTERVAL GIVEN IN MAINTENANCE SHEET MS-6200.
        DO NOT RUN BEYOND IT.

NOTE 3: BUSH LENGTH 20 mm. STANDOFF 10 mm MEASURED
        FROM THE HIGH SIDE OF THE SLOPING FACE.

NOTE 4: BUSH ITEM 21 POSITION RELATIVE TO LOCATING
        PINS ITEMS 7 AND 8 IS A CRITICAL DIMENSION —
        SEE POSITIONAL TOLERANCE. THE BUSH DETERMINES
        WHERE HOLE 8 GOES; THE MACHINE DOES NOT.

NOTE 5: HOLES 1-7 ARE POSITIONED BY THE MACHINE. DO
        NOT ADD BUSHES — THEY WOULD DEGRADE POSITION
        FROM ±0.058 TO ±0.075 mm AND ADD SEVEN
        CONSUMABLES.
```

Note 5 is unusual and worth including. **Recording why a feature was deliberately *not* fitted** is the
only way to stop a well-meaning future engineer adding it.

### 17. CAD workflow
1. Model the **drill at full depth** through the bush, including breakthrough
2. Model the **liner and renewable bush** as separate components — they are separately replaceable
3. Verify the **standoff** at the closest point of a sloping face, not at the nominal centre
4. Dimension the **bush position from the locators**, not from the plate edges
5. Check that the **bush plate does not obstruct** other operations or chip evacuation
6. Model the **bush replacement access** — can it be reached with the extraction tool?
7. Add the **consumable note** and the tolerance allocation

`[PRACTICE]` Step 3 catches a real error on sloping faces: a standoff set from the nominal centre can be
zero or negative at the high side. The example's Ø10 hole on a 12° slope had a 2.126 mm drop across it.

### 18. GD&T application

```
STANDARD: ASME Y14.5-2018

  THE BUSH IS A LOCATING FEATURE FOR THE HOLE IT
  GUIDES. It must be controlled to the same datums
  as the part locators — exactly the L1.2.4
  argument.

  Bush bore:
  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.02 │ A │ B │ C │          │
  └──────────────────────────────────┘

  Liner bore (receives the bush):
  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.02 │ A │ B │ C │          │
  └──────────────────────────────────┘
  — the LINER carries the position; the bush
    inherits it through a close fit

  ┌────────────────────────────────────────────┐
  │ NOTE WHAT IS CONTROLLED AND WHAT IS NOT:   │
  │                                            │
  │ The BUSH-TO-DRILL clearance is a FIT, not  │
  │ a position tolerance — but it contributes  │
  │ c/2 directly to hole position.             │
  │                                            │
  │ SO THE HOLE'S POSITIONAL CAPABILITY IS     │
  │ SET BY A GD&T TOLERANCE *PLUS* A FIT       │
  │ SPECIFICATION, AND BOTH MUST BE ON THE     │
  │ DRAWING. Controlling one and leaving the   │
  │ other to a standard bush callout is how    │
  │ the clearance term gets forgotten.         │
  └────────────────────────────────────────────┘
```

### 19. Manufacturing method
1. Machine the jig or fixture body soft, with the liner bores left undersize
2. Establish the locators (L2.1.1 §19 route)
3. **Bore the liner holes in the same setup as, or indicated from, the locators** — the L1.2.4 principle
4. Press in the liners
5. **Ream or grind the liner bores in position** if the required accuracy demands it `[PRACTICE]`
6. Fit renewable bushes
7. Inspect bush bore position to the locators on a CMM

`[PRACTICE]` Bushes and liners are **bought-in hardened standard components** (L0.5.2) — there is a
comprehensive commercial range and no reason to make them. What must be made accurately is the **hole
that receives the liner**, and its position relative to the locators.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Bush bore position to locators | CMM | ±0.02 mm |
| Bush bore size | Plug gauge | Per bush spec |
| Bush-to-drill clearance | Measure both | 0.01–0.05 mm |
| Standoff at the closest point | Depth gauge / feeler | 10 mm nominal |
| Bush length | Vernier | 20 mm |
| Liner retention | Push test | Secure |
| Bush wear (in service) | Plug gauge at interval | Within allowance |
| Produced hole position | CMM on a first-off part | ±0.08 mm |

`[PRACTICE]` **Bush wear must be on the periodic maintenance schedule**, because 0.025 mm of the
tolerance budget was allocated to it. Unlike most fixture errors, this one grows predictably and can be
managed by replacement rather than investigation.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Pressing bushes **directly into the jig body** | Wear damages the body; re-machining needed |
| 2 | Ignoring the **c/2 clearance** in the error budget | Quoted accuracy unachievable |
| 3 | Fitting a **full bush plate** when one hole needs guidance | Seven unnecessary consumables, worse position |
| 4 | Using a jig on CNC **out of habit** | Degrades position from ±0.058 to ±0.075 mm |
| 5 | Not fitting a bush where the **entry face slopes** | 185% of tolerance from wander alone |
| 6 | **Standoff measured at the nominal centre** of a sloping face | Zero or negative gap at the high side |
| 7 | **Bush too short** | Poor guidance |
| 8 | **Standoff too small** | Chip packing |
| 9 | Bush position dimensioned from **plate edges** | The critical relationship uncontrolled |
| 10 | No **wear-monitoring interval** | Budget allocation silently exceeded |
| 11 | Bush plate **obstructing chip evacuation** or other operations | Process problems |
| 12 | Not recording **why bushes were omitted** | Someone adds them later |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Holes progressively drifting off position | Bush wear | Plug-gauge the bush | Replace | Wear interval |
| Hole in a sloping face off position | Drill wander, no guidance | Compare against flat-face holes | Fit a bush | Design rule R1 |
| Drill seizing in the bush | Clearance too tight | Measure both | Increase clearance | 0.01–0.05 mm |
| Chips packing at the bush | Standoff too small | Observe | Increase standoff | 0.5–1.5 × d |
| Position poor even with a new bush | Bush-to-locator position wrong | CMM | Re-machine the liner bore | Design rule R6 |
| Jig body bore worn | No liner fitted | Inspect | Fit a liner | Design rule R3 |
| Hole position worse than a plain CNC fixture | Unnecessary bush fitted | Compare budgets | Remove the bush | Design rule R2 |
| Deep hole drifting over depth | Wander dominates | Measure at entry and exit | Guide, or peck with a stub drill first | Consider a bush >5×d |

### 23. Design checklist
- [ ] Is the machine **CNC or manual**? A manual machine needs a jig.
- [ ] Does any hole enter a **sloping, curved or uneven face**?
- [ ] Is any hole deeper than about **5 × diameter**?
- [ ] Is the material **thin or flexible**?
- [ ] Have bushes been fitted **only where needed**, not universally?
- [ ] Are bushes in **renewable liners**?
- [ ] Is **c/2 clearance** included in the error budget?
- [ ] Is **bush wear** allocated a share of the budget, with a replacement interval?
- [ ] Is bush length **1.5–2.5 × d** and standoff **0.5–1.5 × d**?
- [ ] On a sloping face, is standoff measured at the **closest point**?
- [ ] Is bush position dimensioned **from the locators**?
- [ ] Does the bush plate obstruct **chips or other operations**?
- [ ] Is it recorded on the drawing **which holes are guided and which are not, and why**?

### 24. Beginner exercise
**E2.1.2-B** — State the difference between a jig and a fixture in one sentence, then answer:
(a) Is every jig also a fixture? Justify your answer.
(b) A bush has a bore of Ø8.03 and the drill is Ø7.98. Calculate the diametral clearance and the maximum
positional error it permits.
(c) For a Ø12 drill, calculate an appropriate bush length and standoff using the practice guidelines.
(d) State two situations where a jig is still the correct answer on modern equipment.
(e) Explain why bushes should be fitted in liners.

### 25. Intermediate exercise
**E2.1.2-I** — A component needs six Ø8 holes to ±0.10 mm. Four enter a flat face, two enter a face
sloping at 18°. Jig figures `[GUIDE]`: bush position ±0.018 mm, bush bore Ø8.02 with drill Ø7.97, bush
wear ±0.022 mm, residual wander ±0.008 mm. CNC figures `[GUIDE]`: machine ±0.007 mm, offset ±0.005 mm,
locator ±0.012 mm, wander on the flat face ±0.028 mm, wander on the 18° face ±0.165 mm.
(a) Calculate the diametral clearance and its contribution.
(b) Calculate the total jig error and the total CNC error for each face type.
(c) Assess each against ±0.10 mm and identify what fails.
(d) Propose the best solution and calculate its performance on all six holes.
(e) State how many consumable bushes your solution requires, and compare with a full jig.
(f) Calculate bush length and standoff for the guided holes.
(g) Across a Ø8 hole on an 18° slope, calculate the drop in the face and state where the standoff should
be measured.
(h) Explain why the machine's ±0.007 mm positioning accuracy is almost irrelevant to this problem.

### 26. Advanced exercise
**E2.1.2-A** — A 3.2 m fabricated steel beam requires two bolted interfaces, each with 12 holes Ø14. The
holes within each interface must be positioned relative to each other within ±0.4 mm; the two interfaces
must be positioned relative to each other within ±2.0 mm; and each interface's absolute position along
the beam is ±5 mm. The beam cannot be loaded into any machine tool. Available: a magnetic-base drill and
a hand drill. Bush figures `[GUIDE]`: position in the jig ±0.05 mm, bore Ø14.05 with drill Ø13.95, wear
±0.04 mm, residual wander ±0.03 mm.
(i) Explain why a fixture cannot perform this task and a jig can.
(ii) Calculate the hole-to-hole positional capability within one interface.
(iii) Assess it against the ±0.4 mm requirement.
(iv) Explain how the jig's own placement error on the beam affects each of the three requirements
differently, and identify which requirement it does *not* affect.
(v) Relate this to the common-mode argument from L1.2.2 and state the general principle.
(vi) Propose how to achieve the ±2.0 mm interface-to-interface requirement, given that a single jig
spanning 3.2 m is impractical.
(vii) Calculate the bush length and standoff for the Ø14 drill.
(viii) The magnetic-base drill applies substantial thrust. State the anti-rotation and clamping
requirements for the jig itself, referring to L1.3.3.
(ix) Bushes wear faster in this application than in a machine-shop jig. Explain why, and propose a
maintenance approach.
(x) Write the operating instruction that would accompany the jig.

### 27. Interview questions
1. *"What is the difference between a jig and a fixture?"*
   **Answer:** A jig guides the cutting tool; a fixture does not. Both locate, support and clamp the
   workpiece — a jig is a fixture that additionally has a hardened bush or similar feature through which
   the tool passes, so the tool's position is determined by the tooling rather than by the machine. Every
   jig is therefore also a fixture, but not the reverse. The engineering consequence is that a jig
   transfers the accuracy burden from the machine to the tooling, which was enormously valuable when
   machines were manual and had no positioning system. On CNC the machine positions to a few microns, so
   that value has largely gone — but a bush also restrains the drill from wandering, and CNC did not
   solve wander, so jigs remain the right answer for sloping entry faces, deep holes, thin material and
   any hand-held or on-site work.
2. *"When would you still use a jig today?"*
   **Answer:** The clearest case is when there is no machine coordinate system to work from — hand-held
   drilling, on-site work, or a fabrication too large to load into a machine. There the jig *is* the
   positioning system and there is no alternative. Beyond that, I would use one wherever the problem is
   restraining the drill rather than positioning the spindle: a hole entering a sloping or curved face,
   where an unguided drill walks; deep holes where wander accumulates over depth; thin or flexible
   material. And on a manual machine, obviously, since the jig provides positioning the machine does not
   have. What I would avoid is fitting a full bush plate out of habit on a CNC job, because on flat faces
   a bush actually makes position slightly *worse* once you include its clearance and wear, and it adds
   consumables. The modern approach is to fit a bush on the specific holes that need it and let the
   machine do the rest.

### 28. Expert questions
1. *"You said a bush can make position worse on CNC. Explain that, because it sounds backwards."*
   **Answer:** It does sound backwards, and the reason is that people think of a bush as *adding*
   accuracy when what it actually does is **substitute one accuracy chain for another**.
   Consider what determines hole position in each case. On CNC without a bush, the chain is: the machine
   positions the spindle, the work offset locates the part, the locators position the part in the
   fixture, and the drill wanders somewhat on entry. On a good machine those first three are tiny —
   perhaps eight microns, five microns and fifteen microns — and the wander dominates at maybe thirty
   microns on a flat, spot-drilled face. Call it ±0.058 mm in total.
   Now fit a bush. **The machine's contribution disappears entirely** — that is the point of the bush —
   but it is replaced by three new terms. **The bush's own position in the fixture**, which is a
   manufactured tolerance of perhaps ±0.02 mm. **The clearance between the bush and the drill**, which
   permits eccentricity of half the diametral clearance, so about 0.02 mm — and this one is unavoidable
   because the drill has to rotate inside the bush. And **bush wear**, which might be another 0.025 mm at
   end of life. That comes to ±0.075 mm.
   So you have traded ±0.008 mm of machine error for something like ±0.065 mm of bush-related error, and
   only recovered part of the wander term. **On a flat face, that is a bad trade.**
   The clearance term is the one people consistently forget, and it is the most interesting because it is
   irreducible. You cannot make it zero, because the tool must turn and translate inside the bush. You can
   make it small, but then you get wear, heat and seizure risk, and the wear term grows to eat whatever
   you saved. **A bush can never be more accurate than half its clearance**, which puts a hard floor
   under the whole approach.
   Where the trade becomes worthwhile is when the wander term is large. On a twelve-degree sloping face
   the wander was ±0.120 mm — fifteen times the machine's positioning error and enough to fail the
   tolerance on its own. Against that, ±0.075 mm of bush error is an excellent bargain. **The bush is not
   competing with the machine's positioning; it is competing with the drill's tendency to run away.**
   The practical conclusion I draw is to treat guidance as a **per-hole decision** rather than a
   per-fixture one. Fit a bush on the holes where wander dominates and leave the rest to the machine.
   That also minimises the number of consumables, which matters because bush wear is the one error term
   in a fixture that reliably grows with time and therefore needs somebody to manage it.
2. *"A customer brings you a drawing and says they need a drill jig. How do you handle that?"*
   **Answer:** I would treat "drill jig" as a description of the *problem* rather than a specification of
   the *solution*, because in my experience the word is used loosely and about half the time the right
   answer is something else.
   The questions I would ask are, in order. **What machine will this run on?** If it is a pillar drill or
   a radial arm drill, the conversation is short — they need a jig, because there is no positioning
   system and the jig has to provide it. If it is a machining centre, everything is open.
   **What are the entry surfaces like?** Flat and machined, or as-cast, sloping, curved? This is the
   single most useful question, because it separates the cases where guidance earns its keep from the
   cases where it is habit.
   **What is the actual positional requirement, and is it absolute or relative?** This matters more than
   people expect. If twelve holes must match a mating flange but the pattern's position on the part is
   loose, then the requirement is relative, and a jig's own placement error is common-mode and cancels —
   which is exactly the reasoning from the multi-station offset problem. That can make a simple jig
   perfectly adequate where a first glance at the tolerances suggests it is not.
   **What volume, and over what period?** A jig is dedicated to one pattern. If the pattern is likely to
   change, a CNC fixture is a file edit and a jig is a new jig.
   **And are there other operations?** If the part also needs milling and tapping, a CNC setup that does
   everything usually beats a jig that helps only the drilling and then obstructs the rest.
   What I would be careful about is the temptation to just build what was asked for. **Delivering an
   excellent jig to someone who needed a CNC fixture is a project failure even though the jig works** —
   they have paid for consumable bushes and a dedicated tool, and they will need a second setup for
   everything the jig cannot do. The reverse is worse: delivering a CNC fixture to someone drilling a
   four-metre weldment on the shop floor with a magnetic drill.
   The honest framing is that the customer is an expert in their part and I am supposed to be the expert
   in how to hold it. **If I take the word "jig" at face value and skip the questions, I have declined to
   do the part of the job they are actually paying for.**

### 29. Summary
A jig guides the cutting tool and a fixture does not; every jig is also a fixture, since it must still
locate, support and clamp, with guidance being a fourth function added on top. The engineering
consequence is that a jig transfers the accuracy burden from the machine to the tooling — decisive when
machines were manual and had no positioning system, and largely unnecessary once CNC positioned to a few
microns. But CNC solved positioning without solving drill wander, and that is where jigs survive: a bush
does not help the machine find the hole, it stops the drill running away once it gets there. The worked
example made this concrete, with a machine positioning to ±0.008 mm while a 12° sloping entry face
contributed ±0.120 mm of wander — fifteen times as much, and enough to fail a ±0.08 mm tolerance by
185% on its own. Fitting a bush on that one hole while leaving the machine to position the other seven
beat both a full jig and a plain fixture, which shows that guidance is a per-hole decision rather than an
all-or-nothing category choice. Against that, a bush brings its own error chain: its position in the body,
its wear over life, and the clearance to the tool, which permits an eccentricity of c/2 and is
irreducible because the drill must rotate — so a bush can never be more accurate than half its clearance.
Bushes must therefore sit in renewable liners so wear falls on a replaceable component, must be length
1.5–2.5 × d with a standoff of 0.5–1.5 × d measured at the closest point of any sloping face, and must be
managed with a replacement interval, since bush wear is the one fixture error term that reliably grows
with time.

### 30. Key takeaways
- **A jig guides the tool; a fixture does not. Every jig is also a fixture.**
- **A jig moves the accuracy burden from the machine to the tooling.**
- **CNC solved positioning, not drill wander** — that is where jigs survive.
- **A bush competes with the drill's wander, not with the machine's positioning.**
- On a flat face a bush can make position **worse** — ±0.075 vs ±0.058 mm.
- **A bush can never be more accurate than half its clearance.** e = c/2, irreducible.
- **Guidance is a per-hole decision**, not a per-fixture one.
- **Always fit bushes in renewable liners** — put the wear on a replaceable part.
- Bush length **1.5–2.5 × d**; standoff **0.5–1.5 × d** `[PRACTICE]`.
- **Measure standoff at the closest point** of a sloping face.
- **Bush wear is the one fixture error that grows predictably** — allocate budget and set an interval.
- **A portable jig's placement error is common-mode** and cancels in relative hole positions.
- **Record on the drawing why bushes were omitted**, or someone will add them.

---

## LESSON L2.1.3 — FIXTURE VERSUS VISE VERSUS CHUCK

### 1. Lesson title
**L2.1.3 — Dedicated versus general-purpose workholding: repeatability, cost and cycle time**

### 2. Learning objective
By the end of this lesson you will be able to distinguish dedicated from general-purpose workholding,
explain the repeatability and accuracy characteristics of a vise and a chuck and why they differ from a
dedicated fixture, specify soft jaws as the intermediate option, calculate the break-even volume at which
a dedicated fixture displaces general-purpose workholding, and select the correct category for a given
part, volume and tolerance.

### 3. Prerequisites
L2.1.1 (three duties), L1.3.4 (clamping distortion, stability), L1.2.4 (WCS realisation, setting
uncertainty), L0.3.3 (locators).

### 4. Why the topic matters
This is the most commercially consequential boundary in Module 2.1, because it is the one where money is
routinely wasted in **both** directions.

```
   OVER-SPECIFYING
     A dedicated fixture designed and built for a
     job that a vise with soft jaws would have done.
     → ₹200,000 spent, weeks of lead time, for a
       200-part order.

   UNDER-SPECIFYING
     A vise used for a job that needed a fixture.
     → minutes of setup per part, position varying
       with jaw wear and operator technique, scrap.

   ┌──────────────────────────────────────────────┐
   │ BOTH ERRORS ARE COMMON AND BOTH ARE          │
   │ AVOIDABLE BY A CALCULATION THAT TAKES TEN    │
   │ MINUTES.                                     │
   └──────────────────────────────────────────────┘
```

There is also a technical reason. A vise and a chuck are **not simply weaker fixtures** — they have a
structurally different relationship to the three duties, and understanding that tells you what they can
and cannot be asked to do.

### 5. Simple explanation

```
   DEDICATED FIXTURE
     Made for ONE part. Locators match that part's
     features exactly.
     ┌──────────────┐
     │  ●   ▬▬▬  ●  │   ← shaped to this part
     └──────────────┘
     ✓ Best accuracy and speed
     ✗ Useless for anything else
     ✗ Costs money and lead time

  ─────────────────────────────────────────────────

   VISE — general purpose
     Two jaws that close on anything.
     ┌───┐        ┌───┐
     │ ▐ │  part  │ ▐ │
     └───┘        └───┘
     ✓ Available immediately, holds many parts
     ✗ The part's position depends on where you
       put it
     ✗ Only clamps from two sides

  ─────────────────────────────────────────────────

   CHUCK — general purpose, round parts
        ╱─────╲
       │   ◉   │  jaws close radially
        ╲─────╱
     ✓ Self-centring on round features
     ✗ Position along the axis is uncontrolled
       unless a stop is fitted
```

The key difference:

```
   ┌──────────────────────────────────────────────┐
   │ A DEDICATED FIXTURE LOCATES.                 │
   │ A VISE AND A CHUCK MOSTLY JUST CLAMP.        │
   │                                              │
   │ That is why a vise needs the part to be      │
   │ positioned by something else — an edge, a    │
   │ stop, or the operator's care.                │
   └──────────────────────────────────────────────┘
```

### 6. Engineering explanation

**THE THREE DUTIES, RE-EXAMINED**

Applying the L2.1.1 framework to each device is the clearest way to see the difference:

```
   ┌──────────────┬─────────┬─────────┬─────────┐
   │              │ LOCATE  │ SUPPORT │ CLAMP   │
   ├──────────────┼─────────┼─────────┼─────────┤
   │ DEDICATED    │ ✓✓✓     │ ✓✓✓     │ ✓✓✓     │
   │ FIXTURE      │ designed│ designed│ designed│
   ├──────────────┼─────────┼─────────┼─────────┤
   │ PLAIN VISE   │ ✗       │ partial │ ✓✓      │
   │              │ operator│ base    │ two     │
   │              │ places  │ only    │ sides   │
   │              │ the part│         │         │
   ├──────────────┼─────────┼─────────┼─────────┤
   │ VISE + SOFT  │ ✓✓      │ ✓✓      │ ✓✓      │
   │ JAWS         │ machined│ machined│         │
   │              │ to suit │ to suit │         │
   ├──────────────┼─────────┼─────────┼─────────┤
   │ CHUCK        │ ✓ radial│ partial │ ✓✓✓     │
   │ (3-jaw)      │ ✗ axial │         │ strong  │
   │              │ (needs  │         │         │
   │              │ a stop) │         │         │
   └──────────────┴─────────┴─────────┴─────────┘
```

> **The critical row is the plain vise: it does not locate at all.** The jaws clamp, the base supports,
> and the part's position along the jaws, its height above the base and its rotation are all determined
> by however the operator placed it. **A vise is a clamping device with a supporting base — the locating
> duty is simply absent** unless something is added.
>
> That is why parts in a vise are set with a parallel, an end stop, or by indicating each one — all of
> which are ways of supplying the missing locating duty.

**SOFT JAWS — THE INTERMEDIATE OPTION**

```
   SOFT JAWS ARE A DEDICATED FIXTURE'S LOCATORS
   FITTED INTO A GENERAL-PURPOSE VISE.

     ┌───────┐          ┌───────┐
     │  ╱▔▔╲ │  part    │ ╱▔▔╲  │
     │ │    ││          ││    │ │
     └───────┘          └───────┘
      machined to the part profile

   ✓ Locates properly — the jaw form determines
     position
   ✓ Supports the part around its profile
   ✓ Uses the vise's existing clamping mechanism
     and its known position on the table
   ✓ Cheap: a pair of aluminium or steel blanks
     and an hour of machining
   ✓ Fast: same day
   ✗ Only two-sided clamping
   ✗ Limited part size
   ✗ Jaw wear and re-machining
```

`[PRACTICE]` **Soft jaws are the single most under-used option in workholding.** They convert a vise from
a clamping device into something that genuinely locates, at a small fraction of a dedicated fixture's
cost and lead time. **The decision tree in §9 puts them where they belong: the default answer for low and
medium volumes on parts that fit a vise.**

**A CRITICAL DETAIL: MACHINE SOFT JAWS IN PLACE**

```
   ✗ WRONG                    ✓ RIGHT
   Machine the jaws off       Bolt the jaws into the
   the machine, then bolt     vise, clamp them onto a
   them in.                   spacer at the working
                              pressure, THEN machine
                              the profile.

   Why: the jaws deflect when clamped, and the vise
   screw pulls the moving jaw down slightly. Jaws
   machined free do not match the clamped geometry.

   [PRACTICE] Clamp on a spacer of the same
   thickness as the part's clamped dimension, at the
   pressure that will be used. This is the same
   principle as GRINDING LOCATORS IN POSITION
   (L1.1.2, L1.2.3): THE GEOMETRY THAT MATTERS IS
   THE ASSEMBLED, LOADED GEOMETRY.
```

**REPEATABILITY — THE NUMBERS**

`[GUIDE]` Indicative part-to-part positional repeatability, to be confirmed by measurement:

| Device | Repeatability | Limited by |
|---|---|---|
| **Dedicated fixture, hardened locators** | ±0.01–0.02 mm | Locator wear, chips |
| **Vise with machined soft jaws** | ±0.02–0.05 mm | Jaw wear, clamping variation |
| **Vise with a parallel and an end stop** | ±0.05–0.15 mm | Operator seating, parallel position |
| **Plain vise, operator placement** | ±0.5 mm or worse | Operator technique entirely |
| **3-jaw self-centring chuck** | ±0.03–0.10 mm radial | Scroll wear, jaw condition |
| **4-jaw independent chuck, indicated** | ±0.005–0.02 mm | Operator skill and time |
| **Collet chuck** | ±0.005–0.015 mm | Collet condition, bar tolerance |

> **Two rows deserve comment.** The 4-jaw independent chuck achieves excellent accuracy but takes
> minutes per part of skilled indicating — it is the manual equivalent of a fixture, trading time for
> tooling. And the plain vise's ±0.5 mm is not a criticism of vises; **it is the correct number for a
> device that has no locating duty at all.**

**THE VISE'S CHARACTERISTIC PROBLEMS**

```
   1. JAW LIFT
        As the vise closes, the moving jaw tends to
        rise, lifting the part off the parallels.
        ┌───┐   ↑ lift   ┌───┐
        │ ▐ │───────────│ ▐ │
        └───┘            └───┘
        [PRACTICE] Tap the part down while
        tightening; use a vise with pull-down
        geometry; or rely on soft jaws that grip
        below the part's centre of pressure.

   2. TWO-SIDED CLAMPING ONLY
        A vise squeezes from two sides. A part that
        needs restraint in the third direction
        needs a stop.

   3. CLAMPING DISTORTION
        The full L1.3.4 problem: a vise applies a
        large force through two small areas. Thin
        or ring-shaped parts distort badly.

   4. THE PART MUST FIT THE JAWS
        Size range is limited both ways — too small
        and it disappears between the jaws, too
        large and it does not fit.

   5. ACCESS
        The jaws occupy two sides of the part.
        Anything to be machined on those faces
        needs a different setup.
```

**THE CHUCK'S CHARACTERISTIC PROBLEMS**

```
   1. AXIAL POSITION IS UNCONTROLLED
        A 3-jaw chuck centres the part radially and
        says nothing about how far in it sits.
        → an AXIAL STOP is essential for repeatable
          work. This is the most common omission.

   2. SELF-CENTRING IS ONLY AS GOOD AS THE SCROLL
        A worn scroll chuck can be 0.10 mm out or
        worse. It centres CONSISTENTLY WRONG rather
        than randomly, which makes it hard to spot.

   3. GRIPPING FORCE IS RADIAL AND LARGE
        Excellent retention, and a serious distortion
        risk on thin-walled or ring parts — the
        classic three-lobed bore from a 3-jaw chuck.

   4. IT ONLY SUITS ROUND (OR REGULAR) FEATURES
        Which is not a criticism, but does define
        the boundary.
```

`[PRACTICE]` **The three-lobed bore is worth recognising on sight.** A thin ring bored in a 3-jaw chuck
comes out round while clamped and takes on a three-lobed form when released — the L1.3.4 mechanism, with
a signature that identifies the cause immediately. The answer is soft jaws with a large wrap angle, lower
gripping pressure, or a different holding method entirely.

**THE ECONOMIC COMPARISON**

```
   THE VARIABLES THAT DECIDE

     VOLUME          — the dominant term
     SETUP TIME      — per part
     TOLERANCE       — may rule out the cheap option
     LEAD TIME       — a fixture takes weeks
     PART SIZE       — may rule out a vise
     ACCESS          — jaws obstruct two faces

   ┌──────────────────────────────────────────────┐
   │ THE CALCULATION IS THE SAME BREAK-EVEN FORM  │
   │ USED IN L1.3.6:                              │
   │                                              │
   │   N_breakeven = C_fixture /                  │
   │                 (Δt_per_part × rate)         │
   │                                              │
   │ BUT TOLERANCE IS A GATE, NOT A TERM. If the  │
   │ vise cannot hold the tolerance, the          │
   │ break-even calculation never happens.        │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Dedicated fixture** | Workholding made for one specific part |
| **General-purpose workholding** | Device holding a range of parts — vise, chuck, clamps |
| **Soft jaws** | Unhardened vise or chuck jaws machined to suit a specific part |
| **Hard jaws** | Standard hardened serrated jaws |
| **Jaw lift** | Rise of the moving jaw as a vise closes, lifting the part |
| **Parallel** | Precision spacer setting part height in a vise |
| **Scroll chuck** | Self-centring chuck with jaws driven by a spiral scroll |
| **Independent chuck** | Chuck with individually adjustable jaws (usually 4) |
| **Collet** | Split sleeve gripping a round part over its full circumference |
| **Wrap angle** | Angular extent of contact between jaw and part |
| **Three-lobed distortion** | Characteristic out-of-round form from 3-jaw clamping |
| **Break-even volume** | Volume at which a dedicated fixture's cost is recovered |

### 8. Principle

> **A DEDICATED FIXTURE LOCATES; A PLAIN VISE AND A CHUCK MOSTLY JUST CLAMP.** A vise has no locating
> duty at all — position comes from a parallel, a stop, or the operator.
> **SOFT JAWS ARE A DEDICATED FIXTURE'S LOCATORS FITTED INTO A GENERAL-PURPOSE DEVICE**, and they are the
> most under-used option in workholding.
> **MACHINE SOFT JAWS IN PLACE, CLAMPED AT WORKING PRESSURE.** The geometry that matters is the
> assembled, loaded geometry.
> **A 3-JAW CHUCK CONTROLS RADIAL POSITION AND SAYS NOTHING ABOUT AXIAL POSITION** — an axial stop is
> essential, and its omission is the commonest chuck error.
> **TOLERANCE IS A GATE, NOT A TERM.** If the cheaper option cannot hold the tolerance, the break-even
> calculation never happens.

### 9. Industrial application

**The workholding selection decision**

```
   THE DECISION TREE  [PRACTICE]

   1. CAN THE TOLERANCE BE HELD?
        Compare the required tolerance against the
        device's repeatability PLUS the other error
        sources (L1.2.4 budget).
        → THIS IS A GATE. Options that fail here
          are eliminated, whatever they cost.

   2. DOES THE PART PHYSICALLY SUIT?
        Size, shape, access to the faces being
        machined, the number of sides needing
        restraint.

   3. WHAT IS THE VOLUME?
        Compute the break-even against setup time.

   4. WHAT IS THE LEAD TIME?
        A fixture is weeks. Soft jaws are hours.
        An urgent order may decide this on its own.

   5. WILL THE PART RECUR?
        A fixture for a one-off order is waste; the
        same fixture for an annual repeat order is
        an asset.

   ┌──────────────────────────────────────────────┐
   │ THE ORDER MATTERS. TOLERANCE AND FIT ARE     │
   │ GATES; VOLUME AND LEAD TIME ARE TRADE-OFFS.  │
   │ Doing the economics first and discovering    │
   │ the tolerance gate afterwards wastes the     │
   │ analysis.                                    │
   └──────────────────────────────────────────────┘
```

**The soft-jaw default**

`[PRACTICE]` For a part that fits a vise, a reasonable default policy:

| Volume | Typical answer |
|---|---|
| **1–20 parts** | Plain vise with a stop, or indicate each part |
| **20–500 parts** | **Soft jaws** — almost always the right answer |
| **500–5,000 parts** | Soft jaws, unless tolerance, access or cycle time forces a fixture |
| **5,000+ parts** | Dedicated fixture, usually multi-part |

> **These bands are indicative and shift with part value, tolerance and machine rate.** The point is that
> **the soft-jaw band is wide**, and a great many dedicated fixtures are built for volumes that sit
> squarely inside it.

**Recognising the three-lobed bore** `[EX-ASSUMED]` illustrative:

```
SYMPTOM
  A thin steel ring bored in a 3-jaw chuck measures
  round in the chuck and 0.06 mm out of round when
  free, against a 0.02 mm requirement.

THE SIGNATURE
  Measured around the bore, the error has THREE
  lobes at 120°, aligned with the jaws.

  THREE LOBES = THREE JAWS. The diagnosis is
  immediate and requires no further investigation.

MECHANISM
  Exactly L1.3.4: the ring is squeezed into a
  three-cornered shape, bored round in that state,
  and springs back on release.

RESPONSES, in order of preference
  1. SOFT JAWS with a large wrap angle — spreading
     the load over a large arc rather than three
     points reduces the distortion dramatically
  2. REDUCE GRIPPING PRESSURE — the boring forces
     are small (L1.3.4)
  3. MORE JAWS — a 6-jaw chuck halves the lobe
     amplitude for the same total force [GUIDE]
  4. EXPANDING MANDREL from the bore, or axial
     clamping against a face

THE GENERAL POINT
  A CHUCK'S GRIPPING FORCE IS LARGE AND
  CONCENTRATED. That is a virtue for a solid billet
  and a defect for a thin ring.
```

### 10. Design rules
- **R1** — Treat **tolerance and physical fit as gates**, evaluated before any economic comparison
  `[PRACTICE]`.
- **R2** — Default to **soft jaws** for parts that fit a vise at low and medium volume.
- **R3** — **Machine soft jaws in place**, clamped on a spacer at working pressure.
- **R4** — Never rely on a plain vise to **locate**; provide a parallel, an end stop, or soft jaws.
- **R5** — Always fit an **axial stop** when using a chuck for repeatable work.
- **R6** — For thin or ring-shaped parts, **increase the wrap angle** and **reduce gripping force**
  rather than clamping harder.
- **R7** — Check **jaw lift** and specify a pull-down vise or a jaw form that resists it.
- **R8** — Confirm that the **jaws do not obstruct** the faces being machined.
- **R9** — Compute the **break-even volume** before committing to a dedicated fixture.
- **R10** — Consider **lead time** as an independent factor; soft jaws are hours, fixtures are weeks.
- **R11** — Record **whether the part will recur**; a fixture for a one-off is waste.

### 11. Rules of thumb
- **A dedicated fixture locates. A vise clamps. A chuck centres.**
- **A plain vise has no locating duty at all.**
- **Soft jaws are the most under-used option in workholding.**
- **Machine soft jaws in place, at working pressure.**
- **A chuck controls radial position and not axial** — fit a stop.
- **Three lobes means three jaws.**
- Repeatability `[GUIDE]`: fixture **±0.01–0.02**, soft jaws **±0.02–0.05**, vise with stop
  **±0.05–0.15**, plain vise **±0.5**.
- **A 4-jaw independent chuck trades time for tooling** — the manual equivalent of a fixture.
- **Tolerance is a gate, not a term.**
- **The soft-jaw volume band is wide** — roughly 20 to 5,000 parts.
- **Jaw lift is real** — tap the part down or use pull-down geometry.

### 12. Formulae

**Break-even volume, dedicated fixture versus general-purpose**
```
N_be = C_fixture / (Δt × rate)
where Δt = t_general − t_dedicated  (hours per part)
```

**Total cost comparison over a programme**
```
C_general   = N × t_general × rate + C_softjaws
C_dedicated = N × t_dedicated × rate + C_fixture
Choose the lower, PROVIDED both pass the tolerance
gate.
```

**Tolerance gate**
```
Require:  R_device + E_other ≤ T_part
where R_device = device repeatability
      E_other  = machine, tooling, thermal (L1.2.4)
→ if this fails, the device is eliminated regardless
  of cost
```

**Chuck distortion, indicative scaling** `[GUIDE]`
```
For a thin ring gripped by n equally spaced jaws,
the lobe amplitude scales approximately as:
   δ ∝ F_total / n
→ doubling the number of jaws roughly halves the
  distortion for the same total gripping force.

This is a GUIDELINE relationship for reasoning about
the trade-off. Real distortion depends on the ring's
section, the wrap angle and the material, and should
be MEASURED (L1.3.4).
```

| Variable | Meaning | Unit |
|---|---|---|
| N_be | Break-even volume | parts |
| Δt | Time saving per part | h |
| R_device | Device repeatability | mm |
| T_part | Part tolerance | mm |
| n | Number of jaws | — |

### 13. Worked numerical example

**Problem:** A component can be held in a plain vise, a vise with soft jaws, or a dedicated fixture.
Apply the tolerance gate, compute the break-even volumes, and select the correct option at two different
production volumes.

```
GIVEN:
  PART AND REQUIREMENT                           [PROJ]
    Steel bracket, 150 × 90 × 40 mm
    Fits a 160 mm vise
    Positional tolerance on machined features
                                = ±0.05 mm
    Two faces to be machined; the vise jaws grip
      the other two

  ERROR SOURCES                                  [GUIDE]
    Machine + tooling + thermal, already
      consumed                  = 0.030 mm
    Repeatability:
      plain vise with a stop    = ±0.090 mm
      vise with soft jaws       = ±0.030 mm
      dedicated fixture         = ±0.015 mm

  SETUP TIMES                                    [EX-ASSUMED]
    Plain vise with a stop      = 2.4 min/part
    Soft jaws                   = 1.1 min/part
    Dedicated fixture           = 0.6 min/part

  COSTS                                          [EX-ASSUMED]
    Soft jaw pair, material + machining
                                = ₹9,000
    Dedicated fixture           = ₹165,000
    Machine rate                = ₹1,800/h

  VOLUMES TO EVALUATE                            [PROJ]
    Case A                      = 350 parts/yr
    Case B                      = 6,000 parts/yr

REQUIRED:
  (a) Apply the tolerance gate to all three options
  (b) Break-even volume, soft jaws vs plain vise
  (c) Break-even volume, dedicated fixture vs soft
      jaws
  (d) Total annual cost of each surviving option at
      Case A
  (e) Total annual cost at Case B
  (f) The recommendation for each case
  (g) Engineering conclusion

ASSUMPTION:
  1. Repeatability figures are GUIDELINE values and
     MUST BE CONFIRMED by a repeat-loading study on
     the actual equipment. Vise repeatability in
     particular varies enormously with condition and
     operator. [GUIDE]
  2. Worst-case arithmetic summation of the
     repeatability with the other error sources.
     [PRACTICE]
  3. Times and costs are ILLUSTRATIVE ASSUMED VALUES.
     [EX-ASSUMED]
  4. Soft jaw cost includes the blanks and the
     machining time to produce them, but not their
     periodic re-machining, which would slightly
     worsen the soft-jaw case. [EX-ASSUMED]
  5. The vise itself is assumed already owned; only
     the incremental tooling is costed.
  6. Fixture life assumed to exceed the programme;
     no residual value or depreciation modelled.

FORMULA:
  (a) R_device + E_other ≤ T_part
  (b,c) N_be = ΔC / (Δt × rate)
  (d,e) C_annual = N × t × rate + C_tooling

UNIT CONVERSION:
  Tolerance band = ±0.05 → 0.100 mm total
  Repeatability bands: ±0.090 → 0.180
                       ±0.030 → 0.060
                       ±0.015 → 0.030
  Times: 2.4 min = 0.040 h
         1.1 min = 0.018333 h
         0.6 min = 0.010 h

SUBSTITUTION AND CALCULATION:

  (a) THE TOLERANCE GATE

      Available band          = 0.100 mm
      Already consumed        = 0.030 mm
      Remaining for the
        workholding           = 0.070 mm

      PLAIN VISE WITH A STOP:
        0.180 > 0.070
        → 257 % of the remaining budget
        ✗ ELIMINATED

      VISE WITH SOFT JAWS:
        0.060 ≤ 0.070
        → 85.7 % of the remaining budget
        ✓ PASSES, but tight
        Total: 0.030 + 0.060 = 0.090 mm
             = 90.0 % of the full band

      DEDICATED FIXTURE:
        0.030 ≤ 0.070
        → 42.9 % of the remaining budget
        ✓ PASSES comfortably
        Total: 0.030 + 0.030 = 0.060 mm
             = 60.0 % of the full band

      ┌────────────────────────────────────────────┐
      │ THE PLAIN VISE IS ELIMINATED BEFORE ANY    │
      │ ECONOMICS ARE CONSIDERED. Its 2.4 min      │
      │ setup and zero tooling cost are IRRELEVANT │
      │ because it cannot make the part.           │
      │                                            │
      │ THIS IS WHAT "TOLERANCE IS A GATE" MEANS.  │
      └────────────────────────────────────────────┘

  (b) BREAK-EVEN, SOFT JAWS vs PLAIN VISE

      (Computed for completeness, although the plain
       vise is already eliminated.)

        Δt = 0.040 − 0.018333 = 0.021667 h
        ΔC = 9,000

        N_be = 9,000/(0.021667 × 1,800)
             = 9,000/39.0
             = 230.8 parts

      → Soft jaws would pay for themselves in 231
        parts on TIME ALONE, even ignoring the
        tolerance gate that already eliminated the
        plain vise.

  (c) BREAK-EVEN, DEDICATED FIXTURE vs SOFT JAWS

        Δt = 0.018333 − 0.010 = 0.008333 h
        ΔC = 165,000 − 9,000 = 156,000

        N_be = 156,000/(0.008333 × 1,800)
             = 156,000/15.0
             = 10,400 parts

      → THE FIXTURE NEEDS 10,400 PARTS TO PAY BACK
        AGAINST SOFT JAWS.

  (d) TOTAL ANNUAL COST — CASE A, 350 parts/yr

      SOFT JAWS:
        Machine time = 350 × 0.018333 × 1,800
                     = 350 × 33.0
                     = ₹11,550
        Tooling      = ₹9,000
        ─────────────────────────────
        TOTAL        = ₹20,550

      DEDICATED FIXTURE:
        Machine time = 350 × 0.010 × 1,800
                     = 350 × 18.0
                     = ₹6,300
        Tooling      = ₹165,000
        ─────────────────────────────
        TOTAL        = ₹171,300

      DIFFERENCE = 171,300 − 20,550 = ₹150,750
      RATIO      = 171,300/20,550 = 8.34 ×

      → SOFT JAWS, decisively.

  (e) TOTAL ANNUAL COST — CASE B, 6,000 parts/yr

      SOFT JAWS:
        Machine time = 6,000 × 0.018333 × 1,800
                     = 6,000 × 33.0
                     = ₹198,000
        Tooling      = ₹9,000
        ─────────────────────────────
        TOTAL        = ₹207,000

      DEDICATED FIXTURE:
        Machine time = 6,000 × 0.010 × 1,800
                     = 6,000 × 18.0
                     = ₹108,000
        Tooling      = ₹165,000
        ─────────────────────────────
        TOTAL        = ₹273,000

      DIFFERENCE = 273,000 − 207,000 = ₹66,000
      → SOFT JAWS STILL CHEAPER IN YEAR ONE.

      BUT IN YEAR TWO the fixture is already paid
      for:
        Soft jaws, year 2  = ₹198,000
                             (+ re-machining)
        Fixture, year 2    = ₹108,000
        SAVING             = ₹90,000/yr

      CUMULATIVE OVER 3 YEARS at 6,000/yr
      (18,000 parts, past the 10,400 break-even):
        Soft jaws  = 3 × 198,000 + 9,000
                   = ₹603,000
        Fixture    = 3 × 108,000 + 165,000
                   = ₹489,000
        FIXTURE SAVES ₹114,000 over three years.

  (f) RECOMMENDATION

      CASE A, 350 parts/yr:
        → SOFT JAWS. The fixture costs 8.34× more
          and would need 30 years of production to
          break even.

      CASE B, 6,000 parts/yr:
        → DEDICATED FIXTURE, PROVIDED the programme
          runs at least ~21 months (10,400 parts).
        → If the programme is a single year, SOFT
          JAWS remain cheaper.

      ┌────────────────────────────────────────────┐
      │ THE ANSWER AT CASE B DEPENDS ON PROGRAMME  │
      │ LIFE, NOT ON ANNUAL VOLUME.                │
      │                                            │
      │ 6,000 parts/yr for one year → soft jaws    │
      │ 6,000 parts/yr for three years → fixture   │
      │                                            │
      │ SAME ANNUAL VOLUME, OPPOSITE ANSWERS.      │
      └────────────────────────────────────────────┘

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Plain vise               │ 257 % ✗ ELIMINATED│
  │     Soft jaws                │ 85.7 % ✓ tight    │
  │     Dedicated fixture        │ 42.9 % ✓          │
  │ (b) Break-even, jaws vs vise │ 230.8 parts       │
  │ (c) Break-even, fixture vs   │ 10,400 parts      │
  │     jaws                     │                   │
  │ (d) Case A, soft jaws        │ ₹20,550           │
  │     Case A, fixture          │ ₹171,300 (8.34×)  │
  │ (e) Case B yr 1, soft jaws   │ ₹207,000          │
  │     Case B yr 1, fixture     │ ₹273,000          │
  │     Case B 3 yr, soft jaws   │ ₹603,000          │
  │     Case B 3 yr, fixture     │ ₹489,000          │
  │ (f) Case A                   │ SOFT JAWS         │
  │     Case B, ≥21 months       │ FIXTURE           │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The relevant margin is
  tolerance utilisation: 90.0 % of the band for soft
  jaws and 60.0 % for the fixture. The soft-jaw
  figure is tight and leaves little for jaw wear —
  which is a real consideration, since soft jaws
  degrade faster than hardened locators and would
  need periodic re-machining.

PASS/FAIL:
  ✗ FAIL — plain vise, 257 % of the remaining
    tolerance budget.
  ✓ PASS — soft jaws at 90.0 % of the total band,
    tight but workable with a re-machining interval.
  ✓ PASS — dedicated fixture at 60.0 %.

ENGINEERING CONCLUSION:
  1. THE TOLERANCE GATE ELIMINATED THE CHEAPEST
     OPTION BEFORE ANY ECONOMICS WERE DONE, AND THAT
     ORDER OF OPERATIONS IS THE POINT.
     The plain vise has zero tooling cost and was
     never a candidate, because at 257 % of the
     remaining budget it cannot make the part. Had I
     started with the cost comparison I would have
     produced an attractive-looking answer and then
     had to discard it.
     TOLERANCE AND PHYSICAL FIT ARE GATES; VOLUME AND
     LEAD TIME ARE TRADE-OFFS. Evaluate them in that
     order.

  2. SOFT JAWS BEAT THE DEDICATED FIXTURE AT BOTH
     VOLUMES IN YEAR ONE, WHICH SURPRISES PEOPLE.
     At 350 parts the fixture costs 8.34 times as
     much. At 6,000 parts — a volume most people
     would call "definitely fixture territory" — soft
     jaws are STILL ₹66,000 cheaper in the first
     year, because the fixture's ₹156,000 premium
     buys only 0.5 minutes per part.
     THE FIXTURE WINS ONLY OVER TIME: 10,400 parts,
     or about 21 months at this rate. THE DECIDING
     VARIABLE IS PROGRAMME LIFE, NOT ANNUAL VOLUME —
     and 6,000 parts a year gives opposite answers
     depending on whether the programme runs one year
     or three.
     THIS IS THE QUESTION MOST OFTEN NOT ASKED. "How
     many a year?" is the wrong question on its own;
     "for how long?" completes it.

  3. THE MARGINAL TIME SAVING IS WHAT LIMITS THE
     FIXTURE'S CASE.
     Soft jaws to fixture saves only 0.5 min/part,
     because soft jaws already do the locating
     properly. The big saving was earlier in the
     chain: plain vise to soft jaws saved 1.3 min for
     ₹9,000, breaking even at 231 parts.
     MOST OF THE AVAILABLE BENEFIT IS CAPTURED BY THE
     CHEAP OPTION. That is the general shape of this
     comparison and it is why soft jaws occupy such a
     wide volume band.

  4. THE SOFT-JAW TOLERANCE MARGIN IS THE REAL RISK,
     NOT THE COST.
     90.0 % of the band consumed, against 60.0 % for
     the fixture. Soft jaws are unhardened by
     definition, so they wear faster than the
     hardened locators of a dedicated fixture, and
     that remaining 10 % will erode.
     I WOULD ACCEPT SOFT JAWS AT CASE A WITH A
     DEFINED RE-MACHINING INTERVAL, and I would be
     uncomfortable running them at Case B volumes for
     three years without one. THAT CONSIDERATION —
     not the arithmetic — is what would push me
     toward the fixture on a long programme.

  5. WHAT I WOULD ACTUALLY RECOMMEND.
     Case A: soft jaws, with a re-machining interval
     and a first-off check. Case B: soft jaws
     immediately to get production running, and a
     dedicated fixture ordered in parallel if the
     programme is confirmed beyond about eighteen
     months. THE PHASED ANSWER IS OFTEN AVAILABLE AND
     IS RARELY PROPOSED — it removes the lead-time
     risk and defers the capital until the volume is
     real.

SENSITIVITY NOTE:
  Ranked by influence:
    1. PROGRAMME LIFE — reverses the Case B
       conclusion entirely. The most important
       variable and the one least often specified.
    2. TOLERANCE — a gate rather than a gradient. It
       eliminated one option outright and would
       eliminate soft jaws too if the requirement
       were ±0.04 mm instead of ±0.05.
    3. MARGINAL TIME SAVING, jaws to fixture — only
       0.5 min/part. If it were 1.5 min the
       break-even would fall to 3,467 parts and the
       fixture would win at Case B in the first year.
    4. FIXTURE COST — linear. A ₹100,000 fixture
       would break even at 6,067 parts, roughly one
       year.
    5. SOFT-JAW WEAR — not modelled numerically here,
       and the factor most likely to change the
       recommendation on a long programme.
```

### 14. Engineering assumptions
- Repeatability figures are guideline values requiring confirmation by a repeat-loading study `[GUIDE]`;
  vise repeatability varies enormously with condition and operator.
- Worst-case arithmetic summation `[PRACTICE]`.
- Times and costs are illustrative assumed values `[EX-ASSUMED]`.
- Soft jaw cost excludes periodic re-machining, which would slightly worsen the soft-jaw case
  `[EX-ASSUMED]`.
- The vise is assumed already owned; only incremental tooling is costed.
- Fixture life exceeds the programme; no depreciation modelled.

### 15. Diagram

```
     FIXTURE vs VISE vs CHUCK
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE THREE DUTIES, APPLIED

                 LOCATE  SUPPORT  CLAMP
   FIXTURE        ✓✓✓     ✓✓✓     ✓✓✓
   PLAIN VISE     ✗       partial  ✓✓
   VISE+SOFT JAW  ✓✓      ✓✓       ✓✓
   3-JAW CHUCK    radial  partial  ✓✓✓
                  only

   ┌──────────────────────────────────────────────┐
   │ A PLAIN VISE HAS NO LOCATING DUTY AT ALL.    │
   │                                              │
   │ Position comes from a parallel, a stop, or   │
   │ the operator — which is why a vise NEEDS one │
   │ of those to make repeatable parts.           │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  SOFT JAWS — A FIXTURE'S LOCATORS IN A VISE

   PLAIN JAWS              SOFT JAWS
   ┌───┐    ┌───┐          ┌───────┐  ┌───────┐
   │ ▐ │part│ ▐ │          │ ╱▔▔╲  │  │  ╱▔▔╲ │
   └───┘    └───┘          └───────┘  └───────┘
   clamps only             machined to the profile
                           → LOCATES and SUPPORTS

   ✓ hours, not weeks   ✓ ~₹9,000, not ₹165,000
   ✓ uses the vise's existing clamping and position

   ┌──────────────────────────────────────────────┐
   │ THE MOST UNDER-USED OPTION IN WORKHOLDING.   │
   │ Volume band roughly 20 to 5,000 parts.       │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  MACHINE SOFT JAWS IN PLACE

   ✗ machined free            ✓ clamped on a spacer
     then bolted in             at WORKING PRESSURE,
                                then machined

   Jaws deflect under clamping and the vise screw
   pulls the moving jaw down. Free-machined jaws do
   not match the clamped geometry.

   Same principle as GRINDING LOCATORS IN POSITION
   (L1.1.2, L1.2.3): THE GEOMETRY THAT MATTERS IS
   THE ASSEMBLED, LOADED GEOMETRY.

  ──────────────────────────────────────────────────────────

  THE TOLERANCE GATE — THE WORKED EXAMPLE

   available for workholding      0.070 mm
   ├ plain vise    ████████████████████ 0.180 ✗ 257 %
   ├ soft jaws     ██████ 0.060 ✓ 85.7 %
   └ fixture       ███ 0.030 ✓ 42.9 %

   ┌──────────────────────────────────────────────┐
   │ THE PLAIN VISE WAS ELIMINATED BEFORE ANY     │
   │ ECONOMICS WERE DONE. Zero tooling cost is    │
   │ irrelevant if it cannot make the part.       │
   │                                              │
   │ TOLERANCE AND FIT ARE GATES.                 │
   │ VOLUME AND LEAD TIME ARE TRADE-OFFS.         │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE ECONOMICS — AND THE QUESTION NOBODY ASKS

   350 parts/yr    jaws ₹20,550  fixture ₹171,300
                   → SOFT JAWS (8.34× cheaper)

   6,000 parts/yr  YEAR 1
                   jaws ₹207,000  fixture ₹273,000
                   → SOFT JAWS still cheaper!

                   3 YEARS (18,000 parts)
                   jaws ₹603,000  fixture ₹489,000
                   → FIXTURE saves ₹114,000

   break-even = 10,400 parts ≈ 21 months

   ┌──────────────────────────────────────────────┐
   │ SAME ANNUAL VOLUME, OPPOSITE ANSWERS.        │
   │                                              │
   │ THE DECIDING VARIABLE IS PROGRAMME LIFE, NOT │
   │ ANNUAL VOLUME. "How many a year?" is the     │
   │ wrong question on its own — "for how long?"  │
   │ completes it.                                │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE VISE'S CHARACTERISTIC PROBLEMS

   JAW LIFT              TWO-SIDED ONLY
   ┌───┐  ↑   ┌───┐      ┌───┐     ┌───┐
   │ ▐ │──────│ ▐ │      │ ▐ │ ??? │ ▐ │
   └───┘      └───┘      └───┘  ↕  └───┘
   part rises off        no restraint in the
   the parallels         third direction

   PLUS: distortion, size limits, jaws obstruct
   two faces.

  ──────────────────────────────────────────────────────────

  THE CHUCK — AND THE THREE-LOBED BORE

   ✗ AXIAL POSITION UNCONTROLLED
        ╱─────╲
       │   ◉   │  ←──?──→  fit an AXIAL STOP.
        ╲─────╱            The commonest omission.

   THREE-LOBED DISTORTION
     clamped        released
      ╱───╲          ╱─╲
     │  ◉  │   →    │ ⬡ │  three lobes at 120°
      ╲───╯          ╲─╱

   ┌──────────────────────────────────────────────┐
   │ THREE LOBES MEANS THREE JAWS.                │
   │ Diagnosis immediate, no investigation needed.│
   │                                              │
   │ Answers: bigger wrap angle, less pressure,   │
   │ more jaws (δ ∝ F/n), or a mandrel.           │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
SOFT JAW SET SJ-6300
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: JAWS TO BE MACHINED IN POSITION IN VISE
        ASSET 4471, CLAMPED ONTO A 40.00 mm SPACER AT
        THE WORKING CLAMP PRESSURE OF 12 MPa.
        JAWS MACHINED FREE WILL NOT MATCH THE CLAMPED
        GEOMETRY.

NOTE 2: THESE JAWS PROVIDE THE LOCATING DUTY. THE
        VISE PROVIDES CLAMPING ONLY. THE COMPONENT
        MUST SEAT FULLY AGAINST THE JAW PROFILE AND
        THE END STOP ITEM 3 BEFORE CLAMPING.

NOTE 3: JAWS ARE UNHARDENED AND WILL WEAR.
        0.030 mm OF THE POSITIONAL TOLERANCE BUDGET
        IS ALLOCATED TO THE JAWS. RE-MACHINE AT THE
        INTERVAL IN MS-6300 OR WHEN A FIRST-OFF CHECK
        EXCEEDS ±0.030 mm.

NOTE 4: VISE ASSET AND POSITION ON THE TABLE ARE
        RECORDED IN SETUP SHEET SS-6300. THE VISE IS
        KEYED TO T-SLOT 3 — REFITTING WITHOUT THE KEY
        INVALIDATES THE WORK OFFSET.
```

Note 4 applies the L1.2.1 refit lesson to a vise, which is where it most often goes wrong: **a vise is
removed and refitted far more often than a dedicated fixture**, and it is far less likely to be keyed.

### 17. CAD workflow
1. Model the **vise** including jaw travel and the working envelope
2. Model the **soft jaw blanks** at their supplied size
3. Cut the **part profile** into the jaws in the model, with the part in its clamped position
4. Verify the **grip depth and wrap angle** — enough contact to hold and locate without distortion
5. Check that the **jaws do not obstruct** the faces being machined or the tool access (L1.3.6)
6. Model the **end stop** — soft jaws locate in two axes, and the third still needs one
7. Verify **jaw lift** is resisted by the profile, or specify a pull-down vise

`[PRACTICE]` Step 6 is the one most often skipped. Soft jaws control the part across the jaws and
vertically, but **not along the jaws** unless a stop or a profile feature is provided. That is the same
missing-locating-duty problem as the plain vise, only less obvious.

### 18. GD&T application

```
STANDARD: ASME Y14.5-2018

  THE DEVICE DETERMINES WHAT CAN BE SPECIFIED.

  DEDICATED FIXTURE — the datum features are
  physical locators, so the part's datums can be
  realised directly:
  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.05 │ A │ B │ C │          │
  └──────────────────────────────────┘

  VISE WITH SOFT JAWS — the jaws realise a datum
  from the gripped surfaces, which may NOT be the
  part's drawing datums:

  ┌────────────────────────────────────────────┐
  │ THIS IS THE ISSUE THAT CATCHES PEOPLE.     │
  │                                            │
  │ If the drawing datums are A (base), B and  │
  │ C (two edges), but the vise grips two other│
  │ faces, then the machined features are      │
  │ positioned relative to the GRIPPED faces,  │
  │ not the DATUM faces.                       │
  │                                            │
  │ The error between them is a DATUM SHIFT    │
  │ and it adds to the stack — the L0.2.5      │
  │ problem.                                   │
  │                                            │
  │ → SOFT JAWS SHOULD GRIP ON THE DRAWING     │
  │   DATUM FEATURES WHERE POSSIBLE. Where     │
  │   they cannot, the datum shift must be     │
  │   included in the tolerance budget.        │
  └────────────────────────────────────────────┘
```

### 19. Manufacturing method
Soft jaws `[PRACTICE]`:
1. Buy standard soft jaw blanks — aluminium for light work, mild steel for general use
2. Bolt into the vise
3. **Clamp onto a spacer of the part's clamped dimension, at working pressure**
4. Machine the profile in the machine that will run the job, using the same work offset
5. Mark the jaws with the part number and the vise asset number
6. Record the spacer size and clamp pressure used

`[PRACTICE]` Step 4 is worth emphasising: **machining the jaws on the machine that will run the job, at
the offset that will be used**, means any small squareness error in the vise's mounting is machined into
the jaws and cancels. It is the same common-mode argument as L1.2.2.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Jaw profile to part | Blue or trial fit | Full contact, no rock |
| Jaw machining condition | Confirm spacer and pressure recorded | As specified |
| Part seating against the end stop | Feeler gauge | Contact |
| Repeatability | Load 10 parts, indicate a datum | ≤±0.030 mm |
| Jaw wear (in service) | First-off check | Within ±0.030 mm |
| Vise keyed to the table | Visual | Key fitted |
| Jaw obstruction of tool paths | Physical trial | Clear |
| Clamp pressure | Gauge | 12 MPa as specified |

`[PRACTICE]` The ten-part repeatability study is the measurement that validates the whole selection
decision, since the tolerance gate was decided on an assumed repeatability figure. **It should be done at
commissioning, not assumed.**

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Expecting a **plain vise to locate** | Position varies by ±0.5 mm or worse |
| 2 | Machining soft jaws **free rather than clamped** | Profile does not match the clamped geometry |
| 3 | No **end stop** with soft jaws | Position along the jaws uncontrolled |
| 4 | No **axial stop** in a chuck | Axial position uncontrolled |
| 5 | Doing the **economics before the tolerance gate** | Attractive answer that cannot make the part |
| 6 | Asking **"how many a year"** without **"for how long"** | Break-even cannot be evaluated |
| 7 | Clamping a **thin ring in a 3-jaw chuck** | Three-lobed distortion |
| 8 | Increasing **chuck pressure** to fix distortion | Makes it worse |
| 9 | Ignoring **jaw lift** | Part rises off the parallels |
| 10 | Building a **dedicated fixture inside the soft-jaw band** | Money and lead time wasted |
| 11 | **Soft jaws gripping non-datum faces** | Datum shift added to the stack |
| 12 | No **re-machining interval** for soft jaws | Budget allocation silently exceeded |
| 13 | **Vise not keyed** to the table | Refit invalidates the offset (L1.2.1) |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Part position varies part to part | Plain vise, no locating feature | Repeat-load and indicate | Soft jaws or a stop | Design rule R4 |
| Position drifts over weeks | Soft jaw wear | First-off check trend | Re-machine the jaws | Re-machining interval |
| Part not sitting on the parallels | Jaw lift | Feel for movement | Tap down; pull-down vise | Design rule R7 |
| Bore three-lobed when free | 3-jaw chuck distortion | Measure clamped vs free | Soft jaws, larger wrap, less force | Design rule R6 |
| Axial dimensions inconsistent | No axial stop in the chuck | Check for a stop | Fit one | Design rule R5 |
| Soft jaws do not match the part | Machined free, not clamped | Check the procedure | Re-machine clamped on a spacer | Design rule R3 |
| Position good but features out relative to datums | Jaws grip non-datum faces | Compare gripped vs datum faces | Regrip on datums, or budget the shift | GD&T review |
| Offsets wrong after the vise was moved | Vise not keyed | Probe the datum | Key the vise | L1.2.1 R1 |

### 23. Design checklist
- [ ] Has the **tolerance gate** been applied before any economics?
- [ ] Does the part **physically suit** the device — size, shape, access?
- [ ] Are **soft jaws** the right answer? Have they been considered at all?
- [ ] Will soft jaws be **machined in place at working pressure**?
- [ ] Is there an **end stop** for the third axis?
- [ ] For a chuck, is there an **axial stop**?
- [ ] For a thin or ring part, has **distortion** been considered — wrap angle, pressure, jaw count?
- [ ] Has **jaw lift** been addressed?
- [ ] Has the **break-even volume** been computed?
- [ ] Is the **programme life** known, not just the annual volume?
- [ ] Do the jaws grip on the **drawing datum features**, or has the datum shift been budgeted?
- [ ] Is there a **re-machining interval** for soft jaws?
- [ ] Is the **vise keyed** to the table?
- [ ] Has a **phased approach** — jaws now, fixture later — been considered?

### 24. Beginner exercise
**E2.1.3-B** — For each of a dedicated fixture, a plain vise, a vise with soft jaws and a 3-jaw chuck:
(a) State which of the three duties it performs well and which it does not.
(b) State the typical repeatability of each `[GUIDE]`.
(c) Explain why a plain vise cannot make repeatable parts without something added.
(d) State the one feature that must always be added when using a chuck for repeatable work, and why.
(e) Explain why soft jaws must be machined while clamped rather than free.

### 25. Intermediate exercise
**E2.1.3-I** — A part requires a positional tolerance of ±0.06 mm. Machine, tooling and thermal errors
consume 0.035 mm. Repeatability `[GUIDE]`: plain vise ±0.080 mm, soft jaws ±0.028 mm, dedicated fixture
±0.012 mm. Setup times `[EX-ASSUMED]`: plain vise 2.0 min, soft jaws 1.0 min, fixture 0.5 min. Costs
`[EX-ASSUMED]`: soft jaws ₹8,000, fixture ₹140,000. Machine rate ₹1,800/h. Volume 2,500 parts/yr.
(a) Apply the tolerance gate to all three options and state which survive.
(b) Calculate the percentage of the tolerance band consumed by each surviving option.
(c) Calculate the break-even volume for the fixture against soft jaws.
(d) Calculate the total cost of each surviving option in year one.
(e) Calculate the cumulative cost of each over four years.
(f) State your recommendation and the programme life at which it changes.
(g) State the non-cost factor that would most influence your recommendation, and why.

### 26. Advanced exercise
**E2.1.3-A** — A thin-walled steel ring, 180 mm outside diameter, 160 mm bore, 30 mm wide, requires the
bore finished to Ø160 H7 with a circularity of 0.015 mm and a face machined square to the bore within
0.02 mm. Four holding methods are proposed: a 3-jaw hard-jaw chuck; a 3-jaw chuck with soft jaws
machined to a 100° wrap; a 6-jaw chuck with soft jaws; and a dedicated fixture clamping axially against
the face. Measured distortion `[PROJ]`: 3-jaw hard 0.085 mm, 3-jaw soft 0.032 mm, 6-jaw soft 0.014 mm,
axial fixture 0.004 mm. Setup times `[EX-ASSUMED]`: 0.8, 1.0, 1.0, 1.4 min respectively. Costs
`[EX-ASSUMED]`: hard jaws owned, 3-jaw soft ₹7,000, 6-jaw chuck ₹95,000 plus ₹9,000 jaws, fixture
₹175,000. Volume 4,000/yr for 3 years. Rate ₹1,800/h. Other errors consume 0.006 mm of the circularity.
(i) Apply the circularity gate to all four methods.
(ii) Explain the mechanism producing the distortion in each chuck case, and why the numbers fall as they
do.
(iii) Explain why the axial fixture distorts so much less, referring to the direction of the clamping
force relative to the feature being controlled.
(iv) Calculate the total three-year cost of each surviving method.
(v) Identify the cheapest method that passes and state your recommendation.
(vi) The 6-jaw chuck is a general-purpose asset usable on other jobs; the fixture is not. Explain how
this changes the comparison and how you would present it.
(vii) The face must be square to the bore within 0.02 mm. Explain which methods can achieve this in one
setup and which cannot, and why.
(viii) Explain what "three lobes means three jaws" would tell you if it appeared during production with
the 6-jaw option.
(ix) Propose a measurement plan to validate the chosen method at commissioning.
(x) State the general principle this exercise illustrates about clamping direction and controlled
features.

### 27. Interview questions
1. *"What is the difference between a fixture and a vise?"*
   **Answer:** A dedicated fixture performs all three duties — it locates, supports and clamps, with
   locators designed for that specific part. A plain vise really only clamps, with its base providing
   some support; it has no locating duty at all, so the part's position comes from wherever the operator
   put it, or from a parallel and an end stop if those are fitted. That is why a vise on its own gives
   repeatability of maybe half a millimetre while a dedicated fixture gives ten or twenty microns. The
   middle option, which is often the right one, is soft jaws — unhardened jaws machined to the part's
   profile, which effectively puts a fixture's locators into the vise. They cost a few per cent of a
   dedicated fixture and are available the same day.
2. *"When would you use soft jaws rather than a dedicated fixture?"*
   **Answer:** For most low and medium volume work on parts that fit a vise — roughly twenty to a few
   thousand parts, though the band shifts with tolerance and cycle time. Soft jaws capture most of the
   available benefit: they locate properly, they support the part around its profile, and they take hours
   rather than weeks to produce. In the example we worked, going from a plain vise to soft jaws saved
   1.3 minutes a part for nine thousand rupees, breaking even at 231 parts; going from soft jaws to a
   full fixture saved only another half minute for a hundred and fifty-six thousand, needing 10,400 parts.
   So the cheap step captures most of the value. I would go to a dedicated fixture when the tolerance
   demands it, when the part does not fit a vise, when the jaws would obstruct the faces being machined,
   or when the volume and programme length clearly justify the extra half minute.

### 28. Expert questions
1. *"A customer has 6,000 parts a year and asks whether they need a dedicated fixture. What do you tell
   them?"*
   **Answer:** I would tell them I cannot answer that question yet, because annual volume on its own does
   not determine it — and then I would ask the three things that do.
   **First, what tolerance?** This is a gate rather than a trade-off, and it can eliminate options before
   any economics happen. In the case we worked, a plain vise consumed 257 per cent of the available
   budget and was gone before cost was considered — its zero tooling cost was irrelevant because it could
   not make the part. So I establish what the workholding is allowed to contribute, which means knowing
   what the machine, tooling and thermal effects have already taken, and then check each option against
   what remains.
   **Second, and this is the question that actually decides it: for how long?** Six thousand a year for
   one year and six thousand a year for three years give opposite answers. In the example the fixture's
   break-even was 10,400 parts, about twenty-one months. At one year the soft jaws were sixty-six
   thousand rupees cheaper; over three years the fixture saved a hundred and fourteen thousand. Same
   annual volume, opposite recommendation. **"How many a year" is the wrong question on its own, and it
   is the one customers always ask.**
   **Third, have we considered soft jaws at all?** Very often the honest answer is that the comparison
   being made is fixture versus plain vise, when the real contest is fixture versus soft jaws — and that
   is a much harder contest for the fixture to win, because soft jaws already do the locating properly.
   The marginal saving from jaws to fixture was only half a minute a part.
   Then there are the factors that do not appear in the arithmetic. **Lead time** — if they need parts in
   three weeks, a fixture is not available and the question is moot. **Whether the part will recur** — an
   annual repeat order changes a fixture from an expense into an asset. **Access** — if the vise jaws
   obstruct a face that must be machined, no amount of volume makes a vise workable. And **soft jaw
   wear**, which was the factor that would genuinely push me toward a fixture on a long programme: soft
   jaws are unhardened by definition, they consumed 90 per cent of the tolerance band when new, and that
   remaining ten per cent erodes.
   What I would usually propose is the **phased answer**, which is available more often than it is
   suggested: soft jaws now to get production running with no lead-time risk, and a dedicated fixture
   ordered in parallel if the programme is confirmed beyond about eighteen months. That defers the
   capital until the volume is real, and the soft jaws are not wasted — they become the backup when the
   fixture is being repaired.
2. *"Why does a thin ring come out of round from a three-jaw chuck, and why does clamping it harder make
   it worse?"*
   **Answer:** It is the clamping distortion mechanism from finishing operations, with a geometry that
   makes the signature unmistakable.
   A three-jaw chuck applies its gripping force at three points a hundred and twenty degrees apart. A
   thin ring is not stiff enough to resist that as a rigid body, so it deforms into a slightly
   three-cornered shape — pushed in at the jaws and bulging out between them. **You then bore it
   perfectly round in that deformed state.** When the chuck opens, the ring springs back to its natural
   shape, and the bore that was round while it was distorted becomes distorted now that the ring is
   round. The result is a bore with three lobes, at a hundred and twenty degrees, aligned with the jaws.
   **Three lobes means three jaws** — that alignment makes the diagnosis immediate and requires no
   further investigation.
   Clamping harder makes it worse for the reason that a clamp is the only element in a fixture that
   *applies* force rather than reacting it. More pressure means more deformation, which means more
   springback, which means more lobing. **The instinct that gripping tighter makes things more secure is
   correct for a rigid part and exactly wrong for a flexible one** — and the boring forces are tiny
   anyway, so the extra grip is buying nothing.
   The responses follow from the mechanism. **Increase the wrap angle** with soft jaws machined to the
   ring's diameter, so the same total force is spread over a large arc instead of three points — this is
   usually the biggest single improvement. **Reduce the pressure**, since fine boring needs very little.
   **Increase the number of jaws**: distortion scales roughly with force per jaw, so six jaws roughly
   halve the lobe amplitude for the same total grip. Or **change the clamping direction entirely** — grip
   from the bore with an expanding mandrel, or clamp axially against the face, which is the best answer
   because it applies the force parallel to the axis rather than radially, so it does not compete with
   the feature being controlled at all.
   That last point is the general principle worth extracting: **think about the direction of the clamping
   force relative to the feature you are trying to control.** A radial grip distorts a diameter. An axial
   clamp does not. Choosing a clamping direction orthogonal to the controlled feature is often more
   effective than any amount of optimising the force.

### 29. Summary
A dedicated fixture performs all three duties with elements designed for one part; a plain vise performs
essentially only clamping, with its base giving partial support and no locating duty at all, so position
comes from a parallel, an end stop or the operator; and a chuck centres radially while saying nothing
about axial position, which is why an axial stop is essential and its omission is the commonest chuck
error. Soft jaws are the intermediate option and the most under-used in workholding — a dedicated
fixture's locators machined into a general-purpose device, available in hours for a few per cent of a
fixture's cost — and they must be machined in place, clamped on a spacer at working pressure, because
the geometry that matters is the assembled loaded geometry. Selection is governed by treating tolerance
and physical fit as gates evaluated before any economics: in the worked example the plain vise consumed
257% of the available tolerance budget and was eliminated despite zero tooling cost. The economics then
turn on programme life rather than annual volume, since 6,000 parts a year gave opposite answers at one
year and three years against a break-even of 10,400 parts; and because soft jaws already locate properly,
the marginal saving from jaws to fixture was only half a minute per part, which is why the soft-jaw
volume band is so wide. Finally, both a vise and a chuck apply large concentrated forces, so thin and
ring-shaped parts distort — the three-lobed bore whose signature identifies its own cause — and the
answers are a larger wrap angle, lower pressure, more jaws, or best of all a clamping direction
orthogonal to the feature being controlled.

### 30. Key takeaways
- **A dedicated fixture locates. A vise clamps. A chuck centres.**
- **A plain vise has no locating duty at all.**
- **Soft jaws are the most under-used option in workholding** — a fixture's locators in a vise.
- **Machine soft jaws in place, on a spacer, at working pressure.**
- **Soft jaws still need an end stop** for the third axis.
- **A chuck needs an axial stop** — the commonest omission.
- **Tolerance and fit are gates; volume and lead time are trade-offs.** Evaluate in that order.
- **Programme life decides, not annual volume** — 6,000/yr gave opposite answers at 1 and 3 years.
- **The cheap step captures most of the value** — 1.3 min for ₹9,000, then 0.5 min for ₹156,000.
- **Three lobes means three jaws.**
- **Clamping a flexible part harder makes it worse** — the clamp is the only active element.
- **Choose a clamping direction orthogonal to the controlled feature** where you can.
- **Soft jaws wear** — allocate budget and set a re-machining interval.
- **The phased answer — jaws now, fixture later — is rarely proposed and often right.**

---

## LESSON L2.1.4 — FIXTURE VERSUS GAUGE VERSUS CHECKING FIXTURE

### 1. Lesson title
**L2.1.4 — One makes parts, one judges parts: two entirely different tolerance philosophies**

### 2. Learning objective
By the end of this lesson you will be able to explain why a device that judges parts requires a
fundamentally different tolerance philosophy from one that makes them, apply the gauge maker's tolerance
rule and calculate gauge tolerances from part tolerances, explain and quantify the gauge acceptance zone
and the false-accept and false-reject risks it creates, distinguish attribute gauges from variable
checking fixtures, and specify which device a given requirement actually needs.

### 3. Prerequisites
L2.1.1 (three duties), L1.3.4 (clamping distortion, free-state measurement), L1.2.4 (error budget),
L0.2.5 (tolerance stacking).

### 4. Why the topic matters
This is the most important boundary in Module 2.1, because crossing it wrongly does not produce an
inefficient device — **it produces a device that passes bad parts.**

```
   A FIXTURE THAT IS SLIGHTLY WRONG
     → makes parts slightly wrong
     → the error is IN the parts, visible, and
       eventually detected

   A GAUGE THAT IS SLIGHTLY WRONG
     → PASSES parts that are wrong
     → the error is INVISIBLE, and it is discovered
       by the CUSTOMER

   ┌──────────────────────────────────────────────┐
   │ A BAD FIXTURE MAKES SCRAP.                   │
   │ A BAD GAUGE SHIPS SCRAP.                     │
   └──────────────────────────────────────────────┘
```

The distinction goes deeper than function. **The two devices have opposite tolerance philosophies**, and
a designer who carries fixture habits into gauge design will get it exactly backwards:

```
   FIXTURE THINKING          GAUGE THINKING

   10-20 % of the part       5-10 % of the part
   tolerance                 tolerance — TIGHTER

   Errors REDUCE the         Errors are ABSORBED so
   tolerance available to    the gauge can NEVER pass
   the process               a bad part

   If in doubt, allow more   If in doubt, make it
   margin                    REJECT more — never
                             ACCEPT more

   ┌──────────────────────────────────────────────┐
   │ A FIXTURE'S ERRORS COST YIELD.               │
   │ A GAUGE'S ERRORS COST CREDIBILITY.           │
   │                                              │
   │ THE ASYMMETRY IS THE ENTIRE LESSON.          │
   └──────────────────────────────────────────────┘
```

### 5. Simple explanation

```
   A FIXTURE MAKES PARTS
     part in → machine cuts → part out
     Its job: put the part where the machine can
     cut it correctly.

  ─────────────────────────────────────────────────

   A GAUGE JUDGES PARTS
     part in → does it fit? → GOOD or BAD
     Its job: give a CORRECT VERDICT.

   It makes nothing and changes nothing. It only
   answers a question.
```

The three families of judging device:

```
   1. ATTRIBUTE GAUGE (GO / NO-GO)
        Answers YES or NO. No number.
        GO gauge    → must ENTER
        NO-GO gauge → must NOT enter
        ✓ Fast, no skill, no interpretation
        ✗ No idea HOW good or HOW bad — no data
          for process control

   2. CHECKING FIXTURE (VARIABLE)
        Holds the part, presents features to
        indicators or probes.
        ✓ Gives NUMBERS — trend data, SPC
        ✓ Many features at once
        ✗ Slower; needs interpretation

   3. CMM / MEASURING EQUIPMENT
        ✓ Most flexible and accurate
        ✗ Slowest and dearest per part
```

### 6. Engineering explanation

**THE GAUGE MAKER'S RULE**

`[PRACTICE]` The long-established convention:

```
   GAUGE TOLERANCE ≈ 5-10 % OF THE PART TOLERANCE
   FIXTURE TOLERANCE ≈ 10-20 % (the L0 guideline)

   → A GAUGE IS TOLERANCED TIGHTER THAN A FIXTURE
     FOR THE SAME PART.
```

`[STD]` Formal treatments exist — ISO 1938 for plain limit gauges, ASME B89.1.6 among others. **The
specific gauge tolerance grades and wear allowances must be taken from the applicable standard**; the
treatment here explains the engineering logic rather than substituting for it.

**WHERE THE GAUGE TOLERANCE GOES — THE CRITICAL DECISION**

This is the heart of the lesson and where fixture thinking fails.

```
   THE GAUGE HAS ITS OWN TOLERANCE. WHERE DOES IT GO?

   OPTION A — INSIDE THE PART ZONE
     LSL ├──┬──────────────────────┬──┤ USL
         │▓▓│   ACCEPTANCE ZONE    │▓▓│
         └──┴──────────────────────┴──┘
     ✓ The gauge can NEVER accept a bad part
     ✗ It WILL reject some good parts near the
       limits
     → FALSE REJECTS ONLY

   OPTION B — OUTSIDE THE PART ZONE
   ▓▓├────────────────────────────┤▓▓
     LSL                          USL
     ✓ Never rejects a good part
     ✗ CAN ACCEPT A BAD PART
     → FALSE ACCEPTS

   ┌──────────────────────────────────────────────┐
   │ OPTION A IS CORRECT FOR ACCEPTANCE GAUGING.  │
   │                                              │
   │ THE GAUGE'S UNCERTAINTY IS ABSORBED BY THE   │
   │ PART'S TOLERANCE, NOT ADDED TO IT.           │
   │                                              │
   │ A gauge must be BIASED TOWARD REJECTION —    │
   │ the opposite of the fixture instinct to      │
   │ preserve as much tolerance as possible.      │
   └──────────────────────────────────────────────┘
```

**WHY — THE COST ASYMMETRY**

| | FALSE REJECT | FALSE ACCEPT |
|---|---|---|
| **What happened** | Good part called bad | Bad part called good |
| **Cost** | One part plus an investigation | Ships, fails in the customer's assembly or in service |
| **Recovery** | Re-measure on a CMM | Containment, complaint, possibly a recall |
| **Order of magnitude** | Hundreds or thousands of rupees | Far more, plus reputation |

> **When the costs of two errors differ by orders of magnitude, the decision rule must be biased.** Where
> a false accept is safety-critical, the bias increases further.

**WEAR ALLOWANCE — ONLY WHERE WEAR IS PERMISSIVE**

```
   A GO PLUG GAUGE wears SMALLER
     → enters more easily
     → PASSES bores it should reject
     ✗ WEAR IS PERMISSIVE
     → WEAR ALLOWANCE NEEDED: make it on the large
       side, let it wear down to nominal

   A NO-GO PLUG GAUGE also wears SMALLER
     → enters more easily
     → REJECTS bores it should pass
     ✓ WEAR IS SEVERE — the SAFE direction
     → NO ALLOWANCE NEEDED; wear merely shortens
       its life

   ┌──────────────────────────────────────────────┐
   │ ALLOW FOR WEAR ONLY IN THE DIRECTION THAT    │
   │ MAKES THE GAUGE MORE PERMISSIVE.             │
   │ Confirm the convention against the           │
   │ applicable standard. [STD]                   │
   └──────────────────────────────────────────────┘
```

**THE THREE DUTIES, RE-EXAMINED FOR A CHECKING FIXTURE**

| Duty | In a machining fixture | In a checking fixture |
|---|---|---|
| **LOCATE** | On convenient, accessible features | **On the DRAWING DATUMS** — no substitution |
| **SUPPORT** | To resist cutting forces | To represent the **free state**, or the specified restrained condition |
| **CLAMP** | Hard enough to resist the process | **As little as possible** — force distorts what is being measured |

> **The locating row catches people.** A machining fixture may locate on whatever is convenient. **A
> checking fixture must locate on the drawing datums**, because the tolerances it verifies are defined
> relative to them. Locating elsewhere measures a different thing, and it will pass parts that do not
> conform.
>
> `[PRACTICE]` **Datum substitution in a checking fixture is one of the few genuinely indefensible errors
> in this field.** If the drawing datums are unusable, get the datum scheme changed — do not quietly
> measure from somewhere else.

**THE CLAMPING PARADOX**

```
   TO MEASURE A PART YOU MUST HOLD IT.
   HOLDING IT CHANGES IT.

   Unavoidable. The only questions are HOW MUCH and
   whether it is ACCOUNTED FOR.

   RESPONSES  [PRACTICE]
     ✓ Minimum force that holds against gravity and
       probing
     ✓ Clamp on the datum features, in line with the
       locators — short force path
     ✓ Fixed-stop or calibrated force, never operator
       feel
     ✓ Reproduce EXACTLY the specified condition
```

`[STD]` ASME Y14.5 provides the **free state modifier Ⓕ** and restrained-condition notes for this
situation. Full treatment at L21; the point here is that the drawing must say which condition applies and
**the fixture must reproduce that condition, not a convenient approximation.**

**WHEN TO USE WHICH DEVICE**

| Requirement | Device |
|---|---|
| Fast pass/fail on a simple dimension, high volume | **Attribute gauge** |
| Many features together, numbers needed | **Checking fixture** |
| Complex profile, low volume, first article | **CMM** |
| Verify a fixture is still correct | **Master piece** |
| In-process feedback for control | Checking fixture, variable data |

> `[PRACTICE]` **Attribute gauges give no process data.** A Go/No-Go tells you a part passed; it does not
> tell you it passed by two microns and the process is about to go out.

### 7. Terminology

| Term | Definition |
|---|---|
| **Gauge** | Device giving a pass/fail verdict on a feature |
| **Attribute gauge** | Yes/no result, no measured value |
| **Variable gauge** | Device giving a measured value |
| **Go gauge** | Must enter; checks the maximum material condition |
| **No-Go gauge** | Must not enter; checks the least material condition |
| **Checking fixture** | Locates a part and presents features for measurement |
| **Gauge maker's tolerance** | Tolerance applied to the gauge itself |
| **Wear allowance** | Allowance letting a gauge wear before going out of specification |
| **False accept** | A bad part passed |
| **False reject** | A good part failed |
| **Guard band** | Deliberate narrowing of the acceptance zone |
| **Master / setting piece** | Certified artefact used to verify a gauge |
| **Free state** | The part with no restraint applied |
| **Restrained condition** | A specified condition of restraint for measurement |

### 8. Principle

> **A BAD FIXTURE MAKES SCRAP; A BAD GAUGE SHIPS SCRAP.** The asymmetry drives everything else.
> **A GAUGE IS TOLERANCED TIGHTER THAN A FIXTURE FOR THE SAME PART** — 5–10% against 10–20% `[PRACTICE]`.
> **THE GAUGE'S UNCERTAINTY IS ABSORBED INTO THE PART'S TOLERANCE, NOT ADDED TO IT.** A gauge is
> deliberately biased toward rejection.
> **A CHECKING FIXTURE MUST LOCATE ON THE DRAWING DATUMS**, in precedence. Substitution passes
> non-conforming parts.
> **WEAR ALLOWANCE ONLY WHERE WEAR MAKES THE GAUGE MORE PERMISSIVE.**
> **TO MEASURE A PART YOU MUST HOLD IT, AND HOLDING IT CHANGES IT.**

### 9. Industrial application

**Specifying a checking fixture**

```
   CHECKING FIXTURE REQUIREMENTS  [PRACTICE]

   LOCATING
     ✓ ON THE DRAWING DATUMS — A, then B, then C,
       in the specified precedence
     ✓ Hardened, ground, relieved pads
     ✗ NEVER substitute a convenient feature

   CLAMPING
     ✓ Minimum force, consistent, repeatable
     ✓ On the datum features, in line with locators
     ✓ Fixed-stop or calibrated, not by feel

   MEASURING
     ✓ Indicators or probes at the checked features
     ✓ Set from a MASTER, not from a nominal
     ✓ Measurement direction matching the drawing

   DOCUMENTATION
     ✓ Gauge R&R before release
     ✓ Calibration interval
     ✓ Controlled master piece
     ✓ Free state vs restrained stated explicitly
```

**The master piece — why a checking fixture needs one**

```
   ✗ WITHOUT A MASTER
     Indicators set to nominal by calculation. If a
     locator wears or the fixture is knocked,
     NOTHING REVEALS IT. The fixture silently
     starts giving wrong answers.

   ✓ WITH A MASTER
     A certified artefact representing the nominal
     part. Placing it in the fixture must give known
     readings. ANY DEVIATION IS THE FIXTURE'S ERROR,
     NOT THE PART'S.

   [PRACTICE] Check at the start of each shift,
   after any incident, and at the calibration
   interval.

   THE MASTER IS WHAT MAKES THE FIXTURE
   TRUSTWORTHY. WITHOUT ONE, A CHECKING FIXTURE IS
   AN OPINION.
```

**When a customer asks for a "checking fixture" and needs something else**

| What they say | What they may need | The question that reveals it |
|---|---|---|
| "A checking fixture" | A Go/No-Go gauge | *"Do you need numbers, or just pass/fail?"* |
| "A checking fixture" | A CMM programme | *"How many features, and what volume?"* |
| "A gauge" | A checking fixture | *"Do you need to see the trend before it goes out?"* |
| "A gauge for the line" | In-process probing | *"Where does the decision actually get made?"* |

### 10. Design rules
- **R1** — Apply a **gauge tolerance of 5–10%** of the part tolerance; confirm against the applicable
  standard `[STD]`.
- **R2** — **Absorb the gauge tolerance inward**, never outward.
- **R3** — Apply a **wear allowance only where wear is permissive**, and specify a **wear limit**.
- **R4** — **Locate on the drawing datums, in precedence.** Never substitute.
- **R5** — Clamp with the **minimum consistent repeatable force**, by fixed stop or calibration.
- **R6** — Reproduce the **specified free-state or restrained condition** exactly.
- **R7** — Provide an **independently certified master piece** and a routine for using it.
- **R8** — Perform a **gauge R&R study** before release.
- **R9** — Specify a **calibration interval** for gauge and master.
- **R10** — Use **relieved pads** — a chip changes the verdict.
- **R11** — Where **process data** is needed, specify variable rather than attribute gauging.
- **R12** — Increase the **bias toward rejection** where a false accept is severe.
- **R13** — Represent **MMC datums with fixed-size simulators**, never gripping locators.

### 11. Rules of thumb
- **A bad fixture makes scrap; a bad gauge ships scrap.**
- **Gauge tolerance 5–10%; fixture 10–20%** `[PRACTICE]`.
- **Absorb inward.** Bias toward rejection.
- **A checking fixture locates on the drawing datums.** No substitution, ever.
- **Wear allowance only where wear is permissive** — GO yes, NO-GO no.
- **To measure a part you must hold it, and holding it changes it.**
- **A checking fixture without a master is an opinion.**
- **Attribute gauges give no warning** before the process goes out.
- **False accepts cost orders of magnitude more than false rejects.**
- **An MMC datum needs a fixed simulator** — gripping it rejects good parts.

### 12. Formulae

**Gauge tolerance**
```
T_gauge = k · T_part      k = 0.05 to 0.10  [PRACTICE]
Confirm against the applicable standard.    [STD]
```

**Acceptance limits, tolerance absorbed inward**
```
Accept_upper = USL − T_gauge
Accept_lower = LSL + T_gauge
Acceptance zone width = T_part − 2·T_gauge
Yield loss (uniform distribution) = 2·T_gauge/T_part
```

**Guard band including measurement uncertainty**
```
Accept_upper = USL − U      Accept_lower = LSL + U
[STD] ISO 14253-1 gives the formal treatment of
decision rules and uncertainty.
```

**Gauge R&R**
```
%R&R = (σ_R&R / σ_total) × 100
[GUIDE] Common guidance:  <10 % acceptable
   10-30 % may be acceptable depending on application
   >30 % not acceptable
Confirm against the applicable requirement.
```

**False accept probability**
```
ZERO by construction if the gauge tolerance is fully
absorbed inward — which is the reason for doing so.
```

| Variable | Meaning | Unit |
|---|---|---|
| T_part | Part tolerance (total band) | mm |
| T_gauge | Gauge tolerance | mm |
| U | Expanded measurement uncertainty | mm |
| USL / LSL | Upper / lower specification limit | mm |

### 13. Worked numerical example

**Problem:** A bore must be gauged. Determine the gauge tolerances and wear allowances, calculate the
acceptance zone and yield loss, evaluate the effect of placing the tolerance outward instead, and compare
an attribute gauge against a checking fixture.

```
GIVEN:
  PART FEATURE                                   [PROJ]
    Bore Ø40 H8
    Ø40.000 (LSL) to Ø40.039 (USL)
    T_part = 0.039 mm

  GAUGE                                      [PRACTICE]
    Gauge tolerance   = 8 % of T_part
    Wear allowance    = 5 % of T_part (GO only)

  PROCESS                                        [PROJ]
    6σ = 0.026 mm, centred at Ø40.020
    Volume 12,000 parts/yr

  ALTERNATIVES                              [EX-ASSUMED]
    Plug gauge set          = ₹6,500
    Checking fixture+master = ₹78,000
    Check time, plug        = 0.25 min/part
    Check time, fixture     = 0.65 min/part
    Rate ₹1,800/h · scrapped part ₹1,900

REQUIRED:
  (a) Gauge tolerance and wear allowance
  (b) GO gauge limits
  (c) NO-GO gauge limits
  (d) Effective acceptance zone
  (e) Yield loss, both distribution models
  (f) Consequence of placing the tolerance OUTWARD
  (g) Attribute gauge vs checking fixture
  (h) Engineering conclusion

ASSUMPTION:
  1. The 8 % gauge tolerance and 5 % wear allowance
     are PRACTICE values demonstrating the method.
     ACTUAL VALUES MUST COME FROM THE APPLICABLE
     STANDARD (e.g. ISO 1938), which specifies gauge
     tolerance grades related to feature size and
     tolerance grade rather than a flat percentage.
     [STD]
  2. Wear allowance on the GO gauge only, because GO
     wear is permissive and NO-GO wear is severe.
     [PRACTICE]
  3. Yield loss computed under BOTH a uniform and a
     normal distribution. The uniform case OVERSTATES
     loss for a capable process and is included to
     show the size of that error. [PRACTICE]
  4. Measurement uncertainty of the gauging act
     itself is not separately modelled; it is one
     reason for absorbing the tolerance inward.
     [PRACTICE]
  5. Costs and times are ILLUSTRATIVE ASSUMED VALUES.
     [EX-ASSUMED]

FORMULA:
  T_gauge = k·T_part
  Acceptance width = T_part − 2·T_gauge
  Yield loss (uniform) = 2·T_gauge/T_part

UNIT CONVERSION:
  All in mm.

SUBSTITUTION AND CALCULATION:

  (a) GAUGE TOLERANCE AND WEAR ALLOWANCE

      T_gauge = 0.08 × 0.039
              = 0.00312 mm ≈ 0.0031 mm

      Wear allowance = 0.05 × 0.039
                     = 0.00195 mm ≈ 0.0020 mm

  (b) GO GAUGE

      The GO plug checks the MAXIMUM MATERIAL
      CONDITION — the SMALLEST permitted bore,
      Ø40.000.

      Tolerance absorbed INWARD, so the gauge is
      never smaller than nominal and can never
      enter an undersize bore:

        GO limits: Ø40.0000 to Ø40.0031
                   (+0.0031 / −0.0000)

      WEAR: a GO plug wears smaller, which is
      permissive. It is therefore made on the large
      side and allowed to wear down:

        Manufacturing target Ø40.0020-Ø40.0031
        Withdraw at          Ø40.0000
        USABLE WEAR          0.0020-0.0031 mm

  (c) NO-GO GAUGE

      The NO-GO plug checks the LEAST MATERIAL
      CONDITION — the LARGEST permitted bore,
      Ø40.039.

      Tolerance absorbed INWARD so it can never fail
      to detect an oversize bore:

        NO-GO limits: Ø40.0359 to Ø40.0390
                      (+0.0000 / −0.0031)

      NO WEAR ALLOWANCE: a NO-GO plug wearing smaller
      enters more easily and therefore rejects more —
      the SAFE direction. Wear only shortens its life.

  (d) EFFECTIVE ACCEPTANCE ZONE

      Worst case, both gauges at the limits that
      narrow acceptance:

        Lower accept = 40.000 + 0.0031 = Ø40.0031
        Upper accept = 40.039 − 0.0031 = Ø40.0359
        Width        = 0.0328 mm

      Retained: 0.0328/0.039 = 84.1 %
      Consumed: 2 × 0.0031 = 0.0062 = 15.9 %

  (e) YIELD LOSS — TWO MODELS

      UNIFORM distribution:
        Loss = 0.0062/0.039 = 15.9 %
        12,000 × 0.159 = 1,908 parts/yr
        Value = 1,908 × 1,900 = ₹3,625,200

        → ABSURDLY HIGH, and an ARTEFACT of the
          uniform assumption.

      NORMAL distribution, the realistic case:
        σ = 0.026/6 = 0.0043333 mm
        Centre Ø40.020

        To the upper accept limit:
          (40.0359 − 40.020)/0.0043333
          = 0.0159/0.0043333 = 3.669 σ
        To the lower accept limit:
          (40.020 − 40.0031)/0.0043333
          = 0.0169/0.0043333 = 3.900 σ

        Upper tail beyond 3.669σ ≈ 0.0122 %
        Lower tail beyond 3.900σ ≈ 0.0048 %
        TOTAL ≈ 0.0170 %

        12,000 × 0.000170 = 2.04 parts/yr
        Value ≈ ₹3,876/yr

      ┌────────────────────────────────────────────┐
      │ 1,908 PARTS versus 2 PARTS.                │
      │ A FACTOR OF ~935.                          │
      │                                            │
      │ FOR A CENTRED, CAPABLE PROCESS THE COST OF │
      │ ABSORBING THE TOLERANCE INWARD IS          │
      │ ESSENTIALLY NIL.                           │
      │                                            │
      │ THE CORRECT PRACTICE IS ALSO THE CHEAP ONE │
      │ — PROVIDED THE PROCESS IS CAPABLE.         │
      └────────────────────────────────────────────┘

  (f) IF THE TOLERANCE WERE PLACED OUTWARD

        Lower accept = 40.000 − 0.0031 = Ø39.9969
        Upper accept = 40.039 + 0.0031 = Ø40.0421

      → Bores from Ø40.0390 to Ø40.0421 (and from
        Ø39.9969 to Ø40.0000) ARE NON-CONFORMING AND
        WOULD BE PASSED.

      With the process centred:
        (40.0421 − 40.020)/0.0043333 = 5.100 σ
        → immediate risk small. LOOKS SAFE.

      NOW LET THE PROCESS DRIFT 0.010 mm — well
      within ordinary variation — to Ø40.030:
        To USL 40.039:    0.009/0.0043333 = 2.077 σ
        To accept 40.0421: 0.0121/0.0043333 = 2.793 σ

        Beyond USL (truly bad)      ≈ 1.890 %
        Beyond the accept limit     ≈ 0.261 %
        BAD BUT ACCEPTED ≈ 1.890 − 0.261 = 1.629 %

        12,000 × 0.01629 = 195.5
        ≈ 196 NON-CONFORMING PARTS SHIPPED PER YEAR

      ✗ CATASTROPHIC — and the drift that caused it
        was modest and entirely ordinary.

  (g) ATTRIBUTE GAUGE vs CHECKING FIXTURE

      PLUG GAUGE:
        tooling ₹6,500
        time    12,000 × (0.25/60) × 1,800
                = 12,000 × 7.50 = ₹90,000
        TOTAL   ₹96,500

      CHECKING FIXTURE:
        tooling ₹78,000
        time    12,000 × (0.65/60) × 1,800
                = 12,000 × 19.50 = ₹234,000
        TOTAL   ₹312,000

      Plug gauge cheaper by ₹215,500 (3.23×)

      BUT: the plug gauge gives PASS/FAIL only. The
      checking fixture gives a NUMBER for every part
      — and the 0.010 mm drift in (f) would have
      been VISIBLE WEEKS BEFORE any part failed.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Gauge tolerance          │ 0.0031 mm         │
  │     Wear allowance (GO only) │ 0.0020 mm         │
  │ (b) GO gauge                 │ Ø40.0000/40.0031  │
  │     withdraw at              │ Ø40.0000          │
  │ (c) NO-GO gauge              │ Ø40.0359/40.0390  │
  │     wear allowance           │ NONE (safe dir.)  │
  │ (d) Acceptance zone          │ 0.0328 mm (84.1 %)│
  │     consumed                 │ 15.9 %            │
  │ (e) False rejects, uniform   │ 1,908 parts/yr    │
  │     False rejects, normal    │ 2 parts/yr        │
  │     ratio                    │ ~935 ×            │
  │ (f) Outward + 0.010 drift    │ 196 BAD PARTS     │
  │                              │ SHIPPED/yr        │
  │ (g) Plug gauge, year 1       │ ₹96,500           │
  │     Checking fixture, year 1 │ ₹312,000 (3.23×)  │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The equivalent concept
  is the GUARD BAND — 0.0031 mm absorbed at each
  limit. Note this is a DETERMINISTIC guarantee, not
  a probabilistic margin: a gauge toleranced inward
  cannot accept a bad part, whatever the process
  distribution does.

PASS/FAIL:
  ✓ PASS — inward-toleranced gauges: zero false
    accepts by construction, ~2 false rejects/yr.
  ✗ FAIL — outward-toleranced gauges: 196
    non-conforming parts shipped per year after an
    ordinary process drift.
  ✓ Attribute gauge adequate for the verdict.
  ⚠ Attribute gauge gives no drift warning.

ENGINEERING CONCLUSION:
  1. ABSORBING THE TOLERANCE INWARD COSTS ALMOST
     NOTHING AND GUARANTEES CORRECTNESS.
     The uniform model suggested 1,908 falsely
     rejected parts a year, which would be a serious
     cost. The realistic figure for this centred,
     capable process is TWO — a factor of about 935.
     THE COST OF GAUGING CORRECTLY IS BORNE ALMOST
     ENTIRELY BY PARTS NEAR THE TOLERANCE LIMITS,
     AND A CAPABLE PROCESS HARDLY MAKES ANY.
     So the standard objection — "absorbing inward
     loses us yield" — is true in principle and
     negligible in practice. Where it is NOT
     negligible, the process is the problem and the
     gauge is merely reporting it.

  2. THE OUTWARD CASE FAILS IN A DELAYED AND
     THEREFORE DANGEROUS WAY.
     With the process centred, the outward-toleranced
     gauge looked almost safe at 5.1σ. It was only
     after a 0.010 mm drift — well within ordinary
     variation — that 196 non-conforming parts a year
     began to ship.
     THIS IS THE CHARACTERISTIC FAILURE OF A BAD
     GAUGE: IT WORKS UNTIL SOMETHING ELSE CHANGES,
     AND THEN IT FAILS SILENTLY. Nobody sees it,
     because the gauge is passing everything and the
     gauge is what everyone trusts. THE CUSTOMER
     FINDS IT.

  3. THE WEAR ALLOWANCE ASYMMETRY IS NOT ARBITRARY.
     GO gets 0.0020 mm and NO-GO gets none, for one
     reason: GO wear is permissive and NO-GO wear is
     severe. A worn GO plug enters bores it should
     reject; a worn NO-GO plug enters bores it should
     accept, which merely causes false rejects.
     ALLOW FOR WEAR ONLY IN THE DIRECTION THAT MAKES
     THE GAUGE MORE PERMISSIVE.

  4. THE ATTRIBUTE GAUGE IS CHEAPER AND BLIND, AND
     THAT TRADE MUST BE CONSCIOUS.
     ₹96,500 against ₹312,000 — 3.23 times cheaper
     and entirely adequate for a correct verdict.
     What it cannot do is warn anyone that the
     process has drifted and is heading for trouble.
     THE CHOICE IS NOT "WHICH IS BETTER" BUT "DO WE
     NEED TO SEE IT COMING?"

  5. WHAT I WOULD RECOMMEND.
     Plug gauges for 100 % checking, toleranced
     inward with the wear allowance on the GO only,
     PLUS periodic variable measurement on a sample
     to provide the drift visibility the attribute
     gauge cannot. That combination costs little more
     than the gauge alone and closes exactly the gap
     that part (f) exposed.

SENSITIVITY NOTE:
  Ranked by influence:
    1. DIRECTION OF THE GAUGE TOLERANCE — not a
       gradient but a switch, between zero false
       accepts and 196 shipped bad parts a year.
       THE SINGLE MOST CONSEQUENTIAL DECISION IN
       GAUGE DESIGN.
    2. PROCESS CENTRING AND CAPABILITY — decides
       whether inward absorption costs 2 parts a year
       or 1,908, and how fast an outward gauge
       becomes dangerous.
    3. GAUGE TOLERANCE MAGNITUDE — 8 % consumed
       15.9 % of the band. Halving it halves that,
       at higher gauge cost.
    4. WEAR LIMIT ENFORCEMENT — affects gauge life
       rather than correctness, PROVIDED it is
       enforced. If it is not, it becomes a
       correctness issue.
    5. ATTRIBUTE vs VARIABLE — no effect on the
       verdict's correctness; decisive for early
       warning.
```

### 14. Engineering assumptions
- The 8% gauge tolerance and 5% wear allowance are practice values demonstrating the method; **actual
  values must come from the applicable standard** `[STD]`, which specifies gauge tolerance grades related
  to feature size and tolerance grade rather than a flat percentage.
- Wear allowance applied to the GO gauge only, because GO wear is permissive `[PRACTICE]`.
- Yield loss computed under both uniform and normal distributions; the uniform case overstates loss for a
  capable process and is included to show the size of that error `[PRACTICE]`.
- Measurement uncertainty of the gauging act itself is not separately modelled; it is one reason for
  absorbing the tolerance inward `[PRACTICE]`.
- Costs and times are illustrative assumed values `[EX-ASSUMED]`.

### 15. Diagram

```
     FIXTURE vs GAUGE — MAKE versus JUDGE
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE ASYMMETRY THAT DRIVES EVERYTHING

   A BAD FIXTURE            A BAD GAUGE
   → makes scrap            → SHIPS scrap
   → error is IN the part   → error is INVISIBLE
   → found internally       → found by the CUSTOMER

   ┌──────────────────────────────────────────────┐
   │ A FIXTURE'S ERRORS COST YIELD.               │
   │ A GAUGE'S ERRORS COST CREDIBILITY.           │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHERE THE GAUGE TOLERANCE GOES

   ✓ INWARD (correct)
     LSL ├──┬──────────────────────┬──┤ USL
         │▓▓│   ACCEPTANCE ZONE    │▓▓│
         └──┴──────────────────────┴──┘
     ZERO false accepts — BY CONSTRUCTION

   ✗ OUTWARD (wrong)
   ▓▓├────────────────────────────┤▓▓
     LSL                          USL
     ACCEPTS BAD PARTS

   ┌──────────────────────────────────────────────┐
   │ THE GAUGE'S UNCERTAINTY IS ABSORBED INTO THE │
   │ PART'S TOLERANCE, NOT ADDED TO IT.           │
   │                                              │
   │ A GAUGE IS BIASED TOWARD REJECTION — the     │
   │ OPPOSITE of the fixture instinct.            │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHY CORRECT IS ALSO CHEAP

   FALSE REJECTS, tolerance absorbed inward:
     uniform model  ████████████████ 1,908 parts/yr
     normal model   ▏2 parts/yr

     A FACTOR OF ~935.

   ┌──────────────────────────────────────────────┐
   │ THE COST IS BORNE ALMOST ENTIRELY BY PARTS   │
   │ NEAR THE LIMITS — AND A CAPABLE PROCESS      │
   │ HARDLY MAKES ANY.                            │
   │                                              │
   │ "Absorbing inward loses yield" is true in    │
   │ principle and negligible in practice.        │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  HOW THE OUTWARD GAUGE ACTUALLY FAILS

   CENTRED                    AFTER 0.010 mm DRIFT
   ├────────╫────────┤        ├─────────────╫───┤
     looks safe (5.1σ)          196 BAD PARTS
                                SHIPPED PER YEAR

   ┌──────────────────────────────────────────────┐
   │ IT WORKS UNTIL SOMETHING ELSE CHANGES, AND   │
   │ THEN IT FAILS SILENTLY.                      │
   │                                              │
   │ Nobody sees it, because the gauge is passing │
   │ everything and the gauge is what everybody   │
   │ trusts. THE CUSTOMER FINDS IT.               │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE WEAR ALLOWANCE ASYMMETRY

   GO PLUG wears SMALLER    NO-GO PLUG wears SMALLER
   → enters more easily     → enters more easily
   → PASSES bad parts       → REJECTS good parts
   ✗ PERMISSIVE             ✓ SEVERE
   → ALLOWANCE NEEDED       → NO ALLOWANCE NEEDED
     0.0020 mm                (just shorter life)

   ALLOW FOR WEAR ONLY IN THE PERMISSIVE DIRECTION.

  ──────────────────────────────────────────────────────────

  THE THREE DUTIES — MACHINING vs CHECKING

              MACHINING           CHECKING
   LOCATE     convenient          ON THE DRAWING
              features            DATUMS, in
                                  PRECEDENCE
   SUPPORT    resist cutting      represent the FREE
              forces              STATE or specified
                                  restraint
   CLAMP      hard enough for     AS LITTLE AS
              the process         POSSIBLE

   ┌──────────────────────────────────────────────┐
   │ DATUM SUBSTITUTION IN A CHECKING FIXTURE IS  │
   │ ONE OF THE FEW GENUINELY INDEFENSIBLE ERRORS │
   │ IN THIS FIELD.                               │
   │                                              │
   │ If the drawing datums are unusable, CHANGE   │
   │ THE DRAWING — do not quietly measure from    │
   │ somewhere else.                              │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE CLAMPING PARADOX

     TO MEASURE A PART YOU MUST HOLD IT.
     HOLDING IT CHANGES IT.

     ▼ clamp          Unavoidable. The only questions
   ▓▓▓▓▓▓▓            are HOW MUCH and whether it is
   ●══════●           ACCOUNTED FOR.

   ✓ minimum force  ✓ on the datums  ✓ repeatable
   ✓ reproduce the SPECIFIED condition (Ⓕ or
     restrained) — not an approximation

  ──────────────────────────────────────────────────────────

  ATTRIBUTE vs VARIABLE — WHAT YOU GIVE UP

   PLUG GAUGE ₹96,500       CHECKING FIXTURE ₹312,000
   PASS ──────────►         40.018 40.021 40.024 ...
   PASS ──────────►              drift VISIBLE weeks
   PASS ──────────►              before any part
   FAIL ◄ too late               fails

   ┌──────────────────────────────────────────────┐
   │ THE CHOICE IS NOT "WHICH IS BETTER" BUT      │
   │ "DO WE NEED TO SEE IT COMING?"               │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
CHECKING FIXTURE CF-6400
STANDARD: ASME Y14.5-2018
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: THIS IS A CHECKING FIXTURE. IT LOCATES ON THE
        COMPONENT DRAWING DATUMS A, B AND C IN THAT
        PRECEDENCE. LOCATORS MUST NOT BE SUBSTITUTED
        FOR ANY OTHER FEATURE UNDER ANY CIRCUMSTANCES.

NOTE 2: CLAMP FORCE 250 N ±10 % PER CLAMP, SET BY
        FIXED STOP. DO NOT INCREASE. THIS FIXTURE
        MEASURES THE COMPONENT — ANY ADDITIONAL FORCE
        DISTORTS WHAT IS BEING MEASURED.

NOTE 3: THE COMPONENT IS SPECIFIED IN THE FREE STATE.
        SUPPORTS ITEMS 9-12 CONTACT WITHOUT
        RESTRAINING. VERIFY WITH A 0.02 mm FEELER
        THAT NO SUPPORT IS LOADED BEFORE READING.

NOTE 4: INDICATORS TO BE ZEROED ON MASTER MP-6400 AT
        THE START OF EVERY SHIFT AND AFTER ANY IMPACT.
        A DEVIATION EXCEEDING 0.010 mm ON THE MASTER
        INDICATES A FIXTURE FAULT — QUARANTINE ALL
        PARTS CHECKED SINCE THE LAST VERIFIED MASTER
        CHECK.

NOTE 5: GAUGE R&R STUDY PER GR-6400 TO BE COMPLETED
        AND ACCEPTED BEFORE PRODUCTION RELEASE.
        CALIBRATION INTERVAL 6 MONTHS.
```

Note 4 contains the instruction that matters most: **what to do when the master check fails**. A checking
fixture that has drifted has been giving wrong verdicts since it last passed, and the quarantine
instruction is what limits the damage.

### 17. CAD workflow
1. Model the part in its **drawing datum reference frame** — A, B, C in precedence order
2. Place locators to **realise those datums**, and nothing else
3. Verify the locator count satisfies each datum — primary planar needs three points, secondary two,
   tertiary one
4. Place **clamps on the datum features**, in line with the locators
5. Place **supports** that contact without restraining, where free state is specified
6. Model **indicator or probe positions** at each checked feature, in the direction the drawing controls
7. Model the **master piece** as a separate item
8. Verify **loading access** — the part must go in and out without forcing

`[PRACTICE]` Step 3 is what distinguishes a checking fixture from a machining fixture in CAD. A machining
fixture's locators are placed for stability and access; **a checking fixture's locators are placed to
reproduce the datum reference frame**, and those objectives occasionally conflict.

### 18. GD&T application

```
STANDARD: ASME Y14.5-2018

  A CHECKING FIXTURE IS A PHYSICAL REALISATION OF
  THE DATUM REFERENCE FRAME. That is its entire
  purpose, and it constrains the design absolutely.

  If the part is toleranced:
  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.20 Ⓜ │ A │ B Ⓜ │ C │      │
  └──────────────────────────────────┘

  THEN THE FIXTURE MUST:
    - locate on A first (primary), fully
    - then B, which is at MMC, so the locator is a
      FIXED-SIZE SIMULATOR at the virtual condition
    - then C (tertiary)
    - in THAT precedence, not a convenient order

  ┌────────────────────────────────────────────┐
  │ THE Ⓜ ON DATUM B IS SIGNIFICANT AND IS     │
  │ FREQUENTLY MISSED.                         │
  │                                            │
  │ A datum feature at MMC means the part is   │
  │ PERMITTED to shift within the clearance    │
  │ between it and a fixed simulator — DATUM   │
  │ SHIFT.                                     │
  │                                            │
  │ A fixture that GRIPS datum B removes that  │
  │ permitted shift and WILL REJECT PARTS THAT │
  │ CONFORM.                                   │
  │                                            │
  │ → Ⓜ on a datum means a FIXED simulator,    │
  │   never an adjustable or gripping one.     │
  │   Full treatment at L21-L22.               │
  └────────────────────────────────────────────┘
```

That MMC point is the single most common GD&T error in checking fixture design. It produces **false
rejects** — the safe direction, but expensive and confusing.

### 19. Manufacturing method
A checking fixture is built to tighter tolerances than a machining fixture, and stability matters more
than strength:
1. **Stress relieve thoroughly** — a fixture that moves over months gives wrong answers silently
2. Machine soft, harden locators to 58–62 HRC, grind in position
3. **Relieve all locating pads** — a chip changes the verdict
4. Fit indicator or probe mounts, dowelled
5. Manufacture and **independently certify the master piece**
6. Set indicators from the master
7. **Gauge R&R study** before release

`[PRACTICE]` The master must be certified by a route **independent of the fixture** — typically a CMM
with traceable calibration. A master checked on the fixture it is meant to verify proves nothing.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Locator positions | CMM from fixture datums | ±0.010 mm |
| Locators realise the drawing datums | Design review against the drawing | Correct features and precedence |
| MMC datum simulators | CMM | Fixed size at virtual condition |
| Clamp force | Load cell | 250 N ±10% |
| Supports not restraining | 0.02 mm feeler | Free |
| Master certification | Independent traceable CMM | Certified |
| Indicator repeatability | Repeat readings on the master | ≤0.005 mm |
| Gauge R&R | Full study | Per requirement `[GUIDE]` |
| Calibration | Per interval | 6 months |

`[PRACTICE]` **The gauge R&R study is the acceptance test for the whole device.** A checking fixture
without one is unproven however carefully it was made — and a poor result usually points at clamping
variation or locator condition rather than at the indicators.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Gauge tolerance placed outward** | Accepts non-conforming parts |
| 2 | **Datum substitution** in a checking fixture | Measures a different thing; passes bad parts |
| 3 | Wrong **datum precedence** | Different constraint order, different answer |
| 4 | **Gripping an MMC datum** | Removes permitted datum shift; rejects good parts |
| 5 | **Excessive clamp force** | Distorts what is being measured |
| 6 | Clamp force set **by feel** | R&R failure |
| 7 | **No master piece** | The fixture is an opinion |
| 8 | Master certified **on the fixture it verifies** | Proves nothing |
| 9 | Wear allowance on a **NO-GO** | Misunderstands the direction |
| 10 | **No wear limit** enforced on a GO gauge | Becomes permissive with use |
| 11 | Expecting **process data from an attribute gauge** | No warning before failure |
| 12 | Not specifying **free state vs restrained** | Ambiguous, unrepeatable results |
| 13 | **No gauge R&R** before release | Unproven device in production |
| 14 | No **quarantine instruction** on master-check failure | Wrong verdicts already shipped |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Customer rejects parts the gauge passed | Tolerance outward, or gauge worn | Verify against a master | Correct the gauge; contain shipped parts | Absorb inward |
| Parts fail the fixture, pass on the CMM | Datum substitution, or MMC datum gripped | Compare fixture datums with the drawing | Correct the locating scheme | Design rules R4, R13 |
| Readings vary between operators | Clamp force by feel | R&R by operator | Fixed-stop clamping | Design rule R5 |
| Readings drift over a shift | Thermal, or locator wear | Master check hourly | Investigate | Master routine |
| Master check fails | Fixture damaged or worn | Inspect locators | Repair and **quarantine parts** | Drawing note |
| Good parts rejected near a limit | Expected — tolerance absorbed inward | Re-measure on a CMM | Accept if in specification | Expected behaviour |
| GO gauge passing oversize bores | Worn past its limit | Measure the gauge | Withdraw and replace | Enforce the wear limit |
| Part measures differently clamped and free | Clamping distortion | Measure both states | Reduce force; relocate clamps | L1.3.4 |
| Poor R&R with good indicators | Clamping or locating variation | Study by factor | Address the dominant factor | Design rules R4, R5 |

### 23. Design checklist
- [ ] Is the gauge tolerance **absorbed inward**, never outward?
- [ ] Is it taken from the **applicable standard** `[STD]`?
- [ ] Is a **wear allowance** applied only where wear is permissive?
- [ ] Is a **wear limit** specified and enforceable?
- [ ] Does the fixture locate on the **drawing datums**, in the correct **precedence**?
- [ ] Are **MMC datums** fixed-size simulators, not gripping locators?
- [ ] Is clamp force **minimum, repeatable and fixed-stop**?
- [ ] Is the **free state or restrained condition** specified and reproduced?
- [ ] Is there an **independently certified master piece**?
- [ ] Is there a **master-check routine with a quarantine instruction**?
- [ ] Has a **gauge R&R study** been planned before release?
- [ ] Is a **calibration interval** specified?
- [ ] Are the pads **relieved** and chip-protected?
- [ ] Does the application need **variable data**, or is attribute gauging sufficient?

### 24. Beginner exercise
**E2.1.4-B** — A shaft is specified Ø25.000/Ø25.033.
(a) State the total tolerance band.
(b) Using a gauge tolerance of 8%, calculate the gauge tolerance value.
(c) State the nominal size of the GO ring gauge and the NO-GO ring gauge, and say which limit each
checks.
(d) Explain in one sentence why the gauge tolerance is absorbed into the part zone rather than outside it.
(e) State which of the two gauges needs a wear allowance and why.

### 25. Intermediate exercise
**E2.1.4-I** — A bore is specified Ø60.000/Ø60.046. Gauge tolerance 7% of the part tolerance; wear
allowance 4%. The process has 6σ = 0.030 mm and is centred at Ø60.024. Volume 8,000 parts/yr; scrapped
part value ₹2,200 `[EX-ASSUMED]`.
(a) Calculate the gauge tolerance and wear allowance.
(b) State the GO and NO-GO gauge limits, with the wear allowance applied correctly.
(c) Calculate the effective acceptance zone width and the percentage of the band retained.
(d) Calculate the false reject rate assuming a uniform distribution, and its annual cost.
(e) Calculate the false reject rate under the stated normal distribution, and its annual cost.
(f) State the ratio between the two estimates and explain which is realistic and why.
(g) The gauge tolerance is mistakenly applied outward. State the range of non-conforming bore sizes that
would be accepted.
(h) The process then drifts 0.008 mm toward the upper limit. Estimate the percentage of parts that would
be non-conforming but accepted.

### 26. Advanced exercise
**E2.1.4-A** — A sheet-metal bracket carries a profile tolerance of 0.8 mm on a surface, relative to
datums A (a seating plane on three pads), B (a Ø10 hole at MMC) and C (a slot at MMC). The part is
flexible: in the free state its profile varies by up to 1.4 mm, but the drawing specifies a restrained
condition — clamped at four defined points at a stated force. Volume 40,000 parts/yr. A checking fixture
with four indicators is proposed.
(i) Explain why free-state measurement gives 1.4 mm while the drawing tolerance is 0.8 mm, and what the
restrained-condition note is doing.
(ii) Specify the locating scheme, stating exactly which features realise A, B and C and in what
precedence.
(iii) Explain what the Ⓜ on datums B and C requires of the fixture's locators, and what happens if those
locators grip the part instead.
(iv) The Ø10 hole is toleranced Ø10.0/Ø10.2 with position Ø0.3 at MMC. Calculate the virtual condition of
the hole, the simulator pin size, and the maximum datum shift available at the hole's LMC size.
(v) Specify the clamping — where, how much, how controlled — and justify each choice.
(vi) Explain what could go wrong if the fixture's clamping points differ from the drawing's specified
restraint points.
(vii) Specify the master piece and how it would be certified.
(viii) Propose the gauge R&R approach, stating the dominant variation source you would expect and why.
(ix) The customer asks whether an attribute gauge would be cheaper. Explain what would be lost, with
reference to the volume.
(x) Write the five drawing notes for this checking fixture.

### 27. Interview questions
1. *"What is the difference between a fixture and a gauge?"*
   **Answer:** A fixture makes parts and a gauge judges them, and that leads to opposite tolerance
   philosophies. A fixture is typically toleranced at ten to twenty per cent of the part tolerance, and
   its errors reduce the tolerance available to the process, so they cost yield. A gauge is toleranced
   tighter, typically five to ten per cent, and crucially its tolerance is absorbed *into* the part's
   tolerance zone rather than added outside it, so the gauge can never accept a part that is actually out
   of specification. That makes a gauge deliberately biased toward rejection, which is the opposite of
   the fixture instinct to preserve as much tolerance as possible. The reason is the cost asymmetry: a
   bad fixture makes scrap, which you find internally, whereas a bad gauge ships scrap, which your
   customer finds.
2. *"Why must a checking fixture locate on the drawing datums?"*
   **Answer:** Because the drawing's tolerances are defined relative to those datums, so a fixture that
   locates elsewhere is measuring a different thing. If the drawing controls a feature's position
   relative to datums A, B and C, and the fixture locates on some other convenient faces, what it
   measures is position relative to those other faces — which is not what was specified and can differ
   substantially. The consequence is that it passes parts that do not conform. A checking fixture is
   essentially a physical realisation of the datum reference frame; that is its whole purpose. If the
   drawing datums turn out to be unusable in practice, the right answer is to get the datum scheme
   changed on the drawing, not to quietly measure from somewhere else.

### 28. Expert questions
1. *"Explain the reasoning behind absorbing the gauge tolerance inward, and the objection to it."*
   **Answer:** The reasoning starts from the fact that **a gauge has its own uncertainty and that
   uncertainty has to go somewhere.** It cannot be wished away — the gauge is a manufactured object with
   a tolerance, it wears, and using it has its own variability. The only question is which way the
   resulting doubt is resolved.
   Put the gauge's tolerance *outside* the specification limits and it will never reject a conforming
   part — but it can accept one that is genuinely out of specification, by up to the gauge tolerance at
   each limit. Put it *inside* and the gauge may reject parts that are marginally acceptable, but **it
   cannot accept a bad one, and that is a deterministic guarantee rather than a probabilistic one.** It
   holds whatever the process distribution does, which is a property worth having.
   The choice between them is not symmetric because the costs are not. A false reject costs one part and
   an investigation, and it is recoverable — you re-measure on a CMM and ship it if it is good. A false
   accept costs a part shipped, found by the customer, a containment exercise, and credibility that is
   expensive to rebuild. **When the costs of two errors differ by orders of magnitude, the decision rule
   has to be biased.**
   Now the objection, which people raise immediately and which is legitimate: **absorbing inward loses
   yield**, because you are shrinking the acceptance zone and rejecting conforming parts near the limits.
   The answer is that this is true in principle and usually negligible in practice, and the calculation
   in this lesson shows why. Assume parts are spread uniformly across the tolerance band and the inward
   absorption appears to reject nearly two thousand parts a year. But a capable, centred process does not
   produce parts uniformly — it produces a normal distribution clustered around the middle, and the
   realistic figure was **two parts a year.** A factor of about nine hundred and thirty-five between the
   two estimates.
   **The cost of gauging correctly is borne almost entirely by parts near the tolerance limits, and a
   capable process hardly makes any.** So the objection resolves into a statement about process
   capability rather than about gauging: if inward absorption is costing real yield, the process is
   centred badly or running too wide, and the gauge is reporting a problem rather than causing one.
   The one case where I would engage seriously is a process that genuinely cannot be made capable — an
   old machine, a difficult material, a tolerance that should never have been specified. Then the yield
   loss is real, and the honest conversation is about the tolerance or the process. **Widening the gauge
   to improve yield is indistinguishable, in its effects, from deciding to ship non-conforming parts.**
2. *"A production manager says the checking fixture is rejecting good parts and wants it opened up. How
   do you respond?"*
   **Answer:** I would take it seriously, because **several quite different things could be happening and
   only one of them means the fixture is correct.** So the first job is to find out which, and "opening
   it up" is the answer to at most one of them.
   **First: the fixture may be right and this is expected behaviour.** With the tolerance absorbed
   inward, parts very near the limits get rejected even though they conform. The test is straightforward
   — measure the rejected parts on a CMM. If they are inside specification but within the guard band, the
   fixture is doing exactly what it was designed to do, and the conversation moves to process centring,
   because a capable centred process should almost never produce parts in that band. Two a year, in the
   case we worked.
   **Second, and in my experience most common: a datum problem.** If the fixture grips a datum feature
   specified at MMC, it removes the datum shift the drawing permits and will reject parts that genuinely
   conform. That is a real fixture defect, and the fix is a fixed-size simulator at the virtual
   condition, not a wider tolerance. Likewise, using the wrong datum precedence constrains the part in
   the wrong order and gets a different answer from the drawing. Both produce exactly this symptom, and
   both are corrected by making the fixture *more* faithful to the drawing rather than looser.
   **Third: clamping distortion.** If the fixture clamps hard enough to deform the part, it is measuring
   a shape the part does not have when free. Measure a rejected part in the fixture and then out of it;
   if they differ, the clamping is the problem.
   **Fourth: the fixture has drifted** — a worn locator, a knock, a chip under a pad. That is what the
   master check exists to detect, and if the master has not been checked recently then every verdict
   since the last check is unverified, which is a bigger problem than the one being reported.
   Only after all four are eliminated would I consider whether the guard band is unnecessarily wide — and
   even then the remedy is a documented recalculation, not an adjustment to stop the complaints.
   What I would not do is open it up because parts are being rejected, because **that is a decision to
   accept non-conforming parts, made without saying so.** If that is genuinely the commercial decision —
   and occasionally, with a customer concession, it is — it must be made explicitly, in writing, by
   someone with the authority to make it. It is not a fixture adjustment.
   And I would add that a production manager reporting this is giving useful information. **A fixture
   rejecting good parts is a real cost and a real signal**, and two of the four causes above are genuine
   fixture defects. Treating the complaint as illegitimate is both wrong and a reliable way to ensure the
   next problem goes unreported.

### 29. Summary
A fixture makes parts and a gauge judges them, and the difference produces opposite tolerance
philosophies because the costs of error are asymmetric: a bad fixture makes scrap found internally, while
a bad gauge ships scrap found by the customer. A gauge is toleranced tighter than a fixture for the same
part — roughly 5–10% against 10–20% — and its tolerance is absorbed into the part's specification zone
rather than added outside it, so that it can never accept a non-conforming part; this is a deterministic
guarantee independent of the process distribution, and the resulting bias toward rejection is the
opposite of the fixture instinct. The objection that this loses yield is true in principle and negligible
in practice for a capable centred process: the worked example gave 1,908 false rejects a year under a
uniform assumption and two under a realistic normal one, a factor of about 935, while the
outward-toleranced alternative shipped 196 non-conforming parts a year after a modest and entirely
ordinary 0.010 mm process drift — the characteristic failure of a bad gauge being that it works until
something else changes and then fails silently. Wear allowances follow the same logic and are applied
only where wear makes a gauge more permissive, which is why a GO plug receives one and a NO-GO does not.
A checking fixture still locates, supports and clamps, but each duty changes: it must locate on the
drawing datums in the specified precedence, with MMC datums represented by fixed-size simulators rather
than gripping locators; it must reproduce the specified free-state or restrained condition; and it must
clamp with the minimum repeatable force, since holding a part to measure it inevitably changes it.
Finally, a checking fixture without an independently certified master piece is an opinion, and an
attribute gauge — cheaper and entirely adequate for a correct verdict — provides no warning that a
process is drifting toward failure.

### 30. Key takeaways
- **A bad fixture makes scrap; a bad gauge ships scrap.**
- **Gauge tolerance 5–10% of part tolerance**, tighter than a fixture's 10–20% `[PRACTICE]`.
- **Absorb the gauge tolerance inward.** Zero false accepts, by construction.
- **A gauge is deliberately biased toward rejection** — the opposite of the fixture instinct.
- **The yield objection is real in principle and negligible in practice** — 1,908 vs 2 parts a year.
- **An outward-toleranced gauge fails silently after an ordinary drift** — 196 bad parts shipped.
- **Wear allowance only where wear is permissive** — GO yes, NO-GO no.
- **A checking fixture locates on the drawing datums, in precedence.** Never substitute.
- **An MMC datum needs a fixed-size simulator** — gripping it rejects conforming parts.
- **To measure a part you must hold it, and holding it changes it.**
- **Reproduce the specified free-state or restrained condition**, not an approximation.
- **A checking fixture without a master is an opinion** — and certify the master independently.
- **Attribute gauges give no warning**; variable data shows the drift before parts fail.
- **Widening a gauge to improve yield is a decision to ship non-conforming parts**, made without saying
  so.

---

## LESSON L2.1.5 — FIXTURE VERSUS TOOLING VERSUS WORKHOLDING VERSUS SPM

### 1. Lesson title
**L2.1.5 — The industry terminology map: what the words mean and why they are used loosely**

### 2. Learning objective
By the end of this lesson you will be able to place fixture, jig, tooling, workholding, special-purpose
machine and related terms in a coherent hierarchy, recognise regional and sectoral variations in usage,
identify from a customer's words which device they actually require, distinguish an SPM from a fixture
and know where that boundary genuinely matters, and write a requirement statement that does not depend on
ambiguous vocabulary.

### 3. Prerequisites
L2.1.1–L2.1.4 (the four boundaries drawn so far).

### 4. Why the topic matters
Every previous lesson in this module drew a boundary with a genuine engineering basis. **This one draws
boundaries that are largely conventional** — and it matters precisely because they are.

```
   "We need tooling for this part."
     → cutting tools? a fixture? a whole set of
       jigs, fixtures and gauges? in a press shop,
       the DIE?

   "We need a fixture."
     → might need a gauge     (L2.1.4)
     → might need soft jaws   (L2.1.3)
     → might need a jig       (L2.1.2)
     → might need an SPM

   ┌──────────────────────────────────────────────┐
   │ THESE WORDS ARE NOT USED CONSISTENTLY ACROSS │
   │ COMPANIES, SECTORS OR COUNTRIES.             │
   │                                              │
   │ THE PROFESSIONAL SKILL IS NOT KNOWING THE    │
   │ "CORRECT" DEFINITION — IT IS ASKING THE      │
   │ QUESTIONS THAT MAKE THE MEANING UNAMBIGUOUS. │
   └──────────────────────────────────────────────┘
```

`[PRACTICE]` **A quotation written against an ambiguous word is a quotation you will lose money on**,
because the customer's understanding of what was included will differ from yours, and the difference is
discovered after the order.

### 5. Simple explanation

```
   THE HIERARCHY, ROUGHLY

   TOOLING ─── the broadest term: everything that
     │         is neither the machine nor the part
     │
     ├── CUTTING TOOLS      drills, mills, taps
     │
     ├── WORKHOLDING
     │     ├── FIXTURES     dedicated
     │     ├── JIGS         fixture + tool guidance
     │     ├── VISES        general purpose
     │     ├── CHUCKS       general purpose, round
     │     └── MODULAR      reconfigurable
     │
     ├── GAUGES AND CHECKING FIXTURES
     │
     └── DIES, MOULDS, PATTERNS

   SPM ─── a MACHINE, not tooling
```

```
   ┌──────────────────────────────────────────────┐
   │ A FIXTURE GOES ON A MACHINE.                 │
   │ AN SPM IS A MACHINE.                         │
   │                                              │
   │ Own frame + own drives + own control         │
   │ = a machine, however much it looks like a    │
   │ big fixture.                                 │
   └──────────────────────────────────────────────┘
```

### 6. Engineering explanation

**THE TERMS, AS USED IN THIS PROGRAMME**

| Term | Definition used here | Variation in usage |
|---|---|---|
| **Tooling** | Everything dedicated or consumable that is neither machine nor part | Broadest and vaguest; in press shops it usually means the die |
| **Workholding** | Any device holding a workpiece for processing | Reasonably consistent |
| **Fixture** | Dedicated workholding that locates, supports and clamps without guiding the tool | Sometimes used loosely for any workholding |
| **Jig** | A fixture that also guides the tool | Consistent, though sometimes applied to assembly aids that guide nothing |
| **Vise / chuck** | General-purpose workholding | Consistent |
| **Modular fixturing** | Reconfigurable standard elements on a grid plate | Consistent; covered at L3 |
| **Gauge** | Device giving a pass/fail verdict | Consistent |
| **Checking fixture** | Device presenting a part for measurement | Also called inspection fixture or control gauge |
| **SPM** | Special-purpose machine — a machine built for one task | Standard in India and Asia; "special" or "dedicated machine" in Europe and the US |
| **Die / mould / pattern** | Tooling that forms rather than holds | A different discipline |
| **Assembly fixture** | Holds components in relationship while they are joined | Covered from L14 onward |

`[PRACTICE]` **The SPM row matters for anyone working in India.** The term is standard here and across
much of Asia, appears in job titles and tenders, and is understood immediately. Elsewhere the same thing
is a special or dedicated machine. Neither is wrong; **knowing both prevents confusion on an
international project.**

**WHERE THE FIXTURE/SPM BOUNDARY GENUINELY MATTERS**

The one boundary in this lesson with real consequences — and they are regulatory and commercial rather
than technical:

| | A FIXTURE | AN SPM |
|---|---|---|
| Relationship to the machine | Goes on one | **Is** one |
| Drives | None of its own | Own drives and motors |
| Control | None of its own | Own control system |
| Safety | Covered by the host machine's assessment | **Own enclosure, interlocks, E-stop** |
| Regulatory | Part of the machine's conformity assessment | **Requires its own conformity assessment** |
| Design time | Weeks | Months |
| Cost | ₹ tens of thousands to a few hundred thousand | Often ₹ millions |

```
   ┌──────────────────────────────────────────────┐
   │ THE MOMENT A DEVICE HAS ITS OWN POWERED      │
   │ MOTION, IT ACQUIRES SAFETY AND REGULATORY    │
   │ OBLIGATIONS THAT A FIXTURE DOES NOT HAVE.    │
   │                                              │
   │ [PRACTICE] The applicable regulations depend │
   │ on the country and the destination market,   │
   │ and MUST BE CONFIRMED for the specific       │
   │ project. Not a detail to discover late.      │
   └──────────────────────────────────────────────┘
```

> **A hydraulically clamped fixture sits on this boundary.** It has powered actuation, therefore stored
> energy and a crush hazard, but no motion of its own beyond clamping and it lives on a host machine.
> `[PRACTICE]` Common practice is to treat it as part of the host machine's safety assessment with its
> own risk assessment for the clamping hazard — **but the correct treatment depends on jurisdiction and
> must be confirmed, not assumed.**

**THE PROGRESSION — WHEN A FIXTURE BECOMES A MACHINE**

```
   1 MANUAL FIXTURE        toggle clamps, hand-loaded
   2 POWERED CLAMPING      + stored energy, crush
                             hazard. Still a fixture.
   3 SEQUENCED CLAMPING    + interlocked control.
                             Still a fixture.
   ───────── the label changes somewhere here ─────
   4 POWERED MOTION        indexing, transfer,
                             auto-loading. ARGUABLY
                             A MACHINE.
   5 SPM                   own frame, drives,
                             control, enclosure.

   ┌──────────────────────────────────────────────┐
   │ THE PROGRESSION IS CONTINUOUS. WHAT MATTERS  │
   │ IS NOT THE LABEL BUT KNOWING WHICH           │
   │ OBLIGATIONS HAVE BEEN ACQUIRED — SAFETY,     │
   │ REGULATORY, COMMISSIONING AND SUPPORT.       │
   └──────────────────────────────────────────────┘
```

**THE VOCABULARY PROBLEM IN QUOTATIONS**

```
   ✗ "Supply tooling for component 4471-A."
       the fixture?    unclear
       cutting tools?  unclear
       a gauge?        unclear
       soft jaws?      unclear
       commissioning?  unclear
       spares?         unclear

   ✓ "Supply ONE dedicated machining fixture for
      component 4471-A operation 20, mounted on the
      customer's VMC asset 2291, comprising fixture
      body, locators, clamps, manual toggle
      clamping, setting instructions, offset table
      and one spare locator set.
      EXCLUDING cutting tools, checking gauges, soft
      jaws for other operations, machine
      modifications, and commissioning beyond one
      day of on-site support."

   ┌──────────────────────────────────────────────┐
   │ THE SECOND VERSION RELIES ON NO AMBIGUOUS    │
   │ WORD. It names the device, the operation,    │
   │ the host machine, the contents — and         │
   │ critically THE EXCLUSIONS.                   │
   └──────────────────────────────────────────────┘
```

**THE SEVEN QUESTIONS**

```
   WHEN SOMEONE SAYS "WE NEED A FIXTURE"  [PRACTICE]

   1 WHAT MACHINE WILL IT GO ON?
       → fixture vs SPM vs jig; and whether a
         machine exists at all
   2 WHAT OPERATION?
       → machining, welding, assembly, inspection
   3 DOES IT MAKE PARTS OR JUDGE THEM?
       → the L2.1.4 boundary. THE MOST IMPORTANT
         QUESTION IN THE LIST.
   4 DOES ANYTHING GUIDE THE TOOL?
       → the L2.1.2 boundary
   5 WHAT VOLUME, AND FOR HOW LONG?
       → dedicated vs general purpose (L2.1.3)
   6 IS IT HAND-LOADED?
       → manual, powered, automated
   7 WHO OWNS THE SAFETY ASSESSMENT?
       → the boundary that costs money if missed
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Tooling** | Everything dedicated or consumable that is neither machine nor part |
| **Workholding** | Any device holding a workpiece for processing |
| **SPM** | Special-purpose machine; standard term in India and Asia |
| **Special / dedicated machine** | The same thing in European and American usage |
| **Assembly fixture** | Device holding components in relationship while joined |
| **Die / mould** | Forming tooling for press work / casting and injection |
| **Modular fixturing** | Reconfigurable standard elements on a grid plate |
| **Host machine** | The machine a fixture is mounted on |
| **Scope statement** | Definition of what a supply includes and excludes |
| **Conformity assessment** | Process establishing that machinery meets applicable safety requirements |
| **Stored energy** | Energy retained in a hydraulic, pneumatic or spring system when power is removed |

### 8. Principle

> **A FIXTURE GOES ON A MACHINE; AN SPM IS A MACHINE.** Own frame, drives and control make it a machine
> however much it resembles a large fixture.
> **POWERED MOTION BRINGS SAFETY AND REGULATORY OBLIGATIONS** a fixture does not have — and the
> applicable requirements depend on jurisdiction and must be confirmed `[PRACTICE]`.
> **THE PROFESSIONAL SKILL IS NOT KNOWING THE CORRECT DEFINITION BUT ASKING THE QUESTIONS THAT MAKE THE
> MEANING UNAMBIGUOUS.**
> **A QUOTATION WRITTEN AGAINST AN AMBIGUOUS WORD IS A QUOTATION YOU WILL LOSE MONEY ON.**

### 9. Industrial application

**The requirement statement that removes ambiguity**

```
   DEVICE TYPE     dedicated machining fixture
   COMPONENT       4471-A revision C
   OPERATION       Op 20, milling and drilling
   HOST MACHINE    VMC asset 2291, BT40, 800×450
                   table, G54-G59 + G54.1 P1-P48
   QUANTITY        one
   LOADING         manual, one part per cycle
   CLAMPING        manual toggle
   TOLERANCE       features to ±0.05 mm
   VOLUME          6,000/yr for 3 years
   INCLUDED        fixture, locators, clamps,
                   setting instructions, offset
                   table, one spare locator set
   EXCLUDED        cutting tools, gauges, soft jaws,
                   machine modification, training
                   beyond one day
   SAFETY          part of the host machine's
                   existing assessment; no powered
                   actuation
   DELIVERY        8 weeks from drawing approval

   ┌──────────────────────────────────────────────┐
   │ EVERY LINE PREVENTS A SPECIFIC               │
   │ MISUNDERSTANDING THAT HAS HAPPENED BEFORE.   │
   └──────────────────────────────────────────────┘
```

**A scope dispute caused entirely by vocabulary** `[EX-ASSUMED]` illustrative:

```
SITUATION
  Order for "tooling for the 4471 family".
  Supplier delivered three machining fixtures.

CUSTOMER EXPECTED
  Three fixtures PLUS a checking gauge PLUS soft
  jaws for op 2 — because in their company
  "tooling" means everything needed to run the part.

SUPPLIER UNDERSTOOD
  "Tooling" meant the fixtures. Gauges are quoted
  separately; soft jaws are a consumable the
  customer normally makes.

BOTH POSITIONS WERE REASONABLE.

OUTCOME
  Dispute, delay, and a settlement in which the
  supplier absorbed most of the extra cost to
  protect the relationship.

ROOT CAUSE
  ONE AMBIGUOUS WORD IN A PURCHASE ORDER, READ IN
  GOOD FAITH AND DIFFERENTLY BY BOTH PARTIES.

PREVENTION
  A scope statement with an exclusions list.
  Fifteen minutes of writing.

  NOTE: NO ENGINEERING ERROR OCCURRED. THE FIXTURES
  WERE CORRECT.
```

### 10. Design rules
- **R1** — **Name the device type explicitly** — never rely on "tooling" `[PRACTICE]`.
- **R2** — State the **host machine** by asset, control and table size.
- **R3** — State whether the device **makes parts or judges them**.
- **R4** — State whether anything **guides the tool**.
- **R5** — Always include an **exclusions list**.
- **R6** — Establish **who owns the safety assessment** before quoting.
- **R7** — For **powered motion**, confirm the applicable regulations for the destination market
  `[PRACTICE]`.
- **R8** — Recognise **regional terminology** — SPM in India and Asia, special/dedicated machine
  elsewhere.
- **R9** — For **hydraulic or pneumatic clamping**, risk-assess **stored energy** and the crush hazard.
- **R10** — When a customer's word is ambiguous, **ask the seven questions** rather than assuming.

### 11. Rules of thumb
- **A fixture goes on a machine; an SPM is a machine.**
- **Own frame + own drives + own control = a machine**, whatever it is called.
- **"Tooling" is the vaguest word in the industry.** Never quote against it.
- **The exclusions list protects both parties.**
- **SPM in India and Asia; special or dedicated machine elsewhere.**
- **Hydraulic clamping means stored energy** — a real hazard even without motion.
- **"What machine does it go on?"** resolves more ambiguity than any other single question.
- **"Does it make parts or judge them?"** is the most important of the seven.
- **No engineering error is needed to lose money on a job** — one ambiguous word suffices.

### 12. Formulae

There is no calculation specific to terminology. The quantitative content is the **scope completeness
check**:

```
   A scope statement is complete when a competent
   third party can answer ALL of:  [PRACTICE]

    1 What device type?
    2 For which component and operation?
    3 On which host machine?
    4 How many?
    5 Manual, powered, or automated?
    6 What tolerance must it support?
    7 What is included?
    8 What is EXCLUDED?
    9 Who owns the safety assessment?
   10 What is the delivery commitment?

   ANY UNANSWERABLE QUESTION IS A COMMERCIAL RISK
   CARRIED BY WHOEVER IS LEAST ABLE TO ABSORB IT.
```

For the fixture-versus-SPM comparison, the relevant calculation extends the break-even form from L1.3.6
and L2.1.3 with **machine capacity** on the benefit side:

```
Hours_required = N × t_cycle / 60
Compare against AVAILABLE CAPACITY before costing.

Cost_fixture_route = C_fixture + C_additional_machines
                     + N·t_cycle·rate_machine
Cost_SPM_route     = C_SPM + N·t_cycle·rate_SPM

Residual value:
   machines RETAIN value and can be redeployed
   an SPM DOES NOT
```

> **That last line decides most SPM proposals.** A fixture leaves the machine free when the programme
> ends; **an SPM has almost no residual value if the part is discontinued**, which makes programme
> certainty far more important than for a fixture.

### 13. Worked numerical example

**Problem:** A customer requests "tooling" and mentions automation. Classify what is actually required,
compare a fixture on existing plant against an SPM, and determine which is correct — including programme
risk.

```
GIVEN:
  THE REQUEST, AS STATED                         [PROJ]
    "Tooling to produce component 5580 at 150,000
     parts per year. We would like it automated."

  AFTER THE SEVEN QUESTIONS                      [PROJ]
    Operation      drilling and tapping, 4 holes
    Existing plant one VMC at 82 % utilisation
    Judgement      not required — a gauge exists
    Tool guidance  not required
    Volume         150,000/yr
    Programme      UNCERTAIN, 2 to 6 years

  OPTION A — FIXTURE ON THE EXISTING VMC  [EX-ASSUMED]
    Fixture cost         = ₹280,000
    Cycle incl. loading  = 1.5 min/part
    VMC rate             = ₹1,800/h
    A further VMC costs  = ₹3,500,000

  OPTION B — SPM                          [EX-ASSUMED]
    SPM incl. install    = ₹4,200,000
    Cycle                = 0.6 min/part
    Operating rate       = ₹450/h
    Residual if early    = ₹300,000

  CAPACITY                                       [PROJ]
    One shift, 250 days  = 2,000 h/yr
    VMC used             = 1,640 h/yr (82 %)
    VMC spare            =   360 h/yr

REQUIRED:
  (a) Classify what is actually required
  (b) Machine hours under each option
  (c) Can the existing VMC absorb Option A?
  (d) Annual operating cost of each
  (e) Year-one total of each
  (f) The effect of programme uncertainty
  (g) Recommendation
  (h) Engineering conclusion

ASSUMPTION:
  1. All costs and rates are ILLUSTRATIVE ASSUMED
     VALUES for the purpose of the method.
     [EX-ASSUMED]
  2. The SPM rate of ₹450/h reflects a simple
     dedicated machine with low depreciation per
     hour and no skilled operator, against a VMC
     rate carrying the cost of a general-purpose
     machine. REAL RATES MUST BE ESTABLISHED with
     the customer's accounting. [EX-ASSUMED]
  3. One shift assumed. Multi-shift working would
     change the capacity conclusion substantially —
     see the sensitivity note.
  4. No allowance for SPM downtime or spares beyond
     the operating rate. A DEDICATED MACHINE WITH NO
     ALTERNATIVE IS A RISK THIS ARITHMETIC DOES NOT
     CAPTURE. [PRACTICE]
  5. Programme length treated as a decision variable
     rather than assumed away.

FORMULA:
  Hours = N × t_cycle/60
  Annual cost = hours × rate
  Total = capital + operating − residual

UNIT CONVERSION:
  1.5 min = 0.025 h ; 0.6 min = 0.010 h

SUBSTITUTION AND CALCULATION:

  (a) CLASSIFICATION

      Applying the seven questions:
        makes parts, not judges     → not a gauge
        no tool guidance needed     → not a jig
        dedicated at 150,000/yr     → not soft jaws
        "automated" is a WISH, not
          a requirement             → to be tested

      → The real question is FIXTURE-ON-EXISTING-
        MACHINE versus SPM.

      NOTE: the customer said "tooling" and
      "automated". NEITHER WORD DETERMINED THE
      ANSWER. THE SEVEN QUESTIONS DID.

  (b) MACHINE HOURS REQUIRED

      Option A: 150,000 × 0.025 = 3,750 h/yr
      Option B: 150,000 × 0.010 = 1,500 h/yr

  (c) CAN THE EXISTING VMC ABSORB OPTION A?

        Required        = 3,750 h/yr
        Spare capacity  =   360 h/yr
        3,750/360       = 10.42 ×  ✗ NO

      Even the FULL machine is insufficient:
        3,750/2,000 = 1.875 machines

      → OPTION A NEEDS TWO ADDITIONAL VMCs after
        displacing all existing work.

      ┌────────────────────────────────────────────┐
      │ THIS CHANGES THE PROBLEM ENTIRELY.         │
      │                                            │
      │ Option A is not "a fixture" — it is a      │
      │ fixture PLUS TWO MACHINE TOOLS. The        │
      │ comparison the customer imagined —         │
      │ ₹280,000 against ₹4,200,000 — IS NOT THE   │
      │ REAL COMPARISON.                           │
      └────────────────────────────────────────────┘

      Revised Option A capital:
        2 × 3,500,000 + 2 × 280,000
        = 7,000,000 + 560,000 = ₹7,560,000

  (d) ANNUAL OPERATING COST

      Option A: 3,750 × 1,800 = ₹6,750,000/yr
      Option B: 1,500 ×   450 = ₹675,000/yr
      DIFFERENCE              = ₹6,075,000/yr

  (e) YEAR-ONE TOTAL

      Option A = 7,560,000 + 6,750,000
               = ₹14,310,000
      Option B = 4,200,000 +   675,000
               = ₹4,875,000

      RATIO = 14,310,000/4,875,000 = 2.935 ×

      Note Option B is ALSO cheaper in capital:
        7,560,000 − 4,200,000 = ₹3,360,000 less.
      There is no break-even to compute — OPTION B
      WINS ON BOTH CAPITAL AND OPERATING COST.

  (f) PROGRAMME UNCERTAINTY — THE WORST CASE

      SHORTEST programme, 2 years:

        Option B = 4,200,000 + 2 × 675,000
                 = 5,550,000
          less residual 300,000
                 = ₹5,250,000

        Option A = 7,560,000 + 2 × 6,750,000
                 = 21,060,000
          BUT the two VMCs retain value and can be
          redeployed. At 70 % residual
          [EX-ASSUMED]:
          less 0.70 × 7,000,000 = 4,900,000
                 = ₹16,160,000

        OPTION B STILL WINS BY ₹10,910,000.

      ┌────────────────────────────────────────────┐
      │ NOTE WHAT THE RESIDUAL VALUE ARGUMENT DOES │
      │ AND DOES NOT DO.                           │
      │                                            │
      │ It is the strongest argument AGAINST an    │
      │ SPM — machines can be redeployed and an    │
      │ SPM cannot. Here it recovered ₹4.9 M for   │
      │ Option A, a large sum, and STILL did not   │
      │ close a gap of nearly ₹11 M.               │
      │                                            │
      │ THE ARGUMENT IS REAL BUT IT IS NOT MAGIC.  │
      └────────────────────────────────────────────┘

  (g) RECOMMENDATION

      THE SPM, for three reasons in order of weight:
        1. Option A is not affordable in CAPACITY
           terms — two machine tools the customer
           has not budgeted
        2. Option B is cheaper in capital AND in
           operating cost
        3. The conclusion survives the worst-case
           programme with residual value applied
           generously to Option A

      CONDITIONS:
        - address the SPM downtime risk; there is no
          alternative machine
        - confirm the real machine rates
        - establish safety and regulatory ownership
          at the outset

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Actual requirement       │ decided by the    │
  │                              │ QUESTIONS, not    │
  │                              │ the words         │
  │ (b) Hours, A / B             │ 3,750 / 1,500     │
  │ (c) Spare capacity           │ 360 h/yr          │
  │     Shortfall                │ 10.42 ×           │
  │     Extra VMCs needed        │ 1.875 → 2         │
  │ (d) Operating, A / B         │ ₹6,750,000 /      │
  │                              │ ₹675,000          │
  │ (e) Year 1, A / B            │ ₹14,310,000 /     │
  │                              │ ₹4,875,000 (2.94×)│
  │ (f) 2-yr with residuals      │ A ₹16.16 M /      │
  │                              │ B ₹5.25 M         │
  │ (g) RECOMMENDATION           │ SPM               │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The relevant margins
  are capacity and programme risk. Capacity has NO
  margin under Option A — short by 10.42×. Programme
  risk was tested at the worst case with residual
  value applied generously to the losing option, and
  the conclusion held.

PASS/FAIL:
  ✗ FAIL — Option A on existing plant: 10.42× short
    on capacity.
  ✗ FAIL — Option A with two more VMCs: 2.94× the
    year-one cost.
  ✓ PASS — Option B on capital, operating cost and
    worst-case programme length.

ENGINEERING CONCLUSION:
  1. THE CUSTOMER'S WORDS DETERMINED NOTHING; THE
     SEVEN QUESTIONS DETERMINED EVERYTHING.
     The request was for "tooling", with a wish for
     automation. Neither word tells you whether the
     answer is a fixture, a jig, a gauge or a
     machine. It was the questions — what machine,
     what operation, make or judge, what volume, for
     how long — that turned a vague request into a
     comparison that could be calculated.
     THAT IS THE PRACTICAL VALUE OF THE WHOLE OF
     MODULE 2.1: the boundaries are not academic
     distinctions, they are the questions that make
     a requirement answerable.

  2. THE CAPACITY CHECK CHANGED THE PROBLEM, AND IT
     IS THE STEP MOST OFTEN SKIPPED.
     The customer imagined a ₹280,000 fixture against
     a ₹4,200,000 SPM — a comparison the fixture
     obviously wins. But 150,000 parts at 1.5 minutes
     needs 3,750 hours a year against 360 spare: a
     SHORTFALL OF 10.42 TIMES. The real Option A is a
     fixture plus two machine tools at ₹7,560,000 —
     already more capital than the SPM before a
     single part is made.
     ALWAYS CONVERT VOLUME AND CYCLE TIME INTO
     MACHINE HOURS AND COMPARE AGAINST AVAILABLE
     CAPACITY. Two minutes of arithmetic that
     frequently inverts the answer.

  3. THE RESIDUAL VALUE ARGUMENT IS REAL AND IT IS
     NOT MAGIC.
     The strongest objection to any SPM is that it
     has no alternative use, whereas machine tools
     can be redeployed. That argument recovered
     ₹4.9 M for Option A at the worst-case programme
     length — and it still lost by nearly ₹11 M.
     THE RESIDUAL VALUE ARGUMENT DECIDES CLOSE CASES
     AND DOES NOT RESCUE LOPSIDED ONES. It belongs in
     every analysis, and it deserves to be TESTED
     rather than asserted.

  4. THE OBLIGATIONS THAT COME WITH THE LABEL GET
     DISCOVERED LATE.
     Recommending an SPM is recommending a machine:
     enclosure, interlocks, emergency stops, a
     conformity assessment for the destination
     market, a commissioning process and a support
     obligation. None of those apply to a fixture on
     an existing VMC.
     THIS MUST BE ESTABLISHED AT THE OUTSET. A
     supplier who quotes at fixture-project maturity
     and discovers the regulatory scope afterwards
     has mispriced the job, and the amounts are not
     small.

  5. WHAT I WOULD SAY TO THE CUSTOMER.
     That asking for "tooling" hid a capacity problem
     which is the real issue; that the fixture route
     needs two machines they have not budgeted; that
     the SPM is cheaper on both capital and running
     cost and survives the worst-case programme; and
     that before committing we need their real
     machine rates and a decision on who owns the
     safety assessment.
     THE ENGINEERING WAS STRAIGHTFORWARD. THE VALUE
     WAS IN ASKING THE RIGHT QUESTIONS FIRST.

SENSITIVITY NOTE:
  Ranked by influence:
    1. AVAILABLE MACHINE CAPACITY — the variable that
       inverted the comparison. 360 spare hours
       against 3,750 needed. Nothing else matters as
       much.
    2. SHIFT PATTERN — one shift assumed. Two shifts
       would give 4,000 h/yr and could reduce Option
       A to ONE additional machine, changing the
       capital comparison materially. ESTABLISH THIS
       BEFORE ANYTHING ELSE.
    3. MACHINE RATES — the ₹1,800 vs ₹450 gap drives
       the ₹6.075 M annual difference. At ₹900 for
       the SPM the gap halves, though B still wins.
    4. PROGRAMME LENGTH — tested at the worst case
       and the conclusion held. Would matter far more
       if the options were closer.
    5. SPM DOWNTIME RISK — unquantified and genuinely
       important, because a dedicated machine that
       stops has no alternative. A real argument for
       the fixture route that this arithmetic does
       not capture.
```

### 14. Engineering assumptions
- All costs and rates are illustrative assumed values for the purpose of the method `[EX-ASSUMED]`.
- The SPM rate reflects a simple dedicated machine with low depreciation and no skilled operator; real
  rates must be established with the customer's accounting `[EX-ASSUMED]`.
- One shift assumed; multi-shift working would change the capacity conclusion substantially.
- No allowance for SPM downtime or spares — **a dedicated machine with no alternative is a risk this
  arithmetic does not capture** `[PRACTICE]`.
- Programme length treated as a decision variable rather than assumed away.

### 15. Diagram

```
     THE TERMINOLOGY MAP
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE HIERARCHY

   TOOLING ───────────── the broadest, vaguest term
     ├── CUTTING TOOLS   drills · mills · taps
     ├── WORKHOLDING
     │     ├── FIXTURES        dedicated
     │     ├── JIGS            + tool guidance
     │     ├── VISES / CHUCKS  general purpose
     │     └── MODULAR         reconfigurable
     ├── GAUGES & CHECKING FIXTURES
     └── DIES · MOULDS · PATTERNS

   SPM ───────────────── a MACHINE, not tooling

   ┌──────────────────────────────────────────────┐
   │ A FIXTURE GOES ON A MACHINE.                 │
   │ AN SPM IS A MACHINE.                         │
   │ Own frame + drives + control = a machine.    │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE PROGRESSION — WHERE THE LABEL CHANGES

   1 MANUAL FIXTURE       toggle clamps
   2 POWERED CLAMPING     + stored energy
   3 SEQUENCED CLAMPING   + control system
   ────── the label changes somewhere here ──────
   4 POWERED MOTION       arguably a machine
   5 SPM                  own frame, drives,
                          control, enclosure

   ┌──────────────────────────────────────────────┐
   │ WHAT MATTERS IS NOT THE LABEL BUT KNOWING    │
   │ WHICH OBLIGATIONS HAVE BEEN ACQUIRED.        │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE WORKED EXAMPLE — WHY CAPACITY INVERTED IT

   WHAT THE CUSTOMER IMAGINED
     fixture █ ₹280,000
     SPM     ████████████████ ₹4,200,000
     → "obviously the fixture"

   AFTER THE CAPACITY CHECK
     needed 3,750 h/yr   spare 360 h/yr
     SHORTFALL 10.42 ×   → TWO MORE VMCs

     fixture route ████████████████████████████
                   ₹7,560,000 capital
     SPM           ████████████████ ₹4,200,000

   YEAR ONE  A ₹14,310,000   B ₹4,875,000  (2.94×)

   ┌──────────────────────────────────────────────┐
   │ ALWAYS CONVERT VOLUME AND CYCLE TIME INTO    │
   │ MACHINE HOURS AND CHECK AGAINST CAPACITY.    │
   │ Two minutes. It frequently INVERTS the       │
   │ answer.                                      │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE RESIDUAL VALUE ARGUMENT

   Machines can be REDEPLOYED. An SPM CANNOT.

   At the worst-case 2-year programme it recovered
   ₹4.9 M for the fixture route:
     A ₹16.16 M     B ₹5.25 M
   IT STILL LOST BY ₹10.9 M.

   ┌──────────────────────────────────────────────┐
   │ THE RESIDUAL VALUE ARGUMENT DECIDES CLOSE    │
   │ CASES AND DOES NOT RESCUE LOPSIDED ONES.     │
   │ Put it in every analysis — and TEST it.      │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE SEVEN QUESTIONS

   1 What machine will it go on?
   2 What operation?
   3 Does it MAKE parts or JUDGE them?  ◄ the most
                                          important
   4 Does anything guide the tool?
   5 What volume, and FOR HOW LONG?
   6 Is it hand-loaded?
   7 Who owns the safety assessment?

   ┌──────────────────────────────────────────────┐
   │ IN THE WORKED EXAMPLE THE CUSTOMER'S WORDS   │
   │ DETERMINED NOTHING AND THESE DETERMINED      │
   │ EVERYTHING.                                  │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE SCOPE STATEMENT

   ✗ "Supply tooling for component 4471-A."
       fixture? tools? gauge? jaws? spares?
       ALL UNCLEAR

   ✓ Names the DEVICE, OPERATION, HOST MACHINE,
     CONTENTS — and the EXCLUSIONS.

   ┌──────────────────────────────────────────────┐
   │ NO ENGINEERING ERROR IS REQUIRED TO LOSE     │
   │ MONEY ON A JOB. ONE AMBIGUOUS WORD SUFFICES. │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
TITLE BLOCK
  TITLE: MACHINING FIXTURE — COMPONENT 4471-A OP 20
         (not "TOOLING", not "FIXTURE ASSY")
  TYPE:  DEDICATED MACHINING FIXTURE, MANUAL CLAMP
  HOST:  VMC ASSET 2291
  SCOPE: SEE SCOPE STATEMENT SS-4471

GENERAL NOTES
NOTE 1: THIS DEVICE IS A MACHINING FIXTURE. IT DOES
        NOT GUIDE THE CUTTING TOOL AND IT IS NOT A
        GAUGE. IT MUST NOT BE USED TO JUDGE COMPONENT
        CONFORMANCE.

NOTE 2: THIS FIXTURE HAS NO POWERED ACTUATION AND
        FORMS PART OF THE HOST MACHINE'S EXISTING
        SAFETY ASSESSMENT. ANY ADDITION OF HYDRAULIC
        OR PNEUMATIC CLAMPING REQUIRES A NEW RISK
        ASSESSMENT BEFORE USE.
```

Note 1 looks pedantic and is not. `[PRACTICE]` **Machining fixtures do get used as makeshift checking
devices** when a gauge is unavailable, and L2.1.4 explains why that is dangerous — the fixture locates on
convenient features rather than the drawing datums, so it will pass parts that do not conform.

### 17. CAD workflow
1. Use a **consistent device-type naming convention** in the model tree and file names
2. Record the **host machine** in the assembly properties
3. Model the **host machine's table and envelope** so the fixture/machine boundary is explicit
4. Keep **customer-supplied items** in a clearly separated subassembly
5. Where powered actuation exists, model the **hydraulic or pneumatic components** so the stored-energy
   scope is visible
6. Export the **scope statement contents** from the BOM structure

`[PRACTICE]` Step 4 matters commercially: a model where supplied and customer-supplied items are
indistinguishable produces exactly the scope disputes this lesson is about.

### 18. GD&T application

```
STANDARD DECLARATION

  Every drawing must state its governing standard:
    STANDARD: ASME Y14.5-2018
  or
    STANDARD: ISO GPS (ISO 1101:2017 + ISO 5459:2011
              + ISO 8015)

  ┌────────────────────────────────────────────┐
  │ THIS IS A TERMINOLOGY ISSUE WITH REAL      │
  │ ENGINEERING CONSEQUENCES.                  │
  │                                            │
  │ The two systems use overlapping symbols    │
  │ with DIFFERENT DEFAULT RULES — most        │
  │ notably the ASME envelope requirement      │
  │ (Rule #1) against the ISO independency     │
  │ principle, which is the default under      │
  │ ISO 8015 unless Ⓔ is specified.            │
  │                                            │
  │ A drawing that does not declare its        │
  │ standard is ambiguous in exactly the way   │
  │ this lesson is about — and the ambiguity   │
  │ is in the ENGINEERING, not just the        │
  │ commercial scope.  Full treatment at L21.  │
  └────────────────────────────────────────────┘
```

### 19. Manufacturing method
Not applicable to terminology as such. The relevant practice is **documentation control**: the device
type in the title block must match the scope statement, the purchase order and the safety assessment.
`[PRACTICE]` Where these disagree, the disagreement surfaces at commissioning — the most expensive moment
to find it.

### 20. Inspection method
| Check | Method | Acceptance |
|---|---|---|
| Device type in the title block | Drawing review | Explicit and unambiguous |
| Scope statement complete | Ten-question check (§12) | All ten answerable |
| Exclusions listed | Scope review | Present |
| Host machine identified | Drawing and scope review | Asset, control, table size |
| Safety assessment ownership | Contract review | Documented before order |
| Governing GD&T standard | Drawing review | ASME or ISO, declared |
| Supplied vs customer items | BOM review | Clearly distinguished |

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Quoting against the word **"tooling"** | Scope dispute with no engineering error |
| 2 | **No exclusions list** | The customer assumes inclusion |
| 3 | Not asking **what machine it goes on** | Fixture designed for a machine that does not exist |
| 4 | Not asking **"make or judge"** | An excellent fixture where a gauge was needed |
| 5 | Discovering **regulatory scope** after the order | Serious mispricing |
| 6 | Treating a device with **powered motion** as a fixture | Safety obligations unmet |
| 7 | Ignoring **stored energy** in hydraulic clamping | Crush hazard unassessed |
| 8 | Assuming **SPM** is understood internationally | Confusion on an export project |
| 9 | Comparing capital costs **without a capacity check** | The answer inverted in the worked example |
| 10 | Asserting the **residual value argument** without testing it | Weak analysis in both directions |
| 11 | Using a **machining fixture as a checking device** | Passes non-conforming parts |
| 12 | **No governing GD&T standard** declared | Engineering ambiguity, not just commercial |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Scope dispute after order | Ambiguous word in the PO | Compare both readings | Negotiate; record the outcome | Scope statement with exclusions |
| Device cannot be commissioned | Safety ownership unresolved | Review the contract | Establish responsibility | Ask question 7 up front |
| Fixture delivered, gauge wanted | "Make or judge" never asked | Review the requirement | Supply the correct device | Ask question 3 |
| Fixture does not fit the machine | Host machine unspecified | Compare envelopes | Modify or remake | State the host machine |
| SPM quoted at fixture prices | Regulatory scope missed | Review obligations | Re-quote | Establish the boundary early |
| Capacity shortfall found late | No machine-hours check | Convert volume to hours | Re-plan | Always do the capacity check |
| Non-conforming parts passed | Fixture used for checking | Compare against drawing datums | Provide a proper gauge | Drawing Note 1 |
| Drawing read differently by supplier | No standard declared | Check the title block | Declare the standard | Standard declaration policy |

### 23. Design checklist
- [ ] Is the **device type named explicitly** — not "tooling"?
- [ ] Is the **host machine** identified by asset, control and table size?
- [ ] Has **"make or judge"** been established?
- [ ] Has **tool guidance** been established?
- [ ] Are **volume and programme length** both known?
- [ ] Is the loading method — **manual, powered, automated** — stated?
- [ ] Has a **machine-hours capacity check** been done?
- [ ] Is there an **exclusions list**?
- [ ] Is **safety assessment ownership** agreed and documented?
- [ ] For powered motion, have the **applicable regulations** been confirmed for the destination market?
- [ ] For hydraulic or pneumatic clamping, has **stored energy** been risk-assessed?
- [ ] Is the **governing GD&T standard** declared?
- [ ] Are **supplied and customer-supplied items** clearly separated?

### 24. Beginner exercise
**E2.1.5-B** — Classify each of the following as tooling, workholding, a machine, or none of these: a
drill bush; a hydraulic vise; an injection mould; a special-purpose machine for pressing bearings; a
Go/No-Go plug gauge; a face mill; a modular fixture base plate.
(a) Classify each.
(b) State the single test that distinguishes a fixture from an SPM.
(c) State two obligations an SPM has that a fixture does not.
(d) Explain why "tooling" is a dangerous word in a purchase order.
(e) List three of the seven questions and say what each reveals.

### 25. Intermediate exercise
**E2.1.5-I** — A customer emails: *"We need tooling for our new bracket, around 40,000 a year, and we'd
like it as automated as possible."*
(a) List the seven questions you would ask and what each would reveal.
(b) The bracket needs milling on two faces and four tapped holes. Their VMC has 900 spare hours per year
and the estimated cycle is 2.2 min/part including loading. Calculate the machine hours required and state
whether existing capacity suffices.
(c) If not, calculate how many additional machines the fixture route would need.
(d) State what changes if the customer runs two shifts.
(e) Explain why "as automated as possible" is not a requirement, and rewrite it as one.
(f) Write a scope statement for a dedicated machining fixture for the milling operation, with exclusions.
(g) State who you would expect to own the safety assessment for manual clamping and for hydraulic
clamping.

### 26. Advanced exercise
**E2.1.5-A** — A customer requires 220,000 parts/yr of a small aluminium housing needing drilling,
tapping and a face mill. They have two VMCs at 65% and 88% utilisation (2,000 h/yr each, single shift).
Three options `[EX-ASSUMED]`: (A) two dedicated fixtures on the existing VMCs, ₹320,000 total, cycle
1.8 min/part; (B) one new VMC plus a four-station tombstone fixture, VMC ₹3,800,000, fixture ₹520,000,
cycle 1.1 min/part; (C) an SPM at ₹6,500,000, cycle 0.45 min/part, operating rate ₹500/h against a VMC
rate of ₹1,850/h. Programme 4 years, with a 30% probability of ending at 2 years. Residual values: VMC
70%, SPM ₹400,000.
(i) Calculate the machine hours required under each option.
(ii) Calculate the spare capacity available and determine which options are feasible without additional
machines.
(iii) For any infeasible option, calculate the additional machines required and revise its capital.
(iv) Calculate the four-year total cost of each feasible option, including residual values.
(v) Calculate the two-year total cost of each, including residual values.
(vi) Compute a probability-weighted cost using the 30%/70% split.
(vii) Identify the option minimising expected cost and by how much.
(viii) State three factors not captured in this arithmetic that could change the recommendation, and the
direction of each.
(ix) Explain what additional obligations option C brings and who should own them.
(x) Write the recommendation you would present, in no more than 200 words.

### 27. Interview questions
1. *"What is the difference between a fixture and an SPM?"*
   **Answer:** A fixture goes on a machine; an SPM is a machine. The practical test is whether the device
   has its own frame, its own drives and its own control system — if it does, it is a machine however
   much it looks like a large fixture. The distinction matters mostly for reasons that are not technical:
   a machine needs its own safety enclosure, interlocks and emergency stops, it needs a conformity
   assessment appropriate to the market it is sold into, it takes months rather than weeks to design, and
   it costs millions rather than hundreds of thousands of rupees. A fixture bolted to an existing VMC is
   covered by that machine's existing safety assessment. So the moment a device acquires its own powered
   motion, it acquires a set of obligations that need to be established at the start of the project
   rather than discovered at commissioning.
2. *"A customer says they need tooling. What do you do?"*
   **Answer:** I ask questions, because "tooling" is the vaguest word in the industry — it means cutting
   tools in one company, the whole set of fixtures and gauges in another, and the die in a press shop.
   The questions are: what machine will it go on, what operation, does it make parts or judge them, does
   anything need to guide the tool, what volume and for how long, is it hand-loaded, and who owns the
   safety assessment. The third one is the most important, because delivering an excellent fixture to
   someone who needed a gauge is a complete project failure even though the fixture works. Then I would
   write a scope statement naming the device, the operation, the host machine, what is included and —
   most importantly — what is excluded.

### 28. Expert questions
1. *"Does the terminology actually matter, or is this pedantry?"*
   **Answer:** Most of it is convention and I would not argue about it. But **three of these boundaries
   have consequences that are not conventional at all**, and it is worth separating them from the rest.
   The first is **make versus judge**. That is not a naming question, it is a different tolerance
   philosophy. A fixture's tolerance reduces what the process has available, so you keep it small and you
   would rather err toward giving the process room. A gauge's tolerance is absorbed inward so it can
   never accept a bad part, which means deliberately biasing it toward rejection. Get those the wrong way
   round and you have built a device that ships non-conforming parts. **That is not a vocabulary problem,
   it is a defect.**
   The second is **fixture versus machine**. The moment a device has its own powered motion it acquires
   safety obligations — enclosure, interlocks, emergency stops — and a conformity assessment appropriate
   to the destination market. Those obligations are real, expensive and legally significant. A supplier
   who priced a fixture and delivered something meeting the definition of machinery has a genuine
   problem. **The label determines the obligations, so the label matters.**
   The third is **commercial scope**, which is where the money is actually lost. In the case in this
   lesson no engineering error occurred at all — the fixtures were correct. The dispute was caused
   entirely by the word "tooling" in a purchase order, read in good faith and differently by two
   competent parties. **You can lose a substantial sum on a job where every drawing is right.**
   Everything else — jig or fixture for a borderline device, SPM or special machine — genuinely is
   convention, and I would adapt to whatever the customer uses rather than correcting them. Correcting a
   customer's vocabulary is a poor use of the credibility you need for the conversations that matter.
   So: **the professional skill is not knowing the correct definitions, it is knowing which ambiguities
   are harmless and which will cost somebody money.** The seven questions exist to resolve the second
   kind without making an issue of the first.
2. *"When would you recommend an SPM over a fixture, and what makes you cautious about it?"*
   **Answer:** The case for an SPM is usually **capacity and cycle time at high volume**, and it is often
   stronger than people expect, because the comparison they have in mind is the wrong one.
   The mistake is comparing capital costs directly — a fixture at a few hundred thousand rupees against a
   machine at several million — and concluding the fixture obviously wins. **That comparison omits the
   machine.** A fixture needs a machine tool to sit on, and if the volume needs more machine hours than
   are available, the real fixture option is a fixture *plus* however many machines that requires. In the
   example here, 150,000 parts at a minute and a half needed 3,750 hours a year against 360 spare, so the
   fixture route actually meant two additional VMCs and more capital than the SPM before a single part
   was made. **Always convert volume and cycle time into machine hours and compare against available
   capacity — it takes two minutes and it frequently inverts the answer.**
   The other argument is that a dedicated machine can be far simpler and cheaper to run than a
   general-purpose one — no tool changer, no complex control, often no skilled operator — so the hourly
   rate can be a fraction of a machining centre's.
   Now the cautions, and there are three real ones.
   **Residual value.** An SPM has essentially no alternative use; if the part is discontinued the asset
   is nearly worthless, whereas machine tools can be redeployed. This is the strongest argument against
   an SPM and it should be quantified rather than waved at — in the worked example it recovered nearly
   five million rupees for the fixture route and still did not close a gap of eleven million. **It
   decides close cases and does not rescue lopsided ones.**
   **Single point of failure.** A dedicated machine that stops has no alternative. Two VMCs running a
   fixture each can cover for one another; an SPM cannot cover for itself. That risk appears nowhere in
   the arithmetic and is genuinely important on a part feeding an assembly line.
   **Programme certainty.** An SPM is a bet on the volume being real and lasting. A fixture is a much
   smaller bet. Where the forecast is soft, the fixture route buys optionality worth paying for.
   So: do the capacity calculation first because it often decides the matter; quantify the residual value
   and downtime arguments rather than asserting them; be more sceptical the less certain the programme
   is; and establish the safety and regulatory scope at the outset, because recommending an SPM is
   recommending a machine.

### 29. Summary
The terms in this field form a rough hierarchy — tooling is broadest and vaguest, workholding covers
everything that holds a part, and fixtures, jigs, vises, chucks and modular systems sit within it
alongside gauges and forming tooling — but usage is not consistent across companies, sectors or
countries, so the professional skill is not knowing the correct definition but asking the questions that
make a requirement unambiguous. Three boundaries have consequences beyond convention: make versus judge
is a different tolerance philosophy and getting it wrong produces a device that ships non-conforming
parts; fixture versus machine determines safety and regulatory obligations that attach the moment a
device acquires its own powered motion, with the applicable requirements depending on jurisdiction; and
commercial scope is where money is actually lost, since a quotation written against an ambiguous word can
cost a substantial sum on a job where every drawing is correct. The worked example showed the seven
questions doing the work the customer's vocabulary could not: a request for "tooling" with a wish for
automation resolved into a comparison between a fixture on existing plant and an SPM, and the capacity
check — 3,750 machine hours needed against 360 available, a shortfall of 10.42 times — inverted a
comparison that had looked obvious, because the real fixture route required two additional machine tools
and more capital than the SPM. The residual value argument, the strongest objection to any SPM, recovered
₹4.9 M for the losing option and still left it ₹10.9 M behind: it decides close cases and does not rescue
lopsided ones.

### 30. Key takeaways
- **A fixture goes on a machine; an SPM is a machine.** Own frame, drives and control = a machine.
- **Powered motion brings safety and regulatory obligations** — confirm them for the destination market.
- **"Tooling" is the vaguest word in the industry.** Never quote against it.
- **SPM is standard in India and Asia**; special or dedicated machine elsewhere.
- **The seven questions resolve what the vocabulary cannot** — "make or judge" is the most important.
- **A scope statement names the device, operation, host machine, contents and EXCLUSIONS.**
- **No engineering error is needed to lose money on a job** — one ambiguous word suffices.
- **Always convert volume and cycle time into machine hours** and check against capacity.
- **The capacity check frequently inverts the answer** — 10.42× short here.
- **The residual value argument decides close cases and does not rescue lopsided ones.**
- **An SPM is a single point of failure** — a risk the arithmetic misses.
- **A machining fixture must never be used as a checking device.**
- **Declare the governing GD&T standard** — an undeclared standard is engineering ambiguity.

---

# MODULE 2.1 — CLOSING

## What each lesson established

| Lesson | Boundary | The engineering behind it |
|---|---|---|
| **L2.1.1** | What a fixture **is** | Three duties — **locate, support, clamp** — controlling position, shape and retention; the clamp is the only element that applies force |
| **L2.1.2** | Fixture vs **jig** | The jig guides the tool, moving the accuracy burden to the tooling; **CNC solved positioning, not drill wander** |
| **L2.1.3** | Fixture vs **vise/chuck** | A plain vise has **no locating duty at all**; soft jaws put a fixture's locators into a general-purpose device |
| **L2.1.4** | Fixture vs **gauge** | **Make versus judge** — opposite tolerance philosophies; the gauge's uncertainty is absorbed inward |
| **L2.1.5** | Fixture vs **tooling/SPM** | A fixture goes on a machine; an SPM **is** a machine, with the obligations that follow |

## The complete boundary map

```
              DOES IT HOLD A WORKPIECE?
                        │
          ┌─────────────┴─────────────┐
         NO                          YES
          │                           │
   cutting tools,        DOES IT MAKE PARTS OR JUDGE THEM?
   dies, moulds                       │
                     ┌────────────────┴───────────┐
                  JUDGES                        MAKES
                     │                            │
            ┌────────┴───────┐      DOES IT GUIDE THE TOOL?
        attribute        checking                 │
          GAUGE          FIXTURE       ┌──────────┴────────┐
       (Go/No-Go)      (variable)     YES                 NO
                                       │                   │
     tolerance ABSORBED INWARD        JIG        IS IT DEDICATED
     locate on DRAWING DATUMS                    TO ONE PART?
     minimum clamp force                                   │
                                        ┌─────────────────┴─────┐
                                      YES                      NO
                                        │                       │
                            IS IT ON A MACHINE          VISE / CHUCK
                            OR IS IT ONE?               (+ SOFT JAWS =
                                        │                the middle option)
                            ┌───────────┴────┐
                          ON A            IS ONE
                        MACHINE              │
                           │                SPM
                       FIXTURE        own frame, drives,
                                      control, enclosure,
                                      conformity assessment
```

## The single thread of Module 2.1

Every boundary rested on the **three duties** from L2.1.1:

```
   L2.1.1  three duties: LOCATE, SUPPORT, CLAMP
              │
   L2.1.2  a JIG adds a fourth thing — guiding —
           but still performs all three
              │
   L2.1.3  a VISE performs only CLAMP plus partial
           support; SOFT JAWS restore LOCATE
              │
   L2.1.4  a CHECKING FIXTURE performs all three,
           but each has a DIFFERENT requirement
              │
   L2.1.5  an SPM performs all three AND the
           operation itself

   ┌────────────────────────────────────────────────────┐
   │ THE THREE DUTIES ARE THE COMMON FRAMEWORK. EVERY   │
   │ DEVICE IN THIS MODULE WAS CLASSIFIED BY ASKING     │
   │ WHICH DUTIES IT PERFORMS AND HOW WELL.             │
   │                                                    │
   │ THAT IS WHY L2.1.1 IS THE LESSON TO REMEMBER.      │
   └────────────────────────────────────────────────────┘
```

## Governing principles established in Module 2.1

Continuing the series from Module 1.3 (principles 55–74).

| # | Principle |
|---|---|
| **75** | **A fixture locates, supports and clamps — three different duties, not three words for one.** Locate controls position, support controls shape, clamp controls retention. |
| **76** | **The clamp is the only element that applies force.** Locators and supports are reactive — which is why clamps distort parts and why clamp force has an upper bound. |
| **77** | **Locate, then support, then clamp** — a logical dependency, not merely a procedure. |
| **78** | **Every clamp needs a locator or support directly opposite it**, or its force is reacted through the part's own stiffness. |
| **79** | **If it touches the part, it has a duty** — whether or not one was assigned. |
| **80** | **A fixture converts operator skill into capital equipment.** Its justification rests on volume and consistency, not on part difficulty. |
| **81** | **A jig guides the tool; a fixture does not. Every jig is also a fixture.** |
| **82** | **CNC solved positioning, not drill wander.** A bush competes with the drill's tendency to run away, not with the machine's accuracy. |
| **83** | **A bush can never be more accurate than half its clearance.** |
| **84** | **Put the wear on a component you can change** — bushes in liners, replaceable setting blocks and support plates. |
| **85** | **A plain vise has no locating duty at all.** Soft jaws are a fixture's locators fitted into a general-purpose device. |
| **86** | **Tolerance and physical fit are gates; volume and lead time are trade-offs.** Evaluate in that order. |
| **87** | **Programme life decides, not annual volume.** |
| **88** | **A bad fixture makes scrap; a bad gauge ships scrap.** |
| **89** | **A gauge's uncertainty is absorbed into the part's tolerance, not added to it.** A gauge is deliberately biased toward rejection. |
| **90** | **Allow for wear only in the direction that makes a gauge more permissive.** |
| **91** | **A checking fixture must locate on the drawing datums, in precedence.** Datum substitution passes non-conforming parts. |
| **92** | **To measure a part you must hold it, and holding it changes it.** |
| **93** | **A checking fixture without an independently certified master is an opinion.** |
| **94** | **A fixture goes on a machine; an SPM is a machine** — and the label determines the obligations. |
| **95** | **No engineering error is needed to lose money on a job.** One ambiguous word suffices. |
| **96** | **Convert volume and cycle time into machine hours and check against available capacity.** It frequently inverts the answer. |

## Module 2.1 numerical results

| Result | Value | Lesson |
|---|---|---|
| Unsupported deflection vs 0.02 mm allowance | 0.1772 mm = **8.86× over** | L2.1.1 |
| Two supports at 60 mm spans | 0.00656 mm = **33% of allowance** | L2.1.1 |
| Fixture annual saving; payback | ₹1,347,480/yr; **1.6 months** | L2.1.1 |
| Time saving vs scrap saving | **6.8×** — time dominates | L2.1.1 |
| Jig-drilled position error | ±0.075 mm | L2.1.2 |
| CNC flat face / 12° sloping face | ±0.058 / **±0.148 mm (185% ✗)** | L2.1.2 |
| Sloping-face wander vs machine positioning | 0.120 vs 0.008 mm = **15×** | L2.1.2 |
| Plain vise tolerance consumption | **257% ✗ eliminated** | L2.1.3 |
| Soft jaws / dedicated fixture consumption | 85.7% / 42.9% | L2.1.3 |
| Fixture break-even vs soft jaws | **10,400 parts ≈ 21 months** | L2.1.3 |
| Case A cost ratio (350 parts/yr) | fixture **8.34×** soft jaws | L2.1.3 |
| Gauge acceptance zone retained | **84.1%** | L2.1.4 |
| False rejects, uniform vs normal model | 1,908 vs 2 parts/yr = **~935×** | L2.1.4 |
| Outward gauge after 0.010 mm drift | **196 bad parts shipped/yr** | L2.1.4 |
| Machine hours needed vs spare capacity | 3,750 vs 360 h/yr = **10.42× short** | L2.1.5 |
| Fixture route vs SPM, year one | ₹14,310,000 vs ₹4,875,000 = **2.94×** | L2.1.5 |
| Residual value recovered, worst case | ₹4.9 M — **still lost by ₹10.9 M** | L2.1.5 |

## Self-check — 15 questions

Answer without looking back. Eleven or more correct means Module 2.1 is secure.

1. State the three duties and what each controls.
2. Which duty applies force rather than reacting it, and why does that matter?
3. Why must a clamp have a locator or support directly opposite it?
4. Give the test that identifies which duty an element performs.
5. What distinguishes a jig from a fixture, and is every jig a fixture?
6. Why can a bush make hole position *worse* on a CNC machine?
7. Why can a bush never be more accurate than half its clearance?
8. What locating duty does a plain vise perform?
9. Why must soft jaws be machined clamped rather than free?
10. Which decides between soft jaws and a dedicated fixture — annual volume or programme life?
11. State the difference in tolerance philosophy between a fixture and a gauge.
12. Which gauge gets a wear allowance, and why does the other not?
13. Why must a checking fixture locate on the drawing datums?
14. What single test distinguishes a fixture from an SPM?
15. What calculation should always be done before comparing a fixture route with an SPM?

---

# END OF LEVEL 2 — PART 1

**Module 2.1 · 5 lessons · 150 sections · 15 exercises · governing principles 75–96**

## What Part 2 will cover

**LEVEL 2 ► PART 2 — MODULE 2.2: THE FOURTEEN FIXTURE OBJECTIVES (6 lessons)**

| Lesson | Topic |
|---|---|
| L2.2.1 | Location, support, clamping — the primary triad |
| L2.2.2 | Rigidity, repeatability, accuracy — the metrological triad |
| L2.2.3 | Accessibility, tool access, chip evacuation, coolant access — the process triad |
| L2.2.4 | Safety and ergonomics — the human triad |
| L2.2.5 | Productivity and cost reduction — the business triad |
| L2.2.6 | **Objective conflict resolution** — what to sacrifice when two objectives fight |
| — | **Case study CS-01** — a fixture that was accurate, rigid and commercially useless |

Plus the **Level 2 assessment**: Quiz Q2 (30 items) and the comparison essay — fixture versus jig versus
vise for a given part.

**Module 2.1 asked what a fixture is. Module 2.2 asks what it must achieve** — and then, in L2.2.6, what
to do when those achievements are mutually incompatible, which they frequently are. You have already met
several such conflicts without naming them: the clamp that must be far from the hole for torque and near
the cut for bending; the support that must be present for drilling and absent for back-spotfacing; and
the clamp force window that turned out to be empty.

---

*End of Level 2, Part 1. Reply **NEXT** to continue with Part 2.*
