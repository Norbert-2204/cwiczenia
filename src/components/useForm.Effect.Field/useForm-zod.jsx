import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const FormApp = () => {
  const schema = z.object({
    email: z
      .string()
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Niepoprawny adres email."),
    description: z.string().min(20, "Opis musi mieć przynajmniej 20 znaków."),
    bugType: z
      .string()
      .refine((val) => val !== "", {
        message: "Wybierz typ błędu.",
      })
      .pipe(z.enum(["ui", "backend", "performance", "other"])),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      description: "",
      bugType: "",
    },
  });

  const [succes, setSucces] = useState(false);

  const onSubmit = (data) => {
    setTimeout(() => {
      setSucces(true);
      setTimeout(() => {
        setSucces(false);
      }, 2000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input {...register("email")} name="email" type="email" />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Typ błędu:</label>
        <select {...register("bugType")}>
          <option value="">-- Wybierz --</option>
          <option value="ui">UI</option>
          <option value="backend">Backend</option>
          <option value="performance">Performance</option>
          <option value="other">Other</option>
        </select>
        {errors.bugType && <p>{errors.bugType.message}</p>}
      </div>

      <div>
        <label>Opis błędu:</label>
        <textarea {...register("description")} name="description" rows="5" />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <button type="submit">Zgłoś błąd</button>
      {succes && <p>Zgłoszenie zostało wysłane</p>}
    </form>
  );
};
export default FormApp;
