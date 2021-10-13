type URLProps = {
  address: string;
  search: { [key: string]: string };
};
export function URL({ address, search }: URLProps) {
  const url = new globalThis.URL(address);

  for (const [key, value] of Object.entries(search)) {
    url.searchParams.append(key, value);
  }
  return String(url);
}
