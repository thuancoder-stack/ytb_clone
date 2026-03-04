import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [params] = useSearchParams();
  const q = params.get("q") || "";

  return (
    <div>
      <h1>Search</h1>
      <p>
        Query: <b>{q}</b>
      </p>
      <p>Trang Search (tạm).</p>
    </div>
  );
}