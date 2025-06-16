import Clipboard from "../component/Clipboard";
import TestBoard from "../component/TestBoard";

export const Home = () => {

  return (
    <div className="flex w-[100vw] h-[100vh] items-center justify-center gap-2">
      <Clipboard />
      <TestBoard />
    </div>
  );
};
