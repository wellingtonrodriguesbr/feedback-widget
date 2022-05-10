"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailterMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "f2957f81dacd08",
        pass: "59d2f0fd7b7c6f",
    },
});
class NodemailterMailAdapter {
    async sendEmail({ subject, body }) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Wellington Rodrigues <wrrodrigues713@gmail.com>",
            subject,
            html: body,
        });
    }
}
exports.NodemailterMailAdapter = NodemailterMailAdapter;
