import { Metadata } from 'next';
import RustCheatSheet from './RustCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Rust Cheat Sheet: Ultimate Guide with Examples',
  description: 'Access our free Rust Cheat Sheet to master syntax, ownership, and concurrency. This comprehensive guide includes practical examples for efficient Rust programming. Perfect for quick reference!',
};

// Export default component for this page
export default function RustCheatSheetPage() {
  return <RustCheatSheet />;
}
