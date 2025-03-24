import React from "react";
import "../Styles/PrivacyPoliciy.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        {/* <strong>Effective Date: </strong> */}
      </p>
      <p>
        ByteSphere respects the privacy of its website users and clients served.
      </p>

      <h2>
        Information Collected from Cookies on Web Traffic Reporting and Content
        Tools
      </h2>
      <p>
        "Cookies" are data that may be sent to your web browser and stored on
        your computer. Most web browsers can be configured not to accept
        cookies, or to notify you if a cookie is sent to you. If you wish not to
        have cookies set during your visit to this Netlify-managed Site, you can
        disable them in your web browser.
      </p>
      <p>
        The website is hosted on Netlify. It uses a free third-party software
        service called Google Analytics to capture and analyze non-personally
        identifiable website usage information.
      </p>

      <h2>
        Information Collected from User Subscriptions, E-mail, and Web Forms
      </h2>
      <p>
        Information that User subscribers may provide, such as company name,
        location, or job function, is used to determine broad demographic and
        non-personally identifiable information regarding the types of users of
        these mailing lists.
      </p>
      <p>
        Users may contact ByteSphere electronically via the Contact Us page.
        ByteSphere may share the information that you provide to us via e-mail
        within the corporation to respond to your queries, but we do not provide
        information to anyone outside of the corporation unless required by law
        to do so.
      </p>

      <h2>Due Diligence for Intrusion Detection, Prevention, and Reporting</h2>
      <p>
        ByteSphere performs due diligence to preserve the integrity of the
        information on the Site. ByteSphere reserves the right to use all
        available technologies without notice to protect its networks from
        unauthorized use and to report attempted intrusions to the appropriate
        authorities.
      </p>

      <h2>Information Collected from Third Party Software and Media Sites</h2>
      <p>
        When Users visit the Site, Users may link to third-party software and/or
        media sites. ByteSphere does not collect any information that may be
        collected by that third party; however, information you supply to that
        third party may be collected and/or used by that party.
      </p>

      <h2>Changes to Our Privacy Policy</h2>
      <p>
        The Site may change from time to time. As a result, at times it may be
        necessary for us to make changes to this Privacy Policy. Accordingly,
        ByteSphere reserves the right to update or modify this Privacy Policy at
        any time and from time to time without prior notice.
      </p>
      <p>
        Please review this policy periodically, and especially before you
        provide any information. Your continued use of the Site after any
        changes or revisions to this Privacy Policy shall indicate your
        agreement with the terms of such revised Privacy Policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
