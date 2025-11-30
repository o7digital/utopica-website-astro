"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';
import Image from 'next/image';

export function PrivacyPolicyContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation with gradient background on scroll */}
      <nav 
        className={cn(
          "fixed w-full z-50 border-b transition-all duration-300",
          isScrolled 
            ? "bg-gradient-to-b from-gray-100 to-gray-50/80 backdrop-blur-md" 
            : "bg-white/80 backdrop-blur-md"
        )}
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" aria-label="Go to homepage">
                <Logo className="w-[140px] h-[36px]" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm text-muted-foreground"
              >
                Home
              </Link>
              <Link
                href="/sprint-claridad-comercial"
                className="text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm text-muted-foreground"
              >
                Clarity Sprint
              </Link>
              <Link
                href="/equipo"
                className="text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm text-muted-foreground"
              >
                Team
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
              id="mobile-menu"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  Home
                </Link>
                <Link
                  href="/sprint-claridad-comercial"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  Clarity Sprint
                </Link>
                <Link
                  href="/equipo"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  Team
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content with Logo Watermark */}
      <main className="min-h-screen bg-white relative overflow-hidden">
        {/* Logo Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-5xl h-[700px] opacity-[0.04]">
            <Image
              src="/images/logo-gris.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Content over the watermark */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
                <li><strong>Navigation data:</strong> IP address, browser type, pages visited, time spent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Purposes of Processing
              </h2>
              <p className="text-gray-700 mb-4">
                The personal data we collect will be used for the following purposes:
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Primary Purposes (necessary):</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Provide the requested services and products</li>
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
                <li><strong>Cancel</strong> your data when you believe it is not being used in accordance with the principles and duties established in the Law</li>
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
                If you are located in the European Union, in addition to the aforementioned rights, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Portability:</strong> receive your data in a structured and commonly used format</li>
                <li><strong>Restriction of processing:</strong> request restriction of the processing of your data</li>
                <li><strong>Not be subject to automated decisions:</strong> including profiling</li>
                <li><strong>Lodge a complaint</strong> with the competent supervisory authority</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Rights under U.S. Laws
              </h2>
              <p className="text-gray-700 mb-4">
                If you are a resident of certain U.S. states (California, Virginia, Colorado, etc.), you may have additional rights under laws such as CCPA/CPRA:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Know what personal data is collected about you</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of the sale or sharing of your personal data</li>
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
                We use cookies and similar technologies to improve your experience on our website. You can configure your browser to reject cookies, although this may affect the functionality of the site.
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
    </>
  );
}
