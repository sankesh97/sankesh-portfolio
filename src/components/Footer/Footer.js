import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return <div className="flex w-full border-t border-[--orange] p-10">
        <div className="flex flex-col flex-1 justify-center content-center">
            <Image className="max-w-[254px]" src="/assets/images/logo.svg" alt="logo" width={494} height={98} />
        </div>
        <div className="flex flex-col flex-1 justify-center align-middle">
            <h3 className="font-bold">Quick Links</h3>
            <div>
                <ul>
                    <li><Link href={`/about`}>About</Link></li>
                    <li><Link href={`/work`}>Work</Link></li>
                    <li><Link href={`/blog`}>Blog</Link></li>
                    <li><Link href={`/contact`}>Contact</Link></li>
                </ul>
            </div>
        </div>
        <div className="flex flex-1 flex-col align-middle">
            <h3 className="font-bold">Social Links</h3>
            <div className="flex gap-5">
                <Link target="_blank" href={`https://www.facebook.com/chickujain`}><Image src="/assets/images/facebook.svg" alt="facebook" width={30} height={30} /></Link>
                <Link target="_blank" href={`https://www.instagram.com/sankesh97`}><Image src="/assets/images/instagram.svg" alt="twitter" width={30} height={30} /></Link>
                <Link target="_blank" href={`https://www.linkedin.com/in/sankesh-jain/`}><Image src="/assets/images/linkedin.svg" alt="linkedin" width={30} height={30} /></Link>
            </div>
        </div>
    </div>
}

export default Footer;