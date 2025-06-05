import FeaturedProducts from '@/components/home/FeaturtedProducts';
import Hero from '@/components/home/Hero';
import LoadingContainer from '@/components/global/LoadingContainer';
import { Suspense } from 'react';

function HomePage() {
  return (
    <div>
      <Hero />
      {/* Suspense is used to show a loading state while the FeaturedProducts component is being fetched */}
      {/* The fallback prop is used to show a loading state while the component is being fetched */}
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </div>
  );
}
export default HomePage;
