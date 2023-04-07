import PageHeader from './components/PageHeader';
import NewsletterEvidence from './components/NewsletterEvidence';

function App() {
  return (
    <>
      <PageHeader />
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#FFF9DC',
        }}
      >
        <NewsletterEvidence />
      </main>
    </>
  );
}

export default App;
