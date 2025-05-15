import HeroCarousel from './HeroCarousel';
import Link from 'next/link';
import { Button } from '../ui/button';

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          There are many varitions of shopping online, but you can be sure that
          we are the best.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/products'>Shop Now</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
