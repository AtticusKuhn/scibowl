import MyLink from "../components/MyLink";

const Signup: React.FC<{}> = () => {
    const year = new Date().getFullYear();
    const tryout = new Date(`9-24-${year}`);
    const days = Math.floor((tryout.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    return <div className="px-5xl">
        <h1 className="font-bold text-3xl p-3xl text-center">Want to Join SciBowl?</h1>
        <p>
            In order to join SciBowl, you must try out. The tryouts for the {year} season
            start on September 18, which is in {days} days. We will send out more
            information about tryouts via email.
        </p>
        If you want to sign up, please fill out this form, and then we will email you
        <div className="flex align-items-center mx-auto inline-block">
            <iframe
                className="h-screen w-full"
                src="https://docs.google.com/forms/d/e/1FAIpQLSecdzNELd1J74gDaLL-RkHz4KShq0hJMKn4cwLPvrcEjPAAiw/viewform?embedded=true"
                // width="640"
                // height="400"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}>Loading…</iframe>
        </div>
        <h2 className="font-bold text-lg text-center p-xl">How Do Tryouts Work?</h2>
        <p className="text-left px-3xl">
            There are 2 rounds. First, a written test on all subjects of science, and next a
            buzzer round segregated by category. The 10 categories of rounds
            <ol className="list-decimal mx-auto w-2/12	">
                <li>Astronomy</li>
                <li>Chemistry</li>
                <li>Earth And Space</li>
                <li>Energy</li>
                <li>Computer Science</li>
                <li>Biology</li>
                <li>General Science</li>
                <li>Physics</li>
                <li>Earth Science</li>
                <li>Math</li>
            </ol>
            The best way to study is to go on <MyLink href="https://scibowldb.com/">SciBowlDB</MyLink>
            and select only the categories for which you wish to try out. It's a good idea to
            only focus on 1-2 categories because otherwise you will spread yourself too thinly.
        </p>
    </div>
}
export default Signup
