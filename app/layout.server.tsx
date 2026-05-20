import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Savora',
  description: 'The Shortcut to Somewhere Else.',
}
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}