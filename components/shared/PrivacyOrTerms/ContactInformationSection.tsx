interface ContactInformationSectionProps {
  contact_information: {
    title: string;
    text: string;
    emails: string[];
    href: string,
  };
}

const ContactInformationSection = ({
  contact_information,
}: ContactInformationSectionProps) => {
  return (
    <section id={contact_information.href}>
      <p className="h5">{contact_information.title}</p>
      <div>{contact_information.text}</div>
      {contact_information.emails.map((email) => {
        return (
          <div key={email}>
            <a
              className="text-underline text-color-secondary"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default ContactInformationSection;
