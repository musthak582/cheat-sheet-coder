import { Metadata } from 'next';
import JavaScriptCheatSheet from './JavaScriptCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'JavaScript Cheat Sheet: Ultimate Guide with Examples',
  description: 'Access our free JavaScript Cheat Sheet to master essential functions, methods, and syntax. This guide covers practical examples for building dynamic web applications. Perfect for quick reference!',
};

// Export default component for this page
export default function JavaScriptCheatSheetPage() {
  return <JavaScriptCheatSheet />;
}
