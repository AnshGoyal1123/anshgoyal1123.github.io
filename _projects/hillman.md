---
layout: page
title: Investigating Effects of CHD on Functional Connectivity
img: assets/img/chd.jpg
importance: 3
category: research
---
---
## Clinical Background

Congenital Heart Disease (CHD) refers to structural heart defects present at birth that can lead to chronic neurocognitive impairments. Children with CHD are known to experience delayed brain development and cognitive deficits, but the underlying neural mechanisms remain poorly understood.

<div class="row justify-content-center mt-4">
  <div class="col-sm-10 text-center">
    {% include figure.liquid 
      path="assets/img/chd_overview.jpg"
      class="img-fluid rounded z-depth-1"
    %}
    <div class="caption" style="font-size:0.95em; color:var(--global-text-color-light); margin-top:0.6em;">
      Diagram illustrating structural and circulatory alterations associated with congenital heart disease.
    </div>
  </div>
</div>

This study investigated how CHD affects **functional brain connectivity**—the statistical relationship between activity in spatially distinct brain regions. Using resting-state fMRI (rs-fMRI), we aimed to identify alterations in connectivity patterns between CHD patients and age-matched healthy controls.

<div class="highlight-box">
  <strong>Goal:</strong> Determine how congenital heart disease alters large-scale brain network organization and evaluate whether rs-fMRI can serve as a potential diagnostic tool.
</div>

---

## Project Overview

We analyzed blood-oxygen-level-dependent (BOLD) imaging data to assess global and regional connectivity differences between CHD patients and controls. Each scan was preprocessed with a **custom Python pipeline** using FSL and NiPype tools for motion correction, skull stripping, spatial registration, and band-pass filtering.

Brain regions were defined using the **Automated Anatomical Labeling (AAL3) Atlas**. For each participant, regional activity correlations were computed to form a full-brain connectivity matrix. From this, we derived graph-theoretic metrics—including **global efficiency**, **local efficiency**, and **clustering coefficient**—to quantify information flow and network segregation across brain regions.

<div class="table-responsive mt-4 mb-4">
  <table class="table table-bordered accent-table">
    <thead>
      <tr>
        <th style="width:35%;">Pipeline Step</th>
        <th style="width:65%;">Description / Tool Used</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Motion & Artifact Correction</td>
        <td>FSL MCFLIRT and custom filtering scripts in NiPype</td>
      </tr>
      <tr>
        <td>Skull Stripping & Registration</td>
        <td>FSL BET and ANTs for alignment to MNI152 space</td>
      </tr>
      <tr>
        <td>Atlas Parcellation</td>
        <td>Automated Anatomical Labeling (AAL3) Atlas defining 166 ROIs</td>
      </tr>
      <tr>
        <td>Connectivity Matrix Construction</td>
        <td>Region-wise BOLD correlation (Pearson’s r) producing 166 × 166 matrices</td>
      </tr>
      <tr>
        <td>Graph-Theory Analysis</td>
        <td>Computation of global efficiency, local efficiency, clustering coefficient</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="row justify-content-center mt-4">
  <div class="col-sm-10 text-center">
    {% include figure.liquid 
      path="assets/img/fmri.jpg"
      class="img-fluid rounded z-depth-1"
    %}
    <div class="caption" style="font-size:0.95em; color:var(--global-text-color-light); margin-top:0.6em;">
      fMRI detects blood-flow changes linked to neural activation, enabling functional connectivity mapping across brain regions.
    </div>
  </div>
</div>

---

## Results

After quality assessment, **92 usable scans** (37 CHD, 55 control) were analyzed. We found that global efficiency remained similar across groups, but several regional metrics showed significant differences:

- **Increased local efficiency** in the thalamus, lingual gyrus, and superior temporal gyrus among CHD patients.  
- **Decreased clustering coefficients** in the hippocampus, precuneus, postcentral gyrus, insula, and superior parietal gyrus.

These findings suggest that CHD alters key properties of the brain’s functional network—shifting the balance between local specialization and global communication. Increased local efficiency implies more isolated regional processing, while decreased clustering reflects weakened inter-regional integration.

<div class="highlight-box">
  <strong>Impact:</strong> Demonstrated that rs-fMRI can detect connectivity alterations caused by CHD, supporting its potential as a non-invasive biomarker for pediatric diagnosis.
</div>

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
        <td>Software</td>
        <td>FSL, NiPype, ANTs</td>
      </tr>
      <tr>
        <td>Languages</td>
        <td>Python</td>
      </tr>
      <tr>
        <td>Libraries</td>
        <td>NumPy, Pandas, NetworkX, Matplotlib</td>
      </tr>
      <tr>
        <td>Analysis Metrics</td>
        <td>Global efficiency, local efficiency, clustering coefficient</td>
      </tr>
      <tr>
        <td>Data</td>
        <td>Resting-state fMRI (37 CHD / 55 control participants)</td>
      </tr>
    </tbody>
  </table>
</div>

---

## Key Contributors
- **Dr. Rafael Ceschin** — Department of Biomedical Informatics, University of Pittsburgh  
- **Joy Roy** — Department of Biomedical Informatics, University of Pittsburgh  
- **William Reynolds** — Department of Biomedical Informatics, University of Pittsburgh  
- **Dr. Ashok Panigrahy** — Department of Radiology, UPMC Children’s Hospital of Pittsburgh
