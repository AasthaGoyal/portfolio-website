import React from "react";
import emailjs from "emailjs-com";

function sendEmail(e) {
	e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

	emailjs
		.sendForm(
			"service_hp5scuk",
			"template_z5tmffn",
			e.target,
			"wr1S52Ze1ly-Wk_9C"
		)
		.then(
			(result) => {
				console.log(`'email send`, result);
				window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
			},
			(error) => {
				console.log(error.text);
			}
		);
}
function Home() {
	return (
		<div>
			<header id="header">
				<div class="container">
					<h1>
						<a href="index.html">Aastha Goyal (Aashi)</a>
					</h1>
					{/* <!-- <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> --> */}
					<h2>
						<span>Software Engineer</span> based in Auckland, NZ
					</h2>

					<nav id="navbar" class="navbar">
						<ul>
							<li>
								<a href="/" class="nav-link">
									Home
								</a>
							</li>
							<li>
								<a href="#aboutSection" class="nav-link">
									About me
								</a>
							</li>
							<li>
								<a href="#expertise" class="nav-link">
									Expertise
								</a>
							</li>
							<li>
								<a href="#experience" class="nav-link">
									Work Experience
								</a>
							</li>
							<li>
								<a href="#projects" class="nav-link">
									Portfolio
								</a>
							</li>
							<li>
								<a href="#journal-blog" class="nav-link">
									My Blog
								</a>
							</li>
							<li>
								<a class="nav-link" href="#contact">
									Get in Touch
								</a>
							</li>
						</ul>
						<i class="bi bi-list mobile-nav-toggle"></i>
					</nav>

					<div class="social-links">
						<a href="https://github.com/AasthaGoyal" class="twitter">
							<i class="bi bi-github"></i>
						</a>
						<a href="https://medium.com/@aasthagoyal" class="facebook">
							<i class="bi bi-medium"></i>
						</a>

						<a href=" https://www.linkedin.com/in/goyal-aastha/" class="linkedin">
							<i class="bi bi-linkedin"></i>
						</a>
					</div>
				</div>
			</header>

			<div id="aboutSection" name="aboutSection" class="about">
				<div class="about-me container">
					<div class="section-title">
						<h2>About</h2>
						<p>Learn more about me</p>
					</div>

					<div class="row">
						<div class="col-lg-4" data-aos="fade-right">
							<img src="assets/img/pic.jpeg" class="img-fluid" alt="" />
						</div>
						<div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
							<h3>Cloud Engineer &amp; Associate Integration Consultant</h3>
							<p class="fst-italic">
								I built integration soluions on cloud to integrate different client
								applications and resolbe business issues.
							</p>
							<div class="row">
								<div class="col-lg-6">
									<ul>
										<li>
											<i class="bi bi-chevron-right"></i> <strong>Birthday:</strong>{" "}
											<span>4 December 1997</span>
										</li>
										<li>
											<i class="bi bi-chevron-right"></i> <strong>Projects:</strong>{" "}
											<span>https://github.com/AasthaGoyal</span>
										</li>
										<li>
											<i class="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
											<span>+021 086 23321</span>
										</li>
										<li>
											<i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
											<span>Auckland, NZ</span>
										</li>
									</ul>
								</div>
								<div class="col-lg-6">
									<ul>
										<li>
											<i class="bi bi-chevron-right"></i> <strong>Age:</strong>{" "}
											<span>27</span>
										</li>
										<li>
											<i class="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
											<span>Bachelors in IT (Software Development)</span>
										</li>
										<li>
											<i class="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
											<span>aastha2150@gmail.com</span>
										</li>
										<li>
											<i class="bi bi-chevron-right"></i> <strong>Freelance:</strong>{" "}
											<span>Available</span>
										</li>
									</ul>
								</div>
							</div>
							<p>
								Experienced Integration Software Engineer with a robust background in
								agile methodology and over four years of hands-on experience. Proficient
								in coordinating all phases of the software development lifecycle, from
								planning and development to deployment and implementation of core
								modules, platforms, and APIs. Skilled in automated release and
								deployment using Infrastructure as Code (IaC) principles. Currently
								exploring containerization technologies like Docker, Kubernetes, and
								Terraform to optimise software applications. Actively seeking
								opportunities to integrate AI and machine learning into existing
								solutions for enhanced automation and efficiency. Committed to
								continuous learning and staying updated with certifications in Docker,
								Kubernetes, Terraform, Helm, and cloud platforms such as AWS, Azure, and
								GCP.
							</p>
						</div>
					</div>
				</div>

				<div class="counts container">
					<div class="row">
						<div class="col-lg-3 col-md-6">
							<div class="count-box">
								<i class="bi bi-emoji-smile"></i>
								<span
									data-purecounter-start="0"
									data-purecounter-end="232"
									data-purecounter-duration="1"
									class="purecounter"
								></span>
								<p>Integration </p>
							</div>
						</div>

						<div class="col-lg-3 col-md-6 mt-5 mt-md-0">
							<div class="count-box">
								<i class="bi bi-journal-richtext"></i>
								<span
									data-purecounter-start="0"
									data-purecounter-end="521"
									data-purecounter-duration="1"
									class="purecounter"
								></span>
								<p>API Development</p>
							</div>
						</div>

						<div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
							<div class="count-box">
								<i class="bi bi-award"></i>
								<span
									data-purecounter-start="0"
									data-purecounter-end="1463"
									data-purecounter-duration="1"
									class="purecounter"
								></span>
								<p>DevOps</p>
							</div>
						</div>

						<div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
							<div class="count-box">
								<i class="bi bi-headset"></i>
								<span
									data-purecounter-start="0"
									data-purecounter-end="24"
									data-purecounter-duration="1"
									class="purecounter"
								></span>
								<p>Operations Support</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="expertise" name="expertise" class="about">
				<div class="skills container">
					<div class="section-title">
						<h2>Expertise</h2>
					</div>

					<div class="row skills-content">
						<div class="col-lg-6">
							<div class="progress">
								<span class="skill">
									Clouds (AWS, Azure & GCP) <i class="val">100%</i>
								</span>
								<div class="progress-bar-wrap">
									<div
										class="progress-bar"
										role="progressbar"
										style={{width: "90%"}}
										aria-valuenow="90"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>

							<div class="progress">
								<span class="skill">
									API Development <i class="val">80%</i>
								</span>
								<div class="progress-bar-wrap">
									<div
										class="progress-bar"
										role="progressbar"
										aria-valuenow="90"
										style={{width: "90%"}}
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>

							<div class="progress">
								<span class="skill">
									DevOps (Docker, Kubernetes etc)<i class="val">60%</i>
								</span>
								<div class="progress-bar-wrap">
									<div
										class="progress-bar"
										role="progressbar"
										aria-valuenow="75"
										style={{width: "75%"}}
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>
						</div>

						<div class="col-lg-6">
							<div class="progress">
								<span class="skill">
									CI/CD (automation & pipelines) <i class="val">80%</i>
								</span>
								<div class="progress-bar-wrap">
									<div
										class="progress-bar"
										role="progressbar"
										aria-valuenow="80"
										style={{width: "80%"}}
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>

							<div class="progress">
								<span class="skill">
									Full Stack Development <i class="val">90%</i>
								</span>
								<div class="progress-bar-wrap">
									<div
										class="progress-bar"
										role="progressbar"
										aria-valuenow="90"
										style={{width: "90%"}}
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>

							<div class="progress">
								<span class="skill">
									Operations & support<i class="val">60%</i>
								</span>
								<div class="progress-bar-wrap">
									<div
										class="progress-bar"
										role="progressbar"
										aria-valuenow="55"
										style={{width: "55%"}}
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />

				<div class="interests container">
					<div class="section-title">
						<h2>Technical Skills</h2>
					</div>

					<div class="row">
						<div class="col-lg-3 col-md-4">
							<div class="icon-box">
								<i class="ri-store-line" style={{color: "#ffbb2c"}}></i>
								<h3>Javascript </h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4 mt-md-0">
							<div class="icon-box">
								<i class="ri-bar-chart-box-line" style={{color: "#5578ff"}}></i>
								<h3>Python</h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4 mt-md-0">
							<div class="icon-box">
								<i class="ri-calendar-todo-line" style={{color: "#e80368"}}></i>
								<h3>GoLang</h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
							<div class="icon-box">
								<i class="ri-paint-brush-line" style={{color: "#e361ff"}}></i>
								<h3>Java</h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-chat-download-fill" style={{color: "#47aeff"}}></i>
								<h3>API Development</h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-gradienter-line" style={{color: "#ffa76e"}}></i>
								<h3>Docker</h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-file-list-3-line" style={{color: "#11dbcf"}}></i>
								<h3>Kubernetes</h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-price-tag-2-line" style={{color: "#4233ff"}}></i>
								<h3>Terraform</h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-anchor-line" style={{color: "#FF5533"}}></i>
								<h3>Helm</h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-disc-line" style={{color: "#b20969"}}></i>
								<h3>ASP.NET (C#)</h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-base-station-line" style={{color: "#ff5828"}}></i>
								<h3>GraphQL</h3>
							</div>
						</div>

						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-cursor-fill" style={{color: "#29cc61"}}></i>
								<h3>WSO2</h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-cloud-fill" style={{color: "#FF9333"}}></i>
								<h3>AWS Cloud </h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-chat-check-fill" style={{color: "#33FFA8"}}></i>
								<h3>GCP Cloud</h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-cloud-windy-fill" style={{color: "#333FFF"}}></i>
								<h3>Azure </h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-china-railway-fill" style={{color: "#FFF033"}}></i>
								<h3>Kafka </h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-database-2-line" style={{color: "#29cc61"}}></i>
								<h3>PostgresDB</h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-database-fill" style={{color: "#3C33FF"}}></i>
								<h3>MySQL Server</h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-database-2-fill" style={{color: "#FFA533"}}></i>
								<h3>PHP</h3>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 mt-4">
							<div class="icon-box">
								<i class="ri-database-line" style={{color: "#FF5533"}}></i>
								<h3>MongoDB</h3>
							</div>
						</div>
					</div>
				</div>
			</div>

			<br />
			<br />
			<div id="experience" name="experience" class="resume">
				<div class="container">
					<div class="section-title">
						<h2>Work Experience </h2>
						<p>A Bit About My Experience so far </p>
					</div>

					<div class="row">
						<div class="col-lg-6">
							<h3 class="resume-title">Professional Experience</h3>
							<div class="resume-item pb-0">
								<h4>AWS Cloud Engineer/Associate Consultant</h4>
								<h5>May 2022 - Current</h5>
								<p>
									<b> Cognizant NZ </b>
								</p>
								<p>
									<em>
										<b> Client 1: Health Domain (Government) </b>
									</em>
								</p>
								<p>
									<em>
										Tech: API, Typescript, Gitlab pipelines, AWS Cloudformation, Lambda,
										API gateway
									</em>
								</p>
								<p>
									<em>
										Worked on orchestration project from group up planning where I coded a
										new set of APIs using AWS CloudFormation where all APIs are hosted on
										API gateway backed by individual AWS lambdas coded in Typescript to
										resolve integration issues between different health end systems. Also
										involved writing Gitlab pipelines using “.gitlab-ci.yaml” files to
										deploy the AWS infrastructure to different environments.
									</em>{" "}
								</p>
								<p>
									{" "}
									<em>
										Worked on AIR project in developing more APIs in the existing AWS
										infrastructure by writing the AWS Lambda functions in typescript to
										resolve integration issues between the different end systems.
									</em>
								</p>
								<p>
									<em>
										{" "}
										Working on the AIR NDCE project where the integration infrastructure
										and using CloudFormation included services like SQS queues, AWS
										EventBridge and internal lambda invocations coded in typescript to
										complete the flow and update the end system.
									</em>
								</p>

								<p>
									<em>
										{" "}
										Providing solutions within SLA as a 24/7 operations support engineer.
									</em>
								</p>

								<p>
									<em>
										<b> Client 2: Travel Domain </b>
									</em>
								</p>
								<p>
									<em>
										Tech: GoLang, GraphQL, Groovy, MariaDB, Postgres DB, AWS Services,
										Jenkins
									</em>
								</p>
								<p>
									<em>
										Working in a travel domain project where I do code improvements and
										bug fixes for the client using GoLang as the backend language along
										with integrating them with the APIs hosted on AWS API gateway extended
										by GraphQL to make them publicly available to be accessed by different
										websites at the same time.
									</em>
								</p>
								<p>
									<em>
										Building new infrastructure for new WordPress websites on AWS EKS and
										using Jenkins pipelines written in Groovy scripts to automate the
										build & deployment steps. Also, I have built the whole Kubernetes
										cluster infrastructure with the right configs backed by a Postgres DB
										running within the cluster.
									</em>
								</p>
								<p>
									<em>
										Overall, my role encompasses a blend of backend development,
										infrastructure management, and automation, all crucial components in
										delivering scalable and reliable solutions within the travel domain.
									</em>
								</p>
								<p>
									<em>
										<b> Client 3: Construction Domain</b>
									</em>
								</p>
								<p>
									<em>
										Tech: Javascript, Terraform, GCP services, Azure DevOps, HVR,
										BigQuery, Dbt
									</em>
								</p>
								<p>
									<em>
										Providing 24/7 Operations support & resolving major issues within SLA
										of the integration infrastructure deployed on the GCP platform with a
										combination of GCP services coded in NodeJS, deployment using Azure
										DevOps, implementation of services like GCP cloud runs, monitoring and
										bug fixes for GCP Kubernetes cluster along with Fivetran technologies
										like HVR.
									</em>
								</p>
							</div>

							<br />
							<br />
							<h3 class="resume-title">Education</h3>
							<div class="resume-item">
								<h4>Bachelors in Information Technology &amp; Software Development</h4>
								<h5>Nov 2016 - Nov 2019</h5>
								<p>
									<em>Auckland Institute of Studies, Auckland, NZ</em>
								</p>
								<p>
									Three years bachelors degree to study requirement gathering, data
									analysis, software development, testing and depoyment covering
									everything about the software development life cycle and best coding
									poractices.
								</p>
							</div>
							<div class="resume-item">
								<h4>High School &amp; Computers + Science</h4>
								<h5>2014 - 2016</h5>
								<p>
									<em>Ryan Internation School, Ghaziabad UP, India</em>
								</p>
								<p>
									High school where science comprised of Physics, Chemistry and Biology
									and computers included learning the basics of coding with C++
									programming language, along with how to build algorithms and write
									small functions and games like Tic-Tac-Toe.
								</p>
							</div>
						</div>
						<div class="col-lg-6">
							<h3 class="resume-title"></h3>
							<div class="resume-item">
								<h4>Integration Software Developer</h4>
								<h5>Nov 2020 - May 2022</h5>
								<p>
									<b>Integration Works </b>
								</p>
								<p>
									<em>
										Tech - NodeJS, Docker, Kubernetes, Kafka, GitLab, AWS, WSO2,
										Elasticsearch, Opsgenie
									</em>
								</p>
								<p>
									<em>
										Enhanced the integration infrastructure on AWS by implementing novel
										features using CloudFormation and NodeJS. Swiftly addressed real-time
										issues within SLAs utilizing AWS CloudWatch, alongside establishing
										comprehensive monitoring alarms and alerts for proactive management.
									</em>
								</p>
								<p>
									<em>
										Led the development, testing, and deployment of robust integration
										solutions tailored, leveraging the powerful capabilities of the WSO2
										platform.
									</em>
								</p>
								<p>
									<em>
										Served as a mentor to two interns, providing invaluable guidance
										throughout the entire client onboarding process, from development and
										testing to deployment, fostering their growth and skill development.
									</em>
								</p>
								<p>
									<em>
										Maintaining round-the-clock support as an Operations Engineer for
										diverse clients, ensuring prompt resolution of issues within SLAs,
										thereby mitigating any potential impact on users.
									</em>
								</p>
								<p>
									<em>
										Designed and implemented platform solutions to automate routine tasks,
										notably streamlining client onboarding processes through the strategic
										utilization of containerisation technologies such as Terraform,
										Docker, and Kubernetes. Established seamless deployment pipelines
										using GitLab, optimizing integration and efficiency across the board.
									</em>
								</p>
							</div>
							<div class="resume-item">
								<h4> Software Engineer</h4>
								<h5>Nov 2019 - April 2020</h5>
								<p>
									<em>Tech - ReactJS, AngularJS, Tableau</em>
								</p>
								<p>
									<em>
										Revised and optimized established software systems to bolster
										performance and incorporate innovative features. Collaborated closely
										with an agile development team to thoroughly test, refine, and deploy
										software applications built on the AngularJS framework, ensuring
										seamless functionality and user experience.
									</em>
								</p>
								<p>
									<em>
										Developed advanced React-based applications with intricate algorithms
										to analyze large datasets. Seamlessly integrated these applications
										with leading data analytics software like Tableau, extracting
										invaluable customer insights. This enhanced understanding and provided
										actionable intelligence for informed decision-making.
									</em>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<br />
			<br />
			<div id="projects" name="projects" class="portfolio">
				<div class="container">
					<div class="section-title">
						<h2>Portfolio</h2>
						<p>My Client Projects</p>
					</div>

					<div class="row">
						<div class="col-lg-12 d-flex justify-content-center">
							<ul id="portfolio-flters">
								<li data-filter="*" class="filter-active">
									All
								</li>
								<li data-filter=".filter-web">Website</li>

								<li data-filter=".filter-app">App</li>
							</ul>
						</div>
					</div>

					<div class="row portfolio-container">
						<div class="col-lg-4 col-md-6 portfolio-item filter-web">
							<div class="portfolio-wrap">
								<img
									src="assets/img/portfolio/Tradies.png"
									style={{width: "800px", height: "300px"}}
									class="img-fluid"
									alt=""
								/>
								<div class="portfolio-info">
									<h4>Euro Painters - Tradies </h4>
									<p>Website</p>

									<div class="portfolio-links">
										<a href="/euroPaintersProject">
											<i class="bx bx-info-circle"></i>
										</a>

										<a
											href="https://europainters.online/"
											data-gallery="portfolioDetailsGallery"
											data-glightbox="type: external"
											class="portfolio-details-lightbox"
											title="Portfolio Details"
										>
											<i class="bx bx-link"></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 portfolio-item filter-web">
							<div class="portfolio-wrap">
								<img
									src="assets/img/portfolio/Cleaning.png"
									style={{width: "800px", height: "300px"}}
									class="img-fluid"
									alt=""
								/>
								<div class="portfolio-info">
									<h4>Cleaning Company</h4>
									<p>Website</p>
									<div class="portfolio-links">
										<a href="/cleaningProject">
											<i class="bx bx-info-circle"></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 portfolio-item filter-web">
							<div class="portfolio-wrap">
								<img
									src="assets/img/portfolio/img2.jpeg"
									style={{width: "800px", height: "300px"}}
									class="img-fluid"
									alt=""
								/>
								<div class="portfolio-info">
									<h4>Kiwinuts (IT Consultancy Company)</h4>
									<p>Website</p>
									<div class="portfolio-links">
										<a href="/kiwinutsProject">
											<i class="bx bx-info-circle"></i>
										</a>
										<a
											href="https://kiwinuts.com/"
											data-gallery="portfolioDetailsGallery"
											data-glightbox="type: external"
											class="portfolio-details-lightbox"
											title="Portfolio Details"
										>
											<i class="bx bx-link"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="row portfolio-container">
						<div class="col-lg-4 col-md-6 portfolio-item filter-web">
							<div class="portfolio-wrap">
								<img
									src="assets/img/portfolio/carrentals.jpg"
									style={{width: "800px", height: "300px"}}
									class="img-fluid"
									alt=""
								/>
								<div class="portfolio-info">
									<h4>Queenstown Car Rentals </h4>
									<p>Website</p>

									<div class="portfolio-links">
										<a href="/queenstownProject">
											<i class="bx bx-info-circle"></i>
										</a>

										<a
											href="https://queenstowncarrental.nz/"
											data-gallery="portfolioDetailsGallery"
											data-glightbox="type: external"
											class="portfolio-details-lightbox"
											title="Portfolio Details"
										>
											<i class="bx bx-link"></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 portfolio-item filter-web">
							<div class="portfolio-wrap">
								<img
									src="assets/img/portfolio/buildings.jpg"
									style={{width: "800px", height: "300px"}}
									class="img-fluid"
									alt=""
								/>
								<div class="portfolio-info">
									<h4>Active Buidling Management</h4>
									<p>Website</p>
									<div class="portfolio-links">
										<a href="/buildingProject">
											<i class="bx bx-info-circle"></i>
										</a>
										<a
											href="https://buildingmanagers.co.nz/"
											data-gallery="portfolioDetailsGallery"
											data-glightbox="type: external"
											class="portfolio-details-lightbox"
											title="Portfolio Details"
										>
											<i class="bx bx-link"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<br />
			<br />
			<div id="journal-blog" class="text-left  paddsections">
				<div class="container">
					<div class="section-title text-left">
						<h2>Blog</h2>
						<p> My Blog Journals</p>
					</div>
				</div>

				<div class="container">
					<div class="journal-block">
						<div class="row">
							<div class="col-lg-4 col-md-6">
								<div class="journal-info mb-30 text-center">
									<a href="https://medium.com/@aasthagoyal/how-to-create-a-lambda-that-transfers-files-from-sftp-server-to-s3-bucket-7adea46f9e05">
										<img
											src="assets/img/portfolio/article1.png"
											class="img-responsive"
											style={{height: "300px"}}
											alt="img"
										/>
									</a>
									<div class="journal-txt">
										<br />
										<h5>AWS Lambda to Transfer files from SFTP to S3 Bucket</h5>
										<br />
										<a href="https://medium.com/@aasthagoyal/how-to-create-a-lambda-that-transfers-files-from-sftp-server-to-s3-bucket-7adea46f9e05">
											<button type="submit" class="readmore-btn">
												Read More...
											</button>
										</a>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6">
								<div class="journal-info mb-30 text-center">
									<a href="https://medium.com/@aasthagoyal/api-development-on-aws-using-api-gateway-and-lambda-functions-12a28d378c18">
										<img
											src="assets/img/portfolio/trial.png"
											class="img-responsive"
											style={{height: "300px"}}
											alt="img"
										/>
									</a>
									<div class="journal-txt">
										<br />
										<h5>API Development on AWS</h5>
										<br />
										<br />
										<a href="https://medium.com/@aasthagoyal/api-development-on-aws-using-api-gateway-and-lambda-functions-12a28d378c18">
											<button type="submit" class="readmore-btn">
												Read More...
											</button>
										</a>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-6">
								<div class="journal-info mb-30 text-center">
									<a href="https://medium.com/@aasthagoyal/aws-step-functions-and-how-to-use-them-5859012bac25">
										<img
											src="assets/img/portfolio/functions.png"
											class="img-responsive"
											style={{height: "300px"}}
											alt="img"
										/>
									</a>
									<div class="journal-txt">
										<br />
										<h5>AWS Step Functions</h5>
										<br />
										<br />
										<a href="https://medium.com/@aasthagoyal/aws-step-functions-and-how-to-use-them-5859012bac25">
											<button type="submit" class="readmore-btn">
												Read More...
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>

						<br />
						<br />
						<div class="row">
							<div class="col-lg-4 col-md-6">
								<div class="journal-info mb-30 text-center">
									<a href="https://medium.com/@aasthagoyal/automated-deployment-by-building-pipelines-on-gitlab-7f1decd05084">
										<img
											src="assets/img/portfolio/third.png"
											class="img-responsive"
											style={{height: "300px"}}
											alt="img"
										/>
									</a>
									<div class="journal-txt">
										<br />
										<h5>Automated deployment by building Pipelines on Gitlab</h5>
										<br />
										<a href="https://medium.com/@aasthagoyal/automated-deployment-by-building-pipelines-on-gitlab-7f1decd05084">
											<button type="submit" class="readmore-btn">
												Read More...
											</button>
										</a>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6">
								<div class="journal-info mb-30 text-center">
									<a href="https://medium.com/@aasthagoyal/installing-elk-stack-as-a-service-from-scratch-and-run-as-https-5fb04214e5aa">
										<img
											src="assets/img/portfolio/elastic.png"
											class="img-responsive blog-images"
											alt="img"
										/>
									</a>

									<div class="journal-txt">
										<br />
										<h5>Install ELK stack from scratch</h5>
										<br />
										<br />
										<a href="https://medium.com/@aasthagoyal/installing-elk-stack-as-a-service-from-scratch-and-run-as-https-5fb04214e5aa">
											<button type="submit" class="readmore-btn">
												Read More...
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />

			<div id="contact" class="contact">
				<div class="container">
					<div class="section-title">
						<h2>Contact</h2>
						<p>Contact Me</p>
					</div>

					<div class="row mt-2">
						<div class="col-md-6 d-flex align-items-stretch">
							<div class="info-box">
								<i class="bx bx-map"></i>
								<h3>Based In</h3>
								<p>Remeura, Auckland, NZ</p>
							</div>
						</div>

						<div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
							<div class="info-box">
								<i class="bx bx-share-alt"></i>
								<h3>Social Profiles</h3>
								<div class="social-links">
									<a href="https://github.com/AasthaGoyal" class="twitter">
										<i class="bi bi-github"></i>
									</a>
									<a href="https://medium.com/@aasthagoyal" class="facebook">
										<i class="bi bi-medium"></i>
									</a>

									<a href=" https://www.linkedin.com/in/goyal-aastha/" class="linkedin">
										<i class="bi bi-linkedin"></i>
									</a>
								</div>
							</div>
						</div>

						<div class="col-md-6 mt-4 d-flex align-items-stretch">
							<div class="info-box">
								<i class="bx bx-envelope"></i>
								<h3>Email Me</h3>
								<p>aastha2150@gmail.com</p>
							</div>
						</div>
						<div class="col-md-6 mt-4 d-flex align-items-stretch">
							<div class="info-box">
								<i class="bx bx-phone-call"></i>
								<h3>Call Me</h3>
								<p>+64 021 08623321</p>
							</div>
						</div>
					</div>

					<form onSubmit={sendEmail} class="php-email-form mt-4">
						<div class="row">
							<div class="col-md-6 form-group">
								<input
									type="text"
									name="name"
									class="form-control"
									id="name"
									placeholder="Your Name"
									required
								/>
							</div>
							<div class="col-md-6 form-group mt-3 mt-md-0">
								<input
									type="email"
									class="form-control"
									name="email"
									id="email"
									placeholder="Your Email"
									required
								/>
							</div>
						</div>
						<div class="form-group mt-3">
							<input
								type="text"
								class="form-control"
								name="subject"
								id="subject"
								placeholder="Subject"
								required
							/>
						</div>
						<div class="form-group mt-3">
							<textarea
								class="form-control"
								name="message"
								rows="5"
								placeholder="Message"
								required
							></textarea>
						</div>
						<div class="my-3">
							<div class="loading">Loading</div>
							<div class="error-message"></div>
							<div class="sent-message">Your message has been sent. Thank you!</div>
						</div>
						<div class="text-center">
							<button type="submit">Send Message</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Home;
