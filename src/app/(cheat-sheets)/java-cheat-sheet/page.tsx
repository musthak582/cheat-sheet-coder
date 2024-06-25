import { Metadata } from 'next';
import JavaCheatSheet from './JavaCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Java Cheat Sheet: Ultimate Guide with Examples',
  description: 'Access our free Java Cheat Sheet to master syntax, classes, and methods. This comprehensive guide includes practical examples for efficient Java programming. Perfect for quick reference!',
};

// Export default component for this page
export default function JavaCheatSheetPage() {
  return <JavaCheatSheet />;
}
