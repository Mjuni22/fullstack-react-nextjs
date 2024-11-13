Fullstack Next.js 14 Project
This is a Next.js project bootstrapped with create-next-app. This application is built as a full-stack web application using PostgreSQL, styled with Tailwind CSS, and includes authentication with NextAuth.js. It is deployed on Vercel and designed to provide a streamlined and scalable experience.

Project Features
Next.js 14: Utilizes the latest Next.js version with optimized features for server-side rendering and static site generation.
PostgreSQL with Prisma: Relational database for persistent data storage, managed with Prisma ORM.
Tailwind CSS: Utility-first CSS framework for flexible, responsive design.
NextAuth.js with Prisma Adapter: Provides robust authentication options, including third-party providers and custom sessions.
TypeScript: Fully typed codebase for improved developer experience and error handling.
Vercel Deployment: Easily deploy on Vercel, optimized for Next.js applications.
Technology Stack
This project incorporates a robust stack for a modern, secure, and high-performance web application:

Next.js (v14.2.17)
React (v18) and React DOM
Prisma (v5.22.0) with @auth/prisma-adapter (v2.7.3)
NextAuth.js (v5.0.0-beta.25)
Tailwind CSS (v3.4.1)
TypeScript (v5)
Zod: For schema validation
bcrypt-ts: For password hashing
Getting Started
Prerequisites
Ensure the following are installed:

Node.js
PostgreSQL
Yarn or npm
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Mjuni22/fullstack-react-nextjs.git
cd your-repo-name
Install dependencies:

bash
Copy code
npm install

# or

yarn install
Set up the database:

Create a PostgreSQL database.
Configure the .env file with your PostgreSQL connection string and NextAuth secret.
Run Prisma migrations and generate client:

bash
Copy code
npx prisma migrate dev
Start the development server:

bash
Copy code
npm run dev

# or

yarn dev
Open http://localhost:3000 in your browser to see the application.

Environment Variables
Add a .env.local file to the project root and include the following variables:

plaintext
Copy code
AUTH_SECRET="Your_auth_secret"
AUTH_GOOGLE_ID="Your_auth_google_id"
AUTH_GOOGLE_SECRET="Your_auth_google_secret"

Available Scripts
npm run dev: Starts the development server.
npm run build: Builds the application for production.
npm run start: Starts the production server.
npm run lint: Runs ESLint on the project.
npm run postinstall: Generates the Prisma client after installation.
Folder Structure
app: Contains application pages and routing.
styles: Contains global styles and Tailwind CSS configurations.
lib: Utility functions and Prisma configuration files.
Authentication with NextAuth.js
Authentication is managed using NextAuth.js with Prisma Adapter for seamless integration with PostgreSQL. You can configure additional providers such as Google, GitHub, or custom email/password login in pages/api/auth/[...nextauth].ts.

Schema Validation with Zod
Zod is used for schema validation, ensuring that data structures conform to expected formats. This reduces runtime errors and improves data consistency.

Password Hashing with bcrypt-ts
Password handling uses bcrypt-ts for secure password hashing, ensuring user credentials are stored securely.

Deployment on Vercel
To deploy on Vercel:

Push your project to a GitHub repository.
Go to Vercel, import the repository, and set up environment variables in Vercel’s settings.
Deploy the application with Vercel's interface.
Resources
Next.js Documentation
PostgreSQL Documentation
Tailwind CSS Documentation
Auth.js Documentation
Prisma Documentation
License
This project is licensed under the MIT License. See the LICENSE file for more details.
