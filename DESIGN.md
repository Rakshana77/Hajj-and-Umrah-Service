---
name: Modern Heritage
colors:
  surface: '#fcf8f8'
  surface-dim: '#ddd9d9'
  surface-bright: '#fcf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c8'
  surface-tint: '#5d5f5f'
  primary: '#5d5f5f'
  on-primary: '#ffffff'
  primary-container: '#ffffff'
  on-primary-container: '#747676'
  inverse-primary: '#c6c6c7'
  secondary: '#755b00'
  on-secondary: '#ffffff'
  secondary-container: '#fccc38'
  on-secondary-container: '#6f5600'
  tertiary: '#5f5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffffff'
  on-tertiary-container: '#777575'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#ffdf90'
  secondary-fixed-dim: '#f0c12c'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#fcf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Epilogue
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.2'
  h2:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  h3:
    fontFamily: Epilogue
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
This design system centers on a "Premium Spiritual Minimalist" aesthetic. It targets the discerning traveler who values both religious significance and high-end modern convenience. The brand personality is serene, authoritative, and impeccably organized.

The design style merges **Minimalism** with **Modern SaaS** influences. By stripping away unnecessary clutter and utilizing massive whitespace, the focus remains on the journey and the destination. A sense of luxury is established through the use of high-contrast typography and subtle textural details, such as light Islamic geometric watermarks that appear at 2-3% opacity, bridging ancient heritage with contemporary digital precision.

## Colors
The palette is built on a "High-Contrast Luxe" foundation. 

- **Primary White (#FFFFFF)**: Used for main containers and clarity.
- **Deep Black (#0B0B0B)**: Used for heavy-weight typography and icons to ensure maximum readability and a premium feel.
- **Golden Yellow (#F4C430)**: Reserved strictly for calls-to-action and critical brand highlights. It represents warmth and excellence.
- **Surface Tints**: A dual-layered background approach using a Light Yellow Tint for warmer, heritage-focused sections and Soft Gray for more technical or utilitarian modules.

## Typography
The typography strategy utilizes **Epilogue** for its bold, geometric, and editorial presence in headings. This creates a high-fashion, premium travel magazine vibe. 

For functional text, **Plus Jakarta Sans** provides a modern, approachable, and highly legible experience. Headings must always be rendered in Deep Black (#0B0B0B) to maintain the high-contrast aesthetic. Letter spacing is slightly tightened on display text to emphasize the "bold" brand personality.

## Layout & Spacing
The design system employs a **Fixed Grid** model for desktop (12 columns) and a fluid model for mobile devices. 

Layouts should prioritize "Breathability"—meaning vertical spacing (padding-top/bottom) is often more generous than typical SaaS products to evoke a sense of calm. Use the `lg` (48px) and `xl` (80px) units to separate major content sections. All components are aligned to an 8px baseline grid to ensure mathematical harmony.

## Elevation & Depth
Depth is handled with extreme restraint to maintain the minimalist feel.

- **Tonal Layering:** Most depth is achieved by placing White (#FFFFFF) cards against the Soft Gray (#F7F7F7) or Light Yellow (#FFF8E1) backgrounds.
- **Shadows:** Use a single, signature "Soft Veil" shadow for cards. This shadow should be very long and diffused: `0 20px 40px rgba(11, 11, 11, 0.04)`.
- **Accents:** Depth is reinforced through physical-style borders—specifically 4px top-borders on cards in Golden Yellow, creating a sense of "top-down" illumination and brand hierarchy.

## Shapes
The shape language is "Soft-Modern." Elements use a subtle 4px (0.25rem) radius. This provides a clean, professional edge that feels more structured and premium than fully rounded "bubbly" designs, while remaining more inviting than sharp 0px corners. 

Buttons and input fields follow this consistent Soft radius. Large image containers may occasionally use a larger `rounded-lg` (8px) for a slightly softer photographic frame.

## Components
- **Buttons:** Primary buttons use a Golden Yellow (#F4C430) background with Deep Black (#0B0B0B) text in a bold weight. No gradients.
- **Cards:** White background with a 4px Golden Yellow top border and the "Soft Veil" shadow. Content should have generous 32px internal padding.
- **Accordions:** Flat style with a 1px Soft Gray border. When expanded, the header background transitions to Light Yellow (#FFF8E1).
- **Input Fields:** Minimalist design with a 1px border in a mid-gray. Focus state switches the border to Deep Black with a 2px Golden Yellow bottom indicator.
- **Subtle Patterns:** Background watermarks (Islamic geometric motifs) should be applied only to the `body` or large section containers, never inside small components like buttons or chips.
- **Travel Chips:** Used for tags like "Halal Certified" or "Prayer Room Nearby." These use a Soft Gray background with Deep Black text and a 1px border.