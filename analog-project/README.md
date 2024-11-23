# expected development flow:
# ✓ dev build - NO basehref: /api/_analog/pages/index is never called

```bash
nvm use
pnpm install

open -n http://localhost:5173/
pnpm run dev

```

# ✖ prod build - NO basehref: /api/_analog/pages/index is called.

```bash
nvm use
export VITE_ANALOG_PUBLIC_BASE_URL="http://localhost:3000"
pnpm run build

export NITRO_APP_BASE_URL="/"
cd dist/analog

open -n http://localhost:3000/
node server/index.mjs
```


# ✖ prod build - WITH basehref: /api/_analog/pages/index is called.

```bash
nvm use
export VITE_ANALOG_PUBLIC_BASE_URL="http://localhost:3000/basehref"
pnpm run build --baseHref='/basehref/'

export NITRO_APP_BASE_URL="/basehref/"
cd dist/analog

open -n http://localhost:3000/basehref/
node server/index.mjs
```
