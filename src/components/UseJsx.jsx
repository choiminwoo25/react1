export default function UseJsx () {
    const name = "React"

    function FormData(date) {
        return new Intl.DateTimeFormat(
            "en-US",
            { weekday:"long"}
        ).format(date);
    }
    return(
        <>
            <h1>Hello, {name}!</h1>
            <p>Today is {FormData(new Date())}</p>
        </>
    );

}