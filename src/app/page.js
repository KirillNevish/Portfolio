"use client";

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import style from './page.module.css';
import AnimatedGif from './animatedGif';
// import Header from './header/page';
const Header = dynamic(() => import('./header/page'), { ssr: true });
import Footer from './footer/page';
import LeftSidebar from './leftSidebar/page';




export default function Home() {
  return (
    <div id={style.mainbg} className="pt-5 pb-5 d-flex justify-content-center">
      <div id={style.blurContainer} ></div>

      <LeftSidebar></LeftSidebar>

      <div id={style.mainContnent} className="w-50 marketing z-1">

        <Header></Header>

        <div className="row shadow-lg p-3 mb-5 rounded d-flex justify-content-center rounded-4  animate__animated animate__backInDown bg-body bg-opacity-10" bis_skin_checked="1">

          <div className="mt-5 mb-5 d-flex justify-content-center animate__animated animate__backInDown">
            <div className="col-lg-4 rounded-4 shadow-lg p-3 rounded " bis_skin_checked="1">
              <div className="col-lg-4 w-100 d-flex justify-content-center mb-1" bis_skin_checked="1">
                <img src="/icon.png" className="bd-placeholder-img shadow-lg border-secondary border-opacity-10 border border-5  rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
              </div>
              <div id="aboutme" className="col-lg-4 w-100 d-flex justify-content-center" bis_skin_checked="1">
                <h2 className="fw-normal text-white">Kirill Nevishniy</h2>
              </div>
            </div>
          </div>
        </div>
        <hr className="featurette-divider text-white" />

        <div className="row featurette bg-body bg-opacity-10 rounded-4 shadow-lg p-3 mb-5 mt-5 rounded" bis_skin_checked="1">
          <div id={style.aboutMeInfo} className="col-md-7 mt-2" bis_skin_checked="1">
            <h2 className="featurette-heading fw-normal lh-1 text-white">About me<span className="text-body-secondary"></span></h2>
            <p className="lead text-white-50">I’m a passionate Front-End Developer with a love for design and technology. My journey into web development began with a curiosity to create something both functional and visually appealing. Before diving into Front-End Development, I explored various creative tools like Photoshop and Blender, but I found my true calling in building interactive and dynamic web applications.
            </p>
            <p className="lead text-white-50">
              My foundational skills include HTML, CSS, JavaScript, and React, which I honed through a comprehensive development course. Beyond the course, I've expanded my expertise by learning additional languages, libraries and frameworks such as Next.js, Tailwind, and Vue.js and more. I’m particularly fascinated by the process of optimizing projects—transforming a simple page into a fully functional, high-performance website, and continually testing and enhancing it with new features.
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
          <div id={style.widerGif} className="col-md-5 mt-2 rounded-4" bis_skin_checked="1">
            <AnimatedGif src="/programming-frog.gif" alt="frog coding" />
          </div>
        </div>

        <hr className="featurette-divider text-white" />

        <Footer></Footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </div >
      <div id={style.leftSidebar} className=" d-flex rounded-4 shadow-lg p-3 rounded opacity-100 h-50 m-3 position-sticky pb-5 bg-body bg-opacity-10" bis_skin_checked="1">
        <hr className="text-white mt-5" />
        <a id={style.navigatebuttonheader} href="#aboutme" className="nav-link text-white mb-3 ">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          About me
        </a>
        <a id={style.navigatebuttonheader} href="#contactinfo" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#contact"></use></svg>
          Contact
        </a>
        <hr className="text-white" />
      </div>
    </div >
  )
}
