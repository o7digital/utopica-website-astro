import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Privacy Notice | Utópica',
  description: 'Privacy notice of Concentradora Contracorriente SA de CV in compliance with Mexican Federal Law on Protection of Personal Data, GDPR, and US privacy laws.',
};

export default function PrivacyNoticePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Notice
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Identity and Address of Data Controller
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>Concentradora Contracorriente SA de CV</strong> (hereinafter "Utópica", "we", "us", or "our"), with address in Mexico, is responsible for the processing of your personal data.
              </p>
              <p className="text-gray-700">
                For any inquiries related to this Privacy Notice, you can contact us at: <a href="mailto:gael@utopica.net" className="text-primary hover:underline">gael@utopica.net</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Personal Data We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                For the purposes outlined in this privacy notice, we may collect your personal data in various ways:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>When you provide it directly to us through our website, contact forms, or services</li>
                <li>When you visit our website or use our online services</li>
                <li>When you interact with us via email or social media</li>
              </ul>
              <p className="text-gray-700 mt-4">
                The personal data we collect includes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Identification data:</strong> full name, email address</li>
                <li><strong>Contact data:</strong> phone number, address</li>
                <li><strong>Professional data:</strong> company, position, business information</li>
                <li><strong>Browsing data:</strong> IP address, browser type, pages visited, time spent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Purposes of Data Processing
              </h2>
              <p className="text-gray-700 mb-4">
                The personal data we collect will be used for the following purposes:
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Primary Purposes (necessary):</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Provide requested services and products</li>
                <li>Respond to your information requests</li>
                <li>Manage your participation in our programs (Commercial Clarity Sprint)</li>
                <li>Process payments and billing</li>
                <li>Comply with legal and tax obligations</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secondary Purposes (optional):</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Send newsletters and marketing communications</li>
                <li>Improve our services and user experience</li>
                <li>Conduct statistical and behavioral analysis</li>
                <li>Personalize our services according to your preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                ARCO Rights (Mexico)
              </h2>
              <p className="text-gray-700 mb-4">
                In accordance with the Federal Law on Protection of Personal Data Held by Private Parties, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Access</strong> your personal data that we hold</li>
                <li><strong>Rectify</strong> your data if it is inaccurate or incomplete</li>
                <li><strong>Cancel</strong> your data when you consider it is not being used in accordance with the principles and duties established by Law</li>
                <li><strong>Object</strong> to the processing of your personal data for specific purposes</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, you can send your request to: <a href="mailto:gael@utopica.net" className="text-primary hover:underline">gael@utopica.net</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Rights under GDPR (European Union)
              </h2>
              <p className="text-gray-700 mb-4">
                If you are located in the European Union, in addition to the rights mentioned above, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Data portability:</strong> receive your data in a structured, commonly used format</li>
                <li><strong>Restriction of processing:</strong> request the restriction of processing your data</li>
                <li><strong>Not to be subject to automated decisions:</strong> including profiling</li>
                <li><strong>Lodge a complaint</strong> with the competent supervisory authority</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Rights under US Laws
              </h2>
              <p className="text-gray-700 mb-4">
                If you are a resident of certain US states (California, Virginia, Colorado, etc.), you may have additional rights under laws such as CCPA/CPRA:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Know what personal data is being collected about you</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of the sale or sharing of your personal data</li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Data Transfer
              </h2>
              <p className="text-gray-700 mb-4">
                Your personal data may be shared with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Technology service providers (hosting, analytics, CRM)</li>
                <li>Payment processors</li>
                <li>Marketing and communication services</li>
              </ul>
              <p className="text-gray-700 mt-4">
                These transfers are made only with your consent or when necessary to fulfill the requested service. All third parties are required to maintain the confidentiality of your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to improve your experience on our website. You can configure your browser to reject cookies, although this may affect the site's functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Security Measures
              </h2>
              <p className="text-gray-700">
                We implement administrative, technical, and physical security measures to protect your personal data against damage, loss, alteration, destruction, or unauthorized use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Changes to Privacy Notice
              </h2>
              <p className="text-gray-700">
                We reserve the right to modify this Privacy Notice at any time. Changes will be posted on this page with the date of last update.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Revocation of Consent
              </h2>
              <p className="text-gray-700">
                You may revoke your consent for the processing of your personal data at any time by sending your request to: <a href="mailto:gael@utopica.net" className="text-primary hover:underline">gael@utopica.net</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact
              </h2>
              <p className="text-gray-700">
                For any questions or clarifications about this Privacy Notice, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Email:</strong> <a href="mailto:gael@utopica.net" className="text-primary hover:underline">gael@utopica.net</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
