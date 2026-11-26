import Acme from "../assets/logos/acme.svg";
import CloudForge from "../assets/logos/cloudforge.svg";
import DevMatrix from "../assets/logos/devmatrix.svg";
import Liner from "../assets/logos/linear.svg";
import NovaSphere from "../assets/logos/novasphere.svg";
import Pulse from "../assets/logos/pulse.svg";

export default function LogoCloud() {
    return (
        <section class="py-12 border-y border-neutral-800 bg-black">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p class="text-center text-xs font-mono tracking-widest text-neutral-500 uppercase">
                    POWERS THE WORLD'S BEST ENGINEERING TEAMS
                </p>

                {/* Brand Logos Grid (Array of Objects target)  */}
                <div class="mt-8 grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
                    <img src={Acme} alt="Acme" class="h-6 invert" />
                    <img src={Liner} alt="Linearify" class="h-6 invert" />
                    <img src={Pulse} alt="PulseScale" class="h-6 invert" />
                    <img src={NovaSphere} alt="NovaSphere" class="h-6 invert" />
                    <img src={CloudForge} alt="CloudForge" class="h-6 invert" />
                    <img src={DevMatrix} alt="DevMatrix" class="h-6 invert" />
                </div>
            </div>
        </section>
    );
}
