"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../page.module.css';

const Footer = () => {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Phone number copied to clipboard: ' + text);
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <div className="row featurette bg-body bg-opacity-10 rounded-4 shadow-lg p-3  rounded mt-5" bis_skin_checked="1">
            <div className="col-md-7 mt-2  w-100 mb-3 " bis_skin_checked="1">
                <h2 id="contactinfo" className="featurette-heading fw-normal lh-1 text-white">Contact<span className="text-body-secondary"></span></h2>
                <div className="w-100 d-flex justify-content-center text-center ">
                    <div className=" w-75  pt-3 mt-2 text-center flex-row flex-wrap  d-flex justify-content-evenly">
                        <a className="lead text-white-50   link-offset-2 link-underline link-underline-opacity-0 text-center" href="mailto:kirillvish482@gmail.com">
                            <h5 id={style.navigatebuttonfooter}>gmail: nevishniykirill@gmail.com</h5>
                        </a>
                        <a className="lead text-white-50 link-offset-2 d-flex flew-nowrap link-underline link-underline-opacity-0 text-center" href="tell:+380951503677"
                            onClick={(e) => {
                                e.preventDefault();
                                copyToClipboard('+380 95 150 36 77');
                            }}
                        >
                            <h5 id={style.navigatebuttonfooter}>tell: +380 95 150 36 77</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;