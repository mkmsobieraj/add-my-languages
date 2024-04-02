import { FC, ReactElement } from "react";
import './section.css';

export const Section: FC<SectionPorps> = ({ children }: SectionPorps): ReactElement => <div className='Section'>{children}</div>


interface SectionPorps {
  children: ReactElement
}