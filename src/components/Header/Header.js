import Image from 'next/image';
import Link from 'next/link';
import classes from '@/components/Header/Header.module.css';


const Header = () => {
    return <div className='h-[120px] flex justify-between items-center px-10'>
        <Image priority className='max-w-[330px]' src="/assets/images/logo.svg" alt="logo" width={330} height={65} />
        <div className={`flex gap-32 font-karla`}>
            <Link className={`p-4`} href="/about">About</Link>
            <Link className={`p-4`} href="/work">Work</Link>
            <Link className={`p-4`} href="/blog">Blog</Link>
            <Link className={`${classes.ctabutton} p-4`} href="/contact">Contact</Link>
        </div>
    </div>
}

export default Header;