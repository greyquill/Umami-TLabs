#!/usr/bin/env bash

# Simple helper script to convert the proposal HTML file to PDF.
#
# Requirements:
# - macOS
# - Either:
#     * wkhtmltopdf installed (recommended), or
#     * Google Chrome installed in /Applications/Google Chrome.app
#
# Usage:
#   chmod +x convert_proposal_to_pdf.sh
#   ./convert_proposal_to_pdf.sh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
INPUT_HTML="${ROOT_DIR}/proposals/a3f9c7b1d4e8.html"
OUTPUT_PDF="${ROOT_DIR}/proposals/a3f9c7b1d4e8.pdf"

if [[ ! -f "$INPUT_HTML" ]]; then
  echo "Error: HTML file not found at:"
  echo "  $INPUT_HTML"
  exit 1
fi

echo "Converting:"
echo "  $INPUT_HTML"
echo "to PDF:"
echo "  $OUTPUT_PDF"

if command -v wkhtmltopdf >/dev/null 2>&1; then
  echo "Using wkhtmltopdf (no browser header/footer)..."
  wkhtmltopdf \
    --print-media-type \
    --margin-top 10mm \
    --margin-bottom 10mm \
    --margin-left 10mm \
    --margin-right 10mm \
    "$INPUT_HTML" \
    "$OUTPUT_PDF"
else
  echo "wkhtmltopdf not found; falling back to Google Chrome headless."
  echo "For a cleaner PDF without browser headers, install wkhtmltopdf, e.g.:"
  echo "  brew install wkhtmltopdf"

  CHROME_APP="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

  if [[ ! -x "$CHROME_APP" ]]; then
    echo "Error: Google Chrome not found at:"
    echo "  $CHROME_APP"
    echo "Please install Google Chrome or update this script to point to your Chrome binary."
    exit 1
  fi

  "$CHROME_APP" \
    --headless \
    --disable-gpu \
    --no-margins \
    --print-to-pdf="$OUTPUT_PDF" \
    "file://$INPUT_HTML"
fi

echo "Done. PDF generated at:"
echo "  $OUTPUT_PDF"

