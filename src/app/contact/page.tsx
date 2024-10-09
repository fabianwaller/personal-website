import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";

const Contact = () => {
  return (
    <Section name="contact" title="Contact" subtitle="Send me a message.">
      <div className="w-full rounded-none bg-card p-4 shadow-custom md:rounded-lg md:p-8">
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
