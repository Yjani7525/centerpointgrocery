# CenterPoint Grocery - Website Catalog

## What this is
A lightweight website that publishes your product catalog (search + filters) using a single data file: `products.csv`.

## Pages
- `/index.html` Home + quick stats
- `/products.html` Product catalog (cards)
- `/product-sheet.html` Product sheet (table)
- `/products.csv` Data source (edit this to update the website)

## How to publish on your domain (centerpointgrocery.com)
1. Create a GitHub repository (public) and upload all files in this folder.
2. Enable GitHub Pages:
   - Repo Settings → Pages → Source: `main` branch, `/root`
3. Set Custom Domain:
   - Repo Settings → Pages → Custom domain: `centerpointgrocery.com`
   - Turn on "Enforce HTTPS"
4. In your domain registrar DNS, add:
   - A records for `@`:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - CNAME for `www`:
     - `www` → `<your-username>.github.io`

## How to update products
- Replace `products.csv` (keep the header row the same).
- Commit/push — site updates automatically.

## Google Business Profile
- Add your website URL as: `https://centerpointgrocery.com`