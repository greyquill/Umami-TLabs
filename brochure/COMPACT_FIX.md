# Brochure Compact Print Fix

To ensure all content fits on one A4 page without overlapping the footer, apply these changes to pages 04-07:

## Key Changes to Apply:

### 1. Reduce Page Padding
```css
padding: 45px 50px 85px 50px; /* Top Right Bottom Left */
```

### 2. Reduce Header Sizes
```css
.page-header h1 {
    font-size: 34px;  /* was 42px */
    margin-bottom: 6px;  /* was 10px */
}
.page-header p {
    font-size: 15px;  /* was 18px */
}
.page-header {
    padding-bottom: 12px;  /* was 20px */
    margin-bottom: 25px;  /* was 40px */
}
```

### 3. Reduce Section Spacing
```css
.section {
    margin-bottom: 22px;  /* was 35px */
}
.section h2 {
    font-size: 19px;  /* was 24px */
    margin-bottom: 10px;  /* was 15px */
}
.section p {
    font-size: 13px;  /* was 15px */
    line-height: 1.6;  /* was 1.8 */
    margin-bottom: 10px;  /* was 15px */
}
```

### 4. Reduce List Spacing
```css
.features-list li {
    padding: 8px 0 8px 28px;  /* was 12px 0 12px 35px */
    font-size: 13px;  /* was 15px */
    line-height: 1.5;  /* was 1.7 */
}
```

### 5. Reduce Box Padding
```css
.highlight-box {
    padding: 16px;  /* was 25px */
    margin: 18px 0;  /* was 25px 0 */
}
.highlight-box h3 {
    font-size: 16px;  /* was 20px */
    margin-bottom: 8px;  /* was 12px */
}
.highlight-box p {
    font-size: 13px;  /* was 15px */
}
```

### 6. Reduce Grid Spacing
```css
.stats-grid, .feature-grid, .benefits-grid {
    gap: 12px;  /* was 20px */
    margin: 18px 0;  /* was 25-30px 0 */
}
.stat-card, .feature-card, .benefit-card {
    padding: 12-14px;  /* was 20px */
}
```

### 7. Reduce Timeline Elements
```css
.timeline-marker {
    min-width: 32px;  /* was 40px */
    height: 32px;
    font-size: 14px;  /* was 16px */
}
.timeline-item {
    gap: 12px;  /* was 20px */
    margin-bottom: 12px;  /* was 20px */
}
.timeline-content h4 {
    font-size: 13px;  /* was 16px */
}
.timeline-content p {
    font-size: 12px;  /* was 14px */
}
```

## Files Already Updated:
- ✅ 02-billing-revenue.html
- ✅ 03-appointments.html

## Files Still Need Updates:
- ⏳ 04-ai-assistance.html
- ⏳ 05-emr-ehr.html
- ⏳ 06-custom-apps.html
- ⏳ 07-staff-contact.html

Apply the same percentage reductions to all elements to maintain visual consistency while fitting everything on one page.

