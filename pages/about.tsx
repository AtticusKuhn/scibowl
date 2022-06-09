const About: React.FC<{}> = () => {
    return <div className="px-3xl">
        <h1 className="font-bold text-3xl p-3xl text-center">What is SciBowl?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 mx-auto w-full h-full">
            <p>
                SciBowl is a lightning-fast science buzzer competition where two teams face off against
                each other. There are four players on each team. The reader presents a question and
                the first person to buzz may answer the question. If the buzzed person answers correctly,
                that team will recieve a bonus question.
            </p>
            <div>
                <div className="w-full h-72"
                    style={{
                        backgroundImage: 'url("images/team.jpg")', backgroundSize: "cover",
                        backgroundRepeat: "repeat",
                        backgroundPosition: "center"
                    }}
                />
            </div>
        </div>
    </div>
}
export default About