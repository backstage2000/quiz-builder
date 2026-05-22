import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CreateQuizFormData } from "@features/quiz/types";
import useCreateQuiz from "@features/quiz/hooks/usecreateQuiz";
import { createQuizSchema } from "@features/quiz/validation";
import QuestionItem from "./QuestionItem";

const CreateQuizForm = () => {
  const { mutate: createQuiz, isPending } = useCreateQuiz();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateQuizFormData>({
    resolver: zodResolver(createQuizSchema),
    defaultValues: { title: "", description: "", questions: [] },
  });

  const { fields, append } = useFieldArray({ control, name: "questions" });

  const onSubmit = (data: CreateQuizFormData) => {
    createQuiz(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-3xl border border-purple-900/40 bg-purple-950/40 p-6"
    >
      <div className="space-y-1">
        <input
          {...register("title")}
          placeholder="Quiz title"
          className={`w-full rounded-xl bg-purple-900/30 p-3 text-white outline-none transition-colors ${
            errors.title ? "ring-1 ring-red-500" : ""
          }`}
        />
        {errors.title && (
          <p className="text-sm text-red-400">{errors.title.message}</p>
        )}
      </div>

      <input
        {...register("description")}
        placeholder="Description"
        className="w-full rounded-xl bg-purple-900/30 p-3 text-white outline-none"
      />

      <div className="space-y-4">
        {fields.map((field, index) => (
          <QuestionItem
            key={field.id}
            control={control}
            register={register}
            index={index}
            errors={errors}
          />
        ))}
      </div>

      {errors.questions?.root?.message && (
        <p className="text-sm text-red-400">{errors.questions.root.message}</p>
      )}
      {typeof errors.questions?.message === "string" && (
        <p className="text-sm text-red-400">{errors.questions.message}</p>
      )}

      <button
        type="button"
        onClick={() =>
          append({
            text: "",
            type: "single",
            options: [
              { text: "", isCorrect: false },
              { text: "", isCorrect: false },
            ],
          })
        }
        className="rounded-xl bg-purple-700 px-4 py-2 text-white"
      >
        Add Question
      </button>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-xl bg-green-600 py-3 text-white"
      >
        {isPending ? "Creating..." : "Create Quiz"}
      </button>
    </form>
  );
};

export default CreateQuizForm;
