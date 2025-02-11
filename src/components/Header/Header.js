import Image from 'next/image';
import Link from 'next/link';
import classes from '@/components/Header/Header.module.css';

const Header = () => {
    return <div className='h-[120px] flex justify-between items-center px-10'>
        <Image className='max-w-[330px]' src="/assets/images/logo.svg" alt="logo" width={330} height={65} />
        <div className={`flex gap-32`}>
            <Link href="/about">About</Link>
            <Link href="/work">Work</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
        </div>
    </div>
}

export default Header;