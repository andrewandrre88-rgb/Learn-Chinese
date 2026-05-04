import PageWrapper from "../components/PageWrapper";

export default function Refund() {
  return (
    <PageWrapper title="Refund Policy">
      <div className="bg-gum-teal p-8 brutal-border rounded-xl mb-12 text-white">
        <h2 className="text-3xl font-black uppercase mb-4 tracking-tighter">100% Happiness Guarantee</h2>
        <p className="text-xl font-bold">
          We want you to speak Chinese. If our course doesn't help you do that, we don't want your money.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-black uppercase mb-4">90-Day Money Back Guarantee</h2>
        <p>
          We offer a full 90-day money-back guarantee. If you've been through the modules, applied the framework, and don't feel you've made significant progress toward conversational fluency, we will refund your entire purchase price.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black uppercase mb-4">How to Request a Refund</h2>
        <p>
          To request a refund, please email support@fluentchinese.com with your order number. We may ask for a brief explanation of why the course didn't work for you, which helps us improve our teaching.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black uppercase mb-4">Exceptions</h2>
        <p>
          Refunds are only available within the 90-day window from the original purchase date. Access to community groups or 1-on-1 feedback sessions that have already been utilized may be factored into the refund process at our discretion.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black uppercase mb-4">Processing Time</h2>
        <p>
          Once approved, your refund will be processed back to your original payment method within 5-10 business days.
        </p>
      </section>

      <footer className="pt-8 border-t-2 border-gum-black text-sm font-black uppercase text-zinc-500">
        Last Updated: May 2026
      </footer>
    </PageWrapper>
  );
}
