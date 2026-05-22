import { z } from "zod";

const createQuizSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().optional(),

  questions: z
    .array(
      z.object({
        text: z.string().min(1),
        type: z.enum(["single", "multiple"]),

        options: z
          .array(
            z.object({
              text: z.string().min(1),
              isCorrect: z.boolean(),
            }),
          )
          .min(2),
      }),
    )
    .min(1),
});

export default createQuizSchema;
