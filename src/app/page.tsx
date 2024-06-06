import Header from "@components/Header";

export default function Home() {
    return (
        <div className="home container">
            <div className="overlay-container">
                <img className="overlay" src="/images/pip-boy_overlay.png" alt=""/>
            </div>
            <div className="screen">
                <div className="screen-lines"></div>
                <div className="screen-reflection"></div>
                <Header/>
            </div>
            {/* Autres contenus de la page */}
        </div>
    );
}
