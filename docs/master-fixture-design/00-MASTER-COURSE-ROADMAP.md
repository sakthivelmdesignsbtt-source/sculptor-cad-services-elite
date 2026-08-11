# MASTER INDUSTRIAL FIXTURE DESIGN ENGINEERING
## *From Scratch to Production-Ready Professional*

### COMPLETE MASTER COURSE ROADMAP / TABLE OF CONTENTS
**Document type:** Curriculum architecture & delivery plan (Roadmap only — no lessons taught yet)
**Roadmap revision:** R00 — 2026-08-11
**Prepared by:** Multidisciplinary Fixture Engineering Faculty Panel (35 role-disciplines, as specified)
**Delivery rule:** Teaching begins only on the command `START LEVEL 0`, then one level per `NEXT`.

---

## 0. IMPORTANT NOTICES BEFORE YOU READ THE ROADMAP

### 0.1 Screenshot / source-material status — ACTION REQUIRED
No image, PDF, or screenshot files were found in this workspace or in the repository
(`sculptor-cad-services-elite`) at the time this roadmap was built. The workspace contains only
the website source scaffold (`server.js`, `package.json`, `README.md`, etc.).

Therefore the "SOURCE COURSE MATERIAL" has been reconstructed **from the explicit topic list you
typed in the master prompt** (the 24 bullet items: *Fundamentals of Fixture Designing → Cover Plate
Fixture → other live industry examples*). Every one of those 24 items has been located, expanded,
and cross-referenced in Section 2 (Source-Course Traceability Matrix), so nothing from the original
course is lost.

**If you attach the actual screenshots**, I will:
1. Re-read them page by page,
2. Extract exact lesson names, ordering, part geometries, and any numeric data shown,
3. Issue **Roadmap R01** with a redline of what changed,
4. And only then start Level 0 (or continue, if we have already started).

You do not have to wait for this — the roadmap below is complete and self-sufficient as it stands.

### 0.2 Engineering data integrity policy (applies to the entire program)
Every numeric value taught in this program will carry one of these six tags:

| Tag | Meaning | Learner action |
|---|---|---|
| `[STD]` | Standard requirement (ASME/ISO/IS/DIN clause) | Follow; cite clause |
| `[MFR]` | Manufacturer catalogue specification | Verify against current catalogue |
| `[GUIDE]` | Published engineering guideline / handbook | Reasonable default; verify for your case |
| `[PRACTICE]` | Common industrial recommended practice | Shop-dependent; confirm locally |
| `[EX-ASSUMED]` | Assumption made only to make a worked example solvable | Never reuse as a rule |
| `[PROJ]` | Project-specific value defined by the customer/drawing | Comes from your inputs |

Any value that depends on material, machine, tool, component, manufacturer, standard, or production
requirement will be explicitly flagged **"must be confirmed"**. No arbitrary dimension will ever be
presented as a universal rule.

### 0.3 Standards discipline
ASME Y14.5 and ISO GPS are **taught separately and never blended**. Each drawing, feature control
frame, and example carries a header block stating the governing standard:
`STANDARD: ASME Y14.5-2018` or `STANDARD: ISO GPS (ISO 1101:2017 + ISO 5459:2011 + ISO 8015)`.
Where the two systems genuinely differ (independency vs. envelope, datum-shift rules, concentricity,
composite vs. multiple single-segment), a side-by-side **"ASME vs ISO Divergence Card"** is issued.

### 0.4 Drawing honesty policy
Diagrams in this program are **instructional schematics**: ASCII engineering schematics, dimension
tables, datum tables, feature-control-frame tables, and step-by-step drawing narratives.
No illustrative diagram will ever be described as a certified, released manufacturing drawing.
Anything intended for shop release is marked `FOR TRAINING ONLY — NOT FOR MANUFACTURE`.

---

## 1. HOW THIS PROGRAM IS BUILT

### 1.1 The teaching spine (used in every single lesson)
```
WHY → WHAT → WHERE → WHEN → HOW → CALCULATION → DESIGN → CAD
    → DRAWING → MANUFACTURING → INSPECTION → VALIDATION
```

### 1.2 The 30-part lesson template (mandatory for every lesson)
```
 1  Lesson title                 11  Rules of thumb           21  Common mistakes
 2  Learning objective           12  Formulae                 22  Troubleshooting
 3  Prerequisites                13  Worked numerical example 23  Design checklist
 4  Why the topic matters        14  Engineering assumptions  24  Beginner exercise
 5  Simple explanation           15  Diagram                  25  Intermediate exercise
 6  Engineering explanation      16  Drawing example          26  Advanced exercise
 7  Terminology                  17  CAD workflow             27  Interview questions
 8  Principle                    18  GD&T application         28  Expert questions
 9  Industrial application       19  Manufacturing method     29  Summary
10  Design rules                 20  Inspection method        30  Key takeaways
```

### 1.3 The 12-step drawing progression (used in every design lesson)
```
1 COMPONENT ONLY → 2 FUNCTIONAL FEATURES → 3 DATUMS → 4 LOCATION → 5 SUPPORT
→ 6 CLAMPING → 7 BASE → 8 COMPLETE FIXTURE → 9 TOOL ACCESS → 10 GD&T
→ 11 MANUFACTURING DRAWING → 12 INSPECTION
```
Each step answers: WHERE? WHY? HOW? WHAT DIMENSION? WHAT TOLERANCE? WHAT GD&T?
HOW MANUFACTURED? HOW INSPECTED?

### 1.4 The 13-line calculation format (mandatory, SI units)
```
GIVEN → REQUIRED → ASSUMPTION → FORMULA → VARIABLE DEFINITIONS → UNIT CONVERSION
→ SUBSTITUTION → CALCULATION → RESULT → SAFETY FACTOR → PASS/FAIL
→ ENGINEERING CONCLUSION → SENSITIVITY NOTE (what changes the answer most)
```

### 1.5 The 13-point GD&T symbol format
```
1 Symbol  2 Meaning  3 Functional purpose  4 Datum  5 Feature control frame
6 Tolerance zone  7 MMC/LMC/RFS  8 Datum precedence  9 Manufacturing effect
10 Inspection method  11 Fixture example  12 Wrong example  13 Correct example
```

### 1.6 The 20-step CAD project format
```
1 New file  2 Reference geometry  3 Base  4 Locators  5 Supports  6 Clamps
7 Standard components  8 Assembly  9 Mates  10 Interference check  11 Tool clearance
12 Exploded view  13 BOM  14 Assembly drawing  15 Detailed drawings  16 Dimensions
17 GD&T  18 Notes  19 Design review  20 Final release
```

### 1.7 The 19-question design-decision interrogation (applied to every concept)
Does it locate the part? • Correct DOF constrained? • Over-constrained? • Load path correct? •
Can machining force move it? • Can clamp force deform it? • Can welding distort it? • Can the tool
reach? • Can chips escape? • Can coolant reach? • Can the operator load it easily? • Can the operator
load it **wrongly**? • Can it be manufactured? • Can it be inspected? • Can worn parts be replaced? •
Is it safe? • Is it economical? • Is it maintainable? • Is it production-ready?

### 1.8 The Ultimate Engineering Workflow (rehearsed until automatic)
```
CUSTOMER REQUIREMENT → DRAWING → FUNCTIONAL ANALYSIS → FEATURE ANALYSIS → DATUM ANALYSIS
→ GD&T ANALYSIS → PROCESS PLANNING → OPERATION SEQUENCE → MACHINE/PROCESS SELECTION
→ FIXTURE TYPE SELECTION → 3-2-1 LOCATION → SUPPORT → CLAMPING → FORCE CALCULATION
→ RIGIDITY → TOLERANCE STACK-UP → CONCEPT DESIGN → CONCEPT COMPARISON → MATERIAL SELECTION
→ STANDARD COMPONENT SELECTION → CAD DESIGN → INTERFERENCE CHECK → TOOL/TORCH ACCESS
→ CHIP/WELD/COOLANT → GD&T → MANUFACTURING DRAWINGS → BOM → COST ESTIMATION
→ MANUFACTURING → HEAT TREATMENT → SURFACE TREATMENT → ASSEMBLY → INSPECTION
→ CNC/WELDING/PRODUCTION SETUP → FIRST-OFF → DIMENSIONAL VALIDATION → TROUBLESHOOTING
→ CORRECTION → FINAL VALIDATION → PRODUCTION RELEASE → MAINTENANCE → CONTINUOUS IMPROVEMENT
```
**Workflow rehearsal count:** the full 42-step workflow is executed end-to-end **11 times** in this
program (Levels 14, 15, 31, 34, 37, 42, 56-M09, 56-T10, 57, 58, 59) with increasing independence:
guided → semi-guided → prompted → unprompted → assessed.

---

## 2. SOURCE-COURSE TRACEABILITY MATRIX
*(Where every topic from your existing course now lives — expanded, never merely copied)*

| # | Original course topic | New home | How it was expanded |
|---|---|---|---|
| 1 | Fundamentals of Fixture Designing | L2 (all modules) | Split into definition, objectives, economics, fixture-vs-jig/vise/chuck/gauge, and 14 fixture objectives |
| 2 | Fixture Design (general) | L13–L15 + L48 | Became a full concept→CAD→drawing→trial pipeline, three times over (VMC, HMC, advanced) |
| 3 | Basic Concepts of Fixture Designing | L4, L5, L6 | Expanded to DOF theory, constraint mapping, 3-2-1 derivation, 21 locator families |
| 4 | Diamond Pin Location and Orientation | L7 (entire level, 9 lessons) | Added pin-hole math, datum-shift, thermal growth, wear, hardening, inspection, 4 worked examples |
| 5 | Process Planning | L11 (8 lessons) | Added OP10/20/30 logic, datum transfer/preservation, rough→finish strategy, inspection plan |
| 6 | Machine Selection – Milling | L12 (7 lessons) | Extended to VMC/HMC/4-axis/5-axis/rotary/tombstone/pallet with a scored selection matrix |
| 7 | Fixture Concept Design | L13 (6 lessons) | Formalised as Concept A/B/C generation + 12-criterion weighted comparison |
| 8 | Component / Job Setup | L29 (9 lessons) | Became full assembly→mounting→indicating→offset→dry-run→first-off chain |
| 9 | Live Milling Fixture Design | L14 (33-step build) + M01–M09 | Converted into a repeatable 33-step professional procedure |
| 10 | VMC Milling Fixture – Locating Bunk Design | L6.M3 + Project M02 | Added bunk height calc, contact-area calc, wear plate strategy, grinding allowance |
| 11 | VMC Milling Fixture V-Block Design | L16 (entire level) + Project M03 | Added V-angle math, centring error, axial location, hardened inserts, 3 worked examples |
| 12 | C-Washer Clamp Design | L8.M3 + Project M04 | Added washer strength calc, stud sizing, quick-release ergonomics, failure modes |
| 13 | Material Selection for Fixture Parts | L17 + L18 | Split into material selection (10 part classes) and heat/surface treatment (10 processes) |
| 14 | Assembly Drawing Preparation | L25.M1 | Added view strategy, balloon/BOM discipline, revision control, title-block standard |
| 15 | Common Mistakes in Fixture Design | L55 (100+ catalogued mistakes) | Each mistake given WRONG→WHY→FAILURE→CORRECT→PRINCIPLE treatment |
| 16 | Manufacturing Drawings for Fixtures | L25 + L26 | Split into "how to create" and "how to read", 8 drawing types |
| 17 | VMC Machining Fixture Live Examples | Projects M01–M09 | Nine graded projects instead of scattered examples |
| 18 | VMC Concept Design | L13.M2 | Concept sketching discipline + rejection reasoning |
| 19 | HMC Fixture Design | L15 (10 lessons) + M10/M11 | Added tombstone rigidity, balance, pallet interface, multi-face sequencing |
| 20 | HMC Manufacturing Drawing | L15.M9 + L25.M6 | Added pallet-interface tolerancing and tombstone datum scheme |
| 21 | Multiple Component Fixture Design | L48.M5 + Project M08 | Added cumulative-error analysis and load/unload cycle-time study |
| 22 | Angular Hole Milling Fixture | Project M06 + L23.M4 | Added angular tolerance stack-up and sine-plate/angle-block verification |
| 23 | Cover Plate Fixture | Project M05 | Added thin-part distortion control and vacuum/low-force clamping alternatives |
| 24 | Other live industry examples | L56 (42 projects) + L57/L58/L59 | Turned into a structured, progressively difficult project ladder |

**Duplication removed:** locating theory previously repeated inside each machine-specific lesson is
now taught **once** at L5/L6 and referenced thereafter; clamping theory taught once at L8/L9;
material selection taught once at L17; drawing rules taught once at L25.

---

## 3. PROGRAM ARCHITECTURE AT A GLANCE

### 3.1 Six stages, sixty levels

| Stage | Name | Levels | Lessons | Est. hours | Exit standard |
|---|---|---|---|---|---|
| **A** | FOUNDATION (Beginner) | L0 – L5 | 78 | 62 | Can read a drawing, name every machining operation, and constrain 6 DOF correctly |
| **B** | CORE FIXTURE ELEMENTS (Beginner→Intermediate) | L6 – L13 | 96 | 92 | Can select locators/clamps, calculate cutting & clamp force, and generate 3 concepts |
| **C** | MACHINING FIXTURE PRACTICE (Intermediate) | L14 – L20 | 84 | 96 | Can design a complete VMC and HMC fixture with full calculations |
| **D** | ENGINEERING RIGOUR (Intermediate→Advanced) | L21 – L29 | 122 | 130 | Can apply GD&T, run stack-ups, produce release-grade drawings, and commission a fixture |
| **E** | SPECIALISATIONS (Advanced) | L30 – L48 | 197 | 201 | Can design tube, welding, checking, rework, hydraulic, pneumatic and automated fixtures |
| **F** | PROFESSIONAL PRACTICE & MASTERY (Professional→Master) | L49 – L59 | 66 + 45 projects | 207 | Can run a fixture project end-to-end, alone, to production release |
| | **TOTAL** | **60 levels** | **643 lessons + 45 projects** | **≈788 h** | Independent Industrial Fixture Design Engineer |

*(Hours are study-hours including exercises; a full-time learner typically completes this in
20–24 weeks, a working engineer in 10–14 months at 8–10 h/week. `[GUIDE]`
Stage F's hours are project-dominated: L56–L59 alone account for 140 h of design work.)*

### 3.2 Competency ladder

```
BEGINNER      L0–L5    "I know what a fixture is and why parts must be constrained."
INTERMEDIATE  L6–L20   "I can design and calculate a working machining fixture."
ADVANCED      L21–L48  "I can tolerance it, document it, specialise it, and automate it."
PROFESSIONAL  L49–L56  "I can run the project, cost it, review it, and fix it in production."
MASTER        L57–L59  "I can take an unfamiliar part to production release, unaided."
```

### 3.3 Deliverable count across the program
| Deliverable type | Quantity |
|---|---|
| Lessons | 643 |
| Worked numerical examples | 340+ |
| Calculation exercises | 420 |
| Drawing exercises | 180 |
| CAD exercises | 165 |
| GD&T exercises | 145 |
| Manufacturing exercises | 95 |
| Inspection / metrology exercises | 110 |
| ASCII engineering schematics | 500+ |
| Industrial case studies | 60 |
| Design-review checklists | 24 |
| Documentation templates | 18 |
| Troubleshooting entries | 200+ |
| Catalogued design mistakes | 100+ |
| Projects (M/T/W/C/R) | 42 |
| Integrated / family / capstone projects | 3 |
| Module quizzes | 60 |
| Interview questions with reasoning | 700 |

---

# STAGE A — FOUNDATION
### Levels 0–5 · 78 lessons · ≈62 h · Assumes the learner knows almost nothing

---

## LEVEL 0 — ENGINEERING FOUNDATION
**Levels goal:** Build the vocabulary and physical intuition every later level silently assumes.
**Prerequisite:** None. **Lessons:** 22 · **Est. 18 h**

### Module 0.1 — Manufacturing Fundamentals (4 lessons)
- **L0.1.1** What manufacturing actually is: material removal, forming, joining, additive — and where fixtures appear in each
- **L0.1.2** The factory chain: design → process → tooling → production → inspection → despatch (where the fixture engineer sits)
- **L0.1.3** Batch vs. mass vs. job-shop production, and how volume dictates fixture sophistication
- **L0.1.4** Cost of a part: material + cycle time + tooling amortisation + scrap — why fixtures are an economic decision
  - *Exercise (Beginner):* Amortise a ₹1,80,000 fixture over 500 / 5,000 / 50,000 parts. `[EX-ASSUMED]`

### Module 0.2 — Engineering Drawing Fundamentals (5 lessons)
- **L0.2.1** Orthographic projection: first-angle vs third-angle, and how to tell which you are holding
- **L0.2.2** Views: front/top/side, auxiliary, section (full, half, offset, revolved, broken-out), detail views
- **L0.2.3** Lines and their meanings: visible, hidden, centre, phantom, section, break, cutting-plane
- **L0.2.4** Reading a title block, revision table, general-tolerance note, scale, projection symbol
- **L0.2.5** Dimensioning basics: chain, baseline, coordinate, ordinate — and why chain dimensioning stacks error
  - *Drawing exercise:* Convert a chain-dimensioned bracket to baseline dimensioning; compute the error difference

### Module 0.3 — Mechanical Engineering Fundamentals (4 lessons)
- **L0.3.1** Force, moment, couple, equilibrium — the free-body diagram as the fixture engineer's core tool
- **L0.3.2** Stress, strain, Young's modulus, yield, ultimate strength, factor of safety
- **L0.3.3** Friction: static vs kinetic, coefficient of friction, why friction is a *clamping* resource and a *locating* enemy
- **L0.3.4** Deflection intuition: stiffness `k = F/δ`, cantilever vs simply supported, why span cubed matters
  - *Calculation exercise:* Deflection of a 250 mm × 40 mm × 25 mm steel rest bar under 3 kN, two support conditions

### Module 0.4 — Machining Fundamentals (4 lessons)
- **L0.4.1** Cutting mechanics: rake, clearance, chip formation, cutting speed / feed / depth of cut
- **L0.4.2** Turning, milling, drilling, boring, reaming, tapping, grinding — what each does and the force direction each produces
- **L0.4.3** Welding and fabrication basics: heat input, HAZ, fusion, weld symbols preview
- **L0.4.4** Tube manufacturing and sheet-metal basics: ERW/seamless tube, springback, bend allowance preview
  - *Exercise:* For six named operations, draw the dominant force vector and state which DOF it attacks

### Module 0.5 — The Fixture Vocabulary (5 lessons)
- **L0.5.1** Dimension, tolerance, allowance, fit, clearance, interference (with number lines)
- **L0.5.2** Hole-basis vs shaft-basis fits; introduction to ISO 286 `[STD]` — H7/g6, H7/p6 and where each belongs in a fixture
- **L0.5.3** Datum, datum feature, surface, feature, feature-of-size, hole, slot, axis, centreline
- **L0.5.4** Reference, coordinate system, origin, right-hand rule, X/Y/Z convention
- **L0.5.5** Basic metrology: resolution vs accuracy vs precision vs repeatability; the 10:1 gauge rule `[GUIDE]`
  - *Inspection exercise:* Read 12 vernier and micrometre positions; identify parallax and zero-error cases

**Level 0 assessment:** Quiz Q0 (40 items) + Drawing-reading test DR-0 + Calculation test CT-0
**Level 0 exit criterion:** Can read a simple machined-part drawing aloud and explain every symbol on it.

---

## LEVEL 1 — CNC MACHINING FUNDAMENTALS
**Prerequisite:** L0 · **Lessons:** 14 · **Est. 12 h**

### Module 1.1 — CNC Machine Architecture (4 lessons)
- **L1.1.1** What a CNC machine is: axes, drives, ballscrews, guideways, spindle, ATC, controller
- **L1.1.2** 3-axis VMC: structure, table, travels, spindle orientation, gravity direction, chip behaviour
- **L1.1.3** 4-axis and 5-axis: rotary table (A/B/C), trunnion, head-head vs table-table — fixture implications of each
- **L1.1.4** HMC: horizontal spindle, pallet, pallet changer, tombstone, indexing, chip fall-away advantage

### Module 1.2 — Coordinate Systems and Offsets (4 lessons)
- **L1.2.1** Machine coordinate system (MCS), home/reference position
- **L1.2.2** Work coordinate system (WCS) and G54–G59; multiple offsets for multi-component and tombstone work
- **L1.2.3** Tool coordinate system, tool length offset, cutter radius compensation
- **L1.2.4** How the *fixture* physically realises the WCS: datum face, datum pin, indicating boss, tool-setting block
  - *Exercise:* A tombstone with 4 faces × 3 parts — allocate G54–G59 + extended offsets and write the offset table

### Module 1.3 — Machining Operations in Detail (6 lessons)
- **L1.3.1** Face milling and end milling: force direction, up-cut vs down-cut, and the resulting fixture load case
- **L1.3.2** Slot milling, pocket milling, contouring: side loads, entry shock, tool deflection
- **L1.3.3** Drilling: thrust force and torque, breakthrough spike, why drilling lifts and rotates parts
- **L1.3.4** Reaming and boring: low force, high accuracy — why fixture *stability* matters more than fixture *strength* here
- **L1.3.5** Tapping: reversal torque, rigid vs floating tapping, chip packing
- **L1.3.6** Chamfering, counterboring, countersinking: short cuts, tool access constraints
  - *Exercise (Advanced):* For a 12-operation part, tabulate operation → force magnitude class → direction → DOF threatened

**Level 1 assessment:** Quiz Q1 (35 items) + Offset-table assignment
**Level 1 exit criterion:** Can state, for any machining operation, the force direction the fixture must resist.

---

## LEVEL 2 — WHAT IS A FIXTURE?
**Prerequisite:** L1 · **Lessons:** 11 · **Est. 8 h**

### Module 2.1 — Definition and Boundaries (5 lessons)
- **L2.1.1** Fixture: formal definition, purpose, and the three duties — **locate, support, clamp**
- **L2.1.2** Fixture vs **jig** (jig guides the tool; fixture does not) — with bush-plate illustration
- **L2.1.3** Fixture vs **vise** vs **chuck**: repeatability, dedication, cost, cycle time
- **L2.1.4** Fixture vs **gauge** vs **checking fixture**: one makes parts, one judges parts — different tolerance philosophy entirely
- **L2.1.5** Fixture vs **tooling** vs **workholding** vs **SPM**: industry terminology map

### Module 2.2 — The Fourteen Fixture Objectives (6 lessons)
- **L2.2.1** Location, support, clamping — the primary triad
- **L2.2.2** Rigidity, repeatability, accuracy — the metrological triad
- **L2.2.3** Accessibility, tool access, chip evacuation, coolant access — the process triad
- **L2.2.4** Safety and ergonomics — the human triad
- **L2.2.5** Productivity and cost reduction — the business triad
- **L2.2.6** Objective conflict resolution: what to sacrifice when two objectives fight (a decision table)
  - *Case study CS-01:* A fixture that was accurate, rigid, and commercially useless — why it was scrapped

**Level 2 assessment:** Quiz Q2 (30 items) + Comparison essay (fixture vs jig vs vise for a given part)

---

## LEVEL 3 — FIXTURE CLASSIFICATION
**Prerequisite:** L2 · **Lessons:** 10 · **Est. 8 h**

### Module 3.1 — Classification by Process (4 lessons)
- **L3.1.1** Machining fixtures: milling, VMC, HMC, drilling, boring, reaming, tapping, turning, grinding
- **L3.1.2** Joining fixtures: welding (MIG/TIG/spot/projection/arc), brazing, riveting, adhesive
- **L3.1.3** Tube fixtures: cutting, bending, checking, welding, assembly, end-forming
- **L3.1.4** Verification fixtures: inspection, checking, gauging; and correction fixtures: recutting, rework

### Module 3.2 — Classification by Actuation and Flexibility (3 lessons)
- **L3.2.1** Manual, pneumatic, hydraulic, electro-mechanical, vacuum, magnetic
- **L3.2.2** Dedicated vs modular vs flexible vs reconfigurable; zero-point and quick-change systems
- **L3.2.3** Single-component, multi-component, tombstone, rotary, 4th-axis, 5-axis, palletised

### Module 3.3 — Classification by Automation Level (3 lessons)
- **L3.3.1** Operator-loaded, semi-automatic, automatic, robot-loaded
- **L3.3.2** Poka-Yoke fixtures and sensor-verified fixtures
- **L3.3.3** **The Fixture Selection Decision Tree** — a single-page flowchart from part+process+volume to fixture family
  - *Exercise:* Route 15 different real scenarios through the decision tree and justify each landing point

**Level 3 assessment:** Quiz Q3 (40 items, classification matching) + Decision-tree assignment

---

## LEVEL 4 — DEGREES OF FREEDOM
**Prerequisite:** L3 · **Lessons:** 9 · **Est. 8 h**

### Module 4.1 — The Six Degrees of Freedom (4 lessons)
- **L4.1.1** Translation along X, Y, Z — visualised on a rectangular block (ASCII schematic set)
- **L4.1.2** Rotation about X, Y, Z — and why rotation is the DOF beginners forget
- **L4.1.3** Notation systems: ±X/±Y/±Z (12-movement model) vs 6-DOF model — both taught, one used consistently
- **L4.1.4** DOF of common shapes: block, cylinder, tube, sheet, casting, weldment

### Module 4.2 — Constraint Theory (5 lessons)
- **L4.2.1** Under-constrained: symptoms in production (variation, movement, chatter)
- **L4.2.2** Fully constrained: the ideal, and how to prove it on paper before CAD
- **L4.2.3** Over-constrained / redundant location: why "more locators = better" is a beginner's error
- **L4.2.4** False location, rocking, and the three-legged-stool principle
- **L4.2.5** Datum shift introduced physically (formal GD&T treatment deferred to L21/L22)
  - *Exercise (Beginner):* Mark the DOF removed by each locator on 6 given layouts
  - *Exercise (Advanced):* Find the over-constraint in 5 flawed fixture layouts and propose the minimal fix
  - *Case study CS-02:* An over-constrained casting fixture that produced 22% dimensional variation

**Level 4 assessment:** Quiz Q4 (30 items) + DOF-mapping test (10 layouts)
**Level 4 exit criterion:** Can produce a correct DOF constraint table for any part handed to them.

---

## LEVEL 5 — THE 3-2-1 LOCATING PRINCIPLE
**Prerequisite:** L4 · **Lessons:** 12 · **Est. 8 h**

### Module 5.1 — Deriving 3-2-1 from First Principles (4 lessons)
- **L5.1.1** Why three points define a plane (and why a fourth point is a liability)
- **L5.1.2** Why two points define a line, and one point completes the constraint — the 3+2+1 = 6 proof
- **L5.1.3** Primary, secondary, tertiary datum: hierarchy, precedence, and the physical meaning of each
- **L5.1.4** The 12-step build sequence: PART WITHOUT LOCATORS → PRIMARY → SECONDARY → TERTIARY → FULLY CONSTRAINED

### Module 5.2 — Variants of the Locating Principle (4 lessons)
- **L5.2.1** 4-2-1 for large/flexible parts (with the over-constraint caveat and adjustable-support solution)
- **L5.2.2** Plane–pin–pin (one round + one diamond) — the workhorse of machined-part fixtures
- **L5.2.3** Cylindrical location: V-blocks, chucks, mandrels, cones — where 3-2-1 is replaced
- **L5.2.4** N-2-1 for sheet-metal and compliant parts; net-form location for weldments

### Module 5.3 — Datum Strategy (4 lessons)
- **L5.3.1** Functional datum vs machining datum vs inspection datum — reconciling three different demands
- **L5.3.2** Datum simulation: how a physical locator *simulates* a theoretical datum
- **L5.3.3** Datum transfer between operations (OP10 → OP20 → OP30) and cumulative error
- **L5.3.4** Datum preservation: protecting the datum surface from damage, chips, burrs, and clamp marks
  - *Exercise (Intermediate):* Design the 3-2-1 scheme for a given housing; justify each point's position
  - *Exercise (Advanced):* Same part, but the functional datum is unmachined as-cast — resolve the conflict
  - *Case study CS-03:* Datum mismatch between design, manufacturing and inspection that caused a 100% recall of a batch

**Level 5 assessment:** Quiz Q5 (35 items) + Locating-scheme design assignment (graded on justification, not layout)
**STAGE A GATE EXAM:** GA — 90 items + 1 design task. Must score ≥70% to enter Stage B.

---

# STAGE B — CORE FIXTURE ELEMENTS
### Levels 6–13 · 96 lessons · ≈92 h

---

## LEVEL 6 — LOCATING ELEMENTS
**Prerequisite:** L5 · **Lessons:** 16 · **Est. 14 h**
*Every locator lesson answers the mandatory 10: Purpose · DOF controlled · Location accuracy ·
Contact area · Wear · Material · Hardness · Manufacturing · Inspection · Drawing requirements.*

### Module 6.1 — Surface Locators (4 lessons)
- **L6.1.1** Rest pads and support pads: flat, spherical, serrated — contact-area vs stability trade-off
- **L6.1.2** Rest-pad height calculation, grinding allowance, and shimming policy
- **L6.1.3** Wear plates and replaceable pads: when to make the wear surface a separate part
- **L6.1.4** Rest-button standards, spacing rules of thumb, and the "pad-under-clamp" rule `[PRACTICE]`

### Module 6.2 — Adjustable and Compliant Supports (3 lessons)
- **L6.2.1** Jack screws, adjustable supports, spring-loaded supports — *support*, never *locate*
- **L6.2.2** Work supports (hydraulic/pneumatic, advance-and-lock) — placement to kill part deflection
- **L6.2.3** The cardinal rule: an adjustable element that removes a DOF has become an over-constraint

### Module 6.3 — Locating Bunks and Nests (3 lessons) *(source-course topic #10)*
- **L6.3.1** What a locating bunk is; when a bunk beats discrete pads
- **L6.3.2** Bunk design: height, width, land, relief, chip grooves, coolant escape
- **L6.3.3** Nest locators, side locators, end locators, and profile nests for cast/forged parts
  - *Worked example:* Bunk height, land width and relief for a 180 × 90 × 40 part `[EX-ASSUMED]`

### Module 6.4 — Pin Locators (4 lessons)
- **L6.4.1** Round pins, dowel pins, shoulder locating pins: fits (H7/g6, H7/p6, H7/m6) `[STD ISO 286]`
- **L6.4.2** Pin length, engagement ratio, lead chamfer, relief diameter
- **L6.4.3** Conical and cylindrical locators; retractable, spring, and floating locators
- **L6.4.4** Locator buttons, hardened locators, and bushing-mounted (replaceable) pins

### Module 6.5 — Form Locators (2 lessons)
- **L6.5.1** V-locators preview (full treatment at L16); prismatic and cone location
- **L6.5.2** Selecting between pin, V, cone and nest for round, tubular and irregular parts
  - *Exercise (Advanced):* Build a **Locator Selection Matrix** for 20 part-feature combinations
  - *CAD exercise CX-06:* Model a parametric rest-pad and locating-pin library with configurations

**Level 6 assessment:** Quiz Q6 (45 items) + Locator specification sheet for a given part

---

## LEVEL 7 — DIAMOND PIN DESIGN *(source-course topic #4, greatly expanded)*
**Prerequisite:** L6 · **Lessons:** 9 · **Est. 10 h**

- **L7.1** Why two round pins in two holes is an over-constraint — the interference proof with numbers
- **L7.2** The round-pin + diamond-pin solution: what each pin controls (translation vs rotation)
- **L7.3** Diamond-pin geometry: flat width, relief, crown width, and orientation rule (**flat perpendicular to the line of centres**)
- **L7.4** Pin–hole relationship mathematics: clearance, hole tolerance, pin tolerance, centre-distance tolerance
- **L7.5** **Worked example set (4 examples):** rotational error from clearance; maximum part rotation; positional error at a far feature; selecting pin diameter for a required orientation accuracy
- **L7.6** Thermal expansion between fixture and part; differential growth in welding/hot parts
- **L7.7** Pin length, engagement, chamfer, load capacity — shear and bending checks
- **L7.8** Wear, hardening (case vs through), lubrication, and replaceability strategy
- **L7.9** Diamond-pin drawing: dimensions, GD&T, surface finish, hardness note, inspection method
  - *Drawing exercise:* Produce a full diamond-pin detail drawing with FCF, finish and hardness callouts
  - *Common mistakes:* wrong flat orientation (the #1 industrial diamond-pin error), excessive clearance, insufficient engagement, unhardened pin in high-volume use
  - *Case study CS-04:* A gearbox-housing fixture where the diamond pin was rotated 90° — and the 0.31 mm hole-position error that resulted

**Level 7 assessment:** Calculation test CT-7 (8 problems) + diamond-pin detail drawing

---

## LEVEL 8 — CLAMPING
**Prerequisite:** L7 · **Lessons:** 15 · **Est. 12 h**

### Module 8.1 — Clamping Principles (5 lessons)
- **L8.1.1** Clamp vs locator: a clamp holds, it must **never** locate (the single most violated rule)
- **L8.1.2** Clamp direction: always toward the locator, always into the strongest part section
- **L8.1.3** Clamp position: over a support, never over an unsupported span — with deflection proof
- **L8.1.4** Clamp force vs clamp reaction; the closed force loop through the fixture body
- **L8.1.5** Clamp accessibility, sequence, and operator ergonomics; number-of-clamps discipline

### Module 8.2 — Clamp Types (7 lessons)
- **L8.2.1** Strap clamp and step clamp: geometry, fulcrum ratio, force multiplication (with the lever equation)
- **L8.2.2** **C-washer clamp** *(source-course topic #12)*: construction, quick release, stud sizing, washer strength check
- **L8.2.3** Screw clamp, hook clamp, and swing clamp
- **L8.2.4** Toggle clamp: horizontal, vertical, push-pull, latch — holding capacity vs applied force `[MFR]`
- **L8.2.5** Cam and wedge clamps: self-locking condition, friction angle, mechanical advantage
- **L8.2.6** Edge clamps, pull-down clamps, low-profile clamps — the "clamp that pulls the part down" concept
- **L8.2.7** Floating clamps, equalising clamps, and multi-point clamping for uneven parts

### Module 8.3 — Clamping Damage Control (3 lessons)
- **L8.3.1** Part deformation from clamping: thin walls, tubes, castings, cover plates
- **L8.3.2** Clamp marks: soft pads, copper/brass/nylon inserts, contact-area sizing
- **L8.3.3** Clamp stability: self-locking, vibration loosening, spring return, safety on power loss
  - *Exercise (Intermediate):* Choose and position clamps on 6 parts; justify direction and position for each
  - *Case study CS-05:* A thin cover plate that measured flat in the fixture and warped 0.4 mm on release

**Level 8 assessment:** Quiz Q8 (40 items) + Clamp selection & positioning assignment

---

## LEVEL 9 — CLAMP FORCE & CUTTING FORCE CALCULATION
**Prerequisite:** L8 + L0.3 · **Lessons:** 14 · **Est. 16 h**
*Every calculation uses the mandatory 13-line format. SI units throughout.*

### Module 9.1 — Cutting Force Theory (4 lessons)
- **L9.1.1** Specific cutting force `k_c` and the chip-thickness correction; where `k_c1.1` values come from `[GUIDE]`
- **L9.1.2** Tangential, radial and axial force components; resolving them into fixture load cases
- **L9.1.3** Cutting force from power: `F_t = 60000·P_c·η / (π·D·n)` — the shop-floor cross-check
- **L9.1.4** Dynamic vs static force; impact factor for interrupted cuts `[PRACTICE]`

### Module 9.2 — Force by Operation — Worked Examples (6 lessons)
- **L9.2.1** **Face milling** — full worked example: `F_c = k_c · a_p · f_z · z_c`, MRR, power check
- **L9.2.2** **End milling / slot milling** — side-load case, worst-case tooth engagement
- **L9.2.3** **Drilling** — thrust `F_f` and torque `M`; empirical relations; breakthrough spike factor
- **L9.2.4** **Reaming and boring** — low force, high sensitivity; why clamp force must *not* be raised here
- **L9.2.5** **Tapping** — torque and reversal; the rotational-DOF problem
- **L9.2.6** Combined and simultaneous operations; the governing (worst) load case

### Module 9.3 — Required Clamp Force (4 lessons)
- **L9.3.1** Friction-based holding: `F_clamp ≥ (F_cut · S) / (μ · n)`; typical μ values and their uncertainty `[GUIDE]`
- **L9.3.2** Safety factors: 1.5 (steady) / 2.0 (interrupted) / 2.5–3.0 (heavy roughing) — and *why* each `[PRACTICE]`
- **L9.3.3** Moment and tipping check: does the part rotate before it slides?
- **L9.3.4** Delivering the force: screw torque `T = K·F·d`, toggle-clamp capacity, hydraulic `F = p·A`, pneumatic `F = p·A·η`, spring force
  - *Calculation test CT-9:* 12 problems spanning all six operations, each requiring a PASS/FAIL verdict and an engineering decision
  - *Rule taught:* the highest clamp force is not the best clamp force — over-clamping is a defect generator

**Level 9 assessment:** Calculation test CT-9 (12 problems, 70% to pass)

---

## LEVEL 10 — FIXTURE RIGIDITY
**Prerequisite:** L9 · **Lessons:** 12 · **Est. 12 h**

### Module 10.1 — Stiffness Fundamentals (4 lessons)
- **L10.1.1** Stiffness, deflection, and the fixture's error budget contribution
- **L10.1.2** Bending moment, section modulus, second moment of area — for plates, ribs and blocks
- **L10.1.3** Load path: from cutting edge → part → locator → fixture body → base → table. Find the weakest link
- **L10.1.4** Cantilever vs supported: why an overhanging locator is a rigidity crime

### Module 10.2 — Designing for Rigidity (4 lessons)
- **L10.2.1** Base plate thickness selection and the deflection check `[GUIDE]`
- **L10.2.2** Rib design: height, thickness, spacing, triangulation; ribs vs solid mass
- **L10.2.3** Support spacing and the span³ effect; adding a support vs thickening the base
- **L10.2.4** Bolt count, bolt preload, and joint stiffness — a bolted joint is a spring

### Module 10.3 — Dynamic Behaviour (4 lessons)
- **L10.3.1** Natural frequency, resonance, and why a "strong" fixture can still chatter
- **L10.3.2** Chatter: regenerative vs forced; fixture-side cures vs machining-parameter cures
- **L10.3.3** Damping: mass, joints, cast iron vs steel, polymer concrete, damping pads
- **L10.3.4** Locator deflection, clamp deformation and part deformation as combined error sources
  - *Worked example:* Base-plate deflection under a 4 kN milling load — 25 mm vs 32 mm vs ribbed 20 mm
  - *Case study CS-06:* A tall tombstone fixture that passed static analysis and failed at 4200 rpm

**Level 10 assessment:** Calculation test CT-10 (7 problems) + rigidity redesign assignment

---

## LEVEL 11 — PROCESS PLANNING *(source-course topic #5)*
**Prerequisite:** L10 · **Lessons:** 12 · **Est. 12 h**

### Module 11.1 — From Drawing to Plan (5 lessons)
- **L11.1.1** Part study: function, assembly context, mating parts, critical-to-function features
- **L11.1.2** Feature analysis: catalogue every feature with size, tolerance, finish, orientation, access
- **L11.1.3** Datum analysis: identify design datums, choose manufacturing datums, document the mapping
- **L11.1.4** Machining sequence logic: datum first, rough before finish, distortion-prone last
- **L11.1.5** Building the operation plan: OP10 / OP20 / OP30 with setups, machines, tools, times

### Module 11.2 — Setup Strategy (4 lessons)
- **L11.2.1** First setup: what to machine when nothing is machined yet (raw/cast/forged datum problem)
- **L11.2.2** Second and third setups: datum transfer, and the tolerance penalty of every new setup
- **L11.2.3** Datum preservation across setups; protecting finished surfaces from clamps and chips
- **L11.2.4** Minimising setups: the single biggest accuracy and cost lever

### Module 11.3 — Sequencing Detail (3 lessons)
- **L11.3.1** Roughing → semi-finishing → finishing; stress relief between stages for critical parts
- **L11.3.2** Hole sequence: drill-all-then-ream vs complete-each-hole; positional consequences
- **L11.3.3** Critical-feature sequencing and the inspection plan that shadows the process plan
  - *Deliverable:* **Process Plan template (T-03)** filled for a real part
  - *Exercise (Advanced):* Two competing process plans for one part — compare setups, accuracy, cost, fixture count

**Level 11 assessment:** Process-plan assignment (graded against a 20-point rubric)

---

## LEVEL 12 — MACHINE SELECTION *(source-course topic #6)*
**Prerequisite:** L11 · **Lessons:** 9 · **Est. 7 h**

- **L12.1** Selection inputs: component size, mass, material, feature orientation, accuracy, volume
- **L12.2** Machine capability: work envelope, spindle power, torque curve, max rpm, table load, accuracy/repeatability spec `[MFR]`
- **L12.3** **VMC** selection: when vertical wins (flat parts, single-face work, low volume, easy setup)
- **L12.4** **HMC** selection: when horizontal wins (multi-face, chip fall, pallet change, high volume)
- **L12.5** **4-axis** selection: rotary/indexer, when indexing beats a second setup
- **L12.6** **5-axis** selection: compound angles, single-setup accuracy, fixture-clearance penalty
- **L12.7** Tombstone and pallet systems: parts-per-cycle economics
- **L12.8** Fixture size vs machine envelope: the clearance checklist (tool, holder, spindle nose, way covers, door)
- **L12.9** **Machine Selection Scoring Matrix** — a weighted, defensible tool
  - *Exercise:* Select machines for 6 different parts using the matrix; defend each choice in 5 lines

**Level 12 assessment:** Quiz Q12 (30 items) + machine-selection matrix assignment

---

## LEVEL 13 — FIXTURE CONCEPT DESIGN *(source-course topics #7, #18)*
**Prerequisite:** L12 · **Lessons:** 9 · **Est. 9 h**

- **L13.1** What a concept is (and is not): a concept is a *strategy*, not a CAD model
- **L13.2** Concept sketching discipline: freehand, dimensionless, DOF-annotated
- **L13.3** Generating **Concept A / B / C** deliberately different (different datum, different clamping, different actuation)
- **L13.4** The **12-criterion comparison matrix**: accuracy, rigidity, cost, manufacturability, setup time, operator access, tool access, chip evacuation, coolant, maintenance, safety, production rate
- **L13.5** Weighting the criteria for the actual production context (prototype vs 50k/year)
- **L13.6** Scoring honestly: how to avoid confirmation bias toward your favourite concept
- **L13.7** Writing the **selection justification** — the document that survives a design review
- **L13.8** Killing a concept early: the cheapest engineering decision you will ever make
- **L13.9** Concept freeze, design inputs lock, and change control from this point on
  - *Exercise (Advanced):* Three concepts + scored matrix + one-page justification for a given housing
  - *Deliverable:* **Fixture Concept Sheet template (T-04)**

**STAGE B GATE EXAM:** GB — 100 items + concept-design task + calculation set. ≥70% to enter Stage C.

---

# STAGE C — MACHINING FIXTURE PRACTICE
### Levels 14–20 · 84 lessons · ≈96 h

---

## LEVEL 14 — VMC FIXTURE DESIGN (THE 33-STEP MASTER PROCEDURE)
*(source-course topics #2, #9, #17)*
**Prerequisite:** L13 · **Lessons:** 20 · **Est. 24 h**
*This level executes the full workflow once, slowly, on one real component, with every step taught.*

### Module 14.1 — Study and Plan (Steps 1–7) — 4 lessons
- **L14.1.1** Steps 1–3: Study component → study drawing → identify features
- **L14.1.2** Steps 4–5: Identify functional datums → identify machining datums; reconcile conflicts
- **L14.1.3** Step 6: Process planning for this part (OP10/OP20)
- **L14.1.4** Step 7: Machine selection with the L12 matrix; envelope and power verification

### Module 14.2 — Strategy (Steps 8–14) — 5 lessons
- **L14.2.1** Step 8: Locating strategy — 3-2-1 layout with DOF table
- **L14.2.2** Step 9: Support strategy — fixed vs adjustable, anti-deflection placement
- **L14.2.3** Step 10: Clamping strategy — type, direction, position, sequence
- **L14.2.4** Steps 11–13: Cutting force → clamp force → safety factor (full 13-line calculations)
- **L14.2.5** Step 14: Fixture rigidity check — base thickness, ribs, deflection verdict

### Module 14.3 — Detail Design (Steps 15–22) — 5 lessons
- **L14.3.1** Steps 15–16: Material selection per part class; standard component selection
- **L14.3.2** Steps 17–18: Tool clearance and spindle/holder clearance envelope study
- **L14.3.3** Steps 19–20: Chip evacuation and coolant access design (slopes, gaps, flush paths)
- **L14.3.4** Step 21: Operator access, loading height, part weight, handling
- **L14.3.5** Step 22: Poka-Yoke features — make wrong loading physically impossible

### Module 14.4 — Documentation and Release (Steps 23–33) — 6 lessons
- **L14.4.1** Steps 23–24: CAD modelling and assembly (20-step CAD format)
- **L14.4.2** Step 25: GD&T on the fixture (applying L21/L22 preview rules)
- **L14.4.3** Steps 26–27: Manufacturing drawings and BOM
- **L14.4.4** Steps 28–30: Manufacturing, assembly, inspection of the fixture itself
- **L14.4.5** Steps 31–32: CNC setup and first-off trial
- **L14.4.6** Step 33: Validation, sign-off, and production release
  - **Full worked project:** one component carried through all 33 steps, with every document produced
  - *Deliverable:* complete fixture design dossier (concept sheet, calc sheet, BOM, drawing list, trial report)

**Level 14 assessment:** Full 33-step dossier for a *second*, different component (major assignment)

---

## LEVEL 15 — HMC FIXTURE DESIGN *(source-course topics #19, #20)*
**Prerequisite:** L14 · **Lessons:** 12 · **Est. 14 h**

- **L15.1** HMC principles: horizontal spindle, gravity direction, and the chip-evacuation advantage
- **L15.2** Pallet interface: pallet size, T-slots/grid holes, location keys, clamping to pallet, repeatability spec `[MFR]`
- **L15.3** Tombstone fundamentals: shapes (square, rectangular, angled, cylindrical), sizes, materials
- **L15.4** Tombstone rigidity: height/base ratio, deflection at the top face, rib and web design
- **L15.5** Fixture balance and mass distribution — critical for rotary/indexing pallets
- **L15.6** Multi-face machining: 2-side, 3-side, 4-side, 5-side strategies and indexing sequence
- **L15.7** Multi-component loading on a tombstone: identical vs mixed parts, offset management
- **L15.8** Fixture orientation with gravity: parts must not fall out when the clamp is released
- **L15.9** Tool access, tool length, and interference between faces during rotation (rotation-sweep check)
- **L15.10** Coolant and chip management on a vertical face; chip pockets and wash-down
- **L15.11** Multi-fixture layout on a single tombstone; cycle-time and load/unload optimisation
- **L15.12** **HMC manufacturing drawing**: pallet-interface tolerancing, tombstone datum scheme, key-slot GD&T
  - *Worked example:* Tombstone-top deflection under a 5 kN load; and rotational imbalance check
  - *Case study CS-07:* An unbalanced tombstone that damaged a pallet-changer indexing gear

**Level 15 assessment:** HMC/tombstone concept + calculation + drawing set

---

## LEVEL 16 — V-BLOCK FIXTURE DESIGN *(source-course topic #11)*
**Prerequisite:** L15 · **Lessons:** 9 · **Est. 8 h**

- **L16.1** V-block geometry and nomenclature: included angle, flanks, throat, relief groove
- **L16.2** Why 90° and 120° are standard; when to use 60°, 100°, or an asymmetric V `[PRACTICE]`
- **L16.3** **The centring equations:** vertical centre height `h = (D/2)/sin(θ/2)`; centre rise per unit diameter change
- **L16.4** **Centring error from diameter variation** — the key V-block calculation (worked, 3 diameters)
- **L16.5** Contact stress at the two line-contacts; load capacity and Hertzian-contact awareness
- **L16.6** Axial location of a round part: end stops, shoulders, and length control
- **L16.7** Anti-rotation methods: keyed flats, pins-in-holes, friction, secondary V
- **L16.8** Clamping into a V: top clamp, strap, chain, or opposing V — force resolution into the flanks
- **L16.9** Wear management: hardened inserts, replaceable V-blocks, and the drawing/inspection package
  - *Worked example set:* Ø50 ±0.2 tube in a 90° V — centre-height variation and its effect on a drilled hole position
  - *Exercise (Advanced):* Design a replaceable-insert V-block for a Ø38–Ø42 family with one fixture

**Level 16 assessment:** Calculation test CT-16 (6 problems) + V-block detail drawing

---

## LEVEL 17 — MATERIAL SELECTION *(source-course topic #13)*
**Prerequisite:** L16 · **Lessons:** 11 · **Est. 9 h**

### Module 17.1 — Materials Catalogue (5 lessons)
- **L17.1.1** Mild steel (IS 2062 / S235): base plates, brackets, weldments — cheap, weldable, soft
- **L17.1.2** Medium-carbon steel C45 / EN8: bodies, blocks, moderate-duty locators
- **L17.1.3** Alloy steel EN19 / 42CrMo4, EN24: high-strength pins, shafts, heavily loaded parts
- **L17.1.4** Tool steels: OHNS/O1 (locators, gauges), D2 (high wear), H13 (hot work), HCHCr
- **L17.1.5** Cast iron, aluminium, stainless steel, bronze/brass, engineering plastics — where each earns its place

### Module 17.2 — Selection by Part Class (4 lessons)
- **L17.2.1** Base plate and fixture body: stability, machinability, weight, stress relief
- **L17.2.2** Locators, pins, diamond pins, rest pads, wear plates: hardness targets and why `[GUIDE]`
- **L17.2.3** Supports, clamps, straps, studs: strength-driven selection
- **L17.2.4** Bushes, guides, and sliding components: galling, lubrication, material pairing

### Module 17.3 — Selection Criteria (2 lessons)
- **L17.3.1** Weighing strength · hardness · wear · machinability · dimensional stability · cost · corrosion
- **L17.3.2** Dimensional stability: residual stress, stress-relief annealing, natural vs artificial ageing
  - *Deliverable:* **Material Selection Table (T-09)** — part class → material → condition → hardness → treatment
  - *Warning taught:* material grades and their properties are standard- and supplier-dependent `[STD]/[MFR]` — always confirm

**Level 17 assessment:** Material specification assignment for a 14-part fixture BOM

---

## LEVEL 18 — HEAT & SURFACE TREATMENT
**Prerequisite:** L17 · **Lessons:** 8 · **Est. 6 h**

- **L18.1** Through hardening: quench and temper; distortion risk; when to hard-grind after
- **L18.2** Case hardening and carburizing: case depth selection, core toughness, part suitability
- **L18.3** Nitriding: low distortion, high surface hardness — the premium locator treatment
- **L18.4** Induction hardening: selective hardening of wear zones only
- **L18.5** Stress relieving and normalising: **the step beginners skip and regret** (base plates, weldments)
- **L18.6** Surface treatments: black oxide, phosphating, zinc plating, nickel plating, hard chrome
- **L18.7** Coatings and their fixture use: TiN, DLC, PTFE-based, anti-galling
- **L18.8** Specifying treatment on a drawing: process, hardness range, case depth, test method, masking
  - *Rule taught:* hardness values, case depths and process parameters are material- and supplier-specific `[MFR]` — confirm before release
  - *Common mistake:* hardening after final grinding; forgetting to mask threaded and dowel holes

**Level 18 assessment:** Quiz Q18 (30 items) + treatment callout exercise on 10 parts

---

## LEVEL 19 — STANDARD COMPONENTS & LIBRARY BUILDING
**Prerequisite:** L18 · **Lessons:** 10 · **Est. 8 h**

- **L19.1** Why standardisation beats cleverness: cost, lead time, spares, maintainability
- **L19.2** Dowel pins and locating pins: standards, tolerance classes, press-fit calculation `[STD]`
- **L19.3** Diamond pins, shoulder bolts, socket screws, studs, nuts, washers: designation systems
- **L19.4** Fastener strength classes (8.8/10.9/12.9), preload, torque tables, thread engagement rules `[STD]`
- **L19.5** Rest pads, support buttons, adjustable supports, spring plungers — catalogue selection `[MFR]`
- **L19.6** Toggle clamps, swing clamps, cam clamps: capacity vs holding force; catalogue reading `[MFR]`
- **L19.7** Bushes (press-fit, renewable, slip, liner), springs, handles, knobs, levers
- **L19.8** Hydraulic and pneumatic cylinders, work supports, valves — selection preview (detail at L46/L47)
- **L19.9** Sensors: inductive proximity, pressure switches, seating sensors — selection basics
- **L19.10** **Building a reusable CAD standard-component library:** naming, part numbering, configurations, metadata, revision control
  - *CAD exercise CX-19:* Build a 25-component library with design tables and a validated BOM output
  - *Deliverable:* **Standard Component List template (T-10)**

**Level 19 assessment:** Library-build assignment + BOM correctness check

---

## LEVEL 20 — THE FIXTURE CALCULATION HANDBOOK
**Prerequisite:** L19 · **Lessons:** 14 · **Est. 27 h**
*This level is the program's engineering reference spine — 19 calculation families, all in 13-line format, SI units.*

### Module 20.1 — Force Calculations (4 lessons)
- **L20.1.1** Cutting force (milling, drilling, boring, reaming, tapping) — consolidated methods
- **L20.1.2** Friction and required clamp force; multi-clamp distribution
- **L20.1.3** Hydraulic force `F = p·A`, pneumatic force with efficiency, cylinder sizing, swing-cylinder side-load
- **L20.1.4** Spring force, toggle-clamp force amplification, cam/wedge self-locking condition

### Module 20.2 — Strength Calculations (4 lessons)
- **L20.2.1** Bolt preload and screw torque `T = K·F·d`; K-factor sensitivity and its uncertainty `[GUIDE]`
- **L20.2.2** Bolt strength: tensile, shear, combined; thread engagement length; joint separation check
- **L20.2.3** Pin shear and pin bending; press-fit retention force; dowel load sharing
- **L20.2.4** Weld strength for fabricated fixture bodies: fillet throat, weld length, allowable stress `[STD]`

### Module 20.3 — Stiffness and Deflection (3 lessons)
- **L20.3.1** Beam deflection cases (cantilever, simply supported, fixed-fixed) applied to fixture members
- **L20.3.2** Base-plate thickness selection; support spacing optimisation; the span³ rule
- **L20.3.3** Overall fixture rigidity budget: how much deflection is your part tolerance allowed to spend?

### Module 20.4 — Specialised Calculations (3 lessons)
- **L20.4.1** V-block load resolution and contact stress
- **L20.4.2** Tube-specific: crushing/ovalisation limit, deflection between supports, buckling check
- **L20.4.3** Safety factors: how to choose, how to justify, and how to avoid stacking them into absurdity
  - **Deliverable:** the **Fixture Calculation Handbook** — a standalone reference with all 19 families, worked examples, and a variable glossary
  - *Calculation test CT-20:* 20 problems, mixed families — the program's toughest numeric assessment

**STAGE C GATE EXAM:** GC — full VMC fixture design task + 15 calculations + drawing set. ≥70% to enter Stage D.

---

# STAGE D — ENGINEERING RIGOUR
### Levels 21–29 · 122 lessons · ≈130 h

---

## LEVEL 21 — GD&T MASTER PROGRAM
**Prerequisite:** L20 · **Lessons:** 24 · **Est. 30 h**
*Every symbol taught in the 13-point GD&T format. Standard stated on every example.*

### Module 21.1 — Foundations (5 lessons)
- **L21.1.1** Why GD&T exists: the failure of ± coordinate tolerancing (the square-vs-round tolerance-zone proof, 57% area gain)
- **L21.1.2** ASME Y14.5 vs ISO GPS: philosophy, rule #1/envelope vs independency (ISO 8015), when each applies `[STD]`
- **L21.1.3** Basic dimensions, theoretically exact dimensions (TED), and the feature control frame anatomy
- **L21.1.4** Feature vs feature-of-size; regular vs irregular FOS
- **L21.1.5** The tolerance zone concept: 2D vs 3D, cylindrical vs parallel-plane vs spherical

### Module 21.2 — Datums (4 lessons)
- **L21.2.1** Datum, datum feature, datum feature simulator, datum reference frame (DRF)
- **L21.2.2** Datum precedence A|B|C and how it changes the measurement result (demonstrated numerically)
- **L21.2.3** Datum targets: points, lines, areas — essential for castings, forgings, weldments and tubes
- **L21.2.4** ISO 5459 datum systems and ASME datum rules — the divergence card `[STD]`

### Module 21.3 — Form Controls (3 lessons)
- **L21.3.1** Straightness (surface line and axis/DOF form) — with the MMC modifier case
- **L21.3.2** Flatness — the fixture engineer's most-used control (base plates, rest pads)
- **L21.3.3** Circularity and cylindricity — tube and pin applications

### Module 21.4 — Orientation Controls (3 lessons)
- **L21.4.1** Parallelism: surface, axis, tangent plane
- **L21.4.2** Perpendicularity: the locating-pin-to-base control
- **L21.4.3** Angularity: angled faces and angled-hole fixtures

### Module 21.5 — Location Controls (4 lessons)
- **L21.5.1** Position: the workhorse — zones, RFS/MMC/LMC, composite vs multiple single-segment
- **L21.5.2** Pattern location, ISO 5458 pattern rules, and simultaneous requirements `[STD]`
- **L21.5.3** Concentricity and symmetry: what they really mean, why industry mostly avoids them
- **L21.5.4** Projected tolerance zone — critical for threaded and press-fit holes in fixtures

### Module 21.6 — Profile and Runout (3 lessons)
- **L21.6.1** Profile of a line and profile of a surface: unilateral, bilateral, unequally disposed
- **L21.6.2** Profile as the universal control — the backbone of checking-fixture and sheet-metal tolerancing
- **L21.6.3** Circular runout and total runout; runout vs position vs cylindricity

### Module 21.7 — Material Condition Modifiers (2 lessons)
- **L21.7.1** MMC, LMC, RFS; bonus tolerance calculation with a full worked table
- **L21.7.2** Virtual condition, resultant condition, datum shift, and ISO 2692 equivalents `[STD]`
  - *GD&T test GT-21:* 40 items — read, interpret, calculate bonus, sketch the zone
  - *Exercise (Advanced):* Fully tolerance a machined housing drawing from scratch, in ASME, then in ISO

**Level 21 assessment:** GD&T test GT-21 (40 items) + full-part tolerancing assignment

---

## LEVEL 22 — GD&T APPLIED TO FIXTURES
**Prerequisite:** L21 · **Lessons:** 13 · **Est. 13 h**
*Not theory. Where exactly to put each symbol on a fixture, and how much.
Each lesson answers: WHY? WHERE? HOW MUCH? HOW MANUFACTURED? HOW INSPECTED? WHAT IF WRONG?*

- **L22.1** The governing rule: **fixture tolerance ≈ 10–20% of the part tolerance it controls** `[GUIDE]` — derivation and exceptions
- **L22.2** **Fixture base plate:** flatness of the mounting face, parallelism of top to bottom, table-interface control
- **L22.3** **Locating pin holes:** position (with datum precedence), perpendicularity, ISO 286 fit, projected zone
- **L22.4** **Round and diamond pins:** cylindricity, position of the flat, perpendicularity to seat, finish, hardness
- **L22.5** **Rest pads and support pads:** coplanarity via profile, height tolerance, flatness, parallelism to base
- **L22.6** **V-blocks:** V-angle tolerance, symmetry of the V to the mounting datum, centre-height control
- **L22.7** **Clamp mounting features:** position tolerance (loose is fine — and why), thread callouts
- **L22.8** **Support blocks and risers:** stack-height control and the accumulation problem
- **L22.9** **Bushes and bush holes:** position, concentricity of liner-to-bush, press-fit tolerancing
- **L22.10** **Tombstone and pallet interface:** face flatness/perpendicularity, key-slot position, mounting-hole pattern
- **L22.11** **Checking fixtures:** the different philosophy — gauge tolerance, wear allowance, profile-based nets
- **L22.12** **Welding fixtures:** looser location tolerance but tight *repeatability*; thermal-growth allowance
- **L22.13** **Tube fixtures:** centreline control, V-position, end-stop position, bend-datum simulation
  - *Exercise (Advanced):* Apply full GD&T to a 12-part fixture assembly; defend every tolerance value
  - *Case study CS-08:* Over-tolerancing that tripled fixture cost and delivered zero accuracy gain

**Level 22 assessment:** Fixture GD&T application test (graded on justification depth)

---

## LEVEL 23 — TOLERANCE STACK-UP
**Prerequisite:** L22 · **Lessons:** 12 · **Est. 14 h**

- **L23.1** What a stack-up is and the four questions it answers
- **L23.2** Building the loop diagram: start point, end point, vectors, signs — the discipline that prevents errors
- **L23.3** **Worst-case (arithmetic) stack-up** — full worked example
- **L23.4** **RSS (root-sum-square)** stack-up — when it is legitimate and when it is wishful thinking
- **L23.5** Statistical / Monte Carlo stack-up; Cp, Cpk, and process-capability inputs
- **L23.6** Converting GD&T into stack-up terms: position → ± equivalent, bonus tolerance, datum shift
- **L23.7** **Linear (1D) stack-up** — the standard case
- **L23.8** **2D stack-up** — angular effects, sine errors, and the small-angle approximation
- **L23.9** **Functional stack-up:** assembly clearance, interference, gap analysis
- **L23.10** **Fixture-induced error:** locator position error + locator wear + pin-hole clearance + clamp deflection + thermal
- **L23.11** **The complete error budget:** part tolerance = machine + tool + fixture + measurement. Who gets what share?
- **L23.12** Gauge tolerance and measurement uncertainty; the 10:1 and 4:1 rules; gauge R&R preview `[GUIDE]`
  - *Worked example:* Hole-position error at a feature 300 mm from the locating pins (clearance + rotation + wear)
  - *Calculation test CT-23:* 8 stack-up problems (WC and RSS, 1D and 2D)

**Level 23 assessment:** Calculation test CT-23 + full error-budget assignment for a real fixture

---

## LEVEL 24 — CAD FIXTURE DESIGN
**Prerequisite:** L23 · **Lessons:** 16 · **Est. 20 h**
*SolidWorks is the primary vehicle; methodology mapped to Creo, NX, CATIA and Inventor throughout.*

### Module 24.1 — CAD Strategy Before Clicking (3 lessons)
- **L24.1.1** Top-down vs bottom-up fixture modelling; skeleton/layout sketches and master models
- **L24.1.2** File structure, part numbering, naming conventions, revision and folder discipline
- **L24.1.3** Importing the customer part: neutral formats (STEP/IGES/Parasolid), healing, and the read-only rule

### Module 24.2 — Modelling (4 lessons)
- **L24.2.1** Part modelling for fixture components: features, symmetry, design intent, machinable geometry
- **L24.2.2** Reference geometry: planes, axes, coordinate systems — building the fixture's WCS in CAD
- **L24.2.3** Configurations and design tables: one model, a family of sizes
- **L24.2.4** Modelling *for manufacture*: no un-machinable internal corners, tool-radius awareness, standard sizes

### Module 24.3 — Assembly (5 lessons)
- **L24.3.1** Assembly structure and subassemblies; flexible vs rigid subassemblies
- **L24.3.2** Mates: which mate for which joint; avoiding over-defined and floating components
- **L24.3.3** Inserting standard components from the library (built in L19)
- **L24.3.4** **Interference detection and clearance verification** — the check that saves real money
- **L24.3.5** Motion study: clamp swing paths, retractable locators, load/unload clearance, tool-path sweep

### Module 24.4 — Output (4 lessons)
- **L24.4.1** Exploded views and assembly animation for operator instructions
- **L24.4.2** BOM generation, balloons, custom properties, and BOM/CAD synchronisation
- **L24.4.3** Drawing creation from the model: views, sections, details, sheet formats, templates
- **L24.4.4** Cross-platform notes: the same workflow in Creo, NX, CATIA, Inventor (terminology map)
  - *CAD exercise CX-24:* Complete 20-step CAD build of a VMC fixture, ending with a released drawing pack

**Level 24 assessment:** CAD assignment — full assembly + interference report + drawing pack

---

## LEVEL 25 — MANUFACTURING DRAWINGS *(source-course topics #14, #16, #20)*
**Prerequisite:** L24 · **Lessons:** 13 · **Est. 13 h**

### Module 25.1 — The Eight Drawing Types (8 lessons)
- **L25.1.1** **Fixture assembly drawing:** views, balloons, BOM, overall dimensions, key setting dimensions
- **L25.1.2** **Detailed part drawing:** one part, fully defined, ready for the shop with no questions
- **L25.1.3** **Subassembly drawing:** when to create one and how it interacts with the main BOM
- **L25.1.4** **Manufacturing drawing:** process notes, stock allowance, machining sequence hints
- **L25.1.5** **Exploded drawing:** assembly sequence communication
- **L25.1.6** **Inspection drawing:** what to check, with what, to what criterion (balloon/AS9102-style)
- **L25.1.7** **Setup drawing:** how the fixture mounts to the machine, offsets, indicating points
- **L25.1.8** **Operator instruction drawing:** load, clamp, check, unload — pictorial and unambiguous

### Module 25.2 — Drawing Content Standards (5 lessons)
- **L25.2.1** Views: orthographic, isometric, section, detail, auxiliary — the minimum-sufficient-views rule
- **L25.2.2** Dimensioning strategy: functional dimensioning, avoiding chain stacks, datum-based schemes
- **L25.2.3** Callouts: surface finish (ISO 1302), edge condition (ISO 13715), material, heat treatment, coating `[STD]`
- **L25.2.4** General tolerances (ISO 2768), welding symbols, notes hierarchy, do-not-scale rule `[STD]`
- **L25.2.5** Title block, part number, drawing number, revision table, change control, sign-off
  - *Drawing exercise:* Produce a complete 9-sheet drawing pack for an 8-part fixture
  - *Deliverable:* **Drawing Register template (T-11)**

**Level 25 assessment:** Drawing pack assignment, graded on a 30-point drawing-quality rubric

---

## LEVEL 26 — HOW TO READ FIXTURE DRAWINGS
**Prerequisite:** L25 · **Lessons:** 8 · **Est. 6 h**

- **L26.1** The 10-minute drawing scan: title block → revision → views → datums → critical dimensions
- **L26.2** Identifying datums and reconstructing the designer's intent
- **L26.3** Spotting critical vs non-critical dimensions (and what an unmarked dimension really means)
- **L26.4** Decoding GD&T on a fixture drawing quickly and reliably
- **L26.5** Reading material, heat treatment, surface finish and coating callouts
- **L26.6** Reading the BOM: made vs bought, standard vs special, quantity verification
- **L26.7** Reading manufacturing notes and inspection requirements
- **L26.8** Revision reading: what changed, why, and what it invalidates downstream
  - *Drawing-reading test DR-26:* 6 real-style drawings, 40 interpretation questions
  - *Exercise:* Find 12 deliberate errors planted in a supplied drawing pack

**Level 26 assessment:** Drawing-reading test DR-26

---

## LEVEL 27 — FIXTURE MANUFACTURING
**Prerequisite:** L26 · **Lessons:** 11 · **Est. 10 h**

- **L27.1** The manufacturing chain: RAW MATERIAL → CUTTING → MILLING → DRILLING → TAPPING → BORING → REAMING → GRINDING → HEAT TREATMENT → SURFACE TREATMENT → INSPECTION → ASSEMBLY
- **L27.2** Raw material: sizes, stock allowance, cutting methods, material certification
- **L27.3** **Base plate route:** rough mill → stress relieve → semi-finish → finish grind (and why in that order)
- **L27.4** **Locator / pin route:** turn → heat treat → cylindrical grind → inspect
- **L27.5** **Rest pad route:** and how to guarantee coplanarity (grind-in-place vs grind-then-assemble)
- **L27.6** **V-block route** and angle verification methods
- **L27.7** **Dowel and reamed hole route:** drill → bore/ream, jig-bore vs CNC, hole-to-hole accuracy
- **L27.8** **Fabricated/welded fixture body route:** weld → stress relieve → machine (never machine → weld)
- **L27.9** Sequencing rules: datum surfaces first; hardened surfaces ground last; masking before plating
- **L27.10** Machining the fixture *as an assembly* (line-boring, grind-in-place) — when accuracy demands it
- **L27.11** Working with the vendor: drawing clarity, tolerance realism, cost drivers, lead time
  - *Manufacturing exercise MX-27:* Write the full process route for 10 fixture parts
  - *Case study CS-09:* A base plate machined before stress relief that moved 0.25 mm in a week

**Level 27 assessment:** Process-routing assignment for a complete fixture BOM

---

## LEVEL 28 — FIXTURE INSPECTION & METROLOGY
**Prerequisite:** L27 · **Lessons:** 12 · **Est. 12 h**

### Module 28.1 — Instruments (6 lessons)
- **L28.1.1** Vernier caliper and micrometre: resolution, correct technique, common misreadings
- **L28.1.2** Height gauge and surface plate: the foundation of fixture inspection
- **L28.1.3** Dial indicator and DTI: setup, stylus effect, cosine error, sweeping technique
- **L28.1.4** Bore gauge, telescopic gauge, air gauge for hole verification
- **L28.1.5** Gauge blocks, pin gauges, thread gauges, angle blocks, sine bar
- **L28.1.6** CMM: touch-trigger vs scanning, alignment strategy, datum construction, reporting

### Module 28.2 — Inspecting the Fixture (6 lessons)
- **L28.2.1** What to inspect on a fixture (and what not to waste money on)
- **L28.2.2** Base flatness and parallelism verification
- **L28.2.3** Locator height, coplanarity and position verification
- **L28.2.4** Pin diameter, position, perpendicularity; centre-distance verification
- **L28.2.5** Acceptance criteria, inspection report format, and non-conformance handling
- **L28.2.6** Periodic re-inspection, calibration intervals, and wear monitoring `[PRACTICE]`
  - *Inspection exercise IX-28:* Write a complete inspection plan (feature, instrument, method, criterion) for a 10-part fixture
  - *Deliverable:* **Inspection Checklist template (T-12)**

**Level 28 assessment:** Inspection-plan assignment + instrument-selection test

---

## LEVEL 29 — FIXTURE ASSEMBLY, SETUP & COMMISSIONING *(source-course topic #8)*
**Prerequisite:** L28 · **Lessons:** 13 · **Est. 12 h**

### Module 29.1 — Assembly (6 lessons)
- **L29.1.1** Assembly sequence planning and the assembly checklist
- **L29.1.2** Dowel alignment: reaming in assembly, dowel-then-bolt, transfer of position
- **L29.1.3** Bolt tightening: sequence, torque values, thread lubrication, locking methods
- **L29.1.4** Locator and clamp installation, shimming, adjustment and locking
- **L29.1.5** Hydraulic/pneumatic connections: routing, leak test, pressure setting, sequencing
- **L29.1.6** Sensor installation, gap setting, signal verification, wiring/labelling

### Module 29.2 — Machine Setup and First-Off (7 lessons)
- **L29.2.1** Fixture mounting: T-slots, clamping, keys, and locating to the table
- **L29.2.2** Alignment and indicating: how to achieve and prove squareness to the machine axes
- **L29.2.3** Datum setting and work offset (G54) establishment; probing vs manual
- **L29.2.4** Tool setup, tool-length offsets, tool-list verification
- **L29.2.5** Dry run, single-block, feed-hold discipline, collision avoidance
- **L29.2.6** **First-off part:** machining, full-dimension inspection, capability first-look
- **L29.2.7** Approval, deviation handling, and formal production release
  - *Deliverable:* **Trial Report (T-13)** and **Fixture Acceptance Report (T-14)**
  - *Exercise:* Write the complete setup instruction sheet for a fixture, fit for a shop-floor operator

**STAGE D GATE EXAM:** GD — GD&T test + stack-up + CAD + drawing pack + inspection plan. ≥70% to enter Stage E.

---

# STAGE E — SPECIALISATIONS
### Levels 30–48 · 197 lessons · ≈201 h
*Four specialisation tracks (Tube · Checking · Welding · Rework) plus power, automation and advanced fixturing.*

---

## TRACK E1 — TUBE FIXTURES (Levels 30, 31, 32, 33, 44)

## LEVEL 30 — TUBE FIXTURE FUNDAMENTALS
**Prerequisite:** Stage D · **Lessons:** 12 · **Est. 12 h**

### Module 30.1 — Tube as a Workpiece (5 lessons)
- **L30.1.1** Tube sections: round, square, rectangular, oval, and their locating implications
- **L30.1.2** Tube manufacture: ERW, seamless, DOM, drawn — the variation each brings (seam, ovality, straightness)
- **L30.1.3** Thin-wall vs thick-wall: the `D/t` ratio and the crushing problem
- **L30.1.4** Tube materials: MS, SS, aluminium, copper, brass — springback, galling, marking sensitivity
- **L30.1.5** Tube applications: automotive, hydraulic, exhaust, structural, frame, seat, HVAC

### Module 30.2 — Tube Geometry and Datums (7 lessons)
- **L30.2.1** OD, ID, wall thickness and their real-world tolerance behaviour `[STD]`
- **L30.2.2** Tube length, cut length, and the difference between them (trim, kerf, end-form allowance)
- **L30.2.3** Straightness, roundness, ovality, and how each defeats a naive locator
- **L30.2.4** Bend geometry: bend radius, **CLR** (centreline radius), bend angle, arc length, tangent points
- **L30.2.5** Bend orientation, plane of bend, rotation between bends (the LRA/YBC data model)
- **L30.2.6** End condition: square cut, angle cut, notch, flare, bead, expansion, reduction
- **L30.2.7** **The tube datum problem:** a tube has no natural flat — datum targets, V-nests, and centreline datums
  - *Exercise:* Build the datum scheme for a 3-bend tube from an LRA table
  - *Principle taught:* tube fixtures locate the **centreline**, not the surface — surfaces only *simulate* the centreline

**Level 30 assessment:** Quiz Q30 (40 items) + tube datum-scheme assignment

---

## LEVEL 31 — TUBE CUTTING FIXTURES
**Prerequisite:** L30 · **Lessons:** 12 · **Est. 12 h**

- **L31.1** Cutting processes and their fixture demands: band saw, circular/cold saw, abrasive, CNC tube cutter, laser tube support, manual
- **L31.2** Cut-length control: end stop design, adjustable stop, flip stop, digital stop, stop-to-blade dimension
- **L31.3** Axial location: which end is the datum? (and why "the end you cut" can never be the datum)
- **L31.4** Radial and rotational location: V-blocks, rollers, anti-rotation for notched/formed tubes
- **L31.5** Support strategy: support spacing, roller supports, overhang control, deflection limit
- **L31.6** Clamping the tube without crushing it: contoured jaws, dual V, pressure limiting, soft inserts
- **L31.7** Blade clearance, kerf allowance, cut relief and burr direction
- **L31.8** Chip/swarf management, coolant, and cut-off part capture
- **L31.9** Pneumatic and hydraulic clamping for tube cutting; cycle time and two-hand safety
- **L31.10** Operator ergonomics, guarding, and long-bar handling safety
- **L31.11** **Calculations:** cutting force, required clamp force, tube crushing limit, deflection between supports, support spacing, safety factor
- **L31.12** Cut-length tolerance stack-up: stop position + clamp slip + blade wander + thermal
  - *Worked example:* Ø38 × 2 mm MS tube, 1200 mm cut length — clamp force vs crush limit (full 13-line calculation)
  - **Leads to Project T01**

**Level 31 assessment:** Tube-cutting fixture design + calculation set

---

## LEVEL 32 — TUBE CHECKING FIXTURES
**Prerequisite:** L31 · **Lessons:** 14 · **Est. 15 h**

### Module 32.1 — What Gets Checked (6 lessons)
- **L32.1.1** Tube length, cut position, end squareness
- **L32.1.2** OD, ID, wall thickness, ovality at critical sections
- **L32.1.3** Hole diameter, hole position (axial and rotational), slot position
- **L32.1.4** Bend angle, bend radius, bend orientation — direct vs indirect measurement
- **L32.1.5** End forms: flare, bead, notch, expansion — form and position checking
- **L32.1.6** Tube-to-tube relationships, weld location, and assembly-condition checking

### Module 32.2 — Checking Device Families (4 lessons)
- **L32.2.1** Checking fixture vs inspection fixture vs master gauge vs functional gauge — precise definitions
- **L32.2.2** Go/No-Go gauges, templates, profile gauges, gap and flush gauges for tubes
- **L32.2.3** Attribute (pass/fail) vs variable (measured value) checking — choosing the right one
- **L32.2.4** Manual checking fixture vs CMM vs optical/laser tube measuring centre — cost/accuracy/cycle-time trade-off

### Module 32.3 — Designing the Tube Checking Fixture (4 lessons)
- **L32.3.1** Establishing the checking datum from the part drawing's DRF (never invent your own)
- **L32.3.2** Net blocks, V-nests, pin locators and the "load with no force" principle
- **L32.3.3** Checking elements: fixed pins, sliding pins, dial indicators, feeler gaps, scribe lines
- **L32.3.4** Loading and unloading a bent tube into a fixture — the accessibility problem nobody predicts
  - *Deliverable:* **Checking-fixture design sheet** with datum table, checking-point table and pass/fail criteria
  - **Leads to Projects T04, C02**

**Level 32 assessment:** Tube checking fixture design + checking-point table

---

## LEVEL 33 — TUBE BEND CHECKING
**Prerequisite:** L32 · **Lessons:** 9 · **Est. 9 h**

- **L33.1** The bend-checking workflow: DATUM → TUBE LOCATION → SUPPORT → END LOCATION → ORIENTATION → CHECKING POINTS → PASS/FAIL
- **L33.2** Bend angle verification: angle gauge, protractor nest, indicator method, and their uncertainties
- **L33.3** CLR verification: radius template, arc gauge, and why CLR is usually a *process* control, not a part check
- **L33.4** Centreline position checking: net V-blocks along the tube path
- **L33.5** End position and end orientation control: the two most functionally critical bend outputs
- **L33.6** Hole location on a bent tube: rotational reference and the compounding of bend errors
- **L33.7** Multiple-bend inspection: error accumulation from bend 1 → bend 2 → bend 3 (worked propagation)
- **L33.8** 3D tube checking: profile-based tolerancing, tube-profile tolerance zones, CMM/scanner correlation
- **L33.9** Springback, correction factors, and how the checking fixture feeds the bender's correction loop
  - *Worked example:* Angular error at bend 1 propagated to end-point deviation over 600 mm
  - **Leads to Projects T05, C03**

**Level 33 assessment:** Bent-tube checking fixture design + error-propagation calculation

---

## TRACK E2 — CHECKING FIXTURES & GAUGES (Levels 34, 35, 36)

## LEVEL 34 — INDUSTRIAL CHECKING FIXTURES
**Prerequisite:** L33 · **Lessons:** 14 · **Est. 15 h**

### Module 34.1 — Checking Fixture Philosophy (4 lessons)
- **L34.1.1** A checking fixture is a **measuring instrument** — a completely different design mindset from a machining fixture
- **L34.1.2** Rule: locate exactly as the part drawing's DRF specifies — the fixture *is* the datum reference frame, made physical
- **L34.1.3** Zero-force / low-force loading: never clamp a part into conformance
- **L34.1.4** Correlation: fixture vs CMM vs assembly reality; and gauge R&R acceptance criteria `[GUIDE]`

### Module 34.2 — Checking Fixture Construction (5 lessons)
- **L34.2.1** Base plates, sub-plates, grid systems, and the aluminium-tooling-plate standard `[PRACTICE]`
- **L34.2.2** Net blocks and profile nets: machining from CAD surface data
- **L34.2.3** Pin locators, retractable checking pins, and hole-checking elements
- **L34.2.4** Trim/profile checking edges, scribe lines, sight windows, feeler-gap steps
- **L34.2.5** Indicators, digital probes, and semi-automated readout systems

### Module 34.3 — Applications by Industry (5 lessons)
- **L34.3.1** Automotive: brackets, housings, BIW-style sheet-metal assemblies
- **L34.3.2** Tube and welded tube assemblies; exhaust systems
- **L34.3.3** Frames, chassis, seat frames, door frames — large-fixture challenges
- **L34.3.4** Machined components and plastic components (different distortion and datum behaviour)
- **L34.3.5** Final-inspection and end-of-line checking fixtures; cycle-time-driven design
  - *Case study CS-10:* A checking fixture that passed parts the customer's assembly line rejected — root cause: datum mismatch
  - **Leads to Projects C01, C06, C07, C08, C09, C10**

**Level 34 assessment:** Industrial checking fixture design + correlation plan

---

## LEVEL 35 — GO/NO-GO & FUNCTIONAL GAUGES
**Prerequisite:** L34 · **Lessons:** 10 · **Est. 9 h**

- **L35.1** Gauging philosophy: attribute gauging vs measurement; Taylor's Principle of gauging `[STD]`
- **L35.2** **Go gauge:** checks maximum material condition, full-form, full-length
- **L35.3** **No-Go gauge:** checks least material condition, single-feature, minimal contact
- **L35.4** Plug gauges, ring gauges, snap/gap gauges, limit gauges — design and use
- **L35.5** Pin gauges and checking pins: sizing for position verification at MMC (with the virtual-condition formula)
- **L35.6** **Functional gauges:** turning a position-with-MMC callout into a physical gauge — the complete method
- **L35.7** Profile gauges, template gauges, flush and gap gauges
- **L35.8** Thread gauges, taper gauges, and special-feature gauges
- **L35.9** **Gauge tolerancing:** gauge-maker's tolerance, wear allowance, gauge tolerance placement (inside/outside/bilateral) `[STD]`
- **L35.10** Gauge calibration, wear monitoring, replacement criteria, and gauge control registers
  - *Worked example:* Design a functional gauge for a 4-hole pattern ⌖ Ⓜ 0.3 | A | B | C — pin sizes, plate tolerances, wear allowance
  - *Decision table:* exactly when each gauge type should and should not be used

**Level 35 assessment:** Functional gauge design + gauge tolerance calculation

---

## LEVEL 36 — CHECKING FIXTURE GD&T (COMPONENT GD&T → GAUGE REQUIREMENT)
**Prerequisite:** L35 · **Lessons:** 10 · **Est. 11 h**

- **L36.1** The conversion chain: COMPONENT DRAWING → DATUM A/B/C → FCF → THEORETICAL EXACT LOCATION → FIXTURE DATUM SYSTEM → CHECKING ELEMENT → TOLERANCE ZONE → PASS/FAIL
- **L36.2** Reading the part's DRF and building its physical simulator (datum feature simulators)
- **L36.3** Datum targets on castings/weldments/tubes → net pads and target pins in the fixture
- **L36.4** Converting **position** callouts into checking pins and clearance holes
- **L36.5** Converting **profile** callouts into net surfaces and feeler-gap acceptance bands
- **L36.6** Converting **orientation/form** callouts into indicator sweeps
- **L36.7** **Gauge tolerance budget:** gauge-maker's tolerance + wear allowance + measurement uncertainty vs part tolerance `[GUIDE]`
- **L36.8** Repeatability and reproducibility: gauge R&R planning, %GRR criteria, and what to do when it fails
- **L36.9** **False rejection and false acceptance:** the two failure modes of every checking fixture — causes and prevention
- **L36.10** Datum error, fixture error, and the total inspection-uncertainty statement
  - *Exercise (Advanced):* Take a fully GD&T-toleranced bracket drawing and produce the complete checking-fixture requirement specification
  - *Case study CS-11:* A gauge whose wear allowance was consumed in 6 weeks, quietly passing bad parts

**Level 36 assessment:** GD&T-to-gauge conversion test (the specialisation's hardest assessment)

---

## TRACK E3 — WELDING FIXTURES (Levels 37, 38, 39, 40, 41)

## LEVEL 37 — WELDING FIXTURE MASTER MODULE
**Prerequisite:** L36 · **Lessons:** 10 · **Est. 10 h**

- **L37.1** Welding processes and their fixture consequences: MIG/MAG, TIG, spot, projection, arc, laser
- **L37.2** Spatter, heat, arc radiation and magnetic-field effects on fixture components
- **L37.3** Manual vs semi-automatic vs automatic vs robotic welding fixtures — the accessibility gradient
- **L37.4** Earthing/grounding design: current path, ground clamp placement, avoiding arc-through-bearings
- **L37.5** Spatter protection: anti-spatter coatings, sacrificial shields, protecting pins and slides
- **L37.6** Fixture materials for welding: why hardened precision components need protection or relocation
- **L37.7** Applications overview: tube assemblies, sheet-metal assemblies, brackets, frames, exhaust, chassis
- **L37.8** Tack fixture vs full-weld fixture vs positioner-mounted fixture — deciding the fixture family
- **L37.9** Weld positioners, turn-over fixtures, and 2-station (load-while-weld) layouts
- **L37.10** Robotic welding fixture requirements: reach, torch angle, collision envelope, TCP clearance, cell layout

**Level 37 assessment:** Quiz Q37 (40 items) + welding fixture family selection assignment

---

## LEVEL 38 — WELDING FIXTURE FUNDAMENTALS
**Prerequisite:** L37 · **Lessons:** 9 · **Est. 9 h**

- **L38.1** Heat input, HAZ, thermal expansion and contraction — the physics that governs every welding fixture
- **L38.2** Why a welding fixture's job is **dimensional control after cooling**, not during welding
- **L38.3** Weld shrinkage: transverse, longitudinal, angular — magnitudes and dependencies `[GUIDE]`
- **L38.4** Welding sequence and its dominance over clamping in distortion outcomes
- **L38.5** Tack welding strategy: sequence, size, spacing, and tack-then-release philosophy
- **L38.6** Torch and electrode access: the 3D clearance study around every weld
- **L38.7** Fixture rigidity for welding: restraint vs residual stress — the fundamental trade-off
- **L38.8** Heat management: fixture heating, copper chill blocks, backing bars, cooling time
- **L38.9** Part loading/unloading in a hot fixture; cycle time, gloves, ergonomics, burn safety

**Level 38 assessment:** Quiz Q38 + weld-sequence planning exercise

---

## LEVEL 39 — WELDING FIXTURE LOCATION & CLAMPING
**Prerequisite:** L38 · **Lessons:** 9 · **Est. 9 h**

- **L39.1** 3-2-1 in the welding context: locating the *assembly*, not each component alone
- **L39.2** Component-by-component locating strategy and build sequence in a multi-part weldment
- **L39.3** Welding locators: pins, diamond pins, V-blocks, rest pads, end stops, side stops
- **L39.4** Adjustable supports and shims for as-received component variation
- **L39.5** Weld gap control: fit-up, root gap, and designing the gap into the fixture
- **L39.6** Toggle clamps, pneumatic clamps, hydraulic clamps, swing clamps for welding — selection and protection
- **L39.7** Clamping sequence and its distortion effect; clamp-release sequence and spring-back
- **L39.8** **The four-way balance:** LOCATION + CLAMPING + WELD ACCESS + DISTORTION CONTROL — resolving the inevitable conflict
- **L39.9** Tolerance strategy: welding fixtures need *repeatability* more than absolute precision
  - *Exercise (Advanced):* Locate and clamp a 5-component weldment; produce the build and weld sequence

**Level 39 assessment:** Welding fixture location & clamping design assignment

---

## LEVEL 40 — WELD DISTORTION CONTROL
**Prerequisite:** L39 · **Lessons:** 9 · **Est. 9 h**

- **L40.1** Distortion mechanisms: thermal expansion → restrained contraction → residual stress → movement
- **L40.2** Distortion types: angular, longitudinal shrinkage, transverse shrinkage, bowing, buckling, twisting, warpage
- **L40.3** Estimating shrinkage: rules of thumb and their limits `[GUIDE]` — why trials remain necessary
- **L40.4** Control by **clamp placement:** near the weld, balanced, and released in the right order
- **L40.5** Control by **welding sequence:** back-step, skip, balanced/alternating, symmetric welding
- **L40.6** Control by **tack sequence** and tack size
- **L40.7** Control by **pre-setting** (deliberate over-bend) and weld allowance — the professional's tool
- **L40.8** Temporary supports, strongbacks, backing bars, and chill blocks
- **L40.9** Post-weld: stress relief, straightening, and when to design a **rework fixture** instead (links to L42)
  - *Worked example:* Angular distortion estimate for a fillet-welded bracket, and the pre-set angle to cancel it
  - *Case study CS-12:* A frame fixture where adding clamps *increased* distortion — and why

**Level 40 assessment:** Distortion-control strategy assignment + sequence design

---

## LEVEL 41 — TUBE WELDING FIXTURES
**Prerequisite:** L40 · **Lessons:** 10 · **Est. 11 h**

- **L41.1** Tube-to-tube joints: butt, mitre, saddle/coped — location and gap control for each
- **L41.2** Tube-to-plate joints: perpendicularity, penetration, plate distortion
- **L41.3** Tube-to-bracket joints: rotational orientation, the most commonly mis-located feature
- **L41.4** Multiple-tube assemblies: build order, sub-assembly strategy, cumulative error
- **L41.5** Bent-tube welding: locating a part whose own bend tolerance is larger than the weld tolerance
- **L41.6** Exhaust systems: thin wall, SS, high distortion, flange-to-flange dimensional control
- **L41.7** Frame and chassis tube welding: large fixtures, thermal growth of the fixture itself
- **L41.8** Hydraulic tube assemblies: cleanliness, no-spatter zones, sealing-surface protection
- **L41.9** Controlling centreline, angle, end position, orientation, weld gap and weld access simultaneously
- **L41.10** Rotational orientation devices: keyed nests, orientation pins, index plates, laser marks
  - *Worked example:* Rotational tolerance of a bracket on a Ø50 tube — clamp friction vs pin location
  - **Leads to Projects T06, T07, T08, W01–W10**

**Level 41 assessment:** Tube welding fixture design + build-sequence document

---

## TRACK E4 — REWORK & RECUTTING (Levels 42, 43, 44)

## LEVEL 42 — RECUTTING / REWORK FIXTURE DESIGN
**Prerequisite:** L41 · **Lessons:** 11 · **Est. 12 h**

- **L42.1** Why rework fixtures exist: scrap cost, delivery pressure, and the engineering ethics of rework
- **L42.2** **The core problem: the original datum no longer exists, is machined away, or is unreliable**
- **L42.3** Applications: re-drilling, reaming, re-facing, slot correction, hole correction, tube shortening, notch correction, welded-assembly rework, repair machining
- **L42.4** **Existing-feature datum:** locating on what the part actually has now, not what the drawing intended
- **L42.5** **Temporary datum and rework datum:** creating a reference that exists only for the correction operation
- **L42.6** **Best-fit locating:** distributing existing error so every feature ends up in tolerance (the averaging principle)
- **L42.7** **Adjustable locating:** screws, eccentrics, shims, wedges — designing a fixture that *tunes* per part
- **L42.8** Error measurement and compensation: measure → calculate offset → set fixture → machine
- **L42.9** Handling existing hole variation, surface variation, and weld distortion in the locating scheme
- **L42.10** Correction machining strategy: material availability, minimum wall, oversize-hole and bush-insert repairs
- **L42.11** Documentation and traceability: rework instructions, concession/deviation records, customer approval
  - *Rule taught:* a rework fixture that cannot **prove** the corrected part is conforming is worthless
  - *Case study CS-13:* 400 castings saved by a best-fit re-drilling fixture — the full engineering narrative

**Level 42 assessment:** Rework fixture concept + datum-strategy justification

---

## LEVEL 43 — THE RECUTTING FIXTURE WORKFLOW
**Prerequisite:** L42 · **Lessons:** 8 · **Est. 8 h**

- **L43.1** Step 1–2: Receive defective part → identify and quantify the defect (measurement first, always)
- **L43.2** Step 3: Determine the required correction and confirm it is physically possible (material check)
- **L43.3** Step 4: Survey existing features — which are reliable, which are suspect, which are unusable
- **L43.4** Step 5–6: Select a reliable datum → establish the rework datum and prove its repeatability
- **L43.5** Step 7–8: Location and clamping design for a part that is, by definition, out of tolerance
- **L43.6** Step 9: **Error calculation** — residual error after correction; will the part actually conform?
- **L43.7** Step 10–11: Fixture design → corrective machining parameters (light cuts, minimal force)
- **L43.8** Step 12–13: Inspection of the corrected part → validation and formal disposition
  - *Deliverable:* **Rework Instruction Sheet** with the full 13-step workflow completed for one real defect scenario

**Level 43 assessment:** Complete 13-step rework workflow for a supplied defect case

---

## LEVEL 44 — TUBE REWORK FIXTURES
**Prerequisite:** L43 · **Lessons:** 9 · **Est. 9 h**

- **L44.1** Tube shortening: re-establishing the length datum on an already-cut tube
- **L44.2** Tube end recutting and facing: squareness recovery, minimum-length check
- **L44.3** Tube hole re-drilling: correcting axial and rotational hole position; the oversize/bush decision
- **L44.4** Tube slot recutting and notch correction
- **L44.5** Tube end-form correction: re-flaring, re-beading, form-defect recovery limits
- **L44.6** Tube angle correction: re-bending, over-bending, straightening — and when to scrap instead
- **L44.7** Locating previously processed tubes: existing bends as datums, with their own tolerance
- **L44.8** Adjustable tube rework fixtures: sliding V-nests, adjustable stops, indexed rotation
- **L44.9** Post-rework verification with the standard tube checking fixture (link to L32/L33)
  - *Rule taught:* every tube rework must be re-checked in the **production** checking fixture, never a special one
  - **Leads to Projects T09, R04, R05**

**Level 44 assessment:** Tube rework fixture design + residual-error calculation

---

## TRACK E5 — POWER, AUTOMATION & ADVANCED FIXTURING (Levels 45–48)

## LEVEL 45 — AUTOMATION & POKA-YOKE
**Prerequisite:** L44 · **Lessons:** 12 · **Est. 12 h**

### Module 45.1 — Poka-Yoke Design (6 lessons)
- **L45.1.1** Poka-Yoke philosophy: prevention > detection > correction
- **L45.1.2** Wrong-orientation prevention: asymmetric locators, blocking pins, clearance-only-one-way features
- **L45.1.3** Wrong-component prevention: size, profile and feature-keyed nests
- **L45.1.4** Left/right (mirror-part) prevention — a classic and expensive industrial failure
- **L45.1.5** Missing-component and missing-operation detection
- **L45.1.6** Designing Poka-Yoke that survives the operator: it must be impossible, not merely discouraged

### Module 45.2 — Sensing and Control (6 lessons)
- **L45.2.1** Part-presence and part-seating detection: proximity, inductive, air-seat sensing
- **L45.2.2** Clamp-confirmation and position sensors; pressure switches
- **L45.2.3** Pneumatic and hydraulic sequencing logic
- **L45.2.4** PLC interface, interlocks, safety circuits, cycle-start permissives
- **L45.2.5** CNC interface: M-codes, fixture-ready signal, in-cycle clamp control
- **L45.2.6** Robot loading and automatic loading: gripper access, presentation accuracy, part hand-off
  - *Exercise:* Add 5 Poka-Yoke features and a complete sensor list to an existing fixture design
  - *Case study CS-14:* A mirror-image bracket welded backwards for 3 weeks — the one pin that would have prevented it

**Level 45 assessment:** Poka-Yoke and sensing design assignment

---

## LEVEL 46 — HYDRAULIC FIXTURES
**Prerequisite:** L45 · **Lessons:** 9 · **Est. 9 h**

- **L46.1** When hydraulic clamping is justified: force, cycle time, volume, consistency
- **L46.2** Hydraulic fundamentals: pressure, flow, `F = p·A`, typical system pressures `[MFR]`
- **L46.3** Cylinder types: block, threaded-body, swing, pull, work support, sequence-valve types
- **L46.4** **Cylinder selection calculation:** required force → bore → stroke → pressure (worked)
- **L46.5** Swing clamps: swing angle, side-load limits, clearance envelope, sequencing
- **L46.6** Hydraulic work supports: advance-and-lock, contact force vs support force
- **L46.7** Circuit design: manifolds, valves, pressure switches, accumulators, sequence valves
- **L46.8** Plumbing: hoses vs manifold drilling, rotary unions for rotary tables, leak prevention
- **L46.9** Safety: pressure loss, check valves, mechanical backup, energy isolation, guarding
  - *Worked example:* Size 4 swing clamps for a 12 kN total requirement at 200 bar `[EX-ASSUMED]`
  - **Leads to Project M12**

**Level 46 assessment:** Hydraulic circuit + cylinder selection assignment

---

## LEVEL 47 — PNEUMATIC FIXTURES
**Prerequisite:** L46 · **Lessons:** 8 · **Est. 8 h**

- **L47.1** When pneumatic clamping is right: light force, fast cycle, clean, low cost
- **L47.2** Air pressure, cylinder force, and efficiency losses; bore and stroke selection
- **L47.3** Cylinder types: standard, compact, guided, rotary, toggle-actuated pneumatic clamps
- **L47.4** Valves: solenoid, 5/2, 5/3, flow control, quick exhaust; speed and sequencing
- **L47.5** FRL units, air quality, condensate, and the cost of dirty air
- **L47.6** Sensors, reed switches, and clamp-position confirmation
- **L47.7** Safety: air-loss behaviour, spring-return vs double-acting, two-hand controls, exhaust noise
- **L47.8** **MANUAL vs PNEUMATIC vs HYDRAULIC** — a full comparison matrix (force, cost, cycle time, maintenance, accuracy, safety)
  - *Worked example:* Ø63 cylinder at 6 bar — available clamp force vs required; verdict and alternative
  - **Leads to Project M13**

**Level 47 assessment:** Actuation-selection assignment with justification matrix

---

## LEVEL 48 — ADVANCED FIXTURE SYSTEMS
**Prerequisite:** L47 · **Lessons:** 12 · **Est. 12 h**

- **L48.1** Modular fixture systems: grid plates, T-slot systems, element kits — economics and accuracy limits
- **L48.2** Flexible and reconfigurable fixtures: part families, adjustable elements, changeover time
- **L48.3** **Zero-point clamping systems:** principle, repeatability spec, pull-studs, setup-time collapse `[MFR]`
- **L48.4** Quick-change fixtures and palletised production; off-line setup
- **L48.5** **Multi-component fixtures** *(source-course topic #21)*: layout, cumulative error, load/unload balance, scrap-risk concentration
- **L48.6** Multi-face and multi-operation fixtures; the one-setup ideal
- **L48.7** Tombstone systems revisited: high-density part layouts and tool-life-driven sequencing
- **L48.8** 4th-axis fixtures: trunnion vs single-support, torque, indexing accuracy, counterweighting
- **L48.9** 5-axis fixtures: clearance-first design, riser/pedestal strategy, minimal-footprint clamping, collision envelope
- **L48.10** Automated and robotic-cell fixtures: presentation accuracy, error recovery, chip removal without an operator
- **L48.11** High-volume production fixtures: wear budget, spares strategy, maintenance interval design
- **L48.12** Choosing between dedicated, modular and flexible: the total-cost-of-ownership calculation
  - *Exercise (Advanced):* Compare dedicated vs modular vs zero-point for a 3-part family at 3 volume levels
  - **Leads to Projects M08, M11, M14, M15**

**STAGE E GATE EXAM:** GE — four specialisation tasks (tube, checking, welding, rework) + calculations. ≥70% to enter Stage F.

---

# STAGE F — PROFESSIONAL PRACTICE & MASTERY
### Levels 49–59 · 66 lessons + 45 projects · ≈207 h

---

## LEVEL 49 — DFM / DFA FOR FIXTURES
**Prerequisite:** Stage E · **Lessons:** 9 · **Est. 8 h**

- **L49.1** DFM for the fixture itself: every feature you draw is a machining operation someone pays for
- **L49.2** Minimise machining: standard stock sizes, avoid full-surface machining, relieve non-functional areas
- **L49.3** Reduce fixture-part count and setups; combine functions into single components — and when not to
- **L49.4** Standardise: fasteners, pins, pads, clamps — one hex key for the whole fixture
- **L49.5** Replaceable wear components: design for the second life of the fixture
- **L49.6** Design for assembly: dowel-then-bolt, access for tools, no blind adjustments, no "third-hand" steps
- **L49.7** Design for inspection: measurable surfaces, accessible datums, inspection-friendly geometry
- **L49.8** Design for maintenance: cleanable, drainable, greasable, and repairable in situ
- **L49.9** The cost-driver ranking: grinding > tight tolerance > heat treatment > machining > material `[PRACTICE]`
  - *Exercise:* Redesign a given fixture for 30% cost reduction with zero accuracy loss; document every change

**Level 49 assessment:** DFM redesign assignment with a cost-delta table

---

## LEVEL 50 — OPERATOR, ERGONOMICS & SAFETY DESIGN
**Prerequisite:** L49 · **Lessons:** 9 · **Est. 8 h**

- **L50.1** The operator is a design input: reach, force, posture, cycle repetition, fatigue over 8 hours
- **L50.2** Loading height, part weight limits, lifting aids, balancers, handling fixtures `[GUIDE]`
- **L50.3** Safe loading and unloading paths; part-drop and part-eject prevention
- **L50.4** Clamp accessibility and actuation force; handle direction and clearance for hands
- **L50.5** Part orientation for easy, natural, obviously-correct loading (Poka-Yoke as ergonomics)
- **L50.6** Chip removal and coolant management from the operator's point of view
- **L50.7** Pinch points, shear points, trap points — identification and elimination
- **L50.8** Guards, light curtains, two-hand controls, e-stops, and interlocks
- **L50.9** Maintenance access and lock-out/tag-out design
  - *Exercise:* Perform an ergonomics + safety audit on an existing fixture design; list findings by severity

**Level 50 assessment:** Safety and ergonomics audit report

---

## LEVEL 51 — TROUBLESHOOTING
**Prerequisite:** L50 · **Lessons:** 12 · **Est. 14 h**
*Every entry follows: SYMPTOM → POSSIBLE CAUSES → ROOT CAUSE → TEST → CORRECTIVE ACTION → PREVENTIVE ACTION*

### Module 51.1 — Troubleshooting Method (3 lessons)
- **L51.1.1** Structured diagnosis: observe → measure → hypothesise → test one variable → confirm
- **L51.1.2** Is it the machine, the tool, the material, the program, the operator, or the fixture? — the isolation matrix
- **L51.1.3** Root-cause tools for fixture problems: 5-Why, Ishikawa, and repeatability studies

### Module 51.2 — Machining Fixture Problems (4 lessons) — *Troubleshooting Table TT-1 (60 entries)*
- **L51.2.1** Part movement, slipping, lifting; vibration and chatter
- **L51.2.2** Poor surface finish; dimensional variation; hole-position error
- **L51.2.3** Parallelism, perpendicularity, flatness errors; repeatability failures
- **L51.2.4** Part deformation, clamp marks, locator wear, fixture misalignment, tool collision, chip accumulation

### Module 51.3 — Welding & Tube Problems (3 lessons) — *Tables TT-2 (45 entries), TT-3 (40 entries)*
- **L51.3.1** Weld distortion, gap variation, burn-through, fixture heat damage, spatter build-up
- **L51.3.2** Tube crushing, ovalisation, marking, slipping, length variation, rotational drift
- **L51.3.3** Tube mismatch at assembly; springback and bend-angle drift

### Module 51.4 — Checking & Rework Problems (2 lessons) — *Tables TT-4 (35 entries), TT-5 (20 entries)*
- **L51.4.1** **False rejection** and **false acceptance**; gauge R&R failure; datum error; wear-induced drift
- **L51.4.2** Rework fixture problems: unreliable datum, residual error, over-correction, unverifiable results
  - *Troubleshooting test TS-51:* 20 real symptom scenarios; diagnose and prescribe

**Level 51 assessment:** Troubleshooting test TS-51 (scenario-based)

---

## LEVEL 52 — FIXTURE COSTING & PROJECT ECONOMICS
**Prerequisite:** L51 · **Lessons:** 9 · **Est. 8 h**

- **L52.1** Cost structure of a fixture: design + material + machining + treatment + bought-out + assembly + trial + overhead
- **L52.2** Raw material costing: weight, grade, stock size, cutting loss
- **L52.3** Machining cost: hour rates, setups, operation times, the grinding premium
- **L52.4** Heat and surface treatment costing; minimum-lot charges
- **L52.5** Purchased components: clamps, pins, hydraulics, pneumatics, sensors `[MFR]`
- **L52.6** Design hours, documentation hours, project-management hours — the cost engineers forget to quote
- **L52.7** Assembly, inspection, trial, rework and commissioning cost
- **L52.8** Overhead, contingency, margin, and the risk-adjusted quote
- **L52.9** **Justifying the fixture:** payback period, cost-per-part, scrap-reduction value, cycle-time saving
  - *Deliverable:* **Three complete sample cost sheets** — simple VMC fixture, welding fixture, checking fixture `[EX-ASSUMED]` (rates must be replaced with your local rates)
  - *Exercise:* Cost a fixture from its BOM and drawing pack; then justify it against a 12-month production plan

**Level 52 assessment:** Full cost sheet + payback justification

---

## LEVEL 53 — ENGINEERING DOCUMENTATION SYSTEM
**Prerequisite:** L52 · **Lessons:** 9 · **Est. 9 h**
*Delivers 18 professional, reusable templates.*

- **L53.1** **T-01** Design Input Sheet · **T-02** Part Study Sheet
- **L53.2** **T-03** Process Plan · **T-04** Fixture Concept Sheet
- **L53.3** **T-05** Design Calculation Sheet · **T-06** Design Review Record
- **L53.4** **T-07** Bill of Materials · **T-08** Drawing Register
- **L53.5** **T-09** Material Selection Table · **T-10** Standard Component List · **T-11** Purchased Part List
- **L53.6** **T-12** Inspection Checklist · **T-13** Assembly Checklist
- **L53.7** **T-14** Trial Report · **T-15** Fixture Acceptance Report
- **L53.8** **T-16** Revision Record · **T-17** Engineering Change Request
- **L53.9** **T-18** Maintenance Checklist + Final Release Document; document numbering, storage and traceability
  - *Exercise:* Complete the entire 18-template dossier for one fixture — this is the deliverable an employer will ask to see

**Level 53 assessment:** Complete documentation dossier

---

## LEVEL 54 — DESIGN REVIEW
**Prerequisite:** L53 · **Lessons:** 8 · **Est. 8 h**

- **L54.1** Why design reviews exist; the cost of finding an error at design vs manufacture vs trial vs production (1:10:100:1000) `[GUIDE]`
- **L54.2** Review types: concept review, detail design review, pre-manufacturing review, pre-release review
- **L54.3** Who attends, who decides, and how to run a review that is not a formality
- **L54.4** **The 20-point master review checklist:** FUNCTION · ACCURACY · DATUM · LOCATION · CLAMPING · RIGIDITY · TOOL ACCESS · CHIP EVACUATION · COOLANT · SAFETY · ERGONOMICS · MANUFACTURABILITY · INSPECTION · MAINTENANCE · COST · STANDARDISATION · GD&T · DRAWING · BOM · POKA-YOKE
- **L54.5** The 24 stage-specific checklists (design input → part study → process planning → datum → locator → clamp → cutting force → clamp force → rigidity → material → standard components → CAD → GD&T → stack-up → drawing → BOM → manufacturing → assembly → inspection → setup → trial → validation → safety → maintenance)
- **L54.6** How to receive criticism of your design; separating the design from the designer
- **L54.7** Action tracking, closure evidence, and re-review triggers
- **L54.8** Reviewing someone else's design: the 30-minute structured audit
  - *Exercise:* Conduct a full recorded design review of a supplied (deliberately flawed) fixture design

**Level 54 assessment:** Design review of a peer/supplied design, with findings register

---

## LEVEL 55 — 100+ COMMON DESIGN MISTAKES *(source-course topic #15, greatly expanded)*
**Prerequisite:** L54 · **Lessons:** 10 · **Est. 12 h**
*Format for every entry: WRONG DESIGN → WHY WRONG → FAILURE IN PRODUCTION → CORRECT DESIGN → ENGINEERING PRINCIPLE*

- **L55.1** **Datum mistakes (M001–M012):** wrong datum, datum not functional, datum unmachined, inconsistent datums across operations, datum on a burr edge, ignoring the design DRF…
- **L55.2** **Location mistakes (M013–M028):** over-location, under-location, two round pins, wrong diamond-pin orientation, locating on a rough/cast surface, locating on a weld, excessive locator clearance, locator too far from the cut…
- **L55.3** **Clamping mistakes (M029–M046):** clamp used as locator, clamp direction away from locator, clamp over unsupported span, excessive clamp force, insufficient clamp force, clamp blocking the tool, clamp blocking loading, no clamp sequence, clamp that marks a finished surface…
- **L55.4** **Rigidity mistakes (M047–M058):** thin base, no ribs, cantilevered locators, tall unsupported risers, bolted joints treated as rigid, ignoring natural frequency…
- **L55.5** **Material & treatment mistakes (M059–M068):** soft locators in high volume, no stress relief, hardened after grinding, wrong material for wear, no replaceable wear parts, plating unmasked threads…
- **L55.6** **GD&T & tolerance mistakes (M069–M080):** no GD&T at all, tolerance tighter than manufacturable, tolerance looser than functional, mixed ASME/ISO, missing datum precedence, no projected tolerance zone on press-fit holes…
- **L55.7** **Process mistakes (M081–M088):** poor manufacturing sequence, machine-then-weld, no grind allowance, no inspection plan, un-inspectable features…
- **L55.8** **Welding & tube mistakes (M089–M096):** no distortion allowance, over-restraint, no torch access, crushing the tube, wrong tube datum, no rotational orientation control…
- **L55.9** **Checking & rework mistakes (M097–M104):** checking datum ≠ part datum, clamping a part into conformance, no wear allowance, unverifiable rework, gauge tolerance consuming the part tolerance…
- **L55.10** **Human-factor mistakes (M105–M112):** poor operator access, unsafe pinch points, wrong or defeatable Poka-Yoke, no maintenance access, undocumented adjustments…
  - *Exercise:* Audit your own Stage C and Stage E designs against all 112 mistakes; report every hit honestly

**Level 55 assessment:** Self-audit report + mistake-identification test (30 flawed designs)

---

## LEVEL 56 — INDUSTRIAL PROJECT LADDER (42 PROJECTS)
**Prerequisite:** L55 · **Est. 60 h**
*Each project delivers: part study · process plan · concept A/B/C + matrix · calculations · CAD assembly ·
GD&T · drawing pack · BOM · manufacturing route · inspection plan · cost sheet · design review record.*
*Difficulty: ★ guided → ★★★★★ fully independent.*

### E1 — MACHINING PROJECTS (M01–M15)
| ID | Project | ★ | Key learning focus |
|---|---|---|---|
| **M01** | Simple VMC plate fixture | ★ | 3-2-1 basics, strap clamps, first full dossier |
| **M02** | Locating bunk fixture *(source topic #10)* | ★ | Bunk design, coplanarity, grinding strategy |
| **M03** | V-block fixture *(source topic #11)* | ★★ | Round-part location, centring error, anti-rotation |
| **M04** | C-washer clamp fixture *(source topic #12)* | ★★ | Quick-release clamping, stud sizing, cycle time |
| **M05** | Cover plate fixture *(source topic #23)* | ★★ | Thin-part distortion, low-force clamping |
| **M06** | Angular hole milling fixture *(source topic #22)* | ★★★ | Angle setting, angular stack-up, sine-bar verification |
| **M07** | Multi-operation VMC fixture | ★★★ | Datum transfer, OP10/OP20 in one fixture |
| **M08** | Multi-component fixture *(source topic #21)* | ★★★ | Cumulative error, load balance, offset management |
| **M09** | Complex VMC fixture (full workflow, unaided) | ★★★★ | Complete 42-step workflow rehearsal |
| **M10** | HMC fixture *(source topic #19)* | ★★★ | Horizontal orientation, pallet interface |
| **M11** | HMC tombstone fixture | ★★★★ | 4-face layout, balance, rigidity, cycle economics |
| **M12** | Hydraulic fixture | ★★★★ | Circuit design, cylinder sizing, sequencing, safety |
| **M13** | Pneumatic fixture | ★★★ | Cylinder selection, valve logic, sensing |
| **M14** | 4th-axis fixture | ★★★★ | Trunnion/rotary, torque, counterweight, clearance |
| **M15** | Advanced production fixture (high volume) | ★★★★★ | Wear budget, spares, maintenance, TCO |

### E2 — TUBE PROJECTS (T01–T10)
| ID | Project | ★ | Key learning focus |
|---|---|---|---|
| **T01** | Tube cutting fixture | ★★ | Length control, crush limit, support spacing |
| **T02** | Tube locating fixture | ★★ | Centreline datum, V-nest design |
| **T03** | Tube hole drilling fixture | ★★★ | Axial + rotational position, drill bush, wall breakout |
| **T04** | Tube checking fixture | ★★★ | Datum simulation, checking points, pass/fail criteria |
| **T05** | Bent tube checking fixture | ★★★★ | 3D location, bend-error propagation, loading access |
| **T06** | Tube welding fixture | ★★★★ | Gap control, distortion, torch access |
| **T07** | Tube-to-bracket welding fixture | ★★★★ | Rotational orientation, bracket position control |
| **T08** | Multi-tube assembly fixture | ★★★★★ | Build sequence, cumulative error, sub-assembly strategy |
| **T09** | Tube rework fixture | ★★★★ | Existing-feature datum, adjustable location |
| **T10** | Complete tube production fixture family | ★★★★★ | One part, all fixtures, one datum philosophy |

### E3 — WELDING PROJECTS (W01–W10)
| ID | Project | ★ | Key learning focus |
|---|---|---|---|
| **W01** | Tube-to-plate welding fixture | ★★ | Perpendicularity, plate distortion |
| **W02** | Tube-to-bracket welding fixture | ★★★ | Orientation control, tack sequence |
| **W03** | Two-tube welding fixture | ★★★ | Angle and centreline control, mitre/saddle fit-up |
| **W04** | Automotive bracket welding fixture | ★★★ | Sheet-metal location, spring-back, high volume |
| **W05** | Frame welding fixture | ★★★★ | Large-fixture thermal growth, build sequence |
| **W06** | Multi-tube welding fixture | ★★★★ | Multi-component build order, access conflicts |
| **W07** | Hydraulic/pneumatic welding fixture | ★★★★ | Powered clamping in a hot, spatter-rich environment |
| **W08** | Robotic welding fixture | ★★★★★ | Reach, TCP clearance, collision envelope, cell interface |
| **W09** | High-volume welding fixture | ★★★★★ | 2-station layout, cycle time, wear, maintenance |
| **W10** | Automotive welded assembly fixture | ★★★★★ | Full BIW-style discipline, datum targets, correlation |

### E4 — CHECKING FIXTURE PROJECTS (C01–C10)
| ID | Project | ★ | Key learning focus |
|---|---|---|---|
| **C01** | Basic dimensional checking fixture | ★★ | Datum simulation, indicator layout |
| **C02** | Tube length checking fixture | ★★ | Length datum, stop design, Go/No-Go |
| **C03** | Bent tube checking fixture | ★★★★ | 3D nets, orientation, propagation |
| **C04** | Tube hole-position checking fixture | ★★★ | Checking pins, MMC gauging |
| **C05** | Welded tube assembly checking fixture | ★★★★ | Post-weld variation, low-force loading |
| **C06** | Bracket checking fixture | ★★★ | Profile nets, trim checking |
| **C07** | Sheet-metal checking fixture | ★★★★ | N-2-1, springback, datum targets |
| **C08** | Multi-feature checking fixture | ★★★★ | Multiple simultaneous requirements |
| **C09** | Automotive assembly checking fixture | ★★★★★ | Full DRF realisation, gauge R&R, correlation |
| **C10** | Advanced production checking fixture | ★★★★★ | End-of-line cycle time, semi-automation, data capture |

### E5 — REWORK / RECUTTING PROJECTS (R01–R07)
| ID | Project | ★ | Key learning focus |
|---|---|---|---|
| **R01** | Hole re-drilling fixture | ★★★ | Existing-feature datum, best-fit |
| **R02** | Reaming correction fixture | ★★★ | Minimal-force correction, bush strategy |
| **R03** | Slot correction fixture | ★★★ | Material availability check, residual error |
| **R04** | Tube shortening fixture | ★★★ | Length datum re-establishment |
| **R05** | Tube end correction fixture | ★★★★ | Squareness recovery, form re-work limits |
| **R06** | Welded assembly rework fixture | ★★★★★ | Distorted-part location, restraint vs damage |
| **R07** | Complex rework fixture (multi-defect) | ★★★★★ | Adjustable/compensating design, full traceability |

**Level 56 assessment:** All 42 project dossiers, graded on the standard 100-point project rubric.

---

## LEVEL 57 — COMPLETE INTEGRATED INDUSTRIAL PROJECT
**Prerequisite:** L56 · **Est. 25 h**

**The chain:**
```
RAW TUBE → TUBE CUTTING → TUBE BENDING → HOLE/SLOT MACHINING → TUBE CHECKING
→ WELDING → WELDING CHECKING → RECUT/REWORK (if required) → FINAL CHECKING
→ PRODUCTION RELEASE
```

**Deliverable:** design **every fixture in the chain** for one real component, with a single consistent
datum philosophy carried from the raw tube to the final inspection report.

For **each** fixture in the chain, produce: Purpose · Process · Datum · Location · Support · Clamping ·
Calculations · Material · Components · CAD · GD&T · Drawing · BOM · Manufacturing · Inspection ·
Maintenance · Cost · Poka-Yoke · Operator instructions.

**Plus, at chain level:** the master datum diagram, the cumulative error budget across all stages, the
inspection-gate plan, and the production-release package.

**Level 57 assessment:** Integrated project review (defence-style oral + document audit)

---

## LEVEL 58 — THE COMPLETE FIXTURE FAMILY
**Prerequisite:** L57 · **Est. 25 h**

For **one** realistic industrial component, design all ten:
1. Machining fixture · 2. Tube cutting fixture · 3. Tube bending support fixture ·
4. Tube checking fixture · 5. Welding fixture · 6. Welding checking fixture ·
7. Recutting/rework fixture · 8. Final checking fixture · 9. Assembly fixture · 10. Poka-Yoke fixture

**Consistency requirements (this is the real lesson):**
- One **datum philosophy** across all ten fixtures — documented in a single master datum sheet
- One **part-numbering system** (fixture, sub-assembly, detail, standard part)
- One **GD&T approach** and one governing standard
- One **inspection strategy**, with each fixture's role in it defined
- Cross-**fixture references** (fixture X's datum = fixture Y's datum, proven)
- One **component standard** (same pins, pads, clamps, fasteners across the family)

**Level 58 assessment:** Family consistency audit — inconsistency between fixtures is the graded failure mode

---

## LEVEL 59 — FINAL MASTER CAPSTONE
**Prerequisite:** L58 · **Est. 30 h**
*One realistic industrial project. No guidance. Assessed as a professional deliverable.*

### What you are given
Component drawing · Assembly drawing · Material specification · Production quantity ·
Manufacturing requirements · Critical dimensions · Full GD&T · Welding requirements ·
Tube requirements · Inspection requirements · Available machine list and specifications

### What you must independently deliver (34 steps)
```
 1 Part study              13 Clamp force calc        25 Manufacturing sequence
 2 Functional analysis     14 Rigidity analysis       26 Assembly
 3 Feature analysis        15 Material selection      27 Inspection
 4 Datum analysis          16 Std component selection 28 CNC setup
 5 Process planning        17 Concept generation      29 First-off trial
 6 Operation planning      18 Concept comparison      30 Dimensional validation
 7 Machine selection       19 CAD assembly            31 Troubleshooting
 8 Fixture selection       20 Detailed modelling      32 Rework
 9 Location design         21 GD&T                    33 Final validation
10 Support design          22 Tolerance stack-up      34 Production release
11 Clamp design            23 Manufacturing drawings
12 Cutting force calc      24 BOM
```

### Capstone grading (1000 points)
| Area | Points |
|---|---|
| Part study, functional & datum analysis | 100 |
| Process planning & machine selection | 80 |
| Concept generation, comparison & justification | 100 |
| Calculations (force, clamp, rigidity, stack-up) | 150 |
| CAD model & assembly quality | 100 |
| GD&T correctness and appropriateness | 120 |
| Manufacturing drawings & BOM | 120 |
| Manufacturing, assembly & inspection planning | 80 |
| Setup, trial, validation & troubleshooting | 80 |
| Documentation completeness & professionalism | 70 |
| **Total** | **1000** |

**Pass standard:** ≥700. **Master certification:** ≥900 **and** no critical error in datum, GD&T, or safety.

**FINAL PROGRAM GATE:** Capstone defence — 45-minute oral examination on your own design decisions.

---

# APPENDICES

---

## APPENDIX A — ASSESSMENT SYSTEM

### A.1 Assessment inventory
| Code | Type | Count | Where |
|---|---|---|---|
| Q0–Q59 | Module quizzes (30–45 items) | 60 | End of every level |
| CT-0 … CT-23 | Calculation tests | 12 | L0, L9, L10, L16, L20, L23, L31, L33, L36, L44, L46, L52 |
| GT-21, GT-22, GT-36 | GD&T tests | 3 | L21, L22, L36 |
| DR-0, DR-26 | Drawing-reading tests | 2 | L0, L26 |
| CX-06 … CX-24 | CAD assignments | 8 | L6, L19, L24, and each project |
| MX-27 | Manufacturing exercises | 6 | L27 |
| IX-28 | Inspection exercises | 6 | L28 |
| TS-51 | Troubleshooting tests | 2 | L51 |
| GA–GE | Stage gate exams | 5 | End of Stages A–E |
| P-M/T/W/C/R | Project dossiers | 42 | L56 |
| CAP-59 | Capstone + oral defence | 1 | L59 |

### A.2 Grading scale (as specified)
| Score | Grade | Meaning |
|---|---|---|
| 90–100% | **MASTER LEVEL** | Can work unsupervised and mentor others |
| 80–89% | **ADVANCED** | Can work unsupervised on familiar fixture types |
| 70–79% | **COMPETENT** | Can work with periodic review |
| 60–69% | **DEVELOPING** | Requires close supervision; repeat weak modules |
| < 60% | **REPEAT / REVIEW** | Must re-study the level before proceeding |

### A.3 Critical-error rule
Regardless of total score, any of the following is an automatic fail requiring rework:
wrong datum strategy · over-constrained location · clamp used as a locator ·
a safety hazard · GD&T that cannot be inspected · a calculation with wrong units.

### A.4 Project rubric (100 points, used for all 42 projects)
Part & datum analysis 15 · Concept & justification 15 · Calculations 20 · CAD 10 ·
GD&T 15 · Drawings & BOM 15 · Manufacturing/inspection planning 5 · Documentation 5

---

## APPENDIX B — INTERVIEW PREPARATION BANK (700 questions)
*Every answer includes the engineering reasoning, not just the fact.*

| Set | Topic | Count | Sample question |
|---|---|---|---|
| B1 | Beginner | 100 | "What are the three primary functions of a fixture, and which is most often compromised?" |
| B2 | Intermediate | 100 | "Why is a diamond pin used instead of a second round pin? Prove it with numbers." |
| B3 | Advanced | 100 | "Your fixture is dimensionally perfect but parts vary 0.08 mm. Where do you look first, and why?" |
| B4 | GD&T | 50 | "Convert a position-at-MMC callout ⌖ Ⓜ 0.25 to A-B-C into a functional gauge specification." |
| B5 | Calculations | 50 | "Calculate the clamp force for a 6 kN face-milling cut with μ = 0.15 and two clamps." |
| B6 | VMC / HMC | 50 | "When does an HMC beat a VMC, and at what production volume does the economics flip?" |
| B7 | Welding fixtures | 50 | "How do you control angular distortion on a fillet-welded bracket without over-restraining it?" |
| B8 | Tube fixtures | 50 | "How do you locate a tube whose ovality is larger than the feature tolerance you must hold?" |
| B9 | Checking fixtures | 50 | "How do you prevent false acceptance as the checking pins wear?" |
| B10 | Rework fixtures | 50 | "The original datum is machined away. How do you establish a rework datum you can defend?" |
| B11 | Troubleshooting | 50 | "Chatter appeared after 300 parts on a stable process. Diagnose it." |
| B12 | Scenario-based design | 50 | "You have 3 days, a manual VMC, and 50 parts. Design the workholding and justify it." |

**Also included:** a 30-question **"design your own fixture on a whiteboard"** interview drill —
the format most fixture-design interviews actually use.

---

## APPENDIX C — MASTER SKILL MATRIX
*Self-assess at the start, at every stage gate, and at completion.*

| # | Skill | BEGINNER | INTERMEDIATE | ADVANCED | EXPERT |
|---|---|---|---|---|---|
| 1 | Engineering drawing | Reads views & dimensions | Reads sections, tolerances, notes | Creates release-grade drawings | Sets drawing standards for a team |
| 2 | CNC | Knows machine types | Understands offsets & operations | Plans multi-setup processes | Optimises process + fixture together |
| 3 | Fixture fundamentals | Defines a fixture | Names all objectives | Balances conflicting objectives | Innovates new fixture concepts |
| 4 | 3-2-1 principle | Recites it | Applies to simple parts | Applies to castings & weldments | Handles compliant & N-2-1 cases |
| 5 | Locating | Names locators | Selects correctly | Designs custom locators | Designs locator systems & standards |
| 6 | Clamping | Names clamp types | Positions clamps correctly | Calculates & sequences clamping | Designs powered clamping systems |
| 7 | VMC fixtures | Follows an example | Designs simple fixtures | Designs multi-op fixtures | Designs high-volume production fixtures |
| 8 | HMC fixtures | Knows the concept | Designs single-face fixtures | Designs tombstone fixtures | Optimises multi-part tombstone economics |
| 9 | Tube fixtures | Knows tube geometry | Designs simple tube location | Designs bend/orientation control | Designs complete tube fixture families |
| 10 | Tube cutting | Understands the process | Designs a cutting fixture | Calculates crush & deflection limits | Designs automated cutting cells |
| 11 | Tube checking | Knows what to check | Designs simple checkers | Designs 3D bend checkers | Correlates fixture ↔ CMM ↔ assembly |
| 12 | Welding fixtures | Knows weld basics | Designs tack fixtures | Controls distortion by design | Designs robotic welding cells |
| 13 | Welding checking | Knows the need | Designs simple checkers | Handles post-weld variation | Runs full gauge R&R programs |
| 14 | Recutting | Knows the concept | Designs simple recut fixtures | Uses existing-feature datums | Designs compensating/adjustable systems |
| 15 | Rework | Identifies defects | Plans corrections | Calculates residual error | Manages rework engineering & concessions |
| 16 | Industrial checking fixtures | Knows the purpose | Designs basic checkers | Designs profile/net checkers | Designs automotive-grade checkers |
| 17 | Gauges | Knows Go/No-Go | Selects gauge types | Designs functional gauges | Manages gauge tolerance & wear systems |
| 18 | GD&T | Recognises symbols | Interprets FCFs | Applies GD&T to designs | Authors GD&T schemes & resolves disputes |
| 19 | Tolerance stack-up | Understands the idea | Does 1D worst-case | Does RSS, 2D, GD&T-based | Builds full error budgets |
| 20 | Calculations | Uses formulae | Solves standard problems | Handles combined load cases | Judges when calculation is unnecessary |
| 21 | CAD | Models simple parts | Builds assemblies | Builds parametric libraries | Sets CAD methodology & standards |
| 22 | Manufacturing drawings | Reads them | Produces detail drawings | Produces complete packs | Approves and releases drawings |
| 23 | Manufacturing | Knows processes | Writes process routes | Optimises routes for cost/accuracy | Manages vendors & manufacturability |
| 24 | Inspection | Uses basic instruments | Writes inspection plans | Uses CMM & interprets results | Designs measurement systems |
| 25 | Hydraulic | Knows the principle | Sizes cylinders | Designs circuits | Designs safe, sequenced systems |
| 26 | Pneumatic | Knows the principle | Sizes cylinders | Designs valve logic | Integrates with PLC/CNC |
| 27 | Automation | Knows sensors | Specifies sensing | Designs interlocked fixtures | Designs robot-served cells |
| 28 | Poka-Yoke | Knows the concept | Adds simple features | Designs unbeatable prevention | Builds error-proofing into all designs |
| 29 | Process planning | Lists operations | Writes an OP plan | Optimises setups & datums | Plans whole part-family processes |
| 30 | Costing | Knows cost elements | Costs a simple fixture | Produces quotable cost sheets | Builds business cases & TCO models |
| 31 | Troubleshooting | Reports symptoms | Finds obvious causes | Performs structured RCA | Prevents problems at design stage |

---

## APPENDIX D — INDUSTRIAL STANDARDS TAUGHT
*Each taught as: STANDARD → PURPOSE → WHEN USED → WHERE APPLIED → EXAMPLE → DRAWING APPLICATION.*

| Standard | Subject | Taught at |
|---|---|---|
| **ASME Y14.5** | Dimensioning & tolerancing (US system) | L21 (primary), L22, L36 |
| **ISO 1101** | Geometrical tolerancing — form, orientation, location, run-out | L21, L22 |
| **ISO 5459** | Datums and datum systems | L21.2 |
| **ISO 8015** | GPS fundamentals; the independency principle | L21.1 |
| **ISO 2768** | General tolerances (linear, angular, geometrical) | L25.2 |
| **ISO 286** | ISO code system for tolerances on linear sizes; fits | L0.5, L6.4, L19 |
| **ISO 1302** | Indication of surface texture | L25.2 |
| **ISO 13715** | Edges of undefined shape | L25.2 |
| **ISO 14405** | Dimensional tolerancing (size specification) | L21.1 |
| **ISO 5458** | Pattern and position tolerancing | L21.5 |
| **ISO 5456** | Projection methods | L0.2 |
| **ISO 2692** | Maximum/least material requirement, reciprocity | L21.7 |
| Material standards (IS/EN/DIN/AISI equivalents) | Fixture material specification | L17 |
| Fastener standards (ISO 4762, 4014, 2338, property classes) | Standard components | L19 |
| Welding symbol standards (ISO 2553 / AWS A2.4) | Weld callouts on fixture drawings | L25.2, L37 |
| GR&R / MSA guidance | Gauge capability | L36 |

**Discipline enforced:** every example states its governing standard; ASME and ISO rules are never mixed
within one drawing. Where a divergence exists, an explicit comparison card is issued.

---

## APPENDIX E — INDUSTRIAL CASE STUDIES (60 total)
*Each case: situation → what was done → what went wrong / right → root cause → engineering lesson.*

| Track | Count | Examples already scheduled |
|---|---|---|
| Machining fixtures | 16 | CS-01 accurate-but-uneconomic fixture · CS-02 over-constrained casting fixture · CS-06 tombstone resonance · CS-09 base plate that moved after machining |
| Datum & GD&T | 10 | CS-03 three-way datum mismatch · CS-04 rotated diamond pin · CS-08 over-tolerancing cost blow-out |
| Welding fixtures | 10 | CS-12 more clamps → more distortion · CS-14 mirror-part welded backwards |
| Tube fixtures | 8 | tube crushed by clamp · bend propagation to end-point error |
| Checking fixtures & gauges | 8 | CS-10 fixture-vs-assembly datum mismatch · CS-11 wear allowance consumed in 6 weeks |
| Rework / recutting | 5 | CS-13 400 castings saved by best-fit re-drilling |
| Cost, project & people | 3 | quoting without design hours · a fixture nobody could maintain |

---

## APPENDIX F — EXERCISE & DELIVERABLE INDEX

| Category | Count | Distribution |
|---|---|---|
| Beginner exercises | 643 | One per lesson (mandatory template item 24) |
| Intermediate exercises | 643 | One per lesson (item 25) |
| Advanced exercises | 643 | One per lesson (item 26) |
| Dedicated calculation exercises | 420 | Concentrated in L9, L10, L16, L20, L23, L31, L33, L46, L47 |
| Drawing exercises | 180 | L0.2, L7, L16, L22, L25, L26, and every project |
| CAD exercises | 165 | L19, L24, and every project |
| GD&T exercises | 145 | L21, L22, L23, L36 |
| Manufacturing exercises | 95 | L18, L27, L49 |
| Inspection exercises | 110 | L28, L32–L36 |
| Checklists delivered | 24 | L54 |
| Templates delivered | 18 | L53 |
| Troubleshooting entries | 200 | L51 (tables TT-1…TT-5) |
| Catalogued mistakes | 112 | L55 (M001–M112) |

---

## APPENDIX G — DELIVERY PROTOCOL (HOW WE WILL PROCEED)

### G.1 Command set
| Command | Effect |
|---|---|
| `START LEVEL 0` | I teach Level 0 in full, then stop |
| `NEXT` | I teach the next level in full, then stop |
| `REPEAT` | I re-teach the current level differently (more examples, or simpler) |
| `DEEPER <topic>` | I expand one sub-topic to maximum depth without advancing |
| `EXERCISE <id>` | I set, or mark, a specific exercise |
| `SOLVE <id>` | I provide the fully worked solution |
| `REVIEW MY DESIGN` | I run the 20-point design review on work you paste or attach |
| `JUMP L<n>` | I first list the untaught prerequisites, then confirm before jumping |

### G.2 Rules I will follow
1. **One level per response.** I stop and wait after each. No skipping ahead.
2. **No unstated prerequisites.** If a level needs a concept not yet taught, I teach that concept first.
3. **No jumping from theory to advanced design.** The ladder is walked, not leapt.
4. **Every lesson uses the 30-part template.** Nothing is abbreviated away.
5. **Every calculation uses the 13-line format**, in SI units.
6. **Every number is tagged** with one of the six data-integrity tags (§0.2).
7. **Every drawing is labelled** as an instructional schematic, never as a certified drawing.
8. **Standards are never mixed** — each example declares ASME or ISO.

### G.3 Because Level 0 is large (22 lessons), it will be delivered as
- `START LEVEL 0` → Modules 0.1 + 0.2 (9 lessons)
- `NEXT` → Modules 0.3 + 0.4 (8 lessons)
- `NEXT` → Module 0.5 + Level 0 assessment (5 lessons + quiz)
- `NEXT` → Level 1 begins

Large levels (L14, L20, L21, L56) will be split the same way, and I will always tell you in advance
how many parts a level will take.

### G.4 What I need from you (optional but valuable)
- The **course screenshots** (see §0.1) — I will reissue the roadmap as R01 with exact source mapping
- Your **CAD platform** (SolidWorks assumed) — affects the CAD workflow wording
- Your **standard preference** (ASME Y14.5 or ISO GPS) — I will make one primary, the other comparative
- Your **industry** (automotive / general engineering / aerospace / fabrication) — biases the examples
- Your **unit and currency preference** for cost sheets (SI + ₹ assumed)

None of these block the start. Defaults are already set.

---

## ROADMAP SUMMARY

| Item | Value |
|---|---|
| Stages | 6 (A–F) |
| Levels | 60 (L0–L59) |
| Modules | 77 |
| Lessons | 643 |
| Projects | 42 + 3 integrated/capstone |
| Case studies | 60 |
| Worked examples | 340+ |
| Interview questions | 700 |
| Templates | 18 |
| Checklists | 24 |
| Estimated study time | ≈788 hours |
| Entry level | Absolute beginner |
| Exit level | Independent Industrial Fixture Design Engineer |

---

### ROADMAP COMPLETE — TEACHING HAS NOT STARTED

**Send `START LEVEL 0` when you are ready.**
I will then teach **only** Level 0 (Part 1 of 3: Modules 0.1 and 0.2), stop, and wait for `NEXT`.

*Roadmap R00 · 2026-08-11 · Reissued as R01 if the source screenshots are provided.*
