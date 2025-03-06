import './team.scss';

export default function Team() {
    return (
        <section className="full__screen team__members">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="creative-title--wrap">
                            <span className="creative-subtitle">team members</span>
                            <h2 className="creative-title">
                                Your online success is <br />
                                our priority
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {teams.map((team) => (
                        <div className="col-md-3 creative-team--block" key={team.id}>
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <img src={team.image} alt={team.name} />
                                    </figure>
                                    <div className="info-box">
                                        <h4 className="name">{team.name}</h4>
                                        <span className="designation">{team.designation}</span>
                                        <span className="share-icon fa fa-share-alt"></span>
                                        <p>{team.description}</p>
                                        <div className="social-links">
                                            <a href={team.twitterUrl} aria-label="Twitter">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href={team.facebookUrl} aria-label="Facebook">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href={team.dribbbleUrl} aria-label="Dribbble">
                                                <i className="fab fa-dribbble"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

const teams = [
    {
        id: 1,
        name: 'Coriss Ambady',
        image: '/img/avatars/t1.jpg',
        designation: 'Financial Analyst',
        dribbbleUrl: 'https://dribbble.com',
        twitterUrl: 'https://www.twitter.com',
        facebookUrl: 'https://www.facebook.com',
        description: 'Fermentum massa justo sit amet risus morbi leo.'
    },
    {
        id: 2,
        name: 'Cory Zamora',
        image: '/img/avatars/t2.jpg',
        designation: 'Marketing Specialist',
        dribbbleUrl: 'https://dribbble.com',
        twitterUrl: 'https://www.twitter.com',
        facebookUrl: 'https://www.facebook.com',
        description: 'Fermentum massa justo sit amet risus morbi leo.'
    },
    {
        id: 3,
        name: 'Nikolas Brooten',
        image: '/img/avatars/t3.jpg',
        designation: 'Sales Manager',
        dribbbleUrl: 'https://dribbble.com',
        twitterUrl: 'https://www.twitter.com',
        facebookUrl: 'https://www.facebook.com',
        description: 'Fermentum massa justo sit amet risus morbi leo.'
    },
    {
        id: 4,
        name: 'Jackie Sanders',
        image: '/img/avatars/t4.jpg',
        designation: 'Investment Planner',
        dribbbleUrl: 'https://dribbble.com',
        twitterUrl: 'https://www.twitter.com',
        facebookUrl: 'https://www.facebook.com',
        description: 'Fermentum massa justo sit amet risus morbi leo.'
    },
    {
        id: 5,
        name: 'Cory Smith',
        image: '/img/avatars/t5.jpg',
        designation: 'Project Manager',
        dribbbleUrl: 'https://dribbble.com',
        twitterUrl: 'https://www.twitter.com',
        facebookUrl: 'https://www.facebook.com',
        description: 'Fermentum massa justo sit amet risus morbi leo.'
    }
];