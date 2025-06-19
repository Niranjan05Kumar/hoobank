import { logo } from "../assets";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className="flex flex-col my-15">
    <div className="flex md:flex-row flex-col justify-between gap-y-10">
      <div className="flex flex-col items-start justify-center gap-8">
        <img src={logo} alt="Hoobank" className="h-[80px] cursor-pointer" />
        <p className={`${styles.paragraph} sm:text-[18px]`}>
          A new way to make the payments <br className="hidden md:block" />{" "}
          easy, reliable and secure.
        </p>
      </div>
      <div className="w-[100%] md:w-[55%] flex flex-row flex-wrap justify-between gap-y-8">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.name} className="flex flex-col gap-y-4">
            <h4 className="text-[22px] font-semibold">{footerLink.title}</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLink.links.map((link, index) => (
                <li className="text-[#ffffffb3] text-[18px] hover:text-[#00f6ff] duration-500 ease-out">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between w-full flex-col md:flex-row gap-y-6 border-t-1 mt-14 pt-6">
      <h4>Copyright © 2021 HooBank. All Rights Reserved.</h4>
      <div className="flex gap-6">
        {socialMedia.map((social) => (
          <a href={social.link} key={social.id}>
            <img src={social.icon} alt={social.icon} />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
