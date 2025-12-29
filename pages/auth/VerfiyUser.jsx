import React, { useEffect, useRef, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { activateUserApi } from "../../services/authApi.js";

const VerfiyUser = () => {
  const [isPending, setIsPending] = useState(true);
  const [searchParams] = useSearchParams();
  const [response, setResponse] = useState({});
  const navigate = useNavigate();

  // to avoid calling the api twice
  const shouldFetchRef = useRef(true);

  const sessionId = searchParams.get("sessionId");
  const t = searchParams.get("t");

  useEffect(() => {
    if (sessionId && t && shouldFetchRef.current) {
      shouldFetchRef.current = false;

      (async () => {
        try {
          const result = await activateUserApi({ sessionId, t });
          setResponse(result);
          setIsPending(false);
        } catch (error) {
          console.error("Error activating user:", error);
          setIsPending(false);
        }
      })();
    }
  }, [sessionId, t]);

  useEffect(() => {
    if (response.status === "success") {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [response.status, navigate]);

  return (
    <div className="py-5 px-5">
      {isPending && (
        <div
          className="m-auto d-flex justify-content-center gap-3"
          style={{ width: "450px" }}
        >
          <Spinner animation="border" variant="primary" />
          <div>Please do not go back or refresh the browser. Please wait...</div>
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
