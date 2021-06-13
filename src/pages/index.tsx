import NextImage from "next/image";

const Page = () => {
  return <div className="container justify-center">
    <div className="flex align-center justify-center">
      <NextImage src="/200.png" width="64" height="64" className="rotation" />
      <h1>200 OK</h1>
    </div>
  </div>;
};
export default Page;
