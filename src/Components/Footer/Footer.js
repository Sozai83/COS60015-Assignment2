import React, {useState} from "react";
import Subscription from "./Subscription"
import FooterBody from "./FooterBody/FooterBody"
import '../../CSS/layout/footer.scss'

const Footer = () => {
	const [subscriptionFormStatus, setSubscriptionFormStatus] = useState(false);
	const onSubmit = () => setSubscriptionFormStatus(true);
	const reappearingFrom = ()=> setSubscriptionFormStatus(false);

    return (
		<footer>
			{subscriptionFormStatus === false && <Subscription onSubmit={onSubmit}/>}
			{subscriptionFormStatus && (
				<div class="Wrapper">
					<section id="Subscription">
						<p>Thank you for subscribing Brave Blossoms!<br/>
						<button onClick={reappearingFrom}>Subscribe more</button></p>
					</section>
				</div>
			)}
			<FooterBody />
		</footer>
    );
};

export default Footer;
