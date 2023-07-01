import icon1 from '../assets/icons/icon1.svg';
import icon2 from '../assets/icons/icon2.svg';
import icon3 from '../assets/icons/icon3.svg';
import icon4 from '../assets/icons/icon4.svg';
import icon5 from '../assets/icons/icon5.svg';
import icon6 from '../assets/icons/icon6.svg';
import icon7 from '../assets/icons/icon7.svg';
import icon8 from '../assets/icons/icon8.svg';


export const getIconById = (idIcon) => {
  switch (idIcon) {
    case "01d":
      return icon1;
    case "01n":
      return icon2;
    case "02d":
      return icon3;
    case "02n":
      return icon4;
    case "03d":
    case "03n":
      return icon5;
    case "04d":
    case "04n":
      return icon6;
    case "09d":
    case "09n":
      return icon7;
    case "10d":
      return icon8;
  }
};