import { useTranslation } from 'react-i18next';

export default function TestamenoSocial() {
    const { t } = useTranslation();

    return (
        <>
            <div className="min-h-screen bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgb(245,245,245)_20%),url('/img/photo-1548266652-99cf27701ced.jpeg')]  bg-cover bg-center bg-no-repeat">
                <main className="pt-20">
                    <div className="ml-10 mt-20">
                        <section className="text-left mb-8">
                            <h2 className="text-sky-950 text-lg font-semibold">{t('testamento.01')}</h2>
                            <h3 className="text-3xl font-bold text-black mt-5">{t('testamento.02')}</h3>
                            <p className="mt-4 text-black text-justify mr-10">{t('testamento.03')}
                               
                            </p>

                        </section>
                    </div>
                    <h3 className="text-2xl font-bold text-black ml-10 mt-16 ">{t('testamento.04')}</h3>
                    <section className="flex justify-start gap-6 min-h-24 mt-24">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/3 h-80 flex flex-col ml-10" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-24 mt-26 ml-5 pt-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>
                            <div className="p-6 text-center  flex flex-col justify-between">
                                <hr />
                                <p className="text-black mt-6 text-left ">{t('testamento.05')}
                                    
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/3 h-80 flex flex-col" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-24 mt-26 ml-5 pt-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>
                            <div className="p-6 text-center  flex flex-col justify-between">
                                <hr />
                                <p className="text-black mt-2 text-left ">{t('testamento.06')}
                                    
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/3 h-80 flex flex-col " >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-24 mt-26 ml-5 pt-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            <div className="p-6 text-center  flex flex-col justify-between">
                                <hr />
                                <p className="text-black mt-2 text-left ">{t('testamento.07')}
                                    
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/3 h-80 flex flex-col mr-10" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-24 mt-26 ml-5 pt-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                            <div className="p-6 text-center  flex flex-col justify-between">
                                <hr />
                                <p className="text-black mt-2 text-left ">{t('testamento.08')}
                                    
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white flex justify-start gap-6 min-h-24 pt-24 mt-48" >
                        <div className="rounded-lg shadow-lg overflow-hidden w-1/2 flex flex-col ml-10 mb-24" >
                            <img src="img/pexels-jack-redgate-5855539.jpg" alt="Comunicando" className="w-full h-96 object-cover" />
                            <div className="p-6 text-center flex-1 flex flex-col justify-between">
                                <h4 className="text-xl font-bold text-black text-left">{t('testamento.09')}</h4>
                                <hr />
                                <p className="text-black mt-4 text-left ">{t('testamento.10')}
                                    
                                </p>
                                <button className="mt-4 w-full bg-transparent opacity-70 border border-neutral-430 text-gray-500 py-3 rounded-lg" disabled>{t('esquelas.09')}</button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/2 flex flex-col mr-10 mb-24">
                            <img src="img/pexels-cottonbro-7236513.jpg" alt="Notificarte" className="w-full h-96 object-cover" />
                            <div className="p-6 text-center flex-1 flex flex-col justify-between">
                                <h4 className="text-xl font-bold text-black text-left">{t('testamento.11')}</h4>
                                <hr />
                                <p className="text-black mt-4 text-left">{t('testamento.12')}
                                    
                                </p>
                                <button className="mt-4 w-full bg-transparent opacity-70 border border-neutral-430 text-gray-500 py-3 rounded-lg" disabled>{t('esquelas.09')}</button>
                            </div>
                        </div>
                    </section>

                    <section className=" text-center text-gray-700">
                        <div className=" bg-cover bg-center py-10 bg-white" style={{ backgroundImage: "url('img/photo-1548266652-99cf27701ced.jpeg')" }}>

                            <div className="">
                                <div className="flex m-10 bg-white rounded-lg shadow-lg border border-gray-200">
                                    <div className="w-1/2 p-10">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-left text-2xl font-bold">{t('testamento.13')}</h2>
                                        </div>
                                        <ul className="list-disc list-inside text-left space-y-2 mt-10">
                                            <li className="items-start">
                                                <span className="font-semibold">{t('testamento.14')}</span>{t('testamento.15')}
                                            </li>
                                            <li className="items-start">
                                                {t('testamento.16')}<span className="font-semibold">{t('testamento.17')}</span>{t('testamento.18')}
                                            </li>
                                            <li className="items-start">
                                                {t('testamento.19')}<span className="font-semibold">{t('testamento.20')}</span> {t('testamento.21')}
                                            </li>
                                        </ul>
                                        <p className="text-left mt-10 text-sm">
                                            {t('testamento.22')}<br></br> {t('testamento.23')}
                                        </p>
                                    </div>
                                    <div className="justify-end -m-10 opacity-40 flex justify-center items-center" style={{ backgroundImage: "url('img/icon-sequentia.png')" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
} 
