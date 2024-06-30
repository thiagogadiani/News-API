import { useEffect, useState } from 'react';
import { Container, Grid, Button } from '@mui/material';
import NewsCard from '../components/NewsCard';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );
      const data = await res.json();
      setArticles(data.articles);
    };
    fetchArticles();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        {articles.length > 0 && (
          <NewsCard article={articles[currentIndex]} />
        )}
      </Grid>
      <Grid container justifyContent="center" marginTop={2}>
        <Button variant="contained" onClick={handleNext}>
          Próxima Notícia
        </Button>
      </Grid>
    </Container>
  );
};

export default Home;