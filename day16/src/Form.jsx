import { useForm } from "react-hook-form";
import { validation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(validation),
    mode: onsubmit,
    defaultValues: {
      skills: [],
    },
  });
  function onSubmit(data) {
    console.log(data);
    // console.log(data.picture[0].name);
    reset();
  }
  console.log("render");
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder="enter name"
            type="text"
            style={{ fontSize: "1.6rem" }}
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <br />
        <div>
          <input
            placeholder="enter email"
            type="email"
            style={{ fontSize: "1.6rem" }}
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <br />
        <div>
          <input
            placeholder="enter password"
            type="password"
            style={{ fontSize: "1.6rem" }}
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="confirm password"
            style={{ fontSize: "1.6rem" }}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <br />
        <div>
          <input
            type="file"
            style={{ fontSize: "1.6rem" }}
            {...register("picture")}
          />
          {errors.picture && <p>{errors.picture.message}</p>}
        </div>
        <br />
        <select style={{ fontSize: "1.6rem" }} {...register("country")}>
          <option value="">Choose</option>
          <option value="india">India</option>
          <option value="france">France</option>
        </select>
        {errors.country && <p>{errors.country.message}</p>}
        <br />
        <br />
        <div style={{ fontSize: "1.6rem" }}>
          <input type="checkbox" value="js" {...register("skills")} />
          JS
          <input type="checkbox" value="react" {...register("skills")} />
          React
          {errors.skills && <p>{errors.skills.message}</p>}
        </div>
        <br />
        <button>submit</button>
      </form>
    </>
  );
};

export default Form;
