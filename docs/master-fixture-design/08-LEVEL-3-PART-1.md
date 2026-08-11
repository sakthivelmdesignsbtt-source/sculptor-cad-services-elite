# MASTER INDUSTRIAL FIXTURE DESIGN ENGINEERING
## From Scratch to Production-Ready Professional

# LEVEL 3 — FIXTURE CLASSIFICATION
## PART 1 OF 2 — MODULE 3.1: CLASSIFICATION BY PROCESS

---

## WHERE YOU ARE

```
   LEVEL 0  ENGINEERING FOUNDATION          ✔ complete
   LEVEL 1  MANUFACTURING PROCESS FOUNDATION ✔ complete
   LEVEL 2  WHAT A FIXTURE IS               ✔ complete
   LEVEL 3  FIXTURE CLASSIFICATION          ◄ YOU ARE HERE
     Module 3.1  by process        ◄ PART 1
     Module 3.2  by actuation and flexibility
     Module 3.3  by automation level
   LEVEL 4  DEGREES OF FREEDOM
   ...
   LEVEL 59 FINAL MASTER CAPSTONE
```

## WHY LEVEL 3 EXISTS

Level 2 told you **what a fixture is** and **what it must achieve**. It did not tell you **what kinds
exist**. That is a gap with a practical consequence:

```
   ┌──────────────────────────────────────────────┐
   │ A REQUIREMENT ARRIVES.                       │
   │                                              │
   │ IF YOU DO NOT KNOW THE CANDIDATE SET, YOU    │
   │ WILL DESIGN THE FIXTURE YOU DESIGNED LAST    │
   │ TIME.                                        │
   │                                              │
   │ That is the single most common cause of an   │
   │ over-engineered fixture, and it is not a     │
   │ failure of skill. It is a failure of         │
   │ VOCABULARY.                                  │
   └──────────────────────────────────────────────┘
```

Level 2 taught you to **eliminate on gates before comparing** (L2.1.4) and to **price the cheapest option
that passes** (L2.2.5, CS-01). **Both instructions are useless if you cannot list the options.** CS-01's
₹1,088,800 loss began with a candidate set of exactly one.

Level 3 builds the candidate set along three independent axes:

```
   AXIS 1 — BY PROCESS          Module 3.1
     What is being done to the part?
     machining · joining · tube · verification
     · correction

   AXIS 2 — BY ACTUATION AND FLEXIBILITY
                                Module 3.2
     How is force applied, and how dedicated is
     the fixture?
     manual/pneumatic/hydraulic/vacuum/magnetic
     dedicated/modular/flexible
     single/multi/tombstone/rotary/5-axis

   AXIS 3 — BY AUTOMATION LEVEL Module 3.3
     Who or what loads it, and how is correct
     loading verified?
     manual · semi-auto · auto · robot-loaded
     Poka-Yoke and sensor verification

   ┌──────────────────────────────────────────────┐
   │ THESE AXES ARE INDEPENDENT.                  │
   │                                              │
   │ A fixture is not "a machining fixture OR a   │
   │ hydraulic fixture OR a robot-loaded fixture".│
   │ It is a POINT IN A THREE-DIMENSIONAL SPACE:  │
   │ a hydraulically actuated, dedicated,         │
   │ robot-loaded HMC tombstone machining         │
   │ fixture.                                     │
   │                                              │
   │ TREATING THE AXES AS ALTERNATIVES IS THE     │
   │ CLASSIC BEGINNER ERROR, AND IT PRODUCES      │
   │ CLASSIFICATION LISTS THAT OVERLAP AND LEAK.  │
   └──────────────────────────────────────────────┘
```

Module 3.3 closes with **the Fixture Selection Decision Tree** — a single route from part, process and
volume to a fixture family — and an exercise routing fifteen real scenarios through it.

## WHAT MODULE 3.1 COVERS

| Lesson | Title |
|---|---|
| **L3.1.1** | Machining fixtures: milling, VMC, HMC, drilling, boring, reaming, tapping, turning, grinding |
| **L3.1.2** | Joining fixtures: welding (MIG/TIG/spot/projection/arc), brazing, riveting, adhesive |
| **L3.1.3** | Tube fixtures: cutting, bending, checking, welding, assembly, end-forming |
| **L3.1.4** | Verification fixtures: inspection, checking, gauging — and correction fixtures: recutting, rework |

**Module 3.1 closing:** the process→fixture class map, governing principles 133 onward, numerical
results, self-check, exit criterion.

## WHAT YOU ALREADY KNOW THAT THIS MODULE USES

| From | What it gives you here |
|---|---|
| **L1.3** | Cutting forces by operation — the physical basis of the machining classes |
| **L1.3.4** | Drilling torque governs, not thrust — reappears as a class characteristic |
| **L1.3.5** | The empty clamp force window — why finishing is its own class |
| **L2.1.4** | Fixture vs gauge — the tolerance philosophy that separates verification fixtures |
| **L2.2.1** | Determinacy — which constrains every class equally |
| **L2.2.3** | Chips and coolant — which separate machining from every other class |
| **L2.2.6** | The hierarchy of gates — used to choose between classes |

```
   ┌──────────────────────────────────────────────┐
   │ A WARNING ABOUT CLASSIFICATION LESSONS.      │
   │                                              │
   │ IT IS EASY TO LEARN A LIST OF NAMES AND      │
   │ BELIEVE YOU HAVE LEARNED SOMETHING.          │
   │                                              │
   │ THE TEST OF THIS MODULE IS NOT WHETHER YOU   │
   │ CAN RECITE THE CLASSES. IT IS WHETHER, GIVEN │
   │ AN UNFAMILIAR PART AND PROCESS, YOU CAN SAY  │
   │ WHICH CLASS APPLIES, WHAT THAT IMPLIES FOR   │
   │ THE DESIGN, AND WHICH REQUIREMENTS CHANGE    │
   │ WHEN THE PROCESS CHANGES.                    │
   │                                              │
   │ EVERY LESSON HERE THEREFORE ENDS IN          │
   │ CONSEQUENCES, NOT DEFINITIONS.               │
   └──────────────────────────────────────────────┘
```

---

# MODULE 3.1 — CLASSIFICATION BY PROCESS

**Prerequisite:** Level 2 complete. **Lessons:** 4. **Estimated time:** 3.5 h.

**The organising question of this module:**

> **What is being done to the part, and what does that process demand of the thing holding it?**

```
   THE FIVE PROCESS FAMILIES

   1 MACHINING        material is removed
       forces large, chips produced, coolant used
       → L3.1.1

   2 JOINING          material is added or fused
       heat, distortion, no chips, access for a
       torch or electrode
       → L3.1.2

   3 TUBE PROCESSING  a thin-walled, long,
       non-prismatic workpiece
       springback, ovality, and a geometry that
       resists conventional location
       → L3.1.3

   4 VERIFICATION     nothing is done to the part
       the fixture judges rather than makes
       → L3.1.4

   5 CORRECTION       a part already made is
       re-worked
       the reference has already been consumed
       → L3.1.4

   ┌──────────────────────────────────────────────┐
   │ THE ORDER MATTERS. EACH FAMILY REMOVES AN    │
   │ ASSUMPTION THE PREVIOUS ONE RELIED ON.       │
   │                                              │
   │ Machining assumes large forces and rigid     │
   │ parts. Joining removes rigidity and adds     │
   │ heat. Tube work removes prismatic geometry.  │
   │ Verification removes the cutting force       │
   │ entirely — and with it, every argument that  │
   │ depended on it. Correction removes the       │
   │ datum.                                       │
   └──────────────────────────────────────────────┘
```

---

## LESSON L3.1.1 — MACHINING FIXTURES

### 1. Lesson title
**L3.1.1 — The machining fixture family: milling, VMC, HMC, drilling, boring, reaming, tapping, turning,
grinding**

### 2. Learning objective
By the end of this lesson you will be able to name the machining fixture sub-classes and state what
distinguishes each, identify the governing load case for each operation, explain why turning and grinding
fixtures obey different rules from milling fixtures, select the correct sub-class for a given operation,
and recognise the design consequences that follow from that selection.

### 3. Prerequisites
All of Module 1.3 (cutting forces by operation), L1.1 (VMC and HMC fixture layout), L2.2.1 (determinacy),
L2.2.3 (chips and coolant).

### 4. Why the topic matters
**Machining fixtures are the largest family and the one most people mean when they say "fixture".** But
the family is not homogeneous. A grinding fixture and a roughing mill fixture are both "machining
fixtures" and almost nothing that is true of one is true of the other.

```
   THE SPREAD WITHIN ONE "FAMILY"

   ROUGHING MILL FIXTURE
     force        thousands of newtons
     governing    rigidity, clamp force
     chips        enormous volume
     tolerance    coarse
     failure mode part moves

   GRINDING FIXTURE
     force        tens of newtons
     governing    thermal stability, magnetism,
                  wheel access
     chips        fine, abrasive, in coolant
     tolerance    micrometres
     failure mode part distorts, or heat drifts

   ┌──────────────────────────────────────────────┐
   │ SAME FAMILY NAME. OPPOSITE DESIGN DRIVERS.   │
   │                                              │
   │ A designer who learned "machining fixture" as│
   │ a single concept will size a grinding fixture│
   │ for force and be baffled when it fails on    │
   │ thermal drift.                               │
   └──────────────────────────────────────────────┘
```

You already know the force behaviour of each operation from Module 1.3. **This lesson turns that into a
classification with design consequences.**

### 5. Simple explanation

```
   THE MACHINING SUB-CLASSES, BY WHAT GOVERNS

   FORCE-GOVERNED
     Milling (roughing)   large, cyclic side loads
     Slotting             worst case of all
     Drilling             torque, not thrust
     Turning              continuous, rotating part

   ACCESS-GOVERNED
     Boring               long tool, needs clearance
     Tapping              needs anti-rotation both
                          ways
     Multi-op VMC/HMC     tool must reach every
                          feature

   DISTORTION-GOVERNED
     Finish milling       clamp force is the enemy
     Thin-wall work       support, not clamping
     Grinding             heat and clamping strain

   ┌──────────────────────────────────────────────┐
   │ ASK "WHAT WILL MAKE THIS FAIL?" AND THE      │
   │ SUB-CLASS ANSWERS ITSELF.                    │
   └──────────────────────────────────────────────┘
```

### 6. Engineering explanation

**THE SUB-CLASSES AND WHAT DEFINES EACH**

`[PRACTICE]` The reference table for this lesson. **Read the "governing" column, not the names:**

| Sub-class | Part moves or tool moves | Governing consideration | Characteristic feature |
|---|---|---|---|
| **Milling — VMC** | Tool, 3 axes; part fixed | Side force, chip fall, access from above | Base plate on T-slots, clamps clear of the tool path |
| **Milling — HMC** | Tool horizontal; part on pallet | Gravity acts sideways; chips fall away | Support ledge, tombstone, pallet interface |
| **Drilling** | Tool rotates and feeds | **Torque, not thrust** (L1.3.4, 7.1×) | Anti-rotation, bush or hardened pad, breakthrough support |
| **Boring** | Tool rotates, long reach | Tool clearance, bar deflection L/D | Open access along the bar axis; no obstruction |
| **Reaming** | Light cut, follows the hole | Alignment; the reamer follows, it does not correct | Rigid, repeatable location; no side load allowed |
| **Tapping** | Reversing torque | **Anti-rotation in BOTH directions** | Two-direction constraint (L1.3.5 auto-fail #14) |
| **Turning** | **PART rotates** | Balance, centrifugal force, chuck interface | Rotationally symmetric, balanced, no projections |
| **Grinding** | Wheel rotates, light cut | Thermal drift, magnetic holding, distortion | Magnetic chuck or low-strain holding; coolant flood |
| **Multi-op / tombstone** | Tool, many faces | Access to all faces; utilisation | Multiple stations, indexing |
| **4th / 5th axis** | Part rotates or tilts | **Gravity direction changes** (L1.1, principle 34) | Clamping sized for the worst orientation |

**THE THREE STRUCTURAL DIVISIONS**

```
   DIVISION 1 — DOES THE PART ROTATE?

   PART STATIONARY (milling, drilling, boring,
   grinding on a surface grinder)
     → Conventional fixture. Gravity is constant.
       Clamping resists cutting force only.

   PART ROTATING (turning, cylindrical grinding)
     → CENTRIFUGAL FORCE APPEARS.
       Balance becomes a requirement.
       A projecting clamp becomes a hazard.
       Clamping must not release under rotation.

   ┌──────────────────────────────────────────────┐
   │ THIS IS THE SHARPEST DIVISION IN THE FAMILY. │
   │                                              │
   │ Almost every rule from Levels 1 and 2 was    │
   │ written for a STATIONARY part. When the part │
   │ rotates, re-derive rather than reuse.        │
   │                                              │
   │ You met this in L2.2.4: a 31 kg part at      │
   │ 8,000 rev/min forced spring-applied clamping.│
   └──────────────────────────────────────────────┘

   DIVISION 2 — IS THE OPERATION ROUGHING OR
   FINISHING?

   ROUGHING   force governs; hold it hard
   FINISHING  distortion governs; hold it gently

   The L1.3.5 result: roughing needed 13× the
   finishing force, and the finishing clamp window
   was EMPTY — 1,354 N needed against 1,250 N
   maximum.

   ┌──────────────────────────────────────────────┐
   │ THESE ARE NOT THE SAME FIXTURE PROBLEM WITH  │
   │ DIFFERENT NUMBERS. THEY ARE OPPOSITE         │
   │ PROBLEMS.                                    │
   └──────────────────────────────────────────────┘

   DIVISION 3 — IS THE TOOL GUIDED BY THE FIXTURE?

   NO   → fixture (L2.1.2). Position comes from
          the machine.
   YES  → jig. Position comes from the bush.

   Drilling and reaming are the operations where
   this choice is live. Milling is not — you
   cannot practically guide a milling cutter.
```

**WHAT CHANGES BETWEEN VMC AND HMC**

You met this in Module 1.1; it is restated here as a classification consequence:

| Aspect | VMC | HMC |
|---|---|---|
| **Spindle** | Vertical | Horizontal |
| **Gravity relative to the part** | Into the fixture — helps | Sideways — the part wants to fall out |
| **Chips** | **Fall onto the part and fixture** | **Fall away** — a genuine advantage |
| **Support** | Base supports naturally | **A support ledge is mandatory** (auto-fail #8) |
| **Typical layout** | Plate on the table | Tombstone, pallet-mounted |
| **Utilisation** | Load stops the cycle | **Pallet changer loads outside the cycle** (80.70 → 99.28%) |
| **Access** | One face plus edges | Four faces per index |

> **The chip advantage of an HMC is not a minor convenience.** L2.2.3 calculated 4,082 cm³ of bulked
> swarf against 900 cm³ of available space — a 4.54× overflow on a VMC layout. On an HMC that swarf falls
> to the conveyor and the problem does not arise.

**TURNING FIXTURES — THE DIFFERENT DISCIPLINE**

`[PRACTICE]`

```
   WHY TURNING IS NOT "MILLING WITH THE PART
   SPINNING"

   1 CENTRIFUGAL FORCE ON EVERY COMPONENT
       F = m ω² r
       A 0.5 kg clamp at 100 mm radius at
       3,000 rev/min:
         ω = 2π×3000/60 = 314.2 rad/s
         F = 0.5 × 314.2² × 0.100 = 4,937 N
       THE CLAMP IS TRYING TO LEAVE.

   2 JAW FORCE FALLS WITH SPEED
       [MFR] Chuck manufacturers publish a
       gripping-force-versus-speed curve. Grip
       falls as the jaws' own centrifugal force
       opposes the clamping. THE CURVE MUST BE
       OBTAINED FROM THE CHUCK MANUFACTURER — it
       is specific to the chuck and the jaws
       fitted.

   3 BALANCE IS A SAFETY REQUIREMENT
       An unbalanced fixture at speed generates
       a rotating force that loads the spindle
       bearings and can be violent.
       [STD] Balance quality grades are specified
       in ISO 21940 (formerly ISO 1940). THE
       APPLICABLE GRADE MUST BE CONFIRMED for the
       machine and speed.

   4 NO PROJECTIONS
       Anything protruding from a rotating fixture
       is a strike hazard and a balance problem.

   ┌──────────────────────────────────────────────┐
   │ A TURNING FIXTURE IS DESIGNED AGAINST SPEED  │
   │ FIRST AND CUTTING FORCE SECOND. THAT IS THE  │
   │ REVERSE OF EVERY OTHER MACHINING SUB-CLASS.  │
   └──────────────────────────────────────────────┘
```

**GRINDING FIXTURES — THE OTHER DIFFERENT DISCIPLINE**

```
   WHY GRINDING IS NOT "MILLING, GENTLY"

   1 FORCES ARE SMALL, SO CLAMPING STRAIN
     DOMINATES
       If you clamp a part hard enough to resist
       a 40 N grinding force, you have clamped it
       far harder than the tolerance allows it to
       be distorted.
       → MAGNETIC CHUCKS EXIST FOR THIS REASON:
         distributed holding with almost no local
         strain.

   2 HEAT
       Grinding puts heat into the part and the
       fixture. Thermal drift of 0.02-0.10 mm per
       shift [GUIDE] is catastrophic at grinding
       tolerances.
       → flood coolant, thermally stable design,
         and warm-up before qualifying.

   3 THE ABRASIVE IS IN THE COOLANT
       Grinding swarf is fine, abrasive and
       suspended. It gets into every clearance and
       lodges on every locating face.
       → sealed or easily cleaned locators; no
         upward-facing pockets.

   4 RELEASE DISTORTION
       A part clamped and ground flat springs when
       released. The ground surface is then not
       flat.
       → LOW-STRAIN HOLDING IS NOT A REFINEMENT.
         IT IS THE WHOLE PROBLEM.

   ┌──────────────────────────────────────────────┐
   │ NOTE THAT MAGNETIC HOLDING REINTRODUCES A    │
   │ PROBLEM: THE PART MUST BE FERROMAGNETIC, AND │
   │ IT WILL BE MAGNETISED AFTERWARDS AND MUST BE │
   │ DEMAGNETISED — OTHERWISE IT COLLECTS SWARF   │
   │ FOR THE REST OF ITS LIFE.                    │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **VMC** | Vertical machining centre — vertical spindle |
| **HMC** | Horizontal machining centre — horizontal spindle |
| **Tombstone** | A multi-faced column mounted on an HMC pallet carrying several fixtures |
| **Pallet** | A removable table allowing loading outside the machining cycle |
| **Support ledge** | A shelf on an HMC fixture carrying the part's weight sideways |
| **Anti-rotation** | Constraint resisting the torque of a rotating tool |
| **Breakthrough** | The instant a drill exits, when thrust drops and torque spikes |
| **L/D ratio** | Boring bar length divided by diameter; governs deflection |
| **Magnetic chuck** | Distributed magnetic holding used mainly in grinding |
| **Demagnetising** | Removing residual magnetism after magnetic holding |
| **Balance grade** | A specified permissible residual unbalance `[STD]` ISO 21940 |
| **Release distortion** | Shape change when clamping is removed |
| **Soft jaws** | Machinable chuck jaws bored to suit the part |

### 8. Principle

> **"MACHINING FIXTURE" IS A FAMILY, NOT A TYPE.** A grinding fixture and a roughing fixture share almost
> no design drivers.
> **ASK WHAT WILL MAKE IT FAIL, AND THE SUB-CLASS ANSWERS ITSELF** — force, access or distortion.
> **THE SHARPEST DIVISION IS WHETHER THE PART ROTATES.** When it does, centrifugal force, balance and
> falling jaw grip govern, and rules written for stationary parts must be re-derived.
> **ROUGHING AND FINISHING ARE OPPOSITE PROBLEMS**, not the same problem with different numbers.
> **AN HMC'S CHIP BEHAVIOUR IS A DESIGN ADVANTAGE, NOT A CONVENIENCE.**
> **GRINDING IS GOVERNED BY STRAIN AND HEAT, NOT FORCE.** Low-strain holding is the whole problem.
> **DRILLING IS GOVERNED BY TORQUE**, boring by access, tapping by two-direction anti-rotation.

### 9. Industrial application

**Choosing the sub-class from the operation list**

```
   A REAL OPERATION LIST AND ITS CONSEQUENCES
   [EX-ASSUMED] illustrative

   OP 10  Rough mill top face, 6 mm stock
   OP 20  Finish mill top face, 0.3 mm
   OP 30  Drill 8 × Ø10.2 through
   OP 40  Tap 8 × M12
   OP 50  Bore Ø60H7, 85 mm deep
   OP 60  Ream Ø12H7 × 2

   WHAT EACH DEMANDS OF THE FIXTURE

   OP 10  FORCE. Largest clamp force of the whole
          sequence. Rigidity governs.
   OP 20  DISTORTION. The clamp force from OP 10
          will print through. → the L1.3.5 problem.
   OP 30  TORQUE + breakthrough support under
          each hole.
   OP 40  TWO-DIRECTION anti-rotation.
   OP 50  ACCESS along 85 mm + bar clearance.
          L/D check.
   OP 60  ALIGNMENT. The reamer follows the hole;
          any side load ruins it.

   ┌──────────────────────────────────────────────┐
   │ SIX OPERATIONS, SIX DIFFERENT GOVERNING      │
   │ REQUIREMENTS, ONE FIXTURE.                   │
   │                                              │
   │ THE FIXTURE MUST SATISFY THE WORST CASE OF   │
   │ EACH — AND OP 10 AND OP 20 PULL IN OPPOSITE  │
   │ DIRECTIONS.                                  │
   │                                              │
   │ THAT CONFLICT IS REAL, NOT FALSE, AND THE    │
   │ STANDARD RESOLUTION IS THE FIFTH FALSE-      │
   │ CONFLICT QUESTION: SEPARATE THEM IN TIME.    │
   │ Clamp hard for OP 10, release and re-clamp   │
   │ lightly before OP 20.                        │
   └──────────────────────────────────────────────┘
```

**When the sub-class changes mid-programme** `[EX-ASSUMED]`:

```
SITUATION
  A part was milled and drilled on a VMC. Volume
  rose; the customer moved it to an HMC.

WHAT THE DESIGNER ASSUMED
  "Same operations, same forces — remount the
   existing fixture on a tombstone."

WHAT ACTUALLY CHANGED
  1 GRAVITY. The part now hangs sideways. The
    existing fixture had no support ledge — its
    base carried the weight.
    → AUTO-FAIL #8.

  2 CHIPS. Previously a problem, now not. The
    elaborate chip shedding was wasted but
    harmless.

  3 CLAMPING. Previously the clamps resisted
    cutting force only; gravity helped seat the
    part. Now the clamps must ALSO carry the
    part's weight before the cut begins.

  4 LOADING. On a pallet, the operator loads at a
    station, not at the machine. Access geometry
    completely different.

OUTCOME
  The part dropped 0.4 mm onto the clamps during
  loading, before any cutting, and the first
  batch was scrapped on position.

┌──────────────────────────────────────────────┐
│ THE SUB-CLASS CHANGED. THE OPERATIONS DID    │
│ NOT.                                         │
│                                              │
│ CLASSIFICATION IS NOT ADMINISTRATIVE. MOVING │
│ BETWEEN SUB-CLASSES CHANGES THE GOVERNING    │
│ LOAD CASE.                                   │
└──────────────────────────────────────────────┘
```

### 10. Design rules
- **R1** — Identify the sub-class **for every operation**, not for the part.
- **R2** — Determine the **governing consideration** for each: force, access or distortion.
- **R3** — Size clamping for the **worst-case operation**, then check the finishing operation separately
  (L1.3.5).
- **R4** — Where roughing and finishing conflict, **separate them in time** — release and re-clamp.
- **R5** — For **drilling, size on torque**, not thrust; provide breakthrough support.
- **R6** — For **tapping, constrain rotation in both directions**.
- **R7** — For **boring, check L/D** and clear the whole bar path, not just the tool tip.
- **R8** — For **reaming, eliminate side load**; the reamer follows, it cannot correct.
- **R9** — On an **HMC, provide a support ledge**; never rely on the base.
- **R10** — For a **rotating part, design against speed first**: centrifugal force, balance, jaw grip
  versus speed `[MFR]`.
- **R11** — For **grinding, minimise clamping strain**; consider magnetic holding, and plan
  demagnetising.
- **R12** — Design **grinding fixtures for thermal stability** and allow warm-up before qualifying.
- **R13** — **Re-derive, do not reuse**, when moving a design between sub-classes.
- **R14** — State the **machine and sub-class on the drawing**; a fixture is not machine-agnostic.

### 11. Rules of thumb
- **"Machining fixture" is a family, not a type.**
- **Ask what will make it fail** — force, access or distortion.
- **Drilling is torque; boring is access; tapping is two-way rotation; reaming is alignment.**
- **Roughing and finishing are opposite problems.**
- **When the part rotates, re-derive everything.**
- **Grinding is strain and heat, not force.**
- **On an HMC, chips fall away and the part wants to.**
- **A pallet changer moves loading outside the cycle** — the largest single utilisation gain available.
- **A magnetically held part must be demagnetised** or it collects swarf forever.
- **Moving between sub-classes changes the governing load case, even when the operations do not change.**

### 12. Formulae

**Centrifugal force on a fixture component**
```
F = m ω² r
ω = 2π N / 60          N in rev/min

[PRACTICE] Apply to EVERY component that rotates,
including clamps, bolts and counterweights.
```

**Balance**
```
[STD] ISO 21940 defines balance quality grades.
Permissible residual unbalance depends on the
grade G, the rotor mass and the speed.

U_per = G · m / ω          (per ISO 21940 form)

THE APPLICABLE GRADE MUST BE CONFIRMED for the
machine, the speed and the application. Do not
assume a grade.
```

**Chuck grip versus speed**
```
F_grip(N) = F_static − F_jaw_centrifugal

[MFR] The manufacturer publishes this curve. It
is specific to the chuck AND the jaws fitted.
NEVER estimate it — a heavier soft jaw reduces
grip at speed more than a standard jaw.
```

**Recalled from Module 1.3**
```
DRILLING   F_thrust ≈ K_f · d · f
           M ≈ K_m · d² · f
TAPPING    M_tap ≈ K_t · d² · P
MILLING    F_t = k_c · a_p · f_z
FRICTION   M_resist = μ · F · r
BORING BAR δ = 64 F L³/(3 E π d_eff⁴),
           d_eff ≈ 0.8 d
```

| Variable | Meaning | Unit |
|---|---|---|
| m | Component mass | kg |
| ω | Angular velocity | rad/s |
| r | Radius to the centre of mass | m |
| N | Rotational speed | rev/min |
| G | Balance quality grade | mm/s |

### 13. Worked numerical example

**Problem:** A part is to be turned in soft jaws on a chuck. Determine whether the arrangement is safe and
capable at the intended speed, and identify which consideration governs.

```
GIVEN:
  PART                                          [PROJ]
    Steel flange, EN8
    Outside diameter        = 180 mm
    Gripped diameter        = 120 mm
    Mass                    = 6.4 kg
    Cutting: facing at 220 m/min surface speed

  CHUCK AND JAWS                             [MFR]/[PROJ]
    3-jaw power chuck, 250 mm
    Static grip at full pressure = 42,000 N total
    Soft jaw mass, each     = 1.35 kg      [PROJ]
    Jaw centre of mass radius = 78 mm      [PROJ]
    Manufacturer's grip-vs-speed curve:
      AVAILABLE, and must be used. For this
      exercise the jaw centrifugal effect is
      calculated directly to show the mechanism.
                                          [EX-ASSUMED]
    Maximum chuck speed, plain jaws = 4,000 rev/min
                                             [MFR]

  CUTTING DATA                              [EX-ASSUMED]
    Facing at Ø180 → speed set for 220 m/min
    Specific cutting force k_c, EN8 = 1,950 N/mm²
                                            [GUIDE]
    Depth of cut a_p        = 2.5 mm
    Feed f                  = 0.25 mm/rev
    Friction coefficient, serrated soft jaws
      on steel, dry         = 0.20           [GUIDE]

  REQUIRED SAFETY FACTOR on grip = 2.0    [PRACTICE]

REQUIRED:
  (a) Spindle speed for 220 m/min at Ø180
  (b) Cutting force and the torque it applies
  (c) Centrifugal loss of grip from the soft jaws
  (d) Net grip available at speed
  (e) Grip required to resist the cutting torque,
      with the safety factor
  (f) Pass/fail, and which consideration governs
  (g) The effect of reducing the speed to
      1,200 rev/min

ASSUMPTION:
  1. THE MANUFACTURER'S GRIP-VERSUS-SPEED CURVE IS
     THE AUTHORITATIVE SOURCE AND MUST BE USED IN
     PRACTICE. The direct calculation here shows
     the MECHANISM; it neglects jaw guideway
     friction and chuck internal geometry, both of
     which the curve includes. [MFR]
  2. Soft jaw mass and centre-of-mass radius are
     project values, measured or taken from the
     model. [PROJ]
  3. k_c of 1,950 N/mm² for EN8 is a guideline
     mid-range value; it varies with feed, rake
     and tool condition. [GUIDE]
  4. μ = 0.20 for serrated jaws dry. COOLANT
     HALVES FRICTION (L1.3) — if coolant reaches
     the jaw interface the figure must be revised
     to approximately 0.10. [GUIDE]
  5. The tangential cutting force is taken as
     acting at the part radius being cut. During
     facing this radius CHANGES, and the torque
     falls as the tool approaches centre. THE
     WORST CASE IS AT THE LARGEST DIAMETER.
     [PROJ]
  6. Three jaws share the grip equally. In
     practice they do not exactly; the curve
     accounts for this. [EX-ASSUMED]

FORMULA:
  N = 1000 v / (π D)
  F_t = k_c · a_p · f
  M_cut = F_t · r_cut
  F_cf,jaw = m ω² r
  F_grip,net = F_static − 3 · F_cf,jaw
  M_hold = μ · F_grip,net · r_grip
  SF = M_hold / M_cut

UNIT CONVERSION:
  Radii mm → m for centrifugal force
  Diameters mm, forces N, torques N·m

SUBSTITUTION AND CALCULATION:

  (a) SPINDLE SPEED
      N = 1000 × 220 / (π × 180)
        = 220,000 / 565.49
        = 389.0 rev/min

      ┌────────────────────────────────────────────┐
      │ NOTE HOW LOW THIS IS. Facing a 180 mm      │
      │ diameter at a sensible surface speed does  │
      │ not require high spindle speed.            │
      │                                            │
      │ THE CENTRIFUGAL PROBLEM IS THEREFORE       │
      │ SMALL HERE — AND THE POINT OF PART (g) IS  │
      │ TO SHOW WHEN IT IS NOT.                    │
      └────────────────────────────────────────────┘

  (b) CUTTING FORCE AND TORQUE
      F_t = k_c · a_p · f
          = 1,950 × 2.5 × 0.25
          = 1,218.75 N

      Worst case at the largest radius:
      r_cut = 0.090 m

      M_cut = 1,218.75 × 0.090
            = 109.69 N·m

  (c) CENTRIFUGAL LOSS FROM THE JAWS
      At N = 389.0 rev/min
      ω = 2π × 389.0/60
        = 40.74 rad/s

      Per jaw:
      F_cf = m ω² r
           = 1.35 × 40.74² × 0.078
           = 1.35 × 1,659.7 × 0.078
           = 174.8 N

      Three jaws:
      Total loss = 3 × 174.8 = 524.3 N

      As a fraction of static grip:
      524.3/42,000 = 1.25 %

      → NEGLIGIBLE AT THIS SPEED.

  (d) NET GRIP
      F_grip,net = 42,000 − 524
                 = 41,476 N

  (e) HOLDING TORQUE AND REQUIRED GRIP
      r_grip = 0.060 m (Ø120 gripped)

      M_hold = μ · F_grip,net · r_grip
             = 0.20 × 41,476 × 0.060
             = 497.7 N·m

      SF = M_hold / M_cut
         = 497.7 / 109.69
         = 4.54

      Against the required 2.0 → PASS with margin.

      Grip required for SF = 2.0:
      M_required = 2.0 × 109.69 = 219.4 N·m
      F_required = 219.4/(0.20 × 0.060)
                 = 18,283 N

      Utilisation of available grip:
      18,283/41,476 = 44.1 %

  (f) WHICH CONSIDERATION GOVERNS?

      Centrifugal loss    1.25 %  → not governing
      Cutting torque      44.1 % of grip → the
                          active constraint
      Speed vs chuck max  389/4,000 = 9.7 % → no

      ┌────────────────────────────────────────────┐
      │ AT THIS SPEED THE ARRANGEMENT IS GOVERNED  │
      │ BY CUTTING TORQUE, EXACTLY LIKE A          │
      │ STATIONARY-PART FIXTURE.                   │
      │                                            │
      │ THAT IS THE CORRECT ANSWER, AND IT IS ALSO │
      │ THE TRAP: IT INVITES THE CONCLUSION THAT   │
      │ TURNING FIXTURES ARE JUST FIXTURES.        │
      └────────────────────────────────────────────┘

      NOW CHECK THE FRICTION ASSUMPTION.
      If coolant reaches the jaw serrations,
      μ → 0.10:
        M_hold = 0.10 × 41,476 × 0.060
               = 248.9 N·m
        SF = 248.9/109.69 = 2.27

      STILL PASSES, but the margin has fallen from
      4.54 to 2.27 — a 50 % reduction from a
      single assumption.

  (g) THE SAME PART AT 3,000 rev/min
      (as it would be for a small-diameter
       operation on the same setup)

      ω = 2π × 3000/60 = 314.16 rad/s

      Per jaw:
      F_cf = 1.35 × 314.16² × 0.078
           = 1.35 × 98,696 × 0.078
           = 10,393 N

      Three jaws: 31,179 N

      As a fraction of static grip:
      31,179/42,000 = 74.2 %

      NET GRIP:
      42,000 − 31,179 = 10,821 N

      ┌────────────────────────────────────────────┐
      │ THE GRIP HAS FALLEN BY 74.2 %.             │
      │                                            │
      │ FROM 42,000 N TO 10,821 N — A FACTOR OF    │
      │ 3.88 — PURELY FROM THE JAWS' OWN MASS.     │
      └────────────────────────────────────────────┘

      Holding torque at μ = 0.20:
        M_hold = 0.20 × 10,821 × 0.060
               = 129.9 N·m
        SF against the SAME cut = 129.9/109.69
           = 1.18

      → FAILS the required 2.0.

      And with coolant, μ = 0.10:
        M_hold = 64.9 N·m
        SF = 0.59

      → THE PART SLIPS. Not marginal — it slips.

      RATIO OF CENTRIFUGAL FORCE, 3,000 vs 389:
        (3000/389)² = 59.5×

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Spindle speed            │ 389.0 rev/min     │
  │ (b) Cutting force            │ 1,218.75 N        │
  │     Cutting torque           │ 109.69 N·m        │
  │ (c) Centrifugal loss, 3 jaws │ 524.3 N = 1.25 %  │
  │ (d) Net grip                 │ 41,476 N          │
  │ (e) Holding torque           │ 497.7 N·m         │
  │     SF                       │ 4.54 ✓            │
  │     Grip utilisation         │ 44.1 %            │
  │ (f) GOVERNING                │ cutting torque    │
  │     With coolant, μ=0.10     │ SF 2.27 (−50 %)   │
  │ (g) At 3,000 rev/min:        │                   │
  │     Centrifugal loss         │ 31,179 N = 74.2 % │
  │     Net grip                 │ 10,821 N (3.88×   │
  │                              │ down)             │
  │     SF dry                   │ 1.18 ✗            │
  │     SF with coolant          │ 0.59 ✗ SLIPS      │
  │     Centrifugal force ratio  │ 59.5×             │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Required 2.0 on grip torque [PRACTICE].
  Achieved 4.54 at 389 rev/min dry; 2.27 with
  coolant; 1.18 at 3,000 rev/min dry; 0.59 at
  3,000 rev/min with coolant.
  THE REQUIRED FACTOR IS MET IN TWO OF FOUR
  CONDITIONS ARISING FROM THE SAME SETUP.

PASS/FAIL:
  ✓ PASS — 389 rev/min, dry, SF 4.54
  ✓ PASS — 389 rev/min, coolant, SF 2.27
  ✗ FAIL — 3,000 rev/min, dry, SF 1.18
  ✗ FAIL — 3,000 rev/min, coolant, SF 0.59 —
    the part slips
  AND: the manufacturer's grip-vs-speed curve
  must be used in place of this calculation for
  any real design decision. [MFR]

ENGINEERING CONCLUSION:
  1. CENTRIFUGAL FORCE SCALES WITH THE SQUARE OF
     SPEED, AND THAT IS THE WHOLE STORY.
     At 389 rev/min the jaws' own centrifugal
     force cost 1.25 % of the grip and could be
     ignored. At 3,000 rev/min — a factor of 7.71
     in speed — it cost 74.2 %, because the force
     rose by 59.5×. THE ARRANGEMENT WENT FROM A
     SAFETY FACTOR OF 4.54 TO A PART THAT SLIPS,
     WITH NO CHANGE TO THE PART, THE CUT OR THE
     CHUCK PRESSURE.
     Nothing in a stationary-part fixture behaves
     like this. It is why turning fixtures are
     designed against speed first.

  2. THE HEAVY SOFT JAW IS THE CULPRIT, AND IT IS
     THE THING PEOPLE ADD WITHOUT THINKING.
     A soft jaw is bored to suit the part, and
     bigger parts get bigger jaws. Each 1.35 kg
     jaw at 78 mm radius generated 10,393 N at
     3,000 rev/min. Fitting jaws twice as heavy
     would double that and take the net grip
     negative — meaning THE JAWS WOULD OPEN
     THEMSELVES.
     THIS IS WHY THE MANUFACTURER'S CURVE IS JAW-
     SPECIFIC AND WHY IT MUST NEVER BE ESTIMATED.

  3. THE FRICTION ASSUMPTION HALVED THE MARGIN ON
     ITS OWN.
     Coolant reaching the jaw serrations takes μ
     from 0.20 to 0.10, and the safety factor from
     4.54 to 2.27. That is a 50 % reduction from
     an assumption nobody writes down. In turning,
     coolant reaching the jaws is not a
     possibility — IT IS THE NORMAL CONDITION.
     I would design to μ = 0.10 unless the jaw
     interface is demonstrably dry.

  4. THE FACING CASE PASSED, AND THAT IS THE TRAP.
     At 389 rev/min the analysis looked exactly
     like a milling fixture calculation: cutting
     torque governed, centrifugal effects were
     negligible, and grip utilisation was 44 %. A
     designer who stopped there would conclude
     that turning fixtures follow the same rules.
     THE SAME SETUP, ASKED TO RUN A SMALL
     DIAMETER AT SENSIBLE SURFACE SPEED, FAILS.
     THE GOVERNING CASE IS NOT THE ONE YOU WERE
     ASKED ABOUT — L1.3's principle 74 again.

  5. WHAT I WOULD ACTUALLY DO.
     Obtain the chuck manufacturer's grip-versus-
     speed curve for the specific jaws fitted,
     establish the maximum speed at which the
     required grip is available with μ = 0.10, and
     PUT THAT SPEED LIMIT ON THE FIXTURE DRAWING
     AND IN THE PROGRAM. A limit that exists only
     in a calculation file will be exceeded the
     first time somebody optimises the cycle time.

SENSITIVITY NOTE:
  Ranked by influence:
    1. SPEED — squared. The single dominant
       variable, and the one an operator or
       programmer can change without consulting
       anybody. 7.71× on speed gave 59.5× on
       force.
    2. JAW MASS AND RADIUS — linear in mass,
       linear in radius. Heavier or taller soft
       jaws degrade grip at speed
       disproportionately, and jaws are changed
       routinely.
    3. FRICTION COEFFICIENT — linear, and it
       halves with coolant. 50 % of the margin.
    4. k_c — linear on cutting force. A 20 %
       variation moves the safety factor by 20 %,
       which matters only in the marginal cases.
    5. GRIPPED DIAMETER — linear on holding
       torque. Gripping at a larger diameter helps
       proportionally, and is often available at
       no cost.
```

### 14. Engineering assumptions
- **The manufacturer's grip-versus-speed curve is authoritative** and must be used for real design
  decisions; the direct calculation shows only the mechanism `[MFR]`.
- Soft jaw mass and centre-of-mass radius are project values, measured or from the model `[PROJ]`.
- k_c = 1,950 N/mm² for EN8 is a guideline mid-range value `[GUIDE]`.
- μ = 0.20 dry serrated jaws; **coolant halves it to ~0.10, and coolant at the jaws is the normal
  condition in turning** `[GUIDE]`.
- The worst-case cutting torque is at the largest diameter; during facing it falls toward centre `[PROJ]`.
- Three jaws assumed to share grip equally; in practice they do not, and the curve accounts for it
  `[EX-ASSUMED]`.

### 15. Diagram

```
     THE MACHINING FIXTURE FAMILY
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  THE THREE STRUCTURAL DIVISIONS

   ┌────────────────────────────────────────────┐
   │ 1  DOES THE PART ROTATE?                   │
   │                                            │
   │    NO  → conventional. Gravity constant.   │
   │    YES → centrifugal force, balance,       │
   │          falling jaw grip.                 │
   │          RE-DERIVE, DO NOT REUSE.          │
   └────────────────────────────────────────────┘
   ┌────────────────────────────────────────────┐
   │ 2  ROUGHING OR FINISHING?                  │
   │                                            │
   │    ROUGH  → force governs, hold it hard    │
   │    FINISH → distortion governs, hold gently│
   │    OPPOSITE PROBLEMS, NOT THE SAME PROBLEM │
   │    WITH DIFFERENT NUMBERS.                 │
   └────────────────────────────────────────────┘
   ┌────────────────────────────────────────────┐
   │ 3  IS THE TOOL GUIDED?                     │
   │                                            │
   │    NO  → fixture; machine positions        │
   │    YES → jig; the bush positions           │
   │    Live for drilling/reaming. Not for      │
   │    milling.                                │
   └────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHAT GOVERNS EACH SUB-CLASS

   FORCE-GOVERNED
     rough milling ████████████████ side load
     slotting      ████████████████████ worst case
     drilling      ██████████ TORQUE (7.1× thrust)
     turning       ████████████ continuous

   ACCESS-GOVERNED
     boring        ▓▓▓▓▓ bar path, L/D
     tapping       ▓▓▓▓▓ two-way anti-rotation
     multi-op      ▓▓▓▓▓ every feature reachable

   DISTORTION-GOVERNED
     finish mill   ░░░░░ clamp force is the enemy
     thin wall     ░░░░░ support, not clamping
     grinding      ░░░░░ strain and heat

   ┌──────────────────────────────────────────────┐
   │ ASK "WHAT WILL MAKE THIS FAIL?" AND THE      │
   │ SUB-CLASS ANSWERS ITSELF.                    │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  VMC vs HMC — THE SAME OPERATIONS, DIFFERENT
  GOVERNING CASE

   VMC                        HMC
        ↓ spindle                  → spindle
    ┌────────┐                ┌────┐
    │ PART   │                │PART│ ← support
    ├────────┤                ├────┤   LEDGE
    │FIXTURE │                │FIX │   MANDATORY
    └────────┘                └────┘
    ══════════ table          ║ tombstone
                              ║
   chips FALL ON IT      chips FALL AWAY
   gravity SEATS part    gravity PULLS IT OUT
   load stops cycle      pallet loads OUTSIDE
                         (80.70 → 99.28 %)

   ┌──────────────────────────────────────────────┐
   │ THE L2.2.3 SWARF RESULT — 4,082 cm³ AGAINST  │
   │ 900 cm³ AVAILABLE, A 4.54× OVERFLOW — WAS A  │
   │ VMC PROBLEM. ON AN HMC IT DOES NOT ARISE.    │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE TURNING RESULT — SPEED SQUARED

   CENTRIFUGAL LOSS OF GRIP, 3 SOFT JAWS

    389 rev/min   █ 524 N          =  1.25 %
   3000 rev/min   ████████████████████████████████
                                31,179 N = 74.2 %

   force ratio = (3000/389)² = 59.5×

   NET GRIP
    389 rev/min   ████████████████████ 41,476 N
   3000 rev/min   █████ 10,821 N        3.88× down

   SAFETY FACTOR AGAINST THE SAME CUT
    389 dry       4.54  ✓
    389 coolant   2.27  ✓   (−50 % from μ alone)
   3000 dry       1.18  ✗
   3000 coolant   0.59  ✗   THE PART SLIPS

   ┌──────────────────────────────────────────────┐
   │ NO CHANGE TO THE PART, THE CUT OR THE CHUCK  │
   │ PRESSURE. ONLY THE SPEED.                    │
   │                                              │
   │ NOTHING IN A STATIONARY-PART FIXTURE BEHAVES │
   │ LIKE THIS.                                   │
   │                                              │
   │ HEAVIER SOFT JAWS WOULD TAKE THE NET GRIP    │
   │ NEGATIVE — THE JAWS WOULD OPEN THEMSELVES.   │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  GRINDING — THE OTHER EXCEPTION

   force is TINY (tens of newtons)
   ↓
   so clamping hard enough to resist it
   OVER-CONSTRAINS AND DISTORTS
   ↓
   part is ground flat WHILE STRAINED
   ↓
   released → springs → NOT FLAT

   ┌──────────────────────────────────────────────┐
   │ LOW-STRAIN HOLDING IS NOT A REFINEMENT.      │
   │ IT IS THE WHOLE PROBLEM.                     │
   │                                              │
   │ Magnetic chucks exist for exactly this — but │
   │ the part must be ferromagnetic, and it MUST  │
   │ BE DEMAGNETISED afterwards or it collects    │
   │ swarf for the rest of its life.              │
   │                                              │
   │ Plus: heat (0.02-0.10 mm/shift drift) and    │
   │ abrasive suspended in the coolant.           │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-9200 — TURNING FIXTURE
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: MAXIMUM SPINDLE SPEED 1,200 REV/MIN WITH
        THIS FIXTURE AND JAW SET. THIS LIMIT IS
        SET BY GRIP AVAILABLE AT SPEED, NOT BY THE
        CHUCK RATING. SEE CALCULATION FILE
        CF-9200-03.

NOTE 2: JAWS ITEM 3 SHALL NOT BE SUBSTITUTED. GRIP
        AT SPEED IS SPECIFIC TO JAW MASS. ANY JAW
        CHANGE REQUIRES RE-CALCULATION.

NOTE 3: BALANCE TO ISO 21940, GRADE TO BE
        CONFIRMED WITH THE MACHINE BUILDER.

NOTE 4: NO COMPONENT SHALL PROJECT BEYOND Ø260.
```

`[PRACTICE]` **Notes 1 and 2 together are the important pair.** A speed limit without the jaw restriction
is meaningless, because the next person to fit heavier soft jaws invalidates it silently. **The limit and
the reason for the limit must both appear**, because a limit whose reason is unknown gets ignored the
first time somebody optimises the cycle.

### 17. CAD workflow
1. **List every operation** and tag each with its sub-class and governing consideration
2. Model the **worst-case tool and holder** for each operation, not the nominal tool
3. **Sweep the full tool path** for each — programmed path is not swept path (principle 47)
4. For a rotating fixture, extract **mass properties including the centre of mass of every component**
5. Check **balance** in the CAD mass-properties tool as an early indicator; confirm by measurement
6. For an HMC, model the fixture in the **horizontal orientation** and check the support ledge carries
   the weight
7. Model **chip fall paths** for a VMC; verify they exist
8. For grinding, model the **wheel and its spindle nose**, which is often the governing obstruction

`[PRACTICE]` Step 4 is routinely skipped because CAD reports mass properties for the assembly, and the
assembly's centre of mass looks fine. **The centrifugal risk is per-component**, and a well-balanced
assembly can still throw a clamp.

### 18. GD&T application
The sub-class changes what the fixture must control:

```
  STANDARD: ASME Y14.5-2018

  MILLING / DRILLING FIXTURE
    Controls the part's POSITION relative to the
    machine's coordinate system.
    → locator positions toleranced tightly
    → datum features on the fixture correspond to
      the part's datum features

  TURNING FIXTURE
    Controls the part's CONCENTRICITY and
    PERPENDICULARITY to the spindle axis.
    → runout is the characteristic of interest
    → a position tolerance on a locator is less
      useful than a runout tolerance on the
      mounting register

  ┌────────────────────────────────────────────┐
  │ THE CHARACTERISTIC THAT MATTERS CHANGES    │
  │ WITH THE SUB-CLASS.                        │
  │                                            │
  │ A turning fixture toleranced with position  │
  │ callouts, as if it were a milling fixture, │
  │ leaves runout uncontrolled — AND RUNOUT IS │
  │ WHAT THE PART WILL INHERIT.                │
  └────────────────────────────────────────────┘

  GRINDING FIXTURE
    Controls FLATNESS and PARALLELISM of the
    mounting face, to tolerances an order finer
    than a milling fixture, because the part
    inherits them directly.

  Full treatment of datum selection at Level 10;
  runout and profile at Level 11.
```

### 19. Manufacturing method
| Sub-class | Manufacturing consequence |
|---|---|
| **Milling / drilling** | Conventional: machine soft, harden locators, grind (L0.5.3) |
| **HMC tombstone** | Large, heavy; stress-relieve after welding or rough machining |
| **Turning** | **Must be balanced**; machine the mounting register in place if possible |
| **Grinding** | Mounting face ground, not milled; thermal stability favours cast iron |
| **Boring** | Nothing in the bar path — check before finalising the base plate |

> **"Machine the mounting register in place"** is the turning-specific practice worth noting. `[PRACTICE]`
> A fixture mounted on a chuck or faceplate and then final-machined **while mounted** inherits that
> spindle's axis exactly, eliminating the mounting error entirely. It is the single most effective
> accuracy measure available for turning fixtures, and it costs almost nothing.

### 20. Inspection method
| Sub-class | Check | Method | Acceptance `[PROJ]` |
|---|---|---|---|
| All | Locator positions | CMM | Per drawing |
| All | Repeatability | 10-cycle study | Within allocation |
| HMC | Support ledge carries weight | Load the part, indicate | No settling |
| Turning | Runout of the part register | Indicator, spindle rotated | Per drawing |
| Turning | **Balance** | Balancing machine `[STD]` ISO 21940 | Grade as confirmed |
| Turning | Grip at working speed | Grip meter, or manufacturer's curve `[MFR]` | ≥ required with SF |
| Grinding | Mounting face flatness | Surface plate, indicator | Per drawing |
| Grinding | Thermal drift | Indicate over a shift | Within budget |
| Boring | Bar path clear | Physical sweep with the actual bar | No contact |

`[PRACTICE]` **"Physical sweep with the actual bar" is not redundant with the CAD check.** The CAD model
has the nominal bar; the shop has the one with a coolant fitting on the side of it.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Treating **"machining fixture" as one type** | Grinding fixture sized for force |
| 2 | Reusing a **stationary-part design** for a rotating one | Centrifugal failure |
| 3 | **Estimating grip at speed** instead of using the manufacturer's curve | Part slips |
| 4 | Substituting **heavier soft jaws** without recalculating | Grip silently lost |
| 5 | Sizing drilling on **thrust** | Auto-fail #13 |
| 6 | **Single-direction anti-rotation** for tapping | Auto-fail #14 |
| 7 | **No support ledge** on an HMC | Auto-fail #8 |
| 8 | Clamping a **grinding part** hard | Release distortion |
| 9 | Not **demagnetising** after magnetic holding | Part collects swarf permanently |
| 10 | Checking the **tool tip** clearance, not the bar or holder | Collision |
| 11 | Applying **side load to a reamer** | Bell-mouthed or oversize hole |
| 12 | Assuming **coolant does not reach** the jaw interface | μ halves; margin halves |
| 13 | A **speed limit without a reason** on the drawing | Ignored during optimisation |
| 14 | Balancing the **assembly** but not checking per-component centrifugal force | A clamp departs |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Part slips in a chuck at speed | Centrifugal grip loss | Check the manufacturer's curve at that speed | Reduce speed, lighter jaws, grip larger diameter | Speed limit on the drawing |
| Vibration at speed | Unbalance | Balance measurement | Balance to grade | ISO 21940 requirement at design |
| Ground surface not flat after release | Clamping strain | Measure before and after release | Low-strain or magnetic holding | Design rule R11 |
| Ground part collects swarf | Not demagnetised | Test with a paper clip | Demagnetise | Add to the process sheet |
| Reamed hole oversize | Side load or misalignment | Check location repeatability | Eliminate side load | Design rule R8 |
| Part rotates during tapping | Anti-rotation one direction only | Observe reversal | Add opposite-direction constraint | Auto-fail #14 |
| Part settles during HMC loading | No support ledge | Indicate during loading | Add the ledge | Auto-fail #8 |
| Boring bar collision | Only the tip was checked | Sweep the actual bar | Relieve the obstruction | Design rule R7 |
| Finishing pass out of tolerance | Roughing clamp force printed through | Measure with and without clamping | Release and re-clamp | L1.3.5 |

### 23. Design checklist
- [ ] Has the **sub-class been identified for every operation**, not for the part?
- [ ] Is the **governing consideration** stated for each — force, access or distortion?
- [ ] Does the **part rotate**? If so, has everything been re-derived?
- [ ] For a rotating fixture: **centrifugal force per component**, balance, grip versus speed `[MFR]`?
- [ ] Is there a **speed limit on the drawing, with its reason**?
- [ ] Are the **jaws restricted from substitution**?
- [ ] Do **roughing and finishing** conflict, and has that been resolved in time?
- [ ] For drilling: **torque**, breakthrough support?
- [ ] For tapping: **both rotational directions**?
- [ ] For boring: **L/D checked**, whole bar path clear?
- [ ] For reaming: **no side load**?
- [ ] For an HMC: **support ledge**?
- [ ] For grinding: **low strain**, thermal stability, demagnetising?
- [ ] Are chip paths verified for a **VMC** layout?

### 24. Beginner exercise
**E3.1.1-B** — For each operation, state the machining sub-class, the governing consideration (force,
access or distortion), and the single most important design requirement:
(a) Slotting a 20 mm wide × 40 mm deep pocket in mild steel.
(b) Tapping M16 × 2 blind holes.
(c) Finish grinding a 200 × 150 mm face to 0.005 mm flatness.
(d) Boring a Ø45 hole 220 mm deep.
(e) Facing a 250 mm diameter flange in a chuck.
(f) Reaming Ø10H7 after drilling Ø9.8.

### 25. Intermediate exercise
**E3.1.1-I** — A steel part of mass 4.2 kg is gripped at Ø90 in a 3-jaw chuck with a static grip of
36,000 N. Soft jaws are 1.1 kg each with a centre of mass at 72 mm radius. The operation is turning at
Ø140 with k_c = 1,800 N/mm², a_p = 2.0 mm, f = 0.22 mm/rev, at a surface speed of 180 m/min. Required
safety factor 2.0.
(a) Calculate the spindle speed.
(b) Calculate the cutting force and torque at the largest diameter.
(c) Calculate the centrifugal loss of grip from the three jaws and express it as a percentage.
(d) Calculate the net grip and the holding torque at μ = 0.20.
(e) Calculate the safety factor and state pass or fail.
(f) Repeat (c) to (e) at 2,500 rev/min and state the maximum speed at which the safety factor of 2.0 is
still met with μ = 0.10.
(g) State what you would put on the drawing as a result.

### 26. Advanced exercise
**E3.1.1-A** — A cast iron housing (7.8 kg, 210 × 160 × 140 mm) requires: rough and finish mill a face,
drill and tap 10 × M12, bore Ø75H7 × 130 mm deep, ream 2 × Ø16H7, and finish grind the milled face to
0.008 mm flatness. Volume 4,000/yr, 5-year programme. A VMC and an HMC are both available; the HMC has a
pallet changer. `[EX-ASSUMED]` Assume reasonable cutting data and state every assumption.
(i) Tabulate every operation with its sub-class, governing consideration and the specific design
requirement it imposes.
(ii) Identify which operations conflict with each other and classify each conflict using the L2.2.6
method.
(iii) Determine whether the grinding operation can share a fixture with the machining operations, and
justify your answer in terms of strain, thermal behaviour and abrasive contamination.
(iv) Calculate the swarf volume produced by the roughing operation and assess it against a VMC layout and
an HMC layout.
(v) Determine the boring bar L/D and state whether a steel bar is acceptable.
(vi) Calculate the drilling torque and the anti-rotation requirement.
(vii) Recommend VMC or HMC, with the capacity check and the economics.
(viii) State how many fixtures the part requires in total, and why.
(ix) Identify which of the twenty-four auto-fail items this part most invites, and how you avoid each.
(x) Write the four most important drawing notes for your chosen fixture.

### 27. Interview questions
1. *"What is the difference between a milling fixture and a turning fixture?"*
   **Answer:** The part rotates, and that changes what governs the design. On a milling fixture gravity is
   constant and the clamping resists cutting force. On a turning fixture every component experiences
   centrifugal force proportional to the square of the speed, the chuck's own grip falls as speed rises
   because the jaws' mass works against the clamping, and the whole assembly has to be balanced or it
   loads the spindle bearings and becomes dangerous. In the case we worked, the same setup had a safety
   factor of 4.54 at 389 rev/min and 0.59 at 3,000 rev/min with coolant — the part slips, with no change
   to the part, the cut or the chuck pressure. So a turning fixture is designed against speed first and
   cutting force second, which is the reverse of every other machining sub-class. Practically that means
   getting the manufacturer's grip-versus-speed curve for the specific jaws fitted, putting a speed limit
   on the drawing with its reason, and forbidding jaw substitution.
2. *"Why do grinding fixtures use magnetic chucks?"*
   **Answer:** Because the grinding force is tiny — tens of newtons — but the tolerances are micrometres,
   so if you clamp hard enough to be comfortable about holding the part, you have distorted it far beyond
   what the tolerance allows. The part gets ground flat while it is strained, and when you release it, it
   springs and the ground surface is no longer flat. A magnetic chuck spreads the holding over the whole
   contact area with almost no local strain, which is exactly what the problem needs. It brings two
   consequences with it though: the part has to be ferromagnetic, which rules out aluminium and
   austenitic stainless, and it has to be demagnetised afterwards or it will collect swarf for the rest
   of its life. And magnetic holding does nothing about the other two grinding problems, which are heat
   — thermal drift of a few hundredths of a millimetre over a shift is catastrophic at these tolerances —
   and the fine abrasive suspended in the coolant getting into every clearance.

### 28. Expert questions
1. *"You say re-derive rather than reuse when the part rotates. What specifically do you re-derive, and
   what carries over unchanged?"*
   **Answer:** The useful way to answer this is to sort the Level 1 and 2 results by whether they depend
   on the reference frame being inertial.
   **What carries over unchanged** is everything geometric. **Determinacy is untouched** — 3-2-1 is a
   statement about constraint, and it does not care whether the assembly is spinning. Repeatability,
   accuracy and the distinction between them carry over. The tolerance allocation logic carries over.
   The gates hierarchy carries over. So does the whole of the metrology: bias is still correctable and
   scatter still is not.
   **What must be re-derived is everything involving force.** In a rotating frame every mass generates a
   force proportional to ω²r, and that force is **not** a disturbance to be resisted like a cutting force
   — it acts on the fixture's own components, including the ones doing the clamping. That is the part
   people miss. A milling fixture's clamp is a device that applies force; a chuck jaw at speed is
   **simultaneously** a device that applies force and a mass that is trying to reduce it. **The
   clamping element becomes part of the load case.** In the worked example the three jaws destroyed 74 %
   of their own grip at 3,000 rev/min.
   Then there are things with **no analogue at all** in the stationary case. **Balance** is one: an
   unbalanced milling fixture is simply a heavy milling fixture, whereas an unbalanced turning fixture
   generates a rotating force that fatigues spindle bearings. **Projection** is another: a clamp handle
   sticking out of a milling fixture is an ergonomic question, and the same handle on a rotating fixture
   is a strike hazard and a balance defect.
   And one thing **inverts**. On a milling fixture, adding mass to a clamp generally helps — it damps
   vibration and it is stiffer. On a turning fixture, **adding mass to a clamp actively reduces the
   clamping it provides.** Every instinct that says "make it more substantial" is wrong.
   So my practical rule is: **carry over the geometry, re-derive the statics, and add balance and
   projection as new gates.** And be sceptical of any number in the file that was calculated for a
   stationary part, because the ones that look most transferable — clamp force, friction, safety factor
   — are exactly the ones that are not.
2. *"The facing case in the worked example passed comfortably. Was the analysis therefore a waste of
   time?"*
   **Answer:** No, and I think the question is worth taking seriously because it describes how a lot of
   analysis actually gets abandoned in practice — it passes, so next time nobody bothers.
   **The analysis produced three things beyond the pass.**
   First, it produced **the location of the boundary**. Knowing the arrangement passes at 389 rev/min is
   almost useless on its own. Knowing that it fails somewhere between 389 and 3,000 rev/min, and being
   able to solve for where, converts a single verified condition into **a rule that covers every
   condition** the setup will meet. That rule goes on the drawing as a speed limit, and it is the actual
   deliverable.
   Second, it **identified which assumption the answer is hostage to**. The friction coefficient halved
   the margin on its own — 4.54 to 2.27 — from a change that is not a fault condition but the *normal*
   state of a turning operation with coolant on. A pass calculated at μ = 0.20 is a pass under conditions
   that will rarely exist. **The analysis is what surfaced that**, and the correct response is to redo
   the design case at 0.10 rather than to record the pass.
   Third — and this is the one that matters most — it **prevented the wrong generalisation**. At 389
   rev/min the numbers look exactly like a milling fixture: cutting torque governs, grip utilisation is
   44 %, centrifugal effects round to nothing. A designer who ran only that case would reasonably
   conclude that turning fixtures follow familiar rules and would carry that belief into the next job,
   where the diameter is smaller, the speed is higher and the conclusion is false. **A calculation that
   passes can still teach the wrong lesson if you only run the case you were asked about.**
   That connects to principle 74 from Level 1: **the governing case is often the one nobody has a number
   for.** Nobody asked about 3,000 rev/min. The operation list said facing at 220 m/min. But the same
   chuck, jaws and part will be asked to run a Ø30 boss at a sensible surface speed at some point, and
   the setup that was signed off will be the one running.
   So the value of the analysis was not the pass. **It was the boundary, the exposed assumption, and the
   generalisation it stopped.** If it had only produced the pass, the criticism would be fair.

### 29. Summary
"Machining fixture" names a family whose members share almost no design drivers: a roughing mill fixture
is governed by force in the thousands of newtons and fails by the part moving, while a grinding fixture
sees tens of newtons and fails by thermal drift and release distortion. The productive question is not
what the operation is called but what will make it fail — force, access or distortion — and the
sub-class answers itself. Three structural divisions organise the family. The sharpest is whether the
part rotates: when it does, centrifugal force appears on every component, the chuck's own grip falls
because the jaws' mass opposes the clamping, balance becomes a safety requirement and projections become
hazards, so the design is made against speed first and cutting force second — the reverse of every other
sub-class. The second division is roughing against finishing, which are opposite problems rather than the
same problem with different numbers, as L1.3.5's empty clamp window showed. The third is whether the tool
is guided, which is live for drilling and reaming and settles fixture against jig. Within the stationary
sub-classes, drilling is governed by torque rather than thrust, boring by the bar path and L/D, tapping
by two-direction anti-rotation, reaming by the absence of side load, and an HMC differs from a VMC in
that gravity pulls the part out so a support ledge is mandatory, while chips fall away so the 4.54× swarf
overflow of a VMC layout does not arise. The worked turning example showed the same setup achieving a
safety factor of 4.54 at 389 rev/min and 0.59 at 3,000 rev/min with coolant — the part slips — because
centrifugal force scales with the square of speed, giving a 59.5× increase, and the three soft jaws
destroyed 74.2% of their own grip.

### 30. Key takeaways
- **"Machining fixture" is a family, not a type.** A grinding fixture and a roughing fixture share almost
  nothing.
- **Ask what will make it fail** — force, access or distortion — and the sub-class answers itself.
- **The sharpest division is whether the part rotates.** Carry over the geometry; re-derive the statics.
- **A rotating clamping element is simultaneously a device applying force and a mass reducing it.**
- **Centrifugal force goes as speed squared** — 7.71× on speed gave 59.5× on force and took the safety
  factor from 4.54 to 0.59.
- **Never estimate grip at speed**; the manufacturer's curve is jaw-specific `[MFR]`.
- **Put the speed limit AND its reason on the drawing**, and forbid jaw substitution.
- **On a turning fixture, adding mass to a clamp reduces the clamping it provides** — every "make it more
  substantial" instinct is wrong.
- **Balance and projection are new gates** with no stationary analogue `[STD]` ISO 21940.
- **Roughing and finishing are opposite problems**; separate them in time.
- **Drilling is torque, boring is access, tapping is two-way rotation, reaming is alignment.**
- **An HMC's chip behaviour is a design advantage**, and its support ledge is mandatory.
- **Grinding is governed by strain and heat.** Low-strain holding is the whole problem, and a magnetically
  held part must be demagnetised.
- **Machine a turning fixture's register in place** — the cheapest accuracy available.
- **Moving between sub-classes changes the governing load case even when the operations do not change.**

---

## LESSON L3.1.2 — JOINING FIXTURES

### 1. Lesson title
**L3.1.2 — The joining fixture family: welding (MIG/TIG/spot/projection/arc), brazing, riveting, adhesive**

### 2. Learning objective
By the end of this lesson you will be able to explain why a welding fixture obeys different rules from a
machining fixture, describe how heat input causes distortion and what the fixture can and cannot do about
it, distinguish the requirements of MIG, TIG, spot, projection and arc processes, state the special
requirements of brazing, riveting and adhesive fixtures, and identify what a joining fixture must
tolerate that a machining fixture never sees.

### 3. Prerequisites
L0.3 (materials and thermal expansion), L2.2.1 (determinacy), L2.2.3 (access), L2.2.4 (safety),
L3.1.1 (the machining family, for contrast).

### 4. Why the topic matters
**Everything a machining fixture relies on, a welding fixture loses.**

```
   WHAT A MACHINING FIXTURE ASSUMES

   ✔ ONE part, already made
   ✔ The part is RIGID
   ✔ Forces are MECHANICAL and predictable
   ✔ The part's SHAPE DOES NOT CHANGE
   ✔ Temperature is roughly constant
   ✔ The fixture is not attacked by the process

   WHAT A WELDING FIXTURE FACES

   ✗ SEVERAL parts that must be held in relation
     to each other
   ✗ Parts that are often thin and floppy
   ✗ Forces that are THERMAL, and larger than any
     clamp
   ✗ A part whose shape CHANGES DURING the
     operation
   ✗ Temperatures of hundreds of degrees, unevenly
   ✗ Spatter, arc strike, heat and weld metal
     attacking the fixture itself

   ┌──────────────────────────────────────────────┐
   │ THIS IS NOT A HARDER VERSION OF THE SAME     │
   │ PROBLEM. IT IS A DIFFERENT PROBLEM.          │
   │                                              │
   │ THE MOST IMPORTANT SENTENCE IN THIS LESSON:  │
   │ A WELDING FIXTURE CANNOT PREVENT DISTORTION. │
   │ IT CAN ONLY CONTROL WHERE IT GOES.           │
   └──────────────────────────────────────────────┘
```

### 5. Simple explanation

```
   WHAT A WELDING FIXTURE ACTUALLY DOES

   1 HOLDS SEVERAL PARTS IN THE RIGHT RELATIVE
     POSITION while they are joined
       → the assembly, not the part, is located

   2 RESISTS the distortion forces as far as it
     usefully can
       → and accepts that it cannot win

   3 DIRECTS the residual distortion into a
     tolerable direction or a non-critical feature
       → THIS IS THE REAL SKILL

   4 GIVES ACCESS for the torch, electrode or gun
     at every joint, at a workable angle
       → access is usually the governing constraint

   5 SURVIVES the process
       → spatter, heat, arc strike, and being
         dropped on

   ┌──────────────────────────────────────────────┐
   │ NOTE WHAT IS NOT ON THE LIST: RESISTING      │
   │ CUTTING FORCE. THERE ISN'T ANY.              │
   └──────────────────────────────────────────────┘
```

### 6. Engineering explanation

**WHY WELDING DISTORTS, AND WHY CLAMPING CANNOT STOP IT**

```
   THE MECHANISM

   1 A small region is heated to melting;
     everything around it stays cool.
   2 The hot region tries to expand. THE COLD
     SURROUNDING METAL PREVENTS IT.
   3 Prevented from expanding, the hot metal
     YIELDS IN COMPRESSION — it is soft, so this
     takes very little stress.
   4 It cools. Now it tries to contract, and it
     has less material than it started with in
     that direction.
   5 IT PULLS. Everything around it moves toward
     the weld.

   ┌──────────────────────────────────────────────┐
   │ THE KEY STEP IS 3. THE METAL IS PERMANENTLY  │
   │ SHORTENED WHILE IT IS HOT AND SOFT.          │
   │                                              │
   │ THE CONTRACTION IN STEP 5 IS THEREFORE NOT   │
   │ REVERSIBLE. IT IS NOT ELASTIC. NO AMOUNT OF  │
   │ CLAMPING PREVENTS IT — CLAMPING HARDER JUST  │
   │ MEANS MORE COMPRESSIVE YIELDING IN STEP 3,   │
   │ WHICH MEANS MORE CONTRACTION LATER.          │
   └──────────────────────────────────────────────┘
```

`[GUIDE]` **The forces involved.** A rough sense of scale is essential, and the reasoning is simple:

```
   IF a bar of steel is heated and PREVENTED from
   expanding, the stress developed is

     σ = E · α · ΔT

   With E = 200 GPa and α ≈ 12 × 10⁻⁶ /°C [GUIDE]
   a temperature rise of just 100 °C gives

     σ = 200,000 × 12e-6 × 100
       = 240 N/mm²

   WHICH IS AT OR ABOVE THE YIELD STRESS OF MILD
   STEEL.

   ┌──────────────────────────────────────────────┐
   │ A 100 °C RISE IS ENOUGH TO YIELD MILD STEEL  │
   │ IF EXPANSION IS FULLY PREVENTED.             │
   │                                              │
   │ A WELD POOL IS AT ~1,500 °C.                 │
   │                                              │
   │ THIS IS WHY "CLAMP IT HARDER" IS NOT AN      │
   │ ENGINEERING ANSWER TO WELD DISTORTION.       │
   └──────────────────────────────────────────────┘
```

**THE THREE DISTORTIONS**

`[GUIDE]`

| Distortion | Description | Fixture's role |
|---|---|---|
| **Transverse shrinkage** | The joint pulls together across the weld | Set gap allowing for it; restrain lightly |
| **Longitudinal shrinkage** | The joint shortens along its length | Usually small; allow for it in the setting |
| **Angular distortion** | The joint folds, because the weld is wider at the top | **Pre-set in the opposite direction** |

```
   ANGULAR DISTORTION AND PRE-SETTING

   A fillet or V weld deposits more metal at the
   top than the root, so it contracts more at the
   top and the joint FOLDS UP.

     BEFORE           AFTER (free)
     ────┬────        ────┐
         │                 ╲
         │                  ╲

   PRE-SETTING: set the parts folded the OTHER
   WAY by the amount you expect, so the
   distortion brings them to nominal.

     PRE-SET          AFTER WELD
     ────┐            ────┬────
          ╲               │
           ╲              │

   ┌──────────────────────────────────────────────┐
   │ PRE-SETTING IS THE CHARACTERISTIC WELDING    │
   │ FIXTURE TECHNIQUE AND IT HAS NO ANALOGUE     │
   │ ANYWHERE IN MACHINING.                       │
   │                                              │
   │ THE AMOUNT MUST BE ESTABLISHED BY TRIAL FOR  │
   │ THE SPECIFIC JOINT, MATERIAL, THICKNESS AND  │
   │ WELD PROCEDURE. THERE IS NO GENERAL FORMULA  │
   │ THAT CAN BE TRUSTED — AND THIS IS EXACTLY    │
   │ THE KIND OF VALUE THAT MUST NEVER BE         │
   │ INVENTED.                                    │
   └──────────────────────────────────────────────┘
```

**THE PROCESS SUB-CLASSES**

| Process | Heat input | What the fixture must provide | Special issue |
|---|---|---|---|
| **MIG / MAG (GMAW)** | High, fast | Torch access at ~15° from vertical `[GUIDE]`; spatter tolerance | **Spatter** sticks to everything |
| **TIG (GTAW)** | Lower, slower, precise | Very close torch access; often filler-hand access too | Tungsten contamination; **gas shielding must not be disturbed** |
| **Spot welding (RSW)** | Very localised | **Access for BOTH electrodes**, opposed | The gun geometry dominates the design |
| **Projection welding** | Localised at projections | Precise part-to-part pressure and alignment | Electrode force is large — the fixture is in the load path |
| **Arc / MMA (SMAW)** | High, manual | Generous access; electrode length changes | Slag; the operator's visibility |
| **Brazing** | Whole-joint, furnace or torch | **Holds parts through a heating cycle**, often unattended | Fixture goes into the furnace too |
| **Riveting** | None | Resists the setting force; supports the far side | **Large mechanical force**, like machining |
| **Adhesive** | Usually none | Maintains the bond line gap and holds during cure | **Cure time dominates the cycle** |

```
   THE SPOT WELDING SPECIAL CASE

   A resistance spot weld needs TWO electrodes
   pressing from OPPOSITE SIDES.

        ▼ electrode
     ═══════════   part A
     ═══════════   part B
        ▲ electrode

   THE FIXTURE MUST NOT BE BETWEEN THEM.

   ┌──────────────────────────────────────────────┐
   │ THIS IS THE MOST SEVERE ACCESS CONSTRAINT IN │
   │ THE WHOLE OF FIXTURE DESIGN.                 │
   │                                              │
   │ At every weld point there must be a clear    │
   │ path for a gun arm on BOTH sides, and the    │
   │ gun's throat depth and arm geometry are      │
   │ fixed hardware you cannot change.            │
   │                                              │
   │ ON A SPOT WELDING FIXTURE, ACCESS IS NOT ONE │
   │ OBJECTIVE AMONG FOURTEEN. IT IS USUALLY THE  │
   │ GOVERNING CONSTRAINT, AND THE LOCATING       │
   │ SCHEME IS DESIGNED AROUND IT.                │
   └──────────────────────────────────────────────┘

   ALSO: THE FIXTURE MUST NOT SHUNT THE CURRENT.
   A conductive fixture touching both parts near
   the weld provides an alternative current path
   and the weld does not form properly.
   → INSULATING INSERTS, OR KEEP THE FIXTURE AWAY
     FROM THE WELD ZONE. [PRACTICE]
```

**WHAT ATTACKS A WELDING FIXTURE**

`[PRACTICE]`

```
   SPATTER
     Molten metal droplets that weld themselves to
     any surface they land on. A spattered locator
     is a locator in the wrong place.
     → ANTI-SPATTER COATINGS, sacrificial shields,
       and locators positioned away from the arc
     → LOCATORS SHOULD BE REPLACEABLE. They are
       consumable in a way machining locators are
       not.

   HEAT
     The fixture itself heats up over a shift.
     Repeated heating and cooling cycles it
     thermally, and it grows.
     → thermal expansion of the FIXTURE now
       matters, which it rarely does in machining

   ARC STRIKE
     Accidentally striking the arc on the fixture
     damages it and can harden the surface.
     → keep conductive fixture surfaces away from
       the torch path

   MECHANICAL ABUSE
     Weld shops are harder on tooling than machine
     shops. Assemblies get levered, hammered and
     dropped into place.
     → ROBUSTNESS IS A REAL REQUIREMENT
```

**BRAZING, RIVETING AND ADHESIVE — THE THREE OUTLIERS**

```
   BRAZING FIXTURE
     Often goes INTO A FURNACE with the assembly.
     → the fixture material must survive the
       brazing temperature and not contaminate the
       joint
     → differential expansion between fixture and
       part over hundreds of degrees becomes a
       PRIMARY design consideration
     → clamping must accommodate the expansion, so
       SPRING LOADING is common rather than rigid
       clamping
     → mass matters: a heavy fixture slows the
       heating cycle and costs furnace time

   RIVETING FIXTURE
     The one joining process with LARGE MECHANICAL
     FORCES and no significant heat.
     → behaves much more like a machining fixture
     → must SUPPORT THE FAR SIDE of the rivet
       directly, or the panel deforms
     → the setting force passes THROUGH the
       fixture

   ADHESIVE FIXTURE
     → the bond line GAP is a dimension to be held,
       often to tight tolerance
     → the fixture must hold the assembly for the
       full CURE TIME, which may be hours
     → THEREFORE THE FIXTURE IS OCCUPIED FOR THE
       CURE, and cycle time is dominated by
       fixture availability, not by the operation
     → cheap, numerous fixtures often beat one
       good one — THE OPPOSITE OF THE USUAL
       ECONOMICS

   ┌──────────────────────────────────────────────┐
   │ THE ADHESIVE CASE IS WORTH DWELLING ON. IT   │
   │ IS THE ONE PROCESS WHERE THE CORRECT ANSWER  │
   │ MAY BE TWENTY SIMPLE FIXTURES RATHER THAN    │
   │ ONE EXCELLENT ONE, BECAUSE THE CONSTRAINT IS │
   │ OCCUPANCY TIME.                              │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **MIG / MAG (GMAW)** | Gas metal arc welding, continuous wire electrode |
| **TIG (GTAW)** | Gas tungsten arc welding, non-consumable electrode |
| **MMA / SMAW** | Manual metal arc, coated stick electrode |
| **RSW** | Resistance spot welding, two opposed electrodes |
| **Projection welding** | Resistance welding localised at pressed projections |
| **Spatter** | Molten droplets ejected from the arc |
| **Arc strike** | Accidental arcing onto a surface other than the joint |
| **Pre-setting** | Positioning parts deliberately off-nominal so distortion brings them to nominal |
| **Transverse shrinkage** | Contraction across a weld |
| **Longitudinal shrinkage** | Contraction along a weld |
| **Angular distortion** | Folding of a joint due to uneven contraction through thickness |
| **Tack weld** | A small weld holding parts before full welding |
| **Weld sequence** | The order in which welds are made — a distortion control tool |
| **Shunting** | Current taking an unintended path, weakening a resistance weld |
| **Bond line** | The adhesive layer thickness |
| **Fit-up** | The relative position and gap of parts before welding |

### 8. Principle

> **A WELDING FIXTURE CANNOT PREVENT DISTORTION. IT CAN ONLY CONTROL WHERE IT GOES.**
> **CLAMPING HARDER MAKES DISTORTION WORSE, NOT BETTER** — more restraint means more compressive yielding
> while hot, and therefore more contraction on cooling.
> **A 100 °C RISE FULLY RESTRAINED YIELDS MILD STEEL.** A weld pool is at 1,500 °C. No clamp competes with
> that.
> **A JOINING FIXTURE LOCATES AN ASSEMBLY, NOT A PART** — the relationship between components is the
> output.
> **PRE-SETTING IS THE CHARACTERISTIC TECHNIQUE**, and the amount must be established by trial, never
> assumed.
> **WELD SEQUENCE IS A DESIGN VARIABLE** as much as the fixture geometry is.
> **ON A SPOT WELDING FIXTURE, ACCESS FOR BOTH ELECTRODES USUALLY GOVERNS EVERYTHING ELSE.**
> **LOCATORS ARE CONSUMABLE** in a welding fixture in a way they never are in machining.

### 9. Industrial application

**Weld sequence as a distortion control** `[PRACTICE]`

```
   THE SAME FOUR WELDS, TWO SEQUENCES

   SEQUENCE A — "logical" order
     1 ──── 2 ──── 3 ──── 4
     All shrinkage accumulates in one direction.
     The assembly bows.

   SEQUENCE B — balanced
     1 ──── 3 ──── 4 ──── 2
     Welds are placed to oppose each other's pull.
     BACKSTEP and SKIP techniques do the same
     thing at a smaller scale.

   ┌──────────────────────────────────────────────┐
   │ THE FIXTURE DESIGNER MUST KNOW THE SEQUENCE, │
   │ BECAUSE THE CLAMPING MUST STILL BE           │
   │ ACCESSIBLE AND EFFECTIVE AT EVERY STAGE OF   │
   │ IT — INCLUDING AFTER SOME WELDS HAVE ALREADY │
   │ SHRUNK.                                      │
   │                                              │
   │ A CLAMP THAT WAS SNUG AT FIT-UP MAY BE LOOSE │
   │ BY WELD 3.                                   │
   └──────────────────────────────────────────────┘
```

**When to release the clamps** `[GUIDE]`

```
   THE QUESTION: unclamp hot or cold?

   RELEASE HOT
     + faster cycle, fixture available sooner
     − the assembly distorts freely as it cools
     − residual stress relieves unpredictably

   RELEASE COLD
     + distortion happens while restrained, so it
       is more repeatable
     − long fixture occupancy
     − more residual stress locked in

   ┌──────────────────────────────────────────────┐
   │ THERE IS NO UNIVERSAL ANSWER, AND ANYONE WHO │
   │ OFFERS ONE SHOULD BE DISTRUSTED.             │
   │                                              │
   │ IT DEPENDS ON THE MATERIAL, SECTION,         │
   │ TOLERANCE AND WHETHER THE ASSEMBLY IS        │
   │ SUBSEQUENTLY MACHINED OR STRESS-RELIEVED.    │
   │                                              │
   │ WHAT THE DESIGNER MUST DO IS ESTABLISH IT BY │
   │ TRIAL AND THEN WRITE IT ON THE PROCESS SHEET │
   │ — BECAUSE IF IT IS NOT WRITTEN DOWN,         │
   │ DIFFERENT OPERATORS WILL DO DIFFERENT THINGS │
   │ AND THE ASSEMBLY WILL VARY FOR NO VISIBLE    │
   │ REASON.                                      │
   └──────────────────────────────────────────────┘
```

**A recurring failure** `[EX-ASSUMED]`:

```
SITUATION
  A welded bracket assembly was consistently 1.8 mm
  out of position on one leg. The fixture was
  checked and found dimensionally correct.

INVESTIGATION
  Measured the assembly IN the fixture, before
  release: correct.
  Measured after release: 1.8 mm out.

THE MISTAKE IN THE DESIGN LOGIC
  The fixture had been designed to hold the parts
  at NOMINAL. It did so, perfectly. The weld then
  shrank and pulled the leg 1.8 mm.

  THE FIXTURE WAS CORRECT AND THE OUTPUT WAS
  WRONG.

THE FIX
  Pre-set the leg 1.8 mm the other way, established
  by measuring the actual distortion over 20
  assemblies.

  New result: 0.3 mm mean deviation, spread
  ±0.4 mm.

┌──────────────────────────────────────────────┐
│ A WELDING FIXTURE THAT HOLDS EVERYTHING AT   │
│ NOMINAL IS USUALLY WRONG.                    │
│                                              │
│ IT MUST HOLD THE PARTS WHERE THEY NEED TO BE │
│ BEFORE WELDING SO THAT THEY ARE CORRECT      │
│ AFTER — AND THOSE ARE DIFFERENT POSITIONS.   │
│                                              │
│ THIS IS THE SINGLE MOST COMMON CONCEPTUAL    │
│ ERROR MADE BY DESIGNERS COMING FROM A        │
│ MACHINING BACKGROUND.                        │
└──────────────────────────────────────────────┘
```

### 10. Design rules
- **R1** — Establish the **weld sequence before designing**; the fixture must work at every stage of it.
- **R2** — Do not attempt to **prevent** distortion; plan where it will go.
- **R3** — **Pre-set** where distortion is predictable and repeatable; establish the amount **by trial**.
- **R4** — Provide **torch or electrode access at every joint**, at a workable angle, with the actual
  hardware modelled.
- **R5** — For **spot welding, verify both electrode paths** at every weld point using the real gun
  geometry `[MFR]`.
- **R6** — **Prevent current shunting** — insulate, or keep the fixture out of the weld zone.
- **R7** — Make **locators replaceable**; they are consumable.
- **R8** — Protect against **spatter**: coatings, shields, and distance from the arc.
- **R9** — Allow for **thermal growth of the fixture itself** over a shift.
- **R10** — Design for **mechanical abuse**; weld shops are harder on tooling than machine shops.
- **R11** — Specify **when to unclamp** — hot or cold — on the process sheet, established by trial.
- **R12** — For **brazing, verify the fixture survives the furnace** and does not contaminate the joint;
  use spring loading to accommodate expansion.
- **R13** — For **riveting, support the far side** directly; the setting force passes through the fixture.
- **R14** — For **adhesive, treat fixture occupancy during cure as the cycle constraint**; consider many
  cheap fixtures.
- **R15** — Never state a **pre-set amount, distortion allowance or weld shrinkage figure** as a general
  rule; these are joint-specific and must be measured.

### 11. Rules of thumb
- **A welding fixture cannot prevent distortion — only direct it.**
- **Clamping harder makes it worse.**
- **A fixture holding everything at nominal is usually wrong.**
- **Weld sequence is part of the fixture design.**
- **Access governs, especially for spot welding.**
- **Locators in a welding fixture are consumable.**
- **The fixture must not shunt the welding current.**
- **A clamp that was snug at fit-up may be loose by weld 3.**
- **Brazing fixtures go in the furnace — spring load them.**
- **Riveting behaves like machining: real mechanical force.**
- **For adhesive, occupancy time is the constraint — many cheap fixtures may beat one good one.**
- **Never invent a shrinkage or pre-set figure. Measure it.**

### 12. Formulae

**Thermal stress if expansion is fully prevented**
```
σ = E · α · ΔT

[GUIDE] steel E = 200 GPa, α ≈ 12 × 10⁻⁶ /°C
A 100 °C rise fully restrained → ~240 N/mm²,
at or above mild steel yield.

USE THIS TO ESTABLISH THE SCALE OF THE PROBLEM,
NOT TO PREDICT DISTORTION. Real welding involves
phase changes, temperature-dependent properties
and yielding — none of which this expression
captures.
```

**Free thermal expansion**
```
ΔL = α · L · ΔT

Applies to the FIXTURE as well as the part. Over
a shift, a 1 m steel fixture warming 30 °C grows

  ΔL = 12e-6 × 1000 × 30 = 0.36 mm

WHICH IS LARGE COMPARED WITH MOST ASSEMBLY
TOLERANCES.
```

**Heat input** `[STD]`
```
Q = (V · I · 60)/(v · 1000)      kJ/mm
  V = arc voltage (V)
  I = welding current (A)
  v = travel speed (mm/min)

Heat input correlates with distortion: MORE HEAT,
MORE DISTORTION. The relationship is not a simple
proportionality and must not be treated as one.

An efficiency factor applies and depends on the
process; it must be taken from the applicable
welding standard or procedure.
```

**What there is NO reliable general formula for**
```
✗ the magnitude of angular distortion
✗ the correct pre-set amount
✗ transverse shrinkage of a specific joint
✗ the residual stress state

THESE MUST BE ESTABLISHED BY TRIAL FOR THE
SPECIFIC JOINT, MATERIAL, THICKNESS, PROCEDURE
AND SEQUENCE.

┌──────────────────────────────────────────────┐
│ EMPIRICAL FORMULAE FOR WELD SHRINKAGE EXIST  │
│ IN THE LITERATURE. THEY ARE FITTED TO        │
│ SPECIFIC CONDITIONS AND CAN BE BADLY WRONG   │
│ OUTSIDE THEM.                                │
│                                              │
│ THIS COURSE WILL NOT QUOTE ONE AS IF IT WERE │
│ A DESIGN RULE.                               │
└──────────────────────────────────────────────┘
```

| Variable | Meaning | Unit |
|---|---|---|
| σ | Stress | N/mm² |
| α | Coefficient of thermal expansion | /°C |
| ΔT | Temperature change | °C |
| Q | Heat input | kJ/mm |
| v | Travel speed | mm/min |

### 13. Worked numerical example

**Problem:** A welded frame assembly is distorting. Quantify the thermal forces involved, evaluate whether
stronger clamping could plausibly resist them, calculate the fixture's own thermal growth over a shift,
and determine the correct engineering response.

```
GIVEN:
  ASSEMBLY                                      [PROJ]
    Mild steel frame, 900 × 600 mm
    Members 50 × 50 × 5 mm RHS
    8 fillet welds, 6 mm leg, 60 mm long each
    Required diagonal tolerance = ±1.0 mm
    Measured diagonal error, current
      fixture = 3.4 mm consistently short

  MATERIAL                                     [GUIDE]
    E                     = 200 GPa
    α                     = 12 × 10⁻⁶ /°C
    Yield, mild steel     = 250 N/mm²
    Cross-section of one RHS member
      = 50×50 − 40×40 = 2,500 − 1,600
      = 900 mm²

  WELDING                                 [EX-ASSUMED]
    Process MIG
    Arc voltage           = 26 V
    Current               = 240 A
    Travel speed          = 400 mm/min
    Heat-affected zone assumed to reach 600 °C
      over a 20 mm wide band each side of the
      weld — AN ILLUSTRATIVE FIGURE for scale
      only

  FIXTURE                                       [PROJ]
    Mild steel, 1,100 mm between the two locators
      defining the diagonal
    Measured temperature rise over a shift = 28 °C
    Clamps: 4 off, each capable of 12,000 N

REQUIRED:
  (a) Heat input per weld and total
  (b) The restraint stress if a 600 °C region were
      fully prevented from expanding, and whether
      it exceeds yield
  (c) The force a clamp would need to exert to
      restrain one member's thermal expansion
      elastically
  (d) Compare with the available clamp force
  (e) The fixture's own thermal growth over a
      shift and its effect on the diagonal
  (f) The correct engineering response

ASSUMPTION:
  1. THE 600 °C / 20 mm HEAT-AFFECTED BAND IS AN
     ILLUSTRATIVE FIGURE USED TO ESTABLISH SCALE.
     Real thermal fields must be measured or
     modelled. NO DESIGN DECISION SHOULD REST ON
     THIS NUMBER. [EX-ASSUMED]
  2. E and α are treated as constant. THEY ARE
     NOT — both fall substantially at elevated
     temperature, so the calculated restraint
     stress OVERSTATES reality. The conclusion is
     unaffected because the overstatement runs in
     the direction that would favour clamping.
     [GUIDE]
  3. Yield of 250 N/mm² is a nominal room-
     temperature value for mild steel; at 600 °C
     it is a small fraction of this. [GUIDE]
  4. The heat input formula's process efficiency
     factor is omitted; the figure is therefore
     gross heat input. The applicable standard
     must be consulted for the efficiency to
     apply. [STD]
  5. Fixture temperature rise of 28 °C is
     MEASURED, not assumed. [PROJ]
  6. Distortion of 3.4 mm is a MEASURED mean over
     multiple assemblies, not a single reading.
     [PROJ]

FORMULA:
  Q = (V·I·60)/(v·1000)
  σ_restraint = E · α · ΔT
  F = σ · A
  ΔL = α · L · ΔT

UNIT CONVERSION:
  E = 200 GPa = 200,000 N/mm²
  Areas in mm², forces in N

SUBSTITUTION AND CALCULATION:

  (a) HEAT INPUT
      Q = (26 × 240 × 60)/(400 × 1000)
        = 374,400/400,000
        = 0.936 kJ/mm

      Per weld (60 mm):
        0.936 × 60 = 56.2 kJ

      Total, 8 welds:
        56.2 × 8 = 449.3 kJ

      ┌────────────────────────────────────────────┐
      │ 449 kJ INTO A FRAME WEIGHING PERHAPS 15 kg.│
      │                                            │
      │ FOR SCALE: THAT IS ROUGHLY THE ENERGY OF A │
      │ 1 kg MASS FALLING 45.8 km.                 │
      │ (449,300 J / (1 × 9.81) = 45,800 m)        │
      └────────────────────────────────────────────┘

  (b) RESTRAINT STRESS AT 600 °C
      σ = E · α · ΔT
        = 200,000 × 12e-6 × 600
        = 1,440 N/mm²

      Against a room-temperature yield of
      250 N/mm²:
        1,440/250 = 5.76×

      ┌────────────────────────────────────────────┐
      │ THE RESTRAINT STRESS EXCEEDS ROOM-         │
      │ TEMPERATURE YIELD BY 5.76×, AND THE METAL  │
      │ AT 600 °C IS FAR WEAKER THAN THAT.         │
      │                                            │
      │ SO THE MATERIAL YIELDS. NOT MARGINALLY —   │
      │ OVERWHELMINGLY.                            │
      │                                            │
      │ THIS IS THE MECHANISM: THE HOT METAL IS    │
      │ PERMANENTLY SHORTENED WHILE SOFT, AND THEN │
      │ CONTRACTS FROM ITS NEW, SHORTER LENGTH.    │
      └────────────────────────────────────────────┘

  (c) FORCE TO RESTRAIN ONE MEMBER ELASTICALLY

      If we wanted to hold a 900 mm² member
      against a modest 100 °C rise WITHOUT letting
      it expand:

        σ = 200,000 × 12e-6 × 100 = 240 N/mm²
        F = σ · A = 240 × 900
          = 216,000 N

      = 216 kN, or about 22 tonnes force.

      FOR A 100 °C RISE. On ONE member.

      At the 600 °C of the heat-affected zone the
      elastic figure would be 1,296,000 N — but
      the material has yielded long before, so the
      number is fictional. IT IS QUOTED ONLY TO
      SHOW THE SCALE OF WHAT CLAMPING WOULD HAVE
      TO OPPOSE.

  (d) COMPARISON WITH AVAILABLE CLAMP FORCE

      Total clamp capacity = 4 × 12,000
                           = 48,000 N

      Against the 216,000 N needed for a mere
      100 °C:
        48,000/216,000 = 22.2 %

      SHORTFALL FACTOR = 216,000/48,000
                       = 4.50×

      ┌────────────────────────────────────────────┐
      │ THE ENTIRE CLAMPING SYSTEM PROVIDES 22.2 % │
      │ OF WHAT WOULD BE NEEDED TO ELASTICALLY     │
      │ RESTRAIN ONE MEMBER AGAINST 100 °C.        │
      │                                            │
      │ THE WELD ZONE REACHES SEVERAL HUNDRED      │
      │ DEGREES MORE THAN THAT.                    │
      │                                            │
      │ "CLAMP IT HARDER" IS NOT A MARGINAL        │
      │ FAILURE OF DEGREE. IT IS OFF BY ORDERS OF  │
      │ MAGNITUDE, AND IT WOULD MAKE THE FINAL     │
      │ DISTORTION WORSE IF IT SUCCEEDED PARTIALLY.│
      └────────────────────────────────────────────┘

  (e) THE FIXTURE'S OWN THERMAL GROWTH

      ΔL = α · L · ΔT
         = 12e-6 × 1,100 × 28
         = 0.370 mm

      Against a diagonal tolerance of ±1.0 mm
      (a 2.0 mm band):
        0.370/2.0 = 18.5 % of the tolerance band

      ┌────────────────────────────────────────────┐
      │ THE FIXTURE'S OWN GROWTH OVER A SHIFT      │
      │ CONSUMES 18.5 % OF THE ASSEMBLY TOLERANCE  │
      │ — BEFORE ANY WELD DISTORTION AT ALL.       │
      │                                            │
      │ IN MACHINING THIS EFFECT IS USUALLY        │
      │ NEGLIGIBLE. IN WELDING IT IS NOT, BECAUSE  │
      │ THE FIXTURE IS BEING HEATED BY THE PROCESS │
      │ ALL DAY.                                   │
      │                                            │
      │ AND IT IS A DRIFT, NOT A SCATTER — SO THE  │
      │ FIRST ASSEMBLY OF THE SHIFT AND THE LAST   │
      │ ARE SYSTEMATICALLY DIFFERENT.              │
      └────────────────────────────────────────────┘

  (f) THE CORRECT RESPONSE

      NOT: more clamp force. (d) shows it is
           futile and counterproductive.

      THE RESPONSE HAS FOUR PARTS:

      1 PRE-SET
        The error is 3.4 mm consistently short.
        Pre-set the fixture 3.4 mm long on that
        diagonal.
        EXPECTED RESULT: mean error near zero.
        THE SCATTER IS UNCHANGED — pre-setting
        corrects bias, not repeatability
        (principle 102).

      2 WELD SEQUENCE
        Balance the sequence so the eight welds
        oppose each other's pull rather than
        accumulating.

      3 REDUCE HEAT INPUT
        0.936 kJ/mm is a design variable. Faster
        travel or lower current reduces it,
        subject to the weld procedure remaining
        qualified. THIS IS A WELDING ENGINEERING
        DECISION, NOT A FIXTURE ONE — but the
        fixture designer should raise it.

      4 CONTROL THE FIXTURE'S THERMAL DRIFT
        0.370 mm is 18.5 % of the tolerance.
        Options: allow warm-up before production,
        re-qualify mid-shift, or use a lower-
        expansion material for the critical
        setting dimension.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Heat input               │ 0.936 kJ/mm       │
  │     Per weld / total         │ 56.2 / 449.3 kJ   │
  │ (b) Restraint stress, 600 °C │ 1,440 N/mm²       │
  │     Against yield            │ 5.76× — YIELDS    │
  │ (c) Force to restrain one    │ 216,000 N         │
  │     member at only 100 °C    │ (22 tonnes)       │
  │ (d) Total clamp capacity     │ 48,000 N          │
  │     Fraction of requirement  │ 22.2 %            │
  │     Shortfall                │ 4.50×             │
  │ (e) Fixture growth, 28 °C    │ 0.370 mm          │
  │     Of tolerance band        │ 18.5 %            │
  │ (f) RESPONSE                 │ pre-set 3.4 mm,   │
  │                              │ balance sequence, │
  │                              │ reduce heat input,│
  │                              │ manage drift      │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not applicable in the strength sense; the
  relevant comparison is the 4.50× shortfall of
  clamping against thermal force, which is a
  demonstration that the clamping approach is the
  wrong instrument rather than an inadequate one.

PASS/FAIL:
  ✗ FAIL — current fixture, 3.4 mm against a
    ±1.0 mm tolerance (3.4× the half-band)
  ✗ FAIL — clamping as a distortion control:
    22.2 % of what one member at 100 °C would
    require
  ⚠ MARGINAL — fixture thermal drift at 18.5 % of
    the tolerance band, acceptable only if the
    remaining sources fit in the other 81.5 %
  ✓ VIABLE — pre-setting, sequence and heat input
    together

ENGINEERING CONCLUSION:
  1. CLAMPING IS NOT AN INSTRUMENT FOR CONTROLLING
     WELD DISTORTION, AND THE NUMBERS SETTLE IT.
     Holding a single 900 mm² member elastically
     against a 100 °C rise needs 216,000 N. The
     whole four-clamp system provides 48,000 N —
     22.2 %, a shortfall of 4.50×. And 100 °C is
     a fraction of what the weld zone sees.
     THE ARGUMENT IS NOT THAT CLAMPING IS
     INSUFFICIENT. IT IS THAT CLAMPING IS THE
     WRONG CATEGORY OF RESPONSE. Even if the
     clamps were ten times stronger, the restraint
     stress of 1,440 N/mm² at 600 °C is 5.76× the
     room-temperature yield, so the metal yields
     regardless and the shortening happens anyway
     — only more of it, because more restraint
     means more compressive yielding.

  2. THE FIXTURE HOLDING EVERYTHING AT NOMINAL WAS
     THE ACTUAL DEFECT.
     The fixture was dimensionally correct and the
     assembly was 3.4 mm out, consistently. A
     machining-trained designer reads "fixture
     correct, part wrong" as evidence of a process
     problem. IN WELDING IT IS EVIDENCE THAT THE
     FIXTURE IS AT THE WRONG DIMENSION, because
     the fixture's job is to hold the parts where
     they must be BEFORE welding so they are
     correct AFTER.
     Pre-setting 3.4 mm is the fix, and its
     justification is that the error was
     CONSISTENT — which makes it bias, and bias is
     correctable (principle 102). If the error had
     been ±3.4 mm scatter, pre-setting would have
     achieved nothing.

  3. THE FIXTURE'S OWN THERMAL DRIFT WAS 18.5 % OF
     THE TOLERANCE AND NOBODY WAS LOOKING AT IT.
     0.370 mm over a 28 °C shift rise, on a
     ±1.0 mm assembly tolerance. In machining this
     term is usually negligible; here the process
     heats the fixture all day, so it is not. And
     because it is a DRIFT rather than a scatter,
     the first assembly of the shift and the last
     differ systematically — which presents as a
     mysterious trend rather than as noise, and
     gets attributed to the operator.

  4. HEAT INPUT IS A DESIGN VARIABLE AND THE
     FIXTURE DESIGNER SHOULD SAY SO.
     0.936 kJ/mm was treated as given. It is not —
     travel speed and current are choices, subject
     to the procedure remaining qualified. This is
     a welding engineering decision rather than a
     fixture one, but THE FIXTURE DESIGNER IS
     OFTEN THE ONLY PERSON WHO SEES THE
     DISTORTION AS A SYSTEM PROBLEM, and raising
     it is part of the job.

  5. WHAT I WOULD DO FIRST.
     Measure twenty assemblies to establish the
     mean and spread separately, because the whole
     strategy depends on which is dominant.
     Pre-setting fixes a mean of 3.4 mm and does
     nothing for a spread of 3.4 mm, and the
     single number "3.4 mm out" does not
     distinguish them.

SENSITIVITY NOTE:
  Ranked by influence:
    1. WHETHER THE 3.4 mm IS BIAS OR SCATTER — it
       determines whether the entire recommended
       approach works. THE MOST CONSEQUENTIAL
       QUESTION AND IT IS NOT ANSWERED BY THE DATA
       AS STATED.
    2. WELD SEQUENCE — capable of changing the
       distortion substantially, at no cost. The
       highest-value variable available.
    3. HEAT INPUT — correlates with distortion,
       linear in current and voltage, inverse in
       travel speed. Constrained by the qualified
       procedure.
    4. FIXTURE TEMPERATURE RISE — linear on the
       0.370 mm drift. Halving the rise halves the
       drift; a warm-up period is nearly free.
    5. THE 600 °C AND 20 mm ASSUMPTIONS — these
       affect only the illustrative scale
       calculations in (b), not the conclusion.
       THE CONCLUSION IN (d) HOLDS FOR ANY
       PLAUSIBLE TEMPERATURE, WHICH IS WHY IT IS
       SAFE TO DRAW.
```

### 14. Engineering assumptions
- **The 600 °C / 20 mm heat-affected band is illustrative, used to establish scale only.** No design
  decision should rest on it `[EX-ASSUMED]`.
- E and α treated as constant; **both fall substantially at elevated temperature**, so the restraint
  stress is overstated — in the direction that would favour clamping, so the conclusion holds `[GUIDE]`.
- Yield of 250 N/mm² is a nominal room-temperature value; at 600 °C it is a small fraction of it
  `[GUIDE]`.
- Heat input quoted **gross**; the process efficiency factor must come from the applicable welding
  standard `[STD]`.
- Fixture temperature rise of 28 °C is **measured** `[PROJ]`.
- The 3.4 mm distortion is a **measured mean over multiple assemblies** `[PROJ]`.
- **No general formula for pre-set amount, angular distortion or transverse shrinkage is offered**,
  because none can be trusted outside the conditions it was fitted to.

### 15. Diagram

```
     THE JOINING FIXTURE FAMILY
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  WHAT A WELDING FIXTURE LOSES

   MACHINING FIXTURE      WELDING FIXTURE
   ─────────────────      ───────────────
   one part            →  SEVERAL parts
   rigid               →  thin, floppy
   mechanical force    →  THERMAL force
   shape constant      →  SHAPE CHANGES
   temperature steady  →  hundreds of °C
   fixture unattacked  →  spatter, arc, heat

   ┌──────────────────────────────────────────────┐
   │ NOT A HARDER VERSION OF THE SAME PROBLEM.    │
   │ A DIFFERENT PROBLEM.                         │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHY CLAMPING CANNOT WIN

   1 hot region tries to EXPAND
   2 cold surroundings PREVENT it
   3 ► IT YIELDS IN COMPRESSION ◄ (soft, easy)
   4 it cools and CONTRACTS
   5 from a PERMANENTLY SHORTER length
     → IT PULLS

   ┌──────────────────────────────────────────────┐
   │ STEP 3 IS IRREVERSIBLE.                      │
   │                                              │
   │ MORE CLAMPING → MORE RESTRAINT → MORE        │
   │ COMPRESSIVE YIELDING → MORE CONTRACTION.     │
   │                                              │
   │ CLAMPING HARDER MAKES IT WORSE.              │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE NUMBERS FROM THE WORKED EXAMPLE

   FORCE NEEDED to restrain ONE member, 100 °C
     ████████████████████████████████ 216,000 N

   FORCE AVAILABLE from all four clamps
     ███████ 48,000 N                  = 22.2 %

   SHORTFALL 4.50×  — AND THE WELD ZONE IS
   HUNDREDS OF DEGREES HOTTER THAN 100 °C

   RESTRAINT STRESS at 600 °C   1,440 N/mm²
   ROOM-TEMPERATURE YIELD         250 N/mm²
   ratio 5.76×  → IT YIELDS, OVERWHELMINGLY

   ┌──────────────────────────────────────────────┐
   │ CLAMPING IS NOT INSUFFICIENT. IT IS THE      │
   │ WRONG CATEGORY OF RESPONSE.                  │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE THREE DISTORTIONS

   TRANSVERSE      ──►│◄──   joint pulls together
   LONGITUDINAL    ──────►   joint shortens
   ANGULAR         ────┐     joint FOLDS
                        ╲

   PRE-SETTING — the characteristic technique

     set it wrong          it welds to right
     ────┐                 ────┬────
          ╲                    │
           ╲                   │

   ┌──────────────────────────────────────────────┐
   │ A WELDING FIXTURE THAT HOLDS EVERYTHING AT   │
   │ NOMINAL IS USUALLY WRONG.                    │
   │                                              │
   │ In the worked case the fixture was           │
   │ dimensionally CORRECT and the assembly was   │
   │ 3.4 mm out, every time.                      │
   │                                              │
   │ THE FIXTURE WAS THE DEFECT.                  │
   │                                              │
   │ AND PRE-SETTING ONLY WORKS BECAUSE THE ERROR │
   │ WAS CONSISTENT — IT CORRECTS BIAS, NOT       │
   │ SCATTER (principle 102).                     │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  SPOT WELDING — THE SEVEREST ACCESS CONSTRAINT

           ▼ electrode arm
        ═══════════   part A
        ═══════════   part B
           ▲ electrode arm

   THE FIXTURE MUST NOT BE BETWEEN THEM —
   AT EVERY WELD POINT, WITH THE REAL GUN
   GEOMETRY, WHICH IS FIXED HARDWARE.

   ┌──────────────────────────────────────────────┐
   │ PLUS: A CONDUCTIVE FIXTURE TOUCHING BOTH     │
   │ PARTS NEAR THE WELD SHUNTS THE CURRENT AND   │
   │ THE WELD DOES NOT FORM.                      │
   │                                              │
   │ ACCESS IS NOT ONE OBJECTIVE AMONG FOURTEEN   │
   │ HERE. IT IS THE GOVERNING CONSTRAINT, AND    │
   │ THE LOCATING SCHEME IS DESIGNED AROUND IT.   │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE FIXTURE'S OWN DRIFT — THE TERM NOBODY WATCHES

   28 °C rise over a shift, 1,100 mm span
   ΔL = 12e-6 × 1100 × 28 = 0.370 mm

   tolerance band ±1.0 mm  = 2.0 mm
   ████░░░░░░░░░░░░░░░░  18.5 % CONSUMED

   ┌──────────────────────────────────────────────┐
   │ IT IS A DRIFT, NOT A SCATTER — SO THE FIRST  │
   │ ASSEMBLY OF THE SHIFT AND THE LAST DIFFER    │
   │ SYSTEMATICALLY.                              │
   │                                              │
   │ THAT PRESENTS AS A MYSTERIOUS TREND AND GETS │
   │ BLAMED ON THE OPERATOR.                      │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE THREE OUTLIERS

   BRAZING    fixture goes IN THE FURNACE
              → survive the temperature
              → SPRING LOAD for expansion
              → mass slows the cycle

   RIVETING   large MECHANICAL force, no heat
              → behaves like a machining fixture
              → SUPPORT THE FAR SIDE

   ADHESIVE   fixture occupied for the CURE
              → occupancy is the cycle constraint
              → TWENTY CHEAP FIXTURES MAY BEAT
                ONE GOOD ONE — the opposite of
                the usual economics
```

### 16. Drawing example

```
FIXTURE FX-4400 — WELDING FIXTURE
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: DIAGONAL A-B IS PRE-SET 3.4 mm LONG OF
        NOMINAL. THIS IS DELIBERATE. IT COMPENSATES
        MEASURED WELD SHRINKAGE. DO NOT "CORRECT"
        TO NOMINAL.

NOTE 2: WELD SEQUENCE PER PROCESS SHEET PS-4400.
        THE SEQUENCE IS PART OF THE DIMENSIONAL
        CONTROL, NOT A CONVENIENCE.

NOTE 3: RELEASE CLAMPS ONLY AFTER THE ASSEMBLY HAS
        COOLED BELOW 60 °C. SEE PS-4400.

NOTE 4: LOCATORS ITEMS 7-14 ARE CONSUMABLE.
        REPLACE WHEN SPATTER DAMAGE EXCEEDS THE
        WEAR LIMIT ON SHEET 4.

NOTE 5: ALLOW 30 MINUTES WARM-UP AT PRODUCTION RATE
        BEFORE THE FIRST ACCEPTED ASSEMBLY.
        FIXTURE THERMAL GROWTH IS 0.37 mm OVER A
        SHIFT.
```

`[PRACTICE]` **Note 1 is the one that matters most and the one most often missing.** A pre-set dimension
looks like an error to anyone who inspects the fixture against nominal — including, eventually, a
well-meaning maintenance fitter who will "fix" it. **A deliberate deviation that is not annotated as
deliberate will be removed.**

### 17. CAD workflow
1. Model **every component of the assembly** in its as-supplied condition, including its own tolerances
2. Establish the **weld sequence** with the welding engineer before laying out clamps
3. Model the **actual torch, gun or electrode geometry** `[MFR]` — not a cylinder standing in for it
4. For spot welding, verify **both arms** at every weld point, through their full approach
5. Check clamp accessibility **at every stage of the sequence**, not only at fit-up
6. Model **spatter shadow** — which surfaces the arc can see — and shield or relieve those
7. Apply **pre-set offsets** in the model, and annotate them as deliberate
8. Verify the fixture can be **loaded and unloaded** with the assembly in its distorted, post-weld shape

`[PRACTICE]` Step 8 catches a genuinely common failure: **the assembly that goes in easily comes out
distorted, and no longer fits the fixture it was made in.** If shrinkage pulls the assembly onto a
locating pin, it will jam.

### 18. GD&T application
Joining fixtures raise a tolerancing question that machining fixtures do not:

```
  WHAT IS BEING TOLERANCED — THE PART OR THE
  ASSEMBLY?

  STANDARD: ASME Y14.5-2018

  ┌────────────────────────────────────────────┐
  │ A WELDED ASSEMBLY DRAWING TOLERANCES THE   │
  │ RELATIONSHIP BETWEEN COMPONENTS.           │
  │                                            │
  │ The individual components have their own   │
  │ tolerances, and THOSE STACK INTO THE       │
  │ ASSEMBLY BEFORE THE FIXTURE CONTRIBUTES    │
  │ ANYTHING.                                  │
  │                                            │
  │ SO THE FIXTURE'S ALLOCATION IS SMALLER     │
  │ THAN IN MACHINING — IT SHARES THE BUDGET   │
  │ WITH COMPONENT VARIATION AND WITH WELD     │
  │ DISTORTION.                                │
  └────────────────────────────────────────────┘

  THE THREE CONTRIBUTORS TO ASSEMBLY VARIATION
    1 component tolerances (incoming)
    2 fixture location and its thermal drift
    3 weld distortion (mean AND scatter)

  A COMMON ERROR: allocating the whole assembly
  tolerance to the fixture, leaving nothing for
  (1) and (3) — which are usually LARGER.

  [PRACTICE] On welded assemblies the fixture is
  frequently NOT the dominant contributor, and
  tightening it further has no effect. Establish
  the split by measurement before spending money.

  Datum practice for weldments and the treatment
  of non-rigid parts (ISO 10579 free-state) at
  Level 11.
```

### 19. Manufacturing method
| Aspect | Practice `[PRACTICE]` |
|---|---|
| **Structure** | Welded and then **stress-relieved before machining** — otherwise the fixture distorts in service |
| **Locators** | Hardened, **replaceable**, mounted so they can be changed without dismantling |
| **Anti-spatter** | Coating, or sacrificial shields at the arc |
| **Clamps** | Robust; toggle clamps common; **protected from spatter and heat** |
| **Adjustment** | Pre-set dimensions need a **repeatable adjustment**, not a shim stack |
| **Brazing fixtures** | Material must survive furnace temperature without scaling or contaminating |

> **"Stress-relieve the fixture before machining"** is more important for welding fixtures than for any
> other class, because they are usually of welded construction themselves and they are then heated
> repeatedly in service. **A fixture that was not stress-relieved will move during its first month and
> nobody will connect the two events.**

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Locator positions **including pre-sets** | CMM, against the fixture drawing (not nominal part) | Per drawing |
| Pre-set direction and amount | Explicit check against Note 1 | As stated |
| Assembly dimensions, **in the fixture** | Measure before release | Per fit-up requirement |
| Assembly dimensions, **after release** | Measure after cooling | Per assembly drawing |
| **Mean and spread separately** | ≥20 assemblies | Bias correctable, scatter is not |
| Electrode access | Physical check with the real gun `[MFR]` | Reaches every point |
| Current shunting | Weld quality checks, destructive if required `[STD]` | Per weld standard |
| Fixture thermal drift | Measure a setting dimension cold and after a shift | Within allocation |
| Spatter damage on locators | Visual, against wear limits | Below limit |

`[PRACTICE]` **Measuring in the fixture AND after release is the diagnostic that separates the fixture's
error from the process's error.** It is two measurements instead of one and it settles arguments that
otherwise run for months.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Trying to **prevent** distortion with clamp force | Futile; makes it worse |
| 2 | Holding everything at **nominal** | Assembly consistently out |
| 3 | Not distinguishing **bias from scatter** | Pre-setting applied to a scatter problem, no effect |
| 4 | Designing the fixture **before** the weld sequence | Clamps inaccessible mid-sequence |
| 5 | Modelling a **cylinder** instead of the real torch/gun `[MFR]` | Access fails at commissioning |
| 6 | For spot welding, checking **one** electrode path | The gun does not fit |
| 7 | **Conductive fixture** near the weld | Current shunts, weld does not form |
| 8 | **Non-replaceable** locators | Fixture scrapped on spatter damage |
| 9 | Ignoring the **fixture's own thermal growth** | Systematic drift blamed on operators |
| 10 | **Not stress-relieving** a welded fixture | It moves in its first month |
| 11 | Not annotating a **pre-set as deliberate** | Somebody "corrects" it to nominal |
| 12 | Not specifying **when to unclamp** | Operator-to-operator variation |
| 13 | Allocating the whole assembly tolerance to the **fixture** | Nothing left for components and distortion |
| 14 | Forgetting the assembly is **distorted when it comes out** | It jams on the locators |
| 15 | Treating **cure time** as free in adhesive bonding | Fixture occupancy becomes the bottleneck |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Assembly consistently out one way | Weld shrinkage, uncompensated | Measure in-fixture and after release | Pre-set by the measured amount | Design rule R3 |
| Assembly out inconsistently | Scatter, not bias | Measure 20 units; separate mean and spread | Address sequence, heat input, fit-up | Never pre-set a scatter problem |
| Drift through the shift | Fixture thermal growth | Measure a setting dimension cold and hot | Warm-up period, re-qualify, low-expansion element | Design rule R9 |
| Weld does not form (RSW) | Current shunting through the fixture | Check fixture contact near the weld | Insulate or relieve | Design rule R6 |
| Gun will not reach | Real geometry differs from the model | Physical trial | Relieve the fixture | Model the actual gun `[MFR]` |
| Locator worn/damaged early | Spatter | Visual | Replace; add shielding | Replaceable locators, coating |
| Assembly jams on removal | Shrinkage pulled it onto a pin | Try removal on a distorted unit | Relieve or make the pin retractable | CAD workflow step 8 |
| Clamp loose late in the sequence | Earlier welds shrank the assembly | Observe during welding | Re-clamp, or reposition | Check clamps at every sequence stage |
| Fixture moved after a month | Not stress-relieved | Re-measure against records | Stress-relieve and re-machine | Manufacturing practice |
| Adhesive line thickness varies | Fixture does not control the gap | Measure the bond line | Add gap control | Treat bond line as a dimension |

### 23. Design checklist
- [ ] Is the **weld sequence established** and does the fixture work at every stage of it?
- [ ] Has distortion been **measured** — mean and spread separately?
- [ ] Are **pre-sets applied** where the error is bias, and annotated as deliberate?
- [ ] Is **torch/gun/electrode access** verified with the real hardware `[MFR]`?
- [ ] For spot welding, are **both arms** checked at every point?
- [ ] Is **current shunting** prevented?
- [ ] Are **locators replaceable** and protected from spatter?
- [ ] Has the **fixture's own thermal growth** been calculated against the tolerance?
- [ ] Is a **warm-up requirement** specified?
- [ ] Is the fixture **stress-relieved** before machining?
- [ ] Is **when to unclamp** specified on the process sheet?
- [ ] Can the assembly be **removed in its distorted state**?
- [ ] Is the tolerance **shared** between components, fixture and distortion?
- [ ] For brazing: does the fixture **survive the furnace**, and is it spring-loaded?
- [ ] For adhesive: is **fixture occupancy during cure** the constraint, and how many fixtures are needed?

### 24. Beginner exercise
**E3.1.2-B** — Answer with reasons:
(a) Why does clamping harder make weld distortion worse rather than better?
(b) A steel bar is heated 120 °C and fully prevented from expanding. Calculate the stress developed
(E = 200 GPa, α = 12 × 10⁻⁶ /°C) and compare it with a 250 N/mm² yield.
(c) A 1.4 m steel welding fixture warms 35 °C over a shift. Calculate its growth.
(d) State why a spot welding fixture's access requirement is more severe than a MIG fixture's.
(e) State two things that attack a welding fixture but not a machining fixture.
(f) Why must a brazing fixture often be spring-loaded rather than rigidly clamped?

### 25. Intermediate exercise
**E3.1.2-I** — A welded steel bracket assembly has a critical dimension of 340 ± 0.8 mm. Twenty assemblies
are measured after release: mean 341.9 mm, range 340.9 to 342.8 mm. The fixture spans 520 mm between the
locators defining this dimension and rises 32 °C over a shift. Welding is MIG at 28 V, 260 A, 380 mm/min,
with 6 welds of 45 mm each.
(a) Calculate the mean error and the spread.
(b) State whether the dominant problem is bias or scatter, with your reasoning.
(c) Calculate the fixture's thermal growth and express it as a percentage of the tolerance band.
(d) Calculate the heat input per millimetre, per weld and in total.
(e) Determine what pre-set you would apply, and predict the resulting mean and spread.
(f) State whether pre-setting alone brings the assembly into tolerance, and what else is required.
(g) List the drawing notes you would add.

### 26. Advanced exercise
**E3.1.2-A** — A robotic MIG welded automotive sub-frame assembly comprises six pressed steel components,
1.6 to 3.0 mm thick, with 34 welds. The assembly envelope is 1,150 × 480 mm. Critical dimensions: two
mounting hole centres at 980 ± 0.5 mm, and a mounting face flatness of 1.2 mm. Volume 90,000/yr over 6
years. `[EX-ASSUMED]` State all assumptions.
(i) Identify every contributor to variation in the 980 ± 0.5 mm dimension, and propose an allocation
between them, justifying the split.
(ii) Explain why the fixture may not be the dominant contributor, and how you would establish whether it
is.
(iii) Describe the weld sequence strategy you would propose and how it affects the fixture design.
(iv) Determine the access requirements for a robot torch and how they constrain clamp placement.
(v) Calculate the fixture's thermal growth over a shift and assess it against the 0.5 mm tolerance.
(vi) Explain why locators must be replaceable and estimate the maintenance implication at this volume.
(vii) Determine whether pre-setting is appropriate, what evidence you would need first, and what it
cannot fix.
(viii) At 90,000/yr, calculate the cycle time available and assess whether one fixture is sufficient,
including the capacity check.
(ix) Identify which of the twenty-four auto-fail items this application most invites.
(x) State the six most important notes for the fixture drawing and process sheet.

### 27. Interview questions
1. *"Can a welding fixture prevent distortion?"*
   **Answer:** No, and the reason is worth being precise about. When you weld, a small region gets to
   melting temperature while everything around it stays cool. The hot metal tries to expand, the cold
   metal around it stops it, and because hot steel is soft it yields in compression — it is permanently
   shortened while it is hot. Then it cools and contracts from that new shorter length, and it pulls
   everything toward the weld. That permanent shortening is the key step and it is irreversible, so
   clamping cannot undo it. Worse, clamping harder increases the restraint, which increases the
   compressive yielding, which increases the final contraction. In the case we worked, holding a single
   member elastically against just a 100 °C rise needed 216,000 newtons and the entire four-clamp system
   provided 48,000 — twenty-two per cent, a shortfall of four and a half times, and the weld zone is
   hundreds of degrees hotter than that. So the fixture's job is not to prevent distortion. It is to hold
   the parts where they need to be *before* welding so they end up correct afterwards, to direct the
   residual distortion somewhere tolerable, and to make it repeatable.
2. *"What is pre-setting and when does it work?"*
   **Answer:** Pre-setting means deliberately holding the parts off nominal, in the opposite direction to
   the expected distortion, by the amount you expect, so that welding brings them to nominal. It is the
   characteristic welding fixture technique and it has no equivalent anywhere in machining. It works when
   the distortion is *consistent* — when it is bias rather than scatter. In the example, an assembly was
   3.4 mm out on a diagonal every single time, and the fixture was dimensionally correct; pre-setting the
   fixture 3.4 mm the other way brought the mean to near zero. What it does not do is reduce the spread,
   because you cannot correct scatter with an offset — that is principle 102 from Level 2, the same
   reason repeatability cannot be adjusted out and accuracy can. So the first thing to do is measure
   twenty assemblies and separate the mean from the range. If the problem is mostly spread, pre-setting
   achieves nothing and you have to attack the weld sequence, the heat input or the fit-up instead. And
   the pre-set amount must always be established by trial for that specific joint, material, thickness
   and procedure — there is no formula worth trusting.

### 28. Expert questions
1. *"You say the fixture is often not the dominant contributor to a welded assembly's variation. How do
   you find out, and what do you do if you are right?"*
   **Answer:** The method is to **separate the contributors by measurement rather than by argument**,
   because everybody in the room has a theory and the theories are usually about somebody else's process.
   There are three contributors: **incoming component variation, the fixture including its thermal
   drift, and the weld distortion itself** — and the weld distortion has both a mean and a spread of its
   own. The measurement that separates them is straightforward. **Measure the assembly in the fixture
   before welding** — that captures component variation plus fixture error, and nothing else. **Measure
   again in the fixture after welding but before release** — the difference is what the welds did while
   restrained. **Measure again after release and cooling** — the difference is the springback. Do it on
   twenty units so you get means and ranges rather than anecdotes.
   That gives you three numbers with clean interpretations, and in my experience the result is often
   uncomfortable. **Pressed components with their own ±0.5 mm form tolerances routinely contribute more
   than the fixture's ±0.05 mm locators.** When that is the case, the fixture is being asked to fix a
   problem it did not cause and cannot solve, which is exactly CS-01's pattern in a different domain.
   What you do about it depends on which term dominates. **If it is incoming components**, the fixture
   change that helps is not tighter locators but a different *locating strategy* — locating on the
   features that matter for the assembly rather than the features that are convenient, and letting the
   uncontrolled variation go somewhere harmless. Sometimes that means **locating a pressing on its formed
   surface rather than its trimmed edge**, because the trim varies and the form does not. **If it is weld
   distortion mean**, pre-set. **If it is weld distortion spread**, the fixture cannot help much and the
   answer is sequence, heat input and fit-up consistency.
   The reason this matters commercially is that **tightening a fixture is the visible, purchasable
   response**, and it is often the one with the least effect. I have seen a customer spend on locator
   upgrades that reduced a contributor accounting for eleven per cent of the variation, and be genuinely
   surprised that the assembly did not improve. **The measurement costs a day and prevents that.**
2. *"Automotive body shops build fixtures where the same assembly runs on several identical lines. What
   does that change?"*
   **Answer:** It converts a **repeatability** problem into a **reproducibility** problem, and those are
   not the same thing.
   A single fixture's repeatability is how consistently it puts the same part in the same place. **With
   several nominally identical fixtures, you also have the variation *between* them** — and that is
   almost always larger, because it includes each fixture's own manufacturing tolerances, its own
   thermal state, its own wear history and its own spatter damage. Four fixtures each with ±0.05 mm
   repeatability but with means spread over 0.3 mm give you an assembly population with 0.3 mm of
   structure in it that no single fixture study will ever reveal.
   The consequence is that **each fixture must be qualified against a common master, not against its own
   drawing.** A drawing tolerance of ±0.05 mm on a locator permits two fixtures to differ by 0.10 mm and
   both be correct. **That is why body shops use master gauges, cubing bucks and common datum
   strategies** — the point is not that each fixture is accurate but that they all agree.
   It also changes the **pre-setting** question fundamentally. If distortion is compensated by pre-setting
   and each line has slightly different heat input, torch angle, or fixture thermal state, then **the
   correct pre-set differs per line.** You then face a genuine decision: apply a common pre-set and
   accept between-line variation, or tune each line and accept that the fixtures are no longer
   interchangeable and cannot be swapped in a breakdown. **Most operations choose common**, and manage
   the residual — because interchangeability during a breakdown is worth more than the last fraction of a
   millimetre.
   And there is a maintenance dimension people underestimate. **Locators are consumable in a welding
   fixture**, and four fixtures wear at four different rates. Without a scheduled, *simultaneous*
   replacement regime the fleet drifts apart, and the drift is slow enough that nobody notices until a
   downstream assembly stops fitting. **The control is periodic re-qualification of every fixture against
   the same master, on a schedule, whether or not anything appears wrong** — which is an unglamorous
   answer, and it is the one that works.

### 29. Summary
A joining fixture loses almost every assumption a machining fixture relies on: it holds several parts
rather than one, the parts are often thin and floppy, the forces are thermal rather than mechanical, the
shape changes during the operation, temperatures reach hundreds of degrees unevenly, and the process
attacks the fixture with spatter, heat and arc strike. The central fact is that a welding fixture cannot
prevent distortion, only control where it goes — because the hot metal, prevented from expanding by the
cold metal around it, yields in compression while it is soft, is permanently shortened, and then
contracts from that shorter length. Clamping harder increases the restraint, the compressive yielding and
therefore the final contraction. The worked example put numbers on it: restraining a single 900 mm²
member elastically against only a 100 °C rise needs 216,000 N against a total clamp capacity of 48,000 N,
a shortfall of 4.50×, while the restraint stress at 600 °C is 1,440 N/mm², 5.76× the room-temperature
yield. So the fixture's real tools are pre-setting, which corrects bias but never scatter; weld sequence,
which is a design variable and must be established before the clamps are laid out; and heat input, which
the fixture designer should raise even though it is somebody else's decision. The fixture's own thermal
growth of 0.370 mm over a 28 °C shift consumed 18.5% of the assembly tolerance as a systematic drift, not
a scatter. Across the sub-classes, spot welding imposes the severest access constraint in fixture design
because both electrodes must reach every point and the fixture must not shunt the current; brazing
fixtures enter the furnace and are spring-loaded for expansion; riveting behaves like machining with real
mechanical force; and adhesive bonding is constrained by fixture occupancy during cure, so many cheap
fixtures may beat one good one.

### 30. Key takeaways
- **A welding fixture cannot prevent distortion. It can only control where it goes.**
- **Clamping harder makes it worse** — more restraint, more compressive yielding, more contraction.
- **216,000 N needed against 48,000 N available** for one member at 100 °C: clamping is the wrong
  category of response, not an insufficient one.
- **A fixture holding everything at nominal is usually wrong.**
- **Pre-setting corrects bias, never scatter** — measure the mean and spread separately first.
- **Annotate a pre-set as deliberate**, or somebody will "correct" it.
- **Weld sequence is part of the fixture design**, and clamps must work at every stage of it.
- **The fixture's own thermal growth matters here** — 18.5% of the tolerance, as a systematic drift.
- **Spot welding access is the severest constraint in fixture design**; verify both arms with real gun
  geometry `[MFR]`.
- **Do not shunt the welding current.**
- **Locators are consumable.** Make them replaceable.
- **Stress-relieve a welded fixture** before machining it.
- **The fixture is often not the dominant contributor** — measure in-fixture, post-weld and post-release
  to find out.
- **With multiple identical fixtures, qualify against a common master**, not each against its own
  drawing.
- **Never invent a shrinkage or pre-set figure. Measure it.**

---

## LESSON L3.1.3 — TUBE FIXTURES

### 1. Lesson title
**L3.1.3 — The tube fixture family: cutting, bending, checking, welding, assembly, end-forming**

### 2. Learning objective
By the end of this lesson you will be able to explain why tubular workpieces defeat conventional locating
schemes, describe springback and why it makes bending a closed-loop process, state what a tube fixture
must control that a prismatic-part fixture never does, distinguish the requirements of cutting, bending,
checking, welding, assembly and end-forming fixtures, and select a locating strategy for a tubular part.

### 3. Prerequisites
L2.2.1 (determinacy), L2.2.2 (repeatability and accuracy), L3.1.2 (joining fixtures), L0.3 (materials and
yield).

### 4. Why the topic matters
**A tube is the workpiece that breaks the rules.** Everything taught so far assumed a part with flat
faces, holes and edges you could locate against. A bent tube has none of those.

```
   WHAT A CONVENTIONAL LOCATING SCHEME NEEDS

   ✔ A FLAT FACE for the primary datum (3 points)
   ✔ A second face or edge (2 points)
   ✔ A third (1 point)
   ✔ Features whose position is CONTROLLED

   WHAT A BENT TUBE OFFERS

   ✗ NO flat faces at all — it is round everywhere
   ✗ Its length is a DEVELOPED length that varies
   ✗ Its shape is the RESULT of a process with
     springback, not a machined dimension
   ✗ It is FLEXIBLE — it sags under its own weight
   ✗ Every bend's error ACCUMULATES into the next

   ┌──────────────────────────────────────────────┐
   │ 3-2-1 DOES NOT DIRECTLY APPLY TO A ROUND     │
   │ TUBE, BECAUSE THERE IS NO PLANE TO PUT THREE │
   │ POINTS ON.                                   │
   │                                              │
   │ THE PRINCIPLE STILL HOLDS — SIX CONSTRAINTS  │
   │ ARE STILL SIX CONSTRAINTS — BUT THE FEATURES │
   │ THAT SUPPLY THEM ARE COMPLETELY DIFFERENT.   │
   └──────────────────────────────────────────────┘
```

Tube work is enormous in industry — automotive exhausts, seat frames, chassis, roll cages, hydraulic
lines, heat exchangers, furniture, handrails — and it is **poorly served by generic fixture training**,
which is why it has its own lesson here and its own project set (T01–T10) later.

### 5. Simple explanation

```
   THE SIX TUBE FIXTURE TYPES

   1 CUTTING       hold the tube while it is cut
                   to length or notched
                   → length repeatability, no
                     crushing

   2 BENDING       the machine bends; the fixture
                   or tooling controls the result
                   → springback, ovality, wall
                     thinning

   3 CHECKING      judge whether a bent tube is
                   right
                   → the hardest of the six

   4 WELDING       hold tubes in relation to each
                   other while joined
                   → L3.1.2's rules plus tube's

   5 ASSEMBLY      hold tubes and fittings for
                   assembly
                   → orientation matters as much
                     as position

   6 END-FORMING   flare, bead, expand, reduce
                   → large axial force; the tube
                     must not buckle

   ┌──────────────────────────────────────────────┐
   │ ALL SIX SHARE ONE PROBLEM: HOW DO YOU HOLD A │
   │ ROUND, FLEXIBLE, SPRINGY THING ACCURATELY    │
   │ WITHOUT CRUSHING IT?                         │
   └──────────────────────────────────────────────┘
```

### 6. Engineering explanation

**THE FOUR TUBE-SPECIFIC PHENOMENA**

```
   1 SPRINGBACK

     A tube bent to 90° and released returns to
     less than 90°, because the elastic part of
     the deformation recovers.

     → THE MACHINE MUST OVERBEND.
     → The amount depends on material, temper,
       diameter, wall thickness, bend radius and
       even the specific coil of material.

     ┌────────────────────────────────────────────┐
     │ SPRINGBACK IS NOT A CONSTANT AND MUST BE   │
     │ ESTABLISHED BY TRIAL FOR THE SPECIFIC      │
     │ MATERIAL AND SETUP.                        │
     │                                            │
     │ IT ALSO VARIES BATCH TO BATCH, WHICH IS    │
     │ WHY TUBE BENDING IS A CLOSED-LOOP PROCESS: │
     │ BEND, MEASURE, CORRECT, REPEAT.            │
     └────────────────────────────────────────────┘

   2 OVALITY

     Bending flattens the tube. The outside of the
     bend is stretched and thins; the inside is
     compressed and may wrinkle.

     → a mandrel supports the bore during bending
     → THE TUBE IS NO LONGER ROUND AT THE BENDS,
       so a fixture cannot locate on a bend as if
       it were a cylinder

   3 WALL THINNING

     The outside of a bend thins. On a pressure
     application this can be the governing
     structural check.
     → not a fixture problem directly, but it
       limits how tight a bend can be, which
       affects the shape the fixture must handle

   4 ACCUMULATION

     A tube with six bends has six angles, six
     rotations and six distances between bends.
     EVERY ERROR FEEDS THE NEXT BEND'S STARTING
     POSITION.

     ┌────────────────────────────────────────────┐
     │ A SMALL ANGULAR ERROR EARLY IN THE TUBE    │
     │ BECOMES A LARGE POSITIONAL ERROR AT THE    │
     │ FAR END — THE LEVER ARM IS THE REMAINING   │
     │ LENGTH OF TUBE.                            │
     │                                            │
     │ THIS IS WHY TUBE TOLERANCES ARE USUALLY    │
     │ SPECIFIED AS AN END-POINT ENVELOPE RATHER  │
     │ THAN AS INDIVIDUAL BEND ANGLES.            │
     └────────────────────────────────────────────┘
```

**HOW TO LOCATE A TUBE**

`[PRACTICE]` The available strategies, and what each costs:

| Strategy | How it works | Constraints supplied | Weakness |
|---|---|---|---|
| **V-blocks** | Two V surfaces cradle the tube | Two per block (position in the V plane) | Tube diameter variation shifts the centre |
| **Half-round cradles** | A matching semicircular seat | Two per cradle | Only works at the nominal diameter |
| **Full-round clamshells** | Closes around the tube | Position + some rotation via friction | Can crush; hard to load |
| **End plugs / spigots** | Enter the bore at a cut end | Position + rotation of that end | Relies on bore roundness and end squareness |
| **The cut end face** | An axial stop | One (axial position) | Only if the end is square and burr-free |
| **Formed features** | Flares, beads, dimples, holes | Depends | Only exists after forming |
| **Holes pierced in the tube** | A pin through a hole | Position + rotation | **The best datum a tube can have** |

```
   ┌──────────────────────────────────────────────┐
   │ THE V-BLOCK PROBLEM, STATED PRECISELY.       │
   │                                              │
   │ A V-block locates the tube's SURFACE, not    │
   │ its AXIS. If the tube diameter varies, the   │
   │ axis moves.                                  │
   │                                              │
   │ For a 90° V, a diameter change of Δd moves   │
   │ the axis vertically by                       │
   │                                              │
   │      Δh = Δd/2 × (1/sin(θ/2))                │
   │                                              │
   │ With θ = 90°: Δh = Δd/2 × 1.414              │
   │              = 0.707 × Δd                    │
   │                                              │
   │ SO A 0.3 mm DIAMETER VARIATION MOVES THE     │
   │ AXIS 0.212 mm.                               │
   │                                              │
   │ TUBE DIAMETER TOLERANCES ARE OFTEN LOOSE.    │
   │ CHECK THE ACTUAL TOLERANCE BEFORE ASSUMING   │
   │ A V-BLOCK IS ADEQUATE. [STD] Dimensional     │
   │ tolerances for tube are given in the         │
   │ applicable product standard, which must be   │
   │ identified.                                  │
   └──────────────────────────────────────────────┘
```

**THE SIX SUB-CLASSES IN DETAIL**

```
   CUTTING FIXTURE
     Requirement: repeatable LENGTH, square cut,
     no crushing, no burr into the bore
     → axial stop, not a measurement
     → clamping distributed to avoid ovalising
     → chip/swarf clearance at the cut

     [PRACTICE] The stop must be RETRACTABLE or
     the cut piece jams against it. This is the
     single most common cutting fixture defect.

   BENDING — TOOLING, NOT REALLY A FIXTURE
     The bend die, clamp die, pressure die,
     wiper die and mandrel ARE the tooling.
     A fixture's role is usually in the
     PRE-POSITIONING and the ORIENTATION between
     bends.
     → the critical variable is the rotation
       between bends, and it accumulates

   CHECKING FIXTURE — THE HARDEST
     How do you judge whether a bent tube is
     right?
     → It has no datums.
     → Its shape is a curve in three dimensions.
     → It is flexible, so it takes the shape of
       whatever you put it in.

     ┌────────────────────────────────────────────┐
     │ THE FLEXIBILITY PROBLEM IS PROFOUND.       │
     │                                            │
     │ IF YOU CLAMP A TUBE INTO A CHECKING        │
     │ FIXTURE, YOU HAVE FORCED IT INTO SHAPE AND │
     │ MEASURED NOTHING.                          │
     │                                            │
     │ A TUBE CHECKING FIXTURE MUST THEREFORE     │
     │ CHECK WITHOUT CLAMPING — TYPICALLY WITH    │
     │ GO/NO-GO CRADLES THE TUBE MUST DROP INTO   │
     │ UNDER ITS OWN WEIGHT.                      │
     │                                            │
     │ [STD] Free-state requirements for non-     │
     │ rigid parts are addressed in ISO 10579-NR  │
     │ and in ASME Y14.5's free state modifier.   │
     │ THE APPLICABLE STANDARD AND THE RESTRAINT  │
     │ CONDITION MUST BE STATED ON THE DRAWING.   │
     └────────────────────────────────────────────┘

   WELDING FIXTURE FOR TUBE
     All of L3.1.2, plus:
     → tube-to-tube joints need the ORIENTATION
       controlled, not just the position
     → a round joint means the torch must travel
       around it — access all the way round
     → thin wall means heat distorts it readily

   ASSEMBLY FIXTURE
     → orientation of fittings, brackets and
       flanges is usually the critical output
     → a flange rotated 5° is a reject even
       though every position is correct

   END-FORMING FIXTURE
     Flaring, beading, expanding, reducing.
     → LARGE AXIAL FORCE
     → the tube must be gripped well enough to
       react it WITHOUT being crushed
     → grip length matters: too short and it
       slips, too long and it costs material
     → THE TUBE CAN BUCKLE if unsupported between
       the grip and the forming tool
```

**WHY REWORK AND RECUT FIXTURES EXIST FOR TUBE**

```
   Tube is bent, then cut, then welded, then
   checked. If it fails the check, the options
   are scrap or rework.

   Because tube is expensive in assemblies and the
   value added by the time it fails is high,
   REWORK IS COMMON — and rework needs its own
   fixture.

   ┌──────────────────────────────────────────────┐
   │ THE REWORK FIXTURE'S PROBLEM: THE DATUM HAS  │
   │ ALREADY BEEN CONSUMED.                       │
   │                                              │
   │ The tube was located on its cut end. The     │
   │ recut removes material from that end. What   │
   │ do you locate on now?                        │
   │                                              │
   │ THIS IS THE SUBJECT OF L3.1.4, AND IT IS THE │
   │ REASON CORRECTION FIXTURES ARE TREATED AS A  │
   │ SEPARATE FAMILY RATHER THAN AS A VARIANT.    │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Springback** | Elastic recovery after bending; the bend opens up |
| **Overbend** | Bending past the target so springback lands on it |
| **Ovality** | Departure from roundness, caused by bending |
| **Wall thinning** | Reduction in wall thickness on the outside of a bend |
| **Mandrel** | Internal support inserted during bending to control ovality |
| **Wiper die** | Tooling preventing wrinkles on the inside of a bend |
| **Bend die** | The former defining the bend radius |
| **CLR** | Centre-line radius of a bend |
| **DBB / LRA** | Distance between bends; Length–Rotation–Angle, the usual way a bent tube is specified |
| **Rotation** | The angular orientation between successive bend planes |
| **Developed length** | The straight length of tube required to produce the bent part |
| **End-forming** | Flaring, beading, expanding or reducing a tube end |
| **Free state** | The condition of a non-rigid part under no restraint `[STD]` |
| **Clamshell** | A full-round closing clamp |
| **Notching** | Cutting a profile in a tube end so it fits another tube |

### 8. Principle

> **A TUBE HAS NO FLAT FACES, SO 3-2-1 MUST BE SUPPLIED BY DIFFERENT FEATURES** — six constraints are
> still six constraints, but V-blocks, plugs, cut ends and pierced holes replace planes.
> **A V-BLOCK LOCATES THE SURFACE, NOT THE AXIS.** A 0.3 mm diameter variation moves the axis 0.212 mm in
> a 90° V.
> **A PIERCED HOLE IS THE BEST DATUM A TUBE CAN HAVE**, because it controls position and rotation together
> and does not depend on diameter.
> **BENDING IS A CLOSED-LOOP PROCESS**: springback varies with material batch, so bend, measure, correct.
> **ERRORS ACCUMULATE ALONG A TUBE**, with the remaining length as the lever arm — which is why tolerances
> are specified as end-point envelopes.
> **A TUBE CHECKING FIXTURE MUST NOT CLAMP**, because clamping a flexible part forces it into shape and
> measures nothing.
> **THE CUTTING FIXTURE'S STOP MUST RETRACT**, or the cut piece jams against it.

### 9. Industrial application

**Specifying a bent tube — the LRA method** `[PRACTICE]`

```
   A BENT TUBE IS NOT SPECIFIED BY COORDINATES.
   IT IS SPECIFIED AS A SEQUENCE:

   ┌──────┬────────┬──────────┬───────┐
   │ BEND │ LENGTH │ ROTATION │ ANGLE │
   │      │  (mm)  │   (°)    │  (°)  │
   ├──────┼────────┼──────────┼───────┤
   │  1   │  185.0 │    0.0   │  45.0 │
   │  2   │  240.5 │   90.0   │  90.0 │
   │  3   │  118.0 │  −35.0   │  30.0 │
   │  4   │  312.0 │  180.0   │  60.0 │
   └──────┴────────┴──────────┴───────┘
   plus a final straight length

   LENGTH   = straight distance to the next bend
   ROTATION = how far the tube is rotated about
              its own axis before this bend
   ANGLE    = how far it is bent

   ┌──────────────────────────────────────────────┐
   │ THIS IS THE FORM A BENDING MACHINE IS        │
   │ PROGRAMMED IN, AND IT IS WHY ROTATION ERRORS │
   │ MATTER SO MUCH.                              │
   │                                              │
   │ A 1° ROTATION ERROR AT BEND 2 SWINGS         │
   │ EVERYTHING DOWNSTREAM OF IT AROUND THE TUBE  │
   │ AXIS. WITH 500 mm OF TUBE REMAINING, THAT IS │
   │                                              │
   │   e = L × sin(1°) = 500 × 0.01745            │
   │     = 8.7 mm                                 │
   │                                              │
   │ AT THE FAR END. FROM ONE DEGREE.             │
   └──────────────────────────────────────────────┘
```

**The checking fixture that lied** `[EX-ASSUMED]`:

```
SITUATION
  An exhaust tube assembly passed its checking
  fixture consistently and failed on the vehicle.

THE CHECKING FIXTURE
  Four clamshell clamps closed around the tube at
  four points and the inspector confirmed all four
  closed.

WHAT WAS ACTUALLY HAPPENING
  The tube was out of shape. The clamps were
  strong enough to PULL IT INTO SHAPE. Every tube
  that could be forced into the fixture passed.

  THE FIXTURE WAS MEASURING WHETHER THE TUBE
  COULD BE BENT INTO POSITION BY HAND, NOT
  WHETHER IT WAS IN POSITION.

THE FIX
  Replaced the clamshells with open cradles the
  tube must DROP INTO under its own weight, with
  a specified clearance, and a Go/No-Go check at
  the free end.

  Result: 22 % of previously "passing" tubes now
  failed — which matched the vehicle line's
  reject rate almost exactly.

┌──────────────────────────────────────────────┐
│ A CHECKING FIXTURE THAT CLAMPS A FLEXIBLE    │
│ PART IS NOT A CHECKING FIXTURE. IT IS AN     │
│ ASSEMBLY FIXTURE THAT ISSUES CERTIFICATES.   │
│                                              │
│ THIS IS THE SINGLE MOST COMMON AND MOST      │
│ EXPENSIVE ERROR IN TUBE INSPECTION.          │
└──────────────────────────────────────────────┘
```

### 10. Design rules
- **R1** — Establish the **six constraints explicitly** for a tube; do not assume 3-2-1 transfers.
- **R2** — **Check the tube's diameter tolerance** `[STD]` before relying on a V-block or cradle.
- **R3** — Prefer a **pierced hole** as a datum wherever the design permits one.
- **R4** — Where the tube is located on a **cut end**, require the end square and deburred.
- **R5** — **Never clamp a flexible part in a checking fixture**; use drop-in cradles and Go/No-Go.
- **R6** — State the **free-state or restrained condition** on the drawing `[STD]` ISO 10579-NR or ASME
  Y14.5 free state.
- **R7** — Make a cutting fixture's **stop retractable**.
- **R8** — Distribute clamping to avoid **ovalising** the tube.
- **R9** — Locate away from **bends**, where the tube is no longer round.
- **R10** — Treat **rotation between bends** as a critical variable, not a secondary one.
- **R11** — For end-forming, **support against buckling** between the grip and the tool.
- **R12** — Establish **springback by trial** for the specific material and batch; never assume it.
- **R13** — Specify tube tolerances as an **end-point envelope**, not as individual bend angles, unless
  there is a reason.
- **R14** — Plan for **rework**: decide in advance what a reworked tube will be located on.

### 11. Rules of thumb
- **A tube has no flat faces — 3-2-1 must come from somewhere else.**
- **A V-block locates the surface, not the axis.**
- **A pierced hole is the best datum a tube can have.**
- **Locate away from bends; the tube is oval there.**
- **Never clamp a flexible part to check it.**
- **A checking fixture that clamps issues certificates, not measurements.**
- **Rotation errors swing everything downstream.**
- **One degree at 500 mm is 8.7 mm.**
- **Errors accumulate; specify the end-point envelope.**
- **The cutting stop must retract or the piece jams.**
- **Springback varies by batch — bend, measure, correct.**
- **Decide what a reworked tube locates on before you need to.**

### 12. Formulae

**V-block axis shift with diameter variation**
```
Δh = (Δd/2) / sin(θ/2)

θ = included angle of the V
For θ = 90°:  Δh = 0.707 × Δd
For θ = 60°:  Δh = 1.000 × Δd
For θ = 120°: Δh = 0.577 × Δd

┌──────────────────────────────────────────────┐
│ A WIDER V IS LESS SENSITIVE TO DIAMETER      │
│ VARIATION BUT LOCATES LESS FIRMLY SIDEWAYS.  │
│ A NARROWER V IS THE OPPOSITE. 90° IS THE     │
│ USUAL COMPROMISE. [PRACTICE]                 │
└──────────────────────────────────────────────┘
```

**Positional error from an angular error**
```
e = L × sin(φ)

For small angles, e ≈ L × φ (φ in radians)
1° = 0.017453 rad

THE LEVER ARM IS THE REMAINING TUBE LENGTH,
WHICH IS WHY EARLY BENDS MATTER MOST.
```

**Developed length**
```
L_dev = Σ straight lengths + Σ bend arc lengths

Arc length of a bend = (θ/360) × 2π × CLR
                     = θ × π × CLR / 180

[PRACTICE] This is a GEOMETRIC length. The
material's actual behaviour — stretch on the
outside, compression on the inside — means the
practical developed length differs, and a
BEND DEDUCTION or elongation factor must be
established BY TRIAL for the specific tooling and
material. DO NOT USE THE GEOMETRIC LENGTH AS A
CUTTING LENGTH WITHOUT VERIFICATION.
```

**Ovality**
```
Ovality % = (d_max − d_min)/d_nominal × 100

[STD] Permissible ovality is specified in the
applicable product or application standard, and
for pressure applications it may be a structural
requirement. IDENTIFY THE STANDARD.
```

**What must be established by trial, not calculated**
```
✗ springback angle
✗ bend deduction / elongation
✗ achievable ovality for a given tooling set
✗ wall thinning for a given bend

ALL FOUR DEPEND ON MATERIAL BATCH, TOOLING
CONDITION AND LUBRICATION.
```

| Variable | Meaning | Unit |
|---|---|---|
| Δd | Diameter variation | mm |
| θ | V-block included angle, or bend angle | ° |
| Δh | Axis height shift | mm |
| L | Remaining tube length (lever arm) | mm |
| φ | Angular error | ° or rad |
| CLR | Centre-line radius | mm |

### 13. Worked numerical example

**Problem:** A bent tube assembly is failing its end-point tolerance. Determine the contribution of each
error source, establish whether the fixture or the bending process is responsible, and evaluate two
proposed locating schemes.

```
GIVEN:
  PART                                          [PROJ]
    Mild steel tube, Ø38.0 × 1.5 mm wall
    Diameter tolerance, per the product
      standard   = ±0.30 mm     [STD] — the
      applicable standard must be identified;
      this figure is taken as the project value
    Four bends, LRA as follows:

    ┌──────┬────────┬──────────┬───────┐
    │ BEND │ LENGTH │ ROTATION │ ANGLE │
    ├──────┼────────┼──────────┼───────┤
    │  1   │  210.0 │    0.0   │  60.0 │
    │  2   │  340.0 │   90.0   │  45.0 │
    │  3   │  155.0 │  −60.0   │  90.0 │
    │  4   │  225.0 │  120.0   │  30.0 │
    └──────┴────────┴──────────┴───────┘
    Final straight = 180.0 mm
    CLR = 57.0 mm (1.5 × D)

    END-POINT TOLERANCE = Ø2.0 mm positional
      (i.e. ±1.0 mm radial)

  MEASURED PERFORMANCE                          [PROJ]
    30 tubes measured at the free end
    Mean deviation = 2.9 mm
    Range          = 1.8 to 4.1 mm

  PROCESS CAPABILITY                       [EX-ASSUMED]
    Bender rotation repeatability = ±0.25°
    Bender angle repeatability    = ±0.30°
    Bender length repeatability   = ±0.50 mm

  PROPOSED LOCATING SCHEMES              [EX-ASSUMED]
    SCHEME 1: two 90° V-blocks on the first
      straight, plus an end stop
    SCHEME 2: one pierced Ø8.0 mm hole in the
      first straight with a pin, plus one V-block

REQUIRED:
  (a) Total developed length, geometric
  (b) Distance from bend 2 to the free end, and
      the end-point error from a 0.25° rotation
      error at bend 2
  (c) The same for bend 1
  (d) Combined end-point error from the bender's
      repeatability, by RSS
  (e) Axis shift from tube diameter variation in a
      90° V-block, and its end-point effect
  (f) Compare the two locating schemes
  (g) Determine whether the fixture or the bender
      is responsible for the 2.9 mm mean
  (h) Recommendation

ASSUMPTION:
  1. Bender repeatability figures are illustrative
     and MUST be obtained from the machine's own
     capability study. [EX-ASSUMED]
  2. THE GEOMETRIC DEVELOPED LENGTH IS NOT THE
     CUTTING LENGTH. A bend deduction must be
     established by trial. The geometric figure is
     calculated here only to establish scale.
     [PRACTICE]
  3. Errors combined by RSS, which assumes they
     are independent and roughly normal. Rotation
     and angle errors on the same machine may be
     correlated; if so RSS understates. [GUIDE]
  4. The lever arm for a rotation error is taken
     as the straight-line distance from that bend
     to the end point. This is an approximation
     that is good for moderate angles. [GUIDE]
  5. Diameter tolerance of ±0.30 mm is taken as
     the project value; THE APPLICABLE PRODUCT
     STANDARD MUST BE IDENTIFIED AND ITS ACTUAL
     TOLERANCE USED. [STD]
  6. The tube is treated as rigid for this
     analysis. It is not — sag under its own
     weight is a further contributor and must be
     assessed separately. [PROJ]

FORMULA:
  Arc = θ × π × CLR/180
  e = L × sin(φ)
  Δh = (Δd/2)/sin(θ/2)
  RSS: e_total = √(Σ eᵢ²)

UNIT CONVERSION:
  Degrees → radians: × π/180
  1° = 0.0174533 rad

SUBSTITUTION AND CALCULATION:

  (a) GEOMETRIC DEVELOPED LENGTH

      Straights:
        210.0 + 340.0 + 155.0 + 225.0 + 180.0
        = 1,110.0 mm

      Arcs, CLR = 57.0:
        Bend 1, 60°: 60 × π × 57/180
                   = 59.690 mm
        Bend 2, 45°: 45 × π × 57/180
                   = 44.768 mm
        Bend 3, 90°: 90 × π × 57/180
                   = 89.535 mm
        Bend 4, 30°: 30 × π × 57/180
                   = 29.845 mm
        Total arcs = 223.838 mm

      GEOMETRIC DEVELOPED LENGTH
        = 1,110.0 + 223.838
        = 1,333.84 mm

      ┌────────────────────────────────────────────┐
      │ THIS IS NOT THE CUTTING LENGTH. A BEND     │
      │ DEDUCTION MUST BE ESTABLISHED BY TRIAL.    │
      │ [PRACTICE]                                 │
      └────────────────────────────────────────────┘

  (b) ROTATION ERROR AT BEND 2

      Remaining tube length after bend 2
        (as a lever arm, taken as the sum of
         downstream straights and arcs):
        155.0 + 225.0 + 180.0 = 560.0 straights
        + 89.535 + 29.845 = 119.380 arcs
        = 679.38 mm

      Straight-line distance is LESS than this
      because the tube bends back on itself. Take
      the lever arm conservatively as 560 mm
      [GUIDE] — a project analysis would compute
      the true 3-D distance.

      e = L × sin(0.25°)
        = 560 × 0.0043633
        = 2.443 mm

      ┌────────────────────────────────────────────┐
      │ A QUARTER OF A DEGREE OF ROTATION ERROR    │
      │ GIVES 2.44 mm AT THE END POINT — AGAINST A │
      │ TOTAL TOLERANCE OF ±1.0 mm.                │
      │                                            │
      │ THAT IS 2.44× THE ENTIRE BUDGET, FROM ONE  │
      │ SOURCE, AT ONE BEND.                       │
      └────────────────────────────────────────────┘

  (c) ROTATION ERROR AT BEND 1

      Lever arm, conservatively:
        340.0 + 155.0 + 225.0 + 180.0 = 900.0 mm

      e = 900 × 0.0043633
        = 3.927 mm

      RATIO to bend 2:
        3.927/2.443 = 1.607×

      → EARLIER BENDS MATTER MORE, in proportion
        to the remaining length.

  (d) COMBINED BENDER CONTRIBUTION, RSS

      Rotation errors (0.25° each):
        Bend 1: 900 mm  → 3.927 mm
        Bend 2: 560 mm  → 2.443 mm
        Bend 3: 405 mm  → 1.767 mm
        Bend 4: 180 mm  → 0.785 mm

      Angle errors (0.30° each), same lever arms:
        sin(0.30°) = 0.0052360
        Bend 1: 900 × 0.0052360 = 4.712 mm
        Bend 2: 560 × 0.0052360 = 2.932 mm
        Bend 3: 405 × 0.0052360 = 2.121 mm
        Bend 4: 180 × 0.0052360 = 0.942 mm

      Length errors (0.50 mm each), 4 off:
        contribute directly, 0.50 mm each

      RSS of all twelve:
        rotation² sum:
          3.927² = 15.421
          2.443² =  5.968
          1.767² =  3.122
          0.785² =  0.616
          subtotal = 25.127

        angle² sum:
          4.712² = 22.203
          2.932² =  8.597
          2.121² =  4.499
          0.942² =  0.887
          subtotal = 36.186

        length² sum:
          4 × 0.50² = 1.000

        TOTAL = 25.127 + 36.186 + 1.000
              = 62.313

        e_RSS = √62.313 = 7.894 mm

      ┌────────────────────────────────────────────┐
      │ THE BENDER ALONE, AT ITS STATED            │
      │ REPEATABILITY, PRODUCES 7.89 mm OF         │
      │ END-POINT SCATTER AGAINST A ±1.0 mm        │
      │ TOLERANCE.                                 │
      │                                            │
      │ THAT IS 7.89× THE BUDGET BEFORE THE        │
      │ FIXTURE CONTRIBUTES ANYTHING AT ALL.       │
      └────────────────────────────────────────────┘

  (e) FIXTURE CONTRIBUTION FROM DIAMETER VARIATION

      90° V-block, Δd = 0.60 mm (full ±0.30 band):
        Δh = (0.60/2)/sin(45°)
           = 0.300/0.70711
           = 0.424 mm

      This displaces the tube's axis at the
      locating point. Its effect at the end point
      depends on whether it is a pure translation
      (carried through unchanged) or a tilt.

      With TWO V-blocks 150 mm apart, a differing
      diameter at each creates a TILT:
        worst case tilt = 0.424/150
                        = 0.002827 rad
                        = 0.162°

      At the far end (1,110 mm of straights):
        e = 1,110 × 0.002827
          = 3.138 mm

      ┌────────────────────────────────────────────┐
      │ TUBE DIAMETER VARIATION ALONE, THROUGH TWO │
      │ V-BLOCKS, CONTRIBUTES 3.14 mm AT THE END   │
      │ POINT.                                     │
      │                                            │
      │ THE FIXTURE IS NOT INNOCENT EITHER.        │
      └────────────────────────────────────────────┘

  (f) COMPARING THE TWO SCHEMES

      SCHEME 1 — two V-blocks + end stop
        Diameter-driven tilt: 3.138 mm
        Rotation: controlled only by friction in
          the V — POORLY CONTROLLED
        → the V-block does not constrain rotation
          about the tube axis AT ALL without
          clamping friction

      SCHEME 2 — pierced hole + pin, plus one
      V-block
        The pin through a pierced hole controls:
          - position in two directions
          - ROTATION about the tube axis
        And it does NOT depend on tube diameter.

        Remaining diameter sensitivity: the single
        V-block still shifts by 0.424 mm, but as a
        TRANSLATION at one point, not a tilt.
        With the pin controlling rotation, the
        end-point effect is roughly the
        translation itself:
          ≈ 0.424 mm

        IMPROVEMENT over Scheme 1:
          3.138/0.424 = 7.40×

      ┌────────────────────────────────────────────┐
      │ THE PIERCED HOLE IMPROVES THE FIXTURE      │
      │ CONTRIBUTION BY 7.40× AND — MORE           │
      │ IMPORTANTLY — CONTROLS ROTATION, WHICH THE │
      │ V-BLOCKS DID NOT CONTROL AT ALL.           │
      └────────────────────────────────────────────┘

  (g) WHO IS RESPONSIBLE FOR THE 2.9 mm MEAN?

      Measured: mean 2.9 mm, range 1.8 to 4.1 mm
        → spread = 2.3 mm

      Bender scatter predicted (RSS): 7.89 mm
      Observed scatter:               2.3 mm

      ┌────────────────────────────────────────────┐
      │ THE OBSERVED SCATTER IS FAR SMALLER THAN   │
      │ THE PREDICTED BENDER SCATTER —             │
      │ 2.3 AGAINST 7.89, A FACTOR OF 3.43.        │
      │                                            │
      │ THAT IS AN IMPORTANT AND SLIGHTLY          │
      │ SURPRISING RESULT. IT MEANS THE BENDER'S   │
      │ STATED REPEATABILITY FIGURES ARE           │
      │ PESSIMISTIC, OR THE ERRORS ARE CORRELATED  │
      │ RATHER THAN INDEPENDENT, OR BOTH.          │
      │                                            │
      │ THE ASSUMED CAPABILITY DATA IS THEREFORE   │
      │ NOT TRUSTWORTHY AND MUST BE MEASURED.      │
      └────────────────────────────────────────────┘

      What IS clear from the data:
        MEAN 2.9 mm with a spread of only 2.3 mm
        → THE PROBLEM IS PREDOMINANTLY BIAS.

        A bias of 2.9 mm with the tolerance at
        ±1.0 mm means even a perfectly repeatable
        process fails.

      BIAS IS CORRECTABLE (principle 102).
      → the bend programme should be corrected:
        measure, adjust the overbend and rotation
        values, re-measure. THE CLOSED LOOP.

  (h) RECOMMENDATION

      1 CORRECT THE BIAS FIRST. 2.9 mm of mean
        error is a programme correction, not a
        fixture problem. Expected result: mean
        near zero, spread unchanged at ~2.3 mm.

      2 EVEN THEN, ±1.15 mm SPREAD AGAINST A
        ±1.0 mm TOLERANCE STILL FAILS —
        1.15× over.

      3 SO ADOPT SCHEME 2. The pierced hole
        removes the diameter-driven tilt (3.14 mm
        potential) and controls rotation.

      4 MEASURE THE BENDER'S ACTUAL CAPABILITY.
        The assumed figures predicted 7.89 mm of
        scatter and 2.3 mm was observed. The data
        is wrong and every allocation built on it
        is wrong.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Geometric developed len. │ 1,333.84 mm       │
  │     (NOT the cutting length) │                   │
  │ (b) 0.25° at bend 2          │ 2.443 mm          │
  │     vs ±1.0 mm tolerance     │ 2.44× the budget  │
  │ (c) 0.25° at bend 1          │ 3.927 mm (1.607×) │
  │ (d) Bender RSS total         │ 7.894 mm = 7.89×  │
  │                              │ the budget        │
  │ (e) V-block Δd axis shift    │ 0.424 mm          │
  │     Tilt effect at end       │ 3.138 mm          │
  │ (f) Scheme 2 vs Scheme 1     │ 7.40× better, AND │
  │                              │ controls rotation │
  │ (g) Measured mean / spread   │ 2.9 / 2.3 mm      │
  │     → predominantly BIAS     │                   │
  │     Predicted vs observed    │ 7.89 vs 2.3 =     │
  │     scatter                  │ 3.43× — DATA WRONG│
  │ (h) RECOMMENDATION           │ correct bias,     │
  │                              │ adopt Scheme 2,   │
  │                              │ measure capability│
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The equivalent is
  the ratio of contributors to the tolerance
  budget, and every one of them exceeds it: bender
  7.89×, fixture tilt 3.14×, bias 2.9×. THERE IS
  NO MARGIN ANYWHERE IN THIS PROCESS.

PASS/FAIL:
  ✗ FAIL — mean 2.9 mm against ±1.0 mm
  ✗ FAIL — spread 2.3 mm against a 2.0 mm band
  ✗ FAIL — Scheme 1 fixture contribution alone
    3.14 mm
  ⚠ MARGINAL — even after bias correction and
    Scheme 2, the spread is 1.15× the tolerance
  ⚠ THE BENDER CAPABILITY DATA IS DEMONSTRABLY
    WRONG and must be re-measured before any
    allocation is trusted

ENGINEERING CONCLUSION:
  1. ANGULAR ERRORS DOMINATE EVERYTHING, AND THE
     LEVER ARM IS THE WHOLE TUBE.
     A quarter of a degree of rotation error at
     bend 2 put 2.44 mm at the end point — 2.44
     times the entire tolerance — and the same
     error at bend 1 put 3.93 mm, because there
     was 1.607× more tube downstream of it. This
     is the defining characteristic of tube work
     and it has no equivalent in prismatic
     machining, where an angular error affects
     only the feature it applies to. HERE IT
     AFFECTS EVERY FEATURE DOWNSTREAM, AMPLIFIED
     BY DISTANCE.

  2. THE V-BLOCK SCHEME FAILED ON THE AXIS IT WAS
     NOT DESIGNED TO CONTROL.
     Two V-blocks contribute 3.14 mm at the end
     point from tube diameter variation alone —
     because differing diameters at the two blocks
     TILT the tube, and the tilt is amplified over
     1,110 mm. But the more serious defect is that
     A V-BLOCK DOES NOT CONSTRAIN ROTATION ABOUT
     THE TUBE AXIS AT ALL, except through clamping
     friction. On a part whose entire specification
     is a sequence of rotations, that is not a
     minor gap. The pierced hole scheme was 7.40×
     better on the diameter sensitivity and
     categorically better on rotation.

  3. THE DIAGNOSIS WAS BIAS, AND THE FIXTURE WAS
     NOT THE FIRST THING TO FIX.
     Mean 2.9 mm with a spread of 2.3 mm is
     predominantly a systematic error, which means
     the bend programme is wrong — the overbend
     and rotation values need correcting against
     measurement. THAT IS FREE, AND IT ADDRESSES
     MORE OF THE PROBLEM THAN A NEW FIXTURE WOULD.
     The fixture change is still needed, because
     the spread alone still fails, but the order
     matters: correcting bias first tells you
     honestly how much of the remaining problem is
     the fixture's.

  4. THE CAPABILITY DATA WAS WRONG AND THE
     CALCULATION IS WHAT REVEALED IT.
     The stated bender repeatability predicted
     7.89 mm of scatter; 2.3 mm was observed — a
     factor of 3.43 in the wrong direction for the
     data to be believable. Either the figures are
     pessimistic, or the error sources are
     correlated so RSS overstates, or both. IT
     DOES NOT MATTER WHICH: THE POINT IS THAT
     EVERY TOLERANCE ALLOCATION BUILT ON THOSE
     NUMBERS IS UNRELIABLE, and the honest next
     step is a capability study rather than a
     design decision.
     I would rather discover this in a calculation
     than after buying a fixture.

  5. THE STRUCTURAL LESSON FOR TUBE WORK.
     Every contributor in this analysis exceeded
     the tolerance budget on its own — bender
     7.89×, fixture tilt 3.14×, bias 2.9×. THAT IS
     NORMAL FOR TUBE, AND IT IS WHY TUBE BENDING
     IS RUN AS A CLOSED LOOP rather than as an
     open-loop process with a tolerance stack. You
     bend, you measure, you correct the programme,
     and you keep measuring — because springback
     changes with the material batch and the loop
     never closes permanently.

SENSITIVITY NOTE:
  Ranked by influence:
    1. ANGULAR ERRORS AT EARLY BENDS — linear in
       the remaining length, and the remaining
       length is largest at bend 1. The single
       dominant sensitivity in all tube work.
    2. THE BENDER'S TRUE CAPABILITY — unknown, and
       demonstrably not what was stated. Until it
       is measured every other number here is
       provisional.
    3. TUBE DIAMETER TOLERANCE — drives the entire
       V-block contribution. Halving it halves
       3.14 mm; the pierced hole removes the
       sensitivity altogether.
    4. THE LEVER-ARM APPROXIMATION — the straight
       sums used here are conservative; a true 3-D
       distance would be shorter and the errors
       correspondingly smaller. This affects
       magnitudes but not the ranking.
    5. RSS INDEPENDENCE — if the bender's rotation
       and angle errors are correlated, RSS is the
       wrong combination rule. Given the observed
       discrepancy, this is a live possibility.
```

### 14. Engineering assumptions
- Bender repeatability figures are illustrative and **must be obtained from the machine's own capability
  study** — and in this case were shown to be unreliable `[EX-ASSUMED]`.
- **The geometric developed length is not the cutting length**; a bend deduction must be established by
  trial `[PRACTICE]`.
- Errors combined by RSS, which assumes independence; **rotation and angle errors on one machine may be
  correlated**, in which case RSS is the wrong rule `[GUIDE]`.
- Lever arms taken as the sum of downstream straights — **conservative**; a project analysis would compute
  the true 3-D distance `[GUIDE]`.
- Diameter tolerance ±0.30 mm taken as a project value; **the applicable product standard must be
  identified** `[STD]`.
- **The tube is treated as rigid, which it is not** — sag under its own weight is a further contributor
  requiring separate assessment `[PROJ]`.

### 15. Diagram

```
     THE TUBE FIXTURE FAMILY
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  WHY A TUBE BREAKS THE RULES

   CONVENTIONAL PART        BENT TUBE
   ─────────────────        ─────────
   flat faces            →  round everywhere
   machined dimensions   →  a PROCESS RESULT
   rigid                 →  flexible, sags
   independent features  →  errors ACCUMULATE

   ┌──────────────────────────────────────────────┐
   │ 3-2-1 STILL HOLDS AS A PRINCIPLE — SIX       │
   │ CONSTRAINTS ARE SIX CONSTRAINTS — BUT THERE  │
   │ IS NO PLANE TO PUT THREE POINTS ON.          │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE V-BLOCK PROBLEM

        ╲       ╱          A V LOCATES THE
         ╲ ○   ╱           SURFACE, NOT THE AXIS
          ╲___╱

   Δh = (Δd/2)/sin(θ/2)

   90° V :  Δh = 0.707 × Δd
   60° V :  Δh = 1.000 × Δd
  120° V :  Δh = 0.577 × Δd

   Δd = 0.60 mm  →  axis moves 0.424 mm

   TWO V-BLOCKS 150 mm APART, DIFFERENT DIAMETERS
   AT EACH  →  A TILT  →  3.138 mm AT THE END

   ┌──────────────────────────────────────────────┐
   │ AND THE MORE SERIOUS DEFECT: A V-BLOCK DOES  │
   │ NOT CONSTRAIN ROTATION ABOUT THE TUBE AXIS   │
   │ AT ALL, EXCEPT THROUGH CLAMPING FRICTION.    │
   │                                              │
   │ ON A PART SPECIFIED AS A SEQUENCE OF         │
   │ ROTATIONS, THAT IS NOT A MINOR GAP.          │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE PIERCED HOLE — THE BEST DATUM A TUBE CAN HAVE

     ═══════○═══════      pin through a hole
                          controls POSITION and
                          ROTATION together, and
                          does not depend on
                          DIAMETER

   Scheme 1 (2 V-blocks)   3.138 mm
   Scheme 2 (hole + 1 V)   0.424 mm
   ─────────────────────────────────
   IMPROVEMENT             7.40×
   PLUS rotation control the V never had

  ──────────────────────────────────────────────────────────

  THE LEVER ARM IS THE WHOLE TUBE

   0.25° of rotation error:

   at BEND 1, 900 mm downstream  ████████ 3.927 mm
   at BEND 2, 560 mm downstream  █████ 2.443 mm
   at BEND 3, 405 mm downstream  ███ 1.767 mm
   at BEND 4, 180 mm downstream  █ 0.785 mm

   TOLERANCE ±1.0 mm             ▏

   ┌──────────────────────────────────────────────┐
   │ ONE QUARTER OF A DEGREE AT BEND 2 IS 2.44×   │
   │ THE ENTIRE TOLERANCE.                        │
   │                                              │
   │ EARLY BENDS MATTER MOST — 1.607× MORE AT     │
   │ BEND 1 THAN AT BEND 2, BECAUSE THERE IS MORE │
   │ TUBE LEFT TO SWING.                          │
   │                                              │
   │ IN PRISMATIC MACHINING AN ANGULAR ERROR      │
   │ AFFECTS ONE FEATURE. HERE IT AFFECTS EVERY   │
   │ FEATURE DOWNSTREAM, AMPLIFIED BY DISTANCE.   │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE FOUR TUBE PHENOMENA

   SPRINGBACK    bent to 90°, returns to 87°
                 → OVERBEND, amount varies BY
                   MATERIAL BATCH
                 → closed loop: bend, measure,
                   correct

   OVALITY       the bend flattens the tube
                 → mandrel supports the bore
                 → DO NOT LOCATE ON A BEND

   WALL THINNING outside of the bend stretches
                 → limits how tight a bend can be

   ACCUMULATION  every error feeds the next bend
                 → specify an END-POINT ENVELOPE,
                   not individual angles

  ──────────────────────────────────────────────────────────

  THE CHECKING FIXTURE THAT LIED

   WHAT IT DID          four clamshells closed
                        around the tube
   WHAT IT MEASURED     whether the tube COULD BE
                        FORCED into position
   RESULT               everything passed; the
                        vehicle line rejected them

   THE FIX              open cradles the tube must
                        DROP INTO under its own
                        weight

   22 % OF "PASSING" TUBES THEN FAILED — matching
   the line's reject rate almost exactly.

   ┌──────────────────────────────────────────────┐
   │ A CHECKING FIXTURE THAT CLAMPS A FLEXIBLE    │
   │ PART IS NOT A CHECKING FIXTURE.              │
   │                                              │
   │ IT IS AN ASSEMBLY FIXTURE THAT ISSUES        │
   │ CERTIFICATES.                                │
   │                                              │
   │ [STD] State the free-state or restrained     │
   │ condition on the drawing — ISO 10579-NR, or  │
   │ the ASME Y14.5 free state modifier.          │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE DIAGNOSIS IN THE WORKED EXAMPLE

   measured   mean 2.9 mm   spread 2.3 mm
                    ▲              ▲
                  BIAS          SCATTER
              CORRECTABLE    NOT CORRECTABLE
              (programme)    (fixture, process)

   predicted bender scatter  7.89 mm
   observed scatter          2.30 mm
   ratio                     3.43×

   ┌──────────────────────────────────────────────┐
   │ THE CAPABILITY DATA IS WRONG, AND THE        │
   │ CALCULATION IS WHAT REVEALED IT.             │
   │                                              │
   │ EVERY ALLOCATION BUILT ON THOSE NUMBERS IS   │
   │ UNRELIABLE. MEASURE BEFORE DECIDING.         │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
FIXTURE FX-6300 — TUBE CHECKING FIXTURE
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: THIS FIXTURE CHECKS IN THE FREE STATE. THE
        TUBE SHALL DROP INTO ALL CRADLES UNDER ITS
        OWN WEIGHT. NO CLAMPING, NO FORCING, NO
        HAND PRESSURE.

NOTE 2: CRADLES ITEMS 4-9 ARE Go/No-Go. CLEARANCE
        PER TABLE ON SHEET 3. DO NOT MODIFY.

NOTE 3: THE TUBE IS LOCATED BY PIN ITEM 2 THROUGH
        THE PIERCED HOLE AND BY V-BLOCK ITEM 3
        ONLY. ALL OTHER CONTACTS ARE CHECKING
        FEATURES, NOT LOCATORS.

NOTE 4: TUBE DIAMETER TOLERANCE PER [PRODUCT
        STANDARD TO BE IDENTIFIED]. CRADLE
        CLEARANCES ASSUME THE FULL DIAMETER BAND.

NOTE 5: FREE-STATE REQUIREMENT PER THE APPLICABLE
        STANDARD — SEE PART DRAWING.
```

`[PRACTICE]` **Note 3 is the one that prevents the most damage.** On a tube fixture the difference between
a locator and a checking feature is invisible to anyone looking at the hardware — they are all cradles
touching the tube. **If the drawing does not say which two features locate, a well-meaning setter will
adjust a checking cradle to "make it fit"**, and the fixture will thereafter certify anything.

### 17. CAD workflow
1. Import or model the tube **centreline** first; the tube is a sweep along it
2. Build the model from the **LRA table**, not from coordinates — that is how it will be made
3. Model the tube at **maximum and minimum diameter** and check both fit the cradles
4. Identify the **two features that will locate**, and mark every other contact as a checking feature
5. Model the tube in its **distorted / worst-case state** and verify it can be loaded and removed
6. For bending, model the **tooling clearance** — bend die, clamp die, pressure die and their travel
7. Verify **nothing obstructs the tube's swing** as it rotates between bends
8. For checking fixtures, model the **Go/No-Go clearances** explicitly as dimensions, not as visual gaps

`[PRACTICE]` Step 7 is the tube-specific collision check with no machining analogue. **As the tube rotates
between bends, the already-bent portion sweeps a large volume**, and it will hit the machine, the floor,
or the operator. Bending machines have a limited swing envelope and it must be checked before the part is
designed, not after.

### 18. GD&T application

```
  TOLERANCING A BENT TUBE

  STANDARD: ASME Y14.5-2018, with free state
  considerations; or ISO GPS with ISO 10579-NR
  for non-rigid parts.
  IDENTIFY WHICH IS BEING FOLLOWED — the free
  state provisions differ.

  ┌────────────────────────────────────────────┐
  │ THE CENTRAL DIFFICULTY: A TUBE IS NON-RIGID│
  │                                            │
  │ Its shape depends on how it is supported.  │
  │ A tolerance is therefore MEANINGLESS       │
  │ WITHOUT A STATEMENT OF THE RESTRAINT       │
  │ CONDITION.                                 │
  │                                            │
  │ THE DRAWING MUST SAY EITHER:               │
  │   - FREE STATE, and how it is supported    │
  │     while measured, OR                     │
  │   - RESTRAINED, and exactly how            │
  │                                            │
  │ WITHOUT THAT, TWO INSPECTORS WILL GET      │
  │ DIFFERENT ANSWERS AND BOTH WILL BE RIGHT.  │
  └────────────────────────────────────────────┘

  WHAT IS USUALLY TOLERANCED
    ✔ END-POINT positions, as a positional
      tolerance zone (often Ø2.0 or similar)
    ✔ The position of pierced holes and formed
      features
    ✔ Interface features — flanges, flares —
      tightly
    ✗ Individual bend angles — usually NOT,
      because they accumulate and controlling
      them individually is both harder and less
      useful than controlling the result

  WHY THE END-POINT ENVELOPE IS THE RIGHT
  CHARACTERISTIC
    The tube's function is to connect two points.
    HOW IT GETS THERE MATTERS ONLY WHERE IT MUST
    CLEAR SOMETHING. So tolerance the ends
    tightly, the clearance zones as profile, and
    leave the middle alone.

  Profile tolerancing at Level 11; non-rigid part
  practice at Level 11; tube-specific inspection
  at Level 30.
```

### 19. Manufacturing method
| Element | Practice `[PRACTICE]` |
|---|---|
| **Cradles** | Machined to the tube's nominal outside diameter plus a stated clearance; often nylon or aluminium to avoid marking |
| **V-blocks** | Hardened if the tube is steel and the volume is high; 90° is the usual compromise |
| **Locating pins** | Hardened, and **relieved** so they do not jam if the tube is slightly out |
| **Checking cradles** | Made to a Go/No-Go clearance and **marked as non-adjustable** |
| **Base** | Must be stiff — tube fixtures are long, and a bowed base tilts everything |
| **Finish** | Non-marking where the tube is cosmetic (handrails, furniture, visible exhaust) |

> **"Relieved so they do not jam"** deserves emphasis. `[PRACTICE]` A full-length pin in a pierced hole
> will bind if the tube is even slightly out of position, and the operator will force it — **which bends
> the tube and makes it fit, exactly the failure mode of the checking fixture that lied.** A short,
> chamfered pin locates just as well and releases.

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Locating pin and V positions | CMM | Per drawing |
| Cradle clearances | Gauge pins or CMM | Per the Go/No-Go table |
| Tube drops in under its own weight | Physical, no hand pressure | Drops freely |
| End-point position | CMM, or a dedicated tube measuring machine `[MFR]` | Within the envelope |
| Free-state condition | Stated and followed | Per drawing note |
| Ovality at bends | Measure across bends | Per the applicable standard `[STD]` |
| Wall thinning | Ultrasonic, if structural | Per the applicable standard `[STD]` |
| Bias vs scatter | ≥30 tubes, mean and range separately | Bias correctable, scatter is not |

`[PRACTICE]` **A dedicated tube measuring machine** — an articulated arm or optical system that captures
the centreline and reports LRA — is the industry-standard instrument and it does something a CMM does
poorly: **it reports the correction to apply to the bender programme**, closing the loop directly. Where
tube volume is significant, it is usually the right investment before a better fixture.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Assuming **3-2-1 transfers** unchanged to a tube | No plane exists; scheme is under- or over-constrained |
| 2 | Locating on a **V-block** without checking diameter tolerance | Axis shifts with diameter |
| 3 | Assuming a V-block **controls rotation** | It does not, except by friction |
| 4 | Locating **on a bend** | The tube is oval there |
| 5 | **Clamping in a checking fixture** | Certifies anything that can be forced in |
| 6 | Not stating the **free-state condition** | Two inspectors, two answers, both right |
| 7 | Using the **geometric developed length** as a cutting length | Wrong length; bend deduction ignored |
| 8 | Assuming a **springback value** | Varies by batch; must be trialled |
| 9 | A **non-retractable stop** in a cutting fixture | The cut piece jams |
| 10 | Tolerancing **individual bend angles** | Harder and less useful than the end-point envelope |
| 11 | Not checking the **bender's swing envelope** | The tube hits the machine |
| 12 | A **full-length locating pin** | Jams; operator forces it; the tube bends to fit |
| 13 | Not distinguishing **locators from checking features** on the drawing | A setter adjusts a checking cradle |
| 14 | Ignoring the tube's **sag under its own weight** | Real contributor, unmeasured |
| 15 | Treating the fixture as the problem when the error is **bias** | Programme correction is free and larger |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| End point consistently off | Bias — programme error | Measure 30, separate mean and range | Correct the bend programme | Closed-loop process |
| End point scattered | Rotation control inadequate | Check the locating scheme | Pierced hole + pin | Design rule R3 |
| Passes the check, fails on assembly | Checking fixture clamps | Try a drop-in check | Open cradles, free state | Design rule R5 |
| Results vary between inspectors | Free state not specified | Compare methods | State the condition | Design rule R6 |
| Tube marked or dented | Clamping too concentrated | Inspect contact areas | Distribute; softer material | Design rule R8 |
| Length varies | Stop not retractable, or burr | Check the stop and the cut | Retractable stop; deburr | Design rule R7 |
| Ovality out of limit | Mandrel wrong or absent | Measure across bends | Correct mandrel setup | Tooling specification |
| Tube hits the machine mid-cycle | Swing envelope not checked | Dry-run the sequence | Re-sequence or re-orient | CAD workflow step 7 |
| Reworked tube cannot be located | The datum was consumed | Review the rework route | Design a rework datum in advance | Design rule R14 |
| Springback changed suddenly | New material batch | Check the material certificate | Re-trial and correct | Closed-loop process |

### 23. Design checklist
- [ ] Have the **six constraints** been established explicitly for this tube?
- [ ] Is the tube's **diameter tolerance** known, and is the V-block adequate against it `[STD]`?
- [ ] Is **rotation** controlled by a feature, not by friction?
- [ ] Is there a **pierced hole** available as a datum, and has it been requested if not?
- [ ] Are all locators **away from bends**?
- [ ] For checking: does the tube **drop in under its own weight**?
- [ ] Is the **free-state or restrained condition** stated `[STD]`?
- [ ] Does the drawing distinguish **locators from checking features**?
- [ ] Is the cutting **stop retractable**?
- [ ] Is clamping **distributed** enough not to ovalise?
- [ ] Has the **bender's swing envelope** been checked?
- [ ] Are locating pins **short and chamfered** so they release?
- [ ] Has **springback been established by trial** for this material?
- [ ] Has **sag under self-weight** been assessed?
- [ ] Is there a plan for **rework datums**?

### 24. Beginner exercise
**E3.1.3-B** — Answer with calculations where required:
(a) A tube of nominal Ø25.0 mm with a diameter tolerance of ±0.25 mm sits in a 90° V-block. Calculate the
total axis movement across the diameter band.
(b) Repeat for a 60° V-block and comment on which is preferable and why.
(c) A rotation error of 0.4° occurs at a bend with 620 mm of tube downstream. Calculate the end-point
error.
(d) Calculate the arc length of a 75° bend at a CLR of 48 mm.
(e) State why a checking fixture for a tube must not clamp.
(f) State the best datum feature a tube can have, and why.

### 25. Intermediate exercise
**E3.1.3-I** — A tube of Ø32 × 2.0 mm has three bends: (185 mm, 0°, 50°), (280 mm, 75°, 90°), (140 mm,
−45°, 35°), with a final straight of 210 mm and a CLR of 48 mm. The end-point tolerance is Ø1.6 mm. Tube
diameter tolerance is ±0.25 mm. The bender's rotation repeatability is ±0.20° and its angle repeatability
±0.25°. Two 90° V-blocks 180 mm apart are proposed for location.
(a) Calculate the geometric developed length, stating why it is not the cutting length.
(b) Calculate the end-point error from a rotation error at each bend.
(c) Calculate the end-point error from an angle error at each bend.
(d) Combine all contributions by RSS and compare with the tolerance.
(e) Calculate the V-block axis shift and the resulting tilt error at the end point.
(f) State whether the process can meet the tolerance, and what you would change first.
(g) Propose an alternative locating scheme and quantify its improvement.

### 26. Advanced exercise
**E3.1.3-A** — An automotive exhaust front pipe is Ø60 × 1.5 mm stainless, with six bends, two welded
flanges, one welded bracket and a flexible section. Overall envelope 1,420 mm. Critical requirements: the
two flange faces must be within Ø1.5 mm positional of each other's datum frame and parallel within 1.0°;
the bracket must clear a chassis member by a minimum of 8 mm. Volume 60,000/yr for 5 years. `[EX-ASSUMED]`
State all assumptions.
(i) Propose a manufacturing route — bend, cut, weld, check — and state how many fixtures it requires.
(ii) For each fixture, establish the six constraints and state which feature supplies each.
(iii) Explain why the flange-to-flange requirement cannot be met by controlling individual bend angles,
and what must be controlled instead.
(iv) Calculate the end-point sensitivity to a 0.2° rotation error at the first and last bends, and state
the implication for process control.
(v) Design the checking strategy, explaining how you avoid the "checking fixture that lied" failure, and
what you state on the drawing about free state.
(vi) Explain how the welding fixture must differ from the checking fixture, and why they cannot be the
same tool.
(vii) Determine what happens if a tube fails the check, and design the rework datum strategy in advance.
(viii) At 60,000/yr, perform the capacity check for the checking operation and determine how many
checking fixtures are needed.
(ix) Identify which of the twenty-four auto-fail items this application most invites.
(x) State the six most important drawing notes across the fixture set.

### 27. Interview questions
1. *"How do you locate a bent tube when it has no flat faces?"*
   **Answer:** You still need six constraints — that principle does not change — but the features
   supplying them are completely different. The best datum a tube can have is a pierced hole with a pin
   through it, because that controls position in two directions and rotation about the tube axis at the
   same time, and it does not depend on the tube's diameter. After that, V-blocks or half-round cradles
   give you position, a squared and deburred cut end gives you the axial stop, and an end plug entering
   the bore gives you position plus rotation of that end. The thing to be careful about with V-blocks is
   that they locate the tube's *surface*, not its axis — so if the diameter varies, the axis moves. In a
   ninety degree V it moves by about 0.707 times the diameter change, and tube diameter tolerances are
   often loose. In the case we worked, two V-blocks with different diameters at each tilted the tube and
   put 3.14 mm at the end point. And V-blocks do not constrain rotation at all except by clamping
   friction, which on a part specified as a sequence of rotations is a serious gap. Also — locate away
   from the bends, because the tube is oval there.
2. *"Why can a tube checking fixture not clamp the tube?"*
   **Answer:** Because a tube is flexible, so if you clamp it you force it into shape and you have
   measured nothing. There was a case where an exhaust assembly passed its checking fixture consistently
   and failed on the vehicle; the fixture had four clamshell clamps and the inspector confirmed all four
   closed. What the fixture was actually measuring was whether the tube could be pulled into position by
   hand, not whether it was in position. Replacing the clamshells with open cradles the tube has to drop
   into under its own weight made twenty-two per cent of previously passing tubes fail, and that matched
   the vehicle line's reject rate almost exactly. So a tube checking fixture uses Go/No-Go cradles with a
   specified clearance and locates on only two features — typically a pin through a pierced hole and one
   V-block — with everything else being a checking feature, not a locator. And the drawing has to state
   the free-state condition, because a non-rigid part's shape depends on how it is supported, and without
   that statement two inspectors will get different answers and both will be right.

### 28. Expert questions
1. *"Tube bending is described as a closed-loop process. What does that actually mean operationally, and
   what does it imply for the fixture designer?"*
   **Answer:** Operationally it means the bend programme is **not a fixed set of numbers derived from the
   part geometry** — it is a set of numbers derived from measurement, maintained continuously.
   Here is why it has to be. **Springback depends on the material's yield strength**, and yield strength
   varies within the permitted range of any material specification. A batch at the top of the range
   springs back more than a batch at the bottom, so the overbend that was correct last month is wrong
   this month, and nothing in the drawing or the tooling has changed. The same applies to lubrication
   state, mandrel wear and die condition. **You cannot calculate your way to a correct programme, because
   the inputs move.**
   So the loop is: **bend a first-off, measure the centreline on a tube measuring machine, let it compute
   the LRA corrections, load them, bend again, confirm.** And then keep sampling through the run, because
   the coil changes partway through. Good tube shops treat the correction as a routine adjustment, not as
   a problem investigation.
   For the fixture designer this has three consequences that are easy to miss.
   **First, do not design a fixture that assumes a fixed part shape.** The tube's actual geometry is a
   moving target within its tolerance, and a fixture with tight cradles all along its length will fight
   every tube that is anywhere other than nominal. That is where the "checking fixture that lied" comes
   from — cradles tight enough to force compliance.
   **Second, locate on features that the bending process does not affect.** A pierced hole in a straight
   section is unaffected by springback in the bends. A cut end is unaffected. A bend angle is entirely a
   process output. **Locating on a process output means your fixture inherits the process's variation
   before it contributes any of its own.**
   **Third, and most practically: know whether you are being asked to fix bias or scatter.** In the
   worked example, the mean was 2.9 mm and the spread was 2.3 mm. The mean is a programme correction and
   it is free. The spread is what a fixture can influence. **A customer who says "the tubes are 2.9 mm
   out" is describing a bias, and quoting a fixture for it is CS-01 in a different domain.**
   The broader point is that tube is the clearest example in manufacturing of a process where **the
   tolerance stack is not the right mental model.** Every contributor in that example exceeded the total
   tolerance on its own. An open-loop stack-up says the part is impossible. It is not impossible; it is
   made every day — by measuring and correcting rather than by predicting.
2. *"You have now met the same lesson three times — bias versus scatter in metrology, in welding, and in
   tube. Is there a general statement, and where does it break down?"*
   **Answer:** The general statement is: **an error you can predict, you can subtract; an error you
   cannot predict, you must design out.** Bias is a location on a number line and you can move it for
   free. Scatter is a width, and widths only shrink by changing the physics.
   In metrology (L2.2.2) this appeared as bias against range: Fixture A had five times the bias of
   Fixture B and beat it by 7.40× after correction, because A's bias was 92.4% correctable and B's was
   25.9%. In welding it appeared as pre-setting: 3.4 mm of consistent shrinkage compensated to near zero,
   with the spread untouched. In tube it appeared as programme correction: 2.9 mm of mean error is a
   number you type into the bender.
   **Where it breaks down is more interesting than where it holds**, and there are four places.
   **First, when the bias is not stable.** A correction is only valid while the bias stays put. Thermal
   drift is the obvious case — the welding fixture growing 0.370 mm over a shift has a bias that is a
   *function of time*, so a single correction is right twice a day and wrong in between. **A drifting
   bias behaves like scatter to anyone applying a fixed correction**, and this is the most common way the
   principle is misapplied.
   **Second, when the bias is conditional on something unmeasured.** Springback varies by material batch.
   Correct for batch A and you are wrong for batch B. The bias is real and stable *within* a condition,
   and the condition changes without announcing itself. **That is why tube bending samples through the
   run rather than correcting once.**
   **Third, when correcting the bias costs you something.** Pre-setting a welding fixture 3.4 mm means
   the fixture no longer matches nominal geometry, so every subsequent check of that fixture needs the
   pre-set annotated or someone will remove it. **The correction has to be maintained as information, not
   just applied once as a dimension.**
   **Fourth — and this is the deepest one — when the bias and the scatter share a cause.** If a clamp is
   over-constraining a part, it produces both a mean shift and extra variation. Correcting the mean
   leaves the variation and, worse, **it makes the problem look smaller than it is** and removes the
   pressure to find the real cause. I have seen a systematic offset dialled out three times in two years
   on the same fixture, each time successfully, without anyone asking why it kept coming back.
   So the refined statement I would actually work to is: **correct the bias, but always find out what
   causes it first — because a bias with an unknown cause is a scatter you have not observed for long
   enough.**

### 29. Summary
A tube defeats conventional locating because it has no flat faces, its shape is a process result rather
than a machined dimension, it is flexible, and every bend's error accumulates into the next. The six
constraints of 3-2-1 still apply as a principle but must be supplied by different features: V-blocks and
cradles, end plugs, squared cut ends, formed features and — best of all — a pierced hole with a pin,
which controls position and rotation together and is insensitive to diameter. A V-block locates the
tube's surface rather than its axis, so a diameter change of Δd moves the axis by 0.707Δd in a 90° V, and
two V-blocks with differing diameters tilt the tube; in the worked example that contributed 3.14 mm at the
end point, while the pierced-hole scheme was 7.40× better and controlled rotation, which the V-blocks did
not control at all. The dominant tube-specific effect is that angular errors are amplified by the
remaining tube length: a quarter-degree rotation error at bend 2 gave 2.44 mm against a ±1.0 mm tolerance,
and the same error at bend 1 gave 3.93 mm because there was 1.607× more tube downstream. Springback,
ovality and wall thinning must all be established by trial rather than calculated, and because springback
varies with material batch, tube bending is run as a closed loop of bend, measure and correct rather than
as an open-loop tolerance stack — which is essential, because in the worked example every single
contributor exceeded the total tolerance on its own. Finally, a tube checking fixture must never clamp,
because clamping a flexible part forces it into shape and measures nothing; the case where clamshells
were replaced by drop-in cradles saw 22% of previously passing tubes fail, matching the assembly line's
reject rate.

### 30. Key takeaways
- **A tube has no flat faces**, but six constraints are still six constraints — they just come from
  different features.
- **A V-block locates the surface, not the axis** — 0.707 × Δd in a 90° V.
- **A V-block does not constrain rotation at all**, except through clamping friction.
- **A pierced hole is the best datum a tube can have** — position and rotation, insensitive to diameter,
  7.40× better here.
- **Locate away from bends**; the tube is oval there.
- **Angular errors are amplified by the remaining tube length** — 0.25° at bend 1 gave 3.93 mm.
- **Early bends matter most.**
- **Springback, bend deduction, ovality and thinning must be trialled, never calculated.**
- **Tube bending is a closed loop** — bend, measure, correct — because springback varies by batch.
- **The geometric developed length is not the cutting length.**
- **Never clamp a flexible part to check it** — 22% of "passing" tubes failed once the clamps were
  removed.
- **State the free-state condition** `[STD]`, or two inspectors get two answers and both are right.
- **Distinguish locators from checking features on the drawing**, or a setter will adjust one.
- **Make locating pins short and chamfered** so they release instead of forcing the tube to fit.
- **Correct bias, but find its cause** — a bias with an unknown cause is a scatter you have not observed
  long enough.

---

## LESSON L3.1.4 — VERIFICATION AND CORRECTION FIXTURES

### 1. Lesson title
**L3.1.4 — Verification fixtures (inspection, checking, gauging) and correction fixtures (recutting,
rework)**

### 2. Learning objective
By the end of this lesson you will be able to distinguish an inspection fixture, a checking fixture and a
gauge, explain why a verification fixture locates on the drawing datums rather than on convenient
features, apply the inward tolerance absorption rule, describe the two failure directions of a gauge and
which is unacceptable, explain why a correction fixture is a distinct family, and design a rework
locating strategy when the original datum has been consumed.

### 3. Prerequisites
L2.1.4 (fixture vs gauge, inward absorption), L2.2.2 (repeatability and accuracy), L2.2.6 (gates),
L3.1.3 (tube checking, free state).

### 4. Why the topic matters
**These two families are where a fixture's errors stop being a manufacturing cost and start being a
customer's problem.**

```
   A BAD MACHINING FIXTURE MAKES SCRAP.
     Expensive. Visible. Contained.

   A BAD GAUGE SHIPS SCRAP.
     Expensive. INVISIBLE. NOT CONTAINED.

   ┌──────────────────────────────────────────────┐
   │ PRINCIPLE 88, FROM L2.1.4. IT IS RESTATED    │
   │ HERE BECAUSE IT IS THE ENTIRE JUSTIFICATION  │
   │ FOR TREATING VERIFICATION AS A SEPARATE      │
   │ FAMILY WITH STRICTER RULES.                  │
   └──────────────────────────────────────────────┘

   AND A CORRECTION FIXTURE HAS A PROBLEM NEITHER
   OF THE OTHERS HAS:

     THE DATUM HAS ALREADY BEEN USED UP.
```

### 5. Simple explanation

```
   THE THREE VERIFICATION TYPES

   INSPECTION FIXTURE
     Holds the part so an instrument can measure
     it — a CMM, a height gauge, an indicator.
     → the fixture provides ACCESS and
       REPEATABLE PRESENTATION
     → the MEASUREMENT comes from the instrument

   CHECKING FIXTURE
     Judges the part itself, usually
     comparatively — clearances, feeler gauges,
     indicators reading against a reference.
     → the FIXTURE IS the measurement
     → a variable or attribute result

   GAUGE
     Go / No-Go. A pure attribute answer.
     → no number, just PASS or FAIL
     → the fastest and the least informative

   ┌──────────────────────────────────────────────┐
   │ THEY DIFFER IN WHERE THE MEASUREMENT LIVES.  │
   │                                              │
   │ In an inspection fixture the instrument      │
   │ measures. In a checking fixture and a gauge, │
   │ THE FIXTURE'S OWN GEOMETRY IS THE            │
   │ MEASUREMENT — so its errors go straight into │
   │ the result.                                  │
   └──────────────────────────────────────────────┘

  ─────────────────────────────────────────────────

   THE TWO CORRECTION TYPES

   RECUTTING FIXTURE
     Re-machine a feature that was made wrong.
     → the part is already partly finished
     → THE FEATURE YOU WOULD HAVE LOCATED ON MAY
       BE THE ONE YOU ARE ABOUT TO CUT

   REWORK FIXTURE
     Repair, straighten, re-weld, re-drill.
     → often one-off or low volume
     → and the part is out of tolerance BY
       DEFINITION, so the fixture must accept
       parts a production fixture would reject
```

### 6. Engineering explanation

**RULE 1 — A VERIFICATION FIXTURE LOCATES ON THE DRAWING DATUMS**

```
   A MACHINING FIXTURE may locate on whatever is
   convenient and repeatable, as long as the
   relationship to the datums is controlled.

   A VERIFICATION FIXTURE MAY NOT.

   ┌──────────────────────────────────────────────┐
   │ IT MUST SIMULATE THE DATUM REFERENCE FRAME   │
   │ THE DRAWING SPECIFIES — THE SAME FEATURES,   │
   │ IN THE SAME PRECEDENCE, WITH THE SAME        │
   │ MATERIAL CONDITION MODIFIERS.                │
   │                                              │
   │ WHY: BECAUSE THE TOLERANCE MEANS SOMETHING   │
   │ SPECIFIC. A POSITION TOLERANCE OF Ø0.2 TO    │
   │ |A|B|C| IS A STATEMENT ABOUT THE PART        │
   │ ORIENTED IN A PARTICULAR WAY. MEASURE IT     │
   │ FROM A DIFFERENT ORIGIN AND YOU HAVE         │
   │ MEASURED A DIFFERENT CHARACTERISTIC — AND    │
   │ YOU MAY GET A DIFFERENT ANSWER.              │
   │                                              │
   │ THIS IS PRINCIPLE 91.                        │
   └──────────────────────────────────────────────┘

   THE PRECEDENCE MATTERS TOO.
   |A|B|C| and |B|A|C| are different frames and
   can give different results on the same part.

   STANDARD: ASME Y14.5-2018 for datum precedence
   and simulation; ISO 5459:2011 for the ISO GPS
   equivalent. THE TWO DIFFER IN DETAIL AND MUST
   NOT BE MIXED.
```

**RULE 2 — TOLERANCE IS ABSORBED INWARD**

```
   THE GAUGE'S OWN UNCERTAINTY MUST SHRINK THE
   ACCEPTED ZONE, NEVER WIDEN IT.

   PART LIMIT          ├──────────────────┤
   GAUGE, INWARD         ├──────────────┤
     rejects some good parts ✓ acceptable
   GAUGE, OUTWARD      ├──────────────────────┤
     accepts some BAD parts ✗ NOT ACCEPTABLE

   ┌──────────────────────────────────────────────┐
   │ THE TWO ERRORS ARE NOT SYMMETRICAL.          │
   │                                              │
   │ REJECTING A GOOD PART COSTS YOU A PART.      │
   │ ACCEPTING A BAD PART COSTS YOUR CUSTOMER A   │
   │ FAILURE, AND YOU YOUR REPUTATION.            │
   │                                              │
   │ THE L2.1.4 RESULT: an outward-toleranced     │
   │ gauge shipped 196 BAD PARTS A YEAR after a   │
   │ 0.010 mm drift. The inward one retained      │
   │ 84.1 % of the zone and shipped none.         │
   └──────────────────────────────────────────────┘

   THE ALLOCATION
     Machining fixture: 10-20 % of part tolerance
     GAUGE:              5-10 % of part tolerance
     [GUIDE] — conventions, not standards. The
     applicable gauge standard and the customer's
     requirement govern.
```

**RULE 3 — A GAUGE MUST BE MORE STABLE THAN THE THING IT JUDGES**

```
   A machining fixture that wears makes gradually
   worse parts, and the parts are inspected.

   A GAUGE THAT WEARS GRADUALLY ACCEPTS WORSE
   PARTS, AND NOTHING DOWNSTREAM CATCHES IT.

   ┌──────────────────────────────────────────────┐
   │ GAUGE WEAR IS A ONE-WAY FAILURE: A WORN      │
   │ Go GAUGE GETS EASIER TO ENTER, SO IT PASSES  │
   │ PARTS IT SHOULD REJECT.                      │
   │                                              │
   │ THIS IS WHY GAUGES ARE CALIBRATED ON A       │
   │ SCHEDULE AND WHY THE SCHEDULE IS NOT         │
   │ NEGOTIABLE.                                  │
   │                                              │
   │ [STD] Gauge design, wear allowance and       │
   │ calibration intervals are addressed in the   │
   │ applicable gauging standard, which must be   │
   │ identified for the jurisdiction and customer.│
   └──────────────────────────────────────────────┘

   WEAR ALLOWANCE
     A Go gauge is often made toward the material
     side of its limit so that it has room to wear
     before it becomes unsafe.
     [GUIDE] The amount is specified in the
     applicable standard. DO NOT INVENT ONE.
```

**RULE 4 — MEASUREMENT UNCERTAINTY IS PART OF THE DECISION**

```
   You cannot measure a 0.05 mm tolerance with an
   instrument whose uncertainty is 0.03 mm and
   call the answer a decision.

   [GUIDE] A commonly cited guideline is that the
   measurement system should consume no more than
   10 % of the tolerance, with 10-30 % sometimes
   accepted with justification. THE APPLICABLE
   REQUIREMENT — customer, standard or internal —
   MUST BE IDENTIFIED. Gauge R&R methodology is
   covered at Level 30.

   ┌──────────────────────────────────────────────┐
   │ THE FIXTURE IS PART OF THE MEASUREMENT       │
   │ SYSTEM. ITS REPEATABILITY GOES INTO THE R&R  │
   │ ALONGSIDE THE INSTRUMENT'S AND THE           │
   │ OPERATOR'S.                                  │
   │                                              │
   │ A GOOD CMM ON A POOR FIXTURE IS A POOR       │
   │ MEASUREMENT SYSTEM.                          │
   └──────────────────────────────────────────────┘
```

**CORRECTION FIXTURES — WHY THEY ARE A SEPARATE FAMILY**

```
   THE DEFINING PROBLEM

   A part was machined using datum features A, B
   and C. A feature is found wrong and must be
   recut.

   TO RECUT IT CORRECTLY YOU MUST RE-ESTABLISH
   THE ORIGINAL DATUM FRAME.

   BUT:
     - the datum surfaces may themselves have been
       machined since
     - the feature being recut may BE a datum
     - the part may have been heat treated,
       painted or assembled since
     - and the part is, by definition, ALREADY
       OUT OF TOLERANCE SOMEWHERE

   ┌──────────────────────────────────────────────┐
   │ A PRODUCTION FIXTURE ASSUMES THE INCOMING    │
   │ PART IS WITHIN TOLERANCE.                    │
   │                                              │
   │ A CORRECTION FIXTURE CANNOT ASSUME THAT —    │
   │ IT EXISTS PRECISELY BECAUSE THE PART IS NOT. │
   │                                              │
   │ SO IT MUST ACCEPT A WIDER RANGE OF PART      │
   │ CONDITION THAN THE FIXTURE THAT MADE IT.     │
   │ THAT IS THE OPPOSITE OF EVERY OTHER FIXTURE  │
   │ FAMILY.                                      │
   └──────────────────────────────────────────────┘
```

`[PRACTICE]` **The four correction strategies:**

| Strategy | How it works | When it applies | Risk |
|---|---|---|---|
| **Re-use the original datums** | Locate exactly as production did | The datums are intact and untouched | Simplest, always try first |
| **Locate on the good features** | Use whatever is still correct | Some features are in tolerance | Must verify which ones |
| **Locate on the finished geometry** | Indicate the part in on a machined face | Low volume, skilled operator | Slow; operator-dependent |
| **Add a temporary datum** | Machine a small flat or drill a tooling hole | Nothing usable exists | Adds an operation; must not affect function |

```
   THE RECUT-A-DATUM PROBLEM

   If the feature being recut IS a datum, you
   cannot locate on it — and after recutting, the
   datum has MOVED, so every other feature's
   position relative to it has changed.

   ┌──────────────────────────────────────────────┐
   │ RECUTTING A DATUM RE-QUALIFIES THE ENTIRE    │
   │ PART.                                        │
   │                                              │
   │ Every dimension referenced to that datum must│
   │ be re-inspected, because they are all now    │
   │ measured from a different place.             │
   │                                              │
   │ THIS IS ROUTINELY FORGOTTEN, AND IT IS HOW A │
   │ "SIMPLE REWORK" SHIPS A PART THAT IS WRONG   │
   │ IN A DIMENSION NOBODY RE-CHECKED.            │
   └──────────────────────────────────────────────┘
```

**REWORK AND THE COMMERCIAL QUESTION**

```
   REWORK IS NOT AUTOMATICALLY WORTH DOING.

   COST TO REWORK
     fixture (if one must be built)
     + operation time
     + re-inspection of everything affected
     + documentation and concession
     + the risk of a second failure

   COST TO SCRAP
     the part's accumulated value

   ┌──────────────────────────────────────────────┐
   │ REWORK IS WORTH DOING WHEN THE ACCUMULATED   │
   │ VALUE IS HIGH AND THE CORRECTION IS          │
   │ RELIABLE.                                    │
   │                                              │
   │ IT IS OFTEN NOT WORTH DOING ON A CHEAP PART  │
   │ EARLY IN ITS ROUTE — AND THE DECISION SHOULD │
   │ BE A CALCULATION, NOT AN INSTINCT TO SAVE    │
   │ MATERIAL.                                    │
   │                                              │
   │ [PRACTICE] Some customers and some sectors   │
   │ PROHIBIT rework on certain characteristics   │
   │ regardless of cost. THE CUSTOMER'S AND THE   │
   │ SECTOR'S REQUIREMENTS GOVERN, AND MUST BE    │
   │ CONFIRMED BEFORE ANY REWORK ROUTE IS         │
   │ DESIGNED.                                    │
   └──────────────────────────────────────────────┘
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Inspection fixture** | Holds the part for an instrument to measure |
| **Checking fixture** | The fixture's own geometry provides the measurement |
| **Gauge** | Attribute Go/No-Go device |
| **Go gauge** | Must enter or fit — checks the maximum material condition |
| **No-Go gauge** | Must NOT enter — checks the least material condition |
| **Datum simulator** | The fixture feature representing a drawing datum |
| **Datum precedence** | The order in which datums constrain — primary, secondary, tertiary |
| **Inward absorption** | Applying gauge tolerance so the accepted zone shrinks |
| **Wear allowance** | Material added to a gauge so it can wear before becoming unsafe `[STD]` |
| **False reject** | A good part rejected |
| **False accept** | A bad part accepted — the unacceptable error |
| **Gauge R&R** | Repeatability and reproducibility study of a measurement system |
| **Recutting** | Re-machining a feature that was made wrong |
| **Rework** | Any corrective operation on a non-conforming part |
| **Concession / deviation** | Formal authorisation to accept or rework non-conforming product |
| **Temporary datum** | A feature added solely to permit correction |

### 8. Principle

> **A BAD FIXTURE MAKES SCRAP; A BAD GAUGE SHIPS SCRAP.** That asymmetry justifies every stricter rule in
> this lesson.
> **A VERIFICATION FIXTURE LOCATES ON THE DRAWING DATUMS**, in the specified precedence, with the
> specified modifiers — because measuring from a different origin measures a different characteristic.
> **TOLERANCE IS ABSORBED INWARD.** A gauge may reject good parts; it may never accept bad ones.
> **A GAUGE'S WEAR IS A ONE-WAY FAILURE** — it gets easier to pass, and nothing downstream catches it.
> **THE FIXTURE IS PART OF THE MEASUREMENT SYSTEM.** A good CMM on a poor fixture is a poor measurement
> system.
> **A CORRECTION FIXTURE MUST ACCEPT PARTS A PRODUCTION FIXTURE WOULD REJECT** — the opposite of every
> other family.
> **RECUTTING A DATUM RE-QUALIFIES THE ENTIRE PART.**

### 9. Industrial application

**The datum precedence trap** `[EX-ASSUMED]`

```
DRAWING REQUIREMENT
  Position of 4 holes: Ø0.25 M to |A|B|C|
    A = the large machined face
    B = the Ø40H7 bore
    C = the narrow side face

THE CHECKING FIXTURE AS BUILT
  Located on:
    the large face (A)  ✓
    TWO DOWELS in two of the four holes  ✗
    the side face (C)   ✓

WHAT WAS WRONG
  The fixture used the holes being measured as
  part of its own location. It could not detect a
  uniform rotation of the hole pattern, because
  the pattern defined its own orientation.

  THE Ø40H7 BORE — DATUM B — WAS NOT USED AT ALL.

THE CONSEQUENCE
  A batch of parts with the hole pattern rotated
  0.6° relative to the bore passed the checking
  fixture and failed at assembly.

┌──────────────────────────────────────────────┐
│ THE FIXTURE MEASURED THE HOLES RELATIVE TO   │
│ EACH OTHER, WHICH WAS NOT THE REQUIREMENT.   │
│                                              │
│ THE REQUIREMENT WAS THEIR POSITION RELATIVE  │
│ TO A BORE THE FIXTURE IGNORED.               │
│                                              │
│ THIS IS THE MOST COMMON CHECKING FIXTURE     │
│ ERROR, AND IT IS ALWAYS THE SAME SHAPE:      │
│ LOCATING ON THE FEATURE BEING MEASURED.      │
└──────────────────────────────────────────────┘
```

**When the datum has been consumed** `[EX-ASSUMED]`:

```
SITUATION
  A gearbox housing is machined in two setups.
  Setup 2 locates on the Setup 1 face and bore.
  A batch of 40 is found with the Setup 2 bore
  0.15 mm out of position.

THE REWORK QUESTION
  Bore it oversize and fit a sleeve? Or recut it
  in position?

  To recut in position we must re-establish the
  original frame — the Setup 1 face and bore.

  THOSE ARE STILL INTACT. So the correction
  fixture is, in principle, the Setup 2 fixture.

WHY IT WAS NOT THAT SIMPLE
  The Setup 2 fixture's clamps bore on a face
  that had since been machined. The clamps no
  longer seated.

  AND: the parts had been through a wash and
  partial assembly, so some had dowels fitted.

THE CORRECTION FIXTURE THAT WAS BUILT
  - located on the ORIGINAL Setup 1 face and bore
    (unchanged, correct)
  - clamped on features that existed in ALL
    variants of the part's current condition
  - had relieved clearance for the fitted dowels
  - included a Go/No-Go check that the incoming
    part was within the range the fixture could
    correct

┌──────────────────────────────────────────────┐
│ THAT LAST ITEM IS THE ONE PEOPLE OMIT.       │
│                                              │
│ A CORRECTION FIXTURE MUST KNOW WHICH PARTS   │
│ IT CAN CORRECT AND WHICH ARE BEYOND RECOVERY,│
│ BECAUSE A PART TOO FAR OUT WILL BE           │
│ "CORRECTED" INTO A DIFFERENT KIND OF SCRAP.  │
└──────────────────────────────────────────────┘
```

### 10. Design rules
- **R1** — A verification fixture **locates on the drawing datums**, in the specified precedence.
- **R2** — **Never locate on the feature being measured.**
- **R3** — Reproduce the **material condition modifiers** correctly `[STD]` — MMC datum simulators are
  fixed-size, RFS simulators are not.
- **R4** — Absorb tolerance **inward**, always.
- **R5** — Apply the **gauge allocation** of 5–10% of part tolerance `[GUIDE]`, confirmed against the
  applicable standard and the customer.
- **R6** — Include a **wear allowance** per the applicable standard `[STD]`; do not invent one.
- **R7** — Set a **calibration interval** and make it non-negotiable.
- **R8** — Treat the fixture as part of the **measurement system** and include it in the R&R.
- **R9** — For **non-rigid parts, state the free-state or restrained condition** `[STD]`.
- **R10** — Distinguish **locators from checking features** on the drawing.
- **R11** — For a correction fixture, **re-use the original datums** if they are intact.
- **R12** — Where they are not, locate on **verified-good features**, and verify them.
- **R13** — Include a check that the incoming part is **within the range the fixture can correct**.
- **R14** — Where a **datum is recut, re-qualify the whole part**.
- **R15** — **Confirm the customer's and sector's rework rules before designing any rework route**
  `[PRACTICE]`.
- **R16** — Make the **rework-versus-scrap decision a calculation**, not an instinct.

### 11. Rules of thumb
- **A bad fixture makes scrap; a bad gauge ships scrap.**
- **Locate on the drawing datums, in the drawing's order.**
- **Never locate on the feature you are measuring.**
- **Absorb inward, always.**
- **Gauge allocation 5–10%, fixture 10–20%** `[GUIDE]`.
- **Gauge wear is one-way: it gets easier to pass.**
- **A good CMM on a poor fixture is a poor measurement system.**
- **Free state must be stated for anything flexible.**
- **A correction fixture must accept parts a production fixture would reject.**
- **Recutting a datum re-qualifies the whole part.**
- **A correction fixture needs an entry gate** — which parts can it actually correct?
- **Rework is a calculation, not an instinct to save material.**

### 12. Formulae

**Gauge tolerance allocation, absorbed inward**
```
Accepted zone = part tolerance − 2 × gauge
                                    allocation

With T_part and gauge allocation k·T_part
applied at each limit:

  Retained fraction = 1 − 2k

  k = 0.05  →  90.0 % retained
  k = 0.08  →  84.0 % retained
  k = 0.10  →  80.0 % retained

[GUIDE] k is a convention. THE APPLICABLE
STANDARD AND THE CUSTOMER REQUIREMENT GOVERN.
```

**False reject rate, uniform distribution**
```
If part sizes are uniform across the tolerance,
the fraction rejected by inward absorption is
simply 2k.

  k = 0.08 → 16 % of parts rejected

┌──────────────────────────────────────────────┐
│ THIS IS THE WORST CASE AND IT IS WHY THE     │
│ DISTRIBUTION MATTERS ENORMOUSLY.             │
│                                              │
│ THE L2.1.4 RESULT: uniform 1,908 false       │
│ rejects/yr vs normal 2/yr — A FACTOR OF ~935.│
│                                              │
│ A CAPABLE PROCESS PAYS ALMOST NOTHING FOR    │
│ INWARD ABSORPTION. AN INCAPABLE ONE PAYS     │
│ HEAVILY — AND THE ANSWER IS TO FIX THE       │
│ PROCESS, NOT THE GAUGE.                      │
└──────────────────────────────────────────────┘
```

**Measurement system contribution**
```
σ_total² = σ_process² + σ_measurement²

σ_measurement² = σ_instrument² + σ_fixture²
                 + σ_operator²

[GUIDE] A commonly cited guideline: the
measurement system should consume ≤10 % of the
tolerance, 10-30 % sometimes accepted with
justification. IDENTIFY THE APPLICABLE
REQUIREMENT. Full R&R methodology at Level 30.
```

**Rework economics**
```
Rework worthwhile IF

  C_rework + P_fail × C_part  <  C_part

where
  C_rework = fixture share + operation
             + re-inspection + documentation
  P_fail   = probability the rework fails
  C_part   = accumulated value of the part

┌──────────────────────────────────────────────┐
│ NOTE THE P_fail TERM. IT IS ROUTINELY        │
│ OMITTED, AND IT IS WHY REWORK OFTEN COSTS    │
│ MORE THAN EXPECTED: SOME PARTS FAIL TWICE.   │
└──────────────────────────────────────────────┘
```

| Variable | Meaning | Unit |
|---|---|---|
| T_part | Part tolerance | mm |
| k | Gauge allocation fraction | — |
| σ | Standard deviation | mm |
| P_fail | Probability rework fails | — |
| C_part | Accumulated part value | ₹ |

### 13. Worked numerical example

**Problem:** A checking fixture is to be designed for a machined bracket, and a batch of 40 non-conforming
parts must be dispositioned. Determine the gauge allocation and its cost, evaluate the measurement
system, and decide rework against scrap.

```
GIVEN:
  PART AND REQUIREMENT                          [PROJ]
    Machined steel bracket
    4 × Ø10.5 holes, position Ø0.30 M to |A|B|C|
      A = machined base face
      B = Ø25H7 bore
      C = machined side face
    Part accumulated value at this stage
      = ₹3,850
    Volume = 14,000/yr

  PROCESS PERFORMANCE                           [PROJ]
    Measured position, 200 parts:
      mean deviation      = 0.082 mm
      standard deviation  = 0.043 mm
      (position is a radial quantity, so the
       distribution is not normal about zero;
       treated here as approximately normal in
       the deviation for illustration
       [EX-ASSUMED])

  PROPOSED CHECKING FIXTURE              [EX-ASSUMED]
    Datum simulators on A, B, C
    Fixed-pin Go gauge at each hole (MMC)
    Fixture repeatability        = ±0.018 mm
    CMM alternative uncertainty  = ±0.004 mm
    CMM cycle time               = 6.5 min
    Checking fixture cycle time  = 0.6 min
    Fixture cost                 = ₹185,000
    Labour/machine rate          = ₹1,750/h

  GAUGE ALLOCATION CONVENTION            [GUIDE]
    8 % of part tolerance, to be confirmed
    against the applicable standard

  NON-CONFORMING BATCH                          [PROJ]
    40 parts, holes at position 0.42 mm
      (against the 0.30 mm limit)
    Rework: re-drill and ream oversize to Ø11.0
      with a correction fixture
    Correction fixture cost      = ₹62,000
    Rework operation             = 11 min/part
    Re-inspection                = 4 min/part
    Estimated probability the rework
      fails            = 12 %          [EX-ASSUMED]
    Customer has confirmed the oversize hole is
      acceptable by concession       [PROJ]

REQUIRED:
  (a) Gauge allocation in millimetres and the
      retained accepted zone
  (b) False reject rate under a uniform assumption
      and under the measured distribution
  (c) Annual cost of false rejects, both cases
  (d) The measurement system's consumption of the
      tolerance, fixture vs CMM
  (e) Economic comparison of the checking fixture
      against 100 % CMM inspection
  (f) Rework vs scrap for the 40-part batch
  (g) Recommendation

ASSUMPTION:
  1. The 8 % allocation is a CONVENTION. The
     applicable gauging standard and the
     customer's requirement govern and must be
     confirmed. [GUIDE]
  2. Position is a radial quantity and its
     distribution is not normal about zero. IT IS
     TREATED AS APPROXIMATELY NORMAL IN THE
     DEVIATION FOR ILLUSTRATION ONLY; a real
     analysis requires the correct distribution.
     [EX-ASSUMED]
  3. Fixture and CMM uncertainties are stated
     figures that must be verified by an R&R
     study. [EX-ASSUMED]
  4. The rework failure probability of 12 % is an
     estimate. It should come from history where
     any exists. [EX-ASSUMED]
  5. The customer's concession for the oversize
     hole is CONFIRMED, not assumed. Without it
     the rework route does not exist. [PROJ]
  6. Re-inspection covers only the reworked
     feature, because no datum was recut. IF A
     DATUM HAD BEEN RECUT, THE WHOLE PART WOULD
     REQUIRE RE-QUALIFICATION and the cost would
     be far higher. [PROJ]

FORMULA:
  Gauge allocation = k × T_part
  Retained = 1 − 2k
  False reject, uniform = 2k
  Cost = N × rate × time
  Rework worthwhile IF C_rework + P_fail × C_part
                       < C_part

UNIT CONVERSION:
  Minutes → hours: ÷60

SUBSTITUTION AND CALCULATION:

  (a) GAUGE ALLOCATION

      T_part = 0.30 mm
      k = 0.08

      Allocation = 0.08 × 0.30
                 = 0.024 mm

      Applied inward at the limit, the accepted
      zone becomes:
        0.30 − 0.024 = 0.276 mm

      Retained fraction = 0.276/0.30
                        = 92.0 %

      ┌────────────────────────────────────────────┐
      │ NOTE: for a position tolerance the         │
      │ allocation is applied at ONE limit (the    │
      │ outer boundary of the zone), not two, so   │
      │ the retained fraction is 1 − k, not 1 − 2k.│
      │                                            │
      │ THE GEOMETRY OF THE CHARACTERISTIC         │
      │ DETERMINES HOW THE ALLOCATION APPLIES. A   │
      │ ± SIZE TOLERANCE LOSES IT AT BOTH ENDS; A  │
      │ POSITION ZONE LOSES IT AT ONE BOUNDARY.    │
      │                                            │
      │ GETTING THIS WRONG DOUBLES OR HALVES THE   │
      │ ANSWER.                                    │
      └────────────────────────────────────────────┘

  (b) FALSE REJECT RATE

      UNIFORM ASSUMPTION
        Fraction rejected = k = 0.08
                          = 8.00 %
        Parts = 0.08 × 14,000 = 1,120/yr

      MEASURED DISTRIBUTION
        mean 0.082, σ 0.043
        Reject if position > 0.276

        z = (0.276 − 0.082)/0.043
          = 0.194/0.043
          = 4.512

        For z = 4.512, the upper tail is
        approximately 3.2 × 10⁻⁶     [GUIDE]

        Parts = 3.2e-6 × 14,000
              = 0.045/yr

        ≈ ZERO. About one part every 22 years.

      COMPARISON
        Uniform:  1,120/yr
        Measured: 0.045/yr
        RATIO ≈ 24,900×

      ┌────────────────────────────────────────────┐
      │ THE DISTRIBUTION DOMINATES EVERYTHING.     │
      │                                            │
      │ This process runs at a mean of 0.082 mm    │
      │ against a 0.30 mm limit — it is well       │
      │ inside, and the inward absorption costs it │
      │ essentially nothing.                       │
      │                                            │
      │ AN INCAPABLE PROCESS WOULD PAY 1,120 PARTS │
      │ A YEAR FOR THE SAME GAUGE.                 │
      │                                            │
      │ THE L2.1.4 LESSON RESTATED: INWARD         │
      │ ABSORPTION IS CHEAP IF THE PROCESS IS      │
      │ CAPABLE, AND THE ANSWER TO AN EXPENSIVE    │
      │ GAUGE IS TO FIX THE PROCESS, NOT TO WIDEN  │
      │ THE GAUGE.                                 │
      └────────────────────────────────────────────┘

  (c) ANNUAL COST OF FALSE REJECTS

      UNIFORM CASE
        1,120 × ₹3,850 = ₹4,312,000/yr

      MEASURED CASE
        0.045 × ₹3,850 = ₹173/yr

      ┌────────────────────────────────────────────┐
      │ ₹4.31 MILLION AGAINST ₹173.                │
      │                                            │
      │ THE SAME GAUGE. THE DIFFERENCE IS ENTIRELY │
      │ THE PROCESS.                               │
      └────────────────────────────────────────────┘

  (d) MEASUREMENT SYSTEM CONSUMPTION

      CHECKING FIXTURE
        ±0.018 mm → a range of 0.036 mm
        As a fraction of the 0.30 tolerance:
          0.036/0.30 = 12.0 %

      CMM
        ±0.004 mm → range 0.008 mm
        0.008/0.30 = 2.67 %

      Against the ≤10 % guideline [GUIDE]:
        Fixture 12.0 % — EXCEEDS the 10 %
          guideline, falls in the 10-30 % band
          that requires justification
        CMM 2.67 % — comfortably within

      ┌────────────────────────────────────────────┐
      │ THE CHECKING FIXTURE DOES NOT MEET THE     │
      │ USUAL 10 % GUIDELINE.                      │
      │                                            │
      │ It is not disqualified — 10-30 % is often  │
      │ accepted with justification — but it must  │
      │ be RAISED AND AGREED, not discovered later.│
      │ AND THE APPLICABLE REQUIREMENT MUST BE     │
      │ IDENTIFIED, because some customers do not  │
      │ permit the 10-30 % band at all.            │
      └────────────────────────────────────────────┘

  (e) CHECKING FIXTURE vs 100 % CMM

      TIME
        CMM:     14,000 × 6.5/60 = 1,516.7 h/yr
        Fixture: 14,000 × 0.6/60 =   140.0 h/yr
        Saving = 1,376.7 h/yr

      VALUE
        1,376.7 × ₹1,750 = ₹2,409,167/yr

      PAYBACK
        185,000/(2,409,167/12)
        = 185,000/200,764
        = 0.92 months

      ┌────────────────────────────────────────────┐
      │ 28 DAYS. AND THE CAPACITY QUESTION IS      │
      │ DIFFERENT HERE FROM L2.2.5: 1,517 HOURS OF │
      │ CMM TIME IS NOT SPARE CAPACITY BEING       │
      │ FREED — IT IS A CMM THAT WOULD OTHERWISE   │
      │ BE FULLY OCCUPIED BY THIS ONE PART, AND    │
      │ UNAVAILABLE FOR EVERYTHING ELSE.           │
      │                                            │
      │ u ≈ 1 HERE, AND IT IS EASY TO JUSTIFY.     │
      └────────────────────────────────────────────┘

      BUT THE 12 % CONSUMPTION IS THE GATE.
      The economics are decisive and IRRELEVANT
      until the measurement capability is
      accepted. GATE BEFORE ECONOMICS —
      principle from L2.1.4.

  (f) REWORK vs SCRAP, 40 PARTS

      SCRAP
        40 × ₹3,850 = ₹154,000

      REWORK
        Correction fixture      = ₹62,000
        Operation: 40 × 11/60 × 1,750
                  = 40 × 0.18333 × 1,750
                  = ₹12,833
        Re-inspection: 40 × 4/60 × 1,750
                  = 40 × 0.066667 × 1,750
                  = ₹4,667
        Documentation/concession
          [EX-ASSUMED]          = ₹15,000
        ─────────────────────────────────
        Subtotal                = ₹94,500

        Expected failures: 12 % of 40 = 4.8 parts
        Cost of those       = 4.8 × 3,850
                            = ₹18,480
        ─────────────────────────────────
        TOTAL EXPECTED COST     = ₹112,980

      COMPARISON
        Rework ₹112,980 vs scrap ₹154,000
        SAVING = ₹41,020
        Rework costs 73.4 % of scrapping.

      ┌────────────────────────────────────────────┐
      │ REWORK WINS, BUT NOT OVERWHELMINGLY — AND  │
      │ THE FIXTURE IS 55 % OF THE REWORK COST.    │
      │                                            │
      │ 62,000/112,980 = 54.9 %                    │
      │                                            │
      │ SO THE ANSWER DEPENDS HEAVILY ON WHETHER   │
      │ THE CORRECTION FIXTURE HAS ANY FUTURE USE. │
      └────────────────────────────────────────────┘

      SENSITIVITY: THE BREAK-EVEN BATCH SIZE
        Fixed cost = 62,000 + 15,000 = ₹77,000
        Variable per part
          = (11+4)/60 × 1,750 + 0.12 × 3,850
          = 437.50 + 462.00
          = ₹899.50
        Scrap avoided per part = ₹3,850
        Net saving per part = 3,850 − 899.50
                            = ₹2,950.50

        Break-even N = 77,000/2,950.50
                     = 26.1 parts

      ┌────────────────────────────────────────────┐
      │ BELOW 27 PARTS, SCRAPPING IS CHEAPER.      │
      │                                            │
      │ AT 40 PARTS REWORK WINS. AT 20 IT WOULD    │
      │ NOT HAVE. THE BATCH SIZE, NOT THE          │
      │ PRINCIPLE, DECIDES.                        │
      └────────────────────────────────────────────┘

  (g) RECOMMENDATION

      1 RAISE THE 12 % MEASUREMENT CONSUMPTION
        BEFORE ANYTHING ELSE. If the customer's
        requirement is ≤10 %, the checking fixture
        must be improved or the CMM retained,
        and the ₹2.41 M economics do not apply.

      2 IF ACCEPTED, BUILD THE CHECKING FIXTURE.
        0.92-month payback, and it releases a CMM
        that this part would otherwise occupy for
        1,517 hours a year.

      3 REWORK THE 40 PARTS. ₹112,980 against
        ₹154,000, saving ₹41,020 — but note the
        break-even is 26.1 parts, so this is a
        batch-size-dependent answer, not a policy.

      4 THE PROCESS IS CAPABLE AND SHOULD BE
        PROTECTED. A mean of 0.082 against a 0.30
        limit is why inward absorption costs ₹173
        a year instead of ₹4.31 million.

RESULT:
  ┌──────────────────────────────┬───────────────────┐
  │ (a) Gauge allocation, 8 %    │ 0.024 mm          │
  │     Accepted zone            │ 0.276 mm (92.0 %) │
  │ (b) False rejects, uniform   │ 8.00 % = 1,120/yr │
  │     False rejects, measured  │ 0.045/yr          │
  │     RATIO                    │ ≈ 24,900×         │
  │ (c) Cost, uniform            │ ₹4,312,000/yr     │
  │     Cost, measured           │ ₹173/yr           │
  │ (d) Fixture consumption      │ 12.0 % — EXCEEDS  │
  │                              │ the 10 % guideline│
  │     CMM consumption          │ 2.67 %            │
  │ (e) CMM hours displaced      │ 1,376.7 h/yr      │
  │     Value                    │ ₹2,409,167/yr     │
  │     Payback                  │ 0.92 months       │
  │ (f) Scrap 40 parts           │ ₹154,000          │
  │     Rework expected cost     │ ₹112,980 (73.4 %) │
  │     Saving                   │ ₹41,020           │
  │     Fixture share of rework  │ 54.9 %            │
  │     BREAK-EVEN BATCH         │ 26.1 parts        │
  │ (g) RECOMMENDATION           │ gate the 12 %     │
  │                              │ first; then build;│
  │                              │ rework the 40     │
  └──────────────────────────────┴───────────────────┘

SAFETY FACTOR:
  The gauging equivalent of a safety factor is the
  retained zone and the measurement consumption.
  Retained 92.0 %; consumption 12.0 %, which
  EXCEEDS the usual 10 % guideline and requires
  agreement. There is no margin on that item.

PASS/FAIL:
  ✓ PASS — gauge allocation and inward absorption
  ✓ PASS — false reject cost, ₹173/yr on the
    measured distribution
  ⚠ FAIL AGAINST THE 10 % GUIDELINE — measurement
    consumption 12.0 %; falls in the 10-30 % band
    requiring justification and agreement
  ✓ PASS — economics, 0.92-month payback
  ✓ PASS — rework, at this batch size only

ENGINEERING CONCLUSION:
  1. THE DISTRIBUTION, NOT THE GAUGE, DETERMINED
     THE COST OF INWARD ABSORPTION.
     The same 8 % allocation costs ₹4,312,000 a
     year on a uniform distribution and ₹173 on
     the measured one — a factor of about 24,900.
     The process runs at a mean of 0.082 mm
     against a 0.30 mm limit, so shaving 0.024 mm
     off the accepted zone removes essentially
     nothing. THE PRACTICAL CONSEQUENCE IS THAT
     ARGUING ABOUT GAUGE TOLERANCE IS ALMOST
     ALWAYS THE WRONG ARGUMENT. If inward
     absorption is expensive, the process is not
     capable, and the answer is to fix the
     process. Widening the gauge to reduce false
     rejects trades a visible cost for an
     invisible one — shipped bad parts.

  2. THE MEASUREMENT CONSUMPTION WAS THE GATE, AND
     THE ECONOMICS WERE IRRELEVANT UNTIL IT WAS
     SETTLED.
     A 0.92-month payback and 1,377 hours of CMM
     released are decisive numbers. They do not
     matter if the fixture's 12.0 % consumption of
     the tolerance is not accepted. This is the
     L2.1.4 discipline exactly: ELIMINATE ON GATES
     BEFORE COMPARING ECONOMICS. The failure mode
     here would be to present the payback, get
     approval, build the fixture, and discover at
     PPAP that the customer requires ≤10 %.

  3. THE ALLOCATION GEOMETRY IS EASY TO GET WRONG
     AND IT CHANGES THE ANSWER BY A FACTOR OF TWO.
     A position tolerance is a zone with one
     boundary, so the allocation is lost once. A
     ± size tolerance has two limits, so it is
     lost twice, and the retained fraction is
     1 − 2k rather than 1 − k. HERE THAT IS THE
     DIFFERENCE BETWEEN 92.0 % AND 84.0 %
     RETAINED. The characteristic's geometry
     determines how the allocation applies, and
     the habit of quoting "1 − 2k" universally is
     wrong half the time.

  4. THE REWORK DECISION WAS A BATCH-SIZE
     QUESTION, NOT A PRINCIPLE.
     Rework cost ₹112,980 against ₹154,000 to
     scrap, saving ₹41,020 — but the correction
     fixture was 54.9 % of the rework cost, and
     the break-even batch was 26.1 parts. At 40
     parts rework wins; at 20 it loses. ANYONE WHO
     HAS A GENERAL POLICY ON REWORK IS WRONG ABOUT
     HALF THE TIME. And the 12 % failure
     probability contributed ₹18,480 — a term
     routinely omitted, which is why rework
     overruns its estimate.

  5. WHAT WOULD HAVE CHANGED THE REWORK ANSWER
     ENTIRELY.
     No datum was recut, so re-inspection covered
     only the reworked feature at 4 minutes. HAD
     THE OVERSIZE HOLE BEEN A DATUM, EVERY
     DIMENSION REFERENCED TO IT WOULD REQUIRE
     RE-QUALIFICATION — a different order of cost,
     and quite possibly a decision to scrap. I
     would check that first on any rework
     proposal, before costing anything.

SENSITIVITY NOTE:
  Ranked by influence:
    1. THE PROCESS DISTRIBUTION — a factor of
       ~24,900 between the uniform and measured
       false-reject rates. THE SINGLE LARGEST
       SENSITIVITY IN THE WHOLE ANALYSIS, and it
       is a property of the process, not of the
       gauge.
    2. THE MEASUREMENT CONSUMPTION REQUIREMENT —
       binary. If ≤10 % is mandatory, the fixture
       fails and the ₹2.41 M benefit vanishes.
    3. BATCH SIZE FOR REWORK — break-even at 26.1
       parts against an actual 40. A 35 % change
       in batch size reverses the decision.
    4. WHETHER A DATUM IS RECUT — not a variable
       in this case, but it would multiply the
       re-inspection cost and could reverse the
       rework decision on its own.
    5. THE 12 % REWORK FAILURE PROBABILITY —
       ₹18,480, or 16.4 % of the rework cost.
       Doubling it to 24 % adds ₹18,480 and takes
       the saving from ₹41,020 to ₹22,540 — still
       positive, so MODERATELY SENSITIVE.
```

### 14. Engineering assumptions
- The 8% allocation is a **convention**; the applicable gauging standard and the customer's requirement
  govern `[GUIDE]`.
- **Position is a radial quantity and its distribution is not normal about zero**; treated as
  approximately normal in the deviation for illustration only `[EX-ASSUMED]`.
- Fixture and CMM uncertainties are stated figures that **must be verified by an R&R study**
  `[EX-ASSUMED]`.
- The 12% rework failure probability is an estimate; it should come from history where any exists
  `[EX-ASSUMED]`.
- **The customer's concession for the oversize hole is confirmed, not assumed** — without it the rework
  route does not exist `[PROJ]`.
- Re-inspection covers only the reworked feature because **no datum was recut**; had one been, the whole
  part would need re-qualification `[PROJ]`.

### 15. Diagram

```
     VERIFICATION AND CORRECTION FIXTURES
     (instructional schematic — FOR TRAINING ONLY,
      NOT FOR MANUFACTURE)

  WHERE THE MEASUREMENT LIVES

   INSPECTION FIXTURE   the INSTRUMENT measures
                        → fixture gives access and
                          repeatable presentation

   CHECKING FIXTURE     the FIXTURE measures
                        → its errors go straight
                          into the result

   GAUGE                Go / No-Go, attribute only
                        → fastest, least
                          informative

  ──────────────────────────────────────────────────────────

  THE ASYMMETRY THAT JUSTIFIES EVERY STRICTER RULE

   A BAD FIXTURE  →  MAKES scrap
                     expensive · visible ·
                     contained

   A BAD GAUGE    →  SHIPS scrap
                     expensive · INVISIBLE ·
                     NOT CONTAINED

  ──────────────────────────────────────────────────────────

  INWARD ABSORPTION

   PART LIMIT      ├────────────────────────┤
   INWARD            ├────────────────────┤
                     rejects some GOOD ✓
   OUTWARD        ├──────────────────────────┤
                  accepts some BAD ✗ NEVER

   ┌──────────────────────────────────────────────┐
   │ REJECTING A GOOD PART COSTS YOU A PART.      │
   │ ACCEPTING A BAD PART COSTS YOUR CUSTOMER A   │
   │ FAILURE.                                     │
   │                                              │
   │ THE ERRORS ARE NOT SYMMETRICAL, SO THE       │
   │ TOLERANCE IS NOT APPLIED SYMMETRICALLY.      │
   └──────────────────────────────────────────────┘

   AND THE ALLOCATION GEOMETRY MATTERS:
     POSITION zone — one boundary → retained 1 − k
     ± SIZE limit  — two ends    → retained 1 − 2k
   HERE: 92.0 % vs 84.0 %. A FACTOR-OF-TWO ERROR
   IF YOU QUOTE THE WRONG ONE.

  ──────────────────────────────────────────────────────────

  THE COST OF INWARD ABSORPTION IS THE PROCESS,
  NOT THE GAUGE

   SAME 8 % ALLOCATION, TWO PROCESSES

   UNIFORM distribution
     1,120 rejects/yr  ████████████████████
     ₹4,312,000/yr

   MEASURED (mean 0.082, σ 0.043, limit 0.30)
     0.045 rejects/yr  ▏
     ₹173/yr

   RATIO ≈ 24,900×

   ┌──────────────────────────────────────────────┐
   │ IF INWARD ABSORPTION IS EXPENSIVE, THE       │
   │ PROCESS IS NOT CAPABLE.                      │
   │                                              │
   │ THE ANSWER IS TO FIX THE PROCESS, NOT TO     │
   │ WIDEN THE GAUGE — WHICH TRADES A VISIBLE     │
   │ COST FOR AN INVISIBLE ONE.                   │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE MOST COMMON CHECKING FIXTURE ERROR

   REQUIREMENT   4 holes, Ø0.25 M to |A|B|C|
                 B = the Ø40H7 BORE

   AS BUILT      located on face A ✓
                 TWO DOWELS IN TWO OF THE HOLES ✗
                 side face C ✓
                 DATUM B NEVER USED

   RESULT        the pattern defined its own
                 orientation → a 0.6° rotation
                 was undetectable → passed the
                 check, failed at assembly

   ┌──────────────────────────────────────────────┐
   │ NEVER LOCATE ON THE FEATURE BEING MEASURED.  │
   │                                              │
   │ IT IS ALWAYS THE SAME SHAPE OF ERROR, AND IT │
   │ ALWAYS MEASURES THE FEATURES RELATIVE TO     │
   │ EACH OTHER INSTEAD OF TO THE DATUM FRAME.    │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  GATE BEFORE ECONOMICS — AGAIN

   ECONOMICS   payback 0.92 months
               1,377 CMM hours released
               ₹2,409,167/yr
               → DECISIVE

   GATE        measurement consumption 12.0 %
               guideline ≤10 %
               → NOT SETTLED

   ┌──────────────────────────────────────────────┐
   │ THE ECONOMICS ARE IRRELEVANT UNTIL THE GATE  │
   │ IS SETTLED.                                  │
   │                                              │
   │ THE FAILURE MODE: PRESENT THE PAYBACK, GET   │
   │ APPROVAL, BUILD IT, AND DISCOVER AT PPAP     │
   │ THAT ≤10 % WAS MANDATORY.                    │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  CORRECTION FIXTURES — THE CONSUMED DATUM

   A PRODUCTION FIXTURE assumes the incoming part
   is IN TOLERANCE.

   A CORRECTION FIXTURE EXISTS BECAUSE IT IS NOT.

   ┌──────────────────────────────────────────────┐
   │ SO IT MUST ACCEPT A WIDER RANGE OF PART      │
   │ CONDITION THAN THE FIXTURE THAT MADE IT —    │
   │ THE OPPOSITE OF EVERY OTHER FAMILY.          │
   └──────────────────────────────────────────────┘

   THE FOUR STRATEGIES, IN ORDER OF PREFERENCE
     1 re-use the ORIGINAL datums (if intact)
     2 locate on VERIFIED-GOOD features
     3 indicate in on finished geometry (slow)
     4 add a TEMPORARY datum (adds an operation)

   AND ALWAYS: AN ENTRY GATE
     which parts can this fixture actually
     correct? A part too far out gets "corrected"
     into a different kind of scrap.

   ┌──────────────────────────────────────────────┐
   │ RECUTTING A DATUM RE-QUALIFIES THE ENTIRE    │
   │ PART.                                        │
   │                                              │
   │ Every dimension referenced to it is now      │
   │ measured from a different place. THIS IS HOW │
   │ A "SIMPLE REWORK" SHIPS A PART THAT IS WRONG │
   │ IN A DIMENSION NOBODY RE-CHECKED.            │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  REWORK IS A CALCULATION

   scrap 40 parts      ████████████████ ₹154,000
   rework 40 parts     ████████████ ₹112,980
                       saving ₹41,020 (73.4 %)

   BUT the correction fixture is 54.9 % of the
   rework cost, so:

   BREAK-EVEN BATCH = 26.1 PARTS

   at 40 → rework wins
   at 20 → scrapping wins

   ┌──────────────────────────────────────────────┐
   │ ANYONE WITH A GENERAL POLICY ON REWORK IS    │
   │ WRONG ABOUT HALF THE TIME.                   │
   │                                              │
   │ And include P_fail — 12 % here, ₹18,480,     │
   │ routinely omitted, which is why rework       │
   │ overruns its estimate.                       │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example

```
GAUGE GA-2200 — CHECKING FIXTURE
FOR TRAINING ONLY — NOT FOR MANUFACTURE

NOTE 1: DATUM SIMULATORS ITEMS 2, 3 AND 4
        REPRESENT PART DATUMS A, B AND C
        RESPECTIVELY, IN THAT PRECEDENCE.
        DATUM B SIMULATOR IS FIXED SIZE (MMC).

NOTE 2: PINS ITEMS 8-11 ARE Go GAUGE ELEMENTS FOR
        THE HOLE PATTERN. THEY ARE NOT LOCATORS.

NOTE 3: GAUGE TOLERANCE ABSORBED INWARD. ACCEPTED
        ZONE 0.276 mm AGAINST A PART TOLERANCE OF
        0.300 mm. DO NOT OPEN OUT.

NOTE 4: CALIBRATION INTERVAL PER QUALITY PLAN
        QP-2200. THIS INTERVAL IS MANDATORY.

NOTE 5: WEAR LIMITS FOR ITEMS 8-11 ON SHEET 3.
        A WORN Go PIN PASSES PARTS IT SHOULD
        REJECT.

NOTE 6: STANDARD: ASME Y14.5-2018.
```

`[PRACTICE]` **Note 3 is the one that protects the customer**, and it needs the "do not open out"
sentence explicitly. When false rejects become annoying, the instinct on the shop floor is to ease the
gauge — and easing it converts a visible cost into an invisible one. **The note does not stop somebody
determined, but it removes the excuse that nobody knew.**

### 17. CAD workflow
1. Extract the **datum reference frame** from the part drawing before anything else
2. Model **datum simulators** matching the specified features, precedence and material condition
3. Verify that **no locating feature is also a measured feature**
4. Apply the **gauge tolerance inward** in the model, and dimension it that way
5. Model the part at **MMC and LMC** and confirm the gauge behaves correctly at both
6. For non-rigid parts, model the **free-state and restrained conditions** separately
7. Model **wear limits** as an alternative configuration and check the gauge still discriminates
8. For a correction fixture, model the **worst-case incoming part condition**, not the nominal part

`[PRACTICE]` Step 8 is the correction-fixture-specific step. **The nominal part is the one case a
correction fixture will never see.** Modelling it wastes the check.

### 18. GD&T application

```
  THIS LESSON IS WHERE GD&T STOPS BEING NOTATION
  AND BECOMES HARDWARE.

  STANDARD: ASME Y14.5-2018
  (ISO equivalent: ISO 5459:2011 for datums and
   datum systems. THE TWO DIFFER — do not mix.)

  ┌────────────────────────────────────────────┐
  │ A DATUM SIMULATOR IS THE PHYSICAL           │
  │ EMBODIMENT OF A DATUM.                     │
  │                                            │
  │ The drawing says |A|B|C|. The fixture must │
  │ PHYSICALLY CREATE that frame, in that      │
  │ order, with the right modifiers.           │
  └────────────────────────────────────────────┘

  WHAT THE MODIFIERS MEAN FOR THE HARDWARE

  DATUM AT MMC (the M modifier)
    → a FIXED-SIZE simulator
    → a pin or bore at the virtual condition size
    → the part may rock or shift within the
      resulting clearance, AND THAT IS CORRECT —
      the tolerance permitted it

  DATUM AT RFS (no modifier, the default in
  ASME Y14.5)
    → an ADJUSTABLE or centring simulator
    → an expanding mandrel, a chuck, a centring
      vee
    → it must engage the actual feature whatever
      its size
    → MORE EXPENSIVE HARDWARE, AND THAT COST IS A
      DIRECT CONSEQUENCE OF THE DRAWING

  ┌────────────────────────────────────────────┐
  │ THE MODIFIER ON THE DRAWING DETERMINES     │
  │ WHETHER THE GAUGE COSTS ₹40,000 OR         │
  │ ₹200,000.                                  │
  │                                            │
  │ THIS IS THE MOST DIRECT LINK BETWEEN A GD&T│
  │ DECISION AND A COST IN THE WHOLE SUBJECT,  │
  │ AND IT IS WHY THE FIXTURE DESIGNER SHOULD  │
  │ BE IN THE ROOM WHEN TOLERANCES ARE SET.    │
  └────────────────────────────────────────────┘

  Full datum and modifier treatment at Levels
  10-11; functional gauge design at Level 30.
```

### 19. Manufacturing method
| Element | Practice `[PRACTICE]` |
|---|---|
| **Datum simulators** | Hardened and ground; EN31 58–62 HRC typical; the highest-precision elements in the fixture |
| **Go/No-Go pins** | Ground to gauge tolerance; **replaceable**, because they wear |
| **Fixture body** | Stable material; stress-relieved; thermal stability matters at gauge tolerances |
| **Marking** | Every gauge element marked with its identity and nominal, for calibration |
| **Correction fixtures** | Often lower-precision but **more adjustable** — a different design intent |
| **Storage** | Gauges are stored protected; a dropped gauge is a suspect gauge until re-calibrated |

> **"A dropped gauge is a suspect gauge"** deserves stating as a rule rather than a habit. `[PRACTICE]`
> There is no visual inspection that reliably detects a 0.01 mm shift, and the gauge will keep giving
> confident answers. **The only correct response to a dropped gauge is re-calibration, and the process
> must make that easy or it will not happen.**

### 20. Inspection method
| Check | Method | Acceptance `[PROJ]` |
|---|---|---|
| Datum simulator positions | CMM | Per drawing |
| Datum precedence correct | Design review against the part drawing | Matches |
| No locator is also a measured feature | Design review | Confirmed |
| Gauge element sizes | Measured against masters | Within gauge tolerance |
| Inward absorption applied | Calculation review | Accepted zone < part tolerance |
| Gauge R&R | Study per the applicable method | Within the agreed consumption |
| Wear limits marked | Drawing and physical marking | Present |
| Calibration record | Document review | Current |
| Correction fixture entry gate | Physical trial with a worst-case part | Rejects what it cannot correct |

`[PRACTICE]` **The "no locator is also a measured feature" review is a two-minute check that prevents the
most common and most expensive checking fixture failure.** It belongs on the design review checklist as a
named item, not as something a reviewer might notice.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Locating on **convenient** features instead of the drawing datums | Measures a different characteristic |
| 2 | **Locating on the feature being measured** | Pattern defines its own orientation; rotation undetectable |
| 3 | Wrong **datum precedence** | Different frame, different answer |
| 4 | Wrong **material condition modifier** in hardware | Fixed simulator where a centring one is required, or vice versa |
| 5 | Absorbing tolerance **outward** | Ships bad parts |
| 6 | Quoting **1 − 2k** for a position zone | Factor-of-two error in the retained zone |
| 7 | Ignoring the **process distribution** when assessing false rejects | Argues about the gauge when the process is the issue |
| 8 | Ignoring the **fixture's contribution** to measurement uncertainty | A good CMM on a poor fixture |
| 9 | No **wear allowance** or no wear limits | Gauge drifts into accepting bad parts |
| 10 | **Negotiable** calibration interval | One-way failure goes undetected |
| 11 | **Clamping** a non-rigid part to check it | Certifies anything forcible |
| 12 | Not stating **free state** | Two inspectors, two answers |
| 13 | Correction fixture designed around the **nominal** part | The one case it will never see |
| 14 | No **entry gate** on a correction fixture | Parts "corrected" into different scrap |
| 15 | **Recutting a datum** without re-qualifying the part | Ships a part wrong in an unchecked dimension |
| 16 | A **general policy** on rework | Wrong about half the time |
| 17 | Omitting **P_fail** from rework costing | Rework overruns its estimate |
| 18 | Designing a rework route before **confirming the customer permits rework** | Wasted work; possible non-compliance |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Parts pass the check, fail at assembly | Locating on the measured feature | Review against the datum frame | Rebuild on the drawing datums | Design rule R2 |
| Two inspectors disagree | Free state or restraint unspecified | Compare methods | State the condition | Design rule R9 |
| False rejects rising | Process drifting, not gauge | Measure the process mean and σ | Fix the process | Monitor capability |
| Gauge passes known-bad parts | Wear | Check against masters | Replace elements | Wear limits and calibration |
| R&R fails | Fixture repeatability dominates | Partition the R&R | Improve the fixture | Include the fixture in the R&R plan |
| Gauge cost unexpectedly high | RFS datum requiring a centring simulator | Review the drawing modifiers | Discuss MMC with the designer | Fixture designer in the tolerancing review |
| Reworked part fails a different dimension | A datum was recut | Re-qualify fully | Re-inspect all referenced dimensions | Design rule R14 |
| Correction fixture damaged parts | No entry gate | Trial a worst-case part | Add the gate | Design rule R13 |
| Rework cost overran | P_fail omitted | Review actual failures | Include the term | Rework formula |

### 23. Design checklist
- [ ] Has the **datum reference frame** been taken from the part drawing?
- [ ] Are the **datum simulators** the right features, in the right **precedence**?
- [ ] Are the **material condition modifiers** correctly embodied in hardware?
- [ ] Is **no locator also a measured feature**?
- [ ] Is tolerance absorbed **inward**?
- [ ] Is the allocation geometry correct — **1 − k or 1 − 2k**?
- [ ] Has the **process distribution** been used to estimate false rejects, not a uniform assumption?
- [ ] Is the **fixture included in the measurement uncertainty**?
- [ ] Is the **measurement consumption** within the applicable requirement, and agreed?
- [ ] Is there a **wear allowance** and are wear limits marked `[STD]`?
- [ ] Is the **calibration interval** stated and mandatory?
- [ ] For non-rigid parts, is the **free-state condition** stated?
- [ ] For a correction fixture: is it designed around the **worst-case incoming part**?
- [ ] Does it have an **entry gate**?
- [ ] If a **datum is recut**, is full re-qualification planned?
- [ ] Has the **customer's rework permission** been confirmed?
- [ ] Is the rework-versus-scrap decision a **calculation including P_fail**?

### 24. Beginner exercise
**E3.1.4-B** — Answer with reasons and calculations:
(a) State the difference between an inspection fixture, a checking fixture and a gauge.
(b) A part tolerance is ±0.20 mm on a size dimension. With a gauge allocation of 7%, calculate the
accepted zone and the retained fraction.
(c) Repeat for a positional tolerance of Ø0.40 mm, and explain why the answer differs in form.
(d) State which of the two gauge errors is unacceptable and why.
(e) A gauge is dropped. State the correct response and why visual inspection is not sufficient.
(f) State why a correction fixture must accept parts a production fixture would reject.

### 25. Intermediate exercise
**E3.1.4-I** — A checking fixture is proposed for a part with a positional tolerance of Ø0.50 mm to
|A|B|C|. Volume 22,000/yr, part value ₹2,400. The process measured over 150 parts gives a mean deviation
of 0.19 mm with σ = 0.061 mm. The gauge allocation convention is 8%. The fixture's repeatability is
±0.022 mm; the CMM alternative is ±0.005 mm with a 7.2 min cycle against the fixture's 0.5 min. The
fixture costs ₹210,000; the rate is ₹1,800/h.
(a) Calculate the gauge allocation and the accepted zone.
(b) Calculate the false reject rate under a uniform assumption and its annual cost.
(c) Calculate it using the measured distribution and compare.
(d) Calculate the measurement consumption for both the fixture and the CMM, and assess against the 10%
guideline.
(e) Calculate the annual time saving and the payback.
(f) State which consideration gates the decision, and why the economics do not settle it.
(g) State what you would present to the customer and in what order.

### 26. Advanced exercise
**E3.1.4-A** — A welded steel sub-assembly (non-rigid, 620 × 340 mm) has: a profile tolerance of 1.0 mm to
|A|B|C| on a mounting surface, four Ø12 holes at Ø0.5 M to the same frame, and a flatness of 0.8 mm in the
free state. Volume 30,000/yr for 4 years. A batch of 120 units is found with the hole pattern 0.7 mm out
of position; the customer will accept a repair by welding and re-drilling, subject to concession.
`[EX-ASSUMED]` State all assumptions.
(i) Design the verification strategy: which characteristics are gauged, which are measured, and why.
(ii) Establish the datum simulators required, including how the free-state requirement is handled.
(iii) Explain what the M modifier on the hole pattern means for the gauge hardware and its cost.
(iv) Calculate the gauge allocations and accepted zones for all three characteristics.
(v) Explain why the flatness in the free state cannot be checked in the same fixture as the position at
MMC, or design a fixture that does both and justify it.
(vi) Design the correction fixture for the 120-unit batch, stating what it locates on and why.
(vii) Determine whether re-drilling affects a datum and what re-qualification is required.
(viii) Perform the rework-versus-scrap calculation including P_fail, and determine the break-even batch
size.
(ix) Identify which of the twenty-four auto-fail items this application most invites.
(x) State the eight most important notes across the verification and correction fixture drawings.

### 27. Interview questions
1. *"Why must a checking fixture locate on the drawing datums when a machining fixture need not?"*
   **Answer:** Because a tolerance is a statement about the part in a particular orientation. A position
   of Ø0.2 to A, B, C means the part set up on those datums, in that order, with those modifiers — and if
   you measure it from a different origin, you have measured a different characteristic and you can get a
   different answer on the same part. A machining fixture is allowed to locate on whatever is convenient
   and repeatable, provided the relationship to the datums is controlled, because its job is to put the
   part somewhere and the datums are only how the result is judged. A checking fixture's job *is* the
   judgement, so it has to physically create the datum reference frame. The commonest failure is
   subtler than choosing the wrong face: it is locating on the feature being measured. I have seen a
   checking fixture that used dowels in two of the four holes it was checking, and ignored the bore that
   was datum B entirely. It could not detect a rotation of the whole pattern, because the pattern defined
   its own orientation, and a batch rotated by six tenths of a degree passed the check and failed at
   assembly.
2. *"What is different about a fixture for reworking parts?"*
   **Answer:** Every other fixture assumes the incoming part is within tolerance. A correction fixture
   exists precisely because it is not, so it has to accept a wider range of part condition than the
   fixture that made the part — which is the opposite of the usual requirement. The harder problem is
   that the datum may have been consumed. If you are recutting a feature you would normally have located
   on, you need another reference, and the options in order of preference are to re-use the original
   datums if they are still intact, to locate on features you have verified are still good, to indicate
   the part in on finished geometry, or as a last resort to add a temporary datum, which adds an
   operation and must not affect function. Two things get forgotten. First, the fixture needs an entry
   gate — a check that the incoming part is within the range it can actually correct, because a part too
   far out gets "corrected" into a different kind of scrap. Second, if the feature being recut is itself
   a datum, then recutting it re-qualifies the entire part, because every dimension referenced to it is
   now measured from a different place. That is how a simple rework ships a part that is wrong in a
   dimension nobody re-checked.

### 28. Expert questions
1. *"A production manager wants the gauge opened out because false rejects are costing too much. Make the
   argument back."*
   **Answer:** I would start by agreeing that the cost is real, because it usually is and dismissing it
   loses the room. Then I would try to move the conversation from the gauge to the process, because
   **the false reject rate is overwhelmingly a property of the process, not of the gauge.**
   The arithmetic makes this vividly. In the case we worked, an eight per cent allocation on a 0.30 mm
   tolerance costs 1,120 rejects a year — ₹4.31 million — **if the parts are spread uniformly across the
   tolerance.** On the process as actually measured, mean 0.082 with a sigma of 0.043, the same gauge
   costs 0.045 parts a year. **₹173.** The ratio is about twenty-five thousand. Nothing about the gauge
   changed. **So if inward absorption is expensive, that is a measurement telling you the process is
   sitting close to the limit, and the gauge is the messenger.**
   Then the direct argument. **Opening the gauge does not remove the cost; it relocates it and hides
   it.** Every part that the widened zone now accepts is a part that was outside the tolerance. It
   ships. The cost becomes a warranty claim, a line stoppage at the customer, or a recall — all of which
   are larger, all of which arrive later, and all of which are attributed to you rather than to a
   decision made in a meeting. The L2.1.4 case had a gauge toleranced outward shipping 196 bad parts a
   year after a ten-micron drift. **Nobody detected that from inside the plant, because the gauge said
   they were fine.**
   I would also point out the **asymmetry of the two errors**, because it is the whole reason the rule
   exists. A false reject costs one part and you find out immediately. A false accept costs a customer
   failure and you find out from them. **Those are not comparable outcomes and it is not a symmetric
   trade, so it does not get resolved by splitting the difference.**
   And then I would offer the actual options, because refusing without alternatives is not useful.
   **Re-centre the process** — a mean of 0.082 against 0.30 has room, and if it were drifting toward the
   limit, centring is free. **Reduce the process variation** if it is the sigma rather than the mean.
   **Improve the gauge's own uncertainty**, which shrinks the allocation legitimately — a better gauge
   buys back accepted zone without accepting bad parts, and that is the one change that gives the manager
   what they want honestly. Or **re-negotiate the part tolerance with the customer, with data**, if the
   tolerance is genuinely tighter than the function requires.
   What I would not do is agree to the widening and record it as an engineering decision. **The one thing
   that makes this conversation manageable is having the process data in the room**, because without it
   the argument is a matter of opinion and the person with the budget wins.
2. *"Correction fixtures get built in a hurry, by whoever is available, under commercial pressure. Given
   that reality, what would you standardise?"*
   **Answer:** This is the right question, because **the failure mode of correction fixtures is not bad
   design, it is no design** — somebody bolts something to a table at four in the afternoon because a
   batch has to ship. Standardising the elegant approach fails; standardising the minimum that prevents
   catastrophe works.
   I would standardise **four things**, chosen because each prevents a failure that is expensive and
   irreversible.
   **First, a mandatory one-page disposition sheet before any correction fixture is made.** Not a design
   review — a form. What is the non-conformance, what feature is being corrected, **is that feature or
   its datum being altered**, what does the customer's contract say about rework on this characteristic,
   and what is the re-inspection scope. **The single question "is a datum being recut" catches the worst
   outcome in the whole family**, because that is what ships parts wrong in dimensions nobody looked at.
   **Second, an entry gate on every correction fixture, without exception.** A physical check that the
   incoming part is within the range the fixture can recover. It can be crude — a feeler gauge, a pin, a
   scribed limit line. What matters is that it exists, because **the alternative is that a part too far
   out gets processed and becomes a different kind of scrap, and now you have spent the rework cost as
   well.**
   **Third, a standard modular kit** rather than bespoke fabrication. Correction work is low volume and
   unpredictable, so the economics never justify a proper fixture, which is exactly why the improvised
   thing gets built. A modular baseplate with a grid of tapped holes, a set of adjustable supports,
   V-blocks, clamps and dial indicator posts turns a four-hour fabrication into a forty-minute setup.
   **The kit is the intervention that actually changes behaviour**, because it makes the correct route
   the fast route.
   **Fourth, a written record of what the fixture located on**, kept with the concession. Not a drawing —
   a photograph and three lines of text. When the same non-conformance recurs in eight months, and it
   will, that record is worth a day of rediscovery. And if the reworked parts are ever questioned, **the
   ability to state what the datum was is the difference between a defensible position and an
   embarrassing one.**
   What I would deliberately **not** standardise is the fixture design itself. Correction problems are
   too varied and a template would be ignored. **Standardise the gates and the kit; leave the geometry to
   the engineer in front of the problem.**

### 29. Summary
Verification and correction are separate families because a bad machining fixture makes scrap while a bad
gauge ships it — expensive, invisible and uncontained — and because a correction fixture faces a problem
no other family has, that the datum may already have been consumed. The three verification types differ
in where the measurement lives: an inspection fixture presents the part for an instrument, while a
checking fixture and a gauge *are* the measurement, so their errors enter the result directly. A
verification fixture must locate on the drawing datums in the specified precedence with the specified
modifiers, because measuring from a different origin measures a different characteristic; the most common
failure is locating on the feature being measured, which lets a pattern define its own orientation and
makes a uniform rotation undetectable. Tolerance is absorbed inward always, and the geometry of the
characteristic decides whether the retained fraction is 1 − k or 1 − 2k — here 92.0% against 84.0%, a
factor-of-two trap. The cost of inward absorption is a property of the process rather than the gauge: the
same 8% allocation cost ₹4,312,000 a year on a uniform distribution and ₹173 on the measured one, a ratio
of about 24,900, so the answer to an expensive gauge is to fix the process. The checking fixture's 12.0%
consumption of the tolerance gated a decision whose economics — 0.92-month payback, 1,377 CMM hours
released — were otherwise decisive, restating that gates come before economics. On the correction side, a
correction fixture must accept parts a production fixture would reject, needs an entry gate defining what
it can actually recover, and if it recuts a datum it re-qualifies the entire part. Rework is a
calculation, not a policy: ₹112,980 against ₹154,000 to scrap looked clear, but the break-even batch was
26.1 parts against an actual 40.

### 30. Key takeaways
- **A bad fixture makes scrap; a bad gauge ships scrap.** That asymmetry justifies every stricter rule.
- **Locate on the drawing datums, in the drawing's precedence, with the drawing's modifiers.**
- **Never locate on the feature being measured** — the commonest and most expensive checking fixture
  error.
- **Absorb tolerance inward, always.** The two errors are not symmetric, so the tolerance is not applied
  symmetrically.
- **Check the allocation geometry**: a position zone loses k once, a ± limit loses it twice.
- **The cost of inward absorption is the process, not the gauge** — a factor of ~24,900 here.
- **If inward absorption is expensive, fix the process.**
- **The fixture is part of the measurement system** — 12.0% consumption gated a 0.92-month payback.
- **Gates before economics**, again.
- **The MMC/RFS modifier decides whether the gauge is cheap hardware or expensive hardware** — the most
  direct GD&T-to-cost link in the subject.
- **Gauge wear is one-way**: it gets easier to pass. Calibration intervals are not negotiable.
- **A dropped gauge is a suspect gauge.**
- **A correction fixture must accept parts a production fixture would reject** — the opposite of every
  other family.
- **Every correction fixture needs an entry gate.**
- **Recutting a datum re-qualifies the entire part.**
- **Rework is a calculation including P_fail, not a policy** — break-even 26.1 parts against an actual 40.

---

## MODULE 3.1 — CLOSING

### The process → fixture class map

The deliverable of this module. **Given a process, this table gives the class, what governs it, and the
one thing most often missed:**

| Process | Class | Governing consideration | Most often missed |
|---|---|---|---|
| **Rough milling** | Machining, force | Side load, rigidity | Slotting is the worst case, not face milling |
| **Finish milling** | Machining, distortion | Clamp force is the enemy | The roughing clamp force prints through |
| **Drilling** | Machining, force | **Torque, not thrust** | Breakthrough support |
| **Boring** | Machining, access | Bar path, L/D | The bar and its coolant fitting, not the tip |
| **Reaming** | Machining, access | Alignment; the reamer follows | Any side load ruins it |
| **Tapping** | Machining, force | **Two-direction anti-rotation** | The reversal |
| **Turning** | Machining, **rotating** | Speed first, force second | Grip falls with speed; balance; projections |
| **Grinding** | Machining, distortion | Strain and heat | Release distortion; demagnetising |
| **VMC multi-op** | Machining, access | Reach every feature | Chip volume |
| **HMC / tombstone** | Machining, access | Support ledge; utilisation | Gravity pulls the part out |
| **MIG / MAG** | Joining, thermal | Distortion direction; torch access | Spatter; locators are consumable |
| **TIG** | Joining, thermal | Very close access; gas shielding | Shielding disturbed by fixture geometry |
| **Spot welding** | Joining, **access-governed** | **Both electrodes at every point** | Current shunting through the fixture |
| **Projection welding** | Joining, force | Electrode force through the fixture | Alignment under load |
| **Brazing** | Joining, thermal | Survives the furnace | Spring loading for differential expansion |
| **Riveting** | Joining, **mechanical** | Setting force; far-side support | It behaves like machining |
| **Adhesive** | Joining, time | Bond line gap; cure occupancy | Many cheap fixtures may beat one good one |
| **Tube cutting** | Tube | Length repeatability, no crushing | **Retractable stop** |
| **Tube bending** | Tube | Springback; rotation accumulation | Closed loop; swing envelope |
| **Tube checking** | Verification, non-rigid | **Free state — must not clamp** | Distinguish locators from checking features |
| **Tube welding** | Joining + tube | Orientation; access all round | Thin wall distorts readily |
| **End-forming** | Tube, force | Axial force; grip without crushing | Buckling between grip and tool |
| **Inspection** | Verification | Access; repeatable presentation | The fixture is in the R&R |
| **Checking / gauging** | Verification | **Drawing datums; inward absorption** | Never locate on the measured feature |
| **Recutting** | Correction | The consumed datum | Recutting a datum re-qualifies the part |
| **Rework** | Correction | Accepts out-of-tolerance parts | The entry gate |

### The five families and what each removes

```
   MACHINING     large forces, chips, coolant
                 → the baseline everything else is
                   compared against

   JOINING       removes RIGIDITY, adds HEAT
                 → thermal forces exceed any clamp;
                   the fixture directs distortion
                   rather than preventing it

   TUBE          removes PRISMATIC GEOMETRY
                 → no flat faces; errors accumulate
                   along the length; closed-loop
                   process

   VERIFICATION  removes the CUTTING FORCE, and
                 with it every argument that
                 depended on it
                 → the fixture IS the measurement;
                   datums and inward absorption
                   govern

   CORRECTION    removes the DATUM
                 → must accept parts a production
                   fixture would reject
```

### Governing principles — Module 3.1

Continuing from 132 at the end of Level 2:

| # | Principle |
|---|---|
| **133** | "Machining fixture" is a family, not a type; a grinding fixture and a roughing fixture share almost no design drivers. |
| **134** | Ask what will make the operation fail — force, access or distortion — and the sub-class answers itself. |
| **135** | The sharpest division in machining is whether the part rotates. Carry over the geometry; re-derive the statics. |
| **136** | A rotating clamping element is simultaneously a device applying force and a mass reducing it. |
| **137** | Centrifugal force scales with the square of speed; a 7.71× speed increase gave 59.5× the force. |
| **138** | Never estimate chuck grip at speed; the manufacturer's curve is specific to the jaws fitted. |
| **139** | Put a speed limit and its reason on the drawing; a limit whose reason is unknown gets optimised away. |
| **140** | Grinding is governed by strain and heat, not force; low-strain holding is the whole problem. |
| **141** | Moving a design between sub-classes changes the governing load case even when the operations do not change. |
| **142** | A welding fixture cannot prevent distortion. It can only control where it goes. |
| **143** | Clamping harder makes weld distortion worse: more restraint means more compressive yielding while hot, and more contraction on cooling. |
| **144** | A welding fixture that holds everything at nominal is usually wrong. |
| **145** | Pre-setting corrects bias and never scatter; measure the mean and the spread separately before choosing a remedy. |
| **146** | Annotate a deliberate deviation as deliberate, or somebody will remove it. |
| **147** | Weld sequence is part of the fixture design; clamps must work at every stage of it. |
| **148** | In welding, the fixture's own thermal growth is a real contributor, and it is a drift rather than a scatter. |
| **149** | Spot welding imposes the severest access constraint in fixture design: both electrodes, at every point, with fixed hardware. |
| **150** | A conductive fixture near a resistance weld shunts the current and the weld does not form. |
| **151** | Welding fixture locators are consumable; make them replaceable. |
| **152** | A tube has no flat faces, but six constraints are still six constraints — supplied by different features. |
| **153** | A V-block locates the tube's surface, not its axis, and does not constrain rotation at all except by friction. |
| **154** | A pierced hole is the best datum a tube can have: position and rotation together, insensitive to diameter. |
| **155** | Angular errors in tube work are amplified by the remaining length; early bends matter most. |
| **156** | Springback, bend deduction, ovality and wall thinning must be established by trial, never calculated. |
| **157** | Tube bending is a closed-loop process because springback varies with material batch. |
| **158** | Never clamp a flexible part in order to check it; a checking fixture that clamps issues certificates, not measurements. |
| **159** | State the free-state or restrained condition for any non-rigid part, or two inspectors will get different answers and both will be right. |
| **160** | Distinguish locators from checking features on the drawing, or a setter will adjust one. |
| **161** | A bad fixture makes scrap; a bad gauge ships scrap. That asymmetry justifies every stricter rule in verification. |
| **162** | A verification fixture locates on the drawing datums, in the specified precedence, with the specified modifiers. |
| **163** | Never locate on the feature being measured; the pattern then defines its own orientation. |
| **164** | Tolerance is absorbed inward, always; the two errors are not symmetric, so the tolerance is not applied symmetrically. |
| **165** | The cost of inward absorption is a property of the process, not the gauge. If it is expensive, fix the process. |
| **166** | The characteristic's geometry decides the allocation: a position zone loses k once, a ± limit loses it twice. |
| **167** | The fixture is part of the measurement system; a good CMM on a poor fixture is a poor measurement system. |
| **168** | The material condition modifier on the drawing decides whether the gauge is cheap hardware or expensive hardware. |
| **169** | Gauge wear is a one-way failure: it gets easier to pass, and nothing downstream catches it. |
| **170** | A correction fixture must accept parts a production fixture would reject — the opposite of every other family. |
| **171** | Every correction fixture needs an entry gate defining which parts it can actually recover. |
| **172** | Recutting a datum re-qualifies the entire part. |
| **173** | Rework is a calculation including the probability that the rework fails, not a policy. |

**Principles 133–173 belong to Module 3.1. The next block begins at 174.**

### Numerical results established in Module 3.1

| Result | Value | Lesson |
|---|---|---|
| Turning: spindle speed for 220 m/min at Ø180 | 389.0 rev/min | L3.1.1 |
| Cutting force / torque | 1,218.75 N / 109.69 N·m | L3.1.1 |
| Centrifugal grip loss at 389 rev/min | 524.3 N = **1.25%** | L3.1.1 |
| Safety factor at 389 rev/min, dry | **4.54** ✓ | L3.1.1 |
| Same, with coolant (μ 0.20 → 0.10) | **2.27** — margin halved by one assumption | L3.1.1 |
| Centrifugal grip loss at 3,000 rev/min | 31,179 N = **74.2%** | L3.1.1 |
| Net grip, 42,000 → | **10,821 N, a factor of 3.88 down** | L3.1.1 |
| Safety factor at 3,000 rev/min, dry / coolant | **1.18 ✗ / 0.59 ✗ — the part slips** | L3.1.1 |
| Centrifugal force ratio, 3,000 vs 389 | **59.5×** from a 7.71× speed change | L3.1.1 |
| Welding heat input | 0.936 kJ/mm; 56.2 kJ per weld; **449.3 kJ total** | L3.1.2 |
| Restraint stress at 600 °C | 1,440 N/mm² = **5.76× room-temperature yield** | L3.1.2 |
| Force to restrain one member at only 100 °C | **216,000 N (22 tonnes)** | L3.1.2 |
| Total clamp capacity available | 48,000 N = **22.2%**, shortfall **4.50×** | L3.1.2 |
| Welding fixture thermal growth, 28 °C over 1,100 mm | 0.370 mm = **18.5% of the tolerance band** | L3.1.2 |
| Tube geometric developed length | 1,333.84 mm (**not the cutting length**) | L3.1.3 |
| 0.25° rotation error at bend 2 | 2.443 mm = **2.44× the entire tolerance** | L3.1.3 |
| Same at bend 1 | 3.927 mm = **1.607×** bend 2 | L3.1.3 |
| Bender RSS total | **7.894 mm = 7.89× the budget** | L3.1.3 |
| V-block axis shift, Δd 0.60 mm in a 90° V | 0.424 mm | L3.1.3 |
| Two V-blocks → tilt at the end point | **3.138 mm** | L3.1.3 |
| Pierced hole scheme vs two V-blocks | **7.40× better, and controls rotation** | L3.1.3 |
| Measured tube: mean / spread | 2.9 / 2.3 mm → **predominantly bias** | L3.1.3 |
| Predicted vs observed scatter | 7.89 vs 2.3 = **3.43× — the capability data is wrong** | L3.1.3 |
| Checking fixture that clamped: newly failing tubes | **22%**, matching the line's reject rate | L3.1.3 |
| Gauge allocation, 8% of 0.30 mm | 0.024 mm; accepted zone 0.276 mm = **92.0%** | L3.1.4 |
| False rejects, uniform vs measured | 1,120/yr vs 0.045/yr = **≈24,900×** | L3.1.4 |
| Cost of false rejects, uniform vs measured | **₹4,312,000 vs ₹173 per year** | L3.1.4 |
| Measurement consumption, fixture / CMM | **12.0% (exceeds the 10% guideline) / 2.67%** | L3.1.4 |
| CMM hours displaced by the checking fixture | 1,376.7 h/yr = ₹2,409,167 | L3.1.4 |
| Checking fixture payback | **0.92 months** — and gated by the 12% | L3.1.4 |
| Rework 40 parts vs scrap | ₹112,980 vs ₹154,000 = **73.4%**, saving ₹41,020 | L3.1.4 |
| Correction fixture share of rework cost | **54.9%** | L3.1.4 |
| **Rework break-even batch size** | **26.1 parts** against an actual 40 | L3.1.4 |

### Formulae established in Module 3.1

```
ROTATING FIXTURES
  F = m ω² r,      ω = 2π N/60
  F_grip(N) = F_static − F_jaw_centrifugal  [MFR]
  [STD] Balance quality grades: ISO 21940 —
  CONFIRM the applicable grade

THERMAL (WELDING)
  σ = E · α · ΔT     stress if fully restrained
  ΔL = α · L · ΔT    free expansion, of the
                     FIXTURE as well as the part
  Q = (V·I·60)/(v·1000)   kJ/mm, gross

TUBE
  Δh = (Δd/2)/sin(θ/2)     V-block axis shift
    90° V → 0.707 Δd ; 60° → 1.000 Δd ;
    120° → 0.577 Δd
  e = L · sin(φ)           angular → positional
  Arc = θ · π · CLR/180    geometric only
  Ovality % = (d_max − d_min)/d_nom × 100

VERIFICATION
  Allocation = k · T_part
  Retained = 1 − k     (position zone)
           = 1 − 2k    (± size limit)
  False reject, uniform = k or 2k accordingly
  σ_meas² = σ_instrument² + σ_fixture²
            + σ_operator²

REWORK
  Worthwhile IF C_rework + P_fail · C_part
                < C_part
  Break-even N = fixed cost /
                 (C_part − variable per part)

WHAT CANNOT BE CALCULATED — ESTABLISH BY TRIAL
  ✗ weld pre-set amount, angular distortion,
    transverse shrinkage
  ✗ tube springback, bend deduction, achievable
    ovality, wall thinning
```

### Reference data confirmed or added in Module 3.1

| Quantity | Value | Tag |
|---|---|---|
| Steel coefficient of thermal expansion | α ≈ 12 × 10⁻⁶ /°C | `[GUIDE]` |
| Mild steel yield, nominal room temperature | 250 N/mm² — **falls sharply with temperature** | `[GUIDE]` |
| Temperature rise to yield steel if fully restrained | **~100 °C** | `[GUIDE]` |
| V-block sensitivity, 90° | Δh = 0.707 × Δd | derived |
| Balance quality grades | ISO 21940 — grade must be confirmed | `[STD]` |
| Free state for non-rigid parts | ISO 10579-NR; ASME Y14.5 free state modifier | `[STD]` |
| Gauge allocation | 5–10% of part tolerance (convention) | `[GUIDE]` |
| Measurement system consumption | ≤10% commonly; 10–30% with justification | `[GUIDE]` |
| Chuck grip vs speed | **Manufacturer's curve, jaw-specific — never estimate** | `[MFR]` |
| Weld shrinkage, pre-set, springback | **No general figure — establish by trial** | — |

### Self-check — Module 3.1

Answer without referring back. Any item you cannot answer identifies a lesson to re-read.

1. Name the five process families and state what assumption each one removes.
2. What three questions divide the machining family?
3. Why is a grinding fixture's design driver the opposite of a roughing fixture's?
4. What governs a drilling fixture? A boring fixture? A tapping fixture? A reaming fixture?
5. Why does chuck grip fall as speed rises?
6. A 7.71× increase in speed produced what increase in centrifugal force, and why?
7. What carries over unchanged when a part rotates, and what must be re-derived?
8. Explain in five steps why welding distorts.
9. Why does clamping harder make weld distortion worse?
10. How much force would restrain one 900 mm² member against 100 °C, and how does that compare with four
    clamps?
11. What is pre-setting, and what can it not fix?
12. Why is a welding fixture's own thermal growth significant when a machining fixture's usually is not?
13. Why is spot welding the severest access constraint in fixture design?
14. What is current shunting and how is it prevented?
15. Why does 3-2-1 not directly apply to a tube, and what replaces it?
16. How far does the axis of a tube move in a 90° V-block for a 0.6 mm diameter change?
17. What does a V-block fail to constrain at all?
18. Why is a pierced hole the best datum a tube can have?
19. Why do early bends matter more than late ones?
20. Why is tube bending run as a closed loop rather than an open-loop tolerance stack?
21. Why must a tube checking fixture not clamp, and what happened when one did?
22. State the difference between an inspection fixture, a checking fixture and a gauge.
23. Why must a verification fixture locate on the drawing datums when a machining fixture need not?
24. What is the commonest checking fixture error, and what does it fail to detect?
25. Explain inward absorption and why the two errors are not symmetric.
26. Why was the same 8% allocation worth ₹4,312,000 in one case and ₹173 in another?
27. When is the retained fraction 1 − k and when is it 1 − 2k?
28. Why did a 0.92-month payback not settle a decision?
29. How does the MMC/RFS modifier change the gauge hardware and its cost?
30. Why must a correction fixture accept parts a production fixture would reject?
31. What is an entry gate and why does every correction fixture need one?
32. What happens if the feature being recut is a datum?
33. Rework cost ₹112,980 against ₹154,000 to scrap. Why is that not a general conclusion?

### Exit criterion for Module 3.1

You may proceed when, given an unfamiliar part and its operation list, you can:
- **assign every operation to a process family and sub-class**
- **state the governing consideration for each — force, access, distortion, thermal or datum**
- **identify which operations conflict and which sub-class transitions change the load case**
- **recognise when the part rotates and re-derive rather than reuse**
- **recognise when heat, not force, is the design driver**
- **locate a tubular part with six explicit constraints from non-planar features**
- **design a verification scheme on the drawing datums with tolerance absorbed inward**
- **and design a correction strategy in advance of needing one, including its entry gate**

---

**END OF LEVEL 3 — PART 1**

**NEXT:** Level 3 Part 2 — Module 3.2 (classification by actuation and flexibility: manual, pneumatic,
hydraulic, electro-mechanical, vacuum, magnetic; dedicated, modular, flexible, reconfigurable; zero-point
and quick-change; single-component, multi-component, tombstone, rotary, 4th-axis, 5-axis, palletised) and
Module 3.3 (automation level, Poka-Yoke and sensor verification, **the Fixture Selection Decision Tree**
with fifteen scenarios), followed by the Level 3 assessment — Quiz Q3, 40 items, plus the decision-tree
assignment.
