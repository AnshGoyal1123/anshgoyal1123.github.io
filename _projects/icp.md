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

Intracranial pressure (ICP) reflects the pressure within the skull and is a critical physiological variable in patients with traumatic brain injury. Sustained elevations can cause long-term damage and even be fatal, so continuous monitoring is essential.

Currently, ICP is measured **invasively** using intraventricular drains or intraparenchymal monitors — methods that, while accurate, carry significant risks such as infection and hemorrhage. A **non-invasive alternative** would dramatically expand ICP monitoring to patients who cannot safely undergo surgical sensor placement.

<div class="row justify-content-center mt-4">
  <div class="col-sm-8 text-center">
    {% include figure.liquid 
      path="assets/img/evd.jpg"
      class="img-fluid rounded z-depth-1"
      style="max-width:80%; margin:auto;" 
    %}
    <div class="caption" style="font-size:0.95em; color:var(--global-text-color-light); margin-top:0.6em;">
      Ventricular and intraparenchymal ICP monitors are inserted into different parts of the brain, making them highly invasive procedures.
    </div>
  </div>
</div>

This project explores **deep learning-based approaches** to estimate ICP waveforms directly from non-invasive physiological signals—such as arterial blood pressure (ABP), electrocardiography (ECG), and photoplethysmography (PPG)—aiming to enable continuous, risk-free monitoring in both critical and general care settings.

<div class="highlight-box">
  <strong>Goal:</strong> Develop a scalable, non-invasive ICP monitoring model using synchronized multi-signal deep learning to replace traditional invasive sensors.
</div>

---

## Project Overview

This project builds upon <a href="https://www.sciencedirect.com/science/article/pii/S0010482524007625" target="_blank" style="color:var(--global-theme-color); text-decoration:none;">previous work conducted at Johns Hopkins</a> that explored deep learning-based ICP estimation. While the original study demonstrated the promise of neural approaches, it had key limitations: a small dataset of 10 patients, limited model generalization, and single-patient optimization that reduced multi-patient performance.

<div class="row justify-content-center mt-4">
  <div class="col-sm-10 text-center">
    {% include figure.liquid 
      path="assets/img/icp_overview.jpg"
      class="img-fluid rounded z-depth-1"
    %}
    <div class="caption" style="font-size:0.95em; color:var(--global-text-color-light); margin-top:0.6em;">
      Sample comparison of predicted and true ICP waveforms for a 10-second segment from the original Johns Hopkins study.
    </div>
  </div>
</div>

Our work addresses these issues through a nearly **70× larger dataset** by integrating the **MIMIC-III Waveform Database** with **Johns Hopkins’ PMAP dataset** for external validation. We aim to both **reproduce** and **extend** the original models, identifying the most robust architectures for real-world generalization.

<div class="table-responsive mt-4 mb-4">
  <table class="table table-bordered accent-table">
    <thead>
      <tr>
        <th style="width:35%;">Component</th>
        <th style="width:65%;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Input Signals</td>
        <td>ABP, ECG, and PPG waveforms sampled at 125 Hz from MIMIC-III and PMAP datasets.</td>
      </tr>
      <tr>
        <td>Preprocessing</td>
        <td>Noise filtering, synchronization, segment extraction, and physiological plausibility checks.</td>
      </tr>
      <tr>
        <td>Model Architecture</td>
        <td>Deep learning models (LSTM, Transformer) predicting continuous ICP waveforms from input signals.</td>
      </tr>
      <tr>
        <td>Evaluation Metrics</td>
        <td>Mean absolute error (MAE), RMSE, waveform correlation, and frequency-domain similarity.</td>
      </tr>
      <tr>
        <td>Validation</td>
        <td>External testing on the Johns Hopkins PMAP dataset to assess generalization and robustness.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="highlight-box">
  <strong>Impact:</strong> Establishes a reproducible, data-driven framework for non-invasive ICP estimation that could reduce infection risks and expand access to neurological monitoring.
</div>

---

## Current Stage

Our team has completed large-scale data preprocessing and multi-signal synchronization from the **MIMIC-III Waveform Database**, with models now achieving realistic ICP waveform reconstruction and strong correlation with ground truth. We are currently performing **external validation on the PMAP dataset**, with results being compiled for journal submission.

---

## Tools and Technologies

<div class="table-responsive mt-4 mb-4">
  <table class="table table-bordered accent-table">
    <thead>
      <tr>
        <th style="width:35%;">Category</th>
        <th style="width:65%;">Technologies Used</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Frameworks</td>
        <td>TensorFlow, PyTorch</td>
      </tr>
      <tr>
        <td>Languages</td>
        <td>Python</td>
      </tr>
      <tr>
        <td>Data Sources</td>
        <td>MIMIC-III Waveform Database, PMAP Dataset (Johns Hopkins)</td>
      </tr>
      <tr>
        <td>Metrics</td>
        <td>MAE, RMSE, waveform correlation, frequency-domain error</td>
      </tr>
      <tr>
        <td>Hardware</td>
        <td>NVIDIA RTX A5500 GPUs (CIS HPC Cluster)</td>
      </tr>
    </tbody>
  </table>
</div>

---

## Key Contributors

- **Dr. Robert D. Stevens** — Principal Investigator, Johns Hopkins University
- **Veet Zaveri** — Department of Computer Science, Johns Hopkins University
- **Carl Harris** — Department of Biomedical Engineering, Johns Hopkins University
