import { useState } from "react";

interface useMutationState {
  loading: boolean;
  data?: undefined | any;
  error?: undefined | any;
}

type useMutationResult = [(data: any) => void, useMutationState];

export default function useMutation(url: string): useMutationResult {
  const [state, setSate] = useState<useMutationState>({
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
