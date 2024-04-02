import { FC } from "react";
import './country.css'
import logo from '../../../static/flags/pl.svg'

export const Country: FC = () => (
  <div className="Box">
    <div className="Circle">
      <img className="Img" src={logo} alt="" />
    </div>
  </div>
)