# Plant Operations Cockpit — Potens IT Frontend Assignment

A single-page operations dashboard built for the Potens IT Services frontend take-home assignment (Q2: Operations Cockpit Dashboard). The dashboard simulates a senior plant operations user's 9 AM view: pending approvals, live anomaly alerts, and a real-time production metric.

## Tech Stack
- React 19 (Vite)
- Tailwind CSS v4
- Redux Toolkit + React Redux (state management)
- No backend — all data is mocked and held in-memory via Redux

## How to Run

```bash
git clone https://github.com/ishanshinde738/potens-intern-frontend-ishan-shinde.git
cd potens-intern-frontend-ishan-shinde
npm install
npm run dev
```

Then open `http://localhost:5173/` in your browser.

## Features Implemented (Required)

- **Top 5 Action Items**: Each item shows a title, one-line context, and Approve/Hold buttons. State is managed in a Redux slice (`actionsSlice.js`); approving or holding updates the status badge instantly.
- **Anomaly Panel**: 6 mock anomalies (machine vibration, process capability, temperature drift, etc.), color-coded by severity (red = high, amber = medium, gray = low).
- **Live Ticking Metric**: "Units Processed Today" increments every 1.5 seconds via `setInterval` inside a `useEffect`, simulating a live production counter.
- **Full Bilingual Toggle (EN/HI)**: Every label, heading, action item, and anomaly (including severity badges) switches between English and Hindi. Translations are centralized in `translations.js`; anomaly content uses a bilingual object structure (`{ en, hi }`) per field.
- **Responsive Layout**: Built with a Tailwind CSS grid (`grid-cols-1 md:grid-cols-2`) so the two panels stack into a single column below the tablet breakpoint (768px). Verified manually by resizing the browser window.
- **Tailwind CSS**: Used throughout for all styling, no custom CSS files.

## Stretch Goal Implemented

- **Keyboard Shortcuts**: `j`/`k` navigate focus up/down through the action items list (a blue border indicates the focused card), `a` approves the focused item, `h` holds it. Implemented via a `keydown` event listener in `TopActionsPanel.jsx`, scoped to ignore keystrokes when an input/textarea is focused.

## Design Decisions

- **Domain choice**: I picked a manufacturing/plant-operations framing (QA sign-offs, Cpk process capability, machine anomalies) rather than a generic business dashboard, since it reflects real domain knowledge I have from prior process-capability and quality-systems work.
- **Redux Toolkit over Context API**: Chosen because action approve/hold state needs to be read and updated from multiple places (list item clicks and keyboard shortcuts), and Redux Toolkit's slice pattern keeps that logic centralized and predictable as the app grows.
- **Bilingual data structure for anomalies**: Rather than duplicating anomaly arrays per language, each anomaly's translatable fields (`metric`, `description`) are objects keyed by language code (`{ en, hi }`), keeping a single source of truth per anomaly instead of two parallel arrays that could drift out of sync.
- **No backend / no localStorage**: Since the brief allows mock JSON data with no backend requirement, all data lives in Redux state and resets on page refresh. This was a deliberate scope decision to spend the available time on interaction quality, bilingual completeness, and layout polish rather than persistence.
- **Live metric implementation**: Used a simple `setInterval` with a randomized increment rather than a WebSocket or polling setup, since the brief only requires a "ticking" counter, not real backend data.

## What's Broken / Unfinished

- Live metric resets to its starting value on page refresh (no persistence) — acceptable given the no-backend scope of this assignment.
- No dark mode toggle — the dashboard uses a fixed dark theme by default; a toggle between light/dark was not attempted.
- No low-bandwidth toggle (stretch goal) — not attempted due to time prioritization toward the required features and keyboard shortcuts.
- Keyboard shortcuts do not currently show a visible on-screen legend beyond the small hint text in the panel header; a more discoverable UI (e.g., a "?" help overlay) would be a natural next step.

## What I'd Build Next

- Add a low-bandwidth mode toggle that drops non-essential visual elements for slow connections.
- Add a proper dark/light theme toggle with a persisted preference.
- Persist action approve/hold state across refreshes using localStorage (browser storage) or a lightweight backend.
- Add unit tests for the Redux slices (approve/hold reducers) and a basic render test for each panel.
- Add more Indian languages beyond Hindi, following the same `{ en, hi, ... }` translation pattern already in place.

## AI Use Log

- **Claude (Anthropic)** — approximately 60–70 messages — used throughout the project for: initial planning and step-by-step guidance, Tailwind v4 setup troubleshooting, writing the Redux store/slices, writing all React components (TopActionsPanel, AnomalyPanel, LiveMetric, Header, LanguageToggle), debugging a PowerShell file-creation issue, implementing the keyboard shortcuts stretch goal, fixing the anomaly panel's incomplete bilingual translation, and drafting this README.