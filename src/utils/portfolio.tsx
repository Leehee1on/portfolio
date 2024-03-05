import emoji from "react-easy-emoji";

export const greeting = {
  username: "HeeWon Lee",
  title: "안녕하세요, 풀스택이 되고싶은",
  role: "프론트엔드 개발자\n이희원입니다.",
  subTitle: "#책임감 #끈기있는 #열정 #소통",
  resumeLink: "",
  // IMPORTANT
  // If you don't want to show this, change view to false. DO NOT DELETE!
  view: true
};

export const info = {
  title: emoji("About Me 👾"),
  subTitle: emoji("🙍‍♂️ 안녕하세요! 프론트엔드 개발자 이희원입니다."),
  desc: [
    emoji("• 2019년에 개발의 첫 걸음을 내딛어, 현재까지 계속해서 소프트웨어 개발을 하고 있습니다."),
    emoji("• Typescript / React / React Native 를 다루는데 능숙하며, Android / IOS 배포 경험이 있습니다."),
    emoji("• 백엔드 서버와 데이터베이스 관련 공부를 진행 중이며, 채팅 서버를 개발해 본 경험이 있습니다."),
    emoji("• 매일매일 성장하는 개발자가 되겠습니다.")
  ]
};

export const socialMediaLinks = {
  // IMPORTANT
  // if you don't have, change value to blank or false!! DO NOT DELETE!
  github: "https://github.com/Leehee1on",
  email: "leehee1on@gmail.com"
};

export const skills = {
  title: emoji("Skills ⚡"),
  subTitle: "Main skills",
  describeSkills: [emoji("✔ Next js"), emoji("✔ Node js"), emoji("✔ Mongodb"), emoji("✔ Electron"), emoji("✔ Sass")],
  // IMPORTANT
  // You need to find className for font-awesome icon
  // Go to https://fontawesome.com/ and search icon
  lists: [
    { fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 90 },
    { fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 80 },
    { fontAwesome: "fab fa-js", text: "JS", proficiency: 70 },
    { fontAwesome: "fab fa-react", text: "React", proficiency: 60 },
    { fontAwesome: "fab fa-react", text: "React Native", proficiency: 20 }
  ],
  view: true
};

export const experience = {
  title: "Work Experience",
  lists: [
    {
      date: "2022.03 ~ current",
      company: "Encored Tech",
      role: "Front-End Developer"
    },
    {
      date: "2020.02 ~ 2021.12",
      company: "더빌드소프트",
      role: "Front-End Developer"
    },
    {
      date: "2019.11 ~ 2020.01",
      company: "시즐",
      role: "Front-End Developer"
    },
    {
      date: "2019.07 ~ 2019.11",
      company: "피그말리온",
      role: "Publisher"
    }
  ],
  view: true
};

export const openSourceProjects = {
  title: emoji("Open Source Projects 💻"),
  view: true
};

export const projects = {
  title: emoji("Projects 💻"),
  subTitle: "React / React Native 관련",
  lists: [
    {
      title: "편식",
      desc: "편의점 식품 관련 어플리케이션, 앱 개발 및 관리자 개발을 맡았습니다",
      url: "https://play.google.com/store/apps/details?id=com.pyeonsik"
    },
    {
      title: "펫시스터",
      desc: "여성전용 펫 돌봄 서비스, 앱 개발 및 관리자 개발을 맡았습니다. 부가적으로 채팅서버에 도움을 주었습니다.",
      url: "https://play.google.com/store/apps/details?id=com.petsister"
    },
    {
      title: "실버트리",
      desc: "요양원 전용 알림 어플리케이션, 앱 개발 및 관리자 개발을 맡았습니다",
      url: "https://play.google.com/store/apps/details?id=kr.co.besideyou"
    },
    {
      title: "고민필름",
      desc: "여성전용 고민공유 SNS, 앱 개발 및 관리자 개발을 맡았습니다",
      url: "https://play.google.com/store/apps/details?id=com.petsister"
    },
    {
      title: "shopby pro",
      desc: "NHN의 쇼핑몰 (shopby pro) 개발작업을 협업한 경험이 있습니다.",
      url: "https://www.nhn-commerce.com/"
    },
    {
      title: "Saas",
      desc: "Software as a Service Platform 관련 작업을 한 경험이 있습니다.",
      url: ""
    }
  ],
  view: true
};

export const achievements = {
  view: false
};

export const blogs = {
  view: false
};

export const contactInfo = {
  title: "Contact To Me! 📞",
  subTitle: "leehee1on@gmail.com",
  introduce: emoji("your introduce❤"),
  view: true
};
