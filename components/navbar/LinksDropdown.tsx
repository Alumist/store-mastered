import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { links } from '@/utils/links';

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex gap-4 max-w-[100px]'>
          <LuAlignLeft className='h-6 w-6' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='start' sideOffset={10}>
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href}>
              <Link href={link.href} className='capitalize w-full'>
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
