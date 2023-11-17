import { Footer } from '@/app/(marketing)/_components/footer';
import { Navbar } from '@/app/(marketing)/_components/navbar';

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default ClerkLayout;
