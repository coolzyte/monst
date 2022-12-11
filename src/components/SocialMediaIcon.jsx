import { facebook, instagram, twitter } from "../assets/images";
const lists = [
  {
    url: "https://facebook.com",
    icon: facebook,
  },
  {
    url: "https://twitter.com",
    icon: twitter,
  },
  {
    url: "https://www.instagram.com",
    icon: instagram,
  },
];

const SocialMediaIcon = () => {
  return (
    <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
      {lists.map((list) => (
        <a className="inline-block px-2" href={list.url}>
          <img src={list.icon} alt="Monst" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcon;
