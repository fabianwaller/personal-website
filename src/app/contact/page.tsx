import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";

const Contact = () => {
    return (
        <Section name='contact' title='Contact' subtitle='Send me a message.'>
            <ContactForm />
        </Section>
    );
}

export default Contact