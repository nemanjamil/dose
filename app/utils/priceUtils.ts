/**
 * Price Utility Functions
 * Helper functions for parsing and formatting prices
 */

/**
 * Extract numeric value from formatted price string
 * Examples:
 * "4.580.00 RSD" => 4580
 * "4.580,00 RSD" => 4580
 * "100,50 RSD" => 100.5
 */
export function parsePrice(priceStr: string): number {
  // Remove all non-digit and non-separator characters
  const cleanStr = priceStr.replace(/[^\d.,]/g, "");

  if (!cleanStr) return 0;

  // Find the last . or , to determine decimal separator position
  const lastDotIndex = cleanStr.lastIndexOf(".");
  const lastCommaIndex = cleanStr.lastIndexOf(",");
  const lastSeparatorIndex = Math.max(lastDotIndex, lastCommaIndex);

  if (lastSeparatorIndex === -1) {
    // No separators, parse as is
    return parseFloat(cleanStr);
  }

  // Split at the last separator (which is the decimal separator)
  const integerPart = cleanStr.substring(0, lastSeparatorIndex).replace(/[.,]/g, "");
  const decimalPart = cleanStr.substring(lastSeparatorIndex + 1);
  return parseFloat(`${integerPart}.${decimalPart}`);
}

/**
 * Format numeric price to Serbian RSD currency format
 * Examples:
 * 4580 => "4.580,00 RSD"
 * 100.5 => "100,50 RSD"
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("sr-RS", {
    style: "currency",
    currency: "RSD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}
