const LifeTrackr = {
  base: {
    projectName: "LifeTrackr",
    platform: "Mobile App",
    caseName: "Front-end & UI/UX Case",
    btnIcon: <i className="bx bx-spa" />,
    date: "01/2022 - 04/2022",
  },

  overview: {
    description: (
      <p className="popup__description">
        A cross-platform mobile app created using the <span>React Native</span>{" "}
        framework. <br />
        The goal of the app is to aid in the process of taking care of plants
        and animals, making it an ideal app for pet owners and gardeners.
      </p>
    ),
    functionality: [
      <p className="popup__features--item">
        <span>User authentication:</span> Users can sign up and sign in using
        their email and password. User authentication is securely provided by
        JSON WEB Tokens. The API was coded in Python.
      </p>,
      <p className="popup__features--item">
        <span>Add companions:</span> Users can add companions such as pets or
        plants by providing their names, related notes, and companion types.
        There are five available companion types in the app: dog, cat, reptile,
        plant, and bird.
      </p>,
      <p className="popup__features--item">
        <span>Set reminders:</span> Users can link reminders to each companion
        by specifying the name, frequency, and reminder type and get timely
        notifications. Reminder types change depending on the companion.
      </p>,
    ],
  },

  techStack: [
    {
      iconFront: (
        <i className="fa-brands fa-react fa-sm" style={{ color: "#2A9EBE" }} />
      ),
      nameFront: "React Native",
      iconBack: <i className="bx bx-devices" style={{ color: "#719C82" }} />,
      nameBack: "Cross-Platform App",
    },

    {
      nameFront: "REST API",
      nameBack: "JWT Auth",
      iconFront: <i className="bx bx-cloud" style={{ color: "#17CC8B" }} />,
      iconBack: <i className="bx bx-lock-alt" style={{ color: "#719C82" }} />,
    },

    {
      nameFront: "Redux Saga",
      nameBack: "AJAX HTTP Requests",
      iconFront: <i className="bx bxl-redux" style={{ color: "#04C3FF" }} />,
      iconBack: (
        <i
          className="fa-regular fa-group-arrows-rotate fa-xs"
          style={{ color: "#719C82" }}
        />
      ),
    },

    {
      nameFront: "AWS",
      nameBack: "Responsive Design",
      iconFront: (
        <i className="fa-brands fa-aws fa-xs" style={{ color: "#3044AA" }} />
      ),
      iconBack: (
        <i
          className="fa-solid fa-laptop-code fa-xs"
          style={{ color: "#719C82" }}
        />
      ),
    },

    {
      iconFront: (
        <i className="fa-brands fa-figma fa-sm" style={{ color: "#A303DC" }} />
      ),
      nameFront: "Figma",
      iconBack: (
        <i
          className="fa-regular fa-wand-magic-sparkles fa-xs"
          style={{ color: "#719C82" }}
        />
      ),
      nameBack: "Neomorphic UI Style",
    },
  ],
};

const Outdoors = {
  base: {
    projectName: "Outdoors",
    platform: "Web App",
    caseName: "Front-end & UI/UX Case",
    btnIcon: <i className="fa-solid fa-suitcase-rolling fa-sm" />,
    date: "10/2022 - 11/2022",
  },

  overview: {
    description: (
      <p className="popup__description">
        This project is a UI/UX web application developed using
        <span> React JS and SCSS </span>. The main objective of this project is
        to create a visually appealing and user-friendly interface for the web
        application.
      </p>
    ),
    functionality: [
      <p className="popup__features--item">
        <span>Animation effects:</span> The project showcases various animation
        effects on website components, providing an engaging user experience.
      </p>,
      <p className="popup__features--item">
        <span>Responsive design:</span> The app has been designed to work
        seamlessly on mobile and desktop devices, providing a consistent user
        experience across all devices. <br />
      </p>,
      <p className="popup__features--item">
        <span>Simple UI:</span> The project has a simple user interface that
        makes it easy for users to navigate and interact with the app. <br />
      </p>,
    ],
  },

  techStack: [
    {
      nameFront: "React JS",
      nameBack: "Pure CSS Animations",
      iconFront: (
        <i className="fa-brands fa-react fa-sm" style={{ color: "blue" }} />
      ),
      iconBack: (
        <i
          className="fa-solid fa-photo-film fa-xs"
          style={{ color: "#719C82" }}
        />
      ),
    },
    {
      nameFront: "HTML5",
      nameBack: "Custom Components",
      iconFront: (
        <i className="fa-brands fa-html5 fa-sm" style={{ color: "#f06529" }} />
      ),

      iconBack: (
        <i className="fa-solid fa-sitemap fa-xs" style={{ color: "#719C82" }} />
      ),
    },
    {
      nameBack: "Responsive Design",
      nameFront: "SASS",
      iconFront: (
        <i className="fa-brands fa-sass fa-xs" style={{ color: "#CD6799" }} />
      ),

      iconBack: (
        <i
          className="fa-solid fa-laptop-code fa-xs"
          style={{ color: "#719C82" }}
        />
      ),
    },
    {
      nameFront: "Figma",
      nameBack: "Fast Loading Speed",
      iconFront: (
        <i className="fa-brands fa-figma fa-sm" style={{ color: "#A303DC" }} />
      ),

      iconBack: <i className="bx bx-timer" style={{ color: "#719C82" }} />,
    },
    {
      nameFront: "REST API",
      nameBack: "Friendly UI/UX",
      iconFront: <i className="bx bx-cloud" style={{ color: "#17CC8B" }} />,
      iconBack: (
        <i className="fa-solid fa-glasses fa-xs" style={{ color: "#719C82" }} />
      ),
    },
  ],
};

const EthWallet = {
  base: {
    projectName: "ETH Wallet",
    platform: "Web App",
    caseName: "Front-End & UI/UX Case",
    btnIcon: <i className="fa-brands fa-ethereum fa-sm" />,
    date: "01/2022 - 04/2022",
  },

  overview: {
    description: (
      <p className="popup__description">
        A development and UI/UX concept of a web ETH wallet developed with{" "}
        <span>ReactJS</span>. The project involves the creation of a
        user-friendly and visually appealing interface for managing and
        accessing Ethereum transactions.
      </p>
    ),
    functionality: [
      <p className="popup__features--item">
        <span>User authentication:</span> The project uses Firebase
        authentication by email, providing secure access to the wallet.
      </p>,
      <p className="popup__features--item">
        <span>Responsive design:</span> The app has been designed to work
        seamlessly on mobile and desktop devices, providing a consistent user
        experience across all devices.
      </p>,
      <p className="popup__features--item">
        <span>Simple UI:</span> The project has a simple and intuitive user
        interface that makes it easy for users to navigate and interact with the
        wallet.
      </p>,
    ],
  },

  techStack: [
    {
      nameFront: "React JS",
      nameBack: "Responsive Design",
      iconFront: (
        <i className="fa-brands fa-react fa-sm" style={{ color: "blue" }} />
      ),
      iconBack: (
        <i
          className="fa-solid fa-laptop-code fa-xs"
          style={{ color: "#719C82" }}
        />
      ),
    },
    {
      nameFront: "HTML5",
      nameBack: "Firebase Auth",
      iconFront: (
        <i className="fa-brands fa-html5 fa-sm" style={{ color: "#f06529" }} />
      ),

      iconBack: <i className="bx bx-lock-alt" style={{ color: "#719C82" }} />,
    },
    {
      nameFront: "Styled-Components",
      nameBack: "Cloud Database",
      iconFront: <i className="bx bxl-sass" style={{ color: "#CD6773" }} />,
      iconBack: <i className="bx bx-cloud" style={{ color: "#719C82" }} />,
    },
    {
      nameFront: "Firebase",
      nameBack: "Custom Components",
      iconFront: <i className="bx bxl-firebase" style={{ color: "#CD6773" }} />,
      iconBack: (
        <i className="fa-solid fa-sitemap fa-xs" style={{ color: "#719C82" }} />
      ),
    },
    {
      nameFront: "Figma",
      nameBack: "Cyber UI Style",
      iconFront: (
        <i className="fa-brands fa-figma fa-sm" style={{ color: "#A303DC" }} />
      ),

      iconBack: (
        <i
          className="fa-regular fa-wand-magic-sparkles fa-xs"
          style={{ color: "#719C82" }}
        />
      ),
    },
  ],
};

const WorkFlow = {
  base: {
    projectName: "WorkFlow",
    platform: "Mobile APP",
    caseName: "Full Stack & UI/UX Case",
    date: "09/2021 - 12/2021",
    btnIcon: <i className="fa-regular fa-handshake fa-sm" />,
  },
  overview: {
    description: (
      <p className="popup__description">
        Task Manager is an enhanced task manager built with{" "}
        <span>React Native and Expo</span> frameworks. The app can be used both
        as a personal and a company's task manager. The main goal of this
        project is to offer abilities to chat, to share projects and tasks with
        your friends or colleagues
      </p>
    ),
    functionality: [
      <p className="popup__features--item">
        <span>User authentication:</span> The app uses Firebase authentication
        by email to provide secure access to the task manager.
      </p>,
      <p className="popup__features--item">
        <span>Cloud database:</span> The app uses Firebase cloud database to
        store users, shared and individual projects and tasks, ensuring data
        security and accessibility.
      </p>,
      <p className="popup__features--item">
        <span>Chatting:</span> The app provides real-time chatting functionality
        using Firebase real-time database, enabling users to communicate with
        each other seamlessly.
      </p>,
      <p className="popup__features--item">
        <span>Enhanced task management:</span>The app offers enhanced task
        management features, such as sharing tasks and projects with colleagues,
        assigning tasks, setting deadlines, and more.
      </p>,
    ],
  },

  techStack: [
    {
      nameFront: "React Native",
      nameBack: "Cloud Database",
      iconFront: (
        <i className="fa-brands fa-react fa-sm" style={{ color: "#2A9EBE" }} />
      ),
      iconBack: <i className="bx bx-cloud" style={{ color: "#719C82" }} />,
    },
    {
      nameFront: "Firebase",
      nameBack: "Interactive UI/UX",
      iconFront: <i className="bx bxl-firebase" style={{ color: "#FFA000" }} />,

      iconBack: (
        <i className="fa-solid fa-glasses fa-xs" style={{ color: "#719C82" }} />
      ),
    },
    {
      nameFront: "Redux Thunk",
      nameBack: "Firebase Auth",
      iconFront: <i className="bx bxl-redux" style={{ color: "#04C3FF" }} />,
      iconBack: <i className="bx bx-lock-alt" style={{ color: "#719C82" }} />,
    },
    {
      nameFront: "Figma",
      nameBack: "AJAX HTTP Requests",
      iconFront: (
        <i className="fa-brands fa-figma fa-sm" style={{ color: "#A303DC" }} />
      ),
      iconBack: (
        <i
          className="fa-regular fa-group-arrows-rotate fa-xs"
          style={{ color: "#719C82" }}
        />
      ),
    },
    {
      nameFront: "Expo",
      nameBack: "Cross-Platform App",
      iconFront: (
        <i
          className="fa-solid fa-v fa-sm fa-rotate-180"
          style={{ color: "#0E1126" }}
        />
      ),
      iconBack: <i className="bx bx-devices" style={{ color: "#719C82" }} />,
    },
  ],
};

const Portfolio = {
  base: {
    projectName: "Portfolio",
    platform: "Web App",
    caseName: "Front-end & UI/UX Case",
    btnIcon: <i className="fa-solid fa-award fa-sm" />,
    date: "01/2023 - 02/2023",
  },

  overview: {
    description: (
      <p className="popup__description">
        Welcome to my personal portfolio, where you can explore my career
        experience and the projects that I have worked on. This web portfolio is
        built using <span>React JS and SCSS</span>, and features custom
        components and sleek animations in a neumorphic UI/UX style.
      </p>
    ),
    functionality: [
      <p className="popup__features--item">
        <span> Custom Components & Animations:</span> The website showcases my
        skills and creativity through custom-designed components and smooth
        animations.
      </p>,
      <p className="popup__features--item">
        <span>Neumorphic UI/UX Style</span> The neumorphic design style gives
        the portfolio a modern and professional look.
      </p>,
      <p className="popup__features--item">
        <span>Responsive Design</span> The portfolio is optimized for various
        devices and screen sizes to ensure a seamless experience for all
        visitors.
      </p>,
    ],
  },

  techStack: [
    {
      nameFront: "React JS",
      nameBack: "Responsive Design",
      iconFront: (
        <i className="fa-brands fa-react fa-sm" style={{ color: "blue" }} />
      ),
      iconBack: (
        <i
          className="fa-solid fa-laptop-code fa-xs"
          style={{ color: "#719C82" }}
        />
      ),
    },
    {
      nameFront: "HTML5",
      nameBack: "Neomorphic UI Style",
      iconFront: (
        <i className="fa-brands fa-html5 fa-sm" style={{ color: "#f06529" }} />
      ),

      iconBack: (
        <i
          className="fa-regular fa-wand-magic-sparkles fa-xs"
          style={{ color: "#719C82" }}
        />
      ),
    },
    {
      nameFront: "SASS",
      nameBack: "Dark & Light Themes",
      iconFront: (
        <i className="fa-brands fa-sass fa-xs" style={{ color: "#CD6799" }} />
      ),

      iconBack: (
        <i
          className="fa-solid fa-circle-half-stroke fa-xs"
          style={{ color: "#719C82" }}
        />
      ),
    },
    {
      nameFront: "Figma",
      nameBack: "Fast Loading Speed",
      iconFront: (
        <i className="fa-brands fa-figma fa-sm" style={{ color: "#A303DC" }} />
      ),

      iconBack: <i className="bx bx-timer" style={{ color: "#719C82" }} />,
    },
    {
      nameFront: "REST API",
      nameBack: "Fast Loading Speed",
      iconFront: <i className="bx bx-cloud" style={{ color: "#17CC8B" }} />,
      iconBack: <i className="bx bx-timer" style={{ color: "#719C82" }} />,
    },
  ],
};

export const description = [
  LifeTrackr,
  Outdoors,
  EthWallet,
  WorkFlow,
  Portfolio,
].map((project) => {
  return { ...project.base, ...{ techStack: project.techStack } };
});

export const overview = [
  LifeTrackr,
  Outdoors,
  EthWallet,
  WorkFlow,
  Portfolio,
].map((project) => {
  return { ...project.base, ...project.overview };
});
