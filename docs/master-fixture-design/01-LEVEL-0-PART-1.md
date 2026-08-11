# LEVEL 0 — ENGINEERING FOUNDATION
## PART 1 of 3 · Module 0.1 (Manufacturing Fundamentals) + Module 0.2 (Engineering Drawing Fundamentals)

**Program:** MASTER INDUSTRIAL FIXTURE DESIGN ENGINEERING — *From Scratch to Production-Ready Professional*
**Level:** 0 of 59 · **Stage:** A (Foundation) · **Lessons in this part:** 9 · **Est. study time:** 8 h
**Prerequisite:** None. This level assumes you know almost nothing.
**Delivery:** Part 1 (this document) → `NEXT` → Part 2 (Modules 0.3 + 0.4) → `NEXT` → Part 3 (Module 0.5 + assessment)

---

## LEVEL 0 ORIENTATION — READ THIS FIRST

### Why a fixture course starts here and not with fixtures

Most fixture courses open with "a fixture locates and clamps a workpiece." That sentence is useless
to you until you can answer three prior questions:

1. **What is the process doing to the part?** (You cannot resist a force you cannot name.)
2. **What does the drawing actually demand?** (You cannot hold a tolerance you cannot read.)
3. **What is this part worth?** (You cannot justify a fixture you cannot cost.)

Level 0 builds exactly those three foundations. Every later level — the 3-2-1 principle, diamond
pins, clamp force, GD&T, checking fixtures — silently assumes you already have them. We are not
going to assume. We are going to build them.

### The six data-integrity tags (used on every number in this program)

| Tag | Meaning | What you must do |
|---|---|---|
| `[STD]` | Standard requirement (ISO/ASME clause) | Follow it; cite the clause |
| `[MFR]` | Manufacturer catalogue specification | Verify against the current catalogue |
| `[GUIDE]` | Published engineering guideline | Reasonable default; verify for your case |
| `[PRACTICE]` | Common industrial recommended practice | Shop-dependent; confirm locally |
| `[EX-ASSUMED]` | Assumed only to make an example solvable | **Never reuse as a rule** |
| `[PROJ]` | Project-specific value from your drawing/customer | Comes from your inputs |

### Drawing honesty notice
All diagrams in this document are **instructional ASCII schematics**. They are not to scale and are
not certified manufacturing drawings. Anything resembling a shop drawing is marked
`FOR TRAINING ONLY — NOT FOR MANUFACTURE`.

---
---

# MODULE 0.1 — MANUFACTURING FUNDAMENTALS
*4 lessons · Est. 3.5 h · Goal: understand what production does to a part, and where you fit in it*

---
---

## LESSON L0.1.1 — WHAT MANUFACTURING ACTUALLY IS

### 1. Lesson title
**L0.1.1 — What manufacturing actually is: the five process families, and where fixtures appear in each**

### 2. Learning objective
By the end of this lesson you will be able to classify any manufacturing process into one of five
families, state the direction and rough magnitude class of the force each imposes on the workpiece,
and identify which family requires which kind of fixture.

### 3. Prerequisites
None.

### 4. Why the topic matters
A fixture exists for one reason: **a process is about to apply energy to a part, and the part must
not move.** If you do not know what the process does, you cannot know what the fixture must resist.

A milling cutter pushes sideways with kilonewtons. A welding torch applies almost no force but
enough heat to shrink the part permanently. A checking gauge applies essentially nothing and must
apply essentially nothing. These three demand completely different fixtures — and the difference
comes entirely from the process, not from the part.

Beginners design fixtures by copying pictures. Engineers design fixtures by analysing the process.

### 5. Simple explanation
Manufacturing is doing one of five things to material:

1. **Take material away** (cut it) — machining
2. **Push material into shape** (bend it) — forming
3. **Stick material together** (join it) — welding
4. **Pour material into shape** (melt and solidify it) — casting
5. **Build material up** (add it) — additive / 3D printing

Almost every real product is a sequence of these. A car bracket might be: cast → machined → welded
→ checked. Four processes. Potentially four fixtures.

### 6. Engineering explanation

**Family 1 — Material removal (subtractive)**
Material is separated from the workpiece as chips or eroded particles.
- *Mechanical cutting:* turning, milling, drilling, boring, reaming, tapping, sawing, broaching
- *Abrasive:* grinding, honing, lapping
- *Thermal/electrical:* EDM, laser cutting, plasma cutting
- *Fluid:* waterjet

**Force character:** high, localised, directional, and often **interrupted** (a milling tooth enters
and leaves the cut hundreds of times per second). Forces commonly range from tens of newtons
(reaming) to tens of kilonewtons (heavy face milling) `[GUIDE]`.
**Fixture consequence:** the fixture must resist large, cyclic, directional forces without moving
and without vibrating. This is the largest fixture domain in industry.

**Family 2 — Forming (deformation)**
Material is plastically deformed; nothing is removed.
- Forging, rolling, extrusion, deep drawing, stamping, press braking, **tube bending**, end-forming
  (flaring, beading, expansion, reduction), roll forming, spinning

**Force character:** very high, but usually applied by a *die set* that also does the locating.
Springback is the defining problem: the part relaxes after the load is released.
**Fixture consequence:** locating devices, stops, mandrels, clamp dies, and **checking fixtures** to
verify the result after springback.

**Family 3 — Joining**
Two or more parts become one.
- *Fusion welding:* MIG/MAG, TIG, spot, projection, arc, laser
- *Non-fusion:* brazing, soldering, adhesive bonding
- *Mechanical:* riveting, clinching, bolting, press-fitting

**Force character:** low mechanical force, **high thermal load**. The part expands while hot and
shrinks while cooling. The shrinkage is permanent and it is not uniform.
**Fixture consequence:** welding fixtures hold parts in correct relative position and control
distortion. Their enemy is heat, not force. This is the second-largest fixture domain.

**Family 4 — Casting and primary shaping (solidification)**
Molten material solidifies into shape: sand casting, investment casting, die casting, permanent
mould, injection moulding (plastics).
**Force character:** none on a "workpiece" — the mould *is* the tooling.
**Fixture consequence:** the casting arrives at your machine shop with **no flat, no accurate
surface, and draft angles everywhere**. Locating an as-cast part is one of the hardest fixture
problems in this program (taught fully at L5.3 and L21.2.3, datum targets).

**Family 5 — Additive**
Material added layer by layer: FDM, SLS, SLM/DMLS, DED.
**Force character:** negligible during build.
**Fixture consequence:** build plates and support structures during build; conventional **machining
fixtures afterwards**, because additive parts almost always need machined interfaces — and they have
no datum until you create one.

### 7. Terminology

| Term | Definition |
|---|---|
| **Workpiece** | The part being processed (also: component, job, blank) |
| **Blank / stock** | Raw material before processing |
| **Subtractive** | Process that removes material |
| **Chip** | Material removed by mechanical cutting |
| **Swarf** | Collective term for chips and grinding debris |
| **Springback** | Elastic recovery after a forming load is released |
| **Distortion** | Permanent unwanted shape change (typically thermal) |
| **HAZ** | Heat-Affected Zone — material altered by welding heat but not melted |
| **As-cast / as-forged** | Surface condition before any machining |
| **Net shape** | Produced to final shape with no further machining |
| **Buy-to-fly ratio** | Mass of purchased stock ÷ mass of finished part |

### 8. Principle

> **THE PROCESS DEFINES THE FIXTURE.**
> A fixture is not designed for a *part*. It is designed for a *part undergoing a specific process*.
> The same part in three processes needs three different fixtures.

### 9. Industrial application
A typical automotive tubular seat-frame member passes through:

```
RAW TUBE  →  CUT  →  BEND  →  PIERCE HOLES  →  CHECK  →  WELD TO BRACKET  →  CHECK
             (1)     (2)       (3)             (4)       (5)                 (6)

(1) Tube cutting fixture      — resists saw force, controls length
(2) Bend tooling + stops      — controls angle and rotation
(3) Drilling/piercing fixture — resists thrust, controls hole position
(4) Tube checking fixture     — applies almost no force, verifies geometry
(5) Welding fixture           — resists nothing, controls heat distortion
(6) Assembly checking fixture — applies no force, verifies the weldment
```

Six processes. Six fixtures. Same part. **The fixtures differ because the processes differ.**
(You will design this entire family yourself at Level 57 and Level 58.)

### 10. Design rules
- **R1** — Identify the process family **before** you draw a single fixture line.
- **R2** — For removal processes, design against **force**. For joining, design against **heat**.
  For forming, design against **springback**. For checking, design against **your own influence on the part**.
- **R3** — Never carry a fixture concept from one process family into another without re-analysis.
- **R4** — A part that has been cast, formed, or welded has **variation you did not create and cannot remove**.
  Your fixture must accommodate it, not fight it.

### 11. Rules of thumb
- Machining forces are typically **10 to 1000×** larger than welding mechanical forces `[GUIDE]`.
- Heavy roughing removes 60–90% of stock mass on machined-from-solid parts `[PRACTICE]`.
- If a part is cast or forged, assume the as-received surface can vary by **±1 mm or more** until the
  supplier's actual data says otherwise `[PRACTICE] — must be confirmed`.
- Any welded assembly will move on cooling. The only question is how much, and in which direction.

### 12. Formulae

**Volume of a rectangular block**
```
V = L × W × H
```

**Mass from volume and density**
```
m = ρ × V
```
| Variable | Meaning | SI unit |
|---|---|---|
| V | volume | m³ |
| L, W, H | length, width, height | m |
| m | mass | kg |
| ρ | density | kg/m³ |

**Material removal percentage**
```
Removal % = ((m_stock − m_part) / m_stock) × 100
```

**Buy-to-fly ratio**
```
BTF = m_stock / m_part
```

**Reference densities** `[GUIDE]`
| Material | ρ (kg/m³) |
|---|---|
| Steel (plain carbon) | 7850 |
| Cast iron (grey) | 7200 |
| Aluminium alloy | 2700 |
| Stainless steel (austenitic) | 7900 |
*Exact density varies with grade and must be confirmed from the material specification.*

### 13. Worked numerical example

**Problem:** A fixture base plate is to be machined from a solid mild-steel block measuring
200 × 120 × 60 mm. The finished plate has a mass of 4.2 kg. Determine the mass of material removed,
the removal percentage, and the buy-to-fly ratio. Comment on the fixture implications.

```
GIVEN:
  Stock dimensions      L = 200 mm, W = 120 mm, H = 60 mm
  Finished part mass    m_part = 4.2 kg                          [EX-ASSUMED]
  Material              plain carbon steel, ρ = 7850 kg/m³       [GUIDE]

REQUIRED:
  (a) Mass of stock, m_stock
  (b) Mass removed, m_removed
  (c) Removal percentage
  (d) Buy-to-fly ratio
  (e) Engineering comment on fixture implications

ASSUMPTION:
  Stock is supplied exactly at nominal size with no oversize allowance.
  (In reality, plate stock is supplied oversize — this must be confirmed
   with the supplier. [PRACTICE])

FORMULA:
  V       = L × W × H
  m       = ρ × V
  Removal% = ((m_stock − m_part) / m_stock) × 100
  BTF     = m_stock / m_part

VARIABLE DEFINITIONS:
  V        = stock volume                    (m³)
  ρ        = density of steel                (kg/m³)
  m_stock  = mass of raw block               (kg)
  m_part   = mass of finished plate          (kg)

UNIT CONVERSION:
  L = 200 mm = 0.200 m
  W = 120 mm = 0.120 m
  H =  60 mm = 0.060 m

SUBSTITUTION:
  V       = 0.200 × 0.120 × 0.060
  m_stock = 7850 × V
  m_removed = m_stock − 4.2

CALCULATION:
  V         = 1.44 × 10⁻³ m³
  m_stock   = 7850 × 1.44 × 10⁻³ = 11.304 kg
  m_removed = 11.304 − 4.2       = 7.104 kg
  Removal%  = (7.104 / 11.304) × 100 = 62.8 %
  BTF       = 11.304 / 4.2       = 2.69

RESULT:
  (a) m_stock   = 11.30 kg
  (b) m_removed =  7.10 kg
  (c) Removal   = 62.8 %
  (d) BTF       = 2.69 : 1

SAFETY FACTOR:
  Not applicable — this is a mass/geometry calculation, not a strength check.

PASS/FAIL:
  Not applicable.

ENGINEERING CONCLUSION:
  7.1 kg of steel must be converted to chips. This tells the fixture engineer
  three things immediately:
    1. Heavy roughing is involved → large, sustained, interrupted cutting
       forces → the fixture must be RIGID and the clamping SECURE.
    2. A large chip volume will be generated → chip evacuation and coolant
       access must be designed in, not added later.
    3. Removing 63% of the mass releases residual stress → the plate will
       likely move. A stress-relief operation between roughing and finishing
       should be considered (taught at L18.5 and L27.3).

SENSITIVITY NOTE:
  The result is directly proportional to density. Using aluminium
  (ρ = 2700 kg/m³) instead would give m_stock = 3.89 kg — a completely
  different force, cost and handling situation from the same geometry.
```

### 14. Engineering assumptions
- Nominal stock size with zero oversize — real stock is oversize; confirm with the supplier.
- Uniform density — valid for wrought steel, less valid for castings with porosity.
- The finished mass was given; in practice you would obtain it from the CAD model's mass properties.

### 15. Diagram

```
        THE FIVE PROCESS FAMILIES AND THEIR FIXTURE DEMAND
        (instructional schematic — not to scale)

  FAMILY            WHAT HAPPENS            DOMINANT LOAD     FIXTURE MUST...
  ─────────────────────────────────────────────────────────────────────────────
                      ↓ tool
  1 REMOVAL      ███████░░░░  chips        MECHANICAL        resist large
                 ▓▓▓▓▓▓▓▓▓▓   flying off   FORCE (high)      cyclic force
                 workpiece                                    without moving
  ─────────────────────────────────────────────────────────────────────────────
                    ↓ punch
  2 FORMING      ══╗    ╔══                 MECHANICAL        locate, stop,
                   ╚════╝  bent             FORCE (v. high)   and allow for
                   die                      + SPRINGBACK      springback
  ─────────────────────────────────────────────────────────────────────────────
                    ⚡ arc
  3 JOINING      ▓▓▓▓|▓▓▓▓   two parts     HEAT              hold position
                 ────┴────   become one    (force ≈ low)     and control
                                                              distortion
  ─────────────────────────────────────────────────────────────────────────────
  4 CASTING      ╔════════╗  molten metal  NONE on part      (mould IS the
                 ║ ~~~~~~ ║  solidifies    — but leaves      tooling); later
                 ╚════════╝                NO DATUM          fixtures must
                   mould                                      locate as-cast
  ─────────────────────────────────────────────────────────────────────────────
  5 ADDITIVE       ▁▂▃▄▅     built up      NEGLIGIBLE        build plate now;
                   ▁▂▃▄▅     layer by      — but leaves      machining fixture
                 ═════════   layer         NO DATUM          later
                 build plate
  ─────────────────────────────────────────────────────────────────────────────
```

### 16. Drawing example
Not applicable at this lesson — drawing conventions begin at L0.2.1.
What you should note now: a drawing will tell you the **material** and often the **raw material
condition** (e.g. "MATERIAL: EN8 BRIGHT BAR" vs "MATERIAL: GREY CAST IRON, AS-CAST"). That single
line in the title block tells you which process family produced your incoming part, and therefore
how much variation your fixture must tolerate. You will learn to read it at L0.2.4.

### 17. CAD workflow
Not applicable at this lesson. One habit to start now: in any CAD system, the **mass properties**
tool (SolidWorks: `Tools ▸ Evaluate ▸ Mass Properties`; Creo: `Analysis ▸ Mass Properties`; NX:
`Analysis ▸ Measure Bodies`) gives you part mass instantly — provided the material is assigned.
Assign material to every model, always. You will need mass for handling, clamping and cost.

### 18. GD&T application
Not applicable at this lesson (GD&T begins at L21). Preview of the link: castings and forgings
cannot be located on ordinary datums because they have no accurate surfaces — GD&T solves this with
**datum targets** (L21.2.3), which are points, lines or areas rather than whole surfaces. The reason
datum targets exist is precisely the Family-4 problem described in §6.

### 19. Manufacturing method
Not applicable — this lesson *is* the introduction to manufacturing methods. Detailed process
routing for fixture components is taught at L27.

### 20. Inspection method
Not applicable at this lesson. Basic metrology begins at L0.5.5.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Designing a fixture without identifying the process | Fixture resists the wrong load; part moves or distorts |
| 2 | Copying a machining-fixture concept into a welding application | Over-restraint → cracking or severe distortion |
| 3 | Assuming a cast/forged incoming surface is flat and accurate | Rocking, false location, dimensional scatter |
| 4 | Ignoring chip volume on heavy-removal parts | Chips pack under locators → part sits high → scrap |
| 5 | Forgetting residual-stress release on high-removal parts | Part moves after machining; passes in fixture, fails on the bench |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action |
|---|---|---|---|
| Part dimensions change after removing from fixture | Residual stress released by heavy material removal | Measure part in-fixture and out-of-fixture; compare | Add stress relief between roughing and finishing |
| Part sits differently every cycle | Locating on an as-cast/as-forged surface | Blue the locating surface; look at contact pattern | Move to machined datum, or use datum targets |
| Chips packed under the part | High removal rate, no evacuation path | Inspect fixture after 10 parts | Redesign for chip escape and coolant flush |

### 23. Design checklist
- [ ] Which process family will act on the part in *this* operation?
- [ ] What is the dominant load: force, heat, or neither?
- [ ] What produced the incoming part, and what variation does that leave?
- [ ] How much material is being removed, and where do the chips go?
- [ ] Will removing that material release stress and move the part?
- [ ] Does the part have any accurate surface at all yet?

### 24. Beginner exercise
**E0.1.1-B** — List the process family for each of the following, and state the dominant load on the
workpiece: (a) drilling a hole, (b) TIG welding a bracket to a tube, (c) press-braking a sheet to 90°,
(d) sand casting a housing, (e) surface grinding a fixture base, (f) 3D printing a prototype nest,
(g) tapping an M10 thread, (h) bending a Ø25 tube to 45°.

### 25. Intermediate exercise
**E0.1.1-I** — A fixture base is machined from an aluminium block 300 × 200 × 50 mm. The finished
base has a mass of 3.6 kg. Calculate stock mass, removal percentage and buy-to-fly ratio
(ρ_Al = 2700 kg/m³ `[GUIDE]`). Then state two fixture-design consequences of your removal percentage.

### 26. Advanced exercise
**E0.1.1-A** — A tubular automotive component undergoes: tube cutting → bending → hole piercing →
checking → welding to two brackets → final checking. For each of the six operations, produce a table
stating: (i) process family, (ii) dominant load type, (iii) the single greatest risk to dimensional
accuracy, (iv) what the fixture's primary job is in that operation. Then identify which two
operations impose *contradictory* requirements on how the part is held, and explain why.

### 27. Interview questions
1. *"What is the first thing you establish before designing any fixture?"*
   **Answer:** The process. The fixture must resist what the process imposes — force for machining,
   heat for welding, near-nothing for checking. Without knowing the process, you cannot size
   anything. *(Reasoning: the process defines the load case; the load case defines the design.)*
2. *"Why is locating a casting harder than locating a machined block?"*
   **Answer:** A casting has no accurate surface — draft, parting-line mismatch, and surface
   variation of the order of ±1 mm `[PRACTICE]`. There is no flat plane to sit on, so contact is
   uncertain and repeatability is poor. The solution is small, defined contact points (datum targets)
   rather than large surfaces.

### 28. Expert questions
1. *"A part is machined from solid with 85% material removal and holds ±0.02 mm on a bore. What is
   your biggest fixture concern, and it is not clamping force?"*
   **Answer:** Residual stress redistribution. At 85% removal, the part's internal stress state is
   massively disturbed and the part will move as material is removed and after unclamping. The
   fixture cannot prevent this. The correct response is process-level: rough → stress relieve →
   semi-finish → finish, with light finishing clamp loads and a datum scheme that lets the part
   relax without being fought. A perfectly rigid fixture will simply hold the part while it deforms,
   and the error appears when you unclamp.
2. *"When is the correct engineering answer 'this operation does not need a fixture at all'?"*
   **Answer:** When the cost and lead time of the fixture exceed its benefit over existing
   workholding — typically very low volume, low accuracy, or where a standard vise/chuck already
   constrains the part adequately. Recognising this is engineering judgement, not laziness; a
   fixture is an investment and must be justified (L0.1.3, L0.1.4, L52).

### 29. Summary
Manufacturing consists of five process families: removal, forming, joining, casting and additive.
Each imposes a fundamentally different load on the workpiece — high cyclic force, high force with
springback, heat, none, and none respectively. The fixture's job, its size, its material and its
failure modes all follow from which family is acting. Parts arriving from casting, forming or
welding carry variation you did not create and must design around.

### 30. Key takeaways
- **The process defines the fixture** — never the part alone.
- Removal → design against **force**. Joining → design against **heat**. Forming → design against
  **springback**. Checking → design against **your own influence**.
- High material removal means big forces, big chip volumes, **and residual stress movement**.
- Cast, forged and welded parts have no reliable datum until you create one.
- The same part in six processes needs six fixtures.

---
---

## LESSON L0.1.2 — THE FACTORY CHAIN AND WHERE YOU SIT IN IT

### 1. Lesson title
**L0.1.2 — The factory chain: design → process planning → tooling → production → inspection → despatch**

### 2. Learning objective
By the end of this lesson you will be able to draw the complete industrial chain from customer
requirement to despatched part, state precisely where the fixture design engineer sits, list the
inputs you must receive and the outputs you must deliver, and quantify why errors must be caught
early.

### 3. Prerequisites
L0.1.1.

### 4. Why the topic matters
A fixture engineer who does not understand the chain becomes a bottleneck. You will be asked for a
fixture before the process plan exists. You will be given a drawing with a revision that has already
been superseded. You will deliver a perfect fixture for an operation that was moved to a different
machine last week.

Knowing the chain tells you **what to demand before you start** and **who to inform when something
changes**. This is not administration — it is the difference between a fixture that works and an
expensive steel ornament.

### 5. Simple explanation
A part travels through a factory like this:

Somebody wants a part → somebody designs it → somebody decides how to make it → somebody makes the
tools to make it → somebody makes it → somebody checks it → it ships.

You are the fourth "somebody". You cannot start until the third has finished, and the fifth cannot
start until you have.

### 6. Engineering explanation

**The full industrial chain (11 stages):**

| # | Stage | Owner | Key output |
|---|---|---|---|
| 1 | Customer requirement | Customer / Sales | Specification, volume, price, delivery |
| 2 | Product design | Design engineering | Component & assembly drawings, GD&T, material |
| 3 | Design feasibility / DFM review | Design + Manufacturing | Confirmed manufacturable design |
| 4 | **Process planning** | Process / Manufacturing engineering | Operation sequence, machine selection, cycle time |
| 5 | **Tooling & fixture design** ← **YOU** | Fixture design engineering | Fixture design, drawings, BOM, calculations |
| 6 | Tooling manufacture | Toolroom / vendor | Manufactured fixture components |
| 7 | Fixture assembly & inspection | Toolroom / Quality | Assembled, verified fixture |
| 8 | Production setup & trial | Production + Fixture engineer | Approved first-off part |
| 9 | Series production | Production | Conforming parts at rate |
| 10 | Inspection & quality | Quality / Metrology | Inspection reports, capability data |
| 11 | Despatch | Logistics | Parts to customer |
| ↺ | Continuous improvement | Everyone | Revisions, cost-downs, fixture modifications |

**Your position (stage 5) in detail:**

**Inputs you MUST have before you start** (if any is missing, ask — do not guess):
1. Component drawing at the **current revision**, with GD&T `[PROJ]`
2. Assembly drawing / part function context `[PROJ]`
3. Material and raw-material condition (bar, casting, forging, weldment) `[PROJ]`
4. **Process plan** — which operation is this fixture for, and what came before it `[PROJ]`
5. Machine specification — model, table size, travels, spindle power, T-slot layout `[MFR]`
6. Production volume and cycle-time target `[PROJ]`
7. Inspection requirements and critical characteristics `[PROJ]`
8. Budget and delivery date `[PROJ]`

**Outputs you MUST deliver:**
1. Fixture concept with justification
2. Design calculations (cutting force, clamp force, rigidity)
3. 3D CAD model and assembly
4. Manufacturing drawings with GD&T
5. Bill of Materials (made and bought)
6. Cost estimate
7. Inspection plan for the fixture
8. Setup and operator instructions
9. Trial report and acceptance documentation

**The critical dependency:** you are downstream of process planning and upstream of tooling
manufacture. A change at stage 4 invalidates your work at stage 5. A mistake at stage 5 is
discovered — expensively — at stage 8.

### 7. Terminology

| Term | Definition |
|---|---|
| **Process plan / routing** | The documented sequence of operations to make a part |
| **Operation (OP)** | One machine setup's worth of work, numbered OP10, OP20, OP30… |
| **Cycle time** | Time to produce one part in one operation |
| **Lead time** | Elapsed time from order to delivery |
| **First-off / first article** | The first part made with new tooling, fully inspected before release |
| **Production release** | Formal authorisation to run series production |
| **Concession / deviation** | Approved permission to accept a non-conforming part |
| **ECN / ECR** | Engineering Change Note / Request — formal design change |
| **Revision** | The version identifier of a drawing (Rev A, Rev B…) |
| **Critical characteristic** | A feature whose failure affects safety or function; specially controlled |

### 8. Principle

> **THE COST OF CORRECTING AN ERROR MULTIPLIES BY ROUGHLY 10× AT EVERY STAGE IT SURVIVES.**
> An error caught in design costs an eraser. The same error caught by the customer costs a recall.
> This 1 : 10 : 100 : 1000 escalation `[GUIDE]` is the single strongest argument for design reviews
> (L54), calculations (L20) and checking your inputs before you start.

### 9. Industrial application
A real and extremely common failure sequence:

```
Monday    Process planning decides OP20 runs on VMC-3 (BT40, 7.5 kW).
Tuesday   You receive the process plan and begin the fixture design.
Thursday  Production moves OP20 to VMC-7 (BT30, 3.7 kW, smaller table) because
          VMC-3 is committed to another job. NOBODY TELLS YOU.
Week 3    Fixture is manufactured — 480 mm long.
Week 4    Fixture does not fit VMC-7's 400 mm table. Spindle power is
          insufficient for the planned depth of cut anyway.
Result    3 weeks lost, fixture scrapped or heavily modified.
```

**The engineering defence is procedural, not technical:** a signed Design Input Sheet (Template T-01,
delivered at L53.1) that records the machine, and a change-notification agreement. Fixture engineers
who skip this step learn it the expensive way exactly once.

### 10. Design rules
- **R1** — Never begin a fixture design without a written, current-revision **Design Input Sheet**.
- **R2** — Always confirm the **drawing revision** on the day you start and again before release.
- **R3** — Always confirm the **specific machine** (not just "a VMC") — table size, T-slots, travels, power.
- **R4** — Always confirm **what operation precedes yours** — it determines which surfaces are machined
  and therefore which surfaces you may locate on.
- **R5** — Register yourself as an affected party for engineering changes on that part.

### 11. Rules of thumb
- Error-correction cost escalates ~10× per stage `[GUIDE]`.
- Roughly **70–80% of a product's total cost is committed by the end of design**, even though most of
  the money is spent later `[GUIDE]`.
- Fixture design typically consumes 5–15% of a project's tooling budget but determines a far larger
  share of its production outcome `[PRACTICE] — varies by industry, must be confirmed`.
- If you find yourself guessing an input, **stop and ask**. Every hour spent confirming inputs saves
  roughly a day downstream `[PRACTICE]`.

### 12. Formulae

**Cost-of-error escalation (illustrative model)** `[GUIDE]`
```
C_stage = C_design × 10^(n)
```
| Variable | Meaning |
|---|---|
| C_design | Cost to correct the error at design stage |
| n | Number of stages the error survives (0, 1, 2, 3…) |
| C_stage | Cost to correct it at that later stage |

*This is a widely used industrial heuristic, not a physical law. Actual multipliers vary by industry
and must be confirmed against your own quality-cost data.*

**Total cost of a fixture error**
```
C_total = C_rework + C_scrap + C_delay + C_lost_production
```

### 13. Worked numerical example

**Problem:** A dowel-hole position error of 2 mm is introduced in a fixture design. Estimate the cost
of correcting it if it is discovered at (a) design review, (b) during fixture manufacture,
(c) at production trial, (d) after 2,000 parts have shipped to the customer.
Use a design-stage correction cost of ₹2,000 and the 10× escalation heuristic.

```
GIVEN:
  Error                  Dowel hole mislocated by 2 mm
  C_design               ₹2,000                                  [EX-ASSUMED]
  Escalation factor      10× per stage                           [GUIDE]
  Stages surviving       (a) n=0  (b) n=1  (c) n=2  (d) n=3
  Parts shipped in (d)   2,000                                   [EX-ASSUMED]

REQUIRED:
  Correction cost at each of the four discovery points, and the
  engineering conclusion.

ASSUMPTION:
  The 1:10:100:1000 escalation heuristic applies to this organisation.
  This MUST be confirmed against the company's own quality-cost records;
  it is used here only to demonstrate the principle. [GUIDE]

FORMULA:
  C_stage = C_design × 10^n

VARIABLE DEFINITIONS:
  C_design = cost to correct at design stage       (₹)
  n        = number of stages the error survives   (dimensionless)

UNIT CONVERSION:
  None required — all values in ₹.

SUBSTITUTION:
  (a) C = 2,000 × 10⁰
  (b) C = 2,000 × 10¹
  (c) C = 2,000 × 10²
  (d) C = 2,000 × 10³

CALCULATION:
  (a) Design review      C = ₹     2,000
  (b) Fixture manufacture C = ₹    20,000
  (c) Production trial    C = ₹ 2,00,000
  (d) Customer (2000 pcs) C = ₹20,00,000

RESULT:
  Discovery point          Correction cost      Ratio
  ─────────────────────────────────────────────────────
  (a) Design review             ₹2,000            1×
  (b) Fixture manufacture      ₹20,000           10×
  (c) Production trial       ₹2,00,000          100×
  (d) Customer               ₹20,00,000        1000×

SAFETY FACTOR:
  Not applicable — economic estimate, not a strength calculation.

PASS/FAIL:
  Not applicable.

ENGINEERING CONCLUSION:
  A design review costing a few engineer-hours is justified if it catches
  even ONE error of this kind. At discovery point (d) the cost includes
  sorting, rework or scrap of 2,000 parts, customer containment, premium
  freight, and reputational damage — the ₹20,00,000 figure is if anything
  conservative, because it excludes the cost of losing the customer.
  This is why Level 54 (Design Review) is a mandatory part of this program
  and not an optional formality.

SENSITIVITY NOTE:
  The absolute numbers are illustrative. The RATIO is the engineering point,
  and the ratio is remarkably robust across industries. Even a 5× per-stage
  escalation gives a 125× penalty for reaching the customer.
```

### 14. Engineering assumptions
- The 10× heuristic is an industry generalisation `[GUIDE]`, not a measured constant for your factory.
- The design-stage correction cost of ₹2,000 is assumed `[EX-ASSUMED]` — it represents a few hours of
  engineering time and drawing revision.
- Costs exclude intangible consequences (customer confidence, audit findings), which can dominate.

### 15. Diagram

```
        THE FACTORY CHAIN — AND WHERE THE FIXTURE ENGINEER SITS
        (instructional schematic)

   [1] CUSTOMER REQUIREMENT
        │  spec, volume, price, delivery
        ▼
   [2] PRODUCT DESIGN
        │  component drawing + GD&T + material
        ▼
   [3] DFM / FEASIBILITY REVIEW
        │  confirmed manufacturable design
        ▼
   [4] PROCESS PLANNING
        │  OP10 / OP20 / OP30, machine selection, cycle time
        │
        │   ┌─────────── INPUTS YOU MUST RECEIVE ───────────┐
        │   │ drawing (current rev) · assembly · material   │
        │   │ process plan · machine spec · volume          │
        │   │ inspection requirements · budget · date       │
        │   └───────────────────────────────────────────────┘
        ▼
  ╔═══════════════════════════════════════════════════════════╗
  ║ [5] TOOLING & FIXTURE DESIGN          ◄── YOU ARE HERE    ║
  ║     concept → calculations → CAD → GD&T → drawings → BOM  ║
  ╚═══════════════════════════════════════════════════════════╝
        │
        │   ┌─────────── OUTPUTS YOU MUST DELIVER ──────────┐
        │   │ concept + justification · calculations · CAD  │
        │   │ drawings · BOM · cost · inspection plan       │
        │   │ setup instructions · trial report             │
        │   └───────────────────────────────────────────────┘
        ▼
   [6] TOOLING MANUFACTURE          ← error found here costs 10×
        ▼
   [7] FIXTURE ASSEMBLY & INSPECTION
        ▼
   [8] PRODUCTION SETUP & FIRST-OFF  ← error found here costs 100×
        ▼
   [9] SERIES PRODUCTION
        ▼
   [10] INSPECTION & QUALITY
        ▼
   [11] DESPATCH ──────────────────► CUSTOMER
                                     ← error found here costs 1000×
        ╰──────────── ↺ CONTINUOUS IMPROVEMENT ────────────╯
```

### 16. Drawing example
Not applicable at this lesson. Note for later: the **title block** (L0.2.4) is where the chain is
documented on paper — part number, revision, who drew it, who checked it, who approved it, and when.
Those signatures exist precisely because of the escalation principle in §8.

### 17. CAD workflow
Not applicable at this lesson. Habit to start now: create a project folder structure *before* you
model anything —
```
/PROJECT_NNNN
   /01_INPUTS      ← customer drawing, process plan, machine data (READ ONLY)
   /02_CAD         ← your models and assemblies
   /03_DRAWINGS    ← released drawing pack
   /04_CALC        ← calculation sheets
   /05_DOCS        ← BOM, cost, reports
```
The `01_INPUTS` folder being read-only is not bureaucracy: it is how you prove, later, which revision
you designed against. Full file/revision discipline is taught at L24.1.2.

### 18. GD&T application
Not applicable at this lesson. Preview: GD&T lives at stage 2 (product design) and constrains
everything you do at stage 5. If the GD&T is wrong or ambiguous, you must raise it at stage 3 — not
absorb it silently into your fixture.

### 19. Manufacturing method
Not applicable at this lesson (fixture manufacturing is Level 27). Note that stage 6 is where your
drawings meet reality: an unmanufacturable tolerance you specified becomes a phone call, a delay, and
a cost. This is why DFM (L49) is taught before you are considered production-ready.

### 20. Inspection method
Not applicable at this lesson. Note that stages 7 and 10 are both inspection, but of different
things: stage 7 inspects **your fixture**, stage 10 inspects **the parts it produces**. Both are your
concern (L28 and L29 respectively).

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Starting design without a written design input | Wrong machine, wrong revision, wasted weeks |
| 2 | Designing against a superseded drawing revision | Fixture is correct for a part that no longer exists |
| 3 | Assuming "a VMC" rather than confirming the specific machine | Fixture doesn't fit the table or exceeds spindle power |
| 4 | Not knowing which operation precedes yours | Locating on a surface that is still unmachined |
| 5 | Not being on the engineering-change distribution list | You are the last to know about a change that invalidates your design |
| 6 | Skipping the design review to "save time" | Pays back at 10× to 1000× |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Fixture doesn't fit the machine | Machine changed after design started, or never confirmed | Compare fixture envelope to actual machine spec | Modify or remake fixture | Signed Design Input Sheet (T-01) naming the machine |
| Fixture locates on an unmachined surface | Process sequence misunderstood | Check the process plan against your datum scheme | Revise datum scheme | Always obtain the process plan before design |
| Part drawing dimensions don't match reality | Working from a superseded revision | Verify current revision with design engineering | Re-verify design against current rev | Re-confirm revision at start and before release |

### 23. Design checklist
- [ ] Do I have the component drawing at the **current** revision?
- [ ] Do I have the process plan, and do I know which OP this fixture serves?
- [ ] Do I know **which specific machine**, including table size, T-slots, travels and power?
- [ ] Do I know which surfaces are machined *before* this operation?
- [ ] Do I know the production volume and cycle-time target?
- [ ] Do I know the inspection requirements and critical characteristics?
- [ ] Do I have a budget and a delivery date in writing?
- [ ] Am I on the change-notification list for this part?

### 24. Beginner exercise
**E0.1.2-B** — Draw the 11-stage factory chain from memory. Mark where the fixture design engineer
sits. List five inputs you must receive and five outputs you must deliver.

### 25. Intermediate exercise
**E0.1.2-I** — You are handed a component drawing and told "design a fixture for this, we need it in
three weeks." Write the list of questions you must ask before starting, grouped under: PART,
PROCESS, MACHINE, PRODUCTION, QUALITY, COMMERCIAL. Aim for at least 15 questions.

### 26. Advanced exercise
**E0.1.2-A** — A fixture is 80% manufactured when an engineering change moves a hole pattern by 6 mm.
Produce a structured impact assessment covering: (i) which fixture components are affected,
(ii) which can be modified vs must be remade, (iii) cost and schedule impact, (iv) what documentation
must be updated, (v) what you would have done differently at design stage to reduce this exposure.
Then state which single design decision would have made the fixture change-tolerant.

### 27. Interview questions
1. *"What do you need from us before you can start designing a fixture?"*
   **Answer:** Current-revision drawing with GD&T, assembly context, material and raw condition, the
   process plan identifying which OP the fixture serves and what precedes it, the specific machine's
   specification, production volume and cycle-time target, inspection requirements, budget and date.
   *(Reasoning: each input constrains a specific design decision — omit one and you are guessing.)*
2. *"Why do fixture engineers care about drawing revisions?"*
   **Answer:** Because a fixture is a physical embodiment of one revision of a drawing. If the
   drawing changes after the steel is cut, the fixture is wrong and the cost is real. Revision
   control is how you avoid building the right fixture for the wrong part.

### 28. Expert questions
1. *"How would you design a fixture to be tolerant of likely engineering changes?"*
   **Answer:** Identify which features are stable (functional interfaces, main datums) and which are
   likely to move (hole patterns, brackets, non-functional details). Put the stable features into the
   fixture's permanent structure — base, main locators — and put the volatile features into
   **replaceable, doweled sub-plates or inserts**. Then a change means remaking a ₹8,000 insert rather
   than a ₹1,80,000 fixture. This is a deliberate cost trade: modular construction costs slightly more
   initially and saves enormously if change occurs. Justify it with the customer's change history.
2. *"Your process planner and your quality engineer disagree about the datum. Who wins, and how do you
   resolve it?"*
   **Answer:** Neither automatically — the **part's function** wins. The design datum exists to control
   function; the machining datum exists to make the part; the inspection datum exists to verify it.
   The correct resolution is to make them the same wherever possible, and where it is not possible, to
   quantify the transfer error by tolerance stack-up (L23) and prove the part still conforms. Escalate
   with data, not opinion. This exact conflict is taught at L5.3.1.

### 29. Summary
The industrial chain runs from customer requirement through design, process planning, tooling design,
manufacture, trial, production, inspection and despatch. The fixture design engineer occupies stage 5:
downstream of process planning, upstream of tooling manufacture. Eight defined inputs must be received
and nine defined outputs must be delivered. Errors escalate roughly tenfold at every stage they
survive, which is the entire economic justification for confirming inputs and holding design reviews.

### 30. Key takeaways
- You sit at **stage 5 of 11** — you cannot start before process planning, and manufacture cannot start
  before you finish.
- **Eight inputs are mandatory.** If one is missing, ask. Never guess.
- Always confirm **revision** and **specific machine** — the two most common and most expensive omissions.
- Error cost escalates **1 : 10 : 100 : 1000** `[GUIDE]`. This justifies every hour spent on reviews.
- Design change-tolerant fixtures by isolating volatile features into replaceable inserts.

---
---

## LESSON L0.1.3 — PRODUCTION VOLUME AND FIXTURE SOPHISTICATION

### 1. Lesson title
**L0.1.3 — Job-shop, batch and mass production: how volume dictates fixture sophistication**

### 2. Learning objective
By the end of this lesson you will be able to classify a production scenario by type and volume,
and select the appropriate workholding sophistication level — from a standard vise to a dedicated
hydraulic multi-station fixture — with a defensible economic justification.

### 3. Prerequisites
L0.1.1, L0.1.2.

### 4. Why the topic matters
This is the lesson that prevents the two most expensive mistakes in fixture engineering:

- **Over-engineering:** a ₹4,00,000 hydraulic fixture for 40 parts a year. The fixture costs more
  than the parts it holds.
- **Under-engineering:** hand-clamping parts in a vise for a 200,000/year automotive program. Cycle
  time and scrap destroy the business case within a month.

Both mistakes come from designing for the *part* instead of designing for the *production scenario*.
Volume is not a detail — it is a primary design input, ranking alongside the drawing itself.

### 5. Simple explanation
How many parts you are making changes what kind of fixture makes sense.

- Making **one** part? Use whatever you already own. Setup time doesn't matter much.
- Making **fifty**? A simple dedicated fixture pays for itself.
- Making **fifty thousand**? Every second of loading time matters. Automate the clamping.

The fixture must earn its cost from the parts it produces.

### 6. Engineering explanation

**The three production types**

| | **Job / one-off** | **Batch** | **Mass / series** |
|---|---|---|---|
| Typical volume | 1–10 | 10–10,000 per batch | 10,000+ / year |
| Variety | Very high | Medium | Very low |
| Setup frequency | Every part | Every batch | Rare |
| Setup time importance | Low | **Critical** | Negligible |
| Cycle time importance | Low | Medium | **Critical** |
| Workholding | Standard vise, clamps, modular | Dedicated simple, modular | Dedicated, powered, multi-station |
| Operator skill | High | Medium | Low (deliberately) |
| Poka-Yoke need | Low | Medium | **Very high** |
| Fixture budget | Minimal | Moderate | Large — and easily justified |

**The sophistication ladder** (each step adds cost and reduces cycle time / variation):

```
LEVEL 1  Standard vise / clamps on T-slots        cheapest, slowest, most variable
LEVEL 2  Modular fixture from a kit
LEVEL 3  Simple dedicated fixture, manual clamps
LEVEL 4  Dedicated fixture, quick-acting clamps (toggle, cam, C-washer)
LEVEL 5  Dedicated fixture, pneumatic clamping
LEVEL 6  Dedicated fixture, hydraulic clamping
LEVEL 7  Multi-station / tombstone, powered, sensed
LEVEL 8  Automated / robot-loaded, fully sensed, Poka-Yoked
                                                  most expensive, fastest, most repeatable
```

**What actually drives the choice** — five factors, in priority order:

1. **Annual volume** — how many times will the fixture be used?
2. **Cycle time target** — is loading time on the critical path?
3. **Accuracy and repeatability requirement** — can a manual clamp hold it?
4. **Number of setups / variants** — one part or a family?
5. **Labour cost and operator availability** — automation displaces labour cost

**The economic core:** a fixture is justified when the value it creates over its life exceeds its
cost. Value comes from three sources: **reduced cycle time**, **reduced scrap**, and **reduced
setup time**. You must be able to quantify at least one of them.

### 7. Terminology

| Term | Definition |
|---|---|
| **Job shop** | Low-volume, high-variety production |
| **Batch production** | Parts produced in defined lots, machine changes over between lots |
| **Mass / series production** | High volume, low variety, dedicated equipment |
| **Takt time** | Available production time ÷ customer demand — the rate you must achieve |
| **Cycle time** | Actual time to produce one part |
| **Load/unload time** | Time to remove the finished part and load the next |
| **Changeover / setup time** | Time to switch production from one part to another |
| **SMED** | Single-Minute Exchange of Die — methodology for rapid changeover |
| **Amortisation** | Spreading a fixed cost across the units it produces |
| **Payback period** | Time for accumulated savings to equal the initial investment |
| **EAU** | Estimated Annual Usage (annual volume) |

### 8. Principle

> **THE FIXTURE MUST EARN ITS COST FROM THE PARTS IT PRODUCES.**
> Cost per part = fixture cost ÷ total parts produced over its life.
> If you cannot state that number, you cannot justify the design — and you should not start it.

### 9. Industrial application

Three real scenarios, same geometric part, three correct answers:

**Scenario A — Prototype shop, 5 parts, delivery in 4 days**
Correct answer: standard vise with soft jaws machined to suit, or a simple plate with two dowels and
two strap clamps. Cost ~₹8,000. Anything more sophisticated cannot be designed and built in 4 days,
and would cost more than the parts.

**Scenario B — General engineering, 400 parts/year in batches of 50**
Correct answer: dedicated fixture with quick-acting manual clamps (toggle or C-washer). Cost
~₹85,000. Setup time between batches matters, load/unload time matters moderately. Powered clamping
is not justified at 400 parts/year.

**Scenario C — Automotive tier-1, 120,000 parts/year, takt 22 s**
Correct answer: hydraulic multi-station fixture with part-presence sensing, clamp confirmation and
full Poka-Yoke. Cost ~₹6,50,000. At 120,000 parts/year, saving 5 seconds of load time saves
167 hours of machine time annually — the fixture pays for itself on cycle time alone.

*All costs `[EX-ASSUMED]` for illustration and must be confirmed against local rates.*

**The engineering point:** an engineer who gives Scenario C's answer to Scenario A has failed just as
completely as one who gives Scenario A's answer to Scenario C.

### 10. Design rules
- **R1** — Establish annual volume and expected fixture life **before** choosing a concept.
- **R2** — Calculate fixture cost per part. State it in your concept justification.
- **R3** — Below ~50 parts/year, justify why standard workholding is insufficient before designing anything.
- **R4** — Above ~10,000 parts/year, justify why powered clamping is *not* required.
- **R5** — At high volume, design for **wear and maintenance** — the fixture must survive its life
  (replaceable locators, hardened wear surfaces).
- **R6** — At high volume, Poka-Yoke is mandatory, not optional: one operator error repeated across a
  shift is a containment event.

### 11. Rules of thumb
*(All `[PRACTICE]` — these are orientation values, not rules. They vary enormously by industry,
labour cost and machine rate, and must be confirmed against your own economics.)*
- Below ~50 parts/year: standard or modular workholding usually wins.
- ~50–1,000 parts/year: simple dedicated fixture with manual quick-clamps.
- ~1,000–10,000 parts/year: dedicated fixture; consider pneumatic clamping.
- Above ~10,000 parts/year: powered clamping, multi-station, sensing, Poka-Yoke.
- A fixture is commonly expected to pay back within **12 months** in automotive `[PRACTICE]`.
- Manual clamping typically takes 3–8 s per clamp; powered clamping typically under 2 s for all
  clamps simultaneously `[GUIDE] — must be confirmed for your specific clamps`.

### 12. Formulae

**Fixture cost per part**
```
C_pp = C_fixture / N_total
```

**Total parts over fixture life**
```
N_total = EAU × L_years
```

**Annual time saving from reduced cycle time**
```
T_saved = (t_old − t_new) × EAU
```

**Annual cost saving**
```
S_annual = T_saved × R_machine
```

**Payback period**
```
P = C_fixture / S_annual
```

| Variable | Meaning | SI / practical unit |
|---|---|---|
| C_pp | Fixture cost per part | ₹/part |
| C_fixture | Total fixture cost | ₹ |
| N_total | Total parts produced over fixture life | parts |
| EAU | Estimated annual usage | parts/year |
| L_years | Fixture life | years |
| t_old, t_new | Cycle time before / after | s |
| T_saved | Time saved per year | s (convert to h) |
| R_machine | Machine hour rate | ₹/h |
| S_annual | Annual saving | ₹/year |
| P | Payback period | years |

### 13. Worked numerical example

**Problem:** A component currently runs at 95 s cycle time using a manual fixture. A proposed
hydraulic fixture costing ₹6,50,000 would reduce cycle time to 78 s. Annual volume is 45,000 parts.
The machine hour rate is ₹1,400/h. Expected fixture life is 5 years.
Determine: (a) fixture cost per part, (b) annual time saving, (c) annual cost saving, (d) payback
period. Recommend whether to proceed.

```
GIVEN:
  Current cycle time      t_old     = 95 s                        [PROJ]
  Proposed cycle time     t_new     = 78 s                        [PROJ]
  Fixture cost            C_fixture = ₹6,50,000                   [EX-ASSUMED]
  Annual volume           EAU       = 45,000 parts/year           [PROJ]
  Machine hour rate       R_machine = ₹1,400/h                    [EX-ASSUMED]
  Fixture life            L_years   = 5 years                     [EX-ASSUMED]

REQUIRED:
  (a) Fixture cost per part
  (b) Annual time saving (hours)
  (c) Annual cost saving
  (d) Payback period
  (e) Recommendation

ASSUMPTION:
  1. Volume remains constant at 45,000/year for 5 years.
  2. The machine hour rate fully represents the value of machine time
     (i.e. the machine is capacity-constrained, so time saved is time sold).
     If the machine is NOT capacity-constrained, the saving is only the
     variable cost, not the full hour rate. THIS MUST BE CONFIRMED. [PRACTICE]
  3. Maintenance cost over life is neglected in this first-pass analysis.
  4. Scrap reduction benefit is neglected (it would improve the case further).

FORMULA:
  N_total  = EAU × L_years
  C_pp     = C_fixture / N_total
  T_saved  = (t_old − t_new) × EAU
  S_annual = T_saved × R_machine
  P        = C_fixture / S_annual

VARIABLE DEFINITIONS:
  As tabulated in §12 above.

UNIT CONVERSION:
  Time saving per part = 95 − 78 = 17 s
  1 hour = 3600 s

SUBSTITUTION:
  N_total  = 45,000 × 5
  C_pp     = 650000 / N_total
  T_saved  = 17 × 45,000  [s/year]  → ÷ 3600 → [h/year]
  S_annual = T_saved(h) × 1400
  P        = 650000 / S_annual

CALCULATION:
  N_total  = 225,000 parts
  C_pp     = 650000 / 225000        = ₹2.89 per part

  T_saved  = 17 × 45,000            = 765,000 s/year
           = 765000 / 3600          = 212.5 h/year

  S_annual = 212.5 × 1400           = ₹2,97,500 per year

  P        = 650000 / 297500        = 2.18 years

RESULT:
  (a) Fixture cost per part    = ₹2.89
  (b) Annual time saving       = 212.5 machine-hours per year
  (c) Annual cost saving       = ₹2,97,500 per year
  (d) Payback period           = 2.18 years (≈26 months)

SAFETY FACTOR:
  Not applicable — economic analysis.
  However, a sensitivity margin IS appropriate: see note below.

PASS/FAIL:
  Against a typical automotive 12-month payback expectation [PRACTICE]:
  FAIL on payback alone (26 months vs 12 months target).
  Against a 3-year general-engineering criterion:  PASS.

ENGINEERING CONCLUSION:
  The decision depends on the acceptance criterion, which is a BUSINESS
  input, not an engineering one. Recommendation:

  1. If the 12-month payback rule applies, this proposal fails on cycle
     time alone and must be justified on additional grounds — most likely
     SCRAP REDUCTION and REPEATABILITY, which were excluded here.
     Quantify those before rejecting the fixture.
  2. Ask whether a PNEUMATIC fixture (lower cost, perhaps ₹2,80,000)
     could achieve most of the cycle-time gain. If it reached 82 s, the
     payback would be roughly 1.2 years — a far stronger case.
  3. Confirm assumption 2. If the machine is NOT capacity-constrained,
     the ₹1,400/h rate overstates the saving considerably and the
     project's true payback is longer.

  The engineering answer is not "yes" or "no" — it is "here are the three
  numbers the decision actually depends on."

SENSITIVITY NOTE:
  Payback is most sensitive to the machine hour rate and to volume.
  If EAU falls to 30,000/year, payback stretches to 3.3 years.
  If the hour rate is really ₹900/h, payback stretches to 3.4 years.
  Always test the downside volume case before committing to a large fixture.
```

### 14. Engineering assumptions
- Constant volume over 5 years — in reality, volumes decline late in a product's life. A declining
  profile would worsen payback.
- Full machine hour rate as the value of saved time — only valid if the machine is capacity-constrained.
- Maintenance, spares and downtime costs excluded from this first pass.
- Scrap-reduction benefit excluded — including it would strengthen the case, and it should be
  quantified before a final decision.

### 15. Diagram

```
        VOLUME vs FIXTURE SOPHISTICATION
        (instructional schematic — boundaries are indicative [PRACTICE],
         not standards, and shift with labour cost and machine rate)

  SOPHISTICATION
       ▲
   L8  │                                              ┌─────── automated /
       │                                              │        robot-loaded
   L7  │                                    ┌─────────┘        multi-station
       │                                    │
   L6  │                          ┌─────────┘  hydraulic
       │                          │
   L5  │                ┌─────────┘  pneumatic
       │                │
   L4  │        ┌───────┘  quick-acting manual clamps
       │        │
   L3  │   ┌────┘  simple dedicated fixture
       │   │
   L2  │ ┌─┘  modular kit
       │ │
   L1  │─┘  standard vise / T-slot clamps
       └──┬────────┬──────────┬───────────┬────────────┬──────────►
          1       50        1,000      10,000      100,000    ANNUAL
                                                               VOLUME
       ◄── JOB ──►◄──── BATCH ─────►◄──── MASS / SERIES ─────►

  ┌───────────────────────────────────────────────────────────────┐
  │ THE TWO EXPENSIVE ERRORS                                      │
  │                                                               │
  │   ABOVE the curve  →  OVER-ENGINEERED                         │
  │                       fixture costs more than it saves        │
  │                                                               │
  │   BELOW the curve  →  UNDER-ENGINEERED                        │
  │                       cycle time and scrap destroy the        │
  │                       business case                           │
  └───────────────────────────────────────────────────────────────┘
```

### 16. Drawing example
Not applicable at this lesson. Note: production volume rarely appears on the component drawing —
it comes from the Design Input Sheet (T-01) or the customer's schedule. This is exactly why L0.1.2
insists you obtain it in writing before starting.

### 17. CAD workflow
Not applicable at this lesson. Forward-looking note: at high volume you will model **replaceable
wear components as separate parts** with their own part numbers from the very first CAD session, so
spares can be ordered without dissecting an assembly later. Library and configuration strategy is
taught at L19.10 and L24.2.3.

### 18. GD&T application
Not applicable at this lesson. Preview of the volume link: at high volume, locator **wear** consumes
tolerance over the fixture's life. This must be budgeted in the tolerance stack-up (L23.10) — you
allocate a share of the part tolerance to wear, which is why high-volume fixtures are toleranced
tighter when new than low-volume ones.

### 19. Manufacturing method
Not applicable at this lesson. Volume link: high-volume fixtures justify hardened and ground
locators, replaceable bushes and wear plates. Low-volume fixtures often do not — an unhardened
locator that would fail in 100,000 cycles is perfectly adequate for 200.

### 20. Inspection method
Not applicable at this lesson. Volume link: high-volume fixtures require **periodic re-inspection**
at defined intervals to detect wear before it produces scrap (taught at L28.2.6). Low-volume fixtures
are typically inspected once, at manufacture.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Designing without knowing annual volume | Wrong sophistication level; either wasted money or failed cycle time |
| 2 | Over-engineering a low-volume fixture | Fixture costs more than the parts; project rejected |
| 3 | Under-engineering a high-volume fixture | Cycle time missed, scrap high, fixture worn out early |
| 4 | Quoting a payback without stating the assumptions | Analysis collapses under the first question in the review |
| 5 | Using full machine hour rate when the machine is not capacity-constrained | Saving overstated; payback fictional |
| 6 | Ignoring wear life at high volume | Fixture accurate at part 1, producing scrap by part 40,000 |
| 7 | Forgetting Poka-Yoke at high volume | One operator error repeated for a shift = containment event |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Fixture proposal rejected by management | Payback not quantified, or too long | Recompute with scrap and setup savings included | Present full business case, or propose a cheaper actuation level | Always compute payback before proposing |
| Cycle time target missed in production | Load/unload underestimated at design | Time the actual load/unload sequence | Convert manual clamps to powered; reduce clamp count | Include load/unload time in the concept comparison (L13.4) |
| Fixture worn out well before end of life | Sophistication matched volume, but wear life did not | Measure locator wear; compare to cycles run | Fit hardened replaceable locators | Design wear budget at concept stage for high volume |
| Parts good at start of life, drifting later | Locator wear consuming tolerance | Re-inspect fixture against its inspection report | Replace wear components | Scheduled re-inspection interval (L28.2.6) |

### 23. Design checklist
- [ ] What is the estimated annual usage (EAU)?
- [ ] What is the expected fixture life in years, and total parts over life?
- [ ] What is the cycle-time (or takt) target, and is load/unload on the critical path?
- [ ] What is the fixture cost per part, and is it acceptable?
- [ ] What is the payback period, and against what criterion?
- [ ] Have I tested the downside volume case?
- [ ] Is the machine capacity-constrained (does saved time have full value)?
- [ ] At this volume, do I need hardened/replaceable wear components?
- [ ] At this volume, is Poka-Yoke mandatory?
- [ ] Have I considered one sophistication level *lower* and justified rejecting it?

### 24. Beginner exercise
**E0.1.3-B** — A fixture costs ₹1,80,000. Calculate the fixture cost per part if it produces
(a) 500 parts, (b) 5,000 parts, (c) 50,000 parts over its life. Comment on which scenarios make the
fixture easy to justify and which do not.

### 25. Intermediate exercise
**E0.1.3-I** — For each scenario, select a sophistication level (L1–L8) and justify it in three lines:
(a) 8 prototype parts, needed in 5 days
(b) 600 parts/year in batches of 75, general engineering
(c) 90,000 parts/year, takt time 28 s, automotive
(d) 25 parts/year of a large, heavy fabricated component
(e) 4,000 parts/year of a family of 3 similar variants

### 26. Advanced exercise
**E0.1.3-A** — A manual fixture (₹1,10,000, 88 s cycle) and a pneumatic fixture (₹3,20,000, 71 s cycle)
are proposed for a part with EAU 38,000, machine rate ₹1,250/h, life 5 years.
(i) Compute cost per part and payback for both.
(ii) Determine the **break-even annual volume** at which the pneumatic option becomes the better
choice on cycle time alone.
(iii) The manual fixture is expected to produce 1.8% scrap; the pneumatic 0.4%. Part material+process
value is ₹340. Recompute the comparison including scrap.
(iv) State your recommendation and the three assumptions on which it most depends.

### 27. Interview questions
1. *"How does production volume affect your fixture design?"*
   **Answer:** It determines sophistication, actuation, wear provision, Poka-Yoke and maintenance
   strategy. Low volume favours standard or simple dedicated workholding because setup and cost
   dominate; high volume favours powered, sensed, multi-station fixtures because cycle time and
   repeatability dominate, and it justifies hardened replaceable wear components because the fixture
   must survive its life. *(Reasoning: the fixture must earn its cost from the parts it produces.)*
2. *"A customer asks for a hydraulic fixture for 200 parts a year. What do you say?"*
   **Answer:** I ask why. There may be a legitimate reason — extremely high clamp force, a part that
   deforms under manual clamping, or an accuracy requirement manual clamping cannot meet. If none
   applies, I present the cost per part and propose a simpler alternative, with the comparison in
   writing. The customer may still choose hydraulics; my job is to ensure it is an informed choice.

### 28. Expert questions
1. *"You have a part family of 6 variants, total 30,000/year, but each variant runs in small batches.
   Dedicated fixtures or one flexible fixture?"*
   **Answer:** The volume suggests dedication, but the batch pattern suggests changeover dominates.
   Quantify: total changeovers per year × changeover time × machine rate versus the cost of six
   dedicated fixtures plus their storage and maintenance. Usually the answer is a **common base with
   change-parts** — one accurate, expensive base plate with zero-point or doweled location, plus six
   inexpensive change-plates. You buy accuracy once and variety cheaply, and changeover drops to
   minutes. This is the modular-vs-dedicated calculation taught at L48.12.
2. *"When is a longer payback period the correct engineering recommendation?"*
   **Answer:** When the fixture delivers a benefit the payback model does not capture — a safety
   improvement, an ergonomic fix preventing injury, elimination of a critical-characteristic escape
   risk, or a capability improvement that makes a currently marginal process capable. Financial
   models capture cycle time and scrap well; they capture risk poorly. The engineer's duty is to make
   the uncaptured value explicit so the decision-maker sees the whole picture rather than only the
   number that was easy to compute.

### 29. Summary
Production scenarios divide into job, batch and mass production, and the appropriate workholding
spans eight sophistication levels from a standard vise to a fully automated multi-station fixture.
Volume, cycle-time target, accuracy requirement, variant count and labour cost drive the selection.
A fixture is justified by cost per part and payback period, computed from explicit, stated assumptions.
Over-engineering and under-engineering are equally serious failures of engineering judgement.

### 30. Key takeaways
- **Volume is a primary design input**, not a detail. Get it before you start.
- **The fixture must earn its cost from the parts it produces** — state the cost per part.
- Low volume → simple. High volume → powered, sensed, Poka-Yoked, wear-provisioned.
- Always compute payback, always state the assumptions, always test the downside volume.
- Always consider one level *lower* and justify why you rejected it.

---

## LESSON L0.1.4 — THE COST STRUCTURE OF A PART

### 1. Lesson title
**L0.1.4 — Cost of a part: material, cycle time, tooling amortisation and scrap — why fixtures are an economic decision**

### 2. Learning objective
By the end of this lesson you will be able to break down the cost of a machined part into its four
components, calculate how a fixture affects each, and build a complete economic justification for a
fixture that will survive a management review.

### 3. Prerequisites
L0.1.1, L0.1.2, L0.1.3.

### 4. Why the topic matters
Fixture designs are not approved by engineers. They are approved by people who ask "what does it
cost and what do we get?" An engineer who cannot answer that question in numbers will watch good
designs get rejected and bad ones get built.

More importantly: cost analysis is how you discover that your elegant fixture is solving the wrong
problem. If scrap is 6% and you designed for cycle time, you optimised the wrong variable.

### 5. Simple explanation
Every part costs four things:

1. The **material** you start with
2. The **time** on the machine
3. A share of the **tooling** that made it
4. The cost of the parts you **threw away** (scrap)

A fixture affects the last three. Good fixtures reduce time and scrap. Every fixture adds tooling cost.

### 6. Engineering explanation

**The four cost components of a machined part**

```
C_part = C_material + C_machining + C_tooling + C_quality
```

**1. Material cost `C_material`**
```
C_material = m_stock × rate_material − recovery_scrap
```
Driven by stock size and grade. The fixture engineer's influence is indirect but real: a fixture
enabling machining closer to net shape, or allowing smaller stock, reduces this.

**2. Machining cost `C_machining`**
```
C_machining = (t_cycle / 3600) × R_machine
```
where `t_cycle` is in seconds and `R_machine` is the machine hour rate (₹/h).
`t_cycle` = cutting time + non-cutting time + **load/unload time**.

**This is where fixtures dominate.** Cutting time is set by the process planner and toolpath. But
load/unload time is set almost entirely by the fixture design. A fixture with eight hand-tightened
nuts and one with a single hydraulic lever produce identical parts — with very different
`t_cycle`.

**3. Tooling amortisation `C_tooling`**
```
C_tooling = C_fixture / N_total
```
This is the cost your fixture *adds*. It is unavoidable and must be earned back.

**4. Quality / scrap cost `C_quality`**
```
C_quality = (scrap_rate × C_part_value) + C_inspection + C_rework
```
A fixture that improves repeatability reduces scrap. At high part values, this is frequently the
**largest** saving a fixture delivers — and the one engineers most often forget to quantify.

**The fixture engineer's levers, ranked by typical impact:**

| Lever | Mechanism | Typical magnitude |
|---|---|---|
| Reduce load/unload time | Faster clamping, better access | Seconds per part × every part |
| Reduce scrap | Better repeatability, Poka-Yoke | Can exceed all other savings |
| Reduce setup/changeover | Quick-change, zero-point | Large in batch production |
| Enable fewer operations | Multi-face, multi-op fixture | Eliminates an entire setup's cost |
| Enable a faster process | Rigidity permitting heavier cuts | Reduces cutting time itself |
| Reduce inspection | Poka-Yoke, in-fixture checking | Moderate |

**The insight most beginners miss:** the last two levers are the powerful ones. Making load/unload
2 seconds faster is worth something. Eliminating an entire second setup — its machine time, its
handling, its datum-transfer error and its fixture — is worth far more.

### 7. Terminology

| Term | Definition |
|---|---|
| **Machine hour rate** | Fully-burdened cost of running a machine for one hour (₹/h) |
| **Burden / overhead** | Indirect costs allocated to production (building, supervision, power) |
| **Direct cost** | Cost traceable to one part (material, direct labour) |
| **Amortisation** | Spreading a one-time cost across the units produced |
| **Scrap** | Non-conforming parts that cannot be recovered |
| **Rework** | Non-conforming parts corrected by additional operations |
| **Yield** | Percentage of parts produced that conform |
| **Value-added time** | Time when the tool is actually cutting |
| **Non-value-added time** | Loading, unloading, indexing, tool changes, waiting |
| **PPAP / capability** | Formal demonstration that a process reliably produces conforming parts |

### 8. Principle

> **A FIXTURE IS AN INVESTMENT, NOT AN EXPENSE.**
> It is justified by what it saves — cycle time, scrap, setups, operations — over its life.
> Quantify the saving, or expect the design to be rejected.
> And quantify **scrap** before **cycle time**: it is usually the bigger number and is almost always
> the one that was ignored.

### 9. Industrial application

A real justification that succeeded, in the form it was presented:

```
PROPOSAL: Replace manual OP20 fixture with dedicated hydraulic fixture
PART: Transmission housing        EAU: 28,000/year      Part value: ₹4,100

CURRENT STATE                          PROPOSED
  Cycle time      142 s                  118 s
  Load/unload      38 s                   14 s
  Scrap rate      2.4 %                  0.5 %
  Setups            2                      1  (multi-face fixture)

SAVINGS PER YEAR
  Cycle time   (142−118) × 28,000 / 3600 = 186.7 h × ₹1,500/h  = ₹2,80,000
  Scrap        (2.4−0.5)% × 28,000 × ₹4,100                    = ₹21,80,000  ◄──
  Setup elim.  one fixture + one setup's handling               = ₹3,40,000
                                                        TOTAL   = ₹28,00,000

FIXTURE COST                                                    = ₹7,20,000
PAYBACK                                                         = 3.1 months
```
*Figures `[EX-ASSUMED]` for illustration; structure is what matters.*

**Note what dominates: scrap reduction is 78% of the benefit.** The engineer who presented only the
cycle-time saving would have shown ₹2,80,000 against a ₹7,20,000 cost — and the project would have
been rejected. Same fixture, same facts, opposite outcome, because of which numbers were quantified.

### 10. Design rules
- **R1** — Quantify all four cost components before proposing a fixture.
- **R2** — Always quantify the **scrap-reduction** benefit. It is usually the largest and is usually omitted.
- **R3** — Include **load/unload time** in every concept comparison (L13.4), not just cutting time.
- **R4** — If a fixture can eliminate an entire operation or setup, that saving dominates everything else — pursue it first.
- **R5** — State your assumptions explicitly. An unstated assumption is a rejected proposal.
- **R6** — Present the downside case as well as the expected case. It builds credibility, and reviewers will ask anyway.

### 11. Rules of thumb
*(All `[PRACTICE]` / `[GUIDE]`, highly organisation-specific — must be confirmed locally)*
- Machine hour rates commonly span ₹800–₹3,000/h depending on machine class and region.
- Load/unload commonly represents 10–30% of cycle time in manual-fixture machining.
- Scrap costs are frequently underestimated because rework labour and re-inspection are not counted.
- A fixture saving one full setup typically pays back faster than any clamping improvement.
- If your justification rests on a single assumption, it is fragile — find a second, independent benefit.

### 12. Formulae

**Total part cost**
```
C_part = C_material + C_machining + C_tooling + C_quality
```

**Machining cost**
```
C_machining = (t_cycle / 3600) × R_machine
```

**Tooling amortisation**
```
C_tooling = C_fixture / N_total          where   N_total = EAU × L_years
```

**Scrap cost per good part**
```
C_scrap = (s / (1 − s)) × C_part_value
```
where `s` = scrap rate as a decimal fraction.
*(This form is used because scrap must be spread over the* good *parts produced, not all parts started.)*

**Annual scrap saving**
```
S_scrap = (s_old − s_new) × EAU × C_part_value
```

**Total annual saving**
```
S_total = S_cycle + S_scrap + S_setup + S_operation
```

**Payback period**
```
P = C_fixture / S_total
```

**Return on investment over life**
```
ROI = ((S_total × L_years − C_fixture) / C_fixture) × 100 %
```

| Variable | Meaning | Unit |
|---|---|---|
| s | Scrap rate (decimal) | — |
| C_part_value | Value of a part at the point it is scrapped | ₹ |
| EAU | Estimated annual usage | parts/year |
| L_years | Fixture life | years |
| R_machine | Machine hour rate | ₹/h |
| t_cycle | Cycle time | s |

### 13. Worked numerical example

**Problem:** A bracket is machined at 110 s cycle time with a 3.1% scrap rate on a manual fixture.
A proposed dedicated fixture (₹4,80,000, 4-year life) would reduce cycle time to 92 s and scrap to
0.7%. EAU is 32,000 parts/year. Machine hour rate is ₹1,250/h. Part value at scrap point is ₹880.

Determine the annual saving from each source, the total, the payback period, the ROI over life, and
the fixture cost per part. Make a recommendation.

```
GIVEN:
  Current cycle time      t_old  = 110 s                        [PROJ]
  Proposed cycle time     t_new  =  92 s                        [PROJ]
  Current scrap rate      s_old  = 3.1 % = 0.031                [PROJ]
  Proposed scrap rate     s_new  = 0.7 % = 0.007                [PROJ]
  Fixture cost            C_fix  = ₹4,80,000                    [EX-ASSUMED]
  Fixture life            L      = 4 years                      [EX-ASSUMED]
  Annual volume           EAU    = 32,000 parts/year            [PROJ]
  Machine hour rate       R      = ₹1,250/h                     [EX-ASSUMED]
  Part value at scrap     C_pv   = ₹880                         [EX-ASSUMED]

REQUIRED:
  (a) Annual saving from cycle time
  (b) Annual saving from scrap reduction
  (c) Total annual saving
  (d) Payback period
  (e) ROI over 4-year life
  (f) Fixture cost per part
  (g) Recommendation

ASSUMPTION:
  1. Volume constant at 32,000/year over 4 years.
  2. Machine is capacity-constrained, so saved machine time has full
     value at the hour rate. MUST BE CONFIRMED. [PRACTICE]
  3. The predicted scrap reduction (3.1% → 0.7%) is achievable. This is
     an ENGINEERING PREDICTION and is the largest risk in the analysis.
     It should be supported by identifying the specific scrap causes the
     fixture eliminates. [PROJ]
  4. Maintenance and spares excluded from this first pass.

FORMULA:
  S_cycle = ((t_old − t_new) × EAU / 3600) × R
  S_scrap = (s_old − s_new) × EAU × C_pv
  S_total = S_cycle + S_scrap
  P       = C_fix / S_total
  ROI     = ((S_total × L − C_fix) / C_fix) × 100
  C_pp    = C_fix / (EAU × L)

VARIABLE DEFINITIONS:
  As tabulated in §12.

UNIT CONVERSION:
  Cycle time saving = 110 − 92 = 18 s per part
  3600 s = 1 h
  Scrap rates converted from % to decimal: 3.1% → 0.031, 0.7% → 0.007

SUBSTITUTION:
  S_cycle = (18 × 32,000 / 3600) × 1250
  S_scrap = (0.031 − 0.007) × 32,000 × 880
  S_total = S_cycle + S_scrap
  P       = 480000 / S_total
  ROI     = ((S_total × 4 − 480000) / 480000) × 100
  C_pp    = 480000 / (32,000 × 4)

CALCULATION:
  (a) Time saved  = 18 × 32,000 = 576,000 s/year
                  = 576000 / 3600 = 160 h/year
      S_cycle     = 160 × 1250            = ₹2,00,000 /year

  (b) Δs          = 0.031 − 0.007 = 0.024
      Parts saved = 0.024 × 32,000 = 768 parts/year
      S_scrap     = 768 × 880              = ₹6,75,840 /year

  (c) S_total     = 200000 + 675840        = ₹8,75,840 /year

  (d) P           = 480000 / 875840        = 0.548 years
                                            = 6.6 months

  (e) ROI         = ((875840 × 4 − 480000) / 480000) × 100
                  = ((3503360 − 480000) / 480000) × 100
                  = (3023360 / 480000) × 100 = 630 %

  (f) N_total     = 32,000 × 4 = 128,000 parts
      C_pp        = 480000 / 128000        = ₹3.75 per part

RESULT:
  (a) Cycle-time saving      = ₹2,00,000 per year   (23 % of benefit)
  (b) Scrap-reduction saving = ₹6,75,840 per year   (77 % of benefit)
  (c) Total annual saving    = ₹8,75,840 per year
  (d) Payback period         = 6.6 months
  (e) ROI over 4 years       = 630 %
  (f) Fixture cost per part  = ₹3.75

SAFETY FACTOR:
  Not applicable directly. However, a DOWNSIDE CASE should be presented:
  If scrap only improves to 1.5% instead of 0.7%:
     S_scrap = (0.031 − 0.015) × 32,000 × 880 = ₹4,50,560
     S_total = ₹6,50,560   →   Payback = 8.9 months
  The proposal remains strongly justified even in the downside case.
  THIS IS THE MARK OF A ROBUST BUSINESS CASE.

PASS/FAIL:
  PASS against a 12-month payback criterion, in both the expected case
  (6.6 months) and the downside case (8.9 months).

ENGINEERING CONCLUSION:
  Proceed with the fixture. Three engineering observations:

  1. SCRAP DOMINATES (77% of the benefit). Had only cycle time been
     quantified, the payback would have appeared as 2.4 years and the
     proposal would likely have been rejected. Always quantify scrap.

  2. THE SCRAP PREDICTION IS THE KEY RISK. Before approval, I must
     document WHICH scrap causes this fixture eliminates — e.g. part
     movement under cut, inconsistent seating, operator loading error.
     If the current scrap is caused by something the fixture does not
     address (tool wear, material variation), the benefit will not
     materialise.

  3. THE CASE SURVIVES ITS DOWNSIDE. Even at half the predicted scrap
     improvement, payback is under 9 months. A proposal that only works
     under optimistic assumptions should not be approved; this one does
     not depend on optimism.

SENSITIVITY NOTE:
  Ranked by influence: (1) scrap-rate improvement, (2) part value,
  (3) volume, (4) machine hour rate, (5) cycle-time saving.
  Note that the variable engineers instinctively optimise — cycle time —
  is the LEAST influential of the five in this case.
```

### 14. Engineering assumptions
- Constant volume over 4 years; late-life volume decline would extend payback.
- Capacity-constrained machine, so saved time has full hour-rate value — must be confirmed.
- Scrap improvement from 3.1% to 0.7% is an engineering prediction, and is the analysis's largest risk;
  it must be supported by a cause-by-cause breakdown of current scrap.
- Maintenance, spares and fixture downtime excluded from this first pass.
- Part value ₹880 assumed to be the accumulated value at the point of scrapping, not raw material cost.

### 15. Diagram

```
        WHERE A FIXTURE AFFECTS PART COST
        (instructional schematic)

   C_part  =  C_material  +  C_machining  +  C_tooling  +  C_quality
                  │              │              │             │
                  │              │              │             │
     ┌────────────┘   ┌──────────┘     ┌────────┘      ┌──────┘
     │                │                │               │
     ▼                ▼                ▼               ▼
  ┌───────┐    ┌─────────────┐   ┌───────────┐  ┌─────────────┐
  │ Stock │    │ cutting time│   │  FIXTURE  │  │ scrap rate  │
  │ size  │    │      +      │   │   COST    │  │      +      │
  │ grade │    │ non-cutting │   │     ÷     │  │ inspection  │
  │       │    │      +      │   │  N_total  │  │      +      │
  │       │    │ LOAD/UNLOAD │   │           │  │   rework    │
  └───────┘    └─────────────┘   └───────────┘  └─────────────┘
      ▲               ▲                ▲               ▲
      │               │                │               │
   INDIRECT      FIXTURE          FIXTURE          FIXTURE
   influence     REDUCES          ADDS             REDUCES
                 this             this             this
                                                        ▲
                                                        │
                                        ┌───────────────┴──────────────┐
                                        │  USUALLY THE BIGGEST SAVING  │
                                        │  USUALLY THE ONE FORGOTTEN   │
                                        └──────────────────────────────┘

  ─────────────────────────────────────────────────────────────────────

        THE FIXTURE ENGINEER'S LEVERS, RANKED BY IMPACT

   BIGGEST  ┌─────────────────────────────────────────┐
      ▲     │ 1. Eliminate an entire operation/setup  │
      │     ├─────────────────────────────────────────┤
      │     │ 2. Reduce scrap (repeatability, Poka-   │
      │     │    Yoke)                                │
      │     ├─────────────────────────────────────────┤
      │     │ 3. Enable heavier cuts (rigidity)       │
      │     ├─────────────────────────────────────────┤
      │     │ 4. Reduce setup/changeover time         │
      │     ├─────────────────────────────────────────┤
      │     │ 5. Reduce load/unload time              │
      │     ├─────────────────────────────────────────┤
   SMALLEST │ 6. Reduce inspection effort             │
            └─────────────────────────────────────────┘

   Beginners optimise #5.  Engineers look for #1 and #2 first.
```

### 16. Drawing example
Not applicable at this lesson. Note: cost information never appears on a component drawing. It comes
from the Design Input Sheet (T-01), the customer schedule, and your company's cost accounting. The
full fixture cost sheet is built at L52 and is one of the 18 templates delivered at L53.

### 17. CAD workflow
Not applicable at this lesson. Relevant habit: CAD mass properties (with material assigned) give you
component masses directly, which feeds material cost in your BOM. Set up custom properties for
material and mass from the first model, and your BOM will cost itself. Taught fully at L24.4.2.

### 18. GD&T application
Not applicable at this lesson. Cost link worth noting now: **tolerance is the single most powerful
cost lever on a drawing.** Halving a tolerance can multiply a feature's cost several times over `[GUIDE]`.
This is why L22.1 teaches the fixture-tolerance rule as a *ratio* of part tolerance rather than "as
tight as possible", and why over-tolerancing appears in the mistake catalogue at L55.6.

### 19. Manufacturing method
Not applicable at this lesson. Cost link: the fixture-manufacturing cost driver ranking is taught at
L49.9 — grinding > tight tolerance > heat treatment > machining > material. Knowing this ranking is
how you reduce fixture cost without reducing fixture capability.

### 20. Inspection method
Not applicable at this lesson. Cost link: inspection is part of `C_quality`. A fixture with built-in
Poka-Yoke or in-fixture checking can reduce downstream inspection cost — a legitimate benefit to
include in your justification, though usually a smaller one than scrap.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Quantifying only cycle-time saving | Understates benefit, often by 3–4×; good projects rejected |
| 2 | Ignoring scrap reduction entirely | The largest benefit goes unclaimed |
| 3 | Predicting scrap reduction without identifying the causes eliminated | Benefit does not materialise; credibility lost for the next proposal |
| 4 | Not stating assumptions | Proposal collapses at the first question |
| 5 | Presenting only the optimistic case | Reviewers discount everything you present, permanently |
| 6 | Optimising load/unload while ignoring a possible setup elimination | Small win captured, large win missed |
| 7 | Using part *material* cost as scrap value | Understates scrap cost — value accumulates with every operation |
| 8 | Forgetting that tooling cost is a cost the fixture *adds* | Net benefit overstated |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Good fixture proposals keep getting rejected | Only cycle time quantified | Recompute including scrap, setup and operation elimination | Re-present with full benefit picture | Always use the four-component model |
| Predicted savings never materialise | Scrap causes misdiagnosed | Pareto the actual scrap causes before designing | Address the real dominant cause | Analyse scrap data before promising reduction |
| Management distrusts engineering estimates | Past optimistic-only cases | Present expected AND downside cases | Rebuild credibility with conservative estimates | Always show the downside |
| Fixture justified but cost overruns | Fixture cost estimated, not quoted | Compare estimate against actual quotes | Obtain vendor quotes before approval | Use the L52 cost-sheet method |

### 23. Design checklist
- [ ] Have I quantified all four cost components?
- [ ] Have I quantified **scrap reduction**, and identified which causes the fixture eliminates?
- [ ] Have I checked whether an **entire operation or setup** can be eliminated?
- [ ] Have I included load/unload time in the cycle-time figure?
- [ ] Have I stated every assumption explicitly?
- [ ] Have I presented a downside case as well as an expected case?
- [ ] Is the fixture cost an estimate or a quote?
- [ ] Have I used accumulated part value (not raw material cost) for scrap?
- [ ] Is the machine capacity-constrained?
- [ ] Can I state the fixture cost per part in one sentence?

### 24. Beginner exercise
**E0.1.4-B** — A part has: material ₹210, machining 85 s at ₹1,100/h, fixture ₹2,40,000 amortised over
60,000 parts, scrap rate 2%, part value at scrap ₹520. Calculate each of the four cost components and
the total cost per part. State which component is largest.

### 25. Intermediate exercise
**E0.1.4-I** — Using the data from E0.1.4-B, a new fixture costing ₹5,50,000 (60,000-part life) would
reduce cycle time to 68 s and scrap to 0.6%. Calculate the annual saving from each source (assume EAU
= 20,000), the total annual saving, and the payback period. State which saving dominates and by what
factor.

### 26. Advanced exercise
**E0.1.4-A** — A component currently requires two operations: OP10 (VMC, 96 s) and OP20 (VMC, 74 s),
with a datum-transfer error contributing to a 4.2% scrap rate at final inspection. A proposed 4th-axis
fixture would combine both into a single 138 s operation with scrap falling to 1.1%.
EAU = 24,000; machine rate ₹1,600/h; part value at scrap ₹1,950; fixture cost ₹9,80,000; life 5 years;
the eliminated OP20 fixture would have cost ₹2,10,000 to replace this year anyway.
(i) Compute all savings including the avoided fixture replacement and the eliminated handling between
operations (assume 25 s of handling per part `[EX-ASSUMED]`).
(ii) Compute payback and ROI.
(iii) Identify the three largest benefit sources and rank them.
(iv) Identify the three largest risks to the business case.
(v) Write the five-line recommendation you would present to management.

### 27. Interview questions
1. *"How do you justify a fixture to management?"*
   **Answer:** By quantifying the four cost components it affects — machining time, tooling
   amortisation, scrap and, where applicable, eliminated operations — then computing total annual
   saving, payback and ROI, with assumptions stated and a downside case shown. The critical point is
   to quantify scrap, which is usually the largest benefit and the one most often omitted.
2. *"Which saves more money: reducing cycle time by 10 seconds or reducing scrap by 1%?"*
   **Answer:** It depends on part value, but scrap usually wins and often by a wide margin. 10 s on
   30,000 parts at ₹1,500/h saves about ₹1,25,000/year. 1% scrap on 30,000 parts worth ₹2,000 each
   saves ₹6,00,000/year. *(Reasoning: scrap destroys the full accumulated value of the part, whereas
   cycle time saves only machine time.)*

### 28. Expert questions
1. *"Your fixture proposal shows a 5-month payback based on eliminating 90% of current scrap. What
   would you do before presenting it?"*
   **Answer:** Validate the scrap prediction, because it carries the entire case. Specifically:
   obtain the actual scrap records and Pareto them by defect type; identify which defect types are
   caused by workholding (movement, seating, loading error) versus other causes (tool wear, material,
   programming, measurement); and claim reduction only on the workholding-caused fraction. If 60% of
   scrap is tool-wear related, my fixture cannot eliminate 90% of scrap, and presenting that claim
   would destroy my credibility for every future proposal. I would present the validated fraction with
   the Pareto data attached — a smaller claim that survives scrutiny is worth more than a large one
   that does not.
2. *"When is the correct engineering recommendation to spend MORE on the fixture than the payback
   justifies?"*
   **Answer:** When there is a benefit the payback model cannot capture. Three legitimate cases:
   (i) **safety** — eliminating an injury risk is not subject to payback arithmetic; (ii) **critical
   characteristics** — where an escape has consequences (recall, warranty, liability) far exceeding
   the scrap value, Poka-Yoke is justified almost regardless of cost; (iii) **process capability** —
   where the process is currently marginal (low Cpk), the fixture buys robustness against future
   variation, which conventional payback treats as zero value. In all three, the engineer's duty is to
   make the uncaptured value explicit rather than lose the argument to a spreadsheet.

### 29. Summary
Part cost comprises material, machining, tooling amortisation and quality/scrap cost. A fixture
reduces machining time (chiefly load/unload) and scrap, may eliminate whole operations, and always
adds tooling cost. Justification requires quantifying all affected components, computing annual saving,
payback and ROI, stating assumptions and presenting a downside case. Scrap reduction is typically the
largest benefit and the most commonly omitted; eliminating an entire operation is typically the most
powerful single lever available to a fixture engineer.

### 30. Key takeaways
- **A fixture is an investment.** Quantify what it saves, or expect rejection.
- Part cost = **material + machining + tooling + quality**. Fixtures touch the last three.
- **Quantify scrap first** — it is usually the biggest benefit and the one everyone forgets.
- **Eliminating an operation beats optimising one.** Look for that before polishing load times.
- **State assumptions. Show the downside.** A case that survives its downside is a case that gets approved.
- Validate scrap-reduction claims against actual defect Pareto data before presenting them.

---
---
---

# MODULE 0.2 — ENGINEERING DRAWING FUNDAMENTALS
*5 lessons · Est. 4.5 h · Goal: read any mechanical drawing with confidence and know what it demands of you*

> **Standard notice for this module:** Projection methods follow **ISO 5456** `[STD]`. Where ASME
> practice differs (principally third-angle default and some line conventions), it is flagged
> explicitly. This module teaches conventions common to both systems; the ASME Y14.5 vs ISO GPS
> tolerancing divergence is taught at L21.1.2.

---
---

## LESSON L0.2.1 — ORTHOGRAPHIC PROJECTION

### 1. Lesson title
**L0.2.1 — Orthographic projection: first-angle vs third-angle, and how to tell which you are holding**

### 2. Learning objective
By the end of this lesson you will be able to identify the projection system of any drawing from its
symbol, correctly interpret the spatial relationship between views in both systems, and mentally
reconstruct a 3D object from 2D views.

### 3. Prerequisites
L0.1.1–L0.1.4.

### 4. Why the topic matters
A drawing is a 3D object flattened onto paper. If you read the flattening convention backwards, you
will build a mirror image of what was intended.

This is not hypothetical. Reading a first-angle drawing as third-angle puts features on the wrong
side. For a fixture, that means locators on the wrong face, clamps where the tool needs to be, and a
fixture that must be scrapped. The single symbol in the title block that prevents this takes two
seconds to check — and beginners routinely skip it.

For a fixture engineer specifically: **you must be able to see the part in three dimensions in your
head** before you can decide where to locate it, support it and clamp it. Orthographic reading is
that skill.

### 5. Simple explanation
Imagine holding a part and looking at it straight-on from the front. Draw what you see. Now look from
the top. Draw that. Now from the side. Draw that.

Those three drawings, arranged on a page in an agreed pattern, completely describe the object. The
"agreed pattern" is the projection system — and there are two of them in the world.

- **First-angle** (used in India, Europe, most of Asia): the view you get looking from the left is
  placed on the **right**.
- **Third-angle** (used in USA, Canada, Japan, Australia): the view you get looking from the left is
  placed on the **left**.

They are mirror-opposite arrangements. Every drawing states which it uses.

### 6. Engineering explanation

**The principle of orthographic projection**
The object is viewed along directions perpendicular ("orthogonal") to each face. Parallel projectors
carry the outline to a projection plane. Because the projectors are parallel (not converging as in
perspective), **true lengths and true angles are preserved** on faces parallel to the projection
plane. This is why engineering uses orthographic projection and not perspective: you can measure it.

**The six principal views:** front, top, bottom, left side, right side, rear. In practice, most parts
need only two or three.

**First-angle projection (ISO / European / Indian convention)**
The object is imagined in the first quadrant, **between the observer and the projection plane**. The
view is projected *through* the object onto the plane behind it. The effect: each view is placed on
the side **away from** the direction it was viewed from.

```
FIRST ANGLE:  observer → object → plane
Result: view from the LEFT appears on the RIGHT
        view from ABOVE appears BELOW
```

**Third-angle projection (ASME / American convention)**
The object is imagined in the third quadrant, **behind the projection plane**. The plane is between
the observer and the object; the view is projected *onto* the plane in front. The effect: each view
is placed on the **same side** as the direction it was viewed from.

```
THIRD ANGLE:  observer → plane → object
Result: view from the LEFT appears on the LEFT
        view from ABOVE appears ABOVE
```

**Memory aid that actually works:**
- **Third angle** = views placed where you'd naturally expect. **"Third = thinking normally."**
- **First angle** = views placed opposite. **"First = flipped."**

**The identifying symbol** — a truncated cone (frustum), shown in the title block:

```
   FIRST ANGLE SYMBOL              THIRD ANGLE SYMBOL

      ┌────────────────┐              ┌────────────────┐
      │  ╱▔▔▔▔╲   ╭──╮ │              │ ╭──╮   ╱▔▔▔▔╲  │
      │ ╱      ╲  │  │ │              │ │  │  ╱      ╲ │
      │ ╲      ╱  │  │ │              │ │  │  ╲      ╱ │
      │  ╲____╱   ╰──╯ │              │ ╰──╯   ╲____╱  │
      └────────────────┘              └────────────────┘
       small end faces               small end faces
       LEFT circle on right          RIGHT circle on left

   Cone tapers TOWARD the             Cone tapers AWAY from
   circle view                        the circle view
```

**How to read the symbol reliably:** the symbol *is* a cone drawn in the system it identifies. In
first angle, the side view of the cone is placed on the opposite side from where you'd look. Rather
than memorise the picture, memorise this: **if the narrow end of the cone points toward the circles,
it is third angle; if it points away, it is first angle.**

**Why both systems still exist:** historical divergence, entrenched national standards, and the vast
installed base of legacy drawings. ISO permits both `[STD]`; the symbol is mandatory precisely because
both are in use.

### 7. Terminology

| Term | Definition |
|---|---|
| **Orthographic projection** | Projection using parallel projectors perpendicular to the plane |
| **Projection plane** | The imaginary plane onto which the view is projected |
| **Principal views** | The six standard views: front, top, bottom, left, right, rear |
| **Front view / elevation** | The primary view, chosen to show the most characteristic shape |
| **Plan view** | The view from above (top view) |
| **End view / side elevation** | View from the left or right |
| **Auxiliary view** | A view projected onto a plane inclined to the principal planes |
| **First-angle projection** | ISO/European convention; views placed opposite to viewing direction |
| **Third-angle projection** | ASME/American convention; views placed same side as viewing direction |
| **Projection symbol** | The truncated-cone symbol identifying the system |
| **True length** | A line shown at its actual length (parallel to the projection plane) |
| **Foreshortening** | Apparent shortening of a line inclined to the projection plane |

### 8. Principle

> **CHECK THE PROJECTION SYMBOL BEFORE YOU READ ANYTHING ELSE.**
> Two seconds of checking prevents a mirror-imaged fixture.
> If there is no symbol, **stop and ask** — do not assume. An unmarked drawing is an incomplete
> drawing, and assuming is how mirror-image parts get made.

### 9. Industrial application

**The mirror-image fixture failure** — an extremely common and expensive event:

A fixture engineer in India (first-angle country) receives a drawing from an American customer
(third-angle). The drawing carries the third-angle symbol, but the engineer, working quickly and by
habit, reads it as first-angle. A locating pin that should be on the left of the part is placed on
the right.

```
INTENDED (third angle, read correctly)     BUILT (misread as first angle)

     ┌──────────────┐                          ┌──────────────┐
     │   PART       │                          │   PART       │
   ● │              │                          │              │ ●
  pin└──────────────┘                          └──────────────┘ pin
     locating pin LEFT                          locating pin RIGHT
                                                   ↑
                                          MIRROR IMAGE — fixture scrapped
```

**Cost:** full fixture remake, roughly ₹1,50,000 and three weeks `[EX-ASSUMED]`, plus the delivery
failure. **Prevention cost:** two seconds.

This is why L0.1.2's Design Input Sheet includes a projection-system confirmation field, and why the
first item on the drawing-reading checklist (L26.1) is the projection symbol.

**Where you will meet both systems:** Indian and European customers use first-angle; American,
Japanese and Australian customers typically use third-angle. Multinational programs frequently
circulate both. Never assume based on where you are sitting.

### 10. Design rules
- **R1** — Identify the projection system **before** reading any view.
- **R2** — If no projection symbol is present, treat the drawing as incomplete and request clarification in writing.
- **R3** — State the projection system explicitly on every drawing **you** produce.
- **R4** — When receiving drawings from a different country, verify the system every time, not once per customer.
- **R5** — When in doubt, cross-check using an asymmetric feature: find a feature you know is on one
  side and confirm it appears where the assumed system predicts.
- **R6** — Choose the front view to show the most characteristic shape and the fewest hidden lines.

### 11. Rules of thumb
- Most parts are fully described by **two or three views** `[PRACTICE]`. If you need six, reconsider
  the view selection, or use a section or auxiliary view instead.
- Choose the front view as the part's **natural functional orientation** or its machining orientation.
- Align views strictly; never "float" a view out of projection without labelling it as such.
- If a drawing has no asymmetric feature, mirror-image errors become undetectable by inspection —
  these parts are the highest risk and demand extra care.

### 12. Formulae
Orthographic projection is a geometric convention, not a computational one — no formulae apply.

The one geometric relationship worth stating:

**True length preservation**
```
A line parallel to the projection plane projects at TRUE LENGTH.
A line inclined at angle θ to the projection plane projects at:

    L_projected = L_true × cos θ
```
| Variable | Meaning | Unit |
|---|---|---|
| L_true | Actual length of the line | mm |
| L_projected | Length as it appears in the view | mm |
| θ | Angle between the line and the projection plane | degrees |

*This is why inclined faces are foreshortened, and why auxiliary views (projected onto a plane
parallel to the inclined face, so θ = 0) exist — they restore true length for measurement and
dimensioning.*

### 13. Worked numerical example

**Problem:** A fixture rib is 120 mm long and lies in a plane inclined at 35° to the front projection
plane. Determine its apparent length in the front view, the error if this apparent length were used
as the true length, and the engineering implication.

```
GIVEN:
  True length of rib      L_true = 120 mm                     [PROJ]
  Inclination to plane    θ      = 35°                        [PROJ]

REQUIRED:
  (a) Apparent (projected) length in the front view
  (b) Absolute and percentage error if the projected length
      were mistakenly used as the true length
  (c) Engineering implication

ASSUMPTION:
  The rib is a straight member lying wholly within a single
  inclined plane, and the inclination is measured between the
  rib axis and the front projection plane.

FORMULA:
  L_projected = L_true × cos θ
  Error       = L_true − L_projected
  Error %     = (Error / L_true) × 100

VARIABLE DEFINITIONS:
  L_true      = actual length of the rib            (mm)
  L_projected = length as it appears in the view    (mm)
  θ           = angle to the projection plane       (degrees)

UNIT CONVERSION:
  None required. Angle in degrees; ensure calculator is in DEG mode.

SUBSTITUTION:
  L_projected = 120 × cos 35°
  Error       = 120 − L_projected

CALCULATION:
  cos 35°     = 0.8192
  L_projected = 120 × 0.8192  = 98.30 mm
  Error       = 120 − 98.30   = 21.70 mm
  Error %     = (21.70/120)×100 = 18.1 %

RESULT:
  (a) Apparent length in front view = 98.30 mm
  (b) Error if misread as true      = 21.70 mm  (18.1 %)
  (c) See conclusion below.

SAFETY FACTOR:
  Not applicable — geometric calculation.

PASS/FAIL:
  Not applicable. However: an 18% dimensional error on a fixture
  member would be catastrophic in any real application.

ENGINEERING CONCLUSION:
  A 120 mm rib appears as only 98.3 mm in the front view. Scaling
  a dimension off a foreshortened view would produce a 21.7 mm
  error — enough to make the fixture unusable.

  This is the reason for two absolute drawing rules:

    1. NEVER SCALE A DRAWING. Use only stated dimensions.
       (Drawings carry a "DO NOT SCALE" note precisely for this.)

    2. Inclined features must be dimensioned in an AUXILIARY VIEW,
       projected onto a plane parallel to the inclined face, where
       θ = 0 and cos θ = 1, so true length is preserved.

  If you find an inclined feature dimensioned only in a principal
  view, treat it as a drawing defect and query it.

SENSITIVITY NOTE:
  Foreshortening error grows rapidly with angle:
     θ = 15° →  3.4 % error
     θ = 30° → 13.4 % error
     θ = 45° → 29.3 % error
     θ = 60° → 50.0 % error
  Steeply inclined features are the most dangerous to misread,
  and are exactly the features most likely to lack a proper
  auxiliary view.
```

### 14. Engineering assumptions
- The rib is straight and lies in a single plane.
- The stated 35° is the angle between the member axis and the projection plane (not between two faces).
- The projection is true orthographic, as all engineering drawings are.

### 15. Diagram

```
     ORTHOGRAPHIC PROJECTION — THE TWO SYSTEMS
     (instructional schematic)

  THE OBJECT (an L-shaped block with a notch on its LEFT face)

                    ▲ viewed from ABOVE
                    │
                ┌───────┐
   viewed  ────►│       │◄──── viewed from RIGHT
   from LEFT    │  ▄▄   │
                │  ██   │
                └───────┘
                    │
                    ▼ viewed from BELOW

  ─────────────────────────────────────────────────────────────────

  FIRST ANGLE (ISO / India / Europe)     ◄── views placed OPPOSITE

                  ┌─────────┐
                  │  BOTTOM │     ← view from BELOW placed ABOVE
                  └─────────┘
     ┌─────────┐  ┌─────────┐  ┌─────────┐
     │  RIGHT  │  │  FRONT  │  │  LEFT   │
     └─────────┘  └─────────┘  └─────────┘
                       ↑            ↑
              view from RIGHT   view from LEFT
              placed LEFT       placed RIGHT
                  ┌─────────┐
                  │   TOP   │     ← view from ABOVE placed BELOW
                  └─────────┘

  ─────────────────────────────────────────────────────────────────

  THIRD ANGLE (ASME / USA / Japan)       ◄── views placed SAME SIDE

                  ┌─────────┐
                  │   TOP   │     ← view from ABOVE placed ABOVE
                  └─────────┘
     ┌─────────┐  ┌─────────┐  ┌─────────┐
     │  LEFT   │  │  FRONT  │  │  RIGHT  │
     └─────────┘  └─────────┘  └─────────┘
                       ↑            ↑
              view from LEFT    view from RIGHT
              placed LEFT       placed RIGHT
                  ┌─────────┐
                  │ BOTTOM  │     ← view from BELOW placed BELOW
                  └─────────┘

  ─────────────────────────────────────────────────────────────────

  THE CONSEQUENCE OF MISREADING:

     Feature on the LEFT of the part, read in the wrong system,
     ends up on the RIGHT of your fixture.

     ┌──────────────────────────────────────────────────┐
     │  A MIRROR-IMAGE FIXTURE CANNOT BE REWORKED.      │
     │  IT MUST BE REMADE.                              │
     └──────────────────────────────────────────────────┘
```

### 16. Drawing example

```
   TYPICAL TITLE BLOCK — WHERE TO FIND THE PROJECTION SYMBOL
   FOR TRAINING ONLY — NOT FOR MANUFACTURE

   ┌────────────────────────────────────────────────────────────────┐
   │                                                                │
   │                    (drawing views area)                        │
   │                                                                │
   ├──────────────┬──────────────┬──────────────┬──────────────────┤
   │ MATERIAL:    │ FINISH:      │  ╱▔▔╲  ╭─╮   │ PART No:  FX-1042│
   │ EN8          │ Ra 1.6       │  ╲__╱  ╰─╯   │                  │
   ├──────────────┼──────────────┤              │ TITLE:           │
   │ HEAT TREAT:  │ GEN TOL:     │ PROJECTION   │ LOCATING PLATE   │
   │ —            │ ISO 2768-mK  │ FIRST ANGLE  ├──────────────────┤
   ├──────────────┼──────────────┼──────────────┤ SCALE: 1:2       │
   │ DRAWN: SM    │ CHECKED: RK  │ APPROVED: AV │ REV: B           │
   │ 11-08-2026   │ 12-08-2026   │ 12-08-2026   │ SHEET 1 OF 1     │
   └──────────────┴──────────────┴──────────────┴──────────────────┘
                          ▲
                          │
              CHECK THIS FIRST. EVERY TIME.
```

### 17. CAD workflow
All major CAD systems let you set the projection convention for drawings, and the setting belongs in
your **drawing template**, not in each drawing:

| CAD system | Where to set projection |
|---|---|
| SolidWorks | `Tools ▸ Options ▸ Document Properties ▸ Drafting Standard`, or in the sheet properties (First/Third angle) |
| Creo | `File ▸ Prepare ▸ Drawing Properties ▸ Detail Options` → `projection_type` |
| Siemens NX | Drafting preferences → `Projection Angle` |
| CATIA | Drafting workbench → Sheet properties → Projection method |
| Inventor | Styles editor → Standard → Sheet → Projection type |

**Professional practice:** create one company drawing template per projection system, with the symbol
already placed in the title block, and never draw on a blank sheet. This eliminates an entire class of
error. Template setup is taught fully at L25.2.5 and L24.4.3.

### 18. GD&T application
Not applicable at this lesson (GD&T begins at L21). Relevant note: GD&T symbols and feature control
frames are read identically in both projection systems — the frames themselves are not mirrored. Only
the **arrangement of views** differs. A misread projection system therefore puts correct GD&T on the
wrong feature, which is arguably worse than no GD&T at all, because it looks authoritative.

### 19. Manufacturing method
Not applicable at this lesson. Shop-floor note: machinists read the projection symbol as a reflex, and
a machinist querying your drawing's projection is usually a sign the symbol is missing or the views are
inconsistent. Treat such a query as a genuine drawing defect, never as an inconvenience.

### 20. Inspection method
Not applicable at this lesson. Note for later: CMM programmers build their part coordinate system from
the drawing. A projection misreading propagates into the inspection program, which then confirms the
wrong geometry as correct — the error becomes self-validating. This is why L26 (How to Read Fixture
Drawings) is a full level and not a footnote.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Not checking the projection symbol | Mirror-image fixture; complete remake |
| 2 | Assuming projection based on your own country's convention | Fails on every imported drawing |
| 3 | Accepting a drawing with no projection symbol | Ambiguity; eventual mirror error |
| 4 | Omitting the symbol on drawings you issue | You cause the error for someone downstream |
| 5 | **Scaling dimensions off the drawing** | Foreshortening errors up to 50% (see §13) |
| 6 | Dimensioning inclined features in a principal view instead of an auxiliary view | Foreshortened, un-measurable dimension |
| 7 | Placing views out of projection alignment without labelling | Reader cannot establish spatial relationships |
| 8 | Choosing a front view that requires many hidden lines | Drawing is harder to read than necessary |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Manufactured part/fixture is a mirror image | Projection system misread | Compare an asymmetric feature's side against the drawing | Remake (mirror errors cannot be reworked) | Verify projection symbol before design; record it on the Design Input Sheet |
| Views don't seem to correspond | Views out of projection, or mixed systems on one sheet | Trace a distinctive feature through all views | Query the drawing issuer | Insist on aligned, labelled views |
| Dimension doesn't match the model | Dimension scaled from a foreshortened view | Check whether the feature is inclined | Use only stated dimensions; add auxiliary view | Never scale; dimension inclined features in auxiliary views |
| Shop repeatedly queries your drawings | Projection symbol missing or view choice poor | Review against L25 drawing standards | Reissue with the symbol and better views | Use a standard company template |

### 23. Design checklist
- [ ] Is a projection symbol present on the drawing?
- [ ] Which system is it — first angle or third angle?
- [ ] Have I recorded the projection system on the Design Input Sheet?
- [ ] Have I cross-checked using an asymmetric feature?
- [ ] Are all views in correct projection alignment?
- [ ] Is the front view the most characteristic and least hidden-line-heavy?
- [ ] Are inclined features dimensioned in auxiliary views, not foreshortened principal views?
- [ ] Does the drawing I am *issuing* carry the projection symbol?
- [ ] Have I used the company template rather than a blank sheet?

### 24. Beginner exercise
**E0.2.1-B** — (a) Draw both projection symbols from memory and label them. (b) A part has a boss on
its left face. In first-angle projection, on which side of the front view does the boss appear? In
third-angle? (c) State what you must do if a drawing has no projection symbol.

### 25. Intermediate exercise
**E0.2.1-I** — A fixture bracket is 85 mm long and inclined at 40° to the front projection plane.
(a) Calculate its apparent length in the front view. (b) Calculate the error if this were used as the
true length. (c) State the correct way to dimension this feature and explain why. (d) Repeat (a) and
(b) for inclinations of 20° and 55°, and comment on how the risk changes with angle.

### 26. Advanced exercise
**E0.2.1-A** — You receive a fixture drawing from an overseas customer. It shows three views, but the
title block's projection symbol is illegible (poor scan quality), and the part is symmetric about the
vertical axis except for one Ø8 dowel hole.
(i) Describe a systematic procedure to determine the projection system from the views themselves.
(ii) Explain why the part's near-symmetry makes this both harder and more dangerous.
(iii) State what you would do if the procedure remains inconclusive, and draft the two-sentence written
query you would send.
(iv) Explain what safeguard should have existed in your company's process to prevent this situation
from ever reaching the design stage.

### 27. Interview questions
1. *"What is the difference between first-angle and third-angle projection?"*
   **Answer:** They are mirror-opposite conventions for arranging views. In first angle (ISO, used in
   India and Europe) the object sits between the observer and the plane, so each view is placed on the
   side opposite the viewing direction — the left view goes on the right. In third angle (ASME, used
   in the USA and Japan) the plane sits between observer and object, so views are placed on the same
   side as the viewing direction. Both are identified by a truncated-cone symbol in the title block.
   *(Reasoning: reading the wrong system produces a mirror-image part — an error that cannot be
   reworked, only remade.)*
2. *"Why should you never scale a drawing?"*
   **Answer:** Because printed drawings may not be at true scale, and because inclined features are
   foreshortened by cos θ — a 120 mm member at 35° appears as 98 mm, an 18% error. Only stated
   dimensions are reliable, which is why drawings carry a "DO NOT SCALE" note.

### 28. Expert questions
1. *"Your company works with both first- and third-angle drawings. What process would you put in place
   to eliminate mirror-image errors permanently?"*
   **Answer:** A layered defence, because a single check will eventually be skipped:
   (i) **Input control** — the Design Input Sheet has a mandatory projection field that must be filled
   and signed before design starts; a drawing without a legible symbol is formally rejected as
   incomplete rather than interpreted.
   (ii) **Design control** — separate CAD templates per system; the designer states the system in the
   model's custom properties, so it propagates to every drawing automatically.
   (iii) **Review control** — the design review checklist (L54) includes an explicit mirror check
   against a named asymmetric feature.
   (iv) **Physical control** — where practical, design deliberate asymmetry into the fixture (an
   offset dowel, a chamfered corner) so a mirror error is visible at assembly rather than at first-off.
   The fourth is the strongest, because it converts a documentation error into a physically obvious
   one. *(This is Poka-Yoke applied to engineering rather than to production — see L45.)*
2. *"A part is fully symmetric. Does the projection system still matter?"*
   **Answer:** For the part's own geometry, no — a fully symmetric part is identical in both systems,
   which is precisely why it is dangerous. The projection error goes undetected in that part and then
   propagates: to the GD&T datum labels (A, B, C attached to specific faces), to the fixture's
   asymmetric features (dowel positions, clamp locations, tool-access reliefs), and to any subsequent
   revision that adds an asymmetric feature. The symmetric part hides the error until something makes
   it visible — usually at first-off. So yes, it matters, and symmetric parts require *more* care, not
   less.

### 29. Summary
Orthographic projection represents a 3D object through 2D views using parallel projectors, preserving
true lengths on faces parallel to the projection plane. Two mirror-opposite conventions exist: first
angle (ISO, views placed opposite the viewing direction) and third angle (ASME, views placed on the
same side). Every drawing must carry the truncated-cone symbol identifying its system, and checking
that symbol is the first action in reading any drawing. Inclined features are foreshortened by cos θ
and must be dimensioned in auxiliary views; drawings must never be scaled.

### 30. Key takeaways
- **Check the projection symbol first. Every drawing. Every time.** It takes two seconds.
- **First angle = flipped** (ISO, India/Europe). **Third angle = thinking normally** (ASME, USA/Japan).
- No symbol = incomplete drawing. **Ask; never assume.**
- A mirror-image fixture **cannot be reworked** — only remade.
- **Never scale a drawing.** Inclined features are foreshortened by cos θ (up to 50% at 60°).
- Dimension inclined features in **auxiliary views**, where true length is preserved.
- The strongest defence against mirror errors is **designed-in asymmetry**, not more checking.

---
---

## LESSON L0.2.2 — VIEWS: SECTIONS, DETAILS AND AUXILIARIES

### 1. Lesson title
**L0.2.2 — Views: front/top/side, auxiliary, section (full, half, offset, revolved, broken-out), detail views**

### 2. Learning objective
By the end of this lesson you will be able to identify every view type on a drawing, interpret cutting
planes and hatching, select the minimum sufficient set of views to describe a component, and recognise
when a missing view makes a drawing ambiguous.

### 3. Prerequisites
L0.2.1.

### 4. Why the topic matters
Fixture components are full of internal features: bolt holes, counterbores, dowel holes, coolant
passages, tapped holes, reliefs. Hidden lines alone cannot describe them clearly — a drawing with six
overlapping hidden lines is unreadable, and unreadable drawings produce wrong parts.

Sections are how internal features become visible. As a fixture engineer you will read hundreds of
sections and draw hundreds more. Equally important: you must recognise when a drawing you have been
given is **ambiguous** — when the views provided do not fully define the part. That ambiguity becomes
your problem the moment you locate a feature that turns out to be somewhere else.

### 5. Simple explanation
Sometimes the outside views aren't enough.

- If a feature is **inside** the part, imagine cutting the part open and drawing what you see. That's
  a **section view**.
- If a feature is **too small** to see clearly, draw it again bigger. That's a **detail view**.
- If a face is **tilted**, look at it straight-on rather than at an angle. That's an **auxiliary view**.

### 6. Engineering explanation

**A. Principal views**
The front, top and side views described in L0.2.1. Choose the **minimum sufficient set** — typically
two or three. Every additional view costs drawing time, checking time and risk of inconsistency.

**B. Section views**
An imaginary cutting plane passes through the object; the material in front of the plane is removed
and the remainder drawn. **Cut material is hatched.**

| Section type | What it is | When to use |
|---|---|---|
| **Full section** | Cutting plane passes entirely through | Internal features throughout; symmetric or complex interiors |
| **Half section** | Half sectioned, half external (symmetric parts only) | Shows inside and outside in one view; saves a view |
| **Offset section** | Cutting plane steps to pass through several features | Features not in a single plane (e.g. staggered bolt holes) |
| **Revolved section** | Cross-section rotated in place on the view | Showing the shape of a rib, spoke, arm or bar |
| **Removed section** | Cross-section placed elsewhere on the sheet | Several cross-sections along a member's length |
| **Broken-out section** | Small local area broken away | One local internal feature; avoids a whole extra view |
| **Aligned section** | Angled features rotated into the plane | Parts with radial features (flanges with angled bolt holes) |

**Hatching conventions** `[STD]`:
- Hatch lines at **45°**, evenly spaced, thin continuous lines
- **Adjacent parts** in an assembly hatch at different angles or spacings, so the parts are distinguishable
- The **same part** hatches identically in every view on the sheet
- **Not sectioned even when the plane passes through them** — a critical convention: shafts, bolts,
  screws, nuts, washers, pins, dowels, keys, rivets, ribs (when cut longitudinally), and rolling elements

> **Why fasteners and shafts are not sectioned:** they have no internal features to reveal, and
> hatching them would clutter the view and obscure the parts that matter. This convention appears
> constantly in fixture assembly drawings, which are full of bolts, dowels and pins.

**C. Auxiliary views**
Projected onto a plane **parallel to an inclined face**, so that face appears in **true shape and true
size** (θ = 0, therefore cos θ = 1 — see L0.2.1 §13). Essential for angled features, which are a
recurring feature of fixtures (angled hole fixtures, angled locating faces — see Project M06).

**D. Detail views**
An enlarged view of a small region, circled on the parent view, labelled (DETAIL A) and drawn at a
larger scale (e.g. SCALE 4:1). The scale of a detail view is **always stated**, because it differs from
the sheet scale. Used for small chamfers, undercuts, thread reliefs, small radii and tight-tolerance
features.

**E. Partial and broken views**
- **Partial view:** only part of a view drawn, when the rest adds nothing
- **Broken view:** a long uniform part with its middle removed (break lines shown), so a 2000 mm bar
  fits on the sheet at a readable scale. **Dimensions still state the true length.**

**The governing principle of view selection:**

> Provide the **minimum number of views that completely and unambiguously define the part** — no more,
> no fewer. Too few views creates ambiguity. Too many creates cost, clutter and the risk of views
> contradicting each other after a revision.

### 7. Terminology

| Term | Definition |
|---|---|
| **Cutting plane** | The imaginary plane along which the object is cut for a section |
| **Cutting-plane line** | The line on the parent view showing where the section is taken, with arrows showing viewing direction |
| **Hatching / section lining** | Diagonal lines indicating cut material |
| **Section label** | Identifier such as SECTION A-A, matching the cutting-plane line letters |
| **Auxiliary view** | View projected onto a plane parallel to an inclined face |
| **Detail view** | Enlarged view of a small region, at a stated larger scale |
| **Break line** | Line indicating a removed portion of a long uniform part |
| **Partial view** | View showing only part of the object |
| **Aligned section** | Section where angled features are rotated into the cutting plane |
| **True shape / true size** | Feature shown without foreshortening |

### 8. Principle

> **SECTIONS EXIST TO REPLACE HIDDEN LINES, NOT TO SUPPLEMENT THEM.**
> If a section view shows a feature clearly, hidden lines for that feature should be **omitted** from
> the section. A section cluttered with hidden lines has defeated its own purpose.

### 9. Industrial application

A fixture base plate typically requires:

```
VIEW SET FOR A TYPICAL FIXTURE BASE PLATE

  TOP VIEW      — overall outline, hole pattern positions, locator positions
  FRONT VIEW    — thickness, step heights, overall height
  SECTION A-A   — counterbore depths, dowel-hole depths, tapped-hole depths,
                  coolant passages   ◄── this is where the manufacturing
                                          information actually lives
  DETAIL B      — dowel hole with its H7 fit, chamfer, depth (SCALE 4:1)
  AUXILIARY C   — the 30° inclined locating face, in true shape
```

**The critical insight:** the machinist making this plate spends most of their time reading
**SECTION A-A** and **DETAIL B**, not the top view. Depths, counterbores and fits — the information
that determines whether the part is right — live in the sections and details.

A drawing that shows the hole *pattern* beautifully in the top view but never sections the holes has
not communicated the depths, the counterbore diameters, or the thread engagement. It is an incomplete
drawing that looks complete. This is one of the most common defects in fixture drawings produced by
inexperienced designers.

### 10. Design rules
- **R1** — Use the minimum sufficient set of views. Every view must earn its place.
- **R2** — Use a section wherever internal features would otherwise require confusing hidden lines.
- **R3** — Omit hidden lines in a section view where the section already shows the feature.
- **R4** — Never section fasteners, shafts, pins, dowels, keys, or ribs cut longitudinally.
- **R5** — Hatch adjacent parts differently; hatch the same part identically across all views.
- **R6** — Always state the scale of a detail view.
- **R7** — Use an auxiliary view for any inclined face carrying dimensioned features.
- **R8** — Label every section and detail, and make the labels match the parent view's markers.
- **R9** — After a revision, check **all** views for consistency — this is where errors hide.

### 11. Rules of thumb
- Most fixture plates need: top view + one section + one or two details `[PRACTICE]`.
- If you are drawing more than four hidden lines in one area, you need a section instead.
- Detail views are commonly drawn at 2:1, 4:1, 5:1 or 10:1 `[PRACTICE]`.
- If a feature's dimension appears in only one view, that view is load-bearing — check it especially
  carefully at revision.
- A drawing that a machinist must phone you about is a drawing defect, not a machinist problem.

### 12. Formulae
View construction is a geometric convention. Two relationships matter:

**Detail view scale**
```
Drawn size = True size × Scale factor
```
For a detail at 4:1, a 2 mm chamfer is drawn 8 mm long. **Dimensions always state true size**, never
the drawn size.

**True shape in auxiliary views**
```
L_projected = L_true × cos θ
```
In an auxiliary view projected parallel to the inclined face, θ = 0, so cos θ = 1 and
`L_projected = L_true`. **This is the entire reason auxiliary views exist.**

### 13. Worked numerical example

**Problem:** A fixture base plate 40 mm thick has an M12 tapped hole with a Ø20 × 12 mm deep
counterbore. The tapped portion must provide 18 mm of full thread engagement. Determine the required
drill depth and total feature depth, verify the remaining material below the hole, and state which
view must carry each dimension.

```
GIVEN:
  Plate thickness              t_plate = 40 mm                  [PROJ]
  Counterbore diameter         Ø20 mm                           [PROJ]
  Counterbore depth            d_cb    = 12 mm                  [PROJ]
  Required full thread engage. L_thread = 18 mm                 [PROJ]
  Thread                       M12 × 1.75 (coarse)              [STD]

REQUIRED:
  (a) Depth of full thread below the counterbore
  (b) Total drill depth required (allowing for incomplete thread
      at the bottom of a blind tapped hole)
  (c) Remaining material below the drilled hole
  (d) Which view must carry each dimension

ASSUMPTION:
  1. Blind hole (does not break through) — stated on the drawing.
  2. Tap lead-in allowance of 3 × pitch for a blind hole using a
     bottoming-capable tap. This is a widely used shop guideline
     [PRACTICE] — the actual allowance depends on the tap type and
     MUST BE CONFIRMED with the manufacturing engineer.
     Pitch of M12 coarse = 1.75 mm  [STD]
  3. Drill point angle contribution neglected in this first pass
     (the conical point adds roughly 0.3 × drill diameter of extra
     depth, which for Ø10.2 is ~3 mm — noted in the conclusion).
  4. Minimum remaining material below a blind hole taken as 5 mm
     for a fixture base of this thickness. [PRACTICE] — must be
     confirmed against the loading case.

FORMULA:
  Thread start depth     = d_cb
  Thread end depth       = d_cb + L_thread
  Lead-in allowance      = 3 × pitch
  Drill depth (cyl.)     = d_cb + L_thread + (3 × pitch)
  Remaining material     = t_plate − drill depth

VARIABLE DEFINITIONS:
  t_plate   = plate thickness                          (mm)
  d_cb      = counterbore depth                        (mm)
  L_thread  = length of full thread required           (mm)
  pitch     = thread pitch, M12 coarse = 1.75          (mm)

UNIT CONVERSION:
  None required — all dimensions in mm.

SUBSTITUTION:
  Thread runs from  12 mm  to  (12 + 18) mm
  Lead-in           = 3 × 1.75
  Drill depth       = 12 + 18 + 5.25
  Remaining         = 40 − 35.25

CALCULATION:
  (a) Thread from depth 12 mm to depth 30 mm
      → 18 mm of full thread, as required                    ✓

  (b) Lead-in allowance = 3 × 1.75 = 5.25 mm
      Drill depth (cylindrical portion) = 12 + 18 + 5.25
                                        = 35.25 mm
      Round up for manufacture          = 36 mm             [PRACTICE]

  (c) Remaining material = 40 − 36 = 4 mm
      (plus the drill point cone, which reduces this further
       by roughly 3 mm at the apex → effective remaining ≈ 1 mm
       at the centreline)

RESULT:
  (a) Full thread depth   : 12 mm to 30 mm below the top face
  (b) Drill depth         : 36 mm (cylindrical), plus point
  (c) Remaining material  : 4 mm nominal, ≈1 mm at the drill apex
  (d) View allocation     : see conclusion

SAFETY FACTOR:
  Remaining material 4 mm against a 5 mm practice minimum
  [PRACTICE] → factor = 0.8

PASS/FAIL:
  ✗ FAIL — remaining material is below the 5 mm practice minimum,
  and at the drill point apex it is approximately 1 mm. This is
  unacceptable: the drill point may break through, or the thin
  remaining section may bulge or crack when the bolt is torqued.

ENGINEERING CONCLUSION:
  The specified combination does not fit in a 40 mm plate. FOUR
  options, in order of preference:

    1. REDUCE THREAD ENGAGEMENT to 14 mm. For a steel bolt in
       steel, engagement of roughly 1.0–1.5 × d is generally
       adequate [GUIDE]; 18 mm (1.5 d) is generous for M12.
       At 14 mm: drill = 12 + 14 + 5.25 = 31.25 → 32 mm,
       remaining = 8 mm.  ✓ PASS
       This must be confirmed against the actual bolt load (L20.2.2).

    2. REDUCE COUNTERBORE DEPTH if the bolt head allows.

    3. INCREASE PLATE THICKNESS to 50 mm — only if mass, cost and
       machine envelope permit.

    4. MAKE IT A THROUGH HOLE — often the best answer for a fixture
       base, since it also aids chip and coolant escape, provided
       the underside is accessible and sealing is not required.

  RECOMMENDATION: option 1, with option 4 considered if the base
  underside permits.

  VIEW ALLOCATION — where each dimension must appear:
    TOP VIEW      : hole POSITION (X, Y from datums), Ø20 counterbore
                    diameter, M12 designation
    SECTION A-A   : counterbore DEPTH 12, thread depth, drill depth
                    ◄── the depths CANNOT be shown in the top view
    DETAIL B      : if the counterbore corner relief or chamfer needs
                    definition, at SCALE 4:1

  This allocation is the practical point of the lesson: a top view
  alone cannot communicate this feature. Without SECTION A-A the
  drawing is incomplete, and the error above would never have been
  discovered at the drawing stage.

SENSITIVITY NOTE:
  Total depth is most sensitive to the thread-engagement requirement.
  Every 1 mm of engagement removed returns 1 mm of remaining material.
  The lead-in allowance (3 × pitch) is a shop guideline and varies with
  tap type — a spiral-flute bottoming tap needs less; confirm locally.
```

### 14. Engineering assumptions
- Blind hole, stated on the drawing.
- Tap lead-in of 3 × pitch `[PRACTICE]` — tap-type dependent, must be confirmed.
- Drill point cone contribution noted qualitatively; a precise calculation would use
  `depth_cone ≈ 0.3 × D_drill` for a 118° point `[GUIDE]`.
- Minimum remaining material of 5 mm `[PRACTICE]` — depends on load and must be confirmed by
  calculation (L20.2.2) for a critical joint.
- Thread engagement of 1.5 d assumed as the original requirement; 1.0–1.5 d is the general guideline
  for steel-in-steel `[GUIDE]`.

### 15. Diagram

```
     SECTION VIEW TYPES
     (instructional schematic — hatching simplified)

  FULL SECTION                      HALF SECTION
  cutting plane passes right        half sectioned, half external
  through the object                (symmetric parts only)

    A─┼─────────────┼─A               ┌───────┬───────┐
      │             │                 │╱╱╱╱╱╱╱│       │
   ┌──┴─────────────┴──┐              │╱╱┌─┐╱╱│   ┌─┐ │
   │╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱│              │╱╱│ │╱╱│   │ │ │
   │╱╱╱┌─────────┐╱╱╱╱╱│              │╱╱└─┘╱╱│   └─┘ │
   │╱╱╱│  cavity │╱╱╱╱╱│              │╱╱╱╱╱╱╱│       │
   │╱╱╱└─────────┘╱╱╱╱╱│              └───────┴───────┘
   │╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱│               sectioned  external
   └───────────────────┘
      SECTION A-A

  ─────────────────────────────────────────────────────────────

  OFFSET SECTION                    BROKEN-OUT SECTION
  plane steps to catch              small local break to show
  features not in line              one internal feature

    B─┐   ┌───┐   ┌─B                 ┌─────────────────┐
      │   │   │   │                   │      ╭─╮        │
      └───┘   └───┘                   │   ╱╲_│ │_       │
   ┌──────────────────┐               │  ╱╱╱╱└─┘╱╲      │
   │╱╱○╱╱╱╱╱╱○╱╱╱╱╱○╱╱│               │ ╱╱╱╱╱╱╱╱╱╱╱╲    │
   │╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱│               │  ~~~~~~~~~      │
   └──────────────────┘               └─────────────────┘
      SECTION B-B                      irregular break line
   three holes, one section

  ─────────────────────────────────────────────────────────────

  AUXILIARY VIEW                    DETAIL VIEW

    inclined face seen               small feature enlarged
    in TRUE SHAPE

         ╱▔▔▔╲  ← auxiliary          ┌──────────────┐
        ╱ ○ ○ ╲   projected          │   ╭───╮      │
       ╱_______╲  perpendicular      │   │ B │ ← circled
      ╱                              │   ╰───╯      │
   ┌─╱──────────┐                    └──────────────┘
   │╱ inclined  │                            │
   │  face at   │                            ▼
   │    30°     │                      ┌───────────┐
   └────────────┘                      │  ╱▔▔▔╲    │
    foreshortened in                   │ ╱  ○  ╲   │
    the principal view                 │╱_______╲  │
                                       └───────────┘
                                        DETAIL B
                                        SCALE 4:1

  ─────────────────────────────────────────────────────────────

  NOT SECTIONED — even when the cutting plane passes through them:

     bolts · screws · nuts · washers · pins · dowels · keys
     shafts · rivets · ribs (cut longitudinally) · ball bearings

     ┌─────────────────────────────┐
     │╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱│
     │╱╱╱╱╱╱╱┌───────┐╱╱╱╱╱╱╱╱╱╱╱╱╱│
     │╱╱╱╱╱╱╱│▐▌▐▌▐▌▐│╱╱╱╱╱╱╱╱╱╱╱╱╱│  ← bolt shown WHOLE,
     │╱╱╱╱╱╱╱└───────┘╱╱╱╱╱╱╱╱╱╱╱╱╱│     NOT hatched
     └─────────────────────────────┘
      plate IS hatched
```

### 16. Drawing example

```
   FIXTURE BASE PLATE — VIEW SET
   FOR TRAINING ONLY — NOT FOR MANUFACTURE

   TOP VIEW (positions)              SECTION A-A (depths)
   ┌───────────────────┐             ┌───────────────────┐
   │  A                │             │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
   │  ┊  ⊕      ⊕      │             │▓▓┌──┐▓▓▓▓▓▓┌──┐▓▓▓│ ← Ø20 c'bore
   │  ┊                │             │▓▓│  │▓▓▓▓▓▓│  │▓▓▓│    12 DEEP
   │  ┊     ╭───╮      │             │▓▓│▐▌│▓▓▓▓▓▓│▐▌│▓▓▓│ ← M12 thread
   │  ┊     │ B │      │             │▓▓└──┘▓▓▓▓▓▓└──┘▓▓▓│    18 DEEP
   │  ┊     ╰───╯      │             │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
   │  ┊  ⊕      ⊕      │             └───────────────────┘
   │  A                │              SECTION A-A
   └───────────────────┘
    hole POSITIONS here            hole DEPTHS here
    (X, Y from datums)             ▲
                                   │
              ┌────────────────────┴──────────────────────┐
              │ WITHOUT THE SECTION, THE DEPTHS ARE       │
              │ UNDEFINED AND THE DRAWING IS INCOMPLETE.  │
              └───────────────────────────────────────────┘
```

### 17. CAD workflow

Creating views from a 3D model (SolidWorks terminology; equivalents given):

| Step | SolidWorks | Creo | Siemens NX |
|---|---|---|---|
| Base view | `Model View` | `General` view | `Base View` |
| Projected views | `Projected View` | `Projection` | `Projected View` |
| Section | `Section View` (sketch the line) | `Section` in view properties | `Section View` |
| Detail | `Detail View` (sketch a circle) | `Detailed` view | `Detail View` |
| Auxiliary | `Auxiliary View` (select an edge) | `Auxiliary` | `Detail View` on inclined datum |
| Broken | `Break` | `Broken` view | `Break View` |

**Professional practice points:**
1. Create sections **from the model**, never by drawing lines manually — sections then update
   automatically when the model changes. Manually drawn sections become wrong at the first revision
   and nobody notices.
2. Set hatching to update automatically from the assigned material.
3. Check that fasteners are excluded from sectioning — most CAD systems handle this, but verify.
   SolidWorks: right-click the component in the section → *"Exclude from section"* if needed.
4. Always state the detail-view scale — CAD does this automatically; do not delete it.

Full drawing creation is taught at L24.4.3 and L25.

### 18. GD&T application
Not applicable at this lesson (GD&T begins at L21). Forward link worth noting: **datum feature symbols
and feature control frames are frequently attached in section views**, because that is where the
controlled surface is visible. When you reach L21–L22 you will place FCFs on sectioned features
routinely — for example, perpendicularity of a bore to a face is naturally shown in section.

### 19. Manufacturing method
Not applicable at this lesson. Shop-floor reality: the machinist programs depths from the **section
view**. If your section is missing, wrong, or inconsistent with the top view, the depths are wrong.
This is why R9 (check all views after revision) exists — a revision that changes a depth in the model
updates the section automatically **only if the section was created from the model** (see §17).

### 20. Inspection method
Not applicable at this lesson. Note: inspectors also work from sections when measuring depths,
counterbores and internal features. An unsectioned internal feature is an uninspectable feature at the
drawing stage, and "how do I measure this?" is a question you should ask yourself while drawing, not
after. Inspection planning is taught at L28.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | No section view for internal features | Depths undefined; drawing incomplete but looks complete |
| 2 | Hidden lines retained in a section view | Clutter; defeats the purpose of sectioning |
| 3 | Sectioning bolts, pins, dowels or shafts | Non-standard drawing; confuses readers |
| 4 | Same hatch angle on adjacent parts | Parts indistinguishable in an assembly section |
| 5 | Different hatch on the same part in different views | Reader thinks they are different parts |
| 6 | Detail view without a stated scale | Reader may scale it (and drawings must not be scaled anyway) |
| 7 | Inclined face dimensioned in a principal view | Foreshortened dimension (see L0.2.1 §13) |
| 8 | Too many views | Cost, clutter, and views that contradict after revision |
| 9 | Too few views | Ambiguity; the reader guesses |
| 10 | Sections drawn manually instead of generated from the model | Sections silently go stale at the first revision |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Machinist asks "how deep?" | No section view, or depth omitted | Check whether any view carries the depth | Add section with depth dimensions | Section every internal feature |
| Section contradicts the top view | Section drawn manually; model revised since | Compare section to the 3D model | Regenerate section from model | Always generate sections from the model |
| Assembly section unreadable | Same hatch angle/spacing on adjacent parts | Look for boundaries between parts | Change hatch angle per part | Set hatch conventions in the template |
| Feature made at the wrong size | Detail view scale ignored or missing | Check the detail's stated scale | Add/verify scale; re-dimension | Never omit the detail-view scale |
| Angled feature made wrong | Dimensioned in a foreshortened view | Check for an auxiliary view | Add auxiliary view in true shape | Auxiliary view for every dimensioned inclined face |

### 23. Design checklist
- [ ] Have I used the minimum sufficient number of views?
- [ ] Is every internal feature shown in a section?
- [ ] Have I removed unnecessary hidden lines from sections?
- [ ] Are fasteners, pins, dowels and shafts left unsectioned?
- [ ] Do adjacent parts hatch differently, and the same part identically across views?
- [ ] Does every detail view state its scale?
- [ ] Does every inclined dimensioned face have an auxiliary view?
- [ ] Is every section and detail labelled, with matching markers on the parent view?
- [ ] Were all sections generated from the model rather than drawn manually?
- [ ] After the latest revision, have I re-checked **every** view for consistency?
- [ ] Can a machinist build this part without phoning me?

### 24. Beginner exercise
**E0.2.2-B** — Name the seven section types listed in §6 and state one situation where each is the
best choice. Then list eight component types that are never sectioned even when the cutting plane
passes through them.

### 25. Intermediate exercise
**E0.2.2-I** — A fixture riser block 60 mm thick has: an M16 tapped hole with Ø26 × 15 mm counterbore
requiring 20 mm of full thread; and a Ø12 H7 dowel hole 25 mm deep. M16 coarse pitch = 2.0 mm `[STD]`.
(a) Calculate the drill depth for the tapped hole using a 3 × pitch lead-in allowance.
(b) Calculate the remaining material below the tapped hole.
(c) State whether it passes a 5 mm minimum-remaining-material criterion.
(d) List which view must carry each of the six dimensions involved.

### 26. Advanced exercise
**E0.2.2-A** — You are given a fixture base plate drawing with only a top view and a front view. It
shows four Ø20 counterbored holes, two Ø10 dowel holes, one 25° inclined locating face with two
tapped holes in it, and an internal coolant passage.
(i) List every dimension that **cannot** be unambiguously communicated with only these two views.
(ii) Specify the complete additional view set required (type, label, scale, and what each must carry).
(iii) Justify the minimum sufficient set — for each view you add, state what would be ambiguous without it.
(iv) Identify which single omitted view creates the greatest risk of a scrapped plate, and explain why.
(v) Explain how you would verify, after a future revision moves the inclined face to 30°, that every
view has updated correctly.

### 27. Interview questions
1. *"When would you use a section view instead of hidden lines?"*
   **Answer:** Whenever internal features would require confusing or overlapping hidden lines —
   which is almost always for counterbored, tapped or internally featured parts. A section replaces
   hidden lines and shows the feature clearly; hidden lines for that feature should then be omitted
   from the section. *(Reasoning: sections exist to replace hidden lines, not supplement them.)*
2. *"Which components are never sectioned, and why?"*
   **Answer:** Bolts, screws, nuts, washers, pins, dowels, keys, shafts, rivets, rolling elements, and
   ribs cut longitudinally. They have no internal features to reveal, so hatching them adds clutter
   and obscures the parts that matter. This convention appears constantly in fixture assembly
   drawings, which are dense with fasteners and dowels.

### 28. Expert questions
1. *"A drawing you receive has a section view that contradicts the top view. What do you do, and what
   does it tell you about the drawing's provenance?"*
   **Answer:** I stop and query it formally in writing — I never pick the view that seems more likely,
   because a 50% guess on a fixture is unacceptable. What it tells me is diagnostic: a contradiction
   between views almost always means the section was **drawn manually rather than generated from the
   model**, and the model was subsequently revised while the manual section went stale. That is a
   process defect, not a one-off slip, so I would also flag that other drawings from the same source
   may carry the same latent error — and I would check the specific drawings I am already using from
   that source. The immediate fix is a reissue; the systemic fix is model-generated sections.
2. *"How do you decide the minimum sufficient view set — is there a test?"*
   **Answer:** Yes, and it is practical rather than theoretical: **can a competent machinist make the
   part, and a competent inspector verify it, without asking a single question?** I apply it by walking
   the feature list — every feature must have its size, its position and its depth or extent traceable
   to a specific dimension in a specific view. Any feature failing that walk needs another view or
   another dimension. Conversely, any view whose removal loses no feature information should be
   deleted, because surplus views cost money and become inconsistent after revisions. The test is
   feature-by-feature completeness, not an aesthetic judgement about how the sheet looks.

### 29. Summary
Beyond the principal views, drawings use sections (full, half, offset, revolved, removed, broken-out,
aligned) to reveal internal features, auxiliary views to show inclined faces in true shape, and detail
views to enlarge small features. Cut material is hatched; fasteners, pins, dowels, shafts and
longitudinal ribs are never sectioned. Depths and internal geometry live in section views — a drawing
of a counterbored or tapped part without a section is incomplete regardless of how good the top view
looks. The governing rule is the minimum sufficient set: enough views to remove all ambiguity, and no
more.

### 30. Key takeaways
- **Sections replace hidden lines** — they do not supplement them.
- **Depths live in sections.** A top view alone cannot define a counterbore or a tapped hole.
- **Never section** bolts, pins, dowels, shafts, keys or longitudinal ribs.
- Hatch **adjacent parts differently**, the **same part identically** across views.
- **Always state detail-view scale.** Always use an **auxiliary view** for dimensioned inclined faces.
- **Minimum sufficient set:** enough views to remove all ambiguity, no more.
- **Generate sections from the model**, never manually — manual sections go stale at the first revision.
- The test of a complete view set: *can it be made and inspected without a single phone call?*

---
---

## LESSON L0.2.3 — LINE TYPES AND THEIR MEANINGS

### 1. Lesson title
**L0.2.3 — Lines and their meanings: visible, hidden, centre, phantom, section, break, cutting-plane**

### 2. Learning objective
By the end of this lesson you will be able to identify every standard line type by appearance,
state its meaning, apply the correct line-weight hierarchy, and detect the drawing errors that arise
from incorrect line usage.

### 3. Prerequisites
L0.2.1, L0.2.2.

### 4. Why the topic matters
Lines are the drawing's alphabet. Each line type carries a specific, standardised meaning, and the
difference between two line types can be the difference between a solid edge and a hole that isn't
there.

The most consequential example for a fixture engineer: a **centreline** is not a real edge — it is a
reference. A **phantom line** shows something that exists but is not part of this drawing — very often
**the workpiece itself** on a fixture drawing. Misreading a phantom-line workpiece as fixture material
means machining a solid block where the part is supposed to sit.

### 5. Simple explanation
Different kinds of lines mean different things:

- **Thick solid** = an edge you can see and touch
- **Thin dashed** = an edge that's there but hidden behind material
- **Thin chain (long-short-long)** = a centreline; not a real edge, just a reference
- **Thin chain with two short dashes** = a phantom line; something that exists but isn't part of this drawing
- **Thin diagonal** = hatching; material that has been cut through
- **Thin wavy or zigzag** = a break; part of the object has been left out to save space

### 6. Engineering explanation

**The standard line types** `[STD ISO 128 / ASME Y14.2]`

| Line type | Appearance | Weight | Meaning |
|---|---|---|---|
| **Visible / outline** | `─────────────` continuous | **Thick** | Edges and outlines that are visible |
| **Hidden** | `─ ─ ─ ─ ─ ─` short dashes | Thin | Edges concealed behind material |
| **Centre** | `──·──·──·──` long-short-long chain | Thin | Axes of symmetry, hole centres, bolt circles |
| **Phantom** | `──··──··──··` long-short-short-long | Thin | Adjacent parts, alternate positions, **the workpiece on a fixture drawing** |
| **Dimension** | `←──────→` continuous with arrows | Thin | Indicates the extent of a dimension |
| **Extension** | `│` continuous, projecting | Thin | Projects a feature out to its dimension line |
| **Leader** | `╱───` continuous with arrow/dot | Thin | Points to a feature for a note or callout |
| **Section / hatching** | `╱╱╱╱╱╱` diagonal | Thin | Material cut by the section plane |
| **Cutting plane** | `━━┃━━┃━━` thick chain with arrows | **Thick** | Where a section is taken; arrows show viewing direction |
| **Break (short)** | `∿∿∿∿` freehand wavy | Thin | Short break; broken-out sections |
| **Break (long)** | `───⌇───⌇───` straight with zigzags | Thin | Long break in a uniform part |
| **Chain (thick)** | `━━·━━·━━` thick chain | **Thick** | Surfaces requiring special treatment (e.g. induction hardening) |

**The line-weight hierarchy** — typically two weights in a 1:2 ratio `[STD]`:

```
THICK (e.g. 0.5 mm) : visible outlines, cutting-plane lines, special-surface chain
THIN  (e.g. 0.25 mm): hidden, centre, phantom, dimension, extension, leader,
                      hatching, break lines
```
Exact widths depend on sheet size and the standard in use `[STD] — must be confirmed against your
company's drawing standard`. The **ratio and the hierarchy** matter more than the absolute values: a
drawing where everything is the same weight is measurably harder and slower to read.

**Line precedence** — when lines coincide, this order applies `[STD]`:

```
1. Visible line     (always wins)
2. Hidden line
3. Centreline
```
So if a visible edge and a centreline fall on the same spot, draw the **visible line**.

**Centreline conventions (important and frequently done badly):**
- Centrelines **extend slightly beyond** the feature they mark (typically 2–3 mm `[PRACTICE]`)
- They **cross at the long dashes**, never at the short dashes or at a gap
- Circles get **two perpendicular centrelines** crossing at the centre
- Bolt circles get a **circular centreline** plus radial centrelines through each hole
- A centreline is **not a dimension line** and must never be used as one

**Phantom lines in fixture drawings — the critical application:**

On a fixture assembly drawing, the **workpiece is drawn in phantom lines**. This communicates
unambiguously: *this is where the part sits, but the part is not supplied with the fixture.*

This convention matters enormously. A toolroom given a fixture drawing with the workpiece drawn in
**solid** lines may reasonably interpret the workpiece as fixture material and machine a solid block.
Conversely, an engineer reading a phantom-line workpiece as a real fixture component will design
clamps that collide with nothing and locators that support air.

Phantom lines are also used for:
- Alternate positions of moving parts (a clamp shown both open and closed)
- Adjacent parts not included in this drawing
- Repeated detail omitted for clarity
- Original outline of material before machining

### 7. Terminology

| Term | Definition |
|---|---|
| **Visible line / outline** | Thick continuous line showing a visible edge |
| **Hidden line** | Thin dashed line showing a concealed edge |
| **Centreline** | Thin chain line showing an axis or centre of symmetry |
| **Phantom line** | Thin double-dashed chain showing something not part of this drawing |
| **Cutting-plane line** | Thick chain line with direction arrows showing where a section is taken |
| **Break line** | Line showing that part of the object has been omitted |
| **Line weight** | The thickness of a line |
| **Line precedence** | The rule determining which line is drawn when two coincide |
| **Extension line** | Thin line projecting a feature out to its dimension line |
| **Leader line** | Thin line with an arrow or dot pointing to a feature for a note |

### 8. Principle

> **A CENTRELINE IS NOT AN EDGE. A PHANTOM LINE IS NOT YOUR MATERIAL.**
> These two are the most consequential line-reading errors in fixture engineering.
> The first invents material that isn't there; the second machines away the space where the part sits.

### 9. Industrial application

**A typical fixture assembly drawing uses at minimum:**

```
FIXTURE ASSEMBLY DRAWING — LINE USAGE

  THICK VISIBLE   → base plate, locators, clamps, all fixture components
  PHANTOM         → THE WORKPIECE (this is the critical one)
  PHANTOM         → clamp shown in its open position
  CENTRELINE      → dowel-hole axes, bolt-circle centres, part centreline
  HIDDEN          → tapped holes below the surface, internal features
  CUTTING PLANE   → where SECTION A-A is taken
  HATCHING        → cut material in the section
  LEADER          → balloon numbers pointing to each component
  BREAK           → a long base plate shortened to fit the sheet
```

**A real failure this convention prevents:**

A toolroom receives a fixture drawing where the workpiece was drawn in solid lines by an inexperienced
designer. The toolroom quotes and machines the "component" as part of the fixture — a solid block
occupying exactly the volume the actual workpiece is meant to fill. The error is discovered at
assembly, when there is nowhere to put the part.

**Cost:** one scrapped fixture body, roughly ₹90,000 and two weeks `[EX-ASSUMED]`.
**Cause:** one wrong line type.

### 10. Design rules
- **R1** — Use only standard line types. Never invent a line style.
- **R2** — Maintain the thick/thin hierarchy — approximately 2:1 `[STD]`.
- **R3** — Apply line precedence: visible > hidden > centre.
- **R4** — **Always draw the workpiece in phantom lines** on a fixture drawing.
- **R5** — Extend centrelines slightly beyond the feature; cross them at the long dashes.
- **R6** — Never use a centreline as a dimension line or an extension line.
- **R7** — Omit hidden lines where a section already shows the feature (L0.2.2 R3).
- **R8** — Add a note stating the workpiece is shown for reference only and is not supplied — belt and
  braces alongside the phantom lines.
- **R9** — Set line styles in the CAD **template**, never per drawing.

### 11. Rules of thumb
- Two line weights are sufficient for almost all drawings `[PRACTICE]`.
- If a drawing is hard to read, check the line weights before blaming the view arrangement — uniform
  weight is a very common and easily fixed defect.
- Excessive hidden lines signal a missing section view (L0.2.2).
- On a fixture drawing, if you cannot immediately tell which outline is the workpiece, neither can the
  toolroom.
- Centrelines drawn as plain thin continuous lines are a classic beginner tell — and they lose the
  "this is an axis" information entirely.

### 12. Formulae
Line conventions are graphical standards; no formulae apply.

The one quantitative relationship:

**Line weight ratio** `[STD]`
```
w_thick / w_thin ≈ 2
```
Typical pairs: 0.5 / 0.25 mm, 0.7 / 0.35 mm, 1.0 / 0.5 mm.
Selection depends on sheet size and reduction — larger sheets and drawings intended for reduction use
heavier lines. Confirm against your company standard.

### 13. Worked numerical example

**Problem:** A fixture assembly drawing is to be produced on A2 sheet at 1:2 scale, and will also be
issued as A3 reductions for shop-floor use. Determine appropriate line weights, verify legibility
after reduction, and state the consequence of choosing a single uniform line weight.

```
GIVEN:
  Original sheet size        A2 (594 × 420 mm)                  [STD]
  Reduced sheet size         A3 (420 × 297 mm)                  [STD]
  Drawing scale              1:2                                [PROJ]
  Proposed line weights      thick 0.5 mm / thin 0.25 mm        [PRACTICE]
  Minimum legible printed
    line width               0.13 mm                            [GUIDE]

REQUIRED:
  (a) Reduction factor from A2 to A3
  (b) Effective line widths after reduction
  (c) Whether both remain legible
  (d) Consequence of using a single uniform line weight

ASSUMPTION:
  1. A2 → A3 is one ISO reduction step; the linear reduction factor
     is 1/√2 ≈ 0.707. [STD]
  2. Minimum legible reproduced line width taken as 0.13 mm. This is
     a printing/legibility guideline and depends on the output device
     and paper; MUST BE CONFIRMED for your reprographics. [GUIDE]
  3. Drawing scale (1:2) affects feature size, NOT line weight —
     line weights are a property of the sheet, not the model.

FORMULA:
  Reduction factor  k = 1/√2
  w_reduced = w_original × k
  Legible if:  w_reduced ≥ w_min

VARIABLE DEFINITIONS:
  k          = linear reduction factor between ISO sheet sizes
  w_original = line width as drawn on the A2 sheet    (mm)
  w_reduced  = line width after reduction to A3       (mm)
  w_min      = minimum legible reproduced width       (mm)

UNIT CONVERSION:
  All widths in mm. √2 = 1.4142.

SUBSTITUTION:
  k               = 1 / 1.4142
  w_thick_reduced = 0.50 × k
  w_thin_reduced  = 0.25 × k

CALCULATION:
  (a) k = 1 / 1.4142 = 0.7071

  (b) w_thick_reduced = 0.50 × 0.7071 = 0.354 mm
      w_thin_reduced  = 0.25 × 0.7071 = 0.177 mm

  (c) Legibility check against w_min = 0.13 mm:
        thick: 0.354 ≥ 0.13   ✓ PASS  (margin 2.7×)
        thin : 0.177 ≥ 0.13   ✓ PASS  (margin 1.4×)

      Weight ratio after reduction:
        0.354 / 0.177 = 2.0   ✓ hierarchy preserved

RESULT:
  (a) Reduction factor      = 0.707
  (b) Reduced widths        = 0.354 mm thick, 0.177 mm thin
  (c) Both remain legible; the 2:1 hierarchy is preserved
  (d) See conclusion

SAFETY FACTOR:
  Thin line margin = 0.177 / 0.13 = 1.36
  This is adequate for ONE reduction step but marginal for two.

PASS/FAIL:
  ✓ PASS for A2 → A3 (one step).
  ✗ MARGINAL/FAIL for a second reduction (A3 → A4):
      0.177 × 0.707 = 0.125 mm  <  0.13 mm
  Thin lines would begin to break up and disappear on a
  second-generation reduction.

ENGINEERING CONCLUSION:
  The proposed 0.5 / 0.25 mm pair is correct for A2 originals
  issued as A3 reductions. Three practical points:

  1. DO NOT REDUCE TWICE. A3 → A4 pushes thin lines below the
     legibility threshold. If A4 copies are required, they must be
     generated fresh from CAD at A4 with appropriate line weights,
     never photocopied down from A3.

  2. IF SHOP-FLOOR COPIES DEGRADE, the cause is usually
     second-generation copying, not the original drawing. Fix the
     reprographics process, not the line weights.

  3. CONSEQUENCE OF A SINGLE UNIFORM LINE WEIGHT (part d):
     If all lines were drawn at 0.35 mm, every line would remain
     legible — but the reader loses the instant visual distinction
     between a visible EDGE and a hidden line, a centreline, or a
     dimension line. Reading slows measurably, and on a dense
     fixture assembly drawing the workpiece phantom outline stops
     standing out from the fixture outlines. Legibility is NOT the
     same as readability: the hierarchy carries information, and
     removing it removes information even though every line is
     still visible.

SENSITIVITY NOTE:
  Thin-line legibility is the binding constraint in every reduction
  scenario. When choosing weights, size the THIN line for the worst
  reproduction path the drawing will take, then set thick at 2×.
```

### 14. Engineering assumptions
- ISO reduction factor 1/√2 between consecutive sheet sizes `[STD]`.
- Minimum legible reproduced width 0.13 mm `[GUIDE]` — device- and paper-dependent, must be confirmed.
- One reduction step only; the analysis explicitly flags the two-step case as failing.
- Line weight is a sheet property independent of drawing scale.

### 15. Diagram

```
     STANDARD LINE TYPES
     (instructional schematic)

  VISIBLE / OUTLINE     ━━━━━━━━━━━━━━━━━━━━   THICK
                        visible edges

  HIDDEN                ─ ─ ─ ─ ─ ─ ─ ─ ─ ─    thin
                        edges behind material

  CENTRE                ──── ─ ──── ─ ────     thin
                        axes, hole centres      (long-short-long)

  PHANTOM               ──── ─ ─ ──── ─ ─      thin
                        workpiece, alternate    (long-short-short-long)
                        positions, adjacent parts

  DIMENSION             ←──────────────→       thin

  EXTENSION             │              │       thin

  LEADER                ╱───── note            thin

  HATCHING              ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱        thin (45°)

  CUTTING PLANE         ━━┃━━━━━━━━━━┃━━       THICK chain
                          ▼          ▼          with direction arrows

  BREAK (short)         ∿∿∿∿∿∿∿∿∿∿∿∿∿          thin freehand

  BREAK (long)          ─────⌇─────⌇─────      thin with zigzags

  ─────────────────────────────────────────────────────────────────

     LINE PRECEDENCE — when lines coincide

        VISIBLE  ►  HIDDEN  ►  CENTRE
        (visible always wins)

  ─────────────────────────────────────────────────────────────────

     THE CRITICAL FIXTURE CONVENTION

     ┌───────────────────────────────────────────────────────┐
     │                                                       │
     │      ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐                            │
     │      ╵    WORKPIECE      ╵  ◄── PHANTOM LINES         │
     │      ╵  (not supplied)   ╵      "the part goes here"  │
     │      └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘                            │
     │   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄                         │
     │   ███████████████████████████  ◄── THICK VISIBLE      │
     │   ███ FIXTURE BASE PLATE ████      actual fixture     │
     │   ███████████████████████████      material           │
     │       ╷         ╷                                     │
     │       ┊         ┊              ◄── CENTRELINES        │
     │       ┊         ┊                  dowel axes         │
     │                                                       │
     └───────────────────────────────────────────────────────┘

     ┌───────────────────────────────────────────────────────┐
     │ IF THE WORKPIECE IS DRAWN SOLID, THE TOOLROOM MAY     │
     │ MACHINE IT AS FIXTURE MATERIAL. THIS HAS HAPPENED.    │
     └───────────────────────────────────────────────────────┘
```

### 16. Drawing example

```
   CENTRELINE CONVENTIONS — CORRECT vs WRONG
   FOR TRAINING ONLY — NOT FOR MANUFACTURE

   CORRECT                          WRONG
   ───────────────────────          ───────────────────────

        ┊                                ┊
     ───┼───  ╭───╮                  ────┼───╭───╮
        ┊     │ ○ │                      ┊   │ ○ │
        ┊     ╰───╯                      ┊   ╰───╯
                                    
   ✓ crosses at LONG dashes         ✗ crosses at a GAP
   ✓ extends 2-3 mm beyond          ✗ stops at the feature edge
   ✓ thin chain line                ✗ drawn as plain thin
                                        continuous line

   BOLT CIRCLE — CORRECT

            ┊
        ○   ┊   ○
      ╭ ─ ─ ┼ ─ ─ ╮   ◄── circular centreline through
      ┊     ┊     ┊       the bolt-hole centres
   ───┼─────┼─────┼───
      ┊     ┊     ┊
      ╰ ─ ─ ┼ ─ ─ ╯
        ○   ┊   ○
            ┊
   ✓ circular centreline + radial centrelines through each hole
```

### 17. CAD workflow

Line styles are controlled by **layers** (or their equivalent) in every CAD system, and belong in the
template:

| CAD system | Where line styles are controlled |
|---|---|
| SolidWorks | `Tools ▸ Options ▸ Document Properties ▸ Line Font` / `Line Style`; layers via the Layer toolbar |
| Creo | `.dtl` detail options + `pen table`; layers |
| Siemens NX | Drafting preferences → Line/Arrow; object display settings |
| CATIA | Graphic properties + standards file |
| Inventor | Styles Editor → Layers |

**Professional practice:**
1. Define line styles **once in the company template**. Never adjust per drawing.
2. To draw the workpiece in phantom on a fixture assembly, insert the part into the assembly and set
   its drawing-view display to phantom — in SolidWorks, right-click the component in the drawing view →
   `Component Line Font` → set to Phantom. Do **not** trace the outline manually.
3. Verify the plotted output, not just the screen. Screen display and plotted line weights differ, and
   a drawing that looks correct on screen can plot with no hierarchy at all.
4. Add the standard note alongside the phantom workpiece:
   `WORKPIECE SHOWN IN PHANTOM FOR REFERENCE ONLY — NOT SUPPLIED WITH FIXTURE`.

### 18. GD&T application
Not applicable at this lesson (GD&T begins at L21). Two forward links worth noting now:
- **Datum feature symbols** attach to visible outlines or extension lines, never to centrelines. A
  datum triangle placed on a centreline is a GD&T error, taught at L21.2.1.
- **Basic dimensions** (boxed) are drawn with the same thin dimension lines but with a rectangle around
  the value — the line type is unchanged; only the frame differs.

### 19. Manufacturing method
Not applicable at this lesson. Shop relevance: a machinist scanning a drawing uses line weight to find
the part outline instantly. Uniform-weight drawings slow this down on every reading, by every person,
for the life of the drawing — a small cost multiplied by a large number.

### 20. Inspection method
Not applicable at this lesson. Note: inspectors use centrelines to establish measurement axes. A
missing or incorrectly drawn centreline on a hole pattern makes the intended measurement reference
ambiguous — the inspector then chooses one, and it may not be the one you intended.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Workpiece drawn in solid lines on a fixture drawing** | Toolroom machines the workpiece volume as fixture material |
| 2 | Uniform line weight throughout | Drawing legible but not readable; slow to interpret |
| 3 | Centreline drawn as plain thin continuous | Axis information lost; feature reads as an edge |
| 4 | Centrelines crossing at gaps or short dashes | Non-standard; centre position ambiguous |
| 5 | Centreline used as a dimension or extension line | Non-standard; confuses reference with measurement |
| 6 | Hidden line drawn where a visible line exists | Violates precedence; edge appears concealed |
| 7 | Excessive hidden lines | Signals a missing section view |
| 8 | Phantom lines used for real fixture components | Reader assumes the component isn't supplied |
| 9 | Line styles set per drawing rather than in template | Inconsistency across the drawing pack |
| 10 | Verifying only on screen, never on plot | Plotted hierarchy absent despite correct screen display |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Toolroom quotes a suspiciously large fixture body | Workpiece drawn solid, counted as fixture material | Check the workpiece outline's line type | Reissue with phantom lines + note | Set component line font in the template |
| Drawing hard to read | Uniform line weight | Compare outline weight to dimension-line weight | Restore 2:1 hierarchy | Define weights in the template |
| Machinist unsure which hole is which | Centrelines missing or non-standard | Check for chain lines through hole centres | Add proper centrelines | Enable automatic centre marks in CAD |
| Lines disappear on shop-floor copies | Second-generation reduction below 0.13 mm | Measure line width on the copy | Reprint from CAD at required size | Never photocopy drawings down twice |
| Assembly drawing components indistinguishable | Same hatch and same line weight | Inspect part boundaries | Vary hatch; verify weights | Template-driven standards |

### 23. Design checklist
- [ ] Is the workpiece drawn in **phantom lines**?
- [ ] Is the "workpiece not supplied" note present?
- [ ] Is the thick/thin hierarchy (≈2:1) maintained?
- [ ] Are all centrelines chain lines, extending 2–3 mm beyond features, crossing at long dashes?
- [ ] Do all circular features have proper centre marks?
- [ ] Is line precedence (visible > hidden > centre) respected?
- [ ] Are hidden lines omitted where a section shows the feature?
- [ ] Are phantom lines used **only** for non-supplied or alternate-position items?
- [ ] Were line styles taken from the company template rather than set manually?
- [ ] Have I checked the **plotted** output, not just the screen?
- [ ] If this drawing will be reduced, do thin lines survive the reduction?

### 24. Beginner exercise
**E0.2.3-B** — (a) Draw and label the seven principal line types from §6, showing appearance and
weight. (b) State the line precedence order. (c) State which line type is used for the workpiece on a
fixture drawing and explain why in one sentence.

### 25. Intermediate exercise
**E0.2.3-I** — A fixture assembly drawing is issued on A1 with line weights 0.7 mm thick / 0.35 mm
thin, then reduced to A3 for the shop floor (two reduction steps: A1→A2→A3).
(a) Calculate the effective line widths after both reductions.
(b) Check both against a 0.13 mm minimum legibility criterion `[GUIDE]`.
(c) State whether the drawing survives, and if not, propose two different solutions.
(d) Explain why the thin line, not the thick line, governs the decision.

### 26. Advanced exercise
**E0.2.3-A** — You are reviewing a fixture assembly drawing produced by a junior designer. You observe:
the workpiece drawn in thick visible lines; centrelines drawn as thin continuous lines; hidden lines
retained inside SECTION A-A; the same hatch angle used on the base plate and the adjacent riser block;
all lines plotted at 0.35 mm.
(i) List each defect, state the standard it violates, and state the specific production consequence.
(ii) Rank the defects by risk of causing a scrapped component, with justification.
(iii) State which single corrective action prevents the greatest number of these defects recurring
across the whole department, and explain why that root-cause fix beats correcting the drawing.
(iv) Draft the three-line design-review comment you would write.

### 27. Interview questions
1. *"How is the workpiece shown on a fixture assembly drawing, and why?"*
   **Answer:** In phantom lines (long-short-short-long chain), usually with a note stating it is shown
   for reference and not supplied. This tells the toolroom unambiguously that the workpiece is not
   fixture material. If drawn in solid lines, the toolroom may machine a solid block occupying the
   volume where the part is meant to sit — a scrapped fixture body caused by one wrong line type.
2. *"What is line precedence and why does it exist?"*
   **Answer:** When lines coincide, visible takes priority over hidden, which takes priority over
   centre. It exists because a drawing must be unambiguous: without a precedence rule, coinciding
   lines would be drawn inconsistently and a real edge could be shown as hidden or as an axis.

### 28. Expert questions
1. *"A drawing is fully legible but the shop consistently misreads it. Line weights are uniform. Explain
   the engineering distinction you would make in your review comment."*
   **Answer:** I would distinguish **legibility** from **readability**. Every line is visible, so the
   drawing is legible — but line weight is an information channel, and uniform weight has switched that
   channel off. The reader can no longer distinguish, at a glance, a part outline from a dimension
   line, a hidden edge, or a centreline; they must consciously decode what should be perceived
   instantly. On a dense fixture assembly, the phantom workpiece stops standing out from the fixture
   outlines, which is where the real risk sits. The comment would be that the drawing carries all the
   required information but has lost the visual hierarchy that makes it usable, and the fix is a
   template-level line-weight standard, not a redraw of this sheet.
2. *"Your company has recurring line-convention errors across many drawings and designers. What is the
   correct engineering response?"*
   **Answer:** Recurring errors across many people is a **system** problem, not a competence problem,
   so correcting individual drawings treats the symptom. The correct response is layered:
   (i) fix the **CAD template** so correct line styles, weights and layers are the default and the
   wrong ones require deliberate effort;
   (ii) set **component line font to phantom automatically** for the workpiece in the fixture assembly
   template;
   (iii) add the specific recurring items to the **drawing-review checklist** (L54) so they are caught
   before release;
   (iv) verify at the **plotter**, since screen and plot differ.
   The general principle is the same one taught in Poka-Yoke (L45): make the correct outcome the
   default and the incorrect outcome difficult, rather than relying on people to remember. Training
   alone has the worst decay rate of any corrective action.

### 29. Summary
Standard line types each carry a defined meaning: thick continuous for visible edges, thin dashed for
hidden edges, thin chain for centrelines, thin double-dashed chain for phantom items, plus dimension,
extension, leader, hatching, cutting-plane and break lines. A thick/thin hierarchy of about 2:1 makes
drawings readable, and line precedence (visible > hidden > centre) resolves coinciding lines. For
fixture engineering the decisive convention is that the **workpiece is drawn in phantom lines** — a
solid-line workpiece invites the toolroom to machine it as fixture material.

### 30. Key takeaways
- **The workpiece is drawn in phantom lines** on every fixture drawing, with a supporting note.
- **A centreline is not an edge**; a **phantom line is not your material**.
- Maintain the **2:1 thick/thin hierarchy** — it is an information channel, not decoration.
- **Line precedence:** visible > hidden > centre.
- Centrelines extend past the feature and cross at the **long dashes**.
- Set line styles in the **template**, and verify on the **plot**, not the screen.
- Recurring convention errors are a **system** problem — fix the template and the checklist.

---
---

## LESSON L0.2.4 — READING THE TITLE BLOCK

### 1. Lesson title
**L0.2.4 — Reading a title block, revision table, general-tolerance note, scale and projection symbol**

### 2. Learning objective
By the end of this lesson you will be able to extract every piece of information a title block
carries, interpret a general-tolerance note and apply it to undimensioned features, read a revision
table and determine what changed, and identify when a drawing is incomplete or unsafe to work from.

### 3. Prerequisites
L0.2.1, L0.2.2, L0.2.3.

### 4. Why the topic matters
The title block is the smallest area of a drawing and carries the highest density of decision-critical
information. It tells you the part number, the revision, the material, the projection system, the
scale, the general tolerance, the heat treatment and the surface finish.

Most importantly: **the general-tolerance note silently governs every dimension on the drawing that
has no tolerance of its own.** On a typical fixture drawing, that is the majority of dimensions. An
engineer who does not read the general-tolerance note does not actually know what the drawing requires.

And the revision field is the difference between building the right fixture and building a fixture for
a part that no longer exists (L0.1.2 §9).

### 5. Simple explanation
The box in the corner of the drawing tells you:

- **What** it is (part name and number)
- **Which version** it is (revision)
- **What it's made of** (material)
- **How big the drawing is drawn** (scale)
- **Which projection system** (first or third angle)
- **How accurate undimensioned features must be** (general tolerance)
- **Who drew, checked and approved it** (and when)

Read all of it. Every time. Before anything else.

### 6. Engineering explanation

**Standard title block contents** `[STD]` (exact layout varies by company; content is broadly standardised):

| Field | What it tells you | Why it matters to you |
|---|---|---|
| **Part number** | Unique identifier | Traceability; BOM matching; ordering |
| **Part name / title** | Descriptive name | Quick identification |
| **Drawing number** | Identifier of the drawing (may differ from part number) | Document control |
| **Revision** | Version identifier (A, B, C… or 00, 01…) | **Critical** — is this current? |
| **Sheet x of y** | Multi-sheet drawings | Are you missing a sheet? |
| **Scale** | Ratio of drawn size to true size | Never scale, but tells you the drawing's intent |
| **Projection symbol** | First or third angle | **Critical** — mirror-image prevention (L0.2.1) |
| **Material** | Grade and specification | Machinability, hardness, cost, availability |
| **General tolerance** | Tolerance for undimensioned/untoleranced features | **Critical** — governs most dimensions |
| **Surface finish** | Default Ra or equivalent | Machining process selection |
| **Heat treatment** | Process and hardness | Manufacturing sequence, distortion |
| **Mass** | Component mass | Handling, clamping, machine table load |
| **Drawn / Checked / Approved** | Names and dates | Accountability; who to ask |
| **Company / customer** | Origin | Which standard applies |
| **Units** | mm unless stated | Prevents unit errors |

**The general-tolerance note — the field beginners skip**

A note such as `GENERAL TOLERANCES: ISO 2768-mK` `[STD]` applies to every dimension that carries no
individual tolerance. It has two parts:

- **First letter (m)** = linear and angular tolerance class: **f** (fine), **m** (medium),
  **c** (coarse), **v** (very coarse)
- **Second letter (K)** = geometrical tolerance class: **H**, **K** or **L**

**ISO 2768-1 linear tolerances (class m, medium)** `[STD]`:

| Nominal size range (mm) | Permissible deviation (mm) |
|---|---|
| 0.5 up to 3 | ±0.1 |
| over 3 up to 6 | ±0.1 |
| over 6 up to 30 | ±0.2 |
| over 30 up to 120 | ±0.3 |
| over 120 up to 400 | ±0.5 |
| over 400 up to 1000 | ±0.8 |
| over 1000 up to 2000 | ±1.2 |

*Values from ISO 2768-1 `[STD]`. Always verify against the actual standard and the class stated on
your specific drawing — classes f, c and v have different values.*

**Why this matters concretely:** a 250 mm dimension with no stated tolerance on an ISO 2768-m drawing
is **250 ±0.5 mm**. Not "as accurate as possible." Not "whatever the machine gives." A defined ±0.5 mm.
If your fixture needs that dimension to ±0.1 mm, you must **dimension and tolerance it explicitly** —
the general tolerance will not deliver it, and the toolroom is entitled to work to ±0.5.

**The revision table**

| Rev | Description of change | Date | By | Approved |
|---|---|---|---|---|
| A | First issue | 12-03-2026 | SM | AV |
| B | Hole pattern moved 6 mm; material changed to EN19 | 28-06-2026 | SM | AV |

Read the revision table to understand **what changed and whether it affects your design**. A revision
that changes a non-functional cosmetic detail may not affect you; one that moves a datum, changes a
tolerance, or changes material almost certainly does.

**Scale conventions** `[STD]`:
- `1:1` full size · `1:2` half size · `2:1` twice size
- The stated scale applies to the sheet; **detail views state their own scale**
- Scale tells you the drawing's intent, but **never measure from a drawing** (L0.2.1 §13)

### 7. Terminology

| Term | Definition |
|---|---|
| **Title block** | The information panel, conventionally in the lower-right corner |
| **Revision** | Version identifier; increments with each formal change |
| **Revision table / history** | Record of changes, dates and approvers |
| **General tolerance** | Default tolerance for dimensions without individual tolerances |
| **ISO 2768** | Standard specifying general tolerance classes `[STD]` |
| **Tolerance class** | The letter (f/m/c/v and H/K/L) selecting the tolerance set |
| **Scale** | Ratio of drawn size to actual size |
| **Sheet x of y** | Multi-sheet identification |
| **Third-party / customer drawing** | A drawing originating outside your organisation |
| **Uncontrolled copy** | A printed copy that may not reflect the current revision |

### 8. Principle

> **THE GENERAL TOLERANCE NOTE GOVERNS EVERY DIMENSION WITHOUT ITS OWN TOLERANCE.**
> On most drawings that is the majority of dimensions. If you have not read it, you do not know what
> the drawing requires — and if you need tighter than the general tolerance, you must state it
> explicitly.

### 9. Industrial application

**How a fixture engineer reads a title block — in order, in about 30 seconds:**

```
1. REVISION      "Rev B" — is this the current revision?
                 → Verify against the drawing register or the issuer.
                 → If it is not current, STOP.

2. PROJECTION    First or third angle?
                 → Record it on the Design Input Sheet.

3. PART NUMBER   Does it match the process plan and the purchase order?

4. SHEET x OF y  "Sheet 1 of 3" — do I have all three sheets?

5. MATERIAL      "EN19" — hardness, machinability, cost, availability.
                 → Affects cutting forces (L9) and clamping.

6. GENERAL TOL   "ISO 2768-mK" — the default for every untoleranced
                 dimension. Now I know what "unmarked" actually means.

7. HEAT TREATMENT Affects manufacturing sequence and distortion (L18, L27).

8. SURFACE FINISH Default Ra; affects process selection and cost.

9. SCALE         Context only — never measure.

10. APPROVED BY  Who do I ask when something is ambiguous?
```

**A real and instructive failure:**

A fixture engineer designs a locating scheme assuming a part face is "flat and square" because no
tolerance is shown on the drawing. The general-tolerance note reads `ISO 2768-c` (coarse), which for
a 300 mm dimension permits **±1.2 mm** `[STD]`. The part arrives varying by 0.9 mm face-to-face — fully
conforming to the drawing. The fixture, designed around an assumed ±0.1 mm, cannot locate it
repeatably.

**Nobody was wrong except the fixture engineer**, who did not read the note. The part conformed. The
fixture did not accommodate reality.

### 10. Design rules
- **R1** — Read the entire title block before reading the views.
- **R2** — Verify the revision is current on the day you start **and** before release.
- **R3** — Read and record the general-tolerance note; know what "unmarked" means on this drawing.
- **R4** — If a dimension is critical to your fixture, **do not rely on the general tolerance** —
  specify it explicitly.
- **R5** — Check `sheet x of y`; a missing sheet is a missing requirement.
- **R6** — Record the projection system on the Design Input Sheet.
- **R7** — Read the revision table to understand what changed, not merely that something changed.
- **R8** — Complete every field on drawings **you** issue; an incomplete title block is an incomplete drawing.
- **R9** — Treat printed copies as uncontrolled; verify against the controlled source before acting.

### 11. Rules of thumb
- ISO 2768-m is the most common general-tolerance class on general engineering drawings `[PRACTICE]`.
- Anything you actually care about must carry its own tolerance — general tolerances are for features
  you genuinely do not care about.
- If a drawing has no general-tolerance note at all, treat it as incomplete and query it `[PRACTICE]`.
- On a fixture drawing, the number of individually toleranced dimensions is usually small (10–20%);
  the rest fall under the general note — which is exactly why the note matters so much.
- Old printed drawings on a shop floor are the single most common source of revision errors.

### 12. Formulae
Title-block interpretation is not computational. The one quantitative element is the general-tolerance
lookup:

**Applying a general tolerance**
```
Upper limit = nominal + t
Lower limit = nominal − t
Tolerance band = 2t
```
where `t` is read from the ISO 2768 table for the applicable class and size range `[STD]`.

**Worst-case accumulation of general tolerances in a chain** (full treatment at L23):
```
t_total = t₁ + t₂ + t₃ + … + tₙ
```
This is why chain dimensioning under a loose general tolerance is dangerous — the tolerances add
arithmetically. Demonstrated numerically in the next lesson (L0.2.5).

### 13. Worked numerical example

**Problem:** A fixture base plate drawing carries the note `GENERAL TOLERANCES: ISO 2768-m`. The
drawing shows three untoleranced dimensions in a chain from one edge: 45 mm, 120 mm and 85 mm to a
locating pin hole. Determine the tolerance on each dimension, the worst-case position tolerance of
the pin hole from the edge, and assess whether this is acceptable if the pin must be located within
±0.3 mm.

```
GIVEN:
  General tolerance class      ISO 2768-m (medium)              [STD]
  Dimension 1                  45 mm  (untoleranced)            [PROJ]
  Dimension 2                  120 mm (untoleranced)            [PROJ]
  Dimension 3                  85 mm  (untoleranced)            [PROJ]
  Chain dimensioned from one edge to the pin hole
  Required pin position        ±0.3 mm                          [PROJ]

REQUIRED:
  (a) Individual tolerance on each dimension from ISO 2768-m
  (b) Nominal total distance to the pin hole
  (c) Worst-case accumulated tolerance
  (d) Comparison against the ±0.3 mm requirement
  (e) Engineering recommendation

ASSUMPTION:
  1. All three dimensions are in a CHAIN (each measured from the
     previous feature), not from a common datum. This is stated
     in the problem and is the critical assumption.
  2. Worst-case (arithmetic) accumulation is used, appropriate for
     a small number of dimensions where all must be guaranteed.
     Statistical methods (RSS) are taught at L23.4 and are NOT
     appropriate here.
  3. ISO 2768-m values as tabulated in §6. [STD]

FORMULA:
  Look up t for each nominal size range (ISO 2768-1, class m)
  Nominal total  = d₁ + d₂ + d₃
  t_total (worst case) = t₁ + t₂ + t₃

VARIABLE DEFINITIONS:
  dᵢ = nominal value of dimension i        (mm)
  tᵢ = permissible deviation on dim i      (mm)
  t_total = worst-case accumulated deviation (mm)

UNIT CONVERSION:
  None required — all values in mm.

SUBSTITUTION:
  Dimension 1: 45 mm   → range "over 30 up to 120"  → t₁ = ±0.3
  Dimension 2: 120 mm  → range "over 30 up to 120"  → t₂ = ±0.3
  Dimension 3: 85 mm   → range "over 30 up to 120"  → t₃ = ±0.3

  Nominal total = 45 + 120 + 85
  t_total       = 0.3 + 0.3 + 0.3

CALCULATION:
  (a) t₁ = ±0.3 mm    (45 mm  → 30–120 range)
      t₂ = ±0.3 mm    (120 mm → 30–120 range)
      t₃ = ±0.3 mm    (85 mm  → 30–120 range)

  (b) Nominal total = 250 mm

  (c) Worst-case accumulated tolerance:
      t_total = 0.3 + 0.3 + 0.3 = ±0.9 mm

      Pin hole position = 250 ±0.9 mm
      Total tolerance band = 1.8 mm

  (d) Comparison:
      Required : ±0.3 mm  (band 0.6 mm)
      Actual   : ±0.9 mm  (band 1.8 mm)
      Ratio    : 0.9 / 0.3 = 3.0

RESULT:
  (a) Each dimension carries ±0.3 mm under ISO 2768-m
  (b) Nominal distance to pin = 250 mm
  (c) Worst-case position     = 250 ±0.9 mm
  (d) Required ±0.3 mm; actual ±0.9 mm — THREE TIMES too loose

SAFETY FACTOR:
  Capability ratio = required / actual = 0.3 / 0.9 = 0.33
  (A value below 1.0 means the requirement is not met.)

PASS/FAIL:
  ✗ FAIL. The general tolerance permits three times the allowable
  positional error. A pin located to this drawing could sit 0.9 mm
  from its intended position and still fully conform.

ENGINEERING CONCLUSION:
  The drawing as written does NOT deliver the required pin position,
  even though nothing on it is technically wrong. Two independent
  defects combine:

    DEFECT 1 — CHAIN DIMENSIONING. Tolerances accumulate
    arithmetically along the chain. Three dimensions at ±0.3
    produce ±0.9 at the end.

    DEFECT 2 — RELIANCE ON THE GENERAL TOLERANCE for a functionally
    critical feature. General tolerances exist for features you do
    not care about.

  CORRECTIVE ACTIONS, in order of effectiveness:

    1. DIMENSION FROM A COMMON DATUM (baseline dimensioning), not
       in a chain. The pin position then carries only ONE tolerance,
       not three. This alone reduces ±0.9 to ±0.3.

    2. APPLY AN EXPLICIT TOLERANCE to the pin position, e.g.
       250 ±0.1, overriding the general tolerance.

    3. BETTER: apply GD&T POSITION tolerance referenced to proper
       datums (taught at L21.5.1). This controls the pin in both
       axes simultaneously and communicates functional intent.

  RECOMMENDATION: apply all three — baseline dimensioning from a
  datum edge, an explicit tolerance, and ultimately a GD&T position
  callout. Together they take the pin from ±0.9 to a controlled
  ±0.1 or better.

  THE BROADER LESSON: the general tolerance note is not a detail in
  the corner of the drawing. It defines the accuracy of every
  dimension you did not think about — and on this drawing, it
  quietly tripled the allowable error on a critical feature.

SENSITIVITY NOTE:
  Accumulated tolerance scales directly with the NUMBER of
  dimensions in the chain. Five chained dimensions at ±0.3 would
  give ±1.5 mm. Chain dimensioning is the single most damaging
  dimensioning habit in engineering drawing, and it is the subject
  of the next lesson (L0.2.5).
```

### 14. Engineering assumptions
- Chain dimensioning, as stated in the problem.
- Worst-case (arithmetic) accumulation — correct when every part must conform, as here.
- ISO 2768-m values as tabulated; the actual class on your drawing must be verified.
- No additional geometric errors (squareness, flatness) included — real accumulated error would be
  larger. Full treatment at L23.

### 15. Diagram

```
     STANDARD TITLE BLOCK — WHAT EACH FIELD TELLS YOU
     FOR TRAINING ONLY — NOT FOR MANUFACTURE

  ┌─────────────────────────────────────────────────────────────────┐
  │                                                                 │
  │                     (drawing views area)                        │
  │                                                                 │
  ├──────────────────────────────────────────┬──────────────────────┤
  │ REVISION HISTORY                         │ COMPANY NAME         │
  │ ┌───┬────────────────────┬────────┬────┐ │                      │
  │ │ A │ First issue        │12-03-26│ SM │ │ TITLE:               │
  │ │ B │ Hole pattern +6mm  │28-06-26│ SM │ │ FIXTURE BASE PLATE   │
  │ └───┴────────────────────┴────────┴────┘ │                      │
  │        ▲                                 ├──────────────────────┤
  │        │ WHAT changed, not just THAT     │ PART No:  FX-1042-01 │
  │        │ something changed               │ DWG No:   D-1042-01  │
  ├──────────────┬──────────────┬────────────┤                      │
  │ MATERIAL:    │ HEAT TREAT:  │  ╱▔▔╲ ╭─╮  │ REV: B  ◄── CRITICAL │
  │ EN19         │ 28-32 HRC    │  ╲__╱ ╰─╯  │                      │
  ├──────────────┼──────────────┤            ├──────────────────────┤
  │ FINISH:      │ MASS:        │ FIRST      │ SCALE: 1:2           │
  │ Ra 1.6       │ 11.3 kg      │ ANGLE      │ SHEET 1 OF 3 ◄─ all? │
  ├──────────────┴──────────────┤   ▲        ├──────────────────────┤
  │ GENERAL TOLERANCES:         │   │        │ DRAWN    : SM 11-08  │
  │ ISO 2768-mK   ◄── CRITICAL  │ CRITICAL   │ CHECKED  : RK 12-08  │
  │ UNITS: mm                   │            │ APPROVED : AV 12-08  │
  └─────────────────────────────┴────────────┴──────────────────────┘

  ─────────────────────────────────────────────────────────────────

     THE THREE CRITICAL FIELDS

     ┌──────────────────────────────────────────────────────────┐
     │ 1. REVISION      → is this current? If not, STOP.        │
     │ 2. PROJECTION    → mirror-image prevention (L0.2.1)      │
     │ 3. GENERAL TOL   → governs every unmarked dimension      │
     └──────────────────────────────────────────────────────────┘

  ─────────────────────────────────────────────────────────────────

     ISO 2768-m — WHAT "UNMARKED" ACTUALLY MEANS  [STD]

     nominal size          permissible deviation
     ─────────────────────────────────────────────
        0.5 –    3 mm            ± 0.1 mm
          3 –    6 mm            ± 0.1 mm
          6 –   30 mm            ± 0.2 mm
         30 –  120 mm            ± 0.3 mm
        120 –  400 mm            ± 0.5 mm
        400 – 1000 mm            ± 0.8 mm
       1000 – 2000 mm            ± 1.2 mm

     ┌──────────────────────────────────────────────────────────┐
     │ A 250 mm DIMENSION WITH NO TOLERANCE IS 250 ±0.5 mm.     │
     │ IT IS NOT "as accurate as the machine can manage."       │
     └──────────────────────────────────────────────────────────┘
```

### 16. Drawing example
See §15 — the annotated title block above is the drawing example for this lesson.

Practice reading it in the 10-step order given in §9. On a real drawing this takes about 30 seconds
and prevents the majority of avoidable fixture errors.

### 17. CAD workflow

Title blocks live in the **sheet format / drawing template**, not in individual drawings:

| CAD system | Where the title block is defined |
|---|---|
| SolidWorks | Sheet Format (`.slddrt`); fields link to custom properties |
| Creo | Drawing Format (`.frm`); fields link to model parameters |
| Siemens NX | Drawing template / border-and-title-block |
| CATIA | Drawing standard + background view |
| Inventor | Title Block definition in the drawing template |

**Professional practice:**
1. **Link title-block fields to model properties**, never type them manually. Material, mass and part
   number then update automatically and cannot disagree with the model.
2. Configure the revision table to be populated through your change process, not typed freehand.
3. Include the general-tolerance note in the template so it can never be forgotten.
4. Include the projection symbol in the template (one template per projection system — L0.2.1 §17).
5. Mass should come from CAD mass properties with material assigned (L0.1.1 §17).

Template creation is taught at L25.2.5.

### 18. GD&T application
Not applicable at this lesson (GD&T begins at L21). Two important links:
- The general-tolerance note's **second letter** (H, K or L) sets default **geometrical** tolerances —
  straightness, flatness, perpendicularity, symmetry and run-out — for features without explicit
  geometric callouts `[STD ISO 2768-2]`. This is the geometric counterpart of the linear note and is
  equally often overlooked.
- The title block should state the **governing tolerancing standard** (ASME Y14.5 or ISO GPS). If it
  does not, the drawing is ambiguous — the two systems interpret the same symbols differently in
  several important respects (L21.1.2).

### 19. Manufacturing method
Not applicable at this lesson. Shop relevance: the machinist reads material, heat treatment, surface
finish and general tolerance from the title block to plan the process route. An unstated heat treatment
means it will not happen; an unstated finish means whatever the process naturally produces.

### 20. Inspection method
Not applicable at this lesson. Inspection relevance: the inspector applies the general tolerance to
every unmarked dimension when writing the inspection report. If you needed tighter and did not say so,
the part will be reported as **conforming** while being unusable in your fixture. The drawing, not the
inspector, was at fault.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Not checking the revision | Fixture built for a superseded part |
| 2 | **Not reading the general-tolerance note** | Unmarked dimensions far looser than assumed |
| 3 | Relying on general tolerance for a critical feature | Conforming part that the fixture cannot locate |
| 4 | Not checking `sheet x of y` | Missing sheet, missing requirements |
| 5 | Not recording the projection system | Mirror-image risk (L0.2.1) |
| 6 | Reading "revision changed" without reading **what** changed | Missing the change that affects your design |
| 7 | Issuing drawings with incomplete title blocks | You create the problem downstream |
| 8 | Typing title-block fields manually instead of linking them | Fields disagree with the model after a change |
| 9 | Working from an uncontrolled printed copy | Silently obsolete information |
| 10 | No general-tolerance note at all | Drawing is fundamentally incomplete |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Parts conform but the fixture can't locate them | Relied on general tolerance for a critical feature | Check the note and compute the permitted deviation | Specify explicit tolerance or GD&T | Never rely on general tolerance for functional features |
| Fixture correct but part changed | Worked from a superseded revision | Compare your revision to the controlled register | Re-verify against current revision | Verify revision at start and before release |
| Title block disagrees with the model | Fields typed manually | Compare mass/material to model properties | Relink fields to properties | Template with linked properties |
| Shop uses an old drawing | Uncontrolled printed copy in circulation | Check the revision on the shop copy | Withdraw and reissue | Controlled document distribution |
| Ambiguity about ASME vs ISO interpretation | Governing standard not stated | Check title block for a standard reference | Query the issuer; state it on your drawings | Include the standard in the template |

### 23. Design checklist
- [ ] Have I read the **entire** title block before the views?
- [ ] Is the revision current, verified against a controlled source?
- [ ] Have I read the revision table to see **what** changed?
- [ ] Have I read and recorded the **general-tolerance note** (both letters)?
- [ ] Do I know what "unmarked" means for each size range on this drawing?
- [ ] Are all functionally critical dimensions **explicitly** toleranced, not left to the general note?
- [ ] Have I checked `sheet x of y` and obtained all sheets?
- [ ] Have I recorded the projection system on the Design Input Sheet?
- [ ] Do I know the material, heat treatment and surface finish?
- [ ] Is the governing tolerancing standard (ASME/ISO) stated?
- [ ] On drawings I issue: is every title-block field complete and linked to model properties?

### 24. Beginner exercise
**E0.2.4-B** — List the 14 fields a standard title block should contain. Then identify the three most
critical for a fixture engineer and explain why each is critical in one sentence.

### 25. Intermediate exercise
**E0.2.4-I** — A drawing carries `GENERAL TOLERANCES: ISO 2768-m`. Determine the permitted deviation
for untoleranced dimensions of: (a) 8 mm, (b) 25 mm, (c) 95 mm, (d) 260 mm, (e) 640 mm.
Then: a locating face is dimensioned at 180 mm with no tolerance, and your fixture requires it within
±0.15 mm. State whether the drawing supports your requirement, by what factor it fails, and the two
actions you would take.

### 26. Advanced exercise
**E0.2.4-A** — You receive a fixture component drawing with: `Rev C`, `ISO 2768-cL` general tolerance,
`Sheet 2 of 2` (you have only sheet 2), material `EN8`, no heat-treatment field completed, no
projection symbol, and no governing tolerancing standard stated.
(i) List every deficiency and classify each as *blocking* (cannot start) or *non-blocking* (can start
with a recorded assumption).
(ii) For the ISO 2768-c class, look up and state the permitted deviations, and explain what a coarse
class implies about the designer's intent for this component.
(iii) Draft the formal written query you would send, listing each item and the specific decision it
blocks.
(iv) State what you would record on your Design Input Sheet before proceeding on the non-blocking items.
(v) Explain why proceeding "to save time" while awaiting answers is a false economy, referring to the
error-escalation principle from L0.1.2.

### 27. Interview questions
1. *"What does a general-tolerance note do, and why does it matter?"*
   **Answer:** It defines the tolerance for every dimension that carries no individual tolerance —
   typically the majority of dimensions on a drawing. Under ISO 2768-m, a 250 mm unmarked dimension is
   250 ±0.5 mm. It matters because engineers commonly assume unmarked means "accurate," when it
   actually means a defined and often loose value. Anything functionally critical must be toleranced
   explicitly. *(Reasoning: general tolerances exist for features you genuinely do not care about.)*
2. *"What is the first thing you check on any drawing?"*
   **Answer:** The revision, to confirm it is current — followed immediately by the projection symbol
   and the general-tolerance note. Those three fields prevent the three most expensive and most common
   drawing-reading failures: building for a superseded part, building a mirror image, and assuming an
   accuracy the drawing never required.

### 28. Expert questions
1. *"A supplier delivers parts that conform to the drawing but do not work in your fixture. Who is at
   fault, and how do you resolve it?"*
   **Answer:** If the parts conform, the **drawing** is at fault and, by extension, whoever specified
   the requirement — which for a fixture-critical feature usually includes me. The supplier is
   entitled to work to what is stated, including the general tolerance. Resolution has an immediate
   and a systemic part. Immediately: quantify the actual variation, determine whether the fixture can
   be modified to accommodate it (adjustable locators, larger clearance), because that is usually
   faster and cheaper than changing a released drawing and re-qualifying a supplier. Systemically:
   raise a change to tolerance the feature explicitly, ideally with GD&T, and add the item to the
   design-review checklist so that fixture-critical part features are always explicitly toleranced.
   Blaming the supplier is both wrong and useless — the drawing is the contract.
2. *"Your company's drawings use ISO 2768-m by default. When would you challenge that default, in
   either direction?"*
   **Answer:** In both directions, and for the same reason — the default should match function, not
   habit.
   **Tighten** when the general tolerance would be consumed by accumulation on a functionally
   important chain (as in §13), or where a fixture, gauge or mating interface depends on unmarked
   dimensions. Though the better fix there is usually explicit tolerancing of the specific features
   rather than tightening the global default, because a blanket tightening raises cost on every
   feature including the ones nobody cares about.
   **Loosen** when a component is non-critical — a guard, a bracket, a fabricated cover — where
   2768-m imposes unnecessary cost. Grinding or precision machining a feature to ±0.3 mm that would
   function perfectly at ±1.2 mm is money spent for nothing.
   The engineering principle is that **tolerance is a cost lever** (L0.1.4 §18): every tolerance should
   be traceable to a function, and a global default that is never questioned is a default that is
   wrong somewhere in both directions.

### 29. Summary
The title block carries the highest density of decision-critical information on a drawing: part
number, revision, material, projection system, scale, general tolerance, heat treatment, finish, mass
and approvals. Three fields are critical for a fixture engineer — revision (is this current?),
projection symbol (mirror prevention) and the general-tolerance note, which silently governs every
dimension without an individual tolerance. Relying on the general tolerance for a functionally
critical feature produces conforming parts that do not work, and the fault lies with the drawing, not
the supplier.

### 30. Key takeaways
- **Read the entire title block before the views.** It takes 30 seconds.
- **Three critical fields:** revision, projection symbol, general-tolerance note.
- **The general tolerance governs every unmarked dimension** — under ISO 2768-m, a 250 mm dimension is
  250 ±0.5 mm.
- **Never rely on the general tolerance for a functionally critical feature.** Tolerance it explicitly.
- The second letter of the note (H/K/L) sets default **geometric** tolerances too — equally overlooked.
- Read **what** changed in the revision table, not merely that something changed.
- **Link title-block fields to model properties**; never type them.
- If parts conform but don't work, the drawing is at fault — and the drawing is the contract.

---
---

## LESSON L0.2.5 — DIMENSIONING STRATEGY AND WHY CHAIN DIMENSIONING STACKS ERROR

### 1. Lesson title
**L0.2.5 — Dimensioning basics: chain, baseline, coordinate, ordinate — and why chain dimensioning stacks error**

### 2. Learning objective
By the end of this lesson you will be able to identify the four dimensioning systems, calculate
accumulated tolerance in each, select the correct system for a given functional requirement, and
convert a chain-dimensioned drawing to baseline dimensioning while quantifying the improvement.

### 3. Prerequisites
L0.2.1–L0.2.4 (especially the general-tolerance note from L0.2.4).

### 4. Why the topic matters
This lesson is the bridge between reading drawings and engineering them.

Chain dimensioning is the most damaging habit in engineering drawing. It looks natural, it is how
people instinctively measure, and it silently multiplies tolerance. Three chained dimensions at ±0.3
give ±0.9 at the end — a threefold loss of accuracy that appears nowhere on the drawing and that
nobody notices until parts do not fit.

For a fixture engineer this matters twice over:
1. **Reading:** you must recognise when a part drawing's dimensioning scheme means the incoming part
   is far more variable than it appears.
2. **Writing:** every fixture drawing you produce must dimension locators from a common datum, or your
   own fixture will suffer the same accumulation.

This is also the conceptual foundation of tolerance stack-up (L23) and of GD&T datums (L21.2).

### 5. Simple explanation
There are two basic ways to dimension a row of features:

**Chain** — measure each feature from the previous one:
```
|←30→|←40→|←35→|
```
Each measurement's error adds to the next. Errors accumulate.

**Baseline** — measure every feature from the same starting edge:
```
|←30→|
|←──70──→|
|←────105────→|
```
Each measurement is independent. Errors do not accumulate.

Baseline dimensioning is almost always better for features that must be accurately positioned.

### 6. Engineering explanation

**The four dimensioning systems**

**1. Chain (incremental) dimensioning**
Each dimension is measured from the previous feature.
- *Advantage:* directly controls the distance **between** adjacent features
- *Disadvantage:* **tolerances accumulate arithmetically** along the chain
- *Use when:* the feature-to-feature distance is what actually matters functionally (e.g. the pitch
  between two mating pins), and the overall position does not

**2. Baseline (parallel / datum) dimensioning**
Every dimension is measured from a single common reference (the baseline or datum).
- *Advantage:* **no accumulation** — each feature carries only its own tolerance
- *Disadvantage:* the distance between two adjacent features is not directly controlled; its
  tolerance is the sum of the two individual tolerances
- *Use when:* each feature's position relative to a datum matters — **which is the normal case for
  fixtures**

**3. Coordinate dimensioning**
Baseline dimensioning applied in two axes (X and Y) from a common origin.
- Standard for hole patterns
- Produces **square** tolerance zones, which is its fundamental limitation (see §8 and L21.1.1)

**4. Ordinate (arrowless) dimensioning**
Coordinate dimensioning presented as a table of values from a common origin, with no dimension lines.
- *Advantage:* very clean on drawings with many holes; maps directly to CNC programming
- *Disadvantage:* harder to read at a glance; no visual sense of relative position
- *Use when:* many features, especially CNC-machined hole patterns

**The accumulation mathematics**

For a chain of *n* dimensions, worst-case accumulated tolerance:
```
t_total = t₁ + t₂ + … + tₙ
```

For baseline dimensioning, the tolerance at any feature is simply:
```
t_feature = t_that_dimension        (no accumulation)
```

But note the trade-off — in **baseline** dimensioning, the distance between two adjacent features
carries the sum of their two tolerances:
```
t_between = t_A + t_B
```

**This is the central engineering insight:** you cannot control everything simultaneously. Dimension
what matters functionally, and accept looser control on what does not.

> Chain dimensioning controls **feature-to-feature** distance tightly and **overall position** poorly.
> Baseline dimensioning controls **overall position** tightly and **feature-to-feature** distance
> less tightly.
> Choose based on **function**, not on habit or drawing convenience.

**Why coordinate dimensioning produces square tolerance zones**

A hole dimensioned 50 ±0.1 in X and 30 ±0.1 in Y may lie anywhere in a 0.2 × 0.2 mm square. But
functionally, what usually matters is the **radial** distance from true position — a round zone. The
corner of the square is √2 times further from true position than the edge:
```
diagonal = √(0.1² + 0.1²) = 0.141 mm  vs  0.1 mm at the edge
```
So coordinate tolerancing either rejects good parts (if the round requirement is enforced) or accepts
parts up to 41% further from true position than intended. **This is precisely the problem GD&T
position tolerancing solves** (L21.1.1, L21.5.1), and it is why this lesson is a prerequisite for the
GD&T level.

**General dimensioning rules** `[STD]`
- Dimension to **visible outlines**, never to hidden lines
- Place dimensions **outside** the view where possible
- Do not repeat a dimension — each feature is dimensioned **once**, in the view that shows it best
- Do not over-dimension — an over-dimensioned drawing contains a contradiction waiting to happen
- Dimension **features**, not manufacturing operations
- Place dimensions in the view that shows the feature's **true shape**
- Group related dimensions together
- Smaller dimensions nearer the view, larger further out (avoids crossing extension lines)
- **Reference dimensions** (for information only, not inspected) are shown in parentheses: `(105)`

### 7. Terminology

| Term | Definition |
|---|---|
| **Chain / incremental dimensioning** | Each dimension measured from the previous feature |
| **Baseline / parallel dimensioning** | All dimensions measured from one common reference |
| **Coordinate dimensioning** | Baseline dimensioning in two or more axes from a common origin |
| **Ordinate / arrowless dimensioning** | Coordinate dimensions in tabular form, no dimension lines |
| **Datum (drawing sense)** | The reference from which dimensions are measured |
| **Tolerance accumulation / stack-up** | Combined effect of multiple tolerances in a chain |
| **Worst-case tolerance** | Arithmetic sum of all contributing tolerances |
| **Reference dimension** | Informational dimension, shown in parentheses, not inspected |
| **Over-dimensioning** | Providing more dimensions than needed, creating contradictions |
| **Redundant dimension** | A dimension already implied by others |

### 8. Principle

> **CHAIN DIMENSIONING STACKS TOLERANCE. BASELINE DIMENSIONING DOES NOT.**
> Dimension from a **common datum** whenever a feature's position matters — which, on a fixture,
> is almost always.
> And dimension according to **function**, never according to how the part will be measured or made.

### 9. Industrial application

**The fixture engineer's rule: locators are always dimensioned from a common datum.**

```
WRONG — chain dimensioning of fixture locators

     ┌─────────────────────────────────────────┐
     │  ⊕        ⊕        ⊕        ⊕           │
     └─────────────────────────────────────────┘
     |←─ 60 ─→|←─ 60 ─→|←─ 60 ─→|

     Under ISO 2768-m, each 60 mm dimension is ±0.3
     Position of the 4th locator = 180 ±0.9 mm
     ✗ The last locator can be 0.9 mm out of position

  ─────────────────────────────────────────────────────

RIGHT — baseline dimensioning from a common datum

     ║┌────────────────────────────────────────┐
     ║│  ⊕        ⊕        ⊕        ⊕          │
     ║└────────────────────────────────────────┘
     ║|←─ 60 ─→|
     ║|←────── 120 ──────→|
     ║|←─────────── 180 ───────────→|
     ▲
   datum edge

     Each locator carries only its own ±0.3
     Position of the 4th locator = 180 ±0.3 mm
     ✓ Threefold improvement, at zero manufacturing cost
```

**The improvement costs nothing.** Same part, same machine, same tolerance class, same manufacturing
process. The only change is how the drawing is dimensioned. This is one of the very few engineering
improvements that is genuinely free.

**Reading incoming part drawings:** when you receive a customer part drawing that is chain-dimensioned,
compute the accumulated tolerance before designing your locating scheme. The part may be far more
variable than the individual dimensions suggest, and your fixture must accommodate the real variation,
not the apparent one.

### 10. Design rules
- **R1** — Use **baseline dimensioning from a common datum** for all fixture locator positions.
- **R2** — Use chain dimensioning **only** when feature-to-feature distance is the functional requirement.
- **R3** — Never mix chain and baseline in a way that over-dimensions (creates a closed loop with
  contradictory tolerances).
- **R4** — Dimension according to **function**, never according to how the part happens to be measured.
- **R5** — Use ordinate dimensioning for hole patterns with many features.
- **R6** — Dimension each feature **once**, in the view showing its true shape.
- **R7** — Never dimension to hidden lines.
- **R8** — Show reference dimensions in parentheses; they are not inspected.
- **R9** — Compute accumulated tolerance **before** finalising the dimensioning scheme.
- **R10** — Prefer GD&T position tolerancing over coordinate tolerancing for functional hole patterns
  (from L21 onward).

### 11. Rules of thumb
- If more than two dimensions are chained to reach a functionally important feature, switch to baseline `[PRACTICE]`.
- Accumulated tolerance grows **linearly with the number of chained dimensions** — 5 chained dimensions
  at ±0.2 gives ±1.0.
- Coordinate tolerancing gives a square zone whose diagonal is **1.41×** the stated tolerance — this
  41% is why GD&T position exists.
- If you cannot state which datum a dimension is measured from, the dimensioning scheme is not yet
  finished.
- A drawing where every dimension appears twice is over-dimensioned; one of the two will eventually be
  wrong after a revision.

### 12. Formulae

**Worst-case chain accumulation**
```
t_total = Σ tᵢ = t₁ + t₂ + … + tₙ
```

**Baseline — no accumulation**
```
t_feature = t_i
```

**Baseline — distance between two features**
```
t_between = t_A + t_B
```

**RSS (statistical) accumulation** — introduced here, taught fully at L23.4
```
t_RSS = √(t₁² + t₂² + … + tₙ²)
```
*Valid only under specific statistical conditions (independent, centred, normally distributed
processes, adequate sample size). **Not** valid when every part must be guaranteed to conform.
Do not use it as a convenient way to make numbers look better — that misuse is a catalogued mistake
at L55.6.*

**Coordinate tolerance zone diagonal**
```
diagonal = √(t_x² + t_y²)
```
For equal tolerances: `diagonal = t × √2 = 1.414 t`

| Variable | Meaning | Unit |
|---|---|---|
| tᵢ | Tolerance on dimension i | mm |
| t_total | Worst-case accumulated tolerance | mm |
| t_RSS | Statistically combined tolerance | mm |
| t_x, t_y | Tolerances in X and Y | mm |
| n | Number of dimensions in the chain | — |

### 13. Worked numerical example

**Problem:** A fixture base plate carries four locating pads dimensioned in a chain: 60, 60, 60 mm from
the left edge, under ISO 2768-m. The fourth pad must be positioned within ±0.4 mm of nominal for the
fixture to function.
(a) Calculate the worst-case position tolerance of the fourth pad as drawn.
(b) Determine whether it meets the requirement.
(c) Re-dimension using baseline dimensioning and recalculate.
(d) Calculate the pad-to-pad tolerance under both schemes.
(e) Recommend the final scheme.

```
GIVEN:
  Dimensioning scheme (as drawn)  chain: 60 / 60 / 60 mm       [PROJ]
  General tolerance               ISO 2768-m                    [STD]
  Required position of pad 4      ±0.4 mm                       [PROJ]

REQUIRED:
  (a) Worst-case position tolerance of pad 4, chain scheme
  (b) Pass/fail against ±0.4 mm
  (c) Same, using baseline dimensioning
  (d) Pad-to-pad tolerance in both schemes
  (e) Recommendation

ASSUMPTION:
  1. Worst-case (arithmetic) accumulation, appropriate because
     every fixture must conform — this is a single fixture, not
     a statistical population. RSS is NOT applicable. [L23.4]
  2. ISO 2768-m: 60 mm and 120 mm fall in the "over 30 up to 120"
     range → ±0.3 mm; 180 mm falls in "over 120 up to 400"
     → ±0.5 mm.  [STD]
  3. Geometric errors (squareness, flatness) excluded — real
     accumulated error would be larger. Full treatment at L23.

FORMULA:
  Chain:     t_total   = t₁ + t₂ + t₃
  Baseline:  t_feature = t_of_that_dimension
  Between:   t_between = t_A + t_B

VARIABLE DEFINITIONS:
  tᵢ        = permissible deviation on dimension i   (mm)
  t_total   = accumulated tolerance at pad 4         (mm)
  t_between = tolerance on pad-to-pad distance       (mm)

UNIT CONVERSION:
  None required — all values in mm.

SUBSTITUTION AND CALCULATION:

  (a) CHAIN SCHEME — 60 / 60 / 60

      Each 60 mm dimension → ISO 2768-m, 30–120 range → ±0.3 mm

      Pad 2 position = 60  ±0.3
      Pad 3 position = 120 ±(0.3+0.3)      = 120 ±0.6
      Pad 4 position = 180 ±(0.3+0.3+0.3)  = 180 ±0.9

      t_total = 0.9 mm

  (b) COMPARISON
      Required : ±0.4 mm
      Actual   : ±0.9 mm
      Ratio    : 0.9 / 0.4 = 2.25   →  2.25× too loose
      ✗ FAIL

  (c) BASELINE SCHEME — 60 / 120 / 180 from the left edge

      Dimension 60  → 30–120 range   → ±0.3 mm
      Dimension 120 → 30–120 range   → ±0.3 mm
      Dimension 180 → 120–400 range  → ±0.5 mm

      Pad 2 position = 60  ±0.3
      Pad 3 position = 120 ±0.3
      Pad 4 position = 180 ±0.5      ◄── no accumulation

      t_total = 0.5 mm

      COMPARISON
      Required : ±0.4 mm
      Actual   : ±0.5 mm
      Ratio    : 0.5 / 0.4 = 1.25   →  still 1.25× too loose
      ✗ STILL FAILS — but much closer

  (d) PAD-TO-PAD TOLERANCE

      CHAIN:    directly controlled by each 60 mm dimension
                t_between = ±0.3 mm            ✓ tight

      BASELINE: derived from two independent dimensions
                pad 3 to pad 4 = 180 ±0.5 minus 120 ±0.3
                t_between = 0.5 + 0.3 = ±0.8 mm  ✗ looser

      ◄── THIS IS THE TRADE-OFF. Baseline improved absolute
          position (0.9 → 0.5) but WORSENED pad-to-pad
          (0.3 → 0.8).

RESULT:
  ┌──────────────┬───────────────────┬──────────────────┐
  │              │ Pad 4 position    │ Pad-to-pad       │
  ├──────────────┼───────────────────┼──────────────────┤
  │ Chain        │ ±0.9 mm    ✗ FAIL │ ±0.3 mm     ✓    │
  │ Baseline     │ ±0.5 mm    ✗ FAIL │ ±0.8 mm     ✗    │
  │ Required     │ ±0.4 mm           │ (not specified)  │
  └──────────────┴───────────────────┴──────────────────┘

SAFETY FACTOR:
  Chain    : 0.4 / 0.9 = 0.44   (well below 1.0)
  Baseline : 0.4 / 0.5 = 0.80   (below 1.0)
  Neither scheme meets the requirement using the GENERAL tolerance.

PASS/FAIL:
  ✗ BOTH FAIL against ±0.4 mm while relying on ISO 2768-m.

ENGINEERING CONCLUSION:
  The critical finding is that CHANGING THE DIMENSIONING SCHEME
  ALONE IS NOT SUFFICIENT. Baseline dimensioning improved pad 4
  from ±0.9 to ±0.5 — a 44% improvement at zero cost — but the
  requirement is ±0.4, so the general tolerance must ALSO be
  overridden.

  RECOMMENDED SOLUTION — three actions together:

    1. BASELINE DIMENSION all pads from the left datum edge.
       (Free. Eliminates accumulation.)

    2. APPLY EXPLICIT TOLERANCES to each pad position:
       60 ±0.15, 120 ±0.15, 180 ±0.15
       Pad 4 becomes ±0.15  ✓ PASS (safety factor 2.67)

    3. VERIFY THE PAD-TO-PAD REQUIREMENT. With explicit ±0.15
       on each, pad-to-pad becomes ±0.30 — acceptable if the
       functional pad-to-pad requirement is ≥±0.3. IF IT IS NOT,
       the correct answer is GD&T PROFILE or POSITION tolerancing
       on the pad pattern (L21.5.1), which controls the pattern
       as a group AND each pad relative to the datum — something
       coordinate tolerancing fundamentally cannot do.

  THE DEEPER LESSON: dimensioning scheme and tolerance value are
  two independent levers. Beginners adjust only the tolerance
  (expensive). Engineers fix the scheme FIRST (free), then adjust
  the tolerance only as far as still necessary (cheap). Applying
  the free fix before the paid one is the whole point.

SENSITIVITY NOTE:
  Chain accumulation scales with the NUMBER of chained dimensions.
  With 6 pads instead of 4, the chain scheme would give ±1.5 mm
  while baseline would still give ±0.5 mm. The longer the chain,
  the greater the free improvement available from baseline
  dimensioning.
```

### 14. Engineering assumptions
- Worst-case accumulation — correct for a single fixture that must conform.
- ISO 2768-m size ranges applied as tabulated in L0.2.4 §6 `[STD]`.
- Geometric errors (edge squareness, plate flatness) excluded; real error would be larger — see L23.
- The pad-to-pad functional requirement was not specified in the problem, which is itself a realistic
  and instructive gap: it is exactly the question the engineer must go back and ask.

### 15. Diagram

```
     THE FOUR DIMENSIONING SYSTEMS
     (instructional schematic)

  1. CHAIN (INCREMENTAL)              tolerances ACCUMULATE
     ┌──────────────────────────────────────────┐
     │   ⊕        ⊕        ⊕        ⊕           │
     └──────────────────────────────────────────┘
     |←─ 60 ─→|←─ 60 ─→|←─ 60 ─→|
        ±0.3     ±0.3     ±0.3
                                  pad 4 = 180 ±0.9  ✗
     ✓ controls pad-to-pad tightly
     ✗ overall position degrades along the chain

  ──────────────────────────────────────────────────────────

  2. BASELINE (PARALLEL)              NO accumulation
     ║┌─────────────────────────────────────────┐
     ║│   ⊕        ⊕        ⊕        ⊕          │
     ║└─────────────────────────────────────────┘
     ║|←─ 60 ─→|              ±0.3
     ║|←────── 120 ──────→|   ±0.3
     ║|←─────────── 180 ───────────→|  ±0.5
     ▲
   datum                        pad 4 = 180 ±0.5  ✓ better
     ✓ each feature independent of the others
     ✗ pad-to-pad is the SUM of two tolerances

  ──────────────────────────────────────────────────────────

  3. COORDINATE (2-AXIS BASELINE)
                    ↑ Y
     ║              │
     ║   ⊕──────────┤ 30 ±0.1
     ║   │          │
     ║───┼──────────┼───→ X
     ║   50 ±0.1
     ▲
   origin

     Tolerance zone is a SQUARE:
         ┌───────┐   0.2 × 0.2 mm square
         │   ✛   │   diagonal = 0.141 mm
         └───────┘   = 1.41 × the edge value

     ┌──────────────────────────────────────────────────┐
     │ THE CORNER IS 41% FURTHER FROM TRUE POSITION     │
     │ THAN THE EDGE. THIS IS WHY GD&T POSITION EXISTS. │
     │ (round zone, L21.5.1)                            │
     └──────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  4. ORDINATE (ARROWLESS)             clean for many holes
     ║
     ║  ⊕A      ⊕B         ⊕C                ⊕D
     ║
     ▲   ┌──────┬──────┬───────┐
   0,0   │ HOLE │  X   │   Y   │
         ├──────┼──────┼───────┤
         │  A   │  25  │  20   │
         │  B   │  75  │  20   │
         │  C   │ 140  │  55   │
         │  D   │ 210  │  20   │
         └──────┴──────┴───────┘
     ✓ no dimension-line clutter; maps directly to CNC
     ✗ harder to read relative positions at a glance

  ──────────────────────────────────────────────────────────

     THE CENTRAL TRADE-OFF

     ┌─────────────┬────────────────┬───────────────────┐
     │             │ OVERALL        │ FEATURE-TO-       │
     │             │ POSITION       │ FEATURE           │
     ├─────────────┼────────────────┼───────────────────┤
     │ CHAIN       │ poor  (Σt)     │ tight  (t)        │
     │ BASELINE    │ tight (t)      │ looser (t_A+t_B)  │
     └─────────────┴────────────────┴───────────────────┘

     You cannot have both. Choose based on FUNCTION.
     (GD&T composite position control, L21.5.1, is how you
      get closer to having both.)
```

### 16. Drawing example

```
   DRAWING EXERCISE DX-0.2.5 — CONVERT CHAIN TO BASELINE
   FOR TRAINING ONLY — NOT FOR MANUFACTURE

   GIVEN (as received) — chain dimensioned, ISO 2768-m

   ┌────────────────────────────────────────────────┐
   │                                                │
   │   ⊕         ⊕         ⊕         ⊕              │
   │  Ø10       Ø10       Ø10       Ø10             │
   │                                                │
   └────────────────────────────────────────────────┘
   |←─ 45 ─→|←─ 45 ─→|←─ 45 ─→|

   Accumulated at hole 4:  ±(0.3+0.3+0.3) = ±0.9 mm


   REQUIRED (converted) — baseline dimensioned

   ║┌───────────────────────────────────────────────┐
   ║│                                               │
   ║│   ⊕         ⊕         ⊕         ⊕             │
   ║│  Ø10       Ø10       Ø10       Ø10            │
   ║│                                               │
   ║└───────────────────────────────────────────────┘
   ║|←─ 45 ─→|                    ±0.3
   ║|←───── 90 ─────→|            ±0.3
   ║|←────────── 135 ─────────→|  ±0.5
   ▲
  datum A

   Accumulated at hole 4:  ±0.5 mm       ◄── 44% improvement
                                             at ZERO cost

   ┌──────────────────────────────────────────────────────┐
   │ SAME PART · SAME MACHINE · SAME TOLERANCE CLASS      │
   │ ONLY THE DIMENSIONING SCHEME CHANGED.                │
   └──────────────────────────────────────────────────────┘
```

### 17. CAD workflow

| Task | SolidWorks | Creo | Siemens NX |
|---|---|---|---|
| Baseline dimensions | `Smart Dimension` from a common edge, or `Baseline Dimension` | `Dimension - New References` from a common datum | `Rapid Dimension` from a common edge |
| Ordinate dimensions | `Ordinate Dimension` / `Horizontal Ordinate` | `Ordinate Dimension` | `Ordinate Dimension` |
| Chain dimensions | `Chain Dimension` | Standard dimensioning | `Chain Dimension` |
| Set origin | Select the datum edge/vertex as the zero | Select datum | Select origin |

**Professional practice:**
1. **Model with design intent that matches your dimensioning intent.** If features are located from a
   common origin in the model, baseline dimensions come out naturally. If you model feature-to-feature,
   the model itself carries a chain and will fight you.
2. Use `DimXpert` (SolidWorks) or equivalent to auto-dimension from selected datums — but always review
   the result; automatic tools frequently produce chains.
3. When dimensioning a drawing, **select the datum edge first**, then place all dimensions from it.
4. Verify by tracing: pick the most functionally critical feature and confirm you can trace exactly one
   dimension from the datum to it. If you trace two or more, you have a chain.

### 18. GD&T application
This lesson is the direct conceptual prerequisite for L21. Three explicit links:

1. **The square-zone problem** (§6, §15) is the primary motivation for GD&T position tolerancing —
   round tolerance zones give 57% more usable area for the same functional requirement (proved
   numerically at L21.1.1).
2. **The baseline datum** in this lesson becomes the formal **datum feature** and **datum reference
   frame** of GD&T (L21.2). The idea is the same; GD&T makes it rigorous, three-dimensional and
   unambiguous about precedence.
3. **The chain-vs-baseline trade-off** (§13d) is exactly what **composite position tolerancing**
   resolves — controlling the pattern as a group with one tolerance and each feature within the pattern
   with a tighter one (L21.5.1).

When you reach L21, you will recognise it as the rigorous solution to the problem this lesson has just
shown you cannot fully solve with coordinate dimensioning.

### 19. Manufacturing method
Not applicable at this lesson directly. Manufacturing relevance: CNC machining naturally works from a
single work origin (G54, L1.2.2), which makes **baseline dimensioning the natural match to how the part
is actually made**. A chain-dimensioned drawing forces the programmer to convert to absolute
coordinates anyway — and every manual conversion is an opportunity for an arithmetic error. Baseline
dimensioning is therefore both more accurate and less error-prone in programming.

### 20. Inspection method
Not applicable at this lesson directly. Inspection relevance: a CMM measures from an established
coordinate origin, so **baseline dimensions map directly to how the part is inspected**. Chain
dimensions must be derived by subtraction, which adds measurement uncertainty and creates disputes
about which measurement is authoritative. Taught at L28.1.6.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Chain dimensioning critical features** | Tolerance accumulates; position far looser than it appears |
| 2 | Not calculating accumulated tolerance before finalising the scheme | The problem is discovered in production, not at design |
| 3 | Over-dimensioning (closed loop) | Contradictory requirements; one will be violated |
| 4 | Dimensioning to hidden lines | Ambiguous; violates convention |
| 5 | Repeating the same dimension in two views | The two disagree after a revision |
| 6 | Dimensioning how the part is *measured* rather than how it *functions* | The drawing controls the wrong thing |
| 7 | Using coordinate tolerancing for functional hole patterns | Square zones; 41% error at the corners |
| 8 | Changing tolerance values before fixing the dimensioning scheme | Paying for accuracy that a free scheme change would have given |
| 9 | Reference dimensions not shown in parentheses | Inspector attempts to inspect an uninspectable dimension |
| 10 | Modelling feature-to-feature then trying to dimension baseline | Model design intent fights the drawing |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Last feature in a row always out of position | Chain dimensioning accumulation | Sum the tolerances along the chain | Convert to baseline from a common datum | Compute accumulation before releasing |
| Parts conform but assemblies don't fit | Accumulated tolerance across mating parts | Perform a stack-up (L23) | Re-dimension; tighten only where needed | Stack-up at design stage |
| Inspector and machinist disagree on a dimension | Over-dimensioned or repeated dimension | Look for the same dimension in two places | Remove the redundant one; mark as reference if needed | Dimension each feature once |
| Good parts rejected at inspection | Coordinate tolerancing enforcing square zones on a round requirement | Check whether the requirement is radial | Convert to GD&T position (L21.5.1) | Use GD&T for functional patterns |
| Drawing revision introduced a contradiction | Same dimension in two views, only one updated | Cross-check all views | Correct and reissue | Never repeat a dimension |

### 23. Design checklist
- [ ] Have I identified which features are **functionally critical**?
- [ ] Is each critical feature dimensioned from a **common datum**, not in a chain?
- [ ] Have I **calculated** the accumulated tolerance for any chain that remains?
- [ ] Does the accumulated tolerance meet the functional requirement?
- [ ] Have I fixed the **scheme** before adjusting **tolerance values**?
- [ ] Is the feature-to-feature requirement also satisfied under baseline dimensioning?
- [ ] Is each feature dimensioned exactly **once**?
- [ ] Are there any closed dimension loops (over-dimensioning)?
- [ ] Are all dimensions to visible outlines?
- [ ] Are reference dimensions in parentheses?
- [ ] Would GD&T position or profile serve this pattern better than coordinate tolerancing?
- [ ] Does the CAD model's design intent match the dimensioning scheme?

### 24. Beginner exercise
**E0.2.5-B** — Five holes are chain-dimensioned at 40 mm intervals from a left edge, under ISO 2768-m
(±0.3 for this size range).
(a) Calculate the worst-case position tolerance of the fifth hole.
(b) Re-dimension using baseline dimensioning and state the nominal dimension to each hole.
(c) Calculate the position tolerance of the fifth hole under baseline (use ISO 2768-m ranges from
L0.2.4 §6).
(d) State the improvement as a percentage.

### 25. Intermediate exercise
**E0.2.5-I** — A fixture plate has six locating pins chain-dimensioned at 50 mm intervals, general
tolerance ISO 2768-m. The sixth pin must be within ±0.35 mm.
(a) Calculate the chain accumulation at pin 6.
(b) Convert to baseline and recalculate.
(c) Determine whether baseline alone is sufficient.
(d) If not, calculate what explicit tolerance must be applied to each baseline dimension to meet the
requirement with a safety factor of at least 2.
(e) Calculate the resulting pin-to-pin tolerance and comment on whether the trade-off is acceptable.

### 26. Advanced exercise
**E0.2.5-A** — A tube-checking fixture locates a bent tube using four V-blocks along its length. The
V-blocks are currently chain-dimensioned at 180, 220 and 195 mm from each other, under ISO 2768-m.
The functional requirements are: (i) each V-block within ±0.25 mm of true position relative to the
fixture datum, and (ii) adjacent V-block spacing within ±0.40 mm.
(i) Calculate the accumulated position tolerance of the fourth V-block as currently drawn.
(ii) Convert to baseline dimensioning and recalculate both requirements.
(iii) Demonstrate numerically that **neither** pure chain nor pure baseline satisfies both requirements
simultaneously.
(iv) Propose a dimensioning and tolerancing scheme that satisfies both, and prove it numerically.
(v) Explain how GD&T composite position tolerancing (which you will meet formally at L21.5.1) would
address this class of problem more elegantly, and state in one sentence what it controls that
coordinate tolerancing cannot.
(vi) State the manufacturing cost implication of your proposed scheme versus simply tightening every
dimension to ±0.1.

### 27. Interview questions
1. *"Why is chain dimensioning discouraged?"*
   **Answer:** Because tolerances accumulate arithmetically along the chain. Three dimensions at ±0.3
   give ±0.9 at the final feature — a threefold loss of accuracy that appears nowhere on the drawing.
   Baseline dimensioning from a common datum eliminates accumulation, so each feature carries only its
   own tolerance. *(Reasoning: the improvement is free — same part, same machine, same tolerance class,
   only the drawing changes.)*
2. *"When would you deliberately use chain dimensioning?"*
   **Answer:** When the distance **between** adjacent features is the functional requirement rather
   than their absolute position — for example the pitch between two pins that must engage two holes in
   a mating part. Chain controls feature-to-feature tightly; baseline controls absolute position
   tightly. You choose based on which one function actually demands.

### 28. Expert questions
1. *"You need both tight absolute position AND tight feature-to-feature spacing on the same pattern.
   Coordinate dimensioning cannot give you both. What do you do?"*
   **Answer:** Coordinate dimensioning forces the trade-off shown in §13d, so I stop trying to solve it
   within that system. The correct tool is **GD&T composite position tolerancing** (L21.5.1), which
   applies two feature control frames to the same pattern: an upper segment with a larger tolerance
   controlling the **pattern's location relative to the datums**, and a lower segment with a tighter
   tolerance controlling **feature-to-feature relationships within the pattern**. This directly encodes
   the two independent functional requirements instead of forcing one number to serve both.
   The engineering insight is that the trade-off in coordinate dimensioning is an artefact of the
   *tolerancing system*, not a physical constraint — the parts were always capable of satisfying both
   requirements; the drawing language simply could not express them separately. That is a large part of
   why GD&T exists, and why this lesson is the prerequisite for L21.
2. *"A colleague proposes using RSS instead of worst-case to make a marginal stack-up pass. How do you
   respond?"*
   **Answer:** I would ask which of RSS's preconditions they have verified, because RSS is legitimate
   only under specific circumstances: the contributing variations must be genuinely independent,
   approximately normally distributed, centred on nominal, and drawn from a population large enough for
   statistics to be meaningful. If those hold — a high-volume production population with demonstrated
   process capability data — RSS is not merely acceptable, it is more realistic than worst-case, which
   assumes every dimension is simultaneously at its extreme in the same direction, an event with
   vanishing probability.
   But for a **single fixture**, RSS is meaningless: there is no population, and the one fixture I build
   either conforms or does not. Similarly, for a safety-critical interface where any non-conformance is
   unacceptable, worst-case is the correct standard regardless of statistics.
   So my answer would be: if you have the capability data and it is a production population, show me
   the data and RSS is justified. If the motivation is that worst-case gives an inconvenient answer,
   then the analysis is being chosen to fit the desired conclusion, which is the misuse catalogued at
   L55.6. The honest alternatives are to fix the dimensioning scheme, tighten a tolerance, or change the
   design — not to change the arithmetic.

### 29. Summary
Four dimensioning systems exist: chain (each dimension from the previous feature), baseline (all from a
common datum), coordinate (baseline in two axes) and ordinate (coordinate in tabular form). Chain
dimensioning accumulates tolerance arithmetically and is the most damaging common habit in engineering
drawing; baseline dimensioning eliminates accumulation at zero cost but loosens feature-to-feature
control. Coordinate tolerancing produces square zones whose diagonal is 1.41× the stated tolerance,
which is the primary motivation for GD&T position tolerancing. The dimensioning scheme and the
tolerance value are independent levers — fix the scheme first, because it is free, then tighten
tolerances only as far as still necessary.

### 30. Key takeaways
- **Chain dimensioning stacks tolerance:** `t_total = Σtᵢ`. Three at ±0.3 gives ±0.9.
- **Baseline dimensioning eliminates accumulation** — and it is completely free.
- **The trade-off:** chain controls feature-to-feature tightly; baseline controls absolute position
  tightly. You cannot have both in coordinate dimensioning.
- **Fix the scheme before you tighten tolerances.** The scheme change costs nothing; tighter tolerances
  cost money on every part.
- **Coordinate tolerancing gives square zones** — the corner is 41% further out. This is why GD&T
  position exists.
- **Dimension for function**, never for how the part is measured or made.
- Dimension each feature **once**; never over-dimension; reference dimensions go in parentheses.
- This lesson is the direct foundation of **tolerance stack-up (L23)** and **GD&T datums (L21.2)**.

---
---

# END OF LEVEL 0 — PART 1

## What you have covered

**Module 0.1 — Manufacturing Fundamentals (4 lessons)**
- L0.1.1 The five process families and the load each imposes
- L0.1.2 The 11-stage factory chain and your position in it
- L0.1.3 Production volume and the eight-level sophistication ladder
- L0.1.4 The four-component cost model and fixture justification

**Module 0.2 — Engineering Drawing Fundamentals (5 lessons)**
- L0.2.1 Orthographic projection; first vs third angle
- L0.2.2 Sections, auxiliaries, details and the minimum sufficient view set
- L0.2.3 Line types, weights, precedence and the phantom-line workpiece convention
- L0.2.4 The title block, revision control and the general-tolerance note
- L0.2.5 Dimensioning strategy and tolerance accumulation

## The nine principles established

1. **The process defines the fixture** — never the part alone
2. **You sit at stage 5 of 11** — eight inputs mandatory, nine outputs required
3. **The fixture must earn its cost** from the parts it produces
4. **A fixture is an investment** — quantify scrap first, it is usually the biggest benefit
5. **Check the projection symbol first** — a mirror-image fixture cannot be reworked
6. **Sections replace hidden lines** — depths live in sections
7. **A centreline is not an edge; a phantom line is not your material**
8. **The general tolerance governs every unmarked dimension**
9. **Chain dimensioning stacks tolerance; baseline does not — and baseline is free**

## Exercises set in this part

| Lesson | Beginner | Intermediate | Advanced |
|---|---|---|---|
| L0.1.1 | E0.1.1-B | E0.1.1-I | E0.1.1-A |
| L0.1.2 | E0.1.2-B | E0.1.2-I | E0.1.2-A |
| L0.1.3 | E0.1.3-B | E0.1.3-I | E0.1.3-A |
| L0.1.4 | E0.1.4-B | E0.1.4-I | E0.1.4-A |
| L0.2.1 | E0.2.1-B | E0.2.1-I | E0.2.1-A |
| L0.2.2 | E0.2.2-B | E0.2.2-I | E0.2.2-A |
| L0.2.3 | E0.2.3-B | E0.2.3-I | E0.2.3-A |
| L0.2.4 | E0.2.4-B | E0.2.4-I | E0.2.4-A |
| L0.2.5 | E0.2.5-B | E0.2.5-I | E0.2.5-A |

Plus drawing exercise **DX-0.2.5** (chain → baseline conversion, §16 of L0.2.5).

Use `SOLVE <id>` for a fully worked solution to any of them.

## Coming next

**LEVEL 0 — PART 2 of 3** (Modules 0.3 and 0.4, 8 lessons):
- **Module 0.3 — Mechanical Engineering Fundamentals:** free-body diagrams, stress/strain/yield,
  friction as both a clamping resource and a locating enemy, and deflection intuition
- **Module 0.4 — Machining Fundamentals:** cutting mechanics, the seven operations and their force
  directions, welding and fabrication basics, tube and sheet-metal basics

Module 0.3 is where the calculation work begins in earnest — free-body diagrams and friction are the
foundation of every clamp-force calculation in Level 9.

**Send `NEXT` to continue.**

---
*Level 0 Part 1 · MASTER INDUSTRIAL FIXTURE DESIGN ENGINEERING · 9 lessons · Roadmap R00*
