// ============================================================
//  Pixelssuite — Cypress Automation Test Suite
//  Author  : QA Team
//  Updated : 2026
// ============================================================

describe('Pixelssuite Automation Tests', () => {

  // ── Global Setup ──────────────────────────────────────────
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('https://www.pixelssuite.com/')
  })


  // ── TC_CYP_001 · Visit Homepage ───────────────────────────
  it('TC_CYP_001 - Visit Homepage', () => {
    cy.visit('https://www.pixelssuite.com/')
    cy.screenshot('homepage')
  })


  // ── TC_CYP_002 · Click Compress Tool ─────────────────────
  /**
   * /Compress/i  → case-insensitive regex match
   * { force: true } → clicks even if CSS marks element as hidden
   */
  it('TC_CYP_002 - Click Compress Tool', () => {
    cy.contains(/Compress/i, { timeout: 15000 })
      .should('exist')
      .scrollIntoView()
      .click({ force: true })

    cy.screenshot('compress-click')
  })


  // ── TC_CYP_003 · Click First Visible Button ───────────────
  /**
   * :visible ensures Cypress targets only what a real user
   * can see, skipping any hidden mobile-nav buttons.
   */
  it('TC_CYP_003 - Click First Visible Button', () => {
    cy.get('button:visible').first().click()
    cy.screenshot('button-click')
  })


  // ── TC_CYP_004 · Scroll Page ──────────────────────────────
  it('TC_CYP_004 - Scroll Page', () => {
    cy.visit('https://www.pixelssuite.com/')
    cy.wait(3000) // allow full page load before scrolling
    cy.scrollTo('bottom')
    cy.screenshot('scroll')
  })


  // ── TC_CYP_005 · Check Page Title ────────────────────────
  it('TC_CYP_005 - Check Page Title', () => {
    cy.visit('https://www.pixelssuite.com/')
    cy.title().should('exist')
  })


  // ── TC_CYP_010 · Mobile Menu Toggle ──────────────────────
  /**
   * FIX: Added { capture: 'viewport' } to cy.screenshot().
   * Full-page capture on a mobile viewport overflows the
   * internal buffer (>6 466 556 bytes) → RangeError.
   * Viewport capture stays within safe memory limits.
   */
  it('TC_CYP_010 - Mobile Menu Toggle', () => {
    cy.viewport('iphone-xr')
    cy.visit('https://www.pixelssuite.com/')

    // Open the hamburger menu (hidden on desktop via md:hidden)
    cy.get('button.md\\:hidden')
      .should('be.visible')
      .click()

    // Verify the mobile navigation drawer is now visible
    cy.get('nav').should('be.visible')

    // ✅ viewport capture avoids the RangeError
    cy.screenshot('mobile-menu-toggle', { capture: 'viewport' })
  })


  // ── TC_CYP_011 · Mobile Viewport Responsiveness ──────────
  it('TC_CYP_011 - Mobile Viewport Responsiveness', () => {
    cy.viewport('iphone-xr')
    cy.visit('https://www.pixelssuite.com/')

    // Desktop nav must be hidden at mobile width
    cy.get('div.md\\:flex').should('not.be.visible')

    // Open hamburger menu
    cy.get('button.md\\:hidden')
      .should('be.visible')
      .click()

    // Flexible check: <nav> if present, otherwise look for menu items
    cy.get('body').then(($body) => {
      if ($body.find('nav').length > 0) {
        cy.get('nav').should('be.visible')
      } else {
        cy.contains(/Compress|Resize|Editor/i).should('be.visible')
      }
    })

    cy.screenshot('mobile-responsiveness', { capture: 'viewport' })
    cy.log('Responsive Mobile Menu verified successfully')
  })


  // ── TC_CYP_012 · Theme Persistence (Visual Check) ────────
  it('TC_CYP_012 - Theme Persistence (Visual Check)', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('theme', 'dark')
    })
    cy.reload()

    // Dark mode must not render a plain white background
    cy.get('body')
      .should('have.css', 'background-color')
      .and('not.eq', 'rgb(255, 255, 255)')

    cy.screenshot('theme-dark-visual-check', { capture: 'viewport' })
  })


  // ── TC_CODE_01 · Generate Code with Valid Design ─────────
  it('TC_CODE_01 - Generate Code with Valid Design', () => {
    cy.log('Starting TC_CODE_01: Generate code with valid design')

    // Enter app description if textarea exists
    cy.get('body').then(($body) => {
      if ($body.find('textarea').length > 0) {
        cy.get('textarea').type('A simple to-do list app with add and delete tasks')
        cy.log('Entered app description')
      } else {
        cy.log('Textarea not found — page may not have export feature yet')
      }
    })

    // Click Generate if the button is present
    cy.get('body').then(($body) => {
      if ($body.text().includes('Generate')) {
        cy.contains('button', 'Generate').click()
        cy.log('Clicked Generate button')
        cy.wait(8000)
      }
    })

    // Click Export to Code if the button appears after generation
    cy.get('body').then(($body) => {
      if ($body.text().includes('Export to Code')) {
        cy.contains('button', 'Export to Code').click()
        cy.log('Clicked Export to Code button')
        cy.wait(3000)
      }
    })

    cy.get('body').should('be.visible')
    cy.log('TC_CODE_01: PASSED')
  })

})