import '../styles/Contact.css';

function Contact() {
    const contacts = [
        { id: 1, name: "GitHub", url: "https://github.com/0xK3rn3l-dev" },
        { id: 2, name: "Telegram", url: "https://t.me/K3rn3l_Dev" },
        { id: 3, name: "Email", url: "mailto:eme175326@gmail.com" } 
    ];

    return (
        <>
            <br />
            <div>
                <h1 className='contact-title'>Contact</h1>
                <hr className="contact-divider" />

                <div className="contact-links">
                    {contacts.map(contact => (
                        <a
                        key={contact.id}
                        href={contact.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-link"
                        >
                        {contact.name}        
                        </a>
                    ))}

                </div>

            </div>
        </>
    )
}

export default Contact;