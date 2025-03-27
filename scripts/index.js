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

      const memberSocial = document.createElement("div");
      memberSocial.classList.add("memberSocial");
      if (member.linkedin) {
        const memberLinkedIn = document.createElement("a");
        memberLinkedIn.href = member.linkedin;
        memberLinkedIn.innerHTML += `<i class="fa-brands fa-linkedin" aria-hidden="true"></i>`;
        memberLinkedIn.innerHTML += `<span class="visually-hidden">LinkedIn</i>`;
        memberLinkedIn.title = "LinkedIn";
        memberSocial.append(memberLinkedIn);
      }
      if (member.github) {
        const memberGitHub = document.createElement("a");
        memberGitHub.href = member.github;
        memberGitHub.innerHTML += `<i class="fa-brands fa-github" aria-hidden="true"></i>`;
        memberGitHub.innerHTML += `<span class="visually-hidden">GitHub</i>`;
        memberGitHub.title = "GitHub";
        memberSocial.append(memberGitHub);
      }
      if (member.portfolio) {
        const memberPortfolio = document.createElement("a");
        memberPortfolio.href = member.portfolio;
        memberPortfolio.innerHTML += `<i class="fa-brands fa-web" aria-hidden="true"></i>`;
        memberPortfolio.innerHTML += `<span class="visually-hidden">Portfolio</i>`;
        memberPortfolio.title = "Portfolio";
        memberSocial.append(memberPortfolio);
      }

      //Adds team member info to the member wrapper div (in order of appearance)
      gridItem.appendChild(profileImageWrapper);
      gridItem.appendChild(memberName);
      gridItem.appendChild(memberRole);
      gridItem.appendChild(memberSocial);

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
    picture: "../assets/images/team/yosuke2.png",
    github: "https://github.com/yoshan0921",
    linkedin: "https://www.linkedin.com/in/yosuke-hanaoka",
    role: "Full Stack Developer",
  },
  {
    name: "Vinicius Souza",
    picture: "../assets/images/team/vin2.png",
    github: "https://github.com/vinsouza99",
    linkedin: "https://www.linkedin.com/in/vinicius-abner",
    role: "Full Stack Developer | Lead",
  },
  ,
  {
    name: "Cocoy Suguitan",
    picture: "../assets/images/team/cocoy2.png",
    github: "https://github.com/cocoysg",
    linkedin: "https://www.linkedin.com/in/cocoysg",
    role: "Frontend Developer | PM",
  },
  {
    name: "Terumasa Mori",
    picture: "../assets/images/team/teru2.png",
    github: "https://github.com/terumori1206",
    linkedin: "https://www.linkedin.com/in/terumori",
    role: "Frontend Developer",
  },
  {
    name: "Trang Nguyen",
    picture: "../assets/images/team/tara2.png",
    linkedin: "https://www.linkedin.com/in/trang-tara",
    role: "UI/UX Designer | Lead",
  },
  {
    name: "Calvin Tsai",
    picture: "../assets/images/team/calvin2.png",
    linkedin: "https://www.linkedin.com/in/tsai-calvin",
    role: "UI/UX Designer",
  },
  {
    name: "Jason Yang",
    picture: "../assets/images/team/jason2.png",
    linkedin: "https://www.linkedin.com/in/jasonyang21656",
    role: "UI/UX Designer",
  },
  {
    name: "Viola Sun",
    picture: "../assets/images/team/viola2.png",
    linkedin: "https://www.linkedin.com/in/viola-sun-catlady",
    role: "UI/UX Designer",
  },
  {
    name: "Liezel Sagayadoro",
    picture: "../assets/images/team/liezel2.png",
    linkedin: "https://www.linkedin.com/in/liezel-sagayadoro",
    role: "UI/UX Designer",
  },
];
