import chevronDown from "../assets/icons/chevron-down.svg";

export default function FAQ() {
    return (
        <section className="py-24 border-b border-neutral-800 bg-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading  */}
                <div className="text-left space-y-2 mb-16">
                    <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                        [ 06 ] FAQ
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Accordion List (Re-usable Component via Array of Objects)  */}
                <div className="divide-y divide-neutral-800 border-y border-neutral-800">
                    {/* Item 1 */}
                    <div className="faq-item py-6 px-3">
                        <button
                            className="faq-trigger w-full flex items-center justify-between text-left focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="text-base font-semibold text-white">
                                How does the 14-day free trial work?
                            </span>
                            <img
                                src={chevronDown}
                                alt="Expand"
                                className="faq-icon w-4 h-4 invert opacity-60 transition-transform"
                            />
                        </button>
                        <div className="faq-content hidden pt-4 text-sm text-neutral-400 leading-relaxed">
                            You get complete access to all Pro tier capabilities
                            for 14 days without inputting credit card details.
                            When your trial completes, you can choose to remain
                            on Pro or continue on the free Hobby tier.
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="faq-item py-6 px-3">
                        <button
                            className="faq-trigger w-full flex items-center justify-between text-left focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="text-base font-semibold text-white">
                                Can I change or cancel my plan at any time?
                            </span>
                            <img
                                src={chevronDown}
                                alt="Expand"
                                className="faq-icon w-4 h-4 invert opacity-60 transition-transform"
                            />
                        </button>
                        <div className="faq-content hidden pt-4 text-sm text-neutral-400 leading-relaxed">
                            Yes. Subscriptions can be upgraded, downgraded, or
                            canceled directly from your workspace dashboard
                            anytime without long-term commitments.
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="faq-item py-6 px-3">
                        <button
                            className="faq-trigger w-full flex items-center justify-between text-left focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="text-base font-semibold text-white">
                                What developer tools and integrations are
                                supported?
                            </span>
                            <img
                                src={chevronDown}
                                alt="Expand"
                                className="faq-icon w-4 h-4 invert opacity-60 transition-transform"
                            />
                        </button>
                        <div className="faq-content hidden pt-4 text-sm text-neutral-400 leading-relaxed">
                            We provide native two-way sync for GitHub, GitLab,
                            Jira, Figma, Linear, Slack, Notion, and customizable
                            webhooks via our standard REST API.
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="faq-item py-6 px-3">
                        <button
                            className="faq-trigger w-full flex items-center justify-between text-left focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="text-base font-semibold text-white">
                                How is our source code and private data
                                protected?
                            </span>
                            <img
                                src={chevronDown}
                                alt="Expand"
                                className="faq-icon w-4 h-4 invert opacity-60 transition-transform"
                            />
                        </button>
                        <div className="faq-content hidden pt-4 text-sm text-neutral-400 leading-relaxed">
                            We are SOC2 Type II certified. All customer code and
                            repository data are encrypted at rest with AES-256
                            and in transit with TLS 1.3. We never train public
                            foundation models on private customer repositories.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
