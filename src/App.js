import React from 'react';
import Menu from 'hsl-shared-components/lib/Menu';
import MenuItem from 'hsl-shared-components/lib/Menu/MenuItem';
import Nav from 'hsl-shared-components/lib/Nav';
import NavItem from 'hsl-shared-components/lib/Nav/NavItem';
import DropdownMenu from 'hsl-shared-components/lib/DropdownMenu';
import Div from 'hsl-shared-components/lib/Div';
import Icons from 'hsl-shared-components/lib/Icons';
import A from 'hsl-shared-components/lib/Anchor';


const cog = <Icons.Cog />;

const DropdownContent = {
  content: [
    {
      header: 'Liikkumisen palveluita',
      links: [
        { text: 'Kaupunkipyörät', link: '/test' },
        { text: 'Pyöräparkki', link: '/test' },
        { text: 'Liityntäpysäköinti', link: '/test' },
        { text: 'Lähibussit', link: '/test' },
        { text: 'Pikaratikka', link: '/test' }
      ]
    },
    {
      header: 'Tietoa HSL:stä',
      links: [
        { text: 'Päätöksenteko', link: '/test' },
        { text: 'Strategia', link: '/test' },
        { text: 'Talous', link: '/test' },
        { text: 'Hankinnat', link: '/test' },
        { text: 'Julkaisut', link: '/test' },
        { text: 'HSL työpaikkana ja avoimet työpaikat', link: '/test' },
        { text: 'Viestintä', link: '/test' }
      ]
    }
  ],
  quickLinks: [
    {
      icon: <Icons.Briefcase />,
      text: 'Yrityksille',
      link: '/test'
    },
    {
      icon: cog,
      text: 'Oppilaitoksille',
      link: '/test'
    },
    {
      icon: cog,
      text: 'Asiakasedut',
      link: '/test'
    },
    {
      icon: cog,
      text: 'Osta HSL-fanituotteita',
      link: '/test'
    },
  ]
};

const Dropdown = (
  <DropdownMenu
    text="Lisää"
    content={DropdownContent}
  />
);

const icons = [
  [<Icons.Tickets />, 'Liput ja hinnat'],
  [<Icons.CustomerService />, 'Asiakaspalvelu'],
  [<Icons.Latest />, 'Uutta'],
];

const StyledA = A.extend`
  align-items: stretch;
  flex-direction: row;
  display: flex;
`;


  const logo = <Icons.HSLLogo />;
  const languages = [
    { id: 'fi', name: 'FI'},
    { id: 'sv', name: 'SV'},
    { id: 'en', name: 'EN'},
  ];

  const StyledDiv = Div.extend`
    height: 100rem;
  `;

  const menu = (<Menu
    languages={languages}
    selectedLanguage={'fi'}
    changeLanguage={(L) => (console.log(L))}
  >
    <MenuItem
      link={<StyledA href="/test" key="test1" />}
      icon={<Icons.TravelCard />}
      text="Matkakortti"
      key="travelcard"
      active
    />
    <MenuItem
      link={<StyledA href="/test" key="test2" />}
      icon={<Icons.SignIn />}
      text="Kirjaudu"
      key="signin"
    />
  </Menu>);

  const App = () => (<StyledDiv>
    <Nav logo={logo} menu={menu}>
      <NavItem
        key="Reittiopas"
        link={<StyledA href="/test" />}
        icon={<Icons.JourneyPlanner />}
        text="Reittiopas"
        active
      />
      {icons.map(icon =>
        (<NavItem
          key={icon[1]}
          link={<StyledA href="/test" />}
          icon={icon[0]}
          text={icon[1]}
        />)
     )}
      { Dropdown }
    </Nav>
  </StyledDiv>);

export default App;
