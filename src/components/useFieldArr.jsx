import { useFieldArray } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  tasks: z.array(
    z.object({
      task: z.string().min(1, "Wpisz coś"),
    })
  ),
});

const TestField = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      tasks: [{ task: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tasks",
  });

  const onSubmit = (data) => {
    console.log("Wysłane dane:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            type="text"
            placeholder={`Zadanie #${index + 1}`}
            {...register(`tasks.${index}.task`)}
          />
          <button type="button" onClick={() => remove(index)}>
            Usuń
          </button>
        </div>
      ))}

      <button type="button" onClick={() => append({ task: "" })}>
        Dodaj zadanie
      </button>

      <button type="submit">Wyślij</button>
      {errors.tasks && <p>{errors.tasks.message}</p>}
    </form>
  );
};
export default TestField;
