/**
 * ColorSwatch Component
 * Color swatches display with "14+ colors available" text
 */

const colors = [
  { name: 'Pink', hex: '#ff69a0' },
  { name: 'Coral', hex: '#ff8c88' },
  { name: 'Burgundy', hex: '#a7253b' },
  { name: 'Navy', hex: '#2c5aa0' },
  { name: 'Sage', hex: '#7a9d6f' },
];

export default function ColorSwatch() {
  return (
    <div className="absolute left-[32px] bottom-[32px] flex gap-[12px] items-center">
      <div className="flex items-center" style={{ marginLeft: '0', gap: '-3px' }}>
        {/* Using negative margin to overlap circles by 15% */}
        {colors.map((color) => (
          <div
            key={color.hex}
            className="relative w-[26px] h-[26px] rounded-full hover:scale-110 transition-transform cursor-pointer"
            style={{ backgroundColor: '#ffffff', marginLeft: '-4px' }}
            title={color.name}
          >
            <div
              className="absolute inset-[2px] rounded-full"
              style={{ backgroundColor: color.hex }}
            />
          </div>
        ))}
      </div>
      <p className="font-['Albert_Sans:Medium',sans-serif] font-medium text-[#a7253b] text-[18px] tracking-[-0.36px] whitespace-nowrap">
        14+ colors available
      </p>
    </div>
  );
}
