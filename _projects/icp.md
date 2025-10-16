---
layout: page
title: Non-Invasive ICP Waveform Generation Models
img: assets/img/icp.jpg
importance: 2
category: research
giscus_comments: false
---
---
## Clinical Background

Intracranial pressure (ICP) reflects the pressure within the skull and is a critical physiological variable in patients with traumatic brain injury. Sustained elevations can cause long term damage and even be fatal, so constant measurement is required.

Currently, ICP is measured **invasively** using intraventricular drains or intraparenchymal monitors — methods that, while accurate, carry significant risks such as infection and hemorrhage. A **non-invasive alternative** would dramatically expand ICP monitoring to patients who cannot safely undergo surgical sensor placement.

<div class="row justify-content-center mt-4">
  <div class="col-sm-8 text-center">
    {% include figure.liquid 
      path="assets/img/evd.jpg"
      class="img-fluid rounded z-depth-1"
      style="max-width:80%; margin:auto;" 
    %}
    <div class="caption" style="font-size:0.95em; color:var(--global-text-color-light); margin-top:0.6em;">
      Ventricular and intraparenchymal ICP monitor are inserted into different parts of the brain, a very invasive procedure.
    </div>
  </div>
</div>

This project explores **deep learning-based approaches** to estimate ICP waveforms directly from non-invasive physiological signals—such as arterial blood pressure (ABP), electrocardiography (ECG), and photoplethysmography (PPG)—aiming to enable continuous, risk-free monitoring in both critical and general care settings.

---
## Project Overview

This project is an extension from <a href="https://www.sciencedirect.com/science/article/pii/S0010482524007625" target="_blank" style="color:var(--global-theme-color); text-decoration:none;">previous work conducted at Johns Hopkins exploring these deep learning ICP estimation approaches</a>. While they set the groundwork for our project and justified the utility of deep learning methods for ICP estimate, their study had some notable flaws to consider. They worked with a small set of 10 patients, and while they achieved excellent results in single-patient analyses, their models left some room for improvement in their multi-patient performance.

<div class="row justify-content-center mt-4">
  <div class="col-sm-10 text-center">
    {% include figure.liquid 
      path="assets/img/icp_overview.jpg"
      class="img-fluid rounded z-depth-1"
    %}
    <div class="caption" style="font-size:0.95em; color:var(--global-text-color-light); margin-top:0.6em;">
      Sample comparison of predicted and true ICP waveforms for a 10-second segment from the previous study
    </div>
  </div>
</div>

The goal of our extension of this project is to address these issues. We are working with a nearly 70-fold larger dataset than the previous team by combining a large MIMIC-III dataset with Johns Hopkins' own PMAP dataset for external validation. We are working to select the best models from their work to validate externally, while also trying to improve the performance of the worst performing models from the previous study.

The broader aim is to create a clinically viable system for **continuous, non-invasive ICP estimation** that could one day reduce the need for invasive monitoring, enhance triage in neurological ICUs, and expand ICP assessment to outpatient or pre-hospital contexts.

---
## Current Stage

Our team has completed large-scale data preprocessing and multi-signal synchronization from the **MIMIC-III Waveform Database**, with models now achieving realistic ICP waveform reconstruction and strong correlation with ground truth. We are currently performing external validation on the PMAP dataset, and will soon aim to compile our results into a publication.

---
## Other Key Contributors

- **Veet Zaveri** - Department of Computer Science, Johns Hopkins University
- **Carl Harris** - Department of Biomedical Engineering, Johns Hopkins University
- **Dr. Robert D. Stevens** — Principal Investigator, Johns Hopkins University 