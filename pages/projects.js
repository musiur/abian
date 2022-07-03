
const Projects = () => {
    const projectCards = [
        {
            title: "Poverty alleviation",
            paragraph: "'Abian Batch-18' has always been a shelter for helpless people. 'Abian Batch-18' is always vigilant and active in social service activities such as tuition fees of poor meritorious students, cash payment for new admissions of backward students, cash grants for marriage of daughters of financially indigent families."
        },
        {
            title: "Medical",
            paragraph: "ABIAN BATCH-2018, Our walk in the medical field is satisfactory.  Last year, an honorary grant was provided for the medical expenses of a student with cancer.  The Almighty God is the owner of saving people, only a bunch of young people come forward as Uchila."
        },
        {
            title: "Blood donates",
            paragraph: "A mere, a soul Save people with blood.  We have gone ahead many times in blood donation. Becoming a loved one in need day or night, 'Abian Batch-2018' has revealed the great aspect of their humanity."
        },
        {
            title: "Winter clothing",
            paragraph: "One of the aims of our winter clothing distribution program was to distribute warm clothes and blankets among the poor children and old people in Kankan to get relief from the winter night due to the variety of seasons provided by Bidhata."
        },
        {
            title: "Ramadan foodpack",
            paragraph: "With the holy month of Ramadan in mind, the distribution of Ramadan food in the past years was also a commendable initiative of 'Abian Batch-2018'. 'Very good is the gift that is given in secret.' On this principle, we have come up with the food gift of Ramadan in the hands of the internally and externally indigent families of the organization."
        },
        {
            title: "Mariage works",
            paragraph: "We have also become financially involved in the social work that is going to create a new family.  In the best efforts of all the members of the organization, Abian Batch-2018 has left its mark on the marriage of several sisters."
        }
    ]
    return (
        <div className="projects_container">
            <h1 className="heading">Our <span>projects</span></h1>
            <section className="container section-gap">
                <div className="projects_cards_container">
                    {
                        projectCards?.map((item, i) => {
                            const {title, paragraph} = item;
                            return (
                                <div key={i} className="projects_cards">
                                    <h2>{title}</h2>
                                    <p>{paragraph}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Projects;