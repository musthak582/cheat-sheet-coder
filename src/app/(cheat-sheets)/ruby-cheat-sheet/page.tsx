import { Metadata } from 'next';
import RubyCheatSheet from './RubyCheatSheet'; // Adjust the path if necessary

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Ruby Cheat Sheet: Ultimate Guide with Examples',
  description: 'Access our free Ruby Cheat Sheet to master syntax, methods, and gems. This comprehensive guide includes practical examples for efficient Ruby programming. Perfect for quick reference!',
};

// Export default component for this page
export default function RubyCheatSheetPage() {
  return <RubyCheatSheet />;
}
