---
layout: page
title: Automated Document Generation @ Regeneron
img: assets/img/regn.jpg
importance: 1
category: build
---
---
## Project Overview

Regeneron Pharmaceuticals maintains one of the fastest **research and development pipelines** in the biotechnology industry. However, a major bottleneck lies in **documentation** — scientists and engineers spend **30–45 minutes** creating a single report, most of which involves gathering data from multiple systems and reformatting it into internal templates.

This project focused on building an **automated document generation system** that connects to Regeneron’s internal databases, extracts relevant information, and compiles it into pre-formatted, submission-ready documents — reducing report generation time by over **90%**.

---

## Motivation

Hundreds of molecule candidates pass through evaluation each year. Each stage requires detailed reporting for data transfer, compliance, and quality assurance. By automating this repetitive and error-prone work, we aimed to free up scientists to focus on **data analysis and experiment design**, not paperwork.

<div class="highlight-box" style="border-left: 4px solid #25c279; background-color: rgba(37,194,121,0.08); padding: 1em 1.5em; border-radius: 6px; margin: 1.5em 0;">
  <strong style="color:#25c279;">Goal:</strong> Build a system that reduces documentation time from 30–45 minutes to under 3 minutes while maintaining full accuracy and standardization.
</div>

---

## Architecture Overview

The application was developed in **Python** using a modular structure inspired by the <a href="https://www.cosmicpython.com/book/preface.html" target="_blank" style="color:var(--global-theme-color); text-decoration:none;">Cosmic Python</a> architecture — designed to keep the codebase maintainable as new report types and developers joined the project. A **Flask API** handled user interaction, while internal connectors accessed multiple Regeneron databases to collect and merge the necessary data.

<div class="row justify-content-center mt-4">
  <div class="col-sm-10 text-center">
    {% include figure.liquid 
      path="assets/img/cosmic.jpg"
      class="img-fluid rounded z-depth-1"
    %}
    <div class="caption" style="font-size:0.95em; color:var(--global-text-color-light); margin-top:0.6em;">
      Simplified Cosmic Python architecture used to structure the automation system.
    </div>
  </div>
</div>

<div class="table-responsive mt-4 mb-4">
  <table class="table table-bordered" style="font-size:0.95em; border-color:var(--global-divider-color); color:var(--global-text-color); background-color:var(--global-card-bg-color);">
    <thead style="background-color:rgba(37,194,121,0.25); color:var(--global-text-color);">
      <tr>
        <th style="width:40%;">Component</th>
        <th style="width:60%;">Purpose / Technology</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Backend</td>
        <td>Python modules organized via the Cosmic Python pattern for scalable, testable logic.</td>
      </tr>
      <tr>
        <td>Frontend</td>
        <td>Flask API with lightweight HTML/CSS/JS interface for user inputs and downloads.</td>
      </tr>
      <tr>
        <td>Document Engine</td>
        <td>Word and PowerPoint generation with <code>python-docx</code> and <code>python-pptx</code>.</td>
      </tr>
      <tr>
        <td>PDF Parser</td>
        <td>Custom extraction system using <code>PyMuPDF</code> for text, tables, and figures.</td>
      </tr>
      <tr>
        <td>Deployment</td>
        <td>Dockerized Flask app hosted on internal Regeneron servers.</td>
      </tr>
    </tbody>
  </table>
</div>

---

## Workflow Summary

The system operates through a **command–handler pattern**:

1. **User Input** – Scientists select a report type, provide identifiers or uploads.  
2. **Command Creation** – Input is converted into a structured command object.  
3. **Handler Execution** – Command is processed by a handler that collects data from multiple databases.  
4. **Document Generation** – The template system compiles and formats the final report.  
5. **Output Delivery** – Generated file is returned to the user via the interface.

This design allowed each document type to have its own modular handler, making the system **scalable** and **easy to maintain** as more templates were added.

---

## My Contributions

I joined when a minimal version of the tool existed (supporting two document types). My work focused on expanding functionality, improving structure, and implementing entirely new capabilities.

### PowerPoint Generation Module  
- Added full PowerPoint automation — the first of its kind in the app.  
- Designed utilities for slide creation, text placement, and image resizing.  
- Built a PDF parsing pipeline for extracting tables and figures to integrate into slides.  
- Created a reusable framework for future presentation-style reports.

### Word Report Integration  
- Added multi-database connectivity to fetch molecule and experiment data dynamically.  
- Implemented conditional content logic (sections appear/disappear based on data).  
- Improved document standardization and automated error handling.

### Infrastructure & Codebase Improvements  
- Refactored existing modules for maintainability and readability.  
- Reorganized utility functions into shared services to reduce duplication.  
- Enhanced user experience with cleaner interfaces and better validation.

### User Acceptance Testing (UAT)  
- Led UAT sessions with scientists and team leads to gather feedback.  
- Debugged live during sessions to resolve logic and formatting issues.  
- Integrated real-world feedback into release-ready builds.

<div class="highlight-box" style="border-left: 4px solid #25c279; background-color: rgba(37,194,121,0.08); padding: 1em 1.5em; border-radius: 6px; margin: 1.5em 0;">
  <strong style="color:#25c279;">Impact:</strong> Added two new document types, improved system reliability, added aesthetic touches to the user interface, supported other developers, and reduced report creation time by ~90%.
</div>

---

## Timeline

The project followed an **Agile workflow** with two-week sprints.

- **Phase 1 (3 weeks):** Onboarding, architecture review, and system setup.  
- **Phase 2 (3.5 months):** Development of the PowerPoint generation module and PDF extraction tools.  
- **Phase 3 (2 months):** Word report integration with multi-database inputs.  
- **Phase 4 (1 month):** UAT, interface refinement, and deployment stabilization.

---

## Tools and Technologies

<div class="table-responsive mt-4 mb-4">
  <table class="table table-bordered" style="font-size:0.95em; border-color:var(--global-divider-color); color:var(--global-text-color); background-color:var(--global-card-bg-color);">
    <thead style="background-color:rgba(37,194,121,0.25); color:var(--global-text-color);">
      <tr>
        <th style="width:35%;">Category</th>
        <th style="width:65%;">Technologies Used</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Languages</td>
        <td>Python, HTML, CSS, JavaScript</td>
      </tr>
      <tr>
        <td>Frameworks</td>
        <td>Flask, Jinja2</td>
      </tr>
      <tr>
        <td>Libraries</td>
        <td><code>python-docx</code>, <code>python-pptx</code>, <code>PyMuPDF</code>, <code>pandas</code>, <code>NumPy</code></td>
      </tr>
      <tr>
        <td>Version Control</td>
        <td>Git, GitHub</td>
      </tr>
      <tr>
        <td>Workflow</td>
        <td>Agile (two-week sprints), 2 standups a week</td>
      </tr>
    </tbody>
  </table>
</div>

---

## Acknowledgments

This project was conducted as part of the **Preclinical Manufacturing & Process Development (PMPD)** group, under my amazing manager Kevia Qu and with guidance from the extremely resourceful Data Engineering team. Special thanks to them for their collaboration and mentorship throughout development.