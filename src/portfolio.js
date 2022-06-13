const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};
//SEO Related settings
const seo = {
  title: "Shylaja Venkatesha | Portfolio",
  description:
    "A Passionate Quality Analyst With Over 9 Years Of Experience.Experienced With All Stages Of Testing Cycle In Agile methodology",
  og: {
    title: "Shylaja Venkatesha",
    type: "website",
    url: "http://shylajav.ml/",
  },
};

//Home Page
const greeting = {
  title: "Hello!",
  sub: "Shylaja Venkatesha",
  logo_name: "Shylaja Venkatesha",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#1179f7",
      },
      profileLink: "https://github.com/Sureshtr1998",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/suresh-tr-15b729147/",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Software Test Analyst",
      fileName: "FullStackImg",
      skills: [
        "⚡ Analyzing the given requirement from the clients",
        "⚡ Having experience in prepartion of test cases and test scenarios",
        "⚡ Preparing the data for test execution",
        "⚡ Good hands-on with various defect management tools ",
      ],
      softwareSkills: [
        {
          skillName: "JIRA",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0096FF",
          },
        },
        {
          skillName: "Splunk",
          fontAwesomeClassname: "simple-icons:splunk",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "fa-file-excel-o",
          style: {
            color: "#50C878",
          },
        },
      ],
    },
    {
      title: "Automation QA",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience in writing Selenium Test scripts using Java",
        "⚡ Having Hands-on experience in Hybrid framework with TestNG",
        "⚡ Experience in Cucumber BDD Framework with Junit",
        "⚡ Having hands on with Eclipse IDE",
      ],
      softwareSkills: [
        {
          skillName: "Selenium",
          fontAwesomeClassname: "simple-icons:selenium",
          style: {
            backgroundColor: "transparent",
            color: "#228B22",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#CC5500",
          },
        },
        // {
        //   skillName: "Eclipse",
        //   fontAwesomeClassname: "simple-icons:eclipse",
        //   style: {
        //     color: "#CC5500",
        //   },
        // },
        {
          skillName: "Cucumber",
          fontAwesomeClassname: "simple-icons:cucumber",
          style: {
            backgroundColor: "transparent",
            color: "#228B22",
          },
        },
      ],
    },
    {
      title: "Functional Tester",
      fileName: "DesignImg",
      skills: [
        "⚡ Experience in testing various applications like E-commerce, Telecom, Insurance Web Applications",
        "⚡ Hands-on using SAP Hybris, Back Office, HAC and Smart Edit etc",
        "⚡ Using Postman for API testing along with SQL for validations",
        "⚡ Experience in Testing Application on linux systems ",
      ],
      softwareSkills: [
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "SAP Hybris",
          fontAwesomeClassname: "simple-icons:sap",
          style: {
            color: "#0096FF",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#BDB76B",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "fa-database",
          style: {
            color: "#0096FF",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I ensure that the delivered code is working as per the business requirements.",
};

const educationCards = {
  info: [
    {
      title: "SSLC",
      img_path: "rv.png",
      name: "Rashtreeya Vidyalaya",
      percentage: "92.16%",
      total: "625",
      scored: "575",
      description:
        "Qualified SSLC from Rashtreeya Vidyalaya(Bangalore) on 6th of May 2006 by the board Karnataka Secondary Education Examination Board (KSEEB)",
    },
    {
      title: "PUC",
      img_path: "vijaya.png",
      name: "Vijaya PU College",
      percentage: "87.33%",
      total: "600",
      scored: "524",
      description:
        "Completed 2nd PU from Vijaya PU College (Bangalore) on 10th of March 2008 by the university Department Of PRE-University Education",
    },
    {
      title: "Degree",
      img_path: "sjbit.png",
      name: "SJBIT",
      percentage: "78.36%",
      total: "3450",
      scored: "2557",
      description:
        "Graduated from SJB Institute of Technology (Bangalore) on 14th of July 2012 which is affiliated to Visvesvaraya Technological University (VTU)",
    },
    //   {
    //   title: "Masters",
    //   img_path: "bits.png",
    //   name: 'BITS PILANI',
    //   percentage: "8.29 CGPA",
    //   total:"",
    //   scored:"",
    //   description: "Masters in Mtech from BITS Pilani University through Wipro Work Integrated Learning Program(WILP) graduated on 22nd of Nov 2022",
    // },
  ],
};

const projects = {
  details: [
    {
      name: "Arco",
      img_path: "ecomm1.png",
      title: "E Commerce",
      description:
        "B2B application which deals with selling safety equipment used in construction sites. I was majorly testing the web interface as per the user stories and configuring test data using Hybris Back office.",
    },
    {
      name: "Amex",
      img_path: "credit.png",
      title: "Amex Credit Card",
      description:
        "It consisted of Enhancement and support of all the applications related to credit cards of Amex Bank.I used to frequently pull data using SQL queries and monitor the Jobs which would process the dispute cases.",
    },
    {
      name: "SAP",
      img_path: "ecomm2.png",
      title: "E Commerce",
      description:
        "E-commerce website providing VIP Hospitality packages to famous sports and entertainment events. I performed End to End testing on functionalities like Homepage, login, PLP, PDP, cart and checkout.",
    },
    {
      name: "AT&T",
      img_path: "telecom.png",
      title: "Telecom",
      description:
        "It is mainly associated with the development of functionalities of Billing section of AT&T telecom network. I used to perform Test Planning and test execution.",
    },
    {
      name: "Shop Direct",
      img_path: "ecomm3.png",
      title: "E Commerce",
      description:
        "This E-commerce site is one of the United Kingdom's leading online retailers. I majorly tested Payment functionality which included validation of interest calculations in backend.",
    },
    {
      name: "Cardinal Health",
      img_path: "insurance.png",
      title: "Insurance",
      description:
        "It is an American multinational health care services company which focuses on patient health care while reducing costs. I tested business processes and order fulfilment journey in this project.",
    },
    {
      name: "Shoppers Stop Limited",
      img_path: "ecomm5.png",
      title: "E Commerce",
      description:
        "Shoppers stop Limited is an ecommerce based web application built on SAP Hybris backend. I have automated the order placement journey and other regression scenarios using Selenium. I also was the SME while working here.",
    },
  ],
};
//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]

//certificate cards
const certifications = {
  certifications: [
    {
      title: "SAP Ariba Procurement",
      subtitle: "SAP Ariba",
      logo_path: "sap.png",
      certificate_link: "https://www.youracclaim.com/go/McmClI1H",
      alt_name: "SAP Ariba",
      color_code: "#000000",
    },
    {
      title: "MERN E commerce",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://wipro.udemy.com/certificate/UC-ed5a2e5b-1eb6-4c51-af20-afa7cdb70ad3/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "C Programming",
      subtitle: "NIIT",
      logo_path: "NIIT.png",
      certificate_img: "c.png",
      alt_name: "NIIT",
      color_code: "#000000",
    },
    {
      title: "Python",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://wipro.udemy.com/certificate/UC-102269e7-5e67-401a-93b6-ab2d4da5dc48/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Complete Web Development Bootcamp",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://wipro.udemy.com/certificate/UC-66cb598a-5f08-47ff-9a4a-42dd6dcc46b5/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Java",
      subtitle: "Aptech",
      logo_path: "Aptech.png",
      certificate_img: "java.png",
      alt_name: "Aptech",
      color_code: "#000000",
    },
    {
      title: "SVG Animation",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://wipro.udemy.com/certificate/UC-cb39e08d-5169-43f9-b3a7-8f64211db74d/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Front End Development(React JS)",
      subtitle: "Wipro",
      logo_path: "wipro.png",
      certificate_img: "FED.png",
      alt_name: "Wipro",
      color_code: "#000000",
    },
    {
      title: "Vue JS",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://wipro.udemy.com/certificate/UC-d42a0a59-3469-4f34-8feb-b10598f8b0e8/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "C++ Programming",
      subtitle: "NIIT",
      logo_path: "NIIT.png",
      certificate_img: "cpp.png",
      alt_name: "NIIT",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Test Planning, System Testing and Regression Testing etc",
  },
  addressSection: {
    title: "Address",
    subtitle: "Toranto, Canada",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9738 583 763",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Sureshtr1998",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#1179f7", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/suresh-tr-15b729147/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:rsureshtr22i0@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  certifications,
  educationCards,
  projects,
};
