declare module 'generateUniqueId' {
  interface GenerateUniqueIdArgs {
    length?: number;
    useLetters?: boolean;
    useNumbers?: boolean;
    includeSymbols?: string[];
    excludeSymbols?: string[];
  }

  function generateUniqueId(args?: GenerateUniqueIdArgs): string;

  export = generateUniqueId;
}
