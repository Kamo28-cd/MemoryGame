import useSWR from "swr";

interface IRequestArgs {
  input: string;
  init: RequestInit;
}

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export const useGetUser = () => {
  const url = "http://custom-url";

  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    users: data,
    isLoading,
    isError: error,
  };
};

export const poster = (requestBody: object[]) => {
  const input = "http://localhost:4001/items";
  let init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(requestBody),
  };

  fetch(input, init)
    .then((res) => {
      res.json();
      console.log("[POSTER RESPONSE]", res);
    })
    .catch((error) => {
      console.log("[POSER ERROR]");
      if (error) throw error;
    });
};
