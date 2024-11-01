import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { SocialsLink } from './SocialsLink';

export const Footer = () => {
  return (
    <section className='footer-section px-[4%] lg:px-[2%] py-12 bg-backgroundMain'>
      <div className='footer-section__content flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
        <h3 className='lg:text-3xl font-semibold'>Cart</h3>
        <div className='footer-section__about-me-container flex flex-col gap-2'>
          <p className='lg:text-lg'>Made by Fachri Achmad Maulana</p>
          <div className='footer-section__about-me-socials flex gap-2 items-center'>
            <SocialsLink href='https://github.com/fcram7'>
              <GitHubLogoIcon width='25' height='25' />
            </SocialsLink>
            <SocialsLink href='https://www.linkedin.com/in/fachriachmadmaulana/'>
              <LinkedInLogoIcon width='25' height='25' />
            </SocialsLink>
          </div>
        </div>
      </div>
    </section>
  );
};
