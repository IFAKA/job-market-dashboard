import { CareerSalaryInfo } from '@/types/job';

export const careerSalaryData: CareerSalaryInfo = {
  spain: {
    'Data Science': {
      traineeSalary: 1100,
      traineeRange: '900-1,400',
      juniorSalary: 1400,
      juniorRange: '1,200-1,900',
      remoteDistribution: 'Remoto: 60 / Sitio: 20 / Híbrido: 20'
    },
    'DevOps': {
      traineeSalary: 1200,
      traineeRange: '1,000-1,500',
      juniorSalary: 1500,
      juniorRange: '1,300-2,000',
      remoteDistribution: 'Remoto: 65 / Sitio: 15 / Híbrido: 20'
    },
    'QA/Testing': {
      traineeSalary: 1000,
      traineeRange: '850-1,200',
      juniorSalary: 1200,
      juniorRange: '1,100-1,600',
      remoteDistribution: 'Remoto: 50 / Sitio: 30 / Híbrido: 20'
    },
    'Software Development': {
      traineeSalary: 1100,
      traineeRange: '950-1,300',
      juniorSalary: 1350,
      juniorRange: '1,100-1,700',
      remoteDistribution: 'Remoto: 60 / Sitio: 20 / Híbrido: 20'
    },
    'Frontend Development': {
      traineeSalary: 1050,
      traineeRange: '900-1,250',
      juniorSalary: 1250,
      juniorRange: '1,100-1,600',
      remoteDistribution: 'Remoto: 65 / Sitio: 15 / Híbrido: 20'
    },
    'Backend Development': {
      traineeSalary: 1100,
      traineeRange: '950-1,300',
      juniorSalary: 1350,
      juniorRange: '1,150-1,700',
      remoteDistribution: 'Remoto: 65 / Sitio: 15 / Híbrido: 20'
    },
    'Mobile Development': {
      traineeSalary: 1050,
      traineeRange: '900-1,250',
      juniorSalary: 1250,
      juniorRange: '1,100-1,600',
      remoteDistribution: 'Remoto: 60 / Sitio: 20 / Híbrido: 20'
    },
    'UI/UX Design': {
      traineeSalary: 900,
      traineeRange: '800-1,100',
      juniorSalary: 1100,
      juniorRange: '900-1,400',
      remoteDistribution: 'Remoto: 60 / Sitio: 15 / Híbrido: 25'
    },
    'Product Management': {
      traineeSalary: 1200,
      traineeRange: '1,000-1,400',
      juniorSalary: 1500,
      juniorRange: '1,300-2,000',
      remoteDistribution: 'Remoto: 55 / Sitio: 20 / Híbrido: 25'
    },
    'Cybersecurity': {
      traineeSalary: 1200,
      traineeRange: '1,000-1,500',
      juniorSalary: 1500,
      juniorRange: '1,300-2,000',
      remoteDistribution: 'Remoto: 70 / Sitio: 10 / Híbrido: 20'
    }
  },
  argentina: {
    'Data Science': {
      traineeSalary: 410000,
      traineeRange: '360,000-470,000',
      juniorSalary: 570000,
      juniorRange: '500,000-690,000',
      remoteDistribution: 'Remoto: 75 / Sitio: 10 / Híbrido: 15'
    },
    'DevOps': {
      traineeSalary: 430000,
      traineeRange: '380,000-490,000',
      juniorSalary: 600000,
      juniorRange: '520,000-720,000',
      remoteDistribution: 'Remoto: 80 / Sitio: 5 / Híbrido: 15'
    },
    'QA/Testing': {
      traineeSalary: 330000,
      traineeRange: '290,000-400,000',
      juniorSalary: 460000,
      juniorRange: '400,000-570,000',
      remoteDistribution: 'Remoto: 60 / Sitio: 20 / Híbrido: 20'
    },
    'Software Development': {
      traineeSalary: 420000,
      traineeRange: '370,000-480,000',
      juniorSalary: 580000,
      juniorRange: '520,000-700,000',
      remoteDistribution: 'Remoto: 75 / Sitio: 10 / Híbrido: 15'
    },
    'Frontend Development': {
      traineeSalary: 400000,
      traineeRange: '350,000-450,000',
      juniorSalary: 550000,
      juniorRange: '470,000-670,000',
      remoteDistribution: 'Remoto: 80 / Sitio: 5 / Híbrido: 15'
    },
    'Backend Development': {
      traineeSalary: 420000,
      traineeRange: '370,000-480,000',
      juniorSalary: 580000,
      juniorRange: '510,000-700,000',
      remoteDistribution: 'Remoto: 80 / Sitio: 5 / Híbrido: 15'
    },
    'Mobile Development': {
      traineeSalary: 400000,
      traineeRange: '350,000-450,000',
      juniorSalary: 550000,
      juniorRange: '470,000-670,000',
      remoteDistribution: 'Remoto: 80 / Sitio: 5 / Híbrido: 15'
    },
    'UI/UX Design': {
      traineeSalary: 370000,
      traineeRange: '320,000-410,000',
      juniorSalary: 500000,
      juniorRange: '430,000-610,000',
      remoteDistribution: 'Remoto: 70 / Sitio: 10 / Híbrido: 20'
    },
    'Product Management': {
      traineeSalary: 430000,
      traineeRange: '370,000-490,000',
      juniorSalary: 600000,
      juniorRange: '510,000-720,000',
      remoteDistribution: 'Remoto: 70 / Sitio: 10 / Híbrido: 20'
    },
    'Cybersecurity': {
      traineeSalary: 450000,
      traineeRange: '390,000-520,000',
      juniorSalary: 630000,
      juniorRange: '530,000-800,000',
      remoteDistribution: 'Remoto: 85 / Sitio: 5 / Híbrido: 10'
    }
  }
};

export const getSalaryData = (country: string, career: string) => {
  const countryData = careerSalaryData[country.toLowerCase() as keyof CareerSalaryInfo];
  return countryData?.[career];
};

export const getCountryCurrency = (country: string) => {
  switch (country.toLowerCase()) {
    case 'spain':
      return 'EUR';
    case 'argentina':
      return 'ARS';
    default:
      return 'USD';
  }
};

export const formatSalary = (salary: number, country: string) => {
  const currency = getCountryCurrency(country);
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(salary);
};
