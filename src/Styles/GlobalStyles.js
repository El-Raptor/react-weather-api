import { createGlobalStyle } from 'styled-components';
import img from '../Assets/Images/Background/mqbackground.jpg'

export default createGlobalStyle`
  body {
      margin: 0;
      background-image: url(${img});
      background-repeat: no-repeat;
      background-size: cover;
  }
`;

