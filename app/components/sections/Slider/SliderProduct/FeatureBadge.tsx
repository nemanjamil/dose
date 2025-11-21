/**
 * FeatureBadge Component
 * Individual feature badge with icon and text
 */

interface FeatureBadgeProps {
  icon: string;
  label: string;
  position: 'top-left' | 'top-right' | 'bottom-left';
}

export default function FeatureBadge({
  icon,
  label,
  position,
}: FeatureBadgeProps) {
  const positionClasses = {
    'top-left': 'top-[206px] left-[77px]',
    'top-right': 'top-[257px] left-[429px]',
    'bottom-left': 'top-[538px] left-[242px]',
  };

  return (
    <div
      className={`absolute bg-[rgba(255,255,255,0.4)] box-border flex flex-col gap-[10px] items-start pl-[8px] pr-[24px] py-[8px] rounded-[99px] shadow-[0px_10px_24px_0px_rgba(160,157,151,0.3)] ${positionClasses[position]}`}
    >
      <div className="flex gap-[12px] items-center">
        <div className="bg-dose-light flex gap-[10px] items-center px-[11px] py-[10px] rounded-[99px] size-[46px] flex-shrink-0">
          <div className="relative size-[24px]">
            <img alt="" className="w-full h-full" src={icon} />
          </div>
        </div>
        <p className="font-bold font-bold text-dose-accent text-[18px] tracking-[-0.36px]">
          {label}
        </p>
      </div>
    </div>
  );
}
