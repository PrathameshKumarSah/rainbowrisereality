import React from 'react'
import { Link } from 'react-router-dom'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../constant/data'
import log from '../assets/rrr logo.png'

const Footer = () => {
  return (
    <footer className='bg-secondary'>
      <div className="rounded-t-lg pt-12 px-6 xl:pt-20 pb-8 pl-6">
        <h3 className='h3 text-white'>Explore RealEstate opportunities with Us?</h3>
        <p className='text-[#FFF8DE]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis deleniti repellendus.</p>
        <hr className="text-[#FBFBFB] my-8 bg-slate-900/30 h-[2px]" />
        {/* container */}
        <div className=" text-white flex justify-between flex-wrap gap-x-2 gap-y-8">
          <div className="max-w-sm">
            <Link to={'/'} className="flex items-center gap-x-2">
            <img src={log}></img> 
            </Link>
            <p className=" text-[#FFF8DE] py-4">
                At Rainbow Rise Reality, we want you to be proud of your choice of real estate agent, therefore we are committed to delivering a service above and beyond your expectations in every aspect of our business.
            </p>
          </div>
          <div className="text-[#FFF8DE] flex justify-between flex-wrap gap-8">
            {FOOTER_LINKS.map((col)=> (
              <FooterColumn key={col.title} title={col.title}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                  {col.links.map((link)=> (
                    <Link to={link.value} key={link.label}>{link.label}</Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="text-[#FFF8DE] flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link)=> (
                  <Link to={'/'} key={link.label} className="text-[#FFF8DE] flex gap-4 md:flex-col lg:flex-row">
                    <p className='text-[#FFF8DE]'>{link.label} : &nbsp;{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="text-[#FFF8DE] flex">
              <FooterColumn title={SOCIALS.title}>
                 <ul className="flex gap-4">
                  {SOCIALS.links.map((link)=> (
                    <Link to={'/'} key={link.id} className="text-xl">
                      {link.icon}
                    </Link>
                  ))}
                 </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <p className="text-[#FFF8DE]  bg-[#000000] medium-14.4 py-2 px-8 flexBetween"><span>2024 Rainbow Rise Realty</span>All rights reserved</p>
    </footer>
  );
};

export default Footer;

const FooterColumn = ({title, children}) => {
  return (
    <div className="text-[#FFF8DE] flex flex-col gap-5">
      <h4 className="text-[#FFF8DE] bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};
