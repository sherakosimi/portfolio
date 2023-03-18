import { useMemo } from "react";

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
        A cross-platform mobile app created using <span>React Native</span>{" "}
        framework. <br /> The goal of this app is to offer functionality that
        aids in the process of taking care of plants and animals. The case is
        done as a diploma project.
      </p>
    ),
    functionality: [
      <p className="popup__features--item">
        <span>Sign Up / Sign In</span> using your email and password. User
        Authentication is securely provided by JSON WEB Tokens. The API was
        coded in Python.
      </p>,
      <p className="popup__features--item">
        <span>Add Companions</span> (pet) by providing its name, related notes,
        and companion type. <br />
        There are five available companion types in our app: dog, cat, reptile,
        plant, bird.
      </p>,
      <p className="popup__features--item">
        <span>Link reminders</span> to each companion by specifying the name,
        frequency, and reminder type and get timely notifications. Reminder
        types change depending on the companion.
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
        A cross-platform mobile app created using <span>React Native</span>{" "}
        framework. <br /> The goal of this app is to offer functionality that
        aids in the process of taking care of plants and animals. The case is
        done as a diploma project.
      </p>
    ),
    functionality: [
      <p className="popup__features--item">
        <span>Sign Up / Sign In</span> using your email and password. User
        Authentication is securely provided by JSON WEB Tokens. The API was
        coded in Python.
      </p>,
      <p className="popup__features--item">
        <span>Add Companions</span> (pet) by providing its name, related notes,
        and companion type. <br />
        There are five available companion types in our app: dog, cat, reptile,
        plant, bird.
      </p>,
      <p className="popup__features--item">
        <span>Link reminders</span> to each companion by specifying the name,
        frequency, and reminder type and get timely notifications. Reminder
        types change depending on the companion.
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
        A cross-platform mobile app created using <span>React Native</span>{" "}
        framework. <br /> The goal of this app is to offer functionality that
        aids in the process of taking care of plants and animals. The case is
        done as a diploma project.
      </p>
    ),
    functionality: [
      <p className="popup__features--item">
        <span>Sign Up / Sign In</span> using your email and password. User
        Authentication is securely provided by JSON WEB Tokens. The API was
        coded in Python.
      </p>,
      <p className="popup__features--item">
        <span>Add Companions</span> (pet) by providing its name, related notes,
        and companion type. <br />
        There are five available companion types in our app: dog, cat, reptile,
        plant, bird.
      </p>,
      <p className="popup__features--item">
        <span>Link reminders</span> to each companion by specifying the name,
        frequency, and reminder type and get timely notifications. Reminder
        types change depending on the companion.
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
        A cross-platform mobile app created using <span>React Native</span>{" "}
        framework. <br /> The goal of this app is to offer functionality that
        aids in the process of taking care of plants and animals. The case is
        done as a diploma project.
      </p>
    ),
    functionality: [
      <p className="popup__features--item">
        <span>Sign Up / Sign In</span> using your email and password. User
        Authentication is securely provided by JSON WEB Tokens. The API was
        coded in Python.
      </p>,
      <p className="popup__features--item">
        <span>Add Companions</span> (pet) by providing its name, related notes,
        and companion type. <br />
        There are five available companion types in our app: dog, cat, reptile,
        plant, bird.
      </p>,
      <p className="popup__features--item">
        <span>Link reminders</span> to each companion by specifying the name,
        frequency, and reminder type and get timely notifications. Reminder
        types change depending on the companion.
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
        A cross-platform mobile app created using <span>React Native</span>{" "}
        framework. <br /> The goal of this app is to offer functionality that
        aids in the process of taking care of plants and animals. The case is
        done as a diploma project.
      </p>
    ),
    functionality: [
      <p className="popup__features--item">
        <span>Sign Up / Sign In</span> using your email and password. User
        Authentication is securely provided by JSON WEB Tokens. The API was
        coded in Python.
      </p>,
      <p className="popup__features--item">
        <span>Add Companions</span> (pet) by providing its name, related notes,
        and companion type. <br />
        There are five available companion types in our app: dog, cat, reptile,
        plant, bird.
      </p>,
      <p className="popup__features--item">
        <span>Link reminders</span> to each companion by specifying the name,
        frequency, and reminder type and get timely notifications. Reminder
        types change depending on the companion.
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
