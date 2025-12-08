"use client";

/**
 * ActionButtons Component
 *
 * Reusable button group with icons
 * Displays buttons in a row on larger screens, stacked on mobile
 */

import { useRouter } from "next/navigation";

interface Button {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: string;
}

interface ActionButtonsProps {
  buttons: Button[];
  alignment?: "start" | "center" | "end";
}

export default function ActionButtons({
  buttons,
  alignment = "center",
}: ActionButtonsProps) {
  const router = useRouter();

  const handleButtonClick = (button: Button) => {
    if (button.onClick) {
      button.onClick();
    } else if (button.href) {
      router.push(button.href);
    }
  };

  const alignmentClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  }[alignment];

  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 pt-4 items-center ${alignmentClass}`}
    >
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(button)}
          className="w-fit bg-dose-accent/20 text-dose-accent font-bold py-2 px-6 rounded-lg hover:bg-dose-accent/30 transition-colors flex items-center gap-2 uppercase"
        >
          {button.icon && (
            <img alt="" className="w-[20px] h-[20px]" src={button.icon} />
          )}
          {button.label}
        </button>
      ))}
    </div>
  );
}
