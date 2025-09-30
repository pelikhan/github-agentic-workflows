import { COW_CHARACTERS, type CowCharacter } from './characters.js';
import { createSpeechBubble } from './bubble.js';

/**
 * Options for cowsay generation
 */
export interface CowsayOptions {
  /** The cow character to use */
  cow?: string;
  /** Custom eyes for the cow */
  eyes?: string;
  /** Custom tongue for the cow */
  tongue?: string;
  /** Maximum width of the speech bubble */
  width?: number;
  /** Whether to use "think" mode (thought bubble) */
  think?: boolean;
}

/**
 * Generate cowsay output
 */
export function cowsay(message: string, options: CowsayOptions = {}): string {
  const {
    cow = 'default',
    eyes,
    tongue,
    width = 40,
    think = false
  } = options;

  // Get the cow character
  const character = COW_CHARACTERS[cow] || COW_CHARACTERS.default;
  
  // Create customized character if eyes or tongue are provided
  const customCharacter: CowCharacter = {
    ...character,
    eyes: eyes || character.eyes,
    tongue: tongue || character.tongue
  };

  // Create the speech bubble
  const bubble = createSpeechBubble(message, width);
  
  // Create the cow body with custom eyes and tongue
  let cowBody = customCharacter.body;
  
  // Replace the default eyes and tongue in the cow body
  cowBody = cowBody.replace(/\(oo\)|\(\$\$\)|\(@@\)|\(\*\*\)|\(--\)|\(\.\.\)|\(xx\)/g, `(${customCharacter.eyes})`);
  
  // Handle tongue replacement (appears after the eyes line)
  if (customCharacter.tongue.trim()) {
    cowBody = cowBody.replace(/( {12,})(\|\|)/g, `${customCharacter.tongue.padStart(13)}$2`);
  }
  
  // Change the connector for think mode
  if (think) {
    cowBody = cowBody.replace(/\\/g, 'o');
  }
  
  return bubble + cowBody;
}

/**
 * Generate cowthink output (thought bubble)
 */
export function cowthink(message: string, options: Omit<CowsayOptions, 'think'> = {}): string {
  return cowsay(message, { ...options, think: true });
}

/**
 * List available cow characters
 */
export function listCows(): string[] {
  return Object.keys(COW_CHARACTERS);
}

/**
 * Get a specific cow character
 */
export function getCow(name: string): CowCharacter | undefined {
  return COW_CHARACTERS[name];
}