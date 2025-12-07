const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// List of HTML files in order
const htmlFiles = [
  '00-cover.html',
  '01-introduction.html',
  '02-billing-revenue_1.html',
  '02-billing-revenue_2.html',
  '02-billing-revenue_3.html',
  '03-appointments_1.html',
  '03-appointments_2.html',
  '04-ai-assistance_1.html',
  '04-ai-assistance_2.html',
  '04-ai-assistance_3.html',
  '05-emr-ehr_1.html',
  '05-emr-ehr_2.html',
  '05-emr-ehr_3.html',
  '06-custom-apps_1.html',
  '06-custom-apps_2.html',
  '07-staff-contact_1.html',
  '07-staff-contact_2.html'
];

async function generatePDF() {
  console.log('🚀 Starting PDF generation...');

  const browser = await puppeteer.launch({
    headless: 'new'
  });

  const page = await browser.newPage();

  // Array to store all page content
  const allPages = [];

  // Read each HTML file
  for (const file of htmlFiles) {
    const filePath = path.join(__dirname, file);

    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  Warning: ${file} not found, skipping...`);
      continue;
    }

    console.log(`📄 Processing: ${file}`);
    const htmlContent = fs.readFileSync(filePath, 'utf8');
    allPages.push(htmlContent);
  }

  // Combine all HTML pages
  const combinedHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Umami TLabs - Complete Brochure</title>
    <style>
        @page {
            size: A4;
            margin: 0;
        }
        body {
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
${allPages.map(html => {
  // Extract body content from each HTML file
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : '';
}).join('\n')}
</body>
</html>
`;

  // Set the HTML content
  await page.setContent(combinedHTML, {
    waitUntil: 'networkidle0'
  });

  // Generate PDF
  const outputPath = path.join(__dirname, 'Umami-TLabs-Brochure.pdf');

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });

  await browser.close();

  console.log(`✅ PDF generated successfully: ${outputPath}`);
  console.log(`📊 Total pages processed: ${htmlFiles.length}`);
}

// Run the script
generatePDF().catch(error => {
  console.error('❌ Error generating PDF:', error);
  process.exit(1);
});

