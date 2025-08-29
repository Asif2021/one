import "./globals.css";


export const metadata = {
  title: {
    template: '%s | One App',
    default: 'One App',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body      >
        {children}
      </body>
    </html>
  );
}
