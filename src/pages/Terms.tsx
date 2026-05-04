import PageWrapper from "../components/PageWrapper";

export default function Terms() {
  return (
    <PageWrapper title="Terms of Service">
      <section>
        <h2 className="text-2xl font-black uppercase mb-4">1. Acceptance of Terms</h2>
        <p>
          By purchasing any product or service from Fluent Chinese Masterclass, you agree to be bound by these Terms of Service. If you do not agree to all these terms, do not use this website or purchase our products.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black uppercase mb-4">2. Intellectual Property</h2>
        <p>
          All content included in our courses, including videos, PDFs, audio files, and text, is the property of Fluent Chinese Masterclass and is protected by copyright laws. You are granted a limited, non-exclusive license to use these materials for your personal learning.
        </p>
        <p className="bg-gum-yellow p-4 brutal-border font-bold">
          Redistribution, resale, or unauthorized sharing of course materials is strictly prohibited and will result in immediate termination of access without refund.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black uppercase mb-4">3. Access and Lifetime Claims</h2>
        <p>
          "Lifetime Access" refers to the life of the product. We guarantee access to the course materials as long as Fluent Chinese Masterclass is operational. If we decide to retire the product, we will provide at least 3 months' notice and a way to download the materials.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black uppercase mb-4">4. User Conduct</h2>
        <p>
          In our community spaces, we expect all students to be respectful. Harassment, hate speech, or spam will result in immediate removal from the community without a refund.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black uppercase mb-4">5. Disclaimer</h2>
        <p>
          Fluency in any language depends on your individual effort, previous experience, and dedicated study time. We do not guarantee specific results, but we provide the highest quality tools to help you succeed.
        </p>
      </section>

      <footer className="pt-8 border-t-2 border-gum-black text-sm font-black uppercase text-zinc-500">
        Last Updated: May 2026
      </footer>
    </PageWrapper>
  );
}
