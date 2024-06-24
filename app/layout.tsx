import '../app/globals.css'

export const metadata = {
  title: 'EPYC Frontend Assignment',
};

export default function RootLayout({ children } : any) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

