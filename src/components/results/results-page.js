export default function ResultPage() {
    const params = new URLSearchParams(window.location.search);
    const show = params.get('show');

    console.log(show)

    return (
        <>
            <h1>Here is the result!</h1>
            <p>
                {
                    show === "good" ? (
                        "You are ready for a kitten!"
                    ) : (
                        "You are still not ready for a kitten! Talk with a good breeder to receive more information!"
                    )
                }
            </p>
        </>
    )
}