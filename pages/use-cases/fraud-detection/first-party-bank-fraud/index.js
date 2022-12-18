import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";
import DocArticle from "../../../../components/DocArticle";
import HighlightedCpp from "../../../../components/HighlightedCpp";
import Codebox from "../../../../components/Codebox";
import Link from "next/link";
import Image from "next/image";

export default function FDfirstPartyBankFraud() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>First-party bank fraud - BangDB</title>
        <meta
          name="description"
          content="Fraud Detection - First-party bank fraud involves fraudsters who apply for credit cards, loans, with no intention of paying them back."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="First-party bank fraud - BangDB" />
        <meta
          property="og:description"
          content="Fraud Detection - First-party bank fraud involves fraudsters who apply for credit cards, loans, with no intention of paying them back."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="First-party bank fraud - BangDB" />
        <meta
          name="twitter:description"
          content="Fraud Detection - First-party bank fraud involves fraudsters who apply for credit cards, loans, with no intention of paying them back."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">First-party bank fraud</h1>
        <div className="article-body">
          <p>
            First-party bank fraud involves fraudsters who apply for credit
            cards, loans, overdrafts and unsecured banking credit lines, with no
            intention of paying them back. It is a serious problem for banking
            institutions.
          </p>
          <p>
            The surprising magnifitude of these losses is likely the result of
            two factors. The first is that first-party bank fraud is very
            difficult to detect. Fraudsters behave very similarly to legitimate
            customers, until the moment they &quot;bust out&quot;, cleaning out
            all their accounts and promptly disappearing.
          </p>
          <p>
            A second factor - which will also be explored later in greater
            detail—is the exponential nature of the relationship between the
            number of participants in the fraud ring and the overall dollar
            value controlled by the operation. This connected explosion is a
            feature often exploited by organized crime.
          </p>
          <p>
            However while this characteristic makes these schemes potentially
            very damaging, it also renders them particularly susceptible to
            graph-based methods of fraud detection.
          </p>
          <p>Common Types of First-Party Bank Fraud:</p>
          <ul>
            <li>
              Sleeper fraud occurs when a fraudster acquires a form of credit
              and, over time, builds up what appears to be normal customer
              behaviour. As the customer builds trust with the service provider
              over months or even years, they eventually ask for more credit and
              then cash in, taking the maximum amount of cash and any goods with
              them, never to be seen again.
            </li>
            <li>
              Bust-out fraud, also known as hit and run, can happen on many
              types of financial services. It&apos;s quick and sometimes easy,
              with credit cards and loans being the easiest prey today. In some
              countries where cheques are in use or have slower clearing cycles,
              fraudsters can exploit these inefficiencies to inflate a credit
              balance by up to 10 times the limit and cash out before getting
              caught.
            </li>
          </ul>
          <h2>Scenario</h2>
          <p>
            While the exact details behind each first-party bank fraud collusion
            vary from operation to operation, the pattern below illustrates how
            fraud rings commonly operate:
          </p>
          <ul>
            <li>A group of two or more people organize into a fraud ring.</li>
            <li>
              The ring shares a subset of legitimate contact information, for
              example phone numbers and addresses, combining them to create a
              number of synthetic identities.
            </li>
            <li>
              Ring members open accounts using these synthetic identities.
            </li>
            <li>
              New accounts are added to the original ones: unsecured credit
              lines, credit cards, overdraft protection, personal loans, etc.
            </li>
            <li>
              The accounts are used normally, with regular purchases and timely
              payments.
            </li>
            <li>
              Banks increase the revolving credit lines over time, due to the
              observed responsible credit behavior.
            </li>
            <li>
              One day the ring “busts out”, coordinating their activity, maxing
              out all of their credit lines, and disappearing.
            </li>
            <li>
              Sometimes fraudsters will go a step further and bring all of their
              balances to zero using fake checks immediately before the prior
              step, doubling the damage.
            </li>
            <li>
              Collections processes ensue, but agents are never able to reach
              the fraudster.
            </li>
            <li>The uncollectible debt is written off.</li>
          </ul>
          <h2>Solution</h2>
          <p>
            We can run appropriate graph queries using graph and run checks
            during key stages in the customer and account life cycles such as:
          </p>
          <ul>
            <li>At the time the account is created.</li>
            <li>During an investigation.</li>
            <li>As soon as a credit balance threshold is hit.</li>
            <li>When a check is bounced.</li>
          </ul>
          <h3>Graph Structure</h3>
          <p>
            The graph data model below represents how the data is linked and
            illustrates how one can find rings by simply walking the graph.
          </p>
          <Image
            alt="graph structure"
            src="https://bangdb.com/wp-content/uploads/2022/04/word-image-3.png"
            width="957"
            height="674"
          />
          <h2>Steps to Implement</h2>
          <h3>Step 1</h3>
          <h4>Sample data:</h4>
          <p>Insert data from CLI</p>
          <Codebox code={`CREATE GRAPH Bank_Fraud`} />
          <Codebox code={`USE GRAPH Bank_Fraud`} />
          <HighlightedCpp
            code={`CREATE (UID:101 {"FirstName":"John","LastName":"Doe"})-[HAS_ADDRESS {"info":"Address"}]->(Address:address1 {"Street":"123 NW 1st Street","City":"San Francisco","State":"California","ZipCode":"94101" })

CREATE (UID:102 {"FirstName":"Jane","LastName":"Appleseed"})-[HAS_ADDRESS {"info":"Address"}]->(Address:address1 {"Street":"123 NW 1st Street","City":"San Francisco","State":"California","ZipCode":"94101" })

CREATE (UID:103 {"FirstName":"Matt","LastName":"Smith"})-[HAS_ADDRESS {"info":"Address"}]->(Address:address1 {"Street":"123 NW 1st Street","City":"San Francisco","State":"California","ZipCode":"94101" })

CREATE (UID:104 {"FirstName":"Adam","LastName":"Well"})-[HAS_ADDRESS {"info":"Address"}]->(Address:address4 {"Street":"11 4st Street","City":"San Francisco","State":"California","ZipCode":"94105" })

CREATE (UID:105 {"FirstName":"Emily","LastName":"Green"})-[HAS_ADDRESS {"info":"Address"}]->(Address:address5 {"Street":"1445/3278 box street","City":"San Francisco","State":"California","ZipCode":"94103"})

CREATE (UID:106 {"FirstName":"Rose","LastName":"Breey"})-[HAS_ADDRESS {"info":"Address"}]->(Address:address5 {"Street":"1445/3278 box street","City":"San Francisco","State":"California","ZipCode":"94103"})

CREATE (Address:address1)-[ADDRESS_OF {"info":"Address"}]->(UID:101)

CREATE (Address:address1)-[ADDRESS_OF {"info":"Address"}]->(UID:102)

CREATE (Address:address1)-[ADDRESS_OF {"info":"Address"}]->(UID:103)

CREATE (Address:address4)-[ADDRESS_OF {"info":"Address"}]->(UID:104)

CREATE (UID:101)-[HAS_PHONENUMBER {"info":"Phone_Number"}]->(PhoneNumber:555-555-5555)

CREATE (UID:102)-[HAS_PHONENUMBER {"info":"Phone_Number"}]->(PhoneNumber:555-555-5555)

CREATE (UID:104)-[HAS_PHONENUMBER {"info":"Phone_Number"}]->(PhoneNumber:555-555-5357)

CREATE (UID:103)-[HAS_PHONENUMBER {"info":"Phone_Number"}]->(PhoneNumber:555-555-1234)

CREATE (UID:105)-[HAS_PHONENUMBER {"info":"Phone_Number"}]->(PhoneNumber:555-555-5345)

CREATE (UID:106)-[HAS_PHONENUMBER {"info":"Phone_Number"}]->(PhoneNumber:555-555-5555)

CREATE (UID:102)-[HAS_SSN {"info":"IdentificationID"}]->(SSN:241-23-1234)

CREATE (UID:103)-[HAS_SSN {"info":"IdentificationID"}]->(SSN:241-23-1234)

CREATE (UID:104)-[HAS_SSN {"info":"IdentificationID"}]->(SSN:241-23-6875)

CREATE (UID:101)-[HAS_SSN {"info":"IdentificationID"}]->(SSN:241-23-4567)

CREATE (UID:105)-[HAS_SSN {"info":"IdentificationID"}]->(SSN:241-23-7893)

CREATE (UID:106)-[HAS_SSN {"info":"IdentificationID"}]->(SSN:241-23-4567)

CREATE (UID:101)-[HAS_ACCOUNT]->(AccountNumber:1234567890123456 {"HasCreditCard":1,"HasLoan":0,"Limit":5000,"Balance":1442.23,"ExpirationDate":"01-20","SecurityCode":"123"})

CREATE (UID:101)-[HAS_ACCOUNT]->(AccountNumber:2345678901234567 {"HasCreditCard":0,"HasLoan":0,"Limit":0,"Balance":7054.43})

CREATE (UID:102)-[HAS_ACCOUNT]->(AccountNumber:1234467890123456 {"HasCreditCard":1,"HasLoan":0,"Limit":4000,"Balance":2345.56,"ExpirationDate":"02-20","SecurityCode":"456"})

CREATE (UID:102)-[HAS_ACCOUNT]->(AccountNumber:3456789012345678 {"HasCreditCard":0,"HasLoan":0,"Limit":0,"Balance":4231.12 })

CREATE (UID:102)-[HAS_ACCOUNT]->(AccountNumber:4567890123456789-0 {"HasCreditCard":0,"HasLoan":1,"Limit":0,"LoanAmt": 9045.53,"APR": 0.0541})

CREATE (UID:103)-[HAS_ACCOUNT]->(AccountNumber:4567890123456789 {"HasCreditCard":0,"HasLoan":0,"Limit":0,"Balance":12345.45})

CREATE (UID:103)-[HAS_ACCOUNT]->(AccountNumber:56789012345678900 {"HasCreditCard":0,"HasLoan":1,"Limit":0,"LoanAmt":16341.95,"APR":0.0341} 

CREATE (UID:104)-[HAS_ACCOUNT]->(AccountNumber:67890123456789010 {"HasLoan":1,"HasCreditCard":0,"Limit":0,"LoanAmt":11233.4,"APR":0.0567})

CREATE (UID:105)-[HAS_ACCOUNT]->(AccountNumber:7890123456789012 {"HasLoan":0,"HasCreditCard":1,"Limit":8000,"Balance":12345.67,"ExpirationDate":"02-20","SecurityCode":"786"})`}
          />
          <h3>Step 2</h3>
          <h4>Performing Graph Queries</h4>
          <p>
            Find account holders who share more than one piece of legitimate
            contact information and Determine the financial risk of a possible
            fraud ring.
          </p>
          <p>Checking for people sharing same address</p>
          <HighlightedCpp
            code={`S=>(@u UID:*)-[@d HAS_ADDRESS]->(@q Address:*);RETURN q.name AS AddressID,COUNT(*) AS AddressRingSize WHERE AddressRingSize > 2`}
          />
          <p>
            Checking the risk for &quot;address 1&quot;. Below query display all
            customers sharing id &quot;address 1&quot;
          </p>
          <HighlightedCpp
            code={`S2=>[S1=>(@u UID:*)-[@h HAS_ADDRESS]->(Address:address1)]-[@l HAS_ACCOUNT]->(@a AccountNumber:*);RETURN u.name AS UserID, SUM(a.Limit) AS CreditLimit, SUM(a.LoanAmt) AS LoanAmtBal, MATH_EXP("($CreditLimit+$LoanAmtBal)") AS TotalRisk`}
          />
          <p>Checking total risk for each address</p>
          <HighlightedCpp
            code={`S2=>[S1=>(@u UID:*)-[@d HAS_ADDRESS]->(@q Address:*)]-[@h HAS_ACCOUNT]->(@a AccountNumber:*);RETURN COUNT(a.name) AS NumberOFAccounts, q.name AS AddressID,SUM(a.Limit) AS CreditLimit, SUM(a.LoanAmt) AS LoanAmtBal, MATH_EXP("($CreditLimit+$LoanAmtBal)") AS TotalRisk WHERE NumberOFAccounts > 6`}
          />
          <p>Checking for people sharing phone number</p>
          <HighlightedCpp
            code={`S=>(@p PhoneNumber:*)<-[@n HAS_PHONENUMBER]-(UID:*);RETURN p.name AS phonenumber, COUNT(*) AS PhoneRingSize WHERE PhoneRingSize > 2`}
          />
          <p>Checking the risk of all phone number risks</p>
          <HighlightedCpp
            code={`S2=>[S1=>(@u UID:*)-[@n HAS_PHONENUMBER]->(@p PhoneNumber:*)]-[@H HAS_ACCOUNT]->(@a AccountNumber:*);RETURN UCOUNT(u.name) AS PhoneNumberRingSize, p.name AS PhoneNumbers, UCOUNT(a.name) AS NumberOFAccounts, SUM(a.Limit) AS CreditLimit, SUM(a.LoanAmt) AS LoanAmtBal, MATH_EXP("($CreditLimit+$LoanAmtBal)") AS TotalRisk`}
          />
          <p>Checking for people sharing identification number</p>
          <HighlightedCpp
            code={`S=>(@s SSN:*)<-[@l HAS_SSN]-(UID:*);RETURN s.name AS IdentificationNumber, COUNT(*) AS SSNRingSize WHERE SSNRingSize > 1`}
          />
          <p>
            Checking the risk for &quot;241-23-4567&quot;. Below query will
            display all customers sharing id &quot;241-23-4567&quot;.
          </p>
          <HighlightedCpp
            code={`S2=>[S1=>(@u UID:*)-[@l HAS_SSN]->(SSN:241-23-4567)]-[@H HAS_ACCOUNT]->(@a AccountNumber:*);RETURN u.name AS CustomerID, COUNT(a.name) AS NumberOFAccounts, SUM(a.Limit) AS CreditLimit, SUM(a.LoanAmt) AS LoanAmtBal, MATH_EXP("($CreditLimit+$LoanAmtBal)") AS TotalRisk`}
          />
          <p>
            Real-time graph traversals tied to the right kinds of events can
            help banks identify probable fraud rings: during or even before the
            bust-out occurs.
          </p>
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
