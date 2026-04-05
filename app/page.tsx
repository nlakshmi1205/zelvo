import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero section placeholder */}
      <section className="flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <h1 className="text-4xl font-bold text-center mb-4">
          Find Your Perfect Home — Zero Broker Fees
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-8 max-w-xl">
          Browse verified rental listings across Mumbai, Bengaluru &amp; Hyderabad.
          Connect directly with owners via WhatsApp.
        </p>
        <div className="flex w-full max-w-md gap-2">
          <Input placeholder="Search by locality, city..." className="flex-1" />
          <Button>Search</Button>
        </div>
      </section>

      {/* Sample cards section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-6">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge>2 BHK</Badge>
                  <span className="text-sm text-muted-foreground">Bengaluru</span>
                </div>
                <CardTitle className="text-lg mt-2">Sample Apartment {i}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Spacious apartment near tech parks. Well-ventilated, fully furnished.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary">₹25,000 / mo</span>
                  <Button size="sm" variant="outline">
                    WhatsApp Owner
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
