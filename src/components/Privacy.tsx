import { useTranslation } from 'react-i18next';

export default function Privacy() {
    const { t } = useTranslation();

    return (
        <>
            <main className="overflow-x-hidden dark:text-black dark:bg-gray-200">
                <section className="pt-20 pb-5 bg-top no-repeat; background-size: 100% 80%" style={{ backgroundImage: "url('img/banner-4.png')" }}>
                    <div className=" mx-auto py-2"></div>
                    <div className=" mx-auto py-5">
                        <div className="py-5 mx-16">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold">{t('Privacidad.01')}</h3>
                            </div>
                            <div className="mt-8 space-y-6 text-gray-700">
                                <p className="my-4">{t('Privacidad.02')}
                                    <a href="https://sequentia.app" className="text-blue-600 hover:underline">https://sequentia.app</a>.{t('Privacidad.02_1')}
                                    <br /><br />{t('Privacidad.02_2')}
                                    
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>{t('Privacidad.03')}</li>
                                    <li>{t('Privacidad.04')}</li>
                                    <li>{t('Privacidad.05')}</li>
                                    <li>{t('Privacidad.06')}<a href="mailto:info@sequentia.app" className="text-blue-600 hover:underline">info@sequentia.app</a></li>
                                    <li>{t('Privacidad.07')}<a href="https://sequentia.app" className="text-blue-600 hover:underline">https://sequentia.app</a></li>
                                </ul>
                                <br />
                                <h3 className="pt-5 text-xl font-semibold">{t('Privacidad.08')}</h3>
                                <p className="my-4">{t('Privacidad.09')}
                                    
                                    <br /><br />
                                    <strong>{t('Privacidad.10')}</strong>{t('Privacidad.11')}<br /><br />
                                    <strong>{t('Privacidad.12')}</strong>{t('Privacidad.13')}<br /><br />
                                    <strong>{t('Privacidad.14')}</strong>{t('Privacidad.15')}<br /><br />
                                    <strong>{t('Privacidad.16')}</strong>{t('Privacidad.17')}
                                </p>
                                <h3 className="pt-5 text-xl font-semibold">{t('Privacidad.18')}</h3>
                                <p className="my-4">
                                    {t('Privacidad.19')}<a href="https://sequentia.app" className="text-blue-600 hover:underline">https://sequentia.app</a>{t('Privacidad.20')}
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>{t('Privacidad.21')}</li>
                                    <li>{t('Privacidad.22')}</li>
                                </ul>
                                <h3 className="pt-5 text-xl font-semibold">{t('Privacidad.23')}</h3>
                                <p className="my-4">{t('Privacidad.24')}
                                    
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>{t('Privacidad.25')}</li>
                                    <li>{t('Privacidad.26')}</li>
                                    <li>{t('Privacidad.27')}</li>
                                    <li>{t('Privacidad.28')}</li>
                                    <li>{t('Privacidad.29')}</li>
                                </ul>
                                <p className="my-4">{t('Privacidad.30')}
                                    <a href="mailto:info@sequentia.app" className="text-blue-600 hover:underline">info@sequentia.app</a>{t('Privacidad.31')}
                                </p>
                                <h3 className="pt-5 text-xl font-semibold">{t('Privacidad.32')}</h3>
                                <p className="my-4">{t('Privacidad.33')}
                                    
                                </p>
                                <ul className="list-disc pl-5">
                                    <li><strong>{t('Privacidad.34')}</strong>{t('Privacidad.35')}</li>
                                    <li><strong>{t('Privacidad.36')}</strong>{t('Privacidad.37')}</li>
                                    <li><strong>{t('Privacidad.38')}</strong>{t('Privacidad.39')}</li>
                                    <li><strong>{t('Privacidad.40')}</strong>{t('Privacidad.41')}</li>
                                </ul>
                                <p className="my-4">{t('Privacidad.42')}
                                    
                                </p>
                                <h3 className="pt-5 text-xl font-semibold">{t('Privacidad.43')}</h3>
                                <p className="my-4">{t('Privacidad.44')}
                                    
                                </p>
                                <h3 className="pt-5 text-xl font-semibold">{t('Privacidad.45')}</h3>
                                <p className="my-4">{t('Privacidad.46')}
                                    
                                </p>
                                <h3 className="pt-5 text-xl font-semibold">{t('Privacidad.47')}</h3>
                                <p className="my-4">{t('Privacidad.48')}
                                    
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>{t('Privacidad.49')}</li>
                                    <li>{t('Privacidad.50')}</li>
                                    <li>
                                        Destinatarios:
                                        <ul className="list-disc pl-5">
                                            <li>{t('Privacidad.51')}<a href="https://mailchimp.com" className="text-blue-600 hover:underline">https://mailchimp.com</a></li>
                                            <li>{t('Privacidad.52')}</li>
                                            <li>{t('Privacidad.53')}</li>
                                            <li>{t('Privacidad.54')}</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p className="my-4">
                                    {t('Privacidad.55')}<a href="https://sequentia.app" className="text-blue-600 hover:underline">https://sequentia.app</a>{t('Privacidad.56')}
                                </p>
                                <h3 className="pt-5 text-xl font-semibold">{t('Privacidad.57')}</h3>
                                <p className="my-4">{t('Privacidad.58')}
                                    
                                </p>
                                <h3 className="pt-5 text-xl font-semibold">{t('Privacidad.59')}</h3>
                                <p className="my-4">{t('Privacidad.60')}
                                    <a href="mailto:info@sequentia.app" className="text-blue-600 hover:underline">info@sequentia.app</a>{t('Privacidad.61')}
                                </p>
                                <h3 className="pt-5 text-xl font-semibold">{t('Privacidad.62')}</h3>
                                <p className="my-4">{t('Privacidad.63')}
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
} 