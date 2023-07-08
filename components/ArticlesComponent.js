
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { PreviewArticle } from "./Article";
import { Grid, Box } from "../components/MUI/Proxy"

const ArticlesComponent = ({ articles }) => {  
  return (
      <Grid container columns={{ xs: 1, sm: 8, md: 12 }}   spacing={{ xs: 2 }}>
        {articles.map(({ data, uid }, i) => (
          <Grid item  xs={1} sm={4} md={3} lg={4} key={i}>
            <PreviewArticle uid={uid} {...data} />
          </Grid>
        ))}
      </Grid>
  );
};

export default ArticlesComponent;