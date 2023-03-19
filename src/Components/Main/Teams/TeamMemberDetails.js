import React from "react";
import '../../../CSS/layout/team-details.scss'

const TeamMemberDetails = () => {
  return (
    <div className="Overlay Hidden">
                        <section id="TeamDetails">
                            <section className="Details">
                                <a className="Close" href="#">&times;</a>
                                <section className="Bio">
                                    <figure>
                                        <img src="./img/placeholder2.png" alt="fw1"/>
                                    </figure>
                                    <table>
                                        <tr>
                                            <th>Age</th>
                                            <th>Wight</th>
                                            <th>Height</th>
                                            <th>Games</th>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>64</td>
                                            <td>174</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <th>Points</th>
                                            <th>Tries</th>
                                            <th>Conv</th>
                                            <th>Pen</th>
                                        </tr>
                                        <tr>
                                            <td>25</td>
                                            <td>3</td>
                                            <td>2</td>
                                            <td>1</td>
                                        </tr>
                                    </table>
                                </section>
                                <article>
                                    <h2>Name: XXXXX</h2>
                                    <h3>Position: XXXXX</h3>
                                    <h3>Biography</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet. Et quia illum 33 consequatur velit ab voluptas pariatur qui odio voluptatibus ea minima blanditiis.<br/>
                                        Aut ipsa quibusdam ad perspiciatis galisum qui corporis minus aut rerum ipsam est libero nihil.<br/>
                                        Ut suscipit laudantium aut ipsam nostrum sed eveniet nulla non quasi ipsam ut doloribus dolores qui ullam voluptas. Sed architecto praesentium ut iste eius est minima sequi aut quasi quibusdam.
                                    </p>
                                    <div className="SMS">
                                        <a href="twitter">Twitter</a>
                                        <a href="insta">Instagram</a>
                                    </div>
                                </article>
                            </section>
                            <h3 className="News">News</h3>
                            <figure id="News">
                                <figure>
                                    <img src="./img/placeholder2.png" alt="fw1_news1"/>
                                    <figcaption><a href="#">FW1 News1 Test Test</a></figcaption>
                                </figure>
                                <figure>
                                    <img src="./img/placeholder2.png" alt="fw1_news1"/>
                                    <figcaption><a href="#">FW1 News1 Test Test</a></figcaption>
                                </figure>
                                <figure>
                                    <img src="./img/placeholder2.png" alt="fw1_news1"/>
                                    <figcaption><a href="#">FW1 News1 Test Test</a></figcaption>
                                </figure>
                                <figure>
                                    <img src="./img/placeholder2.png" alt="fw1_news1"/>
                                    <figcaption><a href="#">FW1 News1 Test Test</a></figcaption>
                                </figure>
                            </figure>
                        </section>
                    </div>
    );
};

export default TeamMemberDetails;
