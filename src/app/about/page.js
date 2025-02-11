'use client'
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const metricsArray = [{ name: 'Metric 1', value: 'Value 1' }, { name: 'Metric 2', value: 'Value 2' }, { name: 'Metric 3', value: 'Value 3' }, { name: 'Metric 4', value: 'Value 4' }, { name: 'Metric 5', value: 'Value 5' }];

const Page = () => {
    return <>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 m-20">
            <div id="image-and-work" className="flex justify-center items-center">
                <Image priority className="rounded-full" src="/assets/images/hero.jpeg" alt="Picture of Sankesh Jain, Who is a Web Developer" width={400} height={400} />
            </div>
            <div className="flex flex-col justify-center items-center">
                <video src="/assets/videos/about_us_laptop.mp4" autoPlay style={{ objectFit: 'cover', position: 'absolute', zIndex: '-1' }}
                    loop muted playsInline className="rounded-3xl" width="400" height="100px" />
                <p className="text-white inline">Work <MoveUpRight /></p>
            </div>
        </section>
        <section id="about-me-content" className="m-10 md:m-20">
            <h4 className="text-center text-4xl">One-liner introduction about yourself</h4>
            <p className="text-justify mt-5 md:mt-10">Lorem ipsum dolor sit amet consectetur. Volutpat maecenas etiam ac dictumst condimentum. Maecenas sit lectus platea amet purus neque massa urna proin. Purus morbi mi tristique non volutpat ridiculus proin eros natoque. Risus lacus ac mauris sit mauris ut ac scelerisque. Odio egestas faucibus tellus ante viverra morbi. Hendrerit orci placerat ac at ultrices vestibulum fames in. Nisl bibendum nibh volutpat condimentum. Etiam ut non a elementum varius turpis convallis magna. Nisl morbi sagittis pellentesque in sed cursus augue. Imperdiet leo enim dui amet quam. Enim mus nibh hendrerit ipsum sem egestas tortor elementum.
                Sed fringilla montes viverra est non integer sed. Mi.</p>
        </section>
        <section id="metrics" className="m-5 md:m-20 flex flex-col justify-center gap-10 items-center md:flex-row md:justify-around  bg-light-orange p-20 text-white rounded-tr-full rounded-bl-full md:rounded-tr-none md:rounded-bl-none md:rounded-tl-full md:rounded-br-full">
            {metricsArray.map((metric, index) => {
                return <div key={metric.name}>
                    <p>{metric.name}</p>
                    <h3>{metric.value}</h3>
                </div>
            })}

        </section>
    </>
};
export default Page;