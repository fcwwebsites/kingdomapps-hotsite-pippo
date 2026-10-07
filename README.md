# Kingdomapps — Pippo preview hotsite

Public preview gate for **Pizzas & Esfihas Pippo** (Kingdomapps). A PIN-protected landing page at the repo root unlocks three static hotsite versions.

## Structure

```
/
  index.html      # preview gate
  gate.css / gate.js
  v1/ v2/ v3/     # static hotsites (HTML/CSS/JS + assets/)
```

## GitHub Pages

Pages is enabled from the `main` branch, site root `/`.

- Gate: https://fcwwebsites.github.io/kingdomapps-hotsite-pippo/
- Versions: `/v1/`, `/v2/`, `/v3/`

## Local preview

```bash
python3 -m http.server 8765
```

Then open `http://127.0.0.1:8765/`.
