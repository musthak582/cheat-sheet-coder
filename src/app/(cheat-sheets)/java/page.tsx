import { Metadata } from 'next';
import JavaCheatSheet from './JavaCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Java Cheat Sheet',
  description: 'Unlock Java basics with our free Java Cheat Sheet. Perfect for beginners and developers. Get quick references for syntax, classes, and core APIs to build robust and scalable applications effortlessly.',
};

// Export default component for this page
export default function JavaCheatSheetPage() {
  return <JavaCheatSheet />;
}
