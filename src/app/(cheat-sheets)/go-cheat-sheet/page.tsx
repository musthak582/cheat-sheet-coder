import { Metadata } from 'next';
import GoCheatSheet from './GoCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Go Cheat Sheet: Ultimate Guide with Examples',
  description: 'Access our free Go Cheat Sheet to master syntax, goroutines, and channels. This comprehensive guide includes practical examples for efficient Go programming. Perfect for quick reference!',
};

// Export default component for this page
export default function GoCheatSheetPage() {
  return <GoCheatSheet />;
}
