# Yoloo! Project Documentation: A-to-Z Breakdown

## 1. Project Vision & Design
**Yoloo!** is a quick-commerce fashion platform centered in Hyderabad, India. The primary goal of the web presence is to serve as a high-conversion showcase and a gateway to the mobile application.

*   **Design Philosophy**: Modern, high-energy, and professional. It uses a "Midnight Blue" primary theme with high-contrast accents (yellow, lime, pink) for specific fashion categories.
*   **Visual Language**: Relies on high-quality editorial fashion photography (referenced via placeholders) and fluid animations (Framer Motion) to evoke a premium lifestyle feel.
*   **Mobile-First**: The UI is designed to feel native on mobile devices, emphasizing the 30–120 minute delivery promise.

---

## 2. Technical Architecture
The app is built on a modern, full-stack React framework with a serverless backend.

*   **Framework**: Next.js 15 (App Router).
*   **Language**: TypeScript for type safety across AI flows and database operations.
*   **Styling**: Tailwind CSS with Shadcn/UI components.
*   **Backend-as-a-Service**: Firebase (Firestore for database, App Hosting for deployment).
*   **AI Engine**: Google Genkit (integrated with Gemini) for generative styling and size recommendations.
*   **State Management**: React Hooks (useState, useEffect) and Next.js Server Actions for data mutations.

---

## 3. Folder Structure
```text
src/
├── ai/                 # Genkit configuration and AI flows (Size/Style)
├── app/                # Next.js App Router (Pages, Layouts, Server Actions)
│   ├── (legal)/        # Legal and policy pages (Privacy, Terms, etc.)
│   ├── admin/          # Password-protected admin dashboard
│   ├── download/       # Smart redirector for App/Play Store
│   ├── men/women/etc   # Category-specific gallery pages
│   └── actions.ts      # Centralized Server Actions for the project
├── components/         # Atomic UI components
│   ├── layout/         # Header, Footer, Announcement Bar
│   ├── sections/       # Modular home page sections (Hero, Story, etc.)
│   └── ui/             # Shadcn/UI base components
├── firebase/           # Firebase initialization and standard hooks
├── lib/                # Utilities, constants, and data stores (products.ts)
└── public/             # Static assets (logos, banner images)
```

---

## 4. Feature Modules
*   **Smart Link Redirection**: A dedicated `/download` route that detects the user's OS (iOS/Android) and redirects them to the correct store while logging the click.
*   **AI Stylist**: Two Genkit-powered flows:
    *   *Size Recommendation*: Suggests fit based on height/weight.
    *   *Style Suggestion*: Provides personalized fashion advice.
*   **Quick Commerce Brand Display**: A specialized `BrandCarousel` and `ProductMarquee` to showcase partner brands.
*   **Admin Inbox**: A secure area to view, read/unread, and delete messages sent via the contact form.
*   **Visitor Analytics**: A real-time visitor counter using Firestore `onSnapshot`.

---

## 5. Database Structure (Firestore)
The project uses a NoSQL structure optimized for speed and simple tracking:

*   **`messages/`**:
    *   `name`: string
    *   `email`: string
    *   `message`: string
    *   `createdAt`: timestamp
    *   `isRead`: boolean
*   **`counters/`**:
    *   `visitors`: { `count`: number }
*   **`tracking/`**:
    *   `appStoreRedirects`: { `apple`: number, `google`: number }

---

## 6. API & Integration Flow
1.  **Server Actions**: Instead of traditional REST endpoints, the app uses `src/app/actions.ts` to handle form submissions and database increments.
2.  **Internal AI API**: React components call `aiSizeRecommendation()` (Server Action) which invokes the Genkit flow.
3.  **Third-Party**: WhatsApp FAB (Floating Action Button) for direct customer support.

---

## 7. User & Admin Flow
### User Flow:
1.  **Entry**: User lands on `HeroSection` or a category page.
2.  **Engagement**: User browses the interactive gallery or interacts with AI tools.
3.  **Conversion**: User clicks "Download App" → Redirected to `/download` → Device detected → Logged in Firestore → Redirected to App/Play Store.
4.  **Inquiry**: User submits a contact form (Customer or Brand inquiry).

### Admin Flow:
1.  **Access**: Admin navigates to `/admin`.
2.  **Auth**: Enter `ADMIN_PASSWORD` (verified via Server Action).
3.  **Management**: View incoming inquiries, toggle "Read" status, or delete spam.

---

## 8. Deployment & Planning
*   **Hosting**: Firebase App Hosting (configured via `apphosting.yaml`).
*   **Build Optimization**: Uses Next.js Turbopack for fast development and `next-sitemap` for SEO.
*   **Scalability**: The modular section design allows adding new fashion categories (e.g., "Kids" or "Home Decor") by simply adding a new route and updating `placeholder-images.ts`.

---

## 9. Overall Project Planning
*   **Phase 1 (Current)**: High-fidelity landing page, category showcases, legal compliance, and AI prototypes.
*   **Phase 2**: Expanding AI flows to include "Image-to-Style" (Genkit vision).
*   **Phase 3**: Integration of live inventory tracking (viewing real-time Hyderabad stock on the web).

This structure ensures the project is lightweight, secure, and ready for high-traffic Hyderabad fashion seasons.