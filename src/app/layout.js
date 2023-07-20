import '@/styles/globals.css'

export const metadata = {
  title: 'React flow with Next.js',
  description: 'Time to use graphic flow in your Next.js project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
