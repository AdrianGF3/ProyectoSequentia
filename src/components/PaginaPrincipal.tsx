import { useTranslation } from 'react-i18next';

export default function PaginaPrincipal() {
    const { t } = useTranslation();
    return (
        <>
            <main className="overflow-x-hidden dark:text-black dark:bg-gray-200">

                <section className="flex justify-end bg-cover bg-center" style={{ backgroundImage: "url('img/FondoMain.png')" }}>
                    <div className="p-10 md:pt-[8rem] sm:pt-[6rem] md:w-[45%] sm:w-[75%]">
                        <div className="bg-gray-300 p-6 bg-opacity-70 rounded-xl">
                            <h1 className="md:text-xl sm:text-base font-bold text-black">{t('aboutContent.Principal_1')}</h1>
                            <p className="mt-10 font-semibold md:text-base sm:text-[15px]">{t('aboutContent.Principal_2')}</p>
                            <p className="mt-10 font-semibold md:text-base sm:text-[15px]">{t('aboutContent.Principal_3')}</p>
                            <p className="mt-10 font-semibold md:text-base sm:text-[15px]">{t('aboutContent.Principal_4')}</p>
                            <div className="flex items-center gap-12 justify-center mt-10">
                                <a href="https://play.google.com/store/apps/details?id=com.unow.Sequentia&hl=es_419" target="_blank" rel="noopener noreferrer">
                                    <img src="img/play store sin bordes.png" alt="Play Store" className="tu-clase" />
                                </a>
                                <a href="https://apps.apple.com/es/app/sequentia/id6448124358" target="_blank" rel="noopener noreferrer">
                                    <img src="img/app store sin bordes.png" alt="App Store" className="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-cover bg-center bg-gray-200 pb-10">
                    <section className="mt-5 mx-14">
                        <h2 className="text-[30px] font-semibold text-[#002D43] pt-10">{t('aboutContent.Principal_5')}</h2>
                        <h1 className="text-xl font-bold mt-8">{t('aboutContent.Principal_6')}</h1>
                        <p className="mt-8 font-semibold text-base">{t('aboutContent.Principal_7')}</p>
                        <section className="pb-20 mt-14 gap-[2%] space-y-6 md:space-y-0 md:flex-row md:space-x-6 flex flex-col">

                            {/* Primer Card */}
                            <div className="bg-cover bg-center bg-white w-full md:w-[50%] rounded-xl shadow-lg">
                                <img src="img/pexels-cottonbro-4936367.jpg" alt="" className="rounded-t-xl" />
                                <div className="p-10">
                                <h1 className="text-xl font-bold mb-2">{t('aboutContent.Principal_8')}</h1>
                                    <hr />
                                    <p className="mt-5 font-semibold text-base">{t('aboutContent.Principal_9')}</p>
                                </div>
                            </div>

                            {/* Segundo Card */}
                            <div className="bg-cover bg-center bg-white w-full md:w-[50%] rounded-xl shadow-lg">
                                <img src="img/3. estaras siempre informado.jpg" alt="" className="rounded-t-xl" />
                                <div className="p-10">
                                    <h1 className="text-xl font-bold mb-2">{t('aboutContent.Principal_10')}</h1>
                                    <hr />
                                    <p className="mt-5 font-semibold text-base">{t('aboutContent.Principal_11')}</p>
                                </div>
                            </div>

                            {/* Tercer Card */}
                            <div className="bg-cover bg-center bg-white w-full md:w-[50%] rounded-xl shadow-lg">
                                <img src="img/pexels-andrea-piacquadio-3768131.jpg" alt="" className="rounded-t-xl" />
                                <div className="p-10">
                                    <h1 className="text-xl font-bold mb-2">{t('aboutContent.Principal_12')}</h1>
                                    <hr />
                                    <p className="mt-5 font-semibold text-base">{t('aboutContent.Principal_13')}</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>

                <section className="mt-5 bg-cover bg-center" style={{ backgroundImage: "url('img/shutterstock_140196853.jpg')" }}>
                    <section className="px-14">
                        <h1 className="pt-10 text-xl font-bold">{t('aboutContent.Principal_14')}</h1>
                        <p className="mt-10 font-semibold text-base">{t('aboutContent.Principal_15')}</p>
                        <section className="pb-40 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            {/* Primer Servicio */}
                            <div className="rounded-xl shadow-lg bg-white p-10 grid grid-cols-2 items-center px-20">
                                <img src="img/envioflores2.jpg" alt="" className="w-[60%]" />
                                <div>
                                    <h1 className="text-xl font-bold">{t('aboutContent.Principal_16')}</h1>
                                    <hr />
                                    <p className="mt-10 font-semibold text-base">{t('aboutContent.Principal_17')}</p>
                                </div>
                            </div>

                            {/* Segundo Servicio */}
                            <div className="rounded-xl shadow-lg bg-white p-10 grid grid-cols-2 items-center px-20">
                                <img src="img/cempasuchil.png" alt="" className="w-[60%]" />
                                <div>
                                    <h1 className="text-xl font-bold">{t('aboutContent.Principal_18')}</h1>
                                    <hr />
                                    <p className="mt-10 font-semibold text-base">{t('aboutContent.Principal_19')}</p>
                                </div>
                            </div>

                            {/* Tercer Servicio */}
                            <div className="rounded-xl shadow-lg bg-white p-10 grid grid-cols-2 items-center px-20">
                                <img src="img/font.png" alt="" className="w-[60%]" />
                                <div>
                                    <h1 className="text-xl font-bold">{t('aboutContent.Principal_20')}</h1>
                                    <hr />
                                    <p className="mt-10 font-semibold text-base">{t('aboutContent.Principal_21')}</p>
                                </div>
                            </div>

                            {/* Cuarto Servicio */}
                            <div className="rounded-xl shadow-lg bg-white p-10 grid grid-cols-2 items-center px-20">
                                <img src="img/signature.png" alt="" className="w-[60%]" />
                                <div>
                                    <h1 className="text-xl font-bold">{t('aboutContent.Principal_22')}</h1>
                                    <hr />
                                    <p className="mt-10 font-semibold text-base">{t('aboutContent.Principal_23')}</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>

                <section className="bg-gray-200 mt-10">
                    <section className="p-10 flex justify-end">
                        <div className="w-[50%]">
                            <img src="img/Group 1.png" alt="justify-center items-center" />
                        </div>
                        <div className="w-[50%]">
                            <h1 className="text-xl font-bold text-[#002D43]">{t('aboutContent.Principal_24')}</h1>
                            <p className="mt-10 font-semibold text-base">{t('aboutContent.Principal_25')}</p>
                            <p className="mt-10 font-semibold text-base">{t('aboutContent.Principal_26')}</p>
                            <ul className="list-disc pl-10">
                                <li className="font-semibold text-base">{t('aboutContent.Principal_27')}</li>
                                <li className="font-semibold text-base">{t('aboutContent.Principal_28')}</li>
                                <li className="font-semibold text-base" >{t('aboutContent.Principal_29')}</li>
                                <li className="font-semibold text-base">{t('aboutContent.Principal_30')}</li>
                            </ul>
                            <p className="mt-10 font-semibold text-base">{t('aboutContent.Principal_31')}</p>
                            <p className="mt-10 font-semibold text-base">{t('aboutContent.Principal_32')}</p>
                            <div className="bg-white rounded-[2vw] p-10 m-10 md:h-[300px] md:w-[700px] flex justify-center items-center sm:w-[450px] md:ml-[0px] sm:-ml-[140px]">
                                <img src="img/SEQUENTIA_ICONO_RGB.jpg" alt="" className="md:h-[180px] sm:h-[120px] rounded-[2vw] shadow-lg" />
                                <div className="flex flex-col items-center justify-center ml-12">
                                    <h1 className="text-xl font-bold text-[#002D43] mb-4">{t('aboutContent.Principal_33')}Sequentia app</h1>
                                    <p></p>
                                    <img src="img/app info.png" alt="" className="" />
                                    <div className="md:flex items-center md:gap-12 justify-center mt-6">
                                        <a href="https://play.google.com/store/apps/details?id=com.unow.Sequentia&hl=es_419" target="_blank" rel="noopener noreferrer">
                                            <img src="img/play store sin bordes.png" alt="Play Store" className="tu-clase" />
                                        </a>
                                        <a href="https://apps.apple.com/es/app/sequentia/id6448124358" target="_blank" rel="noopener noreferrer">
                                            <img src="img/app store sin bordes.png" alt="App Store" className="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
} 

// export default function PaginaPrincipal() {
//     return (
//         <>
//             <main className="overflow-x-hidden text-black dark:text-white bg-white dark:bg-gray-900">

//                 {/* Sección principal */}
//                 <section className="flex justify-end bg-cover bg-center" style={{ backgroundImage: "url('img/FondoMain.png')" }}>
//                     <div className="p-6 md:pt-32 sm:pt-24 w-full md:w-1/2 sm:w-3/4">
//                         <div className="bg-gray-300 dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-80 p-6 rounded-xl">
//                             <h1 className="text-xl font-bold">¿Quiénes somos?</h1>
//                             <p className="mt-6 font-medium text-base">
//                                 Sequentia nace en el mundo digital para transformar el modelo tradicional de publicación y comunicación de decesos...
//                             </p>
//                             <p className="mt-6 font-medium text-base">
//                                 En Sequentia encontrarás una comunidad de personas comprometidas...
//                             </p>
//                             <p className="mt-6 font-medium text-base">
//                                 Descárgate gratis nuestra app en Google Play y Apple Store.
//                             </p>
//                             <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
//                                 <a href="https://play.google.com/store/apps/details?id=com.unow.Sequentia&hl=es_419" target="_blank" rel="noopener noreferrer">
//                                     <img src="img/play store sin bordes.png" alt="Play Store" className="h-12" />
//                                 </a>
//                                 <a href="https://apps.apple.com/es/app/sequentia/id6448124358" target="_blank" rel="noopener noreferrer">
//                                     <img src="img/app store sin bordes.png" alt="App Store" className="h-12" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Cómo podemos ayudarte */}
//                 <section className="bg-gray-100 dark:bg-gray-800 pb-10 px-4 md:px-14">
//                     <h2 className="text-2xl font-semibold text-[#002D43] pt-10">¿CÓMO PODEMOS AYUDARTE?</h2>
//                     <h1 className="text-xl font-bold mt-6">Comparte y acompaña a tu ritmo</h1>
//                     <p className="mt-6 font-medium text-base">
//                         Cada uno de nosotros tenemos nuestra manera de comunicar las cosas...
//                     </p>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//                         {[
//                             {
//                                 title: "Comunica de forma sencilla",
//                                 text: "Puedes avisar de forma sencilla de las defunciones...",
//                                 img: "img/pexels-cottonbro-4936367.jpg",
//                             },
//                             {
//                                 title: "Escoge cómo quieres que te acompañen",
//                                 text: "Puedes escoger cómo quieres que te acompañen los demás...",
//                                 img: "img/3. estaras siempre informado.jpg",
//                             },
//                             {
//                                 title: "Estarás siempre informado",
//                                 text: "Estarás siempre informado, y podrás acompañar...",
//                                 img: "img/pexels-andrea-piacquadio-3768131.jpg",
//                             },
//                         ].map((item, index) => (
//                             <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
//                                 <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
//                                 <div className="p-6">
//                                     <h1 className="text-xl font-bold">{item.title}</h1>
//                                     <hr className="my-2" />
//                                     <p className="font-medium text-base">{item.text}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Servicios */}
//                 <section className="bg-cover bg-center text-black dark:text-white" style={{ backgroundImage: "url('img/shutterstock_140196853.jpg')" }}>
//                     <div className="px-4 md:px-14 py-10 bg-white/80 dark:bg-black/70">
//                         <h1 className="text-xl font-bold">Nuestros servicios en un solo clic</h1>
//                         <p className="mt-6 font-medium text-base">
//                             Ahora, puedes informar, estar cerca y acompañar...
//                         </p>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
//                             {[
//                                 {
//                                     title: "Envío de flores",
//                                     text: "Te facilitamos el envío de flores con un solo click...",
//                                     img: "img/envioflores2.jpg",
//                                 },
//                                 {
//                                     title: "Flores Digitales",
//                                     text: "También cuando estás lejos, te cedemos un espacio para enviar flores digitales.",
//                                     img: "img/cempasuchil.png",
//                                 },
//                                 {
//                                     title: "Acompañamiento",
//                                     text: "Podrás dejar un mensaje para acompañar en cualquier momento...",
//                                     img: "img/font.png",
//                                 },
//                                 {
//                                     title: "Libro de comentarios",
//                                     text: "Recoge todos los mensajes en un libro que recibirás cómodamente...",
//                                     img: "img/signature.png",
//                                 },
//                             ].map((item, index) => (
//                                 <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 grid grid-cols-2 items-center">
//                                     <img src={item.img} alt={item.title} className="w-28 md:w-32" />
//                                     <div className="ml-4">
//                                         <h2 className="text-lg font-bold">{item.title}</h2>
//                                         <hr className="my-2" />
//                                         <p className="text-base font-medium">{item.text}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Última sección: Beneficios de la app */}
//                 <section className="bg-gray-100 dark:bg-gray-900 px-4 md:px-14 py-10">
//                     <div className="flex flex-col md:flex-row items-center gap-10">
//                         <div className="w-full md:w-1/2">
//                             <img src="img/Group 1.png" alt="App visual" className="w-full" />
//                         </div>
//                         <div className="w-full md:w-1/2">
//                             <h1 className="text-xl font-bold text-[#002D43]">Estará ahí cuando la necesites</h1>
//                             <p className="mt-6 font-medium text-base">Únete a Sequentia y transforma la forma de comunicar...</p>
//                             <ul className="list-disc pl-5 mt-6 space-y-2">
//                                 <li>Comunicación de decesos sin horarios ni límites.</li>
//                                 <li>Acompañamiento y pésame sin prisas.</li>
//                                 <li>Información relevante siempre actualizada.</li>
//                                 <li>Servicios como envío de flores con un solo clic.</li>
//                             </ul>
//                             <p className="mt-6 font-medium">Forma parte de una comunidad comprometida y generosa.</p>
//                             <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mt-6 flex flex-col md:flex-row items-center">
//                                 <img src="img/SEQUENTIA_ICONO_RGB.jpg" alt="Sequentia icon" className="h-28 rounded-xl shadow-md" />
//                                 <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-center md:items-start">
//                                     <h2 className="text-lg font-bold text-[#002D43] mb-2">Sequentia App</h2>
//                                     <img src="img/app info.png" alt="App info" className="mb-4" />
//                                     <div className="flex gap-4">
//                                         <a href="https://play.google.com/store/apps/details?id=com.unow.Sequentia&hl=es_419" target="_blank" rel="noopener noreferrer">
//                                             <img src="img/play store sin bordes.png" alt="Play Store" className="h-10" />
//                                         </a>
//                                         <a href="https://apps.apple.com/es/app/sequentia/id6448124358" target="_blank" rel="noopener noreferrer">
//                                             <img src="img/app store sin bordes.png" alt="App Store" className="h-10" />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </>
//     );
// }
