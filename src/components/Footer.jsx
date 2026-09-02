import React from "react";
import { Mail, MapPin } from "lucide-react";

import { CiGlobe, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Store JJ<span className="text-primary">.</span>
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              A modern full-stack e-commerce application built from the ground
              up using the MERN stack.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/jatinagrahari"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaGithub className="h-4 w-4" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/jatinagrahari"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
              >
                <CiLinkedin className="h-5 w-5" />
              </a>

              {/* Portfolio */}
              <a
                href="https://jatinagrahari.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
              >
                <CiGlobe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Shop
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  All Products
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  New Arrivals
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Best Sellers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Offers
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/jatinagrahari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Get in Touch
            </h3>

            <ul className="mt-5 space-y-4">
              {/* Email */}
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                <a
                  href="mailto:hello@jatinagrahari.com"
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  hello@jatinagrahari.com
                </a>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                <span className="text-sm leading-6 text-gray-400">India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Store JJ. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-2">
            <span>Created by</span>

            <a
              href="https://jatinagrahari.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-300 transition-colors duration-200 hover:text-primary"
            >
              Jatin Agrahari
            </a>

            <span>·</span>

            {/* GitHub */}
            <a
              href="https://github.com/jatinagrahari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jatin Agrahari GitHub"
              className="text-gray-400 transition-colors duration-200 hover:text-primary"
            >
              <FaGithub className="h-4 w-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/jatinagrahari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jatin Agrahari LinkedIn"
              className="text-gray-400 transition-colors duration-200 hover:text-primary"
            >
              <CiLinkedin className="h-5 w-5" />
            </a>

            {/* Portfolio */}
            <a
              href="https://jatinagrahari.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jatin Agrahari Portfolio"
              className="text-gray-400 transition-colors duration-200 hover:text-primary"
            >
              <CiGlobe className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
