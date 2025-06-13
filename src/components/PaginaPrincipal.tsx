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
                            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mt-6 flex flex-col md:flex-row items-center">
                                <img src="img/SEQUENTIA_ICONO_RGB.jpg" alt="" className="h-28 rounded-xl shadow-md" />
                                <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-center md:items-start">
                                    <h1 className="text-lg font-bold text-[#002D43] mb-2">{t('aboutContent.Principal_33')}</h1>
                                    <img src="img/app info.png" alt="" className="mb-4" />
                                    <div className="flex gap-4">

                                        <a href="https://play.google.com/store/apps/details?id=com.unow.Sequentia&hl=es_419" 
                                        target="_blank" rel="noopener noreferrer">
                                            <img src="img/play store sin bordes.png" alt="Play Store" className="h-10" />
                                        </a>
                                        <a href="https://apps.apple.com/es/app/sequentia/id6448124358" 
                                        target="_blank" rel="noopener noreferrer">
                                            <img src="img/app store sin bordes.png" alt="App Store" className="h-10" />
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
