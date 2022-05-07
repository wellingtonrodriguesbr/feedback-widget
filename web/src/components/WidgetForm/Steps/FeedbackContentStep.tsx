import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "..";
import { ScreenshotButton } from "../ScreenshotButton";
import { FormEvent, useState } from "react";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault();
    console.log({ comment, screenshot });

    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="py-4 w-full">
        <textarea
          onChange={(e) => setComment(e.target.value)}
          placeholder="Nos conte com detalhes o que está acontecendo..."
          className="min-w-[304px] w-full min-h-[112px] text-sm text-zinc-100 border-2 border-zinc-600 bg-transparent rounded-md p-2 focus:border-brand-500 focus:outline-none resize-none placeholder-neutral-700 scrollbar scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent"
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            disabled={comment.length === 0}
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
