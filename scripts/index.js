document.addEventListener("DOMContentLoaded", () => {
  /* Elements declaration */
  const currentYearSpan = document.getElementById("currentYear");
  const toggleMenuButton = document.getElementById("toggleButton");
  const toggleButtonIcon = document.getElementById("toggleButtonIcon");
  const teamMemberGrid = document.getElementById("teamGrid");

  const menu = document.getElementById("menu");

  /* Functions declarations */

  /**
   * Gets the current year to display on the footer
   * @returns nothing
   */
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  /**
   * Iterates over the teamMembers array and create a div inside the teamGrid element for each one of them
   */
  function populateTeamList() {
    teamMembers.forEach((member) => {
      const gridItem = document.createElement("div"); //create a wrapper div that will contain member info
      gridItem.classList.add("gridItem");

      const profileImageWrapper = document.createElement("div"); //wrapper div for the image
      profileImageWrapper.classList.add("imageWrapper");

      const img = document.createElement("img");
      img.src = member.picture;
      img.alt = `${member.name} Picture`;
      profileImageWrapper.appendChild(img); //add the image to the wrapper div

      const memberName = document.createElement("span");
      memberName.classList.add("memberName");
      memberName.innerText = member.name;

      const memberRole = document.createElement("span");
      memberRole.classList.add("memberRole");
      memberRole.innerText = member.role;

      const memberLinkedIn = document.createElement("a");
      memberLinkedIn.classList.add("memberLinkedIn");
      memberLinkedIn.href = member.linkedin;
      memberLinkedIn.innerText = "LinkedIn";

      //Adds team member info to the member wrapper div (in order of appearance)
      gridItem.appendChild(profileImageWrapper);
      gridItem.appendChild(memberName);
      gridItem.appendChild(memberRole);
      gridItem.appendChild(memberLinkedIn);

      teamMemberGrid.appendChild(gridItem); //adds team member wrapper div to the grid
    });
  }
  /* Dynamic behaviour */
  populateTeamList();
  currentYearSpan.innerText = getCurrentYear();
  toggleMenuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
    toggleButtonIcon.classList.toggle("fa-bars");
    toggleButtonIcon.classList.toggle("fa-xmark");
  });
});

const teamMembers = [
  {
    name: "Yosuke Hanaoka",
    picture: "../assets/images/team/yosuke.png",
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
    picture: "../assets/images/team/cocoy.png",
    github: "https://github.com/cocoysg",
    linkedin: "https://www.linkedin.com/in/cocoysg",
    role: "Project Manager / / Frontend Developer",
  },
  {
    name: "Terumasa Mori",
    picture: "../assets/images/team/teru.png",
    github: "https://github.com/terumori1206",
    linkedin: "https://www.linkedin.com/in/terumori",
    role: "Frontend Developer",
  },
  {
    name: "Trang Nguyen",
    picture: "../assets/images/team/tara.png",
    linkedin: "https://www.linkedin.com/in/trang-tara",
    role: "Lead Designer / / UI/UX Designer",
  },
  {
    name: "Calvin Tsai",
    picture: "../assets/images/team/calvin.png",
    linkedin: "https://www.linkedin.com/in/tsai-calvin",
    role: "UI/UX Designer",
  },
  {
    name: "Jason Yang",
    picture: "../assets/images/team/jason.png",
    linkedin: "https://www.linkedin.com/in/jasonyang21656",
    role: "UI/UX Designer",
  },
  {
    name: "Viola Sun",
    picture: "../assets/images/team/viola.png",
    linkedin: "https://www.linkedin.com/in/viola-sun-catlady",
    role: "UI/UX Designer",
  },
  {
    name: "Liezel Sagayadoro",
    picture: "../assets/images/team/liezel.png",
    linkedin: "https://www.linkedin.com/in/liezel-sagayadoro",
    role: "UI/UX Designer",
  },
];
