export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

import flutter from "@/public/images/icons/flutter.png";
import react from "@/public/images/icons/react.png";
import redux from "@/public/images/icons/redux.png";
import tailwind from "@/public/images/icons/tailwind.png";
import framer from "@/public/images/icons/framer.jpg";
import medium from "@/public/images/projects/medium.png";
import videoChat from "@/public/images/projects/videoChat.png";
import ytClone from "@/public/images/projects/ytClone.png";
import admin from "@/public/images/projects/admin.png";
import store from "@/public/images/projects/store.png";

export {
  flutter,
  react,
  redux,
  tailwind,
  framer,
  medium,
  videoChat,
  ytClone,
  admin,
  store,
};
