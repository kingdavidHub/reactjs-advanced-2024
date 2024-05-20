import React, { useEffect, useState } from "react";

const FetchUserData = ({ url }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [fetchData, setFetchData] = useState(false);

  const fetchUser = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(`${url}?result=1`);
      const data = await res.json();

      if (data && data.results.length > 0) {
        const { first, last } = data.results[0].name;
        setUser({
          firstName: first,
          lastName: last,
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg(`There is a ${error.message}`);
    }
  };

  useEffect(() => {
    if (fetchData) {
      fetchUser(url);
      setFetchData(false);
    }

    // * only run when fetchData is true or when there is any changes on the fetchData state variable
  }, [fetchData]);

  return (
    <>
      <h1>Fetch User Data</h1>
      <h2>First name: {user.firstName}</h2>
      <h2>Last name: {user.lastName}</h2>

      {loading && <h2>App is loading 🚓</h2>}

      {errorMsg && <h2>{errorMsg} ❌</h2>}

      <button onClick={() => setFetchData(true)}>Fetch Data</button>
    </>
  );
};

export default FetchUserData;
