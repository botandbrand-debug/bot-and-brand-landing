import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="fadeInUp max-w-3xl mx-auto px-6 py-16 text-left">
      <h2 className="text-4xl font-bold mb-4">Privacy Policy</h2>
      <p className="mb-4 text-muted-foreground">
        We respect your privacy. Bot & Brand collects only essential
        information to deliver our services — such as your contact info,
        business name, and brand details.
      </p>
      <p className="text-muted-foreground">
        We never sell or share your data with third parties. Our automated
        tools are secure and only access info you approve. By using our site,
        you consent to this policy. For questions, email us at{" "}
        <a
          href="mailto:BotAndBrand@solution4u.com"
          className="text-blue-500 underline"
        >
          BotAndBrand@solution4u.com
        </a>
        .
      </p>
    </section>
  );
};

export default PrivacyPolicy;
