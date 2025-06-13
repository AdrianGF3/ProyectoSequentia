import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="relative text-center text-gray-700 pb-10 dark:text-black dark:bg-white">
        <div className="flex justify-center items-center pt-10">
          <img src="img/logo-sequentia.png" className="h-10" alt="Sequentia_Logo" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-blue-900">ANYTIME, ANYWHERE</p>
          <div className="flex justify-center space-x-6 mt-4">

            <a href="https://www.linkedin.com/in/sequentia/" className="flex items-center justify-center w-10 h-10 border-2 rounded-full hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://www.instagram.com/sequentia_app/" className="flex items-center justify-center w-10 h-10 border-2 rounded-full hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://www.tiktok.com/@sequentiasolutions" className="flex items-center justify-center w-10 h-10 border-2 rounded-full hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok text-xl"></i>
            </a>

          </div>
        </div>

        <div className="mt-6 text-gray-500 text-xs">
          <p>&copy; 2024, Sequentia Solutions S.L.
            <Link to="/Terms" className="underline">{t('foter.ter')}</Link>
            <Link to="/Privacy" className="underline">{t('foter.pri')}</Link>
            <Link to="/Cookies" className="underline">{t('foter.coo')}</Link>
          </p>
        </div>
      </footer>
    </>
  );
}