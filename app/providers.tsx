'use client';
import { ThemeProvider } from './theme-provider';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  );
}
export default Providers;
