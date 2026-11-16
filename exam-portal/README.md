# MSEC Exam Portal — U24CS302 Data Structures

A Skillrack-style exam portal built from the U24CS302 question bank
(5 units × 20 MCQ + 5 debugging + 4 coding = 145 questions).

## Run it

Open `index.html` directly, or serve the folder:

```powershell
python -m http.server 8000
# then visit http://127.0.0.1:8000/
```

Compiling and running code uses the public Judge0 API (`ce.judge0.com`),
so the **coding / debugging sections need an internet connection**.
MCQ questions work fully offline.

## Modes

The start screen offers three modes:

| Mode | Paper | Timer |
| ---- | ----- | ----- |
| **Practice** — Unit 1–5 | Full unit paper: 20 MCQ + 5 debugging + 4 coding (105 marks) | No limit at all; no pause, no auto-submit |
| **Unit exam** — one unit | Same full unit paper (105 marks) | 120 minutes, with pause |
| **Model exam** — all units | 1 debugging + 1 coding from every unit (10 questions) | 180 minutes, with pause |

The model exam is exactly **100 marks**: 5 debugging × 5 + 5 coding × 15.
Every attempt draws a fresh shuffle of one debugging and one coding problem
from each unit, then shuffles the order. The chosen questions are saved with
the attempt, so reloading resumes the identical paper.

## Sections and marks

| Section   | Marks each | Practice / unit exam | Model exam |
| --------- | ---------- | -------------------- | ---------- |
| MCQ       | 1          | 20 questions (20)    | —          |
| Debugging | 5          | 5 questions (25)     | 5 (25)     |
| Coding    | 15         | 4 questions (60)     | 5 (75)     |

Code sections earn marks proportionally to the hidden test cases passed.
Practice and unit exams total 105 marks; the model exam totals 100.

## Features

- Three-column layout: question palette · question · answer/editor
- Three modes: untimed practice, timed 120-minute unit exam, 180-minute
  100-mark model exam shuffled from a per-unit blueprint
- Section selector, live countdown, pause, Submit Test with `END` confirmation
- MCQ answers can be locked and unlocked; palette tracks answered /
  bookmarked / skipped / not-viewed states
- CodeMirror editor with syntax highlighting, font size and editor theme controls
- Real C compilation via Judge0, sample runs, custom input, hidden test-case table
- Debugging questions show locked header code and locked driver code around the editable function
- Autosave and resume, light/dark theme, printable scorecard with per-question review
- Keyboard shortcuts: `Ctrl+Enter` run, `Ctrl+Shift+Enter` submit code,
  `P` pause, `B` bookmark, `T` theme, `←`/`→` previous/next

## Files

- `index.html` — markup shell, modals, script/style links
- `style.css` — design system, layout, dark theme, responsive, print
- `app.js` — state, rendering, Judge0 runner, navigation, report
- `data.js` — question bank (`DB`, units `u1`–`u5`)
- `lib/` — CodeMirror and its modes/themes
