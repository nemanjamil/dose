/**
 * ProductImage Component
 * Main product image display
 */

const imgSubtract = "https://www.figma.com/api/mcp/asset/7e4d6272-12c3-46c5-bff5-be598b0c9fc8";

export default function ProductImage() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <img
        alt="Dose Thermos Product"
        className="h-full w-full object-cover"
        src={imgSubtract}
      />
    </div>
  );
}
