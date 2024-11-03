"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../page.module.css';

const LeftSidebar = () => {
    return (
        <div className="position-sticky z-3 bg-body bg-opacity-10 h-50 m-3 rounded-4 shadow-lg rounded opacity-100  m-3 position-sticky" tabIndex="-1" id={style.rightSidebar}>
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarLabel"></h5>
            </div>
            <div className="offcanvas-body">
                <div className="d-flex flex-column flex-shrink-0 p-3 " >
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    </a>
                    <hr className="text-white" />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a id={style.navigatebuttonheader} href="/" className="nav-link text-white d-flex align-items-center">
                                <h5>About me</h5>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a id={style.navigatebuttonheader} href="/skills" className="nav-link text-white d-flex align-items-center">
                                <h5>Skills</h5>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a id={style.navigatebuttonheader} href="/cources" className="nav-link text-white d-flex align-items-center">
                                <h5>Cources</h5>
                            </a>
                        </li>
                        <hr className="text-white" />
                        <li className="nav-item text-white mt-2 mb-1 pb-2 d-flex justify-content-between">
                            <h4>Projects:</h4>
                            <svg id={style.navigatebuttonheader} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                            </svg>
                        </li>
                        <li className="nav-item">
                            <a id={style.navigatebuttonheader} href="https://myshopreact112.netlify.app" target="_blank" className="nav-link text-white text-decoration-underline">
                                Clothing Store
                            </a>
                        </li>
                        <li className="nav-item">
                            <a id={style.navigatebuttonheader} href="https://lovelycookingrecipes.netlify.app/" target="_blank" className="nav-link text-white text-decoration-underline">
                                Cooking recipes
                            </a>
                        </li>
                    </ul>
                    <hr className="text-white" />
                </div>
            </div>
        </div>
    )
}
export default LeftSidebar;