import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export const metadata = {
  title: 'React flow with Next.js',
  description: 'Time to use graphic flow in your Next.js project',
  keywords: 'next.js, react, flow, graphic, diagram, process, tech, software'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout