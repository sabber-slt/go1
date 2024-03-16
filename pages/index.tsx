import { FullPageChat } from "flowise-embed-react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="">
      <div className="fixed top-0 z-50 w-full h-14 bg-yellow-500 hstack justify-between px-5">
        <h1 className="text-black ">Golden Owl</h1>
        <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden">
          <Image
            src="https://raybod.storage.iran.liara.space/Frame%203.png"
            alt="Golden Owl"
            fill
            sizes="100%"
            priority
          />
        </div>
      </div>

      <FullPageChat
        chatflowid="de86ad43-d5af-4806-ab9c-10ac95d08333"
        apiHost="https://flowise.golden-owl.cloud"
        // @ts-ignore
        theme={{
          chatWindow: {
            welcomeMessage: "Hello! We Are Golden Owl. How can we help you?",
            backgroundColor: "#000000",
            fontSize: 16,
            poweredByTextColor: "#303235",
            botMessage: {
              backgroundColor: "#303235",
              textColor: "#f7f8ff",
              showAvatar: true,
              avatarSrc:
                "https://raybod.storage.iran.liara.space/Frame%203.png",
            },
            userMessage: {
              backgroundColor: "#eab308",
              textColor: "#ffffff",
              showAvatar: true,
              avatarSrc:
                "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
            },
            textInput: {
              placeholder: "Type your question",
              backgroundColor: "#303235",
              textColor: "#ffffff",
              sendButtonColor: "#eab308",
            },
          },
        }}
      />
      <div className="fixed bottom-0 w-full h-10 bg-black"></div>
    </div>
  );
};
export default Home;
