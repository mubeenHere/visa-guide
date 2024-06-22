import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

const StudyVisaCountry = () => {
  const router = useRouter();
  const { name } = router.query;

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (name) {
      fetch(`/api/country/study-visa/${encodeURIComponent(name)}`)
        .then((response) => response.json())
        .then((data) => setCountryData(data))
        .catch((error) => console.error("Error fetching country data:", error));
    }
  }, [name]);

  const renderSectionContent = (content) => {
    if (Array.isArray(content)) {
      if (content.length > 0 && typeof content[0] === "object") {
        // Handle array of objects
        return (
          <ul>
            {content.map((item, index) => (
              <li key={index}>
                {Object.entries(item).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key}:</strong> {value}
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
          {Object.entries(content).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
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

  return (
    <div>
      <Head>
        <title>{`Study Visa Guide for ${name}`}</title>
      </Head>
      <h1>{`Study Visa Guide for ${name}`}</h1>
      <p>{countryData.title}</p>

      {Object.entries(countryData.sections)?.map(
        ([sectionTitle, sectionContent]) => (
          <div key={sectionTitle}>
            <h2>{sectionTitle}</h2>
            {Array.isArray(sectionContent)
              ? sectionContent.map((item, index) => (
                  <div key={index}>{renderSectionContent(item)}</div>
                ))
              : renderSectionContent(sectionContent)}
          </div>
        )
      )}
    </div>
  );
};

export default StudyVisaCountry;
