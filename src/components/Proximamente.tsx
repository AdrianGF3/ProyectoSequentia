// Proximamente.tsx, se utiliza para mostrar una página de "Próximamente" cuando esa pagina aun no la tenemos lista.
import { useTranslation } from 'react-i18next';

export default function Proximamente() {
    const { t } = useTranslation();

    return (
        <div className="flex justify-center items-center h-screen w-full bg-gray-100">
            <main className="text-4xl font-bold text-gray-800 text-center">
                {t('esquelas.09')}
            </main>
        </div>
    );
}
