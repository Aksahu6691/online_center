import { useState } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '@/store/data';
import CustomCard from '../common/CustomCard';
import { ITeamMember } from '@/types/commont.type';
import { cn } from '@nextui-org/react';
import { BubbleLeftImage, BubbleRightImage } from '@/assets/images';

const TeamMemberSection = () => {
	const [currentTeamMember, setCurrentTeamMember] = useState<ITeamMember>(teamMembers[0]);

	const renderTeamMemberCard = () => {
		if (!teamMembers) return;

		return teamMembers.map(team => (
			<div
				key={team.id}
				className="w-32 flex flex-col gap-1 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
				onClick={() => setCurrentTeamMember(team)}
			>
				<img src={team.photo} alt="error" className="rounded-full" />
				<div className={cn('font-[900]', currentTeamMember.id == team.id ? 'text-pink-purple' : 'text-night-black')}>
					{team.name}
				</div>
				<div className="text-xs text-pink-purple font-bold">{team.designation}</div>
			</div>
		));
	};

	const renderTeamMemberDetailCard = () => {
		return (
			<motion.div
				key={currentTeamMember.id}
				initial={{ x: 0 }}
				animate={{ x: [0, -10, 10, -10, 10, 0] }}
				transition={{ duration: 0.6 }}
				className="flex flex-col items-center"
			>
				<CustomCard shadow="md" className="w-[70%]">
					<div className="flex justify-between">
						<div className="w-[60%] p-8 flex flex-col justify-between">
							<h2 className="text-night-black text-xl font-extrabold">{currentTeamMember.name}</h2>
							<p className="text-slate-gray">{currentTeamMember.description}</p>

							<div className="flex gap-8 text-night-black font-semibold">
								<div className="cursor-pointer">Facebook</div>
								<span>|</span>
								<div className="cursor-pointer">Twitter</div>
								<span>|</span>
								<div className="cursor-pointer">Linkedin</div>
							</div>
							<div className="text-pink-purple underline cursor-pointer">Contact Member</div>
						</div>
						<img src={currentTeamMember.photo} alt="error" className="rounded-md w-[40%] h-[40%]" />
					</div>
				</CustomCard>
			</motion.div>
		);
	};

	return (
		<section
			className="relative py-20 px-16 flex flex-col items-center text-center"
			style={{ minHeight: 'calc(100vh - 6rem)' }}
		>
			<h3 className="text-shadow-gray text-lg font-[500]">OUR TEAM</h3>
			<h2 className="text-3xl font-bold text-night-black">
				Our Team <span className="text-pink-purple">Members</span>
			</h2>

			<div className="w-full py-14 mt-8 flex flex-row flex-wrap gap-8 justify-center items-center">
				{renderTeamMemberCard()}
			</div>

			{renderTeamMemberDetailCard()}

			<img src={BubbleLeftImage} alt="error" className="absolute top-[-50px] left-12" />
			<img src={BubbleRightImage} alt="error" className="absolute top-[-50px] right-12" />
		</section>
	);
};

export default TeamMemberSection;
