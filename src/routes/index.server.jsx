import FeaturedCollections from "../components/FeaturedCollections.server";
import { Layout } from "../components/Layout.server";
import { Suspense } from "react";
import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <div className="p-6 md:p-8 lg:p-12">
        <h1 className="font-extrabold mb-4 text-5xl md:text-7xl">
          Hello world!
        </h1>
        <p className="font-bold mb-3">Welcome to Hydrogen.</p>
        <p>
          Hydrogen is a front-end web development framework used for building
          Shopify custom storefronts.
        </p>
      </div>
      <Link className={ styles.wrapper } to={`/my-route/new-page`} >
        Click Here
      </Link>
      {console.log(styles)}
      <Suspense>
        <FeaturedCollections />
      </Suspense>
    </Layout>
  );
}

