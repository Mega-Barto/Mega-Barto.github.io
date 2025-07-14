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
    title: t('certificates.react.title'),
    academy: t('certificates.react.academy'),
    dateObtained: t('certificates.react.dateObtained'),
    verificationCode: 'REACT-2024-001'
  },
  {
    id: '2',
    title: t('certificates.typescript.title'),
    academy: t('certificates.typescript.academy'),
    dateObtained: t('certificates.typescript.dateObtained'),
    verificationCode: 'TS-2023-456'
  },
  {
    id: '3',
    title: t('certificates.javascript.title'),
    academy: t('certificates.javascript.academy'),
    dateObtained: t('certificates.javascript.dateObtained')
  }
];
