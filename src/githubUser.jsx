import React from "react";
import { useQuery } from "react-query";

function fetchUser(username) {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}

export default function GithubUser({ username }) {
  const userQuery = useQuery([username], () => fetchUser(username));
  const date = userQuery.data;
}
