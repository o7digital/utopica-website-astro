import { forwardRef } from 'react';
import { Link } from '@/components/ui/Link';
import { Button, type ButtonProps } from '@/components/ui/button';

interface TrackedCTAButtonProps extends ButtonProps {
  href: string;
  trackingLocation: string;
  children: React.ReactNode;
  target?: string;
}

export const TrackedCTAButton = forwardRef<HTMLButtonElement, TrackedCTAButtonProps>(
  ({ href, trackingLocation, children, target, ...props }, ref) => {
    const handleClick = () => {
      // Tracking removed per client request
    };

    return (
      <Button ref={ref} asChild {...props}>
        <Link 
          href={href} 
          target={target}
          onClick={handleClick}
        >
          {children}
        </Link>
      </Button>
    );
  }
);

TrackedCTAButton.displayName = 'TrackedCTAButton';