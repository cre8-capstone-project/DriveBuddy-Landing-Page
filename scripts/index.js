document.addEventListener("DOMContentLoaded", () => {
  /* Elements declaration */
  const currentYearSpan = document.getElementById("currentYear");

  /* Functions declarations */
  function getCurrentYear() {
    return new Date().getFullYear();
  }
  /* Dynamic behaviour */
  currentYearSpan.innerText = getCurrentYear();
});

const teamMembers = [
  {
    name: "Yosuke Hanaoka",
    picture: "",
    github: "https://github.com/yoshan0921",
    linkedin: "https://www.linkedin.com/in/yosuke-hanaoka",
    role: "Full Stack Developer",
  },
  {
    name: "Vinicius Souza",
    picture: "../assets/images/team/vin.png",
    github: "https://github.com/vinsouza99",
    linkedin: "https://www.linkedin.com/in/vinicius-abner",
    role: "Lead Developer / / Full Stack Developer",
  },
  ,
  {
    name: "Cocoy Suguitan",
    picture: "",
    github: "https://github.com/cocoysg",
    linkedin: "https://www.linkedin.com/in/cocoysg",
    role: "Project Manager / / Frontend Developer",
  },
  {
    name: "Terumasa Mori",
    picture: "",
    github: "https://github.com/terumori1206",
    linkedin: "https://www.linkedin.com/in/terumori",
    role: "Frontend Developer",
  },
  {
    name: "Trang Nguyen",
    picture: "",
    linkedin: "https://www.linkedin.com/in/trang-tara",
    role: "Lead Designer / / UI/UX Designer",
  },
  {
    name: "Calvin Tsai",
    picture: "",
    linkedin: "https://www.linkedin.com/in/tsai-calvin",
    role: "UI/UX Designer",
  },
  {
    name: "Jason Yang",
    picture: "",
    linkedin: "https://www.linkedin.com/in/jasonyang21656",
    role: "UI/UX Designer",
  },
  {
    name: "Viola Sun",
    picture: "",
    linkedin: "https://www.linkedin.com/in/viola-sun-catlady",
    role: "UI/UX Designer",
  },
  {
    name: "Liezel Sagayadoro",
    picture: "",
    linkedin: "https://www.linkedin.com/in/liezel-sagayadoro",
    role: "UI/UX Designer",
  },
];
