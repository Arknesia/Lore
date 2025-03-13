import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  title: {
    default: 'Official Arknesia World',
    template: '%s | Official Arknesia World'
  },
  metadataBase: new URL('https://arknesia.world'),
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        {/* Your Additional Tags */}
      </Head>
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<span style={{ fontWeight: 800 }}>Arknesia World</span>}
              chatLink="https://discord.gg/nqbNxtw5QZ"
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/khisabkurniawn/arknesia-world/tree/main"
          nextThemes={{ disableTransitionOnChange: false, defaultTheme: 'dark' }}
          navigation={{ prev: false, next: false }}
          sidebar={{ toggleButton: false }}
          footer={<Footer />}
          darkMode={false}
          editLink={null}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}