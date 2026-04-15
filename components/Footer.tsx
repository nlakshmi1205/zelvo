import Link from "next/link";
import { Home } from "lucide-react";

const areaLinks = [
  { label: "Koramangala", href: "/listings?techPark=Koramangala" },
  { label: "HSR Layout", href: "/listings?techPark=HSR+Layout" },
  { label: "Indiranagar", href: "/listings?techPark=Indiranagar" },
  { label: "Whitefield / ITPL", href: "/listings?techPark=Whitefield+%2F+ITPL" },
  { label: "Electronic City", href: "/listings?techPark=Electronic+City" },
  { label: "Marathahalli", href: "/listings?techPark=Marathahalli" },
  { label: "Sarjapur Road", href: "/listings?techPark=Sarjapur+Road" },
  { label: "Bellandur", href: "/listings?techPark=Bellandur" },
  { label: "Hebbal / Manyata", href: "/listings?techPark=Hebbal+%2F+Manyata" },
];

const siteLinks = [
  { label: "Browse Listings", href: "/listings" },
  { label: "How It Works", href: "/how-it-works" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary mb-3">
              <Home className="h-5 w-5" />
              <span>Zelvo</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Zero-broker rentals in Bangalore. Connect directly with owners on
              WhatsApp.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Browse by Area</h3>
            <ul className="space-y-2">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Company</h3>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zelvo — Zero broker fees, real homes.
        </div>
      </div>
    </footer>
  );
}
