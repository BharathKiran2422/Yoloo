# Yoloo! - Fashion Made Easy

This is the official website for Yoloo!, a quick-commerce fashion platform based in Hyderabad, India. The website serves as a showcase for our brand, collections, and our unique value proposition of 30–120 minute fashion delivery.

While this website beautifully displays our products and story, all purchases and primary user interactions (like loyalty programs and order tracking) are directed to our mobile application.

## Key Features

- **Dynamic Homepage**: A comprehensive overview of our brand, with sections for featured products, categories, our story, and more.
- **Product & Category Galleries**: Browse our curated collections for Men, Women, Sneakers, and Accessories.
- **AI-Powered Assistance**:
    - **Size Recommendation**: An AI flow to help users find the perfect fit.
    - **Style Suggestions**: Personalized style advice based on user inputs.
- **Informational Pages**: Clear and accessible policies for shipping, returns, privacy, and more.
- **Contact Form & Admin Panel**: A fully functional contact form that stores messages in Firestore, with a password-protected admin page to view and manage them.
- **Dark Mode**: A sleek, user-toggleable dark theme.
- **Fully Responsive Design**: Optimized for a seamless experience on all devices.

## Tech Stack

- **Framework**: Next.js 15 (with App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Backend & Database**: Firebase (Firestore for contact messages and visitor counter)
- **Generative AI**: Google Genkit

## Getting Started

To get the project up and running on your local machine, follow these steps.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```
3.  Install the dependencies. The project uses `patch-package`, so it's recommended to use `npm`.
    ```bash
    npm install
    ```
4.  Set up your environment variables by creating a `.env` file at the root of the project. Copy the contents of `.env.example` (if it exists) or add your Firebase configuration details:
    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=...
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
    NEXT_PUBLIC_FIREBASE_APP_ID=...
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=...

    # This is for the admin panel login
    ADMIN_PASSWORD=your_secret_admin_password
    ```

### Running the Development Server

Execute the following command to start the local development server:

```bash
npm run dev
```

The application will be available at `https://www.yoloo.co.in/`, `http://localhost:9002`.

## Available Scripts

- `npm run dev`: Starts the Next.js development server with Turbopack.
- `npm run build`: Creates a production-ready build of the application.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase using Next.js's built-in ESLint configuration.
- `npm run typecheck`: Runs the TypeScript compiler to check for type errors.
