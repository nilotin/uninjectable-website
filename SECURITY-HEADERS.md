# Security headers for getbaleena.com

The site is hosted on GitHub Pages, which does not support custom response
headers. The HTML pages ship a `<meta>` Content-Security-Policy and Referrer-Policy,
but HSTS, `X-Frame-Options`, `frame-ancestors`, `X-Content-Type-Options`, and
`Permissions-Policy` only work as real HTTP headers. Set them at Cloudflare.

## Prerequisite

The `getbaleena.com` and `www` DNS records must be **Proxied** (orange cloud).
As of 2026-09-29 responses come straight from GitHub (`server: GitHub.com`), so
Cloudflare rules have no effect until proxying is on. Use SSL/TLS mode
**Full (strict)** and keep GitHub Pages' "Enforce HTTPS" enabled.

## Response headers

Cloudflare dashboard → Rules → Transform Rules → Modify Response Header, for all
requests to `getbaleena.com`:

| Action | Header | Value |
| --- | --- | --- |
| Set | `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` |
| Set | `X-Content-Type-Options` | `nosniff` |
| Set | `X-Frame-Options` | `SAMEORIGIN` |
| Set | `Referrer-Policy` | `strict-origin-when-cross-origin` |
| Set | `Permissions-Policy` | `accelerometer=(), autoplay=(self), camera=(), display-capture=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()` |
| Set | `Content-Security-Policy` | see below |
| Remove | `Server` | |
| Remove | `X-GitHub-Request-Id` | |
| Remove | `X-Served-By` | |
| Remove | `X-Fastly-Request-ID` | |
| Remove | `Via` | |

`SAMEORIGIN` rather than `DENY` because `/pitch-deck/` embeds the PDF in a
same-origin frame.

```
default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; media-src 'self'; connect-src 'self'; object-src 'self'; frame-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests
```

This matches the `<meta>` policy in `vite.config.ts` and `public/**/*.html`,
plus `frame-ancestors`. If you add a new external resource (analytics, a
booking widget, a CDN), update all three places.

## HSTS preload

Only add `; preload` and submit to https://hstspreload.org once every subdomain
of getbaleena.com (including any future `app.` or `mail.` hosts) serves HTTPS.
Preload is hard to undo.

## Also in Cloudflare

- Always Use HTTPS: on. Minimum TLS version: 1.2.
- Custom error pages: `https://getbaleena.com/500.html` can serve as the 5xx page.
- Create the `security@getbaleena.com` mailbox or forward it (for example with
  Cloudflare Email Routing). It is published in `/.well-known/security.txt`.
- `security.txt` expires on 2027-09-29. Renew it before then.
