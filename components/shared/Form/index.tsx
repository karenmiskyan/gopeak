import {MouseEvent, useState} from "react";
import FormItem from "./FormItem";
import {validateEmail} from "../../../utils/helpers";
import {Fragment} from "preact";

export type FormSubmit = (e: MouseEvent<HTMLElement>, obj?: Record<string,string>) => void

export interface IFormItems {
  labelText: string;
  htmlFor: string;
  placeholder: string;
  isTextArea?: boolean;
}

interface FormProps {
  btnText: string;
  formItems: IFormItems[];
  onFormSubmit?: FormSubmit;
  message?: string;
  errorMessage?: string;
}

const Form = ({ formItems, btnText, onFormSubmit, message = '', errorMessage = '' }: FormProps) => {
    const [formValues, setFormValues] = useState<Record<string, string>>({
        name: '',
        mail: '',
        subject: '',
        help: ''
    });

    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    
    const handleFormChange = (name: string, value: string) => {
        setFormValues({
            ...formValues,
            [name]: value
        });
    };
    
    const validateForm = (formValues:Record<string, string>) => {
        let isValid = true;
        for(let key in formValues) {
            if(key === 'mail') {
                if(!validateEmail(formValues[key])) {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [key]: !formValues[key]?'Email is required':'Invalid Email address.'
                    }));
                    isValid = false;
                } else {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [key]: ''
                    }));
    
                    isValid = true;
                }
            }
            else {
                if(!formValues[key]) {
                    if(key !== 'mail') {
                        setFormErrors((prevState) => ({
                            ...prevState,
                            [key]: `This field is required`
                        }));
            
                        isValid = false;
                    }
        
                } else {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [key]: ``
                    }));
                }
            }
        }
        
        return isValid;
    }
    
    const handleFormSubmit: FormSubmit = (e,formValues) => {
        e.preventDefault();
        if(formValues && onFormSubmit) {
            if(!validateForm(formValues)) {
                return
            }
    
            onFormSubmit(e, formValues)
        }
    }
  
  return (
    <form className="pt-10 px-20 pb-20 bg-white rounded-20-px shadow-form">
      {formItems.map((item, i) => {
        return (
            <Fragment key={item.htmlFor + i}>
              <FormItem
                onFormChange={handleFormChange}
                className="mt-10"
                name={item.htmlFor}
                labelText={item.labelText}
                isTextArea={item.isTextArea}
                placeholder={item.placeholder}
              />
                {formErrors[item.htmlFor] && <span className={'text-danger text-xxs'}>{formErrors[item.htmlFor]}</span>}
            </Fragment>
        );
      })}
      <button
        className="d-flex align-items-center btn btn-primary mt-20 h-44-px"
        onClick={(e) => onFormSubmit && handleFormSubmit(e, formValues)}
      >
        <span className="text-sm">{btnText}</span>
      </button>
        {message && <div className="alert alert-success p-2 mt-4 text-sm" role="alert">{message}</div>}
        {errorMessage && <div className="alert alert-danger p-2 mt-4 text-sm" role="alert">{errorMessage}</div>}
    </form>
  );
};

export default Form;
