import React from "react";
import Header  from "./Header";
import { PrettyCode }  from "./PrettyCode";

type ErrorProps = {
  error: string;
  errorMessage?: string;
};

export const Error = ({ error, errorMessage }: ErrorProps) => {
  return (
    <>
      <Header />
      <div className="content">
        <div className="header-1">Error</div>
        <div className="paper">
            <div className="ml-16 mb-40">
              <div className="heading-2">Tink Link returned with an error</div>
              <PrettyCode code={error} className="mt-20" />
              {errorMessage && (
                <>
                  <div className="mt-20">and message</div>
                  <PrettyCode code={errorMessage} className="mt-20" />
                </>
              )}
            </div>
          </div>
      </div>
    </>
  );
};
