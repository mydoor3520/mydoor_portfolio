(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-lang";
  var DEFAULT_LANG = "ko";
  var currentLang = DEFAULT_LANG;

  // Flat key mapping: maps data-i18n attribute values to nested paths in i18nData
  var keyMap = {
    // Nav
    nav_about: "nav.about",
    nav_career: "nav.career",
    nav_skills: "nav.skills",
    nav_side_projects: "nav.sideProjects",
    nav_journey: "nav.journey",

    // Hero
    hero_name: null, // Name stays the same
    hero_title: "hero.tagline",
    hero_bio: "hero.bio",
    hero_contact: "hero.contact",
    tag_backend: "hero.tags[0]",
    tag_devops: "hero.tags[1]",
    tag_incident: "hero.tags[2]",
    tag_business: "hero.tags[3]",
    tag_ai: "hero.tags[4]",

    // Career
    career_heading: "career.sectionTitle",

    // Company 1: 팀플백
    c1_name: "career.teamplback.company",
    c1_role: "career.teamplback.role",
    c1_period: "career.teamplback.period",
    c1_service: "career.teamplback.description",
    c1_p1_title: "career.teamplback.projects.loadTest.title",
    c1_p1_s: "career.teamplback.projects.loadTest.situation",
    c1_p1_a: "career.teamplback.projects.loadTest.analysis",
    c1_p1_r_solve: "career.teamplback.projects.loadTest.action",
    c1_p1_r: "career.teamplback.projects.loadTest.result",
    c1_p2_title: "career.teamplback.projects.cicd.title",
    c1_p2_s: "career.teamplback.projects.cicd.situation",
    c1_p2_a: "career.teamplback.projects.cicd.analysis",
    c1_p2_r_solve: "career.teamplback.projects.cicd.action",
    c1_p2_r: "career.teamplback.projects.cicd.result",
    c1_p3_title: "career.teamplback.projects.monitoring.title",
    c1_p3_s: "career.teamplback.projects.monitoring.situation",
    c1_p3_r_solve: "career.teamplback.projects.monitoring.action",
    c1_p3_r: "career.teamplback.projects.monitoring.result",
    c1_p4_title: "career.teamplback.projects.cloudRecovery.title",
    c1_p4_s: "career.teamplback.projects.cloudRecovery.situation",
    c1_p4_a: "career.teamplback.projects.cloudRecovery.analysis",
    c1_p4_r_solve: "career.teamplback.projects.cloudRecovery.action",
    c1_p4_r: "career.teamplback.projects.cloudRecovery.result",

    // Company 2: 프라임에듀넷
    c2_name: "career.primeEdunet.company",
    c2_role: "career.primeEdunet.role",
    c2_period: "career.primeEdunet.period",
    c2_service: "career.primeEdunet.description",
    c2_p1_title: "career.primeEdunet.projects.refund.title",
    c2_p1_s: "career.primeEdunet.projects.refund.situation",
    c2_p1_a: "career.primeEdunet.projects.refund.analysis",
    c2_p1_r_solve: "career.primeEdunet.projects.refund.action",
    c2_p1_r: "career.primeEdunet.projects.refund.result",
    c2_p2_title: "career.primeEdunet.projects.migration.title",
    c2_p2_s: "career.primeEdunet.projects.migration.situation",
    c2_p2_r_solve: "career.primeEdunet.projects.migration.action",
    c2_p2_r: "career.primeEdunet.projects.migration.result",
    c2_p3_title: "career.primeEdunet.projects.settlement.title",
    c2_p3_s: "career.primeEdunet.projects.settlement.situation",
    c2_p3_r_solve: "career.primeEdunet.projects.settlement.action",
    c2_p3_r: "career.primeEdunet.projects.settlement.result",
    c2_p4_title: "career.primeEdunet.projects.versioning.title",
    c2_p4_s: "career.primeEdunet.projects.versioning.situation",
    c2_p4_r_solve: "career.primeEdunet.projects.versioning.action",
    c2_p4_r: "career.primeEdunet.projects.versioning.result",
    c2_p5_title: "career.primeEdunet.projects.failureCase.title",
    c2_p5_s: "career.primeEdunet.projects.failureCase.situation",
    c2_p5_a: "career.primeEdunet.projects.failureCase.analysis",
    c2_p5_r_solve: "career.primeEdunet.projects.failureCase.action",
    c2_p5_r: "career.primeEdunet.projects.failureCase.result",
    c2_p5_lesson_label: "c2_p5_lesson_label",
    c2_p5_lesson: "career.primeEdunet.projects.failureCase.lesson",

    // Company 3: 버블콘
    c3_name: "career.bubblecon.company",
    c3_role: "career.bubblecon.role",
    c3_period: "career.bubblecon.period",
    c3_service: "career.bubblecon.description",
    c3_p1_title: "career.bubblecon.projects.searchOptimization.title",
    c3_p1_s: "career.bubblecon.projects.searchOptimization.situation",
    c3_p1_r_solve: "career.bubblecon.projects.searchOptimization.action",
    c3_p1_r: "career.bubblecon.projects.searchOptimization.result",
    c3_other_summary: "career.bubblecon.otherSummary",

    // Company 4: 브레이너
    c4_name: "career.brainer.company",
    c4_role: "career.brainer.role",
    c4_period: "career.brainer.period",
    c4_service: "career.brainer.description",
    c4_p2_title: "career.brainer.projects.securityWorkflow.title",
    c4_p2_s: "career.brainer.projects.securityWorkflow.situation",
    c4_p2_r_solve: "career.brainer.projects.securityWorkflow.action",
    c4_p2_r: "career.brainer.projects.securityWorkflow.result",
    c4_other_summary: "career.brainer.otherSummary",

    // STAR labels
    star_situation: "labels.situation",
    star_analysis: "labels.analysis",
    star_solution: "labels.action",
    star_result: "labels.result",

    // Skills
    skills_heading: "skills.sectionTitle",
    skills_lang_title: "skills.categories.languageFramework.title",
    skills_lang_java: null,
    skills_lang_python: null,
    skills_lang_js: null,
    skills_db_title: "skills.categories.database.title",
    skills_db_oracle: null,
    skills_db_mariadb: null,
    skills_db_pg: null,
    skills_db_mysql: null,
    skills_db_redis: null,
    skills_devops_title: "skills.categories.devops.title",
    skills_devops_cloud: null,
    skills_devops_gha: null,
    skills_devops_docker: null,
    skills_devops_bg_label: null,
    skills_devops_bg: null,
    skills_devops_sonar: null,
    skills_monitor_title: "skills.categories.monitoring.title",
    skills_monitor_slack_label: null,
    skills_monitor_slack: null,
    skills_monitor_locust_label: null,
    skills_monitor_locust: null,
    skills_ai_title: "skills.categories.ai.title",
    skills_ai_llm_label: null,
    skills_ai_llm: null,
    skills_ai_prompt_label: null,
    skills_ai_prompt: null,
    skills_ai_vibe_label: null,
    skills_ai_vibe: null,

    // Side Projects
    side_projects_heading: "sideProjects.sectionTitle",
    sp1_title: "sideProjects.interviewTrainer.title",
    sp1_desc: "sideProjects.interviewTrainer.description",
    sp1_insight: null,
    sp2_title: "sideProjects.srtApp.title",
    sp2_desc: "sideProjects.srtApp.description",
    sp2_insight: null,

    // Journey
    journey_heading: "journey.sectionTitle",
    j1_year: "j1_year",
    j1_company: "j1_company",
    j1_desc: "j1_desc",
    j1_legacy: "j1_legacy",
    j1_transition: "j1_transition",
    j2_year: "j2_year",
    j2_company: "j2_company",
    j2_desc: "j2_desc",
    j2_legacy: "j2_legacy",
    j2_transition: "j2_transition",
    j3_year: "j3_year",
    j3_company: "j3_company",
    j3_desc: "j3_desc",
    j3_legacy: "j3_legacy",
    j3_transition: "j3_transition",
    j4_year: "j4_year",
    j4_company: "j4_company",
    j4_desc: "j4_desc",
    j4_legacy: "j4_legacy",
    j5_year: "j5_year",
    j5_company: "j5_company",
    j5_desc: "j5_desc",

    // Footer
    footer_copyright: "footer.copyright",

    // Hero metrics
    hero_metric1_value: "hero_metric1_value",
    hero_metric1_label: "hero_metric1_label",
    hero_metric2_value: "hero_metric2_value",
    hero_metric2_label: "hero_metric2_label",
    hero_metric3_value: "hero_metric3_value",
    hero_metric3_label: "hero_metric3_label",
    hero_metric4_value: "hero_metric4_value",
    hero_metric4_label: "hero_metric4_label",
    hero_github: "hero_github",

    // Architecture diagram
    arch_title: "arch_title",
    arch_ext_lb: "arch_ext_lb",
    arch_be_lb: "arch_be_lb",
    arch_fe_lb: "arch_fe_lb",
    arch_api1: "arch_api1",
    arch_api2: "arch_api2",
    arch_fe1: "arch_fe1",
    arch_fe2: "arch_fe2",
    arch_redis: "arch_redis",
    arch_db_master: "arch_db_master",
    arch_db_slave: "arch_db_slave",
    arch_pdf: "arch_pdf",
    arch_batch: "arch_batch",

    // CI/CD flow
    cicd_build: "cicd_build",
    cicd_test: "cicd_test",
    cicd_sonar: "cicd_sonar",
    cicd_deploy: "cicd_deploy",
    cicd_health: "cicd_health",
    cicd_rollback: "cicd_rollback",

    // TeamplBack business metrics
    c1_biz_ccu: "c1_biz_ccu",
    c1_biz_contract: "c1_biz_contract",
    c1_biz_dev_period: "c1_biz_dev_period",

    // TeamplBack team growth
    c1_team_growth: "career.teamplback.team",

    // Decision blocks
    decision_title: "decision_title",
    c1_p1_decision: "c1_p1_decision",
    c1_p4_decision: "c1_p4_decision",
    c2_p1_decision: "c2_p1_decision",
    c1_redis_decision: "c1_redis_decision",

    // TeamplBack leadership
    c1_leadership_title: "c1_leadership_title",
    c1_leadership_mentoring_label: "c1_leadership_mentoring_label",
    c1_leadership_mentoring: "c1_leadership_mentoring",
    c1_leadership_hiring_label: "c1_leadership_hiring_label",
    c1_leadership_hiring: "c1_leadership_hiring",
    c1_leadership_process_label: "c1_leadership_process_label",
    c1_leadership_process: "c1_leadership_process",
    c1_leadership_tech_label: "c1_leadership_tech_label",
    c1_leadership_tech: "c1_leadership_tech",

    // Print button
    print_btn: "print_btn",

    // Side project enhancements
    sp1_feat1: "sideProjects.interviewTrainer.features[0]",
    sp1_feat2: "sideProjects.interviewTrainer.features[1]",
    sp1_feat3: "sideProjects.interviewTrainer.features[2]",
    sp2_feat1: "sideProjects.srtApp.features[0]",
    sp2_feat2: "sideProjects.srtApp.features[1]",
    sp2_feat3: "sideProjects.srtApp.features[2]",

    // Back to top
    back_to_top: null
  };

  function getNestedValue(obj, keyPath) {
    if (!keyPath) {
      return undefined;
    }

    var keys = keyPath.split(".");
    var value = obj;

    for (var i = 0; i < keys.length; i++) {
      if (value === undefined || value === null) {
        return undefined;
      }

      var key = keys[i];
      var bracketMatch = key.match(/^(.+)\[(\d+)\]$/);

      if (bracketMatch) {
        value = value[bracketMatch[1]];
        if (Array.isArray(value)) {
          value = value[parseInt(bracketMatch[2], 10)];
        } else {
          return undefined;
        }
      } else {
        value = value[key];
      }
    }

    return value;
  }

  function applyTranslations(data) {
    var elements = document.querySelectorAll("[data-i18n]");

    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var flatKey = el.getAttribute("data-i18n");
      var nestedPath = keyMap[flatKey];

      // If key is mapped to null, skip (keep original text)
      if (nestedPath === null || nestedPath === undefined) {
        // Try direct lookup as a fallback for unmapped keys
        if (keyMap.hasOwnProperty(flatKey) && keyMap[flatKey] === null) {
          continue;
        }
        continue;
      }

      var value = getNestedValue(data, nestedPath);

      if (value === undefined || value === null) {
        continue;
      }

      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else if (el.hasAttribute("data-i18n-placeholder")) {
        el.setAttribute("placeholder", value);
      } else if (el.hasAttribute("data-i18n-aria")) {
        el.setAttribute("aria-label", value);
      } else {
        el.textContent = value;
      }
    }
  }

  function updateToggleButton(lang) {
    var toggleBtn = document.querySelector("[data-lang-toggle]");
    if (!toggleBtn) {
      return;
    }

    var koIndicator = toggleBtn.querySelector(".lang-ko");
    var enIndicator = toggleBtn.querySelector(".lang-en");

    if (koIndicator && enIndicator) {
      if (lang === "ko") {
        koIndicator.classList.add("active");
        enIndicator.classList.remove("active");
      } else {
        koIndicator.classList.remove("active");
        enIndicator.classList.add("active");
      }
    } else {
      toggleBtn.textContent = lang === "ko" ? "EN" : "KO";
    }
  }

  function setLanguage(lang) {
    if (lang !== "ko" && lang !== "en") {
      return;
    }

    var data = window.i18nData && window.i18nData[lang];
    if (!data) {
      if (typeof console !== "undefined" && console.error) {
        console.error("i18n: Translation data not found for " + lang);
      }
      return;
    }

    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);
    applyTranslations(data);
    updateToggleButton(lang);

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // localStorage may not be available
    }

    var event = new CustomEvent("languageChanged", {
      detail: { language: lang }
    });
    document.dispatchEvent(event);
  }

  function toggleLanguage() {
    var nextLang = currentLang === "ko" ? "en" : "ko";
    setLanguage(nextLang);
  }

  function getCurrentLanguage() {
    return currentLang;
  }

  function init() {
    var savedLang = null;
    try {
      savedLang = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      // localStorage may not be available
    }

    if (savedLang === "en") {
      setLanguage("en");
    } else {
      currentLang = "ko";
      updateToggleButton("ko");
    }

    var toggleBtn = document.querySelector("[data-lang-toggle]");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function (e) {
        e.preventDefault();
        toggleLanguage();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.i18n = {
    setLanguage: setLanguage,
    toggleLanguage: toggleLanguage,
    getCurrentLanguage: getCurrentLanguage
  };
})();
