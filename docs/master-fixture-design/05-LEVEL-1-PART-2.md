# MASTER INDUSTRIAL FIXTURE DESIGN ENGINEERING
## *From Scratch to Production-Ready Professional*

# LEVEL 1 — CNC MACHINING FUNDAMENTALS
# PART 2 OF 2 — MODULE 1.3 AND THE LEVEL 1 ASSESSMENT

---

## POSITION IN THE PROGRAMME

```
  LEVEL 0  ENGINEERING FOUNDATION          ✔ COMPLETE
           5 modules · 22 lessons

  LEVEL 1  CNC MACHINING FUNDAMENTALS
    PART 1 Module 1.1  Machine architecture     ✔ COMPLETE
           Module 1.2  Coordinate systems       ✔ COMPLETE
           8 lessons · principles 28-54

    PART 2 Module 1.3  Machining operations     ◄ YOU ARE HERE
           6 lessons
           Level 1 assessment — Quiz Q1 (35 items)
                              + offset-table assignment

  LEVEL 2  WHAT IS A FIXTURE?                   → next
```

---

## WHY MODULE 1.3 EXISTS

Part 1 established two things. Module 1.1 showed that **the fixture sits inside the structural loop and
must resist what the machine does to the part**. Module 1.2 showed that **the fixture must put the part
where the machine believes it is**.

Both left the same question open. Module 1.1 talked about cutting forces in general terms — a tangential
force, an axial force, a figure of 2,100 N or 4,500 N taken as given. **It never asked where those
numbers come from, or which direction they actually point.**

That is what Module 1.3 does, and it is the last thing standing between you and Level 2.

```
   MODULE 1.1  "the fixture must resist the cutting
                force"
                        │
                        │  ← but WHICH force? WHICH
                        │    direction? HOW BIG?
                        ▼
   MODULE 1.3  face mill  → mostly sideways, and the
                            direction REVERSES with
                            climb vs conventional
               end mill   → sideways + a vertical
                            component that can LIFT
               slot mill  → side load doubles, and
                            entry is a SHOCK
               drill      → mostly DOWN, but with a
                            TORQUE that rotates, and a
                            BREAKTHROUGH SPIKE
               ream/bore  → almost NO force — and yet
                            the hardest fixture problem
               tap        → torque that REVERSES
                            direction mid-operation
               chamfer    → trivial force, but the
                            tool cannot REACH
```

> **The Level 1 exit criterion is that you can state, for any machining operation, the force direction
> the fixture must resist.** Every lesson in this module builds one row of that table, and the module
> closes by assembling all of them into a single reference chart you will use for the rest of the
> programme.

## HOW THIS MODULE DIFFERS FROM WHAT YOU HAVE ALREADY LEARNED

L0.4 taught cutting theory: cutting speed, feed per tooth, specific cutting force `k_c`, the tangential
force `F_c = k_c · a_p · f_z`. That was a **magnitude** calculation, done from the machining side.

Module 1.3 uses those same numbers but asks a different question:

| L0.4 asked | Module 1.3 asks |
|---|---|
| How big is the cutting force? | **Which way does it point, and does that direction change?** |
| What power does the spindle need? | **Which degree of freedom does it threaten?** |
| Will the tool survive? | **Will the part move — and if so, how?** |
| What is the average force? | **What is the worst instant?** |

`[PRACTICE]` That last row is the one that separates a working fixture from a scrapped batch. **Average
forces do not lift parts; peak forces do.** A drill's breakthrough spike, a cutter's entry shock and a
tap's reversal are all short-duration events that never appear in an average, and all three are
routinely the reason a fixture fails.

## CONTENTS OF PART 2

| Lesson | Title | Focus |
|---|---|---|
| **L1.3.1** | Face milling and end milling | Force direction; **up-cut vs down-cut and why the direction reverses** |
| **L1.3.2** | Slot milling, pocket milling, contouring | Side loads, entry shock, tool deflection |
| **L1.3.3** | Drilling | Thrust and torque; **the breakthrough spike**; lifting and rotating |
| **L1.3.4** | Reaming and boring | **Low force, high accuracy — stability over strength** |
| **L1.3.5** | Tapping | **Reversal torque**; rigid vs floating; chip packing |
| **L1.3.6** | Chamfering, counterboring, countersinking | Short cuts; **tool access as the governing constraint** |
| — | **Module 1.3 closing** | The complete operation → force → DOF chart |
| — | **Level 1 assessment** | Quiz Q1 (35 items) + offset-table assignment |

**The two most important lessons in Part 2 are L1.3.1 and L1.3.4**, for opposite reasons. L1.3.1 because
the climb-versus-conventional force reversal is the single most misunderstood thing in fixture load
analysis. L1.3.4 because reaming and boring produce almost no force and are nonetheless the hardest
fixture problem in the module — which is a lesson about what fixtures are actually for.

---

# MODULE 1.3 — MACHINING OPERATIONS IN DETAIL

**Lessons:** L1.3.1 – L1.3.6
**Estimated time:** 5 hours
**Prerequisites:** Module 1.1, Module 1.2, L0.4 (cutting theory), L0.3 (statics, ΣF=0 / ΣM=0)

## Module learning outcome

You will be able to state, for any of the common machining operations, the magnitude class and direction
of the forces produced, the degrees of freedom those forces threaten, the peak-load event that governs
rather than the average, and the resulting fixture design requirement — and to assemble that analysis
into an operation-by-operation load table for a real multi-operation component.

---

## LESSON L1.3.1 — FACE MILLING AND END MILLING

### 1. Lesson title
**L1.3.1 — Force direction in face and end milling: up-cut, down-cut, and the load case the fixture actually sees**

### 2. Learning objective
By the end of this lesson you will be able to resolve milling cutting forces into their tangential,
radial and axial components, explain how climb and conventional milling reverse the direction of the
force on the workpiece, calculate the resultant force and its direction for a given cut, identify which
degrees of freedom each direction threatens, and specify the locator and clamp arrangement that suits the
resulting load case.

### 3. Prerequisites
L0.3.2 (statics, ΣF=0/ΣM=0), L0.3.3 (locators and the 3-2-1 principle), L0.4.2 (cutting speed and feed),
L0.4.3 (specific cutting force), L1.1.2 (VMC force split).

### 4. Why the topic matters
Almost every fixture in this programme will resist a milling force at some point, and milling is where
most designers form their intuition about cutting loads. **Most of that intuition is wrong in one
specific way**, and this lesson exists to correct it.

The wrong intuition is that a milling cutter "pushes the part away" in the feed direction. It does not,
reliably. Depending on whether the cut is climb or conventional, and on where the cutter sits relative to
the workpiece, the force on the part can point:

- **along** the feed direction,
- **against** the feed direction,
- **sideways**, perpendicular to feed,
- **downward**, helping the locators,
- or **upward**, trying to lift the part off them.

```
   THE SAME CUTTER, THE SAME MATERIAL, THE SAME
   REMOVAL RATE — AND THE FORCE ON THE PART POINTS
   IN A DIFFERENT DIRECTION DEPENDING ON A SETTING
   IN THE CAM SYSTEM THAT THE FIXTURE DESIGNER
   USUALLY NEVER SEES.

   THAT IS WHY THIS LESSON IS FIRST IN THE MODULE.
```

`[PRACTICE]` The practical consequence is that a fixture designed for one cutting strategy can be
inadequate for another, and the change that breaks it — a programmer switching from conventional to
climb milling to improve surface finish — is invisible from the fixture drawing. **A robust fixture
resists the force in both directions**, and knowing when that matters requires understanding the
mechanism.

### 5. Simple explanation
A milling cutter is a rotating wheel with teeth. Each tooth takes a bite, and each bite pushes on the
workpiece. The direction of that push depends on **which way the tooth is travelling when it is in the
cut**, relative to the direction the table is feeding.

```
   CONVENTIONAL (UP-CUT) MILLING
   Cutter rotation OPPOSES the feed at the cut

        cutter turns ↻
              ___
            /     \
           |   ●   |
            \ ___ /
        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  workpiece
        ──────► feed

   The tooth enters at ZERO chip thickness, rubs,
   then bites. It tends to LIFT the workpiece.

  ─────────────────────────────────────────────────

   CLIMB (DOWN-CUT) MILLING
   Cutter rotation AGREES with the feed at the cut

        cutter turns ↺
              ___
            /     \
           |   ●   |
            \ ___ /
        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  workpiece
        ──────► feed

   The tooth enters at MAXIMUM chip thickness and
   thins to zero. It tends to PUSH THE WORKPIECE
   DOWN onto the locators.
```

**Climb milling pushes the part down. Conventional milling tends to lift it.** That single sentence is
the most useful thing in this lesson, and §6 explains why it is true and where it stops being true.

### 6. Engineering explanation

**RESOLVING THE CUTTING FORCE**

The force on a single engaged tooth is conventionally resolved into three components:

```
   ON THE TOOTH, AT THE CUTTING POINT

     F_t  TANGENTIAL — along the cutting direction,
          opposing rotation. This is the component
          that consumes SPINDLE POWER.

     F_r  RADIAL — perpendicular to the cutting
          direction, pushing the tooth away from the
          workpiece surface.

     F_a  AXIAL — along the spindle axis.

   ON THE WORKPIECE, the reaction is EQUAL AND
   OPPOSITE (Newton's third law, L0.3.1).

   ┌────────────────────────────────────────────┐
   │ THE FIXTURE SEES THE REACTION, NOT THE     │
   │ FORCE ON THE TOOL. Get the sign right.     │
   └────────────────────────────────────────────┘
```

`[GUIDE]` Typical component ratios for milling steel with a sharp carbide cutter, from L1.1.2:

| Component | Ratio to tangential | Note |
|---|---|---|
| Tangential F_t | 1.00 | The reference; determines power |
| Radial F_r | 0.30–0.60 | Higher with a dull tool or a small radial engagement |
| Axial F_a | 0.20–0.40 | Strongly dependent on the cutter's lead angle and helix |

**These are guideline ranges and must be confirmed** for a specific tool and material combination.
Manufacturer data or a dynamometer test gives better figures where the margin is tight.

**WHY THE DIRECTION REVERSES: CHIP THICKNESS THROUGH THE ARC**

The mechanism people miss is that a milling tooth's chip thickness **varies through its engagement arc**,
and the direction of the resultant force follows it.

```
   CONVENTIONAL (UP-CUT)

     Tooth path through the cut:
       ENTRY   chip thickness = 0
       MIDDLE  chip thickness increasing
       EXIT    chip thickness = MAXIMUM

     At entry the tooth cannot bite — it RUBS and
     BURNISHES until enough pressure builds to shear.
     ✗ Work hardening at the entry point
     ✗ Rapid flank wear
     ✗ The rubbing action generates an UPWARD force
       component that tries to LIFT the part

  ─────────────────────────────────────────────────

   CLIMB (DOWN-CUT)

     Tooth path through the cut:
       ENTRY   chip thickness = MAXIMUM
       MIDDLE  chip thickness decreasing
       EXIT    chip thickness = 0

     The tooth bites immediately at full thickness.
     ✓ No rubbing, no work hardening
     ✓ Better surface finish and tool life
     ✓ The cutting action presses the part DOWN
       onto the locators
     ✗ SHOCK LOAD at entry — the tooth slams into
       full chip thickness
     ✗ Requires a machine with NO BACKLASH in the
       feed axis
```

> **The backlash requirement is why climb milling was historically avoided.** On an old manual machine
> with a worn leadscrew, climb milling makes the cutter grab the work and pull the table forward into
> the backlash, which snatches and can break the cutter. **Every modern CNC machine uses preloaded
> ballscrews with effectively zero backlash (L1.1.1), so climb milling is now the default** for finishing
> and usually for roughing too `[PRACTICE]`.
>
> This matters to a fixture designer because it means **you should assume climb milling unless told
> otherwise** — and therefore assume a downward force component — while still designing so that
> conventional milling would not lift the part.

**FACE MILLING — THE DIRECTION DEPENDS ON CUTTER POSITION**

Face milling is more complicated than the two-case picture above, because a face mill is usually wider
than the cut and its centreline position relative to the workpiece changes the force direction.

```
   CASE A — CUTTER CENTRED ON THE WORKPIECE

        ┌─────────────────┐
        │       ●         │   cutter centre over
     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  the middle of the cut
        ──────► feed

     Half the teeth are climb-cutting and half are
     conventional. The SIDE forces LARGELY CANCEL.
     ✓ Low net side load
     ✗ But the load PULSATES as teeth enter and exit
     → GOOD for a weak fixture; the residual is
       mostly DOWNWARD

  ─────────────────────────────────────────────────

   CASE B — CUTTER OFFSET, CLIMB-DOMINANT

        ┌─────────────────┐
        │  ●              │   cutter centre offset
     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  toward the entry side
        ──────► feed

     Most teeth cut in climb mode.
     → Net force pushes the part DOWN and ALONG
       the feed direction
     ✓ Downward component helps seating

  ─────────────────────────────────────────────────

   CASE C — CUTTER OFFSET, CONVENTIONAL-DOMINANT

        ┌─────────────────┐
        │              ●  │
     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
        ──────► feed

     Most teeth cut conventionally.
     → Net force has an UPWARD component
     ✗ THE WORST CASE FOR THE FIXTURE

  ┌──────────────────────────────────────────────┐
  │ [PRACTICE] Aim for the cutter centreline to  │
  │ sit slightly OFF the workpiece centreline,   │
  │ CLIMB-DOMINANT. This gives a downward force, │
  │ avoids the tooth exiting at full thickness,  │
  │ and reduces the pulsation of a perfectly     │
  │ centred cut.                                 │
  │                                              │
  │ A rule of thumb is to make the cutter        │
  │ diameter about 1.3-1.6 × the width of cut,   │
  │ offset so engagement is climb-dominant.      │
  └──────────────────────────────────────────────┘
```

**END MILLING — THE SIDE LOAD IS THE PROBLEM**

An end mill cutting with its periphery produces a force that is predominantly **sideways**, and that is
the case Module 1.1's worked examples kept running into.

```
   END MILL, PERIPHERAL CUT

              ↓ tool
            ┌───┐
            │ ● │
            └───┘
     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  part
     ═══════════════   locating face

   The force is mostly HORIZONTAL. Gravity does not
   help. Friction alone is usually insufficient
   (L1.1.2: 15.9× short).

   → THIS IS WHY POSITIVE STOPS EXIST.
```

**The helix angle adds a vertical component**, and its direction depends on the hand of the helix and
the direction of rotation:

```
   RIGHT-HAND CUT, RIGHT-HAND HELIX (the common case)

     The helix screws the chips UPWARD out of the cut.
     REACTION ON THE WORKPIECE: DOWNWARD.
     ✓ Helps seat the part
     ✓ Good chip evacuation in a slot

   RIGHT-HAND CUT, LEFT-HAND HELIX

     Chips are pushed DOWNWARD.
     REACTION ON THE WORKPIECE: UPWARD — LIFTING.
     ✗ Can lift a thin part off its locators
     ✓ But used deliberately for thin sheet, to hold
       the material DOWN against a backing plate,
       and to avoid lifting burrs on the top edge

   ┌──────────────────────────────────────────────┐
   │ A LEFT-HAND-HELIX CUTTER IN A DEEP SLOT IS A │
   │ RECOGNISED LIFTING HAZARD ON A LIGHTLY       │
   │ CLAMPED PART. If the process uses one, the   │
   │ fixture must resist an UPWARD load — and     │
   │ that is a question worth asking the process  │
   │ engineer explicitly.                         │
   └──────────────────────────────────────────────┘
```

**WHICH DEGREES OF FREEDOM ARE THREATENED**

This is the analysis that matters, and it follows directly from L0.3.3.

| Force direction | DOF threatened | Fixture response |
|---|---|---|
| **Horizontal, along feed** | Translation in feed axis | **Positive stop** in that direction |
| **Horizontal, across feed** | Translation in the cross axis | **Positive stop**; second locator |
| **Downward** | None — it seats the part | Locating pads must take it without deflecting |
| **Upward (lifting)** | Translation in Z; loss of seating | **Clamp force must exceed it with a factor** |
| **Moment about a horizontal axis** | Rotation — part tips | Clamp position and locator spread (L0.3.4) |
| **Moment about the vertical axis** | Rotation in plan | **Two locators**, spread as far as possible |

> **The most common design error in this area is treating the milling force as a single number in a
> single direction.** A face mill produces a downward force *and* a side force *and* a moment about the
> vertical axis, and the moment is frequently the one that governs, because it is resisted only by the
> spread between two locators rather than by the whole clamp force.

### 7. Terminology

| Term | Definition |
|---|---|
| **Tangential force F_t** | Component along the cutting direction; determines spindle power |
| **Radial force F_r** | Component perpendicular to the cutting direction |
| **Axial force F_a** | Component along the spindle axis |
| **Climb / down-cut milling** | Cutter rotation agrees with feed at the cut; chip thick to thin |
| **Conventional / up-cut milling** | Cutter rotation opposes feed at the cut; chip thin to thick |
| **Chip thickness** | Thickness of material removed by one tooth at a given point in the arc |
| **Radial engagement (a_e)** | Width of cut, measured across the cutter |
| **Axial engagement (a_p)** | Depth of cut, measured along the spindle axis |
| **Feed per tooth (f_z)** | Advance of the workpiece per cutting edge |
| **Helix angle** | Spiral angle of the flute; determines the axial force direction |
| **Entry shock** | Impact load as a tooth enters at full chip thickness |
| **Burnishing / rubbing** | Non-cutting deformation at zero chip thickness |
| **Specific cutting force k_c** | Force per unit chip cross-sectional area |

### 8. Principle

> **CLIMB MILLING PUSHES THE PART DOWN; CONVENTIONAL MILLING TENDS TO LIFT IT.** The direction of the
> force on the workpiece is set by the cutting strategy, which is chosen in the CAM system and does not
> appear on the fixture drawing.
> **A MILLING FORCE IS NEVER A SINGLE NUMBER IN A SINGLE DIRECTION.** It has tangential, radial and axial
> components, it produces a moment about the vertical axis, and the moment frequently governs.
> **DESIGN FOR BOTH DIRECTIONS.** A fixture that only works in climb milling will fail the day someone
> changes the strategy for surface finish.

### 9. Industrial application

**Deciding the locator arrangement from the force direction**

```
   THE ANALYSIS, IN ORDER  [PRACTICE]

   1. WHAT IS THE FEED DIRECTION?
        → the primary side load acts along it

   2. IS IT CLIMB OR CONVENTIONAL?
        → sets the sign of the vertical component
        → IF UNKNOWN, ASSUME THE WORST: conventional,
          i.e. LIFTING

   3. WHERE IS THE CUTTER RELATIVE TO THE PART?
        → centred: side forces largely cancel
        → offset: net side load in one direction

   4. WHAT MOMENT DOES THE SIDE FORCE PRODUCE
      ABOUT THE VERTICAL AXIS?
        → M = F_side × (distance from the locator pair)

   5. WHICH DOF IS LEAST RESTRAINED?
        → that is where the part will move

   6. FIT A POSITIVE STOP IN THAT DIRECTION
        (L0.3.3 — the governing principle)
```

**A real failure this analysis prevents** `[EX-ASSUMED]` illustrative case:

```
SITUATION
  Aluminium bracket, face milled on a VMC. Fixture
  used three clamps and relied on friction against a
  ground base plate. Ran successfully for months.

CHANGE
  A new programmer re-posted the programme using climb
  milling throughout, to improve surface finish and
  extend insert life. Both goals were achieved.

FAILURE
  Intermittent scrap appeared — parts displaced
  0.3-0.8 mm in the feed direction, roughly one part
  in twenty.

DIAGNOSIS
  The original CONVENTIONAL programme produced a side
  force AGAINST the feed direction, which pushed the
  part against an incidental step in the fixture that
  was acting as an unintended stop.

  The CLIMB programme reversed the side force
  direction. Now the part was pushed AWAY from that
  step, into open space, restrained only by friction.

THE LESSON
  1. The fixture had been working BY ACCIDENT. An
     unintended feature was carrying a load nobody
     had analysed. (L0.3.3: ANY STOP TOUCHING THE
     PART IS A LOCATOR — including the ones you did
     not design.)
  2. The change that broke it was INVISIBLE from the
     fixture drawing.
  3. A fixture with positive stops in BOTH directions
     would have been indifferent to the change.

CORRECTIVE
  Fit a positive stop on each side of the feed axis.
PREVENTIVE
  State the assumed cutting strategy on the fixture
  drawing, and design so that a reversal is tolerable.
```

### 10. Design rules
- **R1** — **Resolve the cutting force into components** before sizing anything; never use a single
  scalar `[PRACTICE]`.
- **R2** — **Assume climb milling** as the default on CNC, but **design so conventional milling would not
  lift the part** `[PRACTICE]`.
- **R3** — Fit a **positive stop along the feed direction**. Friction is not a locating strategy
  (L0.3.3).
- **R4** — Where the cutting strategy may change, fit **stops in both directions** along the feed axis.
- **R5** — Check the **moment about the vertical axis**, not just the linear force; it is resisted only by
  the locator spread.
- **R6** — **Spread the two plan-locating stops as far apart as the part allows** — moment capacity is
  proportional to the spread.
- **R7** — Ask whether any operation uses a **left-hand-helix cutter**; if so, design for an upward load.
- **R8** — **State the assumed cutting strategy and force direction on the fixture drawing**, so a
  process change triggers a review.
- **R9** — For face milling, prefer the cutter **offset and climb-dominant** rather than perfectly
  centred `[PRACTICE]`.
- **R10** — Size clamps against the **worst instantaneous force**, not the average.

### 11. Rules of thumb
- **Climb pushes down; conventional lifts.**
- **If you do not know the strategy, assume the lifting case.**
- Radial force ≈ **0.3–0.6 ×** tangential; axial ≈ **0.2–0.4 ×** `[GUIDE]`.
- A **right-hand cut / right-hand helix** end mill pulls chips up and pushes the part **down**.
- A **left-hand helix** pushes the part **up** — a lifting hazard.
- **Face mill diameter ≈ 1.3–1.6 × the width of cut**, offset climb-dominant `[PRACTICE]`.
- A perfectly **centred face mill cancels side forces but pulsates**.
- **The moment about the vertical axis frequently governs**, not the linear force.
- **Moment capacity is proportional to locator spread** — spread them.
- **Average forces do not lift parts; peaks do.**

### 12. Formulae

**Tangential cutting force per tooth (from L0.4)**
```
F_t = k_c · a_p · f_z
```

**Number of teeth in cut**
```
z_c = z · (θ_engagement / 360°)
where cos(θ/2) = 1 − 2·a_e/D
```

**Total tangential force (simultaneously engaged teeth)**
```
F_t,total = F_t · z_c
```

**Component resolution**
```
F_r = k_r · F_t        k_r = 0.30 – 0.60   [GUIDE]
F_a = k_a · F_t        k_a = 0.20 – 0.40   [GUIDE]
```

**Resultant force in the horizontal plane**
```
F_H = √(F_t,total² + F_r,total²)
direction φ = arctan(F_r,total / F_t,total)
```

**Moment about the vertical axis through the locator pair**
```
M_z = F_H · d
where d = perpendicular distance from the line of action
          to the locator pair's resisting axis
```

**Reaction at each of two plan stops resisting that moment**
```
R = M_z / s
where s = spread between the two stops
```
**→ Doubling the spread halves the reaction at each stop.**

**Material removal rate (for context)**
```
Q = a_p · a_e · v_f / 1000     [cm³/min, with mm and mm/min]
v_f = f_z · z · N
```

| Variable | Meaning | Unit |
|---|---|---|
| k_c | Specific cutting force | N/mm² |
| a_p | Axial depth of cut | mm |
| a_e | Radial width of cut | mm |
| f_z | Feed per tooth | mm/tooth |
| z | Total number of teeth | — |
| z_c | Teeth simultaneously in cut | — |
| D | Cutter diameter | mm |
| N | Spindle speed | rev/min |
| v_f | Table feed rate | mm/min |
| s | Spread between plan stops | mm |

### 13. Worked numerical example

**Problem:** A steel bracket is face milled on a VMC. Determine the cutting force components, the
resultant horizontal force and its direction, the moment about the vertical axis, the reaction at each
plan stop, and compare the climb and conventional cases to establish which governs the fixture design.

```
GIVEN:
  CUTTING CONDITIONS                             [PROJ]
    Material            EN8 steel
    Specific cutting
      force k_c         = 1,950 N/mm²   [GUIDE, from
                          the L0.4 table, EN8 range
                          1800-2100]
    Cutter diameter D   = 100 mm
    Number of teeth z   = 6
    Axial depth a_p     = 3.0 mm
    Radial width a_e    = 65 mm
    Feed per tooth f_z  = 0.18 mm/tooth
    Spindle speed N     = 480 rev/min

  FORCE RATIOS                                   [GUIDE]
    Radial   k_r        = 0.45  (mid-range 0.30-0.60)
    Axial    k_a        = 0.30  (mid-range 0.20-0.40)

  FIXTURE GEOMETRY                               [PROJ]
    Two plan-locating stops, spread s = 180 mm
    Perpendicular distance from the resultant's
      line of action to the resisting axis,
      d                 = 95 mm
    Part mass           = 4.2 kg
    Coefficient of friction, steel on steel,
      with coolant      = 0.10   [GUIDE — coolant
                          halves the dry 0.15-0.25]
    Number of clamps    = 2
    Safety factor       = 2.5    [PRACTICE]

REQUIRED:
  (a) Teeth simultaneously in cut
  (b) Tangential, radial and axial force totals
  (c) Resultant horizontal force and its direction
  (d) Vertical force, climb and conventional cases
  (e) Moment about the vertical axis and the reaction
      at each stop
  (f) Clamp force required if friction alone resisted
      the horizontal force — both cases
  (g) Clamp force required with a positive stop fitted
  (h) Effect of doubling the stop spread
  (i) Engineering conclusion

ASSUMPTION:
  1. k_c = 1,950 N/mm² is a GUIDELINE mid-range value
     for EN8. Real k_c varies with chip thickness,
     tool geometry and tool condition, and rises
     sharply at small chip thickness. MUST BE
     CONFIRMED against tooling manufacturer data for
     a tight design. [GUIDE]
  2. Force ratios k_r = 0.45 and k_a = 0.30 are
     mid-range guideline values. A dull tool raises
     both substantially. [GUIDE]
  3. All engaged teeth are assumed to carry the full
     force simultaneously. This is CONSERVATIVE —
     in reality chip thickness varies through the arc
     so teeth carry different loads at any instant.
     Conservative is correct for fixture design.
     [PRACTICE]
  4. The axial force acts DOWNWARD in climb milling
     and is taken as acting UPWARD in the conventional
     case. This is the simplification that captures
     the design-relevant behaviour; the true
     conventional case is a smaller upward component
     plus rubbing. Treating it as fully reversed is
     CONSERVATIVE. [PRACTICE]
  5. Coolant present, so μ = 0.10. [GUIDE]
  6. Static analysis; no dynamic amplification factor
     applied. Entry shock is addressed in L1.3.2.

FORMULA:
  (a) cos(θ/2) = 1 − 2a_e/D ; z_c = z·θ/360
  (b) F_t = k_c · a_p · f_z ; ×z_c
  (c) F_H = √(F_t² + F_r²)
  (e) M_z = F_H · d ; R = M_z / s
  (f) F_clamp ≥ (F_H · SF) / (μ · n)
  (g) F_clamp ≥ (F_lift · SF) / n

UNIT CONVERSION:
  All forces in N, lengths in mm, moments in N·mm.
  Part weight W = 4.2 × 9.81 = 41.2 N

SUBSTITUTION AND CALCULATION:

  (a) TEETH SIMULTANEOUSLY IN CUT

      a_e/D = 65/100 = 0.65 > 0.5, so the cutter is
      engaged beyond its centreline:

        cos(θ/2) = 1 − 2a_e/D
                 = 1 − 2(65)/100
                 = 1 − 1.30
                 = −0.30

        θ/2 = arccos(−0.30) = 107.457°
        θ   = 214.914°

      z_c = z · θ/360
          = 6 × 214.914/360
          = 6 × 0.59698
          = 3.582 teeth

      → 3.582 teeth engaged on average.
        (Physically 3 or 4 at any instant.)

  (b) FORCE COMPONENTS

      Per tooth:
        F_t = k_c · a_p · f_z
            = 1,950 × 3.0 × 0.18
            = 1,053.0 N

      Total tangential:
        F_t,total = 1,053.0 × 3.582
                  = 3,771.8 N

      Total radial:
        F_r,total = 0.45 × 3,771.8
                  = 1,697.3 N

      Total axial:
        F_a,total = 0.30 × 3,771.8
                  = 1,131.5 N

  (c) RESULTANT HORIZONTAL FORCE

        F_H = √(3,771.8² + 1,697.3²)
            = √(14,226,476 + 2,880,827)
            = √17,107,303
            = 4,136.1 N

      Direction relative to the tangential component:
        φ = arctan(1,697.3 / 3,771.8)
          = arctan(0.45)
          = 24.228°

      → 4,136.1 N acting at 24.23° from the
        tangential direction.

  (d) VERTICAL FORCE — THE TWO CASES

      CLIMB MILLING:
        F_a acts DOWNWARD  = 1,131.5 N down
        Plus part weight   =    41.2 N down
        NET DOWNWARD       = 1,172.7 N
        ✓ The part is pressed onto its locators.
          NO LIFTING PROBLEM.

      CONVENTIONAL MILLING:
        F_a acts UPWARD    = 1,131.5 N up
        Less part weight   =    41.2 N down
        NET UPWARD         = 1,090.3 N

        ✗ THE PART IS BEING LIFTED WITH 1,090.3 N.
          The 41.2 N weight is NEGLIGIBLE against it
          — only 3.6 % of the axial force.

  (e) MOMENT AND STOP REACTIONS

        M_z = F_H · d
            = 4,136.1 × 95
            = 392,930 N·mm

        R = M_z / s
          = 392,930 / 180
          = 2,182.9 N at each stop

      → Each plan stop carries 2,182.9 N.

  (f) CLAMP FORCE IF FRICTION ALONE RESISTED F_H

      CLIMB CASE — the axial force ADDS to the normal
      load, so it helps:

        Required friction force = F_H · SF
                                = 4,136.1 × 2.5
                                = 10,340.3 N

        Normal force available from clamps and the
        downward axial force:
          N_total = n·F_clamp + F_a + W
                  = 2·F_clamp + 1,131.5 + 41.2

        Require  μ · N_total ≥ 10,340.3
          0.10 (2F_clamp + 1,172.7) ≥ 10,340.3
          2F_clamp + 1,172.7 ≥ 103,403
          2F_clamp ≥ 102,230.3
          F_clamp ≥ 51,115.2 N per clamp

      CONVENTIONAL CASE — the axial force SUBTRACTS
      from the normal load:

          N_total = 2F_clamp − 1,131.5 + 41.2
                  = 2F_clamp − 1,090.3

        Require  0.10 (2F_clamp − 1,090.3) ≥ 10,340.3
          2F_clamp − 1,090.3 ≥ 103,403
          2F_clamp ≥ 104,493.3
          F_clamp ≥ 52,246.7 N per clamp

      ┌────────────────────────────────────────────┐
      │ BOTH ARE ABSURD. Over 51 kN per clamp is   │
      │ far beyond any manual clamp and would      │
      │ crush the part. FRICTION IS NOT A VIABLE   │
      │ STRATEGY HERE — exactly as L0.3.3 and      │
      │ L1.1.2 concluded.                          │
      └────────────────────────────────────────────┘

  (g) CLAMP FORCE WITH A POSITIVE STOP FITTED

      With stops taking the horizontal force and the
      moment, the clamp's only job is to prevent
      LIFTING and maintain seating.

      CLIMB CASE:
        Net force is DOWNWARD. The clamp resists
        nothing; it only maintains contact against
        vibration.
        → Nominal clamping only. [PRACTICE] A
          practical minimum is often taken as enough
          to seat the part reliably — say 2,000 N
          total — rather than being force-driven.

      CONVENTIONAL CASE — THE GOVERNING CASE:
        F_clamp ≥ (F_lift · SF) / n
                = (1,090.3 × 2.5) / 2
                = 2,725.75 / 2
                = 1,362.9 N per clamp

      → 1,362.9 N per clamp. ENTIRELY PRACTICAL.

      IMPROVEMENT FACTOR vs friction:
        52,246.7 / 1,362.9 = 38.3 ×

  (h) EFFECT OF DOUBLING THE STOP SPREAD

      s = 360 mm instead of 180 mm:

        R = 392,930 / 360
          = 1,091.5 N at each stop

      Reduction = 2,182.9 − 1,091.5 = 1,091.4 N
      Ratio     = 2,182.9 / 1,091.5 = 2.00 ×

      → EXACTLY HALVED, as the formula requires.
        Spreading the stops is FREE load reduction.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Teeth in cut             │ 3.582             │
  │ (b) Tangential total         │ 3,771.8 N         │
  │     Radial total             │ 1,697.3 N         │
  │     Axial total              │ 1,131.5 N         │
  │ (c) Resultant horizontal     │ 4,136.1 N @ 24.23°│
  │ (d) Climb: net vertical      │ 1,172.7 N DOWN ✓  │
  │     Conventional: net        │ 1,090.3 N UP   ✗  │
  │ (e) Moment about vertical    │ 392,930 N·mm      │
  │     Reaction per stop        │ 2,182.9 N         │
  │ (f) Clamp on friction, climb │ 51,115 N ✗ absurd │
  │     Clamp on friction, conv. │ 52,247 N ✗ absurd │
  │ (g) Clamp with stops, conv.  │ 1,362.9 N ✓       │
  │     Improvement factor       │ 38.3 ×            │
  │ (h) Stop reaction, 2× spread │ 1,091.5 N (÷2.00) │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  SF = 2.5 applied to the cutting force in sizing the
  clamp, consistent with the 2-3 range for fixtures
  [PRACTICE]. Note it is applied to the FORCE, not to
  the material strength — the stops must additionally
  be checked for strength and the part for local
  crushing, which is a separate calculation.

PASS/FAIL:
  ✗ FAIL — friction-only strategy, both cases,
    requiring over 51 kN per clamp.
  ✓ PASS — positive stops plus 1,362.9 N clamps in the
    governing conventional case.
  ✓ The conventional case governs and must be the
    design basis unless the strategy is locked down.

ENGINEERING CONCLUSION:
  1. THE CONVENTIONAL CASE GOVERNS, AND IT IS THE
     CASE NOBODY CHECKS.
     In climb milling the axial force presses the part
     down with 1,131.5 N and the clamp has almost
     nothing to do. In conventional milling the same
     magnitude acts UPWARD, and since the part weighs
     only 41.2 N — 3.6 % of the axial force — the
     weight is irrelevant. The part is lifted with
     1,090.3 N net.
     A DESIGNER WHO ASSUMES CLIMB MILLING AND SIZES
     THE CLAMPS FOR SEATING ONLY WILL PRODUCE A
     FIXTURE THAT FAILS THE DAY THE STRATEGY CHANGES —
     and the change will be made for good reasons, by
     someone who has never seen the fixture drawing.
     THE DESIGN BASIS MUST BE THE LIFTING CASE.

  2. THE PART WEIGHT IS NEGLIGIBLE AND THIS IS THE
     GENERAL SITUATION.
     41.2 N against 1,131.5 N of axial force. It is
     tempting to reason about whether a part will
     "stay put" using its weight; at these force
     levels weight simply does not enter the argument.
     THIS IS WHY GRAVITY IS A SEATING AID AND NEVER A
     RESTRAINT (L1.1.2, L1.1.4).

  3. FRICTION FAILS BY A FACTOR OF 38, WHICH IS THE
     SAME ANSWER LEVEL 0 GAVE.
     51 kN per clamp is not a marginal shortfall to be
     closed with a bigger clamp — it is an absurdity
     that says the strategy is wrong. Fitting positive
     stops reduces the requirement to 1,362.9 N, which
     any standard toggle or hydraulic clamp delivers
     comfortably.
     THE COEFFICIENT OF FRICTION IS DOING THE DAMAGE:
     at μ = 0.10 with coolant, ten units of clamp
     force buy one unit of restraint. Coolant halving
     μ is not a detail — it doubles an already
     hopeless requirement.

  4. THE MOMENT IS THE TERM PEOPLE FORGET, AND
     SPREADING THE STOPS IS FREE.
     392,930 N·mm produces 2,182.9 N at each stop —
     comparable to the clamp forces and quite capable
     of shearing an undersized dowel. Doubling the
     spread from 180 to 360 mm exactly halves it, at
     no cost in material, machining or complexity.
     WHEREVER THE PART PERMITS, SPREAD THE PLAN
     LOCATORS TO THE EXTREMES. It is the cheapest
     load reduction available in fixture design, and
     it also improves angular repeatability for the
     same geometric reason (L1.2.4: e = D·δ/L).

  5. WHAT I WOULD PUT ON THE DRAWING.
     A note stating the assumed cutting strategy, the
     assumed force direction, and the requirement that
     a change of strategy triggers a fixture review.
     The fixture should carry stops on BOTH sides of
     the feed axis so that the review's likely answer
     is "no change needed" — which is the outcome
     worth engineering for.

SENSITIVITY NOTE:
  Ranked by influence:
    1. PRESENCE OF A POSITIVE STOP — a factor of 38
       on clamp force. Not a variable to optimise;
       a decision to get right. Everything else is
       second order beside it.
    2. CUTTING STRATEGY (climb vs conventional) — a
       SIGN CHANGE on 1,131.5 N, which flips the
       clamp from doing nothing to being the only
       thing holding the part down. The largest
       qualitative sensitivity in the analysis.
    3. AXIAL FORCE RATIO k_a — assumed 0.30 from a
       0.20-0.40 range. At k_a = 0.40 the lifting
       force rises to 1,467.5 N, a 34.6 % increase in
       required clamp force. WORTH CONFIRMING against
       tooling data.
    4. COEFFICIENT OF FRICTION — decisive if friction
       were the strategy, irrelevant once stops are
       fitted. Another reason stops are preferable:
       THEY REMOVE THE MOST UNCERTAIN VARIABLE FROM
       THE CALCULATION.
    5. STOP SPREAD — linear and free. Doubling halves
       the reaction.
```

### 14. Engineering assumptions
- k_c = 1,950 N/mm² is a guideline mid-range value for EN8 `[GUIDE]`; k_c rises sharply at small chip
  thickness and must be confirmed against tooling data where the margin is tight.
- Force ratios k_r = 0.45, k_a = 0.30 are mid-range guidelines `[GUIDE]`; a dull tool raises both.
- All engaged teeth assumed to carry full force simultaneously — conservative and correct for fixture
  design `[PRACTICE]`.
- The conventional case is modelled as a fully reversed axial force; the true case is a smaller upward
  component plus rubbing, so this is conservative `[PRACTICE]`.
- Coolant present, μ = 0.10 `[GUIDE]`.
- Static analysis; entry shock is treated in L1.3.2.

### 15. Diagram

```
     FACE AND END MILLING FORCE DIRECTIONS
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE TWO STRATEGIES

   CONVENTIONAL (UP-CUT)        CLIMB (DOWN-CUT)
     cutter ↻                     cutter ↺
        ___                          ___
      /     \                      /     \
     |   ●   |                    |   ●   |
      \ ___ /                      \ ___ /
   ▓▓▓▓▓▓▓▓▓▓▓▓▓                ▓▓▓▓▓▓▓▓▓▓▓▓▓
   ──────► feed                 ──────► feed

   chip 0 → MAX                 chip MAX → 0
   rubs at entry                bites at entry
   ✗ work hardening             ✓ no rubbing
   ✗ TENDS TO LIFT              ✓ PUSHES DOWN
   ✓ tolerates backlash         ✗ entry SHOCK
                                ✗ needs zero backlash

   ┌──────────────────────────────────────────────┐
   │ MODERN CNC HAS PRELOADED BALLSCREWS, SO      │
   │ CLIMB IS THE DEFAULT. ASSUME IT — BUT DESIGN │
   │ SO CONVENTIONAL WOULD NOT LIFT THE PART.     │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE WORKED EXAMPLE — SAME CUT, TWO OUTCOMES

   CLIMB                        CONVENTIONAL
        │ F_a 1,131.5 N              ▲ F_a 1,131.5 N
        ▼ DOWN                       │ UP
     ▓▓▓▓▓▓▓▓▓                    ▓▓▓▓▓▓▓▓▓
     ═════════ locators           ═════════
        │ W 41.2 N                   │ W 41.2 N
        ▼                            ▼

     NET 1,172.7 N DOWN           NET 1,090.3 N UP
     ✓ seats the part             ✗ LIFTS THE PART

   ┌──────────────────────────────────────────────┐
   │ THE PART WEIGHS 41.2 N. THE AXIAL FORCE IS   │
   │ 1,131.5 N — 27 TIMES GREATER.                │
   │                                              │
   │ WEIGHT NEVER ENTERS THE ARGUMENT AT THESE    │
   │ FORCE LEVELS. GRAVITY IS A SEATING AID,      │
   │ NEVER A RESTRAINT.                           │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  FACE MILL POSITION CHANGES THE FORCE DIRECTION

   A CENTRED          B CLIMB-DOM.      C CONV.-DOM.
   ┌────●────┐        ┌─●───────┐       ┌───────●─┐
   ▓▓▓▓▓▓▓▓▓▓▓        ▓▓▓▓▓▓▓▓▓▓▓       ▓▓▓▓▓▓▓▓▓▓▓
   ──► feed           ──► feed          ──► feed

   side forces        force DOWN        force UP
   CANCEL but         and along         ✗ WORST CASE
   PULSATE            ✓ PREFERRED

   [PRACTICE] D ≈ 1.3-1.6 × width of cut, offset
   climb-dominant.

  ──────────────────────────────────────────────────────────

  THE HELIX DECIDES THE VERTICAL DIRECTION

   RH CUT / RH HELIX          RH CUT / LH HELIX
      chips ▲ up                 chips │ down
        ╱│╲                        ╲│╱   ▼
       ╱ │ ╲                        │
   reaction ▼ DOWN            reaction ▲ UP
   ✓ seats the part           ✗ LIFTING HAZARD
   ✓ clears a slot            ✓ but holds thin sheet
                                down on a backing plate

  ──────────────────────────────────────────────────────────

  THE MOMENT — THE TERM PEOPLE FORGET

     F_H = 4,136.1 N
        ──────────►
              │ d = 95 mm
              ▼
     ●───────────────────────● two plan stops
     │◄───── s = 180 mm ─────►│

     M_z = 4,136.1 × 95 = 392,930 N·mm
     R   = 392,930 / 180 = 2,182.9 N per stop

     DOUBLE THE SPREAD → s = 360 mm
     R   = 1,091.5 N  ── EXACTLY HALVED

   ┌──────────────────────────────────────────────┐
   │ SPREADING THE PLAN LOCATORS IS THE CHEAPEST  │
   │ LOAD REDUCTION IN FIXTURE DESIGN. IT COSTS   │
   │ NOTHING AND IT ALSO IMPROVES ANGULAR         │
   │ REPEATABILITY — THE SAME 1/L GEOMETRY AS     │
   │ L1.2.4's ALIGNMENT FEATURE.                  │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  FRICTION vs POSITIVE STOP — THE 38× ANSWER

   FRICTION ONLY (μ=0.10, coolant)
     ████████████████████████████████ 52,247 N/clamp
     ✗ ABSURD — crushes the part

   POSITIVE STOP FITTED
     █ 1,362.9 N/clamp
     ✓ any standard clamp

   FACTOR 38.3 ×

   ┌──────────────────────────────────────────────┐
   │ A STOP ALSO REMOVES μ — THE MOST UNCERTAIN   │
   │ VARIABLE IN THE WHOLE CALCULATION —          │
   │ FROM THE ANSWER ENTIRELY.                    │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-5210 — MILLING LOAD CASE NOTES
STANDARD: ASME Y14.5-2018
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: THIS FIXTURE IS DESIGNED FOR THE FOLLOWING
        LOAD CASE —
          RESULTANT HORIZONTAL FORCE 4,136 N
          MAXIMUM LIFTING FORCE      1,090 N
          MOMENT ABOUT VERTICAL AXIS 393 N·m
        CUTTING STRATEGY ASSUMED: EITHER CLIMB OR
        CONVENTIONAL. STOPS ARE FITTED BOTH SIDES OF
        THE FEED AXIS SO THAT A CHANGE OF STRATEGY
        DOES NOT INVALIDATE THE FIXTURE.

NOTE 2: IF THE CUTTING PARAMETERS EXCEED THOSE IN
        NOTE 1, OR IF A LEFT-HAND-HELIX CUTTER IS
        INTRODUCED, THE FIXTURE MUST BE RE-ASSESSED
        BEFORE USE.

NOTE 3: PLAN LOCATING STOPS ITEMS 8 AND 9 ARE SPREAD
        360 mm APART. THIS SPREAD IS A FUNCTIONAL
        REQUIREMENT — EACH STOP CARRIES 1,092 N AT
        THIS SPACING AND 2,183 N IF HALVED. DO NOT
        RELOCATE.

NOTE 4: MINIMUM CLAMP FORCE 1,400 N PER CLAMP.
```

Note 3 is the one worth copying. **Stating why a dimension is what it is, with the number**, is what
stops it being changed by someone optimising for something else.

### 17. CAD workflow
1. Model the part in its located position with the **locators and stops**
2. Add a **force vector** at the cutting location representing the resultant horizontal force, at the
   calculated angle
3. Add the **vertical component in both directions** — two load cases, climb and conventional
4. Use the assembly's **measure tool** to obtain the perpendicular distance d from the resultant's line
   of action to the locator pair
5. Verify the **stop spread** and record it as a driven dimension on the drawing
6. Where FEA is available, run the **conventional (lifting) case** — it governs
7. Model the **cutter swept envelope** and check clearance to the stops (L1.2.3 R5)

`[PRACTICE]` Step 3 is the discipline that matters. Two load cases, not one. If the CAD or FEA model
contains only the climb case, the governing condition has been excluded from the analysis before it
began.

### 18. GD&T application
The stops carry the horizontal force and the moment, so their **position relative to the primary
locators** controls the part's plan orientation. Full treatment at L21; the preview:

```
STANDARD: ASME Y14.5-2018

  Primary locating pads → Datum A (the seating plane)
  Plan stop faces       → Datum B (direction)
  Second stop           → Datum C

  Stop faces controlled to:

  ┌──────────────────────────────┐
  │ ⌓ │ 0.02 │ A │ B │           │
  └──────────────────────────────┘

  WHY PROFILE RATHER THAN POSITION: the stop is a
  FACE that the part contacts, so both its location
  AND its orientation matter. A stop at the right
  position but tilted contacts on an edge rather
  than a face, which concentrates the 2,183 N onto
  a line and marks the part.
```

### 19. Manufacturing method
Stops carrying 1,000–2,000 N against a machined part face are wear items and locating features
simultaneously, so they follow the hardened-locator route from L0.5.3:
1. Machine soft with grinding stock
2. Harden to 58–62 HRC (EN31) — a soft stop deforms and the part position drifts
3. Fit to the fixture, dowelled and screwed so they are replaceable
4. **Grind the working faces in position**, referenced to the fixture datums
5. Inspect position and orientation to the locators on a CMM

`[PRACTICE]` The dowel pins carrying the shear load must be sized for it — 2,183 N across two dowels is
modest, but it is a real calculation and not an assumption. Dowel shear capacity is covered at L5.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Stop face position to locators | CMM | ±0.02 mm |
| Stop face orientation | CMM / profile | 0.02 mm profile |
| Stop spread | CMM | As drawing, recorded |
| Stop hardness | Portable tester | 58–62 HRC |
| Clamp force delivered | Load cell or calibrated torque | ≥1,400 N per clamp |
| Part movement under load | Indicate the part while applying a static side load | ≤0.01 mm |

`[PRACTICE]` The last check — applying a static side load and indicating the part — is the direct
verification of the whole analysis, and it takes ten minutes. If the part moves 0.05 mm under a
hand-applied load, it will move under 4 kN of cutting force.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Treating the milling force as **one number in one direction** | The governing component is missed |
| 2 | Assuming **climb milling** and sizing clamps for seating only | Fixture fails when the strategy changes |
| 3 | Ignoring the **moment about the vertical axis** | Stops or dowels overloaded and sheared |
| 4 | Using the **part weight** as a restraint | Weight was 3.6% of the axial force |
| 5 | Relying on **friction** for the side load | 38× shortfall |
| 6 | Forgetting that **coolant halves μ** | The friction case is twice as bad as calculated |
| 7 | Placing plan stops **close together** | Reaction doubles for each halving of the spread |
| 8 | Not asking about **left-hand-helix** cutters | Unanticipated lifting load |
| 9 | Not stating the **assumed strategy** on the drawing | A process change silently invalidates the design |
| 10 | Using the **average** force rather than the peak | Under-sized for the worst instant |
| 11 | Perfectly **centring a face mill** and accepting the pulsation | Vibration, poorer finish, fatigue on the stops |
| 12 | Assuming an **unintended step** is not carrying load | It is a locator; L0.3.3 |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Part shifts in the feed direction | No positive stop; friction insufficient | Apply a static side load and indicate | Fit a stop | Design rule R3 |
| Shift appeared after a programme change | Strategy changed climb↔conventional | Compare the old and new programmes | Fit stops both sides | State the strategy on the drawing |
| Part lifts off the locators | Conventional milling, or a left-hand-helix cutter | Check the strategy and cutter hand | Increase clamp force; change cutter | Design for the lifting case |
| Part rotates in plan | Moment exceeds the stop capacity | Calculate M_z; inspect the stops | Spread the stops further | Design rule R6 |
| Dowels sheared at a stop | Moment reaction under-estimated | Calculate R = M_z/s | Larger dowels; wider spread | Size dowels for the moment |
| Chatter and poor finish | Centred face mill pulsation, or insufficient stiffness | Vary the cutter offset | Offset climb-dominant | Design rule R9 |
| Part marked at the stop face | Stop tilted, contacting on an edge | Check the profile of the stop face | Regrind in position | Profile tolerance on stop faces |
| Force higher than calculated | Dull tool; k_c and ratios rise | Check the tool condition | Replace the tool | Tool-life monitoring |

### 23. Design checklist
- [ ] Has the cutting force been **resolved into tangential, radial and axial** components?
- [ ] Has the **conventional (lifting) case** been analysed, not just climb?
- [ ] Are there **positive stops in the feed direction** — and on both sides if the strategy may change?
- [ ] Has the **moment about the vertical axis** been calculated?
- [ ] Are the plan stops **spread as far apart as the part allows**?
- [ ] Have the **stop reactions** been used to size the dowels and fasteners?
- [ ] Is the **cutter's helix hand** known, and any lifting tendency accounted for?
- [ ] Is the **assumed cutting strategy stated on the drawing**, with a re-assessment trigger?
- [ ] Are the stops **hardened and ground in position**?
- [ ] Has clearance between the **cutter swept envelope and the stops** been checked?
- [ ] Has the **peak** force been used rather than the average?

### 24. Beginner exercise
**E1.3.1-B** — A face milling operation on mild steel uses k_c = 1,650 N/mm², a_p = 2.5 mm, f_z =
0.15 mm/tooth, with 3.2 teeth engaged. Take k_r = 0.40 and k_a = 0.25.
(a) Calculate the tangential force per tooth and the total tangential force.
(b) Calculate the total radial and axial forces.
(c) Calculate the resultant horizontal force.
(d) The part weighs 3.0 kg. State the net vertical force in the climb case and in the conventional case,
and say which is dangerous and why.
(e) State in one sentence why climb milling pushes the part down.

### 25. Intermediate exercise
**E1.3.1-I** — An EN8 component is face milled with D = 80 mm, z = 5, a_e = 50 mm, a_p = 4.0 mm, f_z =
0.20 mm/tooth, k_c = 2,000 N/mm², k_r = 0.50, k_a = 0.35. The part weighs 6.5 kg. Two plan stops are
spread 150 mm apart, and the resultant's line of action is 110 mm from the resisting axis. Friction
coefficient with coolant is 0.10, two clamps, safety factor 2.5.
(a) Calculate the engagement angle and the number of teeth in cut.
(b) Calculate all three force components and the resultant horizontal force with its direction.
(c) Calculate the net vertical force in both strategies.
(d) Calculate the moment about the vertical axis and the reaction at each stop.
(e) Calculate the clamp force required if friction alone resisted the horizontal force, in the governing
strategy.
(f) Calculate the clamp force required with positive stops fitted, and state the improvement factor.
(g) The stops are relocated to a 250 mm spread. Calculate the new reaction and the percentage reduction.
(h) State which strategy governs the design and justify it in two sentences.

### 26. Advanced exercise
**E1.3.1-A** — A cast iron housing (k_c = 1,150 N/mm², mass 22 kg) is machined in one setup with three
milling operations: OP1 face mill the top, D = 125 mm, z = 8, a_e = 100 mm, a_p = 3.0 mm, f_z = 0.22,
feed along +X; OP2 end mill a boss profile, D = 25 mm, z = 4, a_e = 25 mm (full width), a_p = 12 mm,
f_z = 0.08, contouring in both X and Y; OP3 face mill a side pad, D = 63 mm, z = 5, a_e = 40 mm, a_p =
2.0 mm, f_z = 0.18, feed along −Y with the cutter axis vertical so the force acts horizontally. Take
k_r = 0.45, k_a = 0.30. The part sits on three pads, is located by two pins 200 mm apart, and has two
clamps. Coolant is used (μ = 0.10) and the safety factor is 2.5.
(i) For each operation, calculate the force components, the resultant horizontal force and the net
vertical force in both cutting strategies.
(ii) Tabulate operation → force magnitude class → direction → DOF threatened, for all three operations
in both strategies (six rows).
(iii) Identify the governing operation and strategy for (a) lifting, (b) horizontal sliding, (c) moment
about the vertical axis.
(iv) Calculate the required clamp force for the governing lifting case.
(v) Calculate the required stop reactions for the governing moment case, and determine the minimum stop
spread that keeps each reaction below 3,000 N.
(vi) OP2 contours in both X and Y, so the side force rotates through 360°. Explain what this means for
the stop arrangement and state the minimum number of stops required.
(vii) A proposal is made to run all three operations in climb mode to improve finish. State what changes
in your analysis, whether the fixture is still adequate, and what you would write on the drawing.
(viii) Explain why the end mill in OP2, despite its much smaller force, may be more demanding on the
fixture than the face mill in OP1.
(ix) Produce the final load specification you would put in Note 1 of the fixture drawing.

### 27. Interview questions
1. *"What is the difference between climb and conventional milling, and why does a fixture designer
   care?"*
   **Answer:** It is about the direction the cutter's teeth are travelling relative to the feed when
   they are in the cut. In climb milling the rotation agrees with the feed, so each tooth enters at
   maximum chip thickness and thins to zero; in conventional milling it is the reverse — the tooth
   enters at zero thickness, rubs for a moment before it can bite, and exits at maximum. The fixture
   designer cares because the direction of the force on the workpiece is different. Climb milling
   presses the part down onto its locators, which helps. Conventional milling tends to lift it, which
   means the clamps have to resist a real upward force. In the example we worked, the same cut produced
   about 1,130 newtons pressing down in climb and roughly the same magnitude lifting in conventional,
   against a part that only weighed 41 newtons — so the weight was irrelevant and the strategy decided
   everything. The practical problem is that the strategy is chosen in the CAM system and never appears
   on the fixture drawing, so I design for the lifting case and fit stops both sides.
2. *"A milling force is 4,000 N. How much clamp force do you need?"*
   **Answer:** I would not answer that with a number, because the question is missing the information
   that decides it. First, which direction does the 4,000 N act — if it is horizontal, the right answer
   is usually a positive stop rather than clamp force at all, because relying on friction at a
   coefficient of about 0.1 with coolant would need something like fifty kilonewtons of clamping, which
   is absurd and would crush the part. With a stop fitted, the clamp only has to prevent lifting and
   maintain seating, which might be one or two kilonewtons. Second, is there a lifting component, which
   depends on the cutting strategy and the helix hand. Third, what moment does the force produce about
   the vertical axis, because that is resisted by the spread between the locators and it often governs
   the stop and dowel sizing rather than the clamp. So the answer is: resolve it into components, fit
   stops for the horizontal part, and size the clamp for the lifting component with a factor of about
   two and a half.

### 28. Expert questions
1. *"A fixture has run reliably for two years. A new programmer re-posts the programme and parts start
   moving. What happened, and whose fault is it?"*
   **Answer:** The most likely mechanism is a **change of cutting strategy that reversed the direction
   of the side force**, and the honest answer on fault is that it is a **fixture design weakness that
   was concealed by luck**, not a programming error.
   Here is the usual chain. The original programme was conventional milling, which produced a side force
   in one particular direction. The fixture may or may not have had a designed stop in that direction —
   but very often what is actually happening is that the part is being pushed against some incidental
   feature: a step in the base plate, a locator intended for a different purpose, the side of a clamp
   body. That feature was carrying load nobody had analysed, and the fixture worked.
   The new programmer switches to climb milling, for entirely good reasons — better surface finish,
   longer insert life, less work hardening. The side force now points the other way, the part is pushed
   away from whatever was restraining it, and the only thing left is friction at a coefficient of about
   0.1 with coolant. Parts start moving intermittently, because friction is a variable and it only
   fails some of the time.
   The reason I call it a design weakness is the L0.3.3 principle: **any stop touching the part is a
   locator, including the ones you did not design.** If a fixture works because of an unintended
   contact, the design has an undocumented dependency, and undocumented dependencies fail when something
   changes. The programmer had no way of knowing, because the dependency was not on the drawing.
   The diagnosis is straightforward once you suspect it. The error signature is a **consistent
   displacement in one direction**, which by the L1.2.1 reasoning points at position rather than process
   — but unlike an offset error it will be intermittent, because friction is variable. Comparing the old
   and new programmes for the climb/conventional setting takes two minutes and usually settles it.
   The fix has two parts. Immediately, fit a positive stop in the new force direction. Properly, **fit
   stops on both sides of the feed axis** so the fixture is indifferent to the strategy, and put a note
   on the drawing stating the assumed load case and requiring re-assessment if the parameters change.
   That note is what turns an invisible dependency into a visible one.
   What I would resist is the instinct to tell the programmer to change it back. The climb programme is
   better, the fixture should have supported it, and a fixture that constrains the process to one
   strategy for reasons nobody documented is a liability. **Design so that the likely answer to "does
   this change break the fixture?" is no.**
2. *"Why does the moment about the vertical axis matter more than people expect?"*
   **Answer:** Three reasons, and they compound.
   The first is that **it is resisted by a much smaller lever arm than people assume**. The clamp force
   is distributed over the whole fixture and resists lifting directly. The moment, though, is resisted
   only by the spread between the two plan locators, and that spread is often quite small — a couple of
   hundred millimetres on a part that might be four hundred long, because the locators are placed where
   the part geometry allows rather than where the mechanics would prefer. In the worked example, a
   4,136 N force at a 95 mm offset produced 2,183 N at each stop across a 180 mm spread. That is more
   than half the magnitude of the driving force, appearing at a feature that is often a small hardened
   button on two dowels.
   The second is that **it is the term most often left out of the analysis entirely**. People calculate
   the linear force, compare it against friction or a stop's capacity, and stop there. The moment
   requires knowing the perpendicular distance from the line of action to the resisting axis, which
   means thinking about the geometry rather than just the magnitudes, and it is easy to skip. So it is
   simultaneously large and unexamined, which is the worst combination.
   The third is that **its failure mode is not obvious**. A part that slides shows an obvious
   displacement. A part that rotates slightly in plan produces features that are individually in
   tolerance near the pivot and out of tolerance far from it — which looks like a machine accuracy
   problem, or a programme problem, or random variation, and gets investigated in all the wrong places.
   It has the same distance-dependent signature as the orientation error in L1.2.4, and it is diagnosed
   the same way: **if the error grows with distance from a point, you are looking at a rotation, and you
   should be asking what is failing to resist a moment.**
   The encouraging part is that the fix is nearly free. **Reaction is inversely proportional to spread**,
   so moving the two plan locators from 180 mm apart to 360 mm exactly halves the load at each. That
   costs nothing — no extra parts, no extra machining, just placing the same two features further apart
   at design stage. It is the cheapest load reduction available in fixture design, and it improves the
   angular repeatability of the location at the same time, for exactly the same geometric reason. So my
   habit is to place plan locators at the extremes of the part as a matter of course, and only move them
   inboard when something specific forces it.

### 29. Summary
Milling forces resolve into a tangential component that determines spindle power, a radial component
typically 0.30–0.60 of it, and an axial component typically 0.20–0.40, and the fixture sees the reaction
rather than the force on the tool. The direction of that reaction is decided by the cutting strategy: in
climb milling each tooth enters at maximum chip thickness and the cutting action presses the part down
onto its locators, while in conventional milling the tooth enters at zero thickness, rubs before it
bites, and tends to lift the part. Modern CNC machines have preloaded ballscrews with no backlash, so
climb is the default and a designer should assume it — but must design so that conventional milling would
not lift the part, because the strategy is chosen in CAM and never appears on the fixture drawing. In the
worked example the same cut produced 1,172.7 N pressing down in climb and 1,090.3 N lifting in
conventional against a part weighing only 41.2 N, so the part weight was irrelevant and the strategy
decided the entire load case. Face mill position matters too: a centred cutter cancels side forces but
pulsates, while an offset climb-dominant position gives a steady downward force. End mills produce a
predominantly horizontal force which friction cannot resist — 52 kN per clamp against 1,363 N with a
positive stop, a factor of 38 — and the helix hand decides whether the axial component seats or lifts the
part, with a left-hand helix being a recognised lifting hazard. Finally, the horizontal force produces a
moment about the vertical axis resisted only by the spread between the plan locators, which in the
example was 393 N·m producing 2,183 N at each stop; that reaction is inversely proportional to the
spread, so doubling the spread exactly halves it at no cost.

### 30. Key takeaways
- **Climb milling pushes the part down; conventional milling tends to lift it.**
- **Assume climb, design for conventional.** The strategy is invisible from the fixture drawing.
- **The part weight is negligible** — 41.2 N against 1,131.5 N of axial force.
- Radial ≈ 0.3–0.6 × tangential; axial ≈ 0.2–0.4 × `[GUIDE]`.
- **A face mill offset climb-dominant** beats a centred one: steady downward force, no pulsation.
- **Right-hand helix seats the part; left-hand helix lifts it** — a recognised hazard.
- **Friction fails by 38×.** Fit a positive stop — it also removes μ, the most uncertain variable, from
  the answer.
- **The moment about the vertical axis frequently governs** and is the term most often omitted.
- **Reaction is inversely proportional to locator spread** — doubling the spread halves the load, free.
- **If the error grows with distance from a point, you are looking at a rotation.**
- **State the assumed load case and strategy on the drawing**, with a re-assessment trigger.
- **Design so that the answer to "does this change break the fixture?" is no.**

---

## LESSON L1.3.2 — SLOT MILLING, POCKET MILLING AND CONTOURING

### 1. Lesson title
**L1.3.2 — Full-width slotting, pocketing and contouring: side loads, entry shock and tool deflection**

### 2. Learning objective
By the end of this lesson you will be able to explain why full-width slotting is a fundamentally
different load case from peripheral milling, calculate the rotating force vector produced by contouring
and determine the stop arrangement it requires, quantify entry shock and apply a dynamic factor,
calculate tool deflection and explain its consequences for the fixture, and specify a fixture that
remains adequate when the force direction sweeps through 360°.

### 3. Prerequisites
L1.3.1 (milling force resolution, climb vs conventional), L0.3.4 (deflection, δ = CFL³/EI),
L1.1.2 (VMC force behaviour).

### 4. Why the topic matters
L1.3.1 dealt with a cut whose force direction, once you knew the strategy, stayed put. **Slotting,
pocketing and contouring break that assumption in three separate ways**, and each one defeats a fixture
that was designed for steady peripheral milling.

```
   1. FULL-WIDTH SLOTTING
      Both sides of the cutter are engaged. The climb
      and conventional sides act SIMULTANEOUSLY.
      → The neat "climb pushes down" rule DOES NOT
        APPLY. You get both at once.

   2. CONTOURING
      The tool follows a profile, so the feed
      direction ROTATES. A force that was pointing
      +X points +Y a moment later, and −X after that.
      → A SINGLE STOP IS USELESS. The part must be
        restrained in every direction in the plane.

   3. ENTRY SHOCK
      A tooth entering at full chip thickness applies
      the load almost instantaneously.
      → THE PEAK EXCEEDS THE STEADY-STATE FORCE, and
        the peak is what moves the part.
```

`[PRACTICE]` There is a fourth reason, less obvious and more insidious: **tool deflection**. A slender
end mill in a deep slot bends, and the fixture designer meets the consequence as a tapered slot, a
mismatched wall, or a part that appears to have moved when it has not. **Distinguishing tool deflection
from part movement is a diagnostic skill**, and it comes up constantly.

### 5. Simple explanation

```
   PERIPHERAL CUT — one side engaged

        ┌───┐
        │ ● │◄── cutter touches ONE side
        └───┘
     ▓▓▓▓▓▓▓▓▓▓▓
     Force pushes ONE way. Predictable.

  ─────────────────────────────────────────────

   FULL-WIDTH SLOT — BOTH sides engaged

     ▓▓▓┌───┐▓▓▓
     ▓▓▓│ ● │▓▓▓  ← cutter touches BOTH sides
     ▓▓▓└───┘▓▓▓

     One side is climb-cutting, the other is
     conventional, AT THE SAME TIME.
     ✗ Side forces partly cancel — but not reliably
     ✗ Chip evacuation is poor: chips have nowhere
       to go
     ✗ The cutter is fully buried — MAXIMUM torque,
       MAXIMUM deflection
     → SLOTTING IS THE MOST DEMANDING MILLING
       OPERATION PER MILLIMETRE OF CUTTER DIAMETER
```

And when the tool follows a contour, the direction of the push keeps changing:

```
   CONTOURING — the force rotates

        ↑        the tool goes round the profile
     ←  ●  →     and the side force points
        ↓        OUTWARD from the path, in every
                 direction in turn

   → A stop on one side does nothing when the force
     points the other way.
   → YOU NEED RESTRAINT IN ALL DIRECTIONS.
```

### 6. Engineering explanation

**FULL-WIDTH SLOTTING — WHY IT IS THE HARD CASE**

```
   THE ENGAGEMENT ARC IS 180°

     a_e = D  (radial engagement equals diameter)

     cos(θ/2) = 1 − 2a_e/D = 1 − 2 = −1
     θ/2 = arccos(−1) = 180°
     θ = 360°... which is the formula breaking down.

   PHYSICALLY the tooth is engaged over 180° of
   rotation — half a revolution — because the slot
   walls are on both sides.

     z_c = z × 180/360 = z/2

   → HALF THE TEETH ARE CUTTING AT ALL TIMES.
     Compare peripheral finishing at a_e = 0.05D,
     where z_c might be 0.4 teeth.
```

Four consequences follow, and they compound:

| Consequence | Mechanism | Fixture significance |
|---|---|---|
| **Maximum torque** | Half the teeth engaged, full depth | Highest spindle load; largest reaction |
| **Side forces partly cancel** | Climb on one wall, conventional on the other | Net side load is *lower* than expected — but unpredictable and unbalanced in practice |
| **Poor chip evacuation** | Chips trapped in the slot, recut | Force spikes; chips packed against locators |
| **Maximum deflection** | Cutter fully buried, no support | Tapered slot; apparent part movement |

> **The side-force cancellation is a trap.** In principle the climb wall and the conventional wall
> produce opposing side forces that cancel. In practice they do not cancel exactly — the two walls see
> different chip thickness histories, the cutter deflects toward one side, and any runout biases the
> engagement. `[PRACTICE]` **Design for a net side load of roughly 20–40% of what a single-wall cut
> would produce, rather than assuming zero.** Assuming perfect cancellation is how parts move.

**CONTOURING — THE ROTATING FORCE VECTOR**

This is the case that determines the *number* of stops.

```
   AS THE TOOL FOLLOWS A CLOSED PROFILE, THE SIDE
   FORCE SWEEPS THROUGH 360°

              F at t₁
                ↑
                │
      F at t₄ ←─●─→ F at t₂
                │
                ↓
              F at t₃

   ONE STOP:    restrained in 1 direction.
                Free in the other 3. ✗

   TWO STOPS at 90°:
                restrained in 2 directions,
                free in the opposite 2. ✗
                (A stop only PUSHES; it cannot PULL.)

   THREE STOPS at 120°:
                every direction in the plane has a
                component against at least one stop. ✓
                THIS IS THE MINIMUM FOR A FULLY
                ROTATING LOAD.

   ┌──────────────────────────────────────────────┐
   │ A STOP RESISTS ONLY IN COMPRESSION.          │
   │                                              │
   │ To restrain a force that can point ANYWHERE  │
   │ in a plane, you need at least THREE stops    │
   │ distributed around the part — or a           │
   │ FORM-CLOSED location such as a pin in a bore │
   │ that resists in every radial direction at    │
   │ once.                                        │
   └──────────────────────────────────────────────┘
```

> **This is the strongest argument for locating on a bore rather than on edges** where the part allows
> it. A pin in a bore is form-closed: it resists radial load in all 360° with one feature. Three edge
> stops achieve the same thing with three features, three tolerances and three wear points. `[PRACTICE]`
> Where a part has a usable bore, contouring operations are a reason to prefer it.

**ENTRY SHOCK AND THE DYNAMIC FACTOR**

```
   STEADY CUT              INTERRUPTED / ENTRY

   force
     │    ────────          │  ╱╲    ╱╲    ╱╲
     │                      │ ╱  ╲  ╱  ╲  ╱  ╲
     │                      │╱    ╲╱    ╲╱    ╲
     └──────────► time      └──────────────────►

   The PEAK exceeds the mean. A fixture sized on the
   mean is under-sized for the event that moves the
   part.
```

`[GUIDE]` Indicative dynamic factors, to be applied to the calculated steady-state force:

| Condition | Dynamic factor | Note |
|---|---|---|
| Continuous peripheral cut, sharp tool | 1.0–1.2 | Essentially steady |
| Climb entry into solid material | 1.3–1.6 | Tooth enters at full chip thickness |
| Interrupted cut (across a slot, a hole, a boss) | 1.5–2.0 | Repeated impact |
| Slotting with poor chip evacuation | 1.5–2.5 | Recutting chips causes spikes |
| Entry into a cast or forged skin | 1.5–2.0 | Hard, irregular surface |

**These are guideline figures for design use and must be confirmed** where the margin is tight. They are
applied *before* the safety factor, not instead of it — the dynamic factor accounts for a known physical
peak, while the safety factor covers uncertainty.

```
   F_design = F_steady × DYNAMIC FACTOR × SAFETY FACTOR
                         ▲                 ▲
                         │                 │
              a known physical    uncertainty in
              peak that WILL      everything else
              occur
```

**TOOL DEFLECTION — AND WHY THE FIXTURE GETS BLAMED**

An end mill is a cantilever. From L0.3.4:

```
   δ = F L³ / (3 E I)          [cantilever, end load]

   For a solid round cutter:
     I = π d⁴ / 64

   Substituting:
     δ = 64 F L³ / (3 E π d⁴)

   ┌──────────────────────────────────────────────┐
   │ δ ∝ L³   — DOUBLE the stick-out, EIGHT times │
   │            the deflection                    │
   │ δ ∝ 1/d⁴ — HALVE the diameter, SIXTEEN times │
   │            the deflection                    │
   └──────────────────────────────────────────────┘
```

`[PRACTICE]` An end mill's effective diameter for stiffness is often taken as **0.8 × the nominal
diameter**, because the flutes remove material from the section. This is a guideline approximation; a
solid-section calculation overestimates stiffness.

**The consequences a fixture designer must recognise:**

```
   WHAT TOOL DEFLECTION LOOKS LIKE

   ✗ TAPERED WALL          ✗ MISMATCH AT A
     ╱│                      DIRECTION CHANGE
    ╱ │                       ────┐
   ╱  │  wall leans               │ step
   │  │  away from the       ─────┘
   │  │  cut                 the tool springs back

   ✗ SLOT NARROWER AT       ✗ CORNER RADIUS
     THE BOTTOM               LARGER THAN THE TOOL

   ALL OF THESE LOOK LIKE THE PART MOVED.
   NONE OF THEM ARE THE FIXTURE.
```

> **The diagnostic discrimination:** tool deflection produces errors that **vary with depth** and
> **vary with cutting direction**, and that are **repeatable part to part**. Part movement produces
> errors that are **uniform through the depth** and **vary randomly between parts**. Measuring a wall at
> two depths separates them in about five minutes.

**THE THIN-WALL PROBLEM — WHEN THE PART DEFLECTS**

A related case, and one that recurs throughout this programme:

```
   THE PART ITSELF IS THE FLEXIBLE ELEMENT

       ┌─┐         cutting force
       │ │◄────────
       │ │  thin wall bends AWAY from the cutter,
       │ │  then springs back after the tool passes
       └─┘

   → Wall is left THICKER than programmed
   → Chatter
   → Poor finish

   THE FIXTURE RESPONSE IS SUPPORT, NOT CLAMPING:
     ✓ a backing support behind the wall
     ✓ adjustable/conformable supports set AFTER
       the part is located (never before — they
       would lift it off the locators)
     ✗ MORE CLAMP FORCE MAKES IT WORSE — it distorts
       the part, which springs back after unclamping
```

`[PRACTICE]` **This is the first appearance of a principle that governs Level 6 onward: clamping a
flexible part harder does not make it stiffer, it makes it wrong.** The answer is support placed to
resist the cutting force, not clamp force applied to fight it.

### 7. Terminology

| Term | Definition |
|---|---|
| **Full-width slotting** | Cut where radial engagement equals cutter diameter; both walls engaged |
| **Pocketing** | Removing material within a closed boundary |
| **Contouring** | Following a profile; feed direction rotates |
| **Entry shock** | Impact load as a tooth enters at full chip thickness |
| **Dynamic factor** | Multiplier applied to steady-state force to account for a known peak |
| **Interrupted cut** | Cut crossing a hole, slot or boss, giving repeated impact |
| **Tool deflection** | Elastic bending of the cutter under cutting load |
| **Stick-out** | Length of tool protruding from the holder |
| **Form closure** | Restraint by geometry in all directions, e.g. a pin in a bore |
| **Force closure** | Restraint by friction, requiring clamp force |
| **Recutting** | Cutter re-engaging chips not evacuated from the cut |
| **Springback** | Elastic recovery of a deflected part or tool after the load is removed |

### 8. Principle

> **A STOP RESISTS ONLY IN COMPRESSION.** To restrain a force that rotates through 360° — which is what
> contouring produces — you need **at least three stops**, or a **form-closed location** such as a pin
> in a bore that resists every radial direction with one feature.
> **FULL-WIDTH SLOTTING IS THE MOST DEMANDING MILLING OPERATION PER MILLIMETRE OF CUTTER DIAMETER**:
> half the teeth engaged, maximum torque, worst chip evacuation, maximum deflection.
> **DO NOT ASSUME THE TWO SLOT WALLS CANCEL.** Design for 20–40% of the single-wall side load
> `[PRACTICE]`.
> **THE PEAK MOVES THE PART, NOT THE MEAN.** Apply a dynamic factor before the safety factor.
> **CLAMPING A FLEXIBLE PART HARDER DOES NOT MAKE IT STIFFER — IT MAKES IT WRONG.** Use support.

### 9. Industrial application

**Choosing between three stops and a bore location**

```
   THE DECISION [PRACTICE]

   DOES THE PART HAVE A USABLE BORE?
     │
     ├─ YES → LOCATE ON IT
     │         ✓ Form-closed: resists 360° with ONE
     │           feature
     │         ✓ One tolerance, one wear point
     │         ✓ Naturally suits contouring
     │         ✗ Needs the bore to exist and be
     │           accurate (a machined bore, not an
     │           as-cast one)
     │
     └─ NO  → THREE STOPS AT ~120°
               ✓ Works on any external form
               ✗ Three features, three tolerances,
                 three wear points
               ✗ Over-constraint risk if badly
                 placed — the part must seat on all
                 three without being forced

   NOTE: two stops at 90° is the common WRONG answer.
   It restrains two of four quadrants. It is adequate
   ONLY if the force direction is genuinely limited
   to those quadrants — which contouring guarantees
   it is not.
```

**Distinguishing tool deflection from part movement — the five-minute test**

```
SYMPTOM: A contoured wall is out of position by
  0.06 mm.

TEST 1 — MEASURE AT TWO DEPTHS
  Top of wall   +0.01 mm
  Bottom of wall +0.06 mm
  → ERROR VARIES WITH DEPTH
  → TOOL DEFLECTION. A part that moved would be
    displaced uniformly.

TEST 2 — CHECK REPEATABILITY
  Measure five consecutive parts.
  All show +0.06 at the bottom, ±0.005.
  → HIGHLY REPEATABLE
  → SYSTEMATIC, so a tool or programme effect, not
    a clamping instability.

TEST 3 — CHECK DIRECTION DEPENDENCE
  The error is on the wall cut in one direction and
  absent on the wall cut in the other.
  → CONFIRMS DEFLECTION: the tool is pushed away
    from the material consistently.

CONCLUSION: TOOL DEFLECTION, NOT THE FIXTURE.
CORRECTIVE: shorter stick-out, larger diameter, a
  spring pass, or reduced radial engagement.

  Recall δ ∝ L³ and 1/d⁴ — reducing stick-out is
  usually the most effective single change.
```

> `[PRACTICE]` Being able to run this test and present the numbers is what stops a fixture being
> modified to fix a tooling problem. **Fixtures get blamed because they are the visible physical object
> in the setup.**

### 10. Design rules
- **R1** — For **contouring**, provide at least **three stops** or a **form-closed location** `[PRACTICE]`.
- **R2** — Prefer a **pin in a machined bore** over three edge stops where the part allows it.
- **R3** — Do **not** assume slot-wall forces cancel; design for **20–40% of the single-wall side load**
  `[PRACTICE]`.
- **R4** — Apply a **dynamic factor** (1.3–2.5 `[GUIDE]`) **before** the safety factor for entry shock,
  interrupted cuts and slotting.
- **R5** — Provide **chip escape routes** from slots and pockets; trapped chips cause force spikes.
- **R6** — For **thin walls**, provide **support**, not more clamp force.
- **R7** — Set **adjustable supports after the part is located**, never before `[PRACTICE]`.
- **R8** — Check the **cutter stick-out** the process requires, and flag it if deflection will be
  significant.
- **R9** — Ensure the fixture does not force an **unnecessarily long tool** — δ ∝ L³ makes this
  expensive.
- **R10** — Avoid **over-constraint** when using three stops; the part must seat on all three without
  being forced.

### 11. Rules of thumb
- **A stop only pushes.** Three stops, or a bore, for a rotating load.
- **Two stops at 90° is the common wrong answer** for contouring.
- Full-width slotting engages **half the teeth** — the most demanding milling case.
- **Do not assume slot walls cancel:** allow 20–40% `[PRACTICE]`.
- Dynamic factor **1.3–1.6** climb entry; **1.5–2.0** interrupted; **1.5–2.5** slotting `[GUIDE]`.
- **δ ∝ L³ and 1/d⁴.** Halving stick-out cuts deflection to one eighth.
- Effective cutter diameter for stiffness ≈ **0.8 × nominal** `[GUIDE]`.
- **Error varies with depth → tool. Error uniform with depth → part moved.**
- **Repeatable error → systematic. Random error → clamping or chips.**
- **More clamp force on a thin wall makes it worse.**

### 12. Formulae

**Teeth in cut, full slot**
```
z_c = z / 2          (180° engagement)
```

**Net side load in a full slot** `[PRACTICE]`
```
F_side,slot ≈ (0.20 to 0.40) × F_side,single-wall
```

**Design force with dynamic and safety factors**
```
F_design = F_steady × K_dyn × SF
K_dyn = 1.0 – 2.5   [GUIDE, per the table]
```

**Tool deflection (cantilever, end load)**
```
δ = F L³ / (3 E I)
I = π d_eff⁴ / 64
d_eff ≈ 0.8 d        [GUIDE]

Combined:  δ = 64 F L³ / (3 E π d_eff⁴)
```

**Deflection scaling**
```
δ₂/δ₁ = (L₂/L₁)³ × (d₁/d₂)⁴
```

**Minimum stops for a rotating planar force**
```
n_stops ≥ 3, distributed so that no 180° sector
is free of a stop
```

| Variable | Meaning | Unit |
|---|---|---|
| K_dyn | Dynamic factor | — |
| δ | Tool deflection | mm |
| L | Tool stick-out from the holder | mm |
| d_eff | Effective cutter diameter for stiffness | mm |
| E | Young's modulus (carbide ≈ 600 GPa, HSS ≈ 210 GPa) | N/mm² |
| I | Second moment of area | mm⁴ |

`[GUIDE]` **Carbide E ≈ 600 GPa; HSS E ≈ 210 GPa.** This is a large difference and is the main reason a
carbide cutter deflects far less than an HSS one of the same size — roughly one third as much.

### 13. Worked numerical example

**Problem:** A pocket is machined in an aluminium plate with a slotting entry followed by contouring.
Determine the slotting force with its dynamic factor, the side load, the number of stops required for the
contouring pass, the tool deflection and its effect on the wall, and the effect of reducing stick-out.

```
GIVEN:
  MATERIAL AND CUT                               [PROJ]
    Material            aluminium
    k_c                 = 600 N/mm²  [GUIDE, from the
                          L0.4 table, Al range
                          400-800]
    Cutter, solid carbide, D = 16 mm
    Teeth z             = 3
    Stick-out from holder L = 60 mm
    Slotting pass:
      a_e = 16 mm (FULL WIDTH), a_p = 8 mm
      f_z = 0.05 mm/tooth
    Contouring pass:
      a_e = 2 mm, a_p = 20 mm
      f_z = 0.08 mm/tooth

  FORCE RATIOS                                   [GUIDE]
    k_r = 0.50   (higher at small radial engagement)
    k_a = 0.30

  DYNAMIC FACTORS                                [GUIDE]
    Slotting, moderate chip evacuation  K = 1.8
    Contouring, continuous              K = 1.2

  MATERIAL PROPERTIES                            [GUIDE]
    Carbide E           = 600,000 N/mm²
    Effective diameter  = 0.8 × 16 = 12.8 mm

  FIXTURE                                        [PROJ]
    Part mass           = 2.4 kg
    Safety factor       = 2.5   [PRACTICE]
    Wall tolerance      = ±0.05 mm

REQUIRED:
  (a) Slotting: teeth in cut, tangential force,
      design force with the dynamic factor
  (b) Slotting: net side load allowing for partial
      cancellation
  (c) Contouring: force components and the resultant
      side load with its dynamic factor
  (d) Minimum number of stops for the contouring pass,
      with justification
  (e) Tool deflection during the contouring pass
  (f) Effect of that deflection on the wall, and
      pass/fail against tolerance
  (g) Deflection if the stick-out is reduced to 40 mm
  (h) Deflection if a 20 mm cutter is used at the
      original 60 mm stick-out
  (i) Engineering conclusion

ASSUMPTION:
  1. k_c = 600 N/mm² is a mid-range GUIDELINE for
     aluminium; the real value varies widely with
     alloy and temper and MUST BE CONFIRMED for a
     tight design. [GUIDE]
  2. Slot-wall cancellation taken at the CONSERVATIVE
     end of the 20-40 % practice range, i.e. 40 % of
     the single-wall side load is assumed to remain.
     [PRACTICE]
  3. Effective diameter 0.8 × nominal to account for
     flutes. This is a guideline approximation.
     [GUIDE]
  4. Deflection calculated as a simple cantilever
     with an end load. The real load is distributed
     over the axial engagement, so this OVERESTIMATES
     deflection somewhat — acceptable and
     conservative for assessing whether deflection
     matters. [PRACTICE]
  5. The full radial force is taken as acting at the
     tool tip.
  6. Dynamic factors are guideline values applied
     before the safety factor.

FORMULA:
  (a) z_c = z/2 ; F_t = k_c·a_p·f_z ; ×z_c ; ×K_dyn
  (c) F_H = √(F_t² + F_r²)
  (e) δ = 64 F L³ / (3 E π d_eff⁴)
  (g,h) δ₂/δ₁ = (L₂/L₁)³ × (d₁/d₂)⁴

UNIT CONVERSION:
  All in N and mm. E in N/mm².

SUBSTITUTION AND CALCULATION:

  (a) SLOTTING FORCES

      Teeth in cut, full slot:
        z_c = z/2 = 3/2 = 1.5 teeth

      Tangential per tooth:
        F_t = k_c · a_p · f_z
            = 600 × 8 × 0.05
            = 240.0 N

      Total tangential:
        F_t,total = 240.0 × 1.5 = 360.0 N

      With the slotting dynamic factor:
        F_design = 360.0 × 1.8
                 = 648.0 N

  (b) SLOTTING NET SIDE LOAD

      Single-wall radial force would be:
        F_r = 0.50 × 360.0 = 180.0 N

      Allowing 40 % to remain after partial
      cancellation [PRACTICE]:
        F_side,slot = 0.40 × 180.0
                    = 72.0 N

      With the dynamic factor:
        F_side,design = 72.0 × 1.8
                      = 129.6 N

      → Modest. The slotting pass is a TORQUE and
        DEFLECTION problem, not a side-load problem.

  (c) CONTOURING FORCES

      Radial engagement a_e = 2 mm on D = 16 mm:
        cos(θ/2) = 1 − 2(2)/16 = 1 − 0.25 = 0.75
        θ/2 = arccos(0.75) = 41.410°
        θ   = 82.819°
        z_c = 3 × 82.819/360 = 0.690 teeth

      Tangential per tooth:
        F_t = 600 × 20 × 0.08
            = 960.0 N

      Total tangential:
        F_t,total = 960.0 × 0.690
                  = 662.6 N

      Radial:
        F_r,total = 0.50 × 662.6 = 331.3 N

      Resultant horizontal:
        F_H = √(662.6² + 331.3²)
            = √(439,039 + 109,760)
            = √548,799
            = 740.8 N

      With the contouring dynamic factor:
        F_H,design = 740.8 × 1.2
                   = 888.9 N

      With the safety factor:
        F_H,total = 888.9 × 2.5
                  = 2,222.3 N

      → NOTE: the CONTOURING pass produces a LARGER
        side load (888.9 N) than the SLOTTING pass
        (129.6 N), because the deeper axial engagement
        more than compensates for the narrower radial
        engagement.

  (d) MINIMUM NUMBER OF STOPS

      The contouring pass follows a closed pocket
      profile, so the side force direction sweeps
      through the full 360°.

      A stop resists only in COMPRESSION.

        1 stop  → 1 direction restrained ✗
        2 stops at 90° → 2 quadrants restrained,
                         2 quadrants FREE ✗
        3 stops at 120° → every direction has a
                          component against at least
                          one stop ✓

      → MINIMUM THREE STOPS at approximately 120°,
        each sized for 2,222.3 N.

      ALTERNATIVE: a single pin in a machined bore is
      FORM-CLOSED and resists all 360° with one
      feature — preferable if the part has a usable
      bore.

  (e) TOOL DEFLECTION, CONTOURING PASS

      Deflecting force = the radial component that
      pushes the tool away from the wall. Use the
      resultant with the dynamic factor:
        F = 888.9 N

      d_eff = 0.8 × 16 = 12.8 mm

      I = π d_eff⁴ / 64
        = π × 12.8⁴ / 64
        = π × 26,843.5 / 64
        = 84,332.3 / 64
        = 1,317.7 mm⁴

      δ = F L³ / (3 E I)
        = 888.9 × 60³ / (3 × 600,000 × 1,317.7)
        = 888.9 × 216,000 / (2,371,860,000)
        = 191,999,000 / 2,371,860,000
        = 0.08095 mm

      → δ = 0.0810 mm

  (f) EFFECT ON THE WALL — PASS/FAIL

      The tool is pushed AWAY from the material, so
      the wall is left 0.0810 mm THICKER than
      programmed (the cut is 0.0810 mm shallow).

      Wall tolerance = ±0.05 mm → band 0.100 mm

        0.0810 / 0.050 = 1.62 × the ±0.05 limit
        0.0810 / 0.100 = 81.0 % of the total band,
                         consumed by DEFLECTION ALONE

      ✗ FAIL. The wall is out of tolerance from tool
        deflection before any fixture error is
        counted.

      AND the deflection VARIES WITH DEPTH — near the
      top of the wall it is small, near the tip it is
      maximum — so the wall is also TAPERED.

  (g) STICK-OUT REDUCED TO 40 mm

      δ₂/δ₁ = (L₂/L₁)³
            = (40/60)³
            = (0.6667)³
            = 0.29630

      δ₂ = 0.08095 × 0.29630
         = 0.02399 mm
         ≈ 0.0240 mm

      Improvement factor = 0.08095/0.02399 = 3.375×
        (which is (60/40)³ = 1.5³ = 3.375 ✓)

      Against tolerance:
        0.0240 / 0.050 = 48.0 % of the ±0.05 limit
        ✓ PASS, with margin

  (h) LARGER CUTTER, D = 20 mm, L = 60 mm

      d_eff = 0.8 × 20 = 16.0 mm

      δ₂/δ₁ = (d₁/d₂)⁴
            = (12.8/16.0)⁴
            = (0.8)⁴
            = 0.40960

      δ₂ = 0.08095 × 0.40960
         = 0.03316 mm
         ≈ 0.0332 mm

      Improvement factor = 1/0.4096 = 2.441×

      Against tolerance:
        0.0332 / 0.050 = 66.4 % of the ±0.05 limit
        ✓ PASS, but with less margin than (g)

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Slotting teeth in cut    │ 1.5               │
  │     Slotting design force    │ 648.0 N           │
  │ (b) Slotting net side load   │ 129.6 N           │
  │ (c) Contouring resultant     │ 740.8 N           │
  │     with dynamic factor      │ 888.9 N           │
  │     with safety factor       │ 2,222.3 N         │
  │ (d) Minimum stops            │ 3 at ~120°        │
  │     or                       │ 1 pin in a bore   │
  │ (e) Tool deflection, L=60    │ 0.0810 mm         │
  │ (f) vs ±0.05 mm wall tol.    │ 1.62× ✗ FAIL      │
  │     % of total band          │ 81.0 %            │
  │ (g) δ at L=40 mm             │ 0.0240 mm ✓ (3.375×)│
  │ (h) δ at D=20 mm, L=60       │ 0.0332 mm ✓ (2.441×)│
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  SF = 2.5 applied after the dynamic factor for the
  fixture restraint sizing, giving 2,222.3 N at the
  stops. The DEFLECTION calculation is NOT given a
  safety factor — it is a predicted dimensional
  error compared directly with a tolerance, and
  inflating it would confuse a geometric prediction
  with a strength margin.

PASS/FAIL:
  ✓ PASS — fixture restraint, provided three stops
    (or a bore location) each rated 2,222.3 N.
  ✗ FAIL — wall tolerance at 60 mm stick-out:
    deflection alone consumes 81 % of the band and
    exceeds the ±0.05 limit by 1.62×.
  ✓ PASS — with stick-out reduced to 40 mm (48 % of
    the limit) or a 20 mm cutter (66 %).

ENGINEERING CONCLUSION:
  1. THE CONTOURING PASS, NOT THE SLOTTING PASS,
     GOVERNS THE FIXTURE.
     This is counter-intuitive. Slotting feels like
     the aggressive operation — half the teeth
     engaged, full width, maximum torque — and it is,
     for the TOOL and the SPINDLE. But its net side
     load is only 129.6 N because the two walls partly
     cancel, while the contouring pass produces
     888.9 N because its 20 mm axial engagement is two
     and a half times deeper.
     THE LESSON: THE MOST AGGRESSIVE-LOOKING
     OPERATION IS NOT NECESSARILY THE ONE THAT MOVES
     THE PART. Calculate each operation; do not rank
     them by intuition.

  2. THREE STOPS, OR A BORE — AND THE BORE IS BETTER.
     Because the contour is closed, the side force
     sweeps the full 360°, and a stop only works in
     compression. Two stops at 90° — the common
     arrangement — leaves half the plane unrestrained.
     Three stops at 120° works. A pin in a machined
     bore works better, because it is FORM-CLOSED:
     one feature, one tolerance, one wear point,
     resisting every radial direction simultaneously.
     WHERE A PART HAS A USABLE MACHINED BORE, A
     CONTOURING OPERATION IS A STRONG REASON TO
     LOCATE ON IT.

  3. THE TOOL DEFLECTION FAILURE IS NOT MINE, AND
     PROVING THAT IS PART OF THE JOB.
     0.081 mm of deflection against a ±0.05 mm wall
     tolerance — 81 % of the band consumed before the
     fixture contributes anything, and the wall
     TAPERED as well as displaced. This will be
     reported as "the fixture is letting the part
     move".
     THE EVIDENCE THAT IT IS NOT: the error varies
     with depth, it is repeatable part to part, and
     it is direction-dependent. A part that moved
     would be displaced uniformly through the depth
     and would vary randomly between parts. Measuring
     one wall at two depths settles it in five
     minutes.

  4. STICK-OUT IS THE MOST POWERFUL LEVER, AND THE
     FIXTURE CAN DESTROY IT.
     Reducing stick-out from 60 to 40 mm cut
     deflection by 3.375× — exactly 1.5³ — and brought
     the wall comfortably into tolerance. Going to a
     20 mm cutter gave 2.441×, which is (0.8)⁻⁴, and
     also passed but with less margin.
     THE FIXTURE DESIGNER'S STAKE IN THIS IS DIRECT:
     A FIXTURE THAT SITS THE PART UNNECESSARILY HIGH,
     OR THAT PUTS A CLAMP WHERE A SHORT TOOL CANNOT
     REACH, FORCES A LONGER TOOL — AND δ ∝ L³ MAKES
     THAT EXTREMELY EXPENSIVE. Twenty millimetres of
     unnecessary fixture height cost a factor of 3.4
     in wall accuracy here. This is the same Z-budget
     argument as L1.1.2, now with a dimensional
     consequence attached.

  5. WHAT I WOULD SPECIFY.
     Three stops at 120° rated 2,300 N each, or
     preferably a bore location; a note stating the
     maximum permitted tool stick-out for the contour
     pass; and the fixture height minimised so that
     the 40 mm stick-out is achievable.

SENSITIVITY NOTE:
  Ranked by influence:
    1. TOOL STICK-OUT — cubic. The dominant variable
       in the dimensional outcome, and partly under
       the fixture designer's control through fixture
       height and clamp placement.
    2. CUTTER DIAMETER — fourth power, but bounded by
       the pocket geometry: you cannot always fit a
       larger cutter. Where you can, it is powerful.
    3. AXIAL ENGAGEMENT a_p — linear in force but it
       is what made the contouring pass govern over
       the slotting pass. Reducing it in favour of
       more passes trades cycle time for accuracy.
    4. DYNAMIC FACTOR — 1.2 to 1.8 across the two
       operations, a 50 % swing on the design force.
       The guideline ranges are wide, so confirming
       them matters where the margin is thin.
    5. SLOT-WALL CANCELLATION FRACTION — assumed 40 %
       conservatively from a 20-40 % range. Since the
       slotting side load did not govern, this
       assumption turned out not to matter here — but
       it would on a shallower contour pass.
```

### 14. Engineering assumptions
- k_c = 600 N/mm² is a mid-range guideline for aluminium `[GUIDE]`; varies widely with alloy and temper.
- Slot-wall cancellation taken conservatively at 40% of the single-wall side load remaining `[PRACTICE]`.
- Effective diameter 0.8 × nominal for flutes `[GUIDE]`.
- Deflection as a simple cantilever with an end load — overestimates somewhat, which is conservative for
  deciding whether deflection matters `[PRACTICE]`.
- Full radial force taken as acting at the tool tip.
- Dynamic factors are guideline values applied before the safety factor.

### 15. Diagram

```
     SLOTTING, POCKETING AND CONTOURING
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  FULL-WIDTH SLOTTING — BOTH WALLS ENGAGED

     ▓▓▓┌───┐▓▓▓     climb on one wall,
     ▓▓▓│ ● │▓▓▓     conventional on the other,
     ▓▓▓└───┘▓▓▓     SIMULTANEOUSLY

     z_c = z/2   HALF THE TEETH CUTTING
     ✗ maximum torque
     ✗ worst chip evacuation — chips recut
     ✗ maximum deflection — cutter fully buried
     ~ side forces PARTLY cancel — DO NOT ASSUME
       FULLY: allow 20-40 % [PRACTICE]

  ──────────────────────────────────────────────────────────

  CONTOURING — THE FORCE ROTATES THROUGH 360°

              ↑ F at t₁
              │
    F at t₄ ←─●─→ F at t₂
              │
              ↓ F at t₃

   1 STOP        2 STOPS @90°      3 STOPS @120°
   ┌──┐          ┌──┐              ┌──┐
   │  │▐         │  │▐             ▐ │  │▐
   └──┘          ▄▄▄▄              └──┘
                                     ▀
   1 of 4 ✗      2 of 4 ✗           ALL ✓

   OR — FORM CLOSURE, ONE FEATURE:
              ╭───╮
              │ ◉ │  pin in a machined bore
              ╰───╯  resists ALL 360° at once

   ┌──────────────────────────────────────────────┐
   │ A STOP RESISTS ONLY IN COMPRESSION.          │
   │ TWO STOPS AT 90° IS THE COMMON WRONG ANSWER  │
   │ — IT LEAVES HALF THE PLANE FREE.             │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE COUNTER-INTUITIVE RESULT

   SLOTTING          a_e 16 (full), a_p  8
     side load ██ 129.6 N

   CONTOURING        a_e  2,        a_p 20
     side load ██████████████ 888.9 N

   THE GENTLE-LOOKING PASS PRODUCES 6.9× THE SIDE
   LOAD, because a_p is 2.5× deeper.

   ┌──────────────────────────────────────────────┐
   │ CALCULATE EVERY OPERATION. DO NOT RANK THEM  │
   │ BY HOW AGGRESSIVE THEY LOOK.                 │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  ENTRY SHOCK — THE PEAK, NOT THE MEAN

   force │  ╱╲    ╱╲    ╱╲   ← peak
         │ ╱  ╲  ╱  ╲  ╱  ╲
     ────┼╱────╲╱────╲╱────╲── mean
         └──────────────────► time

   F_design = F_steady × K_dyn × SF
                         ▲       ▲
              a KNOWN physical  uncertainty
              peak that WILL
              occur

   K_dyn [GUIDE]  1.0-1.2 steady
                  1.3-1.6 climb entry
                  1.5-2.0 interrupted
                  1.5-2.5 slotting

  ──────────────────────────────────────────────────────────

  TOOL DEFLECTION — δ ∝ L³ AND 1/d⁴

        ║ holder
     ═══╬═══
        ║  L = 60      δ = 0.0810 mm  ✗ 1.62× tol
        ║
        ▓  ← tool bends away
         ╲
          ╲  wall left THICKER and TAPERED

     L = 40 mm  → δ = 0.0240  (3.375× better = 1.5³)
     D = 20 mm  → δ = 0.0332  (2.441× better = 0.8⁻⁴)

   ┌──────────────────────────────────────────────┐
   │ A FIXTURE THAT SITS THE PART HIGH, OR PUTS A │
   │ CLAMP WHERE A SHORT TOOL CANNOT REACH,       │
   │ FORCES A LONGER TOOL.                        │
   │                                              │
   │ 20 mm OF UNNECESSARY FIXTURE HEIGHT COST A   │
   │ FACTOR OF 3.4 IN WALL ACCURACY HERE.         │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  IS IT THE TOOL OR THE PART? — THE 5-MINUTE TEST

   TOOL DEFLECTION           PART MOVED
   ├ varies WITH DEPTH       ├ UNIFORM through depth
   ├ REPEATABLE part to part ├ RANDOM between parts
   └ DIRECTION-dependent     └ direction-independent

   MEASURE ONE WALL AT TWO DEPTHS. That is the test.

   ┌──────────────────────────────────────────────┐
   │ FIXTURES GET BLAMED BECAUSE THEY ARE THE     │
   │ VISIBLE PHYSICAL OBJECT IN THE SETUP.        │
   │ HAVE THE MEASUREMENT READY.                  │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THIN WALLS — SUPPORT, NOT CLAMP FORCE

   ✗ WRONG                   ✓ RIGHT
     ┌─┐                       ┌─┐
     │ │◄─── force             │ │◄─── force
     │ │  bends                │ │▌ ← support behind
     │ │                       │ │▌   the wall
     └─┘  MORE CLAMP           └─┘
          DISTORTS IT          set AFTER locating

   ┌──────────────────────────────────────────────┐
   │ CLAMPING A FLEXIBLE PART HARDER DOES NOT     │
   │ MAKE IT STIFFER — IT MAKES IT WRONG.         │
   │ It distorts, machines true, then springs     │
   │ back on release.                             │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-5310 — CONTOURING LOAD CASE
STANDARD: ASME Y14.5-2018
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: THE POCKET CONTOURING OPERATION PRODUCES A
        SIDE LOAD THAT ROTATES THROUGH 360°.
        THE PART IS THEREFORE LOCATED ON PIN ITEM 4
        IN THE MACHINED BORE, WHICH IS FORM-CLOSED
        AND RESISTS ALL RADIAL DIRECTIONS.
        DO NOT SUBSTITUTE EDGE STOPS UNLESS AT LEAST
        THREE ARE PROVIDED AT APPROXIMATELY 120°.

NOTE 2: DESIGN SIDE LOAD 2,222 N INCLUDING A DYNAMIC
        FACTOR OF 1.2 AND A SAFETY FACTOR OF 2.5.

NOTE 3: MAXIMUM PERMITTED TOOL STICK-OUT FOR THE
        CONTOUR PASS IS 40 mm. AT 60 mm STICK-OUT
        PREDICTED DEFLECTION IS 0.081 mm, WHICH
        EXCEEDS THE ±0.05 mm WALL TOLERANCE.
        THIS IS A PROCESS REQUIREMENT RECORDED HERE
        BECAUSE THE FIXTURE HEIGHT WAS SET TO MAKE IT
        ACHIEVABLE.

NOTE 4: SUPPORTS ITEMS 11 AND 12 BEHIND THE THIN WALL
        ARE TO BE SET AFTER THE PART IS SEATED ON ITS
        LOCATORS, AND MUST NOT LIFT THE PART.
```

Note 3 records a **process** requirement on a **fixture** drawing, which is unusual and deliberate: the
fixture height was chosen to make that stick-out possible, so the two decisions are linked and the link
should not be lost.

### 17. CAD workflow
1. Model the **contour toolpath** and generate the **swept envelope** for the whole profile
2. Check that stops or the locating pin **clear the swept envelope** in every direction
3. Add **force vectors at several points around the contour** — not one — to confirm that every
   direction is restrained
4. Model the **tool at its actual stick-out** so the required length is visible in the assembly
5. Measure the **available Z height** and confirm the specified stick-out is achievable (L1.1.2 Z budget)
6. Model **thin-wall supports** and verify they contact without lifting the part
7. Where FEA is available, run the **part deflection** case for thin walls

`[PRACTICE]` Step 3 is the one that catches the two-stops-at-90° error. Placing force vectors at four or
eight points around the contour makes an unrestrained direction immediately visible.

### 18. GD&T application

```
STANDARD: ASME Y14.5-2018

  Locating pin in a bore — the form-closed case:

  Fixture pin:
  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.02 Ⓜ │ A │ B │ C │        │
  └──────────────────────────────────┘

  WHY MMC (Ⓜ) IS APPROPRIATE HERE: the pin and bore
  fit is a clearance relationship, so bonus tolerance
  at the pin's actual size is genuinely available
  and usable. Full treatment at L22.

  Three-stop alternative — each stop face:
  ┌──────────────────────────────┐
  │ ⌓ │ 0.02 │ A │ B │           │
  └──────────────────────────────┘

  NOTE THE TRADE: one feature with one positional
  tolerance, versus three features each with a
  profile tolerance whose combined effect must be
  analysed. THE BORE IS SIMPLER TO SPECIFY AS WELL
  AS BETTER MECHANICALLY.
```

### 19. Manufacturing method
The locating pin follows the standard hardened-locator route (L0.5.3): machine soft, harden to
58–62 HRC, fit, then grind. `[PRACTICE]` For a pin resisting a rotating load, the **pin-to-bore fit is
the governing dimension** — clearance directly becomes part movement. A close sliding fit is normal; an
interference fit would make loading impossible.

Thin-wall supports are typically **bought-in adjustable or spring-loaded units** (L0.5.2 buy-don't-make),
locked after setting.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Locating pin position | CMM | ±0.02 mm |
| Pin diameter and fit | Micrometer / plug gauge | Close sliding fit |
| Stop positions (if used) | CMM | ±0.02 mm, ~120° apart |
| Restraint in all directions | Apply a hand load in 8 directions, indicate | ≤0.01 mm any direction |
| Support contact without lifting | Indicate the part while setting supports | No rise |
| Achievable tool stick-out | Physical trial | ≤40 mm |

`[PRACTICE]` The eight-direction hand-load test is the practical verification that the rotating-load
restraint actually works, and it directly exposes the two-stops-at-90° failure.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Two stops at 90°** for a contouring operation | Half the plane unrestrained |
| 2 | Assuming **slot walls cancel exactly** | Unanticipated side load |
| 3 | Ranking operations by **how aggressive they look** | The governing operation is missed |
| 4 | Using the **mean force** with no dynamic factor | Under-sized for the peak |
| 5 | Blaming the fixture for **tool deflection** | Wrong problem fixed |
| 6 | Fixture forcing a **long tool** | δ ∝ L³ — very expensive in accuracy |
| 7 | **More clamp force** on a thin wall | Distortion and springback |
| 8 | Setting **adjustable supports before** locating | Part lifted off its locators |
| 9 | No **chip escape** from a pocket | Recutting, force spikes |
| 10 | Not checking stop clearance against the **swept envelope** | Collision |
| 11 | Using a **solid-section** I for a fluted cutter | Stiffness overestimated |
| 12 | Ignoring that **carbide is ~3× stiffer than HSS** | Wrong tool assumed in the deflection check |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Wall tapered, thicker at the bottom | Tool deflection | Measure at two depths | Shorter stick-out; larger tool; spring pass | Specify max stick-out |
| Error repeatable on every part | Systematic — tool or programme | Measure 5 parts | Investigate the tool | Not a clamping issue |
| Error random between parts | Clamping, chips | Repeat-clamp test | Clean; check clamping | Chip escape design |
| Part moves during contouring only | Insufficient stops for a rotating load | 8-direction hand-load test | Add stops to 3 at 120°, or a bore | Design rule R1 |
| Force spikes during slotting | Chip recutting | Observe chip evacuation | Peck; air blast; smaller a_p | Chip escape routes |
| Corner radius larger than the tool | Tool deflection at direction change | Measure the corner | Reduce feed at corners | Expect it; programme for it |
| Thin wall thick and chattering | Part deflection | Indicate the wall under load | Add support behind the wall | Support, not clamp force |
| Part distorted after unclamping | Excessive clamp force on a flexible part | Measure clamped vs free | Reduce clamp force; add support | Design rule R6 |

### 23. Design checklist
- [ ] Does any operation **contour**, causing the force direction to rotate?
- [ ] If so, are there **three stops** or a **form-closed bore location**?
- [ ] Has restraint been verified in **all directions**, not just the obvious two?
- [ ] Has a **dynamic factor** been applied for slotting, entry and interrupted cuts?
- [ ] Has **every operation been calculated**, rather than ranked by appearance?
- [ ] Is the **slot-wall side load** allowed for at 20–40%, not assumed zero?
- [ ] Do **chips have an escape route** from slots and pockets?
- [ ] Are **thin walls supported** rather than clamped harder?
- [ ] Are **adjustable supports set after locating**?
- [ ] Does the fixture **avoid forcing a long tool**?
- [ ] Is the **maximum permitted stick-out** stated where it matters?
- [ ] Has **stop clearance to the swept envelope** been checked around the whole contour?

### 24. Beginner exercise
**E1.3.2-B** — A full-width slot is cut in aluminium with a 12 mm, 3-flute cutter, a_p = 6 mm, f_z =
0.04 mm/tooth, k_c = 600 N/mm².
(a) State the number of teeth in cut and explain why.
(b) Calculate the tangential force per tooth and the total.
(c) Apply a dynamic factor of 1.8 and state the design force.
(d) Explain in one sentence why slotting has poor chip evacuation.
(e) A pocket is then contoured. State the minimum number of stops required and explain why two at 90° is
insufficient.

### 25. Intermediate exercise
**E1.3.2-I** — A steel component (k_c = 1,800 N/mm²) is pocketed with a 20 mm, 4-flute solid carbide
cutter at 75 mm stick-out. The contour pass uses a_e = 3 mm, a_p = 25 mm, f_z = 0.06 mm/tooth, k_r =
0.50. Dynamic factor 1.2, safety factor 2.5. Carbide E = 600,000 N/mm², d_eff = 0.8 × D. The wall
tolerance is ±0.04 mm.
(a) Calculate the engagement angle and teeth in cut.
(b) Calculate the resultant horizontal force, and the design force with both factors.
(c) State the minimum stop arrangement and the rating of each stop.
(d) Calculate the tool deflection.
(e) State whether the wall will be in tolerance, and by what factor it passes or fails.
(f) Calculate the stick-out that would bring the deflection to exactly half the tolerance limit.
(g) Calculate the deflection if a 25 mm cutter were used at the original 75 mm stick-out, and state which
change — shorter tool or bigger tool — is more effective here.
(h) Explain how you would prove to a production engineer that a resulting wall error is tool deflection
rather than fixture movement.

### 26. Advanced exercise
**E1.3.2-A** — A thin-walled aluminium housing (k_c = 650 N/mm², mass 3.8 kg) requires: OP1 a full-width
slotting entry, 16 mm 3-flute carbide, a_p = 10 mm, f_z = 0.05, stick-out 70 mm; OP2 a roughing contour,
a_e = 4 mm, a_p = 25 mm, f_z = 0.10; OP3 a finishing contour, a_e = 0.4 mm, a_p = 25 mm, f_z = 0.05. The
pocket wall is 2.5 mm thick and 25 mm tall, and its thickness tolerance is ±0.04 mm. Take k_r = 0.50
(roughing) and 0.70 (finishing, small engagement), k_a = 0.30, carbide E = 600,000 N/mm², d_eff = 0.8D.
Dynamic factors: slotting 1.8, roughing contour 1.2, finishing contour 1.1. Safety factor 2.5.
(i) Calculate the force components and design forces for all three operations.
(ii) Identify which operation governs the fixture restraint and which governs the wall accuracy, and
explain why they are different operations.
(iii) Determine the minimum stop arrangement, with each stop's rating.
(iv) Calculate the tool deflection for each operation and the resulting wall error.
(v) Determine whether the finishing pass can hold ±0.04 mm, and if not, calculate the stick-out required.
(vi) The 2.5 mm wall will itself deflect. Treating it as a cantilever 25 mm tall, 2.5 mm thick and 60 mm
long (aluminium E = 70,000 N/mm²), calculate its deflection under the finishing force and state the
combined tool-plus-wall error.
(vii) State whether the wall tolerance is achievable at all, and propose three changes that would make
it so, quantifying each.
(viii) Explain why increasing clamp force is not one of those three changes.
(ix) Specify the support arrangement you would provide, including where it contacts and when it is set.
(x) Write the drawing notes covering the load case, the stick-out limit and the support-setting sequence.

### 27. Interview questions
1. *"Why is slotting harder on a cutter than profiling?"*
   **Answer:** Because in a full-width slot both sides of the cutter are engaged, so the engagement arc
   is 180° and half the teeth are cutting at any moment — compare that with a finishing pass at maybe
   five per cent radial engagement where less than one tooth is in cut. That means maximum torque and
   maximum power. The cutter is also fully buried, so chips have nowhere to go and get recut, which
   causes force spikes and heat, and the cutter is unsupported on both sides so it deflects more. For
   the fixture, though, the interesting part is that the net side load in a slot is actually quite low,
   because one wall is climb-cutting and the other conventional and the side forces partly cancel — so
   slotting is a torque and deflection problem rather than a side-load problem. I would not assume they
   cancel completely though; allowing twenty to forty per cent is the safer practice.
2. *"A contouring operation goes all the way round a pocket. How many stops does the part need?"*
   **Answer:** At least three, at roughly 120° apart. The reason is that the side force direction
   rotates through the full 360° as the tool goes round the profile, and a stop can only resist in
   compression — it pushes, it cannot pull. So one stop covers one direction, two stops at 90° cover two
   quadrants and leave the opposite two completely free, and it takes three to guarantee that every
   possible force direction has a component pushing against at least one stop. The better answer, if the
   part has a suitable machined bore, is to locate on a pin in that bore, because it is form-closed and
   resists every radial direction with a single feature — one tolerance and one wear point instead of
   three.

### 28. Expert questions
1. *"How do you tell the difference between tool deflection and the part moving in the fixture?"*
   **Answer:** There are three signatures, and any one of them usually settles it. Taken together they
   are conclusive, and the whole thing takes about five minutes with a bore gauge or a height gauge.
   The first and best is **whether the error varies with depth**. A deflecting tool is a cantilever, so
   its displacement is greatest at the tip and near zero at the holder — which means the wall it cuts is
   tapered, with the error growing as you go deeper. A part that has moved in the fixture has moved as a
   rigid body, so the error is uniform from top to bottom. Measuring one wall at two depths distinguishes
   them immediately, and it is the measurement I would take first.
   The second is **repeatability between parts**. Tool deflection is a deterministic elastic response to
   a force that is essentially the same on every part, so it repeats very tightly — you will see the same
   0.06 mm on part after part, within a few microns. Part movement in a fixture is caused by things that
   vary: a chip under a locator, variable clamp force, a burr, friction. So it scatters. Five consecutive
   parts tell you which you are looking at.
   The third is **direction dependence**. The tool is always pushed away from the material it is
   cutting, so on a contour the error appears consistently on one side of the geometry and not the other,
   and it reverses if the cutting direction reverses. A part that shifted has shifted in one direction in
   space regardless of which wall is being cut.
   There is a fourth check worth knowing: **the corner radius**. If the internal corners of a contour
   come out larger than the tool radius, that is deflection recovering as the tool changes direction —
   the tool springs back and leaves material. That is unambiguous, because nothing about a part moving in
   a fixture produces an oversize corner radius.
   I would want to have this evidence before the conversation rather than during it, because **the
   fixture is the visible physical object in the setup and it gets blamed by default**. Turning up with
   "the error is 0.01 at the top and 0.06 at the bottom, it repeats within 5 microns across five parts,
   and it is only on the climb-side wall" ends the discussion in a way that "I don't think it's the
   fixture" does not.
   And I would then be constructive about it, because part of the answer may still be mine: if the
   fixture is sitting the part 20 mm higher than it needs to, or a clamp is in the way of a short tool,
   then I am the reason the stick-out is long, and δ goes as L³. A 50 per cent longer tool deflects 3.4
   times as much. So "not my fault" and "not my problem" are different statements, and it is worth being
   careful to make only the first one.
2. *"A customer wants a thin-walled part held more rigidly. They ask for more clamps and more clamp
   force. What do you tell them?"*
   **Answer:** I would tell them that it will make the part worse, and I would explain the mechanism
   rather than just refusing, because the request comes from a reasonable intuition that happens to be
   wrong in this specific case.
   The intuition is that clamping harder makes things stiffer. For a rigid part that is broadly true —
   more normal force means more friction and less chance of movement. **For a flexible part it is
   false, because the clamp force does not just hold the part, it deforms it.** You clamp the wall,
   the wall bows; the cutter machines the bowed shape true; you release the clamp and the wall springs
   back, carrying the machined surface with it into a shape that is now wrong. The part was in tolerance
   while it was clamped and out of tolerance the moment it was free, which is a particularly frustrating
   failure because every in-process check passes.
   So the fundamental point is that **the problem is not restraint, it is stiffness**, and clamp force
   addresses restraint. What the wall needs is something behind it to react the cutting force locally,
   so it does not have to carry that load in bending over its full span. That means **support, not
   clamping**: a backing pad, a conformable or adjustable support, in some cases a low-melting-point
   filler or a vacuum chuck for really flexible work.
   There is an important detail about how supports are used, and it is the thing most often got wrong.
   **An adjustable support must be set after the part is seated on its locators, and it must not lift
   the part.** If you set it first, or wind it up until it feels tight, it becomes an unplanned locator,
   lifts the part off the primary datum, and you have replaced a stiffness problem with a location
   problem — which is worse, because location errors are systematic. The support's job is to touch and
   then resist, not to position.
   I would also want to look at the process, because sometimes the real answer is not in the fixture.
   Reducing radial engagement on the finishing pass reduces the force pushing on the wall, often by more
   than any support would achieve. Leaving a spring pass takes out the deflection from the previous cut.
   Machining the wall in the right sequence — before the part is at its most flexible rather than after —
   is free.
   And I would put numbers on it, because "more clamp force is bad" is an assertion and a calculation is
   an argument. Showing the customer the predicted wall deflection under the cutting force with and
   without a support, and the predicted distortion under their proposed clamp force, turns a
   disagreement about opinions into a discussion about which number to reduce. **In my experience that
   conversation ends with the customer proposing the support themselves.**

### 29. Summary
Slotting, pocketing and contouring differ from steady peripheral milling in three ways that each defeat a
fixture designed only for the latter. Full-width slotting engages both walls simultaneously, so half the
teeth are cutting, torque and deflection are at their maximum, chip evacuation is at its worst, and the
neat climb-versus-conventional rule does not apply because both occur at once — the side forces partly
cancel, but never exactly, so 20–40% of the single-wall load should be allowed rather than zero.
Contouring rotates the feed direction through 360°, and because a stop resists only in compression, one
stop covers one direction and two stops at 90° leave half the plane free; at least three stops at 120° are
required, or better, a pin in a machined bore, which is form-closed and resists every radial direction
with a single feature, one tolerance and one wear point. Entry shock and interrupted cuts make the peak
force exceed the mean, so a dynamic factor of 1.2–2.5 is applied before the safety factor, since it
represents a known physical peak rather than uncertainty. In the worked example the gentle-looking
contour pass produced 888.9 N of side load against the aggressive slotting pass's 129.6 N, because its
axial engagement was 2.5 times deeper — a reminder to calculate every operation rather than ranking them
by appearance. Finally, tool deflection at 0.081 mm consumed 81% of a ±0.05 mm wall tolerance and left the
wall tapered; since δ ∝ L³ and 1/d⁴, reducing stick-out from 60 to 40 mm improved it 3.375-fold, which
makes fixture height a direct contributor to wall accuracy, and the signatures of deflection — varying
with depth, repeatable between parts, direction-dependent — are what distinguish it from part movement.

### 30. Key takeaways
- **A stop resists only in compression.** Three stops at 120°, or a form-closed bore.
- **Two stops at 90° is the common wrong answer** for a rotating load.
- **Full-width slotting engages half the teeth** — maximum torque, worst chips, maximum deflection.
- **Do not assume slot walls cancel.** Allow 20–40% `[PRACTICE]`.
- **The peak moves the part, not the mean.** Dynamic factor before safety factor.
- **Calculate every operation.** The gentle-looking contour beat the aggressive slot by 6.9×.
- **δ ∝ L³ and 1/d⁴.** Stick-out is the dominant lever.
- **A fixture that forces a long tool is a fixture that costs accuracy** — 20 mm of extra height cost
  3.4× here.
- **Deflection varies with depth, repeats between parts, and depends on direction.** Part movement does
  none of those.
- **Clamping a flexible part harder does not make it stiffer — it makes it wrong.**
- **Set adjustable supports after locating**, and never let them lift the part.
- Carbide is **~3× stiffer than HSS** `[GUIDE]` — it matters in the deflection check.

---

## LESSON L1.3.3 — DRILLING

### 1. Lesson title
**L1.3.3 — Thrust force and torque, the breakthrough spike, and why drilling lifts and rotates parts**

### 2. Learning objective
By the end of this lesson you will be able to calculate drilling thrust force and torque, explain the
breakthrough spike and why it is the governing load event, explain the mechanism by which a drill lifts
a part on exit and rotates it about its own axis, size clamps and anti-rotation features for drilling,
and specify the fixture features that make drilling safe — including the bush, the support under the
exit, and the escape route for the chip.

### 3. Prerequisites
L1.3.1 (force resolution), L0.3.2 (statics and moments), L0.4.4 (drilling parameters),
L1.1.2 (VMC gravity and chip behaviour).

### 4. Why the topic matters
Drilling is the most common machining operation there is, and it is the one where fixtures most often
fail in a way that surprises people. The reason is that **drilling's governing load is not the steady
cutting load at all** — it is a transient event lasting a fraction of a second at the moment the drill
breaks through the far side of the material.

```
   WHAT PEOPLE DESIGN FOR       WHAT ACTUALLY HAPPENS

   A steady downward thrust     A steady downward thrust
   pressing the part onto its   for most of the hole...
   locators.
   "Drilling is easy — the      ...then at BREAKTHROUGH:
    force helps me."             ✗ the drill GRABS
                                 ✗ torque SPIKES
                                 ✗ the part is PULLED
                                   UP and SPUN ROUND
```

There are three specific things that make drilling different from milling, and all three are about
direction rather than magnitude:

1. **The thrust is axial and mostly helpful** — it presses the part down. This lulls designers into
   under-clamping.
2. **The torque is about the drill axis**, and it tries to spin the part. Nothing in a milling analysis
   prepares you for this, because a milling cutter's torque is reacted through a much larger contact
   area.
3. **At breakthrough the helpful thrust reverses into a lifting force**, at the same moment the torque
   peaks. `[PRACTICE]` **The two worst things happen simultaneously**, which is why drilling fixtures
   fail at the end of the hole rather than the beginning.

### 5. Simple explanation

```
   A DRILL DOES TWO THINGS TO THE PART

   1. PUSHES DOWN — the THRUST force
              ║
              ▼
        ▓▓▓▓▓▓▓▓▓▓▓
        ═══════════ locators
      ✓ This HELPS. It seats the part.

   2. TWISTS — the TORQUE
              ↻
        ▓▓▓▓▓▓▓▓▓▓▓
      ✗ This tries to SPIN the part round the
        drill axis. Nothing about gravity or the
        thrust prevents it.
```

And then the hole finishes:

```
   BREAKTHROUGH — THE DANGEROUS MOMENT

   Just before:          At the instant of exit:
        ║                     ║
        ▼ thrust              ║  the last web of
    ▓▓▓▓▓▓▓▓▓             ▓▓▓▓║▓▓▓▓  material is
    ▓▓▓▓▓▓▓▓▓             ▓▓▓  ▓▓▓   thin and weak
    ▓▓▓▓▓▓▓▓▓             ▓▓▓  ▓▓▓
                             ▲
                             │ the drill's helix
                             │ SCREWS ITSELF IN
                             │ like a woodscrew
                             │ and PULLS THE PART UP

   ✗ The helpful downward thrust becomes a LIFTING
     force
   ✗ Torque SPIKES as the drill grabs
   ✗ Both happen AT THE SAME INSTANT
```

That is the load case a drilling fixture must be designed for — not the comfortable steady thrust that
occupies 95% of the cycle.

### 6. Engineering explanation

**THRUST FORCE AND TORQUE**

`[GUIDE]` The standard empirical forms, from L0.4:

```
   THRUST FORCE
     F_thrust ≈ K_f · d · f            (approximate)
   or, in the fuller form used here:
     F_thrust ≈ k_c · (d/2) · f · C_f

   TORQUE
     M ≈ K_m · d² · f

   where  d = drill diameter (mm)
          f = feed per revolution (mm/rev)
          K_f, K_m = material constants
```

`[GUIDE]` Indicative constants for a sharp twist drill, to be confirmed against tooling data:

| Material | K_f (N/mm·mm/rev) | K_m (N·mm/mm²·mm/rev) |
|---|---|---|
| Aluminium | 40–70 | 30–60 |
| Cast iron | 70–110 | 60–100 |
| Mild steel | 110–160 | 100–160 |
| EN8 / medium carbon | 140–190 | 130–200 |
| Stainless steel | 180–250 | 170–260 |

**These are guideline ranges for design estimation. A dull drill can double both.** That is not a
marginal effect and it must be allowed for — see the dynamic factor discussion below.

**THE THREE LOAD EFFECTS ON THE PART**

```
   1. AXIAL THRUST — downward, helpful
        F_thrust presses the part onto its locators
        ✓ Adds to the normal force
        ✓ Improves friction
        ✗ BUT can bend a thin or unsupported part
        ✗ AND reverses at breakthrough

   2. TORQUE ABOUT THE DRILL AXIS
        M tries to rotate the part about the HOLE's
        axis.
        Resisted by:
          - friction under the clamps, and
          - any anti-rotation feature (a stop, a pin)

        ┌──────────────────────────────────────────┐
        │ FRICTION RESISTS TORQUE THROUGH A MOMENT │
        │ ARM. A clamp close to the hole resists   │
        │ almost nothing. A clamp far from the     │
        │ hole resists much more.                  │
        │                                          │
        │ M_resist = μ · F_clamp · r               │
        │                                          │
        │ THIS IS THE OPPOSITE OF THE INTUITION    │
        │ THAT A CLAMP SHOULD BE NEAR THE CUT.     │
        └──────────────────────────────────────────┘

   3. MOMENT ABOUT A HORIZONTAL AXIS
        If the hole is offset from the clamp/locator
        centroid, the thrust produces a tipping
        moment.
        M_tip = F_thrust × e
        where e = offset of the hole from the support
                  centroid
```

**THE BREAKTHROUGH SPIKE — THE GOVERNING EVENT**

```
   THRUST AND TORQUE THROUGH THE HOLE

   force │
         │     ╱▔▔▔▔▔▔▔▔▔▔▔▔▔╲    ← steady drilling
         │    ╱                ╲
         │   ╱                  ╲╱╲  ← BREAKTHROUGH
         │  ╱                      ╲    SPIKE
         │ ╱                        ╲
         └─────────────────────────────► depth
          entry      steady        exit

   WHAT HAPPENS AT EXIT:
     1. The remaining material under the drill point
        becomes a thin, weak web.
     2. That web can no longer support the thrust in
        compression — it deflects and tears rather
        than being cut.
     3. The drill's cutting edges GRAB, because the
        chip thickness suddenly becomes irregular.
     4. TORQUE SPIKES — commonly 1.5-2.5× the steady
        value [GUIDE].
     5. The drill's helix acts as a SCREW THREAD in
        the partially formed hole and PULLS THE DRILL
        (and the part with it) UPWARD.
     6. On a thin part the exit burr forms, adding a
        further irregular load.
```

`[PRACTICE]` **This is why a drilling fixture must be designed for an upward force even though drilling
is nominally a downward operation.** The magnitude of the lifting force is difficult to predict
analytically; the practical approach is to require the clamps to resist a specified fraction of the
thrust acting upward.

`[GUIDE]` A commonly used design basis is to require the clamping system to resist an **upward force of
0.3–0.5 × the steady thrust** at breakthrough, with the higher figure for through-holes in thin
material, deep holes, and where drills may be allowed to dull. **This is a design guideline, not a
measured universal value, and must be confirmed where the consequence of failure is high.**

**WHY THE TORQUE MATTERS MORE THAN PEOPLE EXPECT**

```
   A WORKED INTUITION

   Ø12 drill in mild steel, f = 0.20 mm/rev
     K_m = 130 (mid-range)
     M = 130 × 12² × 0.20
       = 130 × 144 × 0.20
       = 3,744 N·mm  ≈ 3.74 N·m

   That sounds small. Now resist it with friction:

   Two clamps at r = 60 mm from the hole, μ = 0.15:
     M_resist = μ · F_clamp,total · r
     3,744 = 0.15 × F × 60
     F = 3,744 / 9 = 416 N total

   ✓ Easily achieved. Fine.

   NOW MOVE THE CLAMPS TO r = 15 mm:
     3,744 = 0.15 × F × 15
     F = 3,744 / 2.25 = 1,664 N total
     → 4× the clamp force for the same torque.

   AND APPLY THE BREAKTHROUGH FACTOR OF 2.0:
     F = 3,328 N at r = 15 mm

   ┌──────────────────────────────────────────────┐
   │ CLAMP POSITION MATTERS AS MUCH AS CLAMP      │
   │ FORCE WHEN RESISTING TORQUE.                 │
   │                                              │
   │ THE MOMENT ARM IS LINEAR: DOUBLE THE RADIUS, │
   │ HALVE THE REQUIRED FORCE.                    │
   └──────────────────────────────────────────────┘
```

> **This is the same 1/r relationship as the locator spread in L1.3.1** and the alignment length in
> L1.2.4. It keeps recurring because it is the same geometry: **anything resisting a rotation benefits
> linearly from being further from the axis.**

**ANTI-ROTATION — THE POSITIVE SOLUTION**

Exactly as with sliding, the reliable answer to rotation is a positive feature, not friction:

```
   ✗ FRICTION ONLY              ✓ POSITIVE ANTI-ROTATION

     ↻ M                          ↻ M
   ┌──────┐                     ┌──────┐▐ ← stop
   │ PART │                     │ PART │
   └──────┘                     └──────┘
   held by clamp friction       the stop takes the
   alone — depends on μ,        moment directly:
   which coolant halves         R = M / r

   Required clamp force         Required clamp force
   is HIGH and uncertain        is only what is needed
                                to prevent LIFTING
```

**THE FIXTURE FEATURES DRILLING NEEDS**

| Feature | Purpose | Note |
|---|---|---|
| **Drill bush** | Guides the drill; prevents wander on an uneven or sloping surface | Hardened, replaceable; L14 covers jig bushes fully |
| **Support directly under the exit** | Prevents the part bending under thrust; reduces the exit burr | The most commonly omitted feature |
| **Clearance under the exit** | Lets the drill break through and the chip escape | Conflicts with the above — see below |
| **Anti-rotation stop** | Takes the torque positively | Sized for the breakthrough torque |
| **Clamps rated for uplift** | Resists the breakthrough lifting force | 0.3–0.5 × thrust `[GUIDE]` |
| **Chip escape route** | Drilling chips are long and stringy | Especially for deep holes |

> **The support-versus-clearance conflict is the characteristic drilling fixture problem**, and it has a
> standard solution:
>
> ```
>    ✗ NO SUPPORT              ✗ SOLID SUPPORT
>      ▓▓▓▓▓▓▓▓▓                 ▓▓▓▓▓▓▓▓▓
>      ═══   ═══                 ═════════
>         gap                    drill hits the
>      part bends;               fixture; no
>      big exit burr             clearance
>
>    ✓ SUPPORT WITH A CLEARANCE HOLE
>      ▓▓▓▓▓▓▓▓▓
>      ════╗ ╔════   support right up to the hole,
>          ║ ║       with a clearance hole slightly
>          ╚═╝       larger than the drill
>
>      ✓ Part supported where it matters
>      ✓ Drill has somewhere to go
>      ✓ Chips have an escape route
>      [PRACTICE] Clearance hole typically
>      1-3 mm larger than the drill diameter; too
>      large and the support is lost, too small and
>      chips pack.
> ```

### 7. Terminology

| Term | Definition |
|---|---|
| **Thrust force** | Axial force pushing the drill into the material |
| **Torque** | Moment about the drill axis, resisted by the fixture |
| **Breakthrough** | The moment the drill exits the far side |
| **Breakthrough spike** | Transient increase in torque and reversal of thrust at exit |
| **Web** | The thin remaining material under the drill point near exit |
| **Drill bush** | Hardened guide bush locating and guiding the drill |
| **Exit burr** | Material displaced rather than cut at the exit |
| **Anti-rotation feature** | A stop or pin resisting the torque positively |
| **Feed per revolution (f)** | Axial advance per spindle revolution |
| **Peck drilling** | Interrupted feed cycle to clear chips |
| **Spot drilling** | Short initial drill to establish position |
| **Wander / walk** | Drill deviating from position on entry |

### 8. Principle

> **DRILLING'S GOVERNING LOAD IS THE BREAKTHROUGH, NOT THE STEADY CUT.** At exit the helpful downward
> thrust reverses into a lifting force at the same instant the torque spikes — the two worst events
> coincide.
> **A DRILL TWISTS THE PART, AND FRICTION RESISTS TORQUE THROUGH A MOMENT ARM.** A clamp close to the
> hole resists almost nothing; `M_resist = μ · F_clamp · r`. **Clamp position matters as much as clamp
> force.**
> **DESIGN A DRILLING FIXTURE FOR UPLIFT** — 0.3–0.5 × thrust `[GUIDE]` — even though drilling is
> nominally a downward operation.
> **SUPPORT DIRECTLY UNDER THE EXIT, WITH A CLEARANCE HOLE.** It is the most commonly omitted feature
> and it controls both part bending and exit burr.

### 9. Industrial application

**The drilling fixture checklist in practice**

```
   FOR EVERY DRILLED HOLE, ASK:  [PRACTICE]

   1. WHAT IS THE TORQUE, AND WHAT RESISTS IT?
        → if the answer is "friction", check the
          moment arm and apply the breakthrough factor
        → prefer a positive anti-rotation stop

   2. WHERE IS THE HOLE RELATIVE TO THE SUPPORTS?
        → an offset hole produces a tipping moment
        → M_tip = F_thrust × e

   3. IS THERE SUPPORT UNDER THE EXIT?
        → if not, the part will bend and burr
        → if solid, the drill will hit it

   4. WHAT HAPPENS AT BREAKTHROUGH?
        → can the clamps hold the part DOWN?
        → 0.3-0.5 × thrust upward [GUIDE]

   5. WHERE DO THE CHIPS GO?
        → drilling chips are long and stringy
        → deep holes need pecking

   6. DOES THE DRILL NEED A BUSH?
        → sloping or uneven entry surface: YES
        → position accuracy critical: YES
        → flat machined surface, spot drilled: often
          not
```

**A failure mode worth recognising** `[EX-ASSUMED]` illustrative:

```
SITUATION
  Six Ø10 holes drilled through a 12 mm steel plate.
  Fixture: two clamps, both placed close to the hole
  pattern for "maximum support near the cut".

SYMPTOM
  Occasional parts found rotated by 2-4° in the
  fixture, with the last hole drilled badly out of
  position and the drill broken.

DIAGNOSIS
  The clamps were at r ≈ 20 mm from the hole centres.
  Steady torque for Ø10 at 0.18 mm/rev in mild steel:
    M = 130 × 100 × 0.18 = 2,340 N·mm

  Breakthrough factor 2.0 → 4,680 N·mm

  Resisting friction, μ = 0.12 with coolant,
  clamp force 2 × 1,500 N = 3,000 N:
    M_resist = 0.12 × 3,000 × 20 = 7,200 N·mm

  Ratio = 7,200 / 4,680 = 1.54

  → Adequate ON PAPER, but with a factor of only
    1.54 against a load whose peak is uncertain and
    a μ that varies with coolant and surface finish.
    Some parts slipped.

CORRECTIVE
  Move the clamps to r = 55 mm:
    M_resist = 0.12 × 3,000 × 55 = 19,800 N·mm
    Ratio = 4.23  ✓
  AND fit a positive anti-rotation stop, after which
  the clamps only need to resist uplift.

THE LESSON
  "PUT THE CLAMP NEAR THE CUT" IS GOOD ADVICE FOR
  RESISTING BENDING AND CHATTER, AND BAD ADVICE FOR
  RESISTING TORQUE. The two requirements pull in
  opposite directions and must be reconciled
  deliberately, not by instinct.
```

### 10. Design rules
- **R1** — Design for the **breakthrough condition**, not the steady cut `[PRACTICE]`.
- **R2** — Require the clamps to resist an **uplift of 0.3–0.5 × thrust** at breakthrough `[GUIDE]`.
- **R3** — Apply a **breakthrough torque factor of 1.5–2.5** `[GUIDE]`.
- **R4** — Fit a **positive anti-rotation feature**; do not rely on clamp friction for torque.
- **R5** — Where friction must resist torque, **maximise the moment arm** — `M_resist = μ·F·r`.
- **R6** — Provide **support directly under the exit**, with a **clearance hole 1–3 mm larger than the
  drill** `[PRACTICE]`.
- **R7** — Check the **tipping moment** from holes offset from the support centroid.
- **R8** — Provide a **chip escape route**; specify pecking for deep holes.
- **R9** — Fit a **hardened, replaceable drill bush** where the entry surface is sloping or uneven, or
  where position accuracy is critical.
- **R10** — Allow for a **dull drill** — thrust and torque can double `[GUIDE]`.
- **R11** — Reconcile the conflict between **clamps near the cut** (bending, chatter) and **clamps far
  from the hole** (torque) explicitly.

### 11. Rules of thumb
- **The breakthrough governs**, not the steady cut.
- **The two worst things happen at the same instant**: thrust reverses and torque spikes.
- Design for uplift **0.3–0.5 × thrust** `[GUIDE]`.
- Breakthrough torque factor **1.5–2.5** `[GUIDE]`.
- **A dull drill can double both thrust and torque.**
- **M_resist = μ·F·r** — clamp position matters as much as clamp force.
- **Double the radius, halve the required clamp force.**
- **Support under the exit with a clearance hole 1–3 mm oversize** `[PRACTICE]`.
- **Torque ∝ d²** — a Ø20 drill produces four times the torque of a Ø10 at the same feed.
- **Thrust ∝ d** — only twice, for the same diameter change.
- **"Clamp near the cut" is wrong for torque.**

### 12. Formulae

**Thrust and torque** `[GUIDE]`
```
F_thrust ≈ K_f · d · f
M        ≈ K_m · d² · f
```

**Breakthrough design values**
```
F_uplift,design = C_up · F_thrust · SF
   C_up = 0.3 – 0.5   [GUIDE]

M_design = K_bt · M · SF
   K_bt = 1.5 – 2.5   [GUIDE]
```

**Torque resisted by clamp friction**
```
M_resist = μ · F_clamp,total · r
→ F_clamp,total ≥ M_design / (μ · r)
```

**Torque resisted by a positive stop**
```
R_stop = M_design / r_stop
```

**Tipping moment from an offset hole**
```
M_tip = F_thrust · e
Resisted by:  M_stabilising = (W + ΣF_clamp) · a
Require:  M_stabilising / M_tip ≥ 2.0   [PRACTICE]
```

**Clamp force to resist uplift**
```
F_clamp ≥ (F_uplift,design) / n
```

| Variable | Meaning | Unit |
|---|---|---|
| K_f | Thrust constant | N/(mm·mm/rev) |
| K_m | Torque constant | N·mm/(mm²·mm/rev) |
| d | Drill diameter | mm |
| f | Feed per revolution | mm/rev |
| C_up | Uplift fraction at breakthrough | — |
| K_bt | Breakthrough torque factor | — |
| r | Moment arm from the hole axis | mm |
| e | Hole offset from the support centroid | mm |

### 13. Worked numerical example

**Problem:** A steel plate is drilled with four holes on a VMC. Determine the thrust and torque, the
breakthrough design loads, whether clamp friction alone can resist the torque, the effect of clamp
position, the required clamp force for uplift, the tipping moment from the outermost hole, and the
benefit of a positive anti-rotation stop.

```
GIVEN:
  DRILLING                                       [PROJ]
    Material            mild steel
    K_f                 = 135 N/(mm·mm/rev)
                          [GUIDE, mild steel 110-160]
    K_m                 = 130 N·mm/(mm²·mm/rev)
                          [GUIDE, mild steel 100-160]
    Drill diameter d    = 16 mm
    Feed f              = 0.22 mm/rev
    Plate thickness     = 20 mm (through-holes)

  BREAKTHROUGH FACTORS                           [GUIDE]
    Uplift fraction C_up = 0.40
    Torque factor K_bt   = 2.0

  FIXTURE                                        [PROJ]
    Part mass           = 7.5 kg
    Two clamps, each at r = 35 mm from the nearest
      hole axis
    Coefficient of friction, with coolant
      μ                 = 0.12  [GUIDE]
    Outermost hole offset from the support
      centroid, e       = 130 mm
    Support centroid to the tipping edge, a = 95 mm
    Safety factor SF    = 2.5   [PRACTICE]

REQUIRED:
  (a) Steady thrust force and torque
  (b) Breakthrough design torque and design uplift
  (c) Clamp force needed for the torque by friction
      alone at r = 35 mm
  (d) The same at r = 90 mm, and the improvement
  (e) Clamp force needed to resist the breakthrough
      uplift
  (f) The governing clamp force requirement
  (g) Tipping moment from the outermost hole and its
      stability ratio
  (h) Stop reaction if a positive anti-rotation stop
      is fitted at r = 90 mm, and the resulting clamp
      requirement
  (i) Engineering conclusion

ASSUMPTION:
  1. K_f and K_m are GUIDELINE mid-range values for
     mild steel with a sharp drill. A DULL DRILL CAN
     DOUBLE BOTH, and these values MUST BE CONFIRMED
     against tooling data or measurement where the
     margin is tight. [GUIDE]
  2. Uplift at breakthrough taken as 0.40 × steady
     thrust. This is a DESIGN GUIDELINE, not a
     measured universal value; the true figure depends
     on drill geometry, material ductility and
     thickness. [GUIDE]
  3. Breakthrough torque factor 2.0 from the 1.5-2.5
     guideline range. [GUIDE]
  4. Only ONE hole is drilled at a time, so torque and
     thrust are not superimposed across holes.
  5. μ = 0.12 with coolant present. Coolant roughly
     halves the dry value. [GUIDE]
  6. Clamp friction acts at the clamp radius; the
     locating pads also contribute friction but are
     CONSERVATIVELY IGNORED here. [PRACTICE]

FORMULA:
  (a) F_thrust = K_f·d·f ; M = K_m·d²·f
  (b) M_design = K_bt·M·SF ; F_up = C_up·F_thrust·SF
  (c) F_clamp = M_design/(μ·r)
  (g) M_tip = F_thrust·e ; ratio = (W+ΣF)·a / M_tip
  (h) R_stop = M_design/r_stop

UNIT CONVERSION:
  Forces N, lengths mm, moments N·mm.
  Part weight W = 7.5 × 9.81 = 73.6 N

SUBSTITUTION AND CALCULATION:

  (a) STEADY THRUST AND TORQUE

      F_thrust = K_f · d · f
               = 135 × 16 × 0.22
               = 475.2 N

      M = K_m · d² · f
        = 130 × 16² × 0.22
        = 130 × 256 × 0.22
        = 7,321.6 N·mm
        = 7.32 N·m

  (b) BREAKTHROUGH DESIGN VALUES

      DESIGN TORQUE:
        M_design = K_bt · M · SF
                 = 2.0 × 7,321.6 × 2.5
                 = 36,608 N·mm

      DESIGN UPLIFT:
        F_up = C_up · F_thrust · SF
             = 0.40 × 475.2 × 2.5
             = 475.2 N

        (Note the coincidence: 0.40 × 2.5 = 1.0, so
         the design uplift equals the steady thrust.
         Convenient but not general.)

  (c) CLAMP FORCE FOR TORQUE BY FRICTION, r = 35 mm

        F_clamp,total = M_design / (μ · r)
                      = 36,608 / (0.12 × 35)
                      = 36,608 / 4.2
                      = 8,716.2 N total

        Per clamp (2 clamps):
                      = 4,358.1 N each

      → Large but not impossible. Note it is entirely
        driven by the small moment arm.

  (d) CLAMP FORCE FOR TORQUE, r = 90 mm

        F_clamp,total = 36,608 / (0.12 × 90)
                      = 36,608 / 10.8
                      = 3,389.6 N total
                      = 1,694.8 N each

      IMPROVEMENT:
        8,716.2 / 3,389.6 = 2.571 ×
        (which equals 90/35 = 2.571 ✓ — LINEAR in r)

      → Moving the clamps out by 55 mm reduced the
        required force by a factor of 2.571, at ZERO
        cost.

  (e) CLAMP FORCE FOR BREAKTHROUGH UPLIFT

        F_clamp,total ≥ F_up = 475.2 N
        Per clamp     = 237.6 N

      → Small. Uplift is NOT the governing
        requirement here.

  (f) GOVERNING REQUIREMENT

        Torque at r = 35 mm : 4,358.1 N per clamp
        Torque at r = 90 mm : 1,694.8 N per clamp
        Uplift              :   237.6 N per clamp

      → TORQUE GOVERNS, BY A FACTOR OF 7.1 OVER
        UPLIFT (at r = 90 mm), and 18.3× at r = 35 mm.

      This is the opposite of what most people expect
      from an operation whose obvious force is
      downward.

  (g) TIPPING MOMENT FROM THE OUTERMOST HOLE

        M_tip = F_thrust · e
              = 475.2 × 130
              = 61,776 N·mm

      Stabilising moment, using the r = 90 mm clamp
      force of 3,389.6 N total:

        M_stab = (W + ΣF_clamp) · a
               = (73.6 + 3,389.6) × 95
               = 3,463.2 × 95
               = 329,004 N·mm

        Stability ratio = 329,004 / 61,776
                        = 5.33

      ✓ PASS — comfortably above the 2.0 practice
        minimum.

      NOTE: the thrust here is pressing DOWN, so it is
      resisted by the supports rather than tending to
      tip the part off them in most geometries. This
      check matters when the hole is outboard of the
      support footprint, which is the case assumed.

  (h) WITH A POSITIVE ANTI-ROTATION STOP AT r = 90 mm

        R_stop = M_design / r_stop
               = 36,608 / 90
               = 406.8 N

      → The stop carries 406.8 N. Trivial for a
        hardened dowel or button.

      The clamps now only resist UPLIFT:
        F_clamp,total = 475.2 N
        Per clamp     = 237.6 N

      IMPROVEMENT vs friction at r = 90 mm:
        1,694.8 / 237.6 = 7.13 ×
      IMPROVEMENT vs friction at r = 35 mm:
        4,358.1 / 237.6 = 18.34 ×

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Steady thrust            │ 475.2 N           │
  │     Steady torque            │ 7,321.6 N·mm      │
  │ (b) Design torque            │ 36,608 N·mm       │
  │     Design uplift            │ 475.2 N           │
  │ (c) Clamp/torque at r=35     │ 4,358.1 N each    │
  │ (d) Clamp/torque at r=90     │ 1,694.8 N each    │
  │     Improvement              │ 2.571 × (linear)  │
  │ (e) Clamp/uplift             │ 237.6 N each      │
  │ (f) GOVERNING                │ TORQUE, 7.1× over │
  │                              │ uplift at r=90    │
  │ (g) Tipping moment           │ 61,776 N·mm       │
  │     Stability ratio          │ 5.33 ✓            │
  │ (h) Stop reaction at r=90    │ 406.8 N           │
  │     Clamp then required      │ 237.6 N each      │
  │     Improvement vs friction  │ 7.13× / 18.34×    │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  SF = 2.5 applied to both the breakthrough torque and
  the uplift, on top of the breakthrough factors
  themselves. This is deliberate layering: K_bt = 2.0
  accounts for a KNOWN physical peak, and SF = 2.5
  covers uncertainty in K_m, in μ, and in drill
  condition. Given that a dull drill can double the
  torque, this combined margin is not excessive.

PASS/FAIL:
  ✓ PASS — with a positive anti-rotation stop at
    r = 90 mm (406.8 N) and clamps at 237.6 N each.
  ✓ PASS — friction-only at r = 90 mm, but requiring
    1,694.8 N per clamp.
  ⚠ MARGINAL — friction-only at r = 35 mm, requiring
    4,358.1 N per clamp, which is a large force to
    apply to a plate and risks marking it.
  ✓ PASS — tipping, ratio 5.33.

ENGINEERING CONCLUSION:
  1. TORQUE GOVERNS A DRILLING FIXTURE, NOT THRUST —
     BY A FACTOR OF SEVEN HERE.
     This is the central and counter-intuitive result.
     Drilling looks like a downward operation, the
     thrust helpfully presses the part onto its
     locators, and the instinct is that clamping is
     barely needed. In fact the uplift requirement was
     237.6 N per clamp while the torque requirement
     was 1,694.8 N per clamp even with a generous
     moment arm — SEVEN TIMES GREATER.
     A DESIGNER WHO SIZES A DRILLING FIXTURE ON THRUST
     WILL UNDER-CLAMP IT BY ROUGHLY AN ORDER OF
     MAGNITUDE.

  2. CLAMP POSITION IS AS POWERFUL AS CLAMP FORCE,
     AND IT IS FREE.
     Moving the clamps from 35 mm to 90 mm reduced the
     required force by 2.571× — exactly the ratio of
     the radii, because M_resist = μ·F·r is linear in
     r. No extra parts, no bigger clamps, just placing
     the same clamps further from the hole.
     THIS IS THE THIRD TIME THE SAME 1/r GEOMETRY HAS
     APPEARED: locator spread in L1.3.1, alignment
     feature length in L1.2.4, and now clamp radius.
     ANYTHING RESISTING A ROTATION BENEFITS LINEARLY
     FROM DISTANCE FROM THE AXIS. It is worth
     internalising as a general habit.

  3. "CLAMP NEAR THE CUT" IS WRONG HERE, AND THE
     CONFLICT MUST BE RESOLVED DELIBERATELY.
     The usual advice to clamp close to the cutting
     zone is sound for resisting bending and chatter,
     and it is exactly wrong for resisting torque. On
     a drilling fixture the two requirements pull in
     opposite directions. The resolution is usually to
     put a SUPPORT near the hole (to prevent bending)
     and the CLAMPS further out (for the moment arm) —
     which is a different answer from putting the
     clamp near the hole and hoping it does both jobs.

  4. THE POSITIVE STOP WINS AGAIN, BY 7 TO 18 TIMES.
     A hardened stop at r = 90 mm carries 406.8 N —
     trivial — and reduces the clamp requirement to
     the uplift figure of 237.6 N. Against
     friction-only at the original clamp position,
     that is an 18.3× reduction.
     THE PATTERN IS NOW ESTABLISHED ACROSS THREE
     LESSONS: sliding (38× in L1.3.1), rotating in
     plan, and now torsion. IN EVERY CASE A POSITIVE
     FEATURE BEATS FRICTION BY AN ORDER OF MAGNITUDE
     OR MORE, AND IT REMOVES μ — THE MOST UNCERTAIN
     VARIABLE — FROM THE CALCULATION ENTIRELY.

  5. THE DULL DRILL IS THE UNQUANTIFIED RISK.
     Every number here assumes a sharp drill. A dull
     one can double both thrust and torque, which
     would take the friction-only requirement at
     r = 35 mm to over 8,700 N per clamp. The layered
     factors (K_bt = 2.0 and SF = 2.5) cover this, but
     only just, and only because they were applied
     together. I WOULD NOT REDUCE EITHER OF THEM
     WITHOUT KNOWING THE TOOL-CHANGE DISCIPLINE ON
     THE MACHINE.

SENSITIVITY NOTE:
  Ranked by influence:
    1. PRESENCE OF A POSITIVE ANTI-ROTATION STOP —
       7 to 18× on clamp force. As in every previous
       lesson, this is a decision rather than a
       variable, and it dominates everything else.
    2. CLAMP RADIUS r — linear and free. 35 mm to
       90 mm gave 2.571×.
    3. DRILL DIAMETER — torque goes as d², so a Ø20
       drill in the same fixture would produce
       (20/16)² = 1.56× the torque. A fixture designed
       for Ø16 is NOT automatically adequate for Ø20.
    4. DRILL CONDITION — up to 2× on both thrust and
       torque, and entirely outside the designer's
       control. This is what the layered factors are
       for.
    5. COEFFICIENT OF FRICTION — decisive in the
       friction-only case, irrelevant once a stop is
       fitted.
    6. UPLIFT FRACTION C_up — did not govern here, so
       insensitive. It WOULD govern on a thin part
       where torque is small and the exit is close to
       the entry.
```

### 14. Engineering assumptions
- K_f and K_m are guideline mid-range values for mild steel with a **sharp** drill `[GUIDE]`; a dull
  drill can double both.
- Uplift at breakthrough taken as 0.40 × steady thrust — a design guideline, not a measured universal
  value `[GUIDE]`.
- Breakthrough torque factor 2.0 from the 1.5–2.5 guideline range `[GUIDE]`.
- One hole drilled at a time; loads not superimposed.
- μ = 0.12 with coolant `[GUIDE]`.
- Locating pad friction conservatively ignored `[PRACTICE]`.

### 15. Diagram

```
     DRILLING — THRUST, TORQUE AND BREAKTHROUGH
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE TWO LOADS A DRILL APPLIES

        ║ ↻ TORQUE — tries to SPIN the part
        ║   M = K_m · d² · f
        ▼   THRUST — presses the part DOWN
     ▓▓▓▓▓▓▓▓▓▓▓   F = K_f · d · f
     ═══════════

   ✓ Thrust HELPS (until breakthrough)
   ✗ Torque is resisted only by friction or a stop

  ──────────────────────────────────────────────────────────

  THE BREAKTHROUGH — THE TWO WORST THINGS AT ONCE

   force │      ╱▔▔▔▔▔▔▔▔▔╲
         │     ╱           ╲╱╲ ← SPIKE
         │    ╱               ╲
         └──────────────────────► depth
           entry   steady    EXIT

   AT EXIT:
     ▓▓▓▓║▓▓▓▓   the last web is thin and weak
     ▓▓▓  ▓▓▓    the drill GRABS
        ▲        the helix acts as a SCREW
        │        and PULLS THE PART UP
        │
     ✗ TORQUE SPIKES 1.5-2.5× [GUIDE]
     ✗ THRUST REVERSES to LIFT, 0.3-0.5× [GUIDE]
     ✗ BOTH AT THE SAME INSTANT

   ┌──────────────────────────────────────────────┐
   │ DESIGN A DRILLING FIXTURE FOR UPLIFT — EVEN  │
   │ THOUGH DRILLING IS A DOWNWARD OPERATION.     │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE COUNTER-INTUITIVE RESULT: TORQUE GOVERNS

   uplift requirement    █ 237.6 N/clamp
   torque requirement    ███████ 1,694.8 N/clamp
     (at r = 90 mm)

   TORQUE IS 7.1× THE UPLIFT REQUIREMENT.

   ┌──────────────────────────────────────────────┐
   │ SIZE A DRILLING FIXTURE ON THRUST AND YOU    │
   │ WILL UNDER-CLAMP IT BY AN ORDER OF MAGNITUDE.│
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  CLAMP POSITION — M_resist = μ · F · r

    r = 35 mm                r = 90 mm
    ┌───────┐                ┌───────┐
    │  ▐●▌  │ clamps         ▐   ●   ▌ clamps
    │   ↻   │ close          │   ↻   │ far out
    └───────┘                └───────┘
    4,358 N/clamp            1,695 N/clamp

    IMPROVEMENT 2.571× = 90/35 — EXACTLY LINEAR

   ┌──────────────────────────────────────────────┐
   │ "CLAMP NEAR THE CUT" IS RIGHT FOR BENDING    │
   │ AND WRONG FOR TORQUE.                        │
   │                                              │
   │ RESOLVE IT: SUPPORT near the hole,           │
   │             CLAMPS far from it.              │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE SAME 1/r GEOMETRY, THIRD APPEARANCE

     L1.2.4  alignment feature length  e = D·δ/L
     L1.3.1  plan locator spread       R = M/s
     L1.3.3  clamp radius              F = M/(μ·r)

   ┌──────────────────────────────────────────────┐
   │ ANYTHING RESISTING A ROTATION BENEFITS       │
   │ LINEARLY FROM DISTANCE FROM THE AXIS.        │
   │ IT IS ALWAYS FREE. TAKE IT EVERY TIME.       │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE SUPPORT-VERSUS-CLEARANCE CONFLICT

   ✗ NO SUPPORT        ✗ SOLID          ✓ SUPPORT WITH
                          SUPPORT          CLEARANCE HOLE
     ▓▓▓▓▓▓▓▓▓          ▓▓▓▓▓▓▓▓▓        ▓▓▓▓▓▓▓▓▓
     ═══   ═══          ═════════        ════╗ ╔════
        gap             drill hits           ║ ║
     part bends;        the fixture          ╚═╝
     BIG EXIT BURR                       ✓ supported
                                         ✓ drill clears
                                         ✓ chips escape

   [PRACTICE] clearance hole 1-3 mm larger than the
   drill. Too large loses the support; too small
   packs with chips.

  ──────────────────────────────────────────────────────────

  ANTI-ROTATION — THE POSITIVE ANSWER, AGAIN

   FRICTION ONLY            POSITIVE STOP
   4,358 N/clamp (r=35)     406.8 N at the stop
   1,695 N/clamp (r=90)     + 237.6 N/clamp (uplift)

   IMPROVEMENT 7.1× to 18.3×

   ┌──────────────────────────────────────────────┐
   │ THE PATTERN ACROSS THREE LESSONS:            │
   │   SLIDING  (L1.3.1)  friction loses by 38×   │
   │   ROTATION IN PLAN   friction loses          │
   │   TORSION  (L1.3.3)  friction loses by 7-18× │
   │                                              │
   │ A POSITIVE FEATURE ALWAYS WINS, AND IT       │
   │ REMOVES μ FROM THE ANSWER.                   │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-5420 — DRILLING LOAD CASE
STANDARD: ASME Y14.5-2018
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: DESIGNED FOR Ø16 MAX DRILL AT 0.22 mm/rev IN
        MILD STEEL. DESIGN TORQUE 36.6 N·m INCLUDING A
        BREAKTHROUGH FACTOR OF 2.0 AND A SAFETY FACTOR
        OF 2.5. TORQUE IS TAKEN BY ANTI-ROTATION STOP
        ITEM 9, NOT BY CLAMP FRICTION.

NOTE 2: TORQUE VARIES AS THE SQUARE OF DRILL DIAMETER.
        THIS FIXTURE IS NOT VALIDATED FOR DRILLS LARGER
        THAN Ø16. A Ø20 DRILL WOULD PRODUCE 1.56× THE
        DESIGN TORQUE.

NOTE 3: CLAMPS ITEMS 5 AND 6 ARE POSITIONED 90 mm FROM
        THE HOLE PATTERN CENTRE. THIS RADIUS IS A
        FUNCTIONAL REQUIREMENT — REQUIRED CLAMP FORCE
        IS INVERSELY PROPORTIONAL TO IT. DO NOT MOVE
        THE CLAMPS INBOARD.

NOTE 4: SUPPORT PLATE ITEM 12 HAS Ø19 CLEARANCE HOLES
        BENEATH EACH DRILLED POSITION. THE SUPPORT
        MUST REMAIN IN CONTACT WITH THE COMPONENT
        AROUND EACH HOLE TO CONTROL THE EXIT BURR.

NOTE 5: CLAMPS MUST RESIST AN UPWARD FORCE OF 475 N
        TOTAL AT BREAKTHROUGH. DO NOT SUBSTITUTE
        GRAVITY-DEPENDENT OR FRICTION-ONLY HOLDING.
```

Note 2 is the one that prevents the most likely future failure: someone using the fixture for a bigger
drill because it physically fits.

### 17. CAD workflow
1. Model the **drill and its full depth of travel**, including breakthrough into the support
2. Model the **support plate with clearance holes** and verify they align with the drill positions
3. Check the **clearance hole size** — 1–3 mm over the drill diameter
4. Place **clamps at the largest practical radius** from the hole pattern, and dimension the radius as a
   driven dimension
5. Place the **anti-rotation stop** and check its reaction against the design torque
6. Verify the **chip escape path** from each hole
7. Model any **drill bush** and confirm the drill enters it cleanly

`[PRACTICE]` Step 1 catches a very common error — a support plate with no clearance hole under a
through-hole. It is obvious in a section view and invisible in a shaded assembly.

### 18. GD&T application

```
STANDARD: ASME Y14.5-2018

  Drill bush position — this directly controls the
  hole position in the part:

  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.02 │ A │ B │ C │          │
  └──────────────────────────────────┘

  Support plate clearance holes — position is
  NON-CRITICAL (they only need to clear), so a
  generous tolerance is correct:

  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.5 │ A │ B │ C │           │
  └──────────────────────────────────┘

  ┌────────────────────────────────────────────┐
  │ NOTE THE DELIBERATE ASYMMETRY. The bush is │
  │ tight because it positions the hole; the   │
  │ clearance hole is loose because it only    │
  │ needs to not be in the way.                │
  │                                            │
  │ TOLERANCING EVERY FEATURE TIGHTLY IS NOT   │
  │ CAREFUL ENGINEERING — IT IS EXPENSIVE AND  │
  │ IT OBSCURES WHICH DIMENSIONS ACTUALLY      │
  │ MATTER.                                    │
  └────────────────────────────────────────────┘
```

### 19. Manufacturing method
Drill bushes are **bought-in hardened standard components** (L0.5.2) pressed into a reamed bore, or
pressed into a liner bush where they will be changed frequently. `[PRACTICE]` Renewable bushes in a
liner are standard practice on high-volume drilling jigs, and the full treatment is at L14.

The anti-rotation stop follows the standard hardened-locator route: machine soft, harden to 58–62 HRC,
fit, grind in position.

`[PRACTICE]` The support plate is usually a **separate, replaceable plate** rather than part of the
fixture body, because its clearance holes will be enlarged by drill breakthrough over time and it is a
consumable.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Drill bush position | CMM | ±0.02 mm |
| Bush bore size | Plug gauge | Per bush standard |
| Bush hardness | Portable tester | Per supplier spec |
| Support clearance hole alignment | Visual + pin gauge through | Drill passes freely |
| Support contact around each hole | Feeler gauge | Contact maintained |
| Anti-rotation stop position | CMM | ±0.05 mm |
| Clamp radius from hole pattern | CMM / scale | As drawing |
| Clamp force | Load cell or calibrated torque | Per drawing note |
| Resistance to applied torque | Apply a known torque, indicate for rotation | No movement |

`[PRACTICE]` The last check is the direct verification: apply a torque wrench to a dummy plug in the
hole position and confirm the part does not rotate.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Sizing the fixture on **thrust** and ignoring torque | Under-clamped by ~7× |
| 2 | Clamping **close to the hole** | Small moment arm; large force needed |
| 3 | Relying on **friction** to resist torque | Part spins; drill breaks |
| 4 | Designing for the **steady cut**, not breakthrough | Part lifts at exit |
| 5 | **No support under the exit** | Part bends; large exit burr |
| 6 | **Solid support** with no clearance hole | Drill hits the fixture |
| 7 | Clearance hole **too large** | Support lost where it matters |
| 8 | Assuming a fixture rated for Ø16 suits **Ø20** | Torque ∝ d²; 1.56× more |
| 9 | Ignoring the **dull drill** case | Up to 2× on both loads |
| 10 | **No chip escape**, especially on deep holes | Chip packing; force spikes; drill breakage |
| 11 | No **drill bush** on a sloping or uneven entry | Drill wanders |
| 12 | Tolerancing the **clearance holes tightly** | Unnecessary cost, obscures what matters |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Part rotated in the fixture | Torque exceeded friction | Apply a known torque and observe | Fit an anti-rotation stop; move clamps out | Design rule R4 |
| Part lifted at the end of the hole | Breakthrough uplift | Observe at breakthrough | Increase clamp force | Design for 0.3–0.5 × thrust |
| Large exit burr | No support under the exit | Inspect the support | Add a support with a clearance hole | Design rule R6 |
| Drill broke on the last hole | Part moved during a previous hole | Check part position between holes | Positive anti-rotation | Design rule R4 |
| Hole position wanders | No bush, or uneven entry surface | Check the entry surface | Spot drill; fit a bush | Design rule R9 |
| Forces higher than calculated | Dull drill | Inspect the drill | Replace | Tool-life monitoring |
| Chips packing in a deep hole | No pecking; no escape route | Observe the cycle | Peck cycle; through-coolant | Specify pecking |
| Drill hits the fixture at breakthrough | No clearance hole | Section view review | Add clearance | CAD step 1 |
| Fixture worked for Ø16, fails for Ø20 | Torque ∝ d² | Recalculate | Re-validate or restrict | Note the diameter limit |

### 23. Design checklist
- [ ] Has the **torque** been calculated, and is it resisted positively?
- [ ] Has the **breakthrough torque factor** (1.5–2.5) been applied?
- [ ] Have the clamps been sized for **uplift at breakthrough** (0.3–0.5 × thrust)?
- [ ] Are the clamps at the **largest practical radius** from the hole?
- [ ] Has the conflict between **support near the hole** and **clamps far from it** been resolved?
- [ ] Is there **support directly under the exit**, with a clearance hole 1–3 mm oversize?
- [ ] Has the **tipping moment** from offset holes been checked?
- [ ] Do **chips have an escape route**? Is pecking specified for deep holes?
- [ ] Is a **drill bush** needed for the entry surface or position accuracy?
- [ ] Has the **dull drill** case been allowed for?
- [ ] Is the **maximum drill diameter** stated on the drawing?
- [ ] Are the **clearance holes toleranced loosely**, as they should be?

### 24. Beginner exercise
**E1.3.3-B** — A Ø10 drill is used in mild steel at f = 0.15 mm/rev, with K_f = 135 and K_m = 130.
(a) Calculate the thrust force and the torque.
(b) Two clamps are at r = 40 mm and μ = 0.15. Calculate the total clamp force required to resist the
steady torque by friction alone.
(c) Repeat with the clamps at r = 80 mm and state the improvement factor.
(d) Explain in one sentence why a drilling fixture must resist an upward force.
(e) State what feature should be provided under the exit of a through-hole, and why it needs a clearance
hole.

### 25. Intermediate exercise
**E1.3.3-I** — A cast iron housing is drilled with a Ø20 hole at f = 0.28 mm/rev. Take K_f = 90 and
K_m = 80 `[GUIDE]`. The part weighs 14 kg, there are three clamps at r = 70 mm, μ = 0.12 with coolant.
Use a breakthrough torque factor of 2.0, an uplift fraction of 0.45, and a safety factor of 2.5.
(a) Calculate the steady thrust and torque.
(b) Calculate the design torque and the design uplift.
(c) Calculate the clamp force per clamp required to resist the torque by friction.
(d) Calculate the clamp force per clamp required to resist the uplift.
(e) State which governs, and by what factor.
(f) An anti-rotation stop is fitted at r = 110 mm. Calculate its reaction and the resulting clamp
requirement.
(g) Calculate the improvement factor from fitting the stop.
(h) The same fixture is proposed for a Ø25 drill at the same feed. Calculate the new design torque and
state whether the stop and clamps remain adequate.

### 26. Advanced exercise
**E1.3.3-A** — A steel manifold (mass 18 kg, K_f = 150, K_m = 145 `[GUIDE]`) requires eight holes on one
face: four Ø8 at f = 0.12, two Ø14 at f = 0.20, and two Ø22 at f = 0.30, all through a 25 mm wall. The
hole pattern spans 280 × 190 mm. Three clamps are available. μ = 0.12 with coolant. Breakthrough torque
factor 2.0, uplift fraction 0.40, safety factor 2.5. The largest holes are 145 mm from the pattern
centre.
(i) Calculate the thrust and torque for each of the three drill sizes.
(ii) Identify the governing hole for torque and for uplift, and explain why they may differ.
(iii) Calculate the design torque and design uplift for the governing cases.
(iv) Determine the clamp positions that minimise the required clamp force, and calculate that force for
friction-only restraint.
(v) Calculate the tipping moment produced by the outermost Ø22 hole and the stability ratio, taking the
support centroid to the tipping edge as 120 mm.
(vi) Specify an anti-rotation arrangement, calculate the stop reactions, and state the resulting clamp
requirement.
(vii) The support plate must have clearance holes under all eight positions. State the clearance hole
diameters and explain how you would maintain support around the Ø22 holes.
(viii) Holes are drilled in sequence. Explain why the sequence matters and propose an order, justifying
it.
(ix) The customer asks to add two Ø30 holes to the same fixture. Calculate the new design torque and
state what would have to change.
(x) Write the complete set of drawing notes for this fixture's load case.

### 27. Interview questions
1. *"Drilling pushes the part down onto the fixture. So why does a drilling fixture need strong
   clamps?"*
   **Answer:** Two reasons, and the downward thrust is a distraction from both. The first is torque —
   the drill twists the part about the hole axis, and nothing about the downward thrust prevents that.
   In the example we worked, the torque requirement was about seven times the uplift requirement, so
   sizing on thrust alone under-clamps the fixture by roughly an order of magnitude. The second is that
   the thrust does not stay downward: at breakthrough the last web of material is too thin to cut
   properly, the drill grabs, and the helix acts like a woodscrew and pulls the part upward, at the same
   instant that the torque spikes. So a drilling fixture has to resist an uplift of maybe thirty to
   fifty per cent of the thrust and a torque spike of one and a half to two and a half times the steady
   value, and both of those happen simultaneously at the end of every hole.
2. *"Where would you put the clamps on a drilling fixture?"*
   **Answer:** As far from the hole as the part allows, which is the opposite of the usual instinct.
   The reason is that friction resists torque through a moment arm — the resisting moment is mu times
   clamp force times radius — so the required clamp force is inversely proportional to how far out the
   clamp is. Moving clamps from 35 mm to 90 mm in the example reduced the required force by a factor of
   2.57, exactly the ratio of the radii, and that costs nothing. The complication is that clamping near
   the cut is genuinely good for resisting bending and chatter, so the two requirements conflict. The
   way I resolve it is to put a support near the hole to handle the bending and put the clamps out at
   radius for the torque — and better still, fit a positive anti-rotation stop so the clamps only have
   to deal with uplift.

### 28. Expert questions
1. *"Why do drilling fixtures fail at the end of the hole rather than the beginning?"*
   **Answer:** Because breakthrough is a genuinely different loading event from the rest of the hole,
   and it combines the two worst things at the same instant.
   For most of the hole the situation is benign. The drill's thrust presses the part down onto its
   locators, which increases the normal force, which increases friction, which helps resist the torque.
   The load is steady, the chip formation is regular, and the part is being held more firmly than it
   would be at rest. If you observed only that phase you would conclude drilling was the easiest
   operation to fixture.
   Then the drill approaches the far surface. The material remaining under the point becomes a thin web,
   and at some thickness it can no longer support the thrust in compression — it starts to deflect and
   then tear rather than being cut cleanly. Two things follow immediately. **The torque spikes**, because
   the chip thickness becomes irregular and the cutting edges intermittently grab rather than shear —
   typically one and a half to two and a half times the steady value. And **the thrust reverses**,
   because the drill's helix in a partially formed hole behaves like a screw thread and pulls the drill
   downward into the work, which by reaction pulls the workpiece upward off its locators.
   So at exactly the moment the torque is at its highest, the normal force that was generating the
   friction to resist that torque is not merely reduced but reversed. **The restraint collapses at the
   instant the load peaks.** That is why the failure is at the end of the hole, and it is why a fixture
   that has run thousands of holes can fail when the drill dulls slightly or the feed is increased.
   There are secondary contributors. The exit burr forms at the same time and adds an irregular load. On
   a stack or a part with an internal cavity, the drill breaks through into a void and the effect is
   more abrupt. And if several holes are drilled in sequence, a part that shifted slightly at the
   breakthrough of hole three is mispositioned for hole four, which is often where the drill actually
   breaks — so the visible failure is one operation later than the actual one.
   The design responses follow directly. **Resist the torque positively** rather than through friction,
   so that the collapse of normal force does not matter. **Size the clamps for uplift**, not just for
   seating. **Support the exit** with a clearance hole, which reduces both the deflection of the web and
   the severity of the grab. And **allow for the dull drill**, because tool condition moves all of these
   numbers by up to a factor of two and is not under the fixture designer's control.
2. *"You keep saying positive features beat friction. Is that always true, and what does it cost?"*
   **Answer:** It is close enough to always true that I treat it as the default, but it is worth being
   precise about why, and about the cases where it needs qualification.
   The reason it wins so consistently is arithmetic. Friction delivers a restraining force of mu times
   the normal force, and mu for steel on steel with coolant is around 0.1 to 0.15. So **every unit of
   restraint costs seven to ten units of clamp force.** A positive stop delivers restraint at one to one.
   That factor of seven to ten before anything else is considered is why the comparisons keep coming out
   at 7×, 18×, 38× across these lessons.
   The second reason is that **mu is the most uncertain variable in the whole calculation.** It depends
   on surface finish, on coolant, on whether there is a film of oil from the previous process, on
   whether the surfaces are new or worn, on the material combination. Quoted ranges are wide and the
   real value on a Tuesday afternoon is unknowable. When you fit a positive stop you do not merely
   improve the number — **you remove that variable from the answer entirely**, and the calculation
   becomes deterministic. I value that more than the raw factor.
   Now the qualifications, because there are real ones.
   **A stop only works in compression and only in one direction.** That is why contouring needs three of
   them, and why a rotating load may need a form-closed feature instead. A clamp's friction, for all its
   weakness, is omnidirectional.
   **A stop is a locator, whether or not you intended it to be.** The moment it touches the part it
   participates in defining position, so it needs a position tolerance, it needs to be hardened, and it
   can over-constrain the part if you fit too many or place them carelessly. Friction does not have that
   problem. This is a real cost and it is why "just add more stops" is not automatically right.
   **A stop requires somewhere to react against.** On some parts — thin sheet, fragile castings, parts
   with no square feature — there simply is no surface that can take a concentrated load without
   damage. Then you are pushed back toward distributed clamping, and the answer becomes more clamps
   spread over a larger area rather than one stop.
   **And a stop costs something to make**: a hardened button, a dowel, a reamed hole, a position
   tolerance, an inspection line. It is small — usually a few thousand rupees — but it is not zero, and
   on a very simple low-volume fixture the friction answer may genuinely be good enough.
   So my position is: **fit the positive feature unless there is a specific reason not to**, and if
   friction must carry the load, then maximise the moment arm, use the worst credible mu rather than a
   convenient one, and understand that the fixture's reliability is now tied to a variable you do not
   control.
   The pattern I would point to is that across sliding, plan rotation and torsion, the calculation has
   come out the same way every time by roughly an order of magnitude. When a design decision wins that
   consistently across different load types, it stops being a case-by-case judgement and becomes a
   default.

### 29. Summary
Drilling applies two loads to a part: an axial thrust that presses it down onto its locators, and a
torque about the drill axis that tries to spin it. The thrust is helpful and the torque is not, and the
torque governs — in the worked example the torque requirement was 1,694.8 N per clamp against an uplift
requirement of 237.6 N, a factor of 7.1, so a fixture sized on thrust alone would be under-clamped by
roughly an order of magnitude. Torque resisted by friction acts through a moment arm, `M = μ·F·r`, so
clamp position matters as much as clamp force: moving the clamps from 35 mm to 90 mm reduced the required
force by exactly the ratio of the radii, 2.571 times, at no cost — the same 1/r geometry as the locator
spread in L1.3.1 and the alignment feature in L1.2.4. This conflicts with the usual advice to clamp near
the cut, which is right for bending and wrong for torque, and the resolution is a support near the hole
with the clamps further out. The governing event is breakthrough, where the thin remaining web can no
longer be cut cleanly: the torque spikes by 1.5–2.5× while the helix acts as a screw and reverses the
thrust into an uplift of 0.3–0.5× — so the restraint collapses at the instant the load peaks, which is
why drilling fixtures fail at the end of the hole. The design responses are a positive anti-rotation stop
(406.8 N here, a 7 to 18-fold improvement over friction), clamps rated for uplift, and support directly
under the exit with a clearance hole 1–3 mm oversize to control both part bending and the exit burr.
Finally, torque varies as the square of drill diameter, so a fixture validated for one drill size is not
automatically adequate for a larger one, and a dull drill can double both loads.

### 30. Key takeaways
- **Torque governs a drilling fixture, not thrust** — by 7× in the worked example.
- **The breakthrough is the governing event**, not the steady cut.
- **At breakthrough the two worst things coincide**: torque spikes 1.5–2.5× and thrust reverses to lift
  0.3–0.5× `[GUIDE]`.
- **The restraint collapses at the instant the load peaks** — that is why failure is at the end of the
  hole.
- **M_resist = μ·F·r.** Clamp position matters as much as clamp force.
- **"Clamp near the cut" is right for bending and wrong for torque.** Support near, clamps far.
- **Torque ∝ d²; thrust ∝ d.** A fixture rated for Ø16 is not automatically fit for Ø20.
- **A dull drill can double both loads** `[GUIDE]`.
- **Support under the exit with a clearance hole 1–3 mm oversize** — the most commonly omitted feature.
- **A positive anti-rotation stop beats friction by 7–18×** and removes μ from the answer.
- **Tolerance clearance holes loosely.** Tight tolerances everywhere obscure what matters.
- Across sliding, plan rotation and torsion, **positive features have now won by 38×, and 7–18×.**

---

## LESSON L1.3.4 — REAMING AND BORING

### 1. Lesson title
**L1.3.4 — Low force, high accuracy: why fixture *stability* matters more than fixture *strength***

### 2. Learning objective
By the end of this lesson you will be able to explain why reaming and boring produce very low cutting
forces yet impose the most demanding fixture requirements in the module, distinguish strength from
stability and from stability-under-negligible-load, calculate the deflection a fixture may exhibit
under a small force and compare it with a tight tolerance, explain why clamping distortion becomes the
dominant error source at this scale, and specify a fixture suited to a finishing operation.

### 3. Prerequisites
L1.3.3 (drilling), L1.3.1 (force resolution), L1.1.1 (structural loop and compliance in series),
L0.3.4 (deflection), L1.2.4 (error budget).

### 4. Why the topic matters
This is the lesson that changes how you think about what a fixture is for.

Everything so far has been about **resisting force**. Milling side loads of four kilonewtons, drilling
torque, breakthrough spikes — the fixture's job was to be strong enough and restrained enough that the
part did not move. Reaming and boring invert that entirely.

```
   THE FORCES ARE TINY

     A reamer removing 0.2 mm of stock produces a
     fraction of the force of the drill that made
     the hole.

     A fine boring pass at 0.1 mm depth produces
     almost nothing.

   AND YET THESE ARE THE HARDEST OPERATIONS TO
   FIXTURE.
```

The reason is that **the tolerance shrinks faster than the force does**. A drilled hole might be held to
±0.2 mm; a reamed hole to ±0.01 mm; a fine-bored hole to ±0.005 mm. The force may drop by a factor of
ten, but the tolerance drops by a factor of forty. **The ratio of what you must control to what you are
controlling it against gets dramatically worse.**

```
   DRILLING              REAMING
   force    HIGH ████    force    LOW  █
   tolerance LOOSE ████  tolerance TIGHT █

   → strength problem    → STABILITY problem
```

And a second thing changes, which is the real content of this lesson:

> **When cutting forces become negligible, the fixture's own effects stop being negligible by
> comparison.** Clamping distortion, thermal drift, locator wear and the springback of the part on
> release were all lost in the noise at 4 kN. At 50 N they are the entire error budget.
>
> **The fixture stops being the thing that resists the process and becomes the thing that disturbs the
> part.**

### 5. Simple explanation

```
   WHAT A REAMER DOES

   It does NOT make a hole. It makes an EXISTING
   hole accurate.

     drilled Ø9.8  ──reamer──►  Ø10.000 H7

   It removes a very small amount of material with
   several cutting edges at once, and it FOLLOWS the
   existing hole.

   ┌──────────────────────────────────────────────┐
   │ A REAMER FOLLOWS. IT DOES NOT CORRECT         │
   │ POSITION.                                     │
   │                                               │
   │ If the drilled hole is in the wrong place,    │
   │ the reamed hole is in the wrong place — but   │
   │ round, smooth and exactly the right size.     │
   └──────────────────────────────────────────────┘

  ─────────────────────────────────────────────────

   WHAT A BORING BAR DOES

   A SINGLE cutting edge, offset from the axis of
   rotation.

              ┌──┐
              │  │──▶ tool tip
              └──┘

   Because there is only one edge, it does NOT
   follow the existing hole — it cuts to wherever
   the spindle axis is.

   ┌──────────────────────────────────────────────┐
   │ BORING CORRECTS POSITION. REAMING DOES NOT.   │
   │                                               │
   │ THIS IS THE MOST USEFUL DISTINCTION IN THE    │
   │ LESSON.                                       │
   └──────────────────────────────────────────────┘
```

And the fixture consequence:

```
   Because the forces are tiny, the part will not
   be pushed anywhere.

   But if the CLAMP has squeezed the part slightly
   out of shape, the reamer or borer will cut a
   perfect round hole in a distorted part —
   and when you release the clamp, the part springs
   back and the hole becomes OVAL.

   ✗ THE HOLE WAS ROUND WHILE IT WAS CLAMPED.
   ✗ IT IS OVAL WHEN IT IS FREE.
   ✗ NOTHING MOVED. NOTHING WAS OVERLOADED.
```

### 6. Engineering explanation

**THE FORCE COMPARISON**

`[GUIDE]` Indicative relative magnitudes for the same nominal hole size, to be confirmed for a specific
case:

| Operation | Typical force class | Typical tolerance held |
|---|---|---|
| Drilling Ø16 | Thrust ~475 N, torque ~7.3 N·m | ±0.1 to ±0.3 mm |
| Rough boring | ~100–300 N | ±0.05 mm |
| Reaming Ø16, 0.2 mm stock | ~50–150 N thrust, torque ~1–3 N·m | ±0.010 to ±0.020 mm |
| Fine boring, 0.1 mm depth | ~20–80 N | ±0.005 to ±0.010 mm |

```
   THE RATIO THAT MATTERS

     DRILLING  475 N  against  ±0.20 mm
     REAMING   100 N  against  ±0.015 mm

     Force ratio      475/100  = 4.75× less force
     Tolerance ratio  0.20/0.015 = 13.3× tighter

     → THE PROBLEM IS 13.3/4.75 = 2.8 TIMES HARDER,
       not easier.
```

**THREE DISTINCT REQUIREMENTS — AND ONLY ONE IS STRENGTH**

This is the conceptual core of the lesson.

```
   1. STRENGTH — "will it break or yield?"
        Governs when forces are LARGE.
        Reaming/boring: TRIVIALLY SATISFIED.

   2. STIFFNESS — "how much does it deflect under
      load?"
        δ = F L³/(3EI). With F small, δ is small.
        Reaming/boring: USUALLY SATISFIED, but must
        be CHECKED against the tight tolerance, not
        against a strength criterion.

   3. STABILITY — "does anything change that is not
      a response to the cutting force?"
        Clamping distortion. Thermal drift. Locator
        wear. Chip inclusion. Springback on release.
        Creep in a hydraulic clamp.
        Reaming/boring: THIS IS THE WHOLE PROBLEM.

   ┌──────────────────────────────────────────────┐
   │ A FIXTURE CAN BE ENORMOUSLY STRONG, PERFECTLY│
   │ STIFF, AND COMPLETELY UNSUITABLE FOR A       │
   │ FINISHING OPERATION.                         │
   │                                              │
   │ STRENGTH AND STABILITY ARE INDEPENDENT       │
   │ PROPERTIES. (Compare L0.3.4: stress and      │
   │ stiffness are independent.)                  │
   └──────────────────────────────────────────────┘
```

**CLAMPING DISTORTION — THE DOMINANT ERROR SOURCE**

```
   THE MECHANISM

   1. Clamp applied         2. Bore machined round
      ┌────────┐               ┌────────┐
      │  ╭──╮  │  ← squeezed   │  ╭──╮  │ ← cut round
      │  ╰──╯  │    slightly   │  ╰──╯  │   IN THE
      └────────┘    oval       └────────┘   DISTORTED
       ▲      ▲                             STATE
       clamps

   3. Clamp released
      ┌────────┐
      │ ╭────╮ │  ← part springs back
      │ ╰────╯ │    THE BORE IS NOW OVAL
      └────────┘

   ✗ The hole was perfectly round when measured
     in the fixture.
   ✗ It is out of round when measured free.
   ✗ Nothing was overloaded, nothing moved, no
     force calculation would have predicted it.
```

`[PRACTICE]` **The diagnostic signature is a bore that measures differently clamped and unclamped.**
Measuring a finished part *in the fixture* and then *out of it* takes five minutes and is the single most
useful test in this lesson. If the two differ, the fixture is distorting the part and no amount of extra
clamp force will help — the opposite.

**The design responses, in order of preference** `[PRACTICE]`:

| Response | Mechanism |
|---|---|
| **Clamp where the part is stiff** | Over a rib, a boss, a flange — not over a thin wall or an open section |
| **Clamp in line with a support** | So the clamp force passes straight into a locator rather than bending the part |
| **Reduce clamp force to the minimum that holds** | Since cutting forces are tiny, the required force is small |
| **Increase the number of clamps and reduce each** | Spreads the same total over more contact area |
| **Use larger contact pads** | Reduces local contact stress and dimpling |
| **Rough and finish in separate clamping states** | Rough clamped hard, then release and re-clamp lightly for finishing |
| **Finish in a separate operation or fixture** | The ultimate answer where tolerances are very tight |

> **The sixth of these is the one that most often solves a stubborn problem, and it is counter-intuitive
> enough to state explicitly:** roughing needs high clamp force because the forces are high; finishing
> needs low clamp force because distortion dominates. **They are opposite requirements in the same
> setup.** L1.3.5 and the multi-operation discussion return to this, but the practical form is: if the
> process allows, back off the clamps before the finishing pass. Some hydraulic systems support two
> pressure settings for exactly this reason.

**WHY A BORING BAR CORRECTS POSITION AND A REAMER DOES NOT**

```
   REAMER — multiple edges, self-centring

        ╱│╲
       ─┼┼┼─   several edges contact the existing
        ╲│╱    bore simultaneously

   The cutting forces BALANCE around the axis, so
   the reamer is pushed to the CENTRE OF THE
   EXISTING HOLE.
   → It follows. Size and finish improve;
     POSITION DOES NOT.

  ─────────────────────────────────────────────────

   BORING BAR — single edge

         ┌──┐
      ───┤  ├──▶ one tip
         └──┘

   Nothing balances the cutting force, so the tool
   cuts wherever the SPINDLE AXIS puts it.
   → Position is corrected to the machine's accuracy.
   ✗ But the single edge means the bar DEFLECTS
     under the radial force — and there is nothing
     to oppose it.
```

**BORING BAR DEFLECTION — THE OTHER HALF OF THE PROBLEM**

Exactly the cantilever problem from L1.3.2, and it dominates deep boring:

```
   δ = F L³ / (3 E I)

   For a boring bar:
     steel bar     E = 210,000 N/mm²
     carbide bar   E = 600,000 N/mm²  ← 2.9× stiffer

   [PRACTICE] LENGTH-TO-DIAMETER RATIO GUIDELINES
     L/D up to 4    steel bar, generally fine
     L/D 4 to 6     steel marginal; prefer carbide
     L/D 6 to 8     carbide bar
     L/D above 8    anti-vibration / tuned-mass bar
   These are guideline figures; confirm against the
   bar manufacturer's data.
```

> **The fixture designer's stake:** the same argument as L1.3.2. A fixture that makes the bore deeper to
> reach, or that adds height, increases L/D and the deflection goes as L³. **A fixture decision can push
> a boring operation from an L/D of 4 to an L/D of 6, which is a 3.4× increase in deflection** and may
> force a change from a steel bar to a carbide one.

**THE OTHER STABILITY TERMS**

| Term | Mechanism | Typical magnitude `[GUIDE]` |
|---|---|---|
| **Thermal drift** | Machine and fixture growth over a shift | 0.02–0.10 mm/shift (L1.1.1) |
| **Chip under a locator** | A single chip lifts the part | 0.05–0.5 mm — catastrophic at these tolerances |
| **Locator wear** | Progressive over months | Gradual drift out of tolerance |
| **Clamp creep** | Hydraulic pressure decay, or a mechanical clamp settling | Small but real over a long cycle |
| **Springback on release** | Elastic recovery from clamping distortion | The dominant term discussed above |
| **Coolant temperature** | Part expands during the cut | αΔT × L; significant on aluminium |

`[PRACTICE]` **At a ±0.01 mm tolerance, a single chip under a locator is not a defect — it is a
catastrophe.** This is why finishing fixtures justify chip-clearance features, air blast, and relieved
locating pads (L1.1.2) that would be over-engineering on a roughing fixture.

### 7. Terminology

| Term | Definition |
|---|---|
| **Reaming** | Finishing an existing hole with a multi-edge tool; improves size and finish, follows position |
| **Boring** | Enlarging a hole with a single-point tool; corrects position |
| **Fine boring** | Precision boring at very small depth of cut for size and finish |
| **Stock allowance** | Material left for the finishing operation |
| **Self-centring** | A tool whose balanced forces push it to the centre of the existing hole |
| **Boring bar** | Cantilevered tool holder carrying a single-point tool |
| **L/D ratio** | Boring bar overhang divided by its diameter |
| **Anti-vibration bar** | Boring bar with an internal tuned mass damper |
| **Clamping distortion** | Elastic deformation of the part caused by clamp force |
| **Springback** | Recovery of that deformation when the clamp is released |
| **Stability** | Freedom from change not caused by the cutting force |
| **Roundness / circularity** | Deviation of a bore from a perfect circle |

### 8. Principle

> **WHEN CUTTING FORCES BECOME NEGLIGIBLE, THE FIXTURE'S OWN EFFECTS STOP BEING NEGLIGIBLE.** The
> fixture ceases to be the thing that resists the process and becomes the thing that disturbs the part.
> **STRENGTH, STIFFNESS AND STABILITY ARE THREE DIFFERENT PROPERTIES.** A fixture can be enormously
> strong, perfectly stiff, and completely unsuitable for a finishing operation.
> **BORING CORRECTS POSITION; REAMING FOLLOWS IT.** A reamer makes a misplaced hole round, smooth and
> exactly the wrong size location.
> **ROUGHING WANTS HIGH CLAMP FORCE AND FINISHING WANTS LOW.** They are opposite requirements in the
> same setup.
> **THE TEST IS TO MEASURE THE BORE CLAMPED AND UNCLAMPED.** If they differ, the fixture is distorting
> the part.

### 9. Industrial application

**Specifying a fixture for a finishing operation**

```
   FINISHING FIXTURE REQUIREMENTS      [PRACTICE]

   CLAMPING
     ✓ Minimum force that reliably holds
     ✓ Applied where the part is STIFF — over ribs,
       bosses, flanges
     ✓ In line with a support wherever possible
     ✓ Large contact pads, or soft pads on finished
       surfaces
     ✗ NOT over thin walls or open sections
     ✗ NOT more force "to be safe" — that is the
       failure mode

   LOCATING
     ✓ Relieved pads (L1.1.2) so a chip cannot sit
       under the contact
     ✓ Hardened and ground; wear shows up directly
       at these tolerances
     ✓ Minimum number consistent with restraint —
       every contact is a chance to distort

   ENVIRONMENT
     ✓ Chip clearance and air blast
     ✓ Coolant routed away from the locating
       surfaces
     ✓ Thermal soak considered for the first parts
       of a shift

   PROCESS
     ✓ Rough and finish in different clamping states
       if the tolerance demands it
     ✓ Adequate, CONSISTENT stock for the finishing
       pass
     ✓ Boring rather than reaming where position must
       be corrected
```

**The five-minute diagnostic that resolves most finishing problems**

```
SYMPTOM: Reamed bore measures 0.018 mm out of round,
  against a 0.010 mm circularity requirement.

TEST 1 — MEASURE IN THE FIXTURE, THEN OUT OF IT
  In fixture, clamped:  0.004 mm out of round  ✓
  Removed, free:        0.018 mm out of round  ✗

  → THE PART CHANGES SHAPE WHEN RELEASED.
    This is CLAMPING DISTORTION, and no force
    calculation would have predicted it.

TEST 2 — REDUCE CLAMP FORCE AND REPEAT
  At 60 % of the original clamp force:
    free measurement 0.007 mm  ✓
  → CONFIRMS the mechanism, and shows the fixture
    still holds adequately at lower force, because
    the reaming forces are tiny.

TEST 3 — CHECK WHERE THE CLAMPS BEAR
  Clamps found bearing over an unsupported span
  between two ribs.
  → Relocate over the ribs.

CORRECTIVE: reduce clamp force; relocate clamps over
  the ribs; add a support beneath each clamp.
PREVENTIVE: at finishing tolerances, specify clamp
  positions against the part's STIFFNESS map, not
  against convenience.

NOTE THAT THE ANSWER WAS *LESS* CLAMPING. Almost
every instinct in fixture design points the other
way, and at this tolerance that instinct is wrong.
```

### 10. Design rules
- **R1** — For finishing operations, **specify the minimum clamp force that reliably holds**, not the
  maximum available `[PRACTICE]`.
- **R2** — **Clamp where the part is stiff** — over ribs, bosses and flanges — never over thin walls or
  unsupported spans.
- **R3** — **Clamp in line with a support**, so the force passes into a locator rather than bending the
  part.
- **R4** — Use **relieved locating pads** and provide **chip clearance and air blast**; at ±0.01 mm a
  chip is catastrophic.
- **R5** — Use the **minimum number of contacts** consistent with restraint; every contact can distort.
- **R6** — Where tolerances demand it, **rough and finish in different clamping states**.
- **R7** — **Use boring, not reaming, where position must be corrected.**
- **R8** — Ensure **consistent stock** for the finishing pass; variable stock means variable force and
  variable deflection.
- **R9** — Avoid fixture geometry that **increases the boring bar's L/D**; δ ∝ L³.
- **R10** — Consider **thermal soak** for the first parts of a shift where tolerances are tight.
- **R11** — Verify the design by **measuring a part clamped and unclamped** at commissioning
  `[PRACTICE]`.

### 11. Rules of thumb
- **Low force, tight tolerance — the problem gets harder, not easier.**
- **Boring corrects position; reaming follows it.**
- **Strength, stiffness and stability are three different properties.**
- **The answer is usually less clamping, not more.**
- **Measure the bore clamped and unclamped.** Five minutes, and it settles most arguments.
- **Roughing wants high clamp force; finishing wants low.**
- Boring bar L/D: **≤4 steel, 4–6 marginal, 6–8 carbide, >8 anti-vibration** `[PRACTICE]`.
- **Carbide is ~2.9× stiffer than steel** for a boring bar `[GUIDE]`.
- **A chip under a locator is 0.05–0.5 mm** — catastrophic at these tolerances.
- **Clamp over ribs, in line with supports.**
- **Consistent stock matters more than small stock.**

### 12. Formulae

**Relative difficulty of an operation**
```
Difficulty index ∝ (fixture-induced error) / (tolerance)

Comparing two operations:
   ratio = (T₁/T₂) / (F₁/F₂)
   where T = tolerance, F = force
→ if tolerance tightens faster than force falls,
  the problem gets HARDER
```

**Boring bar deflection**
```
δ = F L³ / (3 E I)      I = π D⁴/64  (solid bar)

L/D scaling:
   δ ∝ (L/D)³ / D       for a given force
```

**Clamping distortion of a ring or thin section** (indicative)
```
For a thin ring under two diametrically opposed
point loads, the classical result is:

   Δd ≈ 0.0186 · F · R³ / (E · I)

where R = mean radius, I = second moment of the
ring wall section per unit length.

[GUIDE] This is a CLASSICAL IDEALISATION for a
thin circular ring. Real parts are not thin rings,
and FEA or measurement is required for a real
component. It is given here to show the FORM of the
dependence — note δ ∝ R³ and δ ∝ 1/I — not to be
used as a design formula on an arbitrary part.
```

**Minimum clamp force for a finishing operation**
```
F_clamp ≥ (F_cut · SF) / (μ · n)     [if friction]
but ALSO
F_clamp ≤ F_distortion_limit
→ THERE IS A WINDOW, AND IT CAN BE EMPTY.
  If it is, the answer is a positive stop (which
  removes the lower bound) or a different clamping
  location (which raises the upper bound).
```

**Thermal growth**
```
ΔL = L · α · ΔT
```

| Variable | Meaning | Unit |
|---|---|---|
| L/D | Boring bar overhang ratio | — |
| Δd | Diametral distortion | mm |
| R | Mean radius | mm |
| F_distortion_limit | Clamp force above which distortion exceeds tolerance | N |

### 13. Worked numerical example

**Problem:** A cast iron bearing housing is finish-bored after roughing in the same setup. Compare the
roughing and finishing load cases, determine whether the clamp force required for roughing is compatible
with the distortion limit for finishing, calculate the boring bar deflection, and establish whether a
single clamping state can satisfy both operations.

```
GIVEN:
  PART                                           [PROJ]
    Cast iron bearing housing, mass 11 kg
    Bore nominal Ø80, finished
    Bore tolerance          = Ø80 H7 (+0.030/0)
    Circularity requirement = 0.010 mm
    Section around the bore: effectively a ring of
      mean radius R = 52 mm, wall 14 mm thick,
      40 mm axial length

  ROUGHING PASS                                  [PROJ]
    Boring, a_p = 2.5 mm, f = 0.25 mm/rev
    Cutting force, radial   = 780 N   [GUIDE, from
                              tooling data for CI]

  FINISHING PASS                                 [PROJ]
    Fine boring, a_p = 0.15 mm, f = 0.08 mm/rev
    Cutting force, radial   = 65 N    [GUIDE]

  BORING BAR                                     [PROJ]
    Steel bar, D = 40 mm
    Overhang L              = 200 mm
    E_steel                 = 210,000 N/mm²
    (carbide alternative E  = 600,000 N/mm²)

  FIXTURE                                        [PROJ]
    Three clamps
    μ (CI on steel, coolant) = 0.12   [GUIDE]
    Safety factor            = 2.5    [PRACTICE]
    Measured distortion response, from a trial:
      0.004 mm diametral change per 1,000 N of
      total clamp force        [PROJ — MEASURED,
      not calculated]

REQUIRED:
  (a) Clamp force required for the roughing pass
  (b) Clamp force required for the finishing pass
  (c) Distortion produced by each clamp force, and
      whether each is acceptable against the 0.010 mm
      circularity requirement
  (d) The maximum permissible clamp force for
      finishing
  (e) Whether a single clamping state can satisfy
      both operations
  (f) Boring bar L/D and deflection in the finishing
      pass, steel and carbide
  (g) Total finishing error budget and pass/fail
  (h) Engineering conclusion

ASSUMPTION:
  1. Cutting forces are GUIDELINE values from tooling
     data for cast iron and MUST BE CONFIRMED for the
     specific insert geometry and grade. [GUIDE]
  2. The distortion response of 0.004 mm per 1,000 N
     is a MEASURED value from a trial on this part.
     IT IS NOT CALCULATED, and it could not reliably
     be — the part is not a thin ring and analytical
     formulae would not represent it. THIS IS THE
     CORRECT WAY TO OBTAIN THIS NUMBER. [PROJ]
  3. Distortion assumed linear with clamp force over
     the range considered. Reasonable for elastic
     behaviour at these levels. [PRACTICE]
  4. Boring bar treated as a solid cantilever with an
     end load. Real bars have a tool pocket reducing
     the section near the tip, so this UNDERESTIMATES
     deflection somewhat. [PRACTICE]
  5. Friction-only restraint assumed for the clamp
     force calculation, i.e. no positive stop against
     the boring reaction.
  6. Thermal effects excluded from this calculation
     and treated separately.

FORMULA:
  (a,b) F_clamp,total ≥ (F_cut · SF)/μ
  (c) distortion = k_d · F_clamp,total
  (f) δ = F L³/(3 E I) ; I = πD⁴/64

UNIT CONVERSION:
  Forces N, lengths mm.
  Part weight W = 11 × 9.81 = 107.9 N (small; noted
  but not relied upon)

SUBSTITUTION AND CALCULATION:

  (a) CLAMP FORCE FOR ROUGHING

      F_clamp,total ≥ (F_cut · SF) / μ
                    = (780 × 2.5) / 0.12
                    = 1,950 / 0.12
                    = 16,250 N total

      Per clamp (3 clamps) = 5,416.7 N

  (b) CLAMP FORCE FOR FINISHING

      F_clamp,total ≥ (65 × 2.5) / 0.12
                    = 162.5 / 0.12
                    = 1,354.2 N total

      Per clamp = 451.4 N

      RATIO roughing:finishing
        = 16,250 / 1,354.2
        = 12.0 ×

  (c) DISTORTION FROM EACH CLAMP FORCE

      k_d = 0.004 mm per 1,000 N

      ROUGHING clamp force:
        distortion = 0.004 × (16,250/1,000)
                   = 0.004 × 16.25
                   = 0.0650 mm

      FINISHING clamp force:
        distortion = 0.004 × (1,354.2/1,000)
                   = 0.004 × 1.3542
                   = 0.005417 mm
                   ≈ 0.0054 mm

      AGAINST THE 0.010 mm CIRCULARITY REQUIREMENT:

        Roughing force:  0.0650/0.010 = 6.50 ×
                         ✗ FAIL by 6.5 times
        Finishing force: 0.0054/0.010 = 0.54
                         = 54.2 % of the requirement
                         ✓ PASS

  (d) MAXIMUM PERMISSIBLE CLAMP FORCE FOR FINISHING

      Allow the distortion to consume no more than
      50 % of the circularity requirement, leaving
      the rest for the bar deflection, thermal
      effects and measurement [PRACTICE]:

        Allowable distortion = 0.010 × 0.50
                             = 0.005 mm

        F_max = 0.005 / 0.004 × 1,000
              = 1,250 N total
              = 416.7 N per clamp

      COMPARE WITH THE MINIMUM REQUIRED (b):
        Minimum  1,354.2 N
        Maximum  1,250.0 N

      ┌────────────────────────────────────────────┐
      │ THE MINIMUM EXCEEDS THE MAXIMUM.           │
      │ THE WINDOW IS EMPTY.                       │
      │                                            │
      │ 1,354.2 > 1,250.0 by 8.3 %                 │
      │                                            │
      │ FRICTION-ONLY CLAMPING CANNOT SATISFY THIS │
      │ OPERATION AT ALL.                          │
      └────────────────────────────────────────────┘

      THE RESOLUTION: fit a POSITIVE STOP against
      the boring reaction. The clamp then only has
      to seat the part, not generate friction, and
      the lower bound disappears.

      With a stop, a nominal seating force of, say,
      600 N total gives:
        distortion = 0.004 × 0.600 = 0.0024 mm
                   = 24 % of the requirement  ✓

  (e) CAN ONE CLAMPING STATE SERVE BOTH?

      Roughing needs   16,250 N
      Finishing allows  1,250 N

      Ratio = 13.0 ×

      ✗ NO. A single clamping state CANNOT serve
        both operations. The roughing force distorts
        the part 6.5× beyond the finishing
        circularity requirement.

      OPTIONS:
        1. Two-stage clamping — high pressure for
           roughing, reduced before finishing.
           Requires a dual-pressure hydraulic system
           or a documented manual step.
        2. Positive stops for both, reducing both
           requirements dramatically.
        3. Separate finishing operation in a
           different fixture.

  (f) BORING BAR L/D AND DEFLECTION

      L/D = 200/40 = 5.0

      → In the 4-6 "marginal for steel" band
        [PRACTICE]. Carbide preferred.

      I = π D⁴/64
        = π × 40⁴/64
        = π × 2,560,000/64
        = 8,042,477/64
        = 125,663.7 mm⁴

      STEEL BAR, finishing force 65 N:
        δ = F L³/(3 E I)
          = 65 × 200³/(3 × 210,000 × 125,663.7)
          = 65 × 8,000,000/(79,168,131,000)
          = 520,000,000/79,168,131,000
          = 0.006569 mm
          ≈ 0.00657 mm

      CARBIDE BAR:
        δ = 0.006569 × (210,000/600,000)
          = 0.006569 × 0.35
          = 0.002299 mm
          ≈ 0.00230 mm

        Improvement = 600,000/210,000 = 2.857 ×

  (g) TOTAL FINISHING ERROR BUDGET

      Using the POSITIVE STOP solution with 600 N
      seating force and a CARBIDE bar:

        Clamping distortion   = 0.00240 mm
        Boring bar deflection = 0.00230 mm
        ────────────────────────────────────
        Subtotal              = 0.00470 mm

        Against 0.010 mm circularity:
          = 47.0 % of the requirement

        Remaining for thermal, wear, measurement
        and machine effects:
          0.010 − 0.00470 = 0.00530 mm  (53.0 %)

      ✓ PASS, with over half the budget remaining.

      COMPARE the STEEL bar with the same 600 N:
        0.00240 + 0.00657 = 0.00897 mm
        = 89.7 % of the requirement
        ⚠ MARGINAL — passes, but leaves only 10 %
          for everything else. NOT ACCEPTABLE in
          practice.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Clamp force, roughing    │ 16,250 N total    │
  │ (b) Clamp force, finishing   │ 1,354.2 N total   │
  │     Ratio                    │ 12.0 ×            │
  │ (c) Distortion, roughing     │ 0.0650 mm ✗ 6.5×  │
  │     Distortion, finishing    │ 0.0054 mm ✓ 54 %  │
  │ (d) Max permissible          │ 1,250 N           │
  │     Minimum required         │ 1,354.2 N         │
  │     WINDOW                   │ EMPTY by 8.3 %    │
  │     With a positive stop     │ 600 N → 0.0024 ✓  │
  │ (e) One clamping state?      │ NO — 13.0× apart  │
  │ (f) Bar L/D                  │ 5.0 (marginal)    │
  │     δ steel                  │ 0.00657 mm        │
  │     δ carbide                │ 0.00230 mm (2.857×)│
  │ (g) Budget, stop + carbide   │ 0.00470 = 47.0 % ✓│
  │     Budget, stop + steel     │ 0.00897 = 89.7 % ⚠│
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  SF = 2.5 applied to the cutting force for the
  friction calculation. NOTE that no safety factor is
  applied to the DISTORTION side — that is a
  predicted dimensional effect compared directly with
  a tolerance, and the margin is expressed instead as
  the 50 % budget allocation. Applying a safety factor
  to both sides of the window would make it emptier
  still and would be double-counting.

PASS/FAIL:
  ✗ FAIL — friction-only clamping: the required
    minimum (1,354.2 N) exceeds the distortion-limited
    maximum (1,250 N). The window is empty.
  ✗ FAIL — a single clamping state for roughing and
    finishing: 13.0× apart.
  ✓ PASS — positive stop plus 600 N seating plus a
    carbide bar: 47.0 % of the circularity budget.
  ⚠ MARGINAL — the same with a steel bar: 89.7 %.

ENGINEERING CONCLUSION:
  1. THE WINDOW WAS EMPTY, AND THAT IS THE MOST
     IMPORTANT RESULT HERE.
     The clamp force needed to generate enough
     friction (1,354.2 N) was greater than the clamp
     force that would distort the part beyond its
     circularity requirement (1,250 N). There is no
     value that satisfies both. NO AMOUNT OF CAREFUL
     ADJUSTMENT WOULD HAVE FOUND ONE, because none
     exists.
     This is a situation that a designer who thinks
     only in terms of "enough clamp force" cannot
     even perceive. THE CLAMP FORCE HAS AN UPPER
     BOUND AS WELL AS A LOWER ONE, and at finishing
     tolerances the two can cross.
     THE RESOLUTION IS TO REMOVE THE LOWER BOUND BY
     FITTING A POSITIVE STOP. Once the stop carries
     the cutting reaction, the clamp only has to seat
     the part, 600 N is ample, and the distortion
     falls to 24 % of the requirement. This is the
     fourth consecutive lesson in which the positive
     stop is the answer — but here it is not an
     efficiency, IT IS THE ONLY THING THAT MAKES THE
     OPERATION POSSIBLE.

  2. ROUGHING AND FINISHING ARE INCOMPATIBLE IN ONE
     CLAMPING STATE, BY A FACTOR OF THIRTEEN.
     16,250 N against 1,250 N. The roughing clamp
     force distorts the part to 0.065 mm — six and a
     half times the finishing circularity requirement.
     If both operations are done in one setup at one
     clamp pressure, the part is bored round while
     squeezed and springs oval on release, and every
     part fails while every in-process check passes.
     THIS IS A PROCESS DESIGN CONCLUSION REACHED FROM
     A FIXTURE CALCULATION, and it is the kind of
     finding that has to be raised early, because the
     answer — dual-pressure clamping, or a separate
     finishing operation — affects the machine, the
     cycle time and the cost, not just the fixture.

  3. THE DISTORTION COEFFICIENT WAS MEASURED, NOT
     CALCULATED, AND THAT WAS THE RIGHT CHOICE.
     0.004 mm per 1,000 N came from a trial on the
     actual part. It could not have been reliably
     calculated: the housing is not a thin ring, the
     classical ring formula does not apply to it, and
     an FEA model would itself need validating.
     AT THIS TOLERANCE LEVEL, THE HONEST ANSWER IS
     OFTEN TO MEASURE RATHER THAN TO DERIVE. A
     designer who insists on an analytical value for
     every quantity will either use a formula that
     does not apply or will not do the check at all.
     Both are worse than a twenty-minute trial with a
     bore gauge and a load cell.

  4. THE BORING BAR CHOICE IS DECIDED BY THE BUDGET,
     NOT BY HABIT.
     At L/D = 5.0 the bar sits in the marginal band
     where either material could be argued. The
     numbers settle it: steel consumes 89.7 % of the
     circularity budget and carbide 47.0 %. Steel
     "passes" and is the wrong choice, because a
     10 % margin will not survive thermal drift,
     locator wear and measurement uncertainty.
     THE FIXTURE DESIGNER'S CONTRIBUTION IS TO KEEP
     L/D DOWN — δ ∝ L³, so fixture height and access
     geometry directly determine whether an expensive
     bar is needed.

  5. WHAT I WOULD SPECIFY AND RAISE.
     Specify: positive stop against the boring
     reaction; 600 N total seating force with clamps
     over the ribs; relieved pads and air blast;
     carbide bar; measure clamped-vs-unclamped at
     commissioning. Raise: that roughing and
     finishing cannot share a clamping state, and
     that this needs a process decision before the
     fixture is built.

SENSITIVITY NOTE:
  Ranked by influence:
    1. PRESENCE OF A POSITIVE STOP — it does not
       merely improve the answer, IT CREATES ONE. The
       friction-only case has no solution at all.
    2. CLAMP FORCE — enters the distortion linearly
       and is the whole difference between the
       roughing and finishing states, a factor of 13.
    3. DISTORTION COEFFICIENT k_d — measured at
       0.004 mm/kN. If it were 0.006, the finishing
       case would fail even with a stop at 600 N
       (0.0036 mm, 36 %, still passing — but the
       margin erodes fast). WORTH MEASURING
       PROPERLY, on more than one part.
    4. BORING BAR MATERIAL AND L/D — 2.857× between
       steel and carbide, and cubic in L. Partly the
       fixture designer's responsibility through
       access geometry.
    5. CUTTING FORCE — surprisingly LOW sensitivity
       once a stop is fitted, because the clamp is
       no longer sized from it. This inversion is
       itself the lesson: in a friction design the
       cutting force dominates; in a positive-stop
       design it almost drops out.
```

### 14. Engineering assumptions
- Cutting forces are guideline values for cast iron `[GUIDE]` and must be confirmed for the specific
  insert.
- The distortion coefficient 0.004 mm per 1,000 N is a **measured** trial value `[PROJ]`, not calculated
  — the part is not a thin ring and analytical formulae would not represent it.
- Distortion assumed linear with clamp force over the range considered `[PRACTICE]`.
- Boring bar treated as a solid cantilever; a real bar's tool pocket reduces the section, so this
  slightly underestimates deflection `[PRACTICE]`.
- Friction-only restraint assumed in the clamp force calculation, i.e. no positive stop initially.
- Thermal effects excluded and treated separately.

### 15. Diagram

```
     REAMING AND BORING — STABILITY, NOT STRENGTH
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE INVERSION

   DRILLING              REAMING / FINE BORING
   force     ████████    force     █
   tolerance ████████    tolerance █

   Force falls  4.75×    Tolerance tightens  13.3×
   → THE PROBLEM IS 2.8× HARDER, NOT EASIER

   ┌──────────────────────────────────────────────┐
   │ WHEN CUTTING FORCES BECOME NEGLIGIBLE, THE   │
   │ FIXTURE'S OWN EFFECTS STOP BEING NEGLIGIBLE. │
   │                                              │
   │ THE FIXTURE CEASES TO BE THE THING THAT      │
   │ RESISTS THE PROCESS AND BECOMES THE THING    │
   │ THAT DISTURBS THE PART.                      │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THREE DIFFERENT PROPERTIES

   STRENGTH    will it break?        ✓ trivially OK
   STIFFNESS   δ under load?         ✓ usually OK
   STABILITY   does anything change  ✗ THE WHOLE
               that is NOT a           PROBLEM
               response to the cut?

   ┌──────────────────────────────────────────────┐
   │ A FIXTURE CAN BE ENORMOUSLY STRONG,          │
   │ PERFECTLY STIFF, AND COMPLETELY UNSUITABLE   │
   │ FOR A FINISHING OPERATION.                   │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  CLAMPING DISTORTION — THE DOMINANT TERM

   1. CLAMPED        2. BORED         3. RELEASED
    ┌────────┐        ┌────────┐       ┌────────┐
    │  ╭──╮  │        │  ╭──╮  │       │ ╭────╮ │
    │  ╰──╯  │        │  ╰──╯  │       │ ╰────╯ │
    └────────┘        └────────┘       └────────┘
     ▲      ▲         cut ROUND in     SPRINGS BACK
     squeezed         the DISTORTED    → BORE IS OVAL
     slightly oval    state

   ✗ Round while clamped. Oval when free.
   ✗ Nothing overloaded. Nothing moved.
   ✗ NO FORCE CALCULATION WOULD PREDICT IT.

   THE TEST: MEASURE THE BORE CLAMPED, THEN FREE.
   Five minutes. It settles most arguments.

  ──────────────────────────────────────────────────────────

  THE EMPTY WINDOW — THE KEY RESULT

   clamp force needed for FRICTION    1,354.2 N
                                      ├──────────
   clamp force that DISTORTS too much 1,250.0 N
                          ────────────┤

        MINIMUM ────► 1,354  ✗  1,250 ◄──── MAXIMUM
                        THE WINDOW IS EMPTY
                        (minimum exceeds maximum
                         by 8.3 %)

   ┌──────────────────────────────────────────────┐
   │ CLAMP FORCE HAS AN UPPER BOUND AS WELL AS A  │
   │ LOWER ONE, AND AT FINISHING TOLERANCES THE   │
   │ TWO CAN CROSS.                               │
   │                                              │
   │ A POSITIVE STOP REMOVES THE LOWER BOUND.     │
   │ Here it does not merely improve the answer — │
   │ IT CREATES ONE.                              │
   │                                              │
   │ With a stop: 600 N → 0.0024 mm = 24 %  ✓     │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  ROUGHING vs FINISHING — 13× APART

   ROUGHING needs   ████████████████ 16,250 N
   FINISHING allows █                 1,250 N

   Roughing distortion 0.0650 mm
   vs 0.010 requirement  → 6.5× OVER

   ┌──────────────────────────────────────────────┐
   │ ONE CLAMPING STATE CANNOT SERVE BOTH.        │
   │ Bore it round while squeezed hard, and every │
   │ part springs oval on release — while every   │
   │ IN-PROCESS CHECK PASSES.                     │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  REAMER vs BORING BAR

   REAMER — multiple edges       BORING BAR — one edge
        ╱│╲                          ┌──┐
       ─┼┼┼─                      ───┤  ├──▶
        ╲│╱                          └──┘

   Forces BALANCE → self-centres  Nothing balances it
   FOLLOWS the existing hole      Cuts where the
                                  SPINDLE AXIS is
   ✓ size and finish              ✓ CORRECTS POSITION
   ✗ NOT position                 ✗ DEFLECTS

   ┌──────────────────────────────────────────────┐
   │ A REAMER MAKES A MISPLACED HOLE ROUND,       │
   │ SMOOTH, AND EXACTLY THE WRONG POSITION.      │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  BORING BAR L/D  [PRACTICE]

   L/D ≤ 4    ████ steel fine
   L/D 4-6    ██████ marginal — prefer carbide
   L/D 6-8    ████████ carbide
   L/D > 8    ██████████ anti-vibration bar

   AT L/D = 5.0, THE BUDGET DECIDES:
     steel   0.00657 → 89.7 % of budget  ⚠
     carbide 0.00230 → 47.0 % of budget  ✓
     ratio 2.857 = E_carbide/E_steel

   ┌──────────────────────────────────────────────┐
   │ δ ∝ L³ — SO FIXTURE HEIGHT AND ACCESS        │
   │ GEOMETRY DECIDE WHETHER AN EXPENSIVE BAR IS  │
   │ NEEDED. THAT IS THE FIXTURE DESIGNER'S       │
   │ CONTRIBUTION TO A TOOLING DECISION.          │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-5530 — FINISH BORING
STANDARD: ASME Y14.5-2018
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: THIS IS A FINISHING FIXTURE. CLAMP FORCE IS
        LIMITED, NOT MAXIMISED.
        TOTAL CLAMP FORCE 600 N ±10 %.
        DO NOT INCREASE. EXCEEDING 1,250 N TOTAL WILL
        DISTORT THE COMPONENT BEYOND ITS 0.010 mm
        CIRCULARITY REQUIREMENT.

NOTE 2: THE BORING REACTION IS TAKEN BY STOP ITEM 7,
        NOT BY CLAMP FRICTION. THE CLAMPS SEAT THE
        COMPONENT ONLY.

NOTE 3: CLAMPS ITEMS 3, 4 AND 5 BEAR DIRECTLY OVER
        THE COMPONENT RIBS AND IN LINE WITH SUPPORTS
        ITEMS 14, 15 AND 16. THESE POSITIONS ARE
        FUNCTIONAL — DO NOT RELOCATE.

NOTE 4: ROUGHING MUST NOT BE PERFORMED IN THIS
        FIXTURE AT FINISHING CLAMP PRESSURE. ROUGHING
        REQUIRES 16,250 N, WHICH DISTORTS THE
        COMPONENT 6.5× BEYOND THE CIRCULARITY
        REQUIREMENT. SEE PROCESS SHEET PS-5530.

NOTE 5: LOCATING PADS ARE RELIEVED. AIR BLAST ITEM 21
        MUST OPERATE BEFORE EVERY LOAD. AT THIS
        TOLERANCE A SINGLE CHIP UNDER A PAD IS
        SUFFICIENT TO SCRAP THE COMPONENT.

NOTE 6: AT COMMISSIONING, MEASURE BORE CIRCULARITY
        BOTH CLAMPED AND UNCLAMPED. A DIFFERENCE
        EXCEEDING 0.003 mm INDICATES EXCESSIVE
        CLAMPING DISTORTION AND MUST BE INVESTIGATED
        BEFORE PRODUCTION RELEASE.
```

Notes 1 and 4 are unusual — a fixture drawing that specifies a **maximum** clamp force and forbids an
operation. Both are necessary here, and Note 6 gives the acceptance test that proves the design works.

### 17. CAD workflow
1. Identify the part's **stiff regions** — ribs, bosses, flanges — and mark them as candidate clamp
   positions
2. Place clamps **over those regions and in line with supports**
3. Model the **boring bar at its full overhang** and calculate L/D
4. Check whether **fixture geometry is forcing a larger L/D** than necessary; reduce fixture height if so
5. Model the **positive stop** against the boring reaction
6. Model **relieved locating pads** and the **air blast** path
7. Where FEA is available, run the **clamping distortion** case — but treat the result as indicative and
   plan to measure
8. Model **clamped-vs-free** states if the software supports it

`[PRACTICE]` Step 7 carries a caution. FEA of clamping distortion is genuinely useful for *comparing*
clamp positions, and much less reliable as an absolute prediction, because it depends on contact
modelling and on material property assumptions. **Use it to choose between options, then measure.**

### 18. GD&T application

```
STANDARD: ASME Y14.5-2018

  On the COMPONENT drawing:

  ┌─────────────────────────┐
  │ ○ │ 0.010 │             │   circularity
  └─────────────────────────┘
  Ø80 H7  (+0.030 / 0)

  ┌─────────────────────────┐
  │ ⌖ │ Ø0.05 │ A │ B │ C │ │   position
  └─────────────────────────┘

  ┌────────────────────────────────────────────┐
  │ THE CRITICAL POINT FOR THIS LESSON:        │
  │                                            │
  │ CIRCULARITY (○) IS A FORM TOLERANCE. IT IS │
  │ MEASURED ON THE PART IN ITS FREE STATE     │
  │ UNLESS THE DRAWING SAYS OTHERWISE.         │
  │                                            │
  │ So a bore that is round while clamped and  │
  │ oval when released IS NON-CONFORMING, even │
  │ though it was machined perfectly.          │
  │                                            │
  │ Where a part is genuinely flexible and     │
  │ must be measured restrained, ASME Y14.5    │
  │ provides the FREE STATE modifier Ⓕ and     │
  │ restrained-condition notes — covered fully │
  │ at L21. USING THEM IS A DELIBERATE         │
  │ DECISION, NOT A WAY OF EXCUSING CLAMPING   │
  │ DISTORTION.                                │
  └────────────────────────────────────────────┘
```

### 19. Manufacturing method
The fixture itself is conventional — the demands are on **precision and stability rather than strength**:
1. Stress relieve the base thoroughly (L0.5.3) — residual stress relaxation over months is a stability
   problem at these tolerances
2. Machine soft, harden locators to 58–62 HRC, grind in position
3. Grind locating pads **relieved**, with small raised contact areas (L1.1.2)
4. Fit the positive stop, ground in position
5. Set clamp force with a **load cell**, not by feel or by a torque figure alone

`[PRACTICE]` **Setting clamp force by load cell is normal practice on a finishing fixture and unusual on
a roughing fixture.** The reason is the empty-window result: when there is an upper bound as well as a
lower one, "tight enough" is not a specification.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Clamp force delivered | Load cell at each clamp | 200 N ±10% each, 600 N total |
| Clamp positions over ribs | Visual against the model | As drawing |
| Distortion, clamped vs free | Bore gauge, both states | Difference ≤0.003 mm |
| Locating pad relief | Visual / feeler | Relieved, contact only on pads |
| Air blast function | Functional check | Operates before every load |
| Positive stop position | CMM | ±0.02 mm |
| Boring bar L/D achievable | Physical trial | ≤5.0 |
| Circularity, production part | CMM or roundness tester, **free state** | ≤0.010 mm |

`[PRACTICE]` The clamped-versus-free comparison is the acceptance test for the whole design philosophy of
this lesson, and it belongs in the commissioning protocol rather than being left to chance.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Assuming **low force means an easy fixture** | The tolerance tightened faster than the force fell |
| 2 | Sizing the fixture for **strength** only | Strength was never the constraint |
| 3 | Applying **maximum available clamp force** | Distortion; oval bore on release |
| 4 | Clamping over **thin walls or unsupported spans** | Local distortion |
| 5 | Using **one clamping state** for roughing and finishing | 13× incompatible |
| 6 | Not recognising that clamp force has an **upper bound** | The empty window is invisible |
| 7 | Expecting a **reamer to correct position** | It follows the existing hole |
| 8 | Measuring the bore **only in the fixture** | Distortion undetected |
| 9 | Ignoring **chips** at these tolerances | 0.05–0.5 mm — catastrophic |
| 10 | Fixture geometry forcing a **large L/D** | δ ∝ L³; expensive bar or chatter |
| 11 | Using a **steel bar** because it passed marginally | 89.7% of budget leaves nothing |
| 12 | **Calculating** distortion on a complex part instead of measuring | Formula does not apply |
| 13 | Ignoring **thermal soak** on the first parts of a shift | Systematic first-off failures |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Bore round in the fixture, oval when free | Clamping distortion | Measure both states | Reduce clamp force; relocate clamps over ribs | Design rules R1–R3 |
| Bore tapered along its length | Boring bar deflection | Measure at two depths | Carbide bar; reduce L/D | Keep L/D ≤4 |
| Chatter marks in the bore | Bar L/D too high | Check overhang | Anti-vibration bar; shorter overhang | Fixture geometry |
| Reamed hole the right size, wrong position | Reamer follows | Measure the pre-drilled position | Bore instead of ream | Design rule R7 |
| Random single parts badly out | Chip under a locator | Inspect pads | Air blast; relieved pads | Design rule R4 |
| First parts of a shift out, later fine | Thermal soak | Measure over the first hour | Warm-up cycle | Expect and plan for it |
| Gradual drift over months | Locator wear | Re-measure locators | Replace | Wear-monitoring interval |
| Size correct, circularity fails | Distortion or bar deflection | Clamped-vs-free test | Per the above | Commissioning test |
| Bore size drifts within a batch | Clamp pressure creep, or tool wear | Monitor clamp pressure | Check the hydraulic system | Pressure monitoring |

### 23. Design checklist
- [ ] Has the operation been recognised as a **stability problem, not a strength problem**?
- [ ] Is the **minimum** clamp force specified, and is a **maximum** stated?
- [ ] Has the **window between them been checked** — is it non-empty?
- [ ] Is there a **positive stop** so the clamp does not have to generate friction?
- [ ] Do the clamps bear **over ribs and in line with supports**?
- [ ] Can **roughing and finishing share a clamping state**? If not, is that decision documented?
- [ ] Are the locating pads **relieved**, with **air blast** provided?
- [ ] Is **boring used rather than reaming** where position must be corrected?
- [ ] Has the **boring bar L/D** been checked, and does fixture geometry avoid inflating it?
- [ ] Is the **distortion coefficient measured** rather than assumed?
- [ ] Is a **clamped-versus-free measurement** in the commissioning protocol?
- [ ] Has **thermal soak** been considered?
- [ ] Is clamp force to be **set with a load cell**?

### 24. Beginner exercise
**E1.3.4-B** — A reaming operation produces a radial force of 80 N. The part is held by two clamps with
μ = 0.12, and the safety factor is 2.5.
(a) Calculate the total clamp force needed to resist the force by friction.
(b) The part distorts 0.005 mm per 1,000 N of total clamp force. Calculate the distortion at the force
from (a).
(c) The circularity requirement is 0.012 mm. State whether this passes and by what margin.
(d) Explain in one sentence why a reamer cannot correct a misplaced hole.
(e) State which single fixture feature would most reduce the required clamp force, and why.

### 25. Intermediate exercise
**E1.3.4-I** — An aluminium housing is finish-bored. The finishing radial force is 55 N; μ = 0.10 with
coolant; three clamps; safety factor 2.5. The measured distortion coefficient is 0.007 mm per 1,000 N
total clamp force. The circularity requirement is 0.008 mm, and no more than 50% of it may be consumed by
clamping distortion. The boring bar is steel, D = 25 mm, overhang 150 mm, E = 210,000 N/mm².
(a) Calculate the minimum clamp force for friction restraint.
(b) Calculate the maximum permissible clamp force from the distortion limit.
(c) State whether the window is empty, and by what percentage.
(d) A positive stop is fitted and the seating force is set to 400 N total. Calculate the resulting
distortion and its percentage of the requirement.
(e) Calculate the bar L/D and its deflection under the finishing force.
(f) Calculate the total error from distortion plus bar deflection, and state pass/fail.
(g) Calculate the deflection if a carbide bar (E = 600,000) were used, and the new total.
(h) State the two changes you would make and quantify the benefit of each.

### 26. Advanced exercise
**E1.3.4-A** — A cast iron pump body (mass 26 kg) requires two coaxial bores finished in one setup: bore
A Ø120 H7 with 0.008 mm circularity, and bore B Ø65 H7 with 0.010 mm circularity, 240 mm apart along the
axis. Roughing forces are 1,100 N (bore A) and 620 N (bore B); finishing forces are 90 N and 52 N. Four
clamps are available; μ = 0.12; safety factor 2.5. The measured distortion coefficients are 0.0035 mm/kN
at bore A and 0.0052 mm/kN at bore B (bore B's section is less stiff). Boring bar for B must reach 240 mm
past the face; a Ø50 bar is the largest that fits through bore A.
(i) Calculate the minimum friction clamp force for roughing and for finishing, for each bore.
(ii) Calculate the distortion at each bore for the roughing clamp force, and state whether roughing and
finishing can share a clamping state.
(iii) Calculate the maximum permissible clamp force for each bore, allowing distortion to consume 40% of
each circularity requirement, and identify which bore governs.
(iv) Determine whether the friction-only window is empty for the finishing operation, and by how much.
(v) Specify a positive-stop arrangement, choose a seating force, and calculate the distortion at both
bores.
(vi) Calculate the L/D and deflection for the Ø50 bar reaching bore B, in steel and in carbide.
(vii) Determine whether bore B can meet its circularity requirement, and if not, propose and quantify
two solutions.
(viii) Bore A and bore B must be coaxial within 0.02 mm. Explain how the bar deflection at bore B affects
this and what it implies for the boring strategy.
(ix) The customer proposes roughing both bores, then finishing both, all in one setup at one clamp
pressure. Write the technical objection you would raise, with numbers.
(x) Produce the complete clamping specification and the commissioning acceptance tests.

### 27. Interview questions
1. *"Reaming produces almost no cutting force. Does that make the fixture easy?"*
   **Answer:** No, it makes it harder, and that surprises people. The force does drop — a reamer might
   produce a fifth of the force of the drill that made the hole — but the tolerance drops much faster.
   You might go from plus or minus two tenths of a millimetre on the drilled hole to plus or minus ten
   microns on the reamed one. So the ratio of what you have to control to what you are controlling it
   against gets considerably worse. And more importantly, once the cutting forces are small, all the
   things that were lost in the noise become the entire problem — clamping distortion, thermal drift, a
   chip under a locator, the part springing back when you release it. The fixture stops being the thing
   that resists the process and becomes the thing that disturbs the part. So it changes from a strength
   problem into a stability problem, and those need different thinking.
2. *"What is the difference between reaming and boring, from a fixture point of view?"*
   **Answer:** The key difference is that boring corrects position and reaming does not. A reamer has
   several cutting edges around its circumference, so the forces balance and it self-centres in the hole
   that is already there — it improves size, roundness and finish, but it follows whatever position the
   drill left. A boring bar has a single edge, nothing balances it, so it cuts to wherever the spindle
   axis is, which means it corrects position to the machine's accuracy. From the fixture point of view,
   if the part's hole position depends on the fixture locating accurately, then boring puts the burden
   on the machine and the offsets, whereas reaming puts it on whatever positioned the original drilled
   hole. The other difference is that the single-edge boring bar deflects under its radial force and
   nothing opposes it, so bar overhang matters — and fixture geometry that forces a longer overhang is
   the fixture designer's problem, because deflection goes as the cube of length.

### 28. Expert questions
1. *"You say the answer at finishing tolerances is often less clamping. How do you persuade a shop floor
   that has spent years being told to clamp tightly?"*
   **Answer:** Not by asserting it, because the instinct they have is correct for most of what they do
   and they will rightly distrust a general claim that contradicts it. **I would run the measurement in
   front of them**, because it is quick and it is unarguable.
   The test is to take a finished part, measure the bore while it is still clamped in the fixture, then
   release it and measure again. If the bore is round clamped and oval free, the argument is over — the
   part is being squeezed out of shape, machined true in the distorted state, and springing back. Nobody
   who sees that on a bore gauge continues to argue for more clamp force. And it takes five minutes.
   The second step is to show that **the fixture still holds at lower force**, because the fear behind
   tight clamping is that the part will move. At reaming and fine boring forces that fear is
   quantitatively unfounded — in the case we worked, the finishing cut needed about 1,350 newtons of
   clamping to generate enough friction, against a roughing requirement of over 16,000. Dropping the
   pressure and demonstrating that the part does not shift addresses the real concern rather than
   dismissing it.
   The third step, and the one that actually resolves it permanently, is to **remove the reason for the
   clamp force altogether by fitting a positive stop**. Once a stop takes the cutting reaction, the
   clamp is only seating the part, and the conversation stops being about how tight is tight enough.
   That is a better outcome than winning an argument about pressure settings, because it does not depend
   on anyone remembering.
   I would also be careful about how I frame it, because "clamp less" sounds like "be less careful" and
   it is the opposite. **The message is that clamp force is a specified quantity with an upper and a
   lower bound, not a virtue to be maximised.** On a finishing fixture I put a maximum on the drawing
   and I set it with a load cell, which signals that this is engineering rather than preference. Once
   people see a number with a tolerance on it, it gets treated like any other controlled dimension.
   And I would acknowledge where their instinct is right. On the roughing fixture next to it, clamp hard
   — the forces are thirteen times higher and distortion does not matter because the finishing pass will
   remove the evidence. **The two fixtures want opposite things, and being explicit about why prevents
   the rule being over-generalised in either direction.**
2. *"When would you accept measuring something rather than calculating it, and does that not undermine
   the engineering?"*
   **Answer:** I would accept it when the calculation available to me would not actually represent the
   thing I am trying to predict, and I do not think it undermines the engineering — **I think insisting
   on a calculation in that situation is what undermines it.**
   The clamping distortion coefficient in this lesson is the clear case. There is a classical formula
   for the diametral distortion of a thin circular ring under two opposed point loads, and it is exact
   for a thin circular ring. A cast iron pump housing is not a thin circular ring. It has ribs, varying
   wall thickness, a flange, cored passages and a non-uniform section. Applying the ring formula to it
   would produce a number with three decimal places and no relationship to reality — and the danger is
   precisely that it looks like an answer. **A wrong number with units attached is more dangerous than
   an admitted unknown**, because it stops the enquiry.
   FEA is the obvious next suggestion, and it is genuinely useful here, but with a specific limitation
   worth being honest about: its accuracy for clamping distortion depends heavily on the contact
   modelling, on assumed friction, on how the clamp load is idealised, and on material properties that
   for a casting have real scatter. In my experience it is **reliable for comparing options** — this
   clamp position versus that one — and much less reliable as an absolute prediction to be checked
   against a ten-micron tolerance. So I use it to choose, and then I measure.
   The measurement itself is not difficult. A load cell under the clamp, a bore gauge in the hole, take
   readings at three or four clamp forces, and you have a coefficient with a slope and a scatter band in
   about twenty minutes. That number is specific to the actual part, the actual clamp positions and the
   actual pads. **No calculation can give you that.**
   Where I would push back on myself is that a measured coefficient is only valid for the configuration
   measured. Change the clamp positions and it changes. Change the casting supplier and the section
   thicknesses may drift. So a measured value needs to be recorded with the conditions it applies to,
   and re-checked if anything changes — which is a discipline that a calculated value, misleadingly,
   does not seem to require.
   The general principle I would state is that **engineering judgement includes knowing which questions
   your models can answer.** Using a formula outside its assumptions is not more rigorous than
   measuring; it is less. The rigorous position is to be explicit about which numbers are calculated,
   which are measured, which are guidelines from a handbook and which are assumptions — which is exactly
   why this programme tags every value that way.

### 29. Summary
Reaming and boring produce very low cutting forces and impose the most demanding fixture requirements in
the module, because the tolerance tightens faster than the force falls — force down 4.75× while tolerance
tightens 13.3× makes the problem 2.8 times harder, not easier. Once cutting forces are small, the
fixture's own effects stop being negligible, and it ceases to be the thing that resists the process and
becomes the thing that disturbs the part: clamping distortion, thermal drift, chips and springback become
the entire error budget. Strength, stiffness and stability are three independent properties, and a fixture
can be enormously strong, perfectly stiff and completely unsuitable for finishing. The dominant error is
clamping distortion, where the part is squeezed slightly out of shape, bored perfectly round in that
state, and springs oval on release — round while clamped, oval when free, with nothing overloaded and no
force calculation capable of predicting it; the diagnostic is simply to measure the bore in both states.
The worked example produced the key result: the clamp force needed to generate friction, 1,354.2 N,
exceeded the force that would distort the part beyond its 0.010 mm circularity requirement, 1,250 N, so
the window was empty and no clamp force existed that satisfied both — resolved only by fitting a positive
stop, which removes the lower bound entirely and allows a 600 N seating force at 24% of the requirement.
Roughing and finishing were 13 times apart and cannot share a clamping state. Finally, boring corrects
position while reaming follows it, so a reamer makes a misplaced hole round, smooth and exactly the wrong
position; and the boring bar's L/D — driven partly by fixture geometry, since δ ∝ L³ — decided between a
steel bar at 89.7% of the budget and a carbide bar at 47.0%.

### 30. Key takeaways
- **Low force with tight tolerance makes the problem harder, not easier** — 2.8× harder in the example.
- **When cutting forces become negligible, the fixture's own effects do not.** The fixture becomes the
  disturber, not the resister.
- **Strength, stiffness and stability are three different properties.**
- **Clamping distortion is the dominant error**: round while clamped, oval when free.
- **Measure the bore clamped and unclamped.** Five minutes; it settles most arguments.
- **Clamp force has an upper bound as well as a lower one, and they can cross** — the empty window.
- **A positive stop removes the lower bound.** Here it did not improve the answer, it created one.
- **Roughing and finishing want opposite clamp forces** — 13× apart; one state cannot serve both.
- **Clamp over ribs, in line with supports**, with the minimum force that holds.
- **Boring corrects position; reaming follows it.**
- **L/D ≤4 steel, 4–6 marginal, 6–8 carbide, >8 anti-vibration** `[PRACTICE]`; carbide is 2.857× stiffer.
- **A chip under a locator is 0.05–0.5 mm** — catastrophic at ±0.01 mm.
- **Measure rather than calculate when the formula does not represent the part.** A wrong number with
  units is more dangerous than an admitted unknown.

---

## LESSON L1.3.5 — TAPPING

### 1. Lesson title
**L1.3.5 — Reversal torque, rigid versus floating tapping, and chip packing**

### 2. Learning objective
By the end of this lesson you will be able to calculate tapping torque, explain why the torque reverses
direction at the end of every hole and why that is the governing fixture load case, distinguish rigid
from floating tapping and state the fixture implications of each, explain chip packing and its
consequences, and specify anti-rotation features that work in both directions.

### 3. Prerequisites
L1.3.3 (drilling torque, anti-rotation, moment arms), L1.3.1 (force resolution), L0.3.2 (moments).

### 4. Why the topic matters
Tapping is the operation that most reliably exposes a fixture that was designed for one direction of
load. Every other operation in this module applies its force in a direction that is at worst uncertain;
**tapping applies its torque in one direction, then deliberately reverses it, on every single hole.**

```
   THE TAPPING CYCLE

   1. Tap feeds in, cutting the thread     ↻ torque
   2. Tap reaches depth, spindle STOPS     — zero
   3. Spindle REVERSES                     ↺ torque
   4. Tap backs out                        ↺ torque

   ┌──────────────────────────────────────────────┐
   │ AN ANTI-ROTATION STOP THAT WORKS IN ONE      │
   │ DIRECTION IS USELESS FOR HALF OF EVERY       │
   │ TAPPING CYCLE.                               │
   └──────────────────────────────────────────────┘
```

That single fact is the reason this lesson exists. A stop resists only in compression — established in
L1.3.2 — so a stop that takes the cutting torque does nothing at all when the tap reverses. And the
reversal torque is not small: backing a tap out of a hole packed with chips can require **more** torque
than cutting the thread did.

There is a second reason. **Tapping is where broken tools become expensive**, because a tap breaks off
inside a hole in a part that has already had every other operation performed on it. `[PRACTICE]` A tap
broken in the last operation of a long cycle scraps a part carrying its full accumulated value, and
removing a broken tap is often impossible. **The fixture's contribution to preventing that is worth
more than the fixture costs.**

### 5. Simple explanation

```
   WHAT A TAP DOES

   It cuts a thread by being screwed into a hole.
   Unlike a drill, IT PULLS ITSELF IN — the thread it
   is cutting acts as a leadscrew.

        ║ ↻
        ║      the tap advances one PITCH per
     ▓▓▓▓▓▓▓   revolution, whether the machine
     ▓▓▓▓▓▓▓   feeds it or not
```

That self-feeding behaviour is the source of both of tapping's characteristic problems:

```
   PROBLEM 1 — FEED MUST MATCH PITCH EXACTLY

     If the machine feeds slower than the tap wants
     to advance, the tap is stretched.
     If faster, it is compressed.
     Either way the thread is distorted, and in the
     worst case the tap breaks.

     → this is what RIGID vs FLOATING tapping is about

   PROBLEM 2 — THE CHIPS HAVE NOWHERE TO GO

     In a blind hole especially, the chips are
     driven ahead of the tap into the bottom of the
     hole.

        ║
     ▓▓▓║▓▓▓
     ▓▓▓║▓▓▓
     ▓▓▓▓▓▓▓  ← chips packing here
       ▒▒▒▒

     When the tap reverses, it must climb back out
     THROUGH the packed chips.
     → REVERSAL TORQUE CAN EXCEED CUTTING TORQUE
```

### 6. Engineering explanation

**TAPPING TORQUE**

`[GUIDE]` Tapping torque depends on thread size, pitch, material, the percentage of thread engagement
and the tap type. An indicative empirical form:

```
   M_tap ≈ K_t · d² · P

   where d = nominal thread diameter (mm)
         P = pitch (mm)
         K_t = material constant
```

`[GUIDE]` Indicative K_t values, to be confirmed against tap manufacturer data:

| Material | K_t | Note |
|---|---|---|
| Aluminium | 15–30 | Low, but chips are gummy |
| Cast iron | 25–45 | Short chips; generally easy |
| Mild steel | 40–70 | |
| EN8 / medium carbon | 55–90 | |
| Stainless steel | 80–130 | High, and work-hardens badly |

**Two factors modify this substantially** `[GUIDE]`:

| Factor | Effect on torque |
|---|---|
| **Thread engagement percentage** | 75% engagement is standard; 60% can reduce torque by 25–30%; 100% can double it |
| **Tap type** | Spiral point (gun) taps for through-holes push chips ahead; spiral flute taps for blind holes pull chips back; forming taps produce no chips but need higher torque |

> **The thread engagement point is worth dwelling on**, because it is a process lever with a large
> effect. `[PRACTICE]` A 75% thread is the usual default and retains roughly 95% of the strength of a
> 100% thread while requiring far less torque. **Reducing engagement from 75% to 60% is a legitimate way
> to solve a tapping torque problem**, and it is often available when a fixture change is not. It is
> worth knowing so you can suggest it.

**THE REVERSAL — THE GOVERNING LOAD CASE**

```
   TORQUE THROUGH A TAPPING CYCLE

   torque │      ╱▔▔▔▔▔▔╲
      ↻   │     ╱         ╲
          │    ╱           ╲
        0 ├───╱─────────────╲──────────────
          │                  ╲    ╱▔▔╲
      ↺   │                   ╲__╱    ╲___
          └──────────────────────────────► time
            cut in      reverse    back out

   THE REVERSAL IS NOT A SMALL EVENT:
     ✓ Direction changes completely
     ✓ Magnitude can EXCEED the cutting torque if
       chips have packed
     ✓ It happens on EVERY hole
```

`[GUIDE]` A reasonable design basis is to assume the **reversal torque equals the cutting torque** for
through-holes and clean conditions, and **1.2–1.5 × cutting torque** for blind holes where chip packing
is possible. **These are design guidelines and must be confirmed**; in a badly packed blind hole the
back-out torque can be far higher and is what breaks taps.

**THE FIXTURE CONSEQUENCE — BIDIRECTIONAL RESTRAINT**

```
   ✗ SINGLE STOP — WORKS ONE WAY ONLY

      ↻ cutting             ↺ reversing
    ┌──────┐▐             ▐┌──────┐
    │ PART │  stop        │ PART │  stop does
    └──────┘              └──────┘  NOTHING
      ✓ held                ✗ FREE TO ROTATE

  ─────────────────────────────────────────────────

   ✓ SOLUTION 1 — TWO OPPOSED STOPS

    ▐┌──────┐▐    one stop each side
     │ PART │     ✓ works both directions
    ▐└──────┘▐    ✗ risk of over-constraint if both
                    are set tight simultaneously
                  [PRACTICE] provide a small
                  clearance on one, accepting a
                  tiny rotational backlash

   ✓ SOLUTION 2 — FORM-CLOSED LOCATION

     A pin in a bore, or two pins, resist rotation
     in BOTH directions inherently.
     ✓ No over-constraint issue
     ✓ One feature
     → THE PREFERRED ANSWER where the part allows

   ✓ SOLUTION 3 — CLAMP FRICTION
     Works in both directions, but at the μ penalty
     established throughout this module — seven to
     ten units of clamp force per unit of restraint.
     Acceptable when the torque is genuinely small.
```

> **Solution 2 is why parts with two location pins tap so much more easily than parts located on edges.**
> Two pins provide bidirectional rotational restraint automatically, with no over-constraint concern and
> no clamp force requirement. It is worth recognising as a positive reason to prefer pin location, in
> addition to the contouring argument from L1.3.2.

**RIGID VERSUS FLOATING TAPPING**

```
   FLOATING TAP HOLDER
     A compensating holder allows the tap to move
     axially a few millimetres relative to the
     spindle.
     ✓ Tolerates a mismatch between feed and pitch
     ✓ Forgiving of machine synchronisation error
     ✓ Standard on older machines
     ✗ Thread depth control is less precise
     ✗ Cannot tap to a precise depth in a blind hole
       as reliably

   RIGID TAPPING
     The control synchronises spindle rotation and
     Z feed exactly, so feed per revolution equals
     the pitch.
     ✓ Precise depth control
     ✓ Faster; no floating holder needed
     ✓ Can reverse at an exact depth
     ✗ REQUIRES the machine to have synchronised
       spindle capability (an encoder on the spindle)
     ✗ Any synchronisation error goes straight into
       the tap as axial load

   ┌──────────────────────────────────────────────┐
   │ FIXTURE IMPLICATION:                         │
   │                                              │
   │ FLOATING tapping is FORGIVING of small axial │
   │ position errors in the fixture, because the  │
   │ holder absorbs them.                         │
   │                                              │
   │ RIGID tapping is NOT. If the part sits 0.5 mm│
   │ higher than expected, the tap reaches depth   │
   │ 0.5 mm early and the control keeps driving.  │
   │                                              │
   │ → RIGID TAPPING IN BLIND HOLES DEMANDS       │
   │   ACCURATE AND REPEATABLE Z LOCATION.        │
   └──────────────────────────────────────────────┘
```

`[PRACTICE]` That last point is a genuine fixture requirement that is easy to miss. **A fixture whose Z
seating varies — because of chips, because a locating pad is not relieved, because the part rocks — will
break taps in blind holes under rigid tapping** even though the same fixture was perfectly adequate for
drilling and milling.

**CHIP PACKING AND ITS CONSEQUENCES**

```
   THROUGH HOLE                BLIND HOLE
     ║                           ║
   ▓▓║▓▓                       ▓▓║▓▓
   ▓▓║▓▓                       ▓▓║▓▓
     ▼ chips pushed             ▓▓▓▓▓ ← nowhere to go
       straight through           ▒▒▒   chips PACK

   ✓ Spiral point (gun) tap      ✓ Spiral flute tap
     pushes chips AHEAD            pulls chips BACK
                                   out of the hole
                                 ✓ Or a forming tap
                                   — NO CHIPS AT ALL
```

`[PRACTICE]` **Forming (roll) taps deserve specific mention** because they solve the chip problem
completely: they displace material rather than cutting it, so there are no chips to pack. They require
higher torque, a more precisely sized pre-drilled hole, and a material with adequate ductility — so they
suit aluminium, mild steel and many stainless grades, and not cast iron or hardened material. **Where
they are applicable they remove an entire failure mode**, which is worth raising with the process
engineer.

**THE AXIAL FORCE — SMALL BUT NOT ZERO**

Tapping's axial force is much smaller than drilling's, because the tap is not cutting a hole from solid.
But it is not negligible in one specific case:

```
   AT REVERSAL, THE TAP TRIES TO PULL THE PART UP

     The tap is engaged in the thread it has just
     cut. If the part is not held down, the tap can
     simply lift the part rather than unscrewing
     from it.

   ✗ On a light part with weak clamping, this
     happens — and it usually breaks the tap.
   [PRACTICE] Ensure the clamps resist an upward
   force; the tap's axial engagement can generate
   a substantial pull.
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Tapping** | Cutting an internal thread with a multi-edge tool that self-feeds |
| **Pitch (P)** | Axial advance per revolution of the thread |
| **Thread engagement %** | Proportion of the theoretical full thread depth produced |
| **Spiral point / gun tap** | Tap that pushes chips ahead — for through-holes |
| **Spiral flute tap** | Tap that pulls chips back out — for blind holes |
| **Forming / roll tap** | Displaces material rather than cutting; produces no chips |
| **Rigid tapping** | Spindle rotation and Z feed synchronised by the control |
| **Floating tap holder** | Holder allowing axial compensation between feed and pitch |
| **Reversal torque** | Torque required to back the tap out |
| **Chip packing** | Chips compacted in the bottom of a blind hole |
| **Tapping drill size** | Pre-drilled hole diameter determining thread engagement |
| **Bidirectional restraint** | Anti-rotation effective in both directions |

### 8. Principle

> **TAPPING REVERSES ITS TORQUE ON EVERY HOLE.** An anti-rotation stop that works in one direction is
> useless for half of every tapping cycle. **Restraint must be bidirectional** — two opposed stops, or a
> form-closed location such as two pins.
> **THE REVERSAL TORQUE CAN EXCEED THE CUTTING TORQUE** where chips have packed — design for 1.2–1.5×
> in blind holes `[GUIDE]`.
> **RIGID TAPPING DEMANDS ACCURATE AND REPEATABLE Z LOCATION** in a way that drilling and milling do
> not; a floating holder forgives what rigid tapping punishes.
> **AT REVERSAL THE TAP TRIES TO LIFT THE PART.** Clamps must resist upward force.
> **A BROKEN TAP SCRAPS A PART CARRYING ITS FULL ACCUMULATED VALUE** — tapping is usually the last
> operation.

### 9. Industrial application

**Why two location pins make tapping easy**

```
   PART ON TWO PINS                PART ON EDGE STOPS

     ┌──────────┐                    ▐┌──────────┐
     │  ◉    ◉  │                     │          │
     └──────────┘                    ▐└──────────┘

   Rotation in EITHER direction     One stop resists
   is resisted by the pins          ONE direction only
   inherently.                      → the reversal is
   ✓ Bidirectional                    unrestrained
   ✓ No over-constraint issue       ✗ needs a second
   ✓ No clamp force needed for        opposed stop, with
     rotation                         over-constraint
                                      risk

   ┌──────────────────────────────────────────────┐
   │ THIS IS A SECOND, INDEPENDENT REASON TO      │
   │ PREFER PIN LOCATION — the first was the      │
   │ 360° contouring argument in L1.3.2.          │
   │                                              │
   │ TWO PINS SOLVE THE TAPPING PROBLEM FOR FREE. │
   └──────────────────────────────────────────────┘
```

**The tapping failure that scraps the most value** `[EX-ASSUMED]` illustrative:

```
SITUATION
  Aluminium housing. 40-minute cycle: face milling,
  boring, drilling, then 12 × M8 blind tapped holes
  as the final operation.

SYMPTOM
  Occasional tap breakage in the last few holes.
  Each breakage scraps a part with 38 minutes of
  machining already in it, plus the cost of removing
  the fixture from the machine.

DIAGNOSIS
  1. Blind holes, spiral POINT tap used (wrong —
     it pushes chips into the bottom of a blind
     hole).
  2. Chips packed; reversal torque rose progressively
     through the 12 holes as swarf accumulated.
  3. Rigid tapping, and the part's Z seating varied
     because a locating pad was NOT relieved and
     collected chips from the earlier drilling
     operations.
  4. Single anti-rotation stop, effective only in the
     cutting direction.

  → THREE INDEPENDENT CAUSES, ALL PRESENT.

CORRECTIVE
  - Spiral FLUTE taps for the blind holes
  - Relieved locating pads and air blast before
    the tapping sequence
  - Second opposed anti-rotation stop
CONSIDERED
  - Forming taps: viable in aluminium, would remove
    the chip mechanism entirely

THE LESSON
  TAPPING IS USUALLY THE LAST OPERATION, SO ITS
  FAILURES ARE THE MOST EXPENSIVE. A fixture feature
  that costs a few thousand rupees prevents the loss
  of parts carrying an hour of accumulated value.
  THE ECONOMIC CASE FOR GETTING TAPPING RIGHT IS
  STRONGER THAN FOR ANY OTHER OPERATION IN THE
  MODULE.
```

### 10. Design rules
- **R1** — Provide **bidirectional anti-rotation** — two opposed stops or a form-closed location
  `[PRACTICE]`.
- **R2** — Prefer **two location pins**, which give bidirectional rotational restraint inherently.
- **R3** — Where two opposed stops are used, provide a **small clearance on one** to avoid
  over-constraint `[PRACTICE]`.
- **R4** — Design for a reversal torque of **1.0× cutting torque (through-holes)** and **1.2–1.5×
  (blind holes)** `[GUIDE]`.
- **R5** — Ensure clamps **resist upward force**; the tap can lift the part at reversal.
- **R6** — For **rigid tapping**, ensure **accurate and repeatable Z location** — relieved pads, air
  blast, no rocking.
- **R7** — Provide **chip clearance and air blast before the tapping sequence**, especially after
  drilling.
- **R8** — Maximise the **moment arm** of clamps and stops — `M_resist = μ·F·r` as in L1.3.3.
- **R9** — Recognise tapping as the **last operation** and weight the reliability case accordingly.
- **R10** — Where torque is marginal, raise **reduced thread engagement** (75% → 60%) or **forming taps**
  with the process engineer `[PRACTICE]`.

### 11. Rules of thumb
- **Tapping reverses on every hole.** One-directional restraint fails half the time.
- **Two pins solve the tapping problem for free.**
- Reversal torque **1.0× through-hole, 1.2–1.5× blind** `[GUIDE]`.
- **Back-out torque can exceed cutting torque** when chips pack.
- **Torque ∝ d² · P** — an M12 tap produces far more than an M8.
- **75% engagement is standard**; 60% cuts torque by 25–30% and keeps ~95% of strength `[GUIDE]`.
- **Spiral point for through-holes, spiral flute for blind holes.**
- **Forming taps make no chips** — they remove the failure mode where applicable.
- **Rigid tapping punishes Z location errors** that floating tapping forgives.
- **The tap can lift the part at reversal.**
- **Tapping is usually last — its failures cost the most.**

### 12. Formulae

**Tapping torque** `[GUIDE]`
```
M_tap ≈ K_t · d² · P
```

**Reversal design torque**
```
M_rev = C_rev · M_tap
   C_rev = 1.0        through-holes  [GUIDE]
   C_rev = 1.2 – 1.5  blind holes    [GUIDE]

M_design = M_rev · SF
```

**Bidirectional restraint requirement**
```
Both directions must satisfy:
   M_resist ≥ M_design

With opposed stops:  R_stop = M_design / r
With friction:       F_clamp,total ≥ M_design/(μ·r)
With two pins at spacing s:
                     R_pin = M_design / s
```

**Thread engagement and tapping drill size**
```
d_drill = d − (engagement% / 100) × 1.0825 × P

(for ISO metric threads; 1.0825·P is the full
 thread depth factor)   [STD, ISO 68-1 geometry]
```

**Torque reduction from reduced engagement** `[GUIDE]`
```
M(60%) ≈ 0.70 – 0.75 × M(75%)
```

| Variable | Meaning | Unit |
|---|---|---|
| K_t | Tapping torque constant | N·mm/(mm²·mm) |
| d | Nominal thread diameter | mm |
| P | Pitch | mm |
| C_rev | Reversal torque factor | — |
| s | Spacing between two location pins | mm |

### 13. Worked numerical example

**Problem:** A steel bracket receives eight M10 tapped blind holes as the final operation. Determine the
tapping torque and the reversal design torque, evaluate a single stop against opposed stops against two
location pins, calculate the required clamp force if friction alone were used, assess the benefit of
reduced thread engagement, and establish the governing arrangement.

```
GIVEN:
  TAPPING                                        [PROJ]
    Material            mild steel
    Thread              M10 × 1.5
    d                   = 10 mm
    P                   = 1.5 mm
    Thread engagement   = 75 % (standard)
    Holes               = 8, BLIND
    K_t                 = 55 N·mm/(mm²·mm)
                          [GUIDE, mild steel 40-70]

  FACTORS                                        [GUIDE]
    Reversal factor, blind hole C_rev = 1.35
    Safety factor SF                  = 2.5  [PRACTICE]

  FIXTURE                                        [PROJ]
    Part mass           = 5.2 kg
    Two clamps at r     = 75 mm
    μ (coolant)         = 0.12
    Option A: single stop at r = 85 mm
    Option B: two opposed stops at r = 85 mm
    Option C: two location pins at spacing
              s        = 190 mm

REQUIRED:
  (a) Cutting torque and reversal design torque
  (b) Adequacy of Option A (single stop)
  (c) Stop reaction for Option B
  (d) Pin reaction for Option C
  (e) Clamp force if friction alone resisted the
      reversal
  (f) Benefit of reducing engagement to 60 %
  (g) Recommended arrangement
  (h) Engineering conclusion

ASSUMPTION:
  1. K_t = 55 is a GUIDELINE mid-range value for mild
     steel at 75 % engagement with a sharp tap. Tap
     condition, coating and lubrication all affect it
     substantially and it MUST BE CONFIRMED against
     tap manufacturer data. [GUIDE]
  2. Reversal factor 1.35 for a blind hole, from the
     1.2-1.5 guideline range. A SEVERELY packed hole
     can exceed this and is a process failure rather
     than a design case. [GUIDE]
  3. One hole tapped at a time; torques not
     superimposed.
  4. μ = 0.12 with coolant. [GUIDE]
  5. Torque reduction at 60 % engagement taken as
     0.725 (mid-range of the 0.70-0.75 guideline).
     [GUIDE]
  6. Pin/bore clearance assumed small enough that
     both pins share the reaction. In reality
     clearance means one pin may take the load
     first — a CONSERVATIVE design would size a
     single pin for the full reaction. [PRACTICE]

FORMULA:
  (a) M = K_t·d²·P ; M_design = C_rev·M·SF
  (c) R = M_design/r
  (d) R = M_design/s
  (e) F_clamp = M_design/(μ·r)

UNIT CONVERSION:
  Torque N·mm, forces N, lengths mm.

SUBSTITUTION AND CALCULATION:

  (a) CUTTING AND REVERSAL TORQUE

      M_tap = K_t · d² · P
            = 55 × 10² × 1.5
            = 55 × 100 × 1.5
            = 8,250 N·mm
            = 8.25 N·m

      Reversal torque:
        M_rev = C_rev · M_tap
              = 1.35 × 8,250
              = 11,137.5 N·mm

      Design torque:
        M_design = M_rev × SF
                 = 11,137.5 × 2.5
                 = 27,843.75 N·mm
                 ≈ 27,844 N·mm

  (b) OPTION A — SINGLE STOP

      In the CUTTING direction:
        R = 27,844 / 85 = 327.6 N
        ✓ Trivially satisfied.

      In the REVERSAL direction:
        THE STOP CARRIES NOTHING. A stop resists
        only in compression, and the part is now
        being pushed AWAY from it.

        The only restraint is clamp friction:
          M_resist = μ · F_clamp,total · r
                   = 0.12 × F × 75

        Require ≥ 27,844:
          F = 27,844 / (0.12 × 75)
            = 27,844 / 9
            = 3,093.8 N total
            = 1,546.9 N per clamp

      ✗ OPTION A FAILS as an anti-rotation strategy.
        It reduces to friction-only for half of every
        cycle, requiring 1,546.9 N per clamp — which
        may be achievable, but means the stop is
        contributing nothing when it is most needed.

  (c) OPTION B — TWO OPPOSED STOPS

      Each direction is taken by one stop:
        R = M_design / r
          = 27,844 / 85
          = 327.6 N

      ✓ 327.6 N at each stop. Trivial.

      Clamps then only resist UPLIFT and seat the
      part — a nominal requirement.

  (d) OPTION C — TWO LOCATION PINS

      The couple is reacted by the two pins:
        R = M_design / s
          = 27,844 / 190
          = 146.5 N per pin

      ✓ 146.5 N per pin. Even more comfortable,
        because the spacing (190 mm) exceeds the stop
        radius (85 mm) by 2.24×.

      CONSERVATIVE CHECK (assumption 6): if clearance
      means ONE pin takes the entire reaction at a
      radius equal to half the spacing:
        R = 27,844 / 95 = 293.1 N
      ✓ Still trivial.

  (e) FRICTION ALONE

      F_clamp,total = M_design / (μ · r)
                    = 27,844 / (0.12 × 75)
                    = 3,093.8 N total
                    = 1,546.9 N per clamp

      Compare with Option C's 146.5 N per pin:
        3,093.8 / (2 × 146.5) = 10.56 ×

      → Friction requires 10.56× the total reaction
        force of the pin solution.

  (f) REDUCED THREAD ENGAGEMENT, 75 % → 60 %

      M_tap(60%) = 0.725 × 8,250
                 = 5,981.25 N·mm

      M_design(60%) = 1.35 × 5,981.25 × 2.5
                    = 20,186.7 N·mm

      REDUCTION = 1 − 20,186.7/27,843.75
                = 1 − 0.725
                = 27.5 %

      Effect on the friction option:
        F = 20,186.7 / 9 = 2,242.9 N total
          = 1,121.4 N per clamp
        (down from 1,546.9 N)

      ✓ A 27.5 % torque reduction available with NO
        fixture change — and retaining approximately
        95 % of thread strength [GUIDE].

  (g) RECOMMENDED ARRANGEMENT

      OPTION C — two location pins at 190 mm spacing,
      giving 146.5 N per pin, with clamps sized only
      for uplift and seating.

      Rationale:
        ✓ Bidirectional inherently — no second
          feature needed
        ✓ No over-constraint concern
        ✓ Lowest reaction of the three options
        ✓ Already required for part location
        ✓ Same feature also solves the contouring
          problem (L1.3.2)

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Cutting torque           │ 8,250 N·mm        │
  │     Reversal torque          │ 11,137.5 N·mm     │
  │     Design torque            │ 27,844 N·mm       │
  │ (b) Option A, cutting dir.   │ 327.6 N ✓         │
  │     Option A, reversal dir.  │ NOTHING ✗         │
  │     → falls back to friction │ 1,546.9 N/clamp   │
  │ (c) Option B, per stop       │ 327.6 N ✓         │
  │ (d) Option C, per pin        │ 146.5 N ✓         │
  │     conservative, one pin    │ 293.1 N ✓         │
  │ (e) Friction only, total     │ 3,093.8 N         │
  │     vs Option C              │ 10.56 ×           │
  │ (f) Torque at 60 % engagement│ 20,186.7 N·mm     │
  │     Reduction                │ 27.5 %            │
  │ (g) RECOMMENDED              │ Option C, 2 pins  │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  SF = 2.5 applied on top of the reversal factor of
  1.35, giving a combined factor of 3.375 on the raw
  cutting torque. That is appropriate here because
  tap condition, lubrication and chip packing are all
  outside the designer's control and all increase the
  torque, and because the consequence of failure — a
  broken tap in a part carrying its full accumulated
  value — is severe.

PASS/FAIL:
  ✗ FAIL — Option A, single stop. It contributes
    nothing in the reversal direction.
  ✓ PASS — Option B, two opposed stops, 327.6 N each.
  ✓ PASS — Option C, two pins, 146.5 N each. BEST.
  ✓ PASS — friction only, at 1,546.9 N per clamp, but
    at 10.56× the reaction force of Option C.

ENGINEERING CONCLUSION:
  1. THE SINGLE STOP IS THE TRAP, AND IT LOOKS
     CORRECT.
     Option A satisfies the cutting-direction check
     comfortably at 327.6 N and would pass any review
     that considered only the cutting torque. It
     contributes exactly NOTHING in the reversal
     direction, because a stop resists only in
     compression. The fixture then silently reverts
     to friction-only restraint for half of every
     cycle — and nobody analysed that case, because
     the drawing shows an anti-rotation stop and it
     appears to be handled.
     THE FAILURE MODE OF THIS DESIGN IS THAT IT LOOKS
     ADEQUATE. That is worse than an obviously
     inadequate design, which gets caught.

  2. TWO PINS SOLVE THE PROBLEM FOR FREE, AND THEY
     WERE ALREADY THERE.
     146.5 N per pin, bidirectional inherently, no
     over-constraint concern, and the pins exist
     anyway to locate the part. Option C is better
     than Option B not because the numbers are lower —
     though they are, by 2.24× from the larger
     spacing — but because it requires NO ADDITIONAL
     FEATURES AT ALL.
     THIS IS THE SECOND TIME PIN LOCATION HAS SOLVED
     A PROBLEM IN THIS MODULE: the 360° contouring
     case in L1.3.2 and now the reversal case here.
     WHERE A PART HAS TWO USABLE HOLES, PIN LOCATION
     IS WORTH REACHING FOR BEFORE EDGE STOPS.

  3. THE COMBINED FACTOR OF 3.375 IS DELIBERATE AND
     I WOULD DEFEND IT.
     1.35 for blind-hole reversal, 2.5 for
     uncertainty. That is a large total, and on a
     milling fixture I would question it. Here I
     would not, for two reasons. First, every
     variable that is outside my control — tap
     sharpness, lubrication, chip packing, thread
     engagement accuracy — pushes the torque UP, not
     down. Second, tapping is the last operation, so
     the consequence of being wrong is scrapping a
     part with the full cycle already invested in it
     plus a broken tap that may be unremovable.
     THE ASYMMETRY OF CONSEQUENCE JUSTIFIES THE
     ASYMMETRY OF MARGIN.

  4. THE 27.5 % PROCESS LEVER IS WORTH KNOWING EVEN
     THOUGH IT IS NOT MY DECISION.
     Reducing thread engagement from 75 % to 60 %
     cuts the torque by 27.5 % while retaining
     roughly 95 % of thread strength. That is a
     larger improvement than most fixture changes can
     deliver, it costs nothing, and it is available
     immediately by changing the tapping drill size.
     IT IS NOT A FIXTURE DESIGNER'S DECISION — but
     being able to raise it, with the numbers, is
     part of being useful. THE BEST SOLUTION TO A
     FIXTURE PROBLEM IS SOMETIMES NOT A FIXTURE
     CHANGE.

  5. WHAT I WOULD SPECIFY.
     Two location pins at 190 mm; clamps sized for
     uplift and seating only; relieved pads with air
     blast before the tapping sequence; spiral flute
     taps noted on the process sheet for the blind
     holes; and a drawing note recording that the
     pins provide bidirectional anti-rotation so that
     nobody replaces them with a single stop.

SENSITIVITY NOTE:
  Ranked by influence:
    1. BIDIRECTIONALITY OF THE RESTRAINT — this is
       binary rather than sensitive. Option A is not
       "less good", it is absent in one direction.
       The most important design decision here.
    2. THREAD ENGAGEMENT — 27.5 % on the torque, at
       no cost. The largest continuously variable
       lever available.
    3. TAP CONDITION AND LUBRICATION — potentially a
       factor of 2 and entirely outside the
       designer's control. This is what the safety
       factor is for.
    4. MOMENT ARM (r or s) — linear, as always. The
       pin spacing of 190 mm against the stop radius
       of 85 mm gave 2.24× on its own.
    5. THREAD SIZE — M = K_t·d²·P, so an M12×1.75
       would give 55 × 144 × 1.75 = 13,860 N·mm,
       which is 1.68× the M10 figure. A FIXTURE
       VALIDATED FOR M10 IS NOT AUTOMATICALLY VALID
       FOR M12.
```

### 14. Engineering assumptions
- K_t = 55 is a guideline mid-range value for mild steel at 75% engagement with a sharp tap `[GUIDE]`;
  tap condition, coating and lubrication all affect it substantially.
- Reversal factor 1.35 for a blind hole from the 1.2–1.5 range `[GUIDE]`; a severely packed hole exceeds
  this and is a process failure rather than a design case.
- One hole tapped at a time; torques not superimposed.
- μ = 0.12 with coolant `[GUIDE]`.
- 60% engagement torque factor 0.725 `[GUIDE]`.
- Both pins assumed to share the reaction; a conservative design sizes one pin for the full load
  `[PRACTICE]`.

### 15. Diagram

```
     TAPPING — REVERSAL, CHIPS AND RESTRAINT
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE CYCLE — AND THE REVERSAL

   torque │      ╱▔▔▔▔▔▔╲
      ↻   │     ╱         ╲
        0 ├────╱───────────╲──────────────
      ↺   │                 ╲__╱▔▔╲___
          └────────────────────────────► time
            cut in     reverse   back out

   ┌──────────────────────────────────────────────┐
   │ AN ANTI-ROTATION STOP THAT WORKS IN ONE      │
   │ DIRECTION IS USELESS FOR HALF OF EVERY       │
   │ TAPPING CYCLE.                               │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THREE RESTRAINT OPTIONS

   A  SINGLE STOP           B  TWO OPPOSED STOPS
    ┌──────┐▐                ▐┌──────┐▐
    │ PART │                  │ PART │
    └──────┘                 ▐└──────┘▐
    ↻ 327.6 N ✓              both directions
    ↺ NOTHING  ✗             327.6 N each ✓
    → reverts to friction    ✗ over-constraint risk
      1,546.9 N/clamp          — clearance one side

   C  TWO LOCATION PINS      ← RECOMMENDED
    ┌──────────┐
    │  ◉    ◉  │   s = 190 mm
    └──────────┘
    146.5 N per pin, BOTH directions
    ✓ inherent, no extra features
    ✓ no over-constraint
    ✓ the pins were already there

   ┌──────────────────────────────────────────────┐
   │ OPTION A IS THE TRAP: IT PASSES THE CUTTING  │
   │ CHECK AND CONTRIBUTES NOTHING WHEN IT        │
   │ MATTERS. ITS FAILURE MODE IS THAT IT LOOKS   │
   │ ADEQUATE.                                    │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  CHIP PACKING — WHY BLIND HOLES ARE WORSE

   THROUGH HOLE            BLIND HOLE
     ║                       ║
   ▓▓║▓▓                   ▓▓║▓▓
     ▼ chips exit          ▓▓▓▓▓ ← nowhere to go
                             ▒▒▒  CHIPS PACK

   ✓ spiral POINT tap      ✓ spiral FLUTE tap
     pushes chips ahead      pulls chips BACK OUT
                           ✓ or FORMING tap —
                             NO CHIPS AT ALL

   Reversal factor 1.0     Reversal factor 1.2-1.5
                           [GUIDE]

  ──────────────────────────────────────────────────────────

  RIGID vs FLOATING — THE FIXTURE IMPLICATION

   FLOATING HOLDER          RIGID TAPPING
   ┌─────┐                  ┌─────┐
   │ ≈≈≈ │ axial float      │ ▬▬▬ │ synchronised
   └──┬──┘                  └──┬──┘
      ║                        ║
   ✓ forgives Z error       ✗ Z error goes STRAIGHT
   ✗ less precise depth       into the tap
                            ✓ precise depth

   ┌──────────────────────────────────────────────┐
   │ RIGID TAPPING IN BLIND HOLES DEMANDS         │
   │ ACCURATE AND REPEATABLE Z LOCATION.          │
   │                                              │
   │ A fixture with unrelieved pads that collect  │
   │ chips will break taps — even though it was   │
   │ perfectly adequate for drilling and milling. │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE PROCESS LEVER — 27.5 % FOR FREE

   75 % engagement  ████████████ 27,844 N·mm
   60 % engagement  ████████     20,187 N·mm

   27.5 % LESS TORQUE, ~95 % OF THREAD STRENGTH
   RETAINED, NO FIXTURE CHANGE, COSTS NOTHING.

   ┌──────────────────────────────────────────────┐
   │ NOT THE FIXTURE DESIGNER'S DECISION — BUT    │
   │ BEING ABLE TO RAISE IT WITH NUMBERS IS PART  │
   │ OF BEING USEFUL.                             │
   │                                              │
   │ THE BEST SOLUTION TO A FIXTURE PROBLEM IS    │
   │ SOMETIMES NOT A FIXTURE CHANGE.              │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHY TAPPING FAILURES COST THE MOST

   OP1 face mill   ──┐
   OP2 bore          │  38 minutes of value
   OP3 drill         │  accumulated in the part
   OP4 TAP  ◄────────┘
        │
        └─► TAP BREAKS
            ✗ part scrapped at FULL value
            ✗ tap may be unremovable
            ✗ fixture off the machine

   ┌──────────────────────────────────────────────┐
   │ TAPPING IS USUALLY THE LAST OPERATION, SO    │
   │ ITS FAILURES ARE THE MOST EXPENSIVE.         │
   │ THE ASYMMETRY OF CONSEQUENCE JUSTIFIES THE   │
   │ ASYMMETRY OF MARGIN.                         │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-5640 — TAPPING LOAD CASE
STANDARD: ASME Y14.5-2018
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: TAPPING TORQUE REVERSES ON EVERY HOLE.
        ANTI-ROTATION IS PROVIDED BY LOCATING PINS
        ITEMS 3 AND 4, WHICH RESTRAIN ROTATION IN
        BOTH DIRECTIONS. DO NOT SUBSTITUTE A SINGLE
        EDGE STOP — IT WOULD BE INEFFECTIVE DURING
        TAP WITHDRAWAL.

NOTE 2: DESIGN REVERSAL TORQUE 27.8 N·m FOR M10 × 1.5
        IN MILD STEEL, INCLUDING A BLIND-HOLE
        REVERSAL FACTOR OF 1.35 AND A SAFETY FACTOR
        OF 2.5. REACTION 147 N PER PIN.

NOTE 3: TORQUE VARIES AS d² × PITCH. THIS FIXTURE IS
        NOT VALIDATED ABOVE M10 × 1.5. AN M12 × 1.75
        WOULD PRODUCE 1.68× THE DESIGN TORQUE.

NOTE 4: CLAMPS MUST RESIST UPWARD FORCE. THE TAP CAN
        LIFT THE COMPONENT DURING WITHDRAWAL.

NOTE 5: AIR BLAST ITEM 18 MUST OPERATE AFTER THE
        DRILLING SEQUENCE AND BEFORE TAPPING.
        LOCATING PADS ARE RELIEVED. RIGID TAPPING IS
        USED AND DEPENDS ON REPEATABLE Z SEATING.
```

Note 1 states not just what the feature is but **what would go wrong if it were changed** — which is the
form that survives a future cost-reduction review.

### 17. CAD workflow
1. Model the **locating pins** and check their spacing — the moment arm for the reversal couple
2. If edge stops must be used, model **both opposed stops** and provide clearance on one
3. Verify **clamps resist uplift**, not just downward seating
4. Model **relieved locating pads**
5. Model the **air blast** nozzles and verify they reach the locating surfaces
6. Check **tap and holder clearance** to clamps and stops (the holder is often larger than expected)
7. Verify the **Z seating repeatability** by modelling the pad contact areas

`[PRACTICE]` Step 6 catches a real problem: tapping holders, especially floating ones, are often
substantially larger in diameter than the tap, and clamps that cleared the drill may not clear the
tapping head.

### 18. GD&T application

```
STANDARD: ASME Y14.5-2018

  The two locating pins now carry a FUNCTIONAL
  ROTATIONAL role in addition to locating:

  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.02 Ⓜ │ A │ B │ C │        │
  └──────────────────────────────────┘

  ┌────────────────────────────────────────────┐
  │ A CONSIDERATION SPECIFIC TO THIS LESSON:   │
  │                                            │
  │ MMC (Ⓜ) allows bonus tolerance, which      │
  │ means additional CLEARANCE between pin and │
  │ bore at their extremes of size.            │
  │                                            │
  │ That clearance becomes ROTATIONAL BACKLASH │
  │ when the torque reverses — the part can    │
  │ rotate slightly before the pins take up.   │
  │                                            │
  │ For LOCATION that backlash is usually      │
  │ acceptable. For a tapping fixture it means │
  │ a small rotational movement on every       │
  │ reversal, which over thousands of cycles   │
  │ WEARS THE PINS AND BORES.                  │
  │                                            │
  │ → Consider RFS, or a tighter tolerance, or │
  │   accept it and specify a wear-monitoring  │
  │   interval. Full treatment at L22.         │
  └────────────────────────────────────────────┘
```

That trade-off is a good example of a GD&T decision with a direct maintenance consequence, and it is the
kind of thing that only appears when you think about the operation rather than just the geometry.

### 19. Manufacturing method
Locating pins follow the standard route: EN19 or EN31, hardened 40–45 HRC (pins) or 58–62 HRC
(locators), ground, fitted into reamed bores. `[PRACTICE]` For a tapping fixture where reversal cycles
will wear the pins, **pins should be replaceable** — pressed into a liner or retained by a screw and
dowel rather than being integral.

Air blast nozzles are bought-in standard components (L0.5.2), plumbed to operate on an M-code before the
tapping sequence.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Pin position and spacing | CMM | ±0.02 mm |
| Pin-to-bore clearance | Measure both | Minimum consistent with loading |
| Rotational play under reverse torque | Apply reverse torque, indicate | ≤0.02 mm at the pin radius |
| Clamp uplift resistance | Apply upward force, indicate | No lift at design load |
| Z seating repeatability | Load 10 times, indicate | ≤0.02 mm spread |
| Air blast function and coverage | Functional check | Reaches all pads |
| Tap holder clearance | Physical trial with the actual holder | Clears |
| Pin wear | Periodic measurement | Per maintenance interval |

`[PRACTICE]` The rotational play check under **reverse** torque is the specific verification for this
lesson, and it is different from checking in the cutting direction — which is exactly the point.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Single anti-rotation stop** | Nothing restrains the reversal; looks adequate on the drawing |
| 2 | Designing for **cutting torque only** | Reversal can be 1.2–1.5× higher in blind holes |
| 3 | **Spiral point tap in a blind hole** | Chips packed; reversal torque escalates |
| 4 | Not providing **chip clearance before tapping** | Packing; broken taps |
| 5 | **Unrelieved pads** with rigid tapping | Variable Z seating; broken taps |
| 6 | Clamps not resisting **uplift** | Tap lifts the part at reversal |
| 7 | Assuming a fixture validated for **M10 suits M12** | Torque ∝ d²·P; 1.68× more |
| 8 | Two opposed stops both set **tight** | Over-constraint |
| 9 | Not checking **tap holder clearance** | Holder fouls a clamp |
| 10 | Ignoring that tapping is the **last operation** | Under-investment where consequences are highest |
| 11 | Not raising **reduced engagement or forming taps** | A free 27.5% left on the table |
| 12 | Generous **MMC clearance** on pins | Rotational backlash on every reversal; wear |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Part rotates during tap withdrawal | Single-direction restraint | Apply reverse torque and observe | Two opposed stops or pins | Design rule R1 |
| Taps break in the last holes of a sequence | Progressive chip packing | Inspect holes for swarf | Air blast; spiral flute taps | Design rule R7 |
| Taps break in blind holes only | Wrong tap type; chip packing | Check tap type | Spiral flute or forming tap | Process sheet note |
| Broken taps started after switching to rigid tapping | Z seating variability | Repeat-load and indicate | Relieved pads; air blast | Design rule R6 |
| Part lifts during withdrawal | Clamps not resisting uplift | Observe | Increase clamp force; add clamps | Design rule R5 |
| Thread depth inconsistent | Z location variability | Measure seating repeatability | Address seating | Relieved pads |
| Pins worn oval after months | Rotational backlash cycling | Measure pins and bores | Replace pins | Tighter fit; wear interval |
| Torque higher than calculated | Dull tap; poor lubrication; wrong engagement | Check tap and drill size | Replace tap; verify drill size | Tool-life monitoring |
| Tap holder fouls a clamp | Holder larger than the tap | Physical trial | Relocate clamp | CAD step 6 |

### 23. Design checklist
- [ ] Is anti-rotation **bidirectional**?
- [ ] If stops are used, are there **two opposed**, with clearance on one?
- [ ] Are **two location pins** available and used, in preference to stops?
- [ ] Has the **reversal factor** (1.0 through, 1.2–1.5 blind) been applied?
- [ ] Do the clamps **resist uplift**?
- [ ] Is **rigid tapping** used, and if so is **Z seating repeatable**?
- [ ] Are the pads **relieved**, with **air blast before the tapping sequence**?
- [ ] Has **tap holder clearance** been checked with the actual holder?
- [ ] Is the **maximum thread size** stated on the drawing?
- [ ] Have **reduced engagement** or **forming taps** been raised with the process engineer?
- [ ] Are the **pins replaceable**, with a wear-monitoring interval?
- [ ] Has the fact that tapping is the **last operation** been reflected in the margin?

### 24. Beginner exercise
**E1.3.5-B** — An M8 × 1.25 thread is tapped in cast iron with K_t = 35 `[GUIDE]`.
(a) Calculate the cutting torque.
(b) The holes are through-holes, so take a reversal factor of 1.0 and a safety factor of 2.5. Calculate
the design torque.
(c) A single anti-rotation stop is fitted at r = 60 mm. Calculate its reaction in the cutting direction.
(d) State what restrains the part when the tap reverses, and why this is a problem.
(e) State two ways to provide bidirectional restraint.

### 25. Intermediate exercise
**E1.3.5-I** — Twelve M12 × 1.75 blind holes are tapped in EN8 with K_t = 72 `[GUIDE]`. The part weighs
9 kg, has three clamps at r = 90 mm, μ = 0.12. Use a blind-hole reversal factor of 1.4 and a safety
factor of 2.5.
(a) Calculate the cutting torque and the design torque.
(b) Calculate the clamp force per clamp required if friction alone resisted the reversal.
(c) Two opposed stops are fitted at r = 100 mm. Calculate the reaction at each.
(d) Alternatively, two location pins at 220 mm spacing are used. Calculate the reaction per pin.
(e) State the improvement factor of option (d) over option (b), comparing total reaction forces.
(f) Thread engagement is reduced from 75% to 60%, giving a torque factor of 0.72. Calculate the new
design torque and the percentage reduction.
(g) The same fixture is proposed for M16 × 2.0. Calculate the new design torque at 75% engagement and
state whether the pins in (d) remain adequate if their rating is 800 N each.
(h) Explain why the blind-hole reversal factor exceeds 1.0, and what fixture feature reduces the risk.

### 26. Advanced exercise
**E1.3.5-A** — An aluminium transmission housing (mass 12 kg, K_t = 22 `[GUIDE]`) is the final operation
in a 45-minute cycle. It requires 6 × M6 × 1.0 through-holes, 10 × M10 × 1.5 blind holes 22 mm deep, and
4 × M14 × 2.0 blind holes 30 mm deep. Rigid tapping is used. The part is located on two pins 240 mm
apart and held by four clamps at r = 105 mm, μ = 0.10. Reversal factors: 1.0 through, 1.4 blind. Safety
factor 2.5.
(i) Calculate the cutting torque and design torque for each of the three thread sizes.
(ii) Identify the governing thread size and explain why it governs.
(iii) Calculate the reaction per pin for the governing case, and state whether pins rated 600 N each are
adequate.
(iv) Calculate the clamp force per clamp that would be required if the pins were absent and friction
alone resisted the reversal.
(v) State the improvement factor and comment on whether the friction-only option is viable.
(vi) The M14 blind holes are 30 mm deep — over two diameters. Explain the chip packing risk, state the
tap type you would specify, and explain how forming taps would change the analysis.
(vii) Rigid tapping is used. State the Z seating repeatability requirement you would impose and justify
it against the shallowest blind hole.
(viii) Calculate the effect of reducing engagement on the M14 holes from 75% to 60% (factor 0.72), and
state whether this changes any conclusion.
(ix) The part carries 43 minutes of accumulated machining value when tapping begins. Given a machine rate
of ₹1,800/h `[EX-ASSUMED]`, calculate the value at risk per part and use it to justify (or not) an
additional ₹18,000 `[EX-ASSUMED]` of fixture features at a production volume of 4,000 parts per year with
an assumed tap-breakage rate of 0.4% before improvement and 0.05% after.
(x) Write the complete set of drawing and process notes for the tapping operation.

### 27. Interview questions
1. *"Why does a tapping fixture need anti-rotation in both directions?"*
   **Answer:** Because the tap reverses at the bottom of every hole. It cuts its way in with the torque
   in one direction, then the spindle stops and reverses to back the tap out, so the torque on the part
   is now in the opposite direction. A stop only resists in compression — it pushes, it cannot pull — so
   a single stop that takes the cutting torque contributes nothing at all during withdrawal, and the
   part is left held only by clamp friction for half of every cycle. What makes that dangerous is that
   the fixture looks correct: the drawing shows an anti-rotation stop, and it passes the cutting-torque
   check. The answers are either two opposed stops, or better, two locating pins, which restrain
   rotation in both directions inherently and are usually there anyway for location.
2. *"Is the torque higher going in or coming out?"*
   **Answer:** It depends on the hole and the chips. In a clean through-hole they are roughly
   comparable, and you would design for the reversal being about equal to the cutting torque. In a blind
   hole it can easily be higher coming out — typically twenty to fifty per cent more as a design basis —
   because the chips have been driven into the bottom of the hole and the tap has to climb back out
   through them. In a badly packed hole it can be much worse than that, and that is what actually breaks
   taps. The fixture responses are to design for the higher reversal figure, to provide air blast and
   chip clearance before the tapping sequence, and to make sure the process is using a spiral flute tap
   for blind holes rather than a spiral point, which pushes the chips the wrong way.

### 28. Expert questions
1. *"A shop is breaking taps intermittently on the last operation of a long cycle. Walk me through how
   you would approach it."*
   **Answer:** I would start by establishing **how much is at stake**, because that determines how much
   investigation is justified and it is usually more than people assume. Tapping is nearly always the
   last operation, so a broken tap scraps a part carrying the full accumulated value of every prior
   operation — potentially forty minutes of machining — plus the machine downtime to extract the tap,
   which is often not possible at all. At a few thousand rupees of accumulated value per part, even a
   half-percent breakage rate justifies real effort.
   Then I would look for the **pattern**, because tap breakage is rarely random even when it appears to
   be. The questions are: is it always the same hole, or the same position in the sequence? If breakages
   cluster in the last few holes of a sequence, that points at progressive chip accumulation. Is it
   blind holes only? That points at chip packing and probably the wrong tap type. Is it worse on the
   first parts after a break, or after a tool change? That suggests thermal or setup effects. Does it
   correlate with a particular operator or shift? That usually means a manual step is variable.
   The **fixture-specific checks** I would make are three. First, **is the anti-rotation bidirectional?**
   A single stop is the classic error and it passes casual inspection because the cutting direction is
   handled. I would apply a reverse torque by hand with a bar and see whether the part moves. Second,
   **is the Z seating repeatable?** — this matters enormously with rigid tapping and not at all with a
   floating holder, so if the shop has recently moved to rigid tapping and breakages started, that is a
   strong lead. Unrelieved pads collecting chips from the earlier drilling operations is a very common
   root cause. Third, **do the clamps resist uplift?** The tap is screwed into the part at reversal and
   can lift it bodily.
   The **process checks** are equally important and I would not treat them as someone else's problem.
   Tap type against hole type — spiral point in a blind hole is simply wrong and it is a frequent
   finding. Chip clearance before the tapping sequence. Lubrication reaching the hole. Tapping drill
   size, because an undersized pre-drill raises engagement above 75 per cent and the torque climbs
   steeply. Tap condition and change interval.
   And I would put the **process levers** on the table alongside the fixture ones, because they are often
   faster and cheaper: reducing thread engagement from 75 to 60 per cent takes about 27 per cent out of
   the torque for essentially no loss of strength, and forming taps in aluminium eliminate chips
   entirely. Neither is my decision, but both belong in the conversation.
   What I would avoid is fixing one cause and declaring victory. In the case I described in this lesson
   there were three independent contributors present simultaneously — wrong tap type, chip-fouled
   seating, and single-direction restraint — and removing any one of them would have reduced the
   breakage rate enough to look like a solution while leaving the fixture one bad batch away from the
   problem returning. **Intermittent failures usually have more than one cause, which is precisely why
   they are intermittent.**
2. *"You have mentioned pin location favourably several times now. When would you not use it?"*
   **Answer:** It is a fair challenge, because I have argued for it twice in this module — for the 360°
   contouring case and for the tapping reversal — and a preference applied without limits becomes a
   habit rather than a judgement.
   The first and most obvious limitation is that **the part must have two suitable holes**, and they must
   be **machined**, not as-cast or as-punched. Locating on an as-cast hole inherits the casting's
   positional variation directly, which can be several tenths of a millimetre, and that is often worse
   than locating on an external form. So the question is not "does the part have holes" but "does the
   part have holes that are accurate relative to the features I am about to machine".
   The second is **over-constraint**, and it is the classic error with two pins. Two round pins in two
   round holes over-constrain the part in the direction along the line between them: any difference
   between the pin spacing and the hole spacing means the part either will not go on or is forced. The
   standard answer is a **round pin and a diamond (relieved) pin**, where the diamond pin controls
   rotation but allows the spacing variation to be absorbed. Anyone using two round pins without
   thinking about this will produce a fixture that jams, and it is one of the most common fixture faults
   there is.
   The third is that **pins impose a loading direction**. The part has to be lowered onto them, which
   means vertical access and enough clearance above the fixture for the part plus the pin length. On a
   horizontal machine, or where the part is heavy and awkward, or where the operator has to slide the
   part in from the side, pins can be impractical.
   The fourth is **wear and damage**. A pin is a small, protruding, precisely sized feature in a
   production environment. It gets knocked, it wears, it collects chips in the bore. In the tapping case
   specifically, the rotational backlash on every reversal cycles the pin against the bore and wears it
   oval over time. That is manageable with replaceable pins and a wear interval, but it is a real
   maintenance burden that three edge stops do not have to the same degree.
   The fifth is **the part's own tolerance**. If the holes are positionally loose relative to each other,
   pin location transmits that looseness into the part's orientation in the fixture, amplified by the
   ratio of part size to pin spacing. Sometimes an external form is more consistently made than the
   holes are.
   So my actual position is narrower than it may have sounded: **where a part has two accurately machined
   holes at a useful spacing, and vertical loading is practical, pin location is usually the best answer
   — using a round pin and a diamond pin — and it happens to solve the rotating-load and reversal
   problems for free.** Where any of those conditions fails, edge location with an appropriate number of
   stops is correct, and the number of stops is then determined by the directions the load can take.

### 29. Summary
Tapping is the only operation in this module that deliberately reverses its own load, and it does so on
every hole: the tap cuts its way in under torque in one direction, then the spindle reverses to withdraw
it. Because a stop resists only in compression, a single anti-rotation stop takes the cutting torque
comfortably and contributes nothing during withdrawal, leaving the part on clamp friction for half of
every cycle — and the failure mode of that design is that it looks adequate on the drawing. Restraint
must therefore be bidirectional, either two opposed stops with clearance on one to avoid over-constraint,
or better, two locating pins, which restrain both directions inherently and are usually present anyway;
in the worked example the pins gave 146.5 N each against 327.6 N for opposed stops and 3,093.8 N total
for friction alone, a factor of 10.56. The reversal torque is not merely equal to the cutting torque but
can exceed it — 1.2–1.5× is the design basis for blind holes — because chips driven into the bottom of
the hole must be climbed back through, which is why spiral flute taps are used for blind holes, spiral
point for through-holes, and forming taps eliminate the mechanism entirely where the material allows.
Rigid tapping, unlike a floating holder, transmits any Z location error straight into the tap, so it
imposes a repeatable-seating requirement that drilling and milling do not, and unrelieved pads collecting
chips from earlier operations are a common root cause of breakage. The tap can also lift the part at
reversal, so clamps must resist uplift. Finally, tapping is normally the last operation, so its failures
scrap parts carrying full accumulated value — an asymmetry of consequence that justifies the combined
3.375 factor used here, and that makes it worth raising the process levers too, since reducing thread
engagement from 75% to 60% removes 27.5% of the torque at no cost and retains about 95% of thread
strength.

### 30. Key takeaways
- **Tapping reverses its torque on every hole.** A single stop is useless for half the cycle.
- **The failure mode of a single stop is that it looks adequate** — it passes the cutting-torque check.
- **Two location pins give bidirectional restraint for free** — 146.5 N vs 3,093.8 N total for friction.
- **Use a round pin and a diamond pin** to avoid over-constraint.
- **Reversal torque: 1.0× through-hole, 1.2–1.5× blind** `[GUIDE]`.
- **Spiral point for through, spiral flute for blind, forming taps for no chips at all.**
- **Rigid tapping demands repeatable Z seating**; a floating holder forgives it.
- **The tap can lift the part at reversal** — clamps must resist uplift.
- **Torque ∝ d²·P.** An M12×1.75 is 1.68× an M10×1.5.
- **Reducing engagement 75% → 60% removes 27.5% of the torque** for ~95% of the strength `[GUIDE]`.
- **The best solution to a fixture problem is sometimes not a fixture change.**
- **Tapping is usually last, so its failures cost the most** — the asymmetry of consequence justifies the
  asymmetry of margin.
- **Intermittent failures usually have more than one cause** — which is why they are intermittent.

---

## LESSON L1.3.6 — CHAMFERING, COUNTERBORING AND COUNTERSINKING

### 1. Lesson title
**L1.3.6 — Short cuts and tool access: when the constraint is geometry, not force**

### 2. Learning objective
By the end of this lesson you will be able to explain why secondary operations impose access rather than
force constraints, calculate the access envelope a tool and holder require and check a fixture against
it, explain why these operations are disproportionately responsible for extra setups, evaluate the cost
of an additional setup against the cost of designing for access, and specify a fixture that accommodates
every tool in the programme rather than only the largest force.

### 3. Prerequisites
L1.3.3 (drilling), L1.2.3 (swept envelope, holder clearance), L1.1.2 (Z budget), L0.2.5 (tolerance
stacking across setups).

### 4. Why the topic matters
This lesson closes the module by inverting its central question one last time.

Every lesson so far has asked **"what force must the fixture resist?"** — and each answered differently:
side loads, rotating vectors, torque, reversal, or nearly nothing at all. Chamfering, counterboring and
countersinking answer it almost trivially. **The forces are small, short-lived and rarely govern
anything.**

```
   FORCE-WISE, THESE OPERATIONS ARE EASY

     A 1 mm chamfer on a Ø10 hole removes a few
     cubic millimetres of material in under a
     second.

     A counterbore is a shallow, interrupted cut
     with a large tool at low feed.

   → If you sized a fixture for the drilling that
     preceded them, it is already adequate.
```

**And yet these operations cause more fixture redesigns than any other category.** The reason is that
they impose a completely different kind of constraint:

```
   THE CONSTRAINT IS NOT FORCE. IT IS ACCESS.

   ✗ The chamfer tool is short and stubby, so its
     HOLDER must come close to the part
   ✗ The counterbore is large in diameter, so it
     fouls a clamp that the drill cleared
   ✗ The countersink must reach a hole in a recess
     that the drill reached at full length
   ✗ A back-spotface must work from the FAR SIDE

   ┌──────────────────────────────────────────────┐
   │ A FIXTURE CAN BE PERFECTLY DESIGNED FOR      │
   │ EVERY FORCE IN THE PROGRAMME AND STILL BE    │
   │ UNUSABLE BECAUSE A Ø25 COUNTERBORE CANNOT    │
   │ REACH PAST A CLAMP.                          │
   └──────────────────────────────────────────────┘
```

`[PRACTICE]` And the consequence of getting it wrong is expensive in a specific way: **the usual remedy
is an extra setup**, which adds a tolerance stack (L0.2.5), cycle time, handling and a second fixture or
re-clamping operation. **A five-second chamfer that forces a second setup can cost more than the entire
rest of the operation.**

### 5. Simple explanation

```
   THE THREE OPERATIONS

   CHAMFER — breaks a sharp edge
        ╲
      ▓▓▓╲▓▓▓      45° (usually), 0.5-2 mm
      ▓▓▓▓▓▓▓

   COUNTERBORE — flat-bottomed enlargement so a
   screw head sits below the surface
      ▓▓┌───┐▓▓
      ▓▓│   │▓▓
      ▓▓▓│ │▓▓▓
         │ │

   COUNTERSINK — conical enlargement for a
   countersunk screw head
      ▓▓╲   ╱▓▓     usually 90° or 82°
      ▓▓▓╲ ╱▓▓▓
         │ │
```

All three are **secondary**: they modify a feature that already exists. That has two consequences:

```
   1. THEY COME LATE IN THE SEQUENCE
      → the part already has value in it
      → and it may already have been re-clamped

   2. THE TOOL IS USUALLY WIDER THAN THE FEATURE
      IT IS MODIFYING

        drill Ø10 ──►  counterbore Ø17
        ┌─┐            ┌─────┐
        │ │            │     │
        └─┘            └─────┘

      → A CLAMP THAT CLEARED THE DRILL MAY NOT
        CLEAR THE COUNTERBORE.
```

That second point is the whole lesson in one picture.

### 6. Engineering explanation

**THE ACCESS ENVELOPE**

L1.2.3 established that clearance must be checked against the swept envelope of tool *and holder*.
Secondary operations make this the governing check rather than a secondary one.

```
   WHAT MUST BE CHECKED, AT EVERY HEIGHT

              ┌──────────┐  spindle nose Ø
              │          │
           ┌──┴──────────┴──┐
           │                │  holder Ø
           └──┬──────────┬──┘
              │          │
              └────┬─────┘  tool body Ø
                   │
                  ▓▓▓  cutting Ø

   TABULATE DIAMETER AGAINST HEIGHT ABOVE THE PART
   AND CHECK EVERY ROW AGAINST EVERY OBSTRUCTION.

   [PRACTICE] The governing row is often NOT the
   cutting diameter. For a short chamfer tool the
   HOLDER is close to the part and is usually the
   binding constraint.
```

**WHY THESE TOOLS ARE SHORT AND WHY THAT MATTERS**

```
   A DRILL IS LONG                A CHAMFER TOOL IS SHORT
     ═══╤═══ gauge line             ═══╤═══
        ║                              ║
        ║                           ┌──┴──┐ holder is
        ║  the holder stays         │     │ CLOSE to
        ║  well clear               └──┬──┘ the part
        ║                              ▓
        ▓                           ▓▓▓▓▓▓▓
     ▓▓▓▓▓▓▓                        ═══════
     ═══════

   ✓ Clamps 40 mm tall are fine     ✗ The same clamps
                                      now foul the
                                      holder
```

`[PRACTICE]` This is the specific mechanism by which a fixture that worked for drilling fails for
chamfering. **Chamfer tools are deliberately short and stiff** — they are cutting an interrupted edge and
a long tool would chatter — so the holder sits close to the work. **A tall clamp is the enemy of a short
tool.**

**THE COUNTERBORE DIAMETER PROBLEM**

`[STD]` Standard counterbore diameters for socket head cap screws are considerably larger than the
clearance hole:

| Screw | Clearance hole | Counterbore Ø | Ratio |
|---|---|---|---|
| M6 | Ø6.6 | Ø11.0 | 1.67× |
| M8 | Ø9.0 | Ø15.0 | 1.67× |
| M10 | Ø11.0 | Ø18.0 | 1.64× |
| M12 | Ø13.5 | Ø20.0 | 1.48× |
| M16 | Ø17.5 | Ø26.0 | 1.49× |

*Indicative values consistent with common practice for socket head cap screws; confirm against the
applicable standard and the fastener supplier.*

```
   THE CONSEQUENCE

     A clamp positioned to clear a Ø11 drill needs
     to clear a Ø18 counterbore — 3.5 mm more
     radially, plus the holder.

   [PRACTICE] Check clearances against the LARGEST
   tool that will visit each feature, not the tool
   that creates it.
```

**BACK-SPOTFACING AND BACK-COUNTERBORING — THE HARDEST ACCESS CASE**

```
   A FEATURE ON THE FAR SIDE, REACHED THROUGH THE
   HOLE

        ║ tool passes through
     ▓▓▓║▓▓▓
     ▓▓▓║▓▓▓
     ▓▓▓║▓▓▓
        ╘═╛  ← cutter swings out and cuts UPWARD
             against the underside

   ✗ Requires clearance BELOW the part
   ✗ The cutting force is UPWARD — it lifts the part
   ✗ The fixture must not obstruct the far side

   ┌──────────────────────────────────────────────┐
   │ BACK-SPOTFACING IS THE ONE SECONDARY         │
   │ OPERATION WHOSE FORCE DIRECTION MATTERS:     │
   │ IT PULLS THE PART UP OFF ITS LOCATORS.       │
   │                                              │
   │ And it needs the fixture to be ABSENT        │
   │ exactly where a support would normally be.   │
   └──────────────────────────────────────────────┘
```

`[PRACTICE]` Back-spotfacing is worth flagging early in a project, because it frequently forces a
fixture concept change — the part must be supported around the hole but open beneath it, which is the
same conflict as the drilling exit support (L1.3.3) but more severe.

**THE REAL COST: AN EXTRA SETUP**

This is why the lesson matters economically.

```
   IF A SECONDARY OPERATION CANNOT BE REACHED,
   THE USUAL REMEDY IS ANOTHER SETUP.

   WHAT AN EXTRA SETUP COSTS:

   1. CYCLE TIME
        load, clamp, datum, run, unload
        typically several minutes

   2. A TOLERANCE STACK  (L0.2.5)
        the second setup's features are located
        relative to the first setup's, so the
        errors ADD

   3. HANDLING AND WIP
        parts moved, queued, potentially damaged

   4. A SECOND FIXTURE
        design, manufacture, storage, maintenance

   5. RISK
        another chance to load wrongly

   ┌──────────────────────────────────────────────┐
   │ A FIVE-SECOND CHAMFER THAT FORCES A SECOND   │
   │ SETUP CAN COST MORE THAN THE ENTIRE REST OF  │
   │ THE OPERATION.                               │
   │                                              │
   │ THIS IS WHY ACCESS FOR TRIVIAL OPERATIONS    │
   │ DESERVES SERIOUS ATTENTION AT CONCEPT STAGE. │
   └──────────────────────────────────────────────┘
```

**DESIGN RESPONSES TO AN ACCESS CONFLICT**

`[PRACTICE]` In rough order of preference:

| Response | Note |
|---|---|
| **Move the clamp** | Free, if another suitable location exists |
| **Use a lower-profile clamp** | Low-profile and swing clamps exist for exactly this |
| **Clamp from the side or underneath** | Removes the obstruction from above entirely |
| **Use a different tool** | A smaller-diameter chamfer tool, or a spot drill that also chamfers |
| **Combine operations in one tool** | Step drills, drill-chamfer combination tools |
| **Re-sequence** | Chamfer before clamping in that position, where possible |
| **Accept an extra setup** | The last resort, and it should be a costed decision |

> **The fifth of these is underused.** A combination drill-chamfer tool produces the hole and its chamfer
> in one pass, which removes the access problem, removes a tool change, and removes the second visit to
> the feature. `[PRACTICE]` Where the geometry allows it, it is often the cheapest solution to an access
> conflict — and it is a tooling suggestion rather than a fixture change, which is worth raising for the
> same reason as the tapping engagement lever in L1.3.5.

### 7. Terminology

| Term | Definition |
|---|---|
| **Chamfer** | Angled break on an edge, typically 45° |
| **Counterbore** | Flat-bottomed enlargement of a hole to recess a screw head |
| **Countersink** | Conical enlargement, typically 90° or 82° |
| **Spotface** | Shallow flat machined around a hole to give a square seating |
| **Back-spotface** | Spotface machined on the far side, reached through the hole |
| **Access envelope** | The volume the tool and holder must occupy to reach a feature |
| **Low-profile clamp** | Clamp designed to minimise height above the part |
| **Swing clamp** | Clamp that rotates clear of the part when released |
| **Combination tool** | Single tool performing two operations, e.g. drill and chamfer |
| **Secondary operation** | An operation modifying a feature that already exists |
| **Pilot** | Guiding diameter on a counterbore tool that runs in the existing hole |

### 8. Principle

> **FOR SECONDARY OPERATIONS THE CONSTRAINT IS ACCESS, NOT FORCE.** A fixture can be perfectly designed
> for every force in the programme and still be unusable because a counterbore cannot reach past a clamp.
> **CHECK CLEARANCE AGAINST THE LARGEST TOOL THAT WILL VISIT EACH FEATURE**, not the tool that creates
> it — a counterbore is roughly 1.5–1.7× the clearance hole `[STD]`.
> **A TALL CLAMP IS THE ENEMY OF A SHORT TOOL.** Chamfer tools are deliberately short and stiff, so their
> holders sit close to the work.
> **BACK-SPOTFACING PULLS THE PART UP** and needs the fixture absent exactly where a support would be.
> **A FIVE-SECOND CHAMFER THAT FORCES A SECOND SETUP CAN COST MORE THAN THE REST OF THE OPERATION.**

### 9. Industrial application

**The tool access review — a concept-stage activity**

```
   DO THIS BEFORE THE FIXTURE CONCEPT IS FIXED
   [PRACTICE]

   1. LIST EVERY OPERATION IN THE PROGRAMME
      — including the trivial ones

   2. FOR EACH, RECORD:
        tool cutting diameter
        tool body diameter
        holder diameter
        height of each above the part face
        approach direction

   3. FIND THE WORST CASE AT EACH FEATURE
        it is usually NOT the biggest force,
        and usually NOT the tool that made the
        feature

   4. DRAW THE ACCESS ENVELOPE FOR THE WORST CASE
      AT EVERY FEATURE

   5. ONLY THEN PLACE THE CLAMPS

   ┌──────────────────────────────────────────────┐
   │ THE ORDER MATTERS. CLAMPS PLACED FIRST AND   │
   │ CHECKED AFTERWARDS GET MOVED. CLAMPS PLACED  │
   │ INTO A VERIFIED ENVELOPE DO NOT.             │
   └──────────────────────────────────────────────┘
```

**A representative access failure and its cost** `[EX-ASSUMED]` illustrative:

```
SITUATION
  Steel bracket, 8 × Ø9 clearance holes with Ø15
  counterbores. Fixture designed with four strap
  clamps positioned by force analysis.

DISCOVERY (at first article, not at design review)
  Two of the eight counterbores cannot be reached:
  the Ø15 counterbore plus its Ø32 holder fouls a
  strap clamp that cleared the Ø9 drill comfortably.

OPTIONS EVALUATED
  A. Move the two clamps
     → force analysis showed the alternative
       positions reduced restraint below requirement
  B. Low-profile clamps
     → available, ₹4,500 for two [EX-ASSUMED],
       one week lead time
  C. Second setup for the two counterbores
     → 3.5 min added cycle, plus a tolerance stack,
       plus a second fixture

COST COMPARISON at 6,000 parts/yr, ₹1,800/h
  [EX-ASSUMED]
  Option B: ₹4,500 one-off
  Option C: 3.5 min × 6,000 = 350 h/yr
            × ₹1,800 = ₹630,000 per year
            plus a second fixture

  → OPTION B COSTS 0.7 % OF ONE YEAR OF OPTION C.

THE LESSON
  The technical question ("can we reach it?") had an
  obvious cheap answer once asked. THE FAILURE WAS
  NOT ASKING IT UNTIL FIRST ARTICLE.
  A tool access review at concept stage costs an
  hour.
```

### 10. Design rules
- **R1** — Perform a **tool access review at concept stage**, before clamp positions are fixed
  `[PRACTICE]`.
- **R2** — Check clearance against the **largest tool visiting each feature**, not the tool that creates
  it.
- **R3** — **Tabulate diameter against height** for every tool assembly, including the holder.
- **R4** — Prefer **low-profile or swing clamps** where access is tight.
- **R5** — Consider **clamping from the side or below** to clear the top surface entirely.
- **R6** — Where **back-spotfacing** is required, provide clearance below the part and design for an
  **upward** cutting force.
- **R7** — Raise **combination tools** (drill-chamfer, step drills) as an alternative to a fixture change
  `[PRACTICE]`.
- **R8** — **Cost any proposed extra setup explicitly**, including the tolerance stack, before accepting
  it.
- **R9** — Confirm the **actual holders** to be used, not nominal tool diameters.
- **R10** — Re-run the access check whenever a **tool is substituted** in production.

### 11. Rules of thumb
- **For secondary operations, access governs, not force.**
- **A tall clamp is the enemy of a short tool.**
- Counterbore diameter is roughly **1.5–1.7× the clearance hole** `[STD]`.
- **Check the largest tool that visits the feature**, not the one that made it.
- **The holder usually binds before the cutter** on short tools.
- **Back-spotfacing lifts the part** and needs the fixture absent below.
- **A five-second chamfer can cost more than the whole operation** if it forces a setup.
- **An extra setup adds a tolerance stack**, not just time.
- **Place clamps into a verified access envelope**, not before it.
- **A combination tool can be cheaper than any fixture change.**

### 12. Formulae

**Access clearance check**
```
For each tool assembly and each obstruction:
   Clearance(h) = d_obstruction(h) − D_tool(h)/2
Require Clearance(h) > margin for all h
   margin ≥ 15 mm    [PRACTICE, from L1.1.2]
```

**Counterbore clearance requirement**
```
R_required = D_counterbore/2 + t_holder_margin
where the holder diameter usually governs:
   R_required = D_holder/2 + margin
```

**Cost of an extra setup**
```
C_setup,annual = t_setup × N_annual × rate

Additional tolerance from a second setup:
   T_total = T_setup1 + T_setup2 + T_relocation
   (arithmetic; or RSS where justified — L23.4)
```

**Break-even for a fixture change versus an extra setup**
```
N_breakeven = C_fixture_change / (t_setup × rate)
```

| Variable | Meaning | Unit |
|---|---|---|
| D_tool(h) | Tool assembly diameter at height h | mm |
| d_obstruction(h) | Distance to the nearest obstruction at height h | mm |
| t_setup | Added time per part for an extra setup | h |
| N_annual | Annual volume | parts/yr |
| rate | Machine rate | ₹/h |

### 13. Worked numerical example

**Problem:** A bracket requires drilling, counterboring and chamfering in one setup. Verify tool access
against the proposed clamp positions, identify the governing tool, evaluate the options where access
fails, and determine the economic break-even between a fixture change and an extra setup.

```
GIVEN:
  OPERATIONS AND TOOLS                           [PROJ]
    OP1 Drill Ø11
          tool Ø11, body Ø11, holder Ø42
          holder lower face 65 mm above the part
    OP2 Counterbore Ø18
          tool Ø18, body Ø18, holder Ø50
          holder lower face 28 mm above the part
    OP3 Chamfer 1.5 × 45°
          tool Ø16, body Ø16, holder Ø63
          holder lower face 18 mm above the part

  PROPOSED CLAMPS                                [PROJ]
    Four strap clamps
    Clamp body height above the part = 34 mm
    Nearest clamp edge to the nearest hole
      centre, radially              = 41 mm

  CLEARANCE REQUIREMENT                          [PRACTICE]
    Minimum radial clearance          = 15 mm

  ALTERNATIVES                                   [EX-ASSUMED]
    Low-profile clamps, height 16 mm
      cost                            = ₹5,200 for 4
    Extra setup
      added cycle time                = 2.8 min/part
    Production volume                 = 5,500 parts/yr
    Machine rate                      = ₹1,800/h

REQUIRED:
  (a) Radial clearance available to each tool and
      holder at the relevant heights
  (b) The governing tool and whether access is
      adequate
  (c) The clamp height that would permit all three
      operations
  (d) Annual cost of the extra-setup option
  (e) Break-even volume for the low-profile clamps
  (f) The recommended option
  (g) Engineering conclusion

ASSUMPTION:
  1. Holder diameters are the ACTUAL holders to be
     used, confirmed with the tooling engineer, not
     nominal or catalogue minimums. [PROJ]
  2. Clamp body treated as a solid obstruction of
     constant height. Real strap clamps taper; this
     is CONSERVATIVE. [PRACTICE]
  3. A tool assembly obstructs only if its diameter
     at or below the clamp height exceeds the
     available radial clearance.
  4. Minimum radial clearance 15 mm from the L1.1.2
     practice figure. [PRACTICE]
  5. Costs are ILLUSTRATIVE ASSUMED VALUES for the
     purpose of the comparison method. [EX-ASSUMED]
  6. The extra setup's tolerance stack is noted
     qualitatively but not costed, so the economic
     case AGAINST the extra setup is UNDERSTATED.

FORMULA:
  (a) Clearance = d_radial − D_holder/2
  (d) C = t × N × rate
  (e) N_be = C_fixture / (t × rate)

UNIT CONVERSION:
  2.8 min = 2.8/60 = 0.046667 h

SUBSTITUTION AND CALCULATION:

  (a) RADIAL CLEARANCE FOR EACH TOOL

      Available radial distance = 41 mm
      Clamp height              = 34 mm

      OP1 DRILL Ø11:
        Holder Ø42 sits 65 mm above the part —
        WELL ABOVE the 34 mm clamp height, so the
        holder never comes alongside the clamp.
        The only thing beside the clamp is the
        tool body Ø11.
          Clearance = 41 − 11/2
                    = 41 − 5.5
                    = 35.5 mm
          35.5 > 15                    ✓ PASS

      OP2 COUNTERBORE Ø18:
        Holder Ø50 sits 28 mm above the part —
        BELOW the 34 mm clamp height, so the
        HOLDER IS ALONGSIDE THE CLAMP.
          Clearance = 41 − 50/2
                    = 41 − 25
                    = 16.0 mm
          16.0 > 15                    ✓ PASS
          — but by only 1.0 mm.

      OP3 CHAMFER, holder Ø63:
        Holder sits 18 mm above the part — well
        below the 34 mm clamp height.
          Clearance = 41 − 63/2
                    = 41 − 31.5
                    = 9.5 mm
          9.5 < 15                     ✗ FAIL

        Shortfall = 15 − 9.5 = 5.5 mm

        And checking for actual collision:
          9.5 > 0, so it does not physically
          collide — but it violates the practice
          minimum and leaves no margin for
          positional error, deflection or a
          different holder.

  (b) GOVERNING TOOL

        OP1 drill        35.5 mm  ✓
        OP2 counterbore  16.0 mm  ✓ marginal
        OP3 CHAMFER       9.5 mm  ✗ GOVERNS

      → THE CHAMFER TOOL GOVERNS — the operation
        with the SMALLEST cutting diameter, the
        LOWEST force and the SHORTEST cycle time.

      Note the ranking is the reverse of what force
      analysis would suggest:
        force:  drill > counterbore > chamfer
        access: chamfer > counterbore > drill

  (c) CLAMP HEIGHT PERMITTING ALL OPERATIONS

      For the chamfer holder (Ø63) not to be
      alongside the clamp, the clamp must be lower
      than the holder's lower face:

        Required clamp height < 18 mm

      The low-profile clamp at 16 mm satisfies this:
        16 < 18                        ✓

      Check what is then alongside a 16 mm clamp
      for each tool:
        OP1: tool body Ø11 → 35.5 mm  ✓
        OP2: tool body Ø18 → 41 − 9 = 32.0 mm  ✓
        OP3: tool body Ø16 → 41 − 8 = 33.0 mm  ✓

      → ALL THREE PASS COMFORTABLY with 16 mm
        clamps. The minimum becomes 32.0 mm.

  (d) ANNUAL COST OF THE EXTRA SETUP

        C = t × N × rate
          = 0.046667 × 5,500 × 1,800
          = 0.046667 × 9,900,000
          = ₹462,000 per year

      Plus (not costed here):
        - a second fixture
        - a tolerance stack between setups
        - handling and WIP
        - an additional loading error opportunity

  (e) BREAK-EVEN VOLUME FOR THE LOW-PROFILE CLAMPS

        N_be = C_fixture / (t × rate)
             = 5,200 / (0.046667 × 1,800)
             = 5,200 / 84.0
             = 61.9 parts

      → THE CLAMPS PAY FOR THEMSELVES IN 62 PARTS.

      Against the annual volume of 5,500:
        5,500 / 61.9 = 88.9 ×
      → The clamps pay back 88.9 times over in one
        year.

      Expressed the other way:
        ₹5,200 / ₹462,000 = 1.1 % of one year of
        the extra-setup cost.

  (f) RECOMMENDED OPTION

      LOW-PROFILE CLAMPS at 16 mm height.
        ✓ All three operations clear, minimum
          32.0 mm against a 15 mm requirement
        ✓ ₹5,200 one-off
        ✓ Payback in 62 parts
        ✓ No second setup, no tolerance stack
        ✓ Single fixture

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) OP1 drill clearance      │ 35.5 mm ✓         │
  │     OP2 counterbore          │ 16.0 mm ✓ marginal│
  │     OP3 chamfer              │  9.5 mm ✗ FAIL    │
  │ (b) Governing tool           │ CHAMFER — the     │
  │                              │ smallest, lowest  │
  │                              │ force operation   │
  │     Shortfall                │ 5.5 mm            │
  │ (c) Required clamp height    │ < 18 mm           │
  │     With 16 mm clamps, min   │ 32.0 mm ✓         │
  │ (d) Extra setup, annual      │ ₹462,000/yr       │
  │ (e) Break-even volume        │ 61.9 parts        │
  │     Payback in one year      │ 88.9 ×            │
  │     Cost vs 1 yr of setups   │ 1.1 %             │
  │ (f) RECOMMENDED              │ Low-profile clamps│
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The equivalent margin is
  the 15 mm minimum radial clearance, which is a
  practice figure covering positional error, tool
  deflection, holder variation and the possibility of
  a substituted tool. Note that OP2 passed at 16.0 mm
  — only 1.0 mm inside that minimum — which I would
  treat as a warning rather than a pass.

PASS/FAIL:
  ✗ FAIL — the chamfer operation with 34 mm clamps,
    at 9.5 mm against a 15 mm minimum.
  ⚠ MARGINAL — the counterbore at 16.0 mm, 1.0 mm
    inside the minimum.
  ✓ PASS — all three operations with 16 mm
    low-profile clamps, minimum 32.0 mm.

ENGINEERING CONCLUSION:
  1. THE GOVERNING TOOL WAS THE ONE WITH THE LOWEST
     FORCE, AND THE RANKING WAS EXACTLY REVERSED.
     By force, the drill dominates: it produces the
     thrust, the torque and the breakthrough spike
     that occupied all of L1.3.3. By access, the drill
     is the easiest — 35.5 mm of clearance — because
     its holder stays 65 mm above the part. The
     chamfer tool, which removes a few cubic
     millimetres in under a second, governs the entire
     fixture layout at 9.5 mm.
     A FIXTURE DESIGNED BY FORCE ANALYSIS ALONE WOULD
     HAVE PLACED THESE CLAMPS AND BEEN WRONG. The two
     analyses rank the operations in opposite orders,
     and BOTH MUST BE DONE.

  2. THE MECHANISM IS THAT SHORT TOOLS BRING THEIR
     HOLDERS CLOSE.
     A chamfer tool is deliberately short and stiff
     because it cuts an interrupted edge and a long
     tool would chatter. That virtue is exactly what
     causes the problem: the Ø63 holder sits 18 mm
     above the part, well within the height of a 34 mm
     strap clamp. The drill's Ø42 holder never comes
     near the clamp because the drill is long.
     A TALL CLAMP IS THE ENEMY OF A SHORT TOOL, and
     the relationship is not obvious from a plan view
     — IT ONLY APPEARS IN A SECTION, WHICH IS WHY THE
     DIAMETER-AGAINST-HEIGHT TABLE IS WORTH DRAWING
     UP EXPLICITLY.

  3. THE ECONOMICS ARE NOT CLOSE, AND THAT IS THE
     GENERAL CASE.
     ₹5,200 of clamps against ₹462,000 a year of extra
     setups — payback in 62 parts, 88.9 times over in
     one year, 1.1 % of a single year's alternative
     cost. AND THE COMPARISON IS UNDERSTATED, because
     the extra setup also brings a second fixture, a
     tolerance stack between setups, handling, WIP and
     another opportunity to load the part wrongly,
     none of which are in the ₹462,000.
     WHEN AN ACCESS PROBLEM IS FOUND, THE FIXTURE
     SOLUTION ALMOST ALWAYS WINS ON COST. The
     difficulty is never the decision — it is
     DISCOVERING THE PROBLEM EARLY ENOUGH THAT THE
     DECISION IS STILL AVAILABLE.

  4. THE COUNTERBORE AT 16.0 mm IS A WARNING, NOT A
     PASS.
     It clears the 15 mm minimum by one millimetre.
     That minimum already exists to absorb positional
     error, deflection and holder variation, so
     consuming 93 % of it leaves nothing for a
     substituted holder or a slightly different
     setup. I WOULD NOT SIGN THAT OFF AS SATISFACTORY
     even though it passes arithmetically — and with
     the low-profile clamps it becomes 32.0 mm, so
     the right answer resolves it anyway.

  5. WHAT I WOULD CHANGE ABOUT THE PROCESS, NOT JUST
     THE FIXTURE.
     This was found at first article. It should have
     been found in an hour at concept stage by listing
     every tool in the programme with its holder
     diameter and height and checking the worst case
     at each feature BEFORE placing the clamps. THE
     ORDER IS THE POINT: clamps placed first and
     checked afterwards get moved; clamps placed into
     a verified envelope do not.
     I would also raise a combination drill-chamfer
     tool with the tooling engineer, which would
     remove OP3 entirely — a tooling change that
     solves a fixture problem, as in L1.3.5.

SENSITIVITY NOTE:
  Ranked by influence:
    1. CLAMP HEIGHT — binary in effect. At 34 mm the
       chamfer fails; at 16 mm everything passes with
       more than double the required margin. The
       single decisive variable.
    2. HOLDER DIAMETER AND ITS HEIGHT ABOVE THE PART
       — this is what actually governs, and it is a
       TOOLING property that the fixture designer
       must obtain rather than assume. A different
       Ø50 chamfer holder would have passed.
    3. RADIAL DISTANCE TO THE CLAMP — 41 mm here.
       Linear, and often constrained by the part.
    4. EXTRA SETUP TIME — drives the economics
       entirely, but the conclusion is so lopsided
       (88.9× payback) that it would survive an
       order-of-magnitude error in the estimate.
    5. PRODUCTION VOLUME — break-even at 62 parts
       means the conclusion holds for essentially
       any production quantity. Only a genuine
       one-off would change it.
```

### 14. Engineering assumptions
- Holder diameters are the **actual** holders to be used, confirmed with the tooling engineer `[PROJ]`.
- Clamp body treated as a solid constant-height obstruction; real strap clamps taper, so this is
  conservative `[PRACTICE]`.
- Minimum radial clearance 15 mm `[PRACTICE]`, from L1.1.2.
- Costs are illustrative assumed values for the comparison method `[EX-ASSUMED]`.
- The extra setup's tolerance stack is noted but not costed, so the case against it is **understated**.

### 15. Diagram

```
     SECONDARY OPERATIONS — ACCESS, NOT FORCE
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE INVERSION THAT CLOSES THE MODULE

   BY FORCE           BY ACCESS
   drill      ████    chamfer     ████
   counterbore ██     counterbore  ██
   chamfer     █      drill        █

   THE RANKINGS ARE EXACTLY REVERSED.

   ┌──────────────────────────────────────────────┐
   │ A FIXTURE DESIGNED BY FORCE ANALYSIS ALONE   │
   │ WOULD HAVE PLACED THESE CLAMPS AND BEEN      │
   │ WRONG. BOTH ANALYSES MUST BE DONE.           │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHY SHORT TOOLS ARE THE PROBLEM

   DRILL — LONG                CHAMFER — SHORT
     ═══╤═══                     ═══╤═══
        ║ holder Ø42              ┌─┴─┐ holder Ø63
        ║ at 65 mm                │   │ at 18 mm
        ║                         └─┬─┘
        ║  ▐ clamp 34 mm            ▐ clamp 34 mm
        ▓  ▐                        ▓▐  ◄ FOULS
     ▓▓▓▓▓▓▓▓                   ▓▓▓▓▓▓▓▓

   clearance 35.5 mm ✓          clearance 9.5 mm ✗

   ┌──────────────────────────────────────────────┐
   │ A TALL CLAMP IS THE ENEMY OF A SHORT TOOL.   │
   │                                              │
   │ AND IT ONLY SHOWS IN A SECTION VIEW — WHICH  │
   │ IS WHY THE DIAMETER-AGAINST-HEIGHT TABLE     │
   │ MUST BE DRAWN UP EXPLICITLY.                 │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE FIX — AND ITS ECONOMICS

   34 mm CLAMPS              16 mm LOW-PROFILE
     chamfer  9.5 ✗            chamfer     33.0 ✓
     c'bore  16.0 ⚠            counterbore 32.0 ✓
     drill   35.5 ✓            drill       35.5 ✓
                               MINIMUM     32.0 mm

   ₹5,200 clamps  vs  ₹462,000/yr extra setups
   ├ break-even       61.9 parts
   ├ payback in 1 yr  88.9 ×
   └ cost ratio       1.1 %

   ┌──────────────────────────────────────────────┐
   │ WHEN AN ACCESS PROBLEM IS FOUND, THE FIXTURE │
   │ SOLUTION ALMOST ALWAYS WINS ON COST.         │
   │                                              │
   │ THE DIFFICULTY IS NEVER THE DECISION — IT IS │
   │ DISCOVERING THE PROBLEM EARLY ENOUGH THAT    │
   │ THE DECISION IS STILL AVAILABLE.             │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  CHECK THE LARGEST TOOL THAT VISITS THE FEATURE

     drill Ø11 ──► counterbore Ø18 ──► chamfer Ø16
     ┌─┐           ┌─────┐              ┌────┐
     │ │           │     │              │    │
     └─┘           └─────┘              └────┘

   Counterbore ≈ 1.5-1.7 × the clearance hole [STD]

   ┌──────────────────────────────────────────────┐
   │ A CLAMP THAT CLEARED THE DRILL MAY NOT CLEAR │
   │ THE COUNTERBORE — AND THE HOLDER USUALLY     │
   │ BINDS BEFORE THE CUTTER.                     │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  BACK-SPOTFACING — THE HARDEST ACCESS CASE

        ║ tool passes THROUGH the hole
     ▓▓▓║▓▓▓
     ▓▓▓║▓▓▓
     ▓▓▓║▓▓▓
        ╘═╛ ← swings out, cuts UPWARD
     ════   ════  fixture must be ABSENT here
         gap

   ✗ Cutting force is UPWARD — LIFTS the part
   ✗ Needs the fixture open exactly where a
     support would normally go
   → The same conflict as the drilling exit support
     (L1.3.3), but more severe

   ┌──────────────────────────────────────────────┐
   │ FLAG BACK-SPOTFACING EARLY. IT FREQUENTLY    │
   │ FORCES A FIXTURE CONCEPT CHANGE.             │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE ORDER OF WORK — THE ACTUAL LESSON

   ✗ WRONG                    ✓ RIGHT
   1 analyse forces           1 list EVERY tool
   2 place clamps             2 tabulate Ø vs height
   3 check access             3 draw the worst-case
   4 move the clamps            envelope at each
   5 re-check forces            feature
   6 repeat                   4 analyse forces
                              5 place clamps into the
                                verified envelope

   ┌──────────────────────────────────────────────┐
   │ CLAMPS PLACED FIRST AND CHECKED AFTERWARDS   │
   │ GET MOVED. CLAMPS PLACED INTO A VERIFIED     │
   │ ENVELOPE DO NOT.                             │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-5750 — TOOL ACCESS SPECIFICATION
STANDARD: ASME Y14.5-2018
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: CLAMPS ITEMS 6-9 ARE LOW-PROFILE, MAXIMUM
        16 mm ABOVE THE COMPONENT TOP FACE. THIS
        HEIGHT IS A FUNCTIONAL REQUIREMENT DRIVEN BY
        TOOL ACCESS, NOT BY CLAMPING. DO NOT
        SUBSTITUTE STANDARD STRAP CLAMPS.

NOTE 2: TOOL ACCESS HAS BEEN VERIFIED FOR THE
        FOLLOWING ASSEMBLIES —
          Ø11 DRILL,      HOLDER Ø42 AT 65 mm
          Ø18 COUNTERBORE, HOLDER Ø50 AT 28 mm
          1.5×45° CHAMFER, HOLDER Ø63 AT 18 mm
        MINIMUM RADIAL CLEARANCE ACHIEVED 32.0 mm.

NOTE 3: SUBSTITUTION OF ANY TOOL HOLDER LARGER IN
        DIAMETER, OR SITTING LOWER ABOVE THE
        COMPONENT, REQUIRES THE ACCESS CHECK TO BE
        REPEATED BEFORE USE.

NOTE 4: THE GOVERNING TOOL FOR THIS FIXTURE'S LAYOUT
        IS THE CHAMFER TOOL, NOT THE DRILL. CLAMP
        POSITIONS AND HEIGHTS WERE SET BY ACCESS, NOT
        BY CUTTING FORCE.
```

Note 4 is unusual and deliberate. **Recording *why* the layout is what it is** protects it from someone
later re-optimising the clamp positions on force grounds and reintroducing the access failure.

### 17. CAD workflow
1. Build a **tool library** containing each tool assembly modelled as a stepped cylinder — cutter, body,
   holder — with the correct heights
2. Place each tool assembly **at every feature it visits**
3. Run an **interference check** against the fixture with the clamps present
4. Generate the **diameter-against-height table** from the model
5. Identify the **worst-case tool at each feature** and record it
6. **Only then** finalise clamp positions and heights
7. Add the access verification data to the drawing as a note
8. Model any **back-spotfacing** tool in its swung-out condition

`[PRACTICE]` Step 1 is worth doing once properly for a shop's standard tooling and reusing. A library of
correctly modelled tool assemblies turns the access check from an hour of work into a five-minute
interference run, which means it actually gets done on every job.

### 18. GD&T application
Access clearance is a **design constraint rather than a toleranced requirement**, so it does not normally
appear as a feature control frame. It does affect the tolerancing indirectly:

```
STANDARD: ASME Y14.5-2018

  IF AN EXTRA SETUP IS ACCEPTED, THE FEATURES
  MACHINED IN THE SECOND SETUP CAN NO LONGER BE
  HELD TO THE SAME POSITIONAL TOLERANCE RELATIVE
  TO THE FIRST SETUP'S FEATURES.

  Single setup:
  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.05 │ A │ B │ C │          │
  └──────────────────────────────────┘

  Two setups — the relocation error ADDS:
  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.15 │ A │ B │ C │          │
  └──────────────────────────────────┘
  (illustrative — the actual value depends on the
   relocation method, per L0.2.5)

  ┌────────────────────────────────────────────┐
  │ SO AN ACCESS PROBLEM IS NOT ONLY A COST    │
  │ PROBLEM. IF THE DRAWING DEMANDS A          │
  │ TOLERANCE THAT ONLY A SINGLE SETUP CAN     │
  │ ACHIEVE, THEN THE EXTRA SETUP IS NOT AN    │
  │ OPTION AT ALL — AND THE FIXTURE MUST       │
  │ PROVIDE THE ACCESS.                        │
  └────────────────────────────────────────────┘
```

That last point is worth holding onto: **sometimes the economic comparison in §13 is irrelevant, because
the tolerance forecloses the cheaper-looking option.**

### 19. Manufacturing method
Low-profile and swing clamps are **bought-in standard components** (L0.5.2). `[PRACTICE]` The fixture
designer's manufacturing contribution here is mostly **not** adding height: avoiding unnecessary spacer
plates, keeping fastener heads below the clamping surface by counterboring them, and specifying
low-head or socket-button screws where they sit near a tool path.

`[PRACTICE]` A frequent avoidable error is a **standard cap screw head protruding into an access
envelope**. Counterboring it costs one operation and removes an obstruction permanently.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Clamp height above the part | Height gauge | ≤16 mm |
| Radial clearance to each hole | CMM or scale from the model | ≥15 mm minimum, 32 mm designed |
| Physical access trial | Mount the actual tools and traverse | No contact, visually adequate |
| Fastener heads below the surface | Visual / depth gauge | Flush or below |
| Back-spotface clearance below | Physical trial | Tool swings freely |
| Access after any tool substitution | Repeat the trial | Re-verified |

`[PRACTICE]` **The physical access trial with the actual tools is the check that matters**, and it should
be done at commissioning with the real holders rather than assumed from the model — because the model
contains the holder someone said would be used, and the shop uses what is in the carousel.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Designing for **force only** | The lowest-force tool governs access |
| 2 | Checking the tool that **created** the feature | The counterbore is 1.5–1.7× bigger |
| 3 | Ignoring the **holder** | The holder binds before the cutter |
| 4 | Not considering **height** — only plan clearance | The conflict only appears in section |
| 5 | Placing clamps **before** the access review | Rework loop |
| 6 | Using **standard strap clamps** where access is tight | Low-profile clamps exist for this |
| 7 | Not flagging **back-spotfacing** early | Forces a concept change late |
| 8 | Accepting an **extra setup** without costing it | ₹462,000/yr against ₹5,200 |
| 9 | Forgetting the extra setup's **tolerance stack** | May foreclose the option entirely |
| 10 | Assuming **catalogue** holder dimensions | Use the actual holders |
| 11 | **Cap screw heads** protruding into an access path | Avoidable obstruction |
| 12 | Not re-checking after a **tool substitution** | Silent reintroduction of the conflict |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Tool holder fouls a clamp | Access not checked at height | Section view; physical trial | Low-profile clamp; relocate | Access review at concept |
| Only some features affected | Clamp positions vary radially | Tabulate clearance per feature | Move the specific clamps | Per-feature check |
| Problem appeared after a tool change | Substituted holder is larger | Compare holders | Revert or relocate | Design rule R10 |
| Counterbore unreachable, drill fine | Counterbore 1.5–1.7× bigger | Check the largest tool | Low-profile clamp | Design rule R2 |
| Chamfer tool fouls, drill fine | Short tool brings the holder close | Check holder height | Low-profile clamp | Design rule R3 |
| Back-spotface tool cannot swing | Fixture obstructs below | Physical trial | Open the fixture beneath | Flag early |
| Extra setup proposed | Access failure | Cost it properly | Usually a fixture fix wins | Access review |
| Second-setup features out of position | Relocation tolerance stack | Measure across setups | Return to a single setup | Consider the tolerance first |

### 23. Design checklist
- [ ] Has a **tool access review** been done at concept stage, before clamps were placed?
- [ ] Is there a **diameter-against-height table** for every tool assembly?
- [ ] Has the **worst-case tool at each feature** been identified?
- [ ] Are **actual holders** used, not catalogue nominals?
- [ ] Has the **counterbore** been checked, not just the drill?
- [ ] Are **low-profile or swing clamps** used where access is tight?
- [ ] Could **side or underneath clamping** clear the top surface?
- [ ] Is **back-spotfacing** required, and is the fixture open below with uplift resisted?
- [ ] Have **combination tools** been raised as an alternative?
- [ ] If an extra setup is proposed, has it been **costed** — including the tolerance stack?
- [ ] Would the drawing tolerance even **permit** a second setup?
- [ ] Are **fastener heads** below the access envelope?
- [ ] Is there a drawing note requiring **re-verification after tool substitution**?

### 24. Beginner exercise
**E1.3.6-B** — A fixture has clamps 30 mm tall, positioned so that the nearest clamp edge is 38 mm
radially from a hole centre. Three tools visit the hole: a Ø10 drill (holder Ø40 at 60 mm above the
part), a Ø16 counterbore (holder Ø45 at 25 mm), and a chamfer tool (holder Ø55 at 20 mm).
(a) For each tool, state what is alongside the clamp at the clamp's height.
(b) Calculate the radial clearance for each.
(c) Using a 15 mm minimum, state which tools pass and which fail.
(d) State which tool governs and comment on how that compares with which tool produces the largest force.
(e) State the maximum clamp height that would allow all three tools to clear.

### 25. Intermediate exercise
**E1.3.6-I** — A bracket requires Ø13 clearance holes with Ø20 counterbores and 1 × 45° chamfers. The
proposed clamps are 40 mm tall with the nearest edge 48 mm from the hole centres. Holders: drill Ø48 at
70 mm, counterbore Ø56 at 30 mm, chamfer Ø70 at 15 mm. Minimum clearance 15 mm. Low-profile clamps at
14 mm cost ₹6,800 for six `[EX-ASSUMED]`; an extra setup adds 3.2 min/part; volume 7,200 parts/yr;
rate ₹1,800/h `[EX-ASSUMED]`.
(a) Calculate the clearance for each tool with the 40 mm clamps and state which pass.
(b) Identify the governing tool and the shortfall.
(c) Determine the maximum clamp height permitting all three operations.
(d) Calculate the clearances achieved with the 14 mm low-profile clamps.
(e) Calculate the annual cost of the extra-setup option.
(f) Calculate the break-even volume for the low-profile clamps and the payback multiple over one year.
(g) State your recommendation with reasoning.
(h) Explain one non-cost reason why the extra setup might be unacceptable regardless of the economics.

### 26. Advanced exercise
**E1.3.6-A** — A cast aluminium housing requires, in one setup: 12 × Ø9 holes with Ø15 counterbores on
the top face; 6 × M8 tapped holes; 4 × Ø20 holes with 2 × 45° chamfers both sides — the underside chamfer
requiring a back-chamfer tool through the hole; and a Ø45 spotface around one boss. Tool holders: drill
Ø42 at 68 mm, counterbore Ø50 at 26 mm, tap holder Ø65 at 40 mm, chamfer Ø63 at 16 mm, back-chamfer tool
Ø18 body requiring 25 mm of clearance below the part, spotface cutter Ø45 with holder Ø72 at 22 mm. The
part is 340 × 210 mm and needs four clamps; the tightest available radial distance from a hole to a clamp
edge is 44 mm. Minimum clearance 15 mm.
(i) Produce the full diameter-against-height table for all six tool assemblies.
(ii) For a proposed clamp height of 35 mm, calculate the clearance for each tool and identify all
failures.
(iii) Determine the maximum clamp height that permits every operation, and identify which tool sets that
limit.
(iv) The back-chamfer operation requires the fixture to be open beneath the four Ø20 holes while the part
is still supported. Propose a support arrangement and explain the conflict with L1.3.3's drilling exit
support requirement.
(v) The back-chamfer cuts upward. Explain the clamping consequence and state what you would specify.
(vi) The Ø45 spotface with its Ø72 holder at 22 mm is the largest assembly close to the part. Calculate
the radial distance a clamp would need to be from that boss, and comment on whether four clamps remain
feasible.
(vii) Propose a complete clamping concept — type, height, positions — that satisfies every operation, and
justify it.
(viii) Identify two operations that could be eliminated or combined by tooling changes, and state the
benefit of each.
(ix) If access cannot be achieved for the back-chamfer in this setup, state what the second setup would
cost in tolerance terms and how you would establish whether the drawing permits it.
(x) Write the tool access note for the fixture drawing.

### 27. Interview questions
1. *"Chamfering barely produces any force. Why would it affect the fixture design?"*
   **Answer:** Because for secondary operations the constraint is access, not force. A chamfer tool is
   deliberately short and stiff — it is cutting an interrupted edge and a long tool would chatter — so
   its holder sits very close to the part, often only fifteen or twenty millimetres above it. A drill
   for the same hole is long, so its holder stays sixty or seventy millimetres up and never comes near a
   clamp. In the example we worked, the drill had 35.5 mm of clearance and the chamfer tool had 9.5 mm
   and failed, even though the drill produces all the force. So the two analyses rank the operations in
   opposite orders, and if you place your clamps on force grounds alone you can produce a fixture that
   is perfectly adequate structurally and physically unusable.
2. *"How do you check tool access properly?"*
   **Answer:** By tabulating diameter against height for every tool assembly in the programme — cutting
   diameter, tool body diameter and holder diameter, each with the height it sits at above the part —
   and then checking every row against every obstruction. The two mistakes people make are checking only
   the cutting diameter, when the holder usually binds first, and checking only in plan, when the
   conflict only shows up in a section view because it depends on height. I would also check the largest
   tool that visits each feature rather than the tool that created it, because a counterbore is around
   one and a half to one point seven times the clearance hole diameter. And the important part is the
   order: do the access review before placing the clamps, not after, because clamps placed first and
   checked afterwards just get moved.

### 28. Expert questions
1. *"When is an extra setup the right answer?"*
   **Answer:** Less often than it is chosen, but it is genuinely right in a few situations, and it is
   worth being clear about them rather than treating it as always a failure.
   The economics are usually lopsided against it, and the example in this lesson is typical rather than
   extreme: ₹5,200 of low-profile clamps against ₹462,000 a year of added cycle time, with break-even at
   sixty-two parts. And that comparison **understates** the case, because the extra setup also brings a
   second fixture to design, manufacture, store and maintain; handling and work in progress; another
   opportunity to load the part wrongly; and a tolerance stack. So the first thing I would do with any
   proposal for an extra setup is put a number on it, because the number usually settles it.
   The tolerance point can be decisive on its own. Features machined in a second setup are located
   relative to the first setup's features through whatever relocation method is used, so the errors add.
   **If the drawing demands a positional tolerance that only a single setup can achieve, the extra setup
   is not a cheaper option — it is not an option.** That check should come before the cost comparison,
   because it can make the comparison irrelevant.
   Now the cases where it is right. **Genuine geometric impossibility** — a feature on the opposite face
   that no tool can reach, where the part simply has to be turned over. **Back-spotfacing or
   back-chamfering** sometimes falls here, because the fixture must be open beneath the hole while
   supporting the part around it, and on some geometries those requirements cannot both be met.
   **Very low volume**, where break-even at sixty-two parts becomes relevant if you are making twenty.
   **Where the second setup already exists for another reason** — if the part must be turned over anyway
   for a machining operation on the underside, adding the chamfer to that setup is free.
   And there is a case that is easy to miss: **where a single setup would require a fixture so complex
   that its own reliability becomes the problem.** A fixture with retracting supports, swing clamps and
   sequenced hydraulics to achieve access for one minor operation may have more failure modes than the
   extra setup it avoids. Complexity has a cost that does not appear in a cycle-time calculation, and
   the L0.5.1 finding — that the base plate was 89 per cent of material cost and near zero per cent of
   risk — cuts the other way here: the fiddly mechanism is a small part of the cost and most of the
   risk.
   So my position is: cost it, check the tolerance first because it may foreclose the option, and then
   accept the extra setup only for geometric impossibility, genuine low volume, an existing second
   setup, or where avoiding it would make the fixture less reliable than the alternative.
2. *"This module has now given you several different 'the governing case is not the obvious one'
   results. Is there a pattern?"*
   **Answer:** There is, and I think it is the single most transferable thing in the module.
   Look at what has actually happened across the six lessons. In L1.3.1 the conventional milling case
   governed even though climb is the default. In L1.3.2 the gentle contouring pass produced nearly seven
   times the side load of the aggressive slotting pass. In L1.3.3 torque governed a drilling fixture by
   a factor of seven over the thrust that everybody thinks of as *the* drilling force. In L1.3.4 the
   operation with almost no cutting force turned out to be the hardest to fixture, and the clamp force
   window was empty. In L1.3.5 the reversal — half of every cycle — was the case a single stop did not
   cover. And here, the chamfer that removes a few cubic millimetres governs the entire clamp layout.
   **Six lessons, six times the governing case was not the one intuition offers first.**
   The pattern behind it is that **intuition ranks operations by how dramatic they look**, and the
   governing case is decided by whichever constraint is tightest relative to its margin — which is a
   completely different question. A drill looks impressive and its thrust is well within the fixture's
   capability; its torque is unglamorous and is not. A slotting cut looks brutal but its side forces
   partly cancel. A chamfer looks trivial and its holder is fifteen millimetres from the part.
   There is a second, sharper version of it: **the governing case is often the one that nobody has a
   number for.** People calculate what they know how to calculate. Thrust has a formula everyone
   remembers; the moment about the vertical axis needs a perpendicular distance that requires thinking
   about geometry. Cutting force is in every handbook; clamping distortion has to be measured. So the
   unexamined term is disproportionately likely to be the one that bites, not because it is inherently
   larger but because nothing has been checking it.
   The practical discipline I take from it is to **enumerate rather than rank**. List every operation,
   every direction, every load type — force, moment, torque, reversal, access — and compute each,
   including the ones that look obviously fine. It takes longer than reasoning about the worst one, and
   it is the only method that reliably finds these. The checklists at the end of each of these lessons
   are exactly that discipline written down.
   And I would add a corollary about how this shows up in practice: **because the governing case is
   usually unexpected, the failures it produces are usually blamed on something else.** A part that
   rotated because the moment was never calculated looks like a machine accuracy problem. A bore that
   went oval from clamping distortion looks like a tooling problem. That is why the diagnostic
   discriminations — size versus position, varies with depth or not, consistent or random — have run
   through this module alongside the calculations. **Finding the governing case after the fact is a
   different skill from predicting it, and you need both.**

### 29. Summary
Chamfering, counterboring and countersinking produce small, short-lived forces that rarely govern
anything, and yet they cause more fixture redesigns than any other category, because the constraint they
impose is access rather than force. These are secondary operations that modify features which already
exist, so they come late in the sequence and their tools are usually wider than the feature they are
modifying — a counterbore is roughly 1.5 to 1.7 times the clearance hole — which means a clamp that
cleared the drill may not clear the counterbore. The mechanism that catches people is that chamfer and
counterbore tools are deliberately short and stiff, so their holders sit close to the work, whereas a
drill is long and its holder stays well clear: in the worked example the drill had 35.5 mm of radial
clearance and the chamfer tool 9.5 mm and failed, so the operation with the lowest force governed the
entire clamp layout and the access ranking was the exact reverse of the force ranking. The conflict is
only visible in section, which is why a diameter-against-height table for every tool assembly, checked
against every obstruction, is the necessary method — and why the access review must precede clamp
placement rather than follow it. Back-spotfacing is the hardest case, cutting upward against the
underside and requiring the fixture to be absent exactly where a support would go. Economically the
comparison is rarely close: ₹5,200 of low-profile clamps against ₹462,000 a year of extra setups, with
break-even at 62 parts and 88.9-fold payback in a year, and the case is understated because the extra
setup also brings a second fixture, handling, and a tolerance stack that may foreclose the option
entirely regardless of cost.

### 30. Key takeaways
- **For secondary operations, access governs, not force** — and the two rankings are reversed.
- **A tall clamp is the enemy of a short tool.** Chamfer holders sit ~15–20 mm above the part.
- **Check the largest tool that visits the feature**, not the one that created it.
- Counterbore ≈ **1.5–1.7× the clearance hole** `[STD]`.
- **The holder usually binds before the cutter.**
- **The conflict only appears in section** — tabulate diameter against height.
- **Do the access review before placing clamps.** Clamps checked afterwards get moved.
- **Back-spotfacing cuts upward** and needs the fixture open beneath.
- **Cost every proposed extra setup** — ₹5,200 vs ₹462,000/yr, break-even at 62 parts.
- **Check the tolerance before the cost** — a second setup may not be permitted at all.
- **A combination drill-chamfer tool can be cheaper than any fixture change.**
- **Record on the drawing why the layout is what it is**, so it is not re-optimised on force grounds.
- **Across all six lessons, the governing case was never the obvious one** — enumerate, do not rank.

---

# MODULE 1.3 — CLOSING

## What each lesson established

| Lesson | Core establishment |
|---|---|
| **L1.3.1** | **Climb pushes down, conventional lifts** — the strategy is chosen in CAM and invisible on the fixture drawing; the moment about the vertical axis frequently governs |
| **L1.3.2** | **A stop resists only in compression** — a rotating load needs three stops or a form-closed bore; the peak governs, not the mean; δ ∝ L³ and 1/d⁴ |
| **L1.3.3** | **Torque governs a drilling fixture, not thrust** — by 7×; the breakthrough is the governing event, where restraint collapses as the load peaks |
| **L1.3.4** | **When forces become negligible, the fixture's own effects do not** — clamp force has an upper bound as well as a lower one, and they can cross |
| **L1.3.5** | **Tapping reverses on every hole** — one-directional restraint fails half the time, and its failure mode is that it looks adequate |
| **L1.3.6** | **For secondary operations the constraint is access, not force** — and the two rankings are exactly reversed |

---

## THE OPERATION → FORCE → DOF CHART

**This is the deliverable of the module and the Level 1 exit criterion.** It is the table the roadmap's
advanced exercise asks you to build for a real part, and it is the reference you will use for the rest of
the programme.

`[GUIDE]` Force magnitude classes are relative and indicative; always calculate for a specific case.

| # | Operation | Force magnitude | Principal direction | Peak event | DOF threatened | Fixture response |
|---|---|---|---|---|---|---|
| 1 | **Face mill, climb** | HIGH | Side + **DOWN** | Entry shock ×1.3–1.6 | Translation in feed axis; rotation in plan | Positive stop along feed; spread plan locators |
| 2 | **Face mill, conventional** | HIGH | Side + **UP** | Entry, rubbing | Translation; **loss of seating** | Stops **plus** clamps sized for uplift |
| 3 | **End mill, peripheral** | MED–HIGH | **Mostly horizontal** | Entry | Translation; rotation in plan | Positive stop; friction is ~15–38× short |
| 4 | **End mill, RH helix** | MED | Horizontal + down | — | As above | Downward component assists seating |
| 5 | **End mill, LH helix** | MED | Horizontal + **UP** | — | **Lifting** | Clamps must resist uplift — flag the cutter hand |
| 6 | **Full-width slotting** | HIGH torque | Side forces **partly cancel** (allow 20–40%) | Chip recutting ×1.5–2.5 | Torque on tool; part deflection | Chip escape; the case is torque and deflection, not side load |
| 7 | **Pocketing / contouring** | MED | **ROTATES THROUGH 360°** | Entry, corners | Translation in **any** planar direction | **≥3 stops at 120°, or a pin in a bore** |
| 8 | **Drilling, steady** | MED thrust, MED torque | **DOWN** + **torque about the hole axis** | — | Rotation about the hole axis | Positive anti-rotation; maximise moment arm |
| 9 | **Drilling, breakthrough** | Torque ×1.5–2.5, thrust **reverses** to 0.3–0.5× **UP** | **UP + peak torque simultaneously** | **THE GOVERNING EVENT** | Rotation **and** loss of seating together | Anti-rotation stop **and** uplift-rated clamps; exit support |
| 10 | **Reaming** | LOW | Down, small torque | — | Almost none — **but stability** | Minimum clamp force; relieved pads; follows position |
| 11 | **Boring, roughing** | MED | Radial | — | Translation | Conventional restraint |
| 12 | **Fine boring** | VERY LOW | Radial, small | — | **None from force — distortion instead** | **Upper bound on clamp force**; positive stop; clamp over ribs |
| 13 | **Tapping, cutting** | MED torque | **Torque one way** | — | Rotation | Anti-rotation |
| 14 | **Tapping, reversal** | **1.0–1.5× cutting** | **Torque the OTHER way** + uplift | **Every hole** | Rotation **in the opposite sense** | **Bidirectional restraint** — two pins or opposed stops |
| 15 | **Chamfer / countersink** | VERY LOW | Down, trivial | — | None | **ACCESS governs** — short tool, holder close |
| 16 | **Counterboring** | LOW | Down, interrupted | Interrupted entry | None significant | **ACCESS** — tool 1.5–1.7× the hole |
| 17 | **Back-spotfacing** | LOW | **UP, against the underside** | — | **Lifting** | Uplift-rated clamps **and** fixture open beneath |

```
   HOW TO USE THIS CHART

   For any new part:
     1. List every operation in the programme
     2. Look up each row
     3. Record: magnitude class, direction, peak
        event, DOF threatened
     4. Identify the GOVERNING case for EACH of:
          - lifting
          - horizontal sliding
          - rotation in plan
          - torque about a tool axis
          - ACCESS
     5. THEY WILL USUALLY BE DIFFERENT OPERATIONS.
     6. Design for all five.
```

---

## The single thread of Module 1.3

```
   L1.3.1  the force DIRECTION is not what you assume
              │
   L1.3.2  the force DIRECTION CHANGES, and the peak
           exceeds the mean
              │
   L1.3.3  the force you think of is not the one that
           GOVERNS
              │
   L1.3.4  when the force VANISHES, the fixture itself
           becomes the error
              │
   L1.3.5  the force REVERSES, and half your restraint
           disappears
              │
   L1.3.6  the force is IRRELEVANT — geometry governs

   ┌────────────────────────────────────────────────────┐
   │ SIX LESSONS, SIX TIMES THE GOVERNING CASE WAS NOT  │
   │ THE OBVIOUS ONE.                                   │
   │                                                    │
   │ INTUITION RANKS OPERATIONS BY HOW DRAMATIC THEY    │
   │ LOOK. THE GOVERNING CASE IS DECIDED BY WHICHEVER   │
   │ CONSTRAINT IS TIGHTEST RELATIVE TO ITS MARGIN.     │
   │ THOSE ARE DIFFERENT QUESTIONS.                     │
   │                                                    │
   │ ENUMERATE. DO NOT RANK.                            │
   └────────────────────────────────────────────────────┘
```

## The positive-feature result, assembled

Across four lessons the same comparison was made independently and came out the same way every time:

| Load type | Lesson | Friction requires | Positive feature requires | Factor |
|---|---|---|---|---|
| Horizontal sliding | L1.3.1 | 52,247 N/clamp | 1,362.9 N/clamp | **38.3×** |
| Rotating planar load | L1.3.2 | not viable | 3 stops or 1 bore | — |
| Torsion (drilling) | L1.3.3 | 4,358 N/clamp (r=35) | 406.8 N at the stop | **18.3×** |
| Torsion (drilling, r=90) | L1.3.3 | 1,694.8 N/clamp | 237.6 N/clamp | **7.1×** |
| Finishing restraint | L1.3.4 | **impossible — empty window** | 600 N seating | **∞** |
| Reversal (tapping) | L1.3.5 | 3,093.8 N total | 293.0 N total (2 pins) | **10.6×** |

> **In L1.3.4 the positive stop did not improve the answer — it created one.** The friction-only case had
> no solution at all, because the clamp force needed to generate friction exceeded the clamp force that
> would distort the part beyond tolerance.
>
> **A positive feature also removes μ — the most uncertain variable in the whole analysis — from the
> calculation entirely.** That is worth as much as the raw factor.

## The 1/r geometry, assembled

The same relationship appeared four times in four different guises:

| Appearance | Lesson | Relationship |
|---|---|---|
| Alignment feature length | L1.2.4 | `e = D·δ/L` |
| Plan locator spread | L1.3.1 | `R = M_z/s` |
| Clamp radius for torque | L1.3.3 | `F = M/(μ·r)` |
| Pin spacing for reversal | L1.3.5 | `R = M/s` |

> **Anything resisting a rotation benefits linearly from distance from the axis, and the distance is
> almost always free.** Doubling the spread halves the load, at no cost in material, machining or
> complexity. It is the cheapest load reduction available in fixture design.

## Governing principles established in Module 1.3

Continuing the numbered series from Module 1.2 (principles 40–54).

| # | Principle |
|---|---|
| **55** | **Climb milling pushes the part down; conventional milling tends to lift it.** The strategy is chosen in CAM and never appears on the fixture drawing — so assume climb, but design for conventional. |
| **56** | **A milling force is never a single number in a single direction.** It has three components and produces a moment about the vertical axis, and the moment frequently governs. |
| **57** | **A stop resists only in compression.** A load that rotates through 360° needs at least three stops, or a form-closed location. |
| **58** | **The peak moves the part, not the mean.** Apply a dynamic factor for a known physical peak, *before* the safety factor that covers uncertainty. |
| **59** | **Calculate every operation; do not rank them by how aggressive they look.** |
| **60** | **Torque governs a drilling fixture, not thrust.** |
| **61** | **At breakthrough the restraint collapses at the instant the load peaks** — which is why drilling fixtures fail at the end of the hole. |
| **62** | **Anything resisting a rotation benefits linearly from distance from the axis, and the distance is free.** |
| **63** | **"Clamp near the cut" is right for bending and wrong for torque.** Support near, clamps far. |
| **64** | **When cutting forces become negligible, the fixture's own effects do not.** The fixture becomes the disturber rather than the resister. |
| **65** | **Strength, stiffness and stability are three independent properties.** |
| **66** | **Clamp force has an upper bound as well as a lower one, and at finishing tolerances the two can cross.** |
| **67** | **Roughing and finishing want opposite clamp forces.** One clamping state cannot always serve both. |
| **68** | **Measure rather than calculate when the formula does not represent the part.** A wrong number with units attached is more dangerous than an admitted unknown. |
| **69** | **Tapping reverses its torque on every hole**, and the failure mode of a single stop is that it looks adequate. |
| **70** | **The best solution to a fixture problem is sometimes not a fixture change.** |
| **71** | **For secondary operations the constraint is access, not force** — and the two rankings are typically reversed. |
| **72** | **Do the access review before placing the clamps.** Clamps placed first and checked afterwards get moved. |
| **73** | **Cost every proposed extra setup, and check the tolerance first** — it may foreclose the option regardless of cost. |
| **74** | **The governing case is often the one nobody has a number for**, because people calculate what they know how to calculate. |

## Module 1.3 numerical results

| Result | Value | Lesson |
|---|---|---|
| Face mill resultant horizontal force | 4,136.1 N at 24.23° | L1.3.1 |
| Climb net vertical / conventional net vertical | 1,172.7 N down / **1,090.3 N up** | L1.3.1 |
| Part weight as a fraction of axial force | **3.6%** — negligible | L1.3.1 |
| Moment about the vertical axis | 392,930 N·mm | L1.3.1 |
| Stop reaction, 180 mm vs 360 mm spread | 2,182.9 N vs **1,091.5 N (÷2.00)** | L1.3.1 |
| Friction vs positive stop, clamp force | 52,247 N vs 1,362.9 N = **38.3×** | L1.3.1 |
| Slotting side load vs contouring side load | 129.6 N vs **888.9 N = 6.86×** | L1.3.2 |
| Tool deflection at 60 mm stick-out | **0.0810 mm = 81% of the wall tolerance band** | L1.3.2 |
| Deflection improvement, 60→40 mm stick-out | **3.375× = 1.5³** | L1.3.2 |
| Deflection improvement, Ø16→Ø20 cutter | **2.441× = 0.8⁻⁴** | L1.3.2 |
| Drilling thrust / torque, Ø16 at 0.22 | 475.2 N / 7,321.6 N·mm | L1.3.3 |
| Drilling design torque (×2.0 ×2.5) | 36,608 N·mm | L1.3.3 |
| Torque vs uplift clamp requirement | 1,694.8 vs 237.6 N = **7.1×** | L1.3.3 |
| Clamp radius improvement, 35→90 mm | **2.571× = 90/35, exactly linear** | L1.3.3 |
| Anti-rotation stop reaction | 406.8 N (vs 4,358 N/clamp friction) = **18.3×** | L1.3.3 |
| Finishing: minimum vs maximum clamp force | 1,354.2 N vs 1,250 N — **WINDOW EMPTY by 8.3%** | L1.3.4 |
| Roughing vs finishing clamp force | 16,250 N vs 1,250 N = **13.0×** | L1.3.4 |
| Roughing distortion vs circularity requirement | 0.0650 mm = **6.5× over** | L1.3.4 |
| Boring bar, steel vs carbide at L/D 5.0 | 0.00657 mm (89.7%) vs **0.00230 mm (47.0%)** | L1.3.4 |
| Tapping M10×1.5 design torque | 27,844 N·mm | L1.3.5 |
| Two pins vs friction, total reaction | 293.0 N vs 3,093.8 N = **10.6×** | L1.3.5 |
| Thread engagement 75%→60% torque reduction | **27.5%**, ~95% of strength retained | L1.3.5 |
| Access clearance: drill / counterbore / chamfer | 35.5 / 16.0 / **9.5 mm ✗** | L1.3.6 |
| Low-profile clamps vs extra setup | ₹5,200 vs **₹462,000/yr**; break-even **61.9 parts** | L1.3.6 |
| Payback multiple in one year | **88.9×** | L1.3.6 |

## Formulae added in Module 1.3

```
MILLING
  F_t = k_c · a_p · f_z            per tooth
  cos(θ/2) = 1 − 2a_e/D            engagement angle
  z_c = z · θ/360                  teeth in cut
  F_r = k_r·F_t   k_r = 0.30-0.60  [GUIDE]
  F_a = k_a·F_t   k_a = 0.20-0.40  [GUIDE]
  F_H = √(F_t² + F_r²)
  M_z = F_H · d      R = M_z / s

DYNAMIC LOADING
  F_design = F_steady × K_dyn × SF
  K_dyn = 1.0-2.5                  [GUIDE]

DEFLECTION
  δ = F L³/(3 E I)    I = π d_eff⁴/64
  d_eff ≈ 0.8 d       [GUIDE, fluted cutter]
  δ₂/δ₁ = (L₂/L₁)³ × (d₁/d₂)⁴
  E: carbide 600,000  steel 210,000  N/mm²  [GUIDE]

DRILLING
  F_thrust ≈ K_f · d · f
  M ≈ K_m · d² · f
  F_uplift = C_up·F_thrust·SF   C_up = 0.3-0.5 [GUIDE]
  M_design = K_bt·M·SF          K_bt = 1.5-2.5 [GUIDE]
  M_resist = μ · F_clamp · r
  R_stop = M_design / r

TAPPING
  M_tap ≈ K_t · d² · P
  M_rev = C_rev·M_tap
     C_rev = 1.0 through, 1.2-1.5 blind  [GUIDE]
  d_drill = d − (eng%/100)×1.0825×P      [STD]
  M(60%) ≈ 0.70-0.75 × M(75%)            [GUIDE]

FINISHING / STABILITY
  F_clamp ≥ (F_cut·SF)/(μ·n)     lower bound
  F_clamp ≤ F_distortion_limit   UPPER bound
  → THE WINDOW CAN BE EMPTY

ACCESS
  Clearance(h) = d_obstruction(h) − D_tool(h)/2
  margin ≥ 15 mm                          [PRACTICE]
  N_breakeven = C_fixture/(t_setup × rate)
```

## Reference data added in Module 1.3

| Quantity | Value | Tag |
|---|---|---|
| Radial force ratio k_r | 0.30–0.60 | `[GUIDE]` |
| Axial force ratio k_a | 0.20–0.40 | `[GUIDE]` |
| Face mill diameter | 1.3–1.6 × width of cut | `[PRACTICE]` |
| Slot-wall side load remaining | 20–40% of single-wall | `[PRACTICE]` |
| Dynamic factor, climb entry | 1.3–1.6 | `[GUIDE]` |
| Dynamic factor, interrupted cut | 1.5–2.0 | `[GUIDE]` |
| Dynamic factor, slotting | 1.5–2.5 | `[GUIDE]` |
| Effective cutter diameter | 0.8 × nominal | `[GUIDE]` |
| E carbide / E steel / E HSS | 600,000 / 210,000 / 210,000 N/mm² | `[GUIDE]` |
| Drill thrust constant K_f, mild steel | 110–160 | `[GUIDE]` |
| Drill torque constant K_m, mild steel | 100–160 | `[GUIDE]` |
| Breakthrough uplift fraction | 0.3–0.5 × thrust | `[GUIDE]` |
| Breakthrough torque factor | 1.5–2.5 | `[GUIDE]` |
| Drill exit clearance hole | 1–3 mm over drill Ø | `[PRACTICE]` |
| Tapping constant K_t, mild steel | 40–70 | `[GUIDE]` |
| Tapping reversal factor, blind | 1.2–1.5 | `[GUIDE]` |
| Standard thread engagement | 75% | `[PRACTICE]` |
| Boring bar L/D limits | ≤4 steel, 4–6 marginal, 6–8 carbide, >8 AV | `[PRACTICE]` |
| Counterbore diameter | 1.5–1.7 × clearance hole | `[STD]` |
| Minimum tool/holder radial clearance | 15 mm | `[PRACTICE]` |

## Self-check — 18 questions

Answer without looking back. Thirteen or more correct means Module 1.3 is secure.

1. Which cutting strategy tends to lift the part, and why?
2. Why is a part's weight usually irrelevant in a milling load case?
3. A contour goes all the way round a pocket. How many stops, and why?
4. Why does a dynamic factor go *before* the safety factor rather than instead of it?
5. Full-width slotting: how many teeth are in cut, and what is the net side load?
6. Give the two scaling laws for tool deflection.
7. How do you tell tool deflection from part movement?
8. What governs a drilling fixture — thrust or torque? By roughly what factor?
9. What two things happen simultaneously at breakthrough?
10. Where should clamps go on a drilling fixture, and why is that counter-intuitive?
11. Why is reaming harder to fixture than drilling despite lower forces?
12. What is the "empty window" and how is it resolved?
13. Why can roughing and finishing not always share a clamping state?
14. Which corrects position — reaming or boring?
15. Why is a single anti-rotation stop inadequate for tapping, and why is that dangerous?
16. Give two ways to provide bidirectional rotational restraint.
17. Why does a chamfer tool govern a fixture layout when a drill does not?
18. State the general pattern behind all six lessons in one sentence.

---

# LEVEL 1 ASSESSMENT

**Format:** Quiz Q1 (35 items) + the offset-table assignment
**Time allowed:** 90 minutes for Q1; the assignment is untimed
**Pass mark:** 60%

## Grade bands

| Score | Grade | Meaning |
|---|---|---|
| **90–100** | **MASTER** | Ready to proceed with full command of Level 1 |
| **80–89** | **ADVANCED** | Strong; review flagged items and proceed |
| **70–79** | **COMPETENT** | Adequate; revisit weak modules before Level 3 |
| **60–69** | **DEVELOPING** | Proceed with caution; re-read the flagged lessons |
| **<60** | **REPEAT** | Repeat Level 1 before continuing |

## CRITICAL-ERROR AUTO-FAILS

Any of the following in an answer is an automatic fail regardless of the total score. These extend the
Level 0 list.

**From Level 0:**
1. Using a clamp as a locator
2. Sizing from friction when a positive stop is available
3. Specifying through-hardening below 0.30% C
4. Missing or incorrect units
5. Claiming a stronger steel grade reduces deflection
6. Presenting a schematic as a manufacturing drawing

**From Level 1:**
7. **Sizing a clamp for one orientation on a rotary axis** without checking the others
8. **Omitting a support ledge on an HMC fixture** on the grounds that friction is sufficient
9. **Checking tool clearance against the programmed path** rather than the swept envelope
10. **Leaving the setting-feature-to-locator dimension uncontrolled** on a fixture drawing
11. **Specifying an unhardened surface** that a tool touches or that defines a part dimension
12. **Designing a fixture whose offsets cannot be established without a part loaded**
13. **Sizing a drilling fixture on thrust while ignoring torque**
14. **Providing single-direction anti-rotation for a tapping operation**
15. **Increasing clamp force to fix a distortion problem on a finishing operation**

---

## QUIZ Q1 — 35 ITEMS

### Section A — Machine architecture and coordinate systems (items 1–12)

**Q1.1** *(2 marks)* State the ISO 841 convention for the three rotary axes A, B and C.

**Q1.2** *(2 marks)* On an HMC, which axis is vertical, and why?

**Q1.3** *(3 marks)* A fixture and machine have stiffnesses of 45,000 N/mm and 20,000 N/mm respectively
in series. Calculate the combined stiffness and state which element dominates the deflection.

**Q1.4** *(3 marks)* Explain why chip fall-away is described as "the reason the HMC exists", and state the
one fixture feature this makes mandatory.

**Q1.5** *(2 marks)* State the relationship between machine position, work offset and work position.

**Q1.6** *(3 marks)* A machine has X travel from MCS −900 to 0. A work offset is set at X = −580. A
feature is programmed at work X = 265. Calculate the machine coordinate and state whether it is within
travel.

**Q1.7** *(3 marks)* Explain why homing is repeatable to microns when the home switch is only accurate to
about a millimetre.

**Q1.8** *(4 marks)* A fixture is refitted 0.30 mm out of position without the offset being re-set.
Describe the resulting error, its signature, and the design measure that prevents it.

**Q1.9** *(4 marks)* Explain why using one probed reference plus nominal CAD offsets can give a *better*
station-to-station result than measuring every station individually, and state the condition under which
this argument fails.

**Q1.10** *(3 marks)* A Ø63 face mill follows a path 25 mm from a clamp. Calculate the actual clearance
and state whether it is acceptable against a 15 mm minimum.

**Q1.11** *(3 marks)* A tool setting block is nominally 45.000 mm and measures 44.930 mm. State the
resulting error on part depths, its direction, and the material specification that prevents it.

**Q1.12** *(4 marks)* Explain what it means to say "a work coordinate system is a claim and the fixture is
the evidence", and name the single dimension that most often invalidates it.

### Section B — Milling operations (items 13–20)

**Q1.13** *(2 marks)* State which cutting strategy tends to lift the part and why.

**Q1.14** *(4 marks)* A face milling operation gives a total tangential force of 3,200 N with k_r = 0.45
and k_a = 0.30. Calculate the radial force, the axial force and the resultant horizontal force.

**Q1.15** *(3 marks)* The part in Q1.14 weighs 5.0 kg. Calculate the net vertical force in both cutting
strategies and state which governs the clamp sizing.

**Q1.16** *(3 marks)* A horizontal force of 4,000 N acts 90 mm from the axis between two plan stops
spread 200 mm apart. Calculate the reaction at each stop, and the reaction if the spread were doubled.

**Q1.17** *(3 marks)* Explain why a right-hand-helix end mill seats the part while a left-hand-helix
cutter lifts it, and state when a left-hand helix is nonetheless used deliberately.

**Q1.18** *(4 marks)* A pocket is contoured around a closed profile. State the minimum number of stops
required, explain why two stops at 90° is insufficient, and give the preferred alternative.

**Q1.19** *(4 marks)* A carbide cutter has d_eff = 12.8 mm and 55 mm stick-out and deflects 0.062 mm.
Calculate the deflection at 38 mm stick-out and state the improvement factor.

**Q1.20** *(3 marks)* Describe the three signatures that distinguish tool deflection from part movement.

### Section C — Drilling, boring and tapping (items 21–30)

**Q1.21** *(3 marks)* A Ø14 drill runs at f = 0.20 mm/rev in mild steel with K_f = 140 and K_m = 135.
Calculate the thrust force and the torque.

**Q1.22** *(4 marks)* Apply a breakthrough torque factor of 2.0 and a safety factor of 2.5 to Q1.21.
Calculate the design torque, and the total clamp force needed to resist it by friction at r = 60 mm with
μ = 0.12.

**Q1.23** *(3 marks)* Repeat the clamp force calculation from Q1.22 with the clamps at r = 120 mm and
state the improvement factor and why it takes that value.

**Q1.24** *(4 marks)* Describe what happens at drill breakthrough and explain why drilling fixtures fail
at the end of the hole rather than the beginning.

**Q1.25** *(3 marks)* Explain why "clamp near the cut" is poor advice for a drilling fixture, and state
how the conflict is resolved.

**Q1.26** *(4 marks)* Explain why reaming and boring are the most demanding operations to fixture despite
producing the lowest forces.

**Q1.27** *(4 marks)* A finishing operation needs 1,400 N of clamp force to generate sufficient friction,
but 1,300 N would distort the part beyond its circularity tolerance. State what this situation is called,
why no clamp force works, and how it is resolved.

**Q1.28** *(2 marks)* State which of reaming and boring corrects hole position, and why.

**Q1.29** *(4 marks)* An M12 × 1.75 thread is tapped in mild steel with K_t = 60. Calculate the cutting
torque, and the design torque using a blind-hole reversal factor of 1.4 and a safety factor of 2.5.

**Q1.30** *(4 marks)* Explain why a single anti-rotation stop is inadequate for tapping, why this
particular error is dangerous, and give two adequate alternatives.

### Section D — Access, integration and judgement (items 31–35)

**Q1.31** *(3 marks)* Explain why a chamfer tool can govern a fixture layout when a drill does not.

**Q1.32** *(3 marks)* A clamp is 32 mm tall with its nearest edge 45 mm from a hole centre. A chamfer
tool's holder is Ø68 and sits 20 mm above the part. Calculate the clearance and state whether it passes a
15 mm minimum.

**Q1.33** *(4 marks)* An extra setup adds 3.0 min/part at 6,000 parts/yr and ₹1,800/h. Low-profile clamps
cost ₹6,000. Calculate the annual cost of the extra setup and the break-even volume for the clamps.

**Q1.34** *(4 marks)* Beyond cost, state two reasons an extra setup may be unacceptable, and explain
which of them can make the economic comparison irrelevant.

**Q1.35** *(6 marks)* Across Modules 1.1 to 1.3, the governing case repeatedly turned out not to be the
obvious one. State the general pattern, explain why it occurs, and describe the working method that
reliably detects it.

**Total: 120 marks**

---

## THE OFFSET-TABLE ASSIGNMENT

**Weighting:** assessed alongside Q1; both must be passed.

### Brief

A four-face tombstone carries **three parts per face — twelve stations** — on an HMC with a 500 mm
pallet. Station centres are 150, 320 and 490 mm above the pallet face, each offset 125 mm from the
tombstone centreline. The reference datum bush is probed at MCS X = −512.400, Y = −298.150,
Z = −168.900. The station locating face is 55 mm outboard of the tombstone face plane.

The control provides G54–G59 and G54.1 P1–P48. Probe uncertainty is ±0.005 mm. Station-to-station
manufacturing tolerance, as inspected, is ±0.016 mm. The part positional tolerance is ±0.055 mm, the
furthest controlled feature is 155 mm from each station origin, and pre-existing machine/tooling/
measurement consumption is 0.038 mm. The tombstone's ground alignment edge is 280 mm long and indicates
0.011 mm over that length.

### Required

1. **Allocate the work offsets**, stating which you reserve and why.
2. **Produce the complete offset table** — station ID, offset code, B-axis position, nominal X, Y and Z
   relative to the reference, and the source of each value.
3. **State what makes your table self-checking**, or explain why it cannot be.
4. **Justify the choice** between measured and nominal offsets, with the numerical comparison.
5. **Calculate the orientation misalignment** in radians and arc-seconds, and the resulting positional
   error at the furthest feature.
6. **Calculate the total WCS realisation error** and each component's percentage share.
7. **Assess against the part tolerance** and state the remaining margin.
8. **Identify the dominant error term** and quantify the benefit of halving it.
9. **Specify the physical setting features** required — material, hardness, size, position — and the
   critical dimensions with tolerances.
10. **Write the four sheets** of setting documentation in outline: setting procedure, offset table,
    verification, re-establishment.

### Marking guide

| Criterion | Marks |
|---|---|
| Offset allocation systematic, justified, spares reserved | 10 |
| Offset table complete and correct | 20 |
| Self-checking property identified | 5 |
| Measured vs nominal justified numerically | 15 |
| Orientation calculation correct | 10 |
| WCS error budget correct with shares | 15 |
| Tolerance assessment and margin | 10 |
| Dominant term identified and improvement quantified | 10 |
| Setting features specified with critical dimensions | 15 |
| Setting documentation outline | 10 |
| **Total** | **120** |

`[PRACTICE]` **Auto-fail conditions apply to this assignment.** In particular, an answer that leaves the
setting-feature-to-locator dimension uncontrolled (auto-fail 10) fails regardless of the rest.

---

## LEVEL 1 EXIT CRITERION

> **You can state, for any machining operation, the force direction the fixture must resist.**

Test yourself against the operation → force → DOF chart above. Cover the right-hand columns and work
through all seventeen rows. **If you can produce the direction, the peak event and the DOF threatened for
each, Level 1 is complete.**

---

# END OF LEVEL 1

## What Level 1 covered

| Part | Module | Lessons | Content |
|---|---|---|---|
| **1** | 1.1 | L1.1.1–L1.1.4 | CNC machine architecture; 3-axis VMC; 4- and 5-axis; HMC and tombstone |
| **1** | 1.2 | L1.2.1–L1.2.4 | Machine coordinate system; work offsets; tool offsets; realising the WCS |
| **2** | 1.3 | L1.3.1–L1.3.6 | Face and end milling; slotting and contouring; drilling; reaming and boring; tapping; secondary operations |

**14 lessons · 420 sections · 42 exercises · governing principles 28–74 · Quiz Q1 (35 items) + the
offset-table assignment**

## The argument of Level 1 in one page

Level 1 answered three questions, and each one turned out to constrain the others.

**Module 1.1 asked what the machine does to the part.** The fixture sits inside the structural loop, so
its compliance adds directly to the machine's and the softest element dominates. Gravity seats the part
on a VMC and drops chips on it; when the part rotates, gravity does not; on an HMC chips fall away — the
reason the machine exists — but so does the part, so a support ledge becomes mandatory even though the
force calculation barely justifies it.

**Module 1.2 asked how the machine knows where the part is.** It does not. It knows axis positions
relative to a machine zero that never moves, and a stored offset asserting where the work origin lies.
Everything connecting those numbers to a physical component is arranged by people, and the physical half
of that arrangement is the fixture. A work coordinate system is a claim; the fixture is the evidence.

**Module 1.3 asked which force, specifically, and in which direction.** Six times the answer was not the
obvious one — the conventional case, the gentle contour, the torque rather than the thrust, the operation
with almost no force at all, the reversal, and finally the chamfer that governs a layout the drill does
not.

```
  ┌────────────────────────────────────────────────────┐
  │ 1.1  THE FIXTURE MUST WITHSTAND WHAT THE MACHINE   │
  │      DOES TO THE PART.                             │
  │                                                    │
  │ 1.2  THE FIXTURE MUST PUT THE PART WHERE THE       │
  │      MACHINE BELIEVES IT IS.                       │
  │                                                    │
  │ 1.3  AND THE THING IT MUST WITHSTAND IS ALMOST     │
  │      NEVER THE THING YOU FIRST THOUGHT OF.         │
  │                                                    │
  │ THESE THREE CONSTRAIN EACH OTHER. The clamp that   │
  │ holds the part is the clamp the face mill must     │
  │ clear; the datum bush a probe must reach is the    │
  │ bush the chip stream must miss; the support that   │
  │ stops the part bending under the drill is the      │
  │ support the back-spotface tool needs absent.       │
  └────────────────────────────────────────────────────┘
```

## What Level 2 will cover

**LEVEL 2 — WHAT IS A FIXTURE?**

Level 1 has been about the *environment* a fixture lives in — the machine, the coordinate system, the
operations. **Level 2 turns to the fixture itself**: what one is, what its elements are, how they are
classified, and the vocabulary and taxonomy you will use for the remaining fifty-eight levels.

That may sound like a step backwards after fourteen lessons of force analysis. It is not. **You now have
the reasons.** Every classification in Level 2 will land on something you have already had to solve — why
locators and clamps are different things, why supports are a third category, why some fixtures are
dedicated and some modular, and why the distinction between form closure and force closure keeps
deciding your answers.

---

*End of Level 1. Reply **NEXT** to continue with Level 2.*
