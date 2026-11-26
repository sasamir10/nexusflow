import Shield from "../assets/icons/shield.svg";
import Sparkles from "../assets/icons/sparkles.svg";
import Zap from "../assets/icons/zap.svg";

export default function FeatureGrid() {
    return (
        <section
            id="features"
            className="py-24 border-b border-neutral-800 bg-black"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="text-left max-w-2xl space-y-2 mb-16">
                    <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                        [ 01 ] CAPABILITIES
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                        Engineered for velocity, reliability, and scale.
                    </h2>
                    <p className="text-sm sm:text-base text-neutral-400">
                        Everything required to build, orchestrate, and automate
                        mission-critical software workflows.
                    </p>
                </div>

                {/* Feature Cards Grid (Re-usable Component via Array of Objects) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-xl overflow-hidden">
                    {/* Card 1 */}
                    <div className="p-8 bg-geist-surface hover:bg-geist-card transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6">
                            <img
                                src={Sparkles}
                                alt=""
                                className="w-5 h-5 invert"
                            />
                        </div>
                        <div className="text-xs font-mono text-neutral-500 mb-1">
                            01 / AUTOMATIONS
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                            AI-Driven Sprints
                        </h3>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Auto-generate PR summaries, triage incoming bug
                            tickets, and balance developer capacity with natural
                            language prompts.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 bg-geist-surface hover:bg-geist-card transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6">
                            <img src={Zap} alt="" className="w-5 h-5 invert" />
                        </div>
                        <div className="text-xs font-mono text-neutral-500 mb-1">
                            02 / CANVAS
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                            Real-time Architecture Canvas
                        </h3>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Co-design system architectures, map dependencies,
                            and link live GitHub repositories directly into
                            visual planning boards.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 bg-geist-surface hover:bg-geist-card transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6">
                            <img
                                src={Sparkles}
                                alt=""
                                className="w-5 h-5 invert"
                            />
                        </div>
                        <div className="text-xs font-mono text-neutral-500 mb-1">
                            03 / ANALYTICS
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                            Predictive Cycle Time
                        </h3>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Machine learning forecasts on deployment
                            bottlenecks, PR review lag times, and sprint
                            velocity trends.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-8 bg-geist-surface hover:bg-geist-card transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6">
                            <img
                                src={Shield}
                                alt=""
                                className="w-5 h-5 invert"
                            />
                        </div>
                        <div className="text-xs font-mono text-neutral-500 mb-1">
                            04 / COMPLIANCE
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                            SOC2 Type II Security
                        </h3>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            End-to-end 256-bit encryption, role-based access
                            control, custom SAML SSO, and complete audit logging
                            by default.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="p-8 bg-geist-surface hover:bg-geist-card transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6">
                            <img
                                src={Shield}
                                alt=""
                                className="w-5 h-5 invert"
                            />
                        </div>
                        <div className="text-xs font-mono text-neutral-500 mb-1">
                            05 / ECOSYSTEM
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                            100+ Integrations
                        </h3>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Bi-directional webhooks and sync with GitHub,
                            GitLab, Jira, Figma, Linear, Slack, Notion, and
                            Datadog.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="p-8 bg-geist-surface hover:bg-geist-card transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6">
                            <img src={Zap} alt="" className="w-5 h-5 invert" />
                        </div>
                        <div className="text-xs font-mono text-neutral-500 mb-1">
                            06 / PIPELINES
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                            Serverless CI/CD Triggers
                        </h3>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Instant execution of build, test, and release gates
                            across isolated edge environments with zero cold
                            starts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
