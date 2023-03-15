import React from 'react'

const GameInfo = () => {

  return (
	  <div>
	  	<section id="matches_2023" className="match-wrap">
                    <section className="match_card">
                        <table>
                            <tr className="match_title">
                                <th colspan="2">Lipovitan D Challenge Cup 2023</th>
                            </tr>
                            <tr className="match_teams">
                                <th>Game: </th>
                                <td>
                                    <img src="./img/teams/new_zealand.png" alt="NZ" className="team"/>
                                    <div className="teams">New Zealand vs Japan</div>
                                    <img src="./img/teams/jpn.png" alt="Japan" className="team"/>
                                </td>
                            </tr>
                            <tr className="match_schedule">
                                <th>Date: </th>
                                <td>
                                    <table>
                                        <tr>
                                            <td className="match_date">08 July, 2023</td>
                                        </tr>
                                        <tr>
                                            <td className="match_time">4:30PM</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr className="match_place">
                                <th>Place: </th>
                                <td>Tokyo, Japan</td>
                            </tr>
                        </table>
                        <div className="map">
                            <h4>Map:</h4>
                            <div>
                                <div className="gmap_canvas">
                                    <iframe width="400" height="300" src="https://maps.google.com/maps?q=chichibu%20stadium&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                                </div>
                            </div>
                            <address><b>Address: </b>2 Chome-8-35 Kitaaoyama, Minato City, Tokyo 107-0061</address>
                            <b>Phone: </b><a href="tel:+81334013881" className="phone">+81-33-401-3881</a>
                        </div>
                        <div className="buy-ticket">
                            <a href="http://en.rugby-japan.jp/ticket/" target="_blank" className="button">Buy ticket</a>
                        </div>
                    </section>
                    <section className="match_card">
                        <table>
                            <tr className="match_title">
                                <th colspan="2">2023 Lipovitan-D Rugby Championship</th>
                            </tr>
                            <tr className="match_teams">
                                <th>Game: </th>
                                <td>
                                    <img src="./img/teams/samoa.gif" alt="Samoa" className="team"/>
                                    <div className="teams">Samoa vs Japan</div>
                                    <img src="./img/teams/jpn.png" alt="Japan" className="team"/>
                                </td>
                            </tr>
                            <tr className="match_schedule">
                                <th>Date: </th>
                                <td>
                                    <table>
                                        <tr>
                                            <td className="match_date">22 July, 2023</td>
                                        </tr>
                                        <tr>
                                            <td className="match_time">4:30PM</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr className="match_place">

                                <th>Place: </th>
                                <td>Sapporo, Japan</td>
                            </tr>
                        </table>
                        <div className="map">
                            <h4>Map:</h4>
                            <div>
                                <div className="gmap_canvas">
                                    <iframe width="400" height="300" src="https://maps.google.com/maps?q=sapporo%20dome&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                                </div>
                            </div>
                            <address><b>Address: </b>1 Hitsujigaoka, Toyohira Ward, Sapporo, Hokkaido 062-0045</address>
                            <b>Phone: </b><a href="tel:+8111850100" className="phone">+81-11-850-1000</a>
                        </div>
                        <div className="buy-ticket">
                            <a href="http://en.rugby-japan.jp/ticket/" target="_blank" className="button">Buy ticket</a>
                        </div>
                    </section>
                    <section className="match_card">
                        <table>
                            <tr className="match_title">
                                <th colspan="2">2023 Lipovitan-D Rugby Championship</th>
                            </tr>
                            <tr className="match_teams">
                                <th>Game: </th>
                                <td>
                                    <img src="./img/teams/tonga.jpg" alt="Tonga"  className="team"/>
                                    <div className="teams">Tonga vs Japan</div>
                                    <img src="./img/teams/jpn.png" alt="Japan"  className="team"/>
                                </td>
                            </tr>
                            <tr className="match_schedule">
                                <th>Date: </th>
                                <td>
                                    <table>
                                        <tr>
                                            <td className="match_date">29 July, 2023</td>
                                        </tr>
                                        <tr>
                                            <td className="match_time">4:30PM</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr className="match_place">
                                <th>Place: </th>
                                <td>Japan</td>
                            </tr>
                        </table>
                        <div className="map">
                            <h4>Map:</h4>
                            <div>
                                <div className="gmap_canvas">
                                    <iframe width="400" height="300" src="https://maps.google.com/maps?q=Hanazono%20Rugby%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                                </div>
                            </div>
                            <address><b>Address: </b>1 Chome-1-1 Matsubaraminami, Higashiosaka, Osaka </address>
                            <b>Phone: </b><a href="tel:+81729613668" className="phone">+81-72-961-3668</a>
                        </div>
                        <div className="buy-ticket">
                            <a href="http://en.rugby-japan.jp/ticket/" target="_blank" className="button">Buy ticket</a>
                        </div>
                    </section>
                </section>
                <section id="matches_2022" className="match-wrap hidden">
                    <section className="match_card">
                        <table>
                            <tr className="match_title">
                                <th colspan="2">2022 Lipovitan-D Rugby Tour</th>
                            </tr>
                            <tr className="match_teams">
                                <th>Game: </th>
                                <td>
                                    <img src="./img/teams/france.png" alt="France" className="team"/>
                                    <div className="teams">France vs Japan</div>
                                    <img src="./img/teams/jpn.png" alt="Japan" className="team"/>
                                </td>
                            </tr>
                            <tr className="result">
                                <th>Result: </th>
                                <td>35 vs 17</td>
                            </tr>
                            <tr className="match_schedule">
                                <th>Date: </th>
                                <td>
                                    <table>
                                        <tr>
                                            <td className="match_date">20 November, 2022</td>
                                        </tr>
                                        <tr>
                                            <td className="match_time">10:00PM</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr className="match_place">
                                <th>Place: </th>
                                <td>Toulouse, France</td>
                            </tr>
                        </table>
                        <div className="highlight">
                            <h3>Highlight</h3>
                            <figure>
                                <iframe width="400" height="315" src="https://www.youtube.com/embed/mAaJeXlOq-A" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                            </figure>
                            <figcaption><i className="credit">Video made by <a href="https://www.youtube.com/@lloydsportschannel3683" target="_blank"> Lloyd Sports Channel </a></i></figcaption>
                        </div>
                    </section>
                    <section className="match_card">
                        <table>
                            <tr className="match_title">
                                <th colspan="2">2022 Lipovitan-D Rugby Tour</th>
                            </tr>
                            <tr className="match_teams">
                                <th>Game: </th>
                                <td>
                                    <img src="./img/teams/England.png" alt="England" className="team"/>
                                    <div className="teams">England vs Japan</div>
                                    <img src="./img/teams/jpn.png" alt="Japan" className="team"/>
                                </td>
                            </tr>
                            <tr className="result">
                                <th>Result: </th>
                                <td>52 vs 13</td>
                            </tr>
                            <tr className="match_schedule">
                                <th>Date: </th>
                                <td>
                                    <table>
                                        <tr>
                                            <td className="match_date">13 November, 2022</td>
                                        </tr>
                                        <tr>
                                            <td className="match_time">12:15AM</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr className="match_place">
                                <th>Place: </th>
                                <td>Tottenham, UK</td>
                            </tr>
                        </table>
                        <div className="highlight">
                            <h3>Highlight</h3>
                            <figure>
                                <iframe width="400" height="315" src="https://www.youtube.com/embed/nn38b5raeXQ" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                            </figure>
                            <figcaption><i className="credit">Video made by <a href="https://www.youtube.com/@AutumnNationsSeries" target="_blank">Autumn Nations Series</a></i></figcaption>
                        </div>
                    </section>
                    <section className="match_card">
                        <table>
                            <tr className="match_title">
                                <th colspan="2">2022 Lipovitan-D Rugby Championship</th>
                            </tr>
                            <tr className="match_teams">
                                <th>Game: </th>
                                <td>
                                    <img src="./img/teams/jpn.png" alt="Japan" className="team"/>
                                    <div className="teams">New Zealand vs Japan</div>
                                    <img src="./img/teams/new_zealand.png" alt="NZ" className="team"/>
                                </td>
                            </tr>
                            <tr className="result">
                                <th>Result: </th>
                                <td>31 vs 38</td>
                            </tr>
                            <tr className="match_schedule">
                                <th>Date: </th>
                                <td>
                                    <table>
                                        <tr>
                                            <td className="match_date">29 October, 2022</td>
                                        </tr>
                                        <tr>
                                            <td className="match_time">2:50PM</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr className="match_place">
                                <th>Place: </th>
                                <td>Tokyo, Japan</td>
                            </tr>
                        </table>
                        <div className="highlight">
                            <h3>Highlight</h3>
                            <figure>
                                <img src="./img/video/Highlight_placeholder.jpg" alt="Place holder image for the youtube video - All black vs Brave Blossoms"/>
                            </figure>
                            <figcaption><i className="credit">Photo by <a href="https://unsplash.com/de/@st_lehner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Stefan Lehner</a> on <a href="https://unsplash.com/photos/7Tw9wLnL74w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></i>
                                <br/>
                                <a href="https://www.youtube.com/watch?v=wAqpHh7ghgU&embeds_euri=http%3A%2F%2F127.0.0.1%3A8080%2F" target="_blank">Watch video on Youtube</a>
                            </figcaption>
                        </div>
                    </section>
                </section>
                <section id="matches_2021" className="match-wrap hidden">
                    <section className="match_card">
                        <table>
                            <tr className="match_title">
                                <th colspan="2">2021 Lipovitan-D Rugby Tour</th>
                            </tr>
                            <tr className="match_teams">
                                <th>Game: </th>
                                <td>
                                    <img src="./img/teams/scotland.png" alt="Scotland" className="team"/>
                                    <div className="teams">Scotland vs Japan</div>
                                    <img src="./img/teams/jpn.png" alt="Japan" className="team"/>
                                </td>
                            </tr>
                            <tr className="result">
                                <th>Result: </th>
                                <td>29 vs 20</td>
                            </tr>
                            <tr className="match_schedule">
                                <th>Date: </th>
                                <td>
                                    <table>
                                        <tr>
                                            <td className="match_date">20 November, 2021</td>
                                        </tr>
                                        <tr>
                                            <td className="match_time">10:00PM</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr className="match_place">
                                <th>Place: </th>
                                <td>Maray, UK</td>
                            </tr>
                        </table>
                        <div className="highlight">
                            <h3>Highlight</h3>
                            <figure>
                                <iframe width="400" height="315" src="https://www.youtube.com/embed/g-poWjFCXiU" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                            </figure>
                            <figcaption><i className="credit">Video made by <a href="https://www.youtube.com/@rugbyworldcupjp" target="_blank">ワールドラグビー 日本チャンネル</a></i></figcaption>
                        </div>
                    </section>
                    <section className="match_card">
                        <table>
                            <tr className="match_title">
                                <th colspan="2">2021 Lipovitan-D Rugby Tour</th>
                            </tr>
                            <tr className="match_teams">
                                <th>Game: </th>
                                <td>
                                    <img src="./img/teams/portugal.png" alt="Portugal" className="team"/>
                                    <div className="teams">Portugal vs Japan</div>
                                    <img src="./img/teams/jpn.png" alt="Japan" className="team"/>
                                </td>
                            </tr>
                            <tr className="result">
                                <th>Result: </th>
                                <td>25 vs 38</td>
                            </tr>
                            <tr className="match_schedule">
                                <th>Date: </th>
                                <td>
                                    <table>
                                        <tr>
                                            <td className="match_date">14 November, 2021</td>
                                        </tr>
                                        <tr>
                                            <td className="match_time">2:10AM</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr className="match_place">
                                <th>Place: </th>
                                <td>Japan</td>
                            </tr>
                        </table>
                        <div className="highlight">
                            <h3>Highlight</h3>
                            <figure>
                                <iframe width="400" height="315" src="https://www.youtube.com/embed/D_EdDO3ltto" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                            </figure>
                            <figcaption><i className="credit">Video made by <a href="https://www.youtube.com/channel/UCBFtpGAWdU0s-kEkykmjQeg" target="_blank">Rugby Z Highlights</a></i></figcaption>
                        </div>
                    </section>
                    <section className="match_card">
                        <table>
                            <tr className="match_title">
                                <th colspan="2">2021 Lipovitan-D Rugby Championship</th>
                            </tr>
                            <tr className="match_teams">
                                <th>Game: </th>
                                <td>
                                    <img src="./img/teams/jpn.png" alt="Japan" className="team"/>
                                    <div className="teams">Australia vs Japan</div>
                                    <img src="./img/teams/australia.jpg" alt="Australia" className="team"/>
                                </td>
                            </tr>
                            <tr className="result">
                                <th>Result: </th>
                                <td>23 - 32</td>
                            </tr>
                            <tr className="match_schedule">
                                <th>Date: </th>
                                <td>
                                    <table>
                                        <tr>
                                            <td className="match_date">23 October, 2021</td>
                                        </tr>
                                        <tr>
                                            <td className="match_time">1:45PM</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr className="match_place">
                                <th>Place: </th>
                                <td>Oita, Japan</td>
                            </tr>
                        </table>
                        <div className="highlight">
                            <h3>Highlight</h3>
                            <figure>
                                <iframe width="400" height="315" src="https://www.youtube.com/embed/id7Pbet5HEI" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                            </figure>
                            <figcaption><i className="credit">Video made by <a href="https://www.youtube.com/channel/UCsMWJnL1aY0g_FBijoRe77g" target="_blank"> Rugby.com.au</a></i></figcaption>
                        </div>
                    </section>
                </section>
	  </div>
  );
};

export default GameInfo;