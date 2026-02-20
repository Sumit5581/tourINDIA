import heroImage from "@/assets/hero-india.jpg";
import CitySearch from "@/components/CitySearch";
import PopularCities from "@/components/PopularCities";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Incredible India landmarks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-display font-extrabold mb-4 animate-fade-up"
            style={{ color: "white" }}
          >
            Discover Incredible{" "}
            <span className="text-primary">India</span>
          </h1>
          <p
            className="text-lg md:text-xl mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms", animationFillMode: "forwards", color: "rgba(255,255,255,0.9)" }}
          >
            Search for cities, explore tourist places, and plan your perfect journey
          </p>
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <CitySearch />
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <PopularCities />

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="tricolor-bar mb-6" />
        <div className="container px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 tourINDIA — Explore the beauty of India 🇮🇳
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
