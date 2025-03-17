export default function Footer(){
    return(
        <>
            <footer className="relative text-center text-gray-700 mb-10">
            <div className="flex justify-center items-center mt-10">
              <img src="img/logo-sequentia.png" className="h-10" alt="Sequentia_Logo"/> 
            </div>
          
            <div>
              <p className="text-xs uppercase tracking-widest text-blue-900">ANYTIME, ANYWHERE</p>
              <div className="flex justify-center space-x-6 mt-4">

                  <a href="#" className="flex items-center justify-center w-10 h-10 border-2 rounded-full hover:text-gray-900">
                      <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" className="flex items-center justify-center w-10 h-10 border-2 rounded-full hover:text-gray-900">
                      <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="flex items-center justify-center w-10 h-10 border-2 rounded-full hover:text-gray-900">
                      <i className="fab fa-tiktok text-xl"></i>
                  </a>
              </div>
            </div>
          
            <div className="mt-6 text-gray-500 text-xs">
              <p>&copy; 2024, Sequentia Solutions S.L. 
                <a href="#" className="underline">Términos y condiciones</a>  
                <a href="#" className="underline">Política de privacidad</a> 
                <a href="#" className="underline">Política de cookies</a>
              </p>
            </div>
            </footer>
        </>
    );
}