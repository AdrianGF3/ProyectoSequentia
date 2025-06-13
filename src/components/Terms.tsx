import { useTranslation } from 'react-i18next';

export default function Terms() {
    const { t } = useTranslation();
    return (
        <>
            <main className="overflow-x-hidden dark:text-black dark:bg-gray-200">
                <section id="hero" className="py-5 pt-20 bg-cover no-repeat; background-size: 100% 80%"
                    style={{ backgroundImage: "url('img/banner-4.png')" }}>
                    <div className=" mx-auto py-2"></div>
                    <div className=" mx-auto py-5">
                        <div className="py-5 mx-16">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold">{t('Terminos.01')}</h3>
                            </div>
                            <div className="mt-8 space-y-6 text-gray-700">
                                <div>
                                    <h3 className="pt-5 text-xl font-semibold">{t('Terminos.02')}</h3>
                                    <p className="my-4">{t('Terminos.03')}</p>
                                    <ul className="list-disc pl-5">
                                        <li>{t('Terminos.04')}</li>
                                        <li>{t('Terminos.05')}</li>
                                        <li>{t('Terminos.06')}<a href="mailto:info@sequentia.app" className="text-blue-600 hover:underline">{t('Terminos.07')}info@sequentia.app</a></li>
                                        <li>{t('Terminos.08')}<a href="https://sequentia.app" className="text-blue-600 hover:underline">{t('Terminos.09')}https://sequentia.app</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="pt-5 text-xl font-semibold">{t('Terminos.10')}</h3>
                                    <p className="my-4">
                                        {t('Terminos.11')}<a href="https://sequentia.app" className="text-blue-600 hover:underline">{t('Terminos.12')}https://sequentia.app</a>{t('Terminos.13')}
                                    </p>
                                    <ul className="list-disc pl-5">
                                        <li>{t('Terminos.14')}</li>
                                        <li>{t('Terminos.15')}</li>
                                        <li>{t('Terminos.16')}</li>
                                    </ul>
                                    <p className="my-4">{t('Terminos.17')}
                                        
                                    </p>
                                </div>

                                <div>
                                    <h3 className="pt-5 text-xl font-semibold">{t('Terminos.18')}</h3>
                                    <p className="my-4">{t('Terminos.19')}
                                        
                                    </p>
                                    <p className="my-4">{t('Terminos.20')}
                                        
                                    </p>
                                </div>

                                <div>
                                    <h3 className="pt-5 text-xl font-semibold">{t('Terminos.21')}</h3>
                                    <p className="my-4">{t('Terminos.22')}</p>
                                </div>

                                <div>
                                    <h3 className="pt-5 text-xl font-semibold">{t('Terminos.23')}</h3>
                                    <p className="my-4">{t('Terminos.24')}
                                        
                                    </p>
                                </div>

                                <div>
                                    <h3 className="pt-5 text-xl font-semibold">{t('Terminos.25')}</h3>
                                    <p className="my-4">{t('Terminos.26')}
                                        
                                    </p>
                                    <p className="my-4">{t('Terminos.27')}
                                        
                                    </p>
                                    <p className="my-4">{t('Terminos.28')}
                                        
                                    </p>
                                </div>

                                <div>
                                    <h3 className="pt-5 text-xl font-semibold">{t('Terminos.29')}</h3>
                                    <p className="my-4">{t('Terminos.30')}</p>
                                </div>

                                <div>
                                    <h3 className="pt-5 text-xl font-semibold">{t('Terminos.31')}</h3>
                                    <p className="my-4">{t('Terminos.32')}
                                        
                                    </p>
                                </div>

                                <div>
                                    <h3 className="pt-5 text-xl font-semibold">{t('Terminos.33')}</h3>
                                    <p className="my-4">{t('Terminos.34')}
                                        
                                        <a href="mailto:info@sequentia.app" className="text-blue-600 hover:underline"> info@sequentia.app</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
} 
