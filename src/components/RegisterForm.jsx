import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const RegisterForm = () => {
  const [success, setSuccess] = useState(false);

  const schema = z
    .object({
      text: z.string().min(3, "Imię musi zawierać przynajmniej 3 znaki").trim(),
      email: z.string().email("Niepoprawny adres email"),
      password: z.string().min(6, "Hasło musi mieć conajmniej 6 znaków"),
      confirmPassword: z.string().min(6, "Powtórz hasło"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Hasło musi być takie samo",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      text: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    setTimeout(() => {
      setSuccess(true);
      console.log("Zarejestrowano:", data);
      setTimeout(() => {
        setSuccess(false);
      }, 5 * 1000);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "400px", margin: "2rem auto" }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <label>Username:</label>
        <input
          {...register("text")}
          name="text"
          type="text"
          style={{ display: "block", width: "100%", padding: "0.5rem" }}
        />
        {errors.text && <p>{errors.text.message}</p>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Email:</label>
        <input
          {...register("email")}
          name="email"
          type="email"
          style={{ display: "block", width: "100%", padding: "0.5rem" }}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Password:</label>
        <input
          {...register("password")}
          name="password"
          type="password"
          style={{ display: "block", width: "100%", padding: "0.5rem" }}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Confirm Password:</label>
        <input
          {...register("confirmPassword")}
          name="confirmPassword"
          type="password"
          style={{ display: "block", width: "100%", padding: "0.5rem" }}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit" style={{ padding: "0.75rem 1.5rem" }}>
        Zarejestruj
      </button>

      {success && (
        <p style={{ color: "green", marginTop: "1rem" }}>
          Rejestracja zakończona sukcesem!
        </p>
      )}
    </form>
  );
};

export default RegisterForm;
