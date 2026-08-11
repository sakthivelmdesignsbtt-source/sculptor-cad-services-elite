# MASTER INDUSTRIAL FIXTURE DESIGN ENGINEERING
## From Scratch to Production-Ready Professional

# LEVEL 1 — CNC MACHINING FUNDAMENTALS
# PART 1 OF 2 — MACHINE ARCHITECTURE AND COORDINATE SYSTEMS

---

## Where you are

```
LEVEL 0 ✓ ENGINEERING FOUNDATION          22 lessons   COMPLETE
          Processes · Drawing · Mechanics · Machining · Materials

LEVEL 1 ► CNC MACHINING FUNDAMENTALS       14 lessons
   Part 1  Module 1.1  CNC machine architecture      (4 lessons)
           Module 1.2  Coordinate systems and offsets (4 lessons)
                                                    ← YOU ARE HERE
   Part 2  Module 1.3  Machining operations in detail (6 lessons)
           Level 1 assessment

LEVEL 2   WHAT IS A FIXTURE?
LEVEL 4   LOCATION THEORY — where all of this converges
```

## Why Level 1 exists, and how it differs from Module 0.4

Level 0 Module 0.4 gave you the **fixture designer's working survey** of machining: enough to estimate
a cutting force, read a process sheet, and know that a VMC and an HMC are different objects. That was
deliberate — you needed those facts to complete the foundation.

Level 1 goes **underneath** it. The questions this level answers are:

> **Where does a machine's accuracy actually come from — and which parts of it can my fixture spoil?**
>
> **How does a coordinate system physically exist on a machine, and what must my fixture provide to
> realise it?**
>
> **For every machining operation, exactly which degree of freedom is threatened, in which direction,
> and by how much?**

Those are not survey questions. They are the questions that determine whether a fixture works.

**Nothing in Level 1 repeats Module 0.4.** Where a topic was introduced there, Level 1 states the link
and then goes deeper. The Z-height budget from L0.4.4, for example, becomes a full machine-envelope
and interference analysis here.

## The exit criterion

Level 1 has a single, specific exit criterion, stated in the roadmap:

> **You can state, for any machining operation, the force direction the fixture must resist.**

Everything in these fourteen lessons serves that. By the end of Part 2 you will be able to take a
twelve-operation process sheet and produce a table of operation → force magnitude class → direction →
degree of freedom threatened. That table is the direct input to Level 4 location theory and Level 5
clamping design.

## Part 1 contents

| Module | Lesson | Title | Time |
|---|---|---|---|
| 1.1 | L1.1.1 | What a CNC machine is: axes, drives, ballscrews, guideways, spindle, ATC, controller | 1.0 h |
| 1.1 | L1.1.2 | The 3-axis VMC in depth: structure, travels, gravity, chip behaviour | 1.0 h |
| 1.1 | L1.1.3 | 4-axis and 5-axis: rotary tables, trunnions, and the fixture implications of each | 1.0 h |
| 1.1 | L1.1.4 | The HMC: horizontal spindle, pallets, tombstones, indexing | 1.0 h |
| 1.2 | L1.2.1 | The machine coordinate system: home, reference, and where zero really is | 0.75 h |
| 1.2 | L1.2.2 | Work coordinate systems: G54–G59 and extended offsets | 1.0 h |
| 1.2 | L1.2.3 | Tool coordinate system: length offset and cutter radius compensation | 0.75 h |
| 1.2 | L1.2.4 | **How the fixture physically realises the WCS** — datum faces, pins, bosses, setting blocks | 1.0 h |

**L1.2.4 is the most important lesson in Part 1.** Everything before it is machine knowledge;
L1.2.4 is where that knowledge becomes a fixture design requirement.

---

# MODULE 1.1 — CNC MACHINE ARCHITECTURE

**Lessons:** L1.1.1 – L1.1.4
**Estimated time:** 4 hours
**Prerequisites:** L0.4.4 (machine tools overview), L0.3.4 (stiffness)

## Why this module exists

Your fixture bolts to a machine, and it inherits every one of that machine's characteristics — its
accuracy, its stiffness, its thermal behaviour, its access limitations. You cannot design a good
fixture for a machine you do not understand.

More specifically, this module answers a question that governs Levels 19 through 24:

> **Of the total error in a finished part, how much comes from the machine, and how much can my
> fixture contribute before the part fails inspection?**

That is the error budget question, and it cannot be answered without knowing where machine error comes
from.

## Module learning outcome

You will be able to read a machine specification and state its implications for fixture design, explain
the sources of a machine's accuracy and error, distinguish the four principal machine configurations
and their fixture consequences, and identify the machine constraints that bound any fixture concept.

---

## LESSON L1.1.1 — WHAT A CNC MACHINE IS

### 1. Lesson title
**L1.1.1 — Axes, drives, ballscrews, guideways, spindle, ATC and controller: where accuracy comes from**

### 2. Learning objective
By the end of this lesson you will be able to name and describe the principal subsystems of a CNC
machining centre, explain how each contributes to or degrades accuracy, distinguish resolution from
accuracy from repeatability, and identify which machine characteristics constrain fixture design.

### 3. Prerequisites
L0.4.4 (machine tools, axes, work offsets), L0.3.4 (stiffness).

### 4. Why the topic matters
A fixture designer is not a machine tool engineer, and this lesson does not attempt to make you one.
But three specific pieces of machine knowledge change how you design:

**First, the error budget.** A part toleranced at ±0.05 mm has a 0.10 mm total budget. The machine
consumes some of it, the tooling some, the measurement some — and the fixture gets what remains. If you
do not know the machine's contribution, you cannot know your own allowance. This is the foundation of
Level 23.

**Second, repeatability versus accuracy.** These are different properties and they matter differently
to you. A machine can be repeatable and inaccurate, which is largely correctable; or accurate on
average and unrepeatable, which is not. Understanding the difference tells you which machine problems
you can design around and which you cannot.

**Third, stiffness in series.** Your fixture's stiffness adds to the machine's in series, which means
the softest element dominates. A very stiff fixture on a flexible machine buys little; understanding
where the compliance actually is prevents you from over-engineering the wrong thing.

### 5. Simple explanation
A CNC machine is a very rigid frame that moves a spinning cutter to precise positions.

It has these parts:
- **Structure** — the heavy frame that holds everything and resists cutting forces
- **Axes** — the sliding movements, usually three (X, Y, Z), each with a motor
- **Ballscrews** — precision screws that convert motor rotation into straight-line movement
- **Guideways** — the rails the moving parts slide on
- **Encoders** — devices that measure where each axis actually is
- **Spindle** — the rotating shaft that holds and drives the cutting tool
- **Tool changer (ATC)** — an automatic magazine that swaps tools
- **Controller** — the computer that reads the program and commands everything

Accuracy comes from all of these together. A weakness anywhere shows up in the part.

### 6. Engineering explanation

**THE STRUCTURAL LOOP**

The most useful single concept in machine tool understanding is the **structural loop**: the closed
path of material from the cutting edge, through the tool, spindle, headstock, column, base, table and
fixture, back to the workpiece.

```
      TOOL TIP ──► tool ──► holder ──► spindle ──► headstock
          ▲                                            │
          │                                          column
      workpiece                                        │
          ▲                                           base
          │                                            │
      FIXTURE ◄──── table ◄──── saddle ◄────────────────┘

      EVERY element in this loop contributes compliance,
      thermal growth and geometric error.
      YOUR FIXTURE IS ONE OF THEM.
```

Three consequences follow:
1. **Compliance adds in series.** Total deflection is the sum of every element's deflection. The
   softest element dominates.
2. **Errors accumulate.** Every geometric error in the loop appears at the tool–workpiece interface.
3. **A shorter loop is a better loop.** This is why a tall riser block is worse than a low fixture, and
   why HMC tombstones are built as short and stiff as possible.

> **Your fixture is part of the machine.** That framing — rather than "the fixture sits on the machine"
> — is the correct one, and it is why fixture stiffness is a machine-accuracy issue.

**THE SUBSYSTEMS**

**1. Structure (base, column, saddle, table)**

Usually cast iron or a polymer-concrete composite, for the damping reasons covered in L0.5.2.
Requirements: high stiffness, good damping, thermal stability.

| Design feature | Purpose |
|---|---|
| Heavy ribbed castings | Stiffness with damping |
| Wide guideway spacing | Resists moment loads, improves geometric accuracy |
| Symmetrical construction | Thermal growth cancels rather than accumulating |
| Low centre of gravity | Reduces dynamic error at high feed rates |

**2. Guideways**

The surfaces the moving elements slide on. Two types dominate:

| Type | Character | Consequence |
|---|---|---|
| **Box (sliding) ways** | Large contact area, hydrodynamic oil film | **High damping**, high load capacity, higher friction, slower. Better for heavy roughing |
| **Linear (rolling) guides** | Recirculating balls or rollers | Low friction, **fast**, high precision, **less damping**. Better for high-speed and finishing |

`[GUIDE]` Most modern machining centres use linear guides; heavy-duty and boring machines often retain
box ways for their damping. The fixture consequence: a linear-guide machine is less tolerant of a
flexible fixture, because there is less damping in the loop to suppress the resulting chatter.

**3. Drives and ballscrews**

A **ballscrew** converts servo motor rotation into linear motion via recirculating balls in a
precision-ground helical groove. Key characteristics:

| Property | Typical value `[GUIDE]` | Effect |
|---|---|---|
| Lead (pitch) | 10–20 mm/rev | Speed vs resolution trade-off |
| Positioning accuracy | ±0.005–0.010 mm/300 mm | Direct contribution to part error |
| Backlash (preloaded) | Near zero | Essential for climb milling (L0.4.2) |
| Thermal growth | Significant under duty | Corrected by cooling or compensation |

**Preload** is the critical feature. A preloaded ballscrew has its backlash eliminated by a controlled
internal load. Without preload, reversing direction produces **lost motion**, which is exactly the
condition that makes climb milling impossible on old manual machines.

**4. Feedback: semi-closed vs closed loop**

This distinction is worth understanding because it determines what kinds of error the machine can and
cannot correct.

```
SEMI-CLOSED LOOP (most common)
   encoder on the MOTOR / BALLSCREW END
   ┌──────┐   ┌──────────┐   ┌───────┐
   │MOTOR │──►│BALLSCREW │──►│ TABLE │
   └──┬───┘   └──────────┘   └───────┘
      │ encoder here
      └────► measures SCREW rotation, INFERS table position

   ✗ Cannot see ballscrew thermal growth
   ✗ Cannot see ballscrew wear or windup
   ✓ Cheaper, robust, stable

CLOSED LOOP (precision machines)
   LINEAR SCALE on the AXIS ITSELF
   ┌──────┐   ┌──────────┐   ┌───────┐
   │MOTOR │──►│BALLSCREW │──►│ TABLE │
   └──────┘   └──────────┘   └───┬───┘
                    scale ───────┘
              measures ACTUAL table position

   ✓ Sees and corrects thermal growth and wear
   ✓ Higher accuracy
   ✗ More expensive, can be less stable if poorly tuned
```

`[GUIDE]` A closed-loop machine with linear scales will typically hold position two to three times
better than a comparable semi-closed machine over a working shift, principally because it corrects
thermal growth. If a part has tight tolerances and the shop runs long shifts, this matters — and it is
worth knowing which type you are designing for.

**5. Spindle**

| Property | Fixture relevance |
|---|---|
| **Power (kW)** | Bounds the cutting force (L0.4.2 §6) |
| **Torque (N·m)** | Bounds low-speed heavy cuts |
| **Max speed (rev/min)** | Determines whether small tools can run at correct surface speed |
| **Taper (BT40, BT50, HSK, CAT)** | Determines holder length — the Z-budget term people forget |
| **Runout (TIR)** | Typically 0.003–0.010 mm `[GUIDE]`; contributes directly to hole size error |
| **Through-spindle coolant** | Changes chip evacuation and thermal behaviour |

`[GUIDE]` Spindle taper matters more to fixture design than it first appears: a BT50 holder is
substantially larger and longer than a BT40, consuming more Z-height and creating a bigger collision
envelope around the tool.

**6. Automatic tool changer (ATC)**

| Property | Fixture relevance |
|---|---|
| Magazine capacity | How many operations in one setup |
| **Max tool diameter** | Often reduced if adjacent pockets are full |
| **Max tool length** | A hard constraint on the Z budget |
| **Max tool weight** | Limits large face mills and boring heads |
| **Changer arm swing envelope** | **The fixture must not obstruct it** |

That last row causes real problems. The ATC arm sweeps through a defined volume, and a tall fixture
positioned near the tool change position can foul it. Check it.

**7. Controller**

| Function | Fixture relevance |
|---|---|
| Work offsets G54–G59 and extended | Multi-station fixtures (L1.2.2) |
| Tool length and radius compensation | L1.2.3 |
| Probing cycles | Automated datum setting from a fixture feature |
| Thermal compensation | Reduces the machine's error contribution |
| Rigid tapping | Synchronised spindle for tapping (L1.3.5) |
| Look-ahead / high-speed machining | Contour accuracy |

**ACCURACY, REPEATABILITY AND RESOLUTION — THREE DIFFERENT THINGS**

These are routinely confused, and the distinction has direct design consequences.

```
RESOLUTION    The smallest increment the control can command
              e.g. 0.001 mm
              → says NOTHING about whether it gets there

REPEATABILITY The spread when returning to the same
              commanded position many times
              e.g. ±0.003 mm
              → THE PROPERTY THAT MATTERS MOST TO YOU

ACCURACY      How close the achieved position is to the
              commanded position, over the full travel
              e.g. ±0.008 mm
              → correctable by compensation if repeatable
```

Illustrated on a target:

```
   REPEATABLE            ACCURATE              REPEATABLE
   NOT ACCURATE          NOT REPEATABLE        AND ACCURATE
      ┌───────┐            ┌───────┐            ┌───────┐
      │       │            │  ·    │            │       │
      │    ●● │            │    ·  │            │  ●●●  │
      │    ●●●│            │ ·   · │            │  ●●●  │
      │       │            │   ·   │            │       │
      └───────┘            └───────┘            └───────┘
   CORRECTABLE          NOT CORRECTABLE       IDEAL
   (offset it)          (worn machine —
                         nothing helps)
```

> **Repeatability is the property you cannot fix and accuracy is the one you can.** A repeatable but
> inaccurate machine can be compensated, offset, or simply have its parts adjusted for. An
> unrepeatable machine produces scatter, and no fixture, offset or compensation removes scatter.
>
> **The same is true of your fixture.** A fixture that locates 0.02 mm off nominal but does so
> identically every time is a fixture whose error can be offset out. A fixture that locates within
> 0.02 mm on average but scatters is a fixture that cannot be corrected. **Design for repeatability
> first.** This principle recurs throughout the programme.

**SOURCES OF MACHINE ERROR** `[GUIDE — indicative contributions; actual values from the machine's
calibration report]`

| Source | Typical magnitude | Character |
|---|---|---|
| Positioning error (per axis) | ±0.005–0.015 mm | Systematic, correctable |
| Repeatability | ±0.002–0.005 mm | Random, not correctable |
| Squareness between axes | 0.01–0.03 mm/300 mm | Systematic |
| Spindle runout | 0.003–0.010 mm | Affects hole size and finish |
| **Thermal drift over a shift** | **0.02–0.10 mm** | **Often the largest single source** |
| Servo lag / contour error | Varies with feed | Dynamic |
| Backlash (preloaded screws) | Near zero | Should be negligible |

> **Thermal is usually the largest.** This surprises people who expect positioning accuracy to dominate.
> A machine warming through a shift can drift far more than its stated positioning accuracy — which is
> why warm-up cycles exist, why closed-loop scales are valuable, and why first-off parts often differ
> from mid-shift parts. It also reframes the thermal growth calculation from L0.4.1 as part of a larger
> thermal problem, not an isolated fixture issue.

### 7. Terminology

| Term | Definition |
|---|---|
| **Structural loop** | Closed path of material from tool tip through the machine to the workpiece |
| **Ballscrew** | Precision screw converting rotation to linear motion via recirculating balls |
| **Preload** | Controlled internal load eliminating backlash |
| **Backlash** | Lost motion on direction reversal |
| **Box ways** | Sliding guideways with an oil film; high damping |
| **Linear guides** | Rolling-element guideways; low friction, fast |
| **Semi-closed loop** | Feedback from the motor or screw end |
| **Closed loop** | Feedback from a linear scale on the axis itself |
| **Encoder** | Position feedback device |
| **Linear scale** | Encoder measuring actual axis position directly |
| **TIR** | Total indicator reading; runout |
| **ATC** | Automatic tool changer |
| **Spindle taper** | Tool interface — BT40, BT50, HSK, CAT |
| **Resolution** | Smallest commandable increment |
| **Repeatability** | Spread on returning to the same position |
| **Accuracy** | Deviation of achieved from commanded position |
| **Thermal drift** | Dimensional change from temperature variation |
| **Volumetric accuracy** | Combined positional accuracy through the working volume |

### 8. Principle

> **YOUR FIXTURE IS AN ELEMENT OF THE MACHINE'S STRUCTURAL LOOP.**
> Compliance adds in series and the softest element dominates; errors accumulate around the loop; a
> shorter loop is a better loop.
> **Repeatability is the property you cannot fix; accuracy is the one you can.** Design for
> repeatability first — a consistent error can be offset out, but scatter cannot.
> **Thermal drift is usually the largest single machine error source**, often exceeding stated
> positioning accuracy.

### 9. Industrial application

**Reading a machine specification as a fixture designer**

A typical machine data sheet, and what each line means to you:

```
SPECIFICATION              WHAT IT MEANS TO THE FIXTURE DESIGNER
──────────────────────────────────────────────────────────────────
Travels X/Y/Z              Can the tool reach every feature?
  850 / 500 / 500 mm       NOT the same as table size.

Table 1000 × 500 mm        Footprint available. Check T-slot
T-slots 18 mm @ 100        size and pitch against my mounting.

Max table load 600 kg      Fixture + parts must be within it.

Spindle 15 kW / 12000 rpm  Bounds the cutting force I design for
                           (L0.4.2). Also tells me small tools
                           can run at proper surface speed.

Spindle taper BT40         Holder length ~100 mm — goes into my
                           Z budget. BT50 would be longer.

Spindle nose to table      THE Z BUDGET CEILING.
  150-650 mm

Positioning ±0.005 mm      Machine's systematic contribution to
Repeatability ±0.003 mm    my error budget. THE SECOND NUMBER
                           IS THE ONE I CANNOT DESIGN AROUND.

Linear scales: YES         Closed loop — thermal drift corrected.
                           Good; my thermal allowance can be
                           smaller.

ATC 24 tools               How many operations in one setup.
  max Ø80 / L300 / 8 kg    L300 IS A HARD Z-BUDGET CONSTRAINT.

Coolant: flood + through   Chip evacuation strategy; μ ≈ 0.12
  spindle 20 bar           wet (L0.3.3), not 0.20 dry.
```

**Allocating the error budget — a preview of Level 23**

For a feature toleranced at ±0.05 mm (0.10 mm total):

```
ERROR SOURCE                 TYPICAL ALLOCATION   [GUIDE]
─────────────────────────────────────────────────────────
Machine positioning + repeatability   0.015 mm    15 %
Machine thermal (with warm-up)        0.020 mm    20 %
Tooling (runout, wear, deflection)    0.020 mm    20 %
Measurement uncertainty               0.010 mm    10 %
─────────────────────────────────────────────────────────
CONSUMED BEFORE THE FIXTURE           0.065 mm    65 %
REMAINING FOR THE FIXTURE             0.035 mm    35 %
```

This is why the fixture deflection guideline from L0.3.4 was 10–20% of part tolerance — the fixture's
**deflection** is only one of several fixture error terms, alongside locator position tolerance,
locator wear and clearance. The full budget is built at L23.11; the point here is that **the machine
has already spent most of your tolerance before you start**.

> Note the practical consequence: if you are told the machine's repeatability is ±0.015 mm and the part
> tolerance is ±0.02 mm, no fixture can save that job. Recognising an impossible requirement early is
> a genuinely valuable skill, and it requires knowing the machine.

### 10. Design rules
- **R1** — Obtain the machine's **calibration or acceptance report**, not just the brochure `[PRACTICE]`.
- **R2** — Use **repeatability**, not positioning accuracy, as the machine's irreducible contribution.
- **R3** — Treat the fixture as part of the **structural loop** — keep it short, stiff and low.
- **R4** — Check the **ATC swing envelope** as well as the cutting envelope.
- **R5** — Include the **holder length** for the actual spindle taper in the Z budget.
- **R6** — On semi-closed-loop machines, allow a **larger thermal allowance** and specify a warm-up
  cycle.
- **R7** — On linear-guide machines, be **less tolerant of fixture flexibility** — there is less
  damping available.
- **R8** — Design for **repeatability before accuracy**; a consistent error can be offset out.
- **R9** — Confirm **spindle power** against the cutting forces the fixture is designed for.
- **R10** — Establish the **error budget** before committing to a fixture concept, and say so if the
  tolerance is unachievable.

### 11. Rules of thumb
- **Repeatability is what you cannot fix.** Accuracy is correctable.
- **Thermal drift is often the largest error source** — 0.02–0.10 mm over a shift `[GUIDE]`.
- Machine + tooling + measurement typically consume **60–70% of the tolerance** before the fixture
  `[GUIDE]`.
- **A shorter structural loop is a stiffer loop.** Low fixtures beat tall ones.
- Compliance adds **in series** — the softest element dominates.
- Linear guides are fast but **damp less**; box ways damp well but are slower `[GUIDE]`.
- **Closed loop with linear scales** holds position roughly 2–3× better over a shift `[GUIDE]`.
- BT50 holders are **longer and larger** than BT40 — check the Z budget and the collision envelope.
- If part tolerance approaches machine repeatability, **the job cannot be saved by the fixture**.

### 12. Formulae

**Compliance in series (structural loop)**
```
δ_total = δ_machine + δ_fixture + δ_workpiece + δ_tool
1/k_total = 1/k_machine + 1/k_fixture + 1/k_workpiece + 1/k_tool
```

**Error budget (worst case, arithmetic)**
```
E_total = Σ Eᵢ
```

**Error budget (statistical, RSS — see L23.4)**
```
E_total = √(Σ Eᵢ²)
```

**Available fixture allowance**
```
E_fixture ≤ T_part − (E_machine + E_tooling + E_measurement)
```

| Variable | Meaning | Unit |
|---|---|---|
| δ | Deflection | mm |
| k | Stiffness | N/mm |
| E | Error contribution | mm |
| T | Tolerance (total band) | mm |

### 13. Worked numerical example

**Problem:** A part feature is toleranced at ±0.04 mm. It is machined on a VMC with the following
characteristics. Determine the fixture's available error allowance, assess the fixture stiffness
contribution, and determine whether a proposed fixture is viable.

```
GIVEN:
  Part feature tolerance          = ±0.04 mm (0.08 total)     [PROJ]
  Machine positioning accuracy    = ±0.006 mm                 [MFR]
  Machine repeatability           = ±0.004 mm                 [MFR]
  Machine thermal drift per shift = 0.030 mm                  [MFR]
  Warm-up cycle used              = yes, halves thermal       [PRACTICE]
  Spindle runout (TIR)            = 0.005 mm                  [MFR]
  Tool deflection and wear        = 0.012 mm                  [GUIDE]
  Measurement uncertainty         = 0.008 mm                  [GUIDE]
  Machine stiffness at the table  = 60,000 N/mm               [MFR]
  Proposed fixture stiffness      = 25,000 N/mm               [PROJ]
  Cutting force (design)          = 4,500 N                   [PROJ]
  Budget method                   = worst-case arithmetic     [PRACTICE]

REQUIRED:
  (a) Total error consumed before the fixture
  (b) Available fixture error allowance
  (c) Combined machine + fixture stiffness
  (d) Deflection under the cutting force
  (e) Assessment of the proposed fixture
  (f) Required fixture stiffness if the deflection allowance
      is 50 % of the fixture budget
  (g) Engineering assessment

ASSUMPTION:
  1. Machine figures from the manufacturer's specification.
     For a production commitment these MUST BE CONFIRMED
     against the machine's own calibration report, which will
     differ from the brochure. [MFR]
  2. Worst-case arithmetic summation used. This is
     conservative; RSS (L23.4) would give a smaller total and
     is defensible where errors are genuinely independent.
     Arithmetic is the safer choice at concept stage. [PRACTICE]
  3. Warm-up cycle assumed to halve thermal drift. The actual
     benefit MUST BE MEASURED. [PRACTICE]
  4. Positioning accuracy and repeatability treated as
     separate contributions; some specifications combine them.
  5. Fixture deflection allocated 50 % of the fixture budget
     in part (f); the remainder covers locator tolerance,
     wear and clearance. [GUIDE]

FORMULA:
  (a) E_consumed = Σ Eᵢ
  (b) E_fixture  = T_part − E_consumed
  (c) 1/k_total  = 1/k_machine + 1/k_fixture
  (d) δ = F / k_total
  (f) k_required = F / δ_allowed

VARIABLE DEFINITIONS:
  As tabulated in §12 above.

UNIT CONVERSION:
  Tolerance ±0.04 mm → total band T = 0.08 mm
  All stiffnesses in N/mm, force in N → deflection in mm.

SUBSTITUTION AND CALCULATION:

  (a) ERROR CONSUMED BEFORE THE FIXTURE

      Positioning accuracy        = 0.006 mm
      Repeatability               = 0.004 mm
      Thermal (30 µm × 0.5)       = 0.015 mm
      Spindle runout              = 0.005 mm
      Tool deflection and wear    = 0.012 mm
      Measurement uncertainty     = 0.008 mm
      ───────────────────────────────────────
      E_consumed                  = 0.050 mm

      As a fraction of the tolerance:
        0.050 / 0.080 = 62.5 %

  (b) AVAILABLE FIXTURE ALLOWANCE

      E_fixture = T_part − E_consumed
                = 0.080 − 0.050
                = 0.030 mm

      → The entire fixture — location, clamping, deflection,
        wear, clearance — must fit within 0.030 mm.

  (c) COMBINED STIFFNESS

      1/k_total = 1/k_machine + 1/k_fixture
                = 1/60000 + 1/25000
                = 0.00001667 + 0.00004000
                = 0.00005667

      k_total = 1 / 0.00005667
              = 17,647 N/mm

      Note: the combined stiffness (17,647) is LOWER than
      either element alone. Series compliance always is.

  (d) DEFLECTION UNDER CUTTING FORCE

      δ = F / k_total
        = 4500 / 17647
        = 0.2550 mm

  (e) ASSESSMENT

      Deflection                  = 0.2550 mm
      Total fixture allowance     = 0.0300 mm
      Ratio                       = 0.2550 / 0.030 = 8.5

      → THE DEFLECTION ALONE IS 8.5 TIMES THE ENTIRE
        FIXTURE ERROR BUDGET.
      → And 3.2 times the WHOLE part tolerance of 0.08 mm.
      ✗ THE PROPOSED FIXTURE IS NOT VIABLE.

      Contribution analysis:
        δ_machine = 4500/60000 = 0.0750 mm  (29 %)
        δ_fixture = 4500/25000 = 0.1800 mm  (71 %)
        Sum       = 0.2550 mm               ✓ checks

      → The FIXTURE is the dominant compliance, at 71 %.

  (f) REQUIRED FIXTURE STIFFNESS

      Allocate 50 % of the fixture budget to deflection:
        δ_allowed(fixture total) = 0.030 × 0.50 = 0.015 mm

      But the MACHINE alone already deflects 0.075 mm under
      this force, which exceeds the entire part tolerance.

      So first: the total deflection must be brought within
      budget. Taking the total allowable deflection as
      0.015 mm:

        k_total_required = F / δ
                         = 4500 / 0.015
                         = 300,000 N/mm

      Required fixture stiffness:
        1/k_fixture = 1/k_total − 1/k_machine
                    = 1/300000 − 1/60000
                    = 0.00000333 − 0.00001667
                    = −0.00001334

      NEGATIVE → IMPOSSIBLE.

      → EVEN AN INFINITELY STIFF FIXTURE CANNOT ACHIEVE
        0.015 mm, BECAUSE THE MACHINE ALONE DEFLECTS
        0.075 mm UNDER 4,500 N.

      Minimum achievable with an infinitely rigid fixture:
        δ_min = 4500/60000 = 0.075 mm
        Still 2.5 × the fixture budget and 0.94 × the whole
        part tolerance.

RESULT:
  ┌──────────────────────────────────┬──────────────────┐
  │ (a) Error consumed before fixture│ 0.050 mm (62.5 %)│
  │ (b) Available fixture allowance  │ 0.030 mm         │
  │ (c) Combined stiffness           │ 17,647 N/mm      │
  │ (d) Deflection at 4,500 N        │ 0.2550 mm        │
  │     — machine share              │ 0.0750 mm (29 %) │
  │     — fixture share              │ 0.1800 mm (71 %) │
  │ (e) vs fixture budget            │ 8.5×  ✗ FAIL     │
  │ (f) Required fixture stiffness   │ IMPOSSIBLE       │
  │     Best case, rigid fixture     │ 0.075 mm — still │
  │                                  │ fails            │
  └──────────────────────────────────┴──────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The equivalent concept is the
  ERROR BUDGET, and this design has a budget ratio of 8.5
  against a required value below 1.0. There is no margin;
  there is a deficit of nearly an order of magnitude.

PASS/FAIL:
  ✗ FAIL — comprehensively. The fixture is 8.5× over budget
    on deflection alone, and even a perfectly rigid fixture
    would fail because the machine's own compliance under
    this cutting force nearly consumes the entire part
    tolerance.

ENGINEERING CONCLUSION:
  THIS RESULT IS NOT A FIXTURE PROBLEM. IT IS AN OPERATION
  PROBLEM, AND THE ANALYSIS IS WHAT REVEALS THAT.

  1. THE FIXTURE IS THE DOMINANT COMPLIANCE — BUT FIXING IT
     IS NOT ENOUGH.
     At 71 % of total deflection, the fixture is clearly the
     first thing to improve, and stiffening it is worthwhile.
     But part (f) shows the decisive fact: THE MACHINE ALONE
     DEFLECTS 0.075 mm UNDER 4,500 N, which is 94 % of the
     entire 0.08 mm part tolerance. No fixture, however
     rigid, can recover that. Recognising this early — before
     designing, quoting and building a fixture — is worth a
     great deal.

  2. THE REAL PROBLEM IS THE CUTTING FORCE.
     Deflection is linear in force. Halving the cutting force
     to 2,250 N by taking two lighter passes (L0.4.1) halves
     every deflection figure:
        machine  0.0375 mm
        fixture (if stiffened to 100,000 N/mm) 0.0225 mm
        total    0.060 mm — still over the 0.030 mm fixture
        budget, but now in the range where further measures
        could work.
     THIS IS THE L0.4.1 PRINCIPLE APPLIED: feed and depth
     kill fixtures, and reducing them is the lever that
     actually works.

  3. THE FINISHING PASS IS THE ONE THAT MATTERS.
     Critically, this analysis has applied the ROUGHING force
     to a tolerance that is only achieved on the FINISHING
     pass. If the ±0.04 mm feature is produced by a finishing
     cut at, say, 600 N, then:
        δ_total at 600 N = 600/17647 = 0.034 mm
     which is close to the 0.030 mm budget and could be met
     with a modestly stiffer fixture.
     THE CORRECT ANALYSIS APPLIES THE FORCE PRESENT DURING
     THE OPERATION THAT CREATES THE TOLERANCED FEATURE — and
     that is the finishing pass, not the roughing pass. This
     is the distinction L0.4.1 R7 made: size for roughing
     (strength), check finishing (accuracy).

  RECOMMENDATION: Re-run the analysis with the finishing pass
  cutting force, which is the operation that creates this
  feature. Stiffen the fixture regardless, since at 71 % of
  compliance it is the cheapest improvement available.
  Confirm the machine figures from its calibration report.
  If the ±0.04 mm feature genuinely must be cut at 4,500 N,
  report to the customer that this machine cannot hold it.

SENSITIVITY NOTE:
  Ranked by influence on total deflection:
    1. CUTTING FORCE — linear, and the only variable that can
       change by a factor of 5 or more. Roughing vs finishing
       is the dominant question.
    2. FIXTURE STIFFNESS — 71 % of the compliance, so
       improving it has real leverage, up to the machine's
       ceiling.
    3. MACHINE STIFFNESS — not under my control, and it sets
       an absolute floor on what is achievable.
  Ranked by influence on the ERROR BUDGET:
    1. THERMAL — 0.015 mm even with warm-up, the largest
       single line item. A closed-loop machine would reduce
       this substantially.
    2. TOOL DEFLECTION AND WEAR — 0.012 mm, and improvable
       with better tooling discipline.
    3. MEASUREMENT UNCERTAINTY — 0.008 mm, 10 % of the
       tolerance spent on finding out whether the part is
       good. Often overlooked.
```

### 14. Engineering assumptions
- Machine figures from manufacturer specification `[MFR]` — must be confirmed against the machine's own
  calibration report.
- Worst-case arithmetic summation; RSS (L23.4) would give a smaller, defensible total.
- Warm-up cycle assumed to halve thermal drift `[PRACTICE]` — must be measured.
- Positioning accuracy and repeatability treated as separate contributions.
- Fixture deflection allocated 50% of the fixture budget in part (f) `[GUIDE]`.
- The analysis deliberately applies the roughing force to expose the roughing/finishing distinction in
  the conclusion.

### 15. Diagram

```
     THE CNC MACHINE — WHERE ACCURACY COMES FROM
     (instructional schematic)

  THE STRUCTURAL LOOP — YOUR FIXTURE IS PART OF IT

              ┌─────────────┐
              │   SPINDLE   │
              │  ┌───────┐  │
              │  │HEADSTK│  │
              └──┴───┬───┴──┘
                     ║ holder
                     ║           C
                     ▼ TOOL      O
                  ▓▓▓▓▓▓         L
              ┌──────────┐       U
              │ WORKPIECE│       M
              └──────────┘       N
              ┌──────────┐       │
              │ FIXTURE  │ ◄─────┼── YOU ARE HERE
              ╞══════════╡       │
              │  TABLE   │       │
              ╞══════════╡       │
              │  SADDLE  │       │
              ╞══════════╧═══════╡
              │      BASE        │
              └──────────────────┘

   ┌────────────────────────────────────────────────┐
   │ COMPLIANCE ADDS IN SERIES:                     │
   │   1/k_total = 1/k_mach + 1/k_fix + 1/k_part    │
   │ THE SOFTEST ELEMENT DOMINATES.                 │
   │ A SHORTER LOOP IS A STIFFER LOOP.              │
   └────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  SEMI-CLOSED vs CLOSED LOOP — WHY IT MATTERS

   SEMI-CLOSED                    CLOSED
   encoder on the screw           scale on the axis

   [M]═══╤═══[SCREW]═══[TABLE]    [M]═══[SCREW]═══[TABLE]
         │ encoder                            └─[SCALE]─┘
         └─ infers position                    measures it

   ✗ blind to screw thermal       ✓ corrects thermal growth
     growth and wear              ✓ 2-3× better over a shift
   ✓ cheaper, robust              ✗ costlier

  ──────────────────────────────────────────────────────────

  RESOLUTION ≠ REPEATABILITY ≠ ACCURACY

   REPEATABLE          ACCURATE           BOTH
   NOT ACCURATE        NOT REPEATABLE
    ┌──────┐            ┌──────┐          ┌──────┐
    │      │            │ ·  · │          │      │
    │  ●●● │            │  · · │          │ ●●●  │
    │  ●●● │            │ ·  · │          │ ●●●  │
    └──────┘            └──────┘          └──────┘
   ✓ CORRECTABLE      ✗ NOT CORRECTABLE   ✓ IDEAL
     — offset it        — worn machine

   ┌────────────────────────────────────────────────┐
   │ REPEATABILITY IS WHAT YOU CANNOT FIX.          │
   │ ACCURACY IS WHAT YOU CAN.                      │
   │ The same is true of your FIXTURE:              │
   │ design for repeatability FIRST.                │
   └────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHERE THE TOLERANCE GOES  [GUIDE]

   PART TOLERANCE ±0.04 mm  =  0.080 mm total
   ├──────────────────────────────────────────────┤

   machine position  ██                    0.010
   thermal           ███                   0.015
   tooling           ██▌                   0.012
   spindle runout    █                     0.005
   measurement       █▌                    0.008
   ─────────────────────────────────────────────
   CONSUMED          ██████████            0.050  (62 %)
   FIXTURE GETS      ██████                0.030  (38 %)

   ┌────────────────────────────────────────────────┐
   │ THE MACHINE HAS ALREADY SPENT MOST OF YOUR     │
   │ TOLERANCE BEFORE YOU START.                    │
   │                                                │
   │ If part tolerance ≈ machine repeatability,     │
   │ NO FIXTURE CAN SAVE THE JOB. Say so early.     │
   └────────────────────────────────────────────────┘
```

### 16. Drawing example
Not a drawing lesson. One documentation practice: record the **machine identity** on the fixture
assembly drawing, not just the machine type.

```
NOTE: FIXTURE DESIGNED FOR MACHINE VMC-04 (MAKINO PS95,
      ASSET 2291). MOUNTING, Z-HEIGHT AND OFFSET DATA ARE
      SPECIFIC TO THIS MACHINE. VERIFY BEFORE USE ON ANY
      OTHER MACHINE.
```

Fixtures get moved between "identical" machines, and as L0.4.4 §28 established, identical machines are
not identical. The note makes the assumption explicit.

### 17. CAD workflow
Extend the machine envelope practice from L0.4.4 §17. A complete machine reference model contains:

1. **Table** with accurate T-slot positions, measured from the real machine
2. **Spindle nose** at its highest and lowest positions
3. **Column and guarding** as interference bodies
4. **ATC arm swing envelope** as a swept solid
5. **Chip conveyor and coolant fittings** where they intrude
6. **Travel limits** as a wireframe box

Insert this as a fixed reference at the origin of every fixture assembly for that machine. Then the
Z-budget check, the footprint check and the ATC clearance check all become **visual and automatic**
rather than arithmetic and forgettable.

`[PRACTICE]` Build one model per machine in the shop. It is a few hours of work per machine and it
pays back on the first collision it prevents.

### 18. GD&T application
Not applicable at this lesson. Forward link: machine geometric errors — squareness, straightness,
parallelism of the axes — appear directly as geometric errors on the part. A machine with 0.02 mm/300
squareness error cannot produce a 0.01 mm perpendicularity, regardless of the fixture. Recognising
which geometric tolerances are machine-limited rather than fixture-limited is a Level 21 skill.

### 19. Manufacturing method
Not applicable at this lesson.

### 20. Inspection method
Machine accuracy is verified by:
- **Ballbar test** (ISO 230-4) — circular interpolation test revealing squareness, backlash, servo
  mismatch and reversal spikes. Quick, and the standard health check `[STD]`
- **Laser interferometer** (ISO 230-2) — axis positioning accuracy and repeatability `[STD]`
- **Spindle runout** — dial indicator or test bar
- **Geometric checks** — squareness, parallelism, flatness of the table

`[PRACTICE]` A ballbar test takes under an hour and should be part of the machine's periodic
maintenance. If you are told a fixture is producing scrap, asking for the most recent ballbar plot is a
legitimate and often revealing question.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Using brochure figures rather than the machine's **calibration report** | Optimistic error budget |
| 2 | Confusing **accuracy with repeatability** | Designing around a correctable error, ignoring an uncorrectable one |
| 3 | Ignoring **thermal drift** | The largest error source unaccounted for |
| 4 | Not treating the fixture as part of the **structural loop** | Over-stiffening the wrong element |
| 5 | Forgetting the **ATC swing envelope** | Fixture fouls the tool changer |
| 6 | Using BT40 holder length on a **BT50** machine | Z budget wrong by 50–80 mm |
| 7 | Applying **roughing** force to a **finishing** tolerance analysis | Wrongly concluding a job is impossible |
| 8 | Over-stiffening the fixture when the **machine** is the limit | Cost with no benefit |
| 9 | Not recognising an **impossible tolerance** early | Fixture designed, built and blamed |
| 10 | Assuming "identical" machines are identical | Fixture works on one, not the other |
| 11 | Ignoring damping differences between **box ways and linear guides** | Unexpected chatter |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Parts drift through the shift | Thermal growth, semi-closed loop | Measure first-off vs mid-shift | Warm-up cycle; thermal compensation | Allow thermal in the budget |
| Scatter, no pattern | Machine repeatability, or fixture seating | Ballbar test; repeat-clamping test | If machine, no fixture fix exists | Check repeatability before design |
| Circular features out of round | Axis squareness or servo mismatch | Ballbar test | Machine adjustment | Periodic ballbar checks |
| Chatter on a stiff-looking fixture | Loop compliance elsewhere, low damping | Modal check; try lower speed | Shorten the loop; add damping | Keep fixtures low and short |
| Fixture works on one machine, not another | Different condition, offsets or table | Compare calibration reports | Re-qualify per machine | Note the machine on the drawing |
| Holes oversize | Spindle runout | Measure TIR with a test bar | Spindle service; different holder | Include runout in the budget |
| Collision at tool change | ATC swing envelope obstructed | Simulate the tool change | Reposition fixture | Model the ATC envelope |

### 23. Design checklist
- [ ] Do I have the machine's **calibration report**, not just the brochure?
- [ ] Have I built an **error budget** and confirmed the fixture's allowance is achievable?
- [ ] Have I used **repeatability** as the irreducible machine contribution?
- [ ] Have I allowed for **thermal drift** and specified a warm-up cycle if needed?
- [ ] Is the fixture as **low and short** as the application permits?
- [ ] Have I calculated **series compliance** rather than assuming the fixture dominates?
- [ ] Have I checked the **ATC swing envelope**?
- [ ] Is the Z budget based on the **actual spindle taper's** holder length?
- [ ] Have I analysed the tolerance against the **finishing** pass force, not roughing?
- [ ] Is the machine recorded **by identity** on the fixture drawing?
- [ ] If the tolerance is close to machine repeatability, have I **said so**?

### 24. Beginner exercise
**E1.1.1-B** — A machine specification states: positioning accuracy ±0.008 mm, repeatability ±0.003 mm,
resolution 0.001 mm.
(a) Define each of the three terms in one sentence.
(b) State which of the three is the machine's irreducible contribution to part error, and why.
(c) State which can be reduced by compensation, and how.
(d) A part is toleranced at ±0.005 mm. Comment on the feasibility.

### 25. Intermediate exercise
**E1.1.1-I** — A fixture of stiffness 40,000 N/mm is mounted on a machine of stiffness 80,000 N/mm. The
cutting force is 3,000 N.
(a) Calculate the combined stiffness.
(b) Calculate the total deflection and the share contributed by each element.
(c) The fixture is redesigned to 120,000 N/mm. Recalculate the total deflection and state the
improvement factor.
(d) Explain why tripling the fixture stiffness did not reduce deflection to a third.
(e) Calculate the deflection if the fixture were infinitely stiff, and state what this tells you about
the value of further fixture stiffening.

### 26. Advanced exercise
**E1.1.1-A** — A ±0.03 mm feature is to be machined on a component. Two machines are available:
```
MACHINE A (semi-closed loop, box ways, 18 years old)
  Positioning ±0.012 mm · Repeatability ±0.006 mm
  Thermal drift 0.055 mm/shift · Spindle runout 0.009 mm
  Stiffness at table 90,000 N/mm · 18 kW spindle

MACHINE B (closed loop with scales, linear guides, 2 years old)
  Positioning ±0.005 mm · Repeatability ±0.002 mm
  Thermal drift 0.015 mm/shift · Spindle runout 0.004 mm
  Stiffness at table 55,000 N/mm · 22 kW spindle
```
Tooling contributes 0.010 mm, measurement 0.006 mm. Finishing cut force is 900 N.
(i) Build the error budget for each machine and determine the fixture allowance available on each.
(ii) Determine whether the feature is achievable on each machine, stating your reasoning.
(iii) Calculate the deflection on each machine assuming a fixture stiffness of 50,000 N/mm.
(iv) Machine A is stiffer but older. Explain the trade-off and state which machine you would recommend
and why.
(v) A warm-up cycle halves thermal drift on both. Recalculate and state whether it changes your
recommendation.
(vi) Explain why the damping difference between box ways and linear guides might affect the fixture
design differently on each machine.
(vii) The customer insists on Machine A because it is stiffer. Write a two-paragraph technical response.

### 27. Interview questions
1. *"What is the difference between accuracy and repeatability, and which matters more to a fixture
   designer?"*
   **Answer:** Accuracy is how close the machine gets to the commanded position; repeatability is how
   consistently it returns to the same position. Repeatability matters more, because a repeatable error
   is a systematic one — you can compensate it out with an offset, or simply adjust for it. Scatter
   cannot be compensated, because by definition you do not know which way it will go next time. The
   same principle applies to fixtures: a fixture that locates 0.02 mm off nominal every time is far
   better than one that averages nominal but scatters by 0.02 mm. Design for repeatability first.
2. *"Why does it matter to a fixture designer how stiff the machine is?"*
   **Answer:** Because compliance adds in series along the structural loop — tool, spindle, column,
   base, table, fixture, workpiece — so the total deflection is the sum, and the softest element
   dominates. Two consequences follow. First, if the machine is the soft element, stiffening the
   fixture buys very little and you are spending money in the wrong place. Second, the machine's
   stiffness sets a floor on what is achievable: if the machine alone deflects more than the part
   tolerance under the cutting force, no fixture can rescue the job, and knowing that early saves
   designing and building something that was never going to work.

### 28. Expert questions
1. *"You are asked to design a fixture for a tolerance that you believe the machine cannot hold. How do
   you handle it?"*
   **Answer:** I would handle it as an **early, evidenced, constructive conversation**, because the
   worst outcome is silence followed by a fixture that gets blamed.
   First I would **build the evidence**. An opinion that "the machine can't hold it" carries no weight;
   an error budget does. I would obtain the machine's calibration report rather than its brochure,
   build the budget line by line — positioning, repeatability, thermal, tooling, measurement — and show
   what remains for the fixture. If the remainder is negative or implausibly small, that is a fact
   rather than a view. I would also check the machine's recent ballbar plot, because a machine that was
   capable when new may not be now.
   Second, I would be careful to **analyse the right operation**. It is easy to condemn a job by
   applying roughing forces to a finishing tolerance. The tolerance is created by the finishing pass,
   and the finishing force may be a fifth of the roughing force. I would make sure I had not talked
   myself into an impossibility that does not exist.
   Third, I would bring **options rather than only a problem**. Can the feature be produced on a
   different machine? Can the operation be resequenced so the critical feature is cut in a lighter,
   more stable condition? Can a warm-up cycle and thermal compensation recover enough? Can the
   measurement uncertainty be reduced, which is often 10% of the budget and frequently improvable? Can
   the tolerance itself be reviewed with the customer — sometimes a tight tolerance is inherited from a
   previous drawing and is not functionally required, and asking the question is legitimate.
   Fourth, if it genuinely cannot be done, I would **say so clearly and in writing**, early, with the
   budget attached. That is uncomfortable, but a fixture designer who quietly builds something they
   know will fail has done far more damage than one who raised it at concept stage.
   And I would **not over-engineer the fixture as a substitute for saying it**. Building an extremely
   expensive, extremely rigid fixture in the hope of rescuing an impossible tolerance wastes money and
   still fails — and the analysis in this lesson shows exactly why: past a certain point, the machine's
   own compliance sets a floor that no fixture can go below.
2. *"How does understanding the structural loop change how you design a fixture?"*
   **Answer:** It changes three things quite fundamentally.
   The first is **where I spend stiffness effort**. If I think of the fixture in isolation I will
   optimise it in isolation, and I may triple its stiffness for a 15% improvement in total deflection
   because the machine was the soft element all along. Calculating series compliance tells me the
   fixture's actual share, and therefore whether stiffening it is worth anything. In the worked example
   the fixture was 71% of the compliance, so it was worth improving; if it had been 20%, it would not
   have been.
   The second is **loop length**. Every millimetre of height between the table and the workpiece is
   added length in the loop, and stiffness falls off rapidly with it — a riser block is a cantilever,
   and from L0.3.4 a cantilever deflects sixteen times a supported member. So my instinct becomes: keep
   the part as low as tool access permits, support risers at both ends, triangulate rather than
   cantilever, and treat height as something to be justified rather than assumed. That is a genuinely
   different design instinct from "make the fixture strong".
   The third is **where I look when something goes wrong**. Chatter on an apparently rigid fixture is
   usually not the fixture — it is a long tool, a worn spindle bearing, a flexible workpiece, or a
   riser acting as a cantilever. Thinking in terms of the loop makes me examine the whole path rather
   than the component I happen to have designed. It also makes me ask about the machine's guideway
   type, because a linear-guide machine has less damping available and will express a marginal fixture
   as chatter where a box-way machine would have absorbed it.
   Underlying all three is a shift in framing: **the fixture is not an accessory to the machine, it is
   part of it.** Once you hold that view, questions about fixture stiffness, height and mounting stop
   being fixture questions and become machine-accuracy questions, which is what they actually are.

### 29. Summary
A CNC machining centre is a structural loop running from the cutting edge through tool, spindle,
column, base, table and fixture back to the workpiece — and the fixture is an element of that loop, not
an accessory to it. Compliance adds in series so the softest element dominates, errors accumulate
around the loop, and a shorter loop is a stiffer one. Accuracy comes from the structure's stiffness and
damping, the guideways, preloaded ballscrews, and the feedback system, where closed-loop machines with
linear scales correct the thermal growth that semi-closed machines cannot see. Resolution,
repeatability and accuracy are three different properties: repeatability is the one that cannot be
compensated and is therefore the machine's irreducible contribution, while systematic accuracy errors
can be offset out. Thermal drift is usually the largest single error source, often exceeding stated
positioning accuracy. In a typical error budget the machine, tooling and measurement consume 60–70% of
the part tolerance before the fixture is considered, and where the part tolerance approaches machine
repeatability no fixture can rescue the job — recognising that early is a valuable skill.

### 30. Key takeaways
- **Your fixture is an element of the machine's structural loop**, not an accessory to it.
- **Compliance adds in series**: `1/k_total = Σ 1/kᵢ`. The softest element dominates.
- **A shorter loop is a stiffer loop.** Keep fixtures low; avoid cantilevered risers.
- **Repeatability cannot be fixed; accuracy can.** Design for repeatability first.
- **Thermal drift is usually the largest error source** — 0.02–0.10 mm per shift `[GUIDE]`.
- **Closed loop with linear scales** corrects thermal growth; semi-closed cannot see it.
- Machine + tooling + measurement typically consume **60–70% of the tolerance** before the fixture.
- If part tolerance approaches **machine repeatability**, no fixture can save the job. Say so early.
- Analyse the tolerance against the **finishing** pass force, not roughing.
- Get the **calibration report**, not the brochure. And check the **ATC swing envelope**.

---

## LESSON L1.1.2 — THE 3-AXIS VERTICAL MACHINING CENTRE IN DEPTH

### 1. Lesson title
**L1.1.2 — Structure, table, travels, spindle orientation, gravity and chip behaviour on the VMC**

### 2. Learning objective
By the end of this lesson you will be able to describe the structural configuration of a vertical
machining centre, explain how the vertical spindle orientation determines the direction of cutting
forces and the behaviour of chips and coolant, calculate the working envelope constraints for a fixture,
and state the specific design consequences that follow from gravity acting along the spindle axis.

### 3. Prerequisites
L1.1.1 (machine architecture), L0.4.4 (machine tools overview), L0.3.2 (forces and moments).

### 4. Why the topic matters
The VMC is the machine you will design for most often. It is the general-purpose workhorse of almost
every machine shop, and the majority of fixtures ever built are VMC fixtures.

But the reason this lesson exists is more specific than familiarity. **The vertical spindle orientation
produces a particular and consistent pattern of forces, and that pattern shapes every VMC fixture you
will ever design.**

Three facts follow from the spindle pointing downwards:

1. **The dominant cutting force is downward**, into the fixture and into the table. Gravity and the
   principal cutting force act in the same direction.
2. **Chips fall into the fixture** and stay there. They do not fall away.
3. **Access is from above only.** The tool can only reach what is visible from directly overhead.

Each of these has consequences that recur in every VMC fixture, and the third one — access from above
only — is the constraint that most often forces a second setup, which is where cost and tolerance
stack-up both come from.

### 5. Simple explanation
A VMC has a spindle that points straight down at a table that moves left–right and front–back.

```
              SPINDLE (points DOWN)
                   │
                   ▼  tool
              ─────────────
             ░░░░░░░░░░░░░░  ← part on fixture
        ═══════════════════════  ← table (moves X and Y)
```

The table moves in X (left–right) and Y (front–back). The spindle head moves in Z (up–down). That is
all three axes.

Because the spindle points down:
- The cutting force pushes the part **down onto the fixture** — which is helpful
- The chips **fall into the fixture** — which is not
- The tool can only reach the **top** of the part — so a second setup is needed for the other faces

### 6. Engineering explanation

**VMC STRUCTURAL CONFIGURATIONS**

Not all VMCs are built the same way. The two dominant configurations behave differently.

```
C-FRAME (the common configuration)
  Table moves X and Y, spindle head moves Z on the column

         ┌────┐ ◄─ spindle head moves Z
         │ ▼  │        COLUMN
         │    │          ║
     ════╧════╧══════    ║
        TABLE moves      ║
        X and Y          ║
     ════════════════════╩══
              BASE

  ✓ Simple, economical, good tool access
  ✓ Large table area relative to footprint
  ✗ Overhang: the spindle is CANTILEVERED from the column
  ✗ Table mass moves — dynamic limits at high feed
  ✗ Accuracy varies across the table (worse at the extremes)


TRAVELLING COLUMN / BRIDGE
  Table fixed or moves one axis; column carries the rest

     ╔═══════════════════════╗ ◄─ bridge
     ║        ┌────┐         ║
     ║        │ ▼  │         ║
     ╚════════╧════╧═════════╝
        ════════════════
             TABLE (fixed)
     ═══════════════════════════
              BASE

  ✓ Symmetrical — better thermal behaviour
  ✓ Stiffer — less overhang
  ✓ Heavy parts do not move
  ✗ Larger footprint, more expensive
```

`[GUIDE]` Most production VMCs are C-frame. The fixture consequence of the C-frame is worth knowing:
**the machine is stiffest near the column and least stiff at the front-left and front-right extremes of
the table.** If you are designing a fixture for a demanding tolerance and you have a choice of table
position, place it towards the column side.

**THE THREE AXES AND WHAT "TRAVEL" REALLY MEANS**

| Axis | Movement | Convention |
|---|---|---|
| **X** | Longest travel, left–right | Positive to the right (tool relative to work) |
| **Y** | Front–back | Positive away from the operator |
| **Z** | Vertical, along the spindle | **Positive UP, away from the work** |

> **Z positive is upwards.** This means cutting depth is a **negative Z** move. The Z zero is
> conventionally set at the top of the part, so material removal happens at negative Z values. This
> catches everyone once.

**Travel is not table size, and both are less than you think.**

```
     TABLE 1000 mm long, X TRAVEL 850 mm

     ├─────────────── TABLE 1000 ────────────────┤
     ╔═══════════════════════════════════════════╗
     ║                                           ║
     ║   ├──────── X TRAVEL 850 ─────────┤       ║
     ║                                           ║
     ╚═══════════════════════════════════════════╝
       ↑ 75 mm            ↑ tool can reach   ↑ 75 mm
       UNREACHABLE          only here        UNREACHABLE

  AND THE USABLE AREA IS SMALLER STILL:
    − clamp and bolt access at the edges
    − the fixture body itself occupies area
    − coolant nozzles and guarding intrude
    − the part must be within travel, not the fixture
```

**The rule:** it is the **cut features** that must lie within the travel envelope, not the fixture. A
fixture may legitimately extend beyond the travel; a machined feature may not.

**THE Z BUDGET — REVISITED AND EXTENDED**

L0.4.4 introduced the Z budget. Here it is in full, with every term:

```
  SPINDLE NOSE AT ITS HIGHEST
       ═══════╤═══════
              │
              │  ▲
              │  │  MAX SPINDLE-NOSE-TO-TABLE  (e.g. 650 mm)
              │  │
       HOLDER │  │  ── holder length      (BT40 ≈ 100 mm)
       ▓▓▓▓▓▓▓│  │
              │  │
       TOOL   ║  │  ── tool projection    (e.g. 80 mm)
              ║  │
       ───────▼──┴─  tool tip at Z clearance
              ▲
              │     ── clearance/rapid plane (e.g. 25 mm)
       ░░░░░░░│░░░
       PART   │     ── part height        (e.g. 120 mm)
       ═══════│═══
       FIXTURE│     ── fixture height     (e.g. 150 mm)
       ═══════▼═══
          TABLE

  BUDGET:
    Available          650
    − holder           100
    − tool             80
    − clearance        25
    − part             120
    − fixture          150
    ─────────────────────
    MARGIN             175 mm    ✓ comfortable

  ALSO CHECK THE MINIMUM:
    Spindle-nose-to-table MINIMUM (e.g. 150 mm) must be
    LESS than fixture + part + clearance, or a short tool
    cannot reach the work at all.
```

`[PRACTICE]` Keep at least 25 mm of margin, and check the **longest** tool in the programme, not the
average. It is the boring bar or the long-reach drill that fails the check.

**GRAVITY, FORCE DIRECTION AND THE PRINCIPAL VMC ADVANTAGE**

This is the heart of the lesson.

```
  ON A VMC, GRAVITY AND THE MAIN CUTTING FORCE
  BOTH ACT DOWNWARDS — INTO THE FIXTURE.

                    │ tool
                    ▼
              ┌───────────┐
              │   PART    │  W (weight) ↓
              └───────────┘  Fz (axial) ↓
       ═══════════════════════════
              FIXTURE
       ═══════════════════════════

   Fz + W both press the part ONTO the locators.

   ✓ THE PRIMARY LOCATING FACE IS SELF-LOADED
   ✓ Clamping is assisted, not opposed, by gravity
   ✓ Part cannot fall off if a clamp is loose (usually)
```

This is a genuine and underrated advantage. On a VMC, the seating face is naturally loaded. Compare an
HMC (L1.1.4), where gravity acts **perpendicular** to the primary locating face and the part will
simply fall off if unclamped.

**But do not over-rely on it.** The side forces are the problem:

```
  THE SIDE FORCES ARE WHAT MOVE THE PART

               Fx ──►  (feed direction)
                    │ tool
                    ▼
              ┌───────────┐
       Fy ──► │   PART    │  ← tries to SLIDE
              └───────────┘
       ═══════════════════════════

   Fz (down)  = HELPFUL — seats the part
   Fx, Fy     = THE ENEMY — slide and rotate the part

   L0.3.3 PRINCIPLE: FIT A POSITIVE STOP against
   Fx and Fy. Do not rely on friction from Fz.
```

`[GUIDE]` For end milling, the radial force components Fx and Fy are typically **0.3–0.6 of the
tangential cutting force**, while the axial Fz component is often only **0.2–0.4** of it. So the force
that helps you is generally the *smaller* one, and the forces that move the part are the larger. This
is a rough but useful proportion, and the exact split depends heavily on the helix angle, radial
engagement and whether the cut is climb or conventional (L1.3.1).

> **Do not let the downward force lull you.** The vertical spindle is helpful for *seating*, not for
> *restraint*. The restraint problem on a VMC is entirely a horizontal problem, and it is solved with
> positive stops, not with friction from the clamp.

**CHIP AND COOLANT BEHAVIOUR — THE VMC'S PRINCIPAL WEAKNESS**

```
      VMC: CHIPS FALL INTO THE FIXTURE AND STAY

                    │
                    ▼
              ┌───────────┐
              │   PART    │
        ▒▒▒▒▒▒└───────────┘▒▒▒▒▒▒
        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ← chips accumulate
       ══════════════════════════      HERE
              FIXTURE
       ═══════════════════════════
       ▒▒▒ pockets fill with chips
       ▒▒▒ coolant pools in recesses
```

The consequences are real and they cause scrap:

| Problem | Mechanism | Design response |
|---|---|---|
| **Chip under a locator** | Part sits high on a chip → dimensional error, angular error | Small, raised locating pads; chip relief grooves around every pad |
| **Chips packed in pockets** | Fixture becomes a chip trap; operator cannot clear it | Sloped floors, drain holes, no horizontal ledges |
| **Coolant pooling** | Corrosion of the fixture and the part; slippery handling | Drain holes at every low point |
| **Chips in a locating bore** | Pin will not enter, or enters and damages the bore | Chamfer, air blast, clearance for chips |
| **Chips on the clamping face** | Clamp force partly on chips → force lost and inconsistent | Clean clamping faces; avoid horizontal clamp pads facing up |
| **Chips jamming a moving element** | Toggle clamp or slide seizes | Cover, bellows, or place mechanisms out of the chip stream |

> **A chip under a locator is the single most common cause of VMC fixture scrap.** It is not a
> theoretical risk; it is a daily one. A 0.3 mm chip under one of three seating pads tilts the part,
> and every subsequent feature is wrong.
>
> The design responses that actually work are: **small pads** (less area to trap a chip), **raised
> pads** (chips fall off the surrounding surface rather than onto the pad), and **relief grooves**
> around each pad (a place for the chip to go). Combined with an air blast and an operator instruction,
> these reduce the problem to manageable. They never eliminate it.

**Small pads, quantified.** If a seating face is a 200 × 150 mm plate, its area is 30,000 mm². Three
20 mm diameter pads have a combined area of 942 mm² — **3.1% of it**. The probability of a chip landing
on a pad falls by the same factor. This is the whole argument for pads over full-face contact, and it
also improves flatness control, since three small ground pads are far easier to bring into a common
plane than one large ground face.

**WHY THE VMC NEEDS A SECOND SETUP**

```
  THE TOOL REACHES ONLY WHAT IS VISIBLE FROM ABOVE

              ▼ tool can reach
         ┌──────────────┐
    ✗ ───│              │─── ✗
    side │     PART     │  side face
    face │              │  unreachable
         └──────────────┘
    ✗ bottom face unreachable
    ═══════════════════════════

  A part with features on 3 faces needs:
     Setup 1: top
     Setup 2: re-clamp, machine sides (or use an angle plate)
     → A NEW DATUM RELATIONSHIP IS CREATED
     → TOLERANCES STACK BETWEEN SETUPS
```

**This is the fundamental VMC limitation, and it is a tolerance issue, not just a cost issue.** Every
re-setup introduces a new location error between the features cut in setup 1 and those cut in setup 2.
If a drawing calls for 0.05 mm positional tolerance between a top hole and a side hole, and the two are
cut in different setups, the fixture's setup-to-setup repeatability must be far better than 0.05 mm —
which is difficult.

The responses, in order of preference:
1. **Redesign the process** so all critical related features are cut in one setup
2. **Use an angle plate or tombstone** on the VMC to present a second face in the same setup
3. **Add a 4th axis** (L1.1.3) to rotate the part
4. **Move to an HMC** (L1.1.4)
5. **Accept the second setup** and design the fixture for maximum setup repeatability

The fixture designer is often the person who notices that option 1 is available. That is a valuable
contribution.

### 7. Terminology

| Term | Definition |
|---|---|
| **VMC** | Vertical machining centre — spindle axis vertical |
| **C-frame** | Configuration with a moving table and a spindle head on a column |
| **Travelling column** | Configuration with a fixed table and a moving column |
| **Travel** | The distance an axis can move; less than the table size |
| **Working envelope** | The volume the tool tip can reach |
| **Spindle nose to table** | Maximum and minimum Z distance — sets the Z budget |
| **Z budget** | Accounting of the vertical space between the table and the spindle |
| **Clearance plane** | The safe Z height for rapid moves |
| **Chip relief groove** | A recess around a locating pad giving chips somewhere to go |
| **Locating pad** | Small raised ground surface providing seating contact |
| **Chip trap** | Any horizontal recess where chips accumulate |
| **Second setup** | Re-clamping to machine features unreachable in the first |
| **Angle plate** | A fixture element presenting a vertical face on a VMC table |
| **Air blast** | Compressed air used to clear chips from locating features |

### 8. Principle

> **ON A VMC, GRAVITY IS YOUR FRIEND FOR SEATING AND YOUR ENEMY FOR CHIPS.**
> The vertical spindle presses the part onto its primary locating face — but the side forces Fx and Fy,
> which are typically *larger* than the helpful axial force, must be resisted by **positive stops**,
> never by friction.
> **Chips fall into the fixture and stay there.** Use small raised pads with relief grooves; never
> create a horizontal chip trap.
> **The tool reaches only what is visible from above** — every additional face costs a setup, and every
> setup adds a tolerance stack.

### 9. Industrial application

**Assessing a VMC fixture concept against the machine — a real checklist in use**

```
COMPONENT: gearbox cover, 240 × 180 × 60 mm
MACHINE:   VMC, X/Y/Z 850/500/500, table 1000×500,
           spindle nose to table 150–650, BT40, ATC L300

CHECK 1 — DOES THE PART FIT THE TRAVEL?
  Part 240 × 180, fixture 400 × 300
  Features span 220 × 160 → well inside 850 × 500  ✓
  Fixture 400 × 300 sits on 1000 × 500 table       ✓

CHECK 2 — Z BUDGET
  Available (max)              650
  − BT40 holder                100
  − longest tool (Ø10 long drill, 130 proj) 130
  − clearance                   25
  − part height                 60
  − fixture height             120
  ────────────────────────────────
  MARGIN                       215  ✓

  Minimum check: 150 < 120+60+25 = 205  ✓
  (short tools can reach)

CHECK 3 — TOOL LENGTH vs ATC
  Longest tool 130 + holder = 230 < 300 max  ✓

CHECK 4 — ACCESS FROM ABOVE
  Top face features        → setup 1  ✓
  4 × side holes on 2 faces → CANNOT REACH  ✗
  → DECISION REQUIRED (see below)

CHECK 5 — CHIP BEHAVIOUR
  Pocket in the fixture around the part boundary
  → CHIP TRAP. Redesign with sloped floor + 2 drain holes

CHECK 6 — CLAMP AND TOOL COLLISION
  Face mill Ø80 sweeps to within 12 mm of clamp arm
  → 12 mm is inside the 15 mm practice minimum
  → move clamp 10 mm outboard

CHECK 7 — ATC SWING
  Fixture 120 tall at X+300; tool change position X+0
  → clear  ✓
```

**The decision at Check 4 is where the money is:**

| Option | Cost | Tolerance consequence |
|---|---|---|
| Two setups on the VMC | Cheapest fixture, **doubles cycle handling** | Setup-to-setup stack — typically 0.05–0.10 mm `[GUIDE]` |
| Angle plate, one setup | Moderate fixture cost | Single datum — no stack |
| 4th axis | Higher (needs the axis) | Single datum, rotary error only |
| HMC with tombstone | Highest machine cost | Single datum, best throughput |

`[PRACTICE]` If the side holes have a loose positional tolerance and the volume is low, two setups is
correct. If the tolerance is tight or the volume is high, it is not. The fixture designer should present
this table, not just build what was asked for. This is the L0.1.3 economics reasoning applied.

### 10. Design rules
- **R1** — Verify the **cut features** lie within the travel envelope; the fixture itself may extend
  beyond it.
- **R2** — Compute the full **Z budget** using the **longest** tool, and keep ≥25 mm margin `[PRACTICE]`.
- **R3** — Check the **minimum** spindle-nose-to-table as well as the maximum.
- **R4** — Use **small raised locating pads** with chip relief grooves, never a full ground face.
- **R5** — **No horizontal ledges or blind pockets**; slope every floor and drill drain holes at low
  points.
- **R6** — Resist Fx and Fy with **positive stops**; never rely on friction from the downward force.
- **R7** — Position demanding fixtures **towards the column** on a C-frame machine `[GUIDE]`.
- **R8** — Provide **air blast** or an accessible cleaning route to every locating surface.
- **R9** — Keep clamps and their travel **outside the tool sweep** by ≥15 mm `[PRACTICE]`.
- **R10** — Where a second setup is unavoidable, design for **setup-to-setup repeatability** and state
  the resulting stack in the design record.
- **R11** — Present the **setup-count options with their tolerance consequences** before accepting a
  two-setup process.

### 11. Rules of thumb
- **The VMC's advantage is gravity; its weakness is chips.**
- Fz (helpful) is typically **0.2–0.4** of tangential force; Fx/Fy (harmful) **0.3–0.6** `[GUIDE]`.
- Three Ø20 pads on a 200×150 face = **3% of the area** — 30× less chance of a chip under a locator.
- Travel is always **less than table size** — often by 100–200 mm total.
- Keep **≥25 mm Z margin** and check the longest tool.
- **A chip under a locator is the most common VMC fixture scrap cause.**
- Every extra face = **one more setup** = one more tolerance stack of **0.05–0.10 mm** `[GUIDE]`.
- C-frame machines are **stiffest near the column**.
- If it can pool coolant, **drill a drain hole**.

### 12. Formulae

**Z budget**
```
Margin = Z_max − (L_holder + L_tool + h_clearance + h_part + h_fixture)
Require Margin ≥ 25 mm  [PRACTICE]
```

**Minimum reach check**
```
Z_min < h_fixture + h_part + h_clearance
```

**Pad area fraction (chip exposure)**
```
f = (n · π d²/4) / A_face
```

**Setup-to-setup stack (worst case)**
```
T_stack = T_setup1 + T_setup2 + T_relocation
```

**Contact pressure on a pad (from L0.5.4)**
```
p = F_clamp / A_pad
```

| Variable | Meaning | Unit |
|---|---|---|
| Z_max, Z_min | Spindle nose to table, max and min | mm |
| L | Length | mm |
| h | Height | mm |
| f | Pad area fraction | — |
| n | Number of pads | — |
| d | Pad diameter | mm |
| A | Area | mm² |

### 13. Worked numerical example

**Problem:** A cast iron housing is to be machined on a VMC. Verify the Z budget, evaluate the chip
exposure of two seating options, calculate the required stop force from the horizontal cutting forces,
and assess whether a proposed two-setup process is acceptable against the drawing tolerance.

```
GIVEN:
  MACHINE
    Spindle nose to table       = 150 to 700 mm       [MFR]
    Spindle taper BT40, holder  = 105 mm               [MFR]
    ATC max tool length         = 300 mm               [MFR]
    X/Y travel                  = 900 / 550 mm         [MFR]

  PART
    Cast iron housing           = 300 × 200 × 90 mm    [PROJ]
    Mass                        = 22 kg                [PROJ]
    Seating face                = 300 × 200 mm         [PROJ]
    Features span               = 280 × 180 mm         [PROJ]

  FIXTURE (proposed)
    Fixture height              = 140 mm               [PROJ]
    Option A: full ground face 300 × 200
    Option B: 3 pads Ø25 mm                            [PROJ]

  TOOLING
    Longest tool: Ø12 drill, projection 165 mm         [PROJ]
    Face mill Ø100, projection 60 mm                   [PROJ]
    Clearance plane                                    = 25 mm

  CUTTING (face milling, roughing)
    Tangential cutting force Ft = 3,200 N              [PROJ]
    Radial factor (Fx,Fy)       = 0.50 of Ft           [GUIDE]
    Axial factor (Fz)           = 0.30 of Ft           [GUIDE]
    Shock allowance             = 1.4                  [GUIDE]
    μ steel/CI, coolant present = 0.12                 [GUIDE]

  TOLERANCE
    Top-face to side-hole position tol = ±0.08 mm      [PROJ]
    Expected setup-to-setup stack      = 0.07 mm       [GUIDE]

REQUIRED:
  (a) Z budget for the longest tool
  (b) Minimum-reach check
  (c) ATC tool length check
  (d) Travel check
  (e) Chip exposure of Options A and B
  (f) Horizontal force to be resisted, with shock
  (g) Friction available from Fz and weight alone
  (h) Whether a positive stop is required, and its load
  (i) Assessment of the two-setup proposal
  (j) Engineering conclusion

ASSUMPTION:
  1. Force factors 0.50 radial and 0.30 axial are
     GUIDELINE ratios for face milling. Actual values
     depend on entry angle, insert geometry and
     engagement, and MUST BE CONFIRMED against the tool
     manufacturer's data for a production commitment. [GUIDE]
  2. Shock allowance 1.4 for interrupted cast iron cuts,
     within the 1.3-2.0 band from L0.4.2. [GUIDE]
  3. μ = 0.12 with coolant present. L0.3.3: coolant
     approximately halves the dry value. [GUIDE]
  4. Clamping force is NOT included in the friction
     calculation in (g) deliberately, to isolate the
     contribution of the cutting force and weight. Clamps
     are sized in Level 5.
  5. Setup-to-setup stack of 0.07 mm is a guideline
     estimate; it MUST BE MEASURED on the actual fixture
     before the process is released. [GUIDE]
  6. g = 9.81 m/s².

FORMULA:
  (a) Margin = Z_max − (L_hold + L_tool + h_cl + h_part + h_fix)
  (e) f = n(πd²/4) / A_face
  (f) F_h = Ft × radial factor × shock
  (g) F_friction = μ × (W + Fz)
  (i) Compare T_stack against the drawing tolerance band

UNIT CONVERSION:
  Mass 22 kg → W = 22 × 9.81 = 215.8 N
  Tolerance ±0.08 mm → total band 0.16 mm
  All lengths mm, forces N.

SUBSTITUTION AND CALCULATION:

  (a) Z BUDGET — LONGEST TOOL (Ø12 drill)

      Available                      = 700
      − BT40 holder                  = 105
      − tool projection              = 165
      − clearance plane              =  25
      − part height                  =  90
      − fixture height               = 140
      ──────────────────────────────────────
      Sum of deductions              = 525
      MARGIN = 700 − 525             = 175 mm

      175 ≥ 25 required              ✓ PASS

      Cross-check with the face mill (60 proj):
      700 − (105+60+25+90+140) = 280 mm  ✓
      → The DRILL is the binding case, as expected.

  (b) MINIMUM REACH CHECK

      Required: Z_min < h_fix + h_part + h_clearance
                150   < 140 + 90 + 25 = 255
                150   < 255                     ✓ PASS

      → Short tools can reach the work.

  (c) ATC TOOL LENGTH

      Tool + holder = 165 + 105 = 270 mm
      270 < 300 max                             ✓ PASS
      Margin only 30 mm — NOTE for the record.

  (d) TRAVEL CHECK

      Features span 280 × 180
      Travel        900 × 550
      280 < 900  ✓     180 < 550  ✓             ✓ PASS

  (e) CHIP EXPOSURE

      Face area A = 300 × 200 = 60,000 mm²

      OPTION A — full ground face:
        Contact area = 60,000 mm²
        f = 60000/60000 = 1.000 = 100 %

      OPTION B — 3 pads Ø25:
        One pad = π(25)²/4 = π × 625/4
                = 490.87 mm²
        Three   = 3 × 490.87 = 1,472.6 mm²
        f = 1472.6 / 60000 = 0.02454 = 2.45 %

      IMPROVEMENT FACTOR = 1.000/0.02454 = 40.7

      → OPTION B REDUCES CHIP-TRAPPING EXPOSURE BY A
        FACTOR OF ABOUT 41.

      Check contact pressure is acceptable. Taking a
      total clamp force of 12,000 N (Level 5 will size
      this properly):
        p = 12000 / 1472.6 = 8.15 N/mm² = 8.15 MPa
      Against cast iron compressive strength of order
      600 MPa [GUIDE] → negligible marking risk.  ✓

  (f) HORIZONTAL FORCE TO BE RESISTED

      F_h = Ft × 0.50 × 1.4
          = 3200 × 0.50 × 1.4
          = 3200 × 0.70
          = 2,240 N

  (g) FRICTION FROM WEIGHT AND AXIAL FORCE ALONE

      Fz = 3200 × 0.30 = 960 N
      W  = 215.8 N

      Normal load = 960 + 215.8 = 1,175.8 N

      F_friction = μ × N
                 = 0.12 × 1175.8
                 = 141.1 N

  (h) IS A POSITIVE STOP REQUIRED?

      Required    2,240 N
      Available     141 N

      RATIO = 2240 / 141.1 = 15.9

      → THE HORIZONTAL FORCE IS 15.9 TIMES THE FRICTION
        AVAILABLE FROM GRAVITY AND THE CUTTING FORCE.
      ✗ FRICTION ALONE IS COMPLETELY INADEQUATE.
      → A POSITIVE STOP IS MANDATORY.

      Stop design load (with the shock already included):
        F_stop = 2,240 N

      If one stop takes the full load on a 20 × 15 mm
      contact face:
        p = 2240 / 300 = 7.47 MPa  ✓ trivial for
        hardened steel — the stop is not stress-limited,
        it is stiffness- and location-limited.

  (i) TWO-SETUP ASSESSMENT

      Drawing tolerance band = ±0.08 → 0.16 mm total
      Expected setup stack   = 0.07 mm

      As a fraction of the band:
        0.07 / 0.16 = 43.75 %

      → THE SETUP STACK ALONE CONSUMES 44 % OF THE
        TOTAL POSITIONAL TOLERANCE, BEFORE ANY MACHINE,
        TOOLING OR MEASUREMENT ERROR IS COUNTED.

      Adding L1.1.1's typical pre-fixture consumption:
        machine + tooling + measurement ≈ 0.045 mm
        setup stack                     = 0.070 mm
        ───────────────────────────────────────────
        subtotal                        = 0.115 mm
        remaining for everything else   = 0.045 mm
        (0.16 − 0.115)

      → 28 % of the tolerance remains for the fixture's
        own location error, wear and deflection —
        ACROSS TWO FIXTURES.
      ⚠ MARGINAL. Achievable but with no comfort.

RESULT:
  ┌────────────────────────────────┬───────────────────┐
  │ (a) Z margin, longest tool     │ 175 mm    ✓ PASS  │
  │ (b) Minimum reach              │ 150<255   ✓ PASS  │
  │ (c) ATC tool length            │ 270<300   ✓ tight │
  │ (d) Travel                     │           ✓ PASS  │
  │ (e) Chip exposure A            │ 100 %             │
  │     Chip exposure B (3×Ø25)    │ 2.45 %            │
  │     Improvement                │ 40.7×             │
  │ (f) Horizontal force + shock   │ 2,240 N           │
  │ (g) Friction from W + Fz       │ 141 N             │
  │ (h) Deficit ratio              │ 15.9×  ✗          │
  │     → POSITIVE STOP MANDATORY  │ 2,240 N design    │
  │ (i) Setup stack vs tolerance   │ 44 % ⚠ MARGINAL   │
  └────────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Shock allowance of 1.4 is embedded in the 2,240 N stop
  load. The stop material is not stress-critical
  (7.47 MPa against a yield of several hundred), so the
  governing safety consideration is not strength but
  STIFFNESS and WEAR — covered in Levels 3 and 5.
  On the tolerance side there is effectively NO safety
  factor: 28 % of the band remains for two fixtures.

PASS/FAIL:
  ✓ PASS — machine envelope, all four checks.
  ✓ PASS — Option B seating, with a 41× chip improvement.
  ✗ FAIL — friction-only restraint. Positive stop required.
  ⚠ MARGINAL — the two-setup process. Achievable but
    without margin; recommend review.

ENGINEERING CONCLUSION:
  1. THE MACHINE IS COMFORTABLE — BUT ONE FIGURE IS TIGHT.
     175 mm of Z margin is generous, and the travel is
     ample. But the ATC tool length margin is only 30 mm
     on a 300 mm limit. If the drill is ever reground
     shorter that is fine; if a longer tool is ever
     substituted, it will not fit the changer. I would
     RECORD THE 270 mm FIGURE ON THE PROCESS SHEET as a
     limit, because the person who later swaps the tool
     will not have done this calculation.

  2. USE PADS, NOT A FULL FACE — THE FACTOR IS 41.
     This is the clearest result in the calculation.
     Reducing contact from a full ground face to three
     Ø25 pads cuts the chip-trapping area by a factor of
     41, and contact pressure remains trivial at 8 MPa.
     Three pads are also FAR EASIER TO GRIND INTO A
     COMMON PLANE than a 60,000 mm² face, so the
     flatness of the seating improves at the same time as
     the chip risk falls. There is no argument for the
     full face here. Add a relief groove around each pad.

  3. THE POSITIVE STOP IS NOT OPTIONAL — IT IS 16× SHORT.
     This is the L0.3.3 principle appearing again, and the
     magnitude is worth noting: friction from gravity and
     the axial cutting force provides 141 N against a
     requirement of 2,240 N. The vertical spindle's
     downward force SEATS the part beautifully and
     RESTRAINS it barely at all. The lesson generalises:
     ON A VMC, GRAVITY SOLVES THE SEATING PROBLEM AND
     CONTRIBUTES ALMOST NOTHING TO THE RESTRAINT PROBLEM.

  4. THE TWO-SETUP PROCESS IS THE REAL ISSUE.
     Everything above is solvable engineering. The setup
     stack is not — it consumes 44 % of the positional
     tolerance before anything else is counted, leaving
     28 % to be shared between two complete fixtures.
     That will probably work and will certainly not be
     comfortable, and it will be the first thing to drift
     as the locators wear.
     I WOULD RAISE THIS BEFORE BUILDING ANYTHING. The
     options, in order: (a) re-examine whether the side
     holes can be reached in setup 1 using an angle
     plate, which eliminates the stack entirely; (b) ask
     whether the ±0.08 mm relationship is functionally
     required or inherited; (c) if a 4th axis is
     available, a single setup removes the problem.
     Presenting that choice, with these numbers attached,
     is more valuable than quietly building two fixtures.

SENSITIVITY NOTE:
  Most sensitive to least:
    1. NUMBER OF SETUPS — a step change. Eliminating the
       second setup recovers 44 % of the tolerance
       instantly. Nothing else available comes close.
    2. RADIAL FORCE FACTOR — the 0.50 guideline drives
       the stop load linearly. If it is really 0.35 the
       stop load falls to 1,568 N; if 0.65, it rises to
       2,912 N. The stop is not stress-critical so this
       does not change the design, but it changes the
       clamping calculation in Level 5. CONFIRM IT.
    3. FRICTION COEFFICIENT — at 15.9× short, μ would
       have to rise to 1.9 for friction to suffice, which
       is physically impossible for steel on cast iron.
       THE CONCLUSION IS INSENSITIVE TO μ, which is
       exactly why "fit a positive stop" is a rule rather
       than a calculation result.
    4. PAD DIAMETER — chip exposure scales with d², so
       Ø20 pads would give 1.57 % rather than 2.45 %.
       A second-order improvement on an already large one.
```

### 14. Engineering assumptions
- Radial 0.50 and axial 0.30 force factors are guidelines for face milling `[GUIDE]` — confirm against
  tool manufacturer data.
- Shock allowance 1.4 for interrupted cast iron cuts `[GUIDE]`.
- μ = 0.12 with coolant present `[GUIDE]`.
- Clamping force deliberately excluded from the friction check to isolate gravity's contribution.
- Setup-to-setup stack of 0.07 mm is an estimate `[GUIDE]` — must be measured before release.
- Clamp force of 12,000 N used only to check pad pressure; proper sizing is Level 5.

### 15. Diagram

```
     THE 3-AXIS VMC — CONFIGURATION AND CONSEQUENCES
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  AXES AND CONVENTION

              Z+ ▲  (UP, away from the work)
                 │      ┌──────┐
                 │      │ HEAD │ ── moves Z
                 │      │  ▼   │
                 │      └──┬───┘   COLUMN
                 │         ║ tool    ║
        Y+ ╲     │    ░░░░░░░░░░     ║
      (back)╲    │  ══════════════   ║
             ╲   │      TABLE        ║
              ╲  └──────────────► X+ ║
                                (right)
      ══════════════════════════════════
                    BASE

   TABLE moves X and Y.  HEAD moves Z.
   CUTTING DEPTH IS A NEGATIVE Z MOVE.

  ──────────────────────────────────────────────────────────

  GRAVITY AND FORCE DIRECTION — THE VMC BARGAIN

                      ║ tool
                      ▼
              ┌───────────────┐
      Fx,Fy   │               │   W  ↓  weight
      ══════► │     PART      │   Fz ↓  axial cut force
      (0.3-0.6│               │
       of Ft) └───────────────┘  (0.2-0.4 of Ft)
      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
              FIXTURE
      ════════════════════════════════
                 TABLE

   ┌──────────────────────────────────────────────┐
   │ DOWNWARD (Fz + W)  → SEATS the part   ✓      │
   │ HORIZONTAL (Fx,Fy) → SLIDES the part  ✗      │
   │                                              │
   │ AND THE HARMFUL ONE IS USUALLY THE LARGER.   │
   │ FIT A POSITIVE STOP. Worked example: friction│
   │ was 16× SHORT of the requirement.            │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE CHIP PROBLEM — AND THE PAD ANSWER

   ✗ WRONG — FULL FACE + POCKET      ✓ RIGHT — PADS
                                        + RELIEF + DRAIN

     ┌─────────────┐                    ┌─────────────┐
     │    PART     │                    │    PART     │
     └─────────────┘                    └─────────────┘
   ▒▒█████████████▒▒                   ─┴─   ─┴─   ─┴─
   ▒▒█ full ground█▒▒                  ░ ╲___╱   ╲___╱ ░
   ▒▒█    face    █▒▒                  ░ relief grooves░
   ┌──┴───────────┴──┐                 └──╲_________╱──┘
   │▒▒▒▒ POCKET ▒▒▒▒▒│                     sloped, drained
   │▒▒ chips stay ▒▒▒│                      ↓ ↓ drain holes
   └─────────────────┘

   Contact 60,000 mm² = 100 %       3 × Ø25 = 1,473 mm²
                                      = 2.45 %
                          → 41× LESS CHIP EXPOSURE
                          → and easier to grind coplanar

   ┌──────────────────────────────────────────────┐
   │ A CHIP UNDER A LOCATOR IS THE MOST COMMON    │
   │ CAUSE OF VMC FIXTURE SCRAP. SMALL PADS,      │
   │ RAISED, WITH RELIEF GROOVES. NO FLAT LEDGES. │
   │ DRAIN EVERY LOW POINT.                       │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE Z BUDGET

   ═══╤═══  spindle nose (highest)
      │  ▲
      │  │ Z_max  700
   ▓▓▓│  │        − holder    105
      │  │        − tool      165
   ───┴──│──      − clearance  25
      ▲  │        − part       90
   ░░░│░░│        − fixture   140
   ═══│══│══      ──────────────────
      │  │        MARGIN      175  ✓ (need ≥25)
   ═══▼══▼══
     TABLE
   ALSO: Z_min (150) must be < fix+part+clear (255)  ✓
   ALSO: tool+holder (270) < ATC limit (300)  ✓ tight

  ──────────────────────────────────────────────────────────

  THE FUNDAMENTAL VMC LIMITATION

        ▼ reaches only the TOP
   ✗ ┌──────────────┐ ✗
     │     PART     │      side faces unreachable
     └──────────────┘
   ══════════════════      ✗ bottom unreachable

   EVERY EXTRA FACE = ONE MORE SETUP
                    = ONE MORE TOLERANCE STACK
                      (0.05-0.10 mm typical [GUIDE])

   In the worked example the setup stack consumed
   44 % OF THE ENTIRE POSITIONAL TOLERANCE.

   ESCAPE ROUTES, IN ORDER OF PREFERENCE:
     1. Resequence so related features share one setup
     2. Angle plate / tombstone on the VMC
     3. 4th axis        (L1.1.3)
     4. HMC             (L1.1.4)
     5. Accept it — and design for setup repeatability
```

### 16. Drawing example
On a VMC fixture assembly drawing, three notes earn their place:

```
NOTE 1: LOCATING PADS ITEMS 4,5,6 TO BE GROUND IN POSITION
        AFTER ASSEMBLY. COPLANARITY WITHIN 0.01 mm.

NOTE 2: RELIEF GROOVE 2 mm WIDE × 1.5 mm DEEP AROUND EACH
        LOCATING PAD. ALL POCKET FLOORS SLOPED MIN 3° TO
        DRAIN HOLES ITEMS 21-24.

NOTE 3: MAXIMUM TOOL LENGTH FOR THIS FIXTURE 270 mm
        INCLUDING HOLDER. VERIFY BEFORE SUBSTITUTING TOOLS.
```

Note 1 is the one that separates a working fixture from a drawing. **Grinding the pads after assembly**
puts them in a common plane in their assembled, bolted-down condition — which is the only condition
that matters. Grinding them individually before assembly and hoping they align is a common and
avoidable error. Full treatment at L14.

### 17. CAD workflow
For a VMC fixture, add these steps to the standard assembly workflow:

1. Insert the **machine table reference model** (L1.1.1 §17) at the origin
2. Place the fixture and part; set the **WCS origin** where the programmer will set it (L1.2.4)
3. Create a **Z-budget sketch** on a vertical plane showing all six terms as driven dimensions, so the
   margin updates automatically when the fixture height changes
4. Model the **longest tool + holder** as a simple cylinder and check clearance at every feature
5. Model the **face mill sweep** as a swept solid and run an interference check against clamps
6. Use a **section view looking up** to find horizontal ledges — they are chip traps and they are hard
   to see in an isometric view
7. Run a **draft/slope check** on all pocket floors to confirm drainage

`[PRACTICE]` Step 6 is the one people skip and the one that catches real problems. A section from
underneath makes every flat upward-facing surface obvious.

### 18. GD&T application
The coplanarity of the locating pads is a **profile of a surface** control applied to the pad group as
a common datum feature. Full treatment at L21; the preview:

```
STANDARD: ASME Y14.5-2018

   Pads 4, 5, 6 (top faces):

   ┌─────────────────────────┐
   │ ⌓ │ 0.01 │      │       │
   └─────────────────────────┘
   3 SURFACES

   Meaning: all three pad faces must lie within a
   0.01 mm wide tolerance zone bounded by two parallel
   planes — i.e. they are COPLANAR within 0.01 mm.

   Under ISO GPS the equivalent uses ISO 1101 profile
   of a surface with the "common zone" indication (CZ).
   THE TWO SYSTEMS EXPRESS THIS DIFFERENTLY. Do not
   mix the notations.
```

### 19. Manufacturing method
The pad-grinding sequence, which follows directly from L0.5.3's soft → heat treat → grind principle:

1. Machine the fixture base soft, leaving 0.3 mm grinding stock on the pad faces
2. Stress relieve if the base is welded (L0.5.3 — 600 °C, mandatory)
3. Harden the pads (if separate inserts) or the pad areas
4. **Assemble and bolt down to the specified torque**
5. **Grind all pads in one setup, in the assembled condition**
6. Inspect coplanarity on a surface plate

Step 4 before step 5 is the entire point. Bolting distorts; grinding after bolting removes the
distortion from the result.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Pad coplanarity | Surface plate + height gauge, or CMM | 0.01 mm |
| Pad height above base | Height gauge | ±0.05 mm |
| Stop position | CMM from the fixture datum | ±0.02 mm |
| Fixture height (Z budget) | Height gauge | ±0.5 mm |
| Drainage | Pour coolant, observe | No pooling |
| Chip clearance | Visual, with air blast | Chips clear from all pads |

`[PRACTICE]` The drainage check takes thirty seconds and a cup of coolant, and it finds problems that
no drawing review will.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Full ground seating face** instead of pads | 40× more chip exposure; hard to grind flat |
| 2 | **No relief groove** around pads | Chips have nowhere to go; sit under the part |
| 3 | **Horizontal ledges and blind pockets** | Chip traps; operator cannot clear them |
| 4 | **No drain holes** | Coolant pools; corrosion; slippery |
| 5 | Relying on **friction from the downward force** | 16× short in the worked example |
| 6 | Confusing **table size with travel** | Features outside the envelope |
| 7 | Z budget with the **average** tool, not the longest | Collision, or the tool cannot reach |
| 8 | Forgetting the **minimum** spindle-nose-to-table | Short tools cannot reach the work |
| 9 | Forgetting the **ATC max tool length** | Tool will not load |
| 10 | **Grinding pads before assembly** | Bolting distorts them out of plane |
| 11 | Accepting a **second setup** without stating the stack | Tolerance quietly consumed |
| 12 | Placing a demanding fixture at the **table extremes** | Least accurate region of a C-frame |
| 13 | Clamps inside the **tool sweep** | Collision |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Random height/angle errors, no pattern | Chip under a locating pad | Blue the pads; inspect after clamping | Clean; add relief grooves and air blast | Small raised pads; relief grooves |
| Part height varies by ~0.1–0.5 mm | Chip or burr on the pad | Measure part seating with a DTI | Deburr the part; clear the pad | Pre-clean station; air blast |
| Part slides during cut | No positive stop; friction relied on | Recalculate F_h vs μN | Fit a positive stop | Design rule R6 |
| Fixture corrodes; coolant standing | No drain holes | Visual | Drill drains at low points | Slope all floors ≥3° |
| Tool cannot reach some features | Z budget or travel exceeded | Recheck the budget | Lower the fixture; shorter tool | Model the envelope |
| Tool will not load into the spindle | Exceeds ATC max length | Measure tool + holder | Shorter tool or different holder | Note the limit on the drawing |
| Setup 1 and setup 2 features mismatched | Setup-to-setup stack | Measure the relationship on parts | Improve setup repeatability; consider one setup | State the stack at design stage |
| Accuracy worse on some parts of the table | C-frame stiffness variation | Compare parts machined at different X | Move the fixture toward the column | Position demanding work near the column |
| Toggle clamp stiffens or seizes | Chips in the mechanism | Inspect | Clean; fit a cover | Keep mechanisms out of the chip stream |

### 23. Design checklist
- [ ] Do the **cut features** lie within X, Y and Z travel?
- [ ] Is the full **Z budget** computed with the **longest** tool, margin ≥25 mm?
- [ ] Is the **minimum** spindle-nose-to-table checked?
- [ ] Is **tool + holder** within the ATC length limit, and is the limit on the drawing?
- [ ] Are locating surfaces **small raised pads**, not a full face?
- [ ] Does every pad have a **relief groove**?
- [ ] Are all floors **sloped** and all low points **drained**?
- [ ] Are there any **horizontal ledges** — checked with a section view from below?
- [ ] Is there a **positive stop** against Fx and Fy, sized with shock?
- [ ] Are clamps ≥15 mm outside the **tool sweep**?
- [ ] Are the pads specified to be **ground after assembly**?
- [ ] Is the fixture positioned **towards the column** if the tolerance is demanding?
- [ ] If a second setup is required, is the **stack stated** and the alternative presented?
- [ ] Is there **air blast** or clear access to every locating surface?

### 24. Beginner exercise
**E1.1.2-B** — A VMC has a maximum spindle-nose-to-table distance of 600 mm and a minimum of 130 mm. A
BT40 holder is 100 mm long, the longest tool projects 140 mm, the part is 75 mm tall, and a 25 mm
clearance plane is used.
(a) What is the maximum permissible fixture height?
(b) If the fixture is 130 mm tall, what is the Z margin?
(c) Check that short tools can reach the work.
(d) State two reasons why the seating surface should be small pads rather than a full ground face.

### 25. Intermediate exercise
**E1.1.2-I** — A steel part 250 × 150 × 40 mm, mass 11.8 kg, is face milled on a VMC. The tangential
cutting force is 2,600 N; take the radial factor as 0.55, the axial factor as 0.30, a shock allowance of
1.5, and μ = 0.14 with coolant.
(a) Calculate the horizontal force the fixture must resist.
(b) Calculate the friction available from weight and axial cutting force alone.
(c) Calculate the ratio and state whether a positive stop is required.
(d) The seating face is 250 × 150 mm. Calculate the chip exposure fraction for a full face, and for four
Ø18 mm pads. State the improvement factor.
(e) For a total clamp force of 9,000 N on four Ø18 pads, calculate the contact pressure and comment.
(f) Explain in your own words why the downward cutting force does so little to restrain the part.

### 26. Advanced exercise
**E1.1.2-A** — An aluminium manifold 320 × 220 × 95 mm requires machining on five faces. Machine data:
spindle nose to table 160–680 mm, BT40 (holder 105 mm), ATC max tool length 280 mm, X/Y travel 800/500,
table 1000 × 500 mm. The critical requirement is a positional tolerance of ±0.06 mm between a bore on
the top face and two bores on one side face.
(i) Determine the maximum fixture height if the longest tool projects 150 mm and the clearance plane is
25 mm.
(ii) Evaluate three process options — two setups on a plain VMC fixture; one setup using an angle plate;
one setup using a 4th axis — against the ±0.06 mm requirement, assuming a setup-to-setup stack of
0.06 mm and pre-fixture error consumption of 0.045 mm.
(iii) Calculate the fixture allowance remaining under each option and state which options are viable.
(iv) For the angle-plate option, explain what new problem is created by presenting the part vertically,
with reference to gravity and to chip behaviour.
(v) The aluminium part is soft. Calculate the contact pressure for a clamping force of 8,000 N on three
Ø20 pads and compare with an assumed aluminium yield of 250 MPa `[GUIDE]`. Comment on marking risk and
state what you would change.
(vi) The 5th face is the bottom. Explain how it will be machined and what datum problem this creates.
(vii) Write the process recommendation you would give the customer, in one paragraph, with the numbers
that support it.

### 27. Interview questions
1. *"Why does a VMC fixture need drain holes and sloped floors?"*
   **Answer:** Because the spindle points down, so chips and coolant fall into the fixture and stay
   there rather than falling away. Any horizontal surface becomes a chip shelf and any recess becomes a
   coolant sump. The practical consequences are a chip getting under a locator — which is the most
   common cause of VMC fixture scrap, because it tilts the part and throws off every subsequent feature
   — and standing coolant corroding both the fixture and the part. Sloped floors and drain holes are
   cheap to add at design stage and impossible to add conveniently later.
2. *"On a VMC the cutting force pushes the part down onto the fixture. Doesn't that hold the part?"*
   **Answer:** It seats the part but it barely restrains it. Two things are going on. First, the
   downward axial component is typically only 0.2–0.4 of the tangential force, while the horizontal
   components are 0.3–0.6 — so the force that helps is usually smaller than the force that hurts.
   Second, the downward force only generates restraint through friction, and with coolant present μ is
   around 0.12, so you recover only about a tenth of it. In the worked example in this lesson the
   friction available from gravity plus the axial force was 141 N against a horizontal requirement of
   2,240 N — sixteen times short. The downward force is genuinely useful for keeping the part seated on
   its locators, which is why VMC setups are forgiving in that respect, but restraint has to come from
   a positive stop.

### 28. Expert questions
1. *"A customer wants a two-setup VMC process for a part with a tight relationship between features on
   two faces. Walk me through how you would handle it."*
   **Answer:** The first thing I would do is **quantify the problem rather than argue about it**,
   because "two setups is risky" is an opinion and a number is not. The setup-to-setup stack is
   typically 0.05–0.10 mm, and I would compare that against the tolerance band. In the example in this
   lesson a 0.07 mm stack against a ±0.08 mm requirement consumed 44% of the total band before any
   machine, tooling or measurement error was counted, which left about 28% to be shared between two
   complete fixtures. That is a fact the customer can act on; "I'm uncomfortable" is not.
   Then I would **look hard for a way to eliminate the second setup**, because that is a step change
   and everything else is incremental. The obvious route is an angle plate that presents the second face
   in the same setup — often the part can be tipped 90° and both faces machined without releasing it.
   If a 4th axis is available, that is cleaner still. Sometimes simply resequencing the operations
   reveals that the two critical features can share a setup even if some non-critical ones cannot; the
   tolerance only needs to be protected between the features that are actually related. Fixture
   designers who read the drawing carefully often find that the tight relationship is between two
   features that *could* share a setup, and the process was written without noticing.
   If the second setup genuinely cannot be avoided, I would **design specifically for setup-to-setup
   repeatability** rather than for general accuracy — that means both fixtures locating from the same
   physical datum features on the part where possible, hardened and ground locators, generous
   consideration of wear, and ideally a common sub-base so the two fixtures share a reference. And I
   would **measure the actual stack** on the first parts rather than relying on the 0.07 mm estimate,
   because it might be better or considerably worse.
   Finally I would **ask whether the tolerance is real**. A surprising proportion of tight
   feature-to-feature relationships are inherited from an earlier drawing, or applied as a default,
   and are not functionally required. That is a legitimate question to ask, asked properly, and it
   sometimes dissolves the whole problem.
   What I would not do is quietly build the two fixtures and let it become a production problem. The
   stack is predictable at design stage, and predicting it is the job.
2. *"You've said the VMC's advantage is gravity and its weakness is chips. If you had to design one
   VMC fixture feature to address the chip problem, what would it be and why?"*
   **Answer:** **Small, raised locating pads with a relief groove around each one** — as a single
   combined feature, because the three elements only work together.
   The reasoning is a probability argument. Chips land more or less uniformly over the fixture, so the
   chance of one landing where it matters is proportional to the locating contact area. Going from a
   full ground face to three small pads reduced that area by a factor of about 41 in this lesson's
   example — from 60,000 mm² down to 1,473 mm². That is not a marginal improvement; it changes a daily
   problem into an occasional one.
   Raising the pads matters because a chip that lands on the surrounding surface then does not
   contaminate the locating plane. If the pads are flush, the whole surface is effectively the locating
   surface again and you have lost the benefit. The relief groove matters because chips that do arrive
   near the pad, or that are dragged across by the part being slid into position, need somewhere to go
   — without a groove they are pushed up onto the pad, which is the worst outcome.
   There is a second benefit that is almost as valuable and often overlooked: **three small pads can be
   ground coplanar to 0.01 mm far more easily than one large face can be ground flat.** So the same
   feature that solves the chip problem also improves the seating accuracy and reduces manufacturing
   cost. That combination is unusual, and it is why this is the feature I would pick over air blast,
   sloped floors or drain holes — all of which I would also fit, but none of which changes the odds by
   a factor of forty.
   The one thing I would add is that the pads must be **ground after assembly**, bolted down at the
   specified torque. Grinding them individually and assembling them and hoping is how a well-designed
   pad arrangement ends up performing worse than a plain face.

### 29. Summary
The vertical machining centre has a downward-pointing spindle over a table that moves in X and Y, with
the head moving in Z, positive upwards, so cutting depth is a negative Z move. Most production VMCs are
C-frame, which is economical and accessible but cantilevers the spindle from the column and is stiffest
near the column. The vertical orientation produces a consistent force pattern: the axial component and
gravity both act downwards, seating the part on its locators, while the radial components — typically
larger than the axial one — act horizontally and must be resisted by positive stops, because friction
recovers only about a tenth of the downward force. Chips and coolant fall into the fixture and stay
there, making the chip trap the VMC's characteristic failure mode; small raised pads with relief
grooves, sloped floors and drain holes are the design answers, and the pad approach reduces chip
exposure by a factor of tens while also making the seating easier to grind coplanar. The Z budget must
be computed with the longest tool against both the maximum and minimum spindle-nose-to-table distances
and against the ATC tool length limit. The VMC's fundamental limitation is that the tool reaches only
what is visible from above, so every additional face costs a setup and every setup adds a
tolerance stack of typically 0.05–0.10 mm — which the fixture designer should quantify and present
before accepting the process.

### 30. Key takeaways
- **The VMC's advantage is gravity; its weakness is chips.**
- Fz and weight **seat** the part; Fx and Fy **move** it — and Fx/Fy are usually **larger**.
- Friction from the downward force is typically **an order of magnitude short**. Fit a positive stop.
- **Small raised pads + relief grooves** cut chip exposure by tens of times and grind coplanar easily.
- **Grind pads after assembly**, bolted to torque.
- **Slope every floor, drain every low point, no horizontal ledges.**
- Z budget uses the **longest** tool; check **max and min** spindle-to-table and the **ATC limit**.
- **Travel ≠ table size.** Cut features must be inside travel; the fixture need not be.
- C-frame machines are **stiffest near the column**.
- Every extra face = one setup = a **0.05–0.10 mm stack** `[GUIDE]`. Quantify it and present the
  alternatives.

---

## LESSON L1.1.3 — 4-AXIS AND 5-AXIS MACHINES

### 1. Lesson title
**L1.1.3 — Rotary axes A, B and C: trunnions, head-head and table-table configurations, and what each one does to the fixture**

### 2. Learning objective
By the end of this lesson you will be able to identify the rotary axis conventions, distinguish the
principal 4- and 5-axis configurations, explain how a rotating workpiece changes the direction of
gravity and cutting force relative to the fixture, calculate the additional loads a rotary application
imposes, and state the specific design consequences for fixtures mounted on rotary tables and
trunnions.

### 3. Prerequisites
L1.1.2 (VMC), L1.1.1 (machine architecture), L0.3.2 (forces and moments), L0.3.3 (friction).

### 4. Why the topic matters
Level 1.1.2 ended on the VMC's fundamental limitation: the tool reaches only what is visible from
above, so every extra face costs a setup and a tolerance stack. **Rotary axes are the primary answer to
that problem**, and understanding them is how a fixture designer offers a customer something better
than "two setups".

But rotary axes create a new problem that the fixture designer owns entirely:

> **When the part rotates, gravity does not.**

On a VMC, gravity always presses the part onto its primary locating face. On a rotary axis, the part
may end up on its side, or fully inverted. The clamping system must hold the part in every angular
position it will occupy — including the worst one, which is usually not the one anyone thinks about.

There are three further consequences that make rotary fixture design a distinct discipline:
1. **Everything is a cantilever.** A fixture on a trunnion or rotary table is supported at one end (or
   two), not on a large flat table. Stiffness drops.
2. **Mass and inertia matter directly.** The rotary drive has a torque limit and an inertia limit, and
   the fixture mass counts against both.
3. **The rotary axis has its own error**, which adds to the machine's linear errors.

### 5. Simple explanation
A **4-axis** machine adds one rotating axis to the usual three. Usually the part sits on a rotary table
that turns about the X axis, letting the tool reach all four sides of the part without re-clamping.

A **5-axis** machine adds two rotating axes. Now the tool can approach the part from almost any
direction, so complex shapes can be cut in one setup.

```
   3-AXIS: X, Y, Z          4-AXIS: + A (rotate about X)

        ▼ tool                    ▼ tool
     ┌──────┐                  ┌──────┐
     │ PART │                  │ PART │ ⟲ turns
     └──────┘                  └──┬───┘
   ══════════                 ═══[A]═══
   reaches TOP only           reaches 4 SIDES
```

The rotary axes are named:
- **A** rotates about the X axis
- **B** rotates about the Y axis
- **C** rotates about the Z axis

The important thing for you: **when the part turns, its weight no longer pushes it onto the fixture.**
It may hang sideways or upside down. The clamps must hold it in every position.

### 6. Engineering explanation

**ROTARY AXIS CONVENTION**

The naming is fixed by ISO 841 and is worth committing to memory:

| Rotary axis | Rotates about | Right-hand rule |
|---|---|---|
| **A** | The **X** axis | Positive = clockwise looking along +X |
| **B** | The **Y** axis | Positive = clockwise looking along +Y |
| **C** | The **Z** axis | Positive = clockwise looking along +Z |

```
        Z
        │   C ⟲ (about Z)
        │
        └──────── X
       ╱          A ⟲ (about X)
      Y
      B ⟲ (about Y)

  MNEMONIC: A-B-C follows X-Y-Z.
```

**4-AXIS: THE CONFIGURATIONS**

```
(a) HORIZONTAL ROTARY TABLE ON A VMC  — "A axis"
    Most common 4-axis arrangement.

              ▼ tool
         ┌──────────┐
      ═══│   PART   │═══
      [A]└──────────┘[tailstock]
      ▓▓▓▓            ▓▓▓▓
    ══════════════════════════
              VMC TABLE

    ✓ Reaches 4 sides in one setup
    ✓ Relatively inexpensive add-on
    ✗ Part is CANTILEVERED or spans two supports
    ✗ Raises the part — Z budget consumed
    ✗ Consumes X travel


(b) VERTICAL ROTARY TABLE ON A VMC  — "C axis"
    Part lies flat and rotates about a vertical axis.

              ▼ tool
         ┌──────────┐
         │   PART   │
         └──────────┘
         ╔══════════╗ ⟲ C
    ═════╩══════════╩════
           VMC TABLE

    ✓ Gravity STILL presses the part down — like a VMC
    ✓ Good for circular patterns, indexing
    ✗ Does NOT reach the sides — still a 3-axis
      access problem, just indexed


(c) ROTARY TABLE ON AN HMC  — "B axis"
    Standard on almost every HMC. See L1.1.4.
```

> **Note carefully: configuration (b) is a 4-axis machine that does not solve the access problem.** A
> C-axis rotary table on a VMC indexes the part about a vertical axis, which is excellent for circular
> hole patterns and for presenting different angular positions of the same top surface — but the tool
> still only reaches the top. Only an A-axis (horizontal rotation) reaches the sides. People confuse
> these, and it matters when you are choosing a process.

**5-AXIS: THE TWO ARCHITECTURES**

The distinction between them has direct fixture consequences.

```
TABLE-TABLE (trunnion)  — both rotary axes carry the WORK
────────────────────────────────────────────────────────

              ▼ tool  (spindle stays vertical)
         ┌──────────┐
         │   PART   │
         ╔══════════╗ ⟲ C  (table rotates)
     ┌───╨──────────╨───┐
     │    TRUNNION      │ ⟲ A  (whole cradle tips)
     └──╥────────────╥──┘
    ════╩════════════╩══════
            MACHINE BASE

  ✓ Simple, stiff spindle — no rotary joint in the head
  ✓ Generally the more accurate architecture
  ✓ Most common in small/medium 5-axis
  ✗ WORKPIECE SIZE AND MASS ARE SEVERELY LIMITED
  ✗ THE PART GETS TIPPED AND INVERTED — clamping
    must hold in every orientation
  ✗ Trunnion is a cantilever/bridge — stiffness limited
  ✗ Small working envelope for the swept volume


HEAD-HEAD  — both rotary axes carry the TOOL
────────────────────────────────────────────────────────

          ┌───────┐
          │ HEAD  │ ⟲ B
          │   ↘   │
          └───╥───┘ ⟲ C
              ▼ tool (tilts and swivels)
         ┌──────────┐
         │   PART   │
    ═════╧══════════╧═════
          FIXED TABLE

  ✓ Workpiece stays FLAT AND STATIONARY — gravity
    behaves exactly as on a VMC
  ✓ Very large and heavy parts possible
  ✓ Fixture design is much simpler
  ✗ Spindle head is heavier, less stiff
  ✗ More expensive
  ✗ Used for large moulds, aerospace structures


HEAD-TABLE (mixed)  — one axis each
  A tilting head plus a rotary table. A compromise:
  moderate part size, moderate complexity. Common on
  larger 5-axis machining centres.
```

`[GUIDE]` For a fixture designer, the single most useful question about a 5-axis machine is: **does the
part tip, or does the tool?** If the part tips (table-table or head-table with a rotary table), you have
a gravity problem. If only the tool moves (head-head), you have a VMC-like fixture problem with better
access.

**THE GRAVITY PROBLEM — QUANTIFIED**

This is the core of the lesson.

```
   PART AT 0°               PART AT 90°           PART INVERTED 180°

      W ↓                       W ↓                     ▲ locators
   ┌────────┐              ┌──┐                    ┌────────┐
   │  PART  │              │P │ ← W acts           │  PART  │
   └────────┘              │A │   ALONG the        └────────┘
   ▓▓LOCATORS▓             │R │   locating face        W ↓
                           │T │                     ══════
   W presses ONTO          └──┘                    W pulls the part
   the locators            ▓▓▓▓                    AWAY from the
                           locators                locators
   ✓ HELPS                 ⚠ SHEARS — friction     ✗ CLAMPS ALONE
                             only                     HOLD IT
```

Three distinct load cases, and the clamping must satisfy all three:

| Orientation | Gravity relative to the primary locating face | Restraint requirement |
|---|---|---|
| **0° (part up)** | Normal, into the face | Clamp force ≥ cutting force needs only |
| **90° (on its side)** | Parallel to the face — pure shear | Clamp force must generate friction ≥ W + cutting |
| **180° (inverted)** | Normal, **away** from the face | **Clamp force must exceed W plus the cutting force pulling off** |

> **The 180° case is the one that fails.** A fixture sized for the cutting force at 0° may be entirely
> inadequate when inverted, because at 0° the weight helped and at 180° it opposes. The swing between
> the two cases is **2W**, and for a heavy part that dominates everything.
>
> **And the failure mode is not a poor surface finish — it is the part falling out of the fixture at
> 6,000 rev/min.** Rotary fixture clamping is a safety issue, not just an accuracy issue.

**A safety note that is not optional.** Where a part will be inverted, the clamping must be designed
so that a single failure — one bolt loosening, one pneumatic circuit losing pressure — does not release
the part. `[PRACTICE]` Common approaches: mechanical clamping rather than pneumatic for inverted work;
spring-applied/pressure-released clamps so loss of air clamps rather than releases; a physical capture
feature that retains the part even if the clamp fails; and a check valve so a burst line does not dump
pressure. Full treatment at L28 (Poka-Yoke) and in the clamping levels.

**CENTRIFUGAL AND DYNAMIC LOADS**

Rotary axes on machining centres index or interpolate at modest speeds, so centrifugal force is usually
small — but it is not always negligible, and the acceleration torque can be significant.

```
Centrifugal force on a mass at radius r:
   F_c = m ω² r        where ω = 2πN/60

Angular acceleration torque:
   T = J α             where J = mass moment of inertia
                             α = angular acceleration
```

`[GUIDE]` For typical indexing (a few tens of rev/min), centrifugal force is small compared with
cutting forces. For continuous 4-axis milling at higher rotary speeds, or for a large-diameter fixture
with mass at a large radius, it should be checked. The **inertia** limit is usually the binding one:
rotary table manufacturers state a maximum permissible workpiece inertia, and a heavy fixture at a
large radius exceeds it easily.

**BALANCE.** An unbalanced fixture on a rotary axis produces a cyclic load on the drive and bearings,
and a torque that varies with angle. `[PRACTICE]` For indexing applications a modest imbalance is
tolerable; for continuous rotary machining, balance matters. The practical rule is to keep the fixture
mass distribution as symmetrical about the rotary axis as the part allows, and where a single part is
mounted off-axis, consider a counterweight.

**THE ROTARY AXIS ADDS ITS OWN ERROR**

| Error source | Typical magnitude `[GUIDE]` | Effect on the part |
|---|---|---|
| Rotary positioning accuracy | 10–30 arc-seconds | Angular error, amplified by radius |
| Rotary repeatability | 4–10 arc-seconds | Irreducible scatter |
| Axis centreline location | 0.005–0.020 mm | Offset between indexed positions |
| Axis wobble / runout | 0.005–0.015 mm | Varies with angle |
| Backlash (worm drive) | Varies; clamped when indexing | Removed by clamping the axis |

**Angular error amplifies with radius — this is the calculation people forget:**

```
   Linear error at radius r from angular error θ:
        e = r · θ        (θ in radians)

   Converting arc-seconds:
        θ_rad = θ_arcsec × (π / 648000)
              = θ_arcsec × 4.848 × 10⁻⁶

   EXAMPLE: 20 arc-seconds at 150 mm radius
        e = 150 × 20 × 4.848e-6
          = 0.0145 mm

   AT 300 mm RADIUS THE SAME ERROR GIVES 0.029 mm.
```

> **This is why large-diameter rotary work is harder than it looks.** The rotary axis specification
> looks reassuring in arc-seconds and becomes alarming in millimetres once multiplied by radius. Always
> convert before deciding whether the axis is good enough.

**Clamp the rotary axis when indexing.** `[PRACTICE]` Almost all rotary tables have a brake or clamp
that locks the axis once in position. Indexing without clamping leaves the worm drive holding the
cutting torque, which is both less stiff and less accurate. The programme must include the clamp/unclamp
commands, and the fixture designer should confirm they are there.

**FIXTURE DESIGN CONSEQUENCES — SUMMARISED**

| Consequence | Why | Design response |
|---|---|---|
| **Clamping must hold at every orientation** | Gravity rotates relative to the part | Size clamps for the **worst** orientation, usually inverted |
| **Safety-critical clamping** | Part falling from an inverted rotary fixture | Fail-safe clamping; mechanical retention |
| **Everything is a cantilever** | No large flat table under the fixture | Keep the part close to the rotary face; short overhang |
| **Mass matters directly** | Rotary drive torque and inertia limits | Lightweight construction; check against the table rating |
| **Inertia matters more than mass** | J scales with r² | Keep mass close to the axis |
| **Balance** | Cyclic loading and varying torque | Symmetry, or a counterweight |
| **Swept envelope, not static envelope** | The fixture rotates through the machine | Check clearance at **every** angle, not just 0° |
| **Rotary error adds** | Angular error × radius | Convert arc-seconds to mm at the working radius |
| **Coolant and chips fall differently at each angle** | Orientation changes | Avoid pockets that trap at any angle |
| **Z budget is worse** | The rotary unit itself is tall | Recompute — the A-axis unit may take 150–250 mm |

**The swept envelope check deserves emphasis.** On a 3-axis VMC you check that the fixture fits. On a
4/5-axis machine you must check that the fixture, the part, the clamps and the tool all clear the
machine, the table, the trunnion and each other **through the full range of rotation**. A fixture that
fits perfectly at 0° can foul the trunnion casting at 90°. This is what CAD simulation is genuinely
essential for, and it is covered in L1.1.3 §17.

### 7. Terminology

| Term | Definition |
|---|---|
| **A axis** | Rotation about X |
| **B axis** | Rotation about Y |
| **C axis** | Rotation about Z |
| **4-axis** | Three linear axes plus one rotary |
| **5-axis** | Three linear axes plus two rotary |
| **Trunnion** | A cradle carrying a rotary table, tilting about a horizontal axis |
| **Table-table** | 5-axis with both rotary axes on the work side |
| **Head-head** | 5-axis with both rotary axes on the tool side |
| **Head-table** | One rotary axis on each side |
| **Indexing (3+2)** | Rotating to a position, clamping, then machining in 3 axes |
| **Continuous 5-axis** | All five axes moving simultaneously during the cut |
| **Tailstock** | Second support opposing a rotary table on a 4-axis setup |
| **Swept envelope** | The volume occupied through the full range of rotation |
| **Arc-second** | 1/3600 of a degree; the unit of rotary accuracy |
| **Mass moment of inertia (J)** | Resistance to angular acceleration; scales with r² |
| **Axis clamp / brake** | Device locking a rotary axis after indexing |
| **Fail-safe clamping** | Clamping that holds on loss of power or pressure |

### 8. Principle

> **WHEN THE PART ROTATES, GRAVITY DOES NOT.**
> A fixture on a rotary axis must restrain the part in **every** orientation it will occupy, and the
> governing case is normally the inverted one — where the weight that helped at 0° now opposes the
> clamps. The swing between best and worst case is **2W**.
> **On a rotary axis, clamping is a safety requirement, not only an accuracy requirement.**
> Everything is a cantilever, mass and inertia count against the drive's rating, the swept envelope
> must be checked at every angle, and **angular error multiplied by radius** is the accuracy term
> people forget.

### 9. Industrial application

**Choosing between 4-axis, 5-axis and multiple setups**

```
DECISION GUIDE  [PRACTICE — guidance, not a rule]

FEATURES ON 2 FACES, LOOSE TOLERANCE, LOW VOLUME
  → Two setups on a 3-axis VMC. Cheapest. Accept the stack.

FEATURES ON 4 SIDES AROUND ONE AXIS
  → 4-AXIS (A-axis rotary table). This is the classic
    4-axis case and it is very effective.

FEATURES ON 4 SIDES, HIGH VOLUME
  → HMC with a tombstone (L1.1.4). Better throughput
    than a 4-axis VMC.

FEATURES AT COMPOUND ANGLES
  → 5-AXIS INDEXED (3+2). Rotate to the angle, clamp,
    machine in 3 axes. Most 5-axis work is this.

SCULPTURED SURFACES, IMPELLERS, BLADES
  → CONTINUOUS 5-AXIS. The only option.

LARGE, HEAVY PART WITH MULTI-FACE FEATURES
  → HEAD-HEAD 5-AXIS. The part stays put.

SMALL PART, MANY FACES, TIGHT RELATIONSHIPS
  → TABLE-TABLE TRUNNION 5-AXIS. Best accuracy for
    small work, but watch mass and inversion.
```

**A real fixture consequence: the 4-axis tombstone-on-a-trunnion trap**

A frequent request is: "we have a 5-axis trunnion machine, can we put four parts on a block and do them
all in one cycle?" The fixture designer's checks:

```
CHECK 1 — MASS
  Trunnion rated max workpiece mass, e.g. 150 kg  [MFR]
  Fixture block 60 kg + 4 parts × 12 kg = 108 kg
  108 < 150  ✓ but only 28 % margin

CHECK 2 — INERTIA (the one that actually fails)
  Rated max inertia, e.g. 8 kg·m²  [MFR]
  Block: treat as a cylinder, r_eff ≈ 0.12 m
    J ≈ 60 × 0.12² = 0.86 kg·m²
  Parts at 0.18 m radius:
    J ≈ 4 × 12 × 0.18² = 1.56 kg·m²
  Total ≈ 2.4 kg·m² < 8  ✓

  NOTE: had the parts been at 0.40 m radius,
    J ≈ 4 × 12 × 0.40² = 7.68 kg·m² — ALREADY AT
    THE LIMIT with the block still to add.
  INERTIA SCALES WITH r². THIS IS WHY.

CHECK 3 — SWEPT ENVELOPE
  Block 240 mm across, tilting ±110° in the trunnion
  → does the corner clear the trunnion casting at
    the extreme tilt?  MUST BE SIMULATED.

CHECK 4 — INVERSION
  At A = 180° each part hangs upside down.
  Clamp force must exceed 12 kg × 9.81 = 118 N per
  part PLUS the pull-off cutting component PLUS a
  safety factor. And it must be FAIL-SAFE.

CHECK 5 — Z BUDGET
  Trunnion raises the work by ~200 mm.
  Block adds 240 mm. Part 90 mm.
  On a machine with 600 mm available this leaves
  very little for tool and holder. RECOMPUTE.

CHECK 6 — CHIP EVACUATION AT EVERY ANGLE
  At A = 0° chips sit on the block's top faces.
  At A = 90° they fall clear.
  Design so that no angle creates a trap that the
  next angle then presses into a locator.
```

`[PRACTICE]` Checks 2 and 5 are the ones that most often kill the idea, and both are quick to do at
concept stage. Doing them before promising the customer a four-up trunnion fixture is worth the ten
minutes.

### 10. Design rules
- **R1** — Size clamping for the **worst orientation**, normally inverted, not for 0°.
- **R2** — Use **fail-safe clamping** where the part will be inverted; a single failure must not
  release the part `[PRACTICE]`.
- **R3** — Check the rotary unit's **mass rating and inertia rating** separately; inertia usually binds
  first.
- **R4** — Keep mass **close to the rotary axis** — J scales with r².
- **R5** — Simulate the **swept envelope at every angle**, not just at 0° and 90°.
- **R6** — Convert rotary **arc-seconds to millimetres at the working radius** before accepting the
  accuracy.
- **R7** — Confirm the programme **clamps the rotary axis** before cutting when indexing `[PRACTICE]`.
- **R8** — Minimise **overhang** from the rotary face; the fixture is a cantilever.
- **R9** — Recompute the **Z budget** including the rotary unit's own height.
- **R10** — Design so that **no angle traps chips** in a way that contaminates a locator at the next
  angle.
- **R11** — Keep the fixture **balanced about the rotary axis**, or counterweight it, for continuous
  rotary work.
- **R12** — Prefer **head-head** architecture for large, heavy parts; the part stays flat and the
  fixture problem stays simple.

### 11. Rules of thumb
- **When the part rotates, gravity does not.** Design for the worst orientation.
- The best-to-worst-case swing on an inverted part is **2W**.
- **Inertia limits bind before mass limits** — J scales with r².
- Angular error in mm = `r × arcsec × 4.848 × 10⁻⁶`.
- 20 arc-sec at 150 mm radius ≈ **0.015 mm**; at 300 mm ≈ 0.029 mm.
- A **C-axis table on a VMC does not reach the sides** — only an A-axis does.
- **Most 5-axis work is 3+2 indexed**, not continuous.
- A rotary unit typically costs **150–250 mm of Z budget** `[GUIDE]`.
- **Clamp the rotary axis** before cutting.
- **If the part tips, you have a gravity problem. If only the tool tips, you do not.**

### 12. Formulae

**Angular error to linear error**
```
e = r · θ_rad
θ_rad = θ_arcsec × π/648000 = θ_arcsec × 4.848×10⁻⁶
```

**Clamping requirement, inverted**
```
F_clamp ≥ (W + F_pull-off) × SF
```

**Clamping requirement, on-side (friction restraint)**
```
F_clamp ≥ (W + F_cut) × SF / (μ · n)
```

**Mass moment of inertia (point mass at radius)**
```
J = m r²
```
**(solid cylinder about its own axis)**
```
J = ½ m r²
```

**Centrifugal force**
```
F_c = m ω² r ,   ω = 2πN/60
```

**Angular acceleration torque**
```
T = J α
```

| Variable | Meaning | Unit |
|---|---|---|
| e | Linear error | mm |
| r | Radius | mm (or m for J) |
| θ | Angular error | rad or arc-sec |
| W | Weight | N |
| J | Mass moment of inertia | kg·m² |
| ω | Angular velocity | rad/s |
| α | Angular acceleration | rad/s² |
| SF | Safety factor | — |

### 13. Worked numerical example

**Problem:** A four-station rotary fixture is proposed on a 4-axis (A-axis) trunnion. Determine the
clamping requirement at every orientation, check the mass and inertia ratings, and evaluate the
positional error contributed by the rotary axis.

```
GIVEN:
  ROTARY UNIT                                    [MFR]
    Max workpiece mass              = 120 kg
    Max workpiece inertia           = 5.0 kg·m²
    Positioning accuracy            = 15 arc-sec
    Repeatability                   = 6 arc-sec
    Axis centreline location error  = 0.010 mm
    Height added to the setup       = 210 mm

  FIXTURE AND PARTS                              [PROJ]
    Fixture block mass              = 48 kg
    Block effective radius          = 0.105 m
    Parts: 4 off, each              = 9.5 kg
    Part mounting radius            = 0.165 m
    Part max feature radius from A  = 0.230 m

  MACHINING                                      [PROJ]
    Cutting force (finishing)       = 850 N
    Worst-case pull-off component   = 0.45 of cutting
    Orientations used               = 0°, 90°, 180°, 270°
    Clamps per part                 = 2
    μ steel on steel, dry           = 0.18            [GUIDE]
    Safety factor, rotary work      = 3.0             [PRACTICE]

  TOLERANCE
    Feature position tolerance      = ±0.05 mm        [PROJ]

REQUIRED:
  (a) Clamp force required at 0° (part upright)
  (b) Clamp force required at 90° (part on its side)
  (c) Clamp force required at 180° (part inverted)
  (d) The governing case and the ratio to the 0° case
  (e) Mass check against the rotary rating
  (f) Inertia check against the rotary rating
  (g) Rotary angular error expressed in mm at the
      maximum feature radius
  (h) Total rotary contribution vs the tolerance
  (i) Engineering conclusion

ASSUMPTION:
  1. Safety factor 3.0 for rotary work where the part
     is inverted. This is HIGHER than the 2-3 general
     fixture band from L0.3.3 because the failure mode
     is the part leaving the fixture at speed, not a
     dimensional error. This is a RECOMMENDED PRACTICE
     value and the company's own safety policy takes
     precedence. [PRACTICE]
  2. Pull-off component 0.45 of cutting force is a
     GUIDELINE for the worst tool orientation. It MUST
     BE CONFIRMED from the actual toolpath. [GUIDE]
  3. μ = 0.18 dry, steel on steel, mid-band from L0.3.3.
     If coolant reaches the clamping faces this
     approximately HALVES and case (b) must be redone.
     [GUIDE]
  4. Parts treated as point masses at their mounting
     radius for the inertia estimate. This is
     conservative for the parts and adequate at concept
     stage; a CAD mass-properties value should replace
     it before commitment. [PRACTICE]
  5. Block treated as a solid cylinder, J = ½mr².
  6. Rotary positioning and repeatability combined
     arithmetically with centreline error (worst case).
  7. g = 9.81 m/s².

FORMULA:
  (a) F ≥ F_cut × SF / (μ n)      [friction case, aided
                                    by W]
  (b) F ≥ (W + F_cut) × SF / (μ n)
  (c) F ≥ (W + F_pull) × SF / n   [direct opposition]
  (f) J = ½ m r² (block) + Σ m r² (parts)
  (g) e = r × θ_arcsec × 4.848×10⁻⁶

UNIT CONVERSION:
  Part weight  W = 9.5 × 9.81 = 93.2 N
  Radii in metres for J; in mm for error.
  Max feature radius 0.230 m = 230 mm.

SUBSTITUTION AND CALCULATION:

  (a) AT 0° — PART UPRIGHT, WEIGHT HELPS

      Cutting force acts to slide the part.
      Normal load = clamp force + weight.
      Conservatively, size on the clamp alone:

        F_clamp ≥ F_cut × SF / (μ × n)
                = 850 × 3.0 / (0.18 × 2)
                = 2550 / 0.36
                = 7,083 N total
                = 3,542 N per clamp

  (b) AT 90° — PART ON ITS SIDE

      Weight now acts ALONG the locating face and must
      also be resisted by friction:

        Total load to resist = F_cut + W
                             = 850 + 93.2
                             = 943.2 N

        F_clamp ≥ 943.2 × 3.0 / (0.18 × 2)
                = 2829.6 / 0.36
                = 7,860 N total
                = 3,930 N per clamp

  (c) AT 180° — PART INVERTED

      Weight and the pull-off cutting component both
      act to LIFT the part off the locators. Friction
      does not help; the clamps oppose directly.

        F_pull = 850 × 0.45 = 382.5 N
        Total pull-off = W + F_pull
                       = 93.2 + 382.5
                       = 475.7 N

        F_clamp ≥ 475.7 × 3.0
                = 1,427 N total
                = 714 N per clamp

      BUT the part must ALSO be restrained against
      sliding while inverted, and here the weight no
      longer contributes to the normal load — the
      clamp provides all of it:

        F_clamp(slide) ≥ F_cut × SF / (μ n)
                       = 850 × 3.0 / 0.36
                       = 7,083 N total

      THE SLIDING CASE GOVERNS AT 180° TOO:
        Governing at 180° = 7,083 N (sliding)
        Check: with 7,083 N clamp, is the part held
        against pull-off?
          7,083 N available vs 475.7 N required
          → margin 14.9×   ✓ comfortable

  (d) THE GOVERNING CASE

      0°    7,083 N
      90°   7,860 N   ◄── GOVERNS
      180°  7,083 N (sliding governs)

      Ratio, worst to 0°:  7860/7083 = 1.11

      → THE 90° (ON-SIDE) CASE GOVERNS, BY 11 %.

      Design clamp force: 7,860 N total,
                          3,930 N per clamp.

      ⚠ IMPORTANT OBSERVATION:
      The 180° case did NOT govern here only because
      the part is LIGHT (9.5 kg) relative to the
      cutting force. Repeat for a 40 kg part:
        W = 392.4 N
        180° pull-off = (392.4 + 382.5) × 3.0
                      = 2,324 N
        90° sliding = (850+392.4)×3.0/0.36
                    = 10,353 N  — still governs
      For a HEAVY part with a LIGHT cut the inverted
      case does govern. THE POINT IS THAT ALL THREE
      MUST BE CHECKED — WHICH ONE WINS DEPENDS ON THE
      RATIO OF WEIGHT TO CUTTING FORCE.

  (e) MASS CHECK

      Block                      = 48.0 kg
      Parts 4 × 9.5              = 38.0 kg
      Clamps, pins, hardware ~   =  6.0 kg  [EX-ASSUMED]
      ────────────────────────────────────
      TOTAL                      = 92.0 kg

      Rating 120 kg
      Utilisation = 92/120 = 76.7 %      ✓ PASS
      Margin 28 kg.

  (f) INERTIA CHECK

      Block (solid cylinder, J = ½mr²):
        J_block = 0.5 × 48 × (0.105)²
                = 0.5 × 48 × 0.011025
                = 0.2646 kg·m²

      Parts (point masses at 0.165 m):
        J_parts = 4 × 9.5 × (0.165)²
                = 38 × 0.027225
                = 1.0346 kg·m²

      Hardware, estimate at 0.15 m:
        J_hw   = 6 × (0.15)² = 0.135 kg·m²

      TOTAL J = 0.2646 + 1.0346 + 0.135
              = 1.434 kg·m²

      Rating 5.0 kg·m²
      Utilisation = 1.434/5.0 = 28.7 %    ✓ PASS
      Comfortable.

      SENSITIVITY: if the parts were mounted at
      0.320 m instead of 0.165 m:
        J_parts = 38 × 0.1024 = 3.891 kg·m²
        Total  ≈ 4.29 kg·m² = 86 % of rating
      → NEARLY DOUBLE THE RADIUS, NEARLY FOUR TIMES
        THE INERTIA. r² IS UNFORGIVING.

  (g) ROTARY ANGULAR ERROR IN MILLIMETRES

      Combined angular error (worst case):
        positioning 15 + repeatability 6 = 21 arc-sec

      Convert:
        θ_rad = 21 × 4.848×10⁻⁶
              = 1.0181×10⁻⁴ rad

      At the maximum feature radius r = 230 mm:
        e = 230 × 1.0181×10⁻⁴
          = 0.02342 mm

  (h) TOTAL ROTARY CONTRIBUTION vs TOLERANCE

      Angular error at radius       = 0.0234 mm
      Axis centreline location      = 0.0100 mm
      ──────────────────────────────────────────
      Rotary total (worst case)     = 0.0334 mm

      Tolerance band ±0.05 → 0.100 mm total

      Fraction consumed = 0.0334/0.100 = 33.4 %

      → THE ROTARY AXIS ALONE CONSUMES A THIRD OF
        THE POSITIONAL TOLERANCE.

      Adding L1.1.1's typical pre-fixture consumption
      of ~0.045 mm for machine, tooling and
      measurement:
        0.0334 + 0.045 = 0.0784 mm
        Remaining for the fixture = 0.0216 mm (22 %)

      ⚠ TIGHT but workable.

RESULT:
  ┌──────────────────────────────────┬──────────────────┐
  │ (a) Clamp force at 0°            │ 7,083 N          │
  │ (b) Clamp force at 90°           │ 7,860 N ◄GOVERNS │
  │ (c) Clamp force at 180°          │ 7,083 N (slide)  │
  │     — pull-off margin at 180°    │ 14.9×  ✓         │
  │ (d) Design clamp force           │ 7,860 N total    │
  │                                  │ 3,930 N per clamp│
  │ (e) Mass 92 kg / 120 kg          │ 76.7 %  ✓ PASS   │
  │ (f) Inertia 1.43 / 5.0 kg·m²     │ 28.7 %  ✓ PASS   │
  │ (g) Angular error at r=230       │ 0.0234 mm        │
  │ (h) Rotary total vs tolerance    │ 33.4 % ⚠ TIGHT   │
  └──────────────────────────────────┴──────────────────┘

SAFETY FACTOR:
  SF = 3.0 applied throughout, higher than the 2-3
  general fixture band, because an inverted rotary
  fixture that releases a part is a SAFETY EVENT and
  not merely a quality event. The realised margin on
  the pull-off case is 14.9× because the sliding case
  governs the clamp size — a useful incidental result.

PASS/FAIL:
  ✓ PASS — mass, at 77 % of rating.
  ✓ PASS — inertia, at 29 % of rating.
  ✓ PASS — clamping, with 7,860 N total specified.
  ⚠ MARGINAL — the error budget. The rotary axis
    consumes 33 % of the positional tolerance, leaving
    22 % for the fixture itself.

ENGINEERING CONCLUSION:
  1. THE 90° CASE GOVERNS HERE — BUT ONLY JUST, AND
     ONLY BECAUSE THE PART IS LIGHT.
     The on-side orientation requires 11 % more clamp
     force than upright, because the part's weight
     must be carried by friction rather than resting
     on the locators. But the more important finding
     is the sensitivity: the sub-calculation shows
     that for a heavier part or a lighter cut, the
     INVERTED case moves toward governing. There is no
     shortcut — ALL ORIENTATIONS MUST BE CHECKED, and
     which one wins depends on the ratio of part
     weight to cutting force. Designers who check only
     the inverted case because "that's the scary one"
     can under-size for the on-side case, which is
     what happened here.

  2. FRICTION IS DOING ALL THE WORK, AND THAT IS
     UNCOMFORTABLE.
     Every governing case in this calculation is a
     FRICTION case: the required clamp force is driven
     by F_cut × SF/(μn), and μ = 0.18 is doing a great
     deal of load-bearing. If coolant reaches the
     clamping faces μ approximately halves (L0.3.3),
     and the required force DOUBLES to about
     15,700 N — which would probably exceed what the
     clamps can deliver.
     THE CORRECT RESPONSE IS THE L0.3.3 PRINCIPLE:
     FIT A POSITIVE STOP. A stop resisting the cutting
     force directly removes the friction dependence
     entirely and collapses the clamp requirement to
     the pull-off case — 1,427 N instead of 7,860 N,
     a factor of 5.5. I WOULD REDESIGN WITH POSITIVE
     STOPS BEFORE SPECIFYING 3,930 N CLAMPS.

  3. INERTIA PASSES COMFORTABLY — BECAUSE THE PARTS
     ARE CLOSE TO THE AXIS.
     At 29 % of rating there is no concern. But the
     sensitivity check is the lesson: moving the parts
     from 165 mm to 320 mm radius takes inertia from
     29 % to 86 % of rating. J SCALES WITH r², SO
     MOUNTING RADIUS IS THE SINGLE MOST POWERFUL
     VARIABLE IN A ROTARY FIXTURE'S DYNAMICS. Keep the
     work close to the axis — which happens also to
     reduce the angular-error-times-radius term in (g).
     THE SAME DESIGN MOVE IMPROVES BOTH DYNAMICS AND
     ACCURACY.

  4. THE ERROR BUDGET IS THE REAL CONSTRAINT.
     33 % of the tolerance goes to the rotary axis
     before the fixture is considered, and it is
     dominated by the angular-error-times-radius term
     at the outermost feature. Reducing the maximum
     feature radius is not usually within my control,
     but ensuring the part is mounted as close to the
     axis as possible is. I would also confirm the
     rotary unit's accuracy from its CALIBRATION
     CERTIFICATE rather than the catalogue, and check
     whether the programme clamps the axis before
     cutting — an unclamped worm drive will not
     deliver the catalogue figure.

  RECOMMENDATION: redesign with positive stops against
  the cutting force; keep the parts at the smallest
  practicable mounting radius; specify fail-safe
  clamping since the part is inverted at A=180°;
  confirm the rotary calibration; and confirm the
  axis-clamp commands are in the programme.

SENSITIVITY NOTE:
  Ranked by influence:
    1. FRICTION COEFFICIENT — the clamp force is
       inversely proportional to μ. Halving μ doubles
       every governing figure. THIS IS THE WEAKEST
       LINK IN THE DESIGN and the argument for stops.
    2. MOUNTING RADIUS — inertia goes with r² and
       angular error goes with r. One variable, two
       benefits. Highest-leverage design choice.
    3. SAFETY FACTOR — linear, and a policy decision
       rather than an engineering one. At SF = 2.0 the
       governing clamp force falls to 5,240 N; I would
       not reduce it for inverted work.
    4. PART WEIGHT — determines which orientation
       governs, but at 9.5 kg it is a minor term
       compared with the cutting force here.
    5. PULL-OFF FACTOR — barely matters in this case
       because the sliding case governs, but it would
       matter if positive stops were fitted, since the
       pull-off case would then govern.
```

### 14. Engineering assumptions
- Safety factor 3.0 for inverted rotary work `[PRACTICE]` — higher than the general 2–3 band because
  the failure mode is a safety event; company policy takes precedence.
- Pull-off component 0.45 of cutting force `[GUIDE]` — confirm from the actual toolpath.
- μ = 0.18 dry `[GUIDE]`; halves if coolant reaches the clamping faces.
- Parts treated as point masses at their mounting radius `[PRACTICE]` — replace with CAD mass
  properties before commitment.
- Block treated as a solid cylinder.
- Rotary errors combined arithmetically (worst case).

### 15. Diagram

```
     4-AXIS AND 5-AXIS — CONFIGURATIONS AND
     THE GRAVITY PROBLEM
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  AXIS CONVENTION (ISO 841)

              Z ▲   ⟲ C
                │
                └────────► X   ⟲ A
               ╱
            Y ╱  ⟲ B

        A about X · B about Y · C about Z
        A-B-C FOLLOWS X-Y-Z

  ──────────────────────────────────────────────────────────

  THE FOUR ARCHITECTURES

  4-AXIS A ON A VMC          4-AXIS C ON A VMC
      ▼                          ▼
   ══[A]═══════[TS]           ┌──────┐
      └─PART──┘               │ PART │
   ═══════════════            ╚══⟲C══╝
     VMC TABLE               ════════════
   ✓ REACHES 4 SIDES        ✗ STILL TOP-ONLY ACCESS
                             ✓ good for indexing
                               circular patterns

  5-AXIS TABLE-TABLE          5-AXIS HEAD-HEAD
    (trunnion)
      ▼ spindle FIXED          ┌────┐⟲B
   ┌────────┐                  │HEAD│
   │  PART  │                  └─╥──┘⟲C
   ╔═══⟲C═══╗                    ▼ TOOL TILTS
  ┌╨────────╨┐⟲A            ┌──────────┐
  │ TRUNNION │              │   PART   │
  └╥────────╥┘             ═╧══════════╧═
  ═╩════════╩═               TABLE FIXED

  ✗ PART TIPS AND INVERTS    ✓ PART STAYS FLAT
  ✗ mass/inertia limited     ✓ gravity behaves
  ✓ stiff spindle, accurate  ✓ large heavy parts OK
  ✓ small/medium work        ✗ heavier head, costlier

   ┌──────────────────────────────────────────────┐
   │ THE ONE QUESTION THAT MATTERS TO A FIXTURE   │
   │ DESIGNER:                                    │
   │   DOES THE PART TIP, OR DOES THE TOOL?       │
   │ If the part tips → GRAVITY PROBLEM.          │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE GRAVITY PROBLEM — THREE LOAD CASES

     A = 0°              A = 90°           A = 180°
   ┌────────┐          ┌──┐              ▓▓LOCATORS▓▓
   │  PART  │ W↓       │P │              ┌────────┐
   └────────┘          │A │ W↓           │  PART  │
   ▓▓LOCATORS▓         │R │              └────────┘
                       │T │                  W ↓
   W presses ONTO      └──┘              W PULLS AWAY
   the locators        ▓▓▓▓              from the locators
                       W acts ALONG
   ✓ WEIGHT HELPS        the face        ✗ WEIGHT OPPOSES
                       ⚠ FRICTION ONLY     CLAMPS ALONE

   SWING FROM BEST TO WORST CASE = 2W

   ┌──────────────────────────────────────────────┐
   │ CHECK ALL THREE. WHICH GOVERNS DEPENDS ON    │
   │ THE RATIO OF PART WEIGHT TO CUTTING FORCE:   │
   │   light part / heavy cut → 90° governs       │
   │   heavy part / light cut → 180° governs      │
   │                                              │
   │ AND ON A ROTARY AXIS, CLAMPING IS A SAFETY   │
   │ REQUIREMENT. USE FAIL-SAFE CLAMPING.         │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHY MOUNTING RADIUS IS THE KEY VARIABLE

   INERTIA  J = m r²          ANGULAR ERROR  e = r·θ

   r = 165 mm    J = 1.03 kg·m²    e(21") = 0.017 mm
   r = 320 mm    J = 3.89 kg·m²    e(21") = 0.033 mm
                 ↑ 3.8×             ↑ 1.9×

   ┌──────────────────────────────────────────────┐
   │ KEEP THE WORK CLOSE TO THE ROTARY AXIS.      │
   │ ONE DESIGN MOVE IMPROVES BOTH THE DYNAMICS   │
   │ (r²) AND THE ACCURACY (r).                   │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  ARC-SECONDS BECOME MILLIMETRES

   e = r × θ_arcsec × 4.848 × 10⁻⁶

   θ = 20"     r = 50 mm  →  0.005 mm   looks fine
               r = 150 mm →  0.015 mm   noticeable
               r = 300 mm →  0.029 mm   significant
               r = 600 mm →  0.058 mm   often fatal

   ┌──────────────────────────────────────────────┐
   │ ALWAYS CONVERT BEFORE ACCEPTING THE ROTARY   │
   │ SPECIFICATION. ARC-SECONDS ARE REASSURING;   │
   │ MILLIMETRES AT RADIUS ARE NOT.               │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE SWEPT ENVELOPE CHECK

    AT A = 0°                AT A = 90°
    ┌──────────┐                    ┌───┐
    │ FIXTURE  │  ✓ clears          │ F │ ✗ CORNER
    ╔══════════╗                    │ I │   FOULS THE
   ┌╨──────────╨┐              ┌────┤ X ├──┐ TRUNNION
   │  TRUNNION  │              │TRUN│───│  │
   └────────────┘              └────┴───┴──┘

   A FIXTURE THAT FITS AT 0° CAN FOUL AT 90°.
   SIMULATE EVERY ANGLE, NOT JUST THE EXTREMES.
```

### 16. Drawing example
A rotary fixture assembly drawing must carry information a 3-axis fixture drawing does not:

```
NOTE 1: FIXTURE FOR A-AXIS ROTARY USE. TOTAL MASS
        92 kg INCLUDING WORKPIECES. MASS MOMENT OF
        INERTIA ABOUT THE A AXIS 1.43 kg·m².
        VERIFY AGAINST THE ROTARY UNIT RATING BEFORE USE.

NOTE 2: CLAMPING IS SAFETY-CRITICAL. THE WORKPIECE IS
        INVERTED AT A = 180°. MINIMUM CLAMP FORCE
        3930 N PER CLAMP. DO NOT OPERATE WITH A CLAMP
        REMOVED OR WITH REDUCED PRESSURE.

NOTE 3: ROTARY AXIS TO BE CLAMPED BEFORE CUTTING IN
        ALL INDEXED POSITIONS.

NOTE 4: SWEPT ENVELOPE VERIFIED BY SIMULATION FOR
        A = 0° TO 360° AT 15° INTERVALS.
        SEE SIMULATION REPORT SR-xxxx.
```

Notes 1 and 2 are the ones that matter. **Stating mass and inertia on the drawing** means the next
person to modify the fixture knows what constraint they are working against; without it, someone adds a
heavier clamp set and quietly exceeds the rating.

### 17. CAD workflow
Rotary fixture design is the case where CAD simulation is not a nicety.

1. Insert the **machine model including the trunnion or rotary unit** as a reference
2. Create the fixture with a **mate defining the rotary axis** so the assembly can be rotated
3. Use **mass properties** to obtain actual mass and inertia about the rotary axis — do not estimate
4. **Rotate through the full range at 15° intervals** and run an interference check at each
5. Model the **tool and holder at maximum length** and include them in the interference check
6. Create a **swept solid** of the fixture through the rotation and check it against the machine
7. Verify **coolant and chip paths** at 0°, 90°, 180° and 270°
8. Check the **Z budget at every angle** — the highest point changes as the fixture tips
9. Export the model for **machine-simulation software** if available, which will also verify the
   toolpath

`[PRACTICE]` Step 3 is the one that converts a guess into a number. CAD mass properties will give you
inertia about any specified axis directly, and it takes seconds. Estimating it by hand, as done in the
worked example, is fine at concept stage and should be replaced before commitment.

### 18. GD&T application
The rotary axis introduces a datum question that does not arise on a 3-axis machine: **what is the
part's datum relative to the rotary axis?** Full treatment at L21 and L22; the preview:

```
STANDARD: ASME Y14.5-2018

When features are machined at several rotary positions,
their relationship depends on the ROTARY AXIS being
coincident with the part's datum axis.

If the part's datum axis is offset from the rotary axis
by e, then features machined 180° apart are displaced
by 2e relative to each other.

  ┌────────────────────────────────────────┐
  │ THE FIXTURE MUST ALIGN THE PART'S      │
  │ DATUM AXIS WITH THE MACHINE'S ROTARY   │
  │ AXIS — AND ANY ERROR IN THAT ALIGNMENT │
  │ IS DOUBLED BETWEEN OPPOSED FEATURES.   │
  └────────────────────────────────────────┘
```

This is the rotary equivalent of the coordinate-diagonal 1.414 factor from L0.2.5: a geometric
amplification that catches people who reason only about single features.

### 19. Manufacturing method
Rotary fixture bodies are typically:
- **Machined from solid** for small trunnion fixtures — best accuracy and balance, higher cost
- **Fabricated and stress relieved** for larger blocks — stress relief at 600 °C between rough and
  finish machining is mandatory (L0.5.3)
- **Cast** for volume applications

`[PRACTICE]` Whatever the method, the **mounting interface to the rotary face must be machined in one
setup with the locating features**, so the relationship between the rotary mounting and the part
location is established directly rather than through a stack.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Mass | Weighing | Within the stated figure ±5% |
| Inertia | CAD calculation, verified against the model | Within the rotary rating |
| Locator position relative to the rotary mounting | CMM | ±0.02 mm |
| Concentricity of the part datum with the rotary axis | Indicate on the machine | 0.01 mm TIR |
| Balance | Static check, or measured torque variation | Application dependent |
| Swept clearance | Physical dry run at every angle, slowly | No contact |
| Clamp force | Load cell in place of the part | ≥ specified per clamp |

`[PRACTICE]` The slow physical dry run at every angle, before the first cut, is not optional on a
rotary fixture. Simulation is good; a collision at a rotary extreme is expensive.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Sizing clamps for the **0° orientation only** | Part releases when tipped or inverted |
| 2 | Checking only the **inverted** case, not the on-side case | Under-sized for the case that actually governs |
| 3 | **Non-fail-safe clamping** on inverted work | Part released on air loss — a safety event |
| 4 | Checking mass but **not inertia** | Rotary drive overloaded; positioning error |
| 5 | Mounting parts at a **large radius** | Inertia goes with r²; error goes with r |
| 6 | Accepting the rotary spec in **arc-seconds** without converting | Accuracy shortfall discovered in production |
| 7 | Checking the envelope at **0° only** | Fixture fouls the trunnion at an intermediate angle |
| 8 | Forgetting the **rotary unit's own height** in the Z budget | Tool cannot reach |
| 9 | Not **clamping the rotary axis** before cutting | Worm drive carries the cutting torque; poor accuracy |
| 10 | Assuming a **C-axis table reaches the sides** | It does not; only an A-axis does |
| 11 | Ignoring **part datum to rotary axis** alignment | Error doubled between opposed features |
| 12 | **Unbalanced** fixture on continuous rotary work | Cyclic loading; drive wear; varying accuracy |
| 13 | Designing a pocket that **traps chips at one angle** and empties onto a locator at another | Intermittent scrap, very hard to diagnose |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Part moves during rotary machining | Clamp sized for the wrong orientation | Recalculate all three cases | Increase clamp force; fit positive stops | Check every orientation at design stage |
| Features 180° apart mismatched | Part datum axis offset from the rotary axis | Indicate the part datum while rotating | Re-align; add an alignment feature | Design an axis-alignment provision |
| Positional error grows with feature radius | Rotary angular error × radius | Convert arc-sec to mm at radius | Reduce mounting radius; recalibrate the axis | Convert at design stage |
| Rotary axis overheats or faults | Inertia exceeds rating | Compute J from CAD mass properties | Reduce mass or radius | Check inertia, not just mass |
| Collision at an intermediate angle | Swept envelope not checked | Simulate at 15° intervals | Reduce fixture size; reposition | Full-range simulation |
| Intermittent height error | Chips trapped at one angle, released at another | Observe at each angle | Redesign pockets | Design for chip clearance at all angles |
| Poor finish, chatter, only in some positions | Cantilever stiffness varies with angle | Measure deflection at several angles | Reduce overhang | Keep the work close to the rotary face |
| Accuracy worse than the rotary catalogue figure | Axis not clamped when cutting | Check the programme for clamp commands | Add clamp/unclamp | Confirm at process review |

### 23. Design checklist
- [ ] Have I checked the clamping requirement at **0°, 90° and 180°** and identified which governs?
- [ ] Is the clamping **fail-safe** if the part is ever inverted?
- [ ] Have I checked both the **mass rating and the inertia rating**?
- [ ] Is **J computed from CAD mass properties**, not estimated?
- [ ] Are the parts mounted at the **smallest practicable radius**?
- [ ] Have I converted the rotary **arc-second** specification into **mm at the working radius**?
- [ ] Have I simulated the **swept envelope at every angle**?
- [ ] Is the **rotary unit's height** included in the Z budget, at every angle?
- [ ] Does the programme **clamp the rotary axis** before cutting?
- [ ] Is the part's **datum axis aligned with the rotary axis**, and is the alignment verifiable?
- [ ] Is the fixture reasonably **balanced** about the axis?
- [ ] Have I designed so that **no angle traps chips** onto a locator?
- [ ] Are **mass, inertia and minimum clamp force stated on the drawing**?
- [ ] Have I minimised **overhang** from the rotary mounting face?
- [ ] Have I planned a **slow physical dry run** at every angle?

### 24. Beginner exercise
**E1.1.3-B** — A rotary table has a positioning accuracy of 25 arc-seconds.
(a) Convert this to radians.
(b) Calculate the resulting linear error at radii of 60 mm, 180 mm and 400 mm.
(c) A feature at 180 mm radius has a positional tolerance of ±0.03 mm. Comment on whether the rotary
axis is adequate.
(d) State the axis names for rotation about X, Y and Z.
(e) Explain in one sentence why a C-axis rotary table on a VMC does not solve the side-face access
problem.

### 25. Intermediate exercise
**E1.1.3-I** — A 26 kg part is mounted on a 4-axis A-axis fixture and is machined at 0°, 90° and 180°.
The cutting force is 1,400 N, the pull-off component is 0.4 of the cutting force, μ = 0.16, there are
three clamps, and the safety factor is 3.0.
(a) Calculate the total clamp force required at each of the three orientations.
(b) State which orientation governs and by what margin over the 0° case.
(c) Recalculate the governing case assuming coolant reduces μ to 0.08, and comment.
(d) A positive stop is fitted to resist the cutting force directly. Recalculate the governing clamp
requirement and state the reduction factor.
(e) Explain why fitting the positive stop changes which orientation governs.

### 26. Advanced exercise
**E1.1.3-A** — A five-axis trunnion machine is to run a six-station fixture. Rotary unit ratings: max
workpiece mass 200 kg, max inertia 12 kg·m², A-axis positioning 12 arc-sec, C-axis positioning 10
arc-sec, repeatability 5 arc-sec each, height added 240 mm. The fixture block is 70 kg with an effective
radius of 0.13 m. Six parts of 14 kg each are mounted at 0.21 m radius. The maximum feature radius from
the A axis is 0.29 m. Machine spindle-nose-to-table 180–720 mm, BT40 holder 105 mm, longest tool
projection 120 mm, clearance 25 mm. Part height 85 mm. Cutting force 1,100 N, pull-off factor 0.5,
μ = 0.15, two clamps per part, SF = 3.0. Feature positional tolerance ±0.04 mm.
(i) Perform the mass and inertia checks and state the utilisation of each.
(ii) Calculate the Z budget and state whether the setup is feasible.
(iii) Calculate the clamp force required per part at 0°, 90° and 180°, and identify the governing case.
(iv) Convert the combined A-axis angular error to millimetres at the maximum feature radius and
determine the fraction of tolerance consumed.
(v) Assuming machine, tooling and measurement consume a further 0.042 mm, determine the remaining
fixture allowance and comment on viability.
(vi) The proposal is to increase from six to eight parts by moving them to 0.28 m radius. Recompute the
inertia and the angular error, and state whether the change is acceptable.
(vii) Explain, with reference to your figures, why increasing the mounting radius is a worse decision
than it first appears, and propose an alternative way to increase capacity.
(viii) Write the safety requirements you would place on the drawing for this fixture.

### 27. Interview questions
1. *"What changes about fixture design when you move from a 3-axis VMC to a 4-axis rotary setup?"*
   **Answer:** The biggest change is that gravity no longer helps in a fixed way. On a VMC the weight
   and the axial cutting force always press the part onto its locators, so the seating is
   self-maintaining. On a rotary axis the part gets tipped on its side and often inverted, so the
   clamping has to hold it in every orientation, and the case that governs is not always obvious —
   sometimes it is the on-side case where friction has to carry the weight, sometimes the inverted case
   where the clamps oppose the weight directly. The swing between best and worst is twice the part
   weight. Beyond that, the fixture becomes a cantilever rather than something sitting on a big flat
   table, so stiffness drops; mass and inertia now count against the rotary drive's rating, and inertia
   goes with radius squared so mounting position matters a lot; and the clearance check becomes a swept
   envelope check through the whole rotation rather than a static check. And there is a safety
   dimension that a VMC fixture does not have — a part released from an inverted rotary fixture at
   speed is dangerous, so the clamping has to be fail-safe.
2. *"A rotary table is specified at 15 arc-seconds positioning accuracy. Is that good?"*
   **Answer:** It depends entirely on the working radius, and that is the point of the question.
   Fifteen arc-seconds is about 7.3 × 10⁻⁵ radians. At a 50 mm radius that is 0.004 mm, which is
   excellent. At 300 mm it is 0.022 mm, which will consume a serious fraction of a tight tolerance. At
   600 mm it is 0.044 mm, which will fail most precision work outright. So the specification alone
   tells you nothing until you multiply it by the radius of the outermost feature you care about. That
   conversion is one of the first things I would do when assessing a rotary application, and it is also
   an argument for keeping the work close to the axis — which conveniently also reduces the inertia,
   since that goes with radius squared.

### 28. Expert questions
1. *"You're offered a table-table trunnion 5-axis machine and a head-head 5-axis machine for the same
   job. From a fixture designer's point of view, how do you choose?"*
   **Answer:** The question I would ask first is **how heavy and how large the part is**, because that
   usually settles it before anything else.
   On a **table-table trunnion**, the workpiece and the fixture are carried by the rotary axes, so they
   are limited by the trunnion's mass rating and — more restrictively — its inertia rating. Inertia
   scales with radius squared, so a large fixture hits the inertia limit long before it hits the mass
   limit. If the part is heavy or wide, the trunnion is simply out. Against that, the trunnion keeps
   the spindle simple and vertical, which means a stiffer, more accurate spindle, and for small
   precision work it is generally the better machine.
   On a **head-head**, the tool carries both rotary axes and the part sits flat on a stationary table.
   From my point of view that is enormously simpler: gravity behaves exactly as on a VMC, the part
   never inverts, clamping stops being safety-critical, the fixture sits on a large flat surface rather
   than cantilevering off a trunnion face, and mass is essentially unlimited. The cost is a heavier,
   less stiff spindle head and a more expensive machine.
   So my decision logic is: **small and light and precise → trunnion; large or heavy → head-head.**
   But I would add two things. First, the trunnion's inversion requirement is a real ongoing operational
   burden, not just a design one — fail-safe clamping, higher clamp forces, safety checks, and an
   operator who must never run it with a clamp missing. If the job is going to run for years, that
   burden has a cost. Second, the trunnion's swept envelope constrains the fixture severely; a design
   that would be trivial on a flat table becomes an exercise in avoiding the trunnion casting at
   extreme tilts. I have seen good four-station concepts die on that check alone.
   And I would resist the assumption that 5-axis means continuous 5-axis. Most 5-axis work is 3+2
   indexed — rotate, clamp the axes, machine in three axes. If that is the case here, then the accuracy
   argument for the trunnion weakens somewhat, because the axes are clamped during cutting anyway, and
   the practical advantages of head-head become more attractive.
2. *"Explain why keeping the workpieces close to the rotary axis is such an important design principle."*
   **Answer:** Because **one design decision affects three different things, and it affects the most
   dangerous one quadratically.**
   The first is **inertia**. Mass moment of inertia goes as `m r²`, so mounting radius is squared. In
   the worked example, moving parts from 165 mm to 320 mm radius — less than doubling — took the
   inertia from 1.03 to 3.89 kg·m², nearly four times. That is the difference between 29% of the rotary
   unit's rating and 86% of it. Exceeding the inertia rating does not produce a polite warning; it
   produces positioning errors, drive faults and accelerated wear, and it is the check people most
   often skip because they checked mass and mass looked fine.
   The second is **angular error amplification**. Linear error is angular error times radius, so the
   same rotary axis that is excellent at 50 mm is marginal at 300 mm. Moving the work inward improves
   the achievable accuracy on exactly the same machine, at no cost.
   The third is **stiffness**. A fixture on a rotary axis is a cantilever, and deflection goes with
   length cubed from L0.3.4. Mass carried far from the rotary face is mass on the end of a long lever,
   and both the static deflection and the dynamic behaviour suffer.
   What makes this a genuinely useful principle rather than an obvious one is that the three effects
   pull in the same direction, which is unusual — most engineering choices are trade-offs. Here,
   bringing the work inward improves dynamics, accuracy and stiffness simultaneously. The only thing
   it costs is capacity, because you cannot fit as many parts close to the axis.
   And that trade-off is where the real judgement lies. When someone asks for more parts per cycle, the
   instinctive answer is to mount them further out, and that is the wrong instinct — it is the one
   change that degrades all three properties at once. The better answers are to make the parts smaller
   in their mounting footprint, to use a longer block along the rotary axis rather than a wider one
   across it, since length along the axis costs almost no inertia, or to accept fewer parts per cycle
   and run more cycles. **Extend along the axis, not away from it** is the practical form of the rule.

### 29. Summary
Rotary axes are named A, B and C for rotation about X, Y and Z respectively, and they exist principally
to solve the VMC's fundamental limitation of top-only access. A 4-axis A-axis rotary table reaches four
sides of a part in one setup; a C-axis table on a VMC indexes but does not solve side access. Five-axis
machines come in two architectures with very different fixture consequences: table-table trunnions carry
the work on both rotary axes, giving a stiff spindle and good accuracy but severe mass and inertia
limits and a part that tips and inverts; head-head machines carry both rotary axes on the tool, so the
part stays flat and gravity behaves as on a VMC, at the cost of a heavier head and a higher price. The
governing fixture principle is that when the part rotates gravity does not, so clamping must hold in
every orientation — the on-side case where friction must carry the weight, and the inverted case where
the clamps oppose it directly, with a swing of 2W between best and worst — and which case governs
depends on the ratio of part weight to cutting force, so all must be checked. Clamping on rotary work is
safety-critical and must be fail-safe. Mass and inertia both count against the rotary unit's rating and
inertia binds first because it scales with radius squared; the rotary axis contributes its own error,
which becomes significant once arc-seconds are multiplied by the working radius; and the clearance check
becomes a swept envelope simulation through the full range of rotation. Keeping the work close to the
rotary axis improves dynamics, accuracy and stiffness simultaneously — one of the few design moves with
no trade-off other than capacity.

### 30. Key takeaways
- **When the part rotates, gravity does not.** Check 0°, 90° and 180°; the swing is **2W**.
- Which orientation governs depends on the **weight-to-cutting-force ratio**. Check all of them.
- **Rotary clamping is safety-critical.** Use fail-safe clamping for inverted work.
- **Inertia binds before mass**, and `J = m r²` — mounting radius is squared.
- **Angular error × radius** is the accuracy term people forget: `e = r × arcsec × 4.848×10⁻⁶`.
- **Keep the work close to the axis** — it improves inertia, accuracy and stiffness together.
- **Extend along the rotary axis, not away from it**, when capacity must increase.
- **Simulate the swept envelope at every angle**, and do a slow physical dry run.
- A **C-axis table on a VMC does not reach the sides**; only an A-axis does.
- **If the part tips you have a gravity problem; if only the tool tips you do not.**
- **Clamp the rotary axis** before cutting, and include the rotary unit's height in the Z budget.

---

## LESSON L1.1.4 — THE HORIZONTAL MACHINING CENTRE

### 1. Lesson title
**L1.1.4 — Horizontal spindle, pallets and pallet changers, tombstones, B-axis indexing and chip fall-away**

### 2. Learning objective
By the end of this lesson you will be able to describe the HMC configuration and explain why it exists,
state the consequences of a horizontal spindle for gravity, chip evacuation and part loading, describe
pallet and pallet-changer operation and its effect on productivity, explain tombstone construction and
loading strategy, and identify the specific fixture design requirements that distinguish HMC fixtures
from VMC fixtures.

### 3. Prerequisites
L1.1.2 (VMC), L1.1.3 (rotary axes), L1.1.1 (machine architecture), L0.3.3 (friction).

### 4. Why the topic matters
The HMC is the production machine. Where a VMC is the general-purpose machine that a shop buys first,
an HMC is what a shop buys when volume justifies it. Understanding it is essential for two reasons.

**First, HMC fixtures are a distinct discipline.** The horizontal spindle inverts the VMC's bargain
entirely:

```
   VMC                          HMC
   ────────────────────────     ────────────────────────
   Gravity SEATS the part       Gravity acts ALONG the
   onto the locating face       locating face — the part
   ✓ helps                      will FALL OFF unclamped
                                ✗ hurts

   Chips FALL INTO the          Chips FALL AWAY from
   fixture and stay             the cut, by gravity
   ✗ the VMC's weakness         ✓ the HMC's great strength

   Access from ABOVE only       Access to 4 SIDES via
   ✗ needs extra setups         B-axis indexing
                                ✓ one setup
```

**Second, the HMC is where the economics change.** A pallet changer allows the operator to load the
next set of parts while the machine cuts the current set, so spindle utilisation rises dramatically. A
tombstone multiplies the parts per cycle. The fixture designer's decisions on an HMC have a much larger
effect on output than on a VMC — and correspondingly, a poor HMC fixture wastes a much more expensive
machine.

The one hard truth to absorb up front: **on an HMC, if the clamps fail, the part falls out.** There is
no gravity assist. That single fact governs HMC fixture design.

### 5. Simple explanation
An HMC has a spindle that points **sideways**, horizontally, at a part standing on a rotating table.

```
    VMC — spindle down       HMC — spindle sideways

          │                        ┌──────┐
          ▼ tool                   │ PART │
     ┌────────┐            tool ◄──┤      │
     │  PART  │                    │      │
     └────────┘                    └──┬───┘
     ══════════                    ═══[B]═══
```

Because the spindle points sideways:
- **Chips fall away** from the cut, straight down and out of the machine — the HMC's biggest advantage
- **Gravity does not hold the part on** — it acts sideways along the locating face, so the clamps do
  all the work
- The table rotates (**B axis**), so the tool can reach **four sides** in one setup
- Parts are often mounted on a **tombstone** — a tall block with parts on all four faces
- The whole tombstone sits on a **pallet** that can be swapped out, so the operator loads the next
  batch while the machine cuts

### 6. Engineering explanation

**THE HMC CONFIGURATION**

```
          HORIZONTAL MACHINING CENTRE

    ┌────────┐
    │ SPINDLE│═══► tool          ┌──────────┐
    │  HEAD  │          ┌────────┤ TOMBSTONE│
    └───╥────┘          │        │  ┌────┐  │
        ║ Y (up-down)   │  PART ─┼──┤PART│  │
    ════╩════           │        │  └────┘  │
     COLUMN             └────────┴────╥─────┘
                              ⟲ B     ║
                        ══════════════╩══════
                              PALLET
                        ═════════════════════
                              BASE / SADDLE
                              (X and Z)

    AXES:  X  horizontal, across
           Y  vertical (spindle head up/down)
           Z  horizontal, along the spindle (in/out)
           B  rotation of the pallet about the
              VERTICAL axis

    NOTE: On an HMC, Y IS THE VERTICAL AXIS and Z is
    horizontal. This catches people used to VMCs, where
    Z is vertical. THE Z AXIS IS ALWAYS ALONG THE
    SPINDLE, whatever direction that points.
```

> **Z is always along the spindle axis.** That is the rule, and it is why Z is vertical on a VMC and
> horizontal on an HMC. Everything else follows from it.

**WHY THE HMC EXISTS — THE THREE ADVANTAGES**

**1. Chip fall-away.** This is the fundamental reason horizontal machining exists.

```
   VMC — chips fall INTO the work    HMC — chips fall AWAY

        │ tool                            tool
        ▼                            ═══►│
   ▒▒┌────────┐▒▒                    ┌───┴────┐
   ▒▒│  PART  │▒▒                    │  PART  │
   ▒▒└────────┘▒▒                    └────────┘
   ▒▒▒▒FIXTURE▒▒▒                     ║ ▒▒▒▒ ║ chips
   ═════════════                      ║  ▼▼  ║ fall
   chips ACCUMULATE                   ║ ▒▒▒▒ ║ straight
                                    ══╩══════╩══ down
                                      CONVEYOR
```

The consequences are large and they compound:
- **No re-cutting of chips**, which is a main cause of premature tool wear in deep pockets
- **Better surface finish**, since chips are not dragged across the machined surface
- **Longer tool life** `[GUIDE]` — improvements are commonly reported on deep cavity work, but the
  actual figure depends heavily on material and operation and must be established for the specific
  application
- **Deep pockets and cavities become practical**, which they often are not on a VMC
- **No chip traps to design around** — the fixture designer's job is genuinely easier in this respect
- **Cast iron and other dry-machined materials** work well, because chips simply fall

> **For deep-cavity work in cast iron or steel, chip evacuation alone can justify the HMC.** This is
> not a marginal advantage; it is often the difference between a process that works and one that does
> not.

**2. Four-sided access via B-axis indexing.**

The pallet rotates about a vertical axis, so the tool reaches four faces of a part — or four faces of a
tombstone — in a single setup. This eliminates the multi-setup tolerance stack that L1.1.2 identified as
the VMC's fundamental limitation.

`[GUIDE]` Most HMC work is **indexed at 90° intervals**, using four faces. Continuous contouring on the
B axis is possible on machines with a continuous B, but the majority of production HMC work is
4-position indexing.

**3. Pallet changers and spindle utilisation.**

```
   WITHOUT A PALLET CHANGER

   ├─cut 8 min─┤├─load 4 min─┤├─cut 8 min─┤├─load 4 min─┤
   Spindle utilisation = 8/12 = 66.7 %

   WITH A PALLET CHANGER (load happens in parallel)

   ├──── cut 8 min ────┤├─swap 0.3─┤├──── cut 8 min ────┤
        (operator loads the other pallet meanwhile)
   Spindle utilisation = 8/8.3 = 96.4 %

   IMPROVEMENT = 96.4/66.7 = 1.45×
   → 45 % MORE PARTS FROM THE SAME MACHINE
```

`[GUIDE]` The improvement is largest when load time is a large fraction of cut time. For long cycles
the benefit shrinks; for short cycles with fiddly loading it can be dramatic. This is a calculation a
fixture designer should be able to do, because it justifies fixture investment.

**Pallet pool systems** extend this further: six, twelve or more pallets on a carousel or rail, loaded
during the day and machined unattended overnight. This is how an HMC becomes a "lights-out" machine, and
it puts a heavy premium on fixture reliability — a fixture that needs occasional operator intervention
destroys the entire concept.

**THE TOMBSTONE**

```
        TOMBSTONE — parts on 4 faces

           ┌───────────┐
           │ ┌──┐ ┌──┐ │   FACE 1 (B=0°)
           │ │P1│ │P2│ │
           │ └──┘ └──┘ │
           │ ┌──┐ ┌──┐ │
           │ │P3│ │P4│ │
           │ └──┘ └──┘ │
           └─────╥─────┘
             ════╩════ pallet, rotates B

     4 faces × 4 parts = 16 PARTS PER CYCLE

     Common forms:
       SQUARE   4 faces, most common
       RECTANGULAR  2 wide faces + 2 narrow
       ANGLED / MULTI-FACE  6 or 8 faces
       CYLINDRICAL  continuous mounting

     Materials [PRACTICE]:
       Cast iron — best damping, most common
       Fabricated steel — lighter, cheaper for one-offs,
         MUST BE STRESS RELIEVED (L0.5.3)
       Aluminium — light, for lighter cuts
```

| Consideration | Requirement | Reason |
|---|---|---|
| **Stiffness** | Height-to-base ratio limited | It is a cantilever from the pallet; L0.3.4's L³ applies |
| **Mass** | Within pallet/B-axis rating | And it counts against indexing inertia |
| **Balance** | Symmetrical loading preferred | Unbalanced tombstones load the B axis cyclically |
| **Access** | Tool must reach the lowest part | Spindle Y travel limits how low it can go |
| **Coolant and services** | Routed through the pallet | Hydraulic or pneumatic clamping needs a rotary union |
| **Chip clearance** | Nothing that catches falling chips | Even on an HMC, a horizontal ledge is a chip shelf |
| **Loading ergonomics** | Operator must reach every station | At the load station, not in the machine |

> **Height matters more than you expect.** A tombstone is a cantilever from the pallet face, and from
> L0.3.4 deflection goes with L³. A tombstone twice as tall is eight times less stiff at the top, which
> is why the top stations of a tall tombstone often produce worse finish than the bottom ones.
> `[PRACTICE]` If a tall tombstone is unavoidable, put the most demanding operations on the lowest
> stations.

**THE GRAVITY PROBLEM — THE HMC'S ONE GREAT DISADVANTAGE**

```
   ON AN HMC, GRAVITY ACTS ALONG THE LOCATING FACE

        ┌─────────────┐
        │             │  ◄── locating face is VERTICAL
        │    PART     │
        │             │      W ↓  weight acts DOWNWARD,
        └─────────────┘           PARALLEL to the face
        ▓▓▓ TOMBSTONE ▓▓▓
             FACE

   THE PART IS HELD ON BY:
     - clamping force × friction        (the main mechanism)
     - a physical support ledge         (STRONGLY PREFERRED)

   ✗ IF THE CLAMPS FAIL, THE PART FALLS.
   ✗ THE OPERATOR MUST HOLD THE PART WHILE CLAMPING.
```

Four requirements follow that a VMC fixture does not have:

**1. A support ledge or rest is close to mandatory.** `[PRACTICE]` Relying on friction alone to carry
the part's weight is poor practice on an HMC. A ledge, shelf or bottom locator that physically carries
the weight means the clamps only resist cutting forces, and the part cannot fall if a clamp is released.
This is the L0.3.3 principle — **fit a positive stop** — applied to gravity itself.

**2. Loading is harder.** The operator must present the part to a vertical face and hold it while the
clamp engages. For a 15 kg part this is genuinely difficult and is a real ergonomic and safety concern.
Design responses `[PRACTICE]`: a support ledge the part rests on during loading; a locating pin the part
hangs on; a spring-loaded pre-clamp; lifting assistance for heavy parts; and load-station positioning
that lets the operator work at a sensible height.

**3. Clamping must be reliable and ideally self-holding.** For unattended running, hydraulic clamping
with an accumulator or mechanical locking is preferred over plain pneumatic, so a pressure loss does not
release parts. `[PRACTICE]` Where hydraulics are routed through the pallet, a rotary union and a
pressure-monitoring interlock are standard.

**4. Part weight adds to the cutting force in one direction.** When the cut acts downward, the weight
adds; when it acts upward, it subtracts. The governing case must be identified, exactly as with rotary
work in L1.1.3.

**PALLETS AND THE PALLET INTERFACE**

| Feature | Purpose | Fixture consequence |
|---|---|---|
| **Pallet locating cones/pins** | Repeatable pallet position | Repeatability typically 0.005 mm `[MFR]` |
| **Pallet clamping (hydraulic)** | Holds the pallet to the receiver | Verify the mass rating |
| **T-slots or tapped grid** | Fixture mounting | Design the tombstone base to match |
| **Coolant/air/hydraulic ports** | Services to the fixture | Limited number; plan them |
| **Pallet ID / chip** | Machine knows which pallet is loaded | Offsets can be pallet-specific |

`[MFR]` Pallet-to-pallet repeatability is a manufacturer specification, typically of the order of
0.005 mm. It is excellent, but it is not zero, and on a multi-pallet system it becomes part of the error
budget for any feature whose tolerance is tight.

**THE HMC OFFSET PICTURE**

An HMC with a tombstone requires many work offsets — four faces times several stations per face. This is
the direct motivation for the extended work offsets covered in L1.2.2 and the offset-table exercise in
L1.2.4. A 16-station tombstone needs 16 offsets, which exceeds the six available in G54–G59 and requires
G54.1 P1–P48 or equivalent.

**WHEN TO CHOOSE AN HMC** `[PRACTICE — guidance]`

| Condition | Indication |
|---|---|
| High volume, repetitive | **HMC** — pallet changer pays back |
| Deep pockets or cavities | **HMC** — chip evacuation is decisive |
| Features on 4 sides | **HMC** — one setup |
| Cast iron, heavy stock removal | **HMC** — chips fall, good damping |
| Prismatic housings, valve bodies, blocks | **HMC** — the classic application |
| Low volume, varied work | **VMC** — HMC setup cost not justified |
| Large flat plates | **VMC** — awkward to mount vertically |
| Very heavy single parts | **VMC or horizontal boring machine** |
| Simple top-face work only | **VMC** — the HMC advantage goes unused |

### 7. Terminology

| Term | Definition |
|---|---|
| **HMC** | Horizontal machining centre — spindle axis horizontal |
| **B axis** | Rotation of the pallet about the vertical axis |
| **Pallet** | Removable table carrying the fixture, exchanged as a unit |
| **Pallet changer (APC)** | Automatic mechanism exchanging pallets |
| **Pallet pool** | Multiple pallets on a carousel or rail for unattended running |
| **Load station** | Position outside the machine where the operator loads a pallet |
| **Tombstone** | Tall block on a pallet carrying parts on several faces |
| **Station** | One part position on a tombstone |
| **Support ledge / rest** | Feature physically carrying the part's weight on a vertical face |
| **Rotary union** | Coupling passing hydraulics or air through a rotating pallet |
| **Chip fall-away** | Chips falling clear of the cut by gravity — the HMC's key advantage |
| **Spindle utilisation** | Fraction of available time the spindle is actually cutting |
| **Lights-out** | Unattended machining, typically overnight |
| **Extended work offsets** | G54.1 P1–P48 or equivalent; offsets beyond G54–G59 |

### 8. Principle

> **THE HMC INVERTS THE VMC'S BARGAIN: CHIPS FALL AWAY, BUT SO DOES THE PART.**
> Chip fall-away is the fundamental reason horizontal machining exists — no re-cutting, better finish,
> longer tool life, and deep cavities become practical.
> The price is that **gravity acts along the locating face and contributes nothing to holding the
> part**. If the clamps fail, the part falls.
> **Therefore: fit a support ledge that physically carries the part's weight.** This is the L0.3.3
> positive-stop principle applied to gravity. The clamps should resist cutting forces, not weight.
> A tombstone is a **cantilever from the pallet** — `L³` applies, so put the demanding operations on
> the lowest stations.

### 9. Industrial application

**Justifying an HMC fixture investment — the calculation that wins the argument**

```
SCENARIO [EX-ASSUMED figures for illustration]

  Part: cast iron valve body
  Annual volume: 24,000
  Current process: VMC, 2 setups

  VMC PROCESS
    Setup 1 cut time            = 6.5 min
    Setup 2 cut time            = 4.0 min
    Load/unload, 1.5 × 2        = 3.0 min
    Total per part              = 13.5 min
    Spindle utilisation         = 10.5/13.5 = 77.8 %
    Machine hours/year          = 24000 × 13.5/60 = 5,400 h

  HMC, 4-station tombstone, pallet changer
    Cut time per part (1 setup) = 8.2 min
    4 parts per pallet          = 32.8 min per pallet
    Pallet swap                 = 0.3 min
    Load 4 parts (in parallel)  = 6.0 min — HIDDEN
    Cycle per pallet            = 33.1 min
    Per part                    = 8.275 min
    Spindle utilisation         = 32.8/33.1 = 99.1 %
    Machine hours/year          = 24000 × 8.275/60 = 3,310 h

  SAVING = 5,400 − 3,310 = 2,090 machine hours/year

  At an assumed machine rate of ₹1,800/h [EX-ASSUMED]:
    = 2,090 × 1,800 = ₹3,762,000 per year

  PLUS the eliminated setup-to-setup tolerance stack,
  which consumed 44 % of the positional tolerance in
  the L1.1.2 example.

  AGAINST:
    Tombstone fixture      ≈ ₹450,000  [EX-ASSUMED]
    (versus 2 VMC fixtures ≈ ₹180,000)
    Incremental cost       ≈ ₹270,000

  PAYBACK on the incremental fixture cost:
    270,000 / 3,762,000 × 12 = 0.86 months
```

> **All figures above are `[EX-ASSUMED]` for teaching.** Real machine rates, cut times and fixture
> costs must come from the company's own data. But the *structure* of the argument is exactly what a
> fixture designer should be able to produce, and it is how fixture investment gets approved. Note the
> calculation excludes the cost of the HMC itself — it compares fixture options on a machine already
> available.

**Where HMC fixtures go wrong in practice**

| Failure | Root cause | Prevention |
|---|---|---|
| Part falls during loading | No support ledge; operator holding it | Design a rest the part sits on |
| Parts released on air failure | Pneumatic clamping, no fail-safe | Hydraulic with accumulator, or mechanical lock |
| Top stations finish worse | Tombstone cantilever deflection | Demanding ops on low stations; limit height |
| Chips build up on the fixture | A ledge or flat top | Slope everything; the advantage is not automatic |
| Lights-out run fails at part 3 of 40 | Fixture needed intervention | Design for zero-intervention running |
| Offsets confused between stations | 16 offsets, poor documentation | Rigorous offset table (L1.2.4) |
| Coolant floods the load station | Pallet carries coolant out | Drain the pallet; shroud the load station |

### 10. Design rules
- **R1** — **Fit a support ledge or rest that physically carries the part's weight.** Do not rely on
  friction to hold a part on a vertical face `[PRACTICE]`.
- **R2** — Size clamping for **cutting forces plus the worst-case weight contribution**, and identify
  which direction governs.
- **R3** — Use **fail-safe clamping** — hydraulic with an accumulator, or mechanical locking — for
  unattended running `[PRACTICE]`.
- **R4** — Keep the tombstone **as short as the station count allows**; deflection goes with L³.
- **R5** — Place the **most demanding operations on the lowest stations**.
- **R6** — Keep the tombstone **balanced** about the B axis.
- **R7** — Verify tombstone **mass and inertia** against the pallet and B-axis ratings.
- **R8** — **Slope every horizontal surface**; chip fall-away is an advantage of the machine, not
  automatically of the fixture.
- **R9** — Design loading so the operator can **present and release the part safely** at the load
  station.
- **R10** — Plan the **services through the pallet** — port count, rotary union, pressure monitoring.
- **R11** — Design for **zero operator intervention** if the machine runs lights-out.
- **R12** — Produce a **complete offset table** for every station (L1.2.4).
- **R13** — Confirm the spindle **Y travel reaches the lowest station** and Z reaches the furthest face.

### 11. Rules of thumb
- **Chips fall away, but so does the part.**
- **Z is always along the spindle** — horizontal on an HMC, so **Y is vertical**.
- A pallet changer typically lifts spindle utilisation from **~65–80% to >95%** `[GUIDE]`.
- **A support ledge is not optional** on a vertical locating face.
- Tombstone deflection goes with **height cubed** — demanding work goes low.
- Most HMC work is **4-position B indexing**, not continuous.
- Pallet repeatability is typically **~0.005 mm** `[MFR]` — excellent, not zero.
- **16 stations need extended offsets** — G54–G59 is only six.
- Deep pockets in cast iron: the HMC advantage is often **decisive, not marginal**.
- If it can catch a falling chip, **slope it**.

### 12. Formulae

**Spindle utilisation**
```
U = t_cut / t_cycle
```
**Without pallet changer:** `t_cycle = t_cut + t_load`
**With pallet changer:** `t_cycle = t_cut + t_swap` (loading runs in parallel, provided
`t_load ≤ t_cut`)

**Productivity improvement factor**
```
I = U_with / U_without
```

**Parts per cycle, tombstone**
```
n = faces × stations_per_face
```

**Clamp force on a vertical face (friction carrying weight — to be avoided)**
```
F_clamp ≥ (W + F_cut) × SF / (μ · n)
```

**Clamp force with a support ledge (preferred)**
```
F_clamp ≥ F_cut × SF / (μ · n)     [weight carried by the ledge]
```

**Tombstone tip deflection (cantilever, from L0.3.4)**
```
δ = F L³ / (3 E I)
```

**Hollow square second moment of area**
```
I = (B H³ − b h³)/12
```

| Variable | Meaning | Unit |
|---|---|---|
| U | Spindle utilisation | — |
| t | Time | min |
| W | Part weight | N |
| μ | Friction coefficient | — |
| n | Number of clamps | — |
| L | Station height above the pallet | mm |

### 13. Worked numerical example

**Problem:** A tombstone fixture is proposed for an HMC. Evaluate the clamping requirement with and
without a support ledge, calculate the productivity gain from the pallet changer, assess the tombstone
cantilever deflection, and check the pallet mass rating.

```
GIVEN:
  MACHINE AND PALLET                             [MFR]
    Max pallet load                = 700 kg
    Pallet repeatability           = 0.005 mm
    Pallet swap time               = 0.4 min
    B-axis indexing, 4 positions
    Spindle Y travel               = 700 mm

  TOMBSTONE (proposed)                           [PROJ]
    Square, 4 faces
    Height                         = 600 mm
    Cross-section, outside         = 320 × 320 mm
    Wall thickness (hollow)        = 40 mm
    Material                       = cast iron
    Mass                           = 310 kg
    Stations per face              = 3 (vertically)
    Top station centre height      = 520 mm
    Low station centre height      = 200 mm

  PARTS                                          [PROJ]
    Steel housing, each            = 6.8 kg
    Total parts                    = 4 faces × 3 = 12

  MACHINING                                      [PROJ]
    Cutting force, worst operation = 2,100 N
    Direction: worst case acts DOWNWARD
    Clamps per part                = 2
    μ, steel on hardened steel     = 0.16          [GUIDE]
    Safety factor                  = 2.5           [PRACTICE]
    Cut time per part              = 4.6 min
    Load time per part             = 1.1 min

  CAST IRON                                      [GUIDE]
    E                              = 120 GPa

REQUIRED:
  (a) Clamp force per part WITHOUT a support ledge
  (b) Clamp force per part WITH a support ledge
  (c) The reduction factor and its significance
  (d) Total pallet mass and utilisation
  (e) Spindle utilisation without and with the pallet
      changer, and the improvement factor
  (f) Tombstone second moment of area and deflection
      at the top station
  (g) Deflection at the low station and the ratio
  (h) Engineering conclusion

ASSUMPTION:
  1. μ = 0.16 for steel on hardened steel, dry, from
     the L0.3.3 band. If coolant reaches the clamping
     interface this approximately HALVES. [GUIDE]
  2. SF = 2.5, mid-band for fixture work. [PRACTICE]
  3. Worst-case cutting force assumed to act DOWNWARD,
     adding to the weight. This MUST BE CONFIRMED from
     the actual toolpath; an upward-acting cut would
     subtract. [GUIDE]
  4. Tombstone treated as a hollow square cantilever.
     This IGNORES pallet interface compliance and any
     base fillet, so real deflection will be LARGER.
     An FE check is appropriate before commitment.
     [PRACTICE]
  5. Load time 1.1 min/part; 12 parts = 13.2 min
     against 55.2 min of cutting, so loading fits
     comfortably within the cut and the pallet changer
     benefit is fully realised.
  6. E = 120 GPa, mid-band of L0.5.2's 100-140 GPa for
     cast iron. [GUIDE]
  7. Hardware 2.2 kg per station. [EX-ASSUMED]
  8. g = 9.81 m/s².

FORMULA:
  (a) F ≥ (W + F_cut) × SF / (μ n)
  (b) F ≥ F_cut × SF / (μ n)
  (e) U = t_cut / t_cycle
  (f) I = (B H³ − b h³)/12 ;  δ = F L³/(3 E I)

UNIT CONVERSION:
  W = 6.8 × 9.81 = 66.708 N  → use 66.7 N
  E = 120 GPa = 120,000 N/mm²
  All lengths mm, forces N.

SUBSTITUTION AND CALCULATION:

  (a) CLAMP FORCE WITHOUT A SUPPORT LEDGE

      Friction must carry BOTH the weight and the
      cutting force:

        Total load = W + F_cut
                   = 66.7 + 2100
                   = 2,166.7 N

        F_clamp ≥ 2166.7 × 2.5 / (0.16 × 2)
                = 5,416.75 / 0.32
                = 16,927 N total per part
                = 8,464 N per clamp

  (b) CLAMP FORCE WITH A SUPPORT LEDGE

      The ledge carries the weight directly; the clamps
      resist only the cutting force:

        F_clamp ≥ 2100 × 2.5 / (0.16 × 2)
                = 5,250 / 0.32
                = 16,406 N total per part
                = 8,203 N per clamp

  (c) REDUCTION FACTOR

        16,927 / 16,406 = 1.0318

      → ONLY A 3.2 % REDUCTION.

      ⚠ AN IMPORTANT AND SLIGHTLY SURPRISING RESULT.
        The ledge barely reduces the clamp force,
        because the part weight (66.7 N) is small
        against the cutting force (2,100 N) — the
        weight is only 3.1 % of the total load.

      SO WHY FIT THE LEDGE?
        NOT for the force. FOR THE FAILURE MODE.
        Without a ledge, a clamp failure means the part
        FALLS. With a ledge, a clamp failure means the
        part STAYS PUT, merely unrestrained against
        cutting force.
        And during LOADING, before any clamp is applied,
        THE LEDGE CARRIES 100 % OF THE WEIGHT — which
        is the moment the operator most needs it.

  (d) PALLET MASS

      Tombstone                     = 310.0 kg
      Parts 12 × 6.8                =  81.6 kg
      Clamps and hardware 12 × 2.2  =  26.4 kg
      ──────────────────────────────────────────
      TOTAL                         = 418.0 kg

      Rating 700 kg
      Utilisation = 418/700 = 59.71 %      ✓ PASS
      Margin 282 kg — comfortable.

  (e) SPINDLE UTILISATION

      Cut time, 12 parts  = 12 × 4.6 = 55.2 min
      Load time, 12 parts = 12 × 1.1 = 13.2 min

      WITHOUT PALLET CHANGER:
        t_cycle = 55.2 + 13.2 = 68.4 min
        U = 55.2/68.4 = 0.80702 = 80.70 %

      WITH PALLET CHANGER:
        Loading (13.2) fits inside the cut (55.2).
        t_cycle = 55.2 + 0.4 = 55.6 min
        U = 55.2/55.6 = 0.99281 = 99.28 %

      IMPROVEMENT FACTOR:
        I = 0.99281/0.80702 = 1.2302

      → 23.0 % MORE PARTS FROM THE SAME MACHINE.

      Annual effect at 4,000 machine hours:
        Without: 4000 × 60/68.4 = 3,508.77 pallets
                 × 12 = 42,105 parts
        With:    4000 × 60/55.6 = 4,316.55 pallets
                 × 12 = 51,799 parts
        GAIN ≈ 9,694 parts/year

  (f) TOMBSTONE DEFLECTION AT THE TOP STATION

      Hollow square section:
        Outer B = H = 320 mm
        Wall 40 mm → inner b = h = 320 − 80 = 240 mm

        I = (320 × 320³ − 240 × 240³)/12
          = (320 × 32,768,000 − 240 × 13,824,000)/12
          = (10,485,760,000 − 3,317,760,000)/12
          = 7,168,000,000/12
          = 597,333,333 mm⁴

      At L = 520 mm, F = 2,100 N:
        3 E I = 3 × 120,000 × 597,333,333
              = 2.15040 × 10¹⁴

        δ = F L³/(3 E I)
          = 2100 × 140,608,000 / 2.15040×10¹⁴
          = 2.952768×10¹¹ / 2.15040×10¹⁴
          = 0.00137311 mm

        δ_top ≈ 0.00137 mm

  (g) LOW STATION (L = 200 mm) AND RATIO

        δ = 2100 × 8,000,000 / 2.15040×10¹⁴
          = 1.68×10¹⁰ / 2.15040×10¹⁴
          = 0.00007813 mm

        RATIO = 0.00137311/0.00007813 = 17.575

        Cube-law check: (520/200)³ = 2.6³ = 17.576 ✓

      → THE TOP STATION DEFLECTS 17.6× MORE THAN THE
        LOW STATION, EXACTLY AS L³ PREDICTS.

      BUT note the absolute magnitudes: both are well
      under 0.002 mm. This tombstone is very stiff and
      the height penalty, though a factor of 17.6, is
      not practically significant here.

RESULT:
  ┌──────────────────────────────────┬──────────────────┐
  │ (a) Clamp force, no ledge        │ 16,927 N/part    │
  │                                  │ 8,464 N/clamp    │
  │ (b) Clamp force, with ledge      │ 16,406 N/part    │
  │                                  │ 8,203 N/clamp    │
  │ (c) Reduction                    │ only 3.2 %       │
  │ (d) Pallet mass 418/700 kg       │ 59.7 %  ✓ PASS   │
  │ (e) Utilisation, no APC          │ 80.70 %          │
  │     Utilisation, with APC        │ 99.28 %          │
  │     Improvement                  │ 1.230× (+23.0 %) │
  │     Extra parts/year @ 4000 h    │ +9,694           │
  │ (f) I, hollow section            │ 5.973×10⁸ mm⁴    │
  │     δ top station (520 mm)       │ 0.00137 mm       │
  │ (g) δ low station (200 mm)       │ 0.0000781 mm     │
  │     Ratio                        │ 17.6× = 2.6³     │
  └──────────────────────────────────┴──────────────────┘

SAFETY FACTOR:
  SF = 2.5 applied to the clamping. For UNATTENDED
  running I would argue for a higher figure and for
  fail-safe clamping, because the consequence of a
  clamp failure during a lights-out run is not one
  scrapped part but a crashed machine discovered in
  the morning.

PASS/FAIL:
  ✓ PASS — pallet mass, at 60 % of rating.
  ✓ PASS — tombstone stiffness, under 0.002 mm at
    every station.
  ✓ PASS — productivity, 23 % improvement.
  ⚠ ACTION — 8,203 N per clamp is substantial and
    depends entirely on friction. Positive location
    against the cutting force should be investigated.

ENGINEERING CONCLUSION:
  1. THE SUPPORT LEDGE BARELY CHANGES THE FORCES —
     AND SHOULD BE FITTED ANYWAY.
     This is the most instructive result here. The
     ledge reduces the required clamp force by only
     3.2 %, because the part weighs 66.7 N against a
     2,100 N cutting force. Anyone justifying the ledge
     on force grounds would conclude it is not worth
     machining.
     THAT WOULD BE THE WRONG CONCLUSION. The ledge
     exists to change the FAILURE MODE and to make
     LOADING POSSIBLE. Without it, a clamp failure
     drops the part; with it, the part stays on the
     ledge. And during loading, before any clamp is
     applied, the ledge carries the entire weight —
     otherwise the operator holds a 6.8 kg part against
     a vertical face with one hand while operating a
     clamp with the other, twelve times per pallet.
     THE GENERAL LESSON: NOT EVERY FEATURE IS JUSTIFIED
     BY A FORCE CALCULATION. Some are justified by the
     failure mode, and some by the human being who has
     to use the fixture.

  2. FRICTION IS AGAIN CARRYING THE DESIGN.
     8,203 N per clamp is a large force, required only
     because the cutting force is resisted by friction.
     μ = 0.16 is doing all the work, and if coolant
     reaches the clamping faces it approximately halves
     — doubling the requirement to over 16,000 N per
     clamp, beyond most standard clamps.
     THE ANSWER IS THE SAME AS ALWAYS: FIT A POSITIVE
     STOP against the cutting force direction. On a
     tombstone this is easy — a machined step or a
     dowel in the mounting face. It should be the
     default, not an afterthought.

  3. THE PALLET CHANGER IS WORTH 23 % — AND THE
     TOMBSTONE IS WHY IT IS NOT MORE.
     Utilisation rises from 80.7 % to 99.3 %, nearly
     9,700 extra parts a year on a 4,000-hour machine.
     Note WHY the gain is "only" 23 %: the tombstone
     already carries 12 parts, so cut time per pallet
     (55.2 min) is long relative to load time
     (13.2 min) and utilisation was already high.
     THE TOMBSTONE AND THE PALLET CHANGER ARE PARTIALLY
     REDUNDANT PRODUCTIVITY MEASURES — each reduces the
     proportional impact of loading. With one part per
     pallet the changer would be worth far more. Worth
     understanding before promising a large gain from
     adding one to an already well-loaded tombstone.

  4. THE TOMBSTONE IS STIFF ENOUGH, AND THE L³ LAW IS
     STILL VISIBLE.
     The top station deflects 17.6 times more than the
     low station, exactly as (520/200)³ predicts — a
     clean demonstration of L0.3.4's cube law. But both
     figures are under 0.002 mm, so here the height
     penalty is academic. THE CUBE LAW MATTERS WHEN THE
     ABSOLUTE VALUES ARE LARGE; a 320 mm hollow cast
     iron section is simply very stiff. I would still
     put the most demanding operation low, because it
     costs nothing, but I would not redesign the
     tombstone shorter on these numbers.
     NOTE the assumption: this ignores pallet interface
     compliance, which on a real tombstone may well
     EXCEED the tombstone's own bending. An FE check
     including the mounting interface is appropriate.

SENSITIVITY NOTE:
  Ranked by influence:
    1. FRICTION COEFFICIENT — clamp force is inversely
       proportional to μ. The dominant and least
       reliable variable, and the argument for stops.
    2. CUTTING FORCE — linear, and 97 % of the load
       resisted. Its DIRECTION matters as much as its
       magnitude: an upward cut would SUBTRACT the
       weight rather than add it.
    3. RATIO OF LOAD TIME TO CUT TIME — governs the
       pallet changer benefit entirely.
    4. TOMBSTONE HEIGHT — cubed, but from a very small
       base. Significant only on a slender or taller
       tombstone, or with a softer mounting interface.
    5. PART WEIGHT — 3.1 % of the load here, but it
       would dominate for a heavy part with a light
       finishing cut, and it is 100 % of the load
       during manual loading.
```

### 14. Engineering assumptions
- μ = 0.16 dry `[GUIDE]`; approximately halves if coolant reaches the clamping interface.
- SF = 2.5, mid-band `[PRACTICE]`; a higher figure is argued for unattended running.
- Worst-case cutting force assumed to act downward, adding to weight `[GUIDE]` — confirm from the
  toolpath.
- Tombstone treated as a hollow square cantilever `[PRACTICE]`; ignores pallet interface compliance, so
  real deflection will be larger. FE check appropriate before commitment.
- E = 120 GPa for cast iron `[GUIDE]`, mid-band of L0.5.2's 100–140 GPa.
- Hardware mass 2.2 kg per station `[EX-ASSUMED]`.

### 15. Diagram

```
     THE HORIZONTAL MACHINING CENTRE
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  CONFIGURATION AND AXES

    ┌────────┐
    │SPINDLE │════► TOOL      ┌────────────┐
    │  HEAD  │   ┌────────────┤  TOMBSTONE │
    │   ▲Y   │   │  ┌────┐    │   ┌────┐   │
    │   │    │   │  │PART│    │   │PART│   │
    └───╨────┘   │  └────┘    │   └────┘   │
      COLUMN     └────────────┴─────╥──────┘
                        ⟲ B         ║
    ════════════════════════════════╩═══════
                    PALLET
    ════════════════════════════════════════
              SADDLE / BASE  (X and Z)

    X across · Y VERTICAL · Z ALONG THE SPINDLE
    B = pallet rotation about the vertical axis

   ┌──────────────────────────────────────────────┐
   │ Z IS ALWAYS ALONG THE SPINDLE.               │
   │ On a VMC that is vertical. On an HMC it is   │
   │ horizontal — SO Y BECOMES THE VERTICAL AXIS. │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE HMC BARGAIN — INVERTED FROM THE VMC

    VMC                        HMC
    ─────────────────────      ─────────────────────
       │ tool                       tool
       ▼                       ═══►│
   ▒▒┌──────┐▒▒                ┌───┴──┐
   ▒▒│ PART │▒▒  W↓            │ PART │  W↓
   ▒▒└──────┘▒▒                └──────┘   ║
   ▒▒FIXTURE ▒▒                ▓TOMBSTONE▓║ ▒▒
   ════════════                ══════════ ║ ▼▼ chips
   CHIPS STAY  ✗               CHIPS FALL ║ ▒▒  ✓
   GRAVITY SEATS ✓             GRAVITY DROPS ✗
     the part                    the part

   ┌──────────────────────────────────────────────┐
   │ CHIPS FALL AWAY — BUT SO DOES THE PART.      │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHY THE SUPPORT LEDGE IS NOT OPTIONAL

   ✗ WRONG — friction only        ✓ RIGHT — support ledge

     ┌──────────┐                   ┌──────────┐
   ═►│   PART   │                 ═►│   PART   │
     └──────────┘                   └──────────┘
     ▓▓TOMBSTONE                    ▓▓╔════════╗ ◄ LEDGE
                                      ╚════════╝
   Clamp fails → PART FALLS       Clamp fails → PART STAYS
   Loading: operator holds        Loading: part RESTS
     6.8 kg one-handed              while clamp engages

   ┌──────────────────────────────────────────────┐
   │ IN THE WORKED EXAMPLE THE LEDGE REDUCED THE  │
   │ CLAMP FORCE BY ONLY 3.2 %.                   │
   │ FIT IT ANYWAY. IT IS NOT A FORCE FEATURE —   │
   │ IT IS A FAILURE-MODE AND LOADING FEATURE.    │
   │                                              │
   │ NOT EVERY GOOD FEATURE IS JUSTIFIED BY A     │
   │ FORCE CALCULATION.                           │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE PALLET CHANGER — WHERE THE PRODUCTIVITY IS

   WITHOUT APC
   ├── cut 55.2 ──┤├ load 13.2 ┤├── cut 55.2 ──┤
   U = 55.2/68.4 = 80.7 %

   WITH APC  (operator loads the OTHER pallet)
   ├── cut 55.2 ──┤├0.4┤├── cut 55.2 ──┤
       ╰ load happens here, in parallel ╯
   U = 55.2/55.6 = 99.3 %

   IMPROVEMENT 1.23×  →  +9,694 parts/year @ 4000 h

   ┌──────────────────────────────────────────────┐
   │ THE GAIN IS LARGEST WHEN LOAD TIME IS A      │
   │ LARGE FRACTION OF CUT TIME. A WELL-LOADED    │
   │ TOMBSTONE HAS ALREADY CAPTURED MUCH OF IT.   │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE TOMBSTONE IS A CANTILEVER — L³ APPLIES

        ┌───────────┐  ── 520 mm  δ = 0.00137 mm
        │ ┌──┐ ┌──┐ │      TOP STATION
        │ └──┘ └──┘ │
        │ ┌──┐ ┌──┐ │  ── 360 mm
        │ └──┘ └──┘ │
        │ ┌──┐ ┌──┐ │  ── 200 mm  δ = 0.000078 mm
        │ └──┘ └──┘ │      LOW STATION
        └─────╥─────┘
        ══════╩══════ PALLET

     RATIO = 17.6  =  (520/200)³ = 2.6³ ✓

   ┌──────────────────────────────────────────────┐
   │ PUT THE MOST DEMANDING OPERATIONS ON THE     │
   │ LOWEST STATIONS. IT COSTS NOTHING TO DO.     │
   │                                              │
   │ (Here both values are tiny — the cube law    │
   │ bites when the ABSOLUTE values are large.)   │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example
An HMC tombstone assembly drawing carries information specific to the machine type:

```
NOTE 1: TOMBSTONE FOR PALLET TYPE xxx. TOTAL LOADED
        MASS 418 kg. VERIFY AGAINST PALLET RATING
        700 kg BEFORE ANY MODIFICATION.

NOTE 2: SUPPORT LEDGES ITEMS 8-19 CARRY THE WORKPIECE
        WEIGHT DURING LOADING AND IN THE EVENT OF
        CLAMP FAILURE. THEY ARE SAFETY FEATURES.
        DO NOT REMOVE OR MODIFY.

NOTE 3: STATION IDENTIFICATION AND WORK OFFSETS PER
        OFFSET TABLE, SHEET 4. FACE A = B0°,
        FACE B = B90°, FACE C = B180°, FACE D = B270°.

NOTE 4: HYDRAULIC CLAMPING VIA PALLET PORTS 1 AND 2.
        MINIMUM PRESSURE 45 bar. PRESSURE SWITCH
        INTERLOCK REQUIRED — MACHINE MUST NOT CYCLE
        BELOW MINIMUM PRESSURE.

NOTE 5: ALL UPWARD-FACING SURFACES SLOPED MIN 5°.
        NO HORIZONTAL LEDGES OTHER THAN THE SPECIFIED
        WORKPIECE SUPPORTS.
```

Note 2 is worth dwelling on. A support ledge looks like a minor machining detail, and someone rebuilding
the fixture later may well omit it to save time — the drawing note prevents that. **Marking safety
features as safety features on the drawing** is a habit worth forming.

### 17. CAD workflow
1. Insert the **pallet and machine reference model**
2. Build the tombstone with **station positions parametrically driven**, so changes propagate
3. Use **mass properties** for total mass and centre of gravity — check the CG is close to the B axis
4. **Rotate through B = 0°, 90°, 180°, 270°** and check tool access to every station
5. Model the **spindle Y travel limits** and confirm the lowest station is reachable
6. Model the **longest tool** and check reach to the furthest face at each B position
7. Check **chip fall paths** — look for any horizontal surface in a section view
8. Verify **operator reach** at the load station for every station, including the top ones
9. Route and check **hydraulic/pneumatic services** through the pallet ports
10. Generate the **offset table directly from CAD station coordinates** (L1.2.4)

`[PRACTICE]` Step 10 eliminates a whole class of errors. If the offset table is derived from the model
rather than typed by hand, station coordinates cannot drift out of agreement with the fixture.

### 18. GD&T application
Tombstone station-to-station relationships are controlled by **position** relative to the pallet
mounting datum. Full treatment at L21–L22; the preview:

```
STANDARD: ASME Y14.5-2018

Datum A = pallet mounting face of the tombstone
Datum B = pallet locating bore
Datum C = pallet locating slot / second bore

Each station's locating features are positioned
relative to |A|B|C|:

  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.02 Ⓜ │ A │ B │ C │       │
  └──────────────────────────────────┘

  MEANING: every station's locators lie within
  Ø0.02 mm of true position relative to the PALLET
  INTERFACE — which is what the machine's offsets are
  ultimately referenced to.

  THIS IS WHAT MAKES THE OFFSET TABLE VALID. If the
  stations are not accurately positioned relative to
  the pallet datums, offsets computed from CAD will
  not match reality.
```

### 19. Manufacturing method
Tombstone manufacture, following L0.5.3 principles:

1. **Cast** (cast iron) or **fabricate** (steel plate)
2. **Stress relieve** — mandatory for fabrications, 600 °C (L0.5.3); castings naturally or thermally
   aged
3. **Rough machine** the pallet interface and all faces
4. **Second stress relief** for fabrications if heavy stock was removed
5. **Finish machine the pallet interface first** — it becomes the manufacturing datum
6. **Finish machine all four faces and every station feature in as few setups as possible**, referenced
   to the pallet interface
7. Fit **hardened locating pins and pads**, then grind in position
8. Inspect station positions on a CMM relative to the pallet datums

`[PRACTICE]` Step 6 is the key. Every setup change during tombstone manufacture introduces error between
the faces, and it is exactly that inter-face relationship the offset table depends on. A tombstone
machined on a horizontal boring machine or on an HMC itself, using B-axis indexing, holds the four faces
in one setup and is markedly better than one machined face-by-face on a VMC.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Pallet interface flatness | Surface plate / CMM | 0.02 mm |
| Station locator position relative to pallet datums | CMM | ±0.02 mm |
| Face-to-face squareness | CMM | 0.03 mm over the face |
| Total mass | Weighing | Within pallet rating |
| CG offset from the B axis | CAD, verified by balance check | Minimised |
| Support ledge presence and height | Visual + height gauge | Per drawing — **safety item** |
| Clamp force per station | Load cell | ≥ specified |
| Hydraulic pressure interlock | Function test | Machine inhibits below minimum |
| Chip clearance | Dry run with observation | No accumulation |

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **No support ledge** on a vertical locating face | Part falls; loading is unsafe |
| 2 | Justifying the ledge by **force calculation** and omitting it | Wrong criterion; it is a failure-mode feature |
| 3 | **Pneumatic clamping without fail-safe** for unattended running | Parts released on pressure loss |
| 4 | **Horizontal surfaces** on the fixture | Chip fall-away is a machine advantage, not automatic |
| 5 | Tombstone **too tall and slender** | Top stations deflect; poor finish |
| 6 | **Unbalanced** tombstone | Cyclic B-axis loading |
| 7 | Machining tombstone faces in **separate setups** | Face-to-face error invalidates the offsets |
| 8 | Assuming **G54–G59 is enough** for 12–16 stations | Runs out at six |
| 9 | Offset table **typed by hand** rather than derived from CAD | Transcription errors |
| 10 | Not checking **spindle Y travel** to the lowest station | Cannot reach |
| 11 | Fixture needing **operator intervention** during a lights-out run | Defeats the whole purpose |
| 12 | Ignoring **pallet repeatability** in a tight error budget | Small but real |
| 13 | Poor **operator reach** to top stations at the load station | Ergonomic injury; slow loading |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Part falls during loading | No support ledge | Observe loading | Add ledges | Design rule R1 |
| Parts released overnight | Pneumatic pressure loss | Check for a pressure interlock | Hydraulic with accumulator; interlock | Fail-safe clamping |
| Top stations finish worse | Tombstone cantilever deflection | Compare finish by station height | Move demanding ops low | Limit tombstone height |
| Features mismatched between faces | Faces machined in separate setups | CMM the face relationships | Re-machine in one setup | Manufacture with B indexing |
| Chips accumulate on the fixture | Horizontal surfaces present | Section view; visual | Slope surfaces | Design rule R8 |
| Some stations out of position | Offset error, or station machining error | CMM stations; verify offsets vs CAD | Correct offsets or re-machine | Derive offsets from CAD |
| B axis faults or drifts | Mass or inertia exceeded; unbalanced | Check mass properties | Lighten; balance | Check ratings at design stage |
| Coolant carried to the load station | No pallet drainage | Observe | Add drains and a shroud | Design drainage |
| Cannot reach the lowest station | Spindle Y travel | Check travel vs station height | Raise the station | Model travel limits |

### 23. Design checklist
- [ ] Does every station have a **support ledge** carrying the part's weight?
- [ ] Are the ledges marked as **safety features** on the drawing?
- [ ] Is the clamping **fail-safe** for the intended running mode?
- [ ] Is there a **pressure interlock** if hydraulic or pneumatic?
- [ ] Is the **cutting-force direction** confirmed — does weight add or subtract?
- [ ] Is a **positive stop** fitted against the cutting force rather than relying on friction?
- [ ] Are tombstone **mass and CG** within the pallet and B-axis ratings?
- [ ] Is the tombstone **balanced** about the B axis?
- [ ] Is the tombstone **as short as the station count allows**?
- [ ] Are **demanding operations on the lowest stations**?
- [ ] Are **all upward-facing surfaces sloped**?
- [ ] Will the tombstone be machined in **as few setups as possible**, pallet interface first?
- [ ] Does **spindle Y travel** reach the lowest station, and Z the furthest face?
- [ ] Is the **offset table derived from CAD** and does it cover every station?
- [ ] Are there **enough extended offsets** available on the control?
- [ ] Can the operator **reach and load every station** safely at the load station?
- [ ] Does the fixture need **zero intervention** during an unattended run?
- [ ] Are **pallet services** — ports, rotary union — planned and sufficient?

### 24. Beginner exercise
**E1.1.4-B** — An HMC cuts for 18 minutes per pallet and the operator takes 7 minutes to load it.
(a) Calculate the spindle utilisation without a pallet changer.
(b) A pallet changer with a 0.5 minute swap time is fitted. Calculate the new utilisation.
(c) Calculate the improvement factor and the percentage increase in output.
(d) State which axis is vertical on an HMC and explain why.
(e) State two advantages and one disadvantage of the horizontal spindle orientation for the fixture
designer.

### 25. Intermediate exercise
**E1.1.4-I** — A 14 kg part is mounted on a vertical tombstone face. The cutting force is 1,600 N acting
downward, μ = 0.15, there are two clamps and SF = 2.5.
(a) Calculate the required clamp force per clamp with no support ledge.
(b) Calculate it with a support ledge carrying the weight.
(c) State the percentage reduction and comment on whether it justifies the ledge.
(d) Give two reasons why the ledge should be fitted regardless of your answer to (c).
(e) The cutting force is found to act upward instead. Recalculate case (a) and explain the difference.
(f) Coolant reaches the clamping faces, halving μ. Recalculate case (b) and state whether clamps rated
at 12,000 N are adequate.

### 26. Advanced exercise
**E1.1.4-A** — A company machines 18,000 cast iron pump housings per year. Current process: VMC, three
setups, cut times 7.2 / 5.4 / 3.1 minutes, load 1.4 minutes per setup. A proposal is made to move to an
HMC with a square tombstone, 2 stations per face (8 parts per pallet) and a pallet changer. HMC cut time
is 9.8 minutes per part in a single setup, load 1.6 minutes per part, pallet swap 0.4 minutes.
Tombstone: hollow cast iron, 500 mm tall, 280 × 280 mm outside, 35 mm wall, mass 195 kg, E = 120 GPa,
stations at 150 mm and 380 mm height. Parts 11 kg each. Pallet rated 600 kg. Worst cutting force 2,400 N
acting downward. μ = 0.15, 2 clamps per part, SF = 2.5. Machine available 3,800 h/year.
(i) Calculate spindle utilisation and annual output capability for the VMC process.
(ii) Calculate spindle utilisation and annual output capability for the HMC process, confirming that
load time fits within cut time.
(iii) Determine whether the HMC process meets the 18,000/year requirement, and with what margin.
(iv) Check the pallet mass utilisation.
(v) Calculate the tombstone second moment of area and the deflection at both station heights, state the
ratio, and verify it against the cube law.
(vi) Calculate the clamp force per clamp with and without a support ledge and comment on the difference.
(vii) The three-setup VMC process had a setup-to-setup stack. Explain what the HMC process does to it
and why that may matter more than the productivity gain.
(viii) The tombstone needs 8 work offsets. Explain what provision is required on the control and
reference the lesson that covers it.
(ix) Write a one-paragraph recommendation with the three numbers you consider most persuasive.

### 27. Interview questions
1. *"Why do horizontal machining centres exist when vertical ones are cheaper?"*
   **Answer:** Three reasons, and the first is fundamental. Chips fall away from the cut by gravity
   instead of into it, which means no re-cutting of chips, better surface finish, longer tool life, and
   deep pockets and cavities become genuinely practical where on a VMC they are a fight. For cast iron
   and heavy stock removal that alone can justify the machine. Second, B-axis pallet rotation gives
   access to four faces in a single setup, which eliminates the multi-setup tolerance stack that limits
   VMC work. Third, the pallet changer lets the operator load the next set of parts while the machine
   is cutting, pushing spindle utilisation from something like 70–80% up above 95%; put a tombstone on
   the pallet and you multiply parts per cycle as well. So the HMC is a production machine — it costs
   more but it makes more, and for the right work the difference is large.
2. *"What is the single most important difference for a fixture designer between a VMC and an HMC?"*
   **Answer:** Gravity. On a VMC, gravity and the axial cutting force press the part down onto its
   locating face, so it is naturally seated and will generally stay put even if a clamp is loose. On an
   HMC the locating face is vertical, so gravity acts along it and contributes nothing to holding the
   part on — if the clamps fail, the part falls out. That changes two things. First, I fit a support
   ledge that physically carries the weight, so clamp failure leaves the part sitting there rather than
   dropping, and so the operator has somewhere to rest the part while clamping. Second, clamping becomes
   reliability-critical rather than just accuracy-critical, which pushes me toward hydraulic clamping
   with an accumulator or mechanical locking rather than plain pneumatic, especially for unattended
   running.

### 28. Expert questions
1. *"In your worked example the support ledge only reduced the clamp force by three per cent. Defend
   fitting it."*
   **Answer:** I would defend it on three grounds, none of which is the force calculation — and the
   fact that the force argument fails is precisely what makes this a good question.
   The first is the **failure mode**. Without a ledge, the only thing holding the part against a
   vertical face is friction generated by the clamps. If a clamp loosens, a hydraulic line loses
   pressure, or someone releases the wrong station, the part falls. On a twelve-station tombstone that
   is a real event, and it can happen inside the machine at the worst possible moment. With a ledge,
   the same failure leaves the part sitting where it was — unrestrained against cutting force, but not
   falling. Converting a catastrophic failure mode into a benign one for the cost of a machined step is
   one of the better bargains available in fixture design.
   The second is **loading**, and this is the argument that convinces operators. Without a ledge, the
   person loading must hold a 6.8 kg part flat against a vertical face with one hand, at whatever height
   the station happens to be, while operating a clamp with the other — twelve times per pallet, all
   day. That is an ergonomic problem, a quality problem because the part may not be fully seated when
   the clamp closes, and a safety problem. With a ledge, the part is placed on the rest and the clamp is
   applied to a part that is already located. It is a completely different job.
   The third is **repeatability of seating**. A part held by hand against a vertical face may be pressed
   in at a slight angle, or lifted fractionally as the clamp bites. A part resting on a ledge has a
   defined vertical position before the clamp is applied, so vertical location is determined by a hard,
   ground, repeatable feature rather than by how the operator happened to hold it. And from L1.1.1,
   repeatability is the property you cannot compensate for.
   The general lesson I would draw is that **the force calculation is not the only criterion, and
   treating it as the only criterion produces fixtures that are technically adequate and practically
   poor.** Some features exist for the failure mode, some for the person loading the part, some for the
   fitter who has to maintain it. A designer who fits only what the numbers demand will omit all of
   them. The right use of the 3.2% figure is not to question the ledge — it is to note that the clamps
   must still be sized for the full cutting force, so the ledge does not let me use smaller clamps.
2. *"A customer wants to run an HMC lights-out overnight with a pallet pool. What does that change about
   how you design the fixture?"*
   **Answer:** It changes the design criterion from "works when used correctly" to "cannot fail
   unattended", and that is a much harder standard.
   The first thing is **clamping integrity over hours, not minutes**. Pneumatic clamping that holds
   perfectly during a supervised day shift can bleed down over eight unattended hours. I would specify
   hydraulic clamping with an accumulator, or mechanically self-locking clamps, plus a pressure switch
   interlock that prevents the cycle starting and halts it if pressure falls. The clamping must hold
   with the machine's power off, because that is one of the failure modes.
   The second is **zero required intervention**. Anything needing an operator during the run destroys
   the concept. That means no clamps needing periodic re-torquing, no locators needing manual cleaning
   between parts, chip evacuation that works for the full run rather than the first ten parts, and
   coolant delivery that does not depend on someone repositioning a nozzle. I would design for the
   fortieth part, not the first.
   The third is **chip management over a whole run**. On an HMC chips fall away, which genuinely helps,
   but a fixture with any horizontal surface accumulates them, and over eight hours a small accumulation
   becomes a large one. I would slope everything, check the fall path from every station at every B
   position, and ask whether the coolant flow actually flushes the fixture or merely wets it.
   The fourth is **failure containment**. If something goes wrong at 2 a.m., what is the worst outcome?
   A part working loose and being machined into is bad; a part leaving the fixture and reaching the
   spindle is much worse. Support ledges, physical capture features and fail-safe clamping all bound the
   damage. I would also want tool breakage detection and, if the control supports it, in-process probing
   that can stop the machine rather than continue producing scrap for six hours.
   The fifth is **verification before trust**. I would want the fixture proven over a full supervised
   run of the same duration before anyone leaves it alone, with clamp pressures checked at the start and
   end, and parts from the beginning, middle and end measured to see whether anything drifts.
   Underneath all of it is a mindset change. A day-shift fixture has an operator as its last line of
   defence — someone who notices a rattle, sees a chip, feels that a clamp is loose. **Lights-out
   removes that safety net, so every function the operator was implicitly performing has to be designed
   into the fixture instead.** Enumerating what the operator actually does, and then designing each of
   those things out, is the practical method.

### 29. Summary
The horizontal machining centre has a horizontal spindle, so Z lies along the spindle horizontally and Y
becomes the vertical axis, with the pallet rotating about the vertical B axis to present four faces in
one setup. Its fundamental advantage is chip fall-away: chips drop clear of the cut instead of into it,
eliminating re-cutting, improving finish and tool life, and making deep cavities practical. Four-sided
B-axis access eliminates the multi-setup tolerance stack, and pallet changers allow loading in parallel
with cutting, pushing spindle utilisation above 95%, while tombstones multiply parts per cycle. The
price is gravity: the locating face is vertical, so weight acts along it and does nothing to hold the
part on — if the clamps fail, the part falls. The design answer is a support ledge that physically
carries the weight, which barely changes the required clamp force but transforms the failure mode and
makes loading possible and repeatable, illustrating that not every worthwhile feature is justified by a
force calculation. Tombstones are cantilevers from the pallet, so the L³ law applies and demanding
operations belong on the lowest stations; their faces should be machined in as few setups as possible
because the face-to-face relationship is what the offset table depends on. Multi-station tombstones
require more offsets than G54–G59 provides, which is the subject of Module 1.2, and unattended running
raises the design standard from "works when used correctly" to "cannot fail unattended".

### 30. Key takeaways
- **Chips fall away, but so does the part.** That is the HMC bargain in one line.
- **Z is always along the spindle** — so on an HMC, **Y is vertical**.
- **Chip fall-away is the fundamental reason horizontal machining exists.**
- **Fit a support ledge.** It barely reduces clamp force and it transforms the failure mode and the
  loading.
- **Not every good feature is justified by a force calculation.**
- Pallet changers lift utilisation from **~70–80% to >95%** `[GUIDE]`; the gain is largest when load
  time is a large fraction of cut time.
- **A tombstone is a cantilever** — `L³` applies. Demanding work on the lowest stations.
- Machine tombstone faces in **as few setups as possible**, pallet interface first.
- **12–16 stations need extended offsets** — G54–G59 gives only six (L1.2.2).
- **Slope everything.** Chip fall-away is a machine property, not automatically a fixture property.
- **Lights-out changes the standard** from "works correctly" to "cannot fail unattended".

---

# MODULE 1.1 — CLOSING

## What Module 1.1 established

```
L1.1.1  The machine is a STRUCTURAL LOOP and your fixture is
        part of it. Compliance adds in series; repeatability
        cannot be fixed but accuracy can; thermal drift is
        usually the largest error source; the machine spends
        60-70 % of the tolerance before you start.

L1.1.2  The VMC: gravity SEATS the part (helpful) but chips
        fall INTO the fixture (harmful) and access is from
        above only (costly). Small raised pads with relief
        grooves; positive stops against the horizontal forces
        that friction cannot hold.

L1.1.3  Rotary axes solve the access problem and create a
        gravity problem: WHEN THE PART ROTATES, GRAVITY DOES
        NOT. Check every orientation; inertia goes with r²;
        arc-seconds become millimetres at radius; clamping
        becomes safety-critical.

L1.1.4  The HMC inverts the VMC bargain: chips fall AWAY
        (the reason the machine exists) but so does the part.
        Support ledges, fail-safe clamping, tombstones as
        cantilevers, pallet changers for utilisation.
```

## The single thread running through Module 1.1

Every lesson in this module has turned on the same question in a different form:

> **Which way does gravity act relative to the locating face, and which way does the cutting force
> act?**

| Machine | Gravity vs the primary locating face | Consequence |
|---|---|---|
| **VMC** | Normal, **into** the face | Self-seating. Restraint is a horizontal problem. |
| **4/5-axis, part-tipping** | **Varies** with the angle | All orientations must be checked; 2W swing |
| **HMC** | **Parallel** to the face | Support ledge mandatory; clamps do everything |
| **5-axis head-head** | Normal, into the face | Behaves like a VMC — the simple case |

That table is the practical summary of the whole module, and establishing which row applies is the first
thing to do about any machine you are asked to design for.

## Governing principles added by Module 1.1

| # | Principle | From |
|---|---|---|
| 28 | Your fixture is an element of the machine's structural loop; compliance adds in series and the softest element dominates | L1.1.1 |
| 29 | Repeatability cannot be fixed; accuracy can. Design for repeatability first | L1.1.1 |
| 30 | Machine, tooling and measurement spend 60–70% of the tolerance before the fixture does | L1.1.1 |
| 31 | On a VMC, gravity is your friend for seating and your enemy for chips | L1.1.2 |
| 32 | Small raised pads with relief grooves beat a full ground face — by a factor of tens on chip exposure, and on ease of grinding | L1.1.2 |
| 33 | Every extra face costs a setup and a tolerance stack; quantify it before accepting it | L1.1.2 |
| 34 | When the part rotates, gravity does not — check every orientation | L1.1.3 |
| 35 | Inertia binds before mass, and it scales with radius squared. Extend along the rotary axis, not away from it | L1.1.3 |
| 36 | Arc-seconds become millimetres at radius; convert before accepting a rotary specification | L1.1.3 |
| 37 | Chips fall away on an HMC, but so does the part | L1.1.4 |
| 38 | Not every worthwhile feature is justified by a force calculation | L1.1.4 |
| 39 | A tombstone is a cantilever from the pallet; demanding operations go on the lowest stations | L1.1.4 |

*(Principles 1–27 were established in Level 0.)*

## Numerical results worth remembering from Module 1.1

| Result | Value | Lesson |
|---|---|---|
| Series compliance always lowers total stiffness | 60,000 + 25,000 → **17,647 N/mm** | L1.1.1 |
| Fixture share of compliance in that example | **71%** | L1.1.1 |
| Machine + tooling + measurement consumed | **62.5%** of the tolerance | L1.1.1 |
| Chip exposure, full face vs 3 × Ø25 pads | **40.7× improvement** | L1.1.2 |
| Friction from gravity + axial force vs horizontal need | **15.9× short** | L1.1.2 |
| Setup stack as a fraction of positional tolerance | **44%** | L1.1.2 |
| Rotary parts at 165 mm vs 320 mm radius | inertia **1.03 → 3.89 kg·m²** | L1.1.3 |
| Rotary angular error, 21 arc-sec at 230 mm | **0.0234 mm** (33% of tolerance) | L1.1.3 |
| HMC support ledge, clamp force reduction | only **3.2%** — fit it anyway | L1.1.4 |
| Pallet changer utilisation gain | **80.7% → 99.3%**, factor **1.23** | L1.1.4 |
| Tombstone top vs low station deflection | **17.6×** = (520/200)³ | L1.1.4 |

## Formulae added by Module 1.1

```
Series compliance      1/k_total = Σ 1/kᵢ
Error budget           E_fixture ≤ T_part − Σ E_other
Z budget               Margin = Z_max − (L_hold + L_tool + h_cl + h_part + h_fix)
Pad area fraction      f = n(πd²/4)/A_face
Angular → linear       e = r · θ_arcsec · 4.848×10⁻⁶
Inertia, point mass    J = m r²
Inertia, cylinder      J = ½ m r²
Centrifugal            F_c = m ω² r,  ω = 2πN/60
Indexing torque        T = J α
Spindle utilisation    U = t_cut / t_cycle
Clamp, on-side         F ≥ (W + F_cut)·SF/(μn)
Clamp, inverted        F ≥ (W + F_pull)·SF/n
Clamp, with ledge      F ≥ F_cut·SF/(μn)
Hollow square I        I = (BH³ − bh³)/12
```

## Module 1.1 self-check

Before moving to Module 1.2, confirm you can:

- [ ] Sketch the structural loop and explain why the fixture is part of it
- [ ] Explain resolution vs repeatability vs accuracy, and state which matters most
- [ ] Build an error budget and state the fixture's available allowance
- [ ] Compute a full Z budget including holder, tool, clearance, part and fixture
- [ ] Explain why VMC seating pads should be small, raised and relieved
- [ ] State the force direction a VMC fixture must resist, and why friction is inadequate
- [ ] Name the rotary axes and state which rotates about which linear axis
- [ ] Explain why a C-axis table on a VMC does not solve side-face access
- [ ] Check all three orientations for a rotary fixture and identify which governs
- [ ] Convert a rotary arc-second specification into millimetres at a working radius
- [ ] Explain the two 5-axis architectures and their fixture consequences
- [ ] State why chips fall away on an HMC and why that is the machine's reason for existing
- [ ] Explain why an HMC needs a support ledge, without appealing to the force calculation
- [ ] Calculate the productivity gain from a pallet changer
- [ ] Explain why a tombstone's top stations are less stiff than its lowest

**Next: Module 1.2 — Coordinate Systems and Offsets.** Having established what the machines are, we now
establish how a position on a machine is defined — and, in L1.2.4, how the fixture physically creates
that position.

---

# MODULE 1.2 — COORDINATE SYSTEMS AND OFFSETS

**Lessons:** L1.2.1 – L1.2.4
**Estimated time:** 3.5 hours
**Prerequisites:** Module 1.1, L0.2.4 (dimensioning), L0.2.5 (tolerance stacking)

## Why this module exists

A CNC machine does exactly what its coordinates tell it to do. If the coordinates are right and the
part is in the wrong place, the part is scrap. **The fixture's entire job, reduced to one sentence, is
to put the part where the coordinates say it is.**

That sentence is the reason this module sits in a fixture design course rather than a programming
course. You are not learning to program. You are learning what a coordinate system *is* physically, so
that you can build the thing that makes it true.

## The chain this module builds

```
   MACHINE COORDINATE SYSTEM (MCS)        L1.2.1
   fixed to the machine, established at
   homing, never moves
              │
              │  work offset (G54...)
              ▼
   WORK COORDINATE SYSTEM (WCS)           L1.2.2
   where the programmer says the part is
              │
              │  tool length / radius offset
              ▼
   TOOL COORDINATE SYSTEM                 L1.2.3
   where the cutting edge actually is
              │
              │  ← AND HERE IS THE GAP
              ▼
   THE PART ITSELF                        L1.2.4
   which the FIXTURE must place at the WCS

   ┌────────────────────────────────────────────┐
   │ THE MACHINE KNOWS WHERE THE WCS IS.        │
   │ IT DOES NOT KNOW WHERE THE PART IS.        │
   │ THE FIXTURE IS WHAT MAKES THOSE THE SAME   │
   │ THING — EVERY TIME, FOR EVERY PART.        │
   └────────────────────────────────────────────┘
```

L1.2.4 is where that gap is closed, and it is the lesson this module exists for.

## Module learning outcome

You will be able to explain the machine, work and tool coordinate systems and how they relate; allocate
and document work offsets for a multi-station fixture including a tombstone; explain tool length and
cutter radius compensation and their fixture implications; and — most importantly — specify the physical
fixture features that realise a work coordinate system and enable it to be set repeatably.

---

## LESSON L1.2.1 — THE MACHINE COORDINATE SYSTEM

### 1. Lesson title
**L1.2.1 — Machine zero, home position, reference return, and where "zero" really is**

### 2. Learning objective
By the end of this lesson you will be able to define the machine coordinate system and machine zero,
explain the homing/reference return process and why it is required, distinguish machine position from
work position, explain soft limits and the working envelope, and state why the fixture designer needs to
know the MCS even though the programmer works in the WCS.

### 3. Prerequisites
L1.1.1 (machine architecture, encoders), L1.1.2 (VMC axes and travels).

### 4. Why the topic matters
The machine coordinate system is the one thing on the machine that never moves. Everything else — every
work offset, every tool offset, every fixture position — is measured from it.

A fixture designer needs it for four specific reasons:

1. **The working envelope is defined in MCS**, so checking that your fixture and part fit is an MCS
   calculation, not a WCS one.
2. **Fixture position on the table is recorded in MCS.** When a fixture is refitted after removal, its
   MCS position is what gets restored.
3. **Soft limits are in MCS**, and a fixture that pushes the part toward a limit will cause an overtravel
   alarm mid-cycle rather than at setup.
4. **Repeatability of the MCS is what makes everything else repeatable.** If the machine does not return
   to the same home position, no offset means anything.

There is also a conceptual reason, which is the more important one:

> **The machine has no idea that a part exists.** It knows only its own axis positions relative to
> machine zero. Everything that connects those numbers to a physical component is something a human
> being — usually you and the setter — has arranged. Understanding that clearly is what makes the
> rest of the module make sense.

### 5. Simple explanation
Every CNC machine has one fixed reference point called **machine zero** (or **home**). It is a specific
physical position built into the machine, usually at one extreme corner of the travel.

When the machine is switched on, it does not know where its axes are. So it performs a **reference
return** (homing): each axis moves slowly until it finds its home position, and from that moment the
machine knows exactly where everything is.

```
        MACHINE ZERO usually here (a corner extreme)
        ╳
        ┌─────────────────────────────┐
        │                             │
        │      TABLE                  │
        │            ● part           │
        │                             │
        └─────────────────────────────┘

   Machine position of the part corner might be
     X = −420.000   Y = −250.000   Z = −310.000

   These are AWKWARD NUMBERS. Nobody wants to program
   with them. So we set a WORK OFFSET (Level 1.2.2)
   that shifts the origin to the part.
```

Machine zero never changes. Work offsets change all the time. That is the whole idea.

### 6. Engineering explanation

**DEFINING THE MACHINE COORDINATE SYSTEM**

The MCS is a right-handed Cartesian system fixed to the machine structure, with its origin at **machine
zero** — a position established by the reference return process and defined by the machine builder.

```
     RIGHT-HAND RULE (ISO 841)

              +Z
               ▲
               │
               │
               └──────► +X
              ╱
            ╱
          +Y

     Point the right thumb along +X, index finger
     along +Y, second finger along +Z.

     KEY CONVENTION: The axis directions describe the
     motion of the TOOL RELATIVE TO THE WORKPIECE.
     On a machine where the TABLE moves, the table
     physically moves in the OPPOSITE direction to the
     programmed axis direction. The programmer and the
     designer both think in tool-relative terms.
```

`[GUIDE]` On most vertical machining centres machine zero is at the **positive extreme of all three
axes** — the table fully to the left and front, the spindle fully up. All machine positions are then
**negative**. This is a convention, not a law: some builders place it elsewhere. Check the machine.

**REFERENCE RETURN (HOMING) — WHY IT EXISTS**

The reason homing is necessary comes straight from L1.1.1's discussion of encoders.

```
INCREMENTAL ENCODER (most common)
   Counts pulses as the axis moves.
   ✗ ON POWER-UP IT KNOWS NOTHING — it can count
     changes but has no absolute reference.
   → REFERENCE RETURN IS MANDATORY at every power-up.

ABSOLUTE ENCODER
   Reports actual position directly, with a battery-
   backed count of revolutions.
   ✓ Knows its position at power-up.
   → Reference return not required in normal use.
   ✗ If the battery fails, the reference is lost and
     the machine must be re-referenced by a service
     engineer.
```

**The homing sequence** `[GUIDE]`:
1. The axis moves toward the home direction at a moderate rate
2. It trips a **home limit switch** (coarse position)
3. It reverses and creeps slowly until the encoder's **once-per-revolution marker pulse** is detected
4. That marker pulse — not the switch — defines machine zero

Step 4 is the important one. The switch is repeatable only to perhaps a millimetre; the encoder marker
pulse is repeatable to microns. **The switch tells the machine roughly where to look; the marker pulse
defines the position exactly.** This is why homing is highly repeatable.

`[PRACTICE]` Home Z first, or as the control's sequence dictates, to avoid a collision between a tool
and the fixture while the machine still does not know where anything is. Many controls enforce this.

**MACHINE POSITION VERSUS WORK POSITION**

The control displays several position readouts simultaneously, and confusing them is a classic error.

| Display | Meaning | When you use it |
|---|---|---|
| **MACHINE (ABSOLUTE MCS)** | Position relative to machine zero | Setting fixture position; checking travel limits |
| **ABSOLUTE (WORK / WCS)** | Position relative to the active work offset | Programming and normal operation |
| **RELATIVE** | Position relative to an arbitrary operator-set zero | Temporary measurement during setup |
| **DISTANCE TO GO** | Remaining movement in the current block | Watching a running programme |

```
     THE RELATIONSHIP

     MACHINE POSITION = WORK OFFSET + WORK POSITION

     Example, X axis:
       Work offset G54 X = −420.000  (MCS)
       Programmed work position X    =   35.000
       Machine will move to X        = −385.000 (MCS)

     REARRANGED — THE FORM YOU ACTUALLY USE AT SETUP:

       WORK OFFSET = MACHINE POSITION − WORK POSITION

     To set G54 X zero at a face: touch the face, read
     the MACHINE position, enter it as the offset.
     (The control's "measure" function does exactly
     this arithmetic for you.)
```

**SOFT LIMITS AND THE WORKING ENVELOPE**

| Limit type | Nature | Behaviour |
|---|---|---|
| **Hard limit switches** | Physical switches near the travel ends | Emergency stop; requires recovery procedure |
| **Soft limits (stored stroke limits)** | Software boundaries in MCS | Controlled stop with an alarm; safer |
| **Second soft limit region** | An optional forbidden volume inside the envelope | Can protect a fixture or a tailstock |

`[PRACTICE]` The second soft limit region is underused and genuinely valuable. If a tall fixture
occupies a known volume, defining that volume as a forbidden region protects it from a mis-keyed move.
Setting it up takes minutes and it has prevented many crashes. Ask whether the machine supports it.

**WHY THE FIXTURE DESIGNER CARES**

```
  1. THE ENVELOPE CHECK IS AN MCS CALCULATION

     Travel X: MCS −850.000 to 0.000
     Fixture placed with its datum at MCS X = −600.000
     Feature to be cut at work X = +180.000

     Machine position required = −600 + 180 = −420.000
     Is −420 within −850..0 ?   ✓ YES

     But a feature at work X = +650:
     Machine position = −600 + 650 = +50.000
     Is +50 within −850..0 ?    ✗ NO — OVERTRAVEL

  2. FIXTURE POSITION IS RECORDED IN MCS

     "Fixture datum bush at MCS X−600.000 Y−310.000,
      top face at MCS Z−240.000"

     This is what allows the fixture to be refitted
     in the same place after removal — and it belongs
     in the setup documentation.

  3. THE HOME POSITION MUST BE REACHABLE

     Tool changes and pallet changes occur at
     specific MCS positions. A tall fixture can
     obstruct the path to them. (L1.1.1 R4.)
```

**A COMMON POINT OF CONFUSION: G53**

`G53` commands a move in **machine coordinates**, ignoring the active work offset for that block only.
It is used for safe retract moves and for moving to a tool change or load position.

```
   G53 G0 Z0.        ← retract to machine Z zero
                       (fully up) regardless of the
                       active work offset. SAFE.

   G0 Z0.            ← move to WORK Z zero, which is
                       usually the TOP OF THE PART.
                       Very different. Potentially a
                       collision.
```

`[PRACTICE]` A safe retract at the start and end of a programme is almost always written with G53.
The fixture designer's interest is that this defines where the machine parks — and therefore whether the
operator can reach the fixture to load it.

### 7. Terminology

| Term | Definition |
|---|---|
| **MCS** | Machine coordinate system — fixed to the machine structure |
| **Machine zero / home** | Origin of the MCS, established by reference return |
| **Reference return / homing** | Process establishing machine zero at power-up |
| **Marker pulse / Z pulse** | Once-per-revolution encoder signal that defines the exact home position |
| **Incremental encoder** | Counts movement; requires homing at power-up |
| **Absolute encoder** | Reports position directly; no routine homing needed |
| **Machine position** | Axis position relative to machine zero |
| **Work position** | Axis position relative to the active work offset |
| **Soft limit** | Software travel boundary in MCS |
| **Hard limit** | Physical limit switch |
| **G53** | Command to move in machine coordinates for one block |
| **Overtravel** | Attempting to move beyond a travel limit |
| **Right-hand rule** | Convention fixing the positive sense of X, Y, Z |

### 8. Principle

> **MACHINE ZERO IS THE ONE THING THAT NEVER MOVES.**
> Everything else — work offsets, tool offsets, fixture positions — is measured from it, and its
> repeatability is what makes every other number meaningful.
> **MACHINE POSITION = WORK OFFSET + WORK POSITION**, and rearranged, **WORK OFFSET = MACHINE POSITION −
> WORK POSITION** — which is exactly what happens at setup.
> **The machine does not know a part exists.** It knows only axis positions relative to machine zero;
> the fixture is what connects those numbers to a physical component.

### 9. Industrial application

**Documenting a fixture's machine position — the setup sheet**

```
FIXTURE SETUP RECORD                     [PROJ]
Fixture: FX-2291  Part: housing 4471-A
Machine: VMC-04 (asset 2291)

MOUNTING
  Fixture base bolted to T-slots 2 and 4
  Locating key engaged in slot 3, front edge
  Torque 90 N·m on 4 × M16   [PROJ]

MACHINE POSITION AS SET (record after setup)
  Datum bush A centre  MCS X −598.412  Y −312.055
  Fixture top face     MCS Z −238.190
  (Values recorded 2026-xx-xx by ______)

WORK OFFSET DERIVED
  G54  X −598.412  Y −312.055  Z −238.190

TRAVEL CHECK
  Extreme feature, work X +240 → MCS −358.412  ✓
  Extreme feature, work Y +185 → MCS −127.055  ✓
  Deepest Z, work Z −42 → MCS −280.190          ✓
  All within travel X −850..0, Y −500..0,
  Z −500..0                                     ✓

NOTES
  Record the machine position BEFORE removing the
  fixture. Refitting to the same MCS position saves
  re-qualifying every offset.
```

> **The last note is the practical value of this lesson.** A fixture removed for another job and then
> refitted will not land in exactly the same place unless it is located, not merely bolted. If it is
> keyed or dowelled to the table, it returns to within the key's fit; if it is only bolted, it does not,
> and every offset must be re-established. That is a fixture design decision — L1.2.4 R-series — with a
> direct effect on changeover time.

**A common production failure this lesson prevents**

```
SYMPTOM: Programme runs correctly on Monday. On
  Tuesday the first part is scrap, everything shifted
  by a consistent amount in X.

CAUSE CHAIN:
  Machine powered down overnight
  → homed on Tuesday morning        (normal)
  → BUT the fixture had been removed on Monday
    evening for another job and refitted
  → fixture not keyed to the table, only bolted
  → refitted 0.4 mm out in X
  → G54 still held Monday's value
  → every part shifted 0.4 mm

THE ERROR IS NOT IN THE MACHINE OR THE PROGRAMME.
It is that the fixture's MCS position was not
REPEATABLE, and nobody re-checked it.

DESIGN RESPONSE: LOCATE the fixture to the table
with keys or dowels, so that refitting restores the
position. Then a removed fixture returns to the same
MCS coordinates and the offsets remain valid.
```

### 10. Design rules
- **R1** — **Locate the fixture to the table** with keys or dowels, not by bolts alone, so refitting
  restores the MCS position `[PRACTICE]`.
- **R2** — **Record the fixture's MCS position** in the setup documentation.
- **R3** — Perform the **travel check in MCS**, converting extreme work coordinates to machine
  coordinates.
- **R4** — Confirm the fixture does not obstruct the **home, tool change or pallet change positions**.
- **R5** — Where the control supports it, define a **soft limit forbidden region** around a tall fixture
  `[PRACTICE]`.
- **R6** — Note on the setup sheet that the fixture position must be **re-verified after any removal**
  if it is not positively located.
- **R7** — Ensure the machine's **park position leaves the fixture accessible** for loading.

### 11. Rules of thumb
- **Machine zero never moves. Everything else is measured from it.**
- On most VMCs machine zero is at the **positive extreme**, so machine positions are negative `[GUIDE]`.
- **WORK OFFSET = MACHINE POSITION − WORK POSITION.**
- Homing is precise because it uses the **encoder marker pulse**, not the limit switch.
- **G53 moves in machine coordinates** — the safe way to retract.
- **A bolted-only fixture does not return to the same place.** Key it or dowel it.
- Travel checks are **MCS calculations**; do not do them in work coordinates.
- Absolute encoders still need re-referencing **if the battery fails**.

### 12. Formulae

**The fundamental relation**
```
Machine position = Work offset + Work position
Work offset      = Machine position − Work position
Work position    = Machine position − Work offset
```

**Travel check**
```
MCS_feature = Offset_MCS + Work_coordinate
Require:  Travel_min ≤ MCS_feature ≤ Travel_max
```

**Available work-coordinate range along an axis**
```
Work_max = Travel_max − Offset_MCS
Work_min = Travel_min − Offset_MCS
```

| Variable | Meaning | Unit |
|---|---|---|
| MCS | Machine coordinate | mm |
| Offset_MCS | Work offset value, expressed in MCS | mm |
| Work_coordinate | Programmed position in the WCS | mm |

### 13. Worked numerical example

**Problem:** A fixture is to be positioned on a VMC table. Determine the work offset values, verify that
every feature is within travel, determine the usable work-coordinate range, and assess the consequence
of an error in refitting the fixture.

```
GIVEN:
  MACHINE                                        [MFR]
    Travel X   = MCS −900.000 to 0.000
    Travel Y   = MCS −520.000 to 0.000
    Travel Z   = MCS −540.000 to 0.000
    Machine zero at the positive extreme of all axes

  FIXTURE AS SET ON THE TABLE                    [PROJ]
    Datum bush A centre, measured by edge finder
      and probe:
      MCS X = −615.300
      MCS Y = −288.700
    Fixture top locating face, measured:
      MCS Z = −265.400

  PART FEATURES, in work coordinates
    (origin at datum bush A, top face Z0)        [PROJ]
    Feature 1  X   0.000  Y   0.000  Z  −8.000
    Feature 2  X 236.000  Y   0.000  Z −12.000
    Feature 3  X 236.000  Y 168.000  Z  −6.000
    Feature 4  X  95.000  Y 168.000  Z −55.000
    Deepest tool reach, work Z          = −62.000

  REFIT ERROR SCENARIO
    Fixture refitted 0.35 mm displaced in +X
    without re-setting the offset

REQUIRED:
  (a) The G54 offset values to be entered
  (b) Machine coordinates of all four features
  (c) Travel verification for each
  (d) Usable work-coordinate range in X and Y
  (e) Remaining Z travel below the deepest cut
  (f) Effect of the 0.35 mm refit error on the parts
  (g) Engineering conclusion

ASSUMPTION:
  1. Machine travels from the manufacturer's
     specification. Soft limits may be set slightly
     inside these values and MUST BE CONFIRMED on the
     machine. [MFR]
  2. Measured MCS positions are those obtained at
     setup by edge finder and probe; measurement
     uncertainty of the setting method is NOT included
     here and is addressed in L1.2.4. [PROJ]
  3. Work origin defined at datum bush A centre, top
     face Z0 — a project decision recorded on the
     setup sheet. [PROJ]
  4. The refit error is assumed to be a pure X
     translation with no rotation. A real refit error
     would generally include rotation, which is worse
     because its effect varies across the part.

FORMULA:
  (a) Offset = measured MCS position of the work origin
  (b) MCS_feature = Offset_MCS + Work_coordinate
  (d) Work_max = Travel_max − Offset_MCS

UNIT CONVERSION:
  All values in mm. No conversion required.

SUBSTITUTION AND CALCULATION:

  (a) G54 OFFSET VALUES

      The offset IS the machine position of the work
      origin:

        G54  X = −615.300
             Y = −288.700
             Z = −265.400

  (b) MACHINE COORDINATES OF THE FEATURES

      MCS = Offset + Work

      Feature 1:
        X: −615.300 +   0.000 = −615.300
        Y: −288.700 +   0.000 = −288.700
        Z: −265.400 +  (−8.000) = −273.400

      Feature 2:
        X: −615.300 + 236.000 = −379.300
        Y: −288.700 +   0.000 = −288.700
        Z: −265.400 + (−12.000) = −277.400

      Feature 3:
        X: −615.300 + 236.000 = −379.300
        Y: −288.700 + 168.000 = −120.700
        Z: −265.400 +  (−6.000) = −271.400

      Feature 4:
        X: −615.300 +  95.000 = −520.300
        Y: −288.700 + 168.000 = −120.700
        Z: −265.400 + (−55.000) = −320.400

      Deepest reach:
        Z: −265.400 + (−62.000) = −327.400

  (c) TRAVEL VERIFICATION

      X range required: −615.300 to −379.300
        Travel −900.000 to 0.000
        −900 ≤ −615.300 ✓   −379.300 ≤ 0 ✓   PASS

      Y range required: −288.700 to −120.700
        Travel −520.000 to 0.000
        −520 ≤ −288.700 ✓   −120.700 ≤ 0 ✓   PASS

      Z range required: −265.400 to −327.400
        Travel −540.000 to 0.000
        −540 ≤ −327.400 ✓   −265.400 ≤ 0 ✓   PASS

      ✓ ALL FEATURES WITHIN TRAVEL.

  (d) USABLE WORK-COORDINATE RANGE

      X:
        Work_max = 0.000 − (−615.300) = +615.300
        Work_min = −900.000 − (−615.300) = −284.700
        → Work X may range −284.700 to +615.300

        Part uses 0 to 236 — comfortably inside.
        HEADROOM in +X = 615.300 − 236.000
                       = 379.300 mm

      Y:
        Work_max = 0.000 − (−288.700) = +288.700
        Work_min = −520.000 − (−288.700) = −231.300
        → Work Y may range −231.300 to +288.700

        Part uses 0 to 168.
        HEADROOM in +Y = 288.700 − 168.000
                       = 120.700 mm

      NOTE: the Y headroom (120.7 mm) is much smaller
      than the X headroom (379.3 mm). If a second
      part were ever added alongside in Y, only
      120.7 mm is available.

  (e) REMAINING Z TRAVEL

      Deepest reach MCS Z = −327.400
      Travel limit        = −540.000
      Remaining           = −540.000 − (−327.400)
                          = −212.600
      → 212.600 mm of downward travel remains.

      ✓ Ample. (This is travel headroom, NOT the
        Z-height budget of L1.1.2 — that is a
        separate check governed by tool and holder
        length.)

  (f) EFFECT OF THE 0.35 mm REFIT ERROR

      The fixture moves +0.35 mm in X but G54 still
      reads X = −615.300.

      The machine still drives to MCS −615.300 for
      work X0. But the datum bush is now physically at
      MCS −614.950.

      Displacement of the part relative to the
      programmed origin:
        −614.950 − (−615.300) = +0.350 mm

      → EVERY FEATURE IS CUT 0.350 mm IN THE −X
        DIRECTION RELATIVE TO THE PART.

      Consequence against a typical tolerance:
        If features are toleranced at ±0.10 mm:
          0.350 / 0.100 = 3.5 × THE TOLERANCE
        → EVERY PART SCRAP.

        If toleranced at ±0.50 mm:
          0.350/0.500 = 70 % of tolerance consumed
        → parts pass, but with almost no margin,
          and the error is invisible until something
          else drifts.

      IMPORTANTLY: the error is CONSISTENT. Every part
      is wrong by the same amount in the same
      direction. That is the signature of an OFFSET
      error rather than a process instability, and it
      is how this fault is diagnosed.

RESULT:
  ┌──────────────────────────────┬──────────────────────┐
  │ (a) G54 X                    │ −615.300             │
  │     G54 Y                    │ −288.700             │
  │     G54 Z                    │ −265.400             │
  │ (b) Feature 4 MCS            │ −520.300 / −120.700  │
  │                              │ / −320.400           │
  │ (c) Travel check, all axes   │ ✓ PASS               │
  │ (d) Work X range             │ −284.700 to +615.300 │
  │     Work Y range             │ −231.300 to +288.700 │
  │     X headroom               │ 379.300 mm           │
  │     Y headroom               │ 120.700 mm           │
  │ (e) Z travel remaining       │ 212.600 mm           │
  │ (f) Refit error consequence  │ 0.350 mm on EVERY    │
  │                              │ feature, consistent  │
  │     vs ±0.10 tolerance       │ 3.5× — ALL SCRAP     │
  └──────────────────────────────┴──────────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The analogous margins
  are the travel headroom — 379.3 mm in X, 120.7 mm in
  Y, 212.6 mm in Z — all comfortable. The refit
  scenario has NO margin: a 0.35 mm error against a
  ±0.10 mm tolerance is an immediate failure.

PASS/FAIL:
  ✓ PASS — all features within travel, with headroom.
  ✗ FAIL — the refit scenario. A 0.35 mm unlocated
    refit produces 100 % scrap against a ±0.10 mm
    tolerance.

ENGINEERING CONCLUSION:
  1. THE ARITHMETIC IS TRIVIAL AND THE DISCIPLINE IS
     NOT.
     Every calculation here is an addition. The value
     of doing it is not the mathematics — it is that
     performing the travel check in MACHINE
     coordinates catches the overtravel that a check
     in work coordinates cannot see. Work coordinates
     say "the feature is at X236, the part is 300 long,
     that's fine". Machine coordinates say whether the
     machine can actually get there.

  2. THE Y HEADROOM IS THE FIGURE TO NOTE.
     120.7 mm in Y against 379.3 mm in X. Nobody asked
     for this number, but it is the one that matters
     if the fixture is ever extended, if a second part
     is added, or if a longer tool needs clearance to
     the side. I WOULD RECORD IT ON THE SETUP SHEET,
     because the person who later proposes a two-up
     version of this fixture needs to know that Y is
     the constrained direction.

  3. THE REFIT ERROR IS THE REAL LESSON, AND IT IS A
     FIXTURE DESIGN PROBLEM, NOT AN OPERATOR PROBLEM.
     A 0.35 mm displacement produces a consistent
     0.35 mm error on every feature — 3.5 times a
     ±0.10 mm tolerance. It would be easy to file this
     under "the setter should have re-checked the
     offset", and that is true but useless, because it
     will happen again.
     THE DESIGN ANSWER IS TO MAKE THE FIXTURE
     POSITIVELY LOCATED TO THE TABLE — keys in a
     T-slot, or dowels into the table — so that
     refitting physically restores the position rather
     than relying on someone remembering to re-qualify
     it. This is the L0.3.3 principle applied to the
     fixture-to-machine interface: THE SAME LOGIC THAT
     SAYS "FIT A POSITIVE STOP FOR THE PART" SAYS "FIT
     A POSITIVE LOCATION FOR THE FIXTURE".
     The cost is two keys and two slots. The benefit is
     that a removed fixture returns to within the key
     fit — typically well under 0.05 mm — and the
     offsets remain valid.

  4. THE ERROR SIGNATURE IS DIAGNOSTIC.
     Every part wrong by the same amount in the same
     direction means an OFFSET or a FIXTURE POSITION
     error. Parts wrong by varying amounts means a
     process or clamping instability. Recognising
     which of those two patterns you are looking at
     immediately halves the search space, and it is one
     of the more useful diagnostic habits in
     production troubleshooting.

SENSITIVITY NOTE:
  Ranked by influence:
    1. FIXTURE POSITIONAL REPEATABILITY ON REFIT —
       the only variable here capable of producing
       100 % scrap. Governed entirely by whether the
       fixture is located or merely bolted.
    2. OFFSET ENTRY ACCURACY — a keying error of one
       digit (−615.300 vs −615.000 or −616.300) is
       both easy to make and immediately catastrophic.
       Offsets set by probing rather than typing
       remove this failure mode.
    3. Y-DIRECTION HEADROOM — not an error source now,
       but the constraint that will bind on any future
       extension of the fixture.
    4. TRAVEL LIMITS — ample in this case, so
       insensitive. Would become critical if the
       fixture were placed nearer an extreme.
```

### 14. Engineering assumptions
- Machine travels from manufacturer specification `[MFR]`; soft limits may be set inside these and must
  be confirmed on the machine.
- Setting measurement uncertainty excluded here; addressed in L1.2.4 `[PROJ]`.
- Work origin at datum bush A centre, top face Z0 — a project decision to be recorded `[PROJ]`.
- The refit error is modelled as pure translation; a real refit error would include rotation, which is
  worse because its effect varies across the part.

### 15. Diagram

```
     THE MACHINE COORDINATE SYSTEM
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  MACHINE ZERO AND THE ENVELOPE (typical VMC)

   MACHINE ZERO ╳ (X0 Y0 Z0 — positive extreme)
                │
    X −900 ─────┼──────────────────────► X 0
   Y 0  ╔═══════╪═════════════════════════╗
        ║       │                         ║
        ║   ┌───┴──────────────┐          ║
        ║   │    FIXTURE       │          ║
        ║   │  ● datum bush A  │          ║
        ║   │   MCS X −615.300 │          ║
        ║   │       Y −288.700 │          ║
        ║   └──────────────────┘          ║
   Y −520 ══════════════════════════════════

   ALL MACHINE POSITIONS ARE NEGATIVE.
   MACHINE ZERO NEVER MOVES.

  ──────────────────────────────────────────────────────────

  THE FUNDAMENTAL RELATION

        MACHINE POSITION = WORK OFFSET + WORK POSITION

     ├──── work offset −615.300 ────┤├─ work X 236 ─┤
     ╳                              ●              ●
   MACHINE                       WORK           FEATURE
    ZERO                         ORIGIN         MCS −379.300

     REARRANGED, AS USED AT SETUP:
        WORK OFFSET = MACHINE POSITION − WORK POSITION
     Touch the face, read MACHINE, enter it as offset.

  ──────────────────────────────────────────────────────────

  WHY HOMING IS PRECISE

     1. move toward home       ─────────────►
     2. trip the limit switch          ▐ ±1 mm, coarse
     3. reverse, creep slowly     ◄────
     4. find the ENCODER MARKER PULSE  ▌ ±microns

   ┌──────────────────────────────────────────────┐
   │ THE SWITCH SAYS ROUGHLY WHERE TO LOOK.       │
   │ THE MARKER PULSE DEFINES THE POSITION.       │
   │ That is why home is repeatable to microns.   │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE REFIT ERROR — A FIXTURE DESIGN PROBLEM

   ✗ BOLTED ONLY                 ✓ KEYED / DOWELLED

    ┌──────────────┐              ┌──────────────┐
    │   FIXTURE    │              │   FIXTURE    │
    └──┬────────┬──┘              └──┬────────┬──┘
   ════╧════════╧════            ════╧═══▼▼═══╧════
      bolts only                   bolts + KEYS
                                        in T-slot

   Refit lands anywhere            Refit lands within
   within bolt clearance           the key fit
   → 0.35 mm error observed        → typically <0.05 mm
   → G54 now WRONG                 → G54 STILL VALID
   → EVERY PART SCRAP

   ┌──────────────────────────────────────────────┐
   │ "FIT A POSITIVE STOP FOR THE PART" AND       │
   │ "FIT A POSITIVE LOCATION FOR THE FIXTURE"    │
   │ ARE THE SAME PRINCIPLE.                      │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE ERROR SIGNATURE — A DIAGNOSTIC HABIT

   ALL PARTS WRONG BY THE      PARTS WRONG BY VARYING
   SAME AMOUNT, SAME WAY       AMOUNTS, NO PATTERN
        ●●●                        ●   ●
        ●●●  ← offset               ● ●  ← process /
        ●●●    error              ●   ●    clamping
                                            instability
   → CHECK OFFSETS AND         → CHECK CLAMPING, CHIPS,
     FIXTURE POSITION            MACHINE REPEATABILITY

   RECOGNISING WHICH PATTERN YOU HAVE HALVES THE
   SEARCH SPACE IMMEDIATELY.
```

### 16. Drawing example
The fixture assembly drawing should specify the table location features and give the reference for
setting:

```
NOTE 1: FIXTURE LOCATED TO MACHINE TABLE BY 2 OFF
        LOCATING KEYS ITEM 14 IN T-SLOT 3.
        KEYS TO BE A CLOSE SLIDING FIT IN THE SLOT.
        FIXTURE POSITION IS RESTORED BY THE KEYS ON
        REFITTING — DO NOT RELY ON BOLTS ALONE.

NOTE 2: WORK ORIGIN FOR PROGRAMMING IS THE CENTRE OF
        DATUM BUSH ITEM 7, AT THE TOP FACE OF LOCATING
        PAD ITEM 4. SEE SETUP SHEET SS-2291.

NOTE 3: AFTER ANY REMOVAL AND REFIT, VERIFY THE WORK
        OFFSET BY PROBING DATUM BUSH ITEM 7 BEFORE
        RUNNING PRODUCTION.
```

Note 1 states not just what the feature is but **what it is for**, which is the difference between a
note that gets respected and one that gets value-engineered away.

### 17. CAD workflow
1. Place the **machine table reference model** with its origin at **machine zero**, not at the table
   centre — so that CAD coordinates read directly as machine coordinates
2. Position the fixture in the assembly at its intended table location
3. Read off the **MCS coordinates of the intended work origin** directly from the model
4. These become the **predicted G54 values**, which can be pre-loaded before the fixture arrives
5. Create a **travel-limit wireframe box** in the model and check every feature against it visually
6. Model the **locating keys and their T-slot engagement** so the mounting is unambiguous

`[PRACTICE]` Step 1 is a small decision with a large payoff. If the CAD origin is machine zero, the
model *is* the setup sheet: any coordinate you measure in CAD is a machine coordinate the setter can
compare directly against the control display.

### 18. GD&T application
The relationship between the fixture's table-locating features and its part-locating features is a
positional relationship, and it is what makes the predicted offsets valid. Full treatment at L21; the
preview:

```
STANDARD: ASME Y14.5-2018

Datum A — fixture base mounting face (seats on the table)
Datum B — locating key slot / key face (orients to the T-slot)
Datum C — the second key, or an edge

Then the part-locating features are positioned to |A|B|C|:

  ┌──────────────────────────────┐
  │ ⌖ │ Ø0.03 │ A │ B │ C │      │
  └──────────────────────────────┘

  MEANING: the datum bush is within Ø0.03 mm of true
  position RELATIVE TO THE FEATURES THAT LOCATE THE
  FIXTURE TO THE TABLE.

  THIS IS WHAT MAKES A PREDICTED OFFSET POSSIBLE. If
  the bush is not controlled relative to the keys, the
  fixture's position on the table tells you nothing
  about where the part will be.
```

### 19. Manufacturing method
The locating keys must be machined **in the same setup as, or directly referenced to, the part-locating
features** — for exactly the reason given in §18. `[PRACTICE]` Common practice is to machine the key
slots in the fixture base after the locating features are established, indicating from the locating
features rather than from the base edges. Keys themselves are usually bought hardened and ground, then
fitted to the slot `[PRACTICE]` — an application of the L0.5.2 "buy, don't make" principle.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Key-to-datum-bush position | CMM from the key faces | ±0.02 mm |
| Key fit in the T-slot | Feeler / slip gauge | Close sliding fit, ≤0.02 mm side play |
| Refit repeatability | Remove and refit 5 times, indicate the datum bush | ≤0.03 mm spread |
| Fixture MCS position as set | Machine probe, recorded | Recorded, not toleranced |
| Travel clearance | Dry run at extremes | No overtravel alarm |

`[PRACTICE]` The refit repeatability test — remove and refit five times, indicating the datum bush each
time — is the direct verification of everything this lesson is about, and it takes fifteen minutes.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Bolting the fixture without locating it** | Refit shifts; every part consistently wrong |
| 2 | Doing the **travel check in work coordinates** | Overtravel discovered mid-cycle |
| 3 | Confusing the **MACHINE and ABSOLUTE (work)** displays | Offsets set wrongly |
| 4 | Using **G0 Z0** instead of **G53 G0 Z0** for retract | Retracts to the top of the part, not to machine zero |
| 5 | Not **recording the fixture's MCS position** | Cannot restore after removal |
| 6 | Assuming an **absolute encoder never needs homing** | Battery failure loses the reference |
| 7 | Fixture obstructing the **tool change or home path** | Collision |
| 8 | **Typing** offsets rather than probing them | Single-digit keying errors |
| 9 | Not re-verifying the offset **after a refit** | Silent, consistent scrap |
| 10 | Forgetting that machine positions are usually **negative** | Sign errors in the arithmetic |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| All parts wrong by the same amount, same direction | Work offset or fixture position error | Probe the datum feature, compare with the offset | Re-set the offset | Locate the fixture positively |
| Parts wrong by varying amounts | Clamping, chips, machine repeatability | Repeat-clamp test | Address the process | Not an offset problem |
| Error appears after the fixture was removed and refitted | Fixture not located to the table | Refit repeatability test | Fit locating keys | Design rule R1 |
| Overtravel alarm part-way through a cycle | Feature outside travel in MCS | Convert the extreme feature to MCS | Reposition the fixture | Travel check in MCS |
| Collision on retract | G0 Z0 to work zero rather than G53 | Read the programme | Use G53 for retract | Programme standard |
| Machine loses position after power failure | Incremental encoder, needs homing | Re-home | Normal procedure | Understand encoder type |
| Machine will not home | Home switch or marker pulse fault | Service check | Service | Periodic maintenance |
| Offset value looks plausible but is wrong by exactly 1 mm or 10 mm | Typed offset, keying error | Re-probe the datum | Correct | Probe rather than type |

### 23. Design checklist
- [ ] Is the fixture **positively located to the table** by keys or dowels?
- [ ] Are the locating keys **positioned relative to the part-locating features**, and toleranced?
- [ ] Has the **travel check been done in machine coordinates** for the extreme features?
- [ ] Is there sufficient **headroom** in each axis, and is the constrained direction recorded?
- [ ] Is the **work origin definition** stated unambiguously on the drawing and the setup sheet?
- [ ] Is the fixture's **MCS position recorded** in the setup documentation?
- [ ] Does the fixture clear the **home, tool change and pallet change positions**?
- [ ] Is there a note requiring **offset re-verification after refit**?
- [ ] Is a **soft-limit forbidden region** worth defining for this fixture?
- [ ] Is the offset intended to be **probed rather than typed**?

### 24. Beginner exercise
**E1.2.1-B** — A VMC has travels X: MCS −800 to 0, Y: MCS −450 to 0, Z: MCS −500 to 0. A work offset is
set at G54 X = −540.000, Y = −260.000, Z = −220.000.
(a) A feature is programmed at work X = 185.000, Y = 92.000, Z = −15.000. Calculate its machine
coordinates.
(b) Verify that this feature is within travel on all three axes.
(c) Calculate the maximum positive work X coordinate that can be reached.
(d) Explain in one sentence why machine positions on this machine are negative.
(e) State the difference between the MACHINE and ABSOLUTE position displays.

### 25. Intermediate exercise
**E1.2.1-I** — A fixture datum is measured at MCS X = −672.450, Y = −301.120, Z = −248.900 on a machine
with travels X: −950 to 0, Y: −550 to 0, Z: −560 to 0.
(a) State the G54 values.
(b) The part requires features spanning work X 0 to 310 and work Y 0 to 205. Calculate the machine
coordinates of the four extreme corners and verify travel.
(c) Calculate the remaining headroom in +X and +Y.
(d) The deepest cut is at work Z = −78.000. Calculate the machine Z and the remaining Z travel.
(e) The fixture is refitted 0.28 mm out in −Y without re-setting the offset. State the magnitude and
direction of the resulting error on the parts, and determine whether parts toleranced at ±0.15 mm will
pass.
(f) Explain why the error described in (e) has a characteristic signature, and what that signature tells
a troubleshooter.

### 26. Advanced exercise
**E1.2.1-A** — A two-station fixture is proposed on a VMC with travels X: MCS −1,020 to 0, Y: MCS −560
to 0, Z: MCS −580 to 0. Station 1 datum is at MCS X = −780.600, Y = −340.250, Z = −262.700. Station 2 is
nominally 320.000 mm in +X from station 1. Each station's part has features spanning work X 0 to 268,
work Y 0 to 190, work Z 0 to −64.
(i) Calculate the G54 (station 1) and G55 (station 2) offset values.
(ii) Determine the machine coordinates of the extreme feature on each station and verify travel for
both.
(iii) Calculate the remaining +X headroom after station 2's furthest feature and comment on whether a
third station could be added.
(iv) The fixture is to be located to the table by two keys in a single T-slot, 400 mm apart. If each key
has 0.02 mm of side play in the slot, calculate the maximum angular misalignment on refit, in
arc-seconds and in radians.
(v) Using the result of (iv), calculate the resulting positional error at station 2's furthest feature,
which lies 588 mm from station 1's datum in X.
(vi) Compare this with the 0.35 mm error from the lesson's worked example and comment on whether keying
solves the refit problem completely.
(vii) Explain why a rotational refit error is more damaging than a translational one on a multi-station
fixture, and propose two design measures that reduce it.
(viii) Write the setup-sheet entries you would produce for this fixture.

### 27. Interview questions
1. *"What is the difference between machine zero and work zero?"*
   **Answer:** Machine zero is a fixed physical origin built into the machine, established every time
   the machine homes, and it never moves — every position the control knows is ultimately measured from
   it. Work zero is wherever the programmer has decided to put the origin for a particular job, usually
   a convenient corner or bore on the part, and it is defined by a work offset which is simply the
   machine coordinate of that point. So machine zero is a property of the machine and work zero is a
   property of the job; and the relationship between them is machine position equals work offset plus
   work position. The practical value of understanding this is that travel checks and fixture positions
   have to be reasoned about in machine coordinates, while programming and normal operation happen in
   work coordinates.
2. *"Why does a CNC machine need to home when it is switched on?"*
   **Answer:** Because most machines use incremental encoders, which count movement but have no memory
   of absolute position — on power-up the control genuinely does not know where the axes are. Homing
   establishes that reference. The sequence is that the axis moves until it trips a home switch, which
   locates it to roughly a millimetre, then reverses and creeps until the encoder's once-per-revolution
   marker pulse is detected, and that pulse defines machine zero precisely. The switch is only there to
   tell the machine which revolution to look at; the marker pulse gives the micron-level repeatability.
   Machines with absolute encoders do not need routine homing because they report position directly,
   but they still need re-referencing by a service engineer if the backup battery fails.

### 28. Expert questions
1. *"A shop keeps having a problem where a fixture is removed for another job and, when refitted, the
   first parts are scrap. How would you fix it?"*
   **Answer:** I would treat it as a **design defect rather than a discipline problem**, because framing
   it as "the setter should have re-checked" guarantees it recurs.
   The diagnosis is usually straightforward. If all the parts are wrong by the same amount in the same
   direction, that is an offset or fixture-position error, not a process instability — that signature
   alone tells you where to look. The measurement that confirms it is a refit repeatability test:
   remove and refit the fixture five times, indicating a datum feature each time, and see the spread. On
   a fixture held by bolts alone in clearance holes that spread can easily be several tenths of a
   millimetre, which is far more than most tolerances allow.
   The primary fix is to **positively locate the fixture to the table** — keys engaging a T-slot, or
   dowels into the table if the table is dowelled. This is the same principle as fitting a positive stop
   for the part: do not rely on friction or on someone's care when a physical feature can do the job.
   Two keys in one T-slot give position in one axis and orientation; a third feature or an end stop
   gives the second axis. The cost is very small and the refit then repeats to within the key fit,
   typically well under 0.05 mm.
   But I would go further, because keying alone still leaves a small residual and a possibility of
   rotation. I would add two things. First, a **datum feature that can be probed** — a hardened bush or
   a boss — so that re-qualifying the offset takes thirty seconds with a spindle probe instead of
   fifteen minutes with an edge finder. If verification is cheap, it gets done. Second, a **note on the
   drawing and the setup sheet** requiring offset verification after any refit, and the recorded MCS
   position to compare against, so the setter has both the instruction and the reference value.
   I would also ask **why the fixture is being removed so often**. Sometimes the real answer is that the
   machine is over-committed, or that a dedicated fixture is being shuffled when a second one would pay
   for itself in avoided changeover and avoided scrap. That is a cost calculation of the kind in L0.1.3,
   and it is sometimes the right answer.
   What I would not do is rely on training alone. The setter is doing many things under time pressure,
   and a fixture that requires perfect memory to be safe is a fixture that will produce scrap eventually.
2. *"Why do you, as a fixture designer, need to understand the machine coordinate system at all? Isn't
   that the programmer's concern?"*
   **Answer:** There is a real division of labour, and most of the time the programmer does work in
   work coordinates and I do not need to think about machine coordinates. But there are four situations
   where the boundary breaks down, and all four land on me.
   The first is the **travel check**. Whether a feature can be reached depends on where the fixture sits
   on the table, which is my decision, expressed in machine coordinates. A check done in work
   coordinates cannot detect an overtravel, because work coordinates say nothing about where the work
   origin is on the machine. If I place the fixture badly, the programmer discovers it as an alarm
   part-way through a proving cut.
   The second is **fixture repeatability on the table**. The offsets only stay valid if the fixture
   returns to the same machine position, and whether it does is entirely a function of how I designed
   the mounting. That is the refit problem, and it is mine.
   The third is **collision with machine positions**. Tool change, pallet change and home are all at
   specific machine coordinates. A fixture that fouls the path to any of them is a fixture that crashes,
   and the programmer generally assumes the fixture designer has checked it.
   The fourth is more conceptual but matters most. **The machine has no idea a part exists.** It knows
   axis positions relative to machine zero, and it will drive to whatever coordinates it is given with
   complete indifference to whether the part is there. Everything that connects those numbers to a
   physical component is arranged by people — and the physical half of that arrangement is the fixture.
   Once you see it that way, "the fixture puts the part where the coordinates say it is" stops being a
   slogan and becomes an accurate description of the job. Understanding what a coordinate system
   actually is, physically, is a prerequisite for building the thing that makes it true.

### 29. Summary
The machine coordinate system is a right-handed Cartesian system fixed to the machine structure with its
origin at machine zero, a position established at power-up by reference return and defined precisely by
the encoder's marker pulse rather than by the coarse home switch. On most vertical machining centres
machine zero sits at the positive extreme of all three axes, so machine positions are negative. Machine
zero never moves, and everything else — work offsets, tool offsets, fixture positions — is measured from
it, which is why its repeatability underpins every other number on the machine. The relationship that
governs everything is that machine position equals work offset plus work position, and rearranged, the
work offset is simply the machine position of the work origin — which is exactly what happens when a
setter touches a face and presses "measure". The fixture designer needs the MCS for four reasons:
travel checks are machine-coordinate calculations, the fixture's table position is recorded and restored
in machine coordinates, soft limits and tool-change positions are machine-coordinate constraints, and
above all a fixture that is bolted but not located does not return to the same machine position on
refit, which produces a consistent error on every part — a signature that distinguishes offset errors
from process instability. The design answer is positive location of the fixture to the table, which is
the same principle as fitting a positive stop for the part.

### 30. Key takeaways
- **Machine zero never moves.** Everything else is measured from it.
- **MACHINE POSITION = WORK OFFSET + WORK POSITION**; the offset is the machine position of the work
  origin.
- Homing is precise because it uses the **encoder marker pulse**, not the home switch.
- On most VMCs, machine positions are **negative** `[GUIDE]`.
- **Travel checks must be done in machine coordinates.** Work coordinates cannot detect overtravel.
- **G53 retracts in machine coordinates** — the safe form.
- **A bolted-only fixture does not return to the same place.** Key it or dowel it.
- **Record the fixture's MCS position** and require re-verification after refit.
- **All parts wrong by the same amount** = offset or fixture-position error. **Varying amounts** =
  process instability. This signature halves the search.
- **The machine does not know a part exists.** The fixture is what makes the coordinates true.

---

## LESSON L1.2.2 — WORK COORDINATE SYSTEMS AND WORK OFFSETS

### 1. Lesson title
**L1.2.2 — G54–G59, extended offsets, and allocating offsets across multi-component and tombstone fixtures**

### 2. Learning objective
By the end of this lesson you will be able to explain what a work coordinate system is and how a work
offset defines it, use G54–G59 and extended offsets correctly, distinguish common (G92/G54.1 base) and
local (G52) offset shifts, allocate offsets systematically across a multi-station fixture, and identify
the fixture design decisions that make an offset scheme robust or fragile.

### 3. Prerequisites
L1.2.1 (MCS), L1.1.4 (tombstones, multi-station), L0.2.5 (tolerance stacking).

### 4. Why the topic matters
L1.2.1 established that the machine works in machine coordinates and that nobody wants to program in
them. The work offset is the bridge, and for a single-part fixture it is a simple idea that needs
little discussion.

**The reason this lesson matters is multi-station work.** A four-face tombstone with three parts per
face needs twelve work coordinate systems, and the moment you have twelve, several genuine engineering
questions appear:

1. **Where do the numbers come from?** Measured on the machine, one station at a time, or computed from
   the fixture design?
2. **Do the stations share error, or does each carry its own?** This is a stack-up question, and it has
   a direct answer that most people get wrong.
3. **What happens when the fixture is re-qualified?** Twelve offsets re-measured individually, or one
   reference and eleven computed?
4. **How does the operator know which offset belongs to which station?** This is where scrap comes from.

Those are fixture design questions as much as programming questions, and the answers change the fixture.

### 5. Simple explanation
A **work offset** tells the machine where the part is. It is just the machine coordinate of the point
you want to call "zero" for programming.

The standard work offsets are **G54, G55, G56, G57, G58 and G59** — six of them. Each stores an X, Y and
Z value.

```
   Machine has ONE machine zero.
   You can define SIX (or many more) work zeros.

   ╳ machine zero
   ┌───────────────────────────────────┐
   │                                   │
   │   ●G54        ●G55        ●G56    │
   │   part 1      part 2      part 3  │
   │                                   │
   └───────────────────────────────────┘

   Programme:
     G54  (machine now works from part 1's origin)
     ... cut part 1 ...
     G55  (same code, but now from part 2's origin)
     ... cut part 2 ...

   THE SAME PROGRAMME, DIFFERENT ORIGIN. That is the
   whole point — one subprogram can machine every part.
```

If you need more than six — a tombstone with twelve or sixteen stations — the control provides
**extended offsets**, typically `G54.1 P1` through `G54.1 P48` or more.

### 6. Engineering explanation

**WHAT A WORK OFFSET ACTUALLY IS**

A work offset is a stored vector from machine zero to the work origin. When a work offset is active,
every programmed coordinate is interpreted relative to that origin.

```
   ACTIVE OFFSET G54 = (X −615.300, Y −288.700, Z −265.400)

   Programme block:  G0 X100. Y50.

   Machine drives to:
     X: −615.300 + 100.000 = −515.300  (MCS)
     Y: −288.700 +  50.000 = −238.700  (MCS)

   The programmer never sees the machine numbers.
```

**THE STANDARD SIX AND THE EXTENDED SET**

| Code | Common name | Typical count |
|---|---|---|
| **G54–G59** | Standard work offsets | 6 |
| **G54.1 P1 – P48** | Extended (additional) work offsets, Fanuc-style | 48 typical, up to 300 on some controls `[MFR]` |
| **G54 P1 – Pn** | Extended offsets, some other control families | Varies `[MFR]` |
| **G52** | Local coordinate system — a temporary shift *within* the active WCS | 1 active |
| **G92** | Sets the current position to a stated value — legacy, avoid | — |
| **EXT / common offset** | A shift applied to *all* work offsets simultaneously | 1 |

`[MFR]` The exact codes and counts are control-specific. Fanuc, Siemens, Heidenhain, Mazak and Haas all
differ in syntax and capability. **Confirm what the actual control supports before designing a fixture
that needs twenty offsets.**

**THE COMMON OFFSET — THE FEATURE THAT MAKES TOMBSTONES PRACTICAL**

```
   COMMON (EXT) OFFSET

   Machine position = COMMON offset
                    + work offset (G54 etc.)
                    + local offset (G52)
                    + programmed position

   ┌────────────────────────────────────────────┐
   │ THE COMMON OFFSET SHIFTS EVERY WORK OFFSET │
   │ AT ONCE.                                   │
   └────────────────────────────────────────────┘
```

This is enormously useful and is worth understanding properly, because it changes how a multi-station
fixture is qualified.

```
   TWO WAYS TO SET 12 TOMBSTONE OFFSETS

   METHOD A — MEASURE ALL TWELVE INDEPENDENTLY
     Probe each station's datum, store 12 offsets.
     ✓ Each station's true position captured, including
       any fixture manufacturing error
     ✗ 12 measurements, each with its own uncertainty
     ✗ Re-qualifying after a crash or refit = 12 again
     ✗ Slow

   METHOD B — ONE REFERENCE + COMPUTED STATIONS
     Probe ONE reference datum on the tombstone.
     Enter that as the COMMON offset.
     Enter the 12 station offsets as their NOMINAL
     positions from the tombstone reference, taken
     from the CAD model.
     ✓ ONE measurement to re-qualify everything
     ✓ Station-to-station relationships come from the
       fixture's MANUFACTURED accuracy, which is a
       controlled, inspected quantity
     ✓ Fast, and the offset table is derived from CAD
     ✗ Any fixture manufacturing error is NOT
       compensated — it goes straight into the part
```

> **Method B is normal practice for a well-made tombstone, and it is the reason the GD&T requirement in
> L1.1.4 §18 matters.** If every station's locators are held within Ø0.02 mm of true position relative
> to the pallet datums, then the nominal offsets are correct to within 0.02 mm and there is no reason to
> measure each one. If the tombstone was made carelessly, Method B pushes that carelessness into every
> part, and Method A becomes necessary as a workaround.
>
> **So the choice of offset method is a consequence of how well the fixture was manufactured.** That is
> a fixture designer's responsibility, not a programmer's.

**A STACK-UP RESULT THAT SURPRISES PEOPLE**

Consider a positional requirement *between* features on two different stations — say, a fixture where
two components are machined and later assembled, and the relationship matters.

```
   METHOD A — each station measured independently

     Station 1 offset error = u  (measurement uncertainty)
     Station 2 offset error = u
     Relationship error = u + u = 2u    (worst case)
                        = u√2           (RSS)

   METHOD B — one reference, nominal spacing

     Common offset error = u  — BUT IT AFFECTS BOTH
       STATIONS EQUALLY AND THEREFORE CANCELS in the
       station-to-station relationship
     Station spacing error = fixture manufacturing
       tolerance, t
     Relationship error = t only

   ┌────────────────────────────────────────────────┐
   │ A COMMON-MODE ERROR CANCELS IN A RELATIVE      │
   │ MEASUREMENT.                                   │
   │                                                │
   │ So if the STATION-TO-STATION relationship is   │
   │ what matters, Method B is BETTER — provided    │
   │ the fixture is well made. If ABSOLUTE position │
   │ relative to a datum outside the fixture is     │
   │ what matters, the common offset error does NOT │
   │ cancel and Method A may be preferable.         │
   └────────────────────────────────────────────────┘
```

This is the same reasoning as baseline versus chain dimensioning from L0.2.5, appearing in a different
guise. **Ask which relationship the drawing actually controls**, then choose the offset method that
makes that relationship as insensitive as possible.

**G52 — THE LOCAL COORDINATE SYSTEM**

`G52` applies a temporary shift *within* the active work offset, and `G52 X0 Y0 Z0` cancels it.

```
   Typical use: a repeated pattern.

     G54                    ← base position
     G52 X0    Y0    ; part 1
       M98 P1000            ← subprogram cuts one part
     G52 X150. Y0    ; part 2, 150 mm along
       M98 P1000
     G52 X300. Y0    ; part 3
       M98 P1000
     G52 X0 Y0 Z0    ← CANCEL. Do not forget this.
```

`[PRACTICE]` G52 is powerful and is a classic source of crashes, because **an uncancelled G52 persists**
and silently corrupts the next operation. Many shops prohibit it in production programmes for that
reason and use extended offsets instead. Where it is used, cancelling it in the same block structure
that set it is the discipline.

**G92 — LEGACY, AND WHY IT IS AVOIDED**

`G92` sets the current position to a stated value, which shifts the coordinate system by implication
rather than by a stored value. It is dangerous because it depends on where the machine happens to be
when the block executes, it persists across programmes, and it is not visible in the offset table. It
exists for compatibility with older machines. `[PRACTICE]` **Do not use G92 in new programmes.**

**ALLOCATING OFFSETS ON A MULTI-STATION FIXTURE**

This is the fixture designer's contribution, and it should be systematic.

```
   ALLOCATION PRINCIPLES  [PRACTICE]

   1. USE A LOGICAL, PREDICTABLE SEQUENCE
      Face A stations 1-3 = P1, P2, P3
      Face B stations 1-3 = P4, P5, P6   etc.
      NOT: whichever offset happened to be free.

   2. MAKE THE STATION NUMBER PHYSICALLY VISIBLE
      Stamp or engrave the station identifier ON THE
      FIXTURE, next to the station. The operator and
      the setter must be able to see which is which
      without consulting a document.

   3. MATCH THE PHYSICAL LAYOUT TO THE NUMBERING
      If the numbering runs bottom-to-top on each
      face, say so and be consistent across all
      faces. Arbitrary numbering causes loading
      errors.

   4. LEAVE SPARE OFFSETS
      Do not consume every available offset. Leave
      some for setup, probing routines and future
      additions.

   5. DOCUMENT THE FULL TABLE
      Every station: offset number, B-axis position,
      nominal X, Y, Z from the fixture reference, and
      what it locates.

   6. DERIVE THE TABLE FROM CAD, NOT BY HAND
      (L1.1.4 §17 step 10.)
```

**THE OFFSET TABLE — THE DELIVERABLE**

A multi-station fixture's offset table is a design deliverable, not a programming afterthought. It looks
like this:

```
FIXTURE FX-3310 — OFFSET TABLE                [PROJ]
Reference: tombstone datum bush TB-REF,
  probed and entered as the COMMON (EXT) offset.
All station values are NOMINAL, from CAD, relative
to TB-REF.

STN  OFFSET     B      X        Y        Z      NOTE
──────────────────────────────────────────────────────
A1   G54.1 P1     0  −120.000   95.000  −40.000  low
A2   G54.1 P2     0  −120.000  255.000  −40.000  mid
A3   G54.1 P3     0  −120.000  415.000  −40.000  top
B1   G54.1 P4    90  −120.000   95.000  −40.000  low
B2   G54.1 P5    90  −120.000  255.000  −40.000  mid
B3   G54.1 P6    90  −120.000  415.000  −40.000  top
C1   G54.1 P7   180  −120.000   95.000  −40.000  low
...
D3   G54.1 P12  270  −120.000  415.000  −40.000  top

SPARE: P13-P20 reserved for probing and future use.
```

> **Notice that all four faces have identical X, Y, Z values** in this example, differing only in the
> B-axis position. That is the signature of a **symmetrical tombstone**, and it is a deliberate design
> choice worth making where the part allows: it makes the offset table trivial to verify, makes a
> transcription error obvious, and means a station can be checked against its opposite face. Asymmetric
> station positions across faces are sometimes unavoidable, but they should be a decision rather than an
> accident.

### 7. Terminology

| Term | Definition |
|---|---|
| **WCS** | Work coordinate system — the origin the programme works from |
| **Work offset** | Stored vector from machine zero to the work origin |
| **G54–G59** | The six standard work offsets |
| **Extended offsets** | Additional offsets, e.g. G54.1 P1–P48 `[MFR]` |
| **Common offset (EXT)** | A shift applied to all work offsets simultaneously |
| **G52** | Local coordinate system; a temporary shift within the active WCS |
| **G92** | Legacy coordinate-setting command; avoid |
| **Station** | One part position on a multi-part fixture |
| **Offset table** | Documented list of every station's offset and nominal position |
| **Common-mode error** | An error affecting all stations equally, which cancels in relative measurements |
| **Nominal offset** | Offset value taken from the design model rather than measured |

### 8. Principle

> **A WORK OFFSET IS THE MACHINE COORDINATE OF THE WORK ORIGIN — NOTHING MORE.**
> On a multi-station fixture, the choice between measuring every station and using one probed reference
> plus nominal spacings is an **engineering decision, not a convenience**: a common-mode error cancels
> in station-to-station relationships but not in absolute ones.
> **Using nominal offsets pushes the fixture's manufacturing accuracy directly into the part** — which
> is acceptable only if the fixture was made and inspected to a tolerance that supports it.
> **Offset allocation must be systematic, physically labelled on the fixture, and documented in an
> offset table derived from CAD.**

### 9. Industrial application

**The offset table as a design deliverable**

`[PRACTICE]` On any fixture with more than one station, the offset table should be issued as part of the
design package, alongside the assembly drawing and the setup sheet. It should state:

| Column | Why it is needed |
|---|---|
| Station ID | Matches the marking physically on the fixture |
| Offset code | What the programmer and setter enter |
| B-axis position | For tombstones and rotary work |
| Nominal X, Y, Z from the fixture reference | The values to enter |
| Source | Whether measured or nominal from CAD |
| What it locates | Part number and orientation |
| Revision | Offsets change when the fixture is modified |

**Where multi-station offset schemes fail in production**

| Failure | Mechanism | Design prevention |
|---|---|---|
| Part loaded in the wrong station | No physical station marking | Engrave station IDs on the fixture |
| Right station, wrong offset called | Illogical numbering | Systematic sequence matching the layout |
| Offsets valid, one station consistently out | Fixture manufacturing error at that station, using nominal offsets | Inspect stations on a CMM; consider measuring that station |
| All stations shift together after a crash | Common offset changed or lost | One probed reference makes recovery quick |
| Offsets lost entirely | No documented table | Issue the offset table as a controlled document |
| Uncancelled G52 corrupts the next operation | G52 used without cancel | Prohibit G52; use extended offsets |
| Fixture modified, offsets not updated | No revision control on the table | Revision-control the table with the drawing |

> **The most common of these is the first: the part loaded in the wrong station.** It is a Poka-Yoke
> problem (L28) and the answers are physical — station markings, asymmetric locators that only accept
> the part one way, or different locating pin patterns where the part geometry allows. An offset table
> cannot prevent it; the fixture can.

### 10. Design rules
- **R1** — Allocate offsets in a **systematic sequence matching the physical layout** `[PRACTICE]`.
- **R2** — **Engrave or stamp station identifiers physically on the fixture**, adjacent to each station.
- **R3** — **Derive the offset table from CAD**, not by hand transcription.
- **R4** — Issue the **offset table as a controlled deliverable**, revision-linked to the assembly
  drawing.
- **R5** — Design the tombstone or multi-station layout to be **symmetrical** where the part allows, so
  the offset table is self-checking.
- **R6** — Confirm the **control's available offset count** before committing to a station count `[MFR]`.
- **R7** — **Leave spare offsets** for probing and future additions.
- **R8** — Provide a **single probeable reference datum** on the fixture so all stations can be
  re-qualified from one measurement.
- **R9** — Where nominal offsets will be used, **specify and inspect the station-to-station positional
  tolerance** accordingly (L1.1.4 §18).
- **R10** — Avoid designing a process that requires **G52** or **G92**; prefer extended offsets
  `[PRACTICE]`.
- **R11** — Make wrong-station loading **physically difficult**, not merely documented.

### 11. Rules of thumb
- **G54–G59 gives you six.** More than six stations needs extended offsets.
- **A common-mode error cancels in relative measurements**, not in absolute ones.
- **Nominal offsets push fixture manufacturing error straight into the part.**
- **One probed reference + nominal spacings** re-qualifies a 12-station fixture in one measurement.
- **Symmetrical station layout makes the offset table self-checking.**
- **Engrave the station numbers.** A document the operator cannot see does not prevent errors.
- **An uncancelled G52 is a crash waiting to happen.**
- **Do not use G92** in new programmes.
- Offset counts and syntax are **control-specific** `[MFR]` — confirm them.

### 12. Formulae

**Full offset chain**
```
Machine position = Common offset
                 + Work offset (G54 / G54.1 Pn)
                 + Local offset (G52)
                 + Programmed position
```

**Station offset from a fixture reference**
```
Offset_station = Reference_MCS + Nominal_station_vector
```

**Station-to-station relationship error**
```
Method A (each measured):   E_rel = u₁ + u₂        (worst case)
                            E_rel = √(u₁² + u₂²)   (RSS)
Method B (common + nominal): E_rel = t_fixture
```

**Absolute position error**
```
Method A:  E_abs = u_station
Method B:  E_abs = u_reference + t_fixture
```

| Variable | Meaning | Unit |
|---|---|---|
| u | Measurement uncertainty of setting one offset | mm |
| t_fixture | Station-to-station manufacturing tolerance | mm |
| E_rel | Error in a station-to-station relationship | mm |
| E_abs | Error in absolute position | mm |

### 13. Worked numerical example

**Problem:** A 12-station tombstone is to be offset-qualified. Compare Method A (measure every station)
with Method B (one probed reference plus nominal CAD spacings) for both an absolute and a relative
requirement, determine which is preferable, and establish the fixture manufacturing tolerance needed to
justify Method B.

```
GIVEN:
  FIXTURE                                        [PROJ]
    Tombstone, 4 faces × 3 stations = 12 stations
    Station-to-station manufacturing tolerance,
      as inspected on a CMM         = ±0.015 mm
      (total band t_fixture         =  0.030 mm)
    One probeable reference bush provided

  MEASUREMENT                                    [GUIDE]
    Spindle probe setting uncertainty, per axis,
      per station                   = ±0.008 mm
      (total band u                 =  0.016 mm)
    Probing time per station        = 1.5 min
    Probing time for the reference  = 2.0 min

  REQUIREMENTS                                   [PROJ]
    Requirement R1 (ABSOLUTE): each part's bore
      position relative to its own datum
      tolerance                     = ±0.10 mm
    Requirement R2 (RELATIVE): a bore on a station-1
      part must match a bore on a station-2 part
      when the two are assembled
      tolerance                     = ±0.05 mm

  ERROR BUDGET CONTEXT (from L1.1.1)
    Machine + tooling + measurement, already
      consumed                      = 0.040 mm

REQUIRED:
  (a) Relationship error under Method A, worst case
      and RSS
  (b) Relationship error under Method B
  (c) Absolute error under each method
  (d) Assessment of both requirements under each
      method
  (e) Total qualification time for each method
  (f) The maximum station-to-station manufacturing
      tolerance that would still satisfy R2 under
      Method B
  (g) Engineering conclusion

ASSUMPTION:
  1. Probe setting uncertainty ±0.008 mm per axis is a
     GUIDELINE figure for a good spindle probe on a
     well-maintained machine. It MUST BE CONFIRMED by
     a repeatability study on the actual machine and
     probe. [GUIDE]
  2. Station-to-station manufacturing tolerance is the
     INSPECTED value from the tombstone's CMM report,
     not the drawing tolerance. [PROJ]
  3. Worst-case arithmetic used for the primary
     comparison, with RSS shown alongside. Arithmetic
     is the safer choice at design stage. [PRACTICE]
  4. Under Method B the COMMON offset error affects
     all stations equally and therefore CANCELS in
     station-to-station relationships. This is the
     central assumption of the comparison and is valid
     only if the reference and all stations are on the
     SAME RIGID BODY — which they are on a one-piece
     tombstone. IT WOULD NOT HOLD if stations were on
     separately mounted sub-plates. [PRACTICE]
  5. Pre-existing machine/tooling/measurement
     consumption of 0.040 mm from the L1.1.1 typical
     budget. [GUIDE]

FORMULA:
  (a) E_rel(A) = u + u  ;  RSS = √(u² + u²)
  (b) E_rel(B) = t_fixture
  (c) E_abs(A) = u  ;  E_abs(B) = u + t_fixture
  (f) t_max = tolerance band − other contributions

UNIT CONVERSION:
  All tolerances converted to TOTAL BANDS:
    u          = ±0.008 → 0.016 mm
    t_fixture  = ±0.015 → 0.030 mm
    R1 band    = ±0.10  → 0.200 mm
    R2 band    = ±0.05  → 0.100 mm

SUBSTITUTION AND CALCULATION:

  (a) RELATIONSHIP ERROR — METHOD A

      Each station measured independently, so each
      carries its own measurement uncertainty:

        Worst case:
          E_rel(A) = u + u = 0.016 + 0.016
                   = 0.032 mm

        RSS:
          E_rel(A) = √(0.016² + 0.016²)
                   = √(0.000256 + 0.000256)
                   = √0.000512
                   = 0.02263 mm

  (b) RELATIONSHIP ERROR — METHOD B

      The common offset error is IDENTICAL for both
      stations and cancels in the difference. What
      remains is the fixture's own station-to-station
      manufacturing error:

        E_rel(B) = t_fixture = 0.030 mm

  (c) ABSOLUTE ERROR

      METHOD A — each station measured against the
      machine directly:
        E_abs(A) = u = 0.016 mm

      METHOD B — reference measured, station position
      inherited from the fixture:
        E_abs(B) = u_reference + t_fixture
                 = 0.016 + 0.030
                 = 0.046 mm

  (d) ASSESSMENT AGAINST BOTH REQUIREMENTS

      R1 — ABSOLUTE, band 0.200 mm
      Pre-existing consumption 0.040 mm
      Remaining 0.160 mm

        Method A: 0.016 mm  →  10.0 % of remaining
                  Total 0.040+0.016 = 0.056 mm
                  = 28.0 % of the 0.200 band  ✓ PASS

        Method B: 0.046 mm  →  28.8 % of remaining
                  Total 0.040+0.046 = 0.086 mm
                  = 43.0 % of the 0.200 band  ✓ PASS

        → BOTH METHODS PASS R1 comfortably.
          Method A is better, but the margin under
          Method B is still ample.

      R2 — RELATIVE, band 0.100 mm
      Pre-existing consumption 0.040 mm
      Remaining 0.060 mm

        Method A (worst case): 0.032 mm
                  = 53.3 % of the remaining 0.060
                  Total 0.040+0.032 = 0.072 mm
                  = 72.0 % of the 0.100 band  ⚠ TIGHT

        Method A (RSS): 0.0226 mm
                  Total ≈ 0.0626 mm = 62.6 %  ⚠

        Method B: 0.030 mm
                  = 50.0 % of the remaining 0.060
                  Total 0.040+0.030 = 0.070 mm
                  = 70.0 % of the 0.100 band  ⚠ TIGHT

        → METHOD B IS SLIGHTLY BETTER ON THE
          RELATIVE REQUIREMENT (0.030 vs 0.032
          worst case), DESPITE BEING WORSE ON THE
          ABSOLUTE ONE.

        Both are tight. Neither is comfortable.

  (e) QUALIFICATION TIME

      METHOD A:
        12 stations × 1.5 min = 18.0 min

      METHOD B:
        1 reference × 2.0 min =  2.0 min
        + entering 12 nominal values from the table
          (no machine time)

      TIME SAVING = 16.0 min per qualification
      RATIO = 18.0/2.0 = 9.0×

      And this applies EVERY TIME the fixture is
      re-qualified — after a refit, after a crash,
      after maintenance.

  (f) MAXIMUM FIXTURE TOLERANCE FOR R2 UNDER METHOD B

      Target: total error ≤ the 0.100 mm band, with a
      sensible margin. Take 80 % as the acceptance
      limit [PRACTICE]:

        Allowable total  = 0.100 × 0.80 = 0.080 mm
        Less pre-existing = 0.080 − 0.040 = 0.040 mm

        So  t_fixture ≤ 0.040 mm total band
                      = ±0.020 mm

      The tombstone as inspected is ±0.015 mm
      (0.030 total).

        Utilisation = 0.030/0.040 = 75 %   ✓ ACCEPTABLE

      → THE FIXTURE IS GOOD ENOUGH TO JUSTIFY
        METHOD B — but only by a 25 % margin.

      If the tombstone had been made to ±0.030 mm
      (0.060 total):
        Total = 0.040 + 0.060 = 0.100 mm
              = 100 % of the band  ✗ FAIL
      → Method B would be untenable and every station
        would have to be measured.

RESULT:
  ┌────────────────────────────────┬───────────────────┐
  │ (a) E_rel Method A, worst case │ 0.032 mm          │
  │     E_rel Method A, RSS        │ 0.0226 mm         │
  │ (b) E_rel Method B             │ 0.030 mm          │
  │ (c) E_abs Method A             │ 0.016 mm          │
  │     E_abs Method B             │ 0.046 mm          │
  │ (d) R1 absolute, Method A      │ 28.0 % ✓ PASS     │
  │     R1 absolute, Method B      │ 43.0 % ✓ PASS     │
  │     R2 relative, Method A      │ 72.0 % ⚠ TIGHT    │
  │     R2 relative, Method B      │ 70.0 % ⚠ TIGHT    │
  │ (e) Qualification time A       │ 18.0 min          │
  │     Qualification time B       │  2.0 min (9.0×)   │
  │ (f) Max t_fixture for R2       │ ±0.020 mm         │
  │     Actual, as inspected       │ ±0.015 mm (75 %)  │
  └────────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The equivalent margin is
  tolerance utilisation. R1 is comfortable under both
  methods. R2 sits at 70-72 % under both, which is
  workable but leaves little room for locator wear —
  and wear is precisely what will consume it over the
  fixture's life.

PASS/FAIL:
  ✓ PASS — R1 under both methods.
  ⚠ MARGINAL PASS — R2 under both methods, at ~70 %.
  ✓ PASS — Method B is justified by the fixture's
    inspected accuracy, at 75 % of the maximum
    permissible manufacturing tolerance.

ENGINEERING CONCLUSION:
  1. METHOD B WINS ON THE RELATIVE REQUIREMENT, WHICH
     IS COUNTER-INTUITIVE AND IS THE POINT OF THE
     CALCULATION.
     Method B is worse on absolute position — 0.046 mm
     against 0.016 mm, nearly three times as bad —
     because it inherits the fixture's manufacturing
     error on top of the reference measurement. Yet it
     is slightly BETTER on the station-to-station
     relationship, 0.030 against 0.032 mm.
     THE REASON IS THAT THE COMMON OFFSET ERROR
     CANCELS. Both stations are displaced by exactly
     the same amount, so their relationship is
     untouched. Under Method A each station carries an
     independent measurement error and they ADD.
     THE GENERAL PRINCIPLE: A COMMON-MODE ERROR
     CANCELS IN A RELATIVE MEASUREMENT. This is the
     same reasoning as baseline versus chain
     dimensioning in L0.2.5, and it recurs throughout
     metrology.

  2. THE RIGHT QUESTION IS "WHICH RELATIONSHIP DOES
     THE DRAWING CONTROL?"
     If the requirement is absolute — each part
     correct in its own right — Method A is better.
     If the requirement is relative — parts from
     different stations must match each other —
     Method B is better. Most real fixtures have both
     kinds of requirement, and the correct approach is
     to identify the TIGHTEST requirement and choose
     the method that protects it.
     Here R2 at ±0.05 mm is tighter than R1 at
     ±0.10 mm, so R2 governs, so METHOD B IS CHOSEN —
     and it also happens to be nine times faster.

  3. THE 9× TIME SAVING IS NOT THE MAIN ARGUMENT, BUT
     IT IS NOT NOTHING.
     Two minutes against eighteen, every time the
     fixture is re-qualified. Over a fixture's life
     that is substantial, but more importantly it
     changes BEHAVIOUR: a two-minute check gets done
     after a suspected knock, and an eighteen-minute
     one gets postponed. CHEAP VERIFICATION IS
     VERIFICATION THAT ACTUALLY HAPPENS.

  4. THE METHOD IS ONLY VALID BECAUSE THE TOMBSTONE
     WAS MADE WELL — AND THAT IS MY RESPONSIBILITY.
     Part (f) is the key result for a fixture
     designer. Method B is justified only if the
     station-to-station manufacturing tolerance is
     within ±0.020 mm; the tombstone achieved
     ±0.015 mm, so it qualifies with 25 % margin. Had
     it been made to ±0.030 mm, Method B would fail
     outright and all twelve stations would need
     individual measurement forever.
     SO THE DECISION TO MACHINE ALL FOUR TOMBSTONE
     FACES IN ONE SETUP (L1.1.4 §19 step 6) IS WHAT
     MAKES THE FAST QUALIFICATION METHOD POSSIBLE.
     A manufacturing decision taken months earlier
     determines the daily operating method. That
     connection is worth making explicit to whoever
     is tempted to save money on the tombstone.

  5. R2 IS TIGHT UNDER BOTH METHODS AND SHOULD BE
     FLAGGED.
     At 70-72 % of the band with no allowance for
     locator wear, this requirement will drift out
     over the fixture's life. I would raise it now:
     either the locators need a wear-monitoring
     interval, or the requirement needs review, or
     the fixture needs to be re-qualified periodically
     rather than only after incidents.

SENSITIVITY NOTE:
  Ranked by influence:
    1. FIXTURE STATION-TO-STATION TOLERANCE — under
       Method B this IS the relative error. Doubling
       it from ±0.015 to ±0.030 mm takes R2 from a
       70 % pass to a 100 % failure. THE SINGLE MOST
       IMPORTANT NUMBER IN THIS ANALYSIS, and it is
       determined by how the tombstone is machined.
    2. PROBE UNCERTAINTY — governs Method A entirely
       and the Method B reference partly. Improving
       it helps Method A twice as much as Method B.
    3. WHICH REQUIREMENT GOVERNS — a step change in
       the conclusion, not a gradual one. Absolute
       vs relative flips the preferred method.
    4. PRE-EXISTING BUDGET CONSUMPTION — 0.040 mm is
       40 % of the R2 band before any of this is
       counted. Reducing it would relieve both
       methods equally.
```

### 14. Engineering assumptions
- Probe setting uncertainty ±0.008 mm per axis `[GUIDE]` — confirm by a repeatability study on the
  actual machine and probe.
- Station-to-station tolerance is the **inspected** CMM value, not the drawing tolerance `[PROJ]`.
- Worst-case arithmetic used for the primary comparison, RSS shown alongside `[PRACTICE]`.
- The common offset error cancels because reference and stations are on **one rigid body** — this would
  **not** hold for separately mounted sub-plates `[PRACTICE]`.
- Pre-existing budget consumption 0.040 mm from the L1.1.1 typical figures `[GUIDE]`.
- 80% acceptance limit used in part (f) `[PRACTICE]`.

### 15. Diagram

```
     WORK COORDINATE SYSTEMS AND OFFSETS
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE OFFSET CHAIN

   MACHINE POSITION
     = COMMON offset          (shifts everything)
     + WORK offset G54/G54.1  (this station)
     + LOCAL offset G52       (temporary — avoid)
     + PROGRAMMED position

   ╳ ──────► ● ──────► ● ──────► ● ──────► ●
  machine  common    station   local    feature
   zero    (probed)  (nominal) (avoid)

  ──────────────────────────────────────────────────────────

  SIX OFFSETS, OR MANY

    G54 G55 G56 G57 G58 G59      = 6 standard
    G54.1 P1 ... P48             = extended [MFR]

    A 4-FACE × 3-STATION TOMBSTONE NEEDS 12.
    G54-G59 IS NOT ENOUGH. CONFIRM THE CONTROL.

  ──────────────────────────────────────────────────────────

  THE TWO QUALIFICATION METHODS

  METHOD A — MEASURE ALL 12          METHOD B — 1 + NOMINAL

   ┌───────────┐                      ┌───────────┐
   │ ✛ ✛ ✛     │ probe each           │ ✛         │ probe ONE
   │ ✛ ✛ ✛     │ 12 × 1.5 min         │           │ reference
   │ ✛ ✛ ✛     │ = 18 min             │  □ □ □    │ 2 min
   │ ✛ ✛ ✛     │                      │  □ □ □    │ + nominal
   └───────────┘                      └───────────┘   from CAD

   E_rel = u + u = 0.032            E_rel = t = 0.030
   E_abs = u     = 0.016            E_abs = u+t = 0.046

   ┌──────────────────────────────────────────────┐
   │ METHOD B IS WORSE ON ABSOLUTE POSITION AND   │
   │ BETTER ON STATION-TO-STATION RELATIONSHIPS.  │
   │                                              │
   │ WHY: THE COMMON OFFSET ERROR AFFECTS EVERY   │
   │ STATION EQUALLY, SO IT CANCELS IN A RELATIVE │
   │ MEASUREMENT.                                 │
   │                                              │
   │ ASK WHICH RELATIONSHIP THE DRAWING CONTROLS. │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHAT MAKES METHOD B LEGITIMATE

    Max permissible station-to-station tolerance
      for the ±0.05 mm requirement    = ±0.020 mm
    Tombstone as inspected             = ±0.015 mm  ✓ 75 %
    If it had been made to             = ±0.030 mm  ✗ FAIL

   ┌──────────────────────────────────────────────┐
   │ MACHINING ALL FOUR TOMBSTONE FACES IN ONE    │
   │ SETUP IS WHAT MAKES THE FAST QUALIFICATION   │
   │ METHOD POSSIBLE.                             │
   │                                              │
   │ A MANUFACTURING DECISION TAKEN MONTHS EARLIER│
   │ DETERMINES THE DAILY OPERATING METHOD.       │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  ALLOCATION — SYSTEMATIC AND VISIBLE

   ✗ WRONG                        ✓ RIGHT

    ┌──────────┐                   ┌──────────┐
    │ P7   P2  │  arbitrary        │ A3   B3  │ engraved
    │          │  numbering        │          │ IDs, low
    │ P11  P4  │  nothing marked   │ A2   B2  │ to high,
    │          │  on the fixture   │          │ same on
    │ P1   P9  │                   │ A1   B1  │ every face
    └──────────┘                   └──────────┘

   Operator cannot tell which      Operator can SEE it.
   station is which.               Symmetrical table is
   → parts loaded in the wrong     SELF-CHECKING.
     station                       Spare offsets kept.

   ┌──────────────────────────────────────────────┐
   │ THE MOST COMMON MULTI-STATION FAILURE IS A   │
   │ PART LOADED IN THE WRONG STATION.            │
   │ AN OFFSET TABLE CANNOT PREVENT IT.           │
   │ THE FIXTURE CAN. (Poka-Yoke — L28.)          │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example
The offset table is issued as a sheet of the fixture drawing set, and the assembly drawing references
it:

```
NOTE 1: STATION IDENTIFICATION A1-A3, B1-B3, C1-C3,
        D1-D3 TO BE ENGRAVED 6 mm HIGH ADJACENT TO
        EACH STATION AS SHOWN. ENGRAVING IS A
        FUNCTIONAL REQUIREMENT, NOT COSMETIC.

NOTE 2: WORK OFFSETS PER OFFSET TABLE SHEET 5.
        REFERENCE DATUM BUSH ITEM 22 IS TO BE PROBED
        AND ENTERED AS THE COMMON (EXT) OFFSET. ALL
        STATION OFFSETS ARE NOMINAL VALUES FROM THIS
        REFERENCE.

NOTE 3: THE NOMINAL OFFSET METHOD IN NOTE 2 IS VALID
        ONLY WHILE STATION-TO-STATION POSITION IS
        WITHIN ±0.020 mm. RE-INSPECT AFTER ANY REPAIR
        OR COLLISION.
```

Note 3 is unusual and worth including. It states the **condition under which the operating method
remains valid**, which is information that would otherwise exist only in the designer's head.

### 17. CAD workflow
1. Establish a **reference datum feature** in the model — the bush that will be probed
2. Create a **coordinate system at each station's work origin** in the assembly
3. Use the CAD system's **measure between coordinate systems** function to extract each station's vector
   from the reference
4. **Export directly to the offset table** — spreadsheet or text, not retyped
5. Verify **symmetry**: on a symmetrical tombstone, corresponding stations on different faces should
   produce identical values
6. Re-export the table whenever the model changes, and **revision-control it with the drawing**

`[PRACTICE]` Step 5 is a free error check. If face A station 2 and face C station 2 do not produce
identical values on a symmetrical design, something is wrong in the model — and it is better to find it
in CAD than on the machine.

### 18. GD&T application
The offset method chosen determines which GD&T control matters most. Full treatment at L21–L22; the
preview:

```
STANDARD: ASME Y14.5-2018

IF USING MEASURED OFFSETS (Method A):
  Station-to-station position is measured out, so the
  fixture's own positional tolerance matters less.
  What matters is that each station's locators are
  accurate WITHIN THEMSELVES.

IF USING NOMINAL OFFSETS (Method B):
  Station-to-station position goes DIRECTLY into the
  part, so it must be controlled:

  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.03 │ A │ B │ C │          │
  └──────────────────────────────────┘
  applied to every station's locating features,
  relative to the fixture reference datums.

  ┌────────────────────────────────────────────┐
  │ THE OFFSET METHOD AND THE GD&T SPECIFICATION│
  │ ARE THE SAME DECISION, MADE TWICE.          │
  │ Specify the tolerance that the intended     │
  │ operating method requires.                  │
  └────────────────────────────────────────────┘
```

### 19. Manufacturing method
As established in L1.1.4 §19: **machine all stations in as few setups as possible, referenced to the
fixture's reference datum**. The worked example quantified why — the station-to-station tolerance
achieved during manufacture determines whether the fast qualification method is available for the
fixture's whole life.

`[PRACTICE]` Where a tombstone must be machined face by face, expect a poorer station-to-station
tolerance and plan for Method A qualification, or fit each station with an individually probeable datum.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Station-to-station position | CMM from the fixture reference datums | ±0.015 mm |
| Reference bush position and size | CMM | ±0.010 mm, bore H7 |
| Station identification engraving | Visual | Present, legible, correct |
| Offset table vs CAD | Compare exported values | Identical |
| Offset table vs machine | Probe 2 stations, compare with nominal | Within ±0.020 mm |
| Symmetry check | Compare opposite-face stations | Identical values |

`[PRACTICE]` The "probe two stations and compare with nominal" check is the practical validation of the
whole Method B scheme, and it should be done at first setup and after any incident. If two stations
agree with nominal, the scheme is working; if they do not, the fixture has moved or been damaged.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Assuming **G54–G59 is enough** for a 12-station tombstone | Discovered at programming, after the fixture is built |
| 2 | **Arbitrary offset numbering** not matching the layout | Wrong offset called; scrap |
| 3 | **No physical station marking** on the fixture | Part loaded in the wrong station |
| 4 | **Typing** the offset table by hand from CAD | Transcription errors |
| 5 | Using **nominal offsets** on a poorly made fixture | Manufacturing error goes straight into every part |
| 6 | Not stating the **tolerance condition** under which nominal offsets are valid | Method silently invalidated by a repair |
| 7 | **Uncancelled G52** | Corrupts the next operation |
| 8 | Using **G92** in a new programme | Unpredictable, invisible in the offset table |
| 9 | Consuming **every available offset** | No spare for probing or expansion |
| 10 | Offset table **not revision-controlled** with the drawing | Fixture modified, offsets stale |
| 11 | Not exploiting **symmetry** to make the table self-checking | Errors invisible |
| 12 | Assuming the common offset error affects **relative** relationships | It cancels; the analysis is wrong |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| One station consistently out, others fine | Fixture manufacturing error at that station, with nominal offsets | Probe that station, compare with nominal | Measure and store that station individually | Inspect stations on a CMM |
| All stations shifted equally | Common offset wrong or fixture moved | Re-probe the reference | Re-set the common offset | Positive fixture location (L1.2.1) |
| Parts from two stations do not assemble | Station-to-station error | CMM the fixture; compare methods | Re-machine or measure stations individually | Specify and inspect station tolerance |
| Wrong features cut on a part | Wrong offset called for that station | Read the programme against the offset table | Correct the call | Systematic numbering; engraved IDs |
| Occasional scrap, no pattern in the machine | Part loaded in the wrong station | Observe loading | Physical Poka-Yoke | Asymmetric locators; engraved IDs |
| Next operation crashes after a good one | Uncancelled G52 | Read the programme | Cancel G52 | Prohibit G52 |
| Offsets lost after a control fault | No documented table | — | Re-enter from the controlled table | Issue the offset table as a document |
| Offsets valid but drift over months | Locator wear | Periodic re-probe of two stations | Replace worn locators | Wear-monitoring interval |

### 23. Design checklist
- [ ] Does the **control have enough offsets** for the station count `[MFR]`?
- [ ] Is the offset **numbering systematic** and matched to the physical layout?
- [ ] Are **station identifiers engraved** on the fixture?
- [ ] Is the **offset table derived from CAD** and exported, not typed?
- [ ] Is the offset table a **controlled, revision-linked deliverable**?
- [ ] Is the layout **symmetrical** where possible, so the table is self-checking?
- [ ] Is there a **single probeable reference datum**?
- [ ] Has the **absolute versus relative** requirement question been answered, and the method chosen
      accordingly?
- [ ] If nominal offsets will be used, is the **station-to-station tolerance specified and inspected**
      to support it?
- [ ] Is the **validity condition** for the nominal method stated on the drawing?
- [ ] Are **spare offsets** left for probing and expansion?
- [ ] Is **wrong-station loading physically prevented**, not just documented?
- [ ] Are **G52 and G92 avoided**?

### 24. Beginner exercise
**E1.2.2-B** — A fixture has three identical stations in a row along X, spaced 180.000 mm apart. Station
1's work origin is at MCS X = −710.000, Y = −295.000, Z = −250.000.
(a) State the G54, G55 and G56 values for the three stations.
(b) A feature is programmed at work X = 62.000, Y = 40.000 in each station. Calculate its machine X
coordinate at each station.
(c) The machine's X travel is MCS −950 to 0. Verify that all three are reachable.
(d) Explain why the same subprogram can machine all three parts.
(e) State how many standard work offsets are available and what must be used if more are needed.

### 25. Intermediate exercise
**E1.2.2-I** — A 4-face tombstone carries 2 stations per face, 8 in total. The reference bush is probed
at MCS X = −540.000, Y = −310.000, Z = −180.000. Nominal station vectors from the reference are: low
station (X −105.000, Y 80.000, Z −35.000), high station (X −105.000, Y 250.000, Z −35.000), identical on
all four faces, differing only in B position (0°, 90°, 180°, 270°).
(a) Produce the full offset table with station IDs, offset codes, B positions and nominal values.
(b) State which offsets you would allocate and why, and how many spares remain if the control provides
G54.1 P1–P48.
(c) Explain what makes this table self-checking.
(d) Probe uncertainty is ±0.006 mm and the station-to-station manufacturing tolerance is ±0.018 mm.
Calculate the station-to-station relationship error using the nominal method and using individually
measured offsets (worst case).
(e) State which method you would use if the governing requirement is a ±0.06 mm relationship between
parts from two different stations, showing your reasoning.
(f) The tombstone is repaired after a crash and one face is re-machined separately. Explain what this
does to your chosen method and what you would do about it.

### 26. Advanced exercise
**E1.2.2-A** — A multi-component fixture machines three different castings — part P, part Q and part R —
in one setup on a VMC, with two of each part (six stations total). The parts must assemble together
afterwards, so the following relationships apply: bore-to-bore between a P and a Q must be within
±0.04 mm; between a Q and an R within ±0.07 mm; each part's own internal features within ±0.12 mm.
Probe uncertainty is ±0.007 mm per axis. Two fixture build options are offered: Option 1, all six
stations machined into one solid base plate in a single setup, station-to-station tolerance ±0.012 mm,
cost ₹380,000 `[EX-ASSUMED]`; Option 2, six separate sub-plates each dowelled to a common base,
station-to-station tolerance ±0.035 mm, cost ₹240,000 `[EX-ASSUMED]`. Pre-existing machine/tooling/
measurement consumption is 0.038 mm.
(i) For each build option and each qualification method (measured vs nominal), calculate the error in
each of the three relationships.
(ii) Tabulate pass/fail against all three requirements for all four combinations.
(iii) Identify which combinations are viable and state the governing requirement in each case.
(iv) Explain why the common-offset cancellation argument may **not** apply to Option 2, and what
condition would have to hold for it to apply.
(v) Calculate the maximum station-to-station tolerance that would allow Option 2 to satisfy the ±0.04 mm
requirement using nominal offsets, and state whether Option 2 as offered achieves it.
(vi) Determine the cost difference and state what it buys in engineering terms.
(vii) Recommend an option and a qualification method, with reasoning that addresses cost, capability and
the practical burden of re-qualification.
(viii) Write the drawing notes that would make your chosen scheme robust in production.

### 27. Interview questions
1. *"What is a work offset, and how many can you have?"*
   **Answer:** A work offset is simply the machine coordinate of the point the programmer wants to call
   zero — a stored vector from machine zero to the work origin. When it is active, every programmed
   coordinate is interpreted from that origin, so the machine position is the offset plus the programmed
   position. The standard set is G54 through G59, which gives six. Beyond that, controls provide
   extended offsets — typically G54.1 P1 to P48 on Fanuc-style controls, with the exact count and syntax
   varying by manufacturer. That matters practically because a four-face tombstone with three stations
   per face needs twelve offsets, so it cannot run on the standard six, and it is worth confirming the
   control's capability before designing a fixture that needs twenty.
2. *"On a twelve-station tombstone, would you measure all twelve offsets or calculate them?"*
   **Answer:** In normal practice I would probe one reference datum on the tombstone, enter that as the
   common offset, and use nominal values from the CAD model for the twelve stations. That re-qualifies
   the whole fixture from one measurement instead of twelve, which takes two minutes rather than
   eighteen — and cheap verification is verification that actually gets done. It is also better for
   station-to-station relationships, because the reference measurement error affects every station
   equally and therefore cancels when you compare two stations. But it is only legitimate if the
   tombstone was manufactured accurately, because with nominal offsets the fixture's station-to-station
   error goes straight into the parts. So the decision depends on the inspected accuracy of the fixture,
   and if the tolerance analysis shows the fixture is not good enough, then measuring every station
   individually is the fallback.

### 28. Expert questions
1. *"Explain why using one probed reference plus nominal offsets can be more accurate than measuring
   every station, when it is obviously less accurate in absolute terms."*
   **Answer:** The apparent contradiction dissolves once you separate **absolute** accuracy from
   **relative** accuracy, and notice that they are affected differently by a common-mode error.
   In absolute terms the nominal method is clearly worse. Each station's position is the reference
   measurement plus whatever the fixture's manufacturing error happens to be, so you carry both. In the
   example in this lesson that was 0.046 mm against 0.016 mm for individually measured stations —
   nearly three times worse.
   But most requirements that actually bite on a multi-station fixture are relative: a bore machined on
   a part in station 1 has to line up with a bore machined on a part in station 2 when the two are
   assembled. And for that comparison, the reference measurement error is **common mode** — it displaces
   both stations by exactly the same vector, so it cancels completely in the difference between them.
   What remains is only the fixture's own station-to-station manufacturing error. Under the measured
   method, by contrast, each station carries an independent measurement uncertainty, and independent
   errors add rather than cancel.
   So the comparison comes down to: is the fixture's station-to-station manufacturing tolerance smaller
   than the sum of two measurement uncertainties? On a well-made tombstone machined in one setup, it
   usually is, and the nominal method wins on exactly the relationship you care about most.
   The condition for this argument to hold is important, and it is the thing to check: **the reference
   and all the stations must be on the same rigid body.** On a one-piece tombstone that is obviously
   true. On a fixture built from separate sub-plates dowelled to a base, it is not — each sub-plate can
   move independently, so a reference measurement on the base tells you nothing reliable about the
   sub-plates, and the cancellation argument fails. That distinction is worth stating explicitly,
   because the reasoning is often applied by analogy without checking whether the premise holds.
   The deeper point is that this is the same logic as baseline versus chain dimensioning from L0.2.5.
   Measuring everything from one datum means the datum's own error is common to everything and does not
   appear in relationships between features. It is a general principle in metrology, and recognising
   the same structure in a new context is most of what engineering judgement consists of.
2. *"You said a multi-station offset table is a design deliverable rather than a programming
   afterthought. Why?"*
   **Answer:** Because almost every decision embedded in that table is a fixture design decision, and
   handing it over as a blank leaves those decisions to be made by someone who does not have the
   information to make them.
   Consider what the table actually encodes. **How many stations there are** — that is a fixture layout
   decision, and it has to be checked against how many offsets the control provides, which is a
   compatibility question the designer is responsible for. **Where each station is** — those numbers
   come out of the CAD model, and if they are retyped by a programmer from a drawing, transcription
   errors get introduced that the designer could have eliminated by exporting them. **What the numbering
   sequence is** — that should match the physical layout and the engraved markings on the fixture, and
   only the designer controls both. **Whether nominal offsets are legitimate** — that depends on the
   station-to-station manufacturing tolerance, which the designer specified and had inspected, and the
   programmer usually has no visibility of it at all.
   That last one is the strongest argument. A programmer given a twelve-station fixture and no guidance
   will reasonably choose whichever method their shop normally uses. If they choose nominal offsets on a
   fixture that was machined face by face to ±0.05 mm, every part inherits that error and nobody knows
   why the assemblies do not fit. The designer knows whether the fixture supports that method; the
   programmer cannot.
   There is also a **maintenance argument**. The offset table has to be revision-controlled with the
   drawing, because a fixture modification changes the table. If the table lives in a programmer's file
   rather than in the design package, that link is broken, and a fixture gets modified while the table
   stays stale.
   And there is a **recovery argument**. After a crash or a control fault, someone has to restore the
   offsets. If the table is a controlled document with the design package, that takes minutes; if it
   exists only in the machine's memory and in one person's head, it can take a day.
   So my practice is to issue the offset table as a numbered sheet of the fixture drawing set, exported
   from CAD, with a note stating the condition under which the nominal method remains valid. It costs
   very little to produce and it closes off a whole class of failures that would otherwise be blamed on
   the fixture anyway.

### 29. Summary
A work offset is the machine coordinate of the work origin — a stored vector that lets the programmer
work in convenient part coordinates while the machine drives in machine coordinates. Six standard
offsets, G54 to G59, are supplemented by extended offsets such as G54.1 P1–P48 whose count and syntax
are control-specific and must be confirmed. A common or EXT offset shifts every work offset at once,
which is what makes multi-station qualification practical: rather than probing twelve tombstone stations
individually, one reference datum is probed and entered as the common offset while the station values
are taken as nominals from the CAD model. That method is worse in absolute terms because it inherits the
fixture's manufacturing error, but better for station-to-station relationships because the reference
error is common mode and cancels in the difference — provided the reference and the stations share one
rigid body. The choice between methods is therefore an engineering decision driven by which relationship
the drawing controls and by the fixture's inspected station-to-station tolerance, which links the
qualification method directly back to the decision to machine all faces in one setup. Offset allocation
must be systematic, matched to the physical layout, engraved on the fixture, derived from CAD rather
than typed, revision-controlled with the drawing, and left with spares; and the most common production
failure — a part loaded in the wrong station — is prevented physically by the fixture, not by the
document.

### 30. Key takeaways
- **A work offset is the machine coordinate of the work origin.** Nothing more.
- **G54–G59 gives six.** Tombstones need extended offsets `[MFR]` — confirm the control.
- **The common offset shifts everything at once**, which is what makes one-measurement qualification
  possible.
- **A common-mode error cancels in relative measurements**, not in absolute ones.
- **Nominal offsets push fixture manufacturing error straight into the part** — legitimate only if the
  fixture was made and inspected to suit.
- **The offset method and the GD&T specification are the same decision made twice.**
- **Machining all faces in one setup is what makes fast qualification possible for the fixture's life.**
- **Symmetrical layouts make the offset table self-checking.**
- **Engrave the station IDs.** A document the operator cannot see prevents nothing.
- **The offset table is a design deliverable**, exported from CAD and revision-controlled.
- **Avoid G52 and G92.**

---

## LESSON L1.2.3 — THE TOOL COORDINATE SYSTEM

### 1. Lesson title
**L1.2.3 — Tool length offset, cutter radius compensation, and what they mean for the fixture**

### 2. Learning objective
By the end of this lesson you will be able to explain how tool length offsets are established and
applied, explain cutter radius compensation and the difference between a programmed path and a tool
centre path, calculate the effect of tool wear and radius error on a machined feature, and identify the
fixture design consequences of tool geometry — particularly clearance, tool-setting features and the
distinction between errors the fixture can and cannot influence.

### 3. Prerequisites
L1.2.2 (work offsets), L1.2.1 (MCS), L1.1.1 (spindle, ATC, runout).

### 4. Why the topic matters
Tool offsets are not the fixture designer's responsibility, and this lesson does not attempt to make
them so. But three specific things connect them directly to fixture design.

**First, the tool length offset defines where Z zero physically is** — and it is set by touching
something. What it is touched against is often a feature of your fixture, or a setting block you were
expected to provide. If that surface is poorly defined, poorly finished or not where the drawing says,
every Z dimension on the part is wrong.

**Second, cutter radius compensation determines the clearance the tool actually needs.** The programmed
path is not the swept path. A Ø80 face mill following a path 10 mm from a clamp does not clear the
clamp by 10 mm — it clears by 10 minus 40, which is a collision. The swept envelope is what your
clearance check must use.

**Third, and most important as a matter of judgement: tool errors are not fixture errors.** A large
part of shop-floor diagnosis consists of deciding which is which. A designer who understands tool
offsets can say "that is a tool length problem, not a fixture problem" with evidence, and can also
recognise the cases where the fixture genuinely is at fault.

### 5. Simple explanation
Every tool in the magazine is a different length. The machine has no idea how long any of them is, so
each tool's length is measured and stored as a **tool length offset (TLO)**.

```
   SHORT TOOL              LONG TOOL
   ┌──────┐                ┌──────┐
   │HOLDER│                │HOLDER│
   └──┬───┘                └──┬───┘
      ║  short                ║
      ▼                       ║  long
   ─────── work Z0            ║
                              ▼
                           ─────── same work Z0

   Both must reach the SAME Z0.
   The TLO tells the machine how much longer or
   shorter this tool is, so Z0 means the same thing
   for every tool.
```

**Cutter radius compensation (CRC)** handles the other geometry problem. The machine controls the tool's
**centre**, but you want to cut a specific **edge**. CRC offsets the path by the tool radius so the edge
follows the line you programmed.

```
   PROGRAMMED PATH = the finished surface
   TOOL CENTRE PATH = offset by the radius

        ┌───── programmed contour
        │
     ○──┼──  tool, offset by R
        │
```

### 6. Engineering explanation

**TOOL LENGTH OFFSET — HOW Z ZERO IS ESTABLISHED**

There are three common methods, and they differ in what they reference.

```
METHOD 1 — TOUCH-OFF ON THE PART OR FIXTURE
   Tool lowered until it just touches a reference
   surface; the machine position is recorded.
   ✓ Simple, no extra equipment
   ✗ Slow, subjective, marks the surface
   ✗ Machine occupied during setting

METHOD 2 — TOOL SETTING GAUGE / BLOCK ON THE FIXTURE
   A hardened block of known height on the fixture;
   tool lowered onto it (often with a dial gauge or
   an electronic setter).
   ✓ Repeatable, protects the part
   ✓ Reference is a FIXTURE FEATURE — YOUR DESIGN
   ✗ Machine still occupied
   ✗ Block height must be accurate and known

METHOD 3 — PRESETTER OUTSIDE THE MACHINE
   Tools measured on an optical or contact presetter
   away from the machine; values entered or
   transferred to the control.
   ✓ Machine not occupied — the big advantage
   ✓ Accurate and repeatable
   ✗ Requires the presetter, and a disciplined
     data-transfer process
   ✗ The Z reference must be correctly related to the
     machine's spindle gauge line

METHOD 4 — SPINDLE-MOUNTED / TABLE-MOUNTED TOOL SETTER
   Automatic touch device on the table; the machine
   measures each tool itself.
   ✓ Automatic, repeatable, allows in-cycle tool
     breakage and wear checks
   ✗ Occupies table space — CHECK IT AGAINST YOUR
     FIXTURE FOOTPRINT
```

> **Methods 2 and 4 are the ones with fixture design consequences.** If tool setting uses a block on
> the fixture, you must design, specify, harden, grind and dimension that block. If it uses a
> table-mounted setter, your fixture must not occupy its position or obstruct the approach to it.

**THE TOOL SETTING BLOCK — A FIXTURE FEATURE**

`[PRACTICE]` Where a setting block is provided on the fixture:

| Requirement | Reason |
|---|---|
| **Hardened and ground** (58–62 HRC typical) | It is touched by carbide tools repeatedly; a soft block wears and every Z drifts |
| **Height accurately known and marked** | The block height enters the Z calculation directly |
| **Positioned clear of chips and coolant** | A chip on the block is a direct Z error |
| **Positioned within easy reach** | If it is awkward, it will not be used |
| **Not in the cutting zone** | Obvious, and frequently violated |
| **Height stamped on or beside it** | The value must be available at the machine, not only on a drawing |
| **Replaceable** | It will eventually be damaged |

**The block height goes straight into the part.** If the block is nominally 50.00 mm and is actually
49.95 mm, every part is 0.05 mm out in Z. This is a case where the fixture directly causes a dimensional
error, so the block deserves the same tolerance attention as a locator.

**CUTTER RADIUS COMPENSATION**

```
   G41  compensation LEFT of the direction of travel
   G42  compensation RIGHT of the direction of travel
   G40  cancel

           direction of travel ──────►
                    ┌─────────────────
      G41 ○         │ material
          left      │
   ─────────────────┘
      G42 ○
          right

   The control offsets the tool CENTRE path by the
   value stored in the tool's RADIUS (or DIAMETER)
   offset register.
```

Two things make CRC useful rather than merely convenient:

**1. The same programme cuts to size with a different tool.** If a Ø12 cutter is reground to Ø11.8, the
programme is unchanged — only the radius offset register is updated. Without CRC the programme would
have to be re-posted.

**2. Size can be adjusted without touching the programme.** If a slot measures 0.03 mm undersize, the
radius offset is reduced by 0.015 mm and the next part is correct. This is the normal method of holding
size in production, and it is why the offset register is sometimes called the **wear offset**.

> **This second point matters to a fixture designer for a diagnostic reason.** A feature that is
> consistently the wrong *size* is usually a tool radius or wear-offset issue. A feature that is the
> wrong *position* is usually a work offset or fixture issue. Size versus position is the first
> discrimination to make, and it points at different people's problems.

**THE SWEPT ENVELOPE — WHERE THE FIXTURE DESIGNER IS AFFECTED**

```
   THE PROGRAMMED PATH IS NOT THE SWEPT PATH

     Ø80 FACE MILL, path 10 mm from a clamp:

          programmed path (tool CENTRE)
                  │
                  │ 10 mm
                  │◄──►│
        ┌─────────┴────┬────────┐
        │   ○ Ø80      │ CLAMP  │
        └──────────────┴────────┘
             ◄─ 40 ─►
        tool RADIUS 40 mm

     Clearance = 10 − 40 = −30 mm
     → THE TOOL PASSES 30 mm THROUGH THE CLAMP.

   ┌────────────────────────────────────────────┐
   │ ALWAYS CHECK CLEARANCE AGAINST THE SWEPT   │
   │ ENVELOPE — TOOL RADIUS PLUS ANY HOLDER     │
   │ DIAMETER — NOT AGAINST THE PROGRAMMED PATH.│
   └────────────────────────────────────────────┘

   AND CHECK THE HOLDER, NOT JUST THE TOOL:

        ┌──────────┐  holder Ø63
        │          │
        └──┬────┬──┘
           │ ▓▓ │  tool Ø12
           └────┘
      The tool clears the clamp; THE HOLDER DOES NOT.
      This is a common collision, especially with
      short tools in large shell-mill holders.
```

`[PRACTICE]` The practical rule is to check clearance at the **largest diameter at each height** — tool
at the tip, holder above it, spindle nose above that. In CAD this is a swept-solid interference check;
by hand it is a table of diameter versus height.

**WHAT TOOL OFFSETS CANNOT FIX — AND WHAT THEY HIDE**

| Error | Corrected by a tool offset? | Notes |
|---|---|---|
| Tool length variation | ✓ Yes — that is what TLO is for | |
| Tool radius variation and wear | ✓ Yes — radius/wear offset | |
| Consistent size error | ✓ Yes — adjust the wear offset | This is normal production practice |
| Consistent **position** error | ✗ No | Work offset or fixture problem |
| Spindle runout | ✗ Partly | Makes a hole oversize; a wear offset can compensate the *average* but not the variation |
| Tool deflection | ✗ Partly | Varies with depth of cut; an offset only corrects one condition |
| Fixture deflection | ✗ No | Varies with cutting force |
| Chip under a locator | ✗ No | Random, not systematic |
| Part-to-part variation | ✗ No | Nothing systematic to correct |

> **The important line in that table is the third: a consistent size error can be dialled out with a
> wear offset.** This is legitimate and universal practice — but it can also **mask a real problem**.
> If a bore is consistently oversize because the tool is deflecting under an unstable setup, adjusting
> the wear offset makes the size correct while leaving the instability in place. The next time
> conditions change slightly — a harder batch of material, a duller insert — the size moves again.
>
> `[PRACTICE]` A wear offset that has to be adjusted frequently is a symptom, not a solution. If it
> drifts every few parts, something physical is changing, and that is worth investigating rather than
> compensating.

**TOOL LENGTH AND THE Z BUDGET — CLOSING THE LOOP**

The Z-budget check from L1.1.2 uses the **gauge length** of the longest tool: the distance from the
spindle gauge line to the tool tip, which is holder plus projection. That is the same quantity the tool
length offset expresses.

```
   Z BUDGET (L1.1.2)         TOOL LENGTH OFFSET
   uses tool + holder        stores the gauge length
   length                    of that same assembly

   THEY ARE THE SAME NUMBER, USED FOR DIFFERENT
   PURPOSES. The tool presetter's measurement can
   therefore be used to VERIFY the Z-budget assumption
   made at design stage.
```

`[PRACTICE]` This is a useful cross-check. If the design assumed a 165 mm tool projection and the
presetter reports a gauge length implying 190 mm, the Z budget has changed and should be re-verified.

### 7. Terminology

| Term | Definition |
|---|---|
| **Tool length offset (TLO)** | Stored length compensating for each tool's individual length |
| **Gauge line** | Reference plane on the spindle from which tool length is measured |
| **Gauge length** | Distance from the gauge line to the tool tip |
| **Presetter** | Off-machine device measuring tool length and diameter |
| **Tool setter** | On-machine touch device measuring tools automatically |
| **Setting block** | Hardened block of known height on the fixture, used for touch-off |
| **Cutter radius compensation (CRC)** | Offsetting the tool centre path by the tool radius |
| **G41 / G42 / G40** | Compensation left / right / cancel |
| **Radius offset register** | Stored tool radius used by CRC |
| **Wear offset** | Small adjustment to the radius or length offset to hold size |
| **Swept envelope** | The volume actually occupied by the rotating tool and holder |
| **Tool projection** | Length the tool protrudes from the holder |

### 8. Principle

> **THE PROGRAMMED PATH IS NOT THE SWEPT PATH.** Clearance must be checked against the tool radius plus
> the holder diameter at every height — not against the programmed centreline.
> **THE TOOL SETTING BLOCK'S HEIGHT GOES DIRECTLY INTO EVERY PART.** If the fixture provides the Z
> reference, that reference is a controlled dimension, hardened and ground, with its height marked at
> the machine.
> **SIZE ERRORS ARE USUALLY TOOL ERRORS; POSITION ERRORS ARE USUALLY FIXTURE OR OFFSET ERRORS.** That
> discrimination is the first step in most shop-floor diagnosis.
> **A wear offset that must be adjusted frequently is a symptom, not a solution.**

### 9. Industrial application

**Specifying a tool setting block on a fixture**

```
TOOL SETTING BLOCK SPECIFICATION            [PROJ]

  Material       EN31 / 100Cr6, hardened 58-62 HRC
                 (L0.5.1 shortlist)
  Top face       Ground, Ra 0.4 max
  Height above
    the Z datum  50.000 ±0.005 mm
  Marking        "Z SET 50.000" stamped on the side
  Position       Front left of the fixture, clear of
                 the cutting zone and the chip stream
  Mounting       2 × M6 SHCS, dowelled — replaceable
  Note on drawing:
    "TOOL SETTING BLOCK HEIGHT IS A CONTROLLED
     DIMENSION. VERIFY AFTER ANY REPLACEMENT.
     A WORN OR DAMAGED BLOCK CAUSES A DIRECT Z
     ERROR ON EVERY PART."
```

`[PRACTICE]` Two details in that specification are frequently omitted and both cause real problems. The
**marked height** matters because the person setting the tool is at the machine, not at a drawing. The
**replaceability** matters because the block will eventually be hit; if it is integral to the fixture
body, damage means re-machining the fixture.

**Diagnosing a Z-dimension problem — a worked reasoning chain**

```
SYMPTOM: All depths on the part are 0.08 mm too deep.

STEP 1 — IS IT CONSISTENT?
  Yes, every part, every feature, same amount,
  same direction.
  → SYSTEMATIC. So it is an OFFSET or a REFERENCE,
    not a process instability.

STEP 2 — IS IT ALL TOOLS OR ONE TOOL?
  All tools.
  → NOT a single tool length offset error.
  → Points to the SHARED Z REFERENCE: either the
    work offset Z, or the setting block.

STEP 3 — CHECK THE SETTING BLOCK
  Measured height 49.92 mm against a nominal
  50.000 mm.
  → BLOCK IS 0.08 mm LOW. Every tool was set 0.08 mm
    too long. Every cut goes 0.08 mm too deep.
  ✓ CAUSE FOUND.

STEP 4 — WHY?
  Block face worn and slightly dished from repeated
  carbide touch-off; it was not hardened.

CORRECTIVE: replace with a hardened, ground block.
PREVENTIVE: specify 58-62 HRC; add the block height
  to the periodic fixture check list.

NOTE THE STRUCTURE OF THE REASONING:
  consistent? → all tools or one? → what is shared?
This chain resolves most systematic dimensional
problems in three questions.
```

### 10. Design rules
- **R1** — Where the fixture provides a **tool setting reference**, specify it hardened (58–62 HRC),
  ground, and dimensionally toleranced `[PRACTICE]`.
- **R2** — **Mark the setting block height physically** on or beside the block.
- **R3** — Make the setting block **replaceable** — dowelled and screwed, not integral.
- **R4** — Position the setting block **clear of the cutting zone, chips and coolant**, and within easy
  reach.
- **R5** — Check all clearances against the **swept envelope**: tool radius and holder diameter at every
  height.
- **R6** — Check the **holder** as well as the tool; short tools in large holders are a classic
  collision.
- **R7** — If a **table-mounted tool setter** is used, confirm the fixture does not occupy or obstruct
  it.
- **R8** — Note on the drawing that the setting block height is a **controlled dimension**.
- **R9** — Cross-check the design's **Z-budget tool length assumption** against actual preset gauge
  lengths `[PRACTICE]`.

### 11. Rules of thumb
- **The programmed path is not the swept path.** Add the radius.
- **Check the holder, not just the tool.**
- **The setting block height goes straight into every part.**
- **Size error → tool. Position error → fixture or offset.**
- **A wear offset adjusted frequently is a symptom, not a fix.**
- Tool length offset and the Z-budget tool length are **the same quantity**.
- A **soft setting block wears and drifts every Z dimension** with it.
- CRC lets the same programme run with a **reground tool** — that is its main production value.
- If the error is on **all tools**, look at the shared reference, not the tools.

### 12. Formulae

**Tool length relationship**
```
Z_machine = Z_workoffset + Z_programmed − TLO_correction
```
(exact form is control-dependent; the principle is that the TLO makes every tool reach the same work Z)

**Setting block error propagation**
```
ΔZ_part = ΔH_block          (direct, 1:1)
```

**Swept clearance**
```
Clearance = d_path − (D_tool/2)     [tool]
Clearance = d_path − (D_holder/2)   [holder, at its height]
Require both > 0, with a margin ≥15 mm  [PRACTICE]
```

**Size error from radius offset**
```
Δ(slot width)      = 2 × Δr
Δ(bore diameter)   = 2 × Δr
Δ(external contour)= 2 × Δr  (on a diameter)
Δ(single wall)     = 1 × Δr
```

**Gauge length**
```
L_gauge = L_holder + L_projection
```

| Variable | Meaning | Unit |
|---|---|---|
| TLO | Tool length offset | mm |
| ΔH_block | Setting block height error | mm |
| Δr | Radius offset error | mm |
| d_path | Distance from the programmed path to an obstruction | mm |

### 13. Worked numerical example

**Problem:** Evaluate a fixture's tool setting block specification, determine the swept clearance for
three tools against a clamp, calculate the part errors resulting from a worn block and a radius offset
error, and distinguish which errors are fixture-attributable.

```
GIVEN:
  TOOL SETTING BLOCK                             [PROJ]
    Nominal height above the Z datum = 50.000 mm
    Specified tolerance              = ±0.005 mm
    Measured after 8 months' service = 49.918 mm
    Material as built                = mild steel,
                                       NOT hardened

  TOOLS AND HOLDERS                              [PROJ]
    T1 face mill    Ø100, holder Ø 78, proj  55 mm
    T2 end mill     Ø 20, holder Ø 63, proj  85 mm
    T3 drill        Ø 12, holder Ø 42, proj 140 mm
    BT40 holder body length          = 105 mm

  CLAMP                                          [PROJ]
    Nearest clamp face, distance from the
      programmed tool-centre path    = 62.000 mm
    Clamp top surface height above the
      part top face                  = 28.000 mm
    Part top face is work Z0

  RADIUS OFFSET                                  [PROJ]
    T2 nominal radius stored         = 10.000 mm
    Actual cutter radius after regrind = 9.940 mm
    Radius register NOT updated
    Slot being cut, nominal width    = 20.000 mm
    Slot width tolerance             = +0.05 / 0 mm

  DEPTH REQUIREMENT                              [PROJ]
    Pocket depth                     = 15.000 ±0.05 mm

REQUIRED:
  (a) Z error caused by the worn setting block, and
      the resulting pocket depth
  (b) Pass/fail of the pocket depth
  (c) Swept clearance to the clamp for each tool,
      considering both tool and holder
  (d) The governing clearance case
  (e) Slot width produced by the un-updated radius
      offset, and pass/fail
  (f) Classification of each error as fixture-
      attributable or not
  (g) Engineering conclusion

ASSUMPTION:
  1. Tools are set by touching the block, so the block
     height error transfers 1:1 into every Z
     dimension. [PRACTICE]
  2. Holder diameters are at their widest and are
     assumed to extend the full holder body length
     above the tool. Real holders taper; this is a
     CONSERVATIVE assumption appropriate for a
     clearance check. [PRACTICE]
  3. Clamp top is 28 mm above the part top face, so a
     tool whose HOLDER is above that height clears the
     clamp regardless of diameter. Holder lower ends
     must be checked. [PROJ]
  4. Minimum acceptable clearance 15 mm, from the
     L1.1.2 practice figure. [PRACTICE]
  5. Cutter radius error transfers to slot width at
     2:1 because the cutter removes material from both
     sides of the slot.
  6. No tool deflection included; this is a geometric
     check only.

FORMULA:
  (a) ΔZ_part = ΔH_block
  (c) Clearance = d_path − D/2
  (e) Δwidth = 2 × Δr

UNIT CONVERSION:
  All values in mm.

SUBSTITUTION AND CALCULATION:

  (a) SETTING BLOCK ERROR AND POCKET DEPTH

      Block error:
        ΔH = 49.918 − 50.000 = −0.082 mm

      The block is 0.082 mm LOW. Reason the
      consequence through physically rather than by
      sign convention, because the sign is easy to
      get backwards:

        The control believes the block top is at
        50.000 above the Z datum. It is actually at
        49.918. When the tool touches the block, the
        tool tip is 0.082 mm LOWER than the control
        thinks.

        So when the machine later commands work
        Z = −15.000, the tool tip actually goes to
        −15.000 − 0.082 = −15.082 mm.

      → EVERY DEPTH IS 0.082 mm TOO DEEP.

      Pocket depth produced:
        15.000 + 0.082 = 15.082 mm

  (b) POCKET DEPTH PASS/FAIL

      Requirement 15.000 ±0.05 → 14.950 to 15.050
      Produced 15.082

      15.082 > 15.050         ✗ FAIL

      Overshoot beyond the limit:
        15.082 − 15.050 = 0.032 mm

      Error as a fraction of the total 0.100 band:
        0.082/0.100 = 82 % of the tolerance band
        consumed by the block alone.

  (c) SWEPT CLEARANCE TO THE CLAMP

      Programmed path is 62.000 mm from the clamp
      face.

      T1 FACE MILL Ø100:
        Tool radius = 50.000
        Clearance   = 62.000 − 50.000 = 12.000 mm
        Holder Ø78, radius 39.000
        Holder clearance = 62.000 − 39.000
                         = 23.000 mm
        → TOOL governs: 12.000 mm

      T2 END MILL Ø20:
        Tool radius = 10.000
        Clearance   = 62.000 − 10.000 = 52.000 mm
        Holder Ø63, radius 31.500
        Holder clearance = 62.000 − 31.500
                         = 30.500 mm
        → HOLDER governs: 30.500 mm

      T3 DRILL Ø12:
        Tool radius = 6.000
        Clearance   = 62.000 −  6.000 = 56.000 mm
        Holder Ø42, radius 21.000
        Holder clearance = 62.000 − 21.000
                         = 41.000 mm
        → HOLDER governs: 41.000 mm

  (d) GOVERNING CASE

      T1 face mill, tool clearance   12.000 mm
      T2 holder                      30.500 mm
      T3 holder                      41.000 mm

      MINIMUM = 12.000 mm (T1 face mill)

      Against the 15 mm practice minimum:
        12.000 < 15.000        ✗ FAIL

      Shortfall = 3.000 mm

      NOTE: had only the TOOL been checked for T2 and
      T3, the answer would have been 52.0 and 56.0 mm
      — comfortably passing, and WRONG. The holder
      governs on both. This is the point of R6.

  (e) SLOT WIDTH FROM THE RADIUS ERROR

      Stored radius   = 10.000 mm
      Actual radius   =  9.940 mm
      Δr = 9.940 − 10.000 = −0.060 mm

      The cutter is SMALLER than the control believes,
      so it removes LESS material from each side:

        Δwidth = 2 × Δr = 2 × (−0.060)
               = −0.120 mm

        Slot width produced = 20.000 − 0.120
                            = 19.880 mm

      Requirement: 20.000 +0.05/0
                 = 20.000 to 20.050

      19.880 < 20.000         ✗ FAIL — UNDERSIZE

      Undersize by 20.000 − 19.880 = 0.120 mm
      = 2.4 × the 0.05 mm tolerance band.

      CORRECTION: update the radius register to
      9.940 mm. No programme change required — this
      is exactly the value of CRC.

  (f) ERROR CLASSIFICATION

      ┌──────────────────────┬──────────────────────┐
      │ ERROR                │ ATTRIBUTION          │
      ├──────────────────────┼──────────────────────┤
      │ Setting block worn   │ FIXTURE — the block  │
      │ 0.082 mm low         │ is a fixture feature │
      │                      │ and was specified in │
      │                      │ the wrong material   │
      ├──────────────────────┼──────────────────────┤
      │ Face mill clears the │ FIXTURE — clamp       │
      │ clamp by only 12 mm  │ position is a fixture│
      │                      │ design decision      │
      ├──────────────────────┼──────────────────────┤
      │ Slot 0.120 mm        │ NOT FIXTURE — radius │
      │ undersize            │ register not updated │
      │                      │ after a regrind      │
      └──────────────────────┴──────────────────────┘

      TWO OF THE THREE ARE FIXTURE PROBLEMS.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Block error              │ −0.082 mm         │
  │     Pocket depth produced    │ 15.082 mm         │
  │ (b) vs 15.000 ±0.05          │ ✗ FAIL by 0.032   │
  │     Tolerance consumed       │ 82 % by the block │
  │ (c) T1 clearance (tool)      │ 12.000 mm         │
  │     T2 clearance (holder)    │ 30.500 mm         │
  │     T3 clearance (holder)    │ 41.000 mm         │
  │ (d) Governing clearance      │ 12.000 mm ✗ FAIL  │
  │     Shortfall vs 15 mm       │ 3.000 mm          │
  │ (e) Slot width produced      │ 19.880 mm ✗ FAIL  │
  │     Undersize                │ 0.120 mm (2.4×)   │
  │ (f) Fixture-attributable     │ 2 of 3 errors     │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The clearance margin is
  the analogous quantity, and it is NEGATIVE against
  the 15 mm practice minimum — 12 mm actual, a
  shortfall of 3 mm. On the dimensional side there is
  no margin at all: the block error alone consumes
  82 % of the depth tolerance and pushes the part out.

PASS/FAIL:
  ✗ FAIL — pocket depth, due to the worn block.
  ✗ FAIL — face mill clearance, 12 mm against a 15 mm
    minimum.
  ✗ FAIL — slot width, due to the radius register.
  ✓ Diagnostic classification correct: two of the
    three are fixture responsibilities.

ENGINEERING CONCLUSION:
  1. THE SETTING BLOCK IS A LOCATOR IN ALL BUT NAME,
     AND IT WAS SPECIFIED AS IF IT WERE HARDWARE.
     A mild steel block touched repeatedly by carbide
     tools wore 0.082 mm in eight months, and that
     error transferred 1:1 into every Z dimension on
     every part — consuming 82 % of the depth
     tolerance and pushing the pocket out of
     specification.
     THE FIX IS THE L0.5.1 PRINCIPLE APPLIED IN A
     PLACE PEOPLE DO NOT EXPECT IT: EVERY SURFACE
     THAT DEFINES A PART DIMENSION MUST BE HARDENED.
     The block should be EN31 at 58-62 HRC, ground,
     with its height marked, dowelled so it can be
     replaced, and added to the periodic check list.
     It costs very little more than the mild steel
     version.

  2. THE HOLDER GOVERNED THE CLEARANCE ON TWO OF THE
     THREE TOOLS — AND WOULD HAVE BEEN MISSED.
     Checking only tool diameters gives 52 mm and
     56 mm clearance for T2 and T3, both comfortable.
     Checking the holders gives 30.5 mm and 41 mm.
     Neither of those actually fails here, but the
     PATTERN is the warning: a short tool in a large
     shell-mill holder is precisely the configuration
     where the holder collides while the tool clears.
     ALWAYS TABULATE DIAMETER AGAINST HEIGHT.

  3. THE FACE MILL CLEARANCE FAILS AND IT IS MY
     PROBLEM.
     12 mm against a 15 mm minimum. The programmed
     path was 62 mm from the clamp, which sounds
     generous until the Ø100 face mill's 50 mm radius
     is subtracted. The correction is straightforward
     — move the clamp 3 mm or more outboard, or use a
     smaller face mill — but it must be caught at
     design stage. THE PROGRAMMED PATH IS NOT THE
     SWEPT PATH, and 62 mm of apparent clearance was
     really 12 mm.

  4. THE SLOT ERROR IS NOT MINE, AND SAYING SO
     CLEARLY IS PART OF THE JOB.
     A 0.120 mm undersize slot from an un-updated
     radius register after a regrind is a tooling
     process problem. It will present as "the fixture
     is producing undersize slots", and being able to
     show that a SIZE error of exactly twice the
     radius discrepancy points at the tool, not the
     fixture, resolves it in minutes.
     THE DISCRIMINATION IS: SIZE ERROR → TOOL.
     POSITION ERROR → FIXTURE OR OFFSET. It is worth
     applying before accepting responsibility.

SENSITIVITY NOTE:
  Ranked by influence:
    1. SETTING BLOCK HEIGHT — transfers 1:1 into every
       Z dimension on every part made with the
       fixture. The highest-leverage single dimension
       here, and the one least likely to be inspected
       routinely.
    2. TOOL DIAMETER IN THE CLEARANCE CHECK — the
       Ø100 face mill consumed 50 of the 62 mm
       available. Halving the cutter diameter would
       restore 25 mm of clearance. Cutter selection
       is a bigger lever on clearance than clamp
       position.
    3. RADIUS REGISTER ACCURACY — 2:1 into slot width.
       Easy to correct, easy to forget after a
       regrind.
    4. HOLDER DIAMETER — did not govern the failure
       here but governs two of the three tools, and
       would dominate if the clamp were taller.
```

### 14. Engineering assumptions
- Tools set by touching the block, so block height error transfers 1:1 into every Z dimension
  `[PRACTICE]`.
- Holder diameters assumed at their widest for the full holder body length — conservative and
  appropriate for a clearance check `[PRACTICE]`.
- Minimum acceptable clearance 15 mm `[PRACTICE]`, from L1.1.2.
- Radius error transfers to slot width at 2:1.
- Geometric check only; no tool deflection included.

### 15. Diagram

```
     THE TOOL COORDINATE SYSTEM
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  TOOL LENGTH OFFSET — MAKING EVERY TOOL AGREE

     ═══╤═══ SPINDLE GAUGE LINE
        │
     ┌──┴──┐        ┌──┴──┐        ┌──┴──┐
     │ T1  │        │ T2  │        │ T3  │
     └──┬──┘        └──┬──┘        └──┬──┘
        ║              ║              ║
        ▼              ║              ║
     ───────           ║              ║
     TLO1              ▼              ║
                    ───────           ║
                    TLO2              ▼
                                   ───────
                                   TLO3
     ────────────────────────────────────── work Z0

   EVERY TOOL REACHES THE SAME work Z0 BECAUSE ITS
   OWN GAUGE LENGTH IS STORED.

  ──────────────────────────────────────────────────────────

  THE SETTING BLOCK IS A FIXTURE FEATURE

        ║ tool touches here
        ▼
     ╔═══════╗ ◄── HARDENED 58-62 HRC, GROUND
     ║ BLOCK ║     height 50.000 ±0.005
     ║       ║     MARKED "Z SET 50.000"
     ╚═══════╝     dowelled — REPLACEABLE
   ══════════════ Z datum

   ┌──────────────────────────────────────────────┐
   │ THE BLOCK HEIGHT GOES 1:1 INTO EVERY PART.   │
   │ A MILD STEEL BLOCK WORE 0.082 mm IN EIGHT    │
   │ MONTHS — 82 % OF THE DEPTH TOLERANCE.        │
   │                                              │
   │ EVERY SURFACE THAT DEFINES A PART DIMENSION  │
   │ MUST BE HARDENED. (L0.5.1)                   │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE PROGRAMMED PATH IS NOT THE SWEPT PATH

    programmed centre path
            │  62 mm to the clamp
            │◄──────────────►│
     ┌──────┴───────┐        ┌──────┐
     │   ○ Ø100     │        │CLAMP │
     └──────────────┘        └──────┘
      ◄─── 50 ────►
        RADIUS

      ACTUAL CLEARANCE = 62 − 50 = 12 mm
      NOT 62 mm.   ✗ FAILS the 15 mm minimum.

  AND CHECK THE HOLDER TOO

        ┌────────────┐ holder Ø63, r 31.5
        │            │  clearance 30.5 mm ◄ GOVERNS
        └────┬───┬───┘
             │ ▓ │  tool Ø20, r 10
             └───┘   clearance 52.0 mm

   ┌──────────────────────────────────────────────┐
   │ TABULATE DIAMETER AGAINST HEIGHT.            │
   │ A SHORT TOOL IN A BIG SHELL-MILL HOLDER IS   │
   │ THE CLASSIC COLLISION.                       │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  CUTTER RADIUS COMPENSATION

      direction of travel ────────►
   ─────────────────────┐
                        │  MATERIAL
      G41 ○  LEFT       │
      ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘ programmed contour
      G42 ○  RIGHT

   Tool CENTRE path is offset by the stored radius.
   ✓ Same programme runs with a REGROUND tool
   ✓ Size adjusted by editing the register only

   RADIUS ERROR → SIZE ERROR AT 2:1
     stored 10.000, actual 9.940 → Δr = −0.060
     slot width = 20.000 − 0.120 = 19.880  ✗

  ──────────────────────────────────────────────────────────

  THE DIAGNOSTIC DISCRIMINATION

    SIZE WRONG                POSITION WRONG
    ┌─────────┐               ┌─────────┐
    │ ▓▓▓▓▓▓▓ │ too wide      │   ▓▓▓   │ shifted
    │ ▓▓▓▓▓▓▓ │ / too narrow  │   ▓▓▓   │
    └─────────┘               └─────────┘
    → TOOL RADIUS,            → WORK OFFSET,
      WEAR OFFSET,              FIXTURE POSITION,
      DEFLECTION                LOCATOR

   ┌──────────────────────────────────────────────┐
   │ ASK "SIZE OR POSITION?" FIRST.               │
   │ IT POINTS AT DIFFERENT PEOPLE'S PROBLEMS AND │
   │ HALVES THE SEARCH IMMEDIATELY.               │
   │                                              │
   │ AND: A WEAR OFFSET ADJUSTED FREQUENTLY IS A  │
   │ SYMPTOM, NOT A SOLUTION.                     │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
NOTE 1: TOOL SETTING BLOCK ITEM 31, MATERIAL EN31
        HARDENED 58-62 HRC, TOP FACE GROUND Ra 0.4.
        HEIGHT ABOVE FIXTURE Z DATUM 50.000 ±0.005.
        HEIGHT TO BE STAMPED ON THE BLOCK.

NOTE 2: TOOL SETTING BLOCK HEIGHT IS A CONTROLLED
        DIMENSION AFFECTING EVERY Z DIMENSION ON THE
        COMPONENT. VERIFY AT EACH PREVENTIVE
        MAINTENANCE INTERVAL AND AFTER ANY REPLACEMENT.

NOTE 3: MINIMUM TOOL AND HOLDER CLEARANCE TO CLAMPS
        15 mm. LARGEST PERMITTED FACE MILL DIAMETER
        FOR THIS FIXTURE Ø80. VERIFY BEFORE
        SUBSTITUTING CUTTERS.
```

Note 3 is the useful one. The clearance analysis was done at design stage with a particular cutter in
mind; **recording the maximum permitted cutter diameter on the drawing** carries that analysis forward
to whoever later chooses a tool.

### 17. CAD workflow
1. Model the **tool and holder as a stepped cylinder** — tool diameter at the tip, holder diameter above
2. Create a **swept solid** of that assembly along the toolpath
3. Run an **interference check** against clamps, locators and the fixture body
4. Repeat for **every tool in the programme**, not just the largest
5. Model the **setting block** with its ground face at the specified height
6. Add a **note block** recording the maximum permitted cutter diameter
7. Where a **table-mounted tool setter** exists, include it in the machine reference model and check the
   approach path

`[PRACTICE]` Step 1 sounds trivial and is the step that catches holder collisions. A tool modelled as a
plain cylinder of cutter diameter will pass every check and then hit the clamp with its holder.

### 18. GD&T application
The setting block's height is a **basic dimension with a profile or position control relative to the
fixture's Z datum**. Full treatment at L21; the preview:

```
STANDARD: ASME Y14.5-2018

   Setting block top face:

   ┌─────────────────────────┐
   │ ⌓ │ 0.01 │ A │          │
   └─────────────────────────┘
   from basic 50.000 to datum A (fixture Z datum)

   MEANING: the block's top face lies within a
   0.01 mm profile zone about its basic height above
   the fixture's Z datum plane.

   WHY A PROFILE CONTROL: it controls both the height
   AND the flatness of the face in one requirement.
   A block at the right height but dished in the
   middle still gives an inconsistent touch-off.
```

### 19. Manufacturing method
The setting block follows the standard hardened-locator route from L0.5.3:
1. Machine soft, leaving 0.3 mm grinding stock on the top face
2. Harden and temper to 58–62 HRC
3. **Fit to the fixture, dowelled and screwed**
4. **Grind the top face in position**, to the specified height above the fixture Z datum
5. Stamp the achieved height
6. Inspect against the fixture Z datum

`[PRACTICE]` Step 4 — grinding in position — is the same principle as grinding locating pads after
assembly (L1.1.2 §19). The height that matters is the height in the assembled condition.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Setting block height above the Z datum | Height gauge or CMM from the fixture datum | 50.000 ±0.005 mm |
| Setting block face flatness | Surface plate / optical flat | 0.005 mm |
| Setting block hardness | Portable hardness tester | 58–62 HRC |
| Marked height matches actual | Visual + measurement | Agree |
| Swept clearance | CAD interference check + slow dry run | ≥15 mm |
| Maximum cutter diameter note present | Drawing review | Present |

`[PRACTICE]` The setting block height should be on the **periodic maintenance check list**, not just the
first-off inspection. It wears, and its wear is invisible until parts fail.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Unhardened setting block** | Wears; every Z dimension drifts |
| 2 | Block height **not marked at the machine** | Wrong value used |
| 3 | Block **integral to the fixture body** | Damage means re-machining the fixture |
| 4 | Block **in the chip stream** | A chip on the block is a direct Z error |
| 5 | Checking clearance against the **programmed path** | Collision — the radius was ignored |
| 6 | Checking the **tool but not the holder** | Holder collides while the tool clears |
| 7 | Not recording the **maximum permitted cutter diameter** | A larger cutter is fitted later and collides |
| 8 | Assuming a **size error is a fixture error** | Wrong problem investigated |
| 9 | Repeatedly adjusting a **wear offset** instead of investigating | Masks an instability that will return |
| 10 | Fixture **obstructing a table-mounted tool setter** | Setter unusable |
| 11 | Block **ground before assembly** | Assembled height differs |
| 12 | Not cross-checking the **preset gauge length against the Z-budget assumption** | Z budget silently invalidated |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| All depths wrong by the same amount, all tools | Setting block height error | Measure block height | Replace/regrind block | Harden block; periodic check |
| One tool's depths wrong, others fine | That tool's length offset | Re-measure that tool | Re-set the offset | Presetter discipline |
| Feature the wrong size, position correct | Tool radius / wear offset | Measure the tool; check the register | Update the register | Update after every regrind |
| Feature the right size, wrong position | Work offset or fixture | Probe the datum | Re-set the offset | L1.2.1 / L1.2.2 |
| Size drifts every few parts | Tool wear, or an unstable setup masked by offset edits | Track the offset adjustments over time | Investigate the physical cause | Do not compensate an instability |
| Holder collides but the tool clears | Clearance checked on tool diameter only | Tabulate diameter vs height | Reposition clamp; different holder | Model the stepped tool assembly |
| Depths change after the block was replaced | Replacement block a different height | Measure and re-mark | Grind to the specified height | Grind in position; stamp the height |
| Z budget exceeded although the design checked out | Actual tool longer than assumed | Compare preset gauge lengths with the design assumption | Shorter tool or lower fixture | Cross-check gauge lengths |

### 23. Design checklist
- [ ] If the fixture provides a **tool setting reference**, is it hardened, ground and toleranced?
- [ ] Is its **height marked physically** on or beside the block?
- [ ] Is the block **replaceable** — dowelled and screwed, not integral?
- [ ] Is the block **clear of chips, coolant and the cutting zone**, and easy to reach?
- [ ] Is the block on the **periodic maintenance check list**?
- [ ] Has clearance been checked against the **swept envelope**, not the programmed path?
- [ ] Has the **holder diameter at each height** been checked, not just the tool?
- [ ] Has clearance been checked for **every tool** in the programme?
- [ ] Is the **maximum permitted cutter diameter** recorded on the drawing?
- [ ] Does the fixture avoid obstructing a **table-mounted tool setter**?
- [ ] Has the **Z-budget tool length assumption** been cross-checked against actual gauge lengths?

### 24. Beginner exercise
**E1.2.3-B** — A fixture's tool setting block is nominally 45.000 mm high. It is measured at 44.940 mm.
(a) State the magnitude and sign of the error.
(b) A pocket is programmed to a depth of 12.000 mm. State the depth actually produced and explain the
direction.
(c) The pocket tolerance is ±0.05 mm. State whether it passes.
(d) A Ø63 face mill follows a path 40 mm from a clamp. Calculate the actual clearance.
(e) State the two questions you would ask first when a dimension is wrong, and what each one tells you.

### 25. Intermediate exercise
**E1.2.3-I** — A fixture has clamps whose nearest faces are 55.000 mm from the programmed tool centre
path. The following tools are used: Ø80 face mill in a Ø66 holder; Ø25 end mill in a Ø58 holder; Ø16
drill in a Ø40 holder.
(a) Calculate the tool clearance and holder clearance for each, and identify which governs in each case.
(b) State the overall minimum clearance and compare it with a 15 mm practice minimum.
(c) Determine the largest face mill diameter that would still give 15 mm clearance.
(d) A slot is cut with the Ø25 end mill. After regrinding it measures Ø24.86 but the register still
reads 12.500 mm radius. Calculate the slot width produced against a nominal 25.000 mm.
(e) State whether this is a fixture problem, and justify your answer.
(f) The setting block, specified at 40.000 ±0.005 mm, is found at 39.966 mm. Calculate the effect on a
slot depth of 9.000 ±0.03 mm and state pass/fail.

### 26. Advanced exercise
**E1.2.3-A** — A four-station fixture is in production. Over three months the following are observed:
all pocket depths on all stations have drifted 0.06 mm deeper; slot widths on station 3 only are
0.09 mm narrow; bore positions on station 2 only are displaced 0.11 mm in +X; and surface finish on
station 4 has deteriorated with the bore diameters growing progressively during each batch. The fixture
has a mild steel tool setting block, nominal 60.000 mm, and stations were qualified using nominal
offsets from a probed reference. Probe uncertainty is ±0.007 mm, station-to-station manufacturing
tolerance ±0.020 mm.
(i) For each of the four symptoms, classify it as size or position, systematic or progressive, and
common to all stations or specific to one.
(ii) For each symptom, state the most probable cause and the single measurement you would take to
confirm it.
(iii) For each, state whether it is fixture-attributable and justify.
(iv) The all-station depth drift is suspected to be the setting block. Calculate what block height would
produce a 0.06 mm drift and state whether that is plausible for a mild steel block over three months.
(v) The station-2 position error of 0.11 mm exceeds the ±0.020 mm station tolerance by a large margin.
State what this implies about the nominal-offset scheme and what you would do.
(vi) The station-4 progressive bore growth during each batch suggests a thermal or wear mechanism.
Propose two candidate mechanisms and a test to distinguish them.
(vii) Write the corrective and preventive actions you would recommend, distinguishing those that are
fixture design changes from those that are process changes.
(viii) Explain why a wear offset should not be used to correct symptom (iv), even though it would make
the parts pass immediately.

### 27. Interview questions
1. *"What is a tool length offset and why is it needed?"*
   **Answer:** Every tool in the magazine is a different length, and the machine has no way of knowing
   how long any of them is — it only knows where the spindle gauge line is. The tool length offset is
   the stored gauge length for each tool, so that when the programme commands work Z zero, every tool
   reaches the same physical position regardless of its own length. It is established either by touching
   the tool against a reference — often a setting block on the fixture — or by measuring it on a
   presetter off the machine, or automatically with a table-mounted tool setter. The fixture designer's
   interest is that if the reference is a block on the fixture, that block's height goes directly into
   every Z dimension on the part, at one to one, so it has to be hardened, ground, accurately known and
   checked periodically.
2. *"A tool follows a path 30 mm from a clamp. Is 30 mm enough clearance?"*
   **Answer:** You cannot tell from that alone, because the programmed path is the tool centre, not the
   tool edge. If it is a Ø10 end mill, the actual clearance is 30 minus 5, which is 25 mm and fine. If
   it is a Ø80 face mill, it is 30 minus 40, which is minus 10 — the tool passes ten millimetres through
   the clamp. And I would also check the holder, not just the tool, because a short tool in a large
   shell-mill holder often clears with the cutter and collides with the holder. So the answer is to
   tabulate diameter against height for the whole tool assembly and check the swept envelope, and I
   would want at least 15 mm as a working minimum.

### 28. Expert questions
1. *"You find that an operator has been adjusting a wear offset every few parts to hold a bore size.
   What do you do?"*
   **Answer:** I would treat that as **a diagnostic signal rather than a practice to be corrected**,
   because the operator is doing something entirely reasonable and is telling me, without meaning to,
   that something physical is changing.
   Adjusting a wear offset is legitimate and universal — it is how size is held in production, and a
   drift over a tool's life is expected. But **a drift every few parts is not tool wear.** Carbide does
   not wear at that rate. So something else is varying, and the wear offset is masking it.
   The candidates I would work through are: **tool deflection varying with material condition**, if the
   setup is marginally rigid and a harder batch pushes the tool further off; **thermal growth**, either
   of the machine over the warm-up period or of the fixture and part as coolant temperature changes;
   **inconsistent clamping**, where variable clamp force distorts the part differently each time;
   **built-up edge** on the cutting edge, which changes the effective radius cyclically as it forms and
   breaks away; or a **worn or unstable spindle** giving variable runout.
   The measurement I would take first is to **plot the offset adjustments against time and against
   part number**. A sawtooth pattern suggests built-up edge or a periodic mechanical cause; a steady
   drift over the first hour that then stabilises is thermal; random scatter suggests clamping or
   material variation. That plot usually identifies the mechanism in an afternoon.
   The reason I would not simply let it continue is that **compensation without understanding is
   fragile**. It works while the operator is attentive and while conditions stay within the range they
   have learned to correct for. It fails on the night shift, or when a new operator takes over, or when
   something else changes slightly and the familiar correction no longer applies. And it consumes an
   operator's attention continuously on a machine that is supposed to be running.
   I would also want to check whether **the fixture is the cause**, because if the setup is not rigid
   enough and the tool is deflecting variably, that is mine. The test is straightforward — measure the
   bore at several depths, since a deflecting tool produces a tapered or bell-mouthed bore rather than a
   uniformly oversize one, and that signature distinguishes deflection from a simple size offset.
   The general principle I would state is: **a wear offset that must be adjusted frequently is a
   symptom, not a solution.** The adjustment is not the problem; the need for it is.
2. *"Why should a fixture designer care about cutter radius compensation at all?"*
   **Answer:** For three reasons, and only one of them is obvious.
   The obvious one is **clearance**. The programmed path is the tool centre, and the fixture has to
   clear the tool's swept envelope, not its centreline. A Ø100 face mill on a path 62 mm from a clamp
   has 12 mm of clearance, not 62. And it is not just the cutter — the holder is usually the wider body
   at the height where clamps live, so a short tool in a big shell-mill holder is the classic collision
   even though the cutter itself clears comfortably. Getting that wrong means a crash, and it is
   entirely the fixture designer's check to make.
   The second reason is **diagnostic**, and it is the one I use most often in practice. Because CRC
   controls size through the radius register, a **size** error and a **position** error have different
   causes. If a slot is the right position but the wrong width, that is the tool radius, the wear
   offset, or deflection — nothing to do with where the fixture put the part. If the slot is the right
   width but in the wrong place, that is a work offset or a locator. Making that discrimination first
   saves a great deal of time and stops fixtures being blamed for tooling problems, which happens often
   because the fixture is the visible, physical thing in the setup.
   The third reason is more subtle. CRC means that **size can be corrected without changing anything
   physical**, which is convenient and also means that a physical problem can be compensated invisibly
   for a long time. If my fixture is marginally rigid and the tool deflects, the size error gets dialled
   out with the wear offset, the parts pass, and nobody tells me. The instability is still there, and it
   surfaces later as intermittent scrap that is very hard to trace. So when I am investigating a fixture
   that is "working fine", one of the questions I ask is how often the offsets are being touched. A
   fixture that needs constant offset attention is not working fine.
   Underlying all three is that the fixture designer needs to know what the *other* error sources are in
   order to know which errors are theirs. Understanding tool offsets is a large part of that.

### 29. Summary
Every tool has a different length, so each tool's gauge length is stored as a tool length offset,
allowing every tool to reach the same work Z zero; the offset is established by touching a reference, by
an off-machine presetter, or by an automatic table-mounted setter. Where the reference is a setting block
on the fixture, that block is a fixture feature whose height transfers one-to-one into every Z dimension
on every part, so it must be hardened, ground in position, accurately toleranced, physically marked,
replaceable, kept clear of chips, and inspected periodically — a mild steel block wearing 0.082 mm
consumed 82% of a depth tolerance in the worked example. Cutter radius compensation offsets the tool
centre path by the stored radius so that the programmed path is the finished surface; it allows the same
programme to run with a reground tool and allows size to be held by editing a register, but it also means
the programmed path is not the swept path, so clearance must be checked against tool radius and holder
diameter at every height — the holder governed two of the three tools in the worked example, and a Ø100
face mill turned 62 mm of apparent clearance into 12 mm of real clearance. Because size is controlled by
the radius register and position by the work offset and the fixture, the first diagnostic question for
any dimensional problem is whether the error is one of size or of position, since the two point at
entirely different causes; and a wear offset that has to be adjusted frequently is a symptom of a
physical instability, not a solution to it.

### 30. Key takeaways
- **The programmed path is not the swept path.** Add the radius, and check the holder too.
- **A short tool in a big holder** is the classic collision — tabulate diameter against height.
- **The setting block's height goes 1:1 into every part.** Harden it, grind it in position, mark it,
  make it replaceable, and check it periodically.
- **Every surface that defines a part dimension must be hardened** — including ones that are not
  locators.
- **Size error → tool. Position error → fixture or offset.** Ask that first.
- **Radius error transfers to slot width and bore diameter at 2:1.**
- **A wear offset adjusted frequently is a symptom, not a solution.**
- **Record the maximum permitted cutter diameter** on the fixture drawing.
- Tool length offset and the **Z-budget tool length are the same quantity** — cross-check them.
- CRC's real production value is that a **reground tool needs no programme change**.

---

## LESSON L1.2.4 — HOW THE FIXTURE PHYSICALLY REALISES THE WORK COORDINATE SYSTEM

### 1. Lesson title
**L1.2.4 — Datum faces, datum pins, indicating bosses and setting blocks: making the coordinate system real**

### 2. Learning objective
By the end of this lesson you will be able to explain what it means for a fixture to "realise" a work
coordinate system, specify the physical features that establish and allow the setting of each axis of a
WCS, evaluate setting methods against their uncertainty, design a fixture whose offsets can be
established and re-established repeatably, and produce a complete offset table for a multi-station
fixture.

### 3. Prerequisites
L1.2.1 (MCS), L1.2.2 (work offsets), L1.2.3 (tool offsets), L1.1.4 (tombstones), L0.2.4 (datums).

### 4. Why the topic matters
This is the lesson that Module 1.2 exists for, and arguably the most important lesson in Level 1 Part 1.

Everything so far has described a system of numbers. The machine coordinate system is a set of numbers.
The work offset is a number. The tool offset is a number. **None of them touches the workpiece.**

```
   THE MACHINE KNOWS:      "the work origin is at
                            MCS X−615.300 Y−288.700"

   THE MACHINE DOES NOT
   KNOW:                   whether there is a part
                            there at all, or where
                            any of its features are

   THE FIXTURE'S JOB:      make those two things the
                            same, for every part, every
                            time
```

> **A work coordinate system is a claim. The fixture is the evidence.**

That framing is worth holding onto. When a setter probes a bore and enters an offset, they are asserting
"the part's origin is here". That assertion is true only if the fixture puts every subsequent part in
the same place relative to the feature that was probed. **If the fixture does not do that, the offset is
a lie that the machine believes.**

The practical questions this lesson answers are the ones that determine whether a fixture works:

1. **What physical feature establishes each axis** of the coordinate system?
2. **How will the setter actually set the offset** — and how accurately?
3. **What is probed or indicated**, and is that feature suitable for the purpose?
4. **After a refit, a repair or a crash, how is the offset re-established?**
5. **How is all of this documented** so the next person can do it?

### 5. Simple explanation
The programme says "the part's corner is at zero". The fixture's job is to put the part's corner in
exactly that place, every time.

To do that, the fixture needs two different kinds of feature, and people confuse them:

```
   1. FEATURES THAT LOCATE THE PART
      Pins, pads, stops — these hold the part in a
      repeatable position.

   2. FEATURES THAT LET YOU FIND THE COORDINATE SYSTEM
      A datum bush to probe, a boss to indicate, a
      face to touch off, a setting block for Z.

   THESE ARE NOT NECESSARILY THE SAME FEATURES.
```

Why not the same? Because the features that locate the part are often **covered by the part**. You
cannot probe a locating pin when a casting is sitting on it. So the fixture usually needs a **separate,
accessible feature** whose position relative to the locators is precisely known.

```
     ┌─────────────────────────┐
     │        PART             │  ← covers the locators
     └─────────────────────────┘
      ● ●   locating pins (hidden under the part)

     ◎  ← DATUM BUSH: accessible, probeable, and its
           position relative to the pins is controlled
```

### 6. Engineering explanation

**THE SIX DEGREES OF FREEDOM AND THE THREE AXES OF A WCS**

A work coordinate system needs an origin (three translations) and an orientation (three rotations). In
practice, on a 3-axis machine, the setter establishes:

| What is set | How many | Typically set from |
|---|---|---|
| **X origin** | 1 | An edge, a bore centre, or a datum bush |
| **Y origin** | 1 | An edge, a bore centre, or a datum bush |
| **Z origin** | 1 | The part top face, a locating pad, or a setting block |
| **Orientation** | 1 (about Z) | **Usually assumed, not measured** |

> **That last row is where trouble comes from.** Most setups set three numbers and assume the fixture is
> square to the machine axes. If it is not — a fixture bolted down slightly rotated, or a locating key
> with play — then features far from the origin are displaced by an amount that grows with distance.
> The setter has no indication that anything is wrong, because the offset at the origin is correct.
>
> This is why L1.2.1 R1 insisted on positive location of the fixture to the table. **The keys do not
> just set position; they set orientation, and orientation is the error nobody measures.**

**THE PHYSICAL FEATURES THAT REALISE A WCS**

```
   ┌──────────────────────────────────────────────────┐
   │  FEATURE          SETS       TYPICAL METHOD      │
   ├──────────────────────────────────────────────────┤
   │  DATUM BUSH       X and Y    Spindle probe,      │
   │  (hardened bore)             bore-centre cycle   │
   │                                                  │
   │  DATUM PIN /      X and Y    Probe, or indicate  │
   │  INDICATING BOSS             with a DTI          │
   │                                                  │
   │  DATUM FACES      X or Y     Edge finder, probe, │
   │  (two, at 90°)    (one each) or slip + feeler    │
   │                                                  │
   │  SETTING BLOCK    Z          Tool touch-off or   │
   │  (hardened, gnd)             probe               │
   │                                                  │
   │  LOCATING PAD     Z          Probe, if accessible│
   │                                                  │
   │  ALIGNMENT SLOT / orientation Indicate along it  │
   │  GROUND EDGE                 with a DTI          │
   └──────────────────────────────────────────────────┘
```

**Design guidance for each** `[PRACTICE]`:

| Feature | Requirements |
|---|---|
| **Datum bush** | Hardened 58–62 HRC; bore H7; through or blind with chip relief; positioned clear of the part and clamps; **position toleranced to the locators** |
| **Indicating boss** | Hardened; ground OD; concentric to its position tolerance; tall enough for a DTI to sweep |
| **Datum faces** | Hardened and ground; two faces at 90°; long enough to indicate along; **not the same faces the part touches** |
| **Setting block** | As L1.2.3 — hardened, ground in position, height marked, replaceable |
| **Alignment edge/slot** | Ground; as long as possible, since orientation accuracy improves with length |

**THE CRITICAL RELATIONSHIP: SETTING FEATURE TO LOCATOR**

```
   WHAT ACTUALLY MATTERS

   The setter probes the DATUM BUSH.
   The part sits on the LOCATORS.
   The programme assumes a fixed relationship
   between them.

        ◎ bush          ● locator
        │◄──── L ──────►│
        │               │
   If the bush-to-locator distance is wrong by e,
   EVERY PART IS WRONG BY e.

   ┌────────────────────────────────────────────┐
   │ THE SETTING FEATURE'S POSITION RELATIVE TO │
   │ THE LOCATORS IS A CRITICAL DIMENSION.      │
   │                                            │
   │ It must be toleranced, inspected, and      │
   │ machined in the same setup as the locators │
   │ wherever possible.                         │
   └────────────────────────────────────────────┘
```

This is the single most important sentence in the lesson. A beautifully made fixture with a datum bush
whose position was never controlled will produce consistently wrong parts, and the error will be blamed
on the machine, the programme and the operator before anyone measures the bush.

**SETTING METHODS AND THEIR UNCERTAINTY**

`[GUIDE]` Indicative figures. These must be confirmed by a repeatability study on the actual equipment
and operator.

| Method | Typical uncertainty | Time | Notes |
|---|---|---|---|
| **Spindle probe, bore centre cycle** | ±0.003–0.008 mm | Fast | Best general method; needs a probeable feature |
| **Spindle probe, single surface** | ±0.003–0.008 mm | Fast | One axis at a time |
| **Mechanical edge finder** | ±0.010–0.020 mm | Moderate | Operator-dependent; cheap |
| **DTI on an indicating boss** | ±0.005–0.010 mm | Slow | Skilled; good for orientation as well |
| **Touch-off on the part** | ±0.02–0.05 mm | Slow | Subjective; marks the part |
| **Slip gauge and feeler** | ±0.010–0.025 mm | Slow | Traditional; adequate for coarse work |
| **Preset from a controlled fixture datum (nominal)** | fixture tolerance only | Instant | L1.2.2 Method B |

> **The uncertainty of the setting method is part of the error budget** and is usually the term people
> forget. In the L1.1.1 budget, measurement uncertainty was 10% of the tolerance; a poor setting method
> can consume far more than that. If a fixture will be set with an edge finder at ±0.015 mm against a
> ±0.05 mm tolerance, the setting alone consumes 30% of the band before the part is touched.
>
> **This is a design decision.** Providing a probeable datum bush rather than expecting the setter to
> find an edge is a fixture design choice that halves the setting uncertainty and takes a tenth of the
> time.

**DESIGNING FOR RE-ESTABLISHMENT**

A fixture's offsets have to be re-established after a refit, a crash, a repair, a control fault or a
locator replacement. `[PRACTICE]` The design questions:

1. **Is there an accessible datum feature that does not depend on a part being present?**
   If the only way to set the offset is to load a part and probe it, then a damaged first part corrupts
   the setup.
2. **Is that feature protected?** A datum bush in the chip stream fills with chips; one in the cutting
   zone gets hit.
3. **Can it be re-set quickly?** A two-minute re-qualification gets done; a twenty-minute one gets
   postponed.
4. **Is the nominal value documented?** The setter needs to know what to expect, so a gross error is
   obvious.
5. **Does the fixture provide orientation as well as position?** See the note above — orientation is
   the unmeasured error.

**THE OFFSET TABLE — THE DELIVERABLE (extending L1.2.2)**

For a multi-station fixture, the complete offset documentation contains:

```
SHEET 1 — SETTING PROCEDURE
  Which feature to probe, with what cycle, and what
  value to expect

SHEET 2 — OFFSET TABLE
  Every station: ID, offset code, B position, nominal
  X/Y/Z from the reference, source (probed/nominal)

SHEET 3 — VERIFICATION
  Which two stations to spot-check, and the acceptance
  limits

SHEET 4 — RE-ESTABLISHMENT
  What to do after a refit, crash or repair
```

`[PRACTICE]` Sheet 4 is the one nobody writes and everybody needs at 11 p.m. when something has gone
wrong.

**THE TOMBSTONE OFFSET EXERCISE — WORKED IN §13**

The roadmap specifies an exercise for this lesson: a tombstone with four faces and three parts per face,
allocating G54–G59 plus extended offsets and writing the offset table. That is worked in full in §13,
because it is the practical synthesis of the entire module.

### 7. Terminology

| Term | Definition |
|---|---|
| **Realising a WCS** | Physically making the coordinate system true for the part |
| **Datum bush** | Hardened, accurately positioned bore provided for probing |
| **Indicating boss** | Hardened cylindrical boss for setting with a dial indicator |
| **Datum face** | Ground face used for edge-finding or probing one axis |
| **Setting block** | Hardened block of known height for Z setting |
| **Alignment edge** | Long ground edge used to establish orientation |
| **Setting uncertainty** | The repeatability of the method used to establish an offset |
| **Re-establishment** | Restoring offsets after refit, crash or repair |
| **Spot-check station** | A station probed to verify a nominal offset scheme |
| **Setting procedure** | Documented instruction for establishing the offsets |

### 8. Principle

> **A WORK COORDINATE SYSTEM IS A CLAIM; THE FIXTURE IS THE EVIDENCE.**
> The machine knows where the work origin is supposed to be. It does not know where the part is. The
> fixture is the only thing that makes those the same — for every part, every time.
> **THE SETTING FEATURE'S POSITION RELATIVE TO THE LOCATORS IS A CRITICAL, TOLERANCED, INSPECTED
> DIMENSION.** An uncontrolled datum bush produces consistently wrong parts that get blamed on
> everything else.
> **PROVIDE A DEDICATED, ACCESSIBLE, PROTECTED SETTING FEATURE** — do not expect the setter to find an
> edge on a casting.
> **ORIENTATION IS THE ERROR NOBODY MEASURES.** Three offsets are set; squareness is assumed.

### 9. Industrial application

**A complete WCS realisation specification**

```
FIXTURE FX-4120 — WCS REALISATION            [PROJ]

AXIS      FEATURE                METHOD        UNCERT.
─────────────────────────────────────────────────────
X, Y      Datum bush item 18,    Spindle probe ±0.005
          Ø20 H7, hardened       bore-centre
          58-62 HRC              cycle

Z         Setting block item 31, Tool touch or ±0.005
          hardened, ground in    probe
          position, 50.000
          ±0.005 above the
          fixture Z datum

ORIENT-   Ground alignment edge  DTI sweep     ±0.004
ATION     item 6, 320 mm long,   over 300 mm   over
          parallel to X within                  300 mm
          0.008 mm

CRITICAL RELATIONSHIPS  (inspected on CMM)
  Datum bush centre to locating pin A centre
    X 180.000 ±0.015    Y 95.000 ±0.015
  Setting block top face to locating pad plane
    50.000 ±0.005
  Alignment edge to the line through pins A and B
    parallel within 0.010 mm

EXPECTED VALUES AT SETUP  (for gross-error detection)
  G54 X should read approximately −615 ±5
  G54 Y should read approximately −289 ±5
  G54 Z should read approximately −265 ±5
  IF THE PROBED VALUE DIFFERS BY MORE THAN 5 mm,
  STOP — SOMETHING IS WRONG.
```

> **The "expected values" block is a cheap and effective error trap.** It does not need to be accurate —
> ±5 mm is fine — because its purpose is to catch the gross errors: the wrong offset register, a
> transposed digit, the fixture in the wrong T-slot. Those are the errors that cause crashes, and a
> one-line sanity check catches most of them.

**Why a dedicated setting feature pays for itself**

```
COMPARISON [EX-ASSUMED times, illustrative]

  WITHOUT A DATUM BUSH — edge-find two faces on the
  part or fixture body
    Setting time              8 min
    Uncertainty              ±0.015 mm
    Requires a part loaded    yes
    Repeatable between
      operators               poor

  WITH A DATUM BUSH — probe one bore
    Setting time              1.5 min
    Uncertainty              ±0.005 mm
    Requires a part loaded    no
    Repeatable between
      operators               excellent

  COST OF THE BUSH: a hardened bush, a reamed bore
    and a position tolerance — perhaps ₹3,000 of
    additional fixture cost [EX-ASSUMED]

  BENEFIT: 6.5 min saved per setup, 3× better
    uncertainty, and the offset can be re-established
    without a part.
```

`[PRACTICE]` For a fixture set once a month the time saving is negligible and the uncertainty
improvement still matters. For a fixture set several times a day the time saving alone justifies it many
times over.

### 10. Design rules
- **R1** — Provide a **dedicated setting feature** for each axis; do not expect the setter to find an
  edge on a casting `[PRACTICE]`.
- **R2** — **Tolerance and inspect the setting feature's position relative to the locators.** It is a
  critical dimension.
- **R3** — Machine the setting features **in the same setup as the locators** wherever possible.
- **R4** — Make setting features **hardened** — they are touched, probed and knocked.
- **R5** — Position setting features **clear of the part, the clamps, the cutting zone and the chip
  stream**.
- **R6** — Ensure the offset can be established **without a part loaded**.
- **R7** — Provide an **orientation feature** — a long ground edge or two datum faces — not just
  position.
- **R8** — Choose a setting method whose **uncertainty fits the error budget**, and state it.
- **R9** — Document the **expected offset values** so gross errors are caught immediately.
- **R10** — Write a **re-establishment procedure** for after a refit, crash or repair.
- **R11** — Prefer a **probeable feature** where a spindle probe is available — it is faster and more
  repeatable than any manual method.
- **R12** — On multi-station fixtures, provide **one reference datum** plus spot-check stations
  (L1.2.2).

### 11. Rules of thumb
- **A WCS is a claim; the fixture is the evidence.**
- **The setting feature's position relative to the locators is a critical dimension.**
- **Orientation is the error nobody measures.** Provide a long alignment feature.
- **You cannot probe a locator that is under the part.** Provide a separate accessible feature.
- Probe ±0.003–0.008 mm; edge finder ±0.010–0.020 mm; touch-off on a part ±0.02–0.05 mm `[GUIDE]`.
- **A setting feature must be hardened.** It gets touched, probed and knocked.
- **Document the expected value** — a ±5 mm sanity check catches the crashes.
- **If it cannot be set without a part loaded, it cannot be recovered after a crash.**
- **Cheap verification is verification that happens.**
- **Longer alignment features give better orientation** — error is angle × length, so length helps.

### 12. Formulae

**Setting error propagation to the part**
```
E_part = E_setting_feature_position + U_setting_method
```

**Orientation error effect at distance**
```
e = D · θ    where θ = misalignment angle (rad)
θ ≈ δ / L    (δ = indicated deviation over length L)
Therefore  e = D · δ / L
```
**→ A longer alignment feature (larger L) reduces the inferred angular error.**

**Total WCS realisation error**
```
E_WCS = E_bush_to_locator + U_probe + E_orientation_at_distance
```

**Setting method selection criterion**
```
U_method ≤ 0.10 × T_part      [GUIDE — target]
```

| Variable | Meaning | Unit |
|---|---|---|
| E | Error contribution | mm |
| U | Setting method uncertainty | mm |
| θ | Orientation misalignment | rad |
| δ | Indicated deviation over the alignment length | mm |
| L | Alignment feature length | mm |
| D | Distance from the origin to the feature of interest | mm |

### 13. Worked numerical example

**THE TOMBSTONE OFFSET EXERCISE**

**Problem:** A four-face tombstone carries three parts per face — twelve stations. Allocate the work
offsets, produce the complete offset table, determine the WCS realisation error including orientation,
and verify that the scheme meets the part tolerance.

```
GIVEN:
  TOMBSTONE                                      [PROJ]
    4 faces, B = 0°, 90°, 180°, 270°
    3 stations per face, vertically arranged
    Station centres above the pallet face:
      low 140.000, mid 300.000, high 460.000 mm
    Station centre offset from the tombstone
      centreline, each face:      X = −115.000 mm
    All four faces identical (symmetrical design)

  REFERENCE DATUM                                [PROJ]
    Datum bush TB-REF, Ø25 H7, hardened
    Position: on the pallet-mounting flange,
      accessible at B = 0°
    Probed value at setup:
      MCS X = −498.220
      MCS Y = −286.940
      MCS Z = −155.600

  ALIGNMENT FEATURE                              [PROJ]
    Ground edge on the tombstone base
    Length available for indicating   = 260 mm
    Indicated deviation over that length = 0.012 mm

  CONTROL                                        [MFR]
    G54-G59 available
    G54.1 P1-P48 extended offsets available

  TOLERANCES
    Setting feature (bush) position relative to
      station locators, inspected     = ±0.014 mm
    Spindle probe uncertainty         = ±0.005 mm  [GUIDE]
    Part positional tolerance         = ±0.06 mm   [PROJ]
    Furthest feature from the station origin
                                      = 145 mm     [PROJ]
    Pre-existing budget consumption
      (machine, tooling, measurement) = 0.038 mm   [GUIDE]

REQUIRED:
  (a) Offset allocation scheme, with justification
  (b) The complete offset table
  (c) Orientation misalignment angle, in radians and
      arc-seconds
  (d) Positional error at the furthest feature due to
      orientation
  (e) Total WCS realisation error
  (f) Assessment against the part tolerance
  (g) The alignment feature length needed to halve the
      orientation error
  (h) Engineering conclusion

ASSUMPTION:
  1. Nominal offset method (L1.2.2 Method B) used: one
     probed reference, station values nominal from
     CAD. Justified by the ±0.014 mm inspected station
     position. [PRACTICE]
  2. Probe uncertainty ±0.005 mm per axis, GUIDELINE,
     to be confirmed by a repeatability study on the
     actual probe. [GUIDE]
  3. Orientation error treated as a rotation about the
     vertical axis, affecting features in proportion
     to their distance from the station origin.
  4. Worst-case arithmetic summation. [PRACTICE]
  5. All four faces assumed geometrically identical,
     which the symmetrical design intends and the CMM
     report must confirm. [PROJ]
  6. Station values quoted relative to TB-REF as
     nominal CAD vectors.

FORMULA:
  (c) θ = δ / L
  (d) e = D · θ
  (e) E_WCS = E_bush_to_locator + U_probe + e
  (g) L_required = δ · D / e_target

UNIT CONVERSION:
  Tolerances as total bands where compared with a
  budget:
    part tolerance ±0.06 → 0.120 mm band
    bush position  ±0.014 → 0.028 mm band
    probe          ±0.005 → 0.010 mm band
  1 rad = 206,265 arc-seconds

SUBSTITUTION AND CALCULATION:

  (a) OFFSET ALLOCATION SCHEME

      12 stations required. G54-G59 gives only 6.
      → EXTENDED OFFSETS REQUIRED.

      DECISION: use G54.1 P1 to P12 for the twelve
      stations, and RESERVE G54-G59 entirely for
      setup, probing routines and any future
      single-part work.

      RATIONALE:
        - Keeps all twelve production stations in one
          contiguous, systematically numbered block
        - Leaves G54-G59 free, which setters expect to
          be able to use
        - P13-P48 remain spare (36 offsets)

      NUMBERING: face-major, then station low-to-high,
      matching the physical layout and the engraved
      IDs:
        Face A (B0°)   A1=P1  A2=P2  A3=P3
        Face B (B90°)  B1=P4  B2=P5  B3=P6
        Face C (B180°) C1=P7  C2=P8  C3=P9
        Face D (B270°) D1=P10 D2=P11 D3=P12

  (b) THE COMPLETE OFFSET TABLE

  ┌─────┬───────────┬─────┬─────────┬─────────┬─────────┐
  │ STN │  OFFSET   │  B  │    X    │    Y    │    Z    │
  ├─────┼───────────┼─────┼─────────┼─────────┼─────────┤
  │ A1  │ G54.1 P1  │   0 │−115.000 │ 140.000 │ −60.000 │
  │ A2  │ G54.1 P2  │   0 │−115.000 │ 300.000 │ −60.000 │
  │ A3  │ G54.1 P3  │   0 │−115.000 │ 460.000 │ −60.000 │
  │ B1  │ G54.1 P4  │  90 │−115.000 │ 140.000 │ −60.000 │
  │ B2  │ G54.1 P5  │  90 │−115.000 │ 300.000 │ −60.000 │
  │ B3  │ G54.1 P6  │  90 │−115.000 │ 460.000 │ −60.000 │
  │ C1  │ G54.1 P7  │ 180 │−115.000 │ 140.000 │ −60.000 │
  │ C2  │ G54.1 P8  │ 180 │−115.000 │ 300.000 │ −60.000 │
  │ C3  │ G54.1 P9  │ 180 │−115.000 │ 460.000 │ −60.000 │
  │ D1  │ G54.1 P10 │ 270 │−115.000 │ 140.000 │ −60.000 │
  │ D2  │ G54.1 P11 │ 270 │−115.000 │ 300.000 │ −60.000 │
  │ D3  │ G54.1 P12 │ 270 │−115.000 │ 460.000 │ −60.000 │
  └─────┴───────────┴─────┴─────────┴─────────┴─────────┘

  All values NOMINAL, from CAD, relative to TB-REF.
  TB-REF probed and entered as the COMMON (EXT)
  offset: X −498.220  Y −286.940  Z −155.600

  Z value derivation:
    Station locating face is 60.000 mm outboard of the
    tombstone face plane referenced to TB-REF; sign
    negative per the tombstone coordinate convention.

  NOTE THE SELF-CHECKING PROPERTY: every face shows
  identical X, Y and Z. Only B differs. ANY
  TRANSCRIPTION ERROR IS IMMEDIATELY VISIBLE.
  Spares: P13-P48 (36 offsets) plus G54-G59.

  (c) ORIENTATION MISALIGNMENT

      Indicated deviation δ = 0.012 mm
      over length         L = 260 mm

        θ = δ / L
          = 0.012 / 260
          = 4.6154 × 10⁻⁵ rad

      In arc-seconds:
        θ = 4.6154×10⁻⁵ × 206265
          = 9.520 arc-seconds

  (d) POSITIONAL ERROR AT THE FURTHEST FEATURE

      Distance from the station origin D = 145 mm

        e = D · θ
          = 145 × 4.6154×10⁻⁵
          = 0.006692 mm
          ≈ 0.0067 mm

  (e) TOTAL WCS REALISATION ERROR

      Bush-to-locator position (band)  = 0.028 mm
      Probe uncertainty (band)         = 0.010 mm
      Orientation at 145 mm            = 0.0067 mm
      ─────────────────────────────────────────────
      E_WCS (worst case)               = 0.0447 mm

  (f) ASSESSMENT AGAINST THE PART TOLERANCE

      Part tolerance band              = 0.120 mm
      Pre-existing consumption         = 0.038 mm
      WCS realisation                  = 0.0447 mm
      ─────────────────────────────────────────────
      Total                            = 0.0827 mm

      Utilisation = 0.0827 / 0.120 = 68.9 %

      Remaining for everything else
      (fixture deflection, locator wear,
       clamping repeatability):
        0.120 − 0.0827 = 0.0373 mm  (31.1 %)

      ✓ PASS — with 31 % of the band remaining.

      COMPONENT SHARES of the WCS error:
        bush position   0.028/0.0447 = 62.6 %
        probe           0.010/0.0447 = 22.4 %
        orientation     0.0067/0.0447 = 15.0 %

  (g) ALIGNMENT LENGTH TO HALVE THE ORIENTATION ERROR

      Target e = 0.0067/2 = 0.003346 mm

      Rearranging  e = D·δ/L  →  L = D·δ/e

        L = 145 × 0.012 / 0.003346
          = 1.740 / 0.003346
          = 520.0 mm

      → THE ALIGNMENT FEATURE WOULD HAVE TO BE
        520 mm LONG — DOUBLE THE CURRENT 260 mm.

      This is the expected result: e is inversely
      proportional to L, so halving the error requires
      doubling the length. Note that this assumes the
      same 0.012 mm indicated deviation is achievable
      over the longer length, which is optimistic —
      a longer feature is harder to make straight.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Offsets used             │ G54.1 P1-P12      │
  │     Reserved                 │ G54-G59, P13-P48  │
  │ (b) Offset table             │ 12 stations, all  │
  │                              │ faces identical   │
  │ (c) Orientation angle        │ 4.615×10⁻⁵ rad    │
  │                              │ = 9.52 arc-sec    │
  │ (d) Error at 145 mm          │ 0.0067 mm         │
  │ (e) Total WCS realisation    │ 0.0447 mm         │
  │     — bush position          │ 0.028 (62.6 %)    │
  │     — probe                  │ 0.010 (22.4 %)    │
  │     — orientation            │ 0.0067 (15.0 %)   │
  │ (f) Total vs 0.120 band      │ 68.9 %  ✓ PASS    │
  │     Remaining                │ 0.0373 mm (31 %)  │
  │ (g) Length to halve orient.  │ 520 mm (2× longer)│
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The margin is 31 % of
  the tolerance band remaining after the WCS
  realisation and the pre-existing machine, tooling
  and measurement consumption. That is workable but
  it must still absorb fixture deflection, clamping
  repeatability and locator wear over the fixture's
  life — and wear will consume it steadily.

PASS/FAIL:
  ✓ PASS — the scheme meets the tolerance at 68.9 %
    utilisation with 31 % remaining.
  ✓ PASS — offset allocation is systematic, symmetrical
    and self-checking, with ample spares.
  ⚠ NOTE — the bush-to-locator position tolerance
    dominates at 62.6 % of the WCS error and is the
    obvious target for improvement.

ENGINEERING CONCLUSION:
  1. THE BUSH-TO-LOCATOR POSITION IS THE DOMINANT
     TERM, AND IT IS THE ONE PEOPLE DO NOT SPECIFY.
     At 62.6 % of the WCS realisation error, the
     relationship between the datum bush and the
     station locators matters more than the probe and
     the orientation combined. Yet it is a dimension
     that is easy to leave uncontrolled, because the
     bush "is only for setting" and does not touch the
     part.
     IT DOES NOT TOUCH THE PART AND IT DETERMINES
     WHERE EVERY PART GOES. Tightening it from
     ±0.014 mm to ±0.007 mm would reduce the WCS error
     from 0.0447 to 0.0307 mm, a 31 % improvement, and
     it costs only a tighter tolerance on a feature
     already being machined. THAT IS THE HIGHEST-VALUE
     CHANGE AVAILABLE HERE.

  2. THE ORIENTATION TERM IS SMALL BUT IT IS THE ONE
     NOBODY MEASURES.
     At 0.0067 mm it is 15 % of the WCS error — real
     but not dominant, and only because the alignment
     feature is a reasonable 260 mm and the furthest
     feature is only 145 mm from its station origin.
     TWO THINGS WOULD CHANGE THAT. If the alignment
     feature were only 80 mm long, the inferred angle
     would be over three times larger. And if the part
     were larger — a feature 400 mm from the origin
     rather than 145 mm — the error would rise to
     0.018 mm.
     ORIENTATION ERROR GROWS WITH DISTANCE FROM THE
     ORIGIN AND SHRINKS WITH ALIGNMENT FEATURE LENGTH.
     Part (g) shows the cost of improving it: doubling
     the length to halve the error, and a longer
     feature is harder to keep straight. SO THE
     PRACTICAL ANSWER IS USUALLY TO MAKE THE ALIGNMENT
     FEATURE AS LONG AS THE FIXTURE ALLOWS FROM THE
     OUTSET, because retrofitting length is difficult.

  3. THE SYMMETRICAL TABLE IS WORTH MORE THAN IT
     LOOKS.
     Every face producing identical X, Y and Z values
     means a transcription error is visible at a
     glance, a station can be checked against its
     opposite number, and the CAD export can be
     verified by inspection. This came free from a
     design decision — making all four faces
     geometrically identical — that was available
     because the part allowed it. WHERE THE PART
     ALLOWS SYMMETRY, TAKE IT.

  4. RESERVING G54-G59 IS A SMALL COURTESY WITH REAL
     VALUE.
     Setters expect to be able to use G54 for a quick
     setup, a test cut or a probing routine. A fixture
     that consumes G54-G59 and then spills into
     extended offsets leaves nothing free and forces
     improvisation. Putting all twelve production
     stations in a contiguous extended block and
     leaving the standard six alone costs nothing and
     avoids that.

  5. 31 % REMAINING IS ENOUGH TO START AND NOT ENOUGH
     TO IGNORE.
     Fixture deflection, clamping repeatability and
     locator wear all have to fit in 0.0373 mm. Wear
     in particular is progressive, so this fixture
     will drift toward its limit over time. I WOULD
     SET A RE-QUALIFICATION INTERVAL and spot-check
     two stations against nominal at that interval,
     which is a two-minute check that catches the
     drift before it produces scrap.

SENSITIVITY NOTE:
  Ranked by influence on the WCS realisation error:
    1. BUSH-TO-LOCATOR POSITION TOLERANCE — 62.6 % of
       the total and directly specifiable. The single
       most effective improvement, at essentially no
       manufacturing cost.
    2. PROBE UNCERTAINTY — 22.4 %. Improvable by using
       a better probe or averaging multiple probe
       cycles, but with diminishing returns.
    3. ALIGNMENT FEATURE LENGTH — orientation error is
       inversely proportional to it. Cheap to get
       right at design stage, expensive to fix later.
    4. DISTANCE FROM THE STATION ORIGIN TO THE
       FURTHEST FEATURE — not under my control, but it
       determines how much the orientation term
       matters. A larger part makes orientation
       dominant.
  Note that STATION-TO-STATION MANUFACTURING TOLERANCE
  does not appear in this particular calculation
  because the analysis is of a single station's WCS
  realisation; it enters the station-to-station
  comparison analysed in L1.2.2.
```

### 14. Engineering assumptions
- Nominal offset method (L1.2.2 Method B), justified by the ±0.014 mm inspected station position
  `[PRACTICE]`.
- Probe uncertainty ±0.005 mm per axis `[GUIDE]` — confirm by a repeatability study.
- Orientation error treated as rotation about the vertical axis, proportional to distance from the
  station origin.
- Worst-case arithmetic summation `[PRACTICE]`.
- All four faces geometrically identical — intended by the symmetrical design, to be confirmed by the
  CMM report `[PROJ]`.
- Part (g) assumes the same indicated deviation is achievable over a longer alignment feature, which is
  optimistic.

### 15. Diagram

```
     REALISING A WORK COORDINATE SYSTEM
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE GAP THIS LESSON CLOSES

   THE MACHINE KNOWS          THE MACHINE DOES NOT KNOW
   ┌──────────────────┐       ┌──────────────────────┐
   │ work origin is at│       │ whether a part is    │
   │ MCS X−498.220    │       │ there at all, or     │
   │     Y−286.940    │       │ where its features   │
   │     Z−155.600    │       │ are                  │
   └──────────────────┘       └──────────────────────┘
              ╲                        ╱
               ╲                      ╱
                ▼                    ▼
        ┌────────────────────────────────┐
        │  THE FIXTURE MAKES THESE THE   │
        │  SAME THING — EVERY PART,      │
        │  EVERY TIME.                   │
        │                                │
        │  A WCS IS A CLAIM.             │
        │  THE FIXTURE IS THE EVIDENCE.  │
        └────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  TWO DIFFERENT KINDS OF FEATURE

     ┌───────────────────────────┐
     │          PART             │ ← covers the locators
     └───────────────────────────┘
       ●        ●         ▬
     pin A    pin B    pad    LOCATING FEATURES
                              (hidden under the part —
                               CANNOT BE PROBED)

     ◎  datum bush      ╔═══╗ setting block
        X, Y            ╚═══╝ Z
     ═══════════════════════   ground alignment edge
                                ORIENTATION

     SETTING FEATURES — ACCESSIBLE, HARDENED,
     AND POSITIONED RELATIVE TO THE LOCATORS

  ──────────────────────────────────────────────────────────

  THE CRITICAL DIMENSION NOBODY SPECIFIES

        ◎ bush                    ● locator
        │◄──── 180.000 ±0.014 ───►│

   ┌──────────────────────────────────────────────┐
   │ THE BUSH DOES NOT TOUCH THE PART.            │
   │ IT DETERMINES WHERE EVERY PART GOES.         │
   │                                              │
   │ In the worked example this one dimension was │
   │ 62.6 % OF THE WHOLE WCS ERROR — more than    │
   │ the probe and the orientation combined.      │
   │                                              │
   │ TOLERANCE IT. INSPECT IT. MACHINE IT IN THE  │
   │ SAME SETUP AS THE LOCATORS.                  │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  ORIENTATION — THE ERROR NOBODY MEASURES

   Three offsets are set. SQUARENESS IS ASSUMED.

        indicated 0.012 mm over L = 260 mm
        ════════════════════════════════
              θ = δ/L = 4.615×10⁻⁵ rad
                      = 9.52 arc-seconds

        ● origin ─────────── D = 145 mm ──────► ✛
          offset correct here      error 0.0067 mm here

   ┌──────────────────────────────────────────────┐
   │ e = D · δ / L                                │
   │                                              │
   │ THE ERROR GROWS WITH DISTANCE FROM THE       │
   │ ORIGIN AND SHRINKS WITH ALIGNMENT LENGTH.    │
   │                                              │
   │ To HALVE the error you must DOUBLE the       │
   │ alignment length: 260 → 520 mm.              │
   │ MAKE IT LONG FROM THE OUTSET — retrofitting  │
   │ length is difficult.                         │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  SETTING METHOD UNCERTAINTY  [GUIDE]

   probe, bore cycle    ±0.003-0.008  ██
   probe, surface       ±0.003-0.008  ██
   DTI on a boss        ±0.005-0.010  ███
   edge finder          ±0.010-0.020  ██████
   slip + feeler        ±0.010-0.025  ███████
   touch-off on part    ±0.02 -0.05   ████████████████

   Against a ±0.05 mm part tolerance, an edge finder
   at ±0.015 consumes 30 % OF THE BAND BEFORE THE
   PART IS TOUCHED.

   ┌──────────────────────────────────────────────┐
   │ PROVIDING A PROBEABLE DATUM BUSH INSTEAD OF  │
   │ EXPECTING AN EDGE FIND IS A FIXTURE DESIGN   │
   │ DECISION THAT HALVES THE UNCERTAINTY AND     │
   │ TAKES A TENTH OF THE TIME.                   │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE 12-STATION TOMBSTONE ALLOCATION

     FACE A (B0)   FACE B (B90)  FACE C (B180) FACE D (B270)
     ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐
     │ A3  P3  │   │ B3  P6  │   │ C3  P9  │   │ D3  P12 │ 460
     │ A2  P2  │   │ B2  P5  │   │ C2  P8  │   │ D2  P11 │ 300
     │ A1  P1  │   │ B1  P4  │   │ C1  P7  │   │ D1  P10 │ 140
     └─────────┘   └─────────┘   └─────────┘   └─────────┘

     ALL FOUR FACES: IDENTICAL X, Y, Z. ONLY B DIFFERS.
     → THE TABLE IS SELF-CHECKING.

     G54-G59  RESERVED for setup and probing
     P1-P12   the twelve production stations
     P13-P48  spare (36)

     ◎ TB-REF probed once → COMMON offset
       Everything else is nominal from CAD.

  ──────────────────────────────────────────────────────────

  THE ERROR BUDGET — WHERE IT ACTUALLY GOES

   part tolerance band              0.120 mm  ████████████
   pre-existing (mc/tool/meas)      0.038     ████
   bush-to-locator position         0.028     ███  ◄ 62.6 %
   probe uncertainty                0.010     █       of the
   orientation at 145 mm            0.0067    ▌       WCS
   ─────────────────────────────────────────          error
   TOTAL                            0.0827   = 68.9 %
   REMAINING for deflection,        0.0373   = 31.1 %
     clamping, WEAR

   ┌──────────────────────────────────────────────┐
   │ 31 % IS ENOUGH TO START AND NOT ENOUGH TO    │
   │ IGNORE. WEAR IS PROGRESSIVE — SET A          │
   │ RE-QUALIFICATION INTERVAL.                   │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-4120 — SETTING FEATURES
STANDARD: ASME Y14.5-2018
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: DATUM BUSH ITEM 18, Ø20 H7, EN31 HARDENED
        58-62 HRC, IS PROVIDED FOR ESTABLISHING THE
        WORK COORDINATE SYSTEM. ITS POSITION RELATIVE
        TO LOCATING PINS ITEMS 11 AND 12 IS A CRITICAL
        DIMENSION — SEE POSITIONAL TOLERANCE.

NOTE 2: DATUM BUSH AND LOCATING PIN BORES TO BE
        MACHINED IN THE SAME SETUP.

NOTE 3: GROUND ALIGNMENT EDGE ITEM 6 IS PROVIDED FOR
        ESTABLISHING FIXTURE ORIENTATION. INDICATE
        OVER THE FULL 320 mm LENGTH. ACCEPTANCE
        0.010 mm TIR.

NOTE 4: EXPECTED OFFSET VALUES AT SETUP —
          X approximately −615 ±5
          Y approximately −289 ±5
          Z approximately −265 ±5
        IF THE PROBED VALUE DIFFERS BY MORE THAN 5 mm
        FROM THESE, STOP AND INVESTIGATE BEFORE
        RUNNING.

NOTE 5: WORK OFFSETS MAY BE RE-ESTABLISHED WITHOUT A
        COMPONENT LOADED. SEE SETTING PROCEDURE
        SP-4120 SHEET 4 FOR RECOVERY AFTER REFIT,
        COLLISION OR CONTROL FAULT.
```

Note 4 is the cheap error trap discussed in §9 — it does not need to be accurate to catch the errors
that cause crashes. Note 5 is the one that matters at eleven o'clock at night.

### 17. CAD workflow
1. Model the **locating features** first — they define the part's position
2. Add the **datum bush** and dimension its position **from the locators**, not from the plate edge
3. Add the **setting block** at its specified height above the fixture Z datum
4. Add the **alignment edge** and make it as long as the fixture allows
5. Create a **coordinate system at the work origin** and verify it coincides with the intended datum
6. **Measure bush-to-locator distances in CAD** and transfer them to the drawing as toleranced critical
   dimensions
7. Check that the bush, block and alignment edge are **accessible with a probe and a DTI** — model the
   probe body and sweep it
8. For multi-station fixtures, create a **coordinate system per station** and export the offset table
   (L1.2.2 §17)
9. Verify **symmetry** across faces
10. Produce the **setting procedure** from the model, including the expected values

`[PRACTICE]` Step 7 catches a common problem: a datum bush that is geometrically fine but cannot be
reached because a clamp body or a tombstone rib is in the way of the probe stylus.

### 18. GD&T application

```
STANDARD: ASME Y14.5-2018

FIXTURE DATUM STRUCTURE
  A — fixture base mounting face (seats on the table)
  B — locating key faces (orients to the T-slot)
  C — second key or an edge

THE SETTING FEATURES, CONTROLLED TO THE SAME DATUMS
AS THE LOCATORS:

  Datum bush Ø20 H7:
  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.028 Ⓜ │ A │ B │ C │       │
  └──────────────────────────────────┘

  Locating pin Ø16:
  ┌──────────────────────────────────┐
  │ ⌖ │ Ø0.028 Ⓜ │ A │ B │ C │       │
  └──────────────────────────────────┘

  Setting block top face:
  ┌─────────────────────────┐
  │ ⌓ │ 0.010 │ A │         │
  └─────────────────────────┘
  from basic 50.000

  Alignment edge:
  ┌─────────────────────────┐
  │ ∥ │ 0.010 │ B │         │
  └─────────────────────────┘

  ┌────────────────────────────────────────────┐
  │ THE KEY POINT: THE BUSH AND THE LOCATORS   │
  │ ARE CONTROLLED TO THE SAME DATUMS.         │
  │                                            │
  │ That is what makes the bush-to-locator     │
  │ relationship a controlled quantity rather  │
  │ than an accident of two independent        │
  │ tolerances.                                │
  │                                            │
  │ Ⓜ (MMC) is used on the pin and bush because│
  │ the bonus tolerance available at their     │
  │ actual sizes is genuinely usable here —    │
  │ full treatment at L22.                     │
  └────────────────────────────────────────────┘
```

### 19. Manufacturing method
1. Machine the fixture base soft, leaving grinding stock
2. Stress relieve if welded (L0.5.3)
3. Grind the base and the key slots — establishing datums A, B, C
4. **Machine the locating pin bores and the datum bush bore in the same setup**, indicated from the key
   slots
5. Machine the alignment edge in the same setup
6. Fit hardened bushes and pins
7. Fit the setting block, dowelled and screwed, and **grind its top face in position**
8. Inspect all setting features to the locators on a CMM
9. Stamp the setting block height and the station IDs

> **Step 4 is the step that makes everything in this lesson work.** If the bush and the pins are machined
> in one setup from the same datums, their relationship is a machine-tool accuracy — typically a few
> microns. If they are machined in separate setups, their relationship is the sum of two setup errors,
> which is an order of magnitude worse and is exactly the term that dominated the error budget in §13.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Bush position to locating pins | CMM | ±0.014 mm |
| Bush bore size | Plug gauge / CMM | Ø20 H7 |
| Bush hardness | Portable tester | 58–62 HRC |
| Setting block height to Z datum | Height gauge / CMM | 50.000 ±0.005 mm |
| Alignment edge parallelism | DTI over full length | 0.010 mm TIR |
| Probe accessibility | Physical trial with the actual probe | Reachable |
| Setting repeatability | Probe the bush 10 times | ≤0.010 mm spread |
| Offset table vs CAD | Compare exported values | Identical |
| Expected values on the drawing | Compare with the first actual setup | Within ±5 mm |

`[PRACTICE]` The "probe the bush ten times" check is the direct measurement of the setting uncertainty
assumed in the error budget. If the assumed ±0.005 mm turns out to be ±0.015 mm, the budget changes and
the design assumption was wrong — better to know at commissioning.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **No dedicated setting feature** — setter finds an edge on the casting | Large, variable setting uncertainty |
| 2 | **Bush position to locators not toleranced** | Consistent error blamed on everything else |
| 3 | Bush and locators machined in **separate setups** | Relationship error an order of magnitude worse |
| 4 | Setting feature **not hardened** | Wears; drifts |
| 5 | Bush **in the chip stream** or the cutting zone | Fills with chips, or gets hit |
| 6 | **No orientation feature** | Squareness assumed; error grows with distance |
| 7 | Alignment feature **too short** | Angular error poorly determined |
| 8 | Offset **cannot be set without a part loaded** | Cannot recover after a crash |
| 9 | **Expected values not documented** | Gross errors reach the machine |
| 10 | **No re-establishment procedure** | Long downtime after an incident |
| 11 | Bush geometrically fine but **the probe cannot reach it** | Discovered at commissioning |
| 12 | Consuming **G54–G59** and spilling into extended offsets | Nothing left for setup |
| 13 | Assuming the **setting method's uncertainty is negligible** | A large hidden budget term |
| 14 | Setting features **dimensioned from the plate edge** rather than the locators | The critical relationship is uncontrolled |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| All parts consistently displaced, offsets look correct | Bush-to-locator position error | CMM the bush against the pins | Re-machine or apply a correction to the offset | Tolerance and inspect the relationship |
| Error small near the origin, large far from it | Orientation error | Indicate the alignment edge | Re-align the fixture | Long alignment feature; positive keying |
| Setting values vary between operators | High-uncertainty setting method | Repeatability study by operator | Provide a probeable datum | Design rule R1 |
| Cannot re-establish offsets after a crash | No part-independent setting feature | — | Improvise; long downtime | Design rule R6 |
| Probe cannot reach the datum bush | Access not checked | Physical trial | Relocate the bush | Model the probe in CAD |
| Offsets drift over months | Setting feature wear | Re-probe; measure the bush | Replace the bush | Harden it; periodic check |
| Gross offset error reaches the machine | No sanity-check value documented | — | — | Document expected values |
| Z dimensions all wrong | Setting block height | Measure the block | Regrind or replace | L1.2.3 |
| One station wrong, others fine | Station position error, nominal scheme | Probe that station | Store that station individually | Inspect station positions |
| Setting takes far longer than planned | Awkward or inaccessible features | Time the setup | Relocate the features | Consider setup time at design stage |

### 23. Design checklist
- [ ] Is there a **dedicated setting feature for each axis** — X, Y, Z?
- [ ] Is there an **orientation feature**, and is it as long as the fixture allows?
- [ ] Is the setting feature's **position relative to the locators toleranced and inspected**?
- [ ] Are the setting features and locators **machined in the same setup**?
- [ ] Are the setting features **hardened**?
- [ ] Are they **clear of the part, clamps, cutting zone and chip stream**?
- [ ] Can the offset be established **without a part loaded**?
- [ ] Has **probe or DTI access** been physically verified, not just assumed?
- [ ] Does the chosen **setting method's uncertainty fit the error budget**, and is it stated?
- [ ] Are the **expected offset values documented** as a sanity check?
- [ ] Is there a **re-establishment procedure** for after a refit, crash or repair?
- [ ] For multi-station fixtures, is the **offset table complete, symmetrical and self-checking**?
- [ ] Are **G54–G59 left free** where extended offsets are available?
- [ ] Is a **re-qualification interval** specified to catch wear?

### 24. Beginner exercise
**E1.2.4-B** — A fixture locates a part on two pins and a set of pads, and a hardened datum bush is
provided 150.000 mm from pin A for setting the work offset.
(a) Explain in two sentences why the fixture needs the bush when it already has the pins.
(b) The bush-to-pin distance is found to be 150.045 mm. State the magnitude and effect of this error on
the parts.
(c) State three requirements the bush must satisfy besides being in the right place.
(d) The setter uses an edge finder at ±0.015 mm instead of a probe at ±0.005 mm. State the extra
uncertainty introduced and express it as a percentage of a ±0.05 mm part tolerance band.
(e) State why the offset should be settable without a part loaded.

### 25. Intermediate exercise
**E1.2.4-I** — A fixture has a datum bush positioned to the locators within ±0.012 mm, is probed with an
uncertainty of ±0.006 mm, and has a ground alignment edge 200 mm long indicating 0.010 mm over that
length. The furthest part feature is 220 mm from the work origin. The part positional tolerance is
±0.055 mm and pre-existing machine/tooling/measurement consumption is 0.036 mm.
(a) Calculate the orientation angle in radians and arc-seconds.
(b) Calculate the positional error at the furthest feature due to orientation.
(c) Calculate the total WCS realisation error, worst case, and state each component's percentage share.
(d) Calculate total tolerance utilisation and state pass/fail.
(e) Identify the dominant term and calculate the improvement obtained by halving it.
(f) Calculate the alignment edge length needed to reduce the orientation error to 0.003 mm.
(g) State two design changes you would make and justify each with a number.

### 26. Advanced exercise
**E1.2.4-A** — Design the complete WCS realisation for a horizontal machining centre tombstone fixture.
The tombstone is 500 mm square by 700 mm tall on a 500 mm pallet. Four faces carry two stations each —
eight stations. Station centres are 180 mm and 480 mm above the pallet face, offset 130 mm from the
tombstone centreline. Parts are aluminium housings 200 × 160 × 90 mm with a positional requirement of
±0.05 mm; the furthest controlled feature is 168 mm from each station's origin. A spindle probe with
±0.005 mm uncertainty is available; the control provides G54–G59 and G54.1 P1–P48. Pre-existing budget
consumption is 0.040 mm.
(i) Specify the setting features you would provide for X, Y, Z and orientation, giving material,
hardness, size and position for each, and stating why each is needed.
(ii) State the critical dimensions between the setting features and the locators, with tolerances, and
justify each tolerance numerically against the error budget.
(iii) Determine the maximum permissible bush-to-locator position tolerance such that the total WCS
realisation error consumes no more than 40% of the part tolerance band.
(iv) Choose the alignment feature length and calculate the resulting orientation error at the furthest
feature; state the indicated deviation you would specify.
(v) Produce the complete offset allocation and offset table for all eight stations, stating which
offsets you reserve and why.
(vi) Calculate the total error budget and state the remaining margin.
(vii) Write the four sheets of the setting documentation in outline: setting procedure, offset table,
verification, re-establishment.
(viii) State how the offsets would be re-established after (a) a pallet change, (b) a collision on one
face, (c) a control battery failure, and explain why the three cases differ.
(ix) Identify the single design decision in your scheme that has the greatest effect on accuracy and
justify it.

### 27. Interview questions
1. *"What does it mean to say a fixture 'realises' a work coordinate system?"*
   **Answer:** The work coordinate system is just a set of numbers stored in the control — it says the
   part's origin is at a particular machine position. The machine has no way of knowing whether there is
   actually a part there, or where its features are. The fixture is the physical thing that makes the
   claim true: it puts the part in the position the offset says it is, and it does so for every part,
   every time. So realising the coordinate system means providing the locating features that fix the
   part's position, and also providing the accessible setting features — a datum bush, a setting block,
   an alignment edge — that let the setter establish the offset accurately and re-establish it later.
   The way I think of it is that a work coordinate system is a claim, and the fixture is the evidence.
2. *"Why would a fixture need a datum bush when it already has locating pins?"*
   **Answer:** Because the locating pins are under the part. Once a casting is loaded, you cannot probe
   the pins, so there is nothing accessible to set the offset from. The datum bush is a separate,
   accessible feature provided purely for setting — hardened, clear of the part and the clamps and the
   chip stream, and positioned so a probe can reach it. The critical thing is that its position relative
   to the locating pins has to be a controlled, toleranced, inspected dimension, and ideally the bush and
   the pin bores are machined in the same setup, because whatever error exists between them goes straight
   into every part. It is easy to leave that relationship uncontrolled on the grounds that the bush does
   not touch the part — but it determines where every part ends up.

### 28. Expert questions
1. *"In your experience, what is the most commonly uncontrolled dimension on a fixture drawing?"*
   **Answer:** **The relationship between the setting features and the locating features.** I would put
   it above anything else, because it fails silently and it gets blamed on other people.
   The reasoning behind the omission is understandable. A designer tolerances the locators carefully,
   because those touch the part and everyone accepts that they matter. The datum bush is "just for
   setting" — it does not touch anything, it is not in the load path, and it feels like a convenience
   feature. So it gets dimensioned from the plate edge with a general tolerance, or it inherits ISO 2768
   medium, and nobody thinks about it again.
   But consider what actually happens in production. The setter probes the bush and enters the offset.
   The machine now believes the part origin is at a position derived from the bush. The part, however,
   sits on the locators. **Whatever error exists between the bush and the locators is transferred
   directly and completely into every part the fixture ever makes.** Not statistically — completely, and
   in the same direction every time.
   In the tombstone example in this lesson, that one dimension was 62.6% of the entire work coordinate
   system realisation error — more than the probe uncertainty and the orientation error combined. And it
   was specified at ±0.014 mm, which is a reasonably careful tolerance. If it had been left to ISO 2768
   medium, which for that size range is ±0.3 mm, the fixture would have been unusable and nobody would
   have known why.
   The failure mode is what makes it insidious. The parts are consistently wrong, so the machine gets
   checked, the programme gets checked, the offsets get re-set, the operator gets questioned — and
   everything checks out, because the offsets *are* correct relative to the bush. The bush is the last
   thing anyone measures, because it is not on anyone's mental list of things that affect the part.
   My practice is threefold. **Dimension the setting features from the locators, not from the plate
   edges** — the drawing should express the relationship that matters. **Control both to the same
   datums** with positional tolerances, so the relationship is a controlled quantity rather than the
   accidental sum of two independent tolerances. And **specify that they are machined in the same
   setup**, because that turns the relationship into a machine-tool accuracy of a few microns instead of
   the sum of two setup errors.
   A close second, incidentally, is the tool setting block height, which fails the same way for the same
   reason — a feature that does not touch the part but determines a part dimension. The general
   principle covering both is that **any feature that determines where the part ends up is a critical
   feature, whether or not it touches the part.**
2. *"How would you design a fixture so that its offsets can be recovered quickly after a crash?"*
   **Answer:** I would design for it deliberately, because recovery time is not something you can add
   afterwards, and a crash is not a hypothetical event on a production machine.
   The first requirement is a **setting feature that does not depend on a part being present**. If the
   only way to establish the offset is to load a component and probe it, then after a crash you are
   probing a part that may itself be damaged, in a fixture that may have moved, and you have no
   independent reference. A hardened datum bush on the fixture body gives you a reference that is
   independent of the part entirely.
   The second is that the feature must be **protected**. A datum bush in the cutting zone or in the chip
   stream is exactly what gets damaged in the crash you are recovering from. I put setting features away
   from the working area, ideally on a face that a tool cannot reach, and I make them replaceable —
   pressed or screwed bushes rather than bores machined directly into the fixture body — so that if one
   is damaged it can be renewed without scrapping the fixture.
   The third is **positive location of the fixture to the table**, which is the L1.2.1 argument. If the
   fixture has moved in the crash, keys give you a defined position to return to. Without them you are
   re-qualifying everything from scratch.
   The fourth is **documentation of the expected values**. After a crash, the setter needs to know what
   the offset should read approximately, so that a gross error — the fixture displaced, a bush damaged,
   the wrong register — is immediately obvious rather than being discovered on the first part. A ±5 mm
   sanity check costs one line on the drawing.
   The fifth is a **written re-establishment procedure** covering the specific cases: refit, collision,
   control fault, locator replacement. These genuinely differ. After a pallet change you re-probe the
   reference and nothing else. After a collision on one face you re-probe the reference *and* spot-check
   the affected stations against nominal, because the tombstone may have deflected locally. After a
   control battery failure the machine must be re-homed by a service engineer before any offset means
   anything, and then everything is re-established. Someone at eleven at night should not have to work
   out which case they are in.
   And the sixth, which is the one that makes the others actually get used, is that **the recovery must
   be quick**. If re-establishing the offsets takes two minutes, it gets done properly. If it takes forty
   minutes, someone will make a judgement call about whether it is really necessary, and sooner or later
   that judgement will be wrong. Designing a single probed reference with nominal station offsets — the
   L1.2.2 Method B scheme — is what makes a twelve-station fixture recoverable in two minutes rather than
   twenty. That is a design decision made months earlier, and it determines what happens on the bad
   night.

### 29. Summary
A work coordinate system is a set of numbers in the control asserting where the part's origin is, and
the machine has no independent knowledge of whether a part is there or where its features lie; the
fixture is the only thing that makes the assertion true, for every part, every time — a work coordinate
system is a claim and the fixture is the evidence. Realising it requires two distinct kinds of feature:
the locators that fix the part's position, and separate accessible setting features that let the offset
be established, because locators are generally covered by the part and cannot be probed. Those setting
features — a hardened datum bush for X and Y, a hardened ground setting block for Z, and a long ground
alignment edge for orientation — must be hardened, protected from chips and the cutting zone, reachable
by a probe as physically verified rather than assumed, and usable without a part loaded so that offsets
can be recovered after a crash. The dimension that matters most and is most often left uncontrolled is
the position of the setting features relative to the locators: it transfers one-to-one into every part,
it dominated the error budget in the worked example at 62.6% of the realisation error, and it should be
dimensioned from the locators, controlled to the same datums, and machined in the same setup. Orientation
is the error nobody measures, since three offsets are set and squareness is assumed; its effect grows
with distance from the origin and shrinks with alignment feature length, so the feature should be made as
long as the fixture allows from the outset. Finally, the setting method's own uncertainty is a real
budget term — a probe at ±0.005 mm against an edge finder at ±0.015 mm is a fixture design decision, not
an operator one — and the whole scheme must be documented with expected values, an offset table and a
re-establishment procedure.

### 30. Key takeaways
- **A WCS is a claim; the fixture is the evidence.**
- **Locators and setting features are different features.** Locators are under the part.
- **The setting feature's position relative to the locators is a critical dimension** — 62.6% of the
  error budget in the worked example.
- **Dimension setting features from the locators**, control both to the same datums, machine them in the
  **same setup**.
- **Any feature that determines where the part ends up is critical, whether or not it touches the part.**
- **Orientation is the error nobody measures.** e = D·δ/L — make L long from the outset.
- **Halving the orientation error requires doubling the alignment length.**
- **The setting method's uncertainty is a budget term.** Probe ±0.005; edge finder ±0.015; touch-off
  ±0.03 `[GUIDE]`.
- **Providing a probeable bush is a design decision that halves uncertainty and takes a tenth of the
  time.**
- **If it cannot be set without a part loaded, it cannot be recovered after a crash.**
- **Document expected values** — a ±5 mm sanity check catches the crashes.
- **Reserve G54–G59**; put production stations in a contiguous extended block.
- **Cheap verification is verification that happens.**

---

# MODULE 1.2 — CLOSING

## What each lesson established

| Lesson | Core establishment |
|---|---|
| **L1.2.1** | Machine zero never moves; **MACHINE = OFFSET + WORK**; travel checks are MCS calculations; a bolted-only fixture does not return to the same place on refit |
| **L1.2.2** | A work offset is the machine coordinate of the work origin; **a common-mode error cancels in relative measurements**; nominal offsets push fixture manufacturing error into the part; the offset table is a design deliverable |
| **L1.2.3** | **The programmed path is not the swept path**; the setting block's height goes 1:1 into every part; **size error → tool, position error → fixture** |
| **L1.2.4** | **A WCS is a claim; the fixture is the evidence**; the setting-feature-to-locator dimension dominates the error budget; orientation is the error nobody measures |

## The single thread

Each lesson added one layer to the same chain, and each layer introduced a fixture feature that must be
designed:

```
  MACHINE COORDINATE SYSTEM  ── requires ──► locating keys
    (L1.2.1)                                  to the table
            │
            ▼
  WORK COORDINATE SYSTEM     ── requires ──► a probeable
    (L1.2.2)                                  reference datum
            │                                 + an offset table
            ▼
  TOOL COORDINATE SYSTEM     ── requires ──► a hardened
    (L1.2.3)                                  setting block
            │                                 + swept clearance
            ▼
  THE PART ITSELF            ── requires ──► locators, plus
    (L1.2.4)                                  setting features
                                              positioned to them

  ┌────────────────────────────────────────────────────┐
  │ EVERY LAYER OF THE COORDINATE CHAIN LANDS ON A     │
  │ PHYSICAL FEATURE THAT THE FIXTURE DESIGNER MUST    │
  │ SPECIFY, TOLERANCE, HARDEN AND DOCUMENT.           │
  │                                                    │
  │ THAT IS WHY A FIXTURE COURSE TEACHES COORDINATE    │
  │ SYSTEMS.                                           │
  └────────────────────────────────────────────────────┘
```

## The recurring diagnostic structure

Three discriminations were introduced, and together they resolve most dimensional problems in
production:

```
  1. CONSISTENT or VARYING?
     Same amount, same direction on every part
       → OFFSET, FIXTURE POSITION, or a SETTING FEATURE
     Varying amounts, no pattern
       → CLAMPING, CHIPS, MACHINE REPEATABILITY

  2. SIZE or POSITION?
     Wrong size, right place
       → TOOL RADIUS, WEAR OFFSET, DEFLECTION
     Right size, wrong place
       → WORK OFFSET, FIXTURE, LOCATOR

  3. ALL TOOLS/STATIONS or ONE?
     All
       → THE SHARED REFERENCE (setting block, common
         offset, fixture position)
     One
       → THAT TOOL'S OFFSET, or THAT STATION

  ASK THESE THREE QUESTIONS IN ORDER. THEY REDUCE
  THE SEARCH SPACE BY ROUGHLY EIGHT TIMES BEFORE
  ANYTHING IS MEASURED.
```

## Governing principles established in Module 1.2

These continue the numbered series from Module 1.1 (principles 28–39).

| # | Principle |
|---|---|
| **40** | **Machine zero never moves.** Everything else is measured from it, and its repeatability underpins every other number on the machine. |
| **41** | **MACHINE POSITION = WORK OFFSET + WORK POSITION.** Rearranged, the offset is the machine position of the work origin — which is exactly what a setter establishes. |
| **42** | **Travel checks are machine-coordinate calculations.** Work coordinates cannot detect an overtravel. |
| **43** | **A bolted-only fixture does not return to the same place.** Fitting a positive location for the fixture is the same principle as fitting a positive stop for the part. |
| **44** | **A common-mode error cancels in a relative measurement and not in an absolute one.** Ask which relationship the drawing controls before choosing a method. |
| **45** | **Nominal offsets push the fixture's manufacturing accuracy directly into the part.** The offset method is a consequence of how well the fixture was made. |
| **46** | **A manufacturing decision taken months earlier determines the daily operating method.** Machining all tombstone faces in one setup is what makes two-minute re-qualification possible. |
| **47** | **The programmed path is not the swept path.** Check clearance against tool radius and holder diameter at every height. |
| **48** | **Any feature that determines where the part ends up is a critical feature, whether or not it touches the part.** Setting blocks and datum bushes fail silently for exactly this reason. |
| **49** | **Size error points at the tool; position error points at the fixture or the offset.** Make that discrimination before accepting responsibility. |
| **50** | **A wear offset that must be adjusted frequently is a symptom, not a solution.** The adjustment is not the problem; the need for it is. |
| **51** | **A work coordinate system is a claim; the fixture is the evidence.** |
| **52** | **Orientation is the error nobody measures.** Three offsets are set and squareness is assumed; the error grows with distance and shrinks with alignment length. |
| **53** | **If it cannot be set without a part loaded, it cannot be recovered after a crash.** |
| **54** | **Cheap verification is verification that actually happens.** A two-minute check gets done; a twenty-minute one gets postponed. |

## Module 1.2 numerical results

| Result | Value | Lesson |
|---|---|---|
| Work X usable range, example fixture | −284.700 to +615.300 mm | L1.2.1 |
| Y headroom vs X headroom | 120.700 vs 379.300 mm | L1.2.1 |
| Refit error effect | 0.350 mm on every feature = **3.5× a ±0.10 tolerance** | L1.2.1 |
| Relationship error, measured offsets (worst case) | 0.032 mm | L1.2.2 |
| Relationship error, nominal offsets | **0.030 mm — better** | L1.2.2 |
| Absolute error, measured vs nominal | 0.016 vs 0.046 mm | L1.2.2 |
| Qualification time, 12 stations | 18.0 vs 2.0 min = **9.0×** | L1.2.2 |
| Max station tolerance justifying nominal offsets | ±0.020 mm (actual ±0.015 = 75%) | L1.2.2 |
| Setting block wear, mild steel, 8 months | −0.082 mm = **82% of the depth tolerance** | L1.2.3 |
| Ø100 face mill clearance, 62 mm path | **12.000 mm** — fails the 15 mm minimum | L1.2.3 |
| Holder governed clearance on | **2 of 3 tools** | L1.2.3 |
| Slot error from a 0.060 mm radius error | 0.120 mm = **2.4× the tolerance** | L1.2.3 |
| Orientation angle, 0.012 over 260 mm | 4.615×10⁻⁵ rad = **9.52 arc-sec** | L1.2.4 |
| Orientation error at 145 mm | 0.0067 mm | L1.2.4 |
| Total WCS realisation error | **0.0447 mm** | L1.2.4 |
| — bush-to-locator share | **62.6%** | L1.2.4 |
| — probe share | 22.4% | L1.2.4 |
| — orientation share | 15.0% | L1.2.4 |
| Total tolerance utilisation | 68.9%, **31.1% remaining** | L1.2.4 |
| Alignment length to halve orientation error | 260 → **520 mm** | L1.2.4 |

## Formulae added in Module 1.2

```
Machine position = Common + Work offset + Local + Programmed
Work offset      = Machine position − Work position
Work_max         = Travel_max − Offset_MCS

E_rel (measured) = u₁ + u₂        RSS: √(u₁² + u₂²)
E_rel (nominal)  = t_fixture
E_abs (nominal)  = u_reference + t_fixture

ΔZ_part          = ΔH_block                      (1:1)
Δ(slot / bore)   = 2 × Δr                        (2:1)
Clearance        = d_path − D/2   (tool AND holder)
L_gauge          = L_holder + L_projection

θ                = δ / L
e                = D · θ = D · δ / L
L_required       = D · δ / e_target
E_WCS            = E_bush-to-locator + U_probe + e
U_method         ≤ 0.10 × T_part     [GUIDE target]
```

## Self-check — 15 questions

Answer without looking back. Eleven or more correct means Module 1.2 is secure.

1. State the relationship between machine position, work offset and work position.
2. Why is homing precise, given that the home switch is only accurate to about a millimetre?
3. Why must a travel check be done in machine coordinates rather than work coordinates?
4. A fixture is refitted 0.35 mm out and the offset is not re-set. What is the error on the parts, and
   what is its signature?
5. How many standard work offsets are there, and what is used beyond them?
6. Explain why nominal offsets can give a *better* station-to-station result than measuring every
   station.
7. What condition must hold for the common-offset cancellation argument to be valid?
8. What determines whether a nominal offset scheme is legitimate?
9. A Ø80 face mill follows a path 30 mm from a clamp. What is the clearance?
10. A tool setting block is 0.05 mm low. What happens to the part depths, and by how much?
11. A feature is the right size but in the wrong place. Where do you look?
12. Why does a fixture need a datum bush when it already has locating pins?
13. Which dimension dominated the WCS realisation error in the worked example, and what share?
14. Give the formula for positional error caused by an orientation misalignment.
15. Why must the offset be establishable without a part loaded?

---

# END OF LEVEL 1 — PART 1

## What Part 1 covered

| Module | Lessons | Content |
|---|---|---|
| **1.1** | L1.1.1 – L1.1.4 | CNC machine architecture; the 3-axis VMC in depth; 4-axis and 5-axis machines; the horizontal machining centre and the tombstone |
| **1.2** | L1.2.1 – L1.2.4 | The machine coordinate system; work coordinate systems and offsets; the tool coordinate system; how the fixture physically realises the WCS |

**8 lessons · 240 sections · 24 exercises · governing principles 28–54**

## The argument of Part 1 in one page

Part 1 answered two questions, and they turn out to be the same question asked twice.

**Module 1.1 asked: what does the machine do to the part, and what does that require of the fixture?**
The answer developed through four machine types. The fixture sits inside the structural loop, so its
compliance adds directly to the machine's and the softest element dominates. On a VMC gravity seats the
part and chips fall onto it. When the part rotates, gravity does not, so a clamp sized for one
orientation is undersized for another, and inertia binds before mass does. On an HMC chips fall away —
which is the reason the machine exists — but so does the part, so gravity acts parallel to the locating
face and a support ledge becomes mandatory even though the force calculation barely justifies it.

**Module 1.2 asked: how does the machine know where the part is?** The answer is that it does not. It
knows axis positions relative to a machine zero that never moves, and a stored offset that asserts where
the work origin lies. Everything connecting those numbers to a physical component is arranged by people,
and the physical half of that arrangement is the fixture.

Put together:

```
  ┌────────────────────────────────────────────────────┐
  │ MODULE 1.1: THE FIXTURE MUST WITHSTAND WHAT THE    │
  │ MACHINE DOES TO THE PART.                          │
  │                                                    │
  │ MODULE 1.2: THE FIXTURE MUST PUT THE PART WHERE    │
  │ THE MACHINE BELIEVES IT IS.                        │
  │                                                    │
  │ NEITHER IS OPTIONAL AND THEY CONSTRAIN EACH OTHER: │
  │ the clamp that holds the part securely is the same │
  │ clamp that the Ø100 face mill must clear, and the  │
  │ datum bush that must be accessible to a probe is   │
  │ the same bush that must be clear of the chip       │
  │ stream.                                            │
  └────────────────────────────────────────────────────┘
```

## Keystone results to carry forward

| # | Result | Where |
|---|---|---|
| 1 | A fixture in series with the machine at 17,647 N/mm carried **71% of the deflection**; the required fixture stiffness came out **negative** — an impossible fixture, therefore an operation problem | L1.1.1 |
| 2 | Small raised relieved pads beat a full ground face by **40.7×** on chip exposure; friction alone was **15.9× short** of the horizontal force | L1.1.2 |
| 3 | On a rotary axis, clamp force at **90° governs** (7,860 N vs 7,083 N); inertia is **28.7% of the mass term** at 200 mm and **86% at 320 mm**; positive stops collapsed 7,860 N to 1,427 N — **5.5×** | L1.1.3 |
| 4 | The HMC support ledge reduced clamp force by only **3.2%** — and is mandatory anyway, because it is a failure-mode feature, not a force feature | L1.1.4 |
| 5 | Tombstone utilisation rose **80.70% → 99.28%**, a factor of **1.230**, worth **+9,694 parts/year**; deflection at the top station was **17.6× (= 2.6³)** that at the bottom | L1.1.4 |
| 6 | An unlocated refit of 0.35 mm produced a **consistent** error 3.5× the tolerance on every part | L1.2.1 |
| 7 | Nominal offsets beat measured offsets on the **relative** requirement (0.030 vs 0.032 mm) and lost on the absolute one (0.046 vs 0.016 mm), while being **9× faster** | L1.2.2 |
| 8 | A mild steel setting block wore **0.082 mm in eight months** — 82% of the depth tolerance, transferred 1:1 into every part | L1.2.3 |
| 9 | A Ø100 face mill turned **62 mm of apparent clearance into 12 mm** of real clearance; the holder governed on 2 of 3 tools | L1.2.3 |
| 10 | The **bush-to-locator dimension was 62.6%** of the whole WCS realisation error — more than the probe and orientation combined | L1.2.4 |

## The six auto-fail errors introduced in Part 1

Adding to the Level 0 list. Any of these in an assessment answer is an automatic fail regardless of the
rest of the work.

1. **Sizing a clamp for one orientation on a rotary axis** without checking the others.
2. **Omitting a support ledge on an HMC fixture** on the grounds that friction is sufficient.
3. **Checking tool clearance against the programmed path** rather than the swept envelope.
4. **Leaving the setting-feature-to-locator dimension uncontrolled** on a fixture drawing.
5. **Specifying an unhardened surface** that a tool touches or that defines a part dimension.
6. **Designing a fixture whose offsets cannot be established without a part loaded.**

## Reference data established in Part 1

| Quantity | Value | Tag |
|---|---|---|
| Thermal drift, typical | 0.02–0.10 mm per shift | `[GUIDE]` |
| VMC axial force Fz | 0.2–0.4 × tangential | `[GUIDE]` |
| VMC radial force | 0.3–0.6 × tangential | `[GUIDE]` |
| Rotary unit Z cost | 150–250 mm | `[GUIDE]` |
| Pallet repeatability | ~0.005 mm | `[MFR]` |
| Minimum tool/holder clearance | 15 mm | `[PRACTICE]` |
| Spindle probe uncertainty | ±0.003–0.008 mm | `[GUIDE]` |
| Edge finder uncertainty | ±0.010–0.020 mm | `[GUIDE]` |
| DTI on a boss | ±0.005–0.010 mm | `[GUIDE]` |
| Touch-off on a part | ±0.02–0.05 mm | `[GUIDE]` |
| Setting method target | ≤10% of the part tolerance | `[GUIDE]` |
| Hardened setting features | 58–62 HRC | `[PRACTICE]` |
| ISO 841 rotary axes | A about X, B about Y, C about Z | `[STD]` |

## What Part 2 will cover

**LEVEL 1 ► PART 2 — MODULE 1.3: MACHINING OPERATIONS AND THEIR FIXTURE DEMANDS (6 lessons)**

| Lesson | Topic |
|---|---|
| L1.3.1 | Milling — face, end, slot, contour, and the direction of cutting forces |
| L1.3.2 | Drilling — thrust, torque, breakthrough, and why drilling fixtures fail differently |
| L1.3.3 | Boring and reaming — why these operations need support, not just restraint |
| L1.3.4 | Tapping — reversal loads, and the fixture consequence of a bidirectional torque |
| L1.3.5 | Roughing versus finishing — two different fixture problems in one setup |
| L1.3.6 | Multi-operation sequencing — datum shift, re-clamping, and the accumulating stack |

Plus the **Level 1 assessment**: 40 questions, grade bands as established, with the critical-error
auto-fail list extended by the six errors above.

**Module 1.3 is where the force directions from Module 1.1 meet the real operations.** Module 1.1
established that a fixture sits in the structural loop and must resist what the machine does; Module 1.3
determines *what*, specifically, each operation does — because a drill's thrust, a tap's reversal and a
face mill's side load make entirely different demands on the same fixture.

---

*End of Level 1, Part 1. Reply **NEXT** to continue with Part 2.*
