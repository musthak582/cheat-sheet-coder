import { Metadata } from 'next';
import JavaScriptCheatSheet from './PythonCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Python Cheat Sheet',
  description: 'Discover Python essentials with our free Python Cheat Sheet. Perfect for beginners and developers. Get quick references for syntax, data structures, and common libraries to write efficient and powerful Python code effortlessly.',
};

// Export default component for this page
export default function JavaScriptCheatSheetPage() {
  return <JavaScriptCheatSheet />;
}
