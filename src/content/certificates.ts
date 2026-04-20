import type { CertificateDef } from './types';

export const CERTIFICATE_DEFS: CertificateDef[] = [
  {
    id: '1',
    titleKey: 'certificates.automation.title',
    academyKey: 'certificates.automation.academy',
    dateObtainedKey: 'certificates.automation.dateObtained',
    sortDate: '2023-11-01',
  },
  {
    id: '2',
    titleKey: 'certificates.django.title',
    academyKey: 'certificates.django.academy',
    dateObtainedKey: 'certificates.django.dateObtained',
    verificationCode: '948d36fc-3952-434f-a701-b023f649f832',
    sortDate: '2024-12-01',
  },
  {
    id: '3',
    titleKey: 'certificates.testing.title',
    academyKey: 'certificates.testing.academy',
    dateObtainedKey: 'certificates.testing.dateObtained',
    verificationCode: 'bcd89e6a-399d-4261-9a98-d52b9efc16ad',
    sortDate: '2025-02-01',
  },
  {
    id: '4',
    titleKey: 'certificates.docker.title',
    academyKey: 'certificates.docker.academy',
    dateObtainedKey: 'certificates.docker.dateObtained',
    verificationCode: 'e759659f-40dc-4560-a84e-881b7cacf6d5',
    sortDate: '2025-06-01',
  },
  {
    id: '5',
    titleKey: 'certificates.flutter.title',
    academyKey: 'certificates.flutter.academy',
    dateObtainedKey: 'certificates.flutter.dateObtained',
    verificationCode: 'a312dc9b-2112-447e-9d12-9fe384778f49',
    sortDate: '2025-09-01',
  },
  {
    id: '6',
    titleKey: 'certificates.scrum.title',
    academyKey: 'certificates.scrum.academy',
    dateObtainedKey: 'certificates.scrum.dateObtained',
    verificationCode: 'b6c46be4-1ebe-4e75-bae0-39298aba4feO',
    sortDate: '2026-03-01',
  },
];

/**
 * Orden para la landing: primero los "desde/since" (ongoing) y luego por fecha
 * descendente (los más cercanos a hoy primero).
 */
export function sortCertificatesByRecency(defs: CertificateDef[]): CertificateDef[] {
  return [...defs].sort((a, b) => {
    const aOn = a.ongoing ? 1 : 0;
    const bOn = b.ongoing ? 1 : 0;
    if (aOn !== bOn) return bOn - aOn;
    return (b.sortDate ?? '').localeCompare(a.sortDate ?? '');
  });
}
