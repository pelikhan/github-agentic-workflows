/**
 * Create a speech bubble for the cow
 */
export function createSpeechBubble(message: string, maxWidth: number = 40): string {
  const lines = wrapText(message, maxWidth);
  const bubbleWidth = Math.max(...lines.map(line => line.length)) + 2;
  
  let bubble = '';
  
  if (lines.length === 1) {
    // Single line bubble
    bubble += ' ' + '_'.repeat(bubbleWidth) + '\n';
    bubble += `< ${lines[0].padEnd(bubbleWidth - 2)} >\n`;
    bubble += ' ' + '-'.repeat(bubbleWidth) + '\n';
  } else {
    // Multi-line bubble
    bubble += ' ' + '_'.repeat(bubbleWidth) + '\n';
    
    lines.forEach((line, index) => {
      const paddedLine = line.padEnd(bubbleWidth - 2);
      
      if (index === 0) {
        bubble += `/ ${paddedLine} \\\\\n`;
      } else if (index === lines.length - 1) {
        bubble += `\\\\ ${paddedLine} /\n`;
      } else {
        bubble += `| ${paddedLine} |\n`;
      }
    });
    
    bubble += ' ' + '-'.repeat(bubbleWidth) + '\n';
  }
  
  return bubble;
}

/**
 * Wrap text to fit within specified width
 */
function wrapText(text: string, maxWidth: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';
  
  for (const word of words) {
    if (currentLine.length + word.length + 1 <= maxWidth) {
      currentLine = currentLine ? `${currentLine} ${word}` : word;
    } else {
      if (currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        // Word is longer than maxWidth, split it
        lines.push(word.substring(0, maxWidth));
        currentLine = word.substring(maxWidth);
      }
    }
  }
  
  if (currentLine) {
    lines.push(currentLine);
  }
  
  return lines.length > 0 ? lines : [''];
}