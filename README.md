# News Portal

A web-based news portal built with Next.js and TypeScript, integrating a free News API to fetch and display news articles dynamically.

## About the Project

News Portal is a web development practice project created to explore API integration and learn how to fetch, process, and display external data using Axios.

The project uses a free News API to retrieve news articles and display them through a structured user interface. It helped me gain practical experience working with REST APIs, handling API responses, and integrating external services into a Next.js application.

## Technologies Used

- **Next.js** – React framework for building the application.
- **React.js** – Component-based user interface development.
- **TypeScript** – Type-safe JavaScript development.
- **Axios** – Making HTTP requests and communicating with external APIs.
- **Tailwind CSS** – Styling and layout.

## Features

- Fetching news articles from an external News API.
- Axios-based API integration.
- Dynamic news content rendering.
- Reusable React components.
- Next.js App Router architecture.
- TypeScript for improved code maintainability.

## Project Structure

```text
News-Portal/
│
├── app/
│   ├── (site)/
│   │   └── NEWS_Detail/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── Content.tsx
│   │   └── Topbar.tsx
│   │
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.tsx
│
├── public/                  # Static assets
│
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
└── postcss.config.mjs
```

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- Node.js
- npm
- News API access (if an API key is required)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/akhileshbhatt049/News-Portal.git
   ```

2. Navigate to the project directory:

   ```bash
   cd News-Portal
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure your News API credentials if required. Store API keys in environment variables rather than directly in the source code.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit:

   ```text
   http://localhost:3000
   ```

## Learning Objectives

Through this project, I practiced:

- Integrating third-party REST APIs.
- Making HTTP requests using Axios.
- Working with asynchronous JavaScript.
- Handling API responses and displaying dynamic data.
- Using React components in Next.js.
- Working with TypeScript in a frontend application.

## Author

**Akhilesh Bhatt**

- GitHub: [@akhileshbhatt049](https://github.com/akhileshbhatt049)

---

This project is part of my continuous learning journey in frontend and web development.

**Thanks for visiting!**
