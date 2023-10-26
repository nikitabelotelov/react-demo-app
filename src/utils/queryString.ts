export function queryString(obj: Record<string, any>): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(obj)) {
    params.append(key, value.toString());
  }
  return params.toString();
}
