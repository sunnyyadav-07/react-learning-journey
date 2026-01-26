import CheckboxGroup from "../ui/CheckboxGroup";
import DatePicker from "../ui/DatePicker";
import { Controller } from "react-hook-form";

const Step2 = ({ control }) => {
  return (
    <div className="space-y-4">
      <Controller
        name="skills"
        control={control}
        render={({ field, fieldState }) => (
          <>
            <CheckboxGroup
              value={field.value}
              onChange={field.onChange}
            />
            {fieldState.error && (
              <p className="text-red-600">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
      <Controller
        name="date"
        control={control}
        render={({ field, fieldState }) => (
          <>
            <DatePicker
              value={field.value}
              onChange={field.onChange}
            />
            {fieldState.error && (
              <p className="text-red-600">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default Step2;
