import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
// import experience from '../../shared/experience_data.json';
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
	title: "Experience",
	subtitle: "Work, Internship and Volunteership",
	description:
		"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
					title: "AI Developer",
					company: "Meditab Software Pvt. Ltd.",
					company_url: "https://www.meditab.com/",
					logo_path: "Meditab.jpg",
					duration: "May 2018 - Present",
					location: "Ahmedabad, India",
					description:
						"Developed and implemented algorithm for detection and classification problem using deep learning algorithms. Designed pipeline of the whole project to get it incorporated in the product of the company. Created visualization tool for the project which gives the detailed outcome of error analysis. Implemented multiprocessing pipeline between different modules which efficiently reduced the memory consumption and improved processing speed.",
					color: "#9b1578"
				}
			]
		},
		{
			title: "Internships",
			experiences: [
				{
					title: "Research Intern",
					company: "Space Application Centre, ISRO",
					company_url: "https://www.sac.gov.in/Vyom/index.jsp",
					logo_path: "ISRO.jpg",
					duration: "Jan 2018 - May 2018",
					location: "Ahmedabad, India",
					description:
						"Worked on the noise removal from satellite image using image processing and computer vision techniques. Implemented architecture for detecting objects in high resolution satellite image using deep learning algorithms.",
					color: "#ee3c26"
				}
			]
		}
	]
};

class Experience extends Component {
	render() {
		return (
			<div className="experience-main">
				<Header />
				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
								    alt=""
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience.title}</h1>
								<h3 className="experience-heading-sub-text">
									{experience["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{experience["description"]}
								</p>
							</div>
						</div>
					</Fade>
				</div>
				<ExperienceAccordion sections={experience["sections"]} />
				<Footer />
			</div>
		);
	}
}

export default Experience;
