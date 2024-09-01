import React from 'react';
import style from '../page.module.css'

const ProjectsDropdown = () => {
    return (
        <div id={style.dropButton} className="dropdown">
            {/* Button to toggle the dropdown */}
            <button
                className="btn btn-secondary dropdown-toggle bg-transparent border-0 fs-5 "
                type="button"
                id="projectsDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                My Projects

            </button>

            {/* Dropdown menu */}
            <ul className="dropdown-menu bg-dark bg-gradient" aria-labelledby="projectsDropdown">
                {/* Dropdown items for each project */}
                <li>
                    <a
                        className="dropdown-item text-white"
                        href="https://myshopreact112.netlify.app"
                        target="_blank"
                        id={style.dropDownOption}
                        rel="noopener noreferrer"
                    >
                        Clothing Store
                    </a>
                </li>
                {/* Add more projects here */}
                <li>
                    <a
                        className="dropdown-item text-white"
                        href="https://exampleproject2.netlify.app"
                        target="_blank"
                        id={style.dropDownOption}
                        rel="noopener noreferrer"
                    >
                        Cooking recipes
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ProjectsDropdown;