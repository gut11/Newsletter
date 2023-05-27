import "./EventSection.css"



const EventSection = () => {
    return (
        <section id="event-section">
        <div id="events-title">
            <img className="idp-event-logo" src="IDP-logo-white.svg"></img>
            <h1 style={{color:"white"}}>Eventos</h1>
        </div>
        <div className="event-container"><div className="no-button"><img src="event1.png" alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit ipsum, commodo gravida suscipit nec, rutrum in dui. Quisque consectetur, lorem id imperdiet fringilla, quam libero ultrices dui, in posuere leo justo id velit. Sed gravida odio a augue scelerisque, sit amet elementum diam rutrum. Suspendisse potenti. Quisque molestie nisl et tortor rhoncus maximus. Fusce purus purus, viverra vel tortor ac, egestas malesuada ex. Quisque tincidunt nisi nibh, scelerisque tincidunt massa pellentesque quis. Cras a velit quam. Donec auctor felis at arcu elementum pharetra. Proin et felis est. Curabitur id sagittis neque. Fusce eget placerat ipsum, vel blandit magna.</p> </div><button>Inscrever-se</button></div>
        <div className="event-container"><div className="no-button"> <img src="event2.png" alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit ipsum, commodo gravida suscipit nec, rutrum in dui. Quisque consectetur, lorem id imperdiet fringilla, quam libero ultrices dui, in posuere leo justo id velit. Sed gravida odio a augue scelerisque, sit amet elementum diam rutrum. Suspendisse potenti. Quisque molestie nisl et tortor rhoncus maximus. Fusce purus purus, viverra vel tortor ac, egestas malesuada ex. Quisque tincidunt nisi nibh, scelerisque tincidunt massa pellentesque quis. Cras a velit quam. Donec auctor felis at arcu elementum pharetra. Proin et felis est. Curabitur id sagittis neque. Fusce eget placerat ipsum, vel blandit magna.</p></div> <button>Inscrever-se</button></div>
        <div className="event-container"><div className="no-button"> <img src="event3.jpeg" alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit ipsum, commodo gravida suscipit nec, rutrum in dui. Quisque consectetur, lorem id imperdiet fringilla, quam libero ultrices dui, in posuere leo justo id velit. Sed gravida odio a augue scelerisque, sit amet elementum diam rutrum. Suspendisse potenti. Quisque molestie nisl et tortor rhoncus maximus. Fusce purus purus, viverra vel tortor ac, egestas malesuada ex. Quisque tincidunt nisi nibh, scelerisque tincidunt massa pellentesque quis. Cras a velit quam. Donec auctor felis at arcu elementum pharetra. Proin et felis est. Curabitur id sagittis neque. Fusce eget placerat ipsum, vel blandit magna.</p></div> <button>Inscrever-se</button> </div>
        </section>
    )
}


export default EventSection;