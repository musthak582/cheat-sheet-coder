import { Metadata } from 'next';
import PythonCheatSheet from './PythonCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Python Cheat Sheet: Ultimate Guide with Examples',
  description: 'Access our free Python Cheat Sheet to master syntax, functions, and libraries. This comprehensive guide includes practical examples for efficient Python programming. Perfect for quick reference!',
};

// Export default component for this page
export default function PythonCheatSheetPage() {
  return <PythonCheatSheet />;
}
