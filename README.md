# Boxtribute landing page

## Build and run

### Docker

```bash
docker build . -t boxtribute-landing:latest
docker run --rm -it -p 3001:3000 --volume /app/node_modules --volume $(pwd):/app boxtribute-landing dev
```

Open your browser on `localhost:3001`.

### Local node

```bash
yarn install
yarn dev
```

Open your browser on `localhost:3000`.

## Data queries

**partners on the field helping people in need**
```sql
SELECT o.label
FROM organisations o
JOIN camps c
ON c.organisation_id = o.id
WHERE (c.deleted IS NULL OR NOT c.deleted)
AND o.id != 1
GROUP BY o.id
```

**goods distributed with dignity per month to vulnerable populations**
```sql
SELECT YEAR(t.transaction_date) as year, MONTH(t.transaction_date) as month, o.label as org, c.name as base, SUM(t.count) as items
FROM transactions t
LEFT JOIN products p ON p.id=t.product_id
LEFT JOIN camps c ON p.camp_id=c.id
LEFT JOIN organisations o ON o.id=c.organisation_id
LEFT JOIN product_categories cat ON p.category_id = cat.id
WHERE YEAR(t.transaction_date) >= 2026 AND t.count > 0 AND o.id != 1
GROUP BY YEAR(t.transaction_date), MONTH(t.transaction_date), o.id, c.id;
```

**items in storage donated to support people in need**
```sql
SELECT sum(b.items)
FROM stock b
JOIN locations l ON l.id = b.location_id
JOIN camps c ON c.id = l.camp_id
WHERE b.box_state_id = 5
AND (c.deleted IS NULL OR NOT c.deleted)
AND c.organisation_id != 1
```

**beneficiaries supported by dignified distributions each month**

From #internal-statistics 'reached beneficiaries'.
