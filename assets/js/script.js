document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon betwen bars and times
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple Intersection Observer for Fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .section-header, .use-case-content, .hero-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // --- Services Page Logic (Router & Tab Switching) ---
    // Only run if we are on the Services Page (check for elements)
    const serviceSections = document.querySelectorAll('.service-section');
    const serviceNavLinks = document.querySelectorAll('.service-nav a');

    if (serviceSections.length > 0 && serviceNavLinks.length > 0) {
        // Function to switch active service
        function switchService(targetId) {
            // Update Sidebar
            serviceNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-target') === targetId) {
                    link.classList.add('active');
                }
            });

            // Update Content
            serviceSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });

            // Scroll to top of content on mobile or small screens
            const mainContent = document.getElementById('main-content');
            if (mainContent && window.innerWidth < 900) {
                mainContent.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // 1. Check URL Param on Load
        const urlParams = new URLSearchParams(window.location.search);
        const featureParam = urlParams.get('feature');

        if (featureParam) {
            switchService(featureParam);
        }

        // 2. Handle Sidebar Clicks
        serviceNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('data-target');
                if (target) {
                    // Update URL history without reload
                    const newUrl = `${window.location.pathname}?feature=${target}`;
                    window.history.pushState({ path: newUrl }, '', newUrl);
                    switchService(target);
                }
            });
        });
    }

    // --- Side Panel Logic (Homepage) ---
    const featureCards = document.querySelectorAll('.feature-card[data-feature]');
    const sidePanel = document.querySelector('.side-panel');
    const panelOverlay = document.querySelector('.panel-overlay');
    const panelContent = document.querySelector('.panel-content');
    const closeBtn = document.querySelector('.close-btn');

    const featureData = {
        billing: {
            title: "Billing & Accounts",
            desc: "Automate your entire revenue cycle. From invoice generation to payment tracking, our system ensures you never miss a payment and reduces administrative overhead by up to 40%.",
            timeline: [
                { time: "Week 1", title: "Integration", desc: "Integration with bank accounts and payment gateways." },
                { time: "Week 2", title: "Data Migration", desc: "Secure transfer of past invoices and patient ledgers." },
                { time: "Week 3", title: "Automation", desc: "Setting up rules for recurring billing and reminders." },
                { time: "Week 4", title: "Go Live", desc: "Full automation with real-time analytics." }
            ]
        },
        appointments: {
            title: "Smart Appointments",
            desc: "Eliminate no-shows with AI-driven scheduling. Features 24/7 online booking, automated WhatsApp/SMS reminders, and calendar sync.",
            timeline: [
                { time: "Day 1", title: "Portal Setup", desc: "Configure your clinic's working hours and services." },
                { time: "Day 3", title: "Notifications", desc: "Enable automated SMS and WhatsApp reminders." },
                { time: "Day 5", title: "Sync", desc: "Integrate with Google Calendar/Outlook for staff." }
            ]
        },
        ai: {
            title: "AI Assistance",
            desc: "Your 24/7 intelligent medical assistant. Handles note transcription, ensures diagnostic accuracy, and flags drug interactions in real-time.",
            timeline: [
                { time: "Instant", title: "Activation", desc: "AI assistant is ready to use immediately." },
                { time: "Week 1", title: "Learning", desc: "Adapts to your specific charting style and abbreviations." },
                { time: "Ongoing", title: "Support", desc: "Continuous updates with the latest medical protocols." }
            ]
        },
        records: {
            title: "Medical Records (EMR)",
            desc: "Centralized, HIPAA-compliant patient history. Access lab reports, prescriptions, and history from any device with role-based security.",
            timeline: [
                { time: "Phase 1", title: "Digitization", desc: "Scanning and uploading active physical files." },
                { time: "Phase 2", title: "Access Control", desc: "Setting up doctor, nurse, and admin permission levels." },
                { time: "Phase 3", title: "Testing", desc: "Verifying encrypted backups and retrieval speeds." }
            ]
        },
        custom: {
            title: "Custom Apps & Websites",
            desc: "White-labeled digital presence for your brand. Get a custom domain, patient mobile app (iOS/Android), and telemedicine integration.",
            timeline: [
                { time: "Week 1", title: "Design", desc: "Select theme, logo, and core features." },
                { time: "Week 3", title: "Development", desc: "Building your custom iOS and Android apps." },
                { time: "Week 5", title: "Launch", desc: "Deployment to App Store and Play Store." }
            ]
        },
        staff: {
            title: "Staff Management",
            desc: "Streamline HR operations in one dashboard. Handle rostering, shift planning, leave management, and automated payroll.",
            timeline: [
                { time: "Step 1", title: "Onboarding", desc: "Add staff profiles and contracts." },
                { time: "Step 2", title: "Rostering", desc: "Create recurring shift patterns." },
                { time: "Step 3", title: "Payroll", desc: "Link attendance to payroll for one-click processing." }
            ]
        }
    };

    if (sidePanel && panelOverlay) {
        function openPanel(key) {
            const data = featureData[key];
            if (!data) return;

            // Build Timeline HTML
            let timelineHtml = '<div class="timeline">';
            data.timeline.forEach(item => {
                timelineHtml += `
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-time">${item.time}</div>
                        <div class="timeline-title">${item.title}</div>
                        <div class="timeline-desc">${item.desc}</div>
                    </div>
                `;
            });
            timelineHtml += '</div>';

            panelContent.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.desc}</p>
                <div class="timeline-section">
                    <h3>Impact Timeline</h3>
                    ${timelineHtml}
                </div>
                <div class="panel-cta">
                    <a href="services.html?feature=${key}" class="btn btn-primary">Switch to this Service</a>
                </div>
            `;

            sidePanel.classList.add('active');
            panelOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closePanel() {
            sidePanel.classList.remove('active');
            panelOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        featureCards.forEach(card => {
            card.addEventListener('click', () => {
                const feature = card.getAttribute('data-feature');
                openPanel(feature);
            });
        });

        closeBtn.addEventListener('click', closePanel);
        panelOverlay.addEventListener('click', closePanel);
    }

    // --- Doctors Page Interactive Toggle ---
    const btnChaos = document.getElementById('btn-chaos');
    const btnCalm = document.getElementById('btn-calm');
    const viewChaos = document.getElementById('view-chaos');
    const viewCalm = document.getElementById('view-calm');

    if (btnChaos && btnCalm && viewChaos && viewCalm) {
        btnChaos.addEventListener('click', () => {
            btnChaos.classList.add('active');
            btnCalm.classList.remove('active');
            viewChaos.classList.add('active');
            viewCalm.classList.remove('active');
        });

        btnCalm.addEventListener('click', () => {
            btnCalm.classList.add('active');
            btnChaos.classList.remove('active');
            viewCalm.classList.add('active');
            viewChaos.classList.remove('active');
        });
    }

    // --- Local Video Custom Interaction ---
    const videoContainer = document.querySelector('.video-container');
    const heroVideo = document.getElementById('hero-video');
    const playBtn = document.getElementById('custom-play-btn');

    if (heroVideo && videoContainer) {

        function togglePlay() {
            if (heroVideo.paused || heroVideo.ended) {
                heroVideo.play();
            } else {
                heroVideo.pause();
            }
        }

        videoContainer.addEventListener('click', (e) => {
            if (e.target === heroVideo || e.target === playBtn || e.target === videoContainer) {
                togglePlay();
            }
        });

        // Sync Button State
        heroVideo.addEventListener('play', () => {
            videoContainer.classList.add('playing');
        });

        heroVideo.addEventListener('pause', () => {
            videoContainer.classList.remove('playing');
        });

        heroVideo.addEventListener('ended', () => {
            videoContainer.classList.remove('playing');
        });
    }

    // --- Dropdown Mobile/Click Support ---
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownWrapper = document.querySelector('.dropdown-wrapper');

    if (dropdownTrigger && dropdownMenu) {
        // On mobile, preventing default link and toggling menu
        dropdownTrigger.addEventListener('click', (e) => {
            if (window.innerWidth < 900) {
                e.preventDefault();
                dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.visibility = 'visible';
                dropdownMenu.style.position = 'static'; // Stack in mobile flow
                dropdownMenu.style.transform = 'none';
            }
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!dropdownWrapper.contains(e.target)) {
                if (window.innerWidth < 900) {
                    dropdownMenu.style.display = 'none';
                }
            }
        });
    }
});
