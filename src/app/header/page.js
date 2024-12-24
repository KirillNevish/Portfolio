"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../page.module.css';
import ProjectsDropdown from '../dropDown/page';
import '../globals.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {
    return (
        <>
            <div id={style.blurbg} className="d-flex align-items-end position-sticky top-0 z-3 rounded-4 shadow-lg p-3 mb-5 rounded opacity-100 bg-body bg-opacity-10">
                <button id={style.togglebutton} class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
                    <div id={style.menusidebarbutton} className="w-100">
                        <img id={style.menuicon} src="/circle.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="40" height="40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </button>
                <h1 className="featurette-heading fw-normal lh-1 text-white align-self-end">Portfolio</h1>
                <div id={style.navigateheader} className="w-100 d-flex">
                    <div className=" w-100 d-flex justify-content-end align-items-center">


                        <ProjectsDropdown></ProjectsDropdown>
                    </div>
                </div>

            </div>


            <hr className="featurette-divider mb-5 text-white" />
            {/*sidebar */}
            <div className=" offcanvas offcanvas-start w-75" tabIndex="-1" id="sidebar">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="sidebarLabel"></h5>
                    <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close">
                    </button>
                </div>
                <div className="offcanvas-body">
                    <div className="d-flex flex-column flex-shrink-0 p-3 " >

                        <hr className="text-white" />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <a id={style.navigatebuttonheader} href="/" className="nav-link text-white mx-4">

                                    About me
                                </a>
                            </li>
                            <li className="nav-item">
                                <a id={style.navigatebuttonheader} href="/skills" className="nav-link text-white mx-4">

                                    Skills
                                </a>
                            </li>
                            <li className="nav-item">
                                <a id={style.navigatebuttonheader} href="/cources" className="nav-link text-white mx-4">

                                    Cources
                                </a>
                            </li>
                            <hr className="text-white" />
                            <li className="nav-item text-white mt-2 mb-2 pb-2 d-flex justify-content-between">
                                <h4>Projects:</h4>
                                <svg id={style.navigatebuttonheader} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                                    <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                                </svg>
                            </li>
                            <li className="nav-item">
                                <a id={style.navigatebuttonheader} href="https://myshopreact112.netlify.app" target="_blank" className="nav-link text-white text-decoration-underline mx-4">

                                    Clothing Store
                                </a>
                            </li>
                            <li className="nav-item">
                                <a id={style.navigatebuttonheader} href="https://lovelycookingrecipes.netlify.app/" target="_blank" className="nav-link text-white text-decoration-underline mx-4">

                                    Cooking recipes
                                </a>
                            </li>
                        </ul>
                        <hr className="text-white" />
                    </div>
                </div>
                <script src='bootstrap/dist/js/bootstrap.bundle.min'></script>

            </div >
            {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> */}
        </>
    );
}
export default Header;