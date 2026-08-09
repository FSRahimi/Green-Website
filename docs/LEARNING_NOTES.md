# Learning Notes

## What is Next.js?

A React framework that provides routing,
performance optimizations,
and server-side rendering.

---

## What is page.js?

Any page.js inside the app folder
becomes a route.

Example

app/about/page.js

↓

/about

---

## What is [slug]?

A dynamic route.

Example

/provinces/herat

slug = "herat"

---

## What is React Flow?

A library for interactive nodes
and connections.

---

## What is Framer Motion?

A React animation library.

---

## What is Tailwind CSS?

A utility-first CSS framework.

Instead of writing CSS files,
we use utility classes directly.

Example

className="flex items-center justify-center"
## SVG (Scalable Vector Graphics)

SVG is a vector image format.

Unlike PNG or JPG, SVG images are made of shapes instead of pixels.

Benefits:
- Infinite scaling without losing quality.
- Individual elements can be styled.
- Perfect for interactive maps.
- Can respond to hover and click events.

Why Green Future uses SVG:
Each Afghan province can become an interactive element that opens a popup and navigates to a detail page.
## React Component

A React component is a reusable piece of the user interface.

Example:
AfghanistanMap.jsx

Benefits:
- Reusable
- Easier to maintain
- Keeps code organized
## SimpleMaps Architecture

countrymap.js
- The map engine.
- Generates the interactive SVG.
- Handles hover, click, and rendering.

mapdata.js
- Stores map settings.
- Stores province information.
- Controls colors, labels, hover styles, and interactions.

The map engine reads mapdata.js to render the Afghanistan map.
## state_specific

The `state_specific` object stores configuration for each Afghan province.

Each province has:
- Unique ID (e.g., AFHER)
- Name
- Color
- Hover color
- Description
- URL

This allows the application to customize each province individually.