import { Metadata } from 'next';
import TypeScriptCheatSheet from './TypeScriptCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'TypeScript Cheat Sheet: Ultimate Guide with Examples',
  description: 'Access our free TypeScript Cheat Sheet to master types, interfaces, and advanced features. This comprehensive guide includes practical examples for efficient TypeScript development. Perfect for quick reference!',
};

// Export default component for this page
export default function TypeScriptCheatSheetPage() {
  return <TypeScriptCheatSheet />;
}
