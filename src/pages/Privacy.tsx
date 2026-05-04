import PageWrapper from "../components/PageWrapper";

export default function Privacy() {
  return (
    <PageWrapper title="Privacy Policy">
      <section>
        <h2 className="text-2xl font-black uppercase mb-4">1. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us when you make a purchase, including your name, email address, and payment information. We also collect usage data to improve our course delivery.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black uppercase mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To process your transactions and deliver course materials.</li>
          <li>To send you important course updates and newsletters.</li>
          <li>To improve our website functionality and student experience.</li>
          <li>To provide customer support.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-black uppercase mb-4">3. Data Security</h2>
        <p>
          We use industry-standard encryption and secure payment processors (like Stripe) to ensure your data is protected. We never store your full credit card information on our servers.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black uppercase mb-4">4. Third-Party Sharing</h2>
        <p>
          <span className="bg-gum-pink px-2">We do not sell your personal information to third parties.</span> We only share information with service providers necessary to run our business (e.g., email service providers, payment processors).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black uppercase mb-4">5. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information at any time. To do so, please contact us at support@fluentchinese.com.
        </p>
      </section>

      <footer className="pt-8 border-t-2 border-gum-black text-sm font-black uppercase text-zinc-500">
        Last Updated: May 2026
      </footer>
    </PageWrapper>
  );
}
