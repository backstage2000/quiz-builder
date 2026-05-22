import { z } from "zod";

const createQuizSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),

  questions: z
    .array(
      z.object({
        text: z.string().min(1, "Question text is required"),
        type: z.enum(["single", "multiple"]),

        options: z
          .array(
            z.object({
              text: z.string().min(1, "Option text is required"),
              isCorrect: z.boolean(),
            }),
          )
          .min(2, "At least 2 options are required"),
      }),
    )
    .min(1, "At least 1 question is required"),
});

export default createQuizSchema;
