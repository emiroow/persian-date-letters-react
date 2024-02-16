import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";
import DatePicker, { DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import index from "../hooks";

function TryConvert() {
  const { ConvertDateToLetters, value, setValue } = index();

  return (
    <div className="flex w-full flex-col items-center justify-between lg:p-5 max-lg:mt-4">
      <div className="divider">
        <span>
          Try <span className="lg:hidden">To Convert</span>
        </span>
      </div>

      <div className="flex w-full flex-col lg:flex-row max-lg:gap-3">
        <div className="grid w-full lg:w-[50%] h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          <DatePicker
            calendar={persian}
            locale={persian_en}
            value={value}
            inputClass="text-center p-2 rounded-md font-semibold text-primary"
            className="bg-dark "
            calendarPosition="bottom-right"
            onChange={(selectedDate: DateObject) => {
              setValue(selectedDate.toString());
            }}
            format="YYYY/MM/DD"
          />
        </div>
        <div className="divider divider-horizontal max-lg:hidden mx-12">
          CONVERT
        </div>
        <div className="grid w-full lg:w-[50%] h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          <span className="font-semibold text-success font-iranSans">
            {ConvertDateToLetters(value)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TryConvert;
