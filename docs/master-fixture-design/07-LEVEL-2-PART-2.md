# MASTER INDUSTRIAL FIXTURE DESIGN ENGINEERING
## *From Scratch to Production-Ready Professional*

# LEVEL 2 — WHAT IS A FIXTURE?
# PART 2 OF 2 — MODULE 2.2: THE FOURTEEN OBJECTIVES

---

## POSITION IN THE PROGRAMME

```
  LEVEL 0  ENGINEERING FOUNDATION            ✔ COMPLETE
  LEVEL 1  CNC MACHINING FUNDAMENTALS        ✔ COMPLETE
           principles 28-74

  LEVEL 2  WHAT IS A FIXTURE?
    PART 1 Module 2.1  Definition and boundaries ✔
           5 lessons · principles 75-96
    PART 2 Module 2.2  The fourteen objectives  ◄ HERE
           6 lessons + case study CS-01
           Quiz Q2 (30 items) + comparison essay

  LEVEL 3  FIXTURE CLASSIFICATION              → next
```

---

## WHY MODULE 2.2 EXISTS

Module 2.1 answered **what a fixture is**. Module 2.2 answers **what it must achieve** — and then, in
L2.2.6, what to do when those achievements are mutually incompatible.

That last part is the reason the module matters.

```
   THE NAIVE VIEW OF FIXTURE DESIGN

     "Satisfy all the requirements."

   THE ACTUAL SITUATION

     Several requirements are in DIRECT CONFLICT.
     Satisfying one degrades another. There is no
     design that maximises all fourteen.

   ┌──────────────────────────────────────────────┐
   │ FIXTURE DESIGN IS NOT AN OPTIMISATION        │
   │ PROBLEM WITH A SINGLE ANSWER. IT IS A SET    │
   │ OF TRADE-OFFS, AND THE PROFESSIONAL SKILL IS │
   │ KNOWING WHICH OBJECTIVE TO SACRIFICE.        │
   └──────────────────────────────────────────────┘
```

**You have already met several of these conflicts without them being named:**

| Conflict | Where you met it |
|---|---|
| Clamp **far** from the hole for torque vs **near** the cut for bending | L1.3.3 |
| Support **present** for drilling exit vs **absent** for back-spotfacing | L1.3.3, L1.3.6 |
| Clamp force **high enough** for friction vs **low enough** to avoid distortion | L1.3.4 — the empty window |
| Locate on **convenient features** vs on the **drawing datums** | L2.1.4 |
| **Accuracy** of a dedicated fixture vs **lead time** of soft jaws | L2.1.3 |
| Bush **standoff** for chip escape vs **short** for guidance | L2.1.2 |

> **Every one of those was a conflict between two legitimate objectives.** Module 2.2 names all fourteen
> objectives, then gives a structured method for resolving the conflicts rather than resolving them by
> instinct.

## THE FOURTEEN OBJECTIVES

```
   PRIMARY TRIAD          (L2.2.1)  the three duties
     1  LOCATION
     2  SUPPORT
     3  CLAMPING

   METROLOGICAL TRIAD     (L2.2.2)  can it be trusted?
     4  RIGIDITY
     5  REPEATABILITY
     6  ACCURACY

   PROCESS QUARTET        (L2.2.3)  can the process run?
     7  ACCESSIBILITY
     8  TOOL ACCESS
     9  CHIP EVACUATION
    10  COOLANT ACCESS

   HUMAN PAIR             (L2.2.4)  can a person use it?
    11  SAFETY
    12  ERGONOMICS

   BUSINESS PAIR          (L2.2.5)  should it exist?
    13  PRODUCTIVITY
    14  COST REDUCTION

   ─────────────────────────────────────────────
   CONFLICT RESOLUTION    (L2.2.6)  what to sacrifice
```

`[PRACTICE]` **The grouping is not arbitrary — it is a hierarchy of gates.** A fixture that fails the
primary triad does not work at all. One that fails the metrological triad works but cannot be trusted.
One that fails the process quartet can be trusted but cannot run. One that fails the human pair can run
but should not. And one that fails the business pair works perfectly and should never have been built —
**which is precisely case study CS-01.**

## CONTENTS OF PART 2

| Lesson | Title | Objectives |
|---|---|---|
| **L2.2.1** | The primary triad | Location, support, clamping |
| **L2.2.2** | The metrological triad | Rigidity, repeatability, accuracy |
| **L2.2.3** | The process quartet | Accessibility, tool access, chip evacuation, coolant |
| **L2.2.4** | The human pair | Safety, ergonomics |
| **L2.2.5** | The business pair | Productivity, cost reduction |
| **L2.2.6** | **Conflict resolution** | The decision table + **CS-01** |
| — | **Module 2.2 closing** | The complete objectives matrix |
| — | **Level 2 assessment** | Quiz Q2 (30 items) + comparison essay |

**L2.2.2 and L2.2.6 are the two lessons that matter most.** L2.2.2 because **repeatability and accuracy
are different things** and confusing them is the most common metrological error in this field. L2.2.6
because it is the only lesson in the programme so far that teaches you what to give up.

---

# MODULE 2.2 — THE FOURTEEN FIXTURE OBJECTIVES

**Lessons:** L2.2.1 – L2.2.6
**Estimated time:** 4.5 hours
**Prerequisites:** Module 2.1 complete; L1.2.4 (error budget), L1.3.4 (stability), L1.3.6 (access)

## Module learning outcome

You will be able to state all fourteen fixture objectives and the group each belongs to, evaluate a
fixture design against every one of them, quantify the principal objectives where they are measurable,
identify conflicts between objectives in a real design, apply a structured decision method to resolve
those conflicts, and justify which objective was sacrificed and why.

---

## LESSON L2.2.1 — THE PRIMARY TRIAD

### 1. Lesson title
**L2.2.1 — Location, support and clamping as objectives: from duties to requirements**

### 2. Learning objective
By the end of this lesson you will be able to restate the three duties as measurable objectives with
acceptance criteria, quantify locating capability through degrees of freedom and over-constraint,
distinguish deterministic from indeterminate location, calculate the consequences of over-constraint, and
specify acceptance tests for each of the three primary objectives.

### 3. Prerequisites
L2.1.1 (the three duties), L0.3.3 (3-2-1 principle, degrees of freedom), L1.3.4 (clamping distortion).

### 4. Why the topic matters
L2.1.1 established the three duties as **categories of element**. This lesson restates them as
**objectives with acceptance criteria** — which is a different and more demanding thing.

```
   A DUTY says WHAT AN ELEMENT DOES
     "This pad is a locator."

   AN OBJECTIVE says WHAT THE FIXTURE MUST ACHIEVE
     "The fixture shall locate the part such that
      all six degrees of freedom are determinately
      constrained, with a repeatability of
      ≤0.02 mm and no over-constraint."

   ┌──────────────────────────────────────────────┐
   │ THE SECOND CAN BE TESTED. THE FIRST CANNOT.  │
   │                                              │
   │ THAT IS THE WHOLE POINT OF TREATING DUTIES   │
   │ AS OBJECTIVES.                               │
   └──────────────────────────────────────────────┘
```

The specific engineering content this adds is **over-constraint**, which is not visible when you think in
terms of duties. A fixture can have every element correctly performing its duty and still be wrong,
because it has too many of them.

### 5. Simple explanation

```
   SIX DEGREES OF FREEDOM

   A free body in space can:
     move along X, Y, Z        (3 translations)
     rotate about X, Y, Z      (3 rotations)
     ─────────────────────────
     = 6 DEGREES OF FREEDOM

   TO LOCATE A PART FULLY, ALL SIX MUST BE
   CONSTRAINED — EACH EXACTLY ONCE.

   ✓ EXACTLY ONCE  → determinate, repeatable
   ✗ NOT AT ALL    → the part moves
   ✗ MORE THAN ONCE → OVER-CONSTRAINT
```

Over-constraint is the one people miss:

```
   THREE POINTS DEFINE A PLANE.
   A FOURTH POINT DOES NOT FIT.

      ●───────●              ●───────●
      │       │              │   ●   │  ← 4th point
      ●───────●              ●───────●

   With THREE pads the part sits solidly on all
   three, every time.

   With FOUR, the part rocks between two diagonal
   pairs — OR the clamp forces it down and the part
   BENDS.

   ┌──────────────────────────────────────────────┐
   │ MORE LOCATORS IS NOT MORE ACCURATE.          │
   │ IT IS LESS DETERMINATE.                      │
   └──────────────────────────────────────────────┘
```

### 6. Engineering explanation

**OBJECTIVE 1 — LOCATION**

```
   REQUIREMENT
     Constrain all six degrees of freedom,
     each exactly once, with defined repeatability.

   THE 3-2-1 SCHEME (from L0.3.3)
     PRIMARY plane   3 points → constrains
                     1 translation + 2 rotations = 3
     SECONDARY plane 2 points → 1 translation
                     + 1 rotation = 2
     TERTIARY plane  1 point  → 1 translation = 1
     ─────────────────────────────────────────
     TOTAL 6 points → 6 DOF     ✓ DETERMINATE

   ACCEPTANCE CRITERIA  [PRACTICE]
     - all 6 DOF constrained, each once
     - no over-constraint
     - repeatability measured, not assumed
     - locators on hardened, ground surfaces
     - typical repeatability ≤0.02 mm [GUIDE]
```

**DETERMINATE VERSUS INDETERMINATE LOCATION**

```
   DETERMINATE (isostatic)
     Exactly 6 constraints. The part's position is
     uniquely defined by geometry alone.
     ✓ Repeatable — it can only sit one way
     ✓ Contact forces are calculable from statics
     ✓ Part flatness errors do NOT induce stress

   INDETERMINATE (hyperstatic / over-constrained)
     More than 6 constraints. The part's position
     depends on which contacts are made first and
     on the part's own form errors.
     ✗ Rocking, or forced contact and distortion
     ✗ Contact forces are NOT calculable from
       statics alone — they depend on stiffness
     ✗ Part form errors are converted into STRESS

   ┌──────────────────────────────────────────────┐
   │ THE STATICS TEST IS DIAGNOSTIC:              │
   │                                              │
   │ If you cannot calculate the reaction at each  │
   │ locator from ΣF=0 and ΣM=0 alone, the        │
   │ arrangement is OVER-CONSTRAINED.             │
   │                                              │
   │ Six equations, six unknowns. A seventh       │
   │ contact makes the problem unsolvable without │
   │ knowing stiffnesses — which is the           │
   │ mathematical signature of the physical       │
   │ problem. (L0.3.2)                            │
   └──────────────────────────────────────────────┘
```

**WHEN OVER-CONSTRAINT IS DELIBERATE**

`[PRACTICE]` Over-constraint is not always wrong. It is wrong when it is **accidental**.

| Situation | Treatment |
|---|---|
| Large, flexible part sagging under its own weight | Add **adjustable supports** — set after locating, so they do not fight the locators |
| Heavy part needing load spread | Add supports that **contact without positioning** |
| Rigid part, high accuracy | **Strictly 3-2-1.** No extra contacts |
| Casting with variable form | **3-2-1 on machined features**, adjustable supports elsewhere |

> **The distinction is whether the extra contact determines position.** An adjustable support set after
> the part is seated adds stiffness without adding constraint — it is a support, not a locator (L2.1.1).
> A fixed fourth pad adds constraint, and the part must then choose which three to sit on.

**OBJECTIVE 2 — SUPPORT**

```
   REQUIREMENT
     Limit workpiece deflection under process
     forces to an agreed fraction of the part
     tolerance.

   ACCEPTANCE CRITERIA  [PRACTICE]
     - deflection calculated, not assumed
     - typical allocation 20-25 % of the part
       tolerance [PRACTICE]
     - supports contact WITHOUT lifting
     - adjustable supports set AFTER locating
     - support spacing derived from δ ∝ L³

   THE CALCULATION (L0.3.4, L2.1.1)
     δ = C·F·L³/(E·I)
     → halving the span gives 1/8 the deflection
```

**OBJECTIVE 3 — CLAMPING**

```
   REQUIREMENT
     Hold the part against the locators throughout
     the process, with a force bounded BELOW by the
     disturbing forces and ABOVE by distortion.

   ACCEPTANCE CRITERIA  [PRACTICE]
     - F_clamp ≥ (F_disturb · SF)/n     lower bound
     - F_clamp ≤ F_distortion_limit     upper bound
     - direction INTO the locators
     - a locator or support directly opposite
     - repeatable force — fixed stop or calibrated

   ┌──────────────────────────────────────────────┐
   │ THE WINDOW CAN BE EMPTY (L1.3.4).            │
   │                                              │
   │ When it is, the answer is a POSITIVE STOP,   │
   │ which removes the lower bound entirely.      │
   └──────────────────────────────────────────────┘
```

**THE THREE OBJECTIVES AS A HIERARCHY OF FAILURE**

```
   LOCATION FAILS
     → parts are in the wrong place
     → CONSISTENT dimensional error
     → detected quickly

   SUPPORT FAILS
     → parts bend under the cut
     → dimensional error with NO movement
     → detected slowly, blamed on tooling

   CLAMPING FAILS
     → parts move during the cut
     → INTERMITTENT error, or distortion
     → detected erratically

   ┌──────────────────────────────────────────────┐
   │ NOTE THE DETECTION SPEED. A LOCATION FAILURE │
   │ ANNOUNCES ITSELF. A SUPPORT FAILURE HIDES.   │
   │                                              │
   │ THAT IS WHY SUPPORT IS THE OBJECTIVE MOST    │
   │ OFTEN OMITTED — ITS ABSENCE IS NOT OBVIOUS.  │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Degree of freedom (DOF)** | One independent way a body can move; six for a free body |
| **Determinate / isostatic** | Exactly six constraints; position defined by geometry alone |
| **Indeterminate / hyperstatic** | More than six constraints; position depends on stiffness and form |
| **Over-constraint** | Redundant constraint causing rocking or forced distortion |
| **3-2-1 scheme** | Standard determinate locating arrangement |
| **Primary datum plane** | Three-point contact; constrains 3 DOF |
| **Secondary datum plane** | Two-point contact; constrains 2 DOF |
| **Tertiary datum** | One-point contact; constrains 1 DOF |
| **Adjustable support** | Support brought into contact after locating; adds stiffness, not constraint |
| **Rocking** | Part able to sit in more than one position on over-constrained contacts |
| **Isostatic** | Synonym for determinate |

### 8. Principle

> **CONSTRAIN ALL SIX DEGREES OF FREEDOM, EACH EXACTLY ONCE.** Fewer and the part moves; more and it
> rocks or is distorted.
> **MORE LOCATORS IS NOT MORE ACCURATE — IT IS LESS DETERMINATE.**
> **THE STATICS TEST IS DIAGNOSTIC:** if the reaction at each locator cannot be calculated from ΣF=0 and
> ΣM=0 alone, the arrangement is over-constrained.
> **OVER-CONSTRAINT IS WRONG WHEN IT IS ACCIDENTAL.** Adjustable supports set after locating add
> stiffness without adding constraint.
> **A LOCATION FAILURE ANNOUNCES ITSELF; A SUPPORT FAILURE HIDES** — which is why support is the
> objective most often omitted.

### 9. Industrial application

**The DOF audit — a design review technique**

```
   FOR EVERY FIXTURE  [PRACTICE]

   ┌────────┬──────────────┬─────────────────────┐
   │ DOF    │ CONSTRAINED  │ BY WHICH ELEMENT?   │
   │        │ HOW MANY     │                     │
   │        │ TIMES?       │                     │
   ├────────┼──────────────┼─────────────────────┤
   │ X      │ 1            │ pin A               │
   │ Y      │ 1            │ pin B               │
   │ Z      │ 1            │ pads 1,2,3          │
   │ Rot X  │ 1            │ pads 1,2,3          │
   │ Rot Y  │ 1            │ pads 1,2,3          │
   │ Rot Z  │ 1            │ pins A,B            │
   └────────┴──────────────┴─────────────────────┘

   EVERY ROW MUST READ EXACTLY 1.
     0 → the part moves in that direction
     2+ → OVER-CONSTRAINED

   THE AUDIT TAKES FIVE MINUTES AND FINDS THE
   ERRORS THAT NO FORCE CALCULATION WILL.
```

**Recognising over-constraint in production** `[EX-ASSUMED]` illustrative:

```
SYMPTOM
  A machined face is out of flatness by 0.06 mm on
  about one part in three, with no pattern in
  which parts fail.

DIAGNOSIS
  The fixture has FOUR fixed locating pads, not
  three. The casting's own base flatness varies by
  0.05-0.10 mm part to part.

  Depending on which way each casting is bowed:
    - some sit on 3 pads and rock  → machined
      while rocking, then settle differently
    - some are pulled flat by the clamps →
      machined flat, then SPRING BACK on release

  THE RANDOMNESS IS THE SIGNATURE. The fixture is
  fine; the part's own form variation decides
  which failure mode occurs on each part.

CORRECTIVE
  Remove one pad → strict 3-point primary.
  If load spread is genuinely needed, replace the
  fourth pad with an ADJUSTABLE support set after
  the part is seated.

THE PRINCIPLE
  OVER-CONSTRAINT CONVERTS PART FORM ERROR INTO
  EITHER POSITION ERROR OR STRESS. Three points
  cannot do that, because three points always fit.
```

### 10. Design rules
- **R1** — Constrain **all six DOF, each exactly once**; audit them explicitly `[PRACTICE]`.
- **R2** — Use **3-2-1** as the default primary scheme.
- **R3** — **Never fit a fourth fixed locating pad** on a primary plane.
- **R4** — Where load spread or stiffness is needed, use **adjustable supports set after locating**.
- **R5** — Apply the **statics test** — if reactions are not calculable from ΣF=0 and ΣM=0, it is
  over-constrained.
- **R6** — Locate on **machined features** where the part's form varies.
- **R7** — Calculate **deflection** and allocate 20–25% of the part tolerance to it `[PRACTICE]`.
- **R8** — Bound clamp force **both above and below**; check the window is not empty.
- **R9** — Direct clamp force **into the locators**, with a reaction directly opposite.
- **R10** — **Measure repeatability** at commissioning; do not assume it.

### 11. Rules of thumb
- **Six DOF, each constrained exactly once.**
- **More locators is not more accurate — it is less determinate.**
- **Three points always fit. Four do not.**
- **If you cannot solve it with ΣF=0 and ΣM=0, it is over-constrained.**
- **Over-constraint converts part form error into position error or stress.**
- **Randomly varying results with no pattern** suggests over-constraint plus part form variation.
- **Adjustable supports add stiffness, not constraint** — if set after locating.
- **Support allocation 20–25% of the part tolerance** `[PRACTICE]`.
- **A location failure announces itself; a support failure hides.**

### 12. Formulae

**Degrees of freedom**
```
DOF_free = 6
DOF_constrained = Σ constraints applied
Determinate when:  DOF_constrained = 6, each once
Over-constrained when: any DOF constrained > once
```

**Static determinacy check**
```
Unknown reactions = n_contacts
Available equations = 6   (ΣFx, ΣFy, ΣFz, ΣMx, ΣMy, ΣMz)

n_contacts = 6  → determinate, solvable
n_contacts > 6  → indeterminate; requires stiffness
                  analysis
```

**Rocking displacement from over-constraint** (indicative)
```
For a part with base flatness error e resting on
four coplanar pads, the maximum rock at a corner is
approximately:
   δ_rock ≈ e
and the part will alternate between two diagonal
support pairs.

[GUIDE] This is an order-of-magnitude relationship
for reasoning about the effect. The actual behaviour
depends on the form error's shape and the pad
layout.
```

**Force to pull an over-constrained part flat**
```
F ≈ k_part · e
where k_part = the part's local bending stiffness
→ this force is ADDED to the clamp force and is a
  DISTORTION source (L1.3.4)
```

| Variable | Meaning | Unit |
|---|---|---|
| e | Part form error | mm |
| n_contacts | Number of locating contacts | — |
| k_part | Local bending stiffness of the part | N/mm |

### 13. Worked numerical example

**Problem:** A cast iron bracket is located on four pads. Determine whether the arrangement is
determinate, calculate the consequences of the over-constraint, evaluate the corrective options, and
verify the corrected design against all three primary objectives.

```
GIVEN:
  PART                                           [PROJ]
    Cast iron bracket, mass 8.4 kg
    Base 300 × 180 mm, as-cast
    Base flatness variation, part to part
                              = 0.08 mm  [PROJ,
                                measured over 30
                                castings]
    Local bending stiffness of the base
                              = 4,200 N/mm [PROJ]

  EXISTING FIXTURE                               [PROJ]
    4 fixed locating pads at the base corners
    2 locating pins
    2 clamps, 1,100 N each

  REQUIREMENT                                    [PROJ]
    Machined face flatness    = 0.04 mm
    Feature position          = ±0.06 mm

  PROCESS                                        [PROJ]
    Downward cutting force at mid-span = 540 N
    Span between pads, long axis       = 260 mm
    Section under the cut: 180 wide × 12 thick
    Cast iron E               = 120,000 N/mm²
                                [GUIDE, L0 range
                                100-140]

REQUIRED:
  (a) DOF audit of the existing arrangement
  (b) Static determinacy check
  (c) Force required to pull the part flat, and its
      effect
  (d) Whether the flatness requirement can be met
  (e) The corrected arrangement
  (f) Deflection check on the corrected design
  (g) Verification against all three primary
      objectives
  (h) Engineering conclusion

ASSUMPTION:
  1. Base flatness variation of 0.08 mm is a
     MEASURED value from 30 castings, not a drawing
     tolerance. This is the correct basis — the
     drawing tolerance may be wider than what the
     foundry actually delivers. [PROJ]
  2. Local bending stiffness measured by loading the
     base and indicating. Calculating it for an
     irregular casting would not be reliable — the
     L1.3.4 measure-rather-than-derive principle.
     [PROJ]
  3. Cast iron E = 120,000 N/mm², mid-range of the
     100,000-140,000 guideline. [GUIDE]
  4. Deflection modelled as a simply supported beam
     with a central load. End restraint at the pads
     makes this CONSERVATIVE. [PRACTICE]
  5. Flatness allocation: 50 % of the 0.04 mm
     requirement allowed for fixture-induced
     effects, leaving the rest for the machining
     process itself. [PRACTICE]

FORMULA:
  (c) F = k_part · e
  (f) δ = F L³/(48 E I) ;  I = b h³/12

UNIT CONVERSION:
  W = 8.4 × 9.81 = 82.4 N
  All forces N, lengths mm.

SUBSTITUTION AND CALCULATION:

  (a) DOF AUDIT — EXISTING ARRANGEMENT

      ┌────────┬───────────────┬──────────────────┐
      │ DOF    │ CONSTRAINED   │ BY               │
      ├────────┼───────────────┼──────────────────┤
      │ Z      │ 1             │ pads (any 3)     │
      │ Rot X  │ 1             │ pads             │
      │ Rot Y  │ 1             │ pads             │
      │ X      │ 1             │ pin A            │
      │ Y      │ 1             │ pin B            │
      │ Rot Z  │ 1             │ pins A,B         │
      └────────┴───────────────┴──────────────────┘

      All six appear constrained once — BUT there
      are FOUR pads providing what three can supply.

      → The primary plane is constrained
        4 times over 3 required.
        ONE REDUNDANT CONSTRAINT.

  (b) STATIC DETERMINACY CHECK

      Unknown vertical reactions = 4 (one per pad)
      Available equations for the vertical system:
        ΣFz = 0
        ΣMx = 0
        ΣMy = 0
        = 3 equations

      4 unknowns, 3 equations
      → INDETERMINATE by 1

      ✗ THE REACTIONS CANNOT BE CALCULATED FROM
        STATICS ALONE. This is the mathematical
        signature of over-constraint.

  (c) FORCE TO PULL THE PART FLAT

      The clamps must close a gap of up to the base
      flatness variation:

        F = k_part · e
          = 4,200 × 0.08
          = 336 N

      This force is IN ADDITION to the clamping
      required for retention, and it acts to BEND
      the part.

      As a fraction of the applied clamp force:
        336/(2 × 1,100) = 336/2,200
                        = 15.3 % of the total clamp
                          force is being spent
                          deforming the part

  (d) CAN THE FLATNESS REQUIREMENT BE MET?

      When the clamps pull the part flat, the base
      is elastically deformed by up to 0.08 mm. The
      top face is machined flat IN THAT STATE.

      On release, the part springs back, and the
      machined face takes on the inverse of the
      base's form error.

      Face flatness error after release
        ≈ 0.08 mm (the base form error transferred)

      Against the requirement:
        Allocation to fixture effects
          = 0.50 × 0.04 = 0.020 mm
        Actual = 0.080 mm

        0.080/0.020 = 4.0 ×

      ✗ FAIL BY 4 TIMES.

      AND the failure is INTERMITTENT: castings
      bowed one way rock instead of being pulled
      flat, giving a position error rather than a
      flatness error. WHICH FAILURE OCCURS DEPENDS
      ON THE INDIVIDUAL CASTING.

  (e) THE CORRECTED ARRANGEMENT

      Remove one pad → THREE fixed pads.

      DOF audit, corrected:
        Z, Rot X, Rot Y  ← 3 pads, exactly 3
        X, Y, Rot Z      ← 2 pins
        = 6 constraints, each once  ✓ DETERMINATE

      Statics check:
        3 unknown vertical reactions
        3 equations (ΣFz, ΣMx, ΣMy)
        ✓ SOLVABLE

      Force to pull flat:
        ZERO. Three points always fit, whatever the
        part's form error.

      → THE 336 N DEFORMING FORCE DISAPPEARS
        ENTIRELY, and with it the 0.08 mm flatness
        transfer.

      BUT: removing a pad increases the unsupported
      span, so the deflection under cutting load
      must now be checked.

  (f) DEFLECTION CHECK, CORRECTED DESIGN

      I = b h³/12
        = 180 × 12³/12
        = 180 × 1,728/12
        = 311,040/12
        = 25,920 mm⁴

      δ = F L³/(48 E I)
        = 540 × 260³/(48 × 120,000 × 25,920)
        = 540 × 17,576,000/(149,299,200,000)
        = 9,491,040,000/149,299,200,000
        = 0.063571 mm

      → δ = 0.0636 mm

      Against the flatness allocation of 0.020 mm:
        0.0636/0.020 = 3.18 ×
      ✗ FAIL

      → A SUPPORT IS NEEDED. Adding ONE adjustable
        support at mid-span:

        δ = 0.063571 × (130/260)³
          = 0.063571 × 0.125
          = 0.0079464 mm
          ≈ 0.00795 mm

        0.00795/0.020 = 39.7 %   ✓ PASS

      CRITICALLY: the support is ADJUSTABLE and set
      AFTER the part is seated on the three pads.
      It therefore adds STIFFNESS WITHOUT ADDING
      CONSTRAINT — it is a support, not a locator.

  (g) VERIFICATION AGAINST THE THREE OBJECTIVES

      OBJECTIVE 1 — LOCATION
        6 DOF, each constrained once      ✓
        Determinate; statics solvable     ✓
        Locating on as-cast base — noted
          as a risk, but the 3-point
          scheme tolerates form error     ✓

      OBJECTIVE 2 — SUPPORT
        Deflection 0.00795 mm
        = 39.7 % of allocation            ✓
        Support set after locating        ✓
        Does not lift the part            ✓

      OBJECTIVE 3 — CLAMPING
        Lower bound: retention only, since
          the deforming force is gone
        Upper bound: no longer spending
          336 N on deformation
        Clamp force can be REDUCED         ✓

        Revised clamp requirement, retention
        against the 540 N cutting force with a
        positive stop fitted and SF 2.5:
          the clamp resists lifting only
          → nominal, say 600 N total
        Distortion at 600 N with 3-point
        location: NEGLIGIBLE, because three
        points impose no deformation.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) DOF audit, existing      │ primary plane     │
  │                              │ constrained 4×    │
  │                              │ where 3 needed    │
  │ (b) Statics                  │ 4 unknowns,       │
  │                              │ 3 equations       │
  │                              │ ✗ INDETERMINATE   │
  │ (c) Force to pull flat       │ 336 N             │
  │     as % of clamp force      │ 15.3 %            │
  │ (d) Flatness transferred     │ 0.080 mm          │
  │     vs 0.020 allocation      │ 4.0 × ✗ FAIL      │
  │ (e) Corrected                │ 3 pads → 6 DOF    │
  │     Deforming force          │ ZERO              │
  │ (f) δ, 3 pads no support     │ 0.0636 mm ✗ 3.18× │
  │     δ with 1 adj. support    │ 0.00795 mm ✓ 39.7%│
  │ (g) All three objectives     │ ✓ PASS            │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The margins are the
  tolerance allocations: 39.7 % of the flatness
  allocation consumed by deflection, leaving 60 %
  for everything else. The clamping margin improved
  because eliminating the over-constraint removed a
  336 N deforming load entirely.

PASS/FAIL:
  ✗ FAIL — original 4-pad arrangement: over-
    constrained, transferring 0.080 mm of base form
    error to the machined face, 4× the allocation.
  ✗ FAIL — 3 pads with no support: 0.0636 mm
    deflection, 3.18× the allocation.
  ✓ PASS — 3 pads plus one adjustable support at
    mid-span: 0.00795 mm, 39.7 % of allocation, all
    six DOF determinate.

ENGINEERING CONCLUSION:
  1. THE FOURTH PAD WAS THE DEFECT, AND IT LOOKED
     LIKE GOOD PRACTICE.
     Four pads under a rectangular base is an
     entirely natural thing to draw, and it feels
     more supportive than three. It is the reason
     15.3 % of the clamp force was being spent
     bending the casting, and the reason 0.080 mm of
     base form error was being transferred to the
     machined face — four times the allocation.
     MORE LOCATORS IS NOT MORE ACCURATE. IT IS LESS
     DETERMINATE. Three points always fit whatever
     the part's form; four do not, and the part must
     then either rock or be forced.

  2. THE STATICS TEST DIAGNOSED IT IN ONE LINE.
     Four unknown reactions, three available
     equations. The problem is not solvable from
     statics alone, which is the MATHEMATICAL
     SIGNATURE of a PHYSICAL over-constraint. That
     check takes seconds and requires no knowledge
     of the part at all.
     I WOULD MAKE IT A STANDARD DESIGN REVIEW ITEM:
     count the contacts, count the equations, and if
     the contacts win, ask why.

  3. THE FAILURE WAS INTERMITTENT, WHICH IS THE
     CHARACTERISTIC SIGNATURE.
     Some castings rocked and gave a position error;
     others were pulled flat and gave a flatness
     error on release. WHICH ONE HAPPENED DEPENDED ON
     HOW THE INDIVIDUAL CASTING HAPPENED TO BE BOWED.
     That randomness is diagnostic. A fixture fault
     usually produces a consistent error (L1.2.1);
     RANDOM RESULTS WITH NO PATTERN, ON A FIXTURE
     THAT MEASURES CORRECTLY, SHOULD PROMPT AN
     OVER-CONSTRAINT CHECK.

  4. REMOVING THE PAD CREATED A SECOND PROBLEM, AND
     THE SOLUTION HAD TO BE THE RIGHT KIND OF
     ELEMENT.
     Three pads gave 0.0636 mm of deflection — 3.18
     times the allocation — because the span
     increased. The temptation is to put the fourth
     pad back. THAT WOULD REINTRODUCE THE ORIGINAL
     FAULT.
     The correct answer is an ADJUSTABLE SUPPORT set
     after the part is seated: it adds stiffness
     without adding constraint, giving 0.00795 mm at
     39.7 % of allocation. THIS IS EXACTLY THE
     L2.1.1 DISTINCTION BETWEEN A SUPPORT AND A
     LOCATOR, AND IT IS THE WHOLE REASON THE
     DISTINCTION EXISTS.

  5. ELIMINATING THE OVER-CONSTRAINT IMPROVED THE
     CLAMPING OBJECTIVE TOO.
     336 N of the clamp force had been doing nothing
     but deform the casting. Removing that allows
     the clamp force to be reduced, which reduces
     distortion, which improves the flatness the
     fixture was failing on in the first place.
     THE THREE PRIMARY OBJECTIVES ARE NOT
     INDEPENDENT. Fixing the location objective
     improved the clamping objective without any
     further change — which is worth knowing,
     because the conflicts in L2.2.6 are the same
     coupling working in the opposite direction.

SENSITIVITY NOTE:
  Ranked by influence:
    1. NUMBER OF PRIMARY CONTACTS — three versus
       four. Not a gradient but a switch, between a
       determinate fixture and one whose behaviour
       depends on each individual casting.
    2. PART FORM ERROR — 0.08 mm here. Under a
       3-point scheme it does not matter at all;
       under a 4-point scheme it transfers directly.
       THE SAME VARIABLE IS CRITICAL OR IRRELEVANT
       DEPENDING ON THE SCHEME.
    3. SUPPORT SPAN — cubic. 260 mm to 130 mm gave a
       factor of 8.
    4. PART STIFFNESS k_part — determines the
       deforming force under over-constraint. A
       stiffer part is worse, not better: it
       resists being pulled flat harder, so the
       force and the springback are larger.
    5. SECTION THICKNESS h — I ∝ h³. A 15 mm base
       instead of 12 would give (15/12)³ = 1.95×
       the stiffness.
```

### 14. Engineering assumptions
- Base flatness variation of 0.08 mm is a **measured** value from 30 castings, not a drawing tolerance
  `[PROJ]`.
- Local bending stiffness measured by loading and indicating — calculating it for an irregular casting
  would not be reliable `[PROJ]`.
- Cast iron E = 120,000 N/mm², mid-range of the guideline `[GUIDE]`.
- Deflection modelled as simply supported with a central load; end restraint makes this conservative
  `[PRACTICE]`.
- 50% of the flatness requirement allocated to fixture-induced effects `[PRACTICE]`.

### 15. Diagram

```
     THE PRIMARY TRIAD AS OBJECTIVES
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  SIX DEGREES OF FREEDOM, EACH CONSTRAINED ONCE

     3-2-1 SCHEME
       PRIMARY   ● ● ●   3 points → Z, RotX, RotY
       SECONDARY ● ●     2 points → Y, RotZ
       TERTIARY  ●       1 point  → X
       ─────────────────────────────────────
       6 CONTACTS → 6 DOF   ✓ DETERMINATE

   ┌──────────────────────────────────────────────┐
   │ 0 constraints → the part moves               │
   │ 1 constraint  → correct                      │
   │ 2+            → OVER-CONSTRAINED             │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THREE POINTS ALWAYS FIT. FOUR DO NOT.

   ✓ THREE PADS              ✗ FOUR PADS
     ●─────────●               ●─────────●
      ╲       ╱                │         │
       ╲  ●  ╱                 │         │
        ╲───╯                  ●─────────●

   Any part form error is       The part ROCKS between
   accommodated. The part       diagonal pairs — OR the
   sits solidly, every time.    clamps PULL IT FLAT and
                                it springs back.

   ┌──────────────────────────────────────────────┐
   │ MORE LOCATORS IS NOT MORE ACCURATE.          │
   │ IT IS LESS DETERMINATE.                      │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE STATICS TEST — DIAGNOSTIC IN ONE LINE

   3 PADS                    4 PADS
   3 unknown reactions       4 unknown reactions
   3 equations               3 equations
   ✓ SOLVABLE                ✗ INDETERMINATE

   ┌──────────────────────────────────────────────┐
   │ IF YOU CANNOT CALCULATE THE REACTIONS FROM   │
   │ ΣF=0 AND ΣM=0 ALONE, IT IS OVER-CONSTRAINED. │
   │                                              │
   │ The mathematical signature of a physical     │
   │ problem. Takes seconds; needs no knowledge   │
   │ of the part.                                 │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE WORKED EXAMPLE — WHAT THE 4TH PAD COST

   Force spent bending the casting   336 N
     = 15.3 % of the total clamp force

   Base form error transferred to
     the machined face               0.080 mm
     vs 0.020 allocation             4.0 × ✗

   AND THE FAILURE WAS INTERMITTENT:
     some castings ROCKED    → position error
     some were PULLED FLAT   → flatness error
     WHICH ONE DEPENDED ON THE INDIVIDUAL CASTING

   ┌──────────────────────────────────────────────┐
   │ RANDOM RESULTS WITH NO PATTERN, ON A FIXTURE │
   │ THAT MEASURES CORRECTLY, SHOULD PROMPT AN    │
   │ OVER-CONSTRAINT CHECK.                       │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE FIX — AND WHY IT MUST BE THE RIGHT ELEMENT

   3 PADS ONLY              3 PADS + ADJUSTABLE
     δ = 0.0636 mm            SUPPORT AT MID-SPAN
     ✗ 3.18 × allocation      δ = 0.00795 mm
                              ✓ 39.7 % allocation

   ✗ PUTTING THE 4TH PAD BACK would fix the
     deflection AND REINTRODUCE THE ORIGINAL FAULT.

   ┌──────────────────────────────────────────────┐
   │ AN ADJUSTABLE SUPPORT SET AFTER LOCATING     │
   │ ADDS STIFFNESS WITHOUT ADDING CONSTRAINT.    │
   │                                              │
   │ THIS IS THE WHOLE REASON THE SUPPORT/LOCATOR │
   │ DISTINCTION EXISTS.                          │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE HIERARCHY OF FAILURE — AND DETECTION SPEED

   LOCATION fails  → consistent error → FOUND FAST
   CLAMPING fails  → intermittent     → found erratically
   SUPPORT  fails  → no movement at   → FOUND SLOWLY,
                     all, just wrong    blamed on tooling
                     dimensions

   ┌──────────────────────────────────────────────┐
   │ A LOCATION FAILURE ANNOUNCES ITSELF.         │
   │ A SUPPORT FAILURE HIDES.                     │
   │                                              │
   │ THAT IS WHY SUPPORT IS THE OBJECTIVE MOST    │
   │ OFTEN OMITTED.                               │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-7100 — LOCATING SCHEME
STANDARD: ASME Y14.5-2018
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: LOCATING SCHEME IS 3-2-1 AND DETERMINATE.
        PRIMARY   PADS ITEMS 4, 5, 6   (3 POINTS)
        SECONDARY PINS ITEMS 9, 10     (2 POINTS)
        TERTIARY  STOP ITEM 12         (1 POINT)
        TOTAL 6 CONSTRAINTS FOR 6 DEGREES OF FREEDOM.

NOTE 2: DO NOT ADD A FOURTH PRIMARY PAD UNDER ANY
        CIRCUMSTANCES. THE COMPONENT BASE IS AS-CAST
        WITH UP TO 0.08 mm FORM VARIATION. A FOURTH
        FIXED PAD WOULD OVER-CONSTRAIN THE COMPONENT
        AND TRANSFER THAT FORM ERROR TO THE MACHINED
        FACE.

NOTE 3: SUPPORT ITEM 15 IS ADJUSTABLE AND MUST BE SET
        AFTER THE COMPONENT IS SEATED ON PADS ITEMS
        4, 5 AND 6. IT MUST CONTACT WITHOUT LIFTING.
        IT IS A SUPPORT, NOT A LOCATOR — IT ADDS
        STIFFNESS, NOT CONSTRAINT.

NOTE 4: VERIFY WITH A 0.02 mm FEELER THAT THE
        COMPONENT CONTACTS ALL THREE PRIMARY PADS
        BEFORE CLAMPING.
```

Note 2 is the one that matters. `[PRACTICE]` **A fourth pad is exactly the sort of "improvement" a
well-meaning maintenance fitter adds** when a part seems to rock, and stating both the prohibition and
the reason is the only thing that prevents it.

### 17. CAD workflow
1. Model the **six locating contacts** first and label each with the DOF it constrains
2. Produce the **DOF audit table** from the model and verify every row reads exactly 1
3. Run the **statics check** — count contacts against available equations
4. Add **adjustable supports** as a visually distinct component type, never as locators
5. Verify supports **contact without lifting** by checking clearance in the seated position
6. Calculate **deflection** between primary contacts and add supports where needed
7. Add clamps, each with a **reaction directly opposite**

`[PRACTICE]` Step 1 — labelling each contact with the DOF it constrains — is a five-minute discipline
that makes over-constraint visible in the model tree rather than in production.

### 18. GD&T application

```
STANDARD: ASME Y14.5-2018

  THE 3-2-1 SCHEME IS THE PHYSICAL REALISATION OF
  THE DATUM REFERENCE FRAME.

    PRIMARY pads   → DATUM A  (3 points, a plane)
    SECONDARY pins → DATUM B  (2 points, a line)
    TERTIARY stop  → DATUM C  (1 point)

  ┌────────────────────────────────────────────┐
  │ THE CORRESPONDENCE IS EXACT AND IT IS NOT  │
  │ A COINCIDENCE.                             │
  │                                            │
  │ ASME Y14.5 defines a primary planar datum  │
  │ as being established by a MINIMUM OF THREE │
  │ POINTS OF CONTACT — which is precisely the │
  │ determinacy requirement.                   │
  │                                            │
  │ So a fixture with FOUR primary pads is not │
  │ merely over-constrained mechanically; it   │
  │ does not correctly simulate the datum      │
  │ feature either. THE MECHANICAL AND THE     │
  │ GEOMETRIC ARGUMENTS AGREE.                 │
  │                                            │
  │ Full treatment at L21.                     │
  └────────────────────────────────────────────┘
```

### 19. Manufacturing method
Standard hardened-locator route (L0.5.3): machine soft, harden 58–62 HRC, fit, **grind the three primary
pads in one operation** so they are coplanar.

`[PRACTICE]` Grinding the pads in one setup matters: three pads ground separately may not be coplanar,
and although three points always define *a* plane, a plane tilted relative to the fixture datums
introduces an orientation error. **Determinacy protects against form error, not against the fixture's own
manufacturing error.**

Adjustable supports are bought-in units (L0.5.2), locked after setting.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Number of primary contacts | Visual and drawing review | Exactly 3 |
| DOF audit | Design review table | Every row = 1 |
| Pad coplanarity | CMM / surface plate | 0.01 mm |
| Contact on all three pads | 0.02 mm feeler | Contact at all three |
| Support contacts without lifting | Indicate while setting | No rise |
| Repeatability | Load 10 parts, indicate | ≤0.02 mm spread |
| Deflection under load | Apply the cutting force, indicate | ≤ allocation |
| No incidental contacts | Feeler round the part | None |

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Four primary pads** | Over-constraint; form error transferred |
| 2 | Adding a pad because the part **seems to rock** | The rock is the symptom of over-constraint, not the cure |
| 3 | Not performing the **DOF audit** | Under- or over-constraint unnoticed |
| 4 | Not applying the **statics test** | The diagnostic that takes seconds is skipped |
| 5 | **Fixed** supports instead of adjustable | Becomes a locator |
| 6 | Setting supports **before** locating | Lifts the part off the primary |
| 7 | Locating on **as-cast surfaces** where a machined feature exists | Unnecessary variation |
| 8 | Omitting the **deflection calculation** | Support requirement invisible |
| 9 | Pads ground **separately** | Not coplanar; orientation error |
| 10 | Treating random results as **process noise** | Over-constraint mis-diagnosed |
| 11 | Not bounding clamp force **above** | Distortion |
| 12 | Assuming three objectives are **independent** | They couple, in both directions |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Random errors with no pattern | Over-constraint plus part form variation | Count primary contacts | Remove to 3 | DOF audit |
| Part rocks on the pads | Four pads | Feeler at each pad | Remove one | Design rule R3 |
| Machined face out of flatness on release | Part pulled flat by clamps | Measure clamped vs free | 3-point location | Design rule R2 |
| Deflection after removing a pad | Span increased | Calculate δ | Adjustable support | Design rule R4 |
| Support has become a locator | Set before seating, or wound tight | Indicate while setting | Reset after locating | Design rule R4 |
| Consistent orientation error | Pads not coplanar | CMM the pads | Regrind together | Grind in one operation |
| Part position varies with clamp force | Clamp acting as locator | Vary force, measure | Fit a locator | L2.1.1 R2 |
| Part contacts only two pads | Pad heights wrong | Feeler at each | Regrind | Coplanarity check |

### 23. Design checklist
- [ ] Has the **DOF audit** been done, with every row reading exactly 1?
- [ ] Has the **statics test** been applied — contacts versus equations?
- [ ] Are there **exactly three** primary contacts?
- [ ] Are any additional contacts **adjustable supports**, not fixed pads?
- [ ] Are supports **set after locating** and prevented from lifting?
- [ ] Has **deflection** been calculated and allocated 20–25% of tolerance?
- [ ] Are the three primary pads **ground coplanar in one operation**?
- [ ] Is clamp force bounded **both above and below**?
- [ ] Does every clamp have a **reaction directly opposite**?
- [ ] Is location on **machined features** wherever the part's form varies?
- [ ] Is there a drawing note **prohibiting a fourth primary pad**, with the reason?
- [ ] Will **repeatability be measured** at commissioning?

### 24. Beginner exercise
**E2.2.1-B** — A rectangular plate is located on four pads, two pins and one end stop.
(a) State how many degrees of freedom a free body has, and name them.
(b) Produce a DOF audit table for this arrangement.
(c) Identify the over-constraint and state which DOF is affected.
(d) Apply the statics test: count the unknown vertical reactions and the available equations.
(e) State the correction and explain why adding a support instead of a pad is different.

### 25. Intermediate exercise
**E2.2.1-I** — An aluminium casting (E = 70,000 N/mm², mass 5.2 kg) has a base 260 × 150 mm with a
measured form variation of 0.06 mm and a local bending stiffness of 3,100 N/mm. It is currently located
on four pads. The machined face requires 0.05 mm flatness, of which 50% may be allocated to fixture
effects. The section under the cut is 150 mm wide and 10 mm thick, with a 220 mm span and a 480 N
downward cutting force.
(a) Perform the DOF audit and the statics test.
(b) Calculate the force required to pull the part flat.
(c) Calculate the flatness error transferred to the machined face and assess it against the allocation.
(d) State the corrected locating arrangement.
(e) Calculate the second moment of area and the deflection with three pads and no support.
(f) Determine whether a support is needed, and calculate the deflection with one adjustable support at
mid-span.
(g) State the total percentage of the flatness allocation consumed by the corrected design.
(h) Explain why the corrected design also improves the clamping objective.

### 26. Advanced exercise
**E2.2.1-A** — A steel weldment (mass 34 kg) has an as-welded base 620 × 340 mm with a measured form
variation of 0.35 mm and a local bending stiffness of 6,800 N/mm. It requires a machined face flat within
0.08 mm and four bores positioned within ±0.10 mm. The proposed fixture has six fixed pads, two pins and
four clamps at 2,200 N each. The section under the heaviest cut is 340 mm wide by 20 mm thick, spanning
480 mm between the outermost pads, with a 1,450 N downward cutting force. Steel E = 200,000 N/mm².
(i) Perform the DOF audit and identify all over-constraints.
(ii) Apply the statics test and state the degree of indeterminacy.
(iii) Calculate the force required to pull the weldment flat and express it as a percentage of the total
clamp force.
(iv) Calculate the flatness error transferred and assess it against a 50% allocation.
(v) Propose a corrected locating scheme and justify every contact.
(vi) Calculate the deflection of the corrected scheme under the cutting load.
(vii) Determine how many adjustable supports are needed and at what spacing.
(viii) Explain why a weldment with 0.35 mm of form variation is a stronger case for strict determinacy
than a casting with 0.08 mm, and quantify the difference.
(ix) The customer proposes stress-relieving and machining the base flat instead. Compare that option
against the fixture correction, stating what each costs and what each achieves.
(x) Write the four drawing notes for the corrected locating scheme.

### 27. Interview questions
1. *"How many locating points does a part need, and why?"*
   **Answer:** Six, one for each degree of freedom — three translations and three rotations. The standard
   arrangement is 3-2-1: three points on the primary plane, which constrain one translation and two
   rotations; two points on the secondary, constraining another translation and a rotation; and one point
   on the tertiary for the last translation. The important part is that each degree of freedom must be
   constrained *exactly* once. Fewer and the part moves; more and you have over-constraint, which means
   the part either rocks between different sets of contacts or gets forced flat by the clamps and springs
   back afterwards. So more locators is not more accurate — it is less determinate.
2. *"A part rocks in the fixture. What do you do?"*
   **Answer:** I would resist the instinct to add another contact, because rocking is usually the symptom
   of already having too many. The first thing I would do is count the primary contacts: if there are
   four pads under a base, that is almost certainly the cause, because three points always fit any
   surface and four do not, so the part sits on whichever three suit its particular form error. The
   statics test confirms it in one line — four unknown reactions against three available equations means
   the reactions cannot be calculated from statics alone, which is the mathematical signature of the
   physical problem. The fix is to remove one pad. If the reason the fourth pad was there was genuine —
   the part needs stiffness or load spreading — then it comes back as an *adjustable* support set after
   the part is seated, which adds stiffness without adding constraint.

### 28. Expert questions
1. *"Explain why over-constraint is worse for a stiff part than a flexible one."*
   **Answer:** It is counter-intuitive and it follows directly from the force required to close the gap.
   When a part with form error sits on four coplanar pads, there is a gap at one of them. The clamps
   either leave the part rocking, or they close that gap by deforming the part. **The force needed to
   close it is the part's local stiffness multiplied by the gap** — so a stiffer part requires a *larger*
   force to pull flat, stores more elastic energy, and springs back harder on release.
   In the example in this lesson, a cast iron base with a stiffness of 4,200 newtons per millimetre and
   an 0.08 mm form error needed 336 newtons to pull flat, which was fifteen per cent of the total clamp
   force. Double the stiffness and you double the force. A genuinely rigid part — a thick steel block,
   say — might require several kilonewtons, which the clamps may not even be able to deliver, in which
   case the part simply rocks instead and you get a position error rather than a flatness error.
   There is a second effect that compounds it. **A flexible part conforms**, so the deformation is
   spread over a large area and the local contact stresses stay modest. A stiff part concentrates the
   whole deformation near the contacts, which raises local contact stress and can mark the part or the
   pads.
   And a third, which matters for diagnosis: **a flexible part tends to be pulled flat, giving a
   consistent flatness error, while a stiff part tends to rock, giving a random position error.** So the
   same defect presents differently depending on part stiffness, and the random presentation is much
   harder to trace because it looks like process noise.
   The practical conclusion is that people often reason the opposite way — "the part is rigid, so a
   fourth pad will not hurt it". **Rigidity is exactly what makes over-constraint expensive**, because
   rigidity is the resistance to being forced into a shape it does not naturally take. The only genuine
   protection is determinacy, and determinacy costs nothing.
2. *"When is over-constraint acceptable?"*
   **Answer:** When it is **deliberate, understood, and the alternative is worse** — which is a narrower
   set of circumstances than it is usually invoked for, but a real one.
   The clearest legitimate case is **a large or flexible part that sags under its own weight**. A
   three-metre weldment on three pads will deflect between them, and no amount of determinacy helps
   because the problem is gravity rather than location. There you add supports — but the correct answer
   is **adjustable supports set after the part is seated**, which is not over-constraint at all, because
   they add stiffness without determining position. The distinction is whether the extra contact
   *decides where the part is*. If it is wound up until tight, it has become a locator and you have
   over-constrained the part; if it is brought into contact and locked, you have not.
   The second case is where **the part's own form is controlled well enough that the redundancy costs
   nothing**. A precision-ground plate flat within five microns sitting on four pads will not rock
   meaningfully, because the gap is smaller than the elastic compliance of the contacts. I would still
   prefer three, because it costs nothing to prefer three, but I would not reject a design over it.
   The third, and the one worth thinking hardest about, is **where load capacity genuinely requires more
   contacts**. A very heavy part concentrating its weight on three pads may exceed the contact stress the
   part surface can take. There the answer is usually **larger pads rather than more pads** — increase
   the contact area, not the number of contact points. Three large pads remain determinate; four small
   ones do not.
   What I would not accept is the two rationalisations one hears most often. **"It feels more stable"** —
   that is exactly backwards, because the rocking that feels like instability is caused by the extra
   contact. And **"the part is rigid so it does not matter"** — as I said, rigidity makes it worse, not
   better.
   The honest test I apply is: **can I still calculate the reaction at every contact from statics
   alone?** If yes, it is determinate. If no, I need a positive reason for the redundancy and a
   deliberate treatment of it — usually by making the extra contacts adjustable, so they carry load
   without carrying position.

### 29. Summary
The three duties from L2.1.1 become measurable objectives when they are given acceptance criteria, and
the criterion for location is that all six degrees of freedom must be constrained exactly once — the
3-2-1 scheme providing three contacts on the primary plane, two on the secondary and one on the tertiary.
Constraining a degree of freedom more than once is over-constraint, and its diagnostic signature is
mathematical: if the reaction at each contact cannot be calculated from ΣF=0 and ΣM=0 alone, the
arrangement is indeterminate. Over-constraint converts the part's own form error into either a position
error, as the part rocks between different sets of contacts, or a stress and subsequent springback, as
the clamps pull it flat — and which occurs depends on the individual part, which is why the failure
presents as random results with no pattern. Counter-intuitively the problem is worse for a stiff part,
because the force needed to close the gap is the part's stiffness times the gap. In the worked example a
fourth pad under a cast iron base caused 336 N of clamp force to be spent deforming the casting and
transferred 0.080 mm of base form error to the machined face, four times the allocation; removing it
eliminated the deforming force entirely, and the deflection problem that removal created was solved with
an adjustable support set after locating — which adds stiffness without adding constraint, and is
precisely why the support/locator distinction exists. Finally, the three primary objectives are coupled:
fixing the location objective improved the clamping objective without further change, which is the same
coupling that produces the conflicts resolved in L2.2.6.

### 30. Key takeaways
- **Six degrees of freedom, each constrained exactly once.**
- **More locators is not more accurate — it is less determinate.**
- **Three points always fit. Four do not.**
- **The statics test is diagnostic**: if reactions are not solvable from ΣF=0 and ΣM=0, it is
  over-constrained.
- **Over-constraint converts part form error into position error or stress.**
- **It is worse for a stiff part**, because the force to pull flat is stiffness × gap.
- **A stiff part rocks; a flexible part is pulled flat** — the same defect, different presentation.
- **Random results with no pattern** should prompt an over-constraint check.
- **An adjustable support set after locating adds stiffness without adding constraint.**
- **Larger pads, not more pads**, when contact stress is the issue.
- **Grind the three primary pads coplanar in one operation** — determinacy protects against part form
  error, not against the fixture's own manufacturing error.
- **A location failure announces itself; a support failure hides.**
- **The three primary objectives are coupled** — in both directions.

---

## LESSON L2.2.2 — THE METROLOGICAL TRIAD

### 1. Lesson title
**L2.2.2 — Rigidity, repeatability and accuracy: three different properties, and why repeatability comes first**

### 2. Learning objective
By the end of this lesson you will be able to define rigidity, repeatability and accuracy precisely and
distinguish them, explain why repeatability is more valuable than accuracy in a fixture, calculate each
from measured data, apply the systematic-versus-random error distinction to diagnose which property has
failed, design a repeatability study, and specify acceptance criteria for all three.

### 3. Prerequisites
L2.2.1 (determinate location), L1.1.1 (structural loop, stiffness in series), L1.2.4 (error budget),
L0.3.4 (deflection).

### 4. Why the topic matters
These three words are used almost interchangeably in ordinary speech and they mean quite different
things. **Confusing repeatability with accuracy is the most common metrological error in this field**,
and it leads to fixtures being scrapped that could have been corrected in ten minutes.

```
   THE DISTINCTION, IN ONE PICTURE

   REPEATABLE, NOT ACCURATE    ACCURATE, NOT REPEATABLE
        ┌─────────┐                 ┌─────────┐
        │       ●●│                 │  ●   ●  │
        │  ✛    ●●│                 │ ✛  ●    │
        │         │                 │   ●   ● │
        └─────────┘                 └─────────┘
     tight cluster, wrong        scattered around the
     place                       right place

     ✓ CORRECTABLE — shift          ✗ NOT CORRECTABLE
       the offset once                — there is nothing
                                        to shift

   ┌──────────────────────────────────────────────┐
   │ REPEATABILITY CANNOT BE FIXED BY ADJUSTMENT. │
   │ ACCURACY CAN.                                │
   │                                              │
   │ SO REPEATABILITY IS THE MORE VALUABLE        │
   │ PROPERTY, AND IT IS THE ONE TO SPECIFY AND   │
   │ MEASURE FIRST.                               │
   └──────────────────────────────────────────────┘
```

This was stated as principle 29 in Module 1.1. This lesson establishes **why**, and what to do about it.

### 5. Simple explanation

```
   RIGIDITY  — does it move under load?
     Apply a force, measure the deflection.
     A rigid fixture deflects little.
     UNITS: N/mm (stiffness) or mm (deflection)

   REPEATABILITY — does it give the same answer
                   every time?
     Load the same part ten times, measure ten
     times. Look at the SPREAD.
     UNITS: mm (spread)

   ACCURACY — is the answer right?
     Compare the measured position with the
     intended position. Look at the OFFSET.
     UNITS: mm (deviation from nominal)
```

The relationships:

```
   RIGIDITY affects REPEATABILITY
     A floppy fixture gives different answers
     depending on how hard the cut happens to be.

   RIGIDITY affects ACCURACY
     A fixture that deflects consistently under a
     consistent load gives a consistent error —
     which is an ACCURACY problem, not a
     repeatability one.

   REPEATABILITY does NOT depend on ACCURACY
     A fixture can be perfectly repeatable and
     perfectly wrong.

   ┌──────────────────────────────────────────────┐
   │ A CONSISTENT DEFLECTION IS AN ACCURACY       │
   │ PROBLEM. A VARYING DEFLECTION IS A           │
   │ REPEATABILITY PROBLEM.                       │
   │                                              │
   │ THE SAME PHYSICAL CAUSE — LACK OF RIGIDITY — │
   │ PRODUCES EITHER, DEPENDING ON WHETHER THE    │
   │ LOAD IS CONSISTENT.                          │
   └──────────────────────────────────────────────┘
```

### 6. Engineering explanation

**OBJECTIVE 4 — RIGIDITY**

```
   DEFINITION
     Resistance to deflection under applied load.
     k = F/δ    (N/mm)

   WHY IT MATTERS (L1.1.1)
     The fixture sits IN THE STRUCTURAL LOOP:
       tool → spindle → column → base → table
            → FIXTURE → workpiece

     Compliances add in series:
       1/k_total = Σ 1/k_i
     → THE SOFTEST ELEMENT DOMINATES

   ACCEPTANCE CRITERIA  [PRACTICE]
     - fixture deflection under the maximum
       process load ≤ its allocation in the error
       budget (typically 10-20 %)
     - measured, not assumed
```

`[PRACTICE]` **A useful sanity check**: the fixture should be **at least as stiff as the machine's own
loop**, and preferably several times stiffer, because a fixture that is the softest element in the loop
becomes the dominant error source. L1.1.1's example had a fixture carrying 71% of the total deflection.

**OBJECTIVE 5 — REPEATABILITY**

```
   DEFINITION
     The closeness of agreement between successive
     results under UNCHANGED conditions.

   WHAT "UNCHANGED" MEANS MATTERS
     Same part, same fixture, same operator, same
     method, short interval.

   MEASURED AS
     The SPREAD of repeated measurements —
     typically expressed as the range, or as ±3σ.

   ACCEPTANCE CRITERIA  [PRACTICE]
     - typically ≤0.02 mm for a machining fixture
       [GUIDE]
     - MEASURED at commissioning by a repeat-load
       study
     - specified BEFORE the fixture is built
```

**THE REPEATABILITY STUDY — HOW TO DO IT PROPERLY**

```
   THE MINIMUM VALID STUDY  [PRACTICE]

   1. Take ONE part — the same part throughout, so
      part variation is excluded
   2. Load it, clamp it, indicate a datum feature
   3. UNLOAD COMPLETELY — the unload is essential,
      because you are testing the loading process
   4. Repeat at least 10 times
   5. Record all ten readings
   6. Report the RANGE and the standard deviation

   ┌──────────────────────────────────────────────┐
   │ THE MOST COMMON ERROR IS NOT UNLOADING       │
   │ BETWEEN READINGS. Indicating the same seated │
   │ part ten times measures the INDICATOR's      │
   │ repeatability, not the FIXTURE's.            │
   └──────────────────────────────────────────────┘

   REFINEMENTS
     - repeat with a second operator → reveals
       method dependence
     - repeat after a shift → reveals thermal
       effects
     - repeat with deliberate chip contamination →
       reveals sensitivity to housekeeping
```

**OBJECTIVE 6 — ACCURACY**

```
   DEFINITION
     The closeness of a result to the TRUE or
     INTENDED value.

   MEASURED AS
     The deviation of the mean of repeated
     measurements from the nominal.

   ACCEPTANCE CRITERIA  [PRACTICE]
     - fixture-induced positional error within its
       share of the part tolerance (10-20 %)
     - verified against a MASTER or by CMM

   ┌──────────────────────────────────────────────┐
   │ ACCURACY IS CORRECTABLE BY ADJUSTMENT.       │
   │                                              │
   │ A fixture that is repeatable to 0.01 mm but  │
   │ 0.15 mm out of position is fixed by changing │
   │ ONE OFFSET. A fixture that scatters by       │
   │ 0.15 mm cannot be fixed at all.              │
   └──────────────────────────────────────────────┘
```

**SYSTEMATIC VERSUS RANDOM ERROR — THE DIAGNOSTIC FRAMEWORK**

This is the practical content of the lesson and it unifies several earlier diagnostics.

```
   SYSTEMATIC ERROR (bias)
     Same magnitude, same direction, every time.
     → an ACCURACY problem
     → CORRECTABLE by adjustment or offset
     Causes: locator position error, setting-
     feature-to-locator error (L1.2.4), consistent
     deflection, thermal steady state

   RANDOM ERROR (scatter)
     Varies unpredictably.
     → a REPEATABILITY problem
     → NOT correctable by adjustment
     Causes: chips, variable clamp force, worn
     locators, over-constraint (L2.2.1), operator
     technique

   ┌──────────────────────────────────────────────┐
   │ THE FIRST QUESTION FOR ANY DIMENSIONAL       │
   │ PROBLEM IS: CONSISTENT OR VARYING?           │
   │                                              │
   │ CONSISTENT → accuracy → adjust something     │
   │ VARYING    → repeatability → find the        │
   │              physical cause                  │
   │                                              │
   │ This is the same discrimination as L1.2.1's  │
   │ "all parts wrong the same way" and L1.3.2's  │
   │ "repeatable part to part". IT KEEPS          │
   │ RECURRING BECAUSE IT IS THE FUNDAMENTAL      │
   │ SPLIT.                                       │
   └──────────────────────────────────────────────┘
```

**COMBINING THE TWO — TOTAL ERROR**

```
   Total error = |systematic| + random

   or, where the contributions are independent and
   an RSS treatment is justified (L23.4):

   Total = √(systematic² + random²)

   [PRACTICE] Arithmetic summation at design stage;
   RSS only with justification.
```

**WHY REPEATABILITY IS WORTH MORE**

```
   TWO FIXTURES, SAME TOTAL ERROR OF 0.10 mm

   FIXTURE A                  FIXTURE B
   systematic 0.09            systematic 0.01
   random     0.01            random     0.09
   ─────────────────          ─────────────────
   total      0.10            total      0.10

   FIXTURE A: adjust the offset by 0.09
     → residual error 0.01 mm
     → NINE TIMES BETTER, in ten minutes

   FIXTURE B: nothing to adjust
     → residual error 0.09 mm
     → requires finding and fixing a physical cause

   ┌──────────────────────────────────────────────┐
   │ IDENTICAL TOTAL ERROR. COMPLETELY DIFFERENT  │
   │ PROSPECTS.                                   │
   │                                              │
   │ THIS IS WHY REPEATABILITY IS SPECIFIED AND   │
   │ MEASURED FIRST, AND WHY A REPEATABILITY      │
   │ FAILURE IS THE MORE SERIOUS FINDING.         │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Rigidity / stiffness** | Resistance to deflection under load, k = F/δ (N/mm) |
| **Compliance** | The reciprocal of stiffness, δ/F (mm/N) |
| **Repeatability** | Agreement between successive results under unchanged conditions |
| **Reproducibility** | Agreement when conditions change — different operator, day, equipment |
| **Accuracy** | Closeness to the true or intended value |
| **Bias / systematic error** | Consistent deviation in one direction |
| **Random error / scatter** | Unpredictable variation |
| **Range** | Largest minus smallest in a set of readings |
| **Standard deviation (σ)** | Statistical measure of spread |
| **Repeatability study** | Structured repeat-loading test |
| **Master** | Certified artefact for verifying accuracy |
| **Structural loop** | The closed path of elements carrying cutting force |

### 8. Principle

> **RIGIDITY, REPEATABILITY AND ACCURACY ARE THREE DIFFERENT PROPERTIES.** Rigidity is resistance to
> load, repeatability is consistency, accuracy is correctness.
> **REPEATABILITY CANNOT BE FIXED BY ADJUSTMENT; ACCURACY CAN** — so repeatability is the more valuable
> property and the one to specify and measure first.
> **A CONSISTENT DEFLECTION IS AN ACCURACY PROBLEM; A VARYING DEFLECTION IS A REPEATABILITY PROBLEM.**
> The same lack of rigidity produces either, depending on whether the load is consistent.
> **THE FIRST DIAGNOSTIC QUESTION IS ALWAYS: CONSISTENT OR VARYING?** Consistent means adjust something;
> varying means find a physical cause.
> **A REPEATABILITY STUDY MUST UNLOAD BETWEEN READINGS**, or it measures the indicator rather than the
> fixture.

### 9. Industrial application

**Specifying the three properties**

```
   FIXTURE SPECIFICATION EXTRACT  [PROJ]

   RIGIDITY
     Fixture deflection under the maximum process
     load of 3,200 N shall not exceed 0.008 mm at
     the cutting point.
     VERIFICATION: apply a static load, indicate.

   REPEATABILITY
     Part-to-part positional repeatability shall
     not exceed 0.020 mm (range over 10 loadings
     of the same part).
     VERIFICATION: repeat-load study at
     commissioning, second operator, both shifts.

   ACCURACY
     Fixture-induced positional error shall not
     exceed 0.030 mm relative to the nominal datum
     positions.
     VERIFICATION: CMM against the fixture datums,
     plus first-article part measurement.

   ┌──────────────────────────────────────────────┐
   │ ALL THREE ARE SEPARATELY SPECIFIED, WITH     │
   │ SEPARATE VERIFICATION METHODS.               │
   │                                              │
   │ A specification that says only "accurate to  │
   │ 0.03 mm" is ambiguous — it does not say      │
   │ whether that is bias, scatter or both.       │
   └──────────────────────────────────────────────┘
```

**The diagnostic that resolves most fixture disputes**

```
SITUATION
  Parts are 0.08 mm out of position against a
  ±0.06 mm requirement.

STEP 1 — MEASURE TEN PARTS
  Results: 0.078, 0.081, 0.079, 0.082, 0.077,
           0.080, 0.079, 0.081, 0.078, 0.080

  Mean  = 0.0795 mm
  Range = 0.005 mm

  → SYSTEMATIC 0.0795, RANDOM 0.005
  → THIS IS AN ACCURACY PROBLEM.

STEP 2 — THE IMPLICATION
  The fixture is repeatable to 0.005 mm, which is
  excellent. It is simply in the wrong place.

  FIX: adjust the work offset by 0.0795 mm.
  Residual error: 0.005 mm = 8.3 % of tolerance.
  TIME REQUIRED: ten minutes.

CONTRAST — IF THE RESULTS HAD BEEN
  0.02, 0.14, 0.06, 0.11, 0.03, 0.13, 0.05, 0.09,
  0.12, 0.04
  Mean  = 0.079 mm   (the same!)
  Range = 0.120 mm

  → SYSTEMATIC 0.079, RANDOM 0.120
  → THIS IS A REPEATABILITY PROBLEM.

  Adjusting the offset by 0.079 leaves a scatter of
  ±0.060 mm, which still fails.
  THE PHYSICAL CAUSE MUST BE FOUND.

┌──────────────────────────────────────────────┐
│ THE TWO DATA SETS HAVE THE SAME MEAN AND     │
│ COMPLETELY DIFFERENT PROSPECTS.              │
│                                              │
│ REPORTING ONLY THE MEAN — WHICH IS WHAT      │
│ "PARTS ARE 0.08 OUT" DOES — HIDES THE ONLY   │
│ INFORMATION THAT MATTERS.                    │
└──────────────────────────────────────────────┘
```

### 10. Design rules
- **R1** — Specify **rigidity, repeatability and accuracy separately**, with separate verification
  methods `[PRACTICE]`.
- **R2** — **Specify repeatability before the fixture is built**, and measure it at commissioning.
- **R3** — A repeatability study must **unload completely between readings**.
- **R4** — Use **at least 10 loadings**, and repeat with a second operator.
- **R5** — Report **range and standard deviation**, not just a mean.
- **R6** — Ensure the fixture is **not the softest element** in the structural loop.
- **R7** — Allocate rigidity a defined share of the **error budget** (typically 10–20%).
- **R8** — Diagnose every dimensional problem by asking **consistent or varying** first.
- **R9** — Treat a **repeatability failure as more serious** than an accuracy failure of the same
  magnitude.
- **R10** — Eliminate the **causes of scatter** — chips, variable clamp force, wear, over-constraint —
  rather than compensating for them.

### 11. Rules of thumb
- **Rigidity is resistance; repeatability is consistency; accuracy is correctness.**
- **Repeatability cannot be adjusted. Accuracy can.**
- **Consistent deflection = accuracy problem. Varying deflection = repeatability problem.**
- **Ask "consistent or varying?" first**, every time.
- **A repeatability study must unload between readings.**
- **Ten loadings minimum**; report the range, not just the mean.
- Machining fixture repeatability target **≤0.02 mm** `[GUIDE]`.
- **The fixture should not be the softest element** in the loop.
- **Two fixtures with the same total error can have completely different prospects.**
- **Reporting only the mean hides the information that matters.**

### 12. Formulae

**Stiffness and compliance**
```
k = F/δ                      (N/mm)
Compliance = 1/k             (mm/N)
Series:  1/k_total = Σ 1/k_i
```

**Repeatability from a study**
```
Range R = x_max − x_min
Standard deviation:
   σ = √( Σ(xᵢ − x̄)² / (n−1) )
Repeatability (commonly) = ±3σ  or the range
```

**Accuracy (bias)**
```
Bias = x̄ − x_nominal
```

**Total error**
```
Arithmetic:  E_total = |bias| + R
RSS:         E_total = √(bias² + σ_eff²)
[PRACTICE] arithmetic at design stage
```

**Correctable fraction**
```
Correctable = |bias| / E_total
Irreducible = R / E_total
→ the second is the number that matters
```

| Variable | Meaning | Unit |
|---|---|---|
| k | Stiffness | N/mm |
| δ | Deflection | mm |
| R | Range of repeated readings | mm |
| σ | Standard deviation | mm |
| x̄ | Mean of readings | mm |

### 13. Worked numerical example

**Problem:** Two candidate fixtures are assessed by repeat-load study. Determine the rigidity,
repeatability and accuracy of each, decide which is preferable, calculate the effect of correction, and
establish the acceptance position.

```
GIVEN:
  REQUIREMENT                                    [PROJ]
    Part positional tolerance = ±0.05 mm
                                (band 0.100 mm)
    Machine, tooling, thermal already consume
                              = 0.032 mm
    Nominal position of the checked feature
                              = 40.000 mm

  FIXTURE A — repeat-load study, 10 loadings [PROJ]
    40.061, 40.059, 40.062, 40.058, 40.060,
    40.063, 40.059, 40.061, 40.060, 40.062

  FIXTURE B — repeat-load study, 10 loadings [PROJ]
    40.008, 40.031, 39.994, 40.022, 40.003,
    40.029, 39.998, 40.017, 40.026, 40.001

  RIGIDITY TEST                                  [PROJ]
    Static load applied      = 2,800 N
    Deflection, Fixture A    = 0.006 mm
    Deflection, Fixture B    = 0.019 mm

REQUIRED:
  (a) Mean, range and standard deviation for each
  (b) Bias and repeatability for each
  (c) Stiffness of each
  (d) Total error before correction
  (e) Total error after offset correction
  (f) Assessment against the tolerance budget
  (g) Which fixture is preferable, and why
  (h) Engineering conclusion

ASSUMPTION:
  1. The ten readings are from a valid repeatability
     study with COMPLETE UNLOADING between each
     reading. Without that the figures would measure
     the indicator, not the fixture. [PRACTICE]
  2. Same part throughout, so part-to-part variation
     is excluded and what is measured is the
     fixture's loading repeatability. [PRACTICE]
  3. Repeatability expressed as the RANGE, which is
     appropriate and conservative for n = 10. The
     standard deviation is given alongside.
     [PRACTICE]
  4. Bias is assumed CORRECTABLE by a work offset
     adjustment. This is valid where the bias is a
     pure translation; a bias that varies across the
     part would indicate an orientation error and
     would NOT be fully correctable by a single
     offset. [PRACTICE]
  5. Arithmetic summation of bias and range at
     design stage. [PRACTICE]

FORMULA:
  x̄ = Σxᵢ/n
  R = x_max − x_min
  σ = √(Σ(xᵢ−x̄)²/(n−1))
  bias = x̄ − nominal
  k = F/δ

UNIT CONVERSION:
  All in mm; forces in N.

SUBSTITUTION AND CALCULATION:

  (a) STATISTICS

      FIXTURE A
        Σx = 40.061+40.059+40.062+40.058+40.060
             +40.063+40.059+40.061+40.060+40.062
           = 400.605
        x̄ = 400.605/10 = 40.0605 mm

        x_max = 40.063, x_min = 40.058
        R = 40.063 − 40.058 = 0.005 mm

        Deviations from the mean (×10⁻³ mm):
          0.5, −1.5, 1.5, −2.5, −0.5,
          2.5, −1.5, 0.5, −0.5, 1.5
        Σd² = (0.25+2.25+2.25+6.25+0.25
               +6.25+2.25+0.25+0.25+2.25)×10⁻⁶
            = 22.5×10⁻⁶
        σ = √(22.5×10⁻⁶/9)
          = √(2.5×10⁻⁶)
          = 0.001581 mm

      FIXTURE B
        Σx = 40.008+40.031+39.994+40.022+40.003
             +40.029+39.998+40.017+40.026+40.001
           = 400.129
        x̄ = 400.129/10 = 40.0129 mm

        x_max = 40.031, x_min = 39.994
        R = 40.031 − 39.994 = 0.037 mm

        Deviations from the mean (×10⁻³ mm):
          −4.9, 18.1, −18.9, 9.1, −9.9,
          16.1, −14.9, 4.1, 13.1, −11.9
        Σd² = (24.01+327.61+357.21+82.81+98.01
               +259.21+222.01+16.81+171.61
               +141.61)×10⁻⁶
            = 1,700.90×10⁻⁶
        σ = √(1,700.90×10⁻⁶/9)
          = √(188.99×10⁻⁶)
          = 0.013748 mm

  (b) BIAS AND REPEATABILITY

      FIXTURE A
        Bias = 40.0605 − 40.000 = +0.0605 mm
        Repeatability (range) = 0.005 mm

      FIXTURE B
        Bias = 40.0129 − 40.000 = +0.0129 mm
        Repeatability (range) = 0.037 mm

      ┌────────────────────────────────────────────┐
      │ NOTE THE INVERSION.                        │
      │                                            │
      │ Fixture A has a LARGE bias and TINY        │
      │ scatter. Fixture B has a SMALL bias and    │
      │ LARGE scatter.                             │
      │                                            │
      │ On a naive reading, B looks better — its   │
      │ mean is nearly right.                      │
      └────────────────────────────────────────────┘

  (c) STIFFNESS

      FIXTURE A
        k = F/δ = 2,800/0.006
          = 466,667 N/mm

      FIXTURE B
        k = 2,800/0.019
          = 147,368 N/mm

      RATIO = 466,667/147,368 = 3.167 ×
      → Fixture A is 3.167 times stiffer.

  (d) TOTAL ERROR BEFORE CORRECTION

      FIXTURE A
        |bias| + R = 0.0605 + 0.005
                   = 0.0655 mm

      FIXTURE B
        |bias| + R = 0.0129 + 0.037
                   = 0.0499 mm

      → BEFORE CORRECTION, FIXTURE B IS BETTER
        (0.0499 vs 0.0655 mm).

  (e) TOTAL ERROR AFTER OFFSET CORRECTION

      The bias is correctable by adjusting the work
      offset. After correction, bias ≈ 0 and only
      the scatter remains.

      FIXTURE A
        Residual = 0.005 mm

      FIXTURE B
        Residual = 0.037 mm

      → AFTER CORRECTION, FIXTURE A IS 7.4 TIMES
        BETTER (0.037/0.005).

      ┌────────────────────────────────────────────┐
      │ THE RANKING REVERSED.                      │
      │                                            │
      │ Before correction B wins by 1.31×.         │
      │ After ten minutes of adjustment A wins by  │
      │ 7.40×.                                     │
      └────────────────────────────────────────────┘

  (f) ASSESSMENT AGAINST THE BUDGET

      Available band            = 0.100 mm
      Already consumed          = 0.032 mm
      Remaining for the fixture = 0.068 mm

      BEFORE CORRECTION
        Fixture A: 0.0655/0.068 = 96.3 %  ⚠ marginal
        Fixture B: 0.0499/0.068 = 73.4 %  ✓

      AFTER CORRECTION
        Fixture A: 0.005/0.068  = 7.4 %   ✓ excellent
        Fixture B: 0.037/0.068  = 54.4 %  ✓ workable

      TOTAL BUDGET CONSUMED, after correction:
        Fixture A: (0.032+0.005)/0.100 = 37.0 %
        Fixture B: (0.032+0.037)/0.100 = 69.0 %

      REMAINING MARGIN FOR WEAR AND DRIFT
        Fixture A: 63.0 %
        Fixture B: 31.0 %

  (g) WHICH FIXTURE IS PREFERABLE

      FIXTURE A, decisively:
        ✓ 7.40× better after correction
        ✓ 3.167× stiffer
        ✓ leaves 63 % of the band for wear and
          drift, against 31 %
        ✓ its error is CORRECTABLE and was
          corrected in one adjustment

      Fixture B's apparent advantage — a nearly
      correct mean — was worth nothing, because
      there was nothing wrong with it that
      adjustment could fix.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Fixture A mean / range   │ 40.0605 / 0.005   │
  │     Fixture A σ              │ 0.001581 mm       │
  │     Fixture B mean / range   │ 40.0129 / 0.037   │
  │     Fixture B σ              │ 0.013748 mm       │
  │ (b) Bias A / B               │ +0.0605 / +0.0129 │
  │ (c) Stiffness A / B          │ 466,667 / 147,368 │
  │     ratio                    │ 3.167 ×           │
  │ (d) Total before, A / B      │ 0.0655 / 0.0499   │
  │     → B better by            │ 1.31 ×            │
  │ (e) Residual after, A / B    │ 0.005 / 0.037     │
  │     → A better by            │ 7.40 ×            │
  │ (f) Budget consumed, A / B   │ 37.0 % / 69.0 %   │
  │     Margin remaining         │ 63.0 % / 31.0 %   │
  │ (g) PREFERRED                │ FIXTURE A         │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The margin is the
  unconsumed tolerance after correction: 63 % for
  Fixture A and 31 % for Fixture B. That margin has
  to absorb locator wear, thermal drift and any
  process variation over the fixture's life — and
  wear is progressive, so the fixture with 31 %
  remaining will reach its limit far sooner.

PASS/FAIL:
  ⚠ MARGINAL — Fixture A before correction, 96.3 %
    of the remaining budget.
  ✓ PASS — Fixture A after correction, 7.4 %.
  ✓ PASS — Fixture B, 73.4 % before and 54.4 %
    after, but with limited margin.
  ✓ Fixture A is preferred by a factor of 7.40 on
    irreducible error.

ENGINEERING CONCLUSION:
  1. THE RANKING REVERSED ON CORRECTION, AND THAT IS
     THE WHOLE LESSON.
     Judged on raw total error, Fixture B was better
     — 0.0499 mm against 0.0655 mm. Ten minutes of
     offset adjustment later, Fixture A was better by
     a factor of 7.40.
     THE REASON IS THAT ALMOST ALL OF FIXTURE A's
     ERROR WAS BIAS, AND BIAS IS FREE TO REMOVE.
     92.4 % of A's error was correctable
     (0.0605/0.0655) against only 25.9 % of B's
     (0.0129/0.0499).
     A DECISION MADE ON TOTAL ERROR ALONE WOULD HAVE
     SELECTED THE WRONG FIXTURE.

  2. THE NUMBER THAT MATTERS IS THE IRREDUCIBLE ONE.
     Bias can be adjusted out; scatter cannot. So the
     figure to compare between candidates is the
     RANGE, not the total and not the mean.
     I WOULD SPECIFY REPEATABILITY AS THE PRIMARY
     ACCEPTANCE CRITERION and treat accuracy as a
     secondary one, because a repeatable fixture in
     the wrong place is a ten-minute problem and a
     scattering fixture in the right place is a
     redesign.

  3. RIGIDITY EXPLAINS THE SCATTER, WHICH TIES THE
     THREE PROPERTIES TOGETHER.
     Fixture B is 3.167 times less stiff, and it is
     also the one that scatters. That is not a
     coincidence: a compliant fixture deflects by an
     amount that depends on exactly how the load
     happens to fall on any given cycle, so
     variation in clamping, seating and cutting
     conditions all show up as positional scatter.
     A CONSISTENT DEFLECTION WOULD HAVE APPEARED AS
     BIAS; IT IS THE VARIABILITY OF THE DEFLECTION
     THAT APPEARS AS SCATTER. Same physical
     property, different symptom depending on
     whether the load is consistent.

  4. THE MARGIN AFTER CORRECTION IS THE PRACTICAL
     DECIDER.
     A at 37 % of the budget leaves 63 % for wear and
     drift; B at 69 % leaves 31 %. Since locator wear
     is progressive and thermal drift is unavoidable,
     the fixture with twice the remaining margin will
     stay in tolerance roughly twice as long before
     requiring attention.
     THAT IS AN OPERATING-COST ARGUMENT AS MUCH AS AN
     ACCURACY ONE, AND IT IS THE FORM I WOULD USE
     WITH A CUSTOMER: not "A is more accurate" but
     "A will need re-qualifying half as often".

  5. WHAT I WOULD DO NEXT.
     Accept Fixture A, correct the 0.0605 mm bias by
     work offset, record the correction and its
     reason so nobody later "fixes" the offset back,
     and investigate the source of the bias — a
     0.06 mm systematic error usually means a locator
     position error or the setting-feature-to-locator
     problem from L1.2.4, and it is worth knowing
     which before it grows.

SENSITIVITY NOTE:
  Ranked by influence:
    1. THE SPLIT BETWEEN BIAS AND SCATTER — not the
       total error but its composition. This single
       consideration reversed the ranking.
    2. FIXTURE STIFFNESS — 3.167× between the
       candidates, and the physical explanation for
       the scatter difference. Improving it is the
       only route to improving repeatability here.
    3. NUMBER OF READINGS — ten is a minimum. The
       range is a crude statistic and with n = 10 it
       may understate the true spread. A larger study
       would tighten the estimate, particularly for
       Fixture B.
    4. WHETHER THE BIAS IS A PURE TRANSLATION —
       assumed here. If it varied across the part it
       would be an orientation error, only partly
       correctable by one offset, and Fixture A's
       advantage would shrink.
    5. PRE-EXISTING BUDGET CONSUMPTION — 0.032 mm of
       0.100. Reducing it would relieve both
       candidates equally and would not change the
       ranking.
```

### 14. Engineering assumptions
- The readings come from a valid study with **complete unloading between each reading** `[PRACTICE]`.
- Same part throughout, so part-to-part variation is excluded `[PRACTICE]`.
- Repeatability expressed as the range — appropriate and conservative for n = 10; σ given alongside
  `[PRACTICE]`.
- Bias assumed correctable by a work offset; valid for a pure translation, **not** for an orientation
  error `[PRACTICE]`.
- Arithmetic summation at design stage `[PRACTICE]`.

### 15. Diagram

```
     THE METROLOGICAL TRIAD
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE FOUR COMBINATIONS

   REPEATABLE + ACCURATE      REPEATABLE, NOT ACCURATE
      ┌─────────┐                ┌─────────┐
      │   ●●    │                │      ●● │
      │  ✛●●    │                │  ✛   ●● │
      │         │                │         │
      └─────────┘                └─────────┘
      ✓ the goal                 ✓ FIXABLE — one
                                   adjustment

   ACCURATE, NOT REPEATABLE   NEITHER
      ┌─────────┐                ┌─────────┐
      │ ●   ●   │                │  ●    ● │
      │  ✛ ●    │                │ ✛   ●   │
      │ ●    ●  │                │    ●  ● │
      └─────────┘                └─────────┘
      ✗ NOT FIXABLE              ✗ redesign

   ┌──────────────────────────────────────────────┐
   │ REPEATABILITY CANNOT BE FIXED BY ADJUSTMENT. │
   │ ACCURACY CAN.                                │
   │                                              │
   │ SO REPEATABILITY IS THE MORE VALUABLE        │
   │ PROPERTY AND THE ONE TO MEASURE FIRST.       │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE WORKED EXAMPLE — THE RANKING REVERSED

   BEFORE CORRECTION
     Fixture A ██████████████ 0.0655 mm
     Fixture B ██████████ 0.0499 mm      ← B looks
                                           better

   AFTER TEN MINUTES OF OFFSET ADJUSTMENT
     Fixture A █ 0.005 mm                ← A better
     Fixture B ███████ 0.037 mm            by 7.40×

   Correctable fraction:
     A  0.0605/0.0655 = 92.4 %
     B  0.0129/0.0499 = 25.9 %

   ┌──────────────────────────────────────────────┐
   │ A DECISION MADE ON TOTAL ERROR ALONE WOULD   │
   │ HAVE SELECTED THE WRONG FIXTURE.             │
   │                                              │
   │ COMPARE THE RANGE, NOT THE TOTAL AND NOT THE │
   │ MEAN.                                        │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  SYSTEMATIC vs RANDOM — THE DIAGNOSTIC

   CONSISTENT                 VARYING
   same amount, same way      unpredictable
   ●●●●●●●●●●                 ● ●    ●  ● ●
   → ACCURACY problem         → REPEATABILITY problem
   → ADJUST something         → FIND THE PHYSICAL
                                CAUSE
   locator position,          chips, variable clamp
   setting-feature error,     force, wear,
   consistent deflection      OVER-CONSTRAINT

   ┌──────────────────────────────────────────────┐
   │ ASK "CONSISTENT OR VARYING?" FIRST, EVERY    │
   │ TIME.                                        │
   │                                              │
   │ Same discrimination as L1.2.1 and L1.3.2 —   │
   │ it recurs because it is the fundamental      │
   │ split.                                       │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  TWO DATA SETS, THE SAME MEAN

   SET 1  0.078 0.081 0.079 0.082 0.077 ...
          mean 0.0795   range 0.005
          → adjust → residual 0.005   ✓

   SET 2  0.02 0.14 0.06 0.11 0.03 ...
          mean 0.079    range 0.120
          → adjust → residual ±0.060  ✗

   ┌──────────────────────────────────────────────┐
   │ IDENTICAL MEANS. COMPLETELY DIFFERENT        │
   │ PROSPECTS.                                   │
   │                                              │
   │ "PARTS ARE 0.08 OUT" REPORTS ONLY THE MEAN   │
   │ AND HIDES THE ONLY INFORMATION THAT MATTERS. │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  RIGIDITY LINKS THE OTHER TWO

   CONSISTENT LOAD          VARYING LOAD
      ↓ consistent             ↓ varying
      deflection               deflection
      = BIAS                   = SCATTER
      = accuracy problem       = repeatability
      = CORRECTABLE              problem
                               = NOT CORRECTABLE

   In the example, Fixture B was 3.167× less stiff
   AND the one that scattered. NOT A COINCIDENCE.

   ┌──────────────────────────────────────────────┐
   │ THE SAME LACK OF RIGIDITY PRODUCES EITHER    │
   │ SYMPTOM, DEPENDING ON WHETHER THE LOAD IS    │
   │ CONSISTENT.                                  │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE REPEATABILITY STUDY — DONE PROPERLY

   1 ONE part throughout      (excludes part variation)
   2 load, clamp, indicate
   3 UNLOAD COMPLETELY        ◄ THE ESSENTIAL STEP
   4 repeat ≥10 times
   5 report RANGE and σ

   ┌──────────────────────────────────────────────┐
   │ INDICATING THE SAME SEATED PART TEN TIMES    │
   │ MEASURES THE INDICATOR'S REPEATABILITY, NOT  │
   │ THE FIXTURE'S.                               │
   │                                              │
   │ The unload IS the test.                      │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-7200 — METROLOGICAL SPECIFICATION
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: RIGIDITY. FIXTURE DEFLECTION AT THE CUTTING
        POINT SHALL NOT EXCEED 0.008 mm UNDER A
        STATIC LOAD OF 3,200 N APPLIED IN THE
        DIRECTION OF THE RESULTANT CUTTING FORCE.

NOTE 2: REPEATABILITY. PART-TO-PART POSITIONAL
        REPEATABILITY SHALL NOT EXCEED 0.020 mm,
        MEASURED AS THE RANGE OVER TEN LOADINGS OF
        THE SAME COMPONENT WITH COMPLETE UNLOADING
        BETWEEN EACH.

NOTE 3: ACCURACY. FIXTURE-INDUCED POSITIONAL ERROR
        SHALL NOT EXCEED 0.030 mm RELATIVE TO NOMINAL.
        BIAS WITHIN THIS LIMIT MAY BE CORRECTED BY
        WORK OFFSET; ANY CORRECTION APPLIED MUST BE
        RECORDED ON THE SETUP SHEET WITH ITS REASON.

NOTE 4: REPEATABILITY IS THE GOVERNING ACCEPTANCE
        CRITERION. A FIXTURE MEETING NOTE 3 BUT
        FAILING NOTE 2 SHALL NOT BE ACCEPTED, AS
        SCATTER CANNOT BE CORRECTED BY ADJUSTMENT.
```

Note 4 is the one that carries the lesson into practice. `[PRACTICE]` **Without it, a commissioning
engineer under time pressure will accept a fixture whose mean is right and whose scatter is not**,
because the mean is the number everyone looks at.

### 17. CAD workflow
1. Identify the **load path** from the cutting point through the fixture to the machine table
2. Model the fixture with realistic **joint stiffnesses**, not as a monolithic solid
3. Run an **FEA deflection case** at the maximum process load and compare against the rigidity allocation
4. Identify the **softest element** in the path and check it is not the fixture
5. Model **wear-sensitive contacts** and note them for the repeatability argument
6. Produce the **verification plan** — how each of the three properties will be measured

`[PRACTICE]` Step 2 matters and is often skipped. **A fixture modelled as one solid body will appear far
stiffer than it is**, because bolted joints, dowel fits and contact interfaces all contribute compliance.
An FEA result from a monolithic model is an optimistic bound, not a prediction.

### 18. GD&T application

```
STANDARD: ASME Y14.5-2018

  THE THREE PROPERTIES MAP ONTO TOLERANCING
  DIFFERENTLY:

  ACCURACY → a POSITIONAL tolerance on the fixture's
  locators relative to its datums:
  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.02 │ A │ B │ C │          │
  └──────────────────────────────────┘

  RIGIDITY → NOT a GD&T characteristic at all. It
  is a note or a specification requirement, because
  it concerns behaviour under load rather than
  geometry at rest.

  REPEATABILITY → also NOT a GD&T characteristic.
  It is a property of the loading PROCESS, not of
  the fixture's geometry.

  ┌────────────────────────────────────────────┐
  │ THIS IS WORTH STATING EXPLICITLY BECAUSE   │
  │ IT IS A COMMON GAP.                        │
  │                                            │
  │ A drawing can fully tolerance every        │
  │ feature of a fixture and say NOTHING about │
  │ its rigidity or repeatability — which are  │
  │ the two properties that determine whether  │
  │ it works.                                  │
  │                                            │
  │ GEOMETRIC TOLERANCING CONTROLS ACCURACY.   │
  │ THE OTHER TWO NEED WRITTEN REQUIREMENTS    │
  │ AND VERIFICATION METHODS.                  │
  └────────────────────────────────────────────┘
```

### 19. Manufacturing method
Rigidity is designed in, not manufactured in: **section size, rib placement, joint count and base
thickness** determine it. `[PRACTICE]` The manufacturing decisions that most affect it are **the number
of bolted joints in the load path** — each is a compliance in series — and **whether a welded base has
been stress relieved**, since a base that relaxes over months produces a slowly drifting bias.

Repeatability is manufactured in through **hardened locators, relieved pads, and consistent clamping
hardware** — all of which reduce the causes of scatter.

### 20. Inspection method
| Property | Method | Acceptance `[PROJ]` |
|---|---|---|
| **Rigidity** | Apply a static load equal to the process force; indicate at the cutting point | ≤0.008 mm at 3,200 N |
| **Repeatability** | 10 loadings of one part, complete unload between, indicate a datum | Range ≤0.020 mm |
| Repeatability, second operator | Repeat the study | Comparable range |
| Repeatability after a shift | Repeat the study | Reveals thermal effects |
| **Accuracy** | CMM against fixture datums; first-article part | ≤0.030 mm bias |
| Correction recorded | Setup sheet review | Any offset correction documented |

`[PRACTICE]` **Do the repeatability study before the accuracy check.** If repeatability fails there is no
point measuring accuracy, because the mean of a scattered set is not a meaningful number to correct
against.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Using **"accuracy"** to mean all three properties | Ambiguous specification |
| 2 | Not **unloading** between repeatability readings | Measures the indicator, not the fixture |
| 3 | Reporting only the **mean** | Hides whether the error is correctable |
| 4 | Selecting a fixture on **total error** | The ranking can reverse on correction |
| 5 | Treating a **repeatability failure as equivalent** to an accuracy failure | It is far more serious |
| 6 | Adjusting an offset to compensate for **scatter** | Cannot work; hides the cause |
| 7 | Modelling the fixture as a **monolithic solid** in FEA | Stiffness overestimated |
| 8 | Not specifying rigidity because **GD&T cannot express it** | The property goes uncontrolled |
| 9 | Measuring accuracy **before** repeatability | The mean is not meaningful |
| 10 | Fewer than **10 readings** | Range understates the spread |
| 11 | Not recording an applied **offset correction** | Someone later "corrects" it back |
| 12 | Assuming a bias is a **pure translation** | An orientation error is only partly correctable |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Consistent error, same direction | Bias — locator or setting-feature position | Repeat-load study; check the range | Adjust the offset; find the source | Control the setting-feature-to-locator dimension |
| Scattered results | Repeatability — physical cause | Repeat-load study | Find the cause: chips, clamp force, wear, over-constraint | Relieved pads, fixed-stop clamping |
| Error grows with cutting force | Insufficient rigidity | Static load test | Stiffen; add material or reduce joints | Rigidity allocation in the budget |
| Good repeatability, poor accuracy | Bias | Compare mean with nominal | One offset adjustment | Expected and easily handled |
| Poor repeatability, good mean | Scatter | Range of the study | Investigate physically | Do not accept on the mean |
| Results differ between operators | Method dependence | Study by operator | Fixed-stop clamping; training | Design out the variable |
| Results drift through a shift | Thermal | Study at intervals | Warm-up; thermal management | Expect and plan |
| Slow drift over months | Base stress relaxation, or wear | Periodic master check | Stress relieve; replace locators | Stress relief at manufacture |

### 23. Design checklist
- [ ] Are **rigidity, repeatability and accuracy specified separately**?
- [ ] Does each have a **defined verification method**?
- [ ] Is **repeatability the governing acceptance criterion**, stated as such?
- [ ] Will the repeatability study **unload completely between readings**?
- [ ] Are at least **10 readings** planned, with a second operator?
- [ ] Is the **range** reported, not just the mean?
- [ ] Has the fixture's **share of the error budget** been allocated?
- [ ] Is the fixture **not the softest element** in the structural loop?
- [ ] Has FEA used **realistic joint stiffnesses** rather than a monolithic model?
- [ ] Are the **causes of scatter** designed out — chips, variable clamp force, wear, over-constraint?
- [ ] Is there a route to **record any offset correction** and its reason?
- [ ] Will repeatability be measured **before** accuracy?

### 24. Beginner exercise
**E2.2.2-B** — A repeat-load study of one part gives: 25.043, 25.041, 25.044, 25.042, 25.043, 25.045,
25.041, 25.042, 25.044, 25.043. The nominal is 25.000 mm.
(a) Calculate the mean and the range.
(b) State the bias and the repeatability.
(c) Classify the error as predominantly systematic or random.
(d) State what corrective action is appropriate and what the residual error would be.
(e) Explain why a repeatability study must unload between readings.

### 25. Intermediate exercise
**E2.2.2-I** — Two fixtures are studied over ten loadings each, nominal 60.000 mm. Fixture P: 60.031,
60.029, 60.033, 60.030, 60.032, 60.028, 60.031, 60.030, 60.032, 60.029. Fixture Q: 60.004, 60.019,
59.991, 60.014, 59.996, 60.017, 59.993, 60.011, 60.008, 59.998. A static load of 2,400 N gives
deflections of 0.005 mm (P) and 0.016 mm (Q). The part tolerance is ±0.04 mm and other sources consume
0.025 mm.
(a) Calculate the mean, range and standard deviation for each.
(b) Calculate the bias and repeatability for each.
(c) Calculate the stiffness of each and the ratio.
(d) Calculate the total error of each before correction and state which appears better.
(e) Calculate the residual error of each after offset correction and state which is actually better.
(f) Calculate the correctable fraction for each.
(g) Assess both against the remaining tolerance budget, before and after correction.
(h) Explain the relationship between the stiffness result and the repeatability result.

### 26. Advanced exercise
**E2.2.2-A** — A fixture is commissioned and studied under four conditions, each with ten loadings of the
same part (nominal 80.000 mm). Condition 1, operator A, morning: mean 80.018, range 0.011. Condition 2,
operator B, morning: mean 80.019, range 0.028. Condition 3, operator A, after 6 hours: mean 80.041,
range 0.012. Condition 4, operator A, morning, with deliberate chip contamination on one pad: mean
80.033, range 0.067. The part tolerance is ±0.05 mm; other sources consume 0.030 mm. Fixture stiffness
measured at 310,000 N/mm against a process load of 2,900 N.
(i) Calculate the fixture deflection under process load and its share of the tolerance band.
(ii) For each condition, state the bias and the repeatability.
(iii) Identify what each of conditions 2, 3 and 4 reveals by comparison with condition 1.
(iv) Determine which conditions represent accuracy problems and which represent repeatability problems.
(v) Calculate the total error under each condition, before and after correction of the bias.
(vi) Assess each against the remaining budget and state which conditions would be acceptable.
(vii) Explain why the condition 3 result cannot be corrected by a single offset applied at the start of a
shift, and propose two approaches that would address it.
(viii) The condition 2 result differs from condition 1 only in operator. State what design change would
eliminate this and quantify the benefit.
(ix) Rank the three findings by severity, justifying the ranking in terms of correctability.
(x) Write the commissioning report conclusion, in no more than 200 words, stating whether the fixture is
accepted and under what conditions.

### 27. Interview questions
1. *"What is the difference between repeatability and accuracy?"*
   **Answer:** Repeatability is whether you get the same answer every time; accuracy is whether the
   answer is right. A fixture can be perfectly repeatable and perfectly wrong — every part in exactly the
   same incorrect position — and that is actually the good case, because you fix it by changing one
   offset. The bad case is a fixture that scatters around the correct mean, because there is nothing to
   adjust; you have to find and remove a physical cause. So repeatability cannot be fixed by adjustment
   and accuracy can, which means repeatability is the more valuable property and the one I would specify
   and measure first. In practice that means comparing candidates on the *range* of a repeat-load study
   rather than on the mean or the total error.
2. *"How would you measure a fixture's repeatability?"*
   **Answer:** Take one part — the same part throughout, so part variation is excluded — load it, clamp
   it, and indicate a datum feature. Then unload it completely and repeat, at least ten times, recording
   every reading. Report the range and the standard deviation. The essential step is the complete unload
   between readings: if you indicate the same seated part ten times you are measuring the indicator's
   repeatability, not the fixture's, and that is the most common way this test is done wrongly. I would
   then extend it — repeat with a second operator to reveal method dependence, and repeat later in the
   shift to reveal thermal effects, because those are different questions from the basic loading
   repeatability.

### 28. Expert questions
1. *"Two fixtures both have 0.10 mm of total error. Why might you strongly prefer one over the other?"*
   **Answer:** Because **total error is the wrong number to compare**, and the composition of it decides
   everything.
   Suppose the first fixture has 0.09 mm of bias and 0.01 mm of scatter, and the second has 0.01 mm of
   bias and 0.09 mm of scatter. Identical totals. But bias is a consistent offset — every part is wrong
   by the same amount in the same direction — so you shift the work offset by 0.09 and the residual error
   is 0.01 mm. That takes ten minutes and it is permanent. **The first fixture becomes nine times better
   than it was, and nine times better than the second, through an adjustment that costs nothing.**
   The second fixture has nothing to adjust. Its mean is already right. The 0.09 mm is scatter, which
   means each part arrives in a slightly different place for a reason you have not identified yet, and no
   amount of offset editing will change that. You have to find the physical cause — chips under a
   locator, variable clamp force, worn locating pins, an over-constrained scheme, an operator-dependent
   loading method — and remove it. That is an investigation and possibly a redesign.
   In the worked example in this lesson the effect was even more striking, because the ranking actually
   **reversed**. On raw total error the scattering fixture looked better, 0.0499 against 0.0655 mm. After
   ten minutes of adjustment the other one was better by a factor of 7.40. A selection decision made on
   total error would have picked the wrong fixture.
   There is a second reason to prefer the repeatable one, which is about the fixture's working life. After
   correction it consumed 37 per cent of the tolerance budget against 69 per cent — so it has roughly
   twice the remaining margin to absorb locator wear and thermal drift. **It will stay in tolerance about
   twice as long before needing attention**, which is an operating cost argument rather than an accuracy
   one, and in my experience it is the form that persuades a customer.
   So the figure I compare between candidates is the **range** of a repeat-load study. Bias is
   information about where the fixture is; scatter is information about what it fundamentally is.
2. *"A fixture passes its repeatability study in the morning and fails it in the afternoon. What is
   happening and what do you do?"*
   **Answer:** The most likely mechanism is **thermal**, and the important diagnostic step is to
   determine whether what changed is the bias or the scatter, because they point at quite different
   causes.
   If the **mean has moved but the range is unchanged**, that is thermal growth of the machine, the
   fixture or the part — a systematic effect. Everything has expanded consistently, so every part is
   displaced by the same amount and the fixture is still perfectly repeatable, just repeatable about a
   different position. That is an accuracy problem and it is correctable in principle, though not by a
   single offset set at the start of a shift, because it drifts continuously. In the L1.1.1 figures
   thermal drift of 0.02 to 0.10 mm per shift is typical and it is frequently the largest single error
   source in a machine shop.
   If the **range has grown**, something physical is changing rather than merely expanding — and the
   usual candidates are chip accumulation building up over the shift, coolant temperature affecting
   clamping friction, hydraulic pressure drifting as the fluid warms, or an operator changing at a shift
   boundary. That is a repeatability problem and it is more serious.
   The measurement that separates them is straightforward: run the study hourly through a shift and plot
   both the mean and the range against time. A mean that drifts smoothly and a range that stays flat is
   thermal. A range that grows is contamination or a mechanical change. Both moving suggests more than
   one mechanism.
   For the **thermal case**, the options are a warm-up cycle before production so the machine reaches
   steady state, periodic re-qualification of the offset through the shift using a probed datum,
   temperature-controlled coolant, or in-process probing that measures rather than assumes. Which is
   appropriate depends on the tolerance — at ±0.05 mm a warm-up may suffice; at ±0.01 mm it will not.
   For the **contamination case**, the answer is design rather than procedure: relieved locating pads so
   a chip has somewhere to go, air blast before loading, and a chip-shedding fixture profile. Those are
   L1.1.2 features and this is exactly the argument for them.
   What I would resist is treating an afternoon failure as an anomaly to be re-tested until it passes.
   **A fixture that behaves differently at different times of day has a real property that has just been
   discovered, and the discovery is valuable** — it is far better found at commissioning than in a
   customer complaint six months later.

### 29. Summary
Rigidity, repeatability and accuracy are three distinct properties: rigidity is resistance to deflection
under load, repeatability is the consistency of successive results under unchanged conditions, and
accuracy is closeness to the intended value. The critical asymmetry is that repeatability cannot be fixed
by adjustment while accuracy can, so a fixture that is repeatable but wrong is a ten-minute problem and
one that scatters about the correct mean is an investigation — which makes repeatability the more
valuable property and the one to specify and measure first. This makes total error the wrong basis for
comparing candidates: in the worked example the fixture with the larger total error, 0.0655 mm against
0.0499 mm, became better by a factor of 7.40 after a single offset correction, because 92.4% of its error
was bias against 25.9% for the alternative, and the ranking reversed. Rigidity links the other two, since
the same compliance produces bias when the load is consistent and scatter when it is not — the less stiff
fixture in the example was also the one that scattered, by a factor of 3.167 in stiffness. The
diagnostic framework that follows is the systematic-versus-random split, which recurs throughout this
programme: consistent errors mean adjust something, varying errors mean find a physical cause. Finally, a
valid repeatability study requires complete unloading between readings, at least ten of them, and
reporting of the range rather than only the mean — since two data sets with identical means can have
completely different prospects, and reporting only the mean hides the sole piece of information that
matters.

### 30. Key takeaways
- **Rigidity is resistance; repeatability is consistency; accuracy is correctness.**
- **Repeatability cannot be adjusted. Accuracy can.** So repeatability is worth more.
- **Compare candidates on the range**, not the total error and not the mean.
- **The ranking can reverse on correction** — 1.31× the wrong way became 7.40× the right way.
- **A consistent deflection is an accuracy problem; a varying deflection is a repeatability problem.**
- **Ask "consistent or varying?" first**, every time.
- **A repeatability study must unload completely between readings** — the unload *is* the test.
- **Ten readings minimum**; report the range and σ.
- **Measure repeatability before accuracy** — the mean of a scattered set is not worth correcting.
- **GD&T controls accuracy only.** Rigidity and repeatability need written requirements.
- **Don't model a fixture as a monolithic solid in FEA** — joints are compliances in series.
- **The fixture with more remaining margin needs re-qualifying half as often** — an operating-cost
  argument.
- **A fixture that behaves differently in the afternoon has a real property, not an anomaly.**

---

## LESSON L2.2.3 — THE PROCESS QUARTET

### 1. Lesson title
**L2.2.3 — Accessibility, tool access, chip evacuation and coolant: can the process actually run?**

### 2. Learning objective
By the end of this lesson you will be able to distinguish operator accessibility from tool access,
calculate chip volume and assess whether a fixture can shed it, explain why chip management is a design
requirement rather than a housekeeping matter, specify coolant delivery and drainage, and evaluate a
fixture against all four process objectives.

### 3. Prerequisites
L2.2.1 (primary triad), L1.3.6 (tool access, swept envelope), L1.1.2 (chip behaviour on a VMC),
L1.1.4 (chip fall-away on an HMC).

### 4. Why the topic matters
The first six objectives concern whether the fixture holds the part correctly. **These four concern
whether the process can run at all** — and a fixture that fails them is not slightly worse, it is
unusable.

```
   THE FOUR PROCESS OBJECTIVES

    7  ACCESSIBILITY    can a PERSON load and unload
                        it?
    8  TOOL ACCESS      can the TOOL reach every
                        feature?
    9  CHIP EVACUATION  do the chips leave?
   10  COOLANT ACCESS   does coolant reach the cut
                        and drain away?
```

Two of these have already appeared as constraints that governed a design:

| Objective | Where it governed |
|---|---|
| **Tool access** | L1.3.6 — a chamfer tool with the lowest force governed the entire clamp layout |
| **Chip evacuation** | L1.1.2 — small raised relieved pads beat a full ground face by **40.7×** on chip exposure |

> **Chip evacuation is the objective most often dismissed as housekeeping**, and L1.1.2's 40.7× result
> shows why that is wrong. A chip under a locator is a position error of 0.05–0.5 mm — catastrophic at
> the tolerances of L1.3.4 — and whether chips can sit under a locator is a **design decision**, not an
> operator's responsibility.

### 5. Simple explanation

```
   OBJECTIVE 7 — ACCESSIBILITY (the PERSON)

     Can the operator get the part in and out
     without difficulty?

     ✗ part must be threaded past a clamp
     ✗ hands go where they cannot see
     ✗ heavy part with no lifting point
     ✓ clear approach, clamps swing away,
       part drops straight in

  ─────────────────────────────────────────────────

   OBJECTIVE 8 — TOOL ACCESS (the TOOL)

     Can every tool reach every feature?

     Not the tool centreline — the SWEPT ENVELOPE
     of tool AND holder at every height (L1.3.6).

  ─────────────────────────────────────────────────

   OBJECTIVE 9 — CHIP EVACUATION

     Where do the chips go?

     ✗ pockets that collect them
     ✗ flat surfaces under the part
     ✓ sloped surfaces, open bottoms, relieved
       pads, air blast

  ─────────────────────────────────────────────────

   OBJECTIVE 10 — COOLANT ACCESS

     Does coolant reach the cutting zone, and does
     it drain away?

     ✗ blocked by the fixture body
     ✗ pools in a recess and sits on the part
     ✓ clear path in, clear path out
```

### 6. Engineering explanation

**OBJECTIVE 7 — ACCESSIBILITY**

```
   THE DISTINCTION FROM TOOL ACCESS

   ACCESSIBILITY is about the HUMAN interaction:
     loading, unloading, clamping, cleaning,
     inspecting, adjusting.

   TOOL ACCESS is about the MACHINE's reach.

   THEY CONFLICT. A fixture optimised for tool
   access has clamps low and out of the way, which
   often means awkward to operate. One optimised
   for accessibility has big, easily reached clamp
   handles, which foul tools.

   ┌──────────────────────────────────────────────┐
   │ THIS IS THE FIRST OF THE MODULE'S CONFLICTS  │
   │ AND IT IS RESOLVED IN L2.2.6.                │
   └──────────────────────────────────────────────┘
```

`[PRACTICE]` Accessibility criteria:

| Criterion | Guideline |
|---|---|
| **Loading direction** | Straight down or straight in — no threading past obstructions |
| **Visibility** | The operator must see the locating contacts while loading |
| **Clamp reach** | Handles reachable without leaning into the machine |
| **Part weight** | ≤20–25 kg for manual handling `[PRACTICE]`, above which lifting aids |
| **Cleaning access** | Every locating surface reachable with an air line |
| **Load/unload time** | Consistent with the cycle time target (L2.2.5) |

**OBJECTIVE 8 — TOOL ACCESS**

Fully treated in L1.3.6. The summary requirement:

```
   TABULATE DIAMETER AGAINST HEIGHT for every tool
   assembly, and check every row against every
   obstruction.

   ✓ minimum radial clearance 15 mm  [PRACTICE]
   ✓ check the HOLDER, not just the cutter
   ✓ check the LARGEST tool visiting each feature
   ✓ do the access review BEFORE placing clamps

   THE KEY RESULT FROM L1.3.6:
     the chamfer tool — lowest force, shortest
     cycle — governed the entire clamp layout,
     at 9.5 mm clearance against the drill's
     35.5 mm.
```

**OBJECTIVE 9 — CHIP EVACUATION**

This is the objective that gets least attention and causes the most intermittent trouble.

```
   WHY CHIPS MATTER — THREE MECHANISMS

   1. A CHIP UNDER A LOCATOR
        Lifts the part by the chip's thickness.
        0.05-0.5 mm — catastrophic at finishing
        tolerances (L1.3.4).
        → RANDOM errors, no pattern.

   2. CHIPS PACKED IN A POCKET
        Recut by the tool → force spikes, heat,
        tool damage (L1.3.2, L1.3.5).

   3. CHIPS INSULATING THE PART
        A mass of hot swarf against the part
        raises its temperature → thermal growth.

   ┌──────────────────────────────────────────────┐
   │ THE FIRST OF THESE IS A DESIGN FAILURE, NOT  │
   │ A HOUSEKEEPING FAILURE.                      │
   │                                              │
   │ Whether a chip CAN sit under a locator is    │
   │ decided by the pad geometry, and that is     │
   │ decided by the designer. (L1.1.2)            │
   └──────────────────────────────────────────────┘
```

**CHIP VOLUME — THE CALCULATION NOBODY DOES**

```
   Q = a_p · a_e · v_f / 1000      cm³/min
       (from L1.3.1)

   Over a cycle:
     V_chips = Q × t_cutting        cm³

   BULK VOLUME is much greater than solid volume,
   because chips are loose:
     V_bulk ≈ B × V_chips
   [GUIDE] BULKING FACTOR B:
     short chips (cast iron, brass)      2-4
     medium chips (steel, well broken)   4-8
     long stringy chips (aluminium,
       stainless, poorly broken)         8-20

   ┌──────────────────────────────────────────────┐
   │ THESE ARE GUIDELINE RANGES FOR ESTIMATION.   │
   │ Actual bulking depends heavily on chip form, │
   │ which depends on tool geometry and feed —    │
   │ CONFIRM BY OBSERVATION where it matters.     │
   └──────────────────────────────────────────────┘

   THEN ASK: IS THERE SOMEWHERE FOR THAT VOLUME
   TO GO, WITHIN ONE CYCLE?
```

**CHIP-SHEDDING DESIGN FEATURES** `[PRACTICE]`

| Feature | Effect |
|---|---|
| **Relieved locating pads** | Small raised contacts; a chip must land exactly on the pad to matter — L1.1.2's 40.7× |
| **Sloped surfaces** | 15–30° minimum so chips slide rather than sit `[PRACTICE]` |
| **Open construction** | No closed pockets; chips fall through |
| **Air blast** | Directed at the locating surfaces, operated before loading |
| **Through-coolant** | Flushes chips from deep features |
| **Chip guards** | Prevent chips reaching areas that cannot shed them |
| **Horizontal orientation** | The whole reason for an HMC (L1.1.4) — gravity helps |

**OBJECTIVE 10 — COOLANT ACCESS**

```
   TWO SEPARATE REQUIREMENTS

   COOLANT IN
     Must reach the cutting zone.
     ✗ blocked by a clamp arm or fixture wall
     ✗ deflected away by a fixture surface
     → tool life falls, thermal load rises

   COOLANT OUT
     Must drain away.
     ✗ pools in a recess
     ✗ sits against the part
     → thermal effects, corrosion, difficulty
       measuring, and the part is wet on unload

   ┌──────────────────────────────────────────────┐
   │ DRAINAGE IS THE HALF THAT GETS FORGOTTEN.    │
   │                                              │
   │ A fixture with a flat-bottomed recess under  │
   │ the part becomes a bath. The part sits in    │
   │ warm coolant, grows thermally, and comes out │
   │ wet — which matters if it is measured next.  │
   └──────────────────────────────────────────────┘
```

`[PRACTICE]` Coolant design guidance: provide **drain slots or holes at every low point**, slope
horizontal surfaces by at least a few degrees toward a drain, and check that coolant cannot pool where
the part sits. On an HMC, the vertical orientation of the locating face means coolant and chips both
drain naturally — another form of the L1.1.4 advantage.

**THE FOUR OBJECTIVES INTERACT**

```
   ACCESSIBILITY ←──conflict──→ TOOL ACCESS
     big reachable clamps        low clear clamps

   CHIP EVACUATION ←──supports──→ ACCESSIBILITY
     open construction sheds chips AND gives the
     operator a clear view and reach

   CHIP EVACUATION ←──conflict──→ SUPPORT (obj. 2)
     open construction sheds chips
     but a support under the part blocks the path

   COOLANT ←──supports──→ CHIP EVACUATION
     flooding coolant flushes chips away

   ┌──────────────────────────────────────────────┐
   │ NOT ALL INTERACTIONS ARE CONFLICTS. CHIP     │
   │ EVACUATION AND ACCESSIBILITY REINFORCE EACH  │
   │ OTHER — OPEN CONSTRUCTION SERVES BOTH.       │
   │                                              │
   │ RECOGNISING WHICH PAIRS REINFORCE AND WHICH  │
   │ FIGHT IS THE CONTENT OF L2.2.6.              │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Accessibility** | Ease of human interaction — loading, clamping, cleaning |
| **Tool access** | The tool assembly's ability to reach a feature |
| **Swept envelope** | The volume occupied by the rotating tool and holder |
| **Chip evacuation** | Removal of chips from the cutting zone and the fixture |
| **Bulking factor** | Ratio of loose chip volume to solid material removed |
| **Chip packing** | Chips compacted where they cannot escape |
| **Recutting** | The tool re-engaging chips not evacuated |
| **Relieved pad** | Locating pad with a small raised contact area |
| **Air blast** | Directed compressed air clearing chips from locating surfaces |
| **Through-coolant** | Coolant delivered through the tool to the cutting zone |
| **Flood coolant** | Coolant delivered by external nozzles |
| **Drainage** | The path by which coolant leaves the fixture |

### 8. Principle

> **THE FIRST SIX OBJECTIVES DECIDE WHETHER THE FIXTURE HOLDS THE PART CORRECTLY; THESE FOUR DECIDE
> WHETHER THE PROCESS CAN RUN AT ALL.**
> **CHIP EVACUATION IS A DESIGN REQUIREMENT, NOT HOUSEKEEPING.** Whether a chip can sit under a locator
> is decided by the pad geometry, and that is the designer's decision.
> **CALCULATE THE CHIP VOLUME AND ASK WHERE IT GOES** — with a bulking factor of 2–20 `[GUIDE]`, the
> loose volume is far larger than the material removed.
> **DRAINAGE IS THE HALF OF COOLANT DESIGN THAT GETS FORGOTTEN.** A flat-bottomed recess becomes a bath.
> **ACCESSIBILITY AND TOOL ACCESS CONFLICT; CHIP EVACUATION AND ACCESSIBILITY REINFORCE.** Knowing which
> pairs do which is the content of L2.2.6.

### 9. Industrial application

**The process-objective review**

```
   BEFORE RELEASING ANY FIXTURE DESIGN  [PRACTICE]

   ACCESSIBILITY
     □ Can the part be loaded in a straight line?
     □ Can the operator see the locating contacts?
     □ Are all clamps reachable without leaning in?
     □ Is the part within manual handling limits?
     □ Can every locating surface be air-blasted?

   TOOL ACCESS
     □ Diameter-vs-height table for every tool?
     □ Largest tool at each feature checked?
     □ Holders checked, not just cutters?
     □ ≥15 mm radial clearance everywhere?

   CHIP EVACUATION
     □ Chip volume per cycle calculated?
     □ Somewhere for that volume to go?
     □ Locating pads relieved?
     □ No closed pockets?
     □ Surfaces sloped ≥15°?
     □ Air blast provided and sequenced?

   COOLANT
     □ Clear path to the cutting zone?
     □ Drain at every low point?
     □ No pooling where the part sits?
     □ Part dry enough on unload for the next
       operation?
```

**A chip-related failure and its true cause** `[EX-ASSUMED]` illustrative:

```
SYMPTOM
  Roughly one part in fifteen is 0.06-0.30 mm out
  of position, in no consistent direction. The
  fixture measures correctly. Repeatability studies
  pass.

WHY THE STUDIES PASSED
  A repeatability study is done on a CLEAN fixture
  with a CLEAN part, deliberately. It measures the
  fixture's inherent capability — which is fine.

  IT DOES NOT MEASURE WHAT HAPPENS WHEN A CHIP
  LANDS ON A PAD.

DIAGNOSIS
  The locating pads are FULL-FACE ground surfaces,
  120 × 80 mm each. Any chip landing anywhere on
  that area lifts the part.

  Chip exposure area = 3 × (120 × 80)
                     = 28,800 mm²

  With RELIEVED pads, 3 × Ø25 raised contacts:
    exposure = 3 × π × 25²/4
             = 1,473 mm²

    IMPROVEMENT = 28,800/1,473 = 19.6 ×

CORRECTIVE
  Relieve the pads; add air blast before loading.

THE PRINCIPLE
  THE REPEATABILITY STUDY WAS NOT WRONG — IT WAS
  ANSWERING A DIFFERENT QUESTION. Inherent
  capability and robustness to contamination are
  separate properties, and the second one is a
  DESIGN property.

  [PRACTICE] This is why a repeatability study
  should include a deliberately contaminated
  condition (L2.2.2 §9).
```

### 10. Design rules
- **R1** — Provide a **straight-line loading path**; never require the part to be threaded past
  obstructions `[PRACTICE]`.
- **R2** — Ensure the operator can **see the locating contacts** while loading.
- **R3** — Keep manual part handling within **20–25 kg**; above that provide lifting aids `[PRACTICE]`.
- **R4** — Perform the **tool access review before placing clamps** (L1.3.6 R1).
- **R5** — **Calculate the chip volume per cycle** and confirm there is somewhere for it to go.
- **R6** — **Relieve every locating pad** — reduce the chip-exposure area.
- **R7** — Avoid **closed pockets**; slope surfaces by ≥15° `[PRACTICE]`.
- **R8** — Provide **air blast** at the locating surfaces, sequenced before loading.
- **R9** — Provide a **clear coolant path** to the cutting zone.
- **R10** — Provide **drainage at every low point**; never allow coolant to pool where the part sits.
- **R11** — Confirm the part is **dry enough on unload** for whatever comes next.
- **R12** — Recognise that **accessibility and tool access conflict**, and resolve it deliberately.

### 11. Rules of thumb
- **The first six objectives ask whether it holds the part; these four ask whether the process can run.**
- **Chip evacuation is design, not housekeeping.**
- **A chip under a locator is 0.05–0.5 mm** — catastrophic at finishing tolerances.
- **Relieved pads beat a full face by an order of magnitude** on chip exposure.
- **Bulking factor 2–4 short chips, 4–8 medium, 8–20 long** `[GUIDE]`.
- **Slope surfaces ≥15°** so chips slide `[PRACTICE]`.
- **Drainage is the forgotten half of coolant design.**
- **A flat-bottomed recess becomes a bath.**
- **Accessibility and tool access fight; chip evacuation and accessibility reinforce.**
- **A repeatability study on a clean fixture does not test robustness to chips.**

### 12. Formulae

**Chip volume**
```
Q = a_p · a_e · v_f / 1000        cm³/min
V_solid = Q × t_cutting           cm³
V_bulk  = B × V_solid             cm³
   B = 2 to 20  [GUIDE, by chip form]
```

**Chip exposure area**
```
Full-face pad:     A_exposed = Σ (pad areas)
Relieved pad:      A_exposed = Σ (raised contact
                                  areas)
Improvement factor = A_full / A_relieved
```

**Probability of a chip landing on a contact** (indicative)
```
P ≈ A_exposed / A_total_surface
[GUIDE] A crude proportional model, useful for
COMPARING designs rather than predicting absolute
rates. Real chip distribution is strongly
non-uniform and depends on the cutting direction.
```

**Coolant drainage slope**
```
Minimum slope for free drainage ≈ 2-5°  [PRACTICE]
Minimum slope for chip sliding  ≈ 15-30° [PRACTICE]
→ CHIPS NEED A MUCH STEEPER SLOPE THAN LIQUID
```

**Tool access clearance** (from L1.3.6)
```
Clearance(h) = d_obstruction(h) − D_tool(h)/2
Require > 15 mm at every height   [PRACTICE]
```

| Variable | Meaning | Unit |
|---|---|---|
| Q | Material removal rate | cm³/min |
| B | Bulking factor | — |
| V_bulk | Loose chip volume | cm³ |
| A_exposed | Area on which a chip causes an error | mm² |

### 13. Worked numerical example

**Problem:** A fixture is assessed against all four process objectives. Calculate the chip volume per
cycle and determine whether the fixture can shed it, quantify the improvement from relieving the pads,
check tool access and coolant drainage, and identify which objective governs.

```
GIVEN:
  PART AND PROCESS                               [PROJ]
    Steel component, milled and drilled
    Milling: a_p = 3 mm, a_e = 60 mm,
             v_f = 900 mm/min
    Cutting time per part = 4.2 min
    Chip form: medium, well broken
    Bulking factor B = 6      [GUIDE, medium range
                               4-8]

  FIXTURE AS DESIGNED                            [PROJ]
    3 locating pads, FULL FACE, each 110 × 70 mm
    Chip collection volume available below the
      part (open area to the machine's chip tray)
                            = 900 cm³
    A recess under the part, flat-bottomed,
      180 × 120 × 15 mm deep
    Clamps 38 mm tall, nearest edge 46 mm from
      the nearest hole
    Chamfer tool holder Ø66 sitting 19 mm above
      the part

  PROPOSED IMPROVEMENT                           [PROJ]
    Relieved pads: 3 × Ø28 raised contacts
    Recess drained by 2 × Ø10 holes
    Clamps changed to 15 mm low-profile

REQUIRED:
  (a) Material removal rate and solid chip volume
      per cycle
  (b) Bulk chip volume and comparison with the
      available space
  (c) Chip exposure area, full-face vs relieved,
      and the improvement factor
  (d) Coolant pooling volume in the recess
  (e) Tool access clearance, before and after
  (f) Which objective governs
  (g) Engineering conclusion

ASSUMPTION:
  1. Bulking factor B = 6 is a GUIDELINE mid-range
     value for medium, well-broken steel chips. It
     varies widely with tool geometry and feed and
     SHOULD BE CONFIRMED BY OBSERVATION where the
     margin is tight. [GUIDE]
  2. Chip exposure area treated as the full pad
     area for a flat pad and the raised contact
     area for a relieved pad. This is a
     COMPARATIVE model — it does not predict how
     often a chip actually lands. [GUIDE]
  3. All chips are assumed to reach the collection
     volume within one cycle. In practice some
     lodge; the calculation gives the DEMAND, not
     the achieved evacuation. [PRACTICE]
  4. Coolant assumed to fill the recess completely
     before overflowing. [PRACTICE]
  5. Minimum radial tool clearance 15 mm from the
     L1.1.2 practice figure. [PRACTICE]

FORMULA:
  Q = a_p·a_e·v_f/1000
  V_bulk = B · Q · t
  Clearance = d − D/2

UNIT CONVERSION:
  mm³ → cm³ : divide by 1000

SUBSTITUTION AND CALCULATION:

  (a) MATERIAL REMOVAL RATE AND SOLID VOLUME

      Q = a_p · a_e · v_f / 1000
        = 3 × 60 × 900/1000
        = 162,000/1000
        = 162.0 cm³/min

      V_solid = Q × t_cutting
              = 162.0 × 4.2
              = 680.4 cm³ per part

  (b) BULK CHIP VOLUME

      V_bulk = B × V_solid
             = 6 × 680.4
             = 4,082.4 cm³ per part

      Available collection volume = 900 cm³

      RATIO = 4,082.4/900
            = 4.536 ×

      ✗ THE FIXTURE MUST SHED 4.54 TIMES ITS OWN
        AVAILABLE VOLUME, EVERY CYCLE.

      → Chips CANNOT accumulate. They must be
        continuously evacuated during the cut, not
        merely collected.

      ┌────────────────────────────────────────────┐
      │ THIS IS THE NUMBER NOBODY CALCULATES.      │
      │                                            │
      │ 680 cm³ of solid steel becomes over four   │
      │ LITRES of loose swarf every four minutes.  │
      │ Any design that assumes chips will simply  │
      │ "fall away somewhere" has not confronted   │
      │ that quantity.                             │
      └────────────────────────────────────────────┘

  (c) CHIP EXPOSURE AREA

      FULL-FACE PADS:
        A = 3 × (110 × 70)
          = 3 × 7,700
          = 23,100 mm²

      RELIEVED PADS, 3 × Ø28:
        A = 3 × π × 28²/4
          = 3 × π × 784/4
          = 3 × 615.752
          = 1,847.3 mm²

      IMPROVEMENT FACTOR
        = 23,100/1,847.3
        = 12.505 ×

      → RELIEVING THE PADS REDUCES THE CHIP-
        SENSITIVE AREA BY A FACTOR OF 12.5.

      (Compare L1.1.2's 40.7× for a different
       geometry — the factor depends on the pad
       sizes, but the order of magnitude is the
       point.)

  (d) COOLANT POOLING

      Recess volume = 180 × 120 × 15
                    = 324,000 mm³
                    = 324 cm³

      → 324 cm³ (0.324 litres) of warm coolant
        sitting directly under the part, every
        cycle, unless drained.

      With 2 × Ø10 drain holes the recess empties
      and the pooling volume becomes effectively
      zero.

      THERMAL SIGNIFICANCE: 324 cm³ of coolant at,
      say, 8 °C above ambient in contact with the
      part is a real thermal load. For a steel part
      (α = 11.5×10⁻⁶/°C) over a 200 mm dimension, a
      2 °C part temperature rise gives:
        ΔL = 200 × 11.5×10⁻⁶ × 2
           = 0.0046 mm
      Modest but not negligible at tight tolerances,
      and it is entirely avoidable with two drilled
      holes.

  (e) TOOL ACCESS CLEARANCE

      BEFORE — clamps 38 mm tall, chamfer holder
      Ø66 at 19 mm above the part:

        The holder sits BELOW the clamp height, so
        the holder is alongside the clamp:
          Clearance = 46 − 66/2
                    = 46 − 33
                    = 13.0 mm

        13.0 < 15    ✗ FAIL

      AFTER — clamps 15 mm tall:

        The holder at 19 mm is now ABOVE the clamp,
        so only the tool body is alongside. Taking
        a Ø16 chamfer tool:
          Clearance = 46 − 16/2
                    = 46 − 8
                    = 38.0 mm

        38.0 > 15    ✓ PASS

      IMPROVEMENT = 38.0/13.0 = 2.923 ×

  (f) WHICH OBJECTIVE GOVERNS

      ┌──────────────────┬──────────────┬─────────┐
      │ OBJECTIVE        │ RESULT       │ VERDICT │
      ├──────────────────┼──────────────┼─────────┤
      │ 7 Accessibility  │ improved by  │ ✓       │
      │                  │ low-profile  │         │
      │                  │ clamps       │         │
      │ 8 Tool access    │ 13.0 → 38.0  │ ✗ → ✓   │
      │ 9 Chip evacuation│ 4.54× the    │ ✗ the   │
      │                  │ available    │ GOVERNING│
      │                  │ volume       │ issue   │
      │ 10 Coolant       │ 324 cm³      │ ✗ → ✓   │
      │                  │ pooling      │ (2 holes)│
      └──────────────────┴──────────────┴─────────┘

      → CHIP EVACUATION GOVERNS. It is the only one
        of the four that cannot be fixed by a small
        local change: tool access needed different
        clamps, coolant needed two drilled holes,
        but chip evacuation at 4.54× the available
        volume requires the fixture to be OPEN by
        design.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Removal rate             │ 162.0 cm³/min     │
  │     Solid chips per part     │ 680.4 cm³         │
  │ (b) Bulk chip volume         │ 4,082.4 cm³       │
  │     vs available 900 cm³     │ 4.536 × ✗         │
  │ (c) Exposure, full-face      │ 23,100 mm²        │
  │     Exposure, relieved       │ 1,847.3 mm²       │
  │     Improvement              │ 12.505 ×          │
  │ (d) Coolant pooling          │ 324 cm³           │
  │     Thermal growth, 2 °C     │ 0.0046 mm         │
  │ (e) Tool clearance before    │ 13.0 mm ✗         │
  │     after low-profile clamps │ 38.0 mm ✓ (2.92×) │
  │ (f) GOVERNING OBJECTIVE      │ CHIP EVACUATION   │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The margins are: tool
  clearance 38.0 mm against a 15 mm minimum, which is
  ample; and chip volume, which has NO margin at all
  — the fixture must shed 4.54 times what it can
  hold, so continuous evacuation is not a margin
  question but a design requirement.

PASS/FAIL:
  ✗ FAIL — chip evacuation as designed: 4.54× the
    available volume, requiring open construction.
  ✗ FAIL — tool access as designed: 13.0 mm against
    15 mm; ✓ PASS with low-profile clamps at 38.0 mm.
  ✗ FAIL — coolant drainage as designed: 324 cm³
    pooling; ✓ PASS with two drain holes.
  ✓ PASS — accessibility, improved by the same
    low-profile clamps.

ENGINEERING CONCLUSION:
  1. FOUR LITRES OF SWARF EVERY FOUR MINUTES IS THE
     NUMBER THAT REFRAMES THE PROBLEM.
     680 cm³ of solid steel removed per part becomes
     4,082 cm³ of loose chips at a bulking factor of
     six — four and a half times the volume the
     fixture can hold. Nobody calculates this, and
     the consequence of not calculating it is a
     fixture designed as though chips were a
     nuisance rather than a flow.
     THE DESIGN CONSEQUENCE IS THAT CHIPS CANNOT BE
     COLLECTED, THEY MUST BE CONTINUOUSLY SHED. That
     is an argument for open construction, sloped
     surfaces and coolant flow — not for a bigger
     chip tray.

  2. RELIEVING THE PADS IS THE HIGHEST-VALUE CHANGE
     AND IT COSTS ALMOST NOTHING.
     A factor of 12.5 reduction in the area on which
     a chip causes an error, achieved by machining
     relief around three raised contacts. Compare
     L1.1.2's 40.7× on a different geometry — the
     multiplier varies but the order of magnitude
     does not.
     WHAT MAKES THIS PARTICULARLY WORTH DOING IS THE
     FAILURE MODE IT ADDRESSES: a chip under a
     locator produces a RANDOM error with no
     pattern, which is the hardest kind to diagnose
     and the kind most often blamed on the operator.

  3. THE REPEATABILITY STUDY WOULD NOT HAVE FOUND
     THIS.
     A repeatability study is deliberately done on a
     clean fixture with a clean part, and it should
     be — it measures inherent capability. But that
     means it says nothing about ROBUSTNESS TO
     CONTAMINATION, which is a separate property and
     equally a design property.
     THIS IS WHY I WOULD INCLUDE A DELIBERATELY
     CONTAMINATED CONDITION in the commissioning
     study, as L2.2.2 suggested. It is the only way
     to test the property that actually causes the
     intermittent failures.

  4. THREE OF THE FOUR PROBLEMS HAD CHEAP LOCAL
     FIXES; ONE DID NOT.
     Tool access: different clamps. Coolant: two
     drilled holes. Accessibility: improved by the
     same clamp change. All small, all local.
     Chip evacuation at 4.54× the available volume
     is not a local fix — it is a statement about
     the fixture's whole architecture.
     THAT IS WHAT "GOVERNING" MEANS IN PRACTICE: not
     the largest number, but the one whose solution
     constrains everything else. And it is why chip
     evacuation belongs in the CONCEPT stage
     alongside the tool access review, not in
     detailing.

  5. THE COOLANT POOLING IS SMALL AND WORTH FIXING
     ANYWAY.
     0.0046 mm of thermal growth from a 2 °C rise is
     not going to scrap a part at ordinary
     tolerances. But the fix is two Ø10 holes, the
     part comes out dry, and at the tolerances of
     L1.3.4 the thermal term would matter.
     WHEN A FIX COSTS TWO DRILLED HOLES, THE
     THRESHOLD FOR DOING IT SHOULD BE VERY LOW.

SENSITIVITY NOTE:
  Ranked by influence:
    1. BULKING FACTOR — assumed 6 from a 4-8 range,
       and it scales the chip volume linearly. At
       B = 8 the demand becomes 5,443 cm³, or 6.05×
       the available volume. At B = 20 for long
       stringy aluminium chips it would be 13,608
       cm³ — WHICH IS WHY ALUMINIUM WITH POOR CHIP
       CONTROL IS SUCH A PROBLEM.
    2. PAD GEOMETRY — 12.5× on the chip-sensitive
       area, at essentially no cost. The
       highest-value-per-rupee change available.
    3. CLAMP HEIGHT — binary in effect on tool
       access: 13.0 mm fails, 38.0 mm passes
       comfortably.
    4. CUTTING PARAMETERS — Q scales with a_p, a_e
       and feed, so a more aggressive process
       directly increases the chip-handling demand.
       WORTH NOTING THAT OPTIMISING CYCLE TIME
       MAKES THE CHIP PROBLEM WORSE.
    5. COOLANT POOLING VOLUME — the smallest effect
       here, and the cheapest to eliminate.
```

### 14. Engineering assumptions
- Bulking factor B = 6 is a guideline mid-range value for medium well-broken steel chips `[GUIDE]`;
  confirm by observation where the margin is tight.
- Chip exposure area is a **comparative** model — it does not predict how often a chip lands `[GUIDE]`.
- All chips assumed to reach the collection volume within one cycle; the calculation gives the **demand**,
  not the achieved evacuation `[PRACTICE]`.
- Coolant assumed to fill the recess before overflowing `[PRACTICE]`.
- Minimum radial tool clearance 15 mm `[PRACTICE]`.

### 15. Diagram

```
     THE PROCESS QUARTET
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE FOUR OBJECTIVES

    7 ACCESSIBILITY    can a PERSON load it?
    8 TOOL ACCESS      can the TOOL reach?
    9 CHIP EVACUATION  do the chips LEAVE?
   10 COOLANT          does it reach the cut AND
                       drain away?

   ┌──────────────────────────────────────────────┐
   │ THE FIRST SIX OBJECTIVES DECIDE WHETHER THE  │
   │ FIXTURE HOLDS THE PART CORRECTLY.            │
   │ THESE FOUR DECIDE WHETHER THE PROCESS CAN    │
   │ RUN AT ALL.                                  │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE NUMBER NOBODY CALCULATES

   SOLID METAL REMOVED     680 cm³ per part
                             ↓ × bulking factor 6
   LOOSE SWARF PRODUCED  4,082 cm³ per part
   FIXTURE CAN HOLD        900 cm³

   ████████████████████████████████████████ 4,082
   ████████ 900

   4.54 × THE AVAILABLE VOLUME, EVERY CYCLE

   ┌──────────────────────────────────────────────┐
   │ FOUR LITRES OF SWARF EVERY FOUR MINUTES.     │
   │                                              │
   │ CHIPS CANNOT BE COLLECTED — THEY MUST BE     │
   │ CONTINUOUSLY SHED. That is an argument for   │
   │ OPEN CONSTRUCTION, not a bigger tray.        │
   └──────────────────────────────────────────────┘

   BULKING FACTORS [GUIDE]
     short chips (CI, brass)        2-4
     medium (steel, well broken)    4-8
     long stringy (Al, stainless)   8-20  ◄ why
                                            aluminium
                                            is a
                                            problem

  ──────────────────────────────────────────────────────────

  RELIEVED PADS — THE CHEAPEST BIG WIN

   FULL FACE                  RELIEVED
   ┌──────────────┐           ┌──────────────┐
   │▓▓▓▓▓▓▓▓▓▓▓▓▓▓│           │      ●       │
   │▓▓▓▓▓▓▓▓▓▓▓▓▓▓│           │   ●     ●    │
   └──────────────┘           └──────────────┘
   23,100 mm² exposed         1,847 mm² exposed

   IMPROVEMENT 12.5 ×
   (L1.1.2 gave 40.7× on a different geometry —
    the multiplier varies, the order does not)

   ┌──────────────────────────────────────────────┐
   │ A CHIP UNDER A LOCATOR GIVES A RANDOM ERROR  │
   │ WITH NO PATTERN — the hardest kind to        │
   │ diagnose and the kind most often blamed on   │
   │ the operator.                                │
   │                                              │
   │ WHETHER A CHIP *CAN* SIT THERE IS A DESIGN   │
   │ DECISION.                                    │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHY THE REPEATABILITY STUDY MISSED IT

   REPEATABILITY STUDY        REAL PRODUCTION
   clean fixture              chips everywhere
   clean part                 coolant, swarf
   → measures INHERENT        → tests ROBUSTNESS TO
     CAPABILITY                 CONTAMINATION

   BOTH ARE DESIGN PROPERTIES. THE STUDY ONLY
   TESTS ONE.

   ┌──────────────────────────────────────────────┐
   │ INCLUDE A DELIBERATELY CONTAMINATED          │
   │ CONDITION IN THE COMMISSIONING STUDY.        │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  COOLANT — THE FORGOTTEN HALF IS DRAINAGE

   ✗ FLAT-BOTTOMED RECESS     ✓ DRAINED
     ┌──────────────┐           ┌──────────────┐
     │░░░░░░░░░░░░░░│ 324 cm³   │              │
     └──────────────┘ of warm   └──o────────o──┘
                      coolant      Ø10 drains

   A FLAT-BOTTOMED RECESS BECOMES A BATH.
   2 °C part rise over 200 mm = 0.0046 mm growth

   SLOPES [PRACTICE]
     liquid drainage   2-5°
     chip sliding     15-30°  ◄ CHIPS NEED A MUCH
                                STEEPER SLOPE

  ──────────────────────────────────────────────────────────

  TOOL ACCESS — THE L1.3.6 RESULT APPLIED

   CLAMPS 38 mm              CLAMPS 15 mm
   holder Ø66 at 19 mm       holder now ABOVE the
   is ALONGSIDE the clamp    clamp; only the Ø16
                             tool is alongside
   46 − 33 = 13.0 mm ✗       46 − 8 = 38.0 mm ✓

   IMPROVEMENT 2.92 ×

  ──────────────────────────────────────────────────────────

  WHICH OBJECTIVE GOVERNS?

   tool access   ✗ → ✓  different clamps
   coolant       ✗ → ✓  two drilled holes
   accessibility ✓      improved by the same clamps
   CHIP EVACUATION ✗    4.54× — NOT A LOCAL FIX

   ┌──────────────────────────────────────────────┐
   │ "GOVERNING" MEANS THE ONE WHOSE SOLUTION     │
   │ CONSTRAINS EVERYTHING ELSE — NOT THE LARGEST │
   │ NUMBER.                                      │
   │                                              │
   │ Which is why chip evacuation belongs in the  │
   │ CONCEPT stage, beside the tool access review.│
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE INTERACTIONS

   ACCESSIBILITY ◄──CONFLICT──► TOOL ACCESS
     big reachable clamps        low clear clamps

   CHIP EVACUATION ◄─REINFORCE─► ACCESSIBILITY
     open construction serves BOTH

   CHIP EVACUATION ◄──CONFLICT──► SUPPORT (obj. 2)
     open below vs a support under the part

   COOLANT ◄──REINFORCE──► CHIP EVACUATION
     flood flushes chips away

   ┌──────────────────────────────────────────────┐
   │ NOT ALL INTERACTIONS ARE CONFLICTS.          │
   │ KNOWING WHICH PAIRS REINFORCE AND WHICH      │
   │ FIGHT IS THE CONTENT OF L2.2.6.              │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-7300 — PROCESS REQUIREMENTS
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: LOCATING PADS ITEMS 4, 5 AND 6 ARE RELIEVED
        WITH Ø28 RAISED CONTACTS. THE RELIEF IS A
        FUNCTIONAL REQUIREMENT — IT REDUCES THE
        CHIP-SENSITIVE AREA BY A FACTOR OF 12.5. DO
        NOT MACHINE THE PADS FULL-FACE.

NOTE 2: THE PROCESS PRODUCES APPROXIMATELY 4,000 cm³
        OF LOOSE SWARF PER COMPONENT. THE FIXTURE IS
        DESIGNED FOR CONTINUOUS CHIP SHEDDING. DO NOT
        ADD PLATES, GUARDS OR BRACKETS THAT WOULD
        CLOSE THE OPEN AREAS BENEATH THE COMPONENT.

NOTE 3: AIR BLAST ITEM 22 MUST OPERATE BEFORE EVERY
        LOAD AND BE DIRECTED AT PADS ITEMS 4, 5, 6.

NOTE 4: DRAIN HOLES ITEMS 31 AND 32 (2 × Ø10) MUST
        REMAIN CLEAR. WITHOUT THEM THE RECESS HOLDS
        324 cm³ OF COOLANT AGAINST THE COMPONENT.

NOTE 5: CLAMPS ITEMS 8-11 ARE LOW-PROFILE, MAXIMUM
        15 mm ABOVE THE COMPONENT. THIS IS A TOOL
        ACCESS REQUIREMENT — SEE L1.3.6 ANALYSIS ON
        SHEET 4. DO NOT SUBSTITUTE STANDARD CLAMPS.
```

Note 2 is unusual and deliberate. `[PRACTICE]` **Open areas beneath a fixture look like unfinished
design** and attract well-meaning additions — a bracket here, a cover plate there. Stating the swarf
volume explains why the openness is the design.

### 17. CAD workflow
1. Model the **loading path** and verify a straight-line approach with the clamps open
2. Check the operator's **line of sight** to the locating contacts
3. Run the **tool access review** — diameter against height for every tool (L1.3.6)
4. Calculate **chip volume per cycle** and mark the intended shedding paths on the model
5. Check every surface for **slope** — ≥15° for chips, ≥2° for coolant
6. Identify **every low point** and confirm a drain
7. Model the **air blast** nozzles and verify coverage of the locating pads
8. Run an **interference check with the clamps open** as well as closed

`[PRACTICE]` Step 8 catches a real problem: a fixture that is clear when clamped may have clamp arms
swinging into the loading path when open, which fails accessibility while passing every tool-access check.

### 18. GD&T application
The process objectives are largely **not** GD&T characteristics — they are geometry requirements
expressed as notes. Two do have geometric expression:

```
STANDARD: ASME Y14.5-2018

  RELIEVED PAD CONTACT FACES — these are the
  locating surfaces, so they carry the profile
  control:
  ┌──────────────────────────────┐
  │ ⌓ │ 0.01 │ A │               │
  └──────────────────────────────┘
  applied to the RAISED CONTACTS only, not the
  relieved area

  DRAIN AND CLEARANCE FEATURES — non-critical,
  so a generous tolerance is correct:
  ┌──────────────────────────────┐
  │ ⌖ │ Ø1.0 │ A │ B │ C │       │
  └──────────────────────────────┘

  ┌────────────────────────────────────────────┐
  │ THE SAME DELIBERATE ASYMMETRY AS L1.3.3:   │
  │ tight where it determines the part,        │
  │ generous where it only needs to not be in  │
  │ the way.                                   │
  │                                            │
  │ Note also that the RELIEF DEPTH needs only │
  │ a general tolerance — it just has to be    │
  │ deeper than any chip. 0.5-1.0 mm is ample. │
  │ [PRACTICE]                                 │
  └────────────────────────────────────────────┘
```

### 19. Manufacturing method
Relieved pads: machine the relief first, then **grind the raised contacts in position** so they are
coplanar (L2.2.1 §19). `[PRACTICE]` The relief itself needs no accuracy — it is simply material removed
so that a chip landing there does nothing.

Sloped chip surfaces are usually **milled into the fixture body** during general machining and cost
nothing extra if designed in; retrofitting them means re-machining.

Air blast nozzles and drain fittings are **bought-in standard components** (L0.5.2).

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Pad relief present | Visual | Raised contacts only |
| Raised contacts coplanar | CMM / surface plate | 0.01 mm |
| Relief depth | Depth gauge | 0.5–1.0 mm |
| Surface slopes | Protractor / model check | ≥15° chip, ≥2° coolant |
| Drains clear | Water test | Free draining |
| Air blast coverage | Functional check | Reaches all pads |
| Tool clearance | Physical trial with actual holders | ≥15 mm |
| Loading path clear | Physical trial with clamps open | Straight-line load |
| Chip shedding | Run a cycle, observe | No accumulation on pads |

`[PRACTICE]` The last check — **running a cycle and watching where the chips go** — is worth more than
any calculation. The chip volume calculation tells you the scale of the problem; observation tells you
whether the design solved it.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Treating chip evacuation as **housekeeping** | Random intermittent errors, blamed on the operator |
| 2 | **Full-face locating pads** | 12.5× more chip-sensitive area |
| 3 | Not **calculating chip volume** | Fixture designed for a fraction of the actual flow |
| 4 | Ignoring the **bulking factor** | Volume underestimated by 2–20× |
| 5 | **Closed pockets** that collect chips | Packing, recutting, force spikes |
| 6 | Surfaces sloped for **liquid but not chips** | 2° drains coolant; chips need 15° |
| 7 | **No drain** at a low point | Coolant bath under the part |
| 8 | Confusing **accessibility with tool access** | One optimised at the other's expense |
| 9 | Checking clearance **with clamps closed only** | Clamp arms foul the loading path when open |
| 10 | Relying on a **clean-condition repeatability study** | Robustness to contamination untested |
| 11 | Adding **plates or guards** to an intentionally open fixture | Chip shedding destroyed |
| 12 | Not sequencing **air blast before loading** | Chips already on the pads |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Random position errors, no pattern | Chip under a locator | Inspect pads after a cycle | Relieve pads; air blast | Design rule R6 |
| Errors worse later in a shift | Chip accumulation | Observe over time | Improve shedding | Chip volume calculation |
| Force spikes during cutting | Chips recut in a pocket | Observe the cut | Open the pocket; through-coolant | No closed pockets |
| Part warm on unload | Coolant pooling | Check for a bath | Drain holes | Design rule R10 |
| Part wet on unload, next op affected | No drainage | Water test | Drain holes | Design rule R11 |
| Operator slow to load | Poor accessibility | Time the load; observe | Clear the path; better clamps | Design rules R1, R2 |
| Clamp arm in the loading path | Checked closed only | Trial with clamps open | Relocate or change clamp type | CAD step 8 |
| Tool fouls a clamp | Access not checked at height | Diameter-vs-height table | Low-profile clamps | L1.3.6 |
| Coolant not reaching the cut | Blocked by the fixture | Observe the flow | Reposition nozzles; open a path | Design rule R9 |

### 23. Design checklist
- [ ] Is there a **straight-line loading path** with the clamps open?
- [ ] Can the operator **see the locating contacts**?
- [ ] Is the part within **manual handling limits**?
- [ ] Has the **tool access review** been done before placing clamps?
- [ ] Has **chip volume per cycle** been calculated with a bulking factor?
- [ ] Is there **somewhere for that volume to go**, within a cycle?
- [ ] Are all locating pads **relieved**?
- [ ] Are there **no closed pockets**?
- [ ] Are surfaces sloped **≥15° for chips**, not just for coolant?
- [ ] Is **air blast** provided and sequenced before loading?
- [ ] Is there a **drain at every low point**?
- [ ] Will the part be **dry enough on unload** for the next operation?
- [ ] Has the design been checked with the **clamps open** as well as closed?
- [ ] Is there a drawing note **prohibiting additions that close the open areas**?

### 24. Beginner exercise
**E2.2.3-B** — A milling operation runs at a_p = 2.5 mm, a_e = 45 mm, v_f = 700 mm/min for 3 minutes per
part, producing medium steel chips.
(a) Calculate the material removal rate in cm³/min.
(b) Calculate the solid chip volume per part.
(c) Using a bulking factor of 5, calculate the loose chip volume.
(d) The fixture has 600 cm³ of collection space. State whether chips can be collected or must be
continuously shed, with the ratio.
(e) A fixture has three full-face pads of 90 × 60 mm. Calculate the chip-exposure area, and the area if
each were relieved to a Ø25 raised contact. State the improvement factor.

### 25. Intermediate exercise
**E2.2.3-I** — A fixture holds an aluminium part machined at a_p = 4 mm, a_e = 80 mm, v_f = 2,400 mm/min
for 2.6 min of cutting per part. Aluminium produces long stringy chips; take a bulking factor of 14
`[GUIDE]`. The fixture has 1,400 cm³ of open space beneath the part, four full-face locating pads of
100 × 65 mm, a flat-bottomed recess 200 × 140 × 20 mm, and clamps 42 mm tall with the nearest edge 52 mm
from a hole. The chamfer tool holder is Ø72 sitting 17 mm above the part.
(a) Calculate the removal rate, solid volume and bulk chip volume per part.
(b) State the ratio of bulk volume to available space and what it implies.
(c) Calculate the chip-exposure area as designed, and with Ø30 relieved contacts. State the improvement.
(d) Identify a second problem with the four pads, referring to L2.2.1.
(e) Calculate the coolant pooling volume in the recess.
(f) Calculate the tool access clearance as designed and state whether it passes a 15 mm minimum.
(g) Determine the maximum clamp height that would allow the chamfer holder to clear.
(h) Rank the four process objectives for this fixture by severity and state which governs.

### 26. Advanced exercise
**E2.2.3-A** — A stainless steel component (long stringy chips, bulking factor 16 `[GUIDE]`) is machined
in a tombstone fixture on an HMC, four faces with three parts per face. Per part: roughing at a_p = 5 mm,
a_e = 70 mm, v_f = 450 mm/min for 6.5 min, then finishing at a_p = 0.5 mm, a_e = 70 mm, v_f = 900 mm/min
for 2.0 min. Twelve parts per pallet load. Each station has three full-face pads of 80 × 55 mm. Coolant
is flood only, at 40 litres/min. The pallet cycle is 110 minutes total.
(i) Calculate the removal rate, solid volume and bulk chip volume per part for roughing and finishing
separately.
(ii) Calculate the total bulk chip volume per pallet load.
(iii) Calculate the average chip generation rate in cm³/min over the pallet cycle.
(iv) Explain why an HMC is a fundamentally better answer than a VMC for this chip volume, quantifying the
argument where you can (refer to L1.1.4).
(v) Calculate the total chip-exposure area across all twelve stations, and with Ø26 relieved contacts.
(vi) Explain why chip sensitivity is worse on a tombstone than on a single-part VMC fixture, and quantify
the exposure per pallet load.
(vii) Assess whether 40 litres/min of flood coolant is plausibly sufficient to flush the chip volume
calculated, stating your reasoning and what additional information you would need.
(viii) Stainless steel work-hardens and produces hot chips. Explain two additional consequences for the
fixture beyond volume.
(ix) Propose a complete chip-management specification for this fixture.
(x) Write the five drawing notes covering the process objectives for this tombstone.

### 27. Interview questions
1. *"Why is chip evacuation a design issue rather than a housekeeping issue?"*
   **Answer:** Because whether a chip *can* sit under a locator is decided by the pad geometry, and that
   is the designer's decision. A chip under a locating pad lifts the part by its own thickness, which
   might be 0.05 to 0.5 mm, and at any reasonable tolerance that scraps the part — but it produces a
   random error with no pattern, so it gets diagnosed as operator carelessness rather than as a design
   defect. If the pads are relieved so that only small raised contacts touch the part, the area on which
   a chip actually matters drops by an order of magnitude — in the example we worked it was a factor of
   12.5, and in an earlier case 40.7. The other reason it is a design issue is scale: a fairly ordinary
   milling operation produced four litres of loose swarf every four minutes, which is four and a half
   times what the fixture could hold. That is a flow to be shed continuously, not a nuisance to be swept
   up, and it dictates the fixture's whole architecture.
2. *"What is the difference between accessibility and tool access?"*
   **Answer:** Accessibility is about the human — can the operator load and unload the part, reach the
   clamps, see the locating contacts, clean the surfaces. Tool access is about the machine — can the tool
   and its holder physically reach every feature. They matter for different reasons and they frequently
   conflict, because a fixture optimised for tool access has clamps that are low and out of the way,
   which tends to make them awkward to operate, while one optimised for accessibility has large easily
   reached handles that foul the tooling. That is a genuine trade-off rather than a case of one being
   right. One useful check is to test clearance with the clamps *open* as well as closed, because a clamp
   arm that swings into the loading path passes every tool-access check and still fails accessibility.

### 28. Expert questions
1. *"How much chip volume does a fixture actually have to handle, and why does nobody calculate it?"*
   **Answer:** Far more than people expect, and the reason nobody calculates it is that the two steps
   involved are each individually easy but are almost never put together.
   The first step is the material removal rate, which every process engineer knows: depth times width
   times feed rate. In the example in this lesson that gave 162 cubic centimetres a minute, and over a
   four-minute cutting cycle, 680 cubic centimetres of solid steel per part. That number alone sounds
   manageable — it is about the volume of a large mug.
   The second step is the one that gets missed. **Chips are not solid metal; they are a loose tangle with
   a great deal of air in them.** The bulking factor is typically four to eight for well-broken steel
   chips, two to four for short cast iron chips, and eight to twenty for long stringy aluminium or
   stainless swarf. At a factor of six, those 680 cubic centimetres become **over four litres of loose
   swarf per part** — four and a half times what the fixture in that example could physically hold.
   That reframes the problem completely. You are not designing somewhere for chips to collect; **you are
   designing a flow path for something like a litre a minute of tangled metal.** The design consequences
   follow directly: open construction rather than closed pockets, surfaces sloped at fifteen degrees or
   more because chips need a far steeper slope than liquid does, no horizontal ledges, and coolant flow
   working with gravity rather than against it. On a horizontal machining centre the chips fall away from
   the work entirely, which is a large part of why the machine exists.
   The reason it goes uncalculated, I think, is that chips feel like an operational matter rather than an
   engineering one. Removal rate belongs to the process engineer, the fixture belongs to the tool
   designer, and the swarf belongs to whoever empties the conveyor. **Nobody owns the number**, so nobody
   produces it — and the fixture gets designed as though chips were a nuisance to be swept up rather than
   a flow to be routed.
   The practical fix is trivially cheap: it is one line of arithmetic at concept stage, and it belongs
   alongside the tool access review, because both are constraints on the fixture's overall architecture
   rather than details to be resolved later.
2. *"A fixture passes its repeatability study but produces intermittent scrap in production. Where do you
   look?"*
   **Answer:** I would start from the observation that **the repeatability study and production are
   testing different properties**, and the gap between them is where the answer usually lies.
   A repeatability study is deliberately conducted on a clean fixture with a clean part, the same part
   throughout, in a short interval, usually by a careful person who knows they are being observed. That
   is correct — it measures the fixture's **inherent capability**, which is exactly what you want to know
   at commissioning. But it excludes, by design, almost everything that varies in production.
   So the things to look at are the differences. **Chips** are the first and by far the most common:
   whether a chip can land somewhere that matters is a design property, and full-face locating pads
   present an order of magnitude more sensitive area than relieved ones. The signature is random errors
   with no pattern and no consistent direction, often worsening through a shift as swarf accumulates. The
   test is simple — inspect the pads immediately after a cycle rather than after someone has cleaned up.
   **Thermal** is second. A study run in twenty minutes says nothing about what happens after six hours
   of production, and drift of 0.02 to 0.10 mm a shift is ordinary. The signature there is a mean that
   moves while the scatter stays constant, which distinguishes it from contamination.
   **Operator variation** is third, and it is why I would always repeat the study with a second person.
   If the range doubles with a different operator, the fixture depends on technique somewhere — usually
   clamping force applied by feel, which is fixed by a fixed-stop or calibrated clamp.
   **Part-to-part variation** is fourth and is the one the study explicitly excluded by using a single
   part. If the castings vary in form and the fixture is over-constrained, each part sits differently —
   the L2.2.1 mechanism — and that produces exactly the random, unpatterned scrap being described.
   The diagnostic sequence I would follow is to re-run the study under each of those conditions in turn:
   contaminated, late in the shift, second operator, and with several different parts rather than one.
   **Whichever condition reproduces the production scatter identifies the mechanism**, and it usually
   takes half a day.
   What I would take from it more generally is that a commissioning study should include those conditions
   from the start. Testing only the clean, careful, single-part case measures the fixture at its best,
   and the fixture at its best is not the thing that determines the scrap rate.

### 29. Summary
The four process objectives determine whether a process can run at all, as distinct from the first six
which determine whether the fixture holds the part correctly. Accessibility concerns human interaction —
a straight-line loading path, visibility of the locating contacts, reachable clamps and manual handling
within about 20–25 kg — and it conflicts directly with tool access, which concerns the machine's reach
and was fully treated in L1.3.6 where a chamfer tool with the lowest cutting force governed an entire
clamp layout. Chip evacuation is the objective most often dismissed as housekeeping and it is a design
requirement: whether a chip can sit under a locator is determined by the pad geometry, and relieving the
pads reduced the chip-sensitive area by a factor of 12.5 in the worked example. The calculation nobody
performs is the chip volume itself — 680 cm³ of solid steel per part became 4,082 cm³ of loose swarf at a
bulking factor of six, four and a half times the fixture's available space, which means chips must be
continuously shed rather than collected and dictates open construction, slopes of at least 15°, and no
closed pockets. Coolant has two halves, delivery and drainage, and drainage is the one forgotten: a
flat-bottomed recess holding 324 cm³ of warm coolant against the part is eliminated by two drilled holes.
Finally, these objectives interact in both directions — accessibility and tool access conflict while chip
evacuation and accessibility reinforce each other — and recognising which pairs do which is the subject
of L2.2.6.

### 30. Key takeaways
- **The first six objectives ask whether it holds the part; these four ask whether the process can run.**
- **Chip evacuation is design, not housekeeping.**
- **Calculate the chip volume.** 680 cm³ of steel became 4,082 cm³ of swarf — 4.54× the available space.
- **Bulking factors: 2–4 short, 4–8 medium, 8–20 long stringy** `[GUIDE]`.
- **Chips must be shed continuously, not collected** — that is an architecture decision.
- **Relieve every locating pad** — 12.5× less chip-sensitive area, at almost no cost.
- **A chip under a locator gives a random error with no pattern** — the hardest kind to diagnose.
- **Chips need 15–30° of slope; liquid needs 2–5°.**
- **Drainage is the forgotten half of coolant design.**
- **Accessibility is about the person; tool access is about the machine.** They conflict.
- **Check clearance with the clamps open**, not only closed.
- **A clean-condition repeatability study does not test robustness to contamination** — include a
  contaminated condition.
- **"Governing" means the objective whose solution constrains everything else**, not the largest number.
- **Optimising cycle time makes the chip problem worse.**

---

## LESSON L2.2.4 — THE HUMAN PAIR

### 1. Lesson title
**L2.2.4 — Safety and ergonomics: the objectives with a different kind of consequence**

### 2. Learning objective
By the end of this lesson you will be able to identify the principal hazards a fixture presents,
explain the hierarchy of risk control and apply it to fixture design, calculate stored energy in a
powered clamping system, assess manual handling and repetitive loading against recognised limits,
distinguish designing-out a hazard from warning about it, and specify a fixture that a person can use
safely for a full shift.

### 3. Prerequisites
L2.2.3 (accessibility), L2.1.5 (fixture vs machine, stored energy), L2.2.1 (clamping).

### 4. Why the topic matters
Every other objective in this module is measured in millimetres or rupees. **These two are measured in
injuries**, and that changes how they are treated.

```
   THE ASYMMETRY

   AN ACCURACY FAILURE
     → scrap, rework, cost
     → recoverable

   A SAFETY FAILURE
     → injury
     → NOT recoverable

   ┌──────────────────────────────────────────────┐
   │ SAFETY IS NOT ONE OBJECTIVE AMONG FOURTEEN   │
   │ TO BE TRADED AGAINST THE OTHERS.             │
   │                                              │
   │ IT IS A CONSTRAINT. The others are traded    │
   │ WITHIN the space of designs that are safe.   │
   └──────────────────────────────────────────────┘
```

`[PRACTICE]` **The applicable legal duties, standards and regulations depend entirely on the country, the
industry and the destination market of the equipment, and must be established for the specific project.**
This lesson covers the engineering principles that apply generally; it is not a substitute for the
applicable regulations, and where the two differ the regulations govern.

Ergonomics is the quieter of the two and it is often dismissed as comfort. It is not:

```
   ERGONOMICS AFFECTS THE OTHER OBJECTIVES
     directly and measurably

   An awkward fixture →
     ✗ slower loading         (productivity)
     ✗ inconsistent clamping  (repeatability)
     ✗ skipped cleaning       (chip evacuation)
     ✗ operator fatigue → errors late in a shift
     ✗ injury over months, not seconds

   ┌──────────────────────────────────────────────┐
   │ AN ERGONOMIC FAILURE DOES NOT ANNOUNCE       │
   │ ITSELF LIKE A SAFETY FAILURE. IT SHOWS UP AS │
   │ QUALITY AND PRODUCTIVITY PROBLEMS THAT GET   │
   │ ATTRIBUTED TO SOMETHING ELSE.                │
   └──────────────────────────────────────────────┘
```

### 5. Simple explanation

```
   OBJECTIVE 11 — SAFETY

     Can the fixture injure someone?

     THE MAIN HAZARDS
       ✗ CRUSH — fingers between clamp and part
       ✗ STORED ENERGY — hydraulic or spring
         release when power is removed
       ✗ SHARP EDGES on the fixture itself
       ✗ EJECTION — part or component thrown
       ✗ WEIGHT — dropping a heavy fixture or part
       ✗ ENTANGLEMENT with rotating tooling
       ✗ SWARF — hot, sharp, in the way of hands

  ─────────────────────────────────────────────────

   OBJECTIVE 12 — ERGONOMICS

     Can someone use it all day without harm or
     excessive effort?

       ✗ lifting too much, too often
       ✗ reaching too far, or above shoulder height
       ✗ awkward wrist or back posture
       ✗ high force to operate a clamp
       ✗ repetitive motion many times per shift
```

### 6. Engineering explanation

**THE HIERARCHY OF RISK CONTROL**

This is the framework that governs safety engineering, and it is ordered by effectiveness:

```
   1. ELIMINATE the hazard
        Remove it entirely by design.
        MOST EFFECTIVE.

   2. SUBSTITUTE with something less hazardous
        Lower pressure, lighter material, a
        different mechanism.

   3. ENGINEERING CONTROLS
        Guards, interlocks, two-hand controls,
        pressure relief.

   4. ADMINISTRATIVE CONTROLS
        Procedures, training, signage.

   5. PERSONAL PROTECTIVE EQUIPMENT
        Gloves, glasses.
        LEAST EFFECTIVE.

   ┌──────────────────────────────────────────────┐
   │ THE ORDER MATTERS AND IT IS ROUTINELY        │
   │ INVERTED IN PRACTICE.                        │
   │                                              │
   │ "Tell the operator to be careful" and "issue │
   │ gloves" are levels 4 and 5 — the two least   │
   │ effective — and they are the two most often  │
   │ reached for, because they are the cheapest   │
   │ and require no design change.                │
   │                                              │
   │ A DESIGNER'S CONTRIBUTION IS AT LEVELS 1-3.  │
   └──────────────────────────────────────────────┘
```

**APPLYING THE HIERARCHY TO A CRUSH HAZARD**

```
   HAZARD: fingers between a clamp and the part

   1 ELIMINATE
       Design the loading sequence so the hand is
       never in the closing zone. Load the part
       from the side; close the clamp from above.
       ✓ THE HAZARD NO LONGER EXISTS

   2 SUBSTITUTE
       Use a clamp with a slow closing action, or
       a low-force clamp with a mechanical
       advantage applied only at the end of travel.

   3 ENGINEERING CONTROL
       Two-hand control so both hands must be
       clear. Guarding. A gap too small to admit
       a finger, or large enough not to trap.

   4 ADMINISTRATIVE
       "Keep hands clear while clamping."

   5 PPE
       Gloves — which may make matters worse near
       rotating machinery.

   ┌──────────────────────────────────────────────┐
   │ ONLY LEVELS 1-3 SURVIVE A DISTRACTED         │
   │ OPERATOR ON A NIGHT SHIFT.                   │
   └──────────────────────────────────────────────┘
```

**STORED ENERGY — THE HAZARD SPECIFIC TO POWERED CLAMPING**

```
   A HYDRAULIC OR PNEUMATIC CLAMP HOLDS ENERGY
   WHEN THE POWER IS OFF.

   ✗ A clamp may release when pressure is lost —
     dropping the part
   ✗ Or it may STAY clamped, and release
     unexpectedly when pressure returns
   ✗ Accumulators hold energy indefinitely
   ✗ Springs in spring-loaded clamps do the same

   THE ENERGY STORED IN A PNEUMATIC VOLUME
   (isothermal approximation):

     E ≈ p · V · ln(p/p_atm)

   [GUIDE] This is a simplified estimate for
   comparing systems. The adiabatic case gives a
   different value, and the ACTUAL hazard depends
   on how the energy is released. Confirm against
   the applicable standard for any real assessment.

   ┌──────────────────────────────────────────────┐
   │ THE DESIGN RESPONSES                         │
   │  ✓ SPRING-APPLIED, PRESSURE-RELEASED clamps  │
   │    fail SAFE — loss of pressure CLAMPS       │
   │  ✓ Check valves holding pressure on failure  │
   │  ✓ Pressure relief and bleed points, clearly │
   │    marked                                    │
   │  ✓ Interlock with the machine so the cycle   │
   │    cannot start unclamped                    │
   │  ✓ A means of safe manual release            │
   └──────────────────────────────────────────────┘
```

`[PRACTICE]` **The fail-safe direction is a genuine design decision, not a default.** A clamp that
releases on pressure loss drops the part, which is dangerous if the part is heavy or the spindle is
turning. A clamp that stays clamped keeps the part safe but may trap it, requiring a documented release
method. **Which is correct depends on the consequences of each failure, and that must be reasoned about
explicitly.**

**ERGONOMICS — THE MEASURABLE PART**

```
   MANUAL HANDLING  [PRACTICE]

   Guideline limits vary by jurisdiction and by
   posture, frequency and the position of the load
   relative to the body. Commonly cited figures for
   occasional two-handed lifting at waist height,
   close to the body, are in the region of
   20-25 kg for men and lower for women — but
   THESE FIGURES REDUCE SHARPLY with:
     - distance from the body
     - height above or below waist level
     - twisting
     - frequency of repetition

   ┌──────────────────────────────────────────────┐
   │ ANY SPECIFIC LIMIT MUST BE TAKEN FROM THE    │
   │ APPLICABLE REGULATION OR ASSESSMENT METHOD   │
   │ FOR THE JURISDICTION. The figures above are  │
   │ INDICATIVE ONLY and are given to show the    │
   │ FORM of the dependence, not as a design      │
   │ limit. [PRACTICE]                            │
   └──────────────────────────────────────────────┘

   THE FIXTURE DESIGNER'S LEVERS
     ✓ reduce the part's lift height
     ✓ bring the load close to the body
     ✓ eliminate twisting — load straight in
     ✓ provide lifting points or a hoist above
       the manual limit
     ✓ reduce the frequency — multi-part fixtures
       load once for several parts
```

**REPETITIVE OPERATION**

```
   A CLAMP OPERATED 400 TIMES A SHIFT

   If each operation requires 80 N of hand force
   through a 90° arc, that is 400 repetitions of a
   forceful movement.

   THE FIXTURE DESIGNER'S LEVERS
     ✓ reduce the force — longer handle, better
       mechanical advantage
     ✓ reduce the count — fewer clamps, or one
       clamp actuating several
     ✓ reduce the travel
     ✓ power the clamping
     ✓ improve the posture — handle height and
       orientation

   ┌──────────────────────────────────────────────┐
   │ THE NUMBER OF CLAMPS IS AN ERGONOMIC         │
   │ DECISION AS WELL AS A MECHANICAL ONE.        │
   │                                              │
   │ Four clamps at 400 parts a shift is 1,600    │
   │ operations. Reducing to two halves it.       │
   └──────────────────────────────────────────────┘
```

**WHERE SAFETY AND ERGONOMICS CONFLICT WITH OTHER OBJECTIVES**

| Conflict | Nature |
|---|---|
| **Safety vs accessibility** | Guarding restricts access |
| **Ergonomics vs tool access** | Reachable handles foul tooling (L2.2.3) |
| **Ergonomics vs clamping force** | Higher clamp force means higher hand force |
| **Ergonomics vs productivity** | More clamps may be faster to design and slower to use |
| **Safety vs cost** | Interlocks, guards and powered clamping all cost money |

> **The last of these is the one to be careful about.** Safety is a constraint rather than a tradeable
> objective, so a cost argument that reduces safety below the applicable requirement is not a trade-off
> — it is a decision to operate unsafely, and it should be recognised and refused as such.

### 7. Terminology

| Term | Definition |
|---|---|
| **Hazard** | Something with the potential to cause harm |
| **Risk** | The combination of likelihood and severity of harm |
| **Hierarchy of control** | Ordered set of risk-reduction measures, most to least effective |
| **Eliminate** | Remove the hazard entirely by design |
| **Engineering control** | Physical measure — guard, interlock, relief valve |
| **Administrative control** | Procedure, training, signage |
| **PPE** | Personal protective equipment |
| **Stored energy** | Energy retained when power is removed |
| **Fail-safe** | Failing to a state that does not create a hazard |
| **Spring-applied, pressure-released** | Clamping arrangement that clamps on loss of pressure |
| **Two-hand control** | Requires both hands on controls, keeping them clear |
| **Interlock** | Device preventing operation unless a condition is met |
| **Manual handling** | Lifting, lowering, carrying or moving a load by hand |

### 8. Principle

> **SAFETY IS A CONSTRAINT, NOT A TRADEABLE OBJECTIVE.** The other objectives are traded within the
> space of designs that are safe.
> **APPLY THE HIERARCHY OF CONTROL IN ORDER: ELIMINATE, SUBSTITUTE, ENGINEER, ADMINISTER, PPE.** The
> designer's contribution is at the first three; the last two are the two most often reached for because
> they are cheapest.
> **ONLY LEVELS 1–3 SURVIVE A DISTRACTED OPERATOR ON A NIGHT SHIFT.**
> **THE FAIL-SAFE DIRECTION IS A DESIGN DECISION**, not a default — clamping on pressure loss protects
> the part, releasing protects against trapping, and which is correct depends on the consequences.
> **AN ERGONOMIC FAILURE DOES NOT ANNOUNCE ITSELF** — it appears as quality and productivity problems
> attributed to something else.
> `[PRACTICE]` **The applicable regulations depend on jurisdiction and market and must be established for
> the specific project.**

### 9. Industrial application

**The fixture hazard review**

```
   FOR EVERY FIXTURE  [PRACTICE]

   ┌──────────────┬────────────┬──────────────────┐
   │ HAZARD       │ WHO IS AT  │ CONTROL, AND AT  │
   │              │ RISK, WHEN │ WHICH LEVEL      │
   ├──────────────┼────────────┼──────────────────┤
   │ Crush at     │ operator,  │ Level 1: load    │
   │ clamp        │ loading    │ path avoids the  │
   │              │            │ closing zone     │
   ├──────────────┼────────────┼──────────────────┤
   │ Stored       │ operator,  │ Level 3: bleed   │
   │ hydraulic    │ maintenance│ valve, marked;   │
   │ energy       │            │ documented       │
   │              │            │ release method   │
   ├──────────────┼────────────┼──────────────────┤
   │ Sharp edges  │ anyone     │ Level 1: break   │
   │              │            │ all edges        │
   ├──────────────┼────────────┼──────────────────┤
   │ Part weight  │ operator   │ Level 3: lifting │
   │ 31 kg        │            │ eye + hoist      │
   ├──────────────┼────────────┼──────────────────┤
   │ Hot swarf    │ operator,  │ Level 3: air     │
   │              │ cleaning   │ blast, not hands │
   └──────────────┴────────────┴──────────────────┘

   EVERY ROW MUST NAME A CONTROL AND ITS LEVEL.
   A ROW WHOSE ONLY CONTROL IS AT LEVEL 4 OR 5
   SHOULD BE CHALLENGED.
```

**Designing out a crush hazard** `[EX-ASSUMED]` illustrative:

```
ORIGINAL DESIGN
  Toggle clamp closing downward onto the part.
  The operator positions the part with one hand
  and closes the clamp with the other. The
  positioning hand is directly under the clamp
  pad.

  Control proposed: a warning label and training.
  → LEVEL 4. The hazard remains.

REDESIGN
  1. Add a fixed locating stop so the part is
     positioned by the fixture, not held by hand
     → the hand is no longer needed in that zone
  2. Move the clamp so it closes onto a boss away
     from the loading grip point
  3. Increase the open gap so a hand cannot be
     trapped between pad and part

  → LEVEL 1. The hazard is ELIMINATED.

WHAT ELSE IMPROVED
  ✓ the locating stop improved REPEATABILITY —
    the part is no longer positioned by hand
  ✓ loading became faster — no need to hold the
    part steady
  ✓ the operator can now use both hands to place
    the part

┌──────────────────────────────────────────────┐
│ ELIMINATING THE HAZARD IMPROVED THREE OTHER  │
│ OBJECTIVES AT THE SAME TIME.                 │
│                                              │
│ THIS IS COMMON AND IT IS WORTH LOOKING FOR:  │
│ a design that requires a hand somewhere      │
│ dangerous is usually ALSO a design that      │
│ depends on operator skill for its accuracy.  │
└──────────────────────────────────────────────┘
```

### 10. Design rules
- **R1** — Treat safety as a **constraint**, not a tradeable objective `[PRACTICE]`.
- **R2** — Establish the **applicable regulations** for the jurisdiction and destination market at the
  start of the project.
- **R3** — Apply the **hierarchy of control in order**; justify any hazard controlled only at level 4 or
  5.
- **R4** — **Design the loading sequence so hands are never in a closing zone**.
- **R5** — For powered clamping, decide the **fail-safe direction explicitly** and record the reasoning.
- **R6** — Provide **marked bleed or relief points** and a documented safe release method.
- **R7** — **Break all edges** on the fixture.
- **R8** — Provide **lifting points** where the part or fixture exceeds manual handling limits.
- **R9** — Minimise the **number and force of clamp operations** — it is an ergonomic decision as well as
  a mechanical one.
- **R10** — Provide **air blast rather than hands** for chip clearance.
- **R11** — Consider the **cumulative effect over a shift**, not just a single operation.
- **R12** — Look for **hazard eliminations that improve other objectives** — they are common.

### 11. Rules of thumb
- **Safety is a constraint. The others are traded within it.**
- **Eliminate > substitute > engineer > administer > PPE.**
- **Only levels 1–3 survive a distracted operator on a night shift.**
- **"Be careful" and "wear gloves" are the two least effective controls** and the two most often chosen.
- **The fail-safe direction is a decision**, not a default.
- **Spring-applied, pressure-released clamps clamp on power loss.**
- **A hand needed in a dangerous place usually means accuracy depends on operator skill too.**
- **Ergonomic failures appear as quality and productivity problems.**
- **The number of clamps is an ergonomic decision** — 4 clamps × 400 parts = 1,600 operations.
- **Manual handling limits fall sharply with distance, height, twisting and frequency.**

### 12. Formulae

**Stored pneumatic energy** (isothermal approximation)
```
E ≈ p · V · ln(p/p_atm)
[GUIDE] A simplified estimate for COMPARING
systems. The adiabatic case differs, and the hazard
depends on the release mechanism. Confirm against
the applicable standard for a real assessment.
```

**Stored energy in a compressed spring**
```
E = ½ k x²
```

**Hydraulic clamp force**
```
F = p · A
where A = effective piston area
```

**Cumulative operations per shift**
```
N_ops = n_clamps × parts_per_shift × actions_per_clamp
```

**Manual handling assessment**
```
Any specific limit must come from the applicable
regulation or assessment method. The general FORM
of the dependence is:

Acceptable load DECREASES with:
   - horizontal distance from the body
   - vertical distance from waist height
   - trunk twisting
   - frequency of repetition
   - duration of the task

[PRACTICE] Use the jurisdiction's method. Do not
apply a single number without the context it
belongs to.
```

| Variable | Meaning | Unit |
|---|---|---|
| E | Stored energy | J |
| p | Absolute pressure | Pa |
| V | Volume | m³ |
| k | Spring rate | N/m |
| x | Spring compression | m |

### 13. Worked numerical example

**Problem:** A hydraulically clamped fixture is assessed for safety and ergonomics. Calculate the clamp
forces and stored energy, evaluate the fail-safe behaviour, assess the manual handling and repetitive
loading, apply the hierarchy of control, and determine what must change.

```
GIVEN:
  FIXTURE                                        [PROJ]
    Hydraulic clamping, 4 clamps
    System pressure          = 20 MPa
    Piston effective area    = 490 mm² each
    Accumulator volume       = 0.35 litre
    Currently PRESSURE-APPLIED (clamps when
      pressurised, releases when pressure is lost)

  PART                                           [PROJ]
    Mass                     = 31 kg
    Loaded by hand from a pallet at floor level
      to the fixture at 1,050 mm height
    Parts per shift          = 180

  MANUAL CLAMPING ALTERNATIVE                    [PROJ]
    4 toggle clamps
    Hand force per clamp     = 95 N
    Operations per clamp per part = 2 (close, open)

  MACHINE                                        [PROJ]
    Spindle runs at up to 8,000 rev/min
    Enclosed machining centre with door interlock

REQUIRED:
  (a) Clamp force per clamp and total
  (b) Stored energy in the accumulator
  (c) Assessment of the fail-safe direction
  (d) Manual handling assessment of the 31 kg part
  (e) Repetitive loading assessment for the manual
      clamping alternative
  (f) Application of the hierarchy of control to
      the principal hazards
  (g) The changes required
  (h) Engineering conclusion

ASSUMPTION:
  1. Stored energy calculated by the ISOTHERMAL
     approximation, which is a SIMPLIFIED ESTIMATE
     suitable for comparing systems. The actual
     hazard depends on the release mechanism and a
     real assessment MUST FOLLOW THE APPLICABLE
     STANDARD. [GUIDE]
  2. Hydraulic fluid treated as incompressible, so
     the stored energy is that of the accumulator's
     gas charge. This is the standard simplification
     and it is why accumulators, not the fluid, are
     the stored-energy hazard. [PRACTICE]
  3. Manual handling: no single numerical limit is
     applied, because the applicable limit depends
     on the jurisdiction's assessment method and on
     posture, frequency and load position. The
     assessment here is QUALITATIVE against the
     factors that method would consider. [PRACTICE]
  4. Hand forces and part mass are project values
     for this specific fixture. [PROJ]
  5. The fixture is inside an interlocked enclosure,
     so hazards during machining are controlled by
     the machine. The hazards assessed are those
     during LOADING, UNLOADING and MAINTENANCE.
     [PROJ]

FORMULA:
  (a) F = p · A
  (b) E ≈ p · V · ln(p/p_atm)
  (e) N_ops = n × parts × actions

UNIT CONVERSION:
  20 MPa = 20 × 10⁶ Pa
  490 mm² = 490 × 10⁻⁶ m²
  0.35 litre = 0.35 × 10⁻³ m³
  p_atm = 0.101 MPa = 0.101 × 10⁶ Pa
  Part weight = 31 × 9.81 = 304.1 N

SUBSTITUTION AND CALCULATION:

  (a) CLAMP FORCE

      F = p · A
        = 20 × 10⁶ × 490 × 10⁻⁶
        = 9,800 N per clamp

      Total = 4 × 9,800
            = 39,200 N

      → 39.2 kN of clamping force. For context,
        that is the weight of about 4 tonnes.
        A hand in the closing path of a 9.8 kN
        clamp is a severe crush hazard.

  (b) STORED ENERGY IN THE ACCUMULATOR

      E ≈ p · V · ln(p/p_atm)
        = 20×10⁶ × 0.35×10⁻³ × ln(20/0.101)
        = 7,000 × ln(198.02)
        = 7,000 × 5.2884
        = 37,019 J
        ≈ 37.0 kJ

      FOR CONTEXT:
        A 1 kg mass would need to fall
          h = E/(mg) = 37,019/(1 × 9.81)
            = 3,774 m
        to acquire that energy.

      ┌────────────────────────────────────────────┐
      │ 37 kJ IS A SUBSTANTIAL AMOUNT OF STORED    │
      │ ENERGY AND IT REMAINS IN THE SYSTEM AFTER  │
      │ THE POWER IS SWITCHED OFF.                 │
      │                                            │
      │ This is why an accumulator requires a      │
      │ marked bleed point and a documented        │
      │ isolation procedure before any maintenance.│
      └────────────────────────────────────────────┘

  (c) FAIL-SAFE DIRECTION

      CURRENT: PRESSURE-APPLIED
        Loss of pressure → clamps RELEASE
        → a 31 kg part is released while the
          spindle may still be turning at up to
          8,000 rev/min
        ✗ EJECTION HAZARD
        ✗ SEVERE

      ALTERNATIVE: SPRING-APPLIED, PRESSURE-RELEASED
        Loss of pressure → clamps CLAMP
        → the part is held
        ✓ No ejection
        ✗ The part may be TRAPPED, requiring a
          documented manual release
        → a lesser hazard, controllable at level 3

      COMPARING THE CONSEQUENCES:
        Ejection of a 31 kg part from a machine
        running at 8,000 rev/min: potentially
        fatal.
        A trapped part requiring a documented
        release procedure: an inconvenience with a
        controllable residual risk.

      → SPRING-APPLIED, PRESSURE-RELEASED IS
        CORRECT HERE.

      Note this is a REASONED CONCLUSION FROM THE
      CONSEQUENCES, not a general rule. On a light
      part with no ejection risk, where trapping
      would obstruct emergency access, the opposite
      might be right.

  (d) MANUAL HANDLING — THE 31 kg PART

      Factors that the applicable assessment method
      would consider:
        Mass                  31 kg — high
        Lift height           floor to 1,050 mm —
                              a full-height lift
        Distance from body    the part must be
                              reached into the
                              machine — LARGE
        Twisting              likely, turning from
                              pallet to machine
        Frequency             180 per shift —
                              approximately one
                              every 2.7 minutes over
                              8 hours

      ┌────────────────────────────────────────────┐
      │ EVERY ONE OF THESE FACTORS IS UNFAVOURABLE.│
      │                                            │
      │ Even without applying a specific numerical │
      │ limit, a 31 kg load lifted from floor      │
      │ level to above waist height, at arm's      │
      │ length, with twisting, 180 times a shift,  │
      │ IS NOT AN ACCEPTABLE MANUAL HANDLING TASK  │
      │ UNDER ANY ASSESSMENT METHOD I AM AWARE OF. │
      │                                            │
      │ THE SPECIFIC LIMIT MUST COME FROM THE      │
      │ APPLICABLE REGULATION — but the conclusion │
      │ here does not depend on which one.         │
      └────────────────────────────────────────────┘

      → A LIFTING AID IS REQUIRED. Level 3
        engineering control.

  (e) REPETITIVE LOADING — MANUAL CLAMPING

      N_ops = n_clamps × parts × actions
            = 4 × 180 × 2
            = 1,440 operations per shift

      At 95 N each, that is 1,440 forceful hand
      movements per shift — approximately
        1,440/8 = 180 per hour
        = one every 20 seconds

      ✗ NOT ACCEPTABLE as a repetitive task at
        that force.

      REDUCTION OPTIONS
        Halve the clamps to 2:
          N = 2 × 180 × 2 = 720   (÷2)
        Power the clamping:
          N = 1 × 180 × 2 = 360 button presses
          at negligible force   (÷4 in count, and
          the force essentially eliminated)

      → HYDRAULIC CLAMPING IS ERGONOMICALLY FAR
        SUPERIOR, which is an argument FOR the
        powered system despite its stored-energy
        hazard.

  (f) HIERARCHY OF CONTROL APPLIED

      ┌──────────────┬────────────────────┬───────┐
      │ HAZARD       │ CONTROL            │ LEVEL │
      ├──────────────┼────────────────────┼───────┤
      │ Crush,       │ Load path avoids   │ 1     │
      │ 9.8 kN clamp │ the closing zone;  │       │
      │              │ locating stop so   │       │
      │              │ no hand is needed  │       │
      ├──────────────┼────────────────────┼───────┤
      │ Ejection on  │ Spring-applied,    │ 1     │
      │ pressure     │ pressure-released  │       │
      │ loss         │ — hazard removed   │       │
      ├──────────────┼────────────────────┼───────┤
      │ 37 kJ stored │ Marked bleed       │ 3     │
      │ energy       │ point; documented  │       │
      │              │ isolation before   │       │
      │              │ maintenance        │       │
      ├──────────────┼────────────────────┼───────┤
      │ 31 kg manual │ Hoist / lifting    │ 3     │
      │ lift         │ aid                │       │
      ├──────────────┼────────────────────┼───────┤
      │ Repetitive   │ Powered clamping   │ 1     │
      │ 1,440 ops    │ — the task is      │       │
      │              │ removed            │       │
      ├──────────────┼────────────────────┼───────┤
      │ Sharp edges  │ Break all edges    │ 1     │
      ├──────────────┼────────────────────┼───────┤
      │ Hot swarf    │ Air blast, not     │ 3     │
      │              │ hands              │       │
      └──────────────┴────────────────────┴───────┘

      → FIVE OF SEVEN CONTROLLED AT LEVEL 1 OR 3.
        NONE relies on level 4 or 5 alone.

  (g) THE CHANGES REQUIRED

      1. CHANGE TO SPRING-APPLIED, PRESSURE-RELEASED
         clamping — eliminates the ejection hazard
      2. Fit a MARKED BLEED POINT and write the
         isolation procedure — 37 kJ stored
      3. Provide a HOIST for the 31 kg part
      4. Add a LOCATING STOP so the part is
         positioned by the fixture, removing the
         need for a hand in the clamp zone
      5. Break all edges
      6. Air blast for chip clearance

      NOTE that change 4 also improves
      REPEATABILITY — the part is no longer
      positioned by hand.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Clamp force each         │ 9,800 N           │
  │     Total                    │ 39,200 N          │
  │ (b) Stored energy            │ 37,019 J (37 kJ)  │
  │     equivalent fall, 1 kg    │ 3,774 m           │
  │ (c) Current fail direction   │ RELEASES ✗        │
  │     Required                 │ spring-applied,   │
  │                              │ pressure-released │
  │ (d) 31 kg lift               │ ✗ NOT ACCEPTABLE  │
  │                              │ — hoist required  │
  │ (e) Manual clamp operations  │ 1,440/shift ✗     │
  │     with 2 clamps            │ 720               │
  │     powered                  │ 360 low-force     │
  │ (f) Hazards at level 1 or 3  │ 7 of 7            │
  │ (g) Changes required         │ 6                 │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Safety is not treated by applying a factor to a
  calculated load. It is treated by ELIMINATING
  hazards where possible and controlling the
  remainder at the highest practicable level of the
  hierarchy. The equivalent of a margin here is that
  no hazard relies on administrative control or PPE
  alone.

PASS/FAIL:
  ✗ FAIL — pressure-applied clamping: releases a
    31 kg part with the spindle turning.
  ✗ FAIL — 31 kg manual lift, floor to 1,050 mm, at
    arm's length, with twisting, 180 times a shift.
  ✗ FAIL — 1,440 forceful clamp operations per shift.
  ✓ PASS — with the six changes, all seven hazards
    controlled at level 1 or 3.

ENGINEERING CONCLUSION:
  1. THE FAIL-SAFE DIRECTION WAS THE MOST SERIOUS
     FINDING AND IT WAS A DESIGN DEFAULT RATHER THAN
     A DECISION.
     Pressure-applied clamping is the obvious way to
     plumb a hydraulic circuit and it is what you get
     if you do not think about it. Here it means that
     a hose failure releases a 31 kg part while the
     spindle may be turning at 8,000 rev/min.
     THE CORRECTION — SPRING-APPLIED,
     PRESSURE-RELEASED — IS A LEVEL 1 CONTROL: IT
     DOES NOT GUARD THE HAZARD, IT REMOVES IT. And
     it costs no more than the alternative if
     specified at the outset.
     I WOULD MAKE "WHICH WAY DOES IT FAIL, AND WHAT
     HAPPENS THEN?" A STANDARD QUESTION FOR ANY
     POWERED CLAMPING SYSTEM.

  2. 37 kJ IS NOT AN INTUITIVE QUANTITY AND THAT IS
     WHY ACCUMULATORS ARE DANGEROUS.
     Expressed as pressure — 20 MPa in a 0.35 litre
     vessel — it sounds routine. Expressed as the
     energy of a 1 kg mass falling nearly four
     kilometres, it does not. The hazard is invisible
     because the system looks inert once the power is
     off.
     THIS IS PRECISELY WHY A MARKED BLEED POINT AND A
     WRITTEN ISOLATION PROCEDURE ARE NOT
     BUREAUCRACY. A maintenance fitter has no way of
     knowing, by looking, that the system is still
     charged.

  3. THE 31 kg LIFT FAILS ON EVERY FACTOR
     SIMULTANEOUSLY, AND THE CONCLUSION DOES NOT
     DEPEND ON WHICH ASSESSMENT METHOD IS USED.
     Heavy, from floor level, to above waist height,
     at arm's length into a machine, with twisting,
     180 times a shift. I have deliberately not
     applied a single numerical limit, because the
     applicable limit depends on the jurisdiction and
     on the assessment method — but every one of
     those factors reduces the acceptable load, and
     they are all unfavourable at once.
     WHEN A TASK FAILS ON EVERY FACTOR, THE
     ASSESSMENT METHOD DOES NOT MATTER. It needs a
     lifting aid.

  4. THE ERGONOMIC ARGUMENT SUPPORTS THE POWERED
     SYSTEM, WHICH IS WORTH NOTING BECAUSE THE
     SAFETY ARGUMENT SEEMED TO OPPOSE IT.
     Hydraulic clamping introduced a 37 kJ
     stored-energy hazard, which looks like a reason
     to prefer manual toggles. But manual clamping
     would require 1,440 forceful hand operations per
     shift — one every twenty seconds — which is not
     an acceptable repetitive task.
     SO THE TWO HUMAN OBJECTIVES POINT IN OPPOSITE
     DIRECTIONS, and the resolution is to keep the
     powered system and control its hazard at level 3
     rather than to remove it and create a worse
     ergonomic problem. THIS IS A GENUINE CONFLICT OF
     THE KIND L2.2.6 ADDRESSES.

  5. ELIMINATING THE CRUSH HAZARD IMPROVED
     REPEATABILITY AS WELL.
     Adding a locating stop so the part is positioned
     by the fixture rather than held by hand removes
     the reason for a hand to be in the clamp's
     closing zone. It also means the part's position
     no longer depends on the operator holding it
     steady — which is the L2.1.1 principle that a
     clamp must not be a locator, arrived at from a
     safety direction.
     A DESIGN THAT REQUIRES A HAND SOMEWHERE
     DANGEROUS IS USUALLY ALSO A DESIGN THAT DEPENDS
     ON OPERATOR SKILL FOR ITS ACCURACY. Looking for
     that overlap is worthwhile: the two problems
     often have one solution.

SENSITIVITY NOTE:
  Ranked by influence:
    1. FAIL-SAFE DIRECTION — binary, and the
       difference between a controlled system and one
       that can eject a 31 kg part. No other variable
       here approaches it in consequence.
    2. WHETHER A HAND IS REQUIRED IN THE CLAMP ZONE
       — also binary, and eliminated by a design
       change that costs one locating stop.
    3. PART MASS — 31 kg. Below about 20-25 kg the
       manual handling conclusion might change,
       though the other factors (height, distance,
       twisting, frequency) would still be
       unfavourable.
    4. NUMBER OF CLAMPS — linear in the repetitive
       loading count. Halving the clamps halves the
       operations.
    5. ACCUMULATOR VOLUME — linear in stored energy.
       Reducing it reduces the hazard magnitude but
       does not remove the need for a bleed point.
```

### 14. Engineering assumptions
- Stored energy by the **isothermal approximation** — a simplified estimate for comparing systems; a real
  assessment must follow the applicable standard `[GUIDE]`.
- Hydraulic fluid treated as incompressible, so stored energy is the accumulator's gas charge — the
  standard simplification, and the reason accumulators are the hazard `[PRACTICE]`.
- **No single numerical manual handling limit applied**, because the applicable limit depends on the
  jurisdiction's assessment method; the assessment is qualitative against the factors that method would
  consider `[PRACTICE]`.
- Hand forces and part mass are project values `[PROJ]`.
- Hazards during machining are controlled by the machine enclosure; those assessed are loading,
  unloading and maintenance `[PROJ]`.

### 15. Diagram

```
     THE HUMAN PAIR — SAFETY AND ERGONOMICS
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE ASYMMETRY

   AN ACCURACY FAILURE      A SAFETY FAILURE
     → scrap, cost            → injury
     → RECOVERABLE            → NOT RECOVERABLE

   ┌──────────────────────────────────────────────┐
   │ SAFETY IS NOT ONE OBJECTIVE AMONG FOURTEEN.  │
   │ IT IS A CONSTRAINT.                          │
   │                                              │
   │ The others are traded WITHIN the space of    │
   │ designs that are safe.                       │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE HIERARCHY OF CONTROL

   1 ELIMINATE      ████████████████████  most
   2 SUBSTITUTE     ███████████████       effective
   3 ENGINEER       ██████████
   4 ADMINISTER     █████
   5 PPE            ██                    least

   ┌──────────────────────────────────────────────┐
   │ "BE CAREFUL" AND "WEAR GLOVES" ARE LEVELS 4  │
   │ AND 5 — THE TWO LEAST EFFECTIVE — AND THE    │
   │ TWO MOST OFTEN REACHED FOR, because they are │
   │ cheapest and need no design change.          │
   │                                              │
   │ ONLY LEVELS 1-3 SURVIVE A DISTRACTED         │
   │ OPERATOR ON A NIGHT SHIFT.                   │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE FAIL-SAFE DECISION

   PRESSURE-APPLIED          SPRING-APPLIED,
                             PRESSURE-RELEASED
   pressure lost → RELEASES  pressure lost → CLAMPS
   ✗ 31 kg part ejected      ✓ part held
     with the spindle at     ✗ part may be TRAPPED
     8,000 rev/min             → documented release

   ┌──────────────────────────────────────────────┐
   │ THE FAIL-SAFE DIRECTION IS A DESIGN DECISION,│
   │ NOT A DEFAULT.                               │
   │                                              │
   │ Pressure-applied is what you get if you do   │
   │ not think about it. Here it can eject a      │
   │ 31 kg part.                                  │
   │                                              │
   │ ASK: "WHICH WAY DOES IT FAIL, AND WHAT       │
   │ HAPPENS THEN?"                               │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  37 kJ — WHY ACCUMULATORS ARE DANGEROUS

   AS PRESSURE          AS ENERGY
   20 MPa in 0.35 L     37,019 J
   "routine"            = a 1 kg mass falling
                          3,774 metres

   ┌──────────────────────────────────────────────┐
   │ THE HAZARD IS INVISIBLE BECAUSE THE SYSTEM   │
   │ LOOKS INERT ONCE THE POWER IS OFF.           │
   │                                              │
   │ A maintenance fitter has NO WAY OF KNOWING,  │
   │ BY LOOKING, that it is still charged.        │
   │                                              │
   │ → marked bleed point + written isolation     │
   │   procedure. Not bureaucracy.                │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  MANUAL HANDLING — EVERY FACTOR UNFAVOURABLE

   mass          31 kg          ✗ high
   lift height   floor→1,050 mm ✗ full height
   distance      into a machine ✗ arm's length
   twisting      pallet→machine ✗ present
   frequency     180/shift      ✗ one per 2.7 min

   ┌──────────────────────────────────────────────┐
   │ WHEN A TASK FAILS ON EVERY FACTOR, THE       │
   │ ASSESSMENT METHOD DOES NOT MATTER.           │
   │                                              │
   │ [PRACTICE] Specific limits must come from    │
   │ the applicable regulation — but this         │
   │ conclusion does not depend on which one.     │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  REPETITIVE LOADING — THE COUNT NOBODY COUNTS

   4 clamps × 180 parts × 2 actions = 1,440/shift
     = one forceful movement every 20 seconds ✗

   2 clamps                          =   720  (÷2)
   powered                           =   360 button
                                        presses at
                                        negligible
                                        force

   ┌──────────────────────────────────────────────┐
   │ THE NUMBER OF CLAMPS IS AN ERGONOMIC         │
   │ DECISION AS WELL AS A MECHANICAL ONE.        │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE TWO HUMAN OBJECTIVES CONFLICTED

   SAFETY said            ERGONOMICS said
   powered clamping       manual clamping is
   adds a 37 kJ hazard    1,440 ops/shift — worse

   RESOLUTION: keep the powered system, control
   its hazard at level 3.

   ┌──────────────────────────────────────────────┐
   │ REMOVING THE HAZARD WOULD HAVE CREATED A     │
   │ WORSE ERGONOMIC PROBLEM. A GENUINE CONFLICT  │
   │ OF THE KIND L2.2.6 ADDRESSES.                │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE OVERLAP WORTH LOOKING FOR

   HAND NEEDED IN THE     PART POSITIONED BY HAND
   CLAMP ZONE             = accuracy depends on
   = crush hazard           operator skill
        ╲                     ╱
         ╲                   ╱
          ▼                 ▼
      ONE SOLUTION: A LOCATING STOP
      ✓ eliminates the crush hazard  (level 1)
      ✓ improves repeatability
      ✓ speeds up loading

   ┌──────────────────────────────────────────────┐
   │ A DESIGN THAT REQUIRES A HAND SOMEWHERE      │
   │ DANGEROUS IS USUALLY ALSO A DESIGN THAT      │
   │ DEPENDS ON OPERATOR SKILL FOR ITS ACCURACY.  │
   │                                              │
   │ THE TWO PROBLEMS OFTEN HAVE ONE SOLUTION.    │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-7400 — SAFETY REQUIREMENTS
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: CLAMPING IS SPRING-APPLIED AND
        PRESSURE-RELEASED. LOSS OF HYDRAULIC
        PRESSURE CLAMPS THE COMPONENT. THIS
        ARRANGEMENT IS A SAFETY REQUIREMENT — DO NOT
        RE-PLUMB AS PRESSURE-APPLIED. THE COMPONENT
        MASS IS 31 kg AND RELEASE DURING SPINDLE
        ROTATION WOULD PRESENT AN EJECTION HAZARD.

NOTE 2: THE HYDRAULIC SYSTEM CONTAINS AN ACCUMULATOR
        STORING APPROXIMATELY 37 kJ AT WORKING
        PRESSURE. THIS ENERGY REMAINS AFTER THE POWER
        IS ISOLATED. BLEED VALVE ITEM 44 MUST BE
        OPERATED AND PRESSURE VERIFIED AT ZERO BEFORE
        ANY MAINTENANCE. SEE PROCEDURE MS-7400.

NOTE 3: COMPONENT MASS 31 kg. MANUAL LIFTING IS NOT
        PERMITTED. USE HOIST AND LIFTING EYE ITEM 51.

NOTE 4: LOCATING STOP ITEM 18 POSITIONS THE COMPONENT
        SO THAT NO HAND IS REQUIRED WITHIN THE CLAMP
        CLOSING ZONE. DO NOT REMOVE.

NOTE 5: ALL EDGES BROKEN 0.5 mm MINIMUM.

NOTE 6: CHIP CLEARANCE BY AIR BLAST ITEM 22 ONLY.
        DO NOT CLEAR CHIPS BY HAND.
```

Note 4 is the one worth copying, because it records that a seemingly minor locating feature is a **safety
control**. `[PRACTICE]` Without that note, a stop that appears redundant on a clamped part is exactly the
kind of item removed during a cost-reduction exercise.

### 17. CAD workflow
1. Model the **operator's loading motion**, including hand positions, not just the part's final position
2. Identify every **closing zone** and check whether a hand is required there
3. Model **clamps in the open position** and check the loading path (L2.2.3 CAD step 8)
4. Model **guards and enclosure boundaries** where they exist
5. Model **lifting points** and verify hoist access
6. Model the **hydraulic or pneumatic circuit** including the accumulator, so the stored-energy scope is
   visible
7. Mark **bleed and isolation points** as distinct components
8. Produce the **hazard review table** from the model

`[PRACTICE]` Step 1 is the one people skip. **Modelling the part's final position tells you nothing about
where the operator's hands were on the way there** — and the hands are where the injury happens.

### 18. GD&T application
Safety and ergonomics are **not** GD&T characteristics. Two related points matter:

```
  EDGE BREAKS are a dimensional requirement and
  should be specified, not left to the machinist:

    ALL EDGES BROKEN 0.5 mm MIN

  [STD] ISO 13715 covers the specification of edges
  of undefined shape and gives a notation for
  specifying edge condition. Confirm against the
  applicable standard.

  ┌────────────────────────────────────────────┐
  │ THE WIDER POINT IS THAT SAFETY-RELEVANT    │
  │ FEATURES MUST BE SPECIFIED WITH THE SAME   │
  │ FORMALITY AS FUNCTIONAL ONES.              │
  │                                            │
  │ An edge break left to "workshop practice"  │
  │ is not specified at all. A lifting eye     │
  │ without a stated capacity is not specified │
  │ either.                                    │
  └────────────────────────────────────────────┘
```

### 19. Manufacturing method
`[PRACTICE]` Safety-relevant manufacturing points:

| Item | Requirement |
|---|---|
| **Edge breaks** | Specified dimensionally, applied to every exposed edge |
| **Lifting eyes** | Proprietary rated components (L0.5.2), never fabricated ad hoc, with the rating marked |
| **Hydraulic components** | Rated for the working pressure with an appropriate margin; proprietary |
| **Bleed valves** | Accessible without dismantling, and clearly marked |
| **Guards** | Where fitted, secured so removal requires a tool |

> **Lifting eyes deserve particular note.** A fabricated lifting point of unknown capacity is a hazard
> disguised as a safety feature. `[PRACTICE]` Use rated proprietary components and mark the capacity.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Fail-safe direction | Isolate pressure, observe | Clamps remain clamped |
| Bleed valve function | Operate, verify zero pressure | Reaches zero, gauge confirms |
| Bleed valve marking | Visual | Clearly identified |
| Clamp force | Load cell | 9,800 N ±10% each |
| No hand required in the closing zone | Physical trial, observed | Confirmed |
| Lifting eye rating | Marking and certification | Rated above the load |
| Edge breaks | Visual and tactile | All edges broken |
| Air blast function | Functional check | Operates |
| Hazard review complete | Document review | Every hazard, control and level recorded |

`[PRACTICE]` **The fail-safe test is done by isolating the supply and watching what happens** — it takes a
minute and it is the single most important check on a powered clamping system.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Treating safety as a **tradeable objective** | Cost arguments erode a constraint |
| 2 | Controlling a hazard at **level 4 or 5** when level 1 is available | Fails with a distracted operator |
| 3 | **Pressure-applied clamping** by default | Releases the part on pressure loss |
| 4 | Not identifying **stored energy** | Maintenance injury |
| 5 | **No bleed point**, or an unmarked one | System charged when believed dead |
| 6 | Requiring a **hand in the closing zone** | Crush hazard, and usually poor repeatability too |
| 7 | Ignoring **cumulative** repetitive loading | 1,440 operations a shift unnoticed |
| 8 | **Fabricated lifting eyes** of unknown capacity | A hazard disguised as a safety feature |
| 9 | Edge breaks left to **workshop practice** | Not specified at all |
| 10 | Modelling only the **part's final position** | Hand positions never considered |
| 11 | Assuming a **single manual handling number** applies universally | Wrong limit for the jurisdiction and posture |
| 12 | Removing a **safety-relevant locating stop** in a cost review | Hazard reintroduced |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Part released when power failed | Pressure-applied clamping | Isolate and observe | Convert to spring-applied | Design rule R5 |
| Injury or near-miss at clamping | Hand required in the closing zone | Observe the loading | Locating stop; redesign path | Design rule R4 |
| Maintenance injury on a "dead" system | Stored energy not released | Check for a bleed point | Fit and mark one; write the procedure | Design rule R6 |
| Operator fatigue late in a shift | Repetitive loading or heavy lifting | Count operations; assess the lift | Power the clamping; fit a hoist | Design rules R8, R9 |
| Clamping inconsistent late in a shift | Operator fatigue | Compare morning and afternoon | Reduce hand force | Ergonomic assessment |
| Cuts on hands | Sharp edges, or hands used for chips | Inspect edges; observe cleaning | Break edges; air blast | Design rules R7, R10 |
| Loading slow | Poor ergonomics | Time the load; observe posture | Improve access and posture | L2.2.3 |
| Safety feature found removed | Purpose not recorded | Compare against the drawing | Reinstate; add a note | Design rule R12 |

### 23. Design checklist
- [ ] Have the **applicable regulations** for the jurisdiction and market been established?
- [ ] Has a **hazard review** been completed, with a control and its level for every hazard?
- [ ] Is any hazard controlled **only at level 4 or 5**? Can it be raised?
- [ ] Is a **hand ever required in a closing zone**?
- [ ] For powered clamping, has the **fail-safe direction been decided and justified**?
- [ ] Is **stored energy** identified, with a marked bleed point and a written procedure?
- [ ] Are **lifting points rated and marked** where the load exceeds manual limits?
- [ ] Have **cumulative operations per shift** been counted?
- [ ] Is the **hand force** per clamp operation acceptable at that frequency?
- [ ] Are **all edges broken**, specified dimensionally?
- [ ] Is **chip clearance by air blast**, not by hand?
- [ ] Have the **operator's hand positions** been modelled, not just the part's?
- [ ] Are **safety-relevant features noted as such** on the drawing?

### 24. Beginner exercise
**E2.2.4-B** — A pneumatic clamp operates at 0.6 MPa with a piston area of 1,250 mm².
(a) Calculate the clamp force.
(b) State the five levels of the hierarchy of control in order.
(c) A crush hazard exists where the operator's hand holds the part while the clamp closes. Propose a
control at level 1 and one at level 4, and state which is preferable and why.
(d) A fixture has three clamps, each operated twice per part, on 240 parts per shift. Calculate the
number of clamp operations per shift.
(e) State two design changes that would reduce that number, with the resulting count for each.

### 25. Intermediate exercise
**E2.2.4-I** — A hydraulic fixture operates at 16 MPa with six clamps of 380 mm² piston area, and an
accumulator of 0.25 litre. The part weighs 18 kg and is lifted from a trolley at 700 mm to the fixture at
1,100 mm, 150 parts per shift. The machine is enclosed with a door interlock.
(a) Calculate the clamp force per clamp and the total.
(b) Calculate the stored energy in the accumulator using the isothermal approximation.
(c) Express that energy as the fall height of a 1 kg mass.
(d) The system is currently pressure-applied. State what happens on a hose failure and assess the
consequence.
(e) State the fail-safe arrangement you would specify and justify it from the consequences.
(f) Assess the manual handling task qualitatively against the factors an assessment method would consider.
(g) Produce a hazard review table with at least five hazards, each with a control and its level.
(h) Identify one change that would improve both a safety objective and a non-safety objective, and state
which objectives.

### 26. Advanced exercise
**E2.2.4-A** — A large welding fixture holds a 96 kg fabricated assembly. It has eight pneumatic clamps
at 0.7 MPa with 2,200 mm² pistons, a 2.0 litre air receiver, and a pneumatic rotary indexer that turns
the assembly through 180°. The operator loads components by hand into the fixture, clamps them, indexes,
welds the second side, unclamps and unloads. Cycle 14 minutes; 32 assemblies per shift; two operators
alternating. Welding produces fume, spatter and UV.
(i) Calculate the clamp force per clamp and the total.
(ii) Calculate the stored energy in the receiver and express it as an equivalent fall height.
(iii) Identify at least eight distinct hazards across loading, clamping, indexing, welding and unloading.
(iv) For each, state a control and its level in the hierarchy, and identify any controlled only at level
4 or 5.
(v) The rotary indexer turns a 96 kg assembly. State three specific hazards it introduces and the
controls for each.
(vi) Assess the manual handling qualitatively — components are lifted individually, the heaviest being
23 kg.
(vii) Calculate the total clamp operations per shift across both operators.
(viii) The customer proposes removing the indexer and having operators turn the assembly manually to save
cost. Assess this proposal on safety, ergonomics, productivity and cost, and state your recommendation.
(ix) Explain why welding fume, spatter and UV are fixture design concerns and not solely PPE matters.
(x) Write the eight drawing notes covering the safety requirements for this fixture.

### 27. Interview questions
1. *"What is the hierarchy of control, and why does the order matter?"*
   **Answer:** It is the ordered set of ways to reduce risk, from most to least effective: eliminate the
   hazard, substitute something less hazardous, apply engineering controls like guards and interlocks,
   apply administrative controls like procedures and training, and finally personal protective equipment.
   The order matters because effectiveness falls sharply down the list. If you eliminate a hazard by
   design, it cannot hurt anyone regardless of what happens afterwards. If you rely on a procedure, it
   protects people only while everyone follows it, which is not the same as always. The practical problem
   is that the order gets inverted in practice, because "tell the operator to be careful" and "issue
   gloves" are the cheapest responses and require no design change — so the two least effective controls
   are the two most often chosen. As a designer my contribution is at the first three levels, and I would
   challenge any hazard on a fixture whose only control is a warning label.
2. *"A hydraulic clamp loses pressure. What should happen?"*
   **Answer:** That depends on the consequences of each option, and the important thing is that it should
   be a decision rather than a default. Pressure-applied clamping — which is what you get if you just
   plumb it the obvious way — releases the part when pressure is lost. If the part is heavy and the
   spindle may be turning, that is an ejection hazard and potentially fatal. Spring-applied,
   pressure-released clamping does the opposite: it clamps when pressure is lost, so the part stays put,
   but the part may be trapped and you need a documented manual release method. On a heavy part in a
   machining centre I would specify spring-applied, because ejection is far worse than trapping. On a
   light part where trapping might obstruct emergency access, the answer could be the other way. The
   question I would always ask is "which way does it fail, and what happens then?" — and I would also
   check for an accumulator, because that stores energy which remains after the power is isolated.

### 28. Expert questions
1. *"Why do you say safety is a constraint rather than an objective?"*
   **Answer:** Because objectives get traded against one another, and safety cannot be traded in the same
   way — the arithmetic that works for the other thirteen does not work for this one.
   Consider how the other objectives behave. Accuracy can be relaxed if the tolerance allows it.
   Productivity can be sacrificed for cost, or cost for productivity. Chip evacuation can be
   compromised if you accept more cleaning. In each case you are comparing quantities of the same kind —
   money, time, millimetres — and the trade produces a defensible answer.
   **Safety is not that kind of quantity.** A cost argument that reduces a fixture's safety below the
   applicable requirement is not a trade-off producing a cheaper design; it is a decision to operate
   unsafely, and describing it as a trade-off disguises what has happened. The consequence is not
   recoverable in the way scrap is: you can re-make a part.
   So the structure I use is that safety defines the **space of admissible designs**, and the other
   thirteen objectives are optimised **within** that space. If a design fails the safety requirement it
   is not a candidate at all, whatever its other merits — in the same way that a fixture that cannot hold
   the tolerance is not a candidate however cheap it is.
   That said, I want to be careful not to make this sound absolute in a way that stops thinking. **Risk
   is not eliminated, it is reduced to an acceptable level**, and what is acceptable is defined by the
   applicable regulations and by a reasoned assessment — which does involve judgement about likelihood
   and severity. There is real engineering in deciding whether a hazard needs a level 1 elimination or is
   adequately controlled at level 3. What there is not is a legitimate argument that a hazard should be
   left uncontrolled because controlling it costs money.
   The practical consequence in my work is the order I do things in. I establish the safety constraints
   before optimising anything else, because a design optimised first and made safe afterwards tends to
   acquire guards and warnings — levels 3 to 5 — where an earlier consideration would have eliminated the
   hazard for nothing. **The cheapest safety is designed in at concept; the most expensive is added at
   commissioning.**
2. *"Ergonomics is often treated as a comfort issue. Make the engineering case for it."*
   **Answer:** The comfort framing is why it gets deprioritised, and it is wrong on the facts —
   **ergonomic failures show up as measurable engineering problems**, they simply show up somewhere else
   and get attributed to something else.
   Take the four mechanisms in turn. **Repeatability**: if a clamp requires ninety-five newtons of hand
   force and is operated fourteen hundred times a shift, the force applied at the end of the shift is not
   the force applied at the start. That variation goes straight into clamping force, and from there into
   part position and distortion. A repeatability study run in the morning by a fresh operator will not
   find it, which is exactly the gap discussed in L2.2.3.
   **Productivity**: an awkward loading motion is a slower loading motion, every cycle, for the life of
   the fixture. In the L2.1.1 example the difference between eleven minutes and forty-two seconds of
   loading was worth over a million rupees a year. Ergonomics operates on the same multiplier — a
   five-second penalty at forty thousand parts a year is fifty-five hours.
   **Chip evacuation and housekeeping**: if cleaning a locating pad requires an awkward reach, it gets
   done less often. That is not a discipline failure, it is a predictable response to a design that made
   the right action difficult. And a chip under a locator is a scrapped part.
   **Errors**: fatigue produces mistakes, and the mistakes appear late in a shift and on night shifts.
   Intermittent quality problems that correlate with time of day are frequently ergonomic in origin, and
   they are almost never diagnosed that way because nobody is looking for it.
   Then there is the effect that is not about quality at all: **injury develops over months rather than
   seconds**. A task that is merely awkward is tolerable once and harmful five thousand times. That is a
   real cost to the person and to the business, and it accrues invisibly until someone is off work.
   So the engineering case is that ergonomics is not a fifteenth objective competing with the others —
   **it is a mechanism through which several of the others fail.** When I find inconsistent clamping,
   slow loading, poor housekeeping and afternoon quality problems on the same fixture, I do not treat
   them as four separate issues. I go and watch someone use it.

### 29. Summary
Safety and ergonomics differ from the other twelve objectives because their failures are measured in
injuries rather than in millimetres or rupees, and safety in particular is a constraint rather than a
tradeable objective — the other objectives are optimised within the space of designs that are safe. The
governing framework is the hierarchy of control: eliminate, substitute, engineer, administer, PPE, in
descending order of effectiveness, with the designer's contribution at the first three and the last two
being the two most often chosen because they are cheapest. Only the first three survive a distracted
operator on a night shift. For powered clamping the fail-safe direction is a design decision rather than
a default — the worked example found a pressure-applied system that would release a 31 kg part with the
spindle potentially at 8,000 rev/min, corrected by spring-applied pressure-released clamping, which is a
level 1 control because it removes the hazard rather than guarding it. Stored energy is the hazard
specific to powered systems and it is invisible: 20 MPa in a 0.35 litre accumulator sounds routine, while
37 kJ expressed as a 1 kg mass falling 3,774 m does not, and it remains after the power is isolated.
Ergonomics is not a comfort matter but a mechanism through which other objectives fail — the same example
found a 31 kg lift failing on every factor an assessment method would consider, and 1,440 forceful clamp
operations per shift, one every twenty seconds. Finally, the two human objectives conflicted, since
manual clamping would have removed the stored-energy hazard while creating a worse repetitive-loading
problem, and eliminating the crush hazard with a locating stop also improved repeatability — because a
design requiring a hand somewhere dangerous is usually also one that depends on operator skill for its
accuracy.

### 30. Key takeaways
- **Safety is a constraint, not a tradeable objective.** The others are traded within it.
- **Eliminate > substitute > engineer > administer > PPE**, in that order.
- **Only levels 1–3 survive a distracted operator on a night shift.**
- **"Be careful" and "wear gloves"** are the two least effective controls and the two most often chosen.
- **The fail-safe direction is a decision, not a default** — ask "which way does it fail, and what
  happens then?"
- **Spring-applied, pressure-released clamps on power loss** — correct where ejection is the worse
  hazard.
- **37 kJ remains in an accumulator after the power is off**, and it is invisible.
- **Marked bleed points and written procedures are not bureaucracy** — a fitter cannot see stored energy.
- **When a manual handling task fails on every factor, the assessment method does not matter.**
- **Count the cumulative operations** — 4 clamps × 180 parts × 2 = 1,440 a shift.
- **The number of clamps is an ergonomic decision** as well as a mechanical one.
- **Ergonomics is a mechanism through which other objectives fail** — repeatability, productivity,
  housekeeping, errors.
- **A hand needed somewhere dangerous usually means accuracy depends on operator skill too** — one
  solution fixes both.
- **The cheapest safety is designed in at concept; the most expensive is added at commissioning.**
- `[PRACTICE]` **Applicable regulations depend on jurisdiction and market** and must be established for
  the project.

---

## LESSON L2.2.5 — THE BUSINESS PAIR

### 1. Lesson title
**L2.2.5 — Productivity and cost reduction: should this fixture exist at all?**

### 2. Learning objective
By the end of this lesson you will be able to break a cycle time into its components and identify which
the fixture controls, calculate the productivity effect of a fixture change, distinguish the fixture's
cost from the cost it removes, build a total cost of ownership model including maintenance and
changeover, evaluate a fixture proposal on payback and on capacity, and recognise when the correct answer
is not to build a fixture at all.

### 3. Prerequisites
L2.1.1 (fixture economics, payback), L2.1.3 (break-even, programme life), L2.1.5 (capacity check),
L1.3.6 (cost of an extra setup).

### 4. Why the topic matters
The first twelve objectives determine whether a fixture works. **These two determine whether it should
exist** — and a fixture that fails them has failed completely, however well it performs on the other
twelve. That is precisely the subject of case study CS-01 in the next lesson.

```
   THE TWELVE TECHNICAL OBJECTIVES ANSWER
     "does it work?"

   THE TWO BUSINESS OBJECTIVES ANSWER
     "was it worth building?"

   ┌──────────────────────────────────────────────┐
   │ THESE ARE INDEPENDENT QUESTIONS. A FIXTURE   │
   │ CAN BE EXCELLENT ON ALL TWELVE AND STILL BE  │
   │ A COMMERCIAL FAILURE.                        │
   └──────────────────────────────────────────────┘
```

You have already met the two calculations that dominate this lesson:

| Calculation | Where |
|---|---|
| **Payback from setup time saved** | L2.1.1 — ₹1,347,480/yr, 1.6 months |
| **Break-even against a cheaper option** | L2.1.3 — 10,400 parts ≈ 21 months |
| **Capacity check inverting the answer** | L2.1.5 — 3,750 h needed vs 360 available |
| **Cost of an extra setup** | L1.3.6 — ₹462,000/yr vs ₹5,200 of clamps |

**What this lesson adds is the structure**: where cycle time actually goes, what a fixture genuinely
costs over its life, and the specific question of when *not* to build one.

### 5. Simple explanation

```
   OBJECTIVE 13 — PRODUCTIVITY

     How many good parts per hour?

     CYCLE TIME = load + clamp + cut + unclamp
                  + unload + clean

     THE FIXTURE CONTROLS EVERYTHING EXCEPT THE
     CUTTING TIME.

  ─────────────────────────────────────────────────

   OBJECTIVE 14 — COST REDUCTION

     Does the fixture cost less than the problem
     it solves?

     THE FIXTURE'S COST is not just its price:
       design + manufacture + commissioning
       + maintenance + storage + the machine time
       it occupies

     THE COST IT REMOVES:
       setup time + scrap + skill dependency
       + extra setups + inspection
```

### 6. Engineering explanation

**OBJECTIVE 13 — PRODUCTIVITY: WHERE THE CYCLE TIME GOES**

```
   A TYPICAL CYCLE, BROKEN DOWN

     LOAD          part into the fixture
     CLAMP         secure it
     ─── door closes, cycle starts ───
     CUT           the machine works
     ─── cycle ends, door opens ───
     UNCLAMP
     UNLOAD
     CLEAN         chips off the locators

   ┌──────────────────────────────────────────────┐
   │ THE FIXTURE DESIGNER CONTROLS EVERY ELEMENT  │
   │ EXCEPT THE CUTTING TIME.                     │
   │                                              │
   │ And on short-cycle work the non-cutting      │
   │ elements can EXCEED the cutting time.        │
   └──────────────────────────────────────────────┘
```

`[PRACTICE]` The productivity levers available to a fixture designer:

| Lever | Mechanism | Typical effect |
|---|---|---|
| **Faster clamping** | Powered, or fewer clamps | Seconds per part |
| **Simpler loading** | Straight-line path, good access | Seconds per part |
| **Multi-part fixtures** | Load several, cut several | Divides load time across parts |
| **Load outside the cycle** | Pallet changer, second fixture | Removes load time entirely |
| **Fewer setups** | One fixture doing more operations | Minutes per part |
| **Less cleaning** | Chip shedding by design | Seconds per part |
| **Faster changeover** | Quick-change mounting | Minutes per batch |

**THE MULTI-PART EFFECT**

```
   SINGLE PART             FOUR PARTS PER LOAD
   load 40 s               load 4 × 30 s = 120 s
   cut  90 s               cut  4 × 90 s = 360 s
   ─────────               ────────────────────
   130 s per part          480 s / 4 = 120 s/part

   SAVING = 10 s/part = 7.7 %

   ┌──────────────────────────────────────────────┐
   │ NOTE THE SAVING IS SMALLER THAN IT LOOKS.    │
   │                                              │
   │ Loading four parts takes nearly four times   │
   │ as long as loading one. The saving comes     │
   │ from the FIXED overheads — door opening,     │
   │ tool changes, approach moves — being SHARED, │
   │ not from the loading itself.                 │
   │                                              │
   │ THE BIG MULTI-PART GAIN IS ON AN HMC WITH A  │
   │ PALLET CHANGER, WHERE LOADING HAPPENS        │
   │ ENTIRELY OUTSIDE THE CYCLE (L1.1.4: 80.70 %  │
   │ → 99.28 % utilisation).                      │
   └──────────────────────────────────────────────┘
```

**OBJECTIVE 14 — COST: TOTAL COST OF OWNERSHIP**

```
   WHAT PEOPLE COMPARE
     fixture price  vs  nothing

   WHAT SHOULD BE COMPARED

   COST OF THE FIXTURE
     + design engineering hours
     + materials and bought-in components
     + manufacture
     + commissioning and proving
     + MAINTENANCE over its life
     + storage between runs
     + the machine capacity it occupies
     + eventual disposal

   COST OF NOT HAVING IT
     + setup time per part
     + scrap and rework
     + skill dependency and its risks
     + additional setups and their tolerance stacks
     + additional inspection
     + inconsistency and its downstream effects

   ┌──────────────────────────────────────────────┐
   │ THE SECOND LIST IS USUALLY MUCH LARGER, AND  │
   │ IT IS USUALLY INVISIBLE BECAUSE IT IS SPREAD │
   │ ACROSS OTHER BUDGETS.                        │
   └──────────────────────────────────────────────┘
```

**THE MAINTENANCE TERM — THE ONE ROUTINELY OMITTED**

`[PRACTICE]` A fixture is not a one-off cost. Over its life it needs:

| Item | Typical driver |
|---|---|
| **Locator replacement** | Wear; the L1.2.4 budget allocation |
| **Clamp servicing** | Seals, springs, toggle wear |
| **Re-qualification** | After incidents; periodic |
| **Repair after collisions** | Inevitable over years |
| **Storage** | Floor space, and finding it again |

> **A fixture with a five-year life and annual maintenance at 8% of its capital cost** `[EX-ASSUMED]`
> **accumulates 40% of its purchase price in upkeep.** That is not a reason to avoid fixtures; it is a
> reason to include the term, because it changes marginal decisions and it is the term that makes
> *simpler* designs look better than they otherwise would.

**THE THREE ECONOMIC TESTS**

```
   TEST 1 — PAYBACK
     Payback = C_fixture / (annual saving / 12)
     [PRACTICE] Typical acceptance thresholds vary
     by company; 12-24 months is commonly cited,
     and must be CONFIRMED against the customer's
     own investment criteria.

   TEST 2 — BREAK-EVEN AGAINST THE ALTERNATIVE
     Not against nothing, but against the NEXT
     CHEAPEST OPTION that passes the technical
     gates (L2.1.3).
     N_be = ΔC / (Δt × rate)

   TEST 3 — CAPACITY
     Hours = N × t_cycle / 60
     Compare against AVAILABLE capacity.
     [L2.1.5] THIS TEST FREQUENTLY INVERTS THE
     ANSWER, and it is the one most often skipped.

   ┌──────────────────────────────────────────────┐
   │ ALL THREE MUST BE DONE. TEST 1 ALONE MAKES   │
   │ EVERY FIXTURE LOOK GOOD, BECAUSE IT COMPARES │
   │ AGAINST DOING NOTHING.                       │
   └──────────────────────────────────────────────┘
```

**WHEN NOT TO BUILD A FIXTURE**

This is the part of the lesson that matters most, and it is rarely taught:

```
   ✗ VOLUME TOO LOW
       The break-even exceeds the programme.
       (L2.1.3: 10,400 parts ≈ 21 months)

   ✗ A CHEAPER OPTION PASSES THE GATES
       Soft jaws at a fraction of the cost and
       lead time.

   ✗ THE PART IS NOT STABLE
       A design still changing means a fixture
       obsolete before it is commissioned.

   ✗ THE PROGRAMME IS UNCERTAIN
       Optionality has value (L2.1.5).

   ✗ CAPACITY IS THE REAL CONSTRAINT
       A fixture that speeds up a machine already
       at 40 % utilisation saves nothing.

   ✗ THE PROBLEM IS ELSEWHERE
       If scrap is caused by the incoming casting,
       a better fixture will not fix it.

   ┌──────────────────────────────────────────────┐
   │ THE LAST ONE IS THE MOST IMPORTANT AND THE   │
   │ HARDEST TO SAY.                              │
   │                                              │
   │ A FIXTURE DESIGNER ASKED FOR A FIXTURE HAS   │
   │ AN OBVIOUS INCENTIVE TO AGREE THAT A FIXTURE │
   │ IS NEEDED. Being willing to say "this will   │
   │ not solve your problem" is what distinguishes│
   │ an engineer from a supplier.                 │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Cycle time** | Total time per part, including loading and unloading |
| **Cutting time** | The portion during which the tool is removing material |
| **Non-cutting time** | Load, clamp, unclamp, unload, clean |
| **Utilisation** | Fraction of available time the machine is cutting |
| **Payback period** | Time for savings to equal the investment |
| **Break-even volume** | Volume at which two options cost the same |
| **Total cost of ownership** | All costs over the asset's life, not just purchase |
| **Changeover** | Time to switch a machine from one job to another |
| **Capacity** | Machine hours available |
| **Opportunity cost** | The value of the alternative use of a resource |
| **Optionality** | The value of retaining a choice |

### 8. Principle

> **THE TWELVE TECHNICAL OBJECTIVES ASK "DOES IT WORK?"; THESE TWO ASK "WAS IT WORTH BUILDING?"** They
> are independent questions.
> **THE FIXTURE DESIGNER CONTROLS EVERY ELEMENT OF THE CYCLE EXCEPT THE CUTTING TIME** — and on
> short-cycle work the rest can exceed it.
> **COMPARE AGAINST THE NEXT CHEAPEST OPTION THAT PASSES THE GATES, NOT AGAINST NOTHING.** Payback alone
> makes every fixture look good.
> **DO ALL THREE TESTS: PAYBACK, BREAK-EVEN AND CAPACITY.** The capacity test frequently inverts the
> answer and is the one most often skipped.
> **INCLUDE MAINTENANCE** — it is routinely omitted and it favours simpler designs.
> **BE WILLING TO SAY A FIXTURE IS NOT THE ANSWER.** A fixture designer asked for a fixture has an
> obvious incentive to agree.

### 9. Industrial application

**The cycle time breakdown — where to look for savings**

```
   MEASURE, DO NOT ESTIMATE  [PRACTICE]

   Stand at the machine with a stopwatch and record
   each element separately for ten cycles:

   ┌──────────────┬────────┬────────┬─────────────┐
   │ ELEMENT      │ TIME   │ % OF   │ FIXTURE     │
   │              │        │ CYCLE  │ CONTROLS?   │
   ├──────────────┼────────┼────────┼─────────────┤
   │ Load         │  38 s  │ 19.0 % │ YES         │
   │ Clamp        │  22 s  │ 11.0 % │ YES         │
   │ Cut          │ 105 s  │ 52.5 % │ no          │
   │ Unclamp      │  14 s  │  7.0 % │ YES         │
   │ Unload       │  12 s  │  6.0 % │ YES         │
   │ Clean        │   9 s  │  4.5 % │ YES         │
   ├──────────────┼────────┼────────┼─────────────┤
   │ TOTAL        │ 200 s  │  100 % │             │
   │ FIXTURE-     │  95 s  │ 47.5 % │             │
   │ CONTROLLED   │        │        │             │
   └──────────────┴────────┴────────┴─────────────┘

   ┌──────────────────────────────────────────────┐
   │ NEARLY HALF THE CYCLE IS UNDER THE FIXTURE   │
   │ DESIGNER'S CONTROL, AND ALMOST NOBODY        │
   │ MEASURES IT THIS WAY.                        │
   │                                              │
   │ Process improvement effort usually goes into │
   │ the CUTTING time, because that is where the  │
   │ tooling suppliers and CAM engineers work.    │
   └──────────────────────────────────────────────┘
```

**Saying no to a fixture** `[EX-ASSUMED]` illustrative:

```
REQUEST
  "We're scrapping 6 % of these castings on the
   bore position. We need a better fixture."

INVESTIGATION
  Measured 30 scrapped parts and 30 good ones on
  a CMM, checking both the machined bore and the
  as-cast locating features.

FINDING
  The scrapped parts' as-cast locating bosses were
  displaced up to 1.2 mm from nominal. The fixture
  located on those bosses, faithfully, and put the
  part exactly where the bosses said.

  THE FIXTURE'S OWN REPEATABILITY WAS 0.015 mm.
  IT WAS NOT THE PROBLEM.

THE HONEST ANSWER
  A better fixture cannot fix this. The options
  are:
    1. Locate on different features — but the
       part has no machined features at this
       stage
    2. Add a pre-machining operation to create a
       datum — adds cost and a setup
    3. Fix the casting process — the real answer
    4. Accept the variation and machine to the
       casting, using an adaptive method

RECOMMENDATION GIVEN
  Option 3, with option 2 as an interim.
  NO NEW FIXTURE.

┌──────────────────────────────────────────────┐
│ THE COMMERCIALLY EASY ANSWER WAS TO QUOTE A  │
│ NEW FIXTURE. IT WOULD HAVE BEEN BUILT, IT    │
│ WOULD HAVE WORKED PERFECTLY, AND THE SCRAP   │
│ RATE WOULD NOT HAVE MOVED.                   │
│                                              │
│ THE CUSTOMER WOULD THEN HAVE CONCLUDED THAT  │
│ FIXTURES DO NOT HELP.                        │
└──────────────────────────────────────────────┘
```

### 10. Design rules
- **R1** — **Measure the cycle time by element**, do not estimate it `[PRACTICE]`.
- **R2** — Identify what fraction of the cycle the **fixture actually controls**.
- **R3** — Compare against the **next cheapest option that passes the technical gates**, not against
  nothing.
- **R4** — Perform **all three economic tests** — payback, break-even and capacity.
- **R5** — Do the **capacity check first**; it frequently inverts the answer.
- **R6** — Include **maintenance, storage and re-qualification** in the cost model.
- **R7** — Establish the **programme length**, not just the annual volume (L2.1.3).
- **R8** — Confirm the **part design is stable** before committing to a dedicated fixture.
- **R9** — Consider a **phased approach** — simple now, automated later — where volume is uncertain.
- **R10** — Verify that the **fixture addresses the actual problem** before quoting.
- **R11** — Present the economic case in the customer's terms — **hours and rupees**, not features.
- **R12** — Be prepared to recommend **not building a fixture**.

### 11. Rules of thumb
- **The fixture controls everything in the cycle except the cutting time.**
- **On short-cycle work, non-cutting time can exceed cutting time.**
- **Nearly half a typical cycle is fixture-controlled** — and almost nobody measures it that way.
- **Compare against the next cheapest option, not against nothing.**
- **Payback alone makes every fixture look good.**
- **Do the capacity check first** — it inverts answers.
- **Include maintenance** — it favours simpler designs.
- **Programme length decides, not annual volume.**
- **A fixture that speeds up an under-utilised machine saves nothing.**
- **Multi-part gains are smaller than they look** unless loading is outside the cycle.
- **Be willing to say a fixture is not the answer.**

### 12. Formulae

**Cycle time and productivity**
```
t_cycle = t_load + t_clamp + t_cut + t_unclamp
          + t_unload + t_clean

Parts per hour = 60 / t_cycle_minutes
Utilisation    = t_cut / t_cycle
```

**Multi-part fixture**
```
t_per_part = (n · t_load_each + n · t_cut_each
              + t_fixed) / n
```
where t_fixed is the shared overhead per load

**Payback**
```
Saving_annual = Δt × N × rate
                + Δscrap × N × C_part
Payback (months) = C_fixture / (Saving_annual/12)
```

**Break-even against an alternative**
```
N_be = ΔC_capital / (Δt × rate)
```

**Total cost of ownership**
```
TCO = C_capital
      + Σ (annual maintenance × years)
      + storage
      + re-qualification
      − residual value

[PRACTICE] annual maintenance commonly estimated
as a percentage of capital cost; the figure must
be established from the customer's own history.
```

**Capacity**
```
Hours_required = N × t_cycle / 60
Compare against hours AVAILABLE.
[L2.1.5] Do this BEFORE the cost comparison.
```

| Variable | Meaning | Unit |
|---|---|---|
| t_cycle | Total time per part | min |
| Δt | Time saving per part | h |
| N | Annual volume | parts/yr |
| rate | Machine rate | ₹/h |
| C_part | Value of a scrapped part | ₹ |
| N_be | Break-even volume | parts |

### 13. Worked numerical example

**Problem:** A fixture improvement is proposed. Break down the cycle, calculate the productivity gain,
build a total cost of ownership model, apply all three economic tests, and determine whether the proposal
should proceed.

```
GIVEN:
  CURRENT SITUATION                              [PROJ]
    Cycle time breakdown, measured over 10 cycles:
      load     42 s
      clamp    26 s
      cut     118 s
      unclamp  16 s
      unload   14 s
      clean    12 s
    Volume                    = 22,000 parts/yr
    Programme remaining       = 4 years
    Machine rate              = ₹1,800/h
    Machine available         = 3,800 h/yr
                                (two shifts)

  PROPOSED FIXTURE IMPROVEMENT              [EX-ASSUMED]
    Hydraulic clamping and improved loading
    New times: load 28 s, clamp 6 s,
               unclamp 4 s, unload 11 s,
               clean 5 s
    Cutting time unchanged at 118 s
    Capital cost              = ₹310,000
    Annual maintenance        = 8 % of capital
    Residual value at 4 years = ₹40,000

  ALTERNATIVE — SOFT JAW UPGRADE            [EX-ASSUMED]
    Improves loading only: load 34 s,
      other times unchanged
    Capital cost              = ₹28,000
    Annual maintenance        = 15 % of capital
                                (jaws re-machined)
    Residual value            = nil

REQUIRED:
  (a) Current cycle time and the fixture-controlled
      fraction
  (b) Proposed cycle time and the saving per part
  (c) Alternative cycle time and its saving
  (d) Annual time saving and value for each option
  (e) Capacity check for all three cases
  (f) Total cost of ownership over 4 years
  (g) Payback and break-even
  (h) Recommendation and engineering conclusion

ASSUMPTION:
  1. Cycle times MEASURED over ten cycles, not
     estimated. This matters — estimated loading
     times are typically optimistic. [PROJ]
  2. Maintenance percentages are ILLUSTRATIVE
     ASSUMED VALUES. Real figures must come from
     the customer's own maintenance history for
     comparable equipment. [EX-ASSUMED]
  3. Cutting time is unchanged by any option, since
     none alters the machining process. [PROJ]
  4. The machine rate of ₹1,800/h is assumed to
     represent the true cost of machine time
     including labour and overhead. [EX-ASSUMED]
  5. Programme length of 4 years is treated as
     known. Where it is uncertain, the L2.1.5
     optionality argument applies. [PROJ]
  6. No allowance for scrap reduction, because
     none of the options changes the locating
     scheme. THIS IS DELIBERATE — the improvement
     is a productivity one, not a quality one.
     [PROJ]

FORMULA:
  t_cycle = Σ elements
  Saving = Δt × N × rate
  Hours  = N × t_cycle/60
  TCO    = capital + maintenance×years − residual
  Payback = capital/(saving/12)

UNIT CONVERSION:
  Seconds → hours: ÷3600

SUBSTITUTION AND CALCULATION:

  (a) CURRENT CYCLE AND FIXTURE-CONTROLLED FRACTION

      t_cycle = 42+26+118+16+14+12
              = 228 s = 3.800 min

      Fixture-controlled = 42+26+16+14+12
                         = 110 s

      Fraction = 110/228
               = 48.25 %

      → NEARLY HALF THE CYCLE IS UNDER THE
        FIXTURE'S CONTROL.

      Utilisation (cutting fraction)
        = 118/228 = 51.75 %

  (b) PROPOSED CYCLE AND SAVING

      t_cycle = 28+6+118+4+11+5
              = 172 s = 2.867 min

      Saving = 228 − 172 = 56 s per part
             = 24.56 % of the cycle

      Fixture-controlled time falls from 110 s to
      54 s — a reduction of 50.9 %.

  (c) ALTERNATIVE — SOFT JAWS

      t_cycle = 34+26+118+16+14+12
              = 220 s = 3.667 min

      Saving = 228 − 220 = 8 s per part
             = 3.51 % of the cycle

  (d) ANNUAL TIME SAVING AND VALUE

      PROPOSED FIXTURE
        Δt = 56 s = 56/3600 = 0.015556 h
        Annual hours saved = 0.015556 × 22,000
                           = 342.2 h
        Value = 342.2 × 1,800
              = ₹615,960/yr

      SOFT JAWS
        Δt = 8 s = 0.0022222 h
        Annual hours saved = 0.0022222 × 22,000
                           = 48.9 h
        Value = 48.9 × 1,800
              = ₹88,020/yr

      RATIO of savings = 615,960/88,020
                       = 7.00 ×

  (e) CAPACITY CHECK

      CURRENT
        Hours = 22,000 × 3.800/60
              = 22,000 × 0.063333
              = 1,393.3 h/yr
        Against 3,800 available
        Utilisation = 36.7 %

      ┌────────────────────────────────────────────┐
      │ THIS IS THE CRITICAL FINDING.              │
      │                                            │
      │ THE MACHINE IS ONLY 36.7 % UTILISED. There │
      │ is no capacity constraint at all.          │
      │                                            │
      │ SO WHAT DOES THE TIME SAVING ACTUALLY BUY? │
      └────────────────────────────────────────────┘

      PROPOSED
        Hours = 22,000 × 2.867/60 = 1,051.1 h/yr
        Utilisation = 27.7 %

      SOFT JAWS
        Hours = 22,000 × 3.667/60 = 1,344.4 h/yr
        Utilisation = 35.4 %

      → ALL THREE CASES FIT COMFORTABLY. The
        machine has 2,400+ spare hours in every
        case.

      THE SAVING IS THEREFORE NOT CAPACITY. It is
      only real if:
        - the freed hours are USED for other work
          that would otherwise need another
          machine, OR
        - the labour is redeployed, OR
        - the machine rate genuinely varies with
          usage (largely it does not — most of it
          is fixed cost)

      ┌────────────────────────────────────────────┐
      │ IF THE MACHINE SITS IDLE FOR THE FREED     │
      │ HOURS AND THE OPERATOR STILL ATTENDS IT,   │
      │ THE ₹615,960 IS NOT A CASH SAVING AT ALL.  │
      │ IT IS AN OPPORTUNITY THAT MAY OR MAY NOT   │
      │ BE TAKEN.                                  │
      └────────────────────────────────────────────┘

  (f) TOTAL COST OF OWNERSHIP OVER 4 YEARS

      PROPOSED FIXTURE
        Capital                     = 310,000
        Maintenance 8 % × 4 years
          = 0.08 × 310,000 × 4      = 99,200
        Less residual               = −40,000
        ─────────────────────────────────────
        TCO                         = ₹369,200

      SOFT JAWS
        Capital                     = 28,000
        Maintenance 15 % × 4 years
          = 0.15 × 28,000 × 4       = 16,800
        Residual                    = 0
        ─────────────────────────────────────
        TCO                         = ₹44,800

      RATIO = 369,200/44,800 = 8.24 ×

      NOTE the maintenance term:
        Fixture: ₹99,200, which is 32.0 % of its
          capital cost
        Soft jaws: ₹16,800, which is 60.0 % of
          theirs

      ┌────────────────────────────────────────────┐
      │ THE MAINTENANCE PERCENTAGE IS HIGHER FOR   │
      │ THE CHEAPER OPTION, BUT THE ABSOLUTE       │
      │ AMOUNT IS FAR LOWER.                       │
      │                                            │
      │ Omitting maintenance entirely would have   │
      │ understated the fixture's cost by nearly a │
      │ third — which is why the term matters even │
      │ though it is an estimate.                  │
      └────────────────────────────────────────────┘

  (g) PAYBACK AND BREAK-EVEN

      PAYBACK, taking the time saving at face value

        PROPOSED FIXTURE
          Payback = 310,000/(615,960/12)
                  = 310,000/51,330
                  = 6.04 months

        SOFT JAWS
          Payback = 28,000/(88,020/12)
                  = 28,000/7,335
                  = 3.82 months

        → BOTH PAY BACK QUICKLY. Soft jaws are
          faster.

      BREAK-EVEN, FIXTURE AGAINST SOFT JAWS
        ΔC = 310,000 − 28,000 = 282,000
        Δt = 56 − 8 = 48 s = 0.013333 h

        N_be = 282,000/(0.013333 × 1,800)
             = 282,000/24.0
             = 11,750 parts

        At 22,000/yr that is 6.4 months.

      OVER THE FULL 4-YEAR PROGRAMME (88,000 parts)
        Fixture:  TCO 369,200
                  + machine time
                    88,000 × 0.047778 h × 1,800
                    = ₹7,568,000
                  TOTAL ₹7,937,200

        Soft jaws: TCO 44,800
                  + machine time
                    88,000 × 0.061111 h × 1,800
                    = ₹9,680,000
                  TOTAL ₹9,724,800

        FIXTURE SAVES ₹1,787,600 over 4 years
        — IF THE MACHINE TIME IS GENUINELY
        VALUABLE.

  (h) RECOMMENDATION

      THE ARITHMETIC FAVOURS THE FIXTURE — payback
      6.04 months, break-even 11,750 parts, and
      ₹1.79 M saved over the programme.

      BUT THE CAPACITY FINDING QUALIFIES ALL OF IT.
      At 36.7 % utilisation, the freed 342 hours a
      year have value ONLY IF THEY ARE USED.

      MY RECOMMENDATION:
        1. Establish whether there is other work
           for the freed hours. If yes, proceed
           with the fixture.
        2. If not, the soft jaws capture 14.3 % of
           the benefit for 9.0 % of the capital,
           and defer the larger decision.
        3. Either way, present the case as
           "342 hours of capacity released" rather
           than "₹615,960 saved", because the
           second is only true under an assumption
           the customer must confirm.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Current cycle            │ 228 s (3.800 min) │
  │     Fixture-controlled       │ 110 s = 48.25 %   │
  │ (b) Proposed cycle           │ 172 s             │
  │     Saving                   │ 56 s = 24.56 %    │
  │ (c) Soft jaw cycle           │ 220 s             │
  │     Saving                   │ 8 s = 3.51 %      │
  │ (d) Annual value, fixture    │ ₹615,960          │
  │     Annual value, jaws       │ ₹88,020 (7.00×)   │
  │ (e) Current utilisation      │ 36.7 % — NO       │
  │                              │ CAPACITY          │
  │                              │ CONSTRAINT        │
  │ (f) TCO fixture / jaws       │ ₹369,200/₹44,800  │
  │     Maintenance as % capital │ 32.0 % / 60.0 %   │
  │ (g) Payback fixture / jaws   │ 6.04 / 3.82 months│
  │     Break-even               │ 11,750 parts      │
  │     4-year saving            │ ₹1,787,600        │
  │ (h) RECOMMENDATION           │ conditional on    │
  │                              │ using the freed   │
  │                              │ hours             │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The equivalent margin
  is the payback period against the customer's
  investment criterion, and the robustness of the
  conclusion to the assumptions. Here the conclusion
  is NOT robust — it depends entirely on whether the
  freed capacity is used, which is an assumption
  outside the calculation.

PASS/FAIL:
  ✓ PASS — payback, both options, well within any
    normal criterion.
  ✓ PASS — break-even at 11,750 parts against
    88,000 over the programme.
  ⚠ CONDITIONAL — the entire benefit depends on the
    freed hours being used. At 36.7 % utilisation
    that is not established.

ENGINEERING CONCLUSION:
  1. THE CAPACITY CHECK CHANGED THE MEANING OF THE
     ANSWER RATHER THAN THE ANSWER ITSELF.
     Payback of 6.04 months and ₹1.79 M over four
     years look decisive. But the machine runs at
     36.7 % utilisation, so the 342 hours a year
     released are not a bottleneck being relieved —
     they are idle time being made more idle.
     IF THE FREED HOURS ARE NOT USED, THE ₹615,960
     IS NOT A CASH SAVING. Most of a machine rate is
     fixed cost: depreciation, floor space, and an
     operator who is still standing there. Removing
     56 seconds of work from a machine with 2,400
     spare hours does not reduce those costs.
     THIS IS THE MOST COMMON ERROR IN FIXTURE
     JUSTIFICATION, AND IT IS ALWAYS IN THE SAME
     DIRECTION: time savings are valued at the full
     machine rate whether or not the time is
     genuinely scarce.

  2. NEARLY HALF THE CYCLE WAS FIXTURE-CONTROLLED
     AND NOBODY HAD MEASURED IT.
     110 seconds of 228 — 48.25 % — spent loading,
     clamping, unclamping, unloading and cleaning.
     Process improvement effort almost always goes
     into the cutting time, because that is where
     the tooling suppliers and CAM engineers work,
     and it was only 51.75 % of the cycle here.
     THE FIXTURE DESIGNER OWNS THE OTHER HALF, AND
     REDUCING IT BY 50.9 % WAS ENTIRELY WITHIN
     REACH.

  3. THE CHEAP OPTION CAPTURED 14.3 % OF THE BENEFIT
     FOR 9.0 % OF THE CAPITAL.
     Soft jaws at ₹28,000 delivered 8 seconds
     against the fixture's 56. That is a worse
     absolute result and a better ratio, and with a
     shorter payback — 3.82 months against 6.04.
     THIS IS THE L2.1.3 PATTERN AGAIN: MOST OF THE
     AVAILABLE BENEFIT IS OFTEN CAPTURED BY THE
     CHEAP OPTION, and the expensive option's
     marginal benefit must be justified separately
     rather than assumed.

  4. INCLUDING MAINTENANCE CHANGED THE FIXTURE'S
     COST BY NEARLY A THIRD.
     ₹99,200 over four years on a ₹310,000 fixture —
     32 % of capital, and a term that is routinely
     omitted entirely. It does not change the
     recommendation here, but it would on a
     marginal case, AND IT SYSTEMATICALLY FAVOURS
     SIMPLER DESIGNS, which is a bias worth having
     in a discipline that tends toward complexity.

  5. HOW I WOULD PRESENT THIS.
     Not as "₹615,960 a year saved", which is true
     only under an assumption the customer has not
     confirmed, but as "342 hours of machine
     capacity released, worth ₹615,960 IF you have
     work to put in it". That distinction is the
     difference between a proposal that survives
     scrutiny and one that does not.
     AND I WOULD ASK THE QUESTION DIRECTLY: is this
     machine a bottleneck? If the answer is no, the
     honest recommendation is the soft jaws and a
     revisit when it becomes one.

SENSITIVITY NOTE:
  Ranked by influence:
    1. WHETHER THE FREED CAPACITY IS USED — a
       binary assumption that determines whether the
       benefit is ₹615,960 or approximately zero.
       THE MOST IMPORTANT VARIABLE AND THE ONE NOT
       IN THE ARITHMETIC.
    2. MACHINE RATE — linear on the whole benefit.
       At ₹900/h the annual saving halves and the
       payback doubles to 12.1 months, which is at
       the edge of many investment criteria.
    3. PROGRAMME LENGTH — 4 years assumed. At 2
       years the fixture's 4-year advantage roughly
       halves while its capital cost does not.
    4. MEASURED VS ESTIMATED CYCLE TIMES — the whole
       analysis rests on the 10-cycle measurement.
       Estimated loading times are typically
       optimistic, which would UNDERSTATE the
       available saving.
    5. MAINTENANCE PERCENTAGE — 32 % of capital over
       the programme. An estimate, and one worth
       checking against the customer's history
       before relying on it in a marginal case.
```

### 14. Engineering assumptions
- Cycle times **measured** over ten cycles, not estimated — estimated loading times are typically
  optimistic `[PROJ]`.
- Maintenance percentages are illustrative assumed values; real figures must come from the customer's own
  history `[EX-ASSUMED]`.
- Cutting time unchanged by any option `[PROJ]`.
- The machine rate is assumed to represent the true cost of machine time including labour and overhead
  `[EX-ASSUMED]`.
- Programme length treated as known; where uncertain, the L2.1.5 optionality argument applies `[PROJ]`.
- **No scrap reduction claimed**, because no option changes the locating scheme — this is deliberately a
  productivity case, not a quality one `[PROJ]`.

### 15. Diagram

```
     THE BUSINESS PAIR
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  WHERE THE CYCLE TIME ACTUALLY GOES

   load     ████████ 42 s        ┐
   clamp    █████ 26 s           │ FIXTURE-
   cut      ███████████████████████ 118 s
   unclamp  ███ 16 s             │ CONTROLLED
   unload   ██ 14 s              │ 110 s
   clean    ██ 12 s              ┘ = 48.25 %

   ┌──────────────────────────────────────────────┐
   │ NEARLY HALF THE CYCLE IS UNDER THE FIXTURE   │
   │ DESIGNER'S CONTROL — AND ALMOST NOBODY       │
   │ MEASURES IT THAT WAY.                        │
   │                                              │
   │ Improvement effort goes into the CUTTING     │
   │ time, because that is where the tooling      │
   │ suppliers and CAM engineers work.            │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE THREE ECONOMIC TESTS

   1 PAYBACK        vs doing nothing
                    → makes EVERY fixture look good

   2 BREAK-EVEN     vs the next cheapest option
                    that passes the technical gates

   3 CAPACITY       hours needed vs hours available
                    → FREQUENTLY INVERTS THE ANSWER

   ┌──────────────────────────────────────────────┐
   │ ALL THREE MUST BE DONE. TEST 1 ALONE IS NOT  │
   │ AN ANALYSIS, IT IS AN ADVERTISEMENT.         │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE WORKED EXAMPLE — THE CAPACITY FINDING

   Payback 6.04 months      LOOKS DECISIVE
   4-year saving ₹1.79 M    LOOKS DECISIVE

   BUT: machine utilisation 36.7 %
        spare capacity 2,400+ hours

   ████████ 1,393 h used
   ████████████████████████████ 3,800 h available

   ┌──────────────────────────────────────────────┐
   │ THE 342 HOURS RELEASED ARE NOT A BOTTLENECK  │
   │ RELIEVED — THEY ARE IDLE TIME MADE MORE      │
   │ IDLE.                                        │
   │                                              │
   │ Most of a machine rate is FIXED COST:        │
   │ depreciation, floor space, and an operator   │
   │ who is still standing there.                 │
   │                                              │
   │ IF THE FREED HOURS ARE NOT USED, ₹615,960 IS │
   │ NOT A CASH SAVING.                           │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  TOTAL COST OF OWNERSHIP — THE OMITTED TERM

   FIXTURE
     capital      ████████████████████ ₹310,000
     maintenance  ██████ ₹99,200  ◄ 32 % of capital
     residual     −██ ₹40,000
     ────────────────────────────
     TCO          ₹369,200

   ┌──────────────────────────────────────────────┐
   │ OMITTING MAINTENANCE UNDERSTATES THE COST BY │
   │ NEARLY A THIRD.                              │
   │                                              │
   │ It rarely changes an easy decision, and it   │
   │ systematically FAVOURS SIMPLER DESIGNS —     │
   │ a useful bias in a discipline that tends     │
   │ toward complexity.                           │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE CHEAP OPTION AGAIN

   SOFT JAWS      ₹28,000    →  8 s saved
   FULL FIXTURE   ₹310,000   → 56 s saved

   9.0 % of the capital captured 14.3 % of the
   benefit — and paid back FASTER (3.82 vs 6.04
   months).

   ┌──────────────────────────────────────────────┐
   │ THE L2.1.3 PATTERN AGAIN: MOST OF THE        │
   │ AVAILABLE BENEFIT IS OFTEN CAPTURED BY THE   │
   │ CHEAP OPTION.                                │
   │                                              │
   │ The expensive option's MARGINAL benefit must │
   │ be justified separately, not assumed.        │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHEN *NOT* TO BUILD A FIXTURE

   ✗ volume too low — break-even beyond the
     programme
   ✗ a cheaper option passes the technical gates
   ✗ the part design is not stable
   ✗ the programme is uncertain
   ✗ capacity is not the constraint
   ✗ THE PROBLEM IS SOMEWHERE ELSE

   ┌──────────────────────────────────────────────┐
   │ THE LAST IS THE MOST IMPORTANT AND HARDEST   │
   │ TO SAY.                                      │
   │                                              │
   │ A FIXTURE DESIGNER ASKED FOR A FIXTURE HAS   │
   │ AN OBVIOUS INCENTIVE TO AGREE THAT ONE IS    │
   │ NEEDED.                                      │
   │                                              │
   │ Being willing to say "this will not solve    │
   │ your problem" is what distinguishes an       │
   │ ENGINEER from a SUPPLIER.                    │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  HOW TO PRESENT IT

   ✗ "₹615,960 a year saved"
       true only under an unconfirmed assumption

   ✓ "342 hours of capacity released, worth
      ₹615,960 IF you have work to put in it"

   ┌──────────────────────────────────────────────┐
   │ THAT DISTINCTION IS THE DIFFERENCE BETWEEN A │
   │ PROPOSAL THAT SURVIVES SCRUTINY AND ONE THAT │
   │ DOES NOT.                                    │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example
Productivity and cost do not appear on a fixture drawing directly, but two things should:

```
FIXTURE FX-7500 — PRODUCTIVITY DATA
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: DESIGN TARGET LOAD/UNLOAD TIME 54 SECONDS
        TOTAL (LOAD 28, CLAMP 6, UNCLAMP 4,
        UNLOAD 11, CLEAN 5). VERIFY AT
        COMMISSIONING OVER TEN CYCLES.

NOTE 2: MAINTENANCE ITEMS AND INTERVALS ARE LISTED
        ON SHEET 6. LOCATORS ITEMS 4-9 ARE
        CONSUMABLE — SEE WEAR LIMITS.
```

`[PRACTICE]` Note 1 is unusual and worth adopting. **Stating the design target for load and unload time
makes it a verifiable requirement** rather than an aspiration, and it gives commissioning something to
measure. A fixture that meets every dimensional requirement and takes ninety seconds to load has failed
an objective that was never written down.

### 17. CAD workflow
1. **Simulate the loading motion** and estimate its duration from the distances involved
2. Count the **operator actions** required per cycle
3. Identify the **longest single action** and target it
4. Model **multi-part layouts** and compare the per-part time
5. Where a pallet changer exists, check whether loading can be moved **outside the cycle**
6. Produce the **maintenance schedule** from the BOM, identifying consumables
7. Export the **cost model inputs** — component counts, machining hours, bought-in items

`[PRACTICE]` Step 2 is a good proxy for loading time when no measurement is available: **count the
discrete actions the operator must perform**, since each one costs a few seconds and the count is
visible in CAD long before a prototype exists.

### 18. GD&T application
Productivity and cost are not GD&T characteristics, but tolerancing has a direct cost effect worth
stating:

```
  EVERY TIGHTENED TOLERANCE COSTS MONEY, AND THE
  RELATIONSHIP IS STRONGLY NON-LINEAR.

  ┌────────────────────────────────────────────┐
  │ [GUIDE] Cost rises sharply as a tolerance  │
  │ approaches the limit of the chosen process │
  │ — a dimension achievable by milling is far │
  │ cheaper than one requiring grinding, which │
  │ is far cheaper than one requiring lapping. │
  │                                            │
  │ THE STEP CHANGES ARE AT THE PROCESS        │
  │ BOUNDARIES, not smoothly distributed.      │
  │                                            │
  │ SO THE COST QUESTION IS NOT "how tight?"   │
  │ BUT "does this tolerance push the feature  │
  │ into a more expensive PROCESS?"            │
  │                                            │
  │ Specific capability figures must come from │
  │ the manufacturing source. Full treatment   │
  │ of tolerance-cost relationships at L36.    │
  └────────────────────────────────────────────┘

  THE FIXTURE DESIGNER'S DISCIPLINE:
    tolerance TIGHTLY where the feature
    determines the part (locators, setting
    features — L1.2.4)
    tolerance GENEROUSLY everywhere else
    (clearance holes, cosmetic features — L1.3.3)
```

### 19. Manufacturing method
The manufacturing decisions with the largest cost effect `[PRACTICE]`:

| Decision | Effect |
|---|---|
| **Buy vs make** | L0.5.2 — bought-in clamps, bushes and supports are almost always cheaper |
| **Number of separate components** | Each carries design, procurement, machining and assembly cost |
| **Number of setups to machine the fixture** | Each adds cost and a tolerance stack |
| **Material choice** | L0.5.1 — the base plate was 89% of material cost and near-zero risk |
| **Finish specification** | Grinding where milling would do is a common over-specification |

> **The L0.5.1 result is worth recalling here**: the base plate accounted for 89% of material cost and
> almost none of the technical risk. **Cost reduction effort should go where the money is, which is
> rarely where the engineering interest is.**

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Load/unload time | Time 10 cycles at commissioning | ≤54 s total |
| Operator actions per cycle | Observation | As designed |
| Cycle time breakdown | Timed by element | Matches the design model |
| Maintenance schedule present | Document review | Complete, with intervals |
| Consumables identified | BOM review | Wear limits stated |
| Actual cost against estimate | Purchase records | Within the approved figure |

`[PRACTICE]` **Timing the load at commissioning is the productivity equivalent of the repeatability
study** — it verifies against the design intent rather than assuming, and it is the only point at which
the assumption behind the whole business case gets tested.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Comparing against **nothing** rather than the next cheapest option | Every fixture looks justified |
| 2 | Skipping the **capacity check** | Time savings valued that are not real |
| 3 | Valuing freed hours at the **full machine rate** on an under-utilised machine | Benefit overstated, possibly to zero |
| 4 | **Omitting maintenance** from the cost model | Cost understated by ~a third |
| 5 | **Estimating** rather than measuring cycle times | Optimistic loading assumptions |
| 6 | Focusing improvement on **cutting time** only | Half the cycle ignored |
| 7 | Not establishing **programme length** | Break-even cannot be assessed |
| 8 | Building a fixture for an **unstable part design** | Obsolete before commissioning |
| 9 | Assuming a fixture fixes a problem **caused elsewhere** | Scrap rate unchanged |
| 10 | Not stating a **load-time design target** | Unverifiable objective |
| 11 | Over-specifying **tolerances and finishes** | Cost with no benefit |
| 12 | Presenting the case in **features** rather than hours and rupees | Rejected on cost |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Fixture delivered, no productivity gain | Freed capacity not used | Check machine utilisation | Redeploy work, or accept | Capacity check first |
| Actual cycle longer than designed | Loading harder than modelled | Time by element | Improve access | Time at commissioning |
| Fixture rejected on cost | Case built on features | Rebuild in hours and rupees | Re-present | Design rule R11 |
| Payback not achieved | Volume below forecast | Compare actual with forecast | — | Establish programme length |
| Maintenance cost unexpected | Term omitted from the model | Review actual spend | Include next time | Design rule R6 |
| Scrap unchanged after a new fixture | Problem was elsewhere | Measure the incoming part | Address the real cause | Design rule R10 |
| Fixture obsolete on delivery | Part design changed | Check revision status | — | Confirm design stability |
| Cheap alternative would have sufficed | No break-even against alternatives | Compare options | — | Design rule R3 |

### 23. Design checklist
- [ ] Has the cycle time been **measured by element**, not estimated?
- [ ] What fraction of the cycle does the **fixture control**?
- [ ] Has the **capacity check** been done — and is the machine actually a bottleneck?
- [ ] Are freed hours **genuinely usable**, or will the machine sit idle?
- [ ] Has the comparison been made against the **next cheapest option that passes the gates**?
- [ ] Have **all three tests** been done — payback, break-even, capacity?
- [ ] Does the cost model include **maintenance, storage and re-qualification**?
- [ ] Is the **programme length** known, not just the annual volume?
- [ ] Is the **part design stable**?
- [ ] Does the fixture address the **actual problem**?
- [ ] Is there a **load-time design target** on the drawing?
- [ ] Are tolerances **generous everywhere they can be**?
- [ ] Is the case presented in **hours and rupees**?
- [ ] Has **not building a fixture** been considered as an option?

### 24. Beginner exercise
**E2.2.5-B** — A cycle is measured as: load 35 s, clamp 18 s, cut 95 s, unclamp 12 s, unload 10 s, clean
8 s.
(a) Calculate the total cycle time in seconds and minutes.
(b) Calculate the fixture-controlled time and its percentage of the cycle.
(c) Calculate the machine utilisation (cutting fraction).
(d) A proposal reduces clamping to 5 s and unclamping to 3 s. Calculate the new cycle time and the saving
per part.
(e) At 15,000 parts a year and ₹1,800/h, calculate the annual value of that saving.

### 25. Intermediate exercise
**E2.2.5-I** — A fixture costs ₹260,000 with maintenance at 10% of capital per year and a residual value
of ₹30,000 after five years. It reduces the cycle from 4.2 min to 3.1 min. Volume is 18,000 parts/yr for
5 years; the machine rate is ₹1,800/h and the machine has 3,600 available hours per year. An alternative
costing ₹35,000 with 12% maintenance reduces the cycle to 3.9 min.
(a) Calculate the machine hours required per year under all three cases.
(b) Calculate the current utilisation and comment on whether capacity is a constraint.
(c) Calculate the annual time saving and its value for both options.
(d) Calculate the total cost of ownership of both over five years.
(e) Calculate the payback for each.
(f) Calculate the break-even volume of the fixture against the alternative.
(g) Calculate the total five-year cost of each route including machine time.
(h) State your recommendation, identifying the assumption on which it most depends.

### 26. Advanced exercise
**E2.2.5-A** — A component runs 45,000/yr with a programme of unknown length between 2 and 6 years. The
current cycle is 6.8 min (load 62 s, clamp 44 s, cut 248 s, unclamp 22 s, unload 18 s, clean 14 s) on a
machine with 3,800 available hours a year currently at 91% utilisation. Three proposals `[EX-ASSUMED]`:
(A) improved single-part fixture, ₹340,000, reduces non-cutting time by 45%; (B) two-part fixture,
₹580,000, non-cutting time per load rises 60% but serves two parts; (C) a second machine plus fixture A,
₹3,900,000 total. Maintenance 8% of capital annually. Machine rate ₹1,850/h. A new machine would have
3,800 hours available.
(i) Calculate the current cycle time, fixture-controlled fraction and annual machine hours required.
(ii) Assess the current capacity position and state what it implies.
(iii) Calculate the cycle time and annual hours for each proposal.
(iv) Determine which proposals resolve the capacity constraint.
(v) Calculate the total cost of ownership over 4 years for each viable proposal.
(vi) Calculate the payback of each against the current situation.
(vii) Calculate break-even volumes between the proposals.
(viii) Assess each proposal's robustness to the programme length uncertainty (2 vs 6 years), including
residual values where relevant.
(ix) Explain why the capacity position makes this case fundamentally different from the worked example in
this lesson, and how that changes the value of the time saving.
(x) Write your recommendation in no more than 250 words, stating the assumptions it depends on.

### 27. Interview questions
1. *"How would you justify a fixture to a finance manager?"*
   **Answer:** In hours and rupees, and against the right comparison. The mistake is to compare the
   fixture against doing nothing, because that makes every fixture look justified. The right comparison
   is against the next cheapest option that actually passes the technical requirements — often soft jaws,
   which in the case we worked captured about fourteen per cent of the benefit for nine per cent of the
   capital and paid back faster. I would also do a capacity check before anything else, because if the
   machine is only thirty-seven per cent utilised then the hours released are not a bottleneck being
   relieved, and valuing them at the full machine rate overstates the benefit — possibly to zero. So I
   would present it as "this releases 342 hours a year, worth six hundred thousand rupees *if* you have
   work to put in it", and let the customer confirm that assumption rather than burying it. And I would
   include maintenance in the cost model, which is routinely omitted and was thirty-two per cent of
   capital over the programme.
2. *"When would you tell a customer not to buy a fixture?"*
   **Answer:** Several situations. When the volume or programme length means the break-even is never
   reached — that is an arithmetic answer. When a cheaper option passes the technical gates, which is
   more often than people expect. When the part design is still changing, because a dedicated fixture
   will be obsolete before it is commissioned. When capacity is not actually the constraint, so speeding
   up the machine saves nothing real. And most importantly, when the problem they are trying to solve is
   caused somewhere else — if the scrap is coming from casting variation, a better fixture will locate
   the part faithfully on features that are in the wrong place, and the scrap rate will not move. That
   last one is the hardest to say, because a fixture designer asked for a fixture has an obvious
   incentive to agree that one is needed. But building it would work perfectly, fix nothing, and teach
   the customer that fixtures do not help.

### 28. Expert questions
1. *"You keep saying the capacity check inverts answers. Explain the mechanism."*
   **Answer:** It works in **both directions**, which is what makes it worth doing early rather than as a
   confirmation at the end.
   The first direction is the one in L2.1.5. A customer compares a fixture at a few hundred thousand
   rupees against an SPM at several million and concludes the fixture obviously wins. But a fixture needs
   a machine to sit on, and if the volume requires more machine hours than exist, the real fixture option
   is a fixture *plus* however many machines that takes. In that example the shortfall was a factor of
   ten, so the fixture route actually meant two additional machine tools and more total capital than the
   SPM. **The cheap option was not cheap because it was incomplete.**
   The second direction is the one in this lesson, and it is subtler. A fixture that saves fifty-six
   seconds a part on twenty-two thousand parts a year releases three hundred and forty-two hours. Valued
   at the machine rate that is six hundred thousand rupees, and the payback looks excellent. But the
   machine was running at thirty-seven per cent utilisation with two thousand four hundred spare hours.
   **The saving is not relieving a bottleneck; it is making idle time more idle.**
   The reason that matters is the structure of a machine rate. Most of it is fixed — depreciation, floor
   space, the building, and an operator who is still standing at the machine whether the cycle is 228
   seconds or 172. Removing work from a machine that has plenty of spare capacity does not reduce those
   costs at all. **The saving is real only if the freed hours get filled with work that would otherwise
   have required something else.**
   So the same calculation gives a genuine benefit on a bottleneck machine and an almost illusory one on
   an idle machine, and the arithmetic is identical in both cases. **The capacity position is what
   converts hours into money, and it sits entirely outside the fixture calculation.**
   The practical discipline I take from it is to do the capacity check first, before the cost comparison
   — and to present time savings as hours released with the monetary value made explicitly conditional.
   That is more honest and, in my experience, more persuasive, because a finance manager who spots an
   unstated assumption stops believing the rest of the numbers.
2. *"Is there a tension between being a good engineer and being a good supplier?"*
   **Answer:** There is, and I think the honest thing is to name it rather than pretend it does not
   exist.
   The tension is structural. **A fixture designer asked for a fixture is being asked a question to which
   one answer generates revenue and the other does not.** That is not a criticism of anyone's integrity;
   it is a description of an incentive, and incentives work on people who have no intention of being
   influenced by them. It shows up as a bias toward finding that a fixture is needed, toward specifying a
   slightly more capable one than required, and toward accepting the customer's framing of the problem
   rather than investigating it.
   The case in this lesson is a clean example. A customer scrapping six per cent on bore position asked
   for a better fixture. The commercially easy answer was to quote one. It would have been built, it
   would have performed beautifully on every technical objective, and the scrap rate would not have
   moved — because the parts were arriving with locating bosses displaced by over a millimetre and the
   fixture was faithfully putting them where those bosses said. **The right answer was that the casting
   process needed fixing and no fixture would help.**
   My argument for resisting the incentive is not primarily ethical, though it is that too. It is that
   **the alternative destroys the thing the business actually runs on**. A customer who buys a fixture
   that solves nothing learns that fixtures do not help, and that lesson is expensive and durable. The
   supplier who told them the truth is the one they call next time, and next time may be a bigger job.
   There are some practical habits that help. **Do the investigation before the quotation** — measuring
   thirty scrapped parts costs a day and settles the question. **Present the cheap option alongside the
   expensive one**, with its numbers, so the customer sees you have looked. **State assumptions
   explicitly**, particularly the capacity one, rather than letting a favourable number stand
   unqualified. And **be willing to write "no fixture required" on a proposal**, which is easier if you
   have done it before.
   The framing I find useful is that **a supplier sells what is asked for and an engineer determines what
   is needed.** Most of the time those coincide. The value of the role is concentrated in the times they
   do not.

### 29. Summary
The twelve technical objectives determine whether a fixture works; productivity and cost determine
whether it should exist, and these are independent questions — a fixture can be excellent on all twelve
and still be a commercial failure. The fixture designer controls every element of the cycle except the
cutting time, which in the worked example was 110 seconds of 228, or 48.25%, a fraction almost nobody
measures because improvement effort conventionally goes into the cutting time where tooling suppliers and
CAM engineers work. Three economic tests are needed rather than one: payback, which compares against
doing nothing and therefore makes every fixture look good; break-even against the next cheapest option
that passes the technical gates; and the capacity check, which frequently inverts the answer and is the
one most often skipped. In the worked example the payback of 6.04 months and the four-year saving of
₹1.79 M looked decisive until the capacity check showed the machine running at 36.7% utilisation with
over 2,400 spare hours — so the 342 hours released were not a bottleneck relieved but idle time made more
idle, and because most of a machine rate is fixed cost the ₹615,960 is a cash saving only if the freed
hours are actually used. Total cost of ownership must include maintenance, which at 32% of capital over
the programme is routinely omitted and systematically favours simpler designs. And the cheap option again
captured 14.3% of the benefit for 9.0% of the capital with a faster payback. Finally, the situations in
which not to build a fixture — low volume, a cheaper option, an unstable part design, an uncertain
programme, no capacity constraint, and above all a problem originating elsewhere — matter most, because a
fixture designer asked for a fixture has an obvious incentive to agree that one is needed.

### 30. Key takeaways
- **The twelve technical objectives ask "does it work?"; these two ask "was it worth building?"**
- **The fixture controls everything in the cycle except the cutting time** — 48.25% here.
- **Do all three tests: payback, break-even, capacity.** Payback alone is an advertisement, not an
  analysis.
- **Do the capacity check first.** It inverts answers in both directions.
- **On an under-utilised machine, freed hours are not a cash saving** — most of a machine rate is fixed
  cost.
- **Present time savings as hours released, with the monetary value made conditional.**
- **Include maintenance** — 32% of capital here, routinely omitted, and it favours simpler designs.
- **The cheap option often captures most of the benefit** — 14.3% of the value for 9.0% of the capital.
- **Compare against the next cheapest option that passes the gates**, not against nothing.
- **Programme length decides, not annual volume.**
- **State a load-time design target on the drawing** so it becomes verifiable.
- **Cost reduction effort should go where the money is**, which is rarely where the engineering interest
  is (L0.5.1).
- **Be willing to recommend not building a fixture** — especially when the problem originates elsewhere.
- **A supplier sells what is asked for; an engineer determines what is needed.**

---

## LESSON L2.2.6 — RESOLVING CONFLICTS BETWEEN OBJECTIVES

### 1. Lesson title
**L2.2.6 — When objectives conflict: priority, resolution and the fixture that was perfect and useless**

### 2. Learning objective
By the end of this lesson you will be able to recognise the standard conflicts between fixture design
objectives, apply a priority order that is defensible rather than arbitrary, distinguish a real conflict
from a design failure disguised as one, use a structured decision table to resolve competing
requirements, document a resolution so that it survives review, and explain — from case study CS-01 — how
a fixture can satisfy every technical objective and still be a complete failure.

### 3. Prerequisites
All of L2.2.1 to L2.2.5 (the fourteen objectives), L2.1.4 (fixture vs jig vs vise), L1.3.5 (the empty
clamp force window).

### 4. Why the topic matters
**Every fixture design is a conflict resolution exercise.** The fourteen objectives cannot all be
maximised simultaneously; a design that maximises rigidity will obstruct access, a design that maximises
access will lose rigidity, and a design that maximises both will cost too much. **Design skill is not
knowing the objectives — it is knowing which to sacrifice, by how much, and why.**

```
   ┌──────────────────────────────────────────────┐
   │ A BEGINNER TRIES TO SATISFY EVERY OBJECTIVE  │
   │ AND PRODUCES A FIXTURE THAT IS HEAVY,        │
   │ EXPENSIVE, HARD TO LOAD AND LATE.            │
   │                                              │
   │ AN EXPERIENCED DESIGNER DECIDES WHICH        │
   │ OBJECTIVES GOVERN THIS PART, AND DELIBERATELY│
   │ ACCEPTS LESS ON THE OTHERS.                  │
   │                                              │
   │ THE DIFFERENCE IS NOT KNOWLEDGE. IT IS       │
   │ WILLINGNESS TO DECIDE.                       │
   └──────────────────────────────────────────────┘
```

You have already met six conflicts without them being named as such:

| Conflict | Where it appeared | How it resolved |
|---|---|---|
| Support vs over-constraint | L2.2.1 | Adjustable support — support without constraint |
| Rigidity vs accessibility | L2.2.3 | Relieve the pads, keep the section |
| Clamp force vs distortion | L1.3.5 | Window empty → change the *scheme*, not the force |
| Accuracy vs cost | L2.1.4 | Gate first, then economics |
| Productivity vs safety | L2.2.4 | Safety is a gate, not a trade |
| Access vs location integrity | L2.2.3 | Relieved pads: 12.5× less exposure, same location |

### 5. Simple explanation

```
   THREE KINDS OF "CONFLICT"

   1 A FALSE CONFLICT
       The objectives only appear to conflict
       because the design is poor.
       → A better design satisfies both.
       → MOST APPARENT CONFLICTS ARE THIS.

   2 A GATE VIOLATION
       One "objective" is actually a mandatory
       limit.
       → There is no trade. The limit wins.
       → Safety, statutory requirements,
         determinacy.

   3 A REAL TRADE-OFF
       Genuine physics or economics: more of one
       means less of the other.
       → Decide explicitly, document the reason.

   ┌──────────────────────────────────────────────┐
   │ ALWAYS TEST FOR (1) BEFORE ACCEPTING (3).    │
   │                                              │
   │ Most "unavoidable trade-offs" are a failure  │
   │ of imagination wearing a respectable name.   │
   └──────────────────────────────────────────────┘
```

### 6. Engineering explanation

**THE HIERARCHY OF GATES — WHY THIS ORDER**

Recall from the Part 2 header that the fourteen objectives are not a flat list. They form a hierarchy:

```
   TIER 1 — ABSOLUTE GATES (never traded)
     SAFETY                         obj 12
     STATUTORY COMPLIANCE           within obj 12
     DETERMINACY (no over-constraint)  obj 1

     REASON: a violation here is not a worse
     fixture, it is an unacceptable one. There is
     no exchange rate between injury and cycle
     time.

  ─────────────────────────────────────────────────

   TIER 2 — FUNCTIONAL GATES (must be met, may be
            met in different ways)
     LOCATION                       obj 1
     SUPPORT                        obj 2
     CLAMPING                       obj 3
     REPEATABILITY                  obj 5
     ACCURACY                       obj 6

     REASON: fail these and the fixture does not
     do its job. But HOW they are met is open.

  ─────────────────────────────────────────────────

   TIER 3 — PERFORMANCE OBJECTIVES (optimised,
            traded against each other)
     RIGIDITY                       obj 4
     ACCESSIBILITY                  obj 7
     TOOL ACCESS                    obj 8
     CHIP EVACUATION                obj 9
     COOLANT ACCESS                 obj 10
     ERGONOMICS                     obj 13*
     PRODUCTIVITY                   obj 11

     REASON: these are matters of degree. More is
     better, and more of one usually means less of
     another.

  ─────────────────────────────────────────────────

   TIER 4 — THE VIABILITY TEST (applied to the
            whole)
     COST                           obj 14

     REASON: cost is not traded against the others
     one at a time. It is applied to the finished
     concept, and if it fails, the CONCEPT changes
     — you do not shave rigidity to afford a
     clamp.

   ┌──────────────────────────────────────────────┐
   │ * ERGONOMICS SITS IN TIER 3 ONLY FOR MATTERS │
   │ OF DEGREE — reach distance, effort. ANYTHING │
   │ THAT BECOMES AN INJURY RISK MOVES TO TIER 1. │
   │ The boundary is not always obvious and should│
   │ be resolved conservatively.                  │
   └──────────────────────────────────────────────┘
```

**WHY A HIERARCHY RATHER THAN A WEIGHTED SCORE**

`[PRACTICE]` A weighted scoring matrix — score each option 1–10 on each objective, multiply by weights,
sum — is popular and is wrong for this problem:

```
   THE PROBLEM WITH WEIGHTED SCORING

   It allows a HIGH SCORE ON MANY OBJECTIVES TO
   COMPENSATE FOR A FAILURE ON ONE.

   A fixture scoring 9/10 on twelve objectives and
   2/10 on safety scores very well overall.

   IT IS ALSO ILLEGAL TO BUILD.

   ┌──────────────────────────────────────────────┐
   │ GATES CANNOT BE COMPENSATED. That is what    │
   │ MAKES them gates.                            │
   │                                              │
   │ USE SCORING ONLY WITHIN TIER 3, AND ONLY     │
   │ AMONG OPTIONS THAT HAVE ALREADY PASSED       │
   │ TIERS 1 AND 2.                               │
   └──────────────────────────────────────────────┘
```

This is exactly the L2.1.4 method: **eliminate on the gates first, then compare economics among the
survivors.** The plain vise was eliminated at 257% of the tolerance budget before its cost was ever
considered.

**THE STANDARD CONFLICTS AND THEIR STANDARD RESOLUTIONS**

`[PRACTICE]` A reference table. **In almost every case the resolution is a design move, not a
compromise:**

| # | Conflict | Usual resolution | Type |
|---|---|---|---|
| 1 | Support vs over-constraint | Adjustable or conforming support | False |
| 2 | Rigidity vs access | Relieve locally, keep the load path | False |
| 3 | Rigidity vs weight | Section depth, not material grade | False |
| 4 | Clamp force vs distortion | Clamp on stiff features; more clamps, less force each | False |
| 5 | Clamp force vs distortion, window empty | Change the *scheme* — L1.3.5 | Real |
| 6 | Accuracy vs cost | Tight where it determines the part only | False |
| 7 | Accessibility vs location integrity | Relieved pads (12.5× exposure reduction) | False |
| 8 | Chip evacuation vs support area | Relieved pads again | False |
| 9 | Productivity vs safety | **Gate. No trade.** | Gate |
| 10 | Productivity vs cost | Explicit economics (L2.2.5) | Real |
| 11 | Rigidity vs ergonomics (weight) | Fixed base, light removable top | False |
| 12 | Flexibility vs accuracy | Two fixtures, or accept the looser | Real |
| 13 | Lead time vs capability | Phased: simple now, better later | Real |
| 14 | Coolant access vs clamp position | Move the clamp, not the coolant | False |

> **Count the "False" entries: ten of fourteen.** The characteristic novice error is to accept a conflict
> as unavoidable and split the difference, producing a design that is mediocre on both objectives instead
> of good on both.

**THE TEST FOR A FALSE CONFLICT**

```
   ASK THESE FIVE QUESTIONS BEFORE COMPROMISING:

   1 Can the two functions be SEPARATED onto
     different elements?
       (support ≠ location: the adjustable support)

   2 Can the geometry be changed LOCALLY rather
     than globally?
       (relieve the pad, keep the section)

   3 Is the conflict caused by a CHOICE MADE
     EARLIER that could be revisited?
       (the L1.3.5 clamping scheme)

   4 Is there a DIFFERENT PHYSICAL PRINCIPLE
     available?
       (spring-applied instead of pressure-applied)

   5 Can the two requirements be met at DIFFERENT
     TIMES?
       (clamp for roughing, release and re-clamp
        lightly for finishing)

   ┌──────────────────────────────────────────────┐
   │ IF ALL FIVE FAIL, THE CONFLICT IS PROBABLY   │
   │ REAL. THEN — AND ONLY THEN — DECIDE          │
   │ EXPLICITLY AND WRITE DOWN WHY.               │
   └──────────────────────────────────────────────┘
```

**THE DECISION TABLE**

`[PRACTICE]` A format for documenting a real trade-off so that it survives review, six months later, when
nobody remembers the discussion:

```
  ┌────────────────────────────────────────────────┐
  │ DESIGN DECISION RECORD              DDR-014    │
  ├────────────────────────────────────────────────┤
  │ CONFLICT                                       │
  │   Rigidity (obj 4) vs Chip evacuation (obj 9)  │
  │                                                │
  │ WHY IT ARISES                                  │
  │   Full-face support gives greatest stiffness   │
  │   but forms a chip trap under the part.        │
  │                                                │
  │ FALSE-CONFLICT TEST                            │
  │   Q1 separate  → no                            │
  │   Q2 local     → YES, relieve pads             │
  │   ...                                          │
  │   RESULT: FALSE CONFLICT                       │
  │                                                │
  │ RESOLUTION                                     │
  │   Three relieved pads, 25 mm dia, on a         │
  │   continuous rib beneath.                      │
  │                                                │
  │ EVIDENCE                                       │
  │   Deflection 0.0089 mm vs 0.0081 mm full face  │
  │   (9.9 % worse, within the 0.020 allocation)   │
  │   Exposed area 14.7 cm² vs 184 cm² (12.5×)     │
  │                                                │
  │ OBJECTIVES SACRIFICED                          │
  │   Rigidity, by 9.9 %, within allocation        │
  │                                                │
  │ DECIDED BY / DATE / REVIEWED BY                │
  └────────────────────────────────────────────────┘
```

**THE PRIORITY RULE WHEN A TRADE IS REAL**

```
   WHEN TIER 3 OBJECTIVES GENUINELY COMPETE,
   PRIORITISE BY:

   1 WHICH ONE, IF UNMET, PRODUCES SCRAP?
       Scrap is the most expensive outcome.

   2 WHICH ONE, IF UNMET, IS DISCOVERED LATE?
       A problem found at commissioning costs far
       more than one found at design review.

   3 WHICH ONE IS HARDER TO FIX AFTERWARDS?
       Rigidity is designed in; a clamp can be
       moved. Repeatability cannot be adjusted;
       accuracy can (L2.2.2).

   4 WHICH ONE DOES THE OPERATOR EXPERIENCE
     EVERY CYCLE?
       An irritation repeated 1,440 times a shift
       becomes a defeated interlock.

   ┌──────────────────────────────────────────────┐
   │ NOTE THAT "WHICH IS MORE IMPORTANT IN        │
   │ PRINCIPLE" IS NOT ON THIS LIST. THE          │
   │ QUESTIONS ARE ABOUT CONSEQUENCES, WHICH ARE  │
   │ SPECIFIC TO THE JOB.                         │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Gate** | A requirement that must be met; cannot be traded or compensated |
| **Trade-off** | A genuine exchange: more of one means less of another |
| **False conflict** | An apparent trade-off that a better design dissolves |
| **Compensation** | Allowing a high score on one criterion to offset a failure on another |
| **Weighted scoring** | Ranking options by weighted sums — valid only within a tier |
| **Design decision record** | A documented resolution, with evidence and what was sacrificed |
| **Governing objective** | The one that constrains the design on this particular job |
| **Allocation** | The share of a tolerance or budget assigned to one contributor |
| **Elimination** | Removing an option for failing a gate, before comparison |

### 8. Principle

> **THE FOURTEEN OBJECTIVES ARE A HIERARCHY, NOT A LIST.** Gates, then functional requirements, then
> performance, then viability.
> **GATES CANNOT BE COMPENSATED** — that is what makes them gates. Weighted scoring is valid only among
> options that have already passed them.
> **TEST FOR A FALSE CONFLICT BEFORE ACCEPTING A TRADE-OFF.** Ten of the fourteen standard conflicts
> dissolve under a better design.
> **THE NOVICE ERROR IS TO SPLIT THE DIFFERENCE** and be mediocre on both objectives instead of good on
> both.
> **WHEN A TRADE IS REAL, DECIDE EXPLICITLY AND RECORD WHY** — including what was sacrificed and by how
> much.
> **PRIORITISE BY CONSEQUENCE, NOT BY PRINCIPLE**: what makes scrap, what is found late, what cannot be
> fixed afterwards, what the operator meets every cycle.
> **A FIXTURE CAN SATISFY EVERY TECHNICAL OBJECTIVE AND STILL FAIL COMPLETELY.**

### 9. Industrial application

**CASE STUDY CS-01 — THE FIXTURE THAT WAS ACCURATE, RIGID AND COMMERCIALLY USELESS**

`[EX-ASSUMED]` A composite case, representative of a recurring pattern. Figures are illustrative.

```
  ════════════════════════════════════════════════
  CS-01  BACKGROUND
  ════════════════════════════════════════════════

  PART        Aluminium pump housing, 3.1 kg
  OPERATIONS  Face, bore, 14 drilled and tapped
              holes, one 0.02 mm true position
              bore pattern
  VOLUME      8,000/yr, programme 3 years
  MACHINE     VMC, 3,600 h/yr available,
              currently 44 % utilised
  CUSTOMER    Existing supplier, good relationship
  BRIEF       "We need a fixture. The soft jaws
              aren't holding position well enough
              on the bore pattern."

  ════════════════════════════════════════════════
  WHAT WAS DELIVERED
  ════════════════════════════════════════════════

  A four-position fixture with:
    - Hardened, ground EN31 locators, 58-62 HRC
    - 3-2-1 location with a diamond pin
    - Two adjustable supports under thin sections
    - Hydraulic clamping, spring-applied
    - Full interlock and guarding
    - Relieved pads, sloped chip surfaces
    - Coolant channels to every tapped hole
    - Setting block, hardened, for offset setting

  COMMISSIONING RESULTS
    Repeatability      ±0.008 mm
    Bias after
    correction         0.004 mm
    Deflection under
    load               0.011 mm
    True position
    achieved           0.014 mm against 0.020
    Load/unload        68 s for four parts
    Safety review      Passed, no findings

  ┌──────────────────────────────────────────────┐
  │ BY EVERY TECHNICAL MEASURE THIS FIXTURE WAS  │
  │ EXCELLENT. IT SCORED WELL ON ALL TWELVE      │
  │ TECHNICAL OBJECTIVES.                        │
  └──────────────────────────────────────────────┘
```

```
  ════════════════════════════════════════════════
  CS-01  WHAT HAPPENED
  ════════════════════════════════════════════════

  COST         ₹1,240,000
  LEAD TIME    16 weeks

  IN THE SAME 16 WEEKS
    The customer's own process engineer changed
    the soft jaw design — deeper jaws, a machined
    step for the flange, and a stop. Cost ₹41,000.

    Measured repeatability of the revised soft
    jaws: ±0.019 mm.
    True position achieved: 0.018 mm against
    0.020.

  ┌──────────────────────────────────────────────┐
  │ THE ₹41,000 SOLUTION PASSED THE REQUIREMENT. │
  │ NOT COMFORTABLY — 0.018 AGAINST 0.020 IS 90 %│
  │ OF THE BUDGET — BUT IT PASSED.               │
  └──────────────────────────────────────────────┘

  THE FIXTURE WAS INSTALLED AND USED. It performed
  exactly as designed for three years. Then the
  programme ended and it was scrapped.

  ════════════════════════════════════════════════
  CS-01  THE ARITHMETIC NOBODY DID
  ════════════════════════════════════════════════

  CAPACITY
    Cycle with soft jaws  = 11.2 min/part
    8,000 parts × 11.2/60 = 1,493 h/yr
    Available             = 3,600 h/yr
    Utilisation           = 41.5 %

    → NO CAPACITY CONSTRAINT WHATSOEVER

  PRODUCTIVITY BENEFIT
    Fixture cycle         = 9.1 min/part
    Saving                = 2.1 min/part
    Annual hours saved    = 8,000 × 2.1/60 = 280 h
    Value at ₹1,800/h     = ₹504,000/yr

    → BUT THE MACHINE HAD 2,100 SPARE HOURS. The
      280 released were not usable. NO OTHER WORK
      WAS WAITING.

  SCRAP BENEFIT
    Soft jaw scrap        = 0.4 %
    Fixture scrap         = 0.1 %
    Difference            = 0.3 % × 8,000
                          = 24 parts/yr
    Part value            = ₹2,100
    Saving                = ₹50,400/yr

  REAL ANNUAL BENEFIT    = ₹50,400
  (the productivity saving being unusable)

  PAYBACK
    Nominal, counting productivity:
      1,240,000/((504,000+50,400)/12)
      = 1,240,000/46,200 = 26.8 months

    Real, counting only scrap:
      1,240,000/(50,400/12)
      = 1,240,000/4,200
      = 295.2 months = 24.6 YEARS

  AGAINST A 3-YEAR PROGRAMME.

  ┌──────────────────────────────────────────────┐
  │ THE FIXTURE RECOVERED ₹151,200 OF SCRAP      │
  │ SAVING OVER ITS ENTIRE LIFE, AGAINST A COST  │
  │ OF ₹1,240,000.                               │
  │                                              │
  │ NET LOSS: ₹1,088,800                         │
  └──────────────────────────────────────────────┘

  AGAINST THE SOFT JAW ALTERNATIVE
    Extra capital     = 1,240,000 − 41,000
                      = ₹1,199,000
    Extra benefit     = ₹50,400/yr scrap only
    Break-even        = 1,199,000/50,400
                      = 23.8 YEARS

  ════════════════════════════════════════════════
  CS-01  WHAT WENT WRONG
  ════════════════════════════════════════════════

  ✗ THE CUSTOMER'S BRIEF WAS ACCEPTED AS THE
    PROBLEM STATEMENT.
    "The soft jaws aren't holding position" was
    treated as a fact. It was a hypothesis, and it
    turned out to be fixable within the soft jaws.

  ✗ NO ALTERNATIVE WAS PRICED.
    L2.1.3's break-even calculation was never
    performed, because there was nothing to
    compare against.

  ✗ NO CAPACITY CHECK.
    The productivity benefit was counted at full
    machine rate on a machine at 44 % utilisation.
    L2.2.5's exact error.

  ✗ THE PROGRAMME LENGTH WAS KNOWN AND IGNORED.
    Three years. A 26.8-month nominal payback
    leaves 10 months of return, and the real
    payback was 24.6 years.

  ✗ TECHNICAL EXCELLENCE WAS TREATED AS THE
    OBJECTIVE.
    The design team optimised the twelve technical
    objectives beautifully. NOBODY OWNED
    OBJECTIVES 13 AND 14.

  ┌──────────────────────────────────────────────┐
  │ NOT ONE OF THESE IS A TECHNICAL FAILURE.     │
  │                                              │
  │ THE FIXTURE WAS, AND REMAINED, AN EXCELLENT  │
  │ PIECE OF ENGINEERING. THAT IS PRECISELY WHAT │
  │ MAKES THE CASE INSTRUCTIVE.                  │
  └──────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  CS-01  WHAT SHOULD HAVE HAPPENED
  ════════════════════════════════════════════════

  1 INVESTIGATE THE BRIEF
      Measure the soft jaws' actual repeatability
      and identify WHY it was insufficient.
      Cost: two days.

  2 IDENTIFY THE CHEAPEST OPTION THAT PASSES
      A revised soft jaw was available at ₹41,000
      and would have been found by asking "what is
      the least that would work?"

  3 CAPACITY CHECK FIRST
      44 % utilisation. Immediately invalidates
      the productivity benefit.

  4 BREAK-EVEN AGAINST THE ALTERNATIVE
      23.8 years against a 3-year programme.
      Decisive.

  5 PRESENT BOTH OPTIONS WITH NUMBERS
      Let the customer decide with the arithmetic
      in front of them.

  THE LIKELY OUTCOME: a ₹41,000 sale instead of a
  ₹1,240,000 one.

  ┌──────────────────────────────────────────────┐
  │ AND A CUSTOMER WHO KNOWS THE SUPPLIER WILL   │
  │ TELL THEM WHEN NOT TO SPEND MONEY.           │
  │                                              │
  │ THAT IS WORTH MORE THAN ₹1.2 M OF ONE-TIME   │
  │ REVENUE, AND IT IS THE ARGUMENT THAT HAS TO  │
  │ BE MADE INTERNALLY BY SOMEONE SENIOR ENOUGH  │
  │ TO MAKE IT STICK.                            │
  └──────────────────────────────────────────────┘
```

### 10. Design rules
- **R1** — Classify every objective as **gate, functional requirement, performance objective or viability
  test** before designing.
- **R2** — **Never compensate a gate** with performance elsewhere.
- **R3** — Apply the **five-question false-conflict test** before accepting any trade-off.
- **R4** — Where a conflict is false, **change the design**; do not split the difference.
- **R5** — Where a trade is real, **decide explicitly** and record it in a design decision record.
- **R6** — Record **what was sacrificed and by how much**, with evidence.
- **R7** — Prioritise real trades by **consequence**: scrap, lateness of discovery, difficulty of later
  fix, per-cycle operator impact.
- **R8** — **Eliminate on gates before comparing economics** (L2.1.4).
- **R9** — Use weighted scoring **only within a tier**, among survivors.
- **R10** — **Investigate the brief** before accepting it as the problem statement.
- **R11** — Always **price the cheapest option that passes**, even when not asked to.
- **R12** — Do the **capacity check before the cost comparison**.
- **R13** — Assign **explicit ownership of objectives 13 and 14** — technical teams do not own them by
  default.
- **R14** — Review the design against **all fourteen** objectives, not the ones the team finds
  interesting.

### 11. Rules of thumb
- **The objectives are a hierarchy, not a list.**
- **Gates cannot be compensated.** A 9/10 average with 2/10 on safety is still illegal to build.
- **Ten of fourteen standard conflicts are false** — they dissolve under a better design.
- **The novice error is to split the difference** and be mediocre on both.
- **Separate the functions, relieve locally, revisit the earlier choice, change the principle, or
  separate in time** — five ways out of an apparent conflict.
- **Prioritise by consequence, not by principle.**
- **Repeatability cannot be adjusted; accuracy can** — so protect repeatability first.
- **Eliminate on gates, then compare economics.**
- **Investigate the brief; it is a hypothesis, not a fact.**
- **Price the cheapest option that passes, even when not asked.**
- **Nobody owns objectives 13 and 14 unless someone is told to.**
- **A fixture can be technically excellent and a complete failure.**

### 12. Formulae

**Gate test (per objective)**
```
PASS if requirement met, else ELIMINATE.
No score, no weighting, no compensation.
```

**Tier 3 comparison (survivors only)**
```
Score = Σ (wᵢ × sᵢ)     over TIER 3 objectives only

valid ONLY if every option scored has already
passed every Tier 1 and Tier 2 gate.
```

**Allocation check for a sacrificed objective**
```
Sacrifice acceptable IF
  degradation ≤ allocation for that contributor

e.g. relieved pads: δ rises 0.0081 → 0.0089 mm
     = +9.9 %, against a 0.020 mm allocation
     → ACCEPTABLE
```

**Break-even against the cheapest passing option**
```
N_be = (C_chosen − C_cheapest) / (benefit per part)

Compare against PROGRAMME VOLUME, not annual
volume.
```

**Real vs nominal benefit**
```
Benefit_real = scrap saving
             + (productivity saving × u)

where u = 1 if freed capacity is used
      u = 0 if it is not
      0 < u < 1 partial

[PRACTICE] u is an assumption the CUSTOMER must
confirm; it is not an engineering quantity.
```

| Variable | Meaning | Unit |
|---|---|---|
| wᵢ | Weight of Tier 3 objective i | — |
| sᵢ | Score of the option on objective i | — |
| N_be | Break-even volume | parts |
| u | Fraction of freed capacity actually used | — |

### 13. Worked numerical example

**Problem:** Three concepts are proposed for a fixture. Apply the hierarchy of gates, test the apparent
conflicts, resolve them, and select a concept with a documented justification.

```
GIVEN:
  PART AND REQUIREMENT                          [PROJ]
    Cast iron bracket, 6.4 kg
    Bore pattern true position       = 0.05 mm
    Fixture allocation (15 % of part
      tolerance, per the convention) = 0.0075 mm
      — see note in ASSUMPTION 6
    Thin web, 8 mm, spans 180 mm,
      flatness after machining       = 0.03 mm
    Volume       = 12,000/yr, programme 5 years
    Machine      = VMC, 3,600 h/yr, currently
                   88 % utilised
    Machine rate = ₹1,750/h
    Cycle now    = 14.0 min/part

  CONCEPT A — MINIMAL                       [EX-ASSUMED]
    3-2-1 on three pads, two clamps
    Cost ₹185,000
    Predicted web deflection under cut  = 0.104 mm
    Cycle 13.2 min
    Load requires reaching over the spindle
    Repeatability ±0.014 mm

  CONCEPT B — FULL SUPPORT                  [EX-ASSUMED]
    Full-face support, five clamps
    Cost ₹340,000
    Predicted web deflection            = 0.009 mm
    Cycle 12.9 min
    Chips trapped under the part; cleaning 45 s
    Repeatability ±0.011 mm
    Over-constrained: 5 support points on one
      plane

  CONCEPT C — RELIEVED PADS + ADJUSTABLE    [EX-ASSUMED]
    3 relieved pads + 2 adjustable supports
    Cost ₹268,000
    Predicted web deflection            = 0.014 mm
    Cycle 12.4 min
    Cleaning 8 s
    Repeatability ±0.010 mm

REQUIRED:
  (a) Apply Tier 1 gates and eliminate
  (b) Apply Tier 2 gates and eliminate
  (c) For each surviving conflict, apply the
      five-question false-conflict test
  (d) Compare survivors on Tier 3
  (e) Apply the Tier 4 viability test, including
      the capacity check
  (f) Select and justify, stating what was
      sacrificed

ASSUMPTION:
  1. Deflection predictions from the L1.3.x
     methods; they are estimates and should be
     confirmed by measurement at commissioning.
     [PROJ]
  2. Costs are budgetary. [EX-ASSUMED]
  3. Repeatability figures are predictions based
     on comparable designs; they MUST be verified
     by a repeatability study. Predicted
     repeatability is the weakest number in this
     comparison. [EX-ASSUMED]
  4. Web flatness is dominated by deflection under
     cut; other contributors are neglected here
     for clarity. In a real analysis they would be
     stacked. [PROJ]
  5. Cycle times include loading. [PROJ]
  6. THE 15 % ALLOCATION IS A CONVENTION FROM
     L0.4.x (fixture 10-20 % of part tolerance),
     NOT A STANDARD. It applies to the fixture's
     contribution to POSITION, and the web
     flatness is treated against its own 0.03 mm
     requirement separately. [GUIDE]

FORMULA:
  Tier 1, 2  → PASS/ELIMINATE
  Tier 3     → weighted comparison of survivors
  Tier 4     → payback, break-even, capacity

SUBSTITUTION AND CALCULATION:

  (a) TIER 1 GATES — SAFETY, STATUTE, DETERMINACY

      SAFETY
        A: loading requires reaching over the
           spindle.
           → Is this a Tier 1 issue or Tier 3
             ergonomics?
           → Reaching over a spindle is an
             INJURY EXPOSURE, not a matter of
             degree.
           → TIER 1. CONCEPT A ELIMINATED unless
             the loading position is changed.

        B, C: no safety findings.

      DETERMINACY
        B: five support points on one plane.
           A plane requires THREE.
           → OVER-CONSTRAINED (L2.2.1).
           → Predicted consequence: the part will
             rock, clamp force will distort it,
             and the flatness prediction of
             0.009 mm is NOT TRUSTWORTHY because
             it assumes perfect contact on all
             five.
           → TIER 1 GATE VIOLATION.

      ┌────────────────────────────────────────────┐
      │ NOTE WHAT JUST HAPPENED.                   │
      │                                            │
      │ CONCEPT B HAD THE BEST DEFLECTION FIGURE   │
      │ BY A LARGE MARGIN — 0.009 mm AGAINST C's   │
      │ 0.014 mm.                                  │
      │                                            │
      │ IT IS ELIMINATED WITHOUT THAT NUMBER EVER  │
      │ BEING COMPARED, BECAUSE THE NUMBER IS      │
      │ PRODUCED BY AN INVALID MODEL.              │
      │                                            │
      │ AN OVER-CONSTRAINED DESIGN'S PREDICTED     │
      │ STIFFNESS IS FICTION.                      │
      └────────────────────────────────────────────┘

      SURVIVING TIER 1: C only
      (A conditionally, if loading is redesigned)

  (b) TIER 2 GATES — LOCATION, SUPPORT, CLAMPING,
      REPEATABILITY, ACCURACY

      REPEATABILITY against the 0.0075 mm
      allocation:
        A: ±0.014 mm → 0.028 mm range
        C: ±0.010 mm → 0.020 mm range

      ┌────────────────────────────────────────────┐
      │ BOTH EXCEED THE 0.0075 mm ALLOCATION.      │
      │                                            │
      │ C is 0.010/0.0075 = 1.33× over on the      │
      │ half-range.                                │
      └────────────────────────────────────────────┘

      IS THIS A REAL FAILURE?

      Check against the actual requirement rather
      than the convention:
        Part tolerance          = 0.05 mm
        C's repeatability       = ±0.010 mm
        Fraction of tolerance   = 0.020/0.05
                                = 40 %

      THAT LEAVES 60 % FOR THE MACHINE, TOOL,
      THERMAL AND MEASUREMENT CONTRIBUTIONS
      COMBINED. Too little.

      RESOLUTION REQUIRED: C's repeatability must
      be improved, OR the allocation renegotiated
      with evidence.

      For this exercise, assume a design review
      identifies the cause — a plastic-tipped
      locator on the primary datum — and replaces
      it with a ground EN31 pad. [EX-ASSUMED]
        Revised C repeatability = ±0.006 mm
        Range                   = 0.012 mm
        Fraction of tolerance   = 24 %
        Against allocation      = 0.006/0.0075
                                = 0.80 → PASS

      SUPPORT
        Web deflection C = 0.014 mm against a
        0.03 mm flatness requirement
        = 46.7 % → PASS with margin

      SURVIVING TIER 2: C (revised)

  (c) FALSE-CONFLICT TESTS

      CONFLICT 1 — CONCEPT B's SUPPORT vs
      DETERMINACY

        Q1 Separate the functions?
           YES — three pads LOCATE, additional
           supports SUPPORT WITHOUT LOCATING if
           made adjustable.
        → FALSE CONFLICT. This is exactly what
          Concept C does, and it is why C exists.

        Verify the numbers:
          A (3 pads, no support)  δ = 0.104 mm
          C (3 pads + 2 adj)      δ = 0.014 mm
          Improvement = 0.104/0.014 = 7.43×

        AND C IS DETERMINATE.

        ┌──────────────────────────────────────────┐
        │ CONCEPT C ACHIEVES 87 % OF CONCEPT B's   │
        │ CLAIMED STIFFNESS BENEFIT WITHOUT THE    │
        │ OVER-CONSTRAINT.                         │
        │                                          │
        │ (0.104−0.014)/(0.104−0.009) = 94.7 % of  │
        │ the deflection reduction, at a lower     │
        │ cost, with a valid model.                │
        └──────────────────────────────────────────┘

      CONFLICT 2 — SUPPORT AREA vs CHIP EVACUATION

        B: full face, cleaning 45 s
        C: relieved pads, cleaning 8 s
        Q2 Change geometry locally? YES
        → FALSE CONFLICT, already resolved by C.

        Cleaning time saving = 37 s/part
        Annual = 12,000 × 37/3600 = 123.3 h

      CONFLICT 3 — CONCEPT A's SAFETY vs LAYOUT

        Q3 Is this caused by an earlier choice?
           YES — the fixture's position on the
           table.
        Q5 Different times? Loading could occur
           with the spindle retracted, but that
           relies on procedure, not design.

        ┌──────────────────────────────────────────┐
        │ A CONTROL THAT DEPENDS ON THE OPERATOR   │
        │ DOING SOMETHING IS LOW IN THE HIERARCHY  │
        │ OF CONTROL (L2.2.4).                     │
        │                                          │
        │ THE DESIGN FIX — REPOSITION THE FIXTURE  │
        │ — IS AVAILABLE AND CHEAP AT THIS STAGE.  │
        │ TAKE IT.                                 │
        └──────────────────────────────────────────┘

        → FALSE CONFLICT, but A remains eliminated
          on repeatability (±0.014 = 56 % of the
          part tolerance).

  (d) TIER 3 COMPARISON

      Only C survives. NO COMPARISON IS NEEDED.

      ┌────────────────────────────────────────────┐
      │ THIS IS THE NORMAL OUTCOME OF APPLYING     │
      │ GATES PROPERLY, AND IT IS WHY THE          │
      │ HIERARCHY IS WORTH USING.                  │
      │                                            │
      │ THE GATES USUALLY LEAVE ONE OR TWO         │
      │ CANDIDATES, AND THE ELABORATE WEIGHTED     │
      │ SCORING EXERCISE TURNS OUT TO BE           │
      │ UNNECESSARY.                               │
      └────────────────────────────────────────────┘

  (e) TIER 4 — VIABILITY

      CAPACITY CHECK FIRST
        Current: 12,000 × 14.0/60 = 2,800 h/yr
        Available 3,600 → 77.8 %
        (stated as 88 % including other work —
         use the stated figure)

        With C: 12,000 × 12.4/60 = 2,480 h/yr
        Saving = 320 h/yr

      ┌────────────────────────────────────────────┐
      │ AT 88 % UTILISATION THE MACHINE IS NEAR    │
      │ CAPACITY. THE 320 HOURS RELEASED ARE       │
      │ GENUINELY VALUABLE — u ≈ 1.                │
      │                                            │
      │ CONTRAST WITH L2.2.5 AND CS-01, WHERE      │
      │ IDENTICAL ARITHMETIC PRODUCED AN ILLUSORY  │
      │ BENEFIT BECAUSE u ≈ 0.                     │
      │                                            │
      │ SAME CALCULATION. OPPOSITE MEANING.        │
      └────────────────────────────────────────────┘

      VALUE
        320 h × ₹1,750 = ₹560,000/yr

      PAYBACK
        268,000/(560,000/12)
        = 268,000/46,667
        = 5.74 months

      OVER THE 5-YEAR PROGRAMME
        Benefit = 560,000 × 5 = ₹2,800,000
        Cost    = 268,000
                  + maintenance 8 % × 5
                    = 107,200
                  = ₹375,200
        NET     = ₹2,424,800

      BREAK-EVEN AGAINST CONCEPT A
        A is eliminated on repeatability, so there
        is no valid cheaper alternative to compare
        against.

      ┌────────────────────────────────────────────┐
      │ THE BREAK-EVEN CALCULATION REQUIRES A      │
      │ CHEAPER OPTION THAT PASSES THE GATES.      │
      │                                            │
      │ IF NONE EXISTS, THE COMPARISON IS AGAINST  │
      │ NOT DOING THE WORK AT ALL — WHICH IS A     │
      │ DIFFERENT AND USUALLY DECISIVE QUESTION.   │
      └────────────────────────────────────────────┘

  (f) SELECTION AND WHAT WAS SACRIFICED

      SELECTED: CONCEPT C (revised locator)

      SACRIFICED:
        Rigidity — δ 0.014 mm vs B's nominal
        0.009 mm, i.e. 55.6 % worse on paper.
        JUSTIFIED because:
          - B's figure is invalid (over-constrained)
          - 0.014 mm is 46.7 % of the 0.03 mm
            flatness requirement
          - the allocation is met with margin

        Cost — ₹268,000 vs A's ₹185,000, i.e.
        44.9 % more.
        JUSTIFIED because A fails a Tier 2 gate;
        the comparison is not available.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Tier 1: A eliminated     │ safety (spindle   │
  │                              │ reach)            │
  │     Tier 1: B eliminated     │ over-constrained  │
  │                              │ — 5 pts on a plane│
  │ (b) Tier 2: C initially      │ ±0.010 = 40 % of  │
  │     failed repeatability     │ part tolerance    │
  │     C revised                │ ±0.006 → 24 %     │
  │ (c) Conflict 1 FALSE         │ adj. supports;    │
  │                              │ C gets 94.7 % of  │
  │                              │ B's δ reduction   │
  │     Conflict 2 FALSE         │ relieved pads;    │
  │                              │ 45 s → 8 s        │
  │     Conflict 3 FALSE         │ reposition, design│
  │                              │ not procedure     │
  │ (d) Tier 3                   │ one survivor —    │
  │                              │ no comparison     │
  │ (e) Utilisation 88 %, u ≈ 1  │ 320 h/yr REAL     │
  │     Payback                  │ 5.74 months       │
  │     5-year net               │ ₹2,424,800        │
  │ (f) SELECTED                 │ CONCEPT C revised │
  │     Sacrificed               │ 55.6 % of nominal │
  │                              │ rigidity, within  │
  │                              │ allocation        │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Flatness margin 0.03/0.014 = 2.14
  Repeatability against allocation 0.0075/0.006
    = 1.25 — modest, and dependent on a PREDICTED
    figure that must be verified.
  Payback margin: 5.74 months against a 60-month
    programme = 10.5×.

PASS/FAIL:
  ✓ PASS — Tier 1 gates, Concept C
  ✓ PASS — Tier 2 gates, Concept C revised
  ✓ PASS — flatness, 46.7 % of requirement
  ⚠ MARGINAL — repeatability at 1.25× margin on a
    predicted value. VERIFY BY STUDY BEFORE
    ACCEPTANCE.
  ✓ PASS — viability, with u ≈ 1 justified by the
    88 % utilisation.

ENGINEERING CONCLUSION:
  1. THE BEST-PERFORMING CONCEPT WAS ELIMINATED
     WITHOUT ITS PERFORMANCE BEING COMPARED.
     Concept B had a deflection of 0.009 mm
     against C's 0.014 mm — 55.6 % better. It was
     eliminated at Tier 1 for over-constraint, and
     the deflection figure was never weighed.
     THAT IS NOT AN OVERSIGHT, IT IS THE POINT.
     A five-point support on a single plane cannot
     all contact simultaneously, so the model that
     produced 0.009 mm assumed something physically
     impossible. AN OVER-CONSTRAINED DESIGN'S
     PREDICTED STIFFNESS IS FICTION, and comparing
     it against a valid prediction would have
     corrupted the whole exercise.

  2. THE FALSE-CONFLICT TEST RECOVERED ALMOST ALL
     OF THE LOST PERFORMANCE.
     Separating support from location — three
     locating pads plus two adjustable supports —
     gave 94.7 % of Concept B's deflection
     reduction while remaining determinate, and
     cost ₹72,000 less. The apparent conflict
     between support and determinacy was entirely
     false, and the resolution was the standard one
     from L2.2.1.
     TEN OF THE FOURTEEN STANDARD CONFLICTS BEHAVE
     THIS WAY.

  3. THE SAME CAPACITY ARITHMETIC MEANT THE
     OPPOSITE THING HERE.
     320 hours released at ₹1,750 is ₹560,000 a
     year, and the payback is 5.74 months. In
     L2.2.5 an almost identical calculation was
     nearly worthless because the machine ran at
     36.7 % utilisation. Here it runs at 88 %.
     THE ARITHMETIC IS IDENTICAL AND THE MEANING IS
     OPPOSITE, which is why the capacity position
     must be established before the money is
     counted, not after.

  4. A GATE FAILURE WAS FIXED RATHER THAN TRADED.
     Concept C initially consumed 40 % of the part
     tolerance in repeatability alone. The
     temptation is to argue the allocation down.
     The design review instead found the cause — a
     plastic-tipped locator on the primary datum —
     and fixed it, taking the figure to 24 %.
     REPEATABILITY CANNOT BE ADJUSTED OUT LATER
     (L2.2.2), so it is the one number worth
     spending design effort on before commitment.
     I would not accept the ±0.006 mm prediction
     without a study; it is the weakest number in
     the analysis and the margin on it is only
     1.25.

  5. ONE SURVIVOR IS THE NORMAL OUTCOME.
     No weighted scoring was needed, because the
     gates left a single candidate. That is typical
     and it is the practical argument for the
     hierarchy: it does the work that elaborate
     decision matrices claim to do, faster, and
     without allowing a good average to hide an
     unacceptable failure.

SENSITIVITY NOTE:
  Ranked by influence:
    1. THE REPEATABILITY PREDICTION — ±0.006 mm
       with a margin of only 1.25 against the
       allocation. If the study returns ±0.009 mm
       the concept fails Tier 2 and the design
       must change. THE WEAKEST NUMBER AND THE
       MOST CONSEQUENTIAL.
    2. MACHINE UTILISATION — 88 % makes the whole
       business case. At 50 % the ₹560,000 would
       largely evaporate and the payback would
       become notional, exactly as in CS-01.
    3. THE ALLOCATION CONVENTION — 15 % is a
       guideline, not a standard. Applying 10 %
       would fail Concept C; applying 20 % would
       have passed it unrevised. THE CONVENTION
       CHOSEN CHANGED THE DESIGN, which is worth
       being conscious of.
    4. DEFLECTION PREDICTIONS — 0.014 mm against a
       0.03 mm requirement gives a factor of 2.14,
       so a 50 % prediction error is tolerable.
       LEAST SENSITIVE.
    5. COSTS — budgetary, ±20 % would not change
       the selection given a 10.5× payback margin.
```

### 14. Engineering assumptions
- Deflection predictions from the L1.3.x methods; estimates, to be confirmed at commissioning `[PROJ]`.
- Costs budgetary `[EX-ASSUMED]`.
- **Repeatability figures are predictions and must be verified by study** — the weakest numbers in the
  comparison `[EX-ASSUMED]`.
- Web flatness treated as deflection-dominated for clarity; a real analysis would stack all contributors
  `[PROJ]`.
- The 15% allocation is a **convention from L0.4.x, not a standard**, and the convention chosen changed
  the outcome `[GUIDE]`.
- CS-01 is a **composite case with illustrative figures**, representative of a recurring pattern rather
  than a single documented project `[EX-ASSUMED]`.

### 15. Diagram

```
     RESOLVING CONFLICTS BETWEEN OBJECTIVES
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE HIERARCHY

   ┌────────────────────────────────────────────┐
   │ TIER 1  ABSOLUTE GATES                     │
   │   safety · statute · determinacy           │
   │   NEVER TRADED. NEVER COMPENSATED.         │
   └────────────────────────────────────────────┘
                    ↓ survivors only
   ┌────────────────────────────────────────────┐
   │ TIER 2  FUNCTIONAL GATES                   │
   │   location · support · clamping            │
   │   repeatability · accuracy                 │
   │   MUST BE MET — HOW is open                │
   └────────────────────────────────────────────┘
                    ↓ survivors only
   ┌────────────────────────────────────────────┐
   │ TIER 3  PERFORMANCE OBJECTIVES             │
   │   rigidity · accessibility · tool access   │
   │   chips · coolant · ergonomics ·           │
   │   productivity                             │
   │   OPTIMISED AND TRADED AGAINST EACH OTHER  │
   └────────────────────────────────────────────┘
                    ↓
   ┌────────────────────────────────────────────┐
   │ TIER 4  VIABILITY                          │
   │   cost — applied to the WHOLE CONCEPT      │
   │   If it fails, THE CONCEPT CHANGES.        │
   └────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHY NOT WEIGHTED SCORING?

   Option X:  9/10 on twelve objectives
              2/10 on SAFETY
              weighted total: EXCELLENT

   ┌──────────────────────────────────────────────┐
   │ AND ILLEGAL TO BUILD.                        │
   │                                              │
   │ GATES CANNOT BE COMPENSATED — THAT IS WHAT   │
   │ MAKES THEM GATES.                            │
   │                                              │
   │ Score only within Tier 3, only among         │
   │ survivors.                                   │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE FIVE-QUESTION FALSE-CONFLICT TEST

   1 SEPARATE the functions onto different
     elements?          → adjustable support
   2 Change geometry LOCALLY, not globally?
                        → relieved pads
   3 Revisit an EARLIER CHOICE that caused it?
                        → the clamping scheme
   4 A different PHYSICAL PRINCIPLE?
                        → spring-applied clamping
   5 Meet them at DIFFERENT TIMES?
                        → rough hard, finish light

   ┌──────────────────────────────────────────────┐
   │ TEN OF THE FOURTEEN STANDARD CONFLICTS ARE   │
   │ FALSE.                                       │
   │                                              │
   │ THE NOVICE ERROR IS TO SPLIT THE DIFFERENCE  │
   │ AND BE MEDIOCRE ON BOTH INSTEAD OF GOOD ON   │
   │ BOTH.                                        │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE WORKED EXAMPLE — B WAS BEST AND WAS
  ELIMINATED

   deflection    A ████████████████████ 0.104 mm
                 B █ 0.009 mm  ◄ BEST
                 C ██ 0.014 mm

   Tier 1:  B has 5 support points on ONE PLANE

   ┌──────────────────────────────────────────────┐
   │ A PLANE NEEDS THREE. THE 0.009 mm FIGURE     │
   │ ASSUMES ALL FIVE CONTACT SIMULTANEOUSLY,     │
   │ WHICH CANNOT HAPPEN.                         │
   │                                              │
   │ AN OVER-CONSTRAINED DESIGN'S PREDICTED       │
   │ STIFFNESS IS FICTION. Eliminated without the │
   │ number ever being weighed.                   │
   └──────────────────────────────────────────────┘

   AND THE FALSE-CONFLICT TEST RECOVERED IT ANYWAY:
     C achieves 94.7 % of B's deflection reduction
     — determinately, and ₹72,000 cheaper.

  ──────────────────────────────────────────────────────────

  THE SAME ARITHMETIC, OPPOSITE MEANING

   L2.2.5  utilisation 36.7 %   u ≈ 0
           ████████░░░░░░░░░░░░░░░░
           342 h released → NOT A CASH SAVING

   L2.2.6  utilisation 88 %     u ≈ 1
           ██████████████████████░░
           320 h released → ₹560,000/yr REAL

   ┌──────────────────────────────────────────────┐
   │ IDENTICAL CALCULATION. OPPOSITE MEANING.     │
   │                                              │
   │ THE CAPACITY POSITION IS WHAT CONVERTS HOURS │
   │ INTO MONEY, AND IT SITS ENTIRELY OUTSIDE THE │
   │ FIXTURE CALCULATION.                         │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  CS-01 — TWELVE OUT OF TWELVE, AND A FAILURE

   TECHNICAL SCORECARD
     repeatability  ±0.008 mm      ✓
     bias corrected  0.004 mm      ✓
     deflection      0.011 mm      ✓
     true position   0.014/0.020   ✓
     safety review   no findings   ✓
     chips, coolant, access        ✓

   COMMERCIAL SCORECARD
     cost                    ₹1,240,000
     the alternative nobody
       priced                   ₹41,000
     real annual benefit        ₹50,400
     REAL PAYBACK             24.6 YEARS
     PROGRAMME LENGTH          3 YEARS
     ──────────────────────────────────
     NET LOSS                ₹1,088,800

   ┌──────────────────────────────────────────────┐
   │ NOT ONE TECHNICAL FAILURE.                   │
   │                                              │
   │ THE BRIEF WAS ACCEPTED AS THE PROBLEM.       │
   │ NO ALTERNATIVE WAS PRICED.                   │
   │ NO CAPACITY CHECK ON A 44 %-UTILISED MACHINE.│
   │ THE 3-YEAR PROGRAMME WAS KNOWN AND IGNORED.  │
   │ NOBODY OWNED OBJECTIVES 13 AND 14.           │
   │                                              │
   │ A FIXTURE CAN SATISFY EVERY TECHNICAL        │
   │ OBJECTIVE AND STILL BE A COMPLETE FAILURE.   │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example
Conflicts and their resolutions belong in the design file, not the drawing — but two notes should appear:

```
FIXTURE FX-8100 — DESIGN BASIS
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: SUPPORTS ITEMS 11 AND 12 ARE ADJUSTABLE
        AND NON-LOCATING. THEY SHALL BE SET AFTER
        THE PART IS SEATED ON PADS ITEMS 4, 5 AND
        6. THEY SHALL NOT BE USED TO CORRECT PART
        POSITION.

NOTE 2: DESIGN DECISION RECORDS DDR-011 TO DDR-019
        APPLY TO THIS FIXTURE. SEE DESIGN FILE.
```

`[PRACTICE]` **Note 1 is essential and frequently omitted.** An adjustable support that is set before the
part is seated, or wound up to "level" the part, has been converted into a locator — and the whole
determinacy argument collapses. The drawing must say so, because the person setting it will not have read
the design file.

### 17. CAD workflow
1. **List the fourteen objectives** in the design file at concept stage, with the tier of each
2. Generate **more than one concept** — a single concept cannot be compared
3. Apply **Tier 1 and Tier 2 gates** to each concept before detailing any of them
4. For every apparent conflict, run the **five-question test** and record the answer
5. Where the conflict is false, **implement the design move** and quantify the result
6. Where it is real, raise a **design decision record** with evidence
7. Detail **only the surviving concept** — detailing a concept that will be eliminated is wasted work
8. Include the **DDR list on the assembly drawing**

`[PRACTICE]` Step 3 is the discipline that saves the most time. **The strong temptation is to detail the
favourite concept first and gate it afterwards**, at which point the sunk effort argues for the concept.

### 18. GD&T application
Conflict resolution has one direct GD&T consequence:

```
  WHEN AN OBJECTIVE IS SACRIFICED, THE SACRIFICE
  MUST BE VISIBLE IN THE TOLERANCE ALLOCATION.

  STANDARD: ASME Y14.5-2018 (allocation practice
  is not itself standardised; the STACK is)

  ┌────────────────────────────────────────────┐
  │ EXAMPLE FROM THE WORKED CASE               │
  │                                            │
  │ Part requirement    web flatness 0.03      │
  │ Fixture contribution (deflection)  0.014   │
  │ Remaining for all other sources    0.016   │
  │                                            │
  │ THE 0.014 IS A DELIBERATE SACRIFICE OF     │
  │ RIGIDITY, MADE VISIBLE.                    │
  │                                            │
  │ IF IT IS NOT WRITTEN INTO THE ALLOCATION,  │
  │ THE NEXT ENGINEER WILL ASSUME THE FIXTURE  │
  │ CONTRIBUTES NOTHING AND WILL SPEND THE     │
  │ 0.014 SOMEWHERE ELSE.                      │
  └────────────────────────────────────────────┘

  Full stack-up methods at Level 12.
```

### 19. Manufacturing method
| Resolution | Manufacturing consequence |
|---|---|
| Adjustable supports | Bought-in `[MFR]`; specify locking type and setting procedure |
| Relieved pads | Machine soft, harden, grind the pads only — L0.5.3 |
| Repositioned fixture for access | May change the mounting pattern; check T-slots |
| Revised locator material | EN31 58–62 HRC ground, not plastic-tipped |
| Phased design | Build the base to accept the later addition |

> **A resolution that changes the manufacturing route must be caught at the design stage.** Deciding to
> replace a plastic-tipped locator with a ground EN31 pad after the plate has been hardened means
> re-machining a hardened plate — L0.5.3's exact warning.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| All fourteen objectives reviewed | Design review record | Every one addressed |
| Tier 1 gates passed | Documented gate review | No violations |
| Determinacy | Count contact points per plane | 3-2-1, no more |
| Adjustable supports non-locating | Set with part seated; verify no lift | Part does not move |
| Repeatability | 10-cycle study (L2.2.2) | Within allocation |
| DDRs complete | Design file audit | Every real trade recorded |
| Sacrifices within allocation | Stack-up review | Each within its share |

`[PRACTICE]` **"Verify no lift" is the practical test for an adjustable support.** Seat the part, set the
support, then place an indicator on the part and set the support again — **if the part moves, the support
has become a locator.**

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Treating the objectives as a **flat list** | Gates traded away |
| 2 | **Weighted scoring across tiers** | A good average hides an unacceptable failure |
| 3 | Accepting a conflict as real **without testing** | Mediocre on both objectives |
| 4 | **Splitting the difference** | The characteristic novice compromise |
| 5 | Comparing an **over-constrained design's** predicted stiffness | Comparing against fiction |
| 6 | Not recording **what was sacrificed** | The next engineer spends the allocation again |
| 7 | **Detailing before gating** | Sunk effort argues for a doomed concept |
| 8 | Generating **one concept** | Nothing to compare |
| 9 | Accepting the **brief as the problem** | CS-01 |
| 10 | Not pricing the **cheapest passing option** | CS-01 |
| 11 | Counting productivity benefit **without a capacity check** | CS-01 |
| 12 | Setting an **adjustable support before seating** | It becomes a locator; determinacy lost |
| 13 | Nobody owning **objectives 13 and 14** | Technical excellence, commercial failure |
| 14 | Arguing an **allocation down** instead of fixing the cause | Repeatability cannot be adjusted later |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Design review deadlocked | Real trade not decided | Identify the conflict type | Raise a DDR, decide | Five-question test |
| Concept fails late | Gates applied after detailing | Review the gate sequence | Re-gate | Design rule R1 |
| Part rocks despite good pads | Adjustable support set as a locator | Indicator test | Re-set with part seated | Drawing note |
| Tolerance overspent downstream | Sacrifice not recorded | Review the allocation | Rebuild the stack | Design rule R6 |
| Excellent fixture, unhappy customer | Objectives 13/14 unowned | Review the business case | — | Assign ownership |
| Predicted stiffness not achieved | Over-constrained model | Count contact points | Redesign determinately | Tier 1 gate |
| Chosen concept unjustifiable at review | No alternatives generated | — | Generate and gate | Design rule, ≥3 concepts |
| Repeatability short of allocation | Cause not investigated | Isolate by element | Fix the cause | Never negotiate it away |

### 23. Design checklist
- [ ] Are all **fourteen objectives listed**, each with its tier?
- [ ] Have **at least three concepts** been generated?
- [ ] Have **Tier 1 gates** been applied before any detailing?
- [ ] Have **Tier 2 gates** been applied to the survivors?
- [ ] Has every apparent conflict been through the **five-question test**?
- [ ] Where false, has the **design been changed** rather than the difference split?
- [ ] Where real, is there a **design decision record** with evidence?
- [ ] Is **what was sacrificed** recorded, with the amount and the allocation it sits within?
- [ ] Is any **over-constrained concept's** predicted performance excluded from comparison?
- [ ] Has the **capacity check** been done before counting the money?
- [ ] Has the **cheapest passing option** been priced?
- [ ] Was the **brief investigated** rather than accepted?
- [ ] Does someone **own objectives 13 and 14**?
- [ ] Do adjustable supports carry the **non-locating note** on the drawing?

### 24. Beginner exercise
**E2.2.6-B** — For each situation, state whether it is a false conflict, a gate violation or a real
trade-off, and give the resolution:
(a) A support pad improves stiffness but creates a chip trap.
(b) A faster clamping arrangement removes a guard interlock.
(c) A fourth support point on a plane improves stiffness.
(d) A more accurate fixture costs more than the customer's budget.
(e) A clamp positioned for best force blocks the coolant path.
(f) Increasing clamp force stops the part slipping but distorts it beyond tolerance.

### 25. Intermediate exercise
**E2.2.6-I** — Two concepts for a fixture: Concept P costs ₹210,000, achieves deflection 0.021 mm,
repeatability ±0.009 mm, cycle 8.4 min, and uses four support points on a single plane. Concept Q costs
₹295,000, deflection 0.026 mm, repeatability ±0.007 mm, cycle 8.1 min, three pads plus one adjustable
support. The part tolerance is 0.06 mm with a 15% fixture allocation; the flatness requirement is
0.04 mm. Volume 9,000/yr for 4 years, machine at 91% utilisation, rate ₹1,750/h.
(a) Apply the Tier 1 gates and state the outcome for each concept.
(b) Apply the Tier 2 gates to the survivors.
(c) Identify the conflict between stiffness and determinacy and classify it.
(d) Explain why Concept P's deflection figure cannot be compared directly with Concept Q's.
(e) Perform the capacity check and state whether the cycle saving has real value.
(f) Calculate the payback of the surviving concept.
(g) State what was sacrificed in the selection and whether it sits within its allocation.

### 26. Advanced exercise
**E2.2.6-A** — You are asked to quote a fixture. The brief states: *"We are scrapping 3.2% of these parts
on a Ø40H7 bore's position relative to two cast datums. The current vise setup is not repeatable enough.
Budget ₹900,000, needed in 12 weeks."* Volume is 15,000/yr, programme length is stated as "ongoing", the
machine runs at 51% utilisation, part value ₹1,650, machine rate ₹1,900/h, current cycle 9.6 min.
(i) List the questions you would ask before quoting, and state what each would change.
(ii) Explain how you would investigate whether the vise is actually the cause, including what you would
measure and on how many parts.
(iii) Assuming the investigation shows the vise repeatability is ±0.04 mm against a required fixture
allocation of ±0.012 mm, calculate the scrap saving a compliant fixture could deliver.
(iv) Calculate the productivity benefit of a 1.4 min cycle reduction, and state its real value given the
utilisation.
(v) Calculate the payback under (a) both benefits counted and (b) scrap only, and explain which is
correct here.
(vi) Explain the effect of "ongoing" as a programme length, and how you would handle it.
(vii) Identify three cheaper options that might pass the gates, and state what you would need to know to
evaluate each.
(viii) Explain the circumstances under which your recommendation would be *not* to build a fixture.
(ix) Relate this case to CS-01, identifying which of CS-01's five errors this brief invites.
(x) Write the covering paragraph of your quotation in no more than 200 words, presenting the case
honestly.

### 27. Interview questions
1. *"How do you decide between competing requirements in a fixture design?"*
   **Answer:** First by recognising that they are not all the same kind of requirement. Safety, statutory
   compliance and determinacy are gates — they cannot be traded, and a design that fails one is not a
   worse design, it is an unacceptable one. Location, support, clamping, repeatability and accuracy must
   be met, though how they are met is open. Only the performance objectives — rigidity, access, chips,
   coolant, productivity — are genuinely traded against each other, and cost is applied to the whole
   concept at the end. Then, before accepting any trade-off, I test whether it is real, because most are
   not. I ask whether the functions can be separated onto different elements, whether the geometry can
   change locally instead of globally, whether an earlier choice caused it, whether a different physical
   principle is available, and whether the two requirements can be met at different times. Ten of the
   fourteen standard conflicts dissolve under one of those. When a trade really is real, I decide it
   explicitly and write down what was sacrificed and by how much, because otherwise the next engineer
   spends the same allocation again.
2. *"Can a fixture be technically excellent and still a failure?"*
   **Answer:** Yes, and I would give the case we studied. A four-position fixture with repeatability of
   eight microns, corrected bias of four microns, true position of fourteen microns against a twenty
   micron requirement, full interlocking, good chip handling — it passed every technical objective. It
   cost ₹1.24 million and took sixteen weeks. In those same sixteen weeks the customer's own engineer
   revised the soft jaws for ₹41,000 and achieved eighteen microns, which passed. The machine was at
   forty-four per cent utilisation so the productivity benefit was unusable, leaving only the scrap
   saving — about fifty thousand a year against a three-year programme. Real payback was twenty-four
   years. Not one of the failures was technical. The brief was accepted as the problem statement, no
   alternative was priced, no capacity check was done, and the known programme length was ignored. The
   underlying cause is that nobody owned objectives thirteen and fourteen. Technical teams optimise the
   twelve they find interesting.

### 28. Expert questions
1. *"You say most conflicts are false. Give me one that genuinely is not, and explain how you would
   decide it."*
   **Answer:** The clearest genuinely real one is **flexibility against accuracy**.
   A fixture that accommodates a family of parts must have adjustment somewhere — movable stops,
   interchangeable inserts, a slotted base. **Every adjustment is a joint, and every joint is a source of
   repeatability loss.** You can make adjustments repeatable to a degree, with locating pins and hard
   stops rather than clamped slots, but you cannot make an adjustable interface as repeatable as a solid
   one. That is not a failure of imagination; it is what an interface is.
   I ran through the five questions on this case once and none of them worked. **Separate the functions?**
   The adjustment *is* the function. **Local geometry change?** It reduces the loss, it does not remove
   it. **Revisit an earlier choice?** The earlier choice was to serve a part family, and that came from
   the customer's volume mix. **Different physical principle?** Kinematic couplings help, at a cost.
   **Different times?** No — the adjustment must persist through the cut.
   So it is real, and the decision is then economic rather than technical. **Two dedicated fixtures each
   at their best repeatability, against one adjustable fixture at a worse repeatability.** The question
   becomes whether the worse repeatability still passes the tolerance allocation. If it does, the
   adjustable fixture usually wins on cost, floor space and setup. If it does not, there is no decision
   to make — you need two fixtures, or you need to renegotiate the tolerance with evidence.
   What I have learned to watch for is the middle case, where the adjustable fixture *almost* passes.
   **That is where the temptation to argue the allocation down is strongest and where it does the most
   damage**, because repeatability is the one error you cannot correct later. An accuracy problem can be
   offset out; a repeatability problem is a permanent tax on every part. So my rule on this particular
   trade is that **flexibility may be bought with accuracy but never with repeatability** — if the
   adjustable concept costs repeatability rather than bias, I treat it as failing a gate rather than
   losing a trade.
2. *"CS-01 was a commercial failure, but the customer bought it and used it for three years. What is the
   actual harm?"*
   **Answer:** That is the right challenge, because the harm is not obvious and it is mostly not on the
   invoice.
   The direct harm is **₹1.09 million of the customer's capital that bought ₹151,000 of value.** That
   money had alternative uses — it was roughly the cost of a second-hand machine tool, or thirty
   ₹41,000 improvements across the shop, any of which would have returned more. **Capital spent badly is
   not neutral; it is the return on the alternative, foregone.**
   The second harm is subtler and larger. **The customer now has a data point that says fixtures cost
   over a million rupees.** The next time a genuine fixture case arises — a bottleneck machine, a part
   that really cannot be held in soft jaws — the internal conversation starts from that number, and the
   good project gets refused. **A bad investment does not just waste its own money; it poisons the
   category.** I have seen shops where "we tried a proper fixture once" is a settled organisational
   belief that blocks work with three-month paybacks.
   The third harm is to the supplier, and it is delayed. It works fine until someone in the customer's
   organisation does the arithmetic — and eventually someone does, usually a new manager reviewing
   capital spend. At that point the supplier is not remembered as the one who built an excellent fixture.
   **They are remembered as the one who sold a million-rupee solution to a forty-thousand-rupee
   problem**, and the relationship that produced repeat business quietly stops producing it.
   The fourth harm is internal to the design team, and it is the one I care most about. **A team that is
   rewarded for technical excellence and never confronted with the commercial outcome learns that
   objectives thirteen and fourteen are somebody else's problem.** That team will do this again. The
   fixture was genuinely beautiful engineering, and the engineers who built it presumably felt good about
   it — which is exactly why the feedback loop has to be closed deliberately, because nothing in the
   project itself will close it.
   So the honest answer to "what is the actual harm" is: **a million rupees of misallocated capital, a
   category poisoned for future good projects, a relationship eroded on a delay, and a team that has
   learned the wrong lesson.** None of those appear in the commissioning report, which showed twelve out
   of twelve.

### 29. Summary
Every fixture design is a conflict resolution exercise, and the fourteen objectives form a hierarchy
rather than a flat list: Tier 1 absolute gates of safety, statutory compliance and determinacy, which are
never traded; Tier 2 functional gates of location, support, clamping, repeatability and accuracy, which
must be met though the means are open; Tier 3 performance objectives, which are genuinely optimised
against each other; and Tier 4, cost, applied to the whole concept so that failing it changes the concept
rather than shaving rigidity to afford a clamp. Weighted scoring across tiers is invalid because it lets a
good average conceal an unacceptable failure — gates cannot be compensated, which is what makes them
gates. Before accepting any trade-off, five questions test whether it is false: can the functions be
separated, can geometry change locally, was it caused by an earlier choice, is a different physical
principle available, can the requirements be met at different times. Ten of the fourteen standard
conflicts dissolve under one of these, and the characteristic novice error is to split the difference and
be mediocre on both objectives instead of good on both. In the worked example the best-performing concept
was eliminated at Tier 1 for over-constraint without its deflection ever being weighed, because an
over-constrained design's predicted stiffness is fiction — and the false-conflict test then recovered
94.7% of its performance determinately and ₹72,000 cheaper. The same capacity arithmetic meant the
opposite of what it meant in L2.2.5, being worth ₹560,000 a year at 88% utilisation and nearly nothing at
36.7%. And CS-01 showed a fixture scoring twelve out of twelve technically, costing ₹1,240,000 against a
₹41,000 alternative nobody priced, with a real payback of 24.6 years against a three-year programme, net
loss ₹1,088,800 — not one failure technical, and the underlying cause that nobody owned objectives 13 and
14.

### 30. Key takeaways
- **The fourteen objectives are a hierarchy, not a list**: gates, functional requirements, performance,
  viability.
- **Gates cannot be compensated.** Weighted scoring is valid only within Tier 3, among survivors.
- **Ten of fourteen standard conflicts are false** — test before you trade.
- **Five questions**: separate the functions, change geometry locally, revisit the earlier choice, change
  the physical principle, separate in time.
- **The novice error is splitting the difference** — mediocre on both instead of good on both.
- **An over-constrained design's predicted stiffness is fiction.** Eliminate it before comparing.
- **The false-conflict resolution recovered 94.7% of the eliminated concept's benefit**, determinately
  and cheaper.
- **Record what was sacrificed and by how much**, or the next engineer spends the allocation again.
- **Prioritise real trades by consequence**: scrap, lateness of discovery, difficulty of later fix,
  per-cycle operator impact.
- **Flexibility may be bought with accuracy but never with repeatability.**
- **Gate before detailing** — sunk effort argues for a doomed concept.
- **The capacity position converts hours into money** and sits outside the fixture calculation.
- **Investigate the brief; price the cheapest passing option.**
- **CS-01: twelve out of twelve technically, ₹1,088,800 net loss.** A fixture can satisfy every technical
  objective and still fail completely.
- **Assign ownership of objectives 13 and 14** — technical teams do not own them by default.

---

## MODULE 2.2 — CLOSING

### The complete objectives matrix

The fourteen objectives, with their tier, the lesson that established them, the governing question, and
the standard failure mode:

| # | Objective | Tier | Lesson | Governing question | Standard failure |
|---|---|---|---|---|---|
| 1 | **Location** | 2 (determinacy is 1) | L2.2.1 | Where is the part? | Over-constraint |
| 2 | **Support** | 2 | L2.2.1 | Does it deflect under load? | Support turned into a locator |
| 3 | **Clamping** | 2 | L2.2.1 | Does it stay there? | Force used to fix a location problem |
| 4 | **Rigidity** | 3 | L2.2.2 | Does the fixture itself move? | Softest element ignored |
| 5 | **Repeatability** | 2 | L2.2.2 | Same place every time? | Assumed, never measured |
| 6 | **Accuracy** | 2 | L2.2.2 | The *right* place? | Confused with repeatability |
| 7 | **Accessibility** | 3 | L2.2.3 | Can the operator load it? | Designed for the CAD view |
| 8 | **Tool access** | 3 | L2.2.3 | Can the tool reach? | Programmed path ≠ swept path |
| 9 | **Chip evacuation** | 3 | L2.2.3 | Where do the chips go? | Volume never calculated |
| 10 | **Coolant access** | 3 | L2.2.3 | Does coolant reach the cut? | Pooling designed in |
| 11 | **Productivity** | 3 | L2.2.5 | How many good parts per hour? | Only cutting time considered |
| 12 | **Safety** | **1** | L2.2.4 | Can it hurt anybody? | Traded against cycle time |
| 13 | **Ergonomics** | 3 (1 if injury risk) | L2.2.4 | Can it be done all shift? | Judged from a single cycle |
| 14 | **Cost reduction** | 4 | L2.2.5 | Should it exist at all? | Nobody owns it |

```
   ┌──────────────────────────────────────────────┐
   │ READ THE LAST COLUMN AS A REVIEW CHECKLIST.  │
   │                                              │
   │ THESE ARE NOT EXOTIC FAILURES. EACH ONE IS   │
   │ THE MOST COMMON WAY THAT OBJECTIVE IS MISSED,│
   │ AND EACH IS VISIBLE AT DESIGN REVIEW IF      │
   │ SOMEBODY LOOKS FOR IT.                       │
   └──────────────────────────────────────────────┘
```

### The hierarchy, restated

```
   TIER 1  GATES — never traded, never compensated
           SAFETY · STATUTE · DETERMINACY

   TIER 2  FUNCTIONAL GATES — must be met, means open
           LOCATION · SUPPORT · CLAMPING
           REPEATABILITY · ACCURACY

   TIER 3  PERFORMANCE — optimised, traded
           RIGIDITY · ACCESSIBILITY · TOOL ACCESS
           CHIPS · COOLANT · ERGONOMICS ·
           PRODUCTIVITY

   TIER 4  VIABILITY — applied to the whole concept
           COST
```

### The six conflicts and their resolutions

| Conflict | Type | Resolution | Evidence from this module |
|---|---|---|---|
| Support vs over-constraint | False | Adjustable support | 4th pad cost 336 N and 0.080 mm; 3+1 adj gave 39.7% of 3-pad deflection |
| Rigidity vs accessibility | False | Relieve locally, keep the section | Relieved pads, 12.5× less chip exposure |
| Clamp force vs distortion | Real (L1.3.5) | Change the scheme | Window empty: 1,354 N needed, 1,250 N max |
| Accuracy vs cost | False | Gate first, then economics | L2.1.4: vise eliminated at 257% before costing |
| Productivity vs safety | **Gate** | No trade | 37,019 J accumulator; spring-applied clamping |
| Access vs location integrity | False | Relieved pads | Clamp 38→15 mm gave 13.0→38.0 mm clearance |

### Governing principles — Module 2.2

Continuing from 96 at the end of Module 2.1:

| # | Principle |
|---|---|
| **97** | Location, support and clamping are three separate duties; a component doing two of them does neither well. |
| **98** | Over-constraint does not add stiffness — it adds an unpredictable, unrepeatable transfer of error into the part. |
| **99** | A support that determines part position has become a locator, whatever it is called on the drawing. |
| **100** | Set an adjustable support only with the part already seated; setting it first converts it into a locator. |
| **101** | The statics test for a determinate scheme is simple: count the contact points per plane. Three, two, one. |
| **102** | Repeatability cannot be adjusted out; accuracy can. Spend the design effort on repeatability. |
| **103** | A fixture with large bias and small scatter beats one with small bias and large scatter, after correction — and loses before it. |
| **104** | The correctable fraction of an error, not its magnitude, determines how much it matters. |
| **105** | Rigidity is a system property; the softest element in the loop governs, and it is rarely the one that was calculated. |
| **106** | Accessibility is judged from the operator's position, not from the CAD view. |
| **107** | Calculate the chip volume. Bulked swarf occupies four to twenty times the solid volume removed. |
| **108** | Chips that cannot fall will be pushed onto a locator by the next part. |
| **109** | Coolant that reaches the cut and cannot leave is worse than coolant that never arrived. |
| **110** | Safety is a gate, not an objective. There is no exchange rate between injury and cycle time. |
| **111** | Design out before guarding; guard before procedure; procedure is the weakest control and the first to be abandoned. |
| **112** | Stored energy does not disappear when the power does. A charged accumulator is a loaded spring. |
| **113** | Prefer spring-applied and pressure-released, so that loss of power is a safe state. |
| **114** | Ergonomics is judged over a shift, not over a cycle. Multiply everything by the number of parts. |
| **115** | An irritation repeated a thousand times a shift becomes a defeated interlock. |
| **116** | The fixture designer controls every element of the cycle except the cutting time — often nearly half of it. |
| **117** | Compare against the next cheapest option that passes the technical gates, not against nothing. |
| **118** | Payback, break-even and capacity are three different tests, and the capacity test frequently inverts the answer. |
| **119** | On an under-utilised machine, hours released are not a cash saving; most of a machine rate is fixed cost. |
| **120** | Present time savings as hours released, with the monetary value made explicitly conditional. |
| **121** | Include maintenance in the cost model; it is routinely omitted and it systematically favours simpler designs. |
| **122** | The objectives are a hierarchy, not a list. Gates cannot be compensated — that is what makes them gates. |
| **123** | Test for a false conflict before accepting a trade-off; most apparent trade-offs dissolve under a better design. |
| **124** | Splitting the difference produces a design that is mediocre on both objectives instead of good on both. |
| **125** | An over-constrained design's predicted stiffness is fiction; eliminate it before comparing its numbers. |
| **126** | When a trade is real, decide it explicitly and record what was sacrificed and by how much. |
| **127** | Prioritise real trades by consequence — scrap, lateness of discovery, difficulty of later fix, per-cycle operator impact. |
| **128** | Flexibility may be bought with accuracy, but never with repeatability. |
| **129** | Investigate the brief. It is a hypothesis, not a fact. |
| **130** | A fixture can satisfy every technical objective and still be a complete failure. |
| **131** | Nobody owns productivity and cost unless somebody is told to; technical teams optimise the objectives they find interesting. |
| **132** | A supplier sells what is asked for; an engineer determines what is needed. |

**Principles 97–132 belong to Module 2.2. The next block begins at 133.**

### Numerical results established in Module 2.2

| Result | Value | Lesson |
|---|---|---|
| Cost of a fourth support pad in clamp force | 336 N = 15.3% of the total | L2.2.1 |
| Error transferred into the part by over-constraint | 0.080 mm = **4× the flatness allocation** | L2.2.1 |
| Three pads alone, deflection | 0.0636 mm = 3.18× the allowance | L2.2.1 |
| Three pads + one adjustable support | 0.00795 mm = 39.7% of allowance | L2.2.1 |
| Fixture A bias / range | 0.0605 / 0.005 mm | L2.2.2 |
| Fixture B bias / range | 0.0129 / 0.037 mm | L2.2.2 |
| **Before correction, B wins** | 1.31× | L2.2.2 |
| **After correction, A wins** | **7.40×** | L2.2.2 |
| Stiffness A vs B | 466,667 vs 147,368 N/mm = 3.167× | L2.2.2 |
| Correctable fraction A vs B | 92.4% vs 25.9% | L2.2.2 |
| Solid volume removed → bulked swarf at B = 6 | 680 cm³ → **4,082 cm³** | L2.2.3 |
| Swarf against available space | **4.54× the 900 cm³ available** | L2.2.3 |
| Relieved pads, chip exposure reduction | 12.5× | L2.2.3 |
| Coolant retained in an undrained recess | 324 cm³ | L2.2.3 |
| Clamp height 38 → 15 mm, tool clearance | 13.0 → 38.0 mm | L2.2.3 |
| Clamp force per station | 9,800 N | L2.2.4 |
| Accumulator stored energy | **37,019 J = a 1 kg mass falling 3,774 m** | L2.2.4 |
| Ejection velocity, 31 kg part at 8,000 rev/min | Pressure-applied unacceptable → spring-applied | L2.2.4 |
| Manual clamping operations per shift | 4 × 180 × 2 = **1,440** | L2.2.4 |
| Cycle fixture-controlled fraction | 110 s of 228 s = **48.25%** | L2.2.5 |
| Proposed cycle saving | 56 s = 24.56% | L2.2.5 |
| Annual value, fixture vs soft jaws | ₹615,960 vs ₹88,020 = 7.00× | L2.2.5 |
| **Machine utilisation — no constraint** | **36.7%, 2,400+ spare hours** | L2.2.5 |
| TCO fixture vs jaws over 4 years | ₹369,200 vs ₹44,800 = 8.24× | L2.2.5 |
| Maintenance as % of capital, fixture | 32.0% | L2.2.5 |
| Payback fixture vs jaws | 6.04 vs 3.82 months | L2.2.5 |
| Break-even, fixture vs jaws | 11,750 parts ≈ 6.4 months | L2.2.5 |
| Cheap option's capture | **14.3% of benefit for 9.0% of capital** | L2.2.5 |
| Concept B eliminated on determinacy, δ | 0.009 mm never compared | L2.2.6 |
| Concept C's share of B's deflection reduction | **94.7%, determinately, ₹72,000 cheaper** | L2.2.6 |
| Concept C repeatability, before / after fix | ±0.010 (40% of tol) → ±0.006 (24%) | L2.2.6 |
| Utilisation 88% → hours released | 320 h/yr = ₹560,000, **u ≈ 1** | L2.2.6 |
| Payback, Concept C | 5.74 months; 5-year net ₹2,424,800 | L2.2.6 |
| **CS-01 fixture cost vs the alternative** | **₹1,240,000 vs ₹41,000** | L2.2.6 |
| CS-01 real annual benefit (scrap only) | ₹50,400 | L2.2.6 |
| **CS-01 real payback vs programme** | **24.6 years vs 3 years** | L2.2.6 |
| **CS-01 net loss** | **₹1,088,800** | L2.2.6 |
| CS-01 break-even vs soft jaws | 23.8 years | L2.2.6 |

### Formulae established in Module 2.2

```
DETERMINACY
  Contact points per plane: 3 - 2 - 1
  Total constraints = 6 for a rigid body

METROLOGY
  Total error = bias + scatter
  Correctable fraction = bias/(bias + range)
  k = F/δ                    stiffness
  1/k_total = Σ 1/kᵢ         series stiffness

CHIPS
  V_bulk = B · Q · t
  B = 2-4 short, 4-8 medium, 8-20 long stringy

STORED ENERGY
  E ≈ p · V · ln(p/p_atm)    isothermal expansion
  Equivalent height h = E/(m·g)

PRODUCTIVITY
  t_cycle = t_load + t_clamp + t_cut
            + t_unclamp + t_unload + t_clean
  Utilisation = t_cut/t_cycle
  Hours = N · t_cycle/60

ECONOMICS
  Payback  = C/(annual saving/12)
  N_be     = ΔC/(Δt × rate)
  TCO      = capital + Σmaintenance − residual
  Benefit_real = scrap saving
                 + (productivity saving × u)
    u = fraction of freed capacity actually used
```

### Reference data confirmed or added in Module 2.2

| Quantity | Value | Tag |
|---|---|---|
| Chip bulking factor | 2–4 short, 4–8 medium, **8–20 long stringy** | `[GUIDE]` |
| Chip slope, dry | 15–30° | `[GUIDE]` |
| Liquid drainage slope | 2–5° | `[GUIDE]` |
| Manual handling guidance | ~20–25 kg indicative — **the jurisdiction's method governs** | `[STD]` |
| Fixture tolerance allocation | 10–20% of part tolerance (a convention, not a standard) | `[GUIDE]` |
| Fixture maintenance, annual | Commonly estimated as a % of capital; **confirm from customer history** | `[PRACTICE]` |
| Payback acceptance threshold | 12–24 months commonly cited; **confirm the customer's criterion** | `[PRACTICE]` |
| Repeatability, well-designed fixture | ±0.01–0.02 mm | `[GUIDE]` |

### Self-check — Module 2.2

Answer without referring back. Any item you cannot answer identifies a lesson to re-read.

1. Name the fourteen objectives and give each its tier.
2. Why can a gate not be compensated by good performance elsewhere?
3. What does a fourth support point on a plane actually add?
4. State the statics test for a determinate location scheme.
5. When does an adjustable support become a locator?
6. Why can repeatability not be adjusted out, when accuracy can?
7. Fixture A has bias 0.06 mm and range 0.005 mm; Fixture B has bias 0.013 mm and range 0.037 mm. Which
   is better, and under what condition?
8. What is the correctable fraction, and why does it matter more than the error's size?
9. Which element governs the rigidity of a loop?
10. How much space does 680 cm³ of solid material occupy after being cut into long stringy chips?
11. Why is coolant that cannot drain worse than coolant that never arrived?
12. State the hierarchy of control in order.
13. Why is spring-applied, pressure-released clamping preferred?
14. A charged accumulator stores 37,019 J. Express that as a falling mass.
15. Why is ergonomics judged over a shift rather than a cycle?
16. What fraction of a typical cycle does the fixture designer control?
17. Name the three economic tests and say which is most often skipped.
18. Why is a time saving on a 36.7%-utilised machine not a cash saving?
19. What does the factor u represent, and who must confirm it?
20. State the five questions of the false-conflict test.
21. Why is an over-constrained concept's predicted stiffness excluded from comparison?
22. What may flexibility be bought with, and what may it never be bought with?
23. In CS-01, what was the cost of the fixture and of the alternative nobody priced?
24. What was CS-01's real payback, against what programme length?
25. Name the five errors that produced CS-01, and state how many were technical.

### Exit criterion for Module 2.2

You may proceed when you can, for an unfamiliar part and operation:
- **list all fourteen objectives and assign each its tier**
- **identify which objectives govern this particular job**
- **apply the Tier 1 and Tier 2 gates to eliminate concepts before detailing**
- **test every apparent conflict with the five questions**
- **quantify what is sacrificed and show it sits within its allocation**
- **perform the capacity check before counting the money**
- **price the cheapest option that passes the gates**
- **and recommend not building a fixture when that is the right answer**

---

# LEVEL 2 ASSESSMENT

**Coverage:** Modules 2.1 and 2.2 — all eleven lessons.
**Two components:** Quiz Q2 (30 items, 100 marks) and a comparison essay (100 marks).
**Both must be passed.** The overall grade is the lower of the two bands.

| Band | Marks | Meaning |
|---|---|---|
| **MASTER** | 90–100 | Ready to proceed and to teach the material |
| **ADVANCED** | 80–89 | Ready to proceed |
| **COMPETENT** | 70–79 | Proceed, revisit the weak module |
| **DEVELOPING** | 60–69 | Re-study the weak module and re-take |
| **REPEAT** | <60 | Repeat Level 2 |

```
   ┌──────────────────────────────────────────────┐
   │ AUTO-FAIL ITEMS                              │
   │                                              │
   │ Certain answers indicate a misconception      │
   │ dangerous enough that the assessment is      │
   │ failed regardless of total marks. They are   │
   │ listed after the quiz.                       │
   │                                              │
   │ THE NINE LEVEL 2 AUTO-FAILS ADD TO THE       │
   │ FIFTEEN FROM LEVELS 0 AND 1. ALL TWENTY-FOUR │
   │ REMAIN LIVE FOR EVERY LATER ASSESSMENT.      │
   └──────────────────────────────────────────────┘
```

---

## QUIZ Q2 — 30 ITEMS, 100 MARKS

### Section A — Definitions and boundaries (Module 2.1), 8 items, 24 marks

**Q2.1** (3 marks) State the three duties of a fixture and explain why a single component performing two
of them is a design weakness.

**Q2.2** (3 marks) A jig and a fixture both hold a part. State the single distinguishing feature, and
explain why that feature makes the jig's accuracy independent of the machine's positioning accuracy.

**Q2.3** (3 marks) In the L2.1.2 comparison, the jig achieved ±0.075 mm, the CNC achieved ±0.058 mm on a
flat face and ±0.148 mm on a 12° sloping face. Explain why the sloping face degraded the CNC result by so
much more than it degraded the jig result.

**Q2.4** (3 marks) A plain vise was eliminated from a comparison at 257% of the tolerance budget before
its cost was considered. Explain the principle this illustrates.

**Q2.5** (3 marks) The break-even of a fixture against soft jaws was 10,400 parts, approximately 21
months. Explain why the same annual volume produced opposite recommendations for a one-year and a
three-year programme.

**Q2.6** (3 marks) State the difference in tolerance philosophy between a machining fixture and a gauge,
and explain what "absorbed inward" means.

**Q2.7** (3 marks) A gauge with tolerance applied outward shipped 196 bad parts a year after a 0.010 mm
drift. Explain the mechanism.

**Q2.8** (3 marks) In the SPM comparison, the fixture route required 3,750 machine hours against 360
available. Explain how the cheaper option turned out to cost ₹14.31 M against the SPM's ₹4.875 M.

### Section B — The primary and metrological triads (L2.2.1, L2.2.2), 7 items, 24 marks

**Q2.9** (3 marks) State the statics test for a determinate location scheme, and say what a fourth contact
point on a plane actually contributes.

**Q2.10** (4 marks) In the worked example, a fourth pad consumed 336 N of clamp force (15.3%) and
transferred 0.080 mm into the part, which was 4× the flatness allocation. Explain both effects
physically.

**Q2.11** (3 marks) Three pads alone gave a deflection of 0.0636 mm, which was 3.18× the allowance; adding
one adjustable support gave 0.00795 mm. Explain why this is not a contradiction of your answer to Q2.9.

**Q2.12** (3 marks) State the condition under which an adjustable support becomes a locator, and the
practical test for whether it has.

**Q2.13** (4 marks) Fixture A had bias 0.0605 mm and range 0.005 mm; Fixture B had bias 0.0129 mm and
range 0.037 mm. State which is better before correction and by how much, which is better after correction
and by how much, and explain the reason for the reversal.

**Q2.14** (4 marks) Define the correctable fraction. Calculate it for both fixtures in Q2.13 and explain
why it predicts the reversal.

**Q2.15** (3 marks) Explain why rigidity is a system property, and name what governs it.

### Section C — The process and human objectives (L2.2.3, L2.2.4), 7 items, 24 marks

**Q2.16** (4 marks) 680 cm³ of solid material was removed. Calculate the bulked chip volume at a bulking
factor of 6, compare it with 900 cm³ of available space, and state the design consequence.

**Q2.17** (3 marks) Explain why chips that cannot fall are worse than chips in the way.

**Q2.18** (3 marks) A recess retained 324 cm³ of coolant. State three consequences and the design fix.

**Q2.19** (3 marks) Reducing a clamp's height from 38 mm to 15 mm changed the tool clearance from 13.0 mm
to 38.0 mm. Explain why the change in clearance is larger than the change in clamp height.

**Q2.20** (4 marks) State the hierarchy of control in order, and explain why procedure is the weakest.

**Q2.21** (4 marks) An accumulator stored 37,019 J, equivalent to a 1 kg mass falling 3,774 m. Explain
what this energy does when the power is isolated but the accumulator is not discharged, and state the
design requirement that follows.

**Q2.22** (3 marks) A manual clamping arrangement required 1,440 operations per shift. Explain why this is
an engineering finding and not merely an inconvenience.

### Section D — Business objectives and conflict resolution (L2.2.5, L2.2.6), 8 items, 28 marks

**Q2.23** (3 marks) State which elements of a machining cycle the fixture designer controls, and what
fraction of the cycle they represented in the worked example.

**Q2.24** (4 marks) Name the three economic tests, state what each compares against, and identify which is
most often skipped.

**Q2.25** (4 marks) A fixture released 342 hours a year, worth ₹615,960 at the machine rate, on a machine
running at 36.7% utilisation. Explain why this may not be a cash saving, and state how you would present
it instead.

**Q2.26** (3 marks) Soft jaws captured 14.3% of the available benefit for 9.0% of the capital, with a
faster payback. State the general pattern this illustrates and its consequence for a fixture proposal.

**Q2.27** (4 marks) State the four tiers of the objectives hierarchy with their members, and explain why
weighted scoring across tiers is invalid.

**Q2.28** (4 marks) State the five questions of the false-conflict test, and give one worked resolution
from Module 2.2 for each of any three of them.

**Q2.29** (3 marks) Concept B had the best deflection figure (0.009 mm against 0.014 mm) and was
eliminated without that figure being compared. Explain why.

**Q2.30** (3 marks) In CS-01 the fixture scored well on all twelve technical objectives and produced a net
loss of ₹1,088,800. State the five errors that caused this and how many of them were technical.

---

## MARK SCHEME — KEY POINTS

`[PRACTICE]` One mark per substantive point unless stated; a correct conclusion without reasoning scores
at most half.

| Q | Key points required |
|---|---|
| 2.1 | Locate, support, clamp · a component doing two compromises both · e.g. a clamp used as a locator (auto-fail territory) |
| 2.2 | The jig guides the tool · position comes from the bush, not the machine axes · so machine positioning error is bypassed |
| 2.3 | On a slope the tool deflects along the surface · wander was 15× the machine's positioning error · the jig's bush constrains the tool laterally |
| 2.4 | Gates before economics · a cheaper option that fails the requirement is not an option · L2.1.4 |
| 2.5 | Break-even is a *volume*, and the programme determines whether that volume is reached · annual volume alone cannot answer it |
| 2.6 | Fixture tolerance 10–20% of part tolerance; gauge 5–10% · absorbed inward = the gauge's uncertainty shrinks the accepted zone, so it rejects good parts rather than accepting bad ones |
| 2.7 | Outward tolerancing widens the accepted zone · drift then pushes the boundary past the part limit · bad parts pass |
| 2.8 | A fixture needs a machine · 10.42× shortfall means additional machine tools · the fixture route was incomplete, not cheap |
| 2.9 | 3-2-1, six constraints · a fourth point adds no constraint, only an unpredictable error transfer |
| 2.10 | Force: the pad must be pulled into contact, consuming clamp capacity · error: the pad's height difference is forced into the part, and it is not repeatable |
| 2.11 | The 4th point was rigid and located; the adjustable support is set after seating, so it supports without constraining · support ≠ location |
| 2.12 | When it determines part position — i.e. if set before seating, or wound up to level the part · test: indicator on the part while setting; if the part moves, it is a locator |
| 2.13 | Before: B by 1.31× · after: A by 7.40× · reversal because bias is correctable and scatter is not |
| 2.14 | bias/(bias+range) · A 92.4%, B 25.9% · the fraction that correction removes |
| 2.15 | Series stiffnesses, 1/k_total = Σ1/kᵢ · the softest element governs · and it is rarely the one calculated |
| 2.16 | 680 × 6 = 4,082 cm³ · 4,082/900 = 4.54× · the space is inadequate; chips will pack, so design evacuation, not storage |
| 2.17 | A chip in the way is visible and gets removed · a chip that cannot fall is pushed onto a locator by the next part, invisibly |
| 2.18 | Corrosion, coolant degradation, part contamination, weight, spillage on unload · fix: drain at 2–5° |
| 2.19 | Clearance is measured to the tool *and holder* envelope · the holder is wider than the tool, so the governing obstruction changed |
| 2.20 | Eliminate/design out · substitute · engineering control/guard · administrative/procedure · PPE · procedure depends on a person doing something every time |
| 2.21 | The energy remains available; clamps can release or actuate · requirement: discharge to a safe state, and prefer spring-applied pressure-released |
| 2.22 | 1,440 repetitions is a musculoskeletal exposure and a reliability problem · it predicts defeated interlocks and inconsistent clamping |
| 2.23 | Load, clamp, unclamp, unload, clean — everything but cutting · 110 s of 228 s = 48.25% |
| 2.24 | Payback vs nothing · break-even vs the next cheapest passing option · capacity, hours needed vs available · capacity most often skipped |
| 2.25 | Most of a machine rate is fixed cost · idle time made more idle · present as "342 hours released, worth ₹615,960 *if* you have work for them" |
| 2.26 | The cheap option often captures most of the benefit · the expensive option's *marginal* benefit must be justified separately |
| 2.27 | T1 safety/statute/determinacy · T2 location/support/clamping/repeatability/accuracy · T3 rigidity/access/tool access/chips/coolant/ergonomics/productivity · T4 cost · invalid because scoring allows compensation and gates cannot be compensated |
| 2.28 | Separate the functions · change geometry locally · revisit the earlier choice · different physical principle · separate in time · examples: adjustable support, relieved pads, L1.3.5 scheme change, spring-applied clamping, rough hard/finish light |
| 2.29 | Five support points on one plane · the 0.009 mm assumed simultaneous contact, which is impossible · an over-constrained design's predicted stiffness is fiction |
| 2.30 | Brief accepted as the problem · no alternative priced · no capacity check at 44% utilisation · known 3-year programme ignored · nobody owned objectives 13 and 14 · **none were technical** |

---

## AUTO-FAIL ITEMS — LEVEL 2

Nine new items. **These add to the fifteen from Levels 0 and 1, making twenty-four live auto-fails.**

| # | Answer that fails the assessment |
|---|---|
| **16** | Stating that a fourth support point on a plane increases stiffness |
| **17** | Treating repeatability as correctable by an offset |
| **18** | Selecting a fixture on bias alone, without considering scatter |
| **19** | Trading safety against cycle time, productivity or cost |
| **20** | Relying on procedure where a design change is available |
| **21** | Counting a productivity saving at the machine rate without a capacity check |
| **22** | Comparing a fixture against doing nothing rather than against the cheapest passing option |
| **23** | Using a weighted score to justify a concept that fails a Tier 1 or Tier 2 gate |
| **24** | Comparing an over-constrained concept's predicted stiffness against a determinate one's |

```
   ┌──────────────────────────────────────────────┐
   │ WHY THESE NINE.                              │
   │                                              │
   │ EACH ONE PRODUCES A DESIGN THAT LOOKS        │
   │ CORRECT ON PAPER AND FAILS IN SERVICE, OR A  │
   │ BUSINESS CASE THAT LOOKS SOUND AND DESTROYS  │
   │ MONEY.                                       │
   │                                              │
   │ THEY ARE NOT ARITHMETIC SLIPS. THEY ARE      │
   │ MISCONCEPTIONS THAT SURVIVE UNTIL SOMETHING  │
   │ EXPENSIVE HAPPENS.                           │
   └──────────────────────────────────────────────┘
```

**The twenty-four live auto-fails, consolidated:**

| Level | # | Item |
|---|---|---|
| L0 | 1 | Using a clamp as a locator |
| L0 | 2 | Relying on friction where a positive stop is available |
| L0 | 3 | Specifying through-hardening for steel below 0.30% carbon |
| L0 | 4 | Presenting a calculation without units |
| L0 | 5 | Claiming a stronger steel reduces deflection |
| L0 | 6 | Presenting a schematic as a manufacturing drawing |
| L1 | 7 | Sizing a rotary fixture's clamping for one orientation only |
| L1 | 8 | Omitting the support ledge on an HMC fixture |
| L1 | 9 | Checking clearance against the programmed path rather than the swept envelope |
| L1 | 10 | Leaving the setting-feature-to-locator dimension uncontrolled |
| L1 | 11 | Leaving unhardened a surface the tool touches |
| L1 | 12 | Designing offsets that cannot be set without a part loaded |
| L1 | 13 | Sizing a drilling fixture on thrust while ignoring torque |
| L1 | 14 | Providing single-direction anti-rotation for tapping |
| L1 | 15 | Adding clamp force to correct finishing distortion |
| L2 | 16 | Claiming a fourth support point on a plane increases stiffness |
| L2 | 17 | Treating repeatability as correctable by an offset |
| L2 | 18 | Selecting on bias alone, ignoring scatter |
| L2 | 19 | Trading safety against cycle time, productivity or cost |
| L2 | 20 | Relying on procedure where a design change is available |
| L2 | 21 | Counting a productivity saving without a capacity check |
| L2 | 22 | Comparing against nothing rather than the cheapest passing option |
| L2 | 23 | Using a weighted score to pass a concept that fails a gate |
| L2 | 24 | Comparing an over-constrained concept's predicted stiffness |

---

## COMPARISON ESSAY — 100 MARKS

### The brief

```
  ════════════════════════════════════════════════
  ESSAY BRIEF — WORKHOLDING SELECTION
  ════════════════════════════════════════════════

  THE PART                                     [PROJ]

    Cast iron valve body, EN-GJL-250
    Mass 4.8 kg
    Overall 165 × 120 × 95 mm
    As-cast on all faces except those machined

  ┌─────────────────────────────────────────────┐
  │        ASCII SCHEMATIC — NOT TO SCALE       │
  │   FOR TRAINING ONLY — NOT FOR MANUFACTURE   │
  │                                             │
  │        ╔═══════════════════════╗            │
  │        ║      TOP FACE  A      ║  ← face    │
  │        ║   ○ Ø52H7 BORE        ║    milled  │
  │        ║                       ║            │
  │        ║  •  •   •   •  •  •   ║  ← 6 × M10 │
  │        ╚═══════════════════════╝    tapped  │
  │         ║                     ║             │
  │         ║   SIDE (as cast)    ║   95 mm     │
  │         ║                     ║             │
  │         ╚═════════════════════╝             │
  │          ▓▓▓ FLANGE, as cast ▓▓▓            │
  │                                             │
  │   ○  Ø28H8 CROSS BORE, one side, ⟂ to A     │
  └─────────────────────────────────────────────┘

  OPERATIONS REQUIRED
    1  Face top face A                 flatness 0.04
    2  Bore Ø52H7                      ⟂ 0.03 to A
    3  Drill and tap 6 × M10 × 20 deep
       true position 0.25 M to A and the Ø52 bore
    4  Cross-bore Ø28H8                position 0.15 M
                                       to A and Ø52
                                       ⟂ 0.05 to Ø52

  STANDARD: ASME Y14.5-2018

  COMMERCIAL DATA                          [EX-ASSUMED]
    Volume            = 6,500/yr
    Programme         = 4 years, firm
    Machine           = VMC 800 × 500,
                        3,400 h/yr available,
                        currently 63 % utilised
    Machine rate      = ₹1,750/h
    Part value at this
      stage           = ₹1,900
    Current method    = plain vise, two setups,
                        cycle 21.5 min total,
                        scrap 2.8 %
    Available budget  = to be justified, not fixed
```

### What you must produce

Write a technical comparison and recommendation, **1,500–2,500 words**, covering all seven sections
below. **Show every calculation in the thirteen-line format.** Where you need data that is not given,
state the assumption and tag it.

**Section 1 — Requirement analysis (15 marks)**
Identify which operations govern the workholding decision and why. State the datum structure implied by
the drawing. Identify which tolerance is tightest relative to what the workholding must deliver, and
calculate the fixture allocation you will work to, stating the convention used and that it is a
convention.

**Section 2 — The candidate options (10 marks)**
Identify at least four candidates, including a plain vise, soft jaws, a dedicated fixture and one other
of your choosing. For each, state in one sentence what it is and how it would hold this part. **You may
not evaluate an option you have not first described.**

**Section 3 — Gate analysis (20 marks)**
Apply the Tier 1 and Tier 2 gates to every candidate. **Eliminate before comparing.** For each
elimination, state the gate failed and the evidence. In particular, address:
- the cross-bore's perpendicularity to the Ø52 bore, and what that implies about setups
- whether any candidate is over-constrained
- the repeatability each candidate can deliver against your allocation from Section 1
State explicitly which candidates survive.

**Section 4 — Conflict identification and resolution (20 marks)**
Identify at least three conflicts between objectives arising in this part. For each:
- classify it as false conflict, gate violation or real trade-off
- apply the five-question test and show your answers
- state the resolution
- where a real trade is made, quantify what is sacrificed and show it sits within its allocation
At minimum you should address the tension between the number of setups and the tolerance stack, and the
tension between support of the as-cast flange and determinacy.

**Section 5 — Economics (20 marks)**
For the surviving candidates:
- **perform the capacity check first** and state what it implies about the value of any time saving
- calculate the annual scrap saving achievable
- calculate the productivity benefit and state the value of u you are using, with justification
- calculate total cost of ownership over the four-year programme, including maintenance
- calculate payback and the break-even against the cheapest surviving candidate
- state which candidate the economics favour, and under what assumption

**Section 6 — Recommendation (10 marks)**
State your recommendation in no more than 250 words. It must:
- name the option
- state what was sacrificed and confirm it sits within allocation
- state the single assumption the recommendation most depends on
- state what you would verify before manufacture

**Section 7 — Reflection (5 marks)**
In no more than 150 words, state the circumstances under which your recommendation would be to build no
fixture at all, and whether those circumstances apply here.

### Essay rubric

| Section | Marks | MASTER (90%+) | COMPETENT (70%) | FAIL |
|---|---|---|---|---|
| **1 Requirement** | 15 | Identifies the cross-bore as governing; correct datum structure; allocation calculated with the convention explicitly labelled as a convention | Governing operation identified; allocation calculated | Treats all operations as equivalent; no allocation |
| **2 Candidates** | 10 | Four or more, each described physically before evaluation; includes a credible non-obvious option | Four described | Options named but not described; evaluated without description |
| **3 Gates** | 20 | Eliminates on gates before any economics; evidence for each; identifies any over-constraint; repeatability compared against the Section 1 allocation | Gates applied; most eliminations justified | Economics used to eliminate; over-constraint missed |
| **4 Conflicts** | 20 | Three or more conflicts, each classified correctly, five-question test shown, sacrifices quantified against allocation | Three conflicts identified and resolved | Conflicts asserted without classification; differences split |
| **5 Economics** | 20 | Capacity check first; u justified from the 63% utilisation; TCO includes maintenance; break-even against the cheapest *surviving* option | All calculations present and correct | No capacity check; productivity valued at full rate; compared against nothing |
| **6 Recommendation** | 10 | Within word limit; sacrifice quantified; the governing assumption named; verification stated | Recommendation clear and supported | No sacrifice stated; no assumption identified |
| **7 Reflection** | 5 | Specific circumstances, correctly applied to this case | General circumstances listed | Absent or generic |

```
   ┌──────────────────────────────────────────────┐
   │ AUTO-FAIL APPLIES TO THE ESSAY.              │
   │                                              │
   │ Any of the twenty-four items appearing in    │
   │ the essay fails it regardless of marks.      │
   │                                              │
   │ THE THREE MOST LIKELY HERE:                  │
   │   #21  productivity counted at the full      │
   │        machine rate at 63 % utilisation      │
   │   #22  comparing only against the current    │
   │        vise, with no cheaper passing option  │
   │        priced                                │
   │   #16  a fourth support point under the      │
   │        as-cast flange, justified as          │
   │        "adding stiffness"                    │
   └──────────────────────────────────────────────┘
```

### Guidance on the essay

`[PRACTICE]` Three things separate a MASTER answer from a COMPETENT one:

```
   1 THE CAPACITY CHECK IS DONE FIRST AND ITS
     IMPLICATION IS CARRIED THROUGH.
     At 63 % utilisation, u is neither 0 nor 1.
     A COMPETENT answer picks one. A MASTER answer
     reasons about what the spare 1,258 hours are
     for and states u with a justification.

   2 THE AS-CAST FLANGE IS RECOGNISED AS THE
     CENTRAL DIFFICULTY.
     Every operation is referenced to machined
     features, but the FIRST operation must locate
     on as-cast surfaces. That is where the
     determinacy conflict lives, and CS-01's
     casting-variation lesson applies directly.

   3 THE NUMBER OF SETUPS IS TREATED AS A DESIGN
     VARIABLE, NOT A GIVEN.
     The cross-bore is perpendicular to the Ø52
     bore. Whether that is achieved in one setup
     or two changes the tolerance stack, the
     fixture, and the economics — and the essay
     should show that reasoning rather than
     assuming an answer.
```

---

# END OF LEVEL 2

## What Level 2 established

```
   MODULE 2.1 — WHAT A FIXTURE IS
     Formal definition and the three duties
     Fixture vs jig — the tool-guiding boundary
     Fixture vs vise vs chuck — repeatability,
       dedication, cost
     Fixture vs gauge — opposite tolerance
       philosophy, absorbed inward
     Fixture vs tooling vs workholding vs SPM

   MODULE 2.2 — THE FOURTEEN OBJECTIVES
     The primary triad — location, support,
       clamping, and determinacy
     The metrological triad — rigidity,
       repeatability, accuracy
     The process quartet — accessibility, tool
       access, chips, coolant
     The human pair — safety, ergonomics
     The business pair — productivity, cost
     Conflict resolution, the hierarchy of gates,
       and CS-01
```

| Level 2 in numbers | |
|---|---|
| Modules | 2 |
| Lessons | 11 |
| Lesson sections | 330 |
| Exercises | 33 |
| Governing principles | 75–132 (58 principles) |
| Case studies | CS-01 |
| New auto-fail items | 9 (total now 24) |
| Assessment | Quiz Q2, 30 items, 100 marks + comparison essay, 100 marks |

### The single most important thing in Level 2

```
   ┌──────────────────────────────────────────────┐
   │ A FIXTURE CAN SATISFY EVERY TECHNICAL        │
   │ OBJECTIVE AND STILL BE A COMPLETE FAILURE.   │
   │                                              │
   │ CS-01 SCORED TWELVE OUT OF TWELVE AND LOST   │
   │ ₹1,088,800.                                  │
   │                                              │
   │ THE OBJECTIVES ARE A HIERARCHY, NOT A LIST.  │
   │ GATE FIRST. TEST EVERY CONFLICT BEFORE       │
   │ TRADING IT. CHECK CAPACITY BEFORE COUNTING   │
   │ MONEY. PRICE THE CHEAPEST OPTION THAT        │
   │ PASSES.                                      │
   │                                              │
   │ AND BE WILLING TO SAY A FIXTURE IS NOT THE   │
   │ ANSWER.                                      │
   └──────────────────────────────────────────────┘
```

### What comes next

**LEVEL 3 — FIXTURE CLASSIFICATION.** Level 2 defined what a fixture is and what it must achieve. Level 3
maps the kinds that exist: by operation, by machine, by degree of dedication, by actuation, by
construction, and by industry — so that when a requirement arrives, the candidate set is known before the
design begins.

---

**END OF LEVEL 2 — PART 2**
