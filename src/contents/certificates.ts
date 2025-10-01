import type { TFunction } from 'i18next';

export interface Certificate {
    id: string;
    title: string;
    academy: string;
    dateObtained: string;
    verificationCode?: string;
}

export const getCertificates = (t: TFunction): Certificate[] => [
    {
        id: '1',
        title: t('certificates.automation.title'),
        academy: t('certificates.automation.academy'),
        dateObtained: t('certificates.automation.dateObtained')
    },
    {
        id: '2',
        title: t('certificates.django.title'),
        academy: t('certificates.django.academy'),
        dateObtained: t('certificates.django.dateObtained'),
        verificationCode: '948d36fc-3952-434f-a701-b023f649f832'
    },
    {
        id: '3',
        title: t('certificates.testing.title'),
        academy: t('certificates.testing.academy'),
        dateObtained: t('certificates.testing.dateObtained'),
        verificationCode: 'bcd89e6a-399d-4261-9a98-d52b9efc16ad'
    },
    {
        id: '4',
        title: t('certificates.docker.title'),
        academy: t('certificates.docker.academy'),
        dateObtained: t('certificates.docker.dateObtained'),
        verificationCode: 'e759659f-40dc-4560-a84e-881b7cacf6d5'
    },
    {
        id: '5',
        title: t('certificates.flutter.title'),
        academy: t('certificates.flutter.academy'),
        dateObtained: t('certificates.flutter.dateObtained'),
        verificationCode: 'a312dc9b-2112-447e-9d12-9fe384778f49'
    }
];
