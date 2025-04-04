import React from "react";
import "../Styles/TermsofService.css";

const TermsOfService: React.FC = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms of Service</h1>

      <p className="terms-paragraph">
        Welcome to ByteSphere Digital, where we provide cutting-edge digital
        solutions. By using our services, you agree to the following terms.
      </p>

      <h2 className="terms-heading">1. Acceptance of Terms</h2>
      <p className="terms-paragraph">
        By accessing or using our services, you confirm that you accept these
        terms and agree to comply with them.
      </p>

      <h2 className="terms-heading">2. User Rights and Responsibilities</h2>
      <p className="terms-paragraph">
        Users have the right to access and use our services as intended.
        However, they must adhere to all legal and ethical guidelines when doing
        so.
      </p>

      <h2 className="terms-heading">3. Prohibited Activities</h2>
      <p className="terms-paragraph">
        Users are prohibited from engaging in unlawful, harmful, or disruptive
        activities, including hacking, fraud, and spreading malicious content.
      </p>

      <h2 className="terms-heading">4. Content Ownership</h2>
      <p className="terms-paragraph">
        All content, including trademarks, logos, and software, is the property
        of [Your Company Name] and may not be used without permission.
      </p>

      <h2 className="terms-heading">5. Privacy Policy</h2>
      <p className="terms-paragraph">
        Our Privacy Policy outlines how we collect, store, and protect user
        data. By using our services, you agree to our data handling practices.
      </p>

      <h2 className="terms-heading">
        6. Disclaimers and Limitation of Liability
      </h2>
      <p className="terms-paragraph">
        We are not liable for any indirect, incidental, or consequential damages
        arising from your use of our services.
      </p>

      <h2 className="terms-heading">7. Termination of Service</h2>
      <p className="terms-paragraph">
        We reserve the right to terminate or suspend user access to our services
        for violations of these terms or other applicable policies.
      </p>

      <h2 className="terms-heading">8. Updates to Terms of Service</h2>
      <p className="terms-paragraph">
        We may update these Terms of Service from time to time. Users are
        encouraged to review them periodically to stay informed of any changes.
      </p>

      <h2 className="terms-heading">9. Governing Law</h2>
      <p className="terms-paragraph">
        These terms shall be governed by the laws of [Your Country/State].
      </p>

      <h2 className="terms-heading">10. Contact Us</h2>
      <p className="terms-paragraph">
        If you have any questions regarding these Terms of Service, please
        contact us at contact@bytespheredigital.com.
      </p>
    </div>
  );
};

export default TermsOfService;
