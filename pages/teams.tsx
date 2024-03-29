import { NextSeo } from "next-seo"
import React from "react"
import MyLink from "../components/MyLink"

type TeamProps = {
    year: Number,
    image: string,
    members: string,
    award?: React.ReactElement,
}
const Team: React.FC<TeamProps> = ({ image, members, year, award }) => {
    return <div className="h-full">
        <h1 className="text-center font-bold text-2xl p-xl">{year} Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
            <div className="w-full h-96 bg-primary-300"
                style={{
                    backgroundImage: `url("${image}")`, backgroundSize: "cover",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center"
                }}>

            </div>
            <div className=" flex flex-col gap-y-1 px-lg	">
                <div>
                    <div className="font-bold inline-block">
                        Members:
                    </div>
                    <div className="inline-block">
                        {members}
                    </div>
                </div>
                {award &&
                    <div>
                        <div className="font-bold inline-block">
                            Award:
                        </div>
                        <div className="inline-block">
                            {award}
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
}
const Teams: React.FC<{}> = () => {
    return <>
        <NextSeo
            title="Past SciBowl Teams"
            description="Look back on the previous teams of Paly Science Bowl. This Tradition has been going on for at least 20 years."
        />
        <h1 className="text-center font-bold text-3xl p-xl">Meet the Team(s)</h1>
        <p className="text-center">Paly has a long tradition of SciBowl. It goes back at least 9 years to 2013, although
            it may go back even further. I will have to consult with the ancients to find the
            first SciBowl team.
        </p>
        <Team
            image="images/2023team.jpg"
            members="Nathan Jiang, Jonathen Yuen, Jeremy Yuen, Matthew Yang, Atticus Kuhn, Johnathen Chen, Austin Krawczyk, Mingyuan Wang, Forrest Chen"
            year={2023}
        />
        <Team
            image="images/2022team.jpg"
            members="Atticus Kuhn, Ronak Monga, Andrew Tao, Kabir Bhatia, Ryan Hwangbo, Matthew Yang (known as Johnathen Chens), April Wu, Jacob, Mingyuan Yang "
            year={2022}
        />
        <Team
            image="images/2018team.jpg"
            members={`Daniel Nemeth,
            Matthew Nemeth,
            Mihir Singhal,
            Celine Wang,
            Chlobalt Blue,
            Alex Sun,
            Daniel Jin,
            Brion Ye,
            Jenny Shi,
            Alborz Bejnood,
            Robbie Selwyn,
            Sonny Young, and
            Eric Tian`}
            year={2018}
        />
        <Team
            image="images/2017team.jpg"
            members={`Leland Ling and Robbie Selwyn`}
            year={2017}
        />

        <Team
            image="images/2015team.jpg"
            members="Samarth Venkatasubramaniam, Andrew Lee, Jasen Liu, Matthew Li and Gary Chen"
            year={2015}
            award={<>Placed 3rd a Regionals. The Paly Voice wrote about this in
                <MyLink href="https://palyvoice.com/99790/news/science-bowl-places-third-at-regional-competition/">Science Bowl places third at regional competition
                </MyLink></>}
        />
        <Team
            image="images/2013team.jpg"
            members="William Zhou Andrew Lee, Max Krawczyk, Joseph Chang,  Travis Chen"
            year={2013}
            award={<>First Paly team to make it to Nationals! The Paly Voice wrote about
                this in <MyLink href="https://palyvoice.com/48641/editorspick/science-bowl-team-prepares-for-nationals/">
                    Science Bowl team prepares for nationals

                </MyLink>, and Palo Alto Online in
                <MyLink href="https://www.paloaltoonline.com/news/2013/02/05/paly-team-headed-to-national-science-bowl">Paly team headed to National Science Bowl
                </MyLink></>}
        />

    </>
}
export default Teams
