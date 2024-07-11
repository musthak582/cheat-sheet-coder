import { Metadata } from 'next';
import SqlCheatSheet from './SqlCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'SQL Cheat Sheet: Ultimate Guide with Examples',
  description: 'Access our free SQL Cheat Sheet to master queries, joins, and database management. This comprehensive guide includes practical examples for efficient SQL programming. Perfect for quick reference!',
};

// Export default component for this page
export default function SqlCheatSheetPage() {
  return <SqlCheatSheet />;
}
