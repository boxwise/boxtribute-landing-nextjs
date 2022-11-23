import Image from "next/image";
import { useState } from "react";
import { TeamMemberModal } from "./TeamMemberModal";

export interface IHeroSectionData {
  image: string;
  description: string;
  name: string;
  surname: string;
  role: string;
}

interface IProps {
  teamMemberData: IHeroSectionData;
}

export const TeamMember = ({ teamMemberData }: IProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="m-4 w-2/5 lg:w-auto text-center">
      <button onClick={() => setShowModal(true)} className="hover:opacity-80 focus:outline-none">
        {/* TODO: adjust image hight and width */}
        <Image src={teamMemberData.image} alt={teamMemberData.name} width={350} height={350} />
      </button>
      <div className="text-center">
        <h3>
          {teamMemberData.name} {teamMemberData.surname}
        </h3>
        <h3>{teamMemberData.role}</h3>
      </div>

      <TeamMemberModal isVisible={showModal} onClose={() => setShowModal(false)}>
        <h3>{teamMemberData.name}</h3>
        <p>{teamMemberData.description}</p>
      </TeamMemberModal>
    </div>
  );
};
