# Google Search Console Checklist

## 1. Verify Domain

- Add `sakshyambanjade.com.np` as a **Domain property** in Google Search Console.
- Use the DNS TXT record Google provides.
- Wait until Search Console confirms verification.

## 2. Submit Sitemap

- Go to **Indexing > Sitemaps**.
- Submit:

```text
https://sakshyambanjade.com.np/sitemap.xml
```

## 3. Inspect Homepage

- Use URL Inspection for:

```text
https://sakshyambanjade.com.np/
```

- Confirm the page is indexable.
- Confirm the user-declared canonical is the homepage URL.
- Request indexing if Google has not crawled the latest version.

## 4. Inspect `/writing/`

- Use URL Inspection for:

```text
https://sakshyambanjade.com.np/writing/
```

- Confirm it is indexable.
- Confirm the canonical points to `/writing/`.
- Request indexing if needed.

## 5. Inspect 2 Article URLs

- Inspect:

```text
https://sakshyambanjade.com.np/thoughts/microsoft-support-diagnostic-tool/
https://sakshyambanjade.com.np/thoughts/tech-not-it/
```

- Confirm both are indexable.
- Confirm canonical URLs match the inspected URLs.
- Request indexing if needed.

## 6. Inspect One Old Legacy URL

- Inspect:

```text
https://sakshyambanjade.com.np/thoughts/thoughts-6/
```

- Confirm Google should not index it as the canonical page.
- Confirm it points users and crawlers toward:

```text
https://sakshyambanjade.com.np/thoughts/tech-not-it/
```

## 7. Request Indexing Where Needed

- Request indexing for:
  - Homepage
  - `/projects/`
  - `/research/`
  - `/writing/`
  - `/contact/`
  - 2 representative article pages

## 8. Monitor Canonicals And Sitelinks

- Check **Page indexing** weekly for the first few weeks.
- Watch for duplicate or alternate canonical warnings.
- Check whether Google-selected canonicals match the declared canonicals.
- Search Google for:

```text
site:sakshyambanjade.com.np
Sakshyam Banjade
```

- Monitor whether Google starts showing sitelinks for brand searches after recrawling.
