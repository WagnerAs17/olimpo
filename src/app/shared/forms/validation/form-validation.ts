import { DisplayMessage } from "./display-message";

export interface FormValidation{
    setMessages(displayMessage: DisplayMessage): void;
}