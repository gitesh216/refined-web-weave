import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotAvailable = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8 max-w-md mx-auto">
        <div className="text-6xl mb-4">🚧</div>
        <h1 className="text-3xl font-bold mb-4">
          Live Demo Not Available
        </h1>
        <p className="text-muted-foreground mb-8">
          This project is currently under development or not publicly accessible.
          Please check back later or visit the GitHub repository for more information.
        </p>
        <Button asChild className="gap-2">
          <a href="/">
            <Home className="h-4 w-4" />
            Back to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotAvailable;