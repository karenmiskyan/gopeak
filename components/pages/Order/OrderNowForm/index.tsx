import FormItem from "components/shared/Form/FormItem";
import { ICustomizeForm, IOrderFormItem } from "./interfaces";
import { TFunction } from "i18next";
import { useState } from "react";
import { IconSuccessInCircle } from "shared/icons/common-icons";
import Link from "next/link";
import Modal from "components/shared/Modal";
import CustomizeQuantity from "./components/CustomizeQuantity";
import ChooseServices from "./components/ChooseServices";

interface OrderNowFormProps {
  t: TFunction;
}

// Config variables
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY =
  process.env.GOOGLE_SERVICE_PRIVATE_KEY;

interface OrderNowProps {}

const appendSpreadsheet = async () => {
  const form = {
    name: 'string',
    email: 'string',
    phone: 'string'
  }
  const response = await fetch('/api/sheet',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(form)
  })
  const content = await response.json();

}

const OrderNowForm = ({ t }: OrderNowFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [customizeForm, setCustomizeForm] = useState<ICustomizeForm>({
    linkNumber: 0,
    minDR: 0,
    minTraffic: 0,
    linkBuildingAndStrategyPlanning: true,
    keywordAnalysis: true,
    backLinkAudit: false,
    seoAuditAndConsultation: false,
    optimizeArticle: true,
  });

  const orderForm: IOrderFormItem[] = t("order_form", { returnObjects: true });

  const setFormItem = (key: string, val: number) => {
    setCustomizeForm((prevState: ICustomizeForm) => ({
      ...prevState,
      [key]: val <= 0 ? 0 : val,
    }));
  };

  return (
    <section onClick={appendSpreadsheet} className="container m-auto pt-30 pb-25 pt-sm-45 col-12 d-flex flex-column align-items-center justify-content-center mh-729-px">
      {isSubmitted ? (
        <div className="d-flex flex-column align-items-center text-center">
          <IconSuccessInCircle className="mb-8" />
          <h3 className="section-title mb-4 fw-700">{t("success")}</h3>
          <p className="text-sm mb-35">{t("submit_text")}</p>
          <Link href={"/blog"} className="btn btn-primary btn-lg m-auto mb-11">
            {t("read_blog")}
          </Link>
          <Link href={"/"} className="btn btn-sm btn-link text-color-secondary">
            {t("back_to_home")}
          </Link>
        </div>
      ) : (
        <>
          {showModal && (
            <Modal
              open={true}
              configs={{
                shouldCloseOnOverlayClick: true,
                hideCancelBtn: true,
                title: "Change Your Requirements",
                subTitle:
                  "You can easily customize the number and types of services",
                subTitleClasses: "text-sm mb-7",
                submitBtnClassName: "px-21 py-7 d-flex align-items-center",
              }}
              bodyOpenClassName="pt-15"
              onCancel={() => setShowModal(false)}
              onClose={() => setShowModal(false)}
              onSubmit={() => setShowModal(false)}
            >
              <div>
                <CustomizeQuantity
                  customizeForm={customizeForm}
                  setFormItem={setFormItem}
                />
                <ChooseServices
                  customizeForm={customizeForm}
                  onChange={(key: keyof ICustomizeForm) =>
                    setCustomizeForm((prev) => ({ ...prev, [key]: !prev[key] }))
                  }
                />
                <div className="d-flex justify-content-between text-sm border-bottom border-gray-200 border-top py-9">
                  <span className="text-md fw-600">FINAL PRICE</span>
                  <span className="text-md fw-600 text-success">$5000</span>
                </div>
              </div>
            </Modal>
          )}
          <h3 className="section-title mb-25">{t("order_heading")}</h3>
          <form className="w-100 row justify-content-md-between justify-content-center">
            {orderForm.map((item: IOrderFormItem, i: number) => (
              <FormItem
                key={i}
                name={item.name}
                className={`${
                  item.isTextArea
                    ? "col-sm-8 col-md-12 mb-22"
                    : "col-sm-8 col-md-5 mb-15"
                }`}
                labelText={item.labelText}
                isTextArea={item.isTextArea}
                placeholder={item.placeholder}
                hidePointer={item.isTextArea}
              />
            ))}
            <div className="d-flex flex-column">
              <button
                className="btn btn-primary btn-lg m-auto mb-11"
                onClick={(e) => {
                  e.preventDefault();
                  setIsSubmitted(true);
                }}
              >
                {t("order_now")}
              </button>
              <button
                className="btn btn-sm btn-link text-color-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
              >
                {t("change_req")}
              </button>
            </div>
          </form>
        </>
      )}
    </section>
  );
};

export default OrderNowForm;
