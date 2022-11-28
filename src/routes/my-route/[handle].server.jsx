import {
    gql,
    useShopQuery,
    useRouteParams,
    useServerAnalytics,
    ShopifyAnalyticsConstants,
    Seo,
  } from "@shopify/hydrogen";
  
  import { Layout } from "../../components/Layout.server";
  import { Suspense } from "react";
  import styles from "./my-route.module.css";
  export default function Info () {
   
  
    let { data } = useShopQuery({query: QUERY,});
    const { handle } = useRouteParams();
   
    return (
      <Layout>
        <section>
          <h1 className="">This is "{ handle }"  Route </h1>
          <h2 className={ styles.wrapperNew }> Checking Modular CSS </h2>
          {console.log(styles.wrapperNew)}

        <Suspense> 

       
        { data.products.nodes.map ( (product) => (
          <h1> { product.vendor } </h1> 
        )) }

        </Suspense>
        </section>
       
      </Layout>
    );
  }
  
  const QUERY = gql`
  query {
    products( first: 3) {
        nodes {
          vendor
        }
      }
    }
   `
  