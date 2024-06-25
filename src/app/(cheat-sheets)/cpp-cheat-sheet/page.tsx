import { Metadata } from 'next';
import CppCheatSheet from './CppCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'C++ Cheat Sheet: Ultimate Guide with Examples',
  description: 'Access our free C++ Cheat Sheet to master syntax, classes, and algorithms. This comprehensive guide includes practical examples for efficient C++ programming. Perfect for quick reference!',
};

// Export default component for this page
export default function CppCheatSheetPage() {
  return <CppCheatSheet />;
}
