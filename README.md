# Nova-Stack 🚀

Welcome to **Nova-Stack**, a modern web application built with best-in-class technologies.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Routing**: [React Router](https://reactrouter.com/)
- **State/Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)
- **Forms & Validation**: React Hook Form + Zod
- **Backend/BaaS**: [Supabase](https://supabase.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## ⚡ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- `pnpm` (version 8+ recommended)

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd Nova-Stack
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add your Supabase credentials and other required variables based on `.env.example` (if provided).

### Running the App

Start the development server:

```bash
pnpm run dev
```

The application will be available at `http://localhost:8080` (or the port specified by Vite).

### Building for Production

To create a production-optimized build:

```bash
pnpm run build
```

To preview the production build locally:

```bash
pnpm run preview
```

## 📁 Project Structure

This project follows a standard modern React application structure:

- `src/` - Main source code directory
  - `components/` - Reusable UI components (including shadcn/ui)
  - `pages/` - Application pages corresponding to routes
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions and API integrations
  - `assets/` - Static assets like images and global styles

## 🎨 UI & Styling

The project uses **Tailwind CSS** for utility-first styling, combined with **shadcn/ui** for beautifully designed, accessible, and customizable components.

## 🤝 Contributing

Contributions are welcome! Please follow the standard fork-and-pull-request workflow.

## 📝 License

This project is licensed under the MIT License.
