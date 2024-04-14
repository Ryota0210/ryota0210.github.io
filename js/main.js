document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // drawer-btn
  const drawerBtn = document.querySelector(".drawer-btn");
  const drawerLine = document.querySelectorAll(".drawer-line");
  drawerBtn.addEventListener("click", () => {
    drawerLine.forEach((line) => {
      line.classList.toggle("active");
    });
  });
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power4.inOut" } });
  const drawerMenu = document.querySelectorAll(".drawer-menu");
  const drawerList = document.querySelector(".drawer-list");
  const drawerItem = document.querySelectorAll(".drawer-item");
  gsap.set(drawerMenu, { yPercent: -100 });
  function openDrawer() {
    return tl
      .fromTo(drawerMenu, { yPercent: -100 }, { yPercent: 0 })
      .fromTo(
        drawerList,
        { autoAlpha: 0, y: "20" },
        { autoAlpha: 1, y: 0 },
        "<"
      );
  }
  function closeDrawer() {
    return tl
      .fromTo(drawerList, { y: 0, autoAlpha: 1 }, { y: "20", autoAlpha: 0 })
      .fromTo(drawerMenu, { yPercent: 0 }, { yPercent: -100 }, "<");
  }
  drawerBtn.addEventListener("click", () => {
    if (drawerLine[0].classList.contains("active")) {
      openDrawer();
    } else {
      closeDrawer();
    }
  });
  drawerItem.forEach((item) => {
    item.addEventListener("click", () => {
      closeDrawer();
      drawerLine.forEach((line) => {
        line.classList.remove("active");
      });
    });
  });
  // back-btn-animate
  const backToBtn = document.querySelector(".footer-button");
  backToBtn.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  // btn-animate
  const cBtns = document.querySelectorAll(".c-button");
  cBtns.forEach((btn) => {
    const cBtnContainer = btn.querySelector(".c-button-text-container");
    btn.addEventListener("mouseenter", () => {
      gsap.to(cBtnContainer, {
        rotationX: 360,
        duration: 0.8,
      });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(cBtnContainer, {
        rotationX: 0,
        duration: 0.8,
      });
    });
  });
  // loading-animate
  const fvLoading = document.querySelector(".start-loading");
  const fvContainer = document.querySelector(".fv-container");
  const fvCopy = document.querySelectorAll(".fv-main-copy");
  const fvText = document.querySelector(".fv-main-text-container");
  const fvLoadingText = document.querySelector(".fv-loading-text");
  const loadingText01 = document.querySelector(".loading-text01");
  const loadingText02 = document.querySelector(".loading-text02");
  const loadingText03 = document.querySelector(".loading-text03");
  const loadingText04 = document.querySelector(".loading-text04");
  const loadingText05 = document.querySelector(".loading-text05");
  window.addEventListener("load", () => {
    tl.to(fvLoading, { display: "none", duration: 0.2 })
      .to(loadingText01, { opacity: 1, duration: 0.5 })
      .to(loadingText01, { opacity: 0, duration: 0.5 })
      .to(loadingText02, { opacity: 1, duration: 0.4 })
      .to(loadingText02, { opacity: 0, duration: 0.4 })
      .to(loadingText03, { opacity: 1, duration: 0.3 })
      .to(loadingText03, { opacity: 0, duration: 0.3 })
      .to(loadingText04, { opacity: 1, duration: 0.2 })
      .to(loadingText04, { opacity: 0, duration: 0.2 })
      .to(loadingText05, { opacity: 1, duration: 0.3 })
      .to(loadingText05, { opacity: 0, duration: 0.3 })
      .fromTo(
        fvContainer,
        { scaleY: 1.5, scaleX: 1.4 },
        { scale: 1, duration: 1, ease: "power4.inOut" }
      )
      .fromTo(
        fvLoadingText,
        { y: "100%" },
        { y: 0, duration: 0.8, ease: "power4.inOut" }
      )
      .to(".fv-container-hidden", { overflow: "hidden" })
      .to(fvContainer, {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
      })
      .to(fvCopy, { y: 0, duration: 1, ease: "power4.Out" }, "-=0.5")
      .to(fvText, { opacity: 1, duration: 1 }, "-=0.5")
      .to(fvContainer, { display: "none" })
      .to(".fv-container-hidden", { display: "none" });
  });
  // skill-title-animate
  const skillTitle = document.querySelector(".skill-title");
  gsap.to(skillTitle, {
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: skillTitle,
      start: "top bottom",
    },
  });
  // skill-tag-animate
  const skillTag = document.querySelector(".skill-tag-container");
  gsap.to(skillTag, {
    opacity: 1,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: skillTitle,
      start: "center bottom",
    },
  });
  // about-title-animate
  const aboutTitle = document.querySelector(".about-title");
  gsap.to(aboutTitle, {
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: aboutTitle,
      start: "top bottom",
    },
  });
  // about-animate
  const aboutContent = document.querySelector(".about-content-container");
  gsap.to(aboutContent, {
    opacity: 1,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: aboutContent,
      start: "top bottom",
    },
  });
  // href
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
  // scroll-text
  const scrollTextTop = document.querySelector(".scroll-text-top");
  const scrollTextBottom = document.querySelector(".scroll-text-bottom");
  gsap.fromTo(
    scrollTextTop,
    { x: 0 },
    {
      x: "-10%",
      scrollTrigger: {
        trigger: ".scroll-text-container",
        start: "top bottom",
        scrub: true,
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    }
  );
  gsap.fromTo(
    scrollTextBottom,
    { x: "-10%" },
    {
      x: 0,
      scrollTrigger: {
        trigger: ".scroll-text-container",
        start: "top bottom",
        scrub: true,
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    }
  );
  // mouse-stalker
  const stalker = document.querySelector(".mouse-stalker");
  function moveStalker(e) {
    gsap.to(stalker, {
      duration: 0.5,
      x: e.clientX,
      y: e.clientY,
    });
  }
  document.addEventListener("mousemove", moveStalker);
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("mouseover", () => {
      gsap.to(stalker, { scale: 2, duration: 0.1 });
    });
    link.addEventListener("mouseout", () => {
      gsap.to(stalker, { scale: 1, duration: 0.1 });
    });
  });
  // smooth-scroll
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});
