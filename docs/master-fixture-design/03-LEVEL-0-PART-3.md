# MASTER INDUSTRIAL FIXTURE DESIGN ENGINEERING
## From Scratch to Production-Ready Professional

# LEVEL 0 — ENGINEERING FOUNDATION
# PART 3 OF 3 — MATERIALS, HEAT TREATMENT AND LEVEL 0 ASSESSMENT

---

## Where you are

```
LEVEL 0  ENGINEERING FOUNDATION
   Part 1 ✓  Module 0.1  Manufacturing processes      (4 lessons)
             Module 0.2  Engineering drawing          (5 lessons)
   Part 2 ✓  Module 0.3  Engineering mechanics        (4 lessons)
             Module 0.4  Machining fundamentals       (4 lessons)
   Part 3 ►  Module 0.5  Materials and heat treatment (5 lessons)
             LEVEL 0 ASSESSMENT                       (40 questions)
                                                    ← YOU ARE HERE
```

## What Part 3 does

Part 1 taught you how parts are made and how drawings communicate. Part 2 taught you the physics of
force, stress, friction, deflection and cutting. Part 3 answers the question those two parts left open:

> **What do you make the fixture out of?**

You have calculated a base plate thickness, a locator load, a clamp force. Every one of those
calculations assumed a material property — a yield strength, a Young's modulus, a hardness. This module
is where those numbers come from, and where you learn to specify them correctly on a drawing.

Material selection is also where a great deal of money is won and lost. Specifying EN31 hardened and
ground where mild steel would serve is waste; specifying mild steel where a hardened locator is needed
is a fixture that wears out in three months. Neither error is visible until much later.

## The five lessons

| Lesson | Title | Time |
|---|---|---|
| L0.5.1 | Steel classification: designation systems and how to read them | 1.0 h |
| L0.5.2 | Fixture materials: what to use where, and why | 1.5 h |
| L0.5.3 | Heat treatment: hardening, tempering, case hardening, nitriding | 1.5 h |
| L0.5.4 | Hardness: scales, conversion and what to specify | 1.0 h |
| L0.5.5 | Surface treatments, coatings and corrosion protection | 1.0 h |

Then the **Level 0 Assessment** — 40 questions across all five modules, with grade bands, worked
answers, and a practical design-judgement exercise.

## A note on standards in this module

Material designation is one of the most standard-fragmented areas in engineering. The same steel has
different names in the British (BS/EN), European (EN 10027), American (AISI/SAE), German (DIN),
Japanese (JIS) and Indian (IS) systems, and the mapping between them is rarely exact.

Throughout this module:
- The **primary system used is EN (European, EN 10027-1/-2)**, because it is the current standard and
  the one Indian and European fixture drawings most commonly cite
- **AISI/SAE equivalents** are given alongside, because tooling catalogues and much technical
  literature use them
- The legacy **BS 970 "EN" numbers** (EN8, EN19, EN31 and so on) are included because they remain in
  everyday shop-floor use in India and the UK despite being formally withdrawn

> **Equivalents are approximate, not identical.** Two "equivalent" grades may differ in composition
> limits, permitted residuals and supply condition. Where a material is critical, specify the exact
> standard and grade, and require a **material test certificate** `[PRACTICE]`.

---

# MODULE 0.5 — ENGINEERING MATERIALS AND HEAT TREATMENT

**Lessons:** L0.5.1 – L0.5.5
**Estimated time:** 6 hours
**Prerequisites:** Module 0.3 (stress, stiffness), Module 0.1 (manufacturing processes)

## Module learning outcome

You will be able to select an appropriate material for any fixture component, specify it correctly on a
drawing using a recognised standard, choose and specify the heat treatment required, state the hardness
in the correct scale, and justify each choice on engineering and cost grounds.

---

## LESSON L0.5.1 — STEEL CLASSIFICATION AND DESIGNATION

### 1. Lesson title
**L0.5.1 — Reading steel designations: EN 10027, AISI/SAE, BS 970 and what the numbers actually mean**

### 2. Learning objective
By the end of this lesson you will be able to interpret a steel designation from any of the major
systems, identify the carbon content and principal alloying elements from the code, explain how carbon
content governs hardenability and strength, and write a correct material specification on a drawing.

### 3. Prerequisites
L0.1.1 (manufacturing processes), L0.3.2 (stress, strain, yield).

### 4. Why the topic matters
A drawing that says "STEEL" is not a specification — it is an invitation for the purchasing department
to buy the cheapest thing available. A drawing that says "EN8" tells the toolroom something real. A
drawing that says "C45E to EN 10083-2, hardened and tempered to 28–32 HRC, material certificate
required" tells them everything.

You must also be able to read backwards. When a supplier offers "SAE 1045" against your "C45" call-out,
you need to know whether that is acceptable. When an existing fixture drawing says "EN31" and you are
asked to make a replacement part, you need to know what that is and what modern grade to specify.

Finally, the designation encodes the **carbon content**, and carbon content is the single most
important thing about a steel from a fixture designer's point of view. It determines whether the part
can be hardened at all.

### 5. Simple explanation
Steel is iron with a small amount of carbon in it. How much carbon changes everything:

- **Very little carbon (under 0.25%)** — soft, bendy, easy to weld and machine. Cannot be hardened much.
- **Medium carbon (0.3–0.6%)** — stronger, can be hardened. The general-purpose choice.
- **High carbon (over 0.6%)** — very hard when treated, but brittle. Used for cutting edges and wear
  parts.

Adding other elements — chromium, nickel, molybdenum, manganese — makes **alloy steel**, which can be
hardened deeper and more reliably.

The names are just codes telling you these two facts: how much carbon, and what else is in it.

### 6. Engineering explanation

**CARBON CONTENT — THE GOVERNING VARIABLE**

| Class | Carbon | Character | Fixture use |
|---|---|---|---|
| **Low carbon (mild)** | < 0.25% | Soft, ductile, weldable, cheap | Base plates, brackets, weldments, non-wearing structure |
| **Medium carbon** | 0.25 – 0.60% | Stronger, hardenable | Locators, clamp bodies, general fixture components |
| **High carbon** | 0.60 – 1.00% | Hard, wear-resistant, brittle | Wear pads, springs, cutting elements |
| **Alloy steel** | varies + alloying | Deep hardening, tough | Loaded locators, pins, high-duty components |
| **Tool steel** | high + heavy alloying | Very hard, dimensionally stable | Punches, dies, precision gauge elements |

> **The rule that matters most:** steel with less than about **0.30% carbon cannot be through-hardened
> to a useful level** `[GUIDE]`. If you need a hard surface on a low-carbon steel, you must use **case
> hardening** (L0.5.3), which adds carbon to the surface. Specifying "harden to 58 HRC" on a mild steel
> part is an instruction the heat treater cannot obey.

**SYSTEM 1 — EN 10027 (European, current)**

Two parallel systems exist.

**EN 10027-1: name-based designation**

For **non-alloy (carbon) steels** specified by carbon content:
```
C45E
│││ └── E = controlled sulphur (max), for better properties
││└──── 45 = 0.45 % carbon × 100
│└───── C = non-alloy steel
```

For **structural steels** specified by strength:
```
S275JR
│ │  └── JR = impact test at room temperature, 27 J
│ └───── 275 = minimum yield strength in MPa
└─────── S = structural steel
```
`E` prefix = engineering steel by yield; `P` = pressure vessel; `L` = pipeline.

For **low-alloy steels** (total alloying < 5%):
```
42CrMo4
││ │  └── 4 = chromium content × 4 (÷4 = 1.0 % Cr)
││ └───── Cr, Mo = principal alloying elements, in order of amount
│└─────── 42 = 0.42 % carbon × 100
```
The multiplier depends on the element `[STD — EN 10027-1]`:

| Element | Multiplier |
|---|---|
| Cr, Co, Mn, Ni, Si, W | × 4 |
| Al, Be, Cu, Mo, Nb, Pb, Ta, Ti, V, Zr | × 10 |
| Ce, N, P, S | × 100 |
| B | × 1000 |

For **high-alloy steels** (any element ≥ 5%), prefix `X` and the alloy figures are actual percentages:
```
X5CrNi18-10        (the common 304 stainless)
││ │    │  └── 10 % nickel
││ │    └───── 18 % chromium
││ └────────── Cr, Ni = alloying elements
│└──────────── 5 = 0.05 % carbon × 100
└───────────── X = high-alloy steel
```

**EN 10027-2: number-based designation**
```
1.0503     — the material number for C45
│ │  └──── sequential within the group
│ └─────── steel group
└───────── 1 = steel
```
Material numbers are unambiguous and are what appears on mill certificates. `1.2379` (D2 tool steel)
and `1.7225` (42CrMo4) are numbers worth recognising.

**SYSTEM 2 — AISI / SAE (American)**

Four digits:
```
AISI 1045
     ││└┴── 45 = 0.45 % carbon × 100
     │└──── 0 = no major secondary alloying
     └───── 1 = carbon steel
```

| First two digits | Family |
|---|---|
| 10xx | Plain carbon |
| 11xx | Free-cutting (resulphurised) |
| 41xx | Chromium-molybdenum |
| 43xx | Nickel-chromium-molybdenum |
| 51xx | Chromium |
| 52xx | High-carbon chromium (bearing steel) |
| 61xx | Chromium-vanadium |

Tool steels use letter+number: **D2** (cold work die), **O1** (oil hardening), **A2** (air hardening),
**H13** (hot work), **M2** (high speed).

**SYSTEM 3 — BS 970 "EN" numbers (legacy, still in daily use)**

Formally withdrawn but universally used on shop floors in India and the UK. The "EN" here means
*Emergency Number* from wartime British standards and has **nothing to do with European EN standards**
— a genuine source of confusion.

| BS 970 "EN" | Approx. carbon | Modern EN grade | AISI equiv. | Typical fixture use |
|---|---|---|---|---|
| **EN1A** | 0.15% + S | 11SMn30 | 1215 | Free-cutting, non-loaded parts |
| **EN3B** | 0.20% | S235 / C22 | 1020 | Base plates, brackets, weldments |
| **EN8** | 0.40% | C40E / C45E | 1040 | **The general-purpose fixture steel** |
| **EN9** | 0.55% | C55E | 1055 | Higher strength, wear parts |
| **EN19** | 0.40% + Cr Mo | 42CrMo4 | 4140 | **Loaded pins, shafts, high-duty locators** |
| **EN24** | 0.40% + Ni Cr Mo | 34CrNiMo6 | 4340 | Very high duty, large sections |
| **EN31** | 1.00% + Cr | 100Cr6 | 52100 | **Locators, wear pads, bushes** — hardens to 60+ HRC |
| **EN36** | 0.15% + Ni Cr | 15NiCr13 | 3310 | Case hardening, tough core |
| **EN353** | 0.15% + Ni Cr | 16NiCr4 | — | Case hardening (Indian practice) |

`[GUIDE] — equivalents are approximate. Confirm composition against the actual standard for critical
applications.`

**THE FIXTURE DESIGNER'S SHORTLIST**

In practice, the vast majority of fixture components are made from a handful of materials:

| Application | Typical specification | Why |
|---|---|---|
| Base plate | EN8 / C45E, or mild steel for light duty | Adequate strength, machinable, affordable |
| Riser blocks, structure | EN8 / C45E or mild steel | Structural, not wearing |
| **Locators, rest pads** | **EN31 / 100Cr6, hardened 58–62 HRC** | **Wear resistance is essential** |
| Dowel pins | Commercial hardened dowel `[MFR]` | Buy, do not make |
| Clamp bodies | EN8 / C45E | Loaded but not wearing |
| Pins (loaded) | EN19 / 42CrMo4, hardened and tempered | Strength plus toughness |
| Drill bushes | Commercial hardened bush `[MFR]` | Buy, do not make |
| Light structure, jigs | Mild steel S275 / EN3B | Cheap, weldable |
| Checking fixture base | Aluminium tooling plate, or granite | Light, stable, non-marking |
| Non-marking contacts | Nylon, Delrin, brass, aluminium | Protects finished surfaces |

> **The single most common material error in fixture design** is making locators from the same
> unhardened steel as the base plate. They wear, the parts drift out of tolerance gradually, and nobody
> notices until scrap appears months later.

**HOW TO WRITE A MATERIAL SPECIFICATION ON A DRAWING**

A complete specification has four parts:
```
MATERIAL : C45E TO EN 10083-2
CONDITION: HARDENED AND TEMPERED
HARDNESS : 28-32 HRC
CERT     : EN 10204 TYPE 3.1 MATERIAL CERTIFICATE REQUIRED
```

| Element | Why it is needed |
|---|---|
| **Grade** | Identifies the composition |
| **Standard** | Fixes the composition limits and test requirements |
| **Condition** | As-rolled, normalised, hardened and tempered, annealed |
| **Hardness** | The property you actually care about, with a range |
| **Certificate** | Traceability; EN 10204 type 3.1 is the usual requirement `[STD]` |

Omitting the condition is a frequent error. "EN19" alone could arrive annealed at 200 HB or hardened at
40 HRC — a factor of two in strength.

### 7. Terminology

| Term | Definition |
|---|---|
| **Carbon steel** | Iron + carbon, no significant deliberate alloying |
| **Alloy steel** | Steel with deliberate alloying additions |
| **Low-alloy steel** | Total alloying below ~5% |
| **High-alloy steel** | Any element ≥ 5% (EN prefix `X`) |
| **Tool steel** | Highly alloyed steel for tooling; letter designations |
| **Hardenability** | The depth to which a steel can be hardened (not the hardness) |
| **Mild steel** | Colloquial term for low-carbon steel |
| **Free-cutting steel** | Sulphur or lead added to improve machinability |
| **Material number** | EN 10027-2 numeric designation, e.g. 1.0503 |
| **Mill certificate** | Document stating actual composition and properties |
| **EN 10204 3.1** | Certificate issued by the manufacturer's inspection body `[STD]` |
| **Normalised** | Heated and air-cooled to refine grain and relieve stress |
| **Annealed** | Slow-cooled to maximum softness |
| **Hardened and tempered (H&T)** | Quenched then reheated to a controlled hardness |

### 8. Principle

> **CARBON CONTENT DECIDES WHAT IS POSSIBLE; ALLOYING DECIDES HOW RELIABLY.**
> Below about **0.30% carbon a steel cannot be through-hardened** — it must be case hardened instead.
> A material specification is incomplete without **grade, standard, condition and hardness**. "EN19"
> alone permits a part twice as strong or half as strong as you intended.
> **Equivalents between designation systems are approximate, never identical.**

### 9. Industrial application

**The three-question material selection method**

For any fixture component, ask in this order:

```
1. DOES IT WEAR?
   Contact with the workpiece, repeated loading/unloading,
   sliding contact?
      YES → hardened material required (EN31, or case-hardened)
      NO  → continue

2. IS IT HIGHLY LOADED?
   Significant stress, impact, or fatigue?
      YES → alloy steel, hardened and tempered (EN19/42CrMo4)
      NO  → continue

3. IS IT STRUCTURAL ONLY?
      YES → mild steel or EN8. Choose on cost and machinability.
```

This trivial-looking sequence resolves the great majority of fixture material decisions correctly, and
it prevents both of the classic errors: unhardened locators, and expensive alloy steel used for
brackets.

**Reading a supplier's offer**

You specify `C45E to EN 10083-2`. The supplier offers:

| Offer | Assessment |
|---|---|
| "C45E, EN 10083-2, with 3.1 cert" | ✓ Exactly what was asked |
| "SAE 1045" | ⚠ Close equivalent, but composition limits differ slightly. Acceptable for most fixture structure; confirm for critical parts |
| "EN8" | ⚠ BS 970 legacy grade, roughly equivalent. Common and usually acceptable, but the standard is withdrawn — get the certificate |
| "C45, no certificate" | ⚠ Grade correct, traceability absent. Acceptable for non-critical structure only |
| "Medium carbon steel" | ✗ Not a specification. Reject |
| "1.0503" | ✓ This IS C45 — the EN 10027-2 material number |

**The cost dimension** `[EX-ASSUMED — indicative Indian market ratios, must be confirmed]`

Relative material cost per kg, taking mild steel as 1.0:

| Material | Relative cost |
|---|---|
| Mild steel (EN3B / S275) | 1.0 |
| EN8 / C45E | 1.2 – 1.4 |
| EN19 / 42CrMo4 | 1.8 – 2.5 |
| EN31 / 100Cr6 | 2.0 – 2.8 |
| Tool steel (D2) | 6 – 10 |
| Aluminium tooling plate | 3 – 5 |
| Stainless 304 | 4 – 6 |

Note that **material cost is usually a small fraction of a fixture component's total cost** — machining
labour and heat treatment often dominate. This means upgrading a small locator from mild steel to EN31
may add very little to the total, while the wear benefit is large. Do not economise on small critical
parts.

### 10. Design rules
- **R1** — Specify **grade + standard + condition + hardness** on every material call-out.
- **R2** — Require a **material certificate** (EN 10204 3.1) for load-bearing and critical components
  `[PRACTICE]`.
- **R3** — Never specify through-hardening on steel below about **0.30% carbon** — specify case
  hardening instead.
- **R4** — **All locating surfaces that contact the workpiece must be hardened.** No exceptions on
  production fixtures.
- **R5** — Use **EN8/C45E** as the default for general fixture structure; upgrade only with a reason.
- **R6** — Use **EN19/42CrMo4** where strength and toughness are both required.
- **R7** — Use **EN31/100Cr6** for locators, rest pads and wear surfaces.
- **R8** — **Buy** dowels, bushes and standard components rather than making them `[PRACTICE]`.
- **R9** — Treat cross-system equivalents as **approximate**; verify for critical parts.
- **R10** — Record the material and heat treatment of every item in the **BOM**, not only on the part
  drawing.
- **R11** — For weldments, specify a **weldable** grade — carbon above about 0.25% needs preheat and
  procedure control (L14).

### 11. Rules of thumb
- Carbon under **0.25%** = weldable and soft; over **0.30%** = hardenable; over **0.60%** = hard and
  brittle `[GUIDE]`.
- **EN8** is the general-purpose fixture steel; **EN31** is the general-purpose locator steel;
  **EN19** is the general-purpose loaded-pin steel `[PRACTICE]`.
- In EN designations, the first number ÷ 100 = **% carbon**. `C45` = 0.45%. `42CrMo4` = 0.42%.
- In AISI four-digit codes, the last two digits ÷ 100 = **% carbon**. `1045` = 0.45%.
- BS 970 "EN" numbers have **nothing to do with European EN standards**.
- Material cost is typically a **small fraction** of component cost — do not economise on small
  critical parts.
- A material specification without a **condition** is incomplete and will produce variable parts.

### 12. Formulae

This lesson has no calculations. The functional relationships to remember:

```
EN carbon steel :  C<nn>     →  %C = nn / 100
EN low alloy    :  <nn><El><m> →  %C = nn/100,  %El = m / multiplier
EN high alloy   :  X<nn><El><m> →  %C = nn/100, %El = m (actual)
AISI            :  <fam><nn>  →  %C = nn / 100
```

**Approximate strength from carbon content** `[GUIDE — indicative only, for sanity checking]`
```
Tensile strength (MPa) ≈ 300 + 1000 × %C     for normalised plain carbon steel
```
For C45: 300 + 1000 × 0.45 = 750 MPa. Actual normalised C45 is around 700–800 MPa `[GUIDE]` — so the
approximation is useful as a check, not a design value.

### 13. Worked numerical example

**Problem:** You are specifying materials for a VMC fixture with four components. For each, apply the
three-question method, select a material, write the full drawing specification, and estimate the
material cost. Then evaluate a proposal to make the locators from the same material as the base plate.

```
GIVEN:
  Component 1 : Base plate, 400 × 300 × 30 mm, structural,
                carries locators and clamps                   [PROJ]
  Component 2 : Rest pad, 40 × 40 × 20 mm, contacts the
                workpiece, 1 of 3, loaded 4 kN                [PROJ]
  Component 3 : Locating pin, Ø16 × 45 mm, enters a hole in
                the part, side load 2.5 kN                    [PROJ]
  Component 4 : Clamp arm, 150 × 40 × 20 mm, transmits
                6 kN bolt load                                [PROJ]
  Production volume : 20,000 parts/year over 5 years          [PROJ]
  Steel density     : 7850 kg/m³                              [GUIDE]
  Mild steel cost   : ₹75/kg                                  [EX-ASSUMED]
  Cost multipliers  : EN8 1.3, EN19 2.2, EN31 2.4             [EX-ASSUMED]

REQUIRED:
  (a) Material selection for each component, with justification
  (b) Full drawing specification for each
  (c) Material mass and cost for each
  (d) Total material cost
  (e) Evaluation of using mild steel for the rest pads
  (f) Engineering conclusion

ASSUMPTION:
  1. Costs are illustrative Indian market values for teaching.
     ACTUAL PRICES MUST BE CONFIRMED with suppliers — they vary
     with market, quantity, size and form. [EX-ASSUMED]
  2. Steel density 7850 kg/m³. [GUIDE]
  3. Material bought as rectangular stock at the finished size
     plus machining allowance; allowance neglected here for
     simplicity, so costs are UNDERSTATED.
  4. Heat treatment cost excluded from this comparison — it is
     evaluated separately in L0.5.3.
  5. Volume of 20,000/year for 5 years = 100,000 cycles on the
     locating surfaces. [PROJ]

FORMULA:
  Volume  V = l × w × h            (mm³)
  Mass    m = V × ρ / 1e9          (kg, with V in mm³)
  Cost    C = m × rate × multiplier

VARIABLE DEFINITIONS:
  V = volume, mm³ ; m = mass, kg ; ρ = density, kg/m³
  rate = base cost of mild steel, ₹/kg

UNIT CONVERSION:
  ρ = 7850 kg/m³ = 7.85e-6 kg/mm³

SUBSTITUTION AND CALCULATION:

  (a) MATERIAL SELECTION — THREE-QUESTION METHOD

  COMPONENT 1 — BASE PLATE
    Q1 Does it wear?        NO — nothing slides on it
    Q2 Highly loaded?       NO — low stress, stiffness governs
    Q3 Structural only?     YES
    → EN8 / C45E. Mild steel would serve, but EN8 machines to a
      better finish and costs little more. Note that STIFFNESS
      governs here (L0.3.4) and E is identical for all steels,
      so there is no stiffness reason to upgrade further.

  COMPONENT 2 — REST PAD
    Q1 Does it wear?        YES — the workpiece lands on it
                            100,000 times
    → EN31 / 100Cr6, hardened 58-62 HRC. NON-NEGOTIABLE.

  COMPONENT 3 — LOCATING PIN
    Q1 Does it wear?        YES — the part slides onto it
    Q2 Highly loaded?       YES — 2.5 kN side load, bending
    → Needs BOTH hardness and toughness.
      EN31 is hard but relatively brittle in a slender section.
      EN19 / 42CrMo4 hardened and tempered gives strength with
      toughness; case hardening would add surface hardness.
    → EN19 / 42CrMo4, H&T to 40-45 HRC.
      (For a purely locating pin with low load, a commercial
       hardened dowel would be bought, not made — R8.)

  COMPONENT 4 — CLAMP ARM
    Q1 Does it wear?        NO
    Q2 Highly loaded?       YES — 6 kN bending
    → EN8 / C45E is adequate; check the bending stress.
      Upgrade to EN19 only if the stress check demands it.

  (b) DRAWING SPECIFICATIONS

  ITEM 1 BASE PLATE
    MATERIAL : C45E TO EN 10083-2  (EN8 EQUIVALENT)
    CONDITION: NORMALISED
    HARDNESS : 180-220 HB
    CERT     : EN 10204 TYPE 3.1 REQUIRED

  ITEM 2 REST PAD
    MATERIAL : 100Cr6 TO EN ISO 683-17  (EN31 EQUIVALENT)
    CONDITION: HARDENED AND TEMPERED
    HARDNESS : 58-62 HRC
    NOTE     : LOCATING FACE GROUND AFTER HARDENING
    CERT     : EN 10204 TYPE 3.1 REQUIRED

  ITEM 3 LOCATING PIN
    MATERIAL : 42CrMo4 TO EN 10083-3  (EN19 EQUIVALENT)
    CONDITION: HARDENED AND TEMPERED
    HARDNESS : 40-45 HRC
    CERT     : EN 10204 TYPE 3.1 REQUIRED

  ITEM 4 CLAMP ARM
    MATERIAL : C45E TO EN 10083-2  (EN8 EQUIVALENT)
    CONDITION: NORMALISED
    HARDNESS : 180-220 HB

  (c) MASS AND COST

  ITEM 1 BASE PLATE  400 × 300 × 30
    V = 400 × 300 × 30 = 3,600,000 mm³
    m = 3,600,000 × 7.85e-6 = 28.26 kg
    C = 28.26 × 75 × 1.3 = ₹2,755

  ITEM 2 REST PAD  40 × 40 × 20, quantity 3
    V = 40 × 40 × 20 = 32,000 mm³
    m = 32,000 × 7.85e-6 = 0.2512 kg each
    C = 0.2512 × 75 × 2.4 = ₹45.2 each
    × 3 = ₹135.6

  ITEM 3 LOCATING PIN  Ø16 × 45
    V = π × 8² × 45 = π × 64 × 45 = 9,048 mm³
    m = 9,048 × 7.85e-6 = 0.0710 kg
    C = 0.0710 × 75 × 2.2 = ₹11.7

  ITEM 4 CLAMP ARM  150 × 40 × 20, quantity 2
    V = 150 × 40 × 20 = 120,000 mm³
    m = 120,000 × 7.85e-6 = 0.942 kg each
    C = 0.942 × 75 × 1.3 = ₹91.8 each
    × 2 = ₹183.6

  (d) TOTAL MATERIAL COST
    Base plate      ₹2,755.0
    Rest pads (3)   ₹  135.6
    Locating pin    ₹   11.7
    Clamp arms (2)  ₹  183.6
    ─────────────────────────
    TOTAL           ₹3,085.9

    Base plate share = 2755 / 3086 = 89.3 %

  (e) MILD STEEL REST PADS — EVALUATION

    Cost if mild steel (multiplier 1.0):
      C = 0.2512 × 75 × 1.0 = ₹18.8 each
      × 3 = ₹56.5

    SAVING = 135.6 − 56.5 = ₹79.1
    As a fraction of total material cost = 79.1 / 3086 = 2.6 %

    COST OF THE CONSEQUENCE:
      Unhardened mild steel at ~150 HB will indent and wear
      under 100,000 loading cycles at 4 kN.
      Assume it wears 0.05 mm before being noticed [EX-ASSUMED].
      That 0.05 mm is a direct error on every part located from
      it. If the part tolerance is ±0.05 mm, the entire
      tolerance band is consumed by locator wear alone.

RESULT:
  ┌──────────────┬──────────────────────┬──────────┬──────────┐
  │ Item         │ Material             │ Mass kg  │ Cost ₹   │
  ├──────────────┼──────────────────────┼──────────┼──────────┤
  │ Base plate   │ C45E, normalised     │  28.26   │  2,755.0 │
  │ Rest pad ×3  │ 100Cr6, 58-62 HRC    │   0.75   │    135.6 │
  │ Locating pin │ 42CrMo4, 40-45 HRC   │   0.07   │     11.7 │
  │ Clamp arm ×2 │ C45E, normalised     │   1.88   │    183.6 │
  ├──────────────┼──────────────────────┼──────────┼──────────┤
  │ TOTAL        │                      │  30.96   │  3,085.9 │
  └──────────────┴──────────────────────┴──────────┴──────────┘

  Mild steel rest pads would save ₹79 — 2.6 % of material cost.

SAFETY FACTOR:
  Not applicable to material selection directly. Note that the
  hardness RANGES specified (58-62 HRC, 40-45 HRC) are the
  equivalent concept: they define an acceptable band rather
  than a single unachievable target.

PASS/FAIL:
  Selections (a)-(d) ✓ APPROPRIATE
  Proposal (e) mild steel rest pads ✗ REJECT

ENGINEERING CONCLUSION:
  THE NUMBERS EXPOSE HOW BADLY MATERIAL COST MISLEADS AS A
  DECISION CRITERION FOR SMALL CRITICAL PARTS.

  1. THE BASE PLATE IS 89 % OF THE MATERIAL COST AND ALMOST
     NONE OF THE RISK.
     It is a structural component with no wear duty, and
     stiffness governs it — for which all steels are identical
     (L0.3.4). There is no engineering case for upgrading it,
     and any cost reduction effort should be aimed here, at the
     large item, not at the small ones.

  2. THE REST PADS ARE 4 % OF THE MATERIAL COST AND CARRY THE
     ENTIRE DIMENSIONAL RISK.
     Every part made on this fixture is located by three small
     pieces of steel costing ₹45 each. Saving ₹79 across the
     set — 2.6 % of material cost, and a far smaller fraction
     of the total fixture cost once machining is included —
     risks consuming the whole part tolerance through wear.
     THIS IS A CATASTROPHICALLY BAD TRADE, and it is made
     regularly, because ₹79 is visible on a quotation and
     gradual locator wear is not.

  3. THE WEAR MECHANISM IS INVISIBLE UNTIL IT IS EXPENSIVE.
     Locator wear does not fail suddenly. Parts drift slowly
     out of tolerance over months. By the time scrap appears,
     thousands of marginal parts may have shipped. This is why
     R4 — all locating surfaces hardened, no exceptions — is
     stated absolutely rather than as a guideline.

  4. THE PIN SELECTION SHOWS WHY "HARDEST IS BEST" IS WRONG.
     EN31 at 62 HRC would outwear EN19 at 42 HRC, but in a
     Ø16 slender pin carrying a 2.5 kN side load, brittleness
     matters more than the last increment of wear resistance.
     A snapped locating pin is a worse outcome than a slightly
     worn one. MATERIAL SELECTION IS ALWAYS A BALANCE, AND
     TOUGHNESS IS A REQUIREMENT, NOT A CONSOLATION PRIZE.

  RECOMMENDATION: Adopt the selections as specified. Reject the
  mild steel rest pad proposal. If cost reduction is required,
  examine the base plate size and the machining content, which
  is where the money actually is.

SENSITIVITY NOTE:
  Ranked by influence on TOTAL MATERIAL COST:
    1. BASE PLATE SIZE — 89 % of the cost. A 10 % reduction in
       plate volume saves more than making every other part
       from mild steel.
    2. BASE PLATE GRADE — mild steel instead of EN8 saves
       ₹636 (23 % of material cost), and is defensible IF the
       machined finish is acceptable.
    3. SMALL PART GRADES — negligible cost effect, large
       functional effect. Do not optimise here.
  Ranked by influence on FIXTURE PERFORMANCE:
    1. REST PAD HARDNESS — governs dimensional stability over
       the fixture's life
    2. PIN MATERIAL — governs whether it breaks
    3. BASE PLATE GRADE — almost no effect (E is identical)
  THE TWO RANKINGS ARE ALMOST EXACTLY INVERTED. That inversion
  is the whole lesson.
```

### 14. Engineering assumptions
- Costs are illustrative `[EX-ASSUMED]` Indian market values — actual prices must be confirmed.
- Steel density 7850 kg/m³ `[GUIDE]`.
- Material bought at finished size; machining allowance neglected, so costs are understated.
- Heat treatment cost excluded from this comparison.
- 0.05 mm wear on unhardened pads is an illustrative figure `[EX-ASSUMED]`.
- 100,000 loading cycles from the stated volume and programme life.

### 15. Diagram

```
     STEEL DESIGNATION — READING THE CODE
     (instructional reference)

  EN 10027-1  NON-ALLOY STEEL BY CARBON

        C 45 E
        │ │  └── E = controlled sulphur
        │ └───── 45 ÷ 100 = 0.45 % CARBON
        └─────── C = non-alloy steel

  EN 10027-1  LOW ALLOY (total alloying < 5 %)

        42 Cr Mo 4
        │  │  │  └── 4 ÷ 4 = 1.0 % Cr   (Cr multiplier = 4)
        │  │  └───── Mo present, below the stated figure
        │  └──────── Cr = principal alloying element
        └─────────── 42 ÷ 100 = 0.42 % CARBON

  EN 10027-1  HIGH ALLOY (any element ≥ 5 %)

        X 5 CrNi 18-10
        │ │  │    │  └── 10 % Ni
        │ │  │    └───── 18 % Cr   (ACTUAL %, no divisor)
        │ │  └────────── alloying elements
        │ └───────────── 5 ÷ 100 = 0.05 % carbon
        └─────────────── X = high alloy

  AISI / SAE

        1 0 45
        │ │ └┴── 45 ÷ 100 = 0.45 % CARBON
        │ └───── no major secondary alloying
        └─────── carbon steel family

  ──────────────────────────────────────────────────────────

  CARBON CONTENT — THE GOVERNING VARIABLE

   %C  0.1    0.25    0.4     0.6     0.8    1.0
       │       │       │       │       │      │
       ├───────┼───────┼───────┼───────┼──────┤
       │ MILD  │  MEDIUM CARBON│  HIGH CARBON │
       │       │               │              │
   weldable ◄──┤               │              │
               ├──► hardenable │              │
                               ├──► brittle   │
       EN3B   EN8      EN9    EN31 ─────────► │

       ┌────────────────────────────────────────────┐
       │ BELOW ~0.30 % CARBON A STEEL CANNOT BE     │
       │ THROUGH-HARDENED.                          │
       │ "Harden to 58 HRC" on mild steel is an     │
       │ instruction the heat treater cannot obey.  │
       │ Use CASE HARDENING instead. (L0.5.3)       │
       └────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE THREE-QUESTION SELECTION METHOD

        ┌──────────────────────┐
        │ 1. DOES IT WEAR?     │──YES──► EN31 / 100Cr6
        └──────────┬───────────┘         hardened 58-62 HRC
                   │ NO
        ┌──────────▼───────────┐
        │ 2. HIGHLY LOADED?    │──YES──► EN19 / 42CrMo4
        └──────────┬───────────┘         H&T 40-45 HRC
                   │ NO
        ┌──────────▼───────────┐
        │ 3. STRUCTURAL ONLY   │───────► EN8 / C45E
        └──────────────────────┘         or mild steel

  ──────────────────────────────────────────────────────────

  THE INVERSION THAT CATCHES PEOPLE OUT  (from §13)

    SHARE OF MATERIAL COST      SHARE OF FUNCTIONAL RISK

    Base plate    89 % ████████   Base plate    ~0 % ░
    Clamp arms     6 % █          Clamp arms     low █
    Rest pads      4 % ▌          Rest pads   HIGHEST ████████
    Pin          0.4 % ▏          Pin            high ████

    ┌──────────────────────────────────────────────────┐
    │ THE CHEAPEST PARTS CARRY THE GREATEST RISK.      │
    │ Never economise on small critical components.    │
    └──────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  A COMPLETE MATERIAL SPECIFICATION HAS FOUR PARTS

    MATERIAL : 100Cr6 TO EN ISO 683-17        ← grade + standard
    CONDITION: HARDENED AND TEMPERED          ← condition
    HARDNESS : 58-62 HRC                      ← property, as a RANGE
    CERT     : EN 10204 TYPE 3.1 REQUIRED     ← traceability

    Omit the CONDITION and you may receive a part
    twice as strong, or half as strong, as intended.
```

### 16. Drawing example
The material specification block belongs in the **title block** or immediately beneath the part name.
A typical fixture detail drawing carries:

```
┌────────────────────────────────────────────────────────┐
│ PART NAME : REST PAD                    ITEM No. 4     │
│ QTY : 3                                 DWG: F1042-04  │
├────────────────────────────────────────────────────────┤
│ MATERIAL  : 100Cr6 TO EN ISO 683-17 (EN31 EQUIV)       │
│ CONDITION : HARDENED AND TEMPERED                      │
│ HARDNESS  : 58-62 HRC                                  │
│ CERT      : EN 10204 TYPE 3.1                          │
├────────────────────────────────────────────────────────┤
│ NOTES:                                                 │
│ 1. LOCATING FACE (SURFACE A) GROUND AFTER HARDENING.   │
│ 2. GENERAL TOLERANCE ISO 2768-mK.                      │
│ 3. DEBURR ALL EDGES 0.3 MAX.                           │
│ 4. DO NOT SUBSTITUTE MATERIAL WITHOUT APPROVAL.        │
└────────────────────────────────────────────────────────┘
        FOR TRAINING ONLY — NOT FOR MANUFACTURE
```

Note item 4. Material substitution by a well-meaning supplier is a real and frequent problem, and the
note gives you a contractual position.

### 17. CAD workflow
Assign materials in the CAD model, not just on the drawing. In **SolidWorks**: right-click the part
` ▸ Material ▸ Edit Material`, and create a **custom material library** for your standard fixture
grades with the correct density, E and yield values. This gives you three benefits:
1. **Mass properties** are correct, feeding the table-load check from L0.4.4
2. **FEA** uses the right properties automatically
3. The material **propagates to the BOM** if the template is configured for it

Equivalents: Creo `File ▸ Prepare ▸ Model Properties ▸ Material`; NX `Tools ▸ Materials ▸ Assign
Material`; CATIA `Apply Material` from the material catalogue; Inventor `iProperties ▸ Physical`.

**Set up the custom library once.** Most organisations use fewer than a dozen materials across all
their fixtures, and having them pre-defined with correct properties eliminates a whole class of error.

### 18. GD&T application
Not applicable at this lesson. One relevant note: **hardness affects nothing in GD&T directly, but it
affects whether the geometry survives**. A position tolerance held on a soft locator is a position
tolerance held only until the locator wears. Geometry specification and material specification are
independent on the drawing but coupled in reality.

### 19. Manufacturing method
Material selection constrains manufacturing:

| Material | Machining | Welding | Grinding | Notes |
|---|---|---|---|---|
| Mild steel | Easy, gummy finish | **Easy** | Easy | Best for weldments |
| EN8 / C45E | Good | Preheat needed | Good | The general-purpose choice |
| EN19 / 42CrMo4 | Moderate | Difficult, procedure needed | Good | Machine before hardening |
| EN31 / 100Cr6 | **Machine soft, then harden** | Not weldable | **Essential after hardening** | Allow grinding stock |
| Tool steel D2 | Difficult | No | Essential | Specialist heat treatment |
| Stainless 304 | Work-hardens; needs care | Good | Moderate | Non-magnetic, corrosion resistant |
| Aluminium | Very easy | Specialist | Poor | Soft — needs steel inserts at wear points |

> **The sequence rule:** hardened parts are **machined soft, hardened, then ground to final size**.
> Always leave grinding stock — typically 0.2–0.4 mm on ground surfaces `[PRACTICE]` — and expect
> distortion during hardening (L0.5.3).

### 20. Inspection method
Material and condition are verified by:
- **Material certificate** (EN 10204 3.1) — the primary evidence, checked at goods-inward
- **Hardness test** — the practical shop-floor verification (L0.5.4)
- **Spark test** — a rough workshop method for distinguishing carbon levels; indicative only
- **Spectroscopy / PMI** — positive material identification, used where certification is critical

For fixture work, certificate plus hardness test is the normal standard `[PRACTICE]`.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Writing "STEEL" or "MS" as the material specification | Unpredictable properties; purchasing buys cheapest |
| 2 | **Unhardened locators** | Gradual wear; parts drift out of tolerance invisibly |
| 3 | Specifying through-hardening on low-carbon steel | Impossible instruction; heat treater guesses |
| 4 | Omitting the **condition** from the specification | Part may arrive annealed or hardened — 2× strength difference |
| 5 | Specifying a single hardness value rather than a range | Unachievable; heat treater cannot certify it |
| 6 | Assuming BS 970 "EN" relates to European EN standards | Confusion in procurement and certification |
| 7 | Treating cross-system equivalents as identical | Composition differences cause heat treatment surprises |
| 8 | Upgrading the base plate for stiffness | No benefit whatsoever — E is identical for all steels |
| 9 | Economising on small critical parts | Large risk for trivial saving |
| 10 | Specifying EN31 for a slender loaded pin | Brittle fracture |
| 11 | Making dowels and bushes instead of buying them | Higher cost, lower quality |
| 12 | No material certificate on load-bearing parts | No traceability if something fails |
| 13 | Forgetting grinding stock on parts to be hardened | Part finishes undersize after grinding |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Locators worn after a few months | Unhardened or under-hardened | Hardness test the locator | Replace with hardened EN31 | Harden all locating surfaces |
| Part arrives softer than specified | Wrong condition supplied; no condition stated | Hardness test; check certificate | Reject or re-treat | Specify condition and hardness range |
| Heat treater cannot reach specified hardness | Carbon content too low for the target | Check material certificate | Change material or use case hardening | Check carbon before specifying hardness |
| Locating pin snapped | Too hard / too brittle for the load | Examine fracture surface | Change to tougher grade, lower hardness | Balance hardness against toughness |
| Part undersize after grinding | No grinding stock allowed | Compare drawing to process | Remake with allowance | Specify 0.2–0.4 mm grinding stock |
| Weld cracking on a fixture weldment | Carbon too high for welding without preheat | Check material grade | Preheat and control procedure | Specify weldable grade for weldments |
| Two "identical" fixtures behave differently | Material substituted on one | Check certificates for both | Verify and correct | Add "DO NOT SUBSTITUTE" note |

### 23. Design checklist
- [ ] Does every part have a **grade + standard + condition + hardness** specification?
- [ ] Is a **material certificate** required for load-bearing parts?
- [ ] Have I applied the **three-question method** to each component?
- [ ] Is **every workpiece-contacting surface hardened**?
- [ ] Is the carbon content adequate for any specified through-hardening?
- [ ] Is hardness specified as a **range**, not a single value?
- [ ] Have I balanced hardness against **toughness** on slender loaded parts?
- [ ] Am I **buying** standard dowels, bushes and clamps rather than making them?
- [ ] Have I allowed **grinding stock** on parts to be hardened and ground?
- [ ] For weldments, is the grade **weldable**?
- [ ] Is the material recorded in the **BOM** as well as on the part drawing?
- [ ] Have I avoided upgrading material for stiffness reasons (it does not work)?
- [ ] Is there a **DO NOT SUBSTITUTE** note on critical parts?

### 24. Beginner exercise
**E0.5.1-B** — Interpret the following designations. For each, state the carbon percentage, the
principal alloying elements if any, and one typical fixture application.
(a) C35E
(b) AISI 1020
(c) 34CrMo4
(d) X2CrNiMo17-12-2
(e) EN31
(f) State which of the above could NOT be through-hardened to 55 HRC, and why.

### 25. Intermediate exercise
**E0.5.1-I** — You are designing a drilling fixture with the following components:
```
1  Base plate      500 × 250 × 25 mm, structural
2  Drill bush      Ø20 OD × 25 long, guides a Ø10 drill, 50,000 uses
3  Support pin     Ø20 × 60 mm, carries 8 kN compressive load
4  Location block  60 × 50 × 30 mm, workpiece butts against it
5  Clamp strap     200 × 45 × 25 mm, 10 kN bolt load
```
(a) Apply the three-question method to each and select a material.
(b) Write the complete drawing specification for items 2 and 4.
(c) For item 2, state whether you would make or buy it, and justify the decision.
(d) Calculate the material cost of items 1 and 4 using ₹75/kg base and the multipliers from §13.
(e) A colleague proposes making item 4 from the same material as item 1 to simplify purchasing.
Evaluate this proposal on both cost and function.

### 26. Advanced exercise
**E0.5.1-A** — A tube welding fixture is to be built for a stainless steel exhaust assembly. Production
is 15,000 assemblies per year for 4 years. The fixture has:
```
A  Welded mild steel base frame           (structure)
B  Machined top plate, 800 × 400 × 30 mm  (mounts everything)
C  6 × V-block locators                   (tube rests on these)
D  4 × pneumatic clamp mounting brackets
E  2 × tube end stops                     (define tube length)
F  8 × copper backing bars                (weld heat sink)
G  1 × datum pick-up dowel bore insert
```
(i) Select a material, condition and hardness for each item, applying the three-question method and
justifying each choice.
(ii) Explain why the tube-contacting locators in a **welding** fixture present a material problem that
does not arise in a machining fixture, and state how you would address it.
(iii) Explain why item F is copper and what would happen if it were steel.
(iv) The customer asks for the whole fixture to be made from stainless steel to avoid contaminating the
stainless workpiece. Evaluate this request technically and commercially, and give a recommendation.
(v) Write complete drawing specifications for items B, C and E.
(vi) Item C wears after 18 months in service. List five possible causes and the investigation you would
perform for each.
(vii) Explain how the material selection would change if the same fixture were for aluminium tube
instead of stainless.

### 27. Interview questions
1. *"What material would you use for a locator, and why?"*
   **Answer:** A hardened steel — typically EN31 or 100Cr6 hardened to 58–62 HRC, ground after
   hardening. The reason is wear. A locator contacts the workpiece on every cycle, and on a production
   fixture that is tens or hundreds of thousands of cycles. Any wear on a locating surface is a direct
   dimensional error on every part produced, and because it happens gradually it is not noticed until
   parts start failing inspection — by which time a lot of marginal product may have shipped. The cost
   difference between hardened and unhardened for a small locator is trivial, typically a few tens of
   rupees, so there is no defensible reason not to harden it.
2. *"A drawing says 'harden to 58 HRC' on a mild steel part. What is your reaction?"*
   **Answer:** It cannot be done as written. Mild steel has under about 0.25% carbon, and you need
   roughly 0.30% minimum to through-harden to any useful level — 58 HRC needs considerably more than
   that. There are two correct routes: change the material to a medium or high carbon steel such as
   EN31 that can reach that hardness, or keep the mild steel and specify **case hardening**, which
   diffuses carbon into the surface and can achieve 58–62 HRC in a thin case over a tough core. Which
   is right depends on whether the part needs a tough core — for an impact-loaded part case hardening
   is often actually the better answer, not just the workaround.

### 28. Expert questions
1. *"How do you decide between case hardening a mild steel and through-hardening an alloy steel for a
   loaded locator?"*
   **Answer:** The question is really about what the **core** needs to do, and there are four
   considerations.
   **Load type.** If the part sees impact or shock, a case-hardened component is usually superior: you
   get a hard wear-resistant surface over a tough, ductile core that will absorb impact without
   cracking. A through-hardened part at 60 HRC is hard all the way through and correspondingly brittle
   — it will resist wear beautifully and then shatter. For a locator that a heavy casting is dropped
   onto every cycle, that distinction is decisive.
   **Section size and stress distribution.** In bending, stress is highest at the surface and zero at
   the neutral axis, which maps almost perfectly onto a case-hardened profile — hard where it is
   stressed, tough where it is not. But if the case is too thin relative to the load, you get **case
   crushing**: the hard shell collapses into the soft core under contact pressure. That failure mode is
   the main argument against case hardening for heavily loaded small contact areas.
   **Dimensional stability and rework.** Through-hardened parts can be reground repeatedly through
   their life. A case-hardened part has a finite case depth — typically 0.5 to 1.5 mm — and once you
   grind through it, the part is scrap. For a locator you expect to refurbish, through-hardening is
   more forgiving.
   **Distortion and cost.** Case hardening involves a long thermal cycle and generally more distortion,
   which means more grinding stock and more grinding. Through-hardening a pre-alloyed steel is often
   simpler and cheaper for small parts. But mild steel is cheaper to buy and much easier to machine
   before treatment, so for large or complex parts the balance can reverse.
   My default for a small, heavily loaded locator is through-hardened EN31; my default for a larger
   part that sees impact, or one where a tough core matters structurally, is case-hardened EN36 or
   16MnCr5. And I would always ask the heat treater — they know their equipment's distortion behaviour
   better than any textbook does.
2. *"Your organisation wants to standardise on three fixture materials to simplify purchasing. Which
   three, and what do you lose?"*
   **Answer:** I would choose **mild steel (S275 or EN3B), EN8/C45E, and EN31/100Cr6**, and I would
   argue that this covers perhaps 85% of fixture components properly.
   Mild steel handles all welded structure, brackets, guards, non-critical spacers and anything where
   only stiffness matters — and since Young's modulus is identical across all steels, stiffness-driven
   parts have nothing to gain from an upgrade. EN8 handles the general machined structure: base plates,
   riser blocks, clamp arms, moderately loaded components, and it machines to a good finish. EN31
   handles everything that touches the workpiece or wears: locators, rest pads, wear strips, stops.
   The standardisation benefits are real and often underestimated. **Stock holding** — you can keep
   common sizes on the shelf, which shortens lead times dramatically. **Heat treatment** — a treater
   who processes the same grade repeatedly gives more consistent results with better-known distortion
   behaviour. **Machining** — the toolroom builds up cutting parameter knowledge. **Purchasing** —
   fewer suppliers, better prices, simpler goods-inward inspection. **Error reduction** — fewer
   opportunities to specify something inappropriate.
   What I lose is the 15%, and I need to be explicit about it so the standard does not become a straitjacket.
   I lose **EN19/42CrMo4**, which is my proper answer for slender highly loaded pins where I need
   strength with toughness — with only EN31 available I would be tempted to use it and risk brittle
   fracture. I lose **case-hardening grades** for impact-loaded parts with tough cores. I lose
   **aluminium tooling plate**, which is genuinely the right material for checking fixtures and
   weight-sensitive structures. I lose **stainless** for corrosive or food-industry environments. And I
   lose **tool steels** for anything approaching die work.
   So my recommendation would be a **three-material standard with a documented exception route** — the
   three grades cover the default cases and require no approval, and anything outside them requires a
   one-line engineering justification on the BOM. That preserves the purchasing and stock benefits
   while preventing the standard from forcing a wrong choice. A standard that cannot be departed from
   with justification is not a standard, it is a constraint, and engineers will quietly work around it
   in worse ways.

### 29. Summary
Steel designation systems encode two essential facts: carbon content and alloying. In EN 10027-1 the
leading number divided by 100 gives the carbon percentage, so C45 is 0.45% carbon and 42CrMo4 is 0.42%
carbon with about 1% chromium; high-alloy grades carry an X prefix and state actual percentages. AISI
four-digit codes give carbon in the last two digits. The legacy BS 970 "EN" numbers remain in daily
use and are unrelated to European EN standards. Carbon content governs what is possible: below about
0.30% a steel cannot be through-hardened and must be case hardened instead. For fixture work a short
list serves almost every need — mild steel for structure and weldments, EN8/C45E for general machined
components, EN19/42CrMo4 where strength and toughness are both needed, and EN31/100Cr6 hardened to
58–62 HRC for everything that touches the workpiece. A complete specification states grade, standard,
condition and hardness range, with a material certificate for load-bearing parts. The worked example
showed the crucial inversion: the base plate was 89% of material cost and carried almost no functional
risk, while the rest pads were 4% of cost and carried all of it.

### 30. Key takeaways
- **Carbon content is the governing variable.** EN: first number ÷ 100 = %C. AISI: last two ÷ 100 = %C.
- **Below ~0.30% carbon, a steel cannot be through-hardened.** Use case hardening instead `[GUIDE]`.
- BS 970 **"EN" numbers are unrelated to European EN standards** — a genuine trap.
- **Cross-system equivalents are approximate, never identical.**
- The fixture shortlist: **mild steel** structure · **EN8/C45E** general · **EN19/42CrMo4** loaded pins ·
  **EN31/100Cr6 at 58–62 HRC** locators.
- **Every workpiece-contacting surface must be hardened.** No exceptions on production fixtures.
- A specification needs **grade + standard + condition + hardness range** — plus a certificate on
  loaded parts.
- Specify hardness as a **range**; a single value cannot be certified.
- **Never upgrade material for stiffness** — E is identical for all steels.
- **The cheapest parts carry the greatest risk.** Never economise on small critical components.

---

## LESSON L0.5.2 — FIXTURE MATERIALS: WHAT TO USE WHERE

### 1. Lesson title
**L0.5.2 — Material selection by function: steels, cast iron, aluminium, plastics and the non-marking problem**

### 2. Learning objective
By the end of this lesson you will be able to select materials for every category of fixture component
including non-metals, justify the choice against wear, load, weight, stability and cost, specify
non-marking contact materials for finished surfaces, and identify when a bought standard component is
better than a made one.

### 3. Prerequisites
L0.5.1, L0.3.2 (stress), L0.3.4 (stiffness).

### 4. Why the topic matters
L0.5.1 gave you the steel vocabulary. This lesson extends it to everything else a fixture is made from,
and to the selection decisions that steel alone cannot answer.

Three problems in particular need materials outside the steel shortlist:

1. **Weight.** A checking fixture that an inspector lifts twenty times a shift, or a 5-axis fixture
   whose mass affects machine dynamics, cannot be solid steel.
2. **Marking.** A fixture that clamps a painted, plated, polished or soft workpiece will damage it if
   the contacts are hardened steel. This is one of the most common causes of customer rejection, and it
   is entirely preventable at the design stage.
3. **Stability.** Cast iron and granite have properties — vibration damping, dimensional stability —
   that steel does not, and there are applications where they are the right answer.

You also need to know when **not** to design at all. A very large fraction of fixture components should
be bought from a catalogue rather than drawn, and knowing which is a mark of experience.

### 5. Simple explanation
Different jobs need different materials:

- **Steel** — strong, stiff, cheap. The default for almost everything.
- **Hardened steel** — for anything that rubs or gets hit repeatedly.
- **Cast iron** — heavy and absorbs vibration well. Good for big stable bases.
- **Aluminium** — a third of the weight of steel. Good when things must be lifted or moved fast.
- **Plastics (nylon, Delrin, UHMWPE)** — soft, so they will not mark a nice surface.
- **Brass, copper, bronze** — soft metals for gentle contact and heat handling.

The main new idea is **not marking the part**. If the workpiece is painted or polished, a hard steel
clamp will leave a dent, and that part is rejected. So the bit that touches it must be softer than the
part.

### 6. Engineering explanation

**THE MATERIAL SELECTION MATRIX**

| Material | Density kg/m³ | E (GPa) | Character | Fixture use |
|---|---|---|---|---|
| Mild steel | 7,850 | 200 | Cheap, weldable, soft | Structure, weldments, brackets |
| EN8 / C45E | 7,850 | 200 | General purpose, machinable | Base plates, blocks, clamp arms |
| EN19 / 42CrMo4 | 7,850 | 200 | Strong and tough | Loaded pins, shafts |
| EN31 / 100Cr6 | 7,850 | 200 | Very hard when treated | Locators, rest pads, wear strips |
| Grey cast iron | 7,200 | 100–140 | **Excellent damping**, stable | Large bases, machine-like structures |
| Aluminium 6061/6082 | 2,700 | 70 | **Light**, easy to machine | Checking fixtures, 5-axis, handled parts |
| Aluminium tooling plate | 2,800 | 71 | Light, **stress-relieved and flat** | Precision light structures |
| Stainless 304/316 | 7,900 | 193 | Corrosion resistant, non-magnetic | Wet, food, medical, chemical |
| Brass | 8,500 | 100 | Soft, non-sparking | Non-marking contacts |
| Bronze | 8,800 | 100 | Good bearing properties | Bushes, sliding surfaces |
| Copper | 8,960 | 117 | **High thermal conductivity** | Weld backing bars, heat sinks |
| Nylon (PA6) | 1,150 | 2–3 | Tough, soft, cheap | Non-marking pads, guides |
| Acetal (Delrin/POM) | 1,410 | 2.5–3.5 | **Dimensionally stable**, low friction | Non-marking locators, wear strips |
| UHMWPE | 950 | 0.7–1.4 | Very low friction, tough | Sliding guides, non-marking |
| PTFE | 2,200 | 0.4–0.8 | Lowest friction, chemically inert | Low-friction pads (creeps under load) |
| Polyurethane | 1,200 | varies | Elastic, grippy | Compliant clamp pads |
| Granite | 2,700–3,000 | 50–70 | **Extremely stable**, non-corroding | Surface plates, precision inspection bases |
| Tooling epoxy / resin | 1,700–2,100 | 10–20 | Cast to shape, cheap for profiles | Profile formers, checking contours |

`[GUIDE] — indicative property values. Confirm against supplier data for design.`

**GREY CAST IRON — THE UNDERUSED OPTION**

Cast iron is unfashionable but has real advantages for large fixture bases:

| Property | Consequence |
|---|---|
| **Vibration damping 5–10× that of steel** `[GUIDE]` | Reduces chatter; better surface finish |
| Dimensionally stable after ageing | Does not move over years |
| Good machinability, excellent surface finish | Cheap to machine despite hardness |
| Self-lubricating (free graphite) | Good sliding surfaces |
| **Brittle — low tensile strength** | Cannot take shock or tension; design in compression |
| **Not weldable** in the normal sense | Repairs are specialist work |
| Heavy, and requires a casting pattern | Only economic at quantity or large size |

> Cast iron is why machine tool bases are cast iron. If your fixture is large, heavy, permanent and
> vibration-sensitive, cast iron deserves consideration. For one-off fabricated fixtures, the pattern
> cost usually rules it out.

**ALUMINIUM — WHEN LIGHTNESS WINS**

The naive view is that aluminium is too soft and too flexible for fixtures. That is right for wear
surfaces and wrong for structures, for a reason worth understanding.

```
STIFFNESS PER UNIT MASS IN BENDING

  Steel     : E = 200 GPa,  ρ = 7850 kg/m³
  Aluminium : E =  70 GPa,  ρ = 2700 kg/m³

  E/ρ ratio  steel     = 200/7850 = 0.0255
             aluminium =  70/2700 = 0.0259     ≈ EQUAL
```

For the **same mass**, aluminium and steel have almost identical specific stiffness in simple tension.
But in **bending** aluminium wins, because for the same mass you can make the section nearly three
times thicker — and from L0.3.4, stiffness goes as thickness **cubed**.

```
Same mass, same width, aluminium section is 2.9× deeper
  → I increases by 2.9³ = 24×
  → E is 2.9× lower
  → NET STIFFNESS ≈ 8× GREATER for the same mass
```

This is why aluminium tooling plate is standard for checking fixtures and large weight-sensitive
structures. It is genuinely counter-intuitive and it is the correct engineering answer.

**Where aluminium fails:**
- **Wear surfaces** — far too soft. Always insert hardened steel locators into an aluminium base.
- **Threads** — aluminium threads strip. Use **steel threaded inserts** (Helicoil, Keensert) for
  anything that is repeatedly assembled `[PRACTICE]`.
- **Thermal** — expands about 2× steel (23 vs 11.5 µm/m/°C `[GUIDE]`), so thermal error doubles.
- **Galling** — aluminium against aluminium galls badly in sliding contact.

> **The standard aluminium fixture pattern:** aluminium body for lightness, **steel inserts at every
> wear point and every thread**. This gets the weight benefit without the wear penalty and is the
> correct way to use the material.

**THE NON-MARKING PROBLEM**

If the workpiece has a finished surface — painted, plated, anodised, polished, ground, or simply soft
like aluminium or plastic — a hardened steel contact will damage it.

The governing principle:

> **The contact material must be softer than the workpiece surface**, or the contact area must be large
> enough that pressure stays below the workpiece material's yield strength.

Recall from L0.4.2 the example where a 70 kN clamp on a 400 mm² pad gave 175 MPa — beyond mild steel's
yield. The same arithmetic governs marking: `pressure = force / contact area`, and if that exceeds the
workpiece's yield strength, you get a permanent dent.

**Non-marking contact material selection**

| Workpiece surface | Recommended contact | Notes |
|---|---|---|
| Painted / powder coated | Nylon, polyurethane, UHMWPE | Softest options; check paint chemistry compatibility |
| Anodised aluminium | Acetal, nylon, brass | Anodising is hard but thin and chips |
| Plated (zinc, chrome) | Acetal, nylon | Plating is brittle |
| Polished / cosmetic | UHMWPE, polyurethane, felt | Nothing harder than the finish |
| Machined aluminium | Brass, bronze, acetal | Aluminium marks easily |
| Soft plastic parts | Polyurethane, foam-faced | Large contact area, low pressure |
| Raw steel / cast iron | Hardened steel is fine | No marking concern |
| Stainless (cosmetic) | Acetal, nylon — **never carbon steel** | Carbon steel contamination causes rust spots |

> **The stainless contamination trap.** Contacting stainless steel with carbon steel transfers iron
> particles, which then rust and produce brown spots on a part that is supposed to be corrosion-proof.
> On stainless work, use stainless, plastic or brass contacts throughout. This catches people out
> repeatedly in food, pharmaceutical and architectural work.

**Plastic contact design considerations:**
- Plastics **creep** under sustained load — a clamp left tight for weeks will emboss. Acetal creeps
  less than nylon; PTFE creeps badly and should not carry sustained load.
- Plastics have **low stiffness**, so a plastic-faced locator is a compliant locator. Never use plastic
  for a **precision locating** surface — use it for **clamping contact** only, unless the tolerance is
  loose.
- Plastics **absorb moisture** (nylon particularly), which changes dimensions. Acetal is far more
  stable.
- Plastics are **replaceable wear items**. Design them as bolted-on inserts, not as integral features.

> **The rule that resolves most of this:** locate on hardened steel, clamp through plastic. Location
> needs precision and hardness; clamping needs compliance and gentleness. Separating the two functions
> onto different materials solves both problems at once — and it is the same "separate the functions"
> logic as the positive stop doctrine from L0.3.3.

**COPPER AND BRASS IN WELDING FIXTURES**

Welding introduces requirements no machining fixture has:

| Material | Role in a welding fixture |
|---|---|
| **Copper** | Weld backing bars. High thermal conductivity draws heat away; molten steel does not wet copper, so the weld does not stick to it |
| **Brass / bronze** | Non-marking contacts; spatter adheres less than to steel |
| **Ceramic** | Weld backing where higher temperature resistance is needed |
| **Mild steel** | General structure — but expect distortion and spatter damage |
| **Stainless** | Contacts for stainless work, to avoid carbon contamination |

> Steel backing bars **weld themselves to the workpiece**. Copper does not. This is not a refinement —
> it is the difference between a fixture that works and one that must be chiselled apart after the
> first weld.

**WHEN TO BUY RATHER THAN MAKE**

A large fraction of fixture components should never be drawn as details:

| Component | Buy or make | Why |
|---|---|---|
| Dowel pins | **BUY** `[MFR]` | Ground to h6, hardened, cheap, better than you can make |
| Drill bushes | **BUY** `[MFR]` | Hardened, ground, standard sizes to ISO 4379 / DIN 179 |
| Toggle clamps | **BUY** `[MFR]` | Engineered mechanism, rated force |
| Strap clamps, studs, nuts | **BUY** `[MFR]` | Standard clamping kits, very cheap |
| Rest buttons / spherical pads | **BUY** `[MFR]` | Hardened, standard heights |
| Springs | **BUY** `[MFR]` | Rated, tested, cheaper than making |
| Cylinders (pneumatic/hydraulic) | **BUY** `[MFR]` | Never make |
| Ball plungers, spring plungers | **BUY** `[MFR]` | Standard |
| Locating pins (standard) | **BUY** `[MFR]` | Standard diamond and round pins exist |
| Custom locators to part profile | **MAKE** | No standard exists |
| Base plates, risers | **MAKE** | Application specific |
| Special clamp arms | **MAKE** | Application specific |

> **The economics are not close.** A commercial hardened, ground dowel pin costs a few tens of rupees.
> Making one requires material, turning, hardening, grinding and inspection — easily fifty times the
> cost for a worse part. The rule is: **if a catalogue part exists and fits, buy it.** Design effort
> should go into the things that genuinely cannot be bought.

This also has a maintenance benefit: standard parts can be replaced from stock in minutes, whereas a
special has to be remade.

### 7. Terminology

| Term | Definition |
|---|---|
| **Tooling plate** | Pre-machined, stress-relieved aluminium plate, flat and stable |
| **Specific stiffness** | Stiffness per unit mass, E/ρ |
| **Damping** | Ability to dissipate vibration energy |
| **Non-marking** | Contact that does not damage the workpiece surface |
| **Creep** | Slow permanent deformation under sustained load |
| **Galling** | Surface welding and tearing between sliding metals |
| **Threaded insert** | Steel thread fitted into a softer material (Helicoil, Keensert) |
| **Backing bar** | Bar supporting the underside of a weld |
| **Spatter** | Molten metal droplets ejected during welding |
| **Carbon contamination** | Iron transfer to stainless, causing rust spots |
| **UHMWPE** | Ultra-high molecular weight polyethylene |
| **Acetal / POM** | Polyoxymethylene; trade name Delrin |
| **Catalogue / standard part** | Commercially available component |

### 8. Principle

> **LOCATE ON HARDENED STEEL; CLAMP THROUGH PLASTIC.**
> Location demands hardness and precision. Clamping demands compliance and gentleness. Separating the
> two functions onto different materials solves both problems simultaneously.
> **Aluminium wins on stiffness-per-mass in bending** — but needs steel inserts at every wear point and
> every thread.
> **The contact must be softer than the workpiece surface**, or large enough that pressure stays below
> its yield strength.
> **If a catalogue part exists and fits, buy it.**

### 9. Industrial application

**The functional material map of a typical fixture**

```
                    ┌──────────────┐
                    │ CLAMP PAD    │  ← ACETAL or POLYURETHANE
                    │ (non-marking)│    (workpiece is painted)
                    └──────┬───────┘
                    ┌──────┴───────┐
                    │  CLAMP ARM   │  ← EN8 / C45E
                    └──────┬───────┘   (loaded, no wear)
        ┌──────────────────┴──────────────┐
        │          WORKPIECE              │
    ┌───┴───┐                      ┌──────┴──┐
    │ REST  │  ← EN31, 58-62 HRC   │ LOCATING│ ← EN31 or
    │  PAD  │    (wear surface)    │   PIN   │   bought dowel
    └───┬───┘                      └──────┬──┘
   ═════╧══════════════════════════════════╧═════
   ║           BASE PLATE                       ║ ← EN8 / C45E
   ║                                            ║   (structural)
   ╚════════════════════════════════════════════╝
        ▲                                   ▲
   ┌────┴────┐                        ┌─────┴────┐
   │ DOWEL   │ ← BOUGHT, hardened     │ T-SLOT   │ ← standard
   │ (locate │   ground h6            │ BOLT     │   bought
   │ to table)│                       └──────────┘
   └─────────┘
```

Five different materials in one small assembly, each chosen for its function. That is normal and
correct — a fixture made entirely from one material is usually a fixture where somebody did not think
about it.

**The weight decision — a real trade-off**

A checking fixture for a 600 mm automotive bracket:

| | Steel version | Aluminium version |
|---|---|---|
| Base plate | 600 × 400 × 25 mm | 600 × 400 × 40 mm |
| Mass of plate | 47.1 kg | 26.9 kg |
| Total fixture mass | ~65 kg | ~38 kg |
| Bending stiffness | reference | comparable (thicker section compensates) |
| Handling | **Needs a hoist** | **One person can lift it** |
| Material cost | lower | ~2.5× higher `[EX-ASSUMED]` |
| Locators | integral hardened steel | **steel inserts required** |
| Thermal error | reference | **2× worse** |

For a checking fixture that is lifted onto a bench twenty times a day, the aluminium version wins
decisively despite costing more — the handling benefit is worth far more than the material premium, and
there is a genuine ergonomic and safety argument as well. For a machining fixture that is bolted down
once and left, steel wins on cost and thermal stability.

**The manual handling threshold** `[PRACTICE] — check local regulations, which vary by jurisdiction:`
above roughly **20–25 kg**, plan for lifting equipment or a two-person lift, and provide lifting points
(eye bolts, or a designed lifting feature). A fixture that people struggle to lift is a fixture that
gets dropped, and a dropped fixture is a damaged fixture.

### 10. Design rules
- **R1** — **Locate on hardened steel; clamp through plastic** where the workpiece surface is finished.
- **R2** — Match the contact material to the **workpiece surface**, not to convenience.
- **R3** — Never contact **stainless steel with carbon steel** on cosmetic or corrosion-critical work.
- **R4** — In aluminium fixtures, fit **steel inserts at every wear point and every thread**.
- **R5** — Use **copper backing bars** for welding; steel welds itself to the work.
- **R6** — Design plastic contacts as **replaceable bolted inserts**, not integral features.
- **R7** — Do not use plastic for **precision locating** — it is compliant and moisture-sensitive.
- **R8** — Consider **cast iron** for large, permanent, vibration-sensitive bases.
- **R9** — Consider **aluminium** whenever the fixture is handled, moved, or mounted on a rotary axis.
- **R10** — **Buy** every component that exists as a catalogue part and fits.
- **R11** — Keep handled fixtures below about **20–25 kg**, or provide lifting features `[PRACTICE]`.
- **R12** — Where a plastic carries sustained load, use **acetal rather than nylon or PTFE** — it creeps
  least.
- **R13** — Check plastic **chemical compatibility** with coolant, cleaning agents and paint systems.

### 11. Rules of thumb
- **Aluminium is ~1/3 the density and ~1/3 the modulus** of steel — so specific stiffness is similar in
  tension, and **better in bending** because you can afford a thicker section `[GUIDE]`.
- Cast iron damps vibration **5–10× better than steel** `[GUIDE]`.
- Aluminium expands about **2× steel** thermally `[GUIDE]`.
- Acetal is the default engineering plastic for fixtures: stable, machinable, low friction.
- **PTFE creeps** — never use it for sustained load bearing.
- Nylon **absorbs moisture** and swells; acetal does not, significantly.
- If a catalogue part exists, **buying costs perhaps 1/20 of making** `[GUIDE]`.
- Steel threads in aluminium: use inserts if the joint will be assembled more than a few times.
- Above roughly **20–25 kg**, design in lifting points `[PRACTICE]`.

### 12. Formulae

**Specific stiffness (tension)**
```
Specific stiffness = E / ρ        (higher is better for lightweight structures)
```

**Equal-mass bending stiffness comparison**

For two plates of equal mass, width and length, of materials 1 and 2:
```
h₂ / h₁ = ρ₁ / ρ₂                          (equal mass → thickness ratio)
Stiffness ratio = (E₂ / E₁) × (h₂ / h₁)³
                = (E₂ / E₁) × (ρ₁ / ρ₂)³
```

**Contact pressure (the marking check)**
```
p = F / A_contact
Mark occurs if  p > σ_yield(workpiece surface)
Required contact area:  A ≥ F / σ_allowable
```

| Variable | Meaning | SI unit |
|---|---|---|
| E | Young's modulus | GPa or MPa |
| ρ | Density | kg/m³ |
| h | Plate thickness | mm |
| p | Contact pressure | MPa |
| F | Clamping force | N |
| A | Contact area | mm² |

### 13. Worked numerical example

**Problem:** A checking fixture base plate is required, 700 × 450 mm, spanning 700 mm between end
supports and carrying a 400 N central load from an inspector leaning on it. Maximum permitted
deflection is 0.05 mm. The fixture is lifted onto a bench several times per shift.

Determine: (a) the steel plate thickness required, (b) its mass, (c) the aluminium plate thickness
required, (d) its mass, (e) the handling assessment, (f) the clamp pad size needed to avoid marking a
painted aluminium workpiece at 800 N clamp force, (g) a recommendation.

```
GIVEN:
  Plate length (span)      L    = 700 mm                   [PROJ]
  Plate width              b    = 450 mm                   [PROJ]
  Central load             F    = 400 N                    [EX-ASSUMED]
  Max deflection           δ    = 0.05 mm                  [PROJ]
  Support condition             = simply supported
  Steel  E = 200 GPa,  ρ = 7850 kg/m³                      [GUIDE]
  Alum.  E =  70 GPa,  ρ = 2700 kg/m³                      [GUIDE]
  Clamp force              F_c  = 800 N                    [PROJ]
  Workpiece surface             = painted aluminium        [PROJ]
  Paint/substrate allowable pressure  = 8 MPa              [EX-ASSUMED]
  Manual handling limit         = 25 kg                    [PRACTICE]

REQUIRED:
  (a) Steel thickness for 0.05 mm deflection
  (b) Steel plate mass
  (c) Aluminium thickness for the same deflection
  (d) Aluminium plate mass
  (e) Handling assessment
  (f) Clamp pad area and diameter to avoid marking
  (g) Recommendation

ASSUMPTION:
  1. Simply supported with a central point load — the worst
     case. A real fixture supported at more points would
     deflect less, so this is conservative.
  2. 400 N central load represents an inspector leaning on the
     fixture. This is an EXAMPLE value; the real load case must
     be established with the customer. [EX-ASSUMED]
  3. Allowable contact pressure of 8 MPa on painted aluminium.
     Paint systems vary enormously; this MUST BE CONFIRMED by
     test on the actual finish. [EX-ASSUMED]
  4. Plate treated as a simple beam of full width. Full plate
     theory would give a modestly different result.
  5. Aluminium 6082-T6 tooling plate assumed.
  6. Mass of locators, clamps and fittings estimated at 40 % of
     plate mass for the handling assessment. [EX-ASSUMED]

FORMULA:
  Deflection, simply supported central load:
      δ = F L³ / (48 E I)
  Rearranged for I:
      I = F L³ / (48 E δ)
  Rectangular section:
      I = b h³ / 12   →   h = (12 I / b)^(1/3)
  Mass:
      m = b × L × h × ρ / 1e9        (kg, dimensions in mm)
  Contact:
      A = F_c / p_allowable
      d = √(4A / π)

VARIABLE DEFINITIONS:
  As tabulated in §12 above.

UNIT CONVERSION:
  E_steel = 200 GPa = 200,000 N/mm²
  E_alum  =  70 GPa =  70,000 N/mm²
  ρ_steel = 7850 kg/m³ = 7.85e-6 kg/mm³
  ρ_alum  = 2700 kg/m³ = 2.70e-6 kg/mm³

SUBSTITUTION AND CALCULATION:

  (a) STEEL THICKNESS

      Required I:
        I = F L³ / (48 E δ)
          = (400 × 700³) / (48 × 200000 × 0.05)
          = (400 × 343,000,000) / (480,000)
          = 137,200,000,000 / 480,000
          = 285,833 mm⁴

      Thickness:
        h = (12 I / b)^(1/3)
          = (12 × 285,833 / 450)^(1/3)
          = (3,429,996 / 450)^(1/3)
          = (7,622.2)^(1/3)
          = 19.68 mm
        → specify 20 mm

  (b) STEEL PLATE MASS (at 20 mm)

      m = 450 × 700 × 20 × 7.85e-6
        = 6,300,000 × 7.85e-6
        = 49.46 kg

  (c) ALUMINIUM THICKNESS

      Required I (E is lower, so I must be higher):
        I = (400 × 343,000,000) / (48 × 70000 × 0.05)
          = 137,200,000,000 / 168,000
          = 816,667 mm⁴

      Thickness:
        h = (12 × 816,667 / 450)^(1/3)
          = (9,800,004 / 450)^(1/3)
          = (21,777.8)^(1/3)
          = 27.92 mm
        → specify 28 mm

  (d) ALUMINIUM PLATE MASS (at 28 mm)

      m = 450 × 700 × 28 × 2.70e-6
        = 8,820,000 × 2.70e-6
        = 23.81 kg

      MASS SAVING = 49.46 − 23.81 = 25.65 kg
      REDUCTION   = 25.65 / 49.46 = 51.9 %

  (e) HANDLING ASSESSMENT

      Including fittings at 40 % of plate mass:
        Steel     total ≈ 49.46 × 1.4 = 69.2 kg
        Aluminium total ≈ 23.81 × 1.4 = 33.3 kg

      Manual handling limit = 25 kg
        Steel     69.2 kg → 2.77 × limit  ✗ hoist required
        Aluminium 33.3 kg → 1.33 × limit  ✗ still over limit,
                            but a TWO-PERSON lift is feasible
                            (16.7 kg each)

  (f) CLAMP PAD SIZE TO AVOID MARKING

      Required contact area:
        A = F_c / p_allowable
          = 800 / 8
          = 100 mm²

      If circular:
        d = √(4A / π)
          = √(400 / 3.1416)
          = √127.32
          = 11.28 mm
        → specify Ø12 mm minimum pad,
          giving A = π × 6² = 113.1 mm²
          and p = 800 / 113.1 = 7.07 MPa   ✓ below 8 MPa

      COMPARISON — a hardened steel pad of Ø6 mm:
        A = π × 3² = 28.27 mm²
        p = 800 / 28.27 = 28.3 MPa
        → 3.5 × the allowable pressure. WOULD MARK THE PART.

RESULT:
  ┌──────────────────────────┬──────────┬─────────────┐
  │                          │  STEEL   │  ALUMINIUM  │
  ├──────────────────────────┼──────────┼─────────────┤
  │ (a)(c) Thickness needed  │  20 mm   │   28 mm     │
  │ (b)(d) Plate mass        │ 49.46 kg │  23.81 kg   │
  │ (e)    Total with fittings│ 69.2 kg │  33.3 kg    │
  │        Handling          │  hoist   │ two-person  │
  │        Mass saving       │    —     │  51.9 %     │
  └──────────────────────────┴──────────┴─────────────┘

  (f) Clamp pad: Ø12 mm acetal minimum → 7.07 MPa  ✓ PASS
      Ø6 mm steel pad → 28.3 MPa  ✗ FAIL, would mark

SAFETY FACTOR:
  Deflection: both designs meet the 0.05 mm limit exactly at the
  specified thicknesses, with the rounding up to 20 and 28 mm
  providing small margins of 4.9 % and 7.5 % respectively on
  the calculated minimum.
  Contact pressure: Ø12 pad gives 7.07 MPa against an 8 MPa
  allowable — a margin of only 1.13. Given that the 8 MPa
  figure is itself an assumption, I would specify Ø16
  (A = 201 mm², p = 3.98 MPa, margin 2.0) for confidence.

PASS/FAIL:
  Steel 20 mm      ✓ meets deflection  ✗ fails handling
  Aluminium 28 mm  ✓ meets deflection  ⚠ two-person lift
  Ø12 acetal pad   ✓ passes marking check, thin margin
  Ø16 acetal pad   ✓ passes with margin 2.0  ← RECOMMENDED
  Ø6 steel pad     ✗ fails by 3.5×

ENGINEERING CONCLUSION:
  THE ALUMINIUM OPTION IS CORRECT, AND THE REASON IS NOT THE
  ONE PEOPLE EXPECT.

  1. ALUMINIUM NEEDED ONLY 40 % MORE THICKNESS FOR HALF THE
     MASS.
     Aluminium's modulus is 2.86× lower than steel's, which
     sounds disqualifying. But because stiffness goes as
     thickness CUBED (L0.3.4), recovering that factor needs only
     2.86^(1/3) = 1.42× the thickness — and since aluminium is
     2.9× lighter, the net result is a plate weighing half as
     much. THE CUBE RULE IS WHAT MAKES LIGHTWEIGHT STRUCTURES
     POSSIBLE, and it is the same relationship that governed
     the support-spacing decision in Part 2.

  2. THE HANDLING ARGUMENT DOMINATES THE COST ARGUMENT.
     A 69 kg steel fixture needs a hoist every time it is used.
     That is slower, needs equipment, and introduces a genuine
     injury risk. At 33 kg the aluminium version is a
     two-person lift — still above the 25 kg single-person
     guideline, so I would go further: adding a lightening
     pocket pattern to the underside could plausibly remove
     another 20 % of the plate mass with modest stiffness loss,
     bringing it close to a one-person lift. That is worth
     engineering effort. Aluminium costs perhaps 2.5× per kg,
     but on 24 kg of material that premium is small against the
     daily handling benefit over a fixture's ten-year life.

  3. THE CLAMP PAD RESULT SHOWS HOW EASILY PARTS GET MARKED.
     A Ø6 steel pad at a very ordinary 800 N clamping force
     produces 28 MPa — three and a half times the allowable
     pressure on the painted surface. Every part clamped would
     carry a witness mark. The fix costs nothing: a Ø16 acetal
     pad instead. THE MARKING PROBLEM IS ALWAYS A DESIGN
     PROBLEM, NEVER AN OPERATOR PROBLEM, and it is solved with
     material choice and contact area, both free at the design
     stage and impossible to retrofit cheaply.

  4. THE STEEL INSERT REQUIREMENT MUST NOT BE FORGOTTEN.
     Choosing aluminium for the plate does NOT mean aluminium
     locators. Every locating surface and every tapped hole in
     this fixture needs a steel insert, or the weight saving
     will be paid for in wear within months.

  RECOMMENDATION: Aluminium 6082-T6 tooling plate, 28 mm, with
  hardened steel locator inserts and steel threaded inserts at
  all fastening points. Ø16 acetal clamp pads. Investigate
  underside pocketing to approach a single-person lift.
  Confirm the 8 MPa paint allowable by test before release.

SENSITIVITY NOTE:
  Ranked by influence on PLATE MASS:
    1. MATERIAL CHOICE — 52 % reduction, the dominant factor
    2. SPAN — if the fixture can be supported at three points
       instead of two, required I falls by 8× (L0.3.4) and the
       plate could be far thinner in EITHER material. THIS IS
       THE BIGGEST UNEXPLORED OPPORTUNITY HERE.
    3. DEFLECTION LIMIT — linear on I. If 0.10 mm were
       acceptable, thickness falls by 2^(1/3) = 1.26×
    4. POCKETING — removes mass from near the neutral axis
       where it contributes least to stiffness
  Ranked by influence on MARKING:
    1. CONTACT AREA — inversely proportional to pressure
    2. CLAMP FORCE — linear
    3. CONTACT MATERIAL — determines whether the pad or the
       part deforms
```

### 14. Engineering assumptions
- Simply supported, central point load — conservative worst case.
- 400 N inspector load `[EX-ASSUMED]` — real load case must be agreed with the customer.
- 8 MPa allowable contact pressure on the painted surface `[EX-ASSUMED]` — must be confirmed by test.
- Plate treated as a simple beam of full width.
- Aluminium 6082-T6 tooling plate assumed.
- Fittings estimated at 40% of plate mass `[EX-ASSUMED]`.
- 25 kg manual handling limit `[PRACTICE]` — local regulations vary.

### 15. Diagram

```
     FIXTURE MATERIALS BY FUNCTION
     (instructional reference)

  THE FUNCTIONAL RULE

     ┌────────────────────────────────────────────────┐
     │  LOCATE ON HARDENED STEEL                      │
     │  CLAMP THROUGH PLASTIC                         │
     │                                                │
     │  Location needs HARDNESS + PRECISION           │
     │  Clamping needs COMPLIANCE + GENTLENESS        │
     │  Different jobs → different materials          │
     └────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  WHY ALUMINIUM WINS ON STIFFNESS PER MASS

     SAME MASS, SAME WIDTH:

     STEEL          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  h = 20 mm   49.5 kg
                    E = 200 GPa

     ALUMINIUM      ░░░░░░░░░░░░░░
                    ░░░░░░░░░░░░░░  h = 28 mm   23.8 kg
                    E = 70 GPa

     E is 2.86× lower  →  need 2.86^(1/3) = 1.42× thickness
     ρ is 2.91× lower  →  net mass HALVED

     ┌──────────────────────────────────────────────┐
     │ THE CUBE RULE (L0.3.4) IS WHAT MAKES         │
     │ LIGHTWEIGHT STRUCTURES POSSIBLE.             │
     │ 40 % more thickness, 52 % less mass.         │
     └──────────────────────────────────────────────┘

     BUT: aluminium needs STEEL INSERTS at
          ► every wear point
          ► every thread
     or the weight saving is paid for in wear.

  ──────────────────────────────────────────────────────────

  THE MARKING PROBLEM — CONTACT PRESSURE DECIDES

     p = F / A          mark if  p > σ_yield(surface)

     800 N CLAMP ON PAINTED ALUMINIUM (allowable 8 MPa)

     Ø6 STEEL PAD                Ø16 ACETAL PAD
        ▼                            ▼
      ══╪══                      ════╪════
     ▒▒▒▒▒▒▒▒▒                  ▒▒▒▒▒▒▒▒▒▒▒
     A = 28.3 mm²               A = 201 mm²
     p = 28.3 MPa               p = 3.98 MPa
     ✗ MARKS  (3.5× over)       ✓ SAFE  (margin 2.0)

     Fix costs nothing at design stage.
     Impossible to retrofit cheaply.

  ──────────────────────────────────────────────────────────

  MATERIAL BY WORKPIECE SURFACE

   WORKPIECE SURFACE        USE THIS CONTACT
   ─────────────────────────────────────────────────
   Raw steel / cast iron  → hardened steel  (fine)
   Machined aluminium     → brass, bronze, acetal
   Painted / coated       → nylon, polyurethane, UHMWPE
   Plated / anodised      → acetal, nylon
   Polished / cosmetic    → UHMWPE, polyurethane
   STAINLESS (cosmetic)   → stainless, plastic, brass
                            ⚠ NEVER CARBON STEEL
                              (iron transfer → rust spots)

  ──────────────────────────────────────────────────────────

  WELDING FIXTURE — THE COPPER RULE

     STEEL BACKING BAR          COPPER BACKING BAR
        weld pool                  weld pool
     ▒▒▒▒▒███▒▒▒▒▒              ▒▒▒▒▒███▒▒▒▒▒
     ═════███═════              ═════▓▓▓═════
       WELDS ITSELF TO            DOES NOT WET
       THE FIXTURE ✗              CONDUCTS HEAT ✓

  ──────────────────────────────────────────────────────────

  BUY, DON'T MAKE

     BUY ►  dowel pins · drill bushes · toggle clamps
            strap clamp kits · rest buttons · springs
            cylinders · ball plungers · standard pins

     MAKE ► base plates · risers · custom profile locators
            special clamp arms

     ┌──────────────────────────────────────────────┐
     │ A BOUGHT DOWEL COSTS ~1/20 OF A MADE ONE     │
     │ AND IS A BETTER PART. If a catalogue item    │
     │ exists and fits — BUY IT.                    │
     └──────────────────────────────────────────────┘
```

### 16. Drawing example
Non-marking contacts must be **called out explicitly**, because a toolroom will otherwise make
everything from steel:

```
┌────────────────────────────────────────────────────────┐
│ PART NAME : CLAMP PAD                    ITEM No. 12   │
│ QTY : 4                                  DWG: F1042-12 │
├────────────────────────────────────────────────────────┤
│ MATERIAL  : ACETAL (POM-C), NATURAL                    │
│ HARDNESS  : NOT APPLICABLE                             │
├────────────────────────────────────────────────────────┤
│ NOTES:                                                 │
│ 1. NON-MARKING CONTACT. WORKPIECE SURFACE IS PAINTED.  │
│    DO NOT SUBSTITUTE WITH METAL.                       │
│ 2. CONTACT FACE Ø16 MIN — DO NOT REDUCE. SIZED FOR     │
│    CONTACT PRESSURE (SEE CALC SHEET F1042-CALC-03).    │
│ 3. REPLACEABLE WEAR ITEM. M6 CSK FIXING.               │
│ 4. GENERAL TOLERANCE ISO 2768-m.                       │
└────────────────────────────────────────────────────────┘
        FOR TRAINING ONLY — NOT FOR MANUFACTURE
```

Notes 1 and 2 exist because both substitutions — metal instead of plastic, and a smaller pad to fit a
tight space — are made routinely by people who do not know why the original choice was made.

### 17. CAD workflow
Build a **standard components library**. Most CAD systems support this directly, and most fixture
component suppliers publish downloadable 3D models.

Recommended practice:
1. Download supplier models for the clamps, bushes, pins and plungers your organisation uses `[MFR]`.
2. Store them in a shared library with correct materials and part numbers assigned.
3. Configure them as **Toolbox / library features** so they insert with the correct mating geometry.
4. Ensure the supplier part number flows into the **BOM** automatically.

This is a one-off investment that pays back on every project — it removes modelling time, removes
transcription errors in the BOM, and makes it obvious to the designer what standard parts are available,
which is itself the main reason people design specials unnecessarily.

For **material assignment**, extend the custom library from L0.5.1 §17 to include acetal, nylon,
aluminium and cast iron with correct densities, so mass properties and the table-load check stay
accurate.

### 18. GD&T application
Not applicable at this lesson. One note: **plastic contacts should generally not carry tight geometric
tolerances**, because the material is compliant, moisture-sensitive and thermally unstable relative to
steel. If you find yourself applying a 0.02 mm profile tolerance to a nylon pad, the design is wrong —
that surface should be steel.

### 19. Manufacturing method

| Material | Manufacturing notes |
|---|---|
| Aluminium | Machines fast, sharp tools, high speeds. Watch built-up edge. Anodise for wear/appearance |
| Cast iron | Machines well dry; **do not use coolant on grey iron** in some processes — check. Dusty |
| Acetal / nylon | Machines easily; **low melting point** — sharp tools, avoid heat. Stress-relieve before finishing |
| UHMWPE | Gummy; needs sharp tools and high rake |
| Copper | Gummy; sharp tools, good chip clearance |
| Brass | Excellent machinability — the reference material |
| Granite | Specialist supplier only. Never machined in-house |

**Plastics have a machining trap worth knowing:** they are poor thermal conductors, so cutting heat
stays in the part and it distorts. Take light finishing cuts, use sharp tools, and where precision
matters, rough-machine, allow the part to stabilise, then finish.

### 20. Inspection method
- Metals: hardness test and material certificate as L0.5.1.
- Plastics: verified by **supplier certificate** and often by simple identification (density, colour,
  markings). Acetal and nylon look similar and behave differently — label stock clearly.
- Non-marking performance is verified by **test**: clamp a scrap part at full force, release, and
  inspect the surface under good light. Do this at commissioning, before production.

That last check takes two minutes and prevents an entire category of customer complaint.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Hardened steel contact on a finished surface** | Every part marked; customer rejection |
| 2 | Contact pad too small | Pressure exceeds surface yield; marking despite soft material |
| 3 | **Carbon steel contacting cosmetic stainless** | Iron transfer, rust spots |
| 4 | Aluminium fixture with aluminium locators | Rapid wear, galling |
| 5 | Aluminium threads without steel inserts | Threads strip after a few assemblies |
| 6 | Plastic used as a precision locator | Compliant, moisture-sensitive location |
| 7 | PTFE or nylon under sustained load | Creep; clamp loses force over time |
| 8 | **Steel weld backing bars** | Fixture welds itself to the workpiece |
| 9 | Making dowels, bushes or clamps | 20× the cost, worse quality |
| 10 | Plastic contacts made integral, not replaceable | Whole component scrapped when the pad wears |
| 11 | Ignoring aluminium's 2× thermal expansion | Double the thermal error |
| 12 | Cast iron used in tension or under impact | Brittle fracture |
| 13 | Fixture over 25 kg with no lifting points | Injury risk; dropped and damaged fixtures |
| 14 | Not checking plastic/coolant chemical compatibility | Swelling, cracking, degradation |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Witness marks on painted parts | Contact too hard or too small | Calculate p = F/A; inspect pad | Larger acetal/PU pad | Contact pressure check at design |
| Rust spots on stainless parts | Carbon steel contact | Identify all contact materials | Replace with stainless/plastic/brass | No carbon steel on stainless |
| Clamp force drops overnight | Plastic pad creeping | Measure force after 24 h | Change to acetal; increase area | Avoid PTFE/nylon under sustained load |
| Aluminium fixture locators worn | No steel inserts | Inspect locating faces | Fit hardened steel inserts | Steel inserts at every wear point |
| Threads stripped in aluminium | No threaded inserts | Inspect the tapped holes | Fit Helicoil/Keensert | Inserts on all repeated joints |
| Fixture welded to workpiece | Steel backing bar | Inspect the backing material | Replace with copper | Copper backing on all weld fixtures |
| Nylon pads changed size | Moisture absorption | Measure over time | Change to acetal | Use acetal where stability matters |
| Fixture dropped and damaged | Too heavy to handle safely | Weigh it | Add lifting points; consider aluminium | Design to handling limits |

### 23. Design checklist
- [ ] Have I identified the **workpiece surface finish** and chosen contacts to suit?
- [ ] Have I calculated **contact pressure** against the surface's allowable?
- [ ] Is there any **carbon steel touching cosmetic stainless**?
- [ ] If aluminium, are there **steel inserts at every wear point and every thread**?
- [ ] Are plastic contacts **replaceable bolted items**, not integral?
- [ ] Have I avoided plastic for **precision locating**?
- [ ] For sustained loads, have I chosen **acetal** rather than nylon or PTFE?
- [ ] For welding fixtures, are backing bars **copper**?
- [ ] Have I checked plastic **chemical compatibility** with coolant and cleaners?
- [ ] Have I **bought** everything that exists as a catalogue part?
- [ ] Is the fixture mass within **handling limits**, or are lifting points provided?
- [ ] Have I considered **aluminium** if the fixture is handled or on a rotary axis?
- [ ] Have I considered **cast iron** if it is large, permanent and vibration-sensitive?
- [ ] Is a **non-marking test** planned at commissioning?

### 24. Beginner exercise
**E0.5.2-B** — For each of the following, state a suitable contact material and give one sentence of
justification.
(a) Locating a raw steel casting
(b) Clamping a powder-coated sheet metal bracket
(c) Clamping a polished stainless steel food-industry component
(d) Supporting a machined aluminium housing on a rest pad
(e) Backing a butt weld on a mild steel tube
(f) A rest pad in a production machining fixture, 200,000 cycles

### 25. Intermediate exercise
**E0.5.2-I** — A clamp applies 1,200 N to an anodised aluminium workpiece. The allowable contact
pressure on the anodised surface is 12 MPa `[EX-ASSUMED]`.
(a) Calculate the minimum contact area required.
(b) Calculate the minimum circular pad diameter, and specify a practical size.
(c) Calculate the actual pressure at your specified size and state the margin.
(d) The existing design uses a Ø8 hardened steel pad. Calculate its pressure and state by what factor
it exceeds the allowable.
(e) Select a suitable pad material and justify it.
(f) State two design features you would add to the pad detail drawing to prevent the correct choice
being undone later.

### 26. Advanced exercise
**E0.5.2-A** — A checking fixture is required for a 900 × 500 mm painted automotive floor panel,
inspected 60 times per shift, lifted onto and off a bench each time. The panel is located by 6 locating
pins in existing holes and supported at 12 points, and 8 clamps hold it down. Positional tolerance on
the checked features is ±0.25 mm.
(i) Select the base plate material and justify it, addressing weight, stiffness and thermal stability.
(ii) The base plate must span 900 mm with supports only at the ends, carrying a 500 N distributed load,
with maximum deflection 0.10 mm. Calculate the required thickness and mass in both steel and aluminium
(δ = 5wL⁴/384EI for UDL).
(iii) Calculate the fixture's total mass in each material assuming fittings add 45%, and assess against
handling limits.
(iv) Specify materials for the locating pins, the support pads and the clamp contacts, justifying each
against the painted finish requirement.
(v) The 6 locating pins go into holes in the painted panel. Explain the specific problem this creates
and propose a solution.
(vi) Calculate the clamp pad diameter needed if each clamp applies 600 N and the allowable pressure on
the paint is 6 MPa `[EX-ASSUMED]`.
(vii) Thermal: the inspection room varies from 18 °C to 26 °C. Calculate the dimensional change over
the 900 mm length for both materials and state the fraction of the ±0.25 mm tolerance each consumes.
(viii) Give a final material recommendation with a written justification suitable for a design review.

### 27. Interview questions
1. *"How do you stop a fixture from marking a painted part?"*
   **Answer:** Two things together — the right material and enough contact area. The contact must be
   softer than the workpiece surface, so acetal, nylon, polyurethane or UHMWPE rather than steel. And
   the contact area must be large enough that pressure stays below the surface's allowable, which you
   check with p = F/A. A common failure is using the right material but too small a pad — a plastic pad
   that is too small will still emboss the paint, and it will also deform itself. I would also make the
   pad a replaceable bolted item rather than an integral feature, add a drawing note saying "do not
   substitute with metal", and do a clamp-and-inspect test on a scrap part at commissioning before
   production starts.
2. *"When would you use aluminium for a fixture?"*
   **Answer:** When weight matters — a checking fixture that gets lifted onto a bench many times a
   shift, a fixture on a rotary or trunnion axis where mass affects machine dynamics, or anything that
   is moved frequently. The counter-intuitive part is that aluminium is not a compromise on stiffness:
   because deflection goes as thickness cubed, you only need about 40% more thickness to match steel's
   stiffness, and you still end up at about half the mass. What you must do is fit hardened steel
   inserts at every wear point and steel threaded inserts at every tapped hole, because aluminium is
   far too soft for locating surfaces and its threads strip. You also get roughly double the thermal
   expansion, so on tight-tolerance work you check that.

### 28. Expert questions
1. *"A customer insists their new fixture must be made entirely from stainless steel because the parts
   are stainless. How do you respond?"*
   **Answer:** I would separate the legitimate concern from the proposed solution, because the concern
   is real and the solution is mostly wrong.
   The genuine issue is **carbon contamination**: iron transferred from carbon steel onto a stainless
   surface will rust, producing brown spots on a part that is supposed to be corrosion-proof. In food,
   pharmaceutical, medical and architectural work this is a real rejection cause, and the customer is
   right to raise it.
   But the requirement only applies to **surfaces that contact the workpiece**. The base plate, the
   risers, the clamp bodies, the fasteners inside the structure — none of those touch the part, and
   making them stainless adds significant cost for no benefit. Stainless is four to six times the
   material cost of mild steel, work-hardens during machining so it costs more to machine, and
   austenitic grades cannot be hardened by heat treatment at all — which is a serious problem, because
   it means my locators would be soft and would wear rapidly. So "all stainless" would actually make
   the fixture **worse** at its primary job.
   My proposal would be: **stainless, plastic or brass at every workpiece contact**, carbon steel
   everywhere else, with hardened martensitic stainless (such as 420 or 440C) for locators where I need
   both corrosion resistance and hardness — those grades can be hardened, unlike the austenitic 304 and
   316. Where a hardened locator must be non-contaminating and 420 is not adequate, acetal or ceramic
   contacts are options.
   I would also address the **process** side, because material choice alone does not solve
   contamination: dedicated stainless-only tooling, no carbon steel swarf in the area, and cleaning
   procedures. A stainless fixture in a workshop full of mild steel dust will still contaminate parts.
   Finally I would offer a **passivation** step and a validation test — build it, run parts, and check
   for rust spots after a controlled exposure. That converts an argument about materials into a
   demonstrable result, which is usually where these conversations should end.
2. *"Your fixture must hold a thin-walled painted aluminium panel flat to 0.2 mm without marking it.
   Talk me through the material and design thinking."*
   **Answer:** This combines three requirements that pull against each other, and the interesting part
   is that they cannot all be solved by material choice alone.
   The **conflict** is this: holding a thin panel flat needs enough force to overcome its natural
   distortion, but marking is a function of contact pressure, and painted aluminium has a very low
   allowable. More force means more pressure means marking. And a thin panel is compliant, so clamping
   it hard at a few points just makes it bulge somewhere else.
   The resolution is to **change the geometry of the problem rather than fight it**. Instead of high
   force at few points, use **low force at many points**. Doubling the number of supports and clamps
   halves the force each carries, which halves the pressure, and simultaneously reduces the unsupported
   span so the panel needs less force to stay flat in the first place. That is the dominant move, and
   it comes straight from the span relationship in L0.3.4.
   For **materials**: contacts in UHMWPE or polyurethane, which are soft and forgiving. I would use
   **large-area pads**, not points — a 30 mm diameter pad rather than a 10 mm one drops pressure by a
   factor of nine. For the most sensitive surfaces, a **compliant faced pad** — polyurethane bonded to
   a steel backing — spreads load and conforms to slight surface variation, which both reduces peak
   pressure and improves flatness control.
   I would consider **vacuum** seriously. Vacuum holding distributes force over the entire panel area
   rather than concentrating it, which is close to ideal for this problem: essentially zero marking
   risk and excellent flatness. The limitations are that it needs a sealed surface, it will not resist
   large lateral forces, and it fails if the vacuum does — so it needs a sensor interlock (Poka-Yoke,
   L28).
   On **supports**, I would use adjustable or self-levelling supports set to the panel's nominal form
   rather than fixed ones, because a fixed support that is 0.3 mm proud will locally deform a thin
   panel and there is nothing the clamping can do about it. For a really critical application,
   **hydraulic work supports** that advance to touch and then lock give support without imposing
   deflection — they touch the panel where it naturally sits rather than pushing it.
   Finally, **sequence**: clamping order matters enormously on thin parts. Clamping from the centre
   outward lets distortion escape to the edges; clamping the edges first traps it. I would specify the
   clamping sequence in the operating instruction and, if the tolerance is critical, enforce it with
   sequenced pneumatics rather than trusting the operator.
   And I would **measure it**, because thin-panel behaviour is genuinely hard to predict. Build,
   measure the panel in the fixture with a CMM or scanner, adjust the support positions, and iterate.
   Anyone who claims to have calculated this exactly on a compliant panel is overstating what analysis
   can do.

### 29. Summary
Fixture material selection extends well beyond steel. Cast iron offers vibration damping five to ten
times better than steel and long-term stability, suiting large permanent bases, but is brittle and not
weldable. Aluminium is the correct choice whenever weight matters, and the reason is the cube rule:
because deflection scales with thickness cubed, aluminium needs only about 40% more thickness to match
steel's stiffness and still comes out at roughly half the mass — but it demands hardened steel inserts
at every wear point and steel threaded inserts at every tapped hole. The non-marking problem is
governed by contact pressure, p = F/A: the contact must be softer than the workpiece surface and large
enough to keep pressure below its yield, with the worked example showing an ordinary 800 N clamp on a
Ø6 steel pad producing three and a half times the allowable pressure on paint. Carbon steel must never
contact cosmetic stainless, copper rather than steel must back welds, and acetal is the default
engineering plastic because it creeps and absorbs moisture far less than nylon or PTFE. Underlying all
of it is one organising principle — locate on hardened steel, clamp through plastic — and one
commercial rule: if a catalogue part exists and fits, buy it.

### 30. Key takeaways
- **Locate on hardened steel; clamp through plastic.** Different functions, different materials.
- **Aluminium: ~40% more thickness, ~50% less mass** — the cube rule makes lightweight structures work.
- Aluminium needs **steel inserts at every wear point and every thread**. Non-negotiable.
- **Marking is a contact pressure problem**: `p = F/A`. Soft material *and* adequate area.
- **Never contact cosmetic stainless with carbon steel** — iron transfer causes rust spots.
- **Copper backing bars** for welding; steel welds itself to the work.
- **Acetal** is the default engineering plastic — nylon absorbs moisture, PTFE creeps.
- Plastic contacts are **replaceable bolted wear items**, never integral features.
- **Cast iron** damps vibration 5–10× steel `[GUIDE]` — consider it for large permanent bases.
- **Buy dowels, bushes, clamps, springs and cylinders.** Making them costs ~20× and gives a worse part.
- Keep handled fixtures under about **20–25 kg** or design in lifting points `[PRACTICE]`.

---

## LESSON L0.5.3 — HEAT TREATMENT

### 1. Lesson title
**L0.5.3 — Hardening, tempering, case hardening, nitriding and stress relief: what to specify and why**

### 2. Learning objective
By the end of this lesson you will be able to explain what each heat treatment process does to a steel,
select the correct treatment for a given fixture component, specify it completely on a drawing, predict
and allow for distortion, and sequence manufacturing operations correctly around heat treatment.

### 3. Prerequisites
L0.5.1 (steel classification, carbon content), L0.3.2 (stress, strength).

### 4. Why the topic matters
Heat treatment is where a locator becomes a locator. An EN31 rest pad in its as-supplied annealed state
is about 200 HB — soft enough to indent with a centre punch. The same part hardened and tempered is
60 HRC and will outlast the fixture. Same steel, same geometry, entirely different component.

But heat treatment also **moves the part**. It distorts, it grows or shrinks, it can crack, and it
leaves a decarburised skin that must be removed. Every one of those is predictable and manageable, and
every one of them ruins parts when it is not planned for. The manufacturing sequence around heat
treatment — machine soft, harden, then grind — is not a preference, it is a requirement.

Finally, this is an area where an incomplete drawing specification produces genuinely variable parts.
"Harden" is not an instruction. The heat treater needs the material, the process, the target hardness
range, and often the case depth.

### 5. Simple explanation
Heat treatment is heating steel and cooling it in a controlled way to change how hard it is.

- **Hardening** — heat it red hot, then cool it fast (quench). It becomes very hard, but also brittle
  and full of internal stress.
- **Tempering** — reheat it gently afterwards. This removes some hardness but makes it much less
  brittle. **Hardening is almost never done without tempering.**
- **Case hardening** — add carbon to just the outside of a low-carbon steel, then harden it. You get a
  hard skin over a tough core.
- **Nitriding** — a lower-temperature process that makes a very hard, thin surface with almost no
  distortion.
- **Annealing / normalising** — heat and cool slowly to make it soft and even, usually before machining.
- **Stress relieving** — a gentle heat cycle to release internal stresses so the part does not move
  later.

The important practical points: hardened parts change shape a little, so you machine them soft, harden
them, then grind them to final size.

### 6. Engineering explanation

**WHY STEEL HARDENS**

At room temperature, carbon steel's iron is in a body-centred cubic structure (ferrite) that dissolves
very little carbon. Heated above the transformation temperature (roughly 723–900 °C depending on carbon
content), it becomes face-centred cubic (austenite), which dissolves carbon readily.

If cooled **slowly**, the carbon comes back out as pearlite — soft. If cooled **fast enough**, the
carbon is trapped in a distorted structure called **martensite** — very hard and very brittle.

Three consequences follow, and all three matter to a fixture designer:
1. **You need carbon.** No carbon in solution, no martensite. This is why steel below ~0.30% C cannot
   be through-hardened `[GUIDE]`.
2. **You need speed.** The quench must be fast enough. Thick sections cool slowly in the middle, so the
   core may not harden — this is **hardenability**, and it is what alloying elements improve.
3. **Martensite is stressed.** The transformation involves a volume increase, which is why hardened
   parts distort and can crack, and why tempering is essential.

**THE PROCESSES**

**1. HARDENING (quench hardening)**

| | |
|---|---|
| What | Heat to austenitising temperature, hold, quench in oil/water/air/polymer |
| Applies to | Steels above ~0.30% C |
| Result | Maximum hardness, maximum brittleness, high internal stress |
| Distortion | Significant |
| **Always followed by** | **TEMPERING** |

Quench medium matters: water is fastest (and most likely to crack), oil is the general choice, air is
slowest and used for air-hardening tool steels, polymer quenchants sit between water and oil. The steel
grade determines what is appropriate — this is the heat treater's decision, not yours, but you should
know it affects distortion.

**2. TEMPERING**

| | |
|---|---|
| What | Reheat below the transformation temperature (typically 150–650 °C), hold, cool |
| Purpose | Reduce brittleness, relieve quenching stress, set final hardness |
| Effect | **Lower tempering temperature → higher hardness, lower toughness** |
| Always | Performed after hardening. A quenched, untempered part is a crack waiting to happen |

Indicative tempering relationship `[GUIDE]`:

| Tempering temperature | Approximate result on medium carbon steel |
|---|---|
| 150–200 °C | 58–62 HRC — maximum hardness, minimum toughness |
| 200–300 °C | 52–58 HRC |
| 300–450 °C | 45–52 HRC |
| 450–550 °C | 38–45 HRC |
| 550–650 °C | 28–38 HRC — maximum toughness of the H&T range |

> **"Hardened and tempered" (H&T) to a stated hardness** is the normal specification for loaded fixture
> components. You state the hardness you want; the heat treater chooses the tempering temperature.

**3. CASE HARDENING (carburising)**

| | |
|---|---|
| What | Diffuse carbon into the surface at 880–950 °C, then harden |
| Applies to | **Low-carbon steels** (below 0.25% C) — EN36, 16MnCr5, EN353 |
| Result | Hard case (58–62 HRC) over a **tough, ductile core** |
| Case depth | Typically **0.5–1.5 mm** `[GUIDE]`; deeper is possible but slow |
| Distortion | **Significant** — long cycle at high temperature |
| Best for | Impact-loaded wear parts needing a tough core |

The case depth must be **specified on the drawing**, because it is the variable the heat treater
controls by time:
```
CASE HARDEN. EFFECTIVE CASE DEPTH 0.8-1.2 mm AT 550 HV1.
CASE HARDNESS 58-62 HRC. CORE HARDNESS 30-40 HRC.
```
"Effective case depth" is conventionally defined as the depth to a stated hardness — 550 HV is the
usual convention `[STD]`. Without that definition the number is ambiguous.

> **The case-hardening trap:** you cannot grind through the case. If the case is 0.8 mm and you remove
> 0.9 mm in grinding, you have a soft part that looks fine. Allow grinding stock **before** hardening
> and specify case depth accordingly.

**4. NITRIDING**

| | |
|---|---|
| What | Diffuse nitrogen into the surface at 500–550 °C |
| Applies to | Nitriding steels (EN41B / 41CrAlMo7), and many alloy steels |
| Result | Extremely hard thin case — **up to 1000–1200 HV** `[GUIDE]` |
| Case depth | **0.2–0.6 mm** typical `[GUIDE]` — much thinner than carburising |
| Distortion | **Very low** — the process is below the transformation temperature |
| Bonus | Good corrosion resistance and fatigue strength improvement |
| Cost | Higher; longer cycle |

> **Nitriding is the answer when distortion is unacceptable.** Because it runs below the transformation
> temperature, no phase change occurs and the part barely moves. For a precision locator that has
> already been ground to size, nitriding can be applied as a final operation. That is not possible with
> conventional hardening.

**5. INDUCTION / FLAME HARDENING**

| | |
|---|---|
| What | Locally heat the surface rapidly and quench |
| Applies to | Medium/high carbon and alloy steels |
| Result | Hard surface layer, unhardened core, **selective areas only** |
| Depth | 1–5 mm typical `[GUIDE]` |
| Distortion | Localised; less overall than through-hardening |
| Best for | Hardening one face of a large component |

Useful when only a wear face needs hardness and through-hardening a large part would be wasteful or
distorting.

**6. ANNEALING**

| | |
|---|---|
| What | Heat and cool very slowly in the furnace |
| Purpose | Maximum softness, maximum machinability, remove all prior stress |
| When | Before machining hard-supplied material; after welding on some grades |

**7. NORMALISING**

| | |
|---|---|
| What | Heat above transformation, cool in **still air** |
| Purpose | Refine grain structure, uniform properties, moderate stress relief |
| When | Standard supply condition for many carbon steels; after forging or rough machining |

**8. STRESS RELIEVING**

| | |
|---|---|
| What | Heat to 550–650 °C (below transformation), hold, slow cool |
| Purpose | Release internal stress **without changing hardness** |
| When | **After welding**, after heavy rough machining, before final machining |
| Critical for | **Welded fixture bases and large machined plates** |

> **This is the most under-specified treatment in fixture work.** A welded steel fixture base contains
> substantial locked-in stress from welding. Machine it flat and it will move — over days, weeks, or
> the first time it gets warm. The result is a fixture that was flat at inspection and is not flat six
> months later, producing a drift nobody can explain.
>
> **Always stress relieve a welded fixture base between rough machining and finish machining**
> `[PRACTICE]`. It is a cheap operation that prevents an expensive, invisible failure mode.

**DISTORTION — PREDICTING AND MANAGING IT**

Distortion during heat treatment comes from three sources:
1. **Thermal gradients** during heating and quenching — the outside changes temperature before the
   inside
2. **Phase transformation** — martensite occupies about 4% more volume than austenite `[GUIDE]`, and
   the transformation does not happen everywhere at once
3. **Release of prior residual stress** from machining, rolling or welding

Design measures that reduce distortion:

| Measure | Why |
|---|---|
| **Uniform section thickness** | Reduces thermal gradient differences |
| Avoid sharp internal corners | Stress concentrators; crack initiation sites |
| Avoid thin sections next to thick | Different cooling rates, differential stress |
| Symmetrical geometry | Distortion cancels rather than accumulates |
| **Stress relieve before hardening** | Removes the machining stress that would otherwise be released |
| Generous radii on all internal corners | Fewer crack sites |
| Avoid blind holes near the surface | Quench cracking risk |
| **Allow grinding stock** | The universal remedy |

**Typical grinding allowance** `[PRACTICE] — confirm with your heat treater:`

| Part size | Allowance per surface |
|---|---|
| Small (< 50 mm) | 0.2 – 0.3 mm |
| Medium (50–200 mm) | 0.3 – 0.5 mm |
| Large (> 200 mm) | 0.5 – 1.0 mm |
| Long/slender parts | More, plus consider straightening |

**DECARBURISATION**

Heating steel in air burns carbon out of the surface, leaving a soft skin typically **0.1–0.5 mm** deep
`[GUIDE]`. Consequences:
- The surface is **softer than specified** — a hardness test on the as-treated surface may read low
- The skin must be **removed by grinding**, which is another reason for grinding stock
- Controlled-atmosphere or vacuum furnaces largely prevent it, at higher cost

> If a hardened part tests soft, decarburisation is the first thing to check — test again after
> grinding 0.3 mm off.

**THE MANUFACTURING SEQUENCE**

This sequence is not optional:

```
1. OBTAIN MATERIAL         (annealed or normalised)
2. ROUGH MACHINE           (leave grinding stock)
3. STRESS RELIEVE          (if welded or heavily machined)
4. SEMI-FINISH MACHINE     (still leaving grinding stock)
5. HEAT TREAT              (harden + temper, or case harden)
6. STRAIGHTEN              (if required, slender parts)
7. GRIND TO FINAL SIZE     (removes distortion + decarb skin)
8. INSPECT                 (dimensions AND hardness)
9. SURFACE TREATMENT       (if specified — L0.5.5)
```

Steps that get skipped and the result:
- Skip 3 → the part moves in service
- Skip the grinding stock at 2/4 → the part is undersize after 7
- Skip 7 → soft decarburised surface, distorted dimensions
- Skip the hardness check at 8 → you find out in service

**WHAT TO WRITE ON THE DRAWING**

| Treatment | Complete specification |
|---|---|
| Through hardening | `HARDEN AND TEMPER TO 58-62 HRC` |
| Moderate H&T | `HARDEN AND TEMPER TO 40-45 HRC` |
| Case hardening | `CASE HARDEN. EFFECTIVE CASE DEPTH 0.8-1.2 mm AT 550 HV1. CASE 58-62 HRC. CORE 30-40 HRC.` |
| Nitriding | `NITRIDE. CASE DEPTH 0.3-0.4 mm. SURFACE HARDNESS 900 HV MIN.` |
| Induction | `INDUCTION HARDEN SURFACE A ONLY. DEPTH 2-3 mm. 55-60 HRC.` |
| Stress relief | `STRESS RELIEVE AT 600°C AFTER WELDING, BEFORE FINISH MACHINING.` |
| Normalising | `SUPPLY NORMALISED.` |

Always add, where relevant:
```
GRIND ALL DIMENSIONED SURFACES AFTER HEAT TREATMENT.
HARDNESS TEST CERTIFICATE REQUIRED.
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Austenite** | High-temperature FCC phase that dissolves carbon |
| **Martensite** | Hard, brittle phase formed by rapid quenching |
| **Pearlite** | Soft layered structure from slow cooling |
| **Quenching** | Rapid cooling in oil, water, polymer or air |
| **Tempering** | Reheating after quenching to reduce brittleness |
| **Hardenability** | Depth to which hardness can be achieved (not the hardness itself) |
| **Carburising** | Diffusing carbon into the surface |
| **Nitriding** | Diffusing nitrogen into the surface at low temperature |
| **Case** | The hardened surface layer |
| **Core** | The unhardened interior |
| **Effective case depth** | Depth to a defined hardness, conventionally 550 HV `[STD]` |
| **Decarburisation** | Loss of surface carbon during heating, leaving a soft skin |
| **Annealing** | Slow cooling for maximum softness |
| **Normalising** | Air cooling for uniform refined structure |
| **Stress relieving** | Sub-critical heating to release internal stress |
| **Quench crack** | Fracture caused by quenching stresses |
| **H&T** | Hardened and tempered |

### 8. Principle

> **HARDENING WITHOUT TEMPERING IS A CRACK WAITING TO HAPPEN.**
> **You cannot harden steel that has no carbon** — below ~0.30% C, case harden instead.
> **Heat treatment moves the part.** Machine soft → heat treat → grind to size. Always allow grinding
> stock, and always remove the decarburised skin.
> **Stress relieve every welded fixture base** between rough and finish machining, or it will move in
> service and nobody will know why.
> **Nitriding is the low-distortion option** — it runs below the transformation temperature.

### 9. Industrial application

**Selecting the treatment — a decision tree**

```
Does the part need a hard surface?
│
├─ NO ──► Is it welded or heavily machined?
│         ├─ YES ──► STRESS RELIEVE
│         └─ NO  ──► Supply NORMALISED
│
└─ YES ─► What is the carbon content?
          │
          ├─ Below 0.30 % ──► CASE HARDEN (carburise)
          │                   tough core + hard case
          │
          └─ Above 0.30 % ──► Is distortion acceptable?
                              │
                              ├─ YES ─► HARDEN AND TEMPER
                              │         (then grind)
                              │
                              └─ NO ──► Is the part already
                                        finished to size?
                                        ├─ YES ─► NITRIDE
                                        └─ NO ──► H&T then grind
                                        
          Only ONE FACE needs hardness, part is large?
                              └──────► INDUCTION HARDEN
```

**The three treatments that cover most fixture work** `[PRACTICE]`

| Component | Treatment | Typical specification |
|---|---|---|
| Locators, rest pads (EN31) | Harden and temper | 58–62 HRC, ground after |
| Loaded pins (EN19) | Harden and temper | 40–45 HRC |
| Welded fixture base | Stress relieve | 600 °C after welding, before finish machining |

Everything else is a special case. If you know these three, you can specify the heat treatment for the
great majority of fixture components correctly.

**The hardness–toughness trade-off in practice**

A locating pin that keeps breaking is almost always specified too hard. The instinct is "harder is
better", and for a rest pad in pure compression it broadly is. But for anything slender, or anything
that sees impact or bending, hardness buys wear resistance at the cost of the ability to absorb energy.

```
HARDNESS ────────────────────────────────► 
30 HRC        45 HRC        55 HRC       62 HRC
tough         balanced      hard         very hard
bends         general       wear         maximum wear
              purpose       parts        resistance
◄──────────────────────────────────── TOUGHNESS
```

A useful default `[PRACTICE]`:
- **Pure compression, no impact** (rest pads, wear plates) → 58–62 HRC
- **Bending or shear loads** (pins, arms, shafts) → 40–48 HRC
- **Impact loading** → case harden for a tough core, or 35–42 HRC through-hardened

### 10. Design rules
- **R1** — Never specify hardening without **tempering**.
- **R2** — Never specify through-hardening on steel below about **0.30% carbon** — specify case
  hardening.
- **R3** — Specify hardness as a **range**, never a single value.
- **R4** — For case hardening, specify **effective case depth at a defined hardness**, plus case and
  core hardness.
- **R5** — **Allow grinding stock** on every surface that is dimensioned after heat treatment.
- **R6** — **Stress relieve every welded base** between rough and finish machining `[PRACTICE]`.
- **R7** — Sequence: rough machine → stress relieve → semi-finish → heat treat → grind → inspect.
- **R8** — Design for **uniform sections** and generous internal radii to reduce distortion and
  cracking.
- **R9** — Use **nitriding** where distortion must be minimal or the part is already finished.
- **R10** — Use **induction hardening** where only one face of a large part needs hardness.
- **R11** — Match hardness to loading: **hard for compression, tougher for bending and impact**.
- **R12** — Require a **hardness test certificate** on all heat-treated fixture components `[PRACTICE]`.
- **R13** — Note on the drawing that **dimensioned surfaces are ground after heat treatment**.

### 11. Rules of thumb
- Below **0.30% C** → cannot through-harden `[GUIDE]`.
- **Lower tempering temperature = higher hardness, lower toughness.**
- Carburised case depth typically **0.5–1.5 mm**; nitrided case **0.2–0.6 mm** `[GUIDE]`.
- Effective case depth is conventionally measured to **550 HV** `[STD]`.
- Decarburised skin is typically **0.1–0.5 mm** — grind it off `[GUIDE]`.
- Grinding allowance: **0.2–0.3 mm** small parts, **0.5–1.0 mm** large `[PRACTICE]`.
- Martensite is about **4% larger in volume** than austenite — hence distortion `[GUIDE]`.
- **Nitriding barely distorts** because it is below the transformation temperature.
- Rest pads 58–62 HRC; loaded pins 40–45 HRC; that covers most fixture parts `[PRACTICE]`.
- If a hardened part tests soft, **check for decarburisation first**.

### 12. Formulae

Heat treatment is specified, not calculated, by the fixture designer. Two useful relationships:

**Approximate maximum attainable hardness from carbon content** `[GUIDE — indicative only]`
```
HRC_max ≈ 30 + 50 × %C          (for fully martensitic structure, %C up to ~0.6)
```
For 0.45% C: 30 + 50(0.45) = 52.5 HRC. For 0.8% C: 30 + 50(0.8) = 70, but in practice hardness plateaus
around 65 HRC — the relationship is only useful up to about 0.6% C.

**Grinding stock check**
```
Stock allowed  ≥  distortion + decarburisation depth + finish allowance
```
And critically, for case-hardened parts:
```
Effective case depth  >  grinding stock removed  +  required remaining case
```

**Volume change on transformation** `[GUIDE]`
```
ΔV/V ≈ +4 %  austenite → martensite
```

| Variable | Meaning | Unit |
|---|---|---|
| HRC | Rockwell C hardness | — |
| %C | Carbon content | % |
| ΔV/V | Volumetric strain | — |

### 13. Worked numerical example

**Problem:** Three fixture components require heat treatment. For each, select the treatment, write the
drawing specification, determine the grinding stock, and verify the specification is achievable.

```
GIVEN:
  Component A : Rest pad, EN31/100Cr6, 50 × 50 × 25 mm.
                Workpiece lands on it. Pure compression.
                Locating face ground to ±0.01 mm.          [PROJ]
  Component B : Locating pin, EN19/42CrMo4, Ø20 × 70 mm.
                Side load 3 kN, bending. Part slides on.   [PROJ]
  Component C : Welded mild steel base, 800 × 500 mm,
                fabricated from 20 mm plate, top face
                machined flat to 0.05 mm.                  [PROJ]
  Small-part grinding allowance   = 0.2-0.3 mm             [PRACTICE]
  Medium-part grinding allowance  = 0.3-0.5 mm             [PRACTICE]
  Decarburisation depth (air furnace) = 0.1-0.5 mm         [GUIDE]
  Max hardness relation: HRC ≈ 30 + 50 × %C                [GUIDE]
  EN31 carbon = 1.00 %,  EN19 carbon = 0.40 %,
  mild steel carbon = 0.20 %                               [GUIDE]

REQUIRED:
  (a) Treatment selection for each, with justification
  (b) Achievability check against carbon content
  (c) Grinding stock determination
  (d) Complete drawing specifications
  (e) Manufacturing sequence for each
  (f) Engineering assessment

ASSUMPTION:
  1. Air-atmosphere furnace assumed, so decarburisation must
     be allowed for. A controlled-atmosphere or vacuum furnace
     would largely eliminate it at higher cost. [GUIDE]
  2. Grinding allowances from general practice; the actual
     values MUST BE CONFIRMED with the heat treater, who knows
     their equipment's distortion behaviour. [PRACTICE]
  3. The HRC ≈ 30 + 50 × %C relationship is indicative only and
     plateaus above about 0.6 % C. Used here as a feasibility
     check, not a design value. [GUIDE]
  4. Component C is not hardened — only stress relieved.
  5. Distortion magnitudes are not calculated (they are not
     reliably calculable); grinding stock is specified from
     practice instead.

FORMULA:
  (b) HRC_max ≈ 30 + 50 × %C
  (c) Stock ≥ distortion + decarburisation + finish allowance

VARIABLE DEFINITIONS:
  As tabulated in §12 above.

UNIT CONVERSION:
  None required — all values in mm and HRC.

SUBSTITUTION AND CALCULATION:

  (a) TREATMENT SELECTION

  COMPONENT A — REST PAD, EN31
    Needs hard surface?     YES — workpiece lands on it
    Carbon content?         1.00 % — well above 0.30 %
    Loading?                PURE COMPRESSION, no bending
    Distortion acceptable?  YES — it will be ground after
    → HARDEN AND TEMPER to maximum practical hardness.
      Pure compression means toughness is not the constraint,
      so specify the hard end of the range: 58-62 HRC.

  COMPONENT B — LOCATING PIN, EN19
    Needs hard surface?     YES — part slides onto it
    Carbon content?         0.40 % — above 0.30 %, hardenable
    Loading?                3 kN SIDE LOAD = BENDING
    → HARDEN AND TEMPER, but NOT to maximum hardness.
      A Ø20 pin in bending needs toughness. Specify
      40-45 HRC — the standard compromise for loaded pins.
      NOTE: EN31 at 60 HRC would wear better but risks
      brittle fracture under the side load. This is the
      hardness-toughness trade-off in a concrete case.

  COMPONENT C — WELDED BASE, MILD STEEL
    Needs hard surface?     NO — structural only
    Welded?                 YES
    Heavily machined?       YES — top face machined flat
    → STRESS RELIEVE. Do NOT harden (0.20 % C could not
      through-harden anyway).
      This is the treatment most often omitted, and the
      consequence — a base that goes out of flat months
      later — is exactly what a 0.05 mm flatness requirement
      cannot tolerate.

  (b) ACHIEVABILITY CHECK

  COMPONENT A — EN31, 1.00 % C
    HRC_max ≈ 30 + 50 × 1.00 = 80
    Relationship plateaus ~65 HRC in practice.
    Specified 58-62 HRC.
    → ACHIEVABLE with comfortable margin ✓

  COMPONENT B — EN19, 0.40 % C
    HRC_max ≈ 30 + 50 × 0.40 = 50 HRC
    Specified 40-45 HRC.
    → ACHIEVABLE ✓  (and note that specifying 58-62 HRC on
      EN19 would NOT be achievable — the carbon is not there.
      This check catches that class of error.)

  COMPONENT C — MILD STEEL, 0.20 % C
    HRC_max ≈ 30 + 50 × 0.20 = 40 HRC
    But 0.20 % C is BELOW the 0.30 % through-hardening
    threshold, so the relationship does not apply — the
    quench simply will not produce useful martensite.
    → Hardening NOT SPECIFIED. Correct decision. ✓

  (c) GRINDING STOCK

  COMPONENT A — 50 mm, small/medium part
    Distortion allowance          ≈ 0.15 mm
    Decarburisation (worst case)  ≈ 0.30 mm
    Finish grinding allowance     ≈ 0.05 mm
    ────────────────────────────────────────
    TOTAL required                ≈ 0.50 mm
    → Specify 0.5 mm stock on the locating face.
      Machine soft to 25.5 mm; grind to 25.0 mm.

  COMPONENT B — Ø20 × 70, slender
    Distortion allowance          ≈ 0.20 mm on diameter
    Decarburisation               ≈ 0.30 mm on diameter
    Finish allowance              ≈ 0.05 mm
    ────────────────────────────────────────
    TOTAL on diameter             ≈ 0.55 mm
    → Specify 0.6 mm stock on diameter.
      Turn soft to Ø20.6; grind to Ø20.0 h6.
      Slender part — check straightness after hardening,
      straighten if required BEFORE grinding.

  COMPONENT C — welded base
    No hardening, so no decarburisation to remove.
    But stress relief WILL cause movement as locked-in
    weld stress is released.
    → Rough machine top face leaving 2-3 mm
      Stress relieve at 600 °C
      Finish machine to final flatness
    The 2-3 mm is far more than a grinding allowance because
    weld stress release causes millimetre-scale movement on
    a fabrication this size, not micron-scale.

  (d) DRAWING SPECIFICATIONS

  COMPONENT A — REST PAD
    MATERIAL  : 100Cr6 TO EN ISO 683-17 (EN31 EQUIV)
    TREATMENT : HARDEN AND TEMPER TO 58-62 HRC
    NOTES     : 1. LEAVE 0.5 mm GRINDING STOCK ON FACE 'A'
                   BEFORE HEAT TREATMENT.
                2. GRIND FACE 'A' AFTER HEAT TREATMENT.
                3. HARDNESS TEST CERTIFICATE REQUIRED.

  COMPONENT B — LOCATING PIN
    MATERIAL  : 42CrMo4 TO EN 10083-3 (EN19 EQUIV)
    TREATMENT : HARDEN AND TEMPER TO 40-45 HRC
    NOTES     : 1. LEAVE 0.6 mm STOCK ON DIAMETER BEFORE
                   HEAT TREATMENT.
                2. CHECK STRAIGHTNESS AFTER HEAT TREATMENT;
                   STRAIGHTEN IF REQUIRED BEFORE GRINDING.
                3. GRIND DIAMETER TO Ø20 h6 AFTER HEAT
                   TREATMENT.
                4. HARDNESS TEST CERTIFICATE REQUIRED.

  COMPONENT C — WELDED BASE
    MATERIAL  : S275JR TO EN 10025-2
    TREATMENT : STRESS RELIEVE AT 600°C FOR 1 HOUR PER 25 mm
                SECTION, FURNACE COOL.
    NOTES     : 1. STRESS RELIEVE AFTER WELDING AND ROUGH
                   MACHINING, BEFORE FINISH MACHINING.
                2. ROUGH MACHINE LEAVING 2-3 mm ON TOP FACE.
                3. FINISH MACHINE TOP FACE FLAT WITHIN 0.05 mm
                   AFTER STRESS RELIEF.

  (e) MANUFACTURING SEQUENCES

  A: cut → machine soft (+0.5 mm) → harden & temper
     → grind face A → hardness test → inspect

  B: cut → turn soft (Ø20.6) → harden & temper
     → check straightness → straighten if needed
     → grind Ø20 h6 → hardness test → inspect

  C: cut plate → weld fabrication → rough machine (+2-3 mm)
     → STRESS RELIEVE 600 °C → finish machine flat
     → inspect flatness

RESULT:
  ┌──────┬────────────────────┬───────────┬──────────────┐
  │ Item │ Treatment          │ Hardness  │ Stock allowed│
  ├──────┼────────────────────┼───────────┼──────────────┤
  │  A   │ Harden and temper  │ 58-62 HRC │ 0.5 mm face  │
  │  B   │ Harden and temper  │ 40-45 HRC │ 0.6 mm dia   │
  │  C   │ Stress relieve     │ n/a       │ 2-3 mm face  │
  └──────┴────────────────────┴───────────┴──────────────┘
  All three specifications verified achievable against
  carbon content.

SAFETY FACTOR:
  Not a strength calculation. The equivalent concept applied
  here is the HARDNESS RANGE (rather than a single value),
  which gives the heat treater an achievable window, and the
  GRINDING STOCK, which is a distortion margin. Both are
  deliberately generous: under-specifying stock produces scrap
  parts, while over-specifying costs only a little grinding
  time.

PASS/FAIL:
  A ✓ Specification achievable and appropriate
  B ✓ Specification achievable; hardness correctly reduced
      for bending load
  C ✓ Correct treatment; hardening correctly NOT specified

ENGINEERING CONCLUSION:
  THREE COMPONENTS, THREE DIFFERENT TREATMENTS, AND EACH
  DECISION FOLLOWED FROM THE LOADING AND THE CARBON CONTENT.

  1. COMPONENT B IS THE ONE THAT SEPARATES ENGINEERS FROM
     SPECIFIERS.
     The instinct is that a locating pin should be as hard as
     possible, because parts slide onto it and it wears. But
     it carries a 3 kN side load in bending, and a Ø20 pin at
     60 HRC is a brittle pin. At 40-45 HRC it still resists
     wear well and it will bend rather than snap if something
     goes wrong. A worn pin is a maintenance item; a snapped
     pin inside a workpiece hole is a crashed machine.
     HARDNESS IS NOT A VIRTUE IN ITSELF. IT IS A PROPERTY TO
     BE MATCHED TO THE LOADING.

  2. COMPONENT C IS THE ONE MOST OFTEN GOT WRONG.
     Stress relief is invisible on the finished part, costs
     little, and is routinely omitted because nothing appears
     to go wrong. The failure mode is delayed: a welded base
     machined flat to 0.05 mm without stress relief will
     release its weld stress over the following weeks and
     months and go out of flat. The fixture passes inspection,
     goes into production, and drifts. Nobody connects the
     scrap six months later to a missing furnace cycle at the
     start.
     THE 2-3 mm ROUGH MACHINING ALLOWANCE IS ALSO NOTABLE —
     an order of magnitude more than a grinding allowance,
     because weld stress release moves a fabrication of this
     size by millimetres, not microns.

  3. THE ACHIEVABILITY CHECK CATCHES A COMMON ERROR CHEAPLY.
     Running HRC ≈ 30 + 50 × %C takes ten seconds and would
     have caught a specification of "58-62 HRC" on EN19, which
     has only 0.40 % carbon and tops out around 50 HRC. That
     drawing would have gone to the heat treater, who would
     either have queried it (delay) or done their best and
     certified something lower (a part that does not meet its
     own drawing). Checking feasibility against carbon content
     before releasing the drawing is free.

  4. GRINDING STOCK IS NOT OPTIONAL AND IS OFTEN
     UNDERESTIMATED.
     For component A, decarburisation alone can account for
     0.3 mm — more than many people allow in total. A part
     machined to final size before hardening comes back
     distorted, oversize in some places, and with a soft skin.
     It cannot be recovered.

  RECOMMENDATION: Adopt all three specifications as written.
  Confirm grinding allowances with the heat treater before
  releasing the drawings, and ask specifically about their
  furnace atmosphere, since a controlled-atmosphere furnace
  would allow the stock on component A to be reduced.

SENSITIVITY NOTE:
  Ranked by consequence of getting it wrong:
    1. OMITTING STRESS RELIEF ON C — delayed, invisible,
       expensive. The worst failure mode because nobody
       diagnoses it.
    2. OVER-HARDENING B — brittle fracture, possible machine
       crash, possible scrapped workpiece.
    3. INSUFFICIENT GRINDING STOCK — parts scrapped at the
       grinding stage. Expensive but caught immediately.
    4. OMITTING TEMPERING — quench cracking, usually caught
       at the heat treater.
    5. SPECIFYING A SINGLE HARDNESS VALUE — the heat treater
       queries it. Annoying, not damaging.
  Note that the WORST consequence comes from the CHEAPEST
  omitted operation. That is characteristic of heat treatment
  errors generally.
```

### 14. Engineering assumptions
- Air-atmosphere furnace assumed, so decarburisation is allowed for `[GUIDE]`.
- Grinding allowances from general practice `[PRACTICE]` — must be confirmed with the heat treater.
- `HRC ≈ 30 + 50 × %C` is indicative only and plateaus above ~0.6% C `[GUIDE]`.
- Distortion magnitudes not calculated — they are not reliably calculable; stock specified from
  practice instead.
- Component C not hardened, only stress relieved.

### 15. Diagram

```
     HEAT TREATMENT — WHAT EACH PROCESS DOES
     (instructional schematic)

  THE TEMPERATURE MAP

   °C
  950 ┤ ░░░░░░░░░ CARBURISING (case hardening)
  900 ┤ ▓▓▓▓▓▓▓▓▓ HARDENING (austenitise, then quench)
  800 ┤ ▓▓▓▓▓▓▓▓▓ NORMALISING (air cool) / ANNEALING (slow)
  723 ┼ ─ ─ ─ ─ ─ TRANSFORMATION TEMPERATURE ─ ─ ─ ─ ─
  650 ┤ ███████ STRESS RELIEVING (no phase change)
  550 ┤ ▒▒▒▒▒▒▒ NITRIDING (no phase change → LOW DISTORTION)
  400 ┤ ░░░ TEMPERING (range 150-650)
  150 ┤ ░
      └────────────────────────────────────────────

   ┌──────────────────────────────────────────────────┐
   │ ABOVE the line → phase change → DISTORTION       │
   │ BELOW the line → no phase change → LITTLE MOVE   │
   │ This is why NITRIDING barely distorts.           │
   └──────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  HARDENING AND TEMPERING

     HEAT ──► QUENCH ──► MARTENSITE ──► TEMPER ──► USABLE
     900°C    fast       VERY HARD      150-650    hard +
                         VERY BRITTLE   °C         tough
                         HIGH STRESS
                              │
                              └──► IF NOT TEMPERED:
                                   CRACKS. Always temper.

     TEMPERING TEMPERATURE  vs  RESULT
     150-200 °C  ████████████████  58-62 HRC  hardest
     300-450 °C  ██████████        45-52 HRC
     550-650 °C  █████             28-38 HRC  toughest

  ──────────────────────────────────────────────────────────

  THROUGH HARDENING vs CASE HARDENING

    THROUGH HARDENED             CASE HARDENED
    (needs > 0.30 % C)           (for < 0.25 % C steel)

    ▓▓▓▓▓▓▓▓▓▓▓▓▓                ▓▓▓▓▓▓▓▓▓▓▓▓▓ ← hard case
    ▓▓▓▓▓▓▓▓▓▓▓▓▓                ░░░░░░░░░░░░░   0.5-1.5 mm
    ▓▓▓ ALL HARD ▓                ░░ TOUGH ░░░
    ▓▓▓▓▓▓▓▓▓▓▓▓▓                ░░░ CORE ░░░
    ▓▓▓▓▓▓▓▓▓▓▓▓▓                ▓▓▓▓▓▓▓▓▓▓▓▓▓

    hard throughout              hard skin, tough inside
    can regrind repeatedly       ⚠ CANNOT GRIND THROUGH
    brittle in thin sections       THE CASE — it becomes
                                   a soft part that looks fine

  ──────────────────────────────────────────────────────────

  WHY YOU MUST ALLOW GRINDING STOCK

     BEFORE HEAT TREATMENT      AFTER HEAT TREATMENT
     ┌─────────────────┐        ┌──╱──────────╲───┐
     │                 │        │ ╱ DISTORTED  ╲  │
     │  machined to    │   ──►  │╱              ╲ │
     │  size + 0.5 mm  │        │ + soft decarb   │
     └─────────────────┘        └──╲──────────╱───┘
                                    skin 0.1-0.5 mm
                                          │
                                          ▼
                                  GRIND TO FINAL SIZE
                                  removes distortion
                                  AND the soft skin

     STOCK ≥ distortion + decarburisation + finish
           ≈  0.15    +      0.30        +  0.05
           ≈  0.5 mm  (small part)

  ──────────────────────────────────────────────────────────

  THE MANUFACTURING SEQUENCE — NOT OPTIONAL

   1 MATERIAL (annealed/normalised)
   2 ROUGH MACHINE ─── leave stock
   3 STRESS RELIEVE ── if welded or heavily machined
   4 SEMI-FINISH ───── still leaving stock
   5 HEAT TREAT ────── it moves here
   6 STRAIGHTEN ────── slender parts
   7 GRIND ─────────── to final size, removes decarb
   8 INSPECT ───────── dimensions AND hardness
   9 SURFACE TREAT ── if specified

   Skip 3 → part moves in service (invisible for months)
   Skip stock → part undersize after 7 (scrap)
   Skip 7 → soft skin + distorted (fails in service)

  ──────────────────────────────────────────────────────────

  THE HARDNESS-TOUGHNESS TRADE-OFF

   HARDNESS ──────────────────────────────────────►
   30 HRC      40 HRC      50 HRC      60 HRC
   │           │           │           │
   tough       BALANCED    hard        VERY HARD
   bends       general     wear        max wear
               purpose     parts       BRITTLE
   ◄────────────────────────────────── TOUGHNESS

   COMPRESSION only  ────────────────► 58-62 HRC
   BENDING / SHEAR   ──────► 40-48 HRC
   IMPACT            ► case harden, or 35-42 HRC

   ┌──────────────────────────────────────────────┐
   │ HARDNESS IS NOT A VIRTUE IN ITSELF.          │
   │ A worn pin is a maintenance item.            │
   │ A SNAPPED pin is a crashed machine.          │
   └──────────────────────────────────────────────┘
```

### 16. Drawing example
Heat treatment belongs in the notes block, and must be complete:

```
┌────────────────────────────────────────────────────────┐
│ PART NAME : LOCATING PIN                 ITEM No. 7    │
│ QTY : 2                                  DWG: F1042-07 │
├────────────────────────────────────────────────────────┤
│ MATERIAL  : 42CrMo4 TO EN 10083-3 (EN19 EQUIV)         │
│ TREATMENT : HARDEN AND TEMPER TO 40-45 HRC             │
├────────────────────────────────────────────────────────┤
│ NOTES:                                                 │
│ 1. LEAVE 0.6 mm STOCK ON Ø20 BEFORE HEAT TREATMENT.    │
│ 2. CHECK STRAIGHTNESS AFTER HEAT TREATMENT.            │
│    STRAIGHTEN IF REQUIRED BEFORE GRINDING.             │
│ 3. GRIND Ø20 h6 AFTER HEAT TREATMENT.                  │
│ 4. HARDNESS TEST CERTIFICATE REQUIRED.                 │
│ 5. BREAK ALL SHARP EDGES 0.3 MAX.                      │
│ 6. GENERAL TOLERANCE ISO 2768-mK.                      │
└────────────────────────────────────────────────────────┘
        FOR TRAINING ONLY — NOT FOR MANUFACTURE
```

Note that the drawing states **both** the pre-treatment stock and the post-treatment grinding. Without
note 1 the toolroom will machine to Ø20 and the part will be scrap; without note 3 nobody grinds it and
the pin is oversize, distorted and soft-skinned.

### 17. CAD workflow
Not primarily a CAD topic. Two practical notes:

1. **Model the finished size**, not the pre-heat-treatment size. The grinding stock is a manufacturing
   instruction in the notes, not a modelled dimension. Modelling the oversize condition causes assembly
   interference checks to give wrong answers.
2. **Configure the drawing template** with a heat treatment field in the title block, so it cannot be
   left blank. A blank field prompts a question; an absent field is silently ignored. This is a small
   template change that eliminates a whole class of omission.

### 18. GD&T application
Not applicable directly. One important interaction: **geometric tolerances must be achievable after
heat treatment**. A 0.01 mm flatness on a surface that will be hardened is only achievable if that
surface is ground afterwards. Specifying tight geometry on an as-hardened surface with no grinding
operation is a specification that cannot be met, and it is a common drawing error.

The general rule: **tight geometric tolerances imply a finishing operation after heat treatment.** Make
that operation explicit in the notes.

### 19. Manufacturing method
This lesson is largely about manufacturing method — see §6 for the sequence. Additional practical
points:

- **Heat treatment is usually subcontracted.** Build the lead time (typically 3–7 working days
  `[PRACTICE]`) into the project schedule. It is a frequent cause of fixture delivery slippage.
- **Batch parts together.** Heat treaters charge by batch or by weight; sending one small pin is
  disproportionately expensive.
- **Talk to your heat treater at the design stage** for anything unusual. They know their equipment's
  distortion behaviour and can advise on stock allowances far better than any general guideline.
- **Mark parts for identification** before sending — parts come back looking different and unmarked
  parts get mixed up.

### 20. Inspection method
- **Hardness testing** — the primary verification (L0.5.4 covers the methods in detail). Test after
  grinding, not before, to avoid reading the decarburised skin.
- **Case depth** — verified by sectioning a sample part and taking a microhardness traverse, or on a
  test coupon processed with the batch. Specify a **test coupon** where case depth is critical
  `[PRACTICE]`.
- **Dimensional inspection after grinding**, against the finished drawing.
- **Crack detection** — dye penetrant or magnetic particle inspection where quench cracking is a risk,
  particularly on complex geometry `[PRACTICE]`.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Specifying hardening without tempering** | Quench cracking; brittle part |
| 2 | Specifying hardness above what the carbon content allows | Unachievable; heat treater delivers something else |
| 3 | **No grinding stock allowed** | Part distorted, undersize and soft-skinned — scrap |
| 4 | **Omitting stress relief on a welded base** | Fixture goes out of flat months later; undiagnosable drift |
| 5 | Specifying a single hardness value | Cannot be certified; heat treater must query |
| 6 | Case hardening without stating case depth | Ambiguous; may be too thin to survive grinding |
| 7 | **Grinding through the case** | Soft part that looks correct |
| 8 | Over-hardening a part loaded in bending | Brittle fracture |
| 9 | Hardness tested before grinding | Reads the decarburised skin; false low result |
| 10 | Sharp internal corners on parts to be hardened | Quench cracks |
| 11 | Non-uniform sections | Differential cooling; distortion and cracking |
| 12 | Not allowing heat treatment lead time in the schedule | Project delay |
| 13 | Tight geometry specified with no post-treatment finishing | Unachievable specification |
| 14 | Machining to final size then sending for hardening | The classic — produces scrap every time |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Hardened part reads soft | Decarburised skin | Re-test after grinding 0.3 mm | Grind and re-test | Allow stock; test after grinding |
| Part cannot reach specified hardness | Carbon content too low | Check material certificate | Change material or case harden | Feasibility check before release |
| Part cracked during hardening | No tempering, sharp corners, or wrong quench | Visual and dye penetrant | Scrap; redesign radii | Specify tempering; generous radii |
| Part undersize after grinding | Insufficient stock allowed | Compare to drawing | Remake | Specify stock explicitly |
| Case-hardened part soft in service | Ground through the case | Section and microhardness test | Remake with deeper case | Case depth > grinding stock + required case |
| Welded base out of flat after months | Stress relief omitted | Check flatness over time | Stress relieve and remachine | Always stress relieve welded bases |
| Slender part bent after hardening | Normal distortion | Check straightness | Straighten before grinding | Plan a straightening operation |
| Batch inconsistent hardness | Uneven furnace loading or mixed materials | Test several parts | Re-treat | Batch by material; mark parts |

### 23. Design checklist
- [ ] Is the **carbon content adequate** for the specified hardness?
- [ ] Is **tempering** specified with every hardening call-out?
- [ ] Is hardness specified as a **range**?
- [ ] For case hardening, is **case depth at a defined hardness** specified, with case and core values?
- [ ] Is **grinding stock** specified on every surface dimensioned after treatment?
- [ ] Is the case depth **greater than** the grinding stock plus the required remaining case?
- [ ] Is **stress relief** specified for welded or heavily machined components?
- [ ] Is the hardness **matched to the loading** — hard for compression, tougher for bending?
- [ ] Are internal corners **radiused** to avoid quench cracks?
- [ ] Are sections reasonably **uniform**?
- [ ] Is a **hardness test certificate** required?
- [ ] Is a **test coupon** specified where case depth is critical?
- [ ] Is post-treatment **grinding** stated explicitly in the notes?
- [ ] Is heat treatment **lead time** in the project schedule?
- [ ] Have I considered **nitriding** if distortion is a problem?

### 24. Beginner exercise
**E0.5.3-B** — For each component, state the heat treatment you would specify and write the complete
drawing call-out.
(a) An EN31 wear plate, 100 × 60 × 15 mm, pure compression, needs maximum wear resistance
(b) An EN19 clamp pivot pin, Ø12 × 40 mm, loaded in shear and bending
(c) A mild steel welded fixture base, top face to be machined flat
(d) A mild steel bracket that needs a hard wear face where a part slides
(e) State why (d) cannot be answered the same way as (a)

### 25. Intermediate exercise
**E0.5.3-I** — A fixture designer specifies: *"Material: EN8. Harden to 60 HRC."*
(a) Using `HRC ≈ 30 + 50 × %C` and EN8's carbon content of 0.40%, determine whether this is achievable.
(b) Identify three separate errors in the specification as written.
(c) Write a corrected specification if the part is a rest pad in pure compression, changing the
material if necessary.
(d) Write a corrected specification if the material must remain EN8.
(e) The part is 80 × 60 × 20 mm and the top face is dimensioned to ±0.02 mm. State the grinding stock
you would specify and justify each component of the allowance.
(f) State the full manufacturing sequence.

### 26. Advanced exercise
**E0.5.3-A** — A high-volume automotive machining fixture is being designed for 500,000 parts over its
life. It includes:
```
A  Welded S275 base frame, 1000 × 600 mm, top face machined flat 0.03 mm
B  4 × EN31 rest pads, 40 × 40 × 20 mm, pure compression, 8 kN each
C  2 × EN19 locating pins, Ø25 × 80 mm, side load 5 kN
D  1 × large EN8 riser block, 300 × 200 × 150 mm, one face is a
     sliding wear surface 300 × 200 mm
E  6 × mild steel (EN3B) clamp arms, moderately loaded, no wear
F  1 × precision EN31 master locator, Ø30 × 60 mm, ground to
     ±0.005 mm, must not distort
```
(i) Specify the heat treatment for each item, with complete drawing call-outs.
(ii) For item D, explain why through-hardening is a poor choice and propose a better treatment,
justifying it on distortion, cost and function.
(iii) For item F, explain why conventional hardening creates a problem and propose a solution.
(iv) For item C, calculate the bending stress (`σ = M/Z`, cantilever 80 mm, `Z = πd³/32`) and use the
result to justify your hardness selection against the hardness–toughness trade-off.
(v) Specify the grinding stock for items B, C and F, itemising distortion, decarburisation and finish
allowances.
(vi) Write the complete manufacturing sequence for item A, including where stress relief occurs and
why.
(vii) The heat treater quotes a 10-day lead time and a minimum batch charge. Propose a batching and
scheduling strategy for the six items.
(viii) After six months in service the rest pads (item B) show 0.03 mm wear. Given the ±0.05 mm part
tolerance, evaluate whether this is acceptable, calculate the implied life, and recommend an action.

### 27. Interview questions
1. *"A drawing says 'harden to 58 HRC' on an EN8 part. What do you do?"*
   **Answer:** I would query it, because EN8 has about 0.40% carbon and tops out around 50 HRC — 58 is
   not achievable. There are two fixes depending on what the part needs. If it is a wear surface in
   compression, change the material to EN31, which has 1% carbon and reaches 58–62 HRC comfortably. If
   the material must stay EN8 for some reason, specify what EN8 can actually deliver — 45–50 HRC — or
   use induction hardening if only a local face needs it. I would also check whether the specification
   includes tempering and a hardness range rather than a single value, because a call-out with that
   error usually has those too.
2. *"Why do hardened parts need to be ground afterwards?"*
   **Answer:** Two reasons. First, heat treatment distorts the part — the martensite transformation
   involves about a 4% volume increase and it does not happen uniformly, so the part moves. Second,
   heating in air burns carbon out of the surface, leaving a decarburised skin typically 0.1 to 0.5 mm
   deep that is softer than the specified hardness. Grinding after hardening corrects the distortion
   and removes the soft skin in one operation. That is why you machine soft with grinding stock left
   on, harden, then grind to final size — and why machining a part to final size before sending it for
   hardening produces scrap.

### 28. Expert questions
1. *"You are designing a large precision fixture base that must stay flat within 0.02 mm for ten years.
   Walk me through the material and thermal processing strategy."*
   **Answer:** The enemy here is **residual stress**, not load. A base like this will barely deflect
   under working loads, but locked-in stress from manufacturing will release slowly over months and
   years and take the flatness with it. So the whole strategy is about getting the stress out before
   the final machining operation, and then not putting any back.
   On **material**, my first choice would be a **stress-relieved rolled plate or a cast iron casting
   that has been aged**, rather than a fabrication. Cast iron is genuinely excellent here — it is
   dimensionally stable once aged, it damps vibration, and it has no weld stress. If the fixture must
   be fabricated, I accept a longer processing route.
   The **processing sequence** would be: fabricate or obtain the blank, then **rough machine** leaving
   several millimetres, then **stress relieve** at around 600 °C with a slow furnace cool — the slow
   cool matters, because a fast cool puts thermal stress straight back in. Then **semi-finish machine**
   leaving perhaps 0.5 mm, then a **second stress relief** if the part is critical enough to justify
   it, because semi-finishing releases and redistributes stress too. Then **finish machine**, and
   ideally leave the part for a period before final inspection.
   For the very highest stability, **natural ageing** — leaving the part outdoors or in the workshop
   for weeks or months between roughing and finishing — is the traditional method and it genuinely
   works. Machine tool builders did this for decades. It is slow, which is why thermal stress relief
   largely replaced it, but for a ten-year stability requirement it is worth considering, possibly in
   combination.
   I would also think about **vibratory stress relief** as a supplement — it is cheaper and faster than
   thermal, though the evidence for its effectiveness is more mixed and I would not rely on it alone.
   On **design**, I would aim for symmetry, uniform section thickness, and avoid heavy welding
   concentrated on one side, because asymmetric stress produces asymmetric movement. Ribs should be
   symmetric about the neutral axis where possible.
   And I would **plan for re-flattening**. A ten-year requirement on a precision surface is ambitious,
   and I would design the fixture so the top face can be reground in situ or the base can be returned
   for remachining without disturbing the located features — perhaps by mounting the locators on
   separate ground pads that can be shimmed. Designing in the ability to recover is more honest than
   promising stability that cannot be guaranteed.
   Finally, I would **measure it over time**. Flatness at commissioning, at three months, at a year.
   That converts an assumption into data and tells you whether the process worked.
2. *"When would you choose nitriding over conventional hardening, and what are you giving up?"*
   **Answer:** The decisive reason to choose nitriding is **distortion**, and specifically when the
   part is already finished to size.
   Nitriding runs at 500–550 °C, below the transformation temperature, so no phase change occurs and
   the part barely moves. That means you can nitride a component that has already been ground to a
   0.005 mm tolerance and expect it to still be within tolerance afterwards. With conventional
   hardening that is impossible — you must harden first and grind after, which means the geometry has
   to be achievable by grinding, and for complex forms it may not be.
   So my typical triggers are: a precision part already at final size; a complex geometry that cannot
   easily be ground after treatment; a long slender part where distortion would be severe; or a part
   where I need surface hardness on a feature that cannot be reached by a grinding wheel.
   The **secondary benefits** are worth having too. Nitrided surfaces reach 900–1200 HV, considerably
   harder than through-hardened steel. Fatigue strength improves because nitriding puts the surface
   into compressive residual stress. And corrosion resistance improves somewhat.
   What I give up is significant and must be understood. The **case is thin** — typically 0.2 to
   0.6 mm against 0.5 to 1.5 mm for carburising — so it cannot tolerate high contact stress that would
   collapse the thin hard layer into the softer substrate, and it cannot be reground more than very
   lightly. That thinness also means it is less suitable for parts that will be refurbished over a long
   life.
   **Cost and lead time** are higher — nitriding cycles are long, often 20 to 90 hours, and the process
   is less widely available than conventional hardening.
   **Material choice is constrained.** Nitriding works best on steels containing nitride-forming
   elements — aluminium, chromium, molybdenum, vanadium. Nitriding steels such as 41CrAlMo7 give the
   best results; plain carbon steel nitrides poorly. So choosing nitriding often means choosing the
   material at the same time, earlier in the design than you might otherwise commit.
   And the **core is unaffected** — you get a hard skin over whatever the core condition was, so if the
   part needs core strength it must be hardened and tempered first, then nitrided, which is a two-stage
   route.
   My practical summary: nitriding for precision parts where distortion is unacceptable and contact
   stress is moderate; conventional hardening for heavily loaded parts, thick sections, and anything
   that will be reground through its life.

### 29. Summary
Heat treatment turns a soft blank into a functional fixture component, and every process has a specific
purpose. Hardening produces martensite by rapid quenching, requiring at least about 0.30% carbon, and
must always be followed by tempering — a lower tempering temperature giving higher hardness and lower
toughness. Case hardening diffuses carbon into low-carbon steel to give a hard case over a tough core,
with the case depth stated at a defined hardness. Nitriding runs below the transformation temperature,
producing an extremely hard thin case with almost no distortion, making it the answer for parts already
finished to size. Stress relieving changes no hardness but releases locked-in stress, and omitting it
on a welded fixture base produces a fixture that goes out of flat months later with no diagnosable
cause. Heat treatment distorts parts and leaves a soft decarburised skin, so the manufacturing sequence
is fixed: machine soft with grinding stock left on, heat treat, then grind to final size. Hardness must
be matched to loading — hard for pure compression, tougher for bending and impact — because a snapped
locating pin is a far worse outcome than a worn one.

### 30. Key takeaways
- **Hardening without tempering is a crack waiting to happen.** Always specify both.
- **Below ~0.30% carbon you cannot through-harden** — case harden instead `[GUIDE]`.
- **Lower tempering temperature = harder and more brittle.** Match hardness to the loading.
- **Compression → 58–62 HRC. Bending/shear → 40–48 HRC. Impact → case harden** `[PRACTICE]`.
- **Machine soft → heat treat → grind to size.** Always allow grinding stock.
- Decarburised skin is **0.1–0.5 mm** — grind it off, and test hardness **after** grinding `[GUIDE]`.
- **Case depth must exceed grinding stock plus the case you need to keep.** You cannot grind through it.
- **Nitriding barely distorts** — the answer for precision parts already at size, at the cost of a thin
  case.
- **Stress relieve every welded base** between rough and finish machining. The cheapest omitted
  operation has the worst consequence.
- Specify hardness as a **range**, require a **certificate**, and state post-treatment **grinding**
  explicitly.

---

## LESSON L0.5.4 — HARDNESS: SCALES AND SPECIFICATION

### 1. Lesson title
**L0.5.4 — Rockwell, Brinell, Vickers and Shore: measuring hardness, converting between scales, and specifying it correctly**

### 2. Learning objective
By the end of this lesson you will be able to explain how each hardness test works, select the correct
scale for a given component, convert approximately between scales, specify hardness correctly on a
drawing with tolerance and test method, and interpret a hardness test certificate.

### 3. Prerequisites
L0.5.3 (heat treatment), L0.3.2 (stress and strength).

### 4. Why the topic matters
Hardness is the property you specify, the property you inspect, and the property that determines
whether a locator lasts three months or ten years. It is also the most frequently mis-specified
property on fixture drawings, in four consistent ways: wrong scale, single value instead of a range,
no test method stated, and a value that the material cannot achieve.

You also need to read hardness. A supplier's certificate says 601 HV; your drawing said 55–60 HRC. Is
that acceptable? You need to be able to convert, and to know how much confidence to place in the
conversion.

And hardness connects to something you already know. There is a useful approximate relationship between
hardness and tensile strength, which means a hardness test — quick, cheap, non-destructive — gives you
an estimate of a strength property that would otherwise need a destructive tensile test.

### 5. Simple explanation
Hardness is how well a material resists being dented.

Every hardness test does the same thing: press something hard into the surface with a known force, then
measure the dent. A small dent means a hard material.

The tests differ in what they press with and how they measure:
- **Rockwell** — presses a diamond cone or a steel ball in, and measures how **deep** it goes. Fast,
  the machine reads out directly. The usual test for hardened steel.
- **Brinell** — presses a large ball in hard and measures the **width** of the dent. Good for soft
  materials, castings, and rough surfaces because the dent is big.
- **Vickers** — presses a diamond pyramid in and measures the **diagonal** of the dent under a
  microscope. Very accurate, works on anything, and can be done on tiny areas.
- **Shore** — for rubber and plastics. Presses a spring-loaded point in.

The scale you use depends on the material and how hard it is.

### 6. Engineering explanation

**THE FOUR TESTS**

**1. ROCKWELL — the workshop standard** `[STD — ISO 6508 / ASTM E18]`

Measures **depth of penetration** under a major load, after a minor preload. The machine reads hardness
directly with no measurement or calculation required, which is why it dominates production testing.

The **scale letter matters** and is part of the specification:

| Scale | Indenter | Major load | Range | Use |
|---|---|---|---|---|
| **HRC** | Diamond cone (brale) | 150 kgf | 20–70 | **Hardened steel — the fixture standard** |
| **HRB** | Ø1.588 mm ball | 100 kgf | 20–100 | Soft steel, brass, aluminium |
| HRA | Diamond cone | 60 kgf | 20–88 | Thin hardened steel, carbide |
| HR15N/30N/45N | Diamond, superficial | 15/30/45 kgf | — | **Thin cases, coatings, small parts** |

> **HRC below about 20 is unreliable** — the scale loses resolution. For soft materials use HRB or
> Brinell instead. Specifying "15 HRC" reveals a misunderstanding.

**2. BRINELL** `[STD — ISO 6506 / ASTM E10]`

A hardened steel or carbide ball is pressed in under a heavy load, and the **diameter of the impression**
is measured optically.

```
HBW = 2F / (πD(D − √(D² − d²)))
```
where F is the force in kgf, D the ball diameter and d the impression diameter, both in mm.

Designation format: **`HBW 10/3000`** = 10 mm ball, 3000 kgf load `[STD]`.

| Advantage | Limitation |
|---|---|
| Large impression averages over a wide area | Large impression damages the surface |
| Good for **castings, forgings, coarse structures** | Not for hardened steel above ~450 HBW |
| Tolerant of rough surfaces | Requires optical measurement — slower |
| Represents bulk material well | Not for thin sections or small parts |

Brinell is the usual specification for **cast iron, unhardened steel plate, and large forgings**, and it
is why you see "180–220 HB" on structural fixture components.

**3. VICKERS** `[STD — ISO 6507 / ASTM E92]`

A square-based diamond pyramid (136° between faces) is pressed in, and the **diagonals of the square
impression** are measured under a microscope.

```
HV = 1.854 F / d²
```
where F is in kgf and d is the mean diagonal in mm.

Designation format: **`HV10`** = 10 kgf load, **`HV0.3`** = 0.3 kgf `[STD]`.

| Advantage | Limitation |
|---|---|
| **One continuous scale for all materials**, soft to hardest | Requires optical measurement — slow |
| **Load-independent** over a wide range | Needs a well-prepared surface |
| Works at **micro loads** — case depth traverses, thin coatings | Laboratory rather than shop-floor |
| Most accurate of the four | More expensive equipment |

Vickers is the **reference method for case depth measurement**, which is why effective case depth is
conventionally defined at **550 HV** `[STD]`.

**4. SHORE (durometer)** `[STD — ISO 868 / ASTM D2240]`

For **elastomers and plastics**. A spring-loaded indenter is pressed against the surface and the
resistance read on a 0–100 scale.

| Scale | Use |
|---|---|
| **Shore A** | Soft rubbers, polyurethane clamp pads |
| **Shore D** | Hard plastics, acetal, nylon |

Relevant to fixture work for specifying polyurethane clamp pads: "**Shore A 70**" is a typical
medium-firm pad `[GUIDE]`.

**CONVERSION BETWEEN SCALES**

Approximate conversions `[GUIDE — ISO 18265 / ASTM E140 give the authoritative tables]`:

| HRC | HV | HBW | Approx. tensile MPa | Typical fixture context |
|---|---|---|---|---|
| — | 100 | 95 | 320 | Annealed mild steel |
| — | 150 | 143 | 480 | Normalised mild steel |
| — | 200 | 190 | 640 | **EN8 normalised** |
| 20 | 240 | 228 | 770 | Soft H&T |
| 25 | 266 | 253 | 850 | |
| 30 | 302 | 285 | 950 | |
| **35** | **345** | **327** | **1,080** | Tough H&T |
| **40** | **392** | **371** | **1,250** | **EN19 loaded pins (lower)** |
| **45** | **446** | **421** | **1,420** | **EN19 loaded pins (upper)** |
| 50 | 513 | 481 | 1,640 | |
| 55 | 595 | (560) | 1,900 | |
| **60** | **697** | — | — | **EN31 locators** |
| 65 | 832 | — | — | Tool steel, carbide-adjacent |

> **Three cautions on conversion.**
> 1. Conversions are **approximate**. Different materials with the same Rockwell hardness can differ in
>    Vickers by several percent.
> 2. Brinell becomes unreliable above about **450 HBW** (the ball itself deforms) — the bracketed value
>    above is indicative only.
> 3. The tensile strength relationship holds reasonably for **steels** and poorly for other materials.
>    Do not use it for cast iron, aluminium or non-ferrous metals.

**THE HARDNESS-TO-STRENGTH RELATIONSHIP**

For steels `[GUIDE]`:
```
Tensile strength (MPa) ≈ 3.3 × HV
Tensile strength (MPa) ≈ 3.4 × HBW
```

This is genuinely useful. A hardness test takes a minute and is essentially non-destructive; a tensile
test destroys a specimen and takes far longer. So hardness is routinely used as a **proxy for strength**
in production control.

For our earlier examples:
- EN8 normalised at 200 HBW → 3.4 × 200 = **680 MPa** (published value ~700 MPa `[GUIDE]` ✓)
- EN19 H&T at 400 HV → 3.3 × 400 = **1,320 MPa** ✓

> Use this for **estimation and cross-checking**, never as a design value. For design, use the
> published mechanical properties for the grade and condition `[MFR]`.

**HOW TO SPECIFY HARDNESS ON A DRAWING**

A complete hardness specification has four elements:

```
HARDNESS: 58-62 HRC
          │  │  └── scale (ALWAYS state it)
          │  └───── upper limit
          └──────── lower limit  (a RANGE, never a single value)

Plus, where relevant:
  TEST LOCATION : ON FACE 'A' AFTER GRINDING
  TEST METHOD   : ROCKWELL C TO ISO 6508
  CERTIFICATE   : HARDNESS TEST CERTIFICATE REQUIRED
```

**Why a range and not a single value.** Heat treatment cannot hit an exact number. Furnace variation,
section thickness, and material batch variation all contribute. A typical achievable band is
**±2 HRC** `[PRACTICE]`. Specifying "60 HRC" gives the heat treater no acceptance window, and they will
either query it or quietly interpret it — neither of which you want.

**Why the test location matters.** As established in L0.5.3, an as-hardened surface carries a
decarburised skin that reads low. Specify testing **after grinding**, on the functional surface.

**Typical hardness specifications for fixture components** `[PRACTICE]`

| Component | Specification |
|---|---|
| Rest pads, locators (EN31) | 58–62 HRC |
| Wear plates | 55–60 HRC |
| Loaded pins (EN19) | 40–45 HRC |
| Clamp arms (EN8, H&T) | 28–34 HRC |
| Structural plate (EN8 normalised) | 180–220 HBW |
| Mild steel structure | No hardness specified |
| Case-hardened parts | Case 58–62 HRC, core 30–40 HRC |
| Nitrided parts | 900 HV min surface |
| Polyurethane clamp pads | Shore A 70 ±5 |

**PRACTICAL TESTING CONSIDERATIONS**

| Consideration | Requirement |
|---|---|
| **Surface finish** | Must be clean and reasonably smooth. Rockwell tolerates more roughness than Vickers |
| **Thickness** | Part must be at least **10× the indentation depth** `[STD]`; otherwise the anvil affects the reading |
| **Edge distance** | Test at least **2.5 × indentation diameter** from an edge `[STD]` |
| **Spacing** | Adjacent tests at least **3 × diameter** apart `[STD]` |
| **Support** | Part must sit solidly. A rocking part reads low |
| **Curved surfaces** | Correction factors apply; ideally test on a flat |
| **Number of tests** | Take at least **three readings** and report the mean `[PRACTICE]` |

> **The thin-part trap.** Testing a 2 mm thick hardened shim with HRC will read low, because the
> indenter's stress field reaches the anvil. Use a **superficial Rockwell scale (HR15N/30N)** or Vickers
> for thin parts. This is a common source of false "the part is soft" reports.

**PORTABLE HARDNESS TESTING**

Bench testers are the reference, but fixtures are often too large to bring to one. Portable methods:

| Method | Principle | Accuracy | Use |
|---|---|---|---|
| **Leeb / rebound** | Measures rebound velocity of an impact body | ±5% `[GUIDE]` | Large parts, in situ |
| **UCI** (ultrasonic) | Ultrasonic contact impedance | ±5% `[GUIDE]` | Thin sections, in situ |
| **Portable Rockwell (clamp type)** | Conventional Rockwell in a C-clamp frame | Good | Medium parts |
| **File test** | A file of known hardness skates or bites | Very rough | **Screening only** |

The file test deserves a mention because it is universal and free. A hardened file (about 62 HRC)
skates over anything above roughly 58 HRC and bites into anything softer. It cannot produce a number
and must never be used for acceptance, but it will tell you in five seconds whether a locator was
hardened at all — which is a genuinely useful thing to know when investigating a wear problem.

### 7. Terminology

| Term | Definition |
|---|---|
| **Hardness** | Resistance to permanent indentation |
| **Indenter** | The tool pressed into the surface |
| **Brale** | Diamond cone indenter used in Rockwell C |
| **HRC / HRB** | Rockwell C / B scale |
| **HBW** | Brinell hardness, tungsten carbide ball |
| **HV** | Vickers hardness |
| **Shore A / D** | Durometer scales for elastomers and plastics |
| **Superficial Rockwell** | Low-load Rockwell (HR15N etc.) for thin parts |
| **Microhardness** | Vickers or Knoop at very low loads |
| **Case depth traverse** | Series of microhardness readings from surface inward |
| **Leeb / rebound test** | Portable dynamic hardness method |
| **UCI** | Ultrasonic contact impedance portable method |
| **Anvil effect** | False low reading from testing too thin a part |

### 8. Principle

> **HARDNESS IS SPECIFIED AS A RANGE, ON A NAMED SCALE, AT A NAMED LOCATION.**
> `58-62 HRC on face A after grinding` is a specification. `Hard` is not, and neither is `60 HRC`.
> **HRC for hardened steel, HBW for soft steel and castings, HV for thin cases and precision, Shore for
> elastomers.**
> Conversions between scales are **approximate**; `tensile ≈ 3.3 × HV` for steels is useful for
> estimation only.
> Test **after grinding**, and never test a part thinner than **10× the indentation depth**.

### 9. Industrial application

**Reading a hardness test certificate**

```
HARDNESS TEST CERTIFICATE
────────────────────────────────────────────────
Part        : REST PAD, DWG F1042-04
Batch       : HT-2847        Qty: 12
Material    : 100Cr6
Treatment   : Harden and temper
Test method : Rockwell C, ISO 6508-1
Test location: Ground face
Readings    : 60.5, 59.8, 61.2, 60.1, 60.7 HRC
Mean        : 60.5 HRC
Specified   : 58-62 HRC
Result      : PASS
────────────────────────────────────────────────
```

What to check:
1. **Scale matches** what you specified — HRC against HRC
2. **All readings within range**, not just the mean. A mean of 60 from readings of 55 and 65 is a
   failed batch with an acceptable average
3. **Test location** matches your specification — ground face, not as-hardened
4. **Material and batch** traceable to the material certificate
5. **Method standard** cited

**The three questions a hardness result should answer**

```
1. IS IT HARD ENOUGH?      → compare to the lower limit
2. IS IT TOO HARD?         → compare to the upper limit
                             (brittleness matters — L0.5.3)
3. IS IT CONSISTENT?       → check the spread, not just the mean
```

That third question is the one people skip. A batch with a 10 HRC spread has had a heat treatment
problem even if the average is perfect, and the parts at the extremes will behave differently.

**Investigating a worn locator — the practical use of a hardness test**

A rest pad has worn after eight months. The investigation:

```
STEP 1  File test  ─────► File bites in easily
                          → the pad is soft. Not a design
                            problem, a process problem.

STEP 2  Bench test ─────► 32 HRC measured, specification
                          was 58-62 HRC
                          → confirmed under-hardened

STEP 3  Check the certificate
                    ─────► No certificate on file
                          → it was never verified

STEP 4  Check the drawing
                    ─────► Drawing says "HARDEN" only.
                          No hardness value, no scale,
                          no tempering, no certificate
                            requirement.
                          → ROOT CAUSE IS THE DRAWING
```

This chain is extremely common. The wear is blamed on the material, the heat treater or the operator,
when the origin is an incomplete specification written months earlier. **Hardness that is not specified
completely and not verified is hardness you do not have.**

### 10. Design rules
- **R1** — Always specify hardness as a **range**, typically ±2 HRC `[PRACTICE]`.
- **R2** — Always state the **scale** — HRC, HBW, HV or Shore.
- **R3** — Use **HRC** for hardened steel, **HBW** for soft steel and castings, **HV** for thin cases
  and precision work, **Shore** for elastomers.
- **R4** — Do not specify **HRC below about 20** — the scale is unreliable there.
- **R5** — Specify the **test location**, and specify testing **after grinding**.
- **R6** — Require a **hardness test certificate** on all heat-treated components `[PRACTICE]`.
- **R7** — For thin parts, specify a **superficial Rockwell or Vickers** scale.
- **R8** — Verify the part is at least **10× the indentation depth** in thickness `[STD]`.
- **R9** — Check the **spread** of readings, not only the mean.
- **R10** — Use `tensile ≈ 3.3 × HV` only for **estimation**, and only for steels `[GUIDE]`.
- **R11** — Specify **case and core hardness separately** on case-hardened parts.
- **R12** — For elastomer pads, specify **Shore A with a tolerance**.

### 11. Rules of thumb
- **HRC for hard, HBW for soft, HV for thin and precise, Shore for rubber.**
- Achievable heat treatment band is about **±2 HRC** `[PRACTICE]`.
- **Tensile (MPa) ≈ 3.3 × HV ≈ 3.4 × HBW** for steels `[GUIDE]`.
- Rough landmarks: mild steel ~150 HBW · EN8 normalised ~200 HBW · EN19 H&T ~400 HV (40 HRC) · EN31
  hardened ~700 HV (60 HRC) `[GUIDE]`.
- Brinell is unreliable above about **450 HBW**.
- A **hardened file skates above ~58 HRC** — free five-second screening, never for acceptance.
- Part thickness must exceed **10× the indentation depth** `[STD]`.
- Take at least **three readings** and report the spread `[PRACTICE]`.
- If a hardened part reads low, suspect **decarburisation or the anvil effect** before blaming the heat
  treater.

### 12. Formulae

**Brinell**
```
HBW = 2F / (π D (D − √(D² − d²)))       F in kgf, D and d in mm
```

**Vickers**
```
HV = 1.854 F / d²                        F in kgf, d = mean diagonal in mm
```

**Approximate tensile strength from hardness (steels only)** `[GUIDE]`
```
σ_UTS (MPa) ≈ 3.3 × HV
σ_UTS (MPa) ≈ 3.4 × HBW
```

**Minimum thickness for a valid test** `[STD]`
```
t_min ≥ 10 × indentation depth
```

**Approximate max hardness from carbon** (from L0.5.3) `[GUIDE]`
```
HRC_max ≈ 30 + 50 × %C          valid to about 0.6 % C
```

| Variable | Meaning | Unit |
|---|---|---|
| F | Test force | kgf |
| D | Ball diameter | mm |
| d | Impression diameter or diagonal | mm |
| HV, HBW, HRC | Hardness values | — |
| σ_UTS | Ultimate tensile strength | MPa |
| t | Part thickness | mm |

### 13. Worked numerical example

**Problem:** A batch of hardened rest pads arrives with a certificate quoting Vickers hardness. The
drawing specified 58–62 HRC. Separately, a supplier has offered an alternative material with a stated
hardness in Brinell. Evaluate both.

```
GIVEN:
  Drawing specification      = 58-62 HRC                   [PROJ]
  Certificate readings (HV10): 685, 702, 671, 694, 710     [PROJ]
  Alternative material offer = 380 HBW                     [PROJ]
  Conversion table            = §6 above                   [GUIDE]
  Tensile relation            σ ≈ 3.3 × HV                 [GUIDE]
  Achievable HT band          = ±2 HRC                     [PRACTICE]
  Rest pad thickness          = 20 mm                      [PROJ]
  Rockwell C indentation depth at 60 HRC ≈ 0.08 mm         [GUIDE]

REQUIRED:
  (a) Convert the certificate readings to HRC
  (b) Determine whether the batch passes
  (c) Assess the consistency of the batch
  (d) Estimate the tensile strength
  (e) Verify the part thickness is valid for HRC testing
  (f) Convert the alternative material offer and assess it
  (g) Engineering assessment

ASSUMPTION:
  1. Conversions from the §6 table, interpolated linearly
     between tabulated points. Conversions are APPROXIMATE —
     ISO 18265 gives the authoritative tables and material-
     specific variation of a few percent is normal. [GUIDE]
  2. Tensile estimate is for STEELS only and is indicative,
     not a design value. [GUIDE]
  3. Rockwell C indentation depth at 60 HRC taken as
     approximately 0.08 mm. [GUIDE]
  4. The alternative material offer is assumed to be a
     genuine bulk hardness, not a surface treatment.

FORMULA:
  (a) Linear interpolation between table points
  (d) σ_UTS ≈ 3.3 × HV
  (e) t_min = 10 × indentation depth

VARIABLE DEFINITIONS:
  As tabulated in §12 above.

UNIT CONVERSION:
  None required.

SUBSTITUTION AND CALCULATION:

  (a) CONVERT HV TO HRC

      From the §6 table:
        55 HRC ↔ 595 HV
        60 HRC ↔ 697 HV
        65 HRC ↔ 832 HV

      Interpolating in the 55-60 band:
        HRC = 55 + 5 × (HV − 595) / (697 − 595)
            = 55 + 5 × (HV − 595) / 102

      Reading 1: HV 685
        HRC = 55 + 5 × (685 − 595)/102
            = 55 + 5 × 90/102
            = 55 + 4.41 = 59.4 HRC

      Reading 2: HV 702  (just above 697, use 60-65 band)
        HRC = 60 + 5 × (702 − 697)/(832 − 697)
            = 60 + 5 × 5/135
            = 60 + 0.19 = 60.2 HRC

      Reading 3: HV 671
        HRC = 55 + 5 × (671 − 595)/102
            = 55 + 5 × 76/102
            = 55 + 3.73 = 58.7 HRC

      Reading 4: HV 694
        HRC = 55 + 5 × (694 − 595)/102
            = 55 + 5 × 99/102
            = 55 + 4.85 = 59.9 HRC

      Reading 5: HV 710
        HRC = 60 + 5 × (710 − 697)/135
            = 60 + 5 × 13/135
            = 60 + 0.48 = 60.5 HRC

      Converted values:
        59.4, 60.2, 58.7, 59.9, 60.5 HRC

  (b) PASS/FAIL AGAINST SPECIFICATION

      Specified range : 58-62 HRC
      Minimum reading : 58.7 HRC   ≥ 58  ✓
      Maximum reading : 60.5 HRC   ≤ 62  ✓
      ALL FIVE READINGS WITHIN SPECIFICATION.

      Mean = (59.4 + 60.2 + 58.7 + 59.9 + 60.5) / 5
           = 298.7 / 5
           = 59.74 HRC

  (c) CONSISTENCY

      Spread = 60.5 − 58.7 = 1.8 HRC

      Compare to the achievable band of ±2 HRC (a 4 HRC
      window):
        1.8 / 4.0 = 45 % of the achievable band
      → GOOD CONSISTENCY. A well-controlled batch.

      Position within the specified window:
        Window       = 58 to 62 (4 HRC wide)
        Mean at 59.74 sits 1.74 above the lower limit
        and 2.26 below the upper limit
        → slightly low in the window, but comfortably
          within it

  (d) TENSILE STRENGTH ESTIMATE

      Using the mean HV:
        Mean HV = (685 + 702 + 671 + 694 + 710)/5
                = 3,462 / 5
                = 692.4 HV

        σ_UTS ≈ 3.3 × 692.4
              ≈ 2,285 MPa

      NOTE: this is an indicative figure. At this hardness
      the relationship becomes less reliable, and the
      material is in any case used in compression where
      tensile strength is not the governing property.

  (e) THICKNESS VALIDITY FOR HRC TESTING

      Indentation depth at ~60 HRC ≈ 0.08 mm
      t_min = 10 × 0.08 = 0.8 mm
      Actual thickness = 20 mm
      20 / 0.8 = 25× the minimum
      → VALID for HRC testing ✓

      (Had the pad been a 0.5 mm shim, HRC would have been
       invalid and a superficial scale required.)

  (f) ALTERNATIVE MATERIAL AT 380 HBW

      From the §6 table:
        371 HBW ↔ 40 HRC
        421 HBW ↔ 45 HRC

      Interpolating:
        HRC = 40 + 5 × (380 − 371)/(421 − 371)
            = 40 + 5 × 9/50
            = 40 + 0.9
            = 40.9 HRC

      Against the specification of 58-62 HRC:
        40.9 HRC is 17.1 HRC BELOW the lower limit.
      → REJECT. Not remotely equivalent.

      Estimated tensile:
        σ ≈ 3.4 × 380 ≈ 1,292 MPa

      Also note: 380 HBW is near the upper limit of Brinell
      validity (~450 HBW). For a material intended to be
      much harder, Brinell would be the wrong scale to
      quote at all — which is itself a warning sign about
      this offer.

RESULT:
  ┌────────────────────────────────┬───────────────────────┐
  │ (a) Converted readings         │ 58.7 - 60.5 HRC       │
  │     Mean                       │ 59.74 HRC             │
  │ (b) Against 58-62 HRC          │ ✓ PASS, all readings  │
  │ (c) Spread                     │ 1.8 HRC (45 % of the  │
  │                                │ achievable band) GOOD │
  │ (d) Estimated tensile          │ ~2,285 MPa (indicative)│
  │ (e) Thickness validity         │ ✓ 25× the minimum     │
  │ (f) Alternative at 380 HBW     │ = 40.9 HRC ✗ REJECT   │
  │     Shortfall                  │ 17.1 HRC below spec   │
  └────────────────────────────────┴───────────────────────┘

SAFETY FACTOR:
  Not a strength calculation. The equivalent margin concept:
  the batch mean of 59.74 HRC sits 1.74 HRC above the lower
  acceptance limit, and the worst individual reading sits
  0.7 HRC above it. That is a thin margin on the individual
  reading, and worth noting to the heat treater — a small
  process drift would produce a failing part.

PASS/FAIL:
  (b) ✓ PASS — all five readings within 58-62 HRC
  (c) ✓ PASS — good consistency
  (f) ✗ REJECT — the alternative is 17 HRC too soft

ENGINEERING CONCLUSION:
  THE BATCH IS ACCEPTABLE. THE ALTERNATIVE MATERIAL IS NOT,
  AND THE WAY IT WAS PRESENTED IS ITSELF INFORMATIVE.

  1. THE BATCH PASSES, BUT SITS LOW IN THE WINDOW.
     A mean of 59.74 HRC against a 58-62 specification is
     comfortably inside, but the lowest reading of 58.7 is
     only 0.7 HRC above the reject limit. Heat treatment
     processes drift, and the next batch from the same
     furnace settings could fail. I would accept this batch
     and mention the position to the heat treater — asking
     them to aim mid-window at 60 rather than at the lower
     end costs nothing and gives both parties margin.
     THE SPREAD OF 1.8 HRC IS GOOD and indicates the process
     itself is well controlled, which is the more important
     finding. A tight spread positioned slightly low is a
     setting adjustment; a wide spread is a process problem.

  2. CHECKING EVERY READING, NOT THE MEAN, IS WHAT MATTERS.
     Had the readings been 55, 58, 60, 62 and 64 the mean
     would still be 59.8 and would look acceptable on a
     summary line. But two parts would be out of
     specification — one soft enough to wear, one hard
     enough to be brittle. ALWAYS READ THE INDIVIDUAL
     VALUES.

  3. THE ALTERNATIVE MATERIAL OFFER FAILS BY A WIDE MARGIN
     AND SHOULD BE TREATED WITH SUSPICION.
     At 380 HBW it converts to about 41 HRC — appropriate
     for a loaded pin, entirely inadequate for a rest pad
     that must resist indentation over hundreds of thousands
     of cycles. Accepting it would produce exactly the
     gradual wear failure described in §9.
     THE SCALE ITSELF IS A CLUE. Brinell is unreliable above
     about 450 HBW, so a supplier quoting Brinell for a
     material that is supposed to be 58-62 HRC either does
     not have a material that hard, or does not understand
     the requirement. Either way the offer warrants
     scrutiny rather than a quick conversion.

  4. THE THICKNESS CHECK IS A HABIT WORTH KEEPING.
     Here it passed by 25×, so it was trivial. But the same
     rest pad design in a 1 mm shim form would have made
     every HRC reading invalid and produced a false "soft"
     result, and the resulting investigation would have
     chased the heat treater instead of the test method.

  RECOMMENDATION: Accept the batch. Ask the heat treater to
  target mid-window on future batches. Reject the
  alternative material and request a quotation against the
  actual specification, in HRC, with a hardness certificate.

SENSITIVITY NOTE:
  Ranked by influence on the acceptance decision:
    1. INDIVIDUAL READINGS vs MEAN — a batch can pass on
       mean and fail on individuals. Always check both.
    2. CONVERSION ACCURACY — HV to HRC conversions carry a
       few percent uncertainty. At 58.7 HRC against a 58
       limit, that uncertainty is comparable to the margin.
       Where a result is marginal, RE-TEST ON THE SPECIFIED
       SCALE rather than converting.
    3. TEST LOCATION — testing before grinding would have
       read the decarburised skin and could easily have
       produced a false failure.
    4. PART THICKNESS — not a factor here, but decisive on
       thin parts.
```

### 14. Engineering assumptions
- Conversions interpolated from the §6 table `[GUIDE]` — ISO 18265 gives authoritative values, and
  material-specific variation of a few percent is normal.
- Tensile estimate is indicative and for steels only `[GUIDE]`.
- Rockwell C indentation depth at 60 HRC taken as ~0.08 mm `[GUIDE]`.
- Achievable heat treatment band ±2 HRC `[PRACTICE]`.
- The alternative material offer assumed to be bulk hardness, not a surface treatment.

### 15. Diagram

```
     HARDNESS TESTING — THE FOUR METHODS
     (instructional schematic)

  ROCKWELL (HRC)              measures DEPTH
      ▼ 150 kgf
      ◆ diamond cone
   ▓▓▓╲▓╱▓▓▓▓▓                machine reads out directly
        ▼ depth               FAST — the workshop standard
   ├── HRC 20-70 ──┤          for HARDENED STEEL

  BRINELL (HBW)               measures WIDTH
      ▼ 3000 kgf
      ● Ø10 ball
   ▓▓╲▁▁▁▁▁╱▓▓▓▓               big dent, optical measurement
      ├─ d ─┤                  for CASTINGS, SOFT STEEL
                               unreliable above ~450 HBW

  VICKERS (HV)                measures DIAGONAL
      ▼ 10 kgf
      ▽ diamond pyramid
   ▓▓▓╲▽╱▓▓▓▓▓▓                microscope measurement
       ├d┤                     ONE SCALE FOR EVERYTHING
                               reference for CASE DEPTH

  SHORE (durometer)           spring-loaded indenter
      ▼
      ↓ spring                 for RUBBER and PLASTIC
   ░░░░░░░░░░░                 Shore A soft / Shore D hard

  ──────────────────────────────────────────────────────────

  WHICH SCALE — THE DECISION

   MATERIAL / SITUATION            USE
   ─────────────────────────────────────────────
   Hardened steel               →  HRC
   Soft steel, cast iron        →  HBW
   Thin case, coating, tiny part→  HV or HR15N/30N
   Precision / case depth       →  HV
   Rubber, polyurethane pad     →  Shore A
   Hard plastic (acetal, nylon) →  Shore D
   Large part, in situ          →  Leeb / UCI portable
   Five-second screening        →  file test (NEVER accept on)

  ──────────────────────────────────────────────────────────

  THE CONVERSION LADDER  [GUIDE — approximate]

   HRC    HV     HBW    ≈UTS MPa    WHERE YOU SEE IT
   ────────────────────────────────────────────────────
    —     150    143      480       mild steel normalised
    —     200    190      640       EN8 normalised
   30     302    285      950
   35     345    327    1,080
   40     392    371    1,250   ◄── EN19 loaded pins
   45     446    421    1,420   ◄── EN19 upper
   50     513    481    1,640
   55     595     —     1,900
   60     697     —       —     ◄── EN31 LOCATORS
   65     832     —       —         tool steel

        σ_UTS ≈ 3.3 × HV      (STEELS ONLY)

   ┌──────────────────────────────────────────────┐
   │ CONVERSIONS ARE APPROXIMATE.                 │
   │ Where a result is marginal, RE-TEST ON THE   │
   │ SPECIFIED SCALE rather than converting.      │
   └──────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  A COMPLETE HARDNESS SPECIFICATION

    HARDNESS      : 58-62 HRC
                    │  │  └── SCALE — always state it
                    │  └───── upper limit
                    └──────── RANGE, never a single value

    TEST LOCATION : ON FACE 'A' AFTER GRINDING
                    └── or you measure the soft decarb skin

    TEST METHOD   : ROCKWELL C TO ISO 6508
    CERTIFICATE   : REQUIRED

  ──────────────────────────────────────────────────────────

  TWO TRAPS THAT PRODUCE FALSE "SOFT" RESULTS

  1. THE DECARB SKIN            2. THE ANVIL EFFECT

     ░░░░░░░░░ soft skin           ▼ indenter
     ▓▓▓▓▓▓▓▓▓ hard              ▓▓▓▓▓▓▓  thin part
     ▓▓▓▓▓▓▓▓▓                   ═══════  ANVIL
        ▲ test here = LOW              ▲ stress field
        reading                          reaches anvil
     FIX: test AFTER grinding      FIX: t ≥ 10 × depth,
                                        or use HR15N / HV

  ──────────────────────────────────────────────────────────

  THE INVESTIGATION CHAIN THAT KEEPS REPEATING

   Locator worn after 8 months
        │
        ├─► File test: bites in       → it's soft
        ├─► Bench test: 32 HRC        → confirmed
        ├─► Certificate: none on file → never verified
        └─► Drawing says "HARDEN"     → ROOT CAUSE

   ┌──────────────────────────────────────────────┐
   │ HARDNESS THAT IS NOT SPECIFIED COMPLETELY    │
   │ AND NOT VERIFIED IS HARDNESS YOU DO NOT HAVE.│
   └──────────────────────────────────────────────┘
```

### 16. Drawing example
The hardness call-out, complete:

```
┌────────────────────────────────────────────────────────┐
│ PART NAME : WEAR PLATE                   ITEM No. 9    │
│ QTY : 2                                  DWG: F1042-09 │
├────────────────────────────────────────────────────────┤
│ MATERIAL  : 100Cr6 TO EN ISO 683-17                    │
│ TREATMENT : HARDEN AND TEMPER                          │
│ HARDNESS  : 58-62 HRC                                  │
├────────────────────────────────────────────────────────┤
│ NOTES:                                                 │
│ 1. HARDNESS TESTED ON FACE 'A' AFTER GRINDING,         │
│    ROCKWELL C TO ISO 6508-1. MINIMUM 3 READINGS.       │
│ 2. HARDNESS TEST CERTIFICATE REQUIRED WITH DELIVERY.   │
│ 3. LEAVE 0.5 mm GRINDING STOCK BEFORE HEAT TREATMENT.  │
│ 4. GRIND FACE 'A' AFTER HEAT TREATMENT.                │
│ 5. GENERAL TOLERANCE ISO 2768-mK.                      │
└────────────────────────────────────────────────────────┘
        FOR TRAINING ONLY — NOT FOR MANUFACTURE
```

Note 1 does three things in one line: it fixes the location, the scale and standard, and the number of
readings. All three are needed for the result to be meaningful.

### 17. CAD workflow
Not a CAD topic. One practical note: include a **hardness field** in the drawing template's title block
alongside material and treatment, as recommended in L0.5.3 §17. An empty field is a prompt; a missing
field is an omission nobody notices.

### 18. GD&T application
Not applicable at this lesson.

### 19. Manufacturing method
Hardness testing is performed by the heat treater as part of their process control, and should be
verified at goods-inward on critical components. For a fixture shop, a **bench Rockwell tester** is a
worthwhile investment — it costs relatively little and allows incoming verification of every hardened
component rather than reliance on certificates alone `[PRACTICE]`.

A **hardened file set** for screening costs almost nothing and belongs in every fixture toolroom.

### 20. Inspection method
This lesson *is* the inspection method for material condition. To summarise the acceptance process:

```
1. Receive part + hardness certificate
2. Check the certificate: scale, range, location, method,
   individual readings (not just the mean), batch traceability
3. Verify by independent test on at least one part per batch
4. Test on the FUNCTIONAL surface, AFTER grinding
5. Take at least three readings; record the spread
6. Record the result in the fixture's quality file
```

Step 3 matters. Certificates are occasionally issued without the test being performed properly, and an
independent check on one part per batch is cheap insurance on components that determine the fixture's
whole working life.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | Specifying hardness **without a scale** | Ambiguous; "60" could be HRC, HV or HBW |
| 2 | Specifying a **single value** instead of a range | Unachievable; heat treater interprets it |
| 3 | Testing **before grinding** | Reads the decarburised skin; false low |
| 4 | Testing a part **too thin** for the scale | Anvil effect; false low |
| 5 | Accepting on the **mean** without checking individual readings | Out-of-spec parts pass |
| 6 | Specifying **HRC below 20** | Scale unreliable in that range |
| 7 | Specifying Brinell **above 450 HBW** | Ball deforms; invalid |
| 8 | Treating **conversions as exact** | A few percent error, decisive on marginal results |
| 9 | Using the tensile relationship for **non-steels** | Wrong by a wide margin |
| 10 | Not requiring a **certificate** | No evidence; problems surface in service |
| 11 | No **test location** specified | Tested wherever is convenient, possibly a non-functional face |
| 12 | Using a **file test for acceptance** | Not a measurement |
| 13 | Not checking the **spread** of readings | Process problems missed |
| 14 | Specifying case hardness without **core hardness** | Core condition uncontrolled |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Hardened part reads low | Decarburised skin | Re-test after grinding 0.3 mm | Grind, re-test | Specify testing after grinding |
| Thin part reads low | Anvil effect | Re-test with HR15N or HV | Use correct scale | Check t ≥ 10 × indentation depth |
| Certificate and your test disagree | Different scale, location or method | Compare both specifications | Re-test on the specified scale | Specify scale, location and method |
| Readings vary widely across a batch | Furnace control problem | Test several parts, record spread | Reject batch; discuss with treater | Require spread reporting |
| Curved surface reads inconsistently | No curvature correction | Test on a flat, or apply correction | Provide a flat test pad on the part | Design a test flat where practical |
| Part hard but wears anyway | Hardness fine, wrong wear mechanism | Examine the wear surface | Investigate abrasive contamination | Consider surface treatment (L0.5.5) |
| Locator soft in service | Never specified or never verified | File test then bench test | Replace; correct the drawing | Complete specification + certificate |

### 23. Design checklist
- [ ] Is hardness specified as a **range**?
- [ ] Is the **scale** stated (HRC / HBW / HV / Shore)?
- [ ] Is the scale **appropriate** to the material and hardness level?
- [ ] Is the **test location** specified?
- [ ] Is testing specified **after grinding**?
- [ ] Is the **test method and standard** cited?
- [ ] Is a **hardness certificate** required?
- [ ] Is the part thick enough for the chosen scale (**10× indentation depth**)?
- [ ] For case-hardened parts, are **case and core** both specified?
- [ ] For elastomer pads, is **Shore A with a tolerance** specified?
- [ ] Is the specified hardness **achievable** from the material's carbon content?
- [ ] Have I planned to check the **spread**, not just the mean?
- [ ] Is independent verification planned at **goods-inward**?

### 24. Beginner exercise
**E0.5.4-B** — For each component, state the hardness scale you would specify and give a typical value
or range with justification.
(a) An EN31 rest pad, hardened
(b) A grey cast iron fixture base, as cast
(c) A 0.8 mm hardened steel shim
(d) A polyurethane clamp pad
(e) An EN8 base plate, normalised
(f) A nitrided surface, 0.3 mm case

### 25. Intermediate exercise
**E0.5.4-I** — A hardness certificate for a batch of locators reports the following HV10 readings:
`612, 588, 645, 601, 559, 634`. The drawing specified 55–60 HRC.
(a) Convert each reading to HRC using the §6 table.
(b) State the mean and the spread.
(c) Determine whether the batch passes, examining individual readings.
(d) Comment on the process control indicated by the spread.
(e) Estimate the tensile strength from the mean HV.
(f) The heat treater argues the batch should be accepted because the mean is within specification.
Write your response.

### 26. Advanced exercise
**E0.5.4-A** — You are investigating premature wear on a production fixture after 14 months. The
fixture has 4 rest pads (specified EN31, 58–62 HRC) and 2 locating pins (specified EN19, 40–45 HRC).
Measured wear is 0.06 mm on the pads and 0.02 mm on the pins. Part tolerance on the affected feature is
±0.05 mm. Production is 3,000 parts per month.
(i) Assess whether the observed pad wear is acceptable against the tolerance, showing the reasoning.
(ii) Calculate the number of parts produced and the wear rate per 1,000 parts for each component.
(iii) Extrapolate to determine when the pads will have consumed the full tolerance band.
(iv) Design a hardness investigation: state the tests you would perform, in order, and what each would
tell you.
(v) The bench test returns 44 HRC on the pads. Using `HRC ≈ 30 + 50 × %C`, determine what carbon
content this implies and state what you conclude about the material supplied.
(vi) The material certificate says 100Cr6. Reconcile this with the hardness result and list three
possible explanations, stating how you would distinguish between them.
(vii) The pins test at 42 HRC, within specification, yet also show wear. Explain what this indicates
about the wear mechanism and what you would investigate next.
(viii) Write a corrective action plan covering the immediate fix, the root cause and the systemic
prevention.

### 27. Interview questions
1. *"How would you specify hardness for a locating pad, and why in that form?"*
   **Answer:** I would write `58-62 HRC`, tested on the ground locating face to ISO 6508, with a
   hardness certificate required. The range matters because heat treatment cannot hit an exact value —
   about ±2 HRC is the achievable band — so a single number gives the heat treater no acceptance
   window. The scale matters because "60" alone is ambiguous between HRC, HV and HBW, which differ by
   an order of magnitude. The test location matters because an as-hardened surface has a decarburised
   skin that reads low, so testing before grinding produces a false failure. And the certificate
   matters because hardness that is not verified is hardness you do not have — the most common root
   cause of worn locators I have seen is a drawing that just said "harden".
2. *"A certificate quotes 400 HV but your drawing says 40–45 HRC. Is it acceptable?"*
   **Answer:** 400 HV converts to approximately 40–41 HRC, so it is just inside the lower end of the
   range and technically acceptable. But I would note two things. First, it sits right at the bottom of
   the window, so I would ask the heat treater to aim mid-range on future batches to give both of us
   margin against process drift. Second, conversions carry a few percent uncertainty, which at this
   margin is comparable to the distance from the limit — so if the decision were genuinely marginal or
   the component critical, I would ask for a re-test on the specified scale rather than accept a
   converted value. I would also check that they reported individual readings rather than just a mean.

### 28. Expert questions
1. *"A locator is at the correct specified hardness and still wearing. What is happening?"*
   **Answer:** If the hardness is verified correct, then hardness is not the problem, and I would stop
   treating it as one. The question becomes: what wear mechanism is operating, and is it one that
   hardness even addresses?
   **Abrasive contamination** is the most likely answer in a machining environment. Swarf, grinding
   dust, or hard oxide scale from a casting trapped between the workpiece and the locator acts as a
   lapping compound. Silicon carbide and alumina abrasives are harder than any hardened steel, so
   raising the locator hardness from 60 to 62 HRC achieves nothing. The fix is cleanliness — air blast,
   chip guards, changing the loading sequence, or a wiper — not metallurgy.
   **The wrong wear mechanism for the treatment** is the second possibility. If the failure is actually
   **adhesive wear or galling**, a hard steel against a hard steel can gall badly. The answer there is a
   dissimilar material pair or a surface treatment that changes the tribology — nitriding, chrome
   plating or a DLC coating — rather than more hardness.
   **Contact stress exceeding the material's capability** is a third. If the contact pressure is high
   enough to plastically deform the surface locally, you get indentation rather than abrasion, and the
   remedy is a larger contact area, not a harder pad. I would calculate `p = F/A` and compare it to the
   material's compressive yield.
   **Fretting** is a fourth, and it is often misdiagnosed. Small oscillatory movement between two
   nominally clamped surfaces produces fretting damage that looks like wear but is caused by
   micro-motion. It indicates the clamping is inadequate or the part is vibrating, so the fix is in the
   clamping scheme.
   **Impact** rather than sliding is a fifth. If a heavy part is dropped onto the pad each cycle, a hard
   brittle pad can spall or chip. There, a slightly softer, tougher pad performs better — the opposite
   of the intuitive answer.
   So my investigation would be: examine the wear surface under magnification, because the appearance
   distinguishes these mechanisms clearly — abrasion gives directional scratching, adhesion gives
   tearing and material transfer, fretting gives a characteristic reddish oxide debris, indentation
   gives plastic flow with no material loss, impact gives spalling. **The surface tells you what
   happened.** Then fix the actual mechanism.
   The general lesson is that hardness is the answer to abrasive sliding wear specifically, and people
   apply it reflexively to every wear problem. Diagnosing the mechanism first is what distinguishes an
   engineer from a parts-changer.
2. *"Your organisation buys fixtures from three suppliers. Hardness problems keep appearing. How do you
   fix it systemically?"*
   **Answer:** Recurring problems across multiple suppliers point at **your specification and your
   incoming control**, not at the suppliers. Three independent organisations producing the same defect
   is a pattern, and patterns have common causes.
   I would start by **auditing our own drawings**, and I would expect to find the cause there. The
   characteristic failures are: hardness stated without a scale, single values instead of ranges, no
   test location, no test method, no certificate requirement, and hardness values that the specified
   material cannot achieve. Any of those makes a supplier guess, and three suppliers will guess three
   different ways. I would sample perhaps thirty drawings and categorise the defects, because that
   turns an opinion into evidence I can act on.
   Then I would fix it at the **template level**, not drawing by drawing. Mandatory title-block fields
   for material, treatment and hardness so they cannot be left blank. A standard notes library with
   correct pre-written hardness call-outs for our common components. That way the correct specification
   is the easy path, which is the only kind of standard that survives contact with a deadline.
   Then **incoming inspection**. A bench Rockwell tester is inexpensive against the cost of a single
   fixture failure. I would test one part per batch on every hardened component, record it, and trend
   it by supplier. That does two things: it catches problems before they reach production, and it
   generates the data that makes the supplier conversation factual rather than adversarial.
   Then **supplier engagement**. I would share the specification standard with all three, walk through
   what we require and why, and ask what in our documentation has been unclear — that question usually
   produces useful answers, because suppliers generally know where the ambiguities are and have been
   quietly guessing. I would ask for certificates with individual readings and a stated test location,
   not summary means.
   Then I would look for the **systemic gap that let it persist**, because a recurring problem needs
   both a cause and an absence of detection. Here the absence is almost certainly that nobody was
   verifying hardness at goods-inward, so failures only surfaced months later in production, by which
   time the connection to the specification was invisible. **Shortening the feedback loop is often more
   valuable than fixing the immediate defect**, because it makes every future problem self-correcting.
   Finally I would **measure whether it worked** — track hardness non-conformances per quarter, by
   supplier, and confirm the trend. Improvement initiatives that are not measured tend to quietly
   revert.

### 29. Summary
Hardness is measured by pressing an indenter into the surface under a known load and measuring the
indentation. Rockwell C measures depth with a diamond cone and is the workshop standard for hardened
steel; Brinell measures the width of a large ball impression and suits castings and soft steels but
becomes unreliable above about 450 HBW; Vickers measures the diagonal of a diamond pyramid impression,
provides one continuous scale for all materials, and is the reference method for case depth, which is
conventionally defined at 550 HV; Shore applies to elastomers and plastics. Conversions between scales
are approximate, and for steels tensile strength can be estimated as roughly 3.3 times the Vickers
number. A complete specification states a range rather than a single value, names the scale, names the
test location, cites the method, and requires a certificate — because heat treatment cannot hit an exact
number, "60" alone is ambiguous, and an as-hardened surface carries a soft decarburised skin that reads
low. The two traps that produce false soft readings are testing before grinding and testing a part
thinner than ten times the indentation depth.

### 30. Key takeaways
- **HRC for hardened steel · HBW for soft steel and castings · HV for thin cases and precision · Shore
  for elastomers.**
- Specify a **range** (±2 HRC is achievable `[PRACTICE]`), a **scale**, a **test location** and a
  **certificate**.
- **Test after grinding** — an as-hardened surface reads low from decarburisation.
- Part thickness must be at least **10× the indentation depth**, or the anvil gives a false low reading.
- **Check individual readings and the spread**, not just the mean.
- Conversions are **approximate**; re-test on the specified scale when a result is marginal.
- **`σ_UTS ≈ 3.3 × HV ≈ 3.4 × HBW`** for steels `[GUIDE]` — estimation only, never a design value.
- Landmarks `[GUIDE]`: mild steel ~150 HBW · EN8 ~200 HBW · EN19 H&T ~40 HRC · EN31 hardened ~60 HRC.
- Brinell is invalid above ~**450 HBW**; HRC is unreliable below ~**20**.
- **Hardness that is not specified completely and not verified is hardness you do not have.**

---

## LESSON L0.5.5 — SURFACE TREATMENTS AND CORROSION PROTECTION

### 1. Lesson title
**L0.5.5 — Blacking, plating, anodising, coatings and paint: protecting the fixture and identifying its parts**

### 2. Learning objective
By the end of this lesson you will be able to select an appropriate surface treatment for any fixture
component, understand the dimensional effect of each, specify treatments correctly on a drawing,
identify which surfaces must be masked, and apply colour coding as a functional design tool.

### 3. Prerequisites
L0.5.1, L0.5.3, L0.5.4.

### 4. Why the topic matters
A fixture lives in a hostile environment: flood coolant, swarf, water-based cleaners, oily hands, and
often an unheated workshop. Untreated mild steel rusts within days in those conditions. Rust on a
locating face is a dimensional error; rust on a sliding surface is a jammed mechanism; rust anywhere is
a fixture that looks neglected and gets treated accordingly.

But surface treatment also **adds thickness**, and that matters more than people expect. A hard chrome
plating of 25 µm on a Ø20 h6 locating pin — where the whole tolerance band is 13 µm — destroys the fit
entirely. Every treatment has a dimensional consequence that must be accounted for at the design stage,
either by masking the surface or by machining undersize.

There is a third reason, and it is the one experienced designers value most: **colour coding**. A
fixture where every clamp handle is red, every adjustable element is blue, and every "do not adjust"
element is black communicates its own operating instructions. That is Poka-Yoke thinking applied at the
paint stage, and it costs nothing.

### 5. Simple explanation
Bare steel rusts. Surface treatments stop that.

The common ones:
- **Blacking (oxide)** — turns the surface black. Cheap, adds almost no thickness, mild protection.
  The standard treatment for fixture parts.
- **Zinc plating** — a sacrificial coating, good protection, slightly thicker.
- **Hard chrome** — very hard and wear resistant, but thick enough to change dimensions.
- **Anodising** — for aluminium only. Makes a hard, coloured surface.
- **Paint** — for large structures. Thick, cheap, and can be coloured for identification.
- **Oil** — the simplest of all. Just wipe it on. Temporary but effective.

The important rules: don't put a coating on a precision surface unless you have allowed for its
thickness, and use colour to tell people what to touch and what not to touch.

### 6. Engineering explanation

**THE TREATMENTS**

**1. BLACK OXIDE (blacking, bluing)** `[STD — MIL-DTL-13924 / ISO 11408]`

| | |
|---|---|
| Process | Chemical conversion in hot alkaline nitrate solution |
| Thickness | **1–2 µm** `[GUIDE]` — essentially dimensionally neutral |
| Protection | **Mild** — requires oiling to be effective |
| Appearance | Matt to glossy black |
| Cost | **Low** |
| Fixture use | **The default for hardened steel fixture components** |

Black oxide is the workhorse. It does not change dimensions, it looks professional, it takes oil well
(the oil is what actually provides the corrosion protection), and it costs very little. Its limitation
is that protection is genuinely mild — a blacked part left wet will still rust.

**2. ZINC PLATING (electroplating)** `[STD — ISO 2081 / ASTM B633]`

| | |
|---|---|
| Process | Electrodeposition of zinc, usually with a passivate |
| Thickness | **5–25 µm** `[GUIDE]`, typically 8–12 µm for fixture work |
| Protection | **Good** — zinc is sacrificial, protecting steel even if scratched |
| Appearance | Bright, blue, yellow or black passivate |
| Cost | Low–moderate |
| Fixture use | Fasteners, brackets, non-precision components |
| **Caution** | **Hydrogen embrittlement** on hardened parts above ~40 HRC |

> **The hydrogen embrittlement trap.** Electroplating introduces hydrogen into the steel, and in
> hardened components above roughly 40 HRC this can cause delayed brittle fracture — the part fails
> hours or days later, apparently without cause. The remedy is a **de-embrittlement bake** at 190–220 °C
> for 4–24 hours within a few hours of plating `[STD — ASTM B850]`. If you specify zinc plating on a
> hardened part, **you must also specify the bake**.

**3. HARD CHROME PLATING** `[STD — ISO 6158 / AMS 2406]`

| | |
|---|---|
| Process | Electrodeposition of chromium |
| Thickness | **10–100 µm** `[GUIDE]`, typically 20–50 µm |
| Hardness | **850–1000 HV** `[GUIDE]` — harder than any hardened steel |
| Protection | Good; excellent wear resistance and low friction |
| Cost | High |
| Fixture use | Sliding surfaces, worn part reclamation, wear-critical locators |
| **Caution** | Significant thickness; hydrogen embrittlement; brittle and can chip |

Hard chrome is genuinely useful for **reclaiming worn parts** — a worn locator can be plated oversize
and ground back to size, which is often far cheaper than remaking it. For new parts it is usually
overkill unless the wear duty is severe.

**4. ELECTROLESS NICKEL** `[STD — ISO 4527 / ASTM B733]`

| | |
|---|---|
| Process | Chemical (no current) deposition of nickel-phosphorus |
| Thickness | **5–50 µm** `[GUIDE]`, and **highly uniform** |
| Hardness | 500 HV as plated, up to **900 HV after heat treatment** `[GUIDE]` |
| Protection | **Excellent** — better than zinc in most environments |
| Cost | Moderate–high |
| Fixture use | Complex geometry, internal surfaces, corrosion-critical parts |

The distinguishing feature is **uniformity**. Electroless nickel deposits to the same thickness on
internal bores, blind holes and sharp corners, where electroplating builds up on edges and thins in
recesses. For a complex fixture component where dimensional predictability matters, that is a
significant advantage — you can calculate the size change reliably.

**5. ANODISING (aluminium only)** `[STD — ISO 7599 / MIL-A-8625]`

| Type | Thickness | Hardness | Use |
|---|---|---|---|
| **Type II** (sulphuric, decorative) | 5–25 µm `[GUIDE]` | ~200–300 HV | General protection, **colour coding** |
| **Type III** (hard anodising) | 25–100 µm `[GUIDE]` | **400–600 HV** `[GUIDE]` | Wear surfaces on aluminium |

Anodising **grows into and out of** the surface — approximately half the thickness penetrates and half
builds up, so a 50 µm hard anodise increases a dimension by about 25 µm per surface `[GUIDE]`. On a
diameter that is 50 µm total, which matters.

Type II anodising takes **dye** readily, making it the natural choice for colour-coded aluminium
fixture components.

> **Hard anodising does not make aluminium a substitute for hardened steel.** The layer is hard but
> thin and brittle, sitting on a soft substrate. Under concentrated contact load it cracks and the
> substrate deforms beneath it. For locating surfaces, use steel inserts (L0.5.2 R4) — hard anodising
> is for general wear and abrasion, not for precision location under load.

**6. NITRIDING AS A SURFACE TREATMENT**

Covered in L0.5.3, but worth noting here as it competes with plating: nitriding gives 900–1200 HV with
essentially no dimensional change, excellent wear resistance and moderate corrosion resistance. Where
the material can be nitrided, it often beats plating on performance and dimensional predictability.

**7. PHOSPHATING (manganese / zinc phosphate)** `[STD — ISO 9717]`

| | |
|---|---|
| Thickness | 5–15 µm `[GUIDE]` |
| Protection | Mild alone; good as a **paint base** or oil retainer |
| Character | Porous — holds oil and lubricant well |
| Fixture use | Sliding surfaces (anti-galling), paint pretreatment |

Manganese phosphate is genuinely useful on **sliding steel-on-steel surfaces** because its porosity
retains oil and it reduces galling during initial running-in.

**8. PAINT AND POWDER COATING**

| | |
|---|---|
| Thickness | **50–150 µm** `[GUIDE]` — substantial |
| Protection | Good, if the surface preparation is good |
| Cost | Low for large areas |
| Fixture use | **Base frames, weldments, non-functional structure** |
| Essential | **Mask all machined and functional surfaces** |

Paint is the standard for large fabricated structures. The critical design consideration is masking —
paint on a locating face, a mating surface, or a threaded hole is a defect, and it is far easier to
mask before painting than to remove afterwards.

**9. OIL AND RUST PREVENTIVES**

The simplest treatment and often the most practical. A wipe of slushing oil or a spray of rust
preventive protects a fixture between production runs. It is not a specification you put on a drawing,
but it belongs in the **maintenance instruction** (L27).

**THE DIMENSIONAL EFFECT — THE CRITICAL DESIGN ISSUE**

| Treatment | Thickness per surface | Effect on a diameter | Precision impact |
|---|---|---|---|
| Black oxide | 1–2 µm | 2–4 µm | **Negligible** |
| Phosphate | 5–15 µm | 10–30 µm | Significant on close fits |
| Zinc plate | 8–12 µm typical | 16–24 µm | **Significant** |
| Electroless nickel | 5–50 µm | 10–100 µm | **Significant but uniform/predictable** |
| Hard chrome | 20–50 µm | 40–100 µm | **Severe** |
| Anodise Type II | 5–25 µm (half grows out) | 5–25 µm | Significant |
| Hard anodise Type III | 25–100 µm (half grows out) | 25–100 µm | **Severe** |
| Paint / powder | 50–150 µm | 100–300 µm | **Severe** |

Compare these with typical tolerance bands:
```
Ø20 h6   tolerance band = 13 µm
Ø20 h7   tolerance band = 21 µm
Ø20 H7/h6 fit clearance = 0 to 34 µm
```

> **A 25 µm hard chrome plating on a Ø20 h6 pin adds 50 µm to the diameter — nearly four times the
> entire tolerance band.** The part will not assemble.

**The three ways to handle it:**

```
1. MASK the precision surface
   → plating does not reach it
   → simplest, and the usual answer for locating faces

2. MACHINE UNDERSIZE by the expected build-up
   → plate to final size
   → requires accurate knowledge of the deposit thickness
   → practical with electroless nickel (uniform), risky with
     electroplating (edge build-up)

3. PLATE OVERSIZE AND GRIND BACK
   → the standard method for hard chrome
   → gives exact final size and a hard surface
   → most expensive, but the best result
```

**MASKING — WHAT MUST BE PROTECTED**

Always mask:
- **Locating faces and diameters** — any surface that positions the workpiece
- **Mating faces** — where components bolt together
- **Threaded holes** — plating fouls the thread
- **Dowel holes** — the fit is destroyed
- **Bearing and bush bores**
- **Ground surfaces** carrying a tight tolerance
- **Electrical earth points**, where present

The drawing must show this explicitly:
```
NOTE: BLACK OXIDE ALL OVER EXCEPT SURFACES MARKED 'X' —
      MASK BEFORE TREATMENT. NO COATING PERMITTED ON
      LOCATING FACES OR DOWEL HOLES.
```

**COLOUR CODING — SURFACE TREATMENT AS A DESIGN TOOL**

This is where surface treatment stops being protection and becomes function. A consistent colour scheme
turns a fixture into a self-documenting object.

A widely used convention `[PRACTICE] — establish and document your own organisational standard:`

| Colour | Meaning |
|---|---|
| **Red** | Clamping elements — operator touches these |
| **Blue** | Adjustable elements — set during setup, then locked |
| **Yellow** | Caution / pinch points / moving parts |
| **Green** | Locating elements — datum features |
| **Black** | Fixed structure — do not adjust |
| **Orange** | Loading position indicators, part orientation |
| **Silver / natural** | Precision ground surfaces (uncoated) |

The value is operational. An operator approaching an unfamiliar fixture can see immediately what to
touch. A maintenance technician can see what is adjustable. An auditor can see the datum features.
None of it requires reading a document.

> This is genuinely **Poka-Yoke at zero cost** (L28). The paint is being applied anyway; choosing the
> colour deliberately adds nothing to the price and removes a whole class of operator error.

**Practical implementation:** colour-code by **anodised aluminium components** (Type II takes dye
brilliantly), by **painted handles and knobs**, or simply by using coloured commercial clamp handles,
which most suppliers offer in a range of colours at no premium `[MFR]`.

**SELECTING A TREATMENT**

```
Is the surface a PRECISION LOCATING surface?
├─ YES ─► MASK IT. Leave uncoated, oil it, or nitride.
└─ NO ──► Is it a WEAR / SLIDING surface?
          ├─ YES ─► hard chrome, nitride, or
          │         manganese phosphate (anti-galling)
          └─ NO ──► Is it a LARGE STRUCTURE?
                    ├─ YES ─► PAINT (mask machined faces)
                    └─ NO ──► Is corrosion protection critical?
                              ├─ YES ─► zinc plate or
                              │         electroless nickel
                              │         (+ bake if hardened)
                              └─ NO ──► BLACK OXIDE + oil
                                        (the default)
```

### 7. Terminology

| Term | Definition |
|---|---|
| **Black oxide** | Chemical conversion coating giving a black finish |
| **Passivate** | Chromate or equivalent post-treatment on zinc |
| **Sacrificial coating** | Coating that corrodes preferentially, protecting the substrate |
| **Hydrogen embrittlement** | Delayed brittle fracture from hydrogen absorbed during plating |
| **De-embrittlement bake** | Post-plating heat treatment to drive off hydrogen |
| **Electroless** | Chemical deposition without electric current; uniform thickness |
| **Anodising** | Electrochemical oxide growth on aluminium |
| **Type II / Type III** | Decorative / hard anodising |
| **Phosphating** | Porous conversion coating; oil retention and paint base |
| **Masking** | Protecting surfaces from treatment |
| **Build-up** | Increase in dimension caused by a coating |
| **Slushing oil** | Temporary rust preventive |
| **Colour coding** | Using colour to convey function |

### 8. Principle

> **EVERY COATING ADDS THICKNESS — AND A PRECISION SURFACE CANNOT AFFORD IT.**
> A 25 µm chrome plate adds 50 µm to a diameter, nearly four times the entire tolerance band of a
> Ø20 h6 fit. **Mask precision surfaces, machine undersize, or plate and grind back.**
> **Black oxide plus oil is the default** for fixture components: dimensionally neutral, cheap,
> professional.
> **Zinc plating on hardened steel above ~40 HRC requires a de-embrittlement bake** `[STD]` — omitting
> it risks delayed brittle fracture.
> **Colour coding is Poka-Yoke at zero cost.** The paint is being applied anyway; choose the colour
> deliberately.

### 9. Industrial application

**The treatment schedule for a typical fixture**

```
ITEM                        TREATMENT                THICKNESS
────────────────────────────────────────────────────────────────
Base plate (machined)       Black oxide, mask         1-2 µm
                            locating faces
Riser blocks                Black oxide               1-2 µm
Rest pads (ground)          NONE — ground, oiled      0
Locating pins (ground h6)   NONE — ground, oiled      0
Clamp arms                  Black oxide               1-2 µm
Clamp handles               Red (bought coloured)     —
Adjustable stops            Blue anodised (alum.)     10 µm
Welded base frame           Painted RAL 9005 black,   80 µm
                            mask all machined faces
Fasteners                   Zinc plated (bought)      8 µm
Dowels                      NONE (bought, ground)     0
Sliding wear strip          Manganese phosphate       10 µm
────────────────────────────────────────────────────────────────
```

Note the pattern: **precision surfaces get nothing**, structure gets black oxide or paint, and function
is signalled by colour. That is the normal and correct arrangement.

**Reclaiming a worn locator with hard chrome — a genuinely useful technique**

A hardened locating block has worn 0.08 mm on its locating face over five years. Options:

| Option | Cost | Lead time | Result |
|---|---|---|---|
| Remake from new | High — full machining + heat treatment | Long | New part |
| **Hard chrome and regrind** | **Moderate** | Moderate | **Original part, harder surface than before** |
| Shim behind it | Low | Immediate | Works if geometry permits; a stack-up risk |
| Weld and remachine | Moderate | Moderate | Distortion risk; changes the metallurgy |

Hard chroming and regrinding is frequently the best answer for a large or complex worn component,
because the plating can be applied 0.2 mm thick and ground back to exact size, and the resulting chrome
surface at 850–1000 HV is **harder than the original hardened steel**. For a big locator block or a
tombstone face, this can save most of the cost of replacement.

**Colour coding in practice — what it prevents**

```
WITHOUT COLOUR CODING          WITH COLOUR CODING

Operator sees 14 similar       RED   = the two clamp handles
steel handles and screws.      BLUE  = the setup adjusters
Which are clamps?              GREEN = the locators
Which must not be touched?     BLACK = everything fixed

Result: adjusters moved by     Result: unambiguous. The
mistake, fixture out of        fixture explains itself.
calibration, scrap.
```

The failure this prevents — an operator adjusting a setup screw that should never be touched — is
common, costly, and entirely a design failure rather than an operator failure. Making the two
categories visually distinct removes the ambiguity that caused it.

### 10. Design rules
- **R1** — **Mask every precision locating surface.** Coatings do not belong on datum features.
- **R2** — Account for **coating thickness** in every dimension that carries a coating.
- **R3** — Use **black oxide plus oil** as the default for machined steel fixture components.
- **R4** — Specify a **de-embrittlement bake** whenever plating steel above ~40 HRC `[STD]`.
- **R5** — Use **hard chrome or nitride** for sliding and wear surfaces, not for locating surfaces.
- **R6** — Use **electroless nickel** where geometry is complex and uniform thickness matters.
- **R7** — For aluminium, use **Type II anodising for protection and colour**, Type III for wear — and
  still use **steel inserts** for locating.
- **R8** — **Paint large fabricated structures** and mask all machined faces, threads and dowel holes.
- **R9** — Use **manganese phosphate** on sliding steel-on-steel surfaces to reduce galling.
- **R10** — Establish and document a **colour coding standard** and apply it consistently.
- **R11** — State masking requirements **explicitly on the drawing** with marked surfaces.
- **R12** — Include **oiling and rust prevention** in the maintenance instruction, not the drawing.
- **R13** — Where a worn part must be reclaimed, consider **hard chrome and regrind** before remaking.

### 11. Rules of thumb
- **Black oxide 1–2 µm** — dimensionally negligible. **Zinc 8–12 µm. Hard chrome 20–50 µm. Paint
  50–150 µm** `[GUIDE]`.
- A coating on a **diameter** adds **twice** its thickness to the size.
- Ø20 h6 has a **13 µm** total tolerance band — smaller than most coatings.
- **Anodising grows about half in, half out** — a 50 µm hard anodise adds ~25 µm per surface `[GUIDE]`.
- **Plate above 40 HRC → bake** `[STD]`.
- **Ground precision surfaces get no coating** — oil them instead.
- Electroless nickel is **uniform**; electroplating **builds up on edges** and thins in recesses.
- Hard chrome at **850–1000 HV is harder than any hardened steel** `[GUIDE]` — excellent for reclaiming
  worn parts.
- **Colour coding costs nothing** and prevents a whole class of operator error.

### 12. Formulae

**Dimensional effect of a coating**
```
Change on a flat surface   :  Δ = t
Change on a diameter       :  Δ = 2t
Change on a bore           :  Δ = −2t        (bore gets smaller)
Anodising on a diameter    :  Δ ≈ t          (half grows inward)
```

**Pre-plate machining size**
```
d_machined = d_final − 2t          (external, to plate to size)
D_machined = D_final + 2t          (internal bore)
```

**Plate-and-grind allowance**
```
t_deposit ≥ (wear to be recovered) + (grinding stock) + (safety margin)
```

| Variable | Meaning | Unit |
|---|---|---|
| t | Coating thickness per surface | µm or mm |
| d | External diameter | mm |
| D | Internal diameter | mm |
| Δ | Dimensional change | µm or mm |

### 13. Worked numerical example

**Problem:** A fixture has three components requiring surface treatment decisions. Evaluate the
dimensional consequences and specify each correctly.

```
GIVEN:
  Component A : Locating pin, Ø20 h6, hardened EN31 58-62 HRC,
                ground. Proposed: zinc plate for corrosion
                protection.                                  [PROJ]
  Component B : Worn locator block face, worn 0.08 mm below
                nominal. EN31, originally 58-62 HRC.
                Proposed: hard chrome and regrind.           [PROJ]
  Component C : Welded S275 base frame, 900 × 600 mm, with
                4 machined mounting pads and 12 M12 tapped
                holes. Proposed: powder coat.                [PROJ]
  Ø20 h6 tolerance      = 0 to −0.013 mm                     [STD]
  Zinc plating thickness = 8-12 µm per surface               [GUIDE]
  Hard chrome thickness  = 20-50 µm typical; up to 200 µm
                           for reclamation                   [GUIDE]
  Powder coat thickness  = 50-150 µm                         [GUIDE]
  Hard chrome hardness   = 850-1000 HV                       [GUIDE]
  De-embrittlement bake required above 40 HRC                [STD]
  Grinding stock for chrome regrind = 0.05 mm                [PRACTICE]

REQUIRED:
  (a) Dimensional effect of zinc plating component A
  (b) Assessment against the h6 tolerance
  (c) Recommendation for component A
  (d) Chrome deposit thickness required for component B
  (e) Hardness comparison for component B before and after
  (f) Masking schedule for component C
  (g) Engineering assessment

ASSUMPTION:
  1. Zinc plating thickness taken as 10 µm nominal per
     surface (mid-range of 8-12). Actual thickness varies
     with process control and MUST BE CONFIRMED with the
     plater. [GUIDE]
  2. Hard chrome deposits are ground back to final size, so
     the deposit must exceed the wear plus grinding stock.
  3. Powder coat 100 µm nominal. [GUIDE]
  4. Component B geometry permits regrinding without
     affecting other features.
  5. The h6 tolerance is from ISO 286. [STD]

FORMULA:
  (a) Δ_diameter = 2 × t
  (d) t_deposit ≥ wear + grinding stock + margin
  Pre-plate size: d_machined = d_final − 2t

VARIABLE DEFINITIONS:
  As tabulated in §12 above.

UNIT CONVERSION:
  10 µm = 0.010 mm
  h6 band = 0.013 mm = 13 µm

SUBSTITUTION AND CALCULATION:

  (a) ZINC PLATING ON COMPONENT A

      Thickness per surface  t = 10 µm
      Effect on diameter     Δ = 2 × 10 = 20 µm = 0.020 mm

  (b) ASSESSMENT AGAINST h6

      Ø20 h6 tolerance zone:
        Upper limit = 20.000 mm
        Lower limit = 19.987 mm
        Total band  = 0.013 mm = 13 µm

      Plating build-up on diameter = 20 µm

      Ratio = 20 / 13 = 1.54

      → THE PLATING ALONE IS 1.54 TIMES THE ENTIRE
        TOLERANCE BAND.

      A pin ground to 19.994 mm (mid-tolerance) would
      become:
        19.994 + 0.020 = 20.014 mm
      → 14 µm ABOVE the upper limit. The pin would not
        enter its mating hole.

      Additional concern:
        Component hardness 58-62 HRC is well above the
        40 HRC threshold → HYDROGEN EMBRITTLEMENT RISK.
        A de-embrittlement bake would be mandatory.

  (c) RECOMMENDATION FOR COMPONENT A

      Option 1  Mask the Ø20 diameter, plate the rest
                → the diameter is the whole functional
                  surface, so almost nothing gets plated.
                  Pointless.

      Option 2  Grind undersize by 20 µm, plate to size
                → target 19.974 mm before plating.
                  Requires plating thickness control to
                  better than ±3 µm to stay within a 13 µm
                  band. NOT RELIABLY ACHIEVABLE with
                  electroplating, which varies and builds
                  up at edges.

      Option 3  NO PLATING. Ground finish, oiled.
                → dimensionally exact, no embrittlement
                  risk, no cost. Corrosion managed by
                  oiling in the maintenance schedule.

      Option 4  NITRIDE instead
                → 900+ HV, negligible dimensional change,
                  good corrosion resistance, no hydrogen.
                  More expensive but technically excellent.

      → RECOMMEND OPTION 3 for a standard pin, OPTION 4 if
        the environment is genuinely corrosive.
        REJECT the zinc plating proposal.

  (d) CHROME DEPOSIT FOR COMPONENT B

      Wear to recover           = 0.080 mm
      Grinding stock            = 0.050 mm
      Safety margin (say 30 %)  = 0.039 mm
      ─────────────────────────────────────
      Minimum deposit           = 0.169 mm
      → specify 0.20 mm deposit, grind back to nominal

      Check: after grinding, remaining chrome thickness
        = 0.200 − 0.050 − 0.080(recovered as size)
      More usefully: the deposit fills the 0.080 mm of
      wear and leaves 0.120 mm proud, of which 0.050 mm
      is ground off... 

      Restating clearly:
        Surface is currently 0.080 mm BELOW nominal.
        Deposit 0.200 mm → surface now 0.120 mm ABOVE
        nominal.
        Grind off 0.120 mm → surface at nominal.
        Remaining chrome layer = 0.200 − 0.120
                               = 0.080 mm
      → A 0.080 mm chrome layer remains. Well within the
        10-100 µm normal range, and thick enough to be
        durable. ✓

  (e) HARDNESS COMPARISON, COMPONENT B

      Original EN31 hardened  : 58-62 HRC
        From the L0.5.4 table, 60 HRC ≈ 697 HV
      Hard chrome surface     : 850-1000 HV [GUIDE]

      Improvement ratio = 925 / 697 = 1.33 (using midpoints)

      → THE RECLAIMED SURFACE IS ABOUT 33 % HARDER THAN
        THE ORIGINAL. The repair produces a better part
        than new.

  (f) MASKING SCHEDULE, COMPONENT C

      Powder coat 100 µm on a diameter or a mating face
      would be a severe defect. Mask:

      ┌────────────────────────────────────────────────┐
      │ MASK BEFORE POWDER COATING:                    │
      │  1. 4 × machined mounting pads (full face)     │
      │  2. 12 × M12 tapped holes (thread + counter-   │
      │     bore face)                                 │
      │  3. Any dowel holes                            │
      │  4. Datum pick-up feature (if fitted)          │
      │  5. Earth bonding point (if fitted)            │
      │ COAT: all other external surfaces              │
      └────────────────────────────────────────────────┘

      Consequence if the mounting pads were coated:
        100 µm of powder coat under each pad, and powder
        coat is COMPRESSIBLE. The fixture would settle
        unevenly over time as the coating crept under
        bolt load — producing an unexplained drift in
        fixture level. This is a real and frequently
        encountered failure.

RESULT:
  ┌──────┬─────────────────────────┬──────────────────────┐
  │ Item │ Proposal                │ Assessment           │
  ├──────┼─────────────────────────┼──────────────────────┤
  │  A   │ Zinc plate Ø20 h6 pin   │ ✗ REJECT — 20 µm on  │
  │      │                         │ a 13 µm band (1.54×) │
  │      │                         │ + embrittlement risk │
  │      │ → Ground + oiled, or    │ ✓ RECOMMEND          │
  │      │   nitrided              │                      │
  ├──────┼─────────────────────────┼──────────────────────┤
  │  B   │ Hard chrome + regrind   │ ✓ APPROVE            │
  │      │ Deposit 0.20 mm         │ 0.08 mm chrome       │
  │      │                         │ remains after grind  │
  │      │                         │ 33 % harder than new │
  ├──────┼─────────────────────────┼──────────────────────┤
  │  C   │ Powder coat             │ ✓ APPROVE WITH       │
  │      │                         │ MASKING SCHEDULE     │
  └──────┴─────────────────────────┴──────────────────────┘

SAFETY FACTOR:
  Component B: a 30 % margin was added to the chrome
  deposit calculation, giving 0.20 mm against a bare
  minimum of 0.13 mm. Chrome deposition thickness varies
  across a surface, so this margin is genuinely needed —
  an under-deposited area would grind through to bare
  steel, leaving a soft patch on the locating face.

PASS/FAIL:
  A ✗ FAIL as proposed — plating incompatible with an h6
    tolerance
  B ✓ PASS — deposit adequate with margin
  C ✓ PASS subject to the masking schedule being applied

ENGINEERING CONCLUSION:
  THREE COMPONENTS, THREE DIFFERENT ANSWERS, AND THE
  DECIDING FACTOR IN EACH CASE WAS THICKNESS RELATIVE TO
  TOLERANCE.

  1. COMPONENT A IS THE CLASSIC ERROR.
     Zinc plating is a sensible, cheap corrosion treatment,
     and specifying it on a precision ground pin seems
     harmless. But 20 µm on the diameter against a 13 µm
     tolerance band means the plating alone is one and a
     half times the entire permitted variation. The pin
     simply will not fit. And at 58-62 HRC there is a
     hydrogen embrittlement risk on top, requiring a bake
     that adds cost and another process step.
     THE RIGHT ANSWER IS USUALLY THE SIMPLEST ONE:
     precision ground surfaces get no coating. They get
     oil, and the oil goes in the maintenance instruction.
     If the environment genuinely demands more, nitriding
     gives hardness and corrosion resistance with
     essentially no dimensional change and no hydrogen.

  2. COMPONENT B IS THE TECHNIQUE WORTH KNOWING.
     A worn locator block would normally be remade — full
     material cost, full machining, heat treatment, and
     lead time. Hard chroming 0.20 mm and grinding back to
     nominal recovers the original part, and because chrome
     runs at 850-1000 HV against the original 697 HV, THE
     REPAIRED PART IS ABOUT A THIRD HARDER THAN IT WAS WHEN
     NEW. For a large or complex component this is often
     the best answer on cost, lead time and performance
     simultaneously, which is unusual.
     The 30 % margin on the deposit is not optional —
     chrome thickness varies across a surface, and grinding
     through to bare steel would leave a soft patch exactly
     where the wear resistance is needed.

  3. COMPONENT C SHOWS THAT THE COATING IS EASY AND THE
     MASKING IS THE ENGINEERING.
     Powder coating a base frame is routine. The design
     content is entirely in the masking schedule. 100 µm of
     compressible powder coat under a mounting pad is a
     genuine failure mode: the coating creeps under bolt
     load over weeks, the fixture settles unevenly, and the
     resulting drift in fixture level is very difficult to
     diagnose because nothing appears to have changed.
     Similarly, coated threads will not accept a bolt, and
     a coated dowel hole destroys the location.
     THE MASKING SCHEDULE IS A DELIVERABLE, NOT A DETAIL.
     It belongs on the drawing with the surfaces explicitly
     marked.

  RECOMMENDATION: Reject zinc plating on component A;
  specify ground and oiled, with nitriding as an option if
  the environment warrants. Approve hard chrome at 0.20 mm
  with regrind for component B. Approve powder coating for
  component C subject to the five-item masking schedule
  being shown on the drawing.

SENSITIVITY NOTE:
  Ranked by influence on whether a coating is viable:
    1. TOLERANCE BAND OF THE SURFACE — an h6 fit cannot
       accept any plating; a general ISO 2768-m surface at
       ±0.2 mm can accept almost anything.
    2. COATING THICKNESS — spans 1 µm (black oxide) to
       150 µm (powder coat), a factor of 150.
    3. WHETHER THE SURFACE IS FUNCTIONAL — masking removes
       the problem entirely and is usually the cheapest fix.
    4. SUBSTRATE HARDNESS — above 40 HRC, plating brings an
       embrittlement requirement that may make it not worth
       the trouble.
  Note that BLACK OXIDE at 1-2 µm is viable on almost every
  surface, which is precisely why it is the default.
```

### 14. Engineering assumptions
- Zinc plating 10 µm nominal per surface `[GUIDE]` — must be confirmed with the plater.
- Hard chrome deposits ground back to final size.
- Powder coat 100 µm nominal `[GUIDE]`.
- Component B geometry permits regrinding without affecting other features.
- h6 tolerance from ISO 286 `[STD]`.
- 30% safety margin on the chrome deposit to allow for thickness variation.

### 15. Diagram

```
     SURFACE TREATMENTS — THICKNESS IS THE DESIGN ISSUE
     (instructional schematic)

  THICKNESS SCALE — AGAINST A REAL TOLERANCE BAND

   µm  0    10    25    50    100   150
       ├────┼─────┼─────┼─────┼─────┤
  Black oxide  ▌                          1-2 µm
  Phosphate    ███                        5-15
  Zinc plate    ████                      8-25
  Electroless N ████████████              5-50
  Hard chrome     ████████████            20-100
  Anodise II    ██████                    5-25
  Hard anodise    ████████████████        25-100
  Paint/powder        ████████████████    50-150

  ◄── Ø20 h6 TOLERANCE BAND = 13 µm ──►
      ██

   ┌────────────────────────────────────────────────┐
   │ A 25 µm CHROME PLATE ADDS 50 µm TO A DIAMETER  │
   │ — nearly FOUR TIMES the entire h6 band.        │
   │ Coatings on precision surfaces do not work.    │
   └────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  COATING ON A DIAMETER — IT COUNTS TWICE

           t                    t
        ├──┤                 ├──┤
     ░░░░████████████████████████░░░░
        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     ░░░░████████████████████████░░░░
        ├────────── d + 2t ──────────┤

     Δ_diameter = 2 × t        (external)
     Δ_bore     = −2 × t       (bore gets SMALLER)
     Anodising  ≈ 1 × t        (half grows inward)

  ──────────────────────────────────────────────────────────

  THE THREE WAYS TO HANDLE BUILD-UP

  1. MASK IT                2. MACHINE UNDERSIZE
     ▓▓▓╔═════╗▓▓▓             ░░░░░░░░░  plate to size
     ▓▓▓║ NO  ║▓▓▓             ▓▓▓▓▓▓▓▓▓  d − 2t before
     ▓▓▓║COAT ║▓▓▓             needs tight thickness
        ╚═════╝                control — risky with
     simplest, usual           electroplating
     answer

  3. PLATE OVERSIZE AND GRIND BACK
     ░░░░░░░░░░░░░  0.20 mm chrome deposited
     ▓▓▓▓▓▓▓▓▓▓▓▓▓
          ↓ grind
     ░░░░░░░░░░░░░  0.08 mm chrome remains, EXACT size
     ▓▓▓▓▓▓▓▓▓▓▓▓▓
     best result — the standard method for hard chrome
     and for RECLAIMING WORN PARTS

  ──────────────────────────────────────────────────────────

  RECLAIMING A WORN LOCATOR — THE USEFUL TECHNIQUE

    WORN            CHROMED           GROUND BACK
    ▓▓▓╲___╱▓▓▓     ░░░░░░░░░░░       ░░░░░░░░░░░
    0.08 mm low     +0.20 mm          at NOMINAL
                                      0.08 mm chrome left

    Original EN31 : 697 HV (60 HRC)
    Chrome surface: 850-1000 HV
    → THE REPAIRED PART IS ~33 % HARDER THAN NEW

  ──────────────────────────────────────────────────────────

  MASKING — WHAT MUST NEVER BE COATED

     ✗ locating faces and diameters
     ✗ mating / bolting faces
     ✗ threaded holes
     ✗ dowel holes
     ✗ bearing and bush bores
     ✗ tight-tolerance ground surfaces
     ✗ earth bonding points

     WHY IT MATTERS — the compressible coating trap:
        100 µm powder coat under a mounting pad
        → creeps under bolt load over weeks
        → fixture settles unevenly
        → unexplained drift in fixture level
        → very hard to diagnose

  ──────────────────────────────────────────────────────────

  COLOUR CODING — POKA-YOKE AT ZERO COST

     RED     ► clamping — operator touches these
     BLUE    ► adjustable — set at setup, then lock
     YELLOW  ► caution, pinch points, moving parts
     GREEN   ► locating elements / datum features
     BLACK   ► fixed structure — DO NOT ADJUST
     ORANGE  ► part orientation / loading position
     SILVER  ► precision ground, uncoated

     ┌────────────────────────────────────────────────┐
     │ The paint is being applied anyway.             │
     │ CHOOSING THE COLOUR DELIBERATELY COSTS NOTHING │
     │ and removes a whole class of operator error.   │
     │                                                │
     │ A colour-coded fixture explains itself.        │
     └────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────

  THE DEFAULT, AND WHY

     BLACK OXIDE + OIL
       1-2 µm  → dimensionally negligible
       cheap   → costs very little
       looks professional
       takes oil well (the oil does the protecting)

     ⚠ ZINC PLATE ABOVE 40 HRC → HYDROGEN EMBRITTLEMENT
       Specify a DE-EMBRITTLEMENT BAKE 190-220 °C
       within a few hours of plating. [STD]
       Omit it and the part may fracture days later
       with no apparent cause.
```

### 16. Drawing example
Surface treatment and masking, specified completely:

```
┌────────────────────────────────────────────────────────┐
│ PART NAME : BASE FRAME WELDMENT          ITEM No. 1    │
│ QTY : 1                                  DWG: F1042-01 │
├────────────────────────────────────────────────────────┤
│ MATERIAL  : S275JR TO EN 10025-2                       │
│ TREATMENT : STRESS RELIEVE 600°C AFTER WELDING         │
│ FINISH    : POWDER COAT RAL 9005 BLACK, 80-120 µm      │
├────────────────────────────────────────────────────────┤
│ NOTES:                                                 │
│ 1. MASK BEFORE COATING — NO COATING PERMITTED ON:      │
│    a) 4 × MOUNTING PADS, SURFACES MARKED 'M'           │
│    b) 12 × M12 TAPPED HOLES AND COUNTERBORE FACES      │
│    c) 2 × Ø10 H7 DOWEL HOLES                           │
│    d) DATUM PICK-UP BORE, SURFACE MARKED 'D'           │
│ 2. MASKED SURFACES TO BE OILED AFTER MACHINING.        │
│ 3. FINISH MACHINE MOUNTING PADS AFTER STRESS RELIEF    │
│    AND AFTER COATING.                                  │
│ 4. GENERAL TOLERANCE ISO 2768-mK.                      │
└────────────────────────────────────────────────────────┘
        FOR TRAINING ONLY — NOT FOR MANUFACTURE
```

Note 3 is the elegant solution: rather than relying on masking accuracy for the critical mounting pads,
machine them **after** coating. That guarantees a clean, flat, coating-free surface and removes any
dependence on the coater's masking quality.

### 17. CAD workflow
Not primarily a CAD topic. Two practical notes:

1. **Use appearances to communicate colour coding** in the CAD assembly. If clamps are red and
   adjusters are blue in the model, the 3D view becomes a visual assembly and operating aid, and the
   colour scheme is settled before anything is made.
2. **Do not model coating thickness.** Model the finished nominal geometry; the coating is a
   manufacturing instruction in the notes. Modelling a 10 µm layer clutters the model and breaks mates
   for no benefit.

### 18. GD&T application
Not applicable directly. One important interaction, which mirrors the L0.5.3 note: **a geometric
tolerance applies to the finished surface, including any coating**, unless the drawing states
otherwise. So a flatness of 0.02 mm on a powder-coated surface is a requirement on the coating, not on
the steel — and powder coating cannot hold 0.02 mm flatness. Either mask the surface, machine after
coating, or state that the tolerance applies before coating. `ISO 1101` and `ASME Y14.5` both take the
finished surface as the toleranced feature by default `[STD]`.

### 19. Manufacturing method
Surface treatment is almost always **subcontracted**, and the practical considerations mirror heat
treatment:
- **Lead time** — typically 2–5 working days `[PRACTICE]`; build it into the schedule
- **Sequence** — treatment goes **after** all machining and heat treatment, and **before** final
  assembly
- **Masking** must be communicated clearly; supply a marked drawing, not a verbal instruction
- **Batch parts** to reduce cost
- **De-embrittlement bake** must follow plating within a few hours `[STD]` — confirm the plater does it

The one exception to "treatment last" is note 3 in §16: machining critical faces **after** coating,
which guarantees a clean surface.

### 20. Inspection method
- **Thickness** — measured with a magnetic or eddy-current coating thickness gauge, non-destructively.
  Specify thickness as a range and verify it.
- **Adhesion** — cross-hatch tape test for paint and powder `[STD — ISO 2409]`.
- **Corrosion resistance** — salt spray test to ISO 9227 where specified `[STD]`; unusual for fixtures
  but standard in automotive supply.
- **Masking** — visual inspection at goods-inward. Check every masked surface. This takes two minutes
  and catches the most common defect.
- **Colour** — verify against the specified RAL number, not against a description.

### 21. Common mistakes

| # | Mistake | Consequence |
|---|---|---|
| 1 | **Coating a precision locating surface** | Fit destroyed; part will not assemble |
| 2 | Forgetting that a coating counts **twice on a diameter** | Build-up double the expectation |
| 3 | **Plating hardened steel without a de-embrittlement bake** | Delayed brittle fracture |
| 4 | Powder coat under a **mounting pad** | Coating creeps under bolt load; fixture drifts |
| 5 | **Coated threads** | Bolts will not engage |
| 6 | Coated **dowel holes** | Location destroyed |
| 7 | No masking schedule on the drawing | Coater coats everything |
| 8 | Assuming hard anodising makes aluminium a locating surface | Thin brittle layer over a soft substrate; fails |
| 9 | Applying a geometric tolerance to a coated surface unintentionally | Unachievable specification |
| 10 | Not colour coding | Operator adjusts what should not be adjusted |
| 11 | Using electroplating where uniform thickness matters | Edge build-up, recess thinning |
| 12 | Relying on black oxide alone for corrosion protection | It needs oil to be effective |
| 13 | Not allowing treatment lead time | Project delay |
| 14 | Specifying colour by description rather than RAL number | Wrong shade delivered |

### 22. Troubleshooting

| Symptom | Possible cause | Test | Corrective action | Preventive action |
|---|---|---|---|---|
| Pin will not enter its hole after treatment | Coating build-up | Measure the diameter | Strip and remake, or grind | Mask precision surfaces |
| Fixture level drifts over weeks | Powder coat creeping under mounting pads | Check pad surfaces for coating | Strip coating from pads; remachine | Mask or machine after coating |
| Hardened part fractured with no load event | Hydrogen embrittlement | Examine fracture surface | Replace; ensure bake | Specify bake above 40 HRC |
| Bolts will not engage | Threads coated | Inspect the threads | Chase the threads | Mask all tapped holes |
| Rust despite black oxide | Not oiled | Inspect and check maintenance record | Oil; add to maintenance schedule | Black oxide requires oil |
| Coating thin in recesses | Electroplating throwing power | Measure thickness in several places | Use electroless nickel | Choose electroless for complex geometry |
| Hard anodised locator worn through | Thin layer over soft substrate | Inspect the wear area | Fit steel insert | Never locate on anodised aluminium |
| Operator adjusted a fixed element | No colour coding | Observe the fixture | Colour code; add a lock | Apply the colour standard |

### 23. Design checklist
- [ ] Have I identified every **precision surface** and specified masking?
- [ ] Have I accounted for coating thickness — **twice on a diameter**?
- [ ] Is the coating thickness **compatible with the tolerance band**?
- [ ] For hardened parts above 40 HRC, is a **de-embrittlement bake** specified?
- [ ] Are all **threaded holes and dowel holes** masked?
- [ ] Are **mounting and mating faces** masked, or machined after coating?
- [ ] Is the masking schedule shown **explicitly on the drawing** with marked surfaces?
- [ ] For complex geometry, have I considered **electroless nickel** for uniformity?
- [ ] For aluminium locating surfaces, have I specified **steel inserts** rather than relying on
      anodising?
- [ ] Do any **geometric tolerances** unintentionally apply to a coated surface?
- [ ] Have I applied the organisation's **colour coding standard**?
- [ ] Is colour specified by **RAL number**?
- [ ] Is **oiling** included in the maintenance instruction?
- [ ] Is treatment **lead time** in the project schedule?

### 24. Beginner exercise
**E0.5.5-B** — For each component, state the surface treatment you would specify and explain in one
sentence why.
(a) A hardened EN31 rest pad, ground locating face
(b) A mild steel clamp arm
(c) A large welded base frame
(d) An aluminium adjustable stop that must be visually distinct
(e) A steel-on-steel sliding wear strip
(f) A Ø12 h6 hardened dowel-located pin

### 25. Intermediate exercise
**E0.5.5-I** — A Ø25 H7 bore in a steel bush is to be zinc plated at 12 µm per surface. The H7
tolerance for Ø25 is 0 to +0.021 mm.
(a) Calculate the dimensional change to the bore.
(b) Determine the bore size before plating if the finished size is to be Ø25.010 mm.
(c) State whether the plating build-up is compatible with the H7 tolerance band, showing the ratio.
(d) The bush is hardened to 55 HRC. State the additional process requirement and why.
(e) Propose two alternatives to zinc plating and evaluate each.
(f) Write the drawing note for your recommended solution.

### 26. Advanced exercise
**E0.5.5-A** — A tombstone fixture for an HMC is being designed for a foundry environment: high
humidity, abrasive dust, water-based coolant, and a 10-year expected life. It comprises:
```
A  Cast iron tombstone body, 600 × 600 × 1200 mm
B  16 × EN31 locating pads, ground, 58-62 HRC
C  8 × EN19 locating pins, Ø25 h6, 40-45 HRC
D  32 × hydraulic clamp mounting faces, machined
E  4 × Ø20 H7 datum pick-up bores
F  Exterior surfaces (approximately 4 m²)
G  8 × adjustable support screws
H  Hydraulic manifold block, aluminium, with internal galleries
```
(i) Specify a surface treatment for each item, with justification for the environment.
(ii) Produce a complete masking schedule.
(iii) For item C, evaluate three treatment options against the h6 tolerance and recommend one with
calculations.
(iv) For item H, explain why electroless nickel is preferable to electroplating and quantify the
advantage.
(v) Item B is hardened above 40 HRC. State what this rules out and why.
(vi) Design a colour coding scheme for this fixture, listing at least five colour–function pairings and
explaining what operator error each prevents.
(vii) After 4 years, the locating pads (item B) have worn 0.12 mm. Evaluate hard chrome reclamation:
calculate the required deposit, the remaining chrome thickness after grinding, and compare the resulting
surface hardness to the original. State two risks of this approach.
(viii) Write the complete finish specification block as it would appear on the general arrangement
drawing.

### 27. Interview questions
1. *"Why would you not plate a precision locating pin?"*
   **Answer:** Because the plating thickness is larger than the tolerance band. A typical zinc plate is
   about 10 µm per surface, which adds 20 µm to a diameter, while a Ø20 h6 tolerance band is only
   13 µm — so the plating alone is more than the entire permitted variation and the pin will not fit
   its mating hole. On top of that, if the pin is hardened above about 40 HRC, electroplating brings a
   hydrogen embrittlement risk that requires a de-embrittlement bake. The right answer for a precision
   ground surface is usually no coating at all — leave it ground, oil it, and put the oiling in the
   maintenance instruction. If the environment genuinely demands protection, nitriding gives hardness
   and corrosion resistance with essentially no dimensional change.
2. *"What is the point of colour coding a fixture?"*
   **Answer:** It makes the fixture explain itself. If every clamp handle is red, every adjustable
   element is blue, and everything fixed is black, an operator who has never seen the fixture knows
   immediately what to touch and what to leave alone. The specific error it prevents is someone
   adjusting a setup element that should never be moved — which happens regularly, produces scrap, and
   is genuinely a design failure rather than an operator failure, because the design made two things
   look identical that behave completely differently. The paint or the anodising is being applied
   anyway, so choosing the colour deliberately costs nothing. It is Poka-Yoke at zero cost.

### 28. Expert questions
1. *"How would you specify surface protection for a fixture that will work in a foundry, a wash bay and
   a machine shop over ten years?"*
   **Answer:** Ten years across three hostile environments means I have to design for **maintainability
   rather than permanence**, because no coating survives that indefinitely and pretending otherwise
   produces a fixture that degrades invisibly.
   I would separate the fixture into **three protection classes**. The **precision functional surfaces**
   — locating pads, pins, datum bores — get no coating, because coating thickness is incompatible with
   their tolerances. Instead I would specify nitriding where the material allows, which gives hardness
   and reasonable corrosion resistance with no dimensional change, and I would design them as
   **replaceable inserts** so that when they eventually corrode or wear they can be swapped without
   touching the structure. That last point is the key decision for a ten-year life.
   The **structure** gets the heaviest protection that has no dimensional consequence — for a foundry
   environment I would specify a proper multi-coat system with surface preparation to a defined
   standard, because powder coat over inadequately prepared steel fails at the interface and lifts,
   after which it traps moisture and accelerates the corrosion it was meant to prevent. Preparation is
   more important than the coating.
   The **mechanisms** — sliding surfaces, screws, adjusters — get manganese phosphate for oil retention
   and anti-galling, plus a specified lubrication schedule. Abrasive foundry dust will get into
   everything, so I would also consider **sealing or shielding** the mechanisms rather than relying on
   coatings to survive abrasion, and I would prefer sealed commercial units over exposed mechanisms
   wherever possible.
   For the **wash bay** specifically, I would check chemical compatibility — alkaline washing solutions
   attack aluminium and some coatings, and water-based cleaners strip protective oils, which is
   precisely when flash rusting occurs. So the maintenance instruction must specify re-oiling after
   washing, and I would design **drainage** into the fixture so water does not sit in pockets. A pocket
   that holds water for a week will rust regardless of what is in the specification.
   And critically, I would build in **inspection and refurbishment**: a documented periodic check of
   coating condition and locator wear, replaceable wear items with part numbers, and a design that
   allows the tombstone faces to be reground and the inserts replaced. A ten-year fixture is not one
   that never degrades; it is one whose degradation is anticipated, visible and recoverable.
2. *"A customer complains that a fixture looks worn and unprofessional after two years, though it still
   functions correctly. Is that a legitimate complaint?"*
   **Answer:** Yes, and I would take it seriously rather than defending the function, for three
   reasons that are all genuinely engineering reasons rather than cosmetic ones.
   First, **appearance is a proxy for condition, and people act on it.** A fixture that looks neglected
   gets treated as neglected — it does not get cleaned, small damage goes unreported, and maintenance
   is deferred. A fixture that looks cared for gets cared for. That is a real behavioural effect and it
   has real consequences for the fixture's working life.
   Second, **visible degradation usually indicates invisible degradation.** If the coating has failed
   after two years, the environment is more aggressive than the specification assumed, or the surface
   preparation was inadequate, or the maintenance regime is not being followed. Any of those is worth
   investigating, because the same cause is probably affecting things that matter more — the locators,
   the mechanisms, the clamping. The complaint is a symptom I should be grateful for.
   Third, in many industries the fixture is **seen by the customer's customers**. Automotive and
   aerospace audits look at tooling condition, and a shabby fixture is a finding regardless of whether
   it holds tolerance. That has commercial consequences for my customer, which makes it my problem.
   So my response would be to **investigate rather than justify**. What is the actual degradation —
   coating failure, corrosion, mechanical damage, or just accumulated dirt? Where is it worst, and what
   does that tell me about the environment? Was the surface preparation specified and verified? Is the
   maintenance instruction being followed, and was it realistic in the first place?
   Then I would fix both the instance and the cause: refurbish this fixture, and change the
   specification for future ones — better preparation, a more appropriate coating system, drainage
   where water was sitting, or a more realistic maintenance regime.
   The one thing I would not do is tell the customer that it still works so the complaint is invalid.
   That answer is technically defensible and professionally wrong, and it ends the flow of information
   that would have told me about the next problem.

### 29. Summary
Surface treatments protect fixtures from a genuinely hostile environment, but every coating adds
thickness and that thickness is frequently larger than the tolerance it sits on — a 25 µm hard chrome
plate adds 50 µm to a diameter against a Ø20 h6 band of only 13 µm. The three responses are to mask the
precision surface, to machine undersize and plate to size, or to plate oversize and grind back, with
masking being the usual answer and grinding back being the standard method for hard chrome. Black oxide
at 1–2 µm plus oil is the default for machined steel components because it is dimensionally neutral,
cheap and professional; zinc plating gives better protection but requires a de-embrittlement bake on
steel above 40 HRC; electroless nickel deposits uniformly on complex geometry; hard chrome at
850–1000 HV is harder than any hardened steel and is the best method for reclaiming worn locators;
paint and powder coat suit large structures provided every functional surface is masked. Anodising
applies to aluminium and takes dye readily, but hard anodising does not turn aluminium into a locating
surface — steel inserts are still required. Finally, colour coding turns surface treatment into a
functional design tool: red for clamping, blue for adjustable, black for fixed, applied consistently,
makes a fixture explain itself at no cost.

### 30. Key takeaways
- **Every coating adds thickness, and on a diameter it counts twice.** Check against the tolerance band.
- Thicknesses `[GUIDE]`: black oxide 1–2 µm · zinc 8–25 µm · hard chrome 20–100 µm · paint 50–150 µm.
- **Ø20 h6 has a 13 µm band** — smaller than most coatings. Precision surfaces get **no coating**.
- Three responses: **mask · machine undersize · plate and grind back.**
- **Black oxide plus oil is the default.** The oil does the protecting.
- **Plating steel above ~40 HRC requires a de-embrittlement bake** `[STD]` — or risk delayed fracture.
- **Electroless nickel is uniform**; electroplating builds up on edges and thins in recesses.
- **Hard chrome at 850–1000 HV is harder than hardened steel** — reclaim worn parts, do not remake them.
- **Mask threads, dowel holes, mating faces and locating surfaces.** Or machine them after coating.
- **Hard anodising does not make aluminium a locating surface.** Use steel inserts.
- **Colour coding is Poka-Yoke at zero cost.** A colour-coded fixture explains itself.

---

# LEVEL 0 ASSESSMENT

## Purpose and instructions

This assessment covers **all five modules of Level 0** — 22 lessons across manufacturing processes,
engineering drawing, mechanics, machining fundamentals, and materials and heat treatment.

```
FORMAT
  Section A   Foundations and drawing      12 questions   24 marks
  Section B   Mechanics and machining      12 questions   36 marks
  Section C   Materials and heat treatment  8 questions   20 marks
  Section D   Design judgement              8 questions   20 marks
  ─────────────────────────────────────────────────────────────────
  TOTAL                                    40 questions  100 marks

  Section E   Practical design exercise     (separate, 50 marks)
              Not counted in the 100. Complete it after passing.

TIME       : 2 hours 30 minutes for Sections A-D
CONDITIONS : Closed book. Calculator permitted.
             Formula sheet from Part 2 permitted.
```

## Grade bands

| Score | Grade | Meaning |
|---|---|---|
| **90–100** | **MASTER** | Exceptional command of the foundation. Proceed with confidence |
| **80–89** | **ADVANCED** | Strong understanding. Proceed to Level 1 |
| **70–79** | **COMPETENT** | Adequate. Proceed, but revisit weak areas as they recur |
| **60–69** | **DEVELOPING** | Gaps present. Review flagged lessons before Level 1 |
| **below 60** | **REPEAT** | Repeat Level 0. The foundation must be secure |

## Critical-error auto-fail conditions

Regardless of total score, the following answers constitute an automatic fail and require the level to
be repeated. Each represents a misunderstanding that would cause real damage in practice.

```
✗ Stating that a clamp can be used as a locator
✗ Sizing a fixture from friction alone when a stop is available
✗ Specifying through-hardening on a steel below 0.30 % carbon
✗ Any calculation with incorrect or missing units
✗ Stating that a stronger steel grade reduces deflection
✗ Presenting an illustrative schematic as a manufacturing drawing
```

---

# SECTION A — FOUNDATIONS AND DRAWING
**12 questions · 2 marks each · 24 marks**

**A1.** State the five manufacturing process families and, for each, the single most important
consequence for fixture design. *(2 marks)*

**A2.** A drawing carries the first-angle projection symbol. Explain what this tells you and why
checking it is the first thing you do when reading any drawing. *(2 marks)*

**A3.** What is the difference between a centreline and a phantom line on a drawing, and what mistake
follows from confusing them? *(2 marks)*

**A4.** A drawing note states `ISO 2768-mK`. Explain both letters. What is the general linear tolerance
for a 45 mm dimension under this note? *(2 marks)*

**A5.** Explain why "NEVER SCALE A DRAWING" is a rule, giving the two reasons. *(2 marks)*

**A6.** A workpiece is shown on a fixture assembly drawing. How should it be drawn, and what note must
accompany it? *(2 marks)*

**A7.** Three dimensions of 20 ±0.1 mm are chained end to end. State the total tolerance on the overall
length, and state what the total would be if the same three features were dimensioned from a common
baseline. *(2 marks)*

**A8.** Explain the 1:10:100:1000 cost escalation principle and its implication for fixture design
review. *(2 marks)*

**A9.** State the eight-level fixture sophistication ladder in order, from simplest to most
sophisticated. *(2 marks)*

**A10.** A component has a scrap rate of 4% and a part value of ₹850. Calculate the scrap cost per good
part using `C_scrap = (s/(1−s)) × C_part_value`. *(2 marks)*

**A11.** At what stage of the eleven-stage product cycle does the fixture designer sit, and roughly how
many inputs and outputs does that stage have? *(2 marks)*

**A12.** State the standard folder structure for a fixture design project and explain why one folder is
marked read-only. *(2 marks)*

---

# SECTION B — MECHANICS AND MACHINING
**12 questions · 3 marks each · 36 marks**

**B1.** A strap clamp has a bolt at 60 mm from the workpiece contact and a heel at 100 mm from the bolt
on the opposite side. The bolt applies 5,000 N. Calculate the clamping force at the workpiece and the
force at the heel. *(3 marks)*

**B2.** Explain why a design must be checked for both tipping and sliding, and give the typical
required safety factor for each `[PRACTICE]`. *(3 marks)*

**B3.** A steel bar 25 mm diameter carries a tensile load of 40 kN. Calculate the stress, and the
factor of safety against a yield strength of 465 MPa. *(3 marks)*

**B4.** A component passes its stress check with a factor of safety of 12. Explain what this tells you
about the likely governing constraint and why. *(3 marks)*

**B5.** A plate is simply supported over 400 mm and deflects 0.08 mm under load. Calculate the
deflection if the span is halved to 200 mm, all else equal. Show the relationship you used. *(3 marks)*

**B6.** A rectangular bar 25 × 50 mm is used as a beam. Calculate the second moment of area for both
orientations and state the ratio. *(3 marks)*

**B7.** A Ø80 mm face mill with 6 inserts runs at 180 m/min with a feed of 0.18 mm/tooth. Calculate the
spindle speed and the feed rate. *(3 marks)*

**B8.** Explain the statement "speed kills tools; feed and depth kill fixtures", and state its practical
consequence when a fixture is marginal on clamping force. *(3 marks)*

**B9.** A milling cut in EN8 (`k_c = 2,000 N/mm²`) has `a_p = 3 mm`, `f_z = 0.20 mm/tooth`, with 2.5
teeth engaged. Calculate the cutting force, then the design force applying a shock factor of 1.5 and a
wear factor of 1.3. *(3 marks)*

**B10.** A part must resist a horizontal cutting force of 6,000 N. With μ = 0.12 and two clamps and a
safety factor of 2.0, calculate the clamp force per clamp required by friction alone. Then state the
design change that would reduce this most, and why. *(3 marks)*

**B11.** A Ø16 mm drill runs at 0.20 mm/rev in mild steel (`K_m = 375 N/mm·rev`). Calculate the torque.
Explain why a clamp positioned directly over the hole contributes almost nothing to resisting it.
*(3 marks)*

**B12.** A VMC has 520 mm maximum spindle-nose-to-table distance. The fixture is 110 mm tall, the part
is 140 mm, the longest tool is 165 mm, the holder is 100 mm. Calculate the remaining clearance and
state whether the design is acceptable against a 25 mm margin. *(3 marks)*

---

# SECTION C — MATERIALS AND HEAT TREATMENT
**8 questions · 2.5 marks each · 20 marks**

**C1.** Interpret the designation `42CrMo4`: state the carbon content, the principal alloying elements,
the chromium content, and one typical fixture application. *(2.5 marks)*

**C2.** State the four elements of a complete material specification on a drawing, and explain what goes
wrong if the third is omitted. *(2.5 marks)*

**C3.** Apply the three-question material selection method to: (a) a rest pad the workpiece lands on,
(b) a base plate, (c) a slender pin carrying a side load. State the material for each. *(2.5 marks)*

**C4.** Explain why "harden to 58 HRC" cannot be specified on a mild steel part, and give the two
correct alternatives. *(2.5 marks)*

**C5.** Explain why hardening is always followed by tempering, and state the relationship between
tempering temperature and the resulting properties. *(2.5 marks)*

**C6.** A welded steel fixture base is machined flat to 0.05 mm and put into service. Six months later
it is out of flat. State the most likely cause, the treatment that was omitted, and where in the
manufacturing sequence it should have occurred. *(2.5 marks)*

**C7.** A hardened part tests at 45 HRC when 58–62 HRC was specified. State the two most likely test
artefacts that could produce a falsely low reading, and how you would eliminate each. *(2.5 marks)*

**C8.** A Ø20 h6 pin (tolerance band 13 µm) is to be zinc plated at 10 µm per surface. Calculate the
dimensional effect and state whether this is acceptable. Give the recommended alternative. *(2.5 marks)*

---

# SECTION D — DESIGN JUDGEMENT
**8 questions · 2.5 marks each · 20 marks**

**D1.** A colleague proposes increasing the clamping force from 5 kN to 40 kN to stop a part sliding
during milling. Give your response and the alternative you would propose, with the approximate benefit.
*(2.5 marks)*

**D2.** A base plate deflects too much. Rank your options in order of effectiveness and explain why one
commonly proposed option achieves nothing. *(2.5 marks)*

**D3.** State the fundamental difference between a VMC fixture and an HMC fixture in terms of gravity
and chips, and the single design feature every HMC fixture needs that a VMC fixture does not. *(2.5
marks)*

**D4.** Explain why a stop block that touches the workpiece must be dimensioned, toleranced, hardened
and monitored — even though it is "just a stop". *(2.5 marks)*

**D5.** A cost reduction exercise proposes making the three rest pads from mild steel instead of
hardened EN31, saving ₹79. Evaluate this proposal. *(2.5 marks)*

**D6.** A fixture that worked correctly for two years starts producing scrap. List the first five things
you would investigate, in order, and state your reasoning for the order. *(2.5 marks)*

**D7.** Explain why boring and face milling impose conflicting requirements on a fixture, and state the
best way to resolve the conflict rather than compromise it. *(2.5 marks)*

**D8.** Give three reasons why colour coding a fixture is an engineering decision rather than a cosmetic
one. *(2.5 marks)*

---

# SECTION E — PRACTICAL DESIGN JUDGEMENT EXERCISE
**50 marks · not counted in the 100 · attempt after passing Sections A–D**

## The brief

```
COMPONENT   : Steel bracket, EN8, 180 × 120 × 45 mm, 4.2 kg
MACHINE     : VMC, 900 × 450 table, 550 mm spindle-nose-to-table,
              15 kW spindle, 18 mm T-slots at 100 mm pitch
VOLUME      : 8,000 parts per year, 3-year programme
OPERATIONS  : OP1  Face mill top, Ø80 6-insert, a_p 3 mm,
                   a_e 100 mm, f_z 0.22, V 180 m/min
              OP2  Drill 4 × Ø12 through, f 0.18 mm/rev
              OP3  Bore 1 × Ø40 H7, depth 30 mm
              OP4  Tap 4 × M10
TOLERANCE   : Bore position ±0.05 mm to the datum face
SURFACE     : Raw machined steel — no cosmetic requirement
ENVIRONMENT : General machine shop, flood coolant
```

## Required

**E1.** *(8 marks)* Estimate the cutting force for OP1 and the drilling torque for OP2, showing the full
calculation format. Use `k_c = 2,000 N/mm²` and `K_m = 375 N/mm·rev` `[GUIDE]`.

**E2.** *(6 marks)* Determine which operation governs fixture strength and which governs fixture
stiffness. Justify both.

**E3.** *(8 marks)* Explain where you would place a positive stop and why, calculating the approximate
clamping force required with and without it.

**E4.** *(6 marks)* Identify the conflict between OP1 and OP3 and propose a resolution.

**E5.** *(6 marks)* Perform the Z-height budget check, stating any assumption about fixture height, and
determine how many stations will fit the table.

**E6.** *(8 marks)* Specify materials, condition and hardness for: the base plate, three rest pads, two
locating pins and a stop block. Write complete drawing specifications for two of them.

**E7.** *(4 marks)* State the surface treatment for each item in E6 and identify what must be masked.

**E8.** *(4 marks)* List the five most significant risks in this design and one mitigation for each.

---

# WORKED ANSWERS

> Attempt the assessment before reading these. Mark honestly — the purpose is to identify what needs
> reinforcing before Level 1, not to produce a flattering number.

## Section A answers

**A1** *(2)* — Removal (machining) → **force**, the fixture must resist cutting loads. Forming →
**springback**, the part changes shape after the load is removed. Joining (welding) → **heat**, thermal
distortion and expansion. Casting → **no datum**, no machined surface to locate from. Additive → **no
datum**, same problem. *1 mark for the five families, 1 mark for the consequences.* → *L0.1.1*

**A2** *(2)* — First-angle projection tells you the arrangement of views: the view seen from the left is
placed on the right, and vice versa. It is checked first because misreading the projection convention
inverts your understanding of the entire part geometry — every subsequent interpretation is wrong, and
in a way that is internally consistent and therefore hard to detect. → *L0.2.1*

**A3** *(2)* — A centreline (long-short-long chain) marks an axis or line of symmetry; there is **no
material** at a centreline. A phantom line (long-short-short-long) shows adjacent parts, alternative
positions, or the workpiece. The mistake: treating either as an edge of your material, and dimensioning
or designing to it as though it were a real surface. → *L0.2.3*

**A4** *(2)* — `m` = medium class for **linear** dimensions (ISO 2768-1); `K` = the geometric tolerance
class (ISO 2768-2). For 45 mm, which falls in the 30–120 mm band, the class-m tolerance is **±0.3 mm**.
→ *L0.2.5*

**A5** *(2)* — First, drawings are printed, copied and scaled, so the physical size on paper is
unreliable. Second, a drawing may legitimately be drawn to a different scale from the one stated, or
contain a not-to-scale dimension (underlined). The dimension is the specification; the geometry is an
illustration. → *L0.2.1*

**A6** *(2)* — In **phantom line**, with the note `WORKPIECE SHOWN IN PHANTOM FOR REFERENCE ONLY — NOT
SUPPLIED WITH FIXTURE`. This prevents the workpiece being read as a fixture component and manufactured.
→ *L0.2.3*

**A7** *(2)* — Chained: `t_total = Σtᵢ = 0.1 + 0.1 + 0.1 = ±0.3 mm`. From a common baseline, the
tolerance between any two features is `t_A + t_B = ±0.2 mm`, and the overall length carries only the
single dimension's tolerance of **±0.1 mm**. Chaining accumulates tolerance; baseline does not.
→ *L0.2.4*

**A8** *(2)* — An error costs roughly ten times more to correct at each successive stage: 1 at design,
10 at drawing, 100 at manufacture, 1000 in production `[GUIDE]`. The implication is that design review
time is the cheapest time available, and that catching an error at concept stage is worth a thousand
times catching it in production. → *L0.1.3*

**A9** *(2)* — Vise/T-slot → modular → simple dedicated → quick-acting manual → pneumatic → hydraulic →
tombstone → automated. → *L0.1.4*

**A10** *(2)* —
```
C_scrap = (s/(1−s)) × C_part_value
        = (0.04 / 0.96) × 850
        = 0.041667 × 850
        = ₹35.42 per good part
```
→ *L0.1.3*

**A11** *(2)* — Stage **5** of 11, with **8 inputs and 9 outputs**. → *L0.1.2*

**A12** *(2)* —
```
/PROJECT_NNNN/
   01_INPUTS      (READ-ONLY)
   02_CAD
   03_DRAWINGS
   04_CALC
   05_DOCS
```
`01_INPUTS` is read-only because it holds the customer's supplied data — drawings, specifications,
models. If those are edited, you lose the ability to prove what you were given, and any later dispute
about scope or requirement becomes unresolvable. → *L0.1.2*

## Section B answers

**B1** *(3)* —
```
GIVEN   : F_bolt = 5,000 N, L1 = 60 mm (bolt to workpiece),
          L2 = 100 mm (bolt to heel)
FORMULA : F_clamp = F_bolt × L2/(L1+L2)
```
Applying the strap clamp relationship with the bolt between the workpiece and the heel:
```
F_clamp = 5000 × 100/(60+100) = 5000 × 100/160 = 3,125 N
F_heel  = F_bolt − F_clamp = 5000 − 3125 = 1,875 N
CHECK   : moments about the bolt →
          3125 × 60 = 187,500 ;  1875 × 100 = 187,500  ✓
```
*1 mark clamping force, 1 mark heel force, 1 mark for the moment check.* → *L0.3.1*

**B2** *(3)* — They are **independent failure modes**. Tipping is a rotational failure about an edge,
governed by moments; sliding is a translational failure, governed by friction. A design can pass one
comfortably and fail the other badly — the L0.3.3 example passed tipping at 3.31 while failing sliding
at 0.246, a factor of 8. Required safety factors are typically **2.0 for both** `[PRACTICE]`.
→ *L0.3.1, L0.3.3*

**B3** *(3)* —
```
A = πd²/4 = π × 25²/4 = π × 625/4 = 490.87 mm²
σ = F/A = 40,000 / 490.87 = 81.49 MPa
FoS = σ_yield/σ = 465 / 81.49 = 5.71
```
*1 mark area, 1 mark stress, 1 mark FoS.* → *L0.3.2*

**B4** *(3)* — A factor of safety that high indicates the component is **not strength-limited**, and
strongly suggests **deflection (stiffness) is the governing constraint**. Fixture members are usually
stiffness-limited: the L0.3.4 worked example had FoS 13 on stress while exceeding its deflection budget
by 3.84×. Strength and stiffness are independent, and passing one says nothing about the other.
→ *L0.3.2, L0.3.4*

**B5** *(3)* —
```
δ ∝ L³
δ_new = δ_old × (L_new/L_old)³
      = 0.08 × (200/400)³
      = 0.08 × (0.5)³
      = 0.08 × 0.125
      = 0.010 mm
```
Deflection falls to **one-eighth**. → *L0.3.4*

**B6** *(3)* —
```
I = bh³/12
Depth 50 mm:  I = 25 × 50³/12 = 25 × 125,000/12 = 260,417 mm⁴
Depth 25 mm:  I = 50 × 25³/12 = 50 × 15,625/12  =  65,104 mm⁴
Ratio = 260,417 / 65,104 = 4.0
```
A **4× difference** from the same bar, purely by orientation. → *L0.3.4*

**B7** *(3)* —
```
N   = 1000V/(πD) = 1000 × 180/(π × 80) = 180,000/251.33 = 716.2 rev/min
v_f = f_z × z × N = 0.18 × 6 × 716.2 = 1.08 × 716.2 = 773.5 mm/min
```
→ *L0.4.1*

**B8** *(3)* — Cutting force is governed principally by the **chip cross-sectional area** — depth of cut
times feed — and only weakly by cutting speed. Cutting speed instead dominates **tool life**. The
practical consequence: when a fixture is marginal, asking process planning to slow the machine down
achieves almost nothing, while reducing the depth of cut and taking two passes roughly **halves the peak
force**. → *L0.4.1*

**B9** *(3)* —
```
A_c = a_p × f_z = 3 × 0.20 = 0.60 mm²
F_c = k_c × A_c × z_c = 2000 × 0.60 × 2.5 = 3,000 N
F_design = 3000 × 1.5 × 1.3 = 3000 × 1.95 = 5,850 N
```
→ *L0.4.2*

**B10** *(3)* —
```
F_clamp = (F_cut × SF)/(μ × n)
        = (6000 × 2.0)/(0.12 × 2)
        = 12,000 / 0.24
        = 50,000 N per clamp
```
The change that reduces this most is **fitting a positive stop** to receive the cutting force. The stop
takes the horizontal load directly, leaving the clamps only to hold the part down — typically a
**20–30× reduction**. Friction is a weak, coolant-sensitive resource; a hardened stop is a strong,
certain one. → *L0.3.3, L0.4.2*

**B11** *(3)* —
```
M = K_m × d² × f = 375 × 16² × 0.20 = 375 × 256 × 0.20 = 19,200 N·mm = 19.2 N·m
```
Resisting moment is `M_resist = μ × F_clamp × r`. A clamp positioned over the hole has a radius `r` of
approximately **zero** from the drill axis, so its resisting moment is approximately zero regardless of
how hard it is tightened. Torque is resisted by **radius**, not by force alone. → *L0.4.3*

**B12** *(3)* —
```
Clearance = 520 − 110 − 140 − 165 − 100
          = 520 − 515
          = 5 mm
Required margin = 25 mm
5 mm < 25 mm  →  ✗ NOT ACCEPTABLE
Shortfall = 20 mm
```
The design must be revised — reduce fixture or locator height, or use shorter tooling. → *L0.4.4*

## Section C answers

**C1** *(2.5)* — `42CrMo4`: carbon **0.42%** (42÷100); principal alloying elements **chromium and
molybdenum**; chromium content **1.0%** (4 ÷ the Cr multiplier of 4). Typical application: **loaded
locating pins and shafts**, hardened and tempered to 40–45 HRC, where both strength and toughness are
needed. → *L0.5.1*

**C2** *(2.5)* — **Grade + standard + condition + hardness.** If the **condition** is omitted, the part
may arrive annealed or hardened and tempered — a factor of roughly two in strength — because "EN19"
alone specifies composition, not state. → *L0.5.1*

**C3** *(2.5)* — (a) Does it wear? **Yes** → **EN31/100Cr6 hardened 58–62 HRC**. (b) Wear? No. Highly
loaded? No. Structural only → **EN8/C45E** (or mild steel). (c) Wear? Yes. Highly loaded in bending?
Yes → needs hardness **and toughness** → **EN19/42CrMo4 H&T to 40–45 HRC**, not EN31, which would be too
brittle in a slender loaded section. → *L0.5.1*

**C4** *(2.5)* — Mild steel has under about 0.25% carbon, and roughly **0.30% minimum** is needed to
through-harden usefully; 58 HRC requires considerably more. The two correct alternatives: **change the
material** to a high-carbon grade such as EN31, or **specify case hardening**, which diffuses carbon
into the surface to give 58–62 HRC over a tough core. → *L0.5.1, L0.5.3*

**C5** *(2.5)* — Quenching produces martensite, which is very hard but very brittle and carries high
internal stress — an untempered part is liable to crack. Tempering reheats below the transformation
temperature to relieve that stress and restore toughness. The relationship: **lower tempering
temperature → higher hardness, lower toughness**; higher tempering temperature → lower hardness, greater
toughness. → *L0.5.3*

**C6** *(2.5)* — Cause: **release of residual welding stress**. Omitted treatment: **stress relieving**
at around 600 °C. It should have been performed **after welding and rough machining, before finish
machining** — so that the stress is released while there is still material to machine away, and the
final flat surface is cut on a stable part. → *L0.5.3*

**C7** *(2.5)* — (1) **Decarburisation** — the as-hardened surface has a soft skin 0.1–0.5 mm deep;
eliminate by grinding 0.3 mm and re-testing. (2) **The anvil effect** — the part is thinner than 10×
the indentation depth so the stress field reaches the support; eliminate by using a superficial Rockwell
scale (HR15N/30N) or Vickers. → *L0.5.4*

**C8** *(2.5)* —
```
Δ_diameter = 2 × t = 2 × 10 = 20 µm
Tolerance band = 13 µm
Ratio = 20/13 = 1.54
```
The plating alone is **1.54× the entire tolerance band** — not acceptable; the pin will not fit.
Recommended alternative: **no coating** — leave it ground and oiled, with oiling in the maintenance
instruction. If the environment demands protection, **nitride** (negligible dimensional change, no
hydrogen embrittlement). Note also that above 40 HRC electroplating would require a de-embrittlement
bake. → *L0.5.5*

## Section D answers

**D1** *(2.5)* — I would not increase the clamping force. 40 kN is likely to distort or emboss the part
— at that force the contact pressure often exceeds the workpiece's yield strength, so the clamp marks
the part before it generates the friction required. The correct alternative is a **positive stop**
positioned to receive the cutting force, which typically reduces the clamping requirement by
**20–30×** and removes the dependence on the friction coefficient entirely. If more is needed after
that, reduce the depth of cut and take two passes. → *L0.3.3, L0.4.2*

**D2** *(2.5)* — In order: (1) **reduce the span** — deflection goes as L³, so a mid-span support gives
an eightfold improvement for the cost of one block; (2) **improve the support condition** — fixed rather
than simply supported gives 4×; (3) **increase section depth** — also cubed, but adds material, mass and
cost; (4) reduce the load if possible. The option that achieves **nothing** is changing to a stronger
steel grade: Young's modulus is approximately 200 GPa for **all** steels, so grade has no effect on
deflection whatsoever. → *L0.3.4*

**D3** *(2.5)* — On a **VMC** the spindle points down: gravity **helps** hold the part on the fixture,
but chips fall **onto** the part and locators, making chip evacuation a primary design problem. On an
**HMC** the spindle is horizontal: chips fall **clear** by gravity, but gravity now acts across the
clamping direction. The feature every HMC fixture needs and no VMC fixture does: a **support ledge**
(or weight-bearing locating pin) so the part does not fall off while the operator clamps it.
→ *L0.4.4*

**D4** *(2.5)* — Because **any stop that touches the part is a locator**. It defines the part's position
in that direction, so: its position must be **dimensioned and toleranced** or the part position is
uncontrolled; it must be **hardened** or it will wear and the part position will drift invisibly; it
must be **monitored** because that drift is gradual and produces marginal parts long before it produces
obvious failures; and it should be **dowelled**, because bolting alone relies on friction — the same
weak resource being avoided at the part interface. → *L0.3.3*

**D5** *(2.5)* — Reject. The saving is ₹79, about **2.6%** of material cost and a far smaller fraction of
total fixture cost. Against that, unhardened mild steel at around 150 HB will indent and wear under
repeated loading; 0.05 mm of wear consumes the **entire tolerance band** of a ±0.05 mm feature. The
failure is gradual and invisible, so marginal parts ship for months before anyone notices. The base
plate is 89% of material cost and carries almost no risk — that is where cost reduction should be
aimed. **Never economise on small critical parts.** → *L0.5.1*

**D6** *(2.5)* — (1) **What changed, and when** — establish the precise start date and correlate against
change records for process, tooling, material, machine and personnel; the fixture worked before, so
something changed. (2) **Swarf on locating faces** — the single most common cause of intermittent
fixture problems, and free to check. (3) **Locator wear** — measure the locators against the drawing.
(4) **Clamp force** — particularly pneumatic line pressure drift. (5) **Process parameters** — has depth
of cut or feed been increased? The order is by **likelihood and cost to check**: date correlation is
free and often decisive, and physical checks proceed from most likely to least. Throughout, measure the
scrap parts, because the **error pattern** points at the cause. → *L0.4.1, L0.4.4*

**D7** *(2.5)* — Face milling applies a large horizontal force and, if resisted by friction, demands
high clamping. Boring requires **minimum** clamping, because clamping hard enough to deform the part
elastically produces a bore that is round while clamped and springs **oval** on release. The two cannot
be satisfied at one clamping pressure. The best resolution is not a compromise but to **remove the
conflict**: fit a positive stop to react the milling force, which collapses OP1's clamping requirement
so that both operations can run at the low pressure boring needs. Secondary options are staged clamping
pressure or separating the operations into two setups. → *L0.4.3*

**D8** *(2.5)* — (1) It **prevents a specific error class** — operators adjusting elements that must not
be moved, which is a design failure, not an operator failure, because the design made two functionally
different things look identical. (2) It makes the fixture **self-documenting**, so an operator or
maintenance technician can determine function without reading a document. (3) It is **Poka-Yoke at zero
cost** — the coating or paint is being applied anyway, so choosing the colour deliberately adds nothing
to the price while removing ambiguity. → *L0.5.5*

## Section E answers — outline

**E1** *(8)* —
```
OP1 CUTTING FORCE
  N   = 1000 × 180/(π × 80) = 716.2 rev/min
  A_c = a_p × f_z = 3 × 0.22 = 0.66 mm²
  Engagement: a_e/D = 100/80 > 1 → full engagement, cutter
  narrower than the cut, so the cut is made in multiple
  passes or the cutter is stepped over. Taking full
  diameter engagement, ~half the teeth engaged:
  z_c ≈ 6 × (180/360) = 3
  F_c = 2000 × 0.66 × 3 = 3,960 N
  F_design = 3960 × 1.5 × 1.3 = 7,722 N

OP2 DRILLING TORQUE
  M = K_m × d² × f = 375 × 12² × 0.18
    = 375 × 144 × 0.18 = 9,720 N·mm = 9.72 N·m
  With breakthrough 1.5 and SF 2.0:
  M_design = 9.72 × 3.0 = 29.2 N·m
```

**E2** *(6)* — **Strength** is governed by **OP1 face milling** — 7,722 N design force, by far the
largest load, and the widest engagement. **Stiffness** is governed by **OP3 boring** — the Ø40 H7 bore
at ±0.05 mm positional tolerance is the tightest requirement, and boring accuracy depends on the fixture
not deflecting or distorting. Note the general pattern: strength from the heaviest operation, stiffness
from the most precise.

**E3** *(8)* — Place the stop on the side of the part **opposite the OP1 feed direction**, so the face
milling force pushes the part **into** the stop.
```
WITHOUT STOP (friction only, μ = 0.12, 2 clamps, SF 2.0):
  F_clamp = (7722 × 2.0)/(0.12 × 2) = 15,444/0.24 = 64,350 N per clamp
  → NOT VIABLE

WITH STOP (clamps hold down only; take lift as 30 % of design force):
  F_lift = 0.30 × 7722 = 2,317 N
  Required = (2317 × 2.0) − (4.2 × 9.81) = 4,634 − 41 = 4,593 N
  Per clamp = 2,297 N
  → VIABLE

REDUCTION = 64,350 / 2,297 = 28.0×
```
The stop must also be positioned to react the OP2 drilling torque, giving one feature two functions.

**E4** *(6)* — **OP1 wants high clamping** (large horizontal force); **OP3 wants low clamping** (clamping
distortion produces an oval bore on release). Resolution: **fit the positive stop from E3**, which
removes OP1's need for high clamping altogether — both operations can then run at the ~2.3 kN per clamp
that boring tolerates. Secondary option if that is insufficient: stage the clamping pressure, running
OP1 at higher pressure and reducing it before OP3, ideally interlocked with a pressure switch.

**E5** *(6)* —
```
ASSUME fixture height 100 mm (25 mm base plate + 75 mm
locators/risers) [EX-ASSUMED — must be confirmed once the
concept is fixed]
Longest tool: assume the Ø40 boring bar, 180 mm + 100 mm holder

Z BUDGET = 550 − 100 − 45 − 180 − 100 = 125 mm
Against a 25 mm margin → 100 mm surplus  ✓ COMFORTABLE

STATIONS: part 180 × 120 mm; allow a 260 × 200 mm station
footprint with clamps.
  Across X: 50 + 260 + 50 + 260 + 50 + 260 + 50 = 980 > 900 ✗
  Two stations: 50 + 260 + 50 + 260 + 50 = 670 ≤ 900  ✓
  Depth: 50 + 200 + 50 = 300 ≤ 450  ✓
→ TWO STATIONS FIT. Confirm X travel separately — table size
  is not travel.
```

**E6** *(8)* —

| Item | Material | Condition | Hardness |
|---|---|---|---|
| Base plate | C45E to EN 10083-2 | Normalised | 180–220 HBW |
| Rest pads ×3 | 100Cr6 to EN ISO 683-17 | Hardened and tempered | 58–62 HRC |
| Locating pins ×2 | 42CrMo4 to EN 10083-3 | Hardened and tempered | 40–45 HRC |
| Stop block | 100Cr6 to EN ISO 683-17 | Hardened and tempered | 58–62 HRC |

Two complete specifications:
```
REST PAD
  MATERIAL  : 100Cr6 TO EN ISO 683-17 (EN31 EQUIV)
  TREATMENT : HARDEN AND TEMPER TO 58-62 HRC
  NOTES     : 1. LEAVE 0.5 mm GRINDING STOCK BEFORE HT.
              2. GRIND LOCATING FACE AFTER HT.
              3. HARDNESS TESTED ON GROUND FACE, ISO 6508-1.
              4. HARDNESS TEST CERTIFICATE REQUIRED.

STOP BLOCK
  MATERIAL  : 100Cr6 TO EN ISO 683-17 (EN31 EQUIV)
  TREATMENT : HARDEN AND TEMPER TO 58-62 HRC
  NOTES     : 1. DOWELLED — SEE ASSEMBLY. DO NOT RELOCATE.
              2. REACTS PRIMARY CUTTING FORCE 7.7 kN MAX.
              3. GRIND CONTACT FACE AFTER HT.
              4. HARDNESS TEST CERTIFICATE REQUIRED.
```

**E7** *(4)* — Base plate: **black oxide**, masking the locating and mating faces. Rest pads, locating
pins, stop block contact face: **no coating** — ground and oiled, because these are precision surfaces
and any coating exceeds their tolerance. Fasteners: **bought zinc plated**. Mask: all locating faces,
the stop contact face, dowel holes, tapped holes, and the T-slot mounting faces.

**E8** *(4)* — Any five, with mitigations:

| Risk | Mitigation |
|---|---|
| Cutting force slides the part (OP1) | Positive stop reacting the feed direction |
| Clamping distortion ovalises the Ø40 H7 bore (OP3) | Low clamp force enabled by the stop; clamp away from the bore |
| Part rotation during drilling and tapping (OP2, OP4) | Stop reacts torque; clamps at maximum radius |
| Drill breakthrough into the base plate | Ø18 clearance (1.5 × 12) below each hole |
| Chip accumulation on locating faces (VMC) | Chip escape paths; air blast; open design under the part |
| Locator wear over 24,000 parts | Hardened EN31, 58–62 HRC, ground; wear monitoring in the maintenance plan |
| Z-height eroded by longer tools later | 100 mm surplus retained; record the assumption |
| Fixture and part datum mismatch | Locate from and reference the drawing's datum face |

## Scoring and what to do next

```
SECTION SCORES
  A  ____ / 24      Foundations and drawing
  B  ____ / 36      Mechanics and machining
  C  ____ / 20      Materials and heat treatment
  D  ____ / 20      Design judgement
  ─────────────────
  TOTAL ____ / 100

  E  ____ / 50      Practical exercise (separate)
```

**Diagnostic guidance by section:**

| If weak in | Revisit | Because |
|---|---|---|
| Section A | Modules 0.1, 0.2 (Part 1) | Drawing reading errors propagate into every later stage |
| Section B | Modules 0.3, 0.4 (Part 2) | Every fixture calculation in Levels 4–20 builds directly on these |
| Section C | Module 0.5 (Part 3) | Material errors are invisible for months and expensive to correct |
| Section D | All modules — the §8 Principle and §30 Takeaways of each lesson | Judgement comes from the principles, not the arithmetic |

**If you scored below 60**, repeat Level 0 rather than proceeding. Level 4 (location theory) assumes
every one of these foundations, and Level 10 (design calculations) assumes fluency in Section B.
Rebuilding a foundation later is far more expensive than laying it properly now — which is the
1:10:100:1000 principle applied to your own learning.

---

# END OF LEVEL 0

## Level 0 is complete

You have finished the **Engineering Foundation** — five modules, 22 lessons, 660 mandatory lesson
sections, and an assessment.

| Part | Module | Lessons | Content |
|---|---|---|---|
| 1 | 0.1 Manufacturing processes | L0.1.1–L0.1.4 | Process families, the product cycle, cost, the sophistication ladder |
| 1 | 0.2 Engineering drawing | L0.2.1–L0.2.5 | Projection, views, lines, dimensioning, tolerances |
| 2 | 0.3 Engineering mechanics | L0.3.1–L0.3.4 | Forces, stress, friction, deflection |
| 2 | 0.4 Machining fundamentals | L0.4.1–L0.4.4 | Cutting, forces, operations, machines |
| 3 | 0.5 Materials and heat treatment | L0.5.1–L0.5.5 | Steel grades, materials, heat treatment, hardness, coatings |
| 3 | — | Assessment | 40 questions + practical exercise |

## The twenty-seven governing principles of Level 0

Part 1 established nine, Part 2 added nine, and Part 3 adds nine more.

**From Part 1 — process and drawing**
> 1. The process defines the fixture.
> 2. You sit at stage 5 of 11 — 8 inputs, 9 outputs.
> 3. The fixture must earn its cost.
> 4. Quantify scrap first.
> 5. Check the projection symbol first.
> 6. Sections replace hidden lines.
> 7. A centreline is not an edge; a phantom line is not your material.
> 8. The general tolerance governs every unmarked dimension.
> 9. Chain stacks tolerance; baseline does not.

**From Part 2 — mechanics and machining**
> 10. Equilibrium means ΣF = 0 and ΣM = 0 — six equations, six degrees of freedom.
> 11. Check tipping AND sliding. They are different failure modes.
> 12. Stress and stiffness are independent. FoS 13 and still four times too flexible.
> 13. Friction is the clamping resource and the locating enemy, simultaneously.
> 14. **FIT A POSITIVE STOP.** 20–30× the clamping requirement depends on it.
> 15. Any stop that touches the part IS a locator.
> 16. Deflection scales with span cubed and inversely with thickness cubed.
> 17. Speed kills tools; feed and depth kill fixtures.
> 18. Direction before magnitude. DIRECTION → LOCATOR → CLAMP.

**From Part 3 — materials**
> 19. **Carbon content decides what is possible; alloying decides how reliably.** Below ~0.30% carbon a
>     steel cannot be through-hardened.
> 20. A material specification needs **grade + standard + condition + hardness**. Omit any one and you
>     will receive something you did not intend.
> 21. **Every workpiece-contacting surface must be hardened.** No exceptions on production fixtures.
> 22. **The cheapest parts carry the greatest risk.** Never economise on small critical components.
> 23. **Locate on hardened steel; clamp through plastic.** Different functions, different materials.
> 24. **Marking is a contact pressure problem**: `p = F/A`. Soft material *and* adequate area.
> 25. **Hardening without tempering is a crack waiting to happen**; machine soft, heat treat, grind to
>     size.
> 26. **Stress relieve every welded base.** The cheapest omitted operation has the worst consequence.
> 27. **Every coating adds thickness**, and on a diameter it counts twice. Precision surfaces get none.

## Three results that define the Level 0 mindset

**1. The positive stop — proved three times, on three different operations**

| Lesson | Operation | Friction only | With a stop | Ratio |
|---|---|---|---|---|
| L0.3.3 | Milling, 2.4 kN | 39,882 N | 1,440 N | **28×** |
| L0.4.2 | Face milling, 8.4 kN | 70,127 N/clamp | 2,454 N/clamp | **28.6×** |
| L0.4.3 | Drilling, 19.2 N·m | 2,667 N/clamp | 921 N/clamp | **2.9×** |

**2. Stiffness, not strength, governs fixtures**

L0.3.4: a plate with a stress factor of safety of **13** exceeded its deflection budget by **3.84×**.
An engineer checking only stress would have released it with confidence.

**3. Cost and risk are inverted**

L0.5.1: the base plate was **89% of material cost and almost none of the risk**; the rest pads were
**4% of cost and all of it**.

Each of these is a case where the intuitive answer is wrong and the arithmetic is unambiguous. That is
what the foundation is for.

## Complete formula reference — Level 0

**Cost and process**
```
C_part  = C_material + C_machining + C_tooling + C_quality
C_scrap = (s/(1−s)) × C_part_value
Drawn size = True size × Scale
```

**Tolerance**
```
Chain    : t_total   = Σ tᵢ
Baseline : t_between = t_A + t_B
RSS      : t_total   = √(Σ tᵢ²)
Coordinate diagonal  = 1.414 t     → 41 % corner error
```

**Statics**
```
M = F × d              ΣFx = 0,  ΣFy = 0,  ΣM = 0
W = m g                g = 9.81 m/s²
F_clamp = F_bolt × L1/(L1+L2)          F_heel = F_bolt − F_clamp
S_tipping = (F_clamp·a + W·b)/(F_cut·h)          S_req ≥ 2.0
```

**Stress and strain**
```
σ = F/A          τ = F/A_shear          σ_bearing = F/(d×t)
ε = ΔL/L         E = σ/ε                ΔL = FL/(AE)
FoS = σ_yield/σ_applied                 τ_yield = 0.577 σ_yield
```

**Friction**
```
F_friction ≤ μN
F_clamp ≥ (F_cut × SF)/(μ × n)
φ = arctan(μ)          self-locking when α < φ
M_resist = Σ (μ × F_clamp_i × r_i)
```

**Deflection**
```
k = F/δ                          δ = C F L³/(E I)
cantilever   δ = FL³/(3EI)       simply supported δ = FL³/(48EI)
fixed-fixed  δ = FL³/(192EI)     UDL (s.s.)  δ = 5wL⁴/(384EI)
I = bh³/12   (rectangle)         I = πd⁴/64  (circle)
Z = bh²/6                        σ = M/Z
```

**Machining**
```
V = πDN/1000             N = 1000V/(πD)
v_f = f_z × z × N        MRR = a_p × a_e × v_f
F_c = k_c × A_c          A_c ≈ a_p × f_z
P_c = F_c × V/60,000     F_c = 60,000 P_c/V
F_t ≈ K_t × d × f        M ≈ K_m × d² × f      (drilling)
ΔL = L α ΔT              α_steel ≈ 11.5e-6/°C
```

**Machine**
```
Z clearance = H_spindle-to-table − H_fixture − H_part − L_tool − L_holder
m_total = m_fixture + m_parts ≤ m_table_max
```

**Materials**
```
EN carbon steel : C<nn>        → %C = nn/100
EN low alloy    : <nn><El><m>  → %C = nn/100, %El = m/multiplier
AISI            : <fam><nn>    → %C = nn/100
HRC_max ≈ 30 + 50 × %C            (to ~0.6 % C)
σ_UTS ≈ 3.3 × HV ≈ 3.4 × HBW      (steels only)
Coating on a diameter : Δ = 2t
Contact pressure      : p = F/A
Specific stiffness    : E/ρ
```

## Complete reference data — Level 0

**Density** `[GUIDE]` — steel 7,850 · grey cast iron 7,200 · aluminium 2,700 · stainless 7,900 kg/m³.

**Young's modulus** `[GUIDE]` — steel 200 GPa (**all grades**) · grey cast iron 100–140 · aluminium 70 ·
stainless 193 · acetal 2.5–3.5.

**Yield strength** `[GUIDE]` — mild steel 250 · EN8 465 · EN19 hardened ~800 MPa.

**Factor of safety** `[PRACTICE]` — static ductile 1.5–2 · fixture general 2–3 · dynamic 3–4 ·
uncertain 4–6 · brittle 5–8.

**Friction coefficient** `[GUIDE]` — steel/steel dry 0.15–0.25, lubricated 0.08–0.15 · steel/aluminium
0.20–0.30 · serrated 0.30–0.50. **Coolant roughly halves μ.**

**Specific cutting force k_c** `[GUIDE]` — aluminium 400–800 · cast iron 900–1,400 · mild steel
1,500–1,800 · EN8 1,800–2,100 · alloy steel 2,100–2,900 · stainless 2,000–2,600 · titanium 1,800–2,400 ·
Inconel 2,700–4,000 N/mm².

**Cutting allowances** `[GUIDE]` — shock 1.3–2.0 · tool wear up to 1.5 · drill breakthrough spike ~1.5.

**Thermal expansion** `[GUIDE]` — steel 11.5 · aluminium 23 × 10⁻⁶/°C.

**ISO 2768-1 class m linear** `[STD]` — 0.5–6 ±0.1 · 6–30 ±0.2 · 30–120 ±0.3 · 120–400 ±0.5 ·
400–1000 ±0.8 · 1000–2000 ±1.2 mm.

**Hardness landmarks** `[GUIDE]` — mild steel ~150 HBW · EN8 normalised ~200 HBW · EN19 H&T ~40 HRC
(392 HV) · EN31 hardened ~60 HRC (697 HV) · hard chrome 850–1000 HV · nitrided 900–1200 HV.

**Coating thickness** `[GUIDE]` — black oxide 1–2 · phosphate 5–15 · zinc 8–25 · electroless nickel
5–50 · hard chrome 20–100 · anodise II 5–25 · hard anodise 25–100 · paint 50–150 µm.

**Fixture material shortlist** `[PRACTICE]` — mild steel structure · EN8/C45E general · EN19/42CrMo4
loaded pins 40–45 HRC · EN31/100Cr6 locators 58–62 HRC.

**Fixture deflection budget** `[GUIDE]` — 10–20% of the affected part tolerance, pending the full error
budget at L23.11.

All values are for **estimation and learning**. For design release, obtain manufacturer data `[MFR]`.

## All Level 0 exercises

Reply `SOLVE <id>` for a full worked solution to any of these.

| Module | Lessons | Exercises |
|---|---|---|
| 0.1 | L0.1.1–L0.1.4 | E0.1.1-B/I/A … E0.1.4-B/I/A (12) |
| 0.2 | L0.2.1–L0.2.5 | E0.2.1-B/I/A … E0.2.5-B/I/A (15) |
| 0.3 | L0.3.1–L0.3.4 | E0.3.1-B/I/A … E0.3.4-B/I/A (12) |
| 0.4 | L0.4.1–L0.4.4 | E0.4.1-B/I/A … E0.4.4-B/I/A (12) |
| 0.5 | L0.5.1–L0.5.5 | E0.5.1-B/I/A … E0.5.5-B/I/A (15) |

**66 exercises across Level 0**, plus drawing exercises `DX-<lesson>` and the assessment.

If you work only three, work these: **E0.4.2-A** (perimeter profiling — force, direction, locators,
clamping), **E0.3.4-A** (VMC deflection — the complete stiffness argument), and **E0.5.3-A** (heat
treatment specification for a full fixture).

## What Level 0 has given you

You can now:
- Read an engineering drawing correctly, including projection, sections, line types and tolerances
- Identify how a part is made and what that implies for holding it
- Calculate forces, moments, stress, friction and deflection
- Estimate cutting forces and know which direction they act
- State what each machining operation demands of a fixture
- Read a machine specification and determine what will fit
- Select and specify materials, heat treatment, hardness and surface finish
- Recognise the difference between a strength problem and a stiffness problem
- Recognise when a clamping requirement is telling you a stop is missing

What you **cannot** yet do — and what Level 1 onwards will teach — is locate a part correctly. You have
the physics and the materials; you do not yet have the theory of location. That is the subject of the
next stage, and it is where fixture design proper begins.

## What comes next

```
LEVEL 0  ✓ ENGINEERING FOUNDATION                     COMPLETE

LEVEL 1  ► INTRODUCTION TO JIGS AND FIXTURES
           What a fixture is · jig vs fixture · the elements ·
           types by process · economics · the design workflow

LEVEL 2    FIXTURE ELEMENTS AND STANDARD COMPONENTS
LEVEL 3    THE DESIGN PROCESS AND REQUIREMENT CAPTURE
LEVEL 4    LOCATION THEORY — 3-2-1, DEGREES OF FREEDOM
           ↑ Where Level 0 pays off completely. Every principle
             you have learned becomes a design decision here.
LEVEL 5    CLAMPING PRINCIPLES
```

Level 1 is a shorter level than Level 0 and will be delivered in a single part.

---

**Send `NEXT` to begin Level 1.**

*(Or `SOLVE <exercise-id>` for a worked solution, `ASSESS` to discuss your assessment answers, or ask
any question about Level 0 before moving on.)*

---

*MASTER INDUSTRIAL FIXTURE DESIGN ENGINEERING — From Scratch to Production-Ready Professional*
*Level 0, Part 3 of 3 — Materials, Heat Treatment and Level 0 Assessment*
*Level 0 complete: 5 modules · 22 lessons · 66 exercises · 40-question assessment*
*All schematics in this document are instructional only — FOR TRAINING ONLY, NOT FOR MANUFACTURE.*
