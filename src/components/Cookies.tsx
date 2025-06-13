import { useTranslation } from 'react-i18next';

export default function Cookies() {
    const { t } = useTranslation();
    return (
        <>
            <main className="overflow-x-hidden dark:text-black dark:bg-gray-200">
                <section
                    className="pt-20 pb-5 bg-top"
                    style={{
                        backgroundImage: "url('img/banner-4.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 80%",
                    }}
                >
                    <div className="mx-auto py-2"></div>
                    <div className="mx-auto py-5">
                        <div className="py-5 mx-16">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold">{t('Cookies.01')}</h3>
                            </div>
                            <div className="mt-8 space-y-6 text-gray-700">
                                <p className="my-4">{t('Cookies.02')}
                                </p>

                                <h3 className="pt-5 text-xl font-semibold">{t('Cookies.03')}</h3>
                                <p className="my-4">{t('Cookies.04')}
                                    
                                </p>

                                <h3 className="pt-5 text-xl font-semibold">{t('Cookies.05')}</h3>
                                <p className="my-4">{t('Cookies.06')}
                                    <a href="https://sequentia.app" className="text-blue-600 hover:underline">https://sequentia.app</a>{t('Cookies.07')}
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>
                                        <strong>{t('Cookies.08')}</strong>{t('Cookies.09')}
                                    </li>
                                    <li>
                                        <strong>{t('Cookies.10')}</strong>{t('Cookies.11')}
                                    </li>
                                    <li>
                                        <strong>{t('Cookies.12')}</strong>{t('Cookies.13')}
                                    </li>
                                    <li>
                                        <strong>{t('Cookies.14')}</strong>{t('Cookies.15')}
                                    </li>
                                    <li>
                                        <strong>{t('Cookies.16')}</strong>{t('Cookies.17')}
                                    </li>
                                </ul>

                                <h3 className="pt-5 text-xl font-semibold">{t('Cookies.18')}</h3>
                                <p className="my-4">{t('Cookies.19')}
                                    
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>
                                        <strong>Firefox: </strong>
                                        <a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we"
                                            className="text-blue-600 hover:underline">
                                            http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we
                                        </a>
                                    </li>
                                    <li>
                                        <strong>Safari: </strong>
                                        <a href="http://support.apple.com/kb/HT1677?viewlocale=es_ES"
                                            className="text-blue-600 hover:underline">
                                            http://support.apple.com/kb/HT1677?viewlocale=es_ES
                                        </a>
                                    </li>
                                    <li>
                                        <strong>Google Chrome: </strong>
                                        <a href="https://support.google.com/chrome/answer/95647?hl=es"
                                            className="text-blue-600 hover:underline">
                                            https://support.google.com/chrome/answer/95647?hl=es
                                        </a>
                                    </li>
                                </ul>

                                <h3 className="pt-5 text-xl font-semibold">{t('Cookies.20')}</h3>
                                <p className="my-4">{t('Cookies.21')}
                                    
                                    <br /><br />{t('Cookies.22')}
                                    
                                    <br /><br />{t('Cookies.23')}
                                    
                                    <br /><br />{t('Cookies.24')}
                                    
                                </p>

                                <h3 className="pt-5 text-xl font-semibold">{t('Cookies.25')}</h3>
                                <p className="my-4">{t('Cookies.26')}
                                    
                                </p>

                                <h3 className="pt-5 text-xl font-semibold">{t('Cookies.27')}</h3>
                                <p className="my-4">{t('Cookies.28')}
                                    <a href="mailto:info@sequentia.app" className="text-blue-600 hover:underline">info@sequentia.app</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
