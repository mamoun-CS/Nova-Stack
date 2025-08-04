import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="text-6xl font-bold text-blue-600">404</div>
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="text-gray-600">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild size="lg">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}