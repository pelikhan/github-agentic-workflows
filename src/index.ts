#!/usr/bin/env node

import { cowsay, cowthink, listCows } from './cowsay.js';

// Node.js globals
declare const process: {
  argv: string[];
  exit(code?: number): void;
};

declare const console: {
  log(...args: any[]): void;
  error(...args: any[]): void;
};

declare global {
  interface ImportMeta {
    url: string;
  }
}

/**
 * Parse command line arguments
 */
function parseArgs(): {
  message: string;
  options: {
    cow?: string;
    eyes?: string;
    tongue?: string;
    width?: number;
    think?: boolean;
    list?: boolean;
    help?: boolean;
  };
} {
  const args = process.argv.slice(2);
  const options: any = {};
  let message = '';
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    switch (arg) {
      case '-f':
      case '--cow':
        options.cow = args[++i];
        break;
      case '-e':
      case '--eyes':
        options.eyes = args[++i];
        break;
      case '-T':
      case '--tongue':
        options.tongue = args[++i];
        break;
      case '-W':
      case '--width':
        options.width = parseInt(args[++i]);
        break;
      case '-t':
      case '--think':
        options.think = true;
        break;
      case '-l':
      case '--list':
        options.list = true;
        break;
      case '-h':
      case '--help':
        options.help = true;
        break;
      default:
        if (!arg.startsWith('-')) {
          message += (message ? ' ' : '') + arg;
        }
        break;
    }
  }
  
  return { message, options };
}

/**
 * Display help information
 */
function showHelp(): void {
  console.log(`
Usage: cowsay [options] <message>

Options:
  -f, --cow <name>     Use a specific cow character (default: default)
  -e, --eyes <eyes>    Custom eyes for the cow
  -T, --tongue <tongue> Custom tongue for the cow
  -W, --width <width>  Maximum width of speech bubble (default: 40)
  -t, --think          Use thought bubble instead of speech bubble
  -l, --list           List available cow characters
  -h, --help           Show this help message

Available cows: ${listCows().join(', ')}

Examples:
  cowsay "Hello, World!"
  cowsay -f dead "I'm dead"
  cowsay -e "^^" -T ":P" "Happy cow"
  cowsay -t "Thinking..."
  cowsay -W 20 "This is a longer message that will wrap"
`);
}

/**
 * Main CLI function
 */
function main(): void {
  const { message, options } = parseArgs();
  
  if (options.help) {
    showHelp();
    return;
  }
  
  if (options.list) {
    console.log('Available cow characters:');
    listCows().forEach(cow => console.log(`  ${cow}`));
    return;
  }
  
  if (!message) {
    console.error('Error: Please provide a message');
    console.error('Use --help for usage information');
    process.exit(1);
  }
  
  try {
    const result = options.think 
      ? cowthink(message, options)
      : cowsay(message, options);
    
    console.log(result);
  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

// Demo function for programmatic usage
export function demo(): void {
  console.log('=== TypeScript Cowsay Demo ===\n');
  
  console.log('1. Basic cowsay:');
  console.log(cowsay('Hello, TypeScript!'));
  
  console.log('\n2. Dead cow:');
  console.log(cowsay('I am dead', { cow: 'dead' }));
  
  console.log('\n3. Custom eyes and tongue:');
  console.log(cowsay('Wink wink!', { eyes: '^o', tongue: ':P' }));
  
  console.log('\n4. Cowthink:');
  console.log(cowthink('Hmm, interesting...'));
  
  console.log('\n5. Greedy cow with long message:');
  console.log(cowsay('Money money money! I love money so much that I could talk about it all day long!', { 
    cow: 'greedy', 
    width: 30 
  }));
  
  console.log('\n6. Available cows:', listCows().join(', '));
}

// Export everything for use as a library
export * from './cowsay.js';
export * from './characters.js';
export * from './bubble.js';

// Run CLI if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}