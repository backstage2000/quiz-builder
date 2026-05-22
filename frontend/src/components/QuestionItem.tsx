import type { CreateQuizFormData } from "@features/quiz/types";
import { useFieldArray, type Control, type UseFormRegister } from "react-hook-form";

interface QuestionItemProps {
  control: Control<CreateQuizFormData>;
  register: UseFormRegister<CreateQuizFormData>;
  index: number;
}

const QuestionItem = ({ control, register, index }: QuestionItemProps) => {
  const { fields: optionFields, append: appendOption } = useFieldArray({
    control,
    name: `questions.${index}.options`,
  });

  return (
    <div className="rounded-2xl border border-purple-800 p-4 space-y-3">
      <input
        {...register(`questions.${index}.text`)}
        placeholder="Question text"
        className="w-full rounded-xl bg-purple-900/30 p-2 text-white"
      />

      <select
        {...register(`questions.${index}.type`)}
        className="w-full rounded-xl bg-purple-900/30 p-2 text-white"
      >
        <option value="single">Single</option>
        <option value="multiple">Multiple</option>
      </select>

      <div className="space-y-2">
        {optionFields.map((option, optIndex) => (
          <div key={option.id} className="flex items-center gap-3">
            <input
              {...register(`questions.${index}.options.${optIndex}.text`)}
              placeholder={`Option ${optIndex + 1}`}
              className="flex-1 rounded-xl bg-purple-900/30 p-2 text-white"
            />
            <label className="flex items-center gap-1 text-purple-300 text-sm">
              <input
                type="checkbox"
                {...register(
                  `questions.${index}.options.${optIndex}.isCorrect`,
                )}
                className="accent-green-500"
              />
              Correct
            </label>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => appendOption({ text: "", isCorrect: false })}
        className="text-sm text-purple-400 hover:text-white"
      >
        + Add option
      </button>
    </div>
  );
};

export default QuestionItem;
