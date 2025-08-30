import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <div className="bg-[#f9f9f9]">
        <div className="w-4/6 mx-auto flex flex-col gap-y-12 py-20">
          <span className="text-5xl font-medium w-130">
            Let's work together on your next product.
          </span>
          <div className='flex justify-between text-xl'>
            <span className='text-[#ffd55c]'><FontAwesomeIcon icon={faHandPointRight} /><span className='text-[#b31a53] underline decoration-1'>almilasucode@gmail.com</span></span>
            <div className='flex gap-4'>
              <span>Personal Blog</span>
              <span className='text-[#1fb57d]'>Github</span>
              <span className='text-[#1f87bd]'>Linkedin</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;