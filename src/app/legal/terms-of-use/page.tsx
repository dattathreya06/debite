import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <nav className="mb-12">
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Terms of Use</span>
          </div>
        </nav>

        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using Debite.in ("the Website"), you accept and
              agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. Description of Service
            </h2>
            <p>
              Debite Solutions Pvt Ltd provides software services through its
              website Debite.in. These services are available to users in India.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. User Conduct
            </h2>
            <p>
              You agree to use the Website only for lawful purposes and in a way
              that does not infringe the rights of, restrict or inhibit anyone
              else's use and enjoyment of the Website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. Intellectual Property
            </h2>
            <p>
              All content included on this Website, such as text, graphics,
              logos, icons, images, and software, is the property of Debite
              Solutions Pvt Ltd or its content suppliers and protected by Indian
              copyright laws.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p>
              The service is provided "as is" without any warranties, expressed
              or implied. Debite Solutions Pvt Ltd does not warrant that the
              website will be error-free or uninterrupted.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              Debite Solutions Pvt Ltd shall not be liable for any damages of
              any kind arising from the use of this site, including but not
              limited to direct, indirect, incidental, punitive, and
              consequential damages.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. Software Services
            </h2>
            <p>
              The software services provided through the Website are subject to
              the following conditions:
            </p>
            <ul>
              <li>
                Users must not attempt to reverse engineer or decompile any
                software provided
              </li>
              <li>Services are for use within India only</li>
              <li>
                Users are responsible for maintaining the confidentiality of
                their account information
              </li>
              <li>
                Debite Solutions Pvt Ltd reserves the right to modify or
                discontinue any service without notice
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              8. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. We do so
              by posting modified terms on this Website. Your continued use of
              the Website indicates your acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              9. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising under these terms shall be
              subject to the exclusive jurisdiction of the courts in Hyderabad,
              Telangana.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              10. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <address className="not-italic mt-4">
              Debite Solutions Pvt Ltd
              <br />
              Plot.no.29 NPL,
              <br />
              Sri Sai Nagar colony, Meerpet
              <br />
              Hyderabad, Rangareddy, Telangana 500097
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-2 text-gray-400">
            <Mail className="w-4 h-4" />
            <span>Questions? Email us at </span>
            <a
              href="mailto:legal@debite.in"
              className="text-gold-300 hover:text-gold-200 transition-colors"
            >
              legal@debite.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
