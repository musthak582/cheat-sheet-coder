import { Metadata } from 'next';
import PhpCheatSheet from './PhpCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'PHP Cheat Sheet: Ultimate Guide with Examples',
  description: 'Access our free PHP Cheat Sheet to master syntax, functions, and database integration. This comprehensive guide includes practical examples for efficient PHP programming. Perfect for quick reference!',
};

// Export default component for this page
export default function PhpCheatSheetPage() {
  return <PhpCheatSheet />;
}
