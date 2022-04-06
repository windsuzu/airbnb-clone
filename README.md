<p align="center">
  <img src="assets/demo.gif">
</p>

An Airbnb clone project written in `TypeScript`. The structure and UI are built with `NEXT.js` / `TailwindCSS v3`. There are also animations using `framer-motion`, `bar-of-progress`, a practical search bar using `react-date-range`, and MapBox integration using `react-map-gl`.


---
* [Airbnb Clone](#airbnb-clone)
  * [Installation](#installation)
  * [User Interfaces](#user-interfaces)
  * [Functionalities](#functionalities)
  * [Acknowledgement](#acknowledgement)


## Installation

* install Next.js with Typescript
  ```
  npx create-next-app@latest --ts airbnb-clone
  // or npx create-next-app@latest -e with-typescript airbnb-clone
  ```
* install tailwindcss
  ```
  https://tailwindcss.com/docs/guides/nextjs
  ```

## User Interfaces

* [HomePage](pages/index.tsx)
  * [Header & Searchbar](components/header.tsx)
  * [Banner](components/banner.tsx)
  * [Small Card (Explore Nearby)](components/small_card.tsx)
  * [Medium Card (Live Anywhere)](components/medium_card.tsx)
  * [Large Card](components/large_card.tsx)
  * [Footer](components/footer.tsx)

---

* [Search Page](pages/search/index.tsx)
  * [Info Card](components/info_card.tsx)
  * [MapBox & Markers & Popups](components/map.tsx)

## Functionalities

* framer-motion
* react-date-range
* bar-of-progress
* mapbox-gl & react-map-gl
* firebase

## Acknowledgement

* [Sonny Sangha](https://www.youtube.com/channel/UCqeTj_QAnNlmt7FwzNwHZnA)