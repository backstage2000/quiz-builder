// QuestionItem.tsx
import type { CreateQuizFormData } from "@features/quiz/types";
import {
  useFieldArray,
  type Control,
  type UseFormRegister,
  type FieldErrors,
} from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";

interface QuestionItemProps {
  control: Control<CreateQuizFormData>;
  register: UseFormRegister<CreateQuizFormData>;
  errors: FieldErrors<CreateQuizFormData>;
  index: number;
}

const QuestionItem = ({
  control,
  register,
  errors,
  index,
}: QuestionItemProps) => {
  const { fields: optionFields, append: appendOption } = useFieldArray({
    control,
    name: `questions.${index}.options`,
  });

  const questionError = errors.questions?.[index];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="rounded-2xl border border-purple-800 p-4 space-y-3"
    >
      {/* QUESTION TEXT */}
      <div className="space-y-1">
        <input
          {...register(`questions.${index}.text`)}
          placeholder="Question text"
          className={`w-full rounded-xl bg-purple-900/30 p-2 text-white outline-none transition-colors ${
            questionError?.text ? "ring-1 ring-red-500" : ""
          }`}
        />
        {questionError?.text && (
          <p className="text-xs text-red-400">{questionError.text.message}</p>
        )}
      </div>

      {/* TYPE */}
      <select
        {...register(`questions.${index}.type`)}
        className="w-full rounded-xl bg-purple-900/30 p-2 text-white outline-none"
      >
        <option value="single">Single</option>
        <option value="multiple">Multiple</option>
      </select>

      {/* OPTIONS */}
      <div className="space-y-2">
        <AnimatePresence initial={false}>
          {optionFields.map((option, optIndex) => {
            const optionError = questionError?.options?.[optIndex];

            return (
              <motion.div
                key={option.id}
                initial={{ x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 12, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="space-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-1 space-y-1">
                    <input
                      {...register(
                        `questions.${index}.options.${optIndex}.text`,
                      )}
                      placeholder={`Option ${optIndex + 1}`}
                      className={`w-full rounded-xl bg-purple-900/30 p-2 text-white outline-none transition-colors ${
                        optionError?.text ? "ring-1 ring-red-500" : ""
                      }`}
                    />
                    {optionError?.text && (
                      <p className="text-xs text-red-400">
                        {optionError.text.message}
                      </p>
                    )}
                  </div>
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
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* OPTIONS-LEVEL ERROR */}
      {questionError?.options?.message && (
        <p className="text-xs text-red-400">{questionError.options.message}</p>
      )}

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="button"
        onClick={() => appendOption({ text: "", isCorrect: false })}
        className="text-sm text-purple-400 hover:text-white"
      >
        + Add option
      </motion.button>
    </motion.div>
  );
};

export default QuestionItem;
