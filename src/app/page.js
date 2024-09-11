import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import 'animate.css';
import style from './page.module.css';
import AnimatedGif from './animatedGif';
import ProjectsDropdown from './dropDown/page';



export default function Home() {

  return (
    <div className="bg-dark bg-gradient pt-5 pb-5 ">
      <div className=" container marketing  bg-dark bg-gradient" bis_skin_checked="1">
        <div className="d-flex align-items-end position-sticky top-0 z-3  bg-dark bg-gradient rounded-4 shadow-lg p-3 mb-5 rounded opacity-100 animate__animated animate__pulse">
          <button id={style.togglebutton} class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
            <div id={style.menusidebarbutton} className="w-100">
              <img id={style.menuicon} src="/circle.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="40" height="40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            </div>
          </button>
          <h1 className="featurette-heading fw-normal lh-1 text-white">Portfolio <span className="text-white-75"></span></h1>
          <div id={style.navigateheader} className="w-100 d-flex justify-content-center">
            <div className=" w-75 d-flex justify-content-between align-items-center">
              <a href="#aboutme" className="nav-link text-white">
                <h4 className="featurette-heading fw-normal lh-1 text-white">
                  About me
                </h4>
              </a>
              <span className="text-white-75"></span>
              <a href="#contactinfo" className="nav-link text-white">
                <h4 className="featurette-heading fw-normal lh-1 text-white">
                  Contact
                </h4>
              </a><span className="text-white-75"></span>

              <ProjectsDropdown></ProjectsDropdown>
              {/* <a href="https://myshopreact112.netlify.app" target="_blank" className="nav-link text-white       text-decoration-underline">
                <h4 className="featurette-heading fw-normal lh-1 text-white">
                  Clothing Store
                </h4>
              </a> */}
              {/* <span className="text-white-75"></span> */}

            </div>
          </div>

        </div>
        <hr className="featurette-divider mb-5 text-white" />
        {/*sidebar */}
        <div className=" offcanvas offcanvas-start bg-dark bg-gradient w-75" tabIndex="-1" id="sidebar">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="sidebarLabel"></h5>
            <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close">
            </button>
          </div>
          <div className="offcanvas-body">
            <div className="d-flex flex-column flex-shrink-0 p-3 " >
              <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
              </a>
              <hr className="text-white" />
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <a href="#aboutme" className="nav-link text-white">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                    About me
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contactinfo" className="nav-link text-white">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#contact"></use></svg>
                    Contact
                  </a>
                </li>
                <hr className="text-white" />
                <li className="nav-item text-white mt-2 mb-2 pb-2 d-flex justify-content-between">
                  <h4>Projects:</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                  </svg>
                </li>
                <li className="nav-item">
                  <a href="https://myshopreact112.netlify.app" target="_blank" className="nav-link text-white text-decoration-underline">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                    Clothing Store
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://lovelycookingrecipes.netlify.app/" target="_blank" className="nav-link text-white text-decoration-underline">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                    Cooking recipes
                  </a>
                </li>
              </ul>
              <hr className="text-white" />
            </div>
          </div>
        </div>


        <div className="row shadow-lg p-3 mb-5 rounded d-flex justify-content-center  animate__animated animate__backInDown rounded-4  " bis_skin_checked="1">

          <div className="mt-5 mb-5 d-flex justify-content-center">
            <div className="col-lg-4 rounded-4 shadow-lg p-3 rounded animate__animated animate__backInDown" bis_skin_checked="1">
              <div className="col-lg-4 w-100 d-flex justify-content-center" bis_skin_checked="1">
                <img src="/icon.png" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
              </div>
              <div id="aboutme" className="col-lg-4 w-100 d-flex justify-content-center" bis_skin_checked="1">
                <h2 className="fw-normal text-white ">Kirill Nevishniy</h2>
              </div>
            </div>
          </div>
        </div>




        <hr className="featurette-divider text-white" />

        <div className="row featurette bg-body bg-opacity-10 rounded-4 shadow-lg p-3 mb-5 mt-5 rounded animate__animated animate__pulse" bis_skin_checked="1">
          <div className="col-md-7 mt-2" bis_skin_checked="1">
            <h2 className="featurette-heading fw-normal lh-1 text-white">About me<span className="text-body-secondary"></span></h2>
            <p className="lead text-white-50">I’m a passionate Front-End Developer with a love for design and technology. My journey into web development began with a curiosity to create something both functional and visually appealing. Before diving into Front-End Development, I explored various creative tools like Photoshop and Blender, but I found my true calling in building interactive and dynamic web applications.
            </p>
            <p className="lead text-white-50">
              My foundational skills include HTML, CSS, JavaScript, and React, which I honed through a comprehensive development course. Beyond the course, I've expanded my expertise by learning additional languages and frameworks such as Next.js, Tailwind, and Vue.js. I’m particularly fascinated by the process of optimizing projects—transforming a simple HTML page into a fully functional, high-performance website, and continually testing and enhancing it with new features.
            </p>
            <p className="lead text-white-50">
              One of my proudest achievements is a Clothing Store project I developed as the capstone of my course. This was my first large-scale project, and it challenged me to leverage all my skills to build a complete, working e-commerce system. While I haven’t yet participated in group projects, I’m eager to collaborate and gain new experiences in team settings.
            </p>
            <p className="lead text-white-50">
              I stay updated on the latest trends and technologies in Front-End Development by watching educational videos and tutorials. Though the journey has had its challenges—particularly when adding new features—I’ve learned that a methodical approach to problem-solving is key. By stepping back, evaluating potential impacts, and then moving forward with a clear plan, I’ve found that even the most complex issues can be resolved efficiently.
            </p>
            <p className="lead text-white-50">
              Outside of development, I have a strong interest in music and enjoy playing the piano in my free time. This creative outlet complements my work in coding, where I start by designing a basic, non-functional interface and then refine and enhance it with additional features.
            </p>
            <p className="lead text-white-50">
              Looking ahead, I’m committed to furthering my skills not only in Front-End Development but across the entire IT landscape. My goal is to work on creative and social projects that make a positive impact, continuing to push the boundaries of what I can achieve as a developer.
            </p>
          </div>
          <div className="col-md-5 mt-2 rounded-4" bis_skin_checked="1">
            <AnimatedGif src="/programming-frog.gif" alt="frog coding" />
          </div>
        </div>

        <hr className="featurette-divider text-white" />

        <div className="row featurette bg-body bg-opacity-10 rounded-4 shadow-lg p-3  rounded animate__animated animate__pulse mt-5" bis_skin_checked="1">
          <div className="col-md-7 mt-2  w-100 mb-3 " bis_skin_checked="1">
            <h2 id="contactinfo" className="featurette-heading fw-normal lh-1 text-white">Contact<span className="text-body-secondary"></span></h2>
            <div className="w-100 d-flex justify-content-center text-center pb-3">
              <div className=" w-75  pt-3 mt-4 text-center flex-row flex-wrap  d-flex justify-content-evenly">
                <a className="lead text-white-50   link-offset-2 link-underline link-underline-opacity-0 text-center" href="mailto:kirillvish482@gmail.com">
                  <h5>gmail: kirillvish482@gmail.com</h5>
                </a>
                <a className="lead text-white-50 link-offset-2 d-flex flew-nowrap link-underline link-underline-opacity-0 text-center" href="tell:+380951503677">
                  <h5>tell: +380 95 150 36 77</h5>
                </a>
              </div>
            </div>
          </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </div >
    </div>
  )
}
