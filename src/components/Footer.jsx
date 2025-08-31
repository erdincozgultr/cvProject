import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <div className="bg-[#f9f9f9] dark:bg-[#141414]">
        <div className="w-4/6 mx-auto flex flex-col gap-y-12 py-30">
          <span className="text-5xl font-medium w-130 dark:text-[#aebccf]">
            Let's work together on your next product.
          </span>
          <div className='flex justify-between text-xl'>
            <span className='text-[#ffd55c] '><FontAwesomeIcon icon={faHandPointRight} /><span className='text-[#b31a53] hover:text-[#4731d3] dark:text-[#aebccf] dark:hover:text-[#9e97c4] underline decoration-1 cursor-pointer'>almilasucode@gmail.com</span></span>
            <div className='flex gap-4'>
              <span className='dark:text-[#aebccf] cursor-pointer'>Personal Blog</span>
              <span className='text-[#1fb57d] cursor-pointer'>Github</span>
              <span className='text-[#1f87bd] cursor-pointer'>Linkedin</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;