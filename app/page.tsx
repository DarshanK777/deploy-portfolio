import Image from "next/image";
import profile2 from "@/public/images/profile2.jpg";
import Connect from "@/components/connect";
import { connectMap } from "@/utils/data";
import IconEmbed from "@/components/iconEmbed";
import { flutter, framer, react, redux, tailwind } from "@/utils/image";

export default function Home() {
  return (
    <section className="w-full p-2 px-8">
      <Image
        src={profile2}
        className="w-24 h-38 rounded-lg mb-8"
        alt="profile"
      />

      <h1 className="mb-4 font-bold text-2xl">Hey, I am Darshan. 👋</h1>

      <p className="prose prose-neutral dark:prose-invert mb-4">
        I'm a frontend developer, curently working with Liquid Diamonds. I have
        2+ years of Experience working with React.js{" "}
        <span>
          <IconEmbed url={react} alt="react-native" />
        </span>
        , Redux
        <span>
          <IconEmbed url={redux} alt="redux" />
        </span>
        , and other libraries like TailwindCSS
        <span>
          <IconEmbed url={tailwind} alt="tailwind" />
        </span>
        , framer-motion
        <span>
          <IconEmbed url={framer} alt="framer" />
        </span>
        , etc.
      </p>

      <p className="prose prose-neutral dark:prose-invert mb-4 ">
        I have worked with multiple clients in the previous organization and was
        able to provide them with performant websites to work with. I have also
        have experience working with cross-platform mobile development
        frameworks as Flutter{" "}
        <span>
          <IconEmbed url={flutter} alt="flutter" />
        </span>
        / React Native{" "}
        <span>
          <IconEmbed url={react} alt="react-native" />
        </span>
        .
      </p>

      <p className="prose prose-neutral dark:prose-invert mb-4">
        Other than coding, I love to play video games such as Valorant, Apex,
        CS:GO. I also like being part of online communities like Theo's or Josh
        tried Coding, etc.
      </p>
      <div className="my-10" />
      <h1 className="font-bold text-xl mb-2">Connect</h1>
      <section className="flex flex-wrap">
        {connectMap.map((item) => {
          return (
            <Connect
              key={item.alt}
              iconUrl={item.iconUrl}
              url={item.url}
              labelText={item.label}
              alt={item.alt}
            />
          );
        })}
      </section>
    </section>
  );
}
