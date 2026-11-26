import CTABanner from "./components/CTABanner";
import FAQ from "./components/FAQ";
import FeatureGrid from "./components/FeatureGrid";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import PricingCard from "./components/PricingCard";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <div className="bg-black text-geist-foreground font-sans antialiased selection:bg-white selection:text-black overflow-x-clip">
            <Header />
            <Hero />
            <LogoCloud />
            <FeatureGrid />
            <Features />
            <Stats />
            <Testimonials />
            <PricingCard />
            <FAQ />
            <CTABanner />
            <Footer />
        </div>
    );
}

export default App;
