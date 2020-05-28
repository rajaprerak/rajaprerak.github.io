/* Change this file to get your personal Porfolio */

const theme = {
  primaryTheme: "#6C63FF",
  secondaryTheme: "#55198b",
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
};

const greeting = {
	/* Your Summary And Greeting Section */
	//title: "Hi all 👋 I'm Saad",
	title: "Prerak Raja",
	// nickname: "Developer",
	// subTitle:
	//   "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks",
	subTitle:
		"Coder, Developer, Artificial Intelligence Enthusiast",
	resumeLink:
		"https://drive.google.com/file/d/1JqG39DM4v53NbmVZ0ZcfM66iJppa2pYE/view?usp=sharing"
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/rajaprerak",
	linkedin: "https://www.linkedin.com/in/rajaprerak/",
	gmail: "rajaprerak@gmail.com",
	instagram: "https://www.instagram.com/rajaprerak/"
};

const skills = {
  data: [
    {
      title: "Data Science & AI",
      imagePath: "data_science.svg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        }
      ]
    },
    {
      title: "Backend Development",
      imagePath: "fullstack.svg",
      skills: [
        "⚡ Creating application backend in Django & Flask"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB"
          }
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399"
          }
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B"
          }
        }
      ]
    },
    {
      title: "Cloud Infra-Architecture",
      imagePath: "cloud_infrastructure.svg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          }
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900"
          }
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6"
          }
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28"
          }
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791"
          }
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248"
          }
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6"
          }
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5"
          }
        }
      ]
    }
  ]
};

const degrees = {
  degrees : [
    {
      title: "Ahmedabad University",
      subtitle: "B.Tech. in Information and Communication Technology",
      logo_path: "AU.jpg",
      alt_name: "AU",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, etc.",
        "⚡ Apart from this, I have done courses on Machine Learning, Computer Vision, Big Data Optimization.",
      ],
      website_link: "https://ahduni.edu.in/"
    }
  ]
}

const certifications = {
	certifications: [
		{
			title: "Machine Learning",
			subtitle: "- Andrew Ng",
			logo_path: "stanford_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/2BTJ636Q2E93?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate/",
			alt_name: "Stanford University",
			color_code: "#8C151599"
		},
		{
			title: "Neural Networks and Deep Learning",
			subtitle: "- Andrew Ng",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/ELXZ6FE2BU7X?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate/",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},
		{
			title: "Algorithm: Design and Analysis",
			subtitle: "- Stanford University",
			logo_path: "stanford_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/6THRQXYE9EHZ?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate",
			alt_name: "Google",
			color_code: "#0C9D5899"
		},
		{
			title: "Algorithmic Toolbox",
			subtitle: "- UC San Diego",
			logo_path: "UCSD_logo.png",
			certificate_link:
				"https://coursera.org/share/98bbfb990484fac370d5e5ed14334ea4",
			alt_name: "UCSD",
			color_code: "#FFFFFF"
		},
		{
			title: "Machine Learning with Python",
			subtitle: "- IBM",
			logo_path: "ibm_logo.png",
			certificate_link:
				"https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
			alt_name: "Microsoft",
			color_code: "#1F70C199"
		},
		{
			title: "Deep Learning with Tensorflow",
			subtitle: "- IBM",
			logo_path: "ibm_logo.png",
			certificate_link:
				"https://drive.google.com/file/d/1FSwPt19EzY_tpvqkE6igtLf3gccKcssC/view?usp=sharing",
			alt_name: "IBM",
			color_code: "#1F70C199"
		}		
	]
};


export {
	theme,
	greeting,
	socialMediaLinks,
	skills,
	degrees,
	certifications,
};
