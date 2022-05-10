"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendEmail: sendMailSpy });
describe("Submit feedback", () => {
    it("should be able to submit a feedback", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "Example comment",
            screenshot: "image.png",
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it("should not be able to submit feedback without type", async () => {
        await expect(submitFeedback.execute({
            type: "",
            comment: "Example comment",
            screenshot: "image.png",
        })).rejects.toThrow();
    });
    it("should not be able to submit feedback without comment", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "",
            screenshot: "image.png",
        })).rejects.toThrow();
    });
    it("should not be able to submit feedback with an invalid screenshot", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "Example comment",
            screenshot: "image.png",
        })).rejects.toThrow();
    });
});
