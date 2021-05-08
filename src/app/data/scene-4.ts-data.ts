import { UseLang } from "../../modules/doc/lang";
import { PageElement } from "./types";

export const PageData: PageElement = {
  PageData: {
    className: "scene",
    name: "form",
  },
  PageTexts: {
    bannerSendingText: UseLang({
      US: "Sending your message...",
      FR: "Envoi de votre message...",
    }),
    bannerErrorText: UseLang({
      US: "Your message doesn't take the good road :(",
      FR: "Votre message n'a pas pris le bon chemin :(",
    }),
    bannerSuccessText: UseLang({
      US: "Your message reach the servers :)",
      FR: "Votre message est arrivé jusqu'au aux serveurs :)",
    }),
    subtitle1: UseLang({
      US: "Leave me a message",
      FR: "Laissez moi un message",
    }),
    description1: UseLang({
      US: "If you want to contact me",
      FR: "Si vous voulez me contacter",
    }),
    description2: UseLang({ US: "From: ", FR: "De: " }),
    description3: "Message: ",
    placeholder1: UseLang({
      US: "Put your email address here...",
      FR: "Entrez votre email ici...",
    }),
    placeholder2: UseLang({
      US: "Put your message here...",
      FR: "Mettez votre message ici...",
    }),
    buttonText1: UseLang({ US: "Send", FR: "Envoyer" }),
  },
};
