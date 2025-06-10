import { useTranslation } from 'react-i18next';

export default function Esquelas() {
    const { t } = useTranslation();
    return (
        <>
        <div className="bg-cover bg-center bg-no-repeat min-h-screen 
            bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgb(245,245,245)_80%),url('img/pexels-arina-krasnikova-7002929.jpg')] bg-cover bg-center bg-no-repeat">
            <main className="p-20">
                <div className="ml-10 mt-20">
                    <section className="text-left mb-8">
                        <h2 className="text-sky-950 text-lg font-semibold">{t('esquelas.01')}</h2>
                        <h3 className="text-3xl font-bold text-black">{t('esquelas.02')}</h3>
                        <p className="mt-4 text-black text-justify mr-10">{t('esquelas.03')}
                            
                        </p>
                    </section>
                </div>

                <section className="flex justify-start gap-6 min-h-24">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/3 flex flex-col ml-10 " >
                        <img src="img/pexels-photo-5910801.jpeg" alt="Comunicando" className="w-full h-80 object-cover" />
                        <div className="p-6 text-center flex-1 flex flex-col justify-between">
                            <h4 className="text-xl font-bold text-black text-left">{t('esquelas.04')}</h4>
                            <hr />
                            <p className="text-black mt-2 text-left ">{t('esquelas.05')}
                            </p>
                            <button className="mt-4 w-full bg-transparent opacity-70 border border-neutral-430 text-gray-500 py-3 rounded-lg" disabled>{t('esquelas.06')}</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/3 flex flex-col">
                        <img src="img/pexels-mart-production-7329675.jpg" alt="Notificarte" className="w-full h-80 object-cover" />
                        <div className="p-6 text-center flex-1 flex flex-col justify-between">
                            <h4 className="text-xl font-bold text-black text-left">{t('esquelas.07')}</h4>
                            <hr />
                            <p className="text-black mt-2 text-left">{t('esquelas.08')}
                            </p>
                            <button className="mt-4 w-full bg-transparent opacity-70 border border-neutral-430 text-gray-500 py-3 rounded-lg" disabled>{t('esquelas.09')}</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/3 flex flex-col mr-10">
                        <img src="img/pexels-olenka-sergienko-11116435.jpg" alt="Acompañar" className="w-full h-80 object-cover" />
                        <div className="p-6 text-center flex-1 flex flex-col justify-between">
                            <h4 className="text-xl font-bold text-black text-left">{t('esquelas.10')}</h4>
                            <hr />
                            <p className="text-black mt-2 text-left">{t('esquelas.11')}
                            </p>
                            <button className="mt-4 w-full bg-transparent opacity-70 border border-neutral-430 text-gray-500 py-3 rounded-lg" disabled>{t('esquelas.12')}</button>
                        </div>
                    </div>
                </section>
                <div className="ml-10 mt-12">
                    <section className="text-left mb-8">
                        <p className="mt-4 text-black text-justify mr-10">{t('esquelas.13')}
                            
                        </p>

                        <p className="mt-4 text-black text-justify mr-10">
                            <b>{t('esquelas.14')}</b>{t('esquelas.15')}
                        </p>
                    </section>
                </div>
            </main>
            </div>
        </>
    );
} 

// export default function Esquelas() {
//     return (
//         <div className="bg-cover bg-center bg-no-repeat min-h-screen 
//             bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgb(245,245,245)_80%),url('img/pexels-arina-krasnikova-7002929.jpg')]
//             dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgb(31,41,55)_80%),url('img/pexels-arina-krasnikova-7002929.jpg')]">
            
//             <main className="p-6 md:p-20">
//                 <div className="md:ml-10 mt-10 md:mt-20">
//                     <section className="text-left mb-8">
//                         <h2 className="text-sky-950 dark:text-sky-300 text-lg font-semibold">HOMENAJES QUE PERDURAN EN EL TIEMPO</h2>
//                         <h3 className="text-3xl font-bold text-black dark:text-white">Esquelas</h3>
//                         <p className="mt-4 text-black dark:text-gray-200 text-justify md:mr-10">
//                             En Sequentia, te ayudamos a mantener vivos los recuerdos de tus seres queridos de una forma sencilla y especial.
//                             Un esquela es mucho más que un anuncio. Es una forma de informar, recordar y rendir homenaje a quienes ya no están con nosotros.
//                             En Sequentia, llevamos esta tradición al mundo digital, creando un espacio donde cada recuerdo puede.
//                         </p>
//                     </section>
//                 </div>

//                 <section className="flex flex-col md:flex-row justify-start gap-6 min-h-24">
//                     {/* Card 1 */}
//                     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/3 flex flex-col ml-0 md:ml-10">
//                         <img src="img/pexels-photo-5910801.jpeg" alt="Comunicando" className="w-full h-64 md:h-80 object-cover" />
//                         <div className="p-6 text-center flex-1 flex flex-col justify-between">
//                             <h4 className="text-xl font-bold text-black dark:text-white text-left">Comunicar</h4>
//                             <hr className="border-gray-300 dark:border-gray-600" />
//                             <p className="text-black dark:text-gray-200 mt-2 text-left">
//                                 Publicar esquelas de forma gratuita para comunicar un fallecimiento,
//                                 recordar aniversarios o simplemente rendir un homenaje especial.
//                             </p>
//                             <button className="mt-4 w-full bg-transparent opacity-70 border border-neutral-400 dark:border-gray-500 text-gray-500 dark:text-gray-300 py-3 rounded-lg" disabled>
//                                 Próximamente...
//                             </button>
//                         </div>
//                     </div>

//                     {/* Card 2 */}
//                     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/3 flex flex-col">
//                         <img src="img/pexels-mart-production-7329675.jpg" alt="Notificarte" className="w-full h-64 md:h-80 object-cover" />
//                         <div className="p-6 text-center flex-1 flex flex-col justify-between">
//                             <h4 className="text-xl font-bold text-black dark:text-white text-left">Notificarte</h4>
//                             <hr className="border-gray-300 dark:border-gray-600" />
//                             <p className="text-black dark:text-gray-200 mt-2 text-left">
//                                 Consultar esquelas sin necesidad de registrarte,
//                                 porque creemos que la información y los recuerdos deben ser accesibles para todos.
//                             </p>
//                             <button className="mt-4 w-full bg-transparent opacity-70 border border-neutral-400 dark:border-gray-500 text-gray-500 dark:text-gray-300 py-3 rounded-lg" disabled>
//                                 Próximamente...
//                             </button>
//                         </div>
//                     </div>

//                     {/* Card 3 */}
//                     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/3 flex flex-col mr-0 md:mr-10">
//                         <img src="img/pexels-olenka-sergienko-11116435.jpg" alt="Acompañar" className="w-full h-64 md:h-80 object-cover" />
//                         <div className="p-6 text-center flex-1 flex flex-col justify-between">
//                             <h4 className="text-xl font-bold text-black dark:text-white text-left">Acompañar</h4>
//                             <hr className="border-gray-300 dark:border-gray-600" />
//                             <p className="text-black dark:text-gray-200 mt-2 text-left">
//                                 Enviar flores digitales o naturales y otros servicios,
//                                 para mostrar tu cariño y apoyo de manera especial.
//                             </p>
//                             <button className="mt-4 w-full bg-transparent opacity-70 border border-neutral-400 dark:border-gray-500 text-gray-500 dark:text-gray-300 py-3 rounded-lg" disabled>
//                                 Próximamente...
//                             </button>
//                         </div>
//                     </div>
//                 </section>

//                 <div className="md:ml-10 mt-12">
//                     <section className="text-left mb-8">
//                         <p className="mt-4 text-black dark:text-gray-200 text-justify md:mr-10">
//                             Para publicar una esquela, solo necesitas registrarte como usuario. Es un proceso rápido y sencillo que te permitirá compartir
//                             de manera inmediata y efectiva tus mensajes con quienes más importan.
//                         </p>

//                         <p className="mt-4 text-black dark:text-gray-200 text-justify md:mr-10">
//                             <b className="text-black dark:text-white">Porque cada memoria cuenta</b>, en Sequentia modernizamos la manera de recordar.
//                         </p>
//                     </section>
//                 </div>
//             </main>
//         </div>
//     );
// }
