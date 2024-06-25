import { Metadata } from 'next';
import RubyCheatSheet from './RubyCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Ruby Cheat Sheet',
  description: 'Dive into Ruby with our free Ruby Cheat Sheet. Perfect for beginners and developers. Get quick references for syntax, classes, and built-in methods to write elegant and productive Ruby code effortlessly.',
};

// Export default component for this page
export default function RubyCheatSheetPage() {
  return <RubyCheatSheet />;
}
