
/// <reference types="vite/client" />

// EmailJS types
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      sendForm: (serviceId: string, templateId: string, form: HTMLFormElement, publicKey: string) => Promise<{ status: number; text: string }>;
    };
  }
}

export {};
