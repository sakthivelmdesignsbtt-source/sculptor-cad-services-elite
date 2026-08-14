# MASTER INDUSTRIAL FIXTURE DESIGN ENGINEERING
## From Scratch to Production-Ready Professional

# LEVEL 3 — FIXTURE CLASSIFICATION
## PART 2 OF 2 — MODULES 3.2 AND 3.3, AND THE LEVEL 3 ASSESSMENT

---

## WHERE YOU ARE

```
   LEVEL 3  FIXTURE CLASSIFICATION
     Module 3.1  by process              ✔ Part 1
     Module 3.2  by actuation and
                 flexibility             ◄ PART 2
     Module 3.3  by automation level     ◄ PART 2
     Level 3 assessment                  ◄ PART 2
```

## THE THREE AXES, RESTATED

Part 1 established that a fixture is not one type but **a point in a three-dimensional classification
space**. Module 3.1 gave you the first axis. Part 2 gives you the other two, and then a method for
navigating all three at once.

```
   AXIS 1 — PROCESS                    ✔ Module 3.1
     machining · joining · tube ·
     verification · correction

   AXIS 2 — ACTUATION AND FLEXIBILITY  ◄ Module 3.2
     HOW is force applied?
       manual · pneumatic · hydraulic ·
       electro-mechanical · vacuum · magnetic
     HOW DEDICATED is it?
       dedicated · modular · flexible ·
       reconfigurable
     HOW MANY PARTS AND HOW MANY AXES?
       single · multi · tombstone · rotary ·
       4th-axis · 5-axis · palletised

   AXIS 3 — AUTOMATION LEVEL           ◄ Module 3.3
     WHO LOADS IT?
       operator · semi-automatic ·
       automatic · robot
     HOW IS CORRECT LOADING VERIFIED?
       Poka-Yoke · sensors

   ┌──────────────────────────────────────────────┐
   │ AND THEN: THE FIXTURE SELECTION DECISION     │
   │ TREE — ONE ROUTE FROM PART + PROCESS +       │
   │ VOLUME TO A FIXTURE FAMILY, WITH FIFTEEN     │
   │ SCENARIOS TO PRACTISE ON.                    │
   │                                              │
   │ THAT TREE IS THE DELIVERABLE OF LEVEL 3.     │
   │ EVERYTHING BEFORE IT IS VOCABULARY; THE TREE │
   │ IS WHAT TURNS VOCABULARY INTO A DECISION.    │
   └──────────────────────────────────────────────┘
```

## WHAT PART 2 COVERS

| Lesson | Title |
|---|---|
| **L3.2.1** | Manual, pneumatic, hydraulic, electro-mechanical, vacuum, magnetic |
| **L3.2.2** | Dedicated vs modular vs flexible vs reconfigurable; zero-point and quick-change |
| **L3.2.3** | Single-component, multi-component, tombstone, rotary, 4th-axis, 5-axis, palletised |
| **L3.3.1** | Operator-loaded, semi-automatic, automatic, robot-loaded |
| **L3.3.2** | Poka-Yoke fixtures and sensor-verified fixtures |
| **L3.3.3** | **The Fixture Selection Decision Tree** — plus fifteen scenarios |

**Then:** Level 3 assessment — Quiz Q3 (40 items, classification matching) and the decision-tree
assignment.

## WHAT YOU ALREADY KNOW THAT PART 2 USES

| From | What it gives you here |
|---|---|
| **L2.2.4** | Stored energy, hierarchy of control — the safety spine of the actuation lesson |
| **L2.2.5** | Cycle time by element — the productivity case for powered clamping |
| **L2.2.6** | The hierarchy of gates — the structure of the decision tree itself |
| **L2.1.3** | Break-even against a cheaper option — dedicated vs modular |
| **L2.1.5** | The capacity check — which decides palletisation |
| **L1.1.4** | Tombstone utilisation 80.70 → 99.28% — the multi-part economics |
| **L3.1.1** | Sub-class by governing consideration — feeds the tree's first branch |

---

# MODULE 3.2 — CLASSIFICATION BY ACTUATION AND FLEXIBILITY

**Prerequisite:** Module 3.1. **Lessons:** 3. **Estimated time:** 2.5 h.

**The organising question:**

> **How is the holding force produced, how dedicated is the fixture to one part, and how many parts and
> orientations does it serve at once?**

```
   ┌──────────────────────────────────────────────┐
   │ THESE THREE QUESTIONS ARE OFTEN ANSWERED BY  │
   │ HABIT RATHER THAN BY ANALYSIS.               │
   │                                              │
   │ "We always use toggle clamps." "We always    │
   │ build dedicated." "One part per fixture."    │
   │                                              │
   │ EACH HABIT IS RIGHT SOMETIMES AND EXPENSIVE  │
   │ THE REST OF THE TIME, AND THE CONDITIONS     │
   │ THAT DECIDE ARE KNOWABLE IN ADVANCE.         │
   └──────────────────────────────────────────────┘
```

---

## LESSON L3.2.1 — CLASSIFICATION BY ACTUATION

### 1. Lesson title
**L3.2.1 — Manual, pneumatic, hydraulic, electro-mechanical, vacuum and magnetic actuation**

### 2. Learning objective
By the end of this lesson you will be able to state the force capability, speed, cost and failure
behaviour of each actuation method, calculate the force a pneumatic or hydraulic cylinder delivers,
explain why vacuum and magnetic holding obey completely different rules from mechanical clamping,
identify which methods fail safe and which fail dangerous, and select an actuation method from the part,
the force required and the cycle time available.

### 3. Prerequisites
L2.2.1 (clamping as a duty), L2.2.4 (stored energy, hierarchy of control, spring-applied clamping),
L2.2.5 (cycle time by element), L3.1.1 (grinding and magnetic chucks).

### 4. Why the topic matters
**Actuation is the decision that most directly connects the fixture to cycle time, to cost, and to
safety** — and it is the one most often made by habit.

```
   THE SAME FIXTURE, FOUR ACTUATION CHOICES

   MANUAL TOGGLE CLAMPS
     cheap · slow · force varies with the
     operator · fails in place

   PNEUMATIC
     fast · moderate force · cheap air ·
     compressible, so it is springy

   HYDRAULIC
     very high force · compact · expensive ·
     STORED ENERGY (L2.2.4: 37,019 J)

   ELECTRO-MECHANICAL
     controllable · programmable force ·
     expensive · holds without power if
     self-locking

   ┌──────────────────────────────────────────────┐
   │ THE CHOICE IS NOT MAINLY ABOUT FORCE.        │
   │                                              │
   │ ALL FOUR CAN USUALLY BE MADE TO DELIVER THE  │
   │ FORCE. THE CHOICE IS ABOUT CYCLE TIME,       │
   │ CONSISTENCY, FAILURE BEHAVIOUR AND COST.     │
   └──────────────────────────────────────────────┘
```

Recall from L2.2.5 that clamping and unclamping were **48 of 228 seconds** in the measured cycle — 21% —
and that powered clamping took them from 42 s to 10 s. **Actuation is where the productivity is.**

### 5. Simple explanation

```
   THE SIX METHODS, BY WHAT THEY ARE GOOD AT

   MANUAL          cheapest, simplest, slowest
                   → low volume, prototypes,
                     large fixtures with few
                     clamps

   PNEUMATIC       fast, cheap infrastructure
                   → moderate forces, high cycle
                     rates, simple on/off

   HYDRAULIC       very high force in a small
                   space
                   → heavy cutting, many clamps
                     from one power source

   ELECTRO-        controllable and measurable
   MECHANICAL      → where clamp force must be
                     programmed or verified

   VACUUM          holds flat, thin, non-
                   ferrous things
                   → sheet, plate, composites,
                     aluminium panels

   MAGNETIC        holds ferrous things with no
                   projections
                   → grinding, thin steel plate

   ┌──────────────────────────────────────────────┐
   │ VACUUM AND MAGNETIC ARE THE TWO THAT SOLVE   │
   │ THE PROBLEM MECHANICAL CLAMPING CANNOT:      │
   │ HOLDING SOMETHING WITHOUT ANYTHING STICKING  │
   │ UP ABOVE IT.                                 │
   └──────────────────────────────────────────────┘
```

### 6. Engineering explanation

**THE COMPARISON TABLE**

`[PRACTICE]` The reference for this lesson:

| Method | Force capability | Speed | Consistency | Failure behaviour | Cost |
|---|---|---|---|---|---|
| **Manual — toggle** | Low–moderate | Slow | **Varies with the operator** | Fails in place | Lowest |
| **Manual — screw** | Moderate–high | Slowest | Varies; torque wrench improves it | Fails in place | Low |
| **Manual — cam** | Moderate | Fast per clamp | Fixed by geometry — **more consistent than a screw** | Fails in place | Low |
| **Pneumatic** | Moderate | **Fastest** | Good, set by regulator | **Springy; loses force on air failure** | Low–moderate |
| **Hydraulic** | **Highest** | Fast | Very good | **Stored energy hazard** | High |
| **Electro-mechanical** | Moderate–high | Moderate | **Best — measurable and programmable** | Holds if self-locking | Highest |
| **Vacuum** | Low per unit area, high in total | Fast | Good if sealing is good | **Fails released on power/air loss** | Moderate |
| **Magnetic — permanent** | Moderate–high | Fast | Very good | **Holds without power** | Moderate |
| **Magnetic — electro** | High | Fast | Very good | **Fails released** unless electro-permanent | High |
| **Magnetic — electro-permanent** | High | Fast | Very good | **Holds without power** | Highest |

```
   ┌──────────────────────────────────────────────┐
   │ READ THE "FAILURE BEHAVIOUR" COLUMN FIRST.   │
   │                                              │
   │ IT IS THE ONLY COLUMN THAT CAN INJURE        │
   │ SOMEBODY, AND IT IS THE ONE MOST OFTEN READ  │
   │ LAST.                                        │
   │                                              │
   │ L2.2.4: a 31 kg part at 8,000 rev/min forced │
   │ SPRING-APPLIED, PRESSURE-RELEASED CLAMPING,  │
   │ SO THAT LOSS OF POWER IS A SAFE STATE.       │
   └──────────────────────────────────────────────┘
```

**FLUID POWER — THE GOVERNING ARITHMETIC**

```
   FORCE FROM A CYLINDER

     F = p × A

   EXTENDING (full bore)
     A = π D²/4

   RETRACTING (annulus — the rod takes up area)
     A = π (D² − d²)/4

   ┌──────────────────────────────────────────────┐
   │ THE RETRACT FORCE IS ALWAYS LESS THAN THE    │
   │ EXTEND FORCE, AND ON A LARGE-ROD CYLINDER IT │
   │ CAN BE MUCH LESS.                            │
   │                                              │
   │ IF THE CLAMPING STROKE IS THE RETRACT        │
   │ STROKE — WHICH IS COMMON, BECAUSE PULLING    │
   │ DOWN IS OFTEN THE NATURAL GEOMETRY — SIZE ON │
   │ THE ANNULUS AREA, NOT THE BORE.              │
   │                                              │
   │ THIS IS A ROUTINE AND EXPENSIVE ERROR.       │
   └──────────────────────────────────────────────┘

   TYPICAL WORKING PRESSURES                [PRACTICE]
     Pneumatic   4-7 bar shop air; the ACTUAL
                 regulated pressure at the fixture
                 must be measured, not assumed
     Hydraulic   commonly up to 350 bar for
                 workholding; THE COMPONENT
                 MANUFACTURER'S RATING GOVERNS [MFR]

   THE PRESSURE RATIO
     350 bar / 6 bar = 58.3×

   ┌──────────────────────────────────────────────┐
   │ FOR THE SAME CYLINDER BORE, HYDRAULIC        │
   │ DELIVERS ROUGHLY FIFTY-EIGHT TIMES THE FORCE │
   │ OF SHOP AIR.                                 │
   │                                              │
   │ EQUIVALENTLY: TO MATCH A GIVEN HYDRAULIC     │
   │ FORCE, A PNEUMATIC CYLINDER NEEDS √58.3 =    │
   │ 7.64× THE BORE DIAMETER.                     │
   │                                              │
   │ THAT IS WHY HYDRAULIC WINS WHENEVER SPACE IS │
   │ TIGHT, AND IT IS USUALLY TIGHT.              │
   └──────────────────────────────────────────────┘
```

**WHY PNEUMATIC IS SPRINGY AND WHY IT MATTERS**

```
   AIR IS COMPRESSIBLE. OIL IS ESSENTIALLY NOT.

   [GUIDE] The bulk modulus of hydraulic oil is
   of the order of 1.5-2 GPa, so at working
   pressures the volume change is small. Air at
   6 bar compresses substantially under load.

   CONSEQUENCE
     A pneumatic clamp under a rising cutting
     force GIVES. The clamp acts like a stiff
     spring, not like a rigid support.

   ┌──────────────────────────────────────────────┐
   │ RECALL PRINCIPLE 105: RIGIDITY IS A SYSTEM   │
   │ PROPERTY AND THE SOFTEST ELEMENT GOVERNS.    │
   │                                              │
   │ A PNEUMATIC CLAMP CAN BE THE SOFTEST ELEMENT │
   │ IN THE LOOP — AND IT IS RARELY THE ONE       │
   │ ANYBODY CALCULATES.                          │
   │                                              │
   │ THE STANDARD FIX: A MECHANICAL LOCK, OR AN   │
   │ AIR-OVER-OIL INTENSIFIER, OR ACCEPT IT AND   │
   │ DESIGN THE STIFFNESS ELSEWHERE.              │
   └──────────────────────────────────────────────┘
```

**VACUUM — THE COMPLETELY DIFFERENT RULE SET**

```
   VACUUM DOES NOT "SUCK". ATMOSPHERIC PRESSURE
   PUSHES.

     F = Δp × A_sealed

   THE ABSOLUTE CEILING
     Atmospheric pressure is about 101.3 kPa at
     sea level. [STD] The standard atmosphere is
     defined in ISO 2533.

     A PERFECT VACUUM THEREFORE GIVES ABOUT
     101.3 kPa = 10.13 N/cm².

   ┌──────────────────────────────────────────────┐
   │ THERE IS AN ABSOLUTE UPPER LIMIT TO VACUUM   │
   │ HOLDING, AND IT IS SET BY THE WEATHER.       │
   │                                              │
   │ NO PUMP, NO MONEY AND NO INGENUITY GETS PAST │
   │ IT. THIS IS UNIQUE AMONG THE ACTUATION       │
   │ METHODS.                                     │
   │                                              │
   │ AND YOU NEVER ACHIEVE IT: A PRACTICAL SYSTEM │
   │ REACHES A FRACTION OF FULL VACUUM, AND THE   │
   │ ACHIEVABLE LEVEL MUST BE TAKEN FROM THE PUMP │
   │ AND SEAL MANUFACTURER. [MFR]                 │
   └──────────────────────────────────────────────┘

   WHAT VACUUM IS GOOD AT
     ✔ flat, thin, large parts
     ✔ non-ferrous — aluminium, composites
     ✔ NOTHING PROJECTS ABOVE THE SURFACE
     ✔ distributed holding, so no local distortion

   WHAT DEFEATS IT
     ✗ porous materials — cast iron can leak
       through its own structure
     ✗ rough or wavy surfaces that will not seal
     ✗ through holes in the sealed area
     ✗ SIDE LOADS — vacuum holds DOWN, and
       resists sideways motion only by FRICTION

   ┌──────────────────────────────────────────────┐
   │ THE SIDE LOAD LIMITATION IS THE ONE THAT     │
   │ CATCHES PEOPLE.                              │
   │                                              │
   │ A VACUUM CHUCK HOLDING WITH 4,000 N AND      │
   │ μ = 0.2 RESISTS ONLY 800 N SIDEWAYS.         │
   │                                              │
   │ FIT A POSITIVE STOP. That instruction from   │
   │ Level 0 applies with particular force here,  │
   │ because vacuum makes friction-only holding   │
   │ look deceptively strong.                     │
   └──────────────────────────────────────────────┘
```

**MAGNETIC — THE OTHER DIFFERENT RULE SET**

```
   REQUIREMENTS AND LIMITS

   ✔ the part must be FERROMAGNETIC
     → not aluminium, not brass, not austenitic
       stainless

   ✔ holding force depends on CONTACT AREA and
     AIR GAP
     → force falls off very rapidly with gap
     → a burr, a chip or paint under the part
       costs holding force
     [MFR] The force-versus-gap relationship is
     published by the chuck manufacturer and must
     be obtained; it is strongly non-linear.

   ✔ the part must be THICK ENOUGH to carry the
     flux
     → a very thin part saturates and holds
       poorly
     [MFR] minimum thickness per the manufacturer

   ✔ SIDE LOAD is resisted by FRICTION ONLY,
     exactly as with vacuum
     → fit a positive stop

   ✔ the part is MAGNETISED afterwards and MUST
     BE DEMAGNETISED
     → otherwise it collects swarf for the rest
       of its life (L3.1.1)

   THE THREE MAGNETIC TYPES
     PERMANENT           holds without power;
                         switched mechanically
     ELECTROMAGNETIC     needs continuous power;
                         FAILS RELEASED
     ELECTRO-PERMANENT   a pulse switches it;
                         HOLDS WITHOUT POWER

   ┌──────────────────────────────────────────────┐
   │ ELECTRO-PERMANENT IS THE ONE TO KNOW ABOUT.  │
   │                                              │
   │ IT COMBINES THE CONVENIENCE OF ELECTRICAL    │
   │ SWITCHING WITH THE FAILURE BEHAVIOUR OF A    │
   │ PERMANENT MAGNET — A POWER CUT DOES NOT      │
   │ RELEASE THE PART.                            │
   │                                              │
   │ IT IS THE SAME LOGIC AS SPRING-APPLIED,      │
   │ PRESSURE-RELEASED HYDRAULICS: MAKE LOSS OF   │
   │ POWER THE SAFE STATE.                        │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Toggle clamp** | An over-centre linkage clamp; force set by geometry and adjustment |
| **Cam clamp** | A rotating eccentric; fixed stroke, repeatable force |
| **Swing clamp** | A clamp that rotates clear of the part before retracting |
| **Full bore** | The cylinder's extend area, πD²/4 |
| **Annulus** | The cylinder's retract area, π(D²−d²)/4 |
| **Intensifier** | A device converting low-pressure air into high-pressure oil |
| **Air-over-oil** | A hybrid: air supply, oil at the clamp, giving stiffness |
| **Accumulator** | A hydraulic energy store — and a stored-energy hazard |
| **Sequence valve** | Ensures one clamp acts before another |
| **Vacuum chuck** | A plate with sealed zones held by atmospheric pressure |
| **Vacuum pod** | An individual sealed holding element |
| **Venturi generator** | Produces vacuum from compressed air, no pump |
| **Air gap** | The separation between a magnet and the part; force falls rapidly with it |
| **Electro-permanent** | Magnetically switched by a pulse; holds without power |
| **Demagnetising** | Removing residual magnetism after magnetic holding |
| **Self-locking** | A mechanism that holds position without continued input |

### 8. Principle

> **THE ACTUATION CHOICE IS NOT MAINLY ABOUT FORCE** — all methods can usually be made to deliver it. It
> is about cycle time, consistency, failure behaviour and cost.
> **READ THE FAILURE BEHAVIOUR COLUMN FIRST.** It is the only one that can injure somebody.
> **MAKE LOSS OF POWER THE SAFE STATE** — spring-applied and pressure-released, or electro-permanent.
> **SIZE A CYLINDER ON THE STROKE THAT CLAMPS.** If clamping is the retract stroke, use the annulus area.
> **AIR IS COMPRESSIBLE, SO A PNEUMATIC CLAMP IS A SPRING** — and may be the softest element in the loop.
> **VACUUM AND MAGNETIC HOLD DOWN AND RESIST SIDEWAYS ONLY BY FRICTION.** Fit a positive stop.
> **VACUUM HAS AN ABSOLUTE CEILING SET BY ATMOSPHERIC PRESSURE** — about 10.13 N/cm², and you never reach
> it.
> **MAGNETIC FORCE COLLAPSES WITH AIR GAP.** A chip under the part is a holding failure.

### 9. Industrial application

**Choosing between air and oil** `[PRACTICE]`

```
   THE HONEST DECISION RULE

   USE PNEUMATIC WHEN
     ✔ the force required is modest
     ✔ cycle rate is high
     ✔ shop air already exists
     ✔ stiffness is not critical
     ✔ budget is constrained

   USE HYDRAULIC WHEN
     ✔ the force required is large
     ✔ SPACE IS TIGHT — the 58.3× pressure ratio
     ✔ many clamps must act from one source
     ✔ stiffness matters
     ✔ clamp force must be held precisely

   USE AIR-OVER-OIL WHEN
     ✔ you want hydraulic stiffness and force
       without a hydraulic power unit
     ✔ the duty cycle is low enough for an
       intensifier to keep up

   ┌──────────────────────────────────────────────┐
   │ AND NOTE WHAT IS NOT ON THESE LISTS:         │
   │ "BECAUSE WE ALWAYS DO."                      │
   │                                              │
   │ A SHOP WITH A HYDRAULIC POWER UNIT ALREADY   │
   │ INSTALLED WILL PUT HYDRAULICS ON EVERYTHING, │
   │ INCLUDING JOBS THAT NEEDED 400 N.            │
   └──────────────────────────────────────────────┘
```

**The vacuum failure nobody predicted** `[EX-ASSUMED]`:

```
SITUATION
  An aluminium plate, 400 × 300 × 12 mm, was held
  on a vacuum chuck for face milling. It worked
  perfectly for months.

  A design change added four Ø20 mm through holes
  in the middle of the plate — drilled at a
  PREVIOUS operation.

WHAT HAPPENED
  The holes were inside the sealed vacuum area.
  Vacuum could not be maintained. The part lifted
  on the first cut.

WHY IT WAS NOT OBVIOUS
  The fixture drawing showed a sealed zone. The
  PART drawing changed. Nobody connected the two
  documents, because the fixture was working and
  nobody was looking at it.

THE FIX
  Re-zoned the chuck with the holes falling
  between sealed areas, and added a vacuum
  switch that inhibits the cycle below a
  threshold.

┌──────────────────────────────────────────────┐
│ THE VACUUM SWITCH IS THE PART WORTH TAKING   │
│ AWAY.                                        │
│                                              │
│ VACUUM AND MAGNETIC HOLDING ARE INVISIBLE.   │
│ A MECHANICAL CLAMP THAT HAS NOT CLOSED IS    │
│ VISIBLE FROM THREE METRES. A VACUUM THAT HAS │
│ NOT ESTABLISHED LOOKS EXACTLY LIKE ONE THAT  │
│ HAS.                                         │
│                                              │
│ SO THEY MUST BE SENSED, NOT ASSUMED — WHICH  │
│ IS L3.3.2's SUBJECT.                         │
└──────────────────────────────────────────────┘
```

### 10. Design rules
- **R1** — Select actuation on **cycle time, consistency, failure behaviour and cost** — not on force
  alone.
- **R2** — Determine the **failure behaviour** required before choosing the method.
- **R3** — Prefer arrangements where **loss of power is the safe state**.
- **R4** — Size a cylinder on the **stroke that clamps**; use the annulus area if that is the retract
  stroke.
- **R5** — Use the **measured regulated pressure** at the fixture, not the nominal shop pressure.
- **R6** — Treat a **pneumatic clamp as a spring** and check whether it is the softest element in the
  loop.
- **R7** — For hydraulics, apply the **L2.2.4 stored-energy discipline**: discharge to a safe state,
  document it.
- **R8** — For vacuum, calculate on the **actual sealed area** and the **achievable** vacuum level
  `[MFR]`, not the theoretical maximum.
- **R9** — For vacuum and magnetic, **fit a positive stop** — friction alone resists side load.
- **R10** — Check the part is **non-porous and sealable** before choosing vacuum.
- **R11** — For magnetic, verify the part is **ferromagnetic and thick enough** `[MFR]`, and plan
  **demagnetising**.
- **R12** — Obtain the magnetic **force-versus-air-gap curve** `[MFR]`; it is strongly non-linear.
- **R13** — **Sense vacuum and magnetic holding**; they fail invisibly.
- **R14** — Re-check the actuation scheme whenever the **part drawing changes**.

### 11. Rules of thumb
- **The actuation choice is about time, consistency, failure and cost — rarely about force.**
- **Read the failure behaviour column first.**
- **Make loss of power the safe state.**
- **Hydraulic gives ~58× the force of shop air for the same bore.**
- **To match hydraulic force pneumatically you need ~7.6× the bore diameter.**
- **Size on the clamping stroke — the annulus, if that is the one.**
- **A pneumatic clamp is a spring.**
- **Vacuum's ceiling is 10.13 N/cm² and you never reach it.**
- **Vacuum and magnets hold down; friction alone holds sideways. Fit a stop.**
- **Magnetic force collapses with air gap — a chip is a holding failure.**
- **A magnetically held part must be demagnetised.**
- **Vacuum and magnetic failures are invisible. Sense them.**

### 12. Formulae

**Cylinder force**
```
EXTEND    F = p × πD²/4
RETRACT   F = p × π(D² − d²)/4

where D = bore, d = rod diameter

[PRACTICE] Manufacturers publish force tables
that include seal friction and efficiency. USE
THEM FOR DESIGN [MFR]; these expressions give
the theoretical maximum.
```

**Pressure ratio between hydraulic and pneumatic**
```
Force ratio for equal bore = p_hyd / p_pneu
Bore ratio for equal force = √(p_hyd / p_pneu)

350 bar vs 6 bar:
  force ratio = 58.3×
  bore ratio  = 7.64×
```

**Vacuum holding**
```
F = Δp × A_sealed

Δp = atmospheric − achieved absolute pressure
Maximum possible Δp ≈ 101.3 kPa  [STD] ISO 2533
                    = 10.13 N/cm²

PRACTICAL Δp IS A FRACTION OF THIS AND MUST COME
FROM THE PUMP AND SEAL MANUFACTURER. [MFR]

SIDE LOAD CAPACITY = μ × F
```

**Magnetic holding**
```
F = f(contact area, air gap, part thickness,
      material)

[MFR] STRONGLY NON-LINEAR IN AIR GAP. THERE IS NO
GENERAL FORMULA SUITABLE FOR DESIGN. Obtain the
manufacturer's curve for the specific chuck and
the specific gap and thickness.

SIDE LOAD CAPACITY = μ × F, exactly as vacuum.
```

**Clamp force required — recalled**
```
F_required ≥ (F_cut × SF) / μ      friction only
F_required ≥ enough to seat only   with a stop

THE SECOND IS ALWAYS SMALLER. FIT A POSITIVE
STOP (Level 0; the 28× result).
```

| Variable | Meaning | Unit |
|---|---|---|
| p | Pressure | bar or N/mm² |
| D, d | Bore, rod diameter | mm |
| A_sealed | Effective sealed area | cm² |
| Δp | Pressure differential | kPa |
| μ | Friction coefficient | — |

### 13. Worked numerical example

**Problem:** A fixture requires 8,000 N of clamp force at each of four stations. Evaluate pneumatic,
hydraulic and vacuum options; determine the space each requires, the failure behaviour, and the
productivity effect; then select.

```
GIVEN:
  REQUIREMENT                                   [PROJ]
    Clamp force per station    = 8,000 N
    Stations                   = 4
    Total force                = 32,000 N
    Available space per clamp  = Ø80 mm envelope
    Part: aluminium plate 380 × 260 × 15 mm,
      flat, non-porous, no through holes in the
      clamping area
    Part mass                  = 4.1 kg
    Cutting side load (worst)  = 2,600 N total
    Friction, dry aluminium on steel = 0.20
                                            [GUIDE]

  SUPPLIES                                 [EX-ASSUMED]
    Shop air, measured at the fixture = 5.8 bar
      (NOT the 7 bar nominal — measured)
    Hydraulic power unit available    = 250 bar
    Vacuum: venturi generator, achievable
      Δp per the manufacturer          = 65 kPa
                                             [MFR]

  CYCLE DATA                                    [PROJ]
    Manual clamping, current  = 42 s per cycle
    Powered clamping          = 8 s per cycle
    Volume                    = 26,000/yr
    Rate                      = ₹1,800/h
    Machine utilisation       = 84 %

  COSTS                                    [EX-ASSUMED]
    Manual toggle clamps, 4      = ₹9,000
    Pneumatic, 4 + valves        = ₹64,000
    Hydraulic, 4 + manifold
      (HPU already exists)       = ₹138,000
    Vacuum chuck + generator     = ₹96,000

REQUIRED:
  (a) Cylinder bore required for pneumatic and
      for hydraulic, extending
  (b) Whether each fits the Ø80 mm envelope
  (c) Bore required if clamping is the RETRACT
      stroke, with a Ø20 mm rod
  (d) Vacuum: sealed area required, and whether
      it is available
  (e) Vacuum side-load capacity against the
      cutting load
  (f) Productivity value of powered clamping
  (g) Failure behaviour of each option
  (h) Selection and justification

ASSUMPTION:
  1. Theoretical cylinder force is used. REAL
     CYLINDERS DELIVER LESS DUE TO SEAL FRICTION;
     THE MANUFACTURER'S FORCE TABLE MUST BE USED
     FOR DESIGN. [MFR]
  2. Shop air pressure of 5.8 bar is MEASURED at
     the fixture, not the nominal 7 bar. This
     matters: sizing on nominal would undersize
     the cylinder by 17 %. [PROJ]
  3. Achievable vacuum Δp of 65 kPa is the
     manufacturer's figure for this generator and
     seal type. [MFR]
  4. μ = 0.20 dry. COOLANT WOULD HALVE IT
     (L1.3), and on a vacuum chuck coolant WILL
     reach the interface. This is addressed in
     the conclusion. [GUIDE]
  5. The part is stated as flat, non-porous and
     without through holes in the clamped area.
     IF ANY OF THESE CHANGES, THE VACUUM OPTION
     FAILS — as the case study in section 9
     showed. [PROJ]
  6. Machine utilisation of 84 % means freed
     capacity is largely usable, so u ≈ 1 is
     justified. [PROJ]

FORMULA:
  F = p × A
  A_extend = πD²/4
  A_retract = π(D² − d²)/4
  D = √(4F/(πp))
  F_vacuum = Δp × A
  Side load capacity = μF
  Saving = Δt × N × rate

UNIT CONVERSION:
  1 bar = 0.1 N/mm²
  5.8 bar = 0.58 N/mm²
  250 bar = 25.0 N/mm²
  65 kPa = 0.065 N/mm² = 6.5 N/cm²

SUBSTITUTION AND CALCULATION:

  (a) BORE REQUIRED, EXTENDING

      PNEUMATIC at 0.58 N/mm²
        A = F/p = 8,000/0.58
          = 13,793 mm²
        D = √(4 × 13,793/π)
          = √(17,562)
          = 132.5 mm

      HYDRAULIC at 25.0 N/mm²
        A = 8,000/25.0 = 320 mm²
        D = √(4 × 320/π)
          = √(407.4)
          = 20.2 mm

      RATIO of bores = 132.5/20.2
                     = 6.56×

      Check against the theoretical ratio:
        √(250/5.8) = √43.10 = 6.56 ✓

  (b) FIT WITHIN THE Ø80 mm ENVELOPE

      PNEUMATIC  132.5 mm  ✗ DOES NOT FIT
                 (166 % of the envelope)
      HYDRAULIC   20.2 mm  ✓ fits with room to
                 spare (25 % of the envelope)

      ┌────────────────────────────────────────────┐
      │ THE PNEUMATIC OPTION IS ELIMINATED ON      │
      │ SPACE, NOT ON FORCE.                       │
      │                                            │
      │ IT COULD DELIVER 8,000 N — WITH A CYLINDER │
      │ THAT DOES NOT FIT ON THE FIXTURE.          │
      │                                            │
      │ THIS IS THE NORMAL WAY PNEUMATIC LOSES,    │
      │ AND IT IS WHY THE 58× PRESSURE RATIO       │
      │ MATTERS SO MUCH IN PRACTICE.               │
      └────────────────────────────────────────────┘

  (c) IF CLAMPING IS THE RETRACT STROKE

      HYDRAULIC, rod Ø20 mm
        Required annulus area = 320 mm²
        π(D² − 20²)/4 = 320
        D² − 400 = 320 × 4/π = 407.4
        D² = 807.4
        D = 28.4 mm

      Compare with the extend case, 20.2 mm:
        28.4/20.2 = 1.406×

      Area check: with D = 20.2 and d = 20, the
      annulus is almost nothing —
        π(20.2² − 20²)/4 = π(408.0 − 400)/4
                         = 6.3 mm²
        which at 25 N/mm² gives only 158 N.

      ┌────────────────────────────────────────────┐
      │ A CYLINDER SIZED CORRECTLY FOR EXTENDING   │
      │ WOULD DELIVER 158 N INSTEAD OF 8,000 N ON  │
      │ RETRACT — 2.0 % OF THE REQUIREMENT.        │
      │                                            │
      │ A FACTOR OF FIFTY, FROM CHOOSING THE WRONG │
      │ AREA.                                      │
      │                                            │
      │ THIS IS THE ERROR DESIGN RULE R4 EXISTS TO │
      │ PREVENT, AND IT IS COMMON BECAUSE PULLING  │
      │ DOWN IS OFTEN THE NATURAL CLAMP GEOMETRY.  │
      └────────────────────────────────────────────┘

  (d) VACUUM — SEALED AREA REQUIRED

      Available Δp = 65 kPa = 6.5 N/cm²

      For 32,000 N total:
        A = 32,000/6.5
          = 4,923 cm²

      Part plan area = 38.0 × 26.0
                     = 988 cm²

      ┌────────────────────────────────────────────┐
      │ THE PART IS ONLY 988 cm². WE NEED          │
      │ 4,923 cm².                                 │
      │                                            │
      │ SHORTFALL FACTOR = 4,923/988 = 4.98×       │
      │                                            │
      │ THE PART IS NOT BIG ENOUGH TO GENERATE THE │
      │ REQUIRED FORCE, EVEN AT A PERFECT SEAL     │
      │ OVER ITS WHOLE UNDERSIDE.                  │
      └────────────────────────────────────────────┘

      What CAN vacuum deliver on this part?
        Assume 85 % of the plan area is
        effectively sealed [EX-ASSUMED]:
          A_eff = 0.85 × 988 = 840 cm²
          F = 6.5 × 840 = 5,460 N

        Against the 32,000 N nominal requirement:
          5,460/32,000 = 17.1 %

      BUT — IS 32,000 N ACTUALLY REQUIRED?
      That figure came from the stated requirement
      of 8,000 N per station. Let us test it
      against the physics.

  (e) VACUUM SIDE-LOAD CAPACITY, AND THE REAL
      REQUIREMENT

      Vacuum holds DOWN with 5,460 N.
      Side resistance = μ × F
                      = 0.20 × 5,460
                      = 1,092 N

      Cutting side load = 2,600 N

      SAFETY FACTOR = 1,092/2,600
                    = 0.42  ✗ THE PART SLIDES

      With coolant, μ → 0.10:
        Side resistance = 546 N
        SF = 0.21  ✗ WORSE

      ┌────────────────────────────────────────────┐
      │ VACUUM FAILS ON SIDE LOAD, NOT ON HOLD-    │
      │ DOWN.                                      │
      │                                            │
      │ 5,460 N PRESSING THE PART ONTO THE TABLE   │
      │ SOUNDS AMPLE — AND RESISTS ONLY 1,092 N    │
      │ SIDEWAYS, AGAINST A 2,600 N CUT.           │
      │                                            │
      │ THIS IS THE VACUUM TRAP: THE HOLD-DOWN     │
      │ NUMBER IS LARGE AND REASSURING, AND IT IS  │
      │ NOT THE NUMBER THAT MATTERS.               │
      └────────────────────────────────────────────┘

      WITH A POSITIVE STOP
        A stop taking the 2,600 N side load in
        compression removes the friction
        dependency entirely.

        Vacuum then only has to hold the part
        DOWN against:
          - its own weight: 4.1 × 9.81 = 40.2 N
          - any uplift from the cut
          - and the tipping moment

        THE REQUIREMENT COLLAPSES.

      ┌────────────────────────────────────────────┐
      │ WITH A STOP, VACUUM'S 5,460 N IS NOT       │
      │ MARGINAL — IT IS OVERWHELMING.             │
      │                                            │
      │ THE LEVEL 0 PRINCIPLE, AGAIN, AND WITH THE │
      │ SAME SHAPE: FRICTION-ONLY HOLDING NEEDED   │
      │ 32,000 N; A POSITIVE STOP DROPPED THE      │
      │ REQUIREMENT TO SOMETHING TRIVIAL.          │
      │                                            │
      │ THE ORIGINAL "8,000 N PER STATION"         │
      │ REQUIREMENT WAS ITSELF A CONSEQUENCE OF    │
      │ NOT HAVING A STOP.                         │
      └────────────────────────────────────────────┘

  (f) PRODUCTIVITY VALUE OF POWERED CLAMPING

      Δt = 42 − 8 = 34 s per cycle
      Annual hours = 26,000 × 34/3600
                   = 245.6 h
      Value = 245.6 × 1,800
            = ₹442,000/yr

      At 84 % utilisation, u ≈ 1 is justified.

      PAYBACK
        Hydraulic: 138,000/(442,000/12)
                 = 138,000/36,833
                 = 3.75 months
        Vacuum:     96,000/36,833
                 = 2.61 months

  (g) FAILURE BEHAVIOUR

      MANUAL        fails in place — safe
      PNEUMATIC     loses force on air failure
                    unless spring-applied
      HYDRAULIC     stored energy; must be
                    spring-applied and discharged
                    (L2.2.4)
      VACUUM        FAILS RELEASED on power or
                    air loss — and fails
                    INVISIBLY

      ┌────────────────────────────────────────────┐
      │ VACUUM'S FAILURE MODE IS THE WORST OF THE  │
      │ FOUR: IT RELEASES, AND NOTHING LOOKS       │
      │ DIFFERENT.                                 │
      │                                            │
      │ IT IS USABLE ONLY WITH A VACUUM SWITCH     │
      │ INHIBITING THE CYCLE, AND WITH A RESERVOIR │
      │ OR CHECK VALVE SO THAT A BRIEF SUPPLY LOSS │
      │ DOES NOT RELEASE THE PART MID-CUT.         │
      └────────────────────────────────────────────┘

  (h) SELECTION

      ELIMINATED
        PNEUMATIC — 132.5 mm bore against an
          80 mm envelope, 166 %. Space, not
          force.
        MANUAL — 42 s of cycle time at 26,000/yr
          on an 84 %-utilised machine.

      SURVIVING: HYDRAULIC and VACUUM

      WITH A POSITIVE STOP FITTED — which is
      required regardless — both work:

        HYDRAULIC  ₹138,000, 3.75-month payback,
                   20.2 mm bore (28.4 on retract),
                   spring-applied for safety
        VACUUM      ₹96,000, 2.61-month payback,
                   5,460 N hold-down, no
                   projections above the part,
                   REQUIRES a vacuum switch and
                   reservoir

      THE DECIDER IS NOT COST.
        Vacuum gives an UNOBSTRUCTED TOP SURFACE.
        For a 380 × 260 plate being face milled,
        that is worth more than ₹42,000 —
        the tool can cross the entire part
        without a single clamp to program around.

      RECOMMENDATION: VACUUM, with a positive
      stop, a vacuum switch inhibiting the cycle,
      and a reservoir against brief supply loss.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Pneumatic bore, 5.8 bar  │ 132.5 mm          │
  │     Hydraulic bore, 250 bar  │ 20.2 mm           │
  │     Ratio                    │ 6.56× = √43.10 ✓  │
  │ (b) Against Ø80 envelope     │ pneu 166 % ✗      │
  │                              │ hyd 25 % ✓        │
  │ (c) Hydraulic on RETRACT     │ 28.4 mm (1.406×)  │
  │     Extend-sized on retract  │ 158 N = 2.0 % ✗   │
  │                              │ a factor of 50    │
  │ (d) Vacuum area required     │ 4,923 cm²         │
  │     Part plan area           │ 988 cm² — 4.98×   │
  │                              │ short             │
  │     Achievable at 85 % seal  │ 5,460 N = 17.1 %  │
  │ (e) Side resistance, dry     │ 1,092 N vs 2,600  │
  │     SF                       │ 0.42 ✗            │
  │     With coolant             │ SF 0.21 ✗         │
  │     WITH A POSITIVE STOP     │ requirement       │
  │                              │ collapses         │
  │ (f) Powered clamping saving  │ 245.6 h = ₹442,000│
  │     Payback hyd / vac        │ 3.75 / 2.61 months│
  │ (g) Failure: vacuum          │ released, and     │
  │                              │ INVISIBLY         │
  │ (h) SELECTED                 │ VACUUM + stop +   │
  │                              │ switch + reservoir│
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Required ≥1.5 on holding [PRACTICE].
  Vacuum on friction alone: 0.42 dry, 0.21 with
  coolant — FAILS.
  Vacuum with a positive stop: the side load is
  taken in compression by the stop, and the
  hold-down requirement falls to the part's own
  weight plus uplift, where 5,460 N against
  roughly 40 N of weight is overwhelming.
  THE SAFETY FACTOR IS NOT IMPROVED BY A BETTER
  PUMP. IT IS IMPROVED BY A STOP.

PASS/FAIL:
  ✗ FAIL — pneumatic, 166 % of the space envelope
  ✗ FAIL — manual, 42 s at 26,000/yr on an
    84 %-utilised machine
  ✗ FAIL — vacuum on friction alone, SF 0.42
  ✓ PASS — hydraulic, with spring-applied clamping
  ✓ PASS — vacuum, WITH a positive stop, a vacuum
    switch and a reservoir
  ⚠ CONDITIONAL — vacuum depends on the part
    remaining flat, non-porous and free of through
    holes in the sealed area

ENGINEERING CONCLUSION:
  1. PNEUMATIC WAS ELIMINATED ON SPACE, NOT ON
     FORCE, AND THAT IS THE NORMAL OUTCOME.
     A 132.5 mm bore delivers the 8,000 N
     perfectly well; it simply does not fit in an
     80 mm envelope. The 58× pressure ratio
     between hydraulic and shop air becomes a
     6.56× ratio in bore diameter, and bore
     diameter is what competes for space on a
     fixture. THE FORCE QUESTION IS ALMOST NEVER
     THE ONE THAT DECIDES BETWEEN AIR AND OIL.
     I would also note that sizing on the nominal
     7 bar rather than the measured 5.8 would
     have undersized the cylinder by 17 % — the
     measurement was worth taking.

  2. THE RETRACT-STROKE ERROR IS WORTH A FACTOR OF
     FIFTY.
     A cylinder correctly sized at 20.2 mm for
     extending delivers 158 N on retract with a
     20 mm rod — 2.0 % of the requirement. The
     correct retract bore is 28.4 mm. This is not
     an exotic mistake: PULLING DOWN IS OFTEN THE
     NATURAL CLAMPING GEOMETRY, so the retract
     stroke is frequently the working one, and the
     bore is frequently chosen from the extend
     table because that is the column people read.

  3. VACUUM'S REASSURING NUMBER WAS THE WRONG
     NUMBER.
     5,460 N of hold-down sounds ample against a
     4.1 kg part. It resists 1,092 N sideways dry,
     546 N with coolant, against a 2,600 N cut —
     safety factors of 0.42 and 0.21. THE PART
     SLIDES. Vacuum and magnetic holding both
     present this trap, because the headline force
     is large and the useful force is the headline
     multiplied by a friction coefficient that
     halves when coolant arrives.

  4. THE POSITIVE STOP DISSOLVED THE ENTIRE
     PROBLEM, AND THE ORIGINAL REQUIREMENT WITH
     IT.
     Fit a stop to take 2,600 N in compression and
     the holding requirement falls from 32,000 N
     to something near the part's own 40 N weight
     plus uplift. Vacuum goes from 17.1 % of
     requirement to overwhelming. AND NOTE WHERE
     THE 8,000 N PER STATION CAME FROM: IT WAS
     ITSELF A CONSEQUENCE OF ASSUMING FRICTION-
     ONLY HOLDING. The requirement was not a fact
     about the part; it was a fact about a design
     choice nobody had revisited. This is the
     Level 0 result — 28× — arriving in a
     completely different context and with the
     same shape.

  5. THE SELECTION WAS DECIDED BY GEOMETRY, NOT
     ECONOMICS.
     Hydraulic and vacuum both passed, at
     ₹138,000 and ₹96,000, with paybacks of 3.75
     and 2.61 months. The ₹42,000 difference was
     not what decided it. Vacuum leaves the top
     surface completely unobstructed, so a face
     mill can cross a 380 × 260 plate without a
     single clamp to program around — no
     interruptions, no repositioning, no clamp-
     shadow regions to clean up in a second
     operation. ON A LARGE FLAT PART THAT IS
     WORTH MORE THAN THE CAPITAL DIFFERENCE, AND
     IT IS THE KIND OF VALUE THAT NEVER APPEARS
     IN A PAYBACK CALCULATION.

SENSITIVITY NOTE:
  Ranked by influence:
    1. WHETHER A POSITIVE STOP IS FITTED — binary,
       and it changes the required force by
       roughly two orders of magnitude. THE
       DOMINANT VARIABLE, AND IT IS A DESIGN
       CHOICE RATHER THAN A PHYSICAL CONSTRAINT.
    2. THE PART REMAINING SEALABLE — binary for
       the vacuum option. A future design change
       adding a through hole eliminates it
       entirely, as the section 9 case showed.
    3. FRICTION COEFFICIENT — halves with coolant,
       and on a vacuum chuck coolant WILL reach
       the interface. Any friction-dependent
       design must be assessed at μ = 0.10.
    4. ACHIEVABLE VACUUM Δp — 65 kPa against a
       theoretical 101.3. A different generator or
       seal changes the hold-down proportionally,
       but not the side-load conclusion.
    5. SHOP AIR PRESSURE — 5.8 measured against
       7 nominal, a 17 % effect on pneumatic
       sizing. Would not have rescued the
       pneumatic option, which failed by 66 %.
```

### 14. Engineering assumptions
- Theoretical cylinder force used; **real cylinders deliver less due to seal friction — use the
  manufacturer's force table for design** `[MFR]`.
- Shop air pressure of 5.8 bar is **measured at the fixture**, not the nominal 7 bar; sizing on nominal
  would undersize by 17% `[PROJ]`.
- Achievable vacuum Δp of 65 kPa is the manufacturer's figure for this generator and seal `[MFR]`.
- μ = 0.20 dry; **coolant halves it, and on a vacuum chuck coolant will reach the interface** `[GUIDE]`.
- The part is stated flat, non-porous and free of through holes in the clamped area; **if any of these
  changes the vacuum option fails** `[PROJ]`.
- Machine utilisation of 84% justifies u ≈ 1 `[PROJ]`.

### 15. Diagram

```
     CLASSIFICATION BY ACTUATION
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  READ THIS COLUMN FIRST

   METHOD           FAILURE BEHAVIOUR
   ──────────────   ──────────────────────────
   manual           fails IN PLACE        safe
   pneumatic        loses force           unless
                                          spring-
                                          applied
   hydraulic        STORED ENERGY         37,019 J
                                          (L2.2.4)
   electro-mech     holds if self-locking
   vacuum           FAILS RELEASED, and
                    INVISIBLY             worst
   magnetic perm    holds without power   safe
   magnetic electro FAILS RELEASED
   electro-permanent holds without power  best of
                                          the
                                          switched

   ┌──────────────────────────────────────────────┐
   │ MAKE LOSS OF POWER THE SAFE STATE.           │
   │                                              │
   │ Spring-applied pressure-released, or         │
   │ electro-permanent. Same logic, two           │
   │ technologies.                                │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE 58× THAT DECIDES AIR vs OIL

   SAME BORE, 250 bar vs 5.8 bar

   pneumatic  █ 
   hydraulic  ███████████████████████████████████████████

   FORCE RATIO   43.1×      (250/5.8)
   BORE RATIO     6.56×     (√43.1)

   FOR 8,000 N:
     pneumatic bore  132.5 mm  ████████████████
     hydraulic bore   20.2 mm  ██
     envelope         80.0 mm  ██████████

   ┌──────────────────────────────────────────────┐
   │ PNEUMATIC WAS ELIMINATED ON SPACE, NOT ON    │
   │ FORCE — 166 % OF THE ENVELOPE.               │
   │                                              │
   │ THAT IS THE NORMAL WAY AIR LOSES. THE FORCE  │
   │ QUESTION ALMOST NEVER DECIDES.               │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE RETRACT TRAP — A FACTOR OF FIFTY

        ┌──────────────┐
   EXTEND│░░░░░░░░░░░░░│  A = πD²/4
        └──────────────┘

        ┌──────────────┐
   RETRACT│▓▓▓░░░░░▓▓▓ │  A = π(D²−d²)/4
        └───────┬──────┘  ← the ROD steals area
                │

   D = 20.2 mm sized for EXTEND
   used on RETRACT with a Ø20 rod:
     annulus = 6.3 mm² → 158 N
     required                8,000 N
     ────────────────────────────────
     DELIVERS 2.0 % — A FACTOR OF 50

   correct retract bore = 28.4 mm (1.406×)

   ┌──────────────────────────────────────────────┐
   │ PULLING DOWN IS OFTEN THE NATURAL CLAMP      │
   │ GEOMETRY, SO THE RETRACT STROKE IS OFTEN THE │
   │ WORKING ONE — AND THE BORE IS OFTEN CHOSEN   │
   │ FROM THE EXTEND COLUMN.                      │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  VACUUM — A CEILING SET BY THE WEATHER

   ATMOSPHERIC     101.3 kPa = 10.13 N/cm²  [STD]
   ACHIEVED         65.0 kPa =  6.50 N/cm²  [MFR]
                    ██████████████░░░░░░ 64 %

   ┌──────────────────────────────────────────────┐
   │ NO PUMP, NO MONEY AND NO INGENUITY GETS PAST │
   │ ATMOSPHERIC PRESSURE. UNIQUE AMONG THE       │
   │ ACTUATION METHODS.                           │
   └──────────────────────────────────────────────┘

   AND THE TRAP:

   hold-down     ████████████████ 5,460 N
   × μ 0.20 dry  ███ 1,092 N
   × μ 0.10 wet  █▌ 546 N
   cutting load  ████████ 2,600 N

   SF 0.42 dry · 0.21 with coolant  ✗ IT SLIDES

   ┌──────────────────────────────────────────────┐
   │ THE HEADLINE FORCE IS LARGE AND REASSURING.  │
   │ THE USEFUL FORCE IS THE HEADLINE × A         │
   │ FRICTION COEFFICIENT THAT HALVES WHEN        │
   │ COOLANT ARRIVES.                             │
   │                                              │
   │ SAME TRAP FOR MAGNETIC HOLDING.              │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  AND THEN THE STOP DISSOLVED EVERYTHING

   WITHOUT A STOP    need 32,000 N
                     vacuum gives 5,460 = 17.1 % ✗

   WITH A STOP       stop takes 2,600 N in
                     COMPRESSION
                     vacuum need only resist
                     weight + uplift ≈ 40 N
                     5,460 N is OVERWHELMING ✓

   ┌──────────────────────────────────────────────┐
   │ THE 8,000 N PER STATION WAS NOT A FACT ABOUT │
   │ THE PART. IT WAS A CONSEQUENCE OF ASSUMING   │
   │ FRICTION-ONLY HOLDING.                       │
   │                                              │
   │ THE LEVEL 0 RESULT — 28× — ARRIVING IN A     │
   │ COMPLETELY DIFFERENT CONTEXT WITH THE SAME   │
   │ SHAPE.                                       │
   │                                              │
   │ FIT A POSITIVE STOP.                         │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  MAGNETIC — FORCE COLLAPSES WITH AIR GAP

   gap 0.00 mm  ████████████████████
   gap 0.05 mm  ████████████
   gap 0.10 mm  ███████
   gap 0.20 mm  ███
        (shape indicative — [MFR] curve governs)

   ┌──────────────────────────────────────────────┐
   │ A BURR, A CHIP OR A COAT OF PAINT UNDER THE  │
   │ PART IS A HOLDING FAILURE.                   │
   │                                              │
   │ STRONGLY NON-LINEAR. THERE IS NO GENERAL     │
   │ FORMULA SUITABLE FOR DESIGN — OBTAIN THE     │
   │ MANUFACTURER'S CURVE FOR THE SPECIFIC CHUCK, │
   │ GAP AND PART THICKNESS.                      │
   │                                              │
   │ AND DEMAGNETISE AFTERWARDS.                  │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE INVISIBILITY PROBLEM

   A MECHANICAL CLAMP that has not closed is
   visible from three metres.

   A VACUUM that has not established looks
   EXACTLY like one that has.
   A MAGNET that is off looks EXACTLY like one
   that is on.

   ┌──────────────────────────────────────────────┐
   │ THEREFORE: SENSE THEM.                       │
   │                                              │
   │ Vacuum switch inhibiting the cycle below a   │
   │ threshold. Reservoir or check valve against  │
   │ brief supply loss. Magnetic state feedback.  │
   │                                              │
   │ THIS IS L3.3.2's SUBJECT, AND IT IS NOT      │
   │ OPTIONAL FOR THESE TWO METHODS.              │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-5100 — VACUUM FIXTURE
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: THIS FIXTURE RELIES ON POSITIVE STOPS
        ITEMS 6 AND 7 TO REACT CUTTING SIDE LOAD.
        VACUUM PROVIDES HOLD-DOWN ONLY. DO NOT
        REMOVE OR RELIEVE THE STOPS.

NOTE 2: VACUUM SWITCH ITEM 12 SHALL INHIBIT THE
        MACHINE CYCLE BELOW 55 kPa DIFFERENTIAL.
        THIS INTERLOCK IS A SAFETY FUNCTION.

NOTE 3: RESERVOIR ITEM 14 IS SIZED TO MAINTAIN
        HOLDING FOR NOT LESS THAN THE TIME
        SPECIFIED IN CF-5100-02 AFTER SUPPLY
        LOSS.

NOTE 4: SEAL ITEM 9 IS CONSUMABLE. REPLACE AT THE
        INTERVAL ON SHEET 4 OR ON ANY LOSS OF
        VACUUM PERFORMANCE.

NOTE 5: THIS FIXTURE IS VALID ONLY FOR PARTS WITH
        NO THROUGH FEATURES INSIDE THE SEALED
        ZONES SHOWN. ANY PART DESIGN CHANGE
        REQUIRES RE-ASSESSMENT OF THIS FIXTURE.
```

`[PRACTICE]` **Note 5 is the one that would have prevented the section 9 failure.** A fixture that
depends on a property of the part — sealability, ferromagnetism, flatness — has a dependency that lives
outside its own drawing. **Stating the dependency on the fixture drawing is the only way it gets
re-examined when the part changes**, because nobody reviews a working fixture during a part design
change.

### 17. CAD workflow
1. Establish the **required force with a positive stop assumed**, before selecting actuation
2. Determine the **clamping stroke direction** — this decides extend or retract sizing
3. Select the cylinder from the **manufacturer's force table** at the **measured** supply pressure `[MFR]`
4. Model the cylinder at **both stroke extremes** and check clearance to the tool path
5. Model the **hose, fitting and manifold routing** — routinely omitted and routinely a collision
6. For vacuum, model the **sealed zones** and verify no part feature crosses them
7. For magnetic, obtain the **force-versus-gap curve** and state the maximum permissible gap
8. Model the **sensing elements** — switch, reservoir, feedback — as part of the fixture, not as an
   afterthought

`[PRACTICE]` Step 5 catches more collisions than any other item on this list. **A hydraulic manifold and
its hoses occupy real volume, and they are modelled last if at all** — usually after the tool paths have
been proven.

### 18. GD&T application
Actuation choice has one specific tolerancing consequence:

```
  STANDARD: ASME Y14.5-2018

  ┌────────────────────────────────────────────┐
  │ CLAMPING FORCE IS NOT A DIMENSION, BUT     │
  │ WHERE IT ACTS IS.                          │
  │                                            │
  │ A clamp's contact point should be          │
  │ dimensioned and toleranced when it affects │
  │ the part — which it does whenever the part │
  │ is not perfectly rigid.                    │
  └────────────────────────────────────────────┘

  WHAT CHANGES BY ACTUATION METHOD

  MECHANICAL CLAMPS
    → the contact POINT is toleranced
    → the force is set by adjustment and should
      be stated as a requirement, verified at
      commissioning

  VACUUM
    → THE SEALED ZONE BOUNDARY IS A PROFILE
      REQUIREMENT
    → it must be toleranced, because a zone
      boundary in the wrong place changes the
      held area
    → and the part's flatness in the sealed area
      becomes a functional requirement on the
      PART drawing, not just a quality one

  MAGNETIC
    → THE CHUCK FACE FLATNESS DIRECTLY SETS THE
      AIR GAP
    → so it is toleranced far more tightly than
      a mechanical fixture's clamping face would
      be
    → and the part's own flatness becomes a
      holding requirement

  ┌────────────────────────────────────────────┐
  │ NOTE THE PATTERN: VACUUM AND MAGNETIC BOTH │
  │ CONVERT A PART FLATNESS TOLERANCE FROM A   │
  │ QUALITY CHARACTERISTIC INTO A HOLDING      │
  │ REQUIREMENT.                               │
  │                                            │
  │ THAT IS A CONVERSATION TO HAVE WITH THE    │
  │ PART DESIGNER BEFORE COMMITTING, NOT AFTER.│
  └────────────────────────────────────────────┘

  Profile and flatness treatment at Level 11.
```

### 19. Manufacturing method
| Element | Practice `[PRACTICE]` |
|---|---|
| **Cylinders and clamps** | Bought-in `[MFR]` — never make what a catalogue supplies (L0.5.2) |
| **Manifolds** | Drilled and plugged in the base plate where possible — fewer hoses, fewer leaks |
| **Hydraulic porting** | Cross-drilled passages must be **deburred internally**; a burr becomes swarf in the circuit |
| **Vacuum chuck body** | Machined grooves and ports; sealing grooves ground or precision-milled |
| **Vacuum seals** | Standard cord or moulded profile `[MFR]`; consumable |
| **Magnetic chuck** | Bought as a unit; the fixture mounts **on** it, not around it |
| **Sensor mounting** | Positioned so they cannot be knocked, and accessible for replacement |

> **"Drilled and plugged manifolds"** deserves emphasis for hydraulic fixtures. `[PRACTICE]` Every hose is
> a leak path, a snag hazard and a collision risk. **Passages machined into the base plate eliminate all
> three at almost no cost**, and the only discipline required is to deburr the cross-drillings — because
> a burr released into a 250 bar circuit will find a valve seat.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Clamp force delivered | Force gauge or load cell at the clamp point | Within the design requirement |
| Supply pressure at the fixture | Gauge at the manifold, not at the compressor | As designed |
| Cylinder stroke and clearance | Physical, at both extremes | No contact |
| Vacuum level achieved | Gauge, with the part loaded | ≥ the design Δp |
| Vacuum decay | Isolate the supply, time the decay | Within the specified rate |
| Vacuum switch operation | Bleed the vacuum, confirm the cycle inhibits | Inhibits at the set point |
| Magnetic force | Pull-off test `[MFR]` | Per the manufacturer's figure |
| Magnetic air gap | Feeler or measurement of the seating face | Within the maximum |
| Demagnetisation | Test with a ferrous indicator | No residual attraction |
| Stored energy discharge | Confirm the documented procedure works | Discharges fully |

`[PRACTICE]` **The vacuum decay test is the one that predicts failures.** A chuck that reaches its
setpoint but decays quickly is one marginal seal away from a released part, and the decay rate degrades
long before the setpoint does.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Selecting actuation on **force alone** | Wrong method for the cycle time or the failure mode |
| 2 | Reading the **failure behaviour last** | A method chosen that fails dangerous |
| 3 | Sizing on **nominal** rather than measured supply pressure | 17% undersized here |
| 4 | Sizing on the **extend area** when clamping is retract | 2.0% of the required force |
| 5 | Treating a **pneumatic clamp as rigid** | It is the softest element in the loop |
| 6 | Not applying the **stored-energy discipline** to hydraulics | L2.2.4's 37,019 J |
| 7 | Using the **theoretical vacuum** rather than the achievable `[MFR]` | Overstates by ~36% here |
| 8 | Relying on **friction** with vacuum or magnetic | SF 0.42, and 0.21 with coolant |
| 9 | Not fitting a **positive stop** | The requirement inflates by two orders of magnitude |
| 10 | Choosing vacuum for a **porous or perforated** part | Cannot seal |
| 11 | Ignoring the **magnetic air gap** | A chip is a holding failure |
| 12 | Not **demagnetising** | The part collects swarf permanently |
| 13 | Not **sensing** vacuum or magnetic state | Invisible failure |
| 14 | Not modelling **hoses and manifolds** | Collisions found at commissioning |
| 15 | Not stating the fixture's **dependency on part properties** | Nobody re-examines it when the part changes |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Clamp force below design | Supply pressure low at the fixture | Gauge at the manifold | Correct the supply; re-size | Measure, do not assume |
| Force adequate extending, not retracting | Sized on the bore area | Recalculate on the annulus | Larger bore | Design rule R4 |
| Part moves under cut, clamps closed | Pneumatic compliance | Indicate the part under load | Mechanical lock or air-over-oil | Treat air as a spring |
| Part released on power loss | Pressure-applied clamping | Review the circuit | Spring-applied, pressure-released | Design rule R3 |
| Vacuum holds then part lifts | Decay, or a marginal seal | Decay test | Replace the seal; add a reservoir | Decay test at commissioning |
| Vacuum will not establish | A part feature crosses a sealed zone | Compare the part drawing with the zones | Re-zone | Drawing note on the dependency |
| Magnetic holding weak | Air gap — burr, chip, paint | Clean and re-test | Clean; check the seating face | Gap stated on the drawing |
| Thin part holds poorly on a magnet | Flux saturation | Check thickness against `[MFR]` | Different method | Verify thickness at design |
| Part collects swarf after grinding | Not demagnetised | Ferrous indicator | Demagnetise | Add to the process sheet |
| Hose damaged repeatedly | Routing through a working area | Observe a cycle | Re-route, or use drilled passages | Model hoses in CAD |

### 23. Design checklist
- [ ] Has the required force been established **with a positive stop assumed**?
- [ ] Is the **failure behaviour** required known, and does the method deliver it?
- [ ] Is **loss of power the safe state**?
- [ ] Is the **clamping stroke direction** known, and the cylinder sized for it?
- [ ] Is the **supply pressure measured** at the fixture?
- [ ] Has the cylinder been selected from the **manufacturer's force table** `[MFR]`?
- [ ] If pneumatic: has **compliance** been assessed against the stiffness budget?
- [ ] If hydraulic: is the **stored energy** discharge procedure documented?
- [ ] If vacuum: is the **achievable** Δp from the manufacturer, and the sealed area real?
- [ ] If vacuum or magnetic: is a **positive stop** fitted?
- [ ] If vacuum: is the part **non-porous, flat and unperforated** in the sealed area?
- [ ] If magnetic: **ferromagnetic, thick enough, gap controlled, demagnetising planned**?
- [ ] Are vacuum and magnetic states **sensed and interlocked**?
- [ ] Are **hoses, manifolds and sensors** modelled?
- [ ] Is the fixture's **dependency on part properties** stated on its drawing?

### 24. Beginner exercise
**E3.2.1-B** — Calculate and answer:
(a) A pneumatic cylinder of Ø63 mm bore operates at 5.5 bar. Calculate the extend force.
(b) The same cylinder has a Ø20 mm rod. Calculate the retract force and express it as a percentage of the
extend force.
(c) A hydraulic cylinder must deliver 12,000 N at 200 bar. Calculate the required bore.
(d) A vacuum chuck seals 620 cm² at a differential of 60 kPa. Calculate the hold-down force.
(e) With μ = 0.15, calculate the side load that vacuum chuck resists, and state what you would add.
(f) List the actuation methods that hold without power, and state why that matters.

### 25. Intermediate exercise
**E3.2.1-I** — A fixture must hold a steel part against a 3,400 N side load and a 900 N uplift. Space
allows a maximum Ø90 mm cylinder envelope. Shop air measures 6.2 bar; a 200 bar hydraulic unit is
available. Friction is 0.18 dry, and coolant will be used. The part is 300 × 220 mm, flat, ferrous, 10 mm
thick. Volume 18,000/yr; manual clamping takes 36 s, powered 7 s; the rate is ₹1,750/h and the machine
runs at 79% utilisation.
(a) Calculate the clamp force required with friction-only holding at μ = 0.18 and at μ = 0.09, with a
safety factor of 1.5.
(b) Recalculate assuming a positive stop takes the side load, and state the ratio between the two
requirements.
(c) For the friction-only case, calculate the pneumatic and hydraulic bores required and state which fit
the envelope.
(d) For the stop case, repeat.
(e) Assess whether magnetic holding is viable, stating what you would need from the manufacturer.
(f) Calculate the productivity value of powered clamping and its payback for a ₹78,000 pneumatic option.
(g) State your selection and the single assumption it most depends on.

### 26. Advanced exercise
**E3.2.1-A** — A four-station fixture holds carbon-fibre composite panels (420 × 300 × 6 mm, 1.2 kg) for
trimming and drilling. The panels are non-ferrous, slightly porous at the edges, and cosmetically
sensitive — no marking permitted on the visible face. Cutting side load is 1,800 N per panel; uplift is
600 N. Cycle time target is 95 s including load and unload. Volume 40,000/yr for 4 years, on a machine at
92% utilisation, rate ₹1,900/h. `[EX-ASSUMED]` State all assumptions.
(i) Evaluate all six actuation methods against this part, eliminating on gates before comparing.
(ii) Explain specifically why magnetic holding is eliminated and what would have to change.
(iii) Assess vacuum, including the porosity issue, and state what you would measure before committing.
(iv) Determine the required hold-down force with and without positive stops, and design the stop
arrangement given the cosmetic constraint.
(v) Calculate the sealed area required and compare with the panel area.
(vi) Design the sensing and interlock scheme, stating what each sensor prevents.
(vii) Determine the failure behaviour required and how you achieve it.
(viii) Perform the capacity check and the economics for your two best options.
(ix) Identify which of the twenty-four auto-fail items this application most invites.
(x) State the six most important drawing notes.

### 27. Interview questions
1. *"When would you choose hydraulic over pneumatic clamping?"*
   **Answer:** Mostly when space is tight, which is more often than people expect. The pressure ratio is
   roughly fifty-eight to one between a 350 bar hydraulic system and shop air, and that becomes about
   seven and a half to one in bore diameter — so a clamp that needs a twenty millimetre hydraulic
   cylinder needs a hundred and thirty millimetre pneumatic one. In the case we worked, the pneumatic
   option could deliver the eight thousand newtons perfectly well, with a cylinder that was a hundred and
   sixty-six per cent of the available envelope. It was eliminated on space, not on force, and that is
   the normal way air loses. The other reasons are stiffness — air is compressible, so a pneumatic clamp
   behaves like a spring and can be the softest element in the loop, which matters because rigidity is a
   system property — and the ability to run many clamps precisely from one power source. Against that,
   hydraulics cost more, need a power unit, leak eventually, and carry a stored energy hazard that has to
   be designed for and documented. So I would use air where the forces are modest and the cycle rate is
   high, oil where space is tight or the forces are large, and consider air-over-oil where I want
   hydraulic stiffness without a power unit.
2. *"What is the catch with vacuum and magnetic holding?"*
   **Answer:** Both hold *down* very well and resist sideways motion only by friction, and the hold-down
   number is large enough to be reassuring while the useful number is much smaller. In the example, a
   vacuum chuck gave five and a half thousand newtons of hold-down, which sounds ample for a four
   kilogram plate — and it resisted only about eleven hundred newtons sideways at a friction coefficient
   of point two, against a two thousand six hundred newton cut. Safety factor of point four two. With
   coolant, friction halves and it becomes point two one. The part slides. The answer is the same one
   from Level 0: fit a positive stop, take the side load in compression, and the holding requirement
   collapses to the part's own weight plus uplift — at which point the same vacuum chuck is
   overwhelming. The second catch is that both fail invisibly. A mechanical clamp that has not closed is
   visible from across the shop; a vacuum that has not established looks exactly like one that has. So
   they have to be sensed and interlocked, with a switch inhibiting the cycle and a reservoir against
   brief supply loss. And each has its own disqualifiers — vacuum needs a flat, non-porous, unperforated
   surface, and magnetic needs a ferromagnetic part thick enough not to saturate, with the air gap
   controlled, and demagnetising afterwards.

### 28. Expert questions
1. *"Powered clamping is sold on cycle time. Is there a case for keeping manual clamping when the volume
   clearly justifies power?"*
   **Answer:** Yes, and there are three cases I would defend.
   **The first is force feedback.** A manual clamp tells the operator something. A screw that turns
   further than usual means the part is not seated, or a chip is under it, or the wrong part has been
   loaded. **That information is free, continuous, and it disappears entirely the moment you go
   powered** — a hydraulic clamp closes with eight thousand newtons onto a part sitting on a chip just as
   confidently as onto a correctly seated one. So when you power a fixture you must replace the
   operator's hand with a sensor, and that is a real cost that rarely appears in the payback. The honest
   comparison is powered-plus-sensing against manual, not powered against manual.
   **The second is large fixtures with few clamps.** The economics of powered clamping come from
   multiplying a small time saving by many clamps and many cycles. A welding fixture with three clamps on
   a four-minute cycle saves almost nothing, and it acquires hoses, a manifold, a valve, a power source
   and a maintenance burden in a weld shop — which, as L3.1.2 noted, is harder on tooling than a machine
   shop. **The break-even is not per-fixture, it is per-clamp-cycle**, and people apply a rule of thumb
   derived from high-volume machining to environments where it does not hold.
   **The third is where the failure mode of powered clamping is worse than the delay of manual.** A
   manual clamp fails in place. It is the only method on the list that does, and on a fixture that will
   spend hours between operations — a long weld sequence, an adhesive cure, an inspection setup — that
   property is worth more than thirty seconds a cycle.
   Where I think manual is genuinely indefensible is exactly the case in the worked example: **high
   volume, many clamps, short cycle, and a machine near capacity**. Forty-two seconds of clamping on
   twenty-six thousand parts a year is two hundred and forty-five hours, and at eighty-four per cent
   utilisation those hours are real money. **The mistake is not choosing manual; it is choosing either
   one by habit rather than by counting clamp-cycles.**
2. *"You keep returning to 'fit a positive stop'. In this lesson it changed the answer by two orders of
   magnitude. Is there any situation where friction-only holding is the right engineering choice?"*
   **Answer:** There are a few, and they are worth knowing precisely because the general rule is so
   strong that people apply it without thinking and occasionally do harm.
   **The clearest case is when a stop would over-constrain the part.** If the part's relevant surface is
   as-cast, or the feature a stop would bear on has a tolerance wider than the positioning you are trying
   to achieve, then adding a stop adds an uncontrolled input. You would be trading a friction dependency
   for a dimensional one, and the dimensional one may be worse. **A stop is only better than friction if
   the stop's position is known better than the friction is.**
   **The second is when the part must be free to move slightly.** Thermal growth during welding is the
   obvious case — L3.1.2's brazing fixtures are spring-loaded precisely so the part can expand — and
   there are machining cases too, where a part is deliberately allowed to relieve rather than being
   pinned between hard stops and stressed.
   **The third is when access forbids it.** A stop occupies space at the part's periphery, and on a part
   being profiled all the way round there may be nowhere for it to be. That is the vacuum chuck's whole
   appeal on a large plate — an unobstructed top surface — and putting stops back around the edge can
   forfeit the reason you chose vacuum.
   **The fourth, and the one I have most sympathy with, is where the side load is genuinely small and
   well characterised.** Friction is not disreputable; it is just uncertain. If you know the coefficient
   within a factor and the load is a tenth of the capacity, friction is a legitimate design.
   But I would put two conditions on all of these. **First, if you rely on friction, design at the
   coolant value** — half the dry figure — because coolant reaching the interface is the normal
   condition, not a fault. **Second, say so explicitly on the drawing and in the calculation**, because
   the failure mode of an undeclared friction dependency is that somebody later changes the surface
   finish, or the coolant, or fits a nylon pad, and removes a safety factor nobody knew existed.
   The reason the rule is stated so bluntly at Level 0 is that **the default error runs overwhelmingly in
   one direction**: designers rely on friction because it needs no extra hardware, not because they have
   reasoned about it. **Making "fit a stop" the default and requiring an argument for the exception gets
   the right answer far more often than the reverse.**

### 29. Summary
The actuation choice is rarely about force, because most methods can be made to deliver it; it is about
cycle time, consistency, failure behaviour and cost — and failure behaviour is the column that can injure
somebody and the one read last. Manual clamping is cheapest and slowest and uniquely fails in place;
pneumatic is fastest but compressible, so a pneumatic clamp behaves as a spring and may be the softest
element in a stiffness loop; hydraulic delivers roughly fifty-eight times the force of shop air for the
same bore, which becomes a 6.56× advantage in bore diameter and is why it wins whenever space is tight;
electro-mechanical is the only method offering programmable and measurable force. Vacuum and magnetic
obey different rules entirely, holding without anything projecting above the part, and both are limited
in the same way: they hold down well and resist sideways motion only by friction. In the worked example a
vacuum chuck's 5,460 N of hold-down resisted just 1,092 N sideways dry and 546 N with coolant against a
2,600 N cut, giving safety factors of 0.42 and 0.21 — and fitting a positive stop collapsed the
requirement from 32,000 N to roughly the part's 40 N weight, revealing that the original per-station
requirement was a consequence of a design choice rather than a fact about the part. The lesson's two
sizing traps are the retract stroke, where a cylinder correctly sized for extending delivered 2.0% of the
requirement — a factor of fifty — and the supply pressure, where using the nominal 7 bar instead of the
measured 5.8 would have undersized by 17%. Vacuum has an absolute ceiling of about 10.13 N/cm² set by
atmospheric pressure, magnetic force collapses non-linearly with air gap so a chip is a holding failure,
and both fail invisibly, which is why they must be sensed and interlocked rather than assumed.

### 30. Key takeaways
- **The actuation choice is about time, consistency, failure and cost — rarely about force.**
- **Read the failure behaviour column first.** It is the only one that can injure somebody.
- **Make loss of power the safe state** — spring-applied pressure-released, or electro-permanent.
- **Hydraulic gives ~58× the force of shop air for the same bore**, a 6.56× bore advantage.
- **Pneumatic usually loses on space, not on force** — 166% of the envelope here.
- **Size on the stroke that clamps.** Extend-sized on retract delivered 2.0% — a factor of fifty.
- **Measure the supply pressure at the fixture** — nominal would have undersized by 17%.
- **A pneumatic clamp is a spring** and may be the softest element in the loop.
- **Vacuum's ceiling is 10.13 N/cm² and you never reach it** — 65 of 101.3 kPa here.
- **Vacuum and magnetic hold down and resist sideways only by friction** — SF 0.42 dry, 0.21 with
  coolant.
- **The positive stop collapsed the requirement by two orders of magnitude**, and the original
  requirement was itself a consequence of not having one.
- **Magnetic force collapses with air gap** — a burr, a chip or paint is a holding failure `[MFR]`.
- **Demagnetise afterwards** or the part collects swarf for life.
- **Vacuum and magnetic fail invisibly — sense them and interlock them.**
- **State the fixture's dependency on part properties on its own drawing**, or nobody re-examines it when
  the part changes.

---

## LESSON L3.2.2 — CLASSIFICATION BY FLEXIBILITY

### 1. Lesson title
**L3.2.2 — Dedicated, modular, flexible and reconfigurable fixtures; zero-point and quick-change systems**

### 2. Learning objective
By the end of this lesson you will be able to distinguish dedicated, modular, flexible and reconfigurable
fixturing, state the accuracy and cost consequences of each, explain what a zero-point system does and
why it changes the economics of changeover, calculate the break-even between dedicated and modular
approaches, and select a flexibility level from volume, part variety and programme certainty.

### 3. Prerequisites
L2.1.3 (break-even against a cheaper option), L2.1.5 (optionality, capacity), L2.2.2 (repeatability
cannot be adjusted), L2.2.5 (changeover time), L2.2.6 (flexibility may be bought with accuracy but never
with repeatability).

### 4. Why the topic matters
**This is the axis where the biggest money decisions live**, and it is the one most often decided by
default.

```
   THE SPECTRUM

   DEDICATED        one fixture, one part
     best accuracy · fastest cycle · highest
     cost per part number · zero flexibility

   MODULAR          standard components,
                    reassembled
     good accuracy · slow to build · low cost
     per part number · high flexibility

   FLEXIBLE         one fixture, a family of
                    parts, adjustable
     compromised accuracy · fast changeover ·
     moderate cost

   RECONFIGURABLE   automatically adjusted
     accuracy varies · very fast changeover ·
     highest capital

   ┌──────────────────────────────────────────────┐
   │ THE DEFAULT IN MOST SHOPS IS DEDICATED,      │
   │ BECAUSE IT IS THE EASIEST TO DESIGN AND THE  │
   │ EASIEST TO JUSTIFY TECHNICALLY.              │
   │                                              │
   │ IT IS ALSO THE MOST EXPENSIVE ANSWER TO A    │
   │ HIGH-VARIETY, LOW-VOLUME PROBLEM — AND       │
   │ HIGH-VARIETY LOW-VOLUME IS THE MAJORITY OF   │
   │ MANUFACTURING.                               │
   └──────────────────────────────────────────────┘
```

Recall **principle 128** from Level 2: *flexibility may be bought with accuracy, but never with
repeatability.* This lesson is where that principle earns its keep.

### 5. Simple explanation

```
   THE QUESTION EACH LEVEL ANSWERS

   DEDICATED
     "We make one part, a lot of it, for years."
     → build the best possible fixture for it

   MODULAR
     "We make many different parts, a few of
      each."
     → own a KIT, build a fixture in an hour,
       take it apart afterwards

   FLEXIBLE
     "We make a FAMILY of similar parts."
     → one fixture with adjustment, changed over
       in minutes

   RECONFIGURABLE
     "We make many parts and cannot predict
      which."
     → the fixture adjusts itself under program
       control

   ┌──────────────────────────────────────────────┐
   │ AND CUTTING ACROSS ALL FOUR:                 │
   │                                              │
   │ ZERO-POINT / QUICK-CHANGE                    │
   │   "Whatever the fixture is, get it on and    │
   │    off the machine in under a minute, and    │
   │    have it land in the same place."          │
   │                                              │
   │ THIS IS NOT A FIFTH CATEGORY. IT IS AN       │
   │ INTERFACE THAT ANY OF THE FOUR CAN USE, AND  │
   │ IT CHANGES THE ECONOMICS OF ALL OF THEM.     │
   └──────────────────────────────────────────────┘
```

### 6. Engineering explanation

**THE FOUR LEVELS COMPARED**

`[PRACTICE]`

| | Dedicated | Modular | Flexible | Reconfigurable |
|---|---|---|---|---|
| **Repeatability** | **Best** — solid, no joints | Good — but every joint is a source | Moderate — adjustment interfaces | Varies with design |
| **Cost per part number** | **Highest** | **Lowest** — the kit is reused | Moderate | High capital, low marginal |
| **Build/setup time** | Weeks (design + manufacture) | **Hours** (assemble from kit) | Minutes (changeover) | **Seconds to minutes** |
| **Cycle time** | **Fastest** | Moderate | Moderate | Moderate |
| **Rigidity** | **Best** | Lower — joints and stacks | Lower | Lower |
| **Suits** | High volume, long programme | Low volume, high variety, prototypes | Part families | Unpredictable mix |
| **Fails when** | Programme is short or uncertain | Volume is high (setup repeated) | The family is too diverse | Complexity exceeds benefit |

```
   ┌──────────────────────────────────────────────┐
   │ NOTICE THAT REPEATABILITY AND FLEXIBILITY    │
   │ MOVE IN OPPOSITE DIRECTIONS ALL THE WAY      │
   │ ACROSS THE TABLE.                            │
   │                                              │
   │ THAT IS NOT A COINCIDENCE OR A FAILURE OF    │
   │ DESIGN EFFORT. EVERY ADJUSTMENT IS A JOINT,  │
   │ AND EVERY JOINT IS AN INTERFACE THAT CAN     │
   │ MOVE.                                        │
   │                                              │
   │ YOU CAN MAKE A JOINT VERY REPEATABLE — WITH  │
   │ HARDENED PINS AND HARD STOPS RATHER THAN     │
   │ CLAMPED SLOTS — BUT NOT AS REPEATABLE AS NO  │
   │ JOINT AT ALL.                                │
   └──────────────────────────────────────────────┘
```

**MODULAR FIXTURING — WHAT IT ACTUALLY IS**

```
   A KIT OF STANDARD, PRECISION COMPONENTS
   [MFR] Commercial systems exist; the component
   set and its accuracy are the manufacturer's
   specification.

   TYPICALLY
     base plates with a precise grid of holes
       (tapped and dowel, or T-slot)
     risers and spacers of graded heights
     locators, pins, V-blocks, stops
     clamps of various types
     angle plates and tombstones

   THE GRID IS THE KEY IDEA
     Every component's position is defined by the
     grid, not by measurement. A locator at
     hole (7, 4) is at a KNOWN position.

   ┌──────────────────────────────────────────────┐
   │ THE GRID CONVERTS FIXTURE BUILDING FROM A    │
   │ MACHINING PROBLEM INTO AN ASSEMBLY PROBLEM.  │
   │                                              │
   │ THAT IS THE WHOLE ADVANTAGE — AND ALSO THE   │
   │ WHOLE LIMITATION, BECAUSE POSITIONS THAT ARE │
   │ NOT ON THE GRID NEED AN ADAPTER, AND EVERY   │
   │ ADAPTER IS ANOTHER JOINT.                    │
   └──────────────────────────────────────────────┘

   WHERE MODULAR WINS DECISIVELY
     ✔ prototype and pre-production work
     ✔ spares and legacy parts
     ✔ jobbing shops with unpredictable work
     ✔ short programmes where a dedicated fixture
       would never pay back
     ✔ proving a concept before committing to a
       dedicated build

   WHERE IT LOSES
     ✗ high volume — the setup is repeated, and
       setup time is the modular system's cost
     ✗ where the highest rigidity is required
     ✗ where the part does not suit the grid
     ✗ where storage and kit discipline are poor
       — A MODULAR KIT WITH MISSING COMPONENTS IS
       WORSE THAN NO KIT
```

**THE STACK-UP PENALTY**

```
   A MODULAR FIXTURE IS A STACK OF COMPONENTS,
   AND EVERY INTERFACE CONTRIBUTES.

     base plate
       ↕ interface 1
     riser
       ↕ interface 2
     adapter
       ↕ interface 3
     locator

   Each interface has a positional tolerance and a
   repeatability. THEY STACK.

   ┌──────────────────────────────────────────────┐
   │ THE ARITHMETIC FROM LEVEL 1: worst case is   │
   │ the SUM, statistical is the RSS.             │
   │                                              │
   │ FOUR INTERFACES AT ±0.008 mm EACH:           │
   │   worst case   4 × 0.008 = 0.032 mm          │
   │   RSS          √4 × 0.008 = 0.016 mm         │
   │                                              │
   │ AGAINST A SOLID DEDICATED LOCATOR AT         │
   │ ±0.005 mm, THE MODULAR STACK IS 3.2× OR 6.4× │
   │ WORSE DEPENDING ON WHICH RULE APPLIES.       │
   │                                              │
   │ AND FOR A SETUP THAT IS BUILT, USED AND      │
   │ DISMANTLED, WORST CASE IS THE HONEST RULE —  │
   │ BECAUSE YOU GET ONE SAMPLE OF THE STACK, NOT │
   │ A POPULATION.                                │
   └──────────────────────────────────────────────┘

   THE PRACTICAL RULE  [PRACTICE]
     MINIMISE THE NUMBER OF INTERFACES BETWEEN
     THE BASE AND THE LOCATOR.

     A locator bolted straight to the base plate
     beats the same locator on a riser on an
     adapter — every time, and by more than
     people expect.
```

**FLEXIBLE FIXTURES — THE PART FAMILY QUESTION**

```
   A FLEXIBLE FIXTURE SERVES A FAMILY. THE
   DESIGN QUESTION IS: HOW WIDE IS THE FAMILY?

   ADJUSTMENT MECHANISMS, BEST TO WORST FOR
   REPEATABILITY  [PRACTICE]

   1 INTERCHANGEABLE INSERTS ON A PRECISE
     INTERFACE
       → each insert is dedicated; the interface
         is the only variable
       → BEST REPEATABILITY OF THE FLEXIBLE
         OPTIONS

   2 INDEXED POSITIONS — pins into bushed holes
       → discrete, repeatable positions
       → cannot serve a position between the
         indexed ones

   3 HARD STOPS with a clamped slide
       → repeatable to the stop
       → the stop must be reset for each variant

   4 CLAMPED SLOTS, set by measurement
       → INFINITELY ADJUSTABLE AND LEAST
         REPEATABLE
       → depends entirely on the setter

   ┌──────────────────────────────────────────────┐
   │ THE ORDER IS THE POINT. INFINITE ADJUSTMENT  │
   │ IS THE WORST OPTION FOR REPEATABILITY AND    │
   │ THE MOST COMMONLY CHOSEN, BECAUSE IT LOOKS   │
   │ LIKE THE MOST FLEXIBLE.                      │
   │                                              │
   │ IF THE FAMILY HAS SIX MEMBERS, YOU NEED SIX  │
   │ POSITIONS, NOT INFINITE ONES — AND SIX       │
   │ INDEXED POSITIONS ARE FAR MORE REPEATABLE    │
   │ THAN A SLOT.                                 │
   └──────────────────────────────────────────────┘
```

**ZERO-POINT AND QUICK-CHANGE — THE INTERFACE THAT CHANGES EVERYTHING**

```
   WHAT IT IS
     A precise, repeatable mechanical interface
     between the machine table (or pallet) and
     the fixture.

     The fixture drops on, clamps — usually
     pneumatically or hydraulically — and lands
     in a KNOWN position, repeatably, in seconds.

   [MFR] Commercial systems specify their own
   repeatability, clamping force and pull-down
   force. THOSE FIGURES MUST COME FROM THE
   MANUFACTURER.

   WHAT IT CHANGES

   BEFORE
     Fixture changeover: unbolt, lift off, lift
     on, align, indicate, bolt, re-establish the
     work offset.
     → 30-90 minutes, and a skilled person
     → AND THE OFFSET MUST BE RE-ESTABLISHED,
       which is its own error source (L1.2)

   AFTER
     Unclamp, lift off, lift on, clamp.
     → 1-3 minutes
     → AND THE OFFSET IS UNCHANGED, because the
       interface repeats

   ┌──────────────────────────────────────────────┐
   │ THE SECOND POINT IS THE BIGGER ONE AND IT IS │
   │ USUALLY UNDERSOLD.                           │
   │                                              │
   │ A ZERO-POINT SYSTEM DOES NOT JUST SAVE       │
   │ CHANGEOVER TIME. IT REMOVES THE              │
   │ RE-ESTABLISHMENT OF THE WORK OFFSET FROM THE │
   │ PROCESS ENTIRELY — WHICH REMOVES AN ERROR    │
   │ SOURCE AND A SKILL DEPENDENCY.               │
   │                                              │
   │ L1.2's MACHINE = OFFSET + WORK. IF THE       │
   │ FIXTURE ALWAYS LANDS IN THE SAME PLACE, THE  │
   │ OFFSET IS A CONSTANT.                        │
   └──────────────────────────────────────────────┘

   WHAT IT ENABLES
     ✔ off-line setup — build and prove the next
       job while the machine runs the current one
     ✔ economic small batches
     ✔ dedicated fixtures for MANY part numbers,
       because changeover is no longer the
       penalty
     ✔ a fixture proven once, trusted thereafter

   ┌──────────────────────────────────────────────┐
   │ NOTE THE THIRD ITEM. ZERO-POINT DOES NOT     │
   │ COMPETE WITH DEDICATED FIXTURING — IT        │
   │ RESCUES IT.                                  │
   │                                              │
   │ THE USUAL ARGUMENT AGAINST DEDICATED         │
   │ FIXTURES AT LOW VOLUME IS CHANGEOVER COST.   │
   │ REMOVE THAT AND A DEDICATED FIXTURE PER PART │
   │ NUMBER BECOMES VIABLE AT FAR LOWER VOLUMES.  │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Dedicated fixture** | Built for one part; not reconfigurable |
| **Modular fixturing** | A kit of standard precision components assembled per job |
| **Grid plate** | A base with a precise array of holes defining component positions |
| **Flexible fixture** | One fixture serving a family, by adjustment or inserts |
| **Reconfigurable fixture** | Adjusts under program control |
| **Zero-point system** | A repeatable quick-change interface between machine and fixture `[MFR]` |
| **Pull-down force** | The force with which a zero-point clamp seats the fixture |
| **Off-line setup** | Building and proving a setup away from the machine |
| **Changeover** | Switching a machine from one job to the next |
| **SMED** | Single-Minute Exchange of Die — the methodology of fast changeover |
| **Internal setup** | Setup work that requires the machine stopped |
| **External setup** | Setup work that can be done while the machine runs |
| **Interchangeable insert** | A dedicated component swapped into a common interface |
| **Indexed position** | A discrete, repeatable location, usually pin-and-bush |

### 8. Principle

> **REPEATABILITY AND FLEXIBILITY MOVE IN OPPOSITE DIRECTIONS**, because every adjustment is a joint and
> every joint can move.
> **MINIMISE THE INTERFACES BETWEEN THE BASE AND THE LOCATOR.** A modular stack pays for every one.
> **FOR A ONE-OFF SETUP, WORST-CASE STACKING IS THE HONEST RULE** — you get one sample, not a population.
> **IF THE FAMILY HAS SIX MEMBERS, PROVIDE SIX INDEXED POSITIONS, NOT INFINITE ADJUSTMENT.** Infinite
> adjustment is the least repeatable option and the most commonly chosen.
> **A ZERO-POINT SYSTEM REMOVES THE WORK-OFFSET RE-ESTABLISHMENT FROM THE PROCESS**, not just the
> changeover time — and that is the larger benefit.
> **ZERO-POINT RESCUES DEDICATED FIXTURING** rather than competing with it, by removing the changeover
> penalty that made dedicated uneconomic at low volume.
> **A MODULAR KIT WITH MISSING COMPONENTS IS WORSE THAN NO KIT.**

### 9. Industrial application

**Where each level actually belongs** `[PRACTICE]`

```
   A ROUGH MAP — CONFIRM AGAINST YOUR OWN
   ECONOMICS

   ┌─────────────────┬──────────────────────────┐
   │ SITUATION       │ USUAL ANSWER             │
   ├─────────────────┼──────────────────────────┤
   │ One-off, proto  │ MODULAR                  │
   │ Spares, legacy  │ MODULAR                  │
   │ Small batch,    │ MODULAR, or DEDICATED    │
   │ many part nos.  │   with ZERO-POINT        │
   │ Part family,    │ FLEXIBLE with            │
   │ predictable     │   interchangeable inserts│
   │ High volume,    │ DEDICATED                │
   │ one part        │                          │
   │ High volume,    │ DEDICATED per part, on   │
   │ several parts   │   ZERO-POINT             │
   │ Unpredictable   │ MODULAR, or              │
   │ mix             │   RECONFIGURABLE if the  │
   │                 │   volume justifies it    │
   └─────────────────┴──────────────────────────┘

   ┌──────────────────────────────────────────────┐
   │ THE ROW THAT SURPRISES PEOPLE IS "SMALL      │
   │ BATCH, MANY PART NUMBERS".                   │
   │                                              │
   │ THE INSTINCT IS MODULAR. BUT DEDICATED       │
   │ FIXTURES ON A ZERO-POINT INTERFACE CAN BEAT  │
   │ IT, BECAUSE EACH FIXTURE IS BUILT AND PROVEN │
   │ ONCE AND THEN TRUSTED FOREVER, WHILE A       │
   │ MODULAR SETUP IS REBUILT — AND RE-PROVEN —   │
   │ EVERY TIME.                                  │
   │                                              │
   │ THE DECIDING VARIABLE IS HOW OFTEN EACH PART │
   │ NUMBER RECURS.                               │
   └──────────────────────────────────────────────┘
```

**The modular kit that stopped being one** `[EX-ASSUMED]`:

```
SITUATION
  A jobbing shop bought a modular fixturing
  system. For two years it worked well.

WHAT HAPPENED OVER TIME
  - components were left in built setups rather
    than dismantled
  - some were modified — a locator faced off to
    suit a job
  - some were lost
  - the storage board emptied

THE FAILURE
  A setup that would have taken 90 minutes now
  took a day, because the components were not
  there. Setters started fabricating one-off
  parts instead — which took longer than the
  modular route and produced fixtures nobody
  could rebuild.

  THE SYSTEM WAS STILL PRESENT AND NO LONGER
  FUNCTIONED.

┌──────────────────────────────────────────────┐
│ A MODULAR SYSTEM IS NOT A PURCHASE. IT IS AN │
│ ONGOING DISCIPLINE.                          │
│                                              │
│ IT NEEDS: DISMANTLING AS A ROUTINE STEP, A   │
│ SHADOW BOARD OR EQUIVALENT, A BAN ON         │
│ MODIFYING COMPONENTS, AND PERIODIC AUDIT     │
│ AGAINST THE COMPONENT LIST.                  │
│                                              │
│ WITHOUT THOSE, THE ECONOMIC CASE THAT        │
│ JUSTIFIED IT EVAPORATES WITHIN A FEW YEARS   │
│ AND NOBODY CAN SAY EXACTLY WHEN.             │
└──────────────────────────────────────────────┘
```

### 10. Design rules
- **R1** — Choose the flexibility level from **volume, variety, recurrence and programme certainty** —
  not from habit.
- **R2** — Establish **how often each part number recurs**; it decides modular against dedicated-plus-
  zero-point.
- **R3** — **Minimise interfaces** between the base and every locator.
- **R4** — Stack modular tolerances **worst-case** for a one-off setup.
- **R5** — Where a family is finite, provide **indexed positions**, not infinite adjustment.
- **R6** — Prefer **interchangeable inserts on a precise interface** over adjustable elements.
- **R7** — Never buy flexibility with **repeatability** — accuracy yes, repeatability no (principle 128).
- **R8** — Consider a **zero-point interface on every fixture**, including dedicated ones.
- **R9** — Count the **work-offset re-establishment** as a benefit of zero-point, not just the time.
- **R10** — Separate **internal from external setup**; move everything possible off-line.
- **R11** — Treat a modular system as a **discipline**: dismantle, store, audit, forbid modification.
- **R12** — Prove a concept **modularly** before committing to a dedicated build where the design is
  uncertain.
- **R13** — State on the drawing which **interface system** a fixture is built for `[MFR]`.

### 11. Rules of thumb
- **Repeatability and flexibility move in opposite directions.**
- **Every adjustment is a joint; every joint can move.**
- **Minimise interfaces between base and locator.**
- **Worst-case stack a one-off setup — you get one sample, not a population.**
- **Six family members need six indexed positions, not a slot.**
- **Infinite adjustment is the least repeatable option and the most often chosen.**
- **Zero-point removes the offset re-establishment, not just the changeover minutes.**
- **Zero-point rescues dedicated fixturing; it does not compete with it.**
- **The deciding variable between modular and dedicated is recurrence, not volume.**
- **A modular kit with missing components is worse than no kit.**
- **Prove it modularly before you build it dedicated.**

### 12. Formulae

**Modular stack-up**
```
WORST CASE      t_total = Σ tᵢ
STATISTICAL     t_total = √(Σ tᵢ²)

[PRACTICE] FOR A SETUP BUILT ONCE, USED AND
DISMANTLED, USE WORST CASE. The statistical rule
describes a population; a single setup is one
sample of it, and you have no way to know which.
```

**Dedicated vs modular break-even**
```
Dedicated cost = C_design + C_manufacture
Modular cost   = C_setup × N_setups
                 (kit already owned)

N_be = C_dedicated / (C_setup_modular
                      − C_setup_dedicated)

where C_setup is the cost of preparing the
machine for one run of that part.
```

**Changeover value with zero-point**
```
Saving per changeover
  = (t_conventional − t_zeropoint) × rate

Annual saving = saving × changeovers per year

PLUS the error and skill benefit of not
re-establishing the offset — REAL BUT NOT
DIRECTLY MONETISED. State it separately rather
than inventing a number for it.
```

**Setup as a fraction of run time**
```
Setup fraction = t_setup / (t_setup
                            + N_batch × t_cycle)

┌──────────────────────────────────────────────┐
│ THIS IS THE NUMBER THAT DECIDES WHETHER      │
│ CHANGEOVER MATTERS.                          │
│                                              │
│ At a batch of 5,000 a 90-minute setup is     │
│ noise. At a batch of 20 it can exceed the    │
│ run time.                                    │
└──────────────────────────────────────────────┘
```

| Variable | Meaning | Unit |
|---|---|---|
| tᵢ | Tolerance of interface i | mm |
| N_be | Break-even number of setups | — |
| t_setup | Setup time | h |
| N_batch | Parts per batch | — |

### 13. Worked numerical example

**Problem:** A shop runs twelve part numbers in small batches. Compare dedicated fixtures, modular
fixturing, and dedicated fixtures on a zero-point interface. Assess the accuracy consequences and select.

```
GIVEN:
  THE WORK                                      [PROJ]
    12 part numbers
    Each runs 8 times per year, batch of 60
    → 480 parts/yr each, 5,760 total
    Cycle time (machining only) = 7.5 min
    Machine rate                = ₹1,800/h
    Machine available           = 3,600 h/yr

  REQUIRED ACCURACY                             [PROJ]
    Part positional tolerance   = 0.25 mm
    Fixture allocation at 15 %  = 0.0375 mm
      (a convention from L0.4, not a standard)

  OPTION A — DEDICATED, CONVENTIONAL MOUNTING
    Cost per fixture            = ₹95,000
    12 fixtures                 = ₹1,140,000
    Changeover time             = 55 min
    Locator repeatability       = ±0.006 mm
      (solid, one interface)      [EX-ASSUMED]

  OPTION B — MODULAR                       [EX-ASSUMED]
    Kit cost, one-off           = ₹680,000
    Setup time per run          = 145 min
    Interfaces base→locator     = 3
    Repeatability per interface = ±0.008 mm
                                      [MFR]

  OPTION C — DEDICATED ON ZERO-POINT       [EX-ASSUMED]
    Zero-point receivers on the machine
                                = ₹210,000
    Fixture cost, each (includes the mating
      pull-studs)               = ₹104,000
    12 fixtures                 = ₹1,248,000
    Changeover time             = 4 min
    Interfaces base→locator     = 1 (the
      zero-point interface)
    Zero-point repeatability    = ±0.005 mm
                                      [MFR]
    Locator repeatability       = ±0.006 mm

REQUIRED:
  (a) Setups per year and total setup time for
      each option
  (b) Annual cost of setup time
  (c) Capital cost of each option
  (d) Total cost over a 5-year programme
  (e) Repeatability of each, worst case and RSS
  (f) Assessment against the fixture allocation
  (g) Capacity check
  (h) Selection

ASSUMPTION:
  1. Repeatability figures are stated values that
     MUST be verified by study; the modular
     interface figure is a manufacturer's
     specification. [MFR]/[EX-ASSUMED]
  2. The 15 % allocation is a CONVENTION from
     L0.4, not a standard. [GUIDE]
  3. Setup times are estimates that should be
     measured; modular setup in particular varies
     enormously with the setter's familiarity.
     [EX-ASSUMED]
  4. The modular kit is assumed to remain
     complete and disciplined over 5 years. THE
     SECTION 9 CASE SHOWS THIS IS NOT AUTOMATIC
     and is arguably the weakest assumption here.
     [EX-ASSUMED]
  5. All setup is treated as INTERNAL (machine
     stopped). Off-line setup would change the
     answer substantially and is addressed in the
     conclusion. [PROJ]
  6. No allowance for the offset re-establishment
     error in options A and B, because it is not
     monetisable — but it is real and is stated
     separately. [PROJ]

FORMULA:
  Setups/yr = part numbers × runs each
  Setup cost = time × rate × setups
  Worst case = Σ tᵢ ; RSS = √(Σ tᵢ²)
  Hours = (setup + run) totals

SUBSTITUTION AND CALCULATION:

  (a) SETUPS AND SETUP TIME

      Setups per year = 12 × 8 = 96

      OPTION A  96 × 55/60  = 88.0 h/yr
      OPTION B  96 × 145/60 = 232.0 h/yr
      OPTION C  96 × 4/60   =  6.4 h/yr

      RATIO B:C = 232.0/6.4 = 36.25×

  (b) ANNUAL COST OF SETUP TIME

      A  88.0 × 1,800 = ₹158,400
      B  232.0 × 1,800 = ₹417,600
      C    6.4 × 1,800 = ₹11,520

      C vs A saving = ₹146,880/yr
      C vs B saving = ₹406,080/yr

  (c) CAPITAL

      A  ₹1,140,000
      B  ₹680,000
      C  210,000 + 1,248,000 = ₹1,458,000

      C is 2.14× B's capital.

  (d) FIVE-YEAR TOTAL COST

      A  1,140,000 + 5 × 158,400
         = 1,140,000 + 792,000
         = ₹1,932,000

      B  680,000 + 5 × 417,600
         = 680,000 + 2,088,000
         = ₹2,768,000

      C  1,458,000 + 5 × 11,520
         = 1,458,000 + 57,600
         = ₹1,515,600

      RANKING: C ₹1,515,600
               A ₹1,932,000  (+27.5 % over C)
               B ₹2,768,000  (+82.6 % over C)

      ┌────────────────────────────────────────────┐
      │ THE CHEAPEST OPTION TO BUY IS THE MOST     │
      │ EXPENSIVE TO OWN.                          │
      │                                            │
      │ MODULAR HAD THE LOWEST CAPITAL BY A WIDE   │
      │ MARGIN — ₹680,000 AGAINST ₹1,458,000 — AND │
      │ COSTS ₹1,252,400 MORE OVER FIVE YEARS,     │
      │ ENTIRELY IN SETUP TIME.                    │
      │                                            │
      │ THE DRIVER IS RECURRENCE: EACH PART NUMBER │
      │ RUNS EIGHT TIMES A YEAR, SO THE MODULAR    │
      │ SETUP IS PAID NINETY-SIX TIMES ANNUALLY    │
      │ WHILE A DEDICATED FIXTURE IS BUILT ONCE.   │
      └────────────────────────────────────────────┘

      BREAK-EVEN: at what recurrence does modular
      win?

      Modular beats C when
        680,000 + n × (145/60) × 1,800 × 5
        < 1,458,000 + n × (4/60) × 1,800 × 5
      where n = setups per year

        680,000 + 21,750n < 1,458,000 + 600n
        21,150n < 778,000
        n < 36.8 setups/yr

      ┌────────────────────────────────────────────┐
      │ BELOW ABOUT 37 SETUPS A YEAR — ROUGHLY     │
      │ THREE PER PART NUMBER — MODULAR WINS.      │
      │                                            │
      │ AT 96 SETUPS A YEAR IT LOSES BADLY.        │
      │                                            │
      │ THE VARIABLE IS RECURRENCE, NOT VOLUME AND │
      │ NOT VARIETY. TWELVE PART NUMBERS SOUNDS    │
      │ LIKE A MODULAR PROBLEM AND IS NOT.         │
      └────────────────────────────────────────────┘

  (e) REPEATABILITY

      OPTION A — dedicated, solid
        One contribution: ±0.006 mm
        Range = 0.012 mm

      OPTION B — modular, 3 interfaces + locator
        Contributions: 0.008, 0.008, 0.008, 0.006
        WORST CASE = 0.008×3 + 0.006
                   = 0.030 mm (half-range)
                   → range 0.060 mm
        RSS = √(3×0.008² + 0.006²)
            = √(0.000192 + 0.000036)
            = √0.000228
            = 0.01510 mm (half-range)
            → range 0.0302 mm

      OPTION C — zero-point + locator
        WORST CASE = 0.005 + 0.006
                   = 0.011 mm → range 0.022 mm
        RSS = √(0.005² + 0.006²)
            = √(0.000025 + 0.000036)
            = √0.000061
            = 0.00781 mm → range 0.0156 mm

      COMPARISON, worst case half-range:
        A 0.006 · C 0.011 · B 0.030
        B is 5.00× A and 2.73× C

  (f) AGAINST THE ALLOCATION

      Allocation = 0.0375 mm

      Using worst case (the honest rule for a
      one-off setup):
        A  0.006/0.0375 = 16.0 %  ✓
        C  0.011/0.0375 = 29.3 %  ✓
        B  0.030/0.0375 = 80.0 %  ⚠

      ┌────────────────────────────────────────────┐
      │ MODULAR CONSUMES 80 % OF THE FIXTURE       │
      │ ALLOCATION IN REPEATABILITY ALONE, BEFORE  │
      │ ANY POSITIONAL ERROR OF THE COMPONENTS ON  │
      │ THE GRID.                                  │
      │                                            │
      │ IT IS NOT DISQUALIFIED — IT PASSES — BUT   │
      │ THERE IS ALMOST NOTHING LEFT FOR EVERY     │
      │ OTHER FIXTURE CONTRIBUTOR.                 │
      │                                            │
      │ AND REPEATABILITY CANNOT BE ADJUSTED OUT   │
      │ (principle 102).                           │
      └────────────────────────────────────────────┘

  (g) CAPACITY CHECK

      Run time = 5,760 × 7.5/60 = 720.0 h/yr

      A  720.0 + 88.0  = 808.0 h  → 22.4 %
      B  720.0 + 232.0 = 952.0 h  → 26.4 %
      C  720.0 + 6.4   = 726.4 h  → 20.2 %

      Against 3,600 h available: ALL FIT EASILY.

      ┌────────────────────────────────────────────┐
      │ SO CAPACITY IS NOT A CONSTRAINT, AND BY    │
      │ THE L2.2.5 ARGUMENT THE SETUP TIME SAVING  │
      │ IS ONLY WORTH ITS FULL RATE IF THE FREED   │
      │ HOURS ARE USED.                            │
      │                                            │
      │ AT 22 % UTILISATION, u IS CLOSER TO 0 THAN │
      │ TO 1, AND THE ₹406,080 SAVING OF C OVER B  │
      │ MUST BE TREATED AS CONDITIONAL.            │
      │                                            │
      │ THIS IS THE SAME DISCIPLINE AS CS-01, AND  │
      │ IT CUTS AGAINST THE OPTION THE ARITHMETIC  │
      │ FAVOURS.                                   │
      └────────────────────────────────────────────┘

      BUT NOTE: setup time also consumes a
      SETTER, not only a machine. Labour is not
      released by spare machine capacity, so a
      portion of the saving is real regardless.
      THE SPLIT MUST BE ESTABLISHED WITH THE
      CUSTOMER.

  (h) SELECTION

      ON ACCURACY:  A best, C acceptable, B
        consuming 80 % of the allocation
      ON FIVE-YEAR COST: C best, A +27.5 %,
        B +82.6 %
      ON CAPITAL:   B cheapest by far
      ON CAPACITY:  no constraint — which
        weakens C's time-based advantage

      RECOMMENDATION: OPTION C, dedicated
      fixtures on a zero-point interface —
      CONDITIONAL on establishing how much of the
      setup saving is genuine labour release
      rather than idle machine hours.

      If the setter time is NOT redeployable,
      the honest comparison narrows to capital
      and accuracy, and OPTION A becomes
      competitive at ₹318,000 less capital.

      OPTION B IS NOT RECOMMENDED at this
      recurrence — but it would be the right
      answer below about 37 setups a year, and it
      remains the right answer for the shop's
      one-off and prototype work alongside C.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Setups/yr                │ 96                │
  │     Setup hours A/B/C        │ 88.0/232.0/6.4    │
  │     Ratio B:C                │ 36.25×            │
  │ (b) Setup cost A/B/C         │ ₹158,400/₹417,600/│
  │                              │ ₹11,520           │
  │ (c) Capital A/B/C            │ ₹1,140,000/       │
  │                              │ ₹680,000/         │
  │                              │ ₹1,458,000        │
  │ (d) 5-year total A/B/C       │ ₹1,932,000/       │
  │                              │ ₹2,768,000/       │
  │                              │ ₹1,515,600        │
  │     Ranking                  │ C < A (+27.5 %)   │
  │                              │ < B (+82.6 %)     │
  │     Modular break-even       │ 36.8 setups/yr    │
  │ (e) Repeatability, worst     │ A 0.006 · C 0.011 │
  │     case half-range          │ · B 0.030 mm      │
  │     B vs A                   │ 5.00×             │
  │ (f) % of allocation          │ A 16.0 · C 29.3 · │
  │                              │ B 80.0 %          │
  │ (g) Utilisation A/B/C        │ 22.4/26.4/20.2 %  │
  │                              │ NO CONSTRAINT     │
  │ (h) SELECTED                 │ C, conditional on │
  │                              │ labour release    │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  The relevant margin is the fraction of the
  fixture allocation consumed by repeatability
  alone: A 16.0 %, C 29.3 %, B 80.0 %. Option B
  leaves a factor of only 1.25 for every other
  fixture contributor combined, which is not a
  margin in any useful sense.

PASS/FAIL:
  ✓ PASS — A and C on accuracy, with margin
  ⚠ MARGINAL — B at 80 % of the allocation in
    repeatability alone
  ✓ PASS — all three on capacity
  ✗ FAIL — B on five-year cost at this recurrence,
    +82.6 % over C
  ⚠ CONDITIONAL — C's advantage depends on the
    setup saving being genuine labour release

ENGINEERING CONCLUSION:
  1. THE CHEAPEST OPTION TO BUY WAS THE MOST
     EXPENSIVE TO OWN, BY A LARGE MARGIN.
     Modular had the lowest capital — ₹680,000
     against ₹1,458,000 — and cost ₹1,252,400 more
     over five years, all of it in setup time. The
     mechanism is recurrence: each part number
     runs eight times a year, so the modular setup
     is paid ninety-six times annually while a
     dedicated fixture is built once and used
     ninety-six times. TWELVE PART NUMBERS IN
     SMALL BATCHES SOUNDS LIKE THE TEXTBOOK CASE
     FOR MODULAR, AND IT IS NOT. The break-even
     was 36.8 setups a year and the shop runs 96.

  2. THE DECIDING VARIABLE IS RECURRENCE, WHICH IS
     NEITHER VOLUME NOR VARIETY.
     A shop with twelve part numbers running once
     a year each — twelve setups — should buy
     modular. The same twelve part numbers running
     eight times each should not. THE ANNUAL
     VOLUME IS IDENTICAL IN BOTH CASES AND THE
     VARIETY IS IDENTICAL. Only the recurrence
     differs, and it reverses the answer. I would
     ask for the recurrence figure before anything
     else on a flexibility question, and I would
     be suspicious of any recommendation made
     without it.

  3. THE MODULAR STACK CONSUMED 80 % OF THE
     ALLOCATION BEFORE CONTRIBUTING ANY POSITIONAL
     ERROR.
     Three interfaces at ±0.008 plus a locator at
     ±0.006 gives ±0.030 worst case — five times
     the dedicated fixture's ±0.006. And worst
     case is the right rule here, because a
     modular setup is built, used and dismantled:
     you get ONE SAMPLE of the stack, not a
     population, so the statistical rule describes
     a distribution you never draw from twice.
     THE PRACTICAL DESIGN RESPONSE IS TO MINIMISE
     INTERFACES — a locator bolted straight to the
     grid plate rather than onto a riser onto an
     adapter — and the difference is larger than
     people expect.

  4. THE CAPACITY CHECK CUT AGAINST THE WINNING
     OPTION, AND I WOULD SAY SO.
     At 20-26 % utilisation there is no capacity
     constraint, so by the L2.2.5 argument the
     setup hours released are worth their full
     rate only if they are used. That weakens
     Option C's ₹406,080 annual advantage over
     modular considerably. The honest distinction
     here is that SETUP TIME CONSUMES A SETTER AS
     WELL AS A MACHINE, and setter time is not
     released by spare machine capacity — so some
     of the saving survives the objection and some
     does not. THE SPLIT IS A QUESTION FOR THE
     CUSTOMER, NOT AN ASSUMPTION FOR ME, and I
     would present it that way rather than
     claiming the full figure.

  5. THE ANSWER IS NOT EXCLUSIVE, AND THAT IS
     WORTH SAYING.
     Recommending dedicated-on-zero-point for the
     twelve recurring part numbers does not mean
     the shop should not own a modular kit. It
     should — for the one-offs, the prototypes,
     the spares and the proving of new designs
     before committing to a dedicated build. THE
     TWO ARE COMPLEMENTARY, and framing the
     question as A-or-B is itself an error. What
     the arithmetic settles is which route the
     RECURRING work should take.

SENSITIVITY NOTE:
  Ranked by influence:
    1. RECURRENCE — break-even at 36.8 setups a
       year against an actual 96. The single
       variable that reverses the recommendation,
       and the one most likely to be estimated
       rather than measured.
    2. MODULAR SETUP TIME — 145 minutes assumed.
       It varies enormously with the setter's
       familiarity and with kit completeness. At
       90 minutes the break-even moves to about
       62 setups a year and modular becomes far
       more competitive.
    3. WHETHER THE SETUP SAVING IS REAL LABOUR
       RELEASE — determines whether C's advantage
       is ₹406,080 or a fraction of it.
    4. KIT DISCIPLINE OVER FIVE YEARS — the
       section 9 case shows this is not automatic.
       A degraded kit invalidates the modular case
       entirely and invisibly. THE WEAKEST
       ASSUMPTION IN THE ANALYSIS.
    5. INTERFACE REPEATABILITY FIGURES — ±0.008
       from the manufacturer. At ±0.012 the
       modular stack would consume 114 % of the
       allocation and fail outright.
```

### 14. Engineering assumptions
- Repeatability figures are stated values that **must be verified by study**; the modular interface
  figure is a manufacturer's specification `[MFR]` `[EX-ASSUMED]`.
- The 15% allocation is a **convention from L0.4, not a standard** `[GUIDE]`.
- Setup times are estimates that should be measured; **modular setup varies enormously with the setter's
  familiarity** `[EX-ASSUMED]`.
- The modular kit is assumed to remain complete and disciplined over five years — **the section 9 case
  shows this is not automatic, and it is the weakest assumption here** `[EX-ASSUMED]`.
- All setup treated as **internal**; off-line setup would change the answer substantially `[PROJ]`.
- **No allowance for offset re-establishment error** in options A and B because it is not monetisable —
  real, and stated separately `[PROJ]`.

### 15. Diagram

```
     CLASSIFICATION BY FLEXIBILITY
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE SPECTRUM, AND WHAT MOVES WITH IT

   DEDICATED ──── MODULAR ──── FLEXIBLE ──── RECONFIG.

   repeatability  BEST ──────────────────────► worst
   flexibility    worst ─────────────────────► BEST
   cost/part no.  worst ─────────────────────► best
   build time     weeks ── hours ── min ──── seconds
   rigidity       BEST ──────────────────────► worst

   ┌──────────────────────────────────────────────┐
   │ REPEATABILITY AND FLEXIBILITY MOVE IN        │
   │ OPPOSITE DIRECTIONS ALL THE WAY ACROSS.      │
   │                                              │
   │ NOT A FAILURE OF DESIGN EFFORT: EVERY        │
   │ ADJUSTMENT IS A JOINT AND EVERY JOINT CAN    │
   │ MOVE.                                        │
   │                                              │
   │ Principle 128: FLEXIBILITY MAY BE BOUGHT     │
   │ WITH ACCURACY, BUT NEVER WITH REPEATABILITY. │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE MODULAR STACK PENALTY

   DEDICATED           MODULAR
   ┌──────────┐        ┌──────────┐ locator
   │ locator  │        ├──────────┤ ↕ ±0.008
   ├──────────┤        │ adapter  │
   │          │        ├──────────┤ ↕ ±0.008
   │   BASE   │        │  riser   │
   │          │        ├──────────┤ ↕ ±0.008
   └──────────┘        │   BASE   │
                       └──────────┘
   ONE contribution    THREE + the locator
   ±0.006              worst case ±0.030

   ████ 0.006                    A
   ███████ 0.011                 C (zero-point)
   ████████████████████ 0.030    B (modular)

   B is 5.00× A

   ┌──────────────────────────────────────────────┐
   │ AND WORST CASE IS THE HONEST RULE HERE.      │
   │                                              │
   │ A MODULAR SETUP IS BUILT, USED AND           │
   │ DISMANTLED. YOU GET ONE SAMPLE OF THE STACK, │
   │ NOT A POPULATION — SO THE STATISTICAL RULE   │
   │ DESCRIBES A DISTRIBUTION YOU NEVER DRAW FROM │
   │ TWICE.                                       │
   │                                              │
   │ MINIMISE INTERFACES BETWEEN BASE AND         │
   │ LOCATOR.                                     │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  ADJUSTMENT MECHANISMS — BEST TO WORST

   1 interchangeable INSERTS on a precise
     interface              ████████████ best
   2 INDEXED positions, pin and bush
                            █████████
   3 HARD STOPS with a clamped slide
                            █████
   4 CLAMPED SLOTS set by measurement
                            ██ worst

   ┌──────────────────────────────────────────────┐
   │ INFINITE ADJUSTMENT IS THE LEAST REPEATABLE  │
   │ OPTION AND THE MOST COMMONLY CHOSEN, BECAUSE │
   │ IT LOOKS LIKE THE MOST FLEXIBLE.             │
   │                                              │
   │ IF THE FAMILY HAS SIX MEMBERS, YOU NEED SIX  │
   │ POSITIONS — NOT INFINITE ONES.               │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  ZERO-POINT — WHAT IT ACTUALLY REMOVES

   CONVENTIONAL CHANGEOVER
     unbolt · lift off · lift on · align ·
     INDICATE · bolt · RE-ESTABLISH THE OFFSET
     55 min  ████████████████████████████

   ZERO-POINT
     unclamp · lift off · lift on · clamp
      4 min  ██

   ┌──────────────────────────────────────────────┐
   │ THE TIME IS THE OBVIOUS BENEFIT. THE LARGER  │
   │ ONE IS THAT THE WORK OFFSET IS NEVER         │
   │ RE-ESTABLISHED.                              │
   │                                              │
   │ L1.2: MACHINE = OFFSET + WORK. IF THE        │
   │ FIXTURE ALWAYS LANDS IN THE SAME PLACE, THE  │
   │ OFFSET IS A CONSTANT — SO AN ERROR SOURCE    │
   │ AND A SKILL DEPENDENCY BOTH DISAPPEAR.       │
   │                                              │
   │ AND NOTE: ZERO-POINT RESCUES DEDICATED       │
   │ FIXTURING RATHER THAN COMPETING WITH IT, BY  │
   │ REMOVING THE CHANGEOVER PENALTY THAT MADE    │
   │ DEDICATED UNECONOMIC AT LOW VOLUME.          │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE WORKED RESULT — CHEAPEST TO BUY, DEAREST TO
  OWN

   CAPITAL
     B modular    ████████ ₹680,000    ◄ cheapest
     A dedicated  █████████████ ₹1,140,000
     C zero-point ████████████████ ₹1,458,000

   FIVE-YEAR TOTAL
     C zero-point ████████████████ ₹1,515,600 ◄ best
     A dedicated  ████████████████████ ₹1,932,000
     B modular    █████████████████████████████
                                    ₹2,768,000

   B costs ₹1,252,400 MORE over five years —
   ALL OF IT IN SETUP TIME.

   ┌──────────────────────────────────────────────┐
   │ THE DRIVER IS RECURRENCE.                    │
   │                                              │
   │ 96 setups a year. Modular pays its setup 96  │
   │ times; a dedicated fixture is built once and │
   │ used 96 times.                               │
   │                                              │
   │ BREAK-EVEN: 36.8 SETUPS A YEAR.              │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE VARIABLE NOBODY ASKS FOR

   SAME 12 PART NUMBERS · SAME ANNUAL VOLUME
   · SAME VARIETY

   running 1× each  → 12 setups → MODULAR WINS
   running 8× each  → 96 setups → MODULAR LOSES
                                  BADLY

   ┌──────────────────────────────────────────────┐
   │ RECURRENCE IS NEITHER VOLUME NOR VARIETY,    │
   │ AND IT REVERSES THE ANSWER.                  │
   │                                              │
   │ ASK FOR IT BEFORE ANYTHING ELSE ON A         │
   │ FLEXIBILITY QUESTION.                        │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  AND THE CAPACITY CHECK CUT THE OTHER WAY

   utilisation A 22.4 % · B 26.4 % · C 20.2 %
   ██████░░░░░░░░░░░░░░░░░░░░░░░░

   NO CAPACITY CONSTRAINT → by L2.2.5, released
   hours are worth their full rate only if used.

   ┌──────────────────────────────────────────────┐
   │ BUT SETUP CONSUMES A SETTER AS WELL AS A     │
   │ MACHINE, AND SETTER TIME IS NOT RELEASED BY  │
   │ SPARE MACHINE CAPACITY.                      │
   │                                              │
   │ SOME OF THE SAVING SURVIVES THE OBJECTION    │
   │ AND SOME DOES NOT. THE SPLIT IS A QUESTION   │
   │ FOR THE CUSTOMER, NOT AN ASSUMPTION FOR THE  │
   │ ENGINEER.                                    │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-7700 — DEDICATED, ZERO-POINT MOUNTED
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: THIS FIXTURE MOUNTS ON [SYSTEM
        DESIGNATION] ZERO-POINT RECEIVERS AT THE
        PITCH SHOWN. PULL-STUDS ITEMS 21-24 ARE
        SYSTEM COMPONENTS — DO NOT SUBSTITUTE.

NOTE 2: THE WORK OFFSET FOR THIS FIXTURE IS
        RECORDED IN THE SETUP SHEET AND IS
        CONSTANT. IT SHALL NOT BE RE-ESTABLISHED
        AT EACH CHANGEOVER. IF THE OFFSET APPEARS
        WRONG, THE INTERFACE IS DAMAGED OR
        CONTAMINATED — INVESTIGATE, DO NOT
        RE-ZERO.

NOTE 3: RECEIVER SEATING FACES SHALL BE CLEAN AND
        FREE OF CHIPS BEFORE MOUNTING. SEE THE
        CLEANING PROCEDURE ON SHEET 2.

NOTE 4: LOCATOR ITEM 5 MOUNTS DIRECTLY TO THE
        BASE. DO NOT INTRODUCE SPACERS OR SHIMS —
        EVERY ADDED INTERFACE DEGRADES
        REPEATABILITY.
```

`[PRACTICE]` **Note 2 is the one that protects the entire benefit of the system.** The natural reaction
to an unexpected reading is to re-zero, and re-zeroing a zero-point fixture throws away exactly the
property that was bought — and hides the damage or contamination that caused the discrepancy. **The note
must tell the operator what the symptom means, not just what not to do.**

### 17. CAD workflow
1. Determine the **flexibility level from recurrence** before modelling anything
2. If modular, **model the actual kit components** `[MFR]`, not generic blocks — the grid constrains
   positions
3. **Count the interfaces** from base to each locator and minimise them
4. Build the **repeatability stack** as a documented calculation alongside the model
5. If flexible, model **every family member** in the same fixture and check all of them
6. Prefer **interchangeable inserts** and model the interface once, the inserts separately
7. If zero-point, model the **receiver pitch and pull-stud positions** to the system specification
   `[MFR]`
8. Model the **fixture off the machine** — storage, handling points, lifting

`[PRACTICE]` Step 8 matters more for quick-change fixtures than for bolted ones, because they get moved
constantly. **A fixture with nowhere to lift it and nowhere to stand it will be dropped**, and a dropped
zero-point fixture is a damaged interface.

### 18. GD&T application

```
  THE INTERFACE IS THE DATUM CHAIN

  STANDARD: ASME Y14.5-2018

  ┌────────────────────────────────────────────┐
  │ ON A DEDICATED FIXTURE, THE LOCATORS ARE   │
  │ DIMENSIONED FROM THE FIXTURE'S OWN DATUMS. │
  │ ONE CHAIN.                                 │
  │                                            │
  │ ON A MODULAR FIXTURE, THE CHAIN RUNS:      │
  │   machine table → grid plate → riser →     │
  │   adapter → locator                        │
  │                                            │
  │ EVERY LINK CARRIES A TOLERANCE, AND THE    │
  │ CHAIN IS ASSEMBLED FRESH EACH TIME.        │
  └────────────────────────────────────────────┘

  WHAT TO TOLERANCE, BY LEVEL

  DEDICATED
    → locator positions to the fixture datums
    → the mounting interface to the same datums

  MODULAR
    → THE GRID ITSELF is the controlled feature
    → component positions are stated as GRID
      COORDINATES, not dimensions
    → and the SETUP DOCUMENTATION becomes part
      of the dimensional control, because the
      fixture does not exist between jobs

  ZERO-POINT
    → the pull-stud positions are toleranced to
      the system specification [MFR]
    → THE INTERFACE IS A DATUM FEATURE, and it
      should be treated as one on the drawing
    → its cleanliness becomes a dimensional
      requirement, not housekeeping

  ┌────────────────────────────────────────────┐
  │ THE MODULAR CASE IS THE ODD ONE: PART OF   │
  │ THE DIMENSIONAL CONTROL LIVES IN A          │
  │ DOCUMENT RATHER THAN IN HARDWARE.          │
  │                                            │
  │ IF THE SETUP SHEET IS WRONG OR MISSING,    │
  │ THE FIXTURE CANNOT BE REBUILT CORRECTLY —  │
  │ AND UNLIKE A DEDICATED FIXTURE, THERE IS   │
  │ NOTHING TO MEASURE TO FIND OUT.            │
  └────────────────────────────────────────────┘
```

### 19. Manufacturing method
| Level | Practice `[PRACTICE]` |
|---|---|
| **Dedicated** | Conventional: machine soft, harden locators, grind (L0.5.3) |
| **Modular** | Bought as a system `[MFR]`; **never modify a component** — it stops being a system component |
| **Grid plates** | Jig-bored or precision-machined; the grid accuracy is the system's foundation |
| **Flexible** | Interchangeable inserts machined together where possible, so they share a setup |
| **Zero-point receivers** | Installed and then **qualified in place**; the installed accuracy is what matters `[MFR]` |
| **Handling** | Lifting points, storage stands and protection for the interface faces |

> **"Qualified in place"** is the important one for zero-point systems. `[PRACTICE]` The receivers'
> as-installed positions are what the fixtures will repeat to, not their nominal pitch. **Qualify them
> after installation, record the result, and treat that record as the machine's own specification** —
> because every fixture built for that machine inherits it.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Dedicated locator positions | CMM | Per drawing |
| Grid plate accuracy | CMM, sample of holes | Per system spec `[MFR]` |
| Modular setup, as built | Measure the **assembled** setup, not the components | Per the setup sheet |
| Repeatability of a modular rebuild | Build, measure, dismantle, rebuild, measure — **≥5 cycles** | Within allocation |
| Zero-point repeatability | Mount, measure, remove, remount — **≥10 cycles** | Per system spec `[MFR]` |
| Receiver installed positions | CMM after installation | Recorded as the machine's spec |
| Interface cleanliness | Visual and seating check | Clean, fully seated |
| Family coverage, flexible fixture | Load **every** family member | All locate correctly |
| Kit completeness | Audit against the component list | Complete |

`[PRACTICE]` **The rebuild repeatability test is the one that tells the truth about modular fixturing**,
and it is almost never done. Measuring one assembled setup tells you nothing about the next one, and the
next one is what the second batch will be made on.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Choosing the flexibility level by **habit** | Dedicated everywhere, or modular everywhere |
| 2 | Not establishing **recurrence** | The variable that reverses the answer is unknown |
| 3 | Comparing on **capital** rather than five-year cost | Cheapest to buy, dearest to own |
| 4 | **Statistically** stacking a one-off modular setup | Understates by ~2× |
| 5 | Stacking through **unnecessary interfaces** | Riser on adapter on riser |
| 6 | **Infinite adjustment** where a finite family exists | Least repeatable option chosen |
| 7 | Buying flexibility with **repeatability** | Principle 128 violated; cannot be recovered |
| 8 | Treating zero-point as a **competitor** to dedicated | Misses that it rescues dedicated |
| 9 | **Re-zeroing** a zero-point fixture | Throws away the benefit and hides the fault |
| 10 | Not treating a modular kit as a **discipline** | It degrades invisibly over years |
| 11 | **Modifying** a modular component | It stops being a system component |
| 12 | Measuring modular **components** instead of the **assembled setup** | The stack is never verified |
| 13 | Never testing **rebuild** repeatability | The next build is unverified |
| 14 | Losing the **setup sheet** | A modular fixture cannot be reconstructed and cannot be measured |
| 15 | No **lifting points or storage** on a quick-change fixture | It gets dropped; the interface is damaged |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Parts differ between batches | Modular rebuild variation | Rebuild repeatability test | Reduce interfaces; index positions | Design rule R3 |
| Offset wrong after changeover | Zero-point interface contaminated or damaged | Inspect and clean the seating faces | Clean; re-qualify if damaged | Drawing Note 2 and 3 |
| Setup takes far longer than planned | Kit incomplete | Audit against the list | Replenish | Shadow board and audit |
| Flexible fixture fails on one variant | Family too wide | Load every member | Split the family, or use inserts | Model all members |
| Repeatability worse than predicted | Too many interfaces | Count them; measure the stack | Mount locators directly | Minimise interfaces |
| Fixture cannot be rebuilt | Setup sheet missing | — | Reconstruct and document | Setup sheet as a controlled document |
| Zero-point fixture will not seat | Chip on the receiver | Inspect | Clean | Cleaning step in the procedure |
| Modular component does not fit | It was modified | Compare against the catalogue `[MFR]` | Replace | Ban modification |
| Dedicated fixture obsolete | Programme ended early | — | — | Establish programme length (L2.1.3) |

### 23. Design checklist
- [ ] Is the **recurrence** of each part number known?
- [ ] Has the choice been made on **five-year cost**, not capital?
- [ ] Have **all four levels** been considered, including dedicated-on-zero-point?
- [ ] Is the number of **interfaces from base to locator** minimised and counted?
- [ ] Has the repeatability stack been calculated **worst case** for a rebuilt setup?
- [ ] Does the stack fit within the **fixture allocation** with room for other contributors?
- [ ] If flexible: is the family **finite**, and are positions **indexed** rather than infinitely
  adjustable?
- [ ] Are **interchangeable inserts** used in preference to adjustable elements?
- [ ] Is a **zero-point interface** justified — including its offset benefit?
- [ ] Is the drawing note forbidding **re-zeroing** present?
- [ ] For modular: is there a **kit discipline** — dismantle, store, audit, no modification?
- [ ] Is the **setup sheet** a controlled document?
- [ ] Has **rebuild repeatability** been tested, not just a single build?
- [ ] Are there **lifting points and storage** for a quick-change fixture?
- [ ] Has **off-line setup** been considered — internal versus external?

### 24. Beginner exercise
**E3.2.2-B** — Answer with reasons and calculations:
(a) State the four flexibility levels and give one situation where each is the right answer.
(b) A modular setup has interfaces of ±0.007, ±0.007 and ±0.009 mm plus a locator at ±0.005 mm. Calculate
the worst-case and RSS half-range.
(c) State which rule is correct for a setup that is built, used and dismantled, and why.
(d) A dedicated fixture achieves ±0.006 mm. Express the modular stack from (b) as a multiple of it, using
the correct rule.
(e) State the two benefits of a zero-point system and say which is usually undersold.
(f) A part family has five members. State the best and worst adjustment mechanisms for repeatability.

### 25. Intermediate exercise
**E3.2.2-I** — A shop runs 8 part numbers, each 5 times a year in batches of 90. Machining cycle is
6.0 min; the rate is ₹1,750/h; the machine has 3,400 h available. Dedicated fixtures cost ₹88,000 each
with a 48-minute changeover. A modular kit costs ₹560,000 with a 130-minute setup. Zero-point receivers
cost ₹190,000 and add ₹9,000 to each dedicated fixture, giving a 5-minute changeover. The part tolerance
is 0.20 mm with a 15% fixture allocation. Modular interfaces are ±0.008 mm (3 of them); locators are
±0.006 mm; zero-point repeatability is ±0.005 mm.
(a) Calculate setups per year and setup hours for each option.
(b) Calculate capital and four-year total cost for each.
(c) Calculate the worst-case repeatability of each and express it as a percentage of the allocation.
(d) Calculate the recurrence at which modular becomes the cheapest over four years.
(e) Perform the capacity check and state what it implies about the value of the setup saving.
(f) State your recommendation and the assumption it most depends on.
(g) State what you would recommend the shop own **in addition** to your chosen option, and why.

### 26. Advanced exercise
**E3.2.2-A** — A contract machining business has 40 active part numbers with widely varying recurrence:
6 parts run monthly in batches of 200; 12 parts run quarterly in batches of 50; 22 parts run once or
twice a year in batches of 10 to 25. Machining cycles range from 3 to 22 minutes. Two identical VMCs are
available, each with 3,600 h/yr, currently at 71% utilisation. The rate is ₹1,800/h. `[EX-ASSUMED]` State
all assumptions.
(i) Segment the 40 part numbers by recurrence and state which flexibility level each segment should use,
with the reasoning.
(ii) Calculate the annual setup burden of a single-strategy approach (all modular, and all dedicated) and
compare with your segmented approach.
(iii) Determine the capital required for your segmented approach.
(iv) Assess whether a zero-point system is justified, and whether it should be fitted to one machine or
both.
(v) Explain how off-line setup changes the analysis, and quantify its effect on the highest-recurrence
segment.
(vi) Determine the repeatability achievable in each segment and identify any segment where the tolerance
demands would force a different choice.
(vii) Perform the capacity check and state the effect of utilisation on the value of setup savings.
(viii) Design the kit discipline required to keep the modular segment viable over five years.
(ix) Identify which of the twenty-four auto-fail items this application most invites.
(x) Present your recommendation as a one-page summary, in hours and rupees, stating the three assumptions
it most depends on.

### 27. Interview questions
1. *"When would you recommend modular fixturing over dedicated?"*
   **Answer:** The deciding variable is recurrence — how many times a year each part number is set up —
   and it is neither volume nor variety, which is what people usually reach for. In the case we worked,
   twelve part numbers running eight times a year each gave ninety-six setups, and modular lost badly: it
   had the lowest capital by a wide margin, six hundred and eighty thousand against one and a half
   million, and cost about one and a quarter million more over five years, all of it in setup time. The
   break-even was about thirty-seven setups a year. The same twelve part numbers running once each — same
   annual volume, same variety — would have made modular the right answer. So I would ask for the
   recurrence before anything else. Modular wins decisively on genuine one-offs, prototypes, spares,
   legacy parts, and for proving a concept before committing to a dedicated build. It also has a real
   accuracy cost that people forget: every interface in the stack contributes, and for a setup that is
   built, used and dismantled you have to stack worst case rather than statistically, because you get one
   sample of that stack and not a population. Three interfaces plus a locator came to five times the
   dedicated fixture's repeatability.
2. *"What does a zero-point system actually buy you?"*
   **Answer:** Two things, and the second is usually undersold. The obvious one is changeover time —
   fifty-five minutes down to four in the example, because you unclamp, lift off, lift on and clamp,
   instead of unbolting, aligning, indicating and bolting. The less obvious one is that the work offset
   is never re-established. The fixture lands in the same place every time, so the offset is a constant
   that lives in the setup sheet. That removes an error source and a skill dependency from the process
   entirely, and it is worth more than the minutes on a shop where the setter's experience varies. The
   thing I would emphasise is that zero-point does not compete with dedicated fixturing — it rescues it.
   The usual argument against a dedicated fixture per part number at low volume is that the changeover
   cost eats the benefit. Remove the changeover cost and dedicated fixtures become viable at far lower
   volumes, and each one is built and proven once and then trusted forever, where a modular setup is
   rebuilt and re-proven every time. One caution: the drawing must forbid re-zeroing, because if
   something reads wrong the natural reaction is to re-zero, and that throws away the property you paid
   for and hides whatever damage or contamination caused the reading.

### 28. Expert questions
1. *"You say worst-case stacking is right for a modular setup. Defend that against the argument that
   worst case is always over-conservative."*
   **Answer:** The general criticism of worst-case stacking is fair and I would normally accept it. It
   assumes every contributor sits at its extreme simultaneously and in the same direction, which for a
   population of assembled parts is vanishingly unlikely — that is why RSS exists and why it usually
   gives a more useful number.
   **But the argument for RSS is a statement about a population, and a modular setup is not one.**
   When you build a fixture from a kit, use it for a batch, and dismantle it, you have drawn **one
   sample** from the distribution of possible builds. Every part in that batch is made on that one
   sample. If the build happened to land at 0.026 mm rather than the RSS-predicted 0.015, **every part in
   the batch inherits 0.026**, and there is no averaging anywhere in the process to rescue you. The next
   build is a different sample, so you get batch-to-batch variation that looks like a mystery.
   Contrast that with a dedicated fixture, where the tolerances were consumed once during manufacture and
   then **measured**. You do not care what the stack theoretically was; you know what the fixture
   actually is. **The stack-up was a design tool, and the CMM report replaced it.** A modular setup never
   gets that replacement unless somebody measures the assembled setup — which section 20 recommends and
   almost nobody does.
   So my position is more precise than "worst case for modular". It is: **use worst case when you will
   experience a single realisation of the stack and cannot measure it.** That covers modular setups, and
   it also covers a one-off dedicated fixture that will not be inspected, and it does not cover a
   production run of a toleranced assembly.
   And there is a practical asymmetry that pushes the same way. **The cost of being wrong is
   asymmetric.** If I stack worst case and the build is better than predicted, I have specified slightly
   more fixture than needed. If I stack RSS and the build lands in the tail, I make a batch of scrap and
   I have no way of knowing in advance which build it was. **Given that the analysis is cheap and the
   failure is expensive and undetectable, the conservative rule is the correct engineering choice** —
   not because worst case is more accurate, but because it is the rule that matches how the fixture is
   actually used.
   The honest middle path, which I would propose if the worst-case number failed the allocation, is to
   **measure the assembled setup each time it is built.** That converts modular back into the dedicated
   situation — you know what you have rather than predicting it — at the cost of a measurement per setup.
   Whether that is worth doing is an economic question, and it is a much better question than arguing
   about the stacking rule.
2. *"Reconfigurable fixturing has been promised for decades and is still rare. Why?"*
   **Answer:** I think there are four reasons, and they are worth separating because only one of them is
   likely to change.
   **The first is that the accuracy penalty is structural.** A reconfigurable fixture is, by definition,
   a mechanism — actuators, guides, locks — and every one of those is a joint. Principle 128 applies with
   full force: you can buy flexibility with accuracy, but the repeatability cost is not recoverable by
   engineering effort, only reduced. **A fixture that can move to any position is a fixture whose
   position is a variable**, and variables have tolerances. The best reconfigurable systems address this
   by locking positively into discrete indexed positions rather than servoing to arbitrary ones — which
   is really the "six indexed positions, not a slot" rule at a larger scale, and it means the system is
   less flexible than the concept promised.
   **The second is that the economics rarely close.** Reconfigurable systems carry very high capital and
   very low marginal cost per part number, so they need a large number of part numbers **with high
   recurrence** to pay back — and that combination is unusual. High recurrence with few part numbers
   favours dedicated; low recurrence with many favours modular. **Reconfigurable needs the corner of the
   space where both are high, and most businesses that reach that corner have already found a reason to
   simplify their part mix.**
   **The third is complexity failure.** A reconfigurable fixture has more to go wrong than the two
   fixtures it replaces, and it goes wrong in the middle of production rather than at setup. **A
   dedicated fixture fails by wearing; a mechanism fails by stopping.** Maintenance departments know
   this, and the resistance is well founded rather than conservative.
   **The fourth, and the one I find most interesting, is that the problem got solved from a different
   direction.** Zero-point interfaces plus cheap dedicated fixtures deliver much of what reconfigurable
   promised — fast changeover, many part numbers, no re-establishment of offsets — with **none of the
   mechanism risk and none of the accuracy penalty.** The changeover is four minutes instead of forty
   seconds, which for most shops is the difference between "not a constraint" and "not a constraint".
   **The marginal benefit of going further is small and the marginal risk is large.**
   Where I do expect reconfigurable to make sense is where the part mix genuinely cannot be predicted and
   the volumes are high — some aerospace and some large-part work — and where **the reconfiguration is
   coarse rather than fine**: swapping modules under program control while the precision locating remains
   in dedicated inserts. **That is a hybrid, and hybrids are usually what actually gets built when a pure
   concept has been promised for thirty years.**

### 29. Summary
Flexibility is the axis where the largest money decisions live and the one most often settled by default.
The four levels — dedicated, modular, flexible and reconfigurable — trade repeatability against
flexibility all the way across, and not through any failure of design effort: every adjustment is a joint
and every joint can move, which is principle 128 made concrete. Modular fixturing converts fixture
building from a machining problem into an assembly problem by defining component positions on a precise
grid, and it wins decisively for prototypes, spares, jobbing work and short programmes — but it pays a
stack-up penalty at every interface, and for a setup that is built, used and dismantled the honest rule is
worst case rather than RSS, because you experience one sample of the stack rather than a population. In
the worked comparison a three-interface modular stack reached ±0.030 mm against a dedicated fixture's
±0.006 — five times worse, consuming 80% of the fixture allocation in repeatability alone. The economic
result was sharper still: modular had by far the lowest capital at ₹680,000 against ₹1,458,000 and cost
₹1,252,400 more over five years, entirely in setup time, because the deciding variable is recurrence
rather than volume or variety — ninety-six setups a year against a break-even of 36.8. Zero-point
interfaces cut across all four levels, reducing changeover from 55 minutes to 4 and, more importantly,
removing the re-establishment of the work offset from the process altogether, so that the offset becomes
a constant and an error source and a skill dependency both disappear. That is why zero-point rescues
dedicated fixturing rather than competing with it. Finally the capacity check cut against the winning
option, at 20–26% utilisation, and the honest response was to separate machine hours from setter hours
rather than claim the full saving.

### 30. Key takeaways
- **Repeatability and flexibility move in opposite directions** — every adjustment is a joint.
- **The deciding variable is recurrence**, not volume and not variety. It reversed the answer here.
- **Compare on five-year cost, not capital.** The cheapest to buy cost ₹1,252,400 more to own.
- **Break-even was 36.8 setups a year** against an actual 96.
- **Minimise interfaces between base and locator** — three plus a locator was 5.00× a solid fixture.
- **Worst-case stack a rebuilt setup** — one sample, not a population, and nothing averages it out.
- **The modular stack consumed 80% of the allocation in repeatability alone**, before any positional
  error.
- **Six family members need six indexed positions, not infinite adjustment** — the least repeatable
  option is the most often chosen.
- **Prefer interchangeable inserts on a precise interface** over adjustable elements.
- **Zero-point removes the offset re-establishment, not just the minutes** — that is the larger benefit.
- **Zero-point rescues dedicated fixturing** rather than competing with it.
- **Never re-zero a zero-point fixture** — it hides the fault and discards the benefit.
- **A modular kit is a discipline, not a purchase**, and it degrades invisibly.
- **Measure the assembled setup and test rebuild repeatability** — measuring components proves nothing.
- **The answer is not exclusive**: own a modular kit for one-offs even when dedicated wins the recurring
  work.

---

## LESSON L3.2.3 — CLASSIFICATION BY PART COUNT AND AXES

### 1. Lesson title
**L3.2.3 — Single-component, multi-component, tombstone, rotary, 4th-axis, 5-axis and palletised
fixtures**

### 2. Learning objective
By the end of this lesson you will be able to calculate the true productivity effect of multi-part
fixturing, explain why the gain is smaller than it first appears and where the real gain comes from,
state what changes when the fixture rotates or tilts, size clamping for the worst orientation, describe
tombstone and pallet economics, and select a configuration from volume, cycle time and machine capability.

### 3. Prerequisites
L1.1 (VMC and HMC layout, tombstone utilisation), L2.2.4 (safety, stored energy), L2.2.5 (cycle time by
element, multi-part effect), L3.1.1 (rotating parts; gravity direction), L3.2.1 (actuation), L3.2.2
(zero-point, changeover).

### 4. Why the topic matters
**This is where the largest productivity gains in fixture design are available** — and where the most
optimistic arithmetic is done.

```
   THE CLAIM YOU WILL HEAR
     "We put four parts on the fixture, so the
      cycle time is a quarter."

   THE ARITHMETIC FROM L2.2.5
     SINGLE PART        FOUR PER LOAD
     load 40 s          load 4 × 30 s = 120 s
     cut  90 s          cut  4 × 90 s = 360 s
     ───────            ─────────────────────
     130 s/part         480/4 = 120 s/part

     SAVING = 10 s = 7.7 %

   ┌──────────────────────────────────────────────┐
   │ NOT 75 %. SEVEN POINT SEVEN PER CENT.        │
   │                                              │
   │ THE CUTTING TIME DOES NOT REDUCE — FOUR      │
   │ PARTS STILL NEED FOUR PARTS' WORTH OF        │
   │ CUTTING. LOADING FOUR TAKES NEARLY FOUR      │
   │ TIMES AS LONG AS LOADING ONE.                │
   │                                              │
   │ ONLY THE FIXED OVERHEADS ARE SHARED.         │
   └──────────────────────────────────────────────┘

   SO WHERE DOES THE REAL GAIN COME FROM?
     → GETTING THE LOADING OUT OF THE CYCLE
       ENTIRELY.
     → L1.1.4: tombstone utilisation 80.70 %
       → 99.28 %.

   THAT IS THE SUBJECT OF THIS LESSON.
```

### 5. Simple explanation

```
   THE CONFIGURATIONS, BY WHAT THEY SOLVE

   SINGLE-COMPONENT
     one part, one setup
     → simplest; every fixed overhead paid per
       part

   MULTI-COMPONENT
     several parts, one load
     → shares the fixed overheads
     → SMALLER GAIN THAN EXPECTED

   TOMBSTONE
     a column with fixtures on 2 or 4 faces,
     on an HMC
     → many parts, and the machine indexes
       between faces

   ROTARY / 4TH AXIS
     the part rotates about one axis
     → machine several faces in one setup
     → GRAVITY DIRECTION CHANGES

   5-AXIS
     the part tilts and rotates
     → almost any face, one setup
     → CLEARANCE BECOMES THE GOVERNING PROBLEM

   PALLETISED
     the fixture leaves the machine on a pallet
     → LOADING HAPPENS OUTSIDE THE CYCLE
     → THIS IS WHERE THE BIG GAIN IS

   ┌──────────────────────────────────────────────┐
   │ THE FIRST TWO SAVE SECONDS. THE LAST ONE     │
   │ REMOVES A WHOLE CATEGORY OF TIME.            │
   └──────────────────────────────────────────────┘
```

### 6. Engineering explanation

**WHERE MULTI-PART GAIN ACTUALLY COMES FROM**

```
   THE CYCLE DECOMPOSED

   PER-PART TIME          scales with part count
     load each part
     clamp each part
     CUT each part
     unclamp, unload each

   FIXED PER LOAD         shared across parts
     door open/close
     approach and retract moves
     tool changes
     coolant on/off
     probing or setting

   ┌──────────────────────────────────────────────┐
   │ THE MULTI-PART SAVING IS ENTIRELY THE FIXED  │
   │ TERM DIVIDED BY THE PART COUNT.              │
   │                                              │
   │ IF THE FIXED TERM IS SMALL, MULTI-PART SAVES │
   │ ALMOST NOTHING.                              │
   │                                              │
   │ IF THE FIXED TERM IS LARGE — MANY TOOL       │
   │ CHANGES, LONG APPROACHES, A PROBING ROUTINE  │
   │ — MULTI-PART CAN BE TRANSFORMATIVE.          │
   └──────────────────────────────────────────────┘

   THE TOOL CHANGE CASE IS THE IMPORTANT ONE
     With 8 tools and 1 part per load: 8 tool
     changes per part.
     With 8 tools and 6 parts per load: still
     8 tool changes, now shared 6 ways —
     1.33 per part.

     AT 6 SECONDS A TOOL CHANGE [EX-ASSUMED]:
       1 part:  48 s of tool changing per part
       6 parts:  8 s per part
       SAVING = 40 s per part

   ┌──────────────────────────────────────────────┐
   │ THAT IS A REAL AND LARGE SAVING, AND IT      │
   │ COMES FROM TOOL CHANGES, NOT FROM LOADING.   │
   │                                              │
   │ SO THE QUESTION TO ASK BEFORE PROPOSING A    │
   │ MULTI-PART FIXTURE IS: HOW BIG IS THE FIXED  │
   │ TERM? IF NOBODY HAS MEASURED IT, THE         │
   │ PROPOSAL IS A GUESS.                         │
   └──────────────────────────────────────────────┘
```

**WHAT CHANGES WHEN THE FIXTURE ROTATES OR TILTS**

```
   THE ONE THAT CATCHES EVERYONE

   ┌──────────────────────────────────────────────┐
   │ WHEN THE PART ROTATES, GRAVITY DOES NOT.     │
   │                                              │
   │ Principle 34, from Level 1.                  │
   │                                              │
   │ A CLAMP SIZED FOR THE PART SITTING FLAT IS   │
   │ NOT SIZED FOR THE PART HANGING UPSIDE DOWN,  │
   │ AND THE WORST CASE IS RARELY THE ORIENTATION │
   │ IN WHICH THE FIXTURE WAS DESIGNED.           │
   │                                              │
   │ L1.1: the 90° position governed at 7,860 N;  │
   │ fitting positive stops collapsed the         │
   │ requirement by 5.5×.                         │
   └──────────────────────────────────────────────┘

   THE FIVE THINGS THAT CHANGE

   1 GRAVITY DIRECTION relative to the fixture
     → clamping must hold in the worst
       orientation
     → and stops must be positioned for it

   2 CHIP BEHAVIOUR
     → chips that fell away at 0° pack into a
       pocket at 180°
     → L2.2.3's swarf volume, now orientation-
       dependent

   3 COOLANT BEHAVIOUR
     → a recess that drained at 0° becomes a
       reservoir when inverted
     → 324 cm³ retained, in L2.2.3

   4 CLEARANCE — THE SWEPT ENVELOPE
     → the fixture must clear the machine
       THROUGHOUT the rotation, not only at the
       indexed positions
     → THIS IS A DIFFERENT CHECK FROM THE TOOL
       CLEARANCE CHECK

   5 BALANCE AND INERTIA
     → a heavy 4th-axis fixture loads the rotary
       drive
     → [MFR] the rotary table's permissible load,
       inertia and overhung moment MUST come from
       the machine builder
```

**THE 5-AXIS PROBLEM: THE FIXTURE IS IN THE WAY**

```
   THE WHOLE POINT of 5-axis is to reach almost
   every face in one setup.

   WHICH MEANS THE TOOL APPROACHES FROM ALMOST
   EVERY DIRECTION.

   WHICH MEANS THE FIXTURE IS AN OBSTRUCTION FROM
   ALMOST EVERY DIRECTION.

   ┌──────────────────────────────────────────────┐
   │ ON A 3-AXIS FIXTURE, CLEARANCE IS A          │
   │ CONSTRAINT.                                  │
   │                                              │
   │ ON A 5-AXIS FIXTURE, CLEARANCE IS USUALLY    │
   │ THE GOVERNING CONSTRAINT, AND THE LOCATING   │
   │ AND CLAMPING SCHEME IS DESIGNED AROUND IT.   │
   └──────────────────────────────────────────────┘

   THE STANDARD 5-AXIS SOLUTIONS  [PRACTICE]
     ✔ HOLD THE PART HIGH on a slim pedestal, so
       the tool can get underneath and around
     ✔ CLAMP FROM BELOW where possible
     ✔ USE A DOVETAIL FIXTURE — grip a small
       sacrificial dovetail machined on the part
       blank, removed at the last operation
     ✔ MINIMISE THE FIXTURE'S PLAN AREA
     ✔ Accept a second operation to remove the
       gripped material

   ┌──────────────────────────────────────────────┐
   │ THE DOVETAIL APPROACH IS WORTH KNOWING. IT   │
   │ ACCEPTS A DELIBERATE MATERIAL AND OPERATION  │
   │ PENALTY IN EXCHANGE FOR ALMOST TOTAL         │
   │ ACCESS — AND ON A COMPLEX 5-AXIS PART THAT   │
   │ TRADE IS OFTEN OVERWHELMINGLY WORTH MAKING.  │
   │                                              │
   │ IT IS ALSO A GOOD EXAMPLE OF A FIXTURE       │
   │ DECISION THAT MUST BE MADE AT PART DESIGN    │
   │ STAGE, BECAUSE IT CHANGES THE BLANK.         │
   └──────────────────────────────────────────────┘
```

**PALLETISATION — THE REAL PRIZE**

```
   WITHOUT A PALLET
     load → CUT → unload → load → CUT → ...
     THE MACHINE IS IDLE DURING LOADING.

   WITH A PALLET
     pallet A cutting  |  pallet B being loaded
     pallet B cutting  |  pallet A being loaded

     LOADING IS ENTIRELY OUTSIDE THE CYCLE.

   ┌──────────────────────────────────────────────┐
   │ L1.1.4: UTILISATION 80.70 % → 99.28 %.       │
   │                                              │
   │ THAT IS THE LARGEST SINGLE UTILISATION GAIN  │
   │ AVAILABLE TO A FIXTURE DESIGNER, AND IT      │
   │ COMES FROM MOVING TIME RATHER THAN REDUCING  │
   │ IT.                                          │
   └──────────────────────────────────────────────┘

   WHAT PALLETISATION REQUIRES
     ✔ a machine with a pallet changer, or a
       zero-point interface used the same way
     ✔ TWO FIXTURES — or two sets of tooling
     ✔ an operator available during the cut
     ✔ AND ENOUGH CUTTING TIME that loading fits
       inside it

   ┌──────────────────────────────────────────────┐
   │ THE LAST CONDITION IS THE ONE THAT FAILS.    │
   │                                              │
   │ IF LOADING TAKES 120 s AND THE CUT TAKES     │
   │ 90 s, THE MACHINE STILL WAITS 30 s. THE      │
   │ PALLET HELPS BUT DOES NOT ELIMINATE THE      │
   │ PROBLEM.                                     │
   │                                              │
   │ PALLETISATION CONVERTS AN IDLE-MACHINE       │
   │ PROBLEM INTO A BUSY-OPERATOR PROBLEM, AND    │
   │ THAT IS ONLY AN IMPROVEMENT IF THE OPERATOR  │
   │ HAS THE TIME.                                │
   └──────────────────────────────────────────────┘
```

**THE TOMBSTONE**

```
   A COLUMN ON AN HMC PALLET, CARRYING FIXTURES
   ON TWO OR FOUR FACES.

   IT COMBINES EVERYTHING IN THIS LESSON
     ✔ multi-part — many parts per load
     ✔ rotary — the machine indexes between faces
     ✔ palletised — loaded off-line
     ✔ and HMC chip behaviour (L3.1.1)

   THE DESIGN CONSTRAINTS
     → WEIGHT: the pallet and rotary drive have
       limits [MFR]
     → BALANCE: an unevenly loaded tombstone
       loads the drive
     → DEFLECTION: a tall tombstone is a
       cantilever
       L1.1: δ ratio 17.6 = 2.6³ — THE CUBE LAW
       APPLIES TO TOMBSTONE HEIGHT
     → ACCESS: all four faces must be loadable
       without rotating the pallet by hand
     → SERVICES: hydraulic or pneumatic supply
       must reach a rotating column — through a
       rotary union or an on-board accumulator

   ┌──────────────────────────────────────────────┐
   │ THE SERVICES POINT IS THE ONE THAT SURPRISES │
   │ PEOPLE. GETTING HYDRAULIC PRESSURE ONTO A    │
   │ ROTATING, PALLET-CHANGING TOMBSTONE IS A     │
   │ REAL DESIGN PROBLEM WITH REAL SOLUTIONS —    │
   │ ROTARY UNIONS, DOCKING COUPLERS, OR          │
   │ SELF-CONTAINED ACCUMULATORS THAT HOLD        │
   │ PRESSURE WHILE THE PALLET IS AWAY.           │
   │                                              │
   │ AND AN ON-BOARD ACCUMULATOR IS STORED ENERGY │
   │ (L2.2.4) THAT LEAVES THE MACHINE WITH THE    │
   │ PALLET.                                      │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Single-component fixture** | One part per load |
| **Multi-component fixture** | Several parts per load |
| **Fixed term** | Cycle time that does not scale with part count — tool changes, door, approaches |
| **Tombstone** | A multi-faced column on an HMC pallet |
| **Pallet changer** | A device swapping the loaded pallet for the machining one |
| **4th axis** | A single rotary axis added to a 3-axis machine |
| **5-axis** | Two additional rotary axes, allowing tilt and rotation |
| **Trunnion** | A 5-axis arrangement where the table tilts between two supports |
| **Dovetail fixture** | Grips a sacrificial dovetail machined on the blank |
| **Swept envelope** | The volume the fixture and part occupy throughout a rotation |
| **Overhung moment** | The bending load a fixture applies to a rotary axis `[MFR]` |
| **Rotary union** | A coupling passing fluid to a rotating assembly |
| **Docking coupler** | A connection made automatically when a pallet seats |
| **Apparent versus real utilisation** | Spindle-cutting time against machine-occupied time |

### 8. Principle

> **THE MULTI-PART SAVING IS THE FIXED TERM DIVIDED BY THE PART COUNT** — nothing else. If the fixed term
> is small, multi-part saves almost nothing.
> **MEASURE THE FIXED TERM BEFORE PROPOSING A MULTI-PART FIXTURE.** Tool changes are usually the largest
> component.
> **WHEN THE PART ROTATES, GRAVITY DOES NOT.** Size clamping for the worst orientation, not the design
> orientation.
> **ROTATION CHANGES FIVE THINGS**: gravity, chips, coolant, the swept envelope and the drive loading.
> **ON A 5-AXIS FIXTURE, CLEARANCE IS USUALLY THE GOVERNING CONSTRAINT**, and the locating scheme is
> designed around it.
> **PALLETISATION MOVES TIME RATHER THAN REDUCING IT** — the largest single utilisation gain available,
> and it fails when loading exceeds the cutting time.
> **PALLETISATION CONVERTS AN IDLE-MACHINE PROBLEM INTO A BUSY-OPERATOR PROBLEM.**
> **TOMBSTONE DEFLECTION FOLLOWS THE CUBE LAW IN HEIGHT.**

### 9. Industrial application

**Deciding the part count** `[PRACTICE]`

```
   THE SEQUENCE THAT GETS IT RIGHT

   1 MEASURE the cycle by element, separating
     per-part from fixed
   2 CALCULATE the saving at 2, 4, 6, 8 parts
   3 CHECK the machine's table or pallet capacity
   4 CHECK the tool life — more parts per load
     means more cutting between tool changes, and
     a tool may not survive the load
   5 CHECK the operator's loading time against
     the cycle if palletised
   6 CHECK what happens when ONE part is bad

   ┌──────────────────────────────────────────────┐
   │ STEP 6 IS THE ONE PEOPLE FORGET.             │
   │                                              │
   │ IF A TOOL BREAKS PARTWAY THROUGH A SIX-PART  │
   │ LOAD, HOW MANY PARTS ARE SCRAP? IF A         │
   │ FIXTURE FAULT AFFECTS ALL SIX STATIONS, ONE  │
   │ EVENT COSTS SIX PARTS.                       │
   │                                              │
   │ MULTI-PART FIXTURING CONCENTRATES RISK AS    │
   │ WELL AS SHARING OVERHEAD.                    │
   └──────────────────────────────────────────────┘

   AND STEP 4 IS THE ONE THAT BITES QUIETLY
     A tool sized for 90 seconds of cutting per
     load now cuts for 540 seconds. If it does
     not last, you have converted a productivity
     gain into a tool-change problem — and the
     tool change now interrupts a six-part load.
```

**The tombstone that could not be loaded** `[EX-ASSUMED]`:

```
SITUATION
  A four-face tombstone was designed for an HMC,
  carrying six parts per face — 24 parts per
  pallet. The economics were excellent.

WHAT WAS MISSED
  The loading station was a fixed platform. The
  operator could reach two faces comfortably, the
  third with difficulty, and the fourth not at
  all without a step.

  Loading 24 parts took 14 minutes instead of the
  planned 8.

  AND: the operator was working at shoulder
  height for a third of that time, on a station
  used every cycle.

THE CONSEQUENCE
  Cutting time per pallet was 11 minutes.
  Loading took 14.

  THE PALLET CHANGER'S ENTIRE BENEFIT WAS LOST —
  THE MACHINE WAITED 3 MINUTES EVERY CYCLE.

THE FIX
  A rotating, height-adjustable loading station.
  Loading fell to 9 minutes and the machine
  stopped waiting.

  Cost: a fraction of the tombstone. It was not
  in the original scope because nobody costed the
  LOADING STATION as part of the fixture.

┌──────────────────────────────────────────────┐
│ TWO LESSONS.                                 │
│                                              │
│ FIRST: PALLETISATION ONLY WORKS IF LOADING   │
│ FITS INSIDE THE CUTTING TIME. THE ARITHMETIC │
│ MUST BE DONE, AND IT MUST USE A MEASURED     │
│ LOADING TIME AT THE ACTUAL STATION.          │
│                                              │
│ SECOND: THE LOADING STATION IS PART OF THE   │
│ FIXTURE DESIGN. L2.2.4's ERGONOMICS ARGUMENT │
│ — JUDGED OVER A SHIFT, NOT A CYCLE — APPLIES │
│ TO THE STATION AS MUCH AS TO THE FIXTURE.    │
└──────────────────────────────────────────────┘
```

### 10. Design rules
- **R1** — **Measure the cycle by element**, separating the per-part term from the fixed term, before
  choosing a part count.
- **R2** — Calculate the saving at **several part counts**; the curve flattens.
- **R3** — Check **tool life** against the increased cutting time per load.
- **R4** — Check **what one failure costs** — multi-part concentrates risk.
- **R5** — For any rotating fixture, size clamping for the **worst orientation** (principle 34).
- **R6** — Check **chip and coolant behaviour in every orientation**, not just the design one.
- **R7** — Verify the **swept envelope** throughout rotation, separately from tool clearance.
- **R8** — Obtain the rotary axis's **load, inertia and overhung moment limits** `[MFR]`.
- **R9** — On 5-axis, treat **clearance as the governing constraint** and design the locating scheme
  around it.
- **R10** — Consider a **dovetail or sacrificial grip** on complex 5-axis parts — and raise it at part
  design stage.
- **R11** — For palletisation, verify **loading time fits inside the cutting time**, using a measured
  figure.
- **R12** — Design and cost the **loading station as part of the fixture**.
- **R13** — For tombstones, check **weight, balance and deflection** — deflection follows the cube law in
  height.
- **R14** — Plan the **route for hydraulic or pneumatic services** to a rotating or palletised fixture,
  and treat any on-board accumulator as stored energy that leaves the machine.

### 11. Rules of thumb
- **The multi-part saving is the fixed term divided by the part count.**
- **Four parts does not mean a quarter of the cycle time — it meant 7.7% in the worked case.**
- **Tool changes are usually the largest fixed term.**
- **When the part rotates, gravity does not.**
- **Rotation changes gravity, chips, coolant, envelope and drive loading.**
- **On 5-axis, the fixture is in the way from almost every direction.**
- **Palletisation moves time rather than reducing it — 80.70% → 99.28%.**
- **Palletisation fails when loading exceeds cutting time.**
- **It converts an idle-machine problem into a busy-operator problem.**
- **Tombstone deflection goes as height cubed.**
- **Multi-part concentrates risk: one fault, six scrap parts.**
- **The loading station is part of the fixture.**

### 12. Formulae

**Multi-part cycle time**
```
t_per_part = (n · t_perpart_each + t_fixed) / n
           = t_perpart_each + t_fixed/n

┌──────────────────────────────────────────────┐
│ READ THE SECOND FORM. THE PER-PART TERM IS   │
│ UNCHANGED BY n; ONLY THE FIXED TERM IS       │
│ DIVIDED.                                     │
│                                              │
│ THE SAVING ASYMPTOTES: GOING FROM 1 TO 2     │
│ PARTS SAVES HALF THE FIXED TERM; 4 TO 8      │
│ SAVES AN EIGHTH OF IT.                       │
└──────────────────────────────────────────────┘

Saving from n₁ to n₂ = t_fixed × (1/n₁ − 1/n₂)
```

**Palletised utilisation**
```
WITHOUT PALLET
  Utilisation = t_cut/(t_cut + t_load)

WITH PALLET
  Utilisation = t_cut/max(t_cut, t_load)
                                 + t_swap

If t_load ≤ t_cut, the machine never waits for
loading — only for the pallet swap.
```

**Tombstone deflection**
```
δ ∝ H³        for a cantilever column

L1.1: δ ratio 17.6 for a height ratio of 2.6
      2.6³ = 17.576 ✓

┌──────────────────────────────────────────────┐
│ DOUBLING TOMBSTONE HEIGHT MULTIPLIES TIP     │
│ DEFLECTION BY EIGHT.                         │
└──────────────────────────────────────────────┘
```

**Rotary axis loading** `[MFR]`
```
Overhung moment  M = m · g · e
  e = distance from the axis to the centre of
      mass

Inertia J for acceleration limits

THE PERMISSIBLE VALUES ARE THE MACHINE
BUILDER'S. THEY ARE NOT ESTIMABLE AND MUST BE
OBTAINED.
```

**Clamping in the worst orientation**
```
At angle θ from the design orientation, the
gravity component acting to displace the part is

  F_gravity,shear = m · g · sin θ
  F_gravity,normal = m · g · cos θ

WORST CASE FOR SHEAR IS θ = 90°
WORST CASE FOR LIFT-OFF IS θ = 180°

[L1.1] The 90° position governed at 7,860 N.
```

| Variable | Meaning | Unit |
|---|---|---|
| n | Parts per load | — |
| t_fixed | Fixed time per load | s |
| H | Tombstone height | mm |
| e | Eccentricity to centre of mass | m |
| θ | Rotation from design orientation | ° |

### 13. Worked numerical example

**Problem:** A part currently runs one-at-a-time on a VMC. Evaluate multi-part fixturing, a 4th axis, and
an HMC tombstone with a pallet changer. Determine the true productivity of each and select.

```
GIVEN:
  PART AND CURRENT PROCESS                      [PROJ]
    Steel bracket, 2.6 kg
    Operations: mill 2 faces, drill 12 holes,
      tap 6, bore 1
    Tools required               = 9
    Tool change time             = 5.5 s each
                                        [EX-ASSUMED]
    MEASURED CYCLE, single part on a VMC:
      load                       = 34 s
      clamp                      = 18 s
      door + approach + retract  = 22 s
      tool changes 9 × 5.5       = 49.5 s
      actual cutting             = 168 s
      unclamp                    = 11 s
      unload                     = 9 s
      clean                      = 14 s
      TOTAL                      = 325.5 s

  VOLUME AND ECONOMICS                          [PROJ]
    Volume        = 34,000/yr
    Programme     = 5 years
    Rate          = ₹1,800/h
    VMC available = 3,600 h/yr, currently 89 %
      utilised across all work

  OPTION 1 — 4-PART VMC FIXTURE          [EX-ASSUMED]
    Load/unload per part rises 15 % (more
      reaching)
    Cost                         = ₹240,000

  OPTION 2 — 4TH AXIS ON THE VMC         [EX-ASSUMED]
    Allows both faces in one setup, eliminating
      a second operation of 95 s/part (currently
      run separately, NOT in the 325.5 s above)
    6 parts per load on a rotary fixture
    Cost, fixture + 4th axis     = ₹690,000

  OPTION 3 — HMC TOMBSTONE, PALLETISED   [EX-ASSUMED]
    4 faces × 5 parts            = 20 per pallet
    HMC hire/allocation cost is excluded — the
      HMC EXISTS and has 2,100 spare hours
    Tombstone + fixtures         = ₹1,120,000
    Pallet swap time             = 25 s
    Load/unload per part at the station = 46 s
      MEASURED at a proper rotating station

REQUIRED:
  (a) Separate the current cycle into per-part
      and fixed terms
  (b) Cycle per part at 2, 4, 6, 8 parts on the
      VMC, and the saving curve
  (c) Option 1 evaluation
  (d) Option 2 evaluation, including the
      eliminated second operation
  (e) Option 3 evaluation, including whether
      loading fits inside the cutting time
  (f) Annual hours and value for each
  (g) Capacity check
  (h) Selection

ASSUMPTION:
  1. Cycle times MEASURED over ten cycles.
     [PROJ]
  2. Tool change time of 5.5 s is the machine's
     figure; it should be confirmed from the
     machine specification. [EX-ASSUMED]
  3. Load/unload rising 15 % per part on a
     multi-part fixture is an ESTIMATE based on
     increased reaching; it must be verified by
     trial. This is the weakest number in the
     analysis. [EX-ASSUMED]
  4. Cutting time per part is unchanged by any
     option. Tool paths may in fact shorten
     slightly on a multi-part fixture through
     shared approaches; this is neglected,
     conservatively. [PROJ]
  5. TOOL LIFE IS ASSUMED ADEQUATE FOR THE
     INCREASED CUTTING TIME PER LOAD. At 20 parts
     per pallet the cutting time between tool
     changes rises twentyfold, and THIS MUST BE
     VERIFIED — it is a genuine risk to Option 3.
     [PROJ]
  6. The HMC's 2,100 spare hours are genuinely
     available and not committed. [PROJ]

FORMULA:
  t_per_part = t_perpart_each + t_fixed/n
  Utilisation = t_cut/max(t_cut, t_load) ...
  Hours = N × t/3600
  Saving = Δt × N × rate

SUBSTITUTION AND CALCULATION:

  (a) SEPARATING THE CYCLE

      PER-PART (scales with n)
        load        34
        clamp       18
        cutting    168
        unclamp     11
        unload       9
        clean       14
        ─────────────────
        SUBTOTAL   254 s

      FIXED PER LOAD (shared)
        door/approach/retract  22
        tool changes          49.5
        ─────────────────────────
        SUBTOTAL              71.5 s

      CHECK: 254 + 71.5 = 325.5 ✓

      FIXED FRACTION = 71.5/325.5
                     = 21.97 %

      ┌────────────────────────────────────────────┐
      │ ONLY 22 % OF THE CYCLE IS SHAREABLE.       │
      │                                            │
      │ SO EVEN AN INFINITE NUMBER OF PARTS PER    │
      │ LOAD COULD SAVE AT MOST 71.5 s OF 325.5 —  │
      │ AND ONLY IF LOADING DID NOT GET HARDER.    │
      │                                            │
      │ THE CEILING IS KNOWN BEFORE ANY DESIGN     │
      │ WORK IS DONE. THAT IS WHY THIS SPLIT IS    │
      │ THE FIRST CALCULATION.                     │
      └────────────────────────────────────────────┘

  (b) THE SAVING CURVE (ignoring the loading
      penalty for now)

      t_per_part = 254 + 71.5/n

        n=1   254 + 71.50 = 325.50 s
        n=2   254 + 35.75 = 289.75 s  (−10.98 %)
        n=4   254 + 17.88 = 271.88 s  (−16.47 %)
        n=6   254 + 11.92 = 265.92 s  (−18.30 %)
        n=8   254 +  8.94 = 262.94 s  (−19.22 %)
        n=∞   254.00 s                (−21.97 %)

      MARGINAL GAINS
        1→2   35.75 s
        2→4   17.87 s
        4→6    5.96 s
        6→8    2.98 s

      ┌────────────────────────────────────────────┐
      │ THE CURVE FLATTENS HARD.                   │
      │                                            │
      │ GOING FROM 1 TO 2 PARTS CAPTURES 35.75 s.  │
      │ GOING FROM 6 TO 8 CAPTURES 2.98 s — ONE    │
      │ TWELFTH AS MUCH, FOR A THIRD MORE FIXTURE. │
      │                                            │
      │ 4 PARTS CAPTURES 75 % OF THE THEORETICAL   │
      │ MAXIMUM SAVING. 8 PARTS CAPTURES 87.5 %.   │
      └────────────────────────────────────────────┘

  (c) OPTION 1 — 4-PART VMC FIXTURE, WITH THE
      LOADING PENALTY

      Load/unload/clean per part rises 15 %:
        (34 + 11 + 9 + 14) = 68 s → 78.2 s
        Clamp 18 s assumed unchanged (powered)
                                        [EX-ASSUMED]

      New per-part term:
        78.2 + 18 + 168 = 264.2 s

      t_per_part = 264.2 + 71.5/4
                 = 264.2 + 17.875
                 = 282.08 s

      SAVING vs 325.5 = 43.42 s = 13.34 %

      ┌────────────────────────────────────────────┐
      │ THE LOADING PENALTY ATE 10.2 s OF THE      │
      │ 53.6 s THEORETICAL SAVING — 19 % OF IT.    │
      │                                            │
      │ AND THIS IS THE WEAKEST ASSUMPTION IN THE  │
      │ ANALYSIS. AT A 30 % PENALTY THE SAVING     │
      │ FALLS TO 33.2 s.                           │
      └────────────────────────────────────────────┘

      Annual hours saved
        = 34,000 × 43.42/3600
        = 410.1 h
      Value = 410.1 × 1,800 = ₹738,180/yr
      Payback = 240,000/(738,180/12)
              = 240,000/61,515
              = 3.90 months

  (d) OPTION 2 — 4TH AXIS, 6 PARTS

      THE SECOND OPERATION IS ELIMINATED.
      That is 95 s/part that disappears entirely
      — and it is the largest single effect in
      this whole analysis.

      Assume the same 15 % loading penalty and
      6 parts:
        per-part term = 264.2 s (as Option 1)
        t_per_part = 264.2 + 71.5/6
                   = 264.2 + 11.917
                   = 276.12 s

      PLUS the eliminated second operation:
        Effective saving = (325.5 − 276.12) + 95
                         = 49.38 + 95
                         = 144.38 s/part

      ┌────────────────────────────────────────────┐
      │ 95 OF THE 144.4 SECONDS — 65.8 % — COMES   │
      │ FROM ELIMINATING A SETUP, NOT FROM         │
      │ MULTI-PART FIXTURING.                      │
      │                                            │
      │ THE 4TH AXIS IS NOT WINNING BECAUSE IT     │
      │ HOLDS SIX PARTS. IT IS WINNING BECAUSE IT  │
      │ REMOVES AN OPERATION — AND THAT IS L1.3.6  │
      │ AGAIN: THE COST OF AN EXTRA SETUP DOMINATES│
      │ ALMOST EVERYTHING ELSE.                    │
      └────────────────────────────────────────────┘

      Annual hours saved
        = 34,000 × 144.38/3600
        = 1,363.6 h
      Value = 1,363.6 × 1,800 = ₹2,454,480/yr
      Payback = 690,000/(2,454,480/12)
              = 690,000/204,540
              = 3.37 months

  (e) OPTION 3 — HMC TOMBSTONE, 20 PARTS,
      PALLETISED

      DOES LOADING FIT INSIDE THE CUTTING TIME?

      Cutting time per pallet:
        20 parts × 168 s = 3,360 s = 56.0 min
        plus fixed 71.5 s (tool changes shared
        across all 20) = 3,431.5 s = 57.2 min

      Loading time per pallet:
        20 × 46 s = 920 s = 15.3 min

      RATIO = 920/3,431.5 = 26.8 %

      ┌────────────────────────────────────────────┐
      │ LOADING IS 26.8 % OF THE CUTTING TIME.     │
      │                                            │
      │ IT FITS COMFORTABLY. THE MACHINE NEVER     │
      │ WAITS FOR LOADING — ONLY FOR THE 25 s      │
      │ PALLET SWAP.                               │
      │                                            │
      │ CONTRAST WITH THE SECTION 9 CASE, WHERE    │
      │ LOADING WAS 127 % OF CUTTING AND THE       │
      │ PALLET CHANGER'S BENEFIT WAS ENTIRELY      │
      │ LOST.                                      │
      └────────────────────────────────────────────┘

      Machine time per pallet
        = 3,431.5 + 25 = 3,456.5 s
      Per part = 3,456.5/20 = 172.83 s

      SAVING vs 325.5 = 152.67 s = 46.90 %

      Also eliminates the second operation?
        An HMC with 4 faces and indexing CAN
        access both faces. ASSUME YES. [EX-ASSUMED]
        Additional 95 s/part

      TOTAL EFFECTIVE SAVING
        = 152.67 + 95
        = 247.67 s/part

      Annual hours saved
        = 34,000 × 247.67/3600
        = 2,339.3 h
      Value = 2,339.3 × 1,800 = ₹4,210,740/yr
      Payback = 1,120,000/(4,210,740/12)
              = 1,120,000/350,895
              = 3.19 months

      UTILISATION ACHIEVED
        Cutting 3,431.5 of 3,456.5 s occupied
        = 99.28 %

      ┌────────────────────────────────────────────┐
      │ 99.28 % — THE L1.1.4 FIGURE, REACHED       │
      │ INDEPENDENTLY.                             │
      │                                            │
      │ THAT IS NOT A COINCIDENCE: IT IS WHAT      │
      │ PALLETISATION DOES WHEN LOADING FITS       │
      │ INSIDE THE CUT. THE ONLY REMAINING IDLE    │
      │ TIME IS THE PALLET SWAP.                   │
      └────────────────────────────────────────────┘

  (f) SUMMARY OF ANNUAL VALUE

      Option 1   410.1 h   ₹738,180    3.90 mo
      Option 2 1,363.6 h ₹2,454,480    3.37 mo
      Option 3 2,339.3 h ₹4,210,740    3.19 mo

      All three pay back in under four months.

  (g) CAPACITY CHECK

      CURRENT VMC LOAD FROM THIS PART
        34,000 × (325.5 + 95)/3600
        = 34,000 × 0.116806
        = 3,971.4 h/yr

      ┌────────────────────────────────────────────┐
      │ THAT EXCEEDS THE VMC'S ENTIRE 3,600 HOURS  │
      │ — AND THE MACHINE IS AT 89 % ACROSS ALL    │
      │ WORK.                                      │
      │                                            │
      │ THE PART CANNOT CURRENTLY BE MADE ON ONE   │
      │ VMC AT THIS VOLUME. IT MUST ALREADY BE     │
      │ SPLIT ACROSS MACHINES OR SUBCONTRACTED.    │
      │                                            │
      │ SO CAPACITY IS NOT A MILD CONSTRAINT HERE. │
      │ IT IS THE PROBLEM.                         │
      └────────────────────────────────────────────┘

      AFTER EACH OPTION
        Option 1: 34,000 × (282.08 + 95)/3600
                = 3,561.9 h  → still 98.9 % of
                  ONE VMC, with no room
        Option 2: 34,000 × 276.12/3600
                = 2,608.4 h  → 72.5 % of the VMC
        Option 3: 34,000 × 172.83/3600
                = 1,632.5 h  → on the HMC, which
                  has 2,100 spare
                  → FITS, at 77.7 % of the spare

      ┌────────────────────────────────────────────┐
      │ THE CAPACITY CHECK ELIMINATES OPTION 1.    │
      │                                            │
      │ IT SAVES ₹738,180 A YEAR AND STILL LEAVES  │
      │ THE PART CONSUMING 98.9 % OF A MACHINE     │
      │ THAT IS ALREADY 89 % COMMITTED TO OTHER    │
      │ WORK. IT DOES NOT SOLVE THE PROBLEM.       │
      │                                            │
      │ AND NOTE: u ≈ 1 THROUGHOUT THIS ANALYSIS.  │
      │ THE FREED HOURS ARE UNAMBIGUOUSLY VALUABLE │
      │ BECAUSE THE MACHINE IS OVERSUBSCRIBED.     │
      │                                            │
      │ CONTRAST L2.2.5 AND L3.2.2, WHERE THE SAME │
      │ ARITHMETIC WAS NEARLY WORTHLESS.           │
      └────────────────────────────────────────────┘

  (h) SELECTION

      ELIMINATED
        OPTION 1 — does not resolve the capacity
          problem. 98.9 % of a machine already
          89 % committed.

      SURVIVING: OPTIONS 2 AND 3

        OPTION 2  ₹690,000, saves ₹2,454,480/yr,
          3.37-month payback, frees the VMC to
          72.5 %
        OPTION 3  ₹1,120,000, saves ₹4,210,740/yr,
          3.19-month payback, moves the work to
          an HMC that already has spare capacity,
          and FREES THE VMC ENTIRELY

      THE DECIDER
        Option 3 saves ₹1,756,260 a year more, for
        ₹430,000 more capital — a marginal payback
        on the difference of
          430,000/(1,756,260/12) = 2.94 months.

        AND it releases a whole VMC rather than
        part of one.

      RISK ON OPTION 3
        TOOL LIFE. Cutting time between tool
        changes rises from 168 s to 3,360 s — a
        factor of 20. IF THE TOOLS DO NOT LAST A
        FULL PALLET, THE TOOL CHANGE INTERRUPTS
        A 20-PART LOAD AND THE FIXED-TERM SHARING
        PARTLY COLLAPSES.

      RECOMMENDATION: OPTION 3, CONDITIONAL on
      verifying tool life across a full pallet.
      If tool life is inadequate, either
      re-sequence so tool changes fall at pallet
      boundaries, or fall back to Option 2.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Per-part / fixed         │ 254 s / 71.5 s    │
  │     Fixed fraction           │ 21.97 % — THE     │
  │                              │ CEILING           │
  │ (b) t/part at n=2/4/6/8      │ 289.75/271.88/    │
  │                              │ 265.92/262.94 s   │
  │     Marginal 1→2 vs 6→8      │ 35.75 s vs 2.98 s │
  │     4 parts captures         │ 75 % of maximum   │
  │ (c) Option 1, 4-part VMC     │ 282.08 s, −13.34 %│
  │     Loading penalty cost     │ 19 % of the gain  │
  │     Value / payback          │ ₹738,180 / 3.90 mo│
  │ (d) Option 2, 4th axis       │ saving 144.38 s   │
  │     From the eliminated op   │ 95 s = 65.8 %     │
  │     Value / payback          │ ₹2,454,480/3.37 mo│
  │ (e) Option 3, tombstone      │ loading 26.8 % of │
  │                              │ cutting — FITS    │
  │     Per part                 │ 172.83 s, −46.90 %│
  │     With the op eliminated   │ 247.67 s saved    │
  │     Utilisation achieved     │ 99.28 %           │
  │     Value / payback          │ ₹4,210,740/3.19 mo│
  │ (g) Current VMC load         │ 3,971.4 h vs      │
  │                              │ 3,600 — IMPOSSIBLE│
  │     Option 1 after           │ 98.9 % — DOES NOT │
  │                              │ SOLVE IT          │
  │ (h) SELECTED                 │ OPTION 3,         │
  │                              │ conditional on    │
  │                              │ tool life         │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The relevant margins
  are: loading at 26.8 % of cutting time on
  Option 3, giving a factor of 3.73 before the
  machine would start waiting; and the payback
  margin of 3.19 months against a 60-month
  programme, 18.8×.

PASS/FAIL:
  ✗ FAIL — current arrangement: 3,971.4 h required
    against 3,600 available on the VMC
  ✗ FAIL — Option 1: 98.9 % of a machine already
    89 % committed; does not resolve capacity
  ✓ PASS — Option 2: frees the VMC to 72.5 %
  ✓ PASS — Option 3: fits the HMC's spare capacity
    at 77.7 %, releases the VMC entirely
  ⚠ CONDITIONAL — Option 3 tool life across a
    20-part pallet, a twentyfold increase in
    cutting between changes

ENGINEERING CONCLUSION:
  1. THE FIXED FRACTION SET A CEILING BEFORE ANY
     DESIGN WORK WAS DONE.
     Only 71.5 of 325.5 seconds — 21.97 % — was
     shareable, so no multi-part fixture could
     ever save more than that, and only if loading
     did not get harder. THAT SINGLE SPLIT IS THE
     FIRST CALCULATION AND IT IS ROUTINELY
     SKIPPED. It tells you the maximum prize
     before you spend a day on layouts, and in
     this case it told us that multi-part
     fixturing alone was never going to solve the
     problem.

  2. THE SAVING CURVE FLATTENS FASTER THAN PEOPLE
     EXPECT.
     One to two parts captured 35.75 seconds; six
     to eight captured 2.98 — one twelfth as much,
     for a third more fixture, a third more
     loading complexity and a third more risk
     concentration. FOUR PARTS CAPTURED 75 % OF
     THE THEORETICAL MAXIMUM. The instinct to add
     stations is almost always wrong past the
     first doubling, and the arithmetic says so
     immediately.

  3. THE BIGGEST SINGLE EFFECT WAS NOT MULTI-PART
     FIXTURING AT ALL.
     Ninety-five of Option 2's 144.4 seconds —
     65.8 % — came from eliminating a second
     operation. The 4th axis was not winning
     because it held six parts; it was winning
     because it removed a setup. THAT IS L1.3.6's
     RESULT ARRIVING AGAIN: the cost of an extra
     setup dominates almost everything else a
     fixture designer can influence, and any
     analysis that compares multi-part options
     without asking whether an operation can be
     eliminated is optimising the wrong variable.

  4. PALLETISATION WORKED HERE BECAUSE LOADING
     FITTED — AND THAT IS THE WHOLE TEST.
     Twenty parts at 46 seconds is 920 seconds of
     loading against 3,431 seconds of cutting —
     26.8 %, a factor of 3.73 of headroom, and the
     machine reached 99.28 % utilisation with only
     the pallet swap as idle time. The section 9
     case had loading at 127 % of cutting and lost
     the pallet changer's entire benefit while
     also putting an operator at shoulder height
     for a third of every cycle. THE ARITHMETIC IS
     TRIVIAL AND THE CONSEQUENCE OF SKIPPING IT IS
     TOTAL.

  5. THE CAPACITY CHECK DID THE ELIMINATING, AND
     FOR ONCE IT ARGUED FOR SPENDING MORE.
     The part currently needs 3,971 hours on a
     3,600-hour machine that is 89 % committed to
     other work — it is not merely inefficient, it
     is impossible as stated. Option 1 saves
     ₹738,180 a year and leaves the part consuming
     98.9 % of that machine. It is a real saving
     that does not solve the problem, which is a
     distinction worth making explicitly to a
     customer. AND NOTE THAT u ≈ 1 THROUGHOUT,
     BECAUSE THE MACHINE IS OVERSUBSCRIBED —
     the same arithmetic that was nearly worthless
     at 36.7 % utilisation in L2.2.5 is
     unambiguously valuable here. THE CAPACITY
     POSITION IS WHAT CONVERTS HOURS INTO MONEY,
     AND IT CUTS BOTH WAYS.

SENSITIVITY NOTE:
  Ranked by influence:
    1. WHETHER THE SECOND OPERATION CAN BE
       ELIMINATED — 95 s/part, worth ₹1,616,000 a
       year on its own. It dominates the
       comparison between Options 1 and 2/3 and it
       is a process question, not a fixture one.
    2. TOOL LIFE ACROSS A FULL PALLET — a
       twentyfold increase in cutting between tool
       changes. If it fails, Option 3's fixed-term
       sharing partly collapses and the pallet may
       need interrupting. THE LARGEST UNQUANTIFIED
       RISK.
    3. THE 15 % LOADING PENALTY — an estimate that
       consumed 19 % of Option 1's theoretical
       gain. At 30 % it would consume 38 %. IT
       MUST BE MEASURED BY TRIAL, and it is the
       weakest number in the analysis.
    4. LOADING TIME AT THE HMC STATION — 46 s
       measured. At 130 s it would reach 76 % of
       cutting time and still fit; at 172 s the
       machine would begin waiting. Substantial
       headroom.
    5. TOOL CHANGE TIME — 5.5 s × 9 is 49.5 s, 69 %
       of the entire fixed term. A machine with a
       3 s changer would have a fixed fraction of
       only 15.6 % and the multi-part case would
       weaken accordingly.
```

### 14. Engineering assumptions
- Cycle times **measured over ten cycles** `[PROJ]`.
- Tool change time of 5.5 s is the machine's figure and should be confirmed from its specification
  `[EX-ASSUMED]`.
- The **15% load/unload penalty per part is an estimate** based on increased reaching and must be verified
  by trial — **the weakest number in the analysis** `[EX-ASSUMED]`.
- Cutting time per part unchanged by any option; shared approaches may shorten it slightly, neglected
  conservatively `[PROJ]`.
- **Tool life is assumed adequate for the increased cutting time per load** — a twentyfold increase on
  Option 3, and a genuine risk requiring verification `[PROJ]`.
- The HMC's 2,100 spare hours are genuinely available and not committed `[PROJ]`.

### 15. Diagram

```
     CLASSIFICATION BY PART COUNT AND AXES
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE CLAIM AND THE ARITHMETIC

   "Four parts, so a quarter of the cycle time"

   ACTUAL, from L2.2.5:
     single  130 s/part
     four    120 s/part
     SAVING  7.7 %  — not 75 %

   ┌──────────────────────────────────────────────┐
   │ FOUR PARTS STILL NEED FOUR PARTS' WORTH OF   │
   │ CUTTING, AND LOADING FOUR TAKES NEARLY FOUR  │
   │ TIMES AS LONG.                               │
   │                                              │
   │ ONLY THE FIXED TERM IS SHARED.               │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  SPLIT THE CYCLE FIRST — IT SETS THE CEILING

   PER-PART (scales with n)      254 s
     load · clamp · CUT ·
     unclamp · unload · clean
     ████████████████████████████████ 78.03 %

   FIXED PER LOAD (shared)        71.5 s
     door · approach · TOOL CHANGES
     █████████ 21.97 %

   ┌──────────────────────────────────────────────┐
   │ NO MULTI-PART FIXTURE CAN EVER SAVE MORE     │
   │ THAN 21.97 % HERE — AND ONLY IF LOADING DOES │
   │ NOT GET HARDER.                              │
   │                                              │
   │ THE CEILING IS KNOWN BEFORE ANY DESIGN WORK. │
   │ THIS SPLIT IS THE FIRST CALCULATION AND IT   │
   │ IS ROUTINELY SKIPPED.                        │
   │                                              │
   │ TOOL CHANGES WERE 49.5 OF THE 71.5 s — 69 %  │
   │ OF THE WHOLE SHAREABLE TERM.                 │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE CURVE FLATTENS HARD

   n=1  ████████████████████████ 325.50 s
   n=2  █████████████████████ 289.75 s
   n=4  ███████████████████ 271.88 s
   n=6  ██████████████████ 265.92 s
   n=8  █████████████████▌ 262.94 s
   n=∞  █████████████████ 254.00 s

   MARGINAL GAIN
     1→2  ██████████ 35.75 s
     2→4  █████ 17.87 s
     4→6  ██ 5.96 s
     6→8  █ 2.98 s

   ┌──────────────────────────────────────────────┐
   │ 4 PARTS CAPTURES 75 % OF THE MAXIMUM.        │
   │ 6→8 CAPTURES ONE TWELFTH OF WHAT 1→2 DID,    │
   │ FOR A THIRD MORE FIXTURE, LOADING COMPLEXITY │
   │ AND CONCENTRATED RISK.                       │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHEN THE PART ROTATES, GRAVITY DOES NOT

      0°              90°             180°
    ┌──────┐        ┌──┐            ┌──────┐
    │ PART │        │P │            │clamps│
    ├──────┤        │A ├─           ├──────┤
    │clamps│        │R │            │ PART │
    └──────┘        │T │            └──────┘
   gravity SEATS   gravity SHEARS  gravity PULLS
     the part        the part       IT OFF

   L1.1: THE 90° POSITION GOVERNED at 7,860 N —
   and positive stops collapsed it 5.5×

   FIVE THINGS CHANGE WITH ROTATION
     1 GRAVITY direction
     2 CHIPS — fall away at 0°, pack at 180°
     3 COOLANT — drains at 0°, pools inverted
     4 SWEPT ENVELOPE — a separate check from
       tool clearance
     5 DRIVE LOADING — inertia and overhung
       moment [MFR]

  ──────────────────────────────────────────────────────────

  5-AXIS: THE FIXTURE IS IN THE WAY

   the tool approaches from almost EVERY
   direction
        ↘  ↓  ↙
      →  ┌────┐  ←
        ↗ │PART│ ↖
          └─┬──┘
            │ ← slim pedestal, or a DOVETAIL
        ════╧════   gripped on sacrificial stock

   ┌──────────────────────────────────────────────┐
   │ ON 3-AXIS, CLEARANCE IS A CONSTRAINT.        │
   │ ON 5-AXIS, CLEARANCE IS USUALLY THE          │
   │ GOVERNING CONSTRAINT, AND THE LOCATING       │
   │ SCHEME IS DESIGNED AROUND IT.                │
   │                                              │
   │ THE DOVETAIL TRADE — DELIBERATE MATERIAL AND │
   │ AN EXTRA OPERATION FOR NEAR-TOTAL ACCESS —   │
   │ MUST BE MADE AT PART DESIGN STAGE, BECAUSE   │
   │ IT CHANGES THE BLANK.                        │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  PALLETISATION — MOVING TIME, NOT REDUCING IT

   WITHOUT
     ██LOAD██ ████CUT████ ██UNLOAD██ ██LOAD██ ...
     machine IDLE during loading

   WITH
     machine  ████CUT A████ ████CUT B████
     operator      load B        load A

   THE TEST: DOES LOADING FIT INSIDE THE CUT?

     worked case   920 s load / 3,431 s cut
                   = 26.8 %  ✓ FITS, 3.73× margin
                   → 99.28 % utilisation

     section 9     14 min load / 11 min cut
                   = 127 %   ✗ machine waits 3 min
                   → the pallet changer's entire
                     benefit lost

   ┌──────────────────────────────────────────────┐
   │ PALLETISATION CONVERTS AN IDLE-MACHINE       │
   │ PROBLEM INTO A BUSY-OPERATOR PROBLEM.        │
   │                                              │
   │ THAT IS ONLY AN IMPROVEMENT IF THE OPERATOR  │
   │ HAS THE TIME — AND THE LOADING STATION IS    │
   │ PART OF THE FIXTURE DESIGN.                  │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE BIGGEST EFFECT WAS NOT MULTI-PART AT ALL

   OPTION 2 SAVING, 144.38 s/part

     from multi-part + rotary   49.38 s  ███
     from ELIMINATING A SETUP   95.00 s  ███████
                                         65.8 %

   ┌──────────────────────────────────────────────┐
   │ THE 4TH AXIS WAS NOT WINNING BECAUSE IT HELD │
   │ SIX PARTS. IT WAS WINNING BECAUSE IT REMOVED │
   │ AN OPERATION.                                │
   │                                              │
   │ L1.3.6 AGAIN: THE COST OF AN EXTRA SETUP     │
   │ DOMINATES ALMOST EVERYTHING ELSE A FIXTURE   │
   │ DESIGNER CAN INFLUENCE.                      │
   │                                              │
   │ ANY MULTI-PART COMPARISON MADE WITHOUT       │
   │ ASKING "CAN AN OPERATION BE ELIMINATED?" IS  │
   │ OPTIMISING THE WRONG VARIABLE.               │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  AND THE CAPACITY CHECK ARGUED FOR SPENDING MORE

   REQUIRED NOW   3,971 h  ████████████████████████
   AVAILABLE      3,600 h  ██████████████████████
                           IMPOSSIBLE AS STATED

   Option 1 after  3,562 h → 98.9 % of a machine
                   already 89 % committed
                   A REAL SAVING THAT DOES NOT
                   SOLVE THE PROBLEM

   ┌──────────────────────────────────────────────┐
   │ u ≈ 1 THROUGHOUT, BECAUSE THE MACHINE IS     │
   │ OVERSUBSCRIBED.                              │
   │                                              │
   │ THE SAME ARITHMETIC WAS NEARLY WORTHLESS AT  │
   │ 36.7 % UTILISATION IN L2.2.5 AND AT 22 % IN  │
   │ L3.2.2.                                      │
   │                                              │
   │ THE CAPACITY POSITION CONVERTS HOURS INTO    │
   │ MONEY — AND IT CUTS BOTH WAYS.               │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
TOMBSTONE TS-3300 — 4-FACE, 20 STATION
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: MAXIMUM LOADED MASS 340 kg INCLUDING
        PARTS. THIS LIMIT IS SET BY THE PALLET AND
        ROTARY DRIVE RATING — SEE THE MACHINE
        BUILDER'S SPECIFICATION.

NOTE 2: THE TOMBSTONE SHALL BE LOADED
        SYMMETRICALLY. PARTIAL LOADS SHALL FOLLOW
        THE PATTERN ON SHEET 5. AN UNBALANCED LOAD
        OVERLOADS THE ROTARY DRIVE.

NOTE 3: CLAMPING IS SPRING-APPLIED AND
        PRESSURE-RELEASED. ACCUMULATOR ITEM 30
        MAINTAINS RELEASE PRESSURE AT THE LOADING
        STATION ONLY. IT SHALL BE DISCHARGED
        BEFORE ANY MAINTENANCE — SEE THE STORED
        ENERGY PROCEDURE.

NOTE 4: CLAMP FORCE IS SIZED FOR THE 90° FACE-DOWN
        ORIENTATION. DO NOT REDUCE PRESSURE ON THE
        BASIS OF THE UPRIGHT CONDITION.

NOTE 5: TOOL LIFE SHALL BE VERIFIED ACROSS A FULL
        20-PART PALLET. SEE PROCESS SHEET PS-3300.
```

`[PRACTICE]` **Note 4 exists because the fixture will be seen at the loading station, upright, by
everyone who ever adjusts it.** The orientation that governs the clamping is one the operator never
observes, and a pressure reduction that looks obviously safe in the upright position is a dropped part at
90°. **State the governing orientation on the fixture, not only in the calculation file.**

### 17. CAD workflow
1. **Split the measured cycle** into per-part and fixed terms before modelling anything
2. Model the layout at **two and four stations first** and check the curve before going further
3. Model the **loading reach envelope** from the operator's actual position at the actual station
4. For rotary fixtures, model the part at **0°, 90°, 180° and 270°** and check gravity, chips and coolant
   in each
5. Sweep the **full rotation envelope** against the machine's working volume — separately from tool
   clearance
6. Extract **mass, centre of mass and inertia** and check against the rotary axis's limits `[MFR]`
7. For 5-axis, run **tool-axis accessibility** across the full range and treat the fixture as the
   obstruction
8. Model the **loading station** as a deliverable, not as an assumption

`[PRACTICE]` Step 4 is where the chip and coolant surprises are found. **A pocket that drains beautifully
in the upright orientation is a swarf trap at 180°**, and it will not be discovered until the fixture is
running.

### 18. GD&T application

```
  MULTI-STATION FIXTURES RAISE A QUESTION SINGLE
  ONES DO NOT: ARE ALL STATIONS THE SAME?

  STANDARD: ASME Y14.5-2018

  ┌────────────────────────────────────────────┐
  │ EACH STATION HAS ITS OWN POSITION RELATIVE │
  │ TO THE FIXTURE'S DATUMS, AND ITS OWN       │
  │ LOCATOR TOLERANCES.                        │
  │                                            │
  │ SO A 20-STATION TOMBSTONE HAS 20 SETS OF   │
  │ LOCATORS, AND STATION-TO-STATION VARIATION │
  │ BECOMES A REAL CHARACTERISTIC.             │
  └────────────────────────────────────────────┘

  THE TWO TOLERANCING STRATEGIES

  1 EACH STATION TO THE FIXTURE DATUMS
      → every station individually toleranced
      → station-to-station variation is the sum
        of two individual tolerances
      → simple to inspect, looser in practice

  2 A PATTERN, WITH COMPOSITE POSITION
      → the pattern locates to the fixture
        datums with one tolerance
      → station-TO-STATION relationship is
        controlled TIGHTER by the lower segment
      → THIS IS USUALLY WHAT IS WANTED, because
        the programme indexes between stations
        by a fixed increment

  ┌────────────────────────────────────────────┐
  │ THE SECOND STRATEGY MATCHES HOW THE PART   │
  │ PROGRAM WORKS. THE CNC MOVES A NOMINAL     │
  │ PITCH BETWEEN STATIONS, SO WHAT MATTERS IS │
  │ THAT THE PITCH IS RIGHT — NOT THAT EACH    │
  │ STATION IS INDEPENDENTLY PERFECT.          │
  │                                            │
  │ TOLERANCING EACH STATION SEPARATELY WHEN   │
  │ THE PROGRAM USES A FIXED PITCH IS A COMMON │
  │ AND EXPENSIVE MISMATCH.                    │
  └────────────────────────────────────────────┘

  Composite positional tolerancing at Level 11;
  pattern datums at Level 10.
```

### 19. Manufacturing method
| Element | Practice `[PRACTICE]` |
|---|---|
| **Tombstone body** | Cast iron or fabricated steel; **stress-relieved** before machining |
| **Station machining** | All stations machined in **one setup** where possible, so the pitch is a machine move rather than a stack |
| **Rotary fixtures** | Balanced; the mounting register **machined in place** where possible (L3.1.1) |
| **Pallet interface** | To the machine builder's specification `[MFR]`; qualified after installation |
| **Services** | Rotary union, docking coupler or on-board accumulator — decided early, not retrofitted |
| **Loading station** | Height-adjustable and rotating for a tombstone; part of the fixture scope |

> **"All stations machined in one setup"** is the single most valuable manufacturing decision for a
> multi-station fixture. `[PRACTICE]` If the stations are machined in separate setups, the pitch between
> them inherits a setup-to-setup error — and the pitch is exactly what the part program relies on. **A
> boring mill or a large machining centre that can reach every station without re-fixturing is worth
> waiting for.**

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Station positions | CMM, all stations | Per drawing |
| **Station-to-station pitch** | CMM | Per the composite tolerance |
| Repeatability, each station | 10-cycle study per station | Within allocation |
| Loaded mass | Weigh | Within the rotary limit `[MFR]` |
| Balance | Measure, or verify symmetry of loading | Per the machine builder |
| Swept envelope | Dry run, full rotation, with parts | No contact |
| Chip and coolant behaviour | Observe at each index position | No trapping, no pooling |
| Loading time | Time 10 loads at the actual station | ≤ the cutting time |
| Tool life across a pallet | Run a full pallet, inspect tools | Survives |
| Clamping at the governing orientation | Test at the worst orientation | Holds |

`[PRACTICE]` **Testing the clamping at the governing orientation, with a real part, is not optional on a
rotary fixture** — and it is skipped constantly because the fixture is convenient to test upright. The
90° test needs the machine, five minutes and a witness, and it is the difference between a calculation
and a verification.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Assuming four parts means a quarter of the cycle | 7.7% delivered against 75% promised |
| 2 | Not **splitting the cycle** into per-part and fixed | The ceiling is unknown |
| 3 | Adding stations past the **flattening of the curve** | 6→8 gained 2.98 s for a third more fixture |
| 4 | Ignoring the **loading penalty** on a multi-part fixture | 19% of the gain here |
| 5 | Not checking **tool life** against increased cutting per load | Tool change interrupts a 20-part load |
| 6 | Ignoring **risk concentration** | One fault, twenty scrap parts |
| 7 | Sizing clamping for the **design orientation** | Principle 34; the 90° case governs |
| 8 | Not checking **chips and coolant in every orientation** | A drain becomes a trap |
| 9 | Checking tool clearance but not the **swept envelope** | Collision during rotation |
| 10 | Ignoring **rotary axis load, inertia and overhung moment** `[MFR]` | Drive overloaded |
| 11 | Treating clearance as secondary on **5-axis** | The fixture obstructs from every direction |
| 12 | Palletising without checking **loading fits inside the cut** | Section 9: benefit entirely lost |
| 13 | Not costing the **loading station** | 14 minutes instead of 8, at shoulder height |
| 14 | Machining stations in **separate setups** | The pitch inherits a setup error |
| 15 | Tolerancing stations **individually** when the program uses a fixed pitch | Expensive mismatch |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Multi-part saving less than predicted | Loading penalty underestimated | Time the actual loading | Improve access; reduce stations | Measure, do not estimate |
| Machine still waiting with a pallet changer | Loading exceeds cutting time | Time both | Improve the station; reduce parts per pallet | Design rule R11 |
| Part moves at one index position only | Clamping sized for the design orientation | Test at every orientation | Re-size for the worst | Principle 34 |
| Swarf packed on one face | Orientation-dependent chip behaviour | Observe at each index | Re-shape the pocket | CAD workflow step 4 |
| Coolant floods the loading station | A recess inverts and empties | Observe the index sequence | Add drainage | Model all orientations |
| Rotary drive faults | Overhung moment or inertia exceeded | Calculate; check against `[MFR]` | Reduce mass or eccentricity | Obtain limits at design |
| Collision during rotation | Swept envelope not checked | Dry run full rotation | Relieve | Separate envelope check |
| Parts differ station to station | Pitch error from separate setups | CMM all stations | Re-machine in one setup | Manufacturing practice |
| Tool fails mid-pallet | Tool life inadequate for the load | Run a full pallet | Re-sequence changes to pallet boundaries | Verify at commissioning |
| Operator fatigued on a tombstone | Loading station not designed | Observe a shift | Rotating, height-adjustable station | Station in scope |

### 23. Design checklist
- [ ] Has the measured cycle been **split into per-part and fixed** terms?
- [ ] Is the **fixed fraction** known — the ceiling on any multi-part gain?
- [ ] Has the **saving curve** been calculated at several part counts?
- [ ] Has the **loading penalty** been estimated, and is it flagged for trial verification?
- [ ] Has **tool life** across a full load been checked?
- [ ] Has **risk concentration** been considered — what does one fault cost?
- [ ] For rotary: is clamping sized for the **worst orientation**?
- [ ] Have **chips and coolant** been checked at every index position?
- [ ] Has the **swept envelope** been verified, separately from tool clearance?
- [ ] Are the rotary axis's **mass, inertia and overhung moment limits** obtained `[MFR]`?
- [ ] For 5-axis: is clearance treated as **the governing constraint**?
- [ ] Has a **dovetail or sacrificial grip** been considered, and raised at part design stage?
- [ ] For palletisation: does **loading fit inside the cutting time**, using measured figures?
- [ ] Is the **loading station** designed and costed?
- [ ] Can all stations be **machined in one setup**?
- [ ] Is the **station-to-station pitch** toleranced to match how the program indexes?

### 24. Beginner exercise
**E3.2.3-B** — Calculate and answer:
(a) A cycle has a per-part term of 180 s and a fixed term of 60 s. Calculate the cycle per part at
n = 1, 2, 4 and 8.
(b) Calculate the maximum possible saving from multi-part fixturing on this cycle, and express it as a
percentage.
(c) Calculate the marginal saving from 1→2 and from 4→8, and comment.
(d) A part of 5 kg is held on a 4th-axis fixture. Calculate the gravity shear force at 90° and the
lift-off force at 180°.
(e) A pallet cycle has 22 min of cutting and 9 min of loading. State whether palletisation eliminates the
machine's waiting, and by what margin.
(f) State the five things that change when a fixture rotates.

### 25. Intermediate exercise
**E3.2.3-I** — A part runs on a VMC with a measured cycle of: load 28 s, clamp 14 s, door and approaches
19 s, 7 tool changes at 4.8 s, cutting 142 s, unclamp 9 s, unload 8 s, clean 11 s. Volume is 26,000/yr,
the rate is ₹1,750/h, and the VMC is at 93% utilisation with 3,500 h available. A 5-part fixture costs
₹185,000 and raises load/unload/clean by 18% per part. An HMC with 1,600 spare hours could take a
2-face tombstone with 6 parts per face at ₹740,000, with a 20 s pallet swap and a measured 39 s per part
at the loading station.
(a) Split the cycle into per-part and fixed terms and state the fixed fraction.
(b) Calculate the cycle per part at n = 2, 5 and 12, ignoring the loading penalty.
(c) Recalculate the 5-part case including the 18% penalty, and state how much of the gain it consumes.
(d) For the tombstone, determine whether loading fits inside the cutting time and calculate the
utilisation achieved.
(e) Calculate annual hours and value for both options.
(f) Perform the capacity check for the current situation and both options.
(g) State your recommendation and the two risks you would flag.

### 26. Advanced exercise
**E3.2.3-A** — An aluminium aerospace bracket (1.8 kg, 190 × 140 × 95 mm) requires machining on five
faces to a positional tolerance of 0.05 mm across faces. Currently it runs in three setups on a VMC: 
op 10 at 6.2 min, op 20 at 8.4 min, op 30 at 4.1 min, each with its own load, clamp and setting time
totalling 2.8 min per operation. Volume 9,000/yr for 6 years. A 5-axis machine is available with 2,800
spare hours; a trunnion table fixture is proposed. The rate is ₹2,400/h on the 5-axis and ₹1,800/h on the
VMC. `[EX-ASSUMED]` State all assumptions.
(i) Calculate the current total time per part including all three setups, and the annual hours.
(ii) Identify the tolerance consequence of three setups and estimate the stack contribution.
(iii) Design the 5-axis fixture concept, explaining how you achieve access to five faces and why
clearance governs.
(iv) Evaluate a dovetail approach, including the material and operation penalty, and state at what point
it becomes worthwhile.
(v) Calculate the 5-axis cycle time and annual hours, stating your assumptions about cutting time.
(vi) Determine whether multi-part fixturing is worthwhile on the 5-axis machine, using the fixed-term
analysis.
(vii) Compare the economics at the two different machine rates, and explain why the higher rate does not
necessarily lose.
(viii) Perform the capacity check for both routes.
(ix) Identify which of the twenty-four auto-fail items this application most invites.
(x) State the six most important drawing notes for the 5-axis fixture.

### 27. Interview questions
1. *"A customer wants a six-part fixture instead of a single. How do you assess it?"*
   **Answer:** The first thing I do is split the measured cycle into the part that scales with the number
   of parts — loading, clamping, cutting, unloading, cleaning — and the part that is fixed per load, which
   is the door, the approach and retract moves, and above all the tool changes. The multi-part saving is
   entirely the fixed term divided by the number of parts, and nothing else, so that split tells you the
   ceiling before you draw anything. In the case we worked the fixed term was only twenty-two per cent of
   the cycle, so even an infinite number of parts could not have saved more than that. Then I calculate
   the curve, because it flattens hard: one to two parts captured thirty-six seconds, six to eight
   captured three. Four parts captured seventy-five per cent of the theoretical maximum. After that I
   subtract the loading penalty, because loading six parts is harder per part than loading one — more
   reaching, worse posture — and in that case a fifteen per cent penalty ate nineteen per cent of the
   gain. Then two checks people forget: whether the tools survive six parts' worth of cutting between
   changes, and what one fault costs, because a multi-part fixture concentrates risk as well as sharing
   overhead. And I would ask whether an operation could be eliminated instead, because in that analysis
   removing one setup was worth sixty-six per cent of the best option's saving — far more than the
   multi-part effect.
2. *"What does a pallet changer actually give you that a multi-part fixture does not?"*
   **Answer:** A multi-part fixture *reduces* time by sharing overhead. A pallet changer *moves* time out
   of the cycle altogether, which is a different and larger thing. Loading happens on one pallet while
   the machine cuts on the other, so the machine's idle time drops to just the pallet swap — utilisation
   went from eighty point seven per cent to ninety-nine point three in the Level 1 case, and the worked
   example here reached ninety-nine point two eight independently, which is not a coincidence: it is what
   palletisation does when loading fits inside the cut. And that is the condition that matters. If
   loading takes longer than the cutting time, the machine still waits, and the pallet changer's benefit
   is partly or entirely lost. I have seen a four-face tombstone where loading took fourteen minutes
   against eleven minutes of cutting, so the machine waited three minutes every cycle and the whole
   investment underperformed — and the fix was a rotating, height-adjustable loading station costing a
   fraction of the tombstone, which had not been in scope because nobody had costed the loading station
   as part of the fixture. So the honest way to put it is that palletisation converts an idle-machine
   problem into a busy-operator problem, and that is only an improvement if the operator has the time.

### 28. Expert questions
1. *"Multi-part fixturing concentrates risk. Quantify that argument properly — is it ever decisive?"*
   **Answer:** It is decisive more often than it is raised, and the reason it gets ignored is that the
   productivity arithmetic is easy and the risk arithmetic is not.
   The mechanism is simple. **A single-part fixture converts one fault into one scrap part. An n-part
   fixture can convert one fault into n scrap parts** — and the faults that do this are not exotic. A
   broken tool discovered at the end of a cycle, a clamp that failed to actuate on the manifold, a
   program error, a coolant failure, a fixture that shifted. Each is a single event with an n-fold
   consequence.
   The way to quantify it is to separate faults into **per-part faults** and **per-load faults**. A
   mislocated individual part is a per-part fault and multi-part fixturing does not change it. A tool
   failure, a program fault or a fixture-wide problem is a per-load fault, and its cost scales with n.
   So the expected scrap cost per part is roughly the per-part fault rate times the part value, plus the
   per-load fault rate times n times the part value, divided by n — which reduces to **per-part rate plus
   per-load rate, times part value.** The n cancels.
   That result is worth sitting with, because it says the *expected* scrap cost per part is unchanged.
   **What changes is the variance, and the size of the worst event.** A twenty-station tombstone turns a
   routine tool failure into a twenty-part loss, and if those parts are worth ₹9,000 each with a month of
   accumulated value, that is a single event costing ₹180,000. On expensive parts late in their route,
   that is where multi-part fixturing stops being obviously right.
   It becomes decisive in three situations. **First, high part value** — aerospace forgings, castings
   with weeks of value added, anything where a batch loss is material to the business. **Second, where
   detection is late** — if the fault is only found at final inspection rather than in-process, the whole
   pallet is suspect. **Third, where the parts are unrepeatable in the short term**, such as a
   long-lead-time casting, because the cost is not the part value but the schedule.
   The engineering responses are worth knowing rather than just accepting the risk: **in-process
   monitoring so a fault stops the cycle rather than completing it** — tool breakage detection, clamp
   confirmation sensors, spindle load monitoring; **sequencing so that the machine finishes one part
   fully before starting the next**, which converts a per-load fault back into a partial loss; and
   **limiting n on high-value parts even where the productivity curve says go further.** That last one is
   a legitimate engineering decision and it needs to be written down with its reasoning, or somebody will
   later "optimise" the station count.
2. *"You have now shown the capacity check reversing conclusions three times in three different
   directions. Is there a general statement about when to trust a time saving?"*
   **Answer:** There is, and I think it is one of the more useful generalisations in the whole subject.
   **A time saving is worth money only when the time saved is a constraint.** Everything else follows.
   The three cases make the pattern. In L2.2.5, a machine at 36.7% utilisation released 342 hours worth a
   nominal ₹615,960 — and the hours were not a constraint, so the money was largely notional. In L3.2.2,
   at 20–26% utilisation, the same argument applied to setup hours. Here, the machine needed 3,971 hours
   from a 3,600-hour machine that was already 89% committed, so every hour released was unambiguously
   valuable — **u ≈ 1 without needing an argument.**
   But the generalisation needs a refinement, because "the machine" is not the only resource. **Setup
   time consumes a setter as well as a machine, and loading time consumes an operator.** Those are
   different resources with different constraint positions. A shop can have idle machines and a fully
   committed setting department, in which case a setup time saving is real and a cycle time saving is
   not. **So the question is not "is the machine busy" but "which resource does this saving release, and
   is that resource the constraint?"**
   The second refinement is about time horizon. **Spare capacity today is not spare capacity for the
   programme.** A machine at 40% utilisation with a growing order book will be the constraint in
   eighteen months, and a fixture bought now will still be running then. Conversely, a machine at 95%
   utilisation on a programme ending in a year offers a saving that expires. **The capacity position has
   to be assessed over the fixture's life, not on the day of the proposal** — which is uncomfortable,
   because it requires a forecast rather than a measurement.
   And the third refinement is the one I find most useful in conversation. **Present the saving in hours
   and let the customer convert it.** "This releases 342 machine hours and 96 setter hours a year" is a
   statement I can defend absolutely. "This saves ₹615,960 a year" embeds an assumption about the
   customer's capacity position, their labour flexibility and their order book, none of which I know
   better than they do. **The engineer owns the hours; the customer owns the exchange rate.** Every time
   I have seen a fixture proposal fall apart under scrutiny, it was because somebody quoted the money
   without stating the assumption — and the credibility lost on that one number was applied to all the
   others.

### 29. Summary
Part count and axis configuration is where the largest productivity gains live and where the most
optimistic arithmetic is done. The multi-part saving is the fixed term divided by the part count and
nothing else, so splitting the measured cycle into per-part and fixed terms is the first calculation and
it establishes the ceiling before any design work: in the worked example only 21.97% of the cycle was
shareable, and tool changes were 69% of that shareable term. The saving curve flattens hard — one to two
parts captured 35.75 seconds while six to eight captured 2.98, and four parts captured 75% of the
theoretical maximum — and a 15% loading penalty then consumed 19% of the four-part gain. When a fixture
rotates, five things change: gravity direction, chip behaviour, coolant behaviour, the swept envelope
which is a separate check from tool clearance, and the drive loading, whose limits must come from the
machine builder. On 5-axis machines clearance becomes the governing constraint rather than merely a
constraint, because the tool approaches from almost every direction, and the dovetail approach trades
deliberate material and an extra operation for near-total access. Palletisation moves time out of the
cycle rather than reducing it, delivering the largest single utilisation gain available — 99.28% in the
worked case — but only when loading fits inside the cutting time; where it did not, a tombstone's entire
pallet-changer benefit was lost and the loading station turned out to be an uncosted part of the fixture.
The largest single effect in the analysis was not multi-part fixturing at all: 95 of Option 2's 144.4
seconds, 65.8%, came from eliminating a setup. And the capacity check, which had argued against spending
in two previous lessons, here argued for spending more, because the part required 3,971 hours from a
3,600-hour machine and the cheapest option saved real money without solving the problem.

### 30. Key takeaways
- **The multi-part saving is the fixed term divided by the part count.** Split the cycle first — it sets
  the ceiling.
- **Only 21.97% was shareable here**, and tool changes were 69% of that.
- **The curve flattens hard**: 1→2 gained 35.75 s, 6→8 gained 2.98 s. Four parts captured 75% of the
  maximum.
- **Subtract the loading penalty** — 15% per part consumed 19% of the gain, and it is the weakest number.
- **Check tool life** against the increased cutting time per load — a twentyfold rise on a 20-part
  pallet.
- **Multi-part concentrates risk**: the expected scrap cost per part is unchanged, but the size of the
  worst event scales with n.
- **When the part rotates, gravity does not.** Size clamping for the worst orientation and state it on
  the drawing.
- **Rotation changes five things**: gravity, chips, coolant, swept envelope, drive loading.
- **On 5-axis, clearance is the governing constraint** — design the locating scheme around it.
- **Palletisation moves time rather than reducing it** — 99.28% utilisation when loading fits.
- **The test is whether loading fits inside the cutting time.** 26.8% works; 127% loses everything.
- **The loading station is part of the fixture** — design it and cost it.
- **Eliminating a setup was worth 65.8% of the best option's saving.** Ask that question first.
- **Machine all stations in one setup** so the pitch is a machine move, and tolerance the pitch to match
  how the program indexes.
- **A time saving is worth money only when the time saved is a constraint** — the engineer owns the
  hours, the customer owns the exchange rate.

---

## MODULE 3.2 — CLOSING

### The actuation and flexibility map

| Question | Options | What decides |
|---|---|---|
| **How is force applied?** | manual · pneumatic · hydraulic · electro-mechanical · vacuum · magnetic | Cycle time, consistency, **failure behaviour**, cost — rarely force |
| **How dedicated?** | dedicated · modular · flexible · reconfigurable | **Recurrence** — not volume, not variety |
| **How is it mounted?** | bolted · zero-point · palletised | Changeover frequency, and whether the offset must be re-established |
| **How many parts?** | single · multi · tombstone | **The fixed fraction** of the cycle |
| **How many axes?** | 3-axis · 4th-axis · 5-axis | Faces required, and whether a setup can be eliminated |

### Governing principles — Module 3.2

Continuing from 173 at the end of Module 3.1:

| # | Principle |
|---|---|
| **174** | The actuation choice is about cycle time, consistency, failure behaviour and cost — rarely about force. |
| **175** | Read the failure behaviour column first; it is the only one that can injure somebody. |
| **176** | Make loss of power the safe state — spring-applied and pressure-released, or electro-permanent. |
| **177** | Size a cylinder on the stroke that clamps; an extend-sized bore delivered 2.0% on retract. |
| **178** | Use the measured supply pressure at the fixture, never the nominal shop figure. |
| **179** | Air is compressible, so a pneumatic clamp is a spring and may be the softest element in the loop. |
| **180** | Pneumatic usually loses on space, not on force; hydraulic gives ~58× the force for the same bore. |
| **181** | Vacuum has an absolute ceiling set by atmospheric pressure, and a practical system reaches a fraction of it. |
| **182** | Vacuum and magnetic hold down and resist sideways only by friction — fit a positive stop. |
| **183** | Magnetic force collapses non-linearly with air gap; a burr, chip or coat of paint is a holding failure. |
| **184** | Vacuum and magnetic holding fail invisibly, so they must be sensed and interlocked rather than assumed. |
| **185** | State a fixture's dependency on part properties on its own drawing, or nobody re-examines it when the part changes. |
| **186** | Repeatability and flexibility move in opposite directions, because every adjustment is a joint. |
| **187** | The deciding variable between modular and dedicated is recurrence, which is neither volume nor variety. |
| **188** | Compare flexibility options on lifetime cost, not capital; the cheapest to buy can be the dearest to own. |
| **189** | Minimise the number of interfaces between the base and every locator. |
| **190** | Stack a rebuilt setup worst case — you experience one sample of the stack, not a population. |
| **191** | A finite family needs indexed positions, not infinite adjustment; the least repeatable option is the most often chosen. |
| **192** | A zero-point system removes the re-establishment of the work offset, not just the changeover minutes. |
| **193** | Zero-point rescues dedicated fixturing rather than competing with it. |
| **194** | Never re-zero a zero-point fixture; it discards the benefit and hides the fault. |
| **195** | A modular system is an ongoing discipline, not a purchase, and it degrades invisibly. |
| **196** | The multi-part saving is the fixed term divided by the part count, and nothing else. |
| **197** | The multi-part saving curve flattens hard; the first doubling captures most of the available gain. |
| **198** | Multi-part fixturing concentrates risk: the expected scrap cost per part is unchanged, but the worst single event scales with the station count. |
| **199** | Rotation changes gravity, chips, coolant, the swept envelope and the drive loading. |
| **200** | On a five-axis fixture, clearance is usually the governing constraint and the locating scheme is designed around it. |
| **201** | Palletisation moves time out of the cycle rather than reducing it, and it fails when loading exceeds the cutting time. |
| **202** | Palletisation converts an idle-machine problem into a busy-operator problem; the loading station is part of the fixture. |
| **203** | Tombstone deflection follows the cube law in height. |
| **204** | Machine all stations of a multi-station fixture in one setup, and tolerance the pitch to match how the program indexes. |
| **205** | A time saving is worth money only when the time saved is a constraint — the engineer owns the hours, the customer owns the exchange rate. |

**Principles 174–205 belong to Module 3.2. The next block begins at 206.**

### Numerical results established in Module 3.2

| Result | Value | Lesson |
|---|---|---|
| Pneumatic bore for 8,000 N at 5.8 bar | 132.5 mm — **166% of the envelope** | L3.2.1 |
| Hydraulic bore, same force at 250 bar | 20.2 mm — 25% of the envelope | L3.2.1 |
| Bore ratio | **6.56× = √43.10** | L3.2.1 |
| Extend-sized cylinder used on retract | 158 N of 8,000 = **2.0%, a factor of 50** | L3.2.1 |
| Vacuum theoretical vs achievable | 101.3 vs 65.0 kPa = 64% | L3.2.1 |
| Vacuum area required vs part area | 4,923 vs 988 cm² = **4.98× short** | L3.2.1 |
| Vacuum hold-down achieved | 5,460 N = 17.1% of the friction-only requirement | L3.2.1 |
| Vacuum side resistance, dry / coolant | 1,092 / 546 N vs a 2,600 N cut | L3.2.1 |
| Safety factor, dry / coolant | **0.42 / 0.21 — the part slides** | L3.2.1 |
| With a positive stop | Requirement falls from 32,000 N to ≈40 N | L3.2.1 |
| Powered clamping saving | 34 s/cycle = 245.6 h = ₹442,000/yr | L3.2.1 |
| Setup hours, dedicated / modular / zero-point | 88.0 / 232.0 / 6.4 h — **ratio 36.25×** | L3.2.2 |
| Capital, A / B / C | ₹1,140,000 / **₹680,000** / ₹1,458,000 | L3.2.2 |
| Five-year total, A / B / C | ₹1,932,000 / ₹2,768,000 / **₹1,515,600** | L3.2.2 |
| **Cheapest to buy cost more to own by** | **₹1,252,400** | L3.2.2 |
| Modular break-even recurrence | **36.8 setups/yr against an actual 96** | L3.2.2 |
| Repeatability, dedicated / zero-point / modular | ±0.006 / ±0.011 / ±0.030 mm | L3.2.2 |
| Modular as a multiple of dedicated | **5.00×** | L3.2.2 |
| Percentage of allocation consumed | 16.0 / 29.3 / **80.0%** | L3.2.2 |
| Cycle split, per-part / fixed | 254 / 71.5 s — **fixed fraction 21.97%** | L3.2.3 |
| Tool changes as a share of the fixed term | 49.5 of 71.5 s = **69%** | L3.2.3 |
| Marginal saving 1→2 vs 6→8 | **35.75 s vs 2.98 s** | L3.2.3 |
| Four parts captures | **75% of the theoretical maximum** | L3.2.3 |
| Loading penalty cost, 4-part option | 19% of the theoretical gain | L3.2.3 |
| Option 2 saving from eliminating a setup | 95 of 144.38 s = **65.8%** | L3.2.3 |
| Tombstone loading vs cutting time | 920 / 3,431.5 s = **26.8%, fits with 3.73× margin** | L3.2.3 |
| Utilisation achieved, palletised | **99.28%** — matching L1.1.4 independently | L3.2.3 |
| Current VMC requirement vs available | **3,971.4 h against 3,600 — impossible** | L3.2.3 |
| Option 3 annual value / payback | ₹4,210,740 / **3.19 months** | L3.2.3 |

### Formulae established in Module 3.2

```
ACTUATION
  F = p × πD²/4              extend
  F = p × π(D² − d²)/4       retract — USE THIS
                             IF CLAMPING IS THE
                             RETRACT STROKE
  Bore ratio for equal force = √(p₁/p₂)
  F_vacuum = Δp × A_sealed
    Δp_max ≈ 101.3 kPa = 10.13 N/cm²  [STD]
  Side capacity = μF   for BOTH vacuum and
                       magnetic

FLEXIBILITY
  Worst case  t = Σ tᵢ    ← for a rebuilt setup
  RSS         t = √(Σ tᵢ²)
  N_be = C_dedicated/(C_setup_mod − C_setup_ded)
  Setup fraction = t_setup/(t_setup
                            + N_batch × t_cycle)

PART COUNT AND AXES
  t_per_part = t_perpart_each + t_fixed/n
  Saving n₁→n₂ = t_fixed × (1/n₁ − 1/n₂)
  Utilisation, palletised
    = t_cut/(max(t_cut, t_load) + t_swap)
  δ ∝ H³                 tombstone height
  M = m·g·e              overhung moment  [MFR]
  F_shear = m·g·sin θ    worst at 90°
  F_liftoff = m·g·cos θ  worst at 180°
```

### Self-check — Module 3.2

1. Name the six actuation methods and state the failure behaviour of each.
2. Which two hold without power, and why does that matter?
3. Why is pneumatic usually eliminated on space rather than force?
4. A cylinder sized correctly for extending delivers what fraction on retract with a large rod?
5. Why is a pneumatic clamp a spring, and what does that threaten?
6. What is the absolute ceiling on vacuum holding, and why?
7. What do vacuum and magnetic have in common regarding side load?
8. Why must vacuum and magnetic be sensed?
9. State the four flexibility levels and what each is for.
10. What is the deciding variable between modular and dedicated?
11. Why is worst-case stacking correct for a modular setup?
12. What did the modular stack consume of the fixture allocation, and why is that serious?
13. State the two benefits of a zero-point system and which is undersold.
14. Why does zero-point rescue dedicated fixturing?
15. Rank the four adjustment mechanisms by repeatability.
16. What is the multi-part saving equal to?
17. Why did four parts save only 7.7% in the L2.2.5 case?
18. What proportion of the maximum does four parts typically capture?
19. What five things change when a fixture rotates?
20. Why is clearance the governing constraint on 5-axis?
21. What is the test for whether palletisation will work?
22. What was the largest single contributor to the saving in the L3.2.3 example, and what does that
    imply?
23. Why does tombstone height matter so much?
24. State the general rule for when a time saving is worth money.

### Exit criterion for Module 3.2

You may proceed when, for an unfamiliar part and process, you can:
- **select an actuation method from cycle time, consistency, failure behaviour and cost**
- **size a cylinder on the correct stroke at the measured supply pressure**
- **recognise when vacuum or magnetic is appropriate, and fit a positive stop**
- **select a flexibility level from recurrence, on lifetime cost**
- **calculate a modular stack worst case and compare it with the allocation**
- **justify or reject a zero-point interface**
- **split a cycle into per-part and fixed terms and calculate the multi-part curve**
- **size clamping for the worst orientation of a rotating fixture**
- **and determine whether palletisation will actually work for this part**

---

# MODULE 3.3 — CLASSIFICATION BY AUTOMATION LEVEL

**Prerequisite:** Modules 3.1 and 3.2. **Lessons:** 3. **Estimated time:** 2.5 h.

**The organising question:**

> **Who or what loads the fixture, and how do we know it was loaded correctly?**

```
   THE TWO HALVES OF THIS MODULE

   L3.3.1  WHO LOADS IT
     operator · semi-automatic · automatic ·
     robot

   L3.3.2  HOW DO WE KNOW IT IS RIGHT
     Poka-Yoke — make the wrong thing impossible
     Sensors — detect the wrong thing

   ┌──────────────────────────────────────────────┐
   │ THESE ARE NOT INDEPENDENT.                   │
   │                                              │
   │ THE MORE AUTOMATED THE LOADING, THE LESS     │
   │ JUDGEMENT IS PRESENT — AND THE MORE THE      │
   │ FIXTURE MUST SUPPLY THE JUDGEMENT ITSELF.    │
   │                                              │
   │ AN OPERATOR NOTICES A CHIP UNDER A PART. A   │
   │ ROBOT DOES NOT.                              │
   └──────────────────────────────────────────────┘

   L3.3.3  THE FIXTURE SELECTION DECISION TREE
     Everything from all three modules, as one
     route from requirement to fixture family.
```

---

## LESSON L3.3.1 — CLASSIFICATION BY AUTOMATION LEVEL

### 1. Lesson title
**L3.3.1 — Operator-loaded, semi-automatic, automatic and robot-loaded fixtures**

### 2. Learning objective
By the end of this lesson you will be able to state what each automation level requires of the fixture,
explain what is lost when the operator is removed and what must replace it, describe the specific
requirements of robot loading, calculate whether an automation level is justified, and recognise the
failure modes that appear only at higher automation levels.

### 3. Prerequisites
L2.2.4 (safety, hierarchy of control, ergonomics), L2.2.5 (cycle time, capacity), L3.2.1 (actuation),
L3.2.3 (palletisation, loading stations).

### 4. Why the topic matters
**Automating the loading removes a human being from the process, and the human being was doing more than
lifting.**

```
   WHAT AN OPERATOR DOES THAT NOBODY SPECIFIED

   ✔ notices the part is the wrong one
   ✔ notices a chip on the locator
   ✔ notices the casting has a flash line that
     is not usually there
   ✔ feels that the part did not seat
   ✔ hears that the cut sounds wrong
   ✔ sees coolant where it should not be
   ✔ decides not to load a damaged part
   ✔ stops the machine when something is odd

   ┌──────────────────────────────────────────────┐
   │ NONE OF THIS IS IN ANY SPECIFICATION, AND    │
   │ ALL OF IT DISAPPEARS THE DAY YOU AUTOMATE.   │
   │                                              │
   │ THE FIXTURE MUST THEN SUPPLY IT — THROUGH    │
   │ POKA-YOKE FEATURES AND SENSORS — OR THE      │
   │ FAULT RATE RISES AND NOBODY UNDERSTANDS WHY. │
   │                                              │
   │ AUTOMATION DOES NOT REMOVE THE NEED FOR      │
   │ JUDGEMENT. IT MOVES THE JUDGEMENT INTO THE   │
   │ HARDWARE.                                    │
   └──────────────────────────────────────────────┘
```

### 5. Simple explanation

```
   THE FOUR LEVELS

   OPERATOR-LOADED
     A person loads, clamps, unclamps, unloads.
     → simplest fixture · maximum judgement
       present · slowest · least consistent

   SEMI-AUTOMATIC
     A person loads; the machine clamps.
     → the commonest arrangement in practice
     → consistent clamp force, human judgement
       retained

   AUTOMATIC
     A mechanism loads — a feeder, a magazine,
     a transfer.
     → high volume, simple part, no judgement

   ROBOT-LOADED
     A robot loads from a fixed presentation.
     → flexible, but the fixture must be
       ROBOT-COMPATIBLE, which is a real
       constraint

   ┌──────────────────────────────────────────────┐
   │ SEMI-AUTOMATIC IS UNDERRATED. IT CAPTURES    │
   │ MOST OF THE CONSISTENCY AND SPEED BENEFIT    │
   │ WHILE KEEPING THE OPERATOR'S JUDGEMENT — AND │
   │ IT IS FAR CHEAPER THAN FULL AUTOMATION.      │
   │                                              │
   │ THE L3.2.1 CASE WENT FROM 42 s TO 8 s OF     │
   │ CLAMPING TIME PURELY BY POWERING THE CLAMPS. │
   │ THE OPERATOR STILL LOADED THE PART.          │
   └──────────────────────────────────────────────┘
```

### 6. Engineering explanation

**WHAT EACH LEVEL DEMANDS OF THE FIXTURE**

`[PRACTICE]`

| | Operator | Semi-automatic | Automatic | Robot |
|---|---|---|---|---|
| **Loading access** | Human reach and posture | Same | Mechanism path | **Robot approach vector** |
| **Part presentation** | Operator orients it | Same | Fed oriented | **Must be oriented before pick** |
| **Clamping** | Manual | Powered | Powered | Powered |
| **Confirmation of seating** | Operator feels it | **Sensor needed** | Sensor essential | Sensor essential |
| **Wrong-part detection** | Operator sees it | Operator sees it | **Poka-Yoke essential** | **Poka-Yoke essential** |
| **Chip on locator** | Operator sees it | Operator sees it | **Must be blown or sensed** | **Must be blown or sensed** |
| **Damaged part rejection** | Operator judges | Operator judges | Not possible without sensing | Not possible without sensing |
| **Recovery from a fault** | Operator intervenes | Operator intervenes | **Must be designed** | **Must be designed** |
| **Fixture cost** | Lowest | Moderate | High | High |
| **Cycle consistency** | Poorest | Good | **Best** | Very good |

```
   ┌──────────────────────────────────────────────┐
   │ READ THE THREE ROWS IN THE MIDDLE.           │
   │                                              │
   │ SEATING CONFIRMATION, WRONG-PART DETECTION   │
   │ AND CHIP DETECTION ARE FREE AT THE OPERATOR  │
   │ LEVEL AND MUST BE ENGINEERED AT THE          │
   │ AUTOMATED LEVELS.                            │
   │                                              │
   │ THE COST OF AUTOMATION IS NOT THE ROBOT. IT  │
   │ IS THE SENSING AND ERROR-PROOFING THAT THE   │
   │ ROBOT MAKES NECESSARY.                       │
   └──────────────────────────────────────────────┘
```

**WHAT ROBOT LOADING SPECIFICALLY REQUIRES**

```
   1 A DEFINED APPROACH VECTOR
     The robot arrives along a straight line, and
     needs clearance along the whole of it — not
     just at the destination.
     → THE FIXTURE MUST BE OPEN FROM THE APPROACH
       DIRECTION
     → clamps must be clear during approach, not
       only when open

   2 THE PART PRESENTED IN A KNOWN ORIENTATION
     A robot has no judgement. The part must
     arrive oriented — from a feeder, a fixture,
     a vision system or a moulded tray.
     → PART PRESENTATION IS OFTEN A LARGER
       PROBLEM THAN THE FIXTURE

   3 CHAMFERS AND LEAD-INS EVERYWHERE
     A robot places the part within its own
     accuracy, which is coarser than a person's
     feel.
     [MFR] Robot repeatability is a published
     figure and is NOT the same as accuracy.
     → the fixture must ACCEPT a part placed
       slightly wrong and GUIDE it in

   4 COMPLIANCE SOMEWHERE
     Either the gripper, the fixture or the robot
     must give. A rigid robot placing a part into
     a rigid fixture will jam or damage
     something.
     → compliant gripper, or spring-loaded
       locating, or force control

   5 CONFIRMATION THAT THE PART IS THERE AND
     SEATED
     → part-present sensor
     → seated sensor
     → clamp-confirmed sensor

   6 A FAULT RECOVERY PLAN
     What happens when the part is not seated?
     When the gripper drops it? When a chip
     prevents seating?
     → THE ANSWER "AN OPERATOR SORTS IT OUT" IS
       ACCEPTABLE, BUT IT MUST BE DESIGNED FOR:
       ACCESS, GUARDING, AND A SAFE STATE

   ┌──────────────────────────────────────────────┐
   │ POINT 3 IS THE ONE THAT DISTINGUISHES A      │
   │ ROBOT FIXTURE FROM A MANUAL ONE MOST         │
   │ VISIBLY.                                     │
   │                                              │
   │ GENEROUS CHAMFERS AND LEAD-INS ARE NOT       │
   │ SLOPPINESS — THEY ARE THE MECHANISM BY WHICH │
   │ A COARSE PLACEMENT BECOMES A PRECISE         │
   │ LOCATION.                                    │
   │                                              │
   │ AND NOTE THE TENSION: THE LEAD-IN MUST BE    │
   │ BIG ENOUGH TO CATCH THE ROBOT'S ERROR AND    │
   │ SMALL ENOUGH NOT TO COMPROMISE THE LOCATION. │
   │ THAT IS A CALCULATION, NOT A STYLE CHOICE.   │
   └──────────────────────────────────────────────┘
```

**THE LEAD-IN CALCULATION**

```
   THE REQUIREMENT

   Lead-in must exceed the total placement error:

     Lead-in ≥ robot repeatability
               + part variation
               + gripper variation
               + fixture position tolerance
               + a margin

   AND the locating feature must still control the
   part once it is seated — so the lead-in is a
   CHAMFER OR TAPER leading to a precise
   diameter, not an oversized hole.

   ┌──────────────────────────────────────────────┐
   │ THE TWO REQUIREMENTS PULL IN OPPOSITE        │
   │ DIRECTIONS AND BOTH MUST BE MET. A TAPERED   │
   │ LEAD-IN TO A PRECISE LAND IS THE STANDARD    │
   │ RESOLUTION, AND IT IS A FALSE CONFLICT       │
   │ (L2.2.6, QUESTION 2: CHANGE THE GEOMETRY     │
   │ LOCALLY).                                    │
   └──────────────────────────────────────────────┘
```

**THE FAULT THAT ONLY APPEARS WHEN AUTOMATED**

```
   MANUAL PROCESS
     A chip lands on a locator.
     The operator sees it and wipes it off.
     NOTHING HAPPENS. It is not even an event.

   AUTOMATED PROCESS
     A chip lands on a locator.
     The robot places the part on the chip.
     The clamps close — with enough force to
     seat the part on the chip.
     The part is machined 0.4 mm out of position.
     IT PASSES EVERY SENSOR THAT CHECKS "PART
     PRESENT" AND "CLAMP CLOSED".

   ┌──────────────────────────────────────────────┐
   │ THIS IS THE CHARACTERISTIC AUTOMATION        │
   │ FAILURE, AND IT IS WHY "PART PRESENT" AND    │
   │ "CLAMP CLOSED" ARE NOT SUFFICIENT SENSING.   │
   │                                              │
   │ WHAT IS NEEDED IS "PART SEATED" — AND THE    │
   │ USUAL METHOD IS AN AIR SEAT CHECK, WHICH     │
   │ L3.3.2 COVERS.                               │
   │                                              │
   │ NOTE ALSO THAT THE HUMAN SOLUTION WAS FREE   │
   │ AND INVISIBLE. NOBODY WROTE "OPERATOR WIPES  │
   │ CHIP OFF LOCATOR" IN A PROCESS SHEET, SO     │
   │ NOBODY MISSED IT WHEN IT WENT AWAY.          │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Operator-loaded** | A person performs loading and clamping |
| **Semi-automatic** | A person loads; the machine clamps |
| **Automatic** | A mechanism loads without a person |
| **Robot-loaded** | An articulated or gantry robot loads |
| **Approach vector** | The straight-line path along which a robot places a part |
| **Part presentation** | Delivering the part oriented and positioned for picking |
| **End effector / gripper** | The robot's tooling that holds the part |
| **Compliance** | Deliberate give, allowing a slight misalignment to correct |
| **Repeatability (robot)** | How consistently it returns to a taught point `[MFR]` |
| **Accuracy (robot)** | How closely it reaches a commanded point — **usually worse** `[MFR]` |
| **Lead-in** | A chamfer or taper guiding a part into a locator |
| **Part-present sensor** | Confirms something is there |
| **Seated sensor** | Confirms the part is fully against the locator |
| **Air seat check** | Detects seating by measuring back-pressure through a small orifice |
| **Fault recovery** | The designed response to an abnormal condition |
| **Lights-out** | Running unattended, typically overnight |

### 8. Principle

> **AUTOMATION DOES NOT REMOVE THE NEED FOR JUDGEMENT; IT MOVES THE JUDGEMENT INTO THE HARDWARE.**
> **THE OPERATOR WAS DOING MORE THAN LIFTING** — seeing chips, feeling seating, rejecting damaged parts,
> stopping when something was odd. None of it was specified, and all of it disappears.
> **THE COST OF AUTOMATION IS NOT THE ROBOT; IT IS THE SENSING AND ERROR-PROOFING THE ROBOT MAKES
> NECESSARY.**
> **SEMI-AUTOMATIC IS UNDERRATED**: most of the consistency and speed benefit, with the judgement
> retained, at a fraction of the cost.
> **A ROBOT NEEDS A CLEAR APPROACH VECTOR, AN ORIENTED PART, GENEROUS LEAD-INS, COMPLIANCE SOMEWHERE,
> SEATING CONFIRMATION AND A FAULT RECOVERY PLAN.**
> **"PART PRESENT" AND "CLAMP CLOSED" ARE NOT SUFFICIENT SENSING.** A part seated on a chip satisfies
> both.
> **PART PRESENTATION IS OFTEN A LARGER PROBLEM THAN THE FIXTURE.**

### 9. Industrial application

**The honest automation decision** `[PRACTICE]`

```
   AUTOMATE WHEN
     ✔ volume is high and stable
     ✔ the cycle is long enough that loading is
       not the constraint
     ✔ the part is consistent — automation cannot
       cope with variation a person absorbs
     ✔ the part presentation problem is solvable
     ✔ THE JUDGEMENT THE OPERATOR PROVIDED CAN BE
       REPLACED BY SENSING

   DO NOT AUTOMATE WHEN
     ✗ the part varies — castings with flash,
       weldments, anything hand-finished
     ✗ volume is modest, or the mix is high
     ✗ the presentation problem is unsolved
     ✗ the fault rate is already high — AUTOMATION
       MULTIPLIES AN EXISTING PROBLEM RATHER THAN
       FIXING IT
     ✗ nobody has costed the sensing

   ┌──────────────────────────────────────────────┐
   │ THE FOURTH ONE IS THE ONE I WOULD PRESS      │
   │ HARDEST.                                     │
   │                                              │
   │ AUTOMATION MAKES A GOOD PROCESS FASTER AND A │
   │ BAD PROCESS FASTER AT BEING BAD. IF THE      │
   │ MANUAL PROCESS HAS A 3 % FAULT RATE THAT THE │
   │ OPERATOR IS QUIETLY ABSORBING, AUTOMATING IT │
   │ CONVERTS INVISIBLE REWORK INTO VISIBLE       │
   │ STOPPAGES.                                   │
   │                                              │
   │ FIX THE PROCESS FIRST. THIS IS CS-01's       │
   │ LESSON IN ANOTHER DOMAIN.                    │
   └──────────────────────────────────────────────┘
```

**The lights-out run that made 340 scrap parts** `[EX-ASSUMED]`:

```
SITUATION
  A robot-loaded cell ran unattended overnight —
  eight hours, a part every 84 seconds, about 340
  parts.

WHAT HAPPENED
  At about 01:20 a chip lodged on a locator pad.
  Every subsequent part was placed on it and
  machined 0.31 mm out of position.

  THE CELL RAN PERFECTLY. Every sensor was
  satisfied: part present, clamps closed, cycle
  complete. The robot never faulted.

  THE MORNING SHIFT FOUND 340 PARTS, ALL SCRAP.

WHAT WAS MISSING
  A seating check. The fixture had part-present
  sensors and clamp-confirmation sensors, and
  neither can distinguish "seated" from "seated
  on a chip".

  It also had no chip blow-off, and no in-process
  measurement.

THE FIX
  - air seat check on the primary locating pads,
    interlocked to inhibit the cycle
  - a chip blow-off sequence before each load
  - a probing routine every 20 parts, checking a
    known feature

  Cost: a small fraction of one night's scrap.

┌──────────────────────────────────────────────┐
│ LIGHTS-OUT RUNNING MULTIPLIES EVERY           │
│ UNDETECTED FAULT BY THE NUMBER OF PARTS MADE  │
│ BEFORE SOMEBODY LOOKS.                        │
│                                               │
│ THE ECONOMIC CASE FOR SENSING SCALES WITH THE │
│ UNATTENDED PERIOD, AND ON A LIGHTS-OUT CELL   │
│ IT IS OVERWHELMING.                           │
│                                               │
│ AND NOTE THE RISK CONCENTRATION ARGUMENT FROM │
│ L3.2.3 APPEARING AGAIN, IN TIME RATHER THAN   │
│ IN STATIONS.                                  │
└──────────────────────────────────────────────┘
```

### 10. Design rules
- **R1** — Establish **what judgement the operator currently provides** before removing them.
- **R2** — Cost the **sensing and error-proofing** as part of the automation, not as an extra.
- **R3** — Consider **semi-automatic first**; it captures most of the benefit cheaply.
- **R4** — For robot loading, define the **approach vector** and clear it along its whole length.
- **R5** — Solve **part presentation** before designing the fixture; it is often the larger problem.
- **R6** — Provide **lead-ins sized by calculation** — robot repeatability plus part, gripper and fixture
  variation, plus margin.
- **R7** — Keep the **precise locating land** beyond the lead-in; a lead-in is not an oversized hole.
- **R8** — Put **compliance somewhere** — gripper, fixture or robot.
- **R9** — Use **robot accuracy, not repeatability**, unless the point is taught `[MFR]`.
- **R10** — Sense **seating**, not just presence and clamp state.
- **R11** — Provide **chip blow-off** on any automated fixture.
- **R12** — Design the **fault recovery** — access, guarding and a safe state.
- **R13** — Scale the sensing investment to the **unattended period**.
- **R14** — **Do not automate an unstable process**; fix it first.

### 11. Rules of thumb
- **Automation moves judgement into the hardware; it does not remove the need for it.**
- **The operator was doing more than lifting, and none of it was specified.**
- **The cost of automation is the sensing, not the robot.**
- **Semi-automatic is underrated.**
- **Part presentation is often harder than the fixture.**
- **Robot accuracy is worse than robot repeatability — know which applies.**
- **Lead-ins are a calculation, not a style.**
- **"Part present" and "clamp closed" are not sufficient — sense seating.**
- **Always provide chip blow-off on an automated fixture.**
- **Lights-out multiplies every undetected fault by the parts made before somebody looks.**
- **Automation makes a bad process faster at being bad.**

### 12. Formulae

**Lead-in sizing**
```
Lead-in ≥ e_robot + e_part + e_gripper
          + e_fixture + margin

where e_robot is the ACCURACY figure for an
untaught point, or the REPEATABILITY figure for a
taught one  [MFR]

┌──────────────────────────────────────────────┐
│ THE DISTINCTION MATTERS. MANUFACTURERS       │
│ PUBLISH REPEATABILITY PROMINENTLY BECAUSE IT │
│ IS THE BETTER NUMBER. ACCURACY — HOW CLOSE   │
│ THE ROBOT GETS TO A COMMANDED COORDINATE IT  │
│ WAS NOT TAUGHT — IS TYPICALLY SUBSTANTIALLY  │
│ WORSE AND IS THE RELEVANT FIGURE FOR         │
│ OFF-LINE PROGRAMMED MOTION.                  │
│                                              │
│ OBTAIN BOTH. [MFR]                           │
└──────────────────────────────────────────────┘
```

**Chamfer geometry**
```
For a chamfer of axial depth h at angle α,
radial capture = h · tan α

A 45° chamfer captures radially what it consumes
axially.
A shallower angle captures more radially for the
same depth but guides less positively.
```

**Automation economics**
```
Annual saving = (t_manual − t_auto) × N × rate
                + labour released × labour rate
                + quality improvement

Cost = robot + gripper + presentation
       + SENSING AND ERROR-PROOFING
       + guarding and safety
       + integration and programming
       + maintenance

[PRACTICE] The sensing, guarding and integration
terms are routinely omitted from first estimates
and are frequently comparable to the robot cost
itself. CONFIRM THEM BEFORE QUOTING.
```

**Unattended running exposure**
```
Parts at risk = unattended hours × 3600
                / cycle time

Exposure = parts at risk × part value

┌──────────────────────────────────────────────┐
│ THIS IS THE NUMBER THAT JUSTIFIES SENSING.   │
│ IT IS USUALLY LARGE AND IT IS ALMOST NEVER   │
│ CALCULATED.                                  │
└──────────────────────────────────────────────┘
```

| Variable | Meaning | Unit |
|---|---|---|
| e_robot | Robot accuracy or repeatability `[MFR]` | mm |
| h | Chamfer axial depth | mm |
| α | Chamfer angle from the axis | ° |
| N | Annual volume | parts/yr |

### 13. Worked numerical example

**Problem:** A manual cell is to be robot-loaded for lights-out running. Size the lead-ins, evaluate the
sensing requirement against the unattended exposure, and determine whether the automation is justified.

```
GIVEN:
  PART AND CURRENT PROCESS                      [PROJ]
    Aluminium housing, 1.9 kg
    Part value at this stage      = ₹4,200
    Cycle: load 26 s, clamp 7 s (powered),
      cut 118 s, unclamp 4 s, unload 9 s,
      clean 8 s
    TOTAL                         = 172 s
    Volume                        = 48,000/yr
    Programme                     = 5 years
    Machine rate                  = ₹1,900/h
    Operator rate                 = ₹340/h
    Machine available             = 3,600 h/yr
      first shift + 3,600 second shift
      Currently run 2 shifts, 92 % utilised

  PROPOSED ROBOT CELL                      [EX-ASSUMED]
    Robot load/unload             = 14 s
      (overlapped with nothing; the machine
       waits)
    Target: run a THIRD unattended shift
      of 8 h, lights-out
    Robot repeatability `[MFR]`   = ±0.05 mm
    Robot accuracy `[MFR]`        = ±0.35 mm
    Points will be TAUGHT, not off-line
      programmed                          [PROJ]
    Gripper positional variation  = ±0.12 mm
                                        [EX-ASSUMED]
    Part-to-part variation at the
      picked feature              = ±0.15 mm
                                             [PROJ]
    Fixture locator position tol  = ±0.02 mm
                                             [PROJ]

  COSTS                                    [EX-ASSUMED]
    Robot + gripper + integration = ₹2,400,000
    Part presentation (tray system
      + vision)                   = ₹980,000
    Guarding and safety           = ₹420,000
    Fixture modification          = ₹185,000
    SENSING AND ERROR-PROOFING    = ₹310,000
    ────────────────────────────────────────
    TOTAL                         = ₹4,295,000

REQUIRED:
  (a) Required lead-in, and the chamfer geometry
      to deliver it
  (b) The same if points were programmed off-line
      rather than taught
  (c) Unattended exposure — parts at risk and
      their value
  (d) Third-shift output and its value
  (e) Payback
  (f) The sensing case, assessed against the
      exposure
  (g) Capacity check
  (h) Selection and conditions

ASSUMPTION:
  1. Robot repeatability and accuracy are
     MANUFACTURER'S FIGURES and are different
     quantities. Repeatability applies because the
     points are TAUGHT. [MFR]/[PROJ]
  2. Gripper and part variations are estimates
     requiring measurement. [EX-ASSUMED]/[PROJ]
  3. Errors combined WORST CASE for the lead-in,
     because a jam is a hard failure and there is
     no averaging across a single placement.
     [PRACTICE]
  4. The third shift is genuinely unattended —
     no operator present to detect faults. THIS
     IS THE ASSUMPTION THAT DRIVES THE SENSING
     REQUIREMENT. [PROJ]
  5. Sensing cost of ₹310,000 covers air seat
     checks, chip blow-off and a periodic probing
     routine. [EX-ASSUMED]
  6. Second-shift utilisation of 92 % means the
     first two shifts are effectively full; the
     benefit comes from the THIRD shift, not from
     the 12 s cycle reduction. [PROJ]

FORMULA:
  Lead-in ≥ Σ errors + margin
  radial capture = h · tan α
  Parts at risk = hours × 3600/t_cycle
  Payback = capital/(annual saving/12)

SUBSTITUTION AND CALCULATION:

  (a) LEAD-IN REQUIRED, TAUGHT POINTS

      Contributions (worst case):
        robot repeatability    0.05
        gripper variation      0.12
        part variation         0.15
        fixture tolerance      0.02
        ──────────────────────────
        SUM                    0.34 mm

      Margin at 50 %  [PRACTICE]
        Lead-in required = 0.34 × 1.5
                         = 0.51 mm

      Round up: LEAD-IN = 0.6 mm radial

      CHAMFER TO DELIVER IT
        At 45°: h = 0.6/tan 45° = 0.60 mm axial
        At 30°: h = 0.6/tan 30° = 1.04 mm axial
        At 20°: h = 0.6/tan 20° = 1.65 mm axial

      ┌────────────────────────────────────────────┐
      │ A 30° CHAMFER 1.04 mm DEEP CAPTURES        │
      │ 0.6 mm RADIALLY AND GUIDES MORE GENTLY     │
      │ THAN 45°, AT THE COST OF DEPTH.            │
      │                                            │
      │ AND CRITICALLY: THE PRECISE LOCATING LAND  │
      │ SITS BEYOND THE CHAMFER, UNCHANGED. THE    │
      │ LEAD-IN GUIDES; IT DOES NOT LOCATE.        │
      │                                            │
      │ THIS IS THE L2.2.6 FALSE-CONFLICT          │
      │ RESOLUTION — CHANGE THE GEOMETRY LOCALLY.  │
      └────────────────────────────────────────────┘

  (b) IF PROGRAMMED OFF-LINE

      Robot ACCURACY ±0.35 mm replaces
      repeatability ±0.05 mm.

      Sum = 0.35 + 0.12 + 0.15 + 0.02
          = 0.64 mm
      With margin = 0.96 mm
      Round: LEAD-IN = 1.0 mm radial

      RATIO vs taught = 1.0/0.6 = 1.67×

      ┌────────────────────────────────────────────┐
      │ TEACHING THE POINTS REDUCES THE REQUIRED   │
      │ LEAD-IN BY 40 %.                           │
      │                                            │
      │ USING THE REPEATABILITY FIGURE WHERE       │
      │ ACCURACY APPLIES WOULD UNDERSIZE THE       │
      │ LEAD-IN BY THE SAME MARGIN — AND THE       │
      │ FAILURE MODE IS A JAM, WHICH ON AN         │
      │ UNATTENDED SHIFT STOPS THE CELL.           │
      │                                            │
      │ MANUFACTURERS QUOTE REPEATABILITY          │
      │ PROMINENTLY BECAUSE IT IS THE BETTER       │
      │ NUMBER. KNOW WHICH ONE APPLIES.            │
      └────────────────────────────────────────────┘

  (c) UNATTENDED EXPOSURE

      New cycle = 14 + 7 + 118 + 4 + 8
                = 151 s
        (robot load/unload 14 s replaces the
         26 + 9 = 35 s manual; clean retained)

      Parts in an 8-hour unattended shift:
        8 × 3600/151 = 190.7 → 190 parts

      EXPOSURE if a fault goes undetected from
      the start of the shift:
        190 × ₹4,200 = ₹798,000

      ┌────────────────────────────────────────────┐
      │ ₹798,000 OF EXPOSURE PER UNATTENDED SHIFT. │
      │                                            │
      │ THE SENSING PACKAGE COSTS ₹310,000 — LESS  │
      │ THAN HALF OF ONE BAD NIGHT.                │
      │                                            │
      │ 310,000/798,000 = 38.8 %                   │
      │                                            │
      │ THE SENSING PAYS FOR ITSELF IF IT PREVENTS │
      │ ONE FAULT IN THE CELL'S ENTIRE LIFE.       │
      └────────────────────────────────────────────┘

      Over the programme:
        Unattended shifts ≈ 240/yr × 5
                          = 1,200 shifts
        At even a 0.5 % chance of an undetected
        fault per shift [EX-ASSUMED]:
          Expected events = 6
          Expected loss   = 6 × 798,000
                          = ₹4,788,000

      ┌────────────────────────────────────────────┐
      │ THAT EXPECTED LOSS EXCEEDS THE ENTIRE      │
      │ AUTOMATION CAPITAL OF ₹4,295,000.          │
      │                                            │
      │ THE 0.5 % FIGURE IS AN ASSUMPTION AND      │
      │ SHOULD NOT BE PRESENTED AS A PREDICTION —  │
      │ BUT IT DOES NOT NEED TO BE ACCURATE TO     │
      │ MAKE THE POINT. AT 0.1 % THE EXPECTED LOSS │
      │ IS STILL ₹958,000, OR 3.1× THE SENSING     │
      │ COST.                                      │
      └────────────────────────────────────────────┘

  (d) THIRD-SHIFT OUTPUT AND VALUE

      Parts per unattended shift = 190
      Shifts per year            = 240 [EX-ASSUMED]
      Additional parts           = 45,600/yr

      ┌────────────────────────────────────────────┐
      │ THAT NEARLY DOUBLES THE CELL'S OUTPUT —    │
      │ 48,000 TO 93,600.                          │
      │                                            │
      │ BUT: IS THERE DEMAND FOR 93,600?           │
      │                                            │
      │ THE STATED VOLUME IS 48,000. PRODUCING     │
      │ 93,600 IS NOT A BENEFIT UNLESS THEY SELL.  │
      │ THIS IS THE CAPACITY QUESTION IN ITS       │
      │ MOST DIRECT FORM.                          │
      └────────────────────────────────────────────┘

      RE-FRAMING THE BENEFIT CORRECTLY

      If demand is 48,000, the third shift is not
      extra output. It is a way of making the
      SAME output in fewer manned shifts.

      Hours required at 151 s:
        48,000 × 151/3600 = 2,013.3 h

      Currently at 172 s over 2 shifts:
        48,000 × 172/3600 = 2,293.3 h
        against 7,200 available over 2 shifts
        → 31.9 % of the two shifts

      ┌────────────────────────────────────────────┐
      │ WAIT. THE STATED 92 % UTILISATION IS       │
      │ ACROSS ALL WORK, NOT THIS PART.            │
      │                                            │
      │ THIS PART USES 2,293 OF 7,200 HOURS —      │
      │ 31.9 %. THE OTHER 60 % IS OTHER WORK.      │
      │                                            │
      │ SO THE THIRD SHIFT DOES NOT HAVE TO MAKE   │
      │ THIS PART. IT COULD MAKE ANY OF THE WORK   │
      │ CURRENTLY COMPETING FOR THE FIRST TWO      │
      │ SHIFTS — WHICH IS A MUCH STRONGER CASE,    │
      │ AND A DIFFERENT ONE.                       │
      └────────────────────────────────────────────┘

      THE HONEST BENEFIT STATEMENT
        1 Cycle reduction 172 → 151 s on 48,000
          parts:
            48,000 × 21/3600 = 280 h
            × ₹1,900 = ₹532,000/yr
        2 A third shift of machine capacity
          released: 8 h × 240 = 1,920 h/yr,
          worth up to
            1,920 × 1,900 = ₹3,648,000/yr
          IF FILLED WITH WORK THAT WOULD
          OTHERWISE REQUIRE ANOTHER MACHINE
        3 Operator time on shifts 1 and 2:
          loading reduced from 35 s to 0
            48,000 × 35/3600 = 466.7 h
            × ₹340 = ₹158,678/yr
          ONLY IF THE OPERATOR IS REDEPLOYED

  (e) PAYBACK

      CONSERVATIVE (items 1 and 3 only, no
      third-shift credit):
        532,000 + 158,678 = ₹690,678/yr
        Payback = 4,295,000/(690,678/12)
                = 4,295,000/57,557
                = 74.6 months = 6.2 years

        AGAINST A 5-YEAR PROGRAMME → FAILS

      WITH THE THIRD SHIFT AT 50 % FILLED
      [EX-ASSUMED]:
        532,000 + 158,678 + 0.5 × 3,648,000
        = 690,678 + 1,824,000
        = ₹2,514,678/yr
        Payback = 4,295,000/(2,514,678/12)
                = 4,295,000/209,557
                = 20.5 months

        AGAINST A 5-YEAR PROGRAMME → PASSES

      ┌────────────────────────────────────────────┐
      │ THE ENTIRE DECISION TURNS ON WHETHER THE   │
      │ THIRD SHIFT IS FILLED.                     │
      │                                            │
      │ WITHOUT IT: 6.2 YEARS, AGAINST A 5-YEAR    │
      │ PROGRAMME. FAILS.                          │
      │ WITH IT HALF-FILLED: 20.5 MONTHS. PASSES   │
      │ COMFORTABLY.                               │
      │                                            │
      │ A FACTOR OF 3.64 IN PAYBACK, FROM AN       │
      │ ASSUMPTION THAT IS NOT AN ENGINEERING      │
      │ QUANTITY AT ALL.                           │
      └────────────────────────────────────────────┘

  (f) THE SENSING CASE

      Sensing cost           = ₹310,000
      One bad shift          = ₹798,000
      Ratio                  = 38.8 %

      Sensing as a fraction of total capital:
        310,000/4,295,000 = 7.2 %

      ┌────────────────────────────────────────────┐
      │ SEVEN PER CENT OF THE CAPITAL PROTECTS THE │
      │ OTHER NINETY-THREE.                        │
      │                                            │
      │ AND IT IS THE LINE MOST LIKELY TO BE CUT   │
      │ WHEN THE QUOTATION COMES BACK TOO HIGH,    │
      │ BECAUSE IT IS THE ONLY LINE THAT DOES NOT  │
      │ VISIBLY DO ANYTHING.                       │
      │                                            │
      │ IT IS ALSO THE LINE WITHOUT WHICH THE      │
      │ UNATTENDED SHIFT — THE ENTIRE JUSTIFICATION│
      │ FOR THE PROJECT — CANNOT SAFELY RUN.       │
      └────────────────────────────────────────────┘

  (g) CAPACITY CHECK

      Two manned shifts: 7,200 h, 92 % utilised
        → 576 h spare across all work
      This part needs 2,013 h after the change,
        down from 2,293 h → 280 h released

      Third shift adds 1,920 h of availability.

      Total availability after: 9,120 h
      Total demand (all work, unchanged):
        0.92 × 7,200 = 6,624 h
      Utilisation after = 6,624/9,120 = 72.6 %

      ┌────────────────────────────────────────────┐
      │ SO THE CELL WOULD RUN AT 72.6 % ACROSS     │
      │ THREE SHIFTS — WHICH MEANS THE THIRD SHIFT │
      │ IS NOT FULL, AND THE 50 % FILL ASSUMPTION  │
      │ IN (e) IS ROUGHLY CONSISTENT WITH THE      │
      │ CURRENT ORDER BOOK.                        │
      │                                            │
      │ IT IS NOT EVIDENCE THAT THE ORDER BOOK     │
      │ WILL GROW.                                 │
      └────────────────────────────────────────────┘

  (h) SELECTION

      RECOMMENDATION: PROCEED, CONDITIONAL.

      CONDITION 1 — the customer must confirm that
      at least half the third shift will be filled
      with work that would otherwise require
      additional capacity. WITHOUT IT THE PAYBACK
      IS 6.2 YEARS AGAINST A 5-YEAR PROGRAMME AND
      THE PROJECT FAILS.

      CONDITION 2 — the sensing package is not
      optional. At ₹310,000 against a ₹798,000
      exposure per unattended shift, it is the
      cheapest item in the project relative to
      what it protects.

      CONDITION 3 — points must be TAUGHT, giving
      a 0.6 mm lead-in. If off-line programming is
      required later, the lead-ins must be
      1.0 mm and the fixture re-assessed.

      CONDITION 4 — part variation of ±0.15 mm is
      an estimate and is 44 % of the total
      lead-in requirement. IT MUST BE MEASURED
      BEFORE THE FIXTURE IS MADE.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Error sum, taught        │ 0.34 mm           │
  │     Lead-in with 50 % margin │ 0.51 → 0.6 mm     │
  │     Chamfer at 30°           │ 1.04 mm axial     │
  │ (b) Off-line programmed      │ 0.64 → 1.0 mm     │
  │     Ratio                    │ 1.67×             │
  │ (c) New cycle                │ 151 s             │
  │     Parts per unattended     │ 190               │
  │     shift                    │                   │
  │     EXPOSURE PER SHIFT       │ ₹798,000          │
  │     Sensing as a fraction    │ 38.8 % of one bad │
  │                              │ shift             │
  │ (d) Third-shift capacity     │ 1,920 h/yr        │
  │ (e) Payback, no third shift  │ 74.6 mo = 6.2 yr  │
  │                              │ ✗ FAILS           │
  │     With 50 % filled         │ 20.5 months ✓     │
  │     Factor                   │ 3.64×             │
  │ (f) Sensing / total capital  │ 7.2 %             │
  │ (g) Utilisation, 3 shifts    │ 72.6 %            │
  │ (h) RECOMMENDATION           │ proceed on four   │
  │                              │ conditions        │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Lead-in margin of 50 % over the worst-case error
  sum [PRACTICE]. Note that worst case was used
  rather than RSS, because a jam is a hard failure
  with no averaging — the same reasoning as the
  modular stack in L3.2.2.
  The economic margin is 20.5 months against a
  60-month programme, 2.93× — adequate but not
  generous, and entirely dependent on Condition 1.

PASS/FAIL:
  ✓ PASS — lead-in design, 0.6 mm with taught
    points
  ✗ FAIL — economics without the third shift:
    6.2-year payback against a 5-year programme
  ✓ PASS — economics with the third shift half
    filled: 20.5 months
  ✓ PASS — sensing case, overwhelmingly
  ⚠ CONDITIONAL — part variation estimate is 44 %
    of the lead-in requirement and unmeasured

ENGINEERING CONCLUSION:
  1. THE DECISION TURNED ENTIRELY ON A
     NON-ENGINEERING ASSUMPTION.
     Payback of 6.2 years without the third shift
     filled; 20.5 months with it half filled. A
     factor of 3.64, from a question about the
     order book that no calculation in this
     analysis can answer. THE CORRECT RESPONSE IS
     TO MAKE THE ASSUMPTION EXPLICIT AND PUT IT
     TO THE CUSTOMER AS A CONDITION, not to pick a
     value and present a single payback figure.
     This is L2.2.5's discipline — the engineer
     owns the hours, the customer owns the
     exchange rate — arriving in its sharpest
     form, because here the exchange rate decides
     the project.

  2. THE SENSING PACKAGE WAS 7.2 % OF THE CAPITAL
     AND PROTECTED THE OTHER 93 %.
     ₹310,000 against ₹798,000 of exposure per
     unattended shift means it pays for itself if
     it prevents one fault in the cell's life, and
     at even a 0.1 % fault rate per shift the
     expected loss over the programme is 3.1 times
     its cost. IT IS ALSO THE LINE MOST LIKELY TO
     BE CUT WHEN THE QUOTATION COMES BACK HIGH,
     because it is the only item that does not
     visibly do anything. I would present the
     exposure calculation alongside the quotation
     rather than waiting to be asked, because the
     conversation is much harder after the line
     has been deleted.

  3. TEACHING THE POINTS HALVED THE LEAD-IN
     REQUIREMENT, AND THE DISTINCTION IS EASY TO
     GET WRONG.
     Robot repeatability was ±0.05 mm and accuracy
     ±0.35 mm — a factor of seven — and only one
     of them applies depending on whether the
     point is taught or programmed off-line.
     Manufacturers quote repeatability
     prominently because it is the better number.
     Using it where accuracy applies would
     undersize the lead-in by 40 %, and the
     failure mode is a jam, which on an unattended
     shift stops the cell for the rest of the
     night.

  4. THE PART VARIATION WAS THE LARGEST SINGLE
     TERM AND IT WAS AN ESTIMATE.
     ±0.15 mm of the 0.34 mm total — 44 % — from a
     figure nobody had measured. THE LEAD-IN
     DESIGN RESTS ON IT, and if the real variation
     is ±0.30 mm the lead-in must be nearly double.
     Measuring thirty parts at the picked feature
     costs half a day and it is the single most
     valuable thing to do before committing the
     fixture design.

  5. WHAT THE OPERATOR WAS DOING IS THE REAL
     SUBJECT HERE.
     The cycle saving was 21 seconds and worth
     ₹532,000 a year. The unattended shift was
     worth up to ₹3,648,000. But the whole
     unattended proposition depends on the fixture
     replacing what the operator provided — seeing
     the chip, feeling the seat, rejecting the odd
     part. THAT IS WHAT THE ₹310,000 BUYS, AND IT
     IS WHY THE SENSING IS NOT AN ACCESSORY TO THE
     AUTOMATION BUT THE THING THAT MAKES IT
     POSSIBLE.

SENSITIVITY NOTE:
  Ranked by influence:
    1. WHETHER THE THIRD SHIFT IS FILLED — a
       factor of 3.64 in payback, and it decides
       pass or fail against the programme. NOT AN
       ENGINEERING QUANTITY, AND THE DOMINANT
       VARIABLE.
    2. PART VARIATION AT THE PICKED FEATURE —
       ±0.15 mm assumed, 44 % of the lead-in
       requirement. Unmeasured. If double, the
       fixture geometry changes.
    3. WHETHER POINTS ARE TAUGHT OR PROGRAMMED
       OFF-LINE — a 1.67× effect on the lead-in,
       and it may change after commissioning if
       the customer adopts off-line programming.
    4. THE FAULT RATE PER UNATTENDED SHIFT — drives
       the sensing case. At 0.5 % the expected loss
       exceeds the entire project capital; at 0.1 %
       it is still 3.1× the sensing cost. THE
       CONCLUSION IS ROBUST ACROSS THE PLAUSIBLE
       RANGE, WHICH IS WHY IT IS SAFE TO ASSERT.
    5. PART VALUE — ₹4,200, linear on the exposure.
       Halving it halves the exposure and the
       sensing case remains comfortable.
```

### 14. Engineering assumptions
- **Robot repeatability and accuracy are different manufacturer's quantities**; repeatability applies
  here because points are taught `[MFR]` `[PROJ]`.
- Gripper and part variations are estimates requiring measurement `[EX-ASSUMED]` `[PROJ]`.
- Errors combined **worst case** for the lead-in, because a jam is a hard failure with no averaging
  `[PRACTICE]`.
- **The third shift is genuinely unattended** — this assumption drives the entire sensing requirement
  `[PROJ]`.
- Sensing cost covers air seat checks, chip blow-off and periodic probing `[EX-ASSUMED]`.
- The 92% utilisation is across **all work**, not this part, which changes what the third shift is for
  `[PROJ]`.

### 15. Diagram

```
     CLASSIFICATION BY AUTOMATION LEVEL
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  WHAT THE OPERATOR WAS DOING

   ✔ sees the wrong part        ✔ feels no seat
   ✔ sees a chip on a locator   ✔ hears a bad cut
   ✔ sees unusual flash         ✔ rejects damage
   ✔ notices coolant wrong      ✔ stops when odd

   ┌──────────────────────────────────────────────┐
   │ NONE OF IT IS IN ANY SPECIFICATION, AND ALL  │
   │ OF IT DISAPPEARS THE DAY YOU AUTOMATE.       │
   │                                              │
   │ AUTOMATION DOES NOT REMOVE THE NEED FOR      │
   │ JUDGEMENT. IT MOVES THE JUDGEMENT INTO THE   │
   │ HARDWARE.                                    │
   │                                              │
   │ THE COST OF AUTOMATION IS NOT THE ROBOT —    │
   │ IT IS THE SENSING THE ROBOT MAKES NECESSARY. │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE CHARACTERISTIC AUTOMATION FAILURE

   MANUAL          chip lands on locator
                   → operator wipes it
                   → NOT EVEN AN EVENT

   AUTOMATED       chip lands on locator
                   → robot places part on chip
                   → clamps close, seating it
                   → machined 0.4 mm out
                   → ✓ part present
                     ✓ clamp closed
                     ✓ cycle complete
                   → EVERY SENSOR SATISFIED

   ┌──────────────────────────────────────────────┐
   │ "PART PRESENT" AND "CLAMP CLOSED" ARE NOT    │
   │ SUFFICIENT SENSING.                          │
   │                                              │
   │ WHAT IS NEEDED IS "PART SEATED" — USUALLY AN │
   │ AIR SEAT CHECK.                              │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE LEAD-IN — A CALCULATION, NOT A STYLE

              ╲        ╱  ← chamfer GUIDES
               ╲______╱
               │      │  ← precise land LOCATES
               │      │

   TAUGHT POINTS
     robot repeatability  ██ 0.05
     gripper              ████ 0.12
     PART VARIATION       █████ 0.15  ◄ 44 %
     fixture              ▌0.02
     ───────────────────────────────
     SUM                  0.34 mm
     × 1.5 margin         0.51 → 0.6 mm

   OFF-LINE PROGRAMMED
     robot ACCURACY       ████████████ 0.35
     ...
     SUM 0.64 → LEAD-IN 1.0 mm    1.67× MORE

   ┌──────────────────────────────────────────────┐
   │ REPEATABILITY ±0.05 vs ACCURACY ±0.35 —      │
   │ A FACTOR OF SEVEN, AND ONLY ONE APPLIES.     │
   │                                              │
   │ MANUFACTURERS QUOTE REPEATABILITY            │
   │ PROMINENTLY BECAUSE IT IS THE BETTER NUMBER. │
   │                                              │
   │ AND WORST CASE, NOT RSS — A JAM IS A HARD    │
   │ FAILURE WITH NO AVERAGING. SAME REASONING AS │
   │ THE MODULAR STACK.                           │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE LIGHTS-OUT EXPOSURE

   190 parts per unattended shift × ₹4,200
   = ₹798,000 OF EXPOSURE, PER NIGHT

   sensing package   ████ ₹310,000   = 38.8 %
   one bad shift     ██████████ ₹798,000

   ┌──────────────────────────────────────────────┐
   │ THE SENSING PAYS FOR ITSELF IF IT PREVENTS   │
   │ ONE FAULT IN THE CELL'S ENTIRE LIFE.         │
   │                                              │
   │ IT IS 7.2 % OF THE CAPITAL AND PROTECTS THE  │
   │ OTHER 93 %.                                  │
   │                                              │
   │ AND IT IS THE LINE MOST LIKELY TO BE CUT     │
   │ WHEN THE QUOTATION COMES BACK HIGH, BECAUSE  │
   │ IT IS THE ONLY ITEM THAT DOES NOT VISIBLY DO │
   │ ANYTHING.                                    │
   └──────────────────────────────────────────────┘

   THE REAL CASE: 340 PARTS SCRAPPED IN ONE NIGHT
   from one chip, with every sensor satisfied.

  ──────────────────────────────────────────────────────────

  AND THE DECISION TURNED ON A NON-ENGINEERING
  QUESTION

   payback, third shift EMPTY
     ████████████████████████████ 74.6 months
     against a 60-month programme  ✗ FAILS

   payback, third shift HALF FILLED
     ████████ 20.5 months          ✓ PASSES

   FACTOR 3.64×

   ┌──────────────────────────────────────────────┐
   │ NO CALCULATION IN THE ANALYSIS CAN ANSWER    │
   │ "WILL THE THIRD SHIFT BE FILLED?"            │
   │                                              │
   │ MAKE IT AN EXPLICIT CONDITION. DO NOT PICK A │
   │ VALUE AND PRESENT A SINGLE PAYBACK FIGURE.   │
   │                                              │
   │ THE ENGINEER OWNS THE HOURS; THE CUSTOMER    │
   │ OWNS THE EXCHANGE RATE.                      │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-8800 — ROBOT-LOADED
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: ROBOT APPROACH IS VERTICAL FROM ABOVE
        ALONG THE AXIS SHOWN. THE APPROACH VOLUME
        MARKED ON SHEET 2 SHALL REMAIN CLEAR
        THROUGHOUT THE CLAMP OPEN CYCLE — NOT
        MERELY AT THE FULLY OPEN POSITION.

NOTE 2: LEAD-IN CHAMFERS ON LOCATORS ITEMS 4 AND 5
        ARE 0.6 mm RADIAL AT 30°. THESE ARE SIZED
        FROM THE PLACEMENT ERROR BUDGET IN
        CF-8800-04 AND ASSUME POINTS ARE TAUGHT.
        IF OFF-LINE PROGRAMMING IS ADOPTED, THE
        BUDGET MUST BE RE-ASSESSED.

NOTE 3: AIR SEAT CHECK PORTS ITEMS 11-13 SHALL
        INHIBIT THE MACHINE CYCLE IF SEATING IS
        NOT CONFIRMED. PART-PRESENT AND
        CLAMP-CLOSED SIGNALS ALONE SHALL NOT
        PERMIT THE CYCLE.

NOTE 4: CHIP BLOW-OFF SEQUENCE SHALL RUN BEFORE
        EACH LOAD. SEE PS-8800.

NOTE 5: THIS FIXTURE IS APPROVED FOR UNATTENDED
        OPERATION ONLY WITH ALL SENSING FUNCTIONAL.
        A BYPASSED SEAT CHECK PROHIBITS LIGHTS-OUT
        RUNNING.
```

`[PRACTICE]` **Note 3 is written as a prohibition rather than a requirement, deliberately.** Stating what
must *not* permit the cycle is harder to design around than stating what must be present, and the failure
mode being prevented — a satisfied part-present sensor on a part sitting on a chip — is exactly the one an
integrator would otherwise consider adequately covered.

### 17. CAD workflow
1. Establish the **automation level** before laying out the fixture; it changes everything
2. Model the **robot approach vector** as a swept volume and keep it clear through the whole clamp cycle
3. Build the **placement error budget** as a documented calculation before sizing lead-ins
4. Model **lead-in chamfers explicitly** with the precise land beyond them
5. Model the **gripper**, including its open and closed envelopes, and check clearance to the fixture
6. Model **sensor positions, ports and cabling** as fixture components
7. Model the **chip blow-off nozzles** and verify their coverage of every locating surface
8. Model the **fault recovery access** — can a person reach a jammed part safely?

`[PRACTICE]` Step 5 is where robot cells are most often found wanting. **The gripper is a large object
that must occupy the same space as the part while releasing it**, and its envelope is frequently modelled
as a simplified block that bears little resemblance to the fingers, sensors and cabling actually fitted.

### 18. GD&T application

```
  AUTOMATION CHANGES WHICH PART TOLERANCES
  MATTER.

  STANDARD: ASME Y14.5-2018

  ┌────────────────────────────────────────────┐
  │ A MANUAL PROCESS ABSORBS PART VARIATION    │
  │ THROUGH THE OPERATOR'S JUDGEMENT.          │
  │                                            │
  │ AN AUTOMATED PROCESS CANNOT — SO FEATURES  │
  │ THAT WERE NEVER FUNCTIONALLY CRITICAL      │
  │ BECOME CRITICAL BECAUSE THE ROBOT GRIPS    │
  │ THEM OR THE FEEDER ORIENTS ON THEM.        │
  └────────────────────────────────────────────┘

  THE NEW REQUIREMENTS AUTOMATION CREATES

  1 THE GRIPPED FEATURE
      → its size and form now affect placement
      → in the worked example, part variation at
        the picked feature was 44 % of the entire
        lead-in budget
      → IT MAY NEED A TOLERANCE IT NEVER HAD

  2 THE ORIENTING FEATURE
      → whatever the feeder or vision system uses
      → asymmetry that a person recognises
        instantly may be below a vision system's
        discrimination

  3 CONSISTENCY OF THE APPROACH SURFACE
      → burrs and flash that a person brushes off
        become jams

  ┌────────────────────────────────────────────┐
  │ THIS IS A CONVERSATION TO HAVE WITH THE    │
  │ PART DESIGNER, AND IT IS OFTEN THE FIRST   │
  │ TIME ANYONE HAS ASKED FOR A TOLERANCE ON A │
  │ FEATURE THAT HAS NO FUNCTIONAL PURPOSE.    │
  │                                            │
  │ THE JUSTIFICATION IS NOT FUNCTION — IT IS  │
  │ MANUFACTURABILITY BY THE CHOSEN PROCESS,   │
  │ AND IT SHOULD BE STATED AS SUCH RATHER     │
  │ THAN DISGUISED AS A FUNCTIONAL REQUIREMENT.│
  └────────────────────────────────────────────┘
```

### 19. Manufacturing method
| Element | Practice `[PRACTICE]` |
|---|---|
| **Lead-in chamfers** | Machined with the locator, in the same setup, so the chamfer is concentric with the land |
| **Air seat ports** | Small orifices, cross-drilled and **deburred**; a burr changes the back-pressure signature |
| **Sensor mounting** | Protected from chips and coolant; replaceable without dismantling |
| **Blow-off nozzles** | Aimed and fixed; adjustable nozzles get knocked and stop covering |
| **Gripper interface** | Bought `[MFR]`; compliance device selected, not improvised |
| **Guarding** | Designed with the fixture, not added afterwards (L2.2.4's hierarchy of control) |

> **"Machined with the locator, in the same setup"** matters more than it sounds. `[PRACTICE]` A lead-in
> chamfer that is not concentric with the precise land guides the part *off* centre before the land can
> correct it — **so an eccentric chamfer actively defeats the purpose it was cut for**, and the error is
> invisible on inspection unless concentricity is specifically checked.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Lead-in dimensions | CMM or optical | Per the error budget |
| Lead-in concentricity with the land | CMM | Within the locator tolerance |
| Approach volume clear | Dry run at slow speed, clamps cycling | No contact |
| Placement error, actual | Load 30 parts, measure position before clamping | Within the lead-in |
| Air seat check discrimination | Insert a shim of the minimum detectable thickness | Detects and inhibits |
| Blow-off coverage | Introduce chips deliberately; run the sequence | All cleared |
| Sensor response on a fault | Simulate each fault | Correct inhibit |
| Fault recovery | Simulate a jam; time the recovery | Safe and practical |
| Unattended trial | Run a full shift with monitoring | No undetected faults |

`[PRACTICE]` **"Insert a shim of the minimum detectable thickness" is the test that validates the whole
lights-out proposition.** An air seat check that cannot detect a 0.05 mm chip is not protecting against
the failure mode it was bought for, and the only way to know is to try it with a known shim.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Not establishing **what judgement the operator provided** | The fault rate rises inexplicably |
| 2 | Costing the robot but not the **sensing and error-proofing** | The protective 7% gets cut |
| 3 | Skipping **semi-automatic** as an option | Full automation bought where powered clamping sufficed |
| 4 | Clearing the approach at the **fully open position only** | Collision during the clamp cycle |
| 5 | Leaving **part presentation** unsolved | Often the larger problem |
| 6 | Using **repeatability where accuracy applies** `[MFR]` | Lead-in undersized by 40% |
| 7 | Sizing lead-ins by **RSS** | A jam is a hard failure; no averaging |
| 8 | A lead-in that is an **oversized hole** | Guides but does not locate |
| 9 | A chamfer **not concentric** with the land | Actively guides the part off centre |
| 10 | No **compliance** anywhere | Jam or damage |
| 11 | Sensing **presence and clamp state only** | A part seated on a chip satisfies both |
| 12 | No **chip blow-off** | The characteristic automation failure |
| 13 | No **fault recovery** design | An operator improvises inside a guarded cell |
| 14 | **Automating an unstable process** | Faster at being bad |
| 15 | Not calculating **unattended exposure** | The sensing case is never made |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Robot jams on placement | Lead-in undersized | Measure actual placement error over 30 parts | Enlarge the lead-in | Error budget at design |
| Jams began after a program change | Off-line programming adopted | Check whether points are taught | Re-assess the budget | Drawing note |
| Parts machined out of position, all sensors OK | Chip under the part | Air seat check with a shim | Add seat sensing and blow-off | Design rule R10 |
| Intermittent jams on some parts | Part variation exceeds the estimate | Measure the picked feature on 30 parts | Enlarge the lead-in or tolerance the part | Measure before design |
| Part guided off centre | Chamfer not concentric with the land | CMM | Re-machine in one setup | Manufacturing practice |
| Gripper collides with a clamp | Gripper envelope simplified in CAD | Physical dry run | Relieve | Model the real gripper |
| Cell stops frequently | Automating an unstable process | Review the manual fault rate | Fix the process | Design rule R14 |
| Large scrap batch after an unattended run | No seating check | — | Add sensing | Calculate the exposure |
| Operator entering the cell to clear jams | Fault recovery not designed | Observe | Design access and safe state | L2.2.4 hierarchy |

### 23. Design checklist
- [ ] Has the **judgement the operator provides** been listed and addressed?
- [ ] Has **semi-automatic** been evaluated before full automation?
- [ ] Is the **sensing and error-proofing costed** as part of the project?
- [ ] Is the **approach vector** defined and clear through the whole clamp cycle?
- [ ] Is **part presentation** solved?
- [ ] Is there a documented **placement error budget**?
- [ ] Is the correct robot figure used — **accuracy or repeatability** `[MFR]`?
- [ ] Are errors combined **worst case**?
- [ ] Do lead-ins have a **precise land beyond them**, concentric with the chamfer?
- [ ] Is there **compliance** somewhere?
- [ ] Is **seating** sensed, not just presence and clamp state?
- [ ] Is there **chip blow-off** covering every locating surface?
- [ ] Is **fault recovery** designed — access, guarding, safe state?
- [ ] Has the **unattended exposure** been calculated?
- [ ] Is the process **stable enough to automate**?

### 24. Beginner exercise
**E3.3.1-B** — Answer with calculations where required:
(a) List five things an operator does that a robot does not, and state how each must be replaced.
(b) A robot has repeatability ±0.04 mm and accuracy ±0.30 mm. State which applies to a taught point and
which to an off-line programmed one.
(c) Errors are: robot ±0.04, gripper ±0.10, part ±0.18, fixture ±0.03 mm. Calculate the worst-case sum
and the lead-in with a 50% margin.
(d) Calculate the axial depth of a 30° chamfer delivering that radial lead-in.
(e) A cell runs 10 unattended hours at a 96 s cycle with parts worth ₹2,800. Calculate the exposure.
(f) Explain why "part present" and "clamp closed" are not sufficient sensing.

### 25. Intermediate exercise
**E3.3.1-I** — A manual cell has a 148 s cycle (load 22, clamp 6, cut 96, unclamp 4, unload 8, clean 12)
at 32,000 parts/yr, part value ₹3,100, machine rate ₹1,850/h, operator ₹360/h. A robot cell would give a
load/unload of 11 s combined. Capital: robot and integration ₹2,100,000; presentation ₹640,000; guarding
₹380,000; fixture ₹160,000; sensing ₹280,000. Robot repeatability ±0.05, accuracy ±0.32; gripper ±0.11;
part ±0.14; fixture ±0.025 mm. Points will be taught. The machine has 7,200 h across two shifts, 78%
utilised across all work; an unattended third shift of 8 h × 235 days is proposed.
(a) Calculate the required lead-in and the 30° chamfer depth.
(b) Recalculate for off-line programming and state the ratio.
(c) Calculate the new cycle time and the parts per unattended shift.
(d) Calculate the unattended exposure per shift and compare with the sensing cost.
(e) Calculate the cycle-time saving value and the operator time released.
(f) Calculate payback with the third shift empty, and with it 40% filled.
(g) State your recommendation and its conditions.

### 26. Advanced exercise
**E3.3.1-A** — A supplier proposes converting three manual VMC cells to a single robot-served cell with
three machines. Parts: four variants of a die-cast housing (1.1–1.6 kg), volumes 18,000 to 44,000/yr
each, total 118,000/yr, on a 4-year programme. Cycle times 74 to 132 s. Castings arrive with variable
flash on two faces. The customer wants lights-out on a third shift. `[EX-ASSUMED]` State all assumptions.
(i) Assess whether this part is a good automation candidate, addressing the flash specifically.
(ii) Determine what the operators currently provide and how each item must be replaced.
(iii) Design the part presentation approach for four variants and state its cost drivers.
(iv) Establish the placement error budget and lead-in requirement, identifying which term dominates.
(v) Determine the sensing package required and calculate the unattended exposure that justifies it.
(vi) Design the fault recovery strategy for a three-machine cell, including what happens when one machine
faults.
(vii) Calculate the capacity position and determine whether three machines are the right number.
(viii) Compare full automation against semi-automatic on all three cells, with the economics.
(ix) Identify which of the twenty-four auto-fail items this application most invites.
(x) State your recommendation in 250 words, with the three assumptions it most depends on.

### 27. Interview questions
1. *"What changes about a fixture when a robot loads it instead of a person?"*
   **Answer:** Six things, and the expensive one is not obvious. The robot needs a defined approach
   vector with clearance along its whole length, not just at the destination — and clear throughout the
   clamp cycle, not only when the clamps are fully open. The part has to arrive already oriented, which
   is often a bigger problem than the fixture itself. The fixture needs generous lead-ins, sized by
   calculation from the robot's placement error plus the gripper, part and fixture variations, with a
   precise locating land beyond the chamfer so the lead-in guides but does not locate. There has to be
   compliance somewhere — gripper, fixture or robot — or a rigid placement into a rigid fixture jams. And
   there has to be a designed fault recovery, because "an operator sorts it out" is fine as an answer but
   it needs access, guarding and a safe state. The expensive one is sensing. An operator sees a chip on a
   locator, feels when a part has not seated, and rejects a damaged casting — none of which is written in
   any specification, and all of which disappears on the day you automate. So the fixture has to supply
   that judgement in hardware, and the cost of automation is really the sensing rather than the robot.
2. *"Why is 'part present' not enough sensing on an automated fixture?"*
   **Answer:** Because a part sitting on a chip is present. The characteristic automation failure is that
   a chip lands on a locator, the robot places the part on the chip, the clamps close with enough force
   to seat it firmly on the chip, and the part is machined a few tenths out of position — with every
   sensor satisfied. Part present, clamp closed, cycle complete, no fault. On a manned shift somebody
   notices in twenty minutes. On a lights-out shift it runs until morning. I know of a case where 340
   parts were scrapped overnight from exactly that, at a value that dwarfed the sensing package that
   would have caught it. What is needed is a seating check, usually an air seat check — a small orifice
   in the locating face where back-pressure tells you the part is actually against the pad — interlocked
   so the cycle cannot start without it, plus a chip blow-off sequence before each load, and ideally a
   periodic probing routine. And the way to justify all of it is to calculate the unattended exposure:
   parts per unattended shift times part value. In the case we worked that was ₹798,000 a night against a
   ₹310,000 sensing package, which is seven per cent of the capital protecting the other ninety-three.

### 28. Expert questions
1. *"Semi-automatic keeps the operator's judgement. But operators are inconsistent. Isn't full automation
   strictly better on quality?"*
   **Answer:** No, and the reason is that **consistency and correctness are different properties**, and
   automation delivers the first without guaranteeing the second.
   An automated cell is consistent in a very strong sense: it does the same thing every time. If that
   thing is right, you get a uniform population of good parts, which is genuinely better than a human's
   variable output. **But if that thing is wrong, you get a uniform population of bad parts** — 340 of
   them, in the case we looked at. A human's inconsistency is annoying and it is also a **sampling
   process**: an operator who loads slightly differently each time is, in effect, testing the process
   from several angles, and they notice when something changes.
   The deeper point is about **which errors each is good at catching**. Automation is excellent at
   eliminating *variation* errors — the part that was clamped a bit harder, the one loaded a fraction
   crooked. Humans are excellent at catching *novelty* errors — the wrong part, the unusual flash, the
   coolant that smells wrong, the noise that was not there yesterday. **Those are complementary
   strengths, and full automation trades one away completely.**
   So my position is that full automation is better on quality **only when you have engineered the
   novelty detection back in**, which is exactly what the sensing package is for. An automated cell with
   air seat checks, chip blow-off, in-process probing and tool monitoring probably does beat a human. An
   automated cell with part-present sensors alone does not — it is more consistent and less safe.
   And there is an economic consequence people miss. **Because the sensing is what makes automation
   better on quality, cutting the sensing to afford the robot inverts the argument that justified the
   robot.** I have seen exactly that: a project justified partly on quality improvement, with the sensing
   value-engineered out to meet a capital number, delivering worse quality than the manual cell it
   replaced. The customer concluded that automation does not improve quality, which is the wrong lesson
   and a durable one.
   Semi-automatic is underrated precisely because it sidesteps this. **Powering the clamps removes the
   largest source of human variation — clamp force — while keeping the human's novelty detection for
   free.** In the L3.2.1 case that took clamping from 42 seconds to 8 with no sensing investment at all.
   For a great many jobs that is most of the available benefit at a small fraction of the cost and risk.
2. *"How do you decide how much sensing is enough? You could always add another sensor."*
   **Answer:** You could, and the honest framework is **exposure-based rather than completeness-based**,
   because there is no such thing as complete.
   The method I would use has four steps. **First, list the credible failure modes** — not all
   conceivable ones. For a robot-loaded fixture: part absent, wrong part, part not seated, part seated on
   debris, clamp not actuated, clamp actuated on nothing, tool broken, part moved during the cut.
   **Second, for each one, ask what it costs and how long it persists undetected.** That second question
   is what makes automated cells different. On a manned cell, most faults are caught within a cycle or
   two. On a lights-out cell, a fault persists until somebody looks — so the cost is the fault rate times
   the part value times the parts made in the unattended window. **The exposure calculation is what turns
   a vague worry into a number.** ₹798,000 a night, in the worked case.
   **Third, ask what the cheapest reliable detection is.** Some faults are almost free to detect — a
   part-present sensor is trivial. Some are moderately priced — an air seat check needs a port, a switch
   and a bit of circuit. Some are expensive — in-process dimensional verification needs a probe and cycle
   time. **Order them by cost per unit of exposure removed**, and the priority list writes itself.
   **Fourth, and this is the step that stops the list growing forever: check whether the remaining
   exposure is acceptable to the business.** Not zero — acceptable. There will always be a failure mode
   you have not sensed, and the correct response to that is usually not another sensor but a **periodic
   check** — a probing routine every twenty parts, a first-off inspection, a sample at shift start. **A
   periodic check bounds the exposure of every unsensed fault simultaneously**, which is why it is
   frequently better value than sensing one more specific thing.
   The trap on the other side is worth naming too. **Sensors that fault spuriously get bypassed**, and a
   bypassed sensor is worse than no sensor because everyone believes it is working. So reliability
   matters as much as coverage, and I would rather have three sensors that never lie than eight that stop
   the cell twice a shift. **A sensing package that is unreliable will be defeated, and that is a design
   failure, not an operator failure** — the L2.2.4 hierarchy-of-control argument again, in a different
   domain.

### 29. Summary
Automating the loading removes a human being who was doing far more than lifting: seeing the wrong part,
seeing a chip on a locator, feeling that a part did not seat, rejecting a damaged casting and stopping
when something was odd. None of that appears in any specification and all of it disappears on the day of
automation, so the fixture must supply the judgement in hardware — which is why the cost of automation is
the sensing and error-proofing rather than the robot. Semi-automatic loading is consequently underrated,
capturing most of the consistency and speed benefit while retaining the operator's novelty detection.
Robot loading specifically requires a defined approach vector clear along its whole length and through
the whole clamp cycle, a part presented already oriented, lead-ins sized by calculation with a precise
locating land beyond the chamfer, compliance somewhere, seating confirmation, and a designed fault
recovery. The lead-in must be stacked worst case because a jam is a hard failure with no averaging, and
the correct robot figure is accuracy for off-line programmed points and repeatability for taught ones —
a factor of seven apart in the worked example, where teaching the points reduced the required lead-in
from 1.0 mm to 0.6 mm. The characteristic automation failure is a part placed on a chip and clamped
firmly onto it, satisfying every part-present and clamp-closed sensor while being machined out of
position, which is why seating must be sensed and chip blow-off provided. Lights-out running multiplies
every undetected fault by the parts made before somebody looks: 190 parts at ₹4,200 gave ₹798,000 of
exposure per unattended shift against a ₹310,000 sensing package that was 7.2% of the capital and
protected the other 93%. And the project's viability turned on a non-engineering question — whether the
third shift would be filled — which moved the payback from 74.6 months to 20.5, a factor of 3.64.

### 30. Key takeaways
- **Automation moves judgement into the hardware; it does not remove the need for it.**
- **The operator was doing more than lifting**, and none of it was specified, so nobody misses it.
- **The cost of automation is the sensing, not the robot** — and the sensing is the line most likely to
  be cut.
- **Semi-automatic is underrated** — most of the benefit, judgement retained, a fraction of the cost.
- **A robot needs**: a clear approach vector, an oriented part, calculated lead-ins, compliance, seating
  confirmation and fault recovery.
- **Part presentation is often a larger problem than the fixture.**
- **Robot accuracy is not robot repeatability** — a factor of seven here, and only one applies.
- **Stack lead-in errors worst case** — a jam is a hard failure with no averaging.
- **A lead-in guides; the land beyond it locates** — and the chamfer must be concentric with the land.
- **"Part present" and "clamp closed" are not sufficient** — a part seated on a chip satisfies both.
- **Always provide chip blow-off**, and sense seating.
- **Calculate the unattended exposure** — ₹798,000 a night justified a ₹310,000 package instantly.
- **Do not automate an unstable process**; it becomes faster at being bad.
- **An unreliable sensor gets bypassed**, and that is a design failure, not an operator failure.
- **The decision may turn on a non-engineering assumption** — state it as a condition rather than
  choosing a value.

---

## LESSON L3.3.2 — POKA-YOKE AND SENSOR-VERIFIED FIXTURES

### 1. Lesson title
**L3.3.2 — Poka-Yoke fixtures and sensor-verified fixtures: making the wrong thing impossible, and
detecting it when it is not**

### 2. Learning objective
By the end of this lesson you will be able to distinguish prevention from detection and explain why
prevention is always preferred, design physical Poka-Yoke features that make incorrect loading
impossible, select sensing methods for the faults that cannot be prevented, explain how an air seat check
works and what it can and cannot detect, calculate the economic case for error-proofing, and recognise
why an unreliable error-proofing device is worse than none.

### 3. Prerequisites
L2.2.4 (hierarchy of control), L2.2.6 (gates, false conflicts), L3.3.1 (what the operator provided;
unattended exposure), L3.1.4 (verification philosophy).

### 4. Why the topic matters
**Error-proofing is the same argument as the hierarchy of control, applied to loading rather than to
safety** — and it produces the same ranking.

```
   THE HIERARCHY OF CONTROL, FROM L2.2.4

     1 ELIMINATE / DESIGN OUT
     2 SUBSTITUTE
     3 ENGINEERING CONTROL
     4 ADMINISTRATIVE / PROCEDURE
     5 PPE

   THE ERROR-PROOFING HIERARCHY

     1 MAKE THE ERROR IMPOSSIBLE     ← Poka-Yoke
     2 MAKE THE ERROR OBVIOUS
     3 DETECT THE ERROR AND STOP     ← sensing
     4 DETECT IT LATER AND CONTAIN
     5 INSTRUCT THE OPERATOR NOT TO

   ┌──────────────────────────────────────────────┐
   │ SAME SHAPE. SAME RANKING. SAME REASON.       │
   │                                              │
   │ THE TOP OF THE LIST REMOVES THE POSSIBILITY. │
   │ THE BOTTOM RELIES ON A PERSON DOING          │
   │ SOMETHING CORRECTLY EVERY TIME — 1,440 TIMES │
   │ A SHIFT, IN THE L2.2.4 EXAMPLE.              │
   │                                              │
   │ AND AS THERE, THE BOTTOM OPTION IS THE ONE   │
   │ MOST OFTEN CHOSEN BECAUSE IT IS FREE AT THE  │
   │ DESIGN STAGE.                                │
   └──────────────────────────────────────────────┘
```

### 5. Simple explanation

```
   THE ONE-SENTENCE DISTINCTION

   POKA-YOKE   the part physically cannot be
               loaded wrongly

   SENSING     the part can be loaded wrongly,
               and the fixture notices

   ┌──────────────────────────────────────────────┐
   │ PREFER THE FIRST. ALWAYS.                    │
   │                                              │
   │ A POKA-YOKE FEATURE IS USUALLY A PIN, A      │
   │ BLOCK, A SLOT OR AN ASYMMETRY. IT COSTS      │
   │ ALMOST NOTHING, IT NEVER FAILS, IT NEEDS NO  │
   │ POWER, IT NEEDS NO CALIBRATION, AND IT       │
   │ CANNOT BE BYPASSED WITHOUT A HACKSAW.        │
   │                                              │
   │ A SENSOR COSTS MONEY, NEEDS POWER AND        │
   │ WIRING, DRIFTS, GETS KNOCKED, GETS           │
   │ CONTAMINATED, AND CAN BE BRIDGED IN THE      │
   │ CONTROL PANEL IN THIRTY SECONDS.             │
   └──────────────────────────────────────────────┘

   BUT SENSING IS STILL ESSENTIAL, BECAUSE SOME
   FAULTS CANNOT BE DESIGNED OUT:
     - a chip under the part
     - a part that is correct but damaged
     - a clamp that did not actuate
     - a tool that broke
```

### 6. Engineering explanation

**POKA-YOKE — THE PHYSICAL METHODS**

`[PRACTICE]`

| Method | How it works | Prevents |
|---|---|---|
| **Asymmetric locating** | Pins at unequal spacing; the part fits one way only | Wrong orientation |
| **A blocking feature** | A block where the part would foul if reversed | Reversal |
| **Different pin diameters** | Two pins of different sizes in two different holes | Rotation by 180° |
| **A profile pocket** | The part nests in its own outline | Wrong part, wrong orientation |
| **A step or shoulder** | The part only sits down if the right way up | Inversion |
| **Colour and shape coding** | Visual, not physical | Wrong part — **weaker; this is "obvious", not "impossible"** |
| **A go/no-go entry gate** | The part must pass a check to enter the fixture | Out-of-tolerance incoming parts |

```
   THE DESIGN QUESTION

   For each way the part COULD be loaded wrongly:
     Can I make it physically impossible?

   ┌──────────────────────────────────────────────┐
   │ THE ANSWER IS YES FAR MORE OFTEN THAN PEOPLE │
   │ ASSUME, AND THE COST IS USUALLY A FEW        │
   │ MILLIMETRES OF STEEL IN THE RIGHT PLACE.     │
   │                                              │
   │ THE COMMONEST MISSED OPPORTUNITY IS A PART   │
   │ THAT IS NEARLY SYMMETRICAL. IF THE PART HAS  │
   │ ANY ASYMMETRY AT ALL — A BOSS, A HOLE, A     │
   │ CHAMFER ON ONE CORNER — IT CAN USUALLY BE    │
   │ USED TO KEY THE FIXTURE.                     │
   │                                              │
   │ AND IF IT HAS NONE, ASK THE PART DESIGNER    │
   │ FOR ONE. A 2 mm DIMPLE COSTS NOTHING IN A    │
   │ CASTING AND SOLVES THE PROBLEM FOREVER.      │
   └──────────────────────────────────────────────┘
```

**THE NEAR-SYMMETRICAL PART — THE CLASSIC PROBLEM**

```
   A PART THAT IS SYMMETRICAL EXCEPT FOR ONE
   FEATURE IS THE MOST DANGEROUS CASE, BECAUSE:

   ✗ it LOOKS symmetrical, so the operator does
     not think about it
   ✗ it LOADS either way, so nothing resists
   ✗ and the resulting part is wrong in a way
     that may not be obvious until assembly

   ┌──────────────────────────────────────────────┐
   │ A FULLY SYMMETRICAL PART IS SAFE — EITHER    │
   │ WAY IS CORRECT.                              │
   │                                              │
   │ A CLEARLY ASYMMETRICAL PART IS SAFE —        │
   │ NOBODY GETS IT WRONG.                        │
   │                                              │
   │ THE NEARLY-SYMMETRICAL PART IS THE ONE THAT  │
   │ PRODUCES SCRAP, AND IT SHOULD BE TREATED AS  │
   │ A RED FLAG THE MOMENT IT APPEARS ON A        │
   │ DRAWING.                                     │
   └──────────────────────────────────────────────┘
```

**SENSING — THE METHODS AND WHAT EACH DETECTS**

`[PRACTICE]`

| Sensor | Detects | Does NOT detect | Notes |
|---|---|---|---|
| **Proximity switch** | Something is there | Whether it is the right thing, or seated | Cheap, robust |
| **Air seat check** | **The part is against the pad** | A part that is correct but wrong | **The key sensor for automation** |
| **Clamp position switch** | The clamp reached its position | Clamp *force* | Position ≠ force |
| **Pressure switch** | Hydraulic or pneumatic pressure present | Whether force reached the part | |
| **Vacuum switch** | Vacuum level | Which zones are sealed | Essential for vacuum fixtures |
| **Photoelectric sensor** | Presence, or a profile break | Fine detail | Sensitive to coolant and chips |
| **Load cell** | **Actual clamp force** | | The most informative, and the most expensive |
| **In-process probe** | **Actual part position** | | Slow; the only true verification |
| **Vision** | Part identity, orientation, presence | Seating | Powerful; needs controlled lighting |

**HOW AN AIR SEAT CHECK WORKS**

```
   A small orifice opens through the locating
   face. Low-pressure air is fed to it.

     PART NOT SEATED
       air escapes freely → LOW back-pressure

     PART SEATED
       the part blocks the orifice → HIGH
       back-pressure

   A pressure switch reads the difference.

        ┌──── part ────┐
     ═══╧══════════════╧═══  locating pad
          ↑ orifice
          │ air supply

   ┌──────────────────────────────────────────────┐
   │ WHY THIS IS THE KEY SENSOR FOR AUTOMATION:   │
   │                                              │
   │ IT DETECTS THE ONE FAULT THAT DEFEATS        │
   │ EVERYTHING ELSE — A PART SITTING ON A CHIP.  │
   │                                              │
   │ A 0.05 mm CHIP LIFTS THE PART OFF THE        │
   │ ORIFICE AND THE BACK-PRESSURE COLLAPSES.     │
   │                                              │
   │ AND IT SELF-CLEANS: THE AIR FLOW BLOWS SMALL │
   │ DEBRIS OFF THE PAD BEFORE THE PART ARRIVES.  │
   └──────────────────────────────────────────────┘

   WHAT IT CANNOT DO
     ✗ tell you the part is the RIGHT part
     ✗ work on a porous or rough surface that
       cannot seal
     ✗ work reliably if coolant floods the orifice
     ✗ detect a fault at a pad it is not fitted to

   [MFR] The achievable discrimination — the
   smallest gap reliably detected — depends on the
   orifice size, supply pressure and switch
   sensitivity. IT MUST BE ESTABLISHED FROM THE
   MANUFACTURER AND VERIFIED WITH A SHIM.
```

**POSITION IS NOT FORCE — A CRITICAL DISTINCTION**

```
   A CLAMP POSITION SWITCH tells you the clamp
   arrived.

   IT DOES NOT TELL YOU IT ARRIVED WITH FORCE.

   FAILURE CASES IT MISSES
     - a broken spring in a spring-applied clamp
     - a leaking cylinder that reached position
       slowly with no force
     - a clamp closing on nothing because the part
       is absent, then reading "closed"
     - a worn clamp pad, so the geometry is right
       and the contact is not

   ┌──────────────────────────────────────────────┐
   │ THE THIRD CASE IS THE ONE THAT CATCHES       │
   │ PEOPLE: A CLAMP THAT CLOSES FURTHER THAN     │
   │ NORMAL BECAUSE NOTHING IS IN THE WAY MAY     │
   │ STILL TRIP A SIMPLE "CLOSED" SWITCH.         │
   │                                              │
   │ THE FIX IS A SWITCH SET TO A WINDOW — THE    │
   │ CLAMP MUST BE IN A POSITION RANGE THAT       │
   │ CORRESPONDS TO A PART BEING PRESENT, NOT     │
   │ SIMPLY "PAST A POINT".                       │
   │                                              │
   │ THAT IS A FREE IMPROVEMENT AND IT IS RARELY  │
   │ SPECIFIED.                                   │
   └──────────────────────────────────────────────┘
```

**THE RELIABILITY TRAP**

```
   AN ERROR-PROOFING DEVICE THAT FAULTS
   SPURIOUSLY WILL BE BYPASSED.

   THE SEQUENCE IS ALWAYS THE SAME
     1 the sensor trips wrongly, twice a shift
     2 production is stopped and nobody can see
       why
     3 somebody bridges it "temporarily"
     4 the bridge is never removed
     5 EVERYONE BELIEVES THE PROTECTION IS
       WORKING

   ┌──────────────────────────────────────────────┐
   │ STATE 5 IS WORSE THAN NEVER HAVING FITTED    │
   │ THE SENSOR, BECAUSE THE BELIEF IN PROTECTION │
   │ REMOVES THE VIGILANCE THAT WOULD OTHERWISE   │
   │ EXIST.                                       │
   │                                              │
   │ THIS IS L2.2.4's ARGUMENT EXACTLY: AN        │
   │ IRRITATION REPEATED MANY TIMES A SHIFT       │
   │ BECOMES A DEFEATED INTERLOCK — AND IT IS A   │
   │ DESIGN FAILURE, NOT AN OPERATOR FAILURE.     │
   │                                              │
   │ THREE RELIABLE SENSORS BEAT EIGHT UNRELIABLE │
   │ ONES.                                        │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Poka-Yoke** | Error-proofing; making an error impossible or immediately obvious |
| **Prevention** | The error cannot occur |
| **Detection** | The error occurs and is caught |
| **Asymmetric location** | Locating features arranged so only one orientation fits |
| **Blocking feature** | Material positioned to foul an incorrect loading |
| **Air seat check** | Seating detection by back-pressure through an orifice |
| **Discrimination** | The smallest fault a sensor reliably detects `[MFR]` |
| **Window switch** | A sensor requiring a position range, not merely "past a point" |
| **Interlock** | A signal that inhibits an action until a condition is met |
| **Bypass / bridge** | Defeating a sensor, usually in the control panel |
| **Spurious trip** | A fault signal with no actual fault |
| **Entry gate** | A check that the incoming part is acceptable before loading |
| **In-process probing** | Measuring the part in the machine during the cycle |

### 8. Principle

> **PREVENTION BEATS DETECTION, ALWAYS.** A Poka-Yoke feature costs almost nothing, never fails, needs no
> power or calibration and cannot be bypassed without a hacksaw.
> **THE ERROR-PROOFING HIERARCHY IS THE HIERARCHY OF CONTROL** applied to loading — same shape, same
> ranking, same reason.
> **THE NEARLY-SYMMETRICAL PART IS THE DANGEROUS CASE.** Fully symmetrical is safe; clearly asymmetrical
> is safe.
> **IF THE PART HAS NO ASYMMETRY, ASK THE PART DESIGNER FOR ONE.** A 2 mm dimple costs nothing in a
> casting.
> **THE AIR SEAT CHECK DETECTS THE ONE FAULT THAT DEFEATS EVERYTHING ELSE** — a part sitting on a chip —
> and it self-cleans.
> **POSITION IS NOT FORCE.** A clamp position switch misses a broken spring, a leaking cylinder and a
> clamp closed on nothing.
> **AN UNRELIABLE ERROR-PROOFING DEVICE IS WORSE THAN NONE**, because belief in protection removes
> vigilance.

### 9. Industrial application

**The dimple that saved a programme** `[EX-ASSUMED]`

```
SITUATION
  An aluminium housing was symmetrical apart from
  an internal rib, invisible from outside. Loaded
  180° out, it machined a bolt pattern in the
  wrong place.

  Rate: about 1 in 400, sporadic, worse on night
  shift.

WHAT WAS TRIED FIRST
  - a work instruction with a photograph
  - a paint mark on the correct face
  - operator retraining
  - a warning sign on the machine

  THE RATE DID NOT CHANGE MEANINGFULLY.

  ┌────────────────────────────────────────────┐
  │ EVERY ONE OF THOSE IS AT THE BOTTOM OF THE │
  │ HIERARCHY. THEY ASK A PERSON TO DO         │
  │ SOMETHING CORRECTLY EVERY TIME.            │
  └────────────────────────────────────────────┘

WHAT WORKED
  A 3 mm dimple was added to the casting pattern
  on one face — no functional purpose whatsoever.
  A corresponding 3 mm pin was added to the
  fixture.

  LOADED THE WRONG WAY, THE PART NOW SAT 3 mm
  PROUD AND WOULD NOT CLAMP.

  Cost: a pattern modification and a pin.
  Rate after: zero.

┌──────────────────────────────────────────────┐
│ THE THING THAT MAKES THIS CASE INSTRUCTIVE   │
│ IS THAT THE FIX REQUIRED CHANGING THE PART,  │
│ NOT THE FIXTURE.                             │
│                                              │
│ THE FIXTURE DESIGNER HAD TO GO AND ASK — AND │
│ THE REQUEST SOUNDED ODD, BECAUSE THE FEATURE │
│ HAS NO FUNCTION.                             │
│                                              │
│ RAISE IT AT PART DESIGN STAGE, WHERE IT IS   │
│ FREE. AFTER THE PATTERN IS MADE IT IS A      │
│ CHANGE REQUEST, AND AFTER PRODUCTION STARTS  │
│ IT IS A CONCESSION.                          │
└──────────────────────────────────────────────┘
```

**Choosing what to sense** `[PRACTICE]`

```
   THE ORDERED METHOD

   1 LIST the credible failure modes
   2 For each, ask: CAN IT BE PREVENTED?
       → if yes, prevent it and remove it from
         the list
   3 For the remainder, calculate the EXPOSURE
       exposure = rate × cost × persistence
   4 Rank by COST PER UNIT OF EXPOSURE REMOVED
   5 Add a PERIODIC CHECK to bound everything
     unsensed
   6 Stop when the residual exposure is
     acceptable to the business

   ┌──────────────────────────────────────────────┐
   │ STEP 5 IS THE ONE THAT STOPS THE SENSOR LIST │
   │ GROWING FOREVER.                             │
   │                                              │
   │ A PROBING ROUTINE EVERY TWENTY PARTS BOUNDS  │
   │ THE EXPOSURE OF EVERY UNSENSED FAULT         │
   │ SIMULTANEOUSLY, AND IT IS OFTEN BETTER VALUE │
   │ THAN SENSING ONE MORE SPECIFIC THING.        │
   └──────────────────────────────────────────────┘
```

### 10. Design rules
- **R1** — For every way the part could be loaded wrongly, ask first whether it can be made
  **impossible**.
- **R2** — Use the part's **existing asymmetry** to key the fixture.
- **R3** — Where none exists, **request a non-functional feature** at part design stage.
- **R4** — Treat a **nearly-symmetrical part** as a red flag.
- **R5** — Prefer **physical prevention** over visual coding; colour is "obvious", not "impossible".
- **R6** — Sense **seating**, not merely presence.
- **R7** — Use a **window** on clamp position switches, not a simple "past a point".
- **R8** — Distinguish **position from force**; use a load cell where force must be known.
- **R9** — Verify sensor **discrimination with a shim** of the smallest fault to be caught.
- **R10** — Prefer **few reliable sensors** to many unreliable ones.
- **R11** — Add a **periodic check** to bound the exposure of unsensed faults.
- **R12** — Design sensors to be **protected from chips and coolant** and replaceable.
- **R13** — Make bypassing **visible** — a bypassed interlock should be evident, not silent.
- **R14** — Calculate the **exposure** to justify the sensing package, and present it unasked.

### 11. Rules of thumb
- **Prevention beats detection, always.**
- **A Poka-Yoke feature never fails, needs no power, and cannot be bypassed without a hacksaw.**
- **The nearly-symmetrical part is the dangerous one.**
- **Ask for a dimple; it costs nothing in a casting.**
- **Colour coding is "obvious", not "impossible".**
- **Sense seating, not presence.**
- **Position is not force.**
- **A clamp closed on nothing may still read "closed" — use a window.**
- **Verify discrimination with a shim.**
- **Three reliable sensors beat eight unreliable ones.**
- **A periodic check bounds every unsensed fault at once.**
- **A bypassed sensor is worse than no sensor.**

### 12. Formulae

**Exposure and the sensing case**
```
Exposure = fault rate × cost per fault
           × persistence

persistence = parts made before detection

For an unattended shift:
  persistence = unattended hours × 3600
                / cycle time

Sensing justified when
  cost of sensing < Σ exposure removed
```

**Poka-Yoke feature sizing**
```
The blocking feature must exceed every
permissible variation:

  interference ≥ part tolerance
                 + fixture tolerance
                 + a margin

AND it must not interfere in the CORRECT
orientation:

  clearance ≥ part tolerance
              + fixture tolerance
              + a margin

┌──────────────────────────────────────────────┐
│ A POKA-YOKE PIN THAT SOMETIMES FOULS THE     │
│ CORRECTLY LOADED PART WILL BE FILED DOWN,    │
│ AND THEN IT PREVENTS NOTHING.                │
│                                              │
│ BOTH INEQUALITIES MUST HOLD, AND THE GAP     │
│ BETWEEN THEM IS THE DESIGN SPACE.            │
└──────────────────────────────────────────────┘
```

**Periodic check exposure bound**
```
Worst-case parts affected = check interval

So a probe every 20 parts bounds the loss at 20
parts per undetected fault, regardless of what
the fault is.

Cost of the check = (probe time / cycle time)
                    × 100 %  of capacity
```

| Variable | Meaning | Unit |
|---|---|---|
| Exposure | Expected loss | ₹ |
| persistence | Parts before detection | — |
| interference | Poka-Yoke blocking amount | mm |

### 13. Worked numerical example

**Problem:** A fixture has four credible loading faults. Determine which can be prevented, size the
Poka-Yoke features, calculate the exposure of the remainder, select the sensing, and justify the package.

```
GIVEN:
  PART AND PROCESS                              [PROJ]
    Cast aluminium housing, 2.3 kg
    Part value at this stage       = ₹3,600
    Cycle time                     = 96 s
    Volume                         = 38,000/yr
    Two manned shifts + one
      unattended shift of 8 h
    Unattended shifts              = 230/yr
                                        [EX-ASSUMED]

  THE FOUR CREDIBLE FAULTS         [PROJ] rates from
                                   12 months of history
    F1 Part loaded 180° out
         (part is symmetrical except an internal
          rib)
         Rate = 1 in 350 loads
    F2 Part seated on a chip
         Rate = 1 in 900 loads
    F3 Wrong variant loaded
         (three similar variants run on this cell)
         Rate = 1 in 1,200 loads
    F4 Clamp fails to develop force
         (spring-applied; spring fatigue)
         Rate = 1 in 6,000 loads

  PART GEOMETRY                                 [PROJ]
    Part positional tolerance on the
      locating boss                = ±0.20 mm
    Fixture locator tolerance      = ±0.03 mm
    A 3 mm dimple can be added to the casting
      pattern                      = ₹18,000
                                        [EX-ASSUMED]

  SENSING OPTIONS                          [EX-ASSUMED]
    Air seat check, 3 pads         = ₹64,000
    Vision system for variant ID   = ₹340,000
    Load cell on one clamp         = ₹95,000
    Probing routine every 20 parts = ₹40,000
      (software + probe already fitted)
      adds 11 s per 20 parts

REQUIRED:
  (a) Which faults can be prevented, and how
  (b) Poka-Yoke feature sizing for F1
  (c) Persistence and exposure for each remaining
      fault
  (d) Ranking by cost per unit of exposure
      removed
  (e) The periodic check and what it bounds
  (f) The recommended package and its cost
  (g) Residual exposure
  (h) Justification

ASSUMPTION:
  1. Fault rates come from TWELVE MONTHS OF
     RECORDED HISTORY, not estimates. This is
     unusual and valuable; where history does not
     exist the rates must be estimated and
     flagged. [PROJ]
  2. Rates are assumed unchanged by automation.
     THIS IS OPTIMISTIC FOR F2 — chip-related
     faults typically RISE when the operator's
     eyes are removed. [EX-ASSUMED]
  3. Exposure is calculated for the unattended
     shift only; on manned shifts persistence is
     assumed to be 1-2 parts. [PROJ]
  4. Vision system cost includes lighting and
     integration. [EX-ASSUMED]
  5. The probing routine uses a probe already
     fitted to the machine. [PROJ]

FORMULA:
  persistence = unattended h × 3600/t_cycle
  Exposure = rate × parts/yr × cost × persistence
             factor
  interference ≥ Σ tolerances + margin

SUBSTITUTION AND CALCULATION:

  (a) WHICH FAULTS CAN BE PREVENTED?

      F1 — 180° LOADING
        The part has an internal rib — an
        asymmetry. But it is internal and cannot
        be used for location.
        SOLUTION: add a 3 mm dimple to the
        casting and a matching pin.
        → PREVENTABLE. Cost ₹18,000.

      F2 — CHIP UNDER THE PART
        Cannot be prevented by geometry. Chips
        will land on locators.
        Can be REDUCED by relieved pads (L2.2.3,
        12.5× exposure reduction) and blow-off.
        → NOT PREVENTABLE. MUST BE SENSED.

      F3 — WRONG VARIANT
        Do the three variants differ at any
        locating feature?
        ASSUME: variants 1 and 2 differ in overall
        length by 12 mm; variants 2 and 3 differ
        only in a hole pattern machined LATER.
                                        [EX-ASSUMED]
        → variant 1 CAN be blocked by a length
          stop
        → variants 2 and 3 CANNOT be distinguished
          physically at this stage
        → PARTIALLY PREVENTABLE

      F4 — CLAMP FORCE
        Cannot be prevented. A spring fatigues.
        → MUST BE SENSED.

      ┌────────────────────────────────────────────┐
      │ ONE OF FOUR FULLY PREVENTABLE, ONE         │
      │ PARTIALLY, TWO NOT AT ALL.                 │
      │                                            │
      │ THAT IS A TYPICAL RESULT, AND IT IS WHY    │
      │ BOTH APPROACHES ARE NEEDED. THE POINT OF   │
      │ ASKING THE PREVENTION QUESTION FIRST IS    │
      │ NOT THAT IT ALWAYS SUCCEEDS — IT IS THAT   │
      │ WHEN IT SUCCEEDS THE PROBLEM IS GONE       │
      │ PERMANENTLY AND FOR ALMOST NOTHING.        │
      └────────────────────────────────────────────┘

  (b) POKA-YOKE SIZING FOR F1

      THE PIN MUST FOUL WHEN THE PART IS REVERSED

      Interference required:
        part tolerance      0.20
        fixture tolerance   0.03
        margin (2×)         0.46
        ─────────────────────────
        minimum             0.69 mm

      A 3 mm pin gives 3.00 mm of interference —
      a factor of 4.35 over the minimum.
      → COMFORTABLY SUFFICIENT

      THE PIN MUST NOT FOUL WHEN CORRECT

      Dimple depth 3.5 mm, pin protrusion 3.0 mm
        → clearance at the bottom = 0.5 mm
        Required clearance:
          part tol 0.20 + fixture tol 0.03
          + margin 0.20 = 0.43 mm
        0.5 > 0.43 ✓ but only by 16 %

      ┌────────────────────────────────────────────┐
      │ THE SECOND INEQUALITY IS THE TIGHT ONE,    │
      │ AND IT IS THE ONE PEOPLE DO NOT CHECK.     │
      │                                            │
      │ A POKA-YOKE PIN THAT OCCASIONALLY FOULS    │
      │ THE CORRECTLY LOADED PART WILL BE FILED    │
      │ DOWN BY SOMEBODY WITHIN A WEEK — AND THEN  │
      │ IT PREVENTS NOTHING WHILE EVERYONE         │
      │ BELIEVES IT DOES.                          │
      │                                            │
      │ I WOULD DEEPEN THE DIMPLE TO 4.0 mm,       │
      │ GIVING 1.0 mm OF CLEARANCE — A FACTOR OF   │
      │ 2.33 — AT NO COST IN THE CASTING.          │
      └────────────────────────────────────────────┘

  (c) PERSISTENCE AND EXPOSURE

      PARTS PER UNATTENDED SHIFT
        8 × 3600/96 = 300 parts

      UNATTENDED PARTS PER YEAR
        300 × 230 = 69,000

      ┌────────────────────────────────────────────┐
      │ WAIT — THAT EXCEEDS THE ANNUAL VOLUME OF   │
      │ 38,000.                                    │
      │                                            │
      │ SO THE CELL CANNOT RUN A FULL UNATTENDED   │
      │ SHIFT EVERY NIGHT AT THIS VOLUME. THE      │
      │ UNATTENDED RUNNING MUST BE PARTIAL.        │
      │                                            │
      │ THIS IS WORTH CATCHING: THE ARITHMETIC     │
      │ REVEALED AN INCONSISTENCY IN THE STATED    │
      │ OPERATING PATTERN.                         │
      └────────────────────────────────────────────┘

      REVISED, using the volume as the constraint
      [PROJ]:
        Assume one third of output runs
        unattended:
          38,000/3 = 12,667 parts/yr unattended
          = 12,667/300 = 42 unattended shifts/yr

      EXPOSURE PER FAULT, UNATTENDED

      F2 — chip, rate 1 in 900
        Faults in unattended running
          = 12,667/900 = 14.07/yr
        Each persists an average of half a shift
          = 150 parts   [EX-ASSUMED]
        Parts lost = 14.07 × 150 = 2,111/yr
        BUT capped by total unattended output:
          cannot exceed 12,667
        Exposure = 2,111 × 3,600
                 = ₹7,600,000/yr

      ┌────────────────────────────────────────────┐
      │ THAT IS AN ENORMOUS NUMBER AND IT SHOULD   │
      │ BE TREATED WITH SUSPICION.                 │
      │                                            │
      │ IT SAYS 16.7 % OF UNATTENDED OUTPUT WOULD  │
      │ BE SCRAP. IF THAT WERE SO, THE CELL        │
      │ WOULD NOT BE RUNNING UNATTENDED AT ALL.    │
      │                                            │
      │ WHAT IT ACTUALLY DEMONSTRATES IS THAT      │
      │ UNATTENDED RUNNING IS IMPOSSIBLE WITHOUT   │
      │ CHIP SENSING — NOT THAT THE LOSS WILL BE   │
      │ ₹7.6 MILLION.                              │
      │                                            │
      │ THE HONEST STATEMENT: THE F2 EXPOSURE IS   │
      │ LARGE ENOUGH THAT SENSING IT IS A GATE,    │
      │ NOT AN ECONOMIC CHOICE.                    │
      └────────────────────────────────────────────┘

      F4 — clamp force, rate 1 in 6,000
        Faults = 12,667/6,000 = 2.11/yr
        Persistence 150 parts
        Parts lost = 317/yr
        Exposure = 317 × 3,600 = ₹1,141,000/yr

      F3 — wrong variant (2 vs 3), rate 1 in 1,200
        Faults = 12,667/1,200 = 10.6/yr
        BUT: a wrong variant is detected at the
        NEXT operation, not at the end of the
        shift. Persistence ≈ 1 part.
        Parts lost ≈ 11/yr
        Exposure = 11 × 3,600 = ₹39,600/yr

      ┌────────────────────────────────────────────┐
      │ NOTE HOW PERSISTENCE DOMINATES.            │
      │                                            │
      │ F3 IS 5.0× MORE FREQUENT THAN F4 AND       │
      │ COSTS 29× LESS, BECAUSE IT IS CAUGHT       │
      │ IMMEDIATELY.                               │
      │                                            │
      │ FAULT RATE ALONE IS A POOR GUIDE TO WHAT   │
      │ TO SENSE. RATE × PERSISTENCE IS THE RIGHT  │
      │ MEASURE.                                   │
      └────────────────────────────────────────────┘

  (d) RANKING BY COST PER UNIT OF EXPOSURE
      REMOVED

      F1 dimple + pin  ₹18,000
        removes F1 entirely — and F1's exposure,
        had it not been prevented, would have been
        (12,667/350) × 150 × 3,600
        = 36.2 × 150 × 3,600
        = ₹19,548,000/yr (capped at total output)
        → RATIO: overwhelming, and it is not
          really an economic question

      F2 air seat check  ₹64,000
        removes ₹7,600,000 of exposure
        RATIO = 64,000/7,600,000 = 0.84 %

      F4 load cell  ₹95,000
        removes ₹1,141,000
        RATIO = 8.33 %

      F3 vision  ₹340,000
        removes ₹39,600
        RATIO = 858 %

      ┌────────────────────────────────────────────┐
      │ THE VISION SYSTEM COSTS 8.6 TIMES THE      │
      │ ANNUAL EXPOSURE IT REMOVES.                │
      │                                            │
      │ IT IS THE MOST IMPRESSIVE TECHNOLOGY ON    │
      │ THE LIST AND THE WORST INVESTMENT, BECAUSE │
      │ THE FAULT IT CATCHES IS ALREADY CAUGHT     │
      │ CHEAPLY AT THE NEXT OPERATION.             │
      │                                            │
      │ THIS IS A COMMON PATTERN: SENSING IS       │
      │ SPECIFIED BY WHAT IS TECHNICALLY           │
      │ INTERESTING RATHER THAN BY WHAT IS         │
      │ EXPENSIVE WHEN IT GOES UNDETECTED.         │
      └────────────────────────────────────────────┘

  (e) THE PERIODIC CHECK

      Probing every 20 parts, 11 s per check.

      CAPACITY COST
        11 s per 20 parts = 0.55 s per part
        As a fraction of 96 s = 0.573 %
        Annual = 38,000 × 0.55/3600 = 5.81 h
        Value = 5.81 × 1,800 = ₹10,458/yr
                                        [EX-ASSUMED]

      WHAT IT BOUNDS
        Any undetected fault is caught within 20
        parts.
        Maximum loss per event = 20 × 3,600
                               = ₹72,000

      Compare with the 150-part persistence
      assumed above:
        150 × 3,600 = ₹540,000 per event

      REDUCTION FACTOR = 540,000/72,000
                       = 7.50×

      ┌────────────────────────────────────────────┐
      │ THE PROBING ROUTINE COSTS ₹40,000 CAPITAL  │
      │ AND ₹10,458 A YEAR IN CAPACITY, AND IT     │
      │ REDUCES THE CONSEQUENCE OF EVERY UNSENSED  │
      │ FAULT BY 7.50×.                            │
      │                                            │
      │ NOT ONE SPECIFIC FAULT — EVERY FAULT,      │
      │ INCLUDING ONES NOBODY HAS THOUGHT OF.      │
      │                                            │
      │ THAT PROPERTY IS WHY A PERIODIC CHECK IS   │
      │ USUALLY BETTER VALUE THAN SENSING ONE MORE │
      │ SPECIFIC THING.                            │
      └────────────────────────────────────────────┘

  (f) RECOMMENDED PACKAGE

      ✔ F1 dimple + pin            ₹18,000
        PREVENTION — removes the fault
      ✔ F2 air seat check, 3 pads  ₹64,000
        GATE — unattended running is not
        possible without it
      ✔ F4 load cell               ₹95,000
        8.33 % of the exposure removed
      ✔ Probing every 20 parts     ₹40,000
        bounds everything else at 7.50× less
      ✗ F3 vision                  REJECTED
        858 % of the exposure removed; the fault
        is caught at the next operation

      TOTAL PACKAGE                ₹217,000

      Plus relieved pads and chip blow-off as
      design features (L2.2.3), at negligible
      marginal cost.

  (g) RESIDUAL EXPOSURE

      F1  eliminated
      F2  sensed
      F3  ₹39,600/yr, caught at the next
          operation — ACCEPTED
      F4  sensed
      UNKNOWN FAULTS  bounded at 20 parts by
          probing

      ┌────────────────────────────────────────────┐
      │ ACCEPTING F3's ₹39,600 IS A DECISION, NOT  │
      │ AN OVERSIGHT, AND IT SHOULD BE WRITTEN     │
      │ DOWN AS ONE.                               │
      │                                            │
      │ AN ACCEPTED RISK THAT IS NOT RECORDED      │
      │ LOOKS LIKE AN OMISSION WHEN IT EVENTUALLY  │
      │ COSTS SOMETHING.                           │
      └────────────────────────────────────────────┘

  (h) JUSTIFICATION

      Package cost               ₹217,000
      Exposure removed
        F2 ₹7,600,000 (a gate, not a trade)
        F4 ₹1,141,000
        plus a 7.50× reduction on everything
        unsensed

      Even counting only F4:
        Payback = 217,000/(1,141,000/12)
                = 217,000/95,083
                = 2.28 months

      ┌────────────────────────────────────────────┐
      │ AND THE ₹18,000 DIMPLE — THE CHEAPEST ITEM │
      │ ON THE LIST BY A FACTOR OF THREE — REMOVED │
      │ THE LARGEST SINGLE EXPOSURE ENTIRELY AND   │
      │ PERMANENTLY.                               │
      │                                            │
      │ PREVENTION BEATS DETECTION.                │
      └────────────────────────────────────────────┘

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Preventable              │ F1 fully, F3      │
  │                              │ partly, F2/F4 not │
  │ (b) Interference required    │ 0.69 mm; 3 mm pin │
  │                              │ gives 4.35×       │
  │     Clearance when correct   │ 0.5 vs 0.43 mm —  │
  │                              │ only 16 %; DEEPEN │
  │                              │ TO 1.0 mm         │
  │ (c) Parts per unattended     │ 300               │
  │     shift                    │                   │
  │     Stated pattern           │ INCONSISTENT with │
  │                              │ annual volume     │
  │     F2 exposure              │ ₹7,600,000/yr     │
  │     F4 exposure              │ ₹1,141,000/yr     │
  │     F3 exposure              │ ₹39,600/yr        │
  │ (d) Cost per exposure        │ F2 0.84 % · F4    │
  │     removed                  │ 8.33 % · F3 858 % │
  │ (e) Probing capacity cost    │ 0.573 % = ₹10,458 │
  │     Consequence reduction    │ 7.50× on ALL      │
  │                              │ faults            │
  │ (f) PACKAGE                  │ ₹217,000; vision  │
  │                              │ REJECTED          │
  │ (h) Payback on F4 alone      │ 2.28 months       │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Poka-Yoke interference factor 4.35 over the
  minimum; clearance factor only 1.16 as designed
  and 2.33 as revised. THE CLEARANCE MARGIN IS THE
  ONE THAT MATTERS, because an interfering
  Poka-Yoke gets filed down.

PASS/FAIL:
  ✓ PASS — F1 prevention, with the dimple deepened
  ✓ PASS — F2 air seat check; a gate for unattended
    running
  ✓ PASS — F4 load cell, 2.28-month payback
  ✗ REJECTED — F3 vision, 858 % of the exposure it
    removes
  ✓ PASS — probing, 7.50× consequence reduction for
    0.573 % of capacity
  ⚠ NOTE — the stated operating pattern was
    arithmetically inconsistent and was revised

ENGINEERING CONCLUSION:
  1. THE CHEAPEST ITEM REMOVED THE LARGEST
     EXPOSURE, PERMANENTLY.
     An ₹18,000 dimple and pin eliminated the 180°
     loading fault outright. Every other item on
     the list detects a fault after it has
     happened; this one made it impossible. And it
     required no power, no calibration, no
     maintenance, and it cannot be bypassed
     without machining. PREVENTION BEATS
     DETECTION, AND THE GAP IS USUALLY AN ORDER OF
     MAGNITUDE IN BOTH COST AND RELIABILITY.
     The awkward part is that the fix was to the
     PART, not the fixture — a feature with no
     function, requested by a fixture designer.
     That conversation is easy at part design
     stage, a change request after the pattern is
     made, and a concession after production
     starts.

  2. PERSISTENCE MATTERED MORE THAN FAULT RATE.
     F3 occurred 5.0 times more often than F4 and
     cost 29 times less, because a wrong variant
     is caught at the next operation while a
     clamp force failure runs until somebody
     looks. RATE ALONE IS A POOR GUIDE TO WHAT TO
     SENSE; RATE × PERSISTENCE IS THE RIGHT
     MEASURE, and persistence is what changes when
     the cell runs unattended.

  3. THE MOST IMPRESSIVE TECHNOLOGY WAS THE WORST
     INVESTMENT.
     The vision system cost 858 % of the annual
     exposure it removed — 8.6 times — because the
     fault it catches is already caught cheaply
     downstream. THIS IS A COMMON PATTERN: SENSING
     GETS SPECIFIED BY WHAT IS TECHNICALLY
     INTERESTING RATHER THAN BY WHAT IS EXPENSIVE
     WHEN UNDETECTED. Ranking by cost per unit of
     exposure removed takes ten minutes and it
     reorders the list every time.

  4. THE PERIODIC CHECK WAS THE BEST VALUE ON THE
     LIST FOR A REASON THAT IS EASY TO MISS.
     ₹40,000 and 0.573 % of capacity reduced the
     consequence of every fault by 7.50× — not one
     named fault, but every fault, INCLUDING THE
     ONES NOBODY LISTED. That property is unique
     to periodic verification, and it is why the
     sensor list does not have to be complete. It
     also bounds the exposure of the failure mode
     I am most worried about in any such analysis:
     the one I have not thought of.

  5. THE ARITHMETIC CAUGHT AN INCONSISTENCY IN THE
     BRIEF.
     300 parts per unattended shift × 230 shifts
     is 69,000 parts against a stated annual volume
     of 38,000. The operating pattern as described
     was impossible. That is worth surfacing rather
     than quietly assuming a resolution, because it
     usually means somebody's expectation of the
     project is wrong — and it is better to find
     that in a calculation than at commissioning.

SENSITIVITY NOTE:
  Ranked by influence:
    1. PERSISTENCE UNDER UNATTENDED RUNNING — 150
       parts assumed as an average half-shift. It
       drives every exposure figure and it is an
       assumption, not a measurement. The probing
       routine caps it at 20, which makes the
       whole analysis far less sensitive to this
       number — a good reason to fit it.
    2. WHETHER THE CHIP FAULT RATE RISES UNDER
       AUTOMATION — assumed unchanged, which is
       optimistic, since the operator's eyes were
       part of the existing control.
    3. THE FRACTION OF OUTPUT RUN UNATTENDED — one
       third assumed after the stated pattern
       proved inconsistent. Linear on all
       exposures.
    4. POKA-YOKE CLEARANCE MARGIN — 16 % as
       designed. Too tight, and the failure mode
       is that somebody files the pin. Deepening
       the dimple costs nothing.
    5. PART VALUE — ₹3,600, linear on every
       exposure. Halving it would not change any
       ranking, because all the exposures scale
       together.
```

### 14. Engineering assumptions
- Fault rates come from **twelve months of recorded history**, not estimates — unusual and valuable
  `[PROJ]`.
- Rates assumed unchanged by automation, which is **optimistic for chip-related faults** `[EX-ASSUMED]`.
- Exposure calculated for unattended running only; manned persistence assumed 1–2 parts `[PROJ]`.
- Vision cost includes lighting and integration `[EX-ASSUMED]`.
- The probing routine uses a probe already fitted `[PROJ]`.
- **The stated operating pattern was arithmetically inconsistent** with the annual volume and was revised
  `[PROJ]`.

### 15. Diagram

```
     POKA-YOKE AND SENSOR VERIFICATION
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE ERROR-PROOFING HIERARCHY
  (the hierarchy of control, applied to loading)

   1 MAKE THE ERROR IMPOSSIBLE    ◄ POKA-YOKE
   2 MAKE THE ERROR OBVIOUS
   3 DETECT IT AND STOP           ◄ SENSING
   4 DETECT IT LATER AND CONTAIN
   5 INSTRUCT THE OPERATOR NOT TO ◄ weakest, and
                                    most often
                                    chosen

   ┌──────────────────────────────────────────────┐
   │ SAME SHAPE AS L2.2.4. SAME RANKING. SAME     │
   │ REASON: THE BOTTOM RELIES ON A PERSON DOING  │
   │ SOMETHING CORRECTLY EVERY TIME.              │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  PREVENTION vs DETECTION

   POKA-YOKE FEATURE        SENSOR
   ─────────────────        ──────
   costs a few mm of steel  costs money
   never fails              drifts, gets knocked
   no power                 needs power + wiring
   no calibration           needs calibration
   cannot be bypassed       BRIDGED IN 30 SECONDS
     without a hacksaw

   ┌──────────────────────────────────────────────┐
   │ PREFER PREVENTION. ALWAYS.                   │
   │                                              │
   │ BUT SOME FAULTS CANNOT BE DESIGNED OUT — A   │
   │ CHIP UNDER THE PART, A DAMAGED PART, A CLAMP │
   │ THAT DID NOT ACTUATE, A BROKEN TOOL.         │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE NEARLY-SYMMETRICAL PART

   FULLY SYMMETRICAL     either way is correct
                         → SAFE

   CLEARLY ASYMMETRICAL  nobody gets it wrong
                         → SAFE

   NEARLY SYMMETRICAL    looks symmetrical ·
                         loads either way ·
                         the error is invisible
                         → THE ONE THAT MAKES
                           SCRAP

   ┌──────────────────────────────────────────────┐
   │ TREAT IT AS A RED FLAG THE MOMENT IT APPEARS │
   │ ON A DRAWING.                                │
   │                                              │
   │ AND IF THE PART HAS NO USABLE ASYMMETRY, ASK │
   │ FOR ONE. A 3 mm DIMPLE COSTS NOTHING IN A    │
   │ CASTING AND SOLVES IT FOREVER.               │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE POKA-YOKE PIN — TWO INEQUALITIES

   WRONG WAY: MUST FOUL
        part
     ═══════╤═══  pin stands 3 mm proud
            █     interference 3.00 mm
                  required     0.69 mm  → 4.35× ✓

   RIGHT WAY: MUST NOT FOUL
     ═══════╤═══
        ╲__╱█     dimple 3.5, pin 3.0
                  clearance 0.50 mm
                  required  0.43 mm  → only 1.16×

   ┌──────────────────────────────────────────────┐
   │ THE SECOND INEQUALITY IS THE TIGHT ONE AND   │
   │ THE ONE NOBODY CHECKS.                       │
   │                                              │
   │ A POKA-YOKE PIN THAT OCCASIONALLY FOULS A    │
   │ CORRECTLY LOADED PART WILL BE FILED DOWN     │
   │ WITHIN A WEEK — AND THEN IT PREVENTS NOTHING │
   │ WHILE EVERYONE BELIEVES IT DOES.             │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE AIR SEAT CHECK

        ┌──── part ────┐
     ═══╧══════════════╧═══  locating pad
          ↑ orifice
          │ low-pressure air

   NOT SEATED  → air escapes → LOW pressure
   SEATED      → blocked     → HIGH pressure

   ┌──────────────────────────────────────────────┐
   │ IT DETECTS THE ONE FAULT THAT DEFEATS        │
   │ EVERYTHING ELSE — A PART SITTING ON A CHIP.  │
   │                                              │
   │ AND IT SELF-CLEANS: THE FLOW BLOWS SMALL     │
   │ DEBRIS OFF BEFORE THE PART ARRIVES.          │
   │                                              │
   │ VERIFY DISCRIMINATION WITH A SHIM OF THE     │
   │ SMALLEST FAULT YOU NEED TO CATCH. [MFR]      │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  POSITION IS NOT FORCE

   A "CLAMP CLOSED" SWITCH MISSES:
     ✗ a broken spring
     ✗ a leaking cylinder that crept to position
     ✗ A CLAMP CLOSED ON NOTHING
     ✗ a worn pad

   ┌──────────────────────────────────────────────┐
   │ A CLAMP THAT CLOSES FURTHER THAN NORMAL      │
   │ BECAUSE NOTHING IS IN THE WAY MAY STILL TRIP │
   │ A SIMPLE "PAST A POINT" SWITCH.              │
   │                                              │
   │ USE A WINDOW — THE CLAMP MUST BE IN A RANGE  │
   │ CORRESPONDING TO A PART BEING PRESENT.       │
   │                                              │
   │ FREE IMPROVEMENT. RARELY SPECIFIED.          │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  RANK BY COST PER UNIT OF EXPOSURE REMOVED

   F2 air seat  ₹64,000 / ₹7,600,000  = 0.84 % ✓✓
   F4 load cell ₹95,000 / ₹1,141,000  = 8.33 % ✓
   F3 VISION    ₹340,000 / ₹39,600    = 858 %  ✗

   ┌──────────────────────────────────────────────┐
   │ THE MOST IMPRESSIVE TECHNOLOGY WAS THE WORST │
   │ INVESTMENT — 8.6× THE EXPOSURE IT REMOVES,   │
   │ BECAUSE THE FAULT IS ALREADY CAUGHT CHEAPLY  │
   │ AT THE NEXT OPERATION.                       │
   │                                              │
   │ SENSING GETS SPECIFIED BY WHAT IS            │
   │ TECHNICALLY INTERESTING RATHER THAN BY WHAT  │
   │ IS EXPENSIVE WHEN UNDETECTED.                │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  RATE × PERSISTENCE, NOT RATE

   F3 wrong variant  5.0× MORE FREQUENT than F4
                     29× LESS COSTLY
                     — because it is caught at the
                       next operation

   ┌──────────────────────────────────────────────┐
   │ PERSISTENCE IS WHAT CHANGES WHEN THE CELL    │
   │ RUNS UNATTENDED. THAT IS WHY THE SENSING     │
   │ CASE IS AN AUTOMATION QUESTION AND NOT A     │
   │ QUALITY ONE.                                 │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE PERIODIC CHECK BOUNDS EVERYTHING

   without probing  150 parts per event
                    ████████████████ ₹540,000
   probing every 20  20 parts per event
                    ██ ₹72,000
                    REDUCTION 7.50×

   cost: ₹40,000 + 0.573 % of capacity

   ┌──────────────────────────────────────────────┐
   │ NOT ONE NAMED FAULT — EVERY FAULT, INCLUDING │
   │ THE ONES NOBODY LISTED.                      │
   │                                              │
   │ THAT PROPERTY IS WHY THE SENSOR LIST DOES    │
   │ NOT HAVE TO BE COMPLETE, AND IT IS WHY A     │
   │ PERIODIC CHECK IS USUALLY BETTER VALUE THAN  │
   │ SENSING ONE MORE SPECIFIC THING.             │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE RELIABILITY TRAP

   1 sensor trips wrongly, twice a shift
   2 production stops, nobody knows why
   3 somebody bridges it "temporarily"
   4 the bridge is never removed
   5 EVERYONE BELIEVES THE PROTECTION WORKS

   ┌──────────────────────────────────────────────┐
   │ STATE 5 IS WORSE THAN NEVER FITTING IT,      │
   │ BECAUSE BELIEF IN PROTECTION REMOVES THE     │
   │ VIGILANCE THAT WOULD OTHERWISE EXIST.        │
   │                                              │
   │ THREE RELIABLE SENSORS BEAT EIGHT UNRELIABLE │
   │ ONES — AND A DEFEATED INTERLOCK IS A DESIGN  │
   │ FAILURE, NOT AN OPERATOR FAILURE.            │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-9100 — ERROR-PROOFING
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: PIN ITEM 8 IS A POKA-YOKE FEATURE. IT
        ENGAGES THE 4.0 mm DIMPLE ON THE PART AND
        PREVENTS 180° LOADING. IT SHALL NOT BE
        SHORTENED, REMOVED OR RELIEVED FOR ANY
        REASON. IF IT FOULS A CORRECTLY LOADED
        PART, THE PART IS OUT OF TOLERANCE —
        INVESTIGATE THE PART.

NOTE 2: AIR SEAT CHECK PORTS ITEMS 14-16 SHALL
        INHIBIT THE CYCLE. DISCRIMINATION SHALL BE
        VERIFIED AT COMMISSIONING WITH A 0.05 mm
        SHIM AT EACH PAD AND ANNUALLY THEREAFTER.

NOTE 3: CLAMP POSITION SWITCH ITEM 19 IS A WINDOW
        SWITCH. IT SHALL SIGNAL ONLY WITHIN THE
        RANGE SHOWN. A CLAMP CLOSED BEYOND THIS
        RANGE INDICATES NO PART PRESENT AND SHALL
        FAULT.

NOTE 4: FAULT F3 — WRONG VARIANT BETWEEN TYPES 2
        AND 3 — IS NOT DETECTED BY THIS FIXTURE.
        THIS IS A RECORDED ACCEPTED RISK. SEE
        RISK REGISTER ENTRY RR-9100-03. DETECTION
        OCCURS AT OPERATION 40.

NOTE 5: ANY BYPASS OF ITEMS 14-16 OR 19 PROHIBITS
        UNATTENDED OPERATION.
```

`[PRACTICE]` **Note 1's last sentence is the one that keeps the Poka-Yoke alive.** Without it, a pin that
fouls will be filed down and the protection silently disappears. **Telling the operator what a foul
*means* converts an obstruction into a diagnostic** — and Note 4, recording an accepted risk explicitly,
is the same instinct: an accepted risk that is not written down looks like an omission when it eventually
costs something.

### 17. CAD workflow
1. **Enumerate every way the part could be loaded wrongly** before designing any locating
2. For each, test whether a **physical feature can prevent it**
3. Model the part in the **wrong orientations** and verify the blocking feature fouls
4. Model the part at **tolerance extremes in the correct orientation** and verify clearance
5. Model **air seat ports** in the locating faces, away from likely coolant pooling
6. Model **sensor bodies, cabling and access** for replacement
7. Model the **shim test access** — can somebody insert a 0.05 mm shim at each pad?
8. Produce the **risk register** alongside the model, recording what is accepted

`[PRACTICE]` Step 3 is the one that gets skipped, and it is the whole point. **Modelling the part
correctly loaded proves nothing about a Poka-Yoke feature** — the feature only earns its place if the
model shows it fouling in every wrong orientation, at tolerance extremes.

### 18. GD&T application

```
  A POKA-YOKE FEATURE IS A TOLERANCED FEATURE,
  AND ITS TOLERANCE IS TWO-SIDED IN AN UNUSUAL
  WAY.

  STANDARD: ASME Y14.5-2018

  ┌────────────────────────────────────────────┐
  │ MOST FIXTURE FEATURES HAVE ONE FUNCTIONAL  │
  │ CONCERN: BE IN THE RIGHT PLACE.            │
  │                                            │
  │ A POKA-YOKE FEATURE HAS TWO OPPOSING ONES: │
  │   BIG ENOUGH TO FOUL WHEN WRONG            │
  │   SMALL ENOUGH TO CLEAR WHEN RIGHT         │
  │                                            │
  │ BOTH MUST HOLD ACROSS THE FULL RANGE OF    │
  │ PART AND FIXTURE VARIATION, WHICH MEANS    │
  │ THE FEATURE'S TOLERANCE IS DERIVED FROM A  │
  │ STACK ON BOTH SIDES.                       │
  └────────────────────────────────────────────┘

  WHAT THIS MEANS ON THE PART DRAWING

  A non-functional Poka-Yoke feature — the
  dimple — still needs:
    → a position tolerance, because the pin must
      find it
    → a depth tolerance, because the clearance
      depends on it
    → and a NOTE explaining that it exists for
      manufacturing, so a later designer does
      not delete it as pointless

  ┌────────────────────────────────────────────┐
  │ THAT NOTE IS NOT A COURTESY. A FEATURE     │
  │ WITH NO FUNCTIONAL PURPOSE AND NO          │
  │ EXPLANATION IS EXACTLY WHAT A COST-DOWN    │
  │ EXERCISE REMOVES.                          │
  │                                            │
  │ AND IT WILL BE REMOVED FROM THE PART       │
  │ DRAWING, NOT THE FIXTURE DRAWING, SO THE   │
  │ FIXTURE DESIGNER WILL NOT SEE IT HAPPEN.   │
  └────────────────────────────────────────────┘

  Tolerance stack-up methods at Level 12.
```

### 19. Manufacturing method
| Element | Practice `[PRACTICE]` |
|---|---|
| **Poka-Yoke pins** | Hardened, and **positively retained** — a pressed pin that can be knocked out defeats itself |
| **Blocking features** | Machined integral with the base where possible, not bolted on |
| **Air seat orifices** | Small, cross-drilled, **deburred internally**; a burr changes the pressure signature |
| **Port routing** | Drilled passages in the base rather than external tubing |
| **Sensor mounting** | Shielded from chips and coolant, replaceable without dismantling |
| **Cabling** | Routed away from the loading path and the swarf |

> **"Positively retained"** matters for Poka-Yoke pins specifically. `[PRACTICE]` A pin that is pressed in
> and can be driven out with a hammer is a pin that will be driven out the first time somebody is
> convinced it is in the way. **Screwing it in from behind, or securing it so removal requires
> dismantling the fixture, converts a two-minute defeat into a decision somebody has to justify.**

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Poka-Yoke fouls when wrong | **Physically attempt every wrong orientation** | Fouls in all |
| Poka-Yoke clears when right | Load parts at tolerance extremes | Clears in all |
| Poka-Yoke pin retention | Attempt removal without dismantling | Not removable |
| Air seat discrimination | **Shim test at each pad** `[MFR]` | Detects the specified thickness |
| Air seat with coolant present | Flood and re-test | Still discriminates |
| Clamp window switch | Actuate with and without a part | Faults with no part |
| Sensor response to each fault | Simulate each listed fault | Correct inhibit |
| Spurious trip rate | Monitor over a week | Below the agreed threshold |
| Bypass visibility | Inspect the control arrangement | A bypass is evident |
| Periodic check operation | Verify the probing routine triggers | Every 20 parts |
| Risk register | Document review | Accepted risks recorded |

`[PRACTICE]` **"Physically attempt every wrong orientation" is the acceptance test that matters most**,
and it takes five minutes. A Poka-Yoke feature verified only in CAD has been verified against the
designer's imagination of how the part might be loaded — and operators are more inventive than that.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Reaching for **sensing** before asking whether prevention is possible | Expensive, fallible, bypassable |
| 2 | Using **colour or labels** as the primary control | "Obvious" is not "impossible" |
| 3 | Not treating a **nearly-symmetrical part** as a red flag | Sporadic scrap, worse on night shift |
| 4 | Not **asking the part designer** for an asymmetry | A permanent problem accepted as unavoidable |
| 5 | Checking only that the Poka-Yoke **fouls when wrong** | It also fouls when right, and gets filed down |
| 6 | A Poka-Yoke pin that can be **knocked out** | Defeated in two minutes |
| 7 | Sensing **presence** instead of **seating** | The characteristic automation failure |
| 8 | Treating clamp **position** as clamp **force** | Misses broken springs and clamps closed on nothing |
| 9 | A **"past a point"** switch instead of a window | A clamp closed on nothing reads closed |
| 10 | Not verifying **discrimination with a shim** | The sensor cannot detect the fault it was bought for |
| 11 | Ranking sensors by **technical interest** | 858% of the exposure removed |
| 12 | Using **fault rate** instead of rate × persistence | The wrong faults get sensed |
| 13 | Omitting a **periodic check** | Every unsensed fault is unbounded |
| 14 | Fitting **many unreliable** sensors | They get bypassed, and belief in protection remains |
| 15 | Not **recording accepted risks** | They look like omissions later |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Wrong-orientation parts still appearing | Poka-Yoke filed down or removed | Inspect the feature | Restore; investigate why | Note 1 on the drawing; positive retention |
| Poka-Yoke fouls good parts | Clearance margin too small | Measure parts at extremes | Deepen the recess | Check both inequalities |
| Air seat check trips randomly | Coolant in the orifice, or a burr | Inspect and blow through | Deburr; reposition the port | Port placement in CAD |
| Air seat passes with a chip present | Discrimination inadequate | Shim test | Smaller orifice, higher sensitivity `[MFR]` | Verify at commissioning |
| Clamp reads closed with no part | "Past a point" switch | Cycle with no part | Fit a window switch | Design rule R7 |
| Sensor bypassed | Spurious trips | Check the control panel; review the trip log | Fix the reliability, then restore | Reliability before coverage |
| Faults still escaping | Unlisted failure mode | Review scrap against the fault list | Add a periodic check | Design rule R11 |
| Sensors damaged repeatedly | Exposed mounting | Inspect | Shield; reposition | Model the environment |
| Accepted risk questioned later | Not recorded | — | Produce the register | Design rule; risk register |

### 23. Design checklist
- [ ] Has **every way of loading the part wrongly** been enumerated?
- [ ] For each, has **prevention** been considered before detection?
- [ ] Has the part's **existing asymmetry** been used?
- [ ] If none exists, has a **non-functional feature been requested** at part design stage?
- [ ] Is the part **nearly symmetrical** — and flagged if so?
- [ ] Does each Poka-Yoke feature satisfy **both** inequalities — fouls when wrong, clears when right?
- [ ] Are Poka-Yoke pins **positively retained**?
- [ ] Is **seating** sensed, not presence?
- [ ] Are clamp switches **windows**?
- [ ] Is **force** sensed where force matters?
- [ ] Has **discrimination been verified with a shim**?
- [ ] Have sensors been ranked by **cost per unit of exposure removed**?
- [ ] Has **persistence** been used, not just fault rate?
- [ ] Is there a **periodic check** bounding unsensed faults?
- [ ] Are there **few reliable** sensors rather than many unreliable ones?
- [ ] Is a **bypass visible**, and does it prohibit unattended running?
- [ ] Are **accepted risks recorded** in a register and noted on the drawing?

### 24. Beginner exercise
**E3.3.2-B** — Answer with reasons and calculations:
(a) State the error-proofing hierarchy and explain why it has the same shape as the hierarchy of control.
(b) Give four physical Poka-Yoke methods and state what each prevents.
(c) Explain why a nearly-symmetrical part is more dangerous than a fully symmetrical one.
(d) A part has ±0.15 mm tolerance and the fixture ±0.03 mm. Calculate the minimum interference for a
Poka-Yoke feature with a 2× margin, and the minimum clearance with a 1.5× margin.
(e) Explain how an air seat check works and state two things it cannot detect.
(f) A cell runs 6 unattended hours at a 110 s cycle with parts worth ₹1,900. Calculate the exposure if a
fault persists for the whole period.

### 25. Intermediate exercise
**E3.3.2-I** — A fixture has three credible faults: A, reversed loading, rate 1 in 500; B, part on a
chip, rate 1 in 1,100; C, clamp force failure, rate 1 in 4,500. Cycle 82 s, part value ₹2,700, volume
44,000/yr, of which 30% runs unattended in 8-hour shifts. Options: a Poka-Yoke pin and part dimple at
₹22,000 preventing A; an air seat check at ₹58,000 detecting B; a load cell at ₹88,000 detecting C; a
probing routine every 25 parts at ₹35,000 adding 9 s per check.
(a) Calculate the parts per unattended shift and the unattended parts per year.
(b) Assuming a fault persists for half a shift on average, calculate the exposure of each fault.
(c) Rank the three detection options by cost per unit of exposure removed.
(d) Calculate the capacity cost of the probing routine as a percentage and in rupees at ₹1,800/h.
(e) Calculate the consequence reduction factor the probing routine provides.
(f) Recommend a package with its total cost, and state the residual exposure.
(g) State why the Poka-Yoke item is not really an economic decision.

### 26. Advanced exercise
**E3.3.2-A** — A robot-loaded cell machines five variants of a steel flange, distinguishable only by
thickness (18, 20, 22, 25 and 28 mm) and by a hole pattern machined at a later operation. Volume 96,000/yr
across the five, on a 5-year programme. Part value ₹1,850. Cycle 68 s. Two manned shifts plus 220
unattended 8-hour shifts a year. `[EX-ASSUMED]` State all assumptions.
(i) Enumerate every credible loading fault for this cell.
(ii) Determine which are preventable and design the Poka-Yoke features, including the two inequalities
for each.
(iii) Explain the specific difficulty created by variants that differ only in thickness, and propose a
solution.
(iv) Calculate the persistence and exposure of each unpreventable fault.
(v) Rank the sensing options by cost per unit of exposure removed, stating your assumed costs.
(vi) Design the periodic check strategy and calculate its capacity cost and consequence reduction.
(vii) Assess the risk that sensors will be bypassed and state what you would do about it.
(viii) Produce a risk register entry for every accepted residual risk.
(ix) Identify which of the twenty-four auto-fail items this application most invites.
(x) State the eight most important drawing notes.

### 27. Interview questions
1. *"What is Poka-Yoke and why do you prefer it to sensing?"*
   **Answer:** Poka-Yoke is error-proofing — making the wrong thing physically impossible rather than
   detecting it after it happens. Usually it is a pin, a block, a step or an asymmetry: the part simply
   will not go in the wrong way. I prefer it for four reasons. It costs almost nothing, typically a few
   millimetres of steel in the right place. It never fails, because there is nothing to fail. It needs no
   power, no wiring and no calibration. And it cannot be bypassed without a hacksaw, whereas a sensor can
   be bridged in the control panel in thirty seconds — and it will be, if it trips spuriously. There is a
   case I like where a housing was symmetrical except for an internal rib, so it loaded 180° out about
   one time in four hundred. Work instructions, paint marks and retraining did nothing, because all of
   those ask a person to do something correctly every time. Adding a three millimetre dimple to the
   casting pattern and a matching pin to the fixture took the rate to zero. The interesting part is that
   the fix was to the part, not the fixture — a feature with no function, requested by a fixture
   designer. That is easy at part design stage and progressively harder afterwards, which is why you have
   to ask early.
2. *"How do you decide what to sense?"*
   **Answer:** I list the credible failure modes, then ask of each one whether it can be prevented
   instead — because anything I can prevent leaves the list permanently. For what remains, I calculate
   exposure, which is the fault rate times the cost times the persistence, and persistence is the term
   people forget. In the case we worked, a wrong-variant fault happened five times more often
   than a clamp force failure and cost twenty-nine times less, because a wrong variant gets caught at the
   next operation while a clamp failure runs until somebody looks. So fault rate alone is a poor guide;
   rate times persistence is the right measure, and persistence is exactly what changes when the cell
   runs unattended. Then I rank the options by cost per unit of exposure removed, which reorders the list
   almost every time — in that case the vision system was the most impressive technology on the list and
   cost eight and a half times the annual exposure it removed. And finally I add a periodic check, a
   probing routine every twenty parts or so, because that bounds the consequence of every unsensed fault
   at once, including the ones nobody thought of. That last property is why the sensor list does not have
   to be complete.

### 28. Expert questions
1. *"You said an unreliable sensor is worse than no sensor. That sounds rhetorical. Defend it."*
   **Answer:** It is not rhetorical, and the argument is about **where the vigilance sits**.
   Consider a cell with no seat sensing. Everybody knows there is no seat sensing. The operator checks
   the pad, the setter blows it off at the start of the shift, the quality plan probably includes a
   first-off and a periodic check, and nobody runs it lights-out because the risk is understood. **The
   absence of protection is itself a control, because it is visible and it drives behaviour.**
   Now fit a seat sensor that trips spuriously twice a shift. Within a fortnight it will be bridged —
   not maliciously, but by a shift supervisor at two in the morning with a delivery to make. The bridge
   is a two-minute job and it is never recorded. **From that moment the plant has all the behaviour of a
   protected cell and none of the protection.** The blow-off routine stops because the sensor covers it.
   The periodic check gets relaxed because the sensor covers it. And crucially, **the cell gets approved
   for unattended running because it has seat sensing** — which is precisely the condition under which
   the missing protection becomes expensive.
   So the comparison is not "sensor working" against "sensor bypassed". It is **"no sensor, with the
   compensating behaviours that its absence provokes" against "bypassed sensor, with those behaviours
   removed."** The second is strictly worse, and it is worse in a way that is invisible on any drawing or
   audit.
   There is a second-order effect too. **A bypassed sensor teaches the workforce that error-proofing is
   theatre.** The next protective device you fit arrives into an environment that already believes these
   things are obstacles rather than protections, and it gets defeated faster.
   The practical consequences I draw from this are three. **Reliability before coverage** — I would
   rather fit three sensors that never lie than eight that stop the cell twice a shift, and I would say
   so in a design review even when it looks like under-specifying. **Make bypassing visible** — a bridged
   interlock should light a lamp, log an event, or physically require a key, so that the state of the
   protection is knowable. And **investigate every spurious trip as a design fault**, not as a nuisance,
   because a spurious trip is the first step of the sequence that ends in a defeated interlock. That is
   L2.2.4's argument exactly: an irritation repeated many times a shift becomes a defeated interlock, and
   the responsibility for that lies with the designer, not the operator.
2. *"Error-proofing is usually justified on scrap cost. Is that the whole case?"*
   **Answer:** No, and I think the scrap-cost framing systematically undervalues it — which matters,
   because error-proofing is the line most likely to be cut from a quotation.
   **The scrap cost is the visible part and usually the smallest.** In the worked example, a chip fault
   at ₹3,600 a part looked large only because of persistence. But there are four further costs that
   rarely appear in the calculation.
   **First, the downstream cost of an escape.** A part that leaves the plant wrong does not cost its own
   value; it costs the customer's line stoppage, the sorting exercise, the containment, the credit note
   and the corrective-action process. That multiple is routinely ten or a hundred to one, and it is the
   whole reason L3.1.4's asymmetry exists — a bad fixture makes scrap, a bad gauge ships scrap.
   **Second, the investigation cost of a sporadic fault.** The one-in-four-hundred reversal in the
   section 9 case was not expensive in scrap. It was expensive in the months of engineering time spent on
   work instructions, paint marks, retraining and meetings — all of which failed, because they were at
   the bottom of the hierarchy. **A ₹18,000 dimple replaced a running investigation.** Nobody costed the
   investigation.
   **Third, the capability it unlocks.** The cell in the L3.3.1 example could not run unattended at all
   without seat sensing. The sensing was not reducing a cost; **it was a gate on a ₹3.6 million annual
   capacity opportunity.** Framing that as scrap avoidance understates it by two orders of magnitude and
   invites it to be value-engineered away.
   **Fourth, the effect on what else you can stop doing.** Reliable error-proofing legitimately allows
   inspection to be reduced, first-off checks to be simplified, and containment to be dropped. Those are
   real recurring savings and they are usually attributed to the quality department rather than to the
   fixture.
   So when I present an error-proofing package I try to state all four, and I put the **capability gate**
   first if one exists, because "this is what makes the unattended shift possible" survives a cost review
   in a way that "this saves scrap" does not.

### 29. Summary
Error-proofing applies the hierarchy of control to loading and produces the same ranking: make the error
impossible, make it obvious, detect and stop, detect later and contain, or instruct the operator not to —
with the bottom option the weakest and the most often chosen because it is free at the design stage.
Poka-Yoke prevention is always preferred to sensing because a physical feature costs almost nothing,
never fails, needs no power or calibration, and cannot be bypassed without a hacksaw, whereas a sensor
can be bridged in the control panel in thirty seconds. The nearly-symmetrical part is the dangerous case,
since a fully symmetrical part is safe either way and a clearly asymmetrical one is never loaded wrongly;
where the part offers no usable asymmetry the fixture designer should request a non-functional feature at
part design stage, as with the 3 mm dimple that took a sporadic reversal fault to zero after work
instructions, paint marks and retraining had all failed. A Poka-Yoke feature must satisfy two opposing
inequalities — large enough to foul when wrong and small enough to clear when right — and the second is
the tight one that nobody checks, because a pin that occasionally fouls a good part gets filed down
within a week. For faults that cannot be prevented, the air seat check is the key sensor because it
detects the one condition that defeats everything else, a part sitting on a chip, and it self-cleans;
while clamp position must not be confused with clamp force, and a window switch rather than a "past a
point" switch is a free improvement that catches a clamp closed on nothing. Sensing should be selected by
ranking cost per unit of exposure removed, where exposure is rate times cost times persistence — in the
worked example the vision system cost 858% of the exposure it removed while the air seat check cost 0.84%
— and a periodic check bounds every unsensed fault simultaneously, giving a 7.50× consequence reduction
for 0.573% of capacity.

### 30. Key takeaways
- **Prevention beats detection, always** — the error-proofing hierarchy is the hierarchy of control.
- **A Poka-Yoke feature never fails, needs no power, and cannot be bypassed without a hacksaw.**
- **The nearly-symmetrical part is the dangerous one** — treat it as a red flag on sight.
- **Ask the part designer for an asymmetry**; a 3 mm dimple cost ₹18,000 and removed the largest exposure
  permanently.
- **Check both inequalities**: fouls when wrong, clears when right. The second is the tight one.
- **Positively retain Poka-Yoke pins**, and tell the operator on the drawing what a foul *means*.
- **Sense seating, not presence** — the air seat check catches the fault that defeats everything else.
- **Position is not force**; use a window switch, not "past a point".
- **Verify discrimination with a shim** of the smallest fault you need to catch.
- **Rank by cost per unit of exposure removed** — the vision system was 858%, the air seat check 0.84%.
- **Use rate × persistence, not rate** — a fault caught downstream costs far less than one that runs all
  night.
- **A periodic check bounds every unsensed fault at once** — 7.50× for 0.573% of capacity.
- **Three reliable sensors beat eight unreliable ones**; a defeated interlock is a design failure.
- **An unreliable sensor is worse than none**, because belief in protection removes the behaviours that
  its absence would have provoked.
- **Record accepted risks** — an unrecorded accepted risk looks like an omission when it costs something.

---

## LESSON L3.3.3 — THE FIXTURE SELECTION DECISION TREE

### 1. Lesson title
**L3.3.3 — The Fixture Selection Decision Tree: from part, process and volume to a fixture family**

### 2. Learning objective
By the end of this lesson you will be able to route an unfamiliar requirement through a structured
decision tree to a fixture family, state which questions must be answered before any design work begins,
identify the gates that eliminate options before economics are considered, apply the tree to fifteen
varied scenarios and justify each landing point, and recognise when the tree's answer should be
overridden.

### 3. Prerequisites
**All of Level 3**, plus L2.2.6 (the hierarchy of gates), L2.1.4 (eliminate then compare), L2.2.5 (the
three economic tests).

### 4. Why the topic matters
**This is the deliverable of Level 3.** Everything before it was vocabulary; the tree is what converts
vocabulary into a decision.

```
   THE PROBLEM THE TREE SOLVES

   A requirement arrives. Without a structured
   route you will:
     ✗ design the fixture you designed last time
     ✗ decide actuation by habit
     ✗ decide dedicated-versus-modular by
       instinct
     ✗ discover the capacity constraint after
       committing
     ✗ and never consider not building a fixture

   ┌──────────────────────────────────────────────┐
   │ CS-01's ₹1,088,800 LOSS BEGAN WITH A         │
   │ CANDIDATE SET OF EXACTLY ONE.                │
   │                                              │
   │ THE TREE'S PRIMARY VALUE IS NOT THAT IT      │
   │ FINDS THE BEST ANSWER. IT IS THAT IT MAKES   │
   │ THE ALTERNATIVES VISIBLE BEFORE A DECISION   │
   │ IS MADE.                                     │
   └──────────────────────────────────────────────┘
```

### 5. Simple explanation

```
   THE TREE IN FIVE STAGES

   STAGE 0  GATHER
     Nine questions that must be answered before
     any design work.

   STAGE 1  SHOULD A FIXTURE EXIST AT ALL?
     The question nobody asks.

   STAGE 2  PROCESS FAMILY        → Module 3.1
     What is being done to the part?

   STAGE 3  FLEXIBILITY LEVEL     → Module 3.2
     Driven by RECURRENCE.

   STAGE 4  CONFIGURATION AND ACTUATION
     Part count, axes, how force is applied.

   STAGE 5  AUTOMATION AND ERROR-PROOFING
                                  → Module 3.3
     Who loads it, and how do we know it is
     right?

   ┌──────────────────────────────────────────────┐
   │ THE ORDER IS NOT NEGOTIABLE.                 │
   │                                              │
   │ EACH STAGE'S ANSWER CONSTRAINS THE NEXT, AND │
   │ WORKING BACKWARDS — CHOOSING AN ACTUATION    │
   │ METHOD BEFORE ESTABLISHING THE PROCESS       │
   │ FAMILY, SAY — IS HOW HABIT SUBSTITUTES FOR   │
   │ ANALYSIS.                                    │
   └──────────────────────────────────────────────┘
```

### 6. Engineering explanation

**STAGE 0 — THE NINE QUESTIONS**

`[PRACTICE]` **Answer these before drawing anything. If you cannot answer one, that is the first task.**

```
   ┌─────┬────────────────────────────────────────┐
   │  1  │ WHAT PROCESS? Machining, joining,      │
   │     │ tube, verification, correction — and   │
   │     │ which sub-class for every operation?   │
   ├─────┼────────────────────────────────────────┤
   │  2  │ WHAT TOLERANCE, and to which datums?   │
   │     │ → gives the fixture allocation         │
   ├─────┼────────────────────────────────────────┤
   │  3  │ WHAT VOLUME, per year?                 │
   ├─────┼────────────────────────────────────────┤
   │  4  │ WHAT PROGRAMME LENGTH? Not the same    │
   │     │ question as volume. (L2.1.3)           │
   ├─────┼────────────────────────────────────────┤
   │  5  │ WHAT RECURRENCE? How many setups a     │
   │     │ year? (L3.2.2 — the variable that      │
   │     │ reverses the answer)                   │
   ├─────┼────────────────────────────────────────┤
   │  6  │ WHAT MACHINE, and WHAT IS ITS          │
   │     │ UTILISATION? (L2.1.5, L2.2.5)          │
   ├─────┼────────────────────────────────────────┤
   │  7  │ WHAT IS THE PART MADE OF, and IS IT    │
   │     │ RIGID? Ferrous? Sealable? Stable?      │
   ├─────┼────────────────────────────────────────┤
   │  8  │ WHAT IS THE CYCLE TIME, BY ELEMENT?    │
   │     │ (L2.2.5 — measured, not estimated)     │
   ├─────┼────────────────────────────────────────┤
   │  9  │ WHAT IS THE REAL PROBLEM? Is the brief │
   │     │ the problem, or a hypothesis? (CS-01)  │
   └─────┴────────────────────────────────────────┘

   ┌──────────────────────────────────────────────┐
   │ QUESTIONS 4, 5 AND 9 ARE THE ONES ROUTINELY  │
   │ SKIPPED, AND EACH OF THEM HAS REVERSED AN    │
   │ ANSWER SOMEWHERE IN LEVELS 2 AND 3.          │
   │                                              │
   │ 4  L2.1.3: same annual volume, opposite      │
   │    answers at 1 year and 3 years             │
   │ 5  L3.2.2: 12 setups → modular; 96 setups →  │
   │    dedicated. Same volume, same variety.     │
   │ 9  CS-01: the brief was accepted as the      │
   │    problem, and cost ₹1,088,800.             │
   └──────────────────────────────────────────────┘
```

**STAGE 1 — SHOULD A FIXTURE EXIST AT ALL?**

```
   ASK IN THIS ORDER

   1.1 IS THE PROBLEM ACTUALLY HERE?
       If scrap comes from incoming variation, a
       better fixture locates faithfully on
       features that are in the wrong place.
       → NO FIXTURE. Fix the source.

   1.2 IS THE PART DESIGN STABLE?
       → if not, a dedicated fixture will be
         obsolete before commissioning
       → MODULAR, or wait

   1.3 DOES A CHEAPER OPTION PASS THE GATES?
       Soft jaws, a standard vise, an existing
       fixture.
       → price it, even if not asked

   1.4 DOES THE BREAK-EVEN FIT INSIDE THE
       PROGRAMME?
       N_be against total programme volume.
       → if not, NO FIXTURE

   1.5 IS CAPACITY THE REAL CONSTRAINT?
       A fixture that speeds an under-utilised
       machine saves hours nobody will use.
       → the saving may be notional

   ┌──────────────────────────────────────────────┐
   │ IF STAGE 1 SAYS NO, STOP. SAY SO.            │
   │                                              │
   │ A FIXTURE DESIGNER ASKED FOR A FIXTURE HAS   │
   │ AN OBVIOUS INCENTIVE TO AGREE ONE IS NEEDED. │
   │ BEING WILLING TO SAY IT IS NOT THE ANSWER IS │
   │ WHAT DISTINGUISHES AN ENGINEER FROM A        │
   │ SUPPLIER.                                    │
   └──────────────────────────────────────────────┘
```

**STAGE 2 — PROCESS FAMILY**

```
   WHAT IS BEING DONE TO THE PART?

   MATERIAL REMOVED         → MACHINING
     then: does the part rotate?
       YES → turning/grinding rules; speed first
       NO  → force, access or distortion?
     then: VMC or HMC? (chips, gravity, pallet)

   MATERIAL ADDED OR FUSED  → JOINING
     → the fixture DIRECTS distortion; it cannot
       prevent it
     → spot welding: access governs everything

   THIN-WALLED, LONG, BENT  → TUBE
     → no flat faces; six constraints from
       non-planar features
     → closed-loop process

   NOTHING DONE, PART JUDGED → VERIFICATION
     → drawing datums; inward absorption
     → non-rigid? DO NOT CLAMP

   PART ALREADY WRONG        → CORRECTION
     → the datum may be consumed
     → needs an ENTRY GATE

   ┌──────────────────────────────────────────────┐
   │ A PART WITH MULTIPLE OPERATIONS MAY TOUCH    │
   │ SEVERAL FAMILIES. TAG EVERY OPERATION, NOT   │
   │ THE PART.                                    │
   └──────────────────────────────────────────────┘
```

**STAGE 3 — FLEXIBILITY LEVEL, DRIVEN BY RECURRENCE**

```
   THE DECISIVE QUESTION: HOW MANY SETUPS PER
   YEAR?

   ┌───────────────┬─────────────────────────────┐
   │ 1-3 setups/yr │ MODULAR                     │
   │ per part no.  │ the kit is reused; a        │
   │               │ dedicated build never pays  │
   ├───────────────┼─────────────────────────────┤
   │ 4-10          │ THE CONTESTED ZONE          │
   │               │ → calculate the break-even  │
   │               │ → zero-point changes it     │
   ├───────────────┼─────────────────────────────┤
   │ >10           │ DEDICATED                   │
   │               │ built once, used many times │
   ├───────────────┼─────────────────────────────┤
   │ A FAMILY of   │ FLEXIBLE, with              │
   │ similar parts │ INTERCHANGEABLE INSERTS —   │
   │               │ not infinite adjustment     │
   ├───────────────┼─────────────────────────────┤
   │ Unpredictable │ MODULAR; RECONFIGURABLE only│
   │ mix, high vol │ if both variety AND         │
   │               │ recurrence are high         │
   └───────────────┴─────────────────────────────┘

   ┌──────────────────────────────────────────────┐
   │ [GUIDE] THESE BANDS ARE INDICATIVE AND MUST  │
   │ BE CONFIRMED BY THE BREAK-EVEN CALCULATION   │
   │ FOR THE ACTUAL COSTS AND SETUP TIMES. THE    │
   │ L3.2.2 CASE BROKE EVEN AT 36.8 SETUPS A YEAR │
   │ ACROSS TWELVE PART NUMBERS — ABOUT THREE     │
   │ EACH.                                        │
   │                                              │
   │ AND ALWAYS ASK SEPARATELY: DOES A ZERO-POINT │
   │ INTERFACE CHANGE THIS? IT USUALLY MOVES THE  │
   │ ANSWER TOWARD DEDICATED.                     │
   └──────────────────────────────────────────────┘
```

**STAGE 4 — CONFIGURATION AND ACTUATION**

```
   4A — HOW MANY PARTS?
     Split the cycle: per-part vs fixed.
     Fixed fraction < 15 % → SINGLE PART; the
       gain is not there
     Fixed fraction > 25 % → calculate the curve;
       usually 2-4 parts
     Pallet changer available AND loading fits
       inside the cut → PALLETISE, this is the
       big prize

   4B — HOW MANY AXES?
     Faces required in one setup?
       1-2 → 3-axis
       3-4 → 4th axis or HMC tombstone
       5+  → 5-axis, and CLEARANCE NOW GOVERNS
     ALWAYS ASK: CAN AN OPERATION BE ELIMINATED?
       (worth 65.8 % of the best saving in
        L3.2.3)

   4C — HOW IS FORCE APPLIED?
     ┌──────────────────┬────────────────────────┐
     │ Force modest,    │ PNEUMATIC              │
     │ space available  │                        │
     │ Force high, or   │ HYDRAULIC              │
     │ space tight      │ (58× the force per     │
     │                  │  bore)                 │
     │ Flat, non-porous,│ VACUUM + a positive    │
     │ non-ferrous      │ stop                   │
     │ Flat, ferrous,   │ MAGNETIC + a positive  │
     │ low strain       │ stop                   │
     │ Force must be    │ ELECTRO-MECHANICAL     │
     │ measured         │                        │
     │ Low volume,      │ MANUAL                 │
     │ few clamps       │                        │
     └──────────────────┴────────────────────────┘
     THEN CHECK: does loss of power leave a SAFE
     state?
     AND: FIT A POSITIVE STOP — it usually
     collapses the force requirement.
```

**STAGE 5 — AUTOMATION AND ERROR-PROOFING**

```
   5A — WHO LOADS IT?
     Volume modest, part varies → OPERATOR
     Volume high, judgement still needed
       → SEMI-AUTOMATIC (underrated)
     Volume high, part consistent, presentation
       solvable → ROBOT or AUTOMATIC
     PROCESS UNSTABLE → DO NOT AUTOMATE. Fix it.

   5B — WHAT CAN BE MADE IMPOSSIBLE?
     Enumerate every wrong loading.
     Prevent what you can — a pin, a block, an
     asymmetry.
     Ask the part designer for a feature if
     needed.

   5C — WHAT MUST BE SENSED?
     For each remaining fault:
       exposure = rate × cost × PERSISTENCE
     Rank by cost per unit of exposure removed.
     Sense SEATING, not presence.
     Add a PERIODIC CHECK to bound the rest.

   ┌──────────────────────────────────────────────┐
   │ AND FINALLY, STAGE 6 — RE-RUN THE ECONOMICS. │
   │                                              │
   │ THE CONFIGURATION CHOSEN HAS A COST. CHECK   │
   │ PAYBACK, BREAK-EVEN AND CAPACITY AGAIN, AND  │
   │ IF IT FAILS, THE CONCEPT CHANGES — YOU DO    │
   │ NOT SHAVE RIGIDITY TO AFFORD A CLAMP.        │
   │ (L2.2.6, TIER 4)                             │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Decision tree** | A structured sequence of questions leading to a classification |
| **Gate** | A question whose answer eliminates options rather than scoring them |
| **Landing point** | The fixture family a requirement arrives at |
| **Contested zone** | A region where the tree cannot decide without calculation |
| **Override** | A justified departure from the tree's answer |
| **Stage 0** | The information-gathering step preceding any decision |
| **Recurrence** | Setups per year per part number — the flexibility driver |
| **Fixed fraction** | The share of cycle time not scaling with part count |
| **Persistence** | Parts made before a fault is detected |

### 8. Principle

> **THE TREE'S PRIMARY VALUE IS MAKING THE ALTERNATIVES VISIBLE**, not finding the optimum. CS-01's loss
> began with a candidate set of one.
> **ANSWER THE NINE QUESTIONS BEFORE DRAWING ANYTHING.** If one cannot be answered, that is the first
> task.
> **STAGE 1 COMES FIRST: SHOULD A FIXTURE EXIST AT ALL?** If the answer is no, say so.
> **THE ORDER OF STAGES IS NOT NEGOTIABLE** — each constrains the next, and working backwards is how
> habit substitutes for analysis.
> **RECURRENCE DRIVES FLEXIBILITY**; the fixed fraction drives part count; persistence drives sensing.
> **GATES ELIMINATE BEFORE ECONOMICS COMPARE.**
> **RE-RUN THE ECONOMICS AT THE END.** If the concept fails on cost, the concept changes.
> **THE TREE IS A CHECKLIST, NOT AN ORACLE.** Override it when you can say why.

### 9. Industrial application

**THE FIFTEEN SCENARIOS**

`[EX-ASSUMED]` Each scenario is routed through the tree. **Read the justification, not the answer** — the
answers are unremarkable; the reasoning is the lesson.

```
  ════════════════════════════════════════════════
  S1  Steel bracket · 45,000/yr · 5-year programme
      · one part number · VMC at 91 % · milling
      and drilling · ±0.1 mm
  ════════════════════════════════════════════════
  STAGE 1  fixture justified: high volume, long
           programme, machine near capacity so
           u ≈ 1
  STAGE 2  machining, non-rotating, force-governed
  STAGE 3  recurrence very high (continuous) →
           DEDICATED
  STAGE 4  split the cycle; check multi-part.
           Machine at 91 % → look hard at
           eliminating a setup
  STAGE 5  semi-automatic; powered clamping
  LANDING  Dedicated, hydraulic or pneumatic,
           multi-part if the fixed fraction
           justifies it, semi-automatic
  ┌────────────────────────────────────────────┐
  │ THE UNREMARKABLE CASE. WORTH INCLUDING     │
  │ BECAUSE IT IS THE ONE PEOPLE GENERALISE    │
  │ FROM — AND EVERY OTHER SCENARIO DEPARTS    │
  │ FROM IT SOMEWHERE.                         │
  └────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  S2  Aluminium plate 500×350×10 · face milling
      · 12,000/yr · flat, non-porous, no through
      holes · cosmetic top face
  ════════════════════════════════════════════════
  STAGE 4C VACUUM — flat, non-ferrous, and
           crucially NOTHING PROJECTS ABOVE THE
           PART, so the cutter crosses the whole
           face uninterrupted
  GATE     side load resisted by FRICTION ONLY →
           FIT POSITIVE STOPS
  GATE     vacuum fails INVISIBLY → vacuum switch
           inhibiting the cycle + reservoir
  LANDING  Vacuum chuck, positive stops, switch
           and reservoir, operator-loaded
  ┌────────────────────────────────────────────┐
  │ THE VALUE OF VACUUM HERE IS NOT COST OR    │
  │ FORCE. IT IS THE UNOBSTRUCTED SURFACE.     │
  │ THAT BENEFIT NEVER APPEARS IN A PAYBACK    │
  │ CALCULATION AND OFTEN DECIDES.             │
  └────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  S3  Welded steel frame · 3,000/yr · 8 fillet
      welds · diagonal ±1.0 mm · MIG
  ════════════════════════════════════════════════
  STAGE 2  JOINING — the fixture cannot prevent
           distortion, only direct it
  KEY      measure 20 assemblies; separate MEAN
           from SPREAD before designing anything
  DESIGN   pre-set the measured bias; balance the
           weld sequence; replaceable locators;
           allow for the FIXTURE's own thermal
           growth
  LANDING  Dedicated welding fixture, manual
           toggle clamps, pre-set and annotated
           as deliberate
  ┌────────────────────────────────────────────┐
  │ NOTE THAT ACTUATION BARELY MATTERS HERE.   │
  │ MANUAL CLAMPS ARE CORRECT: FEW CLAMPS,     │
  │ LONG CYCLE, AND FAIL-IN-PLACE IS A VIRTUE  │
  │ ON A FIXTURE HELD FOR MINUTES.             │
  └────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  S4  Bent tube exhaust · 60,000/yr · 6 bends ·
      end-point Ø1.5 mm · CHECKING required
  ════════════════════════════════════════════════
  STAGE 2  TUBE, and separately VERIFICATION
  TUBE     locate on a PIERCED HOLE if one
           exists; request one if not. Locate
           away from bends.
  CHECKING NON-RIGID → the tube must DROP IN
           under its own weight. NO CLAMPING.
           State the free-state condition.
  PROCESS  closed loop: bend, measure, correct —
           the fixture does not fix springback
  LANDING  Separate bending, welding and checking
           fixtures; checking fixture uses
           drop-in Go/No-Go cradles
  ┌────────────────────────────────────────────┐
  │ THE TRAP IS TRYING TO USE ONE FIXTURE FOR  │
  │ WELDING AND CHECKING. THE WELDING FIXTURE  │
  │ MUST CLAMP; THE CHECKING FIXTURE MUST NOT. │
  │ THEY CANNOT BE THE SAME TOOL.              │
  └────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  S5  Cast iron housing · 40 part numbers · each
      run 1-2× per year · batches of 10-25 ·
      jobbing shop
  ════════════════════════════════════════════════
  STAGE 3  RECURRENCE 1-2 → MODULAR, decisively
  WARNING  a modular kit is a DISCIPLINE:
           dismantle, shadow board, no
           modification, periodic audit
  STACK    worst-case the interfaces; minimise
           the number between base and locator
  LANDING  Modular fixturing, manual clamps,
           single part
  ┌────────────────────────────────────────────┐
  │ AND SEPARATELY: MEASURE THE ASSEMBLED      │
  │ SETUP, NOT THE COMPONENTS. THE REBUILD IS  │
  │ WHAT THE NEXT BATCH IS MADE ON.            │
  └────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  S6  Same 40 part numbers — but each now runs
      8× per year
  ════════════════════════════════════════════════
  STAGE 3  RECURRENCE 8 → the answer INVERTS
  CALC     L3.2.2: break-even at 36.8 setups/yr;
           320 setups here
  LANDING  DEDICATED fixtures on a ZERO-POINT
           interface — built once, proven once,
           trusted thereafter
  ┌────────────────────────────────────────────┐
  │ S5 AND S6 ARE THE SAME PARTS, THE SAME     │
  │ VARIETY AND (IF BATCHES SHRINK) POSSIBLY   │
  │ THE SAME ANNUAL VOLUME.                    │
  │                                            │
  │ ONLY THE RECURRENCE DIFFERS, AND IT        │
  │ REVERSES THE ANSWER COMPLETELY. THAT IS    │
  │ WHY QUESTION 5 IS ON THE STAGE 0 LIST.     │
  └────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  S7  Hardened steel plate · surface grinding to
      0.005 mm flatness · ferrous · 8,000/yr
  ════════════════════════════════════════════════
  STAGE 2  machining — but GRINDING, so STRAIN
           and HEAT govern, not force
  4C       MAGNETIC — distributed holding, almost
           no local strain
  GATES    ferrous ✓ · thick enough ✓ (check
           `[MFR]`) · air gap controlled · side
           load by friction only → POSITIVE STOP
  AFTER    DEMAGNETISE, or the part collects
           swarf for life
  LANDING  Magnetic chuck, positive stop,
           thermal stabilisation, demagnetiser
           in the process
  ┌────────────────────────────────────────────┐
  │ CLAMPING HARD ENOUGH TO RESIST 40 N OF     │
  │ GRINDING FORCE WOULD DISTORT THE PART FAR  │
  │ BEYOND 0.005 mm. LOW-STRAIN HOLDING IS NOT │
  │ A REFINEMENT — IT IS THE WHOLE PROBLEM.    │
  └────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  S8  Prototype gearbox casing · 3 off · design
      still changing · full machining
  ════════════════════════════════════════════════
  STAGE 1  1.2 — PART DESIGN NOT STABLE
  LANDING  MODULAR. A dedicated fixture would be
           obsolete before commissioning.
  BONUS    the modular build PROVES the concept
           before a dedicated fixture is
           committed later
  ┌────────────────────────────────────────────┐
  │ STAGE 1 ANSWERED THIS WITHOUT REACHING     │
  │ STAGE 2. SOME REQUIREMENTS ARE SETTLED     │
  │ BEFORE THE TECHNICAL QUESTIONS BEGIN.      │
  └────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  S9  Customer reports 6 % scrap on bore
      position; asks for a better fixture
  ════════════════════════════════════════════════
  STAGE 0  Question 9 — IS THE BRIEF THE PROBLEM?
  ACTION   measure 30 scrapped and 30 good parts
  FINDING  as-cast locating bosses displaced up
           to 1.2 mm; the fixture repeats to
           0.015 mm
  LANDING  NO NEW FIXTURE. The fixture is
           locating faithfully on features that
           are in the wrong place.
  RECOMMEND fix the casting; interim = add a
           pre-machining datum operation
  ┌────────────────────────────────────────────┐
  │ THE COMMERCIALLY EASY ANSWER WAS TO QUOTE. │
  │ IT WOULD HAVE BEEN BUILT, WORKED           │
  │ PERFECTLY, AND CHANGED NOTHING.            │
  └────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  S10 Aerospace bracket · 5 faces · 0.05 mm
      across faces · 9,000/yr · 5-axis available
  ════════════════════════════════════════════════
  STAGE 4B 5 faces in one setup → 5-AXIS, and
           CLEARANCE NOW GOVERNS
  TOLERANCE 3 separate setups would stack; one
           setup removes the stack entirely —
           THIS IS THE REAL ARGUMENT, not cycle
           time
  DESIGN   slim pedestal, clamp from below, or a
           DOVETAIL on sacrificial stock
  DOVETAIL raise at PART DESIGN STAGE — it
           changes the blank
  LANDING  5-axis trunnion fixture, dovetail
           grip, single part, hydraulic
  ┌────────────────────────────────────────────┐
  │ THE TOLERANCE ARGUMENT BEATS THE           │
  │ PRODUCTIVITY ARGUMENT HERE. ELIMINATING    │
  │ TWO SETUPS REMOVES TWO STACK CONTRIBUTIONS │
  │ THAT NO FIXTURE COULD OTHERWISE RECOVER.   │
  └────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  S11 Die-cast housing · robot-loaded lights-out
      · 118,000/yr · variable flash on two faces
  ════════════════════════════════════════════════
  STAGE 5A "PROCESS STABLE?" — VARIABLE FLASH IS
           EXACTLY THE VARIATION A HUMAN ABSORBS
           AND A ROBOT CANNOT
  GATE     either de-flash before the cell, or
           locate on features unaffected by
           flash, or DO NOT AUTOMATE
  IF PROCEEDING
           lead-ins by calculation; air seat
           checks; chip blow-off; periodic
           probing; exposure calculation to
           justify sensing
  LANDING  Robot cell CONDITIONAL on resolving
           flash; sensing package non-negotiable
  ┌────────────────────────────────────────────┐
  │ AUTOMATION MAKES A GOOD PROCESS FASTER AND │
  │ A BAD PROCESS FASTER AT BEING BAD.         │
  └────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  S12 Machined bracket · Go/No-Go check of a
      hole pattern · Ø0.30 M to |A|B|C| ·
      14,000/yr
  ════════════════════════════════════════════════
  STAGE 2  VERIFICATION
  RULES    locate on the DRAWING DATUMS in the
           stated precedence · NEVER locate on
           the feature being measured · absorb
           tolerance INWARD
  GATE     measurement consumption vs the
           applicable requirement — this GATES
           the decision regardless of payback
  LANDING  Checking fixture with A/B/C datum
           simulators, fixed-size Go pins at MMC,
           inward absorption, calibration
           interval mandatory
  ┌────────────────────────────────────────────┐
  │ THE MMC MODIFIER DECIDED THE HARDWARE COST │
  │ — FIXED SIMULATORS RATHER THAN CENTRING    │
  │ ONES. THE MOST DIRECT GD&T-TO-COST LINK IN │
  │ THE SUBJECT.                               │
  └────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  S13 40 non-conforming parts · bore 0.15 mm out
      · customer will accept an oversize repair
  ════════════════════════════════════════════════
  STAGE 2  CORRECTION
  FIRST    IS A DATUM BEING RECUT? If yes, the
           WHOLE PART needs re-qualification and
           the economics change entirely
  DATUM    re-use the original Setup 1 face and
           bore — still intact
  ESSENTIAL an ENTRY GATE: which parts can this
           fixture actually recover?
  ECONOMIC rework vs scrap INCLUDING P_fail;
           break-even was 26.1 parts against 40
  LANDING  Simple correction fixture on the
           original datums, with an entry gate;
           rework justified AT THIS BATCH SIZE
           ONLY
  ┌────────────────────────────────────────────┐
  │ REWORK IS A CALCULATION, NOT A POLICY.     │
  │ AT 20 PARTS THE ANSWER WOULD HAVE BEEN     │
  │ SCRAP.                                     │
  └────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  S14 Steel part family · 6 variants differing
      only in length · 30,000/yr total ·
      recurrence high
  ════════════════════════════════════════════════
  STAGE 3  A FAMILY → FLEXIBLE
  CRITICAL 6 members → 6 INDEXED POSITIONS, not
           a slotted infinitely adjustable stop
  BETTER   interchangeable inserts on one precise
           interface — each insert is dedicated
  PRINCIPLE flexibility may be bought with
           accuracy but NEVER with repeatability
  LANDING  One fixture, interchangeable
           length-setting inserts, pin-indexed
  ┌────────────────────────────────────────────┐
  │ THE INSTINCT IS A SLOTTED ADJUSTABLE STOP  │
  │ BECAUSE IT LOOKS MOST FLEXIBLE. IT IS THE  │
  │ LEAST REPEATABLE OPTION AVAILABLE.         │
  └────────────────────────────────────────────┘

  ════════════════════════════════════════════════
  S15 Housing · 34,000/yr · currently needs
      3,971 h on a 3,600 h VMC at 89 % across all
      work
  ════════════════════════════════════════════════
  STAGE 0  Question 6 — CAPACITY. The part cannot
           be made on this machine as stated.
  IMPLICATION the requirement is not "make it
           faster", it is "make it fit"
  RESULT   a 4-part fixture saved ₹738,180/yr and
           still left the part at 98.9 % of the
           machine — A REAL SAVING THAT DOES NOT
           SOLVE THE PROBLEM
  LANDING  HMC tombstone, palletised, 20 parts —
           moves the work to a machine with spare
           capacity and releases the VMC
  ┌────────────────────────────────────────────┐
  │ HERE THE CAPACITY CHECK ARGUED FOR         │
  │ SPENDING MORE, NOT LESS. IT CUTS BOTH      │
  │ WAYS, AND IN BOTH DIRECTIONS IT IS THE     │
  │ QUESTION THAT REFRAMES THE PROBLEM.        │
  └────────────────────────────────────────────┘
```

**WHAT THE FIFTEEN SCENARIOS SHOW**

| Pattern | Scenarios |
|---|---|
| **Stage 1 settled it before any technical work** | S8, S9 |
| **Recurrence reversed the answer** | S5 vs S6 |
| **A gate eliminated an option regardless of economics** | S2, S7, S11, S12 |
| **The capacity check reframed the problem** | S15 |
| **Tolerance, not productivity, drove the configuration** | S10 |
| **Two fixtures were needed where one was assumed** | S4 |
| **The economics were batch-size dependent** | S13 |
| **The instinctive answer was the least repeatable** | S14 |

### 10. Design rules
- **R1** — Answer **all nine Stage 0 questions** before any design work; an unanswerable one is the first
  task.
- **R2** — Run **Stage 1 first**: should a fixture exist at all?
- **R3** — **Investigate the brief** before accepting it as the problem.
- **R4** — Tag **every operation** with its process family, not the part.
- **R5** — Establish **recurrence**, not just volume and variety.
- **R6** — Always ask whether a **zero-point interface** changes the flexibility answer.
- **R7** — **Split the cycle** into per-part and fixed before choosing a part count.
- **R8** — Always ask whether an **operation can be eliminated** — it is usually worth more than
  everything else.
- **R9** — **Fit a positive stop** before sizing any actuation.
- **R10** — Check that **loss of power leaves a safe state**.
- **R11** — Consider **semi-automatic** before full automation.
- **R12** — **Prevent before sensing**; rank sensing by cost per unit of exposure removed.
- **R13** — Add a **periodic check** to bound unsensed faults.
- **R14** — **Re-run the economics** on the chosen concept; if it fails, the concept changes.
- **R15** — **Record the route taken** through the tree, including the options eliminated and why.
- **R16** — **Override the tree when you can say why**, and write the reason down.

### 11. Rules of thumb
- **The tree's value is making alternatives visible, not finding the optimum.**
- **Answer the nine questions first; an unanswerable one is the first task.**
- **Stage 1 sometimes settles it before any technical work.**
- **Recurrence drives flexibility; the fixed fraction drives part count; persistence drives sensing.**
- **Gates eliminate; economics compare. Never the reverse.**
- **Ask whether an operation can be eliminated — before optimising the fixture.**
- **Fit a positive stop before sizing anything.**
- **Prevent before sensing.**
- **Re-run the economics at the end.**
- **Record the route, including what you rejected.**
- **The tree is a checklist, not an oracle.**

### 12. Formulae

**The tree's decisive calculations, collected**
```
STAGE 1  break-even against the cheapest passing
         option
  N_be = ΔC / (benefit per part)
  compare against PROGRAMME volume

STAGE 1  capacity
  Hours = N × t_cycle/60
  u = 1 if the freed hours are used, 0 if not

STAGE 2  fixture allocation
  T_fixture = k × T_part
    k ≈ 0.10-0.20 fixture, 0.05-0.10 gauge
    [GUIDE] conventions, not standards

STAGE 3  flexibility break-even
  N_be = C_dedicated /
         (C_setup_mod − C_setup_ded)

STAGE 4  fixed fraction and the multi-part curve
  f = t_fixed / t_cycle
  t_per_part = t_perpart_each + t_fixed/n

STAGE 4  actuation
  F = p × A   (the CLAMPING stroke's area)
  Fit a positive stop first — it typically
  collapses F by an order of magnitude

STAGE 5  sensing
  exposure = rate × cost × persistence
  rank by C_sensor / exposure_removed

STAGE 6  re-run
  payback · break-even · capacity
```

**The one-page summary the tree should produce** `[PRACTICE]`
```
  PART ─────────────── process family ─────
  TOLERANCE ────────── allocation ─────────
  VOLUME / PROGRAMME / RECURRENCE ─────────
  MACHINE / UTILISATION ───────────────────
  ─────────────────────────────────────────
  LANDING POINT
    flexibility level ·  configuration ·
    actuation ·  automation ·  error-proofing
  ─────────────────────────────────────────
  OPTIONS ELIMINATED, AND WHY
  ─────────────────────────────────────────
  ECONOMICS: payback · break-even · capacity
  ─────────────────────────────────────────
  ASSUMPTIONS THIS DEPENDS ON
```

| Variable | Meaning | Unit |
|---|---|---|
| f | Fixed fraction of the cycle | — |
| u | Fraction of freed capacity used | — |
| k | Tolerance allocation fraction | — |
| N_be | Break-even quantity | parts or setups |

### 13. Worked numerical example

**Problem:** An unfamiliar requirement arrives. Route it through the complete tree, showing every gate,
every calculation and every option eliminated, and produce the one-page summary.

```
GIVEN — THE REQUIREMENT AS RECEIVED         [PROJ]
  "We need a fixture for this cast iron pump
   body. Milling and boring, four operations.
   About 20,000 a year. Budget around ₹400,000.
   Needed in ten weeks."

  PART                                        [PROJ]
    Cast iron, EN-GJL-250, 6.9 kg
    215 × 160 × 130 mm
    OP10 face and rough mill top   6.4 min
    OP20 finish mill top           2.1 min
    OP30 bore Ø68H7 × 95 deep      4.8 min
    OP40 drill and tap 8 × M10     3.7 min
    Bore ⟂ 0.04 mm to the top face
    Bore position Ø0.15 M to |A|B|C|
    Tapped holes Ø0.4 M

  WHAT WAS NOT IN THE BRIEF — OBTAINED BY ASKING
                                              [PROJ]
    Programme length          = 6 years, firm
    Recurrence                = continuous
                                (one dedicated
                                 machine)
    Machine                   = VMC 3,400 h/yr,
                                currently 46 %
                                utilised
    An HMC exists             = 3,400 h/yr,
                                currently 88 %
    Rate                      = ₹1,850/h
    Part value at this stage  = ₹2,750
    Current method            = 4 separate setups
                                in a vise, 2.6 min
                                setup each
    Current scrap             = 1.9 %, mostly on
                                bore perpendicularity
    Part design               = stable, in
                                production 3 years

REQUIRED:
  Route through all six stages, showing every
  gate and calculation, and produce the summary.

ASSUMPTION:
  1. The additional data was OBTAINED BY ASKING,
     not assumed. Four of the nine Stage 0
     questions were unanswered in the brief.
     [PROJ]
  2. Cutting times are from the existing process.
     [PROJ]
  3. Scrap attribution to perpendicularity is
     from inspection records. [PROJ]
  4. Costs are budgetary. [EX-ASSUMED]
  5. The HMC's 12 % spare is 408 h/yr. [PROJ]

STAGE 0 — THE NINE QUESTIONS

  1 PROCESS?     machining; force (OP10),
                 distortion (OP20), access
                 (OP30), torque (OP40)
  2 TOLERANCE?   bore ⟂ 0.04 governs.
                 Allocation at 15 % = 0.006 mm
                 [GUIDE]
  3 VOLUME?      20,000/yr
  4 PROGRAMME?   6 years → 120,000 parts
                 ◄ NOT IN THE BRIEF
  5 RECURRENCE?  continuous → dedicated territory
                 ◄ NOT IN THE BRIEF
  6 MACHINE?     VMC at 46 % — SPARE CAPACITY
                 ◄ NOT IN THE BRIEF, AND
                   DECISIVE
  7 MATERIAL?    cast iron: ferrous but POROUS —
                 vacuum unlikely to seal;
                 magnetic possible
  8 CYCLE?       17.0 min cutting + 4 × 2.6 min
                 setup = 27.4 min/part
                 ◄ THE SETUPS ARE 38 % OF THE
                   TOTAL
  9 REAL PROBLEM? scrap is on BORE
                 PERPENDICULARITY, across
                 setups. THE BRIEF SAID "we need
                 a fixture"; the DATA says
                 "we have a setup-to-setup
                 problem"
                 ◄ NOT IN THE BRIEF

  ┌────────────────────────────────────────────┐
  │ FOUR OF THE NINE WERE UNANSWERED, AND       │
  │ QUESTIONS 6, 8 AND 9 EACH CHANGE THE        │
  │ ANSWER.                                     │
  │                                             │
  │ THIS IS NORMAL. THE BRIEF IS ALMOST NEVER   │
  │ SUFFICIENT, AND THE MISSING ITEMS ARE       │
  │ ALMOST ALWAYS THE SAME ONES.                │
  └────────────────────────────────────────────┘

STAGE 1 — SHOULD A FIXTURE EXIST?

  1.1 IS THE PROBLEM HERE?
      Scrap is on bore perpendicularity to the
      top face — a relationship established
      ACROSS TWO SETUPS (OP20 and OP30).
      → YES, THE PROBLEM IS HERE, and it is
        specifically a SETUP problem, not a
        holding problem.
      → This reframes the requirement: the goal
        is FEWER SETUPS, not a better vise.

  1.2 PART DESIGN STABLE?  3 years in
      production → YES

  1.3 CHEAPER OPTION?
      Soft jaws would improve holding but NOT
      the setup-to-setup relationship.
      → does not address the governing problem

  1.4 BREAK-EVEN INSIDE THE PROGRAMME?
      120,000 parts over 6 years — ample for
      almost any fixture. → YES

  1.5 IS CAPACITY THE CONSTRAINT?
      VMC at 46 % — NO.
      Current load from this part:
        20,000 × 27.4/60 = 9,133 h/yr
      Against 3,400 h available.

      ┌──────────────────────────────────────────┐
      │ THAT IS 2.69× THE MACHINE'S ENTIRE       │
      │ CAPACITY.                                │
      │                                          │
      │ THE PART CANNOT BE MADE ON ONE VMC. IT   │
      │ IS ALREADY SPREAD ACROSS MACHINES OR     │
      │ SUBCONTRACTED — WHICH THE BRIEF DID NOT  │
      │ MENTION AND THE CUSTOMER MAY NOT HAVE    │
      │ CONNECTED TO THE SCRAP PROBLEM.          │
      │                                          │
      │ THE STATED "46 % UTILISED" REFERS TO ONE │
      │ MACHINE'S SHARE. THE REQUIREMENT IS      │
      │ LARGER THAN THE BRIEF IMPLIED.           │
      └──────────────────────────────────────────┘

  STAGE 1 VERDICT: A fixture is justified, but
  THE REQUIREMENT HAS BEEN RESTATED — from
  "a fixture for four operations" to "reduce the
  setup count and the machine-hours".

STAGE 2 — PROCESS FAMILY

  Machining, non-rotating.
  OP10 force · OP20 distortion · OP30 access ·
  OP40 torque.
  OP10 and OP20 CONFLICT (L1.3.5) → separate in
  time, or in setups.
  Cast iron: porous → VACUUM ELIMINATED (Q7).

STAGE 3 — FLEXIBILITY

  Recurrence continuous, programme 6 years,
  one part number.
  → DEDICATED, unambiguously.
  Zero-point? Not needed — the machine runs this
  part continuously.

STAGE 4 — CONFIGURATION AND ACTUATION

  4A / 4B — THE CENTRAL QUESTION: HOW MANY
  SETUPS?

  CURRENT   4 setups × 2.6 min = 10.4 min/part
            of setup, plus 17.0 min cutting
            = 27.4 min

  OPTION A — one VMC fixture, still 4 setups
    Setup falls to, say, 1.1 min each
                                  [EX-ASSUMED]
    = 4.4 min + 17.0 = 21.4 min
    Saving 6.0 min/part
    Hours = 20,000 × 21.4/60 = 7,133 h
    STILL 2.10× ONE MACHINE.
    And the bore-to-face relationship STILL
    crosses two setups → THE SCRAP PROBLEM
    REMAINS.

  OPTION B — HMC tombstone, 2 setups
    Faces accessible by indexing.
    OP10/20/30 in one setup; OP40 in a second.
    Setup 2 × 1.4 min = 2.8 min
                                  [EX-ASSUMED]
    = 2.8 + 17.0 = 19.8 min
    Hours = 20,000 × 19.8/60 = 6,600 h
    BORE AND FACE NOW IN ONE SETUP → the 0.04
    perpendicularity is a MACHINE move, not a
    stack.

  OPTION C — HMC tombstone, 1 setup
    All four operations, 4 faces indexed.
    Setup 1.4 min
    = 1.4 + 17.0 = 18.4 min
    Hours = 20,000 × 18.4/60 = 6,133 h
    ALL RELATIONSHIPS IN ONE SETUP.

  ┌────────────────────────────────────────────┐
  │ BUT ALL THREE EXCEED ONE MACHINE'S 3,400 h.│
  │                                            │
  │ A  7,133 h → 2.10 machines                 │
  │ B  6,600 h → 1.94 machines                 │
  │ C  6,133 h → 1.80 machines                 │
  │                                            │
  │ THE HMC HAS ONLY 408 SPARE HOURS. THIS     │
  │ PART NEEDS SIX THOUSAND.                   │
  │                                            │
  │ SO THE HONEST ANSWER INVOLVES ADDITIONAL   │
  │ MACHINE CAPACITY WHATEVER THE FIXTURE      │
  │ DOES — AND THAT IS A CONVERSATION THE      │
  │ CUSTOMER HAS NOT HAD.                      │
  └────────────────────────────────────────────┘

  MULTI-PART?
    Split the cycle for Option C:
      per-part: cutting 17.0 min = 1,020 s
      fixed per load: tool changes and
        approaches, say 95 s     [EX-ASSUMED]
      fixed fraction = 95/(1,020 + 84 + 95)
                     = 95/1,199 = 7.92 %

  ┌────────────────────────────────────────────┐
  │ FIXED FRACTION UNDER 8 %.                  │
  │                                            │
  │ MULTI-PART FIXTURING CANNOT SAVE MORE THAN │
  │ 7.92 % HERE, AND THE LOADING PENALTY WOULD │
  │ EAT A FIFTH OF THAT.                       │
  │                                            │
  │ SO: DO NOT BUILD A MULTI-PART FIXTURE. THE │
  │ CYCLE IS DOMINATED BY CUTTING, AND THE     │
  │ GAIN IS NOT THERE.                         │
  │                                            │
  │ THAT IS A USEFUL "NO" AND IT TOOK ONE      │
  │ CALCULATION.                               │
  └────────────────────────────────────────────┘

  PALLETISATION?
    Loading 84 s against 1,020 s of cutting =
    8.2 %. Fits easily.
    → YES, palletise. It costs little on an HMC
      that already has a pallet changer, and it
      removes the loading time from the cycle.

  4C — ACTUATION
    Vacuum ELIMINATED (porous cast iron).
    Magnetic — possible, but this is heavy
      roughing with 6.4 min of stock removal;
      side load is large and magnetic resists
      only by friction. → not appropriate for
      OP10.
    Force required: roughing cast iron, heavy.
    FIT POSITIVE STOPS FIRST — this collapses
      the requirement (Level 0).
    Space on a tombstone face is limited, and
      services must reach a rotating column.
    → HYDRAULIC, spring-applied and
      pressure-released, with an on-board
      accumulator or docking coupler.

STAGE 5 — AUTOMATION AND ERROR-PROOFING

  5A  Volume 20,000, cast part with variable
      surfaces, cycle 18.4 min — LONG.
      Loading is 7.6 % of the cycle.
      → automation saves almost nothing.
      → OPERATOR-LOADED at the pallet station,
        SEMI-AUTOMATIC clamping.

  ┌────────────────────────────────────────────┐
  │ A LONG CYCLE IS THE STRONGEST ARGUMENT     │
  │ AGAINST AUTOMATING THE LOADING. AT 18.4    │
  │ MINUTES PER PART, AN OPERATOR LOADS THREE  │
  │ PALLETS AN HOUR AND HAS TIME FOR OTHER     │
  │ WORK.                                      │
  └────────────────────────────────────────────┘

  5B  POKA-YOKE
      Cast pump body — is it near-symmetrical?
      ASSUME two mounting bosses differ by 8 mm
      in spacing.        [EX-ASSUMED]
      → asymmetric locating pins. Prevention
        available and free.

  5C  SENSING
      Operator present → persistence is 1-2
      parts, so exposure is low.
      Still fit: seating confirmation on the
      primary pads (cast surfaces trap chips),
      and clamp pressure confirmation.
      No vision, no load cells — the exposure
      does not justify them.

STAGE 6 — RE-RUN THE ECONOMICS

  OPTION C vs CURRENT
    Time saving = 27.4 − 18.4 = 9.0 min/part
    Hours saved = 20,000 × 9.0/60 = 3,000 h/yr
    Value = 3,000 × 1,850 = ₹5,550,000/yr

    SCRAP: bore perpendicularity now in one
    setup. Assume scrap falls from 1.9 % to
    0.4 %.               [EX-ASSUMED]
      Saving = 0.015 × 20,000 × 2,750
             = ₹825,000/yr

    TOTAL BENEFIT = ₹6,375,000/yr

  COST
    Tombstone + 4 fixtures + hydraulics
                        = ₹1,150,000
                              [EX-ASSUMED]
    AGAINST A STATED BUDGET OF ₹400,000.

  ┌────────────────────────────────────────────┐
  │ THE SOLUTION COSTS 2.88× THE STATED BUDGET │
  │ AND RETURNS ₹6.375 MILLION A YEAR.         │
  │                                            │
  │ Payback = 1,150,000/(6,375,000/12)         │
  │         = 1,150,000/531,250                │
  │         = 2.16 months                      │
  │                                            │
  │ THE BUDGET WAS NOT AN ENGINEERING          │
  │ CONSTRAINT. IT WAS AN ESTIMATE MADE BEFORE │
  │ ANYONE HAD DONE THIS ARITHMETIC, AND IT    │
  │ WOULD HAVE BOUGHT OPTION A — WHICH SAVES   │
  │ REAL MONEY AND SOLVES NEITHER THE SCRAP    │
  │ PROBLEM NOR THE CAPACITY PROBLEM.          │
  └────────────────────────────────────────────┘

  AND THE CAPACITY CONVERSATION
    Even at 6,133 h, this part needs 1.80
    machines. The customer must either add
    capacity, subcontract, or accept the
    current split — and the fixture decision
    should be made knowing that.

RESULT — THE ONE-PAGE SUMMARY:
  ┌────────────────────────────────────────────────┐
  │ PART        cast iron pump body, 6.9 kg        │
  │ PROCESS     machining: force/distortion/       │
  │             access/torque                      │
  │ TOLERANCE   bore ⟂ 0.04 governs;               │
  │             allocation 0.006 mm                │
  │ VOLUME      20,000/yr · PROGRAMME 6 yr ·       │
  │             RECURRENCE continuous              │
  │ MACHINES    VMC 46 % · HMC 88 %, 408 h spare   │
  │ ──────────────────────────────────────────────│
  │ LANDING POINT                                  │
  │   DEDICATED · HMC TOMBSTONE, 4 FACES ·         │
  │   SINGLE PART PER FACE · PALLETISED ·          │
  │   HYDRAULIC SPRING-APPLIED ·                   │
  │   OPERATOR-LOADED, SEMI-AUTOMATIC ·            │
  │   ASYMMETRIC POKA-YOKE PINS · SEAT SENSING     │
  │ ──────────────────────────────────────────────│
  │ ELIMINATED                                     │
  │   vacuum — cast iron is porous                 │
  │   magnetic — friction only, heavy roughing     │
  │   modular — recurrence continuous              │
  │   multi-part — fixed fraction only 7.92 %      │
  │   robot loading — 18.4 min cycle; loading is   │
  │     7.6 %                                      │
  │   4-setup VMC fixture — leaves the scrap AND   │
  │     capacity problems unsolved                 │
  │ ──────────────────────────────────────────────│
  │ ECONOMICS                                      │
  │   benefit ₹6,375,000/yr · cost ₹1,150,000      │
  │   payback 2.16 months · programme 72 months    │
  │   BUDGET STATED ₹400,000 — 2.88× EXCEEDED,     │
  │   AND THE BUDGET WAS NOT THE CONSTRAINT        │
  │ ──────────────────────────────────────────────│
  │ DEPENDS ON                                     │
  │   scrap falling 1.9 % → 0.4 % with one setup   │
  │   the customer resolving a 1.80-machine        │
  │     capacity requirement                       │
  │   HMC pallet and rotary limits accepting the   │
  │     tombstone mass  [MFR]                      │
  └────────────────────────────────────────────────┘

SAFETY FACTOR:
  Payback margin 2.16 months against 72 months =
  33.3×. The technical margins — allocation
  0.006 mm against a 0.04 mm requirement, and
  perpendicularity now achieved as a machine move
  rather than a setup stack — are the more
  important ones and are addressed in the detailed
  design.

PASS/FAIL:
  ✓ PASS — Stage 1: a fixture is justified, with
    the requirement restated
  ✗ ELIMINATED — vacuum, magnetic, modular,
    multi-part, robot loading, 4-setup VMC
  ✓ PASS — Option C on tolerance, productivity and
    economics
  ⚠ UNRESOLVED — capacity: 1.80 machines required
    regardless of the fixture. THE CUSTOMER MUST
    ADDRESS THIS.

ENGINEERING CONCLUSION:
  1. FOUR OF THE NINE STAGE 0 QUESTIONS WERE
     UNANSWERED IN THE BRIEF, AND THREE OF THEM
     CHANGED THE ANSWER.
     Programme length, recurrence, machine
     utilisation and the real problem were all
     absent. Utilisation revealed that the part
     needs 2.69 machines' worth of hours; the
     cycle split revealed that setups were 38 % of
     the total time; and the scrap data revealed
     that the problem was setup-to-setup
     perpendicularity rather than holding. THE
     BRIEF ASKED FOR A FIXTURE FOR FOUR
     OPERATIONS. THE ANSWER WAS TO STOP DOING FOUR
     OPERATIONS.

  2. THE REQUIREMENT WAS RESTATED AT STAGE 1, AND
     EVERYTHING FOLLOWED FROM THAT.
     Once the goal became "reduce the setup count"
     rather than "hold the part better", the HMC
     tombstone was almost inevitable — and a
     conventional four-setup VMC fixture, which is
     what ₹400,000 would have bought, saves real
     money while solving neither the scrap problem
     nor the capacity problem. A REAL SAVING THAT
     DOES NOT SOLVE THE PROBLEM IS THE MOST
     DANGEROUS KIND OF PROPOSAL, BECAUSE IT LOOKS
     LIKE SUCCESS.

  3. ONE CALCULATION PRODUCED A USEFUL "NO".
     The fixed fraction was 7.92 %, so multi-part
     fixturing could not save more than that
     before the loading penalty. That took a
     single division and it removed a whole branch
     of the design space — along with the four
     stations, the extra complexity and the
     concentrated risk that would have come with
     it. THE TREE IS AS VALUABLE FOR WHAT IT
     ELIMINATES AS FOR WHAT IT SELECTS.

  4. THE BUDGET WAS NOT AN ENGINEERING CONSTRAINT.
     ₹400,000 stated, ₹1,150,000 required, 2.16
     months payback. The budget was an estimate
     made before anyone had done the arithmetic,
     and treating it as a constraint would have
     produced Option A. I WOULD PRESENT THE
     ARITHMETIC RATHER THAN THE PRICE, and let the
     customer decide whether a 2.16-month payback
     changes their budget — because it usually
     does, and because a supplier who quietly
     designs down to a number is not adding the
     value they were engaged for.

  5. AND I WOULD RAISE THE CAPACITY PROBLEM EVEN
     THOUGH IT IS NOT MINE.
     Even the best fixture leaves this part needing
     1.80 machines. That is outside the fixture
     scope entirely, and the customer may not have
     connected their scrap rate, their setup count
     and their machine loading. RAISING IT COSTS
     NOTHING AND IT IS THE DIFFERENCE BETWEEN
     SUPPLYING A FIXTURE AND SOLVING A PROBLEM.

SENSITIVITY NOTE:
  Ranked by influence:
    1. THE SCRAP REDUCTION FROM SINGLE-SETUP
       WORKING — ₹825,000/yr assumed on a fall
       from 1.9 % to 0.4 %. It is the least
       certain benefit and should be validated on
       a trial batch before the full commitment.
    2. THE CAPACITY RESOLUTION — 1.80 machines
       required. If the customer cannot resolve
       it, the whole project's context changes and
       an SPM or a subcontract route may compete.
    3. SETUP TIMES ASSUMED FOR EACH OPTION — 1.1
       and 1.4 minutes are estimates. They drive
       the comparison between options but not the
       overall conclusion, since cutting dominates.
    4. TOMBSTONE MASS AGAINST THE HMC's PALLET AND
       ROTARY LIMITS `[MFR]` — a hard constraint
       that must be confirmed before design, not
       after.
    5. THE FIXED FRACTION OF 7.92 % — even at
       double, multi-part fixturing would remain
       marginal. THE "NO" IS ROBUST.
```

### 14. Engineering assumptions
- The additional data was **obtained by asking**, not assumed — four of the nine Stage 0 questions were
  unanswered in the brief `[PROJ]`.
- Cutting times are from the existing process `[PROJ]`.
- Scrap attribution to perpendicularity is from **inspection records** `[PROJ]`.
- Setup times for each option are estimates driving the comparison, not the conclusion `[EX-ASSUMED]`.
- Costs budgetary `[EX-ASSUMED]`.
- **The scrap reduction from single-setup working is the least certain benefit** and should be validated
  on a trial batch `[EX-ASSUMED]`.

### 15. Diagram

```
     THE FIXTURE SELECTION DECISION TREE
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  ┌──────────────────────────────────────────────┐
  │ STAGE 0 — THE NINE QUESTIONS                 │
  │  1 process (every operation)                 │
  │  2 tolerance and datums                      │
  │  3 volume                                    │
  │  4 PROGRAMME LENGTH        ◄ often missing   │
  │  5 RECURRENCE              ◄ often missing   │
  │  6 MACHINE AND UTILISATION ◄ often missing   │
  │  7 material · rigid · ferrous · sealable     │
  │  8 cycle time BY ELEMENT                     │
  │  9 THE REAL PROBLEM        ◄ often missing   │
  └────────────────────┬─────────────────────────┘
                       ▼
  ┌──────────────────────────────────────────────┐
  │ STAGE 1 — SHOULD A FIXTURE EXIST?            │
  │  is the problem here? · design stable? ·     │
  │  cheaper option? · break-even inside the     │
  │  programme? · is capacity the constraint?    │
  │                                              │
  │  ══► IF NO: STOP. SAY SO.                    │
  └────────────────────┬─────────────────────────┘
                       ▼
  ┌──────────────────────────────────────────────┐
  │ STAGE 2 — PROCESS FAMILY      (Module 3.1)   │
  │  machining · joining · tube · verification · │
  │  correction                                  │
  │  TAG EVERY OPERATION, NOT THE PART           │
  └────────────────────┬─────────────────────────┘
                       ▼
  ┌──────────────────────────────────────────────┐
  │ STAGE 3 — FLEXIBILITY         (Module 3.2)   │
  │  driven by RECURRENCE                        │
  │  1-3/yr modular · 4-10 contested · >10       │
  │  dedicated · family → inserts                │
  │  ALWAYS ASK: does zero-point change this?    │
  └────────────────────┬─────────────────────────┘
                       ▼
  ┌──────────────────────────────────────────────┐
  │ STAGE 4 — CONFIGURATION AND ACTUATION        │
  │  4A part count ← THE FIXED FRACTION          │
  │  4B axes ← CAN AN OPERATION BE ELIMINATED?   │
  │  4C actuation ← FIT A POSITIVE STOP FIRST    │
  └────────────────────┬─────────────────────────┘
                       ▼
  ┌──────────────────────────────────────────────┐
  │ STAGE 5 — AUTOMATION AND ERROR-PROOFING      │
  │  5A who loads it (semi-auto is underrated)   │
  │  5B what can be made IMPOSSIBLE              │
  │  5C what must be SENSED ← rate × PERSISTENCE │
  └────────────────────┬─────────────────────────┘
                       ▼
  ┌──────────────────────────────────────────────┐
  │ STAGE 6 — RE-RUN THE ECONOMICS               │
  │  payback · break-even · capacity             │
  │  IF IT FAILS, THE CONCEPT CHANGES            │
  └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE THREE DRIVERS, ONE PER STAGE

   STAGE 3  RECURRENCE        setups per year
              1-3 ──── modular
              >10 ──── dedicated
              L3.2.2: 12 setups vs 96 setups
              REVERSED THE ANSWER

   STAGE 4  FIXED FRACTION    shareable cycle time
              <15 % ── single part
              >25 % ── calculate the curve
              L3.3.3 worked case: 7.92 % → a
              USEFUL "NO" IN ONE DIVISION

   STAGE 5  PERSISTENCE       parts before
                              detection
              caught next op ── low exposure
              runs all night ── high exposure
              L3.3.2: 5.0× more frequent,
              29× cheaper

  ──────────────────────────────────────────────────────────

  WHAT THE FIFTEEN SCENARIOS DEMONSTRATED

   S8, S9    STAGE 1 SETTLED IT before any
             technical work
   S5 vs S6  RECURRENCE REVERSED the answer on
             identical parts
   S2,7,11,12 A GATE eliminated an option
             regardless of economics
   S15       THE CAPACITY CHECK REFRAMED the
             problem
   S10       TOLERANCE, not productivity, drove
             the configuration
   S4        TWO FIXTURES were needed where one
             was assumed
   S13       THE ECONOMICS WERE BATCH-SIZE
             DEPENDENT
   S14       THE INSTINCTIVE ANSWER was the least
             repeatable

  ──────────────────────────────────────────────────────────

  THE WORKED CASE — WHAT THE TREE FOUND

   THE BRIEF SAID
     "a fixture for four operations,
      about ₹400,000, ten weeks"

   THE TREE FOUND
     ✗ 4 of 9 questions unanswered
     ✗ setups are 38 % of the total time
     ✗ scrap is a SETUP-TO-SETUP problem, not a
       holding problem
     ✗ the part needs 2.69 MACHINES' WORTH OF
       HOURS
     ✗ the budget would buy a fixture that saves
       real money and solves NEITHER problem

   THE ANSWER
     not "a better fixture for four operations"
     but "STOP DOING FOUR OPERATIONS"

   ┌──────────────────────────────────────────────┐
   │ cost ₹1,150,000 — 2.88× THE STATED BUDGET    │
   │ benefit ₹6,375,000/yr                        │
   │ payback 2.16 MONTHS against 72               │
   │                                              │
   │ THE BUDGET WAS NOT AN ENGINEERING CONSTRAINT.│
   │ IT WAS AN ESTIMATE MADE BEFORE ANYONE DID    │
   │ THIS ARITHMETIC.                             │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  AND THE THING THE TREE IS REALLY FOR

   ┌──────────────────────────────────────────────┐
   │ CS-01's ₹1,088,800 LOSS BEGAN WITH A         │
   │ CANDIDATE SET OF EXACTLY ONE.                │
   │                                              │
   │ THE TREE'S PRIMARY VALUE IS NOT FINDING THE  │
   │ OPTIMUM. IT IS MAKING THE ALTERNATIVES       │
   │ VISIBLE BEFORE A DECISION IS MADE — AND      │
   │ RECORDING WHAT WAS REJECTED, AND WHY.        │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example
The tree does not produce a drawing; it produces the **design basis** that the drawing set is built from.

```
DESIGN BASIS DB-2400 — SHEET 1
FOR TRAINING ONLY — NOT FOR MANUFACTURE

1  REQUIREMENT AS RECEIVED, AND AS RESTATED
     Received: "fixture for four operations"
     Restated: "reduce setup count; bore
     perpendicularity is established across
     setups"

2  STAGE 0 DATA
     Volume · programme · recurrence ·
     machine and utilisation · cycle by element ·
     material properties
     ITEMS OBTAINED BY ENQUIRY ARE MARKED [E]

3  LANDING POINT
     Dedicated · HMC tombstone · palletised ·
     hydraulic spring-applied · semi-automatic ·
     Poka-Yoke pins · seat sensing

4  OPTIONS ELIMINATED AND THE GATE EACH FAILED

5  ECONOMICS
     Benefit · cost · payback · capacity position

6  ASSUMPTIONS THIS DESIGN DEPENDS ON, AND WHO
   MUST CONFIRM EACH

7  ACCEPTED RESIDUAL RISKS
```

`[PRACTICE]` **Section 4 — options eliminated and the gate each failed — is the part that earns its keep
eighteen months later**, when somebody asks why the fixture is not modular, or why it does not hold four
parts. **Without it the answer is "I think we considered that"**, and the design gets re-litigated by
people with less information than the original decision had.

### 17. CAD workflow
1. **Do not open CAD until Stage 3 is complete.** Everything before that is arithmetic and enquiry
2. Model the **eliminated options only far enough to demonstrate the gate failure**, if a record is
   needed
3. Build the chosen concept at **layout level** first and re-run Stage 6 before detailing
4. Detail **only after the economics have been re-confirmed** on the layout
5. Keep the **design basis document alongside the model** as a controlled item
6. Record **which Stage 0 answers came from enquiry** rather than from the brief
7. Re-run Stage 6 whenever a design change alters cost or cycle time

`[PRACTICE]` Step 1 is the discipline that saves the most time and is hardest to keep. **CAD is
enjoyable and arithmetic is not**, so the temptation is to start modelling and let the analysis catch
up — at which point the sunk effort argues for the concept, exactly as L2.2.6 warned.

### 18. GD&T application

```
  THE TREE'S SECOND QUESTION IS A GD&T QUESTION,
  AND IT PROPAGATES THROUGH EVERY LATER STAGE.

  STANDARD: state which — ASME Y14.5-2018 or
  ISO GPS. DO NOT MIX.

  ┌────────────────────────────────────────────┐
  │ STAGE 0 Q2 ASKS: WHAT TOLERANCE, AND TO    │
  │ WHICH DATUMS?                              │
  │                                            │
  │ THAT SINGLE ANSWER DETERMINES:             │
  │   the fixture allocation (Stage 1)         │
  │   whether modular can meet it (Stage 3)    │
  │   how many setups are permissible          │
  │     (Stage 4)                              │
  │   whether a gauge needs fixed or centring  │
  │     simulators (Stage 2, verification)     │
  └────────────────────────────────────────────┘

  THE WORKED CASE SHOWS THE PROPAGATION

    Bore ⟂ 0.04 mm to the top face
      → the relationship crosses TWO operations
      → in four setups it is a STACK
      → in one setup it is a MACHINE MOVE
      → THEREFORE the tolerance drove the
        configuration decision, not the
        productivity

  ┌────────────────────────────────────────────┐
  │ THIS IS THE MOST IMPORTANT LINK IN THE     │
  │ WHOLE TREE AND IT IS EASY TO MISS: A       │
  │ RELATIONSHIP BETWEEN TWO FEATURES MADE IN  │
  │ DIFFERENT SETUPS IS A TOLERANCE STACK THAT │
  │ NO FIXTURE CAN REMOVE.                     │
  │                                            │
  │ THE ONLY WAY TO REMOVE IT IS TO PUT BOTH   │
  │ FEATURES IN THE SAME SETUP — WHICH IS A    │
  │ CONFIGURATION DECISION, MADE AT STAGE 4,   │
  │ DRIVEN BY AN ANSWER GIVEN AT STAGE 0.      │
  └────────────────────────────────────────────┘

  Stack-up methods at Level 12; datum systems at
  Level 10.
```

### 19. Manufacturing method
The tree's output constrains manufacture in ways worth stating explicitly `[PRACTICE]`:

| Landing point element | Manufacturing consequence |
|---|---|
| **Dedicated** | Conventional route: machine soft, harden locators, grind |
| **Modular** | Nothing to manufacture — but a kit discipline to maintain |
| **Tombstone** | Stress-relieve; machine all stations **in one setup** |
| **Palletised** | Interface to the machine builder's specification `[MFR]`, qualified after installation |
| **Hydraulic** | Drilled and plugged manifolds; deburr cross-drillings |
| **Poka-Yoke** | Positively retained pins |
| **Sensing** | Ports deburred; sensors shielded and replaceable |

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Design basis complete | Document review | All nine Stage 0 questions answered |
| Enquired items identified | Document review | Marked and sourced |
| Eliminated options recorded | Document review | Each with its failed gate |
| Economics re-run on the final concept | Calculation review | Payback, break-even, capacity |
| Assumptions listed with owners | Document review | Each has a named confirmer |
| Residual risks recorded | Risk register | Complete |
| Landing point matches the design | Design review | Consistent |

`[PRACTICE]` **"Each assumption has a named confirmer" is the single most useful line in a design basis.**
An assumption owned by nobody is an assumption that never gets checked, and the ones that matter — the
scrap reduction, the capacity resolution, the pallet mass limit — are all outside the fixture designer's
control.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Starting at Stage 4 | Actuation chosen by habit |
| 2 | Skipping **Stage 1** | The fixture that should not exist |
| 3 | Accepting the **brief as the problem** | CS-01 |
| 4 | Not asking for the **missing Stage 0 answers** | Four of nine, in the worked case |
| 5 | Using **volume** where **recurrence** is needed | S5 and S6 inverted |
| 6 | Tagging the **part** rather than every **operation** | Conflicting requirements missed |
| 7 | Not splitting the cycle before choosing **part count** | Multi-part built where 7.92% was available |
| 8 | Not asking whether an **operation can be eliminated** | The largest saving missed |
| 9 | Sizing actuation before **fitting a positive stop** | An order of magnitude overspecified |
| 10 | Reaching for **sensing** before prevention | Expensive and bypassable |
| 11 | Treating a stated **budget** as an engineering constraint | The wrong concept, delivered on price |
| 12 | Not **re-running the economics** on the final concept | The concept fails Tier 4 unnoticed |
| 13 | Not **recording eliminated options** | The design is re-litigated later |
| 14 | Opening **CAD before Stage 3** | Sunk effort argues for the concept |
| 15 | Treating the tree as an **oracle** | Judgement abandoned |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Design keeps changing late | Stage 0 incomplete | Review the nine questions | Gather and restart | Stage 0 discipline |
| Fixture solves nothing | Brief accepted as the problem | Measure the actual fault | Restate the requirement | Question 9 |
| Concept fails on cost at the end | Stage 6 skipped | Re-run the economics | Change the concept | Re-run before detailing |
| "Why isn't it modular?" asked repeatedly | Eliminations not recorded | — | Produce the design basis | Design rule R15 |
| Actuation over-specified | No positive stop assumed | Recalculate with a stop | Re-size | Design rule R9 |
| Multi-part fixture underperforms | Fixed fraction never calculated | Split the cycle | — | Design rule R7 |
| Automation fails to pay back | Sensing costed as an extra | Review the cost model | — | Cost sensing with the project |
| Capacity problem discovered late | Question 6 unanswered | Calculate hours vs available | Escalate | Stage 0 |

### 23. Design checklist
- [ ] Are **all nine Stage 0 questions** answered, with the source of each recorded?
- [ ] Has **Stage 1** been run — should a fixture exist at all?
- [ ] Has the **brief been investigated** rather than accepted?
- [ ] Is **every operation** tagged with its process family and governing consideration?
- [ ] Is **recurrence** established, and has zero-point been considered?
- [ ] Has the **cycle been split** into per-part and fixed?
- [ ] Has **eliminating an operation** been considered?
- [ ] Has a **positive stop** been assumed before sizing actuation?
- [ ] Does **loss of power leave a safe state**?
- [ ] Has **semi-automatic** been considered before full automation?
- [ ] Has **prevention** been exhausted before sensing?
- [ ] Is sensing ranked by **cost per unit of exposure removed**, using persistence?
- [ ] Have the **economics been re-run** on the final concept?
- [ ] Are **eliminated options and their failed gates** recorded?
- [ ] Does every **assumption have a named confirmer**?
- [ ] If the tree was **overridden**, is the reason written down?

### 24. Beginner exercise
**E3.3.3-B** — For each brief, state which Stage 0 questions are unanswered and what you would ask:
(a) "We need a fixture for this bracket, about 5,000 a year."
(b) "The parts keep coming out wrong, we think the vise is worn."
(c) "Can you quote a fixture for these six similar parts?"
(d) "We want to run this lights-out."
(e) "The budget is ₹250,000 and we need it in eight weeks."
Then, for each, state which stage of the tree you expect to be decisive and why.

### 25. Intermediate exercise
**E3.3.3-I** — Route the following through the complete tree, showing every stage: A steel gear housing,
4.2 kg, requires facing, boring Ø55H7, and drilling and tapping 6 × M8. Bore perpendicularity to the
faced surface is 0.05 mm. Volume 14,000/yr on a 4-year programme, one part number, run continuously. The
available VMC has 3,600 h/yr at 58% utilisation; no HMC is available. Current method is two setups in
soft jaws at 3.1 min setup each, with 9.4 min of cutting; scrap is 2.4%, mostly on perpendicularity. The
rate is ₹1,800/h and the part is worth ₹2,300 at this stage.
(a) Answer all nine Stage 0 questions, marking any you would have to ask for.
(b) Run Stage 1 and state whether a fixture is justified.
(c) Determine the process families and governing considerations.
(d) Determine the flexibility level.
(e) Split the cycle, calculate the fixed fraction, and decide the part count.
(f) Determine whether the two setups can be reduced to one, and what that is worth.
(g) Select the actuation and automation level.
(h) Re-run the economics and produce the one-page summary.

### 26. Advanced exercise
**E3.3.3-A** — You are asked to review a fixture strategy for a contract machining business taking on a
new customer: 18 part numbers, aluminium and cast iron, volumes from 800 to 62,000 per year, recurrence
from 1 to 24 setups per year, tolerances from ±0.5 mm to Ø0.05 M, on a 3-year contract with an option to
extend. Available: two VMCs at 64% and 71%, one HMC with a pallet changer at 45%, and a 5-axis machine at
83%. Capital available is ₹6,000,000. `[EX-ASSUMED]` State all assumptions.
(i) Segment the 18 part numbers by the tree's decisive variables and justify your segmentation.
(ii) For each segment, route through the tree to a landing point.
(iii) Identify which parts should not have dedicated fixtures and why.
(iv) Determine whether a zero-point system should be bought, and for which machines.
(v) Determine whether a modular kit should be bought, and size it approximately.
(vi) Perform the capacity check across all four machines and identify any constraint.
(vii) Allocate the ₹6,000,000 across your recommendations, justifying the order of priority.
(viii) Explain how the 3-year contract with an option to extend affects every decision, and what you
would do differently for a firm 6-year contract.
(ix) Identify which of the twenty-four auto-fail items this situation most invites.
(x) Present the strategy as a two-page summary with the five assumptions it most depends on.

### 27. Interview questions
1. *"Walk me through how you would approach a fixture requirement you have never seen before."*
   **Answer:** I would start by gathering nine things before doing any design: the process for every
   operation, the tolerance and its datums, the volume, the programme length, the recurrence — how many
   setups a year — the machine and its utilisation, the material and whether the part is rigid and
   sealable and ferrous, the cycle time measured by element, and finally what the real problem is,
   because the brief is a hypothesis rather than a fact. In my experience three or four of those are
   routinely missing from a brief, and they are usually the same ones: programme length, recurrence,
   utilisation and the real problem. Then before any technical work I would ask whether a fixture should
   exist at all — is the problem actually here, is the part design stable, does a cheaper option pass,
   does the break-even fit inside the programme, and is capacity the real constraint. After that it runs
   in order: process family, then flexibility driven by recurrence, then configuration and actuation,
   then automation and error-proofing, and then re-run the economics on whatever concept came out. The
   order matters because each answer constrains the next, and working backwards — picking an actuation
   method first, say — is how habit substitutes for analysis. And I would record what I eliminated and
   why, because that is what gets asked about eighteen months later.
2. *"What is the most common mistake you see in fixture selection?"*
   **Answer:** Designing the fixture you designed last time, which is really a vocabulary problem rather
   than a skill problem — if you do not know the candidate set, you cannot compare. The specific version
   I see most is deciding dedicated-versus-modular on volume and variety when the deciding variable is
   recurrence. Twelve part numbers run once a year each should be modular; the same twelve run eight
   times each should be dedicated, and in a case I worked through the modular option had the lowest
   capital by a wide margin and cost about one and a quarter million rupees more over five years, all of
   it in setup time. Same parts, same variety, possibly the same annual volume. Only the recurrence
   differed. The second most common is not asking whether an operation can be eliminated before
   optimising the fixture — in one analysis, removing a single setup was worth sixty-six per cent of the
   best option's total saving, far more than any multi-part or actuation decision. And underneath both is
   the same thing: reaching for the design before finishing the arithmetic. Splitting a cycle into
   per-part and fixed terms takes one division and it once told me that no multi-part fixture could ever
   save more than eight per cent, which removed a whole branch of the design space before I drew
   anything.

### 28. Expert questions
1. *"When should the tree's answer be overridden?"*
   **Answer:** Reasonably often, and the fact that it should be is why I would call it a checklist rather
   than an algorithm. There are four situations where I would override it, and one where I would not.
   **First, when a constraint exists that the tree does not model.** Lead time is the commonest. The tree
   might land on a dedicated tombstone with a fourteen-week build when the customer needs parts in three
   weeks. **The correct answer is then a modular fixture now and the tombstone later** — and that is not
   a failure of the tree, it is a constraint the tree does not carry. Similarly: an existing fixture that
   nearly fits, a machine that is about to be replaced, a customer standard that mandates a particular
   interface.
   **Second, when the organisation cannot sustain the answer.** The tree might recommend modular
   fixturing on recurrence grounds, but a shop with no storage discipline, no shadow board and a history
   of components going missing will get worse results from a modular kit than from dedicated fixtures.
   **The right answer for a business is not always the right answer in the abstract**, and pretending
   otherwise produces recommendations that are technically correct and practically ignored.
   **Third, when the numbers are too close to trust.** If dedicated and modular come out within ten or
   fifteen per cent over the programme, the calculation is not distinguishing them — the input
   uncertainties are larger than the difference. **Then I would decide on the qualitative factors:
   lead time, flexibility to future changes, who maintains it, what happens if volumes shift.** Pretending
   a 6% difference in a five-year projection is decisive is false precision.
   **Fourth, when there is strategic value the tree does not price.** Buying a zero-point system for one
   job may be justified by the ten jobs after it. Building the first modular setup teaches a shop
   something. **Optionality has value**, as L2.1.5 argued, and the tree evaluates one requirement at a
   time.
   **The one thing I would not override is a gate.** If a concept fails on determinacy, on safety, on the
   tolerance allocation or on capacity, that is not a close call to be resolved by judgement — it is an
   elimination. **The whole point of separating gates from comparisons is that gates are not subject to
   the kind of override I have just described**, and the moment they become negotiable the structure
   stops protecting anything. Overriding a preference is engineering judgement. Overriding a gate is
   just deciding you would rather it were true.
   And in every case: **write the override and its reason into the design basis.** An unexplained
   departure from a structured method looks like an error to whoever finds it next.
2. *"You have spent Level 3 building a classification. Classification is often criticised as academic.
   What does it actually buy?"*
   **Answer:** The criticism is fair against classification for its own sake, and I would concede that a
   learner who can recite five process families and four flexibility levels has gained very little. **The
   value is not in the names. It is in three specific things the names make possible.**
   **First, it makes the candidate set visible.** This is the one I would put first because it is the one
   with a price attached. CS-01 lost over a million rupees, and the failure began with a candidate set of
   exactly one — a fixture was requested, a fixture was quoted, and nothing else was ever priced. **You
   cannot eliminate on gates or compare on economics if you only have one option.** A classification is,
   at minimum, a list of things to check you have considered.
   **Second, it transfers reasoning between unfamiliar situations.** When I recognise that a tube
   checking fixture and a welded assembly checking fixture are both verification problems on non-rigid
   parts, I immediately know that free state must be stated, that clamping would invalidate the
   measurement, and that the drawing must distinguish locators from checking features — without
   rediscovering any of it. **The classification is a compression of experience**, and it lets somebody
   with three years of it reason about a situation they have not personally met.
   **Third, and least obviously, it makes the transitions visible.** Most of the expensive mistakes in
   Level 3 were transitions rather than states: a VMC fixture remounted on an HMC without a support
   ledge; a stationary-part clamping calculation reused on a rotating fixture; a manual process automated
   without replacing the operator's judgement. **A classification with clear boundaries makes crossing a
   boundary a noticeable event.** Without it, the operations look the same and only the load case has
   changed.
   What I would concede is that **classification is necessary and nowhere near sufficient.** It gets you
   to a landing point; it does not design the fixture. Every number that mattered in this level — the
   58× pressure ratio, the 7.92% fixed fraction, the 36.8-setup break-even, the ₹798,000 exposure — came
   from a calculation, not from a category. **The taxonomy tells you which calculations to do.** That is
   a real service and it is a modest one, and I would rather describe it accurately than oversell it.

### 29. Summary
The decision tree is the deliverable of Level 3, converting vocabulary into a route from requirement to
fixture family. It runs in six stages whose order is not negotiable, because each answer constrains the
next and working backwards is how habit substitutes for analysis. Stage 0 asks nine questions that must
be answered before any design work — process, tolerance and datums, volume, programme length, recurrence,
machine and utilisation, material properties, cycle time by element, and the real problem — of which
programme length, recurrence, utilisation and the real problem are the ones routinely missing from a
brief, and each has reversed an answer somewhere in Levels 2 and 3. Stage 1 asks whether a fixture should
exist at all, and sometimes settles the matter before any technical work begins. Stage 2 assigns process
families to every operation rather than to the part. Stage 3 selects the flexibility level, driven by
recurrence rather than by volume or variety. Stage 4 sets configuration and actuation, driven by the
fixed fraction of the cycle and by whether an operation can be eliminated, and always assuming a positive
stop before sizing force. Stage 5 addresses automation and error-proofing, preferring prevention to
sensing and ranking sensing by cost per unit of exposure removed, where exposure depends on persistence.
Stage 6 re-runs the economics, and if the concept fails on cost the concept changes. Fifteen scenarios
demonstrated the patterns: Stage 1 settling two cases outright, recurrence inverting the answer between
two otherwise identical situations, gates eliminating options regardless of economics, capacity reframing
a problem, tolerance rather than productivity driving a configuration, and the instinctive answer proving
the least repeatable. In the worked example, four of the nine Stage 0 questions were unanswered, the
brief's request for a four-operation fixture became a recommendation to stop doing four operations, one
division produced a useful "no" on multi-part fixturing, and the stated budget turned out not to be an
engineering constraint at all against a 2.16-month payback.

### 30. Key takeaways
- **The tree's primary value is making alternatives visible** — CS-01's loss began with a candidate set
  of one.
- **Answer the nine Stage 0 questions before drawing anything**; an unanswerable one is the first task.
- **Programme length, recurrence, utilisation and the real problem** are the four routinely missing, and
  each has reversed an answer.
- **Stage 1 comes first**: should a fixture exist at all? Sometimes it settles the matter outright.
- **The order of stages is not negotiable** — working backwards is how habit substitutes for analysis.
- **Recurrence drives flexibility; the fixed fraction drives part count; persistence drives sensing.**
- **Tag every operation, not the part.**
- **Always ask whether an operation can be eliminated** — worth 65.8% of the best saving in one case.
- **Fit a positive stop before sizing actuation.**
- **Prevent before sensing**, and rank sensing by cost per unit of exposure removed.
- **Re-run the economics at the end** — if the concept fails on cost, the concept changes.
- **A stated budget is not necessarily an engineering constraint** — 2.88× exceeded, 2.16-month payback.
- **Record the route, including what was eliminated and which gate it failed.**
- **Override preferences with reasons; never override a gate.**
- **The classification tells you which calculations to do.** Every number that mattered came from a
  calculation, not a category.

---

## MODULE 3.3 — CLOSING

### Governing principles — Module 3.3

Continuing from 205 at the end of Module 3.2:

| # | Principle |
|---|---|
| **206** | Automation moves judgement into the hardware; it does not remove the need for it. |
| **207** | The operator was doing more than lifting, and none of it was in any specification, so nobody misses it when it goes. |
| **208** | The cost of automation is the sensing and error-proofing the robot makes necessary, not the robot. |
| **209** | Semi-automatic loading captures most of the consistency benefit while retaining the operator's novelty detection. |
| **210** | A robot needs a clear approach vector, an oriented part, calculated lead-ins, compliance, seating confirmation and a fault recovery plan. |
| **211** | Robot accuracy is not robot repeatability; know which one applies before sizing a lead-in. |
| **212** | Stack placement errors worst case — a jam is a hard failure with no averaging. |
| **213** | A lead-in guides and the land beyond it locates; the chamfer must be concentric with the land. |
| **214** | "Part present" and "clamp closed" are not sufficient sensing — a part seated on a chip satisfies both. |
| **215** | Lights-out running multiplies every undetected fault by the parts made before somebody looks. |
| **216** | Do not automate an unstable process; automation makes a bad process faster at being bad. |
| **217** | Prevention beats detection always; a Poka-Yoke feature never fails, needs no power and cannot be bypassed without a hacksaw. |
| **218** | The nearly-symmetrical part is the dangerous case; fully symmetrical and clearly asymmetrical are both safe. |
| **219** | Where a part offers no usable asymmetry, request a non-functional feature at part design stage. |
| **220** | A Poka-Yoke feature must satisfy two opposing inequalities, and the clearance one is the tight one nobody checks. |
| **221** | Sense seating rather than presence; the air seat check catches the fault that defeats everything else. |
| **222** | Clamp position is not clamp force; use a window switch, not "past a point". |
| **223** | Rank sensing by cost per unit of exposure removed, where exposure is rate × cost × persistence. |
| **224** | A periodic check bounds the consequence of every unsensed fault simultaneously, including the ones nobody listed. |
| **225** | An unreliable error-proofing device is worse than none, because belief in protection removes the vigilance its absence would have provoked. |
| **226** | Record accepted residual risks; an unrecorded accepted risk looks like an omission when it costs something. |
| **227** | The decision tree's primary value is making alternatives visible, not finding the optimum. |
| **228** | Answer the nine Stage 0 questions before any design work; an unanswerable one is the first task. |
| **229** | Programme length, recurrence, utilisation and the real problem are the four routinely missing from a brief. |
| **230** | Ask whether a fixture should exist at all before asking what kind it should be. |
| **231** | Tag every operation with its process family, not the part. |
| **232** | Always ask whether an operation can be eliminated before optimising the fixture. |
| **233** | Re-run the economics on the final concept; if it fails on cost, the concept changes. |
| **234** | A stated budget is not necessarily an engineering constraint. |
| **235** | Record the route taken, including the options eliminated and the gate each failed. |
| **236** | Override a preference with a written reason; never override a gate. |
| **237** | A classification tells you which calculations to do; every number that matters comes from a calculation, not a category. |

**Principles 206–237 belong to Module 3.3. The next block begins at 238.**

### Numerical results established in Module 3.3

| Result | Value | Lesson |
|---|---|---|
| Lead-in error sum, taught points | 0.34 mm → **0.6 mm with a 50% margin** | L3.3.1 |
| Lead-in, off-line programmed | 0.64 mm → 1.0 mm — **1.67× more** | L3.3.1 |
| Robot repeatability vs accuracy | ±0.05 vs ±0.35 mm — **a factor of 7** | L3.3.1 |
| Parts per unattended shift | 190 | L3.3.1 |
| **Unattended exposure per shift** | **₹798,000** | L3.3.1 |
| Sensing package vs one bad shift | ₹310,000 = **38.8%** | L3.3.1 |
| Sensing as a share of total capital | **7.2%, protecting the other 93%** | L3.3.1 |
| Payback, third shift empty | 74.6 months = 6.2 yr — **fails a 5-year programme** | L3.3.1 |
| Payback, third shift half filled | **20.5 months** — a factor of 3.64 | L3.3.1 |
| Poka-Yoke interference required / provided | 0.69 / 3.00 mm = **4.35×** | L3.3.2 |
| Poka-Yoke clearance required / provided | 0.43 / 0.50 mm = **only 1.16× — too tight** | L3.3.2 |
| Cost per exposure removed: air seat | ₹64,000 / ₹7,600,000 = **0.84%** | L3.3.2 |
| Cost per exposure removed: load cell | 8.33% | L3.3.2 |
| **Cost per exposure removed: vision** | **858% — the best technology, the worst investment** | L3.3.2 |
| F3 vs F4: frequency and cost | **5.0× more frequent, 29× less costly** | L3.3.2 |
| Periodic check capacity cost | 0.573% = ₹10,458/yr | L3.3.2 |
| **Periodic check consequence reduction** | **7.50× on every fault, including unlisted ones** | L3.3.2 |
| Error-proofing package | ₹217,000; payback on one fault alone **2.28 months** | L3.3.2 |
| Tree case: Stage 0 questions unanswered | **4 of 9** | L3.3.3 |
| Setups as a share of total time | 10.4 of 27.4 min = **38%** | L3.3.3 |
| Machine hours required vs available | 9,133 vs 3,400 = **2.69× one machine** | L3.3.3 |
| Fixed fraction | **7.92% — a useful "no" in one division** | L3.3.3 |
| Best option: time saved | 9.0 min/part = 3,000 h = ₹5,550,000/yr | L3.3.3 |
| Scrap saving from single-setup working | ₹825,000/yr | L3.3.3 |
| Cost vs stated budget | ₹1,150,000 vs ₹400,000 = **2.88×** | L3.3.3 |
| **Payback** | **2.16 months against a 72-month programme** | L3.3.3 |

### Self-check — Module 3.3

1. What was the operator doing that no specification records?
2. Why is the cost of automation not the robot?
3. Why is semi-automatic underrated?
4. Name the six things a robot-loaded fixture requires.
5. What is the difference between robot accuracy and repeatability, and when does each apply?
6. Why stack lead-in errors worst case?
7. Why must a chamfer be concentric with the land beyond it?
8. Why are "part present" and "clamp closed" insufficient?
9. How does an air seat check work, and what can it not detect?
10. Calculate an unattended exposure and explain what it justifies.
11. State the error-proofing hierarchy and why it matches the hierarchy of control.
12. Why is a Poka-Yoke feature preferable to a sensor?
13. Why is the nearly-symmetrical part the dangerous one?
14. State the two inequalities a Poka-Yoke feature must satisfy, and which is tight.
15. Why is a "past a point" clamp switch inadequate?
16. Why did the vision system cost 858% of the exposure it removed?
17. Why does persistence matter more than fault rate?
18. What does a periodic check bound that specific sensing cannot?
19. Why is an unreliable sensor worse than no sensor?
20. Name the nine Stage 0 questions.
21. Which four are routinely missing, and what has each reversed?
22. What does Stage 1 ask, and when does it settle the matter alone?
23. What drives Stage 3, Stage 4A and Stage 5C respectively?
24. Why is the order of stages not negotiable?
25. When may the tree be overridden, and what may never be?

### Exit criterion for Module 3.3

You may proceed when, for an unfamiliar requirement, you can:
- **select an automation level and state what judgement must be replaced**
- **size a lead-in from a documented placement error budget**
- **enumerate loading faults and prevent everything preventable**
- **rank sensing by cost per unit of exposure removed, using persistence**
- **route the requirement through all six stages of the tree**
- **produce a one-page design basis with the landing point, the eliminations and the assumptions**
- **and say when a fixture should not be built**

---

# LEVEL 3 ASSESSMENT

**Coverage:** Modules 3.1, 3.2 and 3.3 — all ten lessons.
**Two components:** Quiz Q3 (40 items, 100 marks) and the decision-tree assignment (100 marks).
**Both must be passed.** The overall grade is the lower of the two bands.

| Band | Marks | Meaning |
|---|---|---|
| **MASTER** | 90–100 | Ready to proceed and to teach the material |
| **ADVANCED** | 80–89 | Ready to proceed |
| **COMPETENT** | 70–79 | Proceed, revisit the weak module |
| **DEVELOPING** | 60–69 | Re-study the weak module and re-take |
| **REPEAT** | <60 | Repeat Level 3 |

```
   ┌──────────────────────────────────────────────┐
   │ THE TWENTY-FOUR AUTO-FAILS FROM LEVELS 0-2   │
   │ REMAIN LIVE, AND LEVEL 3 ADDS TEN MORE,      │
   │ MAKING THIRTY-FOUR.                          │
   │                                              │
   │ THEY APPLY TO BOTH COMPONENTS.               │
   └──────────────────────────────────────────────┘
```

---

## QUIZ Q3 — 40 ITEMS, 100 MARKS

### Section A — Classification by process (Module 3.1), 14 items, 35 marks

**Q3.1** (2 marks) Name the five process families and state what assumption each removes from the one
before it.

**Q3.2** (3 marks) State the three structural divisions of the machining family and give the governing
consideration each identifies.

**Q3.3** (2 marks) Why is a grinding fixture's design driver the opposite of a roughing fixture's?

**Q3.4** (3 marks) Match each operation to its governing consideration and state the specific design
requirement: drilling, boring, reaming, tapping.

**Q3.5** (3 marks) A 7.71× increase in spindle speed produced a 59.5× increase in centrifugal force.
Explain the relationship and state what happened to the safety factor.

**Q3.6** (2 marks) Why does chuck grip fall as speed rises, and why must the manufacturer's curve be used?

**Q3.7** (2 marks) State what carries over unchanged when a part rotates and what must be re-derived.

**Q3.8** (3 marks) Explain in five steps why welding distorts, and identify the irreversible step.

**Q3.9** (3 marks) Restraining one 900 mm² member against a 100 °C rise required 216,000 N against 48,000
N of clamp capacity. State the shortfall and explain why more clamping would make the distortion worse.

**Q3.10** (2 marks) What is pre-setting, and what can it never fix?

**Q3.11** (3 marks) Why is spot welding the severest access constraint in fixture design, and what second
requirement does a conductive fixture create?

**Q3.12** (3 marks) A 0.6 mm diameter variation moves a tube's axis 0.424 mm in a 90° V-block. Derive
this, and state the more serious defect of a V-block on a bent tube.

**Q3.13** (2 marks) Why is a pierced hole the best datum a tube can have, and by what factor did it beat
two V-blocks?

**Q3.14** (2 marks) Why must a tube checking fixture not clamp, and what happened when one did?

### Section B — Actuation and flexibility (Module 3.2), 14 items, 35 marks

**Q3.15** (3 marks) Name the six actuation methods and state the failure behaviour of each.

**Q3.16** (2 marks) Which methods hold without power, and why does that property matter?

**Q3.17** (3 marks) A pneumatic cylinder needed a 132.5 mm bore where hydraulic needed 20.2 mm. Derive
the 6.56× ratio and state why pneumatic was eliminated.

**Q3.18** (3 marks) A cylinder correctly sized for extending delivered 158 N of a required 8,000 N on
retract. Explain the mechanism and state the factor.

**Q3.19** (2 marks) Why is a pneumatic clamp a spring, and what does that threaten?

**Q3.20** (3 marks) A vacuum chuck gave 5,460 N of hold-down and safety factors of 0.42 dry and 0.21 with
coolant. Explain the discrepancy and state the fix.

**Q3.21** (2 marks) State the absolute ceiling on vacuum holding and why it exists.

**Q3.22** (2 marks) Why must vacuum and magnetic holding be sensed?

**Q3.23** (3 marks) Name the four flexibility levels and state what drives the choice between them.

**Q3.24** (3 marks) Modular had the lowest capital and cost ₹1,252,400 more over five years. Explain the
mechanism and state the break-even recurrence.

**Q3.25** (3 marks) Why is worst-case stacking correct for a modular setup but not for a production
population?

**Q3.26** (2 marks) State the two benefits of a zero-point system and say which is undersold and why.

**Q3.27** (3 marks) The multi-part saving curve gave 35.75 s for 1→2 and 2.98 s for 6→8. Explain the
mechanism and state what four parts captures.

**Q3.28** (3 marks) State the five things that change when a fixture rotates, and why palletisation
sometimes fails.

### Section C — Automation, error-proofing and the tree (Module 3.3), 12 items, 30 marks

**Q3.29** (3 marks) State five things an operator provides that a robot does not, and how each must be
replaced.

**Q3.30** (2 marks) Why is the cost of automation not the robot?

**Q3.31** (3 marks) Robot repeatability was ±0.05 mm and accuracy ±0.35 mm. State when each applies and
what the difference did to the required lead-in.

**Q3.32** (2 marks) Why must lead-in errors be stacked worst case?

**Q3.33** (3 marks) Explain the characteristic automation failure and why "part present" and "clamp
closed" do not catch it.

**Q3.34** (2 marks) How does an air seat check work, and what two things can it not detect?

**Q3.35** (3 marks) State the error-proofing hierarchy and explain why it has the same shape as the
hierarchy of control.

**Q3.36** (3 marks) State the two inequalities a Poka-Yoke feature must satisfy, identify the tight one,
and state what happens if it is violated.

**Q3.37** (3 marks) A vision system cost 858% of the exposure it removed while an air seat check cost
0.84%. Explain how such a disparity arises and what selection method reveals it.

**Q3.38** (2 marks) Why does a periodic check bound faults that specific sensing cannot?

**Q3.39** (2 marks) Name the nine Stage 0 questions.

**Q3.40** (2 marks) State the four Stage 0 questions routinely missing from a brief, and name what each
has reversed.

---

## MARK SCHEME — KEY POINTS

`[PRACTICE]` One mark per substantive point unless stated; a correct conclusion without reasoning scores
at most half.

| Q | Key points required |
|---|---|
| 3.1 | Machining (baseline) · joining removes rigidity, adds heat · tube removes prismatic geometry · verification removes cutting force · correction removes the datum |
| 3.2 | Does the part rotate · roughing or finishing · is the tool guided |
| 3.3 | Roughing: force, part moves · grinding: tens of newtons but micrometre tolerances, so clamping strain and heat dominate; release distortion |
| 3.4 | Drilling torque + breakthrough support · boring bar path and L/D · reaming alignment, no side load · tapping two-direction anti-rotation |
| 3.5 | F = mω²r, so force ∝ speed² · (3000/389)² = 59.5 · SF fell 4.54 → 1.18 dry, 0.59 with coolant |
| 3.6 | The jaws' own centrifugal force opposes clamping · the curve is jaw-specific and includes guideway friction and chuck geometry |
| 3.7 | Carries over: geometry, determinacy, metrology, gates · re-derive: all statics; add balance and projection as new gates |
| 3.8 | Local heating · expansion prevented by cold surroundings · **yields in compression while soft** · cools · contracts from a shorter length. Step 3 is irreversible |
| 3.9 | 22.2%, a shortfall of 4.50× · more restraint → more compressive yielding → more contraction |
| 3.10 | Holding parts off-nominal so distortion brings them to nominal · corrects bias, never scatter |
| 3.11 | Both electrodes must reach every point with fixed gun geometry · a conductive fixture shunts the current and the weld does not form |
| 3.12 | Δh = (Δd/2)/sin(θ/2); at 45°, 0.30/0.7071 = 0.424 · the V does not constrain rotation at all except by friction |
| 3.13 | Controls position and rotation together and is insensitive to diameter · 7.40× |
| 3.14 | A flexible part clamped is forced into shape, measuring nothing · 22% of previously passing tubes failed, matching the line's reject rate |
| 3.15 | Manual fails in place · pneumatic loses force · hydraulic stored energy · electro-mechanical holds if self-locking · vacuum fails released and invisibly · magnetic: permanent and electro-permanent hold, electromagnetic fails released |
| 3.16 | Permanent and electro-permanent magnetic, manual, self-locking electro-mechanical · loss of power should be a safe state |
| 3.17 | D = √(4F/πp); ratio = √(250/5.8) = 6.56 · 132.5 mm against an 80 mm envelope = 166%: space, not force |
| 3.18 | Retract acts on the annulus π(D²−d²)/4; with D=20.2 and d=20 that is 6.3 mm² · a factor of 50 |
| 3.19 | Air is compressible so the clamp behaves as a stiff spring · it may be the softest element in the stiffness loop (principle 105) |
| 3.20 | Hold-down is large; side resistance is μF, and coolant halves μ · fit a positive stop, which collapsed the requirement from 32,000 N to ~40 N |
| 3.21 | Atmospheric pressure, ~101.3 kPa = 10.13 N/cm² · nothing can push harder than the atmosphere |
| 3.22 | They fail invisibly — a vacuum that has not established looks exactly like one that has |
| 3.23 | Dedicated, modular, flexible, reconfigurable · **recurrence** |
| 3.24 | Modular pays its setup at every recurrence; a dedicated fixture is built once · break-even 36.8 setups/yr against an actual 96 |
| 3.25 | A rebuilt setup is one sample of the stack with no averaging across the batch; RSS describes a population |
| 3.26 | Changeover time, and removal of the work-offset re-establishment · the second, because it removes an error source and a skill dependency |
| 3.27 | Saving = t_fixed/n, so it asymptotes · four parts captures 75% of the theoretical maximum |
| 3.28 | Gravity, chips, coolant, swept envelope, drive loading · palletisation fails when loading exceeds cutting time |
| 3.29 | Wrong part, chip on locator, unusual flash, part not seated, damaged part, odd noise · each must be prevented or sensed |
| 3.30 | The sensing and error-proofing the robot makes necessary — the judgement that left with the operator |
| 3.31 | Repeatability for taught points, accuracy for off-line programmed · 0.6 mm vs 1.0 mm, 1.67× |
| 3.32 | A jam is a hard failure on a single placement; there is no averaging |
| 3.33 | Chip on the locator, part placed on it, clamped firmly, machined out of position · both sensors are satisfied by a part sitting on a chip |
| 3.34 | Back-pressure through an orifice in the locating face · cannot tell the part is the right part; cannot work on porous or flooded surfaces |
| 3.35 | Impossible · obvious · detect and stop · detect later · instruct · the bottom relies on a person acting correctly every time |
| 3.36 | Interference ≥ tolerances + margin when wrong; clearance ≥ tolerances + margin when right · the clearance one · a pin that fouls good parts gets filed down |
| 3.37 | The vision system's fault was caught cheaply at the next operation, so persistence was ~1 part · ranking by cost per unit of exposure removed |
| 3.38 | It bounds every fault at the check interval, including unlisted ones |
| 3.39 | Process · tolerance and datums · volume · programme length · recurrence · machine and utilisation · material properties · cycle by element · the real problem |
| 3.40 | Programme length (L2.1.3, opposite answers at 1 and 3 years) · recurrence (L3.2.2, 12 vs 96 setups) · utilisation (L2.2.5 vs L3.2.3, u≈0 vs u≈1) · the real problem (CS-01, ₹1,088,800) |

---

## AUTO-FAIL ITEMS — LEVEL 3

Ten new items, bringing the live total to **thirty-four**.

| # | Answer that fails the assessment |
|---|---|
| **25** | Reusing a stationary-part clamping calculation for a rotating fixture |
| **26** | Estimating chuck grip at speed instead of using the manufacturer's curve |
| **27** | Proposing more clamp force as the remedy for weld distortion |
| **28** | Clamping a non-rigid part in a checking fixture |
| **29** | Relying on friction alone with vacuum or magnetic holding |
| **30** | Sizing a cylinder on the extend area when clamping is the retract stroke |
| **31** | Claiming a multi-part fixture divides the cycle time by the number of parts |
| **32** | Accepting "part present" and "clamp closed" as sufficient sensing on an automated fixture |
| **33** | Reaching for a sensor where a physical Poka-Yoke feature would prevent the fault |
| **34** | Recommending dedicated or modular fixturing without establishing recurrence |

```
   ┌──────────────────────────────────────────────┐
   │ THE COMMON THREAD IN ALL TEN: EACH IS AN     │
   │ ANSWER THAT SOUNDS COMPETENT AND PRODUCES A  │
   │ FIXTURE THAT FAILS IN SERVICE OR A DECISION  │
   │ THAT DESTROYS MONEY.                         │
   │                                              │
   │ NONE OF THEM IS AN ARITHMETIC SLIP.          │
   └──────────────────────────────────────────────┘
```

**The thirty-four live auto-fails, consolidated:**

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
| L3 | 25 | Reusing a stationary-part clamping calculation for a rotating fixture |
| L3 | 26 | Estimating chuck grip at speed |
| L3 | 27 | Proposing more clamp force as the remedy for weld distortion |
| L3 | 28 | Clamping a non-rigid part in a checking fixture |
| L3 | 29 | Relying on friction alone with vacuum or magnetic holding |
| L3 | 30 | Sizing a cylinder on the extend area when clamping is retract |
| L3 | 31 | Claiming a multi-part fixture divides cycle time by the part count |
| L3 | 32 | Accepting "part present" and "clamp closed" as sufficient sensing |
| L3 | 33 | Reaching for a sensor where prevention would work |
| L3 | 34 | Recommending dedicated or modular without establishing recurrence |

---

## DECISION-TREE ASSIGNMENT — 100 MARKS

### The brief

```
  ════════════════════════════════════════════════
  ASSIGNMENT BRIEF — AS RECEIVED FROM THE CUSTOMER
  ════════════════════════════════════════════════

  "We need fixtures for a new family of hydraulic
   manifold blocks. Four variants. About 26,000 a
   year altogether. We're getting too much scrap
   on the cross-drilled ports and the setups take
   too long. Budget is around ₹900,000. We'd like
   to look at automating it eventually."

  WHAT YOU ARE GIVEN                          [PROJ]

  THE PARTS
    Aluminium 6082-T6 manifold blocks
    Variants A, B, C, D — same footprint
      180 × 120 mm, heights 60, 75, 90, 110 mm
    Mass 2.8 to 5.1 kg
    All four share the same base face and two
      dowel holes

  ┌─────────────────────────────────────────────┐
  │        ASCII SCHEMATIC — NOT TO SCALE       │
  │   FOR TRAINING ONLY — NOT FOR MANUFACTURE   │
  │                                             │
  │       ╔═══════════════════════╗             │
  │       ║  ○        ○           ║ ← 4 × Ø12H8 │
  │       ║       TOP FACE        ║   ports     │
  │       ║  ○        ○           ║             │
  │       ╚═══════════════════════╝             │
  │        ║                     ║              │
  │      →─╫─  CROSS PORTS       ╫─←  Ø10H8     │
  │        ║   both side faces   ║   6 per side │
  │        ║                     ║              │
  │       ╔═══════════════════════╗             │
  │       ║ ●         ● BASE FACE ║ ← 2 × Ø10H7 │
  │       ╚═══════════════════════╝   dowels    │
  └─────────────────────────────────────────────┘

  OPERATIONS (all four variants)
    OP10  face and mill the base, drill 2 dowel
          holes and ream          4.2 min
    OP20  face the top, drill and ream 4 × Ø12H8
                                  5.8 min
    OP30  cross-drill 6 ports, left face
                                  3.9 min
    OP40  cross-drill 6 ports, right face
                                  3.9 min

  TOLERANCES
    Cross ports to top ports:
      true position Ø0.10 M to |A|B|C|
      A = base face · B = dowel 1 · C = dowel 2
    Port perpendicularity to their face: 0.05 mm
    Base face flatness: 0.03 mm

  STANDARD: ASME Y14.5-2018

  COMMERCIAL AND OPERATIONAL DATA        [EX-ASSUMED]
    Volumes: A 11,000 · B 7,000 · C 5,000 ·
             D 3,000 per year
    Programme: 3 years firm, likely extension
    Recurrence: A weekly, B fortnightly,
                C monthly, D quarterly
    Machines: VMC-1 3,400 h/yr at 52 %
              VMC-2 3,400 h/yr at 88 %
              HMC   3,400 h/yr at 41 %, has a
                    pallet changer
    Rates: VMC ₹1,750/h · HMC ₹2,050/h
    Part value at OP30: ₹5,900
    Current method: four setups in a vise,
      3.4 min setup each
    Current scrap: 4.1 %, almost all on
      cross-port true position
    Operator rate: ₹350/h
```

### What you must produce

A complete routing through the decision tree, **2,000–3,000 words**, with all calculations in the
thirteen-line format. Where data is missing, **state what you would ask for and what the answer would
change.**

**Section 1 — Stage 0 (15 marks)**
Answer all nine questions. Identify which were not in the brief, state how you obtained or would obtain
each, and identify which of them change the answer.

**Section 2 — Stage 1 (15 marks)**
Determine whether fixtures are justified. Address specifically: is the scrap problem a holding problem or
a setup problem, and what does the evidence say? Calculate the current machine-hour requirement and
compare it with available capacity. State whether the requirement should be restated, and restate it if
so.

**Section 3 — Stage 2 (10 marks)**
Assign a process family and governing consideration to every operation. Identify any conflicts between
operations and classify each using the L2.2.6 method.

**Section 4 — Stage 3 (15 marks)**
Determine the flexibility level. This part has a **family of four variants with widely differing
recurrence** — address that explicitly. Calculate the break-even between your candidate approaches.
Determine whether a zero-point interface changes the answer, and whether the four variants should share
a fixture or not.

**Section 5 — Stage 4 (20 marks)**
- Split the cycle and calculate the fixed fraction; decide the part count with the curve.
- Determine the minimum number of setups achievable and what each reduction is worth — **note that the
  cross-ports are on opposite faces and are toleranced to the top ports.**
- Select the machine, with the capacity check.
- Select the actuation, having first assumed a positive stop; verify the failure behaviour.

**Section 6 — Stage 5 (15 marks)**
Determine the automation level and justify it against the cycle time. Enumerate the loading faults —
**note that four variants share a footprint and differ only in height** — and determine which are
preventable. Design the Poka-Yoke features with both inequalities. Rank the remaining faults by exposure
and specify the sensing.

**Section 7 — Stage 6 and the summary (10 marks)**
Re-run payback, break-even and capacity on your final concept. Produce the one-page design basis: landing
point, options eliminated with the gate each failed, economics, and the assumptions with a named
confirmer for each. State your position on the ₹900,000 budget.

### Assignment rubric

| Section | Marks | MASTER (90%+) | COMPETENT (70%) | FAIL |
|---|---|---|---|---|
| **1 Stage 0** | 15 | All nine answered; missing ones identified with what each would change; recurrence and utilisation recognised as decisive | All nine addressed | Works from the brief alone |
| **2 Stage 1** | 15 | Identifies the scrap as a setup-to-setup problem from the tolerance structure; calculates the capacity requirement; **restates the requirement** | Justifies fixtures; some capacity work | Accepts the brief as the problem |
| **3 Stage 2** | 10 | Every operation tagged; conflicts identified and classified correctly | Operations tagged | The part tagged rather than the operations |
| **4 Stage 3** | 15 | Handles the differing recurrence per variant; break-even calculated; zero-point considered; shared-versus-separate resolved with numbers | Flexibility level chosen with reasoning | Chosen on volume or variety |
| **5 Stage 4** | 20 | Fixed fraction calculated; setup reduction valued; **recognises that cross-ports toleranced to top ports across setups is a stack no fixture removes**; capacity check; positive stop assumed before sizing | All elements addressed | Multi-part assumed; actuation by habit |
| **6 Stage 5** | 15 | Height-only variant difference recognised as a Poka-Yoke problem; both inequalities; exposure ranking with persistence | Automation level justified; some error-proofing | Sensors listed without exposure reasoning |
| **7 Stage 6** | 10 | Economics re-run; eliminations recorded with gates; assumptions have named confirmers; a clear position on the budget | Summary produced | No re-run; budget treated as a constraint |

```
   ┌──────────────────────────────────────────────┐
   │ AUTO-FAIL APPLIES TO THE ASSIGNMENT.         │
   │                                              │
   │ THE FOUR MOST LIKELY HERE:                   │
   │                                              │
   │  #34 recommending dedicated or modular       │
   │      without establishing recurrence — and   │
   │      the recurrence VARIES BY VARIANT        │
   │  #31 claiming a multi-part fixture divides   │
   │      the cycle by the part count             │
   │  #22 comparing only against the current vise │
   │      method                                  │
   │  #21 counting the setup saving at the full   │
   │      machine rate without a capacity check — │
   │      VMC-1 IS AT 52 % AND THE HMC AT 41 %    │
   └──────────────────────────────────────────────┘
```

### Guidance

`[PRACTICE]` Four things separate a MASTER answer:

```
   1 THE SCRAP DIAGNOSIS.
     Cross-port true position is toleranced to
     |A|B|C| — the base face and two dowels — but
     the ports are cut in OP30 and OP40 while the
     datums were created in OP10. THE
     RELATIONSHIP CROSSES SETUPS.
     A better vise cannot fix a tolerance stack.
     THE ANSWER IS FEWER SETUPS, AND THE EVIDENCE
     IS IN THE FEATURE CONTROL FRAME, NOT IN THE
     SCRAP RECORDS.

   2 THE RECURRENCE SPREAD.
     A runs weekly (52/yr), D quarterly (4/yr).
     THE TREE GIVES DIFFERENT ANSWERS FOR
     DIFFERENT VARIANTS OF THE SAME FAMILY.
     A COMPETENT ANSWER PICKS ONE STRATEGY. A
     MASTER ANSWER SEGMENTS — and then asks
     whether a shared fixture with inserts
     collapses the problem.

   3 THE HEIGHT-ONLY DIFFERENCE.
     Four variants sharing a footprint and two
     dowels, differing only in height, is a
     NEARLY-SYMMETRICAL PROBLEM in disguise: the
     wrong variant will load perfectly and
     machine wrongly.
     THIS IS A POKA-YOKE REQUIREMENT AND IT IS
     THE MOST IMPORTANT ONE IN THE BRIEF.

   4 THE CAPACITY POSITION.
     Two of three machines have substantial spare
     capacity. So setup savings are NOT worth
     their full machine rate — but they DO
     release setter time, and the two are
     different resources.
     STATE THE SPLIT AS A QUESTION FOR THE
     CUSTOMER RATHER THAN ASSUMING IT.
```

---

# END OF LEVEL 3

## What Level 3 established

```
   MODULE 3.1 — BY PROCESS
     machining · joining · tube · verification ·
     correction
     and what each family removes from the last

   MODULE 3.2 — BY ACTUATION AND FLEXIBILITY
     six actuation methods, ranked by FAILURE
       BEHAVIOUR
     four flexibility levels, driven by
       RECURRENCE
     part count driven by the FIXED FRACTION
     zero-point, palletisation and the axes

   MODULE 3.3 — BY AUTOMATION LEVEL
     who loads it, and what judgement leaves with
       the operator
     prevention before detection
     sensing ranked by exposure, driven by
       PERSISTENCE
     AND THE FIXTURE SELECTION DECISION TREE
```

| Level 3 in numbers | |
|---|---|
| Modules | 3 |
| Lessons | 10 |
| Lesson sections | 300 |
| Exercises | 30 |
| Governing principles | 133–237 (105 principles) |
| Scenarios routed through the tree | 15 |
| New auto-fail items | 10 (total now 34) |
| Assessment | Quiz Q3, 40 items, 100 marks + decision-tree assignment, 100 marks |

### The three drivers Level 3 identified

```
   ┌──────────────────────────────────────────────┐
   │ RECURRENCE      drives FLEXIBILITY           │
   │   setups per year — neither volume nor       │
   │   variety                                    │
   │   12 vs 96 setups reversed the answer        │
   │                                              │
   │ FIXED FRACTION  drives PART COUNT            │
   │   the shareable portion of the cycle         │
   │   7.92 % produced a useful "no" in one       │
   │   division                                   │
   │                                              │
   │ PERSISTENCE     drives SENSING               │
   │   parts made before detection                │
   │   5.0× more frequent, 29× less costly        │
   └──────────────────────────────────────────────┘

   EACH IS A NUMBER NOBODY ASKS FOR, AND EACH
   REVERSES A DECISION THAT LOOKED SETTLED.
```

### The single most important thing in Level 3

```
   ┌──────────────────────────────────────────────┐
   │ IF YOU DO NOT KNOW THE CANDIDATE SET, YOU    │
   │ WILL DESIGN THE FIXTURE YOU DESIGNED LAST    │
   │ TIME.                                        │
   │                                              │
   │ THAT IS NOT A FAILURE OF SKILL. IT IS A      │
   │ FAILURE OF VOCABULARY — AND CS-01's          │
   │ ₹1,088,800 LOSS BEGAN WITH A CANDIDATE SET   │
   │ OF EXACTLY ONE.                              │
   │                                              │
   │ THE TREE DOES NOT FIND THE OPTIMUM. IT MAKES │
   │ THE ALTERNATIVES VISIBLE BEFORE A DECISION   │
   │ IS MADE, AND IT RECORDS WHAT WAS REJECTED    │
   │ AND WHY.                                     │
   └──────────────────────────────────────────────┘
```

### What comes next

**LEVEL 4 — DEGREES OF FREEDOM.** Levels 2 and 3 defined what a fixture is, what it must achieve and what
kinds exist. Level 4 begins the technical core: the six degrees of freedom, how each is removed, what
happens when one is removed twice or not at all, and the formal basis of the 3-2-1 principle that has
been used informally throughout.

---

**END OF LEVEL 3 — PART 2**
