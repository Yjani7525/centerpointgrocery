# CenterPoint Grocery Website (v3) — Public + Staff Lookup (Netlify)

## Public
- `/` Home (search opens public inventory)
- `/products.html` Public inventory (NO price/qty)
- `/offers.html` Public offers

## Staff (requires Netlify Identity)
- `/staff/` Staff Lookup (shows price + qty)
- `/admin/` Admin (manage staff + ops notes)
- `/private/products_private.csv` Private inventory feed

## Why Netlify
GitHub Pages cannot securely hide prices/quantities. Netlify Identity + role-based access protects staff/admin pages and private data.

## Setup steps (high level)
1) Deploy this repo on Netlify (Import from GitHub)
2) Enable Identity (invite-only)
3) Create users and assign roles: staff/admin
4) Ensure domain points to Netlify (or keep GH Pages for public-only)