import { useContext } from "react";
import { UserContext } from "./_app";

const AboutUs = () => {
  const [user, setUser] = useContext(UserContext);
  console.log(user);

  return (
    <>
      <div className="about__hero_section"></div>
      <div className="about__main">
        <h1 className="about__heading">
          About <span>Abian Batch 2018</span>
        </h1>
        <p>
          {
            "Abian Batch 2018 is a friendly social organization. Friends formed a small fund together, first from the side of their classmates and friends  next to the weaker people of the society, sometimes food, sometimes clothes, sometimes a poor girl's weeding grant, sometimes someone's medeical expenses, sometimes someone's funeral. This organization always wants to work with firends in the service of self-humanity."
          }
        </p>
        <ul>
          <li>Phone: 01857678918, 01851268657</li>
          <li>Musapur, Sandwip, Chittagong-4300</li>
          <li>
            <a href="https://abian2018.org" target="_blank" rel="noreferrer">
              abian2018.org
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutUs;
