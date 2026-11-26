import CTABanner from "./components/CTABanner";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PricingCard from "./components/PricingCard";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <div className="bg-black text-geist-foreground font-sans antialiased selection:bg-white selection:text-black overflow-x-clip">
            <Header />
            <Hero />

            <Testimonials />
            <PricingCard />
            <FAQ />
            <CTABanner />
            <Footer />
        </div>
    );
}

export default App;
