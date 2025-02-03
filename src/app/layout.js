import { Inter } from "next/font/google";
import ClientLayout from "./ClientLayout"; // Import the client-side layout
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout> {/* Use the client component */}
      </body>
    </html>
  );
}

// 'use client';


// import { Inter } from "next/font/google";
// import "./globals.css";
// import { useEffect, useState } from 'react';

// const inter = Inter({ subsets: ["latin"] });


// export default function RootLayout({ children }) {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {

//     const handleComplete = () => {
//       setIsLoading(false);
//     };

//     if (document.readyState === "complete") {
//       handleComplete();
//     } else {
//       window.addEventListener("load", handleComplete);
//       return () => window.removeEventListener("load", handleComplete);
//     }
//   }, []);

//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {isLoading && (
//           <div id="preloader">
//             <div className="spinner"></div>
//           </div>
//         )}
//         {children}
//       </body>
//     </html>
//   );
// }
