import type { Metadata } from 'next';
import { PrivacyPolicyContent } from './privacy-content';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | Utópica',
  description: 'Aviso de privacidad de Concentradora Contracorriente SA de CV conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
};

export default function AvisoPrivacidadPage() {
  return (
    <>
      <PrivacyPolicyContent />
      <Footer />
    </>
  );
}
