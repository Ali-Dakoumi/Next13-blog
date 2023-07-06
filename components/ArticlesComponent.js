import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { PreviewArticle } from "./Article";
import { Grid, Box } from "../components/MUI/Proxy"

const ArticlesComponent = ({ articles }) => {
  return (
      <Grid container columns={{ xs: 1, sm: 2, md: 4 }} direction="row" spacing={4}>
        {articles.map(({ data, uid }, i) => (
          <Grid item xs={4} sm={6} key={i}>
            <PreviewArticle uid={uid} {...data} />
          </Grid>
        ))}
      </Grid>
  );
};

export default ArticlesComponent;