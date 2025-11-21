/**
 * ColorSwatch Component
 * Reusable color swatches display component
 */

interface ColorSwatchProps {
  showLabel?: boolean;
  label?: string;
}

const colors = [
  { name: "Pink", hex: "#ff69a0" },
  { name: "Coral", hex: "#ff8c88" },
  { name: "Burgundy", hex: "#a7253b" },
  { name: "Navy", hex: "#2c5aa0" },
  { name: "Sage", hex: "#7a9d6f" },
];

export default function ColorSwatch({ showLabel = true, label = "14+ colors available" }: ColorSwatchProps) {
  return (
    <div className="flex gap-[12px] items-center">
      <div className="flex items-center" style={{ gap: "-3px" }}>
        {/* Using negative margin to overlap circles */}
        {colors.map((color) => (
          <div
            key={color.hex}
            className="relative w-[26px] h-[26px] rounded-full hover:scale-110 transition-transform cursor-pointer -ml-[4px]"
            style={{ backgroundColor: "#ffffff" }}
            title={color.name}
          >
            <div
              className="absolute inset-[2px] rounded-full"
              style={{ backgroundColor: color.hex }}
            />
          </div>
        ))}
      </div>
      {showLabel && (
        <p className="font-medium text-dose-accent text-[18px] tracking-[-0.36px] whitespace-nowrap">
          {label}
        </p>
      )}
    </div>
  );
}
