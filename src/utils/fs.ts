export const readFile = async (filename: string, options?: { encoding?: string }) => {
    if (typeof window === 'undefined') {
      return null; // Return null during SSR
    }
    
    try {
      // @ts-ignore: window.fs is injected by the runtime
      return await window.fs.readFile(filename, options);
    } catch (error) {
      console.error('Error reading file:', error);
      return null;
    }
  };
  
  // Helper to check if we're in browser environment
  export const isBrowser = typeof window !== 'undefined';