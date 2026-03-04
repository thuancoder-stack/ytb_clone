import { useParams } from "react-router-dom";

export default function Watch() {
  const { id } = useParams();

  return (
    <div>
      <h1>Watch</h1>
      <p>
        Video ID: <b>{id}</b>
      </p>
      <p>Trang Watch (tạm).</p>
    </div>
  );
}