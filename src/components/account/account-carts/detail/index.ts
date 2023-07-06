type AccountProperty =
  | 'firstName'
  | 'lastName'
  | 'eyeColor'
  | 'age'
  | 'email'
  | 'domain'
  | 'id'
  | 'phone'
  | 'ein'
  | 'username'
  | 'birthDate'
  | 'maidenName'
  | 'macAddress'
  | 'ssn'
  | 'bloodGroup'
  | 'university'
  | 'weight';
type DetailArr = { name: string; key: AccountProperty }[];

export const detailArr1: DetailArr = [
  { name: 'Frist Name', key: 'firstName' },
  { name: 'Last Name', key: 'lastName' },
  { name: 'Ailas', key: 'eyeColor' },
  { name: 'Role', key: 'age' },
  { name: 'Email', key: 'email' },
  { name: 'Status', key: 'domain' },
  { name: 'ID', key: 'id' },
  { name: 'Phone', key: 'phone' },
];
export const detailArr2: DetailArr = [
  { name: 'Contract Type', key: 'ein' },
  { name: 'Contract Start Date', key: 'username' },
  { name: 'Contract End Date', key: 'birthDate' },
  { name: 'Company', key: 'maidenName' },
  { name: 'Office', key: 'macAddress' },
];
export const detailArr3: DetailArr = [
  { name: 'Team', key: 'ssn' },
  { name: 'Position', key: 'bloodGroup' },
  { name: 'Level', key: 'weight' },
  { name: 'Skill', key: 'university' },
];
