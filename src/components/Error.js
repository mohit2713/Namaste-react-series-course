import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <div>
        <h1>
          Error : <span>{error.status}</span>
        </h1>
        <h2>{error.statusText}</h2>
      </div>
    </div>
  );
};

export default Error;
