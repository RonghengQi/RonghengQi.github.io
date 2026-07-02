---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
- MRes / Master's research, GeoAI, remote sensing, and disaster risk, YYYY-YYYY
- Previous degree, Department, University, YYYY-YYYY

Research experience
======
- Researcher, GeoAI and remote sensing, YYYY-YYYY
  - Worked on geospatial data analysis, machine learning, and disaster-risk related research.
- Research project contributor, Institution or Lab, YYYY-YYYY
  - Add project details, supervisor, datasets, methods, and outputs.
  
Skills
======
- Programming: Python, R, JavaScript
- Methods: machine learning, spatial analysis, remote sensing, model interpretation
- Software: Git, QGIS/ArcGIS, LaTeX, Zotero

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
- Academic service, student leadership, reviewing, volunteering, or outreach.
