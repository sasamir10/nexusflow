import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
    return (
        <div className="bg-black text-geist-foreground font-sans antialiased selection:bg-white selection:text-black overflow-x-hidden">
            <Header />
            <Hero />
        </div>
    );
}

export default App;
