import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Link, Card, Button, CardActions, CardContent, CardMedia, Typography } from "../MUI/Proxy/index"


export const PreviewArticle = ({
  uid,
  title,
  article_image,
  author: { data: { name: [{ text: author_name }] } }
}) => (
  <Card sx={{ maxWidth: 345 }} width="100%" height="100%">
    <Link underline="none" href={`/articles/${uid}`}>
      <CardMedia
        sx={{ height: 140 }}
        image={article_image.url}
      />
    </Link>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        <Link color="inherit" underline="none" href={`/articles/${uid}`}>
          <PrismicRichText field={title} />
        </Link>
      </Typography>
      <Typography gutterBottom variant="p" component="div">
        {author_name}
      </Typography>
    </CardContent>
    <CardActions>
      <Link color="inherit" underline="none" href={`/articles/${uid}`}>
        <Button size="small">Read More</Button>
      </Link>
    </CardActions>
  </Card>
);

