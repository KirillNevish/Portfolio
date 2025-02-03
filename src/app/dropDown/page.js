
import React from "react";
import style from '../page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProjectsDropdown = () => {
    return (
        <div id={style.dropButton} className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle bg-transparent border-0 fs-5"
                type="button"
                id={style.navigatebuttonheader}
                data-bs-toggle="dropdown"
                data-bs-target="#dropdownMenu"
                aria-expanded="false"
            >
                My Projects
            </button>

            {/* Dropdown menu */}
            <ul id={style.dropdownMenu} className="dropdown-menu border-0 bg-opacity-50">
                <li>
                    <a
                        className="dropdown-item text-white"
                        href="https://myshopreact112.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        id={style.navigatebuttonheader}
                    >
                        Clothing Store
                    </a>
                </li>
                <li>
                    <a
                        className="dropdown-item text-white"
                        href="https://lovelycookingrecipes.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        id={style.navigatebuttonheader}
                    >
                        Cooking recipes
                    </a>
                </li>
            </ul>
            <script src="bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        </div>

    );
};

export default ProjectsDropdown;