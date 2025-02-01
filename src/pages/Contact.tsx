import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import CustomCard from '@/components/common/CustomCard';
import ScreenWrapper from '@/components/ScreenWrapper';
import { statusBarData } from '@/store/data';

const Contact = () => {
	const renderLeftContent = () => {
		return (
			<div>
				<div className="flex flex-col">
					<h3 className="text-shadow-gray font-semibold">More info</h3>
					<h2 className="text-3xl font-[900] text-night-black">
						Read More <span className="text-pink-purple">Contact Us</span>
					</h2>
				</div>
				<div className="text-slate-gray">
					<p className="my-4">
						We value every inquiry and are here to assist you with any questions or concerns you may have. Whether you
						need help with our services, have a business inquiry, or simply want to connect, we’re always ready to
						listen.
					</p>
					<p className="my-4">
						At Online Center, customer satisfaction is our priority. Our dedicated team is available to provide you with
						the support and information you need.
					</p>
					<p className="my-4">
						Feel free to reach out through our contact form, email, or phone, and we’ll ensure a prompt response.
					</p>
				</div>
				<h3 className="text-night-black font-bold text-lg mb-3">Why Contact Us?</h3>
				<ul className="font-semibold italic text-slate-gray list-disc list-inside">
					<li className="mb-3">Get quick assistance for your queries.</li>
					<li className="mb-3"> Learn more about our services & offerings.</li>
					<li className="mb-3"> Discuss potential business collaborations.</li>
					<li className="mb-3"> Give feedback to help us improve our services.</li>
				</ul>
				<p className="text-slate-gray italic">
					“Your questions matter to us. Let’s connect and build something great together!”
				</p>
			</div>
		);
	};

	const renderRightContent = () => {
		if (!statusBarData) return;
		return (
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{statusBarData.map(item => (
					<div key={item.id} className="relative w-full flex justify-center my-16">
						<CustomCard shadow="md" className="absolute top-[-65px] z-10 w-24 h-24">
							<div className="text-pink-purple font-[900] text-4xl text-center w-full h-full flex items-center justify-center">
								{item.count}
							</div>
						</CustomCard>
						<CustomCard shadow="md" className="w-full p-7 pt-12">
							<div className="text-night-black font-[900] text-xl text-center">{item.title}</div>
						</CustomCard>
					</div>
				))}
			</div>
		);
	};

	return (
		<ScreenWrapper>
			<CustomBreadcrumb title="Contact Us" description="Say Hello Online Center" />

			<section className="px-16 py-20 mb-16">
				<div className="flex flex-wrap justify-between">
					<div className="w-full lg:w-[45%] mb-5">{renderLeftContent()}</div>
					<div className="w-full lg:w-[45%]">{renderRightContent()}</div>
				</div>
			</section>
		</ScreenWrapper>
	);
};

export default Contact;
