import { Metadata } from 'next';
import JavaScriptCheatSheet from './JavaScriptCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'JavaScript Cheat Sheet',
  description: 'Master JavaScript essentials with our free JavaScript Cheat Sheet. Perfect for beginners and developers. Get quick references for variables, functions, and DOM manipulation to build interactive web applications effortlessly.',
};

// Export default component for this page
export default function JavaScriptCheatSheetPage() {
  return <JavaScriptCheatSheet />;
}
