import React from 'react';
import style from '../page.module.css'

const ProjectsDropdown = () => {
    return (
        <div id={style.dropButton} className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle bg-transparent border-0 fs-5 "
                type="button"
                id={style.navigatebuttonheader}
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                My Projects

            </button>

            {/* Dropdown menu */}
            <ul className="dropdown-menu border-0  bg-gradient bg-dark bg-opacity-50" aria-labelledby="projectsDropdown">
                <li>
                    <a
                        className="dropdown-item text-white"
                        href="https://myshopreact112.netlify.app"
                        target="_blank"
                        id={style.navigatebuttonheader}
                        rel="noopener noreferrer"
                    >
                        Clothing Store
                    </a>
                </li>
                <li>
                    <a
                        className="dropdown-item text-white"
                        href="https://lovelycookingrecipes.netlify.app"
                        target="_blank"
                        id={style.navigatebuttonheader}
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