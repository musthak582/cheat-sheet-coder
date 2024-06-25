import { Metadata } from 'next';
import CCheatSheet from './CCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'C Cheat Sheet: Ultimate Guide with Examples',
  description: 'Access our free C Cheat Sheet to master syntax, functions, and libraries. This comprehensive guide includes practical examples for efficient C programming. Perfect for quick reference!',
};

// Export default component for this page
export default function CCheatSheetPage() {
  return <CCheatSheet />;
}
