import SplitType from 'split-type';

export type SplitTextTypes = 'chars' | 'words' | 'lines';
export type SplitOptions = {
  types?: SplitTextTypes[];
  absolute?: boolean;
  lineClass?: string;
  wordClass?: string;
  charClass?: string;
};

export const createSplitText = (element: HTMLElement) => {
  let splitInstance: SplitType | null = null;
  
  return {
    split(options: SplitOptions = { types: ['chars'] }) {
      if (splitInstance) {
        this.revert();
      }
      
      splitInstance = new SplitType(element, {
        types: options.types,
        absolute: options.absolute,
        lineClass: options.lineClass,
        wordClass: options.wordClass,
        charClass: options.charClass
      });

      return {
        chars: splitInstance.chars || [],
        words: splitInstance.words || [],
        lines: splitInstance.lines || []
      };
    },

    revert() {
      if (splitInstance) {
        splitInstance.revert();
        splitInstance = null;
      }
    }
  };
};