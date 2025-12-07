# Umami TLabs Landing Page

A responsive, high-fidelity landing page for **Umami TLabs**, a healthcare management solution. This project is built with vanilla HTML, CSS, and JavaScript, designed for speed, compatibility, and ease of deployment.

## 🚀 Deployment

Since this is a **static site**, it can be deployed to any static hosting provider.

### Recommended Providers
*   **Vercel / Netlify**: Connect your Git repository and set the *Output Directory* to `.` (root). No build command is required.
*   **GitHub Pages**: Enable GitHub Pages in your repository settings and select the `main` branch as the source.
*   **AWS S3 + CloudFront**: Upload the contents of the root directory to an S3 bucket configured for static website hosting.

### Local Development
1.  Clone the repository.
2.  Open `index.html` in your browser.
3.  **Recommended**: Use a local development server (like VS Code "Live Server" extension) to ensure proper loading of assets and JSON modules if they were used (currently pure JS).

## 📂 Project Structure

```text
/
├── index.html        # Homepage (Hero, Feature Grid with Side Panel, Use Cases)
├── services.html     # Detailed Services Page (3-Column Layout, Deep Linking)
├── doctors.html      # Onboarding Page for Doctors (Interactive Roadmap)
├── assets/
│   ├── css/
│   │   └── styles.css    # Main stylesheet (Variables, Dark Theme, Utilities)
│   ├── js/
│   │   └── script.js     # Core Logic (Side Panel, Tabs, Video Player)
│   ├── img/              # Images and Icons
│   └── vids/             # Local video assets (welcome_intro.mp4)
└── README.md         # This documentation
```

## 🛠️ Key Components & Logic

### 1. Interactive Side Panel (Homepage)
*   **Logic**: `script.js` listens for clicks on `.feature-card` elements on the homepage.
*   **Content**: Data objects in `script.js` populate the side panel dynamically to keep the HTML clean.
*   **Behavior**: Opens an overlay and a slide-in panel from the right.

### 2. Deep-Linked Services (Services Page)
*   **Routing**: `services.html` supports URL parameters (e.g., `services.html?feature=billing`).
*   **Logic**: On load, `script.js` reads the `?feature=` param and automatically activates the corresponding sidebar tab and content section.
*   **Navigation**: The Left Sidebar updates the URL history (`pushState`) without reloading the page.

### 3. Custom Video Player
*   **Implementation**: Standard HTML5 `<video>` tag wrapped in a custom container.
*   **Controls**: Includes a custom centered "Play" button overlay that syncs with the native video state.

### 4. Interactive "Before vs After" (Doctors Page)
*   **Logic**: Simple class switching (`.active`) on the `doctors.html` page toggle buttons to switch between "Manual Chaos" and "Digital Calm" views.

## 🎨 Design System

*   **Theme**: Dark mode aesthetic (Navy/Slate backgrounds).
*   **Colors**:
    *   Primary: Cyan/Sky Blue (`#38bdf8`)
    *   Accent: Gold (`#fbbf24`)
    *   Background: Dark Slate (`#0f172a`)
*   **Typography**: `Inter` (Google Fonts) for clean readability.
*   **Icons**: FontAwesome 6 (CDN).

## 📝 Maintenance

to update content:
*   **Homepage Side Panel**: Update the `featureData` object in `assets/js/script.js`.
*   **Services Page Detail**: Edit the HTML content directly in `services.html`.
*   **Doctors Roadmap**: Edit the HTML in `doctors.html`.

---
*Built for Umami TLabs*
