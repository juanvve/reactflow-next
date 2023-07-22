import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export const metadata = {
  title: 'React flow with Next.js',
  description: 'Time to use graphic flow in your Next.js project',
  keywords: 'next.js, react, flow, graphic, diagram, process, tech, software',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <meta
          name='description'
          content={metadata.description}
        />
        <meta
          name='keywords'
          content={metadata.keywords}
        />
        <title>{metadata.title}</title>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM'
          crossorigin='anonymous'
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
