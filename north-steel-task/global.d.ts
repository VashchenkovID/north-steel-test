interface ImportMeta {
  readonly env: {
    VITE_API_URL: string;
  };
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
