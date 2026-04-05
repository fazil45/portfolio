import { socials } from "./profile";

export const Footer = () => {
  return (
    <div>
        <div className="text-3xl font-semibold flex items-center justify-center">Contact</div>
      <div className="flex items-center justify-between mt-8 mb-12">

        <div className="text-lg text-neutral-400">Email: mdfazil846@gmail.com</div>
        <div>
          <div className="flex items-center justify-center gap-4">
            {socials.map((details) => {
              const Icon = details.icon;
              return (
                <div key={details.id}>
                    <a
                  href={details.link}
                  target="_blank"
                  
                  className="flex items-center justify-center text-neutral-300 hover:scale-102 hover:text-white gap-1 p-1 border rounded text-sm cursor-pointer"
                >
                  <Icon />
                  {details.name}
                </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
