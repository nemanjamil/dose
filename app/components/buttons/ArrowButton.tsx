'use client';

/**
 * ArrowButton Component
 *
 * Reusable arrow button for navigation with left/right variants
 * Used in carousels and navigation across multiple pages
 */

interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  ariaLabel?: string;
  variant?: 'default' | 'compact';
}

export default function ArrowButton({
  direction,
  onClick,
  ariaLabel = direction === 'left' ? 'Previous' : 'Next',
  variant = 'default',
}: ArrowButtonProps) {
  const sizeClass = variant === 'compact' ? 'size-[40px]' : 'size-[44px] sm:size-[46px]';
  const iconSize = variant === 'compact' ? 20 : 24;

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.6)] transition-colors flex gap-[10px] items-center justify-center px-[11px] py-[10px] rounded-[99px] ${sizeClass} flex-shrink-0 shadow-[0px_10px_24px_0px_rgba(135,84,55,0.3)]`}
    >
      <svg
        className={`w-[${iconSize}px] h-[${iconSize}px]`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {direction === 'left' ? (
          <polyline points="15 18 9 12 15 6"></polyline>
        ) : (
          <polyline points="9 18 15 12 9 6"></polyline>
        )}
      </svg>
    </button>
  );
}
