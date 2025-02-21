import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <nav className="mb-12">
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </div>
        </nav>

        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8">Last updated: February 14, 2025</p>

            <p className="mb-8">
              At Debite Solutions Pvt Ltd ("Debite", "we", "us", or "our"), we
              respect your privacy and are committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, and
              safeguard your information when you use our website and services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p>We collect minimal personal information including:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. How We Collect Information
            </h2>
            <p>We collect information directly from you when you:</p>
            <ul>
              <li>Register on our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us for support</li>
              <li>Fill out any forms on our website</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use the collected information solely for:</p>
            <ul>
              <li>Providing and maintaining our service</li>
              <li>Communicating with you about our services</li>
              <li>Responding to your inquiries</li>
              <li>Improving our website and services</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. Data Storage and Security
            </h2>
            <p>
              We implement appropriate security measures to protect your
              personal information. Your data is stored securely and accessed
              only when necessary to provide our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. Third-Party Sharing
            </h2>
            <p>
              We do not share your personal information with third parties. We
              do not sell, trade, or rent your personal information to others.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent for data processing</li>
              <li>Receive a copy of your data</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. Cookies and Tracking
            </h2>
            <p>
              Our website uses minimal cookies that are necessary for the
              website to function properly. We do not use tracking cookies or
              third-party analytics tools.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              8. Children's Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children
              under 18.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              9. Changes to This Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>
              For any questions about this Privacy Policy, please contact us at:
            </p>
            <address className="not-italic mt-4">
              Debite Solutions Pvt Ltd
              <br />
              RAM SVR, Plot No 4/2, Sector 1<br />
              Madhapur, HUDA Techno Enclave
              <br />
              HITEC City, Hyderabad, Telangana 500081
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

export default PrivacyPage;
