"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../page.module.css';
import 'animate.css';
// import Header from '../header/page';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('../header/page'), { ssr: false });
import Footer from '../footer/page';
import LeftSidebar from '../leftSidebar/page';


const Skills = () => {
    return (
        <div id={style.mainbg} className=" pt-5 pb-5 d-flex justify-content-center">

            <LeftSidebar></LeftSidebar>

            <div id={style.mainContnent} className="w-50 marketing" bis_skin_checked="1">

                <Header></Header>

                <div className="row shadow-lg p-3 mb-5 rounded d-flex justify-content-center  rounded-4  animate__animated animate__backInDown" bis_skin_checked="1">

                    <div className="mt-5 mb-5 d-flex justify-content-center animate__animated animate__backInDown">
                        <div className="col-lg-4 rounded-4 shadow-lg px-3 py-1 w-50 rounded" bis_skin_checked="1">
                            <div id="skills" className="col-lg-4 w-100 d-flex justify-content-center " bis_skin_checked="1">
                                <h2 className="fw-normal text-white mt-1">Skills</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="featurette-divider text-white" />

                <div className="row featurette bg-body bg-opacity-10 rounded-4 shadow-lg p-3 mb-5 mt-5 rounded" bis_skin_checked="1">
                    <div className="container my-5">
                        <div className="row ">

                            <div id={style.skillsColumns} className="col-md-6 d-flex align-items-center flex-column">
                                <div className="d-flex flex-column align-items-center">
                                    <h3 className="text-white">Languages</h3>
                                    <ul className="list-unstyled text-center">
                                        <li className="text-white-50">HTML</li>
                                        <li className="text-white-50" >CSS</li>
                                        <li className="text-white-50">JavaScript</li>
                                        <li className="text-white-50">TypeScript</li>
                                        <li className="text-white-50">PHP</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Libraries Column */}
                            <div id={style.skillsColumns} className="col-md-6 d-flex align-items-center flex-column">
                                <div className="d-flex flex-column align-items-center" >
                                    <h3 className="text-white">Preprocessors</h3>
                                    <ul className="list-unstyled text-center">
                                        <li className="text-white-50">SCSS</li>
                                        <li className="text-white-50">Pug</li>
                                    </ul>
                                </div>
                            </div>



                            <div id={style.skillsColumns} className="col-md-6 d-flex align-items-center flex-column">
                                <div className="d-flex flex-column align-items-center">
                                    <h3 className="text-white">Libraries</h3>
                                    <ul className="list-unstyled text-center">
                                        <li className="text-white-50">React</li>
                                        <li className="text-white-50">MobX</li>
                                    </ul>
                                </div>
                            </div>

                            <div id={style.skillsColumns} className="col-md-6 d-flex align-items-center flex-column">
                                <div className="d-flex flex-column align-items-center">
                                    <h3 className="text-white">Frameworks</h3>
                                    <ul className="list-unstyled text-center">
                                        <li className="text-white-50">React Native</li>
                                        <li className="text-white-50">Vue.js</li>
                                        <li className="text-white-50">Next.js</li>
                                        <li className="text-white-50">Bootstrap</li>
                                        <li className="text-white-50">Tailwind CSS</li>
                                        <li className="text-white-50">Material-UI</li>
                                        <li className="text-white-50">WordPress</li>
                                    </ul>
                                </div>
                            </div>

                            <div id={style.skillsColumns} className="col-md-6 d-flex align-items-center flex-column">
                                <div className="d-flex flex-column align-items-center">
                                    <h3 className="text-white">Tools</h3>
                                    <ul className="list-unstyled text-center">
                                        <li className="text-white-50">Git</li>
                                        <li className="text-white-50">Visual Studio Code</li>
                                        <li className="text-white-50">Webpack</li>
                                        <li className="text-white-50">Gulp</li>
                                        <li className="text-white-50">Jira</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <hr className="featurette-divider text-white" />

                <Footer></Footer>

                {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> */}

            </div >
            <div id={style.leftSidebar} className=" d-flex rounded-4 shadow-lg p-3 rounded opacity-100 h-50 m-3 position-sticky pb-5 bg-body bg-opacity-10" bis_skin_checked="1">
                <hr className="text-white mt-5" />
                <a id={style.navigatebuttonheader} href="#skills" className="nav-link text-white mb-3 ">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                    Skills
                </a>
                <a id={style.navigatebuttonheader} href="#contactinfo" className="nav-link text-white">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#contact"></use></svg>
                    Contact
                </a>
                <hr className="text-white" />
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </div >


    );
}
export default Skills;
