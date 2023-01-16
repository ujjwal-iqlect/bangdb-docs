import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";
import Codebox from "../../../components/Codebox";

export default function Cluster() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cluster - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="Learn about Cluster in BangDB. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cluster - BangDB Graph & Cypher" />
        <meta
          property="og:description"
          content="Learn about Cluster in BangDB. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Cluster - BangDB Graph & Cypher" />
        <meta
          name="twitter:description"
          content="Learn about Cluster in BangDB. Read the well-written documentation to know more about BangDB 2.0 Graph and Cypher."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Cluster</h1>
        <div className="article-body">
          <p>
            One of the major goals for Graph is be able to find natural groups
            or subgroups that may exist within the database. There could be
            plenty of groups based on different set of properties of the nodes.
            There are natural groups which exist due to the connections between
            different nodes, and there can be groups that could be formed based
            on many different set of dimensions/features.
          </p>
          <p>
            For example, finding groups in social network would be natural sets
            of groups solely based on connections between different nodes. On
            the other hand, we would like to find out different groups of people
            based on their demography, backgrounds, activities, family
            structure, buying patterns, interests, hobbies and many more
            attributes that could be used. The Graph should give us ability to
            not only find such groups but also to take actions as required such
            as finding other people in a given group or given a person.
          </p>
          <p>
            Further we should be able to find the common patterns and based on
            recommend something to a person from the same group or personalize
            the content or experiences. These groups are dynamic hence we should
            be able to create many clusters, whenever we wish and using as many
            different set of features as we need.
          </p>
          <p>
            Let&apos;s take an example of product recommendation to the users
            based on their various properties, such as age, education, marital
            status, number of children etc… Note that we could use totally
            different set of features for recommending different products or
            services or for personalization.
          </p>
          <p>Therefore, we will do two things here:</p>
          <p>
            <ol>
              <li>Train clusters based on set of features</li>
              <li>
                Recommend products to a given user based on the clusters (by
                looking at the most common products bought by the people from
                same cluster, which are not bought by the user yet)
              </li>
            </ol>
            First, let&apos;s put some data, here we will be adding some
            users&apos; data and their purchase data
          </p>
          <Codebox code={`CREATE GRAPH g4`} />
          <Codebox code={`USE GRAPH g4`} />
          <HighlightedJava
            code={`CREATE (person:dan {"age":34,"married":1,"num_child":2,"edu":"grad","income":100000,"job":"self"})

CREATE (person:john {"age":21,"married":0,"num_child":0,"edu":"grad","income":30000,"job":"employed"})

CREATE (person:ramesh {"age":24,"married":1,"num_child":0,"edu":"grad","income":20000,"job":"employed"})

CREATE (person:suman {"age":44,"married":1,"num_child":3,"edu":"postgrad","income":200000,"job":"employed"})

CREATE (person:mahesh {"age":32,"married":1,"num_child":0,"edu":"grad","income":90000,"job":"employed"})

CREATE (person:mangesh {"age":38,"married":1,"num_child":1,"edu":"phd","income":190000,"job":"employed"})

CREATE (person:prasad {"age":22,"married":1,"num_child":0,"edu":"grad","income":32000,"job":"employed"})

CREATE (person:sanjay {"age":33,"married":1,"num_child":1,"edu":"grad","income":90000,"job":"self"})

CREATE (person:ankit {"age":54,"married":1,"num_child":2,"edu":"grad","income":320000,"job":"self"})

CREATE (person:ashoke {"age":67,"married":1,"num_child":3,"edu":"grad","income":10000,"job":"none"})

CREATE (person:goyal {"age":71,"married":1,"num_child":2,"edu":"grad","income":12000,"job":"none"})

CREATE (person:mike {"age":62,"married":1,"num_child":4,"edu":"ugrad","income":5000,"job":"none"})

CREATE (person:patrick {"age":37,"married":0,"num_child":0,"edu":"ugrad","income":80000,"job":"employed"})

CREATE (person:ballu {"age":34,"married":1,"num_child":2,"edu":"grad","income":100000,"job":"self"})

CREATE (person:eric {"age":28,"married":0,"num_child":0,"edu":"ugrad","income":30000,"job":"self"})

CREATE (person:susan {"age":28,"married":1,"num_child":2,"edu":"grad","income":24500,"job":"employed"})

CREATE (person:kavita {"age":43,"married":1,"num_child":4,"edu":"postgrad","income":160000,"job":"employed"})

CREATE (person:teresa {"age":31,"married":1,"num_child":0,"edu":"grad","income":70000,"job":"employed"})

CREATE (person:bob {"age":35,"married":1,"num_child":2,"edu":"phd","income":145000,"job":"employed"})

CREATE (person:bill {"age":34,"married":1,"num_child":20,"edu":"grad","income":110000,"job":"employed"})

CREATE (person:steve {"age":31,"married":1,"num_child":1,"edu":"grad","income":120000,"job":"self"})

CREATE (person:marie {"age":68,"married":1,"num_child":2,"edu":"grad","income":2000,"job":"none"})

CREATE (person:shiela {"age":78,"married":1,"num_child":4,"edu":"postgrad","income":500000,"job":"self"})

CREATE (person:mahender {"age":67,"married":1,"num_child":4,"edu":"grad","income":10000,"job":"none"})

CREATE (person:dan)-[BUYS {"price":178.22}]->(product:milk)

CREATE (person:dan)-[BUYS {"price":130.21}]->(product:eggs)

CREATE (person:dan)-[BUYS {"price":233}]->(product:wine)

CREATE (person:john)-[BUYS {"price":78.23}]->(product:milk)

CREATE (person:john)-[BUYS {"price":98.09}]->(product:meat)

CREATE (person:john)-[BUYS {"price":100.20}]->(product:chips)

CREATE (person:ramesh)-[BUYS {"price":98.09}]->(product:meat)

CREATE (person:ramesh)-[BUYS {"price":100.20}]->(product:cigar)

CREATE (person:suman)-[BUYS {"price":100.20}]->(product:milk)

CREATE (person:suman)-[BUYS {"price":98.09}]->(product:meat)

CREATE (person:suman)-[BUYS {"price":100.20}]->(product:water)

CREATE (person:mahesh)-[BUYS {"price":100.20}]->(product:noodle)

CREATE (person:mahesh)-[BUYS {"price":98.09}]->(product:eggs)

CREATE (person:mahesh)-[BUYS {"price":100.20}]->(product:cigar)

CREATE (person:mangesh)-[BUYS {"price":98.09}]->(product:meat)

CREATE (person:mangesh)-[BUYS {"price":100.20}]->(product:water)

CREATE (person:mahesh)-[BUYS {"price":100.20}]->(product:chips)

CREATE (person:prasad)-[BUYS {"price":98.09}]->(product:coffee)

CREATE (person:prasad)-[BUYS {"price":134.23}]->(product:tea)

CREATE (person:sanjay)-[BUYS {"price":104.21}]->(product:milk)

CREATE (person:sanjay)-[BUYS {"price":95.49}]->(product:pencil)

CREATE (person:sanjay)-[BUYS {"price":103.23}]->(product:tea)

CREATE (person:ankit)-[BUYS {"price":92.39}]->(product:meat)

CREATE (person:ankit)-[BUYS {"price":103.27}]->(product:tea)

CREATE (person:ashoke)-[BUYS {"price":132.23}]->(product:chips)

CREATE (person:ashoke)-[BUYS {"price":93.39}]->(product:pen)

CREATE (person:ashoke)-[BUYS {"price":130.23}]->(product:tea)

CREATE (person:goyal)-[BUYS {"price":109.54}]->(product:meat)

CREATE (person:goyal)-[BUYS {"price":105.24}]->(product:coffee)

CREATE (person:goyal)-[BUYS {"price":198.39}]->(product:milk)

CREATE (person:goyal)-[BUYS {"price":120.27}]->(product:pencil)

CREATE (person:mike)-[BUYS {"price":109.54}]->(product:chips)

CREATE (person:mike)-[BUYS {"price":105.24}]->(product:coffee)

CREATE (person:mike)-[BUYS {"price":198.39}]->(product:milk)

CREATE (person:mike)-[BUYS {"price":120.27}]->(product:tea)

CREATE (person:patrick)-[BUYS {"price":125.34}]->(product:coffee)

CREATE (person:patrick)-[BUYS {"price":194.32}]->(product:milk)

CREATE (person:patrick)-[BUYS {"price":121.22}]->(product:tea)

CREATE (person:ballu)-[BUYS {"price":121.32}]->(product:chips)

CREATE (person:ballu)-[BUYS {"price":191.21}]->(product:pencil)

CREATE (person:ballu)-[BUYS {"price":122.45}]->(product:tea)

CREATE (person:eric)-[BUYS {"price":133.89}]->(product:meat)

CREATE (person:eric)-[BUYS {"price":156.36}]->(product:chips)

CREATE (person:eric)-[BUYS {"price":134.56}]->(product:pen)

CREATE (person:eric)-[BUYS {"price":152.55}]->(product:tea)

CREATE (person:susan)-[BUYS {"price":142.56}]->(product:meat)

CREATE (person:susan)-[BUYS {"price":121.43}]->(product:pencil)

CREATE (person:susan)-[BUYS {"price":146.57}]->(product:tea)

CREATE (person:kavita)-[BUYS {"price":123.63}]->(product:coffee)

CREATE (person:kavita)-[BUYS {"price":124.32}]->(product:tea)

CREATE (person:kavita)-[BUYS {"price":148.77}]->(product:pen)

CREATE (person:teresa)-[BUYS {"price":184.86}]->(product:pencil)

CREATE (person:bob)-[BUYS {"price":164.39}]->(product:milk)

CREATE (person:bob)-[BUYS {"price":141.97}]->(product:pencil)

CREATE (person:bill)-[BUYS {"price":104.61}]->(product:pencil)

CREATE (person:bill)-[BUYS {"price":162.32}]->(product:milk)

CREATE (person:bill)-[BUYS {"price":101.57}]->(product:pen)

CREATE (person:steve)-[BUYS {"price":112.34}]->(product:meat)

CREATE (person:steve)-[BUYS {"price":131.72}]->(product:pencil)

CREATE (person:marie)-[BUYS {"price":112.74}]->(product:milk)

CREATE (person:marie)-[BUYS {"price":116.48}]->(product:meat)

CREATE (person:marie)-[BUYS {"price":135.72}]->(product:pen)

CREATE (person:shiela)-[BUYS {"price":126.42}]->(product:milk)

CREATE (person:shiela)-[BUYS {"price":135.76}]->(product:tea)

CREATE (person:marie)-[BUYS {"price":135.72}]->(product:pen)

CREATE (person:mahender)-[BUYS {"price":146.96}]->(product:meat)

CREATE (person:mahender)-[BUYS {"price":135.36}]->(product:coffee)`}
          />
          <p>Let&apos;s train the cluster now</p>
          <HighlightedJava
            code={`S{CLUSTER(user_cluster),3}=>(@p person:*); RETURN p.name AS person, p.age AS age, p.married AS married, p.num_child AS num_child, p.edu AS edu, p.income AS income, p.job AS job`}
          />
          <HighlightedOutput
            code={`{
   "msg" : [
      "successfully computed the clusters and updated the relations (use 'user_cluster' relation to retrieve the number)"
   ],
   "errcode" : 0
}`}
          />
          <aside className="doc-note">
            <strong>Note: </strong>We must select &apos;person&apos; here. The
            &quot;p.name AS person&quot; is required and the alias has to be
            same as the label, in this case &apos;person&apos;.
          </aside>
          <p>
            We can now single query to get the recommended products based on
            this cluster. But before that let&apos;s also run some interesting
            queries which most often might be needed.
          </p>
          <p>Find out the cluster id for user &apos;shiela&apos;</p>
          <HighlightedJava
            code={`S=>(@p person:shiela)-[@c user_cluster]->(@p2 person:shiela); RETURN c._cluster_ AS cid`}
          />
          <HighlightedOutput
            code={`+---+
|cid|
+---+
|2  |
+---+`}
          />
          <p>
            Now, let&apos;s find out all the users belonging to this cluster
          </p>
          <HighlightedJava
            code={`S=>(@p person:*)-[@c user_cluster {_cluster_ = 2}]->(@p2 person:*); RETURN p.name AS Name`}
          />
          <HighlightedOutput
            code={`+-------+
|Name   |
+-------+
|suman  |
+-------+
|mangesh|
+-------+
|bob    |
+-------+
|kavita |
+-------+
|shiela |
+-------+
|ankit  |
+-------+`}
          />
          <p>
            We can also do this without running two queries as above (first to
            figure out the cluster id and then getting all users from the same
            cluster). We can run following. Note the &apos;$$&apos; attached to
            person:shiela, this tells the BangDB to first find the cluster id of
            Shiela and then use this to find all people belonging to the same
            cluster.
          </p>
          <HighlightedJava
            code={`S=>(@p person:*)-[@c user_cluster {_cluster_ = $$person:shiela}]->(@p2 person:*); RETURN p.name AS Name`}
          />
          <HighlightedOutput
            code={`+-------+
|Name   |
+-------+
|suman  |
+-------+
|mangesh|
+-------+
|bob    |
+-------+
|kavita |
+-------+
|shiela |
+-------+
|ankit  |
+-------+`}
          />
          <p>
            Now, let&apos;s find top 5 most bought products by the people
            belonging to the cluster of Shiela, in the descending order of
            number of times they are bought.
          </p>
          <HighlightedJava
            code={`S=>(@p person:*)-[@c user_cluster {_cluster_ = $$person:suman}]->(@p2 person:*)-[@b BUYS]->(@pr product:*); RETURN pr.name AS product, COUNT(p.name) AS num_times SORT_DESC num_times LIMIT 5`}
          />
          <HighlightedOutput
            code={`+-------+---------+
|product|num_times|
+-------+---------+
|milk   |3        |
+-------+---------+
|meat   |3        |
+-------+---------+
|tea    |3        |
+-------+---------+
|water  |2        |
+-------+---------+
|pen    |1        |
+-------+---------+`}
          />
          <p>
            To recommend products to a given user, we wish to find the cluster
            he/she belongs to, then all the people in the cluster, then most
            common set of products that they bought. Finally we need to remove
            the products that the user (for whom the recommendation is being
            done) has bought. This will give us the list of items that should be
            recommended to the user.
          </p>
          <p>
            All of the above computations can be written in single query and it
            will return the recommendation. Here is the query:
          </p>
          <HighlightedJava
            code={`<SUBTRACT USING product SORT_DESC num_times LIMIT 3> S1=>(@p person:*)-[@c user_cluster {_cluster_ = $$person:shiela}]->(@p2 person:*)-[@b BUYS]->(@pr product:*); RETURN pr.name AS product COUNT(p.name) AS num_times SORT_DESC num_times ++ S2=>(@p person:suman)-[@b BUYS]->(@pr product:*); RETURN pr.name AS product COUNT(p.name) AS num_times SORT_DESC num_times`}
          />
          <HighlightedOutput
            code={`+-------+---------+
|product|num_times|
+-------+---------+
|tea    |3        |
+-------+---------+
|pencil |1        |
+-------+---------+
|pen    |1        |
+-------+---------+`}
          />
          <p>
            This single query is enough for such findings which are otherwise
            quite complex and sometimes involves lots of computations and
            workflows.
          </p>
          <p>Here is what&apos;s happening in the query:</p>
          <p>
            There are two sub queries here. First one is finding the most common
            set of products bought by the people belonging to the same group as
            the user. Second query is finding the products bought by the user.
            And then following command is asking BangDB to subtract the second
            resultset from the first one and return only top 3 recommended
            products in sorted order.
          </p>
          <HighlightedJava
            code={`<SUBTRACT USING product SORT_DESC num_times LIMIT 3>`}
          />
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { graphSidebar: true },
  };
}
