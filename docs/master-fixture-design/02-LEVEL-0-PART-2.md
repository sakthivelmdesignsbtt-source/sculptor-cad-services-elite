# LEVEL 0 — ENGINEERING FOUNDATION
## PART 2 of 3 · Module 0.3 (Mechanical Engineering Fundamentals) + Module 0.4 (Machining Fundamentals)

**Program:** MASTER INDUSTRIAL FIXTURE DESIGN ENGINEERING — *From Scratch to Production-Ready Professional*
**Level:** 0 of 59 · **Stage:** A (Foundation) · **Lessons in this part:** 8 · **Est. study time:** 7 h
**Prerequisite:** Level 0 Part 1 (L0.1.1–L0.2.5)
**Delivery:** Part 1 ✓ → **Part 2 (this document)** → `NEXT` → Part 3 (Module 0.5 + Level 0 assessment)

---

## ORIENTATION — WHY THIS PART IS THE MOST IMPORTANT IN LEVEL 0

Part 1 taught you to read the situation: the process, the chain, the economics, the drawing.
**Part 2 teaches you the physics you will calculate with for the rest of your career.**

Four things in Module 0.3 reappear in every single fixture calculation you will ever do:

| Concept | Where it returns |
|---|---|
| **Free-body diagram & moments** | Every clamp force calculation (L9), every tipping check, every strap clamp |
| **Stress & factor of safety** | Bolt sizing (L20.2.2), pin shear (L20.2.3), weld strength (L20.2.4) |
| **Friction** | The entire basis of clamp force (L9.3.1) — and the reason over-clamping happens |
| **Deflection** | Fixture rigidity (L10), base plate thickness (L20.3.2), chatter (L10.3) |

Module 0.4 then tells you **what force the process actually applies**, which is the input to all of it.

> **If you master nothing else in Level 0, master the free-body diagram and friction.**
> A fixture engineer who cannot draw an FBD is guessing, and a fixture engineer who does not
> understand friction will over-clamp every part they ever hold.

### Data-integrity tags (unchanged from Part 1)
`[STD]` standard · `[MFR]` manufacturer spec · `[GUIDE]` published guideline ·
`[PRACTICE]` industrial practice · `[EX-ASSUMED]` example-only assumption · `[PROJ]` project-specific

### Units policy
**SI throughout.** Force in newtons (N), length in millimetres (mm), stress in megapascals
(MPa = N/mm²), moment in newton-millimetres (N·mm) or newton-metres (N·m) where stated.
Every worked example includes an explicit unit-conversion line.

---
---

# MODULE 0.3 — MECHANICAL ENGINEERING FUNDAMENTALS
*4 lessons · Est. 3.5 h · Goal: the physics of holding a part still*

---
---

## LESSON L0.3.1 — FORCE, MOMENT AND THE FREE-BODY DIAGRAM

### 1. Lesson title
**L0.3.1 — Force, moment, couple, equilibrium: the free-body diagram as the fixture engineer's core tool**

### 2. Learning objective
By the end of this lesson you will be able to draw a correct free-body diagram of a clamped workpiece,
apply the three equilibrium equations, calculate reaction forces at locators, compute the clamping
force delivered by a strap clamp, and determine whether a part will tip before it slides.

### 3. Prerequisites
L0.1.1–L0.2.5.

### 4. Why the topic matters
Every fixture question reduces to one physical question: **is the part in equilibrium?**

- Will the cutting force push it out of the locators? → force equilibrium
- Will it rotate about a locator edge? → moment equilibrium
- How much clamp force do I actually need? → solve the equilibrium equations
- Where should the clamp go? → wherever equilibrium demands, not wherever it fits

The free-body diagram (FBD) is how you answer all of these. It is not academic — it is the single
most-used practical tool in fixture engineering, and the one beginners skip because it looks like
homework. Engineers who skip it end up sizing clamps by intuition, which is how parts move under
cut and how thin parts get crushed.

### 5. Simple explanation
A **force** is a push or a pull. It has size and direction.

A **moment** is a turning effect. It equals force × perpendicular distance from the pivot. A small
force far from the pivot can produce a bigger turning effect than a big force close to it — that's
how a spanner works, and it's how a strap clamp works.

**Equilibrium** means nothing moves: all the pushes cancel out, and all the turning effects cancel out.

A **free-body diagram** is a sketch of just the part, floating on its own, with every force that acts
on it drawn as an arrow. Once you have that sketch, the arithmetic is easy.

### 6. Engineering explanation

**Force**
A vector: magnitude (N) and direction. Forces acting on a clamped workpiece include:
- **Cutting force** from the tool (the disturbing force)
- **Clamping force** from each clamp (the holding force)
- **Reaction forces** at each locator (the response)
- **Friction forces** at every contact (resisting sliding)
- **Weight** `W = mg` acting at the centre of gravity

**Moment**
```
M = F × d
```
where `d` is the **perpendicular** distance from the pivot to the line of action of the force.
That word *perpendicular* is where most errors occur — it is not the distance to the point of
application, it is the perpendicular distance to the **line of action**.

**Couple**
Two equal, opposite, parallel forces separated by a distance. A couple produces pure rotation with no
net translation. `M_couple = F × d` where d is the separation. Relevant to fixtures because tapping
torque and some milling load cases behave as couples.

**The three equations of planar equilibrium**
For a body in 2D static equilibrium:
```
ΣFx = 0        (horizontal forces balance)
ΣFy = 0        (vertical forces balance)
ΣM  = 0        (moments about ANY point balance)
```
Three equations means you can solve for up to three unknowns. In 3D there are six equations
(ΣFx, ΣFy, ΣFz, ΣMx, ΣMy, ΣMz) — which is exactly the **six degrees of freedom** you will meet at
Level 4. That is not a coincidence: **the 3-2-1 principle is equilibrium theory applied to workholding.**

**How to draw a free-body diagram — the five-step method**
```
1. ISOLATE   Draw ONLY the workpiece. Remove the fixture, the machine, everything.
2. APPLY     Draw every external force as an arrow at its point of application:
             cutting force, clamp forces, locator reactions, friction, weight.
3. LABEL     Give every force a symbol and mark every dimension.
4. CHOOSE    Pick a coordinate system and a moment centre (choose cleverly —
             see the trick below).
5. SOLVE     Write ΣFx = 0, ΣFy = 0, ΣM = 0 and solve.
```

> **The moment-centre trick:** take moments about a point where an *unknown* force acts. That force
> has zero moment arm about that point, so it drops out of the equation, leaving fewer unknowns.
> Choosing the moment centre well can turn three simultaneous equations into one line of arithmetic.

**Sliding vs tipping — the two failure modes**
A clamped part can fail in two independent ways, and you must check both:
- **Sliding:** the disturbing force exceeds available friction → check `ΣF`
- **Tipping:** the overturning moment exceeds the restoring moment → check `ΣM`

**Tipping usually governs when the cutting force acts high above the locating plane.** Beginners check
only sliding, size the clamp, and are surprised when the part rocks.

### 7. Terminology

| Term | Definition | SI unit |
|---|---|---|
| **Force** | A push or pull; a vector quantity | N |
| **Moment / torque** | Turning effect = force × perpendicular distance | N·mm or N·m |
| **Couple** | Two equal, opposite, parallel forces producing pure rotation | N·mm |
| **Resultant** | Single force equivalent to a system of forces | N |
| **Equilibrium** | State where ΣF = 0 and ΣM = 0 | — |
| **Free-body diagram (FBD)** | Sketch of an isolated body with all external forces shown | — |
| **Reaction** | Force exerted by a support on the body | N |
| **Line of action** | The infinite line along which a force acts | — |
| **Moment arm** | Perpendicular distance from moment centre to line of action | mm |
| **Centre of gravity (CG)** | Point where the body's weight acts | — |
| **Fulcrum** | Pivot point of a lever | — |
| **Statically determinate** | Solvable by equilibrium equations alone | — |

### 8. Principle

> **IF YOU CANNOT DRAW THE FREE-BODY DIAGRAM, YOU DO NOT UNDERSTAND THE FIXTURE.**
> Every clamp force, every locator reaction, every tipping check begins with an FBD.
> And always check **both** failure modes: sliding **and** tipping. Tipping usually governs when the
> cutting force acts high above the locating plane.

### 9. Industrial application

**The strap clamp — the most common lever in fixture engineering**

A strap clamp is a lever. The bolt applies force somewhere between a heel support and the workpiece.
Moments about the heel give the clamping force:

```
              F_bolt ↓
                 │
    ┌────────────┼──────────────┐   ← strap
    │            │              │
   ═╧═           │             ═╪═
  HEEL           │           PART
   ▲             │             ▲
   │←──── L1 ────┼──── L2 ────→│
 F_heel                     F_clamp

Moments about the heel:
    F_bolt × L1 = F_clamp × (L1 + L2)
    F_clamp = F_bolt × L1 / (L1 + L2)
```

**The design consequence engineers use daily:**
- Bolt **centred** (L1 = L2) → `F_clamp = F_bolt / 2`
- Bolt **closer to the part** (L1 > L2) → clamp force **increases**
- Bolt **closer to the heel** (L1 < L2) → clamp force **decreases**

This single relationship explains why strap-clamp layout is not arbitrary, and why moving a bolt
30 mm can change your holding force by 40%.

**A second daily application — the tipping check:**
A tall part being side-milled experiences a horizontal cutting force well above the base. Even if
friction is sufficient to prevent sliding, the part may pivot about the downstream locator. The
restoring moment comes from clamp force and weight; the overturning moment comes from the cutting
force × its height. This is computed in §13 below.

### 10. Design rules
- **R1** — Draw an FBD before any clamp calculation. Always. No exceptions.
- **R2** — Include **every** force: cutting, clamping, reactions, friction, weight.
- **R3** — Check **both** sliding and tipping; report whichever is worse.
- **R4** — Take moments about a point where an unknown acts, to eliminate it.
- **R5** — Position clamps to **minimise the overturning moment**, not merely to be convenient.
- **R6** — Direct the clamping force toward a **locator**, so the locator takes the load and the clamp
  only holds (this becomes a formal rule at L8.1.2).
- **R7** — Never rely on the clamp to resist a load a **positive stop** could take instead.
- **R8** — If your FBD needs more than three unknowns in 2D, the system is statically indeterminate —
  you have over-constrained it (Level 4).

### 11. Rules of thumb
- Cutting force acting **above** the locating plane creates a tipping moment that grows linearly with
  height — halving the tool overhang or the part's cut height halves the moment `[GUIDE]`.
- A strap clamp with a centred bolt delivers about **half** the bolt force to the part `[GUIDE]`.
- Weight is usually negligible against cutting forces for small parts, but **dominant** for large
  heavy weldments — always include it and let the arithmetic decide `[PRACTICE]`.
- If the clamp is the only thing resisting the main cutting force, the design is wrong. Add a stop.

### 12. Formulae

**Moment of a force**
```
M = F × d
```

**Planar equilibrium**
```
ΣFx = 0        ΣFy = 0        ΣM = 0
```

**Strap clamp force (lever rule)**
```
F_clamp = F_bolt × L1 / (L1 + L2)
```

**Heel reaction**
```
F_heel = F_bolt − F_clamp
```

**Weight**
```
W = m × g          g = 9.81 m/s²
```

**Tipping (overturning) check**
```
M_overturning = F_cut × h
M_restoring   = (F_clamp × a) + (W × b)

Stability ratio  S = M_restoring / M_overturning
Stable if S ≥ required safety factor
```

| Variable | Meaning | SI unit |
|---|---|---|
| F | Force | N |
| d | Perpendicular distance (moment arm) | mm |
| M | Moment | N·mm |
| L1 | Heel-to-bolt distance | mm |
| L2 | Bolt-to-part distance | mm |
| h | Height of cutting force above the pivot | mm |
| a | Horizontal distance from pivot to clamp | mm |
| b | Horizontal distance from pivot to CG | mm |
| m | Mass | kg |
| g | Gravitational acceleration = 9.81 | m/s² |

### 13. Worked numerical example

**Problem — Part A (strap clamp):** A strap clamp has a heel-to-bolt distance L1 = 60 mm and a
bolt-to-part distance L2 = 40 mm. The bolt is tightened to produce 8 kN of bolt force.
Calculate the clamping force delivered to the part and the heel reaction.

**Problem — Part B (tipping check):** The same clamp holds a steel block of mass 12 kg. A horizontal
end-milling force of 2.4 kN acts 55 mm above the base. The part pivots about a locator edge 90 mm
downstream of the clamp point; the CG is 45 mm from the pivot. Determine whether the part will tip,
using a required safety factor of 2.0.

```
GIVEN:
  PART A
    Heel-to-bolt distance      L1      = 60 mm                  [PROJ]
    Bolt-to-part distance      L2      = 40 mm                  [PROJ]
    Bolt force                 F_bolt  = 8 kN                   [PROJ]

  PART B
    Part mass                  m       = 12 kg                  [PROJ]
    Cutting force (horizontal) F_cut   = 2.4 kN                 [PROJ]
    Height of cutting force    h       = 55 mm                  [PROJ]
    Pivot-to-clamp distance    a       = 90 mm                  [PROJ]
    Pivot-to-CG distance       b       = 45 mm                  [PROJ]
    Required safety factor     S_req   = 2.0                    [PRACTICE]
    Gravity                    g       = 9.81 m/s²              [STD]

REQUIRED:
  (a) Clamping force delivered to the part
  (b) Heel reaction force
  (c) Overturning moment about the pivot
  (d) Restoring moment about the pivot
  (e) Stability ratio and PASS/FAIL verdict

ASSUMPTION:
  1. The strap is rigid and the heel does not slip. A flexing strap
     would deliver less clamp force than calculated. [PRACTICE]
  2. Static analysis; dynamic/impact effects of interrupted cutting
     are NOT included. For interrupted cuts an impact factor is
     applied — taught at L9.1.4. MUST BE CONFIRMED for the actual
     operation.
  3. The cutting force is treated as a steady horizontal force at a
     single height. Real milling forces vary through each tooth
     engagement. [EX-ASSUMED]
  4. The pivot is a sharp locator edge; in reality contact is
     distributed, which is slightly conservative (safe).
  5. Friction at the base is NEGLECTED in the tipping check. This is
     conservative for tipping (friction does not resist tipping about
     the contact edge) and is the correct approach.

FORMULA:
  (a) F_clamp = F_bolt × L1 / (L1 + L2)
  (b) F_heel  = F_bolt − F_clamp
  (c) M_over  = F_cut × h
  (d) W = m × g ;  M_rest = (F_clamp × a) + (W × b)
  (e) S = M_rest / M_over

VARIABLE DEFINITIONS:
  As tabulated in §12 above.

UNIT CONVERSION:
  F_bolt = 8 kN    = 8000 N
  F_cut  = 2.4 kN  = 2400 N
  All distances already in mm → moments in N·mm
  W = 12 kg × 9.81 m/s² = 117.72 N

SUBSTITUTION:
  (a) F_clamp = 8000 × 60 / (60 + 40)
  (b) F_heel  = 8000 − F_clamp
  (c) M_over  = 2400 × 55
  (d) M_rest  = (F_clamp × 90) + (117.72 × 45)
  (e) S       = M_rest / M_over

CALCULATION:
  (a) F_clamp = 8000 × 60 / 100
              = 8000 × 0.60
              = 4800 N        (4.80 kN)

  (b) F_heel  = 8000 − 4800
              = 3200 N        (3.20 kN)

      CHECK by moments about the bolt:
        F_clamp × L2 = 4800 × 40 = 192,000 N·mm
        F_heel  × L1 = 3200 × 60 = 192,000 N·mm     ✓ balanced

  (c) M_over  = 2400 × 55
              = 132,000 N·mm

  (d) W       = 117.72 N
      Clamp contribution  = 4800 × 90    = 432,000 N·mm
      Weight contribution = 117.72 × 45  =   5,297 N·mm
      M_rest              = 432,000 + 5,297
                          = 437,297 N·mm

  (e) S = 437,297 / 132,000
        = 3.31

RESULT:
  (a) Clamping force delivered  = 4,800 N  (4.80 kN)
  (b) Heel reaction             = 3,200 N  (3.20 kN)
  (c) Overturning moment        = 132,000 N·mm
  (d) Restoring moment          = 437,297 N·mm
  (e) Stability ratio           = 3.31

SAFETY FACTOR:
  Achieved  S = 3.31
  Required  S = 2.0
  Margin      = 3.31 / 2.0 = 1.66 (66 % above requirement)

PASS/FAIL:
  ✓ PASS — the part will not tip. Achieved stability ratio 3.31
  comfortably exceeds the required 2.0.

ENGINEERING CONCLUSION:
  Four engineering observations, in order of importance:

  1. ONLY 60 % OF THE BOLT FORCE REACHES THE PART. An 8 kN bolt
     load delivers 4.8 kN of clamping. Engineers who assume bolt
     force equals clamp force overestimate their holding by 40 %
     in this geometry — and by 50 % if the bolt were centred.

  2. WEIGHT IS ALMOST IRRELEVANT HERE. The weight contributes
     5,297 N·mm out of 437,297 N·mm — just 1.2 % of the restoring
     moment. For a 12 kg part this is expected. For a 400 kg
     weldment it would dominate. Always include it and let the
     arithmetic decide; never assume.

  3. THE DESIGN IS TIPPING-SAFE BUT THAT IS NOT THE WHOLE ANSWER.
     This calculation checks TIPPING ONLY. The part could still
     SLIDE. That check requires friction and is performed in
     L0.3.3 §13 — where the same part will produce a much less
     comfortable result.

  4. IMPROVING THE MARGIN COSTS NOTHING. Moving the bolt 10 mm
     toward the part (L1 = 70, L2 = 30) gives:
        F_clamp = 8000 × 70/100 = 5,600 N   (+17 %)
        M_rest  = 5600 × 90 + 5,297 = 509,297 N·mm
        S       = 3.86   (+17 %)
     A 17 % increase in holding capability from relocating one
     bolt. This is the cheapest engineering improvement available
     and it is why strap-clamp geometry is a deliberate decision,
     not an accident of where the T-slot happened to be.

SENSITIVITY NOTE:
  Ranked by influence on the stability ratio:
    1. Height of cutting force (h) — directly proportional to the
       overturning moment. Reducing tool overhang or cut height is
       the most powerful single lever.
    2. Bolt position (L1/L2 ratio) — free to change, up to ±50 %
       effect on clamp force.
    3. Clamp distance from pivot (a) — directly proportional.
    4. Part weight — negligible here, dominant for heavy parts.
```

### 14. Engineering assumptions
- Rigid strap and non-slipping heel; a flexing strap delivers less than calculated.
- Static analysis only; interrupted-cut impact factors are added at L9.1.4.
- Steady single-point cutting force — a simplification of real milling behaviour.
- Sharp-edge pivot (slightly conservative).
- Base friction neglected in the tipping check — correct and conservative, since friction does not
  resist rotation about the contact edge.

### 15. Diagram

```
     THE FREE-BODY DIAGRAM — FIVE-STEP METHOD
     (instructional schematic)

  STEP 1 — ISOLATE THE WORKPIECE (remove everything else)

           ┌─────────────────┐
           │                 │
           │    WORKPIECE    │
           │                 │
           └─────────────────┘

  STEP 2 & 3 — APPLY AND LABEL EVERY EXTERNAL FORCE

                    F_clamp ↓
                       │
           ┌───────────┼─────┐
   F_cut → │           │     │
   ────────►    ● CG   │     │      h = height of F_cut
           │    │      │     │          above the pivot
           └────┼──────┴─────┘
              W ↓        ▲
        ═══════════════════════
                ▲        ▲
              R_1      R_2 (pivot for tipping)
              │←── b ──→│
              │←──── a ──────→│

     Forces acting:  F_cut  (disturbing, horizontal)
                     F_clamp (holding, vertical)
                     W = mg  (weight, at CG)
                     R_1, R_2 (locator reactions)
                     friction at base (omitted for tipping check)

  STEP 4 & 5 — CHOOSE MOMENT CENTRE AND SOLVE

     Take moments about R_2 (the pivot):
       R_2 has zero moment arm → it DROPS OUT ✓

       M_over = F_cut × h
       M_rest = F_clamp × a + W × b
       S = M_rest / M_over ≥ 2.0

  ─────────────────────────────────────────────────────────────

     THE STRAP CLAMP AS A LEVER

              F_bolt = 8000 N
                   ↓
     ┌─────────────┼───────────────┐
     │             │               │
    ═╧═            │              ═╪═
    HEEL           │             PART
     ▲             │               ▲
  3200 N           │            4800 N
     │←─ L1=60 ────┼──── L2=40 ───→│

     F_clamp = F_bolt × L1/(L1+L2) = 8000 × 60/100 = 4800 N

     ┌──────────────────────────────────────────────────────┐
     │ BOLT CENTRED     (L1=L2)  →  F_clamp = F_bolt / 2    │
     │ BOLT NEAR PART   (L1>L2)  →  F_clamp INCREASES       │
     │ BOLT NEAR HEEL   (L1<L2)  →  F_clamp DECREASES       │
     └──────────────────────────────────────────────────────┘

  ─────────────────────────────────────────────────────────────

     TWO INDEPENDENT FAILURE MODES — CHECK BOTH

     SLIDING                        TIPPING
     ┌──────┐                       ┌──────┐
     │      │ →→→                   │      │ ↷
     │      │                       │     ╱
     └──────┘                       └────╱
     ════════                       ════●═══
                                        pivot
     resisted by FRICTION           resisted by MOMENTS
     check ΣF = 0                   check ΣM = 0
     (L0.3.3)                       (this lesson)

     ┌──────────────────────────────────────────────────────┐
     │ TIPPING USUALLY GOVERNS WHEN THE CUTTING FORCE ACTS  │
     │ HIGH ABOVE THE LOCATING PLANE.                       │
     └──────────────────────────────────────────────────────┘
```

### 16. Drawing example
Not a drawing lesson, but one convention matters: on a **setup drawing** or **operator instruction
drawing** (L25.1.7, L25.1.8) you will show clamp positions and often the clamping sequence. Force
arrows are drawn as thin leader-style arrows with the force value labelled, and the clamping
**sequence** is numbered (1, 2, 3) because sequence affects part distortion (L8.3.1).

A setup drawing showing clamp positions without the tightening sequence is incomplete for any part
where clamping order matters.

### 17. CAD workflow
FBD work is done on paper or a whiteboard, before CAD — that is the point of it.

Two CAD capabilities become relevant later:
1. **Mass properties** give you mass and CG location directly (SolidWorks `Tools ▸ Evaluate ▸ Mass
   Properties`; Creo `Analysis ▸ Mass Properties`; NX `Analysis ▸ Measure Bodies`). Assign material
   first. The CG coordinates feed straight into your moment arms.
2. **Measure tools** give exact moment arms from the model rather than scaled from a drawing.

Do not reach for FEA at this stage. An FBD with three equations answers the question in two minutes;
FEA answers it in two hours and hides the physics. FEA earns its place for complex geometry and
stress concentration (previewed at L10), never as a substitute for equilibrium.

### 18. GD&T application
Not applicable at this lesson. Forward link: the six equilibrium equations in 3D (ΣFx, ΣFy, ΣFz,
ΣMx, ΣMy, ΣMz) correspond exactly to the **six degrees of freedom** (Level 4) and to the **3-2-1
locating principle** (Level 5). Constraining a DOF and resisting a force or moment are the same
physical statement viewed from two directions. When you reach Level 4, recognise it as this lesson
in different language.

### 19. Manufacturing method
Not applicable at this lesson. Practical note: bolt force is produced by torque, and the relationship
`T = K·F·d` carries large uncertainty because K depends on friction, lubrication and surface condition
(taught at L20.2.1). A "8 kN bolt force" in a calculation is a target, not a guarantee — which is one
reason safety factors exist.

### 20. Inspection method
Not applicable at this lesson. Practical note: clamp force can be measured directly with a load washer
or force sensor during fixture commissioning. On critical fixtures this is worth doing once, because it
validates every assumption in your calculation chain — including the K-factor uncertainty above.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Not drawing an FBD at all | Clamp sized by intuition; part moves or gets crushed |
| 2 | Forgetting a force (usually friction or weight) | Wrong answer, often unconservative |
| 3 | Using distance to the point of application instead of **perpendicular** distance to the line of action | Wrong moment arm; wrong answer |
| 4 | Checking sliding but not tipping | Part rocks under cut despite "sufficient" clamp force |
| 5 | Assuming bolt force = clamp force | Overestimates holding by 40–50% |
| 6 | Including base friction in the tipping check | Unconservative — friction does not resist rotation about the edge |
| 7 | Taking moments about an inconvenient point | Unnecessary simultaneous equations, more chance of error |
| 8 | Relying on the clamp to resist the main cutting force | Should be taken by a positive stop |
| 9 | Ignoring weight on large parts | Large error on heavy weldments |
| 10 | Static analysis on a heavily interrupted cut with no impact factor | Under-designed clamping |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Part shifts during cut despite high clamp force | Sliding, not tipping — friction insufficient | Compute required friction force (L0.3.3) | Add a positive stop against the cutting direction | Check both failure modes at design |
| Part rocks or lifts at one corner | Tipping about a locator edge | Compute stability ratio | Move clamp further from pivot; reduce cut height | Always perform the tipping check |
| Clamp force measured lower than calculated | Bolt force ≠ clamp force (lever ratio); or strap flexing | Measure with a load washer | Recalculate lever ratio; stiffen the strap | Apply the lever rule; specify strap section |
| Thin part deformed by clamping | Clamp force far higher than equilibrium requires | Recompute the actual requirement | Reduce clamp force to calculated need + factor | Size clamps from the FBD, not by feel |
| Calculation disagrees with reality | Missing force in the FBD | Re-draw the FBD from scratch | Identify the omitted force | Use the five-step method every time |

### 23. Design checklist
- [ ] Have I drawn a free-body diagram of the **isolated** workpiece?
- [ ] Have I included cutting force, clamp forces, locator reactions, friction and weight?
- [ ] Are my moment arms **perpendicular** distances to the lines of action?
- [ ] Have I chosen a moment centre that eliminates an unknown?
- [ ] Have I checked **sliding**?
- [ ] Have I checked **tipping**?
- [ ] Have I applied the lever rule to any strap clamp (bolt force ≠ clamp force)?
- [ ] Is the main cutting force resisted by a **positive stop** rather than by friction alone?
- [ ] Have I applied an appropriate safety factor and stated why?
- [ ] For an interrupted cut, have I considered an impact factor?
- [ ] Does my FBD have three or fewer unknowns in 2D (statically determinate)?

### 24. Beginner exercise
**E0.3.1-B** — A strap clamp has heel-to-bolt distance 50 mm and bolt-to-part distance 50 mm. The bolt
force is 10 kN.
(a) Calculate the clamping force delivered to the part.
(b) Calculate the heel reaction.
(c) State what happens to the clamping force if the bolt is moved 15 mm toward the part, and calculate
the new value.

### 25. Intermediate exercise
**E0.3.1-I** — A steel block of mass 18 kg is held by a single strap clamp delivering 5 kN. A horizontal
milling force of 3.1 kN acts 70 mm above the base. The part pivots about a locator 110 mm from the
clamp point; the CG is 55 mm from the pivot.
(a) Draw the free-body diagram.
(b) Calculate the overturning and restoring moments.
(c) Calculate the stability ratio.
(d) State whether it passes a required safety factor of 2.0.
(e) If it fails, calculate the minimum clamp force required to pass.

### 26. Advanced exercise
**E0.3.1-A** — A cast-iron housing (mass 34 kg) is located on three rest pads and held by two strap
clamps. During face milling, a vertical downward force of 4.2 kN and a horizontal force of 1.8 kN act
at a point 85 mm above the pad plane and 120 mm from the front pad. Clamp 1 is 60 mm behind the front
pad; clamp 2 is 210 mm behind it. Each clamp has L1 = 55 mm and L2 = 45 mm, with bolts torqued to give
9 kN bolt force each. The CG is 140 mm from the front pad.
(i) Draw the complete free-body diagram with all forces labelled.
(ii) Calculate the clamping force delivered by each clamp.
(iii) Calculate the reaction at each rest pad under the combined loading.
(iv) Perform the tipping check about the front pad and report the stability ratio.
(v) Determine whether any rest pad reaction goes negative (indicating lift-off), and explain the
physical meaning if it does.
(vi) Recommend one geometric change that improves stability at zero cost, with the recalculated ratio.

### 27. Interview questions
1. *"What is the first thing you do when asked to size a clamp?"*
   **Answer:** Draw a free-body diagram of the isolated workpiece with every external force on it —
   cutting force, clamp forces, locator reactions, friction and weight — then apply ΣFx = 0, ΣFy = 0,
   ΣM = 0. Without the FBD you are guessing, and guessing produces either parts that move or parts
   that are crushed by over-clamping. *(Reasoning: clamp force is the output of an equilibrium
   calculation, not an input based on judgement.)*
2. *"A strap clamp bolt is torqued to give 8 kN. How much clamp force reaches the part?"*
   **Answer:** It depends on the lever geometry — `F_clamp = F_bolt × L1/(L1+L2)`. If the bolt is
   centred, only half, so 4 kN. Assuming bolt force equals clamp force overestimates holding by up to
   50%. It is a lever, and its geometry is a design decision.

### 28. Expert questions
1. *"Your tipping calculation passes with a stability ratio of 3.3, but the part still rocks in
   production. What did the calculation miss?"*
   **Answer:** A static analysis passing while reality fails points to something outside the static
   model, and there are four realistic candidates I would check in order.
   First, **dynamic loading** — a static force of 2.4 kN may peak far higher on an interrupted cut as
   each tooth enters. If the impact factor is 2, the real overturning moment doubles and the ratio
   falls to 1.65, below my required 2.0.
   Second, **the part is not sitting where I assumed** — if a burr, chip, or non-flat locating surface
   means the part is rocking on two points instead of seated on three, the actual pivot is somewhere I
   did not analyse.
   Third, **the clamp force is not what I calculated** — strap flexing, thread friction variability in
   `T = K·F·d`, or a clamp that has loosened under vibration.
   Fourth, **the tipping is not about the axis I checked** — I analysed one plane; the part may be
   rotating about a different axis entirely.
   The diagnostic order is: measure actual clamp force, blue the locating surfaces to verify seating,
   then instrument for dynamic force. The calculation was not wrong; the model was incomplete, and the
   engineering skill is knowing which simplification broke.
2. *"When is a free-body diagram insufficient, and what do you do then?"*
   **Answer:** The FBD assumes a **rigid body** and **static determinacy**, and both assumptions fail
   in identifiable situations.
   It fails on **deformable parts** — thin walls, tubes, sheet metal — where the part deflects under
   clamping, changing the force distribution. Equilibrium still holds, but the load path depends on
   stiffness, not just geometry. The tool then is deflection analysis (L0.3.4, L10) or FEA.
   It fails on **over-constrained (statically indeterminate) systems** — more than three unknowns in
   2D, which happens whenever you have four locators in a plane. Equilibrium alone cannot distribute
   the load; you need compatibility conditions, which means stiffness enters again. This is precisely
   why over-constraint is a fixture design error (Level 4) rather than merely an academic curiosity:
   an over-constrained fixture has load distribution you cannot calculate and cannot predict.
   It also fails for **dynamic and vibration** problems, where inertia and natural frequency govern
   (L10.3).
   The correct response is not to abandon the FBD but to use it first, identify which assumption is
   breaking, and escalate to the appropriate tool only for that specific aspect. An engineer who goes
   straight to FEA without an FBD usually cannot tell whether the FEA result is sensible.

### 29. Summary
A force is a vector push or pull; a moment is force × perpendicular distance and produces rotation. A
body is in static equilibrium when ΣFx = 0, ΣFy = 0 and ΣM = 0 — three equations permitting three
unknowns in 2D, corresponding to six in 3D and hence to the six degrees of freedom. The free-body
diagram isolates the workpiece and shows every external force, and it is the starting point of every
fixture force calculation. A strap clamp is a lever delivering `F_bolt × L1/(L1+L2)` to the part, so
bolt force never equals clamp force. Clamped parts fail by sliding or by tipping, and both must be
checked; tipping usually governs when the cutting force acts high above the locating plane.

### 30. Key takeaways
- **If you cannot draw the FBD, you do not understand the fixture.**
- **ΣFx = 0, ΣFy = 0, ΣM = 0** — three equations, three unknowns, in 2D.
- **Moment arm is the perpendicular distance to the line of action** — the most common error.
- **Take moments about a point where an unknown acts** to eliminate it.
- **Bolt force ≠ clamp force.** A strap clamp is a lever: `F_clamp = F_bolt × L1/(L1+L2)`.
- **Check both sliding and tipping.** Tipping governs when the cut acts high above the locators.
- **Do not include base friction in a tipping check** — it does not resist rotation about the edge.
- The three equilibrium equations in 3D **are** the six degrees of freedom (Level 4).

---

## LESSON L0.3.2 — STRESS, STRAIN AND FACTOR OF SAFETY

### 1. Lesson title
**L0.3.2 — Stress, strain, Young's modulus, yield, ultimate strength and factor of safety**

### 2. Learning objective
By the end of this lesson you will be able to calculate direct, shear and bearing stress, apply
Young's modulus to find elastic deflection, distinguish yield from ultimate strength, select and
justify a factor of safety, and determine whether a fixture component is strong enough.

### 3. Prerequisites
L0.3.1.

### 4. Why the topic matters
Level 20 asks you to size bolts, check pin shear, verify weld strength and select base-plate
thickness. Every one of those is a stress calculation, and every one follows the identical pattern:
**calculate the applied stress, compare it to the allowable stress, report a factor of safety.**

Learn the pattern once here and the rest of the program is applying it to different geometries.

There is also a specific fixture failure this lesson prevents: **bearing stress at locators**. A
locating pin can be strong in shear and still crush the workpiece it touches, because the contact
area is tiny. Beginners check the pin and ignore the contact. The part gets a dent, the location
shifts, and the parts drift out of tolerance over a production run.

### 5. Simple explanation
**Stress** is force spread over an area. The same force on a small area produces high stress; on a
large area, low stress. That's why a drawing pin pierces wood but your thumb doesn't.

**Strain** is how much something stretches, as a fraction of its original length.

**Young's modulus** links them: stiff materials (steel) need a lot of stress for a little strain;
flexible materials (rubber) need very little.

**Yield strength** is where the material stops springing back and stays bent. **Ultimate strength** is
where it breaks.

**Factor of safety** is how much margin you leave between what you apply and what the material can take.

### 6. Engineering explanation

**Direct (normal) stress**
```
σ = F / A
```
Force perpendicular to the area. Tensile (pulling) or compressive (pushing). Unit: N/mm² = **MPa**.

**Shear stress**
```
τ = F / A
```
Force parallel to the area — the area being sheared through. This is what a dowel pin experiences
when two plates try to slide relative to each other.

**Bearing (contact) stress**
```
σ_b = F / A_projected
```
The crushing stress where two components press together. For a pin of diameter `d` bearing on a plate
of thickness `t`, the **projected** area is `d × t` — not the curved surface area. This distinction
matters and is frequently got wrong.

**Strain**
```
ε = ΔL / L
```
Dimensionless (mm/mm).

**Young's modulus (modulus of elasticity)**
```
E = σ / ε
```
The stiffness of the material. Rearranged for deflection:
```
ΔL = F·L / (A·E)
```

**Typical values** `[GUIDE] — grade-dependent, must be confirmed from the material specification:`

| Material | E (GPa) | Typical yield σ_y (MPa) |
|---|---|---|
| Steel (all grades) | ~200 | 250 (mild) to 900+ (alloy, heat treated) |
| Cast iron (grey) | 100–140 | — (brittle; use ultimate) |
| Aluminium alloy | ~70 | 100–500 depending on alloy/temper |
| Stainless steel (austenitic) | ~193 | 200–300 |

> **Note the crucial fact:** all steels have essentially the same **stiffness** (E ≈ 200 GPa)
> regardless of grade or heat treatment. Heat treatment changes **strength**, not stiffness.
> A hardened EN19 base plate deflects exactly as much as a mild steel one of the same geometry.
> **If your fixture deflects too much, changing to a stronger steel will not help — you must change
> the geometry.** This single fact is misunderstood constantly, and it returns at L10.

**Yield vs ultimate strength**
- **Yield strength (σ_y):** stress at which permanent deformation begins. **Design to this** for
  fixture components — a permanently bent locator is a failed locator, even if it hasn't broken.
- **Ultimate tensile strength (σ_UTS):** stress at fracture. Used for brittle materials (cast iron)
  and for fastener property classes.

**Factor of safety**
```
FoS = σ_allowable / σ_applied
```
or equivalently, design so that:
```
σ_applied ≤ σ_y / FoS
```

**Typical factors of safety for fixture components** `[PRACTICE] — these are orientation values that
must be confirmed against your company standard and the criticality of the application:`

| Situation | Typical FoS |
|---|---|
| Static, well-defined load, ductile material | 1.5 – 2.0 |
| Fixture structural components, general | 2.0 – 3.0 |
| Dynamic / interrupted cutting loads | 3.0 – 4.0 |
| Uncertain loads, or consequences of failure severe | 4.0 – 6.0 |
| Brittle materials (cast iron) | 5.0 – 8.0 |

**Why brittle materials need higher factors:** they fail without warning. A ductile steel component
yields visibly before it breaks, giving warning; cast iron simply cracks.

### 7. Terminology

| Term | Definition | SI unit |
|---|---|---|
| **Stress (σ)** | Force per unit area | N/mm² = MPa |
| **Shear stress (τ)** | Force per unit area, parallel to the area | MPa |
| **Bearing stress** | Contact/crushing stress on the projected area | MPa |
| **Strain (ε)** | Deformation per unit length | dimensionless |
| **Young's modulus (E)** | Stiffness = σ/ε | GPa (= 1000 MPa) |
| **Elastic** | Returns to original shape when unloaded | — |
| **Plastic** | Permanently deformed | — |
| **Yield strength (σ_y)** | Stress at onset of permanent deformation | MPa |
| **Ultimate strength (σ_UTS)** | Stress at fracture | MPa |
| **Factor of safety (FoS)** | Ratio of allowable to applied stress | dimensionless |
| **Ductile** | Deforms substantially before fracture | — |
| **Brittle** | Fractures with little prior deformation | — |
| **Stress concentration** | Local stress increase at a notch, hole or sharp corner | — |

### 8. Principle

> **ALL STEELS HAVE THE SAME STIFFNESS. HEAT TREATMENT CHANGES STRENGTH, NOT STIFFNESS.**
> If a fixture member deflects too much, a stronger steel will not help. Change the **geometry** —
> thickness, section, ribs, span.
> And always check **bearing stress at contacts**, not just stress in the component: a strong pin can
> still crush a soft workpiece.

### 9. Industrial application

**The three stress checks a fixture engineer performs constantly:**

```
1. BOLT TENSILE STRESS       — will the clamping bolt yield?
   σ = F / A_stress_area          (L20.2.2)

2. DOWEL PIN SHEAR           — will the locating pin shear off?
   τ = F / (π d²/4)               (L20.2.3)
   Double shear: τ = F / (2 × π d²/4)

3. BEARING AT THE LOCATOR    — will the pin crush the part or the plate?
   σ_b = F / (d × t)              (this is the one that gets forgotten)
```

**The forgotten check, illustrated:**
A Ø10 hardened dowel pin transmits 8 kN of side load into an aluminium fixture plate 12 mm thick.
- Pin shear stress: `τ = 8000/(π×10²/4) = 102 MPa` — trivial for a hardened pin ✓
- Bearing on the aluminium: `σ_b = 8000/(10×12) = 67 MPa` — approaching the yield of some aluminium
  alloys `[GUIDE]`, so the **hole will elongate** over time ✗

The pin is fine. The plate is not. The pin will slowly hammer an oval hole in the aluminium, the
location will drift, and parts will go out of tolerance progressively — the classic symptom of a
fixture that worked when new and degraded over months. The fix is a hardened steel bush in the
aluminium plate, which is exactly why bushes exist (L19.7).

### 10. Design rules
- **R1** — Design fixture components to **yield strength**, not ultimate — permanent deformation is failure.
- **R2** — Always check **bearing stress** at every pin, locator and contact, not just component stress.
- **R3** — Use hardened bushes where a pin bears on a soft material (aluminium, mild steel).
- **R4** — Select FoS based on load certainty, load type (static/dynamic) and failure consequence — and
  **state your reasoning**.
- **R5** — Do not stack safety factors. If cutting force already includes a 2× impact factor, do not
  then apply a 3× FoS on top and a further margin "to be safe" (this becomes 6×, wasteful and
  self-deceiving).
- **R6** — For deflection problems, change **geometry**; for strength problems, consider material.
- **R7** — Avoid sharp internal corners — stress concentration can multiply local stress by 2–3×
  `[GUIDE]`. Use a radius.
- **R8** — Treat cast iron and other brittle materials with higher factors and no reliance on yielding.

### 11. Rules of thumb
- Steel E ≈ 200 GPa, aluminium E ≈ 70 GPa — aluminium deflects roughly **3× more** than steel for the
  same geometry and load `[GUIDE]`.
- 1 MPa = 1 N/mm². Working in N and mm gives MPa directly — **use N and mm throughout** and unit
  errors mostly disappear.
- Fixture structural members are usually **stiffness-limited, not strength-limited** — they deflect
  unacceptably long before they yield `[PRACTICE]`.
- A stress calculation showing FoS of 40 is telling you the component is oversized for strength and
  that deflection is the real design driver.
- Sharp corners are stress raisers; a generous radius is free strength.

### 12. Formulae

**Direct stress**       `σ = F / A`
**Shear stress**        `τ = F / A_shear`
**Single shear (pin)**  `A_shear = π d² / 4`
**Double shear (pin)**  `A_shear = 2 × π d² / 4`
**Bearing stress**      `σ_b = F / (d × t)`
**Strain**              `ε = ΔL / L`
**Young's modulus**     `E = σ / ε`
**Axial deflection**    `ΔL = F·L / (A·E)`
**Factor of safety**    `FoS = σ_allowable / σ_applied`
**Allowable stress**    `σ_allowable = σ_y / FoS`

| Variable | Meaning | SI unit |
|---|---|---|
| σ | Direct stress | MPa (N/mm²) |
| τ | Shear stress | MPa |
| σ_b | Bearing stress | MPa |
| F | Applied force | N |
| A | Cross-sectional area | mm² |
| d | Pin diameter | mm |
| t | Plate thickness | mm |
| ε | Strain | dimensionless |
| E | Young's modulus | MPa (note: 200 GPa = 200,000 MPa) |
| L | Original length | mm |
| ΔL | Change in length | mm |
| σ_y | Yield strength | MPa |

### 13. Worked numerical example

**Problem:** A Ø12 mm dowel pin locates a workpiece against a side load of 14 kN in single shear. The
pin is EN8 steel (σ_y = 465 MPa `[GUIDE]`) and bears on a mild-steel fixture plate 15 mm thick
(σ_y = 250 MPa `[GUIDE]`). A steel tie bar 200 mm long with a 20 × 8 mm cross-section carries the same
14 kN in tension.

Determine: (a) pin shear stress and FoS, (b) bearing stress on the plate and FoS, (c) tie-bar tensile
stress and FoS, (d) tie-bar extension, (e) the governing failure mode and recommendation.
Use a required FoS of 3.0 for this dynamic machining application.

```
GIVEN:
  Side load                  F     = 14 kN                      [PROJ]
  Pin diameter               d     = 12 mm                      [PROJ]
  Pin material EN8           σ_y   = 465 MPa                    [GUIDE]
  Plate thickness            t     = 15 mm                      [PROJ]
  Plate material mild steel  σ_y   = 250 MPa                    [GUIDE]
  Tie bar length             L     = 200 mm                     [PROJ]
  Tie bar section            20 × 8 mm                          [PROJ]
  Steel Young's modulus      E     = 200 GPa                    [GUIDE]
  Required factor of safety  FoS   = 3.0 (dynamic machining)    [PRACTICE]

REQUIRED:
  (a) Pin shear stress and factor of safety
  (b) Bearing stress on the plate and factor of safety
  (c) Tie-bar tensile stress and factor of safety
  (d) Tie-bar extension under load
  (e) Governing failure mode and engineering recommendation

ASSUMPTION:
  1. SINGLE shear — the pin is loaded across one plane only.
     Double shear would halve the stress. The loading arrangement
     MUST BE CONFIRMED from the assembly. [PROJ]
  2. Shear yield taken as 0.577 × tensile yield (von Mises criterion
     for ductile materials). [GUIDE] Some references use 0.5 as a
     conservative simplification; the choice must be stated.
  3. Uniform stress distribution — real pins have stress
     concentration at the shear plane edges. Conservative allowance
     is inherent in the FoS.
  4. Bearing stress uses the PROJECTED area (d × t), which is
     standard practice for pin-in-hole bearing. [PRACTICE]
  5. Material yield values are typical for the grade and MUST BE
     CONFIRMED from the actual material certificate. [GUIDE]

FORMULA:
  (a) A_shear = π d² / 4
      τ       = F / A_shear
      τ_y     = 0.577 × σ_y
      FoS     = τ_y / τ
  (b) A_bear  = d × t
      σ_b     = F / A_bear
      FoS     = σ_y(plate) / σ_b
  (c) A_bar   = w × h
      σ       = F / A_bar
      FoS     = σ_y / σ
  (d) ΔL      = F·L / (A·E)

VARIABLE DEFINITIONS:
  As tabulated in §12 above.

UNIT CONVERSION:
  F = 14 kN = 14,000 N
  E = 200 GPa = 200,000 MPa = 200,000 N/mm²
  All lengths in mm → areas in mm² → stresses in N/mm² = MPa

SUBSTITUTION AND CALCULATION:

  (a) PIN SHEAR
      A_shear = π × 12² / 4 = π × 144 / 4 = 113.10 mm²
      τ       = 14000 / 113.10 = 123.79 MPa
      τ_y     = 0.577 × 465 = 268.31 MPa
      FoS_pin = 268.31 / 123.79 = 2.17

  (b) BEARING ON PLATE
      A_bear  = 12 × 15 = 180 mm²
      σ_b     = 14000 / 180 = 77.78 MPa
      FoS_brg = 250 / 77.78 = 3.21

  (c) TIE BAR TENSION
      A_bar   = 20 × 8 = 160 mm²
      σ       = 14000 / 160 = 87.50 MPa
      FoS_bar = 250 / 87.50 = 2.86

  (d) TIE BAR EXTENSION
      ΔL = F·L / (A·E)
         = (14000 × 200) / (160 × 200000)
         = 2,800,000 / 32,000,000
         = 0.0875 mm

RESULT:
  ┌──────────────────────┬───────────┬────────┬──────────┐
  │ Check                │ Stress    │ FoS    │ vs 3.0   │
  ├──────────────────────┼───────────┼────────┼──────────┤
  │ (a) Pin shear        │ 123.8 MPa │ 2.17   │ ✗ FAIL   │
  │ (b) Bearing on plate │  77.8 MPa │ 3.21   │ ✓ PASS   │
  │ (c) Tie bar tension  │  87.5 MPa │ 2.86   │ ✗ FAIL   │
  └──────────────────────┴───────────┴────────┴──────────┘
  (d) Tie bar extension = 0.0875 mm

SAFETY FACTOR:
  Required : 3.0
  Achieved : 2.17 (pin, governing), 2.86 (bar), 3.21 (bearing)
  Lowest   : 2.17 — the PIN governs.

PASS/FAIL:
  ✗ FAIL — two of three checks fall below the required FoS of 3.0.
  The pin shear is the governing failure mode at FoS 2.17.

ENGINEERING CONCLUSION:
  THE PIN GOVERNS. Address it first; the tie bar second.

  OPTION 1 — INCREASE PIN DIAMETER to Ø14:
      A_shear = π × 14²/4 = 153.94 mm²
      τ       = 14000/153.94 = 90.94 MPa
      FoS     = 268.31/90.94 = 2.95      still marginally short

    Ø15:  A = 176.71 mm²,  τ = 79.23 MPa,  FoS = 3.39  ✓ PASS

  OPTION 2 — USE A HARDER PIN MATERIAL (e.g. EN19 hardened,
      σ_y ≈ 800 MPa [GUIDE], must be confirmed):
      τ_y = 0.577 × 800 = 461.6 MPa
      FoS = 461.6 / 123.79 = 3.73  ✓ PASS at Ø12

  OPTION 3 — DOUBLE SHEAR arrangement (support the pin on both
      sides):
      A_shear = 2 × 113.10 = 226.20 mm²
      τ       = 14000/226.20 = 61.89 MPa
      FoS     = 268.31/61.89 = 4.33  ✓ PASS, best margin

  RECOMMENDATION: Option 3 (double shear) if the assembly permits,
  because it doubles capacity through GEOMETRY at no material cost
  and no increase in pin size. Otherwise Option 2 (harder pin),
  which is a simple material substitution. Option 1 requires
  changing the hole size in both the part and the fixture.

  TIE BAR: increase section from 20×8 (160 mm²) to 20×10
  (200 mm²): σ = 70 MPa, FoS = 3.57 ✓ PASS.

  NOTE ON DEFLECTION: the tie bar extends only 0.0875 mm — likely
  acceptable, but this must be checked against the POSITIONAL
  TOLERANCE it affects, not judged by feel. If this bar positions
  a locator holding a ±0.05 mm feature, 0.0875 mm of stretch is a
  serious error source and the bar must be stiffened regardless of
  its strength margin.

  ─────────────────────────────────────────────────────────
  THE KEY ENGINEERING LESSON:
  Note that STRENGTH and STIFFNESS gave different verdicts. The
  tie bar at FoS 2.86 is nearly strong enough, yet its 0.0875 mm
  stretch may be functionally unacceptable. Strength and stiffness
  are INDEPENDENT requirements. Passing one does not pass the
  other, and fixture members are usually governed by stiffness.
  ─────────────────────────────────────────────────────────

SENSITIVITY NOTE:
  Pin shear stress varies with d², so it is highly sensitive to
  diameter: Ø12→Ø15 (a 25% diameter increase) reduces stress by
  36%. Bearing stress varies with d×t, so it is only linearly
  sensitive. Deflection varies inversely with area, so doubling
  the bar section halves the stretch.
```

### 14. Engineering assumptions
- Single shear assumed; the actual arrangement must be confirmed from the assembly.
- Shear yield = 0.577 × tensile yield (von Mises) `[GUIDE]`; the more conservative 0.5 factor is
  sometimes used and the choice must be stated.
- Uniform stress distribution; real stress concentration at shear-plane edges is covered by the FoS.
- Bearing on projected area `d × t`, standard practice `[PRACTICE]`.
- Typical material yield values `[GUIDE]` — must be confirmed against the material certificate.

### 15. Diagram

```
     THE THREE STRESS TYPES IN FIXTURE ENGINEERING
     (instructional schematic)

  1. DIRECT (TENSILE / COMPRESSIVE)      σ = F / A

         F                    F
         ↓                    ↑
      ┌──┴──┐              ┌──┴──┐
      │     │              │     │
      │  A  │              │  A  │        A = cross-section
      │     │              │     │            PERPENDICULAR
      └──┬──┘              └──┬──┘            to the force
         ↓                    ↑
         F                    F
      COMPRESSION          TENSION

  ──────────────────────────────────────────────────────────

  2. SHEAR                                τ = F / A_shear

              F →
        ┌──────────┐
        │  PLATE 1 │
     ═══╪══════════╪═══  ← shear plane
        │  ╭────╮  │        A_shear = π d²/4
        │  │PIN │  │
     ═══╪══╰────╯══╪═══
        │  PLATE 2 │
        └──────────┘
              ← F

     SINGLE SHEAR: one plane      DOUBLE SHEAR: two planes
     A = πd²/4                    A = 2 × πd²/4
                                  ← halves the stress!

  ──────────────────────────────────────────────────────────

  3. BEARING (CONTACT / CRUSHING)     σ_b = F / (d × t)

           F →
        ╭──────╮
        │ PIN  │  d          PROJECTED area = d × t
        ╰──────╯                 ↑
     ┌────────────┐              NOT the curved
     │  ░░░░░░    │ t           surface area
     │  PLATE     │
     └────────────┘

     ┌──────────────────────────────────────────────────┐
     │ THE FORGOTTEN CHECK. A strong pin can still      │
     │ crush a soft plate or workpiece. Use a hardened  │
     │ BUSH where a pin bears on aluminium or mild      │
     │ steel.                                           │
     └──────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

     STRESS-STRAIN BEHAVIOUR

     σ ▲
       │              ╭──────╮  ← ultimate (σ_UTS)
       │            ╭─╯       ╲
       │          ╭─╯          ╲ fracture
       │      ╭───╯  ← yield    ╳
       │    ╱ │      (σ_y)
       │  ╱   │
       │╱     │  ← E = slope = σ/ε
       └──────┴──────────────────────► ε
        ELASTIC   PLASTIC
        (springs   (permanent
         back)      set)

     DESIGN FIXTURE COMPONENTS TO σ_y, NOT σ_UTS.
     A permanently bent locator is a FAILED locator.

  ──────────────────────────────────────────────────────────

     THE FACT THAT SURPRISES EVERYONE

     ┌────────────────────────────────────────────────────┐
     │  ALL STEELS HAVE E ≈ 200 GPa                       │
     │                                                    │
     │  mild steel      E = 200 GPa                       │
     │  EN8             E = 200 GPa                       │
     │  EN19 hardened   E = 200 GPa                       │
     │  D2 tool steel   E = 200 GPa                       │
     │                                                    │
     │  HEAT TREATMENT CHANGES STRENGTH, NOT STIFFNESS.   │
     │                                                    │
     │  If your fixture DEFLECTS too much, a stronger     │
     │  steel will NOT help. Change the GEOMETRY.         │
     └────────────────────────────────────────────────────┘
```

### 16. Drawing example
Not a drawing lesson. One drawing implication: **material and heat treatment callouts in the title
block are strength decisions** (L0.2.4). Specifying "EN19, 28–32 HRC" rather than "mild steel" is a
strength decision with a cost consequence. If your stress calculation shows FoS of 15 on a component,
you may be specifying an expensive material and heat treatment you do not need — a DFM issue examined
at L49.

### 17. CAD workflow
Two relevant capabilities, both used **after** hand calculation, never instead of it:

1. **Mass properties** give cross-sectional areas and section properties for your stress calculations.
2. **FEA / simulation** (SolidWorks Simulation, Creo Simulate, NX Nastran) handles complex geometry and
   stress concentration. Guidance for now:
   - Always hand-calculate first. If FEA disagrees with your hand calculation by more than ~20%, one of
     them is wrong and you must find out which before trusting either.
   - FEA is highly sensitive to boundary conditions and mesh quality. A wrong constraint gives a
     confident, colourful, wrong answer.
   - For the simple geometries in most fixture components, hand calculation is faster and more reliable.

FEA earns its place for complex castings and stress concentrations, not for rectangular plates.

### 18. GD&T application
Not applicable at this lesson. Forward link: **bearing stress determines whether a locating pin will
elongate its hole over time.** A hole that elongates loses positional accuracy progressively, which is
why high-volume fixtures use hardened bushes and why locator wear must be budgeted in the tolerance
stack-up (L23.10). Strength analysis and tolerance analysis meet at exactly this point.

### 19. Manufacturing method
Not applicable at this lesson. Practical link: yield strength depends on heat treatment condition, so
the same EN19 has very different strength as-supplied versus hardened and tempered. Your stress
calculation must state **which condition** it assumes, and the drawing must specify it (L18.8). A
calculation assuming hardened material with a drawing that omits the heat-treatment callout is a
calculation for a component that will never be made.

### 20. Inspection method
Not applicable at this lesson. Practical link: **hardness testing** (Rockwell HRC, Brinell HB) is the
routine shop verification that heat treatment was performed correctly. Hardness correlates with tensile
strength for steels `[GUIDE]`, so it is an indirect strength check. Specify hardness ranges on drawings
and verify them on receipt.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Not checking bearing stress** | Pin crushes/elongates the hole; location drifts over time |
| 2 | Using curved surface area instead of projected area for bearing | Underestimates bearing stress substantially |
| 3 | Assuming a stronger steel will reduce deflection | It will not — E is the same for all steels |
| 4 | Designing to ultimate rather than yield | Permanent deformation accepted as "not failed" |
| 5 | Using single-shear formula for a double-shear arrangement (or vice versa) | 2× error in either direction |
| 6 | Stacking safety factors | Grossly oversized, expensive components |
| 7 | Not stating the material condition assumed | Calculation and reality diverge |
| 8 | Sharp internal corners | Stress concentration 2–3×; unexpected cracking |
| 9 | Checking strength but never stiffness | Component strong enough but deflects out of tolerance |
| 10 | Mixing units (GPa with mm and N) | Errors of 1000× |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Locating hole becomes oval over time | Bearing stress exceeds plate yield | Measure hole; calculate σ_b | Fit hardened bush | Always check bearing stress |
| Fixture deflects despite high-strength steel | Stiffness problem, not strength | Calculate deflection separately | Increase section/thickness, add ribs | Check stiffness and strength independently |
| Pin sheared off | Shear stress exceeded, or double assumed as single | Recalculate with actual arrangement | Increase diameter or use double shear | Confirm shear arrangement from assembly |
| Component cracked at a corner | Stress concentration at a sharp internal corner | Inspect the crack origin | Add generous radius | Avoid sharp internal corners |
| Component grossly oversized | Stacked safety factors | Review each factor applied | Apply one justified factor | Document factor selection reasoning |

### 23. Design checklist
- [ ] Have I calculated direct stress where applicable?
- [ ] Have I calculated shear stress, with the correct single/double arrangement?
- [ ] **Have I checked bearing stress at every pin and contact?**
- [ ] Have I used **projected** area (d × t) for bearing?
- [ ] Am I designing to **yield**, not ultimate?
- [ ] Have I selected and **justified** a factor of safety?
- [ ] Have I avoided stacking multiple safety factors?
- [ ] Have I checked **stiffness separately from strength**?
- [ ] Have I stated the assumed material condition (as-supplied / hardened)?
- [ ] Are internal corners radiused?
- [ ] Am I working consistently in N and mm (giving MPa)?
- [ ] Where a pin bears on soft material, have I specified a hardened bush?

### 24. Beginner exercise
**E0.3.2-B** — A Ø10 mm steel dowel pin carries 6 kN in single shear.
(a) Calculate the shear stress.
(b) If the pin's shear yield is 250 MPa, calculate the factor of safety.
(c) The pin bears on a 12 mm thick plate; calculate the bearing stress.
(d) State which check is more critical if the plate is aluminium with σ_y = 150 MPa `[GUIDE]`.

### 25. Intermediate exercise
**E0.3.2-I** — A fixture tie bar of rectangular section 25 × 10 mm and length 350 mm carries 22 kN in
tension. Material is mild steel (σ_y = 250 MPa, E = 200 GPa) `[GUIDE]`.
(a) Calculate the tensile stress and factor of safety.
(b) Calculate the extension under load.
(c) The bar positions a locator controlling a feature toleranced at ±0.10 mm. State whether the
extension is acceptable and justify your answer.
(d) If not acceptable, calculate the section required to limit extension to 25% of the tolerance.
(e) Comment on whether strength or stiffness governed the final design.

### 26. Advanced exercise
**E0.3.2-A** — A hardened Ø16 mm locating pin (EN19, σ_y = 800 MPa `[GUIDE]`) is press-fitted into a
30 mm thick aluminium fixture plate (σ_y = 140 MPa `[GUIDE]`) and locates a cast-iron workpiece
(σ_UTS = 250 MPa, brittle `[GUIDE]`). The pin carries 18 kN of side load in single shear. The
workpiece hole is 20 mm deep.
(i) Calculate the pin shear stress and FoS (use τ_y = 0.577 σ_y).
(ii) Calculate the bearing stress on the aluminium plate and its FoS.
(iii) Calculate the bearing stress on the cast-iron workpiece and its FoS (use FoS ≥ 6 for brittle
material).
(iv) Identify the governing failure mode.
(v) The fixture is for 80,000 parts/year. Explain what will happen over the fixture's life and why the
static calculation alone is insufficient.
(vi) Propose a complete design solution addressing all failure modes, and recalculate to prove it works.
(vii) State the tolerance-stack-up implication of your solution (forward reference to L23.10).

### 27. Interview questions
1. *"Your fixture deflects too much. Would changing from mild steel to hardened EN19 help?"*
   **Answer:** No. All steels have essentially the same Young's modulus, about 200 GPa, so stiffness is
   unchanged by grade or heat treatment. Heat treatment changes strength, not stiffness. To reduce
   deflection you must change geometry — increase thickness, deepen the section, add ribs, or reduce
   the span. *(Reasoning: deflection depends on E and geometry; only geometry is available to you.)*
2. *"What is bearing stress and why does it matter in fixtures?"*
   **Answer:** It is the crushing stress where two components press together, calculated on the
   projected contact area — for a pin in a hole, `F/(d×t)`. It matters because a pin can be perfectly
   safe in shear while still crushing the plate or workpiece it bears against. The hole elongates
   progressively, location drifts, and parts go out of tolerance over a production run. It is the most
   commonly forgotten check, and the reason hardened bushes exist.

### 28. Expert questions
1. *"A component passes its stress check with FoS 12 but fails in service. What are the likely causes?"*
   **Answer:** An FoS of 12 that still fails tells me the failure mode is not the one I calculated, and
   there are four realistic candidates.
   **Fatigue** is the most likely: static strength is irrelevant to cyclic loading. A component
   experiencing millions of load cycles can fail well below yield, and fixtures on high-volume
   production see exactly that. Fatigue strength may be a third or less of static strength, and it is
   dominated by stress concentrations and surface finish, not by bulk stress.
   **Stress concentration** at a notch, sharp corner, keyway or thread root can multiply local stress
   several-fold, so a nominal FoS of 12 may be a local FoS near 3 or 4.
   **Wrong load** — the calculation used a static or assumed force, but the real load includes impact
   from interrupted cutting, or a load path I did not anticipate.
   **Wrong failure mode entirely** — buckling of a slender member, bearing/crushing at a contact,
   fretting, or deflection causing a functional failure that was never a strength failure at all.
   The diagnostic step is to examine the actual fracture surface: fatigue leaves characteristic beach
   marks and a distinct final-fracture zone, brittle fracture leaves a crystalline surface, and ductile
   overload leaves visible necking. The fracture surface tells you which physics was actually operating,
   and that is far more informative than repeating the calculation that already said the part was fine.
2. *"When is it correct to design a fixture component to deflect?"*
   **Answer:** More often than beginners expect, and in three distinct situations.
   First, **compliant clamping on delicate parts** — thin walls, tubes, sheet metal — where a rigid
   clamp would crush or distort the workpiece. A deliberately compliant element, or a spring-loaded
   support, applies controlled force regardless of small dimensional variation. Here the deflection *is*
   the function.
   Second, **avoiding over-constraint**. If a fourth support is needed for stability on a large part but
   would over-constrain it (Level 4), a deliberately compliant or spring-loaded support carries load
   without imposing position. It supports without locating — which is exactly the distinction taught at
   L6.2.
   Third, **accommodating thermal growth**, particularly in welding fixtures (L38) where the part
   expands substantially while hot. A fully rigid restraint generates enormous thermal stress and can
   crack the weld; controlled compliance in one direction lets the part grow while still controlling
   position in the directions that matter.
   The engineering discipline in all three cases is that the compliance must be **deliberate,
   calculated and in a known direction** — not an accident of an under-designed member. A fixture that
   deflects because you did not check it is a defect; a fixture that deflects by 0.15 mm in one
   specified direction because you designed it to is engineering.

### 29. Summary
Stress is force per unit area, in three forms relevant to fixtures: direct (F/A), shear (F/A_shear,
with single and double arrangements differing by 2×), and bearing on the projected area (F/(d×t)).
Strain is proportional deformation, and Young's modulus links the two, giving axial deflection
ΔL = FL/(AE). All steels share E ≈ 200 GPa, so heat treatment changes strength but never stiffness —
deflection problems require geometry changes. Fixture components are designed to yield strength, since
permanent deformation constitutes failure, with a factor of safety selected according to load
certainty, load type and failure consequence. Bearing stress at contacts is the most frequently
omitted check and the usual cause of progressive location drift.

### 30. Key takeaways
- **σ = F/A** for direct, **τ = F/A_shear** for shear, **σ_b = F/(d×t)** for bearing.
- **Double shear halves the stress** — confirm the arrangement from the assembly.
- **Bearing stress is the forgotten check.** A strong pin can still crush a soft plate.
- **All steels have E ≈ 200 GPa.** Heat treatment changes strength, not stiffness.
- **Deflection problems need geometry changes**, not stronger material.
- **Design to yield**, not ultimate — permanent deformation is failure.
- **Strength and stiffness are independent.** Check both; fixtures are usually stiffness-governed.
- **Do not stack safety factors.** Apply one, and justify it.
- Work in **N and mm** throughout and you get MPa automatically.

---

## LESSON L0.3.3 — FRICTION: THE CLAMPING RESOURCE AND THE LOCATING ENEMY

### 1. Lesson title
**L0.3.3 — Friction: static vs kinetic, coefficient of friction, and why friction is a clamping resource and a locating enemy**

### 2. Learning objective
By the end of this lesson you will be able to calculate friction force from normal load, derive the
clamp force required to resist a given cutting force, understand why friction coefficients carry large
uncertainty, and explain why relying on friction alone to resist cutting forces is poor design practice.

### 3. Prerequisites
L0.3.1, L0.3.2.

### 4. Why the topic matters
**This is the most important lesson in Module 0.3.**

The central equation of clamp force calculation — the one you will use in Level 9 and in every
machining fixture you ever design — is built entirely on friction:

```
F_clamp ≥ (F_cutting × Safety Factor) / (μ × n)
```

Everything hinges on **μ**, the coefficient of friction. And μ is the least reliable number in the
entire calculation: it varies with material pair, surface finish, contamination, coolant, and even how
the surfaces were last cleaned. Published values are ranges, not constants.

Understanding this properly leads to the single most important practical conclusion in machining
fixture design: **do not rely on friction alone to resist cutting forces — use a positive stop.**
Engineers who do not understand friction respond to part movement by increasing clamp force, which
crushes parts and still doesn't reliably work.

Friction also has a second, opposite face. It **helps** you hold parts, but it **hurts** you when
locating them: friction prevents a part from seating fully against its locators, causing the part to
sit in a slightly different position each cycle. That is a repeatability problem, and it is why parts
are sometimes tapped down during loading.

### 5. Simple explanation
Friction is the resistance to sliding between two surfaces in contact.

The harder you press two surfaces together, the more friction you get. That's the whole idea:
```
Friction force = coefficient × pressing force
```

The **coefficient** (μ) depends on what the two surfaces are made of and how rough they are. Steel on
steel, dry, is roughly 0.15. Add oil and it drops to about 0.1 or less.

**Static friction** (before sliding starts) is slightly higher than **kinetic friction** (once sliding).
That's why something takes more effort to start moving than to keep moving — and why once a part
starts to slip in a fixture, it slips more easily.

### 6. Engineering explanation

**The basic friction relationship (Coulomb friction)**
```
F_friction ≤ μ × N
```
where `N` is the normal (perpendicular) force pressing the surfaces together.

Note the **≤**. Friction is a *reactive* force: it only provides as much resistance as is needed, up to
its maximum. The maximum available is `μN`. If the applied force exceeds that, sliding begins.

**Static vs kinetic friction**
```
μ_static > μ_kinetic       typically μ_kinetic ≈ 0.7–0.8 × μ_static  [GUIDE]
```
Design using **static** friction (you want to prevent motion starting), but understand that once
slipping begins, the resistance drops — which is why slip tends to be sudden and progressive rather
than gradual. This is also a cause of stick-slip chatter.

**Typical coefficients of static friction** `[GUIDE] — these are ranges, not constants, and must be
confirmed for your specific conditions:`

| Contact pair | μ (dry) | μ (lubricated / with coolant) |
|---|---|---|
| Steel on steel, machined | 0.15 – 0.25 | 0.08 – 0.15 |
| Steel on cast iron | 0.15 – 0.25 | 0.08 – 0.15 |
| Steel on aluminium | 0.20 – 0.30 | 0.10 – 0.18 |
| Hardened steel on hardened steel, ground | 0.10 – 0.20 | 0.05 – 0.12 |
| Serrated / knurled gripper on steel | 0.30 – 0.50 | 0.25 – 0.40 |

> **Critical caution:** these values vary by a factor of 2 or more depending on surface finish,
> cleanliness, oxide films, coolant type and contact pressure. In a machining environment with flood
> coolant, **assume the lubricated value.** A calculation using dry μ on a coolant-flooded fixture is
> optimistic by roughly 100%. Any friction-based design decision must therefore carry a healthy safety
> factor, and must be confirmed by trial.

**The clamp force equation**
For a part held by friction alone against a cutting force:
```
Required friction = F_cutting × SF
Available friction = μ × F_clamp × n         (n = number of clamping/contact faces)

Therefore:
    F_clamp ≥ (F_cutting × SF) / (μ × n)
```

This is the equation you will use throughout Level 9. Note how brutally sensitive it is to μ: halving
μ doubles the required clamp force.

**Why friction is the LOCATING enemy**

When a part is pushed toward a locator, friction at the *support* surface resists that motion:

```
Part must slide across the rest pads to reach the side locator.
Friction at the pads opposes this sliding.
If the seating force is less than the friction, the part STOPS SHORT
of the locator — and sits in a different position each cycle.
```

This produces a repeatability error that no amount of clamp force fixes — in fact more clamp force
makes it *worse*, because it increases the normal force and therefore the friction opposing seating.

Practical solutions:
- Apply the **seating force before full clamping** (clamp sequence matters — L8.1.5)
- Use **low-friction** rest pads where the part must slide to seat
- Design the clamp to push the part **toward** its locators (L8.1.2)
- Tap the part into position during loading (common practice, but it is an operator-dependent
  workaround, not a design solution)

**Why you should not rely on friction alone**

Four reasons, in order of importance:
1. **μ is uncertain** — a factor of 2 spread is normal
2. **Coolant reduces μ unpredictably** — and coolant concentration changes over time
3. **Chips and contamination change μ** — a chip under the part changes everything
4. **Friction failure is sudden** — once slip starts, μ drops and the part moves fast

**The correct approach:** provide a **positive stop** (a solid abutment) against the main cutting
force direction. The stop takes the load in compression, not friction. Friction and clamping then only
have to prevent lifting and secondary movements. This converts an uncertain friction problem into a
certain geometry problem.

> **Design principle:** Let geometry resist force wherever you can. Use friction only for what geometry
> cannot handle.

### 7. Terminology

| Term | Definition |
|---|---|
| **Friction** | Resistance to relative sliding between contacting surfaces |
| **Coefficient of friction (μ)** | Ratio of friction force to normal force; dimensionless |
| **Normal force (N)** | Force perpendicular to the contact surface |
| **Static friction** | Friction before sliding begins (higher) |
| **Kinetic friction** | Friction during sliding (lower) |
| **Stick-slip** | Alternating sticking and slipping causing juddering motion |
| **Positive stop** | A solid abutment resisting force by contact, not friction |
| **Seating force** | Force applied to push a part against its locators |
| **Self-locking** | A mechanism that cannot be back-driven, due to friction |
| **Friction angle** | φ = arctan(μ); the angle at which sliding begins on an incline |

### 8. Principle

> **DO NOT RELY ON FRICTION ALONE TO RESIST CUTTING FORCES. USE A POSITIVE STOP.**
> μ is the least reliable number in your calculation — it varies by a factor of 2 with coolant,
> finish and contamination.
> And remember friction's second face: it **helps** you clamp, but it **prevents** parts from seating
> against locators. More clamp force makes seating worse, not better.

### 9. Industrial application

**The right way and the wrong way to resist a milling force:**

```
WRONG — friction only

     F_cut →  ┌─────────────┐
              │  WORKPIECE  │        Cutting force resisted ONLY
              └─────────────┘        by friction under the part.
     ═══════════════════════════     Requires large clamp force.
                                     Fails unpredictably when
     Required clamp force:           coolant reduces μ.
       F_clamp = F_cut × SF / μ
       = 5000 × 2 / 0.12
       = 83,300 N   ← enormous, will likely deform the part


RIGHT — positive stop

              ┌─────────────┐ ║
     F_cut →  │  WORKPIECE  │ ║ ← positive stop takes the
              └─────────────┘ ║   cutting force in COMPRESSION
     ═══════════════════════════
                                     Clamp force now only needs to
     Required clamp force:           prevent LIFTING and secondary
       enough to prevent lift        movement — typically a small
       and hold against secondary    fraction of the above.
       forces — perhaps 8,000 N
```

**The improvement is roughly tenfold**, and the design is no longer sensitive to μ. This single
decision — add a stop — is one of the highest-value moves available in machining fixture design, and
it is why "clamp against a solid abutment" is a rule you will see repeatedly from Level 8 onward.

**The seating problem in practice:**

An operator loads a part, tightens the clamps, and machines it. Parts vary by 0.15 mm in one direction
with no obvious cause. The reason: the part is resting on rest pads with μ ≈ 0.2, and the operator's
push is insufficient to overcome friction and seat it fully against the side locator. Some parts seat;
some stop short. The fix is not more clamp force — it is a clamping sequence that seats the part
before locking it, or a clamp angled to push the part toward its locators.

### 10. Design rules
- **R1** — Provide a **positive stop** against the primary cutting force. Never resist it by friction alone.
- **R2** — Use the **lubricated** μ value for any coolant-flooded machining operation.
- **R3** — Apply a safety factor of at least 2 on friction-based holding calculations `[PRACTICE]`.
- **R4** — Design the clamping **sequence** so the part is seated against locators before final clamping.
- **R5** — Direct clamp force **toward** locators so clamping assists seating rather than opposing it.
- **R6** — Where a part must slide to seat, use **low-friction** contact; where it must grip, consider
  serrated pads (accepting that they mark the part).
- **R7** — Never respond to part movement by simply increasing clamp force — diagnose whether the real
  problem is sliding, tipping, or seating.
- **R8** — State the assumed μ explicitly in your calculation, with its source, and note that it must
  be confirmed by trial.

### 11. Rules of thumb
- Steel on steel with coolant: assume **μ ≈ 0.10–0.15** for design `[GUIDE]`, and confirm by trial.
- Friction-based clamp force requirements are typically **5–10× larger** than the cutting force being
  resisted — which is itself the argument for a positive stop.
- Serrated pads roughly **double** available friction but leave marks — unacceptable on finished or
  cosmetic surfaces `[PRACTICE]`.
- If your calculated clamp force seems implausibly large, you are probably resisting a force by
  friction that should be taken by a stop.
- A part that seats inconsistently is usually a **friction/sequence** problem, not a clamp force problem.

### 12. Formulae

**Friction force**
```
F_friction ≤ μ × N
```

**Required clamp force (friction-based holding)**
```
F_clamp ≥ (F_cutting × SF) / (μ × n)
```

**With part weight assisting (horizontal surface, downward cut component)**
```
F_clamp ≥ [(F_cutting × SF) / μ] − W
```

**Friction angle**
```
φ = arctan(μ)
```
Sliding begins on an incline when the incline angle exceeds φ. This is the basis of self-locking in
cam and wedge clamps (L8.2.5).

**Self-locking condition (wedge/cam)**
```
Self-locking if:   incline angle α < φ = arctan(μ)
```

| Variable | Meaning | SI unit |
|---|---|---|
| F_friction | Friction force | N |
| μ | Coefficient of friction | dimensionless |
| N | Normal force | N |
| F_clamp | Clamping force | N |
| F_cutting | Cutting force to be resisted | N |
| SF | Safety factor | dimensionless |
| n | Number of friction faces | dimensionless |
| W | Part weight | N |
| φ | Friction angle | degrees |

### 13. Worked numerical example

**Problem:** This continues the part from L0.3.1 §13, which passed the tipping check with a stability
ratio of 3.31. The same steel block (mass 12 kg) is held by a single clamp delivering 4,800 N. A
horizontal end-milling force of 2,400 N acts on it. The part sits on steel rest pads with flood
coolant.

Determine: (a) available friction with a single clamp, (b) whether the part will slide using a safety
factor of 2.0, (c) the clamp force required if friction alone must resist the cut, (d) the required
clamp force if a positive stop is fitted, (e) a recommendation.
Use μ = 0.12 (steel on steel, coolant-lubricated) `[GUIDE]`.

```
GIVEN:
  Clamp force delivered      F_clamp = 4,800 N                  [from L0.3.1]
  Horizontal cutting force   F_cut   = 2,400 N                  [PROJ]
  Part mass                  m       = 12 kg                    [PROJ]
  Coefficient of friction    μ       = 0.12 (steel/steel,
                                       coolant-lubricated)      [GUIDE]
  Required safety factor     SF      = 2.0                      [PRACTICE]
  Gravity                    g       = 9.81 m/s²                [STD]
  Number of friction faces   n       = 1 (part sits on pads)

REQUIRED:
  (a) Available friction force
  (b) Slide check with SF = 2.0
  (c) Clamp force required for friction-only holding
  (d) Clamp force required with a positive stop fitted
  (e) Engineering recommendation

ASSUMPTION:
  1. μ = 0.12 for machined steel on steel with flood coolant.
     THIS IS THE LEAST RELIABLE NUMBER IN THE CALCULATION.
     Published ranges span 0.08–0.15 for this pair; the value
     MUST BE CONFIRMED BY TRIAL. [GUIDE]
  2. The normal force pressing the part onto the pads is the
     clamp force PLUS the part weight (both act downward).
  3. Static friction used, as we are preventing motion starting.
  4. Single friction interface (part on pads). Side contact with
     locators is not counted as a friction face.
  5. Steady cutting force; interrupted-cut impact not included
     (L9.1.4). [EX-ASSUMED]

FORMULA:
  (a) N = F_clamp + W ;   F_friction = μ × N
  (b) Slide safety = F_friction / F_cut ;  compare to SF
  (c) F_clamp ≥ (F_cut × SF)/μ − W
  (d) With a stop, clamping resists only lifting/secondary loads

VARIABLE DEFINITIONS:
  As tabulated in §12 above.

UNIT CONVERSION:
  W = m × g = 12 × 9.81 = 117.72 N
  All forces in N.

SUBSTITUTION AND CALCULATION:

  (a) AVAILABLE FRICTION
      N          = 4800 + 117.72 = 4,917.72 N
      F_friction = 0.12 × 4917.72
                 = 590.13 N

  (b) SLIDE CHECK
      Available friction  = 590.13 N
      Cutting force       = 2,400 N

      Slide safety ratio  = 590.13 / 2400
                          = 0.246

      Required            = 2.0
      Achieved            = 0.246

  (c) CLAMP FORCE FOR FRICTION-ONLY HOLDING
      Required friction = F_cut × SF = 2400 × 2.0 = 4,800 N
      Required normal   = 4800 / 0.12 = 40,000 N
      Required clamp    = 40,000 − 117.72
                        = 39,882 N   ≈ 39.9 kN

  (d) WITH A POSITIVE STOP
      The stop takes the 2,400 N horizontal force in compression.
      Clamping now only resists lifting and secondary forces.
      Taking the vertical/lifting component as, say, 30 % of the
      main force [EX-ASSUMED — must be determined from the actual
      cutting geometry]:
        F_lift  = 0.30 × 2400 = 720 N
        F_clamp ≥ 720 × 2.0   = 1,440 N
      The existing 4,800 N clamp is more than adequate.

RESULT:
  ┌────────────────────────────────┬────────────────────────┐
  │ (a) Available friction         │    590 N               │
  │ (b) Slide safety ratio         │    0.246  (need 2.0)   │
  │ (c) Clamp needed, friction only│ 39,882 N  (≈ 8× more)  │
  │ (d) Clamp needed, with stop    │  1,440 N  ✓ have 4,800 │
  └────────────────────────────────┴────────────────────────┘

SAFETY FACTOR:
  Required : 2.0
  Achieved : 0.246
  Shortfall factor = 2.0 / 0.246 = 8.1×

PASS/FAIL:
  ✗ CATASTROPHIC FAIL on sliding. The available friction of 590 N
  resists only 25 % of the 2,400 N cutting force even WITHOUT any
  safety factor. The part will slide immediately.

ENGINEERING CONCLUSION:
  THIS IS THE MOST IMPORTANT RESULT IN MODULE 0.3.

  The identical part, with the identical clamp, PASSED the tipping
  check in L0.3.1 with a comfortable stability ratio of 3.31 — and
  FAILS the sliding check by a factor of 8.

  This is precisely why L0.3.1 R3 requires BOTH checks. An engineer
  who checked only tipping would have released this fixture with
  confidence, and the part would have slid on the first cut.

  THE TWO POSSIBLE RESPONSES:

  RESPONSE 1 — INCREASE CLAMP FORCE TO 39.9 kN  ✗ WRONG
    - Requires an enormous clamping system (hydraulic)
    - 39.9 kN on a 12 kg part will very likely deform it
    - Still entirely dependent on μ, which could be 0.08 in
      practice, requiring 60 kN
    - Expensive, fragile, and treats the symptom

  RESPONSE 2 — FIT A POSITIVE STOP  ✓ CORRECT
    - Cutting force resisted by solid contact, in compression
    - Required clamp force drops from 39,882 N to about 1,440 N
    - A 28-fold reduction
    - No longer sensitive to μ at all
    - The existing 4,800 N clamp becomes more than sufficient
    - Costs one machined block

  RECOMMENDATION: Fit a positive stop against the cutting force
  direction. This is not merely the better option; relying on
  friction here is not a viable engineering solution at all.

  ─────────────────────────────────────────────────────────
  THE GENERAL LESSON:
  If a clamp force calculation produces an implausibly large
  number, do not accept it and specify a bigger clamp. Ask why
  the number is large. It is almost always because a force is
  being resisted by friction when it should be resisted by
  GEOMETRY. Let geometry take the load; use friction only for
  what geometry cannot handle.
  ─────────────────────────────────────────────────────────

SENSITIVITY NOTE:
  The friction-only requirement is inversely proportional to μ:
     μ = 0.15 → F_clamp = 31,882 N
     μ = 0.12 → F_clamp = 39,882 N   (our case)
     μ = 0.08 → F_clamp = 59,882 N
  A plausible variation in μ swings the requirement by 28 kN.
  Note that the positive-stop solution is COMPLETELY INSENSITIVE
  to this uncertainty — which is its real engineering value, over
  and above the force reduction.
```

### 14. Engineering assumptions
- μ = 0.12 for coolant-lubricated machined steel on steel `[GUIDE]` — the dominant uncertainty; must be
  confirmed by trial.
- Normal force = clamp force + weight (both downward).
- Static friction, appropriate for preventing motion onset.
- Single friction interface; side-locator contact not counted.
- Lifting component assumed at 30% of the main cutting force `[EX-ASSUMED]` — must be determined from
  actual cutting geometry (L9.1.2).
- Steady cutting force; interrupted-cut impact factor excluded (L9.1.4).

### 15. Diagram

```
     FRICTION — THE TWO FACES
     (instructional schematic)

  FACE 1 — FRICTION AS THE CLAMPING RESOURCE

              F_clamp ↓
        ┌───────────────────┐
        │                   │
  F_cut →│    WORKPIECE     │
        │                   │
        └───────────────────┘
     ←──── F_friction = μN ────→
     ═══════════════════════════
        N = F_clamp + W

     Part held by friction. Available resistance = μ × N.
     ✓ Simple    ✗ μ is uncertain, coolant halves it

  ──────────────────────────────────────────────────────────

  FACE 2 — FRICTION AS THE LOCATING ENEMY

     Operator pushes part toward the locator →

        push →┌───────────────┐ ║  ← locator
              │   WORKPIECE   │ ║      (part should
              └───────────────┘ ║       touch here)
              ←── friction      ║
     ═══════════════════════════      GAP! ↑
                                      part stopped short

     Friction at the pads OPPOSES seating.
     If push < friction, the part stops short of the locator
     and sits differently every cycle.

     ┌──────────────────────────────────────────────────────┐
     │ MORE CLAMP FORCE MAKES THIS WORSE, NOT BETTER.       │
     │ It increases N, which increases the friction that    │
     │ is preventing the part from seating.                 │
     └──────────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

     THE CENTRAL DESIGN DECISION

  FRICTION ONLY                    POSITIVE STOP
  ┌─────────────────┐              ┌─────────────────┐ ║
  │                 │              │                 │ ║
F→│    WORKPIECE    │            F→│    WORKPIECE    │ ║
  │                 │              │                 │ ║
  └─────────────────┘              └─────────────────┘ ║
  ═══════════════════              ═══════════════════
   resisted by μN                   resisted by CONTACT

  F_clamp = 39,882 N               F_clamp = 1,440 N
  sensitive to μ                   insensitive to μ
  ✗                                 ✓  28× less clamp force

  ──────────────────────────────────────────────────────────

     WHY μ IS UNRELIABLE  [GUIDE — confirm by trial]

     steel/steel dry ........... 0.15 – 0.25
     steel/steel + coolant ..... 0.08 – 0.15   ← use this for
                                                 machining
     serrated pad on steel ..... 0.30 – 0.50   ← but marks part

     ┌──────────────────────────────────────────────────────┐
     │ A FACTOR-OF-2 SPREAD IS NORMAL.                      │
     │ Any friction-based design needs a safety factor      │
     │ AND confirmation by trial.                           │
     └──────────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

     THE SAME PART, TWO CHECKS, OPPOSITE VERDICTS

     ┌─────────────────┬──────────────┬──────────┐
     │ Check           │ Result       │ Verdict  │
     ├─────────────────┼──────────────┼──────────┤
     │ TIPPING (L0.3.1)│ ratio 3.31   │ ✓ PASS   │
     │ SLIDING (here)  │ ratio 0.246  │ ✗ FAIL   │
     └─────────────────┴──────────────┴──────────┘

     CHECK BOTH. ALWAYS.
```

### 16. Drawing example
Not a drawing lesson. One drawing implication: a **positive stop** must be shown on the fixture
assembly drawing as a distinct component with its own part number, and its position must be
dimensioned from the fixture datum with an explicit tolerance — because it now controls part position,
not merely resists force. A stop drawn as an afterthought without dimensional control becomes an
uncontrolled locator, which is a datum error (catalogued at L55.1).

### 17. CAD workflow
No specific CAD operation. One modelling implication: when you add a positive stop, you have added a
**locating element**, so it must be modelled with the same rigour as any locator — correct position,
correct tolerance, hardened contact face if wear is expected, and included in the interference and
tool-clearance checks (L24.3.4).

A common CAD-stage error is to add a stop late, purely as a force-resisting block, and forget that it
now touches the part and therefore participates in location. If it touches the part, it locates the
part, whether you intended it to or not.

### 18. GD&T application
Not applicable at this lesson. Forward link: once a positive stop contacts the part, it becomes a
**datum feature simulator** (L21.2.1) and must be toleranced accordingly — typically to 10–20% of the
part tolerance it controls (L22.1). This is the direct connection between a force-resisting decision
made here in Module 0.3 and the GD&T scheme you will develop at Level 22.

### 19. Manufacturing method
Not applicable at this lesson. Practical note: the contact face of a positive stop wears, and wear
changes part position. On high-volume fixtures the stop face should be hardened, or made as a
replaceable insert (L17.2.2, L19.5). Wear allowance must then be budgeted in the tolerance stack-up
(L23.10).

### 20. Inspection method
Not applicable at this lesson. Practical note: friction coefficient can be measured directly with a
simple inclined-plane test — raise the incline until sliding begins, and μ = tan(angle). This takes ten
minutes and is worth doing when a friction-critical design cannot be avoided, because it replaces a
published range with a measured value for your actual materials, finishes and coolant.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Relying on friction alone to resist cutting force** | Enormous required clamp force; unpredictable failure |
| 2 | Using dry μ for a coolant-flooded operation | Optimistic by ~100%; part slides |
| 3 | Responding to part movement by increasing clamp force | Part deformed and still moves; symptom treated, not cause |
| 4 | Not checking sliding (only checking tipping) | The failure mode demonstrated in §13 |
| 5 | Ignoring friction's effect on **seating** | Inconsistent part position; repeatability error |
| 6 | Assuming more clamp force improves seating | It makes seating worse |
| 7 | Not stating the assumed μ and its source | Calculation unauditable |
| 8 | Using kinetic μ when preventing motion onset | Slightly unconservative |
| 9 | Counting side-locator contact as a friction face | Overestimates available friction |
| 10 | Adding a stop without dimensioning/tolerancing it | Uncontrolled locator; datum error |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Part slides under cut despite heavy clamping | Friction insufficient; no positive stop | Calculate available friction vs cutting force | **Fit a positive stop** | Design stops against primary cutting forces |
| Part position varies cycle to cycle | Friction preventing full seating | Load part, check gap at locator with feeler | Revise clamp sequence; reduce pad friction; angle clamp toward locator | Seat before clamping |
| Fixture worked dry, fails with coolant | μ dropped by ~50% with coolant | Recalculate with lubricated μ | Fit positive stop | Always design using lubricated μ |
| Part deformed by clamping | Over-clamping to compensate for insufficient friction | Compare clamp force to calculated need | Fit stop; reduce clamp force | Never resist cutting force by friction alone |
| Intermittent slipping / juddering | Stick-slip (static μ > kinetic μ) | Observe motion at low feed | Fit positive stop; increase rigidity | Avoid friction-critical designs |
| Part position drifts over months | Stop face wear | Measure stop position against drawing | Replace hardened insert | Harden stop face; budget wear in stack-up |

### 23. Design checklist
- [ ] Have I identified the primary cutting force direction?
- [ ] **Is there a positive stop resisting it?**
- [ ] If relying on friction, have I used the **lubricated** μ value?
- [ ] Have I stated the assumed μ and its source?
- [ ] Have I applied a safety factor of at least 2 on friction-based holding?
- [ ] Have I checked **sliding** as well as tipping?
- [ ] Does my clamping **sequence** seat the part before final clamping?
- [ ] Does the clamp force push the part **toward** its locators?
- [ ] Have I considered whether friction will prevent the part from seating?
- [ ] If I added a positive stop, is it dimensioned, toleranced and treated as a locator?
- [ ] Is the stop face hardened or replaceable if wear is expected?
- [ ] Have I planned to confirm μ by trial rather than trusting a published range?

### 24. Beginner exercise
**E0.3.3-B** — A part is held by a clamp force of 6 kN on steel rest pads with μ = 0.15 `[GUIDE]`. Part
weight is negligible.
(a) Calculate the available friction force.
(b) A horizontal cutting force of 1.2 kN is applied. Calculate the safety ratio against sliding.
(c) State whether it passes a required safety factor of 2.0.
(d) State what you would do if it failed.

### 25. Intermediate exercise
**E0.3.3-I** — A 25 kg aluminium part is machined with a horizontal cutting force of 3.6 kN. It sits on
steel pads with flood coolant (μ = 0.13 `[GUIDE]`).
(a) Calculate the clamp force required to hold it by friction alone with SF = 2.0.
(b) Comment on whether this clamp force is practical for an aluminium part.
(c) A positive stop is fitted; the lifting force component is 25% of the cutting force. Calculate the
new required clamp force with SF = 2.0.
(d) Calculate the ratio between the two answers.
(e) Recalculate (a) if μ turns out to be only 0.09, and comment on what this demonstrates about
friction-based design.

### 26. Advanced exercise
**E0.3.3-A** — A thin-walled aluminium housing (mass 4 kg, wall thickness 3 mm) requires face milling
with a cutting force of 2,800 N horizontal and 1,600 N vertical downward. The part cannot tolerate more
than 3,000 N of total clamp force without distorting (established by trial). Coolant-flooded, steel
pads, μ = 0.11 `[GUIDE]`.
(i) Calculate whether friction alone can hold the part within the 3,000 N clamp limit, using SF = 2.0.
(ii) Calculate the clamp force friction-only holding would actually require, and state the factor by
which it exceeds the part's limit.
(iii) Design a solution using positive stops. Specify how many stops, in which directions, and
recalculate the required clamp force.
(iv) The vertical cutting force acts downward — explain whether this helps or hinders, and quantify its
effect on available friction.
(v) Explain why increasing μ using serrated pads would be unacceptable for this part, and identify two
part characteristics that make it unsuitable.
(vi) State how you would experimentally confirm μ for this specific combination before releasing the
fixture, and what you would do if the measured value were 0.07.

### 27. Interview questions
1. *"How much clamp force do you need to resist a 5 kN cutting force?"*
   **Answer:** The question as posed cannot be answered responsibly, and that is the correct response.
   If friction alone resists it, `F_clamp = F_cut × SF / μ` — with μ = 0.12 and SF = 2, that is over
   83 kN, which would likely deform the part. The proper engineering answer is to fit a positive stop
   so the cutting force is taken in compression, after which the clamp only needs to prevent lifting —
   typically a small fraction of that. *(Reasoning: the question assumes friction-based holding, which
   is usually the wrong design.)*
2. *"Why does coolant matter to a fixture engineer?"*
   **Answer:** Because it roughly halves the coefficient of friction. A fixture designed with dry
   μ ≈ 0.2 and running with coolant at μ ≈ 0.1 has only half the holding capability it was designed
   for. Always calculate using the lubricated value for coolant-flooded machining.

### 28. Expert questions
1. *"A fixture works reliably for six months, then parts start moving under cut. Nothing has been
   changed. What happened?"*
   **Answer:** "Nothing changed" is almost never true; something changed slowly enough not to be
   noticed, and with friction there are five realistic candidates.
   **Coolant condition** is the most likely: concentration drifts as water evaporates and is topped up,
   tramp oil accumulates from way lubricant, and both alter μ. A coolant that has become oilier gives
   lower friction than when the fixture was commissioned.
   **Surface condition of the pads** — six months of loading polishes the contact faces. A ground pad
   that started at Ra 0.8 and has burnished to a mirror finish has lower μ.
   **Contamination** — a build-up of fine swarf, or a film of oil, changes the interface entirely.
   **Clamp force loss** — bolts relaxing, a pneumatic regulator drifting down, a spring weakening, or a
   toggle clamp wearing at its pivot. The normal force may simply be lower than it was.
   **Wear at the locators or stops** — allowing slightly more movement before the part is caught.
   The diagnostic sequence is: measure the actual clamp force first because it is quick and it is the
   most common cause; then inspect the pad surfaces and check coolant concentration; then examine
   locator wear.
   The deeper point is that this failure mode is **specific to friction-dependent designs**. A fixture
   with a proper positive stop would not have degraded this way, because compression contact does not
   care about coolant, polish or contamination. A fixture that quietly deteriorates over months is
   usually telling you it was friction-dependent by design.
2. *"When is it legitimate to rely on friction as a primary holding mechanism?"*
   **Answer:** There are genuine cases, and refusing all of them would be dogmatic rather than
   engineering.
   **When geometry offers nothing to push against** — a flat plate being face-milled all over has no
   feature to abut. Vacuum fixtures and magnetic chucks are entirely friction-dependent for the same
   reason, and they are standard, accepted technology.
   **When cutting forces are genuinely small** relative to available friction — light finishing cuts,
   engraving, deburring — where even a pessimistic μ leaves ample margin.
   **When a stop would obstruct the tool path** and no alternative position exists.
   **When the part cannot tolerate point contact** and distributed friction is gentler than a
   concentrated stop.
   The discipline in all these cases is the same: use a **pessimistic** μ, apply a generous safety
   factor, **measure** the actual clamp force at commissioning, and **verify by cutting trial** rather
   than by calculation alone. Vacuum-fixture designers do exactly this — they calculate holding force
   conservatively and then prove it with a test cut, because they know they have no geometric backup.
   What is not legitimate is relying on friction by **default**, without having asked whether a stop
   was possible. That is the distinction: friction as a considered choice with verification is
   engineering; friction as an unexamined assumption is negligence.

### 29. Summary
Friction resists sliding with a maximum of μN, where μ depends on the material pair, surface finish,
lubrication and contamination, and typically varies by a factor of two. Static friction exceeds kinetic
friction, so slip tends to be sudden. Friction is the basis of the clamp force equation
`F_clamp ≥ F_cut × SF/(μn)`, but the large uncertainty in μ, together with coolant reducing it by
roughly half, makes friction-only holding both expensive in clamp force and unreliable. The correct
approach is a positive stop resisting the primary cutting force in compression, reducing required clamp
force by an order of magnitude and eliminating sensitivity to μ. Friction also opposes part seating
against locators, producing repeatability errors that increased clamp force worsens rather than fixes.

### 30. Key takeaways
- **`F_friction ≤ μN`** — friction is reactive, providing only what is needed up to its maximum.
- **`F_clamp ≥ F_cut × SF / (μ × n)`** — the central clamp force equation of Level 9.
- **μ is the least reliable number in fixture engineering** — a factor-of-2 spread is normal.
- **Coolant halves μ.** Always design with the lubricated value for machining.
- **Do not rely on friction alone. Fit a positive stop.** It reduced the required clamp force 28× in
  §13 and removed all μ-sensitivity.
- **If a clamp force calculation gives an implausible number, geometry is missing** — find the stop
  you should have fitted.
- **Friction opposes seating.** More clamp force makes seating worse, not better.
- **Check sliding AND tipping.** The same part passed tipping at 3.31 and failed sliding at 0.246.
- A positive stop that touches the part **is a locator** — dimension, tolerance and harden it.

---

## LESSON L0.3.4 — DEFLECTION AND STIFFNESS

### 1. Lesson title
**L0.3.4 — Deflection intuition: stiffness k = F/δ, cantilever vs simply supported, and why span cubed matters**

### 2. Learning objective
By the end of this lesson you will be able to calculate beam deflection for the standard load cases,
apply the second moment of area to rectangular sections, explain why deflection scales with the cube
of span and the cube of thickness, and determine whether a fixture member is stiff enough for the
tolerance it must hold.

### 3. Prerequisites
L0.3.1, L0.3.2.

### 4. Why the topic matters
This lesson completes the physics foundation and answers the question that Level 10 is built on:
**how thick does the base plate need to be?**

The critical insight is one you met at L0.3.2 §8 and will now quantify: fixture members are usually
**stiffness-limited, not strength-limited**. A base plate that will never come close to yielding may
still deflect 0.15 mm under cutting load — and if it carries a locator controlling a ±0.05 mm feature,
that fixture cannot work no matter how strong it is.

The second insight is the cube relationships, which are the most useful pieces of engineering intuition
in fixture design:
- **Deflection ∝ span³** — halving the span reduces deflection to one-eighth
- **Deflection ∝ 1/thickness³** — doubling the thickness reduces deflection to one-eighth

These two facts let you make good design decisions in your head, before any calculation.

### 5. Simple explanation
Push on something and it bends a little. **Stiffness** is how much force it takes to bend it a given
amount.

Three things control how much a beam bends:
1. **How hard you push** (force) — more force, more bend, proportionally
2. **How long the span is** — this matters enormously: double the span and it bends **eight times** more
3. **How deep the section is** — this also matters enormously: double the thickness and it bends
   **eight times** less

The material matters too, but much less than you'd think — and for steels it doesn't vary at all.

### 6. Engineering explanation

**Stiffness**
```
k = F / δ
```
Units N/mm. A stiff member has high k: large force produces small deflection.

**The general form of beam deflection**
```
δ = (C × F × L³) / (E × I)
```
where `C` is a coefficient depending on the loading and support conditions. Note immediately:
- δ ∝ F (linear)
- δ ∝ **L³** (cubic — dominant)
- δ ∝ 1/E (material stiffness)
- δ ∝ 1/I (section geometry)

**Standard load cases** `[STD — standard beam theory]`

| Case | Deflection formula | C |
|---|---|---|
| Cantilever, point load at free end | `δ = FL³/(3EI)` | 1/3 |
| Cantilever, uniformly distributed load | `δ = wL⁴/(8EI)` | — |
| Simply supported, central point load | `δ = FL³/(48EI)` | 1/48 |
| Simply supported, uniformly distributed load | `δ = 5wL⁴/(384EI)` | — |
| Both ends fixed, central point load | `δ = FL³/(192EI)` | 1/192 |

> **Compare the coefficients:** a cantilever deflects **16 times** more than a simply supported beam of
> the same span and load (1/3 vs 1/48), and **64 times** more than a fixed-fixed beam (1/3 vs 1/192).
> This is why cantilevered locators are a rigidity crime (a rule you will meet formally at L10.1.4) and
> why support conditions matter as much as section size.

**Second moment of area (I)**

For a rectangular section of width `b` and depth `h`, bending about the horizontal axis:
```
I = b h³ / 12
```

**The depth is cubed.** This is the single most exploitable fact in fixture structural design:
- Doubling the **width** b → I doubles → deflection halves
- Doubling the **depth** h → I increases 8× → deflection falls to one-eighth

**Orientation matters enormously.** A 20 × 60 mm bar has:
- Depth 60 mm: `I = 20 × 60³/12 = 360,000 mm⁴`
- Depth 20 mm: `I = 60 × 20³/12 = 40,000 mm⁴`

A **9-fold difference** from the same piece of steel, simply by which way up it is. Getting a rib
orientation wrong is therefore not a small error.

**For a plate** treated as a beam of unit width, or for a full plate `b × h` where h is the thickness,
the same `bh³/12` applies — which is why plate thickness is so powerful.

**The material fact, restated**
```
E_steel ≈ 200 GPa   for ALL steels, regardless of grade or heat treatment
E_aluminium ≈ 70 GPa
E_cast iron ≈ 100–140 GPa
```
Aluminium deflects roughly **3× more** than steel for identical geometry `[GUIDE]`. Changing steel
grade changes deflection by **zero**.

**The design question: how much deflection is acceptable?**

Fixture deflection consumes part tolerance. The rule of thumb:

> **Fixture deflection should not exceed 10–20% of the part tolerance it affects** `[GUIDE] —
> must be confirmed against the full error budget (L23.11).`

For a ±0.05 mm feature (0.10 mm total tolerance), fixture deflection should stay under roughly
0.01–0.02 mm. This is a demanding requirement, and it is why fixture base plates are far thicker than
strength alone would ever justify.

### 7. Terminology

| Term | Definition | SI unit |
|---|---|---|
| **Deflection (δ)** | Displacement under load | mm |
| **Stiffness (k)** | Force per unit deflection, F/δ | N/mm |
| **Second moment of area (I)** | Geometric resistance to bending | mm⁴ |
| **Section modulus (Z)** | I/y; used for bending stress | mm³ |
| **Cantilever** | Beam fixed at one end, free at the other | — |
| **Simply supported** | Beam resting on supports at both ends | — |
| **Fixed (encastré)** | End restrained against rotation as well as translation | — |
| **Span (L)** | Distance between supports | mm |
| **Uniformly distributed load (UDL)** | Load spread evenly along the length | N/mm |
| **Neutral axis** | Line through the section where bending stress is zero | — |
| **Rib** | Stiffening web added to increase effective depth | — |

### 8. Principle

> **DEFLECTION SCALES WITH SPAN CUBED AND INVERSELY WITH THICKNESS CUBED.**
> Halving the span, or doubling the thickness, each reduce deflection to **one-eighth**.
> Fixture members are usually **stiffness-limited, not strength-limited** — and since all steels share
> the same E, the only levers available are **geometry and support conditions**.

### 9. Industrial application

**The three deflection questions a fixture engineer answers routinely:**

```
1. BASE PLATE THICKNESS
   How thick must the base be so that cutting forces do not
   deflect the locators beyond the tolerance budget?     (L20.3.2)

2. SUPPORT SPACING
   How far apart can the supports be?  Remember L³ —
   adding one support in the middle halves the span and
   cuts deflection to 1/8.                              (L20.3.2)

3. RISER / LOCATOR OVERHANG
   A cantilevered locator deflects 16× more than a
   supported one. Can I support it at both ends?        (L10.1.4)
```

**The design move that costs nothing:**

A base plate spanning 400 mm between supports deflects δ. Add a single support in the middle:
- Span becomes 200 mm (halved)
- Deflection becomes (1/2)³ = **1/8** of the original
- Plus the support condition improves from simply-supported toward continuous

One extra support block — a few hundred rupees — achieves what would otherwise require doubling the
plate thickness (which also cuts deflection to 1/8, but adds substantial mass, cost and machining).

**Comparing the two options concretely:**

| Option | Deflection change | Cost | Mass change |
|---|---|---|---|
| Add a mid-span support | ÷8 | Low (one block) | Negligible |
| Double the plate thickness | ÷8 | High (2× material + machining) | 2× |

The support wins on every count — which is why experienced fixture designers reach for support spacing
before plate thickness.

### 10. Design rules
- **R1** — Check **stiffness separately from strength**. Passing a stress check proves nothing about
  deflection.
- **R2** — Budget fixture deflection at **10–20% of the part tolerance** it affects `[GUIDE]`.
- **R3** — Reduce **span** before increasing thickness — the L³ relationship makes it far more efficient.
- **R4** — Avoid **cantilevered** locators and supports. A cantilever deflects 16× a simply supported
  member.
- **R5** — Orient rectangular sections with the **depth in the bending direction** — a 9× difference is
  available for free.
- **R6** — Use **ribs** to increase effective depth rather than adding solid material.
- **R7** — Do not change steel grade to reduce deflection. It will not work.
- **R8** — For aluminium fixtures, expect roughly **3× the deflection** of steel and size accordingly.
- **R9** — Locate clamps and cutting loads **over supports** wherever possible, not over unsupported spans.

### 11. Rules of thumb
- **Halve the span → 1/8 the deflection.** **Double the thickness → 1/8 the deflection** `[STD]`.
- Adding one mid-span support is usually cheaper and lighter than doubling plate thickness `[PRACTICE]`.
- A cantilever deflects **16×** a simply supported beam; a fixed-fixed beam deflects **1/4** of a simply
  supported one `[STD]`.
- Fixture base plates are commonly 25–50 mm thick for medium VMC work `[PRACTICE] — highly dependent on
  span, load and tolerance; must be calculated, never assumed.`
- If your stress FoS is above about 10, deflection is almost certainly your governing constraint.
- Ribs are most effective when deep and aligned with the bending direction; shallow ribs achieve little.

### 12. Formulae

**Stiffness**                      `k = F / δ`
**General deflection form**        `δ = C F L³ / (E I)`
**Cantilever, end load**           `δ = F L³ / (3 E I)`
**Simply supported, central load** `δ = F L³ / (48 E I)`
**Fixed both ends, central load**  `δ = F L³ / (192 E I)`
**Simply supported, UDL**          `δ = 5 w L⁴ / (384 E I)`
**Second moment, rectangle**       `I = b h³ / 12`
**Second moment, circle**          `I = π d⁴ / 64`
**Section modulus, rectangle**     `Z = b h² / 6`
**Bending stress**                 `σ = M / Z`

| Variable | Meaning | SI unit |
|---|---|---|
| δ | Deflection | mm |
| k | Stiffness | N/mm |
| F | Point load | N |
| w | Distributed load | N/mm |
| L | Span | mm |
| E | Young's modulus | MPa (steel = 200,000) |
| I | Second moment of area | mm⁴ |
| b | Section width | mm |
| h | Section depth | mm |
| M | Bending moment | N·mm |
| Z | Section modulus | mm³ |

### 13. Worked numerical example

**Problem:** A steel fixture base plate 300 mm long × 150 mm wide × 25 mm thick is supported at both
ends and carries a central cutting load of 4 kN. The plate carries a locator controlling a feature
toleranced at ±0.05 mm.

Determine: (a) the second moment of area, (b) the central deflection, (c) whether it meets a 15%
tolerance-budget criterion, (d) the deflection if thickness is increased to 32 mm, (e) the deflection if
a central support is added instead, (f) a recommendation comparing the two options.

```
GIVEN:
  Plate length (span)        L     = 300 mm                     [PROJ]
  Plate width                b     = 150 mm                     [PROJ]
  Plate thickness            h     = 25 mm                      [PROJ]
  Central cutting load       F     = 4 kN                       [PROJ]
  Steel Young's modulus      E     = 200 GPa                    [GUIDE]
  Part feature tolerance     ±0.05 mm (total 0.10 mm)           [PROJ]
  Deflection budget          15 % of part tolerance             [GUIDE]
  Support condition          simply supported both ends

REQUIRED:
  (a) Second moment of area
  (b) Central deflection under 4 kN
  (c) Comparison against the deflection budget
  (d) Deflection with 32 mm thickness
  (e) Deflection with a central support added (25 mm thickness)
  (f) Engineering recommendation

ASSUMPTION:
  1. Simply supported at both ends. Real bolted fixtures are
     partially fixed, which would give LESS deflection, so this
     is conservative. [PRACTICE]
  2. Central point load — the worst case for a simply supported
     beam. A distributed load would deflect less.
  3. Deflection budget of 15 % of part tolerance. This is a
     guideline; the correct value comes from the full error
     budget including machine, tool and measurement (L23.11).
     MUST BE CONFIRMED for the actual application. [GUIDE]
  4. Self-weight of the plate neglected (small relative to 4 kN).
  5. Plate acts as a simple beam of width b — a reasonable
     approximation for this aspect ratio. A full plate-theory
     solution would differ modestly.

FORMULA:
  (a) I = b h³ / 12
  (b) δ = F L³ / (48 E I)                simply supported, central
  (e) With a central support, each span becomes L/2 = 150 mm

VARIABLE DEFINITIONS:
  As tabulated in §12 above.

UNIT CONVERSION:
  F = 4 kN = 4,000 N
  E = 200 GPa = 200,000 MPa = 200,000 N/mm²
  All lengths in mm → I in mm⁴ → δ in mm

SUBSTITUTION AND CALCULATION:

  (a) SECOND MOMENT OF AREA (25 mm thick)
      I = 150 × 25³ / 12
        = 150 × 15,625 / 12
        = 2,343,750 / 12
        = 195,312.5 mm⁴

  (b) CENTRAL DEFLECTION
      δ = F L³ / (48 E I)
        = (4000 × 300³) / (48 × 200000 × 195312.5)
        = (4000 × 27,000,000) / (48 × 200000 × 195312.5)
        = 108,000,000,000 / 1,875,000,000,000
        = 0.0576 mm

  (c) BUDGET COMPARISON
      Part tolerance total     = 0.10 mm
      Budget at 15 %           = 0.015 mm
      Actual deflection        = 0.0576 mm
      Ratio                    = 0.0576 / 0.015 = 3.84

  (d) THICKNESS INCREASED TO 32 mm
      I = 150 × 32³ / 12
        = 150 × 32,768 / 12
        = 4,915,200 / 12
        = 409,600 mm⁴

      δ = (4000 × 27,000,000) / (48 × 200000 × 409600)
        = 108,000,000,000 / 3,932,160,000,000
        = 0.0275 mm

      Improvement factor = 0.0576 / 0.0275 = 2.10
      Check against cube rule: (32/25)³ = 2.10  ✓ confirms

  (e) CENTRAL SUPPORT ADDED (thickness stays 25 mm)
      Each span L' = 150 mm
      Treating each half as simply supported with the load
      now at a support (conservative approximation: take the
      worst case of a 150 mm span carrying the full load
      centrally):

      δ = (4000 × 150³) / (48 × 200000 × 195312.5)
        = (4000 × 3,375,000) / 1,875,000,000,000
        = 13,500,000,000 / 1,875,000,000,000
        = 0.0072 mm

      Improvement factor = 0.0576 / 0.0072 = 8.0
      Check against cube rule: (300/150)³ = 8  ✓ confirms

RESULT:
  ┌──────────────────────────────┬────────────┬───────────────┐
  │ Configuration                │ Deflection │ vs budget     │
  │                              │            │ (0.015 mm)    │
  ├──────────────────────────────┼────────────┼───────────────┤
  │ (b) 25 mm, 300 mm span       │ 0.0576 mm  │ 3.84×  ✗ FAIL │
  │ (d) 32 mm, 300 mm span       │ 0.0275 mm  │ 1.83×  ✗ FAIL │
  │ (e) 25 mm, central support   │ 0.0072 mm  │ 0.48×  ✓ PASS │
  └──────────────────────────────┴────────────┴───────────────┘

SAFETY FACTOR:
  Option (e): budget 0.015 / actual 0.0072 = 2.08 margin  ✓
  Options (b) and (d) have margins below 1.0 — they fail.

PASS/FAIL:
  (b) ✗ FAIL — 3.84× over budget
  (d) ✗ FAIL — 1.83× over budget, despite 28 % more thickness
  (e) ✓ PASS — comfortable 2.08× margin

ENGINEERING CONCLUSION:
  THE CENTRAL SUPPORT WINS DECISIVELY, AND THE ARITHMETIC SHOWS
  WHY IN A WAY INTUITION ALONE WOULD NOT.

  1. THE STRENGTH CHECK WOULD HAVE PASSED EASILY.
     Bending stress in case (b):
        M = FL/4 = 4000 × 300/4 = 300,000 N·mm
        Z = bh²/6 = 150 × 625/6 = 15,625 mm³
        σ = M/Z = 300,000/15,625 = 19.2 MPa
     Against mild steel yield of 250 MPa, FoS = 13.
     THE PLATE IS 13× STRONGER THAN IT NEEDS TO BE — AND STILL
     DEFLECTS ALMOST 4× TOO MUCH. This is the lesson: strength
     and stiffness are independent, and fixtures are usually
     stiffness-governed. An engineer checking only stress would
     have released this plate with confidence.

  2. INCREASING THICKNESS IS THE WEAK OPTION.
     Going from 25 to 32 mm — a 28 % thickness increase, 28 %
     more material cost, 28 % more mass — gives only a 2.1×
     improvement, and STILL FAILS. To pass by thickness alone
     would need:
        required factor = 3.84
        h_required = 25 × 3.84^(1/3) = 25 × 1.566 = 39.2 mm
     So roughly 40 mm — a 60 % increase in plate thickness,
     mass and material cost.

  3. THE CENTRAL SUPPORT COSTS ALMOST NOTHING.
     One support block. Deflection improves 8× — exactly the
     cube of the span halving, as predicted. The plate stays
     25 mm, the mass stays the same, and the result passes with
     margin to spare.

  RECOMMENDATION: Add a central support. Retain 25 mm thickness.

  This is the practical expression of the L³ rule and the reason
  experienced fixture designers examine SUPPORT SPACING before
  they consider plate thickness.

SENSITIVITY NOTE:
  Ranked by influence on deflection:
    1. SPAN (L³) — halving span gives 8× improvement
    2. THICKNESS (h³) — doubling thickness gives 8× improvement,
       but at 8× the material cost in that dimension
    3. SUPPORT CONDITION — fixed-fixed instead of simply
       supported gives 4× improvement for free, if the bolting
       arrangement can achieve it
    4. LOAD (linear) — usually not within your control
    5. MATERIAL — no options within steels; aluminium is 3× worse
```

### 14. Engineering assumptions
- Simply supported ends; real bolted plates are partially fixed, making this conservative.
- Central point load — the worst case for this support condition.
- 15% deflection budget `[GUIDE]` — must be confirmed against the full error budget (L23.11).
- Self-weight neglected.
- Simple beam theory applied to a plate — reasonable for this aspect ratio; full plate theory would
  differ modestly.
- The central-support case uses a conservative approximation; a continuous-beam analysis would show
  slightly less deflection still.

### 15. Diagram

```
     DEFLECTION — THE THREE THINGS THAT MATTER
     (instructional schematic)

  1. SUPPORT CONDITION — a 64× range for the same beam

     CANTILEVER                δ = FL³/(3EI)      ← 16× worse
     ║                              than simply supported
     ║════════════════●  ↓F
     ║                ╲
     ║                 ╲___ deflected

     SIMPLY SUPPORTED          δ = FL³/(48EI)     ← reference
              ↓F
     ────────────────────
     ▲        ╲__╱        ▲

     FIXED BOTH ENDS           δ = FL³/(192EI)    ← 4× better
              ↓F                    than simply supported
     ╠════════════════════╣
              ╲__╱

     ┌──────────────────────────────────────────────────────┐
     │ CANTILEVER : SIMPLY SUPPORTED : FIXED-FIXED          │
     │     1/3    :      1/48        :    1/192             │
     │     64     :        4         :      1               │
     │                                                      │
     │ A CANTILEVER DEFLECTS 64× A FIXED-FIXED BEAM.        │
     │ This is why cantilevered locators are a crime.       │
     └──────────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  2. SPAN — the L³ relationship

     SPAN = L                      SPAN = L/2
     ────────────────────          ─────────╥─────────
     ▲                  ▲          ▲        ▲        ▲
          δ = 1.0                       δ = 0.125

     ┌──────────────────────────────────────────────────────┐
     │ HALVE THE SPAN → 1/8 THE DEFLECTION                  │
     │ One extra support block buys an 8× improvement.      │
     └──────────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  3. SECTION DEPTH — the h³ relationship, and ORIENTATION

     I = b h³ / 12

     SAME BAR, TWO ORIENTATIONS — 9× DIFFERENCE

     ┌──┐                        ┌────────────────┐
     │  │  h = 60                │                │  h = 20
     │  │                        └────────────────┘
     │  │  b = 20                       b = 60
     │  │
     └──┘
     I = 20×60³/12               I = 60×20³/12
       = 360,000 mm⁴               = 40,000 mm⁴

     ┌──────────────────────────────────────────────────────┐
     │ SAME STEEL. SAME MASS. 9× THE STIFFNESS.             │
     │ Orientation is free performance — get it right.      │
     └──────────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

     THE RESULT FROM §13 — WHY STRENGTH CHECKS MISLEAD

     ┌────────────────────────────────────────────────────┐
     │ STRESS CHECK :  19.2 MPa vs 250 MPa yield          │
     │                 FoS = 13        ✓ PASSES EASILY    │
     │                                                    │
     │ DEFLECTION   :  0.0576 mm vs 0.015 mm budget       │
     │                 3.84× over     ✗ FAILS BADLY       │
     │                                                    │
     │ THE PLATE IS 13× STRONGER THAN NEEDED AND STILL    │
     │ FOUR TIMES TOO FLEXIBLE.                           │
     │                                                    │
     │ FIXTURES ARE STIFFNESS-LIMITED, NOT STRENGTH-      │
     │ LIMITED. CHECK BOTH — INDEPENDENTLY.               │
     └────────────────────────────────────────────────────┘
```

### 16. Drawing example
Not a drawing lesson. One implication: **ribs must be dimensioned with their depth clearly specified**,
because rib depth is cubed in its stiffness contribution. A rib drawn without a controlled depth
dimension, or one the toolroom reduces "to save machining", loses stiffness at the cube of the
reduction. A rib reduced from 40 mm to 30 mm deep loses 58% of its contribution.

### 17. CAD workflow
Two capabilities:
1. **Section properties** — CAD gives I directly for any cross-section (SolidWorks: `Tools ▸ Evaluate ▸
   Section Properties`; Creo `Analysis ▸ X-Section Mass Properties`; NX `Analysis ▸ Section Inertia`).
   Essential for ribbed or complex sections where `bh³/12` does not apply.
2. **FEA** for complex geometry. The same caution as L0.3.2 applies: hand-calculate a simplified case
   first so you have an order-of-magnitude expectation. If FEA disagrees by more than about 20% with a
   reasonable simplification, investigate before believing it.

**A practical CAD habit:** model ribs as separate features so their depth can be changed
parametrically. Rib depth is the variable you will most often adjust during a stiffness study, and
having it driven by a single dimension makes iteration fast.

### 18. GD&T application
Not applicable at this lesson. Forward link: **fixture deflection is an error source in the tolerance
stack-up** (L23.10). The deflection you calculate here becomes a line item in the error budget
alongside locator position tolerance, locator wear, and pin-hole clearance. The 10–20% guideline in §6
is a placeholder until you build the full budget at L23.11, at which point you allocate deflection its
proper share rather than using a rule of thumb.

### 19. Manufacturing method
Not applicable at this lesson. Practical note: thick plates require more machining time and more
material, and heavy plates need lifting equipment. The support-versus-thickness decision in §13 is
therefore also a DFM and ergonomics decision (L49, L50) — the lighter plate with an extra support is
better on manufacturing cost, on handling, and on machine table load.

### 20. Inspection method
Not applicable at this lesson. Practical note: fixture deflection under load can be measured directly
during commissioning by mounting a dial indicator against the locator and applying a known load —
often simply by pushing with a force gauge. On critical fixtures this validates the entire calculation
chain in ten minutes and is well worth doing.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Checking strength but not stiffness** | Component 13× strong enough and 4× too flexible (§13) |
| 2 | Increasing thickness when reducing span would be far more efficient | Heavy, expensive plate; poor value |
| 3 | Cantilevered locators or supports | 16–64× more deflection than supported alternatives |
| 4 | Rib or bar oriented with depth in the wrong direction | Up to 9× stiffness lost for free |
| 5 | Changing steel grade to reduce deflection | No effect whatsoever — E is identical |
| 6 | Not budgeting deflection against part tolerance | No criterion to judge "acceptable" |
| 7 | Placing clamps or cutting loads mid-span rather than over supports | Maximum deflection where you least want it |
| 8 | Reducing rib depth to save machining | Loses stiffness at the cube of the reduction |
| 9 | Using aluminium without allowing for 3× deflection | Fixture far more flexible than expected |
| 10 | Trusting FEA without a hand-calculated sanity check | Confident, colourful, wrong answers |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Dimensional variation despite rigid-looking fixture | Base plate deflection under cut | Dial indicator on locator, apply known load | Add support; reduce span | Calculate deflection at design stage |
| Variation only on deep cuts | Deflection proportional to cutting force | Compare light vs heavy cut results | Add support or increase section | Design for worst-case cutting force |
| Chatter on a tall riser | Cantilever flexibility, low natural frequency | Check riser support condition | Support the riser at both ends; triangulate | Avoid cantilevers (L10.3) |
| Fixture heavy but still flexible | Material added where it does not increase I | Calculate I for the actual section | Add depth/ribs rather than bulk | Use I = bh³/12 to guide placement |
| Aluminium fixture too flexible | E is 1/3 that of steel | Recalculate with E = 70 GPa | Increase section, or change to steel | Account for material E at concept stage |

### 23. Design checklist
- [ ] Have I checked **deflection separately from stress**?
- [ ] Have I established a **deflection budget** from the part tolerance?
- [ ] Have I calculated I correctly, using the actual bending orientation?
- [ ] Is every rectangular section oriented with its **depth in the bending direction**?
- [ ] Have I considered **reducing span** before increasing thickness?
- [ ] Are there any **cantilevered** locators or supports I can support at both ends?
- [ ] Are clamps and cutting loads positioned **over supports**?
- [ ] Have I used the correct **support condition** coefficient?
- [ ] For aluminium, have I allowed for 3× the deflection of steel?
- [ ] Are rib depths clearly dimensioned and protected from "cost-saving" reduction?
- [ ] Have I sanity-checked any FEA against a hand calculation?
- [ ] Have I planned to verify deflection with a dial indicator at commissioning?

### 24. Beginner exercise
**E0.3.4-B** — A steel bar 40 mm wide × 20 mm deep spans 200 mm, simply supported, with a central load
of 1.5 kN.
(a) Calculate I for bending about the horizontal axis.
(b) Calculate the central deflection (E = 200 GPa).
(c) Recalculate I if the bar is turned on edge (20 mm wide × 40 mm deep).
(d) Calculate the new deflection and state the improvement factor.

### 25. Intermediate exercise
**E0.3.4-I** — A steel fixture plate 250 × 120 × 20 mm is simply supported over a 250 mm span and
carries a central load of 3 kN. It supports a locator controlling a ±0.08 mm feature.
(a) Calculate I and the central deflection.
(b) Using a 20% deflection budget, state whether it passes.
(c) Calculate the thickness required to pass by increasing thickness alone.
(d) Calculate the deflection if a central support is added at 20 mm thickness instead.
(e) Compare the two solutions on deflection, mass and likely cost, and recommend one.

### 26. Advanced exercise
**E0.3.4-A** — A VMC fixture consists of a steel base plate 500 × 300 × 30 mm bolted to the table at
four corners only, carrying two riser blocks 180 mm tall that support a workpiece. Face milling applies
a 6 kN vertical force and a 2.5 kN horizontal force at the top of the risers. The workpiece feature
being machined is toleranced at ±0.04 mm.
(i) Calculate the base plate deflection treating it as simply supported over the 500 mm span with a
central load.
(ii) Calculate the horizontal deflection at the top of a riser, treating it as a cantilever, assuming
each riser is 80 × 60 mm in section (bending in the 60 mm direction).
(iii) Determine the total deflection at the cutting point by combining both contributions, stating any
assumption about how they combine.
(iv) Establish a deflection budget at 15% of part tolerance and determine whether the design passes.
(v) Identify which contribution dominates, and by what factor.
(vi) Propose three independent design improvements, calculate the effect of each, and recommend a
combination that passes with a margin of at least 1.5.
(vii) Explain why simply specifying a hardened alloy steel for the risers would achieve nothing.

### 27. Interview questions
1. *"Your base plate deflects too much. What are your options, in order of effectiveness?"*
   **Answer:** First reduce the span — deflection goes as L³, so adding a mid-span support cuts
   deflection to one-eighth for the cost of one block. Second, improve the support condition; fixing
   the ends rather than simply supporting them gives a 4× improvement. Third, increase section depth —
   also cubed, but it adds material, mass and cost. What will *not* work is changing steel grade, since
   all steels have the same Young's modulus. *(Reasoning: only geometry and support conditions are
   available; material offers nothing within steels.)*
2. *"A component passes its stress check with a factor of safety of 13. Is it adequately designed?"*
   **Answer:** Not necessarily, and an FoS that high is a warning sign rather than reassurance. It
   suggests deflection, not strength, is the governing constraint. In the worked example in this
   lesson, a plate with FoS 13 still deflected almost four times its tolerance budget. Strength and
   stiffness are independent requirements and must be checked separately.

### 28. Expert questions
1. *"You have a fixture that must be both stiff and light — a 5-axis application where mass affects
   machine dynamics. How do you approach it?"*
   **Answer:** This is an optimisation between two competing objectives, and the key is that stiffness
   comes from **where** material is, not **how much** there is.
   The governing relationship is `I = bh³/12`: material far from the neutral axis contributes as the
   cube of its distance, while material near the neutral axis contributes almost nothing but carries
   full mass penalty. So the strategy is to **remove material from the centre and keep it at the
   extremes** — which is why I-beams, box sections and ribbed plates exist.
   Practically that means: a ribbed base rather than a solid one, with deep ribs rather than thick
   ones; pocketing out the neutral-axis material; triangulating rather than cantilevering, since a
   triangulated structure carries load axially rather than in bending, and axial stiffness is orders of
   magnitude higher than bending stiffness; and shortening spans with additional supports, which costs
   almost no mass.
   I would also question whether aluminium is appropriate. Its E is a third of steel's, but its density
   is also about a third — so for a **stiffness-per-unit-mass** comparison in bending, aluminium can
   actually win, because you can afford a much deeper section for the same mass, and depth is cubed.
   That is a genuinely counter-intuitive result and it is why aluminium tooling plate is standard for
   checking fixtures and large weight-sensitive structures.
   Finally, for a 5-axis application I would check **natural frequency**, not just static deflection —
   a light stiff structure can still have a resonance in the spindle speed range (L10.3).
2. *"Why do experienced fixture designers instinctively add supports rather than thicken plates, and
   when is that instinct wrong?"*
   **Answer:** The instinct is right because both levers are cubic but they have completely different
   costs. Halving the span and doubling the thickness both give an 8× improvement — but the support
   costs one small block and no mass, while doubling thickness doubles material cost, doubles mass,
   doubles machining time, and increases machine table load. On every commercial and practical measure,
   the support wins. That is why it becomes instinct.
   The instinct is **wrong** in four identifiable situations.
   When the extra support would **over-constrain** the fixture or the part — adding a fourth support
   point to a three-point scheme creates a statically indeterminate system with unpredictable load
   distribution, which is the Level 4 problem. Sometimes the correct answer is a thicker plate
   precisely *because* you cannot add a support without over-constraining.
   When the support would **obstruct tool access, chip evacuation or part loading** — a stiffer fixture
   that the tool cannot reach is worthless.
   When the support must sit on something that is **itself flexible** — supporting a plate on a
   flexible sub-structure just relocates the problem.
   And when the plate needs thickness for a **different reason** — depth for tapped holes, coolant
   passages, or T-slots — in which case the stiffness comes free with the thickness you needed anyway.
   The mature judgement is that the cube rules tell you what is *efficient*, but the fixture's function,
   constraint scheme and accessibility tell you what is *permissible*. Efficiency within an invalid
   design is worthless.

### 29. Summary
Stiffness `k = F/δ` and deflection follows `δ = CFL³/(EI)`, where the coefficient C depends on support
conditions: a cantilever deflects 16 times more than a simply supported beam and 64 times more than a
fixed-fixed one. The second moment of area for a rectangle is `bh³/12`, so section depth is cubed and
orientation can change stiffness ninefold for free. Deflection scales with span cubed and inversely
with thickness cubed, making an added mid-span support an eightfold improvement for negligible cost —
usually a better move than thickening the plate. All steels share E ≈ 200 GPa, so material grade cannot
solve a deflection problem. Fixture members are typically stiffness-limited rather than strength-limited:
the worked example passed its stress check with a factor of safety of 13 while exceeding its deflection
budget by a factor of nearly four.

### 30. Key takeaways
- **`δ = CFL³/(EI)`** — deflection goes as **span cubed** and inversely as **I**.
- **`I = bh³/12`** — section **depth is cubed**; orientation alone can give 9×.
- **Halve the span → 1/8 deflection. Double the thickness → 1/8 deflection.** The support is cheaper.
- **Cantilever : simply supported : fixed-fixed = 64 : 4 : 1.** Avoid cantilevers.
- **All steels have E ≈ 200 GPa.** Grade changes cannot reduce deflection; only geometry can.
- **Aluminium deflects ~3× steel** for the same geometry — but can win on stiffness-per-mass.
- **Fixtures are stiffness-limited, not strength-limited.** FoS 13 and still 4× too flexible.
- **Budget fixture deflection at 10–20% of the part tolerance** it affects `[GUIDE]`.
- **Check strength and stiffness independently.** Passing one says nothing about the other.

---

# MODULE 0.4 — MACHINING FUNDAMENTALS FOR THE FIXTURE DESIGNER

**Lessons:** L0.4.1 – L0.4.4
**Estimated time:** 4.5 hours
**Prerequisites:** Module 0.1 (manufacturing processes), Module 0.3 (forces, stress, friction, deflection)

---

## Why this module exists

You now have the physics. This module supplies the **process knowledge** that tells you what numbers
to put into it.

A fixture designer is not a machinist, and this module does not attempt to make you one. But you cannot
design a fixture without knowing:

- **Which way the cutting force pushes** — because that determines where the locators and clamps go
- **How big the cutting force is** — because that is the input to every calculation in Module 0.3
- **What each operation needs from the fixture** — because drilling, milling, boring, reaming and
  tapping make completely different demands
- **How the machine is configured** — because a VMC fixture and an HMC fixture are different objects

Everything in this module exists to answer one question that governs Levels 5 through 20:

> **Where does the force come from, how big is it, and which way does it point?**

## What this module covers

| Lesson | Title | Time |
|---|---|---|
| L0.4.1 | How metal is cut: chip formation, speed, feed and depth of cut | 1.0 h |
| L0.4.2 | Cutting forces: magnitude, direction and how to estimate them | 1.5 h |
| L0.4.3 | The seven machining operations and what each demands of the fixture | 1.0 h |
| L0.4.4 | Machine tools: VMC, HMC, axes, tables and coordinate systems | 1.0 h |

## Module learning outcome

You will be able to read a machining operation from a process sheet, estimate the magnitude and
direction of the forces it applies to the workpiece, state what that operation requires of the fixture,
and identify the machine configuration constraints that shape the fixture's form.

---

## LESSON L0.4.1 — HOW METAL IS CUT

### 1. Lesson title
**L0.4.1 — Chip formation, cutting speed, feed and depth of cut: the three parameters that govern everything**

### 2. Learning objective
By the end of this lesson you will be able to explain how a cutting tool removes metal, define and
calculate cutting speed, feed and depth of cut, convert between cutting speed and spindle RPM, and
explain how each parameter influences the force the fixture must resist.

### 3. Prerequisites
L0.1.1 (manufacturing process families), L0.3.1 (forces).

### 4. Why the topic matters
Every number in a fixture force calculation traces back to three machining parameters. If you do not
understand where they come from, you will be reduced to asking the machinist for a force value they
cannot supply, or guessing — and guessing wrong in either direction is expensive.

There is also a subtler reason. The **relationship** between the parameters and the force is not
intuitive: doubling the depth of cut roughly doubles the force, but doubling the cutting speed barely
changes it at all. Knowing which parameter matters lets you have a productive conversation with process
planning when a fixture is marginal — because sometimes the right answer is not a stiffer fixture but a
different cutting strategy.

Finally: **heat**. Roughly all of the energy that goes into cutting comes out as heat, and a
significant fraction of it goes into the workpiece and the fixture. Thermal effects on precision
fixtures are real, and this lesson is where you first meet them.

### 5. Simple explanation
A cutting tool does not "scrape" metal away. It works like a wedge that is forced into the material,
shearing off a layer that curls away as a **chip**.

Three numbers describe any cutting operation:
1. **How fast the cutting edge moves across the material** — cutting speed
2. **How much material advances into the tool each revolution** — feed
3. **How deep the tool is buried in the material** — depth of cut

Think of planing wood. How fast you push the plane is speed. How much you tilt the blade out is depth.
How wide the blade is, is the width of cut. Push harder or set it deeper and it takes more effort —
that effort is the force your fixture has to resist.

### 6. Engineering explanation

**Chip formation**

Metal cutting is a **shearing** process. The tool's rake face compresses the material ahead of it until
it fails in shear along a plane running from the tool tip to the free surface — the **shear plane**.
The sheared material flows up the rake face as a chip.

```
           CHIP  ↗
                ╱
               ╱   ← shear plane (~45° typical)
    ══════════●───────────────  workpiece surface
              ║ ▓▓ tool
              ║ ▓▓
    ──────────╨────────────────  machined surface
```

Three consequences follow immediately, and all three matter to you:
1. **Force** — shearing metal requires substantial force, applied to the workpiece, reacted by the fixture
2. **Heat** — nearly all the cutting energy becomes heat; typically 75–80% leaves in the chip, 10–20%
   goes into the workpiece, and 5–10% into the tool `[GUIDE]`
3. **Chips** — a continuous stream of hot, sharp material that must escape the fixture (a design driver
   you will meet at L10.4)

**The three parameters**

**Cutting speed (V)** — the speed of the cutting edge relative to the workpiece, in m/min.
```
V = π D N / 1000
```
where D is the diameter in mm (of the cutter for milling, of the drill for drilling, of the workpiece
for turning) and N is the spindle speed in rev/min. The 1000 converts mm to m.

Rearranged for the number you actually program:
```
N = 1000 V / (π D)
```

Cutting speed is a **material-and-tool property**. It is chosen from tooling data, not invented. It
governs tool life and surface finish, and it has only a weak effect on cutting force.

**Feed (f)** — how far the tool advances per revolution, or per tooth.
```
f_z  = feed per tooth        mm/tooth
f_r  = feed per revolution   mm/rev  = f_z × z   (z = number of teeth)
v_f  = feed rate             mm/min  = f_z × z × N
```
Feed is the **dominant force parameter** along with depth of cut. Double the feed and the force
approximately doubles.

**Depth of cut (a_p) and width of cut (a_e)** — the geometry of the material being removed.
- `a_p` = axial depth of cut (how deep, along the tool axis)
- `a_e` = radial width of cut (how wide, across the tool)

Together they define the cross-section of the cut. The **chip cross-sectional area** for milling is
approximately `a_p × f_z`, and cutting force is roughly proportional to this area.

**Material removal rate (MRR)**
```
MRR = a_p × a_e × v_f     mm³/min
```
This is the productivity measure. It is also, roughly, a proxy for the total load on the fixture — high
MRR means high force.

**What this means for force — the key hierarchy** `[GUIDE]`

| Parameter | Effect on cutting force | Effect on tool life |
|---|---|---|
| **Depth of cut a_p** | Roughly proportional — double a_p, double force | Small effect |
| **Feed f_z** | Roughly proportional (slightly less than linear) | Moderate effect |
| **Width of cut a_e** | Roughly proportional in milling | Small effect |
| **Cutting speed V** | **Weak** — force changes little | **Dominant** — the main tool-life driver |

> **The engineer's summary:** speed kills tools; feed and depth kill fixtures.

This is genuinely useful. If a fixture is marginal on force, asking process planning to reduce speed
achieves almost nothing. Asking for two lighter depth-of-cut passes instead of one heavy one roughly
halves the peak force — at the cost of cycle time, but it is the lever that actually works.

**Roughing versus finishing**

| | Roughing | Finishing |
|---|---|---|
| Objective | Remove material fast | Achieve size and finish |
| a_p | Large (2–10 mm typical) | Small (0.2–1 mm typical) |
| Force | **High** — governs fixture strength | Low |
| Fixture concern | Withstanding the force | Not distorting the part |

`[GUIDE] — typical ranges; actual values from tooling data and the process sheet.`

**Always size the fixture for the roughing pass** — that is where the force is. But check the
**finishing** pass for distortion, because that is where the tolerance is achieved.

**Heat and the fixture**

Steel expands about 11–12 × 10⁻⁶ per °C `[GUIDE]`. A 300 mm fixture that warms by 10 °C grows:
```
ΔL = 300 × 11.5e-6 × 10 = 0.0345 mm
```
That is 0.035 mm of drift — more than the whole tolerance band on a ±0.015 mm feature. On precision
fixtures this is a real effect and is why coolant flow, warm-up cycles and thermal symmetry matter
(L20.5, L45).

### 7. Terminology

| Term | Definition | SI unit |
|---|---|---|
| **Cutting speed (V)** | Speed of the cutting edge relative to the work | m/min |
| **Spindle speed (N)** | Rotational speed | rev/min (RPM) |
| **Feed per tooth (f_z)** | Advance per cutting edge per revolution | mm/tooth |
| **Feed per revolution (f_r)** | Advance per spindle revolution | mm/rev |
| **Feed rate (v_f)** | Linear advance rate | mm/min |
| **Axial depth of cut (a_p)** | Depth along the tool axis | mm |
| **Radial width of cut (a_e)** | Engagement across the tool | mm |
| **MRR** | Material removal rate | mm³/min |
| **Chip** | Material sheared away by the tool | — |
| **Shear plane** | Plane along which the material fails | — |
| **Rake face** | Tool surface the chip flows over | — |
| **Roughing** | High-removal, low-precision cutting | — |
| **Finishing** | Low-removal, high-precision cutting | — |
| **Tool life** | Cutting time before the edge must be changed | min |

### 8. Principle

> **CUTTING IS SHEARING, AND SHEARING TAKES FORCE.**
> Cutting force is governed principally by **depth of cut** and **feed**, and only weakly by cutting
> speed. **Speed kills tools; feed and depth kill fixtures.**
> Size the fixture for the **roughing** pass, where the force is; check the **finishing** pass for
> distortion, where the tolerance is.

### 9. Industrial application

**Reading a process sheet**

A fixture designer receives a process sheet that looks something like this:

```
OP 20  —  FACE MILL TOP SURFACE
  Machine     : VMC 850
  Tool        : Ø80 face mill, 6 inserts
  Material    : EN8 steel
  V           : 180 m/min          ← from tooling data
  f_z         : 0.20 mm/tooth
  a_p         : 3.0 mm  (roughing)
  a_e         : 60 mm
  Coolant     : flood
```

From this you can derive everything you need:
```
N   = 1000 × 180 / (π × 80)  = 716 rev/min
v_f = 0.20 × 6 × 716         = 859 mm/min
MRR = 3.0 × 60 × 859         = 154,620 mm³/min
```
And in L0.4.2 you will turn these into a force in newtons — the number that drives every calculation
in Module 0.3.

**The conversation that saves a fixture**

A common real situation: your calculation shows the fixture needs 22 kN of clamping force, which is
impractical for the available clamps. Your options, in the order a competent engineer considers them:

```
1. Add a positive stop            → force requirement collapses (L0.3.3)
2. Reduce depth of cut, more passes → force roughly halves per pass
3. Change cut direction            → push into a locator, not away (L0.4.2)
4. Increase clamping force         → last resort; risks part distortion
5. Reduce cutting speed            → achieves almost nothing. Don't bother.
```

Knowing that option 5 is useless — and being able to say *why* — is what separates an engineer from a
technician.

### 10. Design rules
- **R1** — Obtain the **roughing** parameters for fixture force sizing, not the finishing parameters.
- **R2** — Get cutting parameters from the **process sheet or tooling data** `[MFR]`, never from memory.
- **R3** — If parameters are not yet fixed, agree a **worst-case envelope** with process planning and
  record it as a design assumption.
- **R4** — Remember the hierarchy: **a_p and f_z drive force**; V does not.
- **R5** — Design chip escape routes from the start — high MRR means a high chip volume (L10.4).
- **R6** — Allow for **thermal growth** on precision fixtures; 10 °C over 300 mm is 0.035 mm `[GUIDE]`.
- **R7** — Check the **finishing** pass separately for part distortion under clamping.
- **R8** — Record the parameters you designed to in the design file. If the process changes later, the
  fixture validity must be rechecked.

### 11. Rules of thumb
- `N = 1000V/(πD)` — commit this to memory; you will use it constantly.
- Force scales roughly with **a_p × f_z**; cutting speed has little effect on force `[GUIDE]`.
- Roughing forces are typically **5–10×** finishing forces `[GUIDE]`.
- About **75–80%** of cutting heat leaves in the chip if chip evacuation is good `[GUIDE]`.
- Steel expands ~**11.5 µm per metre per °C** `[GUIDE]`.
- Halving the depth of cut roughly halves the peak fixture force — at roughly double the cycle time.
- If nobody can give you cutting parameters, design to the machine's rated capability and say so in
  writing.

### 12. Formulae

**Cutting speed**            `V = π D N / 1000`      (m/min, D in mm)
**Spindle speed**            `N = 1000 V / (π D)`    (rev/min)
**Feed per revolution**      `f_r = f_z × z`         (mm/rev)
**Feed rate**                `v_f = f_z × z × N`     (mm/min)
**MRR (milling)**            `MRR = a_p × a_e × v_f` (mm³/min)
**Chip area (approx.)**      `A_c ≈ a_p × f_z`       (mm²)
**Thermal expansion**        `ΔL = L × α × ΔT`       (mm)

| Variable | Meaning | SI unit |
|---|---|---|
| V | Cutting speed | m/min |
| N | Spindle speed | rev/min |
| D | Diameter (tool or work) | mm |
| f_z | Feed per tooth | mm/tooth |
| z | Number of teeth | — |
| v_f | Feed rate | mm/min |
| a_p | Axial depth of cut | mm |
| a_e | Radial width of cut | mm |
| MRR | Material removal rate | mm³/min |
| α | Coefficient of thermal expansion | /°C |
| ΔT | Temperature change | °C |

### 13. Worked numerical example

**Problem:** A face milling operation on EN8 steel uses a Ø100 mm cutter with 8 inserts. Tooling data
gives a cutting speed of 200 m/min and a feed of 0.25 mm/tooth. Roughing depth of cut is 4 mm over a
width of 75 mm.

Determine: (a) spindle speed, (b) feed rate, (c) MRR, (d) the effect on MRR and force of splitting the
cut into two 2 mm passes, (e) the thermal growth of a 400 mm fixture if it warms 8 °C, (f) an
engineering assessment.

```
GIVEN:
  Cutter diameter          D    = 100 mm                   [PROJ]
  Number of inserts        z    = 8                        [PROJ]
  Cutting speed            V    = 200 m/min                [MFR — tooling data]
  Feed per tooth           f_z  = 0.25 mm/tooth            [MFR — tooling data]
  Axial depth of cut       a_p  = 4 mm  (roughing)         [PROJ]
  Radial width of cut      a_e  = 75 mm                    [PROJ]
  Workpiece material            = EN8 steel                [PROJ]
  Fixture length           L    = 400 mm                   [PROJ]
  Temperature rise         ΔT   = 8 °C                     [EX-ASSUMED]
  Expansion coefficient    α    = 11.5e-6 /°C              [GUIDE]

REQUIRED:
  (a) Spindle speed N
  (b) Feed rate v_f
  (c) Material removal rate
  (d) Effect of two 2 mm passes instead of one 4 mm pass
  (e) Thermal growth of the fixture
  (f) Engineering assessment

ASSUMPTION:
  1. Cutting speed and feed per tooth are taken from tooling
     manufacturer data for EN8. These MUST BE CONFIRMED against
     the actual insert grade in use. [MFR]
  2. Force is taken as proportional to chip cross-sectional
     area a_p × f_z. This is the standard first approximation;
     the specific cutting force method in L0.4.2 refines it.
  3. Temperature rise of 8 °C is an example value for a flood-
     cooled fixture in continuous production. Actual rise must
     be measured. [EX-ASSUMED]
  4. Feed per tooth is held constant when depth is reduced —
     the normal practice.

FORMULA:
  (a) N   = 1000 V / (π D)
  (b) v_f = f_z × z × N
  (c) MRR = a_p × a_e × v_f
  (e) ΔL  = L × α × ΔT

VARIABLE DEFINITIONS:
  As tabulated in §12 above.

UNIT CONVERSION:
  V = 200 m/min = 200,000 mm/min
  All other values already in mm-based units.

SUBSTITUTION AND CALCULATION:

  (a) SPINDLE SPEED
      N = 1000 × 200 / (π × 100)
        = 200,000 / 314.159
        = 636.6 rev/min
        → program 636 rev/min

  (b) FEED RATE
      v_f = f_z × z × N
          = 0.25 × 8 × 636.6
          = 2.0 × 636.6
          = 1,273 mm/min

  (c) MATERIAL REMOVAL RATE
      MRR = a_p × a_e × v_f
          = 4 × 75 × 1273
          = 300 × 1273
          = 381,900 mm³/min
          = 381.9 cm³/min

  (d) TWO 2 mm PASSES INSTEAD OF ONE 4 mm PASS

      Per pass:
        MRR = 2 × 75 × 1273 = 190,950 mm³/min   (half)

      Chip area per pass:
        one 4 mm pass : A_c = 4 × 0.25 = 1.00 mm²
        two 2 mm pass : A_c = 2 × 0.25 = 0.50 mm²
        → PEAK FORCE ROUGHLY HALVED

      Cycle time for the cut:
        one pass  : 1 pass
        two passes: 2 passes → approximately DOUBLE the
                    cutting time for this operation

  (e) THERMAL GROWTH
      ΔL = L × α × ΔT
         = 400 × 11.5e-6 × 8
         = 400 × 92e-6
         = 0.0368 mm

RESULT:
  ┌────────────────────────────────┬──────────────────────┐
  │ (a) Spindle speed              │ 636.6 rev/min        │
  │ (b) Feed rate                  │ 1,273 mm/min         │
  │ (c) Material removal rate      │ 381,900 mm³/min      │
  │ (d) Two passes: peak force     │ ~50 % of one pass    │
  │     Two passes: cutting time   │ ~200 % of one pass   │
  │ (e) Thermal growth, 400 mm     │ 0.0368 mm            │
  └────────────────────────────────┴──────────────────────┘

SAFETY FACTOR:
  Not applicable to this lesson — these are process parameters,
  not a strength check. They become the INPUT to the force
  calculation in L0.4.2, where safety factors are applied.

PASS/FAIL:
  Not applicable — parametric calculation. However, note the
  thermal result: 0.0368 mm growth EXCEEDS the total tolerance
  band of any feature toleranced tighter than ±0.018 mm. For
  such features this fixture would FAIL on thermal grounds alone
  unless temperature is controlled.

ENGINEERING CONCLUSION:
  THREE FINDINGS, EACH WITH A DESIGN CONSEQUENCE.

  1. THE MRR IS HIGH — 382 cm³/min IS A HEAVY CUT.
     At 7.85 g/cm³ that is about 3 kg of steel per minute
     leaving the workpiece as hot chips. Chip evacuation is
     therefore not an afterthought on this fixture: it is a
     primary design requirement. Clamps, ribs and pockets must
     not create chip traps, and the fixture should shed chips
     toward the machine's evacuation path (L10.4).

  2. THE TWO-PASS OPTION IS THE REAL LEVER ON FORCE.
     Halving the depth of cut halves the chip area and so
     roughly halves the peak force the fixture must resist. The
     cost is roughly double the cutting time for this operation.
     Whether that trade is worth it depends on production volume
     — but it is the option to put on the table when a fixture
     is marginal, and it is far more effective than reducing
     cutting speed, which would barely change the force at all.

  3. THERMAL GROWTH IS NOT NEGLIGIBLE.
     0.0368 mm over 400 mm from an 8 °C rise is larger than many
     part tolerances. For features tighter than about ±0.02 mm
     this fixture requires thermal management: consistent flood
     coolant, a warm-up cycle before first-off inspection, and
     ideally locators positioned so that growth is symmetrical
     about the datum rather than accumulating in one direction
     (L20.5).

  RECOMMENDATION: Design to the single 4 mm pass for force
  capacity (worst case), prioritise chip evacuation, and flag
  thermal growth to the customer if any feature is toleranced
  tighter than ±0.02 mm.

SENSITIVITY NOTE:
  Ranked by influence on FIXTURE FORCE:
    1. DEPTH OF CUT a_p — roughly linear; the primary lever
    2. FEED f_z — roughly linear; usually fixed by finish
       requirements
    3. WIDTH OF CUT a_e — roughly linear in milling; changes
       force direction as well as magnitude (L0.4.2)
    4. CUTTING SPEED V — WEAK effect on force. Changing it
       affects tool life and cycle time, not fixture loading.
  Ranked by influence on THERMAL GROWTH:
    1. TEMPERATURE RISE — control it with coolant
    2. FIXTURE LENGTH — shorter datum-to-feature paths grow less
    3. MATERIAL — aluminium expands ~2× steel (23 vs 11.5 µm/m°C)
```

### 14. Engineering assumptions
- Cutting speed and feed per tooth from tooling manufacturer data `[MFR]` — must be confirmed for the
  actual insert grade.
- Force taken as proportional to chip cross-sectional area — a first approximation, refined in L0.4.2.
- 8 °C temperature rise is an example value `[EX-ASSUMED]`; actual rise must be measured.
- Feed per tooth held constant when depth is reduced.
- Heat split of 75–80% into chips assumes effective chip evacuation.

### 15. Diagram

```
     HOW METAL IS CUT — AND WHAT IT DOES TO THE FIXTURE
     (instructional schematic)

  CHIP FORMATION

                    ╱╱ chip curling away
                   ╱╱   (carries 75-80 % of the heat)
                  ╱╱
                 ╱  ← SHEAR PLANE
    ════════════●─────────────────  uncut surface
                ║▓▓│  ← rake face
        a_p     ║▓▓│     TOOL
     ───────────╨──┴─────────────   machined surface
                 ↓
            ┌─────────────────────┐
            │  FORCE ON WORKPIECE │
            │  reacted by YOUR    │
            │  fixture            │
            └─────────────────────┘

  ──────────────────────────────────────────────────────────

  THE THREE PARAMETERS

      ┌──────────────┬───────────────┬──────────────────┐
      │  V  (m/min)  │  f_z (mm/tooth)│  a_p / a_e (mm) │
      │  how FAST    │  how MUCH      │  how DEEP/WIDE  │
      ├──────────────┼───────────────┼──────────────────┤
      │  N = 1000V   │  v_f = f_z·z·N │  MRR = a_p·a_e·v_f│
      │      ─────   │                │                  │
      │       πD     │                │                  │
      └──────────────┴───────────────┴──────────────────┘

  ──────────────────────────────────────────────────────────

  WHAT AFFECTS WHAT — THE HIERARCHY THAT MATTERS

     PARAMETER          CUTTING FORCE      TOOL LIFE
     ─────────────────────────────────────────────────
     depth  a_p         ████████████       ██
     feed   f_z         ██████████         ████
     width  a_e         ████████████       ██
     speed  V           █                  ████████████

            ┌────────────────────────────────────────┐
            │  SPEED KILLS TOOLS.                    │
            │  FEED AND DEPTH KILL FIXTURES.         │
            │                                        │
            │  A marginal fixture is fixed by        │
            │  lighter passes — NOT by slower ones.  │
            └────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  ROUGHING vs FINISHING — DESIGN FOR BOTH, DIFFERENTLY

     ROUGHING                    FINISHING
     a_p = 2-10 mm               a_p = 0.2-1 mm
     HIGH FORCE                  LOW FORCE
        ↓                            ↓
     SIZE THE FIXTURE            CHECK FOR PART
     FOR THIS                    DISTORTION HERE

  ──────────────────────────────────────────────────────────

     HEAT — THE ERROR THAT ISN'T IN YOUR FORCE CALCULATION

     ΔL = L × α × ΔT      steel α ≈ 11.5 µm/m/°C

     400 mm fixture, 8 °C rise  →  0.0368 mm growth

     ┌───────────────────────────────────────────────┐
     │ That is MORE than the whole tolerance band    │
     │ on a ±0.018 mm feature.                       │
     │ On precision work, heat is a real error       │
     │ source — not a rounding detail.               │
     └───────────────────────────────────────────────┘
```

### 16. Drawing example
Not a drawing lesson. One documentation practice: **record the cutting parameters the fixture was
designed to** in the design calculation sheet and reference them on the assembly drawing as a note,
for example:

```
NOTE: FIXTURE DESIGNED FOR MAX CUTTING FORCE CORRESPONDING TO
      a_p = 4 mm, a_e = 75 mm, f_z = 0.25 mm/tooth, Ø100 8-INSERT
      FACE MILL. PROCESS CHANGES BEYOND THESE PARAMETERS REQUIRE
      RE-VALIDATION OF THE FIXTURE.
```

This single note has saved many fixtures from being blamed for failures caused by an unannounced
process change.

### 17. CAD workflow
Not a CAD lesson. Forward note: CAM software (SolidWorks CAM, Mastercam, NX CAM) reports cutting forces
and can export them, which is a useful cross-check against hand calculations. Some CAM systems will
also simulate the toolpath against your fixture model to check for collisions — an essential validation
step you will perform at L19.7.

### 18. GD&T application
Not applicable at this lesson.

### 19. Manufacturing method
This lesson *is* about manufacturing method. The practical point for the fixture designer: attend the
process planning discussion if you can. The cutting strategy and the fixture concept are
interdependent, and decisions made in isolation on either side produce a worse result than a
five-minute conversation.

### 20. Inspection method
Not applicable at this lesson. Practical note: cutting force can be measured directly with a
dynamometer if a fixture problem needs to be diagnosed rigorously. This is uncommon in general job
shops but standard in automotive and aerospace validation.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Sizing the fixture from **finishing** parameters | Fixture fails under the roughing pass |
| 2 | Assuming reducing cutting speed reduces fixture force | Wasted cycle time, no force benefit |
| 3 | Not obtaining cutting parameters at all | Force calculation based on guesswork |
| 4 | Ignoring chip volume at high MRR | Chip packing, part lift, scrap |
| 5 | Neglecting thermal growth on precision fixtures | Unexplained drift through the shift |
| 6 | Not recording design parameters on the drawing | Process changes silently invalidate the fixture |
| 7 | Confusing cutting speed (m/min) with feed rate (mm/min) | Wildly wrong calculations |
| 8 | Using cutting data for the wrong material | Force under- or over-estimated by several times |
| 9 | Forgetting that aluminium expands ~2× steel | Thermal error double the expectation |
| 10 | Treating the process sheet as fixed and unchallengeable | Missing the cheapest solution to a marginal fixture |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Fixture adequate in calculation, fails in practice | Sized from finishing, not roughing, parameters | Compare actual process sheet to design assumptions | Recalculate at roughing values | Always design to roughing |
| Part moves only on some cycles | Depth of cut varies with stock variation | Measure incoming stock variation | Design to maximum stock condition | Ask for stock tolerance at input stage |
| Dimensional drift through the shift | Thermal growth | Measure fixture temperature over a shift | Warm-up cycle; consistent coolant; thermal symmetry | Calculate thermal growth at design stage |
| Chips packing around locators | MRR higher than the fixture was designed for | Check actual MRR vs design assumption | Redesign chip paths; add air blast | Calculate chip volume at concept stage |
| Fixture blamed after a process change | Parameters never recorded | Review design file | Re-validate at new parameters | Note design parameters on the drawing |

### 23. Design checklist
- [ ] Have I obtained the **roughing** cutting parameters?
- [ ] Are they from the process sheet or tooling data `[MFR]`, not from memory?
- [ ] If not yet fixed, have I agreed and recorded a worst-case envelope?
- [ ] Have I calculated the MRR and considered the chip volume it implies?
- [ ] Have I designed chip escape routes?
- [ ] Have I checked thermal growth against the tightest tolerance?
- [ ] Have I checked the **finishing** pass for part distortion separately?
- [ ] Have I recorded the design parameters in the calculation file and on the drawing?
- [ ] Have I discussed the cutting strategy with process planning?
- [ ] If the fixture is marginal, have I explored lighter passes before higher clamping force?

### 24. Beginner exercise
**E0.4.1-B** — A Ø63 mm face mill with 5 inserts runs at a cutting speed of 150 m/min with a feed of
0.15 mm/tooth.
(a) Calculate the spindle speed.
(b) Calculate the feed rate.
(c) If a_p = 2 mm and a_e = 50 mm, calculate the MRR.
(d) State which single parameter you would change to reduce the force on the fixture, and why.

### 25. Intermediate exercise
**E0.4.1-I** — A milling operation on aluminium uses a Ø50 mm cutter with 4 flutes, V = 400 m/min,
f_z = 0.12 mm/tooth, a_p = 6 mm, a_e = 40 mm.
(a) Calculate N, v_f and MRR.
(b) The fixture is aluminium, 500 mm long, and the shop warms from 18 °C to 29 °C over a day.
Calculate the thermal growth (α_aluminium = 23 × 10⁻⁶ /°C `[GUIDE]`).
(c) The part has a feature toleranced at ±0.03 mm located 500 mm from the datum. Is the thermal growth
acceptable? Justify your answer numerically.
(d) Propose two design changes that would reduce the thermal error, and explain the mechanism of each.

### 26. Advanced exercise
**E0.4.1-A** — You receive a process sheet for a steel casting with three operations on one VMC fixture:
```
OP 10  Face mill    Ø125, 8 inserts, V=160, f_z=0.30, a_p=5.0, a_e=100
OP 20  Drill 4×Ø12  V=25 m/min, f_r=0.20 mm/rev
OP 30  Finish mill  Ø125, 8 inserts, V=220, f_z=0.10, a_p=0.5, a_e=100
```
(i) Calculate N, v_f and MRR for each operation.
(ii) Rank the operations by expected fixture force, justifying the ranking from chip cross-section.
(iii) State which operation governs the fixture strength design and which governs the distortion check.
(iv) Total cutting time is estimated at 6 minutes and the fixture is 450 mm long. If it reaches
thermal equilibrium 12 °C above ambient, calculate the growth and state which of the three operations
is most affected by it, and why.
(v) The customer asks whether cycle time can be reduced by increasing all cutting speeds by 25%.
Explain the effect on fixture force, tool life and thermal load, and give a recommendation.
(vi) Write the drawing note that records the parameters this fixture is validated for.

### 27. Interview questions
1. *"A fixture is marginal on clamping force. Process planning offers to slow the machine down. Is that
   useful?"*
   **Answer:** Almost not at all. Cutting force depends principally on the chip cross-sectional area —
   depth of cut times feed — and only weakly on cutting speed. Slowing the spindle extends tool life
   and increases cycle time, but the fixture will see nearly the same force. The useful change is to
   reduce the depth of cut and take more passes, which roughly halves the peak force per pass. Better
   still is to add a positive stop so the force is taken by a locator rather than by friction.
2. *"Which cutting parameters do you ask for when starting a fixture design, and why those?"*
   **Answer:** The **roughing** parameters — depth of cut, width of cut, feed per tooth, cutter
   diameter and number of teeth — because that is where the maximum force occurs and the fixture must
   be sized for the worst case. I also ask for the finishing parameters separately, because that pass
   determines whether clamping distortion will spoil the tolerance. And I ask for the cutting direction
   and toolpath, because direction determines where the locators go, which matters more than magnitude.

### 28. Expert questions
1. *"How would you handle a fixture design where the cutting parameters are not yet decided?"*
   **Answer:** This is the normal situation on new programmes, and the answer is to convert an unknown
   into a controlled assumption rather than waiting.
   I would establish a **worst-case envelope** by working from what *is* known: the machine's rated
   spindle power and torque, the cutter sizes that will physically fit the feature, and standard
   tooling data for the workpiece material. That gives an upper bound on the force the process could
   plausibly apply.
   I would then design to that envelope and **document it explicitly** — in the calculation sheet, in
   the design review record, and as a note on the assembly drawing. The note matters because it
   converts my assumption into a constraint the process must respect, rather than a liability I carry
   silently.
   I would also build in **margin where margin is cheap**. Making a base plate 30 mm instead of 25 mm
   costs little at the design stage and is nearly impossible to retrofit. Provision for a second clamp
   position, or a tapped hole where a support might later be needed, costs almost nothing now.
   Finally I would schedule a **re-validation gate**: when the process is frozen, the fixture
   calculations are rechecked against the actual parameters before the fixture is released for
   production. That gate should be a named deliverable with an owner, not an intention.
   The failure mode to avoid is designing to optimistic assumptions and never revisiting them. That is
   how fixtures get blamed for problems that originated three months earlier in a meeting they were
   not part of.
2. *"You have designed a fixture that works. Six months later, scrap starts appearing on that line.
   Walk me through your investigation."*
   **Answer:** The first hypothesis is always **something changed**, because the fixture worked before.
   I would establish **when** it started, precisely, and correlate that date against the change
   records: process changes, tooling changes, material or supplier changes, machine moves,
   maintenance events, operator changes, and shift patterns. A date correlation usually finds the cause
   faster than any measurement.
   Then the **physical checks**, in order of likelihood: locator wear, because locators wear and nobody
   monitors them until something fails; clamp force degradation, especially on pneumatic systems where
   line pressure drifts; swarf accumulation on locating faces, which is the single most common cause of
   intermittent fixture problems; and damage from a crash that was never reported.
   Then the **process checks**: has the cutting data changed? A well-meaning process engineer
   increasing depth of cut to save cycle time will raise fixture force proportionally, and if my
   drawing note is there, this is where it earns its keep. Has the incoming material changed hardness
   or stock allowance?
   Then the **thermal and environmental** checks: is the scrap pattern time-of-day dependent? First-off
   parts failing and later parts passing is the classic thermal signature. Is coolant flow still what
   it was?
   Finally I would measure the fixture against its own drawing — because "the fixture is fine" is an
   assumption, not a fact, until it has been inspected.
   Throughout, I would keep the scrap parts and measure them, because the **error pattern** points at
   the cause: uniform offset suggests a locator has moved or worn; scatter suggests intermittent
   seating or swarf; a trend through the shift suggests thermal; a step change suggests a discrete
   event.

### 29. Summary
Metal cutting is a shearing process in which the tool wedges into the material until it fails along a
shear plane, producing a chip that carries most of the heat away. Three parameters define any cutting
operation: cutting speed `V = πDN/1000`, feed, and depth and width of cut, which together give
`MRR = a_p × a_e × v_f`. Cutting force is governed principally by depth of cut and feed — approximately
proportional to the chip cross-sectional area — and only weakly by cutting speed, which instead
dominates tool life. Fixtures must be sized for the roughing pass where force is highest, and checked
for part distortion on the finishing pass where tolerance is achieved. Cutting heat also matters:
steel grows about 11.5 µm per metre per °C, so a 400 mm fixture warming 8 °C drifts 0.037 mm — more
than the entire tolerance band on many precision features.

### 30. Key takeaways
- Cutting is **shearing**. It takes force, and your fixture reacts that force.
- **`N = 1000V/(πD)`** — the conversion you will use most often.
- **`MRR = a_p × a_e × v_f`** — productivity, and a proxy for fixture load.
- **Force ∝ chip area ≈ a_p × f_z.** Speed has little effect on force.
- **Speed kills tools; feed and depth kill fixtures.**
- **Size for roughing** (force); **check finishing** (distortion).
- Halving depth of cut roughly **halves peak force** — the lever that actually works.
- High MRR means **high chip volume** — design evacuation from the start.
- Steel grows **~11.5 µm/m/°C**; aluminium about double. On precision work this is a real error.
- **Record the parameters the fixture was designed to.** Processes change; drawings remember.

---

## LESSON L0.4.2 — CUTTING FORCES: MAGNITUDE AND DIRECTION

### 1. Lesson title
**L0.4.2 — Estimating cutting force with specific cutting force, and why direction matters more than magnitude**

### 2. Learning objective
By the end of this lesson you will be able to estimate cutting force using the specific cutting force
method, resolve it into components, distinguish climb from conventional milling and state the fixture
consequence of each, and explain why the direction of the cutting force governs locator placement.

### 3. Prerequisites
L0.3.1 (forces and moments), L0.3.3 (friction), L0.4.1 (cutting parameters).

### 4. Why the topic matters
This is the **keystone lesson of Level 0**. Everything you learned in Module 0.3 needs a force value as
its input, and this lesson is where that number comes from.

But the more important content is the second half. Beginners obsess over the magnitude of the cutting
force. Experienced designers care at least as much about its **direction**, for a reason that follows
directly from L0.3.3: a force pushed **into a locator** is resisted by a hardened steel stop and costs
you nothing, while the same force pushed **away from the locator** must be resisted by friction and may
demand tens of kilonewtons of clamping.

The same 3 kN cutting force can require either 1,500 N of clamping or 30,000 N, depending entirely on
which way it points. Choosing the direction — or choosing the locator positions to suit it — is the
single highest-leverage decision in fixture design.

### 5. Simple explanation
When a tool cuts, it pushes on the part. You need to know two things: **how hard** and **which way**.

**How hard** depends mostly on how much metal you are removing at once and how tough the metal is.
Tough materials need more force. Bigger bites need more force.

**Which way** depends on how the cutter is moving. And this matters enormously — because if the push
is toward a solid stop, the stop takes it easily. If the push is away from the stop, only friction
holds the part, and friction is weak.

Imagine sliding a book across a desk against a wall. Push it toward the wall and the wall stops it with
no effort. Push it away from the wall and you must hold it down hard enough that friction alone stops
it. Same book, same push, completely different difficulty.

### 6. Engineering explanation

**The specific cutting force method** `[STD — standard machining theory]`

The standard first-principles estimate of cutting force is:
```
F_c = k_c × A_c
```
where:
- `F_c` = main (tangential) cutting force, N
- `k_c` = specific cutting force, N/mm² — a material property
- `A_c` = chip cross-sectional area, mm²

For milling, per tooth in cut:
```
A_c = a_p × f_z        (approximately, for full engagement)
```

For a milling cutter, several teeth may be engaged at once. The number of teeth in cut is:
```
z_c = z × (engagement angle / 360°)
```
and total force is approximately `F_c = k_c × a_p × f_z × z_c`.

**Specific cutting force values** `[GUIDE — indicative; use tooling manufacturer data for design]`

| Material | k_c (N/mm²) |
|---|---|
| Aluminium alloys | 400 – 800 |
| Grey cast iron | 900 – 1,400 |
| Mild steel (up to 500 MPa) | 1,500 – 1,800 |
| Medium carbon steel (EN8) | 1,800 – 2,100 |
| Alloy steel (EN19, hardened) | 2,100 – 2,900 |
| Stainless steel (304/316) | 2,000 – 2,600 |
| Titanium alloys | 1,800 – 2,400 |
| Inconel / nickel alloys | 2,700 – 4,000 |

> **These are guideline values for estimation.** For design release, use the specific cutting force
> from the tooling manufacturer's data for the actual insert grade, geometry and material condition
> `[MFR]`. Values vary with rake angle, chip thickness and tool wear — a worn tool can draw 1.5× the
> force of a sharp one `[GUIDE]`, which is an important reason for the safety factor.

**The alternative: power-based estimation**

If spindle power is known, force can be back-calculated:
```
P_c = F_c × V / 60,000          (kW, with F_c in N and V in m/min)
→  F_c = 60,000 × P_c / V
```
This is useful as a cross-check and as an upper bound: the machine cannot apply more force than its
power allows.

**Force components**

The resultant cutting force resolves into three components:

| Component | Symbol | Typical magnitude | Direction |
|---|---|---|---|
| **Tangential** (main) | F_c | 100% (reference) | Along the cutting direction |
| **Radial** (feed) | F_f | 30–60% of F_c `[GUIDE]` | Perpendicular, in the feed plane |
| **Axial** | F_p | 20–50% of F_c `[GUIDE]` | Along the tool axis |

For fixture design a common practical simplification is:
```
F_resultant ≈ 1.2 × F_c        [GUIDE — reasonable for general milling]
```
but the components must be considered **separately by direction**, because the fixture resists them
differently. A vertical (axial) force in a VMC pushes the part **into** the base — usually helpful. A
horizontal force tries to **slide** the part — usually the problem.

**CLIMB VS CONVENTIONAL MILLING — the direction decision**

```
CONVENTIONAL (UP) MILLING          CLIMB (DOWN) MILLING
cutter rotation opposes feed       cutter rotation matches feed

      ↻ cutter                            ↻ cutter
   ────────────                        ────────────
   →  feed                             →  feed

  Chip: thin → thick                 Chip: thick → thin
  Tool tends to LIFT the part        Tool tends to PUSH DOWN on part
  Force pushes part AWAY from cut    Force pushes part INTO the cut
  Rubbing at entry → work hardening  Clean entry
  Needs no backlash control          Needs backlash-free (CNC ballscrew)
```

| | Conventional milling | Climb milling |
|---|---|---|
| Chip thickness | Thin → thick | Thick → thin |
| Vertical force on part | Tends to **lift** | Tends to **push down** |
| Surface finish | Poorer | Better |
| Tool life | Shorter | Longer |
| Fixture consequence | **Worse** — lifting force fights the clamps | **Better** — force seats the part |
| Machine requirement | Tolerates backlash | Requires rigid, backlash-free feed |

> **On modern CNC machines, climb milling is standard**, and it is the fixture designer's friend
> because the vertical force component seats the part rather than lifting it. But **do not assume** —
> confirm with the process sheet, and design for whichever is specified. If the process sheet says
> conventional, the lifting force must be added to your clamping requirement.

**THE CENTRAL PRINCIPLE: DIRECT THE FORCE INTO A LOCATOR**

From L0.3.3 you know that friction is a weak, uncertain resource and a positive stop is a strong,
certain one. The cutting force direction determines which one you are relying on.

```
CASE A — CUTTING FORCE INTO THE LOCATOR

     F_cut →  ┌──────────┐ ▓▓ hardened stop
              │   PART   │ ▓▓
              └──────────┘ ▓▓
     Clamp only has to hold the part down and
     stop it lifting. The STOP takes the cut load.
     Required clamp force: SMALL.

CASE B — CUTTING FORCE AWAY FROM THE LOCATOR

  ▓▓ ┌──────────┐  → F_cut
  ▓▓ │   PART   │
  ▓▓ └──────────┘
     Nothing in front of the part. Only FRICTION
     resists sliding, and μ ≈ 0.12 with coolant.
     Required clamp force: F_cut × SF / μ  — HUGE.

  ┌──────────────────────────────────────────────┐
  │  SAME CUTTING FORCE.                         │
  │  CASE A NEEDS ~1/20 THE CLAMPING OF CASE B.  │
  └──────────────────────────────────────────────┘
```

This is why the fixture design sequence is:
1. Determine the cutting force **direction** first
2. Place a **locator** to receive it
3. Only then size the clamping to hold the part down and stop lifting

Not the other way round. Sizing clamps first, then discovering the force direction, is the mistake
that produces fixtures needing impossible clamping forces.

**Interrupted cuts and shock loading**

When a milling cutter enters and leaves the material, force is applied and removed suddenly. Each tooth
entry is an impact. Consequences:
- Peak force can substantially exceed the average — a factor of **1.3–2.0** is a reasonable allowance
  for interrupted cuts `[GUIDE]`
- Cyclic loading can loosen fasteners and cause fatigue (L18.5)
- Vibration and chatter can be excited (L10.3)

**Always design to peak force, not average force**, and be explicit about the shock allowance you used.

### 7. Terminology

| Term | Definition | SI unit |
|---|---|---|
| **Specific cutting force (k_c)** | Force per unit chip cross-sectional area | N/mm² |
| **Tangential force (F_c)** | Main cutting force, along cutting direction | N |
| **Radial / feed force (F_f)** | Component in the feed plane | N |
| **Axial force (F_p)** | Component along the tool axis | N |
| **Resultant force** | Vector sum of all components | N |
| **Climb (down) milling** | Cutter rotation in the direction of feed | — |
| **Conventional (up) milling** | Cutter rotation against the feed | — |
| **Interrupted cut** | Cut where the tool repeatedly enters and exits | — |
| **Shock factor** | Multiplier on average force to allow for impact | — |
| **Cutting power (P_c)** | Power consumed at the cut | kW |
| **Engagement angle** | Arc of the cutter in contact with the work | degrees |

### 8. Principle

> **DIRECTION BEFORE MAGNITUDE.**
> Estimate the force with `F_c = k_c × A_c`, apply a shock allowance, and design to the **peak**.
> But first determine which way it points, and **place a locator to receive it**. A cutting force
> directed into a hardened stop costs almost nothing to resist; the same force directed away from the
> locators must be held by friction and can demand twenty times the clamping.
> **The cheapest clamping force is the one you designed out by pointing the cut at a locator.**

### 9. Industrial application

**The fixture designer's force workflow**

```
STEP 1  READ THE PROCESS SHEET
        Cutter Ø, teeth, a_p, a_e, f_z, material, climb/conventional

STEP 2  ESTIMATE MAGNITUDE
        F_c = k_c × a_p × f_z × z_c
        Cross-check against spindle power if available

STEP 3  APPLY ALLOWANCES
        × shock factor (1.3–2.0 interrupted)
        × tool wear allowance (up to 1.5 for worn tool)

STEP 4  RESOLVE INTO DIRECTIONS
        Horizontal (sliding) — the dangerous one
        Vertical (seating or lifting) — helpful or harmful

STEP 5  PLACE LOCATORS TO RECEIVE THE HORIZONTAL FORCE
        ← THE HIGH-LEVERAGE STEP

STEP 6  SIZE CLAMPS FOR WHAT REMAINS
        Hold down, resist lifting, resist any residual sliding

STEP 7  CHECK TIPPING AND SLIDING SEPARATELY   (L0.3.1 R3)
```

**Where the force direction changes during a cycle**

A critical practical point: in a multi-pass or contour operation, the **cutting force direction
rotates**. A part being profiled around its perimeter is pushed north, then east, then south, then
west during a single toolpath.

You cannot put a locator on every side — that would over-constrain the part (Level 4). The professional
approach is:
- Identify the **worst-case direction** — the one where the least support exists
- Place locators to receive the **heaviest** cuts, typically the roughing passes
- Size clamping for the worst unsupported direction
- Where possible, ask process planning to **sequence the heavy cuts** to push into the locators, and
  leave the light finishing passes for the unsupported directions

That last point is a genuine collaboration between fixture design and CAM programming, and it is
frequently worth more than any amount of clamp upsizing.

### 10. Design rules
- **R1** — Determine the cutting force **direction before** sizing any clamp.
- **R2** — Place a **locator to receive the cutting force** wherever the geometry allows.
- **R3** — Estimate magnitude with `F_c = k_c × A_c` using `[MFR]` data where available, `[GUIDE]`
  values only for early estimation.
- **R4** — Apply a **shock factor of 1.3–2.0** for interrupted cuts `[GUIDE]`.
- **R5** — Allow for **tool wear** — a worn tool can draw up to 1.5× a sharp one `[GUIDE]`.
- **R6** — Design to **peak** force, never average.
- **R7** — Prefer **climb milling** where the machine permits; it seats the part rather than lifting it.
- **R8** — If **conventional** milling is specified, add the lifting force to the clamping requirement.
- **R9** — In contour operations, identify the **worst-case direction** and design for it.
- **R10** — Discuss cut **sequencing** with CAM — pointing heavy cuts at locators is free force reduction.
- **R11** — Cross-check your force estimate against **spindle power**; the machine cannot exceed it.

### 11. Rules of thumb
- `F_c = k_c × a_p × f_z` per engaged tooth — the workhorse estimate `[STD]`.
- Steel k_c ≈ **1,800–2,100 N/mm²**; aluminium ≈ **400–800**; cast iron ≈ **900–1,400** `[GUIDE]`.
- Resultant force ≈ **1.2 × F_c** for general milling `[GUIDE]`.
- Radial force ≈ **30–60%** of tangential; axial ≈ **20–50%** `[GUIDE]`.
- Interrupted cut shock factor **1.3–2.0** `[GUIDE]`.
- Worn tool factor up to **1.5** `[GUIDE]`.
- `P_c (kW) = F_c × V / 60,000` — the power cross-check.
- A force into a stop costs perhaps **1/20** the clamping of the same force into friction.
- Climb milling pushes down; conventional milling lifts. Prefer climb.

### 12. Formulae

**Specific cutting force**   `F_c = k_c × A_c`
**Chip area (milling)**      `A_c ≈ a_p × f_z`
**Teeth in cut**             `z_c = z × (engagement angle / 360°)`
**Total milling force**      `F_c = k_c × a_p × f_z × z_c`
**Cutting power**            `P_c = F_c × V / 60,000`      (kW)
**Force from power**         `F_c = 60,000 × P_c / V`      (N)
**Design force**             `F_design = F_c × SF_shock × SF_wear`
**Resultant (approx.)**      `F_R ≈ 1.2 × F_c`
**Torque at cutter**         `T = F_c × D / 2`             (N·mm)

| Variable | Meaning | SI unit |
|---|---|---|
| F_c | Tangential cutting force | N |
| k_c | Specific cutting force | N/mm² |
| A_c | Chip cross-sectional area | mm² |
| a_p | Axial depth of cut | mm |
| f_z | Feed per tooth | mm/tooth |
| z | Total teeth on cutter | — |
| z_c | Teeth engaged in cut | — |
| V | Cutting speed | m/min |
| P_c | Cutting power | kW |
| D | Cutter diameter | mm |
| T | Torque | N·mm |

### 13. Worked numerical example

**Problem:** A Ø100 mm face mill with 8 inserts cuts EN8 steel. Depth of cut 4 mm, width of cut 75 mm,
feed 0.25 mm/tooth, cutting speed 200 m/min (the operation from L0.4.1 §13). The part is a 15 kg steel
block, coefficient of friction 0.12 with coolant.

Determine: (a) the number of teeth in cut, (b) the cutting force, (c) the design force with shock and
wear allowances, (d) the cutting power and a check against a 15 kW spindle, (e) the clamping force
required with no locator resisting the cut, (f) the clamping force required with a positive stop, (g)
an engineering assessment.

```
GIVEN:
  Cutter diameter          D    = 100 mm                   [PROJ]
  Number of inserts        z    = 8                        [PROJ]
  Axial depth of cut       a_p  = 4 mm                     [PROJ]
  Radial width of cut      a_e  = 75 mm                    [PROJ]
  Feed per tooth           f_z  = 0.25 mm/tooth            [MFR]
  Cutting speed            V    = 200 m/min                [MFR]
  Workpiece material            = EN8 steel                [PROJ]
  Specific cutting force   k_c  = 2000 N/mm²               [GUIDE]
  Workpiece mass           m    = 15 kg                    [PROJ]
  Coefficient of friction  μ    = 0.12 (steel, coolant)    [GUIDE]
  Shock factor                  = 1.5 (interrupted cut)    [GUIDE]
  Wear factor                   = 1.3                      [GUIDE]
  Sliding safety factor    SF   = 2.0                      [PRACTICE]
  Available spindle power       = 15 kW                    [MFR]
  Number of clamps         n    = 2                        [PROJ]

REQUIRED:
  (a) Teeth engaged in cut
  (b) Cutting force
  (c) Design force with allowances
  (d) Cutting power and spindle check
  (e) Clamping force needed — friction only
  (f) Clamping force needed — with positive stop
  (g) Engineering assessment

ASSUMPTION:
  1. k_c = 2000 N/mm² is a GUIDELINE mid-range value for EN8.
     For design release this MUST BE CONFIRMED from the insert
     manufacturer's data for the actual grade and geometry. [GUIDE]
  2. Chip area approximated as a_p × f_z per tooth. This
     neglects the variation of chip thickness through the
     engagement arc and is the standard first approximation.
  3. Shock factor 1.5 for an interrupted face milling cut.
     [GUIDE — range 1.3-2.0]
  4. Wear factor 1.3 allowing for force rise as the edge dulls.
     [GUIDE — up to 1.5]
  5. Sliding safety factor 2.0. [PRACTICE]
  6. Cutting force assumed horizontal for the sliding check —
     the worst case for a face mill traversing the part.
  7. Part weight contributes to the normal force on the base.
  8. Case (f) assumes the stop is correctly positioned to
     receive the cut direction and is itself adequately
     supported and dowelled (L8.1.5).

FORMULA:
  (a) z_c = z × (engagement angle / 360°)
      engagement angle from cos θ relationship for a_e/D
  (b) F_c = k_c × a_p × f_z × z_c
  (c) F_design = F_c × shock × wear
  (d) P_c = F_c × V / 60000
  (e) F_clamp = (F_design × SF) / (μ × n)          friction only
  (f) F_clamp = holding + anti-lift only            with stop

VARIABLE DEFINITIONS:
  As tabulated in §12 above.

UNIT CONVERSION:
  W = mg = 15 × 9.81 = 147.15 N
  All other values already in consistent N-mm units.

SUBSTITUTION AND CALCULATION:

  (a) TEETH ENGAGED IN CUT
      Ratio a_e/D = 75/100 = 0.75

      For a cutter centred on a 75 mm wide cut in a 100 mm
      cutter, the engagement arc is approximately:
        engagement angle ≈ 2 × arcsin(a_e / D)   for a_e ≤ D
                         = 2 × arcsin(0.75)
                         = 2 × 48.59°
                         = 97.2°

      z_c = 8 × (97.2 / 360)
          = 8 × 0.270
          = 2.16 teeth
      → take z_c = 2.2 teeth engaged (average)

  (b) CUTTING FORCE
      A_c per tooth = a_p × f_z
                    = 4 × 0.25
                    = 1.0 mm²

      F_c = k_c × A_c × z_c
          = 2000 × 1.0 × 2.16
          = 4,320 N

  (c) DESIGN FORCE
      F_design = F_c × shock × wear
               = 4320 × 1.5 × 1.3
               = 4320 × 1.95
               = 8,424 N

  (d) CUTTING POWER
      P_c = F_c × V / 60000
          = 4320 × 200 / 60000
          = 864,000 / 60000
          = 14.4 kW

      Spindle available = 15 kW
      Utilisation = 14.4 / 15 = 96 %

  (e) CLAMPING FORCE — FRICTION ONLY, NO STOP
      Normal force needed:
        N_required = (F_design × SF) / μ
                   = (8424 × 2.0) / 0.12
                   = 16,848 / 0.12
                   = 140,400 N

      Part weight contributes 147 N, which is negligible here.
        N_from_clamps = 140,400 − 147 = 140,253 N

      Per clamp (n = 2):
        F_clamp = 140,253 / 2
                = 70,127 N per clamp
                = 70.1 kN per clamp

  (f) CLAMPING FORCE — WITH A POSITIVE STOP
      The stop takes the horizontal cutting force. The clamp
      must now only:
        - hold the part down against any lifting component
        - maintain seating contact

      Taking the lifting/axial component as 30 % of F_design
      (conservative for a face mill; climb milling would push
      DOWN, but the worst case is assumed):
        F_lift = 0.30 × 8424 = 2,527 N

      With SF 2.0, and crediting part weight:
        Required hold-down = (2527 × 2.0) − 147
                           = 5054 − 147
                           = 4,907 N

      Per clamp (n = 2):
        F_clamp = 4907 / 2
                = 2,454 N per clamp
                = 2.45 kN per clamp

      REDUCTION FACTOR = 70,127 / 2,454 = 28.6×

RESULT:
  ┌──────────────────────────────────┬────────────────────┐
  │ (a) Teeth engaged                │ 2.16               │
  │ (b) Cutting force F_c            │ 4,320 N            │
  │ (c) Design force (shock × wear)  │ 8,424 N            │
  │ (d) Cutting power                │ 14.4 kW (96 % of   │
  │                                  │ a 15 kW spindle)   │
  │ (e) Clamp force, FRICTION ONLY   │ 70,127 N per clamp │
  │ (f) Clamp force, WITH STOP       │ 2,454 N per clamp  │
  │     REDUCTION                    │ 28.6×              │
  └──────────────────────────────────┴────────────────────┘

SAFETY FACTOR:
  Sliding safety factor of 2.0 applied throughout. [PRACTICE]
  Shock 1.5 and wear 1.3 applied as force multipliers, giving a
  combined design allowance of 1.95 on the calculated cutting
  force before the safety factor.
  Effective total margin on nominal cutting force:
     1.95 × 2.0 = 3.9

PASS/FAIL:
  (e) ✗ FAIL — 70 kN per clamp is not achievable with
      conventional manual or pneumatic clamping and would
      certainly crush a typical workpiece. THIS DESIGN IS
      NOT VIABLE.
  (f) ✓ PASS — 2.45 kN per clamp is comfortably within the
      range of a manual strap clamp or a small hydraulic
      cylinder. THIS DESIGN IS VIABLE.
  (d) ⚠ MARGINAL — 96 % spindle utilisation leaves no headroom
      for tool wear. Flag to process planning.

ENGINEERING CONCLUSION:
  THIS EXAMPLE IS THE CENTRAL LESSON OF LEVEL 0 EXPRESSED IN
  NUMBERS.

  1. THE MAGNITUDE IS UNREMARKABLE. THE DIRECTION DECIDES
     EVERYTHING.
     The cutting force is 4.3 kN, rising to 8.4 kN with shock
     and wear allowances. That is a perfectly ordinary force for
     a medium face milling cut. Yet depending on ONE DESIGN
     DECISION — whether a stop is fitted to receive it — the
     required clamping force is either 70 kN per clamp
     (impossible) or 2.45 kN per clamp (routine).

     A 28.6× DIFFERENCE FROM A SINGLE BLOCK OF HARDENED STEEL.

     No amount of clamp upsizing, plate thickening or material
     upgrading can substitute for getting this right. This is
     why the design sequence is DIRECTION → LOCATOR → CLAMP,
     and never the reverse.

  2. THE FRICTION-ONLY CASE IS NOT MERELY EXPENSIVE — IT IS
     PHYSICALLY IMPOSSIBLE.
     70 kN on a clamp pad of, say, 20 × 20 mm gives a contact
     pressure of 175 MPa — well beyond the yield strength of
     mild steel and most aluminium. The clamp would emboss
     itself into the workpiece long before it generated the
     friction required. This is the practical reality behind
     the L0.3.3 warning: friction-only clamping schemes do not
     just calculate badly, they fail physically.

  3. THE SPINDLE IS THE HIDDEN CONSTRAINT.
     At 14.4 kW the operation uses 96 % of the available 15 kW.
     A worn tool drawing 30 % more force would demand 18.7 kW —
     more than the machine has. The cut would stall or the
     machine would trip. This is worth flagging to process
     planning, because if they respond by reducing the depth of
     cut, the fixture load falls too, which is good news for me.

  RECOMMENDATION: Fit a positive stop on the side receiving the
  cutting force. Size clamps for 2.45 kN each with an
  appropriate margin. Specify climb milling to obtain a
  downward rather than lifting axial component. Raise the 96 %
  spindle utilisation with process planning.

SENSITIVITY NOTE:
  Ranked by influence on the REQUIRED CLAMPING FORCE:
    1. PRESENCE OF A POSITIVE STOP — 28.6× effect. Dominant by
       an enormous margin. Nothing else comes close.
    2. COEFFICIENT OF FRICTION (friction-only case) —
       μ = 0.15 → 56 kN/clamp;  μ = 0.08 → 105 kN/clamp.
       Still impossible in every case, which is the point.
    3. DEPTH OF CUT — linear on F_c. Halving a_p to 2 mm halves
       the cutting force to 2,160 N.
    4. SHOCK AND WEAR FACTORS — combined 1.95×. Conservative
       choices here are cheap insurance.
    5. NUMBER OF CLAMPS — linear, but doubling clamps to make a
       friction-only scheme work would need 8 clamps at 17.5 kN
       each. Still not viable.
    6. CUTTING SPEED — no effect on force at all. Confirms the
       L0.4.1 hierarchy.
```

### 14. Engineering assumptions
- k_c = 2000 N/mm² is a `[GUIDE]` mid-range value for EN8 — must be confirmed from insert manufacturer
  data for design release.
- Chip area approximated as `a_p × f_z` per tooth, neglecting chip thickness variation through the arc.
- Shock factor 1.5 `[GUIDE]`, wear factor 1.3 `[GUIDE]`.
- Sliding safety factor 2.0 `[PRACTICE]`.
- Cutting force taken as horizontal for the sliding check — worst case for a traversing face mill.
- Lifting component taken as 30% of design force — conservative; climb milling would push down.
- The stop in case (f) is assumed correctly positioned, supported and dowelled.

### 15. Diagram

```
     CUTTING FORCE — MAGNITUDE, DIRECTION, AND WHY DIRECTION WINS
     (instructional schematic)

  ESTIMATING MAGNITUDE

      F_c = k_c × A_c        A_c = a_p × f_z

      ┌─────────────────┬──────────────┐
      │ MATERIAL        │ k_c (N/mm²)  │  [GUIDE]
      ├─────────────────┼──────────────┤
      │ Aluminium       │   400 -  800 │
      │ Grey cast iron  │   900 - 1400 │
      │ Mild steel      │  1500 - 1800 │
      │ EN8             │  1800 - 2100 │
      │ Stainless       │  2000 - 2600 │
      │ Inconel         │  2700 - 4000 │
      └─────────────────┴──────────────┘
      Then: × shock (1.3-2.0) × wear (up to 1.5)

  ──────────────────────────────────────────────────────────

  CLIMB vs CONVENTIONAL — THE VERTICAL COMPONENT

    CONVENTIONAL (UP)              CLIMB (DOWN)
         ↻                              ↻
      ╲  │  ╱                        ╲  │  ╱
       ╲ │ ╱  cutter                  ╲ │ ╱  cutter
    ─────┴─────                    ─────┴─────
    ▒▒▒▒▒▒▒▒▒▒▒  part              ▒▒▒▒▒▒▒▒▒▒▒  part
         ↑                              ↓
      LIFTS the part               PUSHES DOWN on part
      fights your clamps           HELPS your clamps
                                   ← PREFER THIS

  ──────────────────────────────────────────────────────────

  THE DECISION THAT MATTERS — WORKED NUMBERS FROM §13

  CASE A: FORCE INTO A POSITIVE STOP

      F_cut = 8,424 N
         ────────────→  ┌──────────┐▓▓▓
                        │   PART   │▓▓▓ ← hardened stop
                        └──────────┘▓▓▓    takes the load
        ↓clamp   ↓clamp
       2,454 N   2,454 N        ✓ VIABLE

  CASE B: FORCE INTO FRICTION ONLY

      F_cut = 8,424 N
         ────────────→  ┌──────────┐
                        │   PART   │   (nothing here)
                        └──────────┘
        ↓clamp   ↓clamp
      70,127 N  70,127 N        ✗ IMPOSSIBLE
                                  (175 MPa contact
                                   pressure — the clamp
                                   embosses the part)

  ┌────────────────────────────────────────────────────────┐
  │              28.6×  DIFFERENCE                         │
  │                                                        │
  │  SAME PART. SAME CUT. SAME FORCE.                      │
  │  ONE BLOCK OF HARDENED STEEL.                          │
  │                                                        │
  │  DESIGN SEQUENCE:  DIRECTION → LOCATOR → CLAMP         │
  │  NEVER:            CLAMP → hope                        │
  └────────────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  FORCE COMPONENTS — RESOLVE BEFORE YOU DESIGN

              F_p (axial, 20-50 %)
               ↑
               │      F_resultant ≈ 1.2 F_c
               │     ╱
               │   ╱
               │ ╱
      ─────────●────────→ F_c (tangential, 100 %)
              ╱
            ╱  F_f (radial/feed, 30-60 %)

     HORIZONTAL components → try to SLIDE the part → need a STOP
     VERTICAL   components → seat it (climb) or LIFT it (conv.)
```

### 16. Drawing example
Not a drawing lesson. Documentation practice: **show the cutting force direction on the fixture
assembly drawing**, as an arrow with a magnitude note. For example:

```
        ┌─────────────────┐
   ───→ │    WORKPIECE    │ ▓ STOP
 F_cut  └─────────────────┘

   NOTE: PRIMARY CUTTING FORCE 8.4 kN MAX ACTING IN
         DIRECTION SHOWN. STOP BLOCK ITEM 7 DESIGNED
         TO REACT THIS LOAD. DO NOT RELOCATE.
```

The instruction "DO NOT RELOCATE" is not decoration. Stop blocks get moved by well-meaning people who
do not know why they are where they are.

### 17. CAD workflow
Not a CAD lesson. Two forward-looking notes:
1. **CAM force output** — most CAM systems report cutting force and spindle load per operation. Export
   this and compare against your hand calculation. Agreement within about 25% is reassuring;
   disagreement warrants investigation.
2. **FEA load application** — when you analyse the fixture at L20.3.2, the load case comes from this
   lesson. Apply the force at the correct point, in the correct direction, with the shock factor
   included. An FEA run with the wrong load direction is worse than no FEA at all, because it looks
   authoritative.

### 18. GD&T application
Not applicable at this lesson. Forward link: the stop that receives the cutting force **is a locator**
(the L0.3.3 doctrine), so its position must be dimensioned and toleranced on the fixture drawing and
its wear must be monitored. It is a functional surface, not a bracket.

### 19. Manufacturing method
Not applicable at this lesson. Practical note: stop blocks receiving cutting force should be **hardened
and dowelled**, not merely bolted. Bolts alone rely on friction at the joint — the same weak resource
you are trying to avoid at the part interface. Dowels provide the positive location (L8.1.5).

### 20. Inspection method
Not applicable at this lesson. Practical note: fixture force capacity can be validated at commissioning
by cutting a test part at the maximum specified parameters and inspecting it, with a dial indicator on
the part to detect any movement during the cut.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Sizing clamps before determining force direction** | Impossible clamping requirements; redesign |
| 2 | No stop fitted where the cutting force points | 20–30× the necessary clamping force |
| 3 | Using average force instead of peak | Fixture fails on tooth-entry shock |
| 4 | No allowance for tool wear | Force rises 30–50% in service; part moves |
| 5 | Assuming climb milling without confirming | Unexpected lifting force |
| 6 | Ignoring the axial component in a VMC | Lifting or over-seating not accounted for |
| 7 | Using k_c for the wrong material | Force wrong by 2–5× |
| 8 | Forgetting force direction rotates in contouring | Part moves on one segment of the toolpath |
| 9 | Not cross-checking against spindle power | Estimate physically impossible, unnoticed |
| 10 | Bolting the stop block without dowels | Stop creeps under repeated load |
| 11 | Treating a 1.2× resultant factor as exact | False precision on an estimate |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Part shifts on one side of a contour only | Force direction unsupported on that segment | Map toolpath against locator positions | Add stop, or resequence toolpath | Analyse all force directions at design |
| Part moves only late in tool life | Force rise from tool wear | Compare fresh vs worn tool results | Apply wear factor; enforce tool change | Include 1.3–1.5 wear factor |
| Part lifts during cut | Conventional milling, or axial component | Check process sheet for cut direction | Change to climb; increase hold-down | Confirm cut direction at design |
| Movement only on entry to cut | Shock loading exceeds static estimate | Observe part at tooth entry | Apply shock factor; ramp entry in CAM | Design to peak, not average |
| Stop block found displaced | Bolted without dowels | Inspect for fretting at the joint | Add dowels | Dowel all load-bearing stops |
| Calculated force far exceeds spindle capacity | k_c wrong, or parameters misread | Cross-check with `P = F·V/60000` | Recheck inputs | Always run the power cross-check |

### 23. Design checklist
- [ ] Have I determined the cutting force **direction** before anything else?
- [ ] Is there a **locator positioned to receive** the cutting force?
- [ ] Is that stop **hardened and dowelled**?
- [ ] Have I used `[MFR]` k_c data, or clearly labelled a `[GUIDE]` estimate?
- [ ] Have I applied a **shock factor** for interrupted cuts?
- [ ] Have I applied a **tool wear** allowance?
- [ ] Have I designed to **peak**, not average, force?
- [ ] Have I resolved the force into horizontal and vertical components?
- [ ] Have I confirmed climb or conventional milling from the process sheet?
- [ ] For contour operations, have I identified the **worst-case direction**?
- [ ] Have I cross-checked the force against **spindle power**?
- [ ] Have I discussed cut sequencing with CAM to point heavy cuts at locators?
- [ ] Have I noted the force magnitude and direction on the assembly drawing?

### 24. Beginner exercise
**E0.4.2-B** — A face mill takes a 3 mm depth of cut at 0.20 mm/tooth in mild steel
(k_c = 1,700 N/mm² `[GUIDE]`), with 3 teeth engaged.
(a) Calculate the chip area per tooth.
(b) Calculate the cutting force.
(c) Apply a shock factor of 1.5 and a wear factor of 1.3 to obtain the design force.
(d) State, in one sentence, the most important thing you would do with this number.

### 25. Intermediate exercise
**E0.4.2-I** — A Ø80 mm cutter with 6 inserts machines grey cast iron (k_c = 1,200 N/mm² `[GUIDE]`) at
a_p = 5 mm, f_z = 0.30 mm/tooth, a_e = 60 mm, V = 120 m/min. The part weighs 22 kg, μ = 0.15, and two
clamps are available.
(a) Estimate the teeth in cut and the cutting force.
(b) Apply shock 1.6 and wear 1.3 to obtain the design force.
(c) Calculate the cutting power and state whether an 11 kW spindle is adequate.
(d) Calculate the required clamp force per clamp with friction only, SF = 2.0.
(e) Calculate the required clamp force per clamp with a positive stop, assuming a 25% lifting
component.
(f) State the reduction factor and write a two-sentence recommendation.

### 26. Advanced exercise
**E0.4.2-A** — A steel bracket is profiled around its full perimeter on a VMC using a Ø20 mm end mill,
4 flutes, a_p = 12 mm, a_e = 4 mm, f_z = 0.08 mm/tooth, V = 140 m/min, EN8 steel
(k_c = 2,000 N/mm² `[GUIDE]`). Climb milling throughout. The part is 4.5 kg and the toolpath travels
clockwise around the perimeter viewed from above.
(i) Calculate the cutting force and the design force with shock 1.4 and wear 1.3.
(ii) Sketch (ASCII is acceptable) the part in plan view and mark the cutting force direction at the
four mid-side positions of the toolpath.
(iii) Explain why a single stop cannot resist all four directions, and why adding four stops is not the
solution.
(iv) Propose a locating scheme using two stops and state which toolpath segments remain
friction-dependent.
(v) Calculate the clamping force required for the worst unsupported segment with μ = 0.12, SF = 2.0,
two clamps.
(vi) Propose a change to the toolpath sequence that would reduce the clamping requirement, and quantify
the benefit.
(vii) The customer will not permit any toolpath change. Give two further engineering options and
recommend one with justification.

### 27. Interview questions
1. *"How do you estimate cutting force for a fixture you are designing?"*
   **Answer:** I use the specific cutting force method, `F_c = k_c × A_c`, where the chip area is
   approximately depth of cut times feed per tooth, multiplied by the number of teeth engaged. I take
   k_c from the tooling manufacturer's data for the actual material and insert grade where I can, and
   use published guideline ranges only for early estimation. Then I apply a shock factor of around 1.5
   for interrupted cuts and a wear allowance of about 1.3, and design to that peak. I cross-check
   against spindle power using `P = F·V/60000` — the machine cannot deliver more force than its power
   allows, so if my number implies more power than the spindle has, I have made an error somewhere.
2. *"Which matters more: the magnitude of the cutting force or its direction?"*
   **Answer:** The direction, and it is not close. A force directed into a hardened positive stop is
   resisted almost for free. The identical force directed away from the locators must be held by
   friction, and with a coolant-wetted μ of around 0.12 that requires roughly twenty to thirty times
   the clamping force — often a physically impossible amount that would crush the part before it
   generated the friction needed. So the design sequence is always direction first, then place a
   locator to receive it, then size the clamps for what remains.

### 28. Expert questions
1. *"A CAM programmer wants to change the toolpath to save 20 seconds of cycle time. What is your
   response as the fixture engineer?"*
   **Answer:** My response is neither automatic approval nor automatic refusal — it is to establish
   what actually changes, because toolpath changes affect the fixture in ways that are invisible from
   the CAM screen.
   The questions I would ask are: does the **force direction** change relative to my locators? A
   resequenced path may point a heavy cut at an unsupported face, and that single change can move the
   clamping requirement by an order of magnitude. Does the **depth or width of cut** increase? Those
   are linear on force. Does the **entry strategy** change — a plunge or a full-width entry generates
   far higher shock than a ramp or an arc lead-in. Does the tool now pass closer to my clamps, creating
   a **collision or access** problem? And does the change alter the **heat input or chip volume** in a
   way that affects thermal growth or evacuation?
   If the change is force-neutral or favourable, I approve it and update the design record. If it
   increases force in an unsupported direction, I say so with numbers — "this moves the required
   clamping from 2.4 kN to 41 kN per clamp" is a conversation-ending statement in a way that "I don't
   think that's a good idea" is not.
   And I would look for the third option, which usually exists: often the cycle time saving can be kept
   while pointing the heavy cut at the locator instead of away from it. Twenty seconds and a viable
   fixture are not mutually exclusive; they just require the two of us to design the operation
   together rather than sequentially.
   Underlying all of this is a governance point: the fixture was validated against specific parameters,
   and those parameters are recorded on the drawing. A toolpath change is a **change to a validated
   condition** and should go through change control (L27.3), not through a corridor conversation.
2. *"You calculate a required clamping force that the available clamps cannot deliver. Rank your
   options."*
   **Answer:** I would work through them in order of engineering merit, not convenience.
   **First, add a positive stop to receive the cutting force.** This is almost always available and
   almost always dominant — typically a twenty- to thirty-fold reduction in the clamping requirement.
   If I have reached a high clamping number, my first assumption is that I have failed to do this,
   because a correctly directed fixture rarely produces impossible numbers.
   **Second, reduce the cutting force at source.** Lighter depth of cut with more passes roughly halves
   the peak force per pass. This costs cycle time and needs process agreement, but it is a real lever.
   **Third, improve the friction interface** — serrated pads raise μ from around 0.12 to 0.30–0.50,
   which is a three- to fourfold improvement. But this marks the workpiece, so it is only acceptable on
   non-functional surfaces, and I regard it as a supplement to a stop, never a replacement.
   **Fourth, add more clamps.** Linear benefit, and it adds cost, cycle time and loading complexity. It
   also risks over-constraining or distorting the part.
   **Fifth, increase clamp force with hydraulics.** This is where inexperienced designers start, and it
   is nearly last on my list, because high clamping force distorts thin-walled parts, marks surfaces,
   and treats the symptom rather than the cause. It also has a hard ceiling: contact pressure cannot
   exceed the workpiece material's yield strength, so above a certain force the clamp simply embosses
   the part.
   **Last, question the operation itself.** Sometimes the correct answer is that this operation should
   not be done in this setup — that it belongs in a different orientation, a different machine, or a
   different sequence. That is an uncomfortable conversation but occasionally the only honest one.
   The meta-point is that if I find myself at option five, I have almost certainly skipped option one.

### 29. Summary
Cutting force is estimated as `F_c = k_c × A_c`, where the specific cutting force k_c is a material
property ranging from roughly 400 N/mm² for aluminium to 4,000 N/mm² for nickel alloys, and the chip
area is approximately depth of cut times feed per tooth times the teeth engaged. A shock factor of
1.3–2.0 for interrupted cuts and a wear allowance up to 1.5 are applied to obtain the peak design
force, and the result should be cross-checked against spindle power. But the decisive content is
directional: climb milling pushes the part down while conventional milling lifts it, and — far more
importantly — a cutting force directed into a positive stop requires a fraction of the clamping needed
when the same force is resisted by friction alone. The worked example demonstrated a 28.6-fold
difference between the two arrangements, with the friction-only case not merely expensive but
physically impossible. The design sequence is therefore always direction, then locator, then clamp.

### 30. Key takeaways
- **`F_c = k_c × A_c`** with `A_c ≈ a_p × f_z` per engaged tooth — the standard estimate.
- k_c `[GUIDE]`: aluminium 400–800, cast iron 900–1,400, steel 1,500–2,100, stainless 2,000–2,600,
  Inconel 2,700–4,000 N/mm².
- Apply **shock 1.3–2.0** and **wear up to 1.5**. Design to **peak**, never average.
- Cross-check with **`P = F·V/60,000`** — the machine cannot exceed its power.
- Components: radial 30–60% of tangential, axial 20–50%; resultant ≈ 1.2 F_c `[GUIDE]`.
- **Climb milling pushes down** (helps you); **conventional lifts** (fights you). Prefer climb.
- **DIRECTION BEFORE MAGNITUDE.** Point the cut at a locator.
- Worked result: **70 kN/clamp without a stop, 2.45 kN/clamp with one — 28.6×.**
- Friction-only clamping is often not just costly but **physically impossible** — the clamp yields the part.
- Design sequence: **DIRECTION → LOCATOR → CLAMP.** Never clamp first and hope.

---

## LESSON L0.4.3 — THE SEVEN MACHINING OPERATIONS

### 1. Lesson title
**L0.4.3 — Milling, drilling, boring, reaming, tapping, counterboring and facing: what each demands of the fixture**

### 2. Learning objective
By the end of this lesson you will be able to identify the seven machining operations a fixture
commonly supports, state the force magnitude and direction each produces, calculate drilling thrust and
tapping torque, and specify the fixture requirement each operation imposes.

### 3. Prerequisites
L0.4.1, L0.4.2.

### 4. Why the topic matters
The previous lesson gave you a general method. This lesson gives you the **operation-specific
knowledge** that stops you applying a milling mindset to a drilling problem.

The differences are not subtle. Milling applies a large **horizontal** force that tries to slide the
part. Drilling applies a large **vertical thrust** that pushes the part into the fixture — helpful —
but also a **torque** that tries to spin it, and at breakthrough it can violently **grab and lift**.
Tapping reverses direction mid-operation. Reaming applies almost no force but demands near-perfect
alignment. Each operation has a distinct failure mode, and a fixture designed for one may be entirely
inadequate for another.

Most real fixtures support several operations in one setup. You must satisfy all of them.

### 5. Simple explanation
Different tools push in different ways:

- **Milling** — a spinning cutter moves sideways across the part. Pushes **sideways**, hard.
- **Drilling** — a spinning drill pushes **down** into the part and tries to **twist** it.
- **Boring** — a single-point tool enlarges an existing hole precisely. Light force, needs accuracy.
- **Reaming** — a finishing tool that shaves a hole to size. Very light force, needs alignment.
- **Tapping** — cuts a thread, then **reverses** to come out. Twists both ways.
- **Counterboring / countersinking** — makes a recess for a screw head. Like drilling, lighter.
- **Facing** — flattens a surface. Like milling.

The fixture must handle whichever of these happens in its setup — and often several.

### 6. Engineering explanation

**Operation 1 — MILLING**

Rotating multi-tooth cutter, workpiece fed past it.

| Aspect | Detail |
|---|---|
| Primary force | **Horizontal** — tries to slide the part |
| Secondary | Vertical — down in climb, up in conventional |
| Magnitude | High. Governs most fixture designs. `F_c = k_c a_p f_z z_c` |
| Character | Interrupted, cyclic. Shock at each tooth entry |
| **Fixture demand** | **Positive stop against the cut direction.** Rigid support under the cut. Chip evacuation |
| Failure mode | Part slides; chatter; poor finish |

**Operation 2 — DRILLING**

Rotating two-flute (usually) tool advancing along its axis.

Two forces matter:
```
THRUST (axial)  — pushes the part INTO the fixture     [usually helpful]
TORQUE          — tries to ROTATE the part             [always a problem]
```

Estimation `[GUIDE — empirical relationships; confirm with tooling data]`:
```
Thrust:  F_t ≈ K_t × d × f          (N)
Torque:  M   ≈ K_m × d² × f         (N·mm)
```
where d is the drill diameter (mm), f the feed per revolution (mm/rev), and K_t, K_m are material
constants. Indicative values:

| Material | K_t (N/mm²·rev) | K_m (N/mm·rev) |
|---|---|---|
| Aluminium | 400 – 700 | 100 – 200 |
| Cast iron | 700 – 1,000 | 200 – 300 |
| Mild steel | 1,000 – 1,400 | 300 – 450 |
| Alloy steel | 1,400 – 1,900 | 450 – 600 |
| Stainless | 1,600 – 2,200 | 500 – 700 |

`[GUIDE] — indicative only. Use tooling manufacturer data for design.`

**The three drilling hazards the fixture must address:**

1. **Torque** — the part wants to spin around the drill axis. A single central clamp does nothing to
   prevent this. You need either a stop that resists rotation or clamps positioned off-axis to generate
   a resisting moment.
2. **Breakthrough grab** — as the drill exits, the remaining material thins and the drill can suddenly
   grab, spiking the torque and **lifting** the part off the fixture. Peak torque at breakthrough can
   substantially exceed steady-state. Allow for it.
3. **Chip evacuation** — drilling produces long chips in ductile materials that pack into the flutes
   and the fixture. Deep holes need peck cycles; the fixture needs clear escape paths.

> **The most common drilling fixture error** is providing generous hold-down force and no rotational
> restraint. Thrust is not the problem — the machine's thrust helps seat the part. **Torque is the
> problem.**

**Operation 3 — BORING**

Single-point tool enlarging an existing hole to a precise size and position.

| Aspect | Detail |
|---|---|
| Force | Low — light cuts, single point |
| Character | Continuous (no interruption if the hole is round) |
| Precision | **High** — this is a finishing operation |
| **Fixture demand** | **Rigidity and stability, not strength.** Vibration-free. No distortion from clamping |
| Failure mode | Chatter marks; taper; out-of-round |

Boring is a **stiffness** problem, not a force problem — a direct application of L0.3.4. The boring bar
is a cantilever and is itself the flexible element, but any fixture flexibility adds directly to the
error. Clamping distortion is the silent killer: a part clamped tightly, bored round, then released,
springs back oval.

**Operation 4 — REAMING**

Multi-flute finishing tool removing a small allowance to bring a hole to size and finish.

| Aspect | Detail |
|---|---|
| Force | **Very low** — allowance typically 0.1–0.4 mm on diameter `[GUIDE]` |
| Character | Continuous, self-guiding |
| Precision | Very high on size and finish; **follows the existing hole** for position |
| **Fixture demand** | **Alignment.** The reamer follows the pilot hole — it cannot correct position |
| Failure mode | Bell-mouthing; oversize; poor finish |

> **A reamer sizes a hole; it does not move it.** If the drilled hole is in the wrong place, the reamed
> hole will be the right size in the wrong place. Position comes from the drilling operation and
> therefore from the fixture and the drill bush (L8.3.1).

**Operation 5 — TAPPING**

Cutting an internal thread.

| Aspect | Detail |
|---|---|
| Force | Moderate torque; low thrust (the tap self-feeds) |
| Character | **Reverses direction** — the tap must back out |
| Precision | Thread quality depends on hole size and alignment |
| **Fixture demand** | **Rotational restraint in BOTH directions** |
| Failure mode | Tap breakage; stripped thread; part rotation |

Tapping is the operation most often underestimated. Points that matter:
- Torque reverses on retraction, so a stop that resists only one direction is insufficient
- Tap breakage is common and expensive — a broken tap in a nearly finished part can scrap it
- Tapping torque rises steeply with thread size; an M16 tap in steel demands far more than an M6
- **Rigid tapping** (synchronised spindle) applies torque more predictably than a floating tap holder,
  but a floating holder tolerates minor misalignment

Approximate tapping torque `[GUIDE]`:
```
M ≈ K_tap × d²·⁵ × p^0.5      — various empirical forms exist
```
In practice, obtain tapping torque from the tap manufacturer's data `[MFR]`. The fixture requirement is
usually satisfied by ensuring the part cannot rotate in either direction, rather than by precise
torque calculation.

**Operation 6 — COUNTERBORING / COUNTERSINKING / SPOTFACING**

Producing a recess or flat around an existing hole.

| Aspect | Detail |
|---|---|
| Force | Moderate — similar in character to drilling but lighter |
| Character | Piloted (counterbore) or self-centring (countersink) |
| Precision | Depth control matters; concentricity matters |
| **Fixture demand** | Same as drilling — thrust and torque restraint. **Stable depth reference** |
| Failure mode | Depth variation; non-concentric recess |

The depth reference point matters: if the counterbore depth is measured from a surface that the fixture
does not control, depth will vary with part thickness.

**Operation 7 — FACE MILLING / FACING**

Producing a flat surface with the face of a cutter.

| Aspect | Detail |
|---|---|
| Force | **High** — often the heaviest operation in the setup |
| Character | Wide engagement, interrupted, significant vertical component |
| Precision | Flatness and thickness |
| **Fixture demand** | **Maximum rigidity.** Support directly under the cut. Positive stop |
| Failure mode | Part lift; slide; flatness error from support deflection |

Facing typically **governs the fixture strength design** because it engages the widest cut. It is also
where support placement matters most: an unsupported span under a facing cut deflects, and the part is
machined flat while deflected, then springs back non-flat when released.

**COMPARISON TABLE — THE ENGINEER'S REFERENCE**

| Operation | Force magnitude | Primary direction | Torque? | Key fixture demand |
|---|---|---|---|---|
| **Face milling** | Very high | Horizontal + vertical | No | Rigidity, stop, support under cut |
| **Milling (profile)** | High | Horizontal, **rotating** | No | Stop in worst direction |
| **Drilling** | Moderate–high thrust | **Vertical, into fixture** | **Yes** | **Rotational restraint** |
| **Boring** | Low | Radial, small | Minor | **Stiffness, no distortion** |
| **Reaming** | Very low | Axial, small | Minor | **Alignment** |
| **Tapping** | Low thrust | Axial | **Yes, both ways** | **Bidirectional restraint** |
| **Counterboring** | Moderate | Vertical | Yes | Rotational restraint, depth ref |

**THE MULTI-OPERATION FIXTURE**

Most fixtures support several operations in one setup. The rule:

> **Design for the union of all requirements, not the average.**
> Strength from the heaviest operation (usually facing or roughing).
> Stiffness from the most precise operation (usually boring).
> Rotational restraint if there is any drilling or tapping.
> Access for every tool, in every operation, without collision.

The **sequence** matters too. A common and sound sequence is: face first (creates a good locating
surface for subsequent operations), then rough, then drill, then bore/ream, then tap. The heaviest
forces occur early while the part still has maximum stiffness, and the precision operations occur last
when heavy forces are finished.

### 7. Terminology

| Term | Definition | SI unit |
|---|---|---|
| **Thrust** | Axial force from drilling | N |
| **Torque** | Rotational moment from drilling/tapping | N·m or N·mm |
| **Breakthrough** | The moment the drill exits the far side | — |
| **Peck drilling** | Cyclic retraction to clear chips | — |
| **Boring** | Enlarging a hole with a single-point tool | — |
| **Reaming** | Finishing a hole to size with a multi-flute tool | — |
| **Allowance (reaming)** | Material left for the reamer | mm |
| **Bell-mouthing** | Hole enlarged at the entry from misalignment | — |
| **Rigid tapping** | Spindle rotation synchronised to feed | — |
| **Floating holder** | Tap holder allowing small axial/radial compliance | — |
| **Spotface** | Shallow flat machined around a hole | — |
| **Counterbore** | Cylindrical recess for a screw head | — |
| **Countersink** | Conical recess for a countersunk screw | — |
| **Drill bush** | Hardened guide that positions a drill | — |

### 8. Principle

> **EACH OPERATION HAS ITS OWN SIGNATURE — AND THE FIXTURE MUST SATISFY ALL OF THEM.**
> **Milling slides** the part → needs a stop.
> **Drilling spins** it → needs rotational restraint, not more hold-down.
> **Boring** needs **stiffness and freedom from clamping distortion**, not strength.
> **Reaming** needs **alignment** — it sizes a hole, it does not move it.
> **Tapping** reverses → needs restraint in **both** directions.
> Design for the **union** of requirements: strength from the heaviest, stiffness from the most precise.

### 9. Industrial application

**The operation-to-requirement translation, as used in practice**

```
PROCESS SHEET SAYS          FIXTURE MUST PROVIDE
──────────────────────────────────────────────────────────
Face mill                → stop against feed direction
                           support directly under the cut
                           chip evacuation

Rough mill               → same as above, sized for peak force

Drill n holes            → rotational restraint
                           clearance under holes for the drill
                           to break through
                           chip escape

Ream                     → nothing extra IF drilled in the
                           same setup; alignment critical if not

Bore                     → stiffness; NO clamping distortion;
                           vibration-free mounting

Tap                      → rotational restraint BOTH directions
                           clearance for tap and holder

Counterbore              → as drilling, plus a controlled depth
                           reference
```

**Drill breakthrough — the detail that catches people out**

When a drill breaks through the far side of a part, three things must already be true:

1. There must be **clearance** below the hole. Drilling into your own fixture base is a real and
   frequent error. Provide a clearance hole at least 1.5× the drill diameter, or a relief pocket
   `[PRACTICE]`.
2. The part must be **supported close to the hole**. Breakthrough into an unsupported span causes
   burring and can deflect thin sections.
3. The **grab** must be resisted. Torque spikes at breakthrough; clamps and stops must hold at the
   spike, not the average.

**Boring and clamping distortion — the silent scrap producer**

A part is clamped, bored to a perfect Ø50.000 mm, and released. Measured off the fixture, the hole is
Ø50.03 × Ø49.97 — oval. Nothing was wrong with the boring. The clamping deformed the part elastically;
the bore was machined round in the deformed state; releasing the clamps let the part spring back and
took the roundness with it.

This is why boring operations demand **light, well-distributed clamping away from the bore**, and why
the L0.3.2 point about elastic recovery matters. It is also why boring is often the last operation, and
sometimes performed with clamps deliberately backed off to a lower force.

### 10. Design rules
- **R1** — For **milling**, provide a positive stop against the cut direction.
- **R2** — For **drilling**, provide **rotational restraint**. Hold-down alone is insufficient.
- **R3** — Provide **clearance below every drilled hole** — at least 1.5 × d, or a relief pocket
  `[PRACTICE]`.
- **R4** — Support the part **close to each drilled hole** to control breakthrough burring and
  deflection.
- **R5** — For **boring**, prioritise stiffness and minimise clamping distortion. Clamp light, clamp
  away from the bore.
- **R6** — For **reaming**, ensure alignment. A reamer follows the existing hole.
- **R7** — For **tapping**, restrain rotation in **both** directions.
- **R8** — Allow **tool and holder clearance** for every operation, including retraction.
- **R9** — Design the fixture for the **union** of all operation requirements in the setup.
- **R10** — Sequence heavy operations early and precision operations late where the process allows.
- **R11** — Where hole **position** is critical and no CNC positioning is available, use **drill bushes**
  (L8.3.1).

### 11. Rules of thumb
- Drilling thrust `F_t ≈ K_t × d × f`; torque `M ≈ K_m × d² × f` `[GUIDE]`.
- Reaming allowance typically **0.1–0.4 mm on diameter** `[GUIDE]`; larger holes take more.
- Drill clearance below the part: **≥1.5 × drill diameter** `[PRACTICE]`.
- Peak torque at **breakthrough** can substantially exceed steady state — do not design to the average.
- Face milling usually **governs fixture strength**; boring usually **governs fixture stiffness**.
- A single central clamp provides **no** resistance to drilling torque.
- Tapping torque rises steeply with diameter — an M16 is not "a bigger M6".
- Sequence: face → rough → drill → bore/ream → tap `[PRACTICE]`.

### 12. Formulae

**Drilling thrust**       `F_t ≈ K_t × d × f`          (N)
**Drilling torque**       `M ≈ K_m × d² × f`           (N·mm)
**Drilling power**        `P = M × 2πN / 60,000,000`   (kW, M in N·mm, N in rev/min)
**Resisting moment from clamps** `M_resist = Σ (μ × F_clamp_i × r_i)`
**Cutting speed (drill)** `V = π d N / 1000`           (m/min)
**Feed rate (drill)**     `v_f = f × N`                (mm/min)

| Variable | Meaning | SI unit |
|---|---|---|
| F_t | Thrust force | N |
| M | Torque | N·mm |
| K_t | Thrust constant | N/mm²·rev |
| K_m | Torque constant | N/mm·rev |
| d | Drill diameter | mm |
| f | Feed per revolution | mm/rev |
| N | Spindle speed | rev/min |
| r_i | Radius from drill axis to clamp i | mm |
| μ | Coefficient of friction | — |

### 13. Worked numerical example

**Problem:** A steel plate (mild steel) is drilled with a Ø16 mm drill at 0.20 mm/rev, 500 rev/min. The
part weighs 8 kg and is held by two clamps positioned 90 mm from the drill axis on opposite sides. The
friction coefficient is 0.12 (coolant present).

Determine: (a) thrust force, (b) torque, (c) whether the thrust helps or hinders, (d) the clamping
force per clamp required to resist rotation, (e) the effect of adding a single positive stop 120 mm
from the drill axis, (f) an engineering assessment.

```
GIVEN:
  Drill diameter           d    = 16 mm                    [PROJ]
  Feed per revolution      f    = 0.20 mm/rev              [MFR]
  Spindle speed            N    = 500 rev/min              [PROJ]
  Workpiece material            = mild steel               [PROJ]
  Thrust constant          K_t  = 1200 N/mm²·rev           [GUIDE]
  Torque constant          K_m  = 375 N/mm·rev             [GUIDE]
  Workpiece mass           m    = 8 kg                     [PROJ]
  Clamp radius             r    = 90 mm (2 clamps)         [PROJ]
  Coefficient of friction  μ    = 0.12                     [GUIDE]
  Torsional safety factor  SF   = 2.0                      [PRACTICE]
  Breakthrough spike factor     = 1.5                      [GUIDE]
  Stop radius (part e)     r_s  = 120 mm                   [PROJ]

REQUIRED:
  (a) Thrust force
  (b) Torque
  (c) Assessment of thrust direction
  (d) Clamp force per clamp to resist rotation by friction
  (e) Effect of adding one positive stop at 120 mm
  (f) Engineering assessment

ASSUMPTION:
  1. K_t and K_m are GUIDELINE values for mild steel with a
     standard HSS twist drill. MUST BE CONFIRMED against
     tooling data for the actual drill. [GUIDE]
  2. Breakthrough spike factor 1.5 applied to torque. Peak
     torque at breakthrough exceeds steady state; 1.5 is a
     reasonable allowance. [GUIDE]
  3. Torsional safety factor 2.0. [PRACTICE]
  4. Clamps act at 90 mm radius, symmetrically opposite, so
     both contribute their full friction moment.
  5. Friction at the clamp pads and at the base both resist
     rotation; conservatively only the CLAMP pad friction is
     credited here, with the base contribution treated as
     additional margin.
  6. Thrust is fully reacted by the fixture base directly
     beneath the hole (adequate support assumed).
  7. The stop in part (e) is hardened, dowelled and positioned
     to react the tangential force.

FORMULA:
  (a) F_t = K_t × d × f
  (b) M   = K_m × d² × f
  (c) qualitative
  (d) M_design = M × spike × SF
      M_resist = 2 × (μ × F_clamp × r)
      → F_clamp = M_design / (2 × μ × r)
  (e) With a stop, the tangential force at the stop is
      F_tan = M_design / r_s

VARIABLE DEFINITIONS:
  As tabulated in §12 above.

UNIT CONVERSION:
  W = mg = 8 × 9.81 = 78.5 N
  Torque in N·mm throughout; radii in mm.

SUBSTITUTION AND CALCULATION:

  (a) THRUST FORCE
      F_t = K_t × d × f
          = 1200 × 16 × 0.20
          = 1200 × 3.2
          = 3,840 N

  (b) TORQUE
      M = K_m × d² × f
        = 375 × 16² × 0.20
        = 375 × 256 × 0.20
        = 375 × 51.2
        = 19,200 N·mm
        = 19.2 N·m

  (c) THRUST DIRECTION ASSESSMENT
      The 3,840 N thrust acts DOWNWARD, pushing the part into
      the fixture base. It adds to the normal force and
      therefore INCREASES available friction during drilling.
      It is helpful, not harmful — PROVIDED the base is
      supported directly beneath the hole.
      At breakthrough, however, the drill can grab and LIFT.
      The hold-down must not rely on the thrust being present.

  (d) CLAMP FORCE TO RESIST ROTATION — FRICTION ONLY

      Design torque:
        M_design = M × spike × SF
                 = 19,200 × 1.5 × 2.0
                 = 57,600 N·mm

      Resisting moment from two clamps at radius r:
        M_resist = 2 × μ × F_clamp × r
                 = 2 × 0.12 × F_clamp × 90
                 = 21.6 × F_clamp

      Setting M_resist = M_design:
        F_clamp = 57,600 / 21.6
                = 2,667 N per clamp

  (e) WITH ONE POSITIVE STOP AT 120 mm

      Tangential force the stop must react:
        F_tan = M_design / r_s
              = 57,600 / 120
              = 480 N

      This is a trivial load for a hardened stop block.

      The clamps now only need to hold the part down against
      breakthrough lift. Taking the lift as 25 % of thrust:
        F_lift = 0.25 × 3840 = 960 N
        With SF 2.0, crediting part weight:
          required = (960 × 2.0) − 78.5 = 1,841 N
        Per clamp:  1841 / 2 = 921 N per clamp

      REDUCTION IN CLAMP FORCE = 2667 / 921 = 2.9×

RESULT:
  ┌────────────────────────────────────┬──────────────────┐
  │ (a) Thrust force                   │ 3,840 N (down)   │
  │ (b) Torque                         │ 19.2 N·m         │
  │     Design torque (spike × SF)     │ 57.6 N·m         │
  │ (c) Thrust direction               │ HELPFUL — seats  │
  │ (d) Clamp force, friction only     │ 2,667 N / clamp  │
  │ (e) Stop tangential load           │ 480 N            │
  │     Clamp force with stop          │ 921 N / clamp    │
  │     Reduction                      │ 2.9×             │
  └────────────────────────────────────┴──────────────────┘

SAFETY FACTOR:
  Breakthrough spike 1.5 and torsional SF 2.0 combine to give a
  total margin of 3.0 on the calculated steady-state torque.
  Base friction has been conservatively ignored, providing
  additional unquantified margin.

PASS/FAIL:
  (d) ✓ PASS but demanding — 2,667 N per clamp is achievable,
      though it is a substantial manual clamping force and
      leaves the design dependent on the friction coefficient.
  (e) ✓ PASS comfortably — 921 N per clamp is modest, and the
      480 N stop load is negligible. THIS IS THE BETTER DESIGN.

ENGINEERING CONCLUSION:
  DRILLING IS A TORQUE PROBLEM, NOT A THRUST PROBLEM — AND THE
  NUMBERS MAKE THAT PLAIN.

  1. THE THRUST IS YOUR FRIEND. THE TORQUE IS YOUR ENEMY.
     3,840 N of thrust pushes the part firmly into the fixture,
     adding to the normal force and to friction. A designer
     worrying about "1,000 kg of drilling force lifting the
     part" has the sign wrong. What actually threatens the
     setup is 19.2 N·m of torque trying to rotate it — and a
     hold-down clamp directly over the hole would contribute
     almost nothing to resisting that, because its radius from
     the drill axis would be near zero.

  2. RADIUS IS THE FREE VARIABLE.
     Resisting moment is force × radius, so a clamp at 180 mm
     resists twice the torque of the same clamp at 90 mm. Moving
     clamps OUTWARD costs nothing and doubles their torsional
     effectiveness. This is the drilling-fixture equivalent of
     the span rule in L0.3.4: geometry beats force.

  3. THE STOP AGAIN OUTPERFORMS FRICTION — BY LESS THAN IN
     MILLING, BUT DECISIVELY.
     A single stop at 120 mm radius reduces the clamping
     requirement by 2.9× and, more importantly, removes the
     dependence on μ. The friction-only scheme at 2,667 N is
     achievable, but if coolant reduces μ from 0.12 to 0.08 the
     requirement rises to 4,000 N per clamp. The stop-based
     scheme is indifferent to that. CERTAINTY, NOT JUST
     MAGNITUDE, IS WHAT THE STOP BUYS.

  4. BREAKTHROUGH IS THE DESIGN CASE.
     Steady-state torque is 19.2 N·m; with the spike factor it
     is 28.8 N·m before the safety factor. If the fixture were
     designed to steady state it would be marginal exactly at
     the moment of highest risk, when the drill can also grab
     and lift. Design to breakthrough.

  RECOMMENDATION: Fit a positive stop to react the drilling
  torque, position clamps at the largest practical radius,
  provide ≥24 mm clearance below the hole (1.5 × 16 mm), and
  ensure the base is supported directly beneath the hole to
  react the 3,840 N thrust.

SENSITIVITY NOTE:
  Ranked by influence on the clamping requirement:
    1. PRESENCE OF A STOP — 2.9× and removes μ dependence
    2. CLAMP RADIUS — linear and free. Doubling r halves F.
    3. DRILL DIAMETER — torque goes as d², so an M20 drill at
       the same feed gives 30 N·m, a 56 % increase over Ø16.
    4. FEED — linear on both thrust and torque
    5. FRICTION COEFFICIENT (friction-only case) —
       μ = 0.08 → 4,000 N/clamp;  μ = 0.20 → 1,600 N/clamp
    6. SPINDLE SPEED — no effect on torque or thrust
```

### 14. Engineering assumptions
- K_t and K_m are `[GUIDE]` values for mild steel with a standard twist drill — confirm against tooling
  data.
- Breakthrough spike factor 1.5 `[GUIDE]`; torsional safety factor 2.0 `[PRACTICE]`.
- Clamps symmetrically opposite at 90 mm; both contribute full friction moment.
- Only clamp-pad friction credited; base friction ignored (conservative).
- Thrust fully reacted by an adequately supported base beneath the hole.
- The stop is hardened, dowelled and correctly positioned.

### 15. Diagram

```
     THE SEVEN OPERATIONS — FORCE SIGNATURES
     (instructional schematic)

  1. MILLING / FACE MILLING          2. DRILLING
        ↻                                   ↻
     ───┴───  cutter                      ║ ║ drill
     ═══════→ FEED                        ║ ║
   ▒▒▒▒▒▒▒▒▒▒▒                          ▒▒║▒║▒▒▒
   ←── HORIZONTAL FORCE                    ↓ THRUST (helps)
       tries to SLIDE                      ↻ TORQUE (hurts)
                                             tries to SPIN
   NEEDS: stop against feed            NEEDS: rotational
          support under cut                   restraint
                                              clearance below

  3. BORING                          4. REAMING
       ║  single point                    ║║║║ multi-flute
     ──╨──                              ──╨╨╨╨──
   ▒▒▒▒▒▒▒▒▒                          ▒▒▒▒▒▒▒▒▒▒
   LOW force, HIGH precision          VERY LOW force
   NEEDS: STIFFNESS                   NEEDS: ALIGNMENT
          no clamping distortion       (it sizes the hole,
                                        it does NOT move it)

  5. TAPPING                         6. COUNTERBORE
       ↻ in ... ↺ out                     ║▓║ piloted
     ──╨──                              ──╨─╨──
   ▒▒▒▒▒▒▒▒▒                          ▒▒▒▒▒▒▒▒▒
   TORQUE BOTH WAYS                   As drilling, lighter
   NEEDS: restraint in BOTH           NEEDS: depth reference
          directions

  7. FACING — the heaviest. See 1. Usually governs strength.

  ──────────────────────────────────────────────────────────

  DRILLING TORQUE — WHY CLAMP POSITION MATTERS

     BAD: clamp over the hole            GOOD: clamps far out
                ↓                          ↓              ↓
          ┌─────┼─────┐              ┌─────┼─────┬────────┐
          │   ╳ HOLE  │              │  ╳ HOLE            │
          └───────────┘              └───────────┬────────┘
       r ≈ 0                            r = 90 mm    r = 90 mm
       M_resist ≈ 0                     M_resist = 2μFr

     ┌──────────────────────────────────────────────────┐
     │ RESISTING MOMENT = μ × F × r                     │
     │ A clamp at r = 0 resists NO torque, however hard │
     │ you tighten it. RADIUS IS FREE — USE IT.         │
     └──────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  DRILL BREAKTHROUGH — THREE THINGS MUST BE TRUE

        ║ ║ drill exiting
      ▒▒║▒║▒▒▒▒▒  part
      ══╧═╧══════  fixture base
         ╲___╱   ← 1. CLEARANCE  ≥ 1.5 × d
      ▓▓▓     ▓▓▓ ← 2. SUPPORT close to the hole
                    3. GRAB resisted — torque SPIKES here

  ──────────────────────────────────────────────────────────

  MULTI-OPERATION FIXTURE — DESIGN FOR THE UNION

     ┌────────────────────────────────────────────────┐
     │ STRENGTH   ← from the HEAVIEST op (facing)     │
     │ STIFFNESS  ← from the MOST PRECISE op (boring) │
     │ TORSION    ← if ANY drilling or tapping        │
     │ ACCESS     ← for EVERY tool, including retract │
     │                                                │
     │ NOT the average. THE UNION.                    │
     └────────────────────────────────────────────────┘
```

### 16. Drawing example
Not a drawing lesson. One documentation practice that prevents a common error: **show drill clearance
holes on the fixture drawing with a note explaining their purpose**, for example
`Ø24 CLEARANCE FOR Ø16 DRILL BREAKTHROUGH — DO NOT OMIT`. Clearance holes look like unnecessary
features to someone reading the drawing without context, and they get value-engineered away.

### 17. CAD workflow
Not a CAD lesson. Practical note: model **every tool and holder** in its retracted and fully extended
positions when checking access. The most common collision found at commissioning is not the tool
hitting a clamp, but the **tool holder or spindle nose** hitting a clamp at full depth. A Ø16 drill is
narrow; the ER32 collet chuck holding it is not.

### 18. GD&T application
Not applicable at this lesson. Forward links: hole position tolerance and its relationship to drill
bush accuracy (L8.3.1); the true position of drilled holes and how fixture error contributes (L21.2).

### 19. Manufacturing method
Not applicable at this lesson.

### 20. Inspection method
Not applicable at this lesson. Practical note: hole position is inspected against the datum system, not
against the fixture. A fixture that positions holes consistently but incorrectly produces consistently
scrap parts — which is why first-off inspection exists.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Clamping over the drilled hole** | Zero torsional restraint; part spins |
| 2 | No clearance below a drilled hole | Drill cuts into the fixture base |
| 3 | Designing drilling restraint to steady-state torque | Failure at breakthrough spike |
| 4 | Assuming thrust is the drilling problem | Wrong problem solved; torque unaddressed |
| 5 | Heavy clamping before a boring operation | Bore springs oval on release |
| 6 | Expecting a reamer to correct hole position | Right size, wrong place |
| 7 | Single-direction stop for a tapping operation | Part rotates on tap retraction |
| 8 | Not checking tool **holder** clearance, only tool | Collision at full depth |
| 9 | Designing for the average of operations, not the union | One operation fails |
| 10 | No support near the hole at breakthrough | Burring, deflection, poor hole quality |
| 11 | Ignoring chip packing in deep holes | Drill breakage, chip damage to part |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Part rotates during drilling | No rotational restraint; clamps too close to axis | Check clamp radii from drill axis | Add stop; move clamps outward | Calculate resisting moment at design |
| Marks/scoring on fixture base | No drill breakthrough clearance | Inspect base beneath holes | Add clearance holes | Provide ≥1.5 d clearance |
| Bore oval when measured off fixture | Clamping distortion | Measure in-fixture vs off-fixture | Reduce clamp force; relocate clamps | Light, distributed clamping for boring |
| Reamed hole correct size, wrong position | Reamer followed a mislocated drilled hole | Check drilled hole position | Correct drilling position/bush | Position comes from drilling, not reaming |
| Tap breaks repeatedly | Part rotation on retraction; misalignment | Check bidirectional restraint | Add reverse stop; use floating holder | Restrain both directions |
| Burring at hole exit | No support near the hole | Inspect support layout | Add support near hole | Support close to every hole |
| Collision at depth | Tool holder not modelled | Review CAD with full holder | Relocate clamp | Model holders, not just tools |

### 23. Design checklist
- [ ] Have I listed **every operation** in this setup?
- [ ] Have I designed strength for the **heaviest** operation?
- [ ] Have I designed stiffness for the **most precise** operation?
- [ ] Is there **rotational restraint** if any drilling or tapping occurs?
- [ ] Are clamps positioned at the **largest practical radius** from drill axes?
- [ ] Is there **clearance below every drilled hole** (≥1.5 d)?
- [ ] Is the part **supported close to each hole** for breakthrough?
- [ ] Have I designed to the **breakthrough spike**, not steady state?
- [ ] For boring, is clamping **light and away from the bore**?
- [ ] For tapping, is rotation restrained in **both** directions?
- [ ] Have I checked clearance for every **tool holder**, not just every tool?
- [ ] Is the thrust reacted by **support directly beneath** each hole?
- [ ] Have I considered chip evacuation for deep holes?

### 24. Beginner exercise
**E0.4.3-B** — A Ø10 mm drill operates at 0.15 mm/rev in mild steel
(K_t = 1,200 N/mm²·rev, K_m = 375 N/mm·rev `[GUIDE]`).
(a) Calculate the thrust force.
(b) Calculate the torque in N·m.
(c) State whether the thrust helps or hinders the fixture, and why.
(d) State the minimum clearance hole diameter you would provide below the part.

### 25. Intermediate exercise
**E0.4.3-I** — A cast iron housing is drilled with a Ø20 mm drill at 0.25 mm/rev
(K_t = 850, K_m = 250 `[GUIDE]`). Two clamps are available. The part weighs 14 kg and μ = 0.15.
(a) Calculate thrust and torque.
(b) Apply a breakthrough factor of 1.5 and SF 2.0 to get the design torque.
(c) Calculate the required clamp force if the clamps are at 60 mm radius.
(d) Recalculate if the clamps are moved to 150 mm radius.
(e) State the percentage reduction and explain the principle in one sentence.
(f) Calculate the tangential load on a single stop placed at 150 mm radius instead.

### 26. Advanced exercise
**E0.4.3-A** — A steel manifold block is machined in one VMC setup with the following operations:
```
OP 1  Face mill top      Ø80, 6 inserts, a_p 3 mm, a_e 70 mm, f_z 0.22, EN8
OP 2  Drill 6 × Ø12      f = 0.18 mm/rev, through 40 mm
OP 3  Bore 1 × Ø50 H7    depth 35 mm, light finishing cuts
OP 4  Ream 2 × Ø10 H7    allowance 0.2 mm
OP 5  Tap 6 × M14 × 2    depth 25 mm
```
The part is 18 kg, EN8 (k_c = 2,000 N/mm², K_t = 1,400, K_m = 450 `[GUIDE]`), μ = 0.12.
(i) Estimate the peak force or torque for each operation and tabulate them.
(ii) Identify which operation governs fixture **strength** and which governs fixture **stiffness**.
Justify both.
(iii) Determine the rotational restraint requirement from the worst of OP 2 and OP 5.
(iv) Explain what OP 3 requires that no other operation requires, and how it conflicts with the
requirements of OP 1.
(v) Propose a clamping strategy that satisfies all five operations, explicitly resolving the conflict
identified in (iv).
(vi) State the required drill breakthrough clearance and explain where OP 3's bore depth of 35 mm in a
40 mm part creates an additional design consideration.
(vii) Recommend an operation sequence and justify it in terms of force, precision and part stiffness.

### 27. Interview questions
1. *"What is the main fixture challenge when drilling?"*
   **Answer:** Torque, not thrust. The thrust pushes the part into the fixture, which actually helps by
   increasing the normal force and available friction. The problem is the torque trying to rotate the
   part around the drill axis. Critically, a hold-down clamp placed over or near the hole contributes
   almost nothing to resisting that, because resisting moment is force times radius and its radius is
   near zero. So the answer is a positive stop to react the torque, and clamps positioned as far from
   the drill axis as possible. I would also design to the breakthrough condition, where torque spikes
   and the drill can grab and lift the part.
2. *"Why might a bore come out oval even though the boring operation was perfect?"*
   **Answer:** Clamping distortion. If the part is clamped hard enough to deform it elastically, the
   bore is machined round while the part is deformed. When the clamps are released the part springs
   back to its natural shape and takes the bore with it, so it measures oval off the fixture. The fix
   is light, well-distributed clamping positioned away from the bore, and ideally performing the boring
   operation last, sometimes with clamps deliberately backed off. It is a good illustration of the
   general point that more clamping force is not automatically better.

### 28. Expert questions
1. *"Design a fixture that must support face milling, drilling, boring and tapping in one setup. The
   requirements conflict. How do you resolve it?"*
   **Answer:** They do conflict, and naming the conflict precisely is the first step: **face milling
   wants maximum clamping force to resist a large horizontal cutting load, while boring wants minimum
   clamping force to avoid distorting the part.** You cannot satisfy both with a single clamping
   pressure.
   There are four resolutions, and I would pursue them roughly in this order.
   The best is to **remove the conflict rather than compromise it**. Face milling only needs heavy
   clamping because it is being resisted by friction. Fit a positive stop to react the milling force,
   and the clamping requirement for OP 1 collapses — as the L0.4.2 example showed, by a factor of
   twenty or more. Now both operations can run at the low clamping force that boring needs, and there
   is no conflict left to resolve.
   Second, **sequence and stage the clamping**. Run the heavy operations first at full clamp force,
   then back the clamps off to a defined lower value before boring. This is standard practice with
   hydraulic clamping, where pressure can be switched under program control, and it can be done
   manually with a torque wrench and a documented instruction. The risk is that it depends on the
   operator following the procedure, so it wants Poka-Yoke — a pressure switch that will not permit the
   boring program to start above a set pressure, for example.
   Third, **separate the load paths**. Clamp the part where it is stiff and near the machining loads,
   and keep clamps away from the bore region entirely so that whatever distortion the clamping causes
   does not reach the bore. Sometimes the bore is in a boss or a flange that can be left entirely
   unclamped and merely supported.
   Fourth, and least attractive, **split the operations into two setups**. This guarantees both are
   satisfied but adds a setup, a re-location error, and cycle time. It is the right answer when the
   tolerance is tight enough that nothing else is trustworthy, but it should be the conclusion of the
   analysis, not the starting point.
   Alongside all of this, the drilling and tapping impose a rotational restraint requirement that is
   largely independent of the milling and boring conflict — a stop and generous clamp radii handle it,
   and the same stop that reacts the milling force can usually be positioned to react the drilling
   torque as well. Getting one feature to do two jobs is what makes a fixture elegant rather than
   merely adequate.
2. *"How does the operation sequence affect fixture design, and who should decide it?"*
   **Answer:** The sequence affects the fixture profoundly, and it should be decided **jointly**,
   which is the real answer to the second half of the question.
   Sequence matters for several reasons. **Force timing**: heavy operations early, while the part still
   has maximum material and maximum stiffness, means less deflection and less distortion. Once you have
   bored a large hole through a part, it is a less rigid part. **Precision timing**: finishing
   operations last means they are not disturbed by subsequent heavy cuts, and any thermal growth from
   roughing has stabilised. **Datum creation**: facing first creates a flat, known surface that
   subsequent operations can reference, which can improve the whole setup's accuracy. **Chip
   management**: operations that produce heavy chips should not be followed by operations whose
   accuracy depends on a clean locating surface, unless there is a cleaning step.
   And **force direction**: the sequence determines which direction the force points at each moment,
   and therefore which locators are doing work when. This is where the fixture designer has genuine
   input that the process planner may not think of — asking for the heavy roughing pass to run toward
   the stop rather than away from it is a free reduction in clamping requirement, and it usually costs
   the CAM programmer nothing.
   On ownership: the process planner owns the sequence, because it is a manufacturing decision
   involving tooling, cycle time, machine capability and cost. But the fixture designer must be
   **consulted**, because the sequence changes what the fixture has to do, and because the fixture
   designer can often propose a sequence variant that is neutral on cycle time and much better on
   fixture viability. The failure mode is a sequence frozen before the fixture designer sees it, and a
   fixture then contorted to accommodate an arbitrary decision that nobody would defend if asked.
   In organisations that do this well, the fixture concept review and the process sequence review are
   the same meeting.

### 29. Summary
Seven operations account for most fixture work. Milling and facing apply large horizontal forces that
slide the part and demand a positive stop and rigid support beneath the cut. Drilling applies a
downward thrust that helpfully seats the part and a torque that dangerously rotates it — resisted by a
stop and by clamps placed at the largest practical radius, and designed to the breakthrough spike
rather than the steady state. Boring is a stiffness and distortion problem, not a force problem:
clamping hard enough to deform the part produces a bore that springs oval on release. Reaming sizes a
hole but cannot move it, so position comes from the drilling operation. Tapping reverses direction and
requires rotational restraint both ways. Most fixtures serve several operations at once, and the rule
is to design for the union of requirements — strength from the heaviest operation, stiffness from the
most precise — while resolving rather than compromising the conflicts between them.

### 30. Key takeaways
- **Milling slides** → positive stop. **Drilling spins** → rotational restraint. **Boring distorts** →
  light clamping. **Reaming follows** → alignment. **Tapping reverses** → both directions.
- Drilling: `F_t ≈ K_t d f`, `M ≈ K_m d² f` `[GUIDE]`. **Torque goes as d²**.
- **Thrust helps** (seats the part); **torque hurts** (rotates it). Solve the right problem.
- A clamp **over the hole resists no torque** — resisting moment is μ × F × **r**.
- **Radius is free.** Move clamps outward before increasing force.
- Design drilling restraint to the **breakthrough spike** (≈1.5×), not steady state `[GUIDE]`.
- Provide **≥1.5 × d clearance** below every drilled hole `[PRACTICE]`.
- **A reamer sizes a hole; it does not move it.** Position comes from drilling.
- Heavy clamping before boring produces **oval bores on release**.
- Multi-operation fixtures: design for the **union** — and resolve conflicts with a stop, not a compromise.

---

## LESSON L0.4.4 — MACHINE TOOLS: VMC, HMC AND COORDINATE SYSTEMS

### 1. Lesson title
**L0.4.4 — Machine configurations, axes, tables and work coordinate systems: the envelope your fixture must live in**

### 2. Learning objective
By the end of this lesson you will be able to distinguish VMC and HMC configurations and state the
fixture consequence of each, identify machine axes and the right-hand rule convention, explain work
coordinate systems and datum setting, and extract the machine constraints that bound every fixture
design.

### 3. Prerequisites
L0.4.1, L0.4.2, L0.4.3.

### 4. Why the topic matters
A fixture does not exist in isolation. It bolts to a specific machine table, sits inside a specific
work envelope, is reached by a specific spindle, and is referenced to a specific coordinate system. Get
any of those wrong and the fixture is scrap, however good the engineering inside it.

This lesson supplies the **boundary conditions**. Every fixture design begins by asking what machine it
runs on, and the answer determines the fixture's fundamental form: a VMC fixture is a flat plate with
things standing up on it; an HMC fixture is a tombstone with things hanging off the sides; a 4-axis
fixture must clear a rotating envelope. These are not variations on a theme — they are different
objects.

It also introduces the **coordinate system** thinking that everything from CAD modelling to CMM
inspection depends on. The idea that a part, a fixture, a machine and an inspection report all
reference coordinate systems that must agree is fundamental, and it is where a surprising amount of
scrap originates.

### 5. Simple explanation
Machines come in two main shapes:

- **Vertical (VMC)** — the spindle points **down** at a flat table. Like a drill press. Chips fall onto
  the part and the fixture. Easy to load, easy to see.
- **Horizontal (HMC)** — the spindle points **sideways** at a vertical face. Chips fall **away** by
  gravity. Usually has a rotating table so you can reach several faces.

The machine also has **axes** — directions it can move in. X is left-right, Y is front-back, Z is
up-down. The machine needs to be told where the part is, which is done by setting a **zero point** the
program measures everything from.

Your fixture has to fit within the machine's reach, bolt to its table, and put the part where the
program expects it.

### 6. Engineering explanation

**MACHINE AXES AND CONVENTIONS** `[STD — ISO 841 / EIA RS-274 convention]`

```
        +Z  (spindle up / away from work)
         │
         │
         │
         └──────── +X  (right, viewed from operator)
        ╱
      ╱
    +Y  (away from operator)
```

The convention is a **right-handed coordinate system**, and axis directions are defined as the
direction of **tool movement relative to the workpiece** — a distinction that matters when the table
moves rather than the spindle.

| Axis | Type | Direction |
|---|---|---|
| X | Linear | Longest table travel, usually left–right |
| Y | Linear | Perpendicular to X in the table plane |
| Z | Linear | **Along the spindle axis**; +Z increases tool-to-work distance |
| A | Rotary | About X |
| B | Rotary | About Y |
| C | Rotary | About Z |

Rotary directions follow the **right-hand rule**: point the right thumb along the positive linear axis,
and the fingers curl in the positive rotary direction.

**VERTICAL MACHINING CENTRE (VMC)**

```
              ▓▓▓▓  spindle
               ║║
               ║║   ↓ Z
            ───╨╨───  tool
     ┌───────────────────────┐
     │      FIXTURE          │
     ╞═══════════════════════╡  T-slotted table
     └───────────────────────┘
```

| Aspect | VMC characteristic | Fixture consequence |
|---|---|---|
| Spindle | Vertical, pointing down | Fixture is a **horizontal plate**; features stand up |
| Table | Horizontal, T-slotted | Bolt down through T-slots or tapped grid |
| Gravity | Helps hold the part **down** | Weight assists clamping |
| Chips | Fall **onto** the part and fixture | **Chip evacuation is a major design problem** |
| Coolant | Pools on horizontal surfaces | Drainage required |
| Loading | Easy — operator loads from above | Good ergonomics |
| Access | One face at a time (3-axis) | Multiple setups for multiple faces |
| Typical use | Prismatic parts, plates, covers, small–medium batch | The most common machine type |

**HORIZONTAL MACHINING CENTRE (HMC)**

```
       ▓▓▓▓ spindle          ┌──────┐
        ║║  ───→ Z           │ TOMB-│
     ═══╨╨═══  tool  ──→     │ STONE│  ← fixtures on
                             │      │    all 4 faces
                             └──┬───┘
                          ╔═════╧═════╗  rotary table (B axis)
                          ╚═══════════╝
```

| Aspect | HMC characteristic | Fixture consequence |
|---|---|---|
| Spindle | Horizontal | Fixture faces are **vertical**; gravity does not help |
| Table | Rotary (B axis), often with pallets | **Tombstone** fixtures; 4 faces per setup |
| Gravity | Acts **across** the clamping direction | Clamps must resist part weight, not just cutting force |
| Chips | Fall **away** by gravity | **Excellent chip evacuation** — the main HMC advantage |
| Coolant | Drains naturally | Fewer drainage problems |
| Loading | Harder — part must be held while clamping | Needs support ledges or loading aids |
| Access | Four faces per setup with B-axis rotation | **Fewer setups**; better positional accuracy between faces |
| Pallets | Load one pallet while machining another | High productivity |
| Typical use | High-volume production, castings, multiple faces | Automotive, high-volume |

> **The fundamental HMC design difference:** on a VMC, gravity holds the part on the fixture while you
> clamp it. On an HMC, **the part will fall off unless you hold it**. Every HMC fixture needs a support
> ledge, a shelf, or a locating pin that carries the part's weight during loading — otherwise the
> operator needs three hands. This single ergonomic fact shapes HMC fixture design more than any
> calculation.

**4-AXIS AND 5-AXIS**

| Configuration | Description | Fixture consequence |
|---|---|---|
| **4-axis** | 3 linear + 1 rotary (usually A about X) | Fixture rotates; must clear the envelope through full rotation. Weight and balance matter |
| **5-axis** | 3 linear + 2 rotary | Fixture must be **compact** — it obstructs tool access from many angles. Minimal fixture is best |
| **Trunnion** | Table tilts and rotates | Part weight direction changes continuously; clamping must hold at all orientations |

> **The 5-axis fixture rule:** on 3-axis work, a bigger fixture is often a better fixture. On 5-axis
> work, **every millimetre of fixture is a millimetre the tool might collide with**. The design goal
> inverts: hold the part with the minimum possible material in the minimum possible envelope.

**WORK COORDINATE SYSTEMS**

The machine has a **machine zero** (or home) — a fixed reference set by the machine's limit switches or
encoders. But programs are written relative to a **work coordinate system** (WCS), commonly called the
work offset: `G54`, `G55`, `G56` and so on.

```
MACHINE ZERO ────► WORK OFFSET (G54) ────► PROGRAM COORDINATES
   (fixed)          (set at setup)           (from the drawing)
```

Setting the work offset — "picking up the datum" — means telling the machine where the part's
zero point is relative to machine zero. Methods include an edge finder, a dial indicator on a bore, or
a touch probe.

**Why this matters to the fixture designer:**

1. **The fixture should provide a repeatable datum pick-up feature.** A dowel pin, a bored hole, or a
   machined edge on the fixture lets the operator set the offset the same way every time, in seconds.
   Without one, the operator picks up on the part — which means re-setting for every part and
   introducing variation.
2. **The fixture datum should correspond to the part datum.** If the drawing dimensions from a face,
   the fixture should locate from and reference that same face. Mismatched datums create a stack-up
   that consumes tolerance for no benefit (L23).
3. **Multiple fixtures on one table need multiple offsets.** A four-station fixture uses G54–G57, one
   per station, and the offsets must be based on accurately known fixture geometry.
4. **On an HMC tombstone**, each face has its own offset, and the relationship between them depends on
   the accuracy of the tombstone and the B-axis. This is a fixture accuracy requirement with direct
   part consequences.

**THE MACHINE CONSTRAINTS EVERY FIXTURE DESIGN MUST RESPECT**

Before drawing anything, obtain and record:

| Constraint | Why it matters |
|---|---|
| **Table size and T-slot layout** | The fixture must physically bolt down |
| **X, Y, Z travels** | The tool must reach every feature |
| **Maximum table load** | Fixture + part must not exceed it |
| **Spindle nose to table distance (min and max)** | Fixture height + part + tool + holder must fit |
| **Spindle power and torque** | Bounds the cutting forces (L0.4.2) |
| **Tool magazine capacity and max tool length/diameter** | Long tools may not fit |
| **Coolant type and pressure** | Through-spindle coolant changes chip behaviour |
| **Work envelope / interference zones** | Fixture must not collide with guards, chip conveyor, ATC |
| **Rotary axis swing diameter** (4/5-axis) | The fixture must clear through full rotation |
| **Pallet size and pallet change clearance** (HMC) | Fixture must pass through the pallet changer |

> **The Z-height trap.** The most common machine-constraint error is fixture height. The available
> vertical space is: `spindle nose to table max` minus `fixture height` minus `part height` minus
> `tool length` minus `holder length`. Designers routinely check the fixture and part, and forget that
> a 150 mm long drill in a 100 mm holder needs 250 mm of clearance above the part before the spindle
> can even reach it. On a VMC with 500 mm of spindle-to-table clearance, a 200 mm tall fixture leaves
> very little room.

### 7. Terminology

| Term | Definition |
|---|---|
| **VMC** | Vertical machining centre — spindle vertical |
| **HMC** | Horizontal machining centre — spindle horizontal |
| **Tombstone** | Vertical fixture column on an HMC, usually 2 or 4 faces |
| **Pallet** | Removable table allowing load-while-machining |
| **T-slot** | Slot in the table for holding bolts |
| **Machine zero** | Fixed machine reference position |
| **Work coordinate system (WCS)** | Program origin, set as an offset from machine zero |
| **Work offset** | G54–G59 etc.; the stored WCS |
| **Edge finder** | Tool for locating an edge to set the offset |
| **Touch probe** | Spindle-mounted probe for automated datum setting |
| **Trunnion** | Tilting rotary table (5-axis) |
| **Swing diameter** | Envelope swept by a rotating fixture |
| **ATC** | Automatic tool changer |
| **Spindle nose to table** | Vertical clearance available |
| **Interference zone** | Region the machine forbids or where collision occurs |

### 8. Principle

> **THE MACHINE DEFINES THE ENVELOPE; THE FIXTURE LIVES INSIDE IT.**
> **VMC** = horizontal plate, gravity helps, **chips fall onto your work**.
> **HMC** = vertical faces, gravity fights you, **chips fall away** — and the part will drop unless the
> fixture holds it during loading.
> **5-axis** inverts the usual instinct: the **smallest** fixture is the best fixture.
> Always check Z: `spindle-to-table − fixture − part − tool − holder`. That subtraction has scrapped
> more fixtures than any calculation error.

### 9. Industrial application

**The machine data sheet — the first document of every fixture project**

```
MACHINE CONSTRAINTS RECORD                  PROJECT: ______
─────────────────────────────────────────────────────────────
Machine                : ____________________
Configuration          : VMC / HMC / 4-ax / 5-ax
Table size             : ______ × ______ mm
T-slot size / pitch    : ______ mm / ______ mm
X / Y / Z travel       : ______ / ______ / ______ mm
Spindle nose to table  : min ______  max ______ mm
Max table load         : ______ kg
Spindle power / torque : ______ kW / ______ N·m
Max spindle speed      : ______ rev/min
Tool magazine          : ______ pockets, max Ø ______, max L ______
Coolant                : flood / through-spindle / air / MQL
Rotary swing Ø         : ______ mm      (4/5-axis only)
Pallet size            : ______ × ______ mm   (HMC only)
Control                : ______________
─────────────────────────────────────────────────────────────
Z-HEIGHT BUDGET CHECK
  Spindle nose to table (max)                    ______ mm
  − Fixture height                             − ______ mm
  − Part height                                − ______ mm
  − Longest tool + holder                      − ______ mm
  = CLEARANCE REMAINING                          ______ mm
  Must be > 0 with margin. If negative, REDESIGN.
─────────────────────────────────────────────────────────────
```

Completing this sheet before starting the design takes fifteen minutes and prevents the single most
expensive category of fixture error: a fixture that is engineered perfectly and does not fit.

**VMC vs HMC — how the choice changes the fixture**

The same part, machined on both:

```
VMC VERSION                        HMC VERSION
────────────────────────────       ─────────────────────────
Base plate, part on top            Tombstone, part on the side
Locators standing up               Locators on a vertical face
Gravity seats the part             Support ledge carries weight
Strap clamps from above            Clamps push horizontally
Chips land on the locators ✗       Chips fall clear ✓
Load from above — easy             Load against a face — awkward
1 part per setup                   4+ parts per setup (4 faces)
Multiple setups for 4 faces        1 setup, B-axis indexes
Lower fixture cost                 Higher fixture cost,
                                   lower cost per part at volume
```

**The economic pattern** `[PRACTICE]`: VMC fixtures suit low to medium volume and prototype work; HMC
fixtures cost more to build but win decisively at volume because of the setup reduction and chip
advantage. The break-even depends on part complexity and volume and should be calculated, not assumed
(L26).

**The datum pick-up feature — a small detail with a large payoff**

Include on every fixture a feature the operator can use to set the work offset quickly and repeatably.
Common choices:
- A **hardened dowel pin** of known diameter at a known position
- A **bored hole** to a close tolerance, picked up with an indicator or probe
- A **machined step or edge**, picked up with an edge finder
- For probe-equipped machines, a **datum sphere** or a bored reference bore

Dimension it on the fixture drawing from the same datums the part uses, tolerance it tightly, and note
its purpose. Ten seconds saved on every setup is meaningful, but the real value is **repeatability**:
the offset is set the same way by every operator on every shift.

### 10. Design rules
- **R1** — Obtain and record the **machine constraints** before starting the design.
- **R2** — Perform the **Z-height budget check** including the longest tool and its holder.
- **R3** — Verify the fixture footprint against the **table size and T-slot layout**.
- **R4** — Check **fixture + part mass** against the maximum table load.
- **R5** — On a **VMC**, design chip evacuation as a primary requirement — chips fall onto your work.
- **R6** — On an **HMC**, provide a **support ledge** so the part does not fall during loading.
- **R7** — On an **HMC**, size clamps to hold the part **weight** as well as the cutting force.
- **R8** — On **4/5-axis**, verify clearance through the **full rotation envelope**, not just at zero.
- **R9** — On **5-axis**, minimise fixture bulk — it is a collision hazard from every angle.
- **R10** — Provide a **datum pick-up feature** on every fixture, dimensioned and toleranced.
- **R11** — Align the **fixture datum with the part datum** wherever possible.
- **R12** — Allocate a **work offset** per station on multi-station fixtures and record the geometry.
- **R13** — Verify the fixture clears the **ATC, guards, chip conveyor and pallet changer**.

### 11. Rules of thumb
- Axes: **X longest travel, Y perpendicular, Z along the spindle**; +Z moves the tool away from the work
  `[STD]`.
- **VMC**: gravity helps hold, chips hurt. **HMC**: gravity fights you, chips fall clear.
- HMC tombstones typically carry **4 faces**; productivity gain is roughly proportional `[PRACTICE]`.
- Leave a margin on the Z-height budget — tools get longer during a programme's life.
- On 5-axis, **less fixture is better fixture**.
- Every fixture gets a datum pick-up feature. Every one.
- Fixture + part mass should sit comfortably below the table limit, not at it.
- If the fixture must be lifted by hand, keep it under about **20–25 kg**; above that plan lifting
  points `[PRACTICE] — check local manual-handling regulations, which vary by jurisdiction.`

### 12. Formulae

There are no new formulae in this lesson; the content is configurational. The one relationship that
must be evaluated numerically:

**Z-height budget**
```
Clearance = H_spindle-to-table(max) − H_fixture − H_part − L_tool − L_holder
```
Must be positive with margin.

**Rotary clearance (4/5-axis)**
```
Swing radius required = √(x² + y²)_max  measured from the rotary axis
                        to the furthest point of fixture or part
```
Must be less than the machine's swing radius.

**Table load**
```
m_total = m_fixture + m_part(s) + m_clamps ≤ m_table_max
```

| Variable | Meaning | SI unit |
|---|---|---|
| H | Height | mm |
| L | Length | mm |
| m | Mass | kg |

### 13. Worked numerical example

**Problem:** A fixture is to be designed for a VMC with 550 mm maximum spindle-nose-to-table distance
and a 900 × 450 mm table with 18 mm T-slots at 100 mm pitch. The fixture base plate is 40 mm thick with
locators standing 60 mm above it. The part is 120 mm tall. The longest tool is a 180 mm long drill in a
110 mm BT40 holder. Fixture mass is 62 kg, part mass 18 kg, table limit 400 kg.

Determine: (a) the total fixture stack height, (b) the Z-height budget, (c) whether it fits, (d) the
required change if it does not, (e) the table load check, (f) whether a 4-station version would fit the
table and the load limit, (g) an engineering assessment.

```
GIVEN:
  Spindle nose to table (max)  H_st  = 550 mm            [MFR]
  Table size                          900 × 450 mm       [MFR]
  T-slot size / pitch                 18 mm / 100 mm     [MFR]
  Max table load               m_max = 400 kg            [MFR]
  Base plate thickness         t_bp  = 40 mm             [PROJ]
  Locator height above plate   h_loc = 60 mm             [PROJ]
  Part height                  h_pt  = 120 mm            [PROJ]
  Longest tool length          L_t   = 180 mm            [PROJ]
  Holder length (BT40)         L_h   = 110 mm            [MFR]
  Fixture mass                 m_fix = 62 kg             [PROJ]
  Part mass                    m_pt  = 18 kg             [PROJ]
  Required clearance margin            25 mm             [PRACTICE]
  Single-station footprint             350 × 300 mm      [PROJ]

REQUIRED:
  (a) Fixture stack height
  (b) Z-height budget
  (c) Fit assessment
  (d) Required change if it does not fit
  (e) Table load check
  (f) Four-station feasibility
  (g) Engineering assessment

ASSUMPTION:
  1. Machine data from the manufacturer's specification. MUST BE
     CONFIRMED against the actual machine, as spindle-to-table
     distance varies between models and options. [MFR]
  2. Part sits directly on the locators; locator height is
     measured from the top of the base plate.
  3. Clearance margin of 25 mm allows for tool retraction above
     the part and for future longer tools. [PRACTICE]
  4. Holder length is the gauge-line-to-nose dimension for a
     standard BT40 holder; actual value varies by holder type
     and MUST BE CONFIRMED. [MFR]
  5. Four-station layout assumes stations arranged 2 × 2 with
     50 mm between stations and 50 mm edge clearance.
  6. Four-station fixture mass estimated as 3.2 × the single-
     station base (economies of shared base plate), plus 4 parts.

FORMULA:
  (a) H_fix = t_bp + h_loc
  (b) Clearance = H_st − H_fix − h_pt − L_t − L_h
  (e) m_total = m_fix + m_pt ≤ m_max

VARIABLE DEFINITIONS:
  As tabulated in §12 above.

UNIT CONVERSION:
  All values already in mm and kg. No conversion required.

SUBSTITUTION AND CALCULATION:

  (a) FIXTURE STACK HEIGHT
      H_fix = t_bp + h_loc
            = 40 + 60
            = 100 mm

  (b) Z-HEIGHT BUDGET
      Available                       = 550 mm
      − fixture height                = 100 mm  → 450 mm
      − part height                   = 120 mm  → 330 mm
      − tool length                   = 180 mm  → 150 mm
      − holder length                 = 110 mm  →  40 mm

      Clearance remaining = 40 mm

  (c) FIT ASSESSMENT
      Clearance remaining  = 40 mm
      Required margin      = 25 mm
      Surplus              = 40 − 25 = 15 mm
      → IT FITS, but with only 15 mm of surplus.

  (d) IF IT DID NOT FIT — OPTIONS AND THEIR VALUE
      Reduce base plate 40 → 25 mm      : +15 mm
        (but check deflection! L0.3.4)
      Reduce locator height 60 → 40 mm  : +20 mm
        (if part geometry allows)
      Shorter drill 180 → 140 mm        : +40 mm
        (process change — ask)
      Shorter holder (shrink-fit)       : +20-30 mm typical
      Combination of the above          : up to +75 mm

  (e) TABLE LOAD CHECK
      m_total = m_fix + m_pt
              = 62 + 18
              = 80 kg
      Limit   = 400 kg
      Utilisation = 80 / 400 = 20 %          ✓ ample

  (f) FOUR-STATION FEASIBILITY

      FOOTPRINT:
        Station footprint 350 × 300 mm
        2 × 2 layout with 50 mm gaps and 50 mm edges:
          width  = 50 + 350 + 50 + 350 + 50 = 850 mm
          depth  = 50 + 300 + 50 + 300 + 50 = 750 mm
        Table is 900 × 450 mm
          850 ≤ 900  ✓ fits in X
          750 >  450 ✗ DOES NOT FIT IN Y

      → 2 × 2 layout is NOT feasible.

      TRY 4 × 1 IN A ROW:
          width  = 50 + 4×350 + 3×50 + 50 = 1,650 mm
          1,650 > 900  ✗ DOES NOT FIT

      TRY 2 × 1 (two stations):
          width  = 50 + 350 + 50 + 350 + 50 = 850 mm  ✓
          depth  = 50 + 300 + 50            = 400 mm  ✓
      → TWO STATIONS FIT.

      LOAD FOR TWO STATIONS:
        m_fix(2-stn) ≈ 62 × 1.8 = 112 kg   (shared base)
        m_parts      = 2 × 18   =  36 kg
        m_total                 = 148 kg
        148 / 400 = 37 %                        ✓ ample

      X-TRAVEL CHECK REQUIRED:
        An 850 mm wide fixture on a 900 mm table needs the
        machine's X travel to reach both stations. X travel
        MUST BE CONFIRMED — table size and travel are not the
        same thing.

RESULT:
  ┌────────────────────────────────────┬──────────────────┐
  │ (a) Fixture stack height           │ 100 mm           │
  │ (b) Z clearance remaining          │ 40 mm            │
  │ (c) Fit                            │ ✓ PASS (15 mm    │
  │                                    │   above margin)  │
  │ (e) Table load                     │ 80 kg / 400 kg   │
  │                                    │   = 20 %  ✓      │
  │ (f) 4 stations (2×2)               │ ✗ FAIL on Y      │
  │     4 stations (4×1)               │ ✗ FAIL on X      │
  │     2 stations                     │ ✓ FEASIBLE       │
  └────────────────────────────────────┴──────────────────┘

SAFETY FACTOR:
  Z-height margin of 25 mm applied as a design allowance
  [PRACTICE]. Table load utilisation of 20 % gives a factor of
  5 on the stated limit — comfortable.

PASS/FAIL:
  (c) ✓ PASS — fits with 15 mm surplus over the 25 mm margin
  (e) ✓ PASS — 20 % of table load capacity
  (f) ✗ FAIL for 4 stations; ✓ PASS for 2 stations

ENGINEERING CONCLUSION:
  THE FIXTURE FITS, BUT THE Z-HEIGHT RESULT DESERVES ATTENTION,
  AND THE MULTI-STATION FINDING CHANGES THE PROJECT ECONOMICS.

  1. THE Z-HEIGHT MARGIN IS THIN AND WILL ERODE.
     40 mm of clearance sounds adequate, but 15 mm of surplus
     over the design margin is not much for a fixture that may
     be in service for years. Tools get longer as programmes
     evolve — someone will eventually need a longer drill, an
     extended reach end mill, or a boring bar. I would take the
     free improvement available: reducing the locator height
     from 60 mm to 45 mm, if the part geometry permits, adds
     15 mm and doubles the surplus at zero cost.
     I would NOT reduce the base plate thickness to gain height
     without rerunning the deflection calculation from L0.3.4 —
     going from 40 mm to 25 mm reduces stiffness by a factor of
     (40/25)³ = 4.1, which is very likely to be unacceptable.
     THIS IS A GOOD ILLUSTRATION OF COUPLED CONSTRAINTS: the
     obvious way to gain Z-height destroys the stiffness.

  2. THE TABLE LOAD IS A NON-ISSUE — AND THAT IS WORTH KNOWING.
     At 20 % utilisation there is no reason to compromise the
     design to save mass. Where a constraint is comfortably
     satisfied, stop optimising against it and spend the design
     effort where it matters — here, on Z-height and stiffness.

  3. THE MULTI-STATION ANALYSIS IS THE COMMERCIALLY IMPORTANT
     FINDING.
     The customer may well have assumed four stations were
     possible. They are not, on this machine — the table is
     900 × 450 mm, and the 450 mm depth is the binding
     constraint. Two stations fit comfortably.
     This must be communicated EARLY, because it changes the
     cycle time model and therefore the business case. Finding
     it at the design review is a conversation; finding it at
     commissioning is a crisis.
     If four stations are genuinely required, the options are a
     larger machine, a redesigned station with a smaller
     footprint, or an HMC tombstone — which would carry four
     parts on four vertical faces and sidestep the table depth
     limit entirely. That last option is worth raising, because
     it reframes a problem as a machine-selection decision
     rather than a fixture-design failure.

  4. TABLE SIZE IS NOT TRAVEL.
     The two-station layout is 850 mm wide on a 900 mm table,
     but whether the spindle can REACH both stations depends on
     X travel, which is a different specification. This must be
     confirmed before proceeding. It is a classic trap.

  RECOMMENDATION: Proceed with a two-station fixture. Reduce
  locator height to 45 mm to improve the Z margin. Retain the
  40 mm base plate for stiffness. Confirm X travel against the
  850 mm layout width. Raise the four-station limitation with
  the customer immediately, and offer the HMC option.

SENSITIVITY NOTE:
  Z-height budget, ranked by size of contribution:
    1. TOOL + HOLDER (290 mm) — the largest single consumer,
       and the one most often forgotten
    2. PART HEIGHT (120 mm) — fixed by the component
    3. FIXTURE HEIGHT (100 mm) — the only element fully under
       my control, and coupled to stiffness
  Station count, binding constraints:
    1. TABLE DEPTH (450 mm) — binds at 1 row
    2. TABLE WIDTH (900 mm) — binds at 2 columns
    3. X TRAVEL — must be confirmed; may bind before table width
    4. TABLE LOAD — not binding at any feasible station count
```

### 14. Engineering assumptions
- Machine data from manufacturer specification `[MFR]` — must be confirmed against the actual machine.
- Holder length is a standard BT40 gauge dimension `[MFR]` — varies by holder type.
- 25 mm Z clearance margin `[PRACTICE]`.
- Four-station layout assumes 50 mm inter-station and edge clearances.
- Multi-station mass scaled from the single-station design with an allowance for a shared base.
- X travel not yet confirmed — flagged as an outstanding verification.

### 15. Diagram

```
     MACHINE CONFIGURATIONS AND THE FIXTURE ENVELOPE
     (instructional schematic)

  VMC — VERTICAL MACHINING CENTRE

              ┌─────┐
              │  ▓  │ spindle
              └──┬──┘
                 ║ holder      ↕ Z-HEIGHT BUDGET
                 ║             │
                 ▼ tool        │  spindle-to-table
              ┌──────┐         │  − fixture
     chips ↓  │ PART │         │  − part
     ↓ ↓ ↓ ↓  └──────┘         │  − tool
     ┌───────────────────┐     │  − holder
     │     FIXTURE       │     ▼  = clearance  (MUST BE > 0)
     ╞═══╤═══════════╤═══╡
     └───┴───────────┴───┘  T-slotted table

     ✓ gravity helps       ✗ CHIPS FALL ON YOUR WORK
     ✓ easy loading        ✗ one face per setup

  ──────────────────────────────────────────────────────────

  HMC — HORIZONTAL MACHINING CENTRE

     ┌────┐                    ┌─────────┐
     │  ▓ │═══ tool ═══→       │ ┌─────┐ │  face 1
     └────┘                    │ │PART │ │
     spindle                   │ └─────┘ │
                               │  TOMB-  │  faces 2,3,4
     chips ↓ fall clear ✓      │  STONE  │  around the column
                               └────┬────┘
                          ╔═════════╧═════════╗
                          ╚═══ B-axis table ══╝

     ✓ CHIPS FALL AWAY      ✗ gravity fights you
     ✓ 4 faces per setup    ✗ PART FALLS OFF WHEN LOADING
     ✓ pallet changing         → NEEDS A SUPPORT LEDGE
     ✓ fewer setups         ✗ higher fixture cost

  ──────────────────────────────────────────────────────────

  AXES — RIGHT-HANDED, ISO CONVENTION

            +Z  (along spindle, away from work)
             │
             │      C  (about Z)
             │   ↻
             └──────────── +X  (longest travel)
            ╱          ↻ B (about Y)
          ╱
        +Y      ↻ A (about X)

     Right-hand rule: thumb along +axis, fingers = + rotation

  ──────────────────────────────────────────────────────────

  COORDINATE SYSTEM CHAIN

   MACHINE ZERO ──► WORK OFFSET ──► PROGRAM ──► PART FEATURE
    (fixed, by       (G54 etc,      (from       (what the
     encoders)        set at         drawing)    customer
                      setup)                     measures)

   ┌──────────────────────────────────────────────────────┐
   │ THE FIXTURE MUST PROVIDE A REPEATABLE DATUM PICK-UP  │
   │ FEATURE — a dowel, a bored hole, a machined edge.    │
   │ Dimension it. Tolerance it. Note its purpose.        │
   │                                                      │
   │ Without one, the operator picks up on the PART —     │
   │ every time, with variation every time.               │
   └──────────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE 5-AXIS INVERSION

     3-AXIS:  bigger fixture = more rigid = often better
     5-AXIS:  bigger fixture = more collision = WORSE

     ┌──────────────────────────────────────────────┐
     │ ON 5-AXIS, THE SMALLEST FIXTURE THAT HOLDS   │
     │ THE PART SECURELY IS THE BEST FIXTURE.       │
     │ Every millimetre is a collision candidate.   │
     └──────────────────────────────────────────────┘
```

### 16. Drawing example
Not a drawing lesson. Two documentation practices:
1. **Show the machine table and T-slots in phantom** on the fixture assembly drawing general
   arrangement, with the fixture positioned as it mounts. This makes the mounting arrangement
   unambiguous and reveals footprint problems at drawing review.
2. **Dimension and label the datum pick-up feature explicitly**, for example:
   `Ø12 H7 DATUM PICK-UP BORE — SET G54 X0 Y0 FROM THIS FEATURE`.

### 17. CAD workflow
**Model the machine envelope.** Most CAD systems allow a simplified machine model — table, spindle
nose, and the interference envelope — to be included as a reference component in the fixture assembly.
Doing this converts the Z-height budget from an arithmetic check into a visible geometric one, and it
catches errors that spreadsheets miss.

Recommended practice:
1. Create a **machine envelope part** for each machine in the shop, containing the table, T-slots and
   the spindle-nose-to-table clearance volume.
2. Insert it as a **fixed reference** at the top of every fixture assembly.
3. Add the **longest tool and holder** as a modelled component at full depth.
4. Run **interference detection** at each critical toolpath position.
5. For 4/5-axis work, model the **swept rotation envelope** and check clearance through the full range.

This is a Level 19 topic in depth (L19.5, L19.7), but the habit starts here.

### 18. GD&T application
Not applicable at this lesson. Forward link: the relationship between the fixture datum, the part datum
and the machine work offset is the foundation of the datum strategy work in Level 6 and the tolerance
stack-up work in Level 23. The principle established here — **fixture datum should correspond to part
datum** — is one you will apply repeatedly.

### 19. Manufacturing method
Not applicable at this lesson. Practical note: fixture mounting features — T-slot bolt slots, dowel
holes for repeatable relocation, and lifting points — are machined into the base plate and must be
positioned to match the actual table's T-slot pitch. Measure the table; do not trust the brochure.

### 20. Inspection method
Not applicable at this lesson. Practical note: at commissioning, the fixture's position on the table
and the accuracy of its datum pick-up feature are verified with an indicator before any part is cut.
This is part of the fixture qualification procedure (L24).

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Forgetting tool and holder length in the Z budget** | Fixture too tall; spindle cannot reach |
| 2 | Confusing **table size with travel** | Fixture fits the table; spindle cannot reach both ends |
| 3 | Not checking T-slot pitch against the actual machine | Fixture cannot be bolted down |
| 4 | Ignoring chip fall on a VMC | Chips on locators; part sits high; scrap |
| 5 | No support ledge on an HMC fixture | Operator cannot load the part single-handed |
| 6 | Not accounting for part weight in HMC clamping | Part slips under its own weight |
| 7 | Checking 4/5-axis clearance only at zero position | Collision during rotation |
| 8 | Oversized fixture on 5-axis | Tool collisions from multiple approach angles |
| 9 | No datum pick-up feature | Slow, variable setup; operator picks up on the part |
| 10 | Fixture datum not matching part datum | Unnecessary tolerance stack-up |
| 11 | Not verifying clearance to guards, ATC or chip conveyor | Fixture fits the table, fouls the machine |
| 12 | Assuming the machine spec sheet matches the actual machine | Options and retrofits change the numbers |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Spindle cannot reach the part | Z budget error, tool/holder forgotten | Recompute the Z budget with actual tooling | Reduce fixture or locator height; shorter tooling | Complete the Z budget check at concept |
| Fixture will not bolt to the table | T-slot pitch mismatch | Measure the actual table | Slot the mounting holes; adapter plate | Measure the machine, not the brochure |
| Spindle cannot reach the far station | X travel less than fixture width | Check travel spec | Reposition fixture; reduce station count | Check travel, not table size |
| Parts high on locators, VMC | Chips on locating faces | Inspect locators between cycles | Air blast; redesign chip paths | Design chip evacuation from the start |
| Operator needs three hands, HMC | No support ledge | Watch a load cycle | Add support ledge or locating pin | Design HMC loading ergonomics deliberately |
| Collision during 4th-axis rotation | Clearance checked only at zero | Simulate full rotation | Reduce envelope; reposition clamps | Model the swept envelope |
| Setup time excessive and variable | No datum pick-up feature | Time the setup; observe method | Add a pick-up bore or dowel | Include one on every fixture |

### 23. Design checklist
- [ ] Have I recorded the **machine constraints** on a machine data sheet?
- [ ] Have I completed the **Z-height budget** including the longest tool **and** holder?
- [ ] Is there adequate **margin** in the Z budget for future longer tools?
- [ ] Have I checked the footprint against **table size AND axis travel** — they are different?
- [ ] Have I verified the **T-slot size and pitch** against the actual machine?
- [ ] Is fixture + part mass within the **table load limit**?
- [ ] On a VMC, have I designed **chip evacuation**?
- [ ] On an HMC, is there a **support ledge** for loading?
- [ ] On an HMC, do the clamps hold the **part weight** as well as cutting force?
- [ ] On 4/5-axis, have I checked clearance through the **full rotation**?
- [ ] On 5-axis, is the fixture as **compact** as it can be?
- [ ] Is there a **datum pick-up feature**, dimensioned and toleranced?
- [ ] Does the **fixture datum correspond to the part datum**?
- [ ] Have I checked clearance to **guards, ATC, chip conveyor and pallet changer**?
- [ ] Have I modelled the machine envelope in CAD and run interference detection?

### 24. Beginner exercise
**E0.4.4-B** — A VMC has 500 mm maximum spindle-nose-to-table distance. The fixture is 85 mm tall, the
part is 95 mm tall, the longest tool is 150 mm and its holder is 105 mm.
(a) Calculate the remaining clearance.
(b) State whether the design fits with a 25 mm required margin.
(c) If it does not, list two changes that would recover the shortfall, with the amount each recovers.
(d) State one reason why reducing the base plate thickness might be a poor solution.

### 25. Intermediate exercise
**E0.4.4-I** — A part 200 × 150 × 80 mm must be machined on five faces.
(a) State how many setups this requires on a 3-axis VMC, and explain why.
(b) State how many setups it requires on an HMC with a 4-face tombstone, and explain why.
(c) List four fixture design differences between the two solutions.
(d) The VMC fixture costs ₹85,000 `[EX-ASSUMED]` and the HMC tombstone ₹280,000 `[EX-ASSUMED]`. Setup
time is 12 minutes per setup at ₹900/hour `[EX-ASSUMED]`. For an annual volume of 4,000 parts, calculate
the annual setup cost for each and determine the payback period for the HMC option.
(e) State two non-cost factors that should also influence the decision.

### 26. Advanced exercise
**E0.4.4-A** — You must specify a fixture for a 12 kg aluminium aerospace bracket requiring machining on
all six faces to a positional tolerance of ⌀0.05 mm between features on opposite faces.
(i) Explain why a 3-axis VMC with multiple setups is unlikely to achieve the positional tolerance, using
a tolerance stack-up argument.
(ii) Compare a 4-axis VMC, a 5-axis machine and an HMC tombstone for this application, addressing
accuracy, fixture complexity and access.
(iii) For the 5-axis option, explain the fixture design constraint that differs fundamentally from
3-axis practice, and describe two holding methods that suit it.
(iv) The 5-axis machine has a 400 mm swing diameter. The bracket's largest dimension is 260 mm.
Determine the maximum fixture radial extent and state whether a conventional base-plate-and-clamps
arrangement is viable.
(v) Propose a specific fixture concept and justify each element against the constraints identified.
(vi) Specify the datum pick-up strategy, including how you would establish the relationship between the
part datum and the machine coordinate system.
(vii) Explain how you would validate the fixture before production release, listing the specific checks.

### 27. Interview questions
1. *"What is the first thing you check when told which machine a fixture will run on?"*
   **Answer:** The Z-height budget — spindle-nose-to-table distance minus fixture height, part height,
   tool length and holder length. It is the constraint most often violated and the hardest to recover
   from, because by the time you discover it the fixture is built. I also check table size against axis
   travel, because they are different numbers and a fixture that fits the table may still be
   unreachable at its extremes. Then T-slot pitch, table load limit, and spindle power, which bounds
   the cutting forces I have to design for.
2. *"What is the main fixture design difference between a VMC and an HMC?"*
   **Answer:** Gravity and chips, and they work in opposite directions. On a VMC the spindle points
   down, so gravity helps hold the part on the fixture while you clamp it, but chips fall directly onto
   the part and the locators — chip evacuation becomes a primary design problem. On an HMC the spindle
   is horizontal, so chips fall clear, which is a real advantage for reliability, but gravity now acts
   across the clamping direction. The part will fall off unless the fixture holds it, so every HMC
   fixture needs a support ledge or a locating pin that carries the weight during loading. The clamps
   also have to resist the part's weight, not just the cutting force. Structurally, a VMC fixture is a
   horizontal plate with things standing up on it, and an HMC fixture is a vertical tombstone with
   things hanging off it — genuinely different objects.

### 28. Expert questions
1. *"When would you recommend an HMC over a VMC, and how would you justify it to a customer who sees
   only the higher fixture cost?"*
   **Answer:** I would frame it as a **cost per part** decision rather than a fixture cost decision,
   because the fixture is a one-off and the parts are not.
   The technical case rests on three things. **Setup reduction**: a four-face tombstone machines four
   faces in one setup where a VMC needs four, and each eliminated setup removes both the time and the
   relocation error. **Positional accuracy between faces**: features machined in one setup are related
   by the machine's own accuracy, whereas features machined in separate setups are related by the
   accumulated location error of each setup — which for tight inter-face tolerances is often the
   decisive argument, independent of cost. **Chip evacuation**: chips fall clear on an HMC, which
   removes the single most common cause of intermittent locating error and unplanned stoppages,
   particularly on high-volume cast iron and steel work.
   Then there is **pallet changing** — loading one pallet while the other is machining converts setup
   time from machine downtime into hidden time, which on a well-utilised machine is worth more than the
   setup time itself.
   To justify it commercially I would build the comparison properly: fixture cost amortised over the
   programme volume, plus setup labour, plus machine time, plus expected scrap, plus the cost of the
   additional setups' quality risk. On low volumes the VMC wins clearly. Somewhere between a few
   hundred and a few thousand parts a year, depending on complexity, the HMC overtakes it, and beyond
   that the gap widens rapidly.
   The argument that usually lands is the **scrap and accuracy** one rather than the time one, because
   customers underestimate the cost of multi-setup relocation error. If the part has tight inter-face
   tolerances, the honest answer may be that the VMC route cannot hold them at all — at which point the
   comparison is not cost versus cost but capability versus incapability.
   I would also be honest about where the HMC loses: low volume, high mix, prototype work, and any
   situation where the part geometry does not suit vertical mounting.
2. *"A fixture works perfectly on machine 1 but produces scrap on machine 2, which is nominally
   identical. What is happening?"*
   **Answer:** "Nominally identical" is doing a lot of work in that sentence, and the investigation is
   about finding where the two machines actually differ.
   I would start with the **work offsets**, because that is the most common answer. If the offset on
   machine 2 was set differently — picked up on a different feature, or set by a different operator
   using a different method — the parts will be consistently offset. This is why a fixture datum
   pick-up feature and a written setup instruction matter: they remove the operator's discretion.
   Then **machine condition**. Nominally identical machines of different ages have different backlash,
   different ballscrew wear, different spindle runout and different geometric accuracy. A machine with
   more spindle runout will bore oversize. A machine with axis squareness error will produce parts that
   are correct in isolation and wrong in relation. I would ask when each machine was last
   geometry-checked and compare the reports — and if there are no reports, that is itself the finding.
   Then the **table**. T-slot wear, table flatness, and damage or burrs on the table surface will sit
   the fixture differently. A fixture bolted onto a burr is a tilted fixture. I would blue the fixture
   base against both tables.
   Then **tooling and program**. Are the same tools in use, with the same lengths and the same offsets?
   Is it genuinely the same program, or a copy that diverged? Is coolant delivery the same — different
   flow changes both thermal behaviour and chip clearing.
   Then **thermal**. Machine 2 may be in a different position in the shop — near a door, in sunlight,
   or on a different air circuit. Thermal environment differences produce time-of-day error patterns.
   And finally, **the fixture itself may be the variable**, not the machine. If there are two copies of
   the fixture, they are not identical either. If it is one fixture that was moved, it may have been
   damaged in the move.
   The method throughout is the same: measure the scrap parts and let the **error pattern** direct the
   search. A consistent offset points at the work offset or fixture seating; a size error points at
   tooling or spindle; a squareness error points at machine geometry; scatter points at seating,
   clamping or swarf; a time-dependent trend points at thermal.

### 29. Summary
Machine tools define the envelope every fixture must live inside. VMCs have a vertical spindle and a
horizontal table: gravity helps hold the part, loading is easy, but chips fall onto the work and chip
evacuation becomes a primary design problem. HMCs have a horizontal spindle and usually a rotary table
carrying a tombstone: chips fall clear and four faces can be machined in one setup, but gravity acts
across the clamping direction so the fixture must support the part's weight during loading. Four- and
five-axis machines add rotation, and on five-axis work the usual instinct inverts — the smallest
fixture is the best, because every millimetre is a collision candidate. Axes follow the right-handed
ISO convention with Z along the spindle. Programs reference a work coordinate system set as an offset
from machine zero, so every fixture should provide a dimensioned, toleranced datum pick-up feature, and
the fixture datum should correspond to the part datum. Before any design work begins, the machine
constraints must be recorded and the Z-height budget calculated including tool and holder — the
subtraction that has scrapped more fixtures than any calculation error.

### 30. Key takeaways
- **VMC**: horizontal plate, gravity helps, **chips fall on your work**, one face per setup.
- **HMC**: vertical faces, gravity fights you, **chips fall clear**, four faces per setup, needs a
  **support ledge**.
- **5-axis inverts the rule**: the smallest fixture is the best fixture.
- Axes are **right-handed**, Z along the spindle, +Z away from the work `[STD]`.
- **Z budget = spindle-to-table − fixture − part − tool − holder.** Never forget the holder.
- **Table size is not axis travel.** Check both.
- Every fixture needs a **datum pick-up feature** — dimensioned, toleranced, and noted.
- **Fixture datum should match part datum** to avoid needless stack-up.
- Record the **machine constraints** before drawing anything. Fifteen minutes, many fixtures saved.
- Model the **machine envelope in CAD** and check interference — including through full rotation.

---

# END OF LEVEL 0 — PART 2

## What you have covered

You have completed **Module 0.3 (Engineering Mechanics)** and **Module 0.4 (Machining Fundamentals)** —
eight lessons, and the entire physics and process foundation of fixture design.

| Module | Lesson | Title | Core content |
|---|---|---|---|
| 0.3 | L0.3.1 | Forces, moments and equilibrium | `M = F×d`, ΣF=0, ΣM=0, free body diagrams, 6 DOF |
| 0.3 | L0.3.2 | Stress, strain and material behaviour | σ=F/A, E=σ/ε, yield, factor of safety |
| 0.3 | L0.3.3 | Friction and clamping force | `F ≤ μN`, the positive stop doctrine |
| 0.3 | L0.3.4 | Deflection and stiffness | `δ = CFL³/EI`, `I = bh³/12`, the cube rules |
| 0.4 | L0.4.1 | How metal is cut | V, f, a_p, MRR, speed vs feed vs depth |
| 0.4 | L0.4.2 | Cutting forces | `F_c = k_c A_c`, direction before magnitude |
| 0.4 | L0.4.3 | The seven machining operations | Milling, drilling, boring, reaming, tapping, counterboring, facing |
| 0.4 | L0.4.4 | Machine tools and coordinate systems | VMC/HMC, axes, WCS, Z-height budget |

## The governing principles established in Part 2

Part 1 gave you nine principles. Part 2 adds nine more.

> **10. A body in equilibrium satisfies ΣF = 0 and ΣM = 0** — three equations in 2D, six in 3D. Six
> equations, six degrees of freedom, and hence the 3-2-1 principle you will meet in Level 4.
>
> **11. Check tipping AND sliding. They are different failure modes** and a design can pass one while
> failing the other by a factor of eight, as L0.3.3 demonstrated.
>
> **12. Stress and stiffness are independent.** Passing a strength check proves nothing about
> deflection. The worked example had a factor of safety of 13 and was still four times too flexible.
>
> **13. Friction is the clamping resource and the locating enemy.** It is what holds the part, and it
> is what stops the part from seating. Both are true at once.
>
> **14. FIT A POSITIVE STOP.** A cutting force directed into a hardened stop costs almost nothing to
> resist. The same force resisted by friction can demand twenty to thirty times the clamping — often
> a physically impossible amount. This is the single highest-leverage decision in fixture design.
>
> **15. Any stop that touches the part IS a locator.** Dimension it, tolerance it, harden it, dowel it,
> and monitor it for wear. There is no such thing as a casual stop.
>
> **16. Deflection scales with span cubed and inversely with thickness cubed.** Halving the span and
> doubling the thickness each give an eightfold improvement — but the support costs a fraction of the
> steel.
>
> **17. Speed kills tools; feed and depth kill fixtures.** Cutting force is governed by chip
> cross-section, not by cutting speed. A marginal fixture is rescued by lighter passes, never by
> slower ones.
>
> **18. Direction before magnitude.** Determine which way the cutting force points, place a locator to
> receive it, and only then size the clamps. The sequence is DIRECTION → LOCATOR → CLAMP, and reversing
> it is how fixtures come to need impossible clamping forces.

## The single most important result in Level 0

Two worked examples in Part 2, on different operations, produced the same answer:

| Lesson | Operation | Without a stop | With a stop | Ratio |
|---|---|---|---|---|
| L0.3.3 | Milling, 2.4 kN cut | 39,882 N total | 1,440 N total | **28×** |
| L0.4.2 | Face milling, 8.4 kN cut | 70,127 N per clamp | 2,454 N per clamp | **28.6×** |
| L0.4.3 | Drilling, 19.2 N·m torque | 2,667 N per clamp | 921 N per clamp | **2.9×** |

Different operations, different force types, the same conclusion. **The positive stop is not a
refinement — it is the difference between a viable fixture and an impossible one.**

Carry this into Level 1. When you see a clamping force calculation that produces an implausible number,
your first question should never be "what bigger clamp do I need?" It should be **"where is the
stop?"**

## Formula reference — Part 2

**Statics**
```
M = F × d                    ΣFx = 0,  ΣFy = 0,  ΣM = 0
W = m g                      g = 9.81 m/s²
F_clamp = F_bolt × L1/(L1+L2)          strap clamp
S_tipping = (F_clamp·a + W·b) / (F_cut·h)         S_req ≥ 2.0
```

**Stress and strain**
```
σ = F/A          τ = F/A_shear          σ_b = F/(d×t)
ε = ΔL/L         E = σ/ε                ΔL = FL/(AE)
FoS = σ_yield / σ_applied               τ_yield = 0.577 σ_yield
```

**Friction**
```
F_friction ≤ μN
F_clamp ≥ (F_cut × SF) / (μ × n)
φ = arctan(μ)                self-locking when α < φ
```

**Deflection**
```
k = F/δ                      δ = C F L³ / (E I)
cantilever    δ = FL³/(3EI)
simply supp.  δ = FL³/(48EI)
fixed-fixed   δ = FL³/(192EI)
I = bh³/12  (rectangle)      I = πd⁴/64  (circle)
Z = bh²/6                    σ = M/Z
```

**Machining**
```
V = πDN/1000                 N = 1000V/(πD)
v_f = f_z × z × N            MRR = a_p × a_e × v_f
F_c = k_c × A_c              A_c ≈ a_p × f_z
P_c = F_c × V / 60,000       F_c = 60,000 P_c / V
F_t ≈ K_t × d × f            M ≈ K_m × d² × f      (drilling)
ΔL = L α ΔT                  α_steel ≈ 11.5e-6 /°C
```

**Machine**
```
Z clearance = H_spindle-to-table − H_fixture − H_part − L_tool − L_holder
M_resist = Σ (μ × F_clamp_i × r_i)
```

## Reference data summary — Part 2

**Young's modulus** `[GUIDE]` — steel 200 GPa (all grades), grey cast iron 100–140, aluminium 70,
austenitic stainless 193.

**Yield strength** `[GUIDE]` — mild steel 250 MPa, EN8 465 MPa, EN19 hardened ~800 MPa.

**Factor of safety bands** `[PRACTICE]` — static ductile 1.5–2, fixture general 2–3, dynamic 3–4,
uncertain loading 4–6, brittle materials 5–8.

**Coefficient of friction** `[GUIDE]` — steel/steel dry 0.15–0.25, lubricated 0.08–0.15; steel/aluminium
dry 0.20–0.30; serrated pads 0.30–0.50. **Coolant roughly halves μ — always design lubricated.**

**Specific cutting force k_c** `[GUIDE]` — aluminium 400–800, grey cast iron 900–1,400, mild steel
1,500–1,800, EN8 1,800–2,100, alloy steel 2,100–2,900, stainless 2,000–2,600, titanium 1,800–2,400,
Inconel 2,700–4,000 N/mm².

**Drilling constants** `[GUIDE]` — see L0.4.3 §6 table.

**Allowances** `[GUIDE]` — shock factor 1.3–2.0 (interrupted cuts), tool wear factor up to 1.5,
breakthrough torque spike ≈1.5.

**Thermal expansion** `[GUIDE]` — steel 11.5 × 10⁻⁶ /°C, aluminium 23 × 10⁻⁶ /°C.

**Fixture deflection budget** `[GUIDE]` — 10–20% of the part tolerance affected, pending the full error
budget at L23.11.

All values above are for **estimation and learning**. For design release, obtain manufacturer data
`[MFR]` for the specific material, tool and condition.

## Exercises available in Part 2

Reply `SOLVE <id>` for a full worked solution to any of these.

| Lesson | Beginner | Intermediate | Advanced |
|---|---|---|---|
| L0.3.1 | E0.3.1-B | E0.3.1-I | E0.3.1-A |
| L0.3.2 | E0.3.2-B | E0.3.2-I | E0.3.2-A |
| L0.3.3 | E0.3.3-B | E0.3.3-I | E0.3.3-A |
| L0.3.4 | E0.3.4-B | E0.3.4-I | E0.3.4-A |
| L0.4.1 | E0.4.1-B | E0.4.1-I | E0.4.1-A |
| L0.4.2 | E0.4.2-B | E0.4.2-I | E0.4.2-A |
| L0.4.3 | E0.4.3-B | E0.4.3-I | E0.4.3-A |
| L0.4.4 | E0.4.4-B | E0.4.4-I | E0.4.4-A |

**24 exercises in Part 2. 27 in Part 1. 51 so far in Level 0.**

If you are unsure where to start, work **E0.4.2-A** — the perimeter profiling problem. It requires you
to combine force estimation, direction analysis, locator placement and clamping calculation, which is
the complete Level 0 skill set applied to one problem.

## Self-check before continuing

You should now be able to answer these without referring back. If any is unclear, revisit the lesson
noted.

1. Why does a design need both a tipping check and a sliding check? *(L0.3.1)*
2. What does a factor of safety of 13 on stress tell you about deflection? *(L0.3.2, L0.3.4)*
3. Why does coolant make a friction-based clamping scheme worse? *(L0.3.3)*
4. Why is any stop that touches the part a locator? *(L0.3.3)*
5. What single change reduces deflection eightfold at almost no cost? *(L0.3.4)*
6. Why can't you fix a deflection problem by specifying a stronger steel? *(L0.3.4)*
7. If a fixture is marginal on force, why is reducing cutting speed useless? *(L0.4.1)*
8. Why does direction matter more than magnitude in cutting force? *(L0.4.2)*
9. Why does a clamp directly over a drilled hole provide no torsional restraint? *(L0.4.3)*
10. What five quantities go into the Z-height budget? *(L0.4.4)*

## Where this fits in the whole programme

```
LEVEL 0  ENGINEERING FOUNDATION
   Part 1 ✓  Manufacturing processes · Engineering drawing
   Part 2 ✓  Mechanics · Machining fundamentals      ← YOU ARE HERE
   Part 3    Materials · Level 0 assessment

LEVEL 1  Introduction to jigs and fixtures
LEVEL 2  Fixture elements and standard components
LEVEL 3  The design process and requirement capture
LEVEL 4  LOCATION THEORY — 3-2-1, degrees of freedom
   ↑ This is where Part 2 pays off. Every principle you have just
     learned becomes a design decision at Level 4.
```

## What is next — Part 3

**Module 0.5 — Engineering Materials and Heat Treatment** (5 lessons)

| Lesson | Title |
|---|---|
| L0.5.1 | Steel classification and designation systems |
| L0.5.2 | Fixture materials: what to use where, and why |
| L0.5.3 | Heat treatment: hardening, tempering, case hardening, nitriding |
| L0.5.4 | Hardness: scales, conversion, and what to specify |
| L0.5.5 | Surface treatments, coatings and corrosion protection |

Then:

**LEVEL 0 ASSESSMENT** — 40 questions across all five modules, with the grade bands established in the
roadmap (90–100 MASTER, 80–89 ADVANCED, 70–79 COMPETENT, 60–69 DEVELOPING, below 60 REPEAT), plus a
practical design-judgement exercise and full worked answers.

Part 3 completes Level 0 and qualifies you to begin Level 1.

---

**Send `NEXT` to continue.**

*(Or `SOLVE <exercise-id>` for a worked solution, or ask any question about Part 2 before moving on.)*

---

*MASTER INDUSTRIAL FIXTURE DESIGN ENGINEERING — From Scratch to Production-Ready Professional*
*Level 0, Part 2 of 3 — Engineering Mechanics and Machining Fundamentals*
*All schematics in this document are instructional only — FOR TRAINING ONLY, NOT FOR MANUFACTURE.*
