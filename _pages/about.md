---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hi everyone! I'm Suprim Nakarmi, a **Ph.D. student** in Computer Science at the **University of Nevada, Las Vegas (UNLV)**, advised by Prof. Zuobin Xiong. My research focuses on the privacy and security of distributed learning systems, especially *federated graph neural networks (FedGNN)*: how private information about a client can leak, and how to defend against it.

Before UNLV, I received my master's degree in Computer Science from the **University of South Dakota** in 2023, advised by Prof. KC Santosh. My thesis combined *active learning* and *few-shot learning* to train deep learning models for mass screening with limited annotated data. Earlier, I was a research assistant at **NAAMII** in Kathmandu, where I built datasets and benchmarks for detecting parasites in smartphone microscope images. I received my bachelor's degree in Electronics and Communication Engineering from **Tribhuvan University** in 2018. In summer 2025, I was a visiting Ph.D. student at the **University of Southern California**.

Outside of research, I enjoy table tennis, Hindustani classical vocal music, and yoga.

News
====
**[2026.04]** I became a reviewer for Elsevier *High-Confidence Computing*.

**[2026.02]** I became a reviewer for *IEEE Transactions on Neural Networks and Learning Systems*.

**[2026]** Our paper *Fed-Listing* was published at IEEE ICCCN 2026. I am also serving on the program committees of AAAI 2026 and IEEE ICCCN 2026.

**[2026]** I received the Roy and Helen Kelsall Engineering Scholarship at UNLV (2026-2027).

**[2025.07]** I joined the University of Southern California as a visiting Ph.D. student (July-August 2025) to work on a foundation model for graph anomaly detection.

**[2025.01]** I started my Ph.D. in Computer Science at UNLV.


Publications
====
<h3>Under Review</h3>
  <ul>{% assign pubs = site.publications | where: "category", "under_review" %}{% for post in pubs reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

<h3>Conference and Workshop Papers</h3>
  <ul>{% assign pubs = site.publications | where: "category", "conferences" %}{% for post in pubs reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

<h3>Journal Articles</h3>
  <ul>{% assign pubs = site.publications | where: "category", "journals" %}{% for post in pubs reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

<h3>Book and Thesis</h3>
  <ul>{% assign pubs = site.publications | where: "category", "books" %}{% for post in pubs reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>


Presentations and Media
====
* Poster Presentation
  <div style="text-align: right;line-height: 0.2">2023, Santa Clara, CA</div>
  * IEEE Conference on Artificial Intelligence (CAI)
  * Active Learning to Minimize the Risk from Future Epidemics
 <div style="text-align: right;line-height: 1.5"> </div>

* Oral Presentation
  <div style="text-align: right;line-height: 0.2">2021, Virtual (Vienna, Austria)</div>
  * Practical Machine Learning for Developing Countries workshop, ICLR 2021
  * [Automated Detection of Food and Water-borne Parasites in Low-cost Smartphone Microscope Images](https://cutt.ly/wQ0xIBb)
 <div style="text-align: right;line-height: 1.5"> </div>

* Media Coverage
  * [Research in 30 seconds](https://www.facebook.com/watch/?v=947879679312965), Kathmandu Institute of Applied Sciences (KIAS), 2021
  * [Book publication](https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/computer-science-chair-co-authors-book-on-active-learning-in-health-care-with-recent-department-grad), University of South Dakota, 2023


Research Experience
====
* Graduate Research Assistant
  <div style="text-align: right;line-height: 0.2">January 2025-Present, Las Vegas</div>
  * Department of Computer Science, University of Nevada, Las Vegas
  * Research Interests: Privacy and security of federated learning and graph neural networks (FedGNN)
  * Designed a passive attack that infers the label distribution of a targeted client in FedGNN (Fed-Listing)
  * Supervisor: Prof. Zuobin Xiong
 <div style="text-align: right;line-height: 1.5"> </div>

* Visiting Ph.D. Student
  <div style="text-align: right;line-height: 0.2">July 2025-August 2025, Los Angeles</div>
  * Department of Computer Science, University of Southern California
  * Developed a foundation model for graph anomaly detection: one model for many graph datasets (citation, energy, medical, bioinformatics, transaction, etc.) and for node-, edge-, and graph-level tasks
 <div style="text-align: right;line-height: 1.5"> </div>

* Graduate Research Assistant
  <div style="text-align: right;line-height: 0.2">January 2022-December 2023, Vermillion</div>
  * Applied Artificial Intelligence Research Lab (2AI), University of South Dakota
  * Research Interests: Active learning, few-shot learning, medical screening with limited data
  * Trained deep learning models with only 40% of the annotated data; AUC of 99% (X-ray), 94% (CT scan), and 76% (cough sound)
  * Supervisor: Prof. KC Santosh
 <div style="text-align: right;line-height: 1.5"> </div>

* Research Assistant
  <div style="text-align: right;line-height: 0.2">December 2020-September 2021, Kathmandu</div>
  * Nepal Applied Mathematics and Informatics Institute for Research (NAAMII)
  * Built and [publicly released](https://zenodo.org/records/7813183) two datasets (brightfield and smartphone microscopes) for detecting Giardia and Cryptosporidium on fruits and vegetables
  * Benchmarked FasterRCNN, RetinaNet, YOLOv8s, and Deformable DETR (F1 of 83.7% and 83.9% for Giardia and Cryptosporidium in brightfield images, 74.0% and 68.6% in smartphone images) and compared them with an expert and three non-experts
 <div style="text-align: right;line-height: 1.5"> </div>

* Research Intern
  <div style="text-align: right;line-height: 0.2">June 2020-November 2020, Kathmandu</div>
  * Nepal Applied Mathematics and Informatics Institute for Research (NAAMII)
  * Built a PyTorch pipeline on top of MONAI for X-ray segmentation (ResUNet and SegNet) with a Dice score of 89.9% on the Shenzhen and Montgomery datasets


Education
====
* Ph.D. in Computer Science
  <div style="text-align: right;line-height: 0.2">2025-Present, Las Vegas</div>
  * University of Nevada, Las Vegas
  * Advisor: Prof. Zuobin Xiong
 <div style="text-align: right;line-height: 1.5"> </div>

* Master's degree in Computer Science (GPA: 4.0/4.0)
  <div style="text-align: right;line-height: 0.2">2022-2023, Vermillion</div>
  * University of South Dakota
  * Thesis: Mentoring Deep Learning Models for Mass Screening with Limited Data
  * Advisor: Prof. KC Santosh
 <div style="text-align: right;line-height: 1.5"> </div>

* Bachelor in Electronics and Communication Engineering (81.92%)
  <div style="text-align: right;line-height: 0.2">2014-2018, Kathmandu</div>
  * Tribhuvan University


Industry Experience
====
* SailPoint Developer (remote)
  <div style="text-align: right;line-height: 0.2">February 2024-December 2024, Euless</div>
  * Vision InfoTek
  * Wrote a custom SailPoint connector and customized the Certifications and IIQ modules
 <div style="text-align: right;line-height: 1.5"> </div>

* Machine Learning Intern (remote, part-time)
  <div style="text-align: right;line-height: 0.2">August 2022-June 2023, Austin</div>
  * Synthetik Applied Technologies
  * Built Random Forest and neural network models that classify whether an event (storm, rainfall, hurricane, etc.) causes a flood, with 96% accuracy, using NOAA, USGS, and NWS data
  * Cut regression error by 35% (MSE from 2.4 to 1.56), predicting average flood claim payout within $1,600
  * Optimized SQL queries over 2+ million records from the [OpenFEMA database](https://www.fema.gov/openfema-data-page/fima-nfip-redacted-claims-v2) and imputed 40% of missing building features with regression and KNN
 <div style="text-align: right;line-height: 1.5"> </div>

* Core Team Member
  <div style="text-align: right;line-height: 0.2">August 2022-June 2023, Vermillion</div>
  * Technology Readiness Acceleration Program (TRAC), University of South Dakota
  * Worked on commercializing human factors engineering research: market research, customer discovery, and presentations
 <div style="text-align: right;line-height: 1.5"> </div>

* Junior Software Developer
  <div style="text-align: right;line-height: 0.2">April 2019-August 2020, Kathmandu</div>
  * Upaya Technologies Pvt. Ltd
  * Built web services with Python, Django, MySQL, and ReactJS, developed RESTful microservices, and prototyped AI features such as document classification and sentiment analysis


Teaching
====
* Teaching Assistant, Operating Systems (CS 370)
  <div style="text-align: right;line-height: 0.2">Fall 2025, Las Vegas</div>
  * University of Nevada, Las Vegas; undergraduate course, 49 students
  * Professor: Dr. Chuck Tessler
 <div style="text-align: right;line-height: 1.5"> </div>

* Teaching Assistant, Data Structures (CS 302)
  <div style="text-align: right;line-height: 0.2">Spring 2025, Las Vegas</div>
  * University of Nevada, Las Vegas; undergraduate course, 20 students
  * Professor: Dr. Zuobin Xiong
 <div style="text-align: right;line-height: 1.5"> </div>

* Teaching Assistant, Intermediate Computer Programming Laboratory (CSC 255L)
  <div style="text-align: right;line-height: 0.2">Spring 2022, Vermillion</div>
  * University of South Dakota; undergraduate course, 25+ students
  * Instructor: Zachary Tschetter
 <div style="text-align: right;line-height: 1.5"> </div>

* Teacher, Fundamentals of Computer Science
  <div style="text-align: right;line-height: 0.2">April 2018-March 2019, Kathmandu</div>
  * Magus English School; secondary level course, 40+ students


Services
====
Journal Reviewer of IEEE Transactions on Neural Networks and Learning Systems (2026-present) and Elsevier High-Confidence Computing (2026-present).

Program Committee Member of AAAI (2026) and IEEE ICCCN (2026).

Production Secretary of Springer *Recent Trends in Image Processing and Pattern Recognition* (2022).

Secretary of the Applied Artificial Intelligence Club at University of South Dakota (2022-2023) and Mentor at the South Dakota Science Olympiad (2022).


Awards
====
Roy and Helen Kelsall Engineering Scholarship, University of Nevada, Las Vegas ($1,000), 2026-2027

Access Grant, University of Nevada, Las Vegas ($1,500), 2025-2026


Projects
====
* Impact of the Crypto Market on the Stock Market
  <div style="text-align: right;line-height: 0.2">2023</div>
  * Used deep reinforcement learning (A2C and PPO) to study how the crypto market affects the stock market ([GitHub](https://github.com/suprimnakarmi/rl-project))
 <div style="text-align: right;line-height: 1.5"> </div>

* Predict Customer Satisfaction Level
  <div style="text-align: right;line-height: 0.2">2023</div>
  * Built a regression model that predicts customer satisfaction after delivery, deployed with an MLOps pipeline using ZenML and MLflow ([GitHub](https://github.com/suprimnakarmi/zenml_customer_satisfaction))
 <div style="text-align: right;line-height: 1.5"> </div>

* Haptic Feedback Device for the Visually Impaired
  <div style="text-align: right;line-height: 0.2">2018</div>
  * A wearable vest that uses a Raspberry Pi 4 with stereo cameras, a disparity map for depth, and a Haar cascade classifier to give vibration feedback where an object is close
 <div style="text-align: right;line-height: 1.5"> </div>

* Embedded Systems and Robotics Projects
  <div style="text-align: right;line-height: 0.2">2018</div>
  * Plot clock and weather station, solar-powered RC plane, PID line-follower robot, and GPS-guided self-navigating robot


Skills
====
* **Programming:** Python, C++, R
* **Databases:** MySQL, PostgreSQL, SQL
* **Machine Learning:** PyTorch, TensorFlow, Scikit-Learn, MONAI, Detectron2, MMDetection, Ultralytics, Gymnasium, FinRL, ZenML, MLflow
* **Data and Visualization:** NumPy, Pandas, PySpark, SciPy, OpenCV, Tesseract, GeoPandas, QGIS, Overpass API, Matplotlib, Plotly, Tableau, dplyr, tidyr, caret, ggplot2
* **Cloud and Tools:** AWS (Lambda, SageMaker, EC2, S3, IAM), Google Cloud Platform, Docker, High-Performance Computing (HPC), REST API, Postman, Agile, Scrum, Trello, Arduino, Raspberry Pi
