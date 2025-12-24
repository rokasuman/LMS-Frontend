import React, { useEffect, useRef, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { activateUserApi } from "../../services/authApi.js";

const VerfiyUser = () => {
  const [isPending, setIsPending] = useState(true);
  const [searchParams] = useSearchParams();
  const [response, setResponse] = useState({});
  const nagivate = useNavigate();

  //to avoid calling ethe api twice
  const shouldFetchRef = useRef(true);

  const sessionId = searchParams.get("sessionId");
  const t = searchParams.get("t");
  console.log(searchParams);

  //useEffect
  useEffect(() => {
    if (sessionId && t && shouldFetchRef) {
      (async () => {
        try {
          const result = await activateUserApi({ sessionId, t });
          setResponse(result);
          setIsPending(false);
        } catch (error) {
          console.error("Error activating user:", error);
        }
      })();
      shouldFetchRef.current = false;
    }
    if (response.status === "success") {
      setTimeout(() => {
        nagivate("./login");
      }, 3000);
    }
  }, [sessionId, t]);
  return (
    <div className="py-5 px-5">
      {isPending && (
        <div
          className="m-auto d-flex justify-content-center gap-3"
          style={{ width: "450px" }}
        >
          <Spinner animation="border" variant="primary" />
          <div>Please do not go back or referce the Brower. Please wait...</div>
        </div>
      )}

      {response?.message && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message}
        </Alert>
      )}
    </div>
  );
};

export default VerfiyUser;
