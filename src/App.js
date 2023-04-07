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
          backgroundColor: '#C1C5C9',
        }}
      >
        <NewsletterEvidence />
      </main>
    </>
  );
}

export default App;
