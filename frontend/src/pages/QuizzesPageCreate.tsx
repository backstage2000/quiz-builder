import { CreateQuizForm } from "@components";

const CreateQuizPage = () => {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-white">Create Quiz</h1>

        <p className="text-sm text-purple-300">
          Build your quiz with questions and options
        </p>
      </div>

      <CreateQuizForm />
    </main>
  );
};

export default CreateQuizPage;
