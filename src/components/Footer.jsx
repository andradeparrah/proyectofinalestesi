import { useState } from 'react';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  return (
    <footer className="bg-black p-4 text-white text-center">
      <div className="">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2 cursor-pointer" onClick={toggleAbout}>
              Sobre Nosotros
            </h2>
            {showAbout && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor eros vel fermentum fringilla.
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2 cursor-pointer" onClick={toggleServices}>
              Redes Sociales
            </h2>
            {showServices && (
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            )}
          </div>
        </div>
<img className='m-auto w-48 h-48' src="public/assets/images/mercadopago.png" alt="" />
      </div>
    </footer>
  );
};
