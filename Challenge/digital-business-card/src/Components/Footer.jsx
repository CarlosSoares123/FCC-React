import '../stylesheets/Footer.css'
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import {AiFillSkype} from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";



function Footer(){
  return(
    <div className="recipiente-footer">
      <ul className='recipiente-icon'>
        <li className='icon'><AiFillGithub/></li>
        <li className='icon'><AiFillInstagram/></li>
        <li className='icon'><AiOutlineGoogle/></li>
        <li className='icon'><AiFillSkype/></li>
      </ul>
    </div>
  )
}
export default Footer