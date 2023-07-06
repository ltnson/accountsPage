export type FilterOption = {
  'hair.color': string;
  'hair.type': string;
  eyeColor: string;
};

type FilterFormArr = {
  label: string;
  array: string[];
  key?: string;
}[];

export const filterArr: FilterFormArr = [
  {
    label: 'Hair Color',
    array: ['Brown', 'Chestnut', 'Black'],
    key: 'hair.color',
  },
  {
    label: 'Hair Type',
    array: ['Curly', 'Straight', 'Very curly'],
    key: 'hair.type',
  },
  {
    label: 'Eye Color',
    array: ['Blue', 'Gray', 'Amber', 'Brown'],
    key: 'eyeColor',
  },
  {
    label: 'Level ',
    array: ['Intern ', 'test 1', 'test 2', 'test 3'],
  },
  {
    label: 'Skill ',
    array: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Contact Type',
    array: ['Type', 'Type2', 'Type3', 'Type4'],
  },
];

export const filterOp: FilterOption = {
  'hair.color': '',
  'hair.type': '',
  eyeColor: '',
};
