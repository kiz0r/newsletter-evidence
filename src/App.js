import PageHeader from './components/PageHeader';
import PageMain from './components/PageMain';
import NewsletterEvidence from './components/NewsletterEvidence';
import PageFooter from './components/PageFooter';

function App() {
  return (
    <>
      <PageHeader />
      <PageMain>
        <NewsletterEvidence />
      </PageMain>
      <PageFooter>Kyrylo Khomenko </PageFooter>
    </>
  );
}

export default App;
