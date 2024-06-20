import { Metadata } from 'next';
import HtmlCheatSheet from './HtmlCheatSheet'; // Import the client-side component

// Define metadata for the page
export const metadata: Metadata = {
  title: 'HTML Cheat Sheet',
  description: 'Master HTML essentials with our free HTML Cheat Sheet. Perfect for beginners and web developers. Get quick references to build and optimize web pages effortlessly.',
};

// Export default component for this page
export default function HtmlCheatSheetPage() {
  return <HtmlCheatSheet />;
}
