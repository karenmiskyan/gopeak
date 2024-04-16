import Form, {FormSubmit, IFormItems} from "components/shared/Form";
import {useTranslation} from "next-i18next";
import React, {MouseEvent, useState} from "react";
import {IconMailWithShadow} from "shared/icons/common-icons";
import EmailDouble from "../../../../public/assets/images/png/Icon-email.png";
import Image from "next/image";
import axios, {AxiosResponse} from "axios";

const ContactUsForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {t: commonT} = useTranslation("common");
  const {t: contactUsT} = useTranslation("contact_us_page", {
    keyPrefix: "form_section",
  });
  
  const btnText = contactUsT("form_btn_text");
  const textarea: IFormItems = contactUsT("textarea", {returnObjects: true});
  const formInputs: IFormItems[] = contactUsT("form_items", {
    returnObjects: true,
  });
  const formItems: IFormItems[] = [
    ...formInputs,
    {...textarea, isTextArea: true},
  ];
  
  const onFormSubmit:FormSubmit = async (e, formObj) => {

    e.preventDefault();

    try {
      const contactData = await axios.post<AxiosResponse>(process.env.NEXT_PUBLIC_CONTACT_URL || '', JSON.stringify(formObj),{
        headers: {
          'Content-Type': 'application/json',
        },
      }) as any;
      
      setSuccessMessage(contactData.data?.message);
      setErrorMessage('');
    } catch (e) {
      setSuccessMessage('');
      setErrorMessage('Something went wrong.');
    }
  };
  
  return (
    <section
      className="pt-40 pt-sm-55 pt-md-57 pb-40 pb-sm-50 pb-md-40 col-12  contact-us-background section-contact-us">
      <div className="section-contact-us-wrapper justify-content-between m-auto row d-flex  basic-container-lg">
        <div
          className="col-md-6 col-12 ps-md-15 d-flex align-items-center align-items-md-start text-center text-md-start justify-content-md-center m-0">
          <div className="contact-title-info mb-28 mb-md-77 mt-32 pe-sm-36">
            <h1 className="mb-4 contact-us-heading px-5 h2">
              {contactUsT("heading")}
            </h1>
            <p className="contact-us-subheading position-relative text-md px-5">
              {contactUsT("sub_heading")}
            </p>
            <div className="email-icons mt-86">
              <Image quality={100} src={EmailDouble} alt={''}/>
              <a href="mailto:armen@gopeak.io">armen@gopeak.io</a>
            </div>
          </div>
        </div>
        <div className="m-auto col-11 col-sm-8 col-md-5 mt-17 me-md-20 me-lg-15 z-index-1 m-0">
          <Form
            btnText={btnText}
            formItems={formItems}
            onFormSubmit={onFormSubmit}
            message={successMessage}
            errorMessage={errorMessage}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
