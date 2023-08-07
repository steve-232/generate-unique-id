declare module 'generate-unique-id' {
	function generateUniqueId(args?: {		
		length?: number;
		useLetters?: boolean;
		useNumbers?: boolean;
		includeSymbols?: string[];
		excludeSymbols?: string[];
	}): string;

  export = generateUniqueId;
}	
