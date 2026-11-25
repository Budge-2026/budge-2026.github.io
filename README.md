# BudgeRx Site

LegitScript-ready marketing site for **BudgeRx** (`[LEGAL_ENTITY]`).

## Stack

Vite + React + TypeScript + React Router + Tailwind CSS v4

## Develop

```bash
npm install
npm run dev
```

## Structure

```
src/
  constants/brand.ts    Brand name, placeholders, nav, treatments
  constants/policy.ts   Provider/pharmacy placeholders, policy helpers
  pages/legal/          Full Terms, Privacy, Refund, Telehealth consent content
  components/layout/    Header, Footer, PolicyShell, Layout
COMPLIANCE.md           Pre-launch LegitScript checklist
```

## Placeholders to replace before launch

- Entity: Budge Collinson LLC DBA BudgeRx (Florida LLC)
- Domain: budgerx.com
- Support: team@budgerx.com
- `[INTAKE_URL]`, `[LOGIN_URL]`
- `[CLINICAL_PROVIDER]`, `[FULFILLMENT_PHARMACY]`

## LegitScript note

This scaffold follows Kaigo Labs / Prime Life patterns: **full policy pages**, **footer disclaimer blocks**, **no LegitScript seal** until after certification. See `COMPLIANCE.md`.
