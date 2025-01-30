import React from "react";
import { CardItem, docType } from "../../LandingPage/TutorialCard";
import { MODULES } from "../../../constants";

export const featureList: CardItem[] = [
  {
    title: "Host Git Repositories",
    module: MODULES.code,
    icon: "img/icon_code.svg",
    description: <>Accelerate development with security at scale.</>,
    link: "docs/category/get-started-with-code",
  },
  {
    title: "Set up CI Pipelines",
    module: MODULES.ci,
    icon: "img/icon_ci.svg",
    description: "Build faster and be more productive.",
    link: "docs/category/get-started-with-ci",
  },
  {
    title: "Store Artifacts",
    module: MODULES.ar,
    icon: "img/icon_artifact_registry.svg",
    description: "Store your binaries natively on Harness.",
    link: "docs/artifact-registry",
  },
  {
    title: "Set up CD Pipelines",
    module: MODULES.cd,
    icon: "img/icon_cd.svg",
    description:
      "More efficient and reliable deployments.",
    link: "docs/category/get-started-with-cd",
  },
    {
    title: "Deploy Database Changes",
    module: MODULES.dbdevops,
    icon: "img/icon_dbdevops.svg",
    description: <>Accelerate deployment with an integrated pipeline for all database changes.</>,
    link: "docs/category/get-started-with-database-devops",
  },
  {
    title: "Manage Infrastructure as Code",
    module: MODULES.iacm,
    icon: "img/icon_iacm.svg",
    description: <>Manage your infrastructure with ease.</>,
    link: "docs/infrastructure-as-code-management",
  },
  {
    title: "Release Faster with Feature Flags",
    module: MODULES.ff,
    icon: "img/icon_ff.svg",
    description: <>Roll out new features progressively.</>,
    link: "docs/category/get-started-with-feature-flags",
  },
  {
    title: "Feature Management & Experimentation",
    module: MODULES.fme,
    icon: "img/icon_fme.svg",
    description: <>Switch on data-driven features and releases.</>,
    link: "docs/feature-management-experimentation",
  },
  {
    title: "Optimize Cloud Costs",
    module: MODULES.ccm,
    icon: "img/icon_ccm.svg",
    description: <>Achieve cost transparency and cut costs.</>,
    link: "docs/category/get-started-with-ccm",
  },
  {
    title: "Orchestrate Security Tests",
    module: MODULES.sto,
    icon: "img/icon_sto.svg",
    description: <>Shift left scanning of code, containers, & live apps.</>,
    link: "docs/category/get-started-with-sto",
  },
  {
    title: "Secure Supply Chain",
    module: MODULES.ssca,
    icon: "img/icon_ssca.svg",
    description: <>Secure your software supply chain.</>,
    link: "docs/category/get-started-with-scs",
  },
  {
    title: "Manage Service Reliability",
    module: MODULES.srm,
    icon: "img/icon_srm.svg",
    description: <>Monitor SLOs, track error budgets, and analyze impact of changes.</>,
    link: "docs/category/get-started-with-srm",
  },
  {
    title: "Run Chaos Experiments",
    module: MODULES.ce,
    icon: "img/icon_ce.svg",
    description: <>Ensure application and infrastructure resilience.</>,
    link: "docs/chaos-engineering/getting-started/",
  },
  {
    title: "Increase Developer Productivity",
    module: MODULES.idp,
    icon: "img/icon_idp.svg",
    description: <>A home for developers to create, manage, and explore software.</>,
    link: "docs/internal-developer-portal/get-started",
  },
  {
    title: "Set up Cloud Development Environments",
    module: MODULES.cde,
    icon: "img/cde_icon.svg",
    description: <>Accelerate developer experience with pre-configured, secure and scalable development environments.</>,
    link: "docs/cloud-development-environments",
  },
  {
    title: "Measure Software Engineering Processes",
    module: MODULES.sei,
    icon: "img/icon_sei.svg",
    description: <>Use data-led insights to remove SDLC bottlenecks.</>,
    link: "docs/category/get-started-with-sei",
  },
  {
    title: "Administer Harness Platform",
    module: MODULES.platform,
    icon: "img/logo.svg",
    description: <>Deliver software with the highest velocity, quality, security, reliability, and resilience.</>,
    link: "docs/category/get-started-with-harness",
  },
  {
    title: "Administer Harness Self-Managed Enterprise Edition",
    module: MODULES.platform,
    icon: "img/logo.svg",
    description: <>Install Harness Platform on self-managed Kubernetes cluster.</>,
    link: "docs/category/get-started-with-smp",
  },
];
