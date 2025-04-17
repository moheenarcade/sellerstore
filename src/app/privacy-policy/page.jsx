import React from 'react'

const PrivacyPolicy = () => {

    return (
        <div className='privacy-policy-main container px-4 md:px-6 2xl:px-28 mx-auto'>
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-2xl xl:text-4xl font-bold text-center mb-12">Privacy Policy</h1>
                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">1. Introduction</h2>
                    <p className="text-gray-700">
                        Welcome to our store. We value your privacy and are committed to protecting your personal information in accordance with UAE privacy laws and regulations.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">2. Information We Collect</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Personal details (name, email, phone number, shipping address)</li>
                        <li>Payment information (handled securely through third-party providers)</li>
                        <li>Order history and preferences</li>
                        <li>IP address, device type, and browsing behavior (for analytics and improvement)</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>To fulfill and deliver your orders</li>
                        <li>To provide customer support</li>
                        <li>To send order updates and promotional emails (with your consent)</li>
                        <li>To improve our website and services</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">4. Sharing of Information</h2>
                    <p className="text-gray-700">
                        We do not sell your data. We may share your information with:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Delivery partners to ship your orders</li>
                        <li>Payment processors to handle secure transactions</li>
                        <li>Legal authorities if required under UAE law</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">5. Cookies & Tracking</h2>
                    <p className="text-gray-700">
                        We use cookies and similar technologies to enhance user experience and for analytics. You can manage cookie preferences in your browser settings.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">6. Your Rights</h2>
                    <p className="text-gray-700">
                        You have the right to access, correct, or delete your personal data. To exercise your rights, please contact us using the details below.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">7. Data Retention</h2>
                    <p className="text-gray-700">
                        We retain your data only as long as necessary for our services and to comply with legal obligations.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default PrivacyPolicy;
