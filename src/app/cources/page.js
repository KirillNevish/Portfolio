"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../page.module.css';
import 'animate.css';
// import Header from '../header/page';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('../header/page'), { ssr: true });
import Footer from '../footer/page';
import LeftSidebar from '../leftSidebar/page';

const Cources = () => {

    return (
        <div id={style.mainbg} className=" pt-5 pb-5 d-flex justify-content-center">
            <div id={style.blurContainer}></div>

            <LeftSidebar></LeftSidebar>

            <div id={style.mainContnent} className="w-50 marketing z-1" bis_skin_checked="1">

                <Header></Header>

                <div className="row shadow-lg p-3 mb-5 rounded d-flex justify-content-center animate__animated animate__backInDown rounded-4 bg-body bg-opacity-10" bis_skin_checked="1">

                    <div className="mt-5 mb-5 d-flex justify-content-center animate__animated animate__backInDown">
                        <div className="col-lg-4 rounded-4 shadow-lg px-3 py-1 w-50 rounded" bis_skin_checked="1">
                            <div id="cources" className="col-lg-4 w-100 d-flex justify-content-center " bis_skin_checked="1">
                                <h2 className="fw-normal text-white mt-1">Cources</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="featurette-divider text-white" />

                <div className="row featurette bg-body bg-opacity-10 rounded-4 shadow-lg p-3 mb-5 mt-5 rounded" bis_skin_checked="1">
                    <div className="container my-5" >
                        <div id={style.aboutMeInfo} className="col-md-7 mt-2 d-flex flex-column align-items-center text-align-center w-50 rounded-4 shadow-lg rounded opacity-100" bis_skin_checked="1">
                            <div className=" mt-2 rounded-4 d-flex justify-content-center" bis_skin_checked="1">
                                <a href="/Kirill-Nevishniy.avif" target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center">
                                    <img src="/Kirill-Nevishniy.avif" width="60%" className="cursor-pointer rounded-4" title="Certificate" />
                                </a>
                            </div>
                            <h2 className="featurette-heading fw-normal lh-1 text-white fs-4 mt-2">Prog Academy</h2>
                            <span className="text-white fs-5 mb-2">Front-End Development</span>
                        </div>

                    </div>
                </div>

                <hr className="featurette-divider text-white" />

                <Footer></Footer>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
            </div >
            <div id={style.leftSidebar} className=" d-flex rounded-4 shadow-lg p-3 rounded opacity-100 h-50 m-3 position-sticky pb-5 bg-body bg-opacity-10" bis_skin_checked="1">
                <hr className="text-white mt-5" />
                <a id={style.navigatebuttonheader} href="#cources" className="nav-link text-white mb-3 ">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                    Cources
                </a>
                <a id={style.navigatebuttonheader} href="#contactinfo" className="nav-link text-white">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#contact"></use></svg>
                    Contact
                </a>
                <hr className="text-white" />
            </div>
        </div >

    );
}
export default Cources; 