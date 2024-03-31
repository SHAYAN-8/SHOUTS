import React, { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ShoutsPrivacyPolicy = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container mx-auto py-8 px-4 sm:px-2">
        <h1 className="text-3xl font-bold mb-4 flex items-center">
          <BiArrowBack
            className="cursor-pointer text-3xl inline mr-4"
            onClick={() => navigate(-1)}
          />
          Privacy Policy
        </h1>
        <p className="mb-4">
          This privacy policy sets out how Shouts uses and protects any
          information that you give us when you use this app.
        </p>
        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
        <p className="mb-4">We may collect the following information:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Your name and contact information</li>
          <li>Demographic information</li>
          <li>Other information relevant to user interactions</li>
        </ul>
        <h2 className="text-2xl font-bold mb-2">How We Use the Information</h2>
        <p className="mb-4">
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Improving our services</li>
          <li>Sending relevant notifications</li>
          <li>
            Personalizing user experience and content based on preferences
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-2">Security</h2>
        <p className="mb-4">
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorized access or disclosure, we have put in place
          suitable measures to safeguard and secure the information we collect
          online.
        </p>
        <h2 className="text-2xl font-bold mb-2">Cookies</h2>
        <p className="mb-4">
          Shouts may use cookies to enhance user experience. By using Shouts,
          you consent to our use of cookies in accordance with our privacy
          policy.
        </p>
        <h2 className="text-2xl font-bold mb-2">Links to Other Websites</h2>
        <p className="mb-4">
          Shouts may contain links to other websites. Please note that we have
          no control over the content and practices of these sites and cannot
          accept responsibility or liability for their respective privacy
          policies.
        </p>
        <h2 className="text-2xl font-bold mb-2">
          Controlling Your Personal Information
        </h2>
        <p className="mb-4">
          You may choose to restrict the collection or use of your personal
          information in the following ways:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            You have the right to opt-out of certain data collection practices.
          </li>
          <li>
            We will not sell, distribute, or lease your personal information to
            third parties without your consent.
          </li>
          <li>
            You may request details of personal information which we hold about
            you.
          </li>
          <li>
            If you believe that any information we are holding on you is
            incorrect or incomplete, please contact us as soon as possible.
          </li>
        </ul>
        <p className="mb-4">
          This privacy policy is subject to change without notice.
        </p>
      </div>
    </div>
  );
};

export default ShoutsPrivacyPolicy;
