import { Metadata } from 'next';
import CssCheatSheet from './CssCheatSheet'; // Importing the component

// Define metadata for the page
export const metadata: Metadata = {
  title: 'CSS Cheat Sheet',
  description: 'Enhance your CSS skills with our free CSS Cheat Sheet. Perfect for beginners and web developers. Get quick references to style web pages effectively and create stunning designs effortlessly.',
};

// Export default component for this page
export default function CssCheatSheetPage() {
  return <CssCheatSheet />;
}
