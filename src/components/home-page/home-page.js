import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <h2>Welcome to Ready For Kitten!</h2>
            <p>This web application will help you determine if you are ready for a kitten.</p>
            <Link to="/ready-for-kitten/questions">
                <button className="start-button">Start</button>
            </Link>
        </>
    );
}
