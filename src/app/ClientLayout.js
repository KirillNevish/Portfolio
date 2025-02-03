"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Ensure Bootstrap styles are loaded
import "./globals.css";

export default function ClientLayout({ children }) {
    const [isPageLoading, setIsPageLoading] = useState(true); // Start as loading
    const router = useRouter();

    useEffect(() => {
        const handleComplete = () => {
            setIsPageLoading(false);

            // ✅ Ensure Bootstrap JavaScript is reloaded
            import("bootstrap/dist/js/bootstrap.bundle.min.js")
                .then((bootstrap) => {
                    document.querySelectorAll(".dropdown-toggle").forEach((dropdown) => {
                        new bootstrap.Dropdown(dropdown); // ✅ Initialize Bootstrap dropdowns
                    });
                })
                .catch((err) => console.error("Bootstrap load error:", err));
        };

        // Wait 1s to allow full page load, then remove loading screen
        const timeout = setTimeout(() => {
            handleComplete();
        }, 10);

        window.addEventListener("load", handleComplete);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener("load", handleComplete);
        };
    }, []);

    return (
        <div>
            {isPageLoading && (
                <div id="preloader">
                    <div className="spinner"></div>
                </div>
            )}
            {!isPageLoading && children}
        </div>
    );
}

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation"; // ✅ Correct import for App Router
// import "./globals.css";

// export default function ClientLayout({ children }) {
//     const [isPageLoading, setIsPageLoading] = useState(false);
//     const router = useRouter();

//     useEffect(() => {
//         const handleComplete = () => {
//             setIsPageLoading(false);

//             // ✅ Dynamically reinitialize Bootstrap after 1s
//             setTimeout(() => {
//                 import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
//                     const dropdownElementList = document.querySelectorAll(".dropdown-toggle");
//                     dropdownElementList.forEach((dropdownToggle) => {
//                         new bootstrap.Dropdown(dropdownToggle);
//                     });
//                 });
//             }, 1000); // Wait 1 second after loading
//         };

//         window.addEventListener("load", handleComplete);
//         return () => window.removeEventListener("load", handleComplete);
//     }, [])

//     return (
//         <div>
//             {isPageLoading && (
//                 <div id="preloader">
//                     <div className="spinner"></div>
//                 </div>
//             )}
//             {!isPageLoading && children}
//         </div>
//     );
// }