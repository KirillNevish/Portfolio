'use client';


import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const loaderDelay = setTimeout(() => setShowLoader(true), 200);

    const handleComplete = () => {
      clearTimeout(loaderDelay);
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleComplete();
    } else {
      window.addEventListener("load", handleComplete);
      return () => window.removeEventListener("load", handleComplete);
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoading && showLoader && (
          <div id="preloader">
            <div className="spinner"></div>
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
