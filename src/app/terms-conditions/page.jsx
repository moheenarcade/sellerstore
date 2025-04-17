import React from 'react'

const TermsConditions = () => {

    return (
        <div className='terms-condition-main container px-4 md:px-6 xl:px-28 mx-auto'>
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-2xl xl:text-4xl font-bold mb-12 text-center">Terms & Conditions</h1>
                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">1. Introduction</h2>
                    <p className="text-gray-700">
                        These Terms and Conditions ("Terms") apply to your use of our website and services. By accessing or using our store, you agree to comply with these Terms. Please read them carefully.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">2. Eligibility</h2>
                    <p className="text-gray-700">
                        To purchase from our store, you must be at least 18 years old or supervised by a parent or guardian. You also agree to provide accurate information during the purchase process.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">3. Orders & Payments</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>All orders are subject to availability and confirmation.</li>
                        <li>We accept payments via secure gateways authorized in the UAE.</li>
                        <li>We reserve the right to refuse or cancel any order at our discretion.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">4. Shipping & Delivery</h2>
                    <p className="text-gray-700">
                        We deliver across the UAE and internationally where applicable. Delivery times and fees are shared during checkout and vary based on location and selected shipping method.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">5. Returns & Refunds</h2>
                    <p className="text-gray-700">
                        Please refer to our Return Policy for information on how to return products and request refunds. Refunds may take 7–14 business days after the returned item is received and approved.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">6. User Conduct</h2>
                    <p className="text-gray-700">
                        You agree not to misuse the site, commit fraud, or violate any applicable UAE laws. We reserve the right to suspend accounts or cancel orders that breach our policies.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">7. Intellectual Property</h2>
                    <p className="text-gray-700">
                        All content on this site (including images, text, logos, and design) is owned by or licensed to us and is protected under UAE and international copyright laws.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">8. Limitation of Liability</h2>
                    <p className="text-gray-700">
                        We are not liable for any indirect or consequential losses resulting from your use of our site. Our maximum liability is limited to the value of the order placed.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-lg xl:text-2xl font-semibold mb-2">9. Governing Law</h2>
                    <p className="text-gray-700">
                        These Terms are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be resolved in the courts of the UAE.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default TermsConditions;
