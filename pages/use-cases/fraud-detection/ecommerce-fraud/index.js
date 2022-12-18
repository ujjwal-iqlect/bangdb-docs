import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";
import HighlightedCpp from "../../../../components/HighlightedCpp";
import Image from "next/image";

export default function FDecommerceFraud() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>E-commerce fraud - BangDB</title>
        <meta
          name="description"
          content="Ecommerce fraud is when a fraudster commits a crime via an online store by manipulating the transaction process using stolen or scammed credit card."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="E-commerce fraud - BangDB" />
        <meta
          property="og:description"
          content="Ecommerce fraud is when a fraudster commits a crime via an online store by manipulating the transaction process using stolen or scammed credit card."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="E-commerce fraud - BangDB" />
        <meta
          name="twitter:description"
          content="Ecommerce fraud is when a fraudster commits a crime via an online store by manipulating the transaction process using stolen or scammed credit card."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">E-commerce fraud</h1>
        <div className="article-body">
          <p>
            Ecommerce fraud is when a fraudster commits a crime via an online
            store by manipulating the transaction process using stolen or
            scammed credit card information to illegally obtain the product or
            payment.
          </p>
          <p>
            An online store is naturally vulnerable to ecommerce fraud since
            transactions occur without the user being in direct contact,
            therefore allowing more opportunities for fraudulent activity.
          </p>
          <p>
            One of the ecommerce fraud involves &quot;reshipping scam&quot;.The
            reshipping scam, which involves fraudsters who use stolen credit
            cards to buy items—usually expensive items—online. Instead of having
            the items shipped to the billing address, the fraudster sends them
            to what&apos;s called a &quot;re-shipper&quot;. At the
            &quot;re-shipper&quot; location, the items are repackaged and
            usually sent overseas. There, they can often be sold at a high price
            on the black market.
          </p>
          <h2>Scenario</h2>
          <p>
            The scam begins when criminals buy high-dollar merchandise - such as
            computers, cameras, and other electronics - via the Internet using
            stolen credit cards. They have the merchandise shipped to addresses
            in the United States of paid &quot;reshippers&quot; (who may be
            unaware they are handling stolen goods). The reshippers repackage
            the merchandise and mail it to locations in Russia, Ukraine,
            Estonia, Lithuania, Romania, and Germany. It works like this :
          </p>
          <ul>
            <li>The criminals steal credit cards information</li>
            <li>They buy goods on ecommerce websites</li>
            <li>The goods are sent to a third party</li>
            <li>
              The third party receives the goods and re-ships them to the
              criminal
            </li>
            <li>The criminal sells the goods and receives cash</li>
          </ul>
          <p>
            The third party, recruited via a job and promising a generous
            compensation, acts as mule.
          </p>
          <h2>Solution</h2>
          <p>
            We can model the data the insurance company has about its accidents
            There are a couple of things we can do with that data to identify
            fraud. A first step might be to compare the billing and shipping
            address. A difference between a billing and a shipping address might
            be indicative of a reshipping scam. Furthermore we can look into the
            IP address. If the IP address localization does not match the
            billing address or the shipping address, the situation is highly
            suspicious.
          </p>
          <h3>Graph Structure</h3>
          <p>
            The graph data model below represents how the data is linked, and
            illustrates how one can find rings by simply walking the graph.
          </p>
          <Image
            alt="graph structure"
            src="https://bangdb.com/wp-content/uploads/2022/04/word-image-5.png"
            width="840"
            height="520"
          />
          <h2>Steps to Implement</h2>
          <h3>Step 1</h3>
          <h4>Sample data:</h4>
          <p>Creating graph data from CLI</p>
          <HighlightedCpp
            code={`CREATE (City:paris {"Name":"Paris"})

CREATE (City:chicago {"Name":"Chicago"})

CREATE (City:san_francisco {"Name":"San Francisco"})

CREATE (City:detroit {"Name":"Detroit"})

CREATE (City:lagos {"Name":"Lagos"})

CREATE (Country:france {"Name":"France"})

CREATE (Country:usa {"Name":"USA"})

CREATE (Country:nigeria {"Name":"Nigeria"})

CREATE (Transaction:order1 {"Date":"11/08/2014", "Items":"A Wonderful World","Amount":10})

CREATE (Transaction:order2 {"Date":"11/08/2014", "Items":"Nike sneakers, Football jersey","Amount":299})

CREATE (Transaction:order3 {"Date":"11/08/2014", "Items":"Perfume","Amount":99})

CREATE (Transaction:order4 {"Date":"11/08/2014", "Items":"Mobile phone","Amount":499})

CREATE (Transaction:order5 {"Date":"11/08/2014", "Items":"Laptop, gifcard","Amount":878})

CREATE (Address:address1 {"Street":"rue_dareau","Number" :"9","City":"Paris"})

CREATE (Address:address2 {"Street":"the47th_street","Number" :"21","City":"Chicago"})

CREATE (Address:address3 {"Street":"folsom_street","Number" :"98","City":"San_francisco"})

CREATE (Address:address4 {"Street":"the23th_street","Number" :"123","City":"Chicago"})

CREATE (Address:Address5 {"Street":"octavia_boulevard","Number" :"211","City":"San_francisco"})

CREATE (Address:Address6 {"Street":"duboce_avenue","Number" :"9","City":"San_francisco"})

CREATE (Address:Address7 {"Street":"carney_street","Number" :"16","City":"Detroit"})

CREATE (Address:address1)-[IS_BILLING_ADDRESS]->(Transaction:order1)

CREATE (Address:address1)-[IS_SHIPPING_ADDRESS]->(Transaction:order1)

CREATE (Address:address1)-[IS_LOCATED_IN]->(City:Paris)

CREATE (Address:address2)-[IS_BILLING_ADDRESS]->(Transaction:order2)

CREATE (Address:address2)-[IS_SHIPPING_ADDRESS]->(Transaction:order2)

CREATE (Address:address2)-[IS_LOCATED_IN]->(City:chicago)

CREATE (Address:address3)-[IS_BILLING_ADDRESS]->(Transaction:order3)

CREATE (Address:address3)-[IS_LOCATED_IN]->(City:san_francisco)

CREATE (Address:address4)-[IS_SHIPPING_ADDRESS]->(Transaction:order3)

CREATE (Address:address4)-[IS_LOCATED_IN]->(City:chicago)

CREATE (Address:Address5)-[IS_BILLING_ADDRESS]->(Transaction:order4)

CREATE (Address:Address5)-[IS_LOCATED_IN]->(City:san_francisco)

CREATE (Address:Address6)-[IS_BILLING_ADDRESS]->(Transaction:order5)

CREATE (Address:Address6)-[IS_LOCATED_IN]->(City:san_francisco)

CREATE (Address:Address7)-[IS_SHIPPING_ADDRESS]->(Transaction:order4)

CREATE (Address:Address7)-[IS_SHIPPING_ADDRESS]->(Transaction:order5)

CREATE (Address:Address7)-[IS_LOCATED_IN]->(City:detroit)

CREATE (City:chicago)-[IS_LOCATED_IN]->(Country:usa)

CREATE (City:detroit)-[IS_LOCATED_IN]->(Country:usa)

CREATE (IP_Address:ip1 {"ip_address":"214.77.224.225","ip_City":"Paris"})

CREATE (IP_Address:ip2 {"ip_address":"48.215.250.22","ip_City":"Chicago"})

CREATE (IP_Address:ip3 {"ip_address":"147.170.219.106","ip_City":"San_francisca"})

CREATE (IP_Address:ip4 {"ip_address":"217.54.121.65","ip_City":"Lagos"})

CREATE (IP_Address:ip1)-[IS_USED_FOR]->(Transaction:order1)

CREATE (IP_Address:ip2)-[IS_USED_FOR]->(Transaction:order2)

CREATE (IP_Address:ip3)-[IS_USED_FOR]->(Transaction:order3)

CREATE (IP_Address:ip4)-[IS_USED_FOR]->(Transaction:order4)

CREATE (IP_Address:ip4)-[IS_USED_FOR]->(Transaction:order5)

CREATE (City:lagos)-[IS_LOCATED_IN]->(Country:nigeria)

CREATE (City:paris)-[IS_LOCATED_IN]->(Country:france)

CREATE (City:san_francisco)-[IS_LOCATED_IN]->(Country:usa)`}
          />
          <h3>Step 2</h3>
          <h4>Performing Graph Queries</h4>
          <p>Let&apos;s start by looking at the transactions recorded</p>
          <HighlightedCpp
            code={`S1=>(@t Transaction:*);RETURN t.name AS OrderID, t.Date AS BookingDate, t.Item AS Item, t.Amount AS Amount`}
          />
          <p>
            See the transactions where the billing and shipping addresses are
            different. If the shipping address and the billing address are
            different, maybe we are looking at a reshipping scam. We want to
            identify these transactions for analysis.
          </p>
          <HighlightedCpp
            code={`S1=>(@a Address:*)-[IS_BILLING_ADDRESS]->(@t Transaction:*)<-[@i IS_SHIPPING_ADDRESS]-(@q Address:*); RETURN a.name AS BillingAdd, t.name AS OrderID, q.name AS ShippingAdd, t.Amount AS Amount,a.City AS BillingCity, q.City AS ShippingCity`}
          />
          <p>
            Checking for transaction where billing and IP_Address used are
            different cities
          </p>
          <HighlightedCpp
            code={`S1=>(@a Address:*)-[IS_BILLING_ADDRESS]->(@t Transaction:*)<-[@i IS_USED_FOR]-(@q IP_Address:*); RETURN a.name AS BillingAddress, t.name AS OrderID, t.Amount AS Amount, a.City AS BillingCity, q.ip_City AS IP_City`}
          />
          <p>
            Checking for transaction where shipping and IP_address used are
            different cities
          </p>
          <HighlightedCpp
            code={`S1=>(@a Address:*)-[IS_SHIPPING_ADDRESS]->(@t Transaction:*)<-[@i IS_USED_FOR]-(@q IP_Address:*); RETURN a.name AS ShippingAddress, t.name AS OrderID, t.Amount AS Amount, a.City AS ShippingCity, q.ip_City AS IP_City`}
          />
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { useCasesSidebar: true },
  };
}
