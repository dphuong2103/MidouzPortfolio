const projectContainer = document.querySelector(".projectContainer");

const projects = [
  {
    title: "Todo app",
    time: "December 2021 - August 2022",
    description:
      "A todo app created in Angular and Android studio. </br>Integrating with google authentication, realtime database of Firebase with functions such as add new, update, delete tasks and data will be updated realtime on UI A todo app created in Angular and Android studio. Integrating with google authentication, realtime database of Firebase with functions such as add new, update, delete tasks and data will be updated realtime on UI. </br>This project helped me learn about Angular, Java and Firebase, gave me understanding of how to design an application and strengthen my OOP knowledge. ^^!",
    img: "data:image/png;base64,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",
  },
  {
    title: "Update invoice by RPA",
    time: "Jun 2022 - Jul 2022",
    description:
      "Created an RPA bot that updated almost 60,000 invoices by UIPath (government requirements). Save more than 6 working-months for accounting staffs. Help the company to save more than 200 VND mil comparing to outsource. </br> This project helped me to gain a lot of knowledge about RPA (a very helpful tool). Which i can later on utilize to do my daily tasks for me. </br> There are also many sides project of RPA but this project help company save money the most.",
    img: "https://einvoice.vn/Content/img/logoktxt.png",
  },
  {
    title: "SAP SuccessFactors maintenance",
    time: "March 2021 - August 2022",
    description:
      "Maintain SAP SuccessFactors & Integration between SAP SuccessFactors and HRMs in Honda. Create and report to managers for any incidents. Support and create system guidelines for users. </br> Directly fix and support any issues relating to SuccessFactors.",
    img: "data:image/png;base64,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",
  },
  {
    title: "Implements SAP SuccessFactors for Honda VietNam",
    time: "Jul 2020 - Feb 2021",
    description:
      "Implement SAP SuccessFactors EC, PMGM and integration between SAP SuccessFactors and HRMs in Honda VietNam. Analyze customer requirements and map with system configurations. </br> Create workbook to capture customer requirements. </br> Create testcase to test the system and directly test the system. </br> The project helped me learn about project management, time management, system implementation methodology of a project and how a standard system designed.",
    img: "data:image/png;base64,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",
  },
  {
    title: "Implements HRMs for TAC",
    time: "Jul 2020 - Feb 2021",
    description: `Implement HRMs for TAC - <span class="text-muted">A Cambodian apparel company</span> </br> Analyze customer requirements and map with system configurations. </br> Create workbook to capture customer requirements. </br> Create testcase to test the system and directly test the system. </br> The project helped me learn about project management, time management and system implementation methodology of a project. Also helped me get familiar with SQL, which is used oftenly in implementing onm-premises software.`,
    img: "https://play-lh.googleusercontent.com/98d9glHPjD_66XLTDQ9kY5c4w9rL8C_uG3WJ_Dra1XR7VSQUHrB--xzQ9M0hFZQvvVQ",
  },
];

projects.map((project) => {
  projectContainer.innerHTML += `
    <div class="row pt-3 project-container">
    <div class="col-3 d-flex justify-content-end">
      <img src=${project.img} />
    </div>
    <div class="col-9">
      <div class="container">
        <span class="h5 fw-bold">${project.title}</span>
        <div class="time">${project.time}</div>

        <p class="project-description font-notoSan">
          ${project.description}
        </p>
      </div>
    </div>
  </div>
    `;
});

let contacts = [
  {
    type: "zalo",
    img: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/2500/zalo-seeklogo.com-512.png",
    link: "https://zaloapp.com/qr/p/4ebj64h205w6",
  },
  {
    type: "facebook",
    img: "https://www.facebook.com/images/fb_icon_325x325.png",
    link: "",
  },
  {
    type: "telegram",
    img: "data:image/png;base64,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",
    link: "",
  },
];

let otherContactContainer = document.getElementById("otherContactContainer");

contacts.map((contact) => {
  otherContactContainer.innerHTML += `
    <a href = ${contact.link} target="_blank">
    <img
    
    class="contact-img"
    src= ${contact.img}  />
  </a>
`;
});

revealElementOnScroll();
// ===== Declare function ===== //

// Reveal Element on Scroll with classes: .animated-reveal.active
function revealElementOnScroll() {
  var revealElements = document.querySelectorAll(".animated-reveal");
  let windowHeight = window.innerHeight;
  let elementVisible =
    windowHeight /
    15; /*Used for add active class to element when element is visible on x px on screen*/

  window.addEventListener("scroll", () => {
    revealElements.forEach((element) => {
      let elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {

        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  });
}

// ==== Currently not used===
// function addImageAnimationOnScroll() {
//   import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
//   const animatedImages = document.querySelectorAll(".animated");

//   animatedImages.forEach((image) => {
//     const imageOffsetTop = image.offsetTop;
//     const imageHeight = image.offsetHeight;

//     const animatedImageTimeline = new ScrollTimeline({
//       scrollOffsets: [
//         CSS.px(imageOffsetTop + imageHeight - window.innerHeight),
//         CSS.px(imageOffsetTop + 100),
//       ],
//     });

//     image.animate(
//       {
//         transform: [
//           // perspective(1000px)
//           "perspective(1000px) rotateX(90deg)",
//           "perspective(1000px) rotateX(0)",
//         ],
//         opacity: ["0", "1"],
//       },
//       { duration: 1, easing: "linear", timeline: animatedImageTimeline }
//     );
//   });
// }
// ================================================================

// ================================================================
