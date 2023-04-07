import PageHeader from './components/PageHeader';
import PageMain from './components/PageMain';
import NewsletterEvidence from './components/NewsletterEvidence';
import PageFooter from './components/PageFooter';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/khomenkokyrylo/',
    icon: <FaLinkedin />,
  },
  { name: 'GitHub', link: 'https://github.com/kiz0r', icon: <FaGithub /> },
  {
    name: 'Telegram',
    link: 'https://t.me/khomenkodev',
    icon: <FaTelegramPlane />,
  },
];

function App() {
  return (
    <>
      <PageHeader />
      <PageMain>
        <NewsletterEvidence />
      </PageMain>
      <PageFooter>
        <p>Kyrylo Khomenko</p>
        <ul>
          {SOCIAL_LINKS.map(({ name, link, icon }) => (
            <li key={name}>
              <a href={link}>{icon}</a>
            </li>
          ))}
        </ul>
      </PageFooter>
    </>
  );
}

export default App;
