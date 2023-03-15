import React from "react";

const Subscription = () => {
    return (
		<div class="wrapper">
                <section id="subscription">
                    <h2>Subscribe to news letters</h2>
                    <form action="" method="post" id="subscribe-form">
                        <div id ="alert-sub" class="alert hidden">
                            <ul id="alert-list-sub">
                                {/* <li>Please fill Email address</li>
                                <li>Please enter valid email adress.</li> */}
                            </ul>
                        </div>
                        <label for="subemail">Email (mandatory): </label>
                        <input type="email" id="submail" name="subemail" aria-label="submail" placeholder="abc@braveblossoms.com.au" required/>
                        <label for="area" class="dropdown">Areas: </label>
                        <select name="area">
                            <option type="checkbox" value="any" aria-label="any" selected>Any</option>
                            <option type="checkbox" value="hokkaido" aria-label="hokkaido">Hokkaido</option>
                            <option type="checkbox" value="tohoku" aria-label="tohoku">Tohoku</option>
                            <option type="checkbox" value="tohoku" aria-label="kanto">Kanto</option>
                            <option type="checkbox" value="tokai" aria-label="tokai">Tokai</option>
                            <option type="checkbox" value="kansai" aria-label="kansai">Kansai</option>
                            <option type="checkbox" value="shikoku" aria-label="shikoku">Shikoku</option>
                            <option type="checkbox" value="kyushu" aria-label="kyushu">Kyushu</option>
                            <option type="checkbox" value="okinawa" aria-label="Okinawa">Okinawa</option>
                        </select>
                        <input type="submit" id="subscribe-submit" value="Follow Brave Blossoms!" aria-label="submit"/>
                    </form>
                </section>
            </div>
    );
};

export default Subscription;
