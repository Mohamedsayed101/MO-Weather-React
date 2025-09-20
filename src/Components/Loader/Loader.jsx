import { FadeLoader } from "react-spinners"


export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#000000d4] flex justify-center items-center z-50">
      <FadeLoader color="#3b82f6" size={50} />
    </div>
  );
}
