import { Metadata } from 'next';
import HtmlCheatSheet from './HtmlCheatSheet'; // Import the client-side component

// Define metadata for the page
export const metadata: Metadata = {
  title: 'HTML Cheat Sheet: Ultimate Guide with Examples',
  description: 'Access our free HTML Cheat Sheet to master HTML fundamentals. This guide covers essential HTML tags, attributes, and practical examples for building web pages. Perfect for quick reference!',
};

// Export default component for this page
export default function HtmlCheatSheetPage() {
  return <HtmlCheatSheet />;
}
