import { Metadata } from 'next';
import CssCheatSheet from './CssCheatSheet'; // Importing the component

// Define metadata for the page
export const metadata: Metadata = {
  title: 'CSS Cheat Sheet: Ultimate Guide with Examples',
  description: 'Access our free CSS Cheat Sheet to master CSS fundamentals. This guide covers CSS properties, values, and practical examples for styling web pages. Perfect for quick reference!',
};

// Export default component for this page
export default function CssCheatSheetPage() {
  return <CssCheatSheet />;
}
