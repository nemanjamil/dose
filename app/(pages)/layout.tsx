import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Main Pages Layout Wrapper
 *
 * This layout wraps all public pages with:
 * - Header (fixed at top with navigation)
 * - Main content area (with proper padding for fixed header)
 * - Footer (persistent at bottom)
 *
 * All pages under app/(pages)/ automatically inherit this layout structure.
 * This ensures consistent navigation and footer across the entire public site.
 *
 * Architecture Pattern: Route Group Layout
 * Benefits:
 * - DRY (Don't Repeat Yourself) - Header/Footer defined once
 * - Consistent UX across all pages
 * - Easy to add persistent elements (announcements, notifications, etc.)
 * - Clear separation of concerns
 */
export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - Fixed at top */}
      <Header />

      {/* Main content - Grows to fill available space */}
      <main className="flex-grow w-full">{children}</main>

      {/* Footer - Sticky at bottom */}
      {/* <div id="footerDevider" className="h-24 bg-amber-500"></div> */}
      <Footer />
    </div>
  );
}
