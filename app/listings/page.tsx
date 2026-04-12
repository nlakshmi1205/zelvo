import type { Metadata } from "next";
import { listings, techParks } from "@/data/listings";
import ListingCard from "@/components/ListingCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Browse Listings",
  description:
    "Browse verified zero-broker rental listings in Bangalore — Koramangala, HSR Layout, Indiranagar, and more. Filter by locality, BHK, price, and furnishing.",
};

interface SearchParams {
  techPark?: string;
  bedrooms?: string;
  minPrice?: string;
  maxPrice?: string;
  furnishing?: string;
  q?: string;
  sort?: string;
}

function filterAndSort(params: SearchParams) {
  let results = [...listings];

  if (params.q) {
    const q = params.q.toLowerCase();
    results = results.filter(
      (l) =>
        l.locality.toLowerCase().includes(q) ||
        l.title.toLowerCase().includes(q)
    );
  }
  if (params.techPark) results = results.filter((l) => l.locality === params.techPark);
  if (params.bedrooms) results = results.filter((l) => l.bedrooms === Number(params.bedrooms));
  if (params.minPrice) results = results.filter((l) => l.price >= Number(params.minPrice));
  if (params.maxPrice) results = results.filter((l) => l.price <= Number(params.maxPrice));
  if (params.furnishing) results = results.filter((l) => l.furnishing === params.furnishing);

  if (params.sort === "price_asc") results.sort((a, b) => a.price - b.price);
  else if (params.sort === "price_desc") results.sort((a, b) => b.price - a.price);

  return results;
}

export default function ListingsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const results = filterAndSort(searchParams);
  const activeFilters = Object.entries(searchParams).filter(
    ([k, v]) => v && k !== "sort"
  );

  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-1">Browse Listings</h1>
          <p className="text-muted-foreground text-sm">
            {results.length} listing{results.length !== 1 ? "s" : ""} found
            {searchParams.techPark ? ` near ${searchParams.techPark}` : ""}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <form method="GET" action="/listings" className="space-y-5">
              {/* Sort */}
              <div>
                <label className="text-sm font-semibold block mb-1.5">Sort by</label>
                <select
                  name="sort"
                  defaultValue={searchParams.sort ?? ""}
                  className="w-full border rounded-md px-3 py-2 text-sm bg-white"
                >
                  <option value="">Default</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                </select>
              </div>

              {/* Tech Park */}
              <div>
                <label className="text-sm font-semibold block mb-1.5">Tech Park / Area</label>
                <select
                  name="techPark"
                  defaultValue={searchParams.techPark ?? ""}
                  className="w-full border rounded-md px-3 py-2 text-sm bg-white"
                >
                  <option value="">All Areas</option>
                  {techParks.map((tp) => (
                    <option key={tp} value={tp}>
                      {tp}
                    </option>
                  ))}
                </select>
              </div>

              {/* BHK */}
              <div>
                <label className="text-sm font-semibold block mb-1.5">Bedrooms</label>
                <select
                  name="bedrooms"
                  defaultValue={searchParams.bedrooms ?? ""}
                  className="w-full border rounded-md px-3 py-2 text-sm bg-white"
                >
                  <option value="">Any</option>
                  <option value="1">1 BHK / Studio</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK+</option>
                </select>
              </div>

              {/* Furnishing */}
              <div>
                <label className="text-sm font-semibold block mb-1.5">Furnishing</label>
                <select
                  name="furnishing"
                  defaultValue={searchParams.furnishing ?? ""}
                  className="w-full border rounded-md px-3 py-2 text-sm bg-white"
                >
                  <option value="">Any</option>
                  <option value="unfurnished">Unfurnished</option>
                  <option value="semi-furnished">Semi-Furnished</option>
                  <option value="fully-furnished">Fully Furnished</option>
                </select>
              </div>

              {/* Price range */}
              <div>
                <label className="text-sm font-semibold block mb-1.5">
                  Max Price (₹/mo)
                </label>
                <select
                  name="maxPrice"
                  defaultValue={searchParams.maxPrice ?? ""}
                  className="w-full border rounded-md px-3 py-2 text-sm bg-white"
                >
                  <option value="">No limit</option>
                  <option value="20000">Up to ₹20,000</option>
                  <option value="35000">Up to ₹35,000</option>
                  <option value="50000">Up to ₹50,000</option>
                  <option value="75000">Up to ₹75,000</option>
                </select>
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  Apply
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/listings">Reset</Link>
                </Button>
              </div>
            </form>
          </aside>

          {/* Results */}
          <div className="flex-1">
            {/* Active filters */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {activeFilters.map(([key, value]) => (
                  <Badge key={key} variant="secondary" className="text-xs">
                    {key}: {value}
                  </Badge>
                ))}
              </div>
            )}

            {results.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">
                  No listings match your filters.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/listings">Clear Filters</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {results.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
