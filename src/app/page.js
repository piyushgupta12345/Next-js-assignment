import Header from "./component/Header";
import { FaBell } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="bg-black h-screen text-white w-screen py-[15px] px-[70px] max-[768px]:px-[15px]">
      {/* Header section */}
      <Header />

      {/* main section */}
      <div className=" flex justify-center items-center flex-col gap-[100px]">

        {/* text section */}
        <div className="flex flex-col text-[30px] justify-center items-center gap-[15px]">
          <h1>hello Sir Ji</h1>
          <p className="text-center text-gray-400 text-[23px]">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* bell icon section */}
        {/* first circle */}
        <div className="h-[300px] w-[300px] flex justify-center items-center border-[3px] border-solid border-red-600 rounded-[200px]">

          {/* second circle */}
          <div className="h-[250px] w-[250px] flex justify-center items-center border-[3px] border-solid border-red-600 rounded-[200px]">

            {/* third circle */}
            <div className="h-[200px] w-[200px] flex justify-center items-center border-[3px] border-solid border-red-600 rounded-[200px]">

              {/* fourth circle */}
              <div className="h-[150px] w-[150px] flex justify-center items-center border-[3px] border-solid border-red-600 rounded-[200px]">

                {/* notification bell icons */}
                <div className="bg-red-500 h-[100px] flex justify-center items-center w-[100px] rounded-[60px]">
                  <FaBell className="border-blue-300 text-red-300" size={70} />
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* notification button */}
        <button className="w-[320px] h-[42px] bg-red-500 cursor-pointer hover:bg-red-600 px-[20px] py-[10px] rounded-[10px]">Send Notification</button>

      </div>

    </main>
  );
}
