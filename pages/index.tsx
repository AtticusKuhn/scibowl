import Button from "../components/Button"
import Heading from "../components/Heading"
import MyLink from "../components/MyLink"
import { path } from "../utils"
const IndexPage: React.FC<{}> = () => {
  return <>
    <h1 className="text-center font-bold text-3xl p-xl">Paly SciBowl</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
      <div className="p-sm">
        <p className="p-sm">
          <MyLink href="https://science.osti.gov/wdts/nsb">Scibowl</MyLink> (short for Science Bowl) is a fun team-based competition
          where different schools race to the buzzer in order to answer questions on every topic
          ranging from curcuits to plants.
        </p>
        <p className="m-lg">
          If this sounds interesting to you,
        </p>
        <div className="flex gap-x-1 justify-around	">
          <Button link={path + "signup"}>Sign Up</Button>
          <Button link={path + "about"}>Learn More</Button>

        </div>
      </div>
      <div className="h-72	">
        <div className="w-full h-full bg-primary-300"
          style={{ backgroundImage: 'url("images/2022team.jpg")', backgroundSize: "cover" }}>
        </div>
        <div>The 2022 Scibowl Team</div>
      </div>
    </div>
  </>
}
export default IndexPage