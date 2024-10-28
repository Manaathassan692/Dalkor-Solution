
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
function SideNav() {
  const [text] = useTypewriter({
    words: ["Welcome to Dalkor Solution,"],
    loop: true, 
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  // Function to display the text with "Our" in blue
  const renderWelcomeText = () => {
    // Split the text to insert a styled "Our"
    const parts = text.split(" ");
    return (
      <>
        {parts[0]} {parts[1]} <span className="text-blue-700">{parts[2]}</span> {parts[3]}
      </>
    );
  };

  return <>
      <div>
        {/* left side */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex-1 pt-5 ml-12">
            <h1 className="text-4xl font-bold text-black mt-9">
              {renderWelcomeText()}
              <Cursor className="text-blue-700" />
            </h1>
            <p className="mt-7 text-lg">
            Dalkor Solution waxee ku saabsantahy in adeega korantada loo badalo qaab aad adiga maamushan karto
             sidee in la joojiyo Dadka qora korontooyinka oo bilkasta wareega taa badalkeeda laga in laga dhigo <br/>
             adeeg marka kaa dhmaado mobilkaaga kaga shuban kartid sida data mobilka oo kale marka ay dhmaato fariin kuusoo dhacdo<br/>
               kadibna ay isla markiiba korontada kaa danto kadibna aad moobilikaaga soo qabatid kadibna aad kushubatid inta aad markaas awoodid 
            </p>
            {/* buttons */}
            <div className="pt-[40px]">
              <Link to="/learmore"><button className="border-2 border-blue-700 rounded-2xl h-9 w-[160px] bg-blue-700 text-white font-semibold hover:bg-black hover:border-black ml-8">
                Learn More
              </button> </Link>
               <Link to="/About"><button className="border-2 border-black rounded-2xl h-9 w-[160px] bg-black text-white font-semibold hover:bg-blue-700 hover:border-blue-700 ml-6">
                About Us
              </button>
               </Link>
            </div>
          </div>

          {/* right side */}
          <div className="flex-1 md:mt-0 pt-[60px] pl-[120px]">
            <img
              className="w-[540px] h-[330px] rounded-e-full"
              src="https://media.istockphoto.com/id/1466373991/fi/vektori/s%C3%A4hk%C3%B6energian-yll%C3%A4pito-s%C3%A4hk%C3%B6asentajien-tiimi-ohjaa-voimajohtoja-voimajohdon.jpg?s=1024x1024&w=is&k=20&c=QfUrn5YKuXvl5UQ-Cks7DkAGnwdDyImwv-1tNwo2PcI="
              alt="Business people talking"
            />
          </div>
        </div>
      </div>
    </>
  
}

export default SideNav;










