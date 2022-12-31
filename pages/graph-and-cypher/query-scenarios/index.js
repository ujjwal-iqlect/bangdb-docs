import React from "react";
import Head from "next/head";
import Image from "next/image";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedJava from "../../../components/HighlightedJava";
import HighlightedOutput from "../../../components/HighlightedOutput";
import Link from "next/link";

export default function QueryScenarios() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Query Scenarios - BangDB Graph & Cypher</title>
        <meta
          name="description"
          content="In BangDB we have a variety of Cypher Query Types. In this document, we've listed all the query types with examples, description and scenarios."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Query Scenarios - BangDB Graph & Cypher"
        />
        <meta
          property="og:description"
          content="In BangDB we have a variety of Cypher Query Types. In this document, we've listed all the query types with examples, description and scenarios."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Query Scenarios - BangDB Graph & Cypher"
        />
        <meta
          name="twitter:description"
          content="In BangDB we have a variety of Cypher Query Types. In this document, we've listed all the query types with examples, description and scenarios."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Query Scenarios</h1>
        <div className="article-body">
          <p>
            In BangDB we have a variety of Cypher Query Types. In this document,
            we listed all the query types with examples.
          </p>
          <h2>Movies data</h2>
          <h3>Graph creation</h3>
          <p>To Create a new Graph in BangDB CLI, run the following command:</p>
          <HighlightedJava code={`CREATE GRAPH Movies`} />
          <aside className="doc-note">
            <strong>Note: </strong>Graph name must be unique and There should
            not be any space between the graph name.
          </aside>
          <p>To use an existing graph use the following command:</p>
          <HighlightedJava code={`USE GRAPH Movies`} />
          <h3>Graph data</h3>
          <p>
            To ingest data in Movies Graph, run following commands from BangDB
            CLI:
          </p>
          <HighlightedJava
            code={`CREATE (Movie:Matrix {"title":"The Matrix","released":"864258308"})

CREATE (Movie:cloudAtlas {"title":"Cloud Atlas", "released":"1356119730"})

CREATE (Movie:forrestGump {"title":"Forrest Gump", "released":"776409908"})

CREATE (Person:keanu {"fullname":"Keanu Reeves", "dob":"19640523123415"})

CREATE (Person:robert {"fullname":"Robert Zemeckis", "dob":"19510809041545"})

CREATE (Person:tom {"fullname":"Tom Hanks", "dob":"195601112345"})

CREATE (Person:tom)-[ACTED_IN {"roles":"Forrest"}]->(Movie:forrestGump)

CREATE (Person:tom)-[ACTED_IN {"roles":"Zachry"}]->(Movie:cloudAtlas)

CREATE (Person:keanu)-[ACTED_IN {"roles":"John Wick"}]->(Movie:Matrix)

CREATE (Person:robert)-[DIRECTED]->(Movie:forrestGump)

CREATE (Movie:forrestGump)-[WON_AWARD]->(Award:oscar)

CREATE (Person:david {"fullname":"David Lynch", "dob":"19460120140525"})-[ACTED_IN {"roles": "Morgue Attendant"}]->(Movie:lostHighway {"title": "Lost Highway", "released": "853338330"})

CREATE (Person:david)-[DIRECTED]->(Movie:lostHighway)

CREATE (Person:david)-[DIRECTED]->(Movie:theStraightStory {"title": "The Straight Story", "released": "927323127"})

CREATE (Person:david)-[DIRECTED]->(Movie:sidebyside {"title": "Side By Side", "released": "1329336940"})

CREATE (Person:keanu)-[ACTED_IN]->(Movie:sidebyside)`}
          />
          <h3>Scenarios</h3>
          <h5>
            How to check all unique relations formed between all Subjects (Sub)
            & Objects (Obj)?
          </h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`S{UNIQUE_SELECT}=>(@S *)-[@r *]->(@O *);RETURN S.label AS Sub, r.rel AS rel, O.label AS Obj`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+-----+------+---------+
|Obj  |Sub   |      rel|
+-----+------+---------+
|Movie|Person| ACTED_IN|
+-----+------+---------+
|Movie|Person| DIRECTED|
+-----+------+---------+
|Award|Movie |WON_AWARD|
+-----+------+---------+`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            From the output, we can see the Unique relations formed in the
            Graph. In BangDB, we mention Alias i.e. [@S, @r, @O] to return
            properties using them.
          </p>
          <p>
            Here, UNIQUE_SELECT is used in the query to get a Unique set of
            results. UNIQUE_SELECT can be used when we want to Unique the output
            based on all the values returned in the RETURN Statement i.e.
            [Person, ACTED_IN, Movie] is Unique.
          </p>
          <h5>How to list all Persons in DB with all their properties?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava code={`S=>(@P Person:*);RETURN *`} />
          <p>or</p>
          <HighlightedJava code={`S=>(Person:*);RETURN *`} />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+---------------+--------------+------+------+------------------------------+--+
|fullname       |dob           | label|name  |_pk                           |_v|
+---------------+--------------+------+------+------------------------------+--+
|Tom Hanks      |195601112345  |Person|tom   |2471870506:978343320853564008 |1 |
+---------------+--------------+------+------+------------------------------+--+
|David Lynch    |19460120140525|Person|david |2471870506:2719078225930297886|1 |
+---------------+--------------+------+------+------------------------------+--+
|Keanu Reeves   |19640523123415|Person|keanu |2471870506:3769017240657799182|1 |
+---------------+--------------+------+------+------------------------------+--+
|Robert Zemeckis|19510809041545|Person|robert|2471870506:8066861659955905996|1 |
+---------------+--------------+------+------+------------------------------+--+`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            <strong>RETURN *</strong> is a feature provided in BangDB Cypher,
            which will return all Nodes (Subject/Object) Properties & Relation
            Properties in one go.
          </p>
          <p>
            <em>RETURN * is case-sensitive.</em>
          </p>
          <h5>
            How to list all properties for a specified Person named
            &apos;Tom&apos;?
          </h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava code={`S=>(@P Person:tom);RETURN *`} />
          <p>or</p>
          <HighlightedJava code={`S=>(@P Person:"tom");RETURN *`} />
          <p>or</p>
          <HighlightedJava
            code={`S=>(@P Person:* {fullname="Tom Hanks"});RETURN *`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+---------+------------+------+----+-----------------------------+--+
|fullname |dob         | label|name|_pk                          |_v|
+---------+------------+------+----+-----------------------------+--+
|Tom Hanks|195601112345|Person|tom |2471870506:978343320853564008|1 |
+---------+------------+------+----+-----------------------------+--+`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            The above three queries will return similar output. The only change
            is the way of writing it.
          </p>
          <ul>
            <li>
              In the 1st Query, we provided the Node name i.e. tom after colon
              (:) which means that we are asking the DB to return all Node
              Properties for the Node = tom.
            </li>
            <li>
              In the 2nd Query, we provided double quotes (&quot;) with the Node
              name tom, this won&apos;t make any change in the query which makes
              it different from the 1st Query, but we use double quotes when
              there is a space between the letters of the Node Name. For
              example: Suppose if instead of tom it would be tom hanks, then to
              use it for Node Name Filter, we would have provided S=&gt;(@P
              Person:&quot;tom hanks&quot;);RETURN *
            </li>
            <li>
              In the 3rd Query, instead of using the Node name, we used its
              property i.e. fullname. Which is Tom Hanks for Node Name tom.
            </li>
            <li>
              In BangDB, when we want to put a value filter on a property value,
              we can use the 3rd query syntax or we can use WHERE. Which we will
              discuss later in this document.
            </li>
          </ul>
          <h5>
            How to get a list of all the movie names with their release dates?
            Also how to convert Timestamp Data into a normal DateTime Format?
          </h5>
          <p>
            BangDB Cypher provides MATH_EXP (Math Expressions) & DATE_FMT_TS
            (Date Format from TimeStamp) functionalities for many use cases.
          </p>
          <ul>
            <li>
              MATH_EXP - Date Calculations can only be described in MATH_EXP
              while writing in a Cypher Query.
            </li>
            <li>
              DATE_FMT_TS - Using this terminology, we can provide TimeStamp
              Data either in seconds/milliseconds/microseconds & can convert it
              into any specific Date or DateTime format.
            </li>
          </ul>
          <p>
            Two examples are shown below specifying the Syntax & the supported
            DateTime formats.
          </p>
          <p>
            <strong>Query 1:</strong>
          </p>
          <HighlightedJava
            code={`S=>(@M Movie:*);RETURN M.title AS Title, M.released AS released, MATH_EXP("DATE_FMT_TS($released, %Y/%m/%d %H:%M:%S)") AS ReleasedDate`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+------------------+----------+-------------------+
            |Title             |released  |       ReleasedDate|
+------------------+----------+-------------------+
|The Straight Story|927323127 |1999/05/22 03:15:27|
+------------------+----------+-------------------+
|Forrest Gump      |776409908 |1994/08/09 10:55:08|
+------------------+----------+-------------------+
|Cloud Atlas       |1356119730|2012/12/22 01:25:30|
+------------------+----------+-------------------+
|Lost Highway      |853338330 |1997/01/15 19:55:30|
+------------------+----------+-------------------+
|Side By Side      |1329336940|2012/02/16 01:45:40|
+------------------+----------+-------------------+
|The Matrix        |864258308 |1997/05/22 05:15:08|
+------------------+----------+-------------------+`}
          />
          <p>
            <strong>Query 2:</strong>
          </p>
          <HighlightedJava
            code={`S=>(@M Movie:*);RETURN M.title AS Title, M.released AS released, MATH_EXP("DATE_FMT_TS($released, %F)") AS ReleasedDate`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+------------------+----------+------------+
|Title             |released  |ReleasedDate|
+------------------+----------+------------+
|The Straight Story|927323127 |  1999-05-22|
+------------------+----------+------------+
|Forrest Gump      |776409908 |  1994-08-09|
+------------------+----------+------------+
|Cloud Atlas       |1356119730|  2012-12-22|
+------------------+----------+------------+
|Lost Highway      |853338330 |  1997-01-15|
+------------------+----------+------------+
|Side By Side      |1329336940|  2012-02-16|
+------------------+----------+------------+
|The Matrix        |864258308 |  1997-05-22|
+------------------+----------+------------+`}
          />
          <p>
            As you can see, BangDB provides us with this feature to format Date
            and Time. We can use the following Terminologies as well:
          </p>
          <ul
            style={{
              listStyle: "none",
            }}
          >
            <li>%Y - Year (1951)</li>
            <li>%y - Year (22)</li>
            <li>%m - Month (08)</li>
            <li>%d - Day (09)</li>
            <li>%H - Hour</li>
            <li>%M - mm(Minutes in number format)</li>
            <li>%S - ss(seconds)</li>
            <li>%p - AM/PM</li>
            <li>%P - am/pm</li>
            <li>%z - +05:30(Time zone)</li>
            <li>%F - YYYY/MM/DD</li>
            <li>%A - Day (Wednesday)</li>
            <li>%B - Month (January)</li>
            <li>%C - YY(starting 2 numbers)</li>
            <li>%D - MM/DD/YYYY</li>
            <li>%G - YYYY(Year)</li>
            <li>%H - HH(Hours)</li>
            <li>%I - DD (Day in number format)</li>
            <li>%P - AM/PM</li>
            <li>%R - HH:MM(Hours:Minutes)</li>
            <li>%T and %X- HH:MM:SS(Hours:Minutes:Seconds)</li>
            <li>%Y - YYYY(Year)</li>
            <li>%Z - Time Zone(IST)</li>
          </ul>
          <h5>How to calculate Age using DateOfBirth for all the Persons?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`S=>(@P Person:*);RETURN P.fullname AS Name, P.dob AS DOB, MATH_EXP("DATE((CURTIME-$DOB)/31536000000000)") AS Age`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+---------------+--------------+---------+
|Name           |DOB           |      Age|
+---------------+--------------+---------+
|Tom Hanks      |195601112345  |67.012833|
+---------------+--------------+---------+
|David Lynch    |19460120140525|76.994758|
+---------------+--------------+---------+
|Keanu Reeves   |19640523123415|58.644246|
+---------------+--------------+---------+
|Robert Zemeckis|19510809041545|71.442456|
+---------------+--------------+---------+`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            $DOB refers to the Person Node Property dob. To provide a values in
            MATH_EXP, we add prefix $ before variable name i.e. $DOB. Above
            MATH_EXP will return Age as LONG Type i.e. in decimals as we are
            subtracting Current Time from DOB.
          </p>
          <p>CURTIME - Current Time in Microseconds</p>
          <p>31536000000000 - microseconds in a Year.</p>
          <p>
            <strong>Calculation:</strong>
            60 sec * 60 mins * 24 hours * 365 days = 31536000 seconds
          </p>
          <p>
            Conversion of seconds into microseconds = 31536000 * 1000000 =
            31536000000000 microseconds in an Year.
          </p>
          <h5>
            How to calculate all Age(round-off number) using DateOfBirth for all
            the Persons?
          </h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`S=>(@P Person:*);RETURN P.fullname AS Name, P.dob AS DOB, MATH_EXP("ROUND(DATE((CURTIME-$DOB)/31536000000000))") AS Age`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+---------------+--------------+---------+
            |Name           |DOB           |      Age|
+---------------+--------------+---------+
|Tom Hanks      |195601112345  |67.000000|
+---------------+--------------+---------+
|David Lynch    |19460120140525|77.000000|
+---------------+--------------+---------+
|Keanu Reeves   |19640523123415|59.000000|
+---------------+--------------+---------+
|Robert Zemeckis|19510809041545|71.000000|
+---------------+--------------+---------+`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            In this Query, we have applied ROUND functionality on top of Age
            Calculation. Which Rounds Off the Decimal Numbers.
          </p>
          <h5>How to extract Year/Month/Day from dates using Cypher Query?</h5>
          <p>
            <strong>Query: </strong>
          </p>
          <HighlightedJava
            code={`S=>(@P Person:*);RETURN P.fullname AS Name, P.dob AS DOB, MATH_EXP("DATE_YEAR($DOB+0)") AS Year, MATH_EXP("DATE_MONTH($DOB+0)") AS Month, MATH_EXP("DATE_DAY($DOB+0)") AS Day`}
          />
          <p>
            <strong>Output: </strong>
          </p>
          <HighlightedOutput
            code={`+---------------+--------------+-----------+---------+--------+
|Name           |DOB           |       Year|Day      |Month   |
+---------------+--------------+-----------+---------+--------+
|Tom Hanks      |195601112345  |1956.000000|11.000000|1.000000|
+---------------+--------------+-----------+---------+--------+
|David Lynch    |19460120140525|1946.000000|20.000000|1.000000|
+---------------+--------------+-----------+---------+--------+
|Keanu Reeves   |19640523123415|1964.000000|23.000000|5.000000|
+---------------+--------------+-----------+---------+--------+
|Robert Zemeckis|19510809041545|1951.000000|9.000000 |8.000000|
+---------------+--------------+-----------+---------+--------+`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            In BangDB, we have DATE_YEAR, DATE_MONTH & DATE_DAY terminologies to
            extract Year / Month /Day from Dates. These terminologies can be
            used inside MATH_EXP.
          </p>
          <h5>How to change the DateTime format using Cypher Query?</h5>
          <p>
            BangDB Cypher provides MATH_EXP (Math Expressions) & DATE_FMT (Date
            Format) functionalities for many use cases.
          </p>
          <ul>
            <li>
              DATE_FMT - Using this terminology, we can provide any format of
              DateTime & can convert it into any specific Date or DateTime
              format whichever we want.
            </li>
            <li>
              SORT_ASC_QLEX/SORT_DESC_QLEX - Using this terminology, we can sort
              any number which is in string format.
            </li>
          </ul>
          <p>
            Two examples are shown below specifying the Syntax & the supported
            DateTime formats.
          </p>
          <p>
            <strong>Query 1:</strong>
          </p>
          <HighlightedJava
            code={`S=>(@P Person:*);RETURN P.fullname AS Name, P.dob AS DOB, MATH_EXP("DATE_FMT($DOB, %F)") AS DateOfBirth SORT_ASC_QLEX DOB`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+---------------+--------------+-----------+
|Name           |DOB           |DateOfBirth|
+---------------+--------------+-----------+
|David Lynch    |19460120140525| 1946-01-20|
+---------------+--------------+-----------+
|Robert Zemeckis|19510809041545| 1951-08-09|
+---------------+--------------+-----------+
|Tom Hanks      |195601112345  | 1956-01-11|
+---------------+--------------+-----------+
|Keanu Reeves   |19640523123415| 1964-05-23|
+---------------+--------------+-----------+`}
          />
          <p>
            As you can see, BangDB provides us with this feature to format Date
            and Time. We can use different Terminologies also:
          </p>
          <ul style={{ listStyle: "none" }}>
            <li>%F - YYYY/MM/DD</li>
            <li>%D - MM/DD/YYYY</li>
          </ul>
          <p>
            <strong>Query 2:</strong>
          </p>
          <HighlightedJava
            code={`S=>(@P Person:*);RETURN P.fullname AS Name, P.dob AS DOB, MATH_EXP("DATE_FMT($DOB, %Y/%m/%d %H:%M:%S)") AS DateOfBirth SORT_DESC_QLEX DOB`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+---------------+--------------+-------------------+
|Name           |DOB           |        DateOfBirth|
+---------------+--------------+-------------------+
|Keanu Reeves   |19640523123415|1964/05/23 12:34:00|
+---------------+--------------+-------------------+
|Tom Hanks      |195601112345  |1956/01/11 23:45:00|
+---------------+--------------+-------------------+
|Robert Zemeckis|19510809041545|1951/08/09 04:15:00|
+---------------+--------------+-------------------+
|David Lynch    |19460120140525|1946/01/20 14:05:00|
+---------------+--------------+-------------------+`}
          />
          <p>
            <strong>Terminologies:</strong>
          </p>
          <ul style={{ listStyle: "none" }}>
            <li>%Y - Year (1951)</li>
            <li>%y - Year (22)</li>
            <li>%m - Month (08)</li>
            <li>%d - Day (09)</li>
            <li>%H - Hour</li>
            <li>%M - mm(Minutes in number format)</li>
            <li>%S - ss(seconds)</li>
            <li>%p - AM/PM</li>
            <li>%P - am/pm</li>
            <li>%z - +05:30(Time zone)</li>
            <li>%A - Day (Wednesday)</li>
            <li>%B - Month (January)</li>
            <li>%C - YY(starting 2 numbers)</li>
            <li>%G - YYYY(Year)</li>
            <li>%H - HH(Hours)</li>
            <li>%I - DD (Day in number format)</li>
            <li>%P - AM/PM</li>
            <li>%R - HH:MM(Hours:Minutes)</li>
            <li>%T and %X- HH:MM:SS(Hours:Minutes:Seconds)</li>
            <li>%Y - YYYY(Year)</li>
            <li>%Z - Time Zone(IST)</li>
          </ul>
          <h5>How to return all triples formed in the Graph?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava code={`S=>(*)-[*]->(*)`} />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+-----------------+---------+----------------------+
|sub              |pred     |                   obj|
+-----------------+---------+----------------------+
|Person:tom       |ACTED_IN |     Movie:forrestGump|
+-----------------+---------+----------------------+
|Person:tom       |ACTED_IN |      Movie:cloudAtlas|
+-----------------+---------+----------------------+
|Person:david     |ACTED_IN |     Movie:lostHighway|
+-----------------+---------+----------------------+
|Person:keanu     |ACTED_IN |      Movie:sidebyside|
+-----------------+---------+----------------------+
|Person:keanu     |ACTED_IN |          Movie:Matrix|
+-----------------+---------+----------------------+
|Person:david     |DIRECTED |Movie:theStraightStory|
+-----------------+---------+----------------------+
|Person:david     |DIRECTED |     Movie:lostHighway|
+-----------------+---------+----------------------+
|Person:david     |DIRECTED |      Movie:sidebyside|
+-----------------+---------+----------------------+
|Person:robert    |DIRECTED |     Movie:forrestGump|
+-----------------+---------+----------------------+
|Movie:forrestGump|WON_AWARD|           Award:oscar|
+-----------------+---------+----------------------+`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            In BangDB star(*) represents &apos;all&apos;, i.e. here we have put
            a star as SUB, OBJ, and Relation. Thus, it will look for all the
            nodes and their associated relations.
          </p>
          <h5>
            How to get the list of Persons with Movie names they Acted/Directed
            in?
          </h5>
          <p>
            <strong>Query for Persons Acted In Movies:</strong>
          </p>
          <HighlightedJava
            code={`S=>(@P Person:*)-[@r ACTED_IN]->(@M Movie:*)`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+-----------+-------+------+-------+--------+
|M_name     |M_label|P_name|P_label|r_rel   |
+-----------+-------+------+-------+--------+
|forrestGump|Movie  |   tom|Person |ACTED_IN|
+-----------+-------+------+-------+--------+
|cloudAtlas |Movie  |   tom|Person |ACTED_IN|
+-----------+-------+------+-------+--------+
|lostHighway|Movie  | david|Person |ACTED_IN|
+-----------+-------+------+-------+--------+
|sidebyside |Movie  | keanu|Person |ACTED_IN|
+-----------+-------+------+-------+--------+
|Matrix     |Movie  | keanu|Person |ACTED_IN|
+-----------+-------+------+-------+--------+`}
          />
          <p>
            <strong>Query for Persons who Directed Movies:</strong>
          </p>
          <HighlightedJava
            code={`S=>(@P Person:*)-[@r DIRECTED]->(@M Movie:*) `}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+----------------+-------+------+-------+--------+
|M_name          |M_label|P_name|P_label|r_rel   |
+----------------+-------+------+-------+--------+
|theStraightStory|Movie  | david|Person |DIRECTED|
+----------------+-------+------+-------+--------+
|lostHighway     |Movie  | david|Person |DIRECTED|
+----------------+-------+------+-------+--------+
|sidebyside      |Movie  | david|Person |DIRECTED|
+----------------+-------+------+-------+--------+
|forrestGump     |Movie  |robert|Person |DIRECTED|
+----------------+-------+------+-------+--------+`}
          />
          <h5>How to get the list of Persons aged above 60 years?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`S=>(@P Person:* {DATE((CURTIME-$dob)/31536000000000) > 60});RETURN P.fullname AS Name, P.dob AS dob, MATH_EXP("ROUND(DATE((CURTIME-$dob)/31536000000000))") AS Age`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+---------------+--------------+---------+
            |Name           |dob           |      Age|
            +---------------+--------------+---------+
            |Tom Hanks      |195601112345  |67.000000|
            +---------------+--------------+---------+
            |David Lynch    |19460120140525|77.000000|
            +---------------+--------------+---------+
            |Robert Zemeckis|19510809041545|71.000000|
            +---------------+--------------+---------+`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            From Scenarios 5 & 6, we already saw how we can calculate the Age
            for all the Person&apos;s in the DB. In this Query, we can see that
            we have used the same MATH_EXP in Person Node Property to put a
            filter for Age above 60 years. BangDB Cypher enables us to use the
            content of MATH_EXP&apos;s inside Property Filters instead of WHERE
            Clause.
          </p>
          <p>
            We can get the same output using WHERE Clause as well. By using
            below query:
          </p>
          <HighlightedJava
            code={`S=>(@P Person:*);RETURN P.fullname AS Name, P.dob AS dob, MATH_EXP("ROUND(DATE((CURTIME-$dob)/31536000000000))") AS Age WHERE Age > 60`}
          />
          <h5>How to Count the Number of Persons in the Database?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`S=>(@P Person:*);RETURN COUNT(P.name) AS Cnt`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedJava
            code={`+---+
|Cnt|
+---+
|4  |
+---+`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            COUNT is one of the Aggregation Terminologies provided by BangDB
            Cypher. We will see examples for more Aggregation Terminologies
            going forward in this document.
          </p>
          <h5>How to COUNT the Number of Movies done by a Person?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`S=>(@P Person:*)-[@r *]->(@M Movie:*);RETURN P.fullname AS Name, COUNT(M.name) AS Cnt SORT_DESC Cnt`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+---------------+---+
|Name           |Cnt|
+---------------+---+
|David Lynch    |4  |
+---------------+---+
|Keanu Reeves   |2  |
+---------------+---+
|Tom Hanks      |2  |
+---------------+---+
|Robert Zemeckis|1  |
+---------------+---+`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            Here if you see we are using star(*) inside the relation. BangDB
            allows us to use this functionality. It will look for all the
            possible relations which are linked with the respected Subject &
            Object.
          </p>
          <h5>
            How to find out, in how many movies an actor and a director worked
            on together?
          </h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`S=>(@P1 Person:*)-[@r1 DIRECTED]->(@M Movie:*)<-[@r2 ACTED_IN]-(@P2 Person:*); RETURN M.title AS Movie, P1.fullname AS Director, P2.fullname AS Actor, COUNT(*) AS Cnt`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+------------+---------------+------------+---+
|Movie       |Director       |       Actor|Cnt|
+------------+---------------+------------+---+
|Forrest Gump|Robert Zemeckis|   Tom Hanks|1  |
+------------+---------------+------------+---+
|Lost Highway|David Lynch    | David Lynch|1  |
+------------+---------------+------------+---+
|Side By Side|David Lynch    |Keanu Reeves|1  |
+------------+---------------+------------+---+`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            Here, in the above query, we have mentioned two relations both
            traveling from Person Node to Movie Node. But only the relation
            names are different i.e. ACTED_IN & DIRECTED.
          </p>
          <h5>
            How to find Movie details based on a keyword search/pattern in the
            Value Field?
          </h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`S=>(@P1 Person:*)-[@r1 DIRECTED]->(@M Movie:*)<-[@r2 ACTED_IN]-(@P2 Person:*);RETURN P1.fullname AS Director, P2.fullname AS Actor, M.title AS Title, M.released AS released, MATH_EXP("DATE_FMT_TS($released, %D)") AS ReleasedOn WHERE Title= "F$%"`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+------------+---------+---------------+---------+----------+
|Title       |released |       Director|Actor    |ReleasedOn|
+------------+---------+---------------+---------+----------+
|Forrest Gump|776409908|Robert Zemeckis|Tom Hanks|08/09/94  |
+------------+---------+---------------+---------+----------+`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            In BangDB Cypher we can use “$%” to search any string from the
            starting word. Here we are searching for movies whose Title starts
            with &quot;F&quot;
          </p>
          <aside className="doc-note">
            <strong>Note: </strong> Searching is case-sensitive.
          </aside>
          <h5>How to find a Person who is a Director & also an actor?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`S2=>[S1=>(@P Person:*)-[@r1 DIRECTED]->(@M1 Movie:*)]-[@r2 ACTED_IN]->(@M2 Movie:*);RETURN P.fullname AS Person, P.dob AS dob, MATH_EXP("DATE_FMT($dob, %F)") AS DOB, MATH_EXP("ROUND(DATE((CURTIME-$dob)/31536000000000))") AS Age`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            To understand the workflow we have to break this query into 2 parts:
          </p>
          <ul>
            <li>
              In the 1st part, S1, we are making a relationship from Person to
              Movie as DIRECTED that means it will return us all Person names
              who directed any movie.
            </li>
            <li>
              In the 2nd part i.e. S2, DB will take the list of Persons & will
              check whether they have a relation ACTED_IN with any Movie or not.
            </li>
            <li>
              By doing this we will get the Person&apos;s list who have Directed
              as well as Acted in some movie.
            </li>
            <li>
              This type of query building is referred to as NESTED Query where
              we want the output to fulfill the conditions of both relations.
            </li>
          </ul>
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+-----------+--------------+---------+----------+
|Person     |dob           |      Age|DOB       |
+-----------+--------------+---------+----------+
|David Lynch|19460120140525|77.000000|1946-01-20|
+-----------+--------------+---------+----------+`}
          />
          <p>
            So, from the Output, we can see that the Person David Lynch is a
            Director as well as an Actor.
          </p>
          <h5>How to get the Count of Number of Movies released each Year?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`S=>(@M Movie:*);RETURN M.released AS released, MATH_EXP("DATE_FMT_TS($released, %Y)") AS Year, COUNT(M.title) AS Cnt EXCLUDE_GROUPBY(released)`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+----+---+
|Year|Cnt|
+----+---+
|1999|1  |
+----+---+
|2012|2  |
+----+---+
|1997|2  |
+----+---+
|1994|1  |
+----+---+`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            In BangDB star(*) represents &apos;all&apos;, i.e. here we have put
            a star as SUB, OBJ, and Relation. Thus, it will look for all the
            nodes and their associated relations.
          </p>
          <h5>
            How to get the list of Movies for which we have Director & Actor
            Data available in DB?
          </h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`<CROSS USING movie>S1=>(@P1 Person:*)-[@r1 DIRECTED]->(@M1 Movie:*);RETURN M1.title AS movie, M1.released AS released, MATH_EXP("DATE_FMT_TS($released, %F)") AS ReleasedOn ++ S2=>(@P2 Person)-[@r2 ACTED_IN]->(@M2 Movie:*);RETURN M2.title AS movie`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+------------+----------+----------+
|movie       |released  |ReleasedOn|
+------------+----------+----------+
|Side By Side|1329336940|2012-02-16|
+------------+----------+----------+
|Lost Highway|853338330 |1997-01-15|
+------------+----------+----------+
|Forrest Gump|776409908 |1994-08-09|
+------------+----------+----------+`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <ul>
            <li>
              BangDB Cypher provided CROSS / ADD / SUBTRACT functionalities in
              queries.
            </li>
            <li>
              In CROSS Query types, we can provide the property on which we want
              two query outputs to be combined but return only the common
              values.
            </li>
            <li>
              For Example: In above query, we are providing movie as the
              property on which we want both relations to combine their outputs
              & in return provide the Movie names which are common in both.
            </li>
            <li>
              Here we can return other properties as well like we returned the
              released property of Movie Node Type which is in TimeStamp format.
              So, we used MATH_EXP to convert the TimeStamp into a readable
              DateTime format using DATE_FMT_TS.
            </li>
          </ul>
          <h2>Sales data</h2>
          <h3>Graph creation</h3>
          <p>To create a new graph use the following command:</p>
          <HighlightedJava code={`CREATE GRAPH Sales`} />
          <aside className="doc-note">
            <strong>Note: </strong> Graph name must be unique and There should
            not be any space between the graph name.
          </aside>
          <p>To use an existing graph use the following command:</p>
          <HighlightedJava code={`USE GRAPH MyOldGraph`} />
          <h3>Graph data</h3>
          <p>
            Use the following command to create data. &apos;CREATE&apos; keyword
            should be used here.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>Don&apos;t forget to run USE GRAPH.. command
            before creating data.
          </aside>
          <HighlightedJava code={`USE GRAPH Sales`} />
          <p>Let&apos;s take one example and create a relationship as:</p>
          <ul>
            <li>Country to State</li>
            <li>State to City</li>
            <li>City to Groups</li>
            <li>
              And our Sales Amount, we are defining it as a relationship
              property, between City to Groups
            </li>
          </ul>
          <HighlightedJava
            code={`CREATE (Country:"United States")-[HAS]->(State:"Georgia")-[HAS]->(City:"Byron")-[ASSOCIATED { "SalesAmount": 4.99}]->(Groups:"0-10k")`}
          />
          <p>If everything goes well, BangDB shows us output as following:</p>
          <HighlightedOutput
            code={`{
   "errcode" : 0,
   "msg" : [
      "success"
   ]
}`}
          />
          <p>In a similar way we can ingest as many as records in our graph.</p>
          <HighlightedJava
            code={`CREATE (Country:"Australia")-[HAS]->(State:"South Australia")-[HAS]->(City:"Perth")-[ASSOCIATED { "SalesAmount": 183388.5186}]->(Groups:"150k-200k")

CREATE (Country:"Canada")-[HAS]->(State:"British Columbia")-[HAS]->(City:"Malabar")-[ASSOCIATED { "SalesAmount": 144920.3202}]->(Groups:"100k-150k")

CREATE (Country:"United States")-[HAS]->(State:"Washington")-[HAS]->(City:"Milwaukie")-[ASSOCIATED { "SalesAmount": 118732.8813}]->(Groups:"100k-150k")

CREATE (Country:"United States")-[HAS]->(State:"Texas")-[HAS]->(City:"College Station")-[ASSOCIATED { "SalesAmount": 1597.7}]->(Groups:"0-10k")

CREATE (Country:"United States")-[HAS]->(State:"Washington")-[HAS]->(City:"Downey")-[ASSOCIATED { "SalesAmount": 116147.121}]->(Groups:"100k-150k")

CREATE (Country:"France")-[HAS]->(State:"Essonne")-[HAS]->(City:"Rockhampton")-[ASSOCIATED { "SalesAmount": 181244.7285}]->(Groups:"150k-200k")

CREATE (Country:"United States")-[HAS]->(State:"California")-[HAS]->(City:"Bluffton")-[ASSOCIATED { "SalesAmount": 2400.34}]->(Groups:"0-10k")

CREATE (Country:"United States")-[HAS]->(State:"Washington")-[HAS]->(City:"Langford")-[ASSOCIATED { "SalesAmount": 128693.9269}]->(Groups:"100k-150k")

CREATE (Country:"United Kingdom")-[HAS]->(State:"England")-[HAS]->(City:"Hof")-[ASSOCIATED { "SalesAmount": 58119.8632}]->(Groups:"50k-70k")

CREATE (Country:"United States")-[HAS]->(State:"New York")-[HAS]->(City:"Braintree")-[ASSOCIATED { "SalesAmount": 1735.98}]->(Groups:"0-10k")

CREATE (Country:"United Kingdom")-[HAS]->(State:"England")-[HAS]->(City:"North Sydney")-[ASSOCIATED { "SalesAmount": 34956.7407}]->(Groups:"30k-50k")

CREATE (Country:"Canada")-[HAS]->(State:"British Columbia")-[HAS]->(City:"Coronado")-[ASSOCIATED { "SalesAmount": 126086.6603}]->(Groups:"100k-150k")

CREATE (Country:"Australia")-[HAS]->(State:"New South Wales")-[HAS]->(City:"St. Leonards")-[ASSOCIATED { "SalesAmount": 155010.3774}]->(Groups:"150k-200k")

CREATE (Country:"United States")-[HAS]->(State:"California")-[HAS]->(City:"Lavender Bay")-[ASSOCIATED { "SalesAmount": 160427.2862}]->(Groups:"150k-200k")

CREATE (Country:"Australia")-[HAS]->(State:"New South Wales")-[HAS]->(City:"North Ryde")-[ASSOCIATED { "SalesAmount": 175222.5111}]->(Groups:"150k-200k")

CREATE (Country:"Australia")-[HAS]->(City:"Perth")

CREATE (Country:"Canada")-[HAS]->(City:"Malabar")

CREATE (Country:"United States")-[HAS]->(City:"Milwaukie")

CREATE (Country:"United States")-[HAS]->(City:"College Station")

CREATE (Country:"United States")-[HAS]->(City:"Downey")

CREATE (Country:"France")-[HAS]->(City:"Rockhampton")

CREATE (Country:"United States")-[HAS]->(City:"Bluffton")

CREATE (Country:"United States")-[HAS]->(City:"Langford")

CREATE (Country:"United Kingdom")-[HAS]->(City:"Hof")

CREATE (Country:"United States")-[HAS]->(City:"Braintree")

CREATE (Country:"United Kingdom")-[HAS]->(City:"North Sydney")

CREATE (Country:"Canada")-[HAS]->(City:"Coronado")

CREATE (Country:"Australia")-[HAS]->(City:"St. Leonards")

CREATE (Country:"United States")-[HAS]->(City:"Lavender Bay")

CREATE (Country:"Australia")-[HAS]->(City:"North Ryde")`}
          />
          <h3>Scenarios</h3>
          <h5>How to get a COUNT of all States in a Country?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`s=>(@p Country:*)-[@r HAS]->(@c State:*);RETURN p.name AS Country, UCOUNT(c.name) AS "No. of States"`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            If we see the schema, we have two separate NODES for Country and
            States. But we don&apos;t know from which Country this State
            belongs. To know this, we have defined a relation between Country
            and States as “HAS”. Using the BangDB syntax to use Nodes and
            Relations we can know the number of States in a Country.
          </p>
          <p>
            If you wonder, we have an arrow pointing to our 2nd NODE. To which
            node this arrow is pointing is actually our OBJECT and the origin of
            this arrow signifies SUBJECT. We have to go through the schema for
            better understanding.
          </p>
          <p>
            Syntax: X=&gt;(@alias1 NODE1:*)-[@alia2 RELATION]-&gt;((@alias3
            NODE2:*);RETURN ….
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>Alias names can&apos;t be duplicated.
          </aside>
          <p>
            In the first RETURN, we are returning Country names, and then we are
            returning a unique count of no.of States using States NODE.
          </p>
          <p>
            BangDB provides us two features to count no. event. COUNT & UCOUNT.
            As we know, in this dataset, state names can be repeated to
            represent all its Cities. That&apos;s why we are using UCOUNT, which
            means a Unique Count of all the States present in a Country.
          </p>
          <HighlightedOutput
            code={`+--------------+-------------+
|Country       |No. of States|
+--------------+-------------+
|Canada        |1            |
+--------------+-------------+
|Australia     |2            |
+--------------+-------------+
|France        |1            |
+--------------+-------------+
|United Kingdom|1            |
+--------------+-------------+
|United States |5            |
+--------------+-------------+`}
          />
          <h5>How to get a COUNT of all Cities in a Country?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`s=>(@p Country:*)-[@r HAS]->(@c City:*);RETURN p.name AS Country, COUNT(c.name) AS "No. of Cities" SORT_DESC "No. of Cities"`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            To make a query for this requirement, we want some relation between
            Country and City and if we see the schema, we have a relation
            between these two nodes as &quot;HAS&quot;.
          </p>
          <p>
            Here if you see we are using COUNT instead of UCOUNT. Because in our
            dataset we know all the cities are already unique. So we can use
            COUNT here.
          </p>
          <p>
            We are also sorting the result in descending order of &quot;No. of
            Cities&quot; using SORT_DESC. It is case-sensitive.
          </p>
          <p>We can also sort the result in ascending order using SORT_ASC.</p>
          <HighlightedOutput
            code={`+--------------+-------------+
|Country       |No. of Cities|
+--------------+-------------+
|United States |7            |
+--------------+-------------+
|Australia     |3            |
+--------------+-------------+
|Canada        |2            |
+--------------+-------------+
|United Kingdom|2            |
+--------------+-------------+
|France        |1            |
+--------------+-------------+`}
          />
          <h5>How to list down all Cities in a State of a specific Country?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`s=>(@c Country:*)-[@r1 HAS]->(@s State:*)-[@r2 HAS]->(@ci City:*);RETURN c.name AS Country, s.name AS State, ci.name AS City WHERE Country = Canada`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            Here we have to use Country, State, and City NodeTypes in the same
            query. If we see the schema, we have a relation from Country to
            State, State to City as &quot;HAS&quot;.
          </p>
          <p>If we break this query into two parts, we will have</p>
          <ul>
            <li>Country to State relationship.</li>
            <li>State to City relationship.</li>
          </ul>

          <p>
            In the 1st part, State was our OBJECT and in the 2nd part, State
            becomes our SUBJECT. This type of query writing is known as Chain
            query where we have more than one relation mentioned.
          </p>
          <p>
            In the RETURN, we can use the respected alias names and call their
            defined properties.
          </p>
          <p>
            To put filter conditions on Country names we are using the WHERE
            condition.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>Relationship names can be repetitive in the
            schema.
            <p>
              WHERE condition works only on the column name that we specify
              after &quot;AS&quot;.
            </p>
          </aside>
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+----------------+--------+-------+
|State           |City    |Country|
+----------------+--------+-------+
|British Columbia|Malabar | Canada|
+----------------+--------+-------+
|British Columbia|Coronado| Canada|
+----------------+--------+-------+`}
          />
          <h5>How to get a SUM of Total Sales in the Country?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`s=>(@c Country:*)-[@r2 HAS]->(@ci City:*)-[@r3 ASSOCIATED]->(@g Groups:*);RETURN c.name AS Country, SUM(r3.SalesAmount) AS "Total Sales Amount"`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            As we know we have a relation from Country to City, but now we want
            to show the Sales Amount and we are defining this in the schema as a
            relation property.
          </p>
          <p>So now we have to add one more relation from City to Groups.</p>
          <p>
            In the RETURN we are showing Country Names and SUM of SalesAmount
            using the r3 alias name because SalesAmount property is defined
            inside this relationship.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>We can define properties inside NODES and
            RELATIONS too.
            <p>
              SUM is our aggregation function, and it&apos;s case-sensitive.
            </p>
          </aside>
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+--------------+------------------+
|Country       |Total Sales Amount|
+--------------+------------------+
|Canada        |271006.980500     |
+--------------+------------------+
|Australia     |513621.407100     |
+--------------+------------------+
|France        |181244.728500     |
+--------------+------------------+
|United Kingdom|93076.603900      |
+--------------+------------------+
|United States |529735.235400     |
+--------------+------------------+`}
          />
          <h5> How to get an AVERAGE of Total Sales in a Country?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`s=>(@c Country:*)-[@r1 HAS]->(@s State:*)-[@r2 HAS]->(@ci City:*)-[@r3 ASSOCIATED]->(@g Groups:*);RETURN c.name AS Country, AVG(r3.SalesAmount) AS "Average Sales Amount"`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            In a similar way as we did in the last query, now here I want to
            return the Average of Sales Amount. So we are using AVG aggr.
            function.
          </p>
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+--------------+--------------------+
|Country       |Average Sales Amount|
+--------------+--------------------+
|Canada        |135503.490250       |
+--------------+--------------------+
|Australia     |171207.135700       |
+--------------+--------------------+
|France        |181244.728500       |
+--------------+--------------------+
|United Kingdom|46538.301950        |
+--------------+--------------------+
|United States |66217.528175        |
+--------------+--------------------+`}
          />
          <h5> How to get a STANDARD DEVIATION of Total Sales in a Country?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`s=>(@c Country:*)-[@r2 HAS]->(@ci City:*)-[@r3 ASSOCIATED]->(@g Groups:*);RETURN c.name AS Country, STD(r3.SalesAmount) AS "Standard Deviation of Sales Amount"`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            In a similar way as we did in the last query, now here I want to
            return the Standard Deviation of Sales Amount. So we are using STD
            aggr. function.
          </p>
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+--------------+----------------------------------+
|Country       |Standard Deviation of Sales Amount|
+--------------+----------------------------------+
|Canada        |13317.408630                      |
+--------------+----------------------------------+
|Australia     |14608.975125                      |
+--------------+----------------------------------+
|France        |0.000000                          |
+--------------+----------------------------------+
|United Kingdom|16378.800993                      |
+--------------+----------------------------------+
|United States |70485.851042                      |
+--------------+----------------------------------+`}
          />
          <h5>How to get a MAXIMUM Sales amount in a Country?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`s=>(@c Country:*)-[@r2 HAS]->(@ci City:*)-[@r3 ASSOCIATED]->(@g Groups:*);RETURN c.name AS Country, MAX(r3.SalesAmount) AS "Maximum Sales Amount"`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            If we look at the dataset, we have a Country that has many States
            and States which have many cities. So clearly Country names are
            gonna repeat in the data.
          </p>
          <p>
            But now we want to return the highest Sales Amount number respective
            of the Country and BangDB provides us this aggr. function, MAX, to
            do the same.
          </p>
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+--------------+--------------------+
|Country       |Maximum Sales Amount|
+--------------+--------------------+
|Canada        |144920.320200       |
+--------------+--------------------+
|Australia     |183388.518600       |
+--------------+--------------------+
|France        |181244.728500       |
+--------------+--------------------+
|United Kingdom|58119.863200        |
+--------------+--------------------+
|United States |160427.286200       |
+--------------+--------------------+`}
          />
          <h5>How to get a MINIMUM Sales amount in a Country?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`s=>(@c Country:*)-[@r2 HAS]->(@ci City:*)-[@r3 ASSOCIATED]->(@g Groups:*);RETURN c.name AS Country, MIN(r3.SalesAmount) AS "Minimum Sales Amount"`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            In a similar way as we did in the last query, now here I want to
            return the Lowest Sales Amount respective of the Country. So we are
            using MIN aggr. function.
          </p>
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+--------------+--------------------+
|Country       |Minimum Sales Amount|
+--------------+--------------------+
|Canada        |126086.660300       |
+--------------+--------------------+
|Australia     |155010.377400       |
+--------------+--------------------+
|France        |181244.728500       |
+--------------+--------------------+
|United Kingdom|34956.740700        |
+--------------+--------------------+
|United States |1597.700000         |
+--------------+--------------------+`}
          />
          <h5>How to get a SKEW result of the Sales amount in a Country?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`s=>(@c Country:*)-[@r2 HAS]->(@ci City:*)-[@r3 ASSOCIATED]->(@g Groups:*);RETURN c.name AS Country, SKEW(r3.SalesAmount) AS "Skew Sales Amount"`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            In a similar way as we did in the last query, now here I want to
            return the Skew value of Sales Amount. So we are using SKEW aggr.
            function.
          </p>
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+--------------+-----------------+
|Country       |Skew Sales Amount|
+--------------+-----------------+
|Canada        |0.000000         |
+--------------+-----------------+
|Australia     |-1.143416        |
+--------------+-----------------+
|France        |0.000000         |
+--------------+-----------------+
|United Kingdom|0.000000         |
+--------------+-----------------+
|United States |-0.200120        |
+--------------+-----------------+`}
          />
          <h5>How to get a Total Sales amount of a specific Country?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`s=>(@c Country:*)-[@r2 HAS]->(@ci City:*)-[@r3 ASSOCIATED]->(@g Groups:*);RETURN c.name AS Country, SUM(r3.SalesAmount) AS "Total Sales Amount" WHERE Country = Australia`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>Country name we can get from Country Node itself.</p>
          <p>
            Sales Amount as we already know is present in the
            &quot;ASSOCIATED&quot; property. So to make things work, we have to
            link the Country and City and Groups nodes in a chain query and
            return the result as per our requirement.
          </p>
          <p>
            Also, we want to sum the sales amount so we will use SUM aggr.
            function here and using the WHERE condition we will be able to
            filter our Country name.
          </p>
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+---------+------------------+
|Country  |Total Sales Amount|
+---------+------------------+
|Australia|513621.407100     |
+---------+------------------+`}
          />
          <h5>
            How to get a Total Sales amount of a specific Country and a specific
            State?
          </h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`s=>(@c Country:*)-[@r1 HAS]->(@s State:*)-[@r2 HAS]->(@ci City:*)-[@r3 ASSOCIATED]->(@g Groups:*);RETURN c.name AS Country, s.name AS State, SUM(r3.SalesAmount) AS "Total Sales Amount" WHERE Country = Australia AND State = "New South Wales"`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            As we did in the last query, here we will return Country and State
            names and in the WHERE condition we are filtering the results based
            on Country name and the State name.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>AND is a keyword here and it&apos;s
            case-sensitive.
          </aside>
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+---------------+---------+------------------+
|State          |Country  |Total Sales Amount|
+---------------+---------+------------------+
|New South Wales|Australia|     330232.888500|
+---------------+---------+------------------+`}
          />
          <h5>Total Sales Amount for all the cities in a specific Country?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`s=>(@c Country:*)-[@r2 HAS]->(@ci City:*)-[@r3 ASSOCIATED]->(@g Groups:*);RETURN c.name AS Country, ci.name AS City, SUM(r3.SalesAmount) AS "Total Sales Amount" WHERE Country = "United States" SORT_ASC City LIMIT 5`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            As we did in the last query, here we will return Country and City
            names and SUM aggr. function is being used here also.
          </p>
          <p>
            In the WHERE condition we are filtering the results based on Country
            name and the City name.
          </p>
          <p>
            Here in output we are getting 18 rows. We can limit the no. of rows
            using the LIMIT keyword. It is case-sensitive. Sorting on the
            alphabet is also possible.
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>LIMIT will always be on the last.
          </aside>
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+---------------+-------------+------------------+
|City           |Country      |Total Sales Amount|
+---------------+-------------+------------------+
|Bluffton       |United States|       2400.340000|
+---------------+-------------+------------------+
|Braintree      |United States|       1735.980000|
+---------------+-------------+------------------+
|College Station|United States|       1597.700000|
+---------------+-------------+------------------+
|Downey         |United States|     116147.121000|
+---------------+-------------+------------------+
|Langford       |United States|     128693.926900|
+---------------+-------------+------------------+`}
          />
          <h5>Total Sales Amount for all the States in a specific Country?</h5>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`s=>(@c Country:*)-[@r1 HAS]->(@s State:*)-[@r2 HAS]->(@ci City:*)-[@r3 ASSOCIATED]->(@g Groups:*);RETURN c.name AS Country, s.name AS State, SUM(r3.SalesAmount) AS "Total Sales Amount" WHERE Country = "Australia"`}
          />
          <p>
            <strong>Description:</strong>
          </p>
          <p>
            Using the WHERE condition we are here filtering the result based on
            Country names and using the SUM function we are calculating the sum
            of the Sales amount for the following States in a specific country.
          </p>
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+---------------+---------+------------------+
|State          |Country  |Total Sales Amount|
+---------------+---------+------------------+
|New South Wales|Australia|     330232.888500|
+---------------+---------+------------------+
|South Australia|Australia|     183388.518600|
+---------------+---------+------------------+`}
          />
          <h2>Patient Schema & Data</h2>
          <p>
            Here we have defined a schema and ingested data as shown in below
            steps. We are defining the following attributes in the schema:
            patientID, event, event_Date, Weight.
          </p>
          <h3>Schema Registration</h3>
          <p>To register schema from BangDB CLI, run:</p>
          <HighlightedJava
            code={`register schema "/home/sachin/Patient_Schema.json"`}
          />
          <aside className="doc-note">
            <strong>Note: </strong>Update the Schema File Path as per your
            system.
          </aside>
          <p>
            Download the{" "}
            <Link
              href="https://drive.google.com/file/d/1MZAb2hsZz834C8akMqZTni-bi8auwC0v/view?usp=share_link"
              target="_blank"
              className="external"
            >
              schema file
            </Link>
          </p>
          <HighlightedJava
            code={`{
  "schema": "Patient",
  "streams": [
    {
      "name": "Data",
      "inpt": [],
      "swsz": 86400,
      "type": 1,
      "attr": [
        {"name": "patientID","type": "STRING","kysz": 24},
        {"name": "event","type": "STRING","kysz": 24,"sidx": 0},
        {"name": "event_date","type": "STRING","kysz": 64},
        {"name": "weight","type": "LONG"}
      ],
      "catr": [
        {"name": "observationID","kysz": 24,"iatr": ["event","event_date"],"fnr": 1,"seq": 0,"type": "STRING","opnm": "ADD"}
      ],
      "rels": [
        {"sub": "patientID","sub_label": "Patient","obj": "event","obj_label": "Event","rel": "is_associated_with","sub_props": ["event_date"],"obj_props": ["event_date"],"sub_updt": 1},
        {"sub": "event","sub_label": "Event","obj": "observationID","obj_label": "Observation","rel": "is_associated_with","sub_props": ["event_date"],"obj_props": ["weight"]}
      ]
    }
  ]
}`}
          />
          <h3>Data</h3>
          <p>To push the data in BangDB Schema, run below commands from CLI:</p>
          <HighlightedJava
            code={`insert into Patient.Data values null {"patientID": "P1", "weight": 50, "event": "001", "event_date": 20201024}
          
insert into Patient.Data values null {"patientID": "P1", "weight": 55, "event": "002", "event_date": 20210524}

insert into Patient.Data values null {"patientID": "P1", "weight": 60, "event": "003", "event_date": 20211124}

insert into Patient.Data values null {"patientID": "P1", "weight": 55, "event": "004", "event_date": 20220124}`}
          />
          <h3>Scenarios</h3>
          <h5>
            DB can have various records holding Patient&apos;s body weight in
            Database. How to fetch the latest Body Weight record stored in the
            Database?
          </h5>
          <p>
            Possible Solution: PIPE query enables a person to pass a list of
            outputs received from the first query to the second query for a more
            prominent search.
          </p>
          <p>
            <strong>PIPE Syntax:</strong>{" "}
            <em>
              &lt;PIPE USING
              &#96;variable_name&#96;&gt;S1=&gt;()-[]-&gt;();RETURN..... ++
              S2=&gt;()-[]-&gt;();RETURN......
            </em>
          </p>
          <aside className="doc-note">
            <strong>Note: </strong>The variable_name should be available in both
            the queries & should be named the same that we are providing in the
            starting as well i.e. variable_name. In the following example,{" "}
            <strong>event_date</strong> is the variable name on which I want the
            PIPE Query to work.
          </aside>
          <p>
            <strong>Query:</strong>
          </p>
          <HighlightedJava
            code={`<PIPE USING event_date>S1=>(@P Patient:"P1");RETURN P.event_date AS event_date ++ S2=>(@E Event:*)-[@r is_associated_with]->(@O Observation:*);RETURN E.event_date AS event_date, O.weight AS Weight`}
          />
          <p>
            <strong>Output:</strong>
          </p>
          <HighlightedOutput
            code={`+------ +-------------+
|Weight |latest_event |
+-------+-------------+
|55     |20220124     |
+-------+-------------+`}
          />
          <p>
            So, as we can see, based on the PIPE Query we are able to fetch the
            latest Weight for the given PatientID.
          </p>
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
