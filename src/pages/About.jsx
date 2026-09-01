import React from "react";
import {
  ArrowRight,
  ExternalLink,
  Code2,
  Database,
  Cloud,
  ShieldCheck,
  ShoppingCart,
  Package,
  Mail,
  Smartphone,
  GitBranch,
  Server,
  Layers3,
  Lightbulb,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

import Button from "../components/Button";

const AboutPage = () => {
  return (
    <main className="bg-background text-foreground">
      {/* main section */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-20">
          {/* Content */}
          <div className="max-w-2xl animate-slide-up">
            <span className="mb-5 inline-flex rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-primary">
              About the Project
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Built from the <span className="text-primary">ground up.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
              A full-stack e-commerce application designed and developed to
              demonstrate how a modern online store works — from the frontend
              experience to the backend architecture.
            </p>

            {/* Developer intro */}
            <div className="mt-8 flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border bg-surface">
                <img
                  src="/images/developer.jpg"
                  alt="Developer"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h2 className="font-semibold text-foreground">Hi, I’m JJ</h2>

                <p className="mt-1 max-w-lg text-sm leading-6 text-muted">
                  I’m a developer focused on building practical web applications
                  with modern technologies. This project was built from scratch
                  to understand and implement a complete full-stack e-commerce
                  workflow.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button type="primary">
                View Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>

              <Button type="secondary">
                <SiGithub className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
            <img
              src="/images/about-developer.jpg"
              alt="Developer working on the Shoply project"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Project */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                About the Project
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                What is this project?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-muted">
                Shoply is a full-stack MERN e-commerce application built to
                simulate a real-world online store. Users can browse products,
                manage their cart, create orders, manage addresses, and interact
                with the application through a responsive frontend.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-muted">
                The project covers the complete development cycle — from
                designing the frontend and managing client-side state to
                building the REST API, database models, authentication, image
                handling, and business logic.
              </p>

              {/* Project highlights */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border border-border bg-background p-5">
                  <Layers3 className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 text-sm font-semibold">Full Stack</h3>
                  <p className="mt-1 text-xs text-muted">MERN Application</p>
                </div>

                <div className="rounded-xl border border-border bg-background p-5">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 text-sm font-semibold">
                    Real-World Flow
                  </h3>
                  <p className="mt-1 text-xs text-muted">Products & Orders</p>
                </div>

                <div className="rounded-xl border border-border bg-background p-5">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 text-sm font-semibold">Secure</h3>
                  <p className="mt-1 text-xs text-muted">Authentication</p>
                </div>
              </div>
            </div>

            {/* Project summary card */}
            <div className="rounded-2xl border border-border bg-secondary/50 p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface text-primary shadow-sm">
                <Code2 className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                What makes this project special?
              </h3>

              <p className="mt-3 leading-7 text-muted">
                This is not just a frontend UI. The application includes a
                working backend, database, authentication, product management,
                image uploads, order management, email notifications, and
                relationships between MongoDB collections.
              </p>

              <button className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary-hover">
                Explore the features
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* tech stack */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Technologies & Tools
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Tech Stack
            </h2>

            <p className="mt-4 leading-7 text-muted">
              Modern technologies and tools used to build the frontend, backend,
              database layer, external services, and development workflow.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {/* Frontend */}
            <div className="rounded-2xl border border-border bg-surface p-6">
              <Code2 className="h-6 w-6 text-primary" />

              <h3 className="mt-5 font-semibold">Frontend</h3>

              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>React</li>
                <li>React Router</li>
                <li>Redux Toolkit</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="rounded-2xl border border-border bg-surface p-6">
              <Server className="h-6 w-6 text-primary" />

              <h3 className="mt-5 font-semibold">Backend</h3>

              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Mongoose</li>
                <li>JWT Authentication</li>
              </ul>
            </div>

            {/* Services */}
            <div className="rounded-2xl border border-border bg-surface p-6">
              <Cloud className="h-6 w-6 text-primary" />

              <h3 className="mt-5 font-semibold">Services</h3>

              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>Cloudinary</li>
                <li>Email Service</li>
                <li>Image Storage</li>
                <li>Email Notifications</li>
              </ul>
            </div>

            {/* Development */}
            <div className="rounded-2xl border border-border bg-surface p-6">
              <GitBranch className="h-6 w-6 text-primary" />

              <h3 className="mt-5 font-semibold">Development</h3>

              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>Git</li>
                <li>GitHub</li>
                <li>Postman</li>
                <li>REST API Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* archietecture */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              How It Works
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Architecture <span className="text-primary">Overview</span>
            </h2>

            <p className="mt-4 leading-7 text-muted">
              A simplified view of how the frontend, API, backend, database, and
              external services communicate with each other.
            </p>
          </div>

          {/* Architecture flow */}
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-surface p-6">
            <div className="flex min-w-[900px] items-center justify-between gap-4">
              <div className="flex w-36 flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">User</h3>
                <p className="mt-1 text-xs text-muted">Browser</p>
              </div>

              <ArrowRight className="shrink-0 text-primary" />

              <div className="flex w-36 flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">React</h3>
                <p className="mt-1 text-xs text-muted">Frontend UI</p>
              </div>

              <ArrowRight className="shrink-0 text-primary" />

              <div className="flex w-36 flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <Layers3 className="h-6 w-6" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">API</h3>
                <p className="mt-1 text-xs text-muted">REST Requests</p>
              </div>

              <ArrowRight className="shrink-0 text-primary" />

              <div className="flex w-36 flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">Express</h3>
                <p className="mt-1 text-xs text-muted">Controllers & Logic</p>
              </div>

              <ArrowRight className="shrink-0 text-primary" />

              <div className="flex w-36 flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">MongoDB</h3>
                <p className="mt-1 text-xs text-muted">Database</p>
              </div>

              <ArrowRight className="shrink-0 text-primary" />

              <div className="flex w-36 flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <Cloud className="h-6 w-6" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">Cloudinary</h3>
                <p className="mt-1 text-xs text-muted">Image Storage</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button type="primary">
              View Full Architecture
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* features */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Key Features
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What You Can Do
            </h2>

            <p className="mt-4 leading-7 text-muted">
              Core functionality implemented across the e-commerce application.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Authentication */}
            <div className="rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <ShieldCheck className="h-6 w-6 text-primary" />

              <h3 className="mt-5 font-semibold">Authentication</h3>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                <li>• Register / Login</li>
                <li>• Protected routes</li>
                <li>• Logout & user state</li>
              </ul>
            </div>

            {/* Products */}
            <div className="rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Package className="h-6 w-6 text-primary" />

              <h3 className="mt-5 font-semibold">Products</h3>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                <li>• Product listing & details</li>
                <li>• Product CRUD</li>
                <li>• Image uploads</li>
              </ul>
            </div>

            {/* Cart */}
            <div className="rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <ShoppingCart className="h-6 w-6 text-primary" />

              <h3 className="mt-5 font-semibold">Cart</h3>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                <li>• Add / remove products</li>
                <li>• Quantity management</li>
                <li>• Total calculation</li>
              </ul>
            </div>

            {/* Orders */}
            <div className="rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Package className="h-6 w-6 text-primary" />

              <h3 className="mt-5 font-semibold">Orders</h3>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                <li>• Order creation</li>
                <li>• Address management</li>
                <li>• Order status & history</li>
              </ul>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Mail className="h-6 w-6 text-primary" />

              <h3 className="mt-5 font-semibold">Email Notifications</h3>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                <li>• Welcome email</li>
                <li>• Order confirmation</li>
                <li>• Password-related emails</li>
              </ul>
            </div>

            {/* Database */}
            <div className="rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Database className="h-6 w-6 text-primary" />

              <h3 className="mt-5 font-semibold">Database Relationships</h3>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                <li>• User ↔ Orders</li>
                <li>• Products ↔ Orders</li>
                <li>• Users ↔ Addresses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENGINEERING DECISIONS / TAKEAWAYS
      ========================================================= */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                What I Learned
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Key Decisions & <span className="text-primary">Takeaways</span>
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-muted">
                This project helped me understand how the different layers of a
                full-stack application work together. I implemented the API,
                authentication, database models, controllers, file handling,
                image uploads, relationships, and order workflow.
              </p>

              <div className="mt-8">
                <Button type="primary">
                  View on GitHub
                  <SiGithub className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Decisions */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5">
                <Database className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-sm font-semibold">Why MongoDB?</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Flexible schemas and document-based data fit the application's
                  product and order structures.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5">
                <Layers3 className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-sm font-semibold">
                  Why Redux Toolkit?
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Centralized state management keeps authentication, products,
                  cart, and other shared state predictable.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5">
                <Server className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-sm font-semibold">Why REST API?</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  A clean API boundary keeps the frontend and backend
                  independently structured and maintainable.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5">
                <Cloud className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-sm font-semibold">
                  How Are Images Handled?
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Product images are uploaded and managed through Cloudinary
                  instead of storing image files directly in MongoDB.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5">
                <Mail className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-sm font-semibold">
                  How Are Emails Handled?
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Transactional email templates are used for relevant user and
                  order events.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5">
                <Lightbulb className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-sm font-semibold">
                  What Was the Goal?
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Build a complete application rather than only a frontend
                  mockup, while understanding each layer of the stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl bg-primary px-8 py-10 text-white sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <div>
            <div className="flex items-center gap-3">
              <Code2 className="h-7 w-7" />

              <h2 className="text-xl font-semibold">
                Want to see the actual code?
              </h2>
            </div>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100">
              Explore the source code, architecture, implementation details, and
              development process on GitHub.
            </p>
          </div>

          <Button
            type="secondary"
            className="shrink-0 border-0 bg-white hover:bg-blue-50"
          >
            <SiGithub className="mr-2 h-4 w-4" />
            View GitHub
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
