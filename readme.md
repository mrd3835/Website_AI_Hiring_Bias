# Project 03: Accessibility and Design Choices

## Accessibility Practice
- Used **relative font units (`rem`)** for all text.
  - Body font: `1.125rem`
  - Headings and paragraphs scale proportionally
  - Buttons, labels, and other text also use `rem`
- This allows users to **resize text easily** without breaking layout, helping those with visual impairments.

## Page Layout Patterns
- **Home page (hero banner)**: follows a **Z-pattern** (page title, nav, hero text)
- **Internal pages**: follow a **Gutenberg/F-pattern** (headings and content cards guide the eye)

## CRAP Principles
- **Contrast**: dark text on light background; accent colors for hover/focus
- **Repetition**: consistent use of colors, shadows, padding, and rounded corners
- **Alignment**: headings, nav, and cards aligned for predictable reading
- **Proximity**: related content grouped together (headings + intro, side-by-side images)

## Typography Choices
- **Fonts**: `Inter` for body, `Georgia` for headings
- **Line-height**: 1.6 for easy reading
- **Max-width**: 60 characters per line for readability
- **`rem` units**: scalable and accessible across devices

## Other Design Decisions
- **Hero banner**: centered overlay text on home page
- **Sticky navigation**: always visible at the top
- **Responsive design**: media queries adjust layout and font sizes for tablets and mobiles
- **Cards & side-by-side elements**: flexible layouts using flexbox

**Summary**:  
Using `rem` units, clear layout patterns, CRAP principles, and responsive design, this site is **modern, readable, and accessible** for users of all abilities.
