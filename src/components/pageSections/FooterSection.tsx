const FooterSection = () => {
	return (
		<section className="py-14 px-16 flex flex-col items-center text-center" style={{ minHeight: 'calc(100vh - 6rem)' }}>
			<h3 className="text-shadow-gray text-lg font-[500]">FOOTER</h3>
			<h2 className="text-3xl font-bold text-night-black">
				Here Is <span className="text-pink-purple">Footer</span>
			</h2>

			<div className="w-full py-10 overflow-hidden">This is Footer</div>
		</section>
	);
};

export default FooterSection;
