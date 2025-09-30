/**
 * Cowsay interface defining the structure of different cow characters
 */
export interface CowCharacter {
  name: string;
  eyes: string;
  tongue: string;
  body: string;
}

/**
 * Available cow characters
 */
export const COW_CHARACTERS: Record<string, CowCharacter> = {
  default: {
    name: 'default',
    eyes: 'oo',
    tongue: '  ',
    body: `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`
  },
  dead: {
    name: 'dead',
    eyes: 'xx',
    tongue: 'U ',
    body: `
        \\   ^__^
         \\  (xx)\\_______
            (__)\\       )\\/\\
             U  ||----w |
                ||     ||`
  },
  greedy: {
    name: 'greedy',
    eyes: '$$',
    tongue: '  ',
    body: `
        \\   ^__^
         \\  ($$)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`
  },
  paranoid: {
    name: 'paranoid',
    eyes: '@@',
    tongue: '  ',
    body: `
        \\   ^__^
         \\  (@@)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`
  },
  stoned: {
    name: 'stoned',
    eyes: '**',
    tongue: 'U ',
    body: `
        \\   ^__^
         \\  (**)\\_______
            (__)\\       )\\/\\
             U  ||----w |
                ||     ||`
  },
  tired: {
    name: 'tired',
    eyes: '--',
    tongue: '  ',
    body: `
        \\   ^__^
         \\  (--)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`
  },
  young: {
    name: 'young',
    eyes: '..',
    tongue: '  ',
    body: `
        \\   ^__^
         \\  (..)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`
  }
};