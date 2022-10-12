type Props = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const TeamMemberModal = ({isVisible, onClose, children}: Props) => {
  if (!isVisible) return null;

  const handelClose = (e:any) => {
    if (e.target.id === "wrapper") onClose()
  }
  return (
    <div onClick={handelClose} id='wrapper' className="fixed inset-0 bg-navy bg-opacity-25 flex justify-center items-center z-20">
      <div className="flex flex-col mx-8 lg:w-1/3">
        <button onClick={() => onClose()} className="text-red text-4xl place-self-end">X</button>
        <div className="bg-navy text-left text-white p-8">{children}</div>
      </div>
    </div>
  );
};
