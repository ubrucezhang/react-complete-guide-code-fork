import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {
  /* useFetcher(): trigger action/ loader without loading the page/ route that it belongs to, can be used in shared component used in multiple pages; */
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
