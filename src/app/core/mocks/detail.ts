export const detailHeader = {
  title: 'titlecompbutton',
  titleTags: ['Functional', 'Atom'],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci odio, accumsan quis gravida at, congue eu ex.',
  icons: [
    { class: 'inbox', text: 'Passing' },
    { class: 'download', text: '17' },
    { class: 'public', text: 'Public' },
    { class: 'watch', text: 'Day ago' },
    { class: 'microsoft', text: '150.510 Mb' },
  ],
  related: ['Card', 'Accounts', 'Payments', 'Insurance', 'Loans'],
  team: {
    owner: ['alexangarcia'],
    coowners: ['mariobrown', 'davidbarreiro', 'martaperezgarcia'],
    collaborators: [
      'mariobrown',
      'davidbarreiro',
      'sergiomartin',
      'martaperezgarcia',
      'michaelsans',
    ],
  },
  componentDetail: {
    access: 'Yesterday',
    release: 'This month',
    tests: '11 of 24 detail',
    coverage: '70%',
  },
  analysis: ['icon-codiepie', 'icon-modx', 'icon-first-order', 'icon-gitlab', 'icon-grav'],
};

export const detailSections = {
  overview: {
    properties: [
      {
        name: 'Active',
        type: 'Boolean',
        default: 'false',
      },
      {
        name: 'Loading',
        type: 'Boolean',
        default: 'false',
      },
      {
        name: 'Disabled',
        type: 'Boolean',
        default: 'false',
      },
      {
        name: 'Type',
        type: 'String',
        default: '',
      },
      {
        name: 'Shape',
        type: 'String',
        default: '',
      },
      {
        name: 'Size',
        type: 'String',
        default: '',
      },
      {
        name: 'ClassObject',
        type: '',
        default: '',
      },
    ],
    references: [
      {
        url: 'https://stackblitz.com/edit/embed?embed=1&file=app/app.component.ts',
        thumb: 'https://via.placeholder.com/120.png/FFFFFF',
      },
      {
        url: 'https://stackblitz.com/edit/angular-css-host-deep?embed=1&file=app/app.component.ts',
        thumb: 'https://via.placeholder.com/120.png/FFFFFF',
      },
      {
        url:
          'https://stackblitz.com/edit/tympanus-linemenustyles?embed=1&file=app/app.component.ts',
        thumb: 'https://via.placeholder.com/120.png/FFFFFF',
      },
      {
        url: 'https://stackblitz.com/edit/ball-demo?embed=1&file=index.ts',
        thumb: 'https://via.placeholder.com/120.png/FFFFFF',
      },
    ],
  },
};
