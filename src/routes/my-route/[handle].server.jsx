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
  
  export default function Info () {
   
  
    let data = useShopQuery({query: QUERY,});
    const { handle } = useRouteParams();
   
    return (
      <Layout>
        <section>
          <h1>This is "{ handle }"  Route </h1>
        <Suspense> 

       
        { data.data.products.nodes.map ( (product) => (
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
  