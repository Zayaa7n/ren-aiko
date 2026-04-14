/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Navbar, Footer } from "@/src/components/layout/Common";
import Home from "@/src/pages/Home";
import About from "@/src/pages/About";
import Work from "@/src/pages/Work";
import Services from "@/src/pages/Services";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
