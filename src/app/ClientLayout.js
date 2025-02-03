"use client"; // Ensure this runs on the client

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router
import "./globals.css";

export default function ClientLayout({ children }) {
    const [isPageLoading, setIsPageLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsPageLoading(false); // Show loader

        const handleComplete = () => {
            setIsPageLoading(true); // Hide loader
        };

        // Fallback to prevent infinite loading (max 2 seconds)
        const timeout = setTimeout(() => setIsPageLoading(false), 10);

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

// "use client"; // Ensure this runs on the client

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation"; // ✅ Correct import for App Router
// import "./globals.css";

// export default function ClientLayout({ children }) {
//     const [isPageLoading, setIsPageLoading] = useState(false);
//     const router = useRouter(); // ✅ Now using the correct router for App Router

//     useEffect(() => {
//         setIsPageLoading(true); // Show loader when navigating

//         const handleComplete = () => {
//             setIsPageLoading(false); // Hide loader when page is fully loaded
//         };

//         window.addEventListener("load", handleComplete); // Detect full page load

//         return () => window.removeEventListener("load", handleComplete);
//     }, [router]);

//     return (
//         <div>
//             {!isPageLoading && (
//                 <div id="preloader">
//                     <div className="spinner"></div>
//                 </div>
//             )}
//             {isPageLoading && children}
//         </div>
//     );
// }