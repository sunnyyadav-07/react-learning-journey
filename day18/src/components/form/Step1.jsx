import TextInput from "../ui/TextInput";
import { Controller } from "react-hook-form";

const Step1 = ({ control }) => {

  return (
    <div className="space-y-3">
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <>
            <TextInput
              value={field.value}
              onChange={field.onChange}
              label={"Name"}
              placeholder={"enter name"}
              type={"text"}
            />
            {fieldState.error && (
              <p className="text-red-600">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <>
            <TextInput
              value={field.value}
              onChange={field.onChange}
              label={"Email"}
              placeholder={"enter email"}
              type={"email"}
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

export default Step1;
