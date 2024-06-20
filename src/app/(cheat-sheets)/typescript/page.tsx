import { Metadata } from 'next';
import TypeScriptCheatSheet from './TypeScriptCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'TypeScript Cheat Sheet',
  description: 'Explore TypeScript fundamentals with our free TypeScript Cheat Sheet. Perfect for beginners and developers. Get quick references for static typing, interfaces, and advanced types to write more robust and maintainable JavaScript code effortlessly.',
};

// Export default component for this page
export default function TypeScriptCheatSheetPage() {
  return <TypeScriptCheatSheet />;
}
