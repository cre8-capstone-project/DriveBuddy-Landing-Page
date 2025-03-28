document.addEventListener("DOMContentLoaded", () => {
  /* Elements declaration */
  const currentYearSpan = document.getElementById("currentYear");
  const toggleMenuButton = document.getElementById("toggleButton");
  const toggleButtonIcon = document.getElementById("toggleButtonIcon");
  const teamMemberGrid = document.getElementById("teamGrid");
  const contactForm = document.getElementById("contactForm");
  const modal = document.getElementById("modal");
  const closeBtns = Array.from(document.getElementsByClassName("close-btn"));
  const backdrop = document.getElementById("backdrop");
  const modalTitle = document.getElementById("modal-title");
  const modalMessage = document.getElementById("modal-message");
  const modalImg = document.getElementById("modal-img");

  const menu = document.getElementById("menu");

  /* Functions declarations */
  emailjs.init({
    publicKey: "mrnROunOxqqqm6Bsf",
  });
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
        memberLinkedIn.setAttribute("target", "_blank");
        memberSocial.append(memberLinkedIn);
      }
      if (member.github) {
        const memberGitHub = document.createElement("a");
        memberGitHub.href = member.github;
        memberGitHub.innerHTML += `<i class="fa-brands fa-square-github" aria-hidden="true"></i>`;
        memberGitHub.innerHTML += `<span class="visually-hidden">GitHub</i>`;
        memberGitHub.title = "GitHub";
        memberGitHub.setAttribute("target", "_blank");
        memberSocial.append(memberGitHub);
      }
      if (member.portfolio) {
        const memberPortfolio = document.createElement("a");
        memberPortfolio.href = member.portfolio;
        memberPortfolio.innerHTML += `<i class="fa-solid fa-globe" aria-hidden="true"></i>`;
        memberPortfolio.innerHTML += `<span class="visually-hidden">Portfolio</i>`;
        memberPortfolio.title = "Portfolio";
        memberPortfolio.setAttribute("target", "_blank");
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
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    e.target.reset();
  });
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });
  function closeModal() {
    modal.style.display = "none";
    backdrop.style.display = "none";
  }
  function sendEmail() {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    var templateParams = {
      name: name,
      email: email,
      message: message,
    };
    emailjs.send("service_aj3y2o3", "template_fi6kvjw", templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        modalTitle.innerText = "Success!";
        modalMessage.innerText = "Your message has been sent successfully!";
        modalImg.setAttribute("src", "./assets/images/emailSentIcon.svg");
        modal.style.display = "block";
        backdrop.style.display = "block";
      },
      (error) => {
        console.log("FAILED...", error);
        modalTitle.innerText = "Error!";
        modalMessage.innerText =
          "Your message couldn't be sent. Try again later.";
        modalImg.setAttribute("src", "./assets/images/emailErrorIcon.svg");
        modal.style.display = "block";
        backdrop.style.display = "block";
      }
    );
  }
});

const teamMembers = [
  {
    name: "Trang Nguyen",
    picture: "../assets/images/team/tara.png",
    linkedin: "https://www.linkedin.com/in/trang-tara",
    role: "UI/UX Designer | Lead",
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
    portfolio: "https://www.jasonyanguxdesign.com/",
  },
  {
    name: "Viola Sun",
    picture: "../assets/images/team/viola.png",
    linkedin: "https://www.linkedin.com/in/viola-sun-catlady",
    role: "UI/UX Designer",
    portfolio: "https://viola-sun.com/",
  },
  {
    name: "Liezel Sagayadoro",
    picture: "../assets/images/team/liezel.png",
    linkedin: "https://www.linkedin.com/in/liezel-sagayadoro",
    role: "UI/UX Designer",
    portfolio: "",
  },
  {
    name: "Vinicius Souza",
    picture: "../assets/images/team/vin.png",
    github: "https://github.com/vinsouza99",
    linkedin: "https://www.linkedin.com/in/vinicius-abner",
    role: "Full Stack Developer | Lead",
    portfolio: "http://vinsouza.vercel.app/",
  },
  ,
  {
    name: "Cocoy Suguitan",
    picture: "../assets/images/team/cocoy.png",
    github: "https://github.com/cocoysg",
    linkedin: "https://www.linkedin.com/in/cocoysg",
    role: "Full Stack Developer | PM",
    portfolio: "https://cocoy.netlify.app",
  },
  {
    name: "Yosuke Hanaoka",
    picture: "../assets/images/team/yosuke.png",
    github: "https://github.com/yoshan0921",
    linkedin: "https://www.linkedin.com/in/yosuke-hanaoka",
    role: "Full Stack Developer",
  },
  {
    name: "Terumasa Mori",
    picture: "../assets/images/team/teru.png",
    github: "https://github.com/terumori1206",
    linkedin: "https://www.linkedin.com/in/terumori",
    role: "Full Stack Developer",
  },
];
