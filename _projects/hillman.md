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
      A diagram showing an overview of congenital heart disease
    </div>
  </div>
</div>

This study investigated how CHD affects functional brain connectivity, which reflects how activity across spatially distinct brain regions correlates over time. Using resting-state fMRI (rs-fMRI), we aimed to identify alterations in connectivity patterns between CHD patients and age-matched healthy controls.

By finding links between fMRI changes and CHD, it is possible that we could use fMRI scans as a safer and faster tool for diagnosing CHD in young children

---
## Project Overview

We analyzed blood-oxygen-level dependent (BOLD) imaging data to assess global and regional connectivity differences between CHD patients and controls. Each scan was preprocessed with a custom Python pipeline using FSL and NiPype tools for motion correction, skull stripping, spatial registration, and bandpass filtering.

Brain regions were defined using the Automated Anatomical Labeling Atlas (AAL3), and for each participant, regional activity correlations were computed to form a full-brain connectivity matrix. From this, we derived graph theory metrics—including global efficiency, local efficiency, and clustering coefficient—to quantify information flow and network segregation across brain regions.

<div class="row justify-content-center mt-4">
  <div class="col-sm-10 text-center">
    {% include figure.liquid 
      path="assets/img/fmri.jpg"
      class="img-fluid rounded z-depth-1"
    %}
    <div class="caption" style="font-size:0.95em; color:var(--global-text-color-light); margin-top:0.6em;">
      The difference between fMRI and structural MRI is that fMRI detects shifts in blood flow, which correspond with the activation of certain parts of the brain.
    </div>
  </div>
</div>

---
## Results

After quality assessment, 92 usable scans (37 CHD, 55 control) were analyzed. We found that global efficiency remained similar across groups, but several regional metrics showed significant differences:

- Increased local efficiency in the thalamus, lingual gyrus, and superior temporal gyrus in CHD patients.

- Decreased clustering coefficients in regions including the hippocampus, precuneus, postcentral gyrus, insula, and superior parietal gyrus.

These preliminary results indicate that CHD alters key properties of the brain’s functional network, disrupting the balance between local specialization and global communication. The increased local efficiency implies more isolated regional processing, while decreased clustering suggests reduced cross-regional coordination. The key takeaway here is that fMRI scans can be measurably altered by CHD, and while future work is required to confirm and validate these results, there is reason to believe that fMRI can be used as a diagnosis for CHD in young patients.

---
## Key Contributors
- **Dr. Rafael Ceschin** — Department of Biomedical Informatics, University of Pittsburgh
- **Joy Roy** — Department of Biomedical Informatics, University of Pittsburgh
- **William Reynolds** — Department of Biomedical Informatics, University of Pittsburgh
- **Dr. Ashok Panigrahy** — Department of Radiology, UPMC Children’s Hospital of Pittsburgh
