/**
 * Container Component
 *
 * Reusable max-width wrapper for consistent layout across pages
 * Provides centered content with max-width constraint of 1440px
 */

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`max-w-[1440px] mx-auto ${className}`}>{children}</div>
  );
}
