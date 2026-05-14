import { useRouteError } from "react-router-dom";

//A react Hook that gives more info about the error.

const Error = ()=> {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <h2>{err.status}: {err.statusText}</h2>
    </div>
  );
}

export default Error;