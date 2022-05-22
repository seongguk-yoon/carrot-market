import { useState } from "react";

interface useMutationState<T> {
  loading: boolean;
  data?: T;
  error?: undefined | any;
}

type useMutationResult<T> = [(data: any) => void, useMutationState<T>];

export default function useMutation<T = any> (url: string): useMutationResult<T> {
  const [state, setSate] = useState<useMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: any) {
    setSate((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((data) => setSate((prev) => ({ ...prev, data })))
      .catch((error) => setSate((prev) => ({ ...prev, error })))
      .finally(() => setSate((prev) => ({ ...prev, loading: false })));
  }
  return [mutation, { ...state }];
}
