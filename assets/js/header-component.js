
// Header Component
const headerHtml = `
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="logo">
                <img src="assets/img/logo.png" alt="Umami TLabs Logo" class="logo-img">
            </a>
            <div class="nav-links">

                <!-- Dropdown Trigger -->
                <div class="dropdown-wrapper">
                    <a href="index.html#features" class="dropdown-trigger">Services <i class="fa-solid fa-chevron-down"></i></a>
                    <div class="dropdown-menu">
                        <a href="services.html?feature=billing">Billing & Accounts</a>
                        <a href="services.html?feature=appointments">Smart Appointments</a>
                        <a href="services.html?feature=ai">AI Assistance</a>
                        <a href="services.html?feature=records">Medical Records</a>
                        <a href="services.html?feature=custom">Custom Apps</a>
                        <a href="services.html?feature=staff">Staff Management</a>
                    </div>
                </div>

                <a href="doctors.html">For Doctors</a>

                <!-- Calendly Trigger -->
                <a href="#"
                    onclick="Calendly.initPopupWidget({url: 'https://calendly.com/greyquill/umami-tlabs'});return false;"
                    class="btn btn-primary">Book a Demo</a>

                <!-- Member Login Link -->
                <a href="#" class="nav-login-link"
                    onclick="document.getElementById('login-modal').classList.add('active'); return false;">
                    <span class="login-sub">Already a member?</span>
                    <span class="login-main">Go to your dashboard</span>
                </a>
            </div>
            <div class="menu-toggle">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    </nav>

    <!-- LOGIN MODAL -->
    <div class="modal-overlay" id="login-modal">
        <div class="modal-content login-content">
            <button class="modal-close" onclick="document.getElementById('login-modal').classList.remove('active')"><i
                    class="fa-solid fa-xmark"></i></button>
            <div class="modal-header">
                <div class="modal-icon"><i class="fa-solid fa-right-to-bracket"></i></div>
                <h2>Member Sign In</h2>
                <p>Access your secure provider portal.</p>
            </div>
            <form class="modal-form" onsubmit="event.preventDefault(); window.location.href='sample-dashboard.html';">
                <div class="form-group">
                    <input type="email" placeholder="Email Address" required>
                </div>
                <div class="form-group">
                    <input type="password" placeholder="Password" required>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                <div style="text-align: center; margin-top: 15px; font-size: 0.9rem;">
                    <a href="#" style="color: #64748b; text-decoration: none;">Forgot Password?</a>
                </div>
            </form>
        </div>
    </div>
`;

// Inject Header
document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHtml;

        // Re-initialize any listeners if needed (like menu toggle)
        // Since script.js runs after this (usually), we might need to ensure timing.
        // But if script.js is loaded at end of body, and this runs on DOMContentLoaded, 
        // we need to make sure the elements exist before script.js tries to attach listeners.
        // Actually, script.js also uses DOMContentLoaded? Let's check.
        // If script.js uses DOMContentLoaded, we need to make sure this runs FIRST.
        // Or we trigger a custom event.

        // Simple fix: Dispatch a custom event "headerLoaded"
        document.dispatchEvent(new Event('headerLoaded'));
    }
});
