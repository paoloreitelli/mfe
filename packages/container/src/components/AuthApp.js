import { mount } from "auth/AuthApp";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export default function AuthApp({ onSignIn }) {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nexPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nexPathname) {
          history.push(nexPathname);
        }
      },
      initialPath: history.location.pathname,
      onSignIn: () => {
        onSignIn();
      },
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref} />;
}
