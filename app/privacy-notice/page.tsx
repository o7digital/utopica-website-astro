import type { Metadata } from 'next';
import { PrivacyPolicyContent } from './privacy-content';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Privacy Notice | Utópica',
  description: 'Privacy notice of Concentradora Contracorriente SA de CV in compliance with Mexican Federal Law on Protection of Personal Data, GDPR, and US privacy laws.',
};

export default function PrivacyNoticePage() {
  return (
    <>
      <PrivacyPolicyContent />
      <Footer />
    </>
  );
}
