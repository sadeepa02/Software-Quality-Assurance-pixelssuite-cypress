# 🧪 Pixelssuite – Cypress Automated Test Suite

> **IT4100 – Software Quality Assurance | SLIIT Year 4 | Semester 1 | 2026**

| Field | Details |
|---|---|
| **Student** | Tharushan I L S |
| **IT Number** | IT21315114 |
| **Role** | Automation Specialist – Cypress |
| **System Under Test** | [pixelssuite.com](https://www.pixelssuite.com/) |
| **Tool** | Cypress (JavaScript E2E Testing Framework) |
| **Test Cases** | 9 Automated Tests |
| **All Tests** | ✅ 9 / 9 PASSED |

---

## 📋 Table of Contents

- [What is This Project?](#what-is-this-project)
- [What is Cypress?](#what-is-cypress)
- [What is Being Tested?](#what-is-being-tested)
- [Test Cases Summary](#test-cases-summary)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation – Step by Step](#installation--step-by-step)
- [How to Run the Tests](#how-to-run-the-tests)
- [Screenshots](#screenshots)
- [Libraries and Dependencies](#libraries-and-dependencies)
- [Key Bug Fixed](#key-bug-fixed)
- [Author](#author)

---

## 📌 What is This Project?

This repository contains the **Cypress automated test suite** written as part of the **IT4100 Software Quality Assurance** group assignment at SLIIT.

The goal of this project is to demonstrate **automated end-to-end (E2E) testing** on a real-world web application — [Pixelssuite.com](https://www.pixelssuite.com/) — which is an online image editing platform that provides tools for compressing, resizing, converting, and editing images in the browser.

My responsibility in the group was to:
- Write automated test scripts using **Cypress**
- Cover core UI and feature functionality
- Capture test execution screenshots
- Identify and document defects found through automation

---

## 🤔 What is Cypress?

**Cypress** is a modern, JavaScript-based end-to-end testing framework built specifically for web applications. Unlike older tools like Selenium, Cypress runs **directly inside the browser**, which makes it:

- ⚡ **Faster** — no network proxy layer between test and browser
- 🔄 **Automatic waiting** — Cypress automatically waits for elements to appear; no manual `sleep()` calls needed
- 📸 **Built-in screenshots** — captures screenshots on failure or on command
- 🔍 **Real-time debugging** — you can watch tests run live in the Cypress GUI
- 📱 **Responsive testing** — easily simulate mobile viewports with `cy.viewport()`

**Why I chose Cypress for this assignment:**
- Simple, readable JavaScript API
- Ideal for modern JavaScript-heavy frontends like Pixelssuite
- Built-in screenshot capture is perfect for test evidence documentation
- Easy to set up — no Java, no Selenium server, no WebDriver configuration

---

## 🌐 What is Being Tested?

The system under test is **[pixelssuite.com](https://www.pixelssuite.com/)** — a browser-based image tool suite.

Features tested in this script:

| Feature | Description |
|---|---|
| Homepage Load | Verifies the site loads correctly |
| Compress Tool | Navigates to and clicks the Compress feature |
| UI Buttons | Verifies visible buttons are clickable |
| Page Scroll | Tests full-page scrolling behaviour |
| Page Title | Checks the HTML `<title>` tag exists |
| Mobile Menu Toggle | Tests hamburger menu on iPhone XR viewport |
| Mobile Responsiveness | Verifies desktop nav hides and mobile menu works |
| Theme Persistence | Checks dark mode setting persists after page reload |
| Code Generation | Tests the Generate Code feature flow |

> ⚠️ **Note:** The `Transliteration` feature was **excluded** from testing as per assignment instructions.

---

## ✅ Test Cases Summary

| Test ID | Description | Feature | Status |
|---|---|---|---|
| TC_CYP_001 | Visit Homepage | Navigation | ✅ PASS |
| TC_CYP_002 | Click Compress Tool | Feature Nav | ✅ PASS |
| TC_CYP_003 | Click First Visible Button | UI Interaction | ✅ PASS |
| TC_CYP_004 | Scroll Page to Bottom | UI / Scroll | ✅ PASS |
| TC_CYP_005 | Check Page Title Exists | UI / SEO | ✅ PASS |
| TC_CYP_010 | Mobile Menu Toggle | Responsive | ✅ PASS |
| TC_CYP_011 | Mobile Viewport Responsiveness | Responsive | ✅ PASS |
| TC_CYP_012 | Theme Persistence – Dark Mode | UI / Theme | ✅ PASS |
| TC_CODE_01 | Generate Code with Valid Design | Code Generation | ✅ PASS |

---

## 📁 Project Structure

```
pixelssuite-cypress-sqa/
│
├── cypress/
│   ├── e2e/
│   │   └── pixelssuite.cy.js      ← All 9 test cases
│   │
│   └── screenshots/               ← Auto-captured screenshots
│       ├── homepage.png
│       ├── compress-click.png
│       ├── button-click.png
│       ├── scroll.png
│       ├── mobile-menu-toggle.png
│       ├── mobile-responsiveness.png
│       ├── theme-dark-visual-check.png
│       └── ...
│
├── cypress.config.js              ← Cypress configuration
├── package.json                   ← Project metadata and dependencies
├── package-lock.json              ← Exact dependency versions (auto-generated)
├── .gitignore                     ← Excludes node_modules from GitHub
└── README.md                      ← This file
```

---

## ⚙️ Prerequisites

Before you can run this project, you need to install the following on your computer.  
**Follow in order — do not skip any step.**

### 1. Node.js
Node.js is the JavaScript runtime that Cypress needs to work. Think of it as the engine.

- Download from: **https://nodejs.org**
- Choose the **LTS (Long Term Support)** version
- Install it like a normal program (Next → Next → Finish)

Verify it installed correctly — open your terminal and type:
```bash
node --version
```
You should see something like: `v20.11.0`

```bash
npm --version
```
You should see something like: `10.2.4`

> **npm** (Node Package Manager) comes bundled with Node.js automatically. You use it to install Cypress.

### 2. Git
Git is used to download (clone) this project from GitHub to your computer.

- **Windows:** Download from https://git-scm.com/download/win → install with all defaults
- **Mac:** Open Terminal → type `git --version` → if not installed, follow the prompt
- **Linux:** `sudo apt install git -y`

Verify:
```bash
git --version
```

---

## 🚀 Installation – Step by Step

Follow these exact steps. Each command is typed in your **Terminal** (Mac/Linux) or **Git Bash** (Windows).

### Step 1 — Clone the repository

This downloads the project from GitHub to your computer:

```bash
git clone https://github.com/YOUR-USERNAME/pixelssuite-cypress-sqa.git
```

### Step 2 — Go into the project folder

```bash
cd pixelssuite-cypress-sqa
```

### Step 3 — Install Cypress and all dependencies

This reads the `package.json` file and automatically downloads everything needed:

```bash
npm install
```

> ⏳ This may take 1–3 minutes. It downloads Cypress (~200MB) into a `node_modules/` folder.  
> That folder is **not** uploaded to GitHub (it's in `.gitignore`) — that's why you must run `npm install` yourself.

### Step 4 — Verify Cypress installed correctly

```bash
npx cypress verify
```

You should see: `✔  Cypress application is valid and should be able to open`

---

## ▶️ How to Run the Tests

You have two options:

### Option A — Interactive Mode (GUI) — Recommended for beginners

This opens the Cypress visual interface where you can watch tests run live in a browser:

```bash
npx cypress open
```

Then in the Cypress GUI:
1. Click **E2E Testing**
2. Choose a browser (Chrome recommended)
3. Click **Start E2E Testing**
4. Click on `pixelssuite.cy.js`
5. Watch all 9 tests run ✅

### Option B — Headless Mode (Terminal only)

This runs all tests silently in the terminal and saves screenshots automatically:

```bash
npx cypress run
```

Results appear in the terminal. Screenshots are saved to `cypress/screenshots/`.

---

## 📸 Screenshots

Cypress automatically saves screenshots during test execution to the `cypress/screenshots/` folder.

| File | Test |
|---|---|
| `homepage.png` | TC_CYP_001 – Homepage load |
| `compress-click.png` | TC_CYP_002 – Compress tool |
| `button-click.png` | TC_CYP_003 – First visible button |
| `scroll.png` | TC_CYP_004 – Scroll to bottom |
| `mobile-menu-toggle.png` | TC_CYP_010 – Mobile menu |
| `mobile-responsiveness.png` | TC_CYP_011 – Mobile viewport |
| `theme-dark-visual-check.png` | TC_CYP_012 – Dark mode |

---

## 📦 Libraries and Dependencies

All dependencies are defined in `package.json` and installed via `npm install`.

| Package | Version | Purpose |
|---|---|---|
| `cypress` | ^13.x | The core testing framework — runs all test scripts in the browser |
| `node` | 18.x or 20.x | JavaScript runtime — required to run Cypress |
| `npm` | 9.x or 10.x | Package manager — used to install cypress and run scripts |

No other external libraries are needed. Cypress bundles everything it needs internally, including:
- Its own browser automation engine
- Assertion library (Chai — for `.should()` checks)
- Screenshot utility
- Viewport simulation

---

## 🐛 Key Bug Fixed

**TC_CYP_010 — Mobile Menu Toggle: `RangeError: The value of "offset" is out of range`**

**Problem:**  
When Cypress tries to take a full-page screenshot on a mobile viewport (`iphone-xr`), it attempts to stitch multiple page segments together. The total pixel buffer exceeds the internal limit of **6,466,556 bytes**, causing a fatal `RangeError`.

**Fix:**  
Added `{ capture: 'viewport' }` to all `cy.screenshot()` calls inside mobile viewport tests.

```js
// ❌ Before — causes RangeError
cy.screenshot('page title')

// ✅ After — fixed
cy.screenshot('mobile-menu-toggle', { capture: 'viewport' })
```

This tells Cypress to only capture what is currently **visible on screen** instead of the full page, which stays safely within memory limits.

---

## 👤 Author

**Tharushan I L S**  
IT Number: IT21315114  
Module: IT4100 – Software Quality Assurance  
SLIIT – BSc (Hons) in Information Technology, Year 4, 2026  

Group Role: Automation Specialist (Cypress)  
Other group tools: Playwright (Dassa), Selenium (Akash), [Tool] (Member 4)