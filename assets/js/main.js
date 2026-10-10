/* =========================================================
   KRAZYKITTY // ECOSYSTEM — progressive enhancement only.
   The content remains readable and navigable without JavaScript.
   No third-party code, network requests, cookies or storage.
   ========================================================= */
"use strict";

(() => {
  const root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  /* ---------- 1. mobile navigation ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");

  function setNavigation(open) {
    if (!navToggle || !nav) return;
    navToggle.setAttribute("aria-expanded", String(open));
    nav.toggleAttribute("data-open", open);

    const label = navToggle.querySelector(".kk-visually-hidden");
    if (label) label.textContent = open ? "Close navigation" : "Open navigation";
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      setNavigation(navToggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setNavigation(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        setNavigation(false);
        navToggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        navToggle.getAttribute("aria-expanded") === "true" &&
        !nav.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        setNavigation(false);
      }
    });
  }

  /* ---------- 2. project lifecycle filter ---------- */
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const projects = [...document.querySelectorAll(".project[data-status]")];
  const filterStatus = document.getElementById("filter-status");
  let lastFilterMessage = "";

  function applyFilter(value) {
    let visibleCount = 0;

    projects.forEach((project) => {
      const matches = value === "all" || project.dataset.status === value;
      project.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    filterButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.filter === value));
    });

    if (filterStatus) {
      const suffix = value === "all" ? "" : ` with lifecycle ${value}`;
      const message = `Showing ${visibleCount} ${visibleCount === 1 ? "project" : "projects"}${suffix}.`;
      if (message !== lastFilterMessage) {
        filterStatus.textContent = message;
        lastFilterMessage = message;
      }
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter));
  });

  /* ---------- 3. current navigation section ---------- */
  const navLinks = nav ? [...nav.querySelectorAll("a[href^='#']")] : [];
  const navTargets = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && navTargets.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${visible.target.id}`;
          link.toggleAttribute("aria-current", isCurrent);
          if (isCurrent) link.setAttribute("aria-current", "location");
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.15, 0.4] }
    );

    navTargets.forEach((target) => sectionObserver.observe(target));
  }

  /* ---------- 4. restrained optional motion ---------- */
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const effectsToggle = document.getElementById("fx-toggle");
  const revealTargets = [...document.querySelectorAll("[data-reveal]")];
  let effectsOn = !reducedMotion.matches;
  let revealObserver = null;

  function revealEverything() {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
  }

  function startRevealObserver() {
    if (!effectsOn || reducedMotion.matches || !revealTargets.length) {
      revealEverything();
      return;
    }

    root.classList.add("motion-ready");

    if (!("IntersectionObserver" in window)) {
      revealEverything();
      return;
    }

    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    revealTargets
      .filter((target) => !target.classList.contains("is-visible"))
      .forEach((target) => revealObserver.observe(target));
  }

  function setEffects(on) {
    effectsOn = Boolean(on) && !reducedMotion.matches;
    root.toggleAttribute("data-motion", !effectsOn);

    if (effectsToggle) {
      effectsToggle.setAttribute("aria-pressed", String(effectsOn));
    }

    if (effectsOn) {
      startRevealObserver();
    } else {
      if (revealObserver) revealObserver.disconnect();
      revealEverything();
    }
  }

  if (effectsToggle) {
    effectsToggle.addEventListener("click", () => setEffects(!effectsOn));
  }

  reducedMotion.addEventListener("change", (event) => {
    setEffects(!event.matches);
  });

  window.requestAnimationFrame(() => setEffects(effectsOn));
})();
