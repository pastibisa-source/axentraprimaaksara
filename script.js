/* =========================================================
   AXENTRA PRIMA AKSARA
   DASHBOARD NAVIGATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const pages =
        document.querySelectorAll(".page");

    const navButtons =
        document.querySelectorAll("[data-page]");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");


    /* =====================================================
       OPEN PAGE
    ===================================================== */

    function openPage(pageId, updateURL = true) {

        const target =
            document.getElementById(pageId);

        if (!target) return;


        /* Remove active page */

        pages.forEach(page => {

            page.classList.remove("active-page");

        });


        /* Add active page */

        setTimeout(() => {

            target.classList.add("active-page");

        }, 40);


        /* Update navbar */

        document
            .querySelectorAll(".nav-link")
            .forEach(button => {

                button.classList.remove("active");

                if (
                    button.dataset.page === pageId
                ) {

                    button.classList.add("active");

                }

            });


        /* Close mobile menu */

        mobileMenu.classList.remove("show");


        /* Reset internal scroll */

        target.scrollTop = 0;


        /* URL */

        if (updateURL) {

            history.pushState(
                { page: pageId },
                "",
                pageId === "home"
                    ? window.location.pathname
                    : `#${pageId}`
            );

        }

    }


    /* =====================================================
       ALL PAGE BUTTONS
    ===================================================== */

    navButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            const pageId =
                button.dataset.page;

            openPage(pageId);

        });

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    mobileMenuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle("show");

        }
    );


    /* =====================================================
       CLICK OUTSIDE MOBILE MENU
    ===================================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                mobileMenu.classList.contains("show") &&
                !mobileMenu.contains(event.target) &&
                !mobileMenuButton.contains(event.target)
            ) {

                mobileMenu.classList.remove("show");

            }

        }
    );


    /* =====================================================
       BROWSER BACK BUTTON
    ===================================================== */

    window.addEventListener(
        "popstate",
        () => {

            const hash =
                window.location.hash.replace("#", "");

            if (hash && document.getElementById(hash)) {

                openPage(hash, false);

            } else {

                openPage("home", false);

            }

        }
    );


    /* =====================================================
       INITIAL PAGE
    ===================================================== */

    const initialHash =
        window.location.hash.replace("#", "");

    if (
        initialHash &&
        document.getElementById(initialHash)
    ) {

        openPage(
            initialHash,
            false
        );

    } else {

        openPage(
            "home",
            false
        );

    }


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqItems =
        document.querySelectorAll(
            ".faq-list details"
        );


    faqItems.forEach(item => {

        item.addEventListener(
            "toggle",
            () => {

                if (!item.open) return;

                faqItems.forEach(other => {

                    if (
                        other !== item &&
                        other.open
                    ) {

                        other.open = false;

                    }

                });

            }
        );

    });
    /* =====================================================
       EXPLORE WEBSITE PANEL
    ===================================================== */

    const exploreButton =
        document.getElementById("exploreButton");

    const exploreOverlay =
        document.getElementById("exploreOverlay");

    const exploreClose =
        document.getElementById("exploreClose");

    const exploreBackButton =
        document.getElementById("exploreBackButton");

    const exploreCards =
        document.querySelectorAll(".explore-card");


    /* =====================================================
       OPEN EXPLORE
    ===================================================== */

    if (
        exploreButton &&
        exploreOverlay
    ) {

        exploreButton.addEventListener(
            "click",
            event => {

                event.preventDefault();

                exploreOverlay.classList.add("show");

                exploreOverlay.setAttribute(
                    "aria-hidden",
                    "false"
                );

            }
        );

    }


    /* =====================================================
       CLOSE EXPLORE
    ===================================================== */

    function closeExplorePanel() {

        if (!exploreOverlay) return;

        exploreOverlay.classList.remove("show");

        exploreOverlay.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (exploreClose) {

        exploreClose.addEventListener(
            "click",
            closeExplorePanel
        );

    }


    /* =====================================================
       BACK TO HOME
    ===================================================== */

    if (exploreBackButton) {

        exploreBackButton.addEventListener(
            "click",
            () => {

                closeExplorePanel();

                setTimeout(() => {

                    openPage("home");

                }, 150);

            }
        );

    }


    /* =====================================================
       CLICK OUTSIDE PANEL
    ===================================================== */

    if (exploreOverlay) {

        exploreOverlay.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    exploreOverlay
                ) {

                    closeExplorePanel();

                }

            }
        );

    }


    /* =====================================================
       EXPLORE MENU
    ===================================================== */

    exploreCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const pageId =
                    card.dataset.explorePage;

                if (!pageId) return;


                closeExplorePanel();


                setTimeout(() => {

                    openPage(pageId);

                }, 180);

            }
        );

    });

    /* =====================================================
       KEYBOARD NAVIGATION
    ===================================================== */

    /* =====================================================
       KEYBOARD NAVIGATION
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }


            /* Jika Explore terbuka,
               tutup Explore terlebih dahulu */

            if (
                exploreOverlay &&
                exploreOverlay.classList.contains("show")
            ) {

                closeExplorePanel();

                return;

            }


            /* Jika Explore tidak terbuka,
               fungsi ESC lama tetap berjalan */

            openPage("home");

        }
    );


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href")
                            .replace("#", "");

                    if (
                        document.getElementById(targetId)
                    ) {

                        event.preventDefault();

                        openPage(targetId);

                    }

                }
            );

        });


    /* =====================================================
       PREVENT PAGE SCROLL ON HOME
    ===================================================== */

    const home =
        document.getElementById("home");

    home.addEventListener(
        "wheel",
        event => {

            if (
                home.classList.contains(
                    "active-page"
                )
            ) {

                event.preventDefault();

            }

        },
        { passive: false }
    );


    /* =====================================================
       LOGO / BRAND CLICK
    ===================================================== */

    const brand =
        document.querySelector(".brand");

    if (brand) {

        brand.addEventListener(
            "click",
            event => {

                event.preventDefault();

                openPage("home");

            }
        );

    }


    /* =====================================================
       PRELOADER-LIKE ENTRY
    ===================================================== */

    document.body.classList.add("website-loaded");

});