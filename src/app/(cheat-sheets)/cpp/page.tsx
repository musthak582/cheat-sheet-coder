import { Metadata } from 'next';
import CppCheatSheet from './CppCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'C++ Cheat Sheet',
  description: 'Master C++ essentials with our free C++ Cheat Sheet. Perfect for beginners and developers. Get quick references for syntax, data structures, and object-oriented programming concepts to write efficient and powerful C++ code effortlessly.',
};

// Export default component for this page
export default function CppCheatSheetPage() {
  return <CppCheatSheet />;
}
