import { useTranslation } from 'next-i18next';

export default function Favorite() {
    const { t } = useTranslation();
    return (
        <>
        <div>Favorite</div>
        <h2>{t('hello')}</h2>
        </>
        
    )
}