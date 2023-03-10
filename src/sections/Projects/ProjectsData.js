const LifeTrackr = {
  projectName: "LifeTrackr",
  platform: "Mobile App",
  caseName: "Front-end & UI/UX Case",
  description: (
    <p className="popup__description">
      A cross-platform mobile app created using <span>React Native</span>{" "}
      framework. <br /> The goal of this app is to offer functionality that aids
      in the process of taking care of plants and animals. The case is done as a
      diploma project.
    </p>
  ),
  functionality: [
    <p className="popup__features--item">
      <span>Sign Up / Sign In</span> using your email and password. User
      Authentication is securely provided by JSON WEB Tokens. The API was coded
      in Python.
    </p>,
    <p className="popup__features--item">
      <span>Add Companions</span> (pet) by providing its name, related notes,
      and companion type. <br />
      There are five available companion types in our app: dog, cat, reptile,
      plant, bird.
    </p>,
    <p className="popup__features--item">
      <span>Link reminders</span> to each companion by specifying the name,
      frequency, and reminder type and get timely notifications. Reminder types
      change depending on the companion.
    </p>,
  ],
  btnIcon: <i className="bx bx-spa" />,
  date: "01/2022 - 04/2022",

  techStack: [
    {
      colorFront: { color: "#2A9EBE" },
      iconFront: "fa-brands fa-react fa-sm",
      nameFront: "React Native",
      colorBack: { color: "#719C82" },
      iconBack: "bx bx-devices",
      nameBack: "Cross-Platform App",
    },
    {
      colorFront: { color: "#17CC8B" },
      iconFront: "bx bx-cloud",
      nameFront: "REST API",
      colorBack: { color: "#719C82" },
      iconBack: "bx bx-lock-alt",
      nameBack: "JWT Auth",
    },
    {
      colorFront: { color: "#04C3FF" },
      iconFront: "bx bxl-redux",
      nameFront: "Redux Saga",
      colorBack: { color: "#719C82" },
      iconBack: "fa-regular fa-group-arrows-rotate fa-xs",
      nameBack: "AJAX HTTP Requests",
    },
    {
      colorFront: { color: "#3044AA" },
      iconFront: "fa-brands fa-aws fa-xs",
      nameFront: "AWS",
      colorBack: { color: "#719C82" },
      iconBack: "fa-solid fa-laptop-code fa-xs",
      nameBack: "Responsive Design",
    },
    {
      colorFront: { color: "#A303DC" },
      iconFront: "fa-brands fa-figma fa-sm",
      nameFront: "Figma",
      colorBack: { color: "#719C82" },
      iconBack: "fa-regular fa-wand-magic-sparkles fa-xs",
      nameBack: "Neomorphic UI Style",
    },
  ],
};

const Outdoors = {
  caseName: "Front-end & UI/UX Case",
  date: "10/2022 - 11/2022",
  projectName: "Outdoors",
  platform: "Web App",
  btnIcon: <i className="fa-solid fa-suitcase-rolling fa-sm" />,
  techStack: [
    {
      colorFront: { color: "blue" },
      iconFront: "fa-brands fa-react fa-sm",
      nameFront: "React JS",
      colorBack: { color: "#719C82" },
      iconBack: "fa-solid fa-photo-film fa-xs",
      nameBack: "Pure CSS Animations",
    },
    {
      colorFront: { color: "#f06529" },
      iconFront: "fa-brands fa-html5 fa-sm",
      nameFront: "HTML5",
      colorBack: { color: "#719C82" },
      iconBack: "fa-solid fa-sitemap fa-xs",
      nameBack: "Custom Components",
    },
    {
      colorFront: { color: "#CD6799" },
      iconFront: "fa-brands fa-sass fa-xs",
      nameFront: "SASS",
      colorBack: { color: "#719C82" },
      iconBack: "fa-solid fa-laptop-code fa-xs",
      nameBack: "Responsive Design",
    },
    {
      colorFront: { color: "#A303DC" },
      iconFront: "fa-brands fa-figma fa-sm",
      nameFront: "Figma",
      colorBack: { color: "#719C82" },
      iconBack: "bx bx-timer",
      nameBack: "Fast Loading Speed",
    },
    {
      colorFront: { color: "#17CC8B" },
      iconFront: "bx bx-cloud",
      nameFront: "REST API",
      colorBack: { color: "#719C82" },
      iconBack: "fa-solid fa-glasses fa-xs",
      nameBack: "Friendly UI/UX",
    },
  ],
};

const EthWallet = {
  caseName: "Front-End & UI/UX Case",
  date: "01/2022 - 04/2022",
  projectName: "ETH Wallet",
  platform: "Web APP",
  btnIcon: <i className="fa-brands fa-ethereum fa-sm" />,
  platformIcons: ["bx bx-desktop", "bx bxs-devices"],
  techStack: [
    {
      colorFront: { color: "blue" },
      iconFront: "fa-brands fa-react fa-xs",
      nameFront: "React JS",
      colorBack: { color: "#719C82" },
      iconBack: "fa-solid fa-laptop-code fa-xs",
      nameBack: "Responsive Design",
    },
    {
      colorFront: { color: "#f06529" },
      iconFront: "fa-brands fa-html5 fa-sm",
      nameFront: "HTML5",
      colorBack: { color: "#719C82" },
      iconBack: "bx bx-lock-alt",
      nameBack: "Firebase Auth",
    },
    {
      colorFront: { color: "#CD6773" },
      iconFront: "bx bxl-sass",
      nameFront: "Styled-Components",
      colorBack: { color: "#719C82" },
      iconBack: "bx bx-cloud",
      nameBack: "Cloud Database",
    },
    {
      colorFront: { color: "#FFA000" },
      iconFront: "bx bxl-firebase",
      nameFront: "Firebase",
      colorBack: { color: "#719C82" },
      iconBack: "fa-solid fa-sitemap fa-xs",
      nameBack: "Custom Components",
    },
    {
      colorFront: { color: "#A303DC" },
      iconFront: "fa-brands fa-figma fa-sm",
      nameFront: "Figma",
      colorBack: { color: "#719C82" },
      iconBack: "fa-regular fa-wand-magic-sparkles fa-xs",
      nameBack: "Cyber UI Style",
    },
  ],
};

const WorkFlow = {
  caseName: "Full Stack & UI/UX Case",
  date: "09/2021 - 12/2021",
  projectName: "WorkFlow",
  btnIcon: <i className="fa-regular fa-handshake fa-sm" />,

  platform: "Mobile APP",
  techStack: [
    {
      colorFront: { color: "#2A9EBE" },
      iconFront: "fa-brands fa-react fa-sm",
      nameFront: "React Native",
      colorBack: { color: "#719C82" },
      iconBack: "bx bx-cloud",
      nameBack: "Cloud Database",
    },
    {
      colorFront: { color: "#FFA000" },
      iconFront: "bx bxl-firebase",
      nameFront: "Firebase",
      colorBack: { color: "#719C82" },
      iconBack: "fa-solid fa-glasses fa-xs",
      nameBack: "Interactive UI/UX",
    },
    {
      colorFront: { color: "#04C3FF" },
      iconFront: "bx bxl-redux",
      nameFront: "Redux Thunk",
      colorBack: { color: "#719C82" },
      iconBack: "bx bx-lock-alt",
      nameBack: "Firebase Auth",
    },
    {
      colorFront: { color: "#A303DC" },
      iconFront: "fa-brands fa-figma fa-sm ",
      nameFront: "Figma",
      colorBack: { color: "#719C82" },
      iconBack: "fa-regular fa-group-arrows-rotate fa-xs",
      nameBack: "AJAX HTTP Requests",
    },
    {
      colorFront: { color: "#0E1126" },
      iconFront: "fa-solid fa-v fa-sm fa-rotate-180",
      nameFront: "Expo",
      colorBack: { color: "#719C82" },
      iconBack: "bx bx-devices",
      nameBack: "Cross-Platform App",
    },
  ],
};

const Portfolio = {
  caseName: "Front-End & UI/UX Case",
  date: "01/2023 - 02/2023",
  projectName: "Portfolio",
  platform: "Web APP",
  btnIcon: <i className="fa-solid fa-award fa-sm" />,
  techStack: [
    {
      colorFront: { color: "blue" },
      iconFront: "fa-brands fa-react fa-sm",
      nameFront: "React JS",
      colorBack: { color: "#719C82" },
      iconBack: "fa-solid fa-laptop-code fa-xs",
      nameBack: "Responsive Design",
    },
    {
      colorFront: { color: "#f06529" },
      iconFront: "fa-brands fa-html5 fa-sm",
      nameFront: "HTML5",
      colorBack: { color: "#719C82" },
      iconBack: "fa-regular fa-wand-magic-sparkles fa-xs",
      nameBack: "Neomorphic UI Style",
    },
    {
      colorFront: { color: "#CD6799" },
      iconFront: "fa-brands fa-sass fa-xs",
      nameFront: "SASS",
      colorBack: { color: "#719C82" },
      iconBack: "fa-solid fa-circle-half-stroke fa-xs",
      nameBack: "Dark & Light Themes",
    },
    {
      colorFront: { color: "#04C3FF" },
      iconFront: "bx bxl-redux",
      nameFront: "Redux Thunk",
      colorBack: { color: "#719C82" },
      iconBack: "fa-solid fa-photo-film fa-xs",
      nameBack: "Pure CSS Animations",
    },
    {
      colorFront: { color: "#17CC8B" },
      iconFront: "bx bx-cloud",
      nameFront: "REST API",
      colorBack: { color: "#719C82" },
      iconBack: "bx bx-timer",
      nameBack: "Fast Loading Speed",
    },
  ],
};

export const overviewData = [
  LifeTrackr,
  Outdoors,
  EthWallet,
  WorkFlow,
  Portfolio,
];
