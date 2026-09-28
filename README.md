# Minimal — a Destesi Design shop template

A centred headline over a wide rounded photo, and products floating on soft tiles with room to breathe.

Best for: Design objects, tech and premium goods.

This repository is an **overlay**, not a standalone app. Destesi Design lays it
over its shop base (the shell, the section runtime, the checkout and the
vendored Commerce client) when a merchant starts their shop from it, and the
merchant's copy is theirs from that moment. The shop's backend is Destesi
Commerce, which reads its catalog and stock from Destesi Inventory; the page
reaches it only through the same-origin `shop-api/` its host proxies.

```
manifest.json        catalog entry: id, name, description, best_for, backend, es, hero_compact
src/pages.jsx        the pages in code: Home(), Product() — one <Section> literal per block
src/theme.css        the look: --shop-* tokens and rules over the base's shop.css
src/demo.js          the sample shop shown only where no shop is behind the page
src/demo/*.webp      its generated photos
skills/*.md          guidance the Design agent reads in a project made from this template
```

Run it locally from a Destesi checkout:
`make -C apps/design/api template-dev DIR=<path to this repo>`.

The rules a template follows (refused paths, the pages shape, copy that goes
live until edited) are in
[the templates guide](https://github.com/destesi-design-templates/.github/blob/main/TEMPLATES.md)
and are enforced by Design's tests when a new commit is pinned. Nothing merged
here reaches a merchant until Design pins the commit in its `LOCK.json`.
