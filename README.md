---

# Catalyst MCSets Theme

A modern, lightweight, and highly animated **MCsets storefront theme** designed for clean UI, smooth interactions, and strong visual identity — without heavy glow spam.

Built for performance, customization, and a polished game-like feel.

---

## ✨ Features

### 🎨 Design System

* **Fonts:** Nunito + Barlow Condensed
* **Style:** Dark, minimal, game-inspired UI
* **Base Color:** Deep navy (`#0c0e14`)
* **Cards:** Cut-corner design (`.vv-cut`) instead of standard rounded UI
* **Low glow usage** — relies on shadows and contrast instead

---

### 🖼️ Banner Background

* Full-site background image
* Effects:

  * `blur(8px)`
  * `brightness(0.28)`
  * slight zoom for edge cleanup
* Fixed positioning (parallax feel on scroll)

---

### 🧩 Category Tiles (Storefront)

* **2 tiles per row**
* Horizontal layout (~120px height)
* Banner image fades in from the right (35% opacity)
* Hover effects:

  * Lift animation
  * Image scale

#### 🎨 Dynamic Colors

* Uses **category.color** from MCsets if set
* Falls back to automatic palette cycling:

  * Red / Purple / Amber / Cyan / Emerald / Pink (via `nth-child`)

---

### 🛍️ Product Grid (Category View)

* **3 tiles per row**
* Square image layout
* Hover animation:

  * Image zoom (`scale(1.12)`)
  * Smooth transition back on mouse leave
* Footer includes:

  * Name
  * Price
  * Buy button

---

### 💰 Donation Goal (Sidebar)

* SVG **donut/ring progress chart**
* Displays:

  * % progress
  * current / target values
* Styled with store accent color

---

### 📦 Package Page (Custom Layout)

* Fully redesigned (not default MCsets layout)
* Features:

  * Large image header with gradient overlay
  * Title overlaid on image
  * Sticky purchase panel:

    * Price
    * Buy / Cart buttons
    * Trust badges

---

### ⚡ Animations

* Page load: `vv-up` (fade + upward motion)
* Staggered tile animations
* Hover effects:

  * Category tiles: slight lift
  * Product tiles: lift + image zoom
  * Buttons: scale interaction feedback

---

### 📱 Mobile Support

* Responsive grid system
* Optimized tile stacking
* Touch-friendly interactions
* Maintains animation feel without performance issues

---

## 📁 File Structure

```
glow-theme/
├── addons/
│   ├── bundle-badge.twig
│   ├── flash-sale-badge.twig
│   ├── preorder-badge.twig
│   └── wishlist-button.twig
├── components/
│   ├── cart-drawer.twig
│   ├── category-sidebar.twig
│   ├── footer.twig
│   ├── navbar.twig
│   └── package-card.twig
├── assets/
│   ├── css/
│   │   └── theme.css
│   ├── js/
│   │   └── cart.js
├── layouts/
│   └── base.twig
└── pages/
    ├── account.twig
    ├── bundles.twig
    ├── checkout.twig
    ├── discord-link.twig
    ├── fail.twig
    ├── gift-card-success.twig
    ├── giftcards.twig
    ├── package.twig
    ├── page.twig
    ├── storefront.twig
    └── success.twig
```

---

## 🛠️ Customization

### Category Colors

If a category has a color set in MCsets:

```twig
{% if category.color %}
  style="background: {{ category.color }};"
{% endif %}
```

* Overrides default palette
* Falls back to CSS `nth-child` colors if not set

---

### Styling

Main styles are located in:

```
assets/css/theme.css
```

You can tweak:

* Tile sizes
* Animation speeds
* Color palette
* Shadows / borders

---

## 🚀 Goals

* Lightweight performance
* Clean UI without clutter
* Smooth animations everywhere
* Fully customizable layout
* Better UX than default MCsets themes

---

## 📦 Installation

1. Upload theme to your MCsets store
2. Apply theme in dashboard
3. Configure:

   * Banner image
   * Category colors
   * Donation goal

---

## 🤝 Contributing

Pull requests are welcome.

If you want to:

* Improve animations
* Add components
* Optimize performance
* Enhance mobile UX

Feel free to contribute.

---

## 📜 License

Open-source — use, modify, and distribute freely.
Would prefer credit but optional.

---
