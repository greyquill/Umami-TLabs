# Umami TLabs Brochure - PDF Generation

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Generate PDF:**
   ```bash
   npm run generate-pdf
   ```

The PDF will be generated as `Umami-TLabs-Brochure.pdf` in the brochure folder.

## Files Included (in order)

1. 00-cover.html - Cover Page
2. 01-introduction.html - About Umami TLabs (Page 1)
3. 02-billing-revenue_1.html - Billing & Revenue (Page 2)
4. 02-billing-revenue_2.html - Billing & Revenue (Page 3)
5. 02-billing-revenue_3.html - Billing & Revenue (Page 4)
6. 03-appointments_1.html - Appointments (Page 5)
7. 03-appointments_2.html - Appointments (Page 6)
8. 04-ai-assistance_1.html - AI Assistance (Page 7)
9. 04-ai-assistance_2.html - AI Assistance (Page 8)
10. 04-ai-assistance_3.html - AI Assistance (Page 9)
11. 05-emr-ehr_1.html - EMR/EHR (Page 10)
12. 05-emr-ehr_2.html - EMR/EHR (Page 11)
13. 05-emr-ehr_3.html - EMR/EHR (Page 12)
14. 06-custom-apps_1.html - Custom Apps (Page 13)
15. 06-custom-apps_2.html - Custom Apps (Page 14)
16. 07-staff-contact_1.html - Staff Management (Page 15)
17. 07-staff-contact_2.html - Contact (Page 16)

## Requirements

- Node.js (v14 or higher)
- npm

## Troubleshooting

If you encounter issues with Puppeteer installation, try:
```bash
npm install puppeteer --unsafe-perm=true --allow-root
```

Or use the system Chrome:
```bash
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install puppeteer
```

## Manual PDF Generation

Alternatively, you can:
1. Open each HTML file in Chrome
2. Print to PDF (Ctrl/Cmd + P)
3. Save as PDF
4. Combine PDFs using a PDF merger tool

