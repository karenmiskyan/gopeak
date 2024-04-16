import Range from "components/shared/Range";
import { IconMinusSign, IconPlusSign } from "shared/icons/common-icons";
import { ICustomizeForm } from "../../interfaces";

interface CustomizeQuantityProps {
  setFormItem: (key: string, val: number) => void;
  customizeForm: ICustomizeForm;
}

const CustomizeQuantity = ({
  setFormItem,
  customizeForm,
}: CustomizeQuantityProps) => {
  return (
    <div>
      <p className="mb-2 text-xs text-gray-450">CUSTOMIZE QUANTITY</p>
      <div className="border-1-px border-solid border-gray-200 rounded-10-px pb-10 px-5">
        <div className="d-flex justify-content-between text-sm py-12">
          Number of links
          <div className="d-flex">
            <div
              className="rounded-6-px mxw-27-px mxh-27-px bg-gray-400 cursor-pointer d-flex align-items-center justify-content-center"
              onClick={setFormItem.bind(
                null,
                "linkNumber",
                customizeForm.linkNumber - 1
              )}
            >
              <IconMinusSign />
            </div>
            <div className="mx-5 w-100 mxw-21-px mw-20-px text-center">
              {customizeForm.linkNumber}
            </div>
            <div
              className="rounded-6-px mxw-27-px mxh-27-px bg-primary cursor-pointer d-flex align-items-center justify-content-center"
              onClick={setFormItem.bind(
                null,
                "linkNumber",
                customizeForm.linkNumber + 1
              )}
            >
              <IconPlusSign />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between text-sm border-bottom border-gray-200 border-top py-12">
          Minimum DR
          <div className="d-flex">
            <div
              className="rounded-6-px mxw-27-px mxh-27-px bg-gray-400 cursor-pointer d-flex align-items-center justify-content-center"
              onClick={setFormItem.bind(null, "minDR", customizeForm.minDR - 1)}
            >
              <IconMinusSign />
            </div>
            <div className="mx-5 w-100 mxw-21-px mw-20-px text-center">
              {customizeForm.minDR}
            </div>
            <div
              className="rounded-6-px mxw-27-px mxh-27-px bg-primary cursor-pointer d-flex align-items-center justify-content-center"
              onClick={setFormItem.bind(null, "minDR", customizeForm.minDR + 1)}
            >
              <IconPlusSign />
            </div>
          </div>
        </div>
        <div className="pt-12">
          <span className="text-sm d-block mb-7">Minimum traffic</span>
          <div className="d-flex align-items-center justify-content-between">
            <Range
              step={1}
              min={0}
              max={1000}
              size="lg"
              value={customizeForm.minTraffic}
              onChange={(e: any) => {

                setFormItem("minTraffic", e.target.value);
              }}
            />
            <span>{customizeForm.minTraffic}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeQuantity;
