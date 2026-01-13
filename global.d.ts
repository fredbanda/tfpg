export {};

declare module '*.css';

declare global {
  interface Window {
    chatbase?: any;
  }
}