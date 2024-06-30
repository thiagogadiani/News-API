import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const NewsCard = ({ article }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={article.urlToImage}
        alt={article.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;