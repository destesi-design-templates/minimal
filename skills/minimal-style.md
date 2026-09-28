# Skill: Minimal style

Read when: changing the look of, or adding a section to, a shop started from the Minimal template.

Minimal: the product and nothing else. Inter at large sizes with tight tracking, a pale grey page, products floating on soft rounded tiles and pill buttons.

- The look is `src/theme.css`: change a token there first (colours, fonts, radius, spacing), then a single rule. This template's tokens: `--shop-bg: #f5f5f3`, `--shop-ink: #111111`, `--shop-font-body: 'Inter', sans-serif`, `--shop-font-display: 'Inter', sans-serif`, `--shop-radius-button: 999px`, `--shop-radius-card: 22px`.
- `--shop-accent` is the merchant's brand colour on a live shop. Never build a large panel or a background on it; big tinted surfaces use this file's own colours.
- A new section takes the look from the tokens. Style it with a `section[data-section-type="<type>"]` rule in `src/theme.css`, in the voice of the rules already there.
- Copy stays generic for the vertical (Design objects, tech and premium goods) and promises nothing the merchant may not keep: no delivery times, return windows, warranties, discounts, scarcity or ratings.
