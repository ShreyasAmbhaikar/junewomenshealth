import Link from 'next/link';
import Image from 'next/image';
import { AnimatedHeading } from '../ui/AnimatedHeading';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageHeader({ title, breadcrumbs, bgImage }: PageHeaderProps) {
  return (
    <section className="bg-[#3E4E36] pt-[140px] pb-[80px] lg:pt-[180px] lg:pb-[120px] relative overflow-hidden">
      {bgImage && (
        <>
          <Image 
            src={bgImage} 
            alt={title} 
            fill 
            sizes="100vw"
            className="object-cover object-center z-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3E4E36]/60 via-[#3E4E36]/40 to-[#3E4E36]/70 z-0"></div>
        </>
      )}
      <div className="container mx-auto px-4 max-w-[1320px] relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <AnimatedHeading
            text={title}
            className="text-[40px] md:text-[50px] lg:text-[70px] font-bold text-white leading-[1.1] mb-6 capitalize drop-shadow-lg"
          />

          <nav
            role="navigation"
            aria-label="Breadcrumbs"
          >
            <ol className="flex items-center space-x-2 text-[16px] md:text-[18px] font-medium">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <li key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2 text-white/50">/</span>}
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="text-white/80 hover:text-white transition-colors duration-300"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white font-bold">{crumb.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
