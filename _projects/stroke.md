---
layout: page
title: Acute Stroke Detection and Segmentation Models
img: assets/img/stroke_project.jpg
importance: 1
category: research
related_publications: false
---
---
## Clinical Background


Acute ischemic stroke (AIS) occurs when blood flow to part of the brain is obstructed, causing rapid neuronal death and lasting neurological damage. It remains a leading cause of disability and the fifth leading cause of death worldwide. Early and accurate detection is critical for enabling time-sensitive interventions such as thrombolysis and thrombectomy. 

Non-contrast CT (NCCT) is the first-line imaging modality for stroke evaluation because it is fast and widely available, but ischemic lesions often appear subtle and can be missed. Usually, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1859855" target="_blank" style="color:var(--global-theme-color); text-decoration:none;">MRI is considered far superior to CT imaging for stroke detection</a>, but the increased time and resource cost accompanied by MRI imaging leads to delays in patient care. 

<div class="row justify-content-center mt-4">
  <div class="col-sm-8 text-center">  <!-- was col-sm-10 -->
    {% include figure.liquid 
      path="assets/img/stroke_overview_1.png"
      class="img-fluid rounded z-depth-1"
      style="max-width:80%; margin:auto;" 
    %}
    <div class="caption" style="font-size:0.95em; color:var(--global-text-color-light); margin-top:0.6em;">
      Difference between NCCT and MRI images of a stroke lesion
    </div>
  </div>
</div>

This project explores deep learning methods to automatically detect and localize ischemic lesions on NCCT, supporting faster and more reliable diagnosis in acute care. This project explores deep learning methods to automatically detect and localize ischemic lesions on NCCT, supporting faster and more reliable diagnosis in acute care.

---

## Project Overview


This work focuses on developing an end-to-end deep learning framework for **stroke classification** and **lesion segmentation** on NCCT scans. The classification models determine the presence of stroke, while the segmentation models highlight the affected brain regions. Together, these systems aim to improve diagnostic efficiency, reduce inter-observer variability, and provide interpretable AI-assisted insights for clinicians.

The project builds on a large-scale, curated dataset of paired CT and MRI scans, and leverages modern architectures such as ResNet, Vision Transformers, and 3D U-Net variants. The broader goal is to evaluate how far NCCT alone can be pushed as a tool for rapid, automated stroke assessment without reliance on more advanced imaging modalities.

<div class="row justify-content-center mt-4">
  <div class="col-sm-10 text-center">
    {% include figure.liquid 
      path="assets/img/stroke_overview_2.png"
      class="img-fluid rounded z-depth-1"
    %}
    <div class="caption" style="font-size:0.95em; color:var(--global-text-color-light); margin-top:0.6em;">
      Two sample prediction results from the AUIS. The first column shows the original scan, the second shows the scan with the true label overlaid in red, and the third shows the true label (red) over the model prediction (white).
    </div>
  </div>
</div>

---
## Current Stage


Our models have achieved strong performance in both stroke detection and lesion localization. We are currently in the **manuscript preparation stage**, finalizing experiments, writing, and compiling results for journal submission.

---

## Other Key Contributors

- **Dr. Robert D. Stevens** — Principal Investigator, Johns Hopkins University 
- **Feng-Chiao Lee** - Department of Biomedical Engineering, Johns Hopkins University
- **Rongxi Yi** - Department of Biomedical Engineering, Johns Hopkins University
- **Xinyuan Fang** - Department of Computer Science, Johns Hopkins University
- **Yanlin Wu** - Department of Biomedical Engineering, Johns Hopkins University
