import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Ad from "@/components/Ad";
import styles from "../../styles/mainpage.module.css";

const WorkVisaCountry = () => {
  const router = useRouter();
  const { name } = router.query;

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (name) {
      fetch(`/api/country/work-visa/${encodeURIComponent(name)}`)
        .then((response) => response.json())
        .then((data) => setCountryData(data))
        .catch((error) => console.error("Error fetching country data:", error));
    }
  }, [name]);
  const renderSectionContent = (content, sectionTitle) => {
    if (Array.isArray(content)) {
      if (content.length > 0 && typeof content[0] === "object") {
        // Handle array of objects
        return (
          <ul>
            {content.map((item, index) => (
              <li key={index}>
                {Object.entries(item).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key}:</strong>
                    {value}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        );
      } else {
        // Handle array of strings
        return (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      }
    }

    if (typeof content === "object") {
      return (
        <ul>
          {Object.entries(content).map(([key, value], ind) => (
            <li key={key}>
              {sectionTitle === "Official Websites" ? (
                <>
                  <strong>{key}:</strong>
                  <Link href={value} target="_blank">
                    {value}
                  </Link>
                </>
              ) : ind % 2 == 0 ? (
                <strong>{value}</strong>
              ) : (
                value
              )}
            </li>
          ))}
        </ul>
      );
    }

    return <p>{content}</p>;
  };

  if (!countryData) {
    return <p>Loading...</p>;
  }
  if (countryData?.error) return <p>Not Found</p>;

  return (
    <div className={styles.main}>
      <Head>
        <title>{`Work Visa Guide for ${name}`}</title>
      </Head>
      <div className={styles.content}>
        <h1>{`How to Get a Work Visa for ${name}: Read Detailed Guide Here`}</h1>
        <p>{countryData.title}</p>

        {Object.entries(countryData.sections)?.map(
          ([sectionTitle, sectionContent], ind) => (
            <div key={sectionTitle}>
              <h2>{sectionTitle}</h2>
              {Array.isArray(sectionContent) ? (
                <>
                  {sectionContent.map((item, index) => (
                    <div key={index} className={styles.contentData}>
                      {renderSectionContent(item, sectionTitle)}
                    </div>
                  ))}
                  {ind % 2 == 0 && <Ad />}
                </>
              ) : (
                renderSectionContent(sectionContent, sectionTitle)
              )}
            </div>
          )
        )}
      </div>
      <div className={styles.ad}>
        <Ad vertical={true} />
        <Ad vertical={true} />
      </div>
    </div>
  );
};

export default WorkVisaCountry;
