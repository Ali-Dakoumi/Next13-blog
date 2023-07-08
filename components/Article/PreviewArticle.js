import { PrismicRichText } from "@prismicio/react";
import { Link, Card, Button, CardActions, CardContent, CardMedia, Typography } from "../MUI/Proxy/index"
import { getExcerpt } from "../../lib/getExcerpt";




export const PreviewArticle = ({
  uid,
  title,
  article_image,
  body,
  author: { data: { name: [{ text: author_name }] } }
}) => {

  const excerpt = getExcerpt(body);

  return (
    <Card sx={{ maxWidth: 420 }} width="100%" height="100%">
      <Link underline="none" href={`/articles/${uid}`}>
        <CardMedia
          sx={{ height: 240 }}
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
        {excerpt && (
          <p className="leading-relaxed md:text-sm md:leading-relaxed">
            {excerpt}
          </p>
        )}
      </CardContent>
      <CardActions>
        <Link color="inherit" underline="none" href={`/articles/${uid}`}>
          <Button size="small">Read More</Button>
        </Link>
      </CardActions>
    </Card>)
}

