import { useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const password = watch("password");
  function onSubmit(data) {
    alert("Successfull!");
    reset();
  }
  // console.log("render");
  return (
    <div>
      -
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="enter name your"
            style={{ fontSize: "1.5rem" }}
            {...register("name", { required: "Name is required" })}
          />
          <p>{errors.name?.message}</p>
        </div>
        <br />

        <div>
          <input
            type="password"
            placeholder="enter password your"
            style={{ fontSize: "1.5rem" }}
            {...register("password", {
              required: "Password is required",
              maxLength: {
                value: 20,
                message: "maximum password length should be 20",
              },
              minLength: {
                value: 8,
                message: "minimum password length should be 8",
              },
            })}
          />
          <p>{errors.password?.message}</p>
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="confirm password "
            style={{ fontSize: "1.5rem" }}
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === password || "Password do not match",
            })}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <br />

        <div>
          <input
            type="email"
            placeholder="enter email your"
            style={{ fontSize: "1.5rem" }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
